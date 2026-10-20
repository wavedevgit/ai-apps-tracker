import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fv as n,
    IN as r,
    LN as i,
    Lv as a,
    N5 as o,
    Q0 as s,
    RU as c,
    Z0 as l,
    Z8 as u,
    _N as d,
    drt as f,
    h8 as p,
    lrt as m,
    o5 as ee,
    t2 as te,
    urt as h,
    vN as g,
    z8 as _,
    zU as v
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    CW as ie,
    EG as w,
    OAt as ae,
    PAt as T,
    TG as E,
    WFn as D,
    YFn as O,
    eTn as oe,
    i6 as k,
    pAt as A,
    r6 as se,
    tTn as j,
    uAt as ce,
    wG as M,
    wW as N
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Fx as P,
    Ix as le
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    as as ue,
    is as F
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    n as I,
    r as de
} from "./4f866508-ok01gojch43k1jc4.js";
import {
    n as L,
    t as R
} from "./cd7c6193-khlq9a3e7sesp7bj.js";
import {
    o as z,
    s as fe,
    t as pe
} from "./4cf35c7a-fuufw34ubkxvq703.js";
import {
    i as me,
    n as he,
    r as B,
    t as V
} from "./2bed0ed0-on0d3cnl0mkq41x7.js";
import {
    n as H,
    t as U
} from "./8d72234e-obk32jue8z5o42oo.js";
import {
    i as W,
    n as G,
    r as ge,
    t as K
} from "./a4cc73b1-id1kf1k0qnvud2kd.js";

function _e() {
    "use forget";
    let e = (0, J.c)(10),
        t = (0, Y.useContext)($),
        n = t?.start,
        r = (0, Y.useRef)(void 0),
        a, o;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = () => {
        let e = new AbortController;
        return r.current = e.signal, () => e.abort(Error(`unmount`))
    }, o = [], e[0] = a, e[1] = o) : (a = e[0], o = e[1]), i(a, o);
    let s;
    e[2] === n ? s = e[3] : (s = e => n?.({
        ...e,
        signal: r.current
    }) ?? !1, e[2] = n, e[3] = s);
    let c = g(s),
        l = t?.isConfirming ?? !1,
        u = t?.isLoading ?? !1,
        d = t?.loadingOauthLinkId,
        f = n ? c : void 0,
        p = t?.openCreditAccountDetail,
        m;
    return e[4] !== l || e[5] !== u || e[6] !== d || e[7] !== f || e[8] !== p ? (m = {
        isConfirming: l,
        isLoading: u,
        loadingOauthLinkId: d,
        open: f,
        openCreditAccountDetail: p
    }, e[4] = l, e[5] = u, e[6] = d, e[7] = f, e[8] = p, e[9] = m) : m = e[9], m
}

