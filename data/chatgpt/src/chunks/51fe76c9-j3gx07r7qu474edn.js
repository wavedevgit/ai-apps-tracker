import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as t,
    Xy as n,
    Y5 as r,
    Zy as i
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    c = o(), r(), l = a()
}));

function d(e) {
    "use forget";
    let r = (0, f.c)(36),
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
    r[0] !== S || r[1] !== C ? (w = t(`text-token-text-secondary relative z-10 flex flex-col items-center text-sm`, `[@media(max-width:767px)_and_(max-height:480px)]:z-auto!`, S, C), r[0] = S, r[1] = C, r[2] = w) : w = r[2];
    let T;
    r[3] === l ? T = r[4] : (T = t(`flex flex-col items-center gap-1 text-center`, l), r[3] = l, r[4] = T);
    let E;
    r[5] === i ? E = r[6] : (E = (0, p.jsx)(`h3`, {
        className: `text-token-text-primary text-base leading-7 font-medium tracking-tight`,
        children: i
    }), r[5] = i, r[6] = E);
    let D;
    r[7] === a ? D = r[8] : (D = a && (0, p.jsx)(`p`, {
        className: `text-token-text-secondary text-sm leading-5 font-normal tracking-tight`,
        children: a
    }), r[7] = a, r[8] = D);
    let O;
    r[9] !== T || r[10] !== E || r[11] !== D ? (O = (0, p.jsxs)(`div`, {
        className: T,
        children: [E, D]
    }), r[9] = T, r[10] = E, r[11] = D, r[12] = O) : O = r[12];
    let k;
    r[13] !== c || r[14] !== o || r[15] !== w || r[16] !== O ? (k = (0, p.jsxs)(`div`, {
        className: w,
        children: [o, O, c]
    }), r[13] = c, r[14] = o, r[15] = w, r[16] = O, r[17] = k) : k = r[17];
    let A = k,
        j = y ? `px-4 py-3 pb-6` : `px-4 py-6`,
        M = b && `can-hover:hover:bg-token-bg-secondary/30 active:bg-token-bg-tertiary transition-colors duration-150 focus-visible:outline-token-outline-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
        N = b ? `cursor-pointer` : `cursor-default`,
        P;
    r[18] !== g || r[19] !== j || r[20] !== M || r[21] !== N ? (P = t(`isolate relative flex h-full min-h-80 w-full items-center justify-center rounded-2xl`, j, M, N, g), r[18] = g, r[19] = j, r[20] = M, r[21] = N, r[22] = P) : P = r[22];
    let F = P,
        I;
    r[23] === x ? I = r[24] : (I = x ? (0, p.jsx)(s, {
        className: `text-token-border-heavy`
    }) : null, r[23] = x, r[24] = I);
    let L;
    r[25] !== A || r[26] !== I ? (L = (0, p.jsxs)(p.Fragment, {
        children: [I, A]
    }), r[25] = A, r[26] = I, r[27] = L) : L = r[27];
    let R = L,
        z;
    r[28] !== R || r[29] !== F || r[30] !== _ || r[31] !== u ? (z = _ ? (0, p.jsx)(`button`, {
        type: `button`,
        className: F,
        onClick: u,
        children: R
    }) : (0, p.jsx)(`div`, {
        className: F,
        children: R
    }), r[28] = R, r[29] = F, r[30] = _, r[31] = u, r[32] = z) : z = r[32];
    let B = z;
    if (!m) return B;
    let V;
    return r[33] !== B || r[34] !== m ? (V = (0, p.jsx)(n, {
        label: m,
        side: `bottom`,
        align: `center`,
        children: B
    }), r[33] = B, r[34] = m, r[35] = V) : V = r[35], V
}
var f, p, m = e((() => {
    f = o(), i(), u(), r(), p = a()
}));
export {
    u as i, m as n, s as r, d as t
};
//# sourceMappingURL=51fe76c9-j3gx07r7qu474edn.js.map