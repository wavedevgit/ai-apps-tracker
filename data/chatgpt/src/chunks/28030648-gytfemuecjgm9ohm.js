import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c7 as n,
    l7 as r
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as i,
    Vn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    esn as o,
    nsn as s,
    tsn as c
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    t as l
} from "./bcae0416-frx726h3ax995aos.js";
import {
    n as u,
    t as d
} from "./b2878236-j3uoaxmemuivea97.js";
var f, p, m, h, g, _, v = e((() => {
        r(), l(), f = t(a()), u(), p = i(), m = (0, f.createContext)(null), h = () => {
            let e = (0, f.use)(m);
            if (!e) throw Error(`RadioGroup components must be wrapped in <RadioGroup />`);
            return e
        }, g = ({
            onChange: e,
            children: t,
            className: r,
            direction: i = `row`,
            disabled: a = !1,
            __isWidget: s,
            ...c
        }) => {
            let l = (0, f.useMemo)(() => ({
                disabled: a,
                direction: i
            }), [a, i]);
            return (0, p.jsx)(m, {
                value: l,
                children: (0, p.jsx)(o, {
                    className: n(d.RadioGroup, r),
                    "data-direction": i,
                    "data-w-component": s ? `radio-group` : void 0,
                    onValueChange: e,
                    disabled: a,
                    ...c,
                    children: t
                })
            })
        }, _ = ({
            value: e,
            disabled: t = !1,
            id: r,
            required: i,
            children: a,
            className: o,
            block: l = !1,
            ...u
        }) => {
            let {
                disabled: m
            } = h(), g = m || t, _ = (0, f.useId)(), v = r ?? `${e}-${_}`;
            return (0, p.jsx)(`div`, {
                className: `flex`,
                ...u,
                children: (0, p.jsxs)(`label`, {
                    htmlFor: v,
                    className: n(d.RadioLabel, o),
                    "data-disabled": g ? `` : void 0,
                    "data-block": l ? `` : void 0,
                    onMouseDown: e => {
                        !e.defaultPrevented && e.detail > 1 && e.preventDefault()
                    },
                    children: [(0, p.jsx)(`div`, {
                        className: d.RadioIndicatorWrapper,
                        children: (0, p.jsx)(s, {
                            id: v,
                            value: e,
                            disabled: g,
                            required: i,
                            className: d.RadioItem,
                            children: (0, p.jsx)(c, {
                                className: d.RadioIndicator
                            })
                        })
                    }), a]
                })
            })
        }, g.Item = _
    })),
    y = e((() => {
        v()
    }));
export {
    g as n, v as r, y as t
};
//# sourceMappingURL=28030648-gytfemuecjgm9ohm.js.map