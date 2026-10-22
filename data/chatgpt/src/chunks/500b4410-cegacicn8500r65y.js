import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c7 as t,
    l7 as n
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as r,
    Vn as i
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    g as a,
    v as o
} from "./707eab0c-ga79xj3x5cylmvgk.js";
import {
    n as s,
    t as c
} from "./f01b89ef-mu3vo3e8w64537p9.js";
var l, u, d = e((() => {
    n(), i(), a(), s(), l = r(), u = (e => {
        let {
            children: n,
            primary: r = !1,
            underline: i = !r,
            className: a,
            target: s,
            forceExternal: u,
            as: d,
            href: f,
            to: p,
            ...m
        } = e, h = u ?? /^https?:\/\//.test(f ?? p ?? ``), g = o(), _ = d || (h ? `a` : g), v = {
            ...m,
            className: t(c.TextLink, a),
            "data-primary": r ? `` : void 0,
            "data-underline": i === !1 ? void 0 : i === `hover` ? `hover` : `always`
        };
        return !f && !p ? (0, l.jsx)(`span`, {
            ...v,
            role: `button`,
            children: n
        }) : (0, l.jsx)(_, {
            ...h ? {
                target: `_blank`,
                rel: `noopener noreferrer`,
                href: f ?? p
            } : {
                href: f,
                to: p
            },
            ...v,
            children: n
        })
    })
}));
export {
    d as n, u as t
};
//# sourceMappingURL=500b4410-cegacicn8500r65y.js.map