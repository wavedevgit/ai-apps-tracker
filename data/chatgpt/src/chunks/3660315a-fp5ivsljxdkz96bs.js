import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $_ as r,
    Az as i,
    CK as a,
    FE as o,
    Fat as s,
    Fot as c,
    Fv as l,
    Iot as u,
    JT as d,
    Jv as f,
    Kv as p,
    Lot as m,
    N5 as h,
    P7 as g,
    PE as _,
    Pot as v,
    R7 as y,
    Yv as b,
    h8 as x,
    jz as S,
    kat as C,
    pit as ee,
    qT as w,
    uit as te,
    wK as ne
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as re,
    Ln as T,
    Nn as E,
    O as ie,
    Q as ae,
    Rn as D,
    Vn as oe,
    Vt as O,
    s as k,
    wn as A
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as se,
    t as j
} from "./1dc5ae5b-dnthzn1aqsxuya3m.js";
import {
    i as ce,
    n as le
} from "./06dfbf77-llkkytqrdw75van2.js";
import {
    n as M,
    t as ue
} from "./b2cbd5c7-lhap1zsj5rctb6w7.js";
import {
    n as de,
    t as N
} from "./b5b42835-dbjlxj9je1ukaipu.js";
import {
    n as fe,
    t as pe
} from "./b15d5b53-w8mc90fmmyasohpi.js";

function me(e) {
    let t = e.link_params_schema,
        n = typeof t == `object` && !!t && (`properties` in t && typeof t.properties == `object` && t.properties != null && Object.keys(t.properties).length > 0 || `required` in t && Array.isArray(t.required) && t.required.length > 0);
    return e.status !== `DISABLED_BY_ADMIN` && e.supported_auth.length === 1 && e.supported_auth[0].type === `OAUTH` && !n
}
var P = e((() => {}));

function F(e, t = 8192) {
    return typeof e == `string` && e.length > 0 && e.length <= t
}

function I(e) {
    if (typeof e != `object` || !e || Array.isArray(e)) return null;
    let {
        userId: t,
        accountId: n,
        reference: r,
        attemptId: i,
        connectorId: a,
        linkId: o,
        action: s,
        expiresAt: c,
        phase: l,
        status: u,
        oauthStateId: d,
        oauthState: f,
        completionToken: p,
        completionCalls: m
    } = e;
    if (!F(t) || !F(n) || !F(r, 4096) || !F(i) || !F(a) || typeof c != `number` || !Number.isFinite(c)) return null;
    let h = s === `connect` && o === void 0 ? {
        action: `connect`
    } : (s === void 0 || s === `reauthenticate`) && B(o) ? {
        action: `reauthenticate`,
        linkId: o
    } : null;
    if (h == null) return null;
    let g = {
        userId: t,
        accountId: n,
        reference: r,
        attemptId: i,
        connectorId: a,
        ...h,
        expiresAt: c
    };
    return l === `starting` ? {
        ...g,
        phase: l
    } : l === `terminal` ? u === `finished` || u === `unavailable` || u === `cancelled` || u === `uncertain` ? {
        ...g,
        phase: l,
        status: u
    } : null : l !== `redirected` && l !== `callback_pending` && l !== `completing` || !F(d) || !F(f) || !F(p) || typeof m != `number` || !Number.isInteger(m) || m < 0 || m > 6 ? null : {
        ...g,
        phase: l,
        oauthStateId: d,
        oauthState: f,
        completionToken: p,
        completionCalls: m
    }
}

function L(e, t) {
    return H + JSON.stringify([e.userId, e.accountId, t])
}

function R(e, t) {
    let n = new URL(t).searchParams,
        r = n.get(`state`);
    if (!r || n.getAll(`state`).length !== 1) return null;
    for (let t = 0; t < e.length; t += 1) {
        let n = e.key(t);
        if (n?.startsWith(H)) try {
            let t = I(JSON.parse(e.getItem(n) ?? `null`));
            if (t && `oauthState` in t && t.oauthState === r) return t
        } catch {}
    }
    return null
}

