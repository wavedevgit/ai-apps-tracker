const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/a4c0593a-ko21pnnc3qtfszg9.js", "assets/c2675c8c-oz03twoan08d72ud.js", "assets/82782bc9-b4xbouzwkkyrfqq2.js", "assets/8b34dbc2-lmwubajnld74ksfm.js", "assets/global-modals-dxg9ukpk.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $v as t,
    Crt as n,
    I7 as r,
    Lat as i,
    M7 as a,
    Pat as o,
    Rat as s,
    SK as c,
    Sat as l,
    _rt as u,
    bat as d,
    ey as f,
    xK as p
} from "./4813494d-mdvd4786a87166cc.js";
import {
    cn as m,
    ln as h
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    RTn as g,
    zTn as _
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function v(e) {
    return typeof e == `object` && !!e && `oauthStateId` in e && typeof e.oauthStateId == `string` && `expiresAt` in e && typeof e.expiresAt == `number` && `redirectUrl` in e && typeof e.redirectUrl == `string`
}

function y(e) {
    if (typeof e != `object` || !e) return !1;
    let t = `useDirectRouting` in e ? e.useDirectRouting : void 0,
        n = `workspaceId` in e ? e.workspaceId : void 0;
    return `oauthStateId` in e && typeof e.oauthStateId == `string` && `expiresAt` in e && typeof e.expiresAt == `number` && (t === void 0 || typeof t == `boolean`) && (n === void 0 || typeof n == `string`) && (t !== !0 || typeof n == `string` && n !== ``) && (!(`finalOauthStateId` in e) || typeof e.finalOauthStateId == `string`) && (!(`approvedTenantId` in e) || typeof e.approvedTenantId == `string`) && (!(`remainingStages` in e) || Array.isArray(e.remainingStages) && e.remainingStages.every(v))
}
async function b({
    oauthStateIds: e,
    getStatus: t
}) {
    let n = e[e.length - 1],
        r = await t(n);
    if (r.status !== `COMPLETE`) return r;
    for (let r of e.slice(0, -1)) {
        let e = await t(r);
        if (e.oauth_state_id !== r || e.status !== `COMPLETE`) return {
            ...e,
            oauth_state_id: n,
            status: e.oauth_state_id === r ? e.status : `PENDING`
        }
    }
    return r
}

function x(e, t) {
    return new Promise(n => {
        if (t.aborted) {
            n(!1);
            return
        }
        let r = () => {
                window.clearTimeout(i), n(!1)
            },
            i = window.setTimeout(() => {
                t.removeEventListener(`abort`, r), n(!0)
            }, e);
        t.addEventListener(`abort`, r, {
            once: !0
        })
    })
}

function S(e, t) {
    return new Promise((n, r) => {
        if (t.aborted) {
            n(null);
            return
        }
        let i = () => n(null);
        t.addEventListener(`abort`, i, {
            once: !0
        }), e.then(e => {
            t.removeEventListener(`abort`, i), n(e)
        }, e => {
            t.removeEventListener(`abort`, i), r(e)
        })
    })
}
async function C({
    oauthStateId: e,
    expiresAt: t,
    popup: n,
    signal: r,
    getStatus: i,
    pollIntervalMs: a = 1e3,
    popupCloseGraceMs: o = 5e3,
    detectPopupClosed: s = !0
}) {
    let c = null;
    for (; !r.aborted;) {
        try {
            let t = await S(i(e), r);
            if (t == null) return {
                type: `aborted`
            };
            if (t.oauth_state_id === e && t.status !== `PENDING`) return {
                type: `result`,
                result: t
            }
        } catch {}
        let l = Date.now();
        if (l >= t * 1e3) return {
            type: `expired`
        };
        if (s && n.closed) {
            if (c ??= l, l - c >= o) return {
                type: `popup_closed`
            }
        } else c = null;
        if (!await x(a, r)) break
    }
    return {
        type: `aborted`
    }
}

function w(e) {
    window.localStorage.setItem(`${k}:${e.oauthStateId}`, JSON.stringify(e)), f(e.oauthStateId)
}

function T(e) {
    window.localStorage.removeItem(`${k}:${e}`), window.localStorage.removeItem(`${A}:${e}`)
}

function E(e) {
    let t = `${A}:${e}`,
        n = window.localStorage.getItem(t);
    if (n == null) return null;
    window.localStorage.removeItem(t);
    try {
        let t = JSON.parse(n);
        return typeof t != `object` || !t || !(`oauth_state_id` in t) || t.oauth_state_id !== e || !(`status` in t) || ![`COMPLETE`, `ERROR`].includes(String(t.status)) ? null : t
    } catch {
        return null
    }
}

function D(e) {
    let t = new URL(e).searchParams.get(`state`);
    if (t == null) return null;
    let n = `${k}:${t}`,
        r = window.localStorage.getItem(n);
    if (r == null) return null;
    try {
        let e = JSON.parse(r);
        return !y(e) || e.oauthStateId !== t ? null : (window.localStorage.removeItem(n), e)
    } catch {
        return window.localStorage.removeItem(n), null
    }
}

function O(e) {
    let t = e.result ?? (e.error == null ? null : {
        oauth_state_id: e.oauthStateId,
        status: `ERROR`,
        error_code: e.error
    });
    t != null && window.localStorage.setItem(`${A}:${e.oauthStateId}`, JSON.stringify(t)), window.opener?.postMessage({
        type: j,
        ...e
    }, window.location.origin)
}
var k, A, j, M = e((() => {
        t(), k = `chatgpt.microsoft-admin-consent.pending`, A = `chatgpt.microsoft-admin-consent.result`, j = `chatgpt:microsoft-admin-consent-result`
    })),
    N, P, F, I, L, R, z = e((() => {
        c(), _(), s(), l(), r(), n(), h(), N = `2136414160`, P = e => ({
            ...p(e),
            [d]: g.ADMIN_SETTING
        }), F = () => {
            if (typeof window > `u`) return !1;
            let e = new URL(i, window.location.href);
            return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
        }, I = () => F() && u(N), L = async ({
            workspaceId: e,
            requestBody: t,
            useDirectRouting: n
        }) => {
            if (!n || e === ``) return await a.safePost(`/aip/connectors/links/oauth/admin-consent`, {
                requestBody: t
            });
            let {
                PluginServiceOpenAPI: r
            } = await m(async () => {
                let {
                    PluginServiceOpenAPI: e
                } = await import(`./conversation-small-bcbq46iub1p0ca1t.js`).then(e => (e._nt(), e.vnt));
                return {
                    PluginServiceOpenAPI: e
                }
            }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]));
            return await r.safePost(`/links/oauth/admin-consent`, {
                authOption: o.Required,
                additionalHeaders: P(e),
                requestBody: t
            })
        }, R = async ({
            workspaceId: e,
            requestBody: t,
            useDirectRouting: n
        }) => {
            if (!n || e === ``) return await a.safePost(`/aip/connectors/links/oauth/admin-consent/callback`, {
                requestBody: t
            });
            let {
                MicrosoftAdminConsentSheepRequest: r,
                SHEEP_ROUTING_HEADERS: i
            } = await m(async () => {
                let {
                    MicrosoftAdminConsentSheepRequest: e,
                    SHEEP_ROUTING_HEADERS: t
                } = await import(`./a4c0593a-ko21pnnc3qtfszg9.js`).then(e => (e.a(), e.r));
                return {
                    MicrosoftAdminConsentSheepRequest: e,
                    SHEEP_ROUTING_HEADERS: t
                }
            }, __vite__mapDeps([9, 1, 2, 3, 4, 0, 5, 6, 7, 8, 10, 11, 12, 13]));
            return await r.safePost(`/connectors/links/oauth/admin-consent/callback`, {
                authOption: o.Required,
                additionalHeaders: {
                    ...i,
                    ...P(e)
                },
                requestBody: t
            })
        }
    }));
export {
    j as a, D as c, C as d, O as f, L as i, b as l, z as n, T as o, w as p, I as r, E as s, R as t, M as u
};
//# sourceMappingURL=a8575090-n8bnjz8v1cxvkzob.js.map