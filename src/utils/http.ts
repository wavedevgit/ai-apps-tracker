import fs from 'fs';
import { Readable } from 'stream';
import { ReadableStream } from 'stream/web';

export async function get<T>(
    url: string,
    json?: boolean,
    userAgent?: string,
): Promise<T | any> {
    try {
        const request = await fetch(url, {
            headers: { 'user-agent': userAgent || '' },
        });
        return json ? await request.json() : await request.text();
    } catch (err) {
        console.log('request failed', url, json ? 'parsed with json' : '', err);
        return;
    }
}

export async function downloadFile(
    url: string,
    filePath: string,
): Promise<void> {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);

    if (!res.body) throw new Error('Response body is empty');

    const fileStream = fs.createWriteStream(filePath);
    const readable = Readable.fromWeb(res.body as ReadableStream<unknown>);

    return new Promise((resolve, reject) => {
        readable.pipe(fileStream);
        fileStream.on('finish', () => {
            fileStream.close();
            // Small delay to ensure file is released
            setTimeout(resolve, 100);
        });
        fileStream.on('error', reject);
        readable.on('error', reject);
    });
}
