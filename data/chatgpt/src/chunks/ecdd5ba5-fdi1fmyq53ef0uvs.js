import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    $m as r,
    A8 as i,
    At as a,
    Da as o,
    Hx as s,
    J5 as c,
    Lw as l,
    QJ as u,
    Qm as d,
    Rw as f,
    Vx as p,
    ap as m,
    bF as h,
    cn as g,
    eE as _,
    eY as ee,
    grt as te,
    hrt as v,
    ip as y,
    ka as b,
    l7 as x,
    u7 as S,
    urt as C,
    vF as ne,
    y5 as re
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as w,
    Ln as T,
    Nn as E,
    Rn as D,
    Vn as O,
    wn as ie,
    zn as ae
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $ut as oe,
    BIn as k,
    Clt as A,
    D3 as j,
    Gjn as se,
    I3 as M,
    Ift as N,
    Jkn as ce,
    Kjn as le,
    L3 as ue,
    LIn as de,
    Lft as fe,
    Lgt as pe,
    MIn as me,
    N3 as he,
    Qjn as ge,
    Rgt as _e,
    Smt as ve,
    Stn as ye,
    Tlt as P,
    Vft as be,
    WIn as xe,
    Xkn as Se,
    Ykn as F,
    _lt as Ce,
    bLn as we,
    blt as Te,
    bmt as Ee,
    bpt as De,
    btn as Oe,
    dmt as ke,
    eLn as Ae,
    edt as je,
    fmt as I,
    gmt as Me,
    iSn as L,
    npt as R,
    oSn as Ne,
    pmt as Pe,
    qjn as Fe,
    rpt as Ie,
    spt as Le,
    tLn as z,
    vmt as Re,
    w3 as ze,
    wlt as B,
    xlt as Be,
    xmt as Ve,
    yLn as V,
    ymt as He,
    ypt as Ue,
    zIn as We
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    CC as Ge,
    Ch as Ke,
    SC as qe,
    Sh as Je
} from "./30901919-lc79rizhhepnsl3q.js";
import {
    $r as Ye,
    Wr as Xe,
    ei as Ze
} from "./c2675c8c-f8x469cgefxzeo6l.js";
import {
    A as Qe,
    C as $e,
    F as et,
    I as tt,
    L as nt,
    M as rt,
    N as it,
    O as at,
    P as ot,
    _ as st,
    a as ct,
    b as lt,
    c as ut,
    d as dt,
    f as ft,
    h as pt,
    i as mt,
    j as ht,
    l as gt,
    m as _t,
    n as vt,
    o as yt,
    p as bt,
    t as xt,
    u as St,
    v as Ct,
    y as wt
} from "./2b67bcd8-k8i7gfc1u8fxdrrt.js";
import {
    i as Tt,
    n as Et
} from "./2da3878c-khqaiao0kxeiu2qq.js";
import {
    r as Dt,
    t as Ot
} from "./58ee18a8-o6pdippxyr5y4c66.js";
import {
    c as H,
    d as kt,
    g as At,
    l as U,
    m as W,
    n as jt,
    t as G,
    u as Mt
} from "./1362c49f-dckybggygoasocdf.js";
import {
    a as Nt,
    c as Pt,
    i as Ft,
    l as It,
    n as Lt,
    o as K,
    r as Rt,
    s as zt,
    t as Bt,
    u as Vt
} from "./f4222f0c-i37yebr6rwngl2ng.js";

