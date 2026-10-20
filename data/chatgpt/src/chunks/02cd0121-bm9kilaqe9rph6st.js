import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as t,
    RU as n,
    Y5 as r,
    zU as i
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as a,
    Nn as o,
    Rn as s,
    wn as c,
    zn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    K9t as u,
    NHn as d,
    PHn as f,
    fpt as p,
    mpt as m,
    q9t as h
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Ip as g,
    Lp as _
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    n as v,
    t as y
} from "./4225aa43-gbhbqaapkws4flp1.js";

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
        f;
    r[0] !== i || r[1] !== a ? (f = p(i, a), r[0] = i, r[1] = a, r[2] = f) : f = r[2];
    let m = f;
    if (m == null) return null;
    let _;
    r[3] === u ? _ = r[4] : (_ = () => {
        n().danger(u.formatMessage(h.originalChatUnavailable))
    }, r[3] = u, r[4] = _);
    let y = _,
        b;
    r[5] === s ? b = r[6] : (b = t(`keyboard-focused:focus-ring`, `text-token-text-primary`, s), r[5] = s, r[6] = b);
    let C, w;
    r[7] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, S.jsx)(g, {
        "aria-hidden": `true`,
        className: `icon`
    }), w = (0, S.jsx)(o, {
        ...h.viewOriginalChat
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
    return r[13] !== c || r[14] !== b || r[15] !== T || r[16] !== m ? (E = (0, S.jsx)(d.LinkItem, {
        size: c,
        className: b,
        icon: C,
        label: w,
        to: m,
        onClick: T
    }), r[13] = c, r[14] = b, r[15] = T, r[16] = m, r[17] = E) : E = r[17], E
}
var x, S, C = e((() => {
    x = c(), f(), _(), u(), y(), m(), i(), r(), s(), S = a()
}));
export {
    C as n, b as t
};
//# sourceMappingURL=02cd0121-bm9kilaqe9rph6st.js.map