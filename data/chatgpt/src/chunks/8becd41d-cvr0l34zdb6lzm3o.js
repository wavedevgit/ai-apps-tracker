import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    K5 as t,
    Qy as n,
    Zy as r,
    q5 as i
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as a,
    Rn as o,
    wn as s,
    zn as c
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ti as l,
    db as u,
    ub as d,
    wi as f
} from "./30901919-s8bko9nrkqwv6i4f.js";
var p, m, h, g = e((() => {
    p = s(), u(), f(), n(), i(), o(), m = a(), h = e => {
        "use forget";
        let n = (0, p.c)(49),
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
        n[0] === g ? v = n[1] : (v = g.formatMessage({
            id: `CodeBlockPreviewToggle.codeLabel`,
            defaultMessage: `Code`
        }), n[0] = g, n[1] = v);
        let y = v,
            b;
        n[2] === g ? b = n[3] : (b = g.formatMessage({
            id: `CodeBlockPreviewToggle.previewLabel`,
            defaultMessage: `Preview`
        }), n[2] = g, n[3] = b);
        let x = b,
            S;
        n[4] === g ? S = n[5] : (S = g.formatMessage({
            id: `CodeBlockPreviewToggle.viewButtonsLabel`,
            defaultMessage: `Code block view`
        }), n[4] = g, n[5] = S);
        let C = S,
            w = i ? `translate-x-[calc(100%+2px)]` : `translate-x-0`,
            T = !_ && (i ? `group-has-[[data-code-block-preview-toggle-code]:hover]/code-block-preview-toggle:translate-x-0 group-has-[[data-code-block-preview-toggle-code]:focus-visible]/code-block-preview-toggle:translate-x-0` : `group-has-[[data-code-block-preview-toggle-preview]:hover]/code-block-preview-toggle:translate-x-[calc(100%+2px)] group-has-[[data-code-block-preview-toggle-preview]:focus-visible]/code-block-preview-toggle:translate-x-[calc(100%+2px)]`),
            E;
        n[6] !== w || n[7] !== T ? (E = t(`bg-token-interactive-bg-secondary-press pointer-events-none absolute start-0 top-0 size-9 rounded-full motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-in-out`, w, T), n[6] = w, n[7] = T, n[8] = E) : E = n[8];
        let D;
        n[9] === E ? D = n[10] : (D = (0, m.jsx)(`div`, {
            "aria-hidden": `true`,
            className: E
        }), n[9] = E, n[10] = D);
        let O = !i,
            k = _ ? `text-token-text-tertiary cursor-not-allowed` : `text-token-text-primary`,
            A;
        n[11] === k ? A = n[12] : (A = t(`relative z-1 flex size-9 items-center justify-center rounded-full motion-safe:transition-colors`, k), n[11] = k, n[12] = A);
        let j;
        n[13] !== _ || n[14] !== i || n[15] !== o ? (j = () => {
            _ || !i || o?.()
        }, n[13] = _, n[14] = i, n[15] = o, n[16] = j) : j = n[16];
        let M;
        n[17] === Symbol.for(`react.memo_cache_sentinel`) ? (M = (0, m.jsx)(d, {}), n[17] = M) : M = n[17];
        let N;
        n[18] !== y || n[19] !== A || n[20] !== j || n[21] !== O ? (N = (0, m.jsx)(`button`, {
            type: `button`,
            "aria-label": y,
            "aria-pressed": O,
            className: A,
            "data-code-block-preview-toggle-code": !0,
            onClick: j,
            children: M
        }), n[18] = y, n[19] = A, n[20] = j, n[21] = O, n[22] = N) : N = n[22];
        let P;
        n[23] !== y || n[24] !== N ? (P = (0, m.jsx)(r, {
            label: y,
            children: N
        }), n[23] = y, n[24] = N, n[25] = P) : P = n[25];
        let F = _ ? `text-token-text-tertiary cursor-not-allowed` : `text-token-text-primary`,
            I;
        n[26] === F ? I = n[27] : (I = t(`relative z-1 flex size-9 items-center justify-center rounded-full motion-safe:transition-colors`, F), n[26] = F, n[27] = I);
        let L;
        n[28] !== _ || n[29] !== i || n[30] !== s ? (L = () => {
            _ || i || s?.()
        }, n[28] = _, n[29] = i, n[30] = s, n[31] = L) : L = n[31];
        let R;
        n[32] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, m.jsx)(l, {}), n[32] = R) : R = n[32];
        let z;
        n[33] !== _ || n[34] !== i || n[35] !== u || n[36] !== f || n[37] !== x || n[38] !== I || n[39] !== L ? (z = (0, m.jsx)(`button`, {
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
        }), n[33] = _, n[34] = i, n[35] = u, n[36] = f, n[37] = x, n[38] = I, n[39] = L, n[40] = z) : z = n[40];
        let B;
        n[41] !== x || n[42] !== z ? (B = (0, m.jsx)(r, {
            label: x,
            children: z
        }), n[41] = x, n[42] = z, n[43] = B) : B = n[43];
        let V;
        return n[44] !== P || n[45] !== B || n[46] !== D || n[47] !== C ? (V = (0, m.jsxs)(`div`, {
            role: `group`,
            "aria-label": C,
            className: `group/code-block-preview-toggle relative flex items-center gap-0.5`,
            children: [D, P, B]
        }), n[44] = P, n[45] = B, n[46] = D, n[47] = C, n[48] = V) : V = n[48], V
    }
}));
export {
    g as n, h as t
};
//# sourceMappingURL=8becd41d-cvr0l34zdb6lzm3o.js.map