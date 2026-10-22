import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    IU as t,
    LU as n,
    c7 as r,
    l7 as i
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as a,
    Nn as o,
    Rn as s,
    wn as c,
    zn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    H9t as u,
    U9t as d,
    cpt as f,
    nUn as p,
    tUn as m,
    upt as h
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Ip as g,
    Lp as _
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    n as v,
    t as y
} from "./4225aa43-k6k84wfqx79v0pzi.js";

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
        p;
    n[0] !== i || n[1] !== a ? (p = f(i, a), n[0] = i, n[1] = a, n[2] = p) : p = n[2];
    let h = p;
    if (h == null) return null;
    let _;
    n[3] === u ? _ = n[4] : (_ = () => {
        t().danger(u.formatMessage(d.originalChatUnavailable))
    }, n[3] = u, n[4] = _);
    let y = _,
        b;
    n[5] === s ? b = n[6] : (b = r(`keyboard-focused:focus-ring`, `text-token-text-primary`, s), n[5] = s, n[6] = b);
    let C, w;
    n[7] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, S.jsx)(g, {
        "aria-hidden": `true`,
        className: `icon`
    }), w = (0, S.jsx)(o, {
        ...d.viewOriginalChat
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
    return n[13] !== c || n[14] !== b || n[15] !== T || n[16] !== h ? (E = (0, S.jsx)(m.LinkItem, {
        size: c,
        className: b,
        icon: C,
        label: w,
        to: h,
        onClick: T
    }), n[13] = c, n[14] = b, n[15] = T, n[16] = h, n[17] = E) : E = n[17], E
}
var x, S, C = e((() => {
    x = c(), p(), _(), u(), y(), h(), n(), i(), s(), S = a()
}));
export {
    C as n, b as t
};
//# sourceMappingURL=02cd0121-l4b0nh21cln23gkm.js.map