import { getManifest } from './manifest.js';
import { writeFile } from 'fs/promises';
import { mkdirSafe, readFileJson } from '../utils/fs.js';
import type { ChatGptModel } from '../types.js';
import { get } from '../utils/http.js';
import path from 'path';
import { CHATGPT_URL, routeIdToPath } from './constants.js';
import getModels from './models.js';
import { diffChatGpt } from '../notifications/index.js';

const JS_IMPORT = /(?:\bfrom\s*|\bimport\s*\(?\s*)['"]([^'"]+\.js)['"]/g;
const MAPBOX_TOKEN = /\b[ps]k\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\b/g;

export function redactSecrets(code: string): string {
    return code.replace(MAPBOX_TOKEN, '[REDACTED_MAPBOX_ACCESS_TOKEN]');
}

async function getCode(url: string): Promise<string> {
    for (let attempt = 0; attempt < 3; attempt++) {
        const code = await get<string>(url);
        if (code) return code;
    }
    throw new Error(`could not download ${url}`);
}

export default async function scrapeChatgpt() {
    const manifest = await getManifest();
    const old = await readFileJson('./data/chatgpt/version.json');
    const oldModels: ChatGptModel[] | undefined = await readFileJson(
        './data/chatgpt/models.json',
    );

    // hashed name -> readable id
    const mappings = new Map<string, string>();
    const files = new Set<string>([manifest.url]);
    const models = new Map<string, ChatGptModel>();
    const failed: string[] = [];

    mappings.set(manifest.entry.module, 'entry.js');
    files.add(manifest.entry.module);
    manifest.entry.imports.forEach((module) => files.add(module));

    for (const [id, route] of Object.entries(manifest.routes)) {
        mappings.set(route.module, routeIdToPath(id));
        files.add(route.module);
        route.imports.forEach((module) => files.add(module));
    }

    // Set iteration also visits imports discovered while downloading.
    for (const k of files) {
        const name = mappings.get(k) || path.join('chunks', path.basename(k));
        const dest = path.join('./data/chatgpt/src/', name);
        console.log('at', name);
        await mkdirSafe(path.dirname(dest), { recursive: true });
        const url = new URL(k, CHATGPT_URL);
        let code: string;
        try {
            code = redactSecrets(await getCode(url.href));
        } catch {
            failed.push(url.href);
            continue;
        }
        await writeFile(dest, code);

        for (const match of code.matchAll(JS_IMPORT)) {
            const imported = new URL(match[1], url);
            if (imported.origin === CHATGPT_URL) files.add(imported.pathname);
        }

        if (code.includes('gpt-')) {
            for (const model of getModels(code)) {
                const existing = models.get(model.id);
                if (existing) {
                    existing.codenames = [
                        ...new Set([...existing.codenames, ...model.codenames]),
                    ];
                    existing.aliases = [
                        ...new Set([...existing.aliases, ...model.aliases]),
                    ];
                } else models.set(model.id, model);
            }
        }
    }

    if (failed.length)
        throw new Error(`failed to download:\n${failed.join('\n')}`);

    for (const oldModel of oldModels ?? []) {
        const model = models.get(oldModel.id);
        if (!model) continue;
        model.codenames = [
            ...new Set([
                ...model.codenames,
                ...(oldModel.codenames ??
                    (oldModel.codename ? [oldModel.codename] : [])),
            ]),
        ];
        model.aliases = [
            ...new Set([...model.aliases, ...(oldModel.aliases ?? [])]),
        ];
    }

    const newModels = [...models.values()].sort((a, b) =>
        a.id.localeCompare(b.id),
    );
    diffChatGpt(old, manifest, oldModels, newModels);

    await writeFile(
        './data/chatgpt/files_mappings.json',
        JSON.stringify(Object.fromEntries(mappings.entries()), null, 4),
    );
    if (newModels.length)
        await writeFile(
            './data/chatgpt/models.json',
            JSON.stringify(newModels, null, 4),
        );
    await writeFile('./data/chatgpt/version.json', JSON.stringify(manifest));
}
