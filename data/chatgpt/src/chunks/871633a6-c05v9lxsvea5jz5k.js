import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    C8 as r,
    J5 as i,
    N5 as a,
    SN as o,
    Xy as s,
    Y5 as c,
    Zy as l,
    _nt as u,
    cn as d,
    fF as f,
    h8 as p,
    mF as m,
    x5 as h,
    yN as g,
    ynt as _
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as v,
    Vn as y,
    wn as b
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $B as x,
    cwt as S,
    eV as C,
    flt as w,
    llt as T,
    lwt as ee,
    mlt as E,
    out as te,
    plt as D,
    sut as O
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    $v as ne,
    Qv as re,
    Rv as ie,
    ey as ae,
    ty as oe,
    zv as se
} from "./30901919-7dzdc1ou0jtwkwpt.js";
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
var M, N, de, P, F, fe, pe = e((() => {
    M = `bgaZlG_businessTooltipIn`, N = `bgaZlG_businessTooltipOut`, de = `bgaZlG_tooltipClosing`, P = `bgaZlG_tooltipContent`, F = `bgaZlG_tooltipOpen`, fe = {
        businessTooltipIn: M,
        businessTooltipOut: N,
        tooltipClosing: de,
        tooltipContent: P,
        tooltipOpen: F
    }
}));

