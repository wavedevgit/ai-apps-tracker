import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    IU as t,
    LU as n,
    l7 as r,
    u7 as i
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as a,
    Nn as o,
    Rn as s,
    wn as c,
    zn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    SUn as u,
    dpt as d,
    lpt as f,
    nen as p,
    ten as m,
    xUn as h
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    Ip as g,
    Lp as _
} from "./30901919-lc79rizhhepnsl3q.js";
import {
    n as v,
    t as y
} from "./4225aa43-f5fnec4ff6s1hemh.js";

function b(e) {
    "use forget";
    let n = (0, x.c)(18),
        {
            conversationId: i,
            messageId: a,
            itemClassName: s,
            size: c
        } = e,
        u = l(),
        d;
    n[0] !== i || n[1] !== a ? (d = f(i, a), n[0] = i, n[1] = a, n[2] = d) : d = n[2];
    let m = d;
    if (m == null) return null;
    let _;
    n[3] === u ? _ = n[4] : (_ = () => {
        t().danger(u.formatMessage(p.originalChatUnavailable))
    }, n[3] = u, n[4] = _);
    let y = _,
        b;
    n[5] === s ? b = n[6] : (b = r(`keyboard-focused:focus-ring`, `text-token-text-primary`, s), n[5] = s, n[6] = b);
    let C, w;
    n[7] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, S.jsx)(g, {
        "aria-hidden": `true`,
        className: `icon`
    }), w = (0, S.jsx)(o, {
        ...p.viewOriginalChat
    }), n[7] = C, n[8] = w) : (C = n[7], w = n[8]);
    let T;
    n[9] !== i || n[10] !== a || n[11] !== y ? (T = e => {
        e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || (e.preventDefault(), e.stopPropagation(), v({
            conversationId: i,
            messageId: a,
            onUnavailable: y
        }))
    }, n[9] = i, n[10] = a, n[11] = y, n[12] = T) : T = n[12];
    let E;
    return n[13] !== c || n[14] !== b || n[15] !== T || n[16] !== m ? (E = (0, S.jsx)(h.LinkItem, {
        size: c,
        className: b,
        icon: C,
        label: w,
        to: m,
        onClick: T
    }), n[13] = c, n[14] = b, n[15] = T, n[16] = m, n[17] = E) : E = n[17], E
}
var x, S, C = e((() => {
    x = c(), u(), _(), m(), y(), d(), n(), i(), s(), S = a()
}));
export {
    C as n, b as t
};
//# sourceMappingURL=02cd0121-pfhx38jldgxwt0ou.js.map