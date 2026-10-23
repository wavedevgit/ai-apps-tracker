import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    K5 as n,
    eE as r,
    q5 as i
} from "./4813494d-mdvd4786a87166cc.js";
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
} from "./30901919-s8bko9nrkqwv6i4f.js";

function m(e) {
    "use forget";
    let r = (0, h.c)(15),
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
    r[0] === c ? _ = r[1] : (_ = n(`border-token-border-default ms-2 border font-sans`, c), r[0] = c, r[1] = _);
    let v;
    r[2] !== f || r[3] !== i ? (v = i ? f.formatMessage({
        id: `CodeBlockRunButton.stopCodeLabel`,
        defaultMessage: `Stop code`
    }) : f.formatMessage({
        id: `CodeBlockRunButton.runCodeLabel`,
        defaultMessage: `Run code`
    }), r[2] = f, r[3] = i, r[4] = v) : v = r[4];
    let y;
    r[5] === i ? y = r[6] : (y = i ? (0, g.jsx)(o, {
        id: `CodeBlockRunButton.stopCodeText`,
        defaultMessage: `Stop`
    }) : (0, g.jsx)(o, {
        id: `CodeBlockRunButton.runCodeText`,
        defaultMessage: `Run`
    }), r[5] = i, r[6] = y);
    let b;
    return r[7] !== s || r[8] !== a || r[9] !== p || r[10] !== m || r[11] !== _ || r[12] !== v || r[13] !== y ? (b = (0, g.jsx)(t, {
        icon: p,
        color: m,
        size: `medium`,
        className: _,
        type: `button`,
        onClick: a,
        disabled: s,
        "aria-label": v,
        children: y
    }), r[7] = s, r[8] = a, r[9] = p, r[10] = m, r[11] = _, r[12] = v, r[13] = y, r[14] = b) : b = r[14], b
}
var h, g, _ = e((() => {
    h = c(), r(), p(), f(), i(), s(), g = a()
}));
export {
    _ as n, m as t
};
//# sourceMappingURL=ae2c873a-lt35ceaevff140qm.js.map