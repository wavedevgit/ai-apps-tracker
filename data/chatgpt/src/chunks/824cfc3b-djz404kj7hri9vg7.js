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
    s as a,
    w as o
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Sb as s,
    _b as c,
    ey as l,
    ry as u
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
var d, f = e((() => {
    n(), r(), a(), c(), u(), d = e => o({
        queryKey: [e, `roles`],
        enabled: e !== ``,
        staleTime: l,
        queryFn: ({
            signal: n
        }) => {
            if (t()?.getWorkspaceId() !== e) throw Error(`The current workspace cannot access these roles.`);
            return s({
                operation: `workspace_roles`,
                signal: n,
                request: async () => await i.safeGet(`/rbac/workspace/{workspace_id}/roles`, {
                    signal: n,
                    parameters: {
                        query: {
                            account_id: e,
                            consistency: `strong`
                        },
                        path: {
                            workspace_id: e
                        }
                    }
                })
            })
        }
    })
}));
export {
    f as n, d as t
};
//# sourceMappingURL=824cfc3b-djz404kj7hri9vg7.js.map