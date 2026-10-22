import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CE as t,
    G5 as n,
    K5 as r,
    Xy as i,
    Yy as a,
    wE as o
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as s,
    Nn as c,
    Rn as l
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    By as u,
    Kb as d,
    Rl as f,
    Vy as p,
    qb as m,
    zl as h
} from "./30901919-om7b3qf5hp4j9x4l.js";

function g({
    label: e,
    description: t,
    collapsed: n,
    onClick: r,
    htmlFor: i
}) {
    let o = (0, v.jsx)(`label`, {
        htmlFor: i,
        className: `text-token-text-primary block font-semibold`,
        children: e
    });
    return (0, v.jsxs)(`div`, {
        className: `mb-1.5 flex items-center`,
        onClick: r,
        children: [n !== void 0 && (n ? (0, v.jsx)(f, {
            className: `icon-sm`
        }) : (0, v.jsx)(u, {
            className: `icon-sm`
        })), t ? (0, v.jsx)(a, {
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
            children: (0, v.jsx)(m, {
                className: `icon-sm`
            })
        })]
    })
}
var v, y, b, x, S = e((() => {
    p(), h(), d(), i(), r(), l(), o(), v = s(), y = t.textarea`w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32`, b = t.div`mb-6`, x = t.input`w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm outline-hidden focus:ring-2 border focus:ring-blue-400 border-token-border-medium h-9 bg-token-main-surface-primary`
}));
export {
    _ as a, y as i, g as n, S as o, b as r, x as t
};
//# sourceMappingURL=b7bb170e-md5u8kes41clu65x.js.map