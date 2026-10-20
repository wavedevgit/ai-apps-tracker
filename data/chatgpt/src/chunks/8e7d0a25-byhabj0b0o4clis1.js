import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    P7 as t,
    R7 as n
} from "./4813494d-dfpv67hlp00pbohr.js";
var r, i, a, o, s = e((() => {
    n(), r = `country_code`, i = `step`, a = e => t.safePost(`/accounts/pending_team_workspace`, {
        requestBody: e
    }), o = ({
        checkoutSessionId: e,
        signal: n,
        waitMs: r = 0
    } = {}) => t.safeGet(`/accounts/business_workspace_provisioning`, {
        parameters: {
            query: {
                checkout_session_id: e,
                wait_ms: r
            }
        },
        signal: n
    })
}));
export {
    a,
    s as i,
    i as n,
    o as r,
    r as t
};
//# sourceMappingURL=8e7d0a25-byhabj0b0o4clis1.js.map