import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    At as r,
    K5 as i,
    Knt as a,
    ON as o,
    Qy as s,
    R8 as c,
    TN as l,
    Wnt as u,
    Zy as d,
    bF as f,
    cn as p,
    j5 as m,
    q5 as h,
    vF as g,
    y5 as _
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as v,
    Vn as y,
    wn as b
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AV as x,
    dlt as S,
    eut as ee,
    kV as C,
    llt as w,
    nwt as T,
    olt as E,
    rwt as D,
    tut as O,
    ult as k
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    $v as te,
    Iv as ne,
    Lv as re,
    Qv as ie,
    Xv as ae,
    Zv as oe
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    n as se,
    r as A,
    t as j
} from "./24c0da2c-bx2qul3cpe0cu1wg.js";
import {
    i as ce,
    r as le,
    t as M
} from "./5ab42519-n9cavghro7flx4v9.js";
var N, P, F, I, L, ue, de = e((() => {
    N = `bgaZlG_businessTooltipIn`, P = `bgaZlG_businessTooltipOut`, F = `bgaZlG_tooltipClosing`, I = `bgaZlG_tooltipContent`, L = `bgaZlG_tooltipOpen`, ue = {
        businessTooltipIn: N,
        businessTooltipOut: P,
        tooltipClosing: F,
        tooltipContent: I,
        tooltipOpen: L
    }
}));

