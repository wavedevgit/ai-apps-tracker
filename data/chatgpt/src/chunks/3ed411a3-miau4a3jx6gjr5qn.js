const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/343cb406-d69bck6k47arlhci.js", "assets/f025431a-ehagpvg3m4e1cduv.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as n,
    $r as r,
    AU as i,
    Aat as a,
    C_ as o,
    DJ as s,
    F7 as c,
    Gnt as l,
    Gr as u,
    Iat as d,
    Kst as ee,
    N0 as f,
    P1 as p,
    P5 as m,
    PU as te,
    Qr as h,
    R1 as g,
    S5 as _,
    S_ as v,
    TJ as y,
    TY as b,
    X7 as x,
    Xr as S,
    Yr as C,
    Znt as w,
    Zr as T,
    dF as E,
    dat as D,
    dit as ne,
    eK as re,
    el as ie,
    fat as ae,
    fit as O,
    g8 as oe,
    il as se,
    j0 as ce,
    mY as le,
    nct as ue,
    pF as de,
    qr as fe,
    rK as pe,
    rY as k,
    tY as A,
    z7 as j
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    O as M,
    Vn as N,
    cn as P,
    ln as F,
    s as I,
    wn as L
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    dgn as R,
    ekt as z,
    pgn as B,
    rkt as me
} from "./conversation-small-ikg0dwuw782klweb.js";

function V(e) {
    "use forget";
    let t = (0, H.c)(5),
        {
            data: n,
            isLoading: r
        } = pe(e),
        i;
    bb0: {
        if (typeof n != `object` || !n) {
            i = !1;
            break bb0
        }
        let e = n.role_summaries;
        if (!Array.isArray(e)) {
            i = !1;
            break bb0
        }
        let r;t[0] === e ? r = t[1] : (r = e.some(he), t[0] = e, t[1] = r),
        i = r
    }
    let a = i,
        o;
    return t[2] !== a || t[3] !== r ? (o = {
        hasLockdownRole: a,
        isLoading: r
    }, t[2] = a, t[3] = r, t[4] = o) : o = t[4], o
}

function he(e) {
    if (typeof e != `object` || !e) return !1;
    let t = e.metadata;
    return typeof t != `object` || !t ? !1 : t.lockdown_mode === !0
}
var H, ge = e((() => {
    H = L(), re()
}));

function U() {
    return l(X)
}

function W(e) {
    if (!e || !e.startsWith(`/`) && !e.startsWith(`https://chatgpt.com/`) || e.startsWith(`//`) || e.includes(`\\`) || /%5c/i.test(e)) return !1;
    try {
        let t = new URL(e, `https://chatgpt.com`);
        return t.origin === `https://chatgpt.com` ? Z.some(e => e.test(t.pathname)) || me(t.pathname) : !1
    } catch {
        return !1
    }
}
async function G(e, n = U()) {
    if (!n) return !1;
    if (W(e)) return !0;
    let r = await P(() => import(`./343cb406-d69bck6k47arlhci.js`).then(e => t(e.t())), __vite__mapDeps([0, 1]));
    if (D != null && e?.startsWith(D)) return !0;
    try {
        let t = r.get(new URL(e ?? ``).hostname);
        return t != null && new Set([`openai.com`, `chatgpt.com`, `chat.com`]).has(t)
    } catch {
        return !1
    }
}

function K(e, t, n, r) {
    return c.safeGet(`/conversation/{conversation_id}/url_safe`, {
        ...r,
        additionalHeaders: y({
            conversationId: e
        }),
        parameters: {
            path: {
                conversation_id: e
            },
            query: {
                url: t,
                history_and_training_disabled: n
            }
        }
    })
}

function _e(e, t, n = !1) {
    let r = m(() => f()),
        i = !O(),
        o = U();
    return M({
        queryKey: [`safe-url`, {
            serverThreadId: e,
            url: t,
            isHistoryAndTrainingDisabled: r,
            legacySafeUrlBypassEnabled: o,
            forceServerValidation: n
        }],
        queryFn: async ({
            signal: a
        }) => {
            if (e == null || t == null) throw Error(`Unexpected falsey useSafeUrlQuery`);
            if (!n && (await G(t, o) || _(() => C(E(e), t) === u.Safe))) return {
                safe: !0,
                blocked: !1
            };
            if (i) return {
                safe: !1,
                blocked: !1
            };
            let s = n ? E(e) : void 0,
                c = s == null ? void 0 : h(s, t),
                l = await K(e, t, r, {
                    signal: a,
                    expectedErrorStatuses: [404]
                });
            if (s == null || c == null || !l.safe || l.blocked || fe(s, t, c)) return l;
            let d = _(() => C(s, t));
            return {
                safe: d === u.Safe,
                blocked: d === u.Blocked
            }
        },
        enabled: e != null && t != null,
        retry: (e, t) => !(t instanceof a) || t.status !== 404 ? !1 : e < 3 && t.code === `conversation_inaccessible` ? !0 : (x(t), !1),
        retryDelay: e => 1e3 * 2 ** e
    })
}

function ve({
    isAuthenticatedUser: e,
    isConsumerLockdownModeDisabledForConversation: t,
    isLockdownModeEnabled: n,
    isLockdownModeLoading: r
}) {
    return t || !e ? !1 : n === !0 || n !== !1 && r
}

