import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J3 as t,
    Q3 as n,
    Z3 as r,
    hst as i,
    nct as a
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    In as o,
    Rn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ern as c,
    Srn as l,
    Trn as u,
    vrn as d,
    xrn as f,
    yrn as p
} from "./conversation-small-ikg0dwuw782klweb.js";

function m({
    isAuthenticated: e,
    isNativeMobileView: t,
    planType: n,
    disabledReason: r,
    eligiblePlanTypes: a
}) {
    return !e || t || n !== i.FREE && n !== i.GO || r !== `plan_not_eligible` ? null : a?.includes(i.PLUS) ? `plus` : a?.includes(i.PRO) ? `pro` : null
}

function h({
    isAuthenticated: e,
    isNativeMobileView: t,
    planType: i,
    disabledReason: a,
    eligiblePlanTypes: o
}) {
    return !e || t || i == null || n(i) || a !== `plan_not_eligible` || !o?.length || !o.some(r) || !o.every(n) ? null : `enterprise`
}

function g(e) {
    return e === `enterprise` ? y : c() ? d(e === `pro` ? i.PRO : i.PLUS, `plugin-upgrade`) : e === `pro` ? v : _
}
var _, v, y, b, x, S, C = e((() => {
    a(), f(), u(), p(), t(), s(), _ = l.plus, v = l.pro, y = o({
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
//# sourceMappingURL=82a96f05-owp457qxpmov5h45.js.map