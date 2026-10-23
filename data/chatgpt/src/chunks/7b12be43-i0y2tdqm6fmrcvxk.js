import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Aq as r,
    Eit as i,
    HR as a,
    IR as o,
    Iv as s,
    K5 as c,
    LU as l,
    Lit as u,
    Qy as d,
    Rit as f,
    Rq as p,
    Rz as m,
    V1 as h,
    XR as g,
    YR as _,
    Zy as v,
    _it as y,
    c2 as b,
    d2 as x,
    eE as S,
    eS as C,
    f0 as w,
    fB as T,
    hs as E,
    iS as D,
    oW as O,
    p0 as k,
    pB as A,
    q1 as j,
    q5 as M,
    rz as N,
    sW as P,
    xv as F,
    ys as I,
    zU as ee,
    zz as L
} from "./4813494d-mdvd4786a87166cc.js";
import {
    At as R,
    Bn as z,
    Ln as B,
    Nn as V,
    Nt as te,
    Q as ne,
    Rn as H,
    Vn as re,
    Vt as ie,
    wn as U,
    zn as ae
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    ATn as oe,
    BKn as se,
    Bgn as ce,
    ETn as le,
    HKn as ue,
    JFt as de,
    Jrt as fe,
    KFt as pe,
    KQ as me,
    NTn as he,
    Nr as ge,
    PTn as _e,
    RQ as ve,
    RTn as ye,
    SWt as be,
    Sit as xe,
    T3t as Se,
    TY as Ce,
    UCn as we,
    WCn as Te,
    XFt as Ee,
    YFt as De,
    Zgn as Oe,
    _Tn as ke,
    bTn as Ae,
    cb as je,
    crt as Me,
    e_n as Ne,
    gTn as Pe,
    k3t as Fe,
    kTn as Ie,
    kWt as Le,
    kr as Re,
    lrt as ze,
    mX as Be,
    oWt as Ve,
    ob as He,
    pTn as Ue,
    pX as We,
    qFt as Ge,
    qgn as Ke,
    sWt as qe,
    sb as Je,
    srt as Ye,
    tIt as Xe,
    t_n as Ze,
    tit as Qe,
    urt as $e,
    wY as et,
    xWt as tt,
    zTn as nt
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    $b as rt,
    Cf as it,
    Gb as at,
    Qb as ot,
    Wb as st,
    bC as ct,
    wf as lt,
    xC as ut
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    vb as dt,
    yb as ft
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    E as pt,
    Gp as mt,
    M as ht,
    Qu as gt,
    T as _t,
    Wp as vt,
    Xu as yt,
    ad as bt,
    k as xt,
    nd as St
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    a as Ct,
    i as wt,
    r as Tt,
    t as Et
} from "./65b7af15-mzlzo0bk10esjdjl.js";
import {
    r as Dt,
    t as Ot
} from "./db2560a5-pd1jb0v3ae1oznay.js";
import {
    i as kt,
    r as At
} from "./94e0eb8c-m3ucblcofbvh9spg.js";
import {
    n as jt,
    r as Mt,
    t as Nt
} from "./4b84ae07-d6jeytl51x9n6hpe.js";
import {
    a as Pt,
    c as Ft,
    i as It,
    n as Lt,
    s as Rt
} from "./5cda56c5-oyvpt61kdi81q9hx.js";

function zt() {
    a(_.ACCESS_FLOW_ENTRY_POINT_CHAT_HEADER, {
        entryTrigger: g.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC
    })
}

