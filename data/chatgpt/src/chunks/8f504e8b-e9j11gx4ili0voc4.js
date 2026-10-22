import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    dhn as t,
    ghn as n,
    lhn as r
} from "./conversation-small-dwpaie1hln28efxb.js";

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
//# sourceMappingURL=8f504e8b-e9j11gx4ili0voc4.js.map