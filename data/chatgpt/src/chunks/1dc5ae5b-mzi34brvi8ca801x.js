import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as t,
    Nn as n,
    Rn as r,
    wn as i
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Nlt as a,
    jlt as o
} from "./conversation-small-dwpaie1hln28efxb.js";

function s() {}

function c(e) {
    return e.preventDefault()
}
var l, u, d, f = e((() => {
    l = i(), a(), r(), u = t(), d = e => {
        "use forget";
        let t = (0, l.c)(4),
            {
                children: r,
                presentation: i
            } = e,
            a = i === void 0 ? `existing` : i,
            d;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, u.jsx)(n, {
            id: `elicitation.page.title`,
            defaultMessage: `Continue your request`
        }), t[0] = d) : d = t[0];
        let f = d,
            p = a === `existing` ? `mx-auto flex min-h-full max-w-lg flex-col justify-center gap-4 p-6` : a === `confirmation` ? `mx-auto flex min-h-full w-full max-w-sm flex-col justify-center gap-8 px-8 py-10` : `mx-auto flex min-h-full w-full max-w-sm flex-col gap-8 px-8 py-10`,
            m;
        return t[1] !== r || t[2] !== p ? (m = (0, u.jsx)(`div`, {
            className: `isolate`,
            children: (0, u.jsx)(o, {
                className: `h-dvh`,
                open: !0,
                renderInPlace: !0,
                onOpenChange: s,
                onEscapeKeyDown: c,
                accessibleTitle: f,
                children: (0, u.jsx)(o.Contents, {
                    children: (0, u.jsx)(`main`, {
                        className: p,
                        children: r
                    })
                })
            })
        }), t[1] = r, t[2] = p, t[3] = m) : m = t[3], m
    }
}));
export {
    f as n, d as t
};
//# sourceMappingURL=1dc5ae5b-mzi34brvi8ca801x.js.map