function me(e) {
    "use forget";
    let t = (0, he.c)(81),
        {
            entitySearchResult: n,
            tooltipContent: r,
            enableImageHover: c,
            onOpenChange: l,
            isSelected: f,
            isVisible: p,
            isSonicSidebarEnabled: g,
            isProvisional: _,
            onClick: v,
            routeStopIndex: y,
            tooltipLocation: b,
            isEntranceReady: x
        } = e,
        S = c === void 0 || c,
        C = _ !== void 0 && _,
        w = b === void 0 ? `top` : b,
        T = x === void 0 || x,
        ee = o(),
        E = m(),
        D = (0, I.useId)(),
        O = n.entity_data,
        ne = n.entity_category ?? `local_business`,
        re = v != null && (g || C),
        [ie, ae] = (0, I.useState)(!1),
        [oe, se] = (0, I.useState)(!1),
        [ce, k] = (0, I.useState)(`closed`),
        [A, ue] = (0, I.useState)(!1),
        [j, M] = (0, I.useState)(!1),
        N = (0, I.useRef)(null),
        de;
    t[0] !== O.id || t[1] !== E ? (de = () => E ? te(E).hoveredBusinessId$() === O.id : !1, t[0] = O.id, t[1] = E, t[2] = de) : de = t[2];
    let P = !!a(de) || ie || oe,
        F = C && !P,
        pe;
    t[3] === D ? pe = t[4] : (pe = () => _e() === D, t[3] = D, t[4] = pe);
    let me = a(pe) && (ce !== `closed` || A),
        R;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (R = () => {
        N.current &&= (clearTimeout(N.current), null)
    }, t[5] = R) : R = t[5];
    let z = R,
        B;
    t[6] === D ? B = t[7] : (B = () => {
        z(), k(`closing`), N.current = setTimeout(() => {
            k(`closed`), h(_e) === D && _e.set(null), N.current = null
        }, ge)
    }, t[6] = D, t[7] = B);
    let V = B,
        H, U;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (U = () => z, H = [z], t[8] = H, t[9] = U) : (H = t[8], U = t[9]), (0, I.useEffect)(U, H);
    let W, G;
    t[10] !== A || t[11] !== l || t[12] !== j || t[13] !== V ? (W = () => {
        if (A) {
            M(!1), z(), k(`open`);
            return
        }
        j && (M(!1), l?.(!1), V())
    }, G = [z, A, l, j, V], t[10] = A, t[11] = l, t[12] = j, t[13] = V, t[14] = W, t[15] = G) : (W = t[14], G = t[15]), (0, I.useEffect)(W, G);
    let xe = O.longitude,
        Se = O.latitude,
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
    t[20] === O.id ? Y = t[21] : (Y = ye(O.id), t[20] = O.id, t[21] = Y);
    let X;
    t[22] === Y ? X = t[23] : (X = {
        duration: .15,
        ease: `easeInOut`,
        delay: Y
    }, t[22] = Y, t[23] = X);
    let Z;
    t[24] !== O.id || t[25] !== O.name || t[26] !== E?.id ? (Z = () => {
        ae(!0), u.logStructuredEvent(`ChatgptPlacesMarkerHovered`, {
            entityId: O.id,
            entityName: O.name,
            conversationId: E?.id ?? ``
        })
    }, t[24] = O.id, t[25] = O.name, t[26] = E?.id, t[27] = Z) : Z = t[27];
    let Ce;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (Ce = () => ae(!1), t[28] = Ce) : Ce = t[28];
    let Q;
    t[29] !== O || t[30] !== S || t[31] !== ne || t[32] !== n.mapPointIcon || t[33] !== P || t[34] !== F || t[35] !== f || t[36] !== y ? (Q = (0, L.jsx)(ve, {
        business: O,
        entityCategory: ne,
        icon: n.mapPointIcon,
        isSelected: f,
        isHovered: P,
        isMinimized: F,
        enableImageHover: S,
        routeStopIndex: y
    }), t[29] = O, t[30] = S, t[31] = ne, t[32] = n.mapPointIcon, t[33] = P, t[34] = F, t[35] = f, t[36] = y, t[37] = Q) : Q = t[37];
    let $;
    t[38] !== O.name || t[39] !== C || t[40] !== F || t[41] !== p ? ($ = !F && (0, L.jsx)(`div`, {
        "data-testid": `business-marker-label`,
        "data-map-label-blocker": ``,
        style: {
            opacity: p || C ? 1 : 0
        },
        className: `pointer-events-none absolute start-1/2 top-full max-w-[150px] -translate-x-1/2 truncate font-bold text-gray-800 [text-shadow:-0.8px_-0.8px_0_#fff,0.8px_-0.8px_0_#fff,-0.8px_0.8px_0_#fff,0.8px_0.8px_0_#fff] motion-safe:transition-opacity motion-safe:duration-1000 motion-safe:ease-out dark:text-gray-100 dark:[text-shadow:-0.8px_-0.8px_0_#000,0.8px_-0.8px_0_#000,-0.8px_0.8px_0_#000,0.8px_0.8px_0_#000]`,
        children: O.name
    }), t[38] = O.name, t[39] = C, t[40] = F, t[41] = p, t[42] = $) : $ = t[42];
    let we;
    t[43] !== O.name || t[44] !== re || t[45] !== F || t[46] !== v ? (we = re ? (0, L.jsx)(`button`, {
        type: `button`,
        "aria-label": O.name,
        className: i(`absolute cursor-pointer border-0 bg-transparent p-0`, F ? `start-1/2 bottom-0 size-7 -translate-x-1/2 rounded-full` : `inset-0 rounded-xl`),
        "data-testid": `business-marker-hitbox`,
        onFocus: () => se(!0),
        onBlur: () => se(!1),
        onClick: e => {
            e.preventDefault(), v()
        }
    }) : (0, L.jsx)(`div`, {
        className: i(`absolute`, F ? `start-1/2 bottom-0 size-7 -translate-x-1/2 rounded-full` : `inset-0 rounded-xl`),
        "data-testid": `business-marker-hitbox`
    }), t[43] = O.name, t[44] = re, t[45] = F, t[46] = v, t[47] = we) : we = t[47];
    let Te;
    t[48] !== O.latitude || t[49] !== O.longitude || t[50] !== q || t[51] !== X || t[52] !== Z || t[53] !== Q || t[54] !== $ || t[55] !== we ? (Te = (0, L.jsxs)(d.div, {
        className: `relative`,
        "data-map-marker-longitude": xe,
        "data-map-marker-latitude": Se,
        initial: K,
        animate: q,
        exit: J,
        transition: X,
        onMouseEnter: Z,
        onMouseLeave: Ce,
        children: [Q, $, we]
    }), t[48] = O.latitude, t[49] = O.longitude, t[50] = q, t[51] = X, t[52] = Z, t[53] = Q, t[54] = $, t[55] = we, t[56] = Te) : Te = t[56];
    let Ee = Te,
        De;
    t[57] !== O.id || t[58] !== ee || t[59] !== A || t[60] !== me || t[61] !== Ee || t[62] !== D || t[63] !== l || t[64] !== V || t[65] !== r || t[66] !== w || t[67] !== ce ? (De = r ? (0, L.jsx)(s, {
        label: (0, L.jsx)(`div`, {
            onPointerEnter: () => {
                z(), k(`open`)
            },
            children: typeof r == `function` ? r({
                onProviderPickerOpenChange: ue
            }) : r
        }),
        open: me,
        onOpenChange: e => {
            if (e) {
                _e.set(D), l?.(e), M(!1), z(), k(`open`);
                return
            }
            if (A) {
                M(!0), k(`open`);
                return
            }
            l?.(e), V()
        },
        delayDuration: 200,
        theme: ee ? `default` : `white`,
        customPaddingClassName: `bg-clip-padding`,
        customBorderClassName: `border-token-border-default border`,
        contentClassName: i(fe.tooltipContent, ce === `closing` ? fe.tooltipClosing : fe.tooltipOpen, `rounded-[20px]!`),
        side: w,
        sideOffset: 10,
        wide: !0,
        interactive: !0,
        children: Ee
    }, O.id) : Ee, t[57] = O.id, t[58] = ee, t[59] = A, t[60] = me, t[61] = Ee, t[62] = D, t[63] = l, t[64] = V, t[65] = r, t[66] = w, t[67] = ce, t[68] = De) : De = t[68];
    let Oe = De,
        ke = O.id,
        Ae = O.longitude,
        je = O.latitude,
        Me = !!n.isModelPreferred,
        Ne;
    t[69] !== P || t[70] !== f || t[71] !== Me ? (Ne = be({
        isSelected: f,
        isModelPreferred: Me,
        isHovered: P
    }), t[69] = P, t[70] = f, t[71] = Me, t[72] = Ne) : Ne = t[72];
    let Pe;
    t[73] === Ne ? Pe = t[74] : (Pe = {
        zIndex: Ne
    }, t[73] = Ne, t[74] = Pe);
    let Fe;
    return t[75] !== O.id || t[76] !== O.latitude || t[77] !== O.longitude || t[78] !== Oe || t[79] !== Pe ? (Fe = (0, L.jsx)(le, {
        longitude: Ae,
        latitude: je,
        anchor: `bottom`,
        pitchAlignment: `viewport`,
        rotationAlignment: `viewport`,
        occludedOpacity: 1,
        style: Pe,
        children: Oe
    }, ke), t[75] = O.id, t[76] = O.latitude, t[77] = O.longitude, t[78] = Oe, t[79] = Pe, t[80] = Fe) : Fe = t[80], Fe
}
var he, I, L, R, z, B, V, H, ge, _e, U, ve, ye, be, W = e((() => {
    he = b(), f(), se(), ae(), re(), l(), O(), p(), _(), g(), S(), c(), C(), n(), I = t(y()), j(), pe(), L = v(), R = ne, z = ie, B = oe, V = RegExp(`^(?:${x().source})$`, `u`), H = 8, ge = 140, _e = r(null), U = e => {
        let t = e?.trim();
        if (t && (V.test(t) || !(Array.from(t).length > H || /^\p{L}$/u.test(t)))) return t
    }, ve = e => {
        "use forget";
        let t = (0, he.c)(30),
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
            } = ee(f && p && s ? m : null),
            g = f && p && s && h != null,
            _, v;
        t[0] === a ? (_ = t[1], v = t[2]) : (_ = U(a), v = _ && V.test(_) ? `text-sm leading-none` : `px-1.5 text-xs font-semibold leading-none`, t[0] = a, t[1] = _, t[2] = v);
        let y = v;
        if (g) {
            let e;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, L.jsx)(`div`, {
                className: `absolute start-1/2 top-[calc(100%-1px)] z-0 h-0 w-0 -translate-x-1/2 border-s-[12px] border-e-[12px] border-t-[12px] border-s-transparent border-e-transparent border-t-white`
            }), t[3] = e) : e = t[3];
            let n;
            return t[4] === h.src ? n = t[5] : (n = (0, L.jsxs)(`div`, {
                className: `relative flex h-16 min-w-16 items-center justify-center overflow-visible rounded-full border-[4.5px] border-white bg-black bg-clip-padding shadow-[0px_9px_7px_rgba(0,0,0,0.1),0px_23px_17px_rgba(0,0,0,0.1)] transition-all duration-150 ease-out`,
                children: [e, (0, L.jsx)(`img`, {
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
            t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, L.jsx)(`div`, {
                className: `size-1 rounded-full bg-black`
            }), t[8] = r) : r = t[8];
            let a;
            return t[9] === n ? a = t[10] : (a = (0, L.jsx)(`div`, {
                "data-testid": `business-marker-pin`,
                className: n,
                children: r
            }), t[9] = n, t[10] = a), a
        }
        let b = p ? `h-8 min-w-8` : `h-7 min-w-7`,
            x = p && o ? `border-white bg-black text-white dark:border-black dark:bg-white dark:text-black` : p ? `border-token-border-default bg-white text-black dark:bg-black dark:text-white` : o ? `bg-token-interactive-bg-primary-press text-token-interactive-label-primary-press border-2 border-white dark:border-black` : `border-token-border-default bg-token-bg-primary`,
            S = s && `scale-110 border-2`,
            C = s && !o && `border-black dark:border-white`,
            w;
        t[11] !== b || t[12] !== x || t[13] !== S || t[14] !== C ? (w = i(`shadow-elevation-03 relative flex items-center justify-center rounded-full border bg-clip-padding text-xs font-medium transition-all duration-150 ease-out`, b, x, S, C), t[11] = b, t[12] = x, t[13] = S, t[14] = C, t[15] = w) : w = t[15];
        let T;
        t[16] !== p || t[17] !== o ? (T = o && !p && (0, L.jsx)(`div`, {
            className: `pointer-events-none absolute start-1/2 top-full z-0 h-0 w-0 -translate-x-1/2 translate-y-px border-s-4 border-e-4 border-t-4 border-s-transparent border-e-transparent border-t-white dark:border-t-black`
        }), t[16] = p, t[17] = o, t[18] = T) : T = t[18];
        let E;
        t[19] !== n.rating || t[20] !== r || t[21] !== p || t[22] !== _ || t[23] !== y || t[24] !== u ? (E = (0, L.jsx)(`div`, {
            className: `relative z-10`,
            children: _ ? (0, L.jsx)(`span`, {
                className: y,
                children: _
            }) : p ? (0, L.jsx)(`span`, {
                className: `px-2 font-semibold`,
                children: u
            }) : n.rating ? (0, L.jsxs)(`div`, {
                className: `flex items-center gap-0.75 px-2`,
                children: [(0, L.jsx)(R, {
                    className: `h-3 w-3`
                }), (0, L.jsx)(`span`, {
                    children: n.rating?.toFixed(1)
                })]
            }) : r === `local_business` ? (0, L.jsx)(z, {
                className: `h-3 w-3`
            }) : (0, L.jsx)(B, {
                className: `h-3 w-3`
            })
        }), t[19] = n.rating, t[20] = r, t[21] = p, t[22] = _, t[23] = y, t[24] = u, t[25] = E) : E = t[25];
        let te;
        return t[26] !== E || t[27] !== w || t[28] !== T ? (te = (0, L.jsxs)(`div`, {
            "data-testid": `business-marker-pin`,
            className: w,
            children: [T, E]
        }), t[26] = E, t[27] = w, t[28] = T, t[29] = te) : te = t[29], te
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
    let o = (t ? T : w).replace(`mapbox://styles/`, ``),
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
            if (f = G(n.latitude, n.longitude), !f) {
                h = null;
                break bb0
            }
            p = Z,
            m = xe({
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
    t[9] !== u || t[10] !== f || t[11] !== c || t[12] !== d || t[13] !== p || t[14] !== g ? (_ = p ? (0, q.jsx)(`span`, {
        className: i(`pointer-events-none block size-full [&_.mapboxgl-control-container]:hidden`, c),
        role: u ? `img` : void 0,
        "aria-label": u || void 0,
        "aria-hidden": !u || void 0,
        children: (0, q.jsx)(ue, {
            latitude: f.latitude,
            longitude: f.longitude,
            zoom: J,
            bearing: 0,
            pitch: 0,
            mapStyle: d ? T : w,
            mapboxAccessToken: D,
            RTLTextPlugin: ce(),
            interactive: !1,
            attributionControl: !1
        })
    }) : (0, q.jsx)(`img`, {
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
    t[18] !== n || t[19] !== l ? (b = l ?? (0, q.jsx)(ve, {
        business: n,
        entityCategory: `local_business`,
        isSelected: !0,
        isHovered: !1
    }), t[18] = n, t[19] = l, t[20] = b) : b = t[20];
    let x;
    t[21] !== y || t[22] !== b ? (x = (0, q.jsx)(`span`, {
        className: y,
        children: b
    }), t[21] = y, t[22] = b, t[23] = x) : x = t[23];
    let S;
    return t[24] !== _ || t[25] !== x ? (S = (0, q.jsxs)(`span`, {
        className: `relative block size-full`,
        children: [_, x]
    }), t[24] = _, t[25] = x, t[26] = S) : S = t[26], S
}
var K, q, J, Y, X, Z, Ce = e((() => {
    K = b(), g(), k(), c(), A(), j(), W(), E(), q = v(), J = 15, Y = 7, X = 4, Z = !1
}));
export {
    me as a, Ce as i, xe as n, W as o, G as r, Se as t
};
//# sourceMappingURL=871633a6-c05v9lxsvea5jz5k.js.map