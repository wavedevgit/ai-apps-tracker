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
    s as a,
    w as o
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Eb as s,
    Qv as c,
    jb as l,
    ty as u
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
var d, f = e((() => {
    i(), r(), a(), s(), u(), d = e => o({
        queryKey: [e, `roles`],
        enabled: e !== ``,
        staleTime: c,
        queryFn: ({
            signal: r
        }) => {
            if (n()?.getWorkspaceId() !== e) throw Error(`The current workspace cannot access these roles.`);
            return l({
                operation: `workspace_roles`,
                signal: r,
                request: async () => await t.safeGet(`/rbac/workspace/{workspace_id}/roles`, {
                    signal: r,
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
//# sourceMappingURL=824cfc3b-e7nolb7c0q20nhgq.js.map