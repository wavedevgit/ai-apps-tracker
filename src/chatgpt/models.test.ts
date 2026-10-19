import assert from 'node:assert/strict';
import getModels, { mergeModels } from './models.js';
import { parseManifest } from './manifest.js';
import { redactSecrets } from './index.js';

assert.deepEqual(
    getModels(
        'import "./chunk.js"; const models = new Map([[`gpt-6.1-sol`, copy.sol61], [`gpt-6.1-sol-wm`, copy[`sol61`]], [`gpt-6.1-sol`, copy.sol], ["other", copy.nope]]);',
    ),
    [
        {
            id: 'gpt-6.1-sol',
            codenames: ['sol61', 'sol'],
            aliases: ['gpt-6.1-sol-wm'],
        },
    ],
);

assert.deepEqual(
    mergeModels([
        ...getModels(
            'const codenames = new Map([[`gpt-5-6`, copy[`56sol`]], [`gpt-5-6-thinking`, copy.sol56thinking]]);',
        ),
        ...getModels(
            'const models = [{ slug: `gpt-5.6-sol`, aliases: [`gpt-5-6`, `gpt-5-6-thinking`], displayName: `5.6 Sol`, permission: permissions.GPT56SolAccess }];',
        ),
    ]),
    [
        {
            id: 'gpt-5.6-sol',
            codenames: [
                '5.6 Sol',
                '56sol',
                'sol56thinking',
            ],
            aliases: ['gpt-5-6', 'gpt-5-6-thinking'],
        },
    ],
);

assert.equal(
    parseManifest(
        "window.__reactRouterManifest={'version':'build-1','hmr':undefined,'entry':{'module':'/entry.js','imports':[],'css':[]},'routes':{},'url':'/manifest.js'};",
    ).version,
    'build-1',
);

const mapboxToken = `p${'k'}.${'a'.repeat(64)}.${'b'.repeat(22)}`;
assert.equal(
    redactSecrets(`const token = "${mapboxToken}";`),
    'const token = "[REDACTED_MAPBOX_ACCESS_TOKEN]";',
);
