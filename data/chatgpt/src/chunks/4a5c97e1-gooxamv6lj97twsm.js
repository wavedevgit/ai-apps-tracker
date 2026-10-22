import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c7 as t,
    l7 as n
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as r,
    Ln as i,
    Nn as a,
    Rn as o,
    wn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bst as c,
    zst as l
} from "./conversation-small-i79e9c315w50am5f.js";

function u(e) {
    "use forget";
    let n = (0, d.c)(18),
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
    n[0] === s ? h = n[1] : (h = t(s), n[0] = s, n[1] = h);
    let g;
    n[2] === r ? g = n[3] : (g = r?.toString() ?? ``, n[2] = r, n[3] = g);
    let _;
    n[4] === o ? _ = n[5] : (_ = e => {
        let t = e.target.valueAsNumber;
        o?.(Number.isNaN(t) ? null : t)
    }, n[4] = o, n[5] = _);
    let v;
    n[6] === m ? v = n[7] : (v = m ?? (0, f.jsx)(a, {
        ...p.unitDisplay
    }), n[6] = m, n[7] = v);
    let y;
    n[8] === v ? y = n[9] : (y = (0, f.jsx)(`div`, {
        className: `absolute end-0 top-1/2 -translate-y-1/2`,
        children: v
    }), n[8] = v, n[9] = y);
    let b;
    return n[10] !== i || n[11] !== u || n[12] !== c || n[13] !== h || n[14] !== g || n[15] !== _ || n[16] !== y ? (b = (0, f.jsx)(l, {
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
    }), n[10] = i, n[11] = u, n[12] = c, n[13] = h, n[14] = g, n[15] = _, n[16] = y, n[17] = b) : b = n[17], b
}
var d, f, p, m = e((() => {
    d = s(), c(), n(), o(), f = r(), p = i({
        unitDisplay: {
            id: `organizationBillingInfo.creditUsageSettings.unitDisplay`,
            defaultMessage: `credits`
        }
    })
}));
export {
    m as n, u as t
};
//# sourceMappingURL=4a5c97e1-gooxamv6lj97twsm.js.map