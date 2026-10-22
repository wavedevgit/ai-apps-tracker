import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    Qy as r,
    Zy as i,
    c7 as a,
    cn as o,
    l7 as s
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as c,
    Vn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Gzt as u,
    Wzt as d
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    n as f,
    t as p
} from "./540191af-bsnwm8m7nrxh45sh.js";
var m, h, g, _ = e((() => {
    m = t(l()), h = (0, m.createContext)(null), g = () => (0, m.useContext)(h)
}));

function v({
    tabs: e,
    children: t,
    currentTab: n,
    defaultTab: r,
    onChange: i,
    withUnderline: a = !1
}) {
    let [s, c] = (0, x.useState)(() => n ?? e[0]?.key), {
        content: l,
        navigator: u
    } = p(t, {
        content: y,
        navigator: b
    }), d = (0, x.useCallback)(e => {
        c(e), i?.(e)
    }, [i]), f = n ?? s, m = e.find(e => e.key === f)?.isHidden, g = e.find(e => !e.isHidden)?.key ?? r ?? e[0].key;
    return (0, x.useEffect)(() => {
        m && d(g)
    }, [d, m, g]), (0, S.jsxs)(h.Provider, {
        value: {
            onChange: d,
            currentTab: f,
            tabs: e,
            withUnderline: a
        },
        children: [u, (0, S.jsx)(o.div, {
            className: `h-0 w-full flex-1`,
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            children: l
        }, f)]
    })
}

function y({
    children: e
}) {
    let {
        currentTab: t,
        tabs: n
    } = g(), r = n.find(e => e.key === t)?.children;
    return (0, S.jsx)(S.Fragment, {
        children: e({
            content: r,
            key: t
        })
    })
}

function b(e) {
    let t = g(),
        n = e.tabs ?? t.tabs,
        r = e.onChange ?? t.onChange,
        s = e.currentTab ?? t.currentTab,
        c = u(n, e => +!e.isHidden),
        l = e.withUnderline ?? t.withUnderline,
        d = `border-token-text-primary z-10 translate-y-[1px] border-b`;
    return c ? (0, S.jsxs)(`div`, {
        className: a(`dark:border-b-token-border-heavy flex gap-4 text-sm font-medium`, e.className),
        children: [n.map(t => !t.isHidden && (0, S.jsxs)(i, {
            label: t.tooltip,
            open: t.tooltip ? void 0 : !1,
            children: [(0, S.jsx)(`button`, {
                onClick: () => !t.disabled && r(t.key),
                className: a(`p-2 pb-3`, e.buttonClassName, t.disabled ? `text-token-text-tertiary cursor-not-allowed opacity-60` : s === t.key ? `text-token-text-primary` : `text-token-text-tertiary hover:text-token-text-secondary`),
                "aria-label": t.ariaLabel,
                disabled: t.disabled,
                children: t.label
            }), s === t.key && l && !t.disabled && (e.skipTabUnderlineAnimation ? (0, S.jsx)(`div`, {
                className: d
            }) : (0, S.jsx)(o.div, {
                className: d,
                layoutId: `activeTab`,
                transition: {
                    type: `spring`,
                    duration: .3,
                    bounce: .1
                }
            }))]
        }, t.key)), e.children && (0, S.jsx)(`div`, {
            className: `ms-auto flex items-center`,
            children: e.children
        })]
    }) : null
}
var x, S, C = e((() => {
    f(), r(), s(), d(), n(), x = t(l()), _(), S = c()
}));
export {
    C as i, b as n, v as r, y as t
};
//# sourceMappingURL=32d3feda-cvs5geez7j0i2c94.js.map