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
    frt as ee,
    ip as te,
    k8 as v,
    ka as y,
    l7 as b,
    prt as x,
    q5 as S,
    srt as C,
    v5 as ne,
    vF as re
} from "./4813494d-itnrgnth03y1sm9d.js";
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
    $In as ie,
    $ut as ae,
    Akn as j,
    Bft as M,
    Bxn as oe,
    C3 as N,
    Clt as P,
    Djn as se,
    E3 as ce,
    Ejn as le,
    F3 as ue,
    FIn as de,
    Fft as fe,
    I3 as pe,
    Ift as me,
    Igt as he,
    Lgt as ge,
    M3 as _e,
    Mjn as ve,
    Okn as ye,
    PIn as be,
    Qut as xe,
    Rxn as Se,
    Slt as Ce,
    Tjn as we,
    _In as Te,
    _mt as Ee,
    bIn as F,
    blt as De,
    bmt as Oe,
    dmt as ke,
    eLn as Ae,
    fIn as I,
    fmt as je,
    glt as Me,
    hmt as Ne,
    kkn as L,
    ltn as Pe,
    npt as Fe,
    opt as Ie,
    stn as Le,
    tpt as Re,
    umt as ze,
    vmt as R,
    vpt as Be,
    wIn as z,
    wlt as Ve,
    xmt as B,
    yIn as He,
    ylt as Ue,
    ymt as We,
    ypt as Ge
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    CC as Ke,
    Ch as qe,
    SC as Je,
    Sh as Ye
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    $r as Xe,
    Wr as Ze,
    ei as Qe
} from "./c2675c8c-d62p1sdq1sy52umm.js";
import {
    A as $e,
    C as et,
    F as tt,
    I as nt,
    L as rt,
    M as it,
    N as at,
    O as ot,
    P as st,
    _ as ct,
    a as lt,
    b as ut,
    c as dt,
    d as ft,
    f as pt,
    h as mt,
    i as ht,
    j as gt,
    l as _t,
    m as vt,
    n as yt,
    o as bt,
    p as xt,
    t as St,
    u as Ct,
    v as wt,
    y as Tt
} from "./2b67bcd8-pdc70myf240vjt6d.js";
import {
    i as Et,
    n as Dt
} from "./2da3878c-iv7h7lgkngc5u4om.js";
import {
    r as Ot,
    t as kt
} from "./58ee18a8-juiedzxtfy98kt1b.js";
import {
    c as V,
    d as At,
    g as jt,
    l as H,
    m as U,
    n as Mt,
    t as W,
    u as Nt
} from "./1362c49f-c4fxh2axsxvjt8we.js";
import {
    a as Pt,
    c as Ft,
    i as It,
    l as Lt,
    n as Rt,
    o as G,
    r as zt,
    s as Bt,
    t as Vt,
    u as Ht
} from "./f4222f0c-ddefa71wivn7y8wh.js";

