import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Oct as t,
    Vst as n,
    c6 as r,
    d6 as i,
    f6 as a
} from "./4813494d-mdvd4786a87166cc.js";
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
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function m({
    isAuthenticated: e,
    isNativeMobileView: t,
    planType: r,
    disabledReason: i,
    eligiblePlanTypes: a
}) {
    return !e || t || r !== n.FREE && r !== n.GO || i !== `plan_not_eligible` ? null : a?.includes(n.PLUS) ? `plus` : a?.includes(n.PRO) ? `pro` : null
}

function h({
    isAuthenticated: e,
    isNativeMobileView: t,
    planType: n,
    disabledReason: r,
    eligiblePlanTypes: o
}) {
    return !e || t || n == null || a(n) || r !== `plan_not_eligible` || !o?.length || !o.some(i) || !o.every(a) ? null : `enterprise`
}

function g(e) {
    return e === `enterprise` ? y : u() ? l(e === `pro` ? n.PRO : n.PLUS, `plugin-upgrade`) : e === `pro` ? v : _
}
var _, v, y, b, x, S, C = e((() => {
    t(), c(), f(), d(), r(), s(), _ = p.plus, v = p.pro, y = o({
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
//# sourceMappingURL=82a96f05-o5icu6q7mccko4gh.js.map