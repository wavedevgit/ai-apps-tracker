import { rm, writeFile } from 'fs/promises';
import { downloadFile, get } from '../utils/http.js';
import path from 'path';
import { extractBunJs } from './bun-extractor.js';
import { readFileJson } from '../utils/fs.js';
import { diffClaudeCode } from '../notifications/index.js';

const INSTALLER_URL = 'https://claude.ai/install.sh';

export default async function scrapeClaudeCode() {
    const installer: string = await get(INSTALLER_URL);
    const DOWNLOAD_BASE_URL =
        'https://downloads.claude.ai/claude-code-releases';

    if (!installer.includes(DOWNLOAD_BASE_URL)) {
        console.log(
            'Failed to download claude code binaries as no DOWNLOAD_BASE_URL was found in the installer',
        );
        return;
    }

    // grab latest version manifest
    const version = await get(DOWNLOAD_BASE_URL.concat('/latest'));
    const manifest = await get(
        DOWNLOAD_BASE_URL.concat('/', version, '/manifest.json'),
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
        DOWNLOAD_BASE_URL.concat('/', version, '/win32-x64/', binary),
        binaryPath,
    );
    extractBunJs(binaryPath, './data/claude-code/');
    await rm(binaryPath, { force: true });
}
