const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/8d3fc825-opbhhsi32otos7xs.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/2686af9f-d2qrll3k2995z1sk.js", "assets/282bcbc3-lrdj3h36alg4vtbb.js", "assets/bb47c0a1-d1hvam8myjas7ee8.js", "assets/b41758b1-jcw9iyzundhl7mzr.js", "assets/ba0ab623-bzel41sb9cfad1vb.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as n,
    C0 as r,
    LV as i,
    NK as a,
    Nrt as o,
    O0 as s,
    PI as c,
    Prt as l,
    S0 as u,
    T0 as d,
    UK as f,
    VV as p,
    b5 as m,
    jI as h,
    k8 as g,
    vnt as _,
    y5 as v,
    ynt as y,
    zK as b,
    zV as x
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as S,
    Ln as C,
    Rn as w,
    Vn as T,
    cn as E,
    ln as D,
    wn as O,
    zn as ee
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    HUn as k,
    LUn as A,
    RUn as j,
    UUn as M,
    WUn as N,
    XGn as P,
    YGn as F,
    nct as I,
    tct as te
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Gv as L,
    Jv as R,
    Kv as z,
    Xv as B,
    Yv as V,
    _b as H,
    bC as ne,
    qv as U,
    vC as W,
    xC as G,
    yC as re,
    yb as ie
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    n as K,
    t as q
} from "./2686af9f-d2qrll3k2995z1sk.js";
import {
    r as ae,
    t as oe
} from "./1fbff149-o5xkp37eq144138g.js";
import {
    t as se
} from "./c3e2d78f-dfx6ipda8gc0kf2d.js";
import {
    n as ce,
    r as le
} from "./bb47c0a1-d1hvam8myjas7ee8.js";
import {
    Qu as ue,
    td as de
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
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
} from "./c470f5ab-m68dth1hatzjj8yh.js";
import {
    n as we,
    t as Te
} from "./10f2d773-mq1igh1bot3isil9.js";
import {
    i as Ee,
    n as De,
    r as Oe,
    t as ke
} from "./b41758b1-jcw9iyzundhl7mzr.js";

