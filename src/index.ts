import os from 'os';
import scrapeClaudeCode from './claude-code/index.js';
import scrapeCursorAI from './cursor/index.js';
import { mkdirSafe } from './utils/fs.js';
import scrapeCodex from './codex/index.js';
import scrapeOpenCode from './opencode/index.js';
import { sendNotifications } from './notifications/index.js';
import beautifyAll from './utils/jsbeautify.js';

const tools = {
    opencode: scrapeOpenCode,
    'claude-code': scrapeClaudeCode,
    cursor: scrapeCursorAI,
    codex: scrapeCodex,
};

// basic config if we ever need to disable some scraper
const config: Record<string, boolean> = {
    opencode: true,
    'claude-code': true,
    cursor: true,
    codex: true,
};

async function main() {
    process.on('unhandledRejection', (reason, promise) => {
        console.error('[error logs] UNHANDLED PROMISE:', reason, promise);
    });
    if (os.platform() !== 'linux') {
        console.log(
            'Error: The system you are using to run the scraper is not supported.',
        );
        console.log('Linux is required to do most of the tasks.');
        return process.exit(1);
    }
    await mkdirSafe('./data');
    await mkdirSafe('./data/opencode');
    await mkdirSafe('./data/claude-code');
    await mkdirSafe('./data/codex');
    await mkdirSafe('./data/cursor/app', { recursive: true });

    console.log('Running scraping job');
    for (const [tool, runner] of Object.entries(tools)) {
        console.log('running job for', tool);
        if (config[tool])
            runner().catch((error) => {
                console.log('job for', tool, 'has failed');
                console.log(error);
            });
    }
    await beautifyAll();
    await sendNotifications();
}
main();
