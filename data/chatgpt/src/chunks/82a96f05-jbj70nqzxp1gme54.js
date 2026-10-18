import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C3 as t,
    Lot as n,
    S3 as r,
    wst as i,
    y3 as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    In as o,
    Rn as s
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    arn as c,
    crn as l,
    irn as u,
    lrn as d,
    nrn as f,
    trn as p
} from "./conversation-small-fym1zmu9zimymmm1.js";

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
    planType: i,
    disabledReason: a,
    eligiblePlanTypes: o
}) {
    return !e || n || i == null || t(i) || a !== `plan_not_eligible` || !o?.length || !o.some(r) || !o.every(t) ? null : `enterprise`
}

function g(e) {
    return e === `enterprise` ? y : d() ? p(e === `pro` ? n.PRO : n.PLUS, `plugin-upgrade`) : e === `pro` ? v : _
}
var _, v, y, b, x, S, C = e((() => {
    i(), u(), l(), f(), a(), s(), _ = c.plus, v = c.pro, y = o({
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
//# sourceMappingURL=82a96f05-jbj70nqzxp1gme54.js.map