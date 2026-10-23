import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    I7 as t,
    M7 as n,
    V1 as r,
    q1 as i
} from "./4813494d-mdvd4786a87166cc.js";
import {
    H as a,
    s as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    a as s,
    i as c,
    n as l,
    o as u
} from "./832dbd3a-hbk6u3oq5isiaqp3.js";
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
            m = f ?? r()?.normalizedAccountUserId;
        return {
            queryKey: [i, e, t, ...p === `sheep` ? [`sheep`, m] : []],
            enabled: s,
            queryFn: async i => {
                if (p === `sheep`) {
                    let n = i.signal;
                    if (!m || r()?.normalizedAccountUserId !== m) throw new a({
                        revert: !0
                    });
                    l(`sheep`, e ?? ``, n);
                    let o = await c({
                        workspaceId: e ?? ``,
                        connectorId: t,
                        signal: n
                    });
                    if (r()?.normalizedAccountUserId !== m) throw new a({
                        revert: !0
                    });
                    return o
                }
                return n.safeGet(`/accounts/{account_id}/connectors/{connector_id}/workspace_permissions`, {
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
//# sourceMappingURL=99a48954-i0bknqne6giw28e4.js.map