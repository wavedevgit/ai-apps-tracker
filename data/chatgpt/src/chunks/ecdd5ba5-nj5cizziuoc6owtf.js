import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    Bx as r,
    Ea as i,
    Gnt as a,
    JT as o,
    Mw as s,
    Nw as c,
    Oa as l,
    P5 as u,
    Qm as d,
    Vx as f,
    X5 as p,
    Xnt as m,
    Y5 as h,
    YT as g,
    Zm as _,
    Znt as ee,
    a5 as te,
    cn as v,
    g8 as y,
    hF as b,
    ip as x,
    pF as S,
    rY as C,
    rp as ne,
    tY as re
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as w,
    Ln as T,
    Nn as E,
    Rn as D,
    Vn as O,
    wn as k,
    zn as ie
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    A3 as ae,
    Alt as A,
    Clt as j,
    Cxn as M,
    Dlt as oe,
    Dmt as N,
    Elt as P,
    Emt as se,
    Ept as ce,
    FIn as le,
    Hft as ue,
    N3 as de,
    Omt as fe,
    P3 as pe,
    PIn as me,
    QFn as he,
    Smt as ge,
    Tmt as _e,
    Tpt as ve,
    Txn as ye,
    Uft as be,
    Ugt as xe,
    Wgt as Se,
    _mt as Ce,
    _tn as we,
    aIn as Te,
    adt as Ee,
    cjn as F,
    cpt as De,
    dkn as Oe,
    eIn as ke,
    fkn as I,
    gIn as L,
    hIn as Ae,
    htn as je,
    jlt as R,
    klt as z,
    ljn as Me,
    lpt as Ne,
    mjn as B,
    odt as Pe,
    ppt as Fe,
    qFn as Ie,
    qft as Le,
    sjn as Re,
    tIn as V,
    ukn as ze,
    vmt as Be,
    w3 as Ve,
    wmt as He,
    x3 as Ue,
    ymt as We
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    CC as Ge,
    Ch as Ke,
    SC as qe,
    Sh as Je
} from "./30901919-e8h11sw136qen6v0.js";
import {
    $r as Ye,
    Wr as Xe,
    ei as Ze
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
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
} from "./2b67bcd8-n5jrkj6wxl5myjnc.js";
import {
    i as Tt,
    n as Et
} from "./2da3878c-gmkualhudyd9s5g8.js";
import {
    r as Dt,
    t as Ot
} from "./58ee18a8-konrwm62xzp467yf.js";
import {
    c as H,
    d as kt,
    g as At,
    l as U,
    m as W,
    n as jt,
    t as Mt,
    u as Nt
} from "./1362c49f-kxqbfemprag3pmdn.js";
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
} from "./f4222f0c-ew6n75vb2feccf9d.js";

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
        [ae, A] = (0, K.useState)(!1),
        j = (0, K.useRef)(null),
        M = ie(),
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
        A(!0);
        let e = window.setTimeout(() => A(!1), 2e3);
        return () => window.clearTimeout(e)
    }, pe = [x], t[13] = x, t[14] = fe, t[15] = pe), (0, K.useEffect)(fe, pe);
    let me = O,
        he = O || ae,
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
    let I = `relative w-full ${v} overflow-clip`,
        L;
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
        }, e.src), t[50] = S, t[51] = M, t[52] = y, t[53] = h, t[54] = e) : e = t[54], L = n.map(e), t[44] = S, t[45] = n, t[46] = M, t[47] = y, t[48] = h, t[49] = L
    } else L = t[49];
    let Ae;
    t[55] !== o || t[56] !== L ? (Ae = (0, q.jsx)(`div`, {
        ref: j,
        onScroll: o,
        className: `no-scrollbar flex h-full w-full touch-pan-x touch-pan-y snap-x snap-mandatory overflow-x-scroll scroll-smooth`,
        children: L
    }), t[55] = o, t[56] = L, t[57] = Ae) : Ae = t[57];
    let je;
    t[58] !== xe || t[59] !== n.length || t[60] !== M || t[61] !== me || t[62] !== he || t[63] !== x ? (je = x && n.length > 1 && (0, q.jsxs)(q.Fragment, {
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
            children: (0, q.jsx)(qe, {
                className: `icon-md`
            })
        })]
    }), t[58] = xe, t[59] = n.length, t[60] = M, t[61] = me, t[62] = he, t[63] = x, t[64] = je) : je = t[64];
    let R;
    t[65] !== I || t[66] !== Ae || t[67] !== je ? (R = (0, q.jsxs)(`div`, {
        className: I,
        children: [Ae, je]
    }), t[65] = I, t[66] = Ae, t[67] = je, t[68] = R) : R = t[68];
    let z;
    t[69] !== ye || t[70] !== n || t[71] !== w || t[72] !== M || t[73] !== a || t[74] !== b ? (z = a == null ? b && n.length > 1 && n.length <= 20 && (0, q.jsx)(`div`, {
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
    }), t[69] = ye, t[70] = n, t[71] = w, t[72] = M, t[73] = a, t[74] = b, t[75] = z) : z = t[75];
    let Me;
    return t[76] !== De || t[77] !== R || t[78] !== z ? (Me = (0, q.jsxs)(`div`, {
        className: De,
        "aria-roledescription": `carousel`,
        onMouseEnter: Oe,
        onMouseLeave: ke,
        children: [R, z]
    }), t[76] = De, t[77] = R, t[78] = z, t[79] = Me) : Me = t[79], Me
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
    t[0] !== s || t[1] !== c ? (l = h(`btn-secondary border-token-border-default active:bg-token-bg-tertiary hover:bg-token-bg-primary absolute top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-clip-padding backdrop-blur transition-opacity duration-300 hover:shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)] active:opacity-100!`, c, s), t[0] = s, t[1] = c, t[2] = l) : l = t[2];
    let u;
    return t[3] !== n || t[4] !== o || t[5] !== r || t[6] !== l ? (u = (0, q.jsx)(`button`, {
        "aria-label": n,
        onClick: r,
        className: l,
        children: o
    }), t[3] = n, t[4] = o, t[5] = r, t[6] = l, t[7] = u) : u = t[7], u
}
var Gt, K, q, Kt, qt, Jt = e((() => {
        Gt = k(), c(), Ge(), p(), K = t(O()), D(), q = w(), Kt = (e, t, n) => Math.min(Math.max(e, t), n), qt = (e, t, n) => e > n ? t : e < t ? n : e
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
        ie;
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
        }), t[26] = d, t[27] = o, t[28] = e) : e = t[28], ie = r.map(e), t[22] = r, t[23] = d, t[24] = o, t[25] = ie
    } else ie = t[25];
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
            children: (0, tn.jsx)(E, {
                id: `chatgpt.shopping.virtual_try_on.product_detail.generation.status`,
                defaultMessage: `Generating try-on`
            })
        })
    }) : void 0, t[31] = a, t[32] = ee, t[33] = A) : A = t[33];
    let j;
    t[34] === c ? j = t[35] : (j = (e, t) => c(e.src, t), t[34] = c, t[35] = j);
    let M;
    return t[36] !== u || t[37] !== b || t[38] !== s || t[39] !== ie || t[40] !== ae || t[41] !== A || t[42] !== j ? (M = (0, tn.jsx)(Ut, {
        activeIndex: b,
        images: ie,
        aspect: u,
        onActiveIndexChange: ae,
        onInteraction: k,
        paginationStatus: A,
        onArrowClick: s,
        onClick: j
    }), t[36] = u, t[37] = b, t[38] = s, t[39] = ie, t[40] = ae, t[41] = A, t[42] = j, t[43] = M) : M = t[43], M
}
var en, J, tn, nn = e((() => {
    en = k(), Jt(), J = t(O()), D(), Qt(), tn = w()
}));