function fe(e) {
    "use forget";
    let t = (0, pe.c)(81),
        {
            entitySearchResult: n,
            tooltipContent: r,
            enableImageHover: a,
            onOpenChange: s,
            isSelected: c,
            isVisible: l,
            isSonicSidebarEnabled: h,
            isProvisional: g,
            onClick: v,
            routeStopIndex: y,
            tooltipLocation: b,
            isEntranceReady: x
        } = e,
        S = a === void 0 || a,
        C = g !== void 0 && g,
        w = b === void 0 ? `top` : b,
        T = x === void 0 || x,
        E = o(),
        D = f(),
        O = (0, R.useId)(),
        k = n.entity_data,
        te = n.entity_category ?? `local_business`,
        ne = v != null && (h || C),
        [re, ie] = (0, R.useState)(!1),
        [ae, oe] = (0, R.useState)(!1),
        [se, A] = (0, R.useState)(`closed`),
        [j, le] = (0, R.useState)(!1),
        [M, N] = (0, R.useState)(!1),
        P = (0, R.useRef)(null),
        F;
    t[0] !== k.id || t[1] !== D ? (F = () => D ? ee(D).hoveredBusinessId$() === k.id : !1, t[0] = k.id, t[1] = D, t[2] = F) : F = t[2];
    let I = !!m(F) || re || ae,
        L = C && !I,
        de;
    t[3] === O ? de = t[4] : (de = () => ge() === O, t[3] = O, t[4] = de);
    let fe = m(de) && (se !== `closed` || j),
        B;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (B = () => {
        P.current &&= (clearTimeout(P.current), null)
    }, t[5] = B) : B = t[5];
    let V = B,
        me;
    t[6] === O ? me = t[7] : (me = () => {
        V(), A(`closing`), P.current = setTimeout(() => {
            A(`closed`), _(ge) === O && ge.set(null), P.current = null
        }, he)
    }, t[6] = O, t[7] = me);
    let H = me,
        U, W;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (W = () => V, U = [V], t[8] = U, t[9] = W) : (U = t[8], W = t[9]), (0, R.useEffect)(W, U);
    let G, K;
    t[10] !== j || t[11] !== s || t[12] !== M || t[13] !== H ? (G = () => {
        if (j) {
            N(!1), V(), A(`open`);
            return
        }
        M && (N(!1), s?.(!1), H())
    }, K = [V, j, s, M, H], t[10] = j, t[11] = s, t[12] = M, t[13] = H, t[14] = G, t[15] = K) : (G = t[14], K = t[15]), (0, R.useEffect)(G, K);
    let be = k.longitude,
        xe = k.latitude,
        q;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (q = {
        opacity: 0,
        scale: .9,
        translateY: -50
    }, t[16] = q) : q = t[16];
    let J;
    t[17] === T ? J = t[18] : (J = T ? {
        opacity: 1,
        scale: 1,
        translateY: 0
    } : {
        opacity: 0,
        scale: .9,
        translateY: -50
    }, t[17] = T, t[18] = J);
    let Y;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (Y = {
        opacity: 0,
        scale: 0,
        transition: {
            duration: .1,
            ease: `easeInOut`
        }
    }, t[19] = Y) : Y = t[19];
    let X;
    t[20] === k.id ? X = t[21] : (X = ve(k.id), t[20] = k.id, t[21] = X);
    let Z;
    t[22] === X ? Z = t[23] : (Z = {
        duration: .15,
        ease: `easeInOut`,
        delay: X
    }, t[22] = X, t[23] = Z);
    let Q;
    t[24] !== k.id || t[25] !== k.name || t[26] !== D?.id ? (Q = () => {
        ie(!0), u.logStructuredEvent(`ChatgptPlacesMarkerHovered`, {
            entityId: k.id,
            entityName: k.name,
            conversationId: D?.id ?? ``
        })
    }, t[24] = k.id, t[25] = k.name, t[26] = D?.id, t[27] = Q) : Q = t[27];
    let Se;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (Se = () => ie(!1), t[28] = Se) : Se = t[28];
    let $;
    t[29] !== k || t[30] !== S || t[31] !== te || t[32] !== n.mapPointIcon || t[33] !== I || t[34] !== L || t[35] !== c || t[36] !== y ? ($ = (0, z.jsx)(_e, {
        business: k,
        entityCategory: te,
        icon: n.mapPointIcon,
        isSelected: c,
        isHovered: I,
        isMinimized: L,
        enableImageHover: S,
        routeStopIndex: y
    }), t[29] = k, t[30] = S, t[31] = te, t[32] = n.mapPointIcon, t[33] = I, t[34] = L, t[35] = c, t[36] = y, t[37] = $) : $ = t[37];
    let Ce;
    t[38] !== k.name || t[39] !== C || t[40] !== L || t[41] !== l ? (Ce = !L && (0, z.jsx)(`div`, {
        "data-testid": `business-marker-label`,
        "data-map-label-blocker": ``,
        style: {
            opacity: l || C ? 1 : 0
        },
        className: `pointer-events-none absolute start-1/2 top-full max-w-[150px] -translate-x-1/2 truncate font-bold text-gray-800 [text-shadow:-0.8px_-0.8px_0_#fff,0.8px_-0.8px_0_#fff,-0.8px_0.8px_0_#fff,0.8px_0.8px_0_#fff] motion-safe:transition-opacity motion-safe:duration-1000 motion-safe:ease-out dark:text-gray-100 dark:[text-shadow:-0.8px_-0.8px_0_#000,0.8px_-0.8px_0_#000,-0.8px_0.8px_0_#000,0.8px_0.8px_0_#000]`,
        children: k.name
    }), t[38] = k.name, t[39] = C, t[40] = L, t[41] = l, t[42] = Ce) : Ce = t[42];
    let we;
    t[43] !== k.name || t[44] !== ne || t[45] !== L || t[46] !== v ? (we = ne ? (0, z.jsx)(`button`, {
        type: `button`,
        "aria-label": k.name,
        className: i(`absolute cursor-pointer border-0 bg-transparent p-0`, L ? `start-1/2 bottom-0 size-7 -translate-x-1/2 rounded-full` : `inset-0 rounded-xl`),
        "data-testid": `business-marker-hitbox`,
        onFocus: () => oe(!0),
        onBlur: () => oe(!1),
        onClick: e => {
            e.preventDefault(), v()
        }
    }) : (0, z.jsx)(`div`, {
        className: i(`absolute`, L ? `start-1/2 bottom-0 size-7 -translate-x-1/2 rounded-full` : `inset-0 rounded-xl`),
        "data-testid": `business-marker-hitbox`
    }), t[43] = k.name, t[44] = ne, t[45] = L, t[46] = v, t[47] = we) : we = t[47];
    let Te;
    t[48] !== k.latitude || t[49] !== k.longitude || t[50] !== J || t[51] !== Z || t[52] !== Q || t[53] !== $ || t[54] !== Ce || t[55] !== we ? (Te = (0, z.jsxs)(p.div, {
        className: `relative`,
        "data-map-marker-longitude": be,
        "data-map-marker-latitude": xe,
        initial: q,
        animate: J,
        exit: Y,
        transition: Z,
        onMouseEnter: Q,
        onMouseLeave: Se,
        children: [$, Ce, we]
    }), t[48] = k.latitude, t[49] = k.longitude, t[50] = J, t[51] = Z, t[52] = Q, t[53] = $, t[54] = Ce, t[55] = we, t[56] = Te) : Te = t[56];
    let Ee = Te,
        De;
    t[57] !== k.id || t[58] !== E || t[59] !== j || t[60] !== fe || t[61] !== Ee || t[62] !== O || t[63] !== s || t[64] !== H || t[65] !== r || t[66] !== w || t[67] !== se ? (De = r ? (0, z.jsx)(d, {
        label: (0, z.jsx)(`div`, {
            onPointerEnter: () => {
                V(), A(`open`)
            },
            children: typeof r == `function` ? r({
                onProviderPickerOpenChange: le
            }) : r
        }),
        open: fe,
        onOpenChange: e => {
            if (e) {
                ge.set(O), s?.(e), N(!1), V(), A(`open`);
                return
            }
            if (j) {
                N(!0), A(`open`);
                return
            }
            s?.(e), H()
        },
        delayDuration: 200,
        theme: E ? `default` : `white`,
        customPaddingClassName: `bg-clip-padding`,
        customBorderClassName: `border-token-border-default border`,
        contentClassName: i(ue.tooltipContent, se === `closing` ? ue.tooltipClosing : ue.tooltipOpen, `rounded-[20px]!`),
        side: w,
        sideOffset: 10,
        wide: !0,
        interactive: !0,
        children: Ee
    }, k.id) : Ee, t[57] = k.id, t[58] = E, t[59] = j, t[60] = fe, t[61] = Ee, t[62] = O, t[63] = s, t[64] = H, t[65] = r, t[66] = w, t[67] = se, t[68] = De) : De = t[68];
    let Oe = De,
        ke = k.id,
        Ae = k.longitude,
        je = k.latitude,
        Me = !!n.isModelPreferred,
        Ne;
    t[69] !== I || t[70] !== c || t[71] !== Me ? (Ne = ye({
        isSelected: c,
        isModelPreferred: Me,
        isHovered: I
    }), t[69] = I, t[70] = c, t[71] = Me, t[72] = Ne) : Ne = t[72];
    let Pe;
    t[73] === Ne ? Pe = t[74] : (Pe = {
        zIndex: Ne
    }, t[73] = Ne, t[74] = Pe);
    let Fe;
    return t[75] !== k.id || t[76] !== k.latitude || t[77] !== k.longitude || t[78] !== Oe || t[79] !== Pe ? (Fe = (0, z.jsx)(ce, {
        longitude: Ae,
        latitude: je,
        anchor: `bottom`,
        pitchAlignment: `viewport`,
        rotationAlignment: `viewport`,
        occludedOpacity: 1,
        style: Pe,
        children: Oe
    }, ke), t[75] = k.id, t[76] = k.latitude, t[77] = k.longitude, t[78] = Oe, t[79] = Pe, t[80] = Fe) : Fe = t[80], Fe
}
var pe, R, z, B, V, me, H, U, he, ge, W, _e, ve, ye, G = e((() => {
    pe = b(), g(), re(), ie(), ae(), s(), O(), n(), a(), l(), T(), h(), x(), r(), R = t(y()), M(), de(), z = v(), B = oe, V = ne, me = te, H = RegExp(`^(?:${C().source})$`, `u`), U = 8, he = 140, ge = c(null), W = e => {
        let t = e?.trim();
        if (t && (H.test(t) || !(Array.from(t).length > U || /^\p{L}$/u.test(t)))) return t
    }, _e = e => {
        "use forget";
        let t = (0, pe.c)(30),
            {
                business: n,
                entityCategory: r,
                icon: a,
                isSelected: o,
                isHovered: s,
                isMinimized: c,
                enableImageHover: l,
                routeStopIndex: u
            } = e,
            d = c !== void 0 && c,
            f = l === void 0 || l,
            p = u != null,
            m = n.reconciled_thumbnails?.[0]?.image_url ?? n.image_urls?.[0] ?? n.image_url,
            {
                data: h
            } = D(f && p && s ? m : null),
            g = f && p && s && h != null,
            _, v;
        t[0] === a ? (_ = t[1], v = t[2]) : (_ = W(a), v = _ && H.test(_) ? `text-sm leading-none` : `px-1.5 text-xs font-semibold leading-none`, t[0] = a, t[1] = _, t[2] = v);
        let y = v;
        if (g) {
            let e;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, z.jsx)(`div`, {
                className: `absolute start-1/2 top-[calc(100%-1px)] z-0 h-0 w-0 -translate-x-1/2 border-s-[12px] border-e-[12px] border-t-[12px] border-s-transparent border-e-transparent border-t-white`
            }), t[3] = e) : e = t[3];
            let n;
            return t[4] === h.src ? n = t[5] : (n = (0, z.jsxs)(`div`, {
                className: `relative flex h-16 min-w-16 items-center justify-center overflow-visible rounded-full border-[4.5px] border-white bg-black bg-clip-padding shadow-[0px_9px_7px_rgba(0,0,0,0.1),0px_23px_17px_rgba(0,0,0,0.1)] transition-all duration-150 ease-out`,
                children: [e, (0, z.jsx)(`img`, {
                    src: h.src,
                    alt: ``,
                    className: `relative z-10 h-full w-full rounded-full object-cover`
                })]
            }), t[4] = h.src, t[5] = n), n
        }
        if (d && !p) {
            let e = s && `scale-125`,
                n;
            t[6] === e ? n = t[7] : (n = i(`shadow-elevation-03 relative flex size-2 items-center justify-center rounded-full bg-white transition-transform duration-150 ease-out`, e), t[6] = e, t[7] = n);
            let r;
            t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, z.jsx)(`div`, {
                className: `size-1 rounded-full bg-black`
            }), t[8] = r) : r = t[8];
            let a;
            return t[9] === n ? a = t[10] : (a = (0, z.jsx)(`div`, {
                "data-testid": `business-marker-pin`,
                className: n,
                children: r
            }), t[9] = n, t[10] = a), a
        }
        let b = p ? `h-8 min-w-8` : `h-7 min-w-7`,
            x = p && o ? `border-white bg-black text-white dark:border-black dark:bg-white dark:text-black` : p ? `border-token-border-default bg-white text-black dark:bg-black dark:text-white` : o ? `bg-token-interactive-bg-primary-press text-token-interactive-label-primary-press border-2 border-white dark:border-black` : `border-token-border-default bg-token-bg-primary`,
            S = s && `scale-110 border-2`,
            ee = s && !o && `border-black dark:border-white`,
            C;
        t[11] !== b || t[12] !== x || t[13] !== S || t[14] !== ee ? (C = i(`shadow-elevation-03 relative flex items-center justify-center rounded-full border bg-clip-padding text-xs font-medium transition-all duration-150 ease-out`, b, x, S, ee), t[11] = b, t[12] = x, t[13] = S, t[14] = ee, t[15] = C) : C = t[15];
        let w;
        t[16] !== p || t[17] !== o ? (w = o && !p && (0, z.jsx)(`div`, {
            className: `pointer-events-none absolute start-1/2 top-full z-0 h-0 w-0 -translate-x-1/2 translate-y-px border-s-4 border-e-4 border-t-4 border-s-transparent border-e-transparent border-t-white dark:border-t-black`
        }), t[16] = p, t[17] = o, t[18] = w) : w = t[18];
        let T;
        t[19] !== n.rating || t[20] !== r || t[21] !== p || t[22] !== _ || t[23] !== y || t[24] !== u ? (T = (0, z.jsx)(`div`, {
            className: `relative z-10`,
            children: _ ? (0, z.jsx)(`span`, {
                className: y,
                children: _
            }) : p ? (0, z.jsx)(`span`, {
                className: `px-2 font-semibold`,
                children: u
            }) : n.rating ? (0, z.jsxs)(`div`, {
                className: `flex items-center gap-0.75 px-2`,
                children: [(0, z.jsx)(B, {
                    className: `h-3 w-3`
                }), (0, z.jsx)(`span`, {
                    children: n.rating?.toFixed(1)
                })]
            }) : r === `local_business` ? (0, z.jsx)(V, {
                className: `h-3 w-3`
            }) : (0, z.jsx)(me, {
                className: `h-3 w-3`
            })
        }), t[19] = n.rating, t[20] = r, t[21] = p, t[22] = _, t[23] = y, t[24] = u, t[25] = T) : T = t[25];
        let E;
        return t[26] !== T || t[27] !== C || t[28] !== w ? (E = (0, z.jsxs)(`div`, {
            "data-testid": `business-marker-pin`,
            className: C,
            children: [w, T]
        }), t[26] = T, t[27] = C, t[28] = w, t[29] = E) : E = t[29], E
    }, ve = e => Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0) % 100 / 500, ye = ({
        isSelected: e,
        isModelPreferred: t,
        isHovered: n
    }) => n ? 4 : e ? 3 : t ? 2 : 1
}));

