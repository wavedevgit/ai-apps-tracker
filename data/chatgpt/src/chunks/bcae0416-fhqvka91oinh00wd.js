import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $d as n,
    $nt as r,
    Bz as i,
    Hd as a,
    Int as o,
    Rnt as s,
    Vz as c,
    c7 as l,
    dJ as u,
    ert as d,
    fJ as f,
    gJ as p,
    l7 as m,
    yJ as h
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as g,
    Nn as _,
    Rn as v,
    Vn as y,
    wn as b
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Gjn as x,
    Hjn as S,
    Kjn as C,
    Vjn as w,
    XYt as T,
    Yjn as E,
    ZYt as D
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    t as O
} from "./24c0da2c-bx2qul3cpe0cu1wg.js";
var k = e((() => {})),
    A, ee = e((() => {
        p(), A = f({
            name: `circle-info-light-16`,
            canvas: {
                width: 16,
                height: 16,
                viewBox: `0 0 16 16`,
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 1.486328,
                    y: 1.486328,
                    width: 13.027344,
                    height: 13.027344
                },
                visualBounds: {
                    x: 1.486328,
                    y: 1.486328,
                    width: 13.027344,
                    height: 13.027344
                }
            },
            paint: {
                kind: `monochrome`
            },
            optical: {
                shape: `circular`,
                bounds: {
                    x: 1.486328,
                    y: 1.486328,
                    width: 13.027344,
                    height: 13.027344
                },
                center: {
                    x: 8,
                    y: 8
                },
                insets: {
                    top: 1.486328,
                    right: 1.486328,
                    bottom: 1.486328,
                    left: 1.486328
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8,
                        y: 8
                    },
                    foreground: {
                        x: 8,
                        y: 8
                    }
                }
            },
            capabilities: [`icon`],
            body: `<path d="M8 7.48633C8.28351 7.48633 8.51367 7.71649 8.51367 8V10.667C8.5135 10.9503 8.2834 11.1797 8 11.1797C7.7166 11.1797 7.4865 10.9503 7.48633 10.667V8C7.48633 7.71649 7.71649 7.48633 8 7.48633Z" fill="currentColor"/> <path d="M8 4.90137C8.37814 4.9015 8.68544 5.20779 8.68555 5.58594C8.68528 5.96395 8.37804 6.27135 8 6.27148C7.62194 6.27138 7.31569 5.96396 7.31543 5.58594C7.31554 5.20778 7.62184 4.90147 8 4.90137Z" fill="currentColor"/> <path d="M8 1.48633C11.5972 1.48633 14.5137 4.40279 14.5137 8C14.5137 11.5972 11.5972 14.5137 8 14.5137C4.40279 14.5137 1.48633 11.5972 1.48633 8C1.48633 4.40279 4.40279 1.48633 8 1.48633ZM8 2.51367C4.9698 2.51367 2.51367 4.9698 2.51367 8C2.51367 11.0302 4.9698 13.4863 8 13.4863C11.0302 13.4863 13.4863 11.0302 13.4863 8C13.4863 4.9698 11.0302 2.51367 8 2.51367Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>`
        })
    }));

function te(e) {
    "use forget";
    let t = (0, j.c)(11),
        n, r, i, a;
    t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4]) : ({
        "aria-hidden": n,
        "aria-label": r,
        "aria-labelledby": i,
        ...a
    } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a);
    let o = n ?? (r || i ? void 0 : !0),
        s;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (s = {
        __html: h(A)
    }, t[5] = s) : s = t[5];
    let c;
    return t[6] !== r || t[7] !== i || t[8] !== a || t[9] !== o ? (c = (0, ne.jsx)(`svg`, {
        ...a,
        xmlns: `http://www.w3.org/2000/svg`,
        width: A.canvas.width,
        height: A.canvas.height,
        viewBox: A.canvas.viewBox,
        fill: `currentColor`,
        "aria-label": r,
        "aria-labelledby": i,
        "aria-hidden": o,
        dangerouslySetInnerHTML: s
    }), t[6] = r, t[7] = i, t[8] = a, t[9] = o, t[10] = c) : c = t[10], c
}
var j, ne, re = e((() => {
        j = b(), u(), ee(), ne = g()
    })),
    ie = e((() => {}));

function ae({
    actionType: e,
    contentReferenceStartIndex: t,
    contentReferenceType: n,
    sectionLocation: r
}) {
    let i = r === `response` ? S.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE : S.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_FULLSCREEN_MAP;
    o.logStructuredEvent(`ChatgptLinkAction`, {
        actionType: e,
        surfaceLocation: i,
        linkType: C.CHATGPT_LINK_TYPE_GENERAL_EXTERNAL,
        linkAffordance: x.CHATGPT_LINK_AFFORDANCE_TEXT,
        url: P.url,
        contentReferenceStartIndex: t == null ? void 0 : d(t),
        contentReferenceType: n ?? void 0
    })
}

