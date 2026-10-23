const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/343cb406-d69bck6k47arlhci.js", "assets/f025431a-ehagpvg3m4e1cduv.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $r as n,
    A8 as r,
    B0 as i,
    C_ as a,
    Crt as o,
    DU as s,
    H0 as c,
    I7 as l,
    Jr as u,
    Kr as d,
    Lat as f,
    Lit as p,
    M7 as m,
    Oct as h,
    QJ as g,
    Qr as _,
    Rat as v,
    Rit as y,
    SJ as b,
    SY as x,
    U1 as ee,
    XJ as S,
    Xr as C,
    ZG as w,
    Zr as T,
    _rt as E,
    al as te,
    cot as ne,
    dY as re,
    eK as ie,
    eY as ae,
    ei as oe,
    gF as D,
    j5 as O,
    jU as se,
    not as ce,
    q1 as le,
    q7 as ue,
    tl as de,
    vF as fe,
    vct as pe,
    wJ as k,
    w_ as A,
    y5 as j
} from "./4813494d-mdvd4786a87166cc.js";
import {
    O as M,
    Vn as N,
    cn as P,
    ln as F,
    s as I,
    wn as L
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    GOt as R,
    JOt as z,
    Ygn as B,
    qgn as me
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function he(e) {
    "use forget";
    let t = (0, V.c)(5),
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
        let r;t[0] === e ? r = t[1] : (r = e.some(ge), t[0] = e, t[1] = r),
        i = r
    }
    let a = i,
        o;
    return t[2] !== a || t[3] !== r ? (o = {
        hasLockdownRole: a,
        isLoading: r
    }, t[2] = a, t[3] = r, t[4] = o) : o = t[4], o
}

function ge(e) {
    if (typeof e != `object` || !e) return !1;
    let t = e.metadata;
    return typeof t != `object` || !t ? !1 : t.lockdown_mode === !0
}
var V, _e = e((() => {
    V = L(), w()
}));

function H() {
    return E(X)
}

function U(e) {
    if (!e || !e.startsWith(`/`) && !e.startsWith(`https://chatgpt.com/`) || e.startsWith(`//`) || e.includes(`\\`) || /%5c/i.test(e)) return !1;
    try {
        let t = new URL(e, `https://chatgpt.com`);
        return t.origin === `https://chatgpt.com` ? Z.some(e => e.test(t.pathname)) || z(t.pathname) : !1
    } catch {
        return !1
    }
}
async function W(e, n = H()) {
    if (!n) return !1;
    if (U(e)) return !0;
    let r = await P(() => import(`./343cb406-d69bck6k47arlhci.js`).then(e => t(e.t())), __vite__mapDeps([0, 1]));
    if (f != null && e?.startsWith(f)) return !0;
    try {
        let t = r.get(new URL(e ?? ``).hostname);
        return t != null && new Set([`openai.com`, `chatgpt.com`, `chat.com`]).has(t)
    } catch {
        return !1
    }
}

