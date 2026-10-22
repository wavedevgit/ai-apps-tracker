import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    $m as r,
    At as i,
    Da as a,
    Hx as o,
    Lw as s,
    QJ as c,
    Qm as l,
    Rw as u,
    Vx as d,
    ap as f,
    bF as p,
    c7 as m,
    cn as h,
    eE as g,
    eY as _,
    hrt as ee,
    ip as te,
    k8 as v,
    ka as y,
    l7 as b,
    lrt as x,
    mrt as S,
    q5 as C,
    v5 as ne,
    vF as re
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as w,
    Ln as T,
    Nn as E,
    Rn as D,
    Vn as O,
    wn as k,
    zn as A
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $ut as ie,
    Clt as j,
    D3 as M,
    Gkn as N,
    Hjn as ae,
    I3 as P,
    IIn as F,
    Ift as oe,
    Kkn as se,
    L3 as ce,
    LIn as le,
    Lft as ue,
    Lgt as de,
    N3 as fe,
    PIn as pe,
    QIn as me,
    Rgt as he,
    Smt as ge,
    Tlt as _e,
    Ujn as ve,
    VIn as ye,
    Vft as be,
    Wjn as xe,
    Yjn as I,
    ZIn as Se,
    _Ln as Ce,
    _lt as we,
    blt as Te,
    bmt as Ee,
    bpt as De,
    btn as Oe,
    dmt as ke,
    edt as Ae,
    fmt as L,
    gLn as R,
    gmt as je,
    kIn as z,
    npt as Me,
    pmt as Ne,
    qkn as Pe,
    rSn as Fe,
    rpt as B,
    spt as Ie,
    tSn as Le,
    vmt as Re,
    vtn as V,
    w3 as ze,
    wlt as H,
    xlt as Be,
    xmt as Ve,
    ymt as He,
    ypt as Ue
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    CC as We,
    Ch as Ge,
    SC as Ke,
    Sh as qe
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    $r as Je,
    Wr as Ye,
    ei as Xe
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    A as Ze,
    C as Qe,
    F as $e,
    I as et,
    L as tt,
    M as nt,
    N as rt,
    O as it,
    P as at,
    _ as ot,
    a as st,
    b as ct,
    c as lt,
    d as ut,
    f as dt,
    h as ft,
    i as pt,
    j as mt,
    l as ht,
    m as gt,
    n as _t,
    o as vt,
    p as yt,
    t as bt,
    u as xt,
    v as St,
    y as Ct
} from "./2b67bcd8-f74p2b0wecft5hwv.js";
import {
    i as wt,
    n as Tt
} from "./2da3878c-huyqfxr1qiu4w30m.js";
import {
    r as Et,
    t as Dt
} from "./58ee18a8-ci132tyywe3jlo13.js";
import {
    c as U,
    d as Ot,
    g as kt,
    l as W,
    m as G,
    n as At,
    t as jt,
    u as Mt
} from "./1362c49f-cqv3k36c750e5lml.js";
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
} from "./f4222f0c-hrh62mfzdbk2dtvy.js";

