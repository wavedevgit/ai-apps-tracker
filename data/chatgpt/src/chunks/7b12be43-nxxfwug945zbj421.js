import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $x as n,
    A1 as r,
    AR as i,
    Az as a,
    Bq as o,
    HR as s,
    Hrt as c,
    I1 as l,
    IR as u,
    J5 as d,
    JT as f,
    Mq as p,
    Pv as m,
    VR as h,
    VU as g,
    Xy as _,
    YR as v,
    Yy as y,
    Z0 as b,
    Zrt as x,
    _s as S,
    aB as C,
    cW as w,
    cit as T,
    e2 as E,
    iB as D,
    jz as O,
    lW as k,
    lit as A,
    n0 as j,
    ps as M,
    q5 as N,
    qT as ee,
    rS as P,
    t0 as F,
    yv as I,
    zU as L
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as R,
    Bn as te,
    Hn as z,
    Ht as ne,
    Pn as B,
    Pt as re,
    Rn as ie,
    Tn as V,
    Vn as H,
    jt as ae,
    zn as U
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    $Ft as oe,
    $wn as se,
    Bwn as ce,
    Cit as le,
    E3t as ue,
    EWt as de,
    FQ as fe,
    Iwn as pe,
    KGn as me,
    Kwn as he,
    Lwn as ge,
    NWt as _e,
    Nr as ve,
    Nwn as ye,
    QFt as be,
    S3t as xe,
    SY as Se,
    TWt as Ce,
    UQ as we,
    WGn as Te,
    XFt as Ee,
    Xwn as De,
    Yrt as Oe,
    Ywn as ke,
    ZFt as Ae,
    aIt as je,
    aTn as Me,
    ab as Ne,
    crt as Pe,
    dWt as Fe,
    dX as Ie,
    dgn as Le,
    drt as Re,
    eIt as ze,
    eTn as Be,
    egn as Ve,
    hgn as He,
    iCn as Ue,
    iTn as We,
    kr as Ge,
    lrt as Ke,
    mgn as qe,
    nit as Je,
    ob as Ye,
    rCn as Xe,
    sb as Ze,
    sgn as Qe,
    uWt as $e,
    uX as et,
    urt as tt,
    xY as nt
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    CC as rt,
    Ef as it,
    Kb as at,
    SC as ot,
    Tf as st,
    ex as ct,
    qb as lt,
    tx as ut
} from "./30901919-jory365vq6ym5crx.js";
import {
    Hb as dt,
    Vb as ft
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
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
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
import {
    a as Ct,
    i as wt,
    r as Tt,
    t as Et
} from "./65b7af15-jwh7rb9s56xp1sch.js";
import {
    r as Dt,
    t as Ot
} from "./db2560a5-g6709tecwrtbknzy.js";
import {
    i as kt,
    r as At
} from "./94e0eb8c-ythfm4ybtszwhr06.js";
import {
    n as jt,
    r as Mt,
    t as Nt
} from "./4b84ae07-hujv3nkkx5gumf9j.js";
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
} from "./5cda56c5-mr3sc0uj3i3ldpyd.js";

function Vt() {
    u(h.ACCESS_FLOW_ENTRY_POINT_CHAT_HEADER, {
        entryTrigger: s.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC
    })
}