function Bt() {
    k({
        fallbackScreenHint: `login_or_signup`,
        callback: zt,
        skipLoginModal: !1
    })
}
var Vt, W, Ht, Ut, Wt, G, Gt = e((() => {
    Vt = U(), Et(), Ie(), jt(), Ee(), o(), Le(), S(), Ke(), Ce(), Ne(), A(), st(), it(), b(), d(), w(), I(), r(), u(), N(), H(), ne(), W = z(), Ht = `h-10 w-10 shrink-0 rounded-full p-0! select-none`, Ut = e => {
        "use forget";
        let t = (0, Vt.c)(49),
            {
                app: r,
                availability: i,
                isLoading: a,
                hasError: o,
                showManageButton: s
            } = e,
            c = s !== void 0 && s,
            l = ae(),
            {
                shouldBlockConsumerLockdownModeActionsForAccount: u
            } = Oe(),
            d = Mt(),
            m = te(),
            {
                handleConnect: h,
                isPending: g
            } = Tt(r?.name, r?.id),
            _;
        t[0] !== r || t[1] !== d ? (_ = () => {
            if (!r) return;
            let e = new URLSearchParams;
            e.set(Ve, r.id), e.set(tt, be.AppDirectory), d(`${qe}?${e.toString()}`)
        }, t[0] = r, t[1] = d, t[2] = _) : _ = t[2];
        let y = _;
        if (!f()) {
            let e;
            return t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, W.jsx)(Wt, {}), t[3] = e) : e = t[3], e
        }
        if (!r || a || g) {
            let e;
            return t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, W.jsx)(n, {
                type: `button`,
                color: `primary`,
                className: `sm:btn-medium px-4! select-none`,
                loading: !0,
                children: (0, W.jsx)(V, {
                    ...G.loading
                })
            }), t[4] = e) : e = t[4], e
        }
        let b = i?.status === `DISABLED_BY_ADMIN` || i?.disabledReason === `disabled_by_admin`,
            S = i != null && !i.available,
            C;
        t[5] !== r || t[6] !== u ? (C = oe(r, u), t[5] = r, t[6] = u, t[7] = C) : C = t[7];
        let w = C,
            D;
        t[8] === r.id ? D = t[9] : (D = () => {
            let e = new URLSearchParams;
            return e.set(E, p(r.id)), e
        }, t[8] = r.id, t[9] = D);
        let O = D,
            k;
        t[10] !== r.id || t[11] !== O ? (k = () => {
            Xe(r.id), window.location.assign(`/?${O().toString()}`)
        }, t[10] = r.id, t[11] = O, t[12] = k) : k = t[12];
        let A = k,
            j;
        t[13] !== r.id || t[14] !== O || t[15] !== m ? (j = async () => (Xe(r.id), Ze(m, {
            params: O(),
            config: {
                disabledToolIds: [ce]
            }
        }), !0), t[13] = r.id, t[14] = O, t[15] = m, t[16] = j) : j = t[16];
        let M = j;
        if (b) {
            let e;
            return t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, W.jsx)(n, {
                type: `button`,
                color: `primary`,
                className: `sm:btn-medium px-4! select-none`,
                disabled: !0,
                icon: lt,
                children: (0, W.jsx)(V, {
                    ...G.disabledByAdmin
                })
            }), t[17] = e) : e = t[17], e
        }
        if (i?.installed) {
            let e;
            t[18] !== r.name || t[19] !== A || t[20] !== M || t[21] !== w ? (e = () => {
                if (w) {
                    x(et, {
                        toolName: r.name,
                        onTurnOffForThisChat: M
                    });
                    return
                }
                A()
            }, t[18] = r.name, t[19] = A, t[20] = M, t[21] = w, t[22] = e) : e = t[22];
            let i;
            t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, W.jsx)(V, {
                ...G.startChat
            }), t[23] = i) : i = t[23];
            let a;
            t[24] === e ? a = t[25] : (a = (0, W.jsx)(n, {
                type: `button`,
                color: `primary`,
                className: `sm:btn-medium px-4! select-none`,
                onClick: e,
                children: i
            }), t[24] = e, t[25] = a);
            let o;
            t[26] !== y || t[27] !== c ? (o = c ? (0, W.jsxs)(n, {
                type: `button`,
                size: `medium`,
                color: `secondary`,
                className: Ht,
                onClick: y,
                children: [(0, W.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, W.jsx)(V, {
                        ...G.manage
                    })
                }), (0, W.jsx)(at, {
                    className: `icon`
                })]
            }) : null, t[26] = y, t[27] = c, t[28] = o) : o = t[28];
            let s;
            return t[29] !== o || t[30] !== a ? (s = (0, W.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [a, o]
            }), t[29] = o, t[30] = a, t[31] = s) : s = t[31], s
        }
        let N = o || !i?.canInstall,
            P;
        t[32] !== i?.canInstall || t[33] !== h ? (P = () => {
            i?.canInstall && h()
        }, t[32] = i?.canInstall, t[33] = h, t[34] = P) : P = t[34];
        let F;
        t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, W.jsx)(V, {
            ...G.connect
        }), t[35] = F) : F = t[35];
        let I;
        t[36] === o ? I = t[37] : (I = o ? (0, W.jsx)(T, {
            className: `ms-1 h-4 w-4`
        }) : null, t[36] = o, t[37] = I);
        let ee;
        t[38] !== I || t[39] !== N || t[40] !== P ? (ee = (0, W.jsxs)(n, {
            type: `button`,
            color: `primary`,
            className: `sm:btn-medium px-4! select-none`,
            disabled: N,
            onClick: P,
            children: [F, I]
        }), t[38] = I, t[39] = N, t[40] = P, t[41] = ee) : ee = t[41];
        let L = ee;
        if (i?.canInstall) return L;
        let R;
        t[42] !== o || t[43] !== l || t[44] !== S ? (R = S ? l.formatMessage(G.notAvailableTooltip) : o ? l.formatMessage(G.errorTooltip) : void 0, t[42] = o, t[43] = l, t[44] = S, t[45] = R) : R = t[45];
        let z;
        return t[46] !== L || t[47] !== R ? (z = (0, W.jsx)(v, {
            label: R,
            align: `end`,
            side: `top`,
            children: L
        }), t[46] = L, t[47] = R, t[48] = z) : z = t[48], z
    }, Wt = () => {
        "use forget";
        let e = (0, Vt.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, W.jsx)(n, {
            type: `button`,
            color: `primary`,
            className: `sm:btn-medium px-4! select-none`,
            onClick: Bt,
            children: (0, W.jsx)(V, {
                ...G.connect
            })
        }), e[0] = t) : t = e[0], t
    }, G = B({
        loading: {
            id: `kl3Oke`,
            defaultMessage: `Loading`
        },
        startChat: {
            id: `eMkz9a`,
            defaultMessage: `Start chat`
        },
        connect: {
            id: `tSgVjH`,
            defaultMessage: `Connect`
        },
        manage: {
            id: `JSqdyK`,
            defaultMessage: `Manage app`
        },
        errorTooltip: {
            id: `HQVbrg`,
            defaultMessage: `App status failed to load.`
        },
        disabledByAdmin: {
            id: `NiPP2t`,
            defaultMessage: `Disabled by admin`
        },
        notAvailableTooltip: {
            id: `2IvaMY`,
            defaultMessage: `Not available`
        }
    })
}));

function Kt(e) {
    "use forget";
    let t = (0, qt.c)(19),
        {
            app: n,
            appsRoute: r
        } = e,
        i = r === void 0 ? `/apps` : r,
        a, o;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = c(`peer w-full sm:h-30 md:bg-black/[0.024] md:dark:bg-white/[0.018]`, `has-[.persistent-page-header-upgrade-pill]:h-header-height has-[.persistent-page-header-upgrade-pill]:bg-primary has-[.persistent-page-header-upgrade-pill]:sticky has-[.persistent-page-header-upgrade-pill]:top-0 has-[.persistent-page-header-upgrade-pill]:z-20 dark:has-[.persistent-page-header-upgrade-pill]:bg-token-bg-secondary-surface`), o = c(`screen-arch draggable no-draggable-children touch:p-2.5 h-header-height pointer-events-none top-0 z-20 flex items-center justify-between p-2 select-none [view-transition-name:var(--vt-page-header)] *:pointer-events-auto [&>.persistent-page-header-upgrade-pill]:shrink-0`, Re), t[0] = a, t[1] = o) : (a = t[0], o = t[1]);
    let s;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = f() ? (0, K.jsx)(vt, {}) : (0, K.jsx)(xt, {
        className: `hover:bg-black/10! dark:hover:bg-white/10!`
    }), t[2] = s) : s = t[2];
    let l, u;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (l = pe(`app-details`), u = (0, K.jsx)(V, {
        ...Jt.apps
    }), t[3] = l, t[4] = u) : (l = t[3], u = t[4]);
    let d;
    t[5] === i ? d = t[6] : (d = (0, K.jsx)(Nt, {
        className: `shrink-0`,
        to: i,
        state: l,
        children: u
    }), t[5] = i, t[6] = d);
    let p;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, K.jsx)(ct, {
        className: `text-token-icon-tertiary/80 h-4 w-4 shrink-0 translate-y-[1px]`
    }), t[7] = p) : p = t[7];
    let m;
    t[8] === n ? m = t[9] : (m = n ? (0, K.jsx)(`span`, {
        className: `text-token-text-tertiary truncate`,
        title: n.name,
        children: n.name
    }) : (0, K.jsx)(`div`, {
        className: `flex h-full w-24 justify-center`,
        children: (0, K.jsx)(Se, {
            width: 100,
            widthVariance: 0,
            className: `my-0!`
        })
    }), t[8] = n, t[9] = m);
    let h;
    t[10] !== d || t[11] !== m ? (h = (0, K.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1`,
        children: [s, (0, K.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-2 px-2 select-none`,
            children: [d, p, m]
        })]
    }), t[10] = d, t[11] = m, t[12] = h) : h = t[12];
    let g;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (g = f() ? (0, K.jsx)(_t, {
        surface: `apps`
    }) : (0, K.jsx)(St, {
        location: `App Directory`
    }), t[13] = g) : g = t[13];
    let _;
    t[14] === h ? _ = t[15] : (_ = (0, K.jsx)(`div`, {
        className: a,
        children: (0, K.jsxs)(`div`, {
            className: o,
            children: [h, g]
        })
    }), t[14] = h, t[15] = _);
    let v;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, K.jsx)(`div`, {
        className: `hidden h-17 sm:peer-has-[.persistent-page-header-upgrade-pill]:block md:bg-black/[0.024] md:dark:bg-white/[0.018]`
    }), t[16] = v) : v = t[16];
    let y;
    return t[17] === _ ? y = t[18] : (y = (0, K.jsxs)(se.Header, {
        children: [_, v]
    }), t[17] = _, t[18] = y), y
}
var qt, K, Jt, Yt = e((() => {
    qt = U(), jt(), Ee(), ge(), ut(), bt(), Fe(), pt(), ue(), mt(), ht(), u(), M(), H(), K = z(), Jt = B({
        apps: {
            id: `ae20zu`,
            defaultMessage: `Apps`
        }
    })
}));

