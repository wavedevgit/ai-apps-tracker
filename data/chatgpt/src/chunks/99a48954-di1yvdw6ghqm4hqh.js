import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    L1 as t,
    P7 as n,
    R7 as r,
    j1 as i
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    H as a,
    s as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    a as s,
    i as c,
    n as l,
    o as u
} from "./832dbd3a-kczb4igcdcx4itca.js";
var d, f = e((() => {
    t(), r(), o(), s(), d = ({
        workspaceId: e,
        connectorId: t,
        queryKeyPrefix: r,
        includeAdminOnly: o,
        enabled: s,
        transport: d,
        actorId: f
    }) => {
        let p = d ?? u(),
            m = f ?? i()?.normalizedAccountUserId;
        return {
            queryKey: [r, e, t, ...p === `sheep` ? [`sheep`, m] : []],
            enabled: s,
            queryFn: async r => {
                if (p === `sheep`) {
                    let n = r.signal;
                    if (!m || i()?.normalizedAccountUserId !== m) throw new a({
                        revert: !0
                    });
                    l(`sheep`, e ?? ``, n);
                    let o = await c({
                        workspaceId: e ?? ``,
                        connectorId: t,
                        signal: n
                    });
                    if (i()?.normalizedAccountUserId !== m) throw new a({
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
//# sourceMappingURL=99a48954-di1yvdw6ghqm4hqh.js.map