function Ae(e) {
    return (0, J.jsx)(`span`, {
        className: v({
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
            effectiveLocale: s
        } = le(),
        [c, l] = (0, Ie.useState)(null),
        u = o ? `xl:flex` : `lg:flex`,
        d;
    t[0] === u ? d = t[1] : (d = v(`hidden items-center`, u), t[0] = u, t[1] = d);
    let f;
    if (t[2] !== a || t[3] !== s || t[4] !== n.items || t[5] !== c) {
        let e;
        t[7] !== a || t[8] !== s || t[9] !== c ? (e = e => (0, J.jsx)(`li`, {
            children: e.items?.length ? (0, J.jsx)(Ne, {
                item: e,
                effectiveLocale: s,
                disableDarkMode: a,
                openDropdownId: c,
                setOpenDropdownId: l
            }) : (0, J.jsx)(Me, {
                item: e,
                effectiveLocale: s,
                isTopLevel: !0,
                disableDarkMode: a
            })
        }, e.id), t[7] = a, t[8] = s, t[9] = c, t[10] = e) : e = t[10], f = n.items.map(e), t[2] = a, t[3] = s, t[4] = n.items, t[5] = c, t[6] = f
    } else f = t[6];
    let p;
    t[11] === f ? p = t[12] : (p = (0, J.jsx)(`ul`, {
        className: `flex items-center gap-2 lg:gap-4`,
        children: f
    }), t[11] = f, t[12] = p);
    let m;
    return t[13] !== d || t[14] !== p ? (m = (0, J.jsx)(`nav`, {
        className: d,
        children: p
    }), t[13] = d, t[14] = p, t[15] = m) : m = t[15], m
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
            external: s
        } = n,
        c;
    t[0] !== r || t[1] !== n.url ? (c = p(n.url, r), t[0] = r, t[1] = n.url, t[2] = c) : c = t[2];
    let l = c,
        u = i && o,
        d = i && !o,
        f = !i,
        m;
    t[3] !== i || t[4] !== u || t[5] !== d || t[6] !== f ? (m = v(`text-mkt-p2 flex items-center gap-0.5 rounded-lg px-2.5 whitespace-nowrap`, {
        "text-token-text-secondary hover:text-token-text-primary py-1.5": i,
        "hover:bg-token-bg-primary/80": u,
        "hover:bg-token-bg-secondary/50": d,
        "hover:bg-token-interactive-bg-primary-hover/10 py-2": f
    }), t[3] = i, t[4] = u, t[5] = d, t[6] = f, t[7] = m) : m = t[7];
    let h;
    t[8] !== n.analyticsIdentifier || t[9] !== l ? (h = () => {
        q.logNavigation({
            analytics_identifier: n.analyticsIdentifier,
            navigation_surface: `header_desktop`,
            to: l
        })
    }, t[8] = n.analyticsIdentifier, t[9] = l, t[10] = h) : h = t[10];
    let g;
    t[11] === n ? g = t[12] : (g = Ae(n), t[11] = n, t[12] = g);
    let _;
    t[13] === s ? _ = t[14] : (_ = s && (0, J.jsx)(V, {
        className: `h-3 w-3`
    }), t[13] = s, t[14] = _);
    let y;
    return t[15] !== s || t[16] !== m || t[17] !== h || t[18] !== g || t[19] !== _ || t[20] !== l ? (y = (0, J.jsxs)(M, {
        href: l,
        openNewTab: s,
        className: m,
        underline: !1,
        onClick: h,
        children: [g, _]
    }), t[15] = s, t[16] = m, t[17] = h, t[18] = g, t[19] = _, t[20] = l, t[21] = y) : y = t[21], y
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
        s = i !== void 0 && i,
        c = a === n.id,
        l = (0, Ie.useRef)(null),
        u = (0, Ie.useRef)(null),
        d = (0, Ie.useRef)(null),
        f = `header-nav-${n.id}`,
        m;
    t[0] !== r || t[1] !== n.url ? (m = p(n.url, r), t[0] = r, t[1] = n.url, t[2] = m) : m = t[2];
    let h = m,
        g = !!n.url,
        _ = g ? M : `button`,
        y = !c,
        b = c && s,
        x = c && !s,
        S;
    t[3] !== c || t[4] !== y || t[5] !== b || t[6] !== x ? (S = v(`inline-flex items-center px-2.5 py-1.5 text-mkt-p2`, {
        "text-token-text-secondary": y,
        "text-token-text-primary rounded-lg backdrop-blur-xl": c,
        "bg-token-bg-primary/80": b,
        "bg-token-bg-secondary/50": x
    }), t[3] = c, t[4] = y, t[5] = b, t[6] = x, t[7] = S) : S = t[7];
    let C = S,
        w;
    t[8] !== g || t[9] !== n.analyticsIdentifier || t[10] !== n.external || t[11] !== n.id || t[12] !== o || t[13] !== h ? (w = g ? {
        href: h,
        openNewTab: n.external,
        underline: !1,
        onClick: () => {
            q.logNavigation({
                analytics_identifier: n.analyticsIdentifier,
                navigation_surface: `header_desktop`,
                to: h
            })
        }
    } : {
        ref: l,
        type: `button`,
        onClick: () => {
            o(n.id)
        }
    }, t[8] = g, t[9] = n.analyticsIdentifier, t[10] = n.external, t[11] = n.id, t[12] = o, t[13] = h, t[14] = w) : w = t[14];
    let T = w,
        E;
    t[15] !== g || t[16] !== n.id || t[17] !== o ? (E = e => {
        e.preventDefault(), e.key === `ArrowDown` && o(n.id), !g && (e.key === `Enter` || e.key === ` `) && o(n.id), e.key === `Escape` && o(null)
    }, t[15] = g, t[16] = n.id, t[17] = o, t[18] = E) : E = t[18];
    let D = E,
        O;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (O = () => {
        d.current &&= (clearTimeout(d.current), null)
    }, t[19] = O) : O = t[19];
    let ee = O,
        k;
    t[20] !== n.id || t[21] !== o ? (k = () => {
        ee(), d.current = setTimeout(() => {
            o(e => e === n.id ? null : e)
        }, 150)
    }, t[20] = n.id, t[21] = o, t[22] = k) : k = t[22];
    let A = k,
        j;
    t[23] === o ? j = t[24] : (j = e => {
        let t = e.relatedTarget;
        (!(t instanceof Node) || !e.currentTarget.contains(t)) && o(null)
    }, t[23] = o, t[24] = j);
    let N, P;
    t[25] !== n.id || t[26] !== o ? (N = () => o(n.id), P = () => o(n.id), t[25] = n.id, t[26] = o, t[27] = N, t[28] = P) : (N = t[27], P = t[28]);
    let F = n.analyticsIdentifier,
        I;
    t[29] === n ? I = t[30] : (I = Ae(n), t[29] = n, t[30] = I);
    let te;
    t[31] !== _ || t[32] !== C || t[33] !== D || t[34] !== f || t[35] !== n.analyticsIdentifier || t[36] !== c || t[37] !== N || t[38] !== P || t[39] !== I || t[40] !== T ? (te = (0, J.jsx)(_, {
        className: C,
        "aria-haspopup": `menu`,
        "aria-expanded": c,
        "aria-controls": f,
        onMouseEnter: N,
        onFocus: P,
        onKeyDown: D,
        "data-analytics-id": F,
        ...T,
        children: I
    }), t[31] = _, t[32] = C, t[33] = D, t[34] = f, t[35] = n.analyticsIdentifier, t[36] = c, t[37] = N, t[38] = P, t[39] = I, t[40] = T, t[41] = te) : te = t[41];
    let L = n.label,
        R = s ? `bg-token-bg-primary/80` : `bg-token-bg-secondary/50`,
        z = c ? `block` : `hidden`,
        B;
    t[42] !== R || t[43] !== z ? (B = v(`absolute start-1/2 z-50 mt-2 -translate-x-1/2 rounded-lg p-4 shadow-lg backdrop-blur-xl rtl:translate-x-1/2`, R, z), t[42] = R, t[43] = z, t[44] = B) : B = t[44];
    let V;
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
                    className: v(o && t === 0 && `pe-4`, o && t === i.length - 1 && `ps-4`, o && t > 0 && t < i.length - 1 && `px-4`),
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
            }), t[55] = e, t[56] = n), V = n;
            break bb0
        }
        let s;
        if (t[57] !== i || t[58] !== r) {
            let e;
            t[60] === r ? e = t[61] : (e = e => (0, J.jsx)(`li`, {
                children: (0, J.jsx)(Me, {
                    item: e,
                    effectiveLocale: r,
                    isTopLevel: !1
                })
            }, e.id), t[60] = r, t[61] = e), s = i.map(e), t[57] = i, t[58] = r, t[59] = s
        } else s = t[59];
        let c;t[62] === s ? c = t[63] : (c = (0, J.jsx)(`ul`, {
            className: `flex flex-col`,
            children: s
        }), t[62] = s, t[63] = c),
        V = c
    }
    let H;
    t[64] !== f || t[65] !== n.label || t[66] !== A || t[67] !== B || t[68] !== V ? (H = (0, J.jsx)(`div`, {
        ref: u,
        id: f,
        "aria-label": L,
        className: B,
        onMouseEnter: ee,
        onMouseLeave: A,
        children: V
    }), t[64] = f, t[65] = n.label, t[66] = A, t[67] = B, t[68] = V, t[69] = H) : H = t[69];
    let ne;
    return t[70] !== A || t[71] !== j || t[72] !== te || t[73] !== H ? (ne = (0, J.jsxs)(`div`, {
        className: `relative`,
        onBlurCapture: j,
        onMouseLeave: A,
        onMouseEnter: ee,
        children: [te, H]
    }), t[70] = A, t[71] = j, t[72] = te, t[73] = H, t[74] = ne) : ne = t[74], ne
}

