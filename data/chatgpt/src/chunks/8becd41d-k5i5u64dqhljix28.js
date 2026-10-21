import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Qy as t,
    Zy as n,
    c7 as r,
    l7 as i
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as a,
    Rn as o,
    wn as s,
    zn as c
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Di as l,
    Ei as u,
    fb as d,
    pb as f
} from "./30901919-r9pahacmzqudnt4f.js";
var p, m, h, g = e((() => {
    p = s(), f(), u(), t(), i(), o(), m = a(), h = e => {
        "use forget";
        let t = (0, p.c)(49),
            {
                isPreviewOpen: i,
                isPreviewDisabled: a,
                onCodeClick: o,
                onPreviewClick: s,
                onPreviewMouseEnter: u,
                onPreviewMouseLeave: f
            } = e,
            h = a !== void 0 && a,
            g = c(),
            _ = h,
            v;
        t[0] === g ? v = t[1] : (v = g.formatMessage({
            id: `CodeBlockPreviewToggle.codeLabel`,
            defaultMessage: `Code`
        }), t[0] = g, t[1] = v);
        let y = v,
            b;
        t[2] === g ? b = t[3] : (b = g.formatMessage({
            id: `CodeBlockPreviewToggle.previewLabel`,
            defaultMessage: `Preview`
        }), t[2] = g, t[3] = b);
        let x = b,
            S;
        t[4] === g ? S = t[5] : (S = g.formatMessage({
            id: `CodeBlockPreviewToggle.viewButtonsLabel`,
            defaultMessage: `Code block view`
        }), t[4] = g, t[5] = S);
        let C = S,
            w = i ? `translate-x-[calc(100%+2px)]` : `translate-x-0`,
            T = !_ && (i ? `group-has-[[data-code-block-preview-toggle-code]:hover]/code-block-preview-toggle:translate-x-0 group-has-[[data-code-block-preview-toggle-code]:focus-visible]/code-block-preview-toggle:translate-x-0` : `group-has-[[data-code-block-preview-toggle-preview]:hover]/code-block-preview-toggle:translate-x-[calc(100%+2px)] group-has-[[data-code-block-preview-toggle-preview]:focus-visible]/code-block-preview-toggle:translate-x-[calc(100%+2px)]`),
            E;
        t[6] !== w || t[7] !== T ? (E = r(`bg-token-interactive-bg-secondary-press pointer-events-none absolute start-0 top-0 size-9 rounded-full motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-in-out`, w, T), t[6] = w, t[7] = T, t[8] = E) : E = t[8];
        let D;
        t[9] === E ? D = t[10] : (D = (0, m.jsx)(`div`, {
            "aria-hidden": `true`,
            className: E
        }), t[9] = E, t[10] = D);
        let O = !i,
            k = _ ? `text-token-text-tertiary cursor-not-allowed` : `text-token-text-primary`,
            A;
        t[11] === k ? A = t[12] : (A = r(`relative z-1 flex size-9 items-center justify-center rounded-full motion-safe:transition-colors`, k), t[11] = k, t[12] = A);
        let j;
        t[13] !== _ || t[14] !== i || t[15] !== o ? (j = () => {
            _ || !i || o?.()
        }, t[13] = _, t[14] = i, t[15] = o, t[16] = j) : j = t[16];
        let M;
        t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (M = (0, m.jsx)(d, {}), t[17] = M) : M = t[17];
        let N;
        t[18] !== y || t[19] !== A || t[20] !== j || t[21] !== O ? (N = (0, m.jsx)(`button`, {
            type: `button`,
            "aria-label": y,
            "aria-pressed": O,
            className: A,
            "data-code-block-preview-toggle-code": !0,
            onClick: j,
            children: M
        }), t[18] = y, t[19] = A, t[20] = j, t[21] = O, t[22] = N) : N = t[22];
        let P;
        t[23] !== y || t[24] !== N ? (P = (0, m.jsx)(n, {
            label: y,
            children: N
        }), t[23] = y, t[24] = N, t[25] = P) : P = t[25];
        let F = _ ? `text-token-text-tertiary cursor-not-allowed` : `text-token-text-primary`,
            I;
        t[26] === F ? I = t[27] : (I = r(`relative z-1 flex size-9 items-center justify-center rounded-full motion-safe:transition-colors`, F), t[26] = F, t[27] = I);
        let L;
        t[28] !== _ || t[29] !== i || t[30] !== s ? (L = () => {
            _ || i || s?.()
        }, t[28] = _, t[29] = i, t[30] = s, t[31] = L) : L = t[31];
        let R;
        t[32] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, m.jsx)(l, {}), t[32] = R) : R = t[32];
        let z;
        t[33] !== _ || t[34] !== i || t[35] !== u || t[36] !== f || t[37] !== x || t[38] !== I || t[39] !== L ? (z = (0, m.jsx)(`button`, {
            type: `button`,
            "aria-label": x,
            "aria-pressed": i,
            "aria-disabled": _,
            disabled: _,
            className: I,
            "data-code-block-preview-toggle-preview": !0,
            onClick: L,
            onMouseEnter: u,
            onMouseLeave: f,
            children: R
        }), t[33] = _, t[34] = i, t[35] = u, t[36] = f, t[37] = x, t[38] = I, t[39] = L, t[40] = z) : z = t[40];
        let B;
        t[41] !== x || t[42] !== z ? (B = (0, m.jsx)(n, {
            label: x,
            children: z
        }), t[41] = x, t[42] = z, t[43] = B) : B = t[43];
        let V;
        return t[44] !== P || t[45] !== B || t[46] !== D || t[47] !== C ? (V = (0, m.jsxs)(`div`, {
            role: `group`,
            "aria-label": C,
            className: `group/code-block-preview-toggle relative flex items-center gap-0.5`,
            children: [D, P, B]
        }), t[44] = P, t[45] = B, t[46] = D, t[47] = C, t[48] = V) : V = t[48], V
    }
}));
export {
    g as n, h as t
};
//# sourceMappingURL=8becd41d-k5i5u64dqhljix28.js.map