import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b5 as n,
    y5 as r
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as i,
    Vn as a
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Cf as o,
    Sf as s,
    hf as c
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
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
        n(), c(), _ = t(a(), 1), g(), v = i(), y = ({
            className: e,
            label: t,
            id: n,
            disabled: i,
            labelClassName: a,
            orientation: c = `left`,
            ...l
        }) => {
            let u = (0, _.useId)(),
                d = n ?? u;
            return (0, v.jsxs)(`div`, {
                "data-disabled": i ? `` : void 0,
                "data-has-label": t ? `` : void 0,
                "data-orientation": c,
                className: r(e, h.Container),
                children: [(0, v.jsx)(s, {
                    className: h.Checkbox,
                    id: d,
                    disabled: i,
                    ...l,
                    children: (0, v.jsx)(o, {
                        className: h.CheckMark
                    })
                }), t && (0, v.jsx)(`label`, {
                    htmlFor: d,
                    className: r(h.Label, a),
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
//# sourceMappingURL=6fe9eb8f-mh3z5by859mblazn.js.map