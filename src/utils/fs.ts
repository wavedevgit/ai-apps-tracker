import { mkdir, readFile } from 'fs/promises';

export async function mkdirSafe(path: string, opts?: { recursive: boolean }) {
    try {
        return await mkdir(path, { recursive: opts?.recursive });
    } catch {
        return;
    }
}

export async function readFileJson(path: string) {
    return JSON.parse(await readFile(path, 'utf-8'));
}
