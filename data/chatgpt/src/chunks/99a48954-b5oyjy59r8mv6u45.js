import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    I1 as n,
    L7 as r,
    N7 as i
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    H as a,
    s as o
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    a as s,
    i as c,
    n as l,
    o as u
} from "./832dbd3a-klwywsa40rwcjix6.js";
var d, f = e((() => {
    n(), r(), o(), s(), d = ({
        workspaceId: e,
        connectorId: n,
        queryKeyPrefix: r,
        includeAdminOnly: o,
        enabled: s,
        transport: d,
        actorId: f
    }) => {
        let p = d ?? u(),
            m = f ?? t()?.normalizedAccountUserId;
        return {
            queryKey: [r, e, n, ...p === `sheep` ? [`sheep`, m] : []],
            enabled: s,
            queryFn: async r => {
                if (p === `sheep`) {
                    let i = r.signal;
                    if (!m || t()?.normalizedAccountUserId !== m) throw new a({
                        revert: !0
                    });
                    l(`sheep`, e ?? ``, i);
                    let o = await c({
                        workspaceId: e ?? ``,
                        connectorId: n,
                        signal: i
                    });
                    if (t()?.normalizedAccountUserId !== m) throw new a({
                        revert: !0
                    });
                    return o
                }
                return i.safeGet(`/accounts/{account_id}/connectors/{connector_id}/workspace_permissions`, {
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
//# sourceMappingURL=99a48954-b5oyjy59r8mv6u45.js.map