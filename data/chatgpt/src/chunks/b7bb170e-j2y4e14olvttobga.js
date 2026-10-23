import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AE as t,
    K5 as n,
    Qy as r,
    Zy as i,
    kE as a,
    q5 as o
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as s,
    Nn as c,
    Rn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Gb as u,
    Il as d,
    Ll as f,
    Ry as p,
    Wb as m,
    zy as h
} from "./30901919-s8bko9nrkqwv6i4f.js";

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
        children: [n !== void 0 && (n ? (0, v.jsx)(d, {
            className: `icon-sm`
        }) : (0, v.jsx)(p, {
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
    isDisabled: r,
    className: i
}) {
    let a = `metadata` in e ? e.metadata?.domain : void 0;
    return (0, v.jsxs)(`div`, {
        className: n(`border-token-border-medium flex rounded-lg border text-sm hover:cursor-pointer`, r ? `bg-token-main-surface-secondary` : ``, i),
        onClick: t,
        children: [(0, v.jsx)(`div`, {
            className: `h-9 grow px-3 py-2`,
            children: a ?? (0, v.jsx)(`span`, {
                className: `text-red-500`,
                children: (0, v.jsx)(c, {
                    id: `TJYXrY`,
                    defaultMessage: `Invalid action`
                })
            })
        }), (0, v.jsx)(`div`, {
            className: `bg-token-border-medium w-px`
        }), (0, v.jsx)(`button`, {
            disabled: r,
            className: `flex h-9 w-9 items-center justify-center rounded-lg rounded-s-none`,
            children: (0, v.jsx)(u, {
                className: `icon-sm`
            })
        })]
    })
}
var v, y, b, x, S = e((() => {
    h(), f(), m(), r(), o(), l(), t(), v = s(), y = a.textarea`w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32`, b = a.div`mb-6`, x = a.input`w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm outline-hidden focus:ring-2 border focus:ring-blue-400 border-token-border-medium h-9 bg-token-main-surface-primary`
}));
export {
    _ as a, y as i, g as n, S as o, b as r, x as t
};
//# sourceMappingURL=b7bb170e-j2y4e14olvttobga.js.map