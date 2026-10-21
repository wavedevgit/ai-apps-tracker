import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as n,
    Y5 as r
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as i,
    Vn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    asn as o,
    isn as s,
    osn as c
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    t as l
} from "./bcae0416-kg7dr2sbww6cg1yo.js";
import {
    n as u,
    t as d
} from "./b2878236-j3uoaxmemuivea97.js";
var f, p, m, h, g, _, v = e((() => {
        n(), l(), f = t(a()), u(), p = i(), m = (0, f.createContext)(null), h = () => {
            let e = (0, f.use)(m);
            if (!e) throw Error(`RadioGroup components must be wrapped in <RadioGroup />`);
            return e
        }, g = ({
            onChange: e,
            children: t,
            className: n,
            direction: i = `row`,
            disabled: a = !1,
            __isWidget: o,
            ...c
        }) => {
            let l = (0, f.useMemo)(() => ({
                disabled: a,
                direction: i
            }), [a, i]);
            return (0, p.jsx)(m, {
                value: l,
                children: (0, p.jsx)(s, {
                    className: r(d.RadioGroup, n),
                    "data-direction": i,
                    "data-w-component": o ? `radio-group` : void 0,
                    onValueChange: e,
                    disabled: a,
                    ...c,
                    children: t
                })
            })
        }, _ = ({
            value: e,
            disabled: t = !1,
            id: n,
            required: i,
            children: a,
            className: s,
            block: l = !1,
            ...u
        }) => {
            let {
                disabled: m
            } = h(), g = m || t, _ = (0, f.useId)(), v = n ?? `${e}-${_}`;
            return (0, p.jsx)(`div`, {
                className: `flex`,
                ...u,
                children: (0, p.jsxs)(`label`, {
                    htmlFor: v,
                    className: r(d.RadioLabel, s),
                    "data-disabled": g ? `` : void 0,
                    "data-block": l ? `` : void 0,
                    onMouseDown: e => {
                        !e.defaultPrevented && e.detail > 1 && e.preventDefault()
                    },
                    children: [(0, p.jsx)(`div`, {
                        className: d.RadioIndicatorWrapper,
                        children: (0, p.jsx)(c, {
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
//# sourceMappingURL=28030648-wpqxk90lnuqxks53.js.map