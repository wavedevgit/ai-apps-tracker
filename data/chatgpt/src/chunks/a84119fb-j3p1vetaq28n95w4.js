import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    Art as r,
    CN as i,
    HN as a,
    IU as o,
    Iv as s,
    J5 as c,
    LU as l,
    Rv as u,
    UN as d,
    c2 as f,
    d2 as p,
    e5 as m,
    f5 as ee,
    jrt as h,
    krt as g,
    s2 as te,
    wN as _,
    x5 as ne
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as v,
    N as y,
    Rn as b,
    Vn as x,
    s as S,
    wn as C,
    zn as re
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    DAt as ie,
    DG as w,
    DW as ae,
    LIn as T,
    LTn as oe,
    MIn as E,
    NAt as D,
    OG as O,
    OW as k,
    RTn as A,
    fAt as j,
    kG as M,
    l6 as se,
    lAt as ce,
    u6 as N
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    Bx as le,
    zx as P
} from "./c2675c8c-4fpunyxk1uf8cfp1.js";
import {
    as as F,
    os as I
} from "./8b34dbc2-peb5nzi8z3rrflnv.js";
import {
    n as L,
    r as ue
} from "./4f866508-db2hlkp9ibsclbd7.js";
import {
    n as R,
    t as z
} from "./cd7c6193-hr6i118uuh7lj38r.js";
import {
    o as B,
    s as de,
    t as fe
} from "./4cf35c7a-fuufw34ubkxvq703.js";
import {
    i as pe,
    n as me,
    r as V,
    t as H
} from "./2bed0ed0-fesot26psv1288pe.js";
import {
    n as U,
    t as W
} from "./8d72234e-e5xbaaj1z6k9qasm.js";
import {
    i as G,
    n as K,
    r as he,
    t as q
} from "./a4cc73b1-ier1f4cf8qvhxp41.js";

function ge() {
    "use forget";
    let e = (0, J.c)(10),
        t = (0, Y.useContext)($),
        n = t?.start,
        r = (0, Y.useRef)(void 0),
        i, a;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = () => {
        let e = new AbortController;
        return r.current = e.signal, () => e.abort(Error(`unmount`))
    }, a = [], e[0] = i, e[1] = a) : (i = e[0], a = e[1]), d(i, a);
    let o;
    e[2] === n ? o = e[3] : (o = e => n?.({
        ...e,
        signal: r.current
    }) ?? !1, e[2] = n, e[3] = o);
    let s = _(o),
        c = t?.isConfirming ?? !1,
        l = t?.isLoading ?? !1,
        u = t?.loadingOauthLinkId,
        f = n ? s : void 0,
        p = t?.openCreditAccountDetail,
        m;
    return e[4] !== c || e[5] !== l || e[6] !== u || e[7] !== f || e[8] !== p ? (m = {
        isConfirming: c,
        isLoading: l,
        loadingOauthLinkId: u,
        open: f,
        openCreditAccountDetail: p
    }, e[4] = c, e[5] = l, e[6] = u, e[7] = f, e[8] = p, e[9] = m) : m = e[9], m
}

function _e() {
    "use forget";
    return (0, Y.useContext)($)?.openAccountDetail
}

