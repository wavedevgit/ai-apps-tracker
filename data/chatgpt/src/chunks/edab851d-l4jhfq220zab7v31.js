import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J7 as t,
    Q7 as n
} from "./4813494d-t80q9ew944ej0mgk.js";
async function r({
    queryClient: e,
    workspaceId: n,
    userId: r,
    roleId: i,
    assigned: a
}) {
    let o = {
        role_id: i,
        principal_id: r,
        principal_type: `user`
    };
    if (!(a ? await t.safePost(`/rbac/workspace/{workspace_id}/role-assignments`, {
            parameters: {
                path: {
                    workspace_id: n
                },
                query: {
                    account_id: n
                }
            },
            requestBody: o
        }) : await t.safeDelete(`/rbac/workspace/{workspace_id}/role-assignments`, {
            parameters: {
                path: {
                    workspace_id: n
                },
                query: {
                    account_id: n,
                    ...o
                }
            }
        })).success) throw Error(`Role assignment was not saved`);
    await Promise.all([
        [n, i, `role-principals`],
        [n, r, `effective-roles`],
        [n, r, `user-roles`],
        [n, `role-summaries`]
    ].map(async t => {
        await e.cancelQueries({
            queryKey: t
        }), await e.invalidateQueries({
            queryKey: t,
            refetchType: `all`
        })
    }))
}
var i, a, o = e((() => {
    n(), i = (e, n) => ({
        queryKey: [e, n, `role-principals`],
        refetchOnMount: `always`,
        queryFn: ({
            signal: r
        }) => t.safeGet(`/rbac/workspace/{workspace_id}/roles/{role_id}/principals`, {
            parameters: {
                path: {
                    workspace_id: e,
                    role_id: n
                },
                query: {
                    account_id: e,
                    consistency: `strong`
                }
            },
            signal: r
        })
    }), a = (e, n) => ({
        queryKey: [e, n, `effective-roles`],
        refetchOnMount: `always`,
        queryFn: ({
            signal: r
        }) => t.safeGet(`/rbac/workspace/{workspace_id}/principals/{principal_id}/effective-permissions`, {
            parameters: {
                path: {
                    workspace_id: e,
                    principal_id: n
                },
                query: {
                    account_id: e
                }
            },
            signal: r
        })
    })
}));
export {
    r as i, i as n, o as r, a as t
};
//# sourceMappingURL=edab851d-l4jhfq220zab7v31.js.map