function Pe(e) {
    return (e.items?.length ?? 0) > 0
}
var Fe, Ie, J, Le = e((() => {
    Fe = O(), B(), N(), x(), K(), m(), Ie = t(T()), ce(), J = S()
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
        Be = O(), se(), j(), G(), W(), de(), o(), x(), K(), m(), Ve = t(T()), w(), ce(), we(), Le(), Y = S(), He = e => {
            "use forget";
            let t = (0, Be.c)(51),
                {
                    hideBg: n,
                    navData: r,
                    disableDarkMode: a,
                    style: o,
                    headerCta: s,
                    isHeaderTooCrowdedForLg: c,
                    replaced: u
                } = e,
                d = n !== void 0 && n,
                f = a !== void 0 && a,
                p = c !== void 0 && c,
                m = u !== void 0 && u,
                {
                    isNavigationMobileOpen: h,
                    toggleNavigationMobile: g
                } = (0, Ve.useContext)(Te),
                _ = ee().formatMessage({
                    id: `t9acqi`,
                    defaultMessage: `Try ChatGPT`
                }),
                y = r && r.items.length > 0,
                b = `/`,
                {
                    effectiveLocale: x,
                    slug: S
                } = le();
            x !== i && (b = `/${x}/`);
            let [C, w] = (0, Ve.useState)(!1), T, E;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (T = () => {
                let e = requestAnimationFrame(() => {
                    w(!0)
                });
                return () => {
                    cancelAnimationFrame(e)
                }
            }, E = [], t[0] = T, t[1] = E) : (T = t[0], E = t[1]), (0, Ve.useEffect)(T, E);
            let D = l(),
                O = !D,
                k = Re({
                    authed: D,
                    headerCta: s,
                    label: _,
                    locale: x,
                    navData: r,
                    slug: S
                }),
                j = p ? `hidden xl:inline-flex` : `hidden lg:inline-flex`,
                M;
            t[2] !== x || t[3] !== r || t[4] !== O || t[5] !== S || t[6] !== j ? (M = ze({
                className: j,
                navData: r,
                shouldSwapCTA: O,
                locale: x,
                slug: S
            }), t[2] = x, t[3] = r, t[4] = O, t[5] = S, t[6] = j, t[7] = M) : M = t[7];
            let N = M,
                P = m || void 0,
                F = !d,
                I;
            t[8] !== f || t[9] !== y || t[10] !== p || t[11] !== C || t[12] !== F ? (I = v(`h-mkt-header-height sticky top-0 z-50 grid w-full grid-cols-[auto_1fr] gap-2 px-4 lg:px-8`, {
                "bg-token-bg-primary": F,
                "light text-token-text-primary": f,
                "transition-colors duration-300": C
            }, y && (p ? `xl:grid-cols-[1fr_auto_1fr]` : `lg:grid-cols-[1fr_auto_1fr]`)), t[8] = f, t[9] = y, t[10] = p, t[11] = C, t[12] = F, t[13] = I) : I = t[13];
            let te = b,
                L = !h,
                R;
            t[14] !== h || t[15] !== L ? (R = v(`transition-opacity duration-500`, {
                "opacity-0": h,
                "opacity-100": L
            }), t[14] = h, t[15] = L, t[16] = R) : R = t[16];
            let z;
            t[17] !== h || t[18] !== R ? (z = (0, Y.jsx)(A, {
                className: R,
                "aria-hidden": h
            }), t[17] = h, t[18] = R, t[19] = z) : z = t[19];
            let B = !h,
                V;
            t[20] !== h || t[21] !== B ? (V = v(`absolute -start-0.75 top-1/2 -translate-y-1/2 transition-opacity duration-500`, {
                "opacity-100": h,
                "opacity-0": B
            }), t[20] = h, t[21] = B, t[22] = V) : V = t[22];
            let H = !h,
                U;
            t[23] !== V || t[24] !== H ? (U = (0, Y.jsx)(ne, {
                width: 34,
                height: 34,
                className: V,
                "aria-hidden": H
            }), t[23] = V, t[24] = H, t[25] = U) : U = t[25];
            let W;
            t[26] !== z || t[27] !== U || t[28] !== b ? (W = (0, Y.jsx)(`div`, {
                className: `flex items-center`,
                children: (0, Y.jsxs)(`a`, {
                    href: te,
                    className: `relative flex items-center`,
                    children: [z, U]
                })
            }), t[26] = z, t[27] = U, t[28] = b, t[29] = W) : W = t[29];
            let G;
            t[30] !== f || t[31] !== y || t[32] !== p || t[33] !== r ? (G = y && (0, Y.jsx)(je, {
                navData: r,
                disableDarkMode: f,
                isHeaderTooCrowdedForLg: p
            }), t[30] = f, t[31] = y, t[32] = p, t[33] = r, t[34] = G) : G = t[34];
            let ie;
            t[35] !== y || t[36] !== p || t[37] !== g ? (ie = y && (0, Y.jsx)(ae, {
                color: `secondary`,
                className: v(`aspect-square border-none px-0!`, p ? `xl:hidden` : `lg:hidden`),
                onClick: g,
                icon: re
            }), t[35] = y, t[36] = p, t[37] = g, t[38] = ie) : ie = t[38];
            let K;
            t[39] !== k || t[40] !== N || t[41] !== ie ? (K = (0, Y.jsxs)(`div`, {
                className: `flex items-center justify-end gap-2 overflow-y-visible`,
                children: [N, k, ie]
            }), t[39] = k, t[40] = N, t[41] = ie, t[42] = K) : K = t[42];
            let q;
            return t[43] !== m || t[44] !== o || t[45] !== I || t[46] !== W || t[47] !== G || t[48] !== K || t[49] !== P ? (q = (0, Y.jsxs)(`div`, {
                id: `contentful-header`,
                inert: m,
                "aria-hidden": P,
                style: o,
                className: I,
                children: [W, G, K]
            }), t[43] = m, t[44] = o, t[45] = I, t[46] = W, t[47] = G, t[48] = K, t[49] = P, t[50] = q) : q = t[50], q
        }
    })),
    We, Ge, X, Ke, qe = e((() => {
        We = O(), N(), K(), m(), Ge = t(T()), w(), ce(), X = S(), Ke = e => {
            "use forget";
            let t = (0, We.c)(38),
                {
                    tryNowLink: n
                } = e,
                r = ee(),
                [i, a] = (0, Ge.useState)(`idle`),
                {
                    theme: o,
                    effectiveLocale: s,
                    slug: c
                } = le(),
                l;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (l = [`en`, `en-US`], t[0] = l) : l = t[0];
            let u = l.includes(r.locale),
                d = `ChatGPT`,
                f = o === 1 ? `https://cdn.openai.com/chatgpt/ctf-cdn/image-gen/logo_crayon.png` : o === 2 ? `https://cdn.openai.com/chatgpt/ctf-cdn/image-gen/logo_plushie.png` : `https://cdn.openai.com/chatgpt/ctf-cdn/image-gen/logo_cookie.png`,
                p = n ?? `/`,
                m = i === `hover` && `-translate-y-full duration-300`,
                h = i === `off` && `-translate-y-[200%] transition-transform duration-300`,
                g;
            t[1] !== m || t[2] !== h ? (g = v(`font-oai! relative select-none`, m, h), t[1] = m, t[2] = h, t[3] = g) : g = t[3];
            let _;
            t[4] === i ? _ = t[5] : (_ = () => {
                i === `off` && a(`idle`)
            }, t[4] = i, t[5] = _);
            let y;
            t[6] !== s || t[7] !== c || t[8] !== n ? (y = () => {
                q.logClick({
                    analytics_identifier: `footer-try-now-clicked`,
                    destination_url: n ?? `/`,
                    locale: s,
                    page_slug: c
                })
            }, t[6] = s, t[7] = c, t[8] = n, t[9] = y) : y = t[9];
            let b, x;
            t[10] === u ? (b = t[11], x = t[12]) : (b = () => u && a(`hover`), x = () => u && a(`off`), t[10] = u, t[11] = b, t[12] = x);
            let S;
            t[13] === r ? S = t[14] : (S = r.formatMessage({
                id: `pdtQnk`,
                defaultMessage: `Try ChatGPT now`
            }), t[13] = r, t[14] = S);
            let C = o === 0 && d,
                w;
            t[15] !== f || t[16] !== o ? (w = o !== 0 && (0, X.jsx)(`img`, {
                src: f,
                alt: d,
                className: `w-full`
            }), t[15] = f, t[16] = o, t[17] = w) : w = t[17];
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
            let D = o === 0 && d,
                O;
            t[22] !== f || t[23] !== o ? (O = o !== 0 && (0, X.jsx)(`img`, {
                src: f,
                alt: d,
                className: `w-full`
            }), t[22] = f, t[23] = o, t[24] = O) : O = t[24];
            let k;
            t[25] !== D || t[26] !== O ? (k = (0, X.jsxs)(`div`, {
                className: `absolute start-0 top-[200%] text-[min(calc((100vw-16px)*0.231),343px)] leading-none font-bold tracking-[-0.02em]`,
                children: [D, O]
            }), t[25] = D, t[26] = O, t[27] = k) : k = t[27];
            let A;
            return t[28] !== S || t[29] !== T || t[30] !== k || t[31] !== p || t[32] !== g || t[33] !== _ || t[34] !== y || t[35] !== b || t[36] !== x ? (A = (0, X.jsx)(`div`, {
                className: `mt-12 flex flex-col overflow-hidden`,
                children: (0, X.jsxs)(M, {
                    href: p,
                    className: g,
                    onTransitionEnd: _,
                    onClick: y,
                    onMouseEnter: b,
                    onMouseLeave: x,
                    underline: !1,
                    "aria-label": S,
                    children: [T, E, k]
                })
            }), t[28] = S, t[29] = T, t[30] = k, t[31] = p, t[32] = g, t[33] = _, t[34] = y, t[35] = b, t[36] = x, t[37] = A) : A = t[37], A
        }
    }));

