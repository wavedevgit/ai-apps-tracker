import path from 'path';

export function routeIdToPath(id: string) {
    if (!id.startsWith('routes/')) return id + '.js'; // root -> root.js

    const segments = id.slice('routes/'.length).split(/\.(?![^[]*\])/);
    return path.join('routes', ...segments) + '.js';
}

export const CHATGPT_URL = 'https://chatgpt.com';
export const MANIFEST = /\/cdn\/assets\/manifest-([a-z0-9]+)\.js/;
