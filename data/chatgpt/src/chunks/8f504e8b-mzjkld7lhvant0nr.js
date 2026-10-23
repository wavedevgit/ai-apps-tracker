import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    bhn as t,
    hhn as n,
    phn as r
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function i(e) {
    return e != null && t(e)
}

function a(e, t = r()) {
    if (e == null || !i(e) || e.safety_check_status === `approved`) return null;
    let n = e.safety_scan?.risk_score;
    return typeof n != `number` || Number.isNaN(n) ? null : n >= t.minBlockedSafetyScore ? `blocked` : n >= t.minWarningSafetyScore ? `needsReview` : null
}
var o = e((() => {
    n()
}));
export {
    o as n, i as r, a as t
};
//# sourceMappingURL=8f504e8b-mzjkld7lhvant0nr.js.map