import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    j7 as n
} from "./4813494d-ed29bs6yiwucn7st.js";
var r, i, a, o, s = e((() => {
    t(), r = `country_code`, i = `step`, a = e => n.safePost(`/accounts/pending_team_workspace`, {
        requestBody: e
    }), o = ({
        checkoutSessionId: e,
        signal: t,
        waitMs: r = 0
    } = {}) => n.safeGet(`/accounts/business_workspace_provisioning`, {
        parameters: {
            query: {
                checkout_session_id: e,
                wait_ms: r
            }
        },
        signal: t
    })
}));
export {
    a,
    s as i,
    i as n,
    o as r,
    r as t
};
//# sourceMappingURL=8e7d0a25-hcecej4x2034dknw.js.map