function q(e, t, r = !0, i) {
    let a = i ?? (e == null ? void 0 : n(e)),
        o = p()?.getWorkspaceId(),
        {
            hasLockdownRole: s
        } = V(o),
        c = O(),
        {
            data: l,
            isLoading: d
        } = te(ee.LockdownModeEnabled),
        f = m(() => a != null && se(E(a))),
        h = ve({
            isAuthenticatedUser: c,
            isConsumerLockdownModeDisabledForConversation: le(a, e => B(e?.disabledToolIds, e?.conversationOrigin, f)),
            isLockdownModeEnabled: l,
            isLockdownModeLoading: d
        }),
        g = s || h,
        _ = m(() => a == null || t == null ? u.Unknown : C(E(a), t)),
        v = _ === u.Safe,
        y = _ === u.Blocked,
        b = _ === u.Unsafe,
        x = b && W(t) && U(),
        S = _e(e, !v && !y && !g && (!b || x) ? t : void 0, x),
        {
            data: {
                safe: w,
                blocked: T
            } = {}
        } = S;
    return y || T === !0 ? {
        safeUrl: void 0,
        isPending: !1,
        isUnsafe: !1,
        isBlocked: !0,
        isPolicySuppressed: !1
    } : g ? {
        safeUrl: void 0,
        isPending: !1,
        isUnsafe: !1,
        isBlocked: !1,
        isPolicySuppressed: !0
    } : b && !w ? {
        safeUrl: void 0,
        isPending: r && x && S.isLoading,
        isUnsafe: !0,
        isBlocked: !1,
        isPolicySuppressed: !1
    } : {
        safeUrl: v || w || !r ? t : void 0,
        isPending: r && S.isLoading,
        isUnsafe: !1,
        isBlocked: !1,
        isPolicySuppressed: !1
    }
}

function ye(e, t, n = !0, r) {
    return q(e, t, n, r).safeUrl
}

function J(e, t, n = !0, r, i = !1) {
    let a = xe(t, 500, i),
        o = q(e, a, n, r);
    return {
        safeUrl: o.safeUrl,
        isPending: o.isPending || n && t != null && a !== t,
        isUnsafe: o.isUnsafe,
        isBlocked: o.isBlocked,
        isPolicySuppressed: o.isPolicySuppressed
    }
}

function be(e, t, n = !0, r, i = !1) {
    return J(e, t, n, r, i).safeUrl
}

function xe(e, t, n = !1) {
    let [r, i] = (0, Y.useState)(void 0), [a] = (0, Y.useState)(() => v(e => {
        i(e)
    }, t));
    return (0, Y.useEffect)(() => {
        n || a(e)
    }, [a, n, e]), n || r === e ? e : void 0
}

function Se(e, t, n) {
    let r = n ?? e,
        i = m(() => f()),
        a = U(),
        o = m(() => r == null ? $ : T(E(r))),
        s = (0, Y.useMemo)(() => t.filter(e => S(o, e) === u.Safe), [t, o]),
        {
            data: c = []
        } = M({
            queryKey: [`safe-urls`, e, t, i, s, (0, Y.useMemo)(() => t.filter(e => {
                let t = S(o, e);
                return t === u.Unsafe || t === u.Blocked
            }), [t, o]), a],
            queryFn: async () => {
                let n = t.filter(e => S(o, e) === u.Unknown),
                    r = (await Promise.allSettled(n.map(async t => {
                        if (await G(t, a)) return t;
                        if (e == null) return null;
                        try {
                            let n = await K(e, t, i);
                            return n.safe && !n.blocked ? t : null
                        } catch {
                            return null
                        }
                    }))).map(e => e.status === `fulfilled` ? e.value : null).filter(e => e != null);
                return s.concat(r)
            },
            enabled: e != null && t.length > 0
        });
    return e == null ? s : c
}
async function Ce(e, t) {
    let {
        isKnownSafeUrl: n,
        getConversationUrlSafety: r,
        serverCheck: i,
        isHistoryAndTrainingDisabled: a
    } = t, o = e.filter(e => r(e) !== u.Safe);
    if (o.length === 0) return [];
    let s = new Set(o.filter(e => {
            let t = r(e);
            return t === u.Unsafe || t === u.Blocked
        })),
        c = o.filter(e => !s.has(e)),
        l = await Promise.all(c.map(e => n(e))),
        d = c.filter((e, t) => !l[t]);
    if (d.length === 0) return o.filter(e => s.has(e));
    if (!i) {
        for (let e of d) s.add(e);
        return o.filter(e => s.has(e))
    }
    return (await Promise.allSettled(d.map(async e => {
        try {
            return await i(e, a) ? null : e
        } catch {
            return e
        }
    }))).forEach((e, t) => {
        let n = d[t];
        e.status === `fulfilled` ? typeof e.value == `string` && s.add(e.value) : s.add(n)
    }), o.filter(e => s.has(e))
}

function we(e, t) {
    let n = E(e),
        r = A(e);
    return Ce(t, {
        isKnownSafeUrl: G,
        getConversationUrlSafety: e => _(() => C(n, e)),
        serverCheck: r == null ? void 0 : async (e, t) => (await K(r, e, t)).safe,
        isHistoryAndTrainingDisabled: _(() => f())
    })
}
var Y, X, Z, Q, $, Te = e((() => {
    ue(), R(), de(), r(), ce(), s(), ge(), i(), z(), oe(), g(), k(), ne(), ae(), d(), j(), b(), w(), I(), ie(), o(), Y = t(N()), F(), X = `368397779`, Z = [/^\/c\/[^/?#]+\/?$/, /^\/g\/[^/?#]+\/c\/[^/?#]+\/?$/, /^\/g\/[^/?#]+\/project\/?$/, /^\/library\/d\/[^/?#]+\/?$/], Q = new Set, $ = {
        safeUrls: Q,
        unsafeUrls: Q,
        blockedUrls: Q
    }
}));
export {
    ye as a, be as c, G as i, J as l, Te as n, q as o, W as r, Se as s, we as t
};
//# sourceMappingURL=3ed411a3-miau4a3jx6gjr5qn.js.map