function Ht() {
    j({
        fallbackScreenHint: `login_or_signup`,
        callback: Vt,
        skipLoginModal: !1
    })
}
var Ut, W, Wt, Gt, Kt, G, qt = e((() => {
    Ut = V(), Et(), ke(), jt(), ze(), i(), _e(), f(), Qe(), Se(), qe(), C(), at(), st(), b(), _(), F(), S(), p(), T(), v(), U(), R(), W = H(), Wt = `h-10 w-10 shrink-0 rounded-full p-0! select-none`, Gt = e => {
        "use forget";
        let t = (0, Ut.c)(49),
            {
                app: n,
                availability: r,
                isLoading: i,
                hasError: a,
                showManageButton: s
            } = e,
            c = s !== void 0 && s,
            l = te(),
            {
                shouldBlockConsumerLockdownModeActionsForAccount: u
            } = Le(),
            d = Mt(),
            f = re(),
            {
                handleConnect: p,
                isPending: m
            } = Tt(n?.name, n?.id),
            h;
        t[0] !== n || t[1] !== d ? (h = () => {
            if (!n) return;
            let e = new URLSearchParams;
            e.set($e, n.id), e.set(Ce, de.AppDirectory), d(`${Fe}?${e.toString()}`)
        }, t[0] = n, t[1] = d, t[2] = h) : h = t[2];
        let g = h;
        if (!A()) {
            let e;
            return t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, W.jsx)(Kt, {}), t[3] = e) : e = t[3], e
        }
        if (!n || i || m) {
            let e;
            return t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, W.jsx)(ee, {
                type: `button`,
                color: `primary`,
                className: `sm:btn-medium px-4! select-none`,
                loading: !0,
                children: (0, W.jsx)(B, {
                    ...G.loading
                })
            }), t[4] = e) : e = t[4], e
        }
        let _ = r?.status === `DISABLED_BY_ADMIN` || r?.disabledReason === `disabled_by_admin`,
            v = r != null && !r.available,
            b;
        t[5] !== n || t[6] !== u ? (b = De(n, u), t[5] = n, t[6] = u, t[7] = b) : b = t[7];
        let x = b,
            S;
        t[8] === n.id ? S = t[9] : (S = () => {
            let e = new URLSearchParams;
            return e.set(M, o(n.id)), e
        }, t[8] = n.id, t[9] = S);
        let C = S,
            w;
        t[10] !== n.id || t[11] !== C ? (w = () => {
            je(n.id), window.location.assign(`/?${C().toString()}`)
        }, t[10] = n.id, t[11] = C, t[12] = w) : w = t[12];
        let T = w,
            O;
        t[13] !== n.id || t[14] !== C || t[15] !== f ? (O = async () => (je(n.id), He(f, {
            params: C(),
            config: {
                disabledToolIds: [Ve]
            }
        }), !0), t[13] = n.id, t[14] = C, t[15] = f, t[16] = O) : O = t[16];
        let k = O;
        if (_) {
            let e;
            return t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, W.jsx)(ee, {
                type: `button`,
                color: `primary`,
                className: `sm:btn-medium px-4! select-none`,
                disabled: !0,
                icon: it,
                children: (0, W.jsx)(B, {
                    ...G.disabledByAdmin
                })
            }), t[17] = e) : e = t[17], e
        }
        if (r?.installed) {
            let e;
            t[18] !== n.name || t[19] !== T || t[20] !== k || t[21] !== x ? (e = () => {
                if (x) {
                    E(nt, {
                        toolName: n.name,
                        onTurnOffForThisChat: k
                    });
                    return
                }
                T()
            }, t[18] = n.name, t[19] = T, t[20] = k, t[21] = x, t[22] = e) : e = t[22];
            let r;
            t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, W.jsx)(B, {
                ...G.startChat
            }), t[23] = r) : r = t[23];
            let i;
            t[24] === e ? i = t[25] : (i = (0, W.jsx)(ee, {
                type: `button`,
                color: `primary`,
                className: `sm:btn-medium px-4! select-none`,
                onClick: e,
                children: r
            }), t[24] = e, t[25] = i);
            let a;
            t[26] !== g || t[27] !== c ? (a = c ? (0, W.jsxs)(ee, {
                type: `button`,
                size: `medium`,
                color: `secondary`,
                className: Wt,
                onClick: g,
                children: [(0, W.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, W.jsx)(B, {
                        ...G.manage
                    })
                }), (0, W.jsx)(lt, {
                    className: `icon`
                })]
            }) : null, t[26] = g, t[27] = c, t[28] = a) : a = t[28];
            let o;
            return t[29] !== a || t[30] !== i ? (o = (0, W.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [i, a]
            }), t[29] = a, t[30] = i, t[31] = o) : o = t[31], o
        }
        let j = a || !r?.canInstall,
            N;
        t[32] !== r?.canInstall || t[33] !== p ? (N = () => {
            r?.canInstall && p()
        }, t[32] = r?.canInstall, t[33] = p, t[34] = N) : N = t[34];
        let P;
        t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (P = (0, W.jsx)(B, {
            ...G.connect
        }), t[35] = P) : P = t[35];
        let F;
        t[36] === a ? F = t[37] : (F = a ? (0, W.jsx)(D, {
            className: `ms-1 h-4 w-4`
        }) : null, t[36] = a, t[37] = F);
        let I;
        t[38] !== F || t[39] !== j || t[40] !== N ? (I = (0, W.jsxs)(ee, {
            type: `button`,
            color: `primary`,
            className: `sm:btn-medium px-4! select-none`,
            disabled: j,
            onClick: N,
            children: [P, F]
        }), t[38] = F, t[39] = j, t[40] = N, t[41] = I) : I = t[41];
        let L = I;
        if (r?.canInstall) return L;
        let R;
        t[42] !== a || t[43] !== l || t[44] !== v ? (R = v ? l.formatMessage(G.notAvailableTooltip) : a ? l.formatMessage(G.errorTooltip) : void 0, t[42] = a, t[43] = l, t[44] = v, t[45] = R) : R = t[45];
        let z;
        return t[46] !== L || t[47] !== R ? (z = (0, W.jsx)(y, {
            label: R,
            align: `end`,
            side: `top`,
            children: L
        }), t[46] = L, t[47] = R, t[48] = z) : z = t[48], z
    }, Kt = () => {
        "use forget";
        let e = (0, Ut.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, W.jsx)(ee, {
            type: `button`,
            color: `primary`,
            className: `sm:btn-medium px-4! select-none`,
            onClick: Ht,
            children: (0, W.jsx)(B, {
                ...G.connect
            })
        }), e[0] = t) : t = e[0], t
    }, G = ie({
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
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = N(`peer w-full sm:h-30 md:bg-black/[0.024] md:dark:bg-white/[0.018]`, `has-[.persistent-page-header-upgrade-pill]:h-header-height has-[.persistent-page-header-upgrade-pill]:bg-primary has-[.persistent-page-header-upgrade-pill]:sticky has-[.persistent-page-header-upgrade-pill]:top-0 has-[.persistent-page-header-upgrade-pill]:z-20 dark:has-[.persistent-page-header-upgrade-pill]:bg-token-bg-secondary-surface`), o = N(`screen-arch draggable no-draggable-children touch:p-2.5 h-header-height pointer-events-none top-0 z-20 flex items-center justify-between p-2 select-none [view-transition-name:var(--vt-page-header)] *:pointer-events-auto [&>.persistent-page-header-upgrade-pill]:shrink-0`, Ge), t[0] = a, t[1] = o) : (a = t[0], o = t[1]);
    let s;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = A() ? (0, K.jsx)(pt, {}) : (0, K.jsx)(xt, {
        className: `hover:bg-black/10! dark:hover:bg-white/10!`
    }), t[2] = s) : s = t[2];
    let c, l;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = Ee(`app-details`), l = (0, K.jsx)(B, {
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
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, K.jsx)(ot, {
        className: `text-token-icon-tertiary/80 h-4 w-4 shrink-0 translate-y-[1px]`
    }), t[7] = d) : d = t[7];
    let f;
    t[8] === n ? f = t[9] : (f = n ? (0, K.jsx)(`span`, {
        className: `text-token-text-tertiary truncate`,
        title: n.name,
        children: n.name
    }) : (0, K.jsx)(`div`, {
        className: `flex h-full w-24 justify-center`,
        children: (0, K.jsx)(xe, {
            width: 100,
            widthVariance: 0,
            className: `my-0!`
        })
    }), t[8] = n, t[9] = f);
    let p;
    t[10] !== u || t[11] !== f ? (p = (0, K.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1`,
        children: [s, (0, K.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-2 px-2 select-none`,
            children: [u, d, f]
        })]
    }), t[10] = u, t[11] = f, t[12] = p) : p = t[12];
    let m;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (m = A() ? (0, K.jsx)(yt, {
        surface: `apps`
    }) : (0, K.jsx)(vt, {
        location: `App Directory`
    }), t[13] = m) : m = t[13];
    let h;
    t[14] === p ? h = t[15] : (h = (0, K.jsx)(`div`, {
        className: a,
        children: (0, K.jsxs)(`div`, {
            className: o,
            children: [p, m]
        })
    }), t[14] = p, t[15] = h);
    let g;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, K.jsx)(`div`, {
        className: `hidden h-17 sm:peer-has-[.persistent-page-header-upgrade-pill]:block md:bg-black/[0.024] md:dark:bg-white/[0.018]`
    }), t[16] = g) : g = t[16];
    let _;
    return t[17] === h ? _ = t[18] : (_ = (0, K.jsxs)(Te.Header, {
        children: [h, g]
    }), t[17] = h, t[18] = _), _
}
var Yt, K, Xt, Zt = e((() => {
    Yt = V(), jt(), ze(), ve(), rt(), St(), ue(), mt(), me(), bt(), _t(), T(), d(), U(), K = H(), Xt = ie({
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
    $t = V(), ke(), P(), Oe(), f(), w(), dt(), fe(), Me(), L(), en = t(z()), U(), q = H(), tn = [], nn = e => {
        "use forget";
        let t = (0, $t.c)(36),
            {
                app: r
            } = e,
            i = te(),
            a = g(),
            o = Be(),
            s = r?.id,
            c;
        t[0] !== s || t[1] !== o ? (c = s ? o.data?.get(s) ?? tn : tn, t[0] = s, t[1] = o, t[2] = c) : c = t[2];
        let l = c,
            u;
        t[3] === l ? u = t[4] : (u = l.filter(Qt), t[3] = l, t[4] = u);
        let d = u,
            f;
        t[5] === d ? f = t[6] : (f = ft(d), t[5] = d, t[6] = f);
        let p = f,
            m = p == null && d.length > 0,
            h = se(m ? s : void 0),
            [_, v] = (0, en.useState)(!1),
            y = h.data,
            b = !!(h.data?.id && m),
            x;
        t[7] === b ? x = t[8] : (x = {
            forceEnable: b
        }, t[7] = b, t[8] = x);
        let {
            actions: S,
            isLoading: C
        } = we(y, We.CONNECTOR_SETTING, x), w;
        bb0: {
            if (!h.data || !m) {
                w = void 0;
                break bb0
            }
            let e;
            if (t[9] !== S || t[10] !== h.data || t[11] !== d) {
                let r;
                t[13] !== S || t[14] !== h.data ? (r = e => n({
                    actions: S,
                    connector: h.data,
                    link: e
                }), t[13] = S, t[14] = h.data, t[15] = r) : r = t[15], e = d.find(r), t[9] = S, t[10] = h.data, t[11] = d, t[12] = e
            } else e = t[12];w = e
        }
        let T = p ?? w;
        if (!s || o.isLoading || m && (h.isLoading || C) || !T) return null;
        let E = p != null,
            D;
        t[16] !== s || t[17] !== i || t[18] !== a || t[19] !== T ? (D = async () => {
            v(!0);
            try {
                await Je({
                    connectorId: s,
                    linkId: T.id,
                    redirectAfter: window.location.pathname + window.location.search + window.location.hash
                })
            } catch (e) {
                let t = e;
                v(!1), a.danger(i.formatMessage(rn.reconnectError), {
                    error: t
                })
            }
        }, t[16] = s, t[17] = i, t[18] = a, t[19] = T, t[20] = D) : D = t[20];
        let O = D,
            A = E ? `border-token-border-status-warning bg-token-bg-status-warning text-token-text-status-warning flex items-start justify-between gap-3 rounded-md border p-3` : `border-token-border-default bg-token-bg-secondary text-token-text-primary flex items-start justify-between gap-3 rounded-md border p-3`,
            j = E ? `icon icon-sm mt-0.5 shrink-0` : `icon icon-sm text-token-icon-status-warning mt-0.5 shrink-0`,
            M;
        t[21] === j ? M = t[22] : (M = (0, q.jsx)(k, {
            "aria-hidden": `true`,
            className: j
        }), t[21] = j, t[22] = M);
        let N = E ? rn.reauthRequiredWarning : rn.scopeWarning,
            P;
        t[23] === N ? P = t[24] : (P = (0, q.jsx)(`div`, {
            className: `text-sm`,
            children: (0, q.jsx)(B, {
                ...N
            })
        }), t[23] = N, t[24] = P);
        let F;
        t[25] !== M || t[26] !== P ? (F = (0, q.jsxs)(`div`, {
            className: `flex min-w-0 flex-1 items-start gap-2 text-start`,
            children: [M, P]
        }), t[25] = M, t[26] = P, t[27] = F) : F = t[27];
        let I;
        t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, q.jsx)(B, {
            ...rn.reconnect
        }), t[28] = I) : I = t[28];
        let L;
        t[29] !== _ || t[30] !== O ? (L = (0, q.jsx)(ee, {
            size: `small`,
            color: `secondary`,
            className: `shrink-0`,
            onClick: O,
            loading: _,
            children: I
        }), t[29] = _, t[30] = O, t[31] = L) : L = t[31];
        let R;
        return t[32] !== F || t[33] !== L || t[34] !== A ? (R = (0, q.jsxs)(`div`, {
            className: A,
            children: [F, L]
        }), t[32] = F, t[33] = L, t[34] = A, t[35] = R) : R = t[35], R
    }, rn = ie({
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
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, cn.jsx)(ut, {
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
    sn = V(), ct(), cn = H()
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
    t[3] !== f || t[4] !== p ? (m = N(`text-token-text-secondary text-base leading-6 whitespace-pre-line sm:text-sm`, f, p), t[3] = f, t[4] = p, t[5] = m) : m = t[5];
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
                children: (0, J.jsx)(B, {
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
        children: (0, J.jsx)(B, {
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
            children: (0, J.jsx)(B, {
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
    hn = V(), Rt(), l(), d(), gn = t(z()), U(), R(), m(), ge(), Bt(), ln(), Pt(), J = H(), Y = ie({
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
        if (ce(t)) return typeof t.customer_support == `string` ? t.customer_support : void 0
    }, vn = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e), yn = e => {
        "use forget";
        let t = (0, hn.c)(7),
            n;
        if (t[0] === Symbol.for(`react.memo_cache_sentinel`)) {
            let e = r();
            n = e?.isProTier() || e?.isEnterprisey(), t[0] = n
        } else n = t[0];
        let i = n,
            a = te(),
            o;
        if (t[1] !== e.id || t[2] !== e.labels?.consequential || t[3] !== e.labels?.interactive || t[4] !== e.labels?.sync || t[5] !== a) {
            let n = new Set;
            (e.labels?.sync === `true` || I.has(e.id)) && i && (n.add(zt.FILE_SEARCH), n.add(zt.SYNC)), e.labels?.interactive === `true` && n.add(zt.INTERACTIVE), e.labels?.consequential === `true` && n.add(zt.WRITES), o = Array.from(n).map(e => It(e, a)), t[1] = e.id, t[2] = e.labels?.consequential, t[3] = e.labels?.interactive, t[4] = e.labels?.sync, t[5] = a, t[6] = o
        } else o = t[6];
        return o
    }, bn = e => {
        "use forget";
        let t = (0, hn.c)(44),
            n = te(),
            r = e.app_metadata?.categories ?? [],
            i = Lt(),
            [a] = ne(),
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
        [o] = ne(),
        s;
    t[0] === o ? s = t[1] : (s = o.get(`native_mobile_view`), t[0] = o, t[1] = s);
    let c = s === `true`,
        l;
    t[2] === n ? l = t[3] : (l = n ? he(n) : null, t[2] = n, t[3] = l);
    let u = l,
        d = !c && `-mt-14`,
        f;
    t[4] === d ? f = t[5] : (f = N(`relative hidden w-fit flex-shrink-0 sm:block`, d), t[4] = d, t[5] = f);
    let p;
    t[6] === n ? p = t[7] : (p = n ? (0, X.jsx)(Pe, {
        app: {
            name: n.name,
            logoUrl: n.logo_url ?? null,
            logoDarkUrl: n.logo_url_dark ?? null
        },
        size: `xlarge`
    }) : (0, X.jsx)(tt, {
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
        children: n ? (0, X.jsx)(Pe, {
            app: {
                name: n.name,
                logoUrl: n.logo_url ?? null,
                logoDarkUrl: n.logo_url_dark ?? null
            },
            size: `xxlarge`
        }) : (0, X.jsx)(tt, {
            className: `h-20 w-20 rounded-full`
        })
    }), t[11] = n, t[12] = h);
    let g;
    t[13] === n ? g = t[14] : (g = n ? n.name : (0, X.jsx)(`div`, {
        className: `w-56`,
        "aria-hidden": `true`,
        children: (0, X.jsx)(xe, {
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
        children: (0, X.jsx)(B, {
            id: `w+mmPI`,
            defaultMessage: `DEV`
        })
    }) : null, t[17] = n?.labels?.distribution, t[18] = v);
    let y;
    t[19] === n?.distribution_channel ? y = t[20] : (y = n?.distribution_channel === `TENANT_CATALOG` ? (0, X.jsx)(`span`, {
        className: `border-token-text-tertiary text-token-text-secondary dark:border-token-border-heavy dark:text-token-text-tertiary mt-[2px] items-center rounded-full border px-2 py-0.5 text-xs font-semibold uppercase select-none`,
        children: (0, X.jsx)(B, {
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
        children: (0, X.jsx)(xe, {
            size: `base`
        })
    }), t[25] = n, t[26] = u, t[27] = x) : x = t[27];
    let S = !c && `sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:self-start`,
        C;
    t[28] === S ? C = t[29] : (C = N(`flex pt-2 sm:pt-0`, S), t[28] = S, t[29] = C);
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
        Cn = V(), ke(), Re(), ue(), d(), U(), R(), qt(), Ke(), X = H()
    })),
    Tn, En, Z, Dn, On = e((() => {
        Tn = V(), Dt(), Zt(), an(), Ct(), xn(), ze(), ht(), Oe(), x(), b(), Me(), At(), En = t(z()), U(), R(), wn(), Z = H(), Dn = e => {
            "use forget";
            let t = (0, Tn.c)(49),
                {
                    app: n,
                    availability: r,
                    availabilityLoading: i,
                    availabilityError: a
                } = e,
                o = te(),
                s = ae(),
                l = le(),
                [u] = ne(),
                d;
            t[0] === u ? d = t[1] : (d = Ot(u), t[0] = u, t[1] = d);
            let f = d,
                p;
            t[2] === u ? p = t[3] : (p = u.get(`native_mobile_view`), t[2] = u, t[3] = p);
            let m = p === `true`,
                h;
            t[4] === u ? h = t[5] : (h = u.toString(), t[4] = u, t[5] = h);
            let g = h,
                _;
            t[6] !== g || t[7] !== s.state ? (_ = be(s.state) ?? `/apps${g?`?${g}`:``}`, t[6] = g, t[7] = s.state, t[8] = _) : _ = t[8];
            let v = _,
                y = m ? `div` : `main`,
                b = n ? `${s.pathname}${s.search}` : void 0,
                x;
            t[9] !== s.state || t[10] !== u ? (x = oe({
                state: s.state,
                searchParams: u
            }), t[9] = s.state, t[10] = u, t[11] = x) : x = t[11];
            let S = x,
                C;
            t[12] !== n || t[13] !== r?.canInstall || t[14] !== s.pathname ? (C = () => !!(n && r?.canInstall && !/\/connect\/?$/.test(s.pathname)), t[12] = n, t[13] = r?.canInstall, t[14] = s.pathname, t[15] = C) : C = t[15];
            let w;
            t[16] !== n || t[17] !== l || t[18] !== f || t[19] !== b || t[20] !== S ? (w = () => {
                if (!(!n || !b)) return E(gt, {
                    connectorId: n.id,
                    redirectAfter: b,
                    productSku: l ?? f ?? We.CONNECTOR_SETTING,
                    linkCreateProductSku: We.CONNECTOR_SETTING,
                    referrer: S,
                    postConnectExperienceSource: `plugin_install`
                }), !0
            }, t[16] = n, t[17] = l, t[18] = f, t[19] = b, t[20] = S, t[21] = w) : w = t[21];
            let T;
            t[22] !== b || t[23] !== C || t[24] !== w ? (T = {
                enabled: C,
                redirectUrl: b,
                restoreParentFlowOnResume: w
            }, t[22] = b, t[23] = C, t[24] = w, t[25] = T) : T = t[25], kt(T);
            let D;
            t[26] !== n || t[27] !== o ? (D = () => {
                if (!n?.name) return;
                let e = document.title,
                    t = o.formatMessage(c.title);
                return document.title = `ChatGPT - ${n.name}`, () => {
                    document.title = e || t
                }
            }, t[26] = n, t[27] = o, t[28] = D) : D = t[28];
            let O = n?.name,
                k;
            t[29] !== o || t[30] !== O ? (k = [O, o], t[29] = o, t[30] = O, t[31] = k) : k = t[31], (0, En.useEffect)(D, k);
            let A;
            t[32] !== n || t[33] !== v || t[34] !== m ? (A = !m && (0, Z.jsx)(Jt, {
                app: n,
                appsRoute: v
            }), t[32] = n, t[33] = v, t[34] = m, t[35] = A) : A = t[35];
            let j;
            t[36] !== n || t[37] !== r || t[38] !== a || t[39] !== i ? (j = (0, Z.jsx)(Sn, {
                app: n,
                availability: r,
                availabilityLoading: i,
                availabilityError: a
            }), t[36] = n, t[37] = r, t[38] = a, t[39] = i, t[40] = j) : j = t[40];
            let M;
            t[41] !== y || t[42] !== n || t[43] !== m ? (M = n ? (0, Z.jsxs)(y, {
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
            }) : null, t[41] = y, t[42] = n, t[43] = m, t[44] = M) : M = t[44];
            let N;
            return t[45] !== A || t[46] !== j || t[47] !== M ? (N = (0, Z.jsxs)(`div`, {
                className: `relative h-full overflow-y-auto pb-6`,
                children: [A, j, M]
            }), t[45] = A, t[46] = j, t[47] = M, t[48] = N) : N = t[48], N
        }
    })),
    kn, Q, An, jn, Mn, Nn = e((() => {
        kn = V(), ye(), jt(), Ue(), ze(), Ze(), rt(), U(), R(), Ke(), Q = H(), An = e => {
            "use forget";
            let t = (0, kn.c)(42),
                {
                    app: n,
                    useBadge: r,
                    badgeType: i
                } = e,
                a = r !== void 0 && r,
                o = te(),
                [s] = ne(),
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
            t[7] === n.displayName ? _ = t[8] : (_ = Xe(n.displayName), t[7] = n.displayName, t[8] = _);
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
                children: (0, Q.jsx)(Pe, {
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
            t[22] === f ? C = t[23] : (C = f ? (0, Q.jsx)(Ne, {}) : null, t[22] = f, t[23] = C);
            let w;
            t[24] === p ? w = t[25] : (w = p ? (0, Q.jsx)(Ye, {}) : null, t[24] = p, t[25] = w);
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
                children: (0, Q.jsx)(ot, {
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
                } = pe(n.id),
                a;
            return t[0] !== n || t[1] !== i || t[2] !== r ? (a = (0, Q.jsx)(An, {
                app: n,
                useBadge: r,
                badgeType: i
            }), t[0] = n, t[1] = i, t[2] = r, t[3] = a) : a = t[3], a
        }, Mn = ie({
            connectedAppLabel: {
                id: `EL7u7J`,
                defaultMessage: `{appName} Connected app`
            }
        })
    })),
    Pn, Fn, In, Ln = e((() => {
        Pn = V(), Re(), ue(), Fn = H(), In = () => {
            "use forget";
            let e = (0, Pn.c)(2),
                t;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Fn.jsx)(tt, {
                className: `bg-token-bg-elevated-primary h-10 w-10 rounded-full`
            }), e[0] = t) : t = e[0];
            let n;
            return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Fn.jsxs)(`div`, {
                className: `relative flex items-center gap-4 p-1.5 lg:p-3 @2xl/main:p-3`,
                children: [t, (0, Fn.jsx)(`div`, {
                    className: `flex h-full min-w-0 flex-1 flex-col justify-center gap-1`,
                    children: (0, Fn.jsx)(xe, {
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
        Bn = V(), Ie(), O(), U(), Nn(), Ln(), $ = H(), Vn = () => {}, Hn = 10, Un = e => {
            "use forget";
            let t = (0, Bn.c)(22),
                {
                    apps: n,
                    isLoading: r,
                    loadFailed: i,
                    hasNextPage: o,
                    isFetchingNextPage: s,
                    fetchNextPage: c,
                    showSpinner: l
                } = e,
                u = o !== void 0 && o,
                d = s !== void 0 && s,
                f = l !== void 0 && l,
                p;
            t[0] === r ? p = t[1] : (p = r && (0, $.jsx)(`div`, {
                className: `pb-10`,
                children: (0, $.jsx)(`div`, {
                    className: `grid grid-cols-1 gap-x-3 gap-y-3 lg:grid-cols-2 lg:gap-y-2 @2xl/main:grid-cols-2 @2xl/main:gap-y-2`,
                    children: Array.from({
                        length: Hn
                    }, Rn)
                })
            }), t[0] = r, t[1] = p);
            let m;
            t[2] !== r || t[3] !== i ? (m = !r && i && (0, $.jsx)(`div`, {
                className: `mt-4 flex items-center justify-center`,
                children: (0, $.jsx)(`p`, {
                    className: `text-token-text-tertiary text-sm font-medium`,
                    children: (0, $.jsx)(B, {
                        ...Wn.loadError
                    })
                })
            }), t[2] = r, t[3] = i, t[4] = m) : m = t[4];
            let h;
            t[5] !== n || t[6] !== r || t[7] !== i ? (h = !r && !i && n.length === 0 && (0, $.jsx)(`div`, {
                className: `mt-4 flex items-center justify-center`,
                children: (0, $.jsx)(`p`, {
                    className: `text-token-text-tertiary text-sm font-medium`,
                    children: (0, $.jsx)(B, {
                        ...Wn.noApps
                    })
                })
            }), t[5] = n, t[6] = r, t[7] = i, t[8] = h) : h = t[8];
            let g;
            t[9] !== n || t[10] !== c || t[11] !== u || t[12] !== d || t[13] !== r || t[14] !== i || t[15] !== f ? (g = !r && !i && n.length > 0 && (0, $.jsxs)(`div`, {
                className: `pb-10`,
                children: [(0, $.jsx)(`div`, {
                    className: `grid grid-cols-1 gap-x-3 gap-y-3 lg:grid-cols-2 lg:gap-y-2 @2xl/main:grid-cols-2 @2xl/main:gap-y-2`,
                    children: n.map(zn)
                }), f && (0, $.jsx)(`div`, {
                    className: `text-token-text-tertiary mt-3 flex items-center justify-center`,
                    children: (0, $.jsx)(a, {
                        className: `icon`
                    })
                }), (u || d) && (0, $.jsx)(et, {
                    bgColor: `bg-token-bg-primary dark:bg-token-bg-secondary-surface`,
                    hasNextPage: u,
                    isFetchingNextPage: d,
                    fetchNextPage: c ?? Vn
                })]
            }), t[9] = n, t[10] = c, t[11] = u, t[12] = d, t[13] = r, t[14] = i, t[15] = f, t[16] = g) : g = t[16];
            let _;
            return t[17] !== p || t[18] !== m || t[19] !== h || t[20] !== g ? (_ = (0, $.jsxs)(`section`, {
                className: `mt-3`,
                children: [p, m, h, g]
            }), t[17] = p, t[18] = m, t[19] = h, t[20] = g, t[21] = _) : _ = t[21], _
        }, Wn = ie({
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
        qt(), On(), wn(), Ke(), Nn(), Gn()
    }));
export {
    On as a, Dn as i, Un as n, Gn as r, Kn as t
};
//# sourceMappingURL=7b12be43-nxxfwug945zbj421.js.map