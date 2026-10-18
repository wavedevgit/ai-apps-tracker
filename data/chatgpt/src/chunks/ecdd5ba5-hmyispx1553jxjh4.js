import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AJ as n,
    AT as r,
    At as i,
    B6 as a,
    Ea as o,
    JP as s,
    Mm as c,
    Nm as l,
    OJ as u,
    Oa as d,
    Rf as f,
    Sx as p,
    XP as m,
    b5 as h,
    cn as g,
    i5 as _,
    k8 as ee,
    kT as te,
    mw as v,
    pnt as ne,
    pw as y,
    vnt as b,
    xx as x,
    y5 as S,
    ynt as re,
    zf as ie
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as C,
    Ln as w,
    Nn as T,
    Rn as E,
    Vn as D,
    wn as O,
    zn as k
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $An as ae,
    $On as A,
    $ut as j,
    BFn as M,
    Bft as oe,
    Clt as N,
    Fft as P,
    Fgt as se,
    Ift as ce,
    Igt as le,
    JAn as ue,
    KAn as de,
    LFn as fe,
    MFn as pe,
    O3 as me,
    QOn as he,
    Qen as ge,
    Qut as _e,
    Slt as ve,
    T3 as ye,
    WFn as be,
    ZOn as xe,
    _mt as Se,
    axn as Ce,
    bIn as we,
    blt as F,
    bmt as Te,
    dmt as Ee,
    eIn as De,
    etn as Oe,
    g3 as ke,
    glt as Ae,
    gmt as je,
    k3 as I,
    lmt as Me,
    mmt as Ne,
    npt as L,
    opt as Pe,
    qAn as Fe,
    sxn as Ie,
    tIn as Le,
    tpt as Re,
    umt as R,
    vmt as ze,
    vpt as z,
    wlt as Be,
    y3 as B,
    yIn as Ve,
    ylt as He,
    ymt as Ue,
    ypt as We,
    zFn as Ge
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    CC as Ke,
    Ch as qe,
    SC as Je,
    Sh as Ye
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Hr as Xe,
    Qr as Ze,
    Zr as Qe
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
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
} from "./2b67bcd8-nnsmutcvg2bqh4j8.js";
import {
    i as Et,
    n as Dt
} from "./2da3878c-dywmf1ji4nhuclzk.js";
import {
    r as Ot,
    t as kt
} from "./58ee18a8-c9x4ajti9e4cs4km.js";
import {
    c as V,
    d as At,
    g as jt,
    l as H,
    m as U,
    n as Mt,
    t as W,
    u as Nt
} from "./1362c49f-lrf664dsbb699ksf.js";
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
} from "./f4222f0c-g5kbmp8uqcuxnfjh.js";

