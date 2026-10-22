const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/conversation-small-m08q51xmfe7gjq3d.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-nxpmzchfjvwqts17.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-lgbmg5s09xld40kt.js", "assets/c470f5ab-hgik953cu5ujlhdm.js", "assets/0e5afe53-i4tqvmyg38miikw0.js", "assets/conversation-small-dtc7tvsx.css", "assets/a4c0593a-h1af7e9fjmio3f73.js", "assets/c2675c8c-otyjprdiowg2v8hl.js", "assets/82782bc9-ca5kcqz13rn6iprj.js", "assets/8b34dbc2-n194ohawifys3bko.js", "assets/global-modals-dxg9ukpk.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $v as t,
    Aat as n,
    Eat as r,
    J7 as i,
    Q7 as a,
    SK as o,
    ey as s,
    fat as c,
    hrt as l,
    kat as u,
    lrt as d,
    mat as f,
    xK as p
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    cn as m,
    ln as h
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FTn as g,
    PTn as _
} from "./conversation-small-m08q51xmfe7gjq3d.js";

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
    window.localStorage.setItem(`${k}:${e.oauthStateId}`, JSON.stringify(e)), s(e.oauthStateId)
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
        o(), g(), n(), f(), a(), l(), h(), N = `2136414160`, P = e => ({
            ...p(e),
            [c]: _.ADMIN_SETTING
        }), F = () => {
            if (typeof window > `u`) return !1;
            let e = new URL(u, window.location.href);
            return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
        }, I = () => F() && d(N), L = async ({
            workspaceId: e,
            requestBody: t,
            useDirectRouting: n
        }) => {
            if (!n || e === ``) return await i.safePost(`/aip/connectors/links/oauth/admin-consent`, {
                requestBody: t
            });
            let {
                PluginServiceOpenAPI: a
            } = await m(async () => {
                let {
                    PluginServiceOpenAPI: e
                } = await import(`./conversation-small-m08q51xmfe7gjq3d.js`).then(e => (e._nt(), e.vnt));
                return {
                    PluginServiceOpenAPI: e
                }
            }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]));
            return await a.safePost(`/links/oauth/admin-consent`, {
                authOption: r.Required,
                additionalHeaders: P(e),
                requestBody: t
            })
        }, R = async ({
            workspaceId: e,
            requestBody: t,
            useDirectRouting: n
        }) => {
            if (!n || e === ``) return await i.safePost(`/aip/connectors/links/oauth/admin-consent/callback`, {
                requestBody: t
            });
            let {
                MicrosoftAdminConsentSheepRequest: a,
                SHEEP_ROUTING_HEADERS: o
            } = await m(async () => {
                let {
                    MicrosoftAdminConsentSheepRequest: e,
                    SHEEP_ROUTING_HEADERS: t
                } = await import(`./a4c0593a-h1af7e9fjmio3f73.js`).then(e => (e.a(), e.r));
                return {
                    MicrosoftAdminConsentSheepRequest: e,
                    SHEEP_ROUTING_HEADERS: t
                }
            }, __vite__mapDeps([9, 1, 2, 3, 4, 0, 5, 6, 7, 8, 10, 11, 12, 13]));
            return await a.safePost(`/connectors/links/oauth/admin-consent/callback`, {
                authOption: r.Required,
                additionalHeaders: {
                    ...o,
                    ...P(e)
                },
                requestBody: t
            })
        }
    }));
export {
    j as a, D as c, C as d, O as f, L as i, b as l, z as n, T as o, w as p, I as r, E as s, R as t, M as u
};
//# sourceMappingURL=a8575090-dh4537h1z9yq0m1s.js.map