function Xt(e) {
    return e.auth_type === `OAUTH`
}
var Zt, Qt, q, $t, en, tn, nn = e((() => {
    Zt = U(), Ie(), D(), fe(), S(), O(), ft(), ve(), nt(), l(), Qt = t(re()), H(), q = z(), $t = [], en = e => {
        "use forget";
        let t = (0, Zt.c)(36),
            {
                app: r
            } = e,
            i = ae(),
            a = ee(),
            o = _e(),
            s = r?.id,
            c;
        t[0] !== s || t[1] !== o ? (c = s ? o.data?.get(s) ?? $t : $t, t[0] = s, t[1] = o, t[2] = c) : c = t[2];
        let l = c,
            u;
        t[3] === l ? u = t[4] : (u = l.filter(Xt), t[3] = l, t[4] = u);
        let d = u,
            f;
        t[5] === d ? f = t[6] : (f = dt(d), t[5] = d, t[6] = f);
        let p = f,
            m = p == null && d.length > 0,
            h = he(m ? s : void 0),
            [g, _] = (0, Qt.useState)(!1),
            v = h.data,
            y = !!(h.data?.id && m),
            b;
        t[7] === y ? b = t[8] : (b = {
            forceEnable: y
        }, t[7] = y, t[8] = b);
        let {
            actions: x,
            isLoading: S
        } = me(v, ye.CONNECTOR_SETTING, b), w;
        bb0: {
            if (!h.data || !m) {
                w = void 0;
                break bb0
            }
            let e;
            if (t[9] !== x || t[10] !== h.data || t[11] !== d) {
                let n;
                t[13] !== x || t[14] !== h.data ? (n = e => C({
                    actions: x,
                    connector: h.data,
                    link: e
                }), t[13] = x, t[14] = h.data, t[15] = n) : n = t[15], e = d.find(n), t[9] = x, t[10] = h.data, t[11] = d, t[12] = e
            } else e = t[12];w = e
        }
        let T = p ?? w;
        if (!s || o.isLoading || m && (h.isLoading || S) || !T) return null;
        let E = p != null,
            D;
        t[16] !== s || t[17] !== i || t[18] !== a || t[19] !== T ? (D = async () => {
            _(!0);
            try {
                await Qe({
                    connectorId: s,
                    linkId: T.id,
                    redirectAfter: window.location.pathname + window.location.search + window.location.hash
                })
            } catch (e) {
                let t = e;
                _(!1), a.danger(i.formatMessage(tn.reconnectError), {
                    error: t
                })
            }
        }, t[16] = s, t[17] = i, t[18] = a, t[19] = T, t[20] = D) : D = t[20];
        let O = D,
            k = E ? `border-token-border-status-warning bg-token-bg-status-warning text-token-text-status-warning flex items-start justify-between gap-3 rounded-md border p-3` : `border-token-border-default bg-token-bg-secondary text-token-text-primary flex items-start justify-between gap-3 rounded-md border p-3`,
            A = E ? `icon icon-sm mt-0.5 shrink-0` : `icon icon-sm text-token-icon-status-warning mt-0.5 shrink-0`,
            j;
        t[21] === A ? j = t[22] : (j = (0, q.jsx)(P, {
            "aria-hidden": `true`,
            className: A
        }), t[21] = A, t[22] = j);
        let M = E ? tn.reauthRequiredWarning : tn.scopeWarning,
            N;
        t[23] === M ? N = t[24] : (N = (0, q.jsx)(`div`, {
            className: `text-sm`,
            children: (0, q.jsx)(V, {
                ...M
            })
        }), t[23] = M, t[24] = N);
        let F;
        t[25] !== j || t[26] !== N ? (F = (0, q.jsxs)(`div`, {
            className: `flex min-w-0 flex-1 items-start gap-2 text-start`,
            children: [j, N]
        }), t[25] = j, t[26] = N, t[27] = F) : F = t[27];
        let I;
        t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, q.jsx)(V, {
            ...tn.reconnect
        }), t[28] = I) : I = t[28];
        let L;
        t[29] !== g || t[30] !== O ? (L = (0, q.jsx)(n, {
            size: `small`,
            color: `secondary`,
            className: `shrink-0`,
            onClick: O,
            loading: g,
            children: I
        }), t[29] = g, t[30] = O, t[31] = L) : L = t[31];
        let R;
        return t[32] !== F || t[33] !== L || t[34] !== k ? (R = (0, q.jsxs)(`div`, {
            className: k,
            children: [F, L]
        }), t[32] = F, t[33] = L, t[34] = k, t[35] = R) : R = t[35], R
    }, tn = B({
        scopeWarning: {
            id: `Zr11Gn`,
            defaultMessage: `The app account is connected, but not all requested permissions were granted. Some app actions may not work until you reconnect.`
        },
        reauthRequiredWarning: {
            id: `x08wsP`,
            defaultMessage: `This connection needs to be reauthenticated before ChatGPT can use it.`
        },
        reconnect: {
            id: `x7BxNr`,
            defaultMessage: `Reconnect`
        },
        reconnectError: {
            id: `MMZ/V1`,
            defaultMessage: `Couldn't reconnect your account. Try again.`
        }
    })
}));

function rn(e) {
    "use forget";
    let t = (0, an.c)(6),
        {
            href: n,
            isNativeMobileView: r,
            accessibleLabel: i
        } = e;
    if (!n) return null;
    let a = r ? `_self` : `_blank`,
        o = a === `_blank` ? `noopener noreferrer` : void 0,
        s;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, on.jsx)(rt, {
        "aria-hidden": !0,
        className: `h-4.5 w-4.5`
    }), t[0] = s) : s = t[0];
    let c;
    return t[1] !== i || t[2] !== n || t[3] !== o || t[4] !== a ? (c = (0, on.jsx)(`a`, {
        href: n,
        target: a,
        rel: o,
        "aria-label": i,
        className: `interactive-label-secondary`,
        children: s
    }), t[1] = i, t[2] = n, t[3] = o, t[4] = a, t[5] = c) : c = t[5], c
}
var an, on, sn = e((() => {
        an = U(), ot(), on = z()
    })),
    cn, ln, un = e((() => {
        cn = new Set([`http:`, `https:`]), ln = e => {
            let t = e.trim();
            if (t === ``) return;
            let n;
            try {
                n = new URL(t)
            } catch {
                return
            }
            return cn.has(n.protocol) ? n.href : void 0
        }
    }));

