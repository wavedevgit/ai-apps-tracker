import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    F5 as r,
    Int as i,
    L8 as a,
    ON as o,
    Pnt as s,
    Qy as c,
    TN as l,
    Zy as u,
    bF as d,
    c7 as f,
    cn as p,
    k8 as m,
    l7 as h,
    q5 as g,
    vF as _
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as v,
    Vn as y,
    wn as b
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    OV as x,
    alt as S,
    awt as C,
    clt as w,
    iwt as T,
    kV as E,
    llt as D,
    nut as ee,
    rut as O,
    ult as k
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    $v as te,
    Qv as ne,
    Rv as re,
    ey as ie,
    ty as ae,
    zv as oe
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    n as se,
    r as A,
    t as j
} from "./24c0da2c-bx2qul3cpe0cu1wg.js";
import {
    i as ce,
    r as le,
    t as ue
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
            tooltipContent: i,
            enableImageHover: a,
            onOpenChange: c,
            isSelected: l,
            isVisible: m,
            isSonicSidebarEnabled: h,
            isProvisional: _,
            onClick: v,
            routeStopIndex: y,
            tooltipLocation: b,
            isEntranceReady: x
        } = e,
        S = a === void 0 || a,
        C = _ !== void 0 && _,
        w = b === void 0 ? `top` : b,
        T = x === void 0 || x,
        E = o(),
        D = d(),
        O = (0, L.useId)(),
        k = n.entity_data,
        te = n.entity_category ?? `local_business`,
        ne = v != null && (h || C),
        [re, ie] = (0, L.useState)(!1),
        [ae, oe] = (0, L.useState)(!1),
        [se, A] = (0, L.useState)(`closed`),
        [j, le] = (0, L.useState)(!1),
        [ue, M] = (0, L.useState)(!1),
        N = (0, L.useRef)(null),
        P;
    t[0] !== k.id || t[1] !== D ? (P = () => D ? ee(D).hoveredBusinessId$() === k.id : !1, t[0] = k.id, t[1] = D, t[2] = P) : P = t[2];
    let F = !!g(P) || re || ae,
        I = C && !F,
        fe;
    t[3] === O ? fe = t[4] : (fe = () => _e() === O, t[3] = O, t[4] = fe);
    let pe = g(fe) && (se !== `closed` || j),
        he;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (he = () => {
        N.current &&= (clearTimeout(N.current), null)
    }, t[5] = he) : he = t[5];
    let z = he,
        B;
    t[6] === O ? B = t[7] : (B = () => {
        z(), A(`closing`), N.current = setTimeout(() => {
            A(`closed`), r(_e) === O && _e.set(null), N.current = null
        }, ge)
    }, t[6] = O, t[7] = B);
    let V = B,
        H, U;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (U = () => z, H = [z], t[8] = H, t[9] = U) : (H = t[8], U = t[9]), (0, L.useEffect)(U, H);
    let W, G;
    t[10] !== j || t[11] !== c || t[12] !== ue || t[13] !== V ? (W = () => {
        if (j) {
            M(!1), z(), A(`open`);
            return
        }
        ue && (M(!1), c?.(!1), V())
    }, G = [z, j, c, ue, V], t[10] = j, t[11] = c, t[12] = ue, t[13] = V, t[14] = W, t[15] = G) : (W = t[14], G = t[15]), (0, L.useEffect)(W, G);
    let xe = k.longitude,
        Se = k.latitude,
        K;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (K = {
        opacity: 0,
        scale: .9,
        translateY: -50
    }, t[16] = K) : K = t[16];
    let q;
    t[17] === T ? q = t[18] : (q = T ? {
        opacity: 1,
        scale: 1,
        translateY: 0
    } : {
        opacity: 0,
        scale: .9,
        translateY: -50
    }, t[17] = T, t[18] = q);
    let J;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (J = {
        opacity: 0,
        scale: 0,
        transition: {
            duration: .1,
            ease: `easeInOut`
        }
    }, t[19] = J) : J = t[19];
    let Y;
    t[20] === k.id ? Y = t[21] : (Y = ye(k.id), t[20] = k.id, t[21] = Y);
    let X;
    t[22] === Y ? X = t[23] : (X = {
        duration: .15,
        ease: `easeInOut`,
        delay: Y
    }, t[22] = Y, t[23] = X);
    let Z;
    t[24] !== k.id || t[25] !== k.name || t[26] !== D?.id ? (Z = () => {
        ie(!0), s.logStructuredEvent(`ChatgptPlacesMarkerHovered`, {
            entityId: k.id,
            entityName: k.name,
            conversationId: D?.id ?? ``
        })
    }, t[24] = k.id, t[25] = k.name, t[26] = D?.id, t[27] = Z) : Z = t[27];
    let Ce;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (Ce = () => ie(!1), t[28] = Ce) : Ce = t[28];
    let Q;
    t[29] !== k || t[30] !== S || t[31] !== te || t[32] !== n.mapPointIcon || t[33] !== F || t[34] !== I || t[35] !== l || t[36] !== y ? (Q = (0, R.jsx)(ve, {
        business: k,
        entityCategory: te,
        icon: n.mapPointIcon,
        isSelected: l,
        isHovered: F,
        isMinimized: I,
        enableImageHover: S,
        routeStopIndex: y
    }), t[29] = k, t[30] = S, t[31] = te, t[32] = n.mapPointIcon, t[33] = F, t[34] = I, t[35] = l, t[36] = y, t[37] = Q) : Q = t[37];
    let we;
    t[38] !== k.name || t[39] !== C || t[40] !== I || t[41] !== m ? (we = !I && (0, R.jsx)(`div`, {
        "data-testid": `business-marker-label`,
        "data-map-label-blocker": ``,
        style: {
            opacity: m || C ? 1 : 0
        },
        className: `pointer-events-none absolute start-1/2 top-full max-w-[150px] -translate-x-1/2 truncate font-bold text-gray-800 [text-shadow:-0.8px_-0.8px_0_#fff,0.8px_-0.8px_0_#fff,-0.8px_0.8px_0_#fff,0.8px_0.8px_0_#fff] motion-safe:transition-opacity motion-safe:duration-1000 motion-safe:ease-out dark:text-gray-100 dark:[text-shadow:-0.8px_-0.8px_0_#000,0.8px_-0.8px_0_#000,-0.8px_0.8px_0_#000,0.8px_0.8px_0_#000]`,
        children: k.name
    }), t[38] = k.name, t[39] = C, t[40] = I, t[41] = m, t[42] = we) : we = t[42];
    let Te;
    t[43] !== k.name || t[44] !== ne || t[45] !== I || t[46] !== v ? (Te = ne ? (0, R.jsx)(`button`, {
        type: `button`,
        "aria-label": k.name,
        className: f(`absolute cursor-pointer border-0 bg-transparent p-0`, I ? `start-1/2 bottom-0 size-7 -translate-x-1/2 rounded-full` : `inset-0 rounded-xl`),
        "data-testid": `business-marker-hitbox`,
        onFocus: () => oe(!0),
        onBlur: () => oe(!1),
        onClick: e => {
            e.preventDefault(), v()
        }
    }) : (0, R.jsx)(`div`, {
        className: f(`absolute`, I ? `start-1/2 bottom-0 size-7 -translate-x-1/2 rounded-full` : `inset-0 rounded-xl`),
        "data-testid": `business-marker-hitbox`
    }), t[43] = k.name, t[44] = ne, t[45] = I, t[46] = v, t[47] = Te) : Te = t[47];
    let Ee;
    t[48] !== k.latitude || t[49] !== k.longitude || t[50] !== q || t[51] !== X || t[52] !== Z || t[53] !== Q || t[54] !== we || t[55] !== Te ? (Ee = (0, R.jsxs)(p.div, {
        className: `relative`,
        "data-map-marker-longitude": xe,
        "data-map-marker-latitude": Se,
        initial: K,
        animate: q,
        exit: J,
        transition: X,
        onMouseEnter: Z,
        onMouseLeave: Ce,
        children: [Q, we, Te]
    }), t[48] = k.latitude, t[49] = k.longitude, t[50] = q, t[51] = X, t[52] = Z, t[53] = Q, t[54] = we, t[55] = Te, t[56] = Ee) : Ee = t[56];
    let De = Ee,
        Oe;
    t[57] !== k.id || t[58] !== E || t[59] !== j || t[60] !== pe || t[61] !== De || t[62] !== O || t[63] !== c || t[64] !== V || t[65] !== i || t[66] !== w || t[67] !== se ? (Oe = i ? (0, R.jsx)(u, {
        label: (0, R.jsx)(`div`, {
            onPointerEnter: () => {
                z(), A(`open`)
            },
            children: typeof i == `function` ? i({
                onProviderPickerOpenChange: le
            }) : i
        }),
        open: pe,
        onOpenChange: e => {
            if (e) {
                _e.set(O), c?.(e), M(!1), z(), A(`open`);
                return
            }
            if (j) {
                M(!0), A(`open`);
                return
            }
            c?.(e), V()
        },
        delayDuration: 200,
        theme: E ? `default` : `white`,
        customPaddingClassName: `bg-clip-padding`,
        customBorderClassName: `border-token-border-default border`,
        contentClassName: f(de.tooltipContent, se === `closing` ? de.tooltipClosing : de.tooltipOpen, `rounded-[20px]!`),
        side: w,
        sideOffset: 10,
        wide: !0,
        interactive: !0,
        children: De
    }, k.id) : De, t[57] = k.id, t[58] = E, t[59] = j, t[60] = pe, t[61] = De, t[62] = O, t[63] = c, t[64] = V, t[65] = i, t[66] = w, t[67] = se, t[68] = Oe) : Oe = t[68];
    let ke = Oe,
        Ae = k.id,
        je = k.longitude,
        Me = k.latitude,
        Ne = !!n.isModelPreferred,
        Pe;
    t[69] !== F || t[70] !== l || t[71] !== Ne ? (Pe = be({
        isSelected: l,
        isModelPreferred: Ne,
        isHovered: F
    }), t[69] = F, t[70] = l, t[71] = Ne, t[72] = Pe) : Pe = t[72];
    let $;
    t[73] === Pe ? $ = t[74] : ($ = {
        zIndex: Pe
    }, t[73] = Pe, t[74] = $);
    let Fe;
    return t[75] !== k.id || t[76] !== k.latitude || t[77] !== k.longitude || t[78] !== ke || t[79] !== $ ? (Fe = (0, R.jsx)(ce, {
        longitude: je,
        latitude: Me,
        anchor: `bottom`,
        pitchAlignment: `viewport`,
        rotationAlignment: `viewport`,
        occludedOpacity: 1,
        style: $,
        children: ke
    }, Ae), t[75] = k.id, t[76] = k.latitude, t[77] = k.longitude, t[78] = ke, t[79] = $, t[80] = Fe) : Fe = t[80], Fe
}
var me, L, R, he, z, B, V, H, ge, _e, U, ve, ye, be, W = e((() => {
    me = b(), _(), oe(), ie(), ne(), c(), O(), m(), i(), l(), T(), h(), E(), n(), L = t(y()), ue(), fe(), R = v(), he = te, z = re, B = ae, V = RegExp(`^(?:${x().source})$`, `u`), H = 8, ge = 140, _e = a(null), U = e => {
        let t = e?.trim();
        if (t && (V.test(t) || !(Array.from(t).length > H || /^\p{L}$/u.test(t)))) return t
    }, ve = e => {
        "use forget";
        let t = (0, me.c)(30),
            {
                business: n,
                entityCategory: r,
                icon: i,
                isSelected: a,
                isHovered: o,
                isMinimized: s,
                enableImageHover: c,
                routeStopIndex: l
            } = e,
            u = s !== void 0 && s,
            d = c === void 0 || c,
            p = l != null,
            m = n.reconciled_thumbnails?.[0]?.image_url ?? n.image_urls?.[0] ?? n.image_url,
            {
                data: h
            } = C(d && p && o ? m : null),
            g = d && p && o && h != null,
            _, v;
        t[0] === i ? (_ = t[1], v = t[2]) : (_ = U(i), v = _ && V.test(_) ? `text-sm leading-none` : `px-1.5 text-xs font-semibold leading-none`, t[0] = i, t[1] = _, t[2] = v);
        let y = v;
        if (g) {
            let e;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, R.jsx)(`div`, {
                className: `absolute start-1/2 top-[calc(100%-1px)] z-0 h-0 w-0 -translate-x-1/2 border-s-[12px] border-e-[12px] border-t-[12px] border-s-transparent border-e-transparent border-t-white`
            }), t[3] = e) : e = t[3];
            let n;
            return t[4] === h.src ? n = t[5] : (n = (0, R.jsxs)(`div`, {
                className: `relative flex h-16 min-w-16 items-center justify-center overflow-visible rounded-full border-[4.5px] border-white bg-black bg-clip-padding shadow-[0px_9px_7px_rgba(0,0,0,0.1),0px_23px_17px_rgba(0,0,0,0.1)] transition-all duration-150 ease-out`,
                children: [e, (0, R.jsx)(`img`, {
                    src: h.src,
                    alt: ``,
                    className: `relative z-10 h-full w-full rounded-full object-cover`
                })]
            }), t[4] = h.src, t[5] = n), n
        }
        if (u && !p) {
            let e = o && `scale-125`,
                n;
            t[6] === e ? n = t[7] : (n = f(`shadow-elevation-03 relative flex size-2 items-center justify-center rounded-full bg-white transition-transform duration-150 ease-out`, e), t[6] = e, t[7] = n);
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
        let b = p ? `h-8 min-w-8` : `h-7 min-w-7`,
            x = p && a ? `border-white bg-black text-white dark:border-black dark:bg-white dark:text-black` : p ? `border-token-border-default bg-white text-black dark:bg-black dark:text-white` : a ? `bg-token-interactive-bg-primary-press text-token-interactive-label-primary-press border-2 border-white dark:border-black` : `border-token-border-default bg-token-bg-primary`,
            S = o && `scale-110 border-2`,
            w = o && !a && `border-black dark:border-white`,
            T;
        t[11] !== b || t[12] !== x || t[13] !== S || t[14] !== w ? (T = f(`shadow-elevation-03 relative flex items-center justify-center rounded-full border bg-clip-padding text-xs font-medium transition-all duration-150 ease-out`, b, x, S, w), t[11] = b, t[12] = x, t[13] = S, t[14] = w, t[15] = T) : T = t[15];
        let E;
        t[16] !== p || t[17] !== a ? (E = a && !p && (0, R.jsx)(`div`, {
            className: `pointer-events-none absolute start-1/2 top-full z-0 h-0 w-0 -translate-x-1/2 translate-y-px border-s-4 border-e-4 border-t-4 border-s-transparent border-e-transparent border-t-white dark:border-t-black`
        }), t[16] = p, t[17] = a, t[18] = E) : E = t[18];
        let D;
        t[19] !== n.rating || t[20] !== r || t[21] !== p || t[22] !== _ || t[23] !== y || t[24] !== l ? (D = (0, R.jsx)(`div`, {
            className: `relative z-10`,
            children: _ ? (0, R.jsx)(`span`, {
                className: y,
                children: _
            }) : p ? (0, R.jsx)(`span`, {
                className: `px-2 font-semibold`,
                children: l
            }) : n.rating ? (0, R.jsxs)(`div`, {
                className: `flex items-center gap-0.75 px-2`,
                children: [(0, R.jsx)(he, {
                    className: `h-3 w-3`
                }), (0, R.jsx)(`span`, {
                    children: n.rating?.toFixed(1)
                })]
            }) : r === `local_business` ? (0, R.jsx)(z, {
                className: `h-3 w-3`
            }) : (0, R.jsx)(B, {
                className: `h-3 w-3`
            })
        }), t[19] = n.rating, t[20] = r, t[21] = p, t[22] = _, t[23] = y, t[24] = l, t[25] = D) : D = t[25];
        let ee;
        return t[26] !== D || t[27] !== T || t[28] !== E ? (ee = (0, R.jsxs)(`div`, {
            "data-testid": `business-marker-pin`,
            className: T,
            children: [E, D]
        }), t[26] = D, t[27] = T, t[28] = E, t[29] = ee) : ee = t[29], ee
    }, ye = e => Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0) % 100 / 500, be = ({
        isSelected: e,
        isModelPreferred: t,
        isHovered: n
    }) => n ? 4 : e ? 3 : t ? 2 : 1
}));

