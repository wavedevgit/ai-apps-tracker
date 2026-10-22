const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/343cb406-d69bck6k47arlhci.js", "assets/f025431a-ehagpvg3m4e1cduv.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $r as n,
    Aat as r,
    Ait as i,
    B0 as a,
    C_ as o,
    DU as s,
    F5 as c,
    H0 as l,
    J7 as u,
    Jat as d,
    Jr as f,
    Kr as p,
    Q7 as m,
    QJ as h,
    Qr as g,
    SJ as _,
    SY as v,
    U1 as y,
    XJ as ee,
    Xr as b,
    ZG as x,
    Zr as S,
    al as te,
    bct as C,
    dY as ne,
    eK as w,
    eY as re,
    ei as T,
    eot as ie,
    gF as E,
    hrt as ae,
    jU as oe,
    k8 as se,
    kat as D,
    kit as ce,
    l9 as le,
    lrt as ue,
    q1 as de,
    q5 as O,
    tl as fe,
    uct as k,
    vF as A,
    wJ as j,
    w_ as M
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    O as N,
    Vn as P,
    cn as F,
    ln as I,
    s as L,
    wn as R
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Ot as z,
    Ggn as B,
    Ugn as V,
    XOt as pe
} from "./conversation-small-m08q51xmfe7gjq3d.js";

function me(e) {
    "use forget";
    let t = (0, H.c)(5),
        {
            data: n,
            isLoading: r
        } = w(e),
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
    H = R(), x()
}));

function U() {
    return ue(X)
}

function W(e) {
    if (!e || !e.startsWith(`/`) && !e.startsWith(`https://chatgpt.com/`) || e.startsWith(`//`) || e.includes(`\\`) || /%5c/i.test(e)) return !1;
    try {
        let t = new URL(e, `https://chatgpt.com`);
        return t.origin === `https://chatgpt.com` ? Z.some(e => e.test(t.pathname)) || z(t.pathname) : !1
    } catch {
        return !1
    }
}
async function G(e, n = U()) {
    if (!n) return !1;
    if (W(e)) return !0;
    let r = await F(() => import(`./343cb406-d69bck6k47arlhci.js`).then(e => t(e.t())), __vite__mapDeps([0, 1]));
    if (D != null && e?.startsWith(D)) return !0;
    try {
        let t = r.get(new URL(e ?? ``).hostname);
        return t != null && new Set([`openai.com`, `chatgpt.com`, `chat.com`]).has(t)
    } catch {
        return !1
    }
}

