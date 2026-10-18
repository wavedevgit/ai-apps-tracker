import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b5 as t,
    y5 as n
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as r,
    wn as i
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Rp as a,
    Vp as o
} from "./8b34dbc2-gf9wnwcahty27ylx.js";

function s(e) {
    "use forget";
    let t = (0, c.c)(21),
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
    t[0] === p ? m = t[1] : (m = n(`text-token-text-primary min-w-0 truncate text-2xl leading-[30px] font-semibold tracking-[-0.5px]`, p), t[0] = p, t[1] = m);
    let h = m,
        g;
    t[2] === u ? g = t[3] : (g = u ? (0, l.jsx)(`div`, {
        className: `pe-2`,
        children: u
    }) : void 0, t[2] = u, t[3] = g);
    let _;
    t[4] === d ? _ = t[5] : (_ = n(`flex min-w-0 items-center gap-2`, d), t[4] = d, t[5] = _);
    let v;
    t[6] !== f?.titlePrefix || t[7] !== o ? (v = o != null && (0, l.jsx)(`div`, {
        className: n(`shrink-0`, f?.titlePrefix),
        children: o
    }), t[6] = f?.titlePrefix, t[7] = o, t[8] = v) : v = t[8];
    let y;
    t[9] !== r || t[10] !== h || t[11] !== i ? (y = r == null ? i == null ? null : (0, l.jsx)(`div`, {
        "aria-hidden": `true`,
        className: h,
        children: i
    }) : (0, l.jsx)(`h1`, {
        className: h,
        children: r
    }), t[9] = r, t[10] = h, t[11] = i, t[12] = y) : y = t[12];
    let b;
    t[13] !== s || t[14] !== _ || t[15] !== v || t[16] !== y ? (b = (0, l.jsxs)(`div`, {
        className: _,
        children: [s, v, y]
    }), t[13] = s, t[14] = _, t[15] = v, t[16] = y, t[17] = b) : b = t[17];
    let x;
    return t[18] !== g || t[19] !== b ? (x = (0, l.jsx)(a, {
        rightContent: g,
        children: b
    }), t[18] = g, t[19] = b, t[20] = x) : x = t[20], x
}
var c, l, u = e((() => {
    c = i(), o(), t(), l = r()
}));
export {
    u as n, s as t
};
//# sourceMappingURL=dee3edb9-e5vsst7kpbi6gler.js.map