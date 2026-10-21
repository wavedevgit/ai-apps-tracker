import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    FH as t,
    IH as n,
    PH as r,
    X5 as i,
    Y5 as ee
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as a,
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var te, s, c, l = e((() => {
    te = o(), t(), i(), s = a(), c = e => {
        "use forget";
        let t = (0, te.c)(68),
            {
                asset: i,
                assetUrl: a,
                assetMobile: o,
                assetMobileUrl: c,
                assetDark: l,
                assetDarkUrl: u,
                assetDarkMobile: d,
                assetDarkMobileUrl: f,
                altText: p,
                keyline: m,
                loading: h,
                maxWidth: g,
                mediaClassName: _,
                quality: v,
                sizes: ne,
                ratio: y,
                ratioMobile: b,
                wrapperClassName: x,
                rounding: S
            } = e,
            C = ne === void 0 ? `100vw` : ne,
            w = S === void 0 ? `rounded` : S,
            T;
        t[0] !== i || t[1] !== a || t[2] !== g || t[3] !== v ? (T = r({
            asset: i,
            assetUrl: a,
            maxWidth: g,
            quality: v
        }), t[0] = i, t[1] = a, t[2] = g, t[3] = v, t[4] = T) : T = t[4];
        let E = T,
            D;
        t[5] !== o || t[6] !== c || t[7] !== g || t[8] !== v ? (D = r({
            asset: o,
            assetUrl: c,
            maxWidth: g,
            quality: v
        }), t[5] = o, t[6] = c, t[7] = g, t[8] = v, t[9] = D) : D = t[9];
        let O = D,
            k;
        t[10] !== l || t[11] !== u || t[12] !== g || t[13] !== v ? (k = r({
            asset: l,
            assetUrl: u,
            maxWidth: g,
            quality: v
        }), t[10] = l, t[11] = u, t[12] = g, t[13] = v, t[14] = k) : k = t[14];
        let A = k,
            j;
        t[15] !== d || t[16] !== f || t[17] !== g || t[18] !== v ? (j = r({
            asset: d,
            assetUrl: f,
            maxWidth: g,
            quality: v
        }), t[15] = d, t[16] = f, t[17] = g, t[18] = v, t[19] = j) : j = t[19];
        let M = j,
            re = !!(O.src || M.src),
            N;
        t[20] === y ? N = t[21] : (N = n(y), t[20] = y, t[21] = N);
        let P = N,
            F = re ? void 0 : P,
            I;
        t[22] !== F || t[23] !== b ? (I = n(b) ?? F, t[22] = F, t[23] = b, t[24] = I) : I = t[24];
        let L = I,
            R = !!(P || L),
            z = i?.file?.details?.image?.width,
            B = i?.file?.details?.image?.height,
            V;
        t[25] !== P || t[26] !== L || t[27] !== R || t[28] !== w || t[29] !== x ? (V = ee(R ? `max-h-full max-w-full` : `h-full w-full`, `mx-auto overflow-hidden`, {
            "rounded-2xl": w === `rounded`,
            "rounded-[24%]": w === `app-icon`
        }, x, {
            "aspect-auto": !L,
            "aspect-square": L === `1/1`,
            "aspect-16/9": L === `16/9`,
            "md:aspect-auto": !P,
            "md:aspect-square": P === `1/1`,
            "md:aspect-16/9": P === `16/9`
        }), t[25] = P, t[26] = L, t[27] = R, t[28] = w, t[29] = x, t[30] = V) : V = t[30];
        let H;
        t[31] !== A.src || t[32] !== A.srcSet || t[33] !== C ? (H = A.src && (0, s.jsx)(`source`, {
            srcSet: A.srcSet ?? A.src,
            sizes: A.srcSet ? C : void 0,
            media: `(min-width: 768px) and (prefers-color-scheme: dark)`
        }), t[31] = A.src, t[32] = A.srcSet, t[33] = C, t[34] = H) : H = t[34];
        let U = E.srcSet ?? E.src,
            W = E.srcSet ? C : void 0,
            G;
        t[35] !== U || t[36] !== W ? (G = (0, s.jsx)(`source`, {
            srcSet: U,
            sizes: W,
            media: `(min-width: 768px)`
        }), t[35] = U, t[36] = W, t[37] = G) : G = t[37];
        let K;
        t[38] !== M.src || t[39] !== M.srcSet || t[40] !== C ? (K = M.src && (0, s.jsx)(`source`, {
            media: `(prefers-color-scheme: dark)`,
            srcSet: M.srcSet ?? M.src,
            sizes: M.srcSet ? C : void 0
        }), t[38] = M.src, t[39] = M.srcSet, t[40] = C, t[41] = K) : K = t[41];
        let q;
        t[42] !== O.src || t[43] !== O.srcSet || t[44] !== C ? (q = O.src && (0, s.jsx)(`source`, {
            srcSet: O.srcSet ?? O.src,
            sizes: O.srcSet ? C : void 0
        }), t[42] = O.src, t[43] = O.srcSet, t[44] = C, t[45] = q) : q = t[45];
        let ie = E.src,
            ae = E.srcSet,
            J = E.srcSet ? C : void 0,
            Y = R ? `h-full w-full object-cover object-center` : `mx-auto`,
            X;
        t[46] !== m || t[47] !== _ || t[48] !== Y ? (X = ee(Y, {
            "border-token-border-default border": m
        }, _), t[46] = m, t[47] = _, t[48] = Y, t[49] = X) : X = t[49];
        let Z;
        t[50] !== p || t[51] !== E.src || t[52] !== E.srcSet || t[53] !== B || t[54] !== h || t[55] !== J || t[56] !== X || t[57] !== z ? (Z = (0, s.jsx)(`img`, {
            alt: p,
            loading: h,
            src: ie,
            srcSet: ae,
            sizes: J,
            className: X,
            width: z,
            height: B
        }), t[50] = p, t[51] = E.src, t[52] = E.srcSet, t[53] = B, t[54] = h, t[55] = J, t[56] = X, t[57] = z, t[58] = Z) : Z = t[58];
        let Q;
        t[59] !== H || t[60] !== G || t[61] !== K || t[62] !== q || t[63] !== Z ? (Q = (0, s.jsxs)(`picture`, {
            children: [H, G, K, q, Z]
        }), t[59] = H, t[60] = G, t[61] = K, t[62] = q, t[63] = Z, t[64] = Q) : Q = t[64];
        let $;
        return t[65] !== Q || t[66] !== V ? ($ = (0, s.jsx)(`div`, {
            className: V,
            children: Q
        }), t[65] = Q, t[66] = V, t[67] = $) : $ = t[67], $
    }
}));
export {
    l as n, c as t
};
//# sourceMappingURL=6105d6cc-cr9uhob0y77tmr2p.js.map