function Ht(e) {
    "use forget";
    let t = (0, Wt.c)(80),
        {
            images: n,
            initialIndex: r,
            activeIndex: i,
            paginationStatus: a,
            onInteraction: o,
            className: s,
            aspect: c,
            objectPosition: u,
            showDots: d,
            showArrows: f,
            imageClassName: p,
            allowLoop: m,
            onClick: h,
            onArrowClick: g,
            onActiveIndexChange: _
        } = e,
        ee = r === void 0 ? 0 : r,
        te = s === void 0 ? `` : s,
        v = c === void 0 ? `aspect-[16/9]` : c,
        y = u === void 0 ? `object-cover` : u,
        b = d === void 0 || d,
        x = f === void 0 || f,
        S = p === void 0 ? `` : p,
        C = m === void 0 || m,
        [ne, re] = (0, q.useState)(ee),
        w = i ?? ne,
        T;
    t[0] !== i || t[1] !== _ ? (T = e => {
        i == null ? re(e) : _?.(e)
    }, t[0] = i, t[1] = _, t[2] = T) : T = t[2];
    let E = T,
        D = (0, q.useEffectEvent)(E),
        [O, ie] = (0, q.useState)(!1),
        [oe, k] = (0, q.useState)(!1),
        A = (0, q.useRef)(null),
        j = ae(),
        se;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (se = {
        active: !1,
        startX: 0,
        lastX: 0,
        dx: 0,
        width: 1,
        lastTime: 0,
        velocity: 0,
        captured: !1,
        programmaticTargetIndex: null
    }, t[3] = se) : se = t[3];
    let M = (0, q.useRef)(se),
        N = n.length,
        ce = n[w]?.src,
        le;
    t[4] === i ? le = t[5] : (le = () => {
        if (i == null) return;
        let e = A.current;
        e && (M.current.programmaticTargetIndex === i || Math.round(e.scrollLeft / (e.clientWidth || 1)) === i || (M.current.programmaticTargetIndex = i, e.scrollTo({
            left: i * e.clientWidth,
            behavior: `instant`
        })))
    }, t[4] = i, t[5] = le);
    let ue;
    t[6] !== ce || t[7] !== i ? (ue = [i, ce], t[6] = ce, t[7] = i, t[8] = ue) : ue = t[8], (0, q.useEffect)(le, ue);
    let de;
    t[9] !== C || t[10] !== E || t[11] !== N ? (de = (e, t) => {
        let n = t === void 0 ? `smooth` : t,
            r = A.current;
        if (!r) return;
        let i = C ? Kt(e, 0, N - 1) : Gt(e, 0, N - 1),
            a = M.current.width || r.clientWidth || 1;
        M.current.programmaticTargetIndex = i, r.scrollTo({
            left: i * a,
            behavior: n
        }), E(i)
    }, t[9] = C, t[10] = E, t[11] = N, t[12] = de) : de = t[12];
    let fe = de,
        pe, me;
    t[13] === x ? (pe = t[14], me = t[15]) : (pe = () => {
        if (!x) return;
        k(!0);
        let e = window.setTimeout(() => k(!1), 2e3);
        return () => window.clearTimeout(e)
    }, me = [x], t[13] = x, t[14] = pe, t[15] = me), (0, q.useEffect)(pe, me);
    let he = O,
        ge = O || oe,
        _e;
    t[16] !== C || t[17] !== N ? (_e = e => C ? Kt(e, 0, N - 1) : Gt(e, 0, N - 1), t[16] = C, t[17] = N, t[18] = _e) : _e = t[18];
    let ve = _e,
        ye;
    t[19] !== o || t[20] !== fe ? (ye = e => {
        o?.(), fe(e, `smooth`)
    }, t[19] = o, t[20] = fe, t[21] = ye) : ye = t[21];
    let P = ye,
        be;
    t[22] !== P || t[23] !== w || t[24] !== g || t[25] !== ve || t[26] !== N ? (be = e => {
        if (N <= 1) return;
        let t = ve(e === `next` ? w + 1 : w - 1);
        t !== w && g?.(e, t), P(t)
    }, t[22] = P, t[23] = w, t[24] = g, t[25] = ve, t[26] = N, t[27] = be) : be = t[27];
    let xe = be,
        Se, F;
    t[28] !== i || t[29] !== w || t[30] !== _ ? (Se = () => {
        i ?? _?.(w)
    }, F = [i, w, _], t[28] = i, t[29] = w, t[30] = _, t[31] = Se, t[32] = F) : (Se = t[31], F = t[32]), (0, q.useEffect)(Se, F);
    let Ce, we;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (Ce = () => {
        let e = A.current;
        if (!e) return;
        let t = new ResizeObserver(t => {
            for (let n of t) M.current.width = n.contentRect.width || e.clientWidth || 1
        });
        return t.observe(e), M.current.width = e.clientWidth || 1, () => t.disconnect()
    }, we = [], t[33] = Ce, t[34] = we) : (Ce = t[33], we = t[34]), (0, q.useEffect)(Ce, we);
    let Te;
    t[35] !== w || t[36] !== D || t[37] !== N ? (Te = () => {
        let e = A.current;
        if (!e) return;
        let t = () => {
            let t = M.current.width || e.clientWidth || 1,
                n = e.scrollLeft || 0,
                r = n / t,
                i = M.current.programmaticTargetIndex;
            if (i != null) {
                let e = i * t;
                Math.abs(n - e) <= 2 && (M.current.programmaticTargetIndex = null);
                return
            }
            let a = w;
            r > w + .5 ? a = Gt(w + 1, 0, N - 1) : r < w - .5 && (a = Gt(w - 1, 0, N - 1)), a !== w && D(a)
        };
        return e.addEventListener(`scroll`, t, {
            passive: !0
        }), () => e.removeEventListener(`scroll`, t)
    }, t[35] = w, t[36] = D, t[37] = N, t[38] = Te) : Te = t[38];
    let Ee;
    t[39] !== w || t[40] !== N ? (Ee = [N, w], t[39] = w, t[40] = N, t[41] = Ee) : Ee = t[41], (0, q.useEffect)(Te, Ee);
    let De = `select-none ${te} relative`,
        Oe, ke;
    t[42] === Symbol.for(`react.memo_cache_sentinel`) ? (Oe = () => ie(!0), ke = () => ie(!1), t[42] = Oe, t[43] = ke) : (Oe = t[42], ke = t[43]);
    let Ae = `relative w-full ${v} overflow-clip`,
        je;
    if (t[44] !== S || t[45] !== n || t[46] !== j || t[47] !== y || t[48] !== h) {
        let e;
        t[50] !== S || t[51] !== j || t[52] !== y || t[53] !== h ? (e = (e, t) => (0, J.jsx)(`div`, {
            onClick: () => h?.(e, t),
            role: h ? `button` : void 0,
            tabIndex: h ? 0 : void 0,
            onKeyDown: n => {
                h && (n.key === `Enter` || n.key === ` `) && (n.preventDefault(), h(e, t))
            },
            className: `relative h-full w-full shrink-0 grow-0 basis-full snap-center`,
            children: e.content ? e.content : (0, J.jsx)(`img`, {
                src: e.src,
                alt: e.alt ?? j.formatMessage({
                    id: `wHCsqa`,
                    defaultMessage: `Slide {index}`
                }, {
                    index: t + 1
                }),
                className: `h-full w-full ${y} ${S}`
            })
        }, e.src), t[50] = S, t[51] = j, t[52] = y, t[53] = h, t[54] = e) : e = t[54], je = n.map(e), t[44] = S, t[45] = n, t[46] = j, t[47] = y, t[48] = h, t[49] = je
    } else je = t[49];
    let I;
    t[55] !== o || t[56] !== je ? (I = (0, J.jsx)(`div`, {
        ref: A,
        onScroll: o,
        className: `no-scrollbar flex h-full w-full touch-pan-x touch-pan-y snap-x snap-mandatory overflow-x-scroll scroll-smooth`,
        children: je
    }), t[55] = o, t[56] = je, t[57] = I) : I = t[57];
    let Me;
    t[58] !== xe || t[59] !== n.length || t[60] !== j || t[61] !== he || t[62] !== ge || t[63] !== x ? (Me = x && n.length > 1 && (0, J.jsxs)(J.Fragment, {
        children: [(0, J.jsx)(Ut, {
            ariaLabel: j.formatMessage({
                id: `l9pylv`,
                defaultMessage: `Previous slide`
            }),
            onClick: () => xe(`previous`),
            side: `start`,
            visible: he,
            children: (0, J.jsx)(l, {
                className: `icon-md`
            })
        }), (0, J.jsx)(Ut, {
            ariaLabel: j.formatMessage({
                id: `L0pbQh`,
                defaultMessage: `Next slide`
            }),
            onClick: () => xe(`next`),
            side: `end`,
            visible: ge,
            children: (0, J.jsx)(qe, {
                className: `icon-md`
            })
        })]
    }), t[58] = xe, t[59] = n.length, t[60] = j, t[61] = he, t[62] = ge, t[63] = x, t[64] = Me) : Me = t[64];
    let L;
    t[65] !== Ae || t[66] !== I || t[67] !== Me ? (L = (0, J.jsxs)(`div`, {
        className: Ae,
        children: [I, Me]
    }), t[65] = Ae, t[66] = I, t[67] = Me, t[68] = L) : L = t[68];
    let R;
    t[69] !== P || t[70] !== n || t[71] !== w || t[72] !== j || t[73] !== a || t[74] !== b ? (R = a == null ? b && n.length > 1 && n.length <= 20 && (0, J.jsx)(`div`, {
        className: `absolute start-0 end-0 bottom-3 flex items-center justify-center`,
        children: (0, J.jsx)(`div`, {
            className: `flex w-fit items-center justify-center gap-2 rounded-full bg-[#0D0D0D66] bg-clip-padding p-1 backdrop-blur`,
            children: n.map((e, t) => (0, J.jsx)(`button`, {
                type: `button`,
                onClick: () => P(t),
                "aria-label": j.formatMessage({
                    id: `PUV+4+`,
                    defaultMessage: `Go to slide {index}`
                }, {
                    index: t + 1
                }),
                className: `h-1.5 w-1.5 rounded-full transition-opacity ${t===w?`bg-white`:`bg-gray-400 opacity-60`}`
            }, t))
        })
    }) : (0, J.jsx)(`div`, {
        className: `pointer-events-none absolute start-0 end-0 bottom-3 flex justify-center`,
        children: a
    }), t[69] = P, t[70] = n, t[71] = w, t[72] = j, t[73] = a, t[74] = b, t[75] = R) : R = t[75];
    let Ne;
    return t[76] !== De || t[77] !== L || t[78] !== R ? (Ne = (0, J.jsxs)(`div`, {
        className: De,
        "aria-roledescription": `carousel`,
        onMouseEnter: Oe,
        onMouseLeave: ke,
        children: [L, R]
    }), t[76] = De, t[77] = L, t[78] = R, t[79] = Ne) : Ne = t[79], Ne
}

function Ut(e) {
    "use forget";
    let t = (0, Wt.c)(8),
        {
            ariaLabel: n,
            onClick: r,
            side: i,
            visible: a,
            children: o
        } = e,
        s = i === `start` ? `start-3` : `end-3`,
        c = a ? `opacity-90 pointer-events-auto` : `opacity-0 pointer-events-none`,
        l;
    t[0] !== s || t[1] !== c ? (l = x(`btn-secondary border-token-border-default active:bg-token-bg-tertiary hover:bg-token-bg-primary absolute top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-clip-padding backdrop-blur transition-opacity duration-300 hover:shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)] active:opacity-100!`, c, s), t[0] = s, t[1] = c, t[2] = l) : l = t[2];
    let u;
    return t[3] !== n || t[4] !== o || t[5] !== r || t[6] !== l ? (u = (0, J.jsx)(`button`, {
        "aria-label": n,
        onClick: r,
        className: l,
        children: o
    }), t[3] = n, t[4] = o, t[5] = r, t[6] = l, t[7] = u) : u = t[7], u
}
var Wt, q, J, Gt, Kt, qt = e((() => {
        Wt = ie(), f(), Ge(), S(), q = t(O()), D(), J = w(), Gt = (e, t, n) => Math.min(Math.max(e, t), n), Kt = (e, t, n) => e > n ? t : e < t ? n : e
    })),
    Jt, Yt, Xt, Zt = e((() => {
        Jt = `Z_5WHq_generationStatus`, Yt = `Z_5WHq_generationStatusShimmer`, Xt = {
            generationStatus: Jt,
            generationStatusShimmer: Yt
        }
    }));