function oe(e) {
    "use forget";
    let t = (0, ce.c)(28),
        {
            contentReferenceStartIndex: n,
            contentReferenceType: r,
            sectionLocation: a,
            trackContentReferenceEvent: o
        } = e,
        [s, c] = (0, M.useState)(!1),
        u = (0, M.useRef)(!1),
        d;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = () => c(se), t[0] = d) : d = t[0];
    let f = d,
        p, m;
    t[1] !== n || t[2] !== r || t[3] !== s || t[4] !== a || t[5] !== o ? (p = () => {
        if (!(!s || u.current)) {
            if (ae({
                    actionType: w.CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN,
                    contentReferenceStartIndex: n,
                    contentReferenceType: r,
                    sectionLocation: a
                }), n != null && r != null && o)
                for (let e of le) o(`link_action`, null, r, {
                    action: `show`,
                    link_type: `map_attribution`,
                    section_location: a,
                    title: e.title,
                    url: e.url,
                    content_reference_start_index: n
                });
            u.current = !0
        }
    }, m = [n, r, s, a, o], t[1] = n, t[2] = r, t[3] = s, t[4] = a, t[5] = o, t[6] = p, t[7] = m) : (p = t[6], m = t[7]), (0, M.useEffect)(p, m);
    let h;
    t[8] !== n || t[9] !== r || t[10] !== a || t[11] !== o ? (h = (e, t) => {
        n == null || r == null || !o || o(`link_action`, null, r, {
            action: `click`,
            link_type: `map_attribution`,
            section_location: a,
            title: e,
            url: t,
            content_reference_start_index: n
        })
    }, t[8] = n, t[9] = r, t[10] = a, t[11] = o, t[12] = h) : h = t[12];
    let g = h,
        v = s ? i.CrossSm : te,
        y = s ? `bg-token-main-surface-primary w-fit` : `bg-token-main-surface-primary hover:bg-token-main-surface-secondary w-5 backdrop-blur-xl backdrop-filter`,
        b;
    t[13] === y ? b = t[14] : (b = l(`text-token-text-secondary flex h-5 items-center justify-start overflow-hidden rounded-[6px] text-[10px] font-light whitespace-nowrap drop-shadow-sm transition-all`, y), t[13] = y, t[14] = b);
    let x;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (x = l(`flex h-5 min-w-5 items-center justify-center transition-all`), t[15] = x) : x = t[15];
    let S;
    t[16] === v ? S = t[17] : (S = (0, N.jsx)(`button`, {
        type: `button`,
        onClick: f,
        className: x,
        children: (0, N.jsx)(v, {
            className: `icon-xs text-token-text-primary transition-colors`
        })
    }), t[16] = v, t[17] = S);
    let C;
    t[18] !== n || t[19] !== r || t[20] !== s || t[21] !== a || t[22] !== g ? (C = s && (0, N.jsxs)(`div`, {
        className: `pe-2`,
        children: [`©\xA0`, (0, N.jsx)(`a`, {
            href: `https://www.mapbox.com/about/maps`,
            target: `_blank`,
            rel: `noreferrer`,
            className: `text-token-text-secondary`,
            onClick: () => g(`Mapbox`, `https://www.mapbox.com/about/maps`),
            children: `Mapbox`
        }), `\xA0`, (0, N.jsx)(`a`, {
            href: `https://www.mapbox.com/legal/end-user-terms`,
            target: `_blank`,
            rel: `noreferrer`,
            className: `text-token-text-secondary me-2`,
            onClick: () => g(`Mapbox Terms`, `https://www.mapbox.com/legal/end-user-terms`),
            children: (0, N.jsx)(_, {
                id: `u3dZJq`,
                defaultMessage: `Terms`
            })
        }), `©\xA0`, (0, N.jsx)(`a`, {
            href: `http://www.openstreetmap.org/about`,
            target: `_blank`,
            rel: `noreferrer`,
            className: `text-token-text-secondary`,
            onClick: () => g(`OpenStreetMap`, `http://www.openstreetmap.org/about`),
            children: `OpenStreetMap`
        }), `\xA0`, (0, N.jsx)(`a`, {
            href: P.url,
            target: `_blank`,
            rel: `noreferrer`,
            className: `text-token-text-tertiary`,
            onClick: () => {
                ae({
                    actionType: w.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
                    contentReferenceStartIndex: n,
                    contentReferenceType: r,
                    sectionLocation: a
                })
            },
            children: (0, N.jsx)(_, {
                id: `maps.attribution.improveMap`,
                defaultMessage: `Improve this map`
            })
        })]
    }), t[18] = n, t[19] = r, t[20] = s, t[21] = a, t[22] = g, t[23] = C) : C = t[23];
    let T;
    return t[24] !== b || t[25] !== S || t[26] !== C ? (T = (0, N.jsxs)(`div`, {
        className: b,
        children: [S, C]
    }), t[24] = b, t[25] = S, t[26] = C, t[27] = T) : T = t[27], T
}

