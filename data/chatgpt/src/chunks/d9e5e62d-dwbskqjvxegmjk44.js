const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/8d3fc825-gmk180bgfdyml7j0.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-t80q9ew944ej0mgk.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-ocicxxw6jegn4vux.js", "assets/30901919-r9pahacmzqudnt4f.js", "assets/c470f5ab-py8gip6x11wq9s88.js", "assets/0e5afe53-bfccq9og5d2mon04.js", "assets/conversation-small-ht8gwtl7.css", "assets/2686af9f-ny4whhatn28qu0sq.js", "assets/282bcbc3-jnb262i2tocjm9uq.js", "assets/bb47c0a1-cxaylyrr82ech5a2.js", "assets/b41758b1-cjevn4yx2nh4stmu.js", "assets/ba0ab623-m5urip1icq4g3zsq.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dit as n,
    Oit as r,
    a2 as i,
    aL as a,
    c2 as o,
    c7 as s,
    d2 as c,
    fH as l,
    frt as u,
    k8 as d,
    l7 as f,
    lq as p,
    mH as m,
    nL as h,
    o2 as g,
    pq as _,
    prt as v,
    rq as y,
    uH as b,
    v5 as x
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as S,
    Ln as C,
    Rn as w,
    Vn as T,
    cn as E,
    ln as D,
    wn as O,
    zn as ee
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    TKn as k,
    _Wn as A,
    fWn as j,
    nct as M,
    pWn as N,
    tct as te,
    vWn as P,
    wKn as F,
    yWn as I
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Gv as ne,
    Hv as L,
    Kv as R,
    Uv as z,
    Wv as B,
    bC as re,
    gb as V,
    mb as H,
    qv as U,
    vC as W,
    xC as G,
    yC as ie
} from "./30901919-r9pahacmzqudnt4f.js";
import {
    n as K,
    t as q
} from "./2686af9f-ny4whhatn28qu0sq.js";
import {
    r as ae,
    t as oe
} from "./1fbff149-lbpye1huov1ryl6k.js";
import {
    t as se
} from "./c3e2d78f-lvd4caab97jcewnt.js";
import {
    n as ce,
    r as le
} from "./bb47c0a1-cxaylyrr82ech5a2.js";
import {
    $u as ue,
    nd as de
} from "./8b34dbc2-egl8cz04n8nmlktg.js";
import {
    B as fe,
    F as pe,
    Ht as me,
    I as he,
    L as ge,
    M as _e,
    N as ve,
    P as ye,
    R as be,
    Vt as xe,
    j as Se,
    z as Ce
} from "./c470f5ab-py8gip6x11wq9s88.js";
import {
    n as we,
    t as Te
} from "./10f2d773-bfzf78do6zzhmrrx.js";
import {
    i as Ee,
    n as De,
    r as Oe,
    t as ke
} from "./b41758b1-cjevn4yx2nh4stmu.js";

function Ae(e) {
    return (0, J.jsx)(`span`, {
        className: s({
            "bg-linear-to-r from-[#ED5EB4] to-[#8086F9] bg-clip-text text-transparent dark:from-[#F472B6] dark:via-[#C084FC] dark:to-[#818CF8]": e.labelGradientEnabled
        }),
        children: e.label
    })
}

function je(e) {
    "use forget";
    let t = (0, Fe.c)(16),
        {
            navData: n,
            disableDarkMode: r,
            isHeaderTooCrowdedForLg: i
        } = e,
        a = r !== void 0 && r,
        o = i !== void 0 && i,
        {
            effectiveLocale: c
        } = le(),
        [l, u] = (0, Ie.useState)(null),
        d = o ? `xl:flex` : `lg:flex`,
        f;
    t[0] === d ? f = t[1] : (f = s(`hidden items-center`, d), t[0] = d, t[1] = f);
    let p;
    if (t[2] !== a || t[3] !== c || t[4] !== n.items || t[5] !== l) {
        let e;
        t[7] !== a || t[8] !== c || t[9] !== l ? (e = e => (0, J.jsx)(`li`, {
            children: e.items?.length ? (0, J.jsx)(Ne, {
                item: e,
                effectiveLocale: c,
                disableDarkMode: a,
                openDropdownId: l,
                setOpenDropdownId: u
            }) : (0, J.jsx)(Me, {
                item: e,
                effectiveLocale: c,
                isTopLevel: !0,
                disableDarkMode: a
            })
        }, e.id), t[7] = a, t[8] = c, t[9] = l, t[10] = e) : e = t[10], p = n.items.map(e), t[2] = a, t[3] = c, t[4] = n.items, t[5] = l, t[6] = p
    } else p = t[6];
    let m;
    t[11] === p ? m = t[12] : (m = (0, J.jsx)(`ul`, {
        className: `flex items-center gap-2 lg:gap-4`,
        children: p
    }), t[11] = p, t[12] = m);
    let h;
    return t[13] !== f || t[14] !== m ? (h = (0, J.jsx)(`nav`, {
        className: f,
        children: m
    }), t[13] = f, t[14] = m, t[15] = h) : h = t[15], h
}

function Me(e) {
    "use forget";
    let t = (0, Fe.c)(22),
        {
            item: n,
            effectiveLocale: r,
            isTopLevel: i,
            disableDarkMode: a
        } = e,
        o = a !== void 0 && a,
        {
            external: c
        } = n,
        l;
    t[0] !== r || t[1] !== n.url ? (l = m(n.url, r), t[0] = r, t[1] = n.url, t[2] = l) : l = t[2];
    let u = l,
        d = i && o,
        f = i && !o,
        p = !i,
        h;
    t[3] !== i || t[4] !== d || t[5] !== f || t[6] !== p ? (h = s(`text-mkt-p2 flex items-center gap-0.5 rounded-lg px-2.5 whitespace-nowrap`, {
        "text-token-text-secondary hover:text-token-text-primary py-1.5": i,
        "hover:bg-token-bg-primary/80": d,
        "hover:bg-token-bg-secondary/50": f,
        "hover:bg-token-interactive-bg-primary-hover/10 py-2": p
    }), t[3] = i, t[4] = d, t[5] = f, t[6] = p, t[7] = h) : h = t[7];
    let g;
    t[8] !== n.analyticsIdentifier || t[9] !== u ? (g = () => {
        q.logNavigation({
            analytics_identifier: n.analyticsIdentifier,
            navigation_surface: `header_desktop`,
            to: u
        })
    }, t[8] = n.analyticsIdentifier, t[9] = u, t[10] = g) : g = t[10];
    let _;
    t[11] === n ? _ = t[12] : (_ = Ae(n), t[11] = n, t[12] = _);
    let v;
    t[13] === c ? v = t[14] : (v = c && (0, J.jsx)(R, {
        className: `h-3 w-3`
    }), t[13] = c, t[14] = v);
    let y;
    return t[15] !== c || t[16] !== h || t[17] !== g || t[18] !== _ || t[19] !== v || t[20] !== u ? (y = (0, J.jsxs)(P, {
        href: u,
        openNewTab: c,
        className: h,
        underline: !1,
        onClick: g,
        children: [_, v]
    }), t[15] = c, t[16] = h, t[17] = g, t[18] = _, t[19] = v, t[20] = u, t[21] = y) : y = t[21], y
}

