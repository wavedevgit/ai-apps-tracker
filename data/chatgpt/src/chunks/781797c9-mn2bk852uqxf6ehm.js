import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    aE as t,
    b5 as n,
    oE as r,
    y5 as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as a
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    C0t as o,
    Dv as s,
    Ev as c,
    S0t as l,
    T0t as u,
    Tv as d,
    wv as f,
    x0t as p,
    y0t as m
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    c as h,
    o as g,
    s as _
} from "./31cec8d8-ejzahhq8v425zkie.js";
var v, y, b, x, S, C, w, T = e((() => {
    h(), u(), s(), n(), r(), v = a(), y = function(e) {
        return e.CODE = `code`, e.WRITING = `writing`, e
    }({}), b = ({
        children: e,
        toolbarType: t
    }) => (0, v.jsx)(f, {
        className: i(`bg-token-bg-primary m-0 flex h-9 w-fit min-w-0 shrink items-center overflow-hidden rounded-xl px-1 dark:bg-[#353535]`, g, t === `code` ? `py-0` : `py-1`),
        children: e
    }), x = ({
        icon: e,
        hideLabel: t,
        isActive: n,
        label: r,
        subLabel: a,
        iconClassName: o,
        labelClassName: s
    }) => (0, v.jsxs)(v.Fragment, {
        children: [e && (0, v.jsx)(e, {
            className: i(`icon-sm`, {
                "me-0.5": !t,
                "text-token-text-tertiary": !t && !n,
                "text-token-text-primary": t && !n,
                "text-token-interactive-label-accent-default hover:text-token-interactive-label-accent-hover": n
            }, o)
        }), !t && (0, v.jsx)(`span`, {
            className: i(`truncate text-sm`, {
                "text-token-text-primary": !n,
                "text-token-interactive-label-accent-default hover:text-token-interactive-label-accent-hover": n
            }, s),
            children: r
        }), a]
    }), S = t(c)`flex h-full items-center rounded-lg gap-1 px-2 hover:bg-black/5 dark:hover:bg-token-interactive-bg-secondary-hover disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent`, C = ({
        label: e,
        subLabel: t,
        icon: n,
        isDisabled: r = !1,
        isActive: i = !1,
        hideLabel: a = !1,
        onClick: o,
        onMouseDown: s,
        iconClassName: c,
        labelClassName: l
    }) => (0, v.jsx)(S, {
        onClick: o,
        "aria-label": a ? e : void 0,
        onMouseDown: s,
        disabled: r,
        "aria-pressed": i || void 0,
        "data-state": i ? `on` : void 0,
        children: (0, v.jsx)(x, {
            icon: n,
            hideLabel: a,
            label: e,
            subLabel: t,
            isActive: i,
            iconClassName: c,
            labelClassName: l
        })
    }), w = ({
        icon: e,
        hideLabel: t,
        label: n,
        children: r,
        align: a = `end`
    }) => (0, v.jsxs)(l, {
        children: [(0, v.jsx)(o, {
            asChild: !0,
            children: (0, v.jsx)(S, {
                "aria-label": t ? n : void 0,
                children: (0, v.jsx)(x, {
                    icon: e,
                    hideLabel: t,
                    label: n
                })
            })
        }), (0, v.jsx)(p, {
            children: (0, v.jsx)(m, {
                align: a,
                className: i(_.toolbar, `popover`),
                sideOffset: 8,
                children: r
            })
        })]
    }), b.Separator = t(d)`mx-1 p-0 list-none h-3 w-[1px] bg-token-border-default`, b.Action = C, b.Button = c, b.Popover = w
}));
export {
    b as n, T as r, y as t
};
//# sourceMappingURL=781797c9-mn2bk852uqxf6ehm.js.map