function se(e) {
    return !e
}
var ce, M, N, le, P, ue = e((() => {
        ce = b(), re(), c(), s(), r(), E(), m(), O(), M = t(y()), v(), k(), ie(), N = g(), le = [{
            title: `Mapbox`,
            url: `https://www.mapbox.com/about/maps`
        }, {
            title: `Mapbox Terms`,
            url: `https://www.mapbox.com/legal/end-user-terms`
        }, {
            title: `OpenStreetMap`,
            url: `http://www.openstreetmap.org/about`
        }], P = {
            url: `https://apps.mapbox.com/feedback/`
        }
    })),
    F, de, fe, pe = e((() => {
        F = g(), y(), de = e => (0, F.jsxs)(`svg`, {
            width: 34,
            height: 34,
            viewBox: `0 0 34 34`,
            fill: `none`,
            xmlns: `http://www.w3.org/2000/svg`,
            ...e,
            children: [(0, F.jsxs)(`g`, {
                filter: `url(#filter0_dd_735_10617)`,
                children: [(0, F.jsx)(`path`, {
                    d: `M17 24C21.9706 24 26 19.9706 26 15C26 10.0294 21.9706 6 17 6C12.0294 6 8 10.0294 8 15C8 19.9706 12.0294 24 17 24Z`,
                    fill: `#0088FF`,
                    style: {
                        fill: `#0088ff`,
                        fill: `color(display-p3 0 0.5333 1)`,
                        fillOpacity: 1
                    }
                }), (0, F.jsx)(`path`, {
                    d: `M24.5 15C24.5 19.1421 21.1421 22.5 17 22.5C12.8579 22.5 9.5 19.1421 9.5 15C9.5 10.8579 12.8579 7.5 17 7.5C21.1421 7.5 24.5 10.8579 24.5 15Z`,
                    stroke: `white`,
                    style: {
                        stroke: `white`,
                        strokeOpacity: 1
                    },
                    strokeWidth: 3
                })]
            }), (0, F.jsx)(`defs`, {
                children: (0, F.jsxs)(`filter`, {
                    id: `filter0_dd_735_10617`,
                    x: 0,
                    y: 0,
                    width: 34,
                    height: 34,
                    filterUnits: `userSpaceOnUse`,
                    colorInterpolationFilters: `sRGB`,
                    children: [(0, F.jsx)(`feFlood`, {
                        floodOpacity: 0,
                        result: `BackgroundImageFix`
                    }), (0, F.jsx)(`feColorMatrix`, {
                        in: `SourceAlpha`,
                        type: `matrix`,
                        values: `0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0`,
                        result: `hardAlpha`
                    }), (0, F.jsx)(`feOffset`, {
                        dy: 2
                    }), (0, F.jsx)(`feGaussianBlur`, {
                        stdDeviation: 4
                    }), (0, F.jsx)(`feComposite`, {
                        in2: `hardAlpha`,
                        operator: `out`
                    }), (0, F.jsx)(`feColorMatrix`, {
                        type: `matrix`,
                        values: `0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0`
                    }), (0, F.jsx)(`feBlend`, {
                        mode: `normal`,
                        in2: `BackgroundImageFix`,
                        result: `effect1_dropShadow_735_10617`
                    }), (0, F.jsx)(`feColorMatrix`, {
                        in: `SourceAlpha`,
                        type: `matrix`,
                        values: `0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0`,
                        result: `hardAlpha`
                    }), (0, F.jsx)(`feOffset`, {
                        dy: 1
                    }), (0, F.jsx)(`feGaussianBlur`, {
                        stdDeviation: .5
                    }), (0, F.jsx)(`feComposite`, {
                        in2: `hardAlpha`,
                        operator: `out`
                    }), (0, F.jsx)(`feColorMatrix`, {
                        type: `matrix`,
                        values: `0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0`
                    }), (0, F.jsx)(`feBlend`, {
                        mode: `normal`,
                        in2: `effect1_dropShadow_735_10617`,
                        result: `effect2_dropShadow_735_10617`
                    }), (0, F.jsx)(`feBlend`, {
                        mode: `normal`,
                        in: `SourceGraphic`,
                        in2: `effect2_dropShadow_735_10617`,
                        result: `shape`
                    })]
                })
            })]
        }), fe = de
    }));

function me(e, t, n = {}) {
    let r = {
        type: `Feature`
    };
    return (n.id === 0 || n.id) && (r.id = n.id), n.bbox && (r.bbox = n.bbox), r.properties = t || {}, r.geometry = e, r
}

function he(e, t, n = {}) {
    if (!e) throw Error(`coordinates is required`);
    if (!Array.isArray(e)) throw Error(`coordinates must be an Array`);
    if (e.length < 2) throw Error(`coordinates must be at least 2 numbers long`);
    if (!_e(e[0]) || !_e(e[1])) throw Error(`coordinates must contain numbers`);
    return me({
        type: `Point`,
        coordinates: e
    }, t, n)
}

function ge(e, t = {}) {
    let n = {
        type: `FeatureCollection`
    };
    return t.id && (n.id = t.id), t.bbox && (n.bbox = t.bbox), n.features = e, n
}

function _e(e) {
    return !isNaN(e) && e !== null && !Array.isArray(e)
}
var I, ve = e((() => {
    I = 6371008.8, I * 100, I * 100, 360 / (2 * Math.PI), I * 3.28084, I * 39.37, I / 1e3, I / 1e3, I / 1609.344, I * 1e3, I * 1e3, I / 1852, I * 1.0936
}));

