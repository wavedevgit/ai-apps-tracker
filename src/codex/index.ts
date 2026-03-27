import { writeFile } from 'fs/promises';
import { get } from '../utils/http.js';
import { readFileJson } from '../utils/fs.js';

// codex is already open source, so we just track its version and diffs
export default async function scrapeCodex() {
    const releases = (
        await get<any[]>(
            'https://api.github.com/repos/openai/codex/releases',
            true,
            'Mozilla/5.0 (compatible; AIToolsBot/1.0; +https://github.com/wavedevgit/ai-apps-tracker)',
        )
    ).sort(
        (a: any, b: any) =>
            new Date(b.published_at).getTime() -
            new Date(a.published_at).getTime(),
    );
    const latest = releases[0];
    const previous = releases[1];

    // we only care about these fields
    const version = {
        branch: latest.target_commitish,
        url: latest.html_url,
        name: latest.name,
        tag_name: latest.tag_name,
        published_at: latest.published_at,
        created_at: latest.created_at,
        diff_url: `https://github.com/openai/codex/compare/${previous.tag_name}...${latest.tag_name}`,
        binaries: latest.assets.map((asset: any) => ({
            url: asset.browser_download_url,
            name: asset.name,
            digest: asset.digest,
            created_at: asset.created_at,
            content_type: asset.content_type,
        })),
    };

    const old = await readFileJson('./data/codex/version.json');

    await writeFile('./data/codex/version.json', JSON.stringify(version));
}