function Je(e) {
    return e.preventDefault()
}
var Ye, Xe, Ze, Qe, $e = e((() => {
    Ye = O(), ie(), r(), m(), w(), ce(), Oe(), ke(), Xe = S(), D(), Ze = e => {
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
            s = Ee[o],
            c;
        t[0] === r ? c = t[1] : (c = v(`relative`, r), t[0] = r, t[1] = c);
        let l;
        t[2] === a ? l = t[3] : (l = a.formatMessage(De), t[2] = a, t[3] = l);
        let u = !i,
            d;
        t[4] !== i || t[5] !== u ? (d = v(`text-mkt-p2 text-token-text-secondary inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 transition-colors`, {
            "hover:bg-token-bg-primary/80": i,
            "hover:bg-token-bg-secondary/50": u
        }), t[4] = i, t[5] = u, t[6] = d) : d = t[6];
        let f;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, Xe.jsx)(H, {
            className: `icon-sm`
        }), t[7] = f) : f = t[7];
        let p;
        t[8] === s.region ? p = t[9] : (p = s.region && (0, Xe.jsx)(`span`, {
            className: `text-token-text-secondary`,
            children: s.region
        }), t[8] = s.region, t[9] = p);
        let m;
        t[10] !== s.language || t[11] !== p ? (m = (0, Xe.jsxs)(`span`, {
            className: `text-token-text-primary md:text-mkt-cta flex gap-2 text-[16px]`,
            children: [s.language, p]
        }), t[10] = s.language, t[11] = p, t[12] = m) : m = t[12];
        let h;
        t[13] !== l || t[14] !== d || t[15] !== m ? (h = (0, Xe.jsxs)(`button`, {
            "aria-disabled": `true`,
            "aria-expanded": !1,
            "aria-haspopup": `listbox`,
            "aria-label": l,
            className: d,
            id: `lang-button`,
            onClick: Je,
            type: `button`,
            children: [f, m]
        }), t[13] = l, t[14] = d, t[15] = m, t[16] = h) : h = t[16];
        let g;
        return t[17] !== c || t[18] !== h ? (g = (0, Xe.jsx)(`div`, {
            className: c,
            children: h
        }), t[17] = c, t[18] = h, t[19] = g) : g = t[19], g
    }, Qe = u(() => E(() => import(`./8d3fc825-opbhhsi32otos7xs.js`).then(e => e.LanguageSwitcher), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])), {
        loading: Ze
    })
}));

