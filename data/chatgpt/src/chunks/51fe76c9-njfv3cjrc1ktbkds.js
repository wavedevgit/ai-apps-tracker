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
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function s(e) {
    "use forget";
    let n = (0, c.c)(8),
        {
            className: r,
            backgroundClassName: i
        } = e,
        a;
    n[0] === r ? a = n[1] : (a = t(`pointer-events-none absolute inset-px z-0 overflow-visible`, r), n[0] = r, n[1] = a);
    let o;
    n[2] === i ? o = n[3] : (o = i ? (0, l.jsx)(`rect`, {
        className: i,
        width: `100%`,
        height: `100%`,
        rx: 15,
        fill: `currentColor`,
        stroke: `none`
    }) : null, n[2] = i, n[3] = o);
    let s;
    n[4] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, l.jsx)(`rect`, {
        width: `100%`,
        height: `100%`,
        rx: 15,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `1`,
        strokeDasharray: `7 6.3`
    }), n[4] = s) : s = n[4];
    let u;
    return n[5] !== a || n[6] !== o ? (u = (0, l.jsxs)(`svg`, {
        "aria-hidden": !0,
        "data-testid": `project-dashed-border`,
        className: a,
        width: `100%`,
        height: `100%`,
        children: [o, s]
    }), n[5] = a, n[6] = o, n[7] = u) : u = n[7], u
}
var c, l, u = e((() => {
    c = o(), i(), l = a()
}));

function d(e) {
    "use forget";
    let n = (0, f.c)(36),
        {
            heading: i,
            subheading: a,
            icon: o,
            actions: c,
            headingContainerClassName: l,
            onClick: u,
            isClickable: d,
            tooltipLabel: m,
            borderStyle: h,
            className: g
        } = e,
        _ = d !== void 0 && d,
        v = u != null,
        y = o != null,
        b = _ && v,
        x = h === `dashed`,
        S = c ? `gap-6` : `gap-2`,
        C = y ? `py-4` : `py-0`,
        w;
    n[0] !== S || n[1] !== C ? (w = t(`text-token-text-secondary relative z-10 flex flex-col items-center text-sm`, `[@media(max-width:767px)_and_(max-height:480px)]:z-auto!`, S, C), n[0] = S, n[1] = C, n[2] = w) : w = n[2];
    let T;
    n[3] === l ? T = n[4] : (T = t(`flex flex-col items-center gap-1 text-center`, l), n[3] = l, n[4] = T);
    let E;
    n[5] === i ? E = n[6] : (E = (0, p.jsx)(`h3`, {
        className: `text-token-text-primary text-base leading-7 font-medium tracking-tight`,
        children: i
    }), n[5] = i, n[6] = E);
    let D;
    n[7] === a ? D = n[8] : (D = a && (0, p.jsx)(`p`, {
        className: `text-token-text-secondary text-sm leading-5 font-normal tracking-tight`,
        children: a
    }), n[7] = a, n[8] = D);
    let O;
    n[9] !== T || n[10] !== E || n[11] !== D ? (O = (0, p.jsxs)(`div`, {
        className: T,
        children: [E, D]
    }), n[9] = T, n[10] = E, n[11] = D, n[12] = O) : O = n[12];
    let k;
    n[13] !== c || n[14] !== o || n[15] !== w || n[16] !== O ? (k = (0, p.jsxs)(`div`, {
        className: w,
        children: [o, O, c]
    }), n[13] = c, n[14] = o, n[15] = w, n[16] = O, n[17] = k) : k = n[17];
    let A = k,
        j = y ? `px-4 py-3 pb-6` : `px-4 py-6`,
        M = b && `can-hover:hover:bg-token-bg-secondary/30 active:bg-token-bg-tertiary transition-colors duration-150 focus-visible:outline-token-outline-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
        N = b ? `cursor-pointer` : `cursor-default`,
        P;
    n[18] !== g || n[19] !== j || n[20] !== M || n[21] !== N ? (P = t(`isolate relative flex h-full min-h-80 w-full items-center justify-center rounded-2xl`, j, M, N, g), n[18] = g, n[19] = j, n[20] = M, n[21] = N, n[22] = P) : P = n[22];
    let F = P,
        I;
    n[23] === x ? I = n[24] : (I = x ? (0, p.jsx)(s, {
        className: `text-token-border-heavy`
    }) : null, n[23] = x, n[24] = I);
    let L;
    n[25] !== A || n[26] !== I ? (L = (0, p.jsxs)(p.Fragment, {
        children: [I, A]
    }), n[25] = A, n[26] = I, n[27] = L) : L = n[27];
    let R = L,
        z;
    n[28] !== R || n[29] !== F || n[30] !== _ || n[31] !== u ? (z = _ ? (0, p.jsx)(`button`, {
        type: `button`,
        className: F,
        onClick: u,
        children: R
    }) : (0, p.jsx)(`div`, {
        className: F,
        children: R
    }), n[28] = R, n[29] = F, n[30] = _, n[31] = u, n[32] = z) : z = n[32];
    let B = z;
    if (!m) return B;
    let V;
    return n[33] !== B || n[34] !== m ? (V = (0, p.jsx)(r, {
        label: m,
        side: `bottom`,
        align: `center`,
        children: B
    }), n[33] = B, n[34] = m, n[35] = V) : V = n[35], V
}
var f, p, m = e((() => {
    f = o(), n(), u(), i(), p = a()
}));
export {
    u as i, m as n, s as r, d as t
};
//# sourceMappingURL=51fe76c9-njfv3cjrc1ktbkds.js.map