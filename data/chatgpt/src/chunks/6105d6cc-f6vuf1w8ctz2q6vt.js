import {
    n as ee
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BH as e,
    HH as t,
    VH as n,
    c7 as r,
    l7 as i
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as a,
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var te, s, c, l = ee((() => {
    te = o(), n(), i(), s = a(), c = ee => {
        "use forget";
        let n = (0, te.c)(68),
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
            } = ee,
            C = ne === void 0 ? `100vw` : ne,
            w = S === void 0 ? `rounded` : S,
            T;
        n[0] !== i || n[1] !== a || n[2] !== g || n[3] !== v ? (T = e({
            asset: i,
            assetUrl: a,
            maxWidth: g,
            quality: v
        }), n[0] = i, n[1] = a, n[2] = g, n[3] = v, n[4] = T) : T = n[4];
        let E = T,
            D;
        n[5] !== o || n[6] !== c || n[7] !== g || n[8] !== v ? (D = e({
            asset: o,
            assetUrl: c,
            maxWidth: g,
            quality: v
        }), n[5] = o, n[6] = c, n[7] = g, n[8] = v, n[9] = D) : D = n[9];
        let O = D,
            k;
        n[10] !== l || n[11] !== u || n[12] !== g || n[13] !== v ? (k = e({
            asset: l,
            assetUrl: u,
            maxWidth: g,
            quality: v
        }), n[10] = l, n[11] = u, n[12] = g, n[13] = v, n[14] = k) : k = n[14];
        let A = k,
            j;
        n[15] !== d || n[16] !== f || n[17] !== g || n[18] !== v ? (j = e({
            asset: d,
            assetUrl: f,
            maxWidth: g,
            quality: v
        }), n[15] = d, n[16] = f, n[17] = g, n[18] = v, n[19] = j) : j = n[19];
        let M = j,
            re = !!(O.src || M.src),
            N;
        n[20] === y ? N = n[21] : (N = t(y), n[20] = y, n[21] = N);
        let P = N,
            F = re ? void 0 : P,
            I;
        n[22] !== F || n[23] !== b ? (I = t(b) ?? F, n[22] = F, n[23] = b, n[24] = I) : I = n[24];
        let L = I,
            R = !!(P || L),
            z = i?.file?.details?.image?.width,
            B = i?.file?.details?.image?.height,
            V;
        n[25] !== P || n[26] !== L || n[27] !== R || n[28] !== w || n[29] !== x ? (V = r(R ? `max-h-full max-w-full` : `h-full w-full`, `mx-auto overflow-hidden`, {
            "rounded-2xl": w === `rounded`,
            "rounded-[24%]": w === `app-icon`
        }, x, {
            "aspect-auto": !L,
            "aspect-square": L === `1/1`,
            "aspect-16/9": L === `16/9`,
            "md:aspect-auto": !P,
            "md:aspect-square": P === `1/1`,
            "md:aspect-16/9": P === `16/9`
        }), n[25] = P, n[26] = L, n[27] = R, n[28] = w, n[29] = x, n[30] = V) : V = n[30];
        let H;
        n[31] !== A.src || n[32] !== A.srcSet || n[33] !== C ? (H = A.src && (0, s.jsx)(`source`, {
            srcSet: A.srcSet ?? A.src,
            sizes: A.srcSet ? C : void 0,
            media: `(min-width: 768px) and (prefers-color-scheme: dark)`
        }), n[31] = A.src, n[32] = A.srcSet, n[33] = C, n[34] = H) : H = n[34];
        let U = E.srcSet ?? E.src,
            W = E.srcSet ? C : void 0,
            G;
        n[35] !== U || n[36] !== W ? (G = (0, s.jsx)(`source`, {
            srcSet: U,
            sizes: W,
            media: `(min-width: 768px)`
        }), n[35] = U, n[36] = W, n[37] = G) : G = n[37];
        let K;
        n[38] !== M.src || n[39] !== M.srcSet || n[40] !== C ? (K = M.src && (0, s.jsx)(`source`, {
            media: `(prefers-color-scheme: dark)`,
            srcSet: M.srcSet ?? M.src,
            sizes: M.srcSet ? C : void 0
        }), n[38] = M.src, n[39] = M.srcSet, n[40] = C, n[41] = K) : K = n[41];
        let q;
        n[42] !== O.src || n[43] !== O.srcSet || n[44] !== C ? (q = O.src && (0, s.jsx)(`source`, {
            srcSet: O.srcSet ?? O.src,
            sizes: O.srcSet ? C : void 0
        }), n[42] = O.src, n[43] = O.srcSet, n[44] = C, n[45] = q) : q = n[45];
        let ie = E.src,
            ae = E.srcSet,
            J = E.srcSet ? C : void 0,
            Y = R ? `h-full w-full object-cover object-center` : `mx-auto`,
            X;
        n[46] !== m || n[47] !== _ || n[48] !== Y ? (X = r(Y, {
            "border-token-border-default border": m
        }, _), n[46] = m, n[47] = _, n[48] = Y, n[49] = X) : X = n[49];
        let Z;
        n[50] !== p || n[51] !== E.src || n[52] !== E.srcSet || n[53] !== B || n[54] !== h || n[55] !== J || n[56] !== X || n[57] !== z ? (Z = (0, s.jsx)(`img`, {
            alt: p,
            loading: h,
            src: ie,
            srcSet: ae,
            sizes: J,
            className: X,
            width: z,
            height: B
        }), n[50] = p, n[51] = E.src, n[52] = E.srcSet, n[53] = B, n[54] = h, n[55] = J, n[56] = X, n[57] = z, n[58] = Z) : Z = n[58];
        let Q;
        n[59] !== H || n[60] !== G || n[61] !== K || n[62] !== q || n[63] !== Z ? (Q = (0, s.jsxs)(`picture`, {
            children: [H, G, K, q, Z]
        }), n[59] = H, n[60] = G, n[61] = K, n[62] = q, n[63] = Z, n[64] = Q) : Q = n[64];
        let $;
        return n[65] !== Q || n[66] !== V ? ($ = (0, s.jsx)(`div`, {
            className: V,
            children: Q
        }), n[65] = Q, n[66] = V, n[67] = $) : $ = n[67], $
    }
}));
export {
    l as n, c as t
};
//# sourceMappingURL=6105d6cc-f6vuf1w8ctz2q6vt.js.map