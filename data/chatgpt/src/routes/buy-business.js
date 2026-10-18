import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C1 as t,
    S1 as n,
    o as r,
    s as i,
    u1 as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as o,
    Bn as s,
    Pt as c,
    Ut as l,
    Wt as u,
    wn as d
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $nn as f,
    Qnn as p,
    Xnn as m
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    H as h,
    W as g,
    ad as _,
    id as v
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
var y, b, x, S, C = e((() => {
    o(), y = d(), _(), g(), m(), a(), i(), b = s(), x = l(function() {
        "use forget";
        let e = (0, y.c)(11),
            r = t(),
            i = n(),
            a = c(),
            {
                country: o
            } = f(),
            s = r ?? null,
            l = r != null,
            u;
        e[0] !== o || e[1] !== s || e[2] !== l ? (u = {
            country: o,
            currentAccount: s,
            enabled: l,
            location: `BuyBusinessRoute`,
            pricingPlanIsTypeBusiness: !0,
            shouldUsePaidSubscriptionBillingCurrency: !1
        }, e[0] = o, e[1] = s, e[2] = l, e[3] = u) : u = e[3];
        let d = p(u);
        if (r == null && i.isError) throw i.error;
        if (d.status === `error`) throw Error(`Unable to load Business checkout billing details`);
        if (r == null || d.status !== `ready`) {
            let t;
            return e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, b.jsx)(v, {}), e[4] = t) : t = e[4], t
        }
        let m;
        e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
            ctaTab: `business`,
            highlightPlan: `team`
        }, e[5] = m) : m = e[5];
        let g;
        e[6] === a ? g = e[7] : (g = () => a(`/`, {
            replace: !0
        }), e[6] = a, e[7] = g);
        let _;
        return e[8] !== r || e[9] !== g ? (_ = (0, b.jsx)(h, {
            currentAccount: r,
            defaultTab: `business`,
            pricingModalTargetOverride: m,
            autoStartBusinessCheckout: !0,
            onClose: g
        }), e[8] = r, e[9] = g, e[10] = _) : _ = e[10], _
    }), S = u(r)
}));
e((() => {
    C()
}))();
export {
    S as ErrorBoundary, x as
    default
};
//# sourceMappingURL=buy-business-lvvudybj.js.map