function dn(e) {
    "use forget";
    let t = (0, gn.c)(15),
        {
            app: n
        } = e,
        [r, i] = (0, _n.useState)(!1),
        [a, o] = (0, _n.useState)(!1),
        s = (0, _n.useRef)(null),
        l = n.description,
        u, d;
    if (t[0] === l ? (u = t[1], d = t[2]) : (u = () => {
            if (!l || !s.current) return;
            let e = s.current,
                t = () => {
                    if (!s.current) return;
                    let {
                        scrollHeight: e,
                        clientHeight: t
                    } = s.current;
                    o(e - t > 1)
                };
            if (t(), typeof ResizeObserver < `u`) {
                let n = new ResizeObserver(() => {
                    t()
                });
                return n.observe(e), () => {
                    n.disconnect()
                }
            }
            if (typeof window < `u`) return window.addEventListener(`resize`, t), () => {
                window.removeEventListener(`resize`, t)
            }
        }, d = [l], t[0] = l, t[1] = u, t[2] = d), (0, _n.useEffect)(u, d), !l) return null;
    let f = !r && a,
        p = !r && `line-clamp-4 sm:line-clamp-6`,
        m = f && `cursor-pointer`,
        h;
    t[3] !== p || t[4] !== m ? (h = c(`text-token-text-secondary text-base leading-6 whitespace-pre-line sm:text-sm`, p, m), t[3] = p, t[4] = m, t[5] = h) : h = t[5];
    let g;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (g = () => {
        i(!0)
    }, t[6] = g) : g = t[6];
    let _;
    t[7] !== l || t[8] !== h ? (_ = (0, J.jsx)(`p`, {
        ref: s,
        className: h,
        onClick: g,
        children: l
    }), t[7] = l, t[8] = h, t[9] = _) : _ = t[9];
    let v;
    t[10] === f ? v = t[11] : (v = f ? (0, J.jsx)(`div`, {
        className: `-mt-6.5 flex justify-end`,
        children: (0, J.jsx)(`div`, {
            className: `to-token-bg-primary via-token-bg-primary/80 flex bg-gradient-to-r from-transparent via-50% ps-10`,
            children: (0, J.jsx)(`button`, {
                type: `button`,
                className: `text-token-text-primary rounded-md px-2 py-0.5 text-base hover:underline sm:text-sm`,
                onClick: () => {
                    i(!0)
                },
                children: (0, J.jsx)(V, {
                    ...Y.moreLabel
                })
            })
        })
    }) : null, t[10] = f, t[11] = v);
    let y;
    return t[12] !== _ || t[13] !== v ? (y = (0, J.jsx)(`section`, {
        children: (0, J.jsxs)(`div`, {
            children: [_, v]
        })
    }), t[12] = _, t[13] = v, t[14] = y) : y = t[14], y
}

function fn(e) {
    "use forget";
    let t = (0, gn.c)(5),
        {
            app: n
        } = e,
        r = xn(n);
    if (r.length === 0) return null;
    let i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, J.jsx)(`h2`, {
        className: `border-border border-b py-3 text-xl font-normal sm:py-2 sm:text-lg`,
        children: (0, J.jsx)(V, {
            ...Y.informationHeading
        })
    }), t[0] = i) : i = t[0];
    let a;
    t[1] === r ? a = t[2] : (a = r.map(pn), t[1] = r, t[2] = a);
    let o;
    return t[3] === a ? o = t[4] : (o = (0, J.jsxs)(`section`, {
        className: `space-y-4`,
        children: [i, (0, J.jsx)(`div`, {
            className: `border-token-border-default overflow-hidden rounded-xl border`,
            children: (0, J.jsx)(`table`, {
                className: `w-full border-collapse`,
                children: (0, J.jsx)(`tbody`, {
                    children: a
                })
            })
        })]
    }), t[3] = a, t[4] = o), o
}

function pn(e) {
    let {
        title: t,
        value: n
    } = e;
    return (0, J.jsxs)(`tr`, {
        className: `border-token-border-default border-b last:border-b-0`,
        children: [(0, J.jsx)(`th`, {
            scope: `row`,
            className: `text-token-text-tertiary w-44 px-4 py-3 text-start align-top text-base font-normal sm:text-sm`,
            children: (0, J.jsx)(V, {
                ...t
            })
        }), (0, J.jsx)(`td`, {
            className: `px-4 py-3 align-top text-base sm:text-sm`,
            children: typeof n == `string` ? (0, J.jsx)(`span`, {
                className: `break-words`,
                children: n
            }) : n
        })]
    }, t.id)
}

function mn(e) {
    return e !== void 0 && e !== ``
}

