import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b5 as t,
    pnt as n,
    y5 as r,
    ynt as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as a,
    Nn as o,
    Rn as s
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Bv as c,
    Km as l,
    qm as u,
    zv as d
} from "./30901919-e33mbl5u1y88w5wu.js";

function f() {
    let e = n(`1406552515`),
        t = n(`3860515571`);
    return e ? (0, g.jsx)(m, {}) : t ? (0, g.jsx)(p, {}) : null
}

function p() {
    return (0, g.jsx)(h, {
        colors: `default`,
        icon: (0, g.jsx)(d, {
            className: `icon`
        }),
        text: (0, g.jsx)(o, {
            id: `wham.home.slowWarning`,
            defaultMessage: `Codex is busy and tasks might take longer to complete`
        })
    })
}

function m() {
    return (0, g.jsx)(h, {
        colors: `error`,
        icon: (0, g.jsx)(l, {
            className: `icon`
        }),
        text: (0, g.jsx)(o, {
            id: `wham.home.rateLimited`,
            defaultMessage: `Codex is busy, please come back later`
        })
    })
}

function h({
    icon: e,
    text: t,
    colors: n
}) {
    return (0, g.jsxs)(`div`, {
        className: r(`mb-4 flex w-full items-center justify-center gap-1 rounded-xl border p-3.5`, n === `error` ? `bg-token-bg-status-error border-token-border-error text-token-text-error` : `bg-token-bg-tertiary border-token-border-default text-token-text-primary`),
        children: [e, (0, g.jsx)(`span`, {
            className: `text-sm font-medium`,
            children: t
        })]
    })
}
var g, _ = e((() => {
    c(), u(), i(), t(), s(), g = a()
}));
export {
    _ as n, f as t
};
//# sourceMappingURL=8a995774-g1ylzfa8kbxzh3er.js.map