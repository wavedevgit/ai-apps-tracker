import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    $m as r,
    A8 as i,
    At as a,
    Crt as o,
    Da as s,
    Hx as c,
    K5 as l,
    Lw as u,
    QJ as d,
    Qm as f,
    Rw as p,
    Srt as m,
    Vx as h,
    _rt as g,
    ap as _,
    bF as v,
    cn as ee,
    eE as y,
    eY as b,
    ip as x,
    j5 as S,
    ka as te,
    n5 as C,
    q5 as ne,
    vF as re
} from "./4813494d-mdvd4786a87166cc.js";
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
    $ft as ie,
    $jn as ae,
    ALn as j,
    D3 as M,
    Fgt as oe,
    HIn as se,
    I3 as N,
    L3 as ce,
    N3 as le,
    Nft as ue,
    Pft as de,
    Pgt as fe,
    Rft as pe,
    Stn as me,
    XIn as he,
    Xut as ge,
    YIn as _e,
    Zut as ve,
    _mt as ye,
    _pt as be,
    aSn as xe,
    btn as Se,
    cmt as Ce,
    dLn as we,
    eLn as Te,
    eMn as Ee,
    ept as P,
    glt as De,
    gmt as Oe,
    gpt as ke,
    hmt as Ae,
    ipt as je,
    kLn as F,
    lmt as I,
    nAn as L,
    oMn as R,
    pmt as Me,
    qIn as Ne,
    rAn as z,
    sSn as Pe,
    tAn as Fe,
    tMn as Ie,
    uLn as Le,
    umt as Re,
    vlt as ze,
    vmt as Be,
    w3 as B,
    ymt as Ve
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    bC as V,
    bh as He,
    xC as Ue,
    xh as We
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    $r as Ge,
    Wr as Ke,
    ei as qe
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    A as Je,
    C as Ye,
    F as Xe,
    I as Ze,
    L as Qe,
    M as $e,
    N as et,
    O as tt,
    P as nt,
    _ as rt,
    a as it,
    b as at,
    c as ot,
    d as st,
    f as ct,
    h as lt,
    i as ut,
    j as dt,
    l as ft,
    m as pt,
    n as mt,
    o as ht,
    p as gt,
    t as _t,
    u as vt,
    v as yt,
    y as bt
} from "./2b67bcd8-2ytvs8gol6tuyvxs.js";
import {
    i as xt,
    n as St
} from "./2da3878c-ciy8z6ly86mmu8wd.js";
import {
    r as Ct,
    t as wt
} from "./58ee18a8-c3tstljbalu65vsj.js";
import {
    c as Tt,
    h as Et,
    l as Dt,
    n as Ot,
    p as kt,
    s as At,
    t as H,
    u as jt
} from "./1362c49f-nwbtgdjfbczptgw9.js";
import {
    a as Mt,
    c as U,
    i as W,
    l as Nt,
    n as Pt,
    o as G,
    r as Ft,
    s as It,
    t as Lt,
    u as Rt
} from "./f4222f0c-d05buw2zp5uhwt0s.js";