function Ut(e) {
    "use forget";
    let t = (0, Gt.c)(80),
        {
            images: n,
            initialIndex: r,
            activeIndex: i,
            paginationStatus: a,
            onInteraction: o,
            className: s,
            aspect: c,
            objectPosition: l,
            showDots: u,
            showArrows: d,
            imageClassName: f,
            allowLoop: p,
            onClick: m,
            onArrowClick: h,
            onActiveIndexChange: g
        } = e,
        _ = r === void 0 ? 0 : r,
        ee = s === void 0 ? `` : s,
        te = c === void 0 ? `aspect-[16/9]` : c,
        v = l === void 0 ? `object-cover` : l,
        ne = u === void 0 || u,
        b = d === void 0 || d,
        x = f === void 0 ? `` : f,
        S = p === void 0 || p,
        [re, ie] = (0, K.useState)(_),
        C = i ?? re,
        w;
    t[0] !== i || t[1] !== g ? (w = e => {
        i == null ? ie(e) : g?.(e)
    }, t[0] = i, t[1] = g, t[2] = w) : w = t[2];
    let T = w,
        E = (0, K.useEffectEvent)(T),
        [D, O] = (0, K.useState)(!1),
        [ae, A] = (0, K.useState)(!1),
        j = (0, K.useRef)(null),
        M = k(),
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
        se = n[C]?.src,
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
    t[9] !== S || t[10] !== T || t[11] !== P ? (ue = (e, t) => {
        let n = t === void 0 ? `smooth` : t,
            r = j.current;
        if (!r) return;
        let i = S ? qt(e, 0, P - 1) : Kt(e, 0, P - 1),
            a = N.current.width || r.clientWidth || 1;
        N.current.programmaticTargetIndex = i, r.scrollTo({
            left: i * a,
            behavior: n
        }), T(i)
    }, t[9] = S, t[10] = T, t[11] = P, t[12] = ue) : ue = t[12];
    let de = ue,
        fe, pe;
    t[13] === b ? (fe = t[14], pe = t[15]) : (fe = () => {
        if (!b) return;
        A(!0);
        let e = window.setTimeout(() => A(!1), 2e3);
        return () => window.clearTimeout(e)
    }, pe = [b], t[13] = b, t[14] = fe, t[15] = pe), (0, K.useEffect)(fe, pe);
    let me = D,
        he = D || ae,
        ge;
    t[16] !== S || t[17] !== P ? (ge = e => S ? qt(e, 0, P - 1) : Kt(e, 0, P - 1), t[16] = S, t[17] = P, t[18] = ge) : ge = t[18];
    let _e = ge,
        ve;
    t[19] !== o || t[20] !== de ? (ve = e => {
        o?.(), de(e, `smooth`)
    }, t[19] = o, t[20] = de, t[21] = ve) : ve = t[21];
    let ye = ve,
        be;
    t[22] !== ye || t[23] !== C || t[24] !== h || t[25] !== _e || t[26] !== P ? (be = e => {
        if (P <= 1) return;
        let t = _e(e === `next` ? C + 1 : C - 1);
        t !== C && h?.(e, t), ye(t)
    }, t[22] = ye, t[23] = C, t[24] = h, t[25] = _e, t[26] = P, t[27] = be) : be = t[27];
    let xe = be,
        Se, Ce;
    t[28] !== i || t[29] !== C || t[30] !== g ? (Se = () => {
        i ?? g?.(C)
    }, Ce = [i, C, g], t[28] = i, t[29] = C, t[30] = g, t[31] = Se, t[32] = Ce) : (Se = t[31], Ce = t[32]), (0, K.useEffect)(Se, Ce);
    let we, F;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (we = () => {
        let e = j.current;
        if (!e) return;
        let t = new ResizeObserver(t => {
            for (let n of t) N.current.width = n.contentRect.width || e.clientWidth || 1
        });
        return t.observe(e), N.current.width = e.clientWidth || 1, () => t.disconnect()
    }, F = [], t[33] = we, t[34] = F) : (we = t[33], F = t[34]), (0, K.useEffect)(we, F);
    let Te;
    t[35] !== C || t[36] !== E || t[37] !== P ? (Te = () => {
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
            let a = C;
            r > C + .5 ? a = Kt(C + 1, 0, P - 1) : r < C - .5 && (a = Kt(C - 1, 0, P - 1)), a !== C && E(a)
        };
        return e.addEventListener(`scroll`, t, {
            passive: !0
        }), () => e.removeEventListener(`scroll`, t)
    }, t[35] = C, t[36] = E, t[37] = P, t[38] = Te) : Te = t[38];
    let Ee;
    t[39] !== C || t[40] !== P ? (Ee = [P, C], t[39] = C, t[40] = P, t[41] = Ee) : Ee = t[41], (0, K.useEffect)(Te, Ee);
    let De = `select-none ${ee} relative`,
        Oe, ke;
    t[42] === Symbol.for(`react.memo_cache_sentinel`) ? (Oe = () => O(!0), ke = () => O(!1), t[42] = Oe, t[43] = ke) : (Oe = t[42], ke = t[43]);
    let Ae = `relative w-full ${te} overflow-clip`,
        je;
    if (t[44] !== x || t[45] !== n || t[46] !== M || t[47] !== v || t[48] !== m) {
        let e;
        t[50] !== x || t[51] !== M || t[52] !== v || t[53] !== m ? (e = (e, t) => (0, q.jsx)(`div`, {
            onClick: () => m?.(e, t),
            role: m ? `button` : void 0,
            tabIndex: m ? 0 : void 0,
            onKeyDown: n => {
                m && (n.key === `Enter` || n.key === ` `) && (n.preventDefault(), m(e, t))
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
                className: `h-full w-full ${v} ${x}`
            })
        }, e.src), t[50] = x, t[51] = M, t[52] = v, t[53] = m, t[54] = e) : e = t[54], je = n.map(e), t[44] = x, t[45] = n, t[46] = M, t[47] = v, t[48] = m, t[49] = je
    } else je = t[49];
    let I;
    t[55] !== o || t[56] !== je ? (I = (0, q.jsx)(`div`, {
        ref: j,
        onScroll: o,
        className: `no-scrollbar flex h-full w-full touch-pan-x touch-pan-y snap-x snap-mandatory overflow-x-scroll scroll-smooth`,
        children: je
    }), t[55] = o, t[56] = je, t[57] = I) : I = t[57];
    let Me;
    t[58] !== xe || t[59] !== n.length || t[60] !== M || t[61] !== me || t[62] !== he || t[63] !== b ? (Me = b && n.length > 1 && (0, q.jsxs)(q.Fragment, {
        children: [(0, q.jsx)(Wt, {
            ariaLabel: M.formatMessage({
                id: `l9pylv`,
                defaultMessage: `Previous slide`
            }),
            onClick: () => xe(`previous`),
            side: `start`,
            visible: me,
            children: (0, q.jsx)(y, {
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
    }), t[58] = xe, t[59] = n.length, t[60] = M, t[61] = me, t[62] = he, t[63] = b, t[64] = Me) : Me = t[64];
    let Ne;
    t[65] !== Ae || t[66] !== I || t[67] !== Me ? (Ne = (0, q.jsxs)(`div`, {
        className: Ae,
        children: [I, Me]
    }), t[65] = Ae, t[66] = I, t[67] = Me, t[68] = Ne) : Ne = t[68];
    let L;
    t[69] !== ye || t[70] !== n || t[71] !== C || t[72] !== M || t[73] !== a || t[74] !== ne ? (L = a == null ? ne && n.length > 1 && n.length <= 20 && (0, q.jsx)(`div`, {
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
                className: `h-1.5 w-1.5 rounded-full transition-opacity ${t===C?`bg-white`:`bg-gray-400 opacity-60`}`
            }, t))
        })
    }) : (0, q.jsx)(`div`, {
        className: `pointer-events-none absolute start-0 end-0 bottom-3 flex justify-center`,
        children: a
    }), t[69] = ye, t[70] = n, t[71] = C, t[72] = M, t[73] = a, t[74] = ne, t[75] = L) : L = t[75];
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
    t[0] !== s || t[1] !== c ? (l = S(`btn-secondary border-token-border-default active:bg-token-bg-tertiary hover:bg-token-bg-primary absolute top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-clip-padding backdrop-blur transition-opacity duration-300 hover:shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)] active:opacity-100!`, c, s), t[0] = s, t[1] = c, t[2] = l) : l = t[2];
    let u;
    return t[3] !== n || t[4] !== o || t[5] !== r || t[6] !== l ? (u = (0, q.jsx)(`button`, {
        "aria-label": n,
        onClick: r,
        className: l,
        children: o
    }), t[3] = n, t[4] = o, t[5] = r, t[6] = l, t[7] = u) : u = t[7], u
}
var Gt, K, q, Kt, qt, Jt = e((() => {
        Gt = O(), v(), Ke(), h(), K = t(D()), E(), q = C(), Kt = (e, t, n) => Math.min(Math.max(e, t), n), qt = (e, t, n) => e > n ? t : e < t ? n : e
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
    let [g, _] = (0, J.useState)(h), [ee, te] = (0, J.useState)(!1), v = (0, J.useRef)(null), ne;
    t[4] !== r || t[5] !== p.url ? (ne = r.indexOf(p.url), t[4] = r, t[5] = p.url, t[6] = ne) : ne = t[6];
    let y = Math.max(0, ne),
        b = r[y],
        x;
    t[7] !== b || t[8] !== i || t[9] !== g ? (x = i.includes(b) && g.includes(b), t[7] = b, t[8] = i, t[9] = g, t[10] = x) : x = t[10];
    let S = x,
        re = (0, J.useEffectEvent)(l),
        ie;
    t[11] !== y || t[12] !== S || t[13] !== re ? (ie = () => {
        S && re(y)
    }, t[11] = y, t[12] = S, t[13] = re, t[14] = ie) : ie = t[14];
    let C;
    t[15] !== b || t[16] !== y || t[17] !== S ? (C = [b, y, S], t[15] = b, t[16] = y, t[17] = S, t[18] = C) : C = t[18], (0, J.useEffect)(ie, C);
    let w, E;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (w = () => () => {
        v.current != null && clearTimeout(v.current)
    }, E = [], t[19] = w, t[20] = E) : (w = t[19], E = t[20]), (0, J.useEffect)(w, E);
    let D;
    t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (D = () => {
        te(!0), v.current != null && clearTimeout(v.current), v.current = setTimeout(() => te(!1), 800)
    }, t[21] = D) : D = t[21];
    let O = D,
        k;
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
        }), t[26] = d, t[27] = o, t[28] = e) : e = t[28], k = r.map(e), t[22] = r, t[23] = d, t[24] = o, t[25] = k
    } else k = t[25];
    let ae;
    t[29] === r ? ae = t[30] : (ae = e => {
        let t = r[e];
        m(e => e.url === t ? e : {
            ...e,
            url: t
        })
    }, t[29] = r, t[30] = ae);
    let A;
    t[31] !== a || t[32] !== ee ? (A = a && !ee ? (0, tn.jsx)(`span`, {
        role: `status`,
        className: `rounded-full bg-black/25 px-3 py-2.5 text-xs font-medium text-white backdrop-blur-md`,
        children: (0, tn.jsx)(`span`, {
            className: Zt.generationStatus,
            children: (0, tn.jsx)(T, {
                id: `chatgpt.shopping.virtual_try_on.product_detail.generation.status`,
                defaultMessage: `Generating try-on`
            })
        })
    }) : void 0, t[31] = a, t[32] = ee, t[33] = A) : A = t[33];
    let j;
    t[34] === c ? j = t[35] : (j = (e, t) => c(e.src, t), t[34] = c, t[35] = j);
    let M;
    return t[36] !== u || t[37] !== y || t[38] !== s || t[39] !== k || t[40] !== ae || t[41] !== A || t[42] !== j ? (M = (0, tn.jsx)(Ut, {
        activeIndex: y,
        images: k,
        aspect: u,
        onActiveIndexChange: ae,
        onInteraction: O,
        paginationStatus: A,
        onArrowClick: s,
        onClick: j
    }), t[36] = u, t[37] = y, t[38] = s, t[39] = k, t[40] = ae, t[41] = A, t[42] = j, t[43] = M) : M = t[43], M
}
var en, J, tn, nn = e((() => {
    en = O(), Jt(), J = t(D()), E(), Qt(), tn = C()
}));

