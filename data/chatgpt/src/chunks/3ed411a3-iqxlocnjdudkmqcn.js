const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/343cb406-d69bck6k47arlhci.js", "assets/f025431a-ehagpvg3m4e1cduv.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $r as n,
    AG as r,
    AJ as i,
    B6 as a,
    DG as o,
    EJ as s,
    Fc as c,
    Gr as l,
    JP as u,
    K8 as d,
    KP as f,
    Nit as p,
    Nrt as m,
    OJ as h,
    Pit as g,
    Prt as _,
    QJ as v,
    Qit as y,
    Qq as b,
    Qr as x,
    VJ as S,
    Xr as C,
    Yr as w,
    Zr as T,
    a0 as E,
    a7 as ee,
    b7 as te,
    eJ as ne,
    i5 as D,
    i_ as re,
    iat as ie,
    l7 as O,
    mst as ae,
    o1 as oe,
    pnt as se,
    qr as ce,
    r0 as le,
    rU as ue,
    r_ as de,
    sU as fe,
    u1 as k,
    wst as A,
    ynt as j,
    zc as M
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    O as N,
    Vn as P,
    cn as F,
    ln as I,
    s as L,
    wn as R
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    KOt as z,
    YOt as B,
    Yhn as V,
    qhn as pe
} from "./conversation-small-fym1zmu9zimymmm1.js";

function me(e) {
    "use forget";
    let t = (0, H.c)(5),
        {
            data: n,
            isLoading: i
        } = r(e),
        a;
    bb0: {
        if (typeof n != `object` || !n) {
            a = !1;
            break bb0
        }
        let e = n.role_summaries;
        if (!Array.isArray(e)) {
            a = !1;
            break bb0
        }
        let r;t[0] === e ? r = t[1] : (r = e.some(he), t[0] = e, t[1] = r),
        a = r
    }
    let o = a,
        s;
    return t[2] !== o || t[3] !== i ? (s = {
        hasLockdownRole: o,
        isLoading: i
    }, t[2] = o, t[3] = i, t[4] = s) : s = t[4], s
}

function he(e) {
    if (typeof e != `object` || !e) return !1;
    let t = e.metadata;
    return typeof t != `object` || !t ? !1 : t.lockdown_mode === !0
}
var H, ge = e((() => {
    H = R(), o()
}));

function U() {
    return se(X)
}

function W(e) {
    if (!e || !e.startsWith(`/`) && !e.startsWith(`https://chatgpt.com/`) || e.startsWith(`//`) || e.includes(`\\`) || /%5c/i.test(e)) return !1;
    try {
        let t = new URL(e, `https://chatgpt.com`);
        return t.origin === `https://chatgpt.com` ? Z.some(e => e.test(t.pathname)) || B(t.pathname) : !1
    } catch {
        return !1
    }
}
async function G(e, n = U()) {
    if (!n) return !1;
    if (W(e)) return !0;
    let r = await F(() => import(`./343cb406-d69bck6k47arlhci.js`).then(e => t(e.t())), __vite__mapDeps([0, 1]));
    if (p != null && e?.startsWith(p)) return !0;
    try {
        let t = r.get(new URL(e ?? ``).hostname);
        return t != null && new Set([`openai.com`, `chatgpt.com`, `chat.com`]).has(t)
    } catch {
        return !1
    }
}

