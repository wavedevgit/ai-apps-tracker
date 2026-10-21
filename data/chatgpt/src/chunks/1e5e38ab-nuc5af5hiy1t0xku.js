import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J7 as t,
    Q7 as n
} from "./4813494d-t80q9ew944ej0mgk.js";

function r(e) {
    return e == null || !e.isOwnerOfAccount() || !e.isSelfServeBusiness() || !e.eligibleForReactivation ? null : e.hasPaidSubscription() ? `customer_portal` : `checkout`
}
async function i(e) {
    return (await t.safeGet(`/payments/customer_portal`, {
        parameters: {
            query: {
                account_id: e
            }
        }
    })).url
}
var a = e((() => {
    n()
}));
export {
    r as n, a as r, i as t
};
//# sourceMappingURL=1e5e38ab-nuc5af5hiy1t0xku.js.map