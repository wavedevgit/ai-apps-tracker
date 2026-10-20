import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as t,
    J5 as n,
    Xy as r,
    Yy as i,
    cn as a,
    hn as o,
    q5 as s
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Hn as c,
    Vn as l
} from "./2340486e-komxp8tzs51ny4jj.js";
var u, d, f, p, m = e((() => {
    r(), n(), t(), c(), u = l(), d = ({
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
        className: n,
        children: r,
        ...a
    }) => {
        let o = (0, u.jsx)(`button`, {
            className: s(`text-l block px-2 py-2.5 font-normal`, e ? `text-token-text-primary border-token-text-secondary -mb-[1px] cursor-pointer border-b` : `text-token-text-tertiary`, n),
            ...a,
            children: r
        });
        return t ? (0, u.jsx)(i, {
            label: t,
            side: `top`,
            children: o
        }) : o
    }
}));
export {
    m as i, f as n, d as r, p as t
};
//# sourceMappingURL=32d3feda-e8pknumpr7gn5ftr.js.map