import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as t,
    Y5 as n
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as r,
    Vn as i
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    _y as a,
    gy as o
} from "./30901919-niqyapppecmq5jkn.js";
var s, c, l = e((() => {
    o(), t(), i(), s = r(), c = ({
        size: e = 48,
        className: t,
        backgroundStrokeClassName: r,
        spinnerColorClassName: i,
        onClick: o,
        disabled: c = !1,
        ariaLabel: l = `Stop`,
        percentage: u = 25
    }) => {
        let d = e,
            f = 1 / 20 * d,
            p = (d - f) / 2,
            m = 2 * Math.PI * p,
            h = m - u / 100 * m,
            g = e * .625;
        return (0, s.jsxs)(`button`, {
            type: `button`,
            "aria-label": l,
            onClick: o,
            disabled: c,
            className: n(`relative inline-flex items-center justify-center rounded-full`, `disabled:cursor-not-allowed disabled:opacity-50`, `composer-submit-button-color`, t),
            style: {
                width: e,
                height: e
            },
            children: [(0, s.jsxs)(`svg`, {
                width: d,
                height: d,
                viewBox: `0 0 ${d} ${d}`,
                className: n(`animate-spin`, i),
                children: [(0, s.jsx)(`circle`, {
                    className: n(`origin-[50%_50%] -rotate-90`, r),
                    strokeWidth: f,
                    fill: `transparent`,
                    r: p,
                    cx: d / 2,
                    cy: d / 2
                }), (0, s.jsx)(`circle`, {
                    className: `origin-[50%_50%] -rotate-90`,
                    stroke: `currentColor`,
                    strokeWidth: f,
                    strokeDashoffset: h,
                    strokeDasharray: `${m} ${m}`,
                    fill: `transparent`,
                    r: p,
                    cx: d / 2,
                    cy: d / 2,
                    style: {
                        strokeLinecap: `round`
                    }
                })]
            }), (0, s.jsx)(a, {
                className: n(`absolute flex items-center justify-center`, `rounded-[2px]`, `composer-submit-button-color`),
                style: {
                    width: g,
                    height: g
                }
            })]
        })
    }
}));
export {
    l as n, c as t
};
//# sourceMappingURL=2ac7f54f-ctgjbsytmd6h02we.js.map