function K(e, t, n, r) {
    return u.safeGet(`/conversation/{conversation_id}/url_safe`, {
        ...r,
        additionalHeaders: _({
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

function _e(e, t, r = !1) {
    let a = O(() => l()),
        o = !i(),
        s = U();
    return N({
        queryKey: [`safe-url`, {
            serverThreadId: e,
            url: t,
            isHistoryAndTrainingDisabled: a,
            legacySafeUrlBypassEnabled: s,
            forceServerValidation: r
        }],
        queryFn: async ({
            signal: i
        }) => {
            if (e == null || t == null) throw Error(`Unexpected falsey useSafeUrlQuery`);
            if (!r && (await G(t, s) || c(() => b(E(e), t) === p.Safe))) return {
                safe: !0,
                blocked: !1
            };
            if (o) return {
                safe: !1,
                blocked: !1
            };
            let l = r ? E(e) : void 0,
                u = l == null ? void 0 : n(l, t),
                d = await K(e, t, a, {
                    signal: i,
                    expectedErrorStatuses: [404]
                });
            if (l == null || u == null || !d.safe || d.blocked || f(l, t, u)) return d;
            let m = c(() => b(l, t));
            return {
                safe: m === p.Safe,
                blocked: m === p.Blocked
            }
        },
        enabled: e != null && t != null,
        retry: (e, t) => !(t instanceof d) || t.status !== 404 ? !1 : e < 3 && t.code === `conversation_inaccessible` ? !0 : (le(t), !1),
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

function q(e, t, n = !0, r) {
    let a = r ?? (e == null ? void 0 : ee(e)),
        o = y()?.getWorkspaceId(),
        {
            hasLockdownRole: s
        } = me(o),
        c = i(),
        {
            data: l,
            isLoading: u
        } = oe(k.LockdownModeEnabled),
        d = O(() => a != null && te(E(a))),
        f = ve({
            isAuthenticatedUser: c,
            isConsumerLockdownModeDisabledForConversation: ne(a, e => B(e?.disabledToolIds, e?.conversationOrigin, d)),
            isLockdownModeEnabled: l,
            isLockdownModeLoading: u
        }),
        m = s || f,
        h = O(() => a == null || t == null ? p.Unknown : b(E(a), t)),
        g = h === p.Safe,
        _ = h === p.Blocked,
        v = h === p.Unsafe,
        x = v && W(t) && U(),
        S = _e(e, !g && !_ && !m && (!v || x) ? t : void 0, x),
        {
            data: {
                safe: C,
                blocked: w
            } = {}
        } = S;
    return _ || w === !0 ? {
        safeUrl: void 0,
        isPending: !1,
        isUnsafe: !1,
        isBlocked: !0,
        isPolicySuppressed: !1
    } : m ? {
        safeUrl: void 0,
        isPending: !1,
        isUnsafe: !1,
        isBlocked: !1,
        isPolicySuppressed: !0
    } : v && !C ? {
        safeUrl: void 0,
        isPending: n && x && S.isLoading,
        isUnsafe: !0,
        isBlocked: !1,
        isPolicySuppressed: !1
    } : {
        safeUrl: g || C || !n ? t : void 0,
        isPending: n && S.isLoading,
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
    let [r, i] = (0, Y.useState)(void 0), [a] = (0, Y.useState)(() => o(e => {
        i(e)
    }, t));
    return (0, Y.useEffect)(() => {
        n || a(e)
    }, [a, n, e]), n || r === e ? e : void 0
}

function Se(e, t, n) {
    let r = n ?? e,
        i = O(() => l()),
        a = U(),
        o = O(() => r == null ? $ : g(E(r))),
        s = (0, Y.useMemo)(() => t.filter(e => S(o, e) === p.Safe), [t, o]),
        {
            data: c = []
        } = N({
            queryKey: [`safe-urls`, e, t, i, s, (0, Y.useMemo)(() => t.filter(e => {
                let t = S(o, e);
                return t === p.Unsafe || t === p.Blocked
            }), [t, o]), a],
            queryFn: async () => {
                let n = t.filter(e => S(o, e) === p.Unknown),
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
    } = t, o = e.filter(e => r(e) !== p.Safe);
    if (o.length === 0) return [];
    let s = new Set(o.filter(e => {
            let t = r(e);
            return t === p.Unsafe || t === p.Blocked
        })),
        c = o.filter(e => !s.has(e)),
        l = await Promise.all(c.map(e => n(e))),
        u = c.filter((e, t) => !l[t]);
    if (u.length === 0) return o.filter(e => s.has(e));
    if (!i) {
        for (let e of u) s.add(e);
        return o.filter(e => s.has(e))
    }
    return (await Promise.allSettled(u.map(async e => {
        try {
            return await i(e, a) ? null : e
        } catch {
            return e
        }
    }))).forEach((e, t) => {
        let n = u[t];
        e.status === `fulfilled` ? typeof e.value == `string` && s.add(e.value) : s.add(n)
    }), o.filter(e => s.has(e))
}

function we(e, t) {
    let n = E(e),
        r = h(e);
    return Ce(t, {
        isKnownSafeUrl: G,
        getConversationUrlSafety: e => c(() => b(n, e)),
        serverCheck: r == null ? void 0 : async (e, t) => (await K(r, e, t)).safe,
        isHistoryAndTrainingDisabled: c(() => l())
    })
}
var Y, X, Z, Q, $, Te = e((() => {
    C(), V(), A(), T(), a(), j(), ge(), s(), pe(), se(), de(), re(), ce(), r(), ie(), m(), v(), ae(), L(), fe(), M(), Y = t(P()), I(), X = `368397779`, Z = [/^\/c\/[^/?#]+\/?$/, /^\/g\/[^/?#]+\/c\/[^/?#]+\/?$/, /^\/g\/[^/?#]+\/project\/?$/, /^\/library\/d\/[^/?#]+\/?$/], Q = new Set, $ = {
        safeUrls: Q,
        unsafeUrls: Q,
        blockedUrls: Q
    }
}));
export {
    ye as a, be as c, G as i, J as l, Te as n, q as o, W as r, Se as s, we as t
};
//# sourceMappingURL=3ed411a3-bir32qfoow57sy42.js.map