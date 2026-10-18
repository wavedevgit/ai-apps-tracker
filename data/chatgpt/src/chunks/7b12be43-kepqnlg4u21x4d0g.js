import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    AR as r,
    AT as i,
    Bz as a,
    CR as o,
    Fx as s,
    IU as c,
    LU as l,
    My as u,
    Nrt as d,
    O0 as f,
    Prt as p,
    SR as m,
    Srt as h,
    T0 as g,
    _R as _,
    _s as v,
    b5 as y,
    dR as b,
    dz as x,
    fz as S,
    gv as C,
    hU as w,
    i1 as T,
    jy as E,
    k1 as D,
    kT as O,
    mq as k,
    oq as A,
    pU as j,
    prt as M,
    ps as N,
    tv as P,
    u1 as F,
    y5 as I,
    zx as L,
    zz as R
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as z,
    Bn as B,
    Ht as ee,
    Ln as te,
    Nn as V,
    Pt as ne,
    Rn as H,
    Vn as re,
    jt as ie,
    wn as U,
    zn as ae
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $Ft as oe,
    AGn as se,
    Bhn as ce,
    Bwn as le,
    Cwn as ue,
    EWt as de,
    Ewn as fe,
    F3t as pe,
    Fwn as me,
    Gwn as he,
    Iwn as ge,
    MGn as _e,
    Mwn as ve,
    NQ as ye,
    NWt as be,
    Nr as xe,
    QFt as Se,
    Swn as Ce,
    TWt as we,
    USn as Te,
    VQ as Ee,
    WSn as De,
    Wwn as Oe,
    XFt as ke,
    ZFt as Ae,
    Zhn as je,
    aIt as Me,
    ab as Ne,
    bY as Pe,
    cX as Fe,
    crt as Ie,
    dWt as Le,
    eIt as Re,
    egn as ze,
    eit as Be,
    ib as Ve,
    j3t as He,
    kr as Ue,
    lX as We,
    lrt as Ge,
    ort as Ke,
    qhn as qe,
    qrt as Je,
    rb as Ye,
    srt as Xe,
    tgn as Ze,
    uWt as Qe,
    xit as $e,
    yY as et,
    ywn as tt,
    zwn as nt
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    CC as rt,
    Ef as it,
    SC as at,
    Tf as ot,
    Xb as st,
    Yb as ct,
    ix as lt,
    rx as ut
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Xb as dt,
    Zb as ft
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    Bp as pt,
    E as mt,
    Ju as ht,
    Ku as gt,
    M as _t,
    Qu as vt,
    T as yt,
    Vp as bt,
    k as xt,
    td as St
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    a as Ct,
    i as wt,
    r as Tt,
    t as Et
} from "./65b7af15-ch0fbrpmec4wd9eo.js";
import {
    r as Dt,
    t as Ot
} from "./db2560a5-hvp8sdtr5ycd1znw.js";
import {
    i as kt,
    r as At
} from "./94e0eb8c-bt3osepxf0748soh.js";
import {
    n as jt,
    r as Mt,
    t as Nt
} from "./4b84ae07-m7t0qzhuqad7jbhh.js";
import {
    n as Pt,
    t as Ft
} from "./ee153865-iso9p1q0pon8wl86.js";
import {
    a as It,
    c as Lt,
    i as Rt,
    n as zt,
    s as Bt
} from "./5cda56c5-l23m7j4dd1008c4h.js";

function Vt() {
    _(m.ACCESS_FLOW_ENTRY_POINT_CHAT_HEADER, {
        entryTrigger: o.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC
    })
}

