import { writeFile } from 'fs/promises';
import { get } from '../utils/http.js';
import { readFileJson } from '../utils/fs.js';

export default async function scrapeOpenCode() {
    const latest = await get<any[]>(
        'https://api.github.com/repos/anomalyco/opencode/releases/latest',
        true,
        'Mozilla/5.0 (compatible; AIToolsBot/1.0; +https://github.com/wavedevgit/ai-apps-tracker)',
    );
    // opencode provides a nice latest.json file :)
    const latestVersion = await get(
        `https://github.com/anomalyco/opencode/releases/download/${latest.tag_name}/latest.json`,
        true,
        'Mozilla/5.0 (compatible; AIToolsBot/1.0; +https://github.com/wavedevgit/ai-apps-tracker)',
    );

    const old = await readFileJson('./data/opencode/version.json');

    await writeFile(
        './data/opencode/version.json',
        JSON.stringify(latestVersion),
    );
}
