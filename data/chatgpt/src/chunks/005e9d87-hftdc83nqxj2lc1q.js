import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $st as t,
    I1 as n,
    Y1 as r,
    fst as i,
    mst as a
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Tn as o
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    frn as s,
    lrn as c,
    urn as l
} from "./conversation-small-cawdu7il3ha6y70c.js";

function u() {
    "use forget";
    let e = (0, d.c)(15),
        t = r(),
        {
            country: n
        } = s(),
        o;
    e[0] !== n || e[1] !== t ? (o = {
        country: n,
        currentAccount: t,
        location: `usePromotionCheckoutDetails`,
        shouldUsePaidSubscriptionBillingCurrency: !0,
        pricingPlanIsTypeBusiness: !1
    }, e[0] = n, e[1] = t, e[2] = o) : o = e[2];
    let c = l(o),
        u = t?.data.subscriptionStatus.planType ?? i.FREE,
        f = t?.data.subscriptionStatus.billingPeriod,
        p = t?.data.subscriptionStatus.hasPaidSubscription ?? !1,
        m = t?.data.subscriptionStatus.subscriptionPlan ?? a.FREE,
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
    d = o(), t(), c(), n()
}));
export {
    u as n, f as t
};
//# sourceMappingURL=005e9d87-hftdc83nqxj2lc1q.js.map