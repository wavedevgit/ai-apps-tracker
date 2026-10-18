import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    a7 as t,
    i1 as n,
    l7 as r,
    u1 as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    H as a,
    s as o
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    a as s,
    i as c,
    n as l,
    o as u
} from "./832dbd3a-8ils21g1hok0as2u.js";
var d, f = e((() => {
    i(), r(), o(), s(), d = ({
        workspaceId: e,
        connectorId: r,
        queryKeyPrefix: i,
        includeAdminOnly: o,
        enabled: s,
        transport: d,
        actorId: f
    }) => {
        let p = d ?? u(),
            m = f ?? n()?.normalizedAccountUserId;
        return {
            queryKey: [i, e, r, ...p === `sheep` ? [`sheep`, m] : []],
            enabled: s,
            queryFn: async i => {
                if (p === `sheep`) {
                    let t = i.signal;
                    if (!m || n()?.normalizedAccountUserId !== m) throw new a({
                        revert: !0
                    });
                    l(`sheep`, e ?? ``, t);
                    let o = await c({
                        workspaceId: e ?? ``,
                        connectorId: r,
                        signal: t
                    });
                    if (n()?.normalizedAccountUserId !== m) throw new a({
                        revert: !0
                    });
                    return o
                }
                return t.safeGet(`/accounts/{account_id}/connectors/{connector_id}/workspace_permissions`, {
                    parameters: {
                        path: {
                            account_id: e ?? ``,
                            connector_id: r
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
//# sourceMappingURL=99a48954-kcp7qbxopdlqkg42.js.map