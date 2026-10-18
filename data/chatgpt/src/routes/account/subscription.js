import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    fz as t,
    uz as n
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as r,
    St as i,
    xt as a
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    n as o,
    t as s
} from "./d06c718e-dm44nle8elvz6ag9.js";
var c, l = e((() => {
    r(), s(), t(), c = async ({
        request: e
    }) => {
        let t = await o(e);
        if (t == null) return null;
        throw t.isWorkspaceAccount() ? i(`/admin/billing`) : t.isPersonalAccount() ? i(t.isOnConsumerPlan() ? `/#settings/Billing` : `/#settings/Account`) : a(`/`)
    }, c.hydrate = !0
}));
e((() => {
    l()
}))();
export {
    n as HydrateFallback, n as
    default, c as clientLoader
};
//# sourceMappingURL=account.subscription-ipkiy5cl.js.map