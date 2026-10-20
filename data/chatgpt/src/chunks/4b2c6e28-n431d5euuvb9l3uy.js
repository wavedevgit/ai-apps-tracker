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
import {
    n as s
} from "./44246d2c-dgp7kxutj9d3oogu.js";

function c(e) {
    "use forget";
    let r = (0, l.c)(38),
        i, a, o, s, c, d, f, p, m, h, g, _;
    r[0] === e ? (i = r[1], a = r[2], o = r[3], s = r[4], c = r[5], d = r[6], f = r[7], p = r[8], m = r[9], h = r[10], g = r[11], _ = r[12]) : ({
        icon: i,
        label: s,
        tooltip: g,
        tooltipCustomPaddingClassName: _,
        text: m,
        disabled: f,
        rounded: p,
        onClick: c,
        iconColor: o,
        textColor: h,
        className: a,
        ...d
    } = e, r[0] = e, r[1] = i, r[2] = a, r[3] = o, r[4] = s, r[5] = c, r[6] = d, r[7] = f, r[8] = p, r[9] = m, r[10] = h, r[11] = g, r[12] = _);
    let v = f !== void 0 && f,
        y = p === void 0 || p,
        b = v ? `cursor-default opacity-40` : `hover:[&_.icon]:text-token-text-primary hover:bg-token-bg-tertiary`,
        x = y ? `rounded-full` : `rounded-lg`,
        S = m ? `h-9 gap-1.5 px-3` : `size-9 justify-center p-1.5`,
        C;
    r[13] !== a || r[14] !== b || r[15] !== x || r[16] !== S ? (C = t(`flex items-center transition-colors select-none`, b, x, S, a), r[13] = a, r[14] = b, r[15] = x, r[16] = S, r[17] = C) : C = r[17];
    let w = o ?? `text-token-text-primary`,
        T;
    r[18] === w ? T = r[19] : (T = t(`icon`, w), r[18] = w, r[19] = T);
    let E;
    r[20] !== i || r[21] !== T ? (E = (0, u.jsx)(i, {
        className: T
    }), r[20] = i, r[21] = T, r[22] = E) : E = r[22];
    let D;
    r[23] !== m || r[24] !== h ? (D = m && (0, u.jsx)(`span`, {
        className: t(`text-sm font-medium`, h ?? `text-token-text-primary`),
        children: m
    }), r[23] = m, r[24] = h, r[25] = D) : D = r[25];
    let O;
    r[26] !== v || r[27] !== s || r[28] !== c || r[29] !== d || r[30] !== D || r[31] !== C || r[32] !== E ? (O = (0, u.jsxs)(`button`, {
        "aria-label": s,
        className: C,
        onClick: c,
        disabled: v,
        ...d,
        children: [E, D]
    }), r[26] = v, r[27] = s, r[28] = c, r[29] = d, r[30] = D, r[31] = C, r[32] = E, r[33] = O) : O = r[33];
    let k = O;
    if (!g) return k;
    let A;
    return r[34] !== k || r[35] !== g || r[36] !== _ ? (A = (0, u.jsx)(n, {
        label: g,
        sideOffset: 0,
        customPaddingClassName: _,
        children: k
    }), r[34] = k, r[35] = g, r[36] = _, r[37] = A) : A = r[37], A
}
var l, u, d = e((() => {
    l = o(), i(), r(), s(), u = a()
}));
export {
    d as n, c as t
};
//# sourceMappingURL=4b2c6e28-n431d5euuvb9l3uy.js.map