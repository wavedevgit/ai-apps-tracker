import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    IU as t,
    LU as n,
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
    $9t as u,
    Q9t as d,
    cpt as f,
    opt as p,
    vUn as m,
    yUn as h
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Fp as g,
    Pp as _
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    n as v,
    t as y
} from "./4225aa43-nujklkw7ldu5l6rt.js";

function b(e) {
    "use forget";
    let n = (0, x.c)(18),
        {
            conversationId: i,
            messageId: a,
            itemClassName: s,
            size: c
        } = e,
        d = l(),
        f;
    n[0] !== i || n[1] !== a ? (f = p(i, a), n[0] = i, n[1] = a, n[2] = f) : f = n[2];
    let h = f;
    if (h == null) return null;
    let g;
    n[3] === d ? g = n[4] : (g = () => {
        t().danger(d.formatMessage(u.originalChatUnavailable))
    }, n[3] = d, n[4] = g);
    let y = g,
        b;
    n[5] === s ? b = n[6] : (b = r(`keyboard-focused:focus-ring`, `text-token-text-primary`, s), n[5] = s, n[6] = b);
    let C, w;
    n[7] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, S.jsx)(_, {
        "aria-hidden": `true`,
        className: `icon`
    }), w = (0, S.jsx)(o, {
        ...u.viewOriginalChat
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
    x = c(), h(), g(), d(), y(), f(), n(), i(), s(), S = a()
}));
export {
    C as n, b as t
};
//# sourceMappingURL=02cd0121-osoldzg3v8ndsr5u.js.map