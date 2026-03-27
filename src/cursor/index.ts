import { downloadFile, get } from '../utils/http.js';
import * as cheerio from 'cheerio';
import { execCmd } from '../utils/shell.js';
import { rm, writeFile } from 'fs/promises';
import { readFileJson } from '../utils/fs.js';

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

    const old = await readFileJson('./data/codex/version.json');

    await downloadFile(downloadUrl, './data/cursor/temp.AppImage');
    await execCmd(
        'chmod +x ./data/cursor/temp.AppImage && ./data/cursor/temp.AppImage --appimage-extract && mv ./squashfs-root ./data/cursor/app/ && rm -rf squashfs-root',
        { skipStdout: true },
    );
    await writeFile(
        './data/cursor/version.json',
        JSON.stringify({ version: downloadUrl.split('/').slice(-1)[0] }),
    );
    await rm('./data/cursor/temp.AppImage', { force: true });
}
