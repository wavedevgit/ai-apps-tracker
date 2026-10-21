import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as t,
    X5 as n,
    Y5 as r,
    zU as i
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as a,
    Nn as o,
    Rn as s,
    wn as c,
    zn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    LHn as u,
    RHn as d,
    X9t as f,
    Y9t as p,
    _pt as m,
    hpt as h
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    Ip as g,
    Lp as _
} from "./30901919-niqyapppecmq5jkn.js";
import {
    n as v,
    t as y
} from "./4225aa43-k3jm0ct3aqevmcv0.js";

function b(e) {
    "use forget";
    let t = (0, x.c)(18),
        {
            conversationId: n,
            messageId: a,
            itemClassName: s,
            size: c
        } = e,
        d = l(),
        p;
    t[0] !== n || t[1] !== a ? (p = h(n, a), t[0] = n, t[1] = a, t[2] = p) : p = t[2];
    let m = p;
    if (m == null) return null;
    let _;
    t[3] === d ? _ = t[4] : (_ = () => {
        i().danger(d.formatMessage(f.originalChatUnavailable))
    }, t[3] = d, t[4] = _);
    let y = _,
        b;
    t[5] === s ? b = t[6] : (b = r(`keyboard-focused:focus-ring`, `text-token-text-primary`, s), t[5] = s, t[6] = b);
    let C, w;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, S.jsx)(g, {
        "aria-hidden": `true`,
        className: `icon`
    }), w = (0, S.jsx)(o, {
        ...f.viewOriginalChat
    }), t[7] = C, t[8] = w) : (C = t[7], w = t[8]);
    let T;
    t[9] !== n || t[10] !== a || t[11] !== y ? (T = e => {
        e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || (e.preventDefault(), e.stopPropagation(), v({
            conversationId: n,
            messageId: a,
            onUnavailable: y
        }))
    }, t[9] = n, t[10] = a, t[11] = y, t[12] = T) : T = t[12];
    let E;
    return t[13] !== c || t[14] !== b || t[15] !== T || t[16] !== m ? (E = (0, S.jsx)(u.LinkItem, {
        size: c,
        className: b,
        icon: C,
        label: w,
        to: m,
        onClick: T
    }), t[13] = c, t[14] = b, t[15] = T, t[16] = m, t[17] = E) : E = t[17], E
}
var x, S, C = e((() => {
    x = c(), d(), _(), p(), y(), m(), t(), n(), s(), S = a()
}));
export {
    C as n, b as t
};
//# sourceMappingURL=02cd0121-d6cv8sx0jvb92shv.js.map