const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/8d3fc825-kb4beqhiztzhacue.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cy5f8pl0g26s86so.js", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css", "assets/2686af9f-dawy8jxaq75nc1t0.js", "assets/282bcbc3-gmu7kdakpico6nht.js", "assets/bb47c0a1-fuw2qturtqd6ks9x.js", "assets/b41758b1-k4ct0xdbnw42oe7j.js", "assets/ba0ab623-nvf9587kbzhablhg.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $I as n,
    J5 as r,
    Q0 as i,
    X0 as a,
    XI as o,
    Xnt as s,
    Y0 as c,
    Y5 as l,
    Ynt as u,
    aq as d,
    dit as f,
    dq as p,
    h8 as m,
    hq as h,
    i5 as g,
    iH as _,
    nH as v,
    oH as y,
    t2 as b,
    uit as x
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    $Un as k,
    KUn as A,
    QUn as j,
    ZUn as M,
    aKn as N,
    act as P,
    iKn as te,
    oct as F,
    qUn as I
} from "./conversation-small-cy5f8pl0g26s86so.js";
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
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    n as K,
    t as q
} from "./2686af9f-dawy8jxaq75nc1t0.js";
import {
    r as ae,
    t as oe
} from "./1fbff149-n2djc7m1ar2tzvdq.js";
import {
    t as se
} from "./c3e2d78f-g7yg0x6c3bx7ra7n.js";
import {
    n as ce,
    r as le
} from "./bb47c0a1-fuw2qturtqd6ks9x.js";
import {
    $u as ue,
    nd as de
} from "./8b34dbc2-k1zgxrtsww83602u.js";
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
} from "./c470f5ab-d4g7lc53n1e1ao7o.js";
import {
    n as we,
    t as Te
} from "./10f2d773-bfzf78do6zzhmrrx.js";
import {
    i as Ee,
    n as De,
    r as Oe,
    t as ke
} from "./b41758b1-k4ct0xdbnw42oe7j.js";

