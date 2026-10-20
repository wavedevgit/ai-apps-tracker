import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as t,
    Y5 as n
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as r,
    Ln as i,
    Nn as a,
    Rn as o,
    wn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Kst as c,
    qst as l
} from "./conversation-small-ikg0dwuw782klweb.js";

function u(e) {
    "use forget";
    let t = (0, d.c)(18),
        {
            value: r,
            name: i,
            onChange: o,
            className: s,
            placeholder: l,
            onPressEnter: u,
            unitLabel: m
        } = e,
        h;
    t[0] === s ? h = t[1] : (h = n(s), t[0] = s, t[1] = h);
    let g;
    t[2] === r ? g = t[3] : (g = r?.toString() ?? ``, t[2] = r, t[3] = g);
    let _;
    t[4] === o ? _ = t[5] : (_ = e => {
        let t = e.target.valueAsNumber;
        o?.(Number.isNaN(t) ? null : t)
    }, t[4] = o, t[5] = _);
    let v;
    t[6] === m ? v = t[7] : (v = m ?? (0, f.jsx)(a, {
        ...p.unitDisplay
    }), t[6] = m, t[7] = v);
    let y;
    t[8] === v ? y = t[9] : (y = (0, f.jsx)(`div`, {
        className: `absolute end-0 top-1/2 -translate-y-1/2`,
        children: v
    }), t[8] = v, t[9] = y);
    let b;
    return t[10] !== i || t[11] !== u || t[12] !== l || t[13] !== h || t[14] !== g || t[15] !== _ || t[16] !== y ? (b = (0, f.jsx)(c, {
        inputClassName: `pe-14`,
        className: h,
        ariaLabel: !1,
        placeholder: l,
        type: `number`,
        name: i,
        value: g,
        onChange: _,
        onPressEnter: u,
        insideContainerChildren: y
    }), t[10] = i, t[11] = u, t[12] = l, t[13] = h, t[14] = g, t[15] = _, t[16] = y, t[17] = b) : b = t[17], b
}
var d, f, p, m = e((() => {
    d = s(), l(), t(), o(), f = r(), p = i({
        unitDisplay: {
            id: `organizationBillingInfo.creditUsageSettings.unitDisplay`,
            defaultMessage: `credits`
        }
    })
}));
export {
    m as n, u as t
};
//# sourceMappingURL=4a5c97e1-j4c49yrfcbxpzhsx.js.map