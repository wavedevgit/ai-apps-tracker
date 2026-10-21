import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    aat as n,
    sat as r,
    z7 as i
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    s as a,
    w as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function s({
    accountId: e
}) {
    return o({
        queryKey: [`credit-discount-offer`, e],
        queryFn: async () => {
            try {
                return (await t.safeGet(`/subscriptions/credits/discount-offer`, {})).offer
            } catch (t) {
                throw n.addError(`CreditDiscountCheckout: Failed to fetch credit discount offer`, {
                    accountId: e,
                    error: t
                }), t
            }
        },
        enabled: e != null,
        retry: !1,
        retryOnMount: !0,
        throwOnError: !1,
        staleTime: c,
        refetchOnMount: !0,
        refetchOnWindowFocus: !1
    })
}
var c, l = e((() => {
    r(), i(), a(), c = 6e4
}));
export {
    l as n, s as t
};
//# sourceMappingURL=9cc78d41-e2o421844k8uhv2o.js.map