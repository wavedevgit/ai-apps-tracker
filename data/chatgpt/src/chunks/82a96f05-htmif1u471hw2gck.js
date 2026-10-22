import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Pst as t,
    c6 as n,
    d6 as r,
    f6 as i,
    xct as a
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    In as o,
    Rn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Arn as c,
    Drn as l,
    Frn as u,
    Orn as d,
    Prn as f,
    jrn as p
} from "./conversation-small-m7dgsxtvvivh3e6t.js";

function m({
    isAuthenticated: e,
    isNativeMobileView: n,
    planType: r,
    disabledReason: i,
    eligiblePlanTypes: a
}) {
    return !e || n || r !== t.FREE && r !== t.GO || i !== `plan_not_eligible` ? null : a?.includes(t.PLUS) ? `plus` : a?.includes(t.PRO) ? `pro` : null
}

function h({
    isAuthenticated: e,
    isNativeMobileView: t,
    planType: n,
    disabledReason: a,
    eligiblePlanTypes: o
}) {
    return !e || t || n == null || i(n) || a !== `plan_not_eligible` || !o?.length || !o.some(r) || !o.every(i) ? null : `enterprise`
}

function g(e) {
    return e === `enterprise` ? y : u() ? l(e === `pro` ? t.PRO : t.PLUS, `plugin-upgrade`) : e === `pro` ? v : _
}
var _, v, y, b, x, S, C = e((() => {
    a(), c(), f(), d(), n(), s(), _ = p.plus, v = p.pro, y = o({
        id: `chatgpt.plugins.directory.plan_upgrade.dialog.button.enterprise.label`,
        defaultMessage: `Upgrade to install`
    }), b = o({
        id: `chatgpt.plugins.directory.plan_upgrade.dialog.button.enterprise.contact_sales.label`,
        defaultMessage: `Contact sales`
    }), x = o({
        id: `chatgpt.plugins.directory.plan_upgrade.aria_label`,
        defaultMessage: `Upgrade to install {pluginName}`
    }), S = o({
        id: `chatgpt.plugins.directory.plan_upgrade.enterprise.aria_label`,
        defaultMessage: `Upgrade to install {pluginName}`
    })
}));
export {
    x as a, C as i, g as n, S as o, m as r, b as s, h as t
};
//# sourceMappingURL=82a96f05-htmif1u471hw2gck.js.map