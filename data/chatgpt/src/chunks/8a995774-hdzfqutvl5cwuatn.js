import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Hnt as t,
    J5 as n,
    Jnt as r,
    q5 as i
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Pn as a,
    Vn as o,
    zn as s
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Iv as c,
    Km as l,
    Lv as u,
    qm as d
} from "./30901919-jory365vq6ym5crx.js";

function f() {
    let e = t(`1406552515`),
        n = t(`3860515571`);
    return e ? (0, g.jsx)(m, {}) : n ? (0, g.jsx)(p, {}) : null
}

function p() {
    return (0, g.jsx)(h, {
        colors: `default`,
        icon: (0, g.jsx)(c, {
            className: `icon`
        }),
        text: (0, g.jsx)(a, {
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
        text: (0, g.jsx)(a, {
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
        className: i(`mb-4 flex w-full items-center justify-center gap-1 rounded-xl border p-3.5`, n === `error` ? `bg-token-bg-status-error border-token-border-error text-token-text-error` : `bg-token-bg-tertiary border-token-border-default text-token-text-primary`),
        children: [e, (0, g.jsx)(`span`, {
            className: `text-sm font-medium`,
            children: t
        })]
    })
}
var g, _ = e((() => {
    u(), d(), r(), n(), s(), g = o()
}));
export {
    _ as n, f as t
};
//# sourceMappingURL=8a995774-hdzfqutvl5cwuatn.js.map