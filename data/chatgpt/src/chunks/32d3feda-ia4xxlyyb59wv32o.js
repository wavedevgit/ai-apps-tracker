import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    J5 as r,
    Xy as i,
    Y5 as a,
    Zy as o,
    cn as s
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as c,
    Vn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Jzt as u,
    Yzt as d
} from "./conversation-small-cy5f8pl0g26s86so.js";
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
    let [o, c] = (0, x.useState)(() => n ?? e[0]?.key), {
        content: l,
        navigator: u
    } = p(t, {
        content: y,
        navigator: b
    }), d = (0, x.useCallback)(e => {
        c(e), i?.(e)
    }, [i]), f = n ?? o, m = e.find(e => e.key === f)?.isHidden, g = e.find(e => !e.isHidden)?.key ?? r ?? e[0].key;
    return (0, x.useEffect)(() => {
        m && d(g)
    }, [d, m, g]), (0, S.jsxs)(h.Provider, {
        value: {
            onChange: d,
            currentTab: f,
            tabs: e,
            withUnderline: a
        },
        children: [u, (0, S.jsx)(s.div, {
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
        a = e.onChange ?? t.onChange,
        o = e.currentTab ?? t.currentTab,
        c = d(n, e => +!e.isHidden),
        l = e.withUnderline ?? t.withUnderline,
        u = `border-token-text-primary z-10 translate-y-[1px] border-b`;
    return c ? (0, S.jsxs)(`div`, {
        className: r(`dark:border-b-token-border-heavy flex gap-4 text-sm font-medium`, e.className),
        children: [n.map(t => !t.isHidden && (0, S.jsxs)(i, {
            label: t.tooltip,
            open: t.tooltip ? void 0 : !1,
            children: [(0, S.jsx)(`button`, {
                onClick: () => !t.disabled && a(t.key),
                className: r(`p-2 pb-3`, e.buttonClassName, t.disabled ? `text-token-text-tertiary cursor-not-allowed opacity-60` : o === t.key ? `text-token-text-primary` : `text-token-text-tertiary hover:text-token-text-secondary`),
                "aria-label": t.ariaLabel,
                disabled: t.disabled,
                children: t.label
            }), o === t.key && l && !t.disabled && (e.skipTabUnderlineAnimation ? (0, S.jsx)(`div`, {
                className: u
            }) : (0, S.jsx)(s.div, {
                className: u,
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
    f(), o(), a(), u(), n(), x = t(l()), _(), S = c()
}));
export {
    C as i, b as n, v as r, y as t
};
//# sourceMappingURL=32d3feda-ia4xxlyyb59wv32o.js.map