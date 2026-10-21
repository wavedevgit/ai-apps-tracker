import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X3 as t,
    Z3 as n,
    mst as r,
    q3 as i,
    tct as a
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    In as o,
    Rn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Crn as c,
    Srn as l,
    grn as u,
    hrn as d,
    vrn as f,
    yrn as p
} from "./conversation-small-cy5f8pl0g26s86so.js";

function m({
    isAuthenticated: e,
    isNativeMobileView: t,
    planType: n,
    disabledReason: i,
    eligiblePlanTypes: a
}) {
    return !e || t || n !== r.FREE && n !== r.GO || i !== `plan_not_eligible` ? null : a?.includes(r.PLUS) ? `plus` : a?.includes(r.PRO) ? `pro` : null
}

function h({
    isAuthenticated: e,
    isNativeMobileView: r,
    planType: i,
    disabledReason: a,
    eligiblePlanTypes: o
}) {
    return !e || r || i == null || n(i) || a !== `plan_not_eligible` || !o?.length || !o.some(t) || !o.every(n) ? null : `enterprise`
}

function g(e) {
    return e === `enterprise` ? y : c() ? d(e === `pro` ? r.PRO : r.PLUS, `plugin-upgrade`) : e === `pro` ? v : _
}
var _, v, y, b, x, S, C = e((() => {
    a(), f(), l(), u(), i(), s(), _ = p.plus, v = p.pro, y = o({
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
//# sourceMappingURL=82a96f05-nlhg22yhfjg59ljy.js.map