function G(e, t) {
    return typeof e == `number` && Number.isFinite(e) && typeof t == `number` && Number.isFinite(t) ? {
        latitude: e,
        longitude: t
    } : null
}

function xe({
    coordinates: e,
    isDarkMode: t,
    zoom: n = J,
    width: r,
    height: i,
    scale: a = 2
}) {
    let o = (t ? S : w).replace(`mapbox://styles/`, ``),
        {
            longitude: s,
            latitude: c
        } = e,
        l = s.toFixed(Y),
        u = c.toFixed(Y),
        d = n.toFixed(X),
        f = new URL(`https://api.mapbox.com/styles/v1/${o}/static/${l},${u},${d},0,0/${r}x${i}@${a}x`);
    return f.searchParams.set(`access_token`, D), f.searchParams.set(`logo`, `false`), f.searchParams.set(`attribution`, `false`), f.toString()
}

function Se(e) {
    "use forget";
    let t = (0, K.c)(27),
        {
            business: n,
            width: r,
            height: i,
            alt: a,
            imageClassName: s,
            marker: c
        } = e,
        l = a === void 0 ? `` : a,
        u = o(),
        d, p, m, h;
    if (t[0] !== n.latitude || t[1] !== n.longitude || t[2] !== i || t[3] !== u || t[4] !== r) {
        h = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            if (d = G(n.latitude, n.longitude), !d) {
                h = null;
                break bb0
            }
            p = Z,
            m = xe({
                coordinates: d,
                isDarkMode: u,
                width: r,
                height: i
            })
        }
        t[0] = n.latitude, t[1] = n.longitude, t[2] = i, t[3] = u, t[4] = r, t[5] = d, t[6] = p, t[7] = m, t[8] = h
    } else d = t[5], p = t[6], m = t[7], h = t[8];
    if (h !== Symbol.for(`react.early_return_sentinel`)) return h;
    let g = m,
        _;
    t[9] !== l || t[10] !== d || t[11] !== s || t[12] !== u || t[13] !== p || t[14] !== g ? (_ = p ? (0, q.jsx)(`span`, {
        className: f(`pointer-events-none block size-full [&_.mapboxgl-control-container]:hidden`, s),
        role: l ? `img` : void 0,
        "aria-label": l || void 0,
        "aria-hidden": !l || void 0,
        children: (0, q.jsx)(le, {
            latitude: d.latitude,
            longitude: d.longitude,
            zoom: J,
            bearing: 0,
            pitch: 0,
            mapStyle: u ? S : w,
            mapboxAccessToken: D,
            RTLTextPlugin: se(),
            interactive: !1,
            attributionControl: !1
        })
    }) : (0, q.jsx)(`img`, {
        src: g,
        alt: l,
        draggable: !1,
        className: f(`m-0 block size-full object-cover select-none`, s),
        loading: `lazy`,
        decoding: `async`
    }), t[9] = l, t[10] = d, t[11] = s, t[12] = u, t[13] = p, t[14] = g, t[15] = _) : _ = t[15];
    let v = c == null ? `-translate-y-full` : `-translate-y-1/2`,
        y;
    t[16] === v ? y = t[17] : (y = f(`pointer-events-none absolute start-1/2 top-1/2 -translate-x-1/2`, v), t[16] = v, t[17] = y);
    let b;
    t[18] !== n || t[19] !== c ? (b = c ?? (0, q.jsx)(ve, {
        business: n,
        entityCategory: `local_business`,
        isSelected: !0,
        isHovered: !1
    }), t[18] = n, t[19] = c, t[20] = b) : b = t[20];
    let x;
    t[21] !== y || t[22] !== b ? (x = (0, q.jsx)(`span`, {
        className: y,
        children: b
    }), t[21] = y, t[22] = b, t[23] = x) : x = t[23];
    let C;
    return t[24] !== _ || t[25] !== x ? (C = (0, q.jsxs)(`span`, {
        className: `relative block size-full`,
        children: [_, x]
    }), t[24] = _, t[25] = x, t[26] = C) : C = t[26], C
}
var K, q, J, Y, X, Z, Ce = e((() => {
    K = b(), l(), A(), h(), j(), ue(), W(), k(), q = v(), J = 15, Y = 7, X = 4, Z = !1
}));
export {
    pe as a, Ce as i, xe as n, W as o, G as r, Se as t
};
//# sourceMappingURL=871633a6-jjlluww31n9cl0bq.js.map