function hn(e) {
    return e.value !== void 0 && e.value != null && e.value !== ``
}
var gn, _n, J, Y, vn, yn, bn, xn, Sn = e((() => {
    gn = U(), It(), j(), M(), _n = t(re()), H(), ne(), s(), ke(), Rt(), sn(), un(), J = z(), Y = B({
        informationHeading: {
            id: `q4RRak`,
            defaultMessage: `Information`
        },
        moreLabel: {
            id: `HDyQMv`,
            defaultMessage: `More`
        },
        developerHeading: {
            id: `S71hLA`,
            defaultMessage: `Developer`
        },
        websiteHeading: {
            id: `xOy6gG`,
            defaultMessage: `Website`
        },
        websiteLinkAriaLabel: {
            id: `nv/rrQ`,
            defaultMessage: `Open website`
        },
        versionHeading: {
            id: `3RWIwO`,
            defaultMessage: `Version`
        },
        privacyPolicyHeading: {
            id: `GUKqcW`,
            defaultMessage: `Privacy Policy`
        },
        privacyPolicyLinkAriaLabel: {
            id: `4AL2q5`,
            defaultMessage: `Open privacy policy`
        },
        termsOfServiceHeading: {
            id: `9aekEX`,
            defaultMessage: `Terms of Service`
        },
        termsOfServiceLinkAriaLabel: {
            id: `9RNyIQ`,
            defaultMessage: `Open terms of service`
        },
        customerSupportHeading: {
            id: `appDirectory.appSections.customerSupportHeading`,
            defaultMessage: `Customer support`
        },
        customerSupportLinkAriaLabel: {
            id: `appDirectory.appSections.customerSupportLinkAriaLabel`,
            defaultMessage: `Open customer support website`
        },
        categoryHeading: {
            id: `r28vgV`,
            defaultMessage: `Category`
        },
        capabilitiesHeading: {
            id: `nzEY0Y`,
            defaultMessage: `Capabilities`
        }
    }), vn = e => {
        let t = e.app_metadata;
        if (Ae(t)) return typeof t.customer_support == `string` ? t.customer_support : void 0
    }, yn = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e), bn = e => {
        "use forget";
        let t = (0, gn.c)(7),
            n;
        if (t[0] === Symbol.for(`react.memo_cache_sentinel`)) {
            let e = h();
            n = e?.isProTier() || e?.isEnterprisey(), t[0] = n
        } else n = t[0];
        let r = n,
            i = ae(),
            a;
        if (t[1] !== e.id || t[2] !== e.labels?.consequential || t[3] !== e.labels?.interactive || t[4] !== e.labels?.sync || t[5] !== i) {
            let n = new Set;
            (e.labels?.sync === `true` || F.has(e.id)) && r && (n.add(Lt.FILE_SEARCH), n.add(Lt.SYNC)), e.labels?.interactive === `true` && n.add(Lt.INTERACTIVE), e.labels?.consequential === `true` && n.add(Lt.WRITES), a = Array.from(n).map(e => Pt(e, i)), t[1] = e.id, t[2] = e.labels?.consequential, t[3] = e.labels?.interactive, t[4] = e.labels?.sync, t[5] = i, t[6] = a
        } else a = t[6];
        return a
    }, xn = e => {
        "use forget";
        let t = (0, gn.c)(44),
            n = ae(),
            r = e.app_metadata?.categories ?? [],
            i = Ft(),
            [a] = ie(),
            o;
        t[0] === a ? o = t[1] : (o = a.get(`native_mobile_view`), t[0] = a, t[1] = o);
        let s = o === `true`,
            c = vn(e),
            l = c ? ln(c) : void 0,
            u;
        t[2] === i ? u = t[3] : (u = e => i.get(e)?.name, t[2] = i, t[3] = u);
        let d = r.map(u).filter(mn),
            f = d.length ? d.join(`, `) : void 0,
            p;
        t[4] === f ? p = t[5] : (p = {
            title: Y.categoryHeading,
            value: f
        }, t[4] = f, t[5] = p);
        let m = bn(e),
            h;
        t[6] === m ? h = t[7] : (h = m.join(`, `), t[6] = m, t[7] = h);
        let g;
        t[8] === h ? g = t[9] : (g = {
            title: Y.capabilitiesHeading,
            value: h
        }, t[8] = h, t[9] = g);
        let _ = e.app_metadata?.developer ?? e.branding?.developer,
            v;
        t[10] === _ ? v = t[11] : (v = {
            title: Y.developerHeading,
            value: _
        }, t[10] = _, t[11] = v);
        let y = e.branding?.website,
            b;
        t[12] === n ? b = t[13] : (b = n.formatMessage(Y.websiteLinkAriaLabel), t[12] = n, t[13] = b);
        let x;
        t[14] !== s || t[15] !== b || t[16] !== y ? (x = {
            title: Y.websiteHeading,
            value: (0, J.jsx)(rn, {
                href: y,
                isNativeMobileView: s,
                accessibleLabel: b
            })
        }, t[14] = s, t[15] = b, t[16] = y, t[17] = x) : x = t[17];
        let S = e.app_metadata?.version,
            C;
        t[18] === S ? C = t[19] : (C = {
            title: Y.versionHeading,
            value: S
        }, t[18] = S, t[19] = C);
        let w = e.branding?.privacy_policy,
            T;
        t[20] === n ? T = t[21] : (T = n.formatMessage(Y.privacyPolicyLinkAriaLabel), t[20] = n, t[21] = T);
        let E;
        t[22] !== s || t[23] !== w || t[24] !== T ? (E = {
            title: Y.privacyPolicyHeading,
            value: (0, J.jsx)(rn, {
                href: w,
                isNativeMobileView: s,
                accessibleLabel: T
            })
        }, t[22] = s, t[23] = w, t[24] = T, t[25] = E) : E = t[25];
        let D = e.branding?.terms_of_service,
            O;
        t[26] === n ? O = t[27] : (O = n.formatMessage(Y.termsOfServiceLinkAriaLabel), t[26] = n, t[27] = O);
        let k;
        t[28] !== s || t[29] !== D || t[30] !== O ? (k = {
            title: Y.termsOfServiceHeading,
            value: (0, J.jsx)(rn, {
                href: D,
                isNativeMobileView: s,
                accessibleLabel: O
            })
        }, t[28] = s, t[29] = D, t[30] = O, t[31] = k) : k = t[31];
        let A = Y,
            j = c ? yn(c) ? (0, J.jsx)(`a`, {
                href: `mailto:${c}`,
                className: `interactive-label-secondary break-all underline`,
                children: c
            }) : l && (0, J.jsx)(rn, {
                href: l,
                isNativeMobileView: s,
                accessibleLabel: n.formatMessage(Y.customerSupportLinkAriaLabel)
            }) : void 0,
            M;
        t[32] !== A.customerSupportHeading || t[33] !== j ? (M = {
            title: A.customerSupportHeading,
            value: j
        }, t[32] = A.customerSupportHeading, t[33] = j, t[34] = M) : M = t[34];
        let N;
        return t[35] !== x || t[36] !== C || t[37] !== E || t[38] !== k || t[39] !== M || t[40] !== p || t[41] !== g || t[42] !== v ? (N = [p, g, v, x, C, E, k, M].filter(hn), t[35] = x, t[36] = C, t[37] = E, t[38] = k, t[39] = M, t[40] = p, t[41] = g, t[42] = v, t[43] = N) : N = t[43], N
    }
}));