function Qt(e) {
    "use forget";
    let t = (0, $t.c)(44),
        {
            aspect: n,
            imageUrls: r,
            generatedImageUrls: i,
            isGenerating: a,
            renderImage: o,
            onArrowClick: s,
            onClick: c,
            onGeneratedImageViewed: l
        } = e,
        u = n === void 0 ? `aspect-square` : n,
        d = i[0],
        f;
    t[0] !== r[0] || t[1] !== d ? (f = {
        url: r[0],
        latestGeneratedImage: d
    }, t[0] = r[0], t[1] = d, t[2] = f) : f = t[2];
    let [p, m] = (0, en.useState)(f), h;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (h = [], t[3] = h) : h = t[3];
    let [g, _] = (0, en.useState)(h), [ee, te] = (0, en.useState)(!1), v = (0, en.useRef)(null), y;
    t[4] !== r || t[5] !== p.url ? (y = r.indexOf(p.url), t[4] = r, t[5] = p.url, t[6] = y) : y = t[6];
    let b = Math.max(0, y),
        x = r[b],
        S;
    t[7] !== x || t[8] !== i || t[9] !== g ? (S = i.includes(x) && g.includes(x), t[7] = x, t[8] = i, t[9] = g, t[10] = S) : S = t[10];
    let C = S,
        ne = (0, en.useEffectEvent)(l),
        re;
    t[11] !== b || t[12] !== C || t[13] !== ne ? (re = () => {
        C && ne(b)
    }, t[11] = b, t[12] = C, t[13] = ne, t[14] = re) : re = t[14];
    let w;
    t[15] !== x || t[16] !== b || t[17] !== C ? (w = [x, b, C], t[15] = x, t[16] = b, t[17] = C, t[18] = w) : w = t[18], (0, en.useEffect)(re, w);
    let T, D;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (T = () => () => {
        v.current != null && clearTimeout(v.current)
    }, D = [], t[19] = T, t[20] = D) : (T = t[19], D = t[20]), (0, en.useEffect)(T, D);
    let O;
    t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (O = () => {
        te(!0), v.current != null && clearTimeout(v.current), v.current = setTimeout(() => te(!1), 800)
    }, t[21] = O) : O = t[21];
    let ie = O,
        ae;
    if (t[22] !== r || t[23] !== d || t[24] !== o) {
        let e;
        t[26] !== d || t[27] !== o ? (e = e => ({
            src: e,
            content: o(e, () => {
                _(t => t.includes(e) ? t : [...t, e]), e === d && m(t => t.latestGeneratedImage === e ? t : {
                    url: e,
                    latestGeneratedImage: e
                })
            })
        }), t[26] = d, t[27] = o, t[28] = e) : e = t[28], ae = r.map(e), t[22] = r, t[23] = d, t[24] = o, t[25] = ae
    } else ae = t[25];
    let oe;
    t[29] === r ? oe = t[30] : (oe = e => {
        let t = r[e];
        m(e => e.url === t ? e : {
            ...e,
            url: t
        })
    }, t[29] = r, t[30] = oe);
    let k;
    t[31] !== a || t[32] !== ee ? (k = a && !ee ? (0, tn.jsx)(`span`, {
        role: `status`,
        className: `rounded-full bg-black/25 px-3 py-2.5 text-xs font-medium text-white backdrop-blur-md`,
        children: (0, tn.jsx)(`span`, {
            className: Xt.generationStatus,
            children: (0, tn.jsx)(E, {
                id: `chatgpt.shopping.virtual_try_on.product_detail.generation.status`,
                defaultMessage: `Generating try-on`
            })
        })
    }) : void 0, t[31] = a, t[32] = ee, t[33] = k) : k = t[33];
    let A;
    t[34] === c ? A = t[35] : (A = (e, t) => c(e.src, t), t[34] = c, t[35] = A);
    let j;
    return t[36] !== u || t[37] !== b || t[38] !== s || t[39] !== ae || t[40] !== oe || t[41] !== k || t[42] !== A ? (j = (0, tn.jsx)(Ht, {
        activeIndex: b,
        images: ae,
        aspect: u,
        onActiveIndexChange: oe,
        onInteraction: ie,
        paginationStatus: k,
        onArrowClick: s,
        onClick: A
    }), t[36] = u, t[37] = b, t[38] = s, t[39] = ae, t[40] = oe, t[41] = k, t[42] = A, t[43] = j) : j = t[43], j
}
var $t, en, tn, nn = e((() => {
    $t = ie(), qt(), en = t(O()), D(), Zt(), tn = w()
}));

function rn() {
    "use forget";
    let e = (0, ln.c)(25),
        t = h(),
        n;
    e[0] === t ? n = e[1] : (n = () => t ? Ct(t) : [], e[0] = t, e[1] = n);
    let r = c(n),
        i;
    e[2] === t ? i = e[3] : (i = () => t ? mt(t) : {
        messageId: void 0,
        clientThreadId: void 0
    }, e[2] = t, e[3] = i);
    let {
        messageId: a,
        clientThreadId: o
    } = c(i), s;
    e[4] === t ? s = e[5] : (s = () => t ? M(t).rootMessageId$() != null : !1, e[4] = t, e[5] = s);
    let l = c(s),
        u;
    e[6] === Symbol.for(`react.memo_cache_sentinel`) ? (u = H(), e[6] = u) : u = e[6];
    let d = u;
    if (!t || !a || r.length === 0) return null;
    let f;
    e[7] !== t || e[8] !== l || e[9] !== a ? (f = (0, Y.jsx)(`h3`, {
        className: `mb-4`,
        children: d && !l ? (0, Y.jsxs)(`button`, {
            type: `button`,
            className: `text-token-text-primary text-heading-3 flex w-fit items-center text-start font-medium`,
            onClick: () => an(t, a),
            children: [(0, Y.jsx)(`span`, {
                children: (0, Y.jsx)(E, {
                    ...un.exploreMoreTitle
                })
            }), (0, Y.jsx)(p.ChevronRight, {
                "aria-hidden": `true`,
                className: `icon ms-1 shrink-0`
            })]
        }) : (0, Y.jsx)(`span`, {
            className: `text-token-text-primary text-heading-3 font-medium`,
            children: (0, Y.jsx)(E, {
                ...un.exploreMoreTitle
            })
        })
    }), e[7] = t, e[8] = l, e[9] = a, e[10] = f) : f = e[10];
    let m;
    if (e[11] !== o || e[12] !== t || e[13] !== a || e[14] !== r) {
        let n;
        e[16] !== o || e[17] !== t || e[18] !== a ? (n = (e, n) => (0, Y.jsxs)(`div`, {
            className: `group group/product-card relative min-w-0 self-start`,
            children: [(0, Y.jsx)(`button`, {
                type: `button`,
                className: `block w-full text-start`,
                onClick: r => on(t, a, e, n, {
                    isImageClick: B(r.target)
                }),
                children: (0, Y.jsx)(cn, {
                    product: e
                })
            }), (0, Y.jsx)(G, {
                product: e,
                clientThreadId: o,
                messageId: a
            })]
        }, e.id), e[16] = o, e[17] = t, e[18] = a, e[19] = n) : n = e[19], m = r.map(n), e[11] = o, e[12] = t, e[13] = a, e[14] = r, e[15] = m
    } else m = e[15];
    let g;
    e[20] === m ? g = e[21] : (g = (0, Y.jsx)(`div`, {
        className: `grid grid-cols-2 items-start gap-x-2 gap-y-4`,
        children: m
    }), e[20] = m, e[21] = g);
    let _;
    return e[22] !== f || e[23] !== g ? (_ = (0, Y.jsx)(`div`, {
        className: `mt-2 px-5`,
        children: (0, Y.jsxs)(`div`, {
            className: `border-token-border-light border-t pt-6`,
            children: [f, g]
        })
    }), e[22] = f, e[23] = g, e[24] = _) : _ = e[24], _
}

function an(e, t) {
    if (!H()) return;
    let n = mt(e).turnIndex;
    M(e).open$({
        rootMessageId: t,
        originTurnIndex: n ?? 0
    })
}

function on(e, t, n, r, i) {
    sn(e, t, n);
    let a = mt(e);
    if (Be(n, {
            clientThreadId: a.clientThreadId,
            messageId: t,
            contentReferenceStartIndex: 0,
            contentReferenceType: R.Products,
            sectionLocation: `sidebar`,
            isGenui: a.isGenui
        }, {
            isImageClick: i?.isImageClick === !0
        })) return;
    let o = {
            type: `product_agent`,
            messageId: t,
            product: n,
            contentReferenceStartIndex: 0,
            productIndex: r,
            interactionSource: `browse`
        },
        s = y(),
        c = d(),
        l = c ? s.rooms$().get(c) : null;
    if (l != null && s.hasAccess) {
        s.openThreadSidebar$(l, o);
        return
    }
    k(e, o)
}

function sn(e, t, n) {
    let r = mt(e),
        i = xe(e),
        a = lt(e),
        o = We(i, `product`) || We(i, `product_agent`) ? i.contentReferenceStartIndex : void 0;
    fe({
        clientThreadId: r.clientThreadId,
        messageId: t,
        turnIndex: r.turnIndex,
        contentReferenceStartIndex: o,
        surfaceLocation: se.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
        entityAffordance: le.CHATGPT_ENTITY_AFFORDANCE_PRODUCT_CARD,
        entityId: be(n, t, o),
        entityCategory: `product`,
        contentReferenceType: `product_entity`,
        isGenui: r.isGenui,
        parentContext: a ? {
            entityId: be(a, t, o),
            entityCategory: `product`,
            contentReferenceStartIndex: o,
            messageId: t
        } : void 0
    })
}

