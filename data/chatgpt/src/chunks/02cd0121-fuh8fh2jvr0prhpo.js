import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    G5 as t,
    K5 as n,
    RU as r,
    zU as i
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as a,
    Nn as o,
    Rn as s,
    wn as c,
    zn as l
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    G9t as u,
    LHn as d,
    RHn as f,
    W9t as p,
    fpt as m,
    upt as h
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Ip as g,
    Lp as _
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    n as v,
    t as y
} from "./4225aa43-gepdfa229fbg0ds9.js";

function b(e) {
    "use forget";
    let n = (0, x.c)(18),
        {
            conversationId: i,
            messageId: a,
            itemClassName: s,
            size: c
        } = e,
        f = l(),
        p;
    n[0] !== i || n[1] !== a ? (p = h(i, a), n[0] = i, n[1] = a, n[2] = p) : p = n[2];
    let m = p;
    if (m == null) return null;
    let _;
    n[3] === f ? _ = n[4] : (_ = () => {
        r().danger(f.formatMessage(u.originalChatUnavailable))
    }, n[3] = f, n[4] = _);
    let y = _,
        b;
    n[5] === s ? b = n[6] : (b = t(`keyboard-focused:focus-ring`, `text-token-text-primary`, s), n[5] = s, n[6] = b);
    let C, w;
    n[7] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, S.jsx)(g, {
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
    return n[13] !== c || n[14] !== b || n[15] !== T || n[16] !== m ? (E = (0, S.jsx)(d.LinkItem, {
        size: c,
        className: b,
        icon: C,
        label: w,
        to: m,
        onClick: T
    }), n[13] = c, n[14] = b, n[15] = T, n[16] = m, n[17] = E) : E = n[17], E
}
var x, S, C = e((() => {
    x = c(), f(), _(), p(), y(), m(), i(), n(), s(), S = a()
}));
export {
    C as n, b as t
};
//# sourceMappingURL=02cd0121-fuh8fh2jvr0prhpo.js.map