import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Kmn as t,
    Wmn as n,
    Zmn as r
} from "./conversation-small-ocicxxw6jegn4vux.js";

function i(e) {
    return e != null && r(e)
}

function a(e, t = n()) {
    if (e == null || !i(e) || e.safety_check_status === `approved`) return null;
    let r = e.safety_scan?.risk_score;
    return typeof r != `number` || Number.isNaN(r) ? null : r >= t.minBlockedSafetyScore ? `blocked` : r >= t.minWarningSafetyScore ? `needsReview` : null
}
var o = e((() => {
    t()
}));
export {
    o as n, i as r, a as t
};
//# sourceMappingURL=8f504e8b-m6eghp33i0zm1jh2.js.map