function ye(e, t, n) {
    if (e !== null)
        for (var r, i, a, o, s, c, l, u = 0, d = 0, f, p = e.type, m = p === `FeatureCollection`, h = p === `Feature`, g = m ? e.features.length : 1, _ = 0; _ < g; _++) {
            l = m ? e.features[_].geometry : h ? e.geometry : e, f = l ? l.type === `GeometryCollection` : !1, s = f ? l.geometries.length : 1;
            for (var v = 0; v < s; v++) {
                var y = 0,
                    b = 0;
                if (o = f ? l.geometries[v] : l, o !== null) {
                    c = o.coordinates;
                    var x = o.type;
                    switch (u = n && (x === `Polygon` || x === `MultiPolygon`) ? 1 : 0, x) {
                        case null:
                            break;
                        case `Point`:
                            if (t(c, d, _, y, b) === !1) return !1;
                            d++, y++;
                            break;
                        case `LineString`:
                        case `MultiPoint`:
                            for (r = 0; r < c.length; r++) {
                                if (t(c[r], d, _, y, b) === !1) return !1;
                                d++, x === `MultiPoint` && y++
                            }
                            x === `LineString` && y++;
                            break;
                        case `Polygon`:
                        case `MultiLineString`:
                            for (r = 0; r < c.length; r++) {
                                for (i = 0; i < c[r].length - u; i++) {
                                    if (t(c[r][i], d, _, y, b) === !1) return !1;
                                    d++
                                }
                                x === `MultiLineString` && y++, x === `Polygon` && b++
                            }
                            x === `Polygon` && y++;
                            break;
                        case `MultiPolygon`:
                            for (r = 0; r < c.length; r++) {
                                for (b = 0, i = 0; i < c[r].length; i++) {
                                    for (a = 0; a < c[r][i].length - u; a++) {
                                        if (t(c[r][i][a], d, _, y, b) === !1) return !1;
                                        d++
                                    }
                                    b++
                                }
                                y++
                            }
                            break;
                        case `GeometryCollection`:
                            for (r = 0; r < o.geometries.length; r++)
                                if (ye(o.geometries[r], t, n) === !1) return !1;
                            break;
                        default:
                            throw Error(`Unknown Geometry Type`)
                    }
                }
            }
        }
}
var be = e((() => {}));

function xe(e, t = {}) {
    if (e.bbox != null && !0 !== t.recompute) return e.bbox;
    let n = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    return ye(e, e => {
        n[0] > e[0] && (n[0] = e[0]), n[1] > e[1] && (n[1] = e[1]), n[2] < e[0] && (n[2] = e[0]), n[3] < e[1] && (n[3] = e[1])
    }), n
}
var Se, Ce = e((() => {
        be(), Se = xe
    })),
    we, Te, Ee, De, Oe = e((() => {
        we = b(), a(), T(), Te = t(y()), Ee = 300, De = () => {
            "use forget";
            let e = (0, we.c)(10),
                t = n(),
                r;
            e[0] === t ? r = e[1] : (r = () => !t, e[0] = t, e[1] = r);
            let [i, a] = (0, Te.useState)(r), o;
            e[2] !== i || e[3] !== t ? (o = t ? () => {
                i || D(() => {
                    a(!0)
                }, Ee)
            } : void 0, e[2] = i, e[3] = t, e[4] = o) : o = e[4];
            let s = o,
                c;
            e[5] === i ? c = e[6] : (c = e => {
                "use forget";
                let {
                    children: t
                } = e;
                return i ? t : null
            }, e[5] = i, e[6] = c);
            let l = c,
                u;
            return e[7] !== l || e[8] !== s ? (u = {
                triggerRender: s,
                IntegratedUXDelayedRender: l
            }, e[7] = l, e[8] = s, e[9] = u) : u = e[9], u
        }
    })),
    L, R = e((() => {
        L = typeof Float32Array < `u` ? Float32Array : Array, Math.PI / 180
    }));

function ke() {
    let e = new L(2);
    return L != Float32Array && (e[0] = 0, e[1] = 0), e
}

function Ae(e, t, n) {
    return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e
}

function je(e, t) {
    return e[0] = -t[0], e[1] = -t[1], e
}

function Me(e, t, n, r) {
    let i = t[0],
        a = t[1];
    return e[0] = i + r * (n[0] - i), e[1] = a + r * (n[1] - a), e
}
var Ne = e((() => {
    R(), (function() {
        let e = ke();
        return function(t, n, r, i, a, o) {
            let s, c;
            for (n ||= 2, r ||= 0, c = i ? Math.min(i * n + r, t.length) : t.length, s = r; s < c; s += n) e[0] = t[s], e[1] = t[s + 1], a(e, e, o), t[s] = e[0], t[s + 1] = e[1];
            return t
        }
    })()
}));

function Pe() {
    let e = new L(3);
    return L != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e
}

function Fe(e, t, n) {
    return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e
}

function Ie(e, t, n) {
    return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e[2] = t[2] * n[2], e
}

function Le(e, t) {
    return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e
}
var Re, ze = e((() => {
    R(), Re = Ie, (function() {
        let e = Pe();
        return function(t, n, r, i, a, o) {
            let s, c;
            for (n ||= 3, r ||= 0, c = i ? Math.min(i * n + r, t.length) : t.length, s = r; s < c; s += n) e[0] = t[s], e[1] = t[s + 1], e[2] = t[s + 2], a(e, e, o), t[s] = e[0], t[s + 1] = e[1], t[s + 2] = e[2];
            return t
        }
    })()
}));

