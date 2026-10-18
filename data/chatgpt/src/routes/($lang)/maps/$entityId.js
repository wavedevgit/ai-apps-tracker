import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    FH as n,
    IH as r,
    Nrt as i,
    PH as a,
    Prt as o,
    QV as s,
    b5 as c,
    c as l,
    d as u,
    f as d,
    iH as ee,
    l as f,
    y5 as te
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as p,
    At as m,
    Bn as ne,
    Bt as h,
    Nn as re,
    Pt as g,
    Rn as _,
    Rt as v,
    Ut as y,
    Vn as b,
    Wt as x,
    _t as S,
    jt as C,
    wn as w,
    zn as ie
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $An as T,
    $dt as ae,
    Cut as oe,
    H3t as se,
    KAn as ce,
    R3t as le,
    Xdt as ue,
    Ydt as de,
    Zdt as E,
    wut as D
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    _v as fe,
    vv as O
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Hd as k,
    Ud as pe
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as A,
    t as j
} from "./9f7bb6d3-l9ls9y254izawjwa.js";
import {
    n as M,
    t as N
} from "./e18c46cf-fjyf5ehpuodlki4v.js";
import {
    i as P,
    n as F,
    r as I,
    t as L
} from "./91c34c92-dkd0y6bawu5w0d3b.js";
import {
    n as R,
    t as me
} from "./bd0b8304-el69xjqfj6a1his0.js";
import {
    n as z,
    r as B,
    t as V
} from "./ee874e5c-cvdxewajjvmol024.js";
import {
    i as H,
    r as he,
    t as ge
} from "./871633a6-imx4rt9sk2fjh4x1.js";
import {
    r as U,
    t as _e
} from "./a10c6989-2n0o6v9ryba6lw9m.js";
import {
    n as ve,
    t as W
} from "./bd4574d9-iwyqpe4pq3jv2dm2.js";
import {
    i as G,
    n as ye,
    t as be
} from "./74d67c64-b7n6l5e5ddu3iy9c.js";