function Cn(e) {
    "use forget";
    let t = (0, wn.c)(47),
        {
            app: n,
            availability: r,
            availabilityLoading: i,
            availabilityError: a
        } = e,
        [o] = ie(),
        s;
    t[0] === o ? s = t[1] : (s = o.get(`native_mobile_view`), t[0] = o, t[1] = s);
    let l = s === `true`,
        u;
    t[2] === n ? u = t[3] : (u = n ? le(n) : null, t[2] = n, t[3] = u);
    let d = u,
        f = !l && `-mt-14`,
        p;
    t[4] === f ? p = t[5] : (p = c(`relative hidden w-fit flex-shrink-0 sm:block`, f), t[4] = f, t[5] = p);
    let m;
    t[6] === n ? m = t[7] : (m = n ? (0, X.jsx)(Ye, {
        app: {
            name: n.name,
            logoUrl: n.logo_url ?? null,
            logoDarkUrl: n.logo_url_dark ?? null
        },
        size: `xlarge`
    }) : (0, X.jsx)(ze, {
        className: `h-16 w-16 rounded-full`
    }), t[6] = n, t[7] = m);
    let h;
    t[8] !== p || t[9] !== m ? (h = (0, X.jsx)(`div`, {
        className: p,
        children: m
    }), t[8] = p, t[9] = m, t[10] = h) : h = t[10];
    let g;
    t[11] === n ? g = t[12] : (g = (0, X.jsx)(`div`, {
        className: `relative w-fit flex-shrink-0 sm:hidden`,
        children: n ? (0, X.jsx)(Ye, {
            app: {
                name: n.name,
                logoUrl: n.logo_url ?? null,
                logoDarkUrl: n.logo_url_dark ?? null
            },
            size: `xxlarge`
        }) : (0, X.jsx)(ze, {
            className: `h-20 w-20 rounded-full`
        })
    }), t[11] = n, t[12] = g);
    let _;
    t[13] === n ? _ = t[14] : (_ = n ? n.name : (0, X.jsx)(`div`, {
        className: `w-56`,
        "aria-hidden": `true`,
        children: (0, X.jsx)(Se, {
            size: `xl`
        })
    }), t[13] = n, t[14] = _);
    let v;
    t[15] === _ ? v = t[16] : (v = (0, X.jsx)(`h1`, {
        className: `text-2xl font-medium max-sm:ms-0.75 sm:text-3xl`,
        children: _
    }), t[15] = _, t[16] = v);
    let y;
    t[17] === n?.labels?.distribution ? y = t[18] : (y = n?.labels?.distribution === `individual` ? (0, X.jsx)(`div`, {
        className: `text-token-interactive-label-danger-secondary-default border-token-border-status-error mt-[2px] items-center rounded-full border px-2 py-0.5 text-xs font-semibold uppercase select-none`,
        children: (0, X.jsx)(V, {
            id: `w+mmPI`,
            defaultMessage: `DEV`
        })
    }) : null, t[17] = n?.labels?.distribution, t[18] = y);
    let b;
    t[19] === n?.distribution_channel ? b = t[20] : (b = n?.distribution_channel === `TENANT_CATALOG` ? (0, X.jsx)(`span`, {
        className: `border-token-text-tertiary text-token-text-secondary dark:border-token-border-heavy dark:text-token-text-tertiary mt-[2px] items-center rounded-full border px-2 py-0.5 text-xs font-semibold uppercase select-none`,
        children: (0, X.jsx)(V, {
            id: `Thz3Mo`,
            defaultMessage: `Internal`
        })
    }) : null, t[19] = n?.distribution_channel, t[20] = b);
    let x;
    t[21] !== y || t[22] !== b || t[23] !== v ? (x = (0, X.jsxs)(`div`, {
        className: `flex min-w-0 flex-wrap items-center gap-2`,
        children: [v, y, b]
    }), t[21] = y, t[22] = b, t[23] = v, t[24] = x) : x = t[24];
    let S;
    t[25] !== n || t[26] !== d ? (S = n ? d ? (0, X.jsx)(`p`, {
        className: `text-token-text-secondary line-clamp-3 sm:line-clamp-2`,
        title: d,
        children: d
    }) : null : (0, X.jsx)(`div`, {
        className: `sm:min-w-0`,
        "aria-hidden": `true`,
        children: (0, X.jsx)(Se, {
            size: `base`
        })
    }), t[25] = n, t[26] = d, t[27] = S) : S = t[27];
    let C = !l && `sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:self-start`,
        w;
    t[28] === C ? w = t[29] : (w = c(`flex pt-2 sm:pt-0`, C), t[28] = C, t[29] = w);
    let T = !l,
        E;
    t[30] !== n || t[31] !== r || t[32] !== a || t[33] !== i || t[34] !== T ? (E = (0, X.jsx)(Ut, {
        app: n,
        availability: r,
        isLoading: i,
        hasError: a,
        showManageButton: T
    }), t[30] = n, t[31] = r, t[32] = a, t[33] = i, t[34] = T, t[35] = E) : E = t[35];
    let D;
    t[36] !== w || t[37] !== E ? (D = (0, X.jsx)(`div`, {
        className: w,
        children: E
    }), t[36] = w, t[37] = E, t[38] = D) : D = t[38];
    let O;
    t[39] !== x || t[40] !== S || t[41] !== D ? (O = (0, X.jsxs)(`div`, {
        className: `grid w-full gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-x-4`,
        children: [x, S, D]
    }), t[39] = x, t[40] = S, t[41] = D, t[42] = O) : O = t[42];
    let k;
    return t[43] !== O || t[44] !== h || t[45] !== g ? (k = (0, X.jsx)(`header`, {
        children: (0, X.jsx)(`div`, {
            className: `mx-auto flex w-full max-w-4xl flex-col md:px-2 lg:px-6`,
            children: (0, X.jsxs)(`div`, {
                className: `flex items-center gap-5 p-4 sm:flex-col sm:items-start`,
                children: [h, g, O]
            })
        })
    }), t[43] = O, t[44] = h, t[45] = g, t[46] = k) : k = t[46], k
}
var wn, X, Tn = e((() => {
        wn = U(), Ie(), $e(), Fe(), M(), H(), ne(), Gt(), Me(), X = z()
    })),
    En, Dn, Z, On, kn = e((() => {
        En = U(), Dt(), Yt(), nn(), Ct(), Sn(), Ee(), gt(), fe(), i(), b(), nt(), At(), Dn = t(re()), H(), ne(), Tn(), Z = z(), On = e => {
            "use forget";
            let t = (0, En.c)(49),
                {
                    app: n,
                    availability: r,
                    availabilityLoading: i,
                    availabilityError: a
                } = e,
                o = ae(),
                s = R(),
                c = xe(),
                [l] = ie(),
                u;
            t[0] === l ? u = t[1] : (u = Ot(l), t[0] = l, t[1] = u);
            let d = u,
                f;
            t[2] === l ? f = t[3] : (f = l.get(`native_mobile_view`), t[2] = l, t[3] = f);
            let p = f === `true`,
                m;
            t[4] === l ? m = t[5] : (m = l.toString(), t[4] = l, t[5] = m);
            let h = m,
                g;
            t[6] !== h || t[7] !== s.state ? (g = de(s.state) ?? `/apps${h?`?${h}`:``}`, t[6] = h, t[7] = s.state, t[8] = g) : g = t[8];
            let _ = g,
                v = p ? `div` : `main`,
                b = n ? `${s.pathname}${s.search}` : void 0,
                S;
            t[9] !== s.state || t[10] !== l ? (S = De({
                state: s.state,
                searchParams: l
            }), t[9] = s.state, t[10] = l, t[11] = S) : S = t[11];
            let C = S,
                w;
            t[12] !== n || t[13] !== r?.canInstall || t[14] !== s.pathname ? (w = () => !!(n && r?.canInstall && !/\/connect\/?$/.test(s.pathname)), t[12] = n, t[13] = r?.canInstall, t[14] = s.pathname, t[15] = w) : w = t[15];
            let T;
            t[16] !== n || t[17] !== c || t[18] !== d || t[19] !== b || t[20] !== C ? (T = () => {
                if (!(!n || !b)) return x(yt, {
                    connectorId: n.id,
                    redirectAfter: b,
                    productSku: c ?? d ?? ye.CONNECTOR_SETTING,
                    linkCreateProductSku: ye.CONNECTOR_SETTING,
                    referrer: C,
                    postConnectExperienceSource: `plugin_install`
                }), !0
            }, t[16] = n, t[17] = c, t[18] = d, t[19] = b, t[20] = C, t[21] = T) : T = t[21];
            let E;
            t[22] !== b || t[23] !== w || t[24] !== T ? (E = {
                enabled: w,
                redirectUrl: b,
                restoreParentFlowOnResume: T
            }, t[22] = b, t[23] = w, t[24] = T, t[25] = E) : E = t[25], kt(E);
            let D;
            t[26] !== n || t[27] !== o ? (D = () => {
                if (!n?.name) return;
                let e = document.title,
                    t = o.formatMessage(y.title);
                return document.title = `ChatGPT - ${n.name}`, () => {
                    document.title = e || t
                }
            }, t[26] = n, t[27] = o, t[28] = D) : D = t[28];
            let O = n?.name,
                k;
            t[29] !== o || t[30] !== O ? (k = [O, o], t[29] = o, t[30] = O, t[31] = k) : k = t[31], (0, Dn.useEffect)(D, k);
            let A;
            t[32] !== n || t[33] !== _ || t[34] !== p ? (A = !p && (0, Z.jsx)(Kt, {
                app: n,
                appsRoute: _
            }), t[32] = n, t[33] = _, t[34] = p, t[35] = A) : A = t[35];
            let j;
            t[36] !== n || t[37] !== r || t[38] !== a || t[39] !== i ? (j = (0, Z.jsx)(Cn, {
                app: n,
                availability: r,
                availabilityLoading: i,
                availabilityError: a
            }), t[36] = n, t[37] = r, t[38] = a, t[39] = i, t[40] = j) : j = t[40];
            let M;
            t[41] !== v || t[42] !== n || t[43] !== p ? (M = n ? (0, Z.jsxs)(v, {
                className: `mx-auto w-full max-w-4xl px-4 *:mb-6 sm:gap-8 md:px-6 lg:px-10`,
                id: p ? void 0 : `main`,
                children: [(0, Z.jsx)(en, {
                    app: n
                }), (0, Z.jsx)(wt, {
                    app: n
                }), (0, Z.jsx)(dn, {
                    app: n
                }), (0, Z.jsx)(fn, {
                    app: n
                })]
            }) : null, t[41] = v, t[42] = n, t[43] = p, t[44] = M) : M = t[44];
            let N;
            return t[45] !== A || t[46] !== j || t[47] !== M ? (N = (0, Z.jsxs)(`div`, {
                className: `relative h-full overflow-y-auto pb-6`,
                children: [A, j, M]
            }), t[45] = A, t[46] = j, t[47] = M, t[48] = N) : N = t[48], N
        }
    })),
    An, Q, jn, Mn, Nn, Pn = e((() => {
        An = U(), Ue(), jt(), Te(), Ee(), je(), ut(), H(), ne(), Me(), Q = z(), jn = e => {
            "use forget";
            let t = (0, An.c)(42),
                {
                    app: n,
                    useBadge: r,
                    badgeType: i
                } = e,
                a = r !== void 0 && r,
                o = ae(),
                [s] = ie(),
                c, l;
            if (t[0] !== s) {
                let e = new URLSearchParams(s),
                    n = new URLSearchParams(s);
                n.delete(`category`), n.delete(`q`), c = e.toString(), l = n.toString(), t[0] = s, t[1] = c, t[2] = l
            } else c = t[1], l = t[2];
            let u = l,
                d = `/apps${c?`?${c}`:``}`,
                f = n.labels?.distribution === `individual`,
                p = n.distributionChannel === `TENANT_CATALOG`,
                m = a && i !== `action_required`,
                h;
            t[3] !== n.displayName || t[4] !== o || t[5] !== m ? (h = m ? o.formatMessage(Nn.connectedAppLabel, {
                appName: n.displayName
            }) : void 0, t[3] = n.displayName, t[4] = o, t[5] = m, t[6] = h) : h = t[6];
            let g = h,
                _;
            t[7] === n.displayName ? _ = t[8] : (_ = we(n.displayName), t[7] = n.displayName, t[8] = _);
            let v = `/apps/${_}/${n.id}${u?`?${u}`:``}`,
                y;
            t[9] !== d || t[10] !== s ? (y = Ge(s, {
                returnTo: d
            }), t[9] = d, t[10] = s, t[11] = y) : y = t[11];
            let b;
            t[12] !== n.displayName || t[13] !== n.logoDarkUrl || t[14] !== n.logoUrl ? (b = {
                name: n.displayName,
                logoUrl: n.logoUrl,
                logoDarkUrl: n.logoDarkUrl
            }, t[12] = n.displayName, t[13] = n.logoDarkUrl, t[14] = n.logoUrl, t[15] = b) : b = t[15];
            let x;
            t[16] !== i || t[17] !== b || t[18] !== a ? (x = (0, Q.jsx)(`div`, {
                className: `me-3 lg:me-4 @2xl/main:me-4`,
                children: (0, Q.jsx)(Ye, {
                    app: b,
                    useBadge: a,
                    badgeType: i
                })
            }), t[16] = i, t[17] = b, t[18] = a, t[19] = x) : x = t[19];
            let S;
            t[20] === n.displayName ? S = t[21] : (S = (0, Q.jsx)(`p`, {
                className: `text-token-text-primary min-w-0 overflow-hidden text-ellipsis whitespace-nowrap`,
                children: n.displayName
            }), t[20] = n.displayName, t[21] = S);
            let C;
            t[22] === f ? C = t[23] : (C = f ? (0, Q.jsx)(He, {}) : null, t[22] = f, t[23] = C);
            let w;
            t[24] === p ? w = t[25] : (w = p ? (0, Q.jsx)(Je, {}) : null, t[24] = p, t[25] = w);
            let T;
            t[26] !== C || t[27] !== w || t[28] !== S ? (T = (0, Q.jsxs)(`div`, {
                className: `flex min-w-0 items-center gap-1.5`,
                children: [S, C, w]
            }), t[26] = C, t[27] = w, t[28] = S, t[29] = T) : T = t[29];
            let E = n.subtitle ?? n.developerName ?? ``,
                D;
            t[30] === E ? D = t[31] : (D = (0, Q.jsx)(`p`, {
                className: `text-token-text-tertiary overflow-hidden text-ellipsis whitespace-nowrap`,
                children: E
            }), t[30] = E, t[31] = D);
            let O;
            t[32] !== T || t[33] !== D ? (O = (0, Q.jsxs)(`div`, {
                className: `min-w-0 flex-1 text-sm`,
                children: [T, D]
            }), t[32] = T, t[33] = D, t[34] = O) : O = t[34];
            let k;
            t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, Q.jsx)(`div`, {
                className: `text-token-icon-tertiary group-hover:text-token-text-primary flex flex-shrink-0 items-center`,
                children: (0, Q.jsx)(ct, {
                    className: `h-4 w-4`,
                    "aria-hidden": `true`
                })
            }), t[35] = k) : k = t[35];
            let A;
            return t[36] !== g || t[37] !== O || t[38] !== v || t[39] !== y || t[40] !== x ? (A = (0, Q.jsxs)(Nt, {
                "aria-label": g,
                className: `group hover:bg-token-bg-tertiary flex items-center rounded-2xl p-3`,
                to: v,
                state: y,
                children: [x, O, k]
            }), t[36] = g, t[37] = O, t[38] = v, t[39] = y, t[40] = x, t[41] = A) : A = t[41], A
        }, Mn = e => {
            "use forget";
            let t = (0, An.c)(4),
                {
                    app: n
                } = e,
                {
                    useBadge: r,
                    badgeType: i
                } = Pe(n.id),
                a;
            return t[0] !== n || t[1] !== i || t[2] !== r ? (a = (0, Q.jsx)(jn, {
                app: n,
                useBadge: r,
                badgeType: i
            }), t[0] = n, t[1] = i, t[2] = r, t[3] = a) : a = t[3], a
        }, Nn = B({
            connectedAppLabel: {
                id: `EL7u7J`,
                defaultMessage: `{appName} Connected app`
            }
        })
    })),
    Fn, In, Ln, Rn = e((() => {
        Fn = U(), $e(), Fe(), In = z(), Ln = () => {
            "use forget";
            let e = (0, Fn.c)(2),
                t;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, In.jsx)(ze, {
                className: `bg-token-bg-elevated-primary h-10 w-10 rounded-full`
            }), e[0] = t) : t = e[0];
            let n;
            return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, In.jsxs)(`div`, {
                className: `relative flex items-center gap-4 p-1.5 lg:p-3 @2xl/main:p-3`,
                children: [t, (0, In.jsx)(`div`, {
                    className: `flex h-full min-w-0 flex-1 flex-col justify-center gap-1`,
                    children: (0, In.jsx)(Se, {
                        size: `sm`,
                        className: `my-0!`,
                        width: 48,
                        lines: 2,
                        widthVariance: 48
                    })
                })]
            }), e[1] = n) : n = e[1], n
        }
    }));

