import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as t,
    K5 as n,
    Qy as r,
    Zy as i,
    cn as a,
    hn as o,
    q5 as s
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as c,
    Vn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var u, d, f, p, m = e((() => {
    r(), s(), t(), l(), u = c(), d = ({
        items: e,
        activeTab: t,
        onTabChange: r,
        className: i,
        tabClassName: a
    }) => (0, u.jsx)(`div`, {
        className: `border-token-border-light flex justify-between border-b`,
        children: (0, u.jsx)(`div`, {
            className: n(`flex gap-2 pt-2`, i),
            children: e.map(e => (0, u.jsx)(p, {
                isActive: t === e.key,
                onClick: () => r(e.key),
                disabled: e.disabled,
                tooltip: e.tooltip,
                className: a,
                children: e.label
            }, e.key))
        })
    }), f = ({
        items: e,
        activeTab: t
    }) => (0, u.jsx)(`main`, {
        children: (0, u.jsx)(o, {
            mode: `wait`,
            children: (0, u.jsx)(a.div, {
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
        className: r,
        children: a,
        ...o
    }) => {
        let s = (0, u.jsx)(`button`, {
            className: n(`text-l block px-2 py-2.5 font-normal`, e ? `text-token-text-primary border-token-text-secondary -mb-[1px] cursor-pointer border-b` : `text-token-text-tertiary`, r),
            ...o,
            children: a
        });
        return t ? (0, u.jsx)(i, {
            label: t,
            side: `top`,
            children: s
        }) : s
    }
}));
export {
    m as i, f as n, d as r, p as t
};
//# sourceMappingURL=32d3feda-hhfdhqajoabb5vr8.js.map