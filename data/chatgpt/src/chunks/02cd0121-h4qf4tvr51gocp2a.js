import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    IU as t,
    LU as n,
    c7 as r,
    l7 as i
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as a,
    Nn as o,
    Rn as s,
    wn as c,
    zn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $9t as u,
    dpt as d,
    een as f,
    lpt as p,
    vUn as m,
    yUn as h
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Ip as g,
    Lp as _
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    n as v,
    t as y
} from "./4225aa43-ge9yesqph655ij9m.js";

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
    n[0] !== i || n[1] !== a ? (d = p(i, a), n[0] = i, n[1] = a, n[2] = d) : d = n[2];
    let h = d;
    if (h == null) return null;
    let _;
    n[3] === u ? _ = n[4] : (_ = () => {
        t().danger(u.formatMessage(f.originalChatUnavailable))
    }, n[3] = u, n[4] = _);
    let y = _,
        b;
    n[5] === s ? b = n[6] : (b = r(`keyboard-focused:focus-ring`, `text-token-text-primary`, s), n[5] = s, n[6] = b);
    let C, w;
    n[7] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, S.jsx)(g, {
        "aria-hidden": `true`,
        className: `icon`
    }), w = (0, S.jsx)(o, {
        ...f.viewOriginalChat
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
    x = c(), h(), _(), u(), y(), d(), n(), i(), s(), S = a()
}));
export {
    C as n, b as t
};
//# sourceMappingURL=02cd0121-h4qf4tvr51gocp2a.js.map