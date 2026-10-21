import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as n,
    Y5 as r
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as i,
    Vn as a,
    wn as ee
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    J9 as te,
    Q9 as ne,
    X9 as re,
    Z9 as ie
} from "./conversation-small-nmt18uiom3b14vca.js";

function ae(e, t) {
    let n = t.getBoundingClientRect(),
        r = n.left + n.width / 2;
    return Math.abs(e - r) <= u / 2
}

function o(e) {
    "use forget";
    let t = (0, oe.c)(80),
        {
            "aria-label": n,
            "aria-labelledby": i,
            className: a,
            disabled: ee,
            forceExpanded: ne,
            getAriaValueText: o,
            max: u,
            min: d,
            name: le,
            onInteractionEnd: f,
            onInteractionStart: ue,
            onValueChange: de,
            onValueCommit: p,
            preserveTextFocus: fe,
            title: pe,
            value: me
        } = e,
        m = ee !== void 0 && ee,
        he = ne !== void 0 && ne,
        ge = fe !== void 0 && fe,
        [_e, ve] = (0, s.useState)(!1),
        [h, ye] = (0, s.useState)(!1),
        [be, g] = (0, s.useState)(!1),
        _ = (0, s.useRef)(null),
        v;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (v = new Set, t[0] = v) : v = t[0];
    let y = (0, s.useRef)(v),
        b = he || _e || h || be,
        x = Math.min(Math.max(me, d), u),
        S;
    t[1] === ue ? S = t[2] : (S = e => {
        _.current ?? (_.current = e, e === `pointer` && ye(!0), ue?.())
    }, t[1] = ue, t[2] = S);
    let C = S,
        w;
    t[3] === f ? w = t[4] : (w = e => {
        _.current === e && (_.current = null, e === `pointer` && ye(!1), f?.())
    }, t[3] = f, t[4] = w);
    let T = w,
        E;
    t[5] === f ? E = t[6] : (E = () => {
        _.current != null && (_.current = null, y.current.clear(), f?.())
    }, t[5] = f, t[6] = E);
    let xe = (0, s.useEffectEvent)(E),
        D;
    t[7] === xe ? D = t[8] : (D = () => () => {
        xe()
    }, t[7] = xe, t[8] = D);
    let O;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (O = [], t[9] = O) : O = t[9], (0, s.useEffect)(D, O);
    let k;
    t[10] === m ? k = t[11] : (k = e => {
        ve(!m && e.pointerType !== `touch` && ae(e.clientX, e.currentTarget))
    }, t[10] = m, t[11] = k);
    let A = k,
        j = m && `opacity-50`,
        M;
    t[12] !== a || t[13] !== j ? (M = r(`relative flex touch-none items-center justify-center select-none`, j, a), t[12] = a, t[13] = j, t[14] = M) : M = t[14];
    let N = ge || void 0,
        P;
    t[15] === x ? P = t[16] : (P = [x], t[15] = x, t[16] = P);
    let F;
    t[17] === T ? F = t[18] : (F = () => {
        g(!1), y.current.clear(), T(`keyboard`)
    }, t[17] = T, t[18] = F);
    let I;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (I = e => g(e.target instanceof HTMLElement && e.target.matches(`:focus-visible`)), t[19] = I) : I = t[19];
    let L;
    t[20] !== C || t[21] !== m ? (L = e => {
        if (m || !l.has(e.key)) return;
        let t = y.current,
            n = t.size > 0;
        t.add(e.key), g(!0), n || C(`keyboard`)
    }, t[20] = C, t[21] = m, t[22] = L) : L = t[22];
    let R, z, B;
    t[23] === T ? (R = t[24], z = t[25], B = t[26]) : (R = e => {
        if (!l.has(e.key)) return;
        let t = y.current;
        t.delete(e.key), t.size === 0 && T(`keyboard`)
    }, z = () => T(`pointer`), B = () => T(`pointer`), t[23] = T, t[24] = R, t[25] = z, t[26] = B);
    let V;
    t[27] !== C || t[28] !== m ? (V = e => {
        !m && e.button === 0 && C(`pointer`)
    }, t[27] = C, t[28] = m, t[29] = V) : V = t[29];
    let H;
    t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (H = () => ve(!1), t[30] = H) : H = t[30];
    let U;
    t[31] === T ? U = t[32] : (U = () => T(`pointer`), t[31] = T, t[32] = U);
    let W;
    t[33] !== m || t[34] !== de ? (W = e => {
        if (m) return;
        let t = e[0];
        t != null && de(t)
    }, t[33] = m, t[34] = de, t[35] = W) : W = t[35];
    let G;
    t[36] !== m || t[37] !== p ? (G = e => {
        let t = e[0];
        !m && t != null && p?.(t)
    }, t[36] = m, t[37] = p, t[38] = G) : G = t[38];
    let Se = b ? ce : se,
        K;
    t[39] === Se ? K = t[40] : (K = (0, c.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `pointer-events-none absolute inset-y-4 start-1/2 w-10 -translate-x-1/2 rtl:translate-x-1/2`,
        children: (0, c.jsx)(`div`, {
            className: `bg-token-text-tertiary/40 absolute h-full w-full`,
            style: {
                clipPath: Se,
                transition: `clip-path 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
                willChange: `clip-path`
            }
        })
    }), t[39] = Se, t[40] = K);
    let q;
    t[41] === Symbol.for(`react.memo_cache_sentinel`) ? (q = (0, c.jsx)(ie, {
        className: `relative h-[calc(100%_-_2rem)] w-full bg-transparent`
    }), t[41] = q) : q = t[41];
    let J;
    t[42] !== x || t[43] !== o ? (J = o?.(x), t[42] = x, t[43] = o, t[44] = J) : J = t[44];
    let Ce = m ? `cursor-not-allowed` : `cursor-ns-resize`,
        Y;
    t[45] === Ce ? Y = t[46] : (Y = r(`group relative flex h-8 w-8 items-center justify-center rounded-full focus:outline-none`, Ce), t[45] = Ce, t[46] = Y);
    let we = b ? `scale-110` : `scale-100`,
        X;
    t[47] === we ? X = t[48] : (X = r(`pointer-events-none block h-5 w-5 rounded-full border border-black/20 bg-white shadow-md transition-transform duration-300 ease-out group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-blue-500 motion-reduce:transition-none`, we), t[47] = we, t[48] = X);
    let Z;
    t[49] === X ? Z = t[50] : (Z = (0, c.jsx)(`span`, {
        "aria-hidden": `true`,
        className: X
    }), t[49] = X, t[50] = Z);
    let Q;
    t[51] !== n || t[52] !== i || t[53] !== J || t[54] !== Y || t[55] !== Z ? (Q = (0, c.jsx)(re, {
        "aria-label": n,
        "aria-labelledby": i,
        "aria-valuetext": J,
        className: Y,
        children: Z
    }), t[51] = n, t[52] = i, t[53] = J, t[54] = Y, t[55] = Z, t[56] = Q) : Q = t[56];
    let $;
    return t[57] !== m || t[58] !== h || t[59] !== b || t[60] !== u || t[61] !== d || t[62] !== le || t[63] !== M || t[64] !== N || t[65] !== P || t[66] !== F || t[67] !== L || t[68] !== R || t[69] !== z || t[70] !== B || t[71] !== V || t[72] !== U || t[73] !== W || t[74] !== G || t[75] !== K || t[76] !== Q || t[77] !== pe || t[78] !== A ? ($ = (0, c.jsxs)(te, {
        title: pe,
        className: M,
        "data-dragging": h,
        "data-expanded": b,
        "data-sketch-preserve-text-focus": N,
        disabled: m,
        min: d,
        max: u,
        name: le,
        orientation: `vertical`,
        step: 1,
        value: P,
        onBlur: F,
        onFocus: I,
        onKeyDown: L,
        onKeyUp: R,
        onLostPointerCapture: z,
        onPointerCancel: B,
        onPointerDown: V,
        onPointerEnter: A,
        onPointerLeave: H,
        onPointerMove: A,
        onPointerUp: U,
        onValueChange: W,
        onValueCommit: G,
        children: [K, q, Q]
    }), t[57] = m, t[58] = h, t[59] = b, t[60] = u, t[61] = d, t[62] = le, t[63] = M, t[64] = N, t[65] = P, t[66] = F, t[67] = L, t[68] = R, t[69] = z, t[70] = B, t[71] = V, t[72] = U, t[73] = W, t[74] = G, t[75] = K, t[76] = Q, t[77] = pe, t[78] = A, t[79] = $) : $ = t[79], $
}
var oe, s, c, l, u, se, ce, d = e((() => {
    oe = ee(), ne(), n(), s = t(a()), c = i(), l = new Set([`ArrowDown`, `ArrowLeft`, `ArrowRight`, `ArrowUp`, `End`, `Home`, `PageDown`, `PageUp`]), u = 40, se = `polygon(47.5% 0%, 52.5% 0%, 52.5% 100%, 47.5% 100%)`, ce = `polygon(10% 0%, 90% 0%, 52.5% 100%, 47.5% 100%)`
}));
export {
    d as n, o as t
};
//# sourceMappingURL=656cec6a-hxjiynjhcutbwec0.js.map