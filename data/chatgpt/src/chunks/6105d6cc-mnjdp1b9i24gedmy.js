import {
    n as ee
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BH as e,
    HH as t,
    K5 as n,
    VH as r,
    q5 as i
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as a,
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var te, s, c, l = ee((() => {
    te = o(), r(), i(), s = a(), c = ee => {
        "use forget";
        let r = (0, te.c)(68),
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
        r[0] !== i || r[1] !== a || r[2] !== g || r[3] !== v ? (T = e({
            asset: i,
            assetUrl: a,
            maxWidth: g,
            quality: v
        }), r[0] = i, r[1] = a, r[2] = g, r[3] = v, r[4] = T) : T = r[4];
        let E = T,
            D;
        r[5] !== o || r[6] !== c || r[7] !== g || r[8] !== v ? (D = e({
            asset: o,
            assetUrl: c,
            maxWidth: g,
            quality: v
        }), r[5] = o, r[6] = c, r[7] = g, r[8] = v, r[9] = D) : D = r[9];
        let O = D,
            k;
        r[10] !== l || r[11] !== u || r[12] !== g || r[13] !== v ? (k = e({
            asset: l,
            assetUrl: u,
            maxWidth: g,
            quality: v
        }), r[10] = l, r[11] = u, r[12] = g, r[13] = v, r[14] = k) : k = r[14];
        let A = k,
            j;
        r[15] !== d || r[16] !== f || r[17] !== g || r[18] !== v ? (j = e({
            asset: d,
            assetUrl: f,
            maxWidth: g,
            quality: v
        }), r[15] = d, r[16] = f, r[17] = g, r[18] = v, r[19] = j) : j = r[19];
        let M = j,
            re = !!(O.src || M.src),
            N;
        r[20] === y ? N = r[21] : (N = t(y), r[20] = y, r[21] = N);
        let P = N,
            F = re ? void 0 : P,
            I;
        r[22] !== F || r[23] !== b ? (I = t(b) ?? F, r[22] = F, r[23] = b, r[24] = I) : I = r[24];
        let L = I,
            R = !!(P || L),
            z = i?.file?.details?.image?.width,
            B = i?.file?.details?.image?.height,
            V;
        r[25] !== P || r[26] !== L || r[27] !== R || r[28] !== w || r[29] !== x ? (V = n(R ? `max-h-full max-w-full` : `h-full w-full`, `mx-auto overflow-hidden`, {
            "rounded-2xl": w === `rounded`,
            "rounded-[24%]": w === `app-icon`
        }, x, {
            "aspect-auto": !L,
            "aspect-square": L === `1/1`,
            "aspect-16/9": L === `16/9`,
            "md:aspect-auto": !P,
            "md:aspect-square": P === `1/1`,
            "md:aspect-16/9": P === `16/9`
        }), r[25] = P, r[26] = L, r[27] = R, r[28] = w, r[29] = x, r[30] = V) : V = r[30];
        let H;
        r[31] !== A.src || r[32] !== A.srcSet || r[33] !== C ? (H = A.src && (0, s.jsx)(`source`, {
            srcSet: A.srcSet ?? A.src,
            sizes: A.srcSet ? C : void 0,
            media: `(min-width: 768px) and (prefers-color-scheme: dark)`
        }), r[31] = A.src, r[32] = A.srcSet, r[33] = C, r[34] = H) : H = r[34];
        let U = E.srcSet ?? E.src,
            W = E.srcSet ? C : void 0,
            G;
        r[35] !== U || r[36] !== W ? (G = (0, s.jsx)(`source`, {
            srcSet: U,
            sizes: W,
            media: `(min-width: 768px)`
        }), r[35] = U, r[36] = W, r[37] = G) : G = r[37];
        let K;
        r[38] !== M.src || r[39] !== M.srcSet || r[40] !== C ? (K = M.src && (0, s.jsx)(`source`, {
            media: `(prefers-color-scheme: dark)`,
            srcSet: M.srcSet ?? M.src,
            sizes: M.srcSet ? C : void 0
        }), r[38] = M.src, r[39] = M.srcSet, r[40] = C, r[41] = K) : K = r[41];
        let q;
        r[42] !== O.src || r[43] !== O.srcSet || r[44] !== C ? (q = O.src && (0, s.jsx)(`source`, {
            srcSet: O.srcSet ?? O.src,
            sizes: O.srcSet ? C : void 0
        }), r[42] = O.src, r[43] = O.srcSet, r[44] = C, r[45] = q) : q = r[45];
        let ie = E.src,
            ae = E.srcSet,
            J = E.srcSet ? C : void 0,
            Y = R ? `h-full w-full object-cover object-center` : `mx-auto`,
            X;
        r[46] !== m || r[47] !== _ || r[48] !== Y ? (X = n(Y, {
            "border-token-border-default border": m
        }, _), r[46] = m, r[47] = _, r[48] = Y, r[49] = X) : X = r[49];
        let Z;
        r[50] !== p || r[51] !== E.src || r[52] !== E.srcSet || r[53] !== B || r[54] !== h || r[55] !== J || r[56] !== X || r[57] !== z ? (Z = (0, s.jsx)(`img`, {
            alt: p,
            loading: h,
            src: ie,
            srcSet: ae,
            sizes: J,
            className: X,
            width: z,
            height: B
        }), r[50] = p, r[51] = E.src, r[52] = E.srcSet, r[53] = B, r[54] = h, r[55] = J, r[56] = X, r[57] = z, r[58] = Z) : Z = r[58];
        let Q;
        r[59] !== H || r[60] !== G || r[61] !== K || r[62] !== q || r[63] !== Z ? (Q = (0, s.jsxs)(`picture`, {
            children: [H, G, K, q, Z]
        }), r[59] = H, r[60] = G, r[61] = K, r[62] = q, r[63] = Z, r[64] = Q) : Q = r[64];
        let $;
        return r[65] !== Q || r[66] !== V ? ($ = (0, s.jsx)(`div`, {
            className: V,
            children: Q
        }), r[65] = Q, r[66] = V, r[67] = $) : $ = r[67], $
    }
}));
export {
    l as n, c as t
};
//# sourceMappingURL=6105d6cc-mnjdp1b9i24gedmy.js.map