import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    At as r,
    I5 as i,
    J5 as a,
    Lnt as o,
    ON as ee,
    Qy as s,
    R8 as c,
    TN as l,
    Zy as u,
    bF as d,
    cn as f,
    l7 as p,
    u7 as m,
    vF as h,
    znt as g
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as _,
    Vn as v,
    wn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AV as b,
    cwt as x,
    dlt as S,
    iut as C,
    kV as w,
    llt as T,
    olt as E,
    rut as te,
    swt as D,
    ult as O
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    $v as ne,
    Qv as re,
    Rv as ie,
    ey as ae,
    ty as oe,
    zv as se
} from "./30901919-lc79rizhhepnsl3q.js";
import {
    n as ce,
    r as k,
    t as A
} from "./24c0da2c-bx2qul3cpe0cu1wg.js";
import {
    i as le,
    r as ue,
    t as j
} from "./5ab42519-n9cavghro7flx4v9.js";
var M, N, P, F, I, de, fe = e((() => {
    M = `bgaZlG_businessTooltipIn`, N = `bgaZlG_businessTooltipOut`, P = `bgaZlG_tooltipClosing`, F = `bgaZlG_tooltipContent`, I = `bgaZlG_tooltipOpen`, de = {
        businessTooltipIn: M,
        businessTooltipOut: N,
        tooltipClosing: P,
        tooltipContent: F,
        tooltipOpen: I
    }
}));

