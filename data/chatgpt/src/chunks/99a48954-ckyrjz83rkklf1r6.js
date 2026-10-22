import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    V1 as n,
    Y7 as r,
    q1 as i
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    H as a,
    s as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    a as s,
    i as c,
    n as l,
    o as u
} from "./832dbd3a-hc12khdxyuev5zkr.js";
var d, f = e((() => {
    i(), t(), o(), s(), d = ({
        workspaceId: e,
        connectorId: t,
        queryKeyPrefix: i,
        includeAdminOnly: o,
        enabled: s,
        transport: d,
        actorId: f
    }) => {
        let p = d ?? u(),
            m = f ?? n()?.normalizedAccountUserId;
        return {
            queryKey: [i, e, t, ...p === `sheep` ? [`sheep`, m] : []],
            enabled: s,
            queryFn: async i => {
                if (p === `sheep`) {
                    let r = i.signal;
                    if (!m || n()?.normalizedAccountUserId !== m) throw new a({
                        revert: !0
                    });
                    l(`sheep`, e ?? ``, r);
                    let o = await c({
                        workspaceId: e ?? ``,
                        connectorId: t,
                        signal: r
                    });
                    if (n()?.normalizedAccountUserId !== m) throw new a({
                        revert: !0
                    });
                    return o
                }
                return r.safeGet(`/accounts/{account_id}/connectors/{connector_id}/workspace_permissions`, {
                    parameters: {
                        path: {
                            account_id: e ?? ``,
                            connector_id: t
                        },
                        ...o ? {
                            query: {
                                include_admin_only: !0
                            }
                        } : {}
                    }
                })
            }
        }
    }
}));
export {
    f as n, d as t
};
//# sourceMappingURL=99a48954-ckyrjz83rkklf1r6.js.map