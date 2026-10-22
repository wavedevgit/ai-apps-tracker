import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as t,
    Qy as n,
    Zy as r,
    cn as i,
    hn as a,
    l7 as o,
    u7 as s
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as c,
    Vn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var u, d, f, p, m = e((() => {
    n(), s(), t(), l(), u = c(), d = ({
        items: e,
        activeTab: t,
        onTabChange: n,
        className: r,
        tabClassName: i
    }) => (0, u.jsx)(`div`, {
        className: `border-token-border-light flex justify-between border-b`,
        children: (0, u.jsx)(`div`, {
            className: o(`flex gap-2 pt-2`, r),
            children: e.map(e => (0, u.jsx)(p, {
                isActive: t === e.key,
                onClick: () => n(e.key),
                disabled: e.disabled,
                tooltip: e.tooltip,
                className: i,
                children: e.label
            }, e.key))
        })
    }), f = ({
        items: e,
        activeTab: t
    }) => (0, u.jsx)(`main`, {
        children: (0, u.jsx)(a, {
            mode: `wait`,
            children: (0, u.jsx)(i.div, {
                initial: {
                    y: 10,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                exit: {
                    y: -10,
                    opacity: 0
                },
                transition: {
                    duration: .2
                },
                children: (0, u.jsx)(`div`, {
                    children: e.find(e => e.key === t)?.children
                })
            }, t)
        })
    }), p = ({
        isActive: e,
        tooltip: t,
        className: n,
        children: i,
        ...a
    }) => {
        let s = (0, u.jsx)(`button`, {
            className: o(`text-l block px-2 py-2.5 font-normal`, e ? `text-token-text-primary border-token-text-secondary -mb-[1px] cursor-pointer border-b` : `text-token-text-tertiary`, n),
            ...a,
            children: i
        });
        return t ? (0, u.jsx)(r, {
            label: t,
            side: `top`,
            children: s
        }) : s
    }
}));
export {
    m as i, f as n, d as r, p as t
};
//# sourceMappingURL=32d3feda-lajs6dqdldimfsef.js.map