function rn() {
    "use forget";
    let e = (0, ln.c)(25),
        t = b(),
        n;
    e[0] === t ? n = e[1] : (n = () => t ? Ct(t) : [], e[0] = t, e[1] = n);
    let i = u(n),
        a;
    e[2] === t ? a = e[3] : (a = () => t ? mt(t) : {
        messageId: void 0,
        clientThreadId: void 0
    }, e[2] = t, e[3] = a);
    let {
        messageId: o,
        clientThreadId: s
    } = u(a), c;
    e[4] === t ? c = e[5] : (c = () => t ? de(t).rootMessageId$() != null : !1, e[4] = t, e[5] = c);
    let l = u(c),
        d;
    e[6] === Symbol.for(`react.memo_cache_sentinel`) ? (d = H(), e[6] = d) : d = e[6];
    let f = d;
    if (!t || !o || i.length === 0) return null;
    let p;
    e[7] !== t || e[8] !== l || e[9] !== o ? (p = (0, Y.jsx)(`h3`, {
        className: `mb-4`,
        children: f && !l ? (0, Y.jsxs)(`button`, {
            type: `button`,
            className: `text-token-text-primary text-heading-3 flex w-fit items-center text-start font-medium`,
            onClick: () => an(t, o),
            children: [(0, Y.jsx)(`span`, {
                children: (0, Y.jsx)(E, {
                    ...un.exploreMoreTitle
                })
            }), (0, Y.jsx)(r.ChevronRight, {
                "aria-hidden": `true`,
                className: `icon ms-1 shrink-0`
            })]
        }) : (0, Y.jsx)(`span`, {
            className: `text-token-text-primary text-heading-3 font-medium`,
            children: (0, Y.jsx)(E, {
                ...un.exploreMoreTitle
            })
        })
    }), e[7] = t, e[8] = l, e[9] = o, e[10] = p) : p = e[10];
    let m;
    if (e[11] !== s || e[12] !== t || e[13] !== o || e[14] !== i) {
        let n;
        e[16] !== s || e[17] !== t || e[18] !== o ? (n = (e, n) => (0, Y.jsxs)(`div`, {
            className: `group group/product-card relative min-w-0 self-start`,
            children: [(0, Y.jsx)(`button`, {
                type: `button`,
                className: `block w-full text-start`,
                onClick: r => on(t, o, e, n, {
                    isImageClick: A(r.target)
                }),
                children: (0, Y.jsx)(cn, {
                    product: e
                })
            }), (0, Y.jsx)(Mt, {
                product: e,
                clientThreadId: s,
                messageId: o
            })]
        }, e.id), e[16] = s, e[17] = t, e[18] = o, e[19] = n) : n = e[19], m = i.map(n), e[11] = s, e[12] = t, e[13] = o, e[14] = i, e[15] = m
    } else m = e[15];
    let h;
    e[20] === m ? h = e[21] : (h = (0, Y.jsx)(`div`, {
        className: `grid grid-cols-2 items-start gap-x-2 gap-y-4`,
        children: m
    }), e[20] = m, e[21] = h);
    let g;
    return e[22] !== p || e[23] !== h ? (g = (0, Y.jsx)(`div`, {
        className: `mt-2 px-5`,
        children: (0, Y.jsxs)(`div`, {
            className: `border-token-border-light border-t pt-6`,
            children: [p, h]
        })
    }), e[22] = p, e[23] = h, e[24] = g) : g = e[24], g
}