function cn(e) {
    "use forget";
    let t = (0, ln.c)(16),
        {
            product: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = v(`2128165686`).get(`image_fit`, ``), t[0] = r) : r = t[0];
    let i = r,
        a = i === `contain_all` || i === `product_card` ? i : `default`,
        o = n.image_urls?.[0],
        s = n.offers?.[0]?.price,
        c;
    t[1] !== o || t[2] !== n ? (c = o ? (0, Y.jsx)(He, {
        src: o,
        assetPointerDimensions: ke(n, o),
        fitStrategy: a,
        alt: n.title,
        className: `absolute inset-0 m-0 block h-full w-full transition-transform duration-200 group-hover:scale-[1.02]`
    }, o) : null, t[1] = o, t[2] = n, t[3] = c) : c = t[3];
    let l;
    t[4] === c ? l = t[5] : (l = (0, Y.jsx)(`div`, {
        className: `bg-tertiary relative aspect-square w-full overflow-hidden rounded-2xl`,
        ...P,
        children: c
    }), t[4] = c, t[5] = l);
    let u;
    t[6] === n.title ? u = t[7] : (u = (0, Y.jsx)(`div`, {
        className: `text-token-text-primary line-clamp-2 text-sm leading-5 font-medium`,
        children: n.title
    }), t[6] = n.title, t[7] = u);
    let d;
    t[8] === s ? d = t[9] : (d = s ? (0, Y.jsx)(`div`, {
        className: `text-token-text-secondary text-sm leading-5`,
        children: s
    }) : null, t[8] = s, t[9] = d);
    let f;
    t[10] !== u || t[11] !== d ? (f = (0, Y.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-1`,
        children: [u, d]
    }), t[10] = u, t[11] = d, t[12] = f) : f = t[12];
    let p;
    return t[13] !== l || t[14] !== f ? (p = (0, Y.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-2`,
        children: [l, f]
    }), t[13] = l, t[14] = f, t[15] = p) : p = t[15], p
}
var ln, Y, un, dn = e((() => {
    ln = ie(), N(), Ie(), r(), m(), ne(), s(), de(), A(), Te(), I(), $e(), ue(), U(), jt(), i(), te(), ge(), D(), Ee(), Y = w(), un = T({
        exploreMoreTitle: {
            id: `chatgpt.search.product_details.explore_more.section_title`,
            defaultMessage: `Explore more`
        }
    })
}));

function fn(e) {
    "use forget";
    let t = (0, pn.c)(17),
        {
            isModal: r,
            product: i,
            conversation: a,
            messageId: o,
            contentReferenceStartIndex: s,
            turnIndex: c,
            productIndex: l,
            onFollowUp: u
        } = e,
        d = ae(),
        f;
    t[0] === d ? f = t[1] : (f = d.formatMessage({
        id: `products.detailsFollowUpButton.label`,
        defaultMessage: `Follow up`
    }), t[0] = d, t[1] = f);
    let p = f,
        m;
    t[2] !== s || t[3] !== a || t[4] !== r || t[5] !== o || t[6] !== u || t[7] !== i || t[8] !== l || t[9] !== c ? (m = () => {
        r && me(a), j(a, i, {
            messageId: o,
            turnIndex: c,
            contentReferenceStartIndex: s,
            productIndex: l,
            contentReferenceType: R.ProductEntity
        }, Se.CHATGPT_PRODUCT_FOLLOW_UP_INTERACTION_SURFACE_FOLLOW_UP_BUTTON), u?.()
    }, t[2] = s, t[3] = a, t[4] = r, t[5] = o, t[6] = u, t[7] = i, t[8] = l, t[9] = c, t[10] = m) : m = t[10];
    let h;
    t[11] === p ? h = t[12] : (h = (0, mn.jsx)(`span`, {
        className: `flex items-center select-none`,
        children: p
    }), t[11] = p, t[12] = h);
    let g;
    return t[13] !== p || t[14] !== m || t[15] !== h ? (g = (0, mn.jsx)(`div`, {
        id: `product-details-follow-up-button`,
        className: `fixed end-7 bottom-10 z-[50] md:bottom-8`,
        children: (0, mn.jsx)(n, {
            size: `large`,
            color: `primary`,
            icon: Je,
            label: p,
            contentWrapperClassName: `gap-2`,
            className: `corner-superellipse/1.1 shadow-short h-12 cursor-pointer overflow-clip rounded-[28px] border-none px-6 py-7 font-medium active:opacity-100!`,
            onClick: m,
            children: h
        })
    }), t[13] = p, t[14] = m, t[15] = h, t[16] = g) : g = t[16], g
}
var pn, mn, hn = e((() => {
    pn = ie(), Ie(), he(), _(), Ke(), de(), ze(), D(), mn = w()
}));

function gn(e) {
    "use forget";
    let t = (0, _n.c)(4),
        {
            priceHistory: n
        } = e,
        r = n.typical_low_price === n.typical_high_price,
        i;
    return t[0] !== r || t[1] !== n.typical_high_price || t[2] !== n.typical_low_price ? (i = (0, X.jsx)(`section`, {
        className: `mt-4 px-6`,
        children: (0, X.jsx)(`div`, {
            className: `border-token-border-light border-t pt-4`,
            children: (0, X.jsx)(`div`, {
                className: `text-token-text-primary text-sm font-medium`,
                children: r ? (0, X.jsx)(E, {
                    id: `chatgpt.search.product_details.price_history.typical_single`,
                    defaultMessage: `Typically {price}`,
                    values: {
                        price: n.typical_low_price
                    }
                }) : (0, X.jsx)(E, {
                    id: `chatgpt.search.product_details.price_history.typical_range`,
                    defaultMessage: `Typically {lowPrice} - {highPrice}`,
                    values: {
                        lowPrice: n.typical_low_price,
                        highPrice: n.typical_high_price
                    }
                })
            })
        })
    }), t[0] = r, t[1] = n.typical_high_price, t[2] = n.typical_low_price, t[3] = i) : i = t[3], i
}
var _n, X, vn = e((() => {
    _n = ie(), D(), X = w()
}));

function yn(e) {
    return (Array.isArray(e) ? e.flatMap(e => bn(e) ? [
        [e.name ?? e.label ?? e.key, e.value]
    ] : []) : Object.entries(e ?? {})).flatMap(([e, t]) => {
        if (typeof e != `string` || t == null) return [];
        let n = typeof t == `string` ? t : JSON.stringify(t);
        return n == null ? [] : [
            [e, n]
        ]
    })
}

function bn(e) {
    return typeof e == `object` && !!e && !Array.isArray(e)
}

function xn(e, t) {
    let [n, r] = e;
    return (0, Z.jsxs)(`div`, {
        className: `flex justify-between gap-4 text-sm`,
        children: [(0, Z.jsx)(`dt`, {
            className: `text-token-text-secondary`,
            children: n
        }), (0, Z.jsx)(`dd`, {
            className: `text-token-text-primary text-end`,
            children: r
        })]
    }, `${n}-${t}`)
}
var Sn, Z, Cn, wn = e((() => {
    Sn = ie(), D(), Pt(), Z = w(), Cn = e => {
        "use forget";
        let t = (0, Sn.c)(12),
            {
                product: n
            } = e,
            r, i, a, o;
        if (t[0] !== n.attributes || t[1] !== n.description) {
            o = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = yn(n.attributes);
                if (!n.description && e.length === 0) {
                    o = null;
                    break bb0
                }
                r = `flex flex-col bg-inherit`,
                t[6] === n.description ? i = t[7] : (i = n.description && (0, Z.jsx)(zt, {
                    stickyHeader: !1,
                    title: (0, Z.jsx)(E, {
                        id: `chatgpt.search.product_details.source_catalog.overview.section_title`,
                        defaultMessage: `Overview`
                    }),
                    children: (0, Z.jsx)(`p`, {
                        className: `text-token-text-primary text-sm whitespace-pre-wrap`,
                        children: n.description
                    })
                }), t[6] = n.description, t[7] = i),
                a = e.length > 0 && (0, Z.jsx)(zt, {
                    stickyHeader: !1,
                    title: (0, Z.jsx)(E, {
                        id: `chatgpt.search.product_details.source_catalog.attributes.section_title`,
                        defaultMessage: `Details`
                    }),
                    children: (0, Z.jsx)(`dl`, {
                        className: `flex flex-col gap-3`,
                        children: e.map(xn)
                    })
                })
            }
            t[0] = n.attributes, t[1] = n.description, t[2] = r, t[3] = i, t[4] = a, t[5] = o
        } else r = t[2], i = t[3], a = t[4], o = t[5];
        if (o !== Symbol.for(`react.early_return_sentinel`)) return o;
        let s;
        return t[8] !== r || t[9] !== i || t[10] !== a ? (s = (0, Z.jsxs)(`div`, {
            className: r,
            children: [i, a]
        }), t[8] = r, t[9] = i, t[10] = a, t[11] = s) : s = t[11], s
    }
}));

