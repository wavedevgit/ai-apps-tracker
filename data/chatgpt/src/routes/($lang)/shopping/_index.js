import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $M as n,
    AJ as r,
    B6 as i,
    BK as a,
    Btt as o,
    Htt as s,
    JP as c,
    K8 as l,
    KK as u,
    NK as d,
    Nrt as f,
    OZ as p,
    Prt as m,
    QV as h,
    RV as g,
    b5 as _,
    cH as v,
    cz as y,
    dH as b,
    dot as x,
    eN as S,
    i5 as C,
    iH as w,
    ik as T,
    kJ as E,
    lz as D,
    mZ as O,
    mw as k,
    nk as A,
    ok as j,
    pet as M,
    pw as ee,
    tH as N,
    uot as P,
    vN as F,
    y5 as I,
    yN as te,
    zP as L,
    zV as ne,
    zet as re
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as ie,
    Bn as R,
    Ln as ae,
    Nn as oe,
    Pt as se,
    Rn as z,
    Rt as ce,
    Ut as le,
    Vn as B,
    Zt as ue,
    rn as de,
    wn as V,
    zn as fe
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    AGn as H,
    Aa as pe,
    BHn as me,
    MGn as he,
    RHn as U,
    dr as W,
    fkt as G,
    gyn as K,
    iZ as ge,
    ka as _e,
    lFt as ve,
    lr as ye,
    lyn as be,
    mkt as xe,
    rZ as Se,
    uFt as Ce,
    vOn as we
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    CC as Te,
    Dm as Ee,
    Em as De,
    SC as Oe
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    C_ as ke,
    D as Ae,
    F as je,
    G as Me,
    Gn as Ne,
    H as Pe,
    I_ as Fe,
    Kn as Ie,
    Lb as Le,
    M as Re,
    N as ze,
    Nt as Be,
    O as Ve,
    Om as He,
    Pt as Ue,
    R_ as We,
    TS as Ge,
    T_ as Ke,
    U as qe,
    Vp as Je,
    _S as Ye,
    b as Xe,
    bl as Ze,
    fn as Qe,
    j as $e,
    km as et,
    m as tt,
    p as nt,
    un as rt,
    w_ as it,
    xl as at,
    y as ot,
    yl as st,
    zp as ct
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as lt,
    t as ut
} from "./9f7bb6d3-l9ls9y254izawjwa.js";
import {
    r as dt,
    t as ft
} from "./5be378a2-l1vegm9qq2nwk6ud.js";
import {
    n as pt,
    t as mt
} from "./2d4fbc67-dajgm8a8ebbuw8q0.js";
import {
    n as ht,
    t as gt
} from "./c157dfba-lklqdkx5otfdq0gh.js";

function _t(e) {
    switch (e) {
        case `carousel`:
            return we.CHATGPT_SHOPPING_HOME_PROMPT_GROUP_KIND_CAROUSEL;
        case `grid`:
            return we.CHATGPT_SHOPPING_HOME_PROMPT_GROUP_KIND_GRID;
        default:
            return we.CHATGPT_SHOPPING_HOME_PROMPT_GROUP_KIND_UNSPECIFIED
    }
}

function vt(e) {
    return e == null ? {} : {
        source: e
    }
}

function yt(e) {
    return {
        ...e.promptId == null ? {} : {
            promptId: e.promptId
        },
        ...e.promptGroupId == null ? {} : {
            promptGroupId: e.promptGroupId
        },
        ...e.position == null ? {} : {
            position: e.position
        },
        ...e.promptGroupKind == null ? {} : {
            promptGroupKind: _t(e.promptGroupKind)
        }
    }
}

function bt(e) {
    return yt(e)
}

function xt(e) {
    return yt(e)
}

function St(e) {
    return {
        ...yt(e),
        shoppingSendUuid: e.shoppingSendUuid
    }
}

function Ct(e) {
    o.logStructuredEvent(`ChatgptShoppingHomeImpression`, vt(e))
}

function wt(e) {
    o.logStructuredEvent(`ChatgptShoppingHomePromptImpression`, bt(e))
}

function Tt(e) {
    o.logStructuredEvent(`ChatgptShoppingHomePromptSelected`, xt(e))
}

function Et(e) {
    o.logStructuredEvent(`ChatgptShoppingHomePromptSent`, St(e))
}
var Dt = e((() => {
    s(), Le()
}));

