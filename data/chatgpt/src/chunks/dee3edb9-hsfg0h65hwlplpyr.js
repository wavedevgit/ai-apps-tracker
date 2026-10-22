import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c7 as t,
    l7 as n
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as r,
    wn as i
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Vp as a,
    Wp as o
} from "./8b34dbc2-m4883pai3e8fx8q6.js";

function s(e) {
    "use forget";
    let n = (0, c.c)(21),
        {
            title: r,
            titlePlaceholder: i,
            titlePrefix: o,
            navigationButton: s,
            rightContent: u,
            className: d,
            classNames: f
        } = e,
        p = f?.title,
        m;
    n[0] === p ? m = n[1] : (m = t(`text-token-text-primary min-w-0 truncate text-2xl leading-[30px] font-semibold tracking-[-0.5px]`, p), n[0] = p, n[1] = m);
    let h = m,
        g;
    n[2] === u ? g = n[3] : (g = u ? (0, l.jsx)(`div`, {
        className: `pe-2`,
        children: u
    }) : void 0, n[2] = u, n[3] = g);
    let _;
    n[4] === d ? _ = n[5] : (_ = t(`flex min-w-0 items-center gap-2`, d), n[4] = d, n[5] = _);
    let v;
    n[6] !== f?.titlePrefix || n[7] !== o ? (v = o != null && (0, l.jsx)(`div`, {
        className: t(`shrink-0`, f?.titlePrefix),
        children: o
    }), n[6] = f?.titlePrefix, n[7] = o, n[8] = v) : v = n[8];
    let y;
    n[9] !== r || n[10] !== h || n[11] !== i ? (y = r == null ? i == null ? null : (0, l.jsx)(`div`, {
        "aria-hidden": `true`,
        className: h,
        children: i
    }) : (0, l.jsx)(`h1`, {
        className: h,
        children: r
    }), n[9] = r, n[10] = h, n[11] = i, n[12] = y) : y = n[12];
    let b;
    n[13] !== s || n[14] !== _ || n[15] !== v || n[16] !== y ? (b = (0, l.jsxs)(`div`, {
        className: _,
        children: [s, v, y]
    }), n[13] = s, n[14] = _, n[15] = v, n[16] = y, n[17] = b) : b = n[17];
    let x;
    return n[18] !== g || n[19] !== b ? (x = (0, l.jsx)(a, {
        rightContent: g,
        children: b
    }), n[18] = g, n[19] = b, n[20] = x) : x = n[20], x
}
var c, l, u = e((() => {
    c = i(), o(), n(), l = r()
}));
export {
    u as n, s as t
};
//# sourceMappingURL=dee3edb9-hsfg0h65hwlplpyr.js.map