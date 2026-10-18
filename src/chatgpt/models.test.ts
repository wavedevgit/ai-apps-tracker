import assert from 'node:assert/strict';
import getModels from './models.js';
import { parseManifest } from './manifest.js';
import { redactSecrets } from './index.js';

assert.deepEqual(
    getModels(
        'import "./chunk.js"; const models = new Map([["gpt-6.1-sol", copy.sol61], ["other", copy.nope]]);',
    ),
    [{ id: 'gpt-6.1-sol', codename: 'sol61' }],
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
