import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as n,
    wn as r
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as i,
    t as a
} from "./0cb8459d-i839srmemzrwuc1c.js";
import {
    r as o,
    t as s
} from "./ee72d6dc-lrvejwb3ptu5oyu2.js";
import {
    t as c
} from "./bcae0416-ojxhpffjgpo2ol4n.js";
import {
    n as l,
    r as u,
    t as d
} from "./686b9e77-kn5cgeyeu2rygmdj.js";
import {
    i as f,
    n as p,
    r as m,
    t as h
} from "./061ab7e7-hs26n09fnveall89.js";
import {
    n as g,
    r as _,
    t as v
} from "./3fb45623-m3512jknvdhcxezi.js";
import {
    n as y,
    t as b
} from "./d25f8a5b-oqbndra2wbq4vim1.js";
import {
    n as x,
    r as S
} from "./19c46ed7-obtlosush1xoldux.js";
import {
    i as C,
    n as w,
    r as T,
    t as E
} from "./e0709cca-m1b75yx81pvjzfes.js";

function D(e, t) {
    return (0, M.jsx)(`h3`, {
        className: `dots-h4`,
        children: t
    })
}

function O(e) {
    let t = S(e.icon);
    return (0, M.jsxs)(`article`, {
        className: `flex min-w-0 flex-col items-start gap-4`,
        children: [t && (0, M.jsx)(t, {
            className: `icon size-8`
        }), (0, M.jsx)(`h3`, {
            className: `dots-h4`,
            children: e.title
        }), (0, M.jsx)(`p`, {
            className: `dots-body text-token-text-secondary`,
            children: e.description
        })]
    }, e.id)
}
var k, A, j, M, N, P, F, I, L = e((() => {
        k = r(), A = d(), j = c(), x(), o(), u(), _(), C(), M = n(), N = [w, T, E], P = e => {
            "use forget";
            let t = (0, k.c)(12),
                {
                    caption: n
                } = e,
                r, i, a, o;
            if (t[0] !== n) {
                let e = l();
                a = `mt-6 flex flex-col gap-3`, o = (0, A.documentToReactComponents)({
                    ...n,
                    content: n.content.slice(0, 1)
                }, {
                    ...e,
                    renderNode: {
                        ...e.renderNode,
                        [j.BLOCKS.PARAGRAPH]: D
                    }
                }), r = `dots-body text-token-text-secondary`, i = (0, A.documentToReactComponents)({
                    ...n,
                    content: n.content.slice(1)
                }, e), t[0] = n, t[1] = r, t[2] = i, t[3] = a, t[4] = o
            } else r = t[1], i = t[2], a = t[3], o = t[4];
            let s;
            t[5] !== r || t[6] !== i ? (s = (0, M.jsx)(`div`, {
                className: r,
                children: i
            }), t[5] = r, t[6] = i, t[7] = s) : s = t[7];
            let c;
            return t[8] !== a || t[9] !== o || t[10] !== s ? (c = (0, M.jsxs)(`div`, {
                className: a,
                children: [o, s]
            }), t[8] = a, t[9] = o, t[10] = s, t[11] = c) : c = t[11], c
        }, F = e => {
            "use forget";
            let t = (0, k.c)(9),
                {
                    media: n,
                    mediaPresentation: r
                } = e,
                i;
            t[0] === n ? i = t[1] : (i = n === void 0 ? [] : n, t[0] = n, t[1] = i);
            let a = i,
                o;
            if (t[2] !== a || t[3] !== r) {
                let e;
                t[5] === r ? e = t[6] : (e = (e, t) => {
                    let n = r === `in-motion` ? N[t] : void 0;
                    return (0, M.jsxs)(`article`, {
                        className: `min-w-0`,
                        children: [n ? (0, M.jsx)(n, {}) : (0, M.jsx)(s, {
                            ...e
                        }), e.caption && (0, M.jsx)(P, {
                            caption: e.caption
                        })]
                    }, e.id)
                }, t[5] = r, t[6] = e), o = a.map(e), t[2] = a, t[3] = r, t[4] = o
            } else o = t[4];
            let c;
            return t[7] === o ? c = t[8] : (c = (0, M.jsx)(v, {
                as: `div`,
                children: (0, M.jsx)(g, {
                    className: `grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3`,
                    children: o
                })
            }), t[7] = o, t[8] = c), c
        }, I = e => {
            "use forget";
            let t = (0, k.c)(6),
                {
                    items: n
                } = e,
                r;
            t[0] === n ? r = t[1] : (r = n === void 0 ? [] : n, t[0] = n, t[1] = r);
            let i = r,
                a;
            t[2] === i ? a = t[3] : (a = i.map(O), t[2] = i, t[3] = a);
            let o;
            return t[4] === a ? o = t[5] : (o = (0, M.jsx)(v, {
                as: `div`,
                children: (0, M.jsx)(g, {
                    className: `grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3`,
                    children: a
                })
            }), t[4] = a, t[5] = o), o
        }
    })),
    R = t({
        default: () => H
    }),
    z, B, V, H, U = e((() => {
        z = r(), a(), f(), y(), L(), o(), B = n(), V = {
            componentMediaGrid: F,
            componentItemGrid: I,
            mediaItem: s
        }, H = e => {
            "use forget";
            let t = (0, z.c)(18),
                {
                    id: n,
                    data: r,
                    subcomponents: a
                } = e,
                o;
            t[0] === a ? o = t[1] : (o = a === void 0 ? [] : a, t[0] = a, t[1] = o);
            let s = o,
                c = !!(r?.ctaLabel && r.ctaHref || r?.secondaryCtaLabel && r.secondaryCtaHref),
                l = r?.anchor,
                u = r?.title,
                d = r?.subtitle,
                f = r?.variant,
                g;
            t[2] !== r || t[3] !== c || t[4] !== n ? (g = c ? (0, B.jsxs)(p, {
                mobile: r?.ctaLabel ? (0, B.jsx)(m, {
                    analyticsIdentifier: `dots-${n}-section-mobile-cta`,
                    children: r.ctaLabel
                }) : void 0,
                children: [r?.ctaLabel && r.ctaHref && (0, B.jsx)(h, {
                    href: r.ctaHref,
                    analyticsIdentifier: `dots-${n}-section-cta`,
                    children: r.ctaLabel
                }), r?.secondaryCtaLabel && r.secondaryCtaHref && (0, B.jsx)(h, {
                    href: r.secondaryCtaHref,
                    platformLabels: r.secondaryCtaPlatformLabels,
                    downloadMode: r.secondaryCtaDownloadMode,
                    platformHrefs: r.secondaryCtaPlatformHrefs,
                    variant: `primary-button`,
                    analyticsIdentifier: `dots-${n}-section-secondary-cta`,
                    children: r.secondaryCtaLabel
                })]
            }) : void 0, t[2] = r, t[3] = c, t[4] = n, t[5] = g) : g = t[5];
            let _;
            if (t[6] !== r?.mediaPresentation || t[7] !== s) {
                let e;
                t[9] === r?.mediaPresentation ? e = t[10] : (e = e => i({
                    ...e,
                    embedded: !0,
                    mediaPresentation: r?.mediaPresentation
                }, V), t[9] = r?.mediaPresentation, t[10] = e), _ = s.map(e), t[6] = r?.mediaPresentation, t[7] = s, t[8] = _
            } else _ = t[8];
            let v;
            return t[11] !== l || t[12] !== u || t[13] !== d || t[14] !== f || t[15] !== g || t[16] !== _ ? (v = (0, B.jsx)(b, {
                id: l,
                title: u,
                subtitle: d,
                variant: f,
                cta: g,
                children: _
            }), t[11] = l, t[12] = u, t[13] = d, t[14] = f, t[15] = g, t[16] = _, t[17] = v) : v = t[17], v
        }
    }));
export {
    R as n, U as r, H as t
};
//# sourceMappingURL=ac5aaa26-g1gh3dtfgg67x40j.js.map