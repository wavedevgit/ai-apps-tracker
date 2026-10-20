import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    JT as t,
    X5 as n,
    Y5 as r,
    YT as i
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as a,
    Nn as o,
    Rn as s,
    wn as c,
    zn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Di as u,
    Ei as d,
    _y as f,
    gy as p
} from "./30901919-e8h11sw136qen6v0.js";

function m(e) {
    "use forget";
    let n = (0, h.c)(15),
        {
            isCodeRunning: i,
            onClick: a,
            disabled: s,
            className: c
        } = e,
        d = l(),
        p = i ? f : u,
        m = i ? `primary` : `ghost`,
        _;
    n[0] === c ? _ = n[1] : (_ = r(`border-token-border-default ms-2 border font-sans`, c), n[0] = c, n[1] = _);
    let v;
    n[2] !== d || n[3] !== i ? (v = i ? d.formatMessage({
        id: `CodeBlockRunButton.stopCodeLabel`,
        defaultMessage: `Stop code`
    }) : d.formatMessage({
        id: `CodeBlockRunButton.runCodeLabel`,
        defaultMessage: `Run code`
    }), n[2] = d, n[3] = i, n[4] = v) : v = n[4];
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
    h = c(), i(), d(), p(), n(), s(), g = a()
}));
export {
    _ as n, m as t
};
//# sourceMappingURL=ae2c873a-c1h7uj3dbqjync1s.js.map