function K(e, t) {
    return typeof e == `number` && Number.isFinite(e) && typeof t == `number` && Number.isFinite(t) ? {
        latitude: e,
        longitude: t
    } : null
}

function be({
    coordinates: e,
    isDarkMode: t,
    zoom: n = Y,
    width: r,
    height: i,
    scale: a = 2
}) {
    let o = (t ? E : w).replace(`mapbox://styles/`, ``),
        {
            longitude: s,
            latitude: c
        } = e,
        l = s.toFixed(X),
        u = c.toFixed(X),
        d = n.toFixed(Z),
        f = new URL(`https://api.mapbox.com/styles/v1/${o}/static/${l},${u},${d},0,0/${r}x${i}@${a}x`);
    return f.searchParams.set(`access_token`, k), f.searchParams.set(`logo`, `false`), f.searchParams.set(`attribution`, `false`), f.toString()
}

function xe(e) {
    "use forget";
    let t = (0, q.c)(27),
        {
            business: n,
            width: r,
            height: a,
            alt: s,
            imageClassName: c,
            marker: l
        } = e,
        u = s === void 0 ? `` : s,
        d = o(),
        f, p, m, h;
    if (t[0] !== n.latitude || t[1] !== n.longitude || t[2] !== a || t[3] !== d || t[4] !== r) {
        h = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            if (f = K(n.latitude, n.longitude), !f) {
                h = null;
                break bb0
            }
            p = Q,
            m = be({
                coordinates: f,
                isDarkMode: d,
                width: r,
                height: a
            })
        }
        t[0] = n.latitude, t[1] = n.longitude, t[2] = a, t[3] = d, t[4] = r, t[5] = f, t[6] = p, t[7] = m, t[8] = h
    } else f = t[5], p = t[6], m = t[7], h = t[8];
    if (h !== Symbol.for(`react.early_return_sentinel`)) return h;
    let g = m,
        _;
    t[9] !== u || t[10] !== f || t[11] !== c || t[12] !== d || t[13] !== p || t[14] !== g ? (_ = p ? (0, J.jsx)(`span`, {
        className: i(`pointer-events-none block size-full [&_.mapboxgl-control-container]:hidden`, c),
        role: u ? `img` : void 0,
        "aria-label": u || void 0,
        "aria-hidden": !u || void 0,
        children: (0, J.jsx)(le, {
            latitude: f.latitude,
            longitude: f.longitude,
            zoom: Y,
            bearing: 0,
            pitch: 0,
            mapStyle: d ? E : w,
            mapboxAccessToken: k,
            RTLTextPlugin: se(),
            interactive: !1,
            attributionControl: !1
        })
    }) : (0, J.jsx)(`img`, {
        src: g,
        alt: u,
        draggable: !1,
        className: i(`m-0 block size-full object-cover select-none`, c),
        loading: `lazy`,
        decoding: `async`
    }), t[9] = u, t[10] = f, t[11] = c, t[12] = d, t[13] = p, t[14] = g, t[15] = _) : _ = t[15];
    let v = l == null ? `-translate-y-full` : `-translate-y-1/2`,
        y;
    t[16] === v ? y = t[17] : (y = i(`pointer-events-none absolute start-1/2 top-1/2 -translate-x-1/2`, v), t[16] = v, t[17] = y);
    let b;
    t[18] !== n || t[19] !== l ? (b = l ?? (0, J.jsx)(_e, {
        business: n,
        entityCategory: `local_business`,
        isSelected: !0,
        isHovered: !1
    }), t[18] = n, t[19] = l, t[20] = b) : b = t[20];
    let x;
    t[21] !== y || t[22] !== b ? (x = (0, J.jsx)(`span`, {
        className: y,
        children: b
    }), t[21] = y, t[22] = b, t[23] = x) : x = t[23];
    let S;
    return t[24] !== _ || t[25] !== x ? (S = (0, J.jsxs)(`span`, {
        className: `relative block size-full`,
        children: [_, x]
    }), t[24] = _, t[25] = x, t[26] = S) : S = t[26], S
}
var q, J, Y, X, Z, Q, Se = e((() => {
    q = b(), l(), A(), h(), j(), M(), G(), S(), J = v(), Y = 15, X = 7, Z = 4, Q = !1
}));
export {
    fe as a, Se as i, be as n, G as o, K as r, xe as t
};
//# sourceMappingURL=871633a6-kwl05qzyijk6487b.js.map