function Ut(e) {
    "use forget";
    let t = (0, Gt.c)(80),
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
        [ne, re] = (0, K.useState)(ee),
        w = i ?? ne,
        T;
    t[0] !== i || t[1] !== _ ? (T = e => {
        i == null ? re(e) : _?.(e)
    }, t[0] = i, t[1] = _, t[2] = T) : T = t[2];
    let E = T,
        D = (0, K.useEffectEvent)(E),
        [O, k] = (0, K.useState)(!1),
        [ie, ae] = (0, K.useState)(!1),
        j = (0, K.useRef)(null),
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
    let N = (0, K.useRef)(oe),
        P = n.length,
        se = n[w]?.src,
        ce;
    t[4] === i ? ce = t[5] : (ce = () => {
        if (i == null) return;
        let e = j.current;
        e && (N.current.programmaticTargetIndex === i || Math.round(e.scrollLeft / (e.clientWidth || 1)) === i || (N.current.programmaticTargetIndex = i, e.scrollTo({
            left: i * e.clientWidth,
            behavior: `instant`
        })))
    }, t[4] = i, t[5] = ce);
    let le;
    t[6] !== se || t[7] !== i ? (le = [i, se], t[6] = se, t[7] = i, t[8] = le) : le = t[8], (0, K.useEffect)(ce, le);
    let ue;
    t[9] !== C || t[10] !== E || t[11] !== P ? (ue = (e, t) => {
        let n = t === void 0 ? `smooth` : t,
            r = j.current;
        if (!r) return;
        let i = C ? qt(e, 0, P - 1) : Kt(e, 0, P - 1),
            a = N.current.width || r.clientWidth || 1;
        N.current.programmaticTargetIndex = i, r.scrollTo({
            left: i * a,
            behavior: n
        }), E(i)
    }, t[9] = C, t[10] = E, t[11] = P, t[12] = ue) : ue = t[12];
    let de = ue,
        fe, pe;
    t[13] === x ? (fe = t[14], pe = t[15]) : (fe = () => {
        if (!x) return;
        ae(!0);
        let e = window.setTimeout(() => ae(!1), 2e3);
        return () => window.clearTimeout(e)
    }, pe = [x], t[13] = x, t[14] = fe, t[15] = pe), (0, K.useEffect)(fe, pe);
    let me = O,
        he = O || ie,
        ge;
    t[16] !== C || t[17] !== P ? (ge = e => C ? qt(e, 0, P - 1) : Kt(e, 0, P - 1), t[16] = C, t[17] = P, t[18] = ge) : ge = t[18];
    let _e = ge,
        ve;
    t[19] !== o || t[20] !== de ? (ve = e => {
        o?.(), de(e, `smooth`)
    }, t[19] = o, t[20] = de, t[21] = ve) : ve = t[21];
    let ye = ve,
        be;
    t[22] !== ye || t[23] !== w || t[24] !== g || t[25] !== _e || t[26] !== P ? (be = e => {
        if (P <= 1) return;
        let t = _e(e === `next` ? w + 1 : w - 1);
        t !== w && g?.(e, t), ye(t)
    }, t[22] = ye, t[23] = w, t[24] = g, t[25] = _e, t[26] = P, t[27] = be) : be = t[27];
    let xe = be,
        Se, Ce;
    t[28] !== i || t[29] !== w || t[30] !== _ ? (Se = () => {
        i ?? _?.(w)
    }, Ce = [i, w, _], t[28] = i, t[29] = w, t[30] = _, t[31] = Se, t[32] = Ce) : (Se = t[31], Ce = t[32]), (0, K.useEffect)(Se, Ce);
    let we, Te;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (we = () => {
        let e = j.current;
        if (!e) return;
        let t = new ResizeObserver(t => {
            for (let n of t) N.current.width = n.contentRect.width || e.clientWidth || 1
        });
        return t.observe(e), N.current.width = e.clientWidth || 1, () => t.disconnect()
    }, Te = [], t[33] = we, t[34] = Te) : (we = t[33], Te = t[34]), (0, K.useEffect)(we, Te);
    let Ee;
    t[35] !== w || t[36] !== D || t[37] !== P ? (Ee = () => {
        let e = j.current;
        if (!e) return;
        let t = () => {
            let t = N.current.width || e.clientWidth || 1,
                n = e.scrollLeft || 0,
                r = n / t,
                i = N.current.programmaticTargetIndex;
            if (i != null) {
                let e = i * t;
                Math.abs(n - e) <= 2 && (N.current.programmaticTargetIndex = null);
                return
            }
            let a = w;
            r > w + .5 ? a = Kt(w + 1, 0, P - 1) : r < w - .5 && (a = Kt(w - 1, 0, P - 1)), a !== w && D(a)
        };
        return e.addEventListener(`scroll`, t, {
            passive: !0
        }), () => e.removeEventListener(`scroll`, t)
    }, t[35] = w, t[36] = D, t[37] = P, t[38] = Ee) : Ee = t[38];
    let F;
    t[39] !== w || t[40] !== P ? (F = [P, w], t[39] = w, t[40] = P, t[41] = F) : F = t[41], (0, K.useEffect)(Ee, F);
    let De = `select-none ${te} relative`,
        Oe, ke;
    t[42] === Symbol.for(`react.memo_cache_sentinel`) ? (Oe = () => k(!0), ke = () => k(!1), t[42] = Oe, t[43] = ke) : (Oe = t[42], ke = t[43]);
    let Ae = `relative w-full ${v} overflow-clip`,
        I;
    if (t[44] !== S || t[45] !== n || t[46] !== M || t[47] !== y || t[48] !== h) {
        let e;
        t[50] !== S || t[51] !== M || t[52] !== y || t[53] !== h ? (e = (e, t) => (0, q.jsx)(`div`, {
            onClick: () => h?.(e, t),
            role: h ? `button` : void 0,
            tabIndex: h ? 0 : void 0,
            onKeyDown: n => {
                h && (n.key === `Enter` || n.key === ` `) && (n.preventDefault(), h(e, t))
            },
            className: `relative h-full w-full shrink-0 grow-0 basis-full snap-center`,
            children: e.content ? e.content : (0, q.jsx)(`img`, {
                src: e.src,
                alt: e.alt ?? M.formatMessage({
                    id: `wHCsqa`,
                    defaultMessage: `Slide {index}`
                }, {
                    index: t + 1
                }),
                className: `h-full w-full ${y} ${S}`
            })
        }, e.src), t[50] = S, t[51] = M, t[52] = y, t[53] = h, t[54] = e) : e = t[54], I = n.map(e), t[44] = S, t[45] = n, t[46] = M, t[47] = y, t[48] = h, t[49] = I
    } else I = t[49];
    let je;
    t[55] !== o || t[56] !== I ? (je = (0, q.jsx)(`div`, {
        ref: j,
        onScroll: o,
        className: `no-scrollbar flex h-full w-full touch-pan-x touch-pan-y snap-x snap-mandatory overflow-x-scroll scroll-smooth`,
        children: I
    }), t[55] = o, t[56] = I, t[57] = je) : je = t[57];
    let Me;
    t[58] !== xe || t[59] !== n.length || t[60] !== M || t[61] !== me || t[62] !== he || t[63] !== x ? (Me = x && n.length > 1 && (0, q.jsxs)(q.Fragment, {
        children: [(0, q.jsx)(Wt, {
            ariaLabel: M.formatMessage({
                id: `l9pylv`,
                defaultMessage: `Previous slide`
            }),
            onClick: () => xe(`previous`),
            side: `start`,
            visible: me,
            children: (0, q.jsx)(s, {
                className: `icon-md`
            })
        }), (0, q.jsx)(Wt, {
            ariaLabel: M.formatMessage({
                id: `L0pbQh`,
                defaultMessage: `Next slide`
            }),
            onClick: () => xe(`next`),
            side: `end`,
            visible: he,
            children: (0, q.jsx)(Je, {
                className: `icon-md`
            })
        })]
    }), t[58] = xe, t[59] = n.length, t[60] = M, t[61] = me, t[62] = he, t[63] = x, t[64] = Me) : Me = t[64];
    let Ne;
    t[65] !== Ae || t[66] !== je || t[67] !== Me ? (Ne = (0, q.jsxs)(`div`, {
        className: Ae,
        children: [je, Me]
    }), t[65] = Ae, t[66] = je, t[67] = Me, t[68] = Ne) : Ne = t[68];
    let L;
    t[69] !== ye || t[70] !== n || t[71] !== w || t[72] !== M || t[73] !== a || t[74] !== b ? (L = a == null ? b && n.length > 1 && n.length <= 20 && (0, q.jsx)(`div`, {
        className: `absolute start-0 end-0 bottom-3 flex items-center justify-center`,
        children: (0, q.jsx)(`div`, {
            className: `flex w-fit items-center justify-center gap-2 rounded-full bg-[#0D0D0D66] bg-clip-padding p-1 backdrop-blur`,
            children: n.map((e, t) => (0, q.jsx)(`button`, {
                type: `button`,
                onClick: () => ye(t),
                "aria-label": M.formatMessage({
                    id: `PUV+4+`,
                    defaultMessage: `Go to slide {index}`
                }, {
                    index: t + 1
                }),
                className: `h-1.5 w-1.5 rounded-full transition-opacity ${t===w?`bg-white`:`bg-gray-400 opacity-60`}`
            }, t))
        })
    }) : (0, q.jsx)(`div`, {
        className: `pointer-events-none absolute start-0 end-0 bottom-3 flex justify-center`,
        children: a
    }), t[69] = ye, t[70] = n, t[71] = w, t[72] = M, t[73] = a, t[74] = b, t[75] = L) : L = t[75];
    let Pe;
    return t[76] !== De || t[77] !== Ne || t[78] !== L ? (Pe = (0, q.jsxs)(`div`, {
        className: De,
        "aria-roledescription": `carousel`,
        onMouseEnter: Oe,
        onMouseLeave: ke,
        children: [Ne, L]
    }), t[76] = De, t[77] = Ne, t[78] = L, t[79] = Pe) : Pe = t[79], Pe
}