function Tn(e) {
    "use forget";
    let t = (0, Nn.c)(284),
        {
            product: r,
            clientThreadId: i,
            messageId: a,
            contentReferenceStartIndex: o,
            turnIndex: s,
            productIndex: l,
            conversation: d,
            offsetTopMargin: f,
            sidebar: p,
            isModal: m,
            galleryAspect: h,
            interactionSource: _,
            initialVisibleOfferCount: ee,
            onFollowUp: te
        } = e,
        y = f !== void 0 && f,
        S = m !== void 0 && m,
        ne;
    t[0] === d ? ne = t[1] : (ne = () => mt(d), t[0] = d, t[1] = ne);
    let w = c(ne),
        T;
    t[2] === w ? T = t[3] : (T = {
        ...w,
        isGenui: !0
    }, t[2] = w, t[3] = T);
    let D = je(T),
        [O, ie] = (0, Q.useState)(null),
        [ae, oe] = (0, Q.useState)(!1),
        [k, A] = (0, Q.useState)(!1),
        [j, M] = (0, Q.useState)(!1),
        [N, le] = (0, Q.useState)(!1),
        ue = Pn(),
        {
            showDebugConversationTurns: de
        } = ye(),
        fe = p?.type === `product_agent` && p.publicEntityShareId != null,
        me = !fe && ue?.persist_conversation_to_user === !0,
        he = (0, Q.use)(Ae),
        ge = (0, Q.useRef)(null),
        _e = (0, Q.useRef)(null),
        ve = (0, Q.useRef)(null),
        [P, xe] = (0, Q.useState)(null),
        Se;
    t[4] === i ? Se = t[5] : (Se = u(i) ?? i, t[4] = i, t[5] = Se);
    let F = Se,
        Te = b(),
        Ee;
    t[6] !== d.id || t[7] !== Te ? (Ee = u(d.id) ?? Te, t[6] = d.id, t[7] = Te, t[8] = Ee) : Ee = t[8];
    let Oe = Ee,
        I = C(`3375735072`),
        L;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (L = Ce(), t[9] = L) : L = t[9];
    let R = L,
        Ie;
    t[10] !== d || t[11] !== r ? (Ie = () => {
        let e = ut(d),
            t = e === `enriched` ? gt(d) : null,
            n = wt(d),
            {
                product: i,
                offers: a
            } = n ?? {
                product: r,
                offers: []
            };
        return {
            productDetailDataScope: e,
            resolvedProductDetailData: n,
            statefulProduct: i,
            renderedOffers: a,
            hasStreamedEntityOffers: e === `source_catalog` ? n != null : (t?.product.offers?.length ?? 0) > 0
        }
    }, t[10] = d, t[11] = r, t[12] = Ie) : Ie = t[12];
    let {
        productDetailDataScope: z,
        resolvedProductDetailData: ze,
        statefulProduct: B,
        renderedOffers: Be,
        hasStreamedEntityOffers: V
    } = c(Ie), He, Ue;
    if (t[13] !== z) {
        let e = z === `enriched` ? v(`2128165686`) : void 0;
        He = e?.get(`disable_sidebar_what_to_know`, !1) ?? !1, Ue = e?.get(`disable_sidebar_reviews`, !1) ?? !1, t[13] = z, t[14] = He, t[15] = Ue
    } else He = t[14], Ue = t[15];
    let We = Ue,
        Ge;
    t[16] === d ? Ge = t[17] : (Ge = () => ({
        productRationale: pt(d),
        isLoadingReviewsOrRationale: _t(d)
    }), t[16] = d, t[17] = Ge);
    let {
        productRationale: Ke,
        isLoadingReviewsOrRationale: qe
    } = c(Ge), Je = !He && !!(Ke?.rationale || qe), Xe;
    t[18] === d ? Xe = t[19] : (Xe = () => st(d), t[18] = d, t[19] = Xe);
    let $e = c(Xe),
        et;
    t[20] === d ? et = t[21] : (et = () => bt(d), t[20] = d, t[21] = et);
    let tt = c(et),
        nt;
    t[22] === d ? nt = t[23] : (nt = () => St(d), t[22] = d, t[23] = nt);
    let it = c(nt),
        ot;
    t[24] === d ? ot = t[25] : (ot = () => dt(d), t[24] = d, t[25] = ot);
    let lt = c(ot),
        vt;
    t[26] === d ? vt = t[27] : (vt = () => yt(d), t[26] = d, t[27] = vt);
    let xt = c(vt),
        Ct;
    t[28] === d ? Ct = t[29] : (Ct = () => ct(d), t[28] = d, t[29] = Ct);
    let Et = c(Ct),
        Dt;
    t[30] === d ? Dt = t[31] : (Dt = () => {
        let e = wt(d)?.product;
        return {
            productImageUrls: ft(d),
            isGeneratingTryOn: e != null && Tt(d, e.id)
        }
    }, t[30] = d, t[31] = Dt);
    let {
        productImageUrls: H,
        isGeneratingTryOn: kt
    } = c(Dt), U = p?.type === `product_agent` || p?.type === `entity` ? p.pinnedImage : void 0, W = U?.content_url || U?.thumbnail_url, jt;
    t[32] !== U?.content_url || t[33] !== U?.thumbnail_url || t[34] !== W || t[35] !== H ? (jt = W ? [W, ...H.filter(e => e !== U?.content_url && e !== U?.thumbnail_url)] : H, t[32] = U?.content_url, t[33] = U?.thumbnail_url, t[34] = W, t[35] = H, t[36] = jt) : jt = t[36];
    let G = jt,
        Pt;
    t[37] === B ? Pt = t[38] : (Pt = Re(B), t[37] = B, t[38] = Pt);
    let Ft = Pt,
        Lt = z === `enriched` && (B.shopping_vto?.eligible ?? r.shopping_vto?.eligible ?? !1),
        [K] = (0, Q.useState)(Dn),
        zt, Vt;
    t[39] !== d || t[40] !== F || t[41] !== a || t[42] !== r ? (zt = () => Qe({
        conversation: d,
        shellProduct: r,
        conversationId: F,
        messageId: a
    }), Vt = [d, r, F, a], t[39] = d, t[40] = F, t[41] = a, t[42] = r, t[43] = zt, t[44] = Vt) : (zt = t[43], Vt = t[44]), (0, Q.useEffect)(zt, Vt);
    let Ht, Ut;
    t[45] !== d || t[46] !== F || t[47] !== a || t[48] !== me || t[49] !== r || t[50] !== B ? (Ht = () => {
        rt({
            conversation: d,
            shellProduct: r,
            statefulProduct: B,
            conversationId: F,
            messageId: a,
            persistConversationToUser: me
        })
    }, Ut = [d, F, a, me, r, B], t[45] = d, t[46] = F, t[47] = a, t[48] = me, t[49] = r, t[50] = B, t[51] = Ht, t[52] = Ut) : (Ht = t[51], Ut = t[52]), (0, Q.useEffect)(Ht, Ut);
    let Wt, q;
    t[53] === Symbol.for(`react.memo_cache_sentinel`) ? (Wt = () => {
        let e = ve.current;
        if (!e) return;
        let t = () => {
            xe(e.getBoundingClientRect().height)
        };
        if (t(), typeof ResizeObserver > `u`) return;
        let n = new ResizeObserver(t);
        return n.observe(e), () => {
            n.disconnect()
        }
    }, q = [], t[53] = Wt, t[54] = q) : (Wt = t[53], q = t[54]), (0, Q.useEffect)(Wt, q);
    let J = (0, Q.useRef)(!1),
        Gt = (0, Q.useRef)(null),
        Kt, qt;
    t[55] !== i || t[56] !== o || t[57] !== d || t[58] !== a || t[59] !== z || t[60] !== D ? (Kt = () => re(() => {
        let e = gt(d)?.product;
        e && !J.current && (J.current = !0, Le({
            clientThreadId: i,
            messageId: a,
            contentReferenceStartIndex: o,
            product: e,
            source: z === `source_catalog` ? ce.CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_SOURCE_CATALOG : ce.CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_ENRICHED
        }), D(`Product Sidebar Entity Loaded`, `product_sidebar_entity_loaded`, `product_entity`, {
            ...e.analytics_meta ?? {},
            product_event_uuid: e.product_event_uuid
        }))
    }), qt = [i, o, d, a, z, D], t[55] = i, t[56] = o, t[57] = d, t[58] = a, t[59] = z, t[60] = D, t[61] = Kt, t[62] = qt) : (Kt = t[61], qt = t[62]), (0, Q.useEffect)(Kt, qt);
    let Jt;
    t[63] !== _ || t[64] !== z || t[65] !== ze || t[66] !== r || t[67] !== B || t[68] !== D ? (Jt = () => {
        if (z === `source_catalog` && ze == null) return;
        let e = z === `source_catalog` ? B : r;
        if (Gt.current === e.id) return;
        Gt.current = e.id;
        let t = jn(e, _),
            n = [t.offer_url, t.product_url, t.site_url, t.merchant_url].find(En);
        D(`Product Detail Shown`, `product_detail_shown`, `product_entity`, t, void 0, t => we(`product_detail_shown`, `detail_shown`, t, {
            productId: e.id,
            interactionSource: _,
            url: n
        }))
    }, t[63] = _, t[64] = z, t[65] = ze, t[66] = r, t[67] = B, t[68] = D, t[69] = Jt) : Jt = t[69];
    let Yt;
    t[70] !== i || t[71] !== o || t[72] !== _ || t[73] !== a || t[74] !== Oe || t[75] !== z || t[76] !== ze || t[77] !== r || t[78] !== B || t[79] !== D || t[80] !== s ? (Yt = [i, o, _, a, Oe, z, ze, r, B, D, s], t[70] = i, t[71] = o, t[72] = _, t[73] = a, t[74] = Oe, t[75] = z, t[76] = ze, t[77] = r, t[78] = B, t[79] = D, t[80] = s, t[81] = Yt) : Yt = t[81], (0, Q.useEffect)(Jt, Yt);
    let Xt;
    t[82] !== z || t[83] !== B ? (Xt = z === `enriched` ? B.variants ?? [] : [], t[82] = z, t[83] = B, t[84] = Xt) : Xt = t[84];
    let Zt = Xt,
        $t;
    t[85] === B ? $t = t[86] : ($t = e => ke(B, e), t[85] = B, t[86] = $t);
    let en = $t,
        tn;
    if (t[87] !== H || t[88] !== B) {
        tn = [];
        for (let e of H) {
            let t = Ve(e, ke(B, e));
            t != null && tn.push(t)
        }
        t[87] = H, t[88] = B, t[89] = tn
    } else tn = t[89];
    let nn = tn,
        an = Ne(nn),
        on;
    t[90] !== nn || t[91] !== an ? (on = e => {
        let t = Ve(e);
        if (t == null) return e;
        let n = nn.findIndex(e => e.asset_pointer === t.asset_pointer);
        return an[n]?.data?.url ?? null
    }, t[90] = nn, t[91] = an, t[92] = on) : on = t[92];
    let sn = on,
        cn;
    t[93] !== w.isGenui || t[94] !== i || t[95] !== o || t[96] !== G || t[97] !== a || t[98] !== U?.url || t[99] !== W || t[100] !== sn || t[101] !== r || t[102] !== B || t[103] !== s ? (cn = (e, t) => {
        let n = G[e];
        De({
            clientThreadId: i,
            messageId: a,
            turnIndex: s,
            contentReferenceStartIndex: o,
            surfaceLocation: se.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
            imageAffordance: t,
            imageIndex: e,
            contentReferenceType: `product_entity`,
            parentContext: {
                entityId: be(r, a, o),
                entityCategory: `product`,
                contentReferenceStartIndex: o,
                messageId: a
            },
            isGenui: w.isGenui,
            url: n === W ? U?.url : B.url ?? r.url,
            contentUrl: n ? sn(n) : void 0,
            isVirtualTryOnImage: Pe(B, n)
        })
    }, t[93] = w.isGenui, t[94] = i, t[95] = o, t[96] = G, t[97] = a, t[98] = U?.url, t[99] = W, t[100] = sn, t[101] = r, t[102] = B, t[103] = s, t[104] = cn) : cn = t[104];
    let ln = cn,
        Y;
    t[105] !== w || t[106] !== o || t[107] !== F || t[108] !== xt || t[109] !== G || t[110] !== a || t[111] !== he || t[112] !== U || t[113] !== W || t[114] !== l || t[115] !== sn || t[116] !== r || t[117] !== B ? (Y = e => {
        if (he == null) return;
        let t = G.map(e => ({
                imageUrl: e,
                resolvedImageUrl: sn(e)
            })),
            n = [],
            i = [],
            s;
        for (let {
                imageUrl: r,
                resolvedImageUrl: a
            }
            of t) {
            if (a == null) continue;
            let t = ke(B, r) ?? {
                    width: 0,
                    height: 0
                },
                o = U && r === W ? {
                    ...U,
                    show_url: !0
                } : {
                    url: a,
                    content_url: a,
                    thumbnail_url: a,
                    title: xt,
                    content_size: t,
                    thumbnail_size: t,
                    is_proxied_image: Ve(r) != null
                };
            Pe(B, r) && i.push(n.length), n.push(o), r === e && (s = o)
        }
        s != null && (he({
            image: s,
            source: pe.ImageGroup,
            analyticsMetadata: w,
            contentReferenceStartIndex: o,
            productIndex: l,
            imageResults: n,
            engagementMetadata: {
                virtualTryOnImageIndices: i,
                contentReferenceType: `product_entity`,
                pageUrl: B.url ?? r.url ?? null,
                parentContext: {
                    entityId: be(r, a, o),
                    entityCategory: `product`,
                    contentReferenceStartIndex: o,
                    messageId: a
                }
            }
        }), (Re(B).includes(e) || Re(r).includes(e)) && Ye({
            productId: B.id,
            conversationId: F,
            messageId: a
        }, `product_detail`))
    }, t[105] = w, t[106] = o, t[107] = F, t[108] = xt, t[109] = G, t[110] = a, t[111] = he, t[112] = U, t[113] = W, t[114] = l, t[115] = sn, t[116] = r, t[117] = B, t[118] = Y) : Y = t[118];
    let un = Y,
        dn = At({
            isCheckoutEnabled: I,
            isClearingVariantSelection: j,
            isLoadingProductEntity: it
        }),
        pn = lt === `success` || lt === `error`,
        mn;
    t[119] !== pn || t[120] !== V || t[121] !== z || t[122] !== Be || t[123] !== r.offers ? (mn = z === `source_catalog` || V ? Be : pn ? r.offers ?? [] : [], t[119] = pn, t[120] = V, t[121] = z, t[122] = Be, t[123] = r.offers, t[124] = mn) : mn = t[124];
    let hn = mn,
        _n = hn.length > 1,
        X = V && lt === `success`,
        vn;
    t[125] !== d || t[126] !== X || t[127] !== V || t[128] !== a || t[129] !== K || t[130] !== r.id || t[131] !== r.query || t[132] !== r.title ? (vn = () => {
        K.reset({
            conversation: d,
            messageId: a,
            productKey: r.id || r.query || r.title
        }), K.logRenderOfferTimings(V, X, !0)
    }, t[125] = d, t[126] = X, t[127] = V, t[128] = a, t[129] = K, t[130] = r.id, t[131] = r.query, t[132] = r.title, t[133] = vn) : vn = t[133];
    let yn = (0, Q.useEffectEvent)(vn),
        bn;
    t[134] === yn ? bn = t[135] : (bn = () => {
        yn()
    }, t[134] = yn, t[135] = bn);
    let xn;
    t[136] !== K || t[137] !== r.id ? (xn = [K, r.id], t[136] = K, t[137] = r.id, t[138] = xn) : xn = t[138], (0, Q.useEffect)(bn, xn);
    let Sn, Z;
    t[139] !== X || t[140] !== V || t[141] !== K ? (Sn = () => {
        K.logRenderOfferTimings(V, X)
    }, Z = [X, V, K], t[139] = X, t[140] = V, t[141] = K, t[142] = Sn, t[143] = Z) : (Sn = t[142], Z = t[143]), (0, Q.useEffect)(Sn, Z);
    let wn;
    t[144] === d ? wn = t[145] : (wn = () => {
        let e = ge.current,
            t = _e.current;
        if (!e || !t) return;
        let n = () => {
            let n = e.getBoundingClientRect().top,
                r = t.getBoundingClientRect().bottom;
            return Math.max(0, Math.floor(r - n))
        };
        if (typeof ResizeObserver > `u`) {
            at(d, n());
            return
        }
        at(d, -1);
        let r = new ResizeObserver(() => {
            at(d, n())
        });
        return r.observe(e), r.observe(t), at(d, n()), () => {
            r.disconnect()
        }
    }, t[144] = d, t[145] = wn);
    let Tn;
    t[146] !== d || t[147] !== lt || t[148] !== H.length ? (Tn = [d, lt, H.length], t[146] = d, t[147] = lt, t[148] = H.length, t[149] = Tn) : Tn = t[149], (0, Q.useEffect)(wn, Tn);
    let kn = p && (fe || Oe) && Et;
    if (z === `source_catalog` && ze == null) {
        let e = y ? `bg-surface-primary` : `bg-token-bg-primary`,
            i;
        t[150] === e ? i = t[151] : (i = x(`flex min-h-screen w-full flex-col gap-4 px-6 pt-8`, e), t[150] = e, t[151] = i);
        let o;
        t[152] !== d || t[153] !== F || t[154] !== a || t[155] !== lt || t[156] !== r ? (o = lt === `error` ? (0, $.jsxs)(`div`, {
            className: `flex min-h-[420px] flex-col items-center justify-center text-center`,
            children: [(0, $.jsx)(`p`, {
                className: `text-token-text-secondary max-w-xs text-sm`,
                children: (0, $.jsx)(E, {
                    id: `chatgpt.search.product_details.source_catalog.error.message`,
                    defaultMessage: `We couldn't load this product.`
                })
            }), (0, $.jsx)(n, {
                type: `button`,
                className: `mt-4`,
                color: `secondary`,
                size: `small`,
                onClick: () => {
                    ht({
                        conversation: d,
                        shellProduct: r,
                        conversationId: F,
                        messageId: a
                    })
                },
                children: (0, $.jsx)(E, {
                    id: `chatgpt.search.product_details.source_catalog.error.retry_button.label`,
                    defaultMessage: `Try again`
                })
            })]
        }) : (0, $.jsxs)($.Fragment, {
            children: [(0, $.jsx)(`div`, {
                className: `bg-token-bg-tertiary h-56 animate-pulse rounded-2xl`
            }), (0, $.jsx)(`div`, {
                className: `bg-token-bg-tertiary h-7 w-3/4 animate-pulse rounded`
            }), (0, $.jsx)(`div`, {
                className: `bg-token-bg-tertiary h-5 w-1/3 animate-pulse rounded`
            })]
        }), t[152] = d, t[153] = F, t[154] = a, t[155] = lt, t[156] = r, t[157] = o) : o = t[157];
        let s;
        return t[158] !== it || t[159] !== i || t[160] !== o ? (s = (0, $.jsx)(`div`, {
            className: i,
            "aria-busy": it,
            children: o
        }), t[158] = it, t[159] = i, t[160] = o, t[161] = s) : s = t[161], s
    }
    let An = y ? `bg-surface-primary` : `bg-token-bg-primary`,
        Fn = y ? `mt-[calc(var(--threadFlyOut-leading-height,var(--product-flyout-sticky-header-height))*-1)] min-h-screen` : `mt-0`,
        In;
    t[162] !== An || t[163] !== Fn ? (In = x(`flex w-full flex-col`, An, Fn), t[162] = An, t[163] = Fn, t[164] = In) : In = t[164];
    let Ln = `${B.id}:${G[0]??``}`,
        Rn;
    t[165] !== en || t[166] !== U || t[167] !== W || t[168] !== B.title ? (Rn = (e, t) => (0, $.jsx)(Mn, {
        src: e,
        onLoad: t,
        title: e === W && U ? U.title : B.title,
        assetPointerDimensions: en(e)
    }), t[165] = en, t[166] = U, t[167] = W, t[168] = B.title, t[169] = Rn) : Rn = t[169];
    let zn;
    t[170] !== F || t[171] !== a || t[172] !== B.id ? (zn = () => {
        Ze({
            productId: B.id,
            conversationId: F,
            messageId: a
        }, `product_detail`)
    }, t[170] = F, t[171] = a, t[172] = B.id, t[173] = zn) : zn = t[173];
    let Bn;
    t[174] === ln ? Bn = t[175] : (Bn = (e, t) => {
        ln(t, e === `next` ? Fe.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_NEXT_BUTTON : Fe.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_PREVIOUS_BUTTON)
    }, t[174] = ln, t[175] = Bn);
    let Vn;
    t[176] !== ln || t[177] !== un ? (Vn = (e, t) => {
        ln(t, Fe.CHATGPT_IMAGE_AFFORDANCE_PRODUCT_DETAIL_IMAGE), un(e)
    }, t[176] = ln, t[177] = un, t[178] = Vn) : Vn = t[178];
    let Hn;
    t[179] !== h || t[180] !== G || t[181] !== Ft || t[182] !== kt || t[183] !== Ln || t[184] !== Rn || t[185] !== zn || t[186] !== Bn || t[187] !== Vn ? (Hn = (0, $.jsx)(`div`, {
        ref: _e,
        children: (0, $.jsx)(Qt, {
            aspect: h,
            imageUrls: G,
            generatedImageUrls: Ft,
            isGenerating: kt,
            renderImage: Rn,
            onGeneratedImageViewed: zn,
            onArrowClick: Bn,
            onClick: Vn
        }, Ln)
    }), t[179] = h, t[180] = G, t[181] = Ft, t[182] = kt, t[183] = Ln, t[184] = Rn, t[185] = zn, t[186] = Bn, t[187] = Vn, t[188] = Hn) : Hn = t[188];
    let Un;
    t[189] === P ? Un = t[190] : (Un = P == null ? void 0 : {
        height: P
    }, t[189] = P, t[190] = Un);
    let Wn;
    t[191] === Symbol.for(`react.memo_cache_sentinel`) ? (Wn = {
        duration: .2,
        ease: `easeInOut`
    }, t[191] = Wn) : Wn = t[191];
    let Gn;
    t[192] === xt ? Gn = t[193] : (Gn = (0, $.jsx)(`h2`, {
        ref: ve,
        className: `text-xl`,
        children: xt
    }), t[192] = xt, t[193] = Gn);
    let Kn;
    t[194] !== Un || t[195] !== Gn ? (Kn = (0, $.jsx)(g.div, {
        className: `overflow-hidden`,
        initial: !1,
        animate: Un,
        transition: Wn,
        children: Gn
    }), t[194] = Un, t[195] = Gn, t[196] = Kn) : Kn = t[196];
    let qn;
    t[197] === B ? qn = t[198] : (qn = (0, $.jsx)(Mt, {
        product: B,
        wrapperClass: `text-token-text-primary mt-1 inline-flex items-center gap-1 text-base leading-5 font-normal`,
        includeMidDelimiter: !0,
        includeNum: !0
    }), t[197] = B, t[198] = qn);
    let Jn;
    t[199] !== Kn || t[200] !== qn ? (Jn = (0, $.jsxs)(`div`, {
        className: `flex flex-col px-6 pt-4`,
        children: [Kn, qn]
    }), t[199] = Kn, t[200] = qn, t[201] = Jn) : Jn = t[201];
    let Yn;
    t[202] !== R || t[203] !== B.price_history ? (Yn = R && B.price_history && (0, $.jsx)(gn, {
        priceHistory: B.price_history
    }), t[202] = R, t[203] = B.price_history, t[204] = Yn) : Yn = t[204];
    let Xn;
    t[205] !== d || t[206] !== ae || t[207] !== I || t[208] !== k || t[209] !== l || t[210] !== r || t[211] !== B || t[212] !== D || t[213] !== Zt ? (Xn = I && Zt.length > 0 && (0, $.jsx)(`div`, {
        className: x(`px-5 pt-4 pb-2`, k && `pointer-events-none opacity-50`),
        "aria-busy": k,
        children: (0, $.jsx)(Bt, {
            options: Zt,
            showErrors: ae,
            updateOption: (e, t, n) => On({
                optionGroupId: e,
                selectedId: t,
                variant_index: n,
                conversation: d,
                shellProduct: r,
                statefulProduct: B,
                setIsSwitchingVariant: A,
                setIsClearingVariantSelection: M,
                setSuppressOfferAnimations: le,
                setError: ie,
                trackContentReferenceEvent: D,
                productIndex: l,
                productId: r.id
            })
        })
    }), t[205] = d, t[206] = ae, t[207] = I, t[208] = k, t[209] = l, t[210] = r, t[211] = B, t[212] = D, t[213] = Zt, t[214] = Xn) : Xn = t[214];
    let Zn;
    t[215] === O ? Zn = t[216] : (Zn = O && (0, $.jsx)(`div`, {
        className: `text-token-interactive-label-danger-secondary-default text-center`,
        children: O
    }), t[215] = O, t[216] = Zn);
    let Qn;
    t[217] !== I || t[218] !== H || t[219] !== B.image_urls ? (Qn = I ? B.image_urls ?? [] : H, t[217] = I, t[218] = H, t[219] = B.image_urls, t[220] = Qn) : Qn = t[220];
    let $n = z === `source_catalog` || Je,
        er;
    t[221] === Symbol.for(`react.memo_cache_sentinel`) ? (er = () => oe(!0), t[221] = er) : er = t[221];
    let tr;
    t[222] !== o || t[223] !== d || t[224] !== ee || t[225] !== _ || t[226] !== hn || t[227] !== dn || t[228] !== l || t[229] !== _n || t[230] !== B || t[231] !== N || t[232] !== Qn || t[233] !== $n || t[234] !== D ? (tr = (0, $.jsx)(It, {
        className: `flex flex-col px-5 pt-3`,
        offers: hn,
        conversation: d,
        contentReferenceStartIndex: o,
        productIndex: l,
        product: B,
        trackContentReferenceEvent: D,
        imageUrls: Qn,
        isLoading: dn,
        suppressOfferAnimations: N,
        showBestPriceOfferTag: _n,
        showBottomBorder: $n,
        onOpenCheckout: er,
        interactionSource: _,
        initialVisibleOfferCount: ee
    }), t[222] = o, t[223] = d, t[224] = ee, t[225] = _, t[226] = hn, t[227] = dn, t[228] = l, t[229] = _n, t[230] = B, t[231] = N, t[232] = Qn, t[233] = $n, t[234] = D, t[235] = tr) : tr = t[235];
    let nr;
    t[236] !== We || t[237] !== He || t[238] !== qe || t[239] !== a || t[240] !== z || t[241] !== Ke || t[242] !== $e || t[243] !== K || t[244] !== B || t[245] !== D ? (nr = z === `source_catalog` ? (0, $.jsx)(Cn, {
        product: B
    }) : (0, $.jsxs)(`div`, {
        className: `flex flex-col bg-inherit`,
        children: [!He && (0, $.jsx)(Nt, {
            contentReference: Ke,
            trackContentReferenceEvent: D,
            disableAnimation: !!(Ke || $e),
            isLoading: qe,
            productAnalyticsMeta: B.analytics_meta ?? void 0,
            productEventUuid: B.product_event_uuid ?? void 0,
            renderProfiler: K
        }), !We && (0, $.jsx)(Rt, {
            contentReference: $e,
            messageId: a,
            trackContentReferenceEvent: D,
            disableAnimation: !!(Ke || $e),
            productAnalyticsMeta: B.analytics_meta ?? void 0,
            productEventUuid: B.product_event_uuid ?? void 0,
            renderProfiler: K
        })]
    }), t[236] = We, t[237] = He, t[238] = qe, t[239] = a, t[240] = z, t[241] = Ke, t[242] = $e, t[243] = K, t[244] = B, t[245] = D, t[246] = nr) : nr = t[246];
    let rr;
    t[247] === Symbol.for(`react.memo_cache_sentinel`) ? (rr = (0, $.jsx)(rn, {}), t[247] = rr) : rr = t[247];
    let ir;
    t[248] !== o || t[249] !== d || t[250] !== Lt || t[251] !== a || t[252] !== H || t[253] !== l || t[254] !== r.shopping_vto || t[255] !== B || t[256] !== s ? (ir = Lt && (0, $.jsx)(Ot, {
        contentReferenceStartIndex: o,
        conversation: d,
        messageId: a,
        product: {
            ...B,
            image_urls: H,
            shopping_vto: B.shopping_vto == null ? r.shopping_vto : {
                ...B.shopping_vto,
                generated_images: Me(B.shopping_vto.generated_images ?? [], r.shopping_vto?.generated_images ?? [])
            }
        },
        productIndex: l,
        turnIndex: s
    }), t[248] = o, t[249] = d, t[250] = Lt, t[251] = a, t[252] = H, t[253] = l, t[254] = r.shopping_vto, t[255] = B, t[256] = s, t[257] = ir) : ir = t[257];
    let ar;
    t[258] !== o || t[259] !== d || t[260] !== S || t[261] !== fe || t[262] !== a || t[263] !== te || t[264] !== l || t[265] !== kn || t[266] !== B || t[267] !== s ? (ar = kn && (0, $.jsx)(`div`, {
        className: `flex justify-end px-6 pt-16 pb-6`,
        children: (0, $.jsx)(fn, {
            conversation: d,
            messageId: fe ? void 0 : a,
            contentReferenceStartIndex: o,
            turnIndex: s,
            productIndex: l,
            product: B,
            isModal: S,
            onFollowUp: te
        })
    }), t[258] = o, t[259] = d, t[260] = S, t[261] = fe, t[262] = a, t[263] = te, t[264] = l, t[265] = kn, t[266] = B, t[267] = s, t[268] = ar) : ar = t[268];
    let or;
    t[269] !== tt || t[270] !== de ? (or = !1, t[269] = tt, t[270] = de, t[271] = or) : or = t[271];
    let sr;
    return t[272] !== In || t[273] !== Hn || t[274] !== Jn || t[275] !== Yn || t[276] !== Xn || t[277] !== Zn || t[278] !== tr || t[279] !== nr || t[280] !== ir || t[281] !== ar || t[282] !== or ? (sr = (0, $.jsxs)(`div`, {
        ref: ge,
        className: In,
        children: [Hn, Jn, Yn, Xn, Zn, tr, nr, rr, ir, ar, or]
    }), t[272] = In, t[273] = Hn, t[274] = Jn, t[275] = Yn, t[276] = Xn, t[277] = Zn, t[278] = tr, t[279] = nr, t[280] = ir, t[281] = ar, t[282] = or, t[283] = sr) : sr = t[283], sr
}

