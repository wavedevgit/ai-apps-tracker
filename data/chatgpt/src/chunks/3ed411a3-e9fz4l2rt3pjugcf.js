const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/343cb406-d69bck6k47arlhci.js", "assets/f025431a-ehagpvg3m4e1cduv.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $G as n,
    $c as r,
    $r as i,
    $st as a,
    Dat as o,
    EJ as s,
    Gr as c,
    Hnt as l,
    I1 as u,
    J7 as d,
    Jnt as f,
    L7 as p,
    M1 as ee,
    M5 as m,
    N7 as h,
    NU as te,
    Nat as g,
    QJ as ne,
    Qr as _,
    S_ as v,
    Ust as re,
    Xr as y,
    Yr as b,
    Zr as x,
    b5 as S,
    cat as C,
    cit as w,
    eY as T,
    fF as ie,
    j0 as E,
    k0 as ae,
    kU as oe,
    lat as se,
    lit as D,
    m8 as ce,
    nK as le,
    nY as ue,
    pY as de,
    qr as fe,
    rl as pe,
    uF as O,
    wJ as k,
    wY as A,
    x_ as j
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Hn as M,
    O as N,
    Tn as P,
    ln as F,
    s as I,
    un as L
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    JOt as R,
    ZOt as z,
    lgn as B,
    sgn as me
} from "./conversation-small-cawdu7il3ha6y70c.js";

function he(e) {
    "use forget";
    let t = (0, V.c)(5),
        {
            data: n,
            isLoading: r
        } = le(e),
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
    V = P(), n()
}));

function H() {
    return l(X)
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
    let r = await F(() => import(`./343cb406-d69bck6k47arlhci.js`).then(e => t(e.t())), __vite__mapDeps([0, 1]));
    if (C != null && e?.startsWith(C)) return !0;
    try {
        let t = r.get(new URL(e ?? ``).hostname);
        return t != null && new Set([`openai.com`, `chatgpt.com`, `chat.com`]).has(t)
    } catch {
        return !1
    }
}