function G(e, t, n, r) {
    return m.safeGet(`/conversation/{conversation_id}/url_safe`, {
        ...r,
        additionalHeaders: b({
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

function ve(e, t, r = !1) {
    let i = O(() => c()),
        a = !y(),
        o = H();
    return M({
        queryKey: [`safe-url`, {
            serverThreadId: e,
            url: t,
            isHistoryAndTrainingDisabled: i,
            legacySafeUrlBypassEnabled: o,
            forceServerValidation: r
        }],
        queryFn: async ({
            signal: s
        }) => {
            if (e == null || t == null) throw Error(`Unexpected falsey useSafeUrlQuery`);
            if (!r && (await W(t, o) || j(() => C(D(e), t) === d.Safe))) return {
                safe: !0,
                blocked: !1
            };
            if (a) return {
                safe: !1,
                blocked: !1
            };
            let c = r ? D(e) : void 0,
                l = c == null ? void 0 : n(c, t),
                f = await G(e, t, i, {
                    signal: s,
                    expectedErrorStatuses: [404]
                });
            if (c == null || l == null || !f.safe || f.blocked || u(c, t, l)) return f;
            let p = j(() => C(c, t));
            return {
                safe: p === d.Safe,
                blocked: p === d.Blocked
            }
        },
        enabled: e != null && t != null,
        retry: (e, t) => !(t instanceof ce) || t.status !== 404 ? !1 : e < 3 && t.code === `conversation_inaccessible` ? !0 : (ue(t), !1),
        retryDelay: e => 1e3 * 2 ** e
    })
}

function ye({
    isAuthenticatedUser: e,
    isConsumerLockdownModeDisabledForConversation: t,
    isLockdownModeEnabled: n,
    isLockdownModeLoading: r
}) {
    return t || !e ? !1 : n === !0 || n !== !1 && r
}

function K(e, t, n = !0, r) {
    let i = r ?? (e == null ? void 0 : S(e)),
        a = ee()?.getWorkspaceId(),
        {
            hasLockdownRole: o
        } = he(a),
        s = y(),
        {
            data: c,
            isLoading: l
        } = se(pe.LockdownModeEnabled),
        u = O(() => i != null && te(D(i))),
        f = ye({
            isAuthenticatedUser: s,
            isConsumerLockdownModeDisabledForConversation: re(i, e => B(e?.disabledToolIds, e?.conversationOrigin, u)),
            isLockdownModeEnabled: c,
            isLockdownModeLoading: l
        }),
        p = o || f,
        m = O(() => i == null || t == null ? d.Unknown : C(D(i), t)),
        h = m === d.Safe,
        g = m === d.Blocked,
        _ = m === d.Unsafe,
        v = _ && U(t) && H(),
        b = ve(e, !h && !g && !p && (!_ || v) ? t : void 0, v),
        {
            data: {
                safe: x,
                blocked: w
            } = {}
        } = b;
    return g || w === !0 ? {
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
    } : _ && !x ? {
        safeUrl: void 0,
        isPending: n && v && b.isLoading,
        isUnsafe: !0,
        isBlocked: !1,
        isPolicySuppressed: !1
    } : {
        safeUrl: h || x || !n ? t : void 0,
        isPending: n && b.isLoading,
        isUnsafe: !1,
        isBlocked: !1,
        isPolicySuppressed: !1
    }
}

function be(e, t, n = !0, r) {
    return K(e, t, n, r).safeUrl
}

function q(e, t, n = !0, r, i = !1) {
    let a = xe(t, 500, i),
        o = K(e, a, n, r);
    return {
        safeUrl: o.safeUrl,
        isPending: o.isPending || n && t != null && a !== t,
        isUnsafe: o.isUnsafe,
        isBlocked: o.isBlocked,
        isPolicySuppressed: o.isPolicySuppressed
    }
}

function J(e, t, n = !0, r, i = !1) {
    return q(e, t, n, r, i).safeUrl
}

function xe(e, t, n = !1) {
    let [r, i] = (0, Y.useState)(void 0), [o] = (0, Y.useState)(() => a(e => {
        i(e)
    }, t));
    return (0, Y.useEffect)(() => {
        n || o(e)
    }, [o, n, e]), n || r === e ? e : void 0
}

function Se(e, t, n) {
    let r = n ?? e,
        i = O(() => c()),
        a = H(),
        o = O(() => r == null ? $ : _(D(r))),
        s = (0, Y.useMemo)(() => t.filter(e => T(o, e) === d.Safe), [t, o]),
        {
            data: l = []
        } = M({
            queryKey: [`safe-urls`, e, t, i, s, (0, Y.useMemo)(() => t.filter(e => {
                let t = T(o, e);
                return t === d.Unsafe || t === d.Blocked
            }), [t, o]), a],
            queryFn: async () => {
                let n = t.filter(e => T(o, e) === d.Unknown),
                    r = (await Promise.allSettled(n.map(async t => {
                        if (await W(t, a)) return t;
                        if (e == null) return null;
                        try {
                            let n = await G(e, t, i);
                            return n.safe && !n.blocked ? t : null
                        } catch {
                            return null
                        }
                    }))).map(e => e.status === `fulfilled` ? e.value : null).filter(e => e != null);
                return s.concat(r)
            },
            enabled: e != null && t.length > 0
        });
    return e == null ? s : l
}
async function Ce(e, t) {
    let {
        isKnownSafeUrl: n,
        getConversationUrlSafety: r,
        serverCheck: i,
        isHistoryAndTrainingDisabled: a
    } = t, o = e.filter(e => r(e) !== d.Safe);
    if (o.length === 0) return [];
    let s = new Set(o.filter(e => {
            let t = r(e);
            return t === d.Unsafe || t === d.Blocked
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
    let n = D(e),
        r = g(e);
    return Ce(t, {
        isKnownSafeUrl: W,
        getConversationUrlSafety: e => j(() => C(n, e)),
        serverCheck: r == null ? void 0 : async (e, t) => (await G(r, e, t)).safe,
        isHistoryAndTrainingDisabled: j(() => c())
    })
}
var Y, X, Z, Q, $, Te = e((() => {
    h(), me(), fe(), oe(), i(), k(), _e(), s(), R(), r(), le(), ae(), p(), v(), ne(), l(), x(), o(), I(), de(), A(), Y = t(N()), F(), X = `368397779`, Z = [/^\/c\/[^/?#]+\/?$/, /^\/g\/[^/?#]+\/c\/[^/?#]+\/?$/, /^\/g\/[^/?#]+\/project\/?$/, /^\/library\/d\/[^/?#]+\/?$/], Q = new Set, $ = {
        safeUrls: Q,
        unsafeUrls: Q,
        blockedUrls: Q
    }
}));
export {
    be as a, J as c, W as i, q as l, Te as n, K as o, U as r, Se as s, we as t
};
//# sourceMappingURL=3ed411a3-byuit4zmj8b452ow.js.map