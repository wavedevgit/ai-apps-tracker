import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Crt as t,
    K5 as n,
    _rt as r,
    q5 as i
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as a,
    Nn as o,
    Rn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Fv as c,
    Gm as l,
    Pv as u,
    Wm as d
} from "./30901919-s8bko9nrkqwv6i4f.js";

function f() {
    let e = r(`1406552515`),
        t = r(`3860515571`);
    return e ? (0, g.jsx)(m, {}) : t ? (0, g.jsx)(p, {}) : null
}

function p() {
    return (0, g.jsx)(h, {
        colors: `default`,
        icon: (0, g.jsx)(u, {
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
        icon: (0, g.jsx)(d, {
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
    colors: r
}) {
    return (0, g.jsxs)(`div`, {
        className: n(`mb-4 flex w-full items-center justify-center gap-1 rounded-xl border p-3.5`, r === `error` ? `bg-token-bg-status-error border-token-border-error text-token-text-error` : `bg-token-bg-tertiary border-token-border-default text-token-text-primary`),
        children: [e, (0, g.jsx)(`span`, {
            className: `text-sm font-medium`,
            children: t
        })]
    })
}
var g, _ = e((() => {
    c(), l(), t(), i(), s(), g = a()
}));
export {
    _ as n, f as t
};
//# sourceMappingURL=8a995774-cs00gdqpvgpe5tm1.js.map