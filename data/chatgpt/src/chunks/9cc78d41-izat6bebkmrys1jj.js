import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cat as t,
    J7 as n,
    Q7 as r,
    xat as i
} from "./4813494d-itnrgnth03y1sm9d.js";
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
                return (await n.safeGet(`/subscriptions/credits/discount-offer`, {})).offer
            } catch (t) {
                throw i.addError(`CreditDiscountCheckout: Failed to fetch credit discount offer`, {
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
    t(), r(), a(), c = 6e4
}));
export {
    l as n, s as t
};
//# sourceMappingURL=9cc78d41-izat6bebkmrys1jj.js.map