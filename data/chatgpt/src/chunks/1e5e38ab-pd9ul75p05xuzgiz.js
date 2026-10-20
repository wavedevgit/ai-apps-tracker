import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    P7 as t,
    R7 as n
} from "./4813494d-dfpv67hlp00pbohr.js";

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
//# sourceMappingURL=1e5e38ab-pd9ul75p05xuzgiz.js.map