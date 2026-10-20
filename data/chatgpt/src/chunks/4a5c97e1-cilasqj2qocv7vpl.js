import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as t,
    q5 as n
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Pn as r,
    Rn as i,
    Tn as a,
    Vn as o,
    zn as s
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Hst as c,
    Vst as l
} from "./conversation-small-cawdu7il3ha6y70c.js";

function u(e) {
    "use forget";
    let t = (0, d.c)(18),
        {
            value: i,
            name: a,
            onChange: o,
            className: s,
            placeholder: c,
            onPressEnter: u,
            unitLabel: m
        } = e,
        h;
    t[0] === s ? h = t[1] : (h = n(s), t[0] = s, t[1] = h);
    let g;
    t[2] === i ? g = t[3] : (g = i?.toString() ?? ``, t[2] = i, t[3] = g);
    let _;
    t[4] === o ? _ = t[5] : (_ = e => {
        let t = e.target.valueAsNumber;
        o?.(Number.isNaN(t) ? null : t)
    }, t[4] = o, t[5] = _);
    let v;
    t[6] === m ? v = t[7] : (v = m ?? (0, f.jsx)(r, {
        ...p.unitDisplay
    }), t[6] = m, t[7] = v);
    let y;
    t[8] === v ? y = t[9] : (y = (0, f.jsx)(`div`, {
        className: `absolute end-0 top-1/2 -translate-y-1/2`,
        children: v
    }), t[8] = v, t[9] = y);
    let b;
    return t[10] !== a || t[11] !== u || t[12] !== c || t[13] !== h || t[14] !== g || t[15] !== _ || t[16] !== y ? (b = (0, f.jsx)(l, {
        inputClassName: `pe-14`,
        className: h,
        ariaLabel: !1,
        placeholder: c,
        type: `number`,
        name: a,
        value: g,
        onChange: _,
        onPressEnter: u,
        insideContainerChildren: y
    }), t[10] = a, t[11] = u, t[12] = c, t[13] = h, t[14] = g, t[15] = _, t[16] = y, t[17] = b) : b = t[17], b
}
var d, f, p, m = e((() => {
    d = a(), c(), t(), s(), f = o(), p = i({
        unitDisplay: {
            id: `organizationBillingInfo.creditUsageSettings.unitDisplay`,
            defaultMessage: `credits`
        }
    })
}));
export {
    m as n, u as t
};
//# sourceMappingURL=4a5c97e1-cilasqj2qocv7vpl.js.map