import { rm, writeFile } from 'fs/promises';
import { downloadFile, get } from '../utils/http.js';
import path from 'path';
import { extractBunJs } from './bun-extractor.js';
import { readFileJson } from '../utils/fs.js';
import { diffClaudeCode } from '../notifications/index.js';

const INSTALLER_URL = 'https://claude.ai/install.sh';

export default async function scrapeClaudeCode() {
    const installer: string = await get(INSTALLER_URL);
    const GCS_BUCKET = installer.match(
        /GCS_BUCKET="(https:\/\/storage\.googleapis\.com\/claude-code-dist-[\s\S]+\/claude-code-releases)"/,
    )?.[1];
    if (!GCS_BUCKET) {
        console.log(
            'Failed to download claude code binaries as no gcs bucket was found in the installer',
        );
        return;
    }

    // grab latest version manifest
    const version = await get(GCS_BUCKET.concat('/latest'));
    const manifest = await get(
        GCS_BUCKET.concat('/', version, '/manifest.json'),
        true,
    );
    const binary = manifest.platforms['win32-x64'].binary;
    const binaryPath = path.join('./data/claude-code/', path.basename(binary));

    const old = await readFileJson('./data/claude-code/version.json');

    diffClaudeCode(old, manifest);
    await writeFile(
        './data/claude-code/version.json',
        JSON.stringify(manifest, null, 4),
    );

    await downloadFile(
        GCS_BUCKET.concat('/', version, '/win32-x64/', binary),
        binaryPath,
    );
    extractBunJs(binaryPath, './data/claude-code/');
    await rm(binaryPath, { force: true });
}