function G(e, t, n, r) {
    return h.safeGet(`/conversation/{conversation_id}/url_safe`, {
        ...r,
        additionalHeaders: k({
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

function ve(e, t, n = !1) {
    let r = m(() => E()),
        i = !D(),
        a = H();
    return N({
        queryKey: [`safe-url`, {
            serverThreadId: e,
            url: t,
            isHistoryAndTrainingDisabled: r,
            legacySafeUrlBypassEnabled: a,
            forceServerValidation: n
        }],
        queryFn: async ({
            signal: o
        }) => {
            if (e == null || t == null) throw Error(`Unexpected falsey useSafeUrlQuery`);
            if (!n && (await W(t, a) || S(() => b(O(e), t) === c.Safe))) return {
                safe: !0,
                blocked: !1
            };
            if (i) return {
                safe: !1,
                blocked: !1
            };
            let s = n ? O(e) : void 0,
                l = s == null ? void 0 : _(s, t),
                u = await G(e, t, r, {
                    signal: o,
                    expectedErrorStatuses: [404]
                });
            if (s == null || l == null || !u.safe || u.blocked || fe(s, t, l)) return u;
            let d = S(() => b(s, t));
            return {
                safe: d === c.Safe,
                blocked: d === c.Blocked
            }
        },
        enabled: e != null && t != null,
        retry: (e, t) => !(t instanceof o) || t.status !== 404 ? !1 : e < 3 && t.code === `conversation_inaccessible` ? !0 : (d(t), !1),
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
    let i = r ?? (e == null ? void 0 : ne(e)),
        a = ee()?.getWorkspaceId(),
        {
            hasLockdownRole: o
        } = he(a),
        s = D(),
        {
            data: l,
            isLoading: u
        } = te(re.LockdownModeEnabled),
        d = m(() => i != null && pe(O(i))),
        f = ye({
            isAuthenticatedUser: s,
            isConsumerLockdownModeDisabledForConversation: de(i, e => B(e?.disabledToolIds, e?.conversationOrigin, d)),
            isLockdownModeEnabled: l,
            isLockdownModeLoading: u
        }),
        p = o || f,
        h = m(() => i == null || t == null ? c.Unknown : b(O(i), t)),
        g = h === c.Safe,
        _ = h === c.Blocked,
        v = h === c.Unsafe,
        y = v && U(t) && H(),
        x = ve(e, !g && !_ && !p && (!v || y) ? t : void 0, y),
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
    } : v && !S ? {
        safeUrl: void 0,
        isPending: n && y && x.isLoading,
        isUnsafe: !0,
        isBlocked: !1,
        isPolicySuppressed: !1
    } : p ? {
        safeUrl: void 0,
        isPending: !1,
        isUnsafe: !1,
        isBlocked: !1,
        isPolicySuppressed: !0
    } : {
        safeUrl: g || S || !n ? t : void 0,
        isPending: n && x.isLoading,
        isUnsafe: !1,
        isBlocked: !1,
        isPolicySuppressed: !1
    }
}

function q(e, t, n = !0, r) {
    return K(e, t, n, r).safeUrl
}

function J(e, t, n = !0, r, i = !1) {
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

function be(e, t, n = !0, r, i = !1) {
    return J(e, t, n, r, i).safeUrl
}

function xe(e, t, n = !1) {
    let [r, i] = (0, Y.useState)(void 0), [a] = (0, Y.useState)(() => j(e => {
        i(e)
    }, t));
    return (0, Y.useEffect)(() => {
        n || a(e)
    }, [a, n, e]), n || r === e ? e : void 0
}

function Se(e, t, n) {
    let r = n ?? e,
        i = m(() => E()),
        a = H(),
        o = m(() => r == null ? $ : x(O(r))),
        s = (0, Y.useMemo)(() => t.filter(e => y(o, e) === c.Safe), [t, o]),
        {
            data: l = []
        } = N({
            queryKey: [`safe-urls`, e, t, i, s, (0, Y.useMemo)(() => t.filter(e => {
                let t = y(o, e);
                return t === c.Unsafe || t === c.Blocked
            }), [t, o]), a],
            queryFn: async () => {
                let n = t.filter(e => y(o, e) === c.Unknown),
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
    } = t, o = e.filter(e => r(e) !== c.Safe);
    if (o.length === 0) return [];
    let s = new Set(o.filter(e => {
            let t = r(e);
            return t === c.Unsafe || t === c.Blocked
        })),
        l = o.filter(e => !s.has(e)),
        u = await Promise.all(l.map(e => n(e))),
        d = l.filter((e, t) => !u[t]);
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
    let n = O(e),
        r = T(e);
    return Ce(t, {
        isKnownSafeUrl: W,
        getConversationUrlSafety: e => S(() => b(n, e)),
        serverCheck: r == null ? void 0 : async (e, t) => (await G(r, e, t)).safe,
        isHistoryAndTrainingDisabled: S(() => E())
    })
}
var Y, X, Z, Q, $, Te = e((() => {
    a(), me(), ie(), i(), ae(), s(), _e(), oe(), R(), ce(), u(), ue(), w(), se(), g(), p(), A(), f(), I(), r(), v(), Y = t(M()), L(), X = `368397779`, Z = [/^\/c\/[^/?#]+\/?$/, /^\/g\/[^/?#]+\/c\/[^/?#]+\/?$/, /^\/g\/[^/?#]+\/project\/?$/, /^\/library\/d\/[^/?#]+\/?$/], Q = new Set, $ = {
        safeUrls: Q,
        unsafeUrls: Q,
        blockedUrls: Q
    }
}));
export {
    q as a, be as c, W as i, J as l, Te as n, K as o, U as r, Se as s, we as t
};
//# sourceMappingURL=3ed411a3-e9fz4l2rt3pjugcf.js.map