import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    IU as t,
    K5 as n,
    LU as r,
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
    MUn as u,
    cpt as d,
    jUn as f,
    nen as p,
    opt as m,
    ten as h
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Fp as g,
    Pp as _
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    n as v,
    t as y
} from "./4225aa43-esws7ne0w3hj0b0u.js";

function b(e) {
    "use forget";
    let r = (0, x.c)(18),
        {
            conversationId: i,
            messageId: a,
            itemClassName: s,
            size: c
        } = e,
        u = l(),
        d;
    r[0] !== i || r[1] !== a ? (d = m(i, a), r[0] = i, r[1] = a, r[2] = d) : d = r[2];
    let h = d;
    if (h == null) return null;
    let g;
    r[3] === u ? g = r[4] : (g = () => {
        t().danger(u.formatMessage(p.originalChatUnavailable))
    }, r[3] = u, r[4] = g);
    let y = g,
        b;
    r[5] === s ? b = r[6] : (b = n(`keyboard-focused:focus-ring`, `text-token-text-primary`, s), r[5] = s, r[6] = b);
    let C, w;
    r[7] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, S.jsx)(_, {
        "aria-hidden": `true`,
        className: `icon`
    }), w = (0, S.jsx)(o, {
        ...p.viewOriginalChat
    }), r[7] = C, r[8] = w) : (C = r[7], w = r[8]);
    let T;
    r[9] !== i || r[10] !== a || r[11] !== y ? (T = e => {
        e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || (e.preventDefault(), e.stopPropagation(), v({
            conversationId: i,
            messageId: a,
            onUnavailable: y
        }))
    }, r[9] = i, r[10] = a, r[11] = y, r[12] = T) : T = r[12];
    let E;
    return r[13] !== c || r[14] !== b || r[15] !== T || r[16] !== h ? (E = (0, S.jsx)(f.LinkItem, {
        size: c,
        className: b,
        icon: C,
        label: w,
        to: h,
        onClick: T
    }), r[13] = c, r[14] = b, r[15] = T, r[16] = h, r[17] = E) : E = r[17], E
}
var x, S, C = e((() => {
    x = c(), u(), g(), h(), y(), d(), r(), i(), s(), S = a()
}));
export {
    C as n, b as t
};
//# sourceMappingURL=02cd0121-oc1g05vlv57s08z3.js.map