function K(e, t, n, r) {
    return ee.safeGet(`/conversation/{conversation_id}/url_safe`, {
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

function _e(e, t, n = !1) {
    let r = D(() => E()),
        i = !_(),
        a = U();
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
            if (!n && (await G(t, a) || d(() => w(f(e), t) === l.Safe))) return {
                safe: !0,
                blocked: !1
            };
            if (i) return {
                safe: !1,
                blocked: !1
            };
            let s = n ? f(e) : void 0,
                c = s == null ? void 0 : x(s, t),
                u = await K(e, t, r, {
                    signal: o,
                    expectedErrorStatuses: [404]
                });
            if (s == null || c == null || !u.safe || u.blocked || ce(s, t, c)) return u;
            let p = d(() => w(s, t));
            return {
                safe: p === l.Safe,
                blocked: p === l.Blocked
            }
        },
        enabled: e != null && t != null,
        retry: (e, t) => !(t instanceof y) || t.status !== 404 ? !1 : e < 3 && t.code === `conversation_inaccessible` ? !0 : (te(t), !1),
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
    let i = r ?? (e == null ? void 0 : s(e)),
        a = oe()?.getWorkspaceId(),
        {
            hasLockdownRole: o
        } = me(a),
        c = _(),
        {
            data: u,
            isLoading: d
        } = fe(ae.LockdownModeEnabled),
        p = D(() => i != null && M(f(i))),
        m = ve({
            isAuthenticatedUser: c,
            isConsumerLockdownModeDisabledForConversation: S(i, e => V(e?.disabledToolIds, e?.conversationOrigin, p)),
            isLockdownModeEnabled: u,
            isLockdownModeLoading: d
        }),
        h = o || m,
        g = D(() => i == null || t == null ? l.Unknown : w(f(i), t)),
        v = g === l.Safe,
        y = g === l.Blocked,
        b = g === l.Unsafe,
        x = b && W(t) && U(),
        C = _e(e, !v && !y && !h && (!b || x) ? t : void 0, x),
        {
            data: {
                safe: T,
                blocked: E
            } = {}
        } = C;
    return y || E === !0 ? {
        safeUrl: void 0,
        isPending: !1,
        isUnsafe: !1,
        isBlocked: !0,
        isPolicySuppressed: !1
    } : b && !T ? {
        safeUrl: void 0,
        isPending: n && x && C.isLoading,
        isUnsafe: !0,
        isBlocked: !1,
        isPolicySuppressed: !1
    } : h ? {
        safeUrl: void 0,
        isPending: !1,
        isUnsafe: !1,
        isBlocked: !1,
        isPolicySuppressed: !0
    } : {
        safeUrl: v || T || !n ? t : void 0,
        isPending: n && C.isLoading,
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
    let [r, i] = (0, Y.useState)(void 0), [a] = (0, Y.useState)(() => de(e => {
        i(e)
    }, t));
    return (0, Y.useEffect)(() => {
        n || a(e)
    }, [a, n, e]), n || r === e ? e : void 0
}

function Se(e, t, n) {
    let r = n ?? e,
        i = D(() => E()),
        a = U(),
        o = D(() => r == null ? $ : T(f(r))),
        s = (0, Y.useMemo)(() => t.filter(e => C(o, e) === l.Safe), [t, o]),
        {
            data: c = []
        } = N({
            queryKey: [`safe-urls`, e, t, i, s, (0, Y.useMemo)(() => t.filter(e => {
                let t = C(o, e);
                return t === l.Unsafe || t === l.Blocked
            }), [t, o]), a],
            queryFn: async () => {
                let n = t.filter(e => C(o, e) === l.Unknown),
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
    } = t, o = e.filter(e => r(e) !== l.Safe);
    if (o.length === 0) return [];
    let s = new Set(o.filter(e => {
            let t = r(e);
            return t === l.Unsafe || t === l.Blocked
        })),
        c = o.filter(e => !s.has(e)),
        u = await Promise.all(c.map(e => n(e))),
        d = c.filter((e, t) => !u[t]);
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
    let n = f(e),
        r = h(e);
    return Ce(t, {
        isKnownSafeUrl: G,
        getConversationUrlSafety: e => d(() => w(n, e)),
        serverCheck: r == null ? void 0 : async (e, t) => (await K(r, e, t)).safe,
        isHistoryAndTrainingDisabled: d(() => E())
    })
}
var Y, X, Z, Q, $, Te = e((() => {
    A(), pe(), u(), n(), le(), ne(), ge(), ue(), z(), a(), k(), i(), m(), g(), ie(), O(), v(), j(), L(), c(), re(), Y = t(P()), I(), X = `368397779`, Z = [/^\/c\/[^/?#]+\/?$/, /^\/g\/[^/?#]+\/c\/[^/?#]+\/?$/, /^\/g\/[^/?#]+\/project\/?$/, /^\/library\/d\/[^/?#]+\/?$/], Q = new Set, $ = {
        safeUrls: Q,
        unsafeUrls: Q,
        blockedUrls: Q
    }
}));
export {
    ye as a, be as c, G as i, J as l, Te as n, q as o, W as r, Se as s, we as t
};
//# sourceMappingURL=3ed411a3-iqxlocnjdudkmqcn.js.map