function Ht() {
    n({
        fallbackScreenHint: `login_or_signup`,
        callback: Vt,
        skipLoginModal: !1
    })
}
var Ut, W, Wt, Gt, Kt, G, qt = e((() => {
    Ut = U(), Et(), me(), jt(), Re(), b(), be(), i(), qe(), Pe(), ze(), a(), ct(), ot(), g(), u(), D(), v(), A(), d(), r(), H(), z(), W = B(), Wt = `h-10 w-10 shrink-0 rounded-full p-0! select-none`, Gt = e => {
        "use forget";
        let t = (0, Ut.c)(49),
            {
                app: n,
                availability: r,
                isLoading: i,
                hasError: a,
                showManageButton: o
            } = e,
            s = o !== void 0 && o,
            c = ae(),
            {
                shouldBlockConsumerLockdownModeActionsForAccount: l
            } = je(),
            u = Mt(),
            d = ne(),
            {
                handleConnect: m,
                isPending: h
            } = Tt(n?.name, n?.id),
            g;
        t[0] !== n || t[1] !== u ? (g = () => {
            if (!n) return;
            let e = new URLSearchParams;
            e.set(Qe, n.id), e.set(we, de.AppDirectory), u(`${Le}?${e.toString()}`)
        }, t[0] = n, t[1] = u, t[2] = g) : g = t[2];
        let _ = g;
        if (!p()) {
            let e;
            return t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, W.jsx)(Kt, {}), t[3] = e) : e = t[3], e
        }
        if (!n || i || h) {
            let e;
            return t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, W.jsx)(O, {
                type: `button`,
                color: `primary`,
                className: `sm:btn-medium px-4! select-none`,
                loading: !0,
                children: (0, W.jsx)(V, {
                    ...G.loading
                })
            }), t[4] = e) : e = t[4], e
        }
        let v = r?.status === `DISABLED_BY_ADMIN` || r?.disabledReason === `disabled_by_admin`,
            y = r != null && !r.available,
            b;
        t[5] !== n || t[6] !== l ? (b = ge(n, l), t[5] = n, t[6] = l, t[7] = b) : b = t[7];
        let x = b,
            S;
        t[8] === n.id ? S = t[9] : (S = () => {
            let e = new URLSearchParams;
            return e.set(N, k(n.id)), e
        }, t[8] = n.id, t[9] = S);
        let C = S,
            w;
        t[10] !== n.id || t[11] !== C ? (w = () => {
            Me(n.id), window.location.assign(`/?${C().toString()}`)
        }, t[10] = n.id, t[11] = C, t[12] = w) : w = t[12];
        let T = w,
            D;
        t[13] !== n.id || t[14] !== C || t[15] !== d ? (D = async () => (Me(n.id), Ze(d, {
            params: C(),
            config: {
                disabledToolIds: [ce]
            }
        }), !0), t[13] = n.id, t[14] = C, t[15] = d, t[16] = D) : D = t[16];
        let A = D;
        if (v) {
            let e;
            return t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, W.jsx)(O, {
                type: `button`,
                color: `primary`,
                className: `sm:btn-medium px-4! select-none`,
                disabled: !0,
                icon: it,
                children: (0, W.jsx)(V, {
                    ...G.disabledByAdmin
                })
            }), t[17] = e) : e = t[17], e
        }
        if (r?.installed) {
            let e;
            t[18] !== n.name || t[19] !== T || t[20] !== A || t[21] !== x ? (e = () => {
                if (x) {
                    f(et, {
                        toolName: n.name,
                        onTurnOffForThisChat: A
                    });
                    return
                }
                T()
            }, t[18] = n.name, t[19] = T, t[20] = A, t[21] = x, t[22] = e) : e = t[22];
            let r;
            t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, W.jsx)(V, {
                ...G.startChat
            }), t[23] = r) : r = t[23];
            let i;
            t[24] === e ? i = t[25] : (i = (0, W.jsx)(O, {
                type: `button`,
                color: `primary`,
                className: `sm:btn-medium px-4! select-none`,
                onClick: e,
                children: r
            }), t[24] = e, t[25] = i);
            let a;
            t[26] !== _ || t[27] !== s ? (a = s ? (0, W.jsxs)(O, {
                type: `button`,
                size: `medium`,
                color: `secondary`,
                className: Wt,
                onClick: _,
                children: [(0, W.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, W.jsx)(V, {
                        ...G.manage
                    })
                }), (0, W.jsx)(st, {
                    className: `icon`
                })]
            }) : null, t[26] = _, t[27] = s, t[28] = a) : a = t[28];
            let o;
            return t[29] !== a || t[30] !== i ? (o = (0, W.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [i, a]
            }), t[29] = a, t[30] = i, t[31] = o) : o = t[31], o
        }
        let j = a || !r?.canInstall,
            M;
        t[32] !== r?.canInstall || t[33] !== m ? (M = () => {
            r?.canInstall && m()
        }, t[32] = r?.canInstall, t[33] = m, t[34] = M) : M = t[34];
        let P;
        t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (P = (0, W.jsx)(V, {
            ...G.connect
        }), t[35] = P) : P = t[35];
        let F;
        t[36] === a ? F = t[37] : (F = a ? (0, W.jsx)(R, {
            className: `ms-1 h-4 w-4`
        }) : null, t[36] = a, t[37] = F);
        let I;
        t[38] !== F || t[39] !== j || t[40] !== M ? (I = (0, W.jsxs)(O, {
            type: `button`,
            color: `primary`,
            className: `sm:btn-medium px-4! select-none`,
            disabled: j,
            onClick: M,
            children: [P, F]
        }), t[38] = F, t[39] = j, t[40] = M, t[41] = I) : I = t[41];
        let L = I;
        if (r?.canInstall) return L;
        let z;
        t[42] !== a || t[43] !== c || t[44] !== y ? (z = y ? c.formatMessage(G.notAvailableTooltip) : a ? c.formatMessage(G.errorTooltip) : void 0, t[42] = a, t[43] = c, t[44] = y, t[45] = z) : z = t[45];
        let B;
        return t[46] !== L || t[47] !== z ? (B = (0, W.jsx)(E, {
            label: z,
            align: `end`,
            side: `top`,
            children: L
        }), t[46] = L, t[47] = z, t[48] = B) : B = t[48], B
    }, Kt = () => {
        "use forget";
        let e = (0, Ut.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, W.jsx)(O, {
            type: `button`,
            color: `primary`,
            className: `sm:btn-medium px-4! select-none`,
            onClick: Ht,
            children: (0, W.jsx)(V, {
                ...G.connect
            })
        }), e[0] = t) : t = e[0], t
    }, G = te({
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

function Jt(e) {
    "use forget";
    let t = (0, Yt.c)(19),
        {
            app: n,
            appsRoute: r
        } = e,
        i = r === void 0 ? `/apps` : r,
        a, o;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = I(`peer w-full sm:h-30 md:bg-black/[0.024] md:dark:bg-white/[0.018]`, `has-[.persistent-page-header-upgrade-pill]:h-header-height has-[.persistent-page-header-upgrade-pill]:bg-primary has-[.persistent-page-header-upgrade-pill]:sticky has-[.persistent-page-header-upgrade-pill]:top-0 has-[.persistent-page-header-upgrade-pill]:z-20 dark:has-[.persistent-page-header-upgrade-pill]:bg-token-bg-secondary-surface`), o = I(`screen-arch draggable no-draggable-children touch:p-2.5 h-header-height pointer-events-none top-0 z-20 flex items-center justify-between p-2 select-none [view-transition-name:var(--vt-page-header)] *:pointer-events-auto [&>.persistent-page-header-upgrade-pill]:shrink-0`, Ue), t[0] = a, t[1] = o) : (a = t[0], o = t[1]);
    let s;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = p() ? (0, K.jsx)(pt, {}) : (0, K.jsx)(xt, {
        className: `hover:bg-black/10! dark:hover:bg-white/10!`
    }), t[2] = s) : s = t[2];
    let c, l;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = ke(`app-details`), l = (0, K.jsx)(V, {
        ...Xt.apps
    }), t[3] = c, t[4] = l) : (c = t[3], l = t[4]);
    let u;
    t[5] === i ? u = t[6] : (u = (0, K.jsx)(Nt, {
        className: `shrink-0`,
        to: i,
        state: c,
        children: l
    }), t[5] = i, t[6] = u);
    let d;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, K.jsx)(at, {
        className: `text-token-icon-tertiary/80 h-4 w-4 shrink-0 translate-y-[1px]`
    }), t[7] = d) : d = t[7];
    let f;
    t[8] === n ? f = t[9] : (f = n ? (0, K.jsx)(`span`, {
        className: `text-token-text-tertiary truncate`,
        title: n.name,
        children: n.name
    }) : (0, K.jsx)(`div`, {
        className: `flex h-full w-24 justify-center`,
        children: (0, K.jsx)(He, {
            width: 100,
            widthVariance: 0,
            className: `my-0!`
        })
    }), t[8] = n, t[9] = f);
    let m;
    t[10] !== u || t[11] !== f ? (m = (0, K.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1`,
        children: [s, (0, K.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-2 px-2 select-none`,
            children: [u, d, f]
        })]
    }), t[10] = u, t[11] = f, t[12] = m) : m = t[12];
    let h;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (h = p() ? (0, K.jsx)(yt, {
        surface: `apps`
    }) : (0, K.jsx)(vt, {
        location: `App Directory`
    }), t[13] = h) : h = t[13];
    let g;
    t[14] === m ? g = t[15] : (g = (0, K.jsx)(`div`, {
        className: a,
        children: (0, K.jsxs)(`div`, {
            className: o,
            children: [m, h]
        })
    }), t[14] = m, t[15] = g);
    let _;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, K.jsx)(`div`, {
        className: `hidden h-17 sm:peer-has-[.persistent-page-header-upgrade-pill]:block md:bg-black/[0.024] md:dark:bg-white/[0.018]`
    }), t[16] = _) : _ = t[16];
    let v;
    return t[17] === g ? v = t[18] : (v = (0, K.jsxs)(se.Header, {
        children: [g, _]
    }), t[17] = g, t[18] = v), v
}
var Yt, K, Xt, Zt = e((() => {
    Yt = U(), jt(), Re(), xe(), rt(), St(), pe(), mt(), _e(), bt(), _t(), d(), y(), H(), K = B(), Xt = te({
        apps: {
            id: `ae20zu`,
            defaultMessage: `Apps`
        }
    })
}));

