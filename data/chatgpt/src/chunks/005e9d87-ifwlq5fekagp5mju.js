import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ist as t,
    Pst as n,
    o0 as r,
    q1 as i,
    xct as a
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Crn as s,
    Srn as c,
    Trn as l
} from "./conversation-small-fh0oqifngkf5rvl1.js";

function u() {
    "use forget";
    let e = (0, d.c)(15),
        i = r(),
        {
            country: a
        } = l(),
        o;
    e[0] !== a || e[1] !== i ? (o = {
        country: a,
        currentAccount: i,
        location: `usePromotionCheckoutDetails`,
        shouldUsePaidSubscriptionBillingCurrency: !0,
        pricingPlanIsTypeBusiness: !1
    }, e[0] = a, e[1] = i, e[2] = o) : o = e[2];
    let c = s(o),
        u = i?.data.subscriptionStatus.planType ?? n.FREE,
        f = i?.data.subscriptionStatus.billingPeriod,
        p = i?.data.subscriptionStatus.hasPaidSubscription ?? !1,
        m = i?.data.subscriptionStatus.subscriptionPlan ?? t.FREE,
        h = i?.data.subscriptionStatus.subscriptionExpiresAt ?? void 0,
        g = i?.data.subscriptionStatus.wasPaidCustomer ?? !1,
        _;
    e[3] !== f || e[4] !== p || e[5] !== m || e[6] !== h || e[7] !== g ? (_ = {
        billingPeriod: f,
        hasPaidSubscription: p,
        subscriptionPlan: m,
        subscriptionExpiresAt: h,
        wasPaidCustomer: g
    }, e[3] = f, e[4] = p, e[5] = m, e[6] = h, e[7] = g, e[8] = _) : _ = e[8];
    let v;
    e[9] !== u || e[10] !== _ ? (v = {
        currentPlanType: u,
        subscriptionStatus: _
    }, e[9] = u, e[10] = _, e[11] = v) : v = e[11];
    let y = v;
    if (!c) return null;
    let b;
    return e[12] !== y || e[13] !== c ? (b = {
        billingDetails: c,
        plusAnalyticsParams: y
    }, e[12] = y, e[13] = c, e[14] = b) : b = e[14], b
}
var d, f = e((() => {
    d = o(), a(), c(), i()
}));
export {
    u as n, f as t
};
//# sourceMappingURL=005e9d87-ifwlq5fekagp5mju.js.map