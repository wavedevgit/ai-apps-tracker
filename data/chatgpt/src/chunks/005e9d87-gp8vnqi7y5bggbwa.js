import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C1 as t,
    Lot as n,
    u1 as r,
    wst as i,
    zot as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    wn as o
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $nn as s,
    Xnn as c,
    Znn as l
} from "./conversation-small-fym1zmu9zimymmm1.js";

function u() {
    "use forget";
    let e = (0, d.c)(15),
        r = t(),
        {
            country: i
        } = s(),
        o;
    e[0] !== i || e[1] !== r ? (o = {
        country: i,
        currentAccount: r,
        location: `usePromotionCheckoutDetails`,
        shouldUsePaidSubscriptionBillingCurrency: !0,
        pricingPlanIsTypeBusiness: !1
    }, e[0] = i, e[1] = r, e[2] = o) : o = e[2];
    let c = l(o),
        u = r?.data.subscriptionStatus.planType ?? n.FREE,
        f = r?.data.subscriptionStatus.billingPeriod,
        p = r?.data.subscriptionStatus.hasPaidSubscription ?? !1,
        m = r?.data.subscriptionStatus.subscriptionPlan ?? a.FREE,
        h = r?.data.subscriptionStatus.subscriptionExpiresAt ?? void 0,
        g = r?.data.subscriptionStatus.wasPaidCustomer ?? !1,
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
    d = o(), i(), c(), r()
}));
export {
    u as n, f as t
};
//# sourceMappingURL=005e9d87-gp8vnqi7y5bggbwa.js.map