function z(e, t, n = `reauthenticate`) {
    let r = new URLSearchParams({
        request: e,
        attempt: t,
        no_universal_links: `1`
    });
    return n === `connect` && r.set(`action`, n), `/connector-auth?${r}`
}

function he(e) {
    if (e.getAll(`request`).length !== 1 || e.getAll(`attempt`).length > 1 || e.getAll(`action`).length > 1 || e.getAll(`connector_action`).length > 1) return null;
    let t = e.get(`action`),
        n = e.get(`connector_action`);
    if (n != null) {
        let r = t === `enable` && e.getAll(`factor`).length === 1 && (e.get(`factor`) === `totp` || e.get(`factor`) === `sms`);
        return n === `connect` && (t == null || t === `connect` || r) ? `connect` : null
    }
    return t == null ? `reauthenticate` : t === `connect` ? `connect` : null
}

function B(e) {
    return F(e) && e.trim() === e && !e.startsWith(`synthetic_link::`) && !e.startsWith(`implicit_link::`)
}

function ge(e) {
    let t = e.action ?? `reauthenticate`,
        n, r, i = `loading`,
        a = new Set,
        o, s, c, l, u = !1,
        d = null,
        f = L(e.identity, e.reference),
        p = e => {
            i = e, a.forEach(e => e())
        },
        m = t => {
            let n = e.storage();
            if (n.getItem(f) !== d) throw Error(`Attempt changed`);
            let r = I(t);
            if (r == null) throw Error(`Invalid attempt`);
            let i = JSON.stringify(r);
            n.setItem(f, i), d = i, l = r
        },
        h = e => {
            if (l) {
                let {
                    userId: t,
                    accountId: n,
                    reference: r,
                    attemptId: i,
                    connectorId: a,
                    expiresAt: o
                } = l;
                try {
                    m({
                        userId: t,
                        accountId: n,
                        reference: r,
                        attemptId: i,
                        connectorId: a,
                        ...l.action === `connect` ? {
                            action: `connect`
                        } : {
                            action: `reauthenticate`,
                            linkId: l.linkId
                        },
                        expiresAt: o,
                        phase: `terminal`,
                        status: e
                    })
                } catch {}
            }
            p(e)
        },
        g = t => {
            if (t.throwIfAborted(), !e.isCurrent()) throw new DOMException(`Account changed`, `AbortError`)
        },
        _ = async (e, t) => {
            g(t);
            let n = await e(AbortSignal.any([t, AbortSignal.timeout(15e3)]));
            return g(t), n
        }, v = t => e.api.isTransient(t) || t instanceof DOMException && t.name === `TimeoutError`, y = async n => {
            for (let r = 0;; r += 1) try {
                return await _(n => e.api.bundle(e.reference, n, t), n)
            } catch (e) {
                if (g(n), !v(e)) throw e;
                if (r === 4) return p(`load_failed`), null;
                await V(r, n)
            }
        }, b = async (t, n) => {
            for (let r = t.completionCalls; r < 6; r += 1) {
                r > 0 && await V(r - 1, n);
                try {
                    g(n), m({
                        ...t,
                        phase: `completing`,
                        completionCalls: r + 1
                    });
                    let i = await _(n => e.api.complete(e.reference, t.completionToken, n), n);
                    if (i.outcome === `pending`) continue;
                    h(i.outcome === `started` || i.outcome === `context_delivered` || i.outcome === `suppressed` ? `finished` : `uncertain`);
                    return
                } catch (e) {
                    if (g(n), !v(e)) throw e
                }
            }
            h(`uncertain`)
        }, x = async (n, r) => {
            g(r);
            let i = crypto.randomUUID(),
                a = z(e.reference, i, t);
            e.replaceHistory(a);
            let o = {
                ...e.identity,
                reference: e.reference,
                attemptId: i,
                connectorId: n.connector_id,
                ...`link_id` in n ? {
                    action: `reauthenticate`,
                    linkId: n.link_id
                } : {
                    action: `connect`
                },
                expiresAt: Date.now() + U,
                phase: `starting`
            };
            m(o);
            let s = await _(t => e.api.start(e.reference, {
                    callback_url: e.callbackDestination(n.connector_id),
                    post_auth_url: a
                }, t), r),
                c = new URL(s.redirect_url),
                l = new URL(e.providerUrl(s.redirect_url)),
                d = c.searchParams.get(`state`);
            if (c.protocol !== `https:` || c.username || c.password || c.searchParams.getAll(`state`).length !== 1 || l.protocol !== `https:` || l.username || l.password || !d || l.searchParams.getAll(`state`).length !== 1 || !s.oauth_state_id || !s.completion_token) throw Error(`Invalid authorization response`);
            return m({
                ...o,
                phase: `redirected`,
                oauthState: d,
                oauthStateId: s.oauth_state_id,
                completionToken: s.completion_token,
                completionCalls: 0
            }), g(r), u = !0, e.navigate(l.href), {
                redirect_url: l.href
            }
        }, S = async i => {
            try {
                e.callbackUrl && e.attemptId && e.replaceHistory(z(e.reference, e.attemptId, t));
                let a = e.storage(),
                    o = a.getItem(f);
                if (d = o, o != null) {
                    let n;
                    try {
                        n = I(JSON.parse(o))
                    } catch {
                        n = null
                    }
                    if (n == null) {
                        a.setItem(f, `null`), p(`unavailable`);
                        return
                    }
                    if (l = n, !e.isCurrent()) {
                        h(`unavailable`);
                        return
                    }
                    if (l.userId !== e.identity.userId || l.accountId !== e.identity.accountId || l.reference !== e.reference || l.action !== t || e.attemptId != null && e.attemptId !== l.attemptId) {
                        h(`unavailable`);
                        return
                    }
                    if (l.expiresAt <= Date.now() || l.expiresAt > Date.now() + U) {
                        h(`unavailable`);
                        return
                    }
                    if (l.phase === `terminal`) {
                        p(l.status);
                        return
                    }
                } else if (e.attemptId != null || e.callbackUrl != null) {
                    p(`unavailable`);
                    return
                }
                g(i);
                let s = await y(i);
                if (s == null) return;
                let c = s.requests[0];
                if (s.kind !== (t === `connect` ? `connector_connect_no_link` : `connector_auth`) || s.version !== 1 || s.requests.length !== 1 || c?.request_id !== e.reference || !c.connector_id || c.action !== t || c.resume_on_success !== !0 || (c.action === `connect` ? c.auth_reason !== `missing_link` || `link_id` in c : c.auth_reason !== `reauthentication_required` || !B(c.link_id)) || l && (l.connectorId !== c.connector_id || l.action === `reauthenticate` && (c.action !== `reauthenticate` || l.linkId !== c.link_id))) {
                    h(`unavailable`);
                    return
                }
                if (l) {
                    if (l.phase === `completing`) {
                        await b(l, i);
                        return
                    }
                    if (l.phase !== `redirected` || e.callbackUrl == null) {
                        h(`uncertain`);
                        return
                    }
                    let n = e.callbackUrl,
                        r = new URL(n),
                        a = r.searchParams;
                    if (r.origin !== e.origin || !_e(r.pathname) || r.username || r.password || a.getAll(`state`).length !== 1 || a.get(`state`) !== l.oauthState) {
                        h(`unavailable`);
                        return
                    }
                    if (a.has(`error`)) {
                        h(`cancelled`);
                        return
                    }
                    let o = l;
                    e.replaceHistory(z(e.reference, o.attemptId, t)), m({
                        ...o,
                        phase: `callback_pending`
                    });
                    let s = await _(t => e.api.callback(n, t), i);
                    if (!B(s.link.id) || o.action === `reauthenticate` && s.link.id !== o.linkId || s.link.connector_id !== o.connectorId || s.link.auth_status !== `ACTIVE` || o.action === `connect` && s.link.auth_type !== `OAUTH`) {
                        h(`unavailable`);
                        return
                    }
                    m({
                        ...o,
                        phase: `completing`
                    }), await b(o, i);
                    return
                }
                if (c.action === `connect`) {
                    n = c, r = {
                        connectorId: c.connector_id
                    }, p(`awaiting_consent`);
                    return
                }
                await x(c, i)
            } catch {
                i.aborted || h(l ? `uncertain` : `unavailable`)
            }
        }, C = () => {
            o = new AbortController;
            let t = o.signal;
            s = e.watchIdentity(() => {
                e.isCurrent() || (o?.abort(), h(`unavailable`))
            });
            let n = e => {
                    e.persisted && l?.phase !== `terminal` && (u || t.aborted) && (o?.abort(), h(`uncertain`))
                },
                r = () => {
                    u || (o?.abort(), l?.phase !== `completing` && l?.phase !== `terminal` && h(l ? `uncertain` : `unavailable`))
                };
            window.addEventListener(`pageshow`, n), window.addEventListener(`pagehide`, r), c = () => {
                window.removeEventListener(`pageshow`, n), window.removeEventListener(`pagehide`, r)
            }, S(t)
        };
    return {
        getSnapshot: () => i,
        getConsentTarget: () => r,
        confirmConsent: async () => {
            if (i !== `awaiting_consent` || !n || !o) throw Error(`Connection consent is not available`);
            let e = o.signal;
            p(`loading`);
            try {
                return await x(n, e)
            } catch {
                throw e.aborted || h(l ? `uncertain` : `unavailable`), Error(`Connection could not start`)
            }
        },
        cancelConsent: () => {
            u || i !== `awaiting_consent` && i !== `loading` || (o?.abort(), h(l ? `uncertain` : `cancelled`))
        },
        subscribe: e => (a.add(e), o || C(), () => {
            a.delete(e), queueMicrotask(() => {
                a.size === 0 && (o?.abort(), s?.(), c?.(), !u && l?.phase !== `terminal` && i === `loading` && h(l ? `uncertain` : `unavailable`))
            })
        }),
        retryLoad: () => {
            i === `load_failed` && (o?.abort(), s?.(), c?.(), p(`loading`), C())
        }
    }
}