function Be(e, t) {
    let n = t[0],
        r = t[1],
        i = t[2],
        a = t[3],
        o = t[4],
        s = t[5],
        c = t[6],
        l = t[7],
        u = t[8],
        d = t[9],
        f = t[10],
        p = t[11],
        m = t[12],
        h = t[13],
        g = t[14],
        _ = t[15],
        v = n * s - r * o,
        y = n * c - i * o,
        b = n * l - a * o,
        x = r * c - i * s,
        S = r * l - a * s,
        C = i * l - a * c,
        w = u * h - d * m,
        T = u * g - f * m,
        E = u * _ - p * m,
        D = d * g - f * h,
        O = d * _ - p * h,
        k = f * _ - p * g,
        A = v * k - y * O + b * D + x * E - S * T + C * w;
    return A ? (A = 1 / A, e[0] = (s * k - c * O + l * D) * A, e[1] = (i * O - r * k - a * D) * A, e[2] = (h * C - g * S + _ * x) * A, e[3] = (f * S - d * C - p * x) * A, e[4] = (c * E - o * k - l * T) * A, e[5] = (n * k - i * E + a * T) * A, e[6] = (g * b - m * C - _ * y) * A, e[7] = (u * C - f * b + p * y) * A, e[8] = (o * O - s * E + l * w) * A, e[9] = (r * E - n * O - a * w) * A, e[10] = (m * S - h * b + _ * v) * A, e[11] = (d * b - u * S - p * v) * A, e[12] = (s * T - o * D - c * w) * A, e[13] = (n * D - r * T + i * w) * A, e[14] = (h * y - m * x - g * v) * A, e[15] = (u * x - d * y + f * v) * A, e) : null
}

function z(e, t, n) {
    let r = t[0],
        i = t[1],
        a = t[2],
        o = t[3],
        s = t[4],
        c = t[5],
        l = t[6],
        u = t[7],
        d = t[8],
        f = t[9],
        p = t[10],
        m = t[11],
        h = t[12],
        g = t[13],
        _ = t[14],
        v = t[15],
        y = n[0],
        b = n[1],
        x = n[2],
        S = n[3];
    return e[0] = y * r + b * s + x * d + S * h, e[1] = y * i + b * c + x * f + S * g, e[2] = y * a + b * l + x * p + S * _, e[3] = y * o + b * u + x * m + S * v, y = n[4], b = n[5], x = n[6], S = n[7], e[4] = y * r + b * s + x * d + S * h, e[5] = y * i + b * c + x * f + S * g, e[6] = y * a + b * l + x * p + S * _, e[7] = y * o + b * u + x * m + S * v, y = n[8], b = n[9], x = n[10], S = n[11], e[8] = y * r + b * s + x * d + S * h, e[9] = y * i + b * c + x * f + S * g, e[10] = y * a + b * l + x * p + S * _, e[11] = y * o + b * u + x * m + S * v, y = n[12], b = n[13], x = n[14], S = n[15], e[12] = y * r + b * s + x * d + S * h, e[13] = y * i + b * c + x * f + S * g, e[14] = y * a + b * l + x * p + S * _, e[15] = y * o + b * u + x * m + S * v, e
}

function Ve(e, t, n) {
    let r = n[0],
        i = n[1],
        a = n[2],
        o, s, c, l, u, d, f, p, m, h, g, _;
    return t === e ? (e[12] = t[0] * r + t[4] * i + t[8] * a + t[12], e[13] = t[1] * r + t[5] * i + t[9] * a + t[13], e[14] = t[2] * r + t[6] * i + t[10] * a + t[14], e[15] = t[3] * r + t[7] * i + t[11] * a + t[15]) : (o = t[0], s = t[1], c = t[2], l = t[3], u = t[4], d = t[5], f = t[6], p = t[7], m = t[8], h = t[9], g = t[10], _ = t[11], e[0] = o, e[1] = s, e[2] = c, e[3] = l, e[4] = u, e[5] = d, e[6] = f, e[7] = p, e[8] = m, e[9] = h, e[10] = g, e[11] = _, e[12] = o * r + u * i + m * a + t[12], e[13] = s * r + d * i + h * a + t[13], e[14] = c * r + f * i + g * a + t[14], e[15] = l * r + p * i + _ * a + t[15]), e
}

function He(e, t, n) {
    let r = n[0],
        i = n[1],
        a = n[2];
    return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e[4] = t[4] * i, e[5] = t[5] * i, e[6] = t[6] * i, e[7] = t[7] * i, e[8] = t[8] * a, e[9] = t[9] * a, e[10] = t[10] * a, e[11] = t[11] * a, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
}

function Ue(e, t, n) {
    let r = Math.sin(n),
        i = Math.cos(n),
        a = t[4],
        o = t[5],
        s = t[6],
        c = t[7],
        l = t[8],
        u = t[9],
        d = t[10],
        f = t[11];
    return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = a * i + l * r, e[5] = o * i + u * r, e[6] = s * i + d * r, e[7] = c * i + f * r, e[8] = l * i - a * r, e[9] = u * i - o * r, e[10] = d * i - s * r, e[11] = f * i - c * r, e
}

function We(e, t, n) {
    let r = Math.sin(n),
        i = Math.cos(n),
        a = t[0],
        o = t[1],
        s = t[2],
        c = t[3],
        l = t[4],
        u = t[5],
        d = t[6],
        f = t[7];
    return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = a * i + l * r, e[1] = o * i + u * r, e[2] = s * i + d * r, e[3] = c * i + f * r, e[4] = l * i - a * r, e[5] = u * i - o * r, e[6] = d * i - s * r, e[7] = f * i - c * r, e
}

function Ge(e, t, n, r, i) {
    let a = 1 / Math.tan(t / 2);
    if (e[0] = a / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, i != null && i !== 1 / 0) {
        let t = 1 / (r - i);
        e[10] = (i + r) * t, e[14] = 2 * i * r * t
    } else e[10] = -1, e[14] = -2 * r;
    return e
}