function q() {
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
        s = ne(),
        d;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = c(), t[0] = d) : d = t[0];
    let p = d,
        m = le(!1),
        g = o(m),
        _;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = {
        productSku: oe.CONNECTOR_SETTING,
        canReuseLink: a,
        skipPostConnectExperience: !0
    }, t[1] = _) : _ = t[1];
    let v = ue(_),
        {
            sensitiveValuesHidden: y
        } = fe(),
        b;
    t[2] === r ? b = t[3] : (b = {
        conversation: r
    }, t[2] = r, t[3] = b);
    let {
        isInitializing: x,
        loadingOauthLinkId: S,
        start: C
    } = me(b), w;
    t[4] === r ? w = t[5] : (w = () => he(r), t[4] = r, t[5] = w);
    let T = o(w),
        O;
    t[6] !== r || t[7] !== v || t[8] !== i || t[9] !== m || t[10] !== x || t[11] !== C ? (O = e => {
        if (m()) return !1;
        let t = {
                disableExposureLog: e?.accountLinkingContext?.isDebugForced === !0
            },
            n = e?.accountLinkingContext != null && e.autoStartOauthLinkId == null && e.destination == null && E(t),
            a = e?.destination === `credit` ? `creditScore` : e?.destination;
        if (e?.destination == null && !n && (e?.autoStartOauthLinkId != null || e?.accountLinkingContext != null || !M())) return C(e);
        let o = () => !e?.signal?.aborted && (a === `creditScore` || (n ? E(t) : M()));
        if (x || !o()) return !1;
        let s = a == null || a === `accounts`,
            c = s ? e?.linkingAttempt ?? ce(e?.trackingContext, `first_party`) : void 0;
        if (s && !c?.claim()) return !1;
        let u = c?.context ?? (e?.trackingContext?.entrypoint ? {
                entrypoint: e.trackingContext.entrypoint
            } : void 0),
            d = !1,
            f = () => {
                let t = new AbortController,
                    o = !1;
                te(U, {
                    chatSDK: G(K()),
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
                    title: i.formatMessage(ge),
                    onClose: () => {
                        t.abort(), c?.finish()
                    },
                    ...n ? {
                        onRefreshOrigin: () => {
                            o || t.signal.aborted || (o = !0, Promise.resolve().then(() => e.onSuccess?.(() => !t.signal.aborted, t.signal)).then(e => {
                                if (!t.signal.aborted) {
                                    if (e === !1) throw Error(`Ledger onboarding handoff did not start`);
                                    l(U)
                                }
                            }).catch(e => {
                                t.signal.aborted || p.danger(i.formatMessage(B), {
                                    error: e
                                })
                            }))
                        }
                    } : {}
                }), d = !0
            };
        return e?.destination != null || n ? (m.set(!0), (e.prepareConnectorLink ? e.prepareConnectorLink(o, e.signal, void 0, u) : ie(u, t => v(ae, {
            ...t,
            signal: e.signal
        })).then(ye)).then(async t => {
            !t || !o() || e.beforeOpen && !await e.beforeOpen() || o() && f()
        }).catch(t => {
            e.signal?.aborted || p.danger(i.formatMessage(B), {
                error: t
            })
        }).finally(() => {
            m.set(!1), d || c?.finish(), e.onSettled?.()
        }), !0) : (f(), !0)
    }, t[6] = r, t[7] = v, t[8] = i, t[9] = m, t[10] = x, t[11] = C, t[12] = O) : O = t[12];
    let k = O,
        A, j;
    t[13] !== r || t[14] !== s ? (A = () => ee(() => {
        let e = R(r)?.focusedObject.params;
        return e?.route === Z && e.accountDetailSource === `mattress_accounts_tab`
    }, (e, t) => {
        t && !e && (h.count(f.ECOSYSTEM, `ledger.account_detail.host_closed`, [{
            key: `surface`,
            value: `mattress_accounts_tab`
        }]), de(s))
    }, {
        fireImmediately: !0
    }), j = [r, s], t[13] = r, t[14] = s, t[15] = A, t[16] = j) : (A = t[15], j = t[16]), (0, Y.useEffect)(A, j);
    let N, P;
    t[17] !== r || t[18] !== y ? (N = () => {
        let e = R(r),
            t = e?.focusedObject.params;
        if (e == null || e.chatSDK == null || t?.route !== Z || t.accountDetailSource !== `mattress_accounts_tab`) return;
        let {
            chatSDK: n
        } = e, i = se(r);
        i.applyRemoteWidgetState$(n.widgetId, {
            ...u(i.getWidgetState$(n), {}),
            [pe]: y
        })
    }, P = [r, y], t[17] = r, t[18] = y, t[19] = N, t[20] = P) : (N = t[19], P = t[20]), (0, Y.useEffect)(N, P);
    let F;
    t[21] === r ? F = t[22] : (F = e => {
        let {
            accountSelection: t,
            selectionSnapshot: n,
            sensitiveValuesHidden: i,
            title: a
        } = e, o = K(), s = Date.now();
        h.count(f.ECOSYSTEM, `ledger.account_detail.host_opened`, [{
            key: `surface`,
            value: `mattress_accounts_tab`
        }]), D(r), R.set(r, {
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
            chatSDK: G(o, {
                sensitiveValuesHidden: i
            })
        })
    }, t[21] = r, t[22] = F);
    let I = F,
        L;
    t[23] !== r || t[24] !== i ? (L = () => {
        D(r), R.set(r, {
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
            chatSDK: G(K())
        })
    }, t[23] = r, t[24] = i, t[25] = L) : L = t[25];
    let z = L,
        V = x || g,
        H;
    t[26] !== T || t[27] !== S || t[28] !== I || t[29] !== z || t[30] !== k || t[31] !== V ? (H = {
        isConfirming: T,
        isLoading: V,
        loadingOauthLinkId: S,
        openAccountDetail: I,
        openCreditAccountDetail: z,
        start: k
    }, t[26] = T, t[27] = S, t[28] = I, t[29] = z, t[30] = k, t[31] = V, t[32] = H) : H = t[32];
    let W;
    return t[33] !== n || t[34] !== H ? (W = (0, X.jsx)($.Provider, {
        value: H,
        children: n
    }), t[33] = n, t[34] = H, t[35] = W) : W = t[35], W
}

function ye(e) {
    return e?.auth_status === `ACTIVE`
}
var J, Y, X, Z, Q, $, be = e((() => {
    J = C(), A(), N(), _(), F(), s(), H(), L(), k(), T(), w(), I(), z(), W(), V(), n(), j(), O(), p(), P(), v(), m(), d(), r(), S(), Y = t(x()), b(), X = y(), Z = `account_detail`, Q = 400, $ = (0, Y.createContext)(null)
}));
export {
    q as i, be as n, _e as r, ve as t
};
//# sourceMappingURL=a84119fb-g9ybdtndzt78bucn.js.map