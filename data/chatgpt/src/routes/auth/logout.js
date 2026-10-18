import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AN as n,
    Cit as r,
    DN as i,
    Dit as a,
    EN as o,
    NN as s,
    ON as c,
    Sit as l,
    Tit as u,
    Y2 as d,
    _B as f,
    ait as p,
    bnt as m,
    cot as h,
    dr as ee,
    fr as te,
    hr as g,
    ht as _,
    iit as v,
    kN as y,
    kit as b,
    lit as x,
    lot as S,
    mF as C,
    mt as ne,
    nB as re,
    oit as ie,
    pF as w,
    q2 as ae,
    sF as T,
    sit as E,
    ur as D,
    ynt as O
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as k,
    At as A,
    Bn as j,
    Ut as M,
    Vn as N,
    jt as P
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Hdn as F,
    Vdn as I
} from "./conversation-small-fym1zmu9zimymmm1.js";

function L(e) {
    a.addAction(`auth_logout_route.logout_all_timeout`, {
        phase: e,
        stored_session_count: T()
    }), m(`chatgpt_account_switcher_logout_all_timeout`, 0, {
        phase: e
    }), a.addError(Error(`Account switch logout_all timed out`), {
        phase: e
    })
}
async function R(e, t, n, r) {
    if (!n) {
        await e().catch(e => {
            a.addError(Error(`Failed to logout`, {
                cause: e
            }))
        });
        return
    }
    let i, o = e().then(() => `completed`).catch(e => (i = e, `errored`)),
        s = await Promise.race([o, new Promise(e => {
            globalThis.setTimeout(() => e(`timeout`), z)
        })]),
        c = s;
    s === `timeout` && (L(t), c = await o), c === `errored` && (a.addError(Error(`Failed to logout`, {
        cause: i
    }), {
        phase: t
    }), r?.(t))
}
var z, B = e((() => {
    w(), b(), O(), z = 1e4
}));

function V(e, t) {
    if (typeof e == `string` && e.trim().length > 0) return e.trim().toLowerCase();
    if (typeof t == `string`) {
        let e = t.replace(/\D/g, ``);
        if (e.length > 0) return e
    }
    return null
}

function H(e) {
    n(), l.deleteCookie(u.AccountSwitchLogoutPendingResume), l.deleteCookie(u.AccountSwitchLogoutPendingAction), l.deleteCookie(u.AccountSwitchLogoutPendingCallbackUrl), a.addAction(`auth_logout_route.logout_all_failed`, {
        phase: e,
        stored_session_count: T()
    }), window.location.replace(`/auth/error?error=LogoutFailed`)
}

function U(e, t) {
    return e == null ? window.location.origin : x(new URL(e), t).toString()
}

function W(e) {
    let t = new URL(e, window.location.origin),
        n = K();
    if (t.origin === window.location.origin) return t.searchParams.set(`account_switch_action`, `logout`), t.pathname === `/` && (t.pathname = n), t.toString();
    let r = t.searchParams.get(`returnTo`);
    if (r != null) {
        let e = new URL(r, window.location.origin);
        e.origin === window.location.origin && (e.pathname = n, e.searchParams.set(`account_switch_action`, `logout`), t.searchParams.set(`returnTo`, e.toString()))
    }
    return t.toString()
}

function G({
    federatedLogoutUri: e,
    currentSessionToken: t,
    currentEmail: n,
    currentPhoneNumber: r
}) {
    let {
        isFannyPackInitializerEnabled: i
    } = I(), o = P(), s = new URLSearchParams(o.search).get(`account_switch_action`) === `logout`, c = s && D() === `logout_all`, l = c && (C() || T() >= 1);
    return (0, q.useEffect)(() => {
        let o = p({
            reason: s ? v.AccountSwitcher : v.AuthLogoutRoute,
            source: `auth.logout.route`
        });
        a.addAction(`chatgpt.web.logout.context_ready`, {
            ...ie(o),
            isAccountSwitchLogoutFlow: s
        });
        let u = U(e, o),
            d = ee(),
            f = V(n, r),
            m = d?.identity && d.identity === f ? `${d.mode}:${d.identity}` : null;
        if (a.addAction(`auth_logout_route.entered`, {
                is_account_switch_logout_flow: s,
                is_account_switch_logout_all_flow: c,
                should_use_logout_all_timeout: l,
                pending_logout_mode: d?.mode,
                has_pending_logout_identity: d?.identity != null,
                pending_identity_matches_current: m != null,
                stored_session_count: T()
            }), m && m === Y) {
            a.addAction(`auth_logout_route.skip_duplicate_attempt`, {
                pending_logout_mode: d?.mode,
                stored_session_count: T()
            });
            return
        }
        m && (Y = m), window && window.indexedDB && i && typeof window.indexedDB.databases == `function` ? (a.addAction(`chatgpt.web.logout.clearIndexedDB`), (async () => {
            let e = (await window.indexedDB.databases()).map(e => new Promise((t, n) => {
                if (e.name) {
                    let r = window.indexedDB.deleteDatabase(e.name);
                    r.onsuccess = () => t(), r.onerror = t => {
                        a.addError(Error(`Delete IndexedDB failed for database ${e.name}, ${t}`)), n()
                    }, r.onblocked = () => {
                        a.addError(Error(`Delete IndexedDB blocked for database ${e.name}`)), t()
                    }
                } else a.addError(Error(`Invalid database name ${e.name}`)), t()
            }));
            await Promise.race([Promise.all(e), new Promise(e => setTimeout(e, $))])
        })().then(() => {
            a.addTiming(`chatgpt.web.logout.clearedIndexedDB`), R(() => Z(u, !0, t, n, r), `auth_logout_route_after_indexeddb`, l, H)
        }).catch(e => {
            a.addError(Error(`Failed to clear IndexedDB`, {
                cause: e
            })), R(() => Z(u, !0, t, n, r), `auth_logout_route_indexeddb_error_path`, l, H)
        })) : R(() => Z(u, !1, t, n, r), `auth_logout_route_direct`, l, H)
    }, [i, e, t, n, r, s, c, l]), s ? (0, J.jsx)(_, {
        mode: `logout`,
        logoutVariant: D() === `logout_all` ? `all` : `single`
    }) : null
}

function K() {
    let {
        isNoAuthEnabled: e,
        isOpaqueNoAuthDisabledLandingPageEnabled: t
    } = h();
    return e || t ? `/` : `/auth/login`
}
var q, J, Y, X, Z, Q, $, oe = e((() => {
    k(), f(), ne(), te(), F(), s(), w(), r(), b(), E(), B(), c(), d(), i(), S(), q = t(N()), J = j(), Y = null, X = async (e, t, n, r) => {
        re();
        let i = D(),
            a = C() || T() >= 1,
            s = i != null;
        a && i !== `logout_switch` && (s = g({
            currentSessionToken: t,
            currentEmail: n,
            currentPhoneNumber: r,
            useLoadingScreen: !0
        }) || s);
        let c = await y({
            callbackUrl: s ? W(e) : e,
            redirect: !1
        });
        o(), await ae(), window.location.assign(c.url)
    }, Z = (e, t, n, r, i) => X(e, n, r, i).then(() => {
        a.addTiming(t ? `chatgpt.web.logout.shouldClearIndexedDB` : `chatgpt.web.logout.default`)
    }), Q = M(function() {
        return (0, J.jsx)(G, {
            ...A()
        })
    }), $ = 2e3
}));
e((() => {
    oe()
}))();
export {
    Q as
    default
};
//# sourceMappingURL=auth.logout-k3ez3kyu.js.map