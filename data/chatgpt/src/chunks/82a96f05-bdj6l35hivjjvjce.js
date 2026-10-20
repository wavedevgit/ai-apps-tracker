import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    G3 as t,
    J3 as n,
    Y3 as r,
    Zst as i,
    ust as a
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    In as o,
    Rn as s
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    _rn as c,
    brn as l,
    grn as u,
    mrn as d,
    prn as f,
    xrn as p
} from "./conversation-small-l6tnsr2xfn2d55kk.js";

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
    return !e || t || i == null || r(i) || a !== `plan_not_eligible` || !o?.length || !o.some(n) || !o.every(r) ? null : `enterprise`
}

function g(e) {
    return e === `enterprise` ? y : p() ? f(e === `pro` ? a.PRO : a.PLUS, `plugin-upgrade`) : e === `pro` ? v : _
}
var _, v, y, b, x, S, C = e((() => {
    i(), u(), l(), d(), t(), s(), _ = c.plus, v = c.pro, y = o({
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
//# sourceMappingURL=82a96f05-bdj6l35hivjjvjce.js.map