function Ot(e) {
    "use forget";
    let t = (0, kt.c)(22),
        {
            item: n,
            promptGroupContext: r,
            skeleton: i,
            onSelect: a
        } = e,
        o = i ?? !1,
        s = o && `skeleton`,
        c;
    t[0] === s ? c = t[1] : (c = I(`group relative aspect-[2/1] overflow-hidden rounded-[24px] bg-neutral-200 md:aspect-[2.5/1]`, s), t[0] = s, t[1] = c);
    let l;
    t[2] !== o || t[3] !== n ? (l = o ? (0, q.jsx)(`div`, {
        className: `loading-results-shimmer bg-token-bg-secondary absolute inset-0`
    }) : (0, q.jsxs)(q.Fragment, {
        children: [(0, q.jsx)(`img`, {
            src: n.image_url,
            alt: ``,
            className: `h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]`,
            loading: `lazy`
        }), (0, q.jsx)(`div`, {
            className: `pointer-events-none absolute start-3 top-3 z-10`,
            children: (0, q.jsx)(`span`, {
                className: `inline-flex h-10 items-center justify-center rounded-full bg-white/18 px-4 text-base leading-[26px] font-semibold text-white backdrop-blur-[12px]`,
                style: {
                    filter: `drop-shadow(rgba(0, 0, 0, 0.10) 0px 10px 15px) drop-shadow(rgba(0, 0, 0, 0.10) 0px 4px 6px)`
                },
                children: (0, q.jsx)(oe, {
                    defaultMessage: `Try it`,
                    id: `shopping-home-carousel-try-it-pill`
                })
            })
        })]
    }), t[2] = o, t[3] = n, t[4] = l) : l = t[4];
    let u;
    t[5] !== o || t[6] !== n || t[7] !== a || t[8] !== r ? (u = !o && a && r ? (0, q.jsx)(`button`, {
        type: `button`,
        className: `absolute inset-0 z-20 rounded-[24px] focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30 focus-visible:outline-none`,
        onClick: e => a(n, r, e),
        children: (0, q.jsx)(`span`, {
            className: `sr-only`,
            children: n.title
        })
    }) : null, t[5] = o, t[6] = n, t[7] = a, t[8] = r, t[9] = u) : u = t[9];
    let d;
    t[10] === o ? d = t[11] : (d = o ? null : (0, q.jsxs)(`div`, {
        className: `pointer-events-none absolute inset-x-[-1px] bottom-[-1px] h-[112px] overflow-hidden`,
        children: [(0, q.jsx)(`div`, {
            className: `absolute inset-x-[-20px] bottom-[-14px] h-[140px] backdrop-blur-[12px]`,
            style: {
                maskImage: At,
                WebkitMaskImage: At
            }
        }), (0, q.jsx)(`div`, {
            className: `absolute inset-x-0 bottom-0 h-[112px]`,
            style: {
                backgroundImage: jt,
                backgroundBlendMode: `normal, soft-light`
            }
        }), (0, q.jsx)(`div`, {
            className: `absolute inset-x-[-18px] bottom-[-18px] h-[136px] blur-[20px]`,
            style: {
                backgroundImage: Mt,
                maskImage: At,
                WebkitMaskImage: At
            }
        }), (0, q.jsx)(`div`, {
            className: `absolute inset-x-0 bottom-0 h-[112px] mix-blend-soft-light`,
            style: {
                opacity: .0914,
                backgroundImage: Nt,
                backgroundSize: `128px 128px`,
                maskImage: At,
                WebkitMaskImage: At
            }
        })]
    }), t[10] = o, t[11] = d);
    let f;
    t[12] !== o || t[13] !== n ? (f = (0, q.jsx)(`div`, {
        className: `absolute inset-x-0 bottom-0 z-10 flex min-h-[174px] items-end px-4 pb-3 text-white md:pb-4`,
        children: o ? (0, q.jsxs)(`div`, {
            className: `flex w-full max-w-[70%] flex-col gap-2`,
            children: [(0, q.jsx)(`div`, {
                className: `loading-results-shimmer bg-token-bg-secondary h-6 w-full rounded-full md:h-8`
            }), (0, q.jsx)(`div`, {
                className: `loading-results-shimmer bg-token-bg-secondary h-6 w-[72%] rounded-full md:h-8`
            })]
        }) : (0, q.jsx)(`div`, {
            style: {
                filter: `drop-shadow(rgba(0, 0, 0, 0.10) 0px 10px 15px) drop-shadow(rgba(0, 0, 0, 0.10) 0px 4px 6px)`
            },
            children: (0, q.jsx)(`h3`, {
                className: `max-w-full text-[17px] leading-[22px] font-semibold [text-wrap:balanced] md:text-[24px] md:leading-[28px]`,
                children: n.title
            })
        })
    }), t[12] = o, t[13] = n, t[14] = f) : f = t[14];
    let p;
    return t[15] !== o || t[16] !== c || t[17] !== l || t[18] !== u || t[19] !== d || t[20] !== f ? (p = (0, q.jsxs)(`article`, {
        className: c,
        "aria-hidden": o,
        children: [l, u, d, f]
    }), t[15] = o, t[16] = c, t[17] = l, t[18] = u, t[19] = d, t[20] = f, t[21] = p) : p = t[21], p
}
var kt, q, At, jt, Mt, Nt, Pt = e((() => {
    kt = V(), _(), z(), q = R(), At = `linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.94) 11%, rgba(0, 0, 0, 0.68) 43%, rgba(0, 0, 0, 0.28) 71%, rgba(0, 0, 0, 0.08) 83%, rgba(0, 0, 0, 0) 100%)`, jt = `linear-gradient(to top, rgba(0, 0, 0, 0.282) 0%, rgba(0, 0, 0, 0.263) 14%, rgba(0, 0, 0, 0.227) 28%, rgba(0, 0, 0, 0.18) 42%, rgba(0, 0, 0, 0.13) 56%, rgba(0, 0, 0, 0.075) 70%, rgba(0, 0, 0, 0.04) 82%, rgba(0, 0, 0, 0.016) 91%, rgba(0, 0, 0, 0) 100%), radial-gradient(150% 110% at 50% 100%, rgba(0, 0, 0, 0.063) 0%, rgba(0, 0, 0, 0.04) 40%, rgba(0, 0, 0, 0) 100%)`, Mt = `radial-gradient(135% 92% at 50% 100%, rgba(0, 0, 0, 0.204) 0%, rgba(0, 0, 0, 0.145) 34%, rgba(0, 0, 0, 0.075) 62%, rgba(0, 0, 0, 0) 100%)`, Nt = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`
}));

function Ft(e) {
    return Array.from({
        length: e
    }, (e, t) => ({
        id: `shopping-home-skeleton-${t}`,
        title: ``,
        prompt_text: ``,
        image_url: It,
        action: {
            strategy: `auto_send`
        },
        system_hint: null,
        dev_hint: null,
        is_supported: !0
    }))
}
var It, Lt = e((() => {
    It = `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==`
}));

function Rt(e) {
    "use forget";
    let t = (0, Gt.c)(109),
        {
            groupId: n,
            groupKind: r,
            items: i,
            skeleton: a,
            onItemShow: o,
            onItemSelect: s
        } = e,
        c = a ?? i.length === 0,
        u = c && i.length > 0 ? i : Ft(3),
        d;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = l(Wt), t[0] = d) : d = t[0];
    let f = d,
        p = fe(),
        m = (0, J.useRef)(null),
        h;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (h = [], t[1] = h) : h = t[1];
    let g = (0, J.useRef)(h),
        _ = (0, J.useRef)(null),
        v = (0, J.useRef)(null),
        y = (0, J.useRef)(0),
        b;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (b = new Set, t[2] = b) : b = t[2];
    let x = (0, J.useRef)(b),
        [S, C] = (0, J.useState)(0),
        [w, T] = (0, J.useState)(!1),
        [E, D] = (0, J.useState)(!1),
        [O, k] = (0, J.useState)(!1),
        A = !c && i.length > 1,
        j;
    bb0: {
        if (!A) {
            let e;
            t[3] === i ? e = t[4] : (e = i.map(Ut), t[3] = i, t[4] = e), j = e;
            break bb0
        }
        let e = i.length - 1,
            n = i[e],
            r = `${i[e].id}-clone-leading`,
            a;t[5] !== e || t[6] !== n || t[7] !== r ? (a = {
            item: n,
            key: r,
            realIndex: e
        }, t[5] = e, t[6] = n, t[7] = r, t[8] = a) : a = t[8];
        let o;
        if (t[9] !== i || t[10] !== a) {
            let e = `${i[0].id}-clone-trailing`,
                n;
            t[12] !== i[0] || t[13] !== e ? (n = {
                item: i[0],
                key: e,
                realIndex: 0
            }, t[12] = i[0], t[13] = e, t[14] = n) : n = t[14], o = [a, ...i.map(Ht), n], t[9] = i, t[10] = a, t[11] = o
        } else o = t[11];j = o
    }
    let M = j,
        N = +!!A,
        P = !c && i.length > 1 && !f && !w && !E && !O,
        F;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (e, t) => {
        let n = t === void 0 ? `smooth` : t,
            r = m.current,
            i = g.current[e];
        !r || !i || (v.current = e, y.current = e, r.scrollTo({
            left: i.offsetLeft,
            behavior: n
        }))
    }, t[15] = F) : F = t[15];
    let L = F,
        ne;
    t[16] !== c || t[17] !== M.length ? (ne = () => {
        c || M.length <= 1 || L(Math.max(y.current - 1, 0))
    }, t[16] = c, t[17] = M.length, t[18] = ne) : ne = t[18];
    let re = ne,
        ie;
    t[19] !== c || t[20] !== M.length ? (ie = () => {
        c || M.length <= 1 || L(Math.min(y.current + 1, M.length - 1))
    }, t[19] = c, t[20] = M.length, t[21] = ie) : ie = t[21];
    let R = ie,
        ae;
    t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (ae = () => {
        let e = m.current;
        if (!e || g.current.length === 0) return 0;
        let t = e.scrollLeft;
        return g.current.reduce((e, n, r) => {
            if (!n) return e;
            let i = g.current[e];
            return i ? Math.abs(n.offsetLeft - t) < Math.abs(i.offsetLeft - t) ? r : e : r
        }, 0)
    }, t[22] = ae) : ae = t[22];
    let oe = ae,
        se;
    t[23] !== A || t[24] !== i.length || t[25] !== M.length ? (se = () => {
        if (!A) return;
        let e = oe();
        if (e === 0) {
            L(i.length, `auto`), C(Vt);
            return
        }
        e === M.length - 1 && (L(1, `auto`), C(Bt))
    }, t[23] = A, t[24] = i.length, t[25] = M.length, t[26] = se) : se = t[26];
    let z = se,
        ce;
    t[27] === z ? ce = t[28] : (ce = () => {
        let e = m.current;
        if (!e || g.current.length === 0) return;
        let t = e.scrollLeft,
            n = v.current;
        if (n != null) {
            let e = g.current[n];
            e && Math.abs(t - e.offsetLeft) <= qt && (v.current = null)
        }
        let r = oe();
        r !== y.current && (y.current = r, C(zt)), _.current != null && window.clearTimeout(_.current), _.current = window.setTimeout(() => {
            z()
        }, Jt)
    }, t[27] = z, t[28] = ce);
    let le = ce,
        B, ue;
    t[29] !== N || t[30] !== c || t[31] !== M.length ? (B = () => {
        if (c) return;
        g.current = g.current.slice(0, M.length), y.current = N, v.current = N;
        let e = window.requestAnimationFrame(() => {
            let e = g.current[N];
            e && m.current?.scrollTo({
                left: e.offsetLeft,
                behavior: `auto`
            })
        });
        return () => {
            window.cancelAnimationFrame(e)
        }
    }, ue = [N, c, M.length], t[29] = N, t[30] = c, t[31] = M.length, t[32] = B, t[33] = ue) : (B = t[32], ue = t[33]), te(B, ue);
    let de;
    t[34] !== M.length || t[35] !== P ? (de = () => {
        if (!P) return;
        let e = window.setTimeout(() => {
            let e = Math.min(y.current + 1, M.length - 1);
            L(e)
        }, Kt);
        return () => {
            window.clearTimeout(e)
        }
    }, t[34] = M.length, t[35] = P, t[36] = de) : de = t[36];
    let V;
    t[37] !== S || t[38] !== M.length || t[39] !== P ? (V = [S, M.length, L, P], t[37] = S, t[38] = M.length, t[39] = P, t[40] = V) : V = t[40], (0, J.useEffect)(de, V);
    let H, pe;
    t[41] === Symbol.for(`react.memo_cache_sentinel`) ? (H = () => () => {
        _.current != null && window.clearTimeout(_.current)
    }, pe = [], t[41] = H, t[42] = pe) : (H = t[41], pe = t[42]), (0, J.useEffect)(H, pe);
    let me;
    t[43] !== n || t[44] !== r || t[45] !== c || t[46] !== M || t[47] !== o ? (me = () => {
        if (c || !o || M.length === 0) return;
        let e = M[y.current];
        if (!e) return;
        let t = `${e.item.id}:${e.realIndex}`;
        x.current.has(t) || (x.current.add(t), o(e.item, {
            promptGroupId: n,
            promptGroupKind: r,
            position: e.realIndex
        }))
    }, t[43] = n, t[44] = r, t[45] = c, t[46] = M, t[47] = o, t[48] = me) : me = t[48];
    let he;
    if (t[49] !== S || t[50] !== n || t[51] !== r || t[52] !== c || t[53] !== M || t[54] !== o ? (he = [S, n, r, c, M, o], t[49] = S, t[50] = n, t[51] = r, t[52] = c, t[53] = M, t[54] = o, t[55] = he) : he = t[55], (0, J.useEffect)(me, he), !c && i.length === 0) return null;
    let U;
    t[56] === c ? U = t[57] : (U = c ? void 0 : () => T(!0), t[56] = c, t[57] = U);
    let W;
    t[58] === c ? W = t[59] : (W = c ? void 0 : () => {
        T(!1), k(!1)
    }, t[58] = c, t[59] = W);
    let G;
    t[60] === p ? G = t[61] : (G = p.formatMessage({
        id: `Dy9v2s`,
        defaultMessage: `Shopping home carousel`
    }), t[60] = p, t[61] = G);
    let K;
    t[62] === c ? K = t[63] : (K = c ? void 0 : () => D(!0), t[62] = c, t[63] = K);
    let ge;
    t[64] === c ? ge = t[65] : (ge = c ? void 0 : e => {
        e.currentTarget.contains(e.relatedTarget) || D(!1)
    }, t[64] = c, t[65] = ge);
    let _e;
    t[66] === c ? _e = t[67] : (_e = c ? void 0 : () => k(!0), t[66] = c, t[67] = _e);
    let ve;
    t[68] === c ? ve = t[69] : (ve = c ? void 0 : () => k(!1), t[68] = c, t[69] = ve);
    let ye;
    t[70] === c ? ye = t[71] : (ye = c ? void 0 : () => k(!1), t[70] = c, t[71] = ye);
    let be = c ? void 0 : le,
        xe = c ? `overflow-hidden` : `touch-pan-x touch-pan-y snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,
        Se;
    t[72] === xe ? Se = t[73] : (Se = I(`flex w-full gap-3`, xe), t[72] = xe, t[73] = Se);
    let Ce = J.Activity,
        we = c ? `visible` : `hidden`,
        Te = Yt(u, {
            skeleton: !0
        }),
        Ee;
    t[74] !== Ce || t[75] !== we || t[76] !== Te ? (Ee = (0, Y.jsx)(Ce, {
        mode: we,
        children: Te
    }), t[74] = Ce, t[75] = we, t[76] = Te, t[77] = Ee) : Ee = t[77];
    let De = c ? `hidden` : `visible`,
        ke;
    t[78] !== n || t[79] !== r || t[80] !== c || t[81] !== M || t[82] !== s ? (ke = Yt(c ? [] : M, {
        groupId: n,
        groupKind: r,
        getItemRef: e => t => {
            g.current[e] = t
        },
        onItemSelect: s
    }), t[78] = n, t[79] = r, t[80] = c, t[81] = M, t[82] = s, t[83] = ke) : ke = t[83];
    let Ae;
    t[84] !== De || t[85] !== ke ? (Ae = (0, Y.jsx)(J.Activity, {
        mode: De,
        children: ke
    }), t[84] = De, t[85] = ke, t[86] = Ae) : Ae = t[86];
    let je;
    t[87] !== G || t[88] !== K || t[89] !== ge || t[90] !== _e || t[91] !== ve || t[92] !== ye || t[93] !== be || t[94] !== Se || t[95] !== Ee || t[96] !== Ae ? (je = (0, Y.jsxs)(`div`, {
        ref: m,
        role: `group`,
        "aria-label": G,
        "aria-roledescription": `carousel`,
        onFocusCapture: K,
        onBlurCapture: ge,
        onPointerDown: _e,
        onPointerUp: ve,
        onPointerCancel: ye,
        onScroll: be,
        className: Se,
        children: [Ee, Ae]
    }), t[87] = G, t[88] = K, t[89] = ge, t[90] = _e, t[91] = ve, t[92] = ye, t[93] = be, t[94] = Se, t[95] = Ee, t[96] = Ae, t[97] = je) : je = t[97];
    let Me;
    t[98] !== R || t[99] !== re || t[100] !== p || t[101] !== c || t[102] !== i.length ? (Me = !c && i.length > 1 ? (0, Y.jsxs)(Y.Fragment, {
        children: [(0, Y.jsx)(`button`, {
            type: `button`,
            "aria-label": p.formatMessage({
                id: `/0/qk2`,
                defaultMessage: `Previous shopping suggestion`
            }),
            className: `bg-token-bg-primary text-token-text-primary border-token-border-light absolute start-0 top-1/2 z-30 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border opacity-0 shadow-lg transition-opacity md:flex md:group-hover/shopping-home-carousel:opacity-100`,
            onClick: re,
            children: (0, Y.jsx)(ee, {
                className: `icon`
            })
        }), (0, Y.jsx)(`button`, {
            type: `button`,
            "aria-label": p.formatMessage({
                id: `wG7FMR`,
                defaultMessage: `Next shopping suggestion`
            }),
            className: `bg-token-bg-primary text-token-text-primary border-token-border-light absolute end-0 top-1/2 z-30 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border opacity-0 shadow-lg transition-opacity md:flex md:group-hover/shopping-home-carousel:opacity-100`,
            onClick: R,
            children: (0, Y.jsx)(Oe, {
                className: `icon`
            })
        })]
    }) : null, t[98] = R, t[99] = re, t[100] = p, t[101] = c, t[102] = i.length, t[103] = Me) : Me = t[103];
    let Ne;
    return t[104] !== U || t[105] !== W || t[106] !== je || t[107] !== Me ? (Ne = (0, Y.jsxs)(`div`, {
        className: `group/shopping-home-carousel relative`,
        onPointerEnter: U,
        onPointerLeave: W,
        children: [je, Me]
    }), t[104] = U, t[105] = W, t[106] = je, t[107] = Me, t[108] = Ne) : Ne = t[108], Ne
}

function zt(e) {
    return e + 1
}

function Bt(e) {
    return e + 1
}

function Vt(e) {
    return e + 1
}

function Ht(e, t) {
    return {
        item: e,
        key: e.id,
        realIndex: t
    }
}

function Ut(e, t) {
    return {
        item: e,
        key: e.id,
        realIndex: t
    }
}

function Wt() {
    return u()
}
var Gt, J, Y, Kt, qt, Jt, Yt, Xt = e((() => {
    Gt = V(), k(), Te(), i(), d(), F(), _(), J = t(B()), z(), Pt(), Lt(), Y = R(), Kt = 5e3, qt = 2, Jt = 120, Yt = (e, t) => e.map((e, n) => {
        let r = `item` in e ? e.item : e,
            i = `key` in e ? e.key : e.id,
            a = `realIndex` in e ? e.realIndex : n;
        return (0, Y.jsx)(`div`, {
            className: `relative w-full min-w-0 shrink-0 grow-0 basis-full snap-start`,
            ref: t?.getItemRef?.(n),
            children: (0, Y.jsx)(Ot, {
                item: r,
                skeleton: t?.skeleton,
                promptGroupContext: t?.groupId != null && t.groupKind != null ? {
                    promptGroupId: t.groupId,
                    promptGroupKind: t.groupKind,
                    position: a
                } : void 0,
                onSelect: t?.skeleton ? void 0 : t?.onItemSelect
            })
        }, i)
    })
}));

function Zt(e) {
    "use forget";
    let t = (0, Qt.c)(29),
        {
            item: n,
            promptGroupContext: r,
            skeleton: i,
            onShow: a,
            onSelect: o
        } = e,
        s = i ?? !1,
        [c, l] = (0, $t.useState)(null),
        u = (0, $t.useRef)(!1),
        d, f;
    t[0] !== c || t[1] !== s || t[2] !== n || t[3] !== a || t[4] !== r ? (d = () => {
        if (!(s || !c || !a || u.current)) return U({
            target: c,
            options: {
                threshold: .5,
                rootMargin: `0%`
            },
            onChange(e) {
                !e || u.current || (u.current = !0, a(n, r))
            }
        })
    }, f = [c, s, n, a, r], t[0] = c, t[1] = s, t[2] = n, t[3] = a, t[4] = r, t[5] = d, t[6] = f) : (d = t[5], f = t[6]), (0, $t.useEffect)(d, f);
    let p = s && `skeleton`,
        m;
    t[7] === p ? m = t[8] : (m = I(`group relative aspect-[0.75/1] overflow-hidden rounded-[24px] bg-neutral-200`, p), t[7] = p, t[8] = m);
    let h;
    t[9] !== s || t[10] !== n ? (h = s ? (0, X.jsx)(`div`, {
        className: `loading-results-shimmer bg-token-bg-secondary absolute inset-0`
    }) : (0, X.jsx)(X.Fragment, {
        children: (0, X.jsx)(`img`, {
            src: n.image_url,
            alt: ``,
            className: `h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]`,
            loading: `lazy`
        })
    }), t[9] = s, t[10] = n, t[11] = h) : h = t[11];
    let g;
    t[12] !== s || t[13] !== n || t[14] !== o || t[15] !== r ? (g = !s && o ? (0, X.jsx)(`button`, {
        type: `button`,
        className: `absolute inset-0 z-20 rounded-[24px] focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30 focus-visible:outline-none`,
        onClick: e => o(n, r, e),
        children: (0, X.jsx)(`span`, {
            className: `sr-only`,
            children: n.title
        })
    }) : null, t[12] = s, t[13] = n, t[14] = o, t[15] = r, t[16] = g) : g = t[16];
    let _;
    t[17] === s ? _ = t[18] : (_ = s ? null : (0, X.jsxs)(`div`, {
        className: `pointer-events-none absolute inset-x-0 bottom-0 h-[100px] overflow-hidden`,
        children: [(0, X.jsx)(`div`, {
            className: `absolute inset-x-0 bottom-0 h-full backdrop-blur-[4px]`,
            style: {
                maskImage: en,
                WebkitMaskImage: en
            }
        }), (0, X.jsx)(`div`, {
            className: `absolute inset-x-0 bottom-0 h-[72px] bg-gradient-to-t from-black/18 via-black/8 to-transparent`
        }), (0, X.jsx)(`div`, {
            className: `absolute inset-[-22px_-26px_-25px_-26px] rounded-[2px] bg-gradient-to-b from-transparent to-black opacity-[0.08] blur-[10px]`
        })]
    }), t[17] = s, t[18] = _);
    let v;
    t[19] !== s || t[20] !== n ? (v = (0, X.jsx)(`div`, {
        className: `absolute inset-x-0 bottom-0 z-10 flex min-h-24 items-end px-4 pb-3 text-white`,
        children: s ? (0, X.jsxs)(`div`, {
            className: `flex w-full max-w-[78%] flex-col gap-2`,
            children: [(0, X.jsx)(`div`, {
                className: `loading-results-shimmer bg-token-bg-secondary h-4 w-full rounded-full md:h-5`
            }), (0, X.jsx)(`div`, {
                className: `loading-results-shimmer bg-token-bg-secondary h-4 w-[82%] rounded-full md:h-5`
            })]
        }) : (0, X.jsx)(`div`, {
            className: `-mx-[3px] -mb-[3px] px-[3px] pb-[3px]`,
            style: {
                filter: `drop-shadow(rgba(0, 0, 0, 0.10) 0px 10px 15px) drop-shadow(rgba(0, 0, 0, 0.10) 0px 4px 6px)`
            },
            children: (0, X.jsx)(`h3`, {
                className: `max-w-full text-[13px] leading-[18px] font-semibold [text-wrap:pretty]`,
                children: n.title
            })
        })
    }), t[19] = s, t[20] = n, t[21] = v) : v = t[21];
    let y;
    return t[22] !== s || t[23] !== m || t[24] !== h || t[25] !== g || t[26] !== _ || t[27] !== v ? (y = (0, X.jsxs)(`article`, {
        ref: l,
        className: m,
        "aria-hidden": s,
        children: [h, g, _, v]
    }), t[22] = s, t[23] = m, t[24] = h, t[25] = g, t[26] = _, t[27] = v, t[28] = y) : y = t[28], y
}
var Qt, $t, X, en, tn = e((() => {
    Qt = V(), me(), _(), $t = t(B()), X = R(), en = `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 100%)`
}));

function nn(e) {
    "use forget";
    let t = (0, rn.c)(18),
        {
            groupId: n,
            groupKind: r,
            items: i,
            skeleton: a,
            onItemShow: o,
            onItemSelect: s
        } = e,
        c = a ?? i.length === 0,
        l;
    t[0] !== c || t[1] !== i ? (l = c ? i.length > 0 ? i : Ft(8) : i, t[0] = c, t[1] = i, t[2] = l) : l = t[2];
    let u = l,
        d;
    if (t[3] !== u || t[4] !== n || t[5] !== r || t[6] !== c || t[7] !== s || t[8] !== o) {
        let e;
        t[10] !== n || t[11] !== r || t[12] !== c || t[13] !== s || t[14] !== o ? (e = (e, t) => (0, an.jsx)(Zt, {
            item: e,
            promptGroupContext: {
                promptGroupId: n,
                promptGroupKind: r,
                position: t
            },
            skeleton: c,
            onShow: o,
            onSelect: s
        }, e.id), t[10] = n, t[11] = r, t[12] = c, t[13] = s, t[14] = o, t[15] = e) : e = t[15], d = u.map(e), t[3] = u, t[4] = n, t[5] = r, t[6] = c, t[7] = s, t[8] = o, t[9] = d
    } else d = t[9];
    let f;
    return t[16] === d ? f = t[17] : (f = (0, an.jsx)(`div`, {
        className: `grid grid-cols-2 gap-4 md:grid-cols-3`,
        children: d
    }), t[16] = d, t[17] = f), f
}
var rn, an, on = e((() => {
    rn = V(), tn(), Lt(), an = R()
}));

function sn(e) {
    "use forget";
    let t = (0, cn.c)(7),
        {
            group: n,
            skeleton: r,
            onItemShow: i,
            onItemSelect: a
        } = e,
        o;
    return t[0] !== n.id || t[1] !== n.items || t[2] !== n.kind || t[3] !== a || t[4] !== i || t[5] !== r ? (o = (0, ln.jsx)(`section`, {
        children: n.kind === `carousel` ? (0, ln.jsx)(Rt, {
            groupId: n.id,
            groupKind: n.kind,
            items: n.items,
            skeleton: r,
            onItemShow: i,
            onItemSelect: a
        }) : (0, ln.jsx)(nn, {
            groupId: n.id,
            groupKind: n.kind,
            items: n.items,
            skeleton: r,
            onItemShow: i,
            onItemSelect: a
        })
    }), t[0] = n.id, t[1] = n.items, t[2] = n.kind, t[3] = a, t[4] = i, t[5] = r, t[6] = o) : o = t[6], o
}
var cn, ln, un = e((() => {
    cn = V(), Xt(), on(), ln = R()
}));

function dn(e) {
    "use forget";
    let t = (0, fn.c)(24),
        {
            promptOverride: n,
            onUnauthenticatedSubmit: r,
            placeholderText: i
        } = e,
        a = (0, pn.use)(L),
        o;
    t[0] === a ? o = t[1] : (o = x(a), t[0] = a, t[1] = o);
    let s = o,
        c = Ke(),
        l;
    t[2] === s ? l = t[3] : (l = () => be(s).id, t[2] = s, t[3] = l);
    let u = C(l),
        d = se(),
        f;
    t[4] !== c || t[5] !== n?.text ? (f = () => {
        let e = n?.text.trim();
        e && Ge(Fe(c), e)
    }, t[4] = c, t[5] = n?.text, t[6] = f) : f = t[6];
    let p;
    t[7] !== c || t[8] !== n ? (p = [c, n], t[7] = c, t[8] = n, t[9] = p) : p = t[9], (0, pn.useEffect)(f, p);
    let h;
    t[10] !== s || t[11] !== d || t[12] !== r ? (h = e => {
        let t = m();
        et({
            conversation: s,
            ...e
        }), t ? d(`/c/${s.id}`) : r?.()
    }, t[10] = s, t[11] = d, t[12] = r, t[13] = h) : h = t[13];
    let g = S(h),
        _;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, mn.jsx)(Ee, {
        className: `icon`
    }), t[14] = _) : _ = t[14];
    let v, y;
    t[15] === g ? (v = t[16], y = t[17]) : (v = e => g({
        callsiteId: `request_completion.shopping.home.shopping_home_composer.1`,
        ...st(e)
    }), y = async e => {
        Et({
            shoppingSendUuid: de()
        }), g({
            callsiteId: `request_completion.shopping.home.shopping_home_composer.2`,
            ...await Ze(e)
        })
    }, t[15] = g, t[16] = v, t[17] = y);
    let b;
    return t[18] !== s || t[19] !== u || t[20] !== i || t[21] !== v || t[22] !== y ? (b = (0, mn.jsx)(ve, {
        children: (0, mn.jsx)(Ne, {
            conversation: s,
            currentModelId: u,
            isNewThread: !0,
            isProjectThread: !1,
            entrySurface: `shopping_home`,
            disableDraftPersistence: !0,
            onlyAllowImageUploads: !0,
            plusButtonAddsFiles: !0,
            plusButtonIcon: _,
            hideHeader: !0,
            disableAdvancedVoiceMode: !0,
            disableVoiceButton: !0,
            onContinueGenerating: v,
            onRequestCompletion: y,
            placeholder: Se.promptPlaceholder,
            placeholderText: i
        })
    }), t[18] = s, t[19] = u, t[20] = i, t[21] = v, t[22] = y, t[23] = b) : b = t[23], b
}
var fn, pn, mn, hn = e((() => {
    fn = V(), He(), it(), c(), De(), ge(), K(), We(), at(), Ce(), Ye(), Ie(), i(), f(), P(), n(), pn = t(B()), ie(), ue(), Dt(), mn = R()
}));

