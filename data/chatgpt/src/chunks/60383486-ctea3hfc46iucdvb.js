const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/020d00e6-e64rxt2yddg4wdbf.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/b2c255f5-dgzm1bcta7422yc7.js", "assets/9e9d0eec-j24gxg6gi9duoed8.js", "assets/ea7792a2-hplb1nd79ppn7q2q.js", "assets/c3104c13-celq2mcekzljf1n9.js", "assets/b093033a-jhctgf5ky4g4ygdp.js", "assets/7e5e046a-g9x9bmdo3xbp5kep.js", "assets/bcae0416-k91rhitemtfjyovh.js", "assets/c2675c8c-h5ybkhdzcoblzzdu.js", "assets/4813494d-tap9fxyhk4ehe0bs.js", "assets/root-lelxp0l2.css", "assets/conversation-small-nmt18uiom3b14vca.js", "assets/30901919-niqyapppecmq5jkn.js", "assets/c470f5ab-uuoa2gfm4goj6p9f.js", "assets/0e5afe53-f7up6uuou2fv3lyg.js", "assets/conversation-small-bwtqiuwj.css", "assets/82782bc9-g3liom11amtlr9kq.js", "assets/8b34dbc2-ojcl97ddvu2212q0.js", "assets/global-modals-lv5n3ujm.css", "assets/c00ae0a6-kig972vlqjth4u0a.js", "assets/99299f16-ifqocln7gdyjwh48.js", "assets/c871dc1d-lpy7e3u6bxclkcy0.js", "assets/dd651ce9-ixiil6xwqei9br73.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as r,
    Y5 as i
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as a,
    Vn as o,
    cn as s,
    ln as c,
    wn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as u,
    r as d,
    t as f
} from "./686b9e77-hj8ru32gtgxeg96l.js";
import {
    n as p,
    t as m
} from "./b2c255f5-dgzm1bcta7422yc7.js";
import {
    i as h,
    n as g,
    r as _,
    t as v
} from "./061ab7e7-gvyk8fwwpqp4qdnr.js";
import {
    n as y,
    r as b,
    t as x
} from "./3fb45623-ehds9wb3u4ub8snm.js";
import {
    n as S,
    t as C
} from "./8b0ac3b9-j0yad436tebe4ags.js";
import {
    i as w,
    n as T,
    r as E,
    t as D
} from "./a5961f3f-l1uf7n6usfaivlbh.js";
var O, k = e((() => {
        O = {
            section: `w-full px-4 py-16 min-[768px]:py-32`,
            card: `mx-auto flex w-full max-w-[768px] flex-col items-center rounded-[37px] border border-token-border-light bg-token-bg-elevated-secondary px-4 pt-10 pb-8 text-center [--dots-surface:var(--bg-elevated-secondary)] min-[768px]:p-12`,
            mark: `mb-6 size-14 shrink-0`,
            copy: `flex w-full max-w-[572px] flex-col gap-6`,
            heading: `text-[32px] leading-[1.2] font-medium tracking-[-0.02em] text-token-text-primary min-[768px]:text-[36px]`,
            description: `text-[17px] leading-[1.45] text-token-text-secondary`,
            details: `mt-10 flex w-full flex-col items-center gap-4`,
            availability: `text-sm leading-[1.5] text-token-text-tertiary min-[768px]:leading-[1.45]`,
            actions: `flex flex-wrap justify-center gap-3`
        }
    })),
    A = t({
        default: () => I
    }),
    j, M, N, P, F, I, L = e((() => {
        j = l(), d(), M = f(), N = n(o()), r(), h(), b(), T(), w(), k(), S(), p(), P = a(), c(), F = (0, N.lazy)(() => s(() => import(`./020d00e6-e64rxt2yddg4wdbf.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]))), I = e => {
            "use forget";
            let t = (0, j.c)(75),
                {
                    id: n,
                    data: r,
                    media: a,
                    localizedRichTextItems: o
                } = e,
                s = (0, N.useId)(),
                {
                    models: c
                } = (0, N.useContext)(m);
            if (!r) return null;
            let l = o?.[0]?.richText,
                d;
            t[0] !== r.description || t[1] !== l ? (d = l ? (0, M.documentToReactComponents)(l, u()) : r.description && (0, P.jsx)(`p`, {
                children: r.description
            }), t[0] = r.description, t[1] = l, t[2] = d) : d = t[2];
            let f = d,
                p;
            t[3] !== r.ctaLabel || t[4] !== n ? (p = r.ctaLabel ? (0, P.jsx)(_, {
                analyticsIdentifier: `dots-${n}-get-started`,
                children: r.ctaLabel
            }) : void 0, t[3] = r.ctaLabel, t[4] = n, t[5] = p) : p = t[5];
            let h;
            t[6] !== r.ctaHref || t[7] !== r.ctaLabel || t[8] !== n ? (h = r.ctaLabel && r.ctaHref && (0, P.jsx)(v, {
                href: r.ctaHref,
                analyticsIdentifier: `dots-${n}-get-started`,
                children: r.ctaLabel
            }), t[6] = r.ctaHref, t[7] = r.ctaLabel, t[8] = n, t[9] = h) : h = t[9];
            let b;
            t[10] !== r.secondaryCtaHref || t[11] !== r.secondaryCtaLabel || t[12] !== n ? (b = r.secondaryCtaLabel && r.secondaryCtaHref && (0, P.jsx)(v, {
                href: r.secondaryCtaHref,
                variant: `primary-button`,
                analyticsIdentifier: `dots-${n}-get-details`,
                children: r.secondaryCtaLabel
            }), t[10] = r.secondaryCtaHref, t[11] = r.secondaryCtaLabel, t[12] = n, t[13] = b) : b = t[13];
            let S;
            t[14] !== p || t[15] !== h || t[16] !== b ? (S = (0, P.jsxs)(g, {
                mobile: p,
                children: [h, b]
            }), t[14] = p, t[15] = h, t[16] = b, t[17] = S) : S = t[17];
            let w = S;
            if (r.variant === `card`) {
                let e = r.cardMediaIndex == null ? void 0 : a?.[r.cardMediaIndex],
                    n = r.heading ? s : void 0,
                    i;
                t[18] === e ? i = t[19] : (i = e && (0, P.jsx)(`div`, {
                    className: O.mark,
                    "aria-hidden": `true`,
                    children: (0, P.jsx)(E, {
                        ...e,
                        altText: ``,
                        rounding: `none`
                    })
                }), t[18] = e, t[19] = i);
                let o;
                t[20] !== r.heading || t[21] !== s ? (o = r.heading && (0, P.jsx)(`h2`, {
                    id: s,
                    className: O.heading,
                    children: r.heading
                }), t[20] = r.heading, t[21] = s, t[22] = o) : o = t[22];
                let c;
                t[23] === f ? c = t[24] : (c = f && (0, P.jsx)(`div`, {
                    className: O.description,
                    children: f
                }), t[23] = f, t[24] = c);
                let l;
                t[25] !== o || t[26] !== c ? (l = (0, P.jsxs)(`div`, {
                    className: O.copy,
                    children: [o, c]
                }), t[25] = o, t[26] = c, t[27] = l) : l = t[27];
                let u;
                t[28] === r.availability ? u = t[29] : (u = r.availability && (0, P.jsx)(`p`, {
                    className: O.availability,
                    children: r.availability
                }), t[28] = r.availability, t[29] = u);
                let d;
                t[30] === w ? d = t[31] : (d = (0, P.jsx)(`div`, {
                    className: O.actions,
                    children: w
                }), t[30] = w, t[31] = d);
                let p;
                t[32] !== u || t[33] !== d ? (p = (0, P.jsxs)(`div`, {
                    className: O.details,
                    children: [u, d]
                }), t[32] = u, t[33] = d, t[34] = p) : p = t[34];
                let m;
                t[35] !== l || t[36] !== p || t[37] !== i ? (m = (0, P.jsxs)(`div`, {
                    className: O.card,
                    children: [i, l, p]
                }), t[35] = l, t[36] = p, t[37] = i, t[38] = m) : m = t[38];
                let h;
                return t[39] !== m || t[40] !== n ? (h = (0, P.jsx)(`section`, {
                    id: `get-dot`,
                    className: O.section,
                    "aria-labelledby": n,
                    children: m
                }), t[39] = m, t[40] = n, t[41] = h) : h = t[41], h
            }
            let T = r.presentation === `custom` && r.animation === `get-dot`,
                k = r.artwork?.mediaIndex ?? r.mediaIndex,
                A;
            t[42] !== r || t[43] !== k ? (A = {
                ...r,
                presentation: `media`,
                mediaIndex: k
            }, t[42] = r, t[43] = k, t[44] = A) : A = t[44];
            let I;
            t[45] !== a || t[46] !== A ? (I = (0, P.jsx)(D, {
                data: A,
                media: a,
                className: `dots-get-artwork-media`
            }), t[45] = a, t[46] = A, t[47] = I) : I = t[47];
            let L = I,
                R = r.artwork?.layout === `overflow` && `dots-get-started-overflow`,
                z = T && `dots-get-started-custom`,
                B;
            t[48] !== z || t[49] !== R ? (B = i(`dots-section-layout dots-get-started`, R, z), t[48] = z, t[49] = R, t[50] = B) : B = t[50];
            let V = r.heading ? s : void 0,
                H;
            t[51] !== T || t[52] !== r.heading || t[53] !== L || t[54] !== c ? (H = (0, P.jsx)(`div`, {
                className: `dots-get-artwork`,
                children: T && c ? (0, P.jsx)(C, {
                    label: r.heading ?? ``,
                    className: `dots-get-canvas`,
                    fallback: (0, P.jsx)(`div`, {
                        className: `dots-get-fallback`,
                        children: L
                    }),
                    children: (0, P.jsx)(F, {})
                }) : T ? (0, P.jsx)(`div`, {
                    className: `dots-get-static-fallback`,
                    children: L
                }) : L
            }), t[51] = T, t[52] = r.heading, t[53] = L, t[54] = c, t[55] = H) : H = t[55];
            let U;
            t[56] !== r.heading || t[57] !== s ? (U = r.heading && (0, P.jsx)(`h2`, {
                id: s,
                children: r.heading
            }), t[56] = r.heading, t[57] = s, t[58] = U) : U = t[58];
            let W;
            t[59] === f ? W = t[60] : (W = f && (0, P.jsx)(`div`, {
                children: f
            }), t[59] = f, t[60] = W);
            let G;
            t[61] === r.availability ? G = t[62] : (G = r.availability && (0, P.jsx)(`div`, {
                className: `dots-get-availability`,
                children: r.availability
            }), t[61] = r.availability, t[62] = G);
            let K;
            t[63] === w ? K = t[64] : (K = (0, P.jsx)(`div`, {
                className: `dots-section-actions`,
                children: w
            }), t[63] = w, t[64] = K);
            let q;
            t[65] !== U || t[66] !== W || t[67] !== G || t[68] !== K ? (q = (0, P.jsx)(x, {
                as: `div`,
                children: (0, P.jsxs)(y, {
                    width: `narrow`,
                    className: `dots-get-copy`,
                    children: [U, W, G, K]
                })
            }), t[65] = U, t[66] = W, t[67] = G, t[68] = K, t[69] = q) : q = t[69];
            let J;
            return t[70] !== B || t[71] !== V || t[72] !== H || t[73] !== q ? (J = (0, P.jsxs)(`section`, {
                id: `get-dot`,
                className: B,
                "aria-labelledby": V,
                children: [H, q]
            }), t[70] = B, t[71] = V, t[72] = H, t[73] = q, t[74] = J) : J = t[74], J
        }
    }));
export {
    A as n, L as r, I as t
};
//# sourceMappingURL=60383486-ctea3hfc46iucdvb.js.map