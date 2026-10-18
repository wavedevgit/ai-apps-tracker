import { get } from '../utils/http.js';
import * as acorn from 'acorn';
import type { ChatGptManifest } from '../types.js';
import { CHATGPT_URL, MANIFEST } from './constants.js';

// chatgpt only links the manifest in the html it serves to clients that don't
// look like a browser (a real one sends Sec-Fetch-* headers and gets the
// unauth-mweb shell instead), and cloudflare 403s often enough that one try
// isn't enough

function astValue(node: acorn.Node): unknown {
    switch (node.type) {
        case 'Literal':
            return (node as acorn.Literal).value;
        case 'Identifier': {
            const identifier = node as acorn.Identifier;
            if (identifier.name === 'undefined') return undefined;
            throw new Error(`unsupported manifest identifier ${identifier.name}`);
        }
        case 'ArrayExpression':
            return (node as acorn.ArrayExpression).elements.map((element) =>
                element ? astValue(element) : null,
            );
        case 'ObjectExpression': {
            const value: Record<string, unknown> = {};
            for (const property of (node as acorn.ObjectExpression).properties) {
                if (property.type !== 'Property' || property.computed)
                    throw new Error('unsupported manifest property');

                const key =
                    property.key.type === 'Identifier'
                        ? property.key.name
                        : String((property.key as acorn.Literal).value);
                value[key] = astValue(property.value);
            }
            return value;
        }
        default:
            throw new Error(`unsupported manifest node ${node.type}`);
    }
}

export function parseManifest(body: string): ChatGptManifest {
    const source = body.slice(body.indexOf('=') + 1).replace(/;\s*$/, '');
    try {
        return JSON.parse(source) as ChatGptManifest;
    } catch {
        return astValue(
            acorn.parseExpressionAt(source, 0, { ecmaVersion: 'latest' }),
        ) as ChatGptManifest;
    }
}

export async function getManifest(): Promise<ChatGptManifest> {
    for (let attempt = 0; attempt < 5; attempt++) {
        const hash = (await get(CHATGPT_URL))?.match(MANIFEST)?.[1];
        if (!hash) continue;

        const url = `https://chatgpt.com/cdn/assets/manifest-${hash}.js`;
        const body: string = await get(url);
        if (!body) continue;

        // the file is `window.__reactRouterManifest={...};`
        try {
            return parseManifest(body);
        } catch {
            continue;
        }
    }

    throw new Error('could not load the chatgpt manifest');
}
