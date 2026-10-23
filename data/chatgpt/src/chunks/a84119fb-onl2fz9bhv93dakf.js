import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    Att as r,
    CN as i,
    HN as a,
    Htt as o,
    IU as s,
    Irt as c,
    Iv as l,
    LU as u,
    Lrt as d,
    Rrt as f,
    Rv as p,
    UN as m,
    c2 as h,
    d2 as ee,
    i5 as g,
    j5 as _,
    s2 as te,
    wN as v
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as y,
    N as ne,
    Rn as b,
    Vn as x,
    s as S,
    wn as C,
    zn as re
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    DAt as w,
    DG as T,
    DW as ie,
    HIn as E,
    OG as D,
    OW as O,
    RTn as ae,
    kG as k,
    l6 as oe,
    oAt as A,
    qIn as j,
    rAt as se,
    u6 as M,
    xAt as ce,
    zTn as N
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Bx as P,
    Vx as F
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    as as I,
    os as le
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    n as L,
    r as ue
} from "./4f866508-nx1lmkigi4ro0s38.js";
import {
    n as R,
    t as z
} from "./cd7c6193-c38khf2nn57jm4p7.js";
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
} from "./2bed0ed0-g8fnek6wui513y68.js";
import {
    n as U,
    t as W
} from "./8d72234e-iux2qaioe7hi4mzn.js";
import {
    i as G,
    n as K,
    r as he,
    t as q
} from "./a4cc73b1-od9yjks1xhqw1ovh.js";

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
    }, a = [], e[0] = i, e[1] = a) : (i = e[0], a = e[1]), m(i, a);
    let o;
    e[2] === n ? o = e[3] : (o = e => n?.({
        ...e,
        signal: r.current
    }) ?? !1, e[2] = n, e[3] = o);
    let s = v(o),
        c = t?.isConfirming ?? !1,
        l = t?.isLoading ?? !1,
        u = t?.loadingOauthLinkId,
        d = n ? s : void 0,
        f = t?.openCreditAccountDetail,
        p;
    return e[4] !== c || e[5] !== l || e[6] !== u || e[7] !== d || e[8] !== f ? (p = {
        isConfirming: c,
        isLoading: l,
        loadingOauthLinkId: u,
        open: d,
        openCreditAccountDetail: f
    }, e[4] = c, e[5] = l, e[6] = u, e[7] = d, e[8] = f, e[9] = p) : p = e[9], p
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
            conversation: r
        } = e,
        i = re(),
        a = ne(),
        c;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = s(), t[0] = c) : c = t[0];
    let l = c,
        u = F(!1),
        m = _(u),
        h;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
        productSku: ae.CONNECTOR_SETTING,
        canReuseLink: p,
        skipPostConnectExperience: !0
    }, t[1] = h) : h = t[1];
    let v = le(h),
        {
            sensitiveValuesHidden: y
        } = de(),
        b;
    t[2] === r ? b = t[3] : (b = {
        conversation: r
    }, t[2] = r, t[3] = b);
    let {
        isInitializing: x,
        loadingOauthLinkId: S,
        start: C
    } = pe(b), w;
    t[4] === r ? w = t[5] : (w = () => me(r), t[4] = r, t[5] = w);
    let O = _(w),
        k;
    t[6] !== r || t[7] !== v || t[8] !== i || t[9] !== u || t[10] !== x || t[11] !== C ? (k = e => {
        if (u()) return !1;
        let t = {
                disableExposureLog: e?.accountLinkingContext?.isDebugForced === !0
            },
            n = e?.accountLinkingContext != null && e.autoStartOauthLinkId == null && e.destination == null && D(t),
            a = e?.destination === `credit` ? `creditScore` : e?.destination;
        if (e?.destination == null && !n && (e?.autoStartOauthLinkId != null || e?.accountLinkingContext != null || !T())) return C(e);
        let o = () => !e?.signal?.aborted && (a === `creditScore` || (n ? D(t) : T()));
        if (x || !o()) return !1;
        let s = a == null || a === `accounts`,
            c = s ? e?.linkingAttempt ?? se(e?.trackingContext, `first_party`) : void 0;
        if (s && !c?.claim()) return !1;
        let d = c?.context ?? (e?.trackingContext?.entrypoint ? {
                entrypoint: e.trackingContext.entrypoint
            } : void 0),
            f = !1,
            p = () => {
                let t = new AbortController,
                    o = !1;
                ee(W, {
                    chatSDK: K(q()),
                    clientThreadId: r.id,
                    conversation: r,
                    features: [],
                    locale: i.locale,
                    params: {
                        view: `accountLinking`,
                        ...a == null ? {} : {
                            initialTab: a
                        },
                        trackingContext: d,
                        ...n ? {
                            accountLinkingContext: e.accountLinkingContext
                        } : {}
                    },
                    title: i.formatMessage(he),
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
                                t.signal.aborted || l.danger(i.formatMessage(V), {
                                    error: e
                                })
                            }))
                        }
                    } : {}
                }), f = !0
            };
        return e?.destination != null || n ? (u.set(!0), (e.prepareConnectorLink ? e.prepareConnectorLink(o, e.signal, void 0, d) : ie(d, t => v(ce, {
            ...t,
            signal: e.signal
        })).then(ye)).then(async t => {
            !t || !o() || e.beforeOpen && !await e.beforeOpen() || o() && p()
        }).catch(t => {
            e.signal?.aborted || l.danger(i.formatMessage(V), {
                error: t
            })
        }).finally(() => {
            u.set(!1), f || c?.finish(), e.onSettled?.()
        }), !0) : (p(), !0)
    }, t[6] = r, t[7] = v, t[8] = i, t[9] = u, t[10] = x, t[11] = C, t[12] = k) : k = t[12];
    let A = k,
        j, M;
    t[13] !== r || t[14] !== a ? (j = () => g(() => {
        let e = z(r)?.focusedObject.params;
        return e?.route === Z && e.accountDetailSource === `mattress_accounts_tab`
    }, (e, t) => {
        t && !e && (d.count(f.ECOSYSTEM, `ledger.account_detail.host_closed`, [{
            key: `surface`,
            value: `mattress_accounts_tab`
        }]), ue(a))
    }, {
        fireImmediately: !0
    }), M = [r, a], t[13] = r, t[14] = a, t[15] = j, t[16] = M) : (j = t[15], M = t[16]), (0, Y.useEffect)(j, M);
    let N, P;
    t[17] !== r || t[18] !== y ? (N = () => {
        let e = z(r),
            t = e?.focusedObject.params;
        if (e == null || e.chatSDK == null || t?.route !== Z || t.accountDetailSource !== `mattress_accounts_tab`) return;
        let {
            chatSDK: n
        } = e, i = oe(r);
        i.applyRemoteWidgetState$(n.widgetId, {
            ...o(i.getWidgetState$(n), {}),
            [fe]: y
        })
    }, P = [r, y], t[17] = r, t[18] = y, t[19] = N, t[20] = P) : (N = t[19], P = t[20]), (0, Y.useEffect)(N, P);
    let I;
    t[21] === r ? I = t[22] : (I = e => {
        let {
            accountSelection: t,
            selectionSnapshot: n,
            sensitiveValuesHidden: i,
            title: a
        } = e, o = q(), s = Date.now();
        d.count(f.ECOSYSTEM, `ledger.account_detail.host_opened`, [{
            key: `surface`,
            value: `mattress_accounts_tab`
        }]), E(r), z.set(r, {
            focusedObject: {
                title: a,
                params: {
                    accountSelection: t,
                    accountDetailOpenedAtMs: s,
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
            chatSDK: K(o, {
                sensitiveValuesHidden: i
            })
        })
    }, t[21] = r, t[22] = I);
    let L = I,
        R;
    t[23] !== r || t[24] !== i ? (R = () => {
        E(r), z.set(r, {
            focusedObject: {
                title: i.formatMessage({
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
    }, t[23] = r, t[24] = i, t[25] = R) : R = t[25];
    let B = R,
        H = x || m,
        U;
    t[26] !== O || t[27] !== S || t[28] !== L || t[29] !== B || t[30] !== A || t[31] !== H ? (U = {
        isConfirming: O,
        isLoading: H,
        loadingOauthLinkId: S,
        openAccountDetail: L,
        openCreditAccountDetail: B,
        start: A
    }, t[26] = O, t[27] = S, t[28] = L, t[29] = B, t[30] = A, t[31] = H, t[32] = U) : U = t[32];
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
    J = C(), A(), O(), r(), I(), h(), U(), R(), M(), w(), k(), L(), B(), G(), H(), l(), N(), j(), n(), P(), u(), c(), i(), a(), S(), Y = t(x()), b(), X = y(), Z = `account_detail`, Q = 400, $ = (0, Y.createContext)(null)
}));
export {
    _e as i, be as n, ge as r, ve as t
};
//# sourceMappingURL=a84119fb-onl2fz9bhv93dakf.js.map