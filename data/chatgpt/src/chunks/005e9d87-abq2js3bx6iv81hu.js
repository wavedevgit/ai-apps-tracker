import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Oct as t,
    Ust as n,
    Vst as r,
    o0 as i,
    q1 as a
} from "./4813494d-mdvd4786a87166cc.js";
import {
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Crn as s,
    Srn as c,
    Trn as l
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function u() {
    "use forget";
    let e = (0, d.c)(15),
        t = i(),
        {
            country: a
        } = l(),
        o;
    e[0] !== a || e[1] !== t ? (o = {
        country: a,
        currentAccount: t,
        location: `usePromotionCheckoutDetails`,
        shouldUsePaidSubscriptionBillingCurrency: !0,
        pricingPlanIsTypeBusiness: !1
    }, e[0] = a, e[1] = t, e[2] = o) : o = e[2];
    let c = s(o),
        u = t?.data.subscriptionStatus.planType ?? r.FREE,
        f = t?.data.subscriptionStatus.billingPeriod,
        p = t?.data.subscriptionStatus.hasPaidSubscription ?? !1,
        m = t?.data.subscriptionStatus.subscriptionPlan ?? n.FREE,
        h = t?.data.subscriptionStatus.subscriptionExpiresAt ?? void 0,
        g = t?.data.subscriptionStatus.wasPaidCustomer ?? !1,
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
    d = o(), t(), c(), a()
}));
export {
    u as n, f as t
};
//# sourceMappingURL=005e9d87-abq2js3bx6iv81hu.js.map