function En(e) {
    return typeof e == `string` && e !== ``
}

function Dn() {
    return new it
}
async function On({
    optionGroupId: e,
    selectedId: t,
    variant_index: n,
    conversation: r,
    shellProduct: i,
    statefulProduct: a,
    setIsSwitchingVariant: o,
    setIsClearingVariantSelection: s,
    setSuppressOfferAnimations: c,
    setError: l,
    trackContentReferenceEvent: u,
    productIndex: d,
    productId: f
}) {
    let p = a.variants?.find(t => t.id === e);
    u(`product_detail`, `product_detail`, `product_entity`, {
        ...a.analytics_meta ?? {},
        product_index: d,
        product_id: f,
        product_event_uuid: a.product_event_uuid,
        action: `variant_selected`,
        section: `product_detail`,
        section_location: `sidebar`,
        variant_name: p?.label ?? ``,
        variant_value: p?.options.find(e => e.id === t)?.label ?? ``,
        variant_index: n
    });
    let m = t == null,
        h = a.variants?.some(e => e.selected_option_id) ?? !1,
        g = a.variants?.map(n => m || n.id === e ? {
            ...n,
            options: n.options.map(e => ({
                ...e,
                selected: !m && e.id === t
            })),
            selected_option_id: m ? null : t
        } : n) ?? a.variants,
        _ = m ? void 0 : g?.reduce((e, t) => (t.selected_option_id && (e[t.id] = t.selected_option_id), e), {}),
        ee = p?.options.find(e => e.id === t);
    t && !ee?.available && (_ = {
        [e]: t
    });
    let te = Object.keys(_ ?? {}).length > 0,
        v = kn({
            shellProduct: i,
            statefulProduct: a,
            variantOptionsQuery: _,
            optionGroupId: e,
            isClearingVariantSelection: m
        });
    o(!0), s(m), c(m || !h), xt({
        conversation: r,
        shellProduct: i,
        updatedVariants: g,
        variantOptionsQuery: _,
        optionGroupId: e,
        productLookupKey: v
    });
    let y = !1,
        b = (e, t) => {
            y = !0, vt({
                conversation: r,
                shellProduct: i,
                nextProduct: e,
                productLookupKey: t ?? e.product_lookup_key ?? {},
                hasFetchedVariant: te
            })
        };
    try {
        if (m)
            for await (let e of nt({
                productQuery: i.title,
                productLookupKey: v
            })) {
                if (e.type !== `product_entity`) continue;
                let t = {
                    ...e.product,
                    variants: e.product.variants ?? g
                };
                b(t, t.product_lookup_key ?? v)
            } else {
                let e = (await et({
                    productLookupKey: v,
                    onProductEntity: e => {
                        let t = e.product;
                        t?.variants && b(t, v)
                    }
                }))?.product;
                !y && e?.variants && b(e, v)
            }
    } catch {} finally {
        o(!1), s(!1), c(!1)
    }
}