function Ne(e) {
    "use forget";
    let t = (0, Fe.c)(75),
        {
            item: n,
            effectiveLocale: r,
            disableDarkMode: i,
            openDropdownId: a,
            setOpenDropdownId: o
        } = e,
        c = i !== void 0 && i,
        l = a === n.id,
        u = (0, Ie.useRef)(null),
        d = (0, Ie.useRef)(null),
        f = (0, Ie.useRef)(null),
        p = `header-nav-${n.id}`,
        h;
    t[0] !== r || t[1] !== n.url ? (h = m(n.url, r), t[0] = r, t[1] = n.url, t[2] = h) : h = t[2];
    let g = h,
        _ = !!n.url,
        v = _ ? P : `button`,
        y = !l,
        b = l && c,
        x = l && !c,
        S;
    t[3] !== l || t[4] !== y || t[5] !== b || t[6] !== x ? (S = s(`inline-flex items-center px-2.5 py-1.5 text-mkt-p2`, {
        "text-token-text-secondary": y,
        "text-token-text-primary rounded-lg backdrop-blur-xl": l,
        "bg-token-bg-primary/80": b,
        "bg-token-bg-secondary/50": x
    }), t[3] = l, t[4] = y, t[5] = b, t[6] = x, t[7] = S) : S = t[7];
    let C = S,
        w;
    t[8] !== _ || t[9] !== n.analyticsIdentifier || t[10] !== n.external || t[11] !== n.id || t[12] !== o || t[13] !== g ? (w = _ ? {
        href: g,
        openNewTab: n.external,
        underline: !1,
        onClick: () => {
            q.logNavigation({
                analytics_identifier: n.analyticsIdentifier,
                navigation_surface: `header_desktop`,
                to: g
            })
        }
    } : {
        ref: u,
        type: `button`,
        onClick: () => {
            o(n.id)
        }
    }, t[8] = _, t[9] = n.analyticsIdentifier, t[10] = n.external, t[11] = n.id, t[12] = o, t[13] = g, t[14] = w) : w = t[14];
    let T = w,
        E;
    t[15] !== _ || t[16] !== n.id || t[17] !== o ? (E = e => {
        e.preventDefault(), e.key === `ArrowDown` && o(n.id), !_ && (e.key === `Enter` || e.key === ` `) && o(n.id), e.key === `Escape` && o(null)
    }, t[15] = _, t[16] = n.id, t[17] = o, t[18] = E) : E = t[18];
    let D = E,
        O;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (O = () => {
        f.current &&= (clearTimeout(f.current), null)
    }, t[19] = O) : O = t[19];
    let ee = O,
        k;
    t[20] !== n.id || t[21] !== o ? (k = () => {
        ee(), f.current = setTimeout(() => {
            o(e => e === n.id ? null : e)
        }, 150)
    }, t[20] = n.id, t[21] = o, t[22] = k) : k = t[22];
    let A = k,
        j;
    t[23] === o ? j = t[24] : (j = e => {
        let t = e.relatedTarget;
        (!(t instanceof Node) || !e.currentTarget.contains(t)) && o(null)
    }, t[23] = o, t[24] = j);
    let M, N;
    t[25] !== n.id || t[26] !== o ? (M = () => o(n.id), N = () => o(n.id), t[25] = n.id, t[26] = o, t[27] = M, t[28] = N) : (M = t[27], N = t[28]);
    let te = n.analyticsIdentifier,
        F;
    t[29] === n ? F = t[30] : (F = Ae(n), t[29] = n, t[30] = F);
    let I;
    t[31] !== v || t[32] !== C || t[33] !== D || t[34] !== p || t[35] !== n.analyticsIdentifier || t[36] !== l || t[37] !== M || t[38] !== N || t[39] !== F || t[40] !== T ? (I = (0, J.jsx)(v, {
        className: C,
        "aria-haspopup": `menu`,
        "aria-expanded": l,
        "aria-controls": p,
        onMouseEnter: M,
        onFocus: N,
        onKeyDown: D,
        "data-analytics-id": te,
        ...T,
        children: F
    }), t[31] = v, t[32] = C, t[33] = D, t[34] = p, t[35] = n.analyticsIdentifier, t[36] = l, t[37] = M, t[38] = N, t[39] = F, t[40] = T, t[41] = I) : I = t[41];
    let ne = n.label,
        L = c ? `bg-token-bg-primary/80` : `bg-token-bg-secondary/50`,
        R = l ? `block` : `hidden`,
        z;
    t[42] !== L || t[43] !== R ? (z = s(`absolute start-1/2 z-50 mt-2 -translate-x-1/2 rounded-lg p-4 shadow-lg backdrop-blur-xl rtl:translate-x-1/2`, L, R), t[42] = L, t[43] = R, t[44] = z) : z = t[44];
    let B;
    bb0: {
        let e;t[45] === n.items ? e = t[46] : (e = n.items ?? [], t[45] = n.items, t[46] = e);
        let i = e,
            a = i.some(Pe),
            o = i.length > 1;
        if (a) {
            let e;
            if (t[47] !== i || t[48] !== r || t[49] !== o) {
                let n;
                t[51] !== i.length || t[52] !== r || t[53] !== o ? (n = (e, t) => (0, J.jsxs)(`div`, {
                    className: s(o && t === 0 && `pe-4`, o && t === i.length - 1 && `ps-4`, o && t > 0 && t < i.length - 1 && `px-4`),
                    children: [(0, J.jsx)(`div`, {
                        className: `text-mkt-p2 my-2.5 px-2.5 opacity-50`,
                        children: e.label
                    }), (0, J.jsx)(`ul`, {
                        className: `flex flex-col`,
                        children: e.items?.map(e => (0, J.jsx)(`li`, {
                            children: (0, J.jsx)(Me, {
                                item: e,
                                effectiveLocale: r,
                                isTopLevel: !1
                            })
                        }, e.id))
                    })]
                }, e.id), t[51] = i.length, t[52] = r, t[53] = o, t[54] = n) : n = t[54], e = i.map(n), t[47] = i, t[48] = r, t[49] = o, t[50] = e
            } else e = t[50];
            let n;
            t[55] === e ? n = t[56] : (n = (0, J.jsx)(`div`, {
                className: `divide-token-border-light grid min-w-max auto-cols-fr grid-flow-col items-stretch divide-x`,
                children: e
            }), t[55] = e, t[56] = n), B = n;
            break bb0
        }
        let c;
        if (t[57] !== i || t[58] !== r) {
            let e;
            t[60] === r ? e = t[61] : (e = e => (0, J.jsx)(`li`, {
                children: (0, J.jsx)(Me, {
                    item: e,
                    effectiveLocale: r,
                    isTopLevel: !1
                })
            }, e.id), t[60] = r, t[61] = e), c = i.map(e), t[57] = i, t[58] = r, t[59] = c
        } else c = t[59];
        let l;t[62] === c ? l = t[63] : (l = (0, J.jsx)(`ul`, {
            className: `flex flex-col`,
            children: c
        }), t[62] = c, t[63] = l),
        B = l
    }
    let re;
    t[64] !== p || t[65] !== n.label || t[66] !== A || t[67] !== z || t[68] !== B ? (re = (0, J.jsx)(`div`, {
        ref: d,
        id: p,
        "aria-label": ne,
        className: z,
        onMouseEnter: ee,
        onMouseLeave: A,
        children: B
    }), t[64] = p, t[65] = n.label, t[66] = A, t[67] = z, t[68] = B, t[69] = re) : re = t[69];
    let V;
    return t[70] !== A || t[71] !== j || t[72] !== I || t[73] !== re ? (V = (0, J.jsxs)(`div`, {
        className: `relative`,
        onBlurCapture: j,
        onMouseLeave: A,
        onMouseEnter: ee,
        children: [I, re]
    }), t[70] = A, t[71] = j, t[72] = I, t[73] = re, t[74] = V) : V = t[74], V
}

