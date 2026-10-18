import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $M as n,
    B6 as r,
    Mnt as i,
    Nnt as a,
    O0 as o,
    Pnt as s,
    S8 as c,
    T0 as l,
    eN as u,
    fU as d,
    gv as f,
    i5 as p,
    j8 as m,
    pU as h,
    u8 as g,
    vN as _,
    vv as ee,
    w0 as te,
    yN as v
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as y,
    N as ne,
    Rn as b,
    Vn as x,
    s as S,
    wn as C,
    zn as re
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    CAt as ie,
    CG as w,
    Gwn as T,
    LFn as E,
    MFn as D,
    SG as O,
    SW as k,
    Wwn as ae,
    aAt as oe,
    cAt as A,
    kAt as j,
    n6 as M,
    t6 as se,
    wG as N,
    xW as ce
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    lS as P,
    uS as le
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    as as ue,
    is as F
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as I,
    r as L
} from "./4f866508-khnwgwvmnmyh78fa.js";
import {
    n as R,
    t as z
} from "./cd7c6193-m7k5fj0c5qjkrbbc.js";
import {
    o as B,
    s as de,
    t as fe
} from "./4cf35c7a-drgejtr1y0lhb3xn.js";
import {
    i as pe,
    n as me,
    r as V,
    t as H
} from "./2bed0ed0-ocb44pb29ql57kkx.js";
import {
    n as U,
    t as W
} from "./8d72234e-lde0gtcnoa4sqyoh.js";
import {
    i as G,
    n as K,
    r as he,
    t as q
} from "./a4cc73b1-n8yu65n6wbxhzapn.js";

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
    }, a = [], e[0] = i, e[1] = a) : (i = e[0], a = e[1]), v(i, a);
    let o;
    e[2] === n ? o = e[3] : (o = e => n?.({
        ...e,
        signal: r.current
    }) ?? !1, e[2] = n, e[3] = o);
    let s = u(o),
        c = t?.isConfirming ?? !1,
        l = t?.isLoading ?? !1,
        d = t?.loadingOauthLinkId,
        f = n ? s : void 0,
        p = t?.openCreditAccountDetail,
        m;
    return e[4] !== c || e[5] !== l || e[6] !== d || e[7] !== f || e[8] !== p ? (m = {
        isConfirming: c,
        isLoading: l,
        loadingOauthLinkId: d,
        open: f,
        openCreditAccountDetail: p
    }, e[4] = c, e[5] = l, e[6] = d, e[7] = f, e[8] = p, e[9] = m) : m = e[9], m
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
        l = ne(),
        u;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = d(), t[0] = u) : u = t[0];
    let f = u,
        h = le(!1),
        g = p(h),
        _;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = {
        productSku: ae.CONNECTOR_SETTING,
        canReuseLink: ee,
        skipPostConnectExperience: !0
    }, t[1] = _) : _ = t[1];
    let v = ue(_),
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
    } = pe(b), T;
    t[4] === r ? T = t[5] : (T = () => me(r), t[4] = r, t[5] = T);
    let E = p(T),
        k;
    t[6] !== r || t[7] !== v || t[8] !== i || t[9] !== h || t[10] !== x || t[11] !== C ? (k = e => {
        if (h()) return !1;
        let t = {
                disableExposureLog: e?.accountLinkingContext?.isDebugForced === !0
            },
            n = e?.accountLinkingContext != null && e.autoStartOauthLinkId == null && e.destination == null && w(t),
            a = e?.destination === `credit` ? `creditScore` : e?.destination;
        if (e?.destination == null && !n && (e?.autoStartOauthLinkId != null || e?.accountLinkingContext != null || !O())) return C(e);
        let s = () => !e?.signal?.aborted && (a === `creditScore` || (n ? w(t) : O()));
        if (x || !s()) return !1;
        let c = a == null || a === `accounts`,
            l = c ? e?.linkingAttempt ?? oe(e?.trackingContext, `first_party`) : void 0;
        if (c && !l?.claim()) return !1;
        let u = l?.context ?? (e?.trackingContext?.entrypoint ? {
                entrypoint: e.trackingContext.entrypoint
            } : void 0),
            d = !1,
            p = () => {
                let t = new AbortController,
                    s = !1;
                o(W, {
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
                        t.abort(), l?.finish()
                    },
                    ...n ? {
                        onRefreshOrigin: () => {
                            s || t.signal.aborted || (s = !0, Promise.resolve().then(() => e.onSuccess?.(() => !t.signal.aborted, t.signal)).then(e => {
                                if (!t.signal.aborted) {
                                    if (e === !1) throw Error(`Ledger onboarding handoff did not start`);
                                    te(W)
                                }
                            }).catch(e => {
                                t.signal.aborted || f.danger(i.formatMessage(V), {
                                    error: e
                                })
                            }))
                        }
                    } : {}
                }), d = !0
            };
        return e?.destination != null || n ? (h.set(!0), (e.prepareConnectorLink ? e.prepareConnectorLink(s, e.signal, void 0, u) : ce(u, t => v(ie, {
            ...t,
            signal: e.signal
        })).then(ye)).then(async t => {
            !t || !s() || e.beforeOpen && !await e.beforeOpen() || s() && p()
        }).catch(t => {
            e.signal?.aborted || f.danger(i.formatMessage(V), {
                error: t
            })
        }).finally(() => {
            h.set(!1), d || l?.finish(), e.onSettled?.()
        }), !0) : (p(), !0)
    }, t[6] = r, t[7] = v, t[8] = i, t[9] = h, t[10] = x, t[11] = C, t[12] = k) : k = t[12];
    let A = k,
        j, M;
    t[13] !== r || t[14] !== l ? (j = () => m(() => {
        let e = z(r)?.focusedObject.params;
        return e?.route === Z && e.accountDetailSource === `mattress_accounts_tab`
    }, (e, t) => {
        t && !e && (a.count(s.ECOSYSTEM, `ledger.account_detail.host_closed`, [{
            key: `surface`,
            value: `mattress_accounts_tab`
        }]), L(l))
    }, {
        fireImmediately: !0
    }), M = [r, l], t[13] = r, t[14] = l, t[15] = j, t[16] = M) : (j = t[15], M = t[16]), (0, Y.useEffect)(j, M);
    let N, P;
    t[17] !== r || t[18] !== y ? (N = () => {
        let e = z(r),
            t = e?.focusedObject.params;
        if (e == null || e.chatSDK == null || t?.route !== Z || t.accountDetailSource !== `mattress_accounts_tab`) return;
        let {
            chatSDK: n
        } = e, i = se(r);
        i.applyRemoteWidgetState$(n.widgetId, {
            ...c(i.getWidgetState$(n), {}),
            [fe]: y
        })
    }, P = [r, y], t[17] = r, t[18] = y, t[19] = N, t[20] = P) : (N = t[19], P = t[20]), (0, Y.useEffect)(N, P);
    let F;
    t[21] === r ? F = t[22] : (F = e => {
        let {
            accountSelection: t,
            selectionSnapshot: n,
            sensitiveValuesHidden: i,
            title: o
        } = e, c = q(), l = Date.now();
        a.count(s.ECOSYSTEM, `ledger.account_detail.host_opened`, [{
            key: `surface`,
            value: `mattress_accounts_tab`
        }]), D(r), z.set(r, {
            focusedObject: {
                title: o,
                params: {
                    accountSelection: t,
                    accountDetailOpenedAtMs: l,
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
            chatSDK: K(c, {
                sensitiveValuesHidden: i
            })
        })
    }, t[21] = r, t[22] = F);
    let I = F,
        R;
    t[23] !== r || t[24] !== i ? (R = () => {
        D(r), z.set(r, {
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
        H = x || g,
        U;
    t[26] !== E || t[27] !== S || t[28] !== I || t[29] !== B || t[30] !== A || t[31] !== H ? (U = {
        isConfirming: E,
        isLoading: H,
        loadingOauthLinkId: S,
        openAccountDetail: I,
        openCreditAccountDetail: B,
        start: A
    }, t[26] = E, t[27] = S, t[28] = I, t[29] = B, t[30] = A, t[31] = H, t[32] = U) : U = t[32];
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
    J = C(), A(), k(), g(), F(), l(), U(), R(), M(), j(), N(), I(), B(), G(), H(), f(), T(), E(), r(), P(), h(), i(), n(), _(), S(), Y = t(x()), b(), X = y(), Z = `account_detail`, Q = 400, $ = (0, Y.createContext)(null)
}));
export {
    _e as i, be as n, ge as r, ve as t
};
//# sourceMappingURL=a84119fb-kyktunv8quaqjfyt.js.map