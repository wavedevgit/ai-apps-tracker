import {
    n as ee
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    FH as e,
    G5 as t,
    K5 as n,
    NH as r,
    PH as i
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as a,
    wn as o
} from "./2340486e-oc6d2eodbcrmxur3.js";
var s, c, l, u = ee((() => {
    s = o(), i(), n(), c = a(), l = ee => {
        "use forget";
        let n = (0, s.c)(68),
            {
                asset: i,
                assetUrl: a,
                assetMobile: o,
                assetMobileUrl: l,
                assetDark: u,
                assetDarkUrl: d,
                assetDarkMobile: f,
                assetDarkMobileUrl: p,
                altText: m,
                keyline: h,
                loading: g,
                maxWidth: _,
                mediaClassName: v,
                quality: y,
                sizes: te,
                ratio: b,
                ratioMobile: x,
                wrapperClassName: S,
                rounding: ne
            } = ee,
            C = te === void 0 ? `100vw` : te,
            w = ne === void 0 ? `rounded` : ne,
            T;
        n[0] !== i || n[1] !== a || n[2] !== _ || n[3] !== y ? (T = r({
            asset: i,
            assetUrl: a,
            maxWidth: _,
            quality: y
        }), n[0] = i, n[1] = a, n[2] = _, n[3] = y, n[4] = T) : T = n[4];
        let E = T,
            D;
        n[5] !== o || n[6] !== l || n[7] !== _ || n[8] !== y ? (D = r({
            asset: o,
            assetUrl: l,
            maxWidth: _,
            quality: y
        }), n[5] = o, n[6] = l, n[7] = _, n[8] = y, n[9] = D) : D = n[9];
        let O = D,
            k;
        n[10] !== u || n[11] !== d || n[12] !== _ || n[13] !== y ? (k = r({
            asset: u,
            assetUrl: d,
            maxWidth: _,
            quality: y
        }), n[10] = u, n[11] = d, n[12] = _, n[13] = y, n[14] = k) : k = n[14];
        let A = k,
            j;
        n[15] !== f || n[16] !== p || n[17] !== _ || n[18] !== y ? (j = r({
            asset: f,
            assetUrl: p,
            maxWidth: _,
            quality: y
        }), n[15] = f, n[16] = p, n[17] = _, n[18] = y, n[19] = j) : j = n[19];
        let M = j,
            re = !!(O.src || M.src),
            N;
        n[20] === b ? N = n[21] : (N = e(b), n[20] = b, n[21] = N);
        let P = N,
            F = re ? void 0 : P,
            I;
        n[22] !== F || n[23] !== x ? (I = e(x) ?? F, n[22] = F, n[23] = x, n[24] = I) : I = n[24];
        let L = I,
            R = !!(P || L),
            z = i?.file?.details?.image?.width,
            B = i?.file?.details?.image?.height,
            V;
        n[25] !== P || n[26] !== L || n[27] !== R || n[28] !== w || n[29] !== S ? (V = t(R ? `max-h-full max-w-full` : `h-full w-full`, `mx-auto overflow-hidden`, {
            "rounded-2xl": w === `rounded`,
            "rounded-[24%]": w === `app-icon`
        }, S, {
            "aspect-auto": !L,
            "aspect-square": L === `1/1`,
            "aspect-16/9": L === `16/9`,
            "md:aspect-auto": !P,
            "md:aspect-square": P === `1/1`,
            "md:aspect-16/9": P === `16/9`
        }), n[25] = P, n[26] = L, n[27] = R, n[28] = w, n[29] = S, n[30] = V) : V = n[30];
        let H;
        n[31] !== A.src || n[32] !== A.srcSet || n[33] !== C ? (H = A.src && (0, c.jsx)(`source`, {
            srcSet: A.srcSet ?? A.src,
            sizes: A.srcSet ? C : void 0,
            media: `(min-width: 768px) and (prefers-color-scheme: dark)`
        }), n[31] = A.src, n[32] = A.srcSet, n[33] = C, n[34] = H) : H = n[34];
        let U = E.srcSet ?? E.src,
            W = E.srcSet ? C : void 0,
            G;
        n[35] !== U || n[36] !== W ? (G = (0, c.jsx)(`source`, {
            srcSet: U,
            sizes: W,
            media: `(min-width: 768px)`
        }), n[35] = U, n[36] = W, n[37] = G) : G = n[37];
        let K;
        n[38] !== M.src || n[39] !== M.srcSet || n[40] !== C ? (K = M.src && (0, c.jsx)(`source`, {
            media: `(prefers-color-scheme: dark)`,
            srcSet: M.srcSet ?? M.src,
            sizes: M.srcSet ? C : void 0
        }), n[38] = M.src, n[39] = M.srcSet, n[40] = C, n[41] = K) : K = n[41];
        let q;
        n[42] !== O.src || n[43] !== O.srcSet || n[44] !== C ? (q = O.src && (0, c.jsx)(`source`, {
            srcSet: O.srcSet ?? O.src,
            sizes: O.srcSet ? C : void 0
        }), n[42] = O.src, n[43] = O.srcSet, n[44] = C, n[45] = q) : q = n[45];
        let ie = E.src,
            ae = E.srcSet,
            J = E.srcSet ? C : void 0,
            Y = R ? `h-full w-full object-cover object-center` : `mx-auto`,
            X;
        n[46] !== h || n[47] !== v || n[48] !== Y ? (X = t(Y, {
            "border-token-border-default border": h
        }, v), n[46] = h, n[47] = v, n[48] = Y, n[49] = X) : X = n[49];
        let Z;
        n[50] !== m || n[51] !== E.src || n[52] !== E.srcSet || n[53] !== B || n[54] !== g || n[55] !== J || n[56] !== X || n[57] !== z ? (Z = (0, c.jsx)(`img`, {
            alt: m,
            loading: g,
            src: ie,
            srcSet: ae,
            sizes: J,
            className: X,
            width: z,
            height: B
        }), n[50] = m, n[51] = E.src, n[52] = E.srcSet, n[53] = B, n[54] = g, n[55] = J, n[56] = X, n[57] = z, n[58] = Z) : Z = n[58];
        let Q;
        n[59] !== H || n[60] !== G || n[61] !== K || n[62] !== q || n[63] !== Z ? (Q = (0, c.jsxs)(`picture`, {
            children: [H, G, K, q, Z]
        }), n[59] = H, n[60] = G, n[61] = K, n[62] = q, n[63] = Z, n[64] = Q) : Q = n[64];
        let $;
        return n[65] !== Q || n[66] !== V ? ($ = (0, c.jsx)(`div`, {
            className: V,
            children: Q
        }), n[65] = Q, n[66] = V, n[67] = $) : $ = n[67], $
    }
}));
export {
    u as n, l as t
};
//# sourceMappingURL=6105d6cc-e7tiyjn7ljvobl3g.js.map