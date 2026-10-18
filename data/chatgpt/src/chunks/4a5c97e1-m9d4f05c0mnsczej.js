import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b5 as t,
    y5 as n
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as r,
    Ln as i,
    Nn as a,
    Rn as o,
    wn as s
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Bst as c,
    zst as l
} from "./conversation-small-fym1zmu9zimymmm1.js";

function u(e) {
    "use forget";
    let t = (0, d.c)(18),
        {
            value: r,
            name: i,
            onChange: o,
            className: s,
            placeholder: c,
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
    return t[10] !== i || t[11] !== u || t[12] !== c || t[13] !== h || t[14] !== g || t[15] !== _ || t[16] !== y ? (b = (0, f.jsx)(l, {
        inputClassName: `pe-14`,
        className: h,
        ariaLabel: !1,
        placeholder: c,
        type: `number`,
        name: i,
        value: g,
        onChange: _,
        onPressEnter: u,
        insideContainerChildren: y
    }), t[10] = i, t[11] = u, t[12] = c, t[13] = h, t[14] = g, t[15] = _, t[16] = y, t[17] = b) : b = t[17], b
}
var d, f, p, m = e((() => {
    d = s(), c(), t(), o(), f = r(), p = i({
        unitDisplay: {
            id: `organizationBillingInfo.creditUsageSettings.unitDisplay`,
            defaultMessage: `credits`
        }
    })
}));
export {
    m as n, u as t
};
//# sourceMappingURL=4a5c97e1-m9d4f05c0mnsczej.js.map