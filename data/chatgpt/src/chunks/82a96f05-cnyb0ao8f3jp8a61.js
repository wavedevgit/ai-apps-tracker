import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J3 as t,
    Q3 as n,
    Z3 as r,
    oct as i,
    yst as a
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
} from "./conversation-small-kzsalymynzuddxee.js";

function m({
    isAuthenticated: e,
    isNativeMobileView: t,
    planType: n,
    disabledReason: r,
    eligiblePlanTypes: i
}) {
    return !e || t || n !== a.FREE && n !== a.GO || r !== `plan_not_eligible` ? null : i?.includes(a.PLUS) ? `plus` : i?.includes(a.PRO) ? `pro` : null
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
    return e === `enterprise` ? y : c() ? d(e === `pro` ? a.PRO : a.PLUS, `plugin-upgrade`) : e === `pro` ? v : _
}
var _, v, y, b, x, S, C = e((() => {
    i(), f(), u(), p(), t(), s(), _ = l.plus, v = l.pro, y = o({
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
//# sourceMappingURL=82a96f05-cnyb0ao8f3jp8a61.js.map