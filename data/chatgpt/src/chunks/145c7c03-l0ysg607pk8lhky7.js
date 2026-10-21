import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    Qnt as n,
    trt as r,
    z7 as i
} from "./4813494d-tap9fxyhk4ehe0bs.js";
async function a() {
    let e = globalThis.crypto?.subtle;
    if (e == null) throw Error(`Agent identity key generation is unavailable.`);
    let t = s(await e.generateKey({
            name: `Ed25519`
        }, !0, [`sign`, `verify`])),
        [n, r] = await Promise.all([e.exportKey(`raw`, t.publicKey), e.exportKey(`pkcs8`, t.privateKey)]);
    return {
        publicKey: c(new Uint8Array(n)),
        privateKeyPkcs8DerBase64: d(new Uint8Array(r))
    }
}

function o({
    accountId: e,
    agentRuntimeId: t,
    chatgptAccountIsFedramp: n,
    chatgptUserId: r,
    email: i,
    planType: a,
    privateKeyPkcs8DerBase64: o
}) {
    let s = {
        agent_runtime_id: t,
        agent_private_key: o,
        account_id: e,
        chatgpt_user_id: r,
        email: i,
        plan_type: a,
        chatgpt_account_is_fedramp: n
    };
    return [f(g), f(s), p(_)].join(`.`)
}

function s(e) {
    if (`privateKey` in e && `publicKey` in e) return e;
    throw Error(`Agent identity key generation failed.`)
}

function c(e) {
    if (e.byteLength !== h) throw Error(`Agent identity public key has an unsupported format.`);
    let t = new TextEncoder().encode(m),
        n = u(l(t.byteLength), t, l(e.byteLength), e);
    return `${m} ${d(n)}`
}

function l(e) {
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setUint32(0, e), t
}

function u(...e) {
    let t = e.reduce((e, t) => e + t.byteLength, 0),
        n = new Uint8Array(t),
        r = 0;
    for (let t of e) n.set(t, r), r += t.byteLength;
    return n
}

function d(e) {
    let t = ``;
    for (let n of e) t += String.fromCharCode(n);
    return globalThis.btoa(t)
}

function f(e) {
    return p(JSON.stringify(e))
}

function p(e) {
    return d(new TextEncoder().encode(e)).replaceAll(`+`, `-`).replaceAll(`/`, `_`).replaceAll(`=`, ``)
}
var m, h, g, _, v = e((() => {
    m = `ssh-ed25519`, h = 32, g = {
        alg: `none`,
        typ: `JWT`
    }, _ = `sig`
}));

function y() {
    return n(`2391622925`).get(`use_backend_generated_jwt`, !1)
}

function b(e) {
    return [`agent-identities`, e]
}

function x(e) {
    return [`service-account-share`, e]
}

function S({
    cursor: e,
    includeRevoked: n = !0,
    limit: r = 100,
    query: i,
    scope: a,
    signal: o
}) {
    return t.safeGet(`/wham/agent-identities`, {
        parameters: {
            query: {
                cursor: e,
                include_revoked: n,
                limit: r,
                query: i,
                scope: a
            }
        },
        signal: o
    })
}

function C({
    cursor: e,
    limit: n = 100,
    query: r,
    scope: i,
    signal: a
}) {
    return t.safeGet(`/wham/auth-credentials`, {
        parameters: {
            query: {
                cursor: e,
                limit: n,
                query: r,
                scope: i
            }
        },
        signal: a
    })
}

function w({
    signal: e
} = {}) {
    return t.safeGet(`/wham/auth-credentials/available-scopes`, {
        signal: e
    })
}
async function T({
    signal: e
}) {
    return (await Promise.all([E({
        signal: e
    }), D({
        signal: e
    })])).some(Boolean)
}

