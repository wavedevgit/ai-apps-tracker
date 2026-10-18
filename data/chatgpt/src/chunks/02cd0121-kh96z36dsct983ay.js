import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b5 as t,
    fU as n,
    pU as r,
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
    N9t as u,
    P9t as d,
    THn as f,
    cpt as p,
    upt as m,
    wHn as h
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Ip as g,
    Lp as _
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    n as v,
    t as y
} from "./4225aa43-hf7e2elqt5mijxdq.js";

function b(e) {
    "use forget";
    let t = (0, x.c)(18),
        {
            conversationId: r,
            messageId: a,
            itemClassName: s,
            size: c
        } = e,
        u = l(),
        f;
    t[0] !== r || t[1] !== a ? (f = p(r, a), t[0] = r, t[1] = a, t[2] = f) : f = t[2];
    let m = f;
    if (m == null) return null;
    let _;
    t[3] === u ? _ = t[4] : (_ = () => {
        n().danger(u.formatMessage(d.originalChatUnavailable))
    }, t[3] = u, t[4] = _);
    let y = _,
        b;
    t[5] === s ? b = t[6] : (b = i(`keyboard-focused:focus-ring`, `text-token-text-primary`, s), t[5] = s, t[6] = b);
    let C, w;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, S.jsx)(g, {
        "aria-hidden": `true`,
        className: `icon`
    }), w = (0, S.jsx)(o, {
        ...d.viewOriginalChat
    }), t[7] = C, t[8] = w) : (C = t[7], w = t[8]);
    let T;
    t[9] !== r || t[10] !== a || t[11] !== y ? (T = e => {
        e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || (e.preventDefault(), e.stopPropagation(), v({
            conversationId: r,
            messageId: a,
            onUnavailable: y
        }))
    }, t[9] = r, t[10] = a, t[11] = y, t[12] = T) : T = t[12];
    let E;
    return t[13] !== c || t[14] !== b || t[15] !== T || t[16] !== m ? (E = (0, S.jsx)(h.LinkItem, {
        size: c,
        className: b,
        icon: C,
        label: w,
        to: m,
        onClick: T
    }), t[13] = c, t[14] = b, t[15] = T, t[16] = m, t[17] = E) : E = t[17], E
}
var x, S, C = e((() => {
    x = c(), f(), _(), u(), y(), m(), r(), t(), s(), S = a()
}));
export {
    C as n, b as t
};
//# sourceMappingURL=02cd0121-kh96z36dsct983ay.js.map