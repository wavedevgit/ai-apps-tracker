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
} from "./4813494d-r54yv6lv29x4ew99.js";
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
    $ft as ae,
    D3 as A,
    Fgt as j,
    Gkn as M,
    Hjn as oe,
    I3 as N,
    IIn as P,
    Kkn as se,
    L3 as ce,
    LIn as le,
    N3 as ue,
    Nft as de,
    PIn as fe,
    Pft as pe,
    Pgt as me,
    QIn as he,
    Rft as ge,
    Ujn as _e,
    VIn as ve,
    Wjn as ye,
    Xut as be,
    Yjn as xe,
    ZIn as Se,
    Zut as Ce,
    _Ln as we,
    _mt as Te,
    _pt as Ee,
    _tn as F,
    cmt as De,
    ept as Oe,
    gLn as ke,
    glt as Ae,
    gmt as I,
    gpt as L,
    hmt as je,
    ipt as Me,
    kIn as R,
    lmt as Ne,
    pmt as Pe,
    qkn as Fe,
    rSn as Ie,
    tSn as z,
    umt as Le,
    vlt as Re,
    vmt as ze,
    w3 as B,
    ymt as Be,
    ytn as Ve
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    bC as V,
    bh as He,
    xC as Ue,
    xh as We
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    $r as Ge,
    Wr as Ke,
    ei as qe
} from "./c2675c8c-jg3tpj8mw86wdc0g.js";
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
} from "./2b67bcd8-flkzsbsq2vplszif.js";
import {
    i as xt,
    n as St
} from "./2da3878c-kp80jmqfnyw8014x.js";
import {
    r as Ct,
    t as wt
} from "./58ee18a8-jgn3wncm3mg8rrnn.js";
import {
    c as Tt,
    d as Et,
    g as Dt,
    l as Ot,
    m as kt,
    n as H,
    t as At,
    u as jt
} from "./1362c49f-o7ut20g5vd9ausr7.js";
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
} from "./f4222f0c-zk43hjnghyz4nouo.js";

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
        [O, k] = (0, q.useState)(!1),
        [ae, A] = (0, q.useState)(!1),
        j = (0, q.useRef)(null),
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
    let N = (0, q.useRef)(oe),
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
    t[6] !== se || t[7] !== i ? (le = [i, se], t[6] = se, t[7] = i, t[8] = le) : le = t[8], (0, q.useEffect)(ce, le);
    let ue;
    t[9] !== C || t[10] !== E || t[11] !== P ? (ue = (e, t) => {
        let n = t === void 0 ? `smooth` : t,
            r = j.current;
        if (!r) return;
        let i = C ? Ht(e, 0, P - 1) : Vt(e, 0, P - 1),
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
    }, pe = [x], t[13] = x, t[14] = fe, t[15] = pe), (0, q.useEffect)(fe, pe);
    let me = O,
        he = O || ae,
        ge;
    t[16] !== C || t[17] !== P ? (ge = e => C ? Ht(e, 0, P - 1) : Vt(e, 0, P - 1), t[16] = C, t[17] = P, t[18] = ge) : ge = t[18];
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
    }, Ce = [i, w, _], t[28] = i, t[29] = w, t[30] = _, t[31] = Se, t[32] = Ce) : (Se = t[31], Ce = t[32]), (0, q.useEffect)(Se, Ce);
    let we, Te;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (we = () => {
        let e = j.current;
        if (!e) return;
        let t = new ResizeObserver(t => {
            for (let n of t) N.current.width = n.contentRect.width || e.clientWidth || 1
        });
        return t.observe(e), N.current.width = e.clientWidth || 1, () => t.disconnect()
    }, Te = [], t[33] = we, t[34] = Te) : (we = t[33], Te = t[34]), (0, q.useEffect)(we, Te);
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
            r > w + .5 ? a = Vt(w + 1, 0, P - 1) : r < w - .5 && (a = Vt(w - 1, 0, P - 1)), a !== w && D(a)
        };
        return e.addEventListener(`scroll`, t, {
            passive: !0
        }), () => e.removeEventListener(`scroll`, t)
    }, t[35] = w, t[36] = D, t[37] = P, t[38] = Ee) : Ee = t[38];
    let F;
    t[39] !== w || t[40] !== P ? (F = [P, w], t[39] = w, t[40] = P, t[41] = F) : F = t[41], (0, q.useEffect)(Ee, F);
    let De = `select-none ${te} relative`,
        Oe, ke;
    t[42] === Symbol.for(`react.memo_cache_sentinel`) ? (Oe = () => k(!0), ke = () => k(!1), t[42] = Oe, t[43] = ke) : (Oe = t[42], ke = t[43]);
    let Ae = `relative w-full ${v} overflow-clip`,
        I;
    if (t[44] !== S || t[45] !== n || t[46] !== M || t[47] !== y || t[48] !== h) {
        let e;
        t[50] !== S || t[51] !== M || t[52] !== y || t[53] !== h ? (e = (e, t) => (0, J.jsx)(`div`, {
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
                className: `h-full w-full ${y} ${S}`
            })
        }, e.src), t[50] = S, t[51] = M, t[52] = y, t[53] = h, t[54] = e) : e = t[54], I = n.map(e), t[44] = S, t[45] = n, t[46] = M, t[47] = y, t[48] = h, t[49] = I
    } else I = t[49];
    let L;
    t[55] !== o || t[56] !== I ? (L = (0, J.jsx)(`div`, {
        ref: j,
        onScroll: o,
        className: `no-scrollbar flex h-full w-full touch-pan-x touch-pan-y snap-x snap-mandatory overflow-x-scroll scroll-smooth`,
        children: I
    }), t[55] = o, t[56] = I, t[57] = L) : L = t[57];
    let je;
    t[58] !== xe || t[59] !== n.length || t[60] !== M || t[61] !== me || t[62] !== he || t[63] !== x ? (je = x && n.length > 1 && (0, J.jsxs)(J.Fragment, {
        children: [(0, J.jsx)(K, {
            ariaLabel: M.formatMessage({
                id: `l9pylv`,
                defaultMessage: `Previous slide`
            }),
            onClick: () => xe(`previous`),
            side: `start`,
            visible: me,
            children: (0, J.jsx)(l, {
                className: `icon-md`
            })
        }), (0, J.jsx)(K, {
            ariaLabel: M.formatMessage({
                id: `L0pbQh`,
                defaultMessage: `Next slide`
            }),
            onClick: () => xe(`next`),
            side: `end`,
            visible: he,
            children: (0, J.jsx)(V, {
                className: `icon-md`
            })
        })]
    }), t[58] = xe, t[59] = n.length, t[60] = M, t[61] = me, t[62] = he, t[63] = x, t[64] = je) : je = t[64];
    let Me;
    t[65] !== Ae || t[66] !== L || t[67] !== je ? (Me = (0, J.jsxs)(`div`, {
        className: Ae,
        children: [L, je]
    }), t[65] = Ae, t[66] = L, t[67] = je, t[68] = Me) : Me = t[68];
    let R;
    t[69] !== ye || t[70] !== n || t[71] !== w || t[72] !== M || t[73] !== a || t[74] !== b ? (R = a == null ? b && n.length > 1 && n.length <= 20 && (0, J.jsx)(`div`, {
        className: `absolute start-0 end-0 bottom-3 flex items-center justify-center`,
        children: (0, J.jsx)(`div`, {
            className: `flex w-fit items-center justify-center gap-2 rounded-full bg-[#0D0D0D66] bg-clip-padding p-1 backdrop-blur`,
            children: n.map((e, t) => (0, J.jsx)(`button`, {
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
    }) : (0, J.jsx)(`div`, {
        className: `pointer-events-none absolute start-0 end-0 bottom-3 flex justify-center`,
        children: a
    }), t[69] = ye, t[70] = n, t[71] = w, t[72] = M, t[73] = a, t[74] = b, t[75] = R) : R = t[75];
    let Ne;
    return t[76] !== De || t[77] !== Me || t[78] !== R ? (Ne = (0, J.jsxs)(`div`, {
        className: De,
        "aria-roledescription": `carousel`,
        onMouseEnter: Oe,
        onMouseLeave: ke,
        children: [Me, R]
    }), t[76] = De, t[77] = Me, t[78] = R, t[79] = Ne) : Ne = t[79], Ne
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
var Bt, q, J, Vt, Ht, Ut = e((() => {
        Bt = k(), f(), Ue(), S(), q = t(O()), D(), J = w(), Vt = (e, t, n) => Math.min(Math.max(e, t), n), Ht = (e, t, n) => e > n ? t : e < t ? n : e
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
    let [g, _] = (0, Y.useState)(h), [ee, te] = (0, Y.useState)(!1), v = (0, Y.useRef)(null), y;
    t[4] !== r || t[5] !== p.url ? (y = r.indexOf(p.url), t[4] = r, t[5] = p.url, t[6] = y) : y = t[6];
    let b = Math.max(0, y),
        x = r[b],
        S;
    t[7] !== x || t[8] !== i || t[9] !== g ? (S = i.includes(x) && g.includes(x), t[7] = x, t[8] = i, t[9] = g, t[10] = S) : S = t[10];
    let C = S,
        ne = (0, Y.useEffectEvent)(l),
        re;
    t[11] !== b || t[12] !== C || t[13] !== ne ? (re = () => {
        C && ne(b)
    }, t[11] = b, t[12] = C, t[13] = ne, t[14] = re) : re = t[14];
    let w;
    t[15] !== x || t[16] !== b || t[17] !== C ? (w = [x, b, C], t[15] = x, t[16] = b, t[17] = C, t[18] = w) : w = t[18], (0, Y.useEffect)(re, w);
    let T, D;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (T = () => () => {
        v.current != null && clearTimeout(v.current)
    }, D = [], t[19] = T, t[20] = D) : (T = t[19], D = t[20]), (0, Y.useEffect)(T, D);
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
    t[31] !== a || t[32] !== ee ? (A = a && !ee ? (0, Xt.jsx)(`span`, {
        role: `status`,
        className: `rounded-full bg-black/25 px-3 py-2.5 text-xs font-medium text-white backdrop-blur-md`,
        children: (0, Xt.jsx)(`span`, {
            className: Kt.generationStatus,
            children: (0, Xt.jsx)(E, {
                id: `chatgpt.shopping.virtual_try_on.product_detail.generation.status`,
                defaultMessage: `Generating try-on`
            })
        })
    }) : void 0, t[31] = a, t[32] = ee, t[33] = A) : A = t[33];
    let j;
    t[34] === c ? j = t[35] : (j = (e, t) => c(e.src, t), t[34] = c, t[35] = j);
    let M;
    return t[36] !== u || t[37] !== b || t[38] !== s || t[39] !== ie || t[40] !== ae || t[41] !== A || t[42] !== j ? (M = (0, Xt.jsx)(zt, {
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
var Yt, Y, Xt, Zt = e((() => {
    Yt = k(), Ut(), Y = t(O()), D(), qt(), Xt = w()
}));

function Qt() {
    "use forget";
    let e = (0, rn.c)(25),
        t = h(),
        n;
    e[0] === t ? n = e[1] : (n = () => t ? yt(t) : [], e[0] = t, e[1] = n);
    let r = c(n),
        i;
    e[2] === t ? i = e[3] : (i = () => t ? ut(t) : {
        messageId: void 0,
        clientThreadId: void 0
    }, e[2] = t, e[3] = i);
    let {
        messageId: a,
        clientThreadId: o
    } = c(i), s;
    e[4] === t ? s = e[5] : (s = () => t ? N(t).rootMessageId$() != null : !1, e[4] = t, e[5] = s);
    let l = c(s),
        u;
    e[6] === Symbol.for(`react.memo_cache_sentinel`) ? (u = Tt(), e[6] = u) : u = e[6];
    let d = u;
    if (!t || !a || r.length === 0) return null;
    let f;
    e[7] !== t || e[8] !== l || e[9] !== a ? (f = (0, X.jsx)(`h3`, {
        className: `mb-4`,
        children: d && !l ? (0, X.jsxs)(`button`, {
            type: `button`,
            className: `text-token-text-primary text-heading-3 flex w-fit items-center text-start font-medium`,
            onClick: () => $t(t, a),
            children: [(0, X.jsx)(`span`, {
                children: (0, X.jsx)(E, {
                    ...an.exploreMoreTitle
                })
            }), (0, X.jsx)(p.ChevronRight, {
                "aria-hidden": `true`,
                className: `icon ms-1 shrink-0`
            })]
        }) : (0, X.jsx)(`span`, {
            className: `text-token-text-primary text-heading-3 font-medium`,
            children: (0, X.jsx)(E, {
                ...an.exploreMoreTitle
            })
        })
    }), e[7] = t, e[8] = l, e[9] = a, e[10] = f) : f = e[10];
    let m;
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
            }), (0, X.jsx)(At, {
                product: e,
                clientThreadId: o,
                messageId: a
            })]
        }, e.id), e[16] = o, e[17] = t, e[18] = a, e[19] = n) : n = e[19], m = r.map(n), e[11] = o, e[12] = t, e[13] = a, e[14] = r, e[15] = m
    } else m = e[15];
    let g;
    e[20] === m ? g = e[21] : (g = (0, X.jsx)(`div`, {
        className: `grid grid-cols-2 items-start gap-x-2 gap-y-4`,
        children: m
    }), e[20] = m, e[21] = g);
    let _;
    return e[22] !== f || e[23] !== g ? (_ = (0, X.jsx)(`div`, {
        className: `mt-2 px-5`,
        children: (0, X.jsxs)(`div`, {
            className: `border-token-border-light border-t pt-6`,
            children: [f, g]
        })
    }), e[22] = f, e[23] = g, e[24] = _) : _ = e[24], _
}

function $t(e, t) {
    if (!Tt()) return;
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
        a = y(),
        o = d(),
        s = o ? a.rooms$().get(o) : null;
    if (s != null && a.hasAccess) {
        a.openThreadSidebar$(s, i);
        return
    }
    le(e, i)
}

function tn(e, t, n) {
    let r = ut(e),
        i = ve(e),
        a = at(e),
        o = P(i, `product`) || P(i, `product_agent`) ? i.contentReferenceStartIndex : void 0;
    pe({
        clientThreadId: r.clientThreadId,
        messageId: t,
        turnIndex: r.turnIndex,
        contentReferenceStartIndex: o,
        surfaceLocation: oe.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
        entityAffordance: _e.CHATGPT_ENTITY_AFFORDANCE_PRODUCT_CARD,
        entityId: ge(n, t, o),
        entityCategory: `product`,
        contentReferenceType: `product_entity`,
        isGenui: r.isGenui,
        parentContext: a ? {
            entityId: ge(a, t, o),
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
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = v(`2128165686`).get(`image_fit`, ``), t[0] = r) : r = t[0];
    let i = r,
        a = i === `contain_all` || i === `product_card` ? i : `default`,
        o = n.image_urls?.[0],
        s = n.offers?.[0]?.price,
        c;
    t[1] !== o || t[2] !== n ? (c = o ? (0, X.jsx)(I, {
        src: o,
        assetPointerDimensions: De(n, o),
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
    rn = k(), de(), r(), m(), ne(), s(), fe(), Ne(), Ye(), ce(), Ot(), H(), i(), te(), xe(), D(), Te(), X = w(), an = T({
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
        d = ie(),
        f;
    t[0] === d ? f = t[1] : (f = d.formatMessage({
        id: `products.detailsFollowUpButton.label`,
        defaultMessage: `Follow up`
    }), t[0] = d, t[1] = f);
    let p = f,
        m;
    t[2] !== s || t[3] !== a || t[4] !== r || t[5] !== o || t[6] !== u || t[7] !== i || t[8] !== l || t[9] !== c ? (m = () => {
        r && R(a), A(a, i, {
            messageId: o,
            turnIndex: c,
            contentReferenceStartIndex: s,
            productIndex: l,
            contentReferenceType: ae.ProductEntity
        }, Fe.CHATGPT_PRODUCT_FOLLOW_UP_INTERACTION_SURFACE_FOLLOW_UP_BUTTON), u?.()
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
    cn = k(), Oe(), ue(), _(), We(), fe(), B(), D(), ln = w()
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
    t[0] === d ? ne = t[1] : (ne = () => ut(d), t[0] = d, t[1] = ne);
    let w = c(ne),
        T;
    t[2] === w ? T = t[3] : (T = {
        ...w,
        isGenui: !0
    }, t[2] = w, t[3] = T);
    let D = Ce(T),
        [O, k] = (0, Q.useState)(null),
        [ie, ae] = (0, Q.useState)(!1),
        [A, j] = (0, Q.useState)(!1),
        [N, P] = (0, Q.useState)(!1),
        [se, ce] = (0, Q.useState)(!1),
        le = An(),
        {
            showDebugConversationTurns: ue
        } = Ve(),
        de = p?.type === `product_agent` && p.publicEntityShareId != null,
        fe = !de && le?.persist_conversation_to_user === !0,
        pe = (0, Q.use)(Se),
        he = (0, Q.useRef)(null),
        _e = (0, Q.useRef)(null),
        ve = (0, Q.useRef)(null),
        [be, xe] = (0, Q.useState)(null),
        Te;
    t[4] === i ? Te = t[5] : (Te = u(i) ?? i, t[4] = i, t[5] = Te);
    let F = Te,
        Oe = b(),
        ke;
    t[6] !== d.id || t[7] !== Oe ? (ke = u(d.id) ?? Oe, t[6] = d.id, t[7] = Oe, t[8] = ke) : ke = t[8];
    let I = ke,
        L = C(`3375735072`),
        R;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (R = Ae(), t[9] = R) : R = t[9];
    let Ne = R,
        Fe;
    t[10] !== d || t[11] !== r ? (Fe = () => {
        let e = ot(d),
            t = e === `enriched` ? ft(d) : null,
            n = bt(d),
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
    }, t[10] = d, t[11] = r, t[12] = Fe) : Fe = t[12];
    let {
        productDetailDataScope: z,
        resolvedProductDetailData: Re,
        statefulProduct: B,
        renderedOffers: Be,
        hasStreamedEntityOffers: V
    } = c(Fe), He, Ue;
    if (t[13] !== z) {
        let e = z === `enriched` ? v(`2128165686`) : void 0;
        He = e?.get(`disable_sidebar_what_to_know`, !1) ?? !1, Ue = e?.get(`disable_sidebar_reviews`, !1) ?? !1, t[13] = z, t[14] = He, t[15] = Ue
    } else He = t[14], Ue = t[15];
    let We = Ue,
        Ke;
    t[16] === d ? Ke = t[17] : (Ke = () => ({
        productRationale: lt(d),
        isLoadingReviewsOrRationale: pt(d)
    }), t[16] = d, t[17] = Ke);
    let {
        productRationale: Ye,
        isLoadingReviewsOrRationale: Xe
    } = c(Ke), Ze = !He && !!(Ye?.rationale || Xe), Qe;
    t[18] === d ? Qe = t[19] : (Qe = () => rt(d), t[18] = d, t[19] = Qe);
    let et = c(Qe),
        nt;
    t[20] === d ? nt = t[21] : (nt = () => gt(d), t[20] = d, t[21] = nt);
    let at = c(nt),
        mt;
    t[22] === d ? mt = t[23] : (mt = () => vt(d), t[22] = d, t[23] = mt);
    let _t = c(mt),
        yt;
    t[24] === d ? yt = t[25] : (yt = () => st(d), t[24] = d, t[25] = yt);
    let St = c(yt),
        Ct;
    t[26] === d ? Ct = t[27] : (Ct = () => ht(d), t[26] = d, t[27] = Ct);
    let Tt = c(Ct),
        Et;
    t[28] === d ? Et = t[29] : (Et = () => it(d), t[28] = d, t[29] = Et);
    let Ot = c(Et),
        kt;
    t[30] === d ? kt = t[31] : (kt = () => {
        let e = bt(d)?.product;
        return {
            productImageUrls: ct(d),
            isGeneratingTryOn: e != null && xt(d, e.id)
        }
    }, t[30] = d, t[31] = kt);
    let {
        productImageUrls: H,
        isGeneratingTryOn: At
    } = c(kt), U = p?.type === `product_agent` || p?.type === `entity` ? p.pinnedImage : void 0, W = U?.content_url || U?.thumbnail_url, Pt;
    t[32] !== U?.content_url || t[33] !== U?.thumbnail_url || t[34] !== W || t[35] !== H ? (Pt = W ? [W, ...H.filter(e => e !== U?.content_url && e !== U?.thumbnail_url)] : H, t[32] = U?.content_url, t[33] = U?.thumbnail_url, t[34] = W, t[35] = H, t[36] = Pt) : Pt = t[36];
    let G = Pt,
        It;
    t[37] === B ? It = t[38] : (It = je(B), t[37] = B, t[38] = It);
    let Rt = It,
        zt = z === `enriched` && (B.shopping_vto?.eligible ?? r.shopping_vto?.eligible ?? !1),
        [K] = (0, Q.useState)(Cn),
        Bt, q;
    t[39] !== d || t[40] !== F || t[41] !== a || t[42] !== r ? (Bt = () => Je({
        conversation: d,
        shellProduct: r,
        conversationId: F,
        messageId: a
    }), q = [d, r, F, a], t[39] = d, t[40] = F, t[41] = a, t[42] = r, t[43] = Bt, t[44] = q) : (Bt = t[43], q = t[44]), (0, Q.useEffect)(Bt, q);
    let J, Vt;
    t[45] !== d || t[46] !== F || t[47] !== a || t[48] !== fe || t[49] !== r || t[50] !== B ? (J = () => {
        $e({
            conversation: d,
            shellProduct: r,
            statefulProduct: B,
            conversationId: F,
            messageId: a,
            persistConversationToUser: fe
        })
    }, Vt = [d, F, a, fe, r, B], t[45] = d, t[46] = F, t[47] = a, t[48] = fe, t[49] = r, t[50] = B, t[51] = J, t[52] = Vt) : (J = t[51], Vt = t[52]), (0, Q.useEffect)(J, Vt);
    let Ht, Ut;
    t[53] === Symbol.for(`react.memo_cache_sentinel`) ? (Ht = () => {
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
    }, Ut = [], t[53] = Ht, t[54] = Ut) : (Ht = t[53], Ut = t[54]), (0, Q.useEffect)(Ht, Ut);
    let Wt = (0, Q.useRef)(!1),
        Gt = (0, Q.useRef)(null),
        Kt, qt;
    t[55] !== i || t[56] !== o || t[57] !== d || t[58] !== a || t[59] !== z || t[60] !== D ? (Kt = () => re(() => {
        let e = ft(d)?.product;
        e && !Wt.current && (Wt.current = !0, Me({
            clientThreadId: i,
            messageId: a,
            contentReferenceStartIndex: o,
            product: e,
            source: z === `source_catalog` ? M.CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_SOURCE_CATALOG : M.CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_ENRICHED
        }), D(`Product Sidebar Entity Loaded`, `product_sidebar_entity_loaded`, `product_entity`, {
            ...e.analytics_meta ?? {},
            product_event_uuid: e.product_event_uuid
        }))
    }), qt = [i, o, d, a, z, D], t[55] = i, t[56] = o, t[57] = d, t[58] = a, t[59] = z, t[60] = D, t[61] = Kt, t[62] = qt) : (Kt = t[61], qt = t[62]), (0, Q.useEffect)(Kt, qt);
    let Yt;
    t[63] !== _ || t[64] !== z || t[65] !== Re || t[66] !== r || t[67] !== B || t[68] !== D ? (Yt = () => {
        if (z === `source_catalog` && Re == null) return;
        let e = z === `source_catalog` ? B : r;
        if (Gt.current === e.id) return;
        Gt.current = e.id;
        let t = Dn(e, _),
            n = [t.offer_url, t.product_url, t.site_url, t.merchant_url].find(Sn);
        D(`Product Detail Shown`, `product_detail_shown`, `product_entity`, t, void 0, t => we(`product_detail_shown`, `detail_shown`, t, {
            productId: e.id,
            interactionSource: _,
            url: n
        }))
    }, t[63] = _, t[64] = z, t[65] = Re, t[66] = r, t[67] = B, t[68] = D, t[69] = Yt) : Yt = t[69];
    let Y;
    t[70] !== i || t[71] !== o || t[72] !== _ || t[73] !== a || t[74] !== I || t[75] !== z || t[76] !== Re || t[77] !== r || t[78] !== B || t[79] !== D || t[80] !== s ? (Y = [i, o, _, a, I, z, Re, r, B, D, s], t[70] = i, t[71] = o, t[72] = _, t[73] = a, t[74] = I, t[75] = z, t[76] = Re, t[77] = r, t[78] = B, t[79] = D, t[80] = s, t[81] = Y) : Y = t[81], (0, Q.useEffect)(Yt, Y);
    let Xt;
    t[82] !== z || t[83] !== B ? (Xt = z === `enriched` ? B.variants ?? [] : [], t[82] = z, t[83] = B, t[84] = Xt) : Xt = t[84];
    let Zt = Xt,
        $t;
    t[85] === B ? $t = t[86] : ($t = e => De(B, e), t[85] = B, t[86] = $t);
    let en = $t,
        tn;
    if (t[87] !== H || t[88] !== B) {
        tn = [];
        for (let e of H) {
            let t = ze(e, De(B, e));
            t != null && tn.push(t)
        }
        t[87] = H, t[88] = B, t[89] = tn
    } else tn = t[89];
    let nn = tn,
        rn = Ie(nn),
        X;
    t[90] !== nn || t[91] !== rn ? (X = e => {
        let t = ze(e);
        if (t == null) return e;
        let n = nn.findIndex(e => e.asset_pointer === t.asset_pointer);
        return rn[n]?.data?.url ?? null
    }, t[90] = nn, t[91] = rn, t[92] = X) : X = t[92];
    let an = X,
        on;
    t[93] !== w.isGenui || t[94] !== i || t[95] !== o || t[96] !== G || t[97] !== a || t[98] !== U?.url || t[99] !== W || t[100] !== an || t[101] !== r || t[102] !== B || t[103] !== s ? (on = (e, t) => {
        let n = G[e];
        Ee({
            clientThreadId: i,
            messageId: a,
            turnIndex: s,
            contentReferenceStartIndex: o,
            surfaceLocation: oe.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
            imageAffordance: t,
            imageIndex: e,
            contentReferenceType: `product_entity`,
            parentContext: {
                entityId: ge(r, a, o),
                entityCategory: `product`,
                contentReferenceStartIndex: o,
                messageId: a
            },
            isGenui: w.isGenui,
            url: n === W ? U?.url : B.url ?? r.url,
            contentUrl: n ? an(n) : void 0,
            isVirtualTryOnImage: Le(B, n)
        })
    }, t[93] = w.isGenui, t[94] = i, t[95] = o, t[96] = G, t[97] = a, t[98] = U?.url, t[99] = W, t[100] = an, t[101] = r, t[102] = B, t[103] = s, t[104] = on) : on = t[104];
    let cn = on,
        ln;
    t[105] !== w || t[106] !== o || t[107] !== F || t[108] !== Tt || t[109] !== G || t[110] !== a || t[111] !== pe || t[112] !== U || t[113] !== W || t[114] !== l || t[115] !== an || t[116] !== r || t[117] !== B ? (ln = e => {
        if (pe == null) return;
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
            let t = De(B, r) ?? {
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
                    is_proxied_image: ze(r) != null
                };
            Le(B, r) && i.push(n.length), n.push(o), r === e && (s = o)
        }
        s != null && (pe({
            image: s,
            source: me.ImageGroup,
            analyticsMetadata: w,
            contentReferenceStartIndex: o,
            productIndex: l,
            imageResults: n,
            engagementMetadata: {
                virtualTryOnImageIndices: i,
                contentReferenceType: `product_entity`,
                pageUrl: B.url ?? r.url ?? null,
                parentContext: {
                    entityId: ge(r, a, o),
                    entityCategory: `product`,
                    contentReferenceStartIndex: o,
                    messageId: a
                }
            }
        }), (je(B).includes(e) || je(r).includes(e)) && Ge({
            productId: B.id,
            conversationId: F,
            messageId: a
        }, `product_detail`))
    }, t[105] = w, t[106] = o, t[107] = F, t[108] = Tt, t[109] = G, t[110] = a, t[111] = pe, t[112] = U, t[113] = W, t[114] = l, t[115] = an, t[116] = r, t[117] = B, t[118] = ln) : ln = t[118];
    let un = ln,
        fn = Dt({
            isCheckoutEnabled: L,
            isClearingVariantSelection: N,
            isLoadingProductEntity: _t
        }),
        pn = St === `success` || St === `error`,
        mn;
    t[119] !== pn || t[120] !== V || t[121] !== z || t[122] !== Be || t[123] !== r.offers ? (mn = z === `source_catalog` || V ? Be : pn ? r.offers ?? [] : [], t[119] = pn, t[120] = V, t[121] = z, t[122] = Be, t[123] = r.offers, t[124] = mn) : mn = t[124];
    let hn = mn,
        gn = hn.length > 1,
        _n = V && St === `success`,
        vn;
    t[125] !== d || t[126] !== _n || t[127] !== V || t[128] !== a || t[129] !== K || t[130] !== r.id || t[131] !== r.query || t[132] !== r.title ? (vn = () => {
        K.reset({
            conversation: d,
            messageId: a,
            productKey: r.id || r.query || r.title
        }), K.logRenderOfferTimings(V, _n, !0)
    }, t[125] = d, t[126] = _n, t[127] = V, t[128] = a, t[129] = K, t[130] = r.id, t[131] = r.query, t[132] = r.title, t[133] = vn) : vn = t[133];
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
    t[144] === d ? jn = t[145] : (jn = () => {
        let e = he.current,
            t = _e.current;
        if (!e || !t) return;
        let n = () => {
            let n = e.getBoundingClientRect().top,
                r = t.getBoundingClientRect().bottom;
            return Math.max(0, Math.floor(r - n))
        };
        if (typeof ResizeObserver > `u`) {
            tt(d, n());
            return
        }
        tt(d, -1);
        let r = new ResizeObserver(() => {
            tt(d, n())
        });
        return r.observe(e), r.observe(t), tt(d, n()), () => {
            r.disconnect()
        }
    }, t[144] = d, t[145] = jn);
    let Mn;
    t[146] !== d || t[147] !== St || t[148] !== H.length ? (Mn = [d, St, H.length], t[146] = d, t[147] = St, t[148] = H.length, t[149] = Mn) : Mn = t[149], (0, Q.useEffect)(jn, Mn);
    let Nn = p && (de || I) && Ot;
    if (z === `source_catalog` && Re == null) {
        let e = y ? `bg-surface-primary` : `bg-token-bg-primary`,
            i;
        t[150] === e ? i = t[151] : (i = x(`flex min-h-screen w-full flex-col gap-4 px-6 pt-8`, e), t[150] = e, t[151] = i);
        let o;
        t[152] !== d || t[153] !== F || t[154] !== a || t[155] !== St || t[156] !== r ? (o = St === `error` ? (0, $.jsxs)(`div`, {
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
        }), t[152] = d, t[153] = F, t[154] = a, t[155] = St, t[156] = r, t[157] = o) : o = t[157];
        let s;
        return t[158] !== _t || t[159] !== i || t[160] !== o ? (s = (0, $.jsx)(`div`, {
            className: i,
            "aria-busy": _t,
            children: o
        }), t[158] = _t, t[159] = i, t[160] = o, t[161] = s) : s = t[161], s
    }
    let Pn = y ? `bg-surface-primary` : `bg-token-bg-primary`,
        Fn = y ? `mt-[calc(var(--threadFlyOut-leading-height,var(--product-flyout-sticky-header-height))*-1)] min-h-screen` : `mt-0`,
        In;
    t[162] !== Pn || t[163] !== Fn ? (In = x(`flex w-full flex-col`, Pn, Fn), t[162] = Pn, t[163] = Fn, t[164] = In) : In = t[164];
    let Ln = `${B.id}:${G[0]??``}`,
        Rn;
    t[165] !== en || t[166] !== U || t[167] !== W || t[168] !== B.title ? (Rn = (e, t) => (0, $.jsx)(On, {
        src: e,
        onLoad: t,
        title: e === W && U ? U.title : B.title,
        assetPointerDimensions: en(e)
    }), t[165] = en, t[166] = U, t[167] = W, t[168] = B.title, t[169] = Rn) : Rn = t[169];
    let zn;
    t[170] !== F || t[171] !== a || t[172] !== B.id ? (zn = () => {
        qe({
            productId: B.id,
            conversationId: F,
            messageId: a
        }, `product_detail`)
    }, t[170] = F, t[171] = a, t[172] = B.id, t[173] = zn) : zn = t[173];
    let Bn;
    t[174] === cn ? Bn = t[175] : (Bn = (e, t) => {
        cn(t, e === `next` ? ye.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_NEXT_BUTTON : ye.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_PREVIOUS_BUTTON)
    }, t[174] = cn, t[175] = Bn);
    let Vn;
    t[176] !== cn || t[177] !== un ? (Vn = (e, t) => {
        cn(t, ye.CHATGPT_IMAGE_AFFORDANCE_PRODUCT_DETAIL_IMAGE), un(e)
    }, t[176] = cn, t[177] = un, t[178] = Vn) : Vn = t[178];
    let Hn;
    t[179] !== h || t[180] !== G || t[181] !== Rt || t[182] !== At || t[183] !== Ln || t[184] !== Rn || t[185] !== zn || t[186] !== Bn || t[187] !== Vn ? (Hn = (0, $.jsx)(`div`, {
        ref: _e,
        children: (0, $.jsx)(Jt, {
            aspect: h,
            imageUrls: G,
            generatedImageUrls: Rt,
            isGenerating: At,
            renderImage: Rn,
            onGeneratedImageViewed: zn,
            onArrowClick: Bn,
            onClick: Vn
        }, Ln)
    }), t[179] = h, t[180] = G, t[181] = Rt, t[182] = At, t[183] = Ln, t[184] = Rn, t[185] = zn, t[186] = Bn, t[187] = Vn, t[188] = Hn) : Hn = t[188];
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
    t[192] === Tt ? Gn = t[193] : (Gn = (0, $.jsx)(`h2`, {
        ref: ve,
        className: `text-xl`,
        children: Tt
    }), t[192] = Tt, t[193] = Gn);
    let Kn;
    t[194] !== Un || t[195] !== Gn ? (Kn = (0, $.jsx)(g.div, {
        className: `overflow-hidden`,
        initial: !1,
        animate: Un,
        transition: Wn,
        children: Gn
    }), t[194] = Un, t[195] = Gn, t[196] = Kn) : Kn = t[196];
    let qn;
    t[197] === B ? qn = t[198] : (qn = (0, $.jsx)(jt, {
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
    t[202] !== Ne || t[203] !== B.price_history ? (Yn = Ne && B.price_history && (0, $.jsx)(dn, {
        priceHistory: B.price_history
    }), t[202] = Ne, t[203] = B.price_history, t[204] = Yn) : Yn = t[204];
    let Xn;
    t[205] !== d || t[206] !== ie || t[207] !== L || t[208] !== A || t[209] !== l || t[210] !== r || t[211] !== B || t[212] !== D || t[213] !== Zt ? (Xn = L && Zt.length > 0 && (0, $.jsx)(`div`, {
        className: x(`px-5 pt-4 pb-2`, A && `pointer-events-none opacity-50`),
        "aria-busy": A,
        children: (0, $.jsx)(Lt, {
            options: Zt,
            showErrors: ie,
            updateOption: (e, t, n) => wn({
                optionGroupId: e,
                selectedId: t,
                variant_index: n,
                conversation: d,
                shellProduct: r,
                statefulProduct: B,
                setIsSwitchingVariant: j,
                setIsClearingVariantSelection: P,
                setSuppressOfferAnimations: ce,
                setError: k,
                trackContentReferenceEvent: D,
                productIndex: l,
                productId: r.id
            })
        })
    }), t[205] = d, t[206] = ie, t[207] = L, t[208] = A, t[209] = l, t[210] = r, t[211] = B, t[212] = D, t[213] = Zt, t[214] = Xn) : Xn = t[214];
    let Zn;
    t[215] === O ? Zn = t[216] : (Zn = O && (0, $.jsx)(`div`, {
        className: `text-token-interactive-label-danger-secondary-default text-center`,
        children: O
    }), t[215] = O, t[216] = Zn);
    let Qn;
    t[217] !== L || t[218] !== H || t[219] !== B.image_urls ? (Qn = L ? B.image_urls ?? [] : H, t[217] = L, t[218] = H, t[219] = B.image_urls, t[220] = Qn) : Qn = t[220];
    let $n = z === `source_catalog` || Ze,
        er;
    t[221] === Symbol.for(`react.memo_cache_sentinel`) ? (er = () => ae(!0), t[221] = er) : er = t[221];
    let tr;
    t[222] !== o || t[223] !== d || t[224] !== ee || t[225] !== _ || t[226] !== hn || t[227] !== fn || t[228] !== l || t[229] !== gn || t[230] !== B || t[231] !== se || t[232] !== Qn || t[233] !== $n || t[234] !== D ? (tr = (0, $.jsx)(Nt, {
        className: `flex flex-col px-5 pt-3`,
        offers: hn,
        conversation: d,
        contentReferenceStartIndex: o,
        productIndex: l,
        product: B,
        trackContentReferenceEvent: D,
        imageUrls: Qn,
        isLoading: fn,
        suppressOfferAnimations: se,
        showBestPriceOfferTag: gn,
        showBottomBorder: $n,
        onOpenCheckout: er,
        interactionSource: _,
        initialVisibleOfferCount: ee
    }), t[222] = o, t[223] = d, t[224] = ee, t[225] = _, t[226] = hn, t[227] = fn, t[228] = l, t[229] = gn, t[230] = B, t[231] = se, t[232] = Qn, t[233] = $n, t[234] = D, t[235] = tr) : tr = t[235];
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
    t[248] !== o || t[249] !== d || t[250] !== zt || t[251] !== a || t[252] !== H || t[253] !== l || t[254] !== r.shopping_vto || t[255] !== B || t[256] !== s ? (ir = zt && (0, $.jsx)(wt, {
        contentReferenceStartIndex: o,
        conversation: d,
        messageId: a,
        product: {
            ...B,
            image_urls: H,
            shopping_vto: B.shopping_vto == null ? r.shopping_vto : {
                ...B.shopping_vto,
                generated_images: Pe(B.shopping_vto.generated_images ?? [], r.shopping_vto?.generated_images ?? [])
            }
        },
        productIndex: l,
        turnIndex: s
    }), t[248] = o, t[249] = d, t[250] = zt, t[251] = a, t[252] = H, t[253] = l, t[254] = r.shopping_vto, t[255] = B, t[256] = s, t[257] = ir) : ir = t[257];
    let ar;
    t[258] !== o || t[259] !== d || t[260] !== S || t[261] !== de || t[262] !== a || t[263] !== te || t[264] !== l || t[265] !== Nn || t[266] !== B || t[267] !== s ? (ar = Nn && (0, $.jsx)(`div`, {
        className: `flex justify-end px-6 pt-16 pb-6`,
        children: (0, $.jsx)(sn, {
            conversation: d,
            messageId: de ? void 0 : a,
            contentReferenceStartIndex: o,
            turnIndex: s,
            productIndex: l,
            product: B,
            isModal: S,
            onFollowUp: te
        })
    }), t[258] = o, t[259] = d, t[260] = S, t[261] = de, t[262] = a, t[263] = te, t[264] = l, t[265] = Nn, t[266] = B, t[267] = s, t[268] = ar) : ar = t[268];
    let or;
    t[269] !== at || t[270] !== ue ? (or = !1, t[269] = at, t[270] = ue, t[271] = or) : or = t[271];
    let sr;
    return t[272] !== In || t[273] !== Hn || t[274] !== Jn || t[275] !== Yn || t[276] !== Xn || t[277] !== Zn || t[278] !== tr || t[279] !== nr || t[280] !== ir || t[281] !== ar || t[282] !== or ? (sr = (0, $.jsxs)(`div`, {
        ref: he,
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
        ee = p?.options.find(e => e.id === t);
    t && !ee?.available && (_ = {
        [e]: t
    });
    let te = Object.keys(_ ?? {}).length > 0,
        v = Tn({
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
        productLookupKey: v
    });
    let y = !1,
        b = (e, t) => {
            y = !0, mt({
                conversation: r,
                shellProduct: i,
                nextProduct: e,
                productLookupKey: t ?? e.product_lookup_key ?? {},
                hasFetchedVariant: te
            })
        };
    try {
        if (m)
            for await (let e of Qe({
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
                let e = (await Xe({
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
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = x(`h-full w-full cursor-zoom-in object-contain mix-blend-darken dark:mix-blend-lighten`), t[0] = o) : o = t[0];
    let s;
    return t[1] !== n || t[2] !== a || t[3] !== r || t[4] !== i ? (s = (0, $.jsx)(I, {
        src: r,
        onLoad: a,
        assetPointerDimensions: n,
        alt: i,
        className: o
    }), t[1] = n, t[2] = a, t[3] = r, t[4] = i, t[5] = s) : s = t[5], s
}
var kn, Q, $, An, jn = e((() => {
    kn = k(), ke(), de(), L(), Oe(), _(), be(), z(), he(), j(), Zt(), St(), Ct(), Ke(), Ne(), Et(), Re(), Be(), nt(), Ze(), Ye(), F(), i(), ee(), o(), te(), xe(), se(), S(), a(), Q = t(O()), D(), on(), un(), Te(), Rt(), mn(), G(), W(), Pt(), bn(), kt(), $ = w(), An = () => void 0
}));
export {
    jn as n, xn as t
};
//# sourceMappingURL=ecdd5ba5-ye4c6a2cp11krh9n.js.map