function an(e, t) {
    if (!H()) return;
    let n = mt(e).turnIndex;
    de(e).open$({
        rootMessageId: t,
        originTurnIndex: n ?? 0
    })
}

function on(e, t, n, r, i) {
    sn(e, t, n);
    let a = mt(e);
    if (oe(n, {
            clientThreadId: a.clientThreadId,
            messageId: t,
            contentReferenceStartIndex: 0,
            contentReferenceType: De.Products,
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
        s = ne(),
        c = _(),
        l = c ? s.rooms$().get(c) : null;
    if (l != null && s.hasAccess) {
        s.openThreadSidebar$(l, o);
        return
    }
    V(e, o)
}

function sn(e, t, n) {
    let r = mt(e),
        i = Te(e),
        a = lt(e),
        o = ke(i, `product`) || ke(i, `product_agent`) ? i.contentReferenceStartIndex : void 0;
    be({
        clientThreadId: r.clientThreadId,
        messageId: t,
        turnIndex: r.turnIndex,
        contentReferenceStartIndex: o,
        surfaceLocation: Re.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
        entityAffordance: F.CHATGPT_ENTITY_AFFORDANCE_PRODUCT_CARD,
        entityId: Le(n, t, o),
        entityCategory: `product`,
        contentReferenceType: `product_entity`,
        isGenui: r.isGenui,
        parentContext: a ? {
            entityId: Le(a, t, o),
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
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = m(`2128165686`).get(`image_fit`, ``), t[0] = r) : r = t[0];
    let i = r,
        a = i === `contain_all` || i === `product_card` ? i : `default`,
        o = n.image_urls?.[0],
        s = n.offers?.[0]?.price,
        c;
    t[1] !== o || t[2] !== n ? (c = o ? (0, Y.jsx)(_e, {
        src: o,
        assetPointerDimensions: Ce(n, o),
        fitStrategy: a,
        alt: n.title,
        className: `absolute inset-0 m-0 block h-full w-full transition-transform duration-200 group-hover:scale-[1.02]`
    }, o) : null, t[1] = o, t[2] = n, t[3] = c) : c = t[3];
    let l;
    t[4] === c ? l = t[5] : (l = (0, Y.jsx)(`div`, {
        className: `bg-tertiary relative aspect-square w-full overflow-hidden rounded-2xl`,
        ...R,
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
    ln = k(), ue(), Ne(), d(), x(), S(), f(), he(), z(), P(), Be(), $e(), pe(), U(), jt(), y(), ee(), B(), D(), se(), Y = w(), un = T({
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
            contentReferenceStartIndex: s,
            turnIndex: c,
            productIndex: l,
            onFollowUp: u
        } = e,
        d = ie(),
        f;
    t[0] === d ? f = t[1] : (f = d.formatMessage({
        id: `products.detailsFollowUpButton.label`,
        defaultMessage: `Follow up`
    }), t[0] = d, t[1] = f);
    let p = f,
        m;
    t[2] !== s || t[3] !== i || t[4] !== n || t[5] !== a || t[6] !== u || t[7] !== r || t[8] !== l || t[9] !== c ? (m = () => {
        n && Ie(i), Ve(i, r, {
            messageId: a,
            turnIndex: c,
            contentReferenceStartIndex: s,
            productIndex: l,
            contentReferenceType: De.ProductEntity
        }, I.CHATGPT_PRODUCT_FOLLOW_UP_INTERACTION_SURFACE_FOLLOW_UP_BUTTON), u?.()
    }, t[2] = s, t[3] = i, t[4] = n, t[5] = a, t[6] = u, t[7] = r, t[8] = l, t[9] = c, t[10] = m) : m = t[10];
    let h;
    t[11] === p ? h = t[12] : (h = (0, mn.jsx)(`span`, {
        className: `flex items-center select-none`,
        children: p
    }), t[11] = p, t[12] = h);
    let g;
    return t[13] !== p || t[14] !== m || t[15] !== h ? (g = (0, mn.jsx)(`div`, {
        id: `product-details-follow-up-button`,
        className: `fixed end-7 bottom-10 z-[50] md:bottom-8`,
        children: (0, mn.jsx)(o, {
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
    pn = k(), Ne(), ae(), g(), Ke(), he(), Ue(), D(), mn = w()
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
            product: n,
            clientThreadId: r,
            messageId: i,
            contentReferenceStartIndex: s,
            turnIndex: c,
            productIndex: d,
            conversation: f,
            offsetTopMargin: p,
            sidebar: g,
            isModal: _,
            galleryAspect: ee,
            interactionSource: y,
            initialVisibleOfferCount: b,
            onFollowUp: x
        } = e,
        S = p !== void 0 && p,
        C = _ !== void 0 && _,
        ne;
    t[0] === f ? ne = t[1] : (ne = () => mt(f), t[0] = f, t[1] = ne);
    let w = u(ne),
        T;
    t[2] === w ? T = t[3] : (T = {
        ...w,
        isGenui: !0
    }, t[2] = w, t[3] = T);
    let D = Pe(T),
        [O, k] = (0, Q.useState)(null),
        [ie, ae] = (0, Q.useState)(!1),
        [A, M] = (0, Q.useState)(!1),
        [oe, P] = (0, Q.useState)(!1),
        [se, ue] = (0, Q.useState)(!1),
        de = Pn(),
        {
            showDebugConversationTurns: fe
        } = we(),
        pe = g?.type === `product_agent` && g.publicEntityShareId != null,
        me = !pe && de?.persist_conversation_to_user === !0,
        he = (0, Q.use)(Ae),
        _e = (0, Q.useRef)(null),
        ve = (0, Q.useRef)(null),
        be = (0, Q.useRef)(null),
        [Se, Te] = (0, Q.useState)(null),
        Ee;
    t[4] === r ? Ee = t[5] : (Ee = re(r) ?? r, t[4] = r, t[5] = Ee);
    let F = Ee,
        De = l(),
        Oe;
    t[6] !== f.id || t[7] !== De ? (Oe = re(f.id) ?? De, t[6] = f.id, t[7] = De, t[8] = Oe) : Oe = t[8];
    let ke = Oe,
        I = a(`3375735072`),
        L;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (L = j(), t[9] = L) : L = t[9];
    let je = L,
        R;
    t[10] !== f || t[11] !== n ? (R = () => {
        let e = ut(f),
            t = e === `enriched` ? gt(f) : null,
            r = wt(f),
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
    }, t[10] = f, t[11] = n, t[12] = R) : R = t[12];
    let {
        productDetailDataScope: z,
        resolvedProductDetailData: Ne,
        statefulProduct: B,
        renderedOffers: Ie,
        hasStreamedEntityOffers: V
    } = u(R), Be, Ve;
    if (t[13] !== z) {
        let e = z === `enriched` ? m(`2128165686`) : void 0;
        Be = e?.get(`disable_sidebar_what_to_know`, !1) ?? !1, Ve = e?.get(`disable_sidebar_reviews`, !1) ?? !1, t[13] = z, t[14] = Be, t[15] = Ve
    } else Be = t[14], Ve = t[15];
    let Ue = Ve,
        Ge;
    t[16] === f ? Ge = t[17] : (Ge = () => ({
        productRationale: pt(f),
        isLoadingReviewsOrRationale: _t(f)
    }), t[16] = f, t[17] = Ge);
    let {
        productRationale: Ke,
        isLoadingReviewsOrRationale: qe
    } = u(Ge), Je = !Be && !!(Ke?.rationale || qe), Xe;
    t[18] === f ? Xe = t[19] : (Xe = () => st(f), t[18] = f, t[19] = Xe);
    let $e = u(Xe),
        et;
    t[20] === f ? et = t[21] : (et = () => bt(f), t[20] = f, t[21] = et);
    let tt = u(et),
        nt;
    t[22] === f ? nt = t[23] : (nt = () => St(f), t[22] = f, t[23] = nt);
    let it = u(nt),
        ot;
    t[24] === f ? ot = t[25] : (ot = () => dt(f), t[24] = f, t[25] = ot);
    let lt = u(ot),
        vt;
    t[26] === f ? vt = t[27] : (vt = () => yt(f), t[26] = f, t[27] = vt);
    let xt = u(vt),
        Ct;
    t[28] === f ? Ct = t[29] : (Ct = () => ct(f), t[28] = f, t[29] = Ct);
    let Et = u(Ct),
        Dt;
    t[30] === f ? Dt = t[31] : (Dt = () => {
        let e = wt(f)?.product;
        return {
            productImageUrls: ft(f),
            isGeneratingTryOn: e != null && Tt(f, e.id)
        }
    }, t[30] = f, t[31] = Dt);
    let {
        productImageUrls: H,
        isGeneratingTryOn: kt
    } = u(Dt), U = g?.type === `product_agent` || g?.type === `entity` ? g.pinnedImage : void 0, W = U?.content_url || U?.thumbnail_url, jt;
    t[32] !== U?.content_url || t[33] !== U?.thumbnail_url || t[34] !== W || t[35] !== H ? (jt = W ? [W, ...H.filter(e => e !== U?.content_url && e !== U?.thumbnail_url)] : H, t[32] = U?.content_url, t[33] = U?.thumbnail_url, t[34] = W, t[35] = H, t[36] = jt) : jt = t[36];
    let Mt = jt,
        Ft;
    t[37] === B ? Ft = t[38] : (Ft = He(B), t[37] = B, t[38] = Ft);
    let It = Ft,
        Rt = z === `enriched` && (B.shopping_vto?.eligible ?? n.shopping_vto?.eligible ?? !1),
        [G] = (0, Q.useState)(Dn),
        Bt, Ht;
    t[39] !== f || t[40] !== F || t[41] !== i || t[42] !== n ? (Bt = () => Qe({
        conversation: f,
        shellProduct: n,
        conversationId: F,
        messageId: i
    }), Ht = [f, n, F, i], t[39] = f, t[40] = F, t[41] = i, t[42] = n, t[43] = Bt, t[44] = Ht) : (Bt = t[43], Ht = t[44]), (0, Q.useEffect)(Bt, Ht);
    let Ut, Wt;
    t[45] !== f || t[46] !== F || t[47] !== i || t[48] !== me || t[49] !== n || t[50] !== B ? (Ut = () => {
        rt({
            conversation: f,
            shellProduct: n,
            statefulProduct: B,
            conversationId: F,
            messageId: i,
            persistConversationToUser: me
        })
    }, Wt = [f, F, i, me, n, B], t[45] = f, t[46] = F, t[47] = i, t[48] = me, t[49] = n, t[50] = B, t[51] = Ut, t[52] = Wt) : (Ut = t[51], Wt = t[52]), (0, Q.useEffect)(Ut, Wt);
    let Gt, K;
    t[53] === Symbol.for(`react.memo_cache_sentinel`) ? (Gt = () => {
        let e = be.current;
        if (!e) return;
        let t = () => {
            Te(e.getBoundingClientRect().height)
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
    t[55] !== r || t[56] !== s || t[57] !== f || t[58] !== i || t[59] !== z || t[60] !== D ? (qt = () => te(() => {
        let e = gt(f)?.product;
        e && !q.current && (q.current = !0, Fe({
            clientThreadId: r,
            messageId: i,
            contentReferenceStartIndex: s,
            product: e,
            source: z === `source_catalog` ? ze.CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_SOURCE_CATALOG : ze.CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_ENRICHED
        }), D(`Product Sidebar Entity Loaded`, `product_sidebar_entity_loaded`, `product_entity`, {
            ...e.analytics_meta ?? {},
            product_event_uuid: e.product_event_uuid
        }))
    }), Jt = [r, s, f, i, z, D], t[55] = r, t[56] = s, t[57] = f, t[58] = i, t[59] = z, t[60] = D, t[61] = qt, t[62] = Jt) : (qt = t[61], Jt = t[62]), (0, Q.useEffect)(qt, Jt);
    let Yt;
    t[63] !== y || t[64] !== z || t[65] !== Ne || t[66] !== n || t[67] !== B || t[68] !== D ? (Yt = () => {
        if (z === `source_catalog` && Ne == null) return;
        let e = z === `source_catalog` ? B : n;
        if (Kt.current === e.id) return;
        Kt.current = e.id;
        let t = jn(e, y),
            r = [t.offer_url, t.product_url, t.site_url, t.merchant_url].find(En);
        D(`Product Detail Shown`, `product_detail_shown`, `product_entity`, t, void 0, t => le(`product_detail_shown`, `detail_shown`, t, {
            productId: e.id,
            interactionSource: y,
            url: r
        }))
    }, t[63] = y, t[64] = z, t[65] = Ne, t[66] = n, t[67] = B, t[68] = D, t[69] = Yt) : Yt = t[69];
    let Xt;
    t[70] !== r || t[71] !== s || t[72] !== y || t[73] !== i || t[74] !== ke || t[75] !== z || t[76] !== Ne || t[77] !== n || t[78] !== B || t[79] !== D || t[80] !== c ? (Xt = [r, s, y, i, ke, z, Ne, n, B, D, c], t[70] = r, t[71] = s, t[72] = y, t[73] = i, t[74] = ke, t[75] = z, t[76] = Ne, t[77] = n, t[78] = B, t[79] = D, t[80] = c, t[81] = Xt) : Xt = t[81], (0, Q.useEffect)(Yt, Xt);
    let Zt;
    t[82] !== z || t[83] !== B ? (Zt = z === `enriched` ? B.variants ?? [] : [], t[82] = z, t[83] = B, t[84] = Zt) : Zt = t[84];
    let Qt = Zt,
        en;
    t[85] === B ? en = t[86] : (en = e => Ce(B, e), t[85] = B, t[86] = en);
    let J = en,
        tn;
    if (t[87] !== H || t[88] !== B) {
        tn = [];
        for (let e of H) {
            let t = N(e, Ce(B, e));
            t != null && tn.push(t)
        }
        t[87] = H, t[88] = B, t[89] = tn
    } else tn = t[89];
    let nn = tn,
        an = ye(nn),
        on;
    t[90] !== nn || t[91] !== an ? (on = e => {
        let t = N(e);
        if (t == null) return e;
        let n = nn.findIndex(e => e.asset_pointer === t.asset_pointer);
        return an[n]?.data?.url ?? null
    }, t[90] = nn, t[91] = an, t[92] = on) : on = t[92];
    let sn = on,
        cn;
    t[93] !== w.isGenui || t[94] !== r || t[95] !== s || t[96] !== Mt || t[97] !== i || t[98] !== U?.url || t[99] !== W || t[100] !== sn || t[101] !== n || t[102] !== B || t[103] !== c ? (cn = (e, t) => {
        let a = Mt[e];
        ce({
            clientThreadId: r,
            messageId: i,
            turnIndex: c,
            contentReferenceStartIndex: s,
            surfaceLocation: Re.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
            imageAffordance: t,
            imageIndex: e,
            contentReferenceType: `product_entity`,
            parentContext: {
                entityId: Le(n, i, s),
                entityCategory: `product`,
                contentReferenceStartIndex: s,
                messageId: i
            },
            isGenui: w.isGenui,
            url: a === W ? U?.url : B.url ?? n.url,
            contentUrl: a ? sn(a) : void 0,
            isVirtualTryOnImage: We(B, a)
        })
    }, t[93] = w.isGenui, t[94] = r, t[95] = s, t[96] = Mt, t[97] = i, t[98] = U?.url, t[99] = W, t[100] = sn, t[101] = n, t[102] = B, t[103] = c, t[104] = cn) : cn = t[104];
    let ln = cn,
        Y;
    t[105] !== w || t[106] !== s || t[107] !== F || t[108] !== xt || t[109] !== Mt || t[110] !== i || t[111] !== he || t[112] !== U || t[113] !== W || t[114] !== d || t[115] !== sn || t[116] !== n || t[117] !== B ? (Y = e => {
        if (he == null) return;
        let t = Mt.map(e => ({
                imageUrl: e,
                resolvedImageUrl: sn(e)
            })),
            r = [],
            a = [],
            o;
        for (let {
                imageUrl: n,
                resolvedImageUrl: i
            }
            of t) {
            if (i == null) continue;
            let t = Ce(B, n) ?? {
                    width: 0,
                    height: 0
                },
                s = U && n === W ? {
                    ...U,
                    show_url: !0
                } : {
                    url: i,
                    content_url: i,
                    thumbnail_url: i,
                    title: xt,
                    content_size: t,
                    thumbnail_size: t,
                    is_proxied_image: N(n) != null
                };
            We(B, n) && a.push(r.length), r.push(s), n === e && (o = s)
        }
        o != null && (he({
            image: o,
            source: xe.ImageGroup,
            analyticsMetadata: w,
            contentReferenceStartIndex: s,
            productIndex: d,
            imageResults: r,
            engagementMetadata: {
                virtualTryOnImageIndices: a,
                contentReferenceType: `product_entity`,
                pageUrl: B.url ?? n.url ?? null,
                parentContext: {
                    entityId: Le(n, i, s),
                    entityCategory: `product`,
                    contentReferenceStartIndex: s,
                    messageId: i
                }
            }
        }), (He(B).includes(e) || He(n).includes(e)) && Ye({
            productId: B.id,
            conversationId: F,
            messageId: i
        }, `product_detail`))
    }, t[105] = w, t[106] = s, t[107] = F, t[108] = xt, t[109] = Mt, t[110] = i, t[111] = he, t[112] = U, t[113] = W, t[114] = d, t[115] = sn, t[116] = n, t[117] = B, t[118] = Y) : Y = t[118];
    let un = Y,
        dn = At({
            isCheckoutEnabled: I,
            isClearingVariantSelection: oe,
            isLoadingProductEntity: it
        }),
        pn = lt === `success` || lt === `error`,
        mn;
    t[119] !== pn || t[120] !== V || t[121] !== z || t[122] !== Ie || t[123] !== n.offers ? (mn = z === `source_catalog` || V ? Ie : pn ? n.offers ?? [] : [], t[119] = pn, t[120] = V, t[121] = z, t[122] = Ie, t[123] = n.offers, t[124] = mn) : mn = t[124];
    let hn = mn,
        _n = hn.length > 1,
        X = V && lt === `success`,
        vn;
    t[125] !== f || t[126] !== X || t[127] !== V || t[128] !== i || t[129] !== G || t[130] !== n.id || t[131] !== n.query || t[132] !== n.title ? (vn = () => {
        G.reset({
            conversation: f,
            messageId: i,
            productKey: n.id || n.query || n.title
        }), G.logRenderOfferTimings(V, X, !0)
    }, t[125] = f, t[126] = X, t[127] = V, t[128] = i, t[129] = G, t[130] = n.id, t[131] = n.query, t[132] = n.title, t[133] = vn) : vn = t[133];
    let yn = (0, Q.useEffectEvent)(vn),
        bn;
    t[134] === yn ? bn = t[135] : (bn = () => {
        yn()
    }, t[134] = yn, t[135] = bn);
    let xn;
    t[136] !== G || t[137] !== n.id ? (xn = [G, n.id], t[136] = G, t[137] = n.id, t[138] = xn) : xn = t[138], (0, Q.useEffect)(bn, xn);
    let Sn, Z;
    t[139] !== X || t[140] !== V || t[141] !== G ? (Sn = () => {
        G.logRenderOfferTimings(V, X)
    }, Z = [X, V, G], t[139] = X, t[140] = V, t[141] = G, t[142] = Sn, t[143] = Z) : (Sn = t[142], Z = t[143]), (0, Q.useEffect)(Sn, Z);
    let wn;
    t[144] === f ? wn = t[145] : (wn = () => {
        let e = _e.current,
            t = ve.current;
        if (!e || !t) return;
        let n = () => {
            let n = e.getBoundingClientRect().top,
                r = t.getBoundingClientRect().bottom;
            return Math.max(0, Math.floor(r - n))
        };
        if (typeof ResizeObserver > `u`) {
            at(f, n());
            return
        }
        at(f, -1);
        let r = new ResizeObserver(() => {
            at(f, n())
        });
        return r.observe(e), r.observe(t), at(f, n()), () => {
            r.disconnect()
        }
    }, t[144] = f, t[145] = wn);
    let Tn;
    t[146] !== f || t[147] !== lt || t[148] !== H.length ? (Tn = [f, lt, H.length], t[146] = f, t[147] = lt, t[148] = H.length, t[149] = Tn) : Tn = t[149], (0, Q.useEffect)(wn, Tn);
    let kn = g && (pe || ke) && Et;
    if (z === `source_catalog` && Ne == null) {
        let e = S ? `bg-surface-primary` : `bg-token-bg-primary`,
            r;
        t[150] === e ? r = t[151] : (r = h(`flex min-h-screen w-full flex-col gap-4 px-6 pt-8`, e), t[150] = e, t[151] = r);
        let a;
        t[152] !== f || t[153] !== F || t[154] !== i || t[155] !== lt || t[156] !== n ? (a = lt === `error` ? (0, $.jsxs)(`div`, {
            className: `flex min-h-[420px] flex-col items-center justify-center text-center`,
            children: [(0, $.jsx)(`p`, {
                className: `text-token-text-secondary max-w-xs text-sm`,
                children: (0, $.jsx)(E, {
                    id: `chatgpt.search.product_details.source_catalog.error.message`,
                    defaultMessage: `We couldn't load this product.`
                })
            }), (0, $.jsx)(o, {
                type: `button`,
                className: `mt-4`,
                color: `secondary`,
                size: `small`,
                onClick: () => {
                    ht({
                        conversation: f,
                        shellProduct: n,
                        conversationId: F,
                        messageId: i
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
        }), t[152] = f, t[153] = F, t[154] = i, t[155] = lt, t[156] = n, t[157] = a) : a = t[157];
        let s;
        return t[158] !== it || t[159] !== r || t[160] !== a ? (s = (0, $.jsx)(`div`, {
            className: r,
            "aria-busy": it,
            children: a
        }), t[158] = it, t[159] = r, t[160] = a, t[161] = s) : s = t[161], s
    }
    let An = S ? `bg-surface-primary` : `bg-token-bg-primary`,
        Fn = S ? `mt-[calc(var(--threadFlyOut-leading-height,var(--product-flyout-sticky-header-height))*-1)] min-h-screen` : `mt-0`,
        In;
    t[162] !== An || t[163] !== Fn ? (In = h(`flex w-full flex-col`, An, Fn), t[162] = An, t[163] = Fn, t[164] = In) : In = t[164];
    let Ln = `${B.id}:${Mt[0]??``}`,
        Rn;
    t[165] !== J || t[166] !== U || t[167] !== W || t[168] !== B.title ? (Rn = (e, t) => (0, $.jsx)(Mn, {
        src: e,
        onLoad: t,
        title: e === W && U ? U.title : B.title,
        assetPointerDimensions: J(e)
    }), t[165] = J, t[166] = U, t[167] = W, t[168] = B.title, t[169] = Rn) : Rn = t[169];
    let zn;
    t[170] !== F || t[171] !== i || t[172] !== B.id ? (zn = () => {
        Ze({
            productId: B.id,
            conversationId: F,
            messageId: i
        }, `product_detail`)
    }, t[170] = F, t[171] = i, t[172] = B.id, t[173] = zn) : zn = t[173];
    let Bn;
    t[174] === ln ? Bn = t[175] : (Bn = (e, t) => {
        ln(t, e === `next` ? Me.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_NEXT_BUTTON : Me.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_PREVIOUS_BUTTON)
    }, t[174] = ln, t[175] = Bn);
    let Vn;
    t[176] !== ln || t[177] !== un ? (Vn = (e, t) => {
        ln(t, Me.CHATGPT_IMAGE_AFFORDANCE_PRODUCT_DETAIL_IMAGE), un(e)
    }, t[176] = ln, t[177] = un, t[178] = Vn) : Vn = t[178];
    let Hn;
    t[179] !== ee || t[180] !== Mt || t[181] !== It || t[182] !== kt || t[183] !== Ln || t[184] !== Rn || t[185] !== zn || t[186] !== Bn || t[187] !== Vn ? (Hn = (0, $.jsx)(`div`, {
        ref: ve,
        children: (0, $.jsx)($t, {
            aspect: ee,
            imageUrls: Mt,
            generatedImageUrls: It,
            isGenerating: kt,
            renderImage: Rn,
            onGeneratedImageViewed: zn,
            onArrowClick: Bn,
            onClick: Vn
        }, Ln)
    }), t[179] = ee, t[180] = Mt, t[181] = It, t[182] = kt, t[183] = Ln, t[184] = Rn, t[185] = zn, t[186] = Bn, t[187] = Vn, t[188] = Hn) : Hn = t[188];
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
    t[192] === xt ? Gn = t[193] : (Gn = (0, $.jsx)(`h2`, {
        ref: be,
        className: `text-xl`,
        children: xt
    }), t[192] = xt, t[193] = Gn);
    let Kn;
    t[194] !== Un || t[195] !== Gn ? (Kn = (0, $.jsx)(v.div, {
        className: `overflow-hidden`,
        initial: !1,
        animate: Un,
        transition: Wn,
        children: Gn
    }), t[194] = Un, t[195] = Gn, t[196] = Kn) : Kn = t[196];
    let qn;
    t[197] === B ? qn = t[198] : (qn = (0, $.jsx)(Nt, {
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
    t[202] !== je || t[203] !== B.price_history ? (Yn = je && B.price_history && (0, $.jsx)(gn, {
        priceHistory: B.price_history
    }), t[202] = je, t[203] = B.price_history, t[204] = Yn) : Yn = t[204];
    let Xn;
    t[205] !== f || t[206] !== ie || t[207] !== I || t[208] !== A || t[209] !== d || t[210] !== n || t[211] !== B || t[212] !== D || t[213] !== Qt ? (Xn = I && Qt.length > 0 && (0, $.jsx)(`div`, {
        className: h(`px-5 pt-4 pb-2`, A && `pointer-events-none opacity-50`),
        "aria-busy": A,
        children: (0, $.jsx)(Vt, {
            options: Qt,
            showErrors: ie,
            updateOption: (e, t, r) => On({
                optionGroupId: e,
                selectedId: t,
                variant_index: r,
                conversation: f,
                shellProduct: n,
                statefulProduct: B,
                setIsSwitchingVariant: M,
                setIsClearingVariantSelection: P,
                setSuppressOfferAnimations: ue,
                setError: k,
                trackContentReferenceEvent: D,
                productIndex: d,
                productId: n.id
            })
        })
    }), t[205] = f, t[206] = ie, t[207] = I, t[208] = A, t[209] = d, t[210] = n, t[211] = B, t[212] = D, t[213] = Qt, t[214] = Xn) : Xn = t[214];
    let Zn;
    t[215] === O ? Zn = t[216] : (Zn = O && (0, $.jsx)(`div`, {
        className: `text-token-interactive-label-danger-secondary-default text-center`,
        children: O
    }), t[215] = O, t[216] = Zn);
    let Qn;
    t[217] !== I || t[218] !== H || t[219] !== B.image_urls ? (Qn = I ? B.image_urls ?? [] : H, t[217] = I, t[218] = H, t[219] = B.image_urls, t[220] = Qn) : Qn = t[220];
    let $n = z === `source_catalog` || Je,
        er;
    t[221] === Symbol.for(`react.memo_cache_sentinel`) ? (er = () => ae(!0), t[221] = er) : er = t[221];
    let tr;
    t[222] !== s || t[223] !== f || t[224] !== b || t[225] !== y || t[226] !== hn || t[227] !== dn || t[228] !== d || t[229] !== _n || t[230] !== B || t[231] !== se || t[232] !== Qn || t[233] !== $n || t[234] !== D ? (tr = (0, $.jsx)(Lt, {
        className: `flex flex-col px-5 pt-3`,
        offers: hn,
        conversation: f,
        contentReferenceStartIndex: s,
        productIndex: d,
        product: B,
        trackContentReferenceEvent: D,
        imageUrls: Qn,
        isLoading: dn,
        suppressOfferAnimations: se,
        showBestPriceOfferTag: _n,
        showBottomBorder: $n,
        onOpenCheckout: er,
        interactionSource: y,
        initialVisibleOfferCount: b
    }), t[222] = s, t[223] = f, t[224] = b, t[225] = y, t[226] = hn, t[227] = dn, t[228] = d, t[229] = _n, t[230] = B, t[231] = se, t[232] = Qn, t[233] = $n, t[234] = D, t[235] = tr) : tr = t[235];
    let nr;
    t[236] !== Ue || t[237] !== Be || t[238] !== qe || t[239] !== i || t[240] !== z || t[241] !== Ke || t[242] !== $e || t[243] !== G || t[244] !== B || t[245] !== D ? (nr = z === `source_catalog` ? (0, $.jsx)(Cn, {
        product: B
    }) : (0, $.jsxs)(`div`, {
        className: `flex flex-col bg-inherit`,
        children: [!Be && (0, $.jsx)(Pt, {
            contentReference: Ke,
            trackContentReferenceEvent: D,
            disableAnimation: !!(Ke || $e),
            isLoading: qe,
            productAnalyticsMeta: B.analytics_meta ?? void 0,
            productEventUuid: B.product_event_uuid ?? void 0,
            renderProfiler: G
        }), !Ue && (0, $.jsx)(zt, {
            contentReference: $e,
            messageId: i,
            trackContentReferenceEvent: D,
            disableAnimation: !!(Ke || $e),
            productAnalyticsMeta: B.analytics_meta ?? void 0,
            productEventUuid: B.product_event_uuid ?? void 0,
            renderProfiler: G
        })]
    }), t[236] = Ue, t[237] = Be, t[238] = qe, t[239] = i, t[240] = z, t[241] = Ke, t[242] = $e, t[243] = G, t[244] = B, t[245] = D, t[246] = nr) : nr = t[246];
    let rr;
    t[247] === Symbol.for(`react.memo_cache_sentinel`) ? (rr = (0, $.jsx)(rn, {}), t[247] = rr) : rr = t[247];
    let ir;
    t[248] !== s || t[249] !== f || t[250] !== Rt || t[251] !== i || t[252] !== H || t[253] !== d || t[254] !== n.shopping_vto || t[255] !== B || t[256] !== c ? (ir = Rt && (0, $.jsx)(Ot, {
        contentReferenceStartIndex: s,
        conversation: f,
        messageId: i,
        product: {
            ...B,
            image_urls: H,
            shopping_vto: B.shopping_vto == null ? n.shopping_vto : {
                ...B.shopping_vto,
                generated_images: ge(B.shopping_vto.generated_images ?? [], n.shopping_vto?.generated_images ?? [])
            }
        },
        productIndex: d,
        turnIndex: c
    }), t[248] = s, t[249] = f, t[250] = Rt, t[251] = i, t[252] = H, t[253] = d, t[254] = n.shopping_vto, t[255] = B, t[256] = c, t[257] = ir) : ir = t[257];
    let ar;
    t[258] !== s || t[259] !== f || t[260] !== C || t[261] !== pe || t[262] !== i || t[263] !== x || t[264] !== d || t[265] !== kn || t[266] !== B || t[267] !== c ? (ar = kn && (0, $.jsx)(`div`, {
        className: `flex justify-end px-6 pt-16 pb-6`,
        children: (0, $.jsx)(fn, {
            conversation: f,
            messageId: pe ? void 0 : i,
            contentReferenceStartIndex: s,
            turnIndex: c,
            productIndex: d,
            product: B,
            isModal: C,
            onFollowUp: x
        })
    }), t[258] = s, t[259] = f, t[260] = C, t[261] = pe, t[262] = i, t[263] = x, t[264] = d, t[265] = kn, t[266] = B, t[267] = c, t[268] = ar) : ar = t[268];
    let or;
    t[269] !== tt || t[270] !== fe ? (or = !1, t[269] = tt, t[270] = fe, t[271] = or) : or = t[271];
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
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = h(`h-full w-full cursor-zoom-in object-contain mix-blend-darken dark:mix-blend-lighten`), t[0] = o) : o = t[0];
    let s;
    return t[1] !== n || t[2] !== a || t[3] !== r || t[4] !== i ? (s = (0, $.jsx)(_e, {
        src: r,
        onLoad: a,
        assetPointerDimensions: n,
        alt: i,
        className: o
    }), t[1] = n, t[2] = a, t[3] = r, t[4] = i, t[5] = s) : s = t[5], s
}
var Nn, Q, $, Pn, Fn = e((() => {
    Nn = k(), me(), ue(), ve(), Ne(), g(), Ee(), M(), L(), Se(), nn(), Et(), Dt(), Xe(), Be(), kt(), P(), fe(), ot(), tt(), $e(), je(), y(), C(), i(), ee(), B(), Oe(), p(), n(), Q = t(O()), D(), dn(), hn(), se(), Ht(), vn(), G(), It(), Rt(), wn(), W(), $ = w(), Pn = () => void 0
}));
export {
    Fn as n, Tn as t
};
//# sourceMappingURL=ecdd5ba5-nj5cizziuoc6owtf.js.map