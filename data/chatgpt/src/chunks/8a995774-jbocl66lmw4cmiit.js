import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c7 as t,
    l7 as n,
    prt as r,
    srt as i
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as a,
    Nn as o,
    Rn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Iv as c,
    Km as l,
    Lv as u,
    qm as d
} from "./30901919-ikyi1r55w2i02fom.js";

function f() {
    let e = i(`1406552515`),
        t = i(`3860515571`);
    return e ? (0, g.jsx)(m, {}) : t ? (0, g.jsx)(p, {}) : null
}

function p() {
    return (0, g.jsx)(h, {
        colors: `default`,
        icon: (0, g.jsx)(c, {
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
    text: n,
    colors: r
}) {
    return (0, g.jsxs)(`div`, {
        className: t(`mb-4 flex w-full items-center justify-center gap-1 rounded-xl border p-3.5`, r === `error` ? `bg-token-bg-status-error border-token-border-error text-token-text-error` : `bg-token-bg-tertiary border-token-border-default text-token-text-primary`),
        children: [e, (0, g.jsx)(`span`, {
            className: `text-sm font-medium`,
            children: n
        })]
    })
}
var g, _ = e((() => {
    u(), d(), r(), n(), s(), g = a()
}));
export {
    _ as n, f as t
};
//# sourceMappingURL=8a995774-jbocl66lmw4cmiit.js.map