const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/020d00e6-c6mct29rhzuyrl8h.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/b2c255f5-dgzm1bcta7422yc7.js", "assets/9e9d0eec-j24gxg6gi9duoed8.js", "assets/ea7792a2-hplb1nd79ppn7q2q.js", "assets/c3104c13-ftst8gn2av6dk9x3.js", "assets/b093033a-c78t9m8tqd03b0xd.js", "assets/7e5e046a-g9x9bmdo3xbp5kep.js", "assets/bcae0416-inj7mbnpv3gkjpk5.js", "assets/c2675c8c-f8x469cgefxzeo6l.js", "assets/4813494d-d7xm9wsvhdfbag9a.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m7dgsxtvvivh3e6t.js", "assets/30901919-lc79rizhhepnsl3q.js", "assets/c470f5ab-lnsrbaizit3lulwq.js", "assets/0e5afe53-lar0ol3v36kqq3ou.js", "assets/conversation-small-ertg9659.css", "assets/82782bc9-cyj0qqxyrvk6mamy.js", "assets/8b34dbc2-ik628tlti8ozm9vq.js", "assets/global-modals-dxg9ukpk.css", "assets/c00ae0a6-mdun99kbcpn7miyy.js", "assets/99299f16-e693udcuodo5ktui.js", "assets/c871dc1d-f3fxp9mjiy0uesja.js", "assets/dd651ce9-ixiil6xwqei9br73.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    l7 as r,
    u7 as i
} from "./4813494d-d7xm9wsvhdfbag9a.js";
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
} from "./686b9e77-c3tf0l2frno98y9v.js";
import {
    n as p,
    t as m
} from "./b2c255f5-dgzm1bcta7422yc7.js";
import {
    i as h,
    n as g,
    r as _,
    t as v
} from "./061ab7e7-gpl7o4lg6wf7f43t.js";
import {
    n as y,
    r as b,
    t as x
} from "./3fb45623-betfyuq9hg5ptv6j.js";
import {
    n as S,
    t as C
} from "./8b0ac3b9-duwn8iqqiis0dsdk.js";
import {
    i as w,
    n as T,
    r as E,
    t as D
} from "./a5961f3f-mjc2icpsgze65q2a.js";
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
        j = l(), d(), M = f(), N = n(o()), i(), h(), b(), T(), w(), k(), S(), p(), P = a(), c(), F = (0, N.lazy)(() => s(() => import(`./020d00e6-c6mct29rhzuyrl8h.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]))), I = e => {
            "use forget";
            let t = (0, j.c)(75),
                {
                    id: n,
                    data: i,
                    media: a,
                    localizedRichTextItems: o
                } = e,
                s = (0, N.useId)(),
                {
                    models: c
                } = (0, N.useContext)(m);
            if (!i) return null;
            let l = o?.[0]?.richText,
                d;
            t[0] !== i.description || t[1] !== l ? (d = l ? (0, M.documentToReactComponents)(l, u()) : i.description && (0, P.jsx)(`p`, {
                children: i.description
            }), t[0] = i.description, t[1] = l, t[2] = d) : d = t[2];
            let f = d,
                p;
            t[3] !== i.ctaLabel || t[4] !== n ? (p = i.ctaLabel ? (0, P.jsx)(_, {
                analyticsIdentifier: `dots-${n}-get-started`,
                children: i.ctaLabel
            }) : void 0, t[3] = i.ctaLabel, t[4] = n, t[5] = p) : p = t[5];
            let h;
            t[6] !== i.ctaHref || t[7] !== i.ctaLabel || t[8] !== n ? (h = i.ctaLabel && i.ctaHref && (0, P.jsx)(v, {
                href: i.ctaHref,
                analyticsIdentifier: `dots-${n}-get-started`,
                children: i.ctaLabel
            }), t[6] = i.ctaHref, t[7] = i.ctaLabel, t[8] = n, t[9] = h) : h = t[9];
            let b;
            t[10] !== i.secondaryCtaHref || t[11] !== i.secondaryCtaLabel || t[12] !== n ? (b = i.secondaryCtaLabel && i.secondaryCtaHref && (0, P.jsx)(v, {
                href: i.secondaryCtaHref,
                variant: `primary-button`,
                analyticsIdentifier: `dots-${n}-get-details`,
                children: i.secondaryCtaLabel
            }), t[10] = i.secondaryCtaHref, t[11] = i.secondaryCtaLabel, t[12] = n, t[13] = b) : b = t[13];
            let S;
            t[14] !== p || t[15] !== h || t[16] !== b ? (S = (0, P.jsxs)(g, {
                mobile: p,
                children: [h, b]
            }), t[14] = p, t[15] = h, t[16] = b, t[17] = S) : S = t[17];
            let w = S;
            if (i.variant === `card`) {
                let e = i.cardMediaIndex == null ? void 0 : a?.[i.cardMediaIndex],
                    n = i.heading ? s : void 0,
                    r;
                t[18] === e ? r = t[19] : (r = e && (0, P.jsx)(`div`, {
                    className: O.mark,
                    "aria-hidden": `true`,
                    children: (0, P.jsx)(E, {
                        ...e,
                        altText: ``,
                        rounding: `none`
                    })
                }), t[18] = e, t[19] = r);
                let o;
                t[20] !== i.heading || t[21] !== s ? (o = i.heading && (0, P.jsx)(`h2`, {
                    id: s,
                    className: O.heading,
                    children: i.heading
                }), t[20] = i.heading, t[21] = s, t[22] = o) : o = t[22];
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
                t[28] === i.availability ? u = t[29] : (u = i.availability && (0, P.jsx)(`p`, {
                    className: O.availability,
                    children: i.availability
                }), t[28] = i.availability, t[29] = u);
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
                t[35] !== l || t[36] !== p || t[37] !== r ? (m = (0, P.jsxs)(`div`, {
                    className: O.card,
                    children: [r, l, p]
                }), t[35] = l, t[36] = p, t[37] = r, t[38] = m) : m = t[38];
                let h;
                return t[39] !== m || t[40] !== n ? (h = (0, P.jsx)(`section`, {
                    id: `get-dot`,
                    className: O.section,
                    "aria-labelledby": n,
                    children: m
                }), t[39] = m, t[40] = n, t[41] = h) : h = t[41], h
            }
            let T = i.presentation === `custom` && i.animation === `get-dot`,
                k = i.artwork?.mediaIndex ?? i.mediaIndex,
                A;
            t[42] !== i || t[43] !== k ? (A = {
                ...i,
                presentation: `media`,
                mediaIndex: k
            }, t[42] = i, t[43] = k, t[44] = A) : A = t[44];
            let I;
            t[45] !== a || t[46] !== A ? (I = (0, P.jsx)(D, {
                data: A,
                media: a,
                className: `dots-get-artwork-media`
            }), t[45] = a, t[46] = A, t[47] = I) : I = t[47];
            let L = I,
                R = i.artwork?.layout === `overflow` && `dots-get-started-overflow`,
                z = T && `dots-get-started-custom`,
                B;
            t[48] !== z || t[49] !== R ? (B = r(`dots-section-layout dots-get-started`, R, z), t[48] = z, t[49] = R, t[50] = B) : B = t[50];
            let V = i.heading ? s : void 0,
                H;
            t[51] !== T || t[52] !== i.heading || t[53] !== L || t[54] !== c ? (H = (0, P.jsx)(`div`, {
                className: `dots-get-artwork`,
                children: T && c ? (0, P.jsx)(C, {
                    label: i.heading ?? ``,
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
            }), t[51] = T, t[52] = i.heading, t[53] = L, t[54] = c, t[55] = H) : H = t[55];
            let U;
            t[56] !== i.heading || t[57] !== s ? (U = i.heading && (0, P.jsx)(`h2`, {
                id: s,
                children: i.heading
            }), t[56] = i.heading, t[57] = s, t[58] = U) : U = t[58];
            let W;
            t[59] === f ? W = t[60] : (W = f && (0, P.jsx)(`div`, {
                children: f
            }), t[59] = f, t[60] = W);
            let G;
            t[61] === i.availability ? G = t[62] : (G = i.availability && (0, P.jsx)(`div`, {
                className: `dots-get-availability`,
                children: i.availability
            }), t[61] = i.availability, t[62] = G);
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
//# sourceMappingURL=60383486-dd348oyw8kh5aefy.js.map