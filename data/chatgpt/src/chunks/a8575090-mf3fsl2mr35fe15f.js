const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/conversation-small-fym1zmu9zimymmm1.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/a4c0593a-hizzm22zlxke0akx.js", "assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/global-modals-njebr7y8.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as t,
    Nit as n,
    Nv as r,
    Pit as i,
    Pv as a,
    QG as o,
    ZG as s,
    a7 as c,
    git as l,
    l7 as u,
    pnt as d,
    vit as f,
    ynt as p
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    cn as m,
    ln as h
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Gwn as g,
    Wwn as _
} from "./conversation-small-fym1zmu9zimymmm1.js";

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
    window.localStorage.setItem(`${k}:${e.oauthStateId}`, JSON.stringify(e)), a(e.oauthStateId)
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
        r(), k = `chatgpt.microsoft-admin-consent.pending`, A = `chatgpt.microsoft-admin-consent.result`, j = `chatgpt:microsoft-admin-consent-result`
    })),
    N, P, F, I, L, R, z = e((() => {
        o(), g(), i(), f(), u(), p(), h(), N = `2136414160`, P = e => ({
            ...s(e),
            [l]: _.ADMIN_SETTING
        }), F = () => {
            if (typeof window > `u`) return !1;
            let e = new URL(n, window.location.href);
            return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
        }, I = () => F() && d(N), L = async ({
            workspaceId: e,
            requestBody: n,
            useDirectRouting: r
        }) => {
            if (!r || e === ``) return await c.safePost(`/aip/connectors/links/oauth/admin-consent`, {
                requestBody: n
            });
            let {
                PluginServiceOpenAPI: i
            } = await m(async () => {
                let {
                    PluginServiceOpenAPI: e
                } = await import(`./conversation-small-fym1zmu9zimymmm1.js`).then(e => (e.gnt(), e._nt));
                return {
                    PluginServiceOpenAPI: e
                }
            }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]));
            return await i.safePost(`/links/oauth/admin-consent`, {
                authOption: t.Required,
                additionalHeaders: P(e),
                requestBody: n
            })
        }, R = async ({
            workspaceId: e,
            requestBody: n,
            useDirectRouting: r
        }) => {
            if (!r || e === ``) return await c.safePost(`/aip/connectors/links/oauth/admin-consent/callback`, {
                requestBody: n
            });
            let {
                MicrosoftAdminConsentSheepRequest: i,
                SHEEP_ROUTING_HEADERS: a
            } = await m(async () => {
                let {
                    MicrosoftAdminConsentSheepRequest: e,
                    SHEEP_ROUTING_HEADERS: t
                } = await import(`./a4c0593a-hizzm22zlxke0akx.js`).then(e => (e.o(), e.i));
                return {
                    MicrosoftAdminConsentSheepRequest: e,
                    SHEEP_ROUTING_HEADERS: t
                }
            }, __vite__mapDeps([9, 1, 2, 3, 4, 0, 5, 6, 7, 8, 10, 11, 12, 13]));
            return await i.safePost(`/connectors/links/oauth/admin-consent/callback`, {
                authOption: t.Required,
                additionalHeaders: {
                    ...a,
                    ...P(e)
                },
                requestBody: n
            })
        }
    }));
export {
    j as a, D as c, C as d, O as f, L as i, b as l, z as n, T as o, w as p, I as r, E as s, R as t, M as u
};
//# sourceMappingURL=a8575090-mf3fsl2mr35fe15f.js.map