function Ae(e) {
    return (0, J.jsx)(`span`, {
        className: r({
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
            disableDarkMode: i,
            isHeaderTooCrowdedForLg: a
        } = e,
        o = i !== void 0 && i,
        s = a !== void 0 && a,
        {
            effectiveLocale: c
        } = le(),
        [l, u] = (0, Ie.useState)(null),
        d = s ? `xl:flex` : `lg:flex`,
        f;
    t[0] === d ? f = t[1] : (f = r(`hidden items-center`, d), t[0] = d, t[1] = f);
    let p;
    if (t[2] !== o || t[3] !== c || t[4] !== n.items || t[5] !== l) {
        let e;
        t[7] !== o || t[8] !== c || t[9] !== l ? (e = e => (0, J.jsx)(`li`, {
            children: e.items?.length ? (0, J.jsx)(Ne, {
                item: e,
                effectiveLocale: c,
                disableDarkMode: o,
                openDropdownId: l,
                setOpenDropdownId: u
            }) : (0, J.jsx)(Me, {
                item: e,
                effectiveLocale: c,
                isTopLevel: !0,
                disableDarkMode: o
            })
        }, e.id), t[7] = o, t[8] = c, t[9] = l, t[10] = e) : e = t[10], p = n.items.map(e), t[2] = o, t[3] = c, t[4] = n.items, t[5] = l, t[6] = p
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
            effectiveLocale: i,
            isTopLevel: a,
            disableDarkMode: o
        } = e,
        s = o !== void 0 && o,
        {
            external: c
        } = n,
        l;
    t[0] !== i || t[1] !== n.url ? (l = y(n.url, i), t[0] = i, t[1] = n.url, t[2] = l) : l = t[2];
    let u = l,
        d = a && s,
        f = a && !s,
        p = !a,
        m;
    t[3] !== a || t[4] !== d || t[5] !== f || t[6] !== p ? (m = r(`text-mkt-p2 flex items-center gap-0.5 rounded-lg px-2.5 whitespace-nowrap`, {
        "text-token-text-secondary hover:text-token-text-primary py-1.5": a,
        "hover:bg-token-bg-primary/80": d,
        "hover:bg-token-bg-secondary/50": f,
        "hover:bg-token-interactive-bg-primary-hover/10 py-2": p
    }), t[3] = a, t[4] = d, t[5] = f, t[6] = p, t[7] = m) : m = t[7];
    let h;
    t[8] !== n.analyticsIdentifier || t[9] !== u ? (h = () => {
        q.logNavigation({
            analytics_identifier: n.analyticsIdentifier,
            navigation_surface: `header_desktop`,
            to: u
        })
    }, t[8] = n.analyticsIdentifier, t[9] = u, t[10] = h) : h = t[10];
    let g;
    t[11] === n ? g = t[12] : (g = Ae(n), t[11] = n, t[12] = g);
    let _;
    t[13] === c ? _ = t[14] : (_ = c && (0, J.jsx)(R, {
        className: `h-3 w-3`
    }), t[13] = c, t[14] = _);
    let v;
    return t[15] !== c || t[16] !== m || t[17] !== h || t[18] !== g || t[19] !== _ || t[20] !== u ? (v = (0, J.jsxs)(j, {
        href: u,
        openNewTab: c,
        className: m,
        underline: !1,
        onClick: h,
        children: [g, _]
    }), t[15] = c, t[16] = m, t[17] = h, t[18] = g, t[19] = _, t[20] = u, t[21] = v) : v = t[21], v
}

function Ne(e) {
    "use forget";
    let t = (0, Fe.c)(75),
        {
            item: n,
            effectiveLocale: i,
            disableDarkMode: a,
            openDropdownId: o,
            setOpenDropdownId: s
        } = e,
        c = a !== void 0 && a,
        l = o === n.id,
        u = (0, Ie.useRef)(null),
        d = (0, Ie.useRef)(null),
        f = (0, Ie.useRef)(null),
        p = `header-nav-${n.id}`,
        m;
    t[0] !== i || t[1] !== n.url ? (m = y(n.url, i), t[0] = i, t[1] = n.url, t[2] = m) : m = t[2];
    let h = m,
        g = !!n.url,
        _ = g ? j : `button`,
        v = !l,
        b = l && c,
        x = l && !c,
        S;
    t[3] !== l || t[4] !== v || t[5] !== b || t[6] !== x ? (S = r(`inline-flex items-center px-2.5 py-1.5 text-mkt-p2`, {
        "text-token-text-secondary": v,
        "text-token-text-primary rounded-lg backdrop-blur-xl": l,
        "bg-token-bg-primary/80": b,
        "bg-token-bg-secondary/50": x
    }), t[3] = l, t[4] = v, t[5] = b, t[6] = x, t[7] = S) : S = t[7];
    let C = S,
        w;
    t[8] !== g || t[9] !== n.analyticsIdentifier || t[10] !== n.external || t[11] !== n.id || t[12] !== s || t[13] !== h ? (w = g ? {
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
        ref: u,
        type: `button`,
        onClick: () => {
            s(n.id)
        }
    }, t[8] = g, t[9] = n.analyticsIdentifier, t[10] = n.external, t[11] = n.id, t[12] = s, t[13] = h, t[14] = w) : w = t[14];
    let T = w,
        E;
    t[15] !== g || t[16] !== n.id || t[17] !== s ? (E = e => {
        e.preventDefault(), e.key === `ArrowDown` && s(n.id), !g && (e.key === `Enter` || e.key === ` `) && s(n.id), e.key === `Escape` && s(null)
    }, t[15] = g, t[16] = n.id, t[17] = s, t[18] = E) : E = t[18];
    let D = E,
        O;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (O = () => {
        f.current &&= (clearTimeout(f.current), null)
    }, t[19] = O) : O = t[19];
    let ee = O,
        k;
    t[20] !== n.id || t[21] !== s ? (k = () => {
        ee(), f.current = setTimeout(() => {
            s(e => e === n.id ? null : e)
        }, 150)
    }, t[20] = n.id, t[21] = s, t[22] = k) : k = t[22];
    let A = k,
        M;
    t[23] === s ? M = t[24] : (M = e => {
        let t = e.relatedTarget;
        (!(t instanceof Node) || !e.currentTarget.contains(t)) && s(null)
    }, t[23] = s, t[24] = M);
    let N, P;
    t[25] !== n.id || t[26] !== s ? (N = () => s(n.id), P = () => s(n.id), t[25] = n.id, t[26] = s, t[27] = N, t[28] = P) : (N = t[27], P = t[28]);
    let te = n.analyticsIdentifier,
        F;
    t[29] === n ? F = t[30] : (F = Ae(n), t[29] = n, t[30] = F);
    let I;
    t[31] !== _ || t[32] !== C || t[33] !== D || t[34] !== p || t[35] !== n.analyticsIdentifier || t[36] !== l || t[37] !== N || t[38] !== P || t[39] !== F || t[40] !== T ? (I = (0, J.jsx)(_, {
        className: C,
        "aria-haspopup": `menu`,
        "aria-expanded": l,
        "aria-controls": p,
        onMouseEnter: N,
        onFocus: P,
        onKeyDown: D,
        "data-analytics-id": te,
        ...T,
        children: F
    }), t[31] = _, t[32] = C, t[33] = D, t[34] = p, t[35] = n.analyticsIdentifier, t[36] = l, t[37] = N, t[38] = P, t[39] = F, t[40] = T, t[41] = I) : I = t[41];
    let ne = n.label,
        L = c ? `bg-token-bg-primary/80` : `bg-token-bg-secondary/50`,
        R = l ? `block` : `hidden`,
        z;
    t[42] !== L || t[43] !== R ? (z = r(`absolute start-1/2 z-50 mt-2 -translate-x-1/2 rounded-lg p-4 shadow-lg backdrop-blur-xl rtl:translate-x-1/2`, L, R), t[42] = L, t[43] = R, t[44] = z) : z = t[44];
    let B;
    bb0: {
        let e;t[45] === n.items ? e = t[46] : (e = n.items ?? [], t[45] = n.items, t[46] = e);
        let a = e,
            o = a.some(Pe),
            s = a.length > 1;
        if (o) {
            let e;
            if (t[47] !== a || t[48] !== i || t[49] !== s) {
                let n;
                t[51] !== a.length || t[52] !== i || t[53] !== s ? (n = (e, t) => (0, J.jsxs)(`div`, {
                    className: r(s && t === 0 && `pe-4`, s && t === a.length - 1 && `ps-4`, s && t > 0 && t < a.length - 1 && `px-4`),
                    children: [(0, J.jsx)(`div`, {
                        className: `text-mkt-p2 my-2.5 px-2.5 opacity-50`,
                        children: e.label
                    }), (0, J.jsx)(`ul`, {
                        className: `flex flex-col`,
                        children: e.items?.map(e => (0, J.jsx)(`li`, {
                            children: (0, J.jsx)(Me, {
                                item: e,
                                effectiveLocale: i,
                                isTopLevel: !1
                            })
                        }, e.id))
                    })]
                }, e.id), t[51] = a.length, t[52] = i, t[53] = s, t[54] = n) : n = t[54], e = a.map(n), t[47] = a, t[48] = i, t[49] = s, t[50] = e
            } else e = t[50];
            let n;
            t[55] === e ? n = t[56] : (n = (0, J.jsx)(`div`, {
                className: `divide-token-border-light grid min-w-max auto-cols-fr grid-flow-col items-stretch divide-x`,
                children: e
            }), t[55] = e, t[56] = n), B = n;
            break bb0
        }
        let c;
        if (t[57] !== a || t[58] !== i) {
            let e;
            t[60] === i ? e = t[61] : (e = e => (0, J.jsx)(`li`, {
                children: (0, J.jsx)(Me, {
                    item: e,
                    effectiveLocale: i,
                    isTopLevel: !1
                })
            }, e.id), t[60] = i, t[61] = e), c = a.map(e), t[57] = a, t[58] = i, t[59] = c
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
    return t[70] !== A || t[71] !== M || t[72] !== I || t[73] !== re ? (V = (0, J.jsxs)(`div`, {
        className: `relative`,
        onBlurCapture: M,
        onMouseLeave: A,
        onMouseEnter: ee,
        children: [I, re]
    }), t[70] = A, t[71] = M, t[72] = I, t[73] = re, t[74] = V) : V = t[74], V
}

function Pe(e) {
    return (e.items?.length ?? 0) > 0
}
var Fe, Ie, J, Le = e((() => {
    Fe = O(), U(), k(), _(), K(), l(), Ie = t(T()), ce(), J = S()
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
        Be = O(), se(), I(), G(), W(), de(), x(), _(), K(), l(), Ve = t(T()), w(), ce(), we(), Le(), Y = S(), He = e => {
            "use forget";
            let t = (0, Be.c)(51),
                {
                    hideBg: n,
                    navData: i,
                    disableDarkMode: a,
                    style: o,
                    headerCta: s,
                    isHeaderTooCrowdedForLg: c,
                    replaced: l
                } = e,
                u = n !== void 0 && n,
                d = a !== void 0 && a,
                p = c !== void 0 && c,
                m = l !== void 0 && l,
                {
                    isNavigationMobileOpen: h,
                    toggleNavigationMobile: g
                } = (0, Ve.useContext)(Te),
                _ = ee().formatMessage({
                    id: `t9acqi`,
                    defaultMessage: `Try ChatGPT`
                }),
                y = i && i.items.length > 0,
                b = `/`,
                {
                    effectiveLocale: x,
                    slug: S
                } = le();
            x !== v && (b = `/${x}/`);
            let [C, w] = (0, Ve.useState)(!1), T, E;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (T = () => {
                let e = requestAnimationFrame(() => {
                    w(!0)
                });
                return () => {
                    cancelAnimationFrame(e)
                }
            }, E = [], t[0] = T, t[1] = E) : (T = t[0], E = t[1]), (0, Ve.useEffect)(T, E);
            let D = f(),
                O = !D,
                k = Re({
                    authed: D,
                    headerCta: s,
                    label: _,
                    locale: x,
                    navData: i,
                    slug: S
                }),
                j = p ? `hidden xl:inline-flex` : `hidden lg:inline-flex`,
                M;
            t[2] !== x || t[3] !== i || t[4] !== O || t[5] !== S || t[6] !== j ? (M = ze({
                className: j,
                navData: i,
                shouldSwapCTA: O,
                locale: x,
                slug: S
            }), t[2] = x, t[3] = i, t[4] = O, t[5] = S, t[6] = j, t[7] = M) : M = t[7];
            let N = M,
                P = m || void 0,
                te = !u,
                F;
            t[8] !== d || t[9] !== y || t[10] !== p || t[11] !== C || t[12] !== te ? (F = r(`h-mkt-header-height sticky top-0 z-50 grid w-full grid-cols-[auto_1fr] gap-2 px-4 lg:px-8`, {
                "bg-token-bg-primary": te,
                "light text-token-text-primary": d,
                "transition-colors duration-300": C
            }, y && (p ? `xl:grid-cols-[1fr_auto_1fr]` : `lg:grid-cols-[1fr_auto_1fr]`)), t[8] = d, t[9] = y, t[10] = p, t[11] = C, t[12] = te, t[13] = F) : F = t[13];
            let I = b,
                ne = !h,
                L;
            t[14] !== h || t[15] !== ne ? (L = r(`transition-opacity duration-500`, {
                "opacity-0": h,
                "opacity-100": ne
            }), t[14] = h, t[15] = ne, t[16] = L) : L = t[16];
            let R;
            t[17] !== h || t[18] !== L ? (R = (0, Y.jsx)(A, {
                className: L,
                "aria-hidden": h
            }), t[17] = h, t[18] = L, t[19] = R) : R = t[19];
            let z = !h,
                B;
            t[20] !== h || t[21] !== z ? (B = r(`absolute -start-0.75 top-1/2 -translate-y-1/2 transition-opacity duration-500`, {
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
            t[26] !== R || t[27] !== H || t[28] !== b ? (U = (0, Y.jsx)(`div`, {
                className: `flex items-center`,
                children: (0, Y.jsxs)(`a`, {
                    href: I,
                    className: `relative flex items-center`,
                    children: [R, H]
                })
            }), t[26] = R, t[27] = H, t[28] = b, t[29] = U) : U = t[29];
            let W;
            t[30] !== d || t[31] !== y || t[32] !== p || t[33] !== i ? (W = y && (0, Y.jsx)(je, {
                navData: i,
                disableDarkMode: d,
                isHeaderTooCrowdedForLg: p
            }), t[30] = d, t[31] = y, t[32] = p, t[33] = i, t[34] = W) : W = t[34];
            let G;
            t[35] !== y || t[36] !== p || t[37] !== g ? (G = y && (0, Y.jsx)(ae, {
                color: `secondary`,
                className: r(`aspect-square border-none px-0!`, p ? `xl:hidden` : `lg:hidden`),
                onClick: g,
                icon: ie
            }), t[35] = y, t[36] = p, t[37] = g, t[38] = G) : G = t[38];
            let K;
            t[39] !== k || t[40] !== N || t[41] !== G ? (K = (0, Y.jsxs)(`div`, {
                className: `flex items-center justify-end gap-2 overflow-y-visible`,
                children: [N, k, G]
            }), t[39] = k, t[40] = N, t[41] = G, t[42] = K) : K = t[42];
            let q;
            return t[43] !== m || t[44] !== o || t[45] !== F || t[46] !== U || t[47] !== W || t[48] !== K || t[49] !== P ? (q = (0, Y.jsxs)(`div`, {
                id: `contentful-header`,
                inert: m,
                "aria-hidden": P,
                style: o,
                className: F,
                children: [U, W, K]
            }), t[43] = m, t[44] = o, t[45] = F, t[46] = U, t[47] = W, t[48] = K, t[49] = P, t[50] = q) : q = t[50], q
        }
    })),
    We, Ge, X, Ke, qe = e((() => {
        We = O(), k(), K(), l(), Ge = t(T()), w(), ce(), X = S(), Ke = e => {
            "use forget";
            let t = (0, We.c)(38),
                {
                    tryNowLink: n
                } = e,
                i = ee(),
                [a, o] = (0, Ge.useState)(`idle`),
                {
                    theme: s,
                    effectiveLocale: c,
                    slug: l
                } = le(),
                u;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = [`en`, `en-US`], t[0] = u) : u = t[0];
            let d = u.includes(i.locale),
                f = `ChatGPT`,
                p = s === 1 ? `https://cdn.openai.com/chatgpt/ctf-cdn/image-gen/logo_crayon.png` : s === 2 ? `https://cdn.openai.com/chatgpt/ctf-cdn/image-gen/logo_plushie.png` : `https://cdn.openai.com/chatgpt/ctf-cdn/image-gen/logo_cookie.png`,
                m = n ?? `/`,
                h = a === `hover` && `-translate-y-full duration-300`,
                g = a === `off` && `-translate-y-[200%] transition-transform duration-300`,
                _;
            t[1] !== h || t[2] !== g ? (_ = r(`font-oai! relative select-none`, h, g), t[1] = h, t[2] = g, t[3] = _) : _ = t[3];
            let v;
            t[4] === a ? v = t[5] : (v = () => {
                a === `off` && o(`idle`)
            }, t[4] = a, t[5] = v);
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
            t[10] === d ? (b = t[11], x = t[12]) : (b = () => d && o(`hover`), x = () => d && o(`off`), t[10] = d, t[11] = b, t[12] = x);
            let S;
            t[13] === i ? S = t[14] : (S = i.formatMessage({
                id: `pdtQnk`,
                defaultMessage: `Try ChatGPT now`
            }), t[13] = i, t[14] = S);
            let C = s === 0 && f,
                w;
            t[15] !== p || t[16] !== s ? (w = s !== 0 && (0, X.jsx)(`img`, {
                src: p,
                alt: f,
                className: `w-full`
            }), t[15] = p, t[16] = s, t[17] = w) : w = t[17];
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
            let D = s === 0 && f,
                O;
            t[22] !== p || t[23] !== s ? (O = s !== 0 && (0, X.jsx)(`img`, {
                src: p,
                alt: f,
                className: `w-full`
            }), t[22] = p, t[23] = s, t[24] = O) : O = t[24];
            let k;
            t[25] !== D || t[26] !== O ? (k = (0, X.jsxs)(`div`, {
                className: `absolute start-0 top-[200%] text-[min(calc((100vw-16px)*0.231),343px)] leading-none font-bold tracking-[-0.02em]`,
                children: [D, O]
            }), t[25] = D, t[26] = O, t[27] = k) : k = t[27];
            let A;
            return t[28] !== S || t[29] !== T || t[30] !== k || t[31] !== m || t[32] !== _ || t[33] !== v || t[34] !== y || t[35] !== b || t[36] !== x ? (A = (0, X.jsx)(`div`, {
                className: `mt-12 flex flex-col overflow-hidden`,
                children: (0, X.jsxs)(j, {
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
    Ye = O(), V(), a(), l(), w(), ce(), Oe(), ke(), Xe = S(), D(), Ze = e => {
        "use forget";
        let t = (0, Ye.c)(20),
            {
                disableDarkMode: n,
                className: i
            } = e,
            a = n !== void 0 && n,
            o = ee(),
            {
                effectiveLocale: s
            } = le(),
            c = Ee[s],
            l;
        t[0] === i ? l = t[1] : (l = r(`relative`, i), t[0] = i, t[1] = l);
        let u;
        t[2] === o ? u = t[3] : (u = o.formatMessage(De), t[2] = o, t[3] = u);
        let d = !a,
            f;
        t[4] !== a || t[5] !== d ? (f = r(`text-mkt-p2 text-token-text-secondary inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 transition-colors`, {
            "hover:bg-token-bg-primary/80": a,
            "hover:bg-token-bg-secondary/50": d
        }), t[4] = a, t[5] = d, t[6] = f) : f = t[6];
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
    }, Qe = c(() => E(() => import(`./8d3fc825-kb4beqhiztzhacue.js`).then(e => e.LanguageSwitcher), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])), {
        loading: Ze
    })
}));

function et(e, t) {
    let n = t === v ? `` : `/${t}`;
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
    return (0, Z.jsx)(M, {
        href: e.href,
        "aria-label": e.label,
        children: e.icon
    }, e.label)
}
var it, Z, at, ot, st, ct, lt, ut = e((() => {
        it = O(), o(), F(), te(), G(), me(), fe(), be(), he(), ye(), _e(), B(), i(), k(), _(), K(), s(), a(), l(), T(), w(), ce(), qe(), $e(), Z = S(), D(), at = c(() => E(() => import(`./ba0ab623-nvf9587kbzhablhg.js`).then(e => e.ManageCookiesModal), __vite__mapDeps([14, 1, 2, 3, 4, 5, 6, 7, 8, 9]))), ot = [{
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
                    children: (0, Z.jsx)(j, {
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
                    footer: i,
                    header: a,
                    hideLanguageSwitcher: o,
                    disableHugeChatLogo: s,
                    disableDarkMode: c,
                    customBackgroundColor: l
                } = e,
                d = o !== void 0 && o,
                f = s === void 0 || s,
                p = c !== void 0 && c,
                m = ee(),
                h;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (h = u(`1524307528`).get(`is_contentful_footer_modal_migration_enabled`, !1) || n(), t[0] = h) : h = t[0];
            let g = h,
                _;
            t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = P(), t[1] = _) : _ = t[1];
            let {
                showOptOutIcon: v,
                showYourPrivacyChoicesLabel: y
            } = _, x = a?.cta?.url ?? `/`, S, C, w, T, E, D, O;
            if (t[2] !== l || t[3] !== p || t[4] !== i.items) {
                let e = (i.items?.filter(tt) ?? []).slice(0, 4),
                    n;
                t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (n = [`md:col-start-2`, `md:col-start-3`, `md:col-start-4`, `md:col-start-5`], t[12] = n) : n = t[12];
                let a = n,
                    o = Math.max(0, a.length - e.length),
                    s;
                t[13] === o ? s = t[14] : (s = a.slice(o), t[13] = o, t[14] = s);
                let c = s;
                t[15] === p ? C = t[16] : (C = r(`bg-token-bg-primary`, {
                    "light text-token-text-primary": p
                }), t[15] = p, t[16] = C), t[17] === l ? w = t[18] : (w = {
                    backgroundColor: l
                }, t[17] = l, t[18] = w), S = `max-w-9xl border-token-border-primary mx-auto mb-8 border-t`, O = `px-4 py-8 md:py-10`, T = `grid grid-cols-2 gap-6 md:grid-cols-5`, t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, Z.jsx)(`div`, {
                    className: `col-span-full mb-8 flex items-start justify-start md:col-span-1 md:mb-0`,
                    children: (0, Z.jsx)(j, {
                        href: `/`,
                        className: `group block`,
                        onClick: nt,
                        children: (0, Z.jsx)(re, {
                            className: `h-10 w-10 group-hover:rotate-[60deg] group-hover:opacity-70 group-hover:transition-transform group-hover:duration-300`
                        })
                    })
                }), t[19] = E) : E = t[19];
                let u;
                t[20] === c ? u = t[21] : (u = (e, t) => (0, Z.jsx)(`div`, {
                    className: `col-span-1 ${c[t]??`md:col-start-2`}`,
                    children: (0, Z.jsx)(ct, {
                        item: e
                    })
                }, e.id), t[20] = c, t[21] = u), D = e.map(u), t[2] = l, t[3] = p, t[4] = i.items, t[5] = S, t[6] = C, t[7] = w, t[8] = T, t[9] = E, t[10] = D, t[11] = O
            } else S = t[5], C = t[6], w = t[7], T = t[8], E = t[9], D = t[10], O = t[11];
            let k;
            t[22] !== T || t[23] !== E || t[24] !== D ? (k = (0, Z.jsxs)(`div`, {
                className: T,
                children: [E, D]
            }), t[22] = T, t[23] = E, t[24] = D, t[25] = k) : k = t[25];
            let A;
            t[26] !== f || t[27] !== x ? (A = !f && (0, Z.jsx)(Ke, {
                tryNowLink: x
            }), t[26] = f, t[27] = x, t[28] = A) : A = t[28];
            let M;
            t[29] !== k || t[30] !== A || t[31] !== O ? (M = (0, Z.jsxs)(`div`, {
                className: O,
                children: [k, A]
            }), t[29] = k, t[30] = A, t[31] = O, t[32] = M) : M = t[32];
            let te;
            t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (te = (0, Z.jsxs)(`span`, {
                children: [`OpenAI © 2015–`, new Date().getFullYear()]
            }), t[33] = te) : te = t[33];
            let F;
            t[34] === Symbol.for(`react.memo_cache_sentinel`) ? (F = () => {
                if (q.logClick({
                        analytics_identifier: `footer-manage-cookies`
                    }), g) {
                    N();
                    return
                }
                b(at)
            }, t[34] = F) : F = t[34];
            let I;
            t[35] === m ? I = t[36] : (I = m.formatMessage(y ? st.yourPrivacyChoices : st.cookies), t[35] = m, t[36] = I);
            let L;
            t[37] === I ? L = t[38] : (L = (0, Z.jsx)(j, {
                className: `text-mkt-p2 font-medium underline decoration-gray-300 underline-offset-2`,
                onClick: F,
                children: I
            }), t[37] = I, t[38] = L);
            let R;
            t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (R = v && (0, Z.jsx)(ne, {
                "aria-hidden": `true`,
                className: `h-[14px] w-[30px] shrink-0`,
                focusable: `false`
            }), t[39] = R) : R = t[39];
            let z;
            t[40] === L ? z = t[41] : (z = (0, Z.jsxs)(`div`, {
                children: [te, (0, Z.jsxs)(`span`, {
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
            t[43] === d ? V = t[44] : (V = !d && (0, Z.jsx)(`div`, {
                className: `mt-4 md:ms-4 md:mt-0`,
                children: (0, Z.jsx)(Qe, {})
            }), t[43] = d, t[44] = V);
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
        dt = O(), z(), k(), _(), K(), l(), T(), w(), ce(), Q = S(), ft = e => {
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
                    toggleNavigationMobile: i,
                    className: a
                } = e,
                {
                    effectiveLocale: o
                } = le(),
                s;
            t[0] !== o || t[1] !== n.url ? (s = y(n.url, o), t[0] = o, t[1] = n.url, t[2] = s) : s = t[2];
            let c = s,
                l = n.external,
                u;
            t[3] === a ? u = t[4] : (u = r(`text-mkt-h4`, a), t[3] = a, t[4] = u);
            let d;
            t[5] !== c || t[6] !== n.analyticsIdentifier || t[7] !== i ? (d = () => {
                q.logNavigation({
                    analytics_identifier: n.analyticsIdentifier,
                    navigation_surface: `header_mobile`,
                    to: c
                }), i()
            }, t[5] = c, t[6] = n.analyticsIdentifier, t[7] = i, t[8] = d) : d = t[8];
            let f;
            return t[9] !== c || t[10] !== n.external || t[11] !== n.label || t[12] !== u || t[13] !== d ? (f = (0, Q.jsx)(j, {
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
        gt = O(), se(), m(), K(), d(), l(), _t = t(T()), we(), ht(), $ = S(), vt = e => {
            "use forget";
            let t = (0, gt.c)(27),
                {
                    className: n,
                    data: i,
                    isHeaderTooCrowdedForLg: a,
                    style: o
                } = e,
                s = a !== void 0 && a,
                {
                    isNavigationMobileOpen: c,
                    toggleNavigationMobile: l
                } = (0, _t.useContext)(Te),
                [u, d] = (0, _t.useState)(null),
                f, m;
            if (t[0] !== s || t[1] !== c || t[2] !== l ? (f = () => {
                    if (c) return g(() => {
                        (s ? h() : p()) && l()
                    })
                }, m = [s, c, l], t[0] = s, t[1] = c, t[2] = l, t[3] = f, t[4] = m) : (f = t[3], m = t[4]), (0, _t.useEffect)(f, m), !i) return null;
            let _ = o?.backgroundColor ?? `var(--bg-primary)`,
                v = `linear-gradient(to bottom,${_},color-mix(in oklab,${_} 60%,transparent))`,
                y;
            t[5] !== o || t[6] !== v ? (y = {
                ...o,
                backgroundImage: v
            }, t[5] = o, t[6] = v, t[7] = y) : y = t[7];
            let b = y,
                x = s ? `xl:hidden` : `lg:hidden`,
                S = !c,
                C;
            t[8] !== n || t[9] !== c || t[10] !== x || t[11] !== S ? (C = r(`pt-mkt-header-height fixed inset-0 z-40 flex flex-col backdrop-blur-xl transition-opacity duration-500`, x, {
                "opacity-100": c,
                "opacity-0": S
            }, n), t[8] = n, t[9] = c, t[10] = x, t[11] = S, t[12] = C) : C = t[12];
            let w = !c,
                T;
            t[13] !== u || t[14] !== i || t[15] !== l ? (T = u ? (0, $.jsx)(ft, {
                item: u,
                onBack: () => d(null),
                toggleNavigationMobile: l
            }) : (0, $.jsx)(`ul`, {
                className: `flex flex-col gap-6 px-5`,
                children: i.items.map(e => (e.items?.length ?? 0) > 0 ? (0, $.jsx)(`li`, {
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
            }), t[13] = u, t[14] = i, t[15] = l, t[16] = T) : T = t[16];
            let E;
            t[17] === i?.secondaryCta ? E = t[18] : (E = i?.secondaryCta && (0, $.jsx)(`div`, {
                className: `mt-auto mb-5 px-5`,
                children: (0, $.jsx)(oe, {
                    as: `a`,
                    to: i?.secondaryCta?.url ?? `/`,
                    color: `primary-inverse`,
                    className: `w-full`,
                    children: i?.secondaryCta?.label
                })
            }), t[17] = i?.secondaryCta, t[18] = E);
            let D;
            t[19] !== T || t[20] !== E ? (D = (0, $.jsxs)(`nav`, {
                className: `flex flex-1 flex-col overflow-y-auto`,
                children: [T, E]
            }), t[19] = T, t[20] = E, t[21] = D) : D = t[21];
            let O;
            return t[22] !== w || t[23] !== D || t[24] !== b || t[25] !== C ? (O = (0, $.jsx)(`div`, {
                style: b,
                className: C,
                inert: w,
                children: D
            }), t[22] = w, t[23] = D, t[24] = b, t[25] = C, t[26] = O) : O = t[26], O
        }
    }));
export {
    He as a, ut as i, yt as n, Ue as o, lt as r, vt as t
};
//# sourceMappingURL=d9e5e62d-l72u3tkuksuqfq9d.js.map