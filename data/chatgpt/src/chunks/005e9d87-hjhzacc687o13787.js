import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    R1 as t,
    Z1 as n,
    oct as r,
    xst as i,
    yst as a
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    grn as s,
    mrn as c,
    prn as l
} from "./conversation-small-nmt18uiom3b14vca.js";

function u() {
    "use forget";
    let e = (0, d.c)(15),
        t = n(),
        {
            country: r
        } = s(),
        o;
    e[0] !== r || e[1] !== t ? (o = {
        country: r,
        currentAccount: t,
        location: `usePromotionCheckoutDetails`,
        shouldUsePaidSubscriptionBillingCurrency: !0,
        pricingPlanIsTypeBusiness: !1
    }, e[0] = r, e[1] = t, e[2] = o) : o = e[2];
    let l = c(o),
        u = t?.data.subscriptionStatus.planType ?? a.FREE,
        f = t?.data.subscriptionStatus.billingPeriod,
        p = t?.data.subscriptionStatus.hasPaidSubscription ?? !1,
        m = t?.data.subscriptionStatus.subscriptionPlan ?? i.FREE,
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
    if (!l) return null;
    let b;
    return e[12] !== y || e[13] !== l ? (b = {
        billingDetails: l,
        plusAnalyticsParams: y
    }, e[12] = y, e[13] = l, e[14] = b) : b = e[14], b
}
var d, f = e((() => {
    d = o(), r(), l(), t()
}));
export {
    u as n, f as t
};
//# sourceMappingURL=005e9d87-hjhzacc687o13787.js.map