function rn() {
    "use forget";
    let e = (0, ln.c)(25),
        t = m(),
        n;
    e[0] === t ? n = e[1] : (n = () => t ? wt(t) : [], e[0] = t, e[1] = n);
    let r = _(n),
        i;
    e[2] === t ? i = e[3] : (i = () => t ? ht(t) : {
        messageId: void 0,
        clientThreadId: void 0
    }, e[2] = t, e[3] = i);
    let {
        messageId: a,
        clientThreadId: o
    } = _(i), s;
    e[4] === t ? s = e[5] : (s = () => t ? me(t).rootMessageId$() != null : !1, e[4] = t, e[5] = s);
    let c = _(s),
        l;
    e[6] === Symbol.for(`react.memo_cache_sentinel`) ? (l = V(), e[6] = l) : l = e[6];
    let u = l;
    if (!t || !a || r.length === 0) return null;
    let d;
    e[7] !== t || e[8] !== c || e[9] !== a ? (d = (0, Y.jsx)(`h3`, {
        className: `mb-4`,
        children: u && !c ? (0, Y.jsxs)(`button`, {
            type: `button`,
            className: `text-token-text-primary text-heading-3 flex w-fit items-center text-start font-medium`,
            onClick: () => an(t, a),
            children: [(0, Y.jsx)(`span`, {
                children: (0, Y.jsx)(T, {
                    ...un.exploreMoreTitle
                })
            }), (0, Y.jsx)(x.ChevronRight, {
                "aria-hidden": `true`,
                className: `icon ms-1 shrink-0`
            })]
        }) : (0, Y.jsx)(`span`, {
            className: `text-token-text-primary text-heading-3 font-medium`,
            children: (0, Y.jsx)(T, {
                ...un.exploreMoreTitle
            })
        })
    }), e[7] = t, e[8] = c, e[9] = a, e[10] = d) : d = e[10];
    let f;
    if (e[11] !== o || e[12] !== t || e[13] !== a || e[14] !== r) {
        let n;
        e[16] !== o || e[17] !== t || e[18] !== a ? (n = (e, n) => (0, Y.jsxs)(`div`, {
            className: `group group/product-card relative min-w-0 self-start`,
            children: [(0, Y.jsx)(`button`, {
                type: `button`,
                className: `block w-full text-start`,
                onClick: r => on(t, a, e, n, {
                    isImageClick: N(r.target)
                }),
                children: (0, Y.jsx)(cn, {
                    product: e
                })
            }), (0, Y.jsx)(W, {
                product: e,
                clientThreadId: o,
                messageId: a
            })]
        }, e.id), e[16] = o, e[17] = t, e[18] = a, e[19] = n) : n = e[19], f = r.map(n), e[11] = o, e[12] = t, e[13] = a, e[14] = r, e[15] = f
    } else f = e[15];
    let p;
    e[20] === f ? p = e[21] : (p = (0, Y.jsx)(`div`, {
        className: `grid grid-cols-2 items-start gap-x-2 gap-y-4`,
        children: f
    }), e[20] = f, e[21] = p);
    let h;
    return e[22] !== d || e[23] !== p ? (h = (0, Y.jsx)(`div`, {
        className: `mt-2 px-5`,
        children: (0, Y.jsxs)(`div`, {
            className: `border-token-border-light border-t pt-6`,
            children: [d, p]
        })
    }), e[22] = d, e[23] = p, e[24] = h) : h = e[24], h
}

function an(e, t) {
    if (!V()) return;
    let n = ht(e).turnIndex;
    me(e).open$({
        rootMessageId: t,
        originTurnIndex: n ?? 0
    })
}

