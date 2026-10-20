const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/8d3fc825-bgjgc3msw0s2yud0.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/2686af9f-gosesxr7p4wc3beg.js", "assets/282bcbc3-jw1cz1bzaznmgw1z.js", "assets/bb47c0a1-gj06tqxhkl9jwxfi.js", "assets/b41758b1-kh5034ea4u0375w2.js", "assets/ba0ab623-gsad3ipj5gn9722r.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $I as n,
    J0 as r,
    J5 as i,
    Jnt as a,
    XI as o,
    Y0 as s,
    Z0 as c,
    aq as l,
    cit as u,
    dq as d,
    e2 as f,
    hq as p,
    iH as m,
    lit as h,
    m8 as g,
    nH as _,
    oH as v,
    q5 as y,
    qnt as b,
    r5 as x
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as S,
    Hn as C,
    Rn as w,
    Tn as T,
    Vn as E,
    ln as D,
    un as O,
    zn as k
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    QUn as A,
    ZUn as j,
    iWn as M,
    ict as N,
    lKn as P,
    nWn as F,
    rWn as I,
    rct as L,
    uKn as ee
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Gv as te,
    Hv as R,
    Kv as z,
    Uv as B,
    Wv as V,
    bC as ne,
    gb as H,
    mb as U,
    qv as W,
    vC as G,
    xC as K,
    yC as re
} from "./30901919-jory365vq6ym5crx.js";
import {
    n as q,
    t as J
} from "./2686af9f-gosesxr7p4wc3beg.js";
import {
    r as ie,
    t as ae
} from "./1fbff149-knzt9y6vqs1w540v.js";
import {
    t as oe
} from "./c3e2d78f-gv6zjd6q6w6pzr4x.js";
import {
    n as se,
    r as ce
} from "./bb47c0a1-gj06tqxhkl9jwxfi.js";
import {
    Qu as le,
    td as ue
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
import {
    B as de,
    F as fe,
    Ht as pe,
    I as me,
    L as he,
    M as ge,
    N as _e,
    P as ve,
    R as ye,
    Vt as be,
    j as xe,
    z as Se
} from "./c470f5ab-in0lllrdrzeo67gs.js";
import {
    n as Ce,
    t as we
} from "./10f2d773-mao4909pr0b6q96w.js";
import {
    i as Te,
    n as Ee,
    r as De,
    t as Oe
} from "./b41758b1-kh5034ea4u0375w2.js";

function ke(e) {
    return (0, Y.jsx)(`span`, {
        className: y({
            "bg-linear-to-r from-[#ED5EB4] to-[#8086F9] bg-clip-text text-transparent dark:from-[#F472B6] dark:via-[#C084FC] dark:to-[#818CF8]": e.labelGradientEnabled
        }),
        children: e.label
    })
}

function Ae(e) {
    "use forget";
    let t = (0, Pe.c)(16),
        {
            navData: n,
            disableDarkMode: r,
            isHeaderTooCrowdedForLg: i
        } = e,
        a = r !== void 0 && r,
        o = i !== void 0 && i,
        {
            effectiveLocale: s
        } = ce(),
        [c, l] = (0, Fe.useState)(null),
        u = o ? `xl:flex` : `lg:flex`,
        d;
    t[0] === u ? d = t[1] : (d = y(`hidden items-center`, u), t[0] = u, t[1] = d);
    let f;
    if (t[2] !== a || t[3] !== s || t[4] !== n.items || t[5] !== c) {
        let e;
        t[7] !== a || t[8] !== s || t[9] !== c ? (e = e => (0, Y.jsx)(`li`, {
            children: e.items?.length ? (0, Y.jsx)(Me, {
                item: e,
                effectiveLocale: s,
                disableDarkMode: a,
                openDropdownId: c,
                setOpenDropdownId: l
            }) : (0, Y.jsx)(je, {
                item: e,
                effectiveLocale: s,
                isTopLevel: !0,
                disableDarkMode: a
            })
        }, e.id), t[7] = a, t[8] = s, t[9] = c, t[10] = e) : e = t[10], f = n.items.map(e), t[2] = a, t[3] = s, t[4] = n.items, t[5] = c, t[6] = f
    } else f = t[6];
    let p;
    t[11] === f ? p = t[12] : (p = (0, Y.jsx)(`ul`, {
        className: `flex items-center gap-2 lg:gap-4`,
        children: f
    }), t[11] = f, t[12] = p);
    let m;
    return t[13] !== d || t[14] !== p ? (m = (0, Y.jsx)(`nav`, {
        className: d,
        children: p
    }), t[13] = d, t[14] = p, t[15] = m) : m = t[15], m
}

function je(e) {
    "use forget";
    let t = (0, Pe.c)(22),
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
    t[0] !== r || t[1] !== n.url ? (c = v(n.url, r), t[0] = r, t[1] = n.url, t[2] = c) : c = t[2];
    let l = c,
        u = i && o,
        d = i && !o,
        f = !i,
        p;
    t[3] !== i || t[4] !== u || t[5] !== d || t[6] !== f ? (p = y(`text-mkt-p2 flex items-center gap-0.5 rounded-lg px-2.5 whitespace-nowrap`, {
        "text-token-text-secondary hover:text-token-text-primary py-1.5": i,
        "hover:bg-token-bg-primary/80": u,
        "hover:bg-token-bg-secondary/50": d,
        "hover:bg-token-interactive-bg-primary-hover/10 py-2": f
    }), t[3] = i, t[4] = u, t[5] = d, t[6] = f, t[7] = p) : p = t[7];
    let m;
    t[8] !== n.analyticsIdentifier || t[9] !== l ? (m = () => {
        J.logNavigation({
            analytics_identifier: n.analyticsIdentifier,
            navigation_surface: `header_desktop`,
            to: l
        })
    }, t[8] = n.analyticsIdentifier, t[9] = l, t[10] = m) : m = t[10];
    let h;
    t[11] === n ? h = t[12] : (h = ke(n), t[11] = n, t[12] = h);
    let g;
    t[13] === s ? g = t[14] : (g = s && (0, Y.jsx)(z, {
        className: `h-3 w-3`
    }), t[13] = s, t[14] = g);
    let _;
    return t[15] !== s || t[16] !== p || t[17] !== m || t[18] !== h || t[19] !== g || t[20] !== l ? (_ = (0, Y.jsxs)(I, {
        href: l,
        openNewTab: s,
        className: p,
        underline: !1,
        onClick: m,
        children: [h, g]
    }), t[15] = s, t[16] = p, t[17] = m, t[18] = h, t[19] = g, t[20] = l, t[21] = _) : _ = t[21], _
}

function Me(e) {
    "use forget";
    let t = (0, Pe.c)(75),
        {
            item: n,
            effectiveLocale: r,
            disableDarkMode: i,
            openDropdownId: a,
            setOpenDropdownId: o
        } = e,
        s = i !== void 0 && i,
        c = a === n.id,
        l = (0, Fe.useRef)(null),
        u = (0, Fe.useRef)(null),
        d = (0, Fe.useRef)(null),
        f = `header-nav-${n.id}`,
        p;
    t[0] !== r || t[1] !== n.url ? (p = v(n.url, r), t[0] = r, t[1] = n.url, t[2] = p) : p = t[2];
    let m = p,
        h = !!n.url,
        g = h ? I : `button`,
        _ = !c,
        b = c && s,
        x = c && !s,
        S;
    t[3] !== c || t[4] !== _ || t[5] !== b || t[6] !== x ? (S = y(`inline-flex items-center px-2.5 py-1.5 text-mkt-p2`, {
        "text-token-text-secondary": _,
        "text-token-text-primary rounded-lg backdrop-blur-xl": c,
        "bg-token-bg-primary/80": b,
        "bg-token-bg-secondary/50": x
    }), t[3] = c, t[4] = _, t[5] = b, t[6] = x, t[7] = S) : S = t[7];
    let C = S,
        w;
    t[8] !== h || t[9] !== n.analyticsIdentifier || t[10] !== n.external || t[11] !== n.id || t[12] !== o || t[13] !== m ? (w = h ? {
        href: m,
        openNewTab: n.external,
        underline: !1,
        onClick: () => {
            J.logNavigation({
                analytics_identifier: n.analyticsIdentifier,
                navigation_surface: `header_desktop`,
                to: m
            })
        }
    } : {
        ref: l,
        type: `button`,
        onClick: () => {
            o(n.id)
        }
    }, t[8] = h, t[9] = n.analyticsIdentifier, t[10] = n.external, t[11] = n.id, t[12] = o, t[13] = m, t[14] = w) : w = t[14];
    let T = w,
        E;
    t[15] !== h || t[16] !== n.id || t[17] !== o ? (E = e => {
        e.preventDefault(), e.key === `ArrowDown` && o(n.id), !h && (e.key === `Enter` || e.key === ` `) && o(n.id), e.key === `Escape` && o(null)
    }, t[15] = h, t[16] = n.id, t[17] = o, t[18] = E) : E = t[18];
    let D = E,
        O;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (O = () => {
        d.current &&= (clearTimeout(d.current), null)
    }, t[19] = O) : O = t[19];
    let k = O,
        A;
    t[20] !== n.id || t[21] !== o ? (A = () => {
        k(), d.current = setTimeout(() => {
            o(e => e === n.id ? null : e)
        }, 150)
    }, t[20] = n.id, t[21] = o, t[22] = A) : A = t[22];
    let j = A,
        M;
    t[23] === o ? M = t[24] : (M = e => {
        let t = e.relatedTarget;
        (!(t instanceof Node) || !e.currentTarget.contains(t)) && o(null)
    }, t[23] = o, t[24] = M);
    let N, P;
    t[25] !== n.id || t[26] !== o ? (N = () => o(n.id), P = () => o(n.id), t[25] = n.id, t[26] = o, t[27] = N, t[28] = P) : (N = t[27], P = t[28]);
    let F = n.analyticsIdentifier,
        L;
    t[29] === n ? L = t[30] : (L = ke(n), t[29] = n, t[30] = L);
    let ee;
    t[31] !== g || t[32] !== C || t[33] !== D || t[34] !== f || t[35] !== n.analyticsIdentifier || t[36] !== c || t[37] !== N || t[38] !== P || t[39] !== L || t[40] !== T ? (ee = (0, Y.jsx)(g, {
        className: C,
        "aria-haspopup": `menu`,
        "aria-expanded": c,
        "aria-controls": f,
        onMouseEnter: N,
        onFocus: P,
        onKeyDown: D,
        "data-analytics-id": F,
        ...T,
        children: L
    }), t[31] = g, t[32] = C, t[33] = D, t[34] = f, t[35] = n.analyticsIdentifier, t[36] = c, t[37] = N, t[38] = P, t[39] = L, t[40] = T, t[41] = ee) : ee = t[41];
    let te = n.label,
        R = s ? `bg-token-bg-primary/80` : `bg-token-bg-secondary/50`,
        z = c ? `block` : `hidden`,
        B;
    t[42] !== R || t[43] !== z ? (B = y(`absolute start-1/2 z-50 mt-2 -translate-x-1/2 rounded-lg p-4 shadow-lg backdrop-blur-xl rtl:translate-x-1/2`, R, z), t[42] = R, t[43] = z, t[44] = B) : B = t[44];
    let V;
    bb0: {
        let e;t[45] === n.items ? e = t[46] : (e = n.items ?? [], t[45] = n.items, t[46] = e);
        let i = e,
            a = i.some(Ne),
            o = i.length > 1;
        if (a) {
            let e;
            if (t[47] !== i || t[48] !== r || t[49] !== o) {
                let n;
                t[51] !== i.length || t[52] !== r || t[53] !== o ? (n = (e, t) => (0, Y.jsxs)(`div`, {
                    className: y(o && t === 0 && `pe-4`, o && t === i.length - 1 && `ps-4`, o && t > 0 && t < i.length - 1 && `px-4`),
                    children: [(0, Y.jsx)(`div`, {
                        className: `text-mkt-p2 my-2.5 px-2.5 opacity-50`,
                        children: e.label
                    }), (0, Y.jsx)(`ul`, {
                        className: `flex flex-col`,
                        children: e.items?.map(e => (0, Y.jsx)(`li`, {
                            children: (0, Y.jsx)(je, {
                                item: e,
                                effectiveLocale: r,
                                isTopLevel: !1
                            })
                        }, e.id))
                    })]
                }, e.id), t[51] = i.length, t[52] = r, t[53] = o, t[54] = n) : n = t[54], e = i.map(n), t[47] = i, t[48] = r, t[49] = o, t[50] = e
            } else e = t[50];
            let n;
            t[55] === e ? n = t[56] : (n = (0, Y.jsx)(`div`, {
                className: `divide-token-border-light grid min-w-max auto-cols-fr grid-flow-col items-stretch divide-x`,
                children: e
            }), t[55] = e, t[56] = n), V = n;
            break bb0
        }
        let s;
        if (t[57] !== i || t[58] !== r) {
            let e;
            t[60] === r ? e = t[61] : (e = e => (0, Y.jsx)(`li`, {
                children: (0, Y.jsx)(je, {
                    item: e,
                    effectiveLocale: r,
                    isTopLevel: !1
                })
            }, e.id), t[60] = r, t[61] = e), s = i.map(e), t[57] = i, t[58] = r, t[59] = s
        } else s = t[59];
        let c;t[62] === s ? c = t[63] : (c = (0, Y.jsx)(`ul`, {
            className: `flex flex-col`,
            children: s
        }), t[62] = s, t[63] = c),
        V = c
    }
    let ne;
    t[64] !== f || t[65] !== n.label || t[66] !== j || t[67] !== B || t[68] !== V ? (ne = (0, Y.jsx)(`div`, {
        ref: u,
        id: f,
        "aria-label": te,
        className: B,
        onMouseEnter: k,
        onMouseLeave: j,
        children: V
    }), t[64] = f, t[65] = n.label, t[66] = j, t[67] = B, t[68] = V, t[69] = ne) : ne = t[69];
    let H;
    return t[70] !== j || t[71] !== M || t[72] !== ee || t[73] !== ne ? (H = (0, Y.jsxs)(`div`, {
        className: `relative`,
        onBlurCapture: M,
        onMouseLeave: j,
        onMouseEnter: k,
        children: [ee, ne]
    }), t[70] = j, t[71] = M, t[72] = ee, t[73] = ne, t[74] = H) : H = t[74], H
}

function Ne(e) {
    return (e.items?.length ?? 0) > 0
}
var Pe, Fe, Y, Ie = e((() => {
    Pe = T(), W(), M(), m(), q(), i(), Fe = t(C()), se(), Y = E()
}));

function Le({
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
    return e || o ? (0, X.jsx)(ae, {
        as: `a`,
        to: s,
        onClick: () => {
            J.logClick({
                analytics_identifier: i?.cta?.analyticsAction ?? `header-nav-try-chatgpt`,
                destination_url: s,
                locale: r,
                page_slug: a
            })
        },
        children: i?.cta?.label ?? n
    }) : e ? null : (0, X.jsx)(le, {
        callbackUrl: `/`,
        skipLoginModal: !0,
        location: `Contentful header: ${a}`
    })
}

function Re({
    className: e,
    locale: t,
    navData: n,
    shouldSwapCTA: r,
    slug: i
}) {
    if (!n?.secondaryCta) return null;
    let a = n.secondaryCta.url ?? `/`;
    return (0, X.jsx)(ae, {
        as: `a`,
        to: a,
        color: r ? `secondary` : `primary-inverse`,
        className: e,
        onClick: () => {
            J.logClick({
                analytics_identifier: n.secondaryCta?.analyticsAction,
                destination_url: a,
                locale: t,
                page_slug: i
            })
        },
        children: n.secondaryCta.label
    })
}
var ze, Be, X, Ve, He = e((() => {
        ze = T(), oe(), A(), K(), G(), ue(), u(), m(), q(), i(), Be = t(C()), k(), se(), Ce(), Ie(), X = E(), Ve = e => {
            "use forget";
            let t = (0, ze.c)(51),
                {
                    hideBg: n,
                    navData: r,
                    disableDarkMode: i,
                    style: a,
                    headerCta: o,
                    isHeaderTooCrowdedForLg: s,
                    replaced: c
                } = e,
                l = n !== void 0 && n,
                u = i !== void 0 && i,
                d = s !== void 0 && s,
                f = c !== void 0 && c,
                {
                    isNavigationMobileOpen: p,
                    toggleNavigationMobile: m
                } = (0, Be.useContext)(we),
                g = S().formatMessage({
                    id: `t9acqi`,
                    defaultMessage: `Try ChatGPT`
                }),
                v = r && r.items.length > 0,
                b = `/`,
                {
                    effectiveLocale: x,
                    slug: C
                } = ce();
            x !== _ && (b = `/${x}/`);
            let [w, T] = (0, Be.useState)(!1), E, D;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (E = () => {
                let e = requestAnimationFrame(() => {
                    T(!0)
                });
                return () => {
                    cancelAnimationFrame(e)
                }
            }, D = [], t[0] = E, t[1] = D) : (E = t[0], D = t[1]), (0, Be.useEffect)(E, D);
            let O = h(),
                k = !O,
                A = Le({
                    authed: O,
                    headerCta: o,
                    label: g,
                    locale: x,
                    navData: r,
                    slug: C
                }),
                M = d ? `hidden xl:inline-flex` : `hidden lg:inline-flex`,
                N;
            t[2] !== x || t[3] !== r || t[4] !== k || t[5] !== C || t[6] !== M ? (N = Re({
                className: M,
                navData: r,
                shouldSwapCTA: k,
                locale: x,
                slug: C
            }), t[2] = x, t[3] = r, t[4] = k, t[5] = C, t[6] = M, t[7] = N) : N = t[7];
            let P = N,
                F = f || void 0,
                I = !l,
                L;
            t[8] !== u || t[9] !== v || t[10] !== d || t[11] !== w || t[12] !== I ? (L = y(`h-mkt-header-height sticky top-0 z-50 grid w-full grid-cols-[auto_1fr] gap-2 px-4 lg:px-8`, {
                "bg-token-bg-primary": I,
                "light text-token-text-primary": u,
                "transition-colors duration-300": w
            }, v && (d ? `xl:grid-cols-[1fr_auto_1fr]` : `lg:grid-cols-[1fr_auto_1fr]`)), t[8] = u, t[9] = v, t[10] = d, t[11] = w, t[12] = I, t[13] = L) : L = t[13];
            let ee = b,
                te = !p,
                R;
            t[14] !== p || t[15] !== te ? (R = y(`transition-opacity duration-500`, {
                "opacity-0": p,
                "opacity-100": te
            }), t[14] = p, t[15] = te, t[16] = R) : R = t[16];
            let z;
            t[17] !== p || t[18] !== R ? (z = (0, X.jsx)(j, {
                className: R,
                "aria-hidden": p
            }), t[17] = p, t[18] = R, t[19] = z) : z = t[19];
            let B = !p,
                V;
            t[20] !== p || t[21] !== B ? (V = y(`absolute -start-0.75 top-1/2 -translate-y-1/2 transition-opacity duration-500`, {
                "opacity-100": p,
                "opacity-0": B
            }), t[20] = p, t[21] = B, t[22] = V) : V = t[22];
            let H = !p,
                U;
            t[23] !== V || t[24] !== H ? (U = (0, X.jsx)(ne, {
                width: 34,
                height: 34,
                className: V,
                "aria-hidden": H
            }), t[23] = V, t[24] = H, t[25] = U) : U = t[25];
            let W;
            t[26] !== z || t[27] !== U || t[28] !== b ? (W = (0, X.jsx)(`div`, {
                className: `flex items-center`,
                children: (0, X.jsxs)(`a`, {
                    href: ee,
                    className: `relative flex items-center`,
                    children: [z, U]
                })
            }), t[26] = z, t[27] = U, t[28] = b, t[29] = W) : W = t[29];
            let G;
            t[30] !== u || t[31] !== v || t[32] !== d || t[33] !== r ? (G = v && (0, X.jsx)(Ae, {
                navData: r,
                disableDarkMode: u,
                isHeaderTooCrowdedForLg: d
            }), t[30] = u, t[31] = v, t[32] = d, t[33] = r, t[34] = G) : G = t[34];
            let K;
            t[35] !== v || t[36] !== d || t[37] !== m ? (K = v && (0, X.jsx)(ie, {
                color: `secondary`,
                className: y(`aspect-square border-none px-0!`, d ? `xl:hidden` : `lg:hidden`),
                onClick: m,
                icon: re
            }), t[35] = v, t[36] = d, t[37] = m, t[38] = K) : K = t[38];
            let q;
            t[39] !== A || t[40] !== P || t[41] !== K ? (q = (0, X.jsxs)(`div`, {
                className: `flex items-center justify-end gap-2 overflow-y-visible`,
                children: [P, A, K]
            }), t[39] = A, t[40] = P, t[41] = K, t[42] = q) : q = t[42];
            let J;
            return t[43] !== f || t[44] !== a || t[45] !== L || t[46] !== W || t[47] !== G || t[48] !== q || t[49] !== F ? (J = (0, X.jsxs)(`div`, {
                id: `contentful-header`,
                inert: f,
                "aria-hidden": F,
                style: a,
                className: L,
                children: [W, G, q]
            }), t[43] = f, t[44] = a, t[45] = L, t[46] = W, t[47] = G, t[48] = q, t[49] = F, t[50] = J) : J = t[50], J
        }
    })),
    Ue, We, Ge, Ke, qe = e((() => {
        Ue = T(), M(), q(), i(), We = t(C()), k(), se(), Ge = E(), Ke = e => {
            "use forget";
            let t = (0, Ue.c)(38),
                {
                    tryNowLink: n
                } = e,
                r = S(),
                [i, a] = (0, We.useState)(`idle`),
                {
                    theme: o,
                    effectiveLocale: s,
                    slug: c
                } = ce(),
                l;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (l = [`en`, `en-US`], t[0] = l) : l = t[0];
            let u = l.includes(r.locale),
                d = `ChatGPT`,
                f = o === 1 ? `https://cdn.openai.com/chatgpt/ctf-cdn/image-gen/logo_crayon.png` : o === 2 ? `https://cdn.openai.com/chatgpt/ctf-cdn/image-gen/logo_plushie.png` : `https://cdn.openai.com/chatgpt/ctf-cdn/image-gen/logo_cookie.png`,
                p = n ?? `/`,
                m = i === `hover` && `-translate-y-full duration-300`,
                h = i === `off` && `-translate-y-[200%] transition-transform duration-300`,
                g;
            t[1] !== m || t[2] !== h ? (g = y(`font-oai! relative select-none`, m, h), t[1] = m, t[2] = h, t[3] = g) : g = t[3];
            let _;
            t[4] === i ? _ = t[5] : (_ = () => {
                i === `off` && a(`idle`)
            }, t[4] = i, t[5] = _);
            let v;
            t[6] !== s || t[7] !== c || t[8] !== n ? (v = () => {
                J.logClick({
                    analytics_identifier: `footer-try-now-clicked`,
                    destination_url: n ?? `/`,
                    locale: s,
                    page_slug: c
                })
            }, t[6] = s, t[7] = c, t[8] = n, t[9] = v) : v = t[9];
            let b, x;
            t[10] === u ? (b = t[11], x = t[12]) : (b = () => u && a(`hover`), x = () => u && a(`off`), t[10] = u, t[11] = b, t[12] = x);
            let C;
            t[13] === r ? C = t[14] : (C = r.formatMessage({
                id: `pdtQnk`,
                defaultMessage: `Try ChatGPT now`
            }), t[13] = r, t[14] = C);
            let w = o === 0 && d,
                T;
            t[15] !== f || t[16] !== o ? (T = o !== 0 && (0, Ge.jsx)(`img`, {
                src: f,
                alt: d,
                className: `w-full`
            }), t[15] = f, t[16] = o, t[17] = T) : T = t[17];
            let E;
            t[18] !== w || t[19] !== T ? (E = (0, Ge.jsxs)(`div`, {
                className: `text-[min(calc((100vw-16px)*0.231),343px)] leading-none font-bold tracking-[-0.02em]`,
                children: [w, T]
            }), t[18] = w, t[19] = T, t[20] = E) : E = t[20];
            let D;
            t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (D = (0, Ge.jsxs)(`div`, {
                className: `absolute start-0 top-full text-[min(calc((100vw-32px)*0.215),318px)] leading-none font-bold tracking-[-0.015em]`,
                children: [`Try now`, ` `, (0, Ge.jsx)(`span`, {
                    className: `relative top-[0.08em]`,
                    children: `→`
                })]
            }), t[21] = D) : D = t[21];
            let O = o === 0 && d,
                k;
            t[22] !== f || t[23] !== o ? (k = o !== 0 && (0, Ge.jsx)(`img`, {
                src: f,
                alt: d,
                className: `w-full`
            }), t[22] = f, t[23] = o, t[24] = k) : k = t[24];
            let A;
            t[25] !== O || t[26] !== k ? (A = (0, Ge.jsxs)(`div`, {
                className: `absolute start-0 top-[200%] text-[min(calc((100vw-16px)*0.231),343px)] leading-none font-bold tracking-[-0.02em]`,
                children: [O, k]
            }), t[25] = O, t[26] = k, t[27] = A) : A = t[27];
            let j;
            return t[28] !== C || t[29] !== E || t[30] !== A || t[31] !== p || t[32] !== g || t[33] !== _ || t[34] !== v || t[35] !== b || t[36] !== x ? (j = (0, Ge.jsx)(`div`, {
                className: `mt-12 flex flex-col overflow-hidden`,
                children: (0, Ge.jsxs)(I, {
                    href: p,
                    className: g,
                    onTransitionEnd: _,
                    onClick: v,
                    onMouseEnter: b,
                    onMouseLeave: x,
                    underline: !1,
                    "aria-label": C,
                    children: [E, D, A]
                })
            }), t[28] = C, t[29] = E, t[30] = A, t[31] = p, t[32] = g, t[33] = _, t[34] = v, t[35] = b, t[36] = x, t[37] = j) : j = t[37], j
        }
    }));

function Je(e) {
    return e.preventDefault()
}
var Ye, Xe, Ze, Qe, $e = e((() => {
    Ye = T(), H(), s(), i(), k(), se(), De(), Oe(), Xe = E(), O(), Ze = e => {
        "use forget";
        let t = (0, Ye.c)(20),
            {
                disableDarkMode: n,
                className: r
            } = e,
            i = n !== void 0 && n,
            a = S(),
            {
                effectiveLocale: o
            } = ce(),
            s = Te[o],
            c;
        t[0] === r ? c = t[1] : (c = y(`relative`, r), t[0] = r, t[1] = c);
        let l;
        t[2] === a ? l = t[3] : (l = a.formatMessage(Ee), t[2] = a, t[3] = l);
        let u = !i,
            d;
        t[4] !== i || t[5] !== u ? (d = y(`text-mkt-p2 text-token-text-secondary inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 transition-colors`, {
            "hover:bg-token-bg-primary/80": i,
            "hover:bg-token-bg-secondary/50": u
        }), t[4] = i, t[5] = u, t[6] = d) : d = t[6];
        let f;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, Xe.jsx)(U, {
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
    }, Qe = r(() => D(() => import(`./8d3fc825-bgjgc3msw0s2yud0.js`).then(e => e.LanguageSwitcher), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])), {
        loading: Ze
    })
}));

function et(e, t) {
    let n = t === _ ? `` : `/${t}`;
    return e.url?.startsWith(`https://chatgpt.com`) ? `${n}${new URL(e.url).pathname}` : e.page?.slug ? `https://openai.com${n}/${e.page.slug}` : e.url?.startsWith(`/`) ? `https://openai.com${n}${e.url}` : e.url?.startsWith(`https://openai.com`) ? `https://openai.com${n}${e.url.substring(18)}` : e.url
}

function tt(e) {
    return !!e
}

function nt() {
    J.logClick({
        analytics_identifier: `footer-blossom-clicked`,
        destination_url: `/`
    })
}

function rt(e) {
    return (0, Z.jsx)(F, {
        href: e.href,
        "aria-label": e.label,
        children: e.icon
    }, e.label)
}
var it, Z, at, ot, st, ct, lt, ut = e((() => {
        it = T(), o(), N(), P(), K(), pe(), de(), ye(), me(), ve(), ge(), V(), c(), M(), m(), q(), a(), s(), i(), C(), k(), se(), qe(), $e(), Z = E(), O(), at = r(() => D(() => import(`./ba0ab623-gsad3ipj5gn9722r.js`).then(e => e.ManageCookiesModal), __vite__mapDeps([14, 1, 2, 3, 4, 5, 6, 7, 8, 9]))), ot = [{
            href: `https://x.com/chatgpt`,
            label: `X`,
            icon: (0, Z.jsx)(_e, {
                className: `h-5 w-5`
            })
        }, {
            href: `https://www.youtube.com/OpenAI`,
            label: `YouTube`,
            icon: (0, Z.jsx)(xe, {
                className: `h-5 w-5`
            })
        }, {
            href: `https://www.linkedin.com/company/openai/`,
            label: `LinkedIn`,
            icon: (0, Z.jsx)(he, {
                className: `h-5 w-5`
            })
        }, {
            href: `https://github.com/openai`,
            label: `GitHub`,
            icon: (0, Z.jsx)(be, {
                className: `h-5 w-5`
            })
        }, {
            href: `https://www.instagram.com/chatgpt/`,
            label: `Instagram`,
            icon: (0, Z.jsx)(Se, {
                className: `h-5 w-5`
            })
        }, {
            href: `https://www.tiktok.com/@chatgpt`,
            label: `TikTok`,
            icon: (0, Z.jsx)(fe, {
                className: `h-5 w-5`
            })
        }], st = w({
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
                } = ce(),
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
                    children: (0, Z.jsx)(I, {
                        href: t,
                        underline: !1,
                        openNewTab: e.external,
                        className: `text-mkt-p2 font-medium hover:opacity-70`,
                        onClick: () => {
                            J.logClick({
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
                    footer: r,
                    header: i,
                    hideLanguageSwitcher: a,
                    disableHugeChatLogo: o,
                    disableDarkMode: s,
                    customBackgroundColor: c
                } = e,
                l = a !== void 0 && a,
                u = o === void 0 || o,
                d = s !== void 0 && s,
                p = S(),
                m;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = b(`1524307528`).get(`is_contentful_footer_modal_migration_enabled`, !1) || n(), t[0] = m) : m = t[0];
            let h = m,
                g;
            t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (g = L(), t[1] = g) : g = t[1];
            let {
                showOptOutIcon: _,
                showYourPrivacyChoicesLabel: v
            } = g, x = i?.cta?.url ?? `/`, C, w, T, E, D, O, k;
            if (t[2] !== c || t[3] !== d || t[4] !== r.items) {
                let e = (r.items?.filter(tt) ?? []).slice(0, 4),
                    n;
                t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (n = [`md:col-start-2`, `md:col-start-3`, `md:col-start-4`, `md:col-start-5`], t[12] = n) : n = t[12];
                let i = n,
                    a = Math.max(0, i.length - e.length),
                    o;
                t[13] === a ? o = t[14] : (o = i.slice(a), t[13] = a, t[14] = o);
                let s = o;
                t[15] === d ? w = t[16] : (w = y(`bg-token-bg-primary`, {
                    "light text-token-text-primary": d
                }), t[15] = d, t[16] = w), t[17] === c ? T = t[18] : (T = {
                    backgroundColor: c
                }, t[17] = c, t[18] = T), C = `max-w-9xl border-token-border-primary mx-auto mb-8 border-t`, k = `px-4 py-8 md:py-10`, E = `grid grid-cols-2 gap-6 md:grid-cols-5`, t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (D = (0, Z.jsx)(`div`, {
                    className: `col-span-full mb-8 flex items-start justify-start md:col-span-1 md:mb-0`,
                    children: (0, Z.jsx)(I, {
                        href: `/`,
                        className: `group block`,
                        onClick: nt,
                        children: (0, Z.jsx)(ne, {
                            className: `h-10 w-10 group-hover:rotate-[60deg] group-hover:opacity-70 group-hover:transition-transform group-hover:duration-300`
                        })
                    })
                }), t[19] = D) : D = t[19];
                let l;
                t[20] === s ? l = t[21] : (l = (e, t) => (0, Z.jsx)(`div`, {
                    className: `col-span-1 ${s[t]??`md:col-start-2`}`,
                    children: (0, Z.jsx)(ct, {
                        item: e
                    })
                }, e.id), t[20] = s, t[21] = l), O = e.map(l), t[2] = c, t[3] = d, t[4] = r.items, t[5] = C, t[6] = w, t[7] = T, t[8] = E, t[9] = D, t[10] = O, t[11] = k
            } else C = t[5], w = t[6], T = t[7], E = t[8], D = t[9], O = t[10], k = t[11];
            let A;
            t[22] !== E || t[23] !== D || t[24] !== O ? (A = (0, Z.jsxs)(`div`, {
                className: E,
                children: [D, O]
            }), t[22] = E, t[23] = D, t[24] = O, t[25] = A) : A = t[25];
            let j;
            t[26] !== u || t[27] !== x ? (j = !u && (0, Z.jsx)(Ke, {
                tryNowLink: x
            }), t[26] = u, t[27] = x, t[28] = j) : j = t[28];
            let M;
            t[29] !== A || t[30] !== j || t[31] !== k ? (M = (0, Z.jsxs)(`div`, {
                className: k,
                children: [A, j]
            }), t[29] = A, t[30] = j, t[31] = k, t[32] = M) : M = t[32];
            let N;
            t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, Z.jsxs)(`span`, {
                children: [`OpenAI © 2015–`, new Date().getFullYear()]
            }), t[33] = N) : N = t[33];
            let P;
            t[34] === Symbol.for(`react.memo_cache_sentinel`) ? (P = () => {
                if (J.logClick({
                        analytics_identifier: `footer-manage-cookies`
                    }), h) {
                    ee();
                    return
                }
                f(at)
            }, t[34] = P) : P = t[34];
            let F;
            t[35] === p ? F = t[36] : (F = p.formatMessage(v ? st.yourPrivacyChoices : st.cookies), t[35] = p, t[36] = F);
            let R;
            t[37] === F ? R = t[38] : (R = (0, Z.jsx)(I, {
                className: `text-mkt-p2 font-medium underline decoration-gray-300 underline-offset-2`,
                onClick: P,
                children: F
            }), t[37] = F, t[38] = R);
            let z;
            t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (z = _ && (0, Z.jsx)(te, {
                "aria-hidden": `true`,
                className: `h-[14px] w-[30px] shrink-0`,
                focusable: `false`
            }), t[39] = z) : z = t[39];
            let B;
            t[40] === R ? B = t[41] : (B = (0, Z.jsxs)(`div`, {
                children: [N, (0, Z.jsxs)(`span`, {
                    className: `ms-1 inline-flex items-center gap-1`,
                    children: [R, z]
                })]
            }), t[40] = R, t[41] = B);
            let V;
            t[42] === Symbol.for(`react.memo_cache_sentinel`) ? (V = (0, Z.jsx)(`div`, {
                className: `flex items-center gap-7`,
                children: ot.map(rt)
            }), t[42] = V) : V = t[42];
            let H;
            t[43] === l ? H = t[44] : (H = !l && (0, Z.jsx)(`div`, {
                className: `mt-4 md:ms-4 md:mt-0`,
                children: (0, Z.jsx)(Qe, {})
            }), t[43] = l, t[44] = H);
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
            t[50] !== C || t[51] !== M || t[52] !== W ? (G = (0, Z.jsxs)(`div`, {
                className: C,
                children: [M, W]
            }), t[50] = C, t[51] = M, t[52] = W, t[53] = G) : G = t[53];
            let K;
            return t[54] !== w || t[55] !== T || t[56] !== G ? (K = (0, Z.jsx)(`footer`, {
                className: w,
                style: T,
                children: G
            }), t[54] = w, t[55] = T, t[56] = G, t[57] = K) : K = t[57], K
        }
    })),
    dt, Q, ft, pt, mt, ht = e((() => {
        dt = T(), B(), M(), m(), q(), i(), C(), k(), se(), Q = E(), ft = e => {
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
                s = S(),
                c;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Q.jsx)(R, {
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
                } = ce(),
                o;
            t[0] !== a || t[1] !== n.url ? (o = v(n.url, a), t[0] = a, t[1] = n.url, t[2] = o) : o = t[2];
            let s = o,
                c = n.external,
                l;
            t[3] === i ? l = t[4] : (l = y(`text-mkt-h4`, i), t[3] = i, t[4] = l);
            let u;
            t[5] !== s || t[6] !== n.analyticsIdentifier || t[7] !== r ? (u = () => {
                J.logNavigation({
                    analytics_identifier: n.analyticsIdentifier,
                    navigation_surface: `header_mobile`,
                    to: s
                }), r()
            }, t[5] = s, t[6] = n.analyticsIdentifier, t[7] = r, t[8] = u) : u = t[8];
            let d;
            return t[9] !== s || t[10] !== n.external || t[11] !== n.label || t[12] !== l || t[13] !== u ? (d = (0, Q.jsx)(I, {
                href: s,
                underline: !1,
                openNewTab: c,
                className: l,
                onClick: u,
                children: n.label
            }), t[9] = s, t[10] = n.external, t[11] = n.label, t[12] = l, t[13] = u, t[14] = d) : d = t[14], d
        }, mt = w({
            back: {
                id: `headerNavigationMobileSubmenu.back`,
                defaultMessage: `Back`
            }
        })
    })),
    gt, _t, $, vt, yt = e((() => {
        gt = T(), oe(), g(), q(), l(), i(), _t = t(C()), Ce(), ht(), $ = E(), vt = e => {
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
                } = (0, _t.useContext)(we),
                [l, u] = (0, _t.useState)(null),
                f, m;
            if (t[0] !== o || t[1] !== s || t[2] !== c ? (f = () => {
                    if (s) return x(() => {
                        (o ? p() : d()) && c()
                    })
                }, m = [o, s, c], t[0] = o, t[1] = s, t[2] = c, t[3] = f, t[4] = m) : (f = t[3], m = t[4]), (0, _t.useEffect)(f, m), !r) return null;
            let h = a?.backgroundColor ?? `var(--bg-primary)`,
                g = `linear-gradient(to bottom,${h},color-mix(in oklab,${h} 60%,transparent))`,
                _;
            t[5] !== a || t[6] !== g ? (_ = {
                ...a,
                backgroundImage: g
            }, t[5] = a, t[6] = g, t[7] = _) : _ = t[7];
            let v = _,
                b = o ? `xl:hidden` : `lg:hidden`,
                S = !s,
                C;
            t[8] !== n || t[9] !== s || t[10] !== b || t[11] !== S ? (C = y(`pt-mkt-header-height fixed inset-0 z-40 flex flex-col backdrop-blur-xl transition-opacity duration-500`, b, {
                "opacity-100": s,
                "opacity-0": S
            }, n), t[8] = n, t[9] = s, t[10] = b, t[11] = S, t[12] = C) : C = t[12];
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
                            J.logNavigation({
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
                children: (0, $.jsx)(ae, {
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
            return t[22] !== w || t[23] !== D || t[24] !== v || t[25] !== C ? (O = (0, $.jsx)(`div`, {
                style: v,
                className: C,
                inert: w,
                children: D
            }), t[22] = w, t[23] = D, t[24] = v, t[25] = C, t[26] = O) : O = t[26], O
        }
    }));
export {
    Ve as a, ut as i, yt as n, He as o, lt as r, vt as t
};
//# sourceMappingURL=d9e5e62d-kdyjef8oav6ux4ym.js.map