function _e(e) {
    if (e === `/connector_platform_oauth_redirect`) return !0;
    if (!/^\/connector\/oauth\/[^/]+$/.test(e)) return !1;
    try {
        let t = decodeURIComponent(e.slice(17));
        return t !== `.` && t !== `..` && !/[\\/?#%;\s]/.test(t)
    } catch {
        return !1
    }
}

function V(e, t) {
    return t.throwIfAborted(), new Promise((n, r) => {
        let i = () => {
                clearTimeout(a), r(new DOMException(`Cancelled`, `AbortError`))
            },
            a = setTimeout(() => {
                t.removeEventListener(`abort`, i), n()
            }, Math.min(500 * 2 ** e, 8e3));
        t.addEventListener(`abort`, i, {
            once: !0
        })
    })
}
var H, U, W = e((() => {
    H = `orbit.connector-auth.v1:`, U = 30 * 6e4
}));

function ve(e, t, n, i, o = `reauthenticate`) {
    let s = !1,
        c = () => {
            let t = v();
            return !s && t?.user?.id === e.userId && t.account?.id === e.accountId && !u()
        },
        l = t => {
            if (!c()) throw new DOMException(`Account changed`, `AbortError`);
            return {
                signal: t,
                accessToken: v()?.accessToken,
                additionalHeaders: a(e.accountId),
                disableAutomaticRetry: !0
            }
        };
    return ge({
        identity: e,
        action: o,
        reference: t,
        attemptId: n,
        callbackUrl: i,
        api: {
            bundle: (e, t, n) => g.safeGet(n === `connect` ? `/messaging/connector-auth/{reference}/connect` : `/messaging/connector-auth/{reference}`, {
                ...l(t),
                parameters: {
                    path: {
                        reference: e
                    }
                }
            }),
            start: (e, t, n) => g.safePost(`/messaging/connector-auth/{reference}/start`, {
                ...l(n),
                parameters: {
                    path: {
                        reference: e
                    }
                },
                requestBody: t
            }),
            callback: (e, t) => g.safePost(`/aip/connectors/links/oauth/callback`, {
                ...l(t),
                requestBody: {
                    full_redirect_url: b(e)
                }
            }),
            complete: (e, t, n) => g.safePost(`/messaging/connector-auth/{reference}/complete`, {
                ...l(n),
                parameters: {
                    path: {
                        reference: e
                    }
                },
                requestBody: {
                    completion_token: t
                }
            }),
            isTransient: e => e instanceof C && (e.isTransportError || e.status >= 500)
        },
        isCurrent: c,
        origin: typeof window > `u` ? `` : window.location.origin,
        storage: () => window.sessionStorage,
        watchIdentity: e => {
            let t = m(e),
                n = ee(() => {
                    s = !0, e()
                });
            return () => {
                t(), n()
            }
        },
        callbackDestination: e => b(r(e)),
        providerUrl: e => f(e, r(``)),
        replaceHistory: e => window.history.replaceState(null, ``, e),
        navigate: e => window.location.assign(e)
    })
}
var ye = e((() => {
        l(), te(), c(), s(), y(), ne(), p(), W()
    })),
    G, be = e((() => {
        D(), G = T({
            awaiting_consent: {
                id: `chatgpt.orbit.connector_auth.page.awaiting_consent`,
                defaultMessage: `Review this app’s connection details to continue`
            },
            setup_unavailable: {
                id: `chatgpt.orbit.connector_auth.page.setup_unavailable`,
                defaultMessage: `This app needs additional setup. Connect it in Settings, then return to your conversation`
            },
            settings: {
                id: `chatgpt.orbit.connector_auth.page.settings`,
                defaultMessage: `Open Settings`
            },
            loading: {
                id: `chatgpt.orbit.connector_auth.page.loading`,
                defaultMessage: `Connecting…`
            },
            finished: {
                id: `chatgpt.orbit.connector_auth.page.finished`,
                defaultMessage: `Connected`
            },
            return: {
                id: `chatgpt.orbit.connector_auth.page.return`,
                defaultMessage: `You can return to your conversation`
            },
            unavailable: {
                id: `chatgpt.orbit.connector_auth.page.unavailable.dot`,
                defaultMessage: `This connection request isn’t available. Make sure you’re signed in to the account and workspace you use with your dot, or ask for a new link in your conversation.`
            },
            cancelled: {
                id: `chatgpt.orbit.connector_auth.page.cancelled`,
                defaultMessage: `Connection cancelled. Return to your conversation to request a new sign-in link.`
            },
            uncertain: {
                id: `chatgpt.orbit.connector_auth.page.uncertain`,
                defaultMessage: `We couldn’t confirm completion. Return to your conversation to continue or request a new sign-in link.`
            },
            load_failed: {
                id: `chatgpt.orbit.connector_auth.page.load_failed`,
                defaultMessage: `Couldn’t load this connection request. Try again.`
            },
            retry: {
                id: `chatgpt.orbit.connector_auth.page.retry`,
                defaultMessage: `Try again`
            }
        })
    })),
    xe = t({
        ConnectorAuthCallbackBoundary: () => X,
        ConnectorAuthPage: () => Y,
        ConnectorAuthPageStatus: () => Q
    });

function Se() {
    return `loading`
}

function Ce() {}

function we() {}

function Te() {
    return window.location.assign(`/#settings/Connectors`)
}
var K, q, J, Y, X, Z, Q, $, Ee = e((() => {
    K = A(), k(), o(), P(), le(), fe(), q = n(oe()), D(), ae(), d(), S(), se(), c(), ye(), W(), be(), ue(), de(), x(), J = re(), Y = () => {
        "use forget";
        let e = (0, K.c)(4),
            [t] = O(),
            n = (0, q.useSyncExternalStore)(m, v, v),
            r = t.get(`request`),
            i = h(M),
            a = he(t);
        if (!i || !a || !r || r.length > 4096 || !n?.user?.id || !n.account?.id) {
            let t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, J.jsxs)(J.Fragment, {
                children: [(0, J.jsx)(N, {}), (0, J.jsx)(Q, {
                    status: `unavailable`
                })]
            }), e[0] = t) : t = e[0], t
        }
        let o = {
                userId: n.user.id,
                accountId: n.account.id
            },
            s;
        e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, J.jsx)(N, {}), e[1] = s) : s = e[1];
        let c = JSON.stringify([o, a, r, t.get(`attempt`)]),
            l;
        return e[2] === t ? l = e[3] : (l = t.get(`attempt`), e[2] = t, e[3] = l), (0, J.jsxs)(J.Fragment, {
            children: [s, (0, J.jsx)(Z, {
                identity: o,
                action: a,
                reference: r,
                attemptId: l
            }, c)]
        })
    }, X = e => {
        "use forget";
        let t = (0, K.c)(7),
            {
                url: n,
                children: r
            } = e,
            i;
        t[0] === n ? i = t[1] : (i = () => {
            try {
                return R(window.sessionStorage, n)
            } catch {
                return null
            }
        }, t[0] = n, t[1] = i);
        let [a] = (0, q.useState)(i), o = h(M), s;
        return t[2] !== o || t[3] !== a || t[4] !== r || t[5] !== n ? (s = a ? (0, J.jsxs)(J.Fragment, {
            children: [(0, J.jsx)(N, {}), o ? (0, J.jsx)(Z, {
                action: a.action,
                identity: a,
                reference: a.reference,
                attemptId: a.attemptId,
                callbackUrl: n
            }) : (0, J.jsx)(Q, {
                status: `unavailable`
            })]
        }) : r, t[2] = o, t[3] = a, t[4] = r, t[5] = n, t[6] = s) : s = t[6], s
    }, Z = e => {
        "use forget";
        let t = (0, K.c)(13),
            {
                identity: n,
                action: r,
                reference: i,
                attemptId: a,
                callbackUrl: o
            } = e,
            s;
        t[0] !== r || t[1] !== a || t[2] !== o || t[3] !== n || t[4] !== i ? (s = () => ve(n, i, a, o, r), t[0] = r, t[1] = a, t[2] = o, t[3] = n, t[4] = i, t[5] = s) : s = t[5];
        let [c] = (0, q.useState)(s), l = (0, q.useSyncExternalStore)(c.subscribe, c.getSnapshot, Se), u = (0, q.useSyncExternalStore)(c.subscribe, c.getConsentTarget, Ce);
        if (l === `awaiting_consent` && u) {
            let e;
            return t[6] !== c.cancelConsent || t[7] !== c.confirmConsent || t[8] !== u.connectorId ? (e = (0, J.jsx)($, {
                connectorId: u.connectorId,
                onCancel: c.cancelConsent,
                onConfirm: c.confirmConsent
            }), t[6] = c.cancelConsent, t[7] = c.confirmConsent, t[8] = u.connectorId, t[9] = e) : e = t[9], e
        }
        let d;
        return t[10] !== c.retryLoad || t[11] !== l ? (d = (0, J.jsx)(Q, {
            status: l,
            onRetry: c.retryLoad
        }), t[10] = c.retryLoad, t[11] = l, t[12] = d) : d = t[12], d
    }, Q = e => {
        "use forget";
        let t = (0, K.c)(4),
            {
                status: n,
                onRetry: r
            } = e,
            a;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, J.jsx)(`meta`, {
            name: `referrer`,
            content: `no-referrer`
        }), t[0] = a) : a = t[0];
        let o;
        return t[1] !== r || t[2] !== n ? (o = (0, J.jsxs)(j, {
            presentation: `confirmation`,
            children: [a, n === `loading` ? (0, J.jsxs)(`div`, {
                role: `status`,
                className: `my-auto flex justify-center`,
                children: [(0, J.jsx)(i, {
                    className: `icon text-token-text-secondary`
                }), (0, J.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, J.jsx)(E, {
                        ...G.loading
                    })
                })]
            }) : (0, J.jsxs)(`section`, {
                className: `my-auto flex w-full flex-col items-center gap-6 text-center`,
                role: `status`,
                children: [n === `finished` ? (0, J.jsxs)(J.Fragment, {
                    children: [(0, J.jsx)(`h1`, {
                        className: `text-heading-app text-token-text-primary font-normal`,
                        children: (0, J.jsx)(E, {
                            ...G.finished
                        })
                    }), (0, J.jsx)(`p`, {
                        className: `text-token-text-secondary text-sm`,
                        children: (0, J.jsx)(E, {
                            ...G.return
                        })
                    })]
                }) : (0, J.jsx)(`p`, {
                    children: (0, J.jsx)(E, {
                        ...G[n]
                    })
                }), n === `load_failed` && (0, J.jsx)(w, {
                    type: `button`,
                    onClick: r,
                    children: (0, J.jsx)(E, {
                        ...G.retry
                    })
                })]
            })]
        }), t[1] = r, t[2] = n, t[3] = o) : o = t[3], o
    }, $ = e => {
        "use forget";
        let t = (0, K.c)(20),
            {
                connectorId: n,
                onCancel: r,
                onConfirm: i
            } = e,
            a;
        t[0] === n ? a = t[1] : (a = _(n, {
            productSku: `AEON`
        }), t[0] = n, t[1] = a);
        let {
            data: o,
            isPending: s,
            isFetching: c,
            isError: l,
            refetch: u
        } = ie(a), {
            isSuccess: d,
            isPlaceholderData: f,
            isFetching: p,
            refetch: m
        } = ce(n, `AEON`);
        if (s) {
            let e;
            return t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(Q, {
                status: `loading`
            }), t[2] = e) : e = t[2], e
        }
        if (l) {
            let e;
            return t[3] !== u || t[4] !== m ? (e = (0, J.jsx)(Q, {
                status: `load_failed`,
                onRetry: () => {
                    u(), m()
                }
            }), t[3] = u, t[4] = m, t[5] = e) : e = t[5], e
        }
        if (!o) {
            let e;
            return t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(Q, {
                status: `unavailable`
            }), t[6] = e) : e = t[6], e
        }
        let h;
        t[7] !== o || t[8] !== n ? (h = o.id === n && me(o), t[7] = o, t[8] = n, t[9] = h) : h = t[9];
        let g = h,
            v;
        t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, J.jsx)(`meta`, {
            name: `referrer`,
            content: `no-referrer`
        }), t[10] = v) : v = t[10];
        let y;
        return t[11] !== o || t[12] !== c || t[13] !== f || t[14] !== p || t[15] !== r || t[16] !== i || t[17] !== g || t[18] !== d ? (y = (0, J.jsxs)(j, {
            children: [v, g ? (0, J.jsx)(pe, {
                connector: o,
                onClose: r,
                isConnecting: !1,
                authTypeOverride: `OAUTH`,
                requireAuth: !0,
                requireFreshConsent: !0,
                productSku: `AEON`,
                enableSiwcLogin: !1,
                isContinueDisabled: !d || f || c || p,
                onContinue: () => {
                    !d || f || c || p || i().catch(we)
                }
            }) : (0, J.jsxs)(J.Fragment, {
                children: [(0, J.jsx)(`p`, {
                    role: `status`,
                    children: (0, J.jsx)(E, {
                        ...G.setup_unavailable
                    })
                }), (0, J.jsx)(w, {
                    type: `button`,
                    onClick: Te,
                    children: (0, J.jsx)(E, {
                        ...G.settings
                    })
                })]
            })]
        }), t[11] = o, t[12] = c, t[13] = f, t[14] = p, t[15] = r, t[16] = i, t[17] = g, t[18] = d, t[19] = y) : y = t[19], y
    }
}));
export {
    Ee as n, xe as r, Y as t
};
//# sourceMappingURL=3660315a-fp5ivsljxdkz96bs.js.map