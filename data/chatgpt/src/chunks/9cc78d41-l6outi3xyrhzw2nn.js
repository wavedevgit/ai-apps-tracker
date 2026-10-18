import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dit as t,
    a7 as n,
    kit as r,
    l7 as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    s as a,
    w as o
} from "./2340486e-oc6d2eodbcrmxur3.js";

function s({
    accountId: e
}) {
    return o({
        queryKey: [`credit-discount-offer`, e],
        queryFn: async () => {
            try {
                return (await n.safeGet(`/subscriptions/credits/discount-offer`, {})).offer
            } catch (n) {
                throw t.addError(`CreditDiscountCheckout: Failed to fetch credit discount offer`, {
                    accountId: e,
                    error: n
                }), n
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
//# sourceMappingURL=9cc78d41-l6outi3xyrhzw2nn.js.map