function pe(e) {
    "use forget";
    let t = (0, me.c)(81),
        {
            entitySearchResult: n,
            tooltipContent: r,
            enableImageHover: s,
            onOpenChange: c,
            isSelected: l,
            isVisible: m,
            isSonicSidebarEnabled: h,
            isProvisional: g,
            onClick: _,
            routeStopIndex: v,
            tooltipLocation: y,
            isEntranceReady: b
        } = e,
        x = s === void 0 || s,
        S = g !== void 0 && g,
        C = y === void 0 ? `top` : y,
        w = b === void 0 || b,
        T = ee(),
        E = d(),
        D = (0, L.useId)(),
        O = n.entity_data,
        ne = n.entity_category ?? `local_business`,
        re = _ != null && (h || S),
        [ie, ae] = (0, L.useState)(!1),
        [oe, se] = (0, L.useState)(!1),
        [ce, k] = (0, L.useState)(`closed`),
        [A, ue] = (0, L.useState)(!1),
        [j, M] = (0, L.useState)(!1),
        N = (0, L.useRef)(null),
        P;
    t[0] !== O.id || t[1] !== E ? (P = () => E ? te(E).hoveredBusinessId$() === O.id : !1, t[0] = O.id, t[1] = E, t[2] = P) : P = t[2];
    let F = !!a(P) || ie || oe,
        I = S && !F,
        fe;
    t[3] === D ? fe = t[4] : (fe = () => ge() === D, t[3] = D, t[4] = fe);
    let pe = a(fe) && (ce !== `closed` || A),
        z;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (z = () => {
        N.current &&= (clearTimeout(N.current), null)
    }, t[5] = z) : z = t[5];
    let B = z,
        V;
    t[6] === D ? V = t[7] : (V = () => {
        B(), k(`closing`), N.current = setTimeout(() => {
            k(`closed`), i(ge) === D && ge.set(null), N.current = null
        }, he)
    }, t[6] = D, t[7] = V);
    let H = V,
        U, W;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (W = () => B, U = [B], t[8] = U, t[9] = W) : (U = t[8], W = t[9]), (0, L.useEffect)(W, U);
    let G, K;
    t[10] !== A || t[11] !== c || t[12] !== j || t[13] !== H ? (G = () => {
        if (A) {
            M(!1), B(), k(`open`);
            return
        }
        j && (M(!1), c?.(!1), H())
    }, K = [B, A, c, j, H], t[10] = A, t[11] = c, t[12] = j, t[13] = H, t[14] = G, t[15] = K) : (G = t[14], K = t[15]), (0, L.useEffect)(G, K);
    let be = O.longitude,
        xe = O.latitude,
        q;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (q = {
        opacity: 0,
        scale: .9,
        translateY: -50
    }, t[16] = q) : q = t[16];
    let J;
    t[17] === w ? J = t[18] : (J = w ? {
        opacity: 1,
        scale: 1,
        translateY: 0
    } : {
        opacity: 0,
        scale: .9,
        translateY: -50
    }, t[17] = w, t[18] = J);
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
    t[20] === O.id ? X = t[21] : (X = ve(O.id), t[20] = O.id, t[21] = X);
    let Z;
    t[22] === X ? Z = t[23] : (Z = {
        duration: .15,
        ease: `easeInOut`,
        delay: X
    }, t[22] = X, t[23] = Z);
    let Q;
    t[24] !== O.id || t[25] !== O.name || t[26] !== E?.id ? (Q = () => {
        ae(!0), o.logStructuredEvent(`ChatgptPlacesMarkerHovered`, {
            entityId: O.id,
            entityName: O.name,
            conversationId: E?.id ?? ``
        })
    }, t[24] = O.id, t[25] = O.name, t[26] = E?.id, t[27] = Q) : Q = t[27];
    let Se;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (Se = () => ae(!1), t[28] = Se) : Se = t[28];
    let Ce;
    t[29] !== O || t[30] !== x || t[31] !== ne || t[32] !== n.mapPointIcon || t[33] !== F || t[34] !== I || t[35] !== l || t[36] !== v ? (Ce = (0, R.jsx)(_e, {
        business: O,
        entityCategory: ne,
        icon: n.mapPointIcon,
        isSelected: l,
        isHovered: F,
        isMinimized: I,
        enableImageHover: x,
        routeStopIndex: v
    }), t[29] = O, t[30] = x, t[31] = ne, t[32] = n.mapPointIcon, t[33] = F, t[34] = I, t[35] = l, t[36] = v, t[37] = Ce) : Ce = t[37];
    let we;
    t[38] !== O.name || t[39] !== S || t[40] !== I || t[41] !== m ? (we = !I && (0, R.jsx)(`div`, {
        "data-testid": `business-marker-label`,
        "data-map-label-blocker": ``,
        style: {
            opacity: m || S ? 1 : 0
        },
        className: `pointer-events-none absolute start-1/2 top-full max-w-[150px] -translate-x-1/2 truncate font-bold text-gray-800 [text-shadow:-0.8px_-0.8px_0_#fff,0.8px_-0.8px_0_#fff,-0.8px_0.8px_0_#fff,0.8px_0.8px_0_#fff] motion-safe:transition-opacity motion-safe:duration-1000 motion-safe:ease-out dark:text-gray-100 dark:[text-shadow:-0.8px_-0.8px_0_#000,0.8px_-0.8px_0_#000,-0.8px_0.8px_0_#000,0.8px_0.8px_0_#000]`,
        children: O.name
    }), t[38] = O.name, t[39] = S, t[40] = I, t[41] = m, t[42] = we) : we = t[42];
    let Te;
    t[43] !== O.name || t[44] !== re || t[45] !== I || t[46] !== _ ? (Te = re ? (0, R.jsx)(`button`, {
        type: `button`,
        "aria-label": O.name,
        className: p(`absolute cursor-pointer border-0 bg-transparent p-0`, I ? `start-1/2 bottom-0 size-7 -translate-x-1/2 rounded-full` : `inset-0 rounded-xl`),
        "data-testid": `business-marker-hitbox`,
        onFocus: () => se(!0),
        onBlur: () => se(!1),
        onClick: e => {
            e.preventDefault(), _()
        }
    }) : (0, R.jsx)(`div`, {
        className: p(`absolute`, I ? `start-1/2 bottom-0 size-7 -translate-x-1/2 rounded-full` : `inset-0 rounded-xl`),
        "data-testid": `business-marker-hitbox`
    }), t[43] = O.name, t[44] = re, t[45] = I, t[46] = _, t[47] = Te) : Te = t[47];
    let Ee;
    t[48] !== O.latitude || t[49] !== O.longitude || t[50] !== J || t[51] !== Z || t[52] !== Q || t[53] !== Ce || t[54] !== we || t[55] !== Te ? (Ee = (0, R.jsxs)(f.div, {
        className: `relative`,
        "data-map-marker-longitude": be,
        "data-map-marker-latitude": xe,
        initial: q,
        animate: J,
        exit: Y,
        transition: Z,
        onMouseEnter: Q,
        onMouseLeave: Se,
        children: [Ce, we, Te]
    }), t[48] = O.latitude, t[49] = O.longitude, t[50] = J, t[51] = Z, t[52] = Q, t[53] = Ce, t[54] = we, t[55] = Te, t[56] = Ee) : Ee = t[56];
    let De = Ee,
        Oe;
    t[57] !== O.id || t[58] !== T || t[59] !== A || t[60] !== pe || t[61] !== De || t[62] !== D || t[63] !== c || t[64] !== H || t[65] !== r || t[66] !== C || t[67] !== ce ? (Oe = r ? (0, R.jsx)(u, {
        label: (0, R.jsx)(`div`, {
            onPointerEnter: () => {
                B(), k(`open`)
            },
            children: typeof r == `function` ? r({
                onProviderPickerOpenChange: ue
            }) : r
        }),
        open: pe,
        onOpenChange: e => {
            if (e) {
                ge.set(D), c?.(e), M(!1), B(), k(`open`);
                return
            }
            if (A) {
                M(!0), k(`open`);
                return
            }
            c?.(e), H()
        },
        delayDuration: 200,
        theme: T ? `default` : `white`,
        customPaddingClassName: `bg-clip-padding`,
        customBorderClassName: `border-token-border-default border`,
        contentClassName: p(de.tooltipContent, ce === `closing` ? de.tooltipClosing : de.tooltipOpen, `rounded-[20px]!`),
        side: C,
        sideOffset: 10,
        wide: !0,
        interactive: !0,
        children: De
    }, O.id) : De, t[57] = O.id, t[58] = T, t[59] = A, t[60] = pe, t[61] = De, t[62] = D, t[63] = c, t[64] = H, t[65] = r, t[66] = C, t[67] = ce, t[68] = Oe) : Oe = t[68];
    let ke = Oe,
        Ae = O.id,
        je = O.longitude,
        Me = O.latitude,
        Ne = !!n.isModelPreferred,
        Pe;
    t[69] !== F || t[70] !== l || t[71] !== Ne ? (Pe = ye({
        isSelected: l,
        isModelPreferred: Ne,
        isHovered: F
    }), t[69] = F, t[70] = l, t[71] = Ne, t[72] = Pe) : Pe = t[72];
    let $;
    t[73] === Pe ? $ = t[74] : ($ = {
        zIndex: Pe
    }, t[73] = Pe, t[74] = $);
    let Fe;
    return t[75] !== O.id || t[76] !== O.latitude || t[77] !== O.longitude || t[78] !== ke || t[79] !== $ ? (Fe = (0, R.jsx)(le, {
        longitude: je,
        latitude: Me,
        anchor: `bottom`,
        pitchAlignment: `viewport`,
        rotationAlignment: `viewport`,
        occludedOpacity: 1,
        style: $,
        children: ke
    }, Ae), t[75] = O.id, t[76] = O.latitude, t[77] = O.longitude, t[78] = ke, t[79] = $, t[80] = Fe) : Fe = t[80], Fe
}
var me, L, R, z, B, V, H, U, he, ge, W, _e, ve, ye, G = e((() => {
    me = y(), h(), se(), ae(), re(), s(), C(), n(), g(), l(), D(), m(), b(), r(), L = t(v()), j(), fe(), R = _(), z = ne, B = ie, V = oe, H = RegExp(`^(?:${w().source})$`, `u`), U = 8, he = 140, ge = c(null), W = e => {
        let t = e?.trim();
        if (t && (H.test(t) || !(Array.from(t).length > U || /^\p{L}$/u.test(t)))) return t
    }, _e = e => {
        "use forget";
        let t = (0, me.c)(30),
            {
                business: n,
                entityCategory: r,
                icon: i,
                isSelected: a,
                isHovered: o,
                isMinimized: ee,
                enableImageHover: s,
                routeStopIndex: c
            } = e,
            l = ee !== void 0 && ee,
            u = s === void 0 || s,
            d = c != null,
            f = n.reconciled_thumbnails?.[0]?.image_url ?? n.image_urls?.[0] ?? n.image_url,
            {
                data: m
            } = x(u && d && o ? f : null),
            h = u && d && o && m != null,
            g, _;
        t[0] === i ? (g = t[1], _ = t[2]) : (g = W(i), _ = g && H.test(g) ? `text-sm leading-none` : `px-1.5 text-xs font-semibold leading-none`, t[0] = i, t[1] = g, t[2] = _);
        let v = _;
        if (h) {
            let e;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, R.jsx)(`div`, {
                className: `absolute start-1/2 top-[calc(100%-1px)] z-0 h-0 w-0 -translate-x-1/2 border-s-[12px] border-e-[12px] border-t-[12px] border-s-transparent border-e-transparent border-t-white`
            }), t[3] = e) : e = t[3];
            let n;
            return t[4] === m.src ? n = t[5] : (n = (0, R.jsxs)(`div`, {
                className: `relative flex h-16 min-w-16 items-center justify-center overflow-visible rounded-full border-[4.5px] border-white bg-black bg-clip-padding shadow-[0px_9px_7px_rgba(0,0,0,0.1),0px_23px_17px_rgba(0,0,0,0.1)] transition-all duration-150 ease-out`,
                children: [e, (0, R.jsx)(`img`, {
                    src: m.src,
                    alt: ``,
                    className: `relative z-10 h-full w-full rounded-full object-cover`
                })]
            }), t[4] = m.src, t[5] = n), n
        }
        if (l && !d) {
            let e = o && `scale-125`,
                n;
            t[6] === e ? n = t[7] : (n = p(`shadow-elevation-03 relative flex size-2 items-center justify-center rounded-full bg-white transition-transform duration-150 ease-out`, e), t[6] = e, t[7] = n);
            let r;
            t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, R.jsx)(`div`, {
                className: `size-1 rounded-full bg-black`
            }), t[8] = r) : r = t[8];
            let i;
            return t[9] === n ? i = t[10] : (i = (0, R.jsx)(`div`, {
                "data-testid": `business-marker-pin`,
                className: n,
                children: r
            }), t[9] = n, t[10] = i), i
        }
        let y = d ? `h-8 min-w-8` : `h-7 min-w-7`,
            b = d && a ? `border-white bg-black text-white dark:border-black dark:bg-white dark:text-black` : d ? `border-token-border-default bg-white text-black dark:bg-black dark:text-white` : a ? `bg-token-interactive-bg-primary-press text-token-interactive-label-primary-press border-2 border-white dark:border-black` : `border-token-border-default bg-token-bg-primary`,
            S = o && `scale-110 border-2`,
            C = o && !a && `border-black dark:border-white`,
            w;
        t[11] !== y || t[12] !== b || t[13] !== S || t[14] !== C ? (w = p(`shadow-elevation-03 relative flex items-center justify-center rounded-full border bg-clip-padding text-xs font-medium transition-all duration-150 ease-out`, y, b, S, C), t[11] = y, t[12] = b, t[13] = S, t[14] = C, t[15] = w) : w = t[15];
        let T;
        t[16] !== d || t[17] !== a ? (T = a && !d && (0, R.jsx)(`div`, {
            className: `pointer-events-none absolute start-1/2 top-full z-0 h-0 w-0 -translate-x-1/2 translate-y-px border-s-4 border-e-4 border-t-4 border-s-transparent border-e-transparent border-t-white dark:border-t-black`
        }), t[16] = d, t[17] = a, t[18] = T) : T = t[18];
        let E;
        t[19] !== n.rating || t[20] !== r || t[21] !== d || t[22] !== g || t[23] !== v || t[24] !== c ? (E = (0, R.jsx)(`div`, {
            className: `relative z-10`,
            children: g ? (0, R.jsx)(`span`, {
                className: v,
                children: g
            }) : d ? (0, R.jsx)(`span`, {
                className: `px-2 font-semibold`,
                children: c
            }) : n.rating ? (0, R.jsxs)(`div`, {
                className: `flex items-center gap-0.75 px-2`,
                children: [(0, R.jsx)(z, {
                    className: `h-3 w-3`
                }), (0, R.jsx)(`span`, {
                    children: n.rating?.toFixed(1)
                })]
            }) : r === `local_business` ? (0, R.jsx)(B, {
                className: `h-3 w-3`
            }) : (0, R.jsx)(V, {
                className: `h-3 w-3`
            })
        }), t[19] = n.rating, t[20] = r, t[21] = d, t[22] = g, t[23] = v, t[24] = c, t[25] = E) : E = t[25];
        let te;
        return t[26] !== E || t[27] !== w || t[28] !== T ? (te = (0, R.jsxs)(`div`, {
            "data-testid": `business-marker-pin`,
            className: w,
            children: [T, E]
        }), t[26] = E, t[27] = w, t[28] = T, t[29] = te) : te = t[29], te
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
    let o = (t ? E : T).replace(`mapbox://styles/`, ``),
        {
            longitude: ee,
            latitude: s
        } = e,
        c = ee.toFixed(X),
        l = s.toFixed(X),
        u = n.toFixed(Z),
        d = new URL(`https://api.mapbox.com/styles/v1/${o}/static/${c},${l},${u},0,0/${r}x${i}@${a}x`);
    return d.searchParams.set(`access_token`, O), d.searchParams.set(`logo`, `false`), d.searchParams.set(`attribution`, `false`), d.toString()
}