function Qt(e) {
    return e.auth_type === `OAUTH`
}
var $t, en, q, tn, nn, rn, an = e((() => {
    $t = U(), me(), L(), Je(), i(), c(), ft(), ye(), he(), j(), en = t(re()), H(), q = B(), tn = [], nn = e => {
        "use forget";
        let t = (0, $t.c)(36),
            {
                app: n
            } = e,
            r = ae(),
            i = w(),
            a = le(),
            o = n?.id,
            c;
        t[0] !== o || t[1] !== a ? (c = o ? a.data?.get(o) ?? tn : tn, t[0] = o, t[1] = a, t[2] = c) : c = t[2];
        let u = c,
            d;
        t[3] === u ? d = t[4] : (d = u.filter(Qt), t[3] = u, t[4] = d);
        let f = d,
            p;
        t[5] === f ? p = t[6] : (p = dt(f), t[5] = f, t[6] = p);
        let m = p,
            h = m == null && f.length > 0,
            g = nt(h ? o : void 0),
            [_, v] = (0, en.useState)(!1),
            y = g.data,
            b = !!(g.data?.id && h),
            x;
        t[7] === b ? x = t[8] : (x = {
            forceEnable: b
        }, t[7] = b, t[8] = x);
        let {
            actions: S,
            isLoading: C
        } = Ee(y, Oe.CONNECTOR_SETTING, x), T;
        bb0: {
            if (!g.data || !h) {
                T = void 0;
                break bb0
            }
            let e;
            if (t[9] !== S || t[10] !== g.data || t[11] !== f) {
                let n;
                t[13] !== S || t[14] !== g.data ? (n = e => s({
                    actions: S,
                    connector: g.data,
                    link: e
                }), t[13] = S, t[14] = g.data, t[15] = n) : n = t[15], e = f.find(n), t[9] = S, t[10] = g.data, t[11] = f, t[12] = e
            } else e = t[12];T = e
        }
        let E = m ?? T;
        if (!o || a.isLoading || h && (g.isLoading || C) || !E) return null;
        let D = m != null,
            k;
        t[16] !== o || t[17] !== r || t[18] !== i || t[19] !== E ? (k = async () => {
            v(!0);
            try {
                await Be({
                    connectorId: o,
                    linkId: E.id,
                    redirectAfter: window.location.pathname + window.location.search + window.location.hash
                })
            } catch (e) {
                let t = e;
                v(!1), i.danger(r.formatMessage(rn.reconnectError), {
                    error: t
                })
            }
        }, t[16] = o, t[17] = r, t[18] = i, t[19] = E, t[20] = k) : k = t[20];
        let A = k,
            j = D ? `border-token-border-status-warning bg-token-bg-status-warning text-token-text-status-warning flex items-start justify-between gap-3 rounded-md border p-3` : `border-token-border-default bg-token-bg-secondary text-token-text-primary flex items-start justify-between gap-3 rounded-md border p-3`,
            M = D ? `icon icon-sm mt-0.5 shrink-0` : `icon icon-sm text-token-icon-status-warning mt-0.5 shrink-0`,
            N;
        t[21] === M ? N = t[22] : (N = (0, q.jsx)(l, {
            "aria-hidden": `true`,
            className: M
        }), t[21] = M, t[22] = N);
        let P = D ? rn.reauthRequiredWarning : rn.scopeWarning,
            F;
        t[23] === P ? F = t[24] : (F = (0, q.jsx)(`div`, {
            className: `text-sm`,
            children: (0, q.jsx)(V, {
                ...P
            })
        }), t[23] = P, t[24] = F);
        let I;
        t[25] !== N || t[26] !== F ? (I = (0, q.jsxs)(`div`, {
            className: `flex min-w-0 flex-1 items-start gap-2 text-start`,
            children: [N, F]
        }), t[25] = N, t[26] = F, t[27] = I) : I = t[27];
        let L;
        t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (L = (0, q.jsx)(V, {
            ...rn.reconnect
        }), t[28] = L) : L = t[28];
        let R;
        t[29] !== _ || t[30] !== A ? (R = (0, q.jsx)(O, {
            size: `small`,
            color: `secondary`,
            className: `shrink-0`,
            onClick: A,
            loading: _,
            children: L
        }), t[29] = _, t[30] = A, t[31] = R) : R = t[31];
        let z;
        return t[32] !== I || t[33] !== R || t[34] !== j ? (z = (0, q.jsxs)(`div`, {
            className: j,
            children: [I, R]
        }), t[32] = I, t[33] = R, t[34] = j, t[35] = z) : z = t[35], z
    }, rn = te({
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

function on(e) {
    "use forget";
    let t = (0, sn.c)(6),
        {
            href: n,
            isNativeMobileView: r,
            accessibleLabel: i
        } = e;
    if (!n) return null;
    let a = r ? `_self` : `_blank`,
        o = a === `_blank` ? `noopener noreferrer` : void 0,
        s;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, cn.jsx)(lt, {
        "aria-hidden": !0,
        className: `h-4.5 w-4.5`
    }), t[0] = s) : s = t[0];
    let c;
    return t[1] !== i || t[2] !== n || t[3] !== o || t[4] !== a ? (c = (0, cn.jsx)(`a`, {
        href: n,
        target: a,
        rel: o,
        "aria-label": i,
        className: `interactive-label-secondary`,
        children: s
    }), t[1] = i, t[2] = n, t[3] = o, t[4] = a, t[5] = c) : c = t[5], c
}
var sn, cn, ln = e((() => {
    sn = U(), ut(), cn = B()
}));

function un(e) {
    "use forget";
    let t = (0, hn.c)(15),
        {
            app: n
        } = e,
        [r, i] = (0, gn.useState)(!1),
        [a, o] = (0, gn.useState)(!1),
        s = (0, gn.useRef)(null),
        c = n.description,
        l, u;
    if (t[0] === c ? (l = t[1], u = t[2]) : (l = () => {
            if (!c || !s.current) return;
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
        }, u = [c], t[0] = c, t[1] = l, t[2] = u), (0, gn.useEffect)(l, u), !c) return null;
    let d = !r && a,
        f = !r && `line-clamp-4 sm:line-clamp-6`,
        p = d && `cursor-pointer`,
        m;
    t[3] !== f || t[4] !== p ? (m = I(`text-token-text-secondary text-base leading-6 whitespace-pre-line sm:text-sm`, f, p), t[3] = f, t[4] = p, t[5] = m) : m = t[5];
    let h;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (h = () => {
        i(!0)
    }, t[6] = h) : h = t[6];
    let g;
    t[7] !== c || t[8] !== m ? (g = (0, J.jsx)(`p`, {
        ref: s,
        className: m,
        onClick: h,
        children: c
    }), t[7] = c, t[8] = m, t[9] = g) : g = t[9];
    let _;
    t[10] === d ? _ = t[11] : (_ = d ? (0, J.jsx)(`div`, {
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
    }) : null, t[10] = d, t[11] = _);
    let v;
    return t[12] !== g || t[13] !== _ ? (v = (0, J.jsx)(`section`, {
        children: (0, J.jsxs)(`div`, {
            children: [g, _]
        })
    }), t[12] = g, t[13] = _, t[14] = v) : v = t[14], v
}

function dn(e) {
    "use forget";
    let t = (0, hn.c)(5),
        {
            app: n
        } = e,
        r = bn(n);
    if (r.length === 0) return null;
    let i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, J.jsx)(`h2`, {
        className: `border-border border-b py-3 text-xl font-normal sm:py-2 sm:text-lg`,
        children: (0, J.jsx)(V, {
            ...Y.informationHeading
        })
    }), t[0] = i) : i = t[0];
    let a;
    t[1] === r ? a = t[2] : (a = r.map(fn), t[1] = r, t[2] = a);
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

function fn(e) {
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

function pn(e) {
    return e !== void 0 && e !== ``
}

function mn(e) {
    return e.value !== void 0 && e.value != null && e.value !== ``
}
var hn, gn, J, Y, _n, vn, yn, bn, xn = e((() => {
    hn = U(), Rt(), F(), y(), gn = t(re()), H(), z(), C(), ue(), Bt(), ln(), Pt(), J = B(), Y = te({
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
    }), _n = e => {
        let t = e.app_metadata;
        if (fe(t)) return typeof t.customer_support == `string` ? t.customer_support : void 0
    }, vn = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e), yn = e => {
        "use forget";
        let t = (0, hn.c)(7),
            n;
        if (t[0] === Symbol.for(`react.memo_cache_sentinel`)) {
            let e = T();
            n = e?.isProTier() || e?.isEnterprisey(), t[0] = n
        } else n = t[0];
        let r = n,
            i = ae(),
            a;
        if (t[1] !== e.id || t[2] !== e.labels?.consequential || t[3] !== e.labels?.interactive || t[4] !== e.labels?.sync || t[5] !== i) {
            let n = new Set;
            (e.labels?.sync === `true` || P.has(e.id)) && r && (n.add(zt.FILE_SEARCH), n.add(zt.SYNC)), e.labels?.interactive === `true` && n.add(zt.INTERACTIVE), e.labels?.consequential === `true` && n.add(zt.WRITES), a = Array.from(n).map(e => It(e, i)), t[1] = e.id, t[2] = e.labels?.consequential, t[3] = e.labels?.interactive, t[4] = e.labels?.sync, t[5] = i, t[6] = a
        } else a = t[6];
        return a
    }, bn = e => {
        "use forget";
        let t = (0, hn.c)(44),
            n = ae(),
            r = e.app_metadata?.categories ?? [],
            i = Lt(),
            [a] = ee(),
            o;
        t[0] === a ? o = t[1] : (o = a.get(`native_mobile_view`), t[0] = a, t[1] = o);
        let s = o === `true`,
            c = _n(e),
            l = c ? Ft(c) : void 0,
            u;
        t[2] === i ? u = t[3] : (u = e => i.get(e)?.name, t[2] = i, t[3] = u);
        let d = r.map(u).filter(pn),
            f = d.length ? d.join(`, `) : void 0,
            p;
        t[4] === f ? p = t[5] : (p = {
            title: Y.categoryHeading,
            value: f
        }, t[4] = f, t[5] = p);
        let m = yn(e),
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
            value: (0, J.jsx)(on, {
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
            value: (0, J.jsx)(on, {
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
            value: (0, J.jsx)(on, {
                href: D,
                isNativeMobileView: s,
                accessibleLabel: O
            })
        }, t[28] = s, t[29] = D, t[30] = O, t[31] = k) : k = t[31];
        let A = Y,
            j = c ? vn(c) ? (0, J.jsx)(`a`, {
                href: `mailto:${c}`,
                className: `interactive-label-secondary break-all underline`,
                children: c
            }) : l && (0, J.jsx)(on, {
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
        return t[35] !== x || t[36] !== C || t[37] !== E || t[38] !== k || t[39] !== M || t[40] !== p || t[41] !== g || t[42] !== v ? (N = [p, g, v, x, C, E, k, M].filter(mn), t[35] = x, t[36] = C, t[37] = E, t[38] = k, t[39] = M, t[40] = p, t[41] = g, t[42] = v, t[43] = N) : N = t[43], N
    }
}));

function Sn(e) {
    "use forget";
    let t = (0, Cn.c)(47),
        {
            app: n,
            availability: r,
            availabilityLoading: i,
            availabilityError: a
        } = e,
        [o] = ee(),
        s;
    t[0] === o ? s = t[1] : (s = o.get(`native_mobile_view`), t[0] = o, t[1] = s);
    let c = s === `true`,
        l;
    t[2] === n ? l = t[3] : (l = n ? ve(n) : null, t[2] = n, t[3] = l);
    let u = l,
        d = !c && `-mt-14`,
        f;
    t[4] === d ? f = t[5] : (f = I(`relative hidden w-fit flex-shrink-0 sm:block`, d), t[4] = d, t[5] = f);
    let p;
    t[6] === n ? p = t[7] : (p = n ? (0, X.jsx)(Ke, {
        app: {
            name: n.name,
            logoUrl: n.logo_url ?? null,
            logoDarkUrl: n.logo_url_dark ?? null
        },
        size: `xlarge`
    }) : (0, X.jsx)(Ie, {
        className: `h-16 w-16 rounded-full`
    }), t[6] = n, t[7] = p);
    let m;
    t[8] !== f || t[9] !== p ? (m = (0, X.jsx)(`div`, {
        className: f,
        children: p
    }), t[8] = f, t[9] = p, t[10] = m) : m = t[10];
    let h;
    t[11] === n ? h = t[12] : (h = (0, X.jsx)(`div`, {
        className: `relative w-fit flex-shrink-0 sm:hidden`,
        children: n ? (0, X.jsx)(Ke, {
            app: {
                name: n.name,
                logoUrl: n.logo_url ?? null,
                logoDarkUrl: n.logo_url_dark ?? null
            },
            size: `xxlarge`
        }) : (0, X.jsx)(Ie, {
            className: `h-20 w-20 rounded-full`
        })
    }), t[11] = n, t[12] = h);
    let g;
    t[13] === n ? g = t[14] : (g = n ? n.name : (0, X.jsx)(`div`, {
        className: `w-56`,
        "aria-hidden": `true`,
        children: (0, X.jsx)(He, {
            size: `xl`
        })
    }), t[13] = n, t[14] = g);
    let _;
    t[15] === g ? _ = t[16] : (_ = (0, X.jsx)(`h1`, {
        className: `text-2xl font-medium max-sm:ms-0.75 sm:text-3xl`,
        children: g
    }), t[15] = g, t[16] = _);
    let v;
    t[17] === n?.labels?.distribution ? v = t[18] : (v = n?.labels?.distribution === `individual` ? (0, X.jsx)(`div`, {
        className: `text-token-interactive-label-danger-secondary-default border-token-border-status-error mt-[2px] items-center rounded-full border px-2 py-0.5 text-xs font-semibold uppercase select-none`,
        children: (0, X.jsx)(V, {
            id: `w+mmPI`,
            defaultMessage: `DEV`
        })
    }) : null, t[17] = n?.labels?.distribution, t[18] = v);
    let y;
    t[19] === n?.distribution_channel ? y = t[20] : (y = n?.distribution_channel === `TENANT_CATALOG` ? (0, X.jsx)(`span`, {
        className: `border-token-text-tertiary text-token-text-secondary dark:border-token-border-heavy dark:text-token-text-tertiary mt-[2px] items-center rounded-full border px-2 py-0.5 text-xs font-semibold uppercase select-none`,
        children: (0, X.jsx)(V, {
            id: `Thz3Mo`,
            defaultMessage: `Internal`
        })
    }) : null, t[19] = n?.distribution_channel, t[20] = y);
    let b;
    t[21] !== v || t[22] !== y || t[23] !== _ ? (b = (0, X.jsxs)(`div`, {
        className: `flex min-w-0 flex-wrap items-center gap-2`,
        children: [_, v, y]
    }), t[21] = v, t[22] = y, t[23] = _, t[24] = b) : b = t[24];
    let x;
    t[25] !== n || t[26] !== u ? (x = n ? u ? (0, X.jsx)(`p`, {
        className: `text-token-text-secondary line-clamp-3 sm:line-clamp-2`,
        title: u,
        children: u
    }) : null : (0, X.jsx)(`div`, {
        className: `sm:min-w-0`,
        "aria-hidden": `true`,
        children: (0, X.jsx)(He, {
            size: `base`
        })
    }), t[25] = n, t[26] = u, t[27] = x) : x = t[27];
    let S = !c && `sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:self-start`,
        C;
    t[28] === S ? C = t[29] : (C = I(`flex pt-2 sm:pt-0`, S), t[28] = S, t[29] = C);
    let w = !c,
        T;
    t[30] !== n || t[31] !== r || t[32] !== a || t[33] !== i || t[34] !== w ? (T = (0, X.jsx)(Gt, {
        app: n,
        availability: r,
        isLoading: i,
        hasError: a,
        showManageButton: w
    }), t[30] = n, t[31] = r, t[32] = a, t[33] = i, t[34] = w, t[35] = T) : T = t[35];
    let E;
    t[36] !== C || t[37] !== T ? (E = (0, X.jsx)(`div`, {
        className: C,
        children: T
    }), t[36] = C, t[37] = T, t[38] = E) : E = t[38];
    let D;
    t[39] !== b || t[40] !== x || t[41] !== E ? (D = (0, X.jsxs)(`div`, {
        className: `grid w-full gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-x-4`,
        children: [b, x, E]
    }), t[39] = b, t[40] = x, t[41] = E, t[42] = D) : D = t[42];
    let O;
    return t[43] !== D || t[44] !== m || t[45] !== h ? (O = (0, X.jsx)(`header`, {
        children: (0, X.jsx)(`div`, {
            className: `mx-auto flex w-full max-w-4xl flex-col md:px-2 lg:px-6`,
            children: (0, X.jsxs)(`div`, {
                className: `flex items-center gap-5 p-4 sm:flex-col sm:items-start`,
                children: [m, h, D]
            })
        })
    }), t[43] = D, t[44] = m, t[45] = h, t[46] = O) : O = t[46], O
}
var Cn, X, wn = e((() => {
        Cn = U(), me(), Ge(), pe(), y(), H(), z(), qt(), Xe(), X = B()
    })),
    Tn, En, Z, Dn, On = e((() => {
        Tn = U(), Dt(), Zt(), an(), Ct(), xn(), Re(), ht(), Je(), h(), g(), he(), At(), En = t(re()), H(), z(), wn(), Z = B(), Dn = e => {
            "use forget";
            let t = (0, Tn.c)(49),
                {
                    app: n,
                    availability: r,
                    availabilityLoading: i,
                    availabilityError: a
                } = e,
                o = ae(),
                s = ie(),
                c = $e(),
                [l] = ee(),
                u;
            t[0] === l ? u = t[1] : (u = Ot(l), t[0] = l, t[1] = u);
            let d = u,
                p;
            t[2] === l ? p = t[3] : (p = l.get(`native_mobile_view`), t[2] = l, t[3] = p);
            let m = p === `true`,
                h;
            t[4] === l ? h = t[5] : (h = l.toString(), t[4] = l, t[5] = h);
            let g = h,
                _;
            t[6] !== g || t[7] !== s.state ? (_ = Se(s.state) ?? `/apps${g?`?${g}`:``}`, t[6] = g, t[7] = s.state, t[8] = _) : _ = t[8];
            let v = _,
                y = m ? `div` : `main`,
                b = n ? `${s.pathname}${s.search}` : void 0,
                x;
            t[9] !== s.state || t[10] !== l ? (x = oe({
                state: s.state,
                searchParams: l
            }), t[9] = s.state, t[10] = l, t[11] = x) : x = t[11];
            let S = x,
                C;
            t[12] !== n || t[13] !== r?.canInstall || t[14] !== s.pathname ? (C = () => !!(n && r?.canInstall && !/\/connect\/?$/.test(s.pathname)), t[12] = n, t[13] = r?.canInstall, t[14] = s.pathname, t[15] = C) : C = t[15];
            let w;
            t[16] !== n || t[17] !== c || t[18] !== d || t[19] !== b || t[20] !== S ? (w = () => {
                if (!(!n || !b)) return f(gt, {
                    connectorId: n.id,
                    redirectAfter: b,
                    productSku: c ?? d ?? Oe.CONNECTOR_SETTING,
                    linkCreateProductSku: Oe.CONNECTOR_SETTING,
                    referrer: S,
                    postConnectExperienceSource: `plugin_install`
                }), !0
            }, t[16] = n, t[17] = c, t[18] = d, t[19] = b, t[20] = S, t[21] = w) : w = t[21];
            let T;
            t[22] !== b || t[23] !== C || t[24] !== w ? (T = {
                enabled: C,
                redirectUrl: b,
                restoreParentFlowOnResume: w
            }, t[22] = b, t[23] = C, t[24] = w, t[25] = T) : T = t[25], kt(T);
            let E;
            t[26] !== n || t[27] !== o ? (E = () => {
                if (!n?.name) return;
                let e = document.title,
                    t = o.formatMessage(M.title);
                return document.title = `ChatGPT - ${n.name}`, () => {
                    document.title = e || t
                }
            }, t[26] = n, t[27] = o, t[28] = E) : E = t[28];
            let D = n?.name,
                O;
            t[29] !== o || t[30] !== D ? (O = [D, o], t[29] = o, t[30] = D, t[31] = O) : O = t[31], (0, En.useEffect)(E, O);
            let k;
            t[32] !== n || t[33] !== v || t[34] !== m ? (k = !m && (0, Z.jsx)(Jt, {
                app: n,
                appsRoute: v
            }), t[32] = n, t[33] = v, t[34] = m, t[35] = k) : k = t[35];
            let A;
            t[36] !== n || t[37] !== r || t[38] !== a || t[39] !== i ? (A = (0, Z.jsx)(Sn, {
                app: n,
                availability: r,
                availabilityLoading: i,
                availabilityError: a
            }), t[36] = n, t[37] = r, t[38] = a, t[39] = i, t[40] = A) : A = t[40];
            let j;
            t[41] !== y || t[42] !== n || t[43] !== m ? (j = n ? (0, Z.jsxs)(y, {
                className: `mx-auto w-full max-w-4xl px-4 *:mb-6 sm:gap-8 md:px-6 lg:px-10`,
                id: m ? void 0 : `main`,
                children: [(0, Z.jsx)(nn, {
                    app: n
                }), (0, Z.jsx)(wt, {
                    app: n
                }), (0, Z.jsx)(un, {
                    app: n
                }), (0, Z.jsx)(dn, {
                    app: n
                })]
            }) : null, t[41] = y, t[42] = n, t[43] = m, t[44] = j) : j = t[44];
            let N;
            return t[45] !== k || t[46] !== A || t[47] !== j ? (N = (0, Z.jsxs)(`div`, {
                className: `relative h-full overflow-y-auto pb-6`,
                children: [k, A, j]
            }), t[45] = k, t[46] = A, t[47] = j, t[48] = N) : N = t[48], N
        }
    })),
    kn, Q, An, jn, Mn, Nn = e((() => {
        kn = U(), tt(), jt(), De(), Re(), Ne(), rt(), H(), z(), Xe(), Q = B(), An = e => {
            "use forget";
            let t = (0, kn.c)(42),
                {
                    app: n,
                    useBadge: r,
                    badgeType: i
                } = e,
                a = r !== void 0 && r,
                o = ae(),
                [s] = ee(),
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
            t[3] !== n.displayName || t[4] !== o || t[5] !== m ? (h = m ? o.formatMessage(Mn.connectedAppLabel, {
                appName: n.displayName
            }) : void 0, t[3] = n.displayName, t[4] = o, t[5] = m, t[6] = h) : h = t[6];
            let g = h,
                _;
            t[7] === n.displayName ? _ = t[8] : (_ = Te(n.displayName), t[7] = n.displayName, t[8] = _);
            let v = `/apps/${_}/${n.id}${u?`?${u}`:``}`,
                y;
            t[9] !== d || t[10] !== s ? (y = Ae(s, {
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
                children: (0, Q.jsx)(Ke, {
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
            t[22] === f ? C = t[23] : (C = f ? (0, Q.jsx)(Ye, {}) : null, t[22] = f, t[23] = C);
            let w;
            t[24] === p ? w = t[25] : (w = p ? (0, Q.jsx)(Ve, {}) : null, t[24] = p, t[25] = w);
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
                children: (0, Q.jsx)(at, {
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
        }, jn = e => {
            "use forget";
            let t = (0, kn.c)(4),
                {
                    app: n
                } = e,
                {
                    useBadge: r,
                    badgeType: i
                } = Ce(n.id),
                a;
            return t[0] !== n || t[1] !== i || t[2] !== r ? (a = (0, Q.jsx)(An, {
                app: n,
                useBadge: r,
                badgeType: i
            }), t[0] = n, t[1] = i, t[2] = r, t[3] = a) : a = t[3], a
        }, Mn = te({
            connectedAppLabel: {
                id: `EL7u7J`,
                defaultMessage: `{appName} Connected app`
            }
        })
    })),
    Pn, Fn, In, Ln = e((() => {
        Pn = U(), Ge(), pe(), Fn = B(), In = () => {
            "use forget";
            let e = (0, Pn.c)(2),
                t;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Fn.jsx)(Ie, {
                className: `bg-token-bg-elevated-primary h-10 w-10 rounded-full`
            }), e[0] = t) : t = e[0];
            let n;
            return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Fn.jsxs)(`div`, {
                className: `relative flex items-center gap-4 p-1.5 lg:p-3 @2xl/main:p-3`,
                children: [t, (0, Fn.jsx)(`div`, {
                    className: `flex h-full min-w-0 flex-1 flex-col justify-center gap-1`,
                    children: (0, Fn.jsx)(He, {
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

function Rn(e, t) {
    return (0, $.jsx)(In, {}, t)
}

function zn(e) {
    return (0, $.jsx)(jn, {
        app: e
    }, e.id)
}
var Bn, $, Vn, Hn, Un, Wn, Gn = e((() => {
        Bn = U(), We(), S(), H(), Nn(), Ln(), $ = B(), Vn = () => {}, Hn = 10, Un = e => {
            "use forget";
            let t = (0, Bn.c)(22),
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
                        length: Hn
                    }, Rn)
                })
            }), t[0] = r, t[1] = f);
            let p;
            t[2] !== r || t[3] !== i ? (p = !r && i && (0, $.jsx)(`div`, {
                className: `mt-4 flex items-center justify-center`,
                children: (0, $.jsx)(`p`, {
                    className: `text-token-text-tertiary text-sm font-medium`,
                    children: (0, $.jsx)(V, {
                        ...Wn.loadError
                    })
                })
            }), t[2] = r, t[3] = i, t[4] = p) : p = t[4];
            let m;
            t[5] !== n || t[6] !== r || t[7] !== i ? (m = !r && !i && n.length === 0 && (0, $.jsx)(`div`, {
                className: `mt-4 flex items-center justify-center`,
                children: (0, $.jsx)(`p`, {
                    className: `text-token-text-tertiary text-sm font-medium`,
                    children: (0, $.jsx)(V, {
                        ...Wn.noApps
                    })
                })
            }), t[5] = n, t[6] = r, t[7] = i, t[8] = m) : m = t[8];
            let h;
            t[9] !== n || t[10] !== s || t[11] !== l || t[12] !== u || t[13] !== r || t[14] !== i || t[15] !== d ? (h = !r && !i && n.length > 0 && (0, $.jsxs)(`div`, {
                className: `pb-10`,
                children: [(0, $.jsx)(`div`, {
                    className: `grid grid-cols-1 gap-x-3 gap-y-3 lg:grid-cols-2 lg:gap-y-2 @2xl/main:grid-cols-2 @2xl/main:gap-y-2`,
                    children: n.map(zn)
                }), d && (0, $.jsx)(`div`, {
                    className: `text-token-text-tertiary mt-3 flex items-center justify-center`,
                    children: (0, $.jsx)(x, {
                        className: `icon`
                    })
                }), (l || u) && (0, $.jsx)(Fe, {
                    bgColor: `bg-token-bg-primary dark:bg-token-bg-secondary-surface`,
                    hasNextPage: l,
                    isFetchingNextPage: u,
                    fetchNextPage: s ?? Vn
                })]
            }), t[9] = n, t[10] = s, t[11] = l, t[12] = u, t[13] = r, t[14] = i, t[15] = d, t[16] = h) : h = t[16];
            let g;
            return t[17] !== f || t[18] !== p || t[19] !== m || t[20] !== h ? (g = (0, $.jsxs)(`section`, {
                className: `mt-3`,
                children: [f, p, m, h]
            }), t[17] = f, t[18] = p, t[19] = m, t[20] = h, t[21] = g) : g = t[21], g
        }, Wn = te({
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
    Kn = e((() => {
        qt(), On(), wn(), Xe(), Nn(), Gn()
    }));
export {
    On as a, Dn as i, Un as n, Gn as r, Kn as t
};
//# sourceMappingURL=7b12be43-kepqnlg4u21x4d0g.js.map