function kn({
    shellProduct: e,
    statefulProduct: t,
    variantOptionsQuery: n,
    optionGroupId: r,
    isClearingVariantSelection: i
}) {
    return i ? An(e.product_lookup_key) : {
        ...t.product_lookup_key,
        variant_options_query: n,
        last_variant_selection_group_id: r
    }
}

function An(e) {
    if (!e) return e;
    let t = {
        ...e
    };
    return delete t.variant_options_query, delete t.last_variant_selection_group_id, t
}

function jn(e, t) {
    return {
        ...e.analytics_meta ?? {},
        interaction_source: t,
        product_id: e.id,
        product_event_uuid: e.product_event_uuid,
        product_url: e.url,
        has_popular_tag: e.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
    }
}

function Mn(e) {
    "use forget";
    let t = (0, Nn.c)(6),
        {
            assetPointerDimensions: n,
            src: r,
            title: i,
            onLoad: a
        } = e,
        o;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = x(`h-full w-full cursor-zoom-in object-contain mix-blend-darken dark:mix-blend-lighten`), t[0] = o) : o = t[0];
    let s;
    return t[1] !== n || t[2] !== a || t[3] !== r || t[4] !== i ? (s = (0, $.jsx)(He, {
        src: r,
        onLoad: a,
        assetPointerDimensions: n,
        alt: i,
        className: o
    }), t[1] = n, t[2] = a, t[3] = r, t[4] = i, t[5] = s) : s = t[5], s
}
var Nn, Q, $, Pn, Fn = e((() => {
    Nn = ie(), V(), N(), Ue(), Ie(), _(), oe(), L(), z(), _e(), nn(), Et(), Dt(), Xe(), I(), kt(), Te(), ve(), ot(), tt(), $e(), Oe(), i(), ee(), o(), te(), ge(), F(), S(), a(), Q = t(O()), D(), dn(), hn(), Ee(), Vt(), vn(), K(), Ft(), Lt(), wn(), W(), $ = w(), Pn = () => void 0
}));
export {
    Fn as n, Tn as t
};
//# sourceMappingURL=ecdd5ba5-fdi1fmyq53ef0uvs.js.map