import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    l7 as n,
    u7 as r
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as i,
    Vn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Kd as o,
    qd as s,
    zd as c
} from "./c2675c8c-jg3tpj8mw86wdc0g.js";
var l, u, d, f, p, m, h, g = e((() => {
        l = `_1E5Jeq_Checkbox`, u = `_1E5Jeq_CheckMark`, d = `_1E5Jeq_Container`, f = `_1E5Jeq_dark`, p = `_1E5Jeq_Label`, m = `_1E5Jeq_light`, h = {
            Checkbox: l,
            CheckMark: u,
            Container: d,
            dark: f,
            Label: p,
            light: m
        }
    })),
    _, v, y, b = e((() => {
        r(), c(), _ = t(a(), 1), g(), v = i(), y = ({
            className: e,
            label: t,
            id: r,
            disabled: i,
            labelClassName: a,
            orientation: c = `left`,
            ...l
        }) => {
            let u = (0, _.useId)(),
                d = r ?? u;
            return (0, v.jsxs)(`div`, {
                "data-disabled": i ? `` : void 0,
                "data-has-label": t ? `` : void 0,
                "data-orientation": c,
                className: n(e, h.Container),
                children: [(0, v.jsx)(o, {
                    className: h.Checkbox,
                    id: d,
                    disabled: i,
                    ...l,
                    children: (0, v.jsx)(s, {
                        className: h.CheckMark
                    })
                }), t && (0, v.jsx)(`label`, {
                    htmlFor: d,
                    className: n(h.Label, a),
                    onMouseDown: e => {
                        !e.defaultPrevented && e.detail > 1 && e.preventDefault()
                    },
                    children: t
                })]
            })
        }
    })),
    x = e((() => {
        b()
    }));
export {
    y as n, b as r, x as t
};
//# sourceMappingURL=6fe9eb8f-fxzd0xq1nstamwon.js.map