function K(e) {
    "use forget";
    let t = (0, we.c)(85),
        {
            entityId: n,
            business: r,
            onClose: i,
            origin: s,
            shareId: c
        } = e,
        u = ie(),
        d = (0, q.useId)(),
        ee = (0, q.useRef)(null),
        f;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = ye(), t[0] = f) : f = t[0];
    let p = f,
        [m, ne] = (0, q.useState)(Ce),
        h, g, _;
    if (t[1] !== r || t[2] !== n) {
        h = ve(r);
        let e = ue(h);
        g = o() ? ae({
            name: h.name,
            category: `local_business`,
            extraParams: {
                entity_lookup_id: n,
                ...h.address ? {
                    address: h.address
                } : {}
            },
            imageThumbnailUrl: e
        }) : null, _ = new Set([e, ...h.image_urls ?? [], ...h.reconciled_thumbnails?.map(Se) ?? [], h.image_url].filter(xe)), t[1] = r, t[2] = n, t[3] = h, t[4] = g, t[5] = _
    } else h = t[3], g = t[4], _ = t[5];
    let v;
    t[6] === _ ? v = t[7] : (v = [..._].slice(0, Ee), t[6] = _, t[7] = v);
    let y = v,
        b = y.length > 0,
        x;
    t[8] === b ? x = t[9] : (x = be(b), t[8] = b, t[9] = x);
    let S = x,
        C;
    t[10] !== r.latitude || t[11] !== r.longitude ? (C = he(r.latitude, r.longitude), t[10] = r.latitude, t[11] = r.longitude, t[12] = C) : C = t[12];
    let w = C,
        T;
    t[13] !== r.address || t[14] !== r.name ? (T = [r.name, r.address].filter(Boolean), t[13] = r.address, t[14] = r.name, t[15] = T) : T = t[15];
    let se = T.join(`, `),
        de = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(se)}`,
        E;
    t[16] !== r.name || t[17] !== u ? (E = u.formatMessage({
        id: `chatgpt.places.entity_share.map.image_alt`,
        defaultMessage: `Map showing {placeName}`
    }, {
        placeName: r.name
    }), t[16] = r.name, t[17] = u, t[18] = E) : E = t[18];
    let D = E,
        O;
    t[19] === u ? O = t[20] : (O = u.formatMessage({
        id: `chatgpt.places.entity_share.page.button.close`,
        defaultMessage: `Close place`
    }), t[19] = u, t[20] = O);
    let k = O,
        A, j;
    t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (A = () => {
        if (typeof le.prefetch != `function`) return;
        let e = !0;
        return le.prefetch().then(() => {
            e && ne(!0)
        }), () => {
            e = !1
        }
    }, j = [], t[21] = A, t[22] = j) : (A = t[21], j = t[22]), (0, q.useEffect)(A, j);
    let M;
    t[23] !== n || t[24] !== c ? (M = (0, J.jsx)(l, {
        entityKind: `place`,
        entityId: n,
        shareId: c
    }), t[23] = n, t[24] = c, t[25] = M) : M = t[25];
    let N;
    t[26] !== r.name || t[27] !== y[0] || t[28] !== y.length ? (N = y.length === 1 && (0, J.jsx)(`div`, {
        className: `loading-results-shimmer h-[min(32dvh,220px)] overflow-hidden sm:h-[min(34dvh,260px)]`,
        children: (0, J.jsx)(`img`, {
            alt: r.name,
            className: `h-full w-full object-cover`,
            src: y[0]
        })
    }), t[26] = r.name, t[27] = y[0], t[28] = y.length, t[29] = N) : N = t[29];
    let P;
    t[30] !== r.name || t[31] !== y ? (P = y.length > 1 && (0, J.jsx)(_e, {
        aspect: `h-[min(32dvh,220px)] sm:h-[min(34dvh,260px)]`,
        className: `w-full`,
        gap: 4,
        images: y.map((e, t) => ({
            src: e,
            alt: t === 0 ? r.name : ``,
            content: (0, J.jsx)(`div`, {
                className: `loading-results-shimmer h-full w-full overflow-hidden`,
                children: (0, J.jsx)(`img`, {
                    alt: t === 0 ? r.name : ``,
                    className: `h-full w-full object-cover`,
                    draggable: !1,
                    loading: t === 0 ? `eager` : `lazy`,
                    src: e
                })
            })
        })),
        peekPercent: 68,
        showArrows: !0,
        showDots: !0,
        slideClassName: `w-[68%]`
    }), t[30] = r.name, t[31] = y, t[32] = P) : P = t[32];
    let F = y.length > 0 && `absolute inset-x-0 top-0 z-10`,
        I;
    t[33] === F ? I = t[34] : (I = te(`flex h-14 items-center justify-end gap-3 px-3 py-2`, F), t[33] = F, t[34] = I);
    let L;
    t[35] === g ? L = t[36] : (L = g != null && (0, J.jsx)(pe, {
        analyticsSurface: `map_card`,
        className: p,
        request: g
    }), t[35] = g, t[36] = L);
    let R;
    t[37] !== n || t[38] !== s ? (R = a(n, s), t[37] = n, t[38] = s, t[39] = R) : R = t[39];
    let z;
    t[40] !== h || t[41] !== R ? (z = (0, J.jsx)(oe, {
        business: h,
        canonicalUrl: R,
        className: p,
        requireFeatureGate: !0,
        withTooltip: !0
    }), t[40] = h, t[41] = R, t[42] = z) : z = t[42];
    let B;
    t[43] !== S || t[44] !== L || t[45] !== z ? (B = (0, J.jsxs)(`div`, {
        className: S,
        children: [L, z]
    }), t[43] = S, t[44] = L, t[45] = z, t[46] = B) : B = t[46];
    let V;
    t[47] === i ? V = t[48] : (V = e => {
        i == null || e.defaultPrevented || e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || (e.preventDefault(), i())
    }, t[47] = i, t[48] = V);
    let H;
    t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (H = (0, J.jsx)(fe, {
        "aria-hidden": `true`,
        className: `icon`
    }), t[49] = H) : H = t[49];
    let U;
    t[50] !== k || t[51] !== V ? (U = (0, J.jsx)(`a`, {
        "aria-label": k,
        className: p,
        href: `/maps`,
        onClick: V,
        ref: ee,
        children: H
    }), t[50] = k, t[51] = V, t[52] = U) : U = t[52];
    let W;
    t[53] !== S || t[54] !== U ? (W = (0, J.jsx)(`div`, {
        className: S,
        children: U
    }), t[53] = S, t[54] = U, t[55] = W) : W = t[55];
    let G;
    t[56] !== I || t[57] !== B || t[58] !== W ? (G = (0, J.jsxs)(`div`, {
        className: I,
        children: [B, W]
    }), t[56] = I, t[57] = B, t[58] = W, t[59] = G) : G = t[59];
    let K;
    t[60] !== r.name || t[61] !== d ? (K = (0, J.jsx)(`header`, {
        className: `px-6 pt-6`,
        children: (0, J.jsx)(`div`, {
            className: `min-w-0`,
            children: (0, J.jsx)(`h1`, {
                className: `text-2xl leading-8 font-semibold`,
                id: d,
                children: r.name
            })
        })
    }), t[60] = r.name, t[61] = d, t[62] = K) : K = t[62];
    let Y;
    t[63] !== N || t[64] !== P || t[65] !== G || t[66] !== K ? (Y = (0, J.jsxs)(`div`, {
        className: `relative shrink-0`,
        children: [N, P, G, K]
    }), t[63] = N, t[64] = P, t[65] = G, t[66] = K, t[67] = Y) : Y = t[67];
    let X;
    t[68] !== d || t[69] !== h || t[70] !== m || t[71] !== de ? (X = m ? (0, J.jsx)(le, {
        business: h,
        contentReferenceType: `entity_metadata`,
        entityCategory: `local_business`,
        fullWidth: !0,
        mapUrl: de,
        showActionButtons: !0,
        showBusinessProfileClaimSurface: !1,
        showExtendedDetails: !0,
        showHourDetail: !0,
        showMapPreview: !1,
        surfaceLocation: ce.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_FULLSCREEN_MAP
    }) : (0, J.jsx)(`div`, {
        "aria-busy": `true`,
        "aria-labelledby": d,
        className: `w-full space-y-5`,
        role: `status`,
        children: (0, J.jsxs)(`div`, {
            "aria-hidden": `true`,
            className: `space-y-5`,
            children: [(0, J.jsx)(`div`, {
                className: `loading-results-shimmer h-5 w-48 rounded-md`
            }), (0, J.jsxs)(`div`, {
                className: `flex gap-2`,
                children: [(0, J.jsx)(`div`, {
                    className: `loading-results-shimmer h-9 w-28 rounded-full`
                }), (0, J.jsx)(`div`, {
                    className: `loading-results-shimmer h-9 w-24 rounded-full`
                })]
            }), (0, J.jsxs)(`div`, {
                className: `space-y-3`,
                children: [(0, J.jsx)(`div`, {
                    className: `loading-results-shimmer h-12 w-full rounded-lg`
                }), (0, J.jsx)(`div`, {
                    className: `loading-results-shimmer h-12 w-full rounded-lg`
                })]
            })]
        })
    }), t[68] = d, t[69] = h, t[70] = m, t[71] = de, t[72] = X) : X = t[72];
    let Z;
    t[73] !== w || t[74] !== h || t[75] !== D ? (Z = w != null && (0, J.jsxs)(`section`, {
        className: `shrink-0 overflow-hidden rounded-2xl`,
        children: [(0, J.jsx)(`div`, {
            className: `loading-results-shimmer h-64 w-full`,
            children: (0, J.jsx)(ge, {
                alt: D,
                business: h,
                height: 256,
                width: 640
            })
        }), (0, J.jsx)(`p`, {
            className: `text-token-text-secondary bg-token-bg-secondary px-3 py-2 text-xs`,
            children: (0, J.jsx)(re, {
                id: `chatgpt.places.entity_share.map.attribution`,
                defaultMessage: `Map data: {mapbox} and {openStreetMap}`,
                values: {
                    mapbox: (0, J.jsx)(`a`, {
                        className: `underline`,
                        href: `https://www.mapbox.com/about/maps`,
                        rel: `noreferrer`,
                        target: `_blank`,
                        children: Te
                    }),
                    openStreetMap: (0, J.jsx)(`a`, {
                        className: `underline`,
                        href: `https://www.openstreetmap.org/copyright`,
                        rel: `noreferrer`,
                        target: `_blank`,
                        children: De
                    })
                }
            })
        })]
    }), t[73] = w, t[74] = h, t[75] = D, t[76] = Z) : Z = t[76];
    let Q;
    t[77] !== X || t[78] !== Z ? (Q = (0, J.jsxs)(`div`, {
        className: `flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-6 py-6 text-sm`,
        children: [X, Z]
    }), t[77] = X, t[78] = Z, t[79] = Q) : Q = t[79];
    let $;
    return t[80] !== d || t[81] !== M || t[82] !== Y || t[83] !== Q ? ($ = (0, J.jsxs)(me, {
        titleId: d,
        closeRef: ee,
        children: [M, Y, Q]
    }), t[80] = d, t[81] = M, t[82] = Y, t[83] = Q, t[84] = $) : $ = t[84], $
}