function xe(e) {
    "use forget";
    let t = (0, q.c)(27),
        {
            business: n,
            width: r,
            height: i,
            alt: a,
            imageClassName: o,
            marker: s
        } = e,
        c = a === void 0 ? `` : a,
        l = ee(),
        u, d, f, m;
    if (t[0] !== n.latitude || t[1] !== n.longitude || t[2] !== i || t[3] !== l || t[4] !== r) {
        m = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            if (u = K(n.latitude, n.longitude), !u) {
                m = null;
                break bb0
            }
            d = Q,
            f = be({
                coordinates: u,
                isDarkMode: l,
                width: r,
                height: i
            })
        }
        t[0] = n.latitude, t[1] = n.longitude, t[2] = i, t[3] = l, t[4] = r, t[5] = u, t[6] = d, t[7] = f, t[8] = m
    } else u = t[5], d = t[6], f = t[7], m = t[8];
    if (m !== Symbol.for(`react.early_return_sentinel`)) return m;
    let h = f,
        g;
    t[9] !== c || t[10] !== u || t[11] !== o || t[12] !== l || t[13] !== d || t[14] !== h ? (g = d ? (0, J.jsx)(`span`, {
        className: p(`pointer-events-none block size-full [&_.mapboxgl-control-container]:hidden`, o),
        role: c ? `img` : void 0,
        "aria-label": c || void 0,
        "aria-hidden": !c || void 0,
        children: (0, J.jsx)(ue, {
            latitude: u.latitude,
            longitude: u.longitude,
            zoom: Y,
            bearing: 0,
            pitch: 0,
            mapStyle: l ? E : T,
            mapboxAccessToken: O,
            RTLTextPlugin: ce(),
            interactive: !1,
            attributionControl: !1
        })
    }) : (0, J.jsx)(`img`, {
        src: h,
        alt: c,
        draggable: !1,
        className: p(`m-0 block size-full object-cover select-none`, o),
        loading: `lazy`,
        decoding: `async`
    }), t[9] = c, t[10] = u, t[11] = o, t[12] = l, t[13] = d, t[14] = h, t[15] = g) : g = t[15];
    let _ = s == null ? `-translate-y-full` : `-translate-y-1/2`,
        v;
    t[16] === _ ? v = t[17] : (v = p(`pointer-events-none absolute start-1/2 top-1/2 -translate-x-1/2`, _), t[16] = _, t[17] = v);
    let y;
    t[18] !== n || t[19] !== s ? (y = s ?? (0, J.jsx)(_e, {
        business: n,
        entityCategory: `local_business`,
        isSelected: !0,
        isHovered: !1
    }), t[18] = n, t[19] = s, t[20] = y) : y = t[20];
    let b;
    t[21] !== v || t[22] !== y ? (b = (0, J.jsx)(`span`, {
        className: v,
        children: y
    }), t[21] = v, t[22] = y, t[23] = b) : b = t[23];
    let x;
    return t[24] !== g || t[25] !== b ? (x = (0, J.jsxs)(`span`, {
        className: `relative block size-full`,
        children: [g, b]
    }), t[24] = g, t[25] = b, t[26] = x) : x = t[26], x
}
var q, J, Y, X, Z, Q, Se = e((() => {
    q = y(), l(), k(), m(), A(), j(), G(), S(), J = _(), Y = 15, X = 7, Z = 4, Q = !1
}));
export {
    pe as a, Se as i, be as n, G as o, K as r, xe as t
};
//# sourceMappingURL=871633a6-h8uusz6y6587z8ov.js.map