function gn(e) {
    let {
        conversation: t,
        isAuthenticated: n,
        item: r,
        promptEventInput: i,
        onPrefillComposer: a,
        navigate: o,
        sourceEvent: s
    } = e, c = r.prompt_text.trim();
    if (!c) return {
        kind: `prefilled`,
        promptOverride: {
            id: r.id,
            text: ``
        }
    };
    if (r.action.strategy === `prefill_composer`) return a(c), {
        kind: `prefilled`,
        promptOverride: {
            id: r.id,
            text: c
        }
    };
    let l = O(c),
        u = de();
    return Et({
        ...i,
        shoppingSendUuid: u
    }), n && o(`/c/${t.id}`), et({
        callsiteId: `request_completion.shopping.home.shopping_home_prompt_action.1`,
        conversation: t,
        promptMessage: l,
        completionMetadata: {
            conversationMode: _n(t)
        },
        ...s ? {
            sourceEvent: s
        } : {
            eventSource: `mouse`
        }
    }), {
        kind: `sent`
    }
}

function _n(e) {
    return E(e.id)?.mode ?? {
        kind: M.PrimaryAssistant
    }
}
var vn = e((() => {
    re(), He(), r(), p(), ue(), Dt()
}));

function yn(e, t) {
    let n = e.findIndex(e => e.kind === `carousel`),
        r = e.findIndex(e => e.kind === `grid`);
    if (n === -1 || r === -1) return e;
    let i = e[n],
        a = e[r];
    if (kn.has(i.id)) return e;
    let o = a.items.length % t;
    if (o === 0) return e;
    let s = t - o,
        c = i.items.length > s && s <= o,
        l = [...e];
    return c ? (l[n] = {
        ...i,
        items: i.items.slice(0, -s)
    }, l[r] = {
        ...a,
        items: [...a.items, ...i.items.slice(-s)]
    }, l) : (l[n] = {
        ...i,
        items: [...i.items, ...a.items.slice(-o)]
    }, l[r] = {
        ...a,
        items: a.items.slice(0, -o)
    }, l)
}