function Wt(e) {
    "use forget";
    let t = (0, Gt.c)(8),
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
    return t[3] !== n || t[4] !== o || t[5] !== r || t[6] !== l ? (u = (0, q.jsx)(`button`, {
        "aria-label": n,
        onClick: r,
        className: l,
        children: o
    }), t[3] = n, t[4] = o, t[5] = r, t[6] = l, t[7] = u) : u = t[7], u
}
var Gt, K, q, Kt, qt, Jt = e((() => {
        Gt = k(), u(), Ke(), b(), K = t(O()), D(), q = w(), Kt = (e, t, n) => Math.min(Math.max(e, t), n), qt = (e, t, n) => e > n ? t : e < t ? n : e
    })),
    Yt, Xt, Zt, Qt = e((() => {
        Yt = `Z_5WHq_generationStatus`, Xt = `Z_5WHq_generationStatusShimmer`, Zt = {
            generationStatus: Yt,
            generationStatusShimmer: Xt
        }
    }));

function $t(e) {
    "use forget";
    let t = (0, en.c)(44),
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
    let [p, m] = (0, J.useState)(f), h;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (h = [], t[3] = h) : h = t[3];
    let [g, _] = (0, J.useState)(h), [ee, te] = (0, J.useState)(!1), v = (0, J.useRef)(null), y;
    t[4] !== r || t[5] !== p.url ? (y = r.indexOf(p.url), t[4] = r, t[5] = p.url, t[6] = y) : y = t[6];
    let b = Math.max(0, y),
        x = r[b],
        S;
    t[7] !== x || t[8] !== i || t[9] !== g ? (S = i.includes(x) && g.includes(x), t[7] = x, t[8] = i, t[9] = g, t[10] = S) : S = t[10];
    let C = S,
        ne = (0, J.useEffectEvent)(l),
        re;
    t[11] !== b || t[12] !== C || t[13] !== ne ? (re = () => {
        C && ne(b)
    }, t[11] = b, t[12] = C, t[13] = ne, t[14] = re) : re = t[14];
    let w;
    t[15] !== x || t[16] !== b || t[17] !== C ? (w = [x, b, C], t[15] = x, t[16] = b, t[17] = C, t[18] = w) : w = t[18], (0, J.useEffect)(re, w);
    let T, D;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (T = () => () => {
        v.current != null && clearTimeout(v.current)
    }, D = [], t[19] = T, t[20] = D) : (T = t[19], D = t[20]), (0, J.useEffect)(T, D);
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
    let ae;
    t[31] !== a || t[32] !== ee ? (ae = a && !ee ? (0, tn.jsx)(`span`, {
        role: `status`,
        className: `rounded-full bg-black/25 px-3 py-2.5 text-xs font-medium text-white backdrop-blur-md`,
        children: (0, tn.jsx)(`span`, {
            className: Zt.generationStatus,
            children: (0, tn.jsx)(E, {
                id: `chatgpt.shopping.virtual_try_on.product_detail.generation.status`,
                defaultMessage: `Generating try-on`
            })
        })
    }) : void 0, t[31] = a, t[32] = ee, t[33] = ae) : ae = t[33];
    let j;
    t[34] === c ? j = t[35] : (j = (e, t) => c(e.src, t), t[34] = c, t[35] = j);
    let M;
    return t[36] !== u || t[37] !== b || t[38] !== s || t[39] !== A || t[40] !== ie || t[41] !== ae || t[42] !== j ? (M = (0, tn.jsx)(Ut, {
        activeIndex: b,
        images: A,
        aspect: u,
        onActiveIndexChange: ie,
        onInteraction: k,
        paginationStatus: ae,
        onArrowClick: s,
        onClick: j
    }), t[36] = u, t[37] = b, t[38] = s, t[39] = A, t[40] = ie, t[41] = ae, t[42] = j, t[43] = M) : M = t[43], M
}
var en, J, tn, nn = e((() => {
    en = k(), Jt(), J = t(O()), D(), Qt(), tn = w()
}));