function Pe(e) {
    return (e.items?.length ?? 0) > 0
}
var Fe, Ie, J, Le = e((() => {
    Fe = O(), U(), I(), l(), K(), f(), Ie = t(T()), ce(), J = S()
}));

function Re({
    authed: e,
    headerCta: t,
    label: n,
    locale: r,
    navData: i,
    slug: a
}) {
    if (t) return t;
    let o = !!i?.cta,
        s = i?.cta?.url ?? `/`;
    return e || o ? (0, Y.jsx)(oe, {
        as: `a`,
        to: s,
        onClick: () => {
            q.logClick({
                analytics_identifier: i?.cta?.analyticsAction ?? `header-nav-try-chatgpt`,
                destination_url: s,
                locale: r,
                page_slug: a
            })
        },
        children: i?.cta?.label ?? n
    }) : e ? null : (0, Y.jsx)(ue, {
        callbackUrl: `/`,
        skipLoginModal: !0,
        location: `Contentful header: ${a}`
    })
}

function ze({
    className: e,
    locale: t,
    navData: n,
    shouldSwapCTA: r,
    slug: i
}) {
    if (!n?.secondaryCta) return null;
    let a = n.secondaryCta.url ?? `/`;
    return (0, Y.jsx)(oe, {
        as: `a`,
        to: a,
        color: r ? `secondary` : `primary-inverse`,
        className: e,
        onClick: () => {
            q.logClick({
                analytics_identifier: n.secondaryCta?.analyticsAction,
                destination_url: a,
                locale: t,
                page_slug: i
            })
        },
        children: n.secondaryCta.label
    })
}
var Be, Ve, Y, He, Ue = e((() => {
        Be = O(), se(), N(), G(), W(), de(), n(), l(), K(), f(), Ve = t(T()), w(), ce(), we(), Le(), Y = S(), He = e => {
            "use forget";
            let t = (0, Be.c)(51),
                {
                    hideBg: n,
                    navData: i,
                    disableDarkMode: a,
                    style: o,
                    headerCta: c,
                    isHeaderTooCrowdedForLg: l,
                    replaced: u
                } = e,
                d = n !== void 0 && n,
                f = a !== void 0 && a,
                p = l !== void 0 && l,
                m = u !== void 0 && u,
                {
                    isNavigationMobileOpen: h,
                    toggleNavigationMobile: g
                } = (0, Ve.useContext)(Te),
                _ = ee().formatMessage({
                    id: `t9acqi`,
                    defaultMessage: `Try ChatGPT`
                }),
                v = i && i.items.length > 0,
                y = `/`,
                {
                    effectiveLocale: x,
                    slug: S
                } = le();
            x !== b && (y = `/${x}/`);
            let [C, w] = (0, Ve.useState)(!1), T, E;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (T = () => {
                let e = requestAnimationFrame(() => {
                    w(!0)
                });
                return () => {
                    cancelAnimationFrame(e)
                }
            }, E = [], t[0] = T, t[1] = E) : (T = t[0], E = t[1]), (0, Ve.useEffect)(T, E);
            let D = r(),
                O = !D,
                k = Re({
                    authed: D,
                    headerCta: c,
                    label: _,
                    locale: x,
                    navData: i,
                    slug: S
                }),
                A = p ? `hidden xl:inline-flex` : `hidden lg:inline-flex`,
                M;
            t[2] !== x || t[3] !== i || t[4] !== O || t[5] !== S || t[6] !== A ? (M = ze({
                className: A,
                navData: i,
                shouldSwapCTA: O,
                locale: x,
                slug: S
            }), t[2] = x, t[3] = i, t[4] = O, t[5] = S, t[6] = A, t[7] = M) : M = t[7];
            let N = M,
                te = m || void 0,
                P = !d,
                F;
            t[8] !== f || t[9] !== v || t[10] !== p || t[11] !== C || t[12] !== P ? (F = s(`h-mkt-header-height sticky top-0 z-50 grid w-full grid-cols-[auto_1fr] gap-2 px-4 lg:px-8`, {
                "bg-token-bg-primary": P,
                "light text-token-text-primary": f,
                "transition-colors duration-300": C
            }, v && (p ? `xl:grid-cols-[1fr_auto_1fr]` : `lg:grid-cols-[1fr_auto_1fr]`)), t[8] = f, t[9] = v, t[10] = p, t[11] = C, t[12] = P, t[13] = F) : F = t[13];
            let I = y,
                ne = !h,
                L;
            t[14] !== h || t[15] !== ne ? (L = s(`transition-opacity duration-500`, {
                "opacity-0": h,
                "opacity-100": ne
            }), t[14] = h, t[15] = ne, t[16] = L) : L = t[16];
            let R;
            t[17] !== h || t[18] !== L ? (R = (0, Y.jsx)(j, {
                className: L,
                "aria-hidden": h
            }), t[17] = h, t[18] = L, t[19] = R) : R = t[19];
            let z = !h,
                B;
            t[20] !== h || t[21] !== z ? (B = s(`absolute -start-0.75 top-1/2 -translate-y-1/2 transition-opacity duration-500`, {
                "opacity-100": h,
                "opacity-0": z
            }), t[20] = h, t[21] = z, t[22] = B) : B = t[22];
            let V = !h,
                H;
            t[23] !== B || t[24] !== V ? (H = (0, Y.jsx)(re, {
                width: 34,
                height: 34,
                className: B,
                "aria-hidden": V
            }), t[23] = B, t[24] = V, t[25] = H) : H = t[25];
            let U;
            t[26] !== R || t[27] !== H || t[28] !== y ? (U = (0, Y.jsx)(`div`, {
                className: `flex items-center`,
                children: (0, Y.jsxs)(`a`, {
                    href: I,
                    className: `relative flex items-center`,
                    children: [R, H]
                })
            }), t[26] = R, t[27] = H, t[28] = y, t[29] = U) : U = t[29];
            let W;
            t[30] !== f || t[31] !== v || t[32] !== p || t[33] !== i ? (W = v && (0, Y.jsx)(je, {
                navData: i,
                disableDarkMode: f,
                isHeaderTooCrowdedForLg: p
            }), t[30] = f, t[31] = v, t[32] = p, t[33] = i, t[34] = W) : W = t[34];
            let G;
            t[35] !== v || t[36] !== p || t[37] !== g ? (G = v && (0, Y.jsx)(ae, {
                color: `secondary`,
                className: s(`aspect-square border-none px-0!`, p ? `xl:hidden` : `lg:hidden`),
                onClick: g,
                icon: ie
            }), t[35] = v, t[36] = p, t[37] = g, t[38] = G) : G = t[38];
            let K;
            t[39] !== k || t[40] !== N || t[41] !== G ? (K = (0, Y.jsxs)(`div`, {
                className: `flex items-center justify-end gap-2 overflow-y-visible`,
                children: [N, k, G]
            }), t[39] = k, t[40] = N, t[41] = G, t[42] = K) : K = t[42];
            let q;
            return t[43] !== m || t[44] !== o || t[45] !== F || t[46] !== U || t[47] !== W || t[48] !== K || t[49] !== te ? (q = (0, Y.jsxs)(`div`, {
                id: `contentful-header`,
                inert: m,
                "aria-hidden": te,
                style: o,
                className: F,
                children: [U, W, K]
            }), t[43] = m, t[44] = o, t[45] = F, t[46] = U, t[47] = W, t[48] = K, t[49] = te, t[50] = q) : q = t[50], q
        }
    })),
    We, Ge, X, Ke, qe = e((() => {
        We = O(), I(), K(), f(), Ge = t(T()), w(), ce(), X = S(), Ke = e => {
            "use forget";
            let t = (0, We.c)(38),
                {
                    tryNowLink: n
                } = e,
                r = ee(),
                [i, a] = (0, Ge.useState)(`idle`),
                {
                    theme: o,
                    effectiveLocale: c,
                    slug: l
                } = le(),
                u;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = [`en`, `en-US`], t[0] = u) : u = t[0];
            let d = u.includes(r.locale),
                f = `ChatGPT`,
                p = o === 1 ? `https://cdn.openai.com/chatgpt/ctf-cdn/image-gen/logo_crayon.png` : o === 2 ? `https://cdn.openai.com/chatgpt/ctf-cdn/image-gen/logo_plushie.png` : `https://cdn.openai.com/chatgpt/ctf-cdn/image-gen/logo_cookie.png`,
                m = n ?? `/`,
                h = i === `hover` && `-translate-y-full duration-300`,
                g = i === `off` && `-translate-y-[200%] transition-transform duration-300`,
                _;
            t[1] !== h || t[2] !== g ? (_ = s(`font-oai! relative select-none`, h, g), t[1] = h, t[2] = g, t[3] = _) : _ = t[3];
            let v;
            t[4] === i ? v = t[5] : (v = () => {
                i === `off` && a(`idle`)
            }, t[4] = i, t[5] = v);
            let y;
            t[6] !== c || t[7] !== l || t[8] !== n ? (y = () => {
                q.logClick({
                    analytics_identifier: `footer-try-now-clicked`,
                    destination_url: n ?? `/`,
                    locale: c,
                    page_slug: l
                })
            }, t[6] = c, t[7] = l, t[8] = n, t[9] = y) : y = t[9];
            let b, x;
            t[10] === d ? (b = t[11], x = t[12]) : (b = () => d && a(`hover`), x = () => d && a(`off`), t[10] = d, t[11] = b, t[12] = x);
            let S;
            t[13] === r ? S = t[14] : (S = r.formatMessage({
                id: `pdtQnk`,
                defaultMessage: `Try ChatGPT now`
            }), t[13] = r, t[14] = S);
            let C = o === 0 && f,
                w;
            t[15] !== p || t[16] !== o ? (w = o !== 0 && (0, X.jsx)(`img`, {
                src: p,
                alt: f,
                className: `w-full`
            }), t[15] = p, t[16] = o, t[17] = w) : w = t[17];
            let T;
            t[18] !== C || t[19] !== w ? (T = (0, X.jsxs)(`div`, {
                className: `text-[min(calc((100vw-16px)*0.231),343px)] leading-none font-bold tracking-[-0.02em]`,
                children: [C, w]
            }), t[18] = C, t[19] = w, t[20] = T) : T = t[20];
            let E;
            t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, X.jsxs)(`div`, {
                className: `absolute start-0 top-full text-[min(calc((100vw-32px)*0.215),318px)] leading-none font-bold tracking-[-0.015em]`,
                children: [`Try now`, ` `, (0, X.jsx)(`span`, {
                    className: `relative top-[0.08em]`,
                    children: `→`
                })]
            }), t[21] = E) : E = t[21];
            let D = o === 0 && f,
                O;
            t[22] !== p || t[23] !== o ? (O = o !== 0 && (0, X.jsx)(`img`, {
                src: p,
                alt: f,
                className: `w-full`
            }), t[22] = p, t[23] = o, t[24] = O) : O = t[24];
            let k;
            t[25] !== D || t[26] !== O ? (k = (0, X.jsxs)(`div`, {
                className: `absolute start-0 top-[200%] text-[min(calc((100vw-16px)*0.231),343px)] leading-none font-bold tracking-[-0.02em]`,
                children: [D, O]
            }), t[25] = D, t[26] = O, t[27] = k) : k = t[27];
            let A;
            return t[28] !== S || t[29] !== T || t[30] !== k || t[31] !== m || t[32] !== _ || t[33] !== v || t[34] !== y || t[35] !== b || t[36] !== x ? (A = (0, X.jsx)(`div`, {
                className: `mt-12 flex flex-col overflow-hidden`,
                children: (0, X.jsxs)(P, {
                    href: m,
                    className: _,
                    onTransitionEnd: v,
                    onClick: y,
                    onMouseEnter: b,
                    onMouseLeave: x,
                    underline: !1,
                    "aria-label": S,
                    children: [T, E, k]
                })
            }), t[28] = S, t[29] = T, t[30] = k, t[31] = m, t[32] = _, t[33] = v, t[34] = y, t[35] = b, t[36] = x, t[37] = A) : A = t[37], A
        }
    }));