function Ke(e, t) {
    let n = e[0],
        r = e[1],
        i = e[2],
        a = e[3],
        o = e[4],
        s = e[5],
        c = e[6],
        l = e[7],
        u = e[8],
        d = e[9],
        f = e[10],
        p = e[11],
        m = e[12],
        h = e[13],
        g = e[14],
        _ = e[15],
        v = t[0],
        y = t[1],
        b = t[2],
        x = t[3],
        S = t[4],
        C = t[5],
        w = t[6],
        T = t[7],
        E = t[8],
        D = t[9],
        O = t[10],
        k = t[11],
        A = t[12],
        ee = t[13],
        te = t[14],
        j = t[15];
    return Math.abs(n - v) <= 1e-6 * Math.max(1, Math.abs(n), Math.abs(v)) && Math.abs(r - y) <= 1e-6 * Math.max(1, Math.abs(r), Math.abs(y)) && Math.abs(i - b) <= 1e-6 * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(a - x) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(x)) && Math.abs(o - S) <= 1e-6 * Math.max(1, Math.abs(o), Math.abs(S)) && Math.abs(s - C) <= 1e-6 * Math.max(1, Math.abs(s), Math.abs(C)) && Math.abs(c - w) <= 1e-6 * Math.max(1, Math.abs(c), Math.abs(w)) && Math.abs(l - T) <= 1e-6 * Math.max(1, Math.abs(l), Math.abs(T)) && Math.abs(u - E) <= 1e-6 * Math.max(1, Math.abs(u), Math.abs(E)) && Math.abs(d - D) <= 1e-6 * Math.max(1, Math.abs(d), Math.abs(D)) && Math.abs(f - O) <= 1e-6 * Math.max(1, Math.abs(f), Math.abs(O)) && Math.abs(p - k) <= 1e-6 * Math.max(1, Math.abs(p), Math.abs(k)) && Math.abs(m - A) <= 1e-6 * Math.max(1, Math.abs(m), Math.abs(A)) && Math.abs(h - ee) <= 1e-6 * Math.max(1, Math.abs(h), Math.abs(ee)) && Math.abs(g - te) <= 1e-6 * Math.max(1, Math.abs(g), Math.abs(te)) && Math.abs(_ - j) <= 1e-6 * Math.max(1, Math.abs(_), Math.abs(j))
}
var qe, Je = e((() => {
    R(), qe = Ge
}));

function Ye() {
    let e = new L(4);
    return L != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0), e
}

function Xe(e, t, n) {
    return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e
}

function Ze(e, t, n) {
    let r = t[0],
        i = t[1],
        a = t[2],
        o = t[3];
    return e[0] = n[0] * r + n[4] * i + n[8] * a + n[12] * o, e[1] = n[1] * r + n[5] * i + n[9] * a + n[13] * o, e[2] = n[2] * r + n[6] * i + n[10] * a + n[14] * o, e[3] = n[3] * r + n[7] * i + n[11] * a + n[15] * o, e
}
var Qe = e((() => {
        R(), (function() {
            let e = Ye();
            return function(t, n, r, i, a, o) {
                let s, c;
                for (n ||= 4, r ||= 0, c = i ? Math.min(i * n + r, t.length) : t.length, s = r; s < c; s += n) e[0] = t[s], e[1] = t[s + 1], e[2] = t[s + 2], e[3] = t[s + 3], a(e, e, o), t[s] = e[0], t[s + 1] = e[1], t[s + 2] = e[2], t[s + 3] = e[3];
                return t
            }
        })()
    })),
    B = e((() => {
        Ne(), ze(), R(), Je(), Qe()
    }));

function V() {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
}

function H(e, t) {
    let n = Ze([], t, e);
    return Xe(n, n, 1 / n[3]), n
}

function $e(e, t, n) {
    return e < t ? t : e > n ? n : e
}

function et(e) {
    return Math.log(e) * Math.LOG2E
}
var tt, U = e((() => {
    B(), tt = Math.log2 || et
}));

function W(e, t) {
    if (!e) throw Error(t || `@math.gl/web-mercator: assertion failed.`)
}
var nt = e((() => {}));

function rt(e) {
    return 2 ** e
}

function G(e) {
    let [t, n] = e;
    W(Number.isFinite(t)), W(Number.isFinite(n) && n >= -90 && n <= 90, `invalid latitude`);
    let r = t * Y,
        i = n * Y;
    return [Z * (r + J) / (2 * J), Z * (J + Math.log(Math.tan(dt + i * .5))) / (2 * J)]
}

function K(e) {
    let [t, n] = e, r = t / Z * (2 * J) - J, i = 2 * (Math.atan(Math.exp(n / Z * (2 * J) - J)) - dt);
    return [r * X, i * X]
}

function it(e) {
    let {
        latitude: t,
        longitude: n,
        highPrecision: r = !1
    } = e;
    W(Number.isFinite(t) && Number.isFinite(n));
    let i = Z,
        a = Math.cos(t * Y),
        o = i / 360,
        s = o / a,
        c = i / ft / a,
        l = {
            unitsPerMeter: [c, c, c],
            metersPerUnit: [1 / c, 1 / c, 1 / c],
            unitsPerDegree: [o, s, c],
            degreesPerUnit: [1 / o, 1 / s, 1 / c]
        };
    if (r) {
        let e = Y * Math.tan(t * Y) / a,
            n = o * e / 2,
            r = i / ft * e,
            u = r / s * c;
        l.unitsPerDegree2 = [0, n, r], l.unitsPerMeter2 = [u, 0, u]
    }
    return l
}

