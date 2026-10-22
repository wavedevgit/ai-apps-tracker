import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J7 as t,
    Q7 as n,
    V1 as r,
    q1 as i
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    H as a,
    s as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    a as s,
    i as c,
    n as l,
    o as u
} from "./832dbd3a-hr2f7nt6qa1t7a5r.js";
var d, f = e((() => {
    i(), n(), o(), s(), d = ({
        workspaceId: e,
        connectorId: n,
        queryKeyPrefix: i,
        includeAdminOnly: o,
        enabled: s,
        transport: d,
        actorId: f
    }) => {
        let p = d ?? u(),
            m = f ?? r()?.normalizedAccountUserId;
        return {
            queryKey: [i, e, n, ...p === `sheep` ? [`sheep`, m] : []],
            enabled: s,
            queryFn: async i => {
                if (p === `sheep`) {
                    let t = i.signal;
                    if (!m || r()?.normalizedAccountUserId !== m) throw new a({
                        revert: !0
                    });
                    l(`sheep`, e ?? ``, t);
                    let o = await c({
                        workspaceId: e ?? ``,
                        connectorId: n,
                        signal: t
                    });
                    if (r()?.normalizedAccountUserId !== m) throw new a({
                        revert: !0
                    });
                    return o
                }
                return t.safeGet(`/accounts/{account_id}/connectors/{connector_id}/workspace_permissions`, {
                    parameters: {
                        path: {
                            account_id: e ?? ``,
                            connector_id: n
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
//# sourceMappingURL=99a48954-ehrq2ggbboscx5gi.js.map