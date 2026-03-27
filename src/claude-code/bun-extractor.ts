// credits to https://github.com/vibheksoni/unbuned/blob/master/unbuned.py for original script
// this was just rewritten using claude to ts
// it uses same logic

import fs from 'fs';
import path from 'path';

interface BunSectionResult {
    offset: number | null;
    size: number | null;
}

function findBunSection(data: Buffer, peOffset: number): BunSectionResult {
    const numSections = data.readUInt16LE(peOffset + 6);
    const optionalHeaderSize = data.readUInt16LE(peOffset + 20);
    const sectionTableOffset = peOffset + 24 + optionalHeaderSize;

    for (let i = 0; i < numSections; i++) {
        const sectionOffset = sectionTableOffset + i * 40;
        const sectionNameBuffer = data.slice(sectionOffset, sectionOffset + 8);
        const nullIndex = sectionNameBuffer.indexOf(0x00);
        const sectionName = sectionNameBuffer
            .toString('ascii', 0, nullIndex >= 0 ? nullIndex : 8)
            .trim();

        if (sectionName === '.bun') {
            const virtualSize = data.readUInt32LE(sectionOffset + 8);
            const rawSize = data.readUInt32LE(sectionOffset + 16);
            const rawOffset = data.readUInt32LE(sectionOffset + 20);
            return {
                offset: rawOffset,
                size: Math.min(virtualSize, rawSize),
            };
        }
    }

    return { offset: null, size: null };
}

function isNonPrintable(byte: number): boolean {
    return byte > 127 || (byte < 32 && ![9, 10, 13].includes(byte));
}

/**
 * Detect where JavaScript ends and binary data begins.
 *
 * @param bundle - JavaScript bundle data
 * @param chunkSize - Size of chunks to analyze
 * @param threshold - Non-printable ratio threshold
 * @returns Offset where binary data starts
 */
function findJsBoundary(
    bundle: Buffer,
    chunkSize: number = 1000,
    threshold: number = 0.3,
): number {
    const maxAnalyze = Math.min(bundle.length, 50_000_000);

    for (let i = 0; i < maxAnalyze; i += chunkSize) {
        const chunk = bundle.slice(i, i + chunkSize);
        if (chunk.length === 0) break;

        let nonPrintable = 0;
        for (const byte of chunk) {
            if (isNonPrintable(byte)) {
                nonPrintable++;
            }
        }

        const ratio = nonPrintable / chunk.length;
        if (ratio > threshold) {
            return i;
        }
    }

    return bundle.length;
}

/**
 * Refine JavaScript boundary by detecting end markers.
 *
 * @param bundle - JavaScript bundle data
 * @param initialEnd - Initial boundary offset
 * @returns Refined boundary offset
 */
function refineBoundary(bundle: Buffer, initialEnd: number): number {
    const nextData = bundle.slice(initialEnd, initialEnd + 2000);
    let asciiCount = 0;

    for (let i = 0; i < Math.min(500, nextData.length); i++) {
        const byte = nextData[i];
        if (byte >= 32 && byte < 127) {
            asciiCount++;
        }
    }

    if (asciiCount <= 50) {
        return initialEnd;
    }

    const markers = [
        Buffer.from('//# debugId='),
        Buffer.from('//# sourceMappingURL='),
        Buffer.from('})();'),
    ];

    for (const marker of markers) {
        const markerPos = nextData.indexOf(marker);
        if (markerPos >= 0) {
            const lineEnd = nextData.indexOf('\n', markerPos);
            if (lineEnd >= 0) {
                const checkAfter = nextData.slice(lineEnd + 1, lineEnd + 101);
                if (checkAfter.length > 0) {
                    let binaryCount = 0;
                    for (const byte of checkAfter) {
                        if (isNonPrintable(byte)) {
                            binaryCount++;
                        }
                    }
                    const binaryRatio = binaryCount / checkAfter.length;
                    if (binaryRatio > 0.4) {
                        return initialEnd + lineEnd + 1;
                    }
                }
            }
        }
    }

    for (let i = 0; i < Math.min(1000, nextData.length); i++) {
        const byte = nextData[i];
        if ([59, 125, 41].includes(byte)) {
            // ; } )
            const checkAhead = nextData.slice(i + 1, i + 101);
            if (checkAhead.length > 0) {
                let binaryCount = 0;
                for (const b of checkAhead) {
                    if (isNonPrintable(b)) {
                        binaryCount++;
                    }
                }
                const binaryRatio = binaryCount / checkAhead.length;
                if (binaryRatio > 0.5) {
                    return initialEnd + i + 1;
                }
            }
        }
    }

    return initialEnd;
}

export function extractBunJs(exePath: string, outputDir: string): boolean {
    const resolvedPath = path.resolve(exePath);

    if (!fs.existsSync(resolvedPath)) {
        console.error(`Error: File not found: ${resolvedPath}`);
        return false;
    }

    const data = fs.readFileSync(resolvedPath);
    let jsStart: number | null = null;

    // Check for PE executable (Windows)
    if (data[0] === 0x4d && data[1] === 0x5a) {
        // MZ
        const peOffset = data.readUInt32LE(0x3c);
        if (
            data[peOffset] === 0x50 &&
            data[peOffset + 1] === 0x45 &&
            data[peOffset + 2] === 0x00 &&
            data[peOffset + 3] === 0x00
        ) {
            // PE\x00\x00
            const result = findBunSection(data, peOffset);
            jsStart = result.offset;
        }
    }

    // Check for magic bytes
    if (jsStart === null) {
        const magic = Buffer.from([0xe5, 0x02, 0x80, 0x01]);
        const magicIndex = data.indexOf(magic);
        if (magicIndex !== -1) {
            jsStart = magicIndex;
        }
    }

    if (jsStart === null) {
        console.error('Error: Could not locate JavaScript bundle');
        return false;
    }

    let bundle = data.slice(jsStart);
    const jsMarkerPos = bundle.indexOf('// @bun');

    if (jsMarkerPos === -1) {
        console.error('Error: Could not find JavaScript marker');
        return false;
    }

    bundle = bundle.slice(jsMarkerPos);
    const initialEnd = findJsBoundary(bundle);
    const finalEnd = refineBoundary(bundle, initialEnd);
    const jsData = bundle.slice(0, finalEnd);

    let jsCode: string;
    try {
        jsCode = jsData.toString('utf-8');
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : String(e);
        console.error(`Error: Decoding failed: ${errorMessage}`);
        return false;
    }

    const exeName = path.basename(resolvedPath, path.extname(resolvedPath));

    const outputFile = path.join(outputDir, `${exeName}.js`);

    fs.writeFileSync(outputFile, jsCode, 'utf-8');

    return true;
}