function Ht(e) {
    "use forget";
    let t = (0, Wt.c)(80),
        {
            images: n,
            initialIndex: r,
            activeIndex: i,
            paginationStatus: a,
            onInteraction: o,
            className: c,
            aspect: l,
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
        te = c === void 0 ? `` : c,
        v = l === void 0 ? `aspect-[16/9]` : l,
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
        [O, k] = (0, q.useState)(!1),
        [ie, j] = (0, q.useState)(!1),
        M = (0, q.useRef)(null),
        N = A(),
        ae;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (ae = {
        active: !1,
        startX: 0,
        lastX: 0,
        dx: 0,
        width: 1,
        lastTime: 0,
        velocity: 0,
        captured: !1,
        programmaticTargetIndex: null
    }, t[3] = ae) : ae = t[3];
    let P = (0, q.useRef)(ae),
        F = n.length,
        oe = n[w]?.src,
        se;
    t[4] === i ? se = t[5] : (se = () => {
        if (i == null) return;
        let e = M.current;
        e && (P.current.programmaticTargetIndex === i || Math.round(e.scrollLeft / (e.clientWidth || 1)) === i || (P.current.programmaticTargetIndex = i, e.scrollTo({
            left: i * e.clientWidth,
            behavior: `instant`
        })))
    }, t[4] = i, t[5] = se);
    let ce;
    t[6] !== oe || t[7] !== i ? (ce = [i, oe], t[6] = oe, t[7] = i, t[8] = ce) : ce = t[8], (0, q.useEffect)(se, ce);
    let le;
    t[9] !== C || t[10] !== E || t[11] !== F ? (le = (e, t) => {
        let n = t === void 0 ? `smooth` : t,
            r = M.current;
        if (!r) return;
        let i = C ? Kt(e, 0, F - 1) : Gt(e, 0, F - 1),
            a = P.current.width || r.clientWidth || 1;
        P.current.programmaticTargetIndex = i, r.scrollTo({
            left: i * a,
            behavior: n
        }), E(i)
    }, t[9] = C, t[10] = E, t[11] = F, t[12] = le) : le = t[12];
    let ue = le,
        de, fe;
    t[13] === x ? (de = t[14], fe = t[15]) : (de = () => {
        if (!x) return;
        j(!0);
        let e = window.setTimeout(() => j(!1), 2e3);
        return () => window.clearTimeout(e)
    }, fe = [x], t[13] = x, t[14] = de, t[15] = fe), (0, q.useEffect)(de, fe);
    let pe = O,
        me = O || ie,
        he;
    t[16] !== C || t[17] !== F ? (he = e => C ? Kt(e, 0, F - 1) : Gt(e, 0, F - 1), t[16] = C, t[17] = F, t[18] = he) : he = t[18];
    let ge = he,
        _e;
    t[19] !== o || t[20] !== ue ? (_e = e => {
        o?.(), ue(e, `smooth`)
    }, t[19] = o, t[20] = ue, t[21] = _e) : _e = t[21];
    let ve = _e,
        ye;
    t[22] !== ve || t[23] !== w || t[24] !== g || t[25] !== ge || t[26] !== F ? (ye = e => {
        if (F <= 1) return;
        let t = ge(e === `next` ? w + 1 : w - 1);
        t !== w && g?.(e, t), ve(t)
    }, t[22] = ve, t[23] = w, t[24] = g, t[25] = ge, t[26] = F, t[27] = ye) : ye = t[27];
    let be = ye,
        xe, I;
    t[28] !== i || t[29] !== w || t[30] !== _ ? (xe = () => {
        i ?? _?.(w)
    }, I = [i, w, _], t[28] = i, t[29] = w, t[30] = _, t[31] = xe, t[32] = I) : (xe = t[31], I = t[32]), (0, q.useEffect)(xe, I);
    let Se, Ce;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (Se = () => {
        let e = M.current;
        if (!e) return;
        let t = new ResizeObserver(t => {
            for (let n of t) P.current.width = n.contentRect.width || e.clientWidth || 1
        });
        return t.observe(e), P.current.width = e.clientWidth || 1, () => t.disconnect()
    }, Ce = [], t[33] = Se, t[34] = Ce) : (Se = t[33], Ce = t[34]), (0, q.useEffect)(Se, Ce);
    let we;
    t[35] !== w || t[36] !== D || t[37] !== F ? (we = () => {
        let e = M.current;
        if (!e) return;
        let t = () => {
            let t = P.current.width || e.clientWidth || 1,
                n = e.scrollLeft || 0,
                r = n / t,
                i = P.current.programmaticTargetIndex;
            if (i != null) {
                let e = i * t;
                Math.abs(n - e) <= 2 && (P.current.programmaticTargetIndex = null);
                return
            }
            let a = w;
            r > w + .5 ? a = Gt(w + 1, 0, F - 1) : r < w - .5 && (a = Gt(w - 1, 0, F - 1)), a !== w && D(a)
        };
        return e.addEventListener(`scroll`, t, {
            passive: !0
        }), () => e.removeEventListener(`scroll`, t)
    }, t[35] = w, t[36] = D, t[37] = F, t[38] = we) : we = t[38];
    let Te;
    t[39] !== w || t[40] !== F ? (Te = [F, w], t[39] = w, t[40] = F, t[41] = Te) : Te = t[41], (0, q.useEffect)(we, Te);
    let Ee = `select-none ${te} relative`,
        De, Oe;
    t[42] === Symbol.for(`react.memo_cache_sentinel`) ? (De = () => k(!0), Oe = () => k(!1), t[42] = De, t[43] = Oe) : (De = t[42], Oe = t[43]);
    let ke = `relative w-full ${v} overflow-clip`,
        Ae;
    if (t[44] !== S || t[45] !== n || t[46] !== N || t[47] !== y || t[48] !== h) {
        let e;
        t[50] !== S || t[51] !== N || t[52] !== y || t[53] !== h ? (e = (e, t) => (0, J.jsx)(`div`, {
            onClick: () => h?.(e, t),
            role: h ? `button` : void 0,
            tabIndex: h ? 0 : void 0,
            onKeyDown: n => {
                h && (n.key === `Enter` || n.key === ` `) && (n.preventDefault(), h(e, t))
            },
            className: `relative h-full w-full shrink-0 grow-0 basis-full snap-center`,
            children: e.content ? e.content : (0, J.jsx)(`img`, {
                src: e.src,
                alt: e.alt ?? N.formatMessage({
                    id: `wHCsqa`,
                    defaultMessage: `Slide {index}`
                }, {
                    index: t + 1
                }),
                className: `h-full w-full ${y} ${S}`
            })
        }, e.src), t[50] = S, t[51] = N, t[52] = y, t[53] = h, t[54] = e) : e = t[54], Ae = n.map(e), t[44] = S, t[45] = n, t[46] = N, t[47] = y, t[48] = h, t[49] = Ae
    } else Ae = t[49];
    let L;
    t[55] !== o || t[56] !== Ae ? (L = (0, J.jsx)(`div`, {
        ref: M,
        onScroll: o,
        className: `no-scrollbar flex h-full w-full touch-pan-x touch-pan-y snap-x snap-mandatory overflow-x-scroll scroll-smooth`,
        children: Ae
    }), t[55] = o, t[56] = Ae, t[57] = L) : L = t[57];
    let R;
    t[58] !== be || t[59] !== n.length || t[60] !== N || t[61] !== pe || t[62] !== me || t[63] !== x ? (R = x && n.length > 1 && (0, J.jsxs)(J.Fragment, {
        children: [(0, J.jsx)(Ut, {
            ariaLabel: N.formatMessage({
                id: `l9pylv`,
                defaultMessage: `Previous slide`
            }),
            onClick: () => be(`previous`),
            side: `start`,
            visible: pe,
            children: (0, J.jsx)(s, {
                className: `icon-md`
            })
        }), (0, J.jsx)(Ut, {
            ariaLabel: N.formatMessage({
                id: `L0pbQh`,
                defaultMessage: `Next slide`
            }),
            onClick: () => be(`next`),
            side: `end`,
            visible: me,
            children: (0, J.jsx)(Ke, {
                className: `icon-md`
            })
        })]
    }), t[58] = be, t[59] = n.length, t[60] = N, t[61] = pe, t[62] = me, t[63] = x, t[64] = R) : R = t[64];
    let je;
    t[65] !== ke || t[66] !== L || t[67] !== R ? (je = (0, J.jsxs)(`div`, {
        className: ke,
        children: [L, R]
    }), t[65] = ke, t[66] = L, t[67] = R, t[68] = je) : je = t[68];
    let z;
    t[69] !== ve || t[70] !== n || t[71] !== w || t[72] !== N || t[73] !== a || t[74] !== b ? (z = a == null ? b && n.length > 1 && n.length <= 20 && (0, J.jsx)(`div`, {
        className: `absolute start-0 end-0 bottom-3 flex items-center justify-center`,
        children: (0, J.jsx)(`div`, {
            className: `flex w-fit items-center justify-center gap-2 rounded-full bg-[#0D0D0D66] bg-clip-padding p-1 backdrop-blur`,
            children: n.map((e, t) => (0, J.jsx)(`button`, {
                type: `button`,
                onClick: () => ve(t),
                "aria-label": N.formatMessage({
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
    }), t[69] = ve, t[70] = n, t[71] = w, t[72] = N, t[73] = a, t[74] = b, t[75] = z) : z = t[75];
    let Me;
    return t[76] !== Ee || t[77] !== je || t[78] !== z ? (Me = (0, J.jsxs)(`div`, {
        className: Ee,
        "aria-roledescription": `carousel`,
        onMouseEnter: De,
        onMouseLeave: Oe,
        children: [je, z]
    }), t[76] = Ee, t[77] = je, t[78] = z, t[79] = Me) : Me = t[79], Me
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
    t[0] !== s || t[1] !== c ? (l = m(`btn-secondary border-token-border-default active:bg-token-bg-tertiary hover:bg-token-bg-primary absolute top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-clip-padding backdrop-blur transition-opacity duration-300 hover:shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)] active:opacity-100!`, c, s), t[0] = s, t[1] = c, t[2] = l) : l = t[2];
    let u;
    return t[3] !== n || t[4] !== o || t[5] !== r || t[6] !== l ? (u = (0, J.jsx)(`button`, {
        "aria-label": n,
        onClick: r,
        className: l,
        children: o
    }), t[3] = n, t[4] = o, t[5] = r, t[6] = l, t[7] = u) : u = t[7], u
}
var Wt, q, J, Gt, Kt, qt = e((() => {
        Wt = k(), u(), We(), b(), q = t(O()), D(), J = w(), Gt = (e, t, n) => Math.min(Math.max(e, t), n), Kt = (e, t, n) => e > n ? t : e < t ? n : e
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
    let k = O,
        A;
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
        }), t[26] = d, t[27] = o, t[28] = e) : e = t[28], A = r.map(e), t[22] = r, t[23] = d, t[24] = o, t[25] = A
    } else A = t[25];
    let ie;
    t[29] === r ? ie = t[30] : (ie = e => {
        let t = r[e];
        m(e => e.url === t ? e : {
            ...e,
            url: t
        })
    }, t[29] = r, t[30] = ie);
    let j;
    t[31] !== a || t[32] !== ee ? (j = a && !ee ? (0, tn.jsx)(`span`, {
        role: `status`,
        className: `rounded-full bg-black/25 px-3 py-2.5 text-xs font-medium text-white backdrop-blur-md`,
        children: (0, tn.jsx)(`span`, {
            className: Xt.generationStatus,
            children: (0, tn.jsx)(E, {
                id: `chatgpt.shopping.virtual_try_on.product_detail.generation.status`,
                defaultMessage: `Generating try-on`
            })
        })
    }) : void 0, t[31] = a, t[32] = ee, t[33] = j) : j = t[33];
    let M;
    t[34] === c ? M = t[35] : (M = (e, t) => c(e.src, t), t[34] = c, t[35] = M);
    let N;
    return t[36] !== u || t[37] !== b || t[38] !== s || t[39] !== A || t[40] !== ie || t[41] !== j || t[42] !== M ? (N = (0, tn.jsx)(Ht, {
        activeIndex: b,
        images: A,
        aspect: u,
        onActiveIndexChange: ie,
        onInteraction: k,
        paginationStatus: j,
        onArrowClick: s,
        onClick: M
    }), t[36] = u, t[37] = b, t[38] = s, t[39] = A, t[40] = ie, t[41] = j, t[42] = M, t[43] = N) : N = t[43], N
}
var $t, en, tn, nn = e((() => {
    $t = k(), qt(), en = t(O()), D(), Zt(), tn = w()
}));

function rn() {
    "use forget";
    let e = (0, ln.c)(25),
        t = p(),
        n;
    e[0] === t ? n = e[1] : (n = () => t ? St(t) : [], e[0] = t, e[1] = n);
    let r = C(n),
        i;
    e[2] === t ? i = e[3] : (i = () => t ? pt(t) : {
        messageId: void 0,
        clientThreadId: void 0
    }, e[2] = t, e[3] = i);
    let {
        messageId: a,
        clientThreadId: o
    } = C(i), s;
    e[4] === t ? s = e[5] : (s = () => t ? P(t).rootMessageId$() != null : !1, e[4] = t, e[5] = s);
    let c = C(s),
        l;
    e[6] === Symbol.for(`react.memo_cache_sentinel`) ? (l = U(), e[6] = l) : l = e[6];
    let u = l;
    if (!t || !a || r.length === 0) return null;
    let f;
    e[7] !== t || e[8] !== c || e[9] !== a ? (f = (0, Y.jsx)(`h3`, {
        className: `mb-4`,
        children: u && !c ? (0, Y.jsxs)(`button`, {
            type: `button`,
            className: `text-token-text-primary text-heading-3 flex w-fit items-center text-start font-medium`,
            onClick: () => an(t, a),
            children: [(0, Y.jsx)(`span`, {
                children: (0, Y.jsx)(E, {
                    ...un.exploreMoreTitle
                })
            }), (0, Y.jsx)(d.ChevronRight, {
                "aria-hidden": `true`,
                className: `icon ms-1 shrink-0`
            })]
        }) : (0, Y.jsx)(`span`, {
            className: `text-token-text-primary text-heading-3 font-medium`,
            children: (0, Y.jsx)(E, {
                ...un.exploreMoreTitle
            })
        })
    }), e[7] = t, e[8] = c, e[9] = a, e[10] = f) : f = e[10];
    let m;
    if (e[11] !== o || e[12] !== t || e[13] !== a || e[14] !== r) {
        let n;
        e[16] !== o || e[17] !== t || e[18] !== a ? (n = (e, n) => (0, Y.jsxs)(`div`, {
            className: `group group/product-card relative min-w-0 self-start`,
            children: [(0, Y.jsx)(`button`, {
                type: `button`,
                className: `block w-full text-start`,
                onClick: r => on(t, a, e, n, {
                    isImageClick: H(r.target)
                }),
                children: (0, Y.jsx)(cn, {
                    product: e
                })
            }), (0, Y.jsx)(jt, {
                product: e,
                clientThreadId: o,
                messageId: a
            })]
        }, e.id), e[16] = o, e[17] = t, e[18] = a, e[19] = n) : n = e[19], m = r.map(n), e[11] = o, e[12] = t, e[13] = a, e[14] = r, e[15] = m
    } else m = e[15];
    let h;
    e[20] === m ? h = e[21] : (h = (0, Y.jsx)(`div`, {
        className: `grid grid-cols-2 items-start gap-x-2 gap-y-4`,
        children: m
    }), e[20] = m, e[21] = h);
    let g;
    return e[22] !== f || e[23] !== h ? (g = (0, Y.jsx)(`div`, {
        className: `mt-2 px-5`,
        children: (0, Y.jsxs)(`div`, {
            className: `border-token-border-light border-t pt-6`,
            children: [f, h]
        })
    }), e[22] = f, e[23] = h, e[24] = g) : g = e[24], g
}

function an(e, t) {
    if (!U()) return;
    let n = pt(e).turnIndex;
    P(e).open$({
        rootMessageId: t,
        originTurnIndex: n ?? 0
    })
}

function on(e, t, n, r, i) {
    sn(e, t, n);
    let a = pt(e);
    if (Be(n, {
            clientThreadId: a.clientThreadId,
            messageId: t,
            contentReferenceStartIndex: 0,
            contentReferenceType: Me.Products,
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
        s = te(),
        c = l(),
        u = c ? s.rooms$().get(c) : null;
    if (u != null && s.hasAccess) {
        s.openThreadSidebar$(u, o);
        return
    }
    le(e, o)
}

function sn(e, t, n) {
    let r = pt(e),
        i = ye(e),
        a = ct(e),
        o = F(i, `product`) || F(i, `product_agent`) ? i.contentReferenceStartIndex : void 0;
    ue({
        clientThreadId: r.clientThreadId,
        messageId: t,
        turnIndex: r.turnIndex,
        contentReferenceStartIndex: o,
        surfaceLocation: ae.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
        entityAffordance: ve.CHATGPT_ENTITY_AFFORDANCE_PRODUCT_CARD,
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
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = S(`2128165686`).get(`image_fit`, ``), t[0] = r) : r = t[0];
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
        ..._e,
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
    ln = k(), oe(), B(), r(), f(), re(), o(), pe(), j(), Te(), L(), Qe(), ce(), W(), At(), v(), ee(), I(), D(), Ee(), Y = w(), un = T({
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
        d = A(),
        f;
    t[0] === d ? f = t[1] : (f = d.formatMessage({
        id: `products.detailsFollowUpButton.label`,
        defaultMessage: `Follow up`
    }), t[0] = d, t[1] = f);
    let p = f,
        m;
    t[2] !== s || t[3] !== a || t[4] !== r || t[5] !== o || t[6] !== u || t[7] !== i || t[8] !== l || t[9] !== c ? (m = () => {
        r && z(a), M(a, i, {
            messageId: o,
            turnIndex: c,
            contentReferenceStartIndex: s,
            productIndex: l,
            contentReferenceType: Me.ProductEntity
        }, Pe.CHATGPT_PRODUCT_FOLLOW_UP_INTERACTION_SURFACE_FOLLOW_UP_BUTTON), u?.()
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
            icon: qe,
            label: p,
            contentWrapperClassName: `gap-2`,
            className: `corner-superellipse/1.1 shadow-short h-12 cursor-pointer overflow-clip rounded-[28px] border-none px-6 py-7 font-medium active:opacity-100!`,
            onClick: m,
            children: h
        })
    }), t[13] = p, t[14] = m, t[15] = h, t[16] = g) : g = t[16], g
}
var pn, mn, hn = e((() => {
    pn = k(), B(), fe(), g(), Ge(), pe(), ze(), D(), mn = w()
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
    _n = k(), D(), X = w()
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
    Sn = k(), D(), Pt(), Z = w(), Cn = e => {
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
            conversation: u,
            offsetTopMargin: d,
            sidebar: f,
            isModal: p,
            galleryAspect: g,
            interactionSource: _,
            initialVisibleOfferCount: ee,
            onFollowUp: te
        } = e,
        v = d !== void 0 && d,
        b = p !== void 0 && p,
        re;
    t[0] === u ? re = t[1] : (re = () => pt(u), t[0] = u, t[1] = re);
    let w = C(re),
        T;
    t[2] === w ? T = t[3] : (T = {
        ...w,
        isGenui: !0
    }, t[2] = w, t[3] = T);
    let D = Ae(T),
        [O, k] = (0, Q.useState)(null),
        [A, ie] = (0, Q.useState)(!1),
        [j, M] = (0, Q.useState)(!1),
        [P, F] = (0, Q.useState)(!1),
        [oe, se] = (0, Q.useState)(!1),
        ce = Pn(),
        {
            showDebugConversationTurns: le
        } = Oe(),
        ue = f?.type === `product_agent` && f.publicEntityShareId != null,
        fe = !ue && ce?.persist_conversation_to_user === !0,
        pe = (0, Q.use)(Se),
        me = (0, Q.useRef)(null),
        he = (0, Q.useRef)(null),
        ge = (0, Q.useRef)(null),
        [_e, ve] = (0, Q.useState)(null),
        ye;
    t[4] === i ? ye = t[5] : (ye = c(i) ?? i, t[4] = i, t[5] = ye);
    let I = ye,
        Te = y(),
        Ee;
    t[6] !== u.id || t[7] !== Te ? (Ee = c(u.id) ?? Te, t[6] = u.id, t[7] = Te, t[8] = Ee) : Ee = t[8];
    let L = Ee,
        R = x(`3375735072`),
        z;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (z = we(), t[9] = z) : z = t[9];
    let Me = z,
        Pe;
    t[10] !== u || t[11] !== r ? (Pe = () => {
        let e = lt(u),
            t = e === `enriched` ? ht(u) : null,
            n = Ct(u),
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
    }, t[10] = u, t[11] = r, t[12] = Pe) : Pe = t[12];
    let {
        productDetailDataScope: B,
        resolvedProductDetailData: Le,
        statefulProduct: V,
        renderedOffers: ze,
        hasStreamedEntityOffers: H
    } = C(Pe), Be, He;
    if (t[13] !== B) {
        let e = B === `enriched` ? S(`2128165686`) : void 0;
        Be = e?.get(`disable_sidebar_what_to_know`, !1) ?? !1, He = e?.get(`disable_sidebar_reviews`, !1) ?? !1, t[13] = B, t[14] = Be, t[15] = He
    } else Be = t[14], He = t[15];
    let Ue = He,
        We;
    t[16] === u ? We = t[17] : (We = () => ({
        productRationale: ft(u),
        isLoadingReviewsOrRationale: gt(u)
    }), t[16] = u, t[17] = We);
    let {
        productRationale: Ge,
        isLoadingReviewsOrRationale: Ke
    } = C(We), qe = !Be && !!(Ge?.rationale || Ke), Ye;
    t[18] === u ? Ye = t[19] : (Ye = () => ot(u), t[18] = u, t[19] = Ye);
    let Qe = C(Ye),
        $e;
    t[20] === u ? $e = t[21] : ($e = () => yt(u), t[20] = u, t[21] = $e);
    let et = C($e),
        tt;
    t[22] === u ? tt = t[23] : (tt = () => xt(u), t[22] = u, t[23] = tt);
    let rt = C(tt),
        at;
    t[24] === u ? at = t[25] : (at = () => ut(u), t[24] = u, t[25] = at);
    let ct = C(at),
        _t;
    t[26] === u ? _t = t[27] : (_t = () => vt(u), t[26] = u, t[27] = _t);
    let bt = C(_t),
        St;
    t[28] === u ? St = t[29] : (St = () => st(u), t[28] = u, t[29] = St);
    let Tt = C(St),
        Et;
    t[30] === u ? Et = t[31] : (Et = () => {
        let e = Ct(u)?.product;
        return {
            productImageUrls: dt(u),
            isGeneratingTryOn: e != null && wt(u, e.id)
        }
    }, t[30] = u, t[31] = Et);
    let {
        productImageUrls: U,
        isGeneratingTryOn: Ot
    } = C(Et), W = f?.type === `product_agent` || f?.type === `entity` ? f.pinnedImage : void 0, G = W?.content_url || W?.thumbnail_url, At;
    t[32] !== W?.content_url || t[33] !== W?.thumbnail_url || t[34] !== G || t[35] !== U ? (At = G ? [G, ...U.filter(e => e !== W?.content_url && e !== W?.thumbnail_url)] : U, t[32] = W?.content_url, t[33] = W?.thumbnail_url, t[34] = G, t[35] = U, t[36] = At) : At = t[36];
    let jt = At,
        Pt;
    t[37] === V ? Pt = t[38] : (Pt = Re(V), t[37] = V, t[38] = Pt);
    let Ft = Pt,
        Lt = B === `enriched` && (V.shopping_vto?.eligible ?? r.shopping_vto?.eligible ?? !1),
        [K] = (0, Q.useState)(Dn),
        zt, Vt;
    t[39] !== u || t[40] !== I || t[41] !== a || t[42] !== r ? (zt = () => Ze({
        conversation: u,
        shellProduct: r,
        conversationId: I,
        messageId: a
    }), Vt = [u, r, I, a], t[39] = u, t[40] = I, t[41] = a, t[42] = r, t[43] = zt, t[44] = Vt) : (zt = t[43], Vt = t[44]), (0, Q.useEffect)(zt, Vt);
    let Ht, Ut;
    t[45] !== u || t[46] !== I || t[47] !== a || t[48] !== fe || t[49] !== r || t[50] !== V ? (Ht = () => {
        nt({
            conversation: u,
            shellProduct: r,
            statefulProduct: V,
            conversationId: I,
            messageId: a,
            persistConversationToUser: fe
        })
    }, Ut = [u, I, a, fe, r, V], t[45] = u, t[46] = I, t[47] = a, t[48] = fe, t[49] = r, t[50] = V, t[51] = Ht, t[52] = Ut) : (Ht = t[51], Ut = t[52]), (0, Q.useEffect)(Ht, Ut);
    let Wt, q;
    t[53] === Symbol.for(`react.memo_cache_sentinel`) ? (Wt = () => {
        let e = ge.current;
        if (!e) return;
        let t = () => {
            ve(e.getBoundingClientRect().height)
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
    t[55] !== i || t[56] !== o || t[57] !== u || t[58] !== a || t[59] !== B || t[60] !== D ? (Kt = () => ne(() => {
        let e = ht(u)?.product;
        e && !J.current && (J.current = !0, Ie({
            clientThreadId: i,
            messageId: a,
            contentReferenceStartIndex: o,
            product: e,
            source: B === `source_catalog` ? N.CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_SOURCE_CATALOG : N.CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_ENRICHED
        }), D(`Product Sidebar Entity Loaded`, `product_sidebar_entity_loaded`, `product_entity`, {
            ...e.analytics_meta ?? {},
            product_event_uuid: e.product_event_uuid
        }))
    }), qt = [i, o, u, a, B, D], t[55] = i, t[56] = o, t[57] = u, t[58] = a, t[59] = B, t[60] = D, t[61] = Kt, t[62] = qt) : (Kt = t[61], qt = t[62]), (0, Q.useEffect)(Kt, qt);
    let Jt;
    t[63] !== _ || t[64] !== B || t[65] !== Le || t[66] !== r || t[67] !== V || t[68] !== D ? (Jt = () => {
        if (B === `source_catalog` && Le == null) return;
        let e = B === `source_catalog` ? V : r;
        if (Gt.current === e.id) return;
        Gt.current = e.id;
        let t = jn(e, _),
            n = [t.offer_url, t.product_url, t.site_url, t.merchant_url].find(En);
        D(`Product Detail Shown`, `product_detail_shown`, `product_entity`, t, void 0, t => Ce(`product_detail_shown`, `detail_shown`, t, {
            productId: e.id,
            interactionSource: _,
            url: n
        }))
    }, t[63] = _, t[64] = B, t[65] = Le, t[66] = r, t[67] = V, t[68] = D, t[69] = Jt) : Jt = t[69];
    let Yt;
    t[70] !== i || t[71] !== o || t[72] !== _ || t[73] !== a || t[74] !== L || t[75] !== B || t[76] !== Le || t[77] !== r || t[78] !== V || t[79] !== D || t[80] !== s ? (Yt = [i, o, _, a, L, B, Le, r, V, D, s], t[70] = i, t[71] = o, t[72] = _, t[73] = a, t[74] = L, t[75] = B, t[76] = Le, t[77] = r, t[78] = V, t[79] = D, t[80] = s, t[81] = Yt) : Yt = t[81], (0, Q.useEffect)(Jt, Yt);
    let Xt;
    t[82] !== B || t[83] !== V ? (Xt = B === `enriched` ? V.variants ?? [] : [], t[82] = B, t[83] = V, t[84] = Xt) : Xt = t[84];
    let Zt = Xt,
        $t;
    t[85] === V ? $t = t[86] : ($t = e => ke(V, e), t[85] = V, t[86] = $t);
    let en = $t,
        tn;
    if (t[87] !== U || t[88] !== V) {
        tn = [];
        for (let e of U) {
            let t = Ve(e, ke(V, e));
            t != null && tn.push(t)
        }
        t[87] = U, t[88] = V, t[89] = tn
    } else tn = t[89];
    let nn = tn,
        an = Fe(nn),
        on;
    t[90] !== nn || t[91] !== an ? (on = e => {
        let t = Ve(e);
        if (t == null) return e;
        let n = nn.findIndex(e => e.asset_pointer === t.asset_pointer);
        return an[n]?.data?.url ?? null
    }, t[90] = nn, t[91] = an, t[92] = on) : on = t[92];
    let sn = on,
        cn;
    t[93] !== w.isGenui || t[94] !== i || t[95] !== o || t[96] !== jt || t[97] !== a || t[98] !== W?.url || t[99] !== G || t[100] !== sn || t[101] !== r || t[102] !== V || t[103] !== s ? (cn = (e, t) => {
        let n = jt[e];
        De({
            clientThreadId: i,
            messageId: a,
            turnIndex: s,
            contentReferenceStartIndex: o,
            surfaceLocation: ae.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
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
            url: n === G ? W?.url : V.url ?? r.url,
            contentUrl: n ? sn(n) : void 0,
            isVirtualTryOnImage: Ne(V, n)
        })
    }, t[93] = w.isGenui, t[94] = i, t[95] = o, t[96] = jt, t[97] = a, t[98] = W?.url, t[99] = G, t[100] = sn, t[101] = r, t[102] = V, t[103] = s, t[104] = cn) : cn = t[104];
    let ln = cn,
        Y;
    t[105] !== w || t[106] !== o || t[107] !== I || t[108] !== bt || t[109] !== jt || t[110] !== a || t[111] !== pe || t[112] !== W || t[113] !== G || t[114] !== l || t[115] !== sn || t[116] !== r || t[117] !== V ? (Y = e => {
        if (pe == null) return;
        let t = jt.map(e => ({
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
            let t = ke(V, r) ?? {
                    width: 0,
                    height: 0
                },
                o = W && r === G ? {
                    ...W,
                    show_url: !0
                } : {
                    url: a,
                    content_url: a,
                    thumbnail_url: a,
                    title: bt,
                    content_size: t,
                    thumbnail_size: t,
                    is_proxied_image: Ve(r) != null
                };
            Ne(V, r) && i.push(n.length), n.push(o), r === e && (s = o)
        }
        s != null && (pe({
            image: s,
            source: de.ImageGroup,
            analyticsMetadata: w,
            contentReferenceStartIndex: o,
            productIndex: l,
            imageResults: n,
            engagementMetadata: {
                virtualTryOnImageIndices: i,
                contentReferenceType: `product_entity`,
                pageUrl: V.url ?? r.url ?? null,
                parentContext: {
                    entityId: be(r, a, o),
                    entityCategory: `product`,
                    contentReferenceStartIndex: o,
                    messageId: a
                }
            }
        }), (Re(V).includes(e) || Re(r).includes(e)) && Je({
            productId: V.id,
            conversationId: I,
            messageId: a
        }, `product_detail`))
    }, t[105] = w, t[106] = o, t[107] = I, t[108] = bt, t[109] = jt, t[110] = a, t[111] = pe, t[112] = W, t[113] = G, t[114] = l, t[115] = sn, t[116] = r, t[117] = V, t[118] = Y) : Y = t[118];
    let un = Y,
        dn = kt({
            isCheckoutEnabled: R,
            isClearingVariantSelection: P,
            isLoadingProductEntity: rt
        }),
        pn = ct === `success` || ct === `error`,
        mn;
    t[119] !== pn || t[120] !== H || t[121] !== B || t[122] !== ze || t[123] !== r.offers ? (mn = B === `source_catalog` || H ? ze : pn ? r.offers ?? [] : [], t[119] = pn, t[120] = H, t[121] = B, t[122] = ze, t[123] = r.offers, t[124] = mn) : mn = t[124];
    let hn = mn,
        _n = hn.length > 1,
        X = H && ct === `success`,
        vn;
    t[125] !== u || t[126] !== X || t[127] !== H || t[128] !== a || t[129] !== K || t[130] !== r.id || t[131] !== r.query || t[132] !== r.title ? (vn = () => {
        K.reset({
            conversation: u,
            messageId: a,
            productKey: r.id || r.query || r.title
        }), K.logRenderOfferTimings(H, X, !0)
    }, t[125] = u, t[126] = X, t[127] = H, t[128] = a, t[129] = K, t[130] = r.id, t[131] = r.query, t[132] = r.title, t[133] = vn) : vn = t[133];
    let yn = (0, Q.useEffectEvent)(vn),
        bn;
    t[134] === yn ? bn = t[135] : (bn = () => {
        yn()
    }, t[134] = yn, t[135] = bn);
    let xn;
    t[136] !== K || t[137] !== r.id ? (xn = [K, r.id], t[136] = K, t[137] = r.id, t[138] = xn) : xn = t[138], (0, Q.useEffect)(bn, xn);
    let Sn, Z;
    t[139] !== X || t[140] !== H || t[141] !== K ? (Sn = () => {
        K.logRenderOfferTimings(H, X)
    }, Z = [X, H, K], t[139] = X, t[140] = H, t[141] = K, t[142] = Sn, t[143] = Z) : (Sn = t[142], Z = t[143]), (0, Q.useEffect)(Sn, Z);
    let wn;
    t[144] === u ? wn = t[145] : (wn = () => {
        let e = me.current,
            t = he.current;
        if (!e || !t) return;
        let n = () => {
            let n = e.getBoundingClientRect().top,
                r = t.getBoundingClientRect().bottom;
            return Math.max(0, Math.floor(r - n))
        };
        if (typeof ResizeObserver > `u`) {
            it(u, n());
            return
        }
        it(u, -1);
        let r = new ResizeObserver(() => {
            it(u, n())
        });
        return r.observe(e), r.observe(t), it(u, n()), () => {
            r.disconnect()
        }
    }, t[144] = u, t[145] = wn);
    let Tn;
    t[146] !== u || t[147] !== ct || t[148] !== U.length ? (Tn = [u, ct, U.length], t[146] = u, t[147] = ct, t[148] = U.length, t[149] = Tn) : Tn = t[149], (0, Q.useEffect)(wn, Tn);
    let kn = f && (ue || L) && Tt;
    if (B === `source_catalog` && Le == null) {
        let e = v ? `bg-surface-primary` : `bg-token-bg-primary`,
            i;
        t[150] === e ? i = t[151] : (i = m(`flex min-h-screen w-full flex-col gap-4 px-6 pt-8`, e), t[150] = e, t[151] = i);
        let o;
        t[152] !== u || t[153] !== I || t[154] !== a || t[155] !== ct || t[156] !== r ? (o = ct === `error` ? (0, $.jsxs)(`div`, {
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
                    mt({
                        conversation: u,
                        shellProduct: r,
                        conversationId: I,
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
        }), t[152] = u, t[153] = I, t[154] = a, t[155] = ct, t[156] = r, t[157] = o) : o = t[157];
        let s;
        return t[158] !== rt || t[159] !== i || t[160] !== o ? (s = (0, $.jsx)(`div`, {
            className: i,
            "aria-busy": rt,
            children: o
        }), t[158] = rt, t[159] = i, t[160] = o, t[161] = s) : s = t[161], s
    }
    let An = v ? `bg-surface-primary` : `bg-token-bg-primary`,
        Fn = v ? `mt-[calc(var(--threadFlyOut-leading-height,var(--product-flyout-sticky-header-height))*-1)] min-h-screen` : `mt-0`,
        In;
    t[162] !== An || t[163] !== Fn ? (In = m(`flex w-full flex-col`, An, Fn), t[162] = An, t[163] = Fn, t[164] = In) : In = t[164];
    let Ln = `${V.id}:${jt[0]??``}`,
        Rn;
    t[165] !== en || t[166] !== W || t[167] !== G || t[168] !== V.title ? (Rn = (e, t) => (0, $.jsx)(Mn, {
        src: e,
        onLoad: t,
        title: e === G && W ? W.title : V.title,
        assetPointerDimensions: en(e)
    }), t[165] = en, t[166] = W, t[167] = G, t[168] = V.title, t[169] = Rn) : Rn = t[169];
    let zn;
    t[170] !== I || t[171] !== a || t[172] !== V.id ? (zn = () => {
        Xe({
            productId: V.id,
            conversationId: I,
            messageId: a
        }, `product_detail`)
    }, t[170] = I, t[171] = a, t[172] = V.id, t[173] = zn) : zn = t[173];
    let Bn;
    t[174] === ln ? Bn = t[175] : (Bn = (e, t) => {
        ln(t, e === `next` ? xe.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_NEXT_BUTTON : xe.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_PREVIOUS_BUTTON)
    }, t[174] = ln, t[175] = Bn);
    let Vn;
    t[176] !== ln || t[177] !== un ? (Vn = (e, t) => {
        ln(t, xe.CHATGPT_IMAGE_AFFORDANCE_PRODUCT_DETAIL_IMAGE), un(e)
    }, t[176] = ln, t[177] = un, t[178] = Vn) : Vn = t[178];
    let Hn;
    t[179] !== g || t[180] !== jt || t[181] !== Ft || t[182] !== Ot || t[183] !== Ln || t[184] !== Rn || t[185] !== zn || t[186] !== Bn || t[187] !== Vn ? (Hn = (0, $.jsx)(`div`, {
        ref: he,
        children: (0, $.jsx)(Qt, {
            aspect: g,
            imageUrls: jt,
            generatedImageUrls: Ft,
            isGenerating: Ot,
            renderImage: Rn,
            onGeneratedImageViewed: zn,
            onArrowClick: Bn,
            onClick: Vn
        }, Ln)
    }), t[179] = g, t[180] = jt, t[181] = Ft, t[182] = Ot, t[183] = Ln, t[184] = Rn, t[185] = zn, t[186] = Bn, t[187] = Vn, t[188] = Hn) : Hn = t[188];
    let Un;
    t[189] === _e ? Un = t[190] : (Un = _e == null ? void 0 : {
        height: _e
    }, t[189] = _e, t[190] = Un);
    let Wn;
    t[191] === Symbol.for(`react.memo_cache_sentinel`) ? (Wn = {
        duration: .2,
        ease: `easeInOut`
    }, t[191] = Wn) : Wn = t[191];
    let Gn;
    t[192] === bt ? Gn = t[193] : (Gn = (0, $.jsx)(`h2`, {
        ref: ge,
        className: `text-xl`,
        children: bt
    }), t[192] = bt, t[193] = Gn);
    let Kn;
    t[194] !== Un || t[195] !== Gn ? (Kn = (0, $.jsx)(h.div, {
        className: `overflow-hidden`,
        initial: !1,
        animate: Un,
        transition: Wn,
        children: Gn
    }), t[194] = Un, t[195] = Gn, t[196] = Kn) : Kn = t[196];
    let qn;
    t[197] === V ? qn = t[198] : (qn = (0, $.jsx)(Mt, {
        product: V,
        wrapperClass: `text-token-text-primary mt-1 inline-flex items-center gap-1 text-base leading-5 font-normal`,
        includeMidDelimiter: !0,
        includeNum: !0
    }), t[197] = V, t[198] = qn);
    let Jn;
    t[199] !== Kn || t[200] !== qn ? (Jn = (0, $.jsxs)(`div`, {
        className: `flex flex-col px-6 pt-4`,
        children: [Kn, qn]
    }), t[199] = Kn, t[200] = qn, t[201] = Jn) : Jn = t[201];
    let Yn;
    t[202] !== Me || t[203] !== V.price_history ? (Yn = Me && V.price_history && (0, $.jsx)(gn, {
        priceHistory: V.price_history
    }), t[202] = Me, t[203] = V.price_history, t[204] = Yn) : Yn = t[204];
    let Xn;
    t[205] !== u || t[206] !== A || t[207] !== R || t[208] !== j || t[209] !== l || t[210] !== r || t[211] !== V || t[212] !== D || t[213] !== Zt ? (Xn = R && Zt.length > 0 && (0, $.jsx)(`div`, {
        className: m(`px-5 pt-4 pb-2`, j && `pointer-events-none opacity-50`),
        "aria-busy": j,
        children: (0, $.jsx)(Bt, {
            options: Zt,
            showErrors: A,
            updateOption: (e, t, n) => On({
                optionGroupId: e,
                selectedId: t,
                variant_index: n,
                conversation: u,
                shellProduct: r,
                statefulProduct: V,
                setIsSwitchingVariant: M,
                setIsClearingVariantSelection: F,
                setSuppressOfferAnimations: se,
                setError: k,
                trackContentReferenceEvent: D,
                productIndex: l,
                productId: r.id
            })
        })
    }), t[205] = u, t[206] = A, t[207] = R, t[208] = j, t[209] = l, t[210] = r, t[211] = V, t[212] = D, t[213] = Zt, t[214] = Xn) : Xn = t[214];
    let Zn;
    t[215] === O ? Zn = t[216] : (Zn = O && (0, $.jsx)(`div`, {
        className: `text-token-interactive-label-danger-secondary-default text-center`,
        children: O
    }), t[215] = O, t[216] = Zn);
    let Qn;
    t[217] !== R || t[218] !== U || t[219] !== V.image_urls ? (Qn = R ? V.image_urls ?? [] : U, t[217] = R, t[218] = U, t[219] = V.image_urls, t[220] = Qn) : Qn = t[220];
    let $n = B === `source_catalog` || qe,
        er;
    t[221] === Symbol.for(`react.memo_cache_sentinel`) ? (er = () => ie(!0), t[221] = er) : er = t[221];
    let tr;
    t[222] !== o || t[223] !== u || t[224] !== ee || t[225] !== _ || t[226] !== hn || t[227] !== dn || t[228] !== l || t[229] !== _n || t[230] !== V || t[231] !== oe || t[232] !== Qn || t[233] !== $n || t[234] !== D ? (tr = (0, $.jsx)(It, {
        className: `flex flex-col px-5 pt-3`,
        offers: hn,
        conversation: u,
        contentReferenceStartIndex: o,
        productIndex: l,
        product: V,
        trackContentReferenceEvent: D,
        imageUrls: Qn,
        isLoading: dn,
        suppressOfferAnimations: oe,
        showBestPriceOfferTag: _n,
        showBottomBorder: $n,
        onOpenCheckout: er,
        interactionSource: _,
        initialVisibleOfferCount: ee
    }), t[222] = o, t[223] = u, t[224] = ee, t[225] = _, t[226] = hn, t[227] = dn, t[228] = l, t[229] = _n, t[230] = V, t[231] = oe, t[232] = Qn, t[233] = $n, t[234] = D, t[235] = tr) : tr = t[235];
    let nr;
    t[236] !== Ue || t[237] !== Be || t[238] !== Ke || t[239] !== a || t[240] !== B || t[241] !== Ge || t[242] !== Qe || t[243] !== K || t[244] !== V || t[245] !== D ? (nr = B === `source_catalog` ? (0, $.jsx)(Cn, {
        product: V
    }) : (0, $.jsxs)(`div`, {
        className: `flex flex-col bg-inherit`,
        children: [!Be && (0, $.jsx)(Nt, {
            contentReference: Ge,
            trackContentReferenceEvent: D,
            disableAnimation: !!(Ge || Qe),
            isLoading: Ke,
            productAnalyticsMeta: V.analytics_meta ?? void 0,
            productEventUuid: V.product_event_uuid ?? void 0,
            renderProfiler: K
        }), !Ue && (0, $.jsx)(Rt, {
            contentReference: Qe,
            messageId: a,
            trackContentReferenceEvent: D,
            disableAnimation: !!(Ge || Qe),
            productAnalyticsMeta: V.analytics_meta ?? void 0,
            productEventUuid: V.product_event_uuid ?? void 0,
            renderProfiler: K
        })]
    }), t[236] = Ue, t[237] = Be, t[238] = Ke, t[239] = a, t[240] = B, t[241] = Ge, t[242] = Qe, t[243] = K, t[244] = V, t[245] = D, t[246] = nr) : nr = t[246];
    let rr;
    t[247] === Symbol.for(`react.memo_cache_sentinel`) ? (rr = (0, $.jsx)(rn, {}), t[247] = rr) : rr = t[247];
    let ir;
    t[248] !== o || t[249] !== u || t[250] !== Lt || t[251] !== a || t[252] !== U || t[253] !== l || t[254] !== r.shopping_vto || t[255] !== V || t[256] !== s ? (ir = Lt && (0, $.jsx)(Dt, {
        contentReferenceStartIndex: o,
        conversation: u,
        messageId: a,
        product: {
            ...V,
            image_urls: U,
            shopping_vto: V.shopping_vto == null ? r.shopping_vto : {
                ...V.shopping_vto,
                generated_images: je(V.shopping_vto.generated_images ?? [], r.shopping_vto?.generated_images ?? [])
            }
        },
        productIndex: l,
        turnIndex: s
    }), t[248] = o, t[249] = u, t[250] = Lt, t[251] = a, t[252] = U, t[253] = l, t[254] = r.shopping_vto, t[255] = V, t[256] = s, t[257] = ir) : ir = t[257];
    let ar;
    t[258] !== o || t[259] !== u || t[260] !== b || t[261] !== ue || t[262] !== a || t[263] !== te || t[264] !== l || t[265] !== kn || t[266] !== V || t[267] !== s ? (ar = kn && (0, $.jsx)(`div`, {
        className: `flex justify-end px-6 pt-16 pb-6`,
        children: (0, $.jsx)(fn, {
            conversation: u,
            messageId: ue ? void 0 : a,
            contentReferenceStartIndex: o,
            turnIndex: s,
            productIndex: l,
            product: V,
            isModal: b,
            onFollowUp: te
        })
    }), t[258] = o, t[259] = u, t[260] = b, t[261] = ue, t[262] = a, t[263] = te, t[264] = l, t[265] = kn, t[266] = V, t[267] = s, t[268] = ar) : ar = t[268];
    let or;
    t[269] !== et || t[270] !== le ? (or = !1, t[269] = et, t[270] = le, t[271] = or) : or = t[271];
    let sr;
    return t[272] !== In || t[273] !== Hn || t[274] !== Jn || t[275] !== Yn || t[276] !== Xn || t[277] !== Zn || t[278] !== tr || t[279] !== nr || t[280] !== ir || t[281] !== ar || t[282] !== or ? (sr = (0, $.jsxs)(`div`, {
        ref: me,
        className: In,
        children: [Hn, Jn, Yn, Xn, Zn, tr, nr, rr, ir, ar, or]
    }), t[272] = In, t[273] = Hn, t[274] = Jn, t[275] = Yn, t[276] = Xn, t[277] = Zn, t[278] = tr, t[279] = nr, t[280] = ir, t[281] = ar, t[282] = or, t[283] = sr) : sr = t[283], sr
}

function En(e) {
    return typeof e == `string` && e !== ``
}

function Dn() {
    return new rt
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
    o(!0), s(m), c(m || !h), bt({
        conversation: r,
        shellProduct: i,
        updatedVariants: g,
        variantOptionsQuery: _,
        optionGroupId: e,
        productLookupKey: v
    });
    let y = !1,
        b = (e, t) => {
            y = !0, _t({
                conversation: r,
                shellProduct: i,
                nextProduct: e,
                productLookupKey: t ?? e.product_lookup_key ?? {},
                hasFetchedVariant: te
            })
        };
    try {
        if (m)
            for await (let e of tt({
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
                let e = (await $e({
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
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = m(`h-full w-full cursor-zoom-in object-contain mix-blend-darken dark:mix-blend-lighten`), t[0] = o) : o = t[0];
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
    Nn = k(), R(), oe(), Ue(), B(), g(), ie(), Le(), me(), he(), nn(), Tt(), Et(), Ye(), L(), Ot(), Te(), ge(), at(), et(), Qe(), V(), v(), _(), a(), ee(), I(), se(), b(), i(), Q = t(O()), D(), dn(), hn(), Ee(), Vt(), vn(), K(), Ft(), Lt(), wn(), G(), $ = w(), Pn = () => void 0
}));
export {
    Fn as n, Tn as t
};
//# sourceMappingURL=ecdd5ba5-h8dezdl50sksysis.js.map