import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as t,
    b5 as n,
    kT as r,
    y5 as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as a,
    Nn as o,
    Rn as s,
    wn as c,
    zn as l
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Di as u,
    Ei as d,
    by as f,
    yy as p
} from "./30901919-e33mbl5u1y88w5wu.js";

function m(e) {
    "use forget";
    let t = (0, h.c)(15),
        {
            isCodeRunning: n,
            onClick: a,
            disabled: s,
            className: c
        } = e,
        d = l(),
        p = n ? f : u,
        m = n ? `primary` : `ghost`,
        _;
    t[0] === c ? _ = t[1] : (_ = i(`border-token-border-default ms-2 border font-sans`, c), t[0] = c, t[1] = _);
    let v;
    t[2] !== d || t[3] !== n ? (v = n ? d.formatMessage({
        id: `CodeBlockRunButton.stopCodeLabel`,
        defaultMessage: `Stop code`
    }) : d.formatMessage({
        id: `CodeBlockRunButton.runCodeLabel`,
        defaultMessage: `Run code`
    }), t[2] = d, t[3] = n, t[4] = v) : v = t[4];
    let y;
    t[5] === n ? y = t[6] : (y = n ? (0, g.jsx)(o, {
        id: `CodeBlockRunButton.stopCodeText`,
        defaultMessage: `Stop`
    }) : (0, g.jsx)(o, {
        id: `CodeBlockRunButton.runCodeText`,
        defaultMessage: `Run`
    }), t[5] = n, t[6] = y);
    let b;
    return t[7] !== s || t[8] !== a || t[9] !== p || t[10] !== m || t[11] !== _ || t[12] !== v || t[13] !== y ? (b = (0, g.jsx)(r, {
        icon: p,
        color: m,
        size: `medium`,
        className: _,
        type: `button`,
        onClick: a,
        disabled: s,
        "aria-label": v,
        children: y
    }), t[7] = s, t[8] = a, t[9] = p, t[10] = m, t[11] = _, t[12] = v, t[13] = y, t[14] = b) : b = t[14], b
}
var h, g, _ = e((() => {
    h = c(), t(), d(), p(), n(), s(), g = a()
}));
export {
    _ as n, m as t
};
//# sourceMappingURL=ae2c873a-kigtqtdgfbq2gbio.js.map