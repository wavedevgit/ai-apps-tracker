import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    TE as t,
    X5 as n,
    Y5 as r,
    wE as i
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Av as o,
    Dv as s,
    Ov as c,
    e5t as l,
    i5t as u,
    kv as d,
    n5t as f,
    o5t as p,
    r5t as m
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    c as h,
    o as g,
    s as _
} from "./31cec8d8-ejzahhq8v425zkie.js";
var v, y, b, x, S, C, w, T = e((() => {
    h(), p(), o(), n(), t(), v = a(), y = function(e) {
        return e.CODE = `code`, e.WRITING = `writing`, e
    }({}), b = ({
        children: e,
        toolbarType: t
    }) => (0, v.jsx)(s, {
        className: r(`bg-token-bg-primary m-0 flex h-9 w-fit min-w-0 shrink items-center overflow-hidden rounded-xl px-1 dark:bg-[#353535]`, g, t === `code` ? `py-0` : `py-1`),
        children: e
    }), x = ({
        icon: e,
        hideLabel: t,
        isActive: n,
        label: i,
        subLabel: a,
        iconClassName: o,
        labelClassName: s
    }) => (0, v.jsxs)(v.Fragment, {
        children: [e && (0, v.jsx)(e, {
            className: r(`icon-sm`, {
                "me-0.5": !t,
                "text-token-text-tertiary": !t && !n,
                "text-token-text-primary": t && !n,
                "text-token-interactive-label-accent-default hover:text-token-interactive-label-accent-hover": n
            }, o)
        }), !t && (0, v.jsx)(`span`, {
            className: r(`truncate text-sm`, {
                "text-token-text-primary": !n,
                "text-token-interactive-label-accent-default hover:text-token-interactive-label-accent-hover": n
            }, s),
            children: i
        }), a]
    }), S = i(d)`flex h-full items-center rounded-lg gap-1 px-2 hover:bg-black/5 dark:hover:bg-token-interactive-bg-secondary-hover disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent`, C = ({
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
        children: i,
        align: a = `end`
    }) => (0, v.jsxs)(m, {
        children: [(0, v.jsx)(u, {
            asChild: !0,
            children: (0, v.jsx)(S, {
                "aria-label": t ? n : void 0,
                children: (0, v.jsx)(x, {
                    icon: e,
                    hideLabel: t,
                    label: n
                })
            })
        }), (0, v.jsx)(f, {
            children: (0, v.jsx)(l, {
                align: a,
                className: r(_.toolbar, `popover`),
                sideOffset: 8,
                children: i
            })
        })]
    }), b.Separator = i(c)`mx-1 p-0 list-none h-3 w-[1px] bg-token-border-default`, b.Action = C, b.Button = d, b.Popover = w
}));
export {
    b as n, T as r, y as t
};
//# sourceMappingURL=781797c9-e1c92lymiq44q9qy.js.map