function ve(e) {
    "use forget";
    let t = (0, J.c)(36),
        {
            children: n,
            conversation: i
        } = e,
        a = re(),
        s = y(),
        l;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (l = o(), t[0] = l) : l = t[0];
    let d = l,
        f = le(!1),
        m = c(f),
        g;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (g = {
        productSku: oe.CONNECTOR_SETTING,
        canReuseLink: u,
        skipPostConnectExperience: !0
    }, t[1] = g) : g = t[1];
    let _ = I(g),
        {
            sensitiveValuesHidden: v
        } = de(),
        b;
    t[2] === i ? b = t[3] : (b = {
        conversation: i
    }, t[2] = i, t[3] = b);
    let {
        isInitializing: x,
        loadingOauthLinkId: S,
        start: C
    } = pe(b), T;
    t[4] === i ? T = t[5] : (T = () => me(i), t[4] = i, t[5] = T);
    let D = c(T),
        k;
    t[6] !== i || t[7] !== _ || t[8] !== a || t[9] !== f || t[10] !== x || t[11] !== C ? (k = e => {
        if (f()) return !1;
        let t = {
                disableExposureLog: e?.accountLinkingContext?.isDebugForced === !0
            },
            n = e?.accountLinkingContext != null && e.autoStartOauthLinkId == null && e.destination == null && O(t),
            r = e?.destination === `credit` ? `creditScore` : e?.destination;
        if (e?.destination == null && !n && (e?.autoStartOauthLinkId != null || e?.accountLinkingContext != null || !w())) return C(e);
        let o = () => !e?.signal?.aborted && (r === `creditScore` || (n ? O(t) : w()));
        if (x || !o()) return !1;
        let s = r == null || r === `accounts`,
            c = s ? e?.linkingAttempt ?? ce(e?.trackingContext, `first_party`) : void 0;
        if (s && !c?.claim()) return !1;
        let l = c?.context ?? (e?.trackingContext?.entrypoint ? {
                entrypoint: e.trackingContext.entrypoint
            } : void 0),
            u = !1,
            m = () => {
                let t = new AbortController,
                    o = !1;
                p(W, {
                    chatSDK: K(q()),
                    clientThreadId: i.id,
                    conversation: i,
                    features: [],
                    locale: a.locale,
                    params: {
                        view: `accountLinking`,
                        ...r == null ? {} : {
                            initialTab: r
                        },
                        trackingContext: l,
                        ...n ? {
                            accountLinkingContext: e.accountLinkingContext
                        } : {}
                    },
                    title: a.formatMessage(he),
                    onClose: () => {
                        t.abort(), c?.finish()
                    },
                    ...n ? {
                        onRefreshOrigin: () => {
                            o || t.signal.aborted || (o = !0, Promise.resolve().then(() => e.onSuccess?.(() => !t.signal.aborted, t.signal)).then(e => {
                                if (!t.signal.aborted) {
                                    if (e === !1) throw Error(`Ledger onboarding handoff did not start`);
                                    te(W)
                                }
                            }).catch(e => {
                                t.signal.aborted || d.danger(a.formatMessage(V), {
                                    error: e
                                })
                            }))
                        }
                    } : {}
                }), u = !0
            };
        return e?.destination != null || n ? (f.set(!0), (e.prepareConnectorLink ? e.prepareConnectorLink(o, e.signal, void 0, l) : ae(l, t => _(ie, {
            ...t,
            signal: e.signal
        })).then(ye)).then(async t => {
            !t || !o() || e.beforeOpen && !await e.beforeOpen() || o() && m()
        }).catch(t => {
            e.signal?.aborted || d.danger(a.formatMessage(V), {
                error: t
            })
        }).finally(() => {
            f.set(!1), u || c?.finish(), e.onSettled?.()
        }), !0) : (m(), !0)
    }, t[6] = i, t[7] = _, t[8] = a, t[9] = f, t[10] = x, t[11] = C, t[12] = k) : k = t[12];
    let A = k,
        j, M;
    t[13] !== i || t[14] !== s ? (j = () => ne(() => {
        let e = z(i)?.focusedObject.params;
        return e?.route === Z && e.accountDetailSource === `mattress_accounts_tab`
    }, (e, t) => {
        t && !e && (r.count(h.ECOSYSTEM, `ledger.account_detail.host_closed`, [{
            key: `surface`,
            value: `mattress_accounts_tab`
        }]), ue(s))
    }, {
        fireImmediately: !0
    }), M = [i, s], t[13] = i, t[14] = s, t[15] = j, t[16] = M) : (j = t[15], M = t[16]), (0, Y.useEffect)(j, M);
    let N, P;
    t[17] !== i || t[18] !== v ? (N = () => {
        let e = z(i),
            t = e?.focusedObject.params;
        if (e == null || e.chatSDK == null || t?.route !== Z || t.accountDetailSource !== `mattress_accounts_tab`) return;
        let {
            chatSDK: n
        } = e, r = se(i);
        r.applyRemoteWidgetState$(n.widgetId, {
            ...ee(r.getWidgetState$(n), {}),
            [fe]: v
        })
    }, P = [i, v], t[17] = i, t[18] = v, t[19] = N, t[20] = P) : (N = t[19], P = t[20]), (0, Y.useEffect)(N, P);
    let F;
    t[21] === i ? F = t[22] : (F = e => {
        let {
            accountSelection: t,
            selectionSnapshot: n,
            sensitiveValuesHidden: a,
            title: o
        } = e, s = q(), c = Date.now();
        r.count(h.ECOSYSTEM, `ledger.account_detail.host_opened`, [{
            key: `surface`,
            value: `mattress_accounts_tab`
        }]), E(i), z.set(i, {
            focusedObject: {
                title: o,
                params: {
                    accountSelection: t,
                    accountDetailOpenedAtMs: c,
                    accountDetailSource: `mattress_accounts_tab`,
                    enableTargetedReply: !0,
                    hideHeader: !0,
                    loadingState: `detail`,
                    layout: {
                        isSidebarResponsive: !0,
                        sidebarWidthPx: Q
                    },
                    route: Z,
                    ...n ? {
                        selectionSnapshot: n
                    } : {}
                }
            },
            chatSDK: K(s, {
                sensitiveValuesHidden: a
            })
        })
    }, t[21] = i, t[22] = F);
    let L = F,
        R;
    t[23] !== i || t[24] !== a ? (R = () => {
        E(i), z.set(i, {
            focusedObject: {
                title: a.formatMessage({
                    id: `mattress.financeCreditAccountDetail.title`,
                    defaultMessage: `Credit score`
                }),
                params: {
                    view: `creditAccountDetail`,
                    forceFullHeight: !0,
                    layout: {
                        isSidebarResponsive: !0,
                        sidebarWidthPx: Q
                    }
                }
            },
            chatSDK: K(q())
        })
    }, t[23] = i, t[24] = a, t[25] = R) : R = t[25];
    let B = R,
        H = x || m,
        U;
    t[26] !== D || t[27] !== S || t[28] !== L || t[29] !== B || t[30] !== A || t[31] !== H ? (U = {
        isConfirming: D,
        isLoading: H,
        loadingOauthLinkId: S,
        openAccountDetail: L,
        openCreditAccountDetail: B,
        start: A
    }, t[26] = D, t[27] = S, t[28] = L, t[29] = B, t[30] = A, t[31] = H, t[32] = U) : U = t[32];
    let G;
    return t[33] !== n || t[34] !== U ? (G = (0, X.jsx)($.Provider, {
        value: U,
        children: n
    }), t[33] = n, t[34] = U, t[35] = G) : G = t[35], G
}

function ye(e) {
    return e?.auth_status === `ACTIVE`
}
var J, Y, X, Z, Q, $, be = e((() => {
    J = C(), j(), k(), m(), F(), f(), U(), R(), N(), D(), M(), L(), B(), G(), H(), s(), A(), T(), n(), P(), l(), g(), i(), a(), S(), Y = t(x()), b(), X = v(), Z = `account_detail`, Q = 400, $ = (0, Y.createContext)(null)
}));
export {
    _e as i, be as n, ge as r, ve as t
};
//# sourceMappingURL=a84119fb-j3p1vetaq28n95w4.js.map