function et(e, t) {
    let n = t === i ? `` : `/${t}`;
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
    return (0, Z.jsx)(k, {
        href: e.href,
        "aria-label": e.label,
        children: e.icon
    }, e.label)
}
var it, Z, at, ot, st, ct, lt, ut = e((() => {
        it = O(), h(), I(), F(), G(), me(), fe(), be(), he(), ye(), _e(), U(), d(), N(), x(), K(), y(), r(), m(), T(), w(), ce(), qe(), $e(), Z = S(), D(), at = u(() => E(() => import(`./ba0ab623-bzel41sb9cfad1vb.js`).then(e => e.ManageCookiesModal), __vite__mapDeps([14, 1, 2, 3, 4, 5, 6, 7, 8, 9]))), ot = [{
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
                    children: (0, Z.jsx)(M, {
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
                    disableHugeChatLogo: a,
                    disableDarkMode: o,
                    customBackgroundColor: l
                } = e,
                u = i !== void 0 && i,
                d = a === void 0 || a,
                f = o !== void 0 && o,
                p = ee(),
                m;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = _(`1524307528`).get(`is_contentful_footer_modal_migration_enabled`, !1) || c(), t[0] = m) : m = t[0];
            let h = m,
                g;
            t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (g = te(), t[1] = g) : g = t[1];
            let {
                showOptOutIcon: y,
                showYourPrivacyChoicesLabel: b
            } = g, x = r?.cta?.url ?? `/`, S, C, w, T, E, D, O;
            if (t[2] !== l || t[3] !== f || t[4] !== n.items) {
                let e = (n.items?.filter(tt) ?? []).slice(0, 4),
                    r;
                t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (r = [`md:col-start-2`, `md:col-start-3`, `md:col-start-4`, `md:col-start-5`], t[12] = r) : r = t[12];
                let i = r,
                    a = Math.max(0, i.length - e.length),
                    o;
                t[13] === a ? o = t[14] : (o = i.slice(a), t[13] = a, t[14] = o);
                let s = o;
                t[15] === f ? C = t[16] : (C = v(`bg-token-bg-primary`, {
                    "light text-token-text-primary": f
                }), t[15] = f, t[16] = C), t[17] === l ? w = t[18] : (w = {
                    backgroundColor: l
                }, t[17] = l, t[18] = w), S = `max-w-9xl border-token-border-primary mx-auto mb-8 border-t`, O = `px-4 py-8 md:py-10`, T = `grid grid-cols-2 gap-6 md:grid-cols-5`, t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, Z.jsx)(`div`, {
                    className: `col-span-full mb-8 flex items-start justify-start md:col-span-1 md:mb-0`,
                    children: (0, Z.jsx)(M, {
                        href: `/`,
                        className: `group block`,
                        onClick: nt,
                        children: (0, Z.jsx)(ne, {
                            className: `h-10 w-10 group-hover:rotate-[60deg] group-hover:opacity-70 group-hover:transition-transform group-hover:duration-300`
                        })
                    })
                }), t[19] = E) : E = t[19];
                let c;
                t[20] === s ? c = t[21] : (c = (e, t) => (0, Z.jsx)(`div`, {
                    className: `col-span-1 ${s[t]??`md:col-start-2`}`,
                    children: (0, Z.jsx)(ct, {
                        item: e
                    })
                }, e.id), t[20] = s, t[21] = c), D = e.map(c), t[2] = l, t[3] = f, t[4] = n.items, t[5] = S, t[6] = C, t[7] = w, t[8] = T, t[9] = E, t[10] = D, t[11] = O
            } else S = t[5], C = t[6], w = t[7], T = t[8], E = t[9], D = t[10], O = t[11];
            let k;
            t[22] !== T || t[23] !== E || t[24] !== D ? (k = (0, Z.jsxs)(`div`, {
                className: T,
                children: [E, D]
            }), t[22] = T, t[23] = E, t[24] = D, t[25] = k) : k = t[25];
            let A;
            t[26] !== d || t[27] !== x ? (A = !d && (0, Z.jsx)(Ke, {
                tryNowLink: x
            }), t[26] = d, t[27] = x, t[28] = A) : A = t[28];
            let j;
            t[29] !== k || t[30] !== A || t[31] !== O ? (j = (0, Z.jsxs)(`div`, {
                className: O,
                children: [k, A]
            }), t[29] = k, t[30] = A, t[31] = O, t[32] = j) : j = t[32];
            let N;
            t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, Z.jsxs)(`span`, {
                children: [`OpenAI © 2015–`, new Date().getFullYear()]
            }), t[33] = N) : N = t[33];
            let F;
            t[34] === Symbol.for(`react.memo_cache_sentinel`) ? (F = () => {
                if (q.logClick({
                        analytics_identifier: `footer-manage-cookies`
                    }), h) {
                    P();
                    return
                }
                s(at)
            }, t[34] = F) : F = t[34];
            let I;
            t[35] === p ? I = t[36] : (I = p.formatMessage(b ? st.yourPrivacyChoices : st.cookies), t[35] = p, t[36] = I);
            let L;
            t[37] === I ? L = t[38] : (L = (0, Z.jsx)(M, {
                className: `text-mkt-p2 font-medium underline decoration-gray-300 underline-offset-2`,
                onClick: F,
                children: I
            }), t[37] = I, t[38] = L);
            let z;
            t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (z = y && (0, Z.jsx)(R, {
                "aria-hidden": `true`,
                className: `h-[14px] w-[30px] shrink-0`,
                focusable: `false`
            }), t[39] = z) : z = t[39];
            let B;
            t[40] === L ? B = t[41] : (B = (0, Z.jsxs)(`div`, {
                children: [N, (0, Z.jsxs)(`span`, {
                    className: `ms-1 inline-flex items-center gap-1`,
                    children: [L, z]
                })]
            }), t[40] = L, t[41] = B);
            let V;
            t[42] === Symbol.for(`react.memo_cache_sentinel`) ? (V = (0, Z.jsx)(`div`, {
                className: `flex items-center gap-7`,
                children: ot.map(rt)
            }), t[42] = V) : V = t[42];
            let H;
            t[43] === u ? H = t[44] : (H = !u && (0, Z.jsx)(`div`, {
                className: `mt-4 md:ms-4 md:mt-0`,
                children: (0, Z.jsx)(Qe, {})
            }), t[43] = u, t[44] = H);
            let U;
            t[45] === H ? U = t[46] : (U = (0, Z.jsxs)(`div`, {
                className: `mt-4 flex flex-col md:mt-0 md:flex-row md:justify-end`,
                children: [V, H]
            }), t[45] = H, t[46] = U);
            let W;
            t[47] !== B || t[48] !== U ? (W = (0, Z.jsx)(`div`, {
                className: `border-token-border-primary border-t`,
                children: (0, Z.jsxs)(`div`, {
                    className: `text-mkt-p2 flex flex-col px-4 py-5 md:flex-row md:items-center md:justify-between md:py-4`,
                    children: [B, U]
                })
            }), t[47] = B, t[48] = U, t[49] = W) : W = t[49];
            let G;
            t[50] !== S || t[51] !== j || t[52] !== W ? (G = (0, Z.jsxs)(`div`, {
                className: S,
                children: [j, W]
            }), t[50] = S, t[51] = j, t[52] = W, t[53] = G) : G = t[53];
            let re;
            return t[54] !== C || t[55] !== w || t[56] !== G ? (re = (0, Z.jsx)(`footer`, {
                className: C,
                style: w,
                children: G
            }), t[54] = C, t[55] = w, t[56] = G, t[57] = re) : re = t[57], re
        }
    })),
    dt, Q, ft, pt, mt, ht = e((() => {
        dt = O(), z(), N(), x(), K(), m(), T(), w(), ce(), Q = S(), ft = e => {
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
            t[0] !== a || t[1] !== n.url ? (o = p(n.url, a), t[0] = a, t[1] = n.url, t[2] = o) : o = t[2];
            let s = o,
                c = n.external,
                l;
            t[3] === i ? l = t[4] : (l = v(`text-mkt-h4`, i), t[3] = i, t[4] = l);
            let u;
            t[5] !== s || t[6] !== n.analyticsIdentifier || t[7] !== r ? (u = () => {
                q.logNavigation({
                    analytics_identifier: n.analyticsIdentifier,
                    navigation_surface: `header_mobile`,
                    to: s
                }), r()
            }, t[5] = s, t[6] = n.analyticsIdentifier, t[7] = r, t[8] = u) : u = t[8];
            let d;
            return t[9] !== s || t[10] !== n.external || t[11] !== n.label || t[12] !== l || t[13] !== u ? (d = (0, Q.jsx)(M, {
                href: s,
                underline: !1,
                openNewTab: c,
                className: l,
                onClick: u,
                children: n.label
            }), t[9] = s, t[10] = n.external, t[11] = n.label, t[12] = l, t[13] = u, t[14] = d) : d = t[14], d
        }, mt = C({
            back: {
                id: `headerNavigationMobileSubmenu.back`,
                defaultMessage: `Back`
            }
        })
    })),
    gt, _t, $, vt, yt = e((() => {
        gt = O(), se(), n(), K(), a(), m(), _t = t(T()), we(), ht(), $ = S(), vt = e => {
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
                    isNavigationMobileOpen: s,
                    toggleNavigationMobile: c
                } = (0, _t.useContext)(Te),
                [l, u] = (0, _t.useState)(null),
                d, p;
            if (t[0] !== o || t[1] !== s || t[2] !== c ? (d = () => {
                    if (s) return g(() => {
                        (o ? f() : b()) && c()
                    })
                }, p = [o, s, c], t[0] = o, t[1] = s, t[2] = c, t[3] = d, t[4] = p) : (d = t[3], p = t[4]), (0, _t.useEffect)(d, p), !r) return null;
            let m = a?.backgroundColor ?? `var(--bg-primary)`,
                h = `linear-gradient(to bottom,${m},color-mix(in oklab,${m} 60%,transparent))`,
                _;
            t[5] !== a || t[6] !== h ? (_ = {
                ...a,
                backgroundImage: h
            }, t[5] = a, t[6] = h, t[7] = _) : _ = t[7];
            let y = _,
                x = o ? `xl:hidden` : `lg:hidden`,
                S = !s,
                C;
            t[8] !== n || t[9] !== s || t[10] !== x || t[11] !== S ? (C = v(`pt-mkt-header-height fixed inset-0 z-40 flex flex-col backdrop-blur-xl transition-opacity duration-500`, x, {
                "opacity-100": s,
                "opacity-0": S
            }, n), t[8] = n, t[9] = s, t[10] = x, t[11] = S, t[12] = C) : C = t[12];
            let w = !s,
                T;
            t[13] !== l || t[14] !== r || t[15] !== c ? (T = l ? (0, $.jsx)(ft, {
                item: l,
                onBack: () => u(null),
                toggleNavigationMobile: c
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
                            }), u(e)
                        },
                        "data-analytics-id": e.analyticsIdentifier,
                        children: e.label
                    })
                }, e.id) : (0, $.jsx)(`li`, {
                    children: (0, $.jsx)(pt, {
                        item: e,
                        toggleNavigationMobile: c,
                        className: `text-mkt-h3!`
                    })
                }, e.id))
            }), t[13] = l, t[14] = r, t[15] = c, t[16] = T) : T = t[16];
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
//# sourceMappingURL=d9e5e62d-ccpk78u7skc1l0u0.js.map