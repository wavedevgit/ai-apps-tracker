import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Nst as t,
    bct as n,
    d6 as r,
    s6 as i,
    u6 as a
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    In as o,
    Rn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ern as c,
    Mrn as l,
    Nrn as u,
    Orn as d,
    Trn as f,
    krn as p
} from "./conversation-small-m08q51xmfe7gjq3d.js";

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
    disabledReason: i,
    eligiblePlanTypes: o
}) {
    return !e || t || n == null || r(n) || i !== `plan_not_eligible` || !o?.length || !o.some(a) || !o.every(r) ? null : `enterprise`
}

function g(e) {
    return e === `enterprise` ? y : u() ? f(e === `pro` ? t.PRO : t.PLUS, `plugin-upgrade`) : e === `pro` ? v : _
}
var _, v, y, b, x, S, C = e((() => {
    n(), d(), l(), c(), i(), s(), _ = p.plus, v = p.pro, y = o({
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
//# sourceMappingURL=82a96f05-kp9i9h85gznfnbp2.js.map