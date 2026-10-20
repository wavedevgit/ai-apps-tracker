import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Pn as t,
    Tn as n,
    Vn as r,
    zn as i
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Flt as a,
    Llt as o
} from "./conversation-small-cawdu7il3ha6y70c.js";

function s() {}

function c(e) {
    return e.preventDefault()
}
var l, u, d, f = e((() => {
    l = n(), o(), i(), u = r(), d = e => {
        "use forget";
        let n = (0, l.c)(4),
            {
                children: r,
                presentation: i
            } = e,
            o = i === void 0 ? `existing` : i,
            d;
        n[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, u.jsx)(t, {
            id: `elicitation.page.title`,
            defaultMessage: `Continue your request`
        }), n[0] = d) : d = n[0];
        let f = d,
            p = o === `existing` ? `mx-auto flex min-h-full max-w-lg flex-col justify-center gap-4 p-6` : o === `confirmation` ? `mx-auto flex min-h-full w-full max-w-sm flex-col justify-center gap-8 px-8 py-10` : `mx-auto flex min-h-full w-full max-w-sm flex-col gap-8 px-8 py-10`,
            m;
        return n[1] !== r || n[2] !== p ? (m = (0, u.jsx)(`div`, {
            className: `isolate`,
            children: (0, u.jsx)(a, {
                className: `h-dvh`,
                open: !0,
                renderInPlace: !0,
                onOpenChange: s,
                onEscapeKeyDown: c,
                accessibleTitle: f,
                children: (0, u.jsx)(a.Contents, {
                    children: (0, u.jsx)(`main`, {
                        className: p,
                        children: r
                    })
                })
            })
        }), n[1] = r, n[2] = p, n[3] = m) : m = n[3], m
    }
}));
export {
    f as n, d as t
};
//# sourceMappingURL=1dc5ae5b-lbh95zlacjj39fll.js.map