function zn(e, t) {
    return (0, $.jsx)(Ln, {}, t)
}

function Bn(e) {
    return (0, $.jsx)(Mn, {
        app: e
    }, e.id)
}
var Vn, $, Hn, Un, Wn, Gn, Kn = e((() => {
        Vn = U(), Be(), L(), H(), Pn(), Rn(), $ = z(), Hn = () => {}, Un = 10, Wn = e => {
            "use forget";
            let t = (0, Vn.c)(22),
                {
                    apps: n,
                    isLoading: r,
                    loadFailed: i,
                    hasNextPage: a,
                    isFetchingNextPage: o,
                    fetchNextPage: s,
                    showSpinner: c
                } = e,
                l = a !== void 0 && a,
                u = o !== void 0 && o,
                d = c !== void 0 && c,
                f;
            t[0] === r ? f = t[1] : (f = r && (0, $.jsx)(`div`, {
                className: `pb-10`,
                children: (0, $.jsx)(`div`, {
                    className: `grid grid-cols-1 gap-x-3 gap-y-3 lg:grid-cols-2 lg:gap-y-2 @2xl/main:grid-cols-2 @2xl/main:gap-y-2`,
                    children: Array.from({
                        length: Un
                    }, zn)
                })
            }), t[0] = r, t[1] = f);
            let p;
            t[2] !== r || t[3] !== i ? (p = !r && i && (0, $.jsx)(`div`, {
                className: `mt-4 flex items-center justify-center`,
                children: (0, $.jsx)(`p`, {
                    className: `text-token-text-tertiary text-sm font-medium`,
                    children: (0, $.jsx)(V, {
                        ...Gn.loadError
                    })
                })
            }), t[2] = r, t[3] = i, t[4] = p) : p = t[4];
            let h;
            t[5] !== n || t[6] !== r || t[7] !== i ? (h = !r && !i && n.length === 0 && (0, $.jsx)(`div`, {
                className: `mt-4 flex items-center justify-center`,
                children: (0, $.jsx)(`p`, {
                    className: `text-token-text-tertiary text-sm font-medium`,
                    children: (0, $.jsx)(V, {
                        ...Gn.noApps
                    })
                })
            }), t[5] = n, t[6] = r, t[7] = i, t[8] = h) : h = t[8];
            let g;
            t[9] !== n || t[10] !== s || t[11] !== l || t[12] !== u || t[13] !== r || t[14] !== i || t[15] !== d ? (g = !r && !i && n.length > 0 && (0, $.jsxs)(`div`, {
                className: `pb-10`,
                children: [(0, $.jsx)(`div`, {
                    className: `grid grid-cols-1 gap-x-3 gap-y-3 lg:grid-cols-2 lg:gap-y-2 @2xl/main:grid-cols-2 @2xl/main:gap-y-2`,
                    children: n.map(Bn)
                }), d && (0, $.jsx)(`div`, {
                    className: `text-token-text-tertiary mt-3 flex items-center justify-center`,
                    children: (0, $.jsx)(m, {
                        className: `icon`
                    })
                }), (l || u) && (0, $.jsx)(We, {
                    bgColor: `bg-token-bg-primary dark:bg-token-bg-secondary-surface`,
                    hasNextPage: l,
                    isFetchingNextPage: u,
                    fetchNextPage: s ?? Hn
                })]
            }), t[9] = n, t[10] = s, t[11] = l, t[12] = u, t[13] = r, t[14] = i, t[15] = d, t[16] = g) : g = t[16];
            let _;
            return t[17] !== f || t[18] !== p || t[19] !== h || t[20] !== g ? (_ = (0, $.jsxs)(`section`, {
                className: `mt-3`,
                children: [f, p, h, g]
            }), t[17] = f, t[18] = p, t[19] = h, t[20] = g, t[21] = _) : _ = t[21], _
        }, Gn = B({
            loadError: {
                id: `/Z+3Dy`,
                defaultMessage: `Could not load apps right now.`
            },
            noApps: {
                id: `GrZ5nz`,
                defaultMessage: `No apps were found.`
            }
        })
    })),
    qn = e((() => {
        Gt(), kn(), Tn(), Me(), Pn(), Kn()
    }));
export {
    kn as a, On as i, Wn as n, Kn as r, qn as t
};
//# sourceMappingURL=7b12be43-i0y2tdqm6fmrcvxk.js.map