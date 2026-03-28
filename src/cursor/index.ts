import { downloadFile, get } from '../utils/http.js';
import * as cheerio from 'cheerio';
import { execCmd } from '../utils/shell.js';
import { rm, writeFile } from 'fs/promises';
import { readFileJson } from '../utils/fs.js';
import { diffCursor } from '../notifications/index.js';
import { resolve } from 'path';

const BASE_URL = 'https://cursor.com';
const DOWNLOAD_PAGE = BASE_URL + '/download';
const DOWNLOAD_URL_REGEX =
    /{return`(?<url>https:\/\/api2\.cursor\.sh\/updates\/download\/\w+\/\${[\w_$]+}\/cursor\/[\d.]+)`}/m;

export default async function scrapeCursorAI(): Promise<void> {
    const downloadPageHtml = await get(DOWNLOAD_PAGE);
    const $ = cheerio.load(downloadPageHtml);

    const scripts = $('script')
        .map((_, el) => $(el).attr('src'))
        .get()
        .filter((src): src is string => Boolean(src));
    let downloadUrl = undefined;
    for (const script of scripts) {
        if (!script) continue;
        const content = await get(BASE_URL.concat(script));
        downloadUrl = content.match(DOWNLOAD_URL_REGEX)?.groups?.url;
        if (downloadUrl) break;
    }
    if (!downloadUrl) {
        console.log('Failed to download cursor source code');
        return;
    }
    // replace ${..} with platform we need
    // linux-x64 is appimage for x64 linux
    // appimage is the easiest one to extract src from
    downloadUrl = downloadUrl.replace(/\${[\w_$]+}/, 'linux-x64');

    const old = await readFileJson('./data/cursor/version.json');

    await downloadFile(downloadUrl, './data/cursor/temp.AppImage');
    try {
        await execCmd(`chmod +x ./data/cursor/temp.AppImage`, {
            skipStdout: true,
        });
        console.log('AppImage is now executable.');

        await execCmd(`./data/cursor/temp.AppImage --appimage-extract`, {
            skipStdout: true,
        });
        console.log('AppImage extracted successfully.');

        await execCmd(`mv ./squashfs-root/* ./data/cursor/app/`, {
            skipStdout: true,
        });
        console.log('Extraction moved to ./data/cursor/app/.');

        await execCmd(`rm -rf ./squashfs-root`, { skipStdout: true });
        console.log('Cleanup complete.');

        const version = { version: downloadUrl.split('/').slice(-1)[0] };
        console.log('Version detected:', version.version);
    } catch (error) {
        console.error('Error during AppImage setup:', error);
    }
    const version = { version: downloadUrl.split('/').slice(-1)[0] };
    diffCursor(old, version);
    await writeFile('./data/cursor/version.json', JSON.stringify(version));
    await rm('./data/cursor/temp.AppImage', { force: true });
}