function Je(e) {
    return e.preventDefault()
}
var Ye, Xe, Ze, Qe, $e = e((() => {
    Ye = O(), V(), g(), f(), w(), ce(), Oe(), ke(), Xe = S(), D(), Ze = e => {
        "use forget";
        let t = (0, Ye.c)(20),
            {
                disableDarkMode: n,
                className: r
            } = e,
            i = n !== void 0 && n,
            a = ee(),
            {
                effectiveLocale: o
            } = le(),
            c = Ee[o],
            l;
        t[0] === r ? l = t[1] : (l = s(`relative`, r), t[0] = r, t[1] = l);
        let u;
        t[2] === a ? u = t[3] : (u = a.formatMessage(De), t[2] = a, t[3] = u);
        let d = !i,
            f;
        t[4] !== i || t[5] !== d ? (f = s(`text-mkt-p2 text-token-text-secondary inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 transition-colors`, {
            "hover:bg-token-bg-primary/80": i,
            "hover:bg-token-bg-secondary/50": d
        }), t[4] = i, t[5] = d, t[6] = f) : f = t[6];
        let p;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, Xe.jsx)(H, {
            className: `icon-sm`
        }), t[7] = p) : p = t[7];
        let m;
        t[8] === c.region ? m = t[9] : (m = c.region && (0, Xe.jsx)(`span`, {
            className: `text-token-text-secondary`,
            children: c.region
        }), t[8] = c.region, t[9] = m);
        let h;
        t[10] !== c.language || t[11] !== m ? (h = (0, Xe.jsxs)(`span`, {
            className: `text-token-text-primary md:text-mkt-cta flex gap-2 text-[16px]`,
            children: [c.language, m]
        }), t[10] = c.language, t[11] = m, t[12] = h) : h = t[12];
        let g;
        t[13] !== u || t[14] !== f || t[15] !== h ? (g = (0, Xe.jsxs)(`button`, {
            "aria-disabled": `true`,
            "aria-expanded": !1,
            "aria-haspopup": `listbox`,
            "aria-label": u,
            className: f,
            id: `lang-button`,
            onClick: Je,
            type: `button`,
            children: [p, h]
        }), t[13] = u, t[14] = f, t[15] = h, t[16] = g) : g = t[16];
        let _;
        return t[17] !== l || t[18] !== g ? (_ = (0, Xe.jsx)(`div`, {
            className: l,
            children: g
        }), t[17] = l, t[18] = g, t[19] = _) : _ = t[19], _
    }, Qe = i(() => E(() => import(`./8d3fc825-gmk180bgfdyml7j0.js`).then(e => e.LanguageSwitcher), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])), {
        loading: Ze
    })
}));

