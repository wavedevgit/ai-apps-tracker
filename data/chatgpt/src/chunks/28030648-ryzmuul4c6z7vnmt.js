import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as n,
    Y5 as r
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as i,
    Vn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    nsn as o,
    rsn as s,
    tsn as c
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    t as l
} from "./bcae0416-ehgxvm7t7gkttx8l.js";
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
            __isWidget: o,
            ...s
        }) => {
            let l = (0, f.useMemo)(() => ({
                disabled: a,
                direction: i
            }), [a, i]);
            return (0, p.jsx)(m, {
                value: l,
                children: (0, p.jsx)(c, {
                    className: n(d.RadioGroup, r),
                    "data-direction": i,
                    "data-w-component": o ? `radio-group` : void 0,
                    onValueChange: e,
                    disabled: a,
                    ...s,
                    children: t
                })
            })
        }, _ = ({
            value: e,
            disabled: t = !1,
            id: r,
            required: i,
            children: a,
            className: c,
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
                    className: n(d.RadioLabel, c),
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
                            children: (0, p.jsx)(o, {
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
//# sourceMappingURL=28030648-ryzmuul4c6z7vnmt.js.map