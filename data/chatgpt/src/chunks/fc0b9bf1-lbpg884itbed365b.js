import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Lot as t,
    wst as n
} from "./4813494d-cb22y2w19zwyshmt.js";

function r(e) {
    return e === t.SELF_SERVE_BUSINESS_USAGE_BASED || e === t.ENTERPRISE_CBP_USAGE_BASED || e === t.ENTERPRISE_CBP_AUTOMATION
}

function i({
    workspaceBudgetReached: e = !1,
    isUsageBasedWorkspace: t,
    isOwner: n,
    hasCredits: r,
    isUnlimited: i,
    spendControlReached: a,
    overageLimitReached: o
}) {
    if (e) return `workspace_budget`;
    if (o === !0) return `overage_limit`;
    if (!t) return `rate_limit`;
    if (a === !0) return n ? `usage_based_owner_spend_cap` : `usage_based_member_spend_cap`;
    let s = r === !1 && i === !1;
    return n ? s ? `usage_based_owner_credits_expired` : `usage_based_owner_spend_cap` : s ? `usage_based_member_credits_expired` : `usage_based_member_spend_cap`
}
var a = e((() => {
    n()
}));
export {
    a as n, r, i as t
};
//# sourceMappingURL=fc0b9bf1-lbpg884itbed365b.js.map