function et(e, t) {
    let n = t === b ? `` : `/${t}`;
    return e.url?.startsWith(`https://chatgpt.com`) ? `${n}${new URL(e.url).pathname}` : e.page?.slug ? `https://openai.com${n}/${e.page.slug}` : e.url?.startsWith(`/`) ? `https://openai.com${n}${e.url}` : e.url?.startsWith(`https://openai.com`) ? `https://openai.com${n}${e.url.substring(18)}` : e.url
}

function tt(e) {
    return !!e
}

function nt() {
    q.logClick({
        analytics_identifier: `footer-blossom-clicked`,
        destination_url: `/`
    })
}

function rt(e) {
    return (0, Z.jsx)(A, {
        href: e.href,
        "aria-label": e.label,
        children: e.icon
    }, e.label)
}
var it, Z, at, ot, st, ct, lt, ut = e((() => {
        it = O(), h(), M(), F(), G(), me(), fe(), be(), he(), ye(), _e(), B(), o(), I(), l(), K(), v(), g(), f(), T(), w(), ce(), qe(), $e(), Z = S(), D(), at = i(() => E(() => import(`./ba0ab623-m5urip1icq4g3zsq.js`).then(e => e.ManageCookiesModal), __vite__mapDeps([14, 1, 2, 3, 4, 5, 6, 7, 8, 9]))), ot = [{
            href: `https://x.com/chatgpt`,
            label: `X`,
            icon: (0, Z.jsx)(ve, {
                className: `h-5 w-5`
            })
        }, {
            href: `https://www.youtube.com/OpenAI`,
            label: `YouTube`,
            icon: (0, Z.jsx)(Se, {
                className: `h-5 w-5`
            })
        }, {
            href: `https://www.linkedin.com/company/openai/`,
            label: `LinkedIn`,
            icon: (0, Z.jsx)(ge, {
                className: `h-5 w-5`
            })
        }, {
            href: `https://github.com/openai`,
            label: `GitHub`,
            icon: (0, Z.jsx)(xe, {
                className: `h-5 w-5`
            })
        }, {
            href: `https://www.instagram.com/chatgpt/`,
            label: `Instagram`,
            icon: (0, Z.jsx)(Ce, {
                className: `h-5 w-5`
            })
        }, {
            href: `https://www.tiktok.com/@chatgpt`,
            label: `TikTok`,
            icon: (0, Z.jsx)(pe, {
                className: `h-5 w-5`
            })
        }], st = C({
            cookies: {
                id: `Footer.cookies`,
                defaultMessage: `Manage cookies`
            },
            yourPrivacyChoices: {
                id: `Footer.yourPrivacyChoices`,
                defaultMessage: `Your privacy choices`
            }
        }), ct = e => {
            "use forget";
            let t = (0, it.c)(10),
                {
                    item: n
                } = e,
                {
                    effectiveLocale: r
                } = le(),
                i;
            t[0] === n.label ? i = t[1] : (i = (0, Z.jsx)(`span`, {
                className: `text-token-text-primary/44 text-mkt-p2 font-medium`,
                role: `heading`,
                "aria-level": 2,
                children: n.label
            }), t[0] = n.label, t[1] = i);
            let a;
            t[2] !== r || t[3] !== n.items ? (a = n.items?.map(e => {
                let t = et(e, r);
                return t ? (0, Z.jsx)(`li`, {
                    children: (0, Z.jsx)(P, {
                        href: t,
                        underline: !1,
                        openNewTab: e.external,
                        className: `text-mkt-p2 font-medium hover:opacity-70`,
                        onClick: () => {
                            q.logClick({
                                analytics_identifier: e.analyticsIdentifier ?? `footer-navigation-clicked`,
                                destination_url: t
                            })
                        },
                        children: e.label
                    })
                }, e.id) : null
            }), t[2] = r, t[3] = n.items, t[4] = a) : a = t[4];
            let o;
            t[5] === a ? o = t[6] : (o = (0, Z.jsx)(`ul`, {
                className: `mt-4 flex flex-col gap-3`,
                children: a
            }), t[5] = a, t[6] = o);
            let s;
            return t[7] !== i || t[8] !== o ? (s = (0, Z.jsxs)(`div`, {
                children: [i, o]
            }), t[7] = i, t[8] = o, t[9] = s) : s = t[9], s
        }, lt = e => {
            "use forget";
            let t = (0, it.c)(58),
                {
                    footer: n,
                    header: r,
                    hideLanguageSwitcher: i,
                    disableHugeChatLogo: o,
                    disableDarkMode: l,
                    customBackgroundColor: d
                } = e,
                f = i !== void 0 && i,
                p = o === void 0 || o,
                m = l !== void 0 && l,
                h = ee(),
                g;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (g = u(`1524307528`).get(`is_contentful_footer_modal_migration_enabled`, !1) || a(), t[0] = g) : g = t[0];
            let _ = g,
                v;
            t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (v = te(), t[1] = v) : v = t[1];
            let {
                showOptOutIcon: y,
                showYourPrivacyChoicesLabel: b
            } = v, x = r?.cta?.url ?? `/`, S, C, w, T, E, D, O;
            if (t[2] !== d || t[3] !== m || t[4] !== n.items) {
                let e = (n.items?.filter(tt) ?? []).slice(0, 4),
                    r;
                t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (r = [`md:col-start-2`, `md:col-start-3`, `md:col-start-4`, `md:col-start-5`], t[12] = r) : r = t[12];
                let i = r,
                    a = Math.max(0, i.length - e.length),
                    o;
                t[13] === a ? o = t[14] : (o = i.slice(a), t[13] = a, t[14] = o);
                let c = o;
                t[15] === m ? C = t[16] : (C = s(`bg-token-bg-primary`, {
                    "light text-token-text-primary": m
                }), t[15] = m, t[16] = C), t[17] === d ? w = t[18] : (w = {
                    backgroundColor: d
                }, t[17] = d, t[18] = w), S = `max-w-9xl border-token-border-primary mx-auto mb-8 border-t`, O = `px-4 py-8 md:py-10`, T = `grid grid-cols-2 gap-6 md:grid-cols-5`, t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, Z.jsx)(`div`, {
                    className: `col-span-full mb-8 flex items-start justify-start md:col-span-1 md:mb-0`,
                    children: (0, Z.jsx)(P, {
                        href: `/`,
                        className: `group block`,
                        onClick: nt,
                        children: (0, Z.jsx)(re, {
                            className: `h-10 w-10 group-hover:rotate-[60deg] group-hover:opacity-70 group-hover:transition-transform group-hover:duration-300`
                        })
                    })
                }), t[19] = E) : E = t[19];
                let l;
                t[20] === c ? l = t[21] : (l = (e, t) => (0, Z.jsx)(`div`, {
                    className: `col-span-1 ${c[t]??`md:col-start-2`}`,
                    children: (0, Z.jsx)(ct, {
                        item: e
                    })
                }, e.id), t[20] = c, t[21] = l), D = e.map(l), t[2] = d, t[3] = m, t[4] = n.items, t[5] = S, t[6] = C, t[7] = w, t[8] = T, t[9] = E, t[10] = D, t[11] = O
            } else S = t[5], C = t[6], w = t[7], T = t[8], E = t[9], D = t[10], O = t[11];
            let A;
            t[22] !== T || t[23] !== E || t[24] !== D ? (A = (0, Z.jsxs)(`div`, {
                className: T,
                children: [E, D]
            }), t[22] = T, t[23] = E, t[24] = D, t[25] = A) : A = t[25];
            let j;
            t[26] !== p || t[27] !== x ? (j = !p && (0, Z.jsx)(Ke, {
                tryNowLink: x
            }), t[26] = p, t[27] = x, t[28] = j) : j = t[28];
            let M;
            t[29] !== A || t[30] !== j || t[31] !== O ? (M = (0, Z.jsxs)(`div`, {
                className: O,
                children: [A, j]
            }), t[29] = A, t[30] = j, t[31] = O, t[32] = M) : M = t[32];
            let N;
            t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, Z.jsxs)(`span`, {
                children: [`OpenAI © 2015–`, new Date().getFullYear()]
            }), t[33] = N) : N = t[33];
            let F;
            t[34] === Symbol.for(`react.memo_cache_sentinel`) ? (F = () => {
                if (q.logClick({
                        analytics_identifier: `footer-manage-cookies`
                    }), _) {
                    k();
                    return
                }
                c(at)
            }, t[34] = F) : F = t[34];
            let I;
            t[35] === h ? I = t[36] : (I = h.formatMessage(b ? st.yourPrivacyChoices : st.cookies), t[35] = h, t[36] = I);
            let L;
            t[37] === I ? L = t[38] : (L = (0, Z.jsx)(P, {
                className: `text-mkt-p2 font-medium underline decoration-gray-300 underline-offset-2`,
                onClick: F,
                children: I
            }), t[37] = I, t[38] = L);
            let R;
            t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (R = y && (0, Z.jsx)(ne, {
                "aria-hidden": `true`,
                className: `h-[14px] w-[30px] shrink-0`,
                focusable: `false`
            }), t[39] = R) : R = t[39];
            let z;
            t[40] === L ? z = t[41] : (z = (0, Z.jsxs)(`div`, {
                children: [N, (0, Z.jsxs)(`span`, {
                    className: `ms-1 inline-flex items-center gap-1`,
                    children: [L, R]
                })]
            }), t[40] = L, t[41] = z);
            let B;
            t[42] === Symbol.for(`react.memo_cache_sentinel`) ? (B = (0, Z.jsx)(`div`, {
                className: `flex items-center gap-7`,
                children: ot.map(rt)
            }), t[42] = B) : B = t[42];
            let V;
            t[43] === f ? V = t[44] : (V = !f && (0, Z.jsx)(`div`, {
                className: `mt-4 md:ms-4 md:mt-0`,
                children: (0, Z.jsx)(Qe, {})
            }), t[43] = f, t[44] = V);
            let H;
            t[45] === V ? H = t[46] : (H = (0, Z.jsxs)(`div`, {
                className: `mt-4 flex flex-col md:mt-0 md:flex-row md:justify-end`,
                children: [B, V]
            }), t[45] = V, t[46] = H);
            let U;
            t[47] !== z || t[48] !== H ? (U = (0, Z.jsx)(`div`, {
                className: `border-token-border-primary border-t`,
                children: (0, Z.jsxs)(`div`, {
                    className: `text-mkt-p2 flex flex-col px-4 py-5 md:flex-row md:items-center md:justify-between md:py-4`,
                    children: [z, H]
                })
            }), t[47] = z, t[48] = H, t[49] = U) : U = t[49];
            let W;
            t[50] !== S || t[51] !== M || t[52] !== U ? (W = (0, Z.jsxs)(`div`, {
                className: S,
                children: [M, U]
            }), t[50] = S, t[51] = M, t[52] = U, t[53] = W) : W = t[53];
            let G;
            return t[54] !== C || t[55] !== w || t[56] !== W ? (G = (0, Z.jsx)(`footer`, {
                className: C,
                style: w,
                children: W
            }), t[54] = C, t[55] = w, t[56] = W, t[57] = G) : G = t[57], G
        }
    })),
    dt, Q, ft, pt, mt, ht = e((() => {
        dt = O(), z(), I(), l(), K(), f(), T(), w(), ce(), Q = S(), ft = e => {
            "use forget";
            let t = (0, dt.c)(23),
                {
                    item: n,
                    onBack: r,
                    toggleNavigationMobile: i
                } = e,
                a;
            t[0] === n.items ? a = t[1] : (a = n.items ?? [], t[0] = n.items, t[1] = a);
            let o = a,
                s = ee(),
                c;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Q.jsx)(L, {
                className: `h-4 w-4`
            }), t[2] = c) : c = t[2];
            let l;
            t[3] === s ? l = t[4] : (l = s.formatMessage(mt.back), t[3] = s, t[4] = l);
            let u;
            t[5] === l ? u = t[6] : (u = (0, Q.jsx)(`span`, {
                className: `font-medium`,
                children: l
            }), t[5] = l, t[6] = u);
            let d;
            t[7] !== r || t[8] !== u ? (d = (0, Q.jsxs)(`button`, {
                className: `mb-4 flex items-center gap-1`,
                onClick: r,
                children: [c, u]
            }), t[7] = r, t[8] = u, t[9] = d) : d = t[9];
            let f;
            t[10] === n.label ? f = t[11] : (f = (0, Q.jsx)(`div`, {
                className: `text-mkt-h3 mb-6`,
                children: n.label
            }), t[10] = n.label, t[11] = f);
            let p;
            if (t[12] !== o || t[13] !== i) {
                let e;
                t[15] === i ? e = t[16] : (e = e => (e.items?.length ?? 0) > 0 ? (0, Q.jsxs)(`li`, {
                    className: `flex flex-col gap-3`,
                    children: [(0, Q.jsx)(`div`, {
                        className: `text-token-text-secondary text-mkt-p2`,
                        children: e.label
                    }), (0, Q.jsx)(`ul`, {
                        className: `flex flex-col gap-2`,
                        children: e.items?.map(e => (0, Q.jsx)(`li`, {
                            children: (0, Q.jsx)(pt, {
                                item: e,
                                toggleNavigationMobile: i
                            })
                        }, e.id))
                    })]
                }, e.id) : (0, Q.jsx)(`li`, {
                    children: (0, Q.jsx)(pt, {
                        item: e,
                        toggleNavigationMobile: i
                    })
                }, e.id), t[15] = i, t[16] = e), p = o.map(e), t[12] = o, t[13] = i, t[14] = p
            } else p = t[14];
            let m;
            t[17] === p ? m = t[18] : (m = (0, Q.jsx)(`nav`, {
                className: `flex-1 overflow-y-auto`,
                children: (0, Q.jsx)(`ul`, {
                    className: `flex flex-col gap-5`,
                    children: p
                })
            }), t[17] = p, t[18] = m);
            let h;
            return t[19] !== d || t[20] !== f || t[21] !== m ? (h = (0, Q.jsxs)(`div`, {
                className: `flex h-full flex-col px-5`,
                children: [d, f, m]
            }), t[19] = d, t[20] = f, t[21] = m, t[22] = h) : h = t[22], h
        }, pt = e => {
            "use forget";
            let t = (0, dt.c)(15),
                {
                    item: n,
                    toggleNavigationMobile: r,
                    className: i
                } = e,
                {
                    effectiveLocale: a
                } = le(),
                o;
            t[0] !== a || t[1] !== n.url ? (o = m(n.url, a), t[0] = a, t[1] = n.url, t[2] = o) : o = t[2];
            let c = o,
                l = n.external,
                u;
            t[3] === i ? u = t[4] : (u = s(`text-mkt-h4`, i), t[3] = i, t[4] = u);
            let d;
            t[5] !== c || t[6] !== n.analyticsIdentifier || t[7] !== r ? (d = () => {
                q.logNavigation({
                    analytics_identifier: n.analyticsIdentifier,
                    navigation_surface: `header_mobile`,
                    to: c
                }), r()
            }, t[5] = c, t[6] = n.analyticsIdentifier, t[7] = r, t[8] = d) : d = t[8];
            let f;
            return t[9] !== c || t[10] !== n.external || t[11] !== n.label || t[12] !== u || t[13] !== d ? (f = (0, Q.jsx)(P, {
                href: c,
                underline: !1,
                openNewTab: l,
                className: u,
                onClick: d,
                children: n.label
            }), t[9] = c, t[10] = n.external, t[11] = n.label, t[12] = u, t[13] = d, t[14] = f) : f = t[14], f
        }, mt = C({
            back: {
                id: `headerNavigationMobileSubmenu.back`,
                defaultMessage: `Back`
            }
        })
    })),
    gt, _t, $, vt, yt = e((() => {
        gt = O(), se(), d(), K(), y(), f(), _t = t(T()), we(), ht(), $ = S(), vt = e => {
            "use forget";
            let t = (0, gt.c)(27),
                {
                    className: n,
                    data: r,
                    isHeaderTooCrowdedForLg: i,
                    style: a
                } = e,
                o = i !== void 0 && i,
                {
                    isNavigationMobileOpen: c,
                    toggleNavigationMobile: l
                } = (0, _t.useContext)(Te),
                [u, d] = (0, _t.useState)(null),
                f, m;
            if (t[0] !== o || t[1] !== c || t[2] !== l ? (f = () => {
                    if (c) return x(() => {
                        (o ? _() : p()) && l()
                    })
                }, m = [o, c, l], t[0] = o, t[1] = c, t[2] = l, t[3] = f, t[4] = m) : (f = t[3], m = t[4]), (0, _t.useEffect)(f, m), !r) return null;
            let h = a?.backgroundColor ?? `var(--bg-primary)`,
                g = `linear-gradient(to bottom,${h},color-mix(in oklab,${h} 60%,transparent))`,
                v;
            t[5] !== a || t[6] !== g ? (v = {
                ...a,
                backgroundImage: g
            }, t[5] = a, t[6] = g, t[7] = v) : v = t[7];
            let y = v,
                b = o ? `xl:hidden` : `lg:hidden`,
                S = !c,
                C;
            t[8] !== n || t[9] !== c || t[10] !== b || t[11] !== S ? (C = s(`pt-mkt-header-height fixed inset-0 z-40 flex flex-col backdrop-blur-xl transition-opacity duration-500`, b, {
                "opacity-100": c,
                "opacity-0": S
            }, n), t[8] = n, t[9] = c, t[10] = b, t[11] = S, t[12] = C) : C = t[12];
            let w = !c,
                T;
            t[13] !== u || t[14] !== r || t[15] !== l ? (T = u ? (0, $.jsx)(ft, {
                item: u,
                onBack: () => d(null),
                toggleNavigationMobile: l
            }) : (0, $.jsx)(`ul`, {
                className: `flex flex-col gap-6 px-5`,
                children: r.items.map(e => (e.items?.length ?? 0) > 0 ? (0, $.jsx)(`li`, {
                    children: (0, $.jsx)(`button`, {
                        type: `button`,
                        className: `text-mkt-h3 text-start`,
                        onClick: () => {
                            q.logNavigation({
                                analytics_identifier: e.analyticsIdentifier,
                                navigation_surface: `header_mobile`,
                                to: e.url
                            }), d(e)
                        },
                        "data-analytics-id": e.analyticsIdentifier,
                        children: e.label
                    })
                }, e.id) : (0, $.jsx)(`li`, {
                    children: (0, $.jsx)(pt, {
                        item: e,
                        toggleNavigationMobile: l,
                        className: `text-mkt-h3!`
                    })
                }, e.id))
            }), t[13] = u, t[14] = r, t[15] = l, t[16] = T) : T = t[16];
            let E;
            t[17] === r?.secondaryCta ? E = t[18] : (E = r?.secondaryCta && (0, $.jsx)(`div`, {
                className: `mt-auto mb-5 px-5`,
                children: (0, $.jsx)(oe, {
                    as: `a`,
                    to: r?.secondaryCta?.url ?? `/`,
                    color: `primary-inverse`,
                    className: `w-full`,
                    children: r?.secondaryCta?.label
                })
            }), t[17] = r?.secondaryCta, t[18] = E);
            let D;
            t[19] !== T || t[20] !== E ? (D = (0, $.jsxs)(`nav`, {
                className: `flex flex-1 flex-col overflow-y-auto`,
                children: [T, E]
            }), t[19] = T, t[20] = E, t[21] = D) : D = t[21];
            let O;
            return t[22] !== w || t[23] !== D || t[24] !== y || t[25] !== C ? (O = (0, $.jsx)(`div`, {
                style: y,
                className: C,
                inert: w,
                children: D
            }), t[22] = w, t[23] = D, t[24] = y, t[25] = C, t[26] = O) : O = t[26], O
        }
    }));
export {
    He as a, ut as i, yt as n, Ue as o, lt as r, vt as t
};
//# sourceMappingURL=d9e5e62d-dwbskqjvxegmjk44.js.map