function at(e) {
    let {
        height: t,
        pitch: n,
        bearing: r,
        altitude: i,
        scale: a,
        center: o
    } = e, s = V();
    Ve(s, s, [0, 0, -i]), Ue(s, s, -n * Y), We(s, s, r * Y);
    let c = a / t;
    return He(s, s, [c, c, c]), o && Ve(s, s, Le([], o)), s
}

function ot(e) {
    let {
        width: t,
        height: n,
        altitude: r,
        pitch: i = 0,
        offset: a,
        center: o,
        scale: s,
        nearZMultiplier: c = 1,
        farZMultiplier: l = 1
    } = e, {
        fovy: u = q(pt)
    } = e;
    r !== void 0 && (u = q(r));
    let d = u * Y,
        f = i * Y,
        p = ct(u),
        m = p;
    o && (m += o[2] * s / Math.cos(f) / n);
    let h = d * (.5 + (a ? a[1] : 0) / n),
        g = Math.sin(h) * m / Math.sin($e(Math.PI / 2 - f - h, .01, Math.PI - .01)),
        _ = Math.sin(f) * g + m,
        v = m * 10,
        y = Math.min(_ * l, v);
    return {
        fov: d,
        aspect: t / n,
        focalDistance: p,
        near: c,
        far: y
    }
}

function st(e) {
    let {
        fov: t,
        aspect: n,
        near: r,
        far: i
    } = ot(e);
    return qe([], t, n, r, i)
}

function q(e) {
    return 2 * Math.atan(.5 / e) * X
}

function ct(e) {
    return .5 / Math.tan(.5 * e * Y)
}

function lt(e, t) {
    let [n, r, i = 0] = e;
    return W(Number.isFinite(n) && Number.isFinite(r) && Number.isFinite(i)), H(t, [n, r, i, 1])
}

function ut(e, t, n = 0) {
    let [r, i, a] = e;
    if (W(Number.isFinite(r) && Number.isFinite(i), `invalid pixel coordinate`), Number.isFinite(a)) return H(t, [r, i, a, 1]);
    let o = H(t, [r, i, 0, 1]),
        s = H(t, [r, i, 1, 1]),
        c = o[2],
        l = s[2];
    return Me([], o, s, c === l ? 0 : ((n || 0) - c) / (l - c))
}
var J, dt, Y, X, Z, ft, Q, pt, $ = e((() => {
    U(), B(), nt(), J = Math.PI, dt = J / 4, Y = J / 180, X = 180 / J, Z = 512, ft = 4003e4, Q = 85.051129, pt = 1.5
}));

function mt(e) {
    let {
        width: t,
        height: n,
        bounds: r,
        minExtent: i = 0,
        maxZoom: a = 24,
        offset: o = [0, 0]
    } = e, [
        [s, c],
        [l, u]
    ] = r, d = ht(e.padding), f = G([s, $e(u, -Q, Q)]), p = G([l, $e(c, -Q, Q)]), m = [Math.max(Math.abs(p[0] - f[0]), i), Math.max(Math.abs(p[1] - f[1]), i)], h = [t - d.left - d.right - Math.abs(o[0]) * 2, n - d.top - d.bottom - Math.abs(o[1]) * 2];
    W(h[0] > 0 && h[1] > 0);
    let g = h[0] / m[0],
        _ = h[1] / m[1],
        v = (d.right - d.left) / 2 / g,
        y = (d.top - d.bottom) / 2 / _,
        b = K([(p[0] + f[0]) / 2 + v, (p[1] + f[1]) / 2 + y]),
        x = Math.min(a, tt(Math.abs(Math.min(g, _))));
    return W(Number.isFinite(x)), {
        longitude: b[0],
        latitude: b[1],
        zoom: x
    }
}

function ht(e = 0) {
    return typeof e == `number` ? {
        top: e,
        bottom: e,
        left: e,
        right: e
    } : (W(Number.isFinite(e.top) && Number.isFinite(e.bottom) && Number.isFinite(e.left) && Number.isFinite(e.right)), e)
}
var gt = e((() => {
    nt(), U(), $()
}));

function _t(e, t = 0) {
    let {
        width: n,
        height: r,
        unproject: i
    } = e, a = {
        targetZ: t
    }, o = i([0, r], a), s = i([n, r], a), c, l;
    return (e.fovy ? .5 * e.fovy * yt : Math.atan(.5 / e.altitude)) > (90 - e.pitch) * yt - .01 ? (c = vt(e, 0, t), l = vt(e, n, t)) : (c = i([0, 0], a), l = i([n, 0], a)), [o, s, l, c]
}

