import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    eat as n,
    j7 as r,
    nat as i
} from "./4813494d-ed29bs6yiwucn7st.js";
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
                return (await r.safeGet(`/subscriptions/credits/discount-offer`, {})).offer
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
    i(), t(), a(), c = 6e4
}));
export {
    l as n, s as t
};
//# sourceMappingURL=9cc78d41-ilupxt1v59ttlaw5.js.map