import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as n,
    B8 as r,
    BU as i,
    Fv as a,
    LN as o,
    Lv as s,
    P5 as c,
    Q0 as l,
    Q8 as u,
    RN as d,
    g8 as f,
    grt as p,
    hrt as m,
    mrt as h,
    n2 as g,
    s5 as ee,
    vN as _,
    yN as v,
    zU as y
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as b,
    N as te,
    Rn as x,
    Vn as S,
    s as C,
    wn as w,
    zn as ne
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Fn as T,
    DG as E,
    DW as D,
    EW as re,
    JFn as O,
    LAt as k,
    OG as A,
    gAt as j,
    iTn as M,
    jAt as ie,
    kG as N,
    o6 as ae,
    pAt as oe,
    rTn as se,
    s6 as P
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    Fx as F,
    Ix as ce
} from "./c2675c8c-ossqum2x3eut0sh8.js";
import {
    as as le,
    is as I
} from "./8b34dbc2-ba6wt3zxvh7jce7p.js";
import {
    n as L,
    r as ue
} from "./4f866508-ffl361mhp9york96.js";
import {
    n as R,
    t as z
} from "./cd7c6193-ny1dxb8ynwx8vpdj.js";
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
} from "./2bed0ed0-msrk5uwi53ldjyzz.js";
import {
    n as U,
    t as W
} from "./8d72234e-b5x1omukuh1upiie.js";
import {
    i as G,
    n as K,
    r as he,
    t as q
} from "./a4cc73b1-gqkpdt43r440bbhe.js";

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
    let s = v(o),
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
            conversation: r
        } = e,
        i = ne(),
        a = te(),
        o;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = y(), t[0] = o) : o = t[0];
    let d = o,
        f = ce(!1),
        h = c(f),
        _;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = {
        productSku: se.CONNECTOR_SETTING,
        canReuseLink: s,
        skipPostConnectExperience: !0
    }, t[1] = _) : _ = t[1];
    let v = le(_),
        {
            sensitiveValuesHidden: b
        } = de(),
        x;
    t[2] === r ? x = t[3] : (x = {
        conversation: r
    }, t[2] = r, t[3] = x);
    let {
        isInitializing: S,
        loadingOauthLinkId: C,
        start: w
    } = pe(x), T;
    t[4] === r ? T = t[5] : (T = () => me(r), t[4] = r, t[5] = T);
    let D = c(T),
        k;
    t[6] !== r || t[7] !== v || t[8] !== i || t[9] !== f || t[10] !== S || t[11] !== w ? (k = e => {
        if (f()) return !1;
        let t = {
                disableExposureLog: e?.accountLinkingContext?.isDebugForced === !0
            },
            n = e?.accountLinkingContext != null && e.autoStartOauthLinkId == null && e.destination == null && A(t),
            a = e?.destination === `credit` ? `creditScore` : e?.destination;
        if (e?.destination == null && !n && (e?.autoStartOauthLinkId != null || e?.accountLinkingContext != null || !E())) return w(e);
        let o = () => !e?.signal?.aborted && (a === `creditScore` || (n ? A(t) : E()));
        if (S || !o()) return !1;
        let s = a == null || a === `accounts`,
            c = s ? e?.linkingAttempt ?? oe(e?.trackingContext, `first_party`) : void 0;
        if (s && !c?.claim()) return !1;
        let u = c?.context ?? (e?.trackingContext?.entrypoint ? {
                entrypoint: e.trackingContext.entrypoint
            } : void 0),
            p = !1,
            m = () => {
                let t = new AbortController,
                    o = !1;
                g(W, {
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
                        trackingContext: u,
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
                                    l(W)
                                }
                            }).catch(e => {
                                t.signal.aborted || d.danger(i.formatMessage(V), {
                                    error: e
                                })
                            }))
                        }
                    } : {}
                }), p = !0
            };
        return e?.destination != null || n ? (f.set(!0), (e.prepareConnectorLink ? e.prepareConnectorLink(o, e.signal, void 0, u) : re(u, t => v(ie, {
            ...t,
            signal: e.signal
        })).then(ye)).then(async t => {
            !t || !o() || e.beforeOpen && !await e.beforeOpen() || o() && m()
        }).catch(t => {
            e.signal?.aborted || d.danger(i.formatMessage(V), {
                error: t
            })
        }).finally(() => {
            f.set(!1), p || c?.finish(), e.onSettled?.()
        }), !0) : (m(), !0)
    }, t[6] = r, t[7] = v, t[8] = i, t[9] = f, t[10] = S, t[11] = w, t[12] = k) : k = t[12];
    let j = k,
        M, N;
    t[13] !== r || t[14] !== a ? (M = () => ee(() => {
        let e = z(r)?.focusedObject.params;
        return e?.route === Z && e.accountDetailSource === `mattress_accounts_tab`
    }, (e, t) => {
        t && !e && (m.count(p.ECOSYSTEM, `ledger.account_detail.host_closed`, [{
            key: `surface`,
            value: `mattress_accounts_tab`
        }]), ue(a))
    }, {
        fireImmediately: !0
    }), N = [r, a], t[13] = r, t[14] = a, t[15] = M, t[16] = N) : (M = t[15], N = t[16]), (0, Y.useEffect)(M, N);
    let P, F;
    t[17] !== r || t[18] !== b ? (P = () => {
        let e = z(r),
            t = e?.focusedObject.params;
        if (e == null || e.chatSDK == null || t?.route !== Z || t.accountDetailSource !== `mattress_accounts_tab`) return;
        let {
            chatSDK: n
        } = e, i = ae(r);
        i.applyRemoteWidgetState$(n.widgetId, {
            ...u(i.getWidgetState$(n), {}),
            [fe]: b
        })
    }, F = [r, b], t[17] = r, t[18] = b, t[19] = P, t[20] = F) : (P = t[19], F = t[20]), (0, Y.useEffect)(P, F);
    let I;
    t[21] === r ? I = t[22] : (I = e => {
        let {
            accountSelection: t,
            selectionSnapshot: n,
            sensitiveValuesHidden: i,
            title: a
        } = e, o = q(), s = Date.now();
        m.count(p.ECOSYSTEM, `ledger.account_detail.host_opened`, [{
            key: `surface`,
            value: `mattress_accounts_tab`
        }]), O(r), z.set(r, {
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
        O(r), z.set(r, {
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
        H = S || h,
        U;
    t[26] !== D || t[27] !== C || t[28] !== L || t[29] !== B || t[30] !== j || t[31] !== H ? (U = {
        isConfirming: D,
        isLoading: H,
        loadingOauthLinkId: C,
        openAccountDetail: L,
        openCreditAccountDetail: B,
        start: j
    }, t[26] = D, t[27] = C, t[28] = L, t[29] = B, t[30] = j, t[31] = H, t[32] = U) : U = t[32];
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
    J = w(), j(), D(), r(), I(), n(), U(), R(), P(), k(), N(), L(), B(), G(), H(), a(), M(), T(), f(), F(), i(), h(), _(), o(), C(), Y = t(S()), x(), X = b(), Z = `account_detail`, Q = 400, $ = (0, Y.createContext)(null)
}));
export {
    _e as i, be as n, ge as r, ve as t
};
//# sourceMappingURL=a84119fb-g17l6oqf915qpvu3.js.map