function zt(e) {
    "use forget";
    let t = (0, Bt.c)(80),
        {
            images: n,
            initialIndex: r,
            activeIndex: i,
            paginationStatus: a,
            onInteraction: o,
            className: s,
            aspect: c,
            objectPosition: l,
            showDots: d,
            showArrows: f,
            imageClassName: p,
            allowLoop: m,
            onClick: h,
            onArrowClick: g,
            onActiveIndexChange: _
        } = e,
        v = r === void 0 ? 0 : r,
        ee = s === void 0 ? `` : s,
        y = c === void 0 ? `aspect-[16/9]` : c,
        b = l === void 0 ? `object-cover` : l,
        x = d === void 0 || d,
        S = f === void 0 || f,
        te = p === void 0 ? `` : p,
        C = m === void 0 || m,
        [ne, re] = (0, q.useState)(v),
        w = i ?? ne,
        T;
    t[0] !== i || t[1] !== _ ? (T = e => {
        i == null ? re(e) : _?.(e)
    }, t[0] = i, t[1] = _, t[2] = T) : T = t[2];
    let E = T,
        D = (0, q.useEffectEvent)(E),
        [O, k] = (0, q.useState)(!1),
        [ie, ae] = (0, q.useState)(!1),
        j = (0, q.useRef)(null),
        M = A(),
        oe;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (oe = {
        active: !1,
        startX: 0,
        lastX: 0,
        dx: 0,
        width: 1,
        lastTime: 0,
        velocity: 0,
        captured: !1,
        programmaticTargetIndex: null
    }, t[3] = oe) : oe = t[3];
    let se = (0, q.useRef)(oe),
        N = n.length,
        ce = n[w]?.src,
        le;
    t[4] === i ? le = t[5] : (le = () => {
        if (i == null) return;
        let e = j.current;
        e && (se.current.programmaticTargetIndex === i || Math.round(e.scrollLeft / (e.clientWidth || 1)) === i || (se.current.programmaticTargetIndex = i, e.scrollTo({
            left: i * e.clientWidth,
            behavior: `instant`
        })))
    }, t[4] = i, t[5] = le);
    let ue;
    t[6] !== ce || t[7] !== i ? (ue = [i, ce], t[6] = ce, t[7] = i, t[8] = ue) : ue = t[8], (0, q.useEffect)(le, ue);
    let de;
    t[9] !== C || t[10] !== E || t[11] !== N ? (de = (e, t) => {
        let n = t === void 0 ? `smooth` : t,
            r = j.current;
        if (!r) return;
        let i = C ? Ht(e, 0, N - 1) : Vt(e, 0, N - 1),
            a = se.current.width || r.clientWidth || 1;
        se.current.programmaticTargetIndex = i, r.scrollTo({
            left: i * a,
            behavior: n
        }), E(i)
    }, t[9] = C, t[10] = E, t[11] = N, t[12] = de) : de = t[12];
    let fe = de,
        pe, me;
    t[13] === S ? (pe = t[14], me = t[15]) : (pe = () => {
        if (!S) return;
        ae(!0);
        let e = window.setTimeout(() => ae(!1), 2e3);
        return () => window.clearTimeout(e)
    }, me = [S], t[13] = S, t[14] = pe, t[15] = me), (0, q.useEffect)(pe, me);
    let he = O,
        ge = O || ie,
        _e;
    t[16] !== C || t[17] !== N ? (_e = e => C ? Ht(e, 0, N - 1) : Vt(e, 0, N - 1), t[16] = C, t[17] = N, t[18] = _e) : _e = t[18];
    let ve = _e,
        ye;
    t[19] !== o || t[20] !== fe ? (ye = e => {
        o?.(), fe(e, `smooth`)
    }, t[19] = o, t[20] = fe, t[21] = ye) : ye = t[21];
    let be = ye,
        xe;
    t[22] !== be || t[23] !== w || t[24] !== g || t[25] !== ve || t[26] !== N ? (xe = e => {
        if (N <= 1) return;
        let t = ve(e === `next` ? w + 1 : w - 1);
        t !== w && g?.(e, t), be(t)
    }, t[22] = be, t[23] = w, t[24] = g, t[25] = ve, t[26] = N, t[27] = xe) : xe = t[27];
    let Se = xe,
        Ce, we;
    t[28] !== i || t[29] !== w || t[30] !== _ ? (Ce = () => {
        i ?? _?.(w)
    }, we = [i, w, _], t[28] = i, t[29] = w, t[30] = _, t[31] = Ce, t[32] = we) : (Ce = t[31], we = t[32]), (0, q.useEffect)(Ce, we);
    let Te, Ee;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (Te = () => {
        let e = j.current;
        if (!e) return;
        let t = new ResizeObserver(t => {
            for (let n of t) se.current.width = n.contentRect.width || e.clientWidth || 1
        });
        return t.observe(e), se.current.width = e.clientWidth || 1, () => t.disconnect()
    }, Ee = [], t[33] = Te, t[34] = Ee) : (Te = t[33], Ee = t[34]), (0, q.useEffect)(Te, Ee);
    let P;
    t[35] !== w || t[36] !== D || t[37] !== N ? (P = () => {
        let e = j.current;
        if (!e) return;
        let t = () => {
            let t = se.current.width || e.clientWidth || 1,
                n = e.scrollLeft || 0,
                r = n / t,
                i = se.current.programmaticTargetIndex;
            if (i != null) {
                let e = i * t;
                Math.abs(n - e) <= 2 && (se.current.programmaticTargetIndex = null);
                return
            }
            let a = w;
            r > w + .5 ? a = Vt(w + 1, 0, N - 1) : r < w - .5 && (a = Vt(w - 1, 0, N - 1)), a !== w && D(a)
        };
        return e.addEventListener(`scroll`, t, {
            passive: !0
        }), () => e.removeEventListener(`scroll`, t)
    }, t[35] = w, t[36] = D, t[37] = N, t[38] = P) : P = t[38];
    let De;
    t[39] !== w || t[40] !== N ? (De = [N, w], t[39] = w, t[40] = N, t[41] = De) : De = t[41], (0, q.useEffect)(P, De);
    let Oe = `select-none ${ee} relative`,
        ke, Ae;
    t[42] === Symbol.for(`react.memo_cache_sentinel`) ? (ke = () => k(!0), Ae = () => k(!1), t[42] = ke, t[43] = Ae) : (ke = t[42], Ae = t[43]);
    let je = `relative w-full ${y} overflow-clip`,
        F;
    if (t[44] !== te || t[45] !== n || t[46] !== M || t[47] !== b || t[48] !== h) {
        let e;
        t[50] !== te || t[51] !== M || t[52] !== b || t[53] !== h ? (e = (e, t) => (0, J.jsx)(`div`, {
            onClick: () => h?.(e, t),
            role: h ? `button` : void 0,
            tabIndex: h ? 0 : void 0,
            onKeyDown: n => {
                h && (n.key === `Enter` || n.key === ` `) && (n.preventDefault(), h(e, t))
            },
            className: `relative h-full w-full shrink-0 grow-0 basis-full snap-center`,
            children: e.content ? e.content : (0, J.jsx)(`img`, {
                src: e.src,
                alt: e.alt ?? M.formatMessage({
                    id: `wHCsqa`,
                    defaultMessage: `Slide {index}`
                }, {
                    index: t + 1
                }),
                className: `h-full w-full ${b} ${te}`
            })
        }, e.src), t[50] = te, t[51] = M, t[52] = b, t[53] = h, t[54] = e) : e = t[54], F = n.map(e), t[44] = te, t[45] = n, t[46] = M, t[47] = b, t[48] = h, t[49] = F
    } else F = t[49];
    let I;
    t[55] !== o || t[56] !== F ? (I = (0, J.jsx)(`div`, {
        ref: j,
        onScroll: o,
        className: `no-scrollbar flex h-full w-full touch-pan-x touch-pan-y snap-x snap-mandatory overflow-x-scroll scroll-smooth`,
        children: F
    }), t[55] = o, t[56] = F, t[57] = I) : I = t[57];
    let L;
    t[58] !== Se || t[59] !== n.length || t[60] !== M || t[61] !== he || t[62] !== ge || t[63] !== S ? (L = S && n.length > 1 && (0, J.jsxs)(J.Fragment, {
        children: [(0, J.jsx)(K, {
            ariaLabel: M.formatMessage({
                id: `l9pylv`,
                defaultMessage: `Previous slide`
            }),
            onClick: () => Se(`previous`),
            side: `start`,
            visible: he,
            children: (0, J.jsx)(u, {
                className: `icon-md`
            })
        }), (0, J.jsx)(K, {
            ariaLabel: M.formatMessage({
                id: `L0pbQh`,
                defaultMessage: `Next slide`
            }),
            onClick: () => Se(`next`),
            side: `end`,
            visible: ge,
            children: (0, J.jsx)(V, {
                className: `icon-md`
            })
        })]
    }), t[58] = Se, t[59] = n.length, t[60] = M, t[61] = he, t[62] = ge, t[63] = S, t[64] = L) : L = t[64];
    let R;
    t[65] !== je || t[66] !== I || t[67] !== L ? (R = (0, J.jsxs)(`div`, {
        className: je,
        children: [I, L]
    }), t[65] = je, t[66] = I, t[67] = L, t[68] = R) : R = t[68];
    let Me;
    t[69] !== be || t[70] !== n || t[71] !== w || t[72] !== M || t[73] !== a || t[74] !== x ? (Me = a == null ? x && n.length > 1 && n.length <= 20 && (0, J.jsx)(`div`, {
        className: `absolute start-0 end-0 bottom-3 flex items-center justify-center`,
        children: (0, J.jsx)(`div`, {
            className: `flex w-fit items-center justify-center gap-2 rounded-full bg-[#0D0D0D66] bg-clip-padding p-1 backdrop-blur`,
            children: n.map((e, t) => (0, J.jsx)(`button`, {
                type: `button`,
                onClick: () => be(t),
                "aria-label": M.formatMessage({
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
    }), t[69] = be, t[70] = n, t[71] = w, t[72] = M, t[73] = a, t[74] = x, t[75] = Me) : Me = t[75];
    let Ne;
    return t[76] !== Oe || t[77] !== R || t[78] !== Me ? (Ne = (0, J.jsxs)(`div`, {
        className: Oe,
        "aria-roledescription": `carousel`,
        onMouseEnter: ke,
        onMouseLeave: Ae,
        children: [R, Me]
    }), t[76] = Oe, t[77] = R, t[78] = Me, t[79] = Ne) : Ne = t[79], Ne
}

function K(e) {
    "use forget";
    let t = (0, Bt.c)(8),
        {
            ariaLabel: n,
            onClick: r,
            side: i,
            visible: a,
            children: o
        } = e,
        s = i === `start` ? `start-3` : `end-3`,
        c = a ? `opacity-90 pointer-events-auto` : `opacity-0 pointer-events-none`,
        u;
    t[0] !== s || t[1] !== c ? (u = l(`btn-secondary border-token-border-default active:bg-token-bg-tertiary hover:bg-token-bg-primary absolute top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-clip-padding backdrop-blur transition-opacity duration-300 hover:shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)] active:opacity-100!`, c, s), t[0] = s, t[1] = c, t[2] = u) : u = t[2];
    let d;
    return t[3] !== n || t[4] !== o || t[5] !== r || t[6] !== u ? (d = (0, J.jsx)(`button`, {
        "aria-label": n,
        onClick: r,
        className: u,
        children: o
    }), t[3] = n, t[4] = o, t[5] = r, t[6] = u, t[7] = d) : d = t[7], d
}
var Bt, q, J, Vt, Ht, Ut = e((() => {
        Bt = k(), p(), Ue(), ne(), q = t(O()), D(), J = w(), Vt = (e, t, n) => Math.min(Math.max(e, t), n), Ht = (e, t, n) => e > n ? t : e < t ? n : e
    })),
    Wt, Gt, Kt, qt = e((() => {
        Wt = `Z_5WHq_generationStatus`, Gt = `Z_5WHq_generationStatusShimmer`, Kt = {
            generationStatus: Wt,
            generationStatusShimmer: Gt
        }
    }));

function Jt(e) {
    "use forget";
    let t = (0, Yt.c)(44),
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
    let [p, m] = (0, Y.useState)(f), h;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (h = [], t[3] = h) : h = t[3];
    let [g, _] = (0, Y.useState)(h), [v, ee] = (0, Y.useState)(!1), y = (0, Y.useRef)(null), b;
    t[4] !== r || t[5] !== p.url ? (b = r.indexOf(p.url), t[4] = r, t[5] = p.url, t[6] = b) : b = t[6];
    let x = Math.max(0, b),
        S = r[x],
        te;
    t[7] !== S || t[8] !== i || t[9] !== g ? (te = i.includes(S) && g.includes(S), t[7] = S, t[8] = i, t[9] = g, t[10] = te) : te = t[10];
    let C = te,
        ne = (0, Y.useEffectEvent)(l),
        re;
    t[11] !== x || t[12] !== C || t[13] !== ne ? (re = () => {
        C && ne(x)
    }, t[11] = x, t[12] = C, t[13] = ne, t[14] = re) : re = t[14];
    let w;
    t[15] !== S || t[16] !== x || t[17] !== C ? (w = [S, x, C], t[15] = S, t[16] = x, t[17] = C, t[18] = w) : w = t[18], (0, Y.useEffect)(re, w);
    let T, D;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (T = () => () => {
        y.current != null && clearTimeout(y.current)
    }, D = [], t[19] = T, t[20] = D) : (T = t[19], D = t[20]), (0, Y.useEffect)(T, D);
    let O;
    t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (O = () => {
        ee(!0), y.current != null && clearTimeout(y.current), y.current = setTimeout(() => ee(!1), 800)
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
    let ae;
    t[31] !== a || t[32] !== v ? (ae = a && !v ? (0, Xt.jsx)(`span`, {
        role: `status`,
        className: `rounded-full bg-black/25 px-3 py-2.5 text-xs font-medium text-white backdrop-blur-md`,
        children: (0, Xt.jsx)(`span`, {
            className: Kt.generationStatus,
            children: (0, Xt.jsx)(E, {
                id: `chatgpt.shopping.virtual_try_on.product_detail.generation.status`,
                defaultMessage: `Generating try-on`
            })
        })
    }) : void 0, t[31] = a, t[32] = v, t[33] = ae) : ae = t[33];
    let j;
    t[34] === c ? j = t[35] : (j = (e, t) => c(e.src, t), t[34] = c, t[35] = j);
    let M;
    return t[36] !== u || t[37] !== x || t[38] !== s || t[39] !== A || t[40] !== ie || t[41] !== ae || t[42] !== j ? (M = (0, Xt.jsx)(zt, {
        activeIndex: x,
        images: A,
        aspect: u,
        onActiveIndexChange: ie,
        onInteraction: k,
        paginationStatus: ae,
        onArrowClick: s,
        onClick: j
    }), t[36] = u, t[37] = x, t[38] = s, t[39] = A, t[40] = ie, t[41] = ae, t[42] = j, t[43] = M) : M = t[43], M
}
var Yt, Y, Xt, Zt = e((() => {
    Yt = k(), Ut(), Y = t(O()), D(), qt(), Xt = w()
}));

function Qt() {
    "use forget";
    let e = (0, rn.c)(25),
        t = v(),
        n;
    e[0] === t ? n = e[1] : (n = () => t ? yt(t) : [], e[0] = t, e[1] = n);
    let r = S(n),
        i;
    e[2] === t ? i = e[3] : (i = () => t ? ut(t) : {
        messageId: void 0,
        clientThreadId: void 0
    }, e[2] = t, e[3] = i);
    let {
        messageId: a,
        clientThreadId: o
    } = S(i), s;
    e[4] === t ? s = e[5] : (s = () => t ? N(t).rootMessageId$() != null : !1, e[4] = t, e[5] = s);
    let c = S(s),
        l;
    e[6] === Symbol.for(`react.memo_cache_sentinel`) ? (l = At(), e[6] = l) : l = e[6];
    let u = l;
    if (!t || !a || r.length === 0) return null;
    let d;
    e[7] !== t || e[8] !== c || e[9] !== a ? (d = (0, X.jsx)(`h3`, {
        className: `mb-4`,
        children: u && !c ? (0, X.jsxs)(`button`, {
            type: `button`,
            className: `text-token-text-primary text-heading-3 flex w-fit items-center text-start font-medium`,
            onClick: () => $t(t, a),
            children: [(0, X.jsx)(`span`, {
                children: (0, X.jsx)(E, {
                    ...an.exploreMoreTitle
                })
            }), (0, X.jsx)(h.ChevronRight, {
                "aria-hidden": `true`,
                className: `icon ms-1 shrink-0`
            })]
        }) : (0, X.jsx)(`span`, {
            className: `text-token-text-primary text-heading-3 font-medium`,
            children: (0, X.jsx)(E, {
                ...an.exploreMoreTitle
            })
        })
    }), e[7] = t, e[8] = c, e[9] = a, e[10] = d) : d = e[10];
    let f;
    if (e[11] !== o || e[12] !== t || e[13] !== a || e[14] !== r) {
        let n;
        e[16] !== o || e[17] !== t || e[18] !== a ? (n = (e, n) => (0, X.jsxs)(`div`, {
            className: `group group/product-card relative min-w-0 self-start`,
            children: [(0, X.jsx)(`button`, {
                type: `button`,
                className: `block w-full text-start`,
                onClick: () => en(t, a, e, n),
                children: (0, X.jsx)(nn, {
                    product: e
                })
            }), (0, X.jsx)(H, {
                product: e,
                clientThreadId: o,
                messageId: a
            })]
        }, e.id), e[16] = o, e[17] = t, e[18] = a, e[19] = n) : n = e[19], f = r.map(n), e[11] = o, e[12] = t, e[13] = a, e[14] = r, e[15] = f
    } else f = e[15];
    let p;
    e[20] === f ? p = e[21] : (p = (0, X.jsx)(`div`, {
        className: `grid grid-cols-2 items-start gap-x-2 gap-y-4`,
        children: f
    }), e[20] = f, e[21] = p);
    let m;
    return e[22] !== d || e[23] !== p ? (m = (0, X.jsx)(`div`, {
        className: `mt-2 px-5`,
        children: (0, X.jsxs)(`div`, {
            className: `border-token-border-light border-t pt-6`,
            children: [d, p]
        })
    }), e[22] = d, e[23] = p, e[24] = m) : m = e[24], m
}

function $t(e, t) {
    if (!At()) return;
    let n = ut(e).turnIndex;
    N(e).open$({
        rootMessageId: t,
        originTurnIndex: n ?? 0
    })
}

function en(e, t, n, r) {
    tn(e, t, n);
    let i = {
            type: `product_agent`,
            messageId: t,
            product: n,
            contentReferenceStartIndex: 0,
            productIndex: r,
            interactionSource: `browse`
        },
        a = x(),
        o = f(),
        s = o ? a.rooms$().get(o) : null;
    if (s != null && a.hasAccess) {
        a.openThreadSidebar$(s, i);
        return
    }
    he(e, i)
}

function tn(e, t, n) {
    let r = ut(e),
        i = Te(e),
        a = at(e),
        o = _e(i, `product`) || _e(i, `product_agent`) ? i.contentReferenceStartIndex : void 0;
    de({
        clientThreadId: r.clientThreadId,
        messageId: t,
        turnIndex: r.turnIndex,
        contentReferenceStartIndex: o,
        surfaceLocation: ae.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
        entityAffordance: Ee.CHATGPT_ENTITY_AFFORDANCE_PRODUCT_CARD,
        entityId: pe(n, t, o),
        entityCategory: `product`,
        contentReferenceType: `product_entity`,
        isGenui: r.isGenui,
        parentContext: a ? {
            entityId: pe(a, t, o),
            entityCategory: `product`,
            contentReferenceStartIndex: o,
            messageId: t
        } : void 0
    })
}

function nn(e) {
    "use forget";
    let t = (0, rn.c)(16),
        {
            product: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = m(`2128165686`).get(`image_fit`, ``), t[0] = r) : r = t[0];
    let i = r,
        a = i === `contain_all` || i === `product_card` ? i : `default`,
        o = n.image_urls?.[0],
        s = n.offers?.[0]?.price,
        c;
    t[1] !== o || t[2] !== n ? (c = o ? (0, X.jsx)(Oe, {
        src: o,
        assetPointerDimensions: Ce(n, o),
        fitStrategy: a,
        alt: n.title,
        className: `absolute inset-0 m-0 block h-full w-full transition-transform duration-200 group-hover:scale-[1.02]`
    }, o) : null, t[1] = o, t[2] = n, t[3] = c) : c = t[3];
    let l;
    t[4] === c ? l = t[5] : (l = (0, X.jsx)(`div`, {
        className: `bg-tertiary relative aspect-square w-full overflow-hidden rounded-2xl`,
        children: c
    }), t[4] = c, t[5] = l);
    let u;
    t[6] === n.title ? u = t[7] : (u = (0, X.jsx)(`div`, {
        className: `text-token-text-primary line-clamp-2 text-sm leading-5 font-medium`,
        children: n.title
    }), t[6] = n.title, t[7] = u);
    let d;
    t[8] === s ? d = t[9] : (d = s ? (0, X.jsx)(`div`, {
        className: `text-token-text-secondary text-sm leading-5`,
        children: s
    }) : null, t[8] = s, t[9] = d);
    let f;
    t[10] !== u || t[11] !== d ? (f = (0, X.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-1`,
        children: [u, d]
    }), t[10] = u, t[11] = d, t[12] = f) : f = t[12];
    let p;
    return t[13] !== l || t[14] !== f ? (p = (0, X.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-2`,
        children: [l, f]
    }), t[13] = l, t[14] = f, t[15] = p) : p = t[15], p
}
var rn, X, an, on = e((() => {
    rn = k(), ue(), r(), _(), re(), c(), Ne(), I(), Ye(), ce(), Tt(), Ot(), i(), o(), R(), D(), ye(), X = w(), an = T({
        exploreMoreTitle: {
            id: `chatgpt.search.product_details.explore_more.section_title`,
            defaultMessage: `Explore more`
        }
    })
}));

function sn(e) {
    "use forget";
    let t = (0, cn.c)(17),
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
        r && se(a), M(a, i, {
            messageId: o,
            turnIndex: c,
            contentReferenceStartIndex: s,
            productIndex: l,
            contentReferenceType: ie.ProductEntity
        }, z.CHATGPT_PRODUCT_FOLLOW_UP_INTERACTION_SURFACE_FOLLOW_UP_BUTTON), u?.()
    }, t[2] = s, t[3] = a, t[4] = r, t[5] = o, t[6] = u, t[7] = i, t[8] = l, t[9] = c, t[10] = m) : m = t[10];
    let h;
    t[11] === p ? h = t[12] : (h = (0, ln.jsx)(`span`, {
        className: `flex items-center select-none`,
        children: p
    }), t[11] = p, t[12] = h);
    let g;
    return t[13] !== p || t[14] !== m || t[15] !== h ? (g = (0, ln.jsx)(`div`, {
        id: `product-details-follow-up-button`,
        className: `fixed end-7 bottom-10 z-[50] md:bottom-8`,
        children: (0, ln.jsx)(n, {
            size: `large`,
            color: `primary`,
            icon: He,
            label: p,
            contentWrapperClassName: `gap-2`,
            className: `corner-superellipse/1.1 shadow-short h-12 cursor-pointer overflow-clip rounded-[28px] border-none px-6 py-7 font-medium active:opacity-100!`,
            onClick: m,
            children: h
        })
    }), t[13] = p, t[14] = m, t[15] = h, t[16] = g) : g = t[16], g
}
var cn, ln, un = e((() => {
    cn = k(), P(), le(), y(), We(), Ne(), B(), D(), ln = w()
}));

function dn(e) {
    "use forget";
    let t = (0, fn.c)(4),
        {
            priceHistory: n
        } = e,
        r = n.typical_low_price === n.typical_high_price,
        i;
    return t[0] !== r || t[1] !== n.typical_high_price || t[2] !== n.typical_low_price ? (i = (0, pn.jsx)(`section`, {
        className: `mt-4 px-6`,
        children: (0, pn.jsx)(`div`, {
            className: `border-token-border-light border-t pt-4`,
            children: (0, pn.jsx)(`div`, {
                className: `text-token-text-primary text-sm font-medium`,
                children: r ? (0, pn.jsx)(E, {
                    id: `chatgpt.search.product_details.price_history.typical_single`,
                    defaultMessage: `Typically {price}`,
                    values: {
                        price: n.typical_low_price
                    }
                }) : (0, pn.jsx)(E, {
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
var fn, pn, mn = e((() => {
    fn = k(), D(), pn = w()
}));

function hn(e) {
    return (Array.isArray(e) ? e.flatMap(e => gn(e) ? [
        [e.name ?? e.label ?? e.key, e.value]
    ] : []) : Object.entries(e ?? {})).flatMap(([e, t]) => {
        if (typeof e != `string` || t == null) return [];
        let n = typeof t == `string` ? t : JSON.stringify(t);
        return n == null ? [] : [
            [e, n]
        ]
    })
}

function gn(e) {
    return typeof e == `object` && !!e && !Array.isArray(e)
}

function _n(e, t) {
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
var vn, Z, yn, bn = e((() => {
    vn = k(), D(), U(), Z = w(), yn = e => {
        "use forget";
        let t = (0, vn.c)(12),
            {
                product: n
            } = e,
            r, i, a, o;
        if (t[0] !== n.attributes || t[1] !== n.description) {
            o = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = hn(n.attributes);
                if (!n.description && e.length === 0) {
                    o = null;
                    break bb0
                }
                r = `flex flex-col bg-inherit`,
                t[6] === n.description ? i = t[7] : (i = n.description && (0, Z.jsx)(It, {
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
                a = e.length > 0 && (0, Z.jsx)(It, {
                    stickyHeader: !1,
                    title: (0, Z.jsx)(E, {
                        id: `chatgpt.search.product_details.source_catalog.attributes.section_title`,
                        defaultMessage: `Details`
                    }),
                    children: (0, Z.jsx)(`dl`, {
                        className: `flex flex-col gap-3`,
                        children: e.map(_n)
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

function xn(e) {
    "use forget";
    let t = (0, kn.c)(284),
        {
            product: r,
            clientThreadId: i,
            messageId: a,
            contentReferenceStartIndex: o,
            turnIndex: s,
            productIndex: c,
            conversation: u,
            offsetTopMargin: f,
            sidebar: p,
            isModal: h,
            galleryAspect: _,
            interactionSource: v,
            initialVisibleOfferCount: y,
            onFollowUp: b
        } = e,
        x = f !== void 0 && f,
        ne = h !== void 0 && h,
        re;
    t[0] === u ? re = t[1] : (re = () => ut(u), t[0] = u, t[1] = re);
    let w = S(re),
        T;
    t[2] === w ? T = t[3] : (T = {
        ...w,
        isGenui: !0
    }, t[2] = w, t[3] = T);
    let D = ve(T),
        [O, k] = (0, Q.useState)(null),
        [A, ie] = (0, Q.useState)(!1),
        [M, oe] = (0, Q.useState)(!1),
        [se, N] = (0, Q.useState)(!1),
        [ce, le] = (0, Q.useState)(!1),
        ue = An(),
        {
            showDebugConversationTurns: de
        } = me(),
        he = p?.type === `product_agent` && p.publicEntityShareId != null,
        ge = !he && ue?.persist_conversation_to_user === !0,
        _e = (0, Q.use)(Le),
        ye = (0, Q.useRef)(null),
        xe = (0, Q.useRef)(null),
        Se = (0, Q.useRef)(null),
        [we, Te] = (0, Q.useState)(null),
        Ee;
    t[4] === i ? Ee = t[5] : (Ee = d(i) ?? i, t[4] = i, t[5] = Ee);
    let P = Ee,
        Oe = te(),
        ke;
    t[6] !== u.id || t[7] !== Oe ? (ke = d(u.id) ?? Oe, t[6] = u.id, t[7] = Oe, t[8] = ke) : ke = t[8];
    let F = ke,
        I = g(`3375735072`),
        L;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (L = De(), t[9] = L) : L = t[9];
    let R = L,
        Ne;
    t[10] !== u || t[11] !== r ? (Ne = () => {
        let e = ot(u),
            t = e === `enriched` ? ft(u) : null,
            n = bt(u),
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
    }, t[10] = u, t[11] = r, t[12] = Ne) : Ne = t[12];
    let {
        productDetailDataScope: z,
        resolvedProductDetailData: ze,
        statefulProduct: B,
        renderedOffers: Ve,
        hasStreamedEntityOffers: V
    } = S(Ne), He, Ue;
    if (t[13] !== z) {
        let e = z === `enriched` ? m(`2128165686`) : void 0;
        He = e?.get(`disable_sidebar_what_to_know`, !1) ?? !1, Ue = e?.get(`disable_sidebar_reviews`, !1) ?? !1, t[13] = z, t[14] = He, t[15] = Ue
    } else He = t[14], Ue = t[15];
    let We = Ue,
        Ke;
    t[16] === u ? Ke = t[17] : (Ke = () => ({
        productRationale: lt(u),
        isLoadingReviewsOrRationale: pt(u)
    }), t[16] = u, t[17] = Ke);
    let {
        productRationale: Ye,
        isLoadingReviewsOrRationale: Xe
    } = S(Ke), Ze = !He && !!(Ye?.rationale || Xe), Qe;
    t[18] === u ? Qe = t[19] : (Qe = () => rt(u), t[18] = u, t[19] = Qe);
    let et = S(Qe),
        nt;
    t[20] === u ? nt = t[21] : (nt = () => gt(u), t[20] = u, t[21] = nt);
    let at = S(nt),
        mt;
    t[22] === u ? mt = t[23] : (mt = () => vt(u), t[22] = u, t[23] = mt);
    let _t = S(mt),
        yt;
    t[24] === u ? yt = t[25] : (yt = () => st(u), t[24] = u, t[25] = yt);
    let St = S(yt),
        Ct;
    t[26] === u ? Ct = t[27] : (Ct = () => ht(u), t[26] = u, t[27] = Ct);
    let Tt = S(Ct),
        Ot;
    t[28] === u ? Ot = t[29] : (Ot = () => it(u), t[28] = u, t[29] = Ot);
    let kt = S(Ot),
        At;
    t[30] === u ? At = t[31] : (At = () => {
        let e = bt(u)?.product;
        return {
            productImageUrls: ct(u),
            isGeneratingTryOn: e != null && xt(u, e.id)
        }
    }, t[30] = u, t[31] = At);
    let {
        productImageUrls: H,
        isGeneratingTryOn: jt
    } = S(At), U = p?.type === `product_agent` || p?.type === `entity` ? p.pinnedImage : void 0, W = U?.content_url || U?.thumbnail_url, Pt;
    t[32] !== U?.content_url || t[33] !== U?.thumbnail_url || t[34] !== W || t[35] !== H ? (Pt = W ? [W, ...H.filter(e => e !== U?.content_url && e !== U?.thumbnail_url)] : H, t[32] = U?.content_url, t[33] = U?.thumbnail_url, t[34] = W, t[35] = H, t[36] = Pt) : Pt = t[36];
    let G = Pt,
        It;
    t[37] === B ? It = t[38] : (It = Ae(B), t[37] = B, t[38] = It);
    let Rt = It,
        zt = z === `enriched` && (B.shopping_vto?.eligible ?? r.shopping_vto?.eligible ?? !1),
        [K] = (0, Q.useState)(Cn),
        Bt, q;
    t[39] !== u || t[40] !== P || t[41] !== a || t[42] !== r ? (Bt = () => Je({
        conversation: u,
        shellProduct: r,
        conversationId: P,
        messageId: a
    }), q = [u, r, P, a], t[39] = u, t[40] = P, t[41] = a, t[42] = r, t[43] = Bt, t[44] = q) : (Bt = t[43], q = t[44]), (0, Q.useEffect)(Bt, q);
    let J, Vt;
    t[45] !== u || t[46] !== P || t[47] !== a || t[48] !== ge || t[49] !== r || t[50] !== B ? (J = () => {
        $e({
            conversation: u,
            shellProduct: r,
            statefulProduct: B,
            conversationId: P,
            messageId: a,
            persistConversationToUser: ge
        })
    }, Vt = [u, P, a, ge, r, B], t[45] = u, t[46] = P, t[47] = a, t[48] = ge, t[49] = r, t[50] = B, t[51] = J, t[52] = Vt) : (J = t[51], Vt = t[52]), (0, Q.useEffect)(J, Vt);
    let Ht, Ut;
    t[53] === Symbol.for(`react.memo_cache_sentinel`) ? (Ht = () => {
        let e = Se.current;
        if (!e) return;
        let t = () => {
            Te(e.getBoundingClientRect().height)
        };
        if (t(), typeof ResizeObserver > `u`) return;
        let n = new ResizeObserver(t);
        return n.observe(e), () => {
            n.disconnect()
        }
    }, Ut = [], t[53] = Ht, t[54] = Ut) : (Ht = t[53], Ut = t[54]), (0, Q.useEffect)(Ht, Ut);
    let Wt = (0, Q.useRef)(!1),
        Gt = (0, Q.useRef)(null),
        Kt, qt;
    t[55] !== i || t[56] !== o || t[57] !== u || t[58] !== a || t[59] !== z || t[60] !== D ? (Kt = () => C(() => {
        let e = ft(u)?.product;
        e && !Wt.current && (Wt.current = !0, je({
            clientThreadId: i,
            messageId: a,
            contentReferenceStartIndex: o,
            product: e,
            source: z === `source_catalog` ? Fe.CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_SOURCE_CATALOG : Fe.CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_ENRICHED
        }), D(`Product Sidebar Entity Loaded`, `product_sidebar_entity_loaded`, `product_entity`, {
            ...e.analytics_meta ?? {},
            product_event_uuid: e.product_event_uuid
        }))
    }), qt = [i, o, u, a, z, D], t[55] = i, t[56] = o, t[57] = u, t[58] = a, t[59] = z, t[60] = D, t[61] = Kt, t[62] = qt) : (Kt = t[61], qt = t[62]), (0, Q.useEffect)(Kt, qt);
    let Yt;
    t[63] !== v || t[64] !== z || t[65] !== ze || t[66] !== r || t[67] !== B || t[68] !== D ? (Yt = () => {
        if (z === `source_catalog` && ze == null) return;
        let e = z === `source_catalog` ? B : r;
        if (Gt.current === e.id) return;
        Gt.current = e.id;
        let t = Dn(e, v),
            n = [t.offer_url, t.product_url, t.site_url, t.merchant_url].find(Sn);
        D(`Product Detail Shown`, `product_detail_shown`, `product_entity`, t, void 0, t => j(`product_detail_shown`, `detail_shown`, t, {
            productId: e.id,
            interactionSource: v,
            url: n
        }))
    }, t[63] = v, t[64] = z, t[65] = ze, t[66] = r, t[67] = B, t[68] = D, t[69] = Yt) : Yt = t[69];
    let Y;
    t[70] !== i || t[71] !== o || t[72] !== v || t[73] !== a || t[74] !== F || t[75] !== z || t[76] !== ze || t[77] !== r || t[78] !== B || t[79] !== D || t[80] !== s ? (Y = [i, o, v, a, F, z, ze, r, B, D, s], t[70] = i, t[71] = o, t[72] = v, t[73] = a, t[74] = F, t[75] = z, t[76] = ze, t[77] = r, t[78] = B, t[79] = D, t[80] = s, t[81] = Y) : Y = t[81], (0, Q.useEffect)(Yt, Y);
    let Xt;
    t[82] !== z || t[83] !== B ? (Xt = z === `enriched` ? B.variants ?? [] : [], t[82] = z, t[83] = B, t[84] = Xt) : Xt = t[84];
    let Zt = Xt,
        $t;
    t[85] === B ? $t = t[86] : ($t = e => Ce(B, e), t[85] = B, t[86] = $t);
    let en = $t,
        tn;
    if (t[87] !== H || t[88] !== B) {
        tn = [];
        for (let e of H) {
            let t = Be(e, Ce(B, e));
            t != null && tn.push(t)
        }
        t[87] = H, t[88] = B, t[89] = tn
    } else tn = t[89];
    let nn = tn,
        rn = Pe(nn),
        X;
    t[90] !== nn || t[91] !== rn ? (X = e => {
        let t = Be(e);
        if (t == null) return e;
        let n = nn.findIndex(e => e.asset_pointer === t.asset_pointer);
        return rn[n]?.data?.url ?? null
    }, t[90] = nn, t[91] = rn, t[92] = X) : X = t[92];
    let an = X,
        on;
    t[93] !== w.isGenui || t[94] !== i || t[95] !== o || t[96] !== G || t[97] !== a || t[98] !== U?.url || t[99] !== W || t[100] !== an || t[101] !== r || t[102] !== B || t[103] !== s ? (on = (e, t) => {
        let n = G[e];
        be({
            clientThreadId: i,
            messageId: a,
            turnIndex: s,
            contentReferenceStartIndex: o,
            surfaceLocation: ae.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
            imageAffordance: t,
            imageIndex: e,
            contentReferenceType: `product_entity`,
            parentContext: {
                entityId: pe(r, a, o),
                entityCategory: `product`,
                contentReferenceStartIndex: o,
                messageId: a
            },
            isGenui: w.isGenui,
            url: n === W ? U?.url : B.url ?? r.url,
            contentUrl: n ? an(n) : void 0,
            isVirtualTryOnImage: Re(B, n)
        })
    }, t[93] = w.isGenui, t[94] = i, t[95] = o, t[96] = G, t[97] = a, t[98] = U?.url, t[99] = W, t[100] = an, t[101] = r, t[102] = B, t[103] = s, t[104] = on) : on = t[104];
    let cn = on,
        ln;
    t[105] !== w || t[106] !== o || t[107] !== P || t[108] !== Tt || t[109] !== G || t[110] !== a || t[111] !== _e || t[112] !== U || t[113] !== W || t[114] !== c || t[115] !== an || t[116] !== r || t[117] !== B ? (ln = e => {
        if (_e == null) return;
        let t = G.map(e => ({
                imageUrl: e,
                resolvedImageUrl: an(e)
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
            let t = Ce(B, r) ?? {
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
                    title: Tt,
                    content_size: t,
                    thumbnail_size: t,
                    is_proxied_image: Be(r) != null
                };
            Re(B, r) && i.push(n.length), n.push(o), r === e && (s = o)
        }
        s != null && (_e({
            image: s,
            source: fe.ImageGroup,
            analyticsMetadata: w,
            contentReferenceStartIndex: o,
            productIndex: c,
            imageResults: n,
            engagementMetadata: {
                virtualTryOnImageIndices: i,
                contentReferenceType: `product_entity`,
                pageUrl: B.url ?? r.url ?? null,
                parentContext: {
                    entityId: pe(r, a, o),
                    entityCategory: `product`,
                    contentReferenceStartIndex: o,
                    messageId: a
                }
            }
        }), (Ae(B).includes(e) || Ae(r).includes(e)) && Ge({
            productId: B.id,
            conversationId: P,
            messageId: a
        }, `product_detail`))
    }, t[105] = w, t[106] = o, t[107] = P, t[108] = Tt, t[109] = G, t[110] = a, t[111] = _e, t[112] = U, t[113] = W, t[114] = c, t[115] = an, t[116] = r, t[117] = B, t[118] = ln) : ln = t[118];
    let un = ln,
        fn = Et({
            isCheckoutEnabled: I,
            isClearingVariantSelection: se,
            isLoadingProductEntity: _t
        }),
        pn = St === `success` || St === `error`,
        mn;
    t[119] !== pn || t[120] !== V || t[121] !== z || t[122] !== Ve || t[123] !== r.offers ? (mn = z === `source_catalog` || V ? Ve : pn ? r.offers ?? [] : [], t[119] = pn, t[120] = V, t[121] = z, t[122] = Ve, t[123] = r.offers, t[124] = mn) : mn = t[124];
    let hn = mn,
        gn = hn.length > 1,
        _n = V && St === `success`,
        vn;
    t[125] !== u || t[126] !== _n || t[127] !== V || t[128] !== a || t[129] !== K || t[130] !== r.id || t[131] !== r.query || t[132] !== r.title ? (vn = () => {
        K.reset({
            conversation: u,
            messageId: a,
            productKey: r.id || r.query || r.title
        }), K.logRenderOfferTimings(V, _n, !0)
    }, t[125] = u, t[126] = _n, t[127] = V, t[128] = a, t[129] = K, t[130] = r.id, t[131] = r.query, t[132] = r.title, t[133] = vn) : vn = t[133];
    let Z = (0, Q.useEffectEvent)(vn),
        bn;
    t[134] === Z ? bn = t[135] : (bn = () => {
        Z()
    }, t[134] = Z, t[135] = bn);
    let xn;
    t[136] !== K || t[137] !== r.id ? (xn = [K, r.id], t[136] = K, t[137] = r.id, t[138] = xn) : xn = t[138], (0, Q.useEffect)(bn, xn);
    let Tn, En;
    t[139] !== _n || t[140] !== V || t[141] !== K ? (Tn = () => {
        K.logRenderOfferTimings(V, _n)
    }, En = [_n, V, K], t[139] = _n, t[140] = V, t[141] = K, t[142] = Tn, t[143] = En) : (Tn = t[142], En = t[143]), (0, Q.useEffect)(Tn, En);
    let jn;
    t[144] === u ? jn = t[145] : (jn = () => {
        let e = ye.current,
            t = xe.current;
        if (!e || !t) return;
        let n = () => {
            let n = e.getBoundingClientRect().top,
                r = t.getBoundingClientRect().bottom;
            return Math.max(0, Math.floor(r - n))
        };
        if (typeof ResizeObserver > `u`) {
            tt(u, n());
            return
        }
        tt(u, -1);
        let r = new ResizeObserver(() => {
            tt(u, n())
        });
        return r.observe(e), r.observe(t), tt(u, n()), () => {
            r.disconnect()
        }
    }, t[144] = u, t[145] = jn);
    let Mn;
    t[146] !== u || t[147] !== St || t[148] !== H.length ? (Mn = [u, St, H.length], t[146] = u, t[147] = St, t[148] = H.length, t[149] = Mn) : Mn = t[149], (0, Q.useEffect)(jn, Mn);
    let Nn = p && (he || F) && kt;
    if (z === `source_catalog` && ze == null) {
        let e = x ? `bg-surface-primary` : `bg-token-bg-primary`,
            i;
        t[150] === e ? i = t[151] : (i = l(`flex min-h-screen w-full flex-col gap-4 px-6 pt-8`, e), t[150] = e, t[151] = i);
        let o;
        t[152] !== u || t[153] !== P || t[154] !== a || t[155] !== St || t[156] !== r ? (o = St === `error` ? (0, $.jsxs)(`div`, {
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
                    dt({
                        conversation: u,
                        shellProduct: r,
                        conversationId: P,
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
        }), t[152] = u, t[153] = P, t[154] = a, t[155] = St, t[156] = r, t[157] = o) : o = t[157];
        let s;
        return t[158] !== _t || t[159] !== i || t[160] !== o ? (s = (0, $.jsx)(`div`, {
            className: i,
            "aria-busy": _t,
            children: o
        }), t[158] = _t, t[159] = i, t[160] = o, t[161] = s) : s = t[161], s
    }
    let Pn = x ? `bg-surface-primary` : `bg-token-bg-primary`,
        Fn = x ? `mt-[calc(var(--threadFlyOut-leading-height,var(--product-flyout-sticky-header-height))*-1)] min-h-screen` : `mt-0`,
        In;
    t[162] !== Pn || t[163] !== Fn ? (In = l(`flex w-full flex-col`, Pn, Fn), t[162] = Pn, t[163] = Fn, t[164] = In) : In = t[164];
    let Ln = `${B.id}:${G[0]??``}`,
        Rn;
    t[165] !== en || t[166] !== U || t[167] !== W || t[168] !== B.title ? (Rn = (e, t) => (0, $.jsx)(On, {
        src: e,
        onLoad: t,
        title: e === W && U ? U.title : B.title,
        assetPointerDimensions: en(e)
    }), t[165] = en, t[166] = U, t[167] = W, t[168] = B.title, t[169] = Rn) : Rn = t[169];
    let zn;
    t[170] !== P || t[171] !== a || t[172] !== B.id ? (zn = () => {
        qe({
            productId: B.id,
            conversationId: P,
            messageId: a
        }, `product_detail`)
    }, t[170] = P, t[171] = a, t[172] = B.id, t[173] = zn) : zn = t[173];
    let Bn;
    t[174] === cn ? Bn = t[175] : (Bn = (e, t) => {
        cn(t, e === `next` ? Ie.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_NEXT_BUTTON : Ie.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_PREVIOUS_BUTTON)
    }, t[174] = cn, t[175] = Bn);
    let Vn;
    t[176] !== cn || t[177] !== un ? (Vn = (e, t) => {
        cn(t, Ie.CHATGPT_IMAGE_AFFORDANCE_PRODUCT_DETAIL_IMAGE), un(e)
    }, t[176] = cn, t[177] = un, t[178] = Vn) : Vn = t[178];
    let Hn;
    t[179] !== _ || t[180] !== G || t[181] !== Rt || t[182] !== jt || t[183] !== Ln || t[184] !== Rn || t[185] !== zn || t[186] !== Bn || t[187] !== Vn ? (Hn = (0, $.jsx)(`div`, {
        ref: xe,
        children: (0, $.jsx)(Jt, {
            aspect: _,
            imageUrls: G,
            generatedImageUrls: Rt,
            isGenerating: jt,
            renderImage: Rn,
            onGeneratedImageViewed: zn,
            onArrowClick: Bn,
            onClick: Vn
        }, Ln)
    }), t[179] = _, t[180] = G, t[181] = Rt, t[182] = jt, t[183] = Ln, t[184] = Rn, t[185] = zn, t[186] = Bn, t[187] = Vn, t[188] = Hn) : Hn = t[188];
    let Un;
    t[189] === we ? Un = t[190] : (Un = we == null ? void 0 : {
        height: we
    }, t[189] = we, t[190] = Un);
    let Wn;
    t[191] === Symbol.for(`react.memo_cache_sentinel`) ? (Wn = {
        duration: .2,
        ease: `easeInOut`
    }, t[191] = Wn) : Wn = t[191];
    let Gn;
    t[192] === Tt ? Gn = t[193] : (Gn = (0, $.jsx)(`h2`, {
        ref: Se,
        className: `text-xl`,
        children: Tt
    }), t[192] = Tt, t[193] = Gn);
    let Kn;
    t[194] !== Un || t[195] !== Gn ? (Kn = (0, $.jsx)(ee.div, {
        className: `overflow-hidden`,
        initial: !1,
        animate: Un,
        transition: Wn,
        children: Gn
    }), t[194] = Un, t[195] = Gn, t[196] = Kn) : Kn = t[196];
    let qn;
    t[197] === B ? qn = t[198] : (qn = (0, $.jsx)(Dt, {
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
    t[202] !== R || t[203] !== B.price_history ? (Yn = R && B.price_history && (0, $.jsx)(dn, {
        priceHistory: B.price_history
    }), t[202] = R, t[203] = B.price_history, t[204] = Yn) : Yn = t[204];
    let Xn;
    t[205] !== u || t[206] !== A || t[207] !== I || t[208] !== M || t[209] !== c || t[210] !== r || t[211] !== B || t[212] !== D || t[213] !== Zt ? (Xn = I && Zt.length > 0 && (0, $.jsx)(`div`, {
        className: l(`px-5 pt-4 pb-2`, M && `pointer-events-none opacity-50`),
        "aria-busy": M,
        children: (0, $.jsx)(Lt, {
            options: Zt,
            showErrors: A,
            updateOption: (e, t, n) => wn({
                optionGroupId: e,
                selectedId: t,
                variant_index: n,
                conversation: u,
                shellProduct: r,
                statefulProduct: B,
                setIsSwitchingVariant: oe,
                setIsClearingVariantSelection: N,
                setSuppressOfferAnimations: le,
                setError: k,
                trackContentReferenceEvent: D,
                productIndex: c,
                productId: r.id
            })
        })
    }), t[205] = u, t[206] = A, t[207] = I, t[208] = M, t[209] = c, t[210] = r, t[211] = B, t[212] = D, t[213] = Zt, t[214] = Xn) : Xn = t[214];
    let Zn;
    t[215] === O ? Zn = t[216] : (Zn = O && (0, $.jsx)(`div`, {
        className: `text-token-interactive-label-danger-secondary-default text-center`,
        children: O
    }), t[215] = O, t[216] = Zn);
    let Qn;
    t[217] !== I || t[218] !== H || t[219] !== B.image_urls ? (Qn = I ? B.image_urls ?? [] : H, t[217] = I, t[218] = H, t[219] = B.image_urls, t[220] = Qn) : Qn = t[220];
    let $n = z === `source_catalog` || Ze,
        er;
    t[221] === Symbol.for(`react.memo_cache_sentinel`) ? (er = () => ie(!0), t[221] = er) : er = t[221];
    let tr;
    t[222] !== o || t[223] !== u || t[224] !== y || t[225] !== v || t[226] !== hn || t[227] !== fn || t[228] !== c || t[229] !== gn || t[230] !== B || t[231] !== ce || t[232] !== Qn || t[233] !== $n || t[234] !== D ? (tr = (0, $.jsx)(Nt, {
        className: `flex flex-col px-5 pt-3`,
        offers: hn,
        conversation: u,
        contentReferenceStartIndex: o,
        productIndex: c,
        product: B,
        trackContentReferenceEvent: D,
        imageUrls: Qn,
        isLoading: fn,
        suppressOfferAnimations: ce,
        showBestPriceOfferTag: gn,
        showBottomBorder: $n,
        onOpenCheckout: er,
        interactionSource: v,
        initialVisibleOfferCount: y
    }), t[222] = o, t[223] = u, t[224] = y, t[225] = v, t[226] = hn, t[227] = fn, t[228] = c, t[229] = gn, t[230] = B, t[231] = ce, t[232] = Qn, t[233] = $n, t[234] = D, t[235] = tr) : tr = t[235];
    let nr;
    t[236] !== We || t[237] !== He || t[238] !== Xe || t[239] !== a || t[240] !== z || t[241] !== Ye || t[242] !== et || t[243] !== K || t[244] !== B || t[245] !== D ? (nr = z === `source_catalog` ? (0, $.jsx)(yn, {
        product: B
    }) : (0, $.jsxs)(`div`, {
        className: `flex flex-col bg-inherit`,
        children: [!He && (0, $.jsx)(Mt, {
            contentReference: Ye,
            trackContentReferenceEvent: D,
            disableAnimation: !!(Ye || et),
            isLoading: Xe,
            productAnalyticsMeta: B.analytics_meta ?? void 0,
            productEventUuid: B.product_event_uuid ?? void 0,
            renderProfiler: K
        }), !We && (0, $.jsx)(Ft, {
            contentReference: et,
            messageId: a,
            trackContentReferenceEvent: D,
            disableAnimation: !!(Ye || et),
            productAnalyticsMeta: B.analytics_meta ?? void 0,
            productEventUuid: B.product_event_uuid ?? void 0,
            renderProfiler: K
        })]
    }), t[236] = We, t[237] = He, t[238] = Xe, t[239] = a, t[240] = z, t[241] = Ye, t[242] = et, t[243] = K, t[244] = B, t[245] = D, t[246] = nr) : nr = t[246];
    let rr;
    t[247] === Symbol.for(`react.memo_cache_sentinel`) ? (rr = (0, $.jsx)(Qt, {}), t[247] = rr) : rr = t[247];
    let ir;
    t[248] !== o || t[249] !== u || t[250] !== zt || t[251] !== a || t[252] !== H || t[253] !== c || t[254] !== r.shopping_vto || t[255] !== B || t[256] !== s ? (ir = zt && (0, $.jsx)(wt, {
        contentReferenceStartIndex: o,
        conversation: u,
        messageId: a,
        product: {
            ...B,
            image_urls: H,
            shopping_vto: B.shopping_vto == null ? r.shopping_vto : {
                ...B.shopping_vto,
                generated_images: Me(B.shopping_vto.generated_images ?? [], r.shopping_vto?.generated_images ?? [])
            }
        },
        productIndex: c,
        turnIndex: s
    }), t[248] = o, t[249] = u, t[250] = zt, t[251] = a, t[252] = H, t[253] = c, t[254] = r.shopping_vto, t[255] = B, t[256] = s, t[257] = ir) : ir = t[257];
    let ar;
    t[258] !== o || t[259] !== u || t[260] !== ne || t[261] !== he || t[262] !== a || t[263] !== b || t[264] !== c || t[265] !== Nn || t[266] !== B || t[267] !== s ? (ar = Nn && (0, $.jsx)(`div`, {
        className: `flex justify-end px-6 pt-16 pb-6`,
        children: (0, $.jsx)(sn, {
            conversation: u,
            messageId: he ? void 0 : a,
            contentReferenceStartIndex: o,
            turnIndex: s,
            productIndex: c,
            product: B,
            isModal: ne,
            onFollowUp: b
        })
    }), t[258] = o, t[259] = u, t[260] = ne, t[261] = he, t[262] = a, t[263] = b, t[264] = c, t[265] = Nn, t[266] = B, t[267] = s, t[268] = ar) : ar = t[268];
    let or;
    t[269] !== at || t[270] !== de ? (or = !1, t[269] = at, t[270] = de, t[271] = or) : or = t[271];
    let sr;
    return t[272] !== In || t[273] !== Hn || t[274] !== Jn || t[275] !== Yn || t[276] !== Xn || t[277] !== Zn || t[278] !== tr || t[279] !== nr || t[280] !== ir || t[281] !== ar || t[282] !== or ? (sr = (0, $.jsxs)(`div`, {
        ref: ye,
        className: In,
        children: [Hn, Jn, Yn, Xn, Zn, tr, nr, rr, ir, ar, or]
    }), t[272] = In, t[273] = Hn, t[274] = Jn, t[275] = Yn, t[276] = Xn, t[277] = Zn, t[278] = tr, t[279] = nr, t[280] = ir, t[281] = ar, t[282] = or, t[283] = sr) : sr = t[283], sr
}

function Sn(e) {
    return typeof e == `string` && e !== ``
}

function Cn() {
    return new et
}
async function wn({
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
        v = p?.options.find(e => e.id === t);
    t && !v?.available && (_ = {
        [e]: t
    });
    let ee = Object.keys(_ ?? {}).length > 0,
        y = Tn({
            shellProduct: i,
            statefulProduct: a,
            variantOptionsQuery: _,
            optionGroupId: e,
            isClearingVariantSelection: m
        });
    o(!0), s(m), c(m || !h), _t({
        conversation: r,
        shellProduct: i,
        updatedVariants: g,
        variantOptionsQuery: _,
        optionGroupId: e,
        productLookupKey: y
    });
    let b = !1,
        x = (e, t) => {
            b = !0, mt({
                conversation: r,
                shellProduct: i,
                nextProduct: e,
                productLookupKey: t ?? e.product_lookup_key ?? {},
                hasFetchedVariant: ee
            })
        };
    try {
        if (m)
            for await (let e of Qe({
                productQuery: i.title,
                productLookupKey: y
            })) {
                if (e.type !== `product_entity`) continue;
                let t = {
                    ...e.product,
                    variants: e.product.variants ?? g
                };
                x(t, t.product_lookup_key ?? y)
            } else {
                let e = (await Xe({
                    productLookupKey: y,
                    onProductEntity: e => {
                        let t = e.product;
                        t?.variants && x(t, y)
                    }
                }))?.product;
                !b && e?.variants && x(e, y)
            }
    } catch {} finally {
        o(!1), s(!1), c(!1)
    }
}

function Tn({
    shellProduct: e,
    statefulProduct: t,
    variantOptionsQuery: n,
    optionGroupId: r,
    isClearingVariantSelection: i
}) {
    return i ? En(e.product_lookup_key) : {
        ...t.product_lookup_key,
        variant_options_query: n,
        last_variant_selection_group_id: r
    }
}

function En(e) {
    if (!e) return e;
    let t = {
        ...e
    };
    return delete t.variant_options_query, delete t.last_variant_selection_group_id, t
}

function Dn(e, t) {
    return {
        ...e.analytics_meta ?? {},
        interaction_source: t,
        product_id: e.id,
        product_event_uuid: e.product_event_uuid,
        product_url: e.url,
        has_popular_tag: e.popularity_metadata?.product_tags?.includes(`popular`) ?? !1
    }
}

function On(e) {
    "use forget";
    let t = (0, kn.c)(6),
        {
            assetPointerDimensions: n,
            src: r,
            title: i,
            onLoad: a
        } = e,
        o;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = l(`h-full w-full cursor-zoom-in object-contain mix-blend-darken dark:mix-blend-lighten`), t[0] = o) : o = t[0];
    let s;
    return t[1] !== n || t[2] !== a || t[3] !== r || t[4] !== i ? (s = (0, $.jsx)(Oe, {
        src: r,
        onLoad: a,
        assetPointerDimensions: n,
        alt: i,
        className: o
    }), t[1] = n, t[2] = a, t[3] = r, t[4] = i, t[5] = s) : s = t[5], s
}
var kn, Q, $, An, jn = e((() => {
    kn = k(), F(), ue(), ke(), P(), y(), ge(), xe(), we(), oe(), Zt(), St(), Ct(), Ke(), I(), jt(), ze(), Ve(), nt(), Ze(), Ye(), Se(), i(), b(), s(), o(), R(), L(), ne(), a(), Q = t(O()), D(), on(), un(), ye(), Rt(), mn(), G(), W(), Pt(), bn(), kt(), $ = w(), An = () => void 0
}));
export {
    jn as n, xn as t
};
//# sourceMappingURL=ecdd5ba5-l99bl0rzilcisfpi.js.map