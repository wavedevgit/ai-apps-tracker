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
    cn as te,
    l7 as f,
    u7 as p,
    vF as m,
    znt as h
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as g,
    Vn as _,
    wn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AV as y,
    awt as b,
    dlt as x,
    eut as ne,
    iwt as S,
    kV as C,
    llt as w,
    olt as T,
    tut as E,
    ult as D
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    $v as re,
    Iv as ie,
    Lv as ae,
    Qv as oe,
    Xv as se,
    Zv as ce
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    n as le,
    r as O,
    t as k
} from "./24c0da2c-bx2qul3cpe0cu1wg.js";
import {
    i as ue,
    r as de,
    t as A
} from "./5ab42519-n9cavghro7flx4v9.js";
var j, M, N, P, F, fe, pe = e((() => {
    j = `bgaZlG_businessTooltipIn`, M = `bgaZlG_businessTooltipOut`, N = `bgaZlG_tooltipClosing`, P = `bgaZlG_tooltipContent`, F = `bgaZlG_tooltipOpen`, fe = {
        businessTooltipIn: j,
        businessTooltipOut: M,
        tooltipClosing: N,
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
            enableImageHover: s,
            onOpenChange: c,
            isSelected: l,
            isVisible: p,
            isSonicSidebarEnabled: m,
            isProvisional: h,
            onClick: g,
            routeStopIndex: _,
            tooltipLocation: v,
            isEntranceReady: y
        } = e,
        b = s === void 0 || s,
        x = h !== void 0 && h,
        S = v === void 0 ? `top` : v,
        C = y === void 0 || y,
        w = ee(),
        T = d(),
        E = (0, I.useId)(),
        D = n.entity_data,
        re = n.entity_category ?? `local_business`,
        ie = g != null && (m || x),
        [ae, oe] = (0, I.useState)(!1),
        [se, ce] = (0, I.useState)(!1),
        [le, O] = (0, I.useState)(`closed`),
        [k, de] = (0, I.useState)(!1),
        [A, j] = (0, I.useState)(!1),
        M = (0, I.useRef)(null),
        N;
    t[0] !== D.id || t[1] !== T ? (N = () => T ? ne(T).hoveredBusinessId$() === D.id : !1, t[0] = D.id, t[1] = T, t[2] = N) : N = t[2];
    let P = !!a(N) || ae || se,
        F = x && !P,
        pe;
    t[3] === E ? pe = t[4] : (pe = () => _e() === E, t[3] = E, t[4] = pe);
    let me = a(pe) && (le !== `closed` || k),
        R;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (R = () => {
        M.current &&= (clearTimeout(M.current), null)
    }, t[5] = R) : R = t[5];
    let z = R,
        B;
    t[6] === E ? B = t[7] : (B = () => {
        z(), O(`closing`), M.current = setTimeout(() => {
            O(`closed`), i(_e) === E && _e.set(null), M.current = null
        }, ge)
    }, t[6] = E, t[7] = B);
    let V = B,
        H, U;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (U = () => z, H = [z], t[8] = H, t[9] = U) : (H = t[8], U = t[9]), (0, I.useEffect)(U, H);
    let W, G;
    t[10] !== k || t[11] !== c || t[12] !== A || t[13] !== V ? (W = () => {
        if (k) {
            j(!1), z(), O(`open`);
            return
        }
        A && (j(!1), c?.(!1), V())
    }, G = [z, k, c, A, V], t[10] = k, t[11] = c, t[12] = A, t[13] = V, t[14] = W, t[15] = G) : (W = t[14], G = t[15]), (0, I.useEffect)(W, G);
    let xe = D.longitude,
        Se = D.latitude,
        K;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (K = {
        opacity: 0,
        scale: .9,
        translateY: -50
    }, t[16] = K) : K = t[16];
    let q;
    t[17] === C ? q = t[18] : (q = C ? {
        opacity: 1,
        scale: 1,
        translateY: 0
    } : {
        opacity: 0,
        scale: .9,
        translateY: -50
    }, t[17] = C, t[18] = q);
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
    t[20] === D.id ? Y = t[21] : (Y = ye(D.id), t[20] = D.id, t[21] = Y);
    let X;
    t[22] === Y ? X = t[23] : (X = {
        duration: .15,
        ease: `easeInOut`,
        delay: Y
    }, t[22] = Y, t[23] = X);
    let Z;
    t[24] !== D.id || t[25] !== D.name || t[26] !== T?.id ? (Z = () => {
        oe(!0), o.logStructuredEvent(`ChatgptPlacesMarkerHovered`, {
            entityId: D.id,
            entityName: D.name,
            conversationId: T?.id ?? ``
        })
    }, t[24] = D.id, t[25] = D.name, t[26] = T?.id, t[27] = Z) : Z = t[27];
    let Ce;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (Ce = () => oe(!1), t[28] = Ce) : Ce = t[28];
    let Q;
    t[29] !== D || t[30] !== b || t[31] !== re || t[32] !== n.mapPointIcon || t[33] !== P || t[34] !== F || t[35] !== l || t[36] !== _ ? (Q = (0, L.jsx)(ve, {
        business: D,
        entityCategory: re,
        icon: n.mapPointIcon,
        isSelected: l,
        isHovered: P,
        isMinimized: F,
        enableImageHover: b,
        routeStopIndex: _
    }), t[29] = D, t[30] = b, t[31] = re, t[32] = n.mapPointIcon, t[33] = P, t[34] = F, t[35] = l, t[36] = _, t[37] = Q) : Q = t[37];
    let $;
    t[38] !== D.name || t[39] !== x || t[40] !== F || t[41] !== p ? ($ = !F && (0, L.jsx)(`div`, {
        "data-testid": `business-marker-label`,
        "data-map-label-blocker": ``,
        style: {
            opacity: p || x ? 1 : 0
        },
        className: `pointer-events-none absolute start-1/2 top-full max-w-[150px] -translate-x-1/2 truncate font-bold text-gray-800 [text-shadow:-0.8px_-0.8px_0_#fff,0.8px_-0.8px_0_#fff,-0.8px_0.8px_0_#fff,0.8px_0.8px_0_#fff] motion-safe:transition-opacity motion-safe:duration-1000 motion-safe:ease-out dark:text-gray-100 dark:[text-shadow:-0.8px_-0.8px_0_#000,0.8px_-0.8px_0_#000,-0.8px_0.8px_0_#000,0.8px_0.8px_0_#000]`,
        children: D.name
    }), t[38] = D.name, t[39] = x, t[40] = F, t[41] = p, t[42] = $) : $ = t[42];
    let we;
    t[43] !== D.name || t[44] !== ie || t[45] !== F || t[46] !== g ? (we = ie ? (0, L.jsx)(`button`, {
        type: `button`,
        "aria-label": D.name,
        className: f(`absolute cursor-pointer border-0 bg-transparent p-0`, F ? `start-1/2 bottom-0 size-7 -translate-x-1/2 rounded-full` : `inset-0 rounded-xl`),
        "data-testid": `business-marker-hitbox`,
        onFocus: () => ce(!0),
        onBlur: () => ce(!1),
        onClick: e => {
            e.preventDefault(), g()
        }
    }) : (0, L.jsx)(`div`, {
        className: f(`absolute`, F ? `start-1/2 bottom-0 size-7 -translate-x-1/2 rounded-full` : `inset-0 rounded-xl`),
        "data-testid": `business-marker-hitbox`
    }), t[43] = D.name, t[44] = ie, t[45] = F, t[46] = g, t[47] = we) : we = t[47];
    let Te;
    t[48] !== D.latitude || t[49] !== D.longitude || t[50] !== q || t[51] !== X || t[52] !== Z || t[53] !== Q || t[54] !== $ || t[55] !== we ? (Te = (0, L.jsxs)(te.div, {
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
    }), t[48] = D.latitude, t[49] = D.longitude, t[50] = q, t[51] = X, t[52] = Z, t[53] = Q, t[54] = $, t[55] = we, t[56] = Te) : Te = t[56];
    let Ee = Te,
        De;
    t[57] !== D.id || t[58] !== w || t[59] !== k || t[60] !== me || t[61] !== Ee || t[62] !== E || t[63] !== c || t[64] !== V || t[65] !== r || t[66] !== S || t[67] !== le ? (De = r ? (0, L.jsx)(u, {
        label: (0, L.jsx)(`div`, {
            onPointerEnter: () => {
                z(), O(`open`)
            },
            children: typeof r == `function` ? r({
                onProviderPickerOpenChange: de
            }) : r
        }),
        open: me,
        onOpenChange: e => {
            if (e) {
                _e.set(E), c?.(e), j(!1), z(), O(`open`);
                return
            }
            if (k) {
                j(!0), O(`open`);
                return
            }
            c?.(e), V()
        },
        delayDuration: 200,
        theme: w ? `default` : `white`,
        customPaddingClassName: `bg-clip-padding`,
        customBorderClassName: `border-token-border-default border`,
        contentClassName: f(fe.tooltipContent, le === `closing` ? fe.tooltipClosing : fe.tooltipOpen, `rounded-[20px]!`),
        side: S,
        sideOffset: 10,
        wide: !0,
        interactive: !0,
        children: Ee
    }, D.id) : Ee, t[57] = D.id, t[58] = w, t[59] = k, t[60] = me, t[61] = Ee, t[62] = E, t[63] = c, t[64] = V, t[65] = r, t[66] = S, t[67] = le, t[68] = De) : De = t[68];
    let Oe = De,
        ke = D.id,
        Ae = D.longitude,
        je = D.latitude,
        Me = !!n.isModelPreferred,
        Ne;
    t[69] !== P || t[70] !== l || t[71] !== Me ? (Ne = be({
        isSelected: l,
        isModelPreferred: Me,
        isHovered: P
    }), t[69] = P, t[70] = l, t[71] = Me, t[72] = Ne) : Ne = t[72];
    let Pe;
    t[73] === Ne ? Pe = t[74] : (Pe = {
        zIndex: Ne
    }, t[73] = Ne, t[74] = Pe);
    let Fe;
    return t[75] !== D.id || t[76] !== D.latitude || t[77] !== D.longitude || t[78] !== Oe || t[79] !== Pe ? (Fe = (0, L.jsx)(ue, {
        longitude: Ae,
        latitude: je,
        anchor: `bottom`,
        pitchAlignment: `viewport`,
        rotationAlignment: `viewport`,
        occludedOpacity: 1,
        style: Pe,
        children: Oe
    }, ke), t[75] = D.id, t[76] = D.latitude, t[77] = D.longitude, t[78] = Oe, t[79] = Pe, t[80] = Fe) : Fe = t[80], Fe
}
var he, I, L, R, z, B, V, H, ge, _e, U, ve, ye, be, W = e((() => {
    he = v(), m(), ae(), oe(), se(), s(), E(), n(), h(), l(), S(), p(), y(), r(), I = t(_()), A(), pe(), L = g(), R = ce, z = ie, B = re, V = RegExp(`^(?:${C().source})$`, `u`), H = 8, ge = 140, _e = c(null), U = e => {
        let t = e?.trim();
        if (t && (V.test(t) || !(Array.from(t).length > H || /^\p{L}$/u.test(t)))) return t
    }, ve = e => {
        "use forget";
        let t = (0, he.c)(30),
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
            te = n.reconciled_thumbnails?.[0]?.image_url ?? n.image_urls?.[0] ?? n.image_url,
            {
                data: p
            } = b(u && d && o ? te : null),
            m = u && d && o && p != null,
            h, g;
        t[0] === i ? (h = t[1], g = t[2]) : (h = U(i), g = h && V.test(h) ? `text-sm leading-none` : `px-1.5 text-xs font-semibold leading-none`, t[0] = i, t[1] = h, t[2] = g);
        let _ = g;
        if (m) {
            let e;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, L.jsx)(`div`, {
                className: `absolute start-1/2 top-[calc(100%-1px)] z-0 h-0 w-0 -translate-x-1/2 border-s-[12px] border-e-[12px] border-t-[12px] border-s-transparent border-e-transparent border-t-white`
            }), t[3] = e) : e = t[3];
            let n;
            return t[4] === p.src ? n = t[5] : (n = (0, L.jsxs)(`div`, {
                className: `relative flex h-16 min-w-16 items-center justify-center overflow-visible rounded-full border-[4.5px] border-white bg-black bg-clip-padding shadow-[0px_9px_7px_rgba(0,0,0,0.1),0px_23px_17px_rgba(0,0,0,0.1)] transition-all duration-150 ease-out`,
                children: [e, (0, L.jsx)(`img`, {
                    src: p.src,
                    alt: ``,
                    className: `relative z-10 h-full w-full rounded-full object-cover`
                })]
            }), t[4] = p.src, t[5] = n), n
        }
        if (l && !d) {
            let e = o && `scale-125`,
                n;
            t[6] === e ? n = t[7] : (n = f(`shadow-elevation-03 relative flex size-2 items-center justify-center rounded-full bg-white transition-transform duration-150 ease-out`, e), t[6] = e, t[7] = n);
            let r;
            t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, L.jsx)(`div`, {
                className: `size-1 rounded-full bg-black`
            }), t[8] = r) : r = t[8];
            let i;
            return t[9] === n ? i = t[10] : (i = (0, L.jsx)(`div`, {
                "data-testid": `business-marker-pin`,
                className: n,
                children: r
            }), t[9] = n, t[10] = i), i
        }
        let v = d ? `h-8 min-w-8` : `h-7 min-w-7`,
            y = d && a ? `border-white bg-black text-white dark:border-black dark:bg-white dark:text-black` : d ? `border-token-border-default bg-white text-black dark:bg-black dark:text-white` : a ? `bg-token-interactive-bg-primary-press text-token-interactive-label-primary-press border-2 border-white dark:border-black` : `border-token-border-default bg-token-bg-primary`,
            x = o && `scale-110 border-2`,
            ne = o && !a && `border-black dark:border-white`,
            S;
        t[11] !== v || t[12] !== y || t[13] !== x || t[14] !== ne ? (S = f(`shadow-elevation-03 relative flex items-center justify-center rounded-full border bg-clip-padding text-xs font-medium transition-all duration-150 ease-out`, v, y, x, ne), t[11] = v, t[12] = y, t[13] = x, t[14] = ne, t[15] = S) : S = t[15];
        let C;
        t[16] !== d || t[17] !== a ? (C = a && !d && (0, L.jsx)(`div`, {
            className: `pointer-events-none absolute start-1/2 top-full z-0 h-0 w-0 -translate-x-1/2 translate-y-px border-s-4 border-e-4 border-t-4 border-s-transparent border-e-transparent border-t-white dark:border-t-black`
        }), t[16] = d, t[17] = a, t[18] = C) : C = t[18];
        let w;
        t[19] !== n.rating || t[20] !== r || t[21] !== d || t[22] !== h || t[23] !== _ || t[24] !== c ? (w = (0, L.jsx)(`div`, {
            className: `relative z-10`,
            children: h ? (0, L.jsx)(`span`, {
                className: _,
                children: h
            }) : d ? (0, L.jsx)(`span`, {
                className: `px-2 font-semibold`,
                children: c
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
        }), t[19] = n.rating, t[20] = r, t[21] = d, t[22] = h, t[23] = _, t[24] = c, t[25] = w) : w = t[25];
        let T;
        return t[26] !== w || t[27] !== S || t[28] !== C ? (T = (0, L.jsxs)(`div`, {
            "data-testid": `business-marker-pin`,
            className: S,
            children: [C, w]
        }), t[26] = w, t[27] = S, t[28] = C, t[29] = T) : T = t[29], T
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
            longitude: ee,
            latitude: s
        } = e,
        c = ee.toFixed(Y),
        l = s.toFixed(Y),
        u = n.toFixed(X),
        d = new URL(`https://api.mapbox.com/styles/v1/${o}/static/${c},${l},${u},0,0/${r}x${i}@${a}x`);
    return d.searchParams.set(`access_token`, D), d.searchParams.set(`logo`, `false`), d.searchParams.set(`attribution`, `false`), d.toString()
}

function Se(e) {
    "use forget";
    let t = (0, K.c)(27),
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
        u, d, te, p;
    if (t[0] !== n.latitude || t[1] !== n.longitude || t[2] !== i || t[3] !== l || t[4] !== r) {
        p = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            if (u = G(n.latitude, n.longitude), !u) {
                p = null;
                break bb0
            }
            d = Z,
            te = xe({
                coordinates: u,
                isDarkMode: l,
                width: r,
                height: i
            })
        }
        t[0] = n.latitude, t[1] = n.longitude, t[2] = i, t[3] = l, t[4] = r, t[5] = u, t[6] = d, t[7] = te, t[8] = p
    } else u = t[5], d = t[6], te = t[7], p = t[8];
    if (p !== Symbol.for(`react.early_return_sentinel`)) return p;
    let m = te,
        h;
    t[9] !== c || t[10] !== u || t[11] !== o || t[12] !== l || t[13] !== d || t[14] !== m ? (h = d ? (0, q.jsx)(`span`, {
        className: f(`pointer-events-none block size-full [&_.mapboxgl-control-container]:hidden`, o),
        role: c ? `img` : void 0,
        "aria-label": c || void 0,
        "aria-hidden": !c || void 0,
        children: (0, q.jsx)(de, {
            latitude: u.latitude,
            longitude: u.longitude,
            zoom: J,
            bearing: 0,
            pitch: 0,
            mapStyle: l ? T : w,
            mapboxAccessToken: D,
            RTLTextPlugin: le(),
            interactive: !1,
            attributionControl: !1
        })
    }) : (0, q.jsx)(`img`, {
        src: m,
        alt: c,
        draggable: !1,
        className: f(`m-0 block size-full object-cover select-none`, o),
        loading: `lazy`,
        decoding: `async`
    }), t[9] = c, t[10] = u, t[11] = o, t[12] = l, t[13] = d, t[14] = m, t[15] = h) : h = t[15];
    let g = s == null ? `-translate-y-full` : `-translate-y-1/2`,
        _;
    t[16] === g ? _ = t[17] : (_ = f(`pointer-events-none absolute start-1/2 top-1/2 -translate-x-1/2`, g), t[16] = g, t[17] = _);
    let v;
    t[18] !== n || t[19] !== s ? (v = s ?? (0, q.jsx)(ve, {
        business: n,
        entityCategory: `local_business`,
        isSelected: !0,
        isHovered: !1
    }), t[18] = n, t[19] = s, t[20] = v) : v = t[20];
    let y;
    t[21] !== _ || t[22] !== v ? (y = (0, q.jsx)(`span`, {
        className: _,
        children: v
    }), t[21] = _, t[22] = v, t[23] = y) : y = t[23];
    let b;
    return t[24] !== h || t[25] !== y ? (b = (0, q.jsxs)(`span`, {
        className: `relative block size-full`,
        children: [h, y]
    }), t[24] = h, t[25] = y, t[26] = b) : b = t[26], b
}
var K, q, J, Y, X, Z, Ce = e((() => {
    K = v(), l(), O(), p(), k(), A(), W(), x(), q = g(), J = 15, Y = 7, X = 4, Z = !1
}));
export {
    me as a, Ce as i, xe as n, W as o, G as r, Se as t
};
//# sourceMappingURL=871633a6-cprw8jc563s2g4q2.js.map