function E({
    signal: e
}) {
    return O({
        fetchPage: t => S({
            cursor: t,
            includeRevoked: !1,
            limit: H,
            scope: `workspace`,
            signal: e
        }),
        matches: e => !e.revoked && !e.expired
    })
}

function D({
    signal: e
}) {
    return O({
        fetchPage: t => C({
            cursor: t,
            limit: H,
            scope: `workspace`,
            signal: e
        }),
        matches: e => N(e.scopes).includes(`codex`) && !e.revoked && !e.expired
    })
}
async function O({
    fetchPage: e,
    matches: t
}) {
    let n, r = new Set;
    do {
        let i = await e(n);
        if (i.items.some(t)) return !0;
        if (n = i.cursor, n == null || r.has(n)) return !1;
        r.add(n)
    } while (n != null);
    return !1
}
async function k() {
    await t.safePost(`/wham/agent-identities/prepare-create`, {})
}
async function A(e) {
    await t.safePost(`/wham/auth-credentials/prepare-create`, {
        requestBody: {
            scopes: [...new Set(e.map(e => B[e]))]
        }
    })
}
async function j(e) {
    let {
        name: n,
        useCases: r,
        version: i
    } = e;
    if (i === `v2`) {
        if (e.ttl == null) throw Error(`Personal access tokens must have an expiration`);
        let i = [...new Set(r.map(M))],
            a = {
                name: n,
                scopes: i,
                ttl: e.ttl
            },
            o = await t.safePost(`/wham/auth-credentials`, {
                requestBody: a
            });
        if (!P(o.scopes, i)) throw await I(o.credential_id).catch(() => void 0), Error(`Created access token scopes did not match the requested scopes`);
        return {
            accessToken: o.access_token
        }
    }
    let {
        ttl: s
    } = e;
    if (y()) {
        let e = {
            name: n,
            ttl: s
        };
        return {
            accessToken: (await t.safePost(`/wham/agent-identities/jwt`, {
                requestBody: e
            })).agent_identity
        }
    }
    let c = await a(),
        l = {
            agent_public_key: c.publicKey,
            name: n,
            ttl: s
        },
        u = await t.safePost(`/wham/agent-identities`, {
            requestBody: l
        });
    return {
        accessToken: o({
            accountId: u.account_id,
            agentRuntimeId: u.agent_runtime_id,
            chatgptAccountIsFedramp: u.chatgpt_account_is_fedramp,
            chatgptUserId: u.chatgpt_user_id,
            email: u.email,
            planType: u.plan_type,
            privateKeyPkcs8DerBase64: c.privateKeyPkcs8DerBase64
        })
    }
}

function M(e) {
    return B[e]
}

function N(e) {
    return e === void 0 ? [`codex`] : V.filter(t => e.includes(M(t)))
}

function P(e, t) {
    if (e === void 0) return !1;
    let n = new Set(e),
        r = new Set(t);
    return n.size === r.size && [...r].every(e => n.has(e))
}

function F(e) {
    return t.safeDelete(`/wham/agent-identities/{agent_runtime_id}`, {
        parameters: {
            path: {
                agent_runtime_id: e
            }
        }
    })
}

function I(e) {
    return t.safeDelete(`/wham/auth-credentials/{credential_id}`, {
        parameters: {
            path: {
                credential_id: e
            }
        }
    })
}
var L, R, z, B, V, H, U = e((() => {
    i(), r(), v(), L = `chatgpt.workspace.feature.allow-codex-local-access.access`, R = `chatgpt.workspace.security.codex-access.allow`, z = `chatgpt.workspace.feature.hermes.access`, B = {
        codex: L,
        codex_security: R,
        workspace_agents: z
    }, V = [`codex`, `codex_security`, `workspace_agents`], H = 100
}));
export {
    x as a, S as c, k as d, A as f, b as i, C as l, I as m, N as n, T as o, F as p, j as r, U as s, L as t, w as u
};
//# sourceMappingURL=145c7c03-l0ysg607pk8lhky7.js.map