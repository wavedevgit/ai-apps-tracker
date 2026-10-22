import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    eE as n,
    l7 as r,
    u7 as i
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as a,
    Nn as o,
    Rn as s,
    wn as c,
    zn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ti as u,
    hy as d,
    my as f,
    wi as p
} from "./30901919-k5uqyx4vyplt9toa.js";

function m(e) {
    "use forget";
    let n = (0, h.c)(15),
        {
            isCodeRunning: i,
            onClick: a,
            disabled: s,
            className: c
        } = e,
        f = l(),
        p = i ? d : u,
        m = i ? `primary` : `ghost`,
        _;
    n[0] === c ? _ = n[1] : (_ = r(`border-token-border-default ms-2 border font-sans`, c), n[0] = c, n[1] = _);
    let v;
    n[2] !== f || n[3] !== i ? (v = i ? f.formatMessage({
        id: `CodeBlockRunButton.stopCodeLabel`,
        defaultMessage: `Stop code`
    }) : f.formatMessage({
        id: `CodeBlockRunButton.runCodeLabel`,
        defaultMessage: `Run code`
    }), n[2] = f, n[3] = i, n[4] = v) : v = n[4];
    let y;
    n[5] === i ? y = n[6] : (y = i ? (0, g.jsx)(o, {
        id: `CodeBlockRunButton.stopCodeText`,
        defaultMessage: `Stop`
    }) : (0, g.jsx)(o, {
        id: `CodeBlockRunButton.runCodeText`,
        defaultMessage: `Run`
    }), n[5] = i, n[6] = y);
    let b;
    return n[7] !== s || n[8] !== a || n[9] !== p || n[10] !== m || n[11] !== _ || n[12] !== v || n[13] !== y ? (b = (0, g.jsx)(t, {
        icon: p,
        color: m,
        size: `medium`,
        className: _,
        type: `button`,
        onClick: a,
        disabled: s,
        "aria-label": v,
        children: y
    }), n[7] = s, n[8] = a, n[9] = p, n[10] = m, n[11] = _, n[12] = v, n[13] = y, n[14] = b) : b = n[14], b
}
var h, g, _ = e((() => {
    h = c(), n(), p(), f(), i(), s(), g = a()
}));
export {
    _ as n, m as t
};
//# sourceMappingURL=ae2c873a-nggt8gzd94mmxbv3.js.map