function vt(e, t, n) {
    let {
        pixelUnprojectionMatrix: r
    } = e, i = H(r, [t, 0, 1, 1]), a = H(r, [t, e.height, 1, 1]), o = K(Me([], i, a, (n * e.distanceScales.unitsPerMeter[2] - i[2]) / (a[2] - i[2])));
    return o.push(n), o
}
var yt, bt = e((() => {
        B(), $(), U(), yt = Math.PI / 180
    })),
    xt, St = e((() => {
        U(), $(), gt(), bt(), B(), xt = class e {
            constructor(t = {
                width: 1,
                height: 1
            }) {
                this.equals = t => t instanceof e && t.width === this.width && t.height === this.height && Ke(t.projectionMatrix, this.projectionMatrix) && Ke(t.viewMatrix, this.viewMatrix), this.project = (e, t = {}) => {
                    let {
                        topLeft: n = !0
                    } = t, r = lt(this.projectPosition(e), this.pixelProjectionMatrix), [i, a] = r, o = n ? a : this.height - a;
                    return e.length === 2 ? [i, o] : [i, o, r[2]]
                }, this.unproject = (e, t = {}) => {
                    let {
                        topLeft: n = !0,
                        targetZ: r = void 0
                    } = t, [i, a, o] = e, s = n ? a : this.height - a, c = r && r * this.distanceScales.unitsPerMeter[2], l = ut([i, s, o], this.pixelUnprojectionMatrix, c), [u, d, f] = this.unprojectPosition(l);
                    return Number.isFinite(o) ? [u, d, f] : Number.isFinite(r) ? [u, d, r] : [u, d]
                }, this.projectPosition = e => {
                    let [t, n] = G(e);
                    return [t, n, (e[2] || 0) * this.distanceScales.unitsPerMeter[2]]
                }, this.unprojectPosition = e => {
                    let [t, n] = K(e);
                    return [t, n, (e[2] || 0) * this.distanceScales.metersPerUnit[2]]
                };
                let {
                    width: n,
                    height: r,
                    altitude: i = null,
                    fovy: a = null
                } = t, {
                    latitude: o = 0,
                    longitude: s = 0,
                    zoom: c = 0,
                    pitch: l = 0,
                    bearing: u = 0,
                    position: d = null,
                    nearZMultiplier: f = .02,
                    farZMultiplier: p = 1.01
                } = t;
                n ||= 1, r ||= 1, a === null && i === null ? (i = pt, a = q(i)) : a === null ? a = q(i) : i === null && (i = ct(a));
                let m = rt(c);
                i = Math.max(.75, i);
                let h = it({
                        longitude: s,
                        latitude: o
                    }),
                    g = G([s, o]);
                g.push(0), d && Fe(g, g, Re([], d, h.unitsPerMeter)), this.projectionMatrix = st({
                    width: n,
                    height: r,
                    scale: m,
                    center: g,
                    pitch: l,
                    fovy: a,
                    nearZMultiplier: f,
                    farZMultiplier: p
                }), this.viewMatrix = at({
                    height: r,
                    scale: m,
                    center: g,
                    pitch: l,
                    bearing: u,
                    altitude: i
                }), this.width = n, this.height = r, this.scale = m, this.latitude = o, this.longitude = s, this.zoom = c, this.pitch = l, this.bearing = u, this.altitude = i, this.fovy = a, this.center = g, this.meterOffset = d || [0, 0, 0], this.distanceScales = h, this._initMatrices(), Object.freeze(this)
            }
            _initMatrices() {
                let {
                    width: e,
                    height: t,
                    projectionMatrix: n,
                    viewMatrix: r
                } = this, i = V();
                z(i, i, n), z(i, i, r), this.viewProjectionMatrix = i;
                let a = V();
                He(a, a, [e / 2, -t / 2, 1]), Ve(a, a, [1, -1, 0]), z(a, a, i);
                let o = Be(V(), a);
                if (!o) throw Error(`Pixel project matrix not invertible`);
                this.pixelProjectionMatrix = a, this.pixelUnprojectionMatrix = o
            }
            projectFlat(e) {
                return G(e)
            }
            unprojectFlat(e) {
                return K(e)
            }
            getMapCenterByLngLatPosition({
                lngLat: e,
                pos: t
            }) {
                let n = ut(t, this.pixelUnprojectionMatrix),
                    r = Ae([], G(e), je([], n));
                return K(Ae([], this.center, r))
            }
            fitBounds(t, n = {}) {
                let {
                    width: r,
                    height: i
                } = this, {
                    longitude: a,
                    latitude: o,
                    zoom: s
                } = mt(Object.assign({
                    width: r,
                    height: i,
                    bounds: t
                }, n));
                return new e({
                    width: r,
                    height: i,
                    longitude: a,
                    latitude: o,
                    zoom: s
                })
            }
            getBounds(e) {
                let t = this.getBoundingRegion(e),
                    n = Math.min(...t.map(e => e[0])),
                    r = Math.max(...t.map(e => e[0])),
                    i = Math.min(...t.map(e => e[1])),
                    a = Math.max(...t.map(e => e[1]));
                return [
                    [n, i],
                    [r, a]
                ]
            }
            getBoundingRegion(e = {}) {
                return _t(this, e.z || 0)
            }
            getLocationAtPoint({
                lngLat: e,
                pos: t
            }) {
                return this.getMapCenterByLngLatPosition({
                    lngLat: e,
                    pos: t
                })
            }
        }
    })),
    Ct = e((() => {
        $()
    })),
    wt = e((() => {
        $()
    })),
    Tt = e((() => {
        St(), bt(), gt(), Ct(), wt(), $()
    }));
export {
    ue as _, G as a, xe as c, ge as d, ve as f, oe as g, fe as h, $ as i, Ce as l, pe as m, xt as n, Oe as o, he as p, St as r, De as s, Tt as t, Se as u, ie as v, k as y
};
//# sourceMappingURL=bcae0416-fhqvka91oinh00wd.js.map