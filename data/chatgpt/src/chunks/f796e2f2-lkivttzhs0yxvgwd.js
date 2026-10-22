import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as r,
    Vn as i,
    wn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $x as o,
    Ef as s,
    Gx as c,
    Qx as l,
    Tf as u,
    Wx as d
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    i as f,
    t as p
} from "./061ab7e7-c1r8lseddhaox2h6.js";
import {
    n as m,
    r as h,
    t as g
} from "./3fb45623-pdrwgy982nr0z8xj.js";

function _(e) {
    "use forget";
    let t = (0, v.c)(5),
        n, r, i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, y.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M28.7998 4.6695C30.8435 3.77602 33.1678 3.77808 35.2113 4.67211L51.1878 11.6617C54.0995 12.9357 55.982 15.8116 55.9821 18.9898V34.1799C55.9818 41.5348 53.3875 47.2984 49.2191 51.7138C45.1098 56.0663 39.5782 59.0001 33.8024 61.0133L33.7816 61.0211C32.64 61.4079 31.4019 61.394 30.2686 60.9872C30.2529 60.9818 30.2373 60.977 30.2217 60.9716L30.2087 60.969C24.4411 58.9703 18.9167 56.0514 14.8076 51.719C10.6243 47.3081 8.01882 41.5428 8.01855 34.1799V18.9898C8.01892 15.8116 9.90095 12.9354 12.8128 11.6617L28.7998 4.6695Z`,
        fill: `#3C5CD8`
    }), r = (0, y.jsx)(`path`, {
        d: `M30.9349 9.55745C31.6161 9.25954 32.3917 9.25945 33.0729 9.55745L49.0495 16.547C50.02 16.9717 50.6483 17.9304 50.6484 18.9897V34.1798C50.6482 40.1463 48.5933 44.6072 45.3411 48.0522C42.0335 51.5557 37.3761 54.1135 32.0677 55.9663C32.0485 55.9592 32.0272 55.9548 32.0078 55.9481C26.6781 54.1075 22.0001 51.553 18.6771 48.0496C15.4142 44.6093 13.3518 40.1492 13.3516 34.1798V18.9897C13.3519 17.9305 13.98 16.9715 14.9505 16.547L30.9349 9.55745Z`,
        fill: `#608DFF`
    }), i = (0, y.jsx)(`path`, {
        d: `M32 9.34916V55.9663C31.9964 55.9653 31.9927 55.9646 31.9893 55.9634C26.6595 54.1228 21.9812 51.5683 18.6582 48.065C15.3953 44.6246 13.3333 40.1642 13.333 34.1949V19.0044C13.3336 17.9455 13.9614 16.9865 14.9316 16.5621L30.916 9.57279C31.2612 9.42185 31.6309 9.34715 32 9.34916Z`,
        fill: `#7DA2FF`
    }), t[0] = n, t[1] = r, t[2] = i) : (n = t[0], r = t[1], i = t[2]);
    let a;
    return t[3] === e ? a = t[4] : (a = (0, y.jsxs)(`svg`, {
        width: `64`,
        height: `64`,
        viewBox: `0 0 64 64`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        "aria-hidden": `true`,
        ...e,
        children: [n, r, i]
    }), t[3] = e, t[4] = a), a
}
var v, y, b = e((() => {
        v = a(), y = r()
    })),
    x = t({
        default: () => D
    });

function S(e) {
    let t = e.icon ? E[e.icon] : void 0;
    return (0, T.jsxs)(`article`, {
        className: `dots-trust-card`,
        children: [t && (0, T.jsx)(`div`, {
            className: `dots-trust-card-icon`,
            children: (0, T.jsx)(t, {
                className: `icon`
            })
        }), (0, T.jsx)(`h3`, {
            children: e.title
        }), (0, T.jsx)(`p`, {
            children: e.description
        })]
    }, e.id)
}
var C, w, T, E, D, O = e((() => {
    C = a(), w = n(i()), d(), u(), l(), f(), h(), b(), T = r(), E = {
        "shield-lock": c,
        "user-lock": s,
        "lock-key-hole": o
    }, D = e => {
        "use forget";
        let t = (0, C.c)(27),
            {
                id: n,
                data: r
            } = e,
            i = (0, w.useId)();
        if (!r) return null;
        let a = r.heading ? i : void 0,
            o;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, T.jsx)(_, {
            className: `dots-trust-shield`
        }), t[0] = o) : o = t[0];
        let s;
        t[1] !== r.heading || t[2] !== i ? (s = r.heading && (0, T.jsx)(`h2`, {
            id: i,
            className: `dots-section-title`,
            children: r.heading
        }), t[1] = r.heading, t[2] = i, t[3] = s) : s = t[3];
        let c;
        t[4] === r.description ? c = t[5] : (c = r.description && (0, T.jsx)(`p`, {
            className: `dots-section-subtitle`,
            children: r.description
        }), t[4] = r.description, t[5] = c);
        let l;
        t[6] !== r.ctaHref || t[7] !== r.ctaLabel || t[8] !== n ? (l = r.ctaLabel && r.ctaHref && (0, T.jsx)(`div`, {
            className: `dots-section-actions`,
            children: (0, T.jsx)(p, {
                href: r.ctaHref,
                variant: `primary-button`,
                analyticsIdentifier: `dots-${n}-trust-details`,
                children: r.ctaLabel
            })
        }), t[6] = r.ctaHref, t[7] = r.ctaLabel, t[8] = n, t[9] = l) : l = t[9];
        let u;
        t[10] !== s || t[11] !== c || t[12] !== l ? (u = (0, T.jsx)(g, {
            as: `div`,
            children: (0, T.jsxs)(m, {
                width: `medium`,
                className: `dots-section-header text-center`,
                children: [o, s, c, l]
            })
        }), t[10] = s, t[11] = c, t[12] = l, t[13] = u) : u = t[13];
        let d;
        t[14] === r.items ? d = t[15] : (d = r.items?.map(S), t[14] = r.items, t[15] = d);
        let f;
        t[16] === d ? f = t[17] : (f = (0, T.jsx)(`div`, {
            className: `dots-trust-cards`,
            children: d
        }), t[16] = d, t[17] = f);
        let h;
        t[18] === r.footnote ? h = t[19] : (h = r.footnote && (0, T.jsx)(`p`, {
            className: `dots-trust-footnote`,
            children: r.footnote
        }), t[18] = r.footnote, t[19] = h);
        let v;
        t[20] !== f || t[21] !== h ? (v = (0, T.jsx)(g, {
            as: `div`,
            children: (0, T.jsxs)(m, {
                width: `medium`,
                children: [f, h]
            })
        }), t[20] = f, t[21] = h, t[22] = v) : v = t[22];
        let y;
        return t[23] !== a || t[24] !== v || t[25] !== u ? (y = (0, T.jsxs)(`section`, {
            id: `trust`,
            className: `dots-section-layout dots-trust`,
            "aria-labelledby": a,
            children: [u, v]
        }), t[23] = a, t[24] = v, t[25] = u, t[26] = y) : y = t[26], y
    }
}));
export {
    O as n, x as r, D as t
};
//# sourceMappingURL=f796e2f2-lkivttzhs0yxvgwd.js.map