function on(e, t, n, r, i) {
    sn(e, t, n);
    let a = ht(e);
    if (F(n, {
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
        s = f(),
        l = c(),
        u = l ? s.rooms$().get(l) : null;
    if (u != null && s.hasAccess) {
        s.openThreadSidebar$(u, o);
        return
    }
    M(e, o)
}

function sn(e, t, n) {
    let r = ht(e),
        i = be(e),
        a = ut(e),
        o = Ge(i, `product`) || Ge(i, `product_agent`) ? i.contentReferenceStartIndex : void 0;
    ce({
        clientThreadId: r.clientThreadId,
        messageId: t,
        turnIndex: r.turnIndex,
        contentReferenceStartIndex: o,
        surfaceLocation: de.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
        entityAffordance: Fe.CHATGPT_ENTITY_AFFORDANCE_PRODUCT_CARD,
        entityId: oe(n, t, o),
        entityCategory: `product`,
        contentReferenceType: `product_entity`,
        isGenui: r.isGenui,
        parentContext: a ? {
            entityId: oe(a, t, o),
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
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = b(`2128165686`).get(`image_fit`, ``), t[0] = r) : r = t[0];
    let i = r,
        a = i === `contain_all` || i === `product_card` ? i : `default`,
        o = n.image_urls?.[0],
        s = n.offers?.[0]?.price,
        c;
    t[1] !== o || t[2] !== n ? (c = o ? (0, Y.jsx)(Se, {
        src: o,
        assetPointerDimensions: Me(n, o),
        fitStrategy: a,
        alt: n.title,
        className: `absolute inset-0 m-0 block h-full w-full transition-transform duration-200 group-hover:scale-[1.02]`
    }, o) : null, t[1] = o, t[2] = n, t[3] = c) : c = t[3];
    let l;
    t[4] === c ? l = t[5] : (l = (0, Y.jsx)(`div`, {
        className: `bg-tertiary relative aspect-square w-full overflow-hidden rounded-2xl`,
        ...Be,
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
    ln = O(), P(), L(), l(), ie(), s(), p(), fe(), ve(), He(), R(), et(), I(), H(), Mt(), a(), re(), ae(), E(), ze(), Y = C(), un = w({
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
            isModal: n,
            product: r,
            conversation: i,
            messageId: a,
            contentReferenceStartIndex: o,
            turnIndex: s,
            productIndex: c,
            onFollowUp: l
        } = e,
        u = k(),
        d;
    t[0] === u ? d = t[1] : (d = u.formatMessage({
        id: `products.detailsFollowUpButton.label`,
        defaultMessage: `Follow up`
    }), t[0] = u, t[1] = d);
    let f = d,
        p;
    t[2] !== o || t[3] !== i || t[4] !== n || t[5] !== a || t[6] !== l || t[7] !== r || t[8] !== c || t[9] !== s ? (p = () => {
        n && pe(i), B(i, r, {
            messageId: a,
            turnIndex: s,
            contentReferenceStartIndex: o,
            productIndex: c,
            contentReferenceType: Re.ProductEntity
        }, A.CHATGPT_PRODUCT_FOLLOW_UP_INTERACTION_SURFACE_FOLLOW_UP_BUTTON), l?.()
    }, t[2] = o, t[3] = i, t[4] = n, t[5] = a, t[6] = l, t[7] = r, t[8] = c, t[9] = s, t[10] = p) : p = t[10];
    let m;
    t[11] === f ? m = t[12] : (m = (0, mn.jsx)(`span`, {
        className: `flex items-center select-none`,
        children: f
    }), t[11] = f, t[12] = m);
    let h;
    return t[13] !== f || t[14] !== p || t[15] !== m ? (h = (0, mn.jsx)(`div`, {
        id: `product-details-follow-up-button`,
        className: `fixed end-7 bottom-10 z-[50] md:bottom-8`,
        children: (0, mn.jsx)(te, {
            size: `large`,
            color: `primary`,
            icon: Ye,
            label: f,
            contentWrapperClassName: `gap-2`,
            className: `corner-superellipse/1.1 shadow-short h-12 cursor-pointer overflow-clip rounded-[28px] border-none px-6 py-7 font-medium active:opacity-100!`,
            onClick: p,
            children: m
        })
    }), t[13] = f, t[14] = p, t[15] = m, t[16] = h) : h = t[16], h
}
var pn, mn, hn = e((() => {
    pn = O(), L(), ye(), r(), qe(), fe(), ke(), E(), mn = C()
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
                children: r ? (0, X.jsx)(T, {
                    id: `chatgpt.search.product_details.price_history.typical_single`,
                    defaultMessage: `Typically {price}`,
                    values: {
                        price: n.typical_low_price
                    }
                }) : (0, X.jsx)(T, {
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
    _n = O(), E(), X = C()
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
    Sn = O(), E(), Ft(), Z = C(), Cn = e => {
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
                    title: (0, Z.jsx)(T, {
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
                    title: (0, Z.jsx)(T, {
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
            product: n,
            clientThreadId: r,
            messageId: i,
            contentReferenceStartIndex: a,
            turnIndex: o,
            productIndex: s,
            conversation: c,
            offsetTopMargin: l,
            sidebar: f,
            isModal: p,
            galleryAspect: m,
            interactionSource: h,
            initialVisibleOfferCount: v,
            onFollowUp: y
        } = e,
        x = l !== void 0 && l,
        re = p !== void 0 && p,
        ie;
    t[0] === c ? ie = t[1] : (ie = () => ht(c), t[0] = c, t[1] = ie);
    let C = _(ie),
        w;
    t[2] === C ? w = t[3] : (w = {
        ...C,
        isGenui: !0
    }, t[2] = C, t[3] = w);
    let E = j(w),
        [D, O] = (0, Q.useState)(null),
        [k, ae] = (0, Q.useState)(!1),
        [A, M] = (0, Q.useState)(!1),
        [N, P] = (0, Q.useState)(!1),
        [ce, le] = (0, Q.useState)(!1),
        fe = Pn(),
        {
            showDebugConversationTurns: pe
        } = Oe(),
        me = f?.type === `product_agent` && f.publicEntityShareId != null,
        he = !me && fe?.persist_conversation_to_user === !0,
        ge = (0, Q.use)(De),
        _e = (0, Q.useRef)(null),
        ve = (0, Q.useRef)(null),
        ye = (0, Q.useRef)(null),
        [be, Se] = (0, Q.useState)(null),
        Ce;
    t[4] === r ? Ce = t[5] : (Ce = u(r) ?? r, t[4] = r, t[5] = Ce);
    let F = Ce,
        Te = d(),
        ke;
    t[6] !== c.id || t[7] !== Te ? (ke = u(c.id) ?? Te, t[6] = c.id, t[7] = Te, t[8] = ke) : ke = t[8];
    let I = ke,
        L = ne(`3375735072`),
        Fe;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (Fe = Ae(), t[9] = Fe) : Fe = t[9];
    let Le = Fe,
        Re;
    t[10] !== c || t[11] !== n ? (Re = () => {
        let e = dt(c),
            t = e === `enriched` ? _t(c) : null,
            r = Tt(c),
            {
                product: i,
                offers: a
            } = r ?? {
                product: n,
                offers: []
            };
        return {
            productDetailDataScope: e,
            resolvedProductDetailData: r,
            statefulProduct: i,
            renderedOffers: a,
            hasStreamedEntityOffers: e === `source_catalog` ? r != null : (t?.product.offers?.length ?? 0) > 0
        }
    }, t[10] = c, t[11] = n, t[12] = Re) : Re = t[12];
    let {
        productDetailDataScope: R,
        resolvedProductDetailData: ze,
        statefulProduct: z,
        renderedOffers: Be,
        hasStreamedEntityOffers: B
    } = _(Re), Ve, He;
    if (t[13] !== R) {
        let e = R === `enriched` ? b(`2128165686`) : void 0;
        Ve = e?.get(`disable_sidebar_what_to_know`, !1) ?? !1, He = e?.get(`disable_sidebar_reviews`, !1) ?? !1, t[13] = R, t[14] = Ve, t[15] = He
    } else Ve = t[14], He = t[15];
    let Ge = He,
        Ke;
    t[16] === c ? Ke = t[17] : (Ke = () => ({
        productRationale: mt(c),
        isLoadingReviewsOrRationale: vt(c)
    }), t[16] = c, t[17] = Ke);
    let {
        productRationale: qe,
        isLoadingReviewsOrRationale: Je
    } = _(Ke), Ye = !Ve && !!(qe?.rationale || Je), Xe;
    t[18] === c ? Xe = t[19] : (Xe = () => ct(c), t[18] = c, t[19] = Xe);
    let et = _(Xe),
        tt;
    t[20] === c ? tt = t[21] : (tt = () => xt(c), t[20] = c, t[21] = tt);
    let nt = _(tt),
        rt;
    t[22] === c ? rt = t[23] : (rt = () => Ct(c), t[22] = c, t[23] = rt);
    let at = _(rt),
        st;
    t[24] === c ? st = t[25] : (st = () => ft(c), t[24] = c, t[25] = st);
    let ut = _(st),
        yt;
    t[26] === c ? yt = t[27] : (yt = () => bt(c), t[26] = c, t[27] = yt);
    let St = _(yt),
        wt;
    t[28] === c ? wt = t[29] : (wt = () => lt(c), t[28] = c, t[29] = wt);
    let Dt = _(wt),
        Ot;
    t[30] === c ? Ot = t[31] : (Ot = () => {
        let e = Tt(c)?.product;
        return {
            productImageUrls: pt(c),
            isGeneratingTryOn: e != null && Et(c, e.id)
        }
    }, t[30] = c, t[31] = Ot);
    let {
        productImageUrls: V,
        isGeneratingTryOn: At
    } = _(Ot), H = f?.type === `product_agent` || f?.type === `entity` ? f.pinnedImage : void 0, U = H?.content_url || H?.thumbnail_url, Mt;
    t[32] !== H?.content_url || t[33] !== H?.thumbnail_url || t[34] !== U || t[35] !== V ? (Mt = U ? [U, ...V.filter(e => e !== H?.content_url && e !== H?.thumbnail_url)] : V, t[32] = H?.content_url, t[33] = H?.thumbnail_url, t[34] = U, t[35] = V, t[36] = Mt) : Mt = t[36];
    let W = Mt,
        Ft;
    t[37] === z ? Ft = t[38] : (Ft = je(z), t[37] = z, t[38] = Ft);
    let It = Ft,
        Rt = R === `enriched` && (z.shopping_vto?.eligible ?? n.shopping_vto?.eligible ?? !1),
        [G] = (0, Q.useState)(Dn),
        Bt, Ht;
    t[39] !== c || t[40] !== F || t[41] !== i || t[42] !== n ? (Bt = () => $e({
        conversation: c,
        shellProduct: n,
        conversationId: F,
        messageId: i
    }), Ht = [c, n, F, i], t[39] = c, t[40] = F, t[41] = i, t[42] = n, t[43] = Bt, t[44] = Ht) : (Bt = t[43], Ht = t[44]), (0, Q.useEffect)(Bt, Ht);
    let Ut, Wt;
    t[45] !== c || t[46] !== F || t[47] !== i || t[48] !== he || t[49] !== n || t[50] !== z ? (Ut = () => {
        it({
            conversation: c,
            shellProduct: n,
            statefulProduct: z,
            conversationId: F,
            messageId: i,
            persistConversationToUser: he
        })
    }, Wt = [c, F, i, he, n, z], t[45] = c, t[46] = F, t[47] = i, t[48] = he, t[49] = n, t[50] = z, t[51] = Ut, t[52] = Wt) : (Ut = t[51], Wt = t[52]), (0, Q.useEffect)(Ut, Wt);
    let Gt, K;
    t[53] === Symbol.for(`react.memo_cache_sentinel`) ? (Gt = () => {
        let e = ye.current;
        if (!e) return;
        let t = () => {
            Se(e.getBoundingClientRect().height)
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
    t[55] !== r || t[56] !== a || t[57] !== c || t[58] !== i || t[59] !== R || t[60] !== E ? (qt = () => ee(() => {
        let e = _t(c)?.product;
        e && !q.current && (q.current = !0, Pe({
            clientThreadId: r,
            messageId: i,
            contentReferenceStartIndex: a,
            product: e,
            source: R === `source_catalog` ? xe.CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_SOURCE_CATALOG : xe.CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_ENRICHED
        }), E(`Product Sidebar Entity Loaded`, `product_sidebar_entity_loaded`, `product_entity`, {
            ...e.analytics_meta ?? {},
            product_event_uuid: e.product_event_uuid
        }))
    }), Jt = [r, a, c, i, R, E], t[55] = r, t[56] = a, t[57] = c, t[58] = i, t[59] = R, t[60] = E, t[61] = qt, t[62] = Jt) : (qt = t[61], Jt = t[62]), (0, Q.useEffect)(qt, Jt);
    let Yt;
    t[63] !== h || t[64] !== R || t[65] !== ze || t[66] !== n || t[67] !== z || t[68] !== E ? (Yt = () => {
        if (R === `source_catalog` && ze == null) return;
        let e = R === `source_catalog` ? z : n;
        if (Kt.current === e.id) return;
        Kt.current = e.id;
        let t = jn(e, h),
            r = [t.offer_url, t.product_url, t.site_url, t.merchant_url].find(En);
        E(`Product Detail Shown`, `product_detail_shown`, `product_entity`, t, void 0, t => we(`product_detail_shown`, `detail_shown`, t, {
            productId: e.id,
            interactionSource: h,
            url: r
        }))
    }, t[63] = h, t[64] = R, t[65] = ze, t[66] = n, t[67] = z, t[68] = E, t[69] = Yt) : Yt = t[69];
    let Xt;
    t[70] !== r || t[71] !== a || t[72] !== h || t[73] !== i || t[74] !== I || t[75] !== R || t[76] !== ze || t[77] !== n || t[78] !== z || t[79] !== E || t[80] !== o ? (Xt = [r, a, h, i, I, R, ze, n, z, E, o], t[70] = r, t[71] = a, t[72] = h, t[73] = i, t[74] = I, t[75] = R, t[76] = ze, t[77] = n, t[78] = z, t[79] = E, t[80] = o, t[81] = Xt) : Xt = t[81], (0, Q.useEffect)(Yt, Xt);
    let Zt;
    t[82] !== R || t[83] !== z ? (Zt = R === `enriched` ? z.variants ?? [] : [], t[82] = R, t[83] = z, t[84] = Zt) : Zt = t[84];
    let Qt = Zt,
        en;
    t[85] === z ? en = t[86] : (en = e => Me(z, e), t[85] = z, t[86] = en);
    let J = en,
        tn;
    if (t[87] !== V || t[88] !== z) {
        tn = [];
        for (let e of V) {
            let t = Ue(e, Me(z, e));
            t != null && tn.push(t)
        }
        t[87] = V, t[88] = z, t[89] = tn
    } else tn = t[89];
    let nn = tn,
        an = Ie(nn),
        on;
    t[90] !== nn || t[91] !== an ? (on = e => {
        let t = Ue(e);
        if (t == null) return e;
        let n = nn.findIndex(e => e.asset_pointer === t.asset_pointer);
        return an[n]?.data?.url ?? null
    }, t[90] = nn, t[91] = an, t[92] = on) : on = t[92];
    let sn = on,
        cn;
    t[93] !== C.isGenui || t[94] !== r || t[95] !== a || t[96] !== W || t[97] !== i || t[98] !== H?.url || t[99] !== U || t[100] !== sn || t[101] !== n || t[102] !== z || t[103] !== o ? (cn = (e, t) => {
        let s = W[e];
        We({
            clientThreadId: r,
            messageId: i,
            turnIndex: o,
            contentReferenceStartIndex: a,
            surfaceLocation: de.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
            imageAffordance: t,
            imageIndex: e,
            contentReferenceType: `product_entity`,
            parentContext: {
                entityId: oe(n, i, a),
                entityCategory: `product`,
                contentReferenceStartIndex: a,
                messageId: i
            },
            isGenui: C.isGenui,
            url: s === U ? H?.url : z.url ?? n.url,
            contentUrl: s ? sn(s) : void 0,
            isVirtualTryOnImage: Ee(z, s)
        })
    }, t[93] = C.isGenui, t[94] = r, t[95] = a, t[96] = W, t[97] = i, t[98] = H?.url, t[99] = U, t[100] = sn, t[101] = n, t[102] = z, t[103] = o, t[104] = cn) : cn = t[104];
    let ln = cn,
        Y;
    t[105] !== C || t[106] !== a || t[107] !== F || t[108] !== St || t[109] !== W || t[110] !== i || t[111] !== ge || t[112] !== H || t[113] !== U || t[114] !== s || t[115] !== sn || t[116] !== n || t[117] !== z ? (Y = e => {
        if (ge == null) return;
        let t = W.map(e => ({
                imageUrl: e,
                resolvedImageUrl: sn(e)
            })),
            r = [],
            o = [],
            c;
        for (let {
                imageUrl: n,
                resolvedImageUrl: i
            }
            of t) {
            if (i == null) continue;
            let t = Me(z, n) ?? {
                    width: 0,
                    height: 0
                },
                a = H && n === U ? {
                    ...H,
                    show_url: !0
                } : {
                    url: i,
                    content_url: i,
                    thumbnail_url: i,
                    title: St,
                    content_size: t,
                    thumbnail_size: t,
                    is_proxied_image: Ue(n) != null
                };
            Ee(z, n) && o.push(r.length), r.push(a), n === e && (c = a)
        }
        c != null && (ge({
            image: c,
            source: se.ImageGroup,
            analyticsMetadata: C,
            contentReferenceStartIndex: a,
            productIndex: s,
            imageResults: r,
            engagementMetadata: {
                virtualTryOnImageIndices: o,
                contentReferenceType: `product_entity`,
                pageUrl: z.url ?? n.url ?? null,
                parentContext: {
                    entityId: oe(n, i, a),
                    entityCategory: `product`,
                    contentReferenceStartIndex: a,
                    messageId: i
                }
            }
        }), (je(z).includes(e) || je(n).includes(e)) && Qe({
            productId: z.id,
            conversationId: F,
            messageId: i
        }, `product_detail`))
    }, t[105] = C, t[106] = a, t[107] = F, t[108] = St, t[109] = W, t[110] = i, t[111] = ge, t[112] = H, t[113] = U, t[114] = s, t[115] = sn, t[116] = n, t[117] = z, t[118] = Y) : Y = t[118];
    let un = Y,
        dn = jt({
            isCheckoutEnabled: L,
            isClearingVariantSelection: N,
            isLoadingProductEntity: at
        }),
        pn = ut === `success` || ut === `error`,
        mn;
    t[119] !== pn || t[120] !== B || t[121] !== R || t[122] !== Be || t[123] !== n.offers ? (mn = R === `source_catalog` || B ? Be : pn ? n.offers ?? [] : [], t[119] = pn, t[120] = B, t[121] = R, t[122] = Be, t[123] = n.offers, t[124] = mn) : mn = t[124];
    let hn = mn,
        _n = hn.length > 1,
        X = B && ut === `success`,
        vn;
    t[125] !== c || t[126] !== X || t[127] !== B || t[128] !== i || t[129] !== G || t[130] !== n.id || t[131] !== n.query || t[132] !== n.title ? (vn = () => {
        G.reset({
            conversation: c,
            messageId: i,
            productKey: n.id || n.query || n.title
        }), G.logRenderOfferTimings(B, X, !0)
    }, t[125] = c, t[126] = X, t[127] = B, t[128] = i, t[129] = G, t[130] = n.id, t[131] = n.query, t[132] = n.title, t[133] = vn) : vn = t[133];
    let yn = (0, Q.useEffectEvent)(vn),
        bn;
    t[134] === yn ? bn = t[135] : (bn = () => {
        yn()
    }, t[134] = yn, t[135] = bn);
    let xn;
    t[136] !== G || t[137] !== n.id ? (xn = [G, n.id], t[136] = G, t[137] = n.id, t[138] = xn) : xn = t[138], (0, Q.useEffect)(bn, xn);
    let Sn, Z;
    t[139] !== X || t[140] !== B || t[141] !== G ? (Sn = () => {
        G.logRenderOfferTimings(B, X)
    }, Z = [X, B, G], t[139] = X, t[140] = B, t[141] = G, t[142] = Sn, t[143] = Z) : (Sn = t[142], Z = t[143]), (0, Q.useEffect)(Sn, Z);
    let wn;
    t[144] === c ? wn = t[145] : (wn = () => {
        let e = _e.current,
            t = ve.current;
        if (!e || !t) return;
        let n = () => {
            let n = e.getBoundingClientRect().top,
                r = t.getBoundingClientRect().bottom;
            return Math.max(0, Math.floor(r - n))
        };
        if (typeof ResizeObserver > `u`) {
            ot(c, n());
            return
        }
        ot(c, -1);
        let r = new ResizeObserver(() => {
            ot(c, n())
        });
        return r.observe(e), r.observe(t), ot(c, n()), () => {
            r.disconnect()
        }
    }, t[144] = c, t[145] = wn);
    let Tn;
    t[146] !== c || t[147] !== ut || t[148] !== V.length ? (Tn = [c, ut, V.length], t[146] = c, t[147] = ut, t[148] = V.length, t[149] = Tn) : Tn = t[149], (0, Q.useEffect)(wn, Tn);
    let kn = f && (me || I) && Dt;
    if (R === `source_catalog` && ze == null) {
        let e = x ? `bg-surface-primary` : `bg-token-bg-primary`,
            r;
        t[150] === e ? r = t[151] : (r = S(`flex min-h-screen w-full flex-col gap-4 px-6 pt-8`, e), t[150] = e, t[151] = r);
        let a;
        t[152] !== c || t[153] !== F || t[154] !== i || t[155] !== ut || t[156] !== n ? (a = ut === `error` ? (0, $.jsxs)(`div`, {
            className: `flex min-h-[420px] flex-col items-center justify-center text-center`,
            children: [(0, $.jsx)(`p`, {
                className: `text-token-text-secondary max-w-xs text-sm`,
                children: (0, $.jsx)(T, {
                    id: `chatgpt.search.product_details.source_catalog.error.message`,
                    defaultMessage: `We couldn't load this product.`
                })
            }), (0, $.jsx)(te, {
                type: `button`,
                className: `mt-4`,
                color: `secondary`,
                size: `small`,
                onClick: () => {
                    gt({
                        conversation: c,
                        shellProduct: n,
                        conversationId: F,
                        messageId: i
                    })
                },
                children: (0, $.jsx)(T, {
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
        }), t[152] = c, t[153] = F, t[154] = i, t[155] = ut, t[156] = n, t[157] = a) : a = t[157];
        let o;
        return t[158] !== at || t[159] !== r || t[160] !== a ? (o = (0, $.jsx)(`div`, {
            className: r,
            "aria-busy": at,
            children: a
        }), t[158] = at, t[159] = r, t[160] = a, t[161] = o) : o = t[161], o
    }
    let An = x ? `bg-surface-primary` : `bg-token-bg-primary`,
        Fn = x ? `mt-[calc(var(--threadFlyOut-leading-height,var(--product-flyout-sticky-header-height))*-1)] min-h-screen` : `mt-0`,
        In;
    t[162] !== An || t[163] !== Fn ? (In = S(`flex w-full flex-col`, An, Fn), t[162] = An, t[163] = Fn, t[164] = In) : In = t[164];
    let Ln = `${z.id}:${W[0]??``}`,
        Rn;
    t[165] !== J || t[166] !== H || t[167] !== U || t[168] !== z.title ? (Rn = (e, t) => (0, $.jsx)(Mn, {
        src: e,
        onLoad: t,
        title: e === U && H ? H.title : z.title,
        assetPointerDimensions: J(e)
    }), t[165] = J, t[166] = H, t[167] = U, t[168] = z.title, t[169] = Rn) : Rn = t[169];
    let zn;
    t[170] !== F || t[171] !== i || t[172] !== z.id ? (zn = () => {
        Ze({
            productId: z.id,
            conversationId: F,
            messageId: i
        }, `product_detail`)
    }, t[170] = F, t[171] = i, t[172] = z.id, t[173] = zn) : zn = t[173];
    let Bn;
    t[174] === ln ? Bn = t[175] : (Bn = (e, t) => {
        ln(t, e === `next` ? ue.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_NEXT_BUTTON : ue.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_PREVIOUS_BUTTON)
    }, t[174] = ln, t[175] = Bn);
    let Vn;
    t[176] !== ln || t[177] !== un ? (Vn = (e, t) => {
        ln(t, ue.CHATGPT_IMAGE_AFFORDANCE_PRODUCT_DETAIL_IMAGE), un(e)
    }, t[176] = ln, t[177] = un, t[178] = Vn) : Vn = t[178];
    let Hn;
    t[179] !== m || t[180] !== W || t[181] !== It || t[182] !== At || t[183] !== Ln || t[184] !== Rn || t[185] !== zn || t[186] !== Bn || t[187] !== Vn ? (Hn = (0, $.jsx)(`div`, {
        ref: ve,
        children: (0, $.jsx)($t, {
            aspect: m,
            imageUrls: W,
            generatedImageUrls: It,
            isGenerating: At,
            renderImage: Rn,
            onGeneratedImageViewed: zn,
            onArrowClick: Bn,
            onClick: Vn
        }, Ln)
    }), t[179] = m, t[180] = W, t[181] = It, t[182] = At, t[183] = Ln, t[184] = Rn, t[185] = zn, t[186] = Bn, t[187] = Vn, t[188] = Hn) : Hn = t[188];
    let Un;
    t[189] === be ? Un = t[190] : (Un = be == null ? void 0 : {
        height: be
    }, t[189] = be, t[190] = Un);
    let Wn;
    t[191] === Symbol.for(`react.memo_cache_sentinel`) ? (Wn = {
        duration: .2,
        ease: `easeInOut`
    }, t[191] = Wn) : Wn = t[191];
    let Gn;
    t[192] === St ? Gn = t[193] : (Gn = (0, $.jsx)(`h2`, {
        ref: ye,
        className: `text-xl`,
        children: St
    }), t[192] = St, t[193] = Gn);
    let Kn;
    t[194] !== Un || t[195] !== Gn ? (Kn = (0, $.jsx)(g.div, {
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
    t[205] !== c || t[206] !== k || t[207] !== L || t[208] !== A || t[209] !== s || t[210] !== n || t[211] !== z || t[212] !== E || t[213] !== Qt ? (Xn = L && Qt.length > 0 && (0, $.jsx)(`div`, {
        className: S(`px-5 pt-4 pb-2`, A && `pointer-events-none opacity-50`),
        "aria-busy": A,
        children: (0, $.jsx)(Vt, {
            options: Qt,
            showErrors: k,
            updateOption: (e, t, r) => On({
                optionGroupId: e,
                selectedId: t,
                variant_index: r,
                conversation: c,
                shellProduct: n,
                statefulProduct: z,
                setIsSwitchingVariant: M,
                setIsClearingVariantSelection: P,
                setSuppressOfferAnimations: le,
                setError: O,
                trackContentReferenceEvent: E,
                productIndex: s,
                productId: n.id
            })
        })
    }), t[205] = c, t[206] = k, t[207] = L, t[208] = A, t[209] = s, t[210] = n, t[211] = z, t[212] = E, t[213] = Qt, t[214] = Xn) : Xn = t[214];
    let Zn;
    t[215] === D ? Zn = t[216] : (Zn = D && (0, $.jsx)(`div`, {
        className: `text-token-interactive-label-danger-secondary-default text-center`,
        children: D
    }), t[215] = D, t[216] = Zn);
    let Qn;
    t[217] !== L || t[218] !== V || t[219] !== z.image_urls ? (Qn = L ? z.image_urls ?? [] : V, t[217] = L, t[218] = V, t[219] = z.image_urls, t[220] = Qn) : Qn = t[220];
    let $n = R === `source_catalog` || Ye,
        er;
    t[221] === Symbol.for(`react.memo_cache_sentinel`) ? (er = () => ae(!0), t[221] = er) : er = t[221];
    let tr;
    t[222] !== a || t[223] !== c || t[224] !== v || t[225] !== h || t[226] !== hn || t[227] !== dn || t[228] !== s || t[229] !== _n || t[230] !== z || t[231] !== ce || t[232] !== Qn || t[233] !== $n || t[234] !== E ? (tr = (0, $.jsx)(Lt, {
        className: `flex flex-col px-5 pt-3`,
        offers: hn,
        conversation: c,
        contentReferenceStartIndex: a,
        productIndex: s,
        product: z,
        trackContentReferenceEvent: E,
        imageUrls: Qn,
        isLoading: dn,
        suppressOfferAnimations: ce,
        showBestPriceOfferTag: _n,
        showBottomBorder: $n,
        onOpenCheckout: er,
        interactionSource: h,
        initialVisibleOfferCount: v
    }), t[222] = a, t[223] = c, t[224] = v, t[225] = h, t[226] = hn, t[227] = dn, t[228] = s, t[229] = _n, t[230] = z, t[231] = ce, t[232] = Qn, t[233] = $n, t[234] = E, t[235] = tr) : tr = t[235];
    let nr;
    t[236] !== Ge || t[237] !== Ve || t[238] !== Je || t[239] !== i || t[240] !== R || t[241] !== qe || t[242] !== et || t[243] !== G || t[244] !== z || t[245] !== E ? (nr = R === `source_catalog` ? (0, $.jsx)(Cn, {
        product: z
    }) : (0, $.jsxs)(`div`, {
        className: `flex flex-col bg-inherit`,
        children: [!Ve && (0, $.jsx)(Pt, {
            contentReference: qe,
            trackContentReferenceEvent: E,
            disableAnimation: !!(qe || et),
            isLoading: Je,
            productAnalyticsMeta: z.analytics_meta ?? void 0,
            productEventUuid: z.product_event_uuid ?? void 0,
            renderProfiler: G
        }), !Ge && (0, $.jsx)(zt, {
            contentReference: et,
            messageId: i,
            trackContentReferenceEvent: E,
            disableAnimation: !!(qe || et),
            productAnalyticsMeta: z.analytics_meta ?? void 0,
            productEventUuid: z.product_event_uuid ?? void 0,
            renderProfiler: G
        })]
    }), t[236] = Ge, t[237] = Ve, t[238] = Je, t[239] = i, t[240] = R, t[241] = qe, t[242] = et, t[243] = G, t[244] = z, t[245] = E, t[246] = nr) : nr = t[246];
    let rr;
    t[247] === Symbol.for(`react.memo_cache_sentinel`) ? (rr = (0, $.jsx)(rn, {}), t[247] = rr) : rr = t[247];
    let ir;
    t[248] !== a || t[249] !== c || t[250] !== Rt || t[251] !== i || t[252] !== V || t[253] !== s || t[254] !== n.shopping_vto || t[255] !== z || t[256] !== o ? (ir = Rt && (0, $.jsx)(kt, {
        contentReferenceStartIndex: a,
        conversation: c,
        messageId: i,
        product: {
            ...z,
            image_urls: V,
            shopping_vto: z.shopping_vto == null ? n.shopping_vto : {
                ...z.shopping_vto,
                generated_images: Ne(z.shopping_vto.generated_images ?? [], n.shopping_vto?.generated_images ?? [])
            }
        },
        productIndex: s,
        turnIndex: o
    }), t[248] = a, t[249] = c, t[250] = Rt, t[251] = i, t[252] = V, t[253] = s, t[254] = n.shopping_vto, t[255] = z, t[256] = o, t[257] = ir) : ir = t[257];
    let ar;
    t[258] !== a || t[259] !== c || t[260] !== re || t[261] !== me || t[262] !== i || t[263] !== y || t[264] !== s || t[265] !== kn || t[266] !== z || t[267] !== o ? (ar = kn && (0, $.jsx)(`div`, {
        className: `flex justify-end px-6 pt-16 pb-6`,
        children: (0, $.jsx)(fn, {
            conversation: c,
            messageId: me ? void 0 : i,
            contentReferenceStartIndex: a,
            turnIndex: o,
            productIndex: s,
            product: z,
            isModal: re,
            onFollowUp: y
        })
    }), t[258] = a, t[259] = c, t[260] = re, t[261] = me, t[262] = i, t[263] = y, t[264] = s, t[265] = kn, t[266] = z, t[267] = o, t[268] = ar) : ar = t[268];
    let or;
    t[269] !== nt || t[270] !== pe ? (or = !1, t[269] = nt, t[270] = pe, t[271] = or) : or = t[271];
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
    let ne = !1,
        y = (e, t) => {
            ne = !0, yt({
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
                y(t, t.product_lookup_key ?? v)
            } else {
                let e = (await tt({
                    productLookupKey: v,
                    onProductEntity: e => {
                        let t = e.product;
                        t?.variants && y(t, v)
                    }
                }))?.product;
                !ne && e?.variants && y(e, v)
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
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = S(`h-full w-full cursor-zoom-in object-contain mix-blend-darken dark:mix-blend-lighten`), t[0] = o) : o = t[0];
    let s;
    return t[1] !== n || t[2] !== a || t[3] !== r || t[4] !== i ? (s = (0, $.jsx)(Se, {
        src: r,
        onLoad: a,
        assetPointerDimensions: n,
        alt: i,
        className: o
    }), t[1] = n, t[2] = a, t[3] = r, t[4] = i, t[5] = s) : s = t[5], s
}
var Nn, Q, $, Pn, Fn = e((() => {
    Nn = O(), Ve(), P(), z(), L(), r(), _e(), Ce(), Le(), le(), nn(), Dt(), Ot(), Xe(), R(), At(), He(), Te(), st(), nt(), et(), ge(), a(), n(), o(), re(), ae(), he(), h(), i(), Q = t(D()), E(), dn(), hn(), ze(), Ht(), vn(), G(), It(), Rt(), wn(), U(), $ = C(), Pn = () => void 0
}));
export {
    Fn as n, Tn as t
};
//# sourceMappingURL=ecdd5ba5-hmyispx1553jxjh4.js.map