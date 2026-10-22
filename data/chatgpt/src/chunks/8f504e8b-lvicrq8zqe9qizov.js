import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    fhn as t,
    mhn as n,
    yhn as r
} from "./conversation-small-m7dgsxtvvivh3e6t.js";

function i(e) {
    return e != null && r(e)
}

function a(e, n = t()) {
    if (e == null || !i(e) || e.safety_check_status === `approved`) return null;
    let r = e.safety_scan?.risk_score;
    return typeof r != `number` || Number.isNaN(r) ? null : r >= n.minBlockedSafetyScore ? `blocked` : r >= n.minWarningSafetyScore ? `needsReview` : null
}
var o = e((() => {
    n()
}));
export {
    o as n, i as r, a as t
};
//# sourceMappingURL=8f504e8b-lvicrq8zqe9qizov.js.map