import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    My as t,
    aE as n,
    b5 as r,
    jy as i,
    oE as a,
    y5 as o
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as s,
    Nn as c,
    Rn as l
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Rl as u,
    Uy as d,
    Wy as f,
    Xb as p,
    Yb as m,
    zl as h
} from "./30901919-e33mbl5u1y88w5wu.js";

function g({
    label: e,
    description: t,
    collapsed: n,
    onClick: r,
    htmlFor: a
}) {
    let o = (0, v.jsx)(`label`, {
        htmlFor: a,
        className: `text-token-text-primary block font-semibold`,
        children: e
    });
    return (0, v.jsxs)(`div`, {
        className: `mb-1.5 flex items-center`,
        onClick: r,
        children: [n !== void 0 && (n ? (0, v.jsx)(u, {
            className: `icon-sm`
        }) : (0, v.jsx)(d, {
            className: `icon-sm`
        })), t ? (0, v.jsx)(i, {
            label: t,
            side: `top`,
            children: o
        }) : (0, v.jsx)(v.Fragment, {
            children: o
        })]
    })
}

function _({
    actionTool: e,
    onShowActionsEditor: t,
    isDisabled: n,
    className: r
}) {
    let i = `metadata` in e ? e.metadata?.domain : void 0;
    return (0, v.jsxs)(`div`, {
        className: o(`border-token-border-medium flex rounded-lg border text-sm hover:cursor-pointer`, n ? `bg-token-main-surface-secondary` : ``, r),
        onClick: t,
        children: [(0, v.jsx)(`div`, {
            className: `h-9 grow px-3 py-2`,
            children: i ?? (0, v.jsx)(`span`, {
                className: `text-red-500`,
                children: (0, v.jsx)(c, {
                    id: `TJYXrY`,
                    defaultMessage: `Invalid action`
                })
            })
        }), (0, v.jsx)(`div`, {
            className: `bg-token-border-medium w-px`
        }), (0, v.jsx)(`button`, {
            disabled: n,
            className: `flex h-9 w-9 items-center justify-center rounded-lg rounded-s-none`,
            children: (0, v.jsx)(p, {
                className: `icon-sm`
            })
        })]
    })
}
var v, y, b, x, S = e((() => {
    f(), h(), m(), t(), r(), l(), a(), v = s(), y = n.textarea`w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32`, b = n.div`mb-6`, x = n.input`w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm outline-hidden focus:ring-2 border focus:ring-blue-400 border-token-border-medium h-9 bg-token-main-surface-primary`
}));
export {
    _ as a, y as i, g as n, S as o, b as r, x as t
};
//# sourceMappingURL=b7bb170e-osrrnv0d3hlakzay.js.map