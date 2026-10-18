import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as t,
    My as n,
    b5 as r,
    cn as i,
    hn as a,
    jy as o,
    y5 as s
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as c,
    Vn as l
} from "./2340486e-oc6d2eodbcrmxur3.js";
var u, d, f, p, m = e((() => {
    n(), r(), t(), l(), u = c(), d = ({
        items: e,
        activeTab: t,
        onTabChange: n,
        className: r,
        tabClassName: i
    }) => (0, u.jsx)(`div`, {
        className: `border-token-border-light flex justify-between border-b`,
        children: (0, u.jsx)(`div`, {
            className: s(`flex gap-2 pt-2`, r),
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
        children: r,
        ...i
    }) => {
        let a = (0, u.jsx)(`button`, {
            className: s(`text-l block px-2 py-2.5 font-normal`, e ? `text-token-text-primary border-token-text-secondary -mb-[1px] cursor-pointer border-b` : `text-token-text-tertiary`, n),
            ...i,
            children: r
        });
        return t ? (0, u.jsx)(o, {
            label: t,
            side: `top`,
            children: a
        }) : a
    }
}));
export {
    m as i, f as n, d as r, p as t
};
//# sourceMappingURL=32d3feda-hbhklz8kr5m3bmo8.js.map