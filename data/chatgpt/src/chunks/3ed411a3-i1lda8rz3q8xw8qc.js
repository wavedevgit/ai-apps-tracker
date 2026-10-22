const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/343cb406-d69bck6k47arlhci.js", "assets/f025431a-ehagpvg3m4e1cduv.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    $r as r,
    A8 as i,
    Aat as a,
    Ait as o,
    B0 as s,
    C_ as c,
    DU as l,
    H0 as u,
    I5 as d,
    J5 as f,
    Jr as p,
    Kr as m,
    QJ as h,
    Qr as g,
    SJ as _,
    SY as v,
    U1 as ee,
    XJ as te,
    Xr as y,
    Y7 as b,
    Yat as x,
    ZG as S,
    Zr as C,
    al as w,
    dY as ne,
    dct as re,
    eK as ie,
    eY as T,
    ei as ae,
    gF as E,
    grt as oe,
    jU as se,
    jat as ce,
    jit as D,
    q1 as le,
    tl as ue,
    tot as de,
    u9 as fe,
    urt as O,
    vF as k,
    wJ as A,
    w_ as j,
    xct as M
} from "./4813494d-i89nb6zlze66idsz.js";
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
    Jgn as B,
    Kgn as V,
    XOt as pe
} from "./conversation-small-fh0oqifngkf5rvl1.js";

function me(e) {
    "use forget";
    let t = (0, H.c)(5),
        {
            data: n,
            isLoading: r
        } = ie(e),
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
    H = R(), S()
}));

function U() {
    return O(X)
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
    if (a != null && e?.startsWith(a)) return !0;
    try {
        let t = r.get(new URL(e ?? ``).hostname);
        return t != null && new Set([`openai.com`, `chatgpt.com`, `chat.com`]).has(t)
    } catch {
        return !1
    }
}

function K(e, t, n, r) {
    return b.safeGet(`/conversation/{conversation_id}/url_safe`, {
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

function _e(e, t, n = !1) {
    let i = f(() => u()),
        a = !D(),
        o = U();
    return N({
        queryKey: [`safe-url`, {
            serverThreadId: e,
            url: t,
            isHistoryAndTrainingDisabled: i,
            legacySafeUrlBypassEnabled: o,
            forceServerValidation: n
        }],
        queryFn: async ({
            signal: s
        }) => {
            if (e == null || t == null) throw Error(`Unexpected falsey useSafeUrlQuery`);
            if (!n && (await G(t, o) || d(() => y(E(e), t) === m.Safe))) return {
                safe: !0,
                blocked: !1
            };
            if (a) return {
                safe: !1,
                blocked: !1
            };
            let c = n ? E(e) : void 0,
                l = c == null ? void 0 : r(c, t),
                u = await K(e, t, i, {
                    signal: s,
                    expectedErrorStatuses: [404]
                });
            if (c == null || l == null || !u.safe || u.blocked || p(c, t, l)) return u;
            let f = d(() => y(c, t));
            return {
                safe: f === m.Safe,
                blocked: f === m.Blocked
            }
        },
        enabled: e != null && t != null,
        retry: (e, t) => !(t instanceof x) || t.status !== 404 ? !1 : e < 3 && t.code === `conversation_inaccessible` ? !0 : (fe(t), !1),
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
    let i = r ?? (e == null ? void 0 : te(e)),
        a = ee()?.getWorkspaceId(),
        {
            hasLockdownRole: o
        } = me(a),
        s = D(),
        {
            data: c,
            isLoading: l
        } = se(re.LockdownModeEnabled),
        u = f(() => i != null && w(E(i))),
        d = ve({
            isAuthenticatedUser: s,
            isConsumerLockdownModeDisabledForConversation: ne(i, e => B(e?.disabledToolIds, e?.conversationOrigin, u)),
            isLockdownModeEnabled: c,
            isLockdownModeLoading: l
        }),
        p = o || d,
        h = f(() => i == null || t == null ? m.Unknown : y(E(i), t)),
        g = h === m.Safe,
        _ = h === m.Blocked,
        v = h === m.Unsafe,
        b = v && W(t) && U(),
        x = _e(e, !g && !_ && !p && (!v || b) ? t : void 0, b),
        {
            data: {
                safe: S,
                blocked: C
            } = {}
        } = x;
    return _ || C === !0 ? {
        safeUrl: void 0,
        isPending: !1,
        isUnsafe: !1,
        isBlocked: !0,
        isPolicySuppressed: !1
    } : p ? {
        safeUrl: void 0,
        isPending: !1,
        isUnsafe: !1,
        isBlocked: !1,
        isPolicySuppressed: !0
    } : v && !S ? {
        safeUrl: void 0,
        isPending: n && b && x.isLoading,
        isUnsafe: !0,
        isBlocked: !1,
        isPolicySuppressed: !1
    } : {
        safeUrl: g || S || !n ? t : void 0,
        isPending: n && x.isLoading,
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
    let [r, i] = (0, Y.useState)(void 0), [a] = (0, Y.useState)(() => c(e => {
        i(e)
    }, t));
    return (0, Y.useEffect)(() => {
        n || a(e)
    }, [a, n, e]), n || r === e ? e : void 0
}

function Se(e, t, n) {
    let r = n ?? e,
        i = f(() => u()),
        a = U(),
        o = f(() => r == null ? $ : g(E(r))),
        s = (0, Y.useMemo)(() => t.filter(e => C(o, e) === m.Safe), [t, o]),
        {
            data: c = []
        } = N({
            queryKey: [`safe-urls`, e, t, i, s, (0, Y.useMemo)(() => t.filter(e => {
                let t = C(o, e);
                return t === m.Unsafe || t === m.Blocked
            }), [t, o]), a],
            queryFn: async () => {
                let n = t.filter(e => C(o, e) === m.Unknown),
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
    } = t, o = e.filter(e => r(e) !== m.Safe);
    if (o.length === 0) return [];
    let s = new Set(o.filter(e => {
            let t = r(e);
            return t === m.Unsafe || t === m.Blocked
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
        getConversationUrlSafety: e => d(() => y(n, e)),
        serverCheck: r == null ? void 0 : async (e, t) => (await K(r, e, t)).safe,
        isHistoryAndTrainingDisabled: d(() => u())
    })
}
var Y, X, Z, Q, $, Te = e((() => {
    M(), V(), k(), ae(), s(), A(), ge(), l(), pe(), i(), le(), T(), o(), ce(), de(), n(), v(), oe(), L(), ue(), j(), Y = t(P()), I(), X = `368397779`, Z = [/^\/c\/[^/?#]+\/?$/, /^\/g\/[^/?#]+\/c\/[^/?#]+\/?$/, /^\/g\/[^/?#]+\/project\/?$/, /^\/library\/d\/[^/?#]+\/?$/], Q = new Set, $ = {
        safeUrls: Q,
        unsafeUrls: Q,
        blockedUrls: Q
    }
}));
export {
    ye as a, be as c, G as i, J as l, Te as n, q as o, W as r, Se as s, we as t
};
//# sourceMappingURL=3ed411a3-i1lda8rz3q8xw8qc.js.map