function bn(e) {
    "use forget";
    let t = (0, Cn.c)(49),
        {
            groups: n,
            skeleton: r,
            onUnauthenticatedSubmit: i
        } = e,
        o = (0, wn.use)(L),
        s = se(),
        c = C(a),
        l = c ? En : Tn,
        [u, d] = (0, wn.useState)(null),
        f;
    t[0] !== l || t[1] !== n ? (f = yn(n, l), t[0] = l, t[1] = n, t[2] = f) : f = t[2];
    let p = f,
        h;
    t[3] === l ? h = t[4] : (h = yn([{
        id: `carousel`,
        title: `Carousel`,
        kind: `carousel`,
        action: {
            strategy: `prefill_composer`
        },
        items: Ft(Dn)
    }, {
        id: `grid`,
        title: `Grid`,
        kind: `grid`,
        action: {
            strategy: `prefill_composer`
        },
        items: Ft(On)
    }], l), t[3] = l, t[4] = h);
    let g = h,
        _;
    t[5] !== i || t[6] !== u ? (_ = (0, Z.jsx)(dn, {
        promptOverride: u,
        onUnauthenticatedSubmit: i
    }), t[5] = i, t[6] = u, t[7] = _) : _ = t[7];
    let v = _,
        y = S(Sn),
        b;
    t[8] === y ? b = t[9] : (b = (e, t) => {
        wt(y(e, t))
    }, t[8] = y, t[9] = b);
    let x = S(b),
        w;
    t[10] !== y || t[11] !== o || t[12] !== s || t[13] !== i ? (w = (e, t, n) => {
        if (!o) return;
        let r = y(e, t);
        Tt(r);
        let a = gn({
            conversation: o,
            isAuthenticated: m(),
            item: e,
            promptEventInput: r,
            sourceEvent: n.nativeEvent,
            onPrefillComposer: xn,
            navigate: s
        });
        if (a.kind === `prefilled`) {
            d(a.promptOverride);
            return
        }
        m() || i()
    }, t[10] = y, t[11] = o, t[12] = s, t[13] = i, t[14] = w) : w = t[14];
    let T = S(w),
        E;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, Z.jsx)(`h1`, {
        className: `text-token-text-primary text-heading-app box-trim-0.5 font-normal max-md:min-w-0 max-md:truncate max-md:text-2xl max-md:leading-[30px] max-md:font-semibold max-md:tracking-[-0.5px] max-md:[text-box-trim:none] max-md:before:hidden max-md:after:hidden md:translate-y-1`,
        children: (0, Z.jsx)(oe, {
            id: `shopping.home.title`,
            defaultMessage: `Try shopping on ChatGPT`
        })
    }), t[15] = E) : E = t[15];
    let D = c && v,
        O;
    t[16] === D ? O = t[17] : (O = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-8`,
        children: [E, D]
    }), t[16] = D, t[17] = O);
    let k = r ? `visible` : `hidden`,
        A;
    if (t[18] !== T || t[19] !== g) {
        let e;
        t[21] === T ? e = t[22] : (e = e => (0, Z.jsx)(sn, {
            group: e,
            skeleton: !0,
            onItemSelect: T
        }, e.id), t[21] = T, t[22] = e), A = g.map(e), t[18] = T, t[19] = g, t[20] = A
    } else A = t[20];
    let j;
    t[23] === A ? j = t[24] : (j = (0, Z.jsx)(`div`, {
        className: `flex flex-col gap-10`,
        children: A
    }), t[23] = A, t[24] = j);
    let M;
    t[25] !== j || t[26] !== k ? (M = (0, Z.jsx)(wn.Activity, {
        mode: k,
        children: j
    }), t[25] = j, t[26] = k, t[27] = M) : M = t[27];
    let ee = r ? `hidden` : `visible`,
        N;
    if (t[28] !== p || t[29] !== T || t[30] !== x) {
        let e;
        t[32] !== T || t[33] !== x ? (e = e => (0, Z.jsx)(sn, {
            group: e,
            onItemShow: x,
            onItemSelect: T
        }, e.id), t[32] = T, t[33] = x, t[34] = e) : e = t[34], N = p.map(e), t[28] = p, t[29] = T, t[30] = x, t[31] = N
    } else N = t[31];
    let P;
    t[35] === N ? P = t[36] : (P = (0, Z.jsx)(`div`, {
        className: `flex flex-col gap-10`,
        children: N
    }), t[35] = N, t[36] = P);
    let F;
    t[37] !== ee || t[38] !== P ? (F = (0, Z.jsx)(wn.Activity, {
        mode: ee,
        children: P
    }), t[37] = ee, t[38] = P, t[39] = F) : F = t[39];
    let I;
    t[40] !== o || t[41] !== c || t[42] !== v ? (I = !c && (0, Z.jsxs)(`div`, {
        className: `fixed inset-x-0 bottom-0 z-20 px-(--shopping-home-padding) pb-[max(env(safe-area-inset-bottom),16px)]`,
        children: [(0, Z.jsx)(`div`, {
            "aria-hidden": `true`,
            className: `bg-surface-primary pointer-events-none absolute inset-x-0 top-0 h-full`,
            style: {
                maskImage: `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)`,
                WebkitMaskImage: `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)`
            }
        }), (0, Z.jsxs)(`div`, {
            className: `max-w-app-content relative z-10 mx-auto w-full`,
            children: [v, (0, Z.jsx)(`div`, {
                className: `relative w-full overflow-hidden text-center`,
                children: (0, Z.jsx)(`div`, {
                    className: `flex min-h-8 w-full items-center justify-center px-2 pt-2 pb-3`,
                    children: o && (0, Z.jsx)(rt, {
                        conversation: o
                    })
                })
            })]
        })]
    }), t[40] = o, t[41] = c, t[42] = v, t[43] = I) : I = t[43];
    let te;
    return t[44] !== M || t[45] !== F || t[46] !== I || t[47] !== O ? (te = (0, Z.jsxs)(`div`, {
        className: `max-w-app-content mx-auto flex w-full flex-col gap-(--shopping-home-page-spacing) px-(--shopping-home-padding) pb-32 md:gap-[55px] md:pb-4`,
        children: [O, M, F, I]
    }), t[44] = M, t[45] = F, t[46] = I, t[47] = O, t[48] = te) : te = t[48], te
}

function xn() {}

function Sn(e, t) {
    return {
        promptId: e.id,
        ...t
    }
}
var Cn, wn, Z, Tn, En, Dn, On, kn, An = e((() => {
    Cn = V(), c(), un(), i(), Qe(), f(), d(), n(), wn = t(B()), z(), ie(), Dt(), hn(), vn(), Lt(), Z = R(), Tn = 2, En = 3, Dn = 3, On = 8, kn = new Set([`back-to-school-shopping`, `fathers-day-gift-ideas`, `graduation-gift-ideas`])
}));

function jn(e) {
    "use forget";
    let t = (0, Pn.c)(12),
        n = (0, Fn.use)(L),
        r;
    t[0] === n ? r = t[1] : (r = x(n), t[0] = n, t[1] = r);
    let i = r,
        a = C(Nn),
        o = C(Mn),
        s = e.groups ?? o,
        c = m(),
        [l, u] = (0, Fn.useState)(!1),
        d = (0, Fn.useRef)(!1),
        f = s.length === 0 && a,
        p, h;
    if (t[2] === l ? (p = t[3], h = t[4]) : (p = () => {
            l || d.current || (d.current = !0, Ct())
        }, h = [l], t[2] = l, t[3] = p, t[4] = h), (0, Fn.useEffect)(p, h), l && !c) {
        let e;
        return t[5] === i ? e = t[6] : (e = (0, In.jsx)(Be, {
            conversation: i,
            hideDisclaimer: !0,
            className: `shopping-home-thread`
        }, i.id), t[5] = i, t[6] = e), e
    }
    let g;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (g = I(`flex flex-col gap-(--shopping-home-page-spacing) max-md:mt-4 max-md:pt-17 md:mt-(--shopping-home-page-spacing)`, c ? `md:pt-19` : `md:pt-10`), t[7] = g) : g = t[7];
    let _;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = () => u(!0), t[8] = _) : _ = t[8];
    let v;
    return t[9] !== s || t[10] !== f ? (v = (0, In.jsx)(G, {
        children: (0, In.jsx)(`div`, {
            className: g,
            children: (0, In.jsx)(bn, {
                groups: s,
                skeleton: f,
                onUnauthenticatedSubmit: _
            })
        })
    }), t[9] = s, t[10] = f, t[11] = v) : v = t[11], v
}

function Mn() {
    return T()
}

function Nn() {
    return j().status === `pending`
}
var Pn, Fn, In, Ln = e((() => {
    Pn = V(), c(), A(), i(), Ue(), f(), P(), _(), Fn = t(B()), Dt(), An(), xe(), In = R()
}));

function Rn(e) {
    "use forget";
    let t = (0, zn.c)(41),
        {
            children: n
        } = e,
        r = (0, Bn.use)(L),
        i;
    t[0] === r ? i = t[1] : (i = x(r), t[0] = r, t[1] = i);
    let a = i,
        o;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = m(), t[2] = o) : o = t[2];
    let s = o,
        c;
    t[3] === a ? c = t[4] : (c = (0, Q.jsx)(nt, {
        conversation: a
    }), t[3] = a, t[4] = c);
    let l;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, Q.jsx)(y, {
        children: (0, Q.jsx)(ot, {})
    }), t[5] = l) : l = t[5];
    let u;
    t[6] === a ? u = t[7] : (u = !s && (0, Q.jsx)($e, {
        conversation: a,
        className: `bg-transparent shadow-none backdrop-blur-none`
    }), t[6] = a, t[7] = u);
    let d;
    t[8] === u ? d = t[9] : (d = (0, Q.jsxs)(H.Heading, {
        children: [l, u]
    }), t[8] = u, t[9] = d);
    let f;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, Q.jsx)(`div`, {
        className: `absolute inset-0 backdrop-blur-xs`
    }), t[10] = f) : f = t[10];
    let p;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, Q.jsx)(qe, {}), t[11] = p) : p = t[11];
    let h;
    t[12] === a.id ? h = t[13] : (h = (0, Q.jsx)(H.Navbar, {
        children: (0, Q.jsx)(ct, {
            insetBg: f,
            children: (0, Q.jsx)(Ae, {
                navHeader: p,
                children: (0, Q.jsx)(Pe, {
                    clientThreadId: a.id
                })
            })
        })
    }), t[12] = a.id, t[13] = h);
    let g, _;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, Q.jsx)(H.Header, {}), _ = s && (0, Q.jsx)(_e, {}), t[14] = g, t[15] = _) : (g = t[14], _ = t[15]);
    let v;
    t[16] === a ? v = t[17] : (v = (0, Q.jsx)(y, {
        children: (0, Q.jsx)(ze, {
            conversation: a
        })
    }), t[16] = a, t[17] = v);
    let b, S, C;
    t[18] === a.id ? (b = t[19], S = t[20], C = t[21]) : (b = (0, Q.jsx)(ft, {
        clientThreadId: a.id
    }), S = (0, Q.jsx)(mt, {
        clientThreadId: a.id
    }), C = (0, Q.jsx)(gt, {
        clientThreadId: a.id
    }), t[18] = a.id, t[19] = b, t[20] = S, t[21] = C);
    let w;
    t[22] !== v || t[23] !== b || t[24] !== S || t[25] !== C ? (w = (0, Q.jsxs)(H.ContentSidebar, {
        children: [v, b, S, C]
    }), t[22] = v, t[23] = b, t[24] = S, t[25] = C, t[26] = w) : w = t[26];
    let T;
    t[27] !== n || t[28] !== h || t[29] !== w || t[30] !== d ? (T = (0, Q.jsxs)(H, {
        className: `shopping-home-stage`,
        children: [d, n, h, g, _, w]
    }), t[27] = n, t[28] = h, t[29] = w, t[30] = d, t[31] = T) : T = t[31];
    let E;
    t[32] !== a || t[33] !== T ? (E = (0, Q.jsx)(ke, {
        conversation: a,
        children: T
    }), t[32] = a, t[33] = T, t[34] = E) : E = t[34];
    let D;
    t[35] === a ? D = t[36] : (D = (0, Q.jsx)(ye, {
        conversation: a
    }), t[35] = a, t[36] = D);
    let O;
    return t[37] !== E || t[38] !== D || t[39] !== c ? (O = (0, Q.jsxs)(Q.Fragment, {
        children: [c, E, D]
    }), t[37] = E, t[38] = D, t[39] = c, t[40] = O) : O = t[40], O
}
var zn, Bn, Q, Vn = e((() => {
        zn = V(), Me(), tt(), pe(), D(), Je(), je(), Re(), W(), it(), c(), dt(), Ve(), pt(), Xe(), he(), f(), P(), ht(), Bn = t(B()), Q = R()
    })),
    Hn, Un, Wn = e((() => {
        z(), w(), Hn = h, Un = ae({
            title: {
                id: `chatgpt.shopping.home.meta.title`,
                defaultMessage: `ChatGPT Shopping | AI Shopping Assistant`
            },
            description: {
                id: `chatgpt.shopping.home.meta.description`,
                defaultMessage: `Discover products, compare options, and get personalized shopping help with ChatGPT Shopping.`
            }
        })
    }));

function Gn() {
    "use forget";
    let e = (0, Kn.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(Rn, {
        children: (0, $.jsx)(jn, {})
    }), e[0] = t) : t = e[0], t
}
var Kn, $, qn, Jn, Yn, Xn = e((() => {
    ie(), Kn = V(), lt(), Ln(), Vn(), Wn(), v(), ne(), w(), z(), $ = R(), qn = `/shopping`, Jn = ({
        location: e
    }) => {
        let t = `https://chatgpt.com${b(e.pathname||qn)}`;
        return [...N(Hn), {
            rel: `canonical`,
            href: t
        }, ...g(`${qn}/`, {
            useAllProductLocales: !0
        })]
    }, Yn = le(function() {
        "use forget";
        let e = (0, Kn.c)(29),
            t = fe(),
            {
                conversationId: n
            } = ce(),
            r;
        e[0] === t ? r = e[1] : (r = t.formatMessage(Un.title), e[0] = t, e[1] = r);
        let i = r,
            a;
        e[2] === t ? a = e[3] : (a = t.formatMessage(Un.description), e[2] = t, e[3] = a);
        let o = a,
            s;
        e[4] === i ? s = e[5] : (s = (0, $.jsx)(`title`, {
            children: i
        }), e[4] = i, e[5] = s);
        let c;
        e[6] === o ? c = e[7] : (c = (0, $.jsx)(`meta`, {
            name: `description`,
            content: o
        }), e[6] = o, e[7] = c);
        let l;
        e[8] === i ? l = e[9] : (l = (0, $.jsx)(`meta`, {
            property: `og:title`,
            content: i
        }), e[8] = i, e[9] = l);
        let u;
        e[10] === o ? u = e[11] : (u = (0, $.jsx)(`meta`, {
            property: `og:description`,
            content: o
        }), e[10] = o, e[11] = u);
        let d;
        e[12] === i ? d = e[13] : (d = (0, $.jsx)(`meta`, {
            name: `twitter:title`,
            content: i
        }), e[12] = i, e[13] = d);
        let f;
        e[14] === o ? f = e[15] : (f = (0, $.jsx)(`meta`, {
            name: `twitter:description`,
            content: o
        }), e[14] = o, e[15] = f);
        let p;
        e[16] !== s || e[17] !== c || e[18] !== l || e[19] !== u || e[20] !== d || e[21] !== f ? (p = (0, $.jsxs)(`head`, {
            children: [s, c, l, u, d, f]
        }), e[16] = s, e[17] = c, e[18] = l, e[19] = u, e[20] = d, e[21] = f, e[22] = p) : p = e[22];
        let m;
        e[23] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, $.jsx)(Gn, {}), e[23] = m) : m = e[23];
        let h;
        e[24] === n ? h = e[25] : (h = (0, $.jsx)(ut, {
            conversationId: n,
            children: m
        }), e[24] = n, e[25] = h);
        let g;
        return e[26] !== h || e[27] !== p ? (g = (0, $.jsxs)($.Fragment, {
            children: [p, h]
        }), e[26] = h, e[27] = p, e[28] = g) : g = e[28], g
    })
}));
e((() => {
    Xn()
}))();
export {
    Yn as
    default, Jn as meta
};
//# sourceMappingURL=(_lang).shopping._index-oe4i8uek.js.map