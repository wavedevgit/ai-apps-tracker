import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    Y7 as n
} from "./4813494d-i89nb6zlze66idsz.js";

function r(e) {
    return e == null || !e.isOwnerOfAccount() || !e.isSelfServeBusiness() || !e.eligibleForReactivation ? null : e.hasPaidSubscription() ? `customer_portal` : `checkout`
}
async function i(e) {
    return (await n.safeGet(`/payments/customer_portal`, {
        parameters: {
            query: {
                account_id: e
            }
        }
    })).url
}
var a = e((() => {
    t()
}));
export {
    r as n, a as r, i as t
};
//# sourceMappingURL=1e5e38ab-n5f2uaq2uz5e6wh1.js.map