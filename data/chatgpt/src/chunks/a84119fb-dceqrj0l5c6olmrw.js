import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $8 as n,
    Art as r,
    CN as i,
    HN as a,
    IU as o,
    Iv as s,
    LU as c,
    Ort as l,
    Rv as u,
    UN as d,
    b5 as f,
    c2 as p,
    d2 as m,
    d5 as ee,
    k8 as h,
    krt as g,
    q5 as _,
    s2 as te,
    wN as v
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    DAt as ie,
    DG as w,
    DW as T,
    FTn as E,
    NAt as D,
    OG as O,
    OW as k,
    PIn as A,
    PTn as ae,
    fAt as j,
    kG as M,
    kIn as N,
    l6 as oe,
    lAt as se,
    u6 as P
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Nx as F,
    Px as ce
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    as as le,
    is as I
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    n as L,
    r as ue
} from "./4f866508-lwwle40ltedduaux.js";
import {
    n as R,
    t as z
} from "./cd7c6193-emfdvz82q404zu1v.js";
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
} from "./2bed0ed0-b1wxhwrqvwyaetvo.js";
import {
    n as U,
    t as W
} from "./8d72234e-oq1ii8ybadzh5vmg.js";
import {
    i as G,
    n as K,
    r as he,
    t as q
} from "./a4cc73b1-sro4m32do2ep0xiq.js";

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
            conversation: i
        } = e,
        a = re(),
        s = ne(),
        c;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = o(), t[0] = c) : c = t[0];
    let l = c,
        d = ce(!1),
        p = _(d),
        h;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
        productSku: ae.CONNECTOR_SETTING,
        canReuseLink: u,
        skipPostConnectExperience: !0
    }, t[1] = h) : h = t[1];
    let v = le(h),
        {
            sensitiveValuesHidden: y
        } = de(),
        b;
    t[2] === i ? b = t[3] : (b = {
        conversation: i
    }, t[2] = i, t[3] = b);
    let {
        isInitializing: x,
        loadingOauthLinkId: S,
        start: C
    } = pe(b), E;
    t[4] === i ? E = t[5] : (E = () => me(i), t[4] = i, t[5] = E);
    let D = _(E),
        k;
    t[6] !== i || t[7] !== v || t[8] !== a || t[9] !== d || t[10] !== x || t[11] !== C ? (k = e => {
        if (d()) return !1;
        let t = {
                disableExposureLog: e?.accountLinkingContext?.isDebugForced === !0
            },
            n = e?.accountLinkingContext != null && e.autoStartOauthLinkId == null && e.destination == null && O(t),
            r = e?.destination === `credit` ? `creditScore` : e?.destination;
        if (e?.destination == null && !n && (e?.autoStartOauthLinkId != null || e?.accountLinkingContext != null || !w())) return C(e);
        let o = () => !e?.signal?.aborted && (r === `creditScore` || (n ? O(t) : w()));
        if (x || !o()) return !1;
        let s = r == null || r === `accounts`,
            c = s ? e?.linkingAttempt ?? se(e?.trackingContext, `first_party`) : void 0;
        if (s && !c?.claim()) return !1;
        let u = c?.context ?? (e?.trackingContext?.entrypoint ? {
                entrypoint: e.trackingContext.entrypoint
            } : void 0),
            f = !1,
            p = () => {
                let t = new AbortController,
                    o = !1;
                m(W, {
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
                        trackingContext: u,
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
                                t.signal.aborted || l.danger(a.formatMessage(V), {
                                    error: e
                                })
                            }))
                        }
                    } : {}
                }), f = !0
            };
        return e?.destination != null || n ? (d.set(!0), (e.prepareConnectorLink ? e.prepareConnectorLink(o, e.signal, void 0, u) : T(u, t => v(ie, {
            ...t,
            signal: e.signal
        })).then(ye)).then(async t => {
            !t || !o() || e.beforeOpen && !await e.beforeOpen() || o() && p()
        }).catch(t => {
            e.signal?.aborted || l.danger(a.formatMessage(V), {
                error: t
            })
        }).finally(() => {
            d.set(!1), f || c?.finish(), e.onSettled?.()
        }), !0) : (p(), !0)
    }, t[6] = i, t[7] = v, t[8] = a, t[9] = d, t[10] = x, t[11] = C, t[12] = k) : k = t[12];
    let A = k,
        j, M;
    t[13] !== i || t[14] !== s ? (j = () => f(() => {
        let e = z(i)?.focusedObject.params;
        return e?.route === Z && e.accountDetailSource === `mattress_accounts_tab`
    }, (e, t) => {
        t && !e && (g.count(r.ECOSYSTEM, `ledger.account_detail.host_closed`, [{
            key: `surface`,
            value: `mattress_accounts_tab`
        }]), ue(s))
    }, {
        fireImmediately: !0
    }), M = [i, s], t[13] = i, t[14] = s, t[15] = j, t[16] = M) : (j = t[15], M = t[16]), (0, Y.useEffect)(j, M);
    let P, F;
    t[17] !== i || t[18] !== y ? (P = () => {
        let e = z(i),
            t = e?.focusedObject.params;
        if (e == null || e.chatSDK == null || t?.route !== Z || t.accountDetailSource !== `mattress_accounts_tab`) return;
        let {
            chatSDK: n
        } = e, r = oe(i);
        r.applyRemoteWidgetState$(n.widgetId, {
            ...ee(r.getWidgetState$(n), {}),
            [fe]: y
        })
    }, F = [i, y], t[17] = i, t[18] = y, t[19] = P, t[20] = F) : (P = t[19], F = t[20]), (0, Y.useEffect)(P, F);
    let I;
    t[21] === i ? I = t[22] : (I = e => {
        let {
            accountSelection: t,
            selectionSnapshot: n,
            sensitiveValuesHidden: a,
            title: o
        } = e, s = q(), c = Date.now();
        g.count(r.ECOSYSTEM, `ledger.account_detail.host_opened`, [{
            key: `surface`,
            value: `mattress_accounts_tab`
        }]), N(i), z.set(i, {
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
    }, t[21] = i, t[22] = I);
    let L = I,
        R;
    t[23] !== i || t[24] !== a ? (R = () => {
        N(i), z.set(i, {
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
        H = x || p,
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
    J = C(), j(), k(), n(), I(), p(), U(), R(), P(), D(), M(), L(), B(), G(), H(), s(), E(), A(), h(), F(), c(), l(), i(), a(), S(), Y = t(x()), b(), X = y(), Z = `account_detail`, Q = 400, $ = (0, Y.createContext)(null)
}));
export {
    _e as i, be as n, ge as r, ve as t
};
//# sourceMappingURL=a84119fb-dceqrj0l5c6olmrw.js.map