function xe(e) {
    return !!e
}

function Se(e) {
    return e.image_url
}

function Ce() {
    return typeof le.prefetch != `function`
}
var we, q, J, Te, Ee, De, Y = e((() => {
        we = w(), R(), f(), se(), H(), E(), O(), U(), n(), W(), D(), k(), G(), i(), T(), c(), q = t(b()), _(), J = ne(), Te = `Mapbox`, Ee = 20, De = `OpenStreetMap`
    })),
    X, Z, Q, $, Oe, ke, Ae, je, Me = e((() => {
        p(), X = w(), A(), P(), d(), f(), E(), M(), n(), Y(), F(), B(), ee(), Z = t(b()), Q = ne(), $ = `noindex, nofollow, noarchive`, Oe = {
            hasRouteMeta: !0,
            useScrollRestoration: !0
        }, ke = ({
            data: e
        }) => {
            if (e == null) return [{
                title: `ChatGPT Maps`
            }, {
                name: `robots`,
                content: $
            }];
            let t = a(e.entity_id, e.origin),
                n = [e.business.address, ...e.business.categories ?? []].filter(Boolean).join(` · `),
                r = `${e.business.name} | ChatGPT Maps`,
                i = de(e.business),
                o = e.richLinkRendersEnabled ? L(`place`, e.entity_id, e.business.name) : i ? {
                    url: i,
                    alt: e.business.name
                } : s,
                c = e.richLinkRendersEnabled ? e.business.name : r;
            return [{
                title: r
            }, {
                name: `robots`,
                content: $
            }, ...n ? [{
                name: `description`,
                content: n
            }] : [], {
                property: `og:type`,
                content: `website`
            }, {
                property: `og:url`,
                content: t
            }, {
                property: `og:title`,
                content: c
            }, ...e.richLinkRendersEnabled ? [{
                property: `og:site_name`,
                content: `ChatGPT`
            }] : [], ...n ? [{
                property: `og:description`,
                content: n
            }] : [], ...z({
                ...o,
                secureUrl: V(o.url)
            }), {
                name: `twitter:card`,
                content: `summary_large_image`
            }, {
                name: `twitter:title`,
                content: c
            }, {
                name: `twitter:image`,
                content: o.url
            }, {
                name: `twitter:image:alt`,
                content: o.alt
            }, ...n ? [{
                name: `twitter:description`,
                content: n
            }] : [], {
                tagName: `link`,
                rel: `canonical`,
                href: t
            }]
        }, Ae = y(function() {
            "use forget";
            let e = (0, X.c)(10),
                t = m(),
                n = C(),
                r;
            e[0] === n.search ? r = e[1] : (r = u(n.search), e[0] = n.search, e[1] = r);
            let i = r,
                a = g(),
                [o, s] = (0, Z.useState)(!0),
                c;
            e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Q.jsx)(I, {}), e[2] = c) : c = e[2];
            let l;
            e[3] !== t || e[4] !== o || e[5] !== a || e[6] !== i ? (l = o && (0, Q.jsx)(K, {
                business: t.business,
                entityId: t.entity_id,
                shareId: i,
                onClose: () => {
                    s(!1), a(`/`, {
                        replace: !0
                    })
                },
                origin: t.origin
            }), e[3] = t, e[4] = o, e[5] = a, e[6] = i, e[7] = l) : l = e[7];
            let d;
            return e[8] === l ? d = e[9] : (d = (0, Q.jsxs)(j, {
                conversationId: void 0,
                children: [c, l]
            }), e[8] = l, e[9] = d), d
        }), je = x(function() {
            "use forget";
            let e = (0, X.c)(8),
                t = h(),
                {
                    entityId: n
                } = v(),
                i = C(),
                a;
            e[0] === i.search ? a = e[1] : (a = u(i.search), e[0] = i.search, e[1] = a);
            let o = a;
            if (S(t) && t.status === 404) {
                let t;
                e[2] !== n || e[3] !== o ? (t = r(n) && (0, Q.jsx)(l, {
                    entityKind: `place`,
                    entityId: n,
                    shareId: o,
                    failed: !0
                }), e[2] = n, e[3] = o, e[4] = t) : t = e[4];
                let i;
                e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Q.jsx)(N, {}), e[5] = i) : i = e[5];
                let a;
                return e[6] === t ? a = e[7] : (a = (0, Q.jsxs)(Q.Fragment, {
                    children: [t, i]
                }), e[6] = t, e[7] = a), a
            }
            throw t
        })
    }));
e((() => {
    Me()
}))();
export {
    je as ErrorBoundary, Ae as
    default, Oe as handle, ke as meta
};
//# sourceMappingURL=(_lang).maps._entityId-kqgdllyh.js.map