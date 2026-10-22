import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    d6 as t,
    jst as n,
    s6 as r,
    u6 as i,
    vct as a
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    In as o,
    Rn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Srn as c,
    _rn as l,
    hrn as u,
    mrn as d,
    vrn as f,
    xrn as p
} from "./conversation-small-i79e9c315w50am5f.js";

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
    isNativeMobileView: n,
    planType: r,
    disabledReason: a,
    eligiblePlanTypes: o
}) {
    return !e || n || r == null || t(r) || a !== `plan_not_eligible` || !o?.length || !o.some(i) || !o.every(t) ? null : `enterprise`
}

function g(e) {
    return e === `enterprise` ? y : c() ? d(e === `pro` ? n.PRO : n.PLUS, `plugin-upgrade`) : e === `pro` ? v : _
}
var _, v, y, b, x, S, C = e((() => {
    a(), l(), p(), u(), r(), s(), _ = f.plus, v = f.pro, y = o({
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
//# sourceMappingURL=82a96f05-g5oa0chim9tg1h3z.js.map