import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Nmn as t,
    Rmn as n,
    jmn as r
} from "./conversation-small-nmt18uiom3b14vca.js";

function i(e) {
    return e != null && n(e)
}

function a(e, t = r()) {
    if (e == null || !i(e) || e.safety_check_status === `approved`) return null;
    let n = e.safety_scan?.risk_score;
    return typeof n != `number` || Number.isNaN(n) ? null : n >= t.minBlockedSafetyScore ? `blocked` : n >= t.minWarningSafetyScore ? `needsReview` : null
}
var o = e((() => {
    t()
}));
export {
    o as n, i as r, a as t
};
//# sourceMappingURL=8f504e8b-h2tw778yv9csz4m0.js.map