function rn() {
    "use forget";
    let e = (0, ln.c)(25),
        t = p(),
        n;
    e[0] === t ? n = e[1] : (n = () => t ? wt(t) : [], e[0] = t, e[1] = n);
    let r = S(n),
        i;
    e[2] === t ? i = e[3] : (i = () => t ? ht(t) : {
        messageId: void 0,
        clientThreadId: void 0
    }, e[2] = t, e[3] = i);
    let {
        messageId: a,
        clientThreadId: o
    } = S(i), s;
    e[4] === t ? s = e[5] : (s = () => t ? ue(t).rootMessageId$() != null : !1, e[4] = t, e[5] = s);
    let c = S(s),
        l;
    e[6] === Symbol.for(`react.memo_cache_sentinel`) ? (l = V(), e[6] = l) : l = e[6];
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
                    isImageClick: P(r.target)
                }),
                children: (0, Y.jsx)(cn, {
                    product: e
                })
            }), (0, Y.jsx)(W, {
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
    if (!V()) return;
    let n = ht(e).turnIndex;
    ue(e).open$({
        rootMessageId: t,
        originTurnIndex: n ?? 0
    })
}

function on(e, t, n, r, i) {
    sn(e, t, n);
    let a = ht(e);
    if (De(n, {
            clientThreadId: a.clientThreadId,
            messageId: t,
            contentReferenceStartIndex: 0,
            contentReferenceType: Re.Products,
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
    F(e, o)
}

function sn(e, t, n) {
    let r = ht(e),
        i = z(e),
        a = ut(e),
        o = He(i, `product`) || He(i, `product_agent`) ? i.contentReferenceStartIndex : void 0;
    me({
        clientThreadId: r.clientThreadId,
        messageId: t,
        turnIndex: r.turnIndex,
        contentReferenceStartIndex: o,
        surfaceLocation: we.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
        entityAffordance: le.CHATGPT_ENTITY_AFFORDANCE_PRODUCT_CARD,
        entityId: M(n, t, o),
        entityCategory: `product`,
        contentReferenceType: `product_entity`,
        isGenui: r.isGenui,
        parentContext: a ? {
            entityId: M(a, t, o),
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
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = ee(`2128165686`).get(`image_fit`, ``), t[0] = r) : r = t[0];
    let i = r,
        a = i === `contain_all` || i === `product_card` ? i : `default`,
        o = n.image_urls?.[0],
        s = n.offers?.[0]?.price,
        c;
    t[1] !== o || t[2] !== n ? (c = o ? (0, Y.jsx)(R, {
        src: o,
        assetPointerDimensions: ze(n, o),
        fitStrategy: a,
        alt: n.title,
        className: `absolute inset-0 m-0 block h-full w-full transition-transform duration-200 group-hover:scale-[1.02]`
    }, o) : null, t[1] = o, t[2] = n, t[3] = c) : c = t[3];
    let l;
    t[4] === c ? l = t[5] : (l = (0, Y.jsx)(`div`, {
        className: `bg-tertiary relative aspect-square w-full overflow-hidden rounded-2xl`,
        ...Ve,
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
    ln = k(), fe(), Fe(), r(), f(), re(), o(), Te(), Ce(), Ue(), ke(), et(), pe(), H(), Mt(), v(), x(), ve(), D(), We(), Y = w(), un = T({
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
        r && I(a), ce(a, i, {
            messageId: o,
            turnIndex: c,
            contentReferenceStartIndex: s,
            productIndex: l,
            contentReferenceType: Re.ProductEntity
        }, j.CHATGPT_PRODUCT_FOLLOW_UP_INTERACTION_SURFACE_FOLLOW_UP_BUTTON), u?.()
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
            icon: Ye,
            label: p,
            contentWrapperClassName: `gap-2`,
            className: `corner-superellipse/1.1 shadow-short h-12 cursor-pointer overflow-clip rounded-[28px] border-none px-6 py-7 font-medium active:opacity-100!`,
            onClick: m,
            children: h
        })
    }), t[13] = p, t[14] = m, t[15] = h, t[16] = g) : g = t[16], g
}
var pn, mn, hn = e((() => {
    pn = k(), Fe(), _e(), g(), qe(), Te(), N(), D(), mn = w()
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
    Sn = k(), D(), Ft(), Z = w(), Cn = e => {
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
                t[6] === n.description ? i = t[7] : (i = n.description && (0, Z.jsx)(Bt, {
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
                a = e.length > 0 && (0, Z.jsx)(Bt, {
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
            initialVisibleOfferCount: te,
            onFollowUp: v
        } = e,
        b = d !== void 0 && d,
        x = p !== void 0 && p,
        re;
    t[0] === u ? re = t[1] : (re = () => ht(u), t[0] = u, t[1] = re);
    let w = S(re),
        T;
    t[2] === w ? T = t[3] : (T = {
        ...w,
        isGenui: !0
    }, t[2] = w, t[3] = T);
    let D = ae(T),
        [O, k] = (0, Q.useState)(null),
        [A, ie] = (0, Q.useState)(!1),
        [j, N] = (0, Q.useState)(!1),
        [P, ce] = (0, Q.useState)(!1),
        [le, ue] = (0, Q.useState)(!1),
        de = Pn(),
        {
            showDebugConversationTurns: fe
        } = Pe(),
        pe = f?.type === `product_agent` && f.publicEntityShareId != null,
        me = !pe && de?.persist_conversation_to_user === !0,
        ge = (0, Q.use)(be),
        _e = (0, Q.useRef)(null),
        ve = (0, Q.useRef)(null),
        xe = (0, Q.useRef)(null),
        [Se, Ce] = (0, Q.useState)(null),
        Te;
    t[4] === i ? Te = t[5] : (Te = c(i) ?? i, t[4] = i, t[5] = Te);
    let F = Te,
        De = y(),
        ke;
    t[6] !== u.id || t[7] !== De ? (ke = c(u.id) ?? De, t[6] = u.id, t[7] = De, t[8] = ke) : ke = t[8];
    let I = ke,
        L = C(`3375735072`),
        Fe;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (Fe = Me(), t[9] = Fe) : Fe = t[9];
    let Le = Fe,
        Re;
    t[10] !== u || t[11] !== r ? (Re = () => {
        let e = dt(u),
            t = e === `enriched` ? _t(u) : null,
            n = Tt(u),
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
    }, t[10] = u, t[11] = r, t[12] = Re) : Re = t[12];
    let {
        productDetailDataScope: R,
        resolvedProductDetailData: Be,
        statefulProduct: z,
        renderedOffers: Ve,
        hasStreamedEntityOffers: B
    } = S(Re), He, Ue;
    if (t[13] !== R) {
        let e = R === `enriched` ? ee(`2128165686`) : void 0;
        He = e?.get(`disable_sidebar_what_to_know`, !1) ?? !1, Ue = e?.get(`disable_sidebar_reviews`, !1) ?? !1, t[13] = R, t[14] = He, t[15] = Ue
    } else He = t[14], Ue = t[15];
    let We = Ue,
        Ke;
    t[16] === u ? Ke = t[17] : (Ke = () => ({
        productRationale: mt(u),
        isLoadingReviewsOrRationale: vt(u)
    }), t[16] = u, t[17] = Ke);
    let {
        productRationale: qe,
        isLoadingReviewsOrRationale: Je
    } = S(Ke), Ye = !He && !!(qe?.rationale || Je), Ze;
    t[18] === u ? Ze = t[19] : (Ze = () => ct(u), t[18] = u, t[19] = Ze);
    let et = S(Ze),
        tt;
    t[20] === u ? tt = t[21] : (tt = () => xt(u), t[20] = u, t[21] = tt);
    let nt = S(tt),
        rt;
    t[22] === u ? rt = t[23] : (rt = () => Ct(u), t[22] = u, t[23] = rt);
    let at = S(rt),
        st;
    t[24] === u ? st = t[25] : (st = () => ft(u), t[24] = u, t[25] = st);
    let ut = S(st),
        yt;
    t[26] === u ? yt = t[27] : (yt = () => bt(u), t[26] = u, t[27] = yt);
    let St = S(yt),
        wt;
    t[28] === u ? wt = t[29] : (wt = () => lt(u), t[28] = u, t[29] = wt);
    let Dt = S(wt),
        Ot;
    t[30] === u ? Ot = t[31] : (Ot = () => {
        let e = Tt(u)?.product;
        return {
            productImageUrls: pt(u),
            isGeneratingTryOn: e != null && Et(u, e.id)
        }
    }, t[30] = u, t[31] = Ot);
    let {
        productImageUrls: V,
        isGeneratingTryOn: At
    } = S(Ot), H = f?.type === `product_agent` || f?.type === `entity` ? f.pinnedImage : void 0, U = H?.content_url || H?.thumbnail_url, Mt;
    t[32] !== H?.content_url || t[33] !== H?.thumbnail_url || t[34] !== U || t[35] !== V ? (Mt = U ? [U, ...V.filter(e => e !== H?.content_url && e !== H?.thumbnail_url)] : V, t[32] = H?.content_url, t[33] = H?.thumbnail_url, t[34] = U, t[35] = V, t[36] = Mt) : Mt = t[36];
    let W = Mt,
        Ft;
    t[37] === z ? Ft = t[38] : (Ft = Ee(z), t[37] = z, t[38] = Ft);
    let It = Ft,
        Rt = R === `enriched` && (z.shopping_vto?.eligible ?? r.shopping_vto?.eligible ?? !1),
        [G] = (0, Q.useState)(Dn),
        Bt, Ht;
    t[39] !== u || t[40] !== F || t[41] !== a || t[42] !== r ? (Bt = () => $e({
        conversation: u,
        shellProduct: r,
        conversationId: F,
        messageId: a
    }), Ht = [u, r, F, a], t[39] = u, t[40] = F, t[41] = a, t[42] = r, t[43] = Bt, t[44] = Ht) : (Bt = t[43], Ht = t[44]), (0, Q.useEffect)(Bt, Ht);
    let Ut, Wt;
    t[45] !== u || t[46] !== F || t[47] !== a || t[48] !== me || t[49] !== r || t[50] !== z ? (Ut = () => {
        it({
            conversation: u,
            shellProduct: r,
            statefulProduct: z,
            conversationId: F,
            messageId: a,
            persistConversationToUser: me
        })
    }, Wt = [u, F, a, me, r, z], t[45] = u, t[46] = F, t[47] = a, t[48] = me, t[49] = r, t[50] = z, t[51] = Ut, t[52] = Wt) : (Ut = t[51], Wt = t[52]), (0, Q.useEffect)(Ut, Wt);
    let Gt, K;
    t[53] === Symbol.for(`react.memo_cache_sentinel`) ? (Gt = () => {
        let e = xe.current;
        if (!e) return;
        let t = () => {
            Ce(e.getBoundingClientRect().height)
        };
        if (t(), typeof ResizeObserver > `u`) return;
        let n = new ResizeObserver(t);
        return n.observe(e), () => {
            n.disconnect()
        }
    }, K = [], t[53] = Gt, t[54] = K) : (Gt = t[53], K = t[54]), (0, Q.useEffect)(Gt, K);
    let q = (0, Q.useRef)(!1),
        Kt = (0, Q.useRef)(null),
        qt, Jt;
    t[55] !== i || t[56] !== o || t[57] !== u || t[58] !== a || t[59] !== R || t[60] !== D ? (qt = () => ne(() => {
        let e = _t(u)?.product;
        e && !q.current && (q.current = !0, Ie({
            clientThreadId: i,
            messageId: a,
            contentReferenceStartIndex: o,
            product: e,
            source: R === `source_catalog` ? ye.CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_SOURCE_CATALOG : ye.CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_ENRICHED
        }), D(`Product Sidebar Entity Loaded`, `product_sidebar_entity_loaded`, `product_entity`, {
            ...e.analytics_meta ?? {},
            product_event_uuid: e.product_event_uuid
        }))
    }), Jt = [i, o, u, a, R, D], t[55] = i, t[56] = o, t[57] = u, t[58] = a, t[59] = R, t[60] = D, t[61] = qt, t[62] = Jt) : (qt = t[61], Jt = t[62]), (0, Q.useEffect)(qt, Jt);
    let Yt;
    t[63] !== _ || t[64] !== R || t[65] !== Be || t[66] !== r || t[67] !== z || t[68] !== D ? (Yt = () => {
        if (R === `source_catalog` && Be == null) return;
        let e = R === `source_catalog` ? z : r;
        if (Kt.current === e.id) return;
        Kt.current = e.id;
        let t = jn(e, _),
            n = [t.offer_url, t.product_url, t.site_url, t.merchant_url].find(En);
        D(`Product Detail Shown`, `product_detail_shown`, `product_entity`, t, void 0, t => Ae(`product_detail_shown`, `detail_shown`, t, {
            productId: e.id,
            interactionSource: _,
            url: n
        }))
    }, t[63] = _, t[64] = R, t[65] = Be, t[66] = r, t[67] = z, t[68] = D, t[69] = Yt) : Yt = t[69];
    let Xt;
    t[70] !== i || t[71] !== o || t[72] !== _ || t[73] !== a || t[74] !== I || t[75] !== R || t[76] !== Be || t[77] !== r || t[78] !== z || t[79] !== D || t[80] !== s ? (Xt = [i, o, _, a, I, R, Be, r, z, D, s], t[70] = i, t[71] = o, t[72] = _, t[73] = a, t[74] = I, t[75] = R, t[76] = Be, t[77] = r, t[78] = z, t[79] = D, t[80] = s, t[81] = Xt) : Xt = t[81], (0, Q.useEffect)(Yt, Xt);
    let Zt;
    t[82] !== R || t[83] !== z ? (Zt = R === `enriched` ? z.variants ?? [] : [], t[82] = R, t[83] = z, t[84] = Zt) : Zt = t[84];
    let Qt = Zt,
        en;
    t[85] === z ? en = t[86] : (en = e => ze(z, e), t[85] = z, t[86] = en);
    let J = en,
        tn;
    if (t[87] !== V || t[88] !== z) {
        tn = [];
        for (let e of V) {
            let t = Oe(e, ze(z, e));
            t != null && tn.push(t)
        }
        t[87] = V, t[88] = z, t[89] = tn
    } else tn = t[89];
    let nn = tn,
        an = oe(nn),
        on;
    t[90] !== nn || t[91] !== an ? (on = e => {
        let t = Oe(e);
        if (t == null) return e;
        let n = nn.findIndex(e => e.asset_pointer === t.asset_pointer);
        return an[n]?.data?.url ?? null
    }, t[90] = nn, t[91] = an, t[92] = on) : on = t[92];
    let sn = on,
        cn;
    t[93] !== w.isGenui || t[94] !== i || t[95] !== o || t[96] !== W || t[97] !== a || t[98] !== H?.url || t[99] !== U || t[100] !== sn || t[101] !== r || t[102] !== z || t[103] !== s ? (cn = (e, t) => {
        let n = W[e];
        Ge({
            clientThreadId: i,
            messageId: a,
            turnIndex: s,
            contentReferenceStartIndex: o,
            surfaceLocation: we.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
            imageAffordance: t,
            imageIndex: e,
            contentReferenceType: `product_entity`,
            parentContext: {
                entityId: M(r, a, o),
                entityCategory: `product`,
                contentReferenceStartIndex: o,
                messageId: a
            },
            isGenui: w.isGenui,
            url: n === U ? H?.url : z.url ?? r.url,
            contentUrl: n ? sn(n) : void 0,
            isVirtualTryOnImage: je(z, n)
        })
    }, t[93] = w.isGenui, t[94] = i, t[95] = o, t[96] = W, t[97] = a, t[98] = H?.url, t[99] = U, t[100] = sn, t[101] = r, t[102] = z, t[103] = s, t[104] = cn) : cn = t[104];
    let ln = cn,
        Y;
    t[105] !== w || t[106] !== o || t[107] !== F || t[108] !== St || t[109] !== W || t[110] !== a || t[111] !== ge || t[112] !== H || t[113] !== U || t[114] !== l || t[115] !== sn || t[116] !== r || t[117] !== z ? (Y = e => {
        if (ge == null) return;
        let t = W.map(e => ({
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
            let t = ze(z, r) ?? {
                    width: 0,
                    height: 0
                },
                o = H && r === U ? {
                    ...H,
                    show_url: !0
                } : {
                    url: a,
                    content_url: a,
                    thumbnail_url: a,
                    title: St,
                    content_size: t,
                    thumbnail_size: t,
                    is_proxied_image: Oe(r) != null
                };
            je(z, r) && i.push(n.length), n.push(o), r === e && (s = o)
        }
        s != null && (ge({
            image: s,
            source: he.ImageGroup,
            analyticsMetadata: w,
            contentReferenceStartIndex: o,
            productIndex: l,
            imageResults: n,
            engagementMetadata: {
                virtualTryOnImageIndices: i,
                contentReferenceType: `product_entity`,
                pageUrl: z.url ?? r.url ?? null,
                parentContext: {
                    entityId: M(r, a, o),
                    entityCategory: `product`,
                    contentReferenceStartIndex: o,
                    messageId: a
                }
            }
        }), (Ee(z).includes(e) || Ee(r).includes(e)) && Xe({
            productId: z.id,
            conversationId: F,
            messageId: a
        }, `product_detail`))
    }, t[105] = w, t[106] = o, t[107] = F, t[108] = St, t[109] = W, t[110] = a, t[111] = ge, t[112] = H, t[113] = U, t[114] = l, t[115] = sn, t[116] = r, t[117] = z, t[118] = Y) : Y = t[118];
    let un = Y,
        dn = jt({
            isCheckoutEnabled: L,
            isClearingVariantSelection: P,
            isLoadingProductEntity: at
        }),
        pn = ut === `success` || ut === `error`,
        mn;
    t[119] !== pn || t[120] !== B || t[121] !== R || t[122] !== Ve || t[123] !== r.offers ? (mn = R === `source_catalog` || B ? Ve : pn ? r.offers ?? [] : [], t[119] = pn, t[120] = B, t[121] = R, t[122] = Ve, t[123] = r.offers, t[124] = mn) : mn = t[124];
    let hn = mn,
        _n = hn.length > 1,
        X = B && ut === `success`,
        vn;
    t[125] !== u || t[126] !== X || t[127] !== B || t[128] !== a || t[129] !== G || t[130] !== r.id || t[131] !== r.query || t[132] !== r.title ? (vn = () => {
        G.reset({
            conversation: u,
            messageId: a,
            productKey: r.id || r.query || r.title
        }), G.logRenderOfferTimings(B, X, !0)
    }, t[125] = u, t[126] = X, t[127] = B, t[128] = a, t[129] = G, t[130] = r.id, t[131] = r.query, t[132] = r.title, t[133] = vn) : vn = t[133];
    let yn = (0, Q.useEffectEvent)(vn),
        bn;
    t[134] === yn ? bn = t[135] : (bn = () => {
        yn()
    }, t[134] = yn, t[135] = bn);
    let xn;
    t[136] !== G || t[137] !== r.id ? (xn = [G, r.id], t[136] = G, t[137] = r.id, t[138] = xn) : xn = t[138], (0, Q.useEffect)(bn, xn);
    let Sn, Z;
    t[139] !== X || t[140] !== B || t[141] !== G ? (Sn = () => {
        G.logRenderOfferTimings(B, X)
    }, Z = [X, B, G], t[139] = X, t[140] = B, t[141] = G, t[142] = Sn, t[143] = Z) : (Sn = t[142], Z = t[143]), (0, Q.useEffect)(Sn, Z);
    let wn;
    t[144] === u ? wn = t[145] : (wn = () => {
        let e = _e.current,
            t = ve.current;
        if (!e || !t) return;
        let n = () => {
            let n = e.getBoundingClientRect().top,
                r = t.getBoundingClientRect().bottom;
            return Math.max(0, Math.floor(r - n))
        };
        if (typeof ResizeObserver > `u`) {
            ot(u, n());
            return
        }
        ot(u, -1);
        let r = new ResizeObserver(() => {
            ot(u, n())
        });
        return r.observe(e), r.observe(t), ot(u, n()), () => {
            r.disconnect()
        }
    }, t[144] = u, t[145] = wn);
    let Tn;
    t[146] !== u || t[147] !== ut || t[148] !== V.length ? (Tn = [u, ut, V.length], t[146] = u, t[147] = ut, t[148] = V.length, t[149] = Tn) : Tn = t[149], (0, Q.useEffect)(wn, Tn);
    let kn = f && (pe || I) && Dt;
    if (R === `source_catalog` && Be == null) {
        let e = b ? `bg-surface-primary` : `bg-token-bg-primary`,
            i;
        t[150] === e ? i = t[151] : (i = m(`flex min-h-screen w-full flex-col gap-4 px-6 pt-8`, e), t[150] = e, t[151] = i);
        let o;
        t[152] !== u || t[153] !== F || t[154] !== a || t[155] !== ut || t[156] !== r ? (o = ut === `error` ? (0, $.jsxs)(`div`, {
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
                    gt({
                        conversation: u,
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
        }), t[152] = u, t[153] = F, t[154] = a, t[155] = ut, t[156] = r, t[157] = o) : o = t[157];
        let s;
        return t[158] !== at || t[159] !== i || t[160] !== o ? (s = (0, $.jsx)(`div`, {
            className: i,
            "aria-busy": at,
            children: o
        }), t[158] = at, t[159] = i, t[160] = o, t[161] = s) : s = t[161], s
    }
    let An = b ? `bg-surface-primary` : `bg-token-bg-primary`,
        Fn = b ? `mt-[calc(var(--threadFlyOut-leading-height,var(--product-flyout-sticky-header-height))*-1)] min-h-screen` : `mt-0`,
        In;
    t[162] !== An || t[163] !== Fn ? (In = m(`flex w-full flex-col`, An, Fn), t[162] = An, t[163] = Fn, t[164] = In) : In = t[164];
    let Ln = `${z.id}:${W[0]??``}`,
        Rn;
    t[165] !== J || t[166] !== H || t[167] !== U || t[168] !== z.title ? (Rn = (e, t) => (0, $.jsx)(Mn, {
        src: e,
        onLoad: t,
        title: e === U && H ? H.title : z.title,
        assetPointerDimensions: J(e)
    }), t[165] = J, t[166] = H, t[167] = U, t[168] = z.title, t[169] = Rn) : Rn = t[169];
    let zn;
    t[170] !== F || t[171] !== a || t[172] !== z.id ? (zn = () => {
        Qe({
            productId: z.id,
            conversationId: F,
            messageId: a
        }, `product_detail`)
    }, t[170] = F, t[171] = a, t[172] = z.id, t[173] = zn) : zn = t[173];
    let Bn;
    t[174] === ln ? Bn = t[175] : (Bn = (e, t) => {
        ln(t, e === `next` ? se.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_NEXT_BUTTON : se.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_PREVIOUS_BUTTON)
    }, t[174] = ln, t[175] = Bn);
    let Vn;
    t[176] !== ln || t[177] !== un ? (Vn = (e, t) => {
        ln(t, se.CHATGPT_IMAGE_AFFORDANCE_PRODUCT_DETAIL_IMAGE), un(e)
    }, t[176] = ln, t[177] = un, t[178] = Vn) : Vn = t[178];
    let Hn;
    t[179] !== g || t[180] !== W || t[181] !== It || t[182] !== At || t[183] !== Ln || t[184] !== Rn || t[185] !== zn || t[186] !== Bn || t[187] !== Vn ? (Hn = (0, $.jsx)(`div`, {
        ref: ve,
        children: (0, $.jsx)($t, {
            aspect: g,
            imageUrls: W,
            generatedImageUrls: It,
            isGenerating: At,
            renderImage: Rn,
            onGeneratedImageViewed: zn,
            onArrowClick: Bn,
            onClick: Vn
        }, Ln)
    }), t[179] = g, t[180] = W, t[181] = It, t[182] = At, t[183] = Ln, t[184] = Rn, t[185] = zn, t[186] = Bn, t[187] = Vn, t[188] = Hn) : Hn = t[188];
    let Un;
    t[189] === Se ? Un = t[190] : (Un = Se == null ? void 0 : {
        height: Se
    }, t[189] = Se, t[190] = Un);
    let Wn;
    t[191] === Symbol.for(`react.memo_cache_sentinel`) ? (Wn = {
        duration: .2,
        ease: `easeInOut`
    }, t[191] = Wn) : Wn = t[191];
    let Gn;
    t[192] === St ? Gn = t[193] : (Gn = (0, $.jsx)(`h2`, {
        ref: xe,
        className: `text-xl`,
        children: St
    }), t[192] = St, t[193] = Gn);
    let Kn;
    t[194] !== Un || t[195] !== Gn ? (Kn = (0, $.jsx)(h.div, {
        className: `overflow-hidden`,
        initial: !1,
        animate: Un,
        transition: Wn,
        children: Gn
    }), t[194] = Un, t[195] = Gn, t[196] = Kn) : Kn = t[196];
    let qn;
    t[197] === z ? qn = t[198] : (qn = (0, $.jsx)(Nt, {
        product: z,
        wrapperClass: `text-token-text-primary mt-1 inline-flex items-center gap-1 text-base leading-5 font-normal`,
        includeMidDelimiter: !0,
        includeNum: !0
    }), t[197] = z, t[198] = qn);
    let Jn;
    t[199] !== Kn || t[200] !== qn ? (Jn = (0, $.jsxs)(`div`, {
        className: `flex flex-col px-6 pt-4`,
        children: [Kn, qn]
    }), t[199] = Kn, t[200] = qn, t[201] = Jn) : Jn = t[201];
    let Yn;
    t[202] !== Le || t[203] !== z.price_history ? (Yn = Le && z.price_history && (0, $.jsx)(gn, {
        priceHistory: z.price_history
    }), t[202] = Le, t[203] = z.price_history, t[204] = Yn) : Yn = t[204];
    let Xn;
    t[205] !== u || t[206] !== A || t[207] !== L || t[208] !== j || t[209] !== l || t[210] !== r || t[211] !== z || t[212] !== D || t[213] !== Qt ? (Xn = L && Qt.length > 0 && (0, $.jsx)(`div`, {
        className: m(`px-5 pt-4 pb-2`, j && `pointer-events-none opacity-50`),
        "aria-busy": j,
        children: (0, $.jsx)(Vt, {
            options: Qt,
            showErrors: A,
            updateOption: (e, t, n) => On({
                optionGroupId: e,
                selectedId: t,
                variant_index: n,
                conversation: u,
                shellProduct: r,
                statefulProduct: z,
                setIsSwitchingVariant: N,
                setIsClearingVariantSelection: ce,
                setSuppressOfferAnimations: ue,
                setError: k,
                trackContentReferenceEvent: D,
                productIndex: l,
                productId: r.id
            })
        })
    }), t[205] = u, t[206] = A, t[207] = L, t[208] = j, t[209] = l, t[210] = r, t[211] = z, t[212] = D, t[213] = Qt, t[214] = Xn) : Xn = t[214];
    let Zn;
    t[215] === O ? Zn = t[216] : (Zn = O && (0, $.jsx)(`div`, {
        className: `text-token-interactive-label-danger-secondary-default text-center`,
        children: O
    }), t[215] = O, t[216] = Zn);
    let Qn;
    t[217] !== L || t[218] !== V || t[219] !== z.image_urls ? (Qn = L ? z.image_urls ?? [] : V, t[217] = L, t[218] = V, t[219] = z.image_urls, t[220] = Qn) : Qn = t[220];
    let $n = R === `source_catalog` || Ye,
        er;
    t[221] === Symbol.for(`react.memo_cache_sentinel`) ? (er = () => ie(!0), t[221] = er) : er = t[221];
    let tr;
    t[222] !== o || t[223] !== u || t[224] !== te || t[225] !== _ || t[226] !== hn || t[227] !== dn || t[228] !== l || t[229] !== _n || t[230] !== z || t[231] !== le || t[232] !== Qn || t[233] !== $n || t[234] !== D ? (tr = (0, $.jsx)(Lt, {
        className: `flex flex-col px-5 pt-3`,
        offers: hn,
        conversation: u,
        contentReferenceStartIndex: o,
        productIndex: l,
        product: z,
        trackContentReferenceEvent: D,
        imageUrls: Qn,
        isLoading: dn,
        suppressOfferAnimations: le,
        showBestPriceOfferTag: _n,
        showBottomBorder: $n,
        onOpenCheckout: er,
        interactionSource: _,
        initialVisibleOfferCount: te
    }), t[222] = o, t[223] = u, t[224] = te, t[225] = _, t[226] = hn, t[227] = dn, t[228] = l, t[229] = _n, t[230] = z, t[231] = le, t[232] = Qn, t[233] = $n, t[234] = D, t[235] = tr) : tr = t[235];
    let nr;
    t[236] !== We || t[237] !== He || t[238] !== Je || t[239] !== a || t[240] !== R || t[241] !== qe || t[242] !== et || t[243] !== G || t[244] !== z || t[245] !== D ? (nr = R === `source_catalog` ? (0, $.jsx)(Cn, {
        product: z
    }) : (0, $.jsxs)(`div`, {
        className: `flex flex-col bg-inherit`,
        children: [!He && (0, $.jsx)(Pt, {
            contentReference: qe,
            trackContentReferenceEvent: D,
            disableAnimation: !!(qe || et),
            isLoading: Je,
            productAnalyticsMeta: z.analytics_meta ?? void 0,
            productEventUuid: z.product_event_uuid ?? void 0,
            renderProfiler: G
        }), !We && (0, $.jsx)(zt, {
            contentReference: et,
            messageId: a,
            trackContentReferenceEvent: D,
            disableAnimation: !!(qe || et),
            productAnalyticsMeta: z.analytics_meta ?? void 0,
            productEventUuid: z.product_event_uuid ?? void 0,
            renderProfiler: G
        })]
    }), t[236] = We, t[237] = He, t[238] = Je, t[239] = a, t[240] = R, t[241] = qe, t[242] = et, t[243] = G, t[244] = z, t[245] = D, t[246] = nr) : nr = t[246];
    let rr;
    t[247] === Symbol.for(`react.memo_cache_sentinel`) ? (rr = (0, $.jsx)(rn, {}), t[247] = rr) : rr = t[247];
    let ir;
    t[248] !== o || t[249] !== u || t[250] !== Rt || t[251] !== a || t[252] !== V || t[253] !== l || t[254] !== r.shopping_vto || t[255] !== z || t[256] !== s ? (ir = Rt && (0, $.jsx)(kt, {
        contentReferenceStartIndex: o,
        conversation: u,
        messageId: a,
        product: {
            ...z,
            image_urls: V,
            shopping_vto: z.shopping_vto == null ? r.shopping_vto : {
                ...z.shopping_vto,
                generated_images: Ne(z.shopping_vto.generated_images ?? [], r.shopping_vto?.generated_images ?? [])
            }
        },
        productIndex: l,
        turnIndex: s
    }), t[248] = o, t[249] = u, t[250] = Rt, t[251] = a, t[252] = V, t[253] = l, t[254] = r.shopping_vto, t[255] = z, t[256] = s, t[257] = ir) : ir = t[257];
    let ar;
    t[258] !== o || t[259] !== u || t[260] !== x || t[261] !== pe || t[262] !== a || t[263] !== v || t[264] !== l || t[265] !== kn || t[266] !== z || t[267] !== s ? (ar = kn && (0, $.jsx)(`div`, {
        className: `flex justify-end px-6 pt-16 pb-6`,
        children: (0, $.jsx)(fn, {
            conversation: u,
            messageId: pe ? void 0 : a,
            contentReferenceStartIndex: o,
            turnIndex: s,
            productIndex: l,
            product: z,
            isModal: x,
            onFollowUp: v
        })
    }), t[258] = o, t[259] = u, t[260] = x, t[261] = pe, t[262] = a, t[263] = v, t[264] = l, t[265] = kn, t[266] = z, t[267] = s, t[268] = ar) : ar = t[268];
    let or;
    t[269] !== nt || t[270] !== fe ? (or = !1, t[269] = nt, t[270] = fe, t[271] = or) : or = t[271];
    let sr;
    return t[272] !== In || t[273] !== Hn || t[274] !== Jn || t[275] !== Yn || t[276] !== Xn || t[277] !== Zn || t[278] !== tr || t[279] !== nr || t[280] !== ir || t[281] !== ar || t[282] !== or ? (sr = (0, $.jsxs)(`div`, {
        ref: _e,
        className: In,
        children: [Hn, Jn, Yn, Xn, Zn, tr, nr, rr, ir, ar, or]
    }), t[272] = In, t[273] = Hn, t[274] = Jn, t[275] = Yn, t[276] = Xn, t[277] = Zn, t[278] = tr, t[279] = nr, t[280] = ir, t[281] = ar, t[282] = or, t[283] = sr) : sr = t[283], sr
}

function En(e) {
    return typeof e == `string` && e !== ``
}

function Dn() {
    return new at
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
    o(!0), s(m), c(m || !h), St({
        conversation: r,
        shellProduct: i,
        updatedVariants: g,
        variantOptionsQuery: _,
        optionGroupId: e,
        productLookupKey: v
    });
    let y = !1,
        b = (e, t) => {
            y = !0, yt({
                conversation: r,
                shellProduct: i,
                nextProduct: e,
                productLookupKey: t ?? e.product_lookup_key ?? {},
                hasFetchedVariant: te
            })
        };
    try {
        if (m)
            for await (let e of rt({
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
                let e = (await tt({
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
    return t[1] !== n || t[2] !== a || t[3] !== r || t[4] !== i ? (s = (0, $.jsx)(R, {
        src: r,
        onLoad: a,
        assetPointerDimensions: n,
        alt: i,
        className: o
    }), t[1] = n, t[2] = a, t[3] = r, t[4] = i, t[5] = s) : s = t[5], s
}
var Nn, Q, $, Pn, Fn = e((() => {
    Nn = k(), ie(), fe(), Be(), Fe(), g(), xe(), Se(), de(), ge(), nn(), Dt(), Ot(), Ze(), ke(), At(), Ue(), B(), st(), nt(), et(), Le(), v(), _(), a(), x(), ve(), L(), b(), i(), Q = t(O()), D(), dn(), hn(), We(), Ht(), vn(), G(), It(), Rt(), wn(), U(), $ = w(), Pn = () => void 0
}));
export {
    Fn as n, Tn as t
};
//# sourceMappingURL=ecdd5ba5-e56qiuhph1e6k8qk.js.map