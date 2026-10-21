import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J7 as t,
    Q7 as n
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    O as r,
    s as i,
    wn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var o, s, c, l, u = e((() => {
    o = a(), n(), i(), s = e => {
        "use forget";
        let n = (0, o.c)(10),
            {
                workspaceId: i,
                userId: a,
                enabled: s
            } = e,
            c = s === void 0 || s,
            l;
        n[0] !== a || n[1] !== i ? (l = [i, a, `user-roles`], n[0] = a, n[1] = i, n[2] = l) : l = n[2];
        let u = c && a !== ``,
            d;
        n[3] !== a || n[4] !== i ? (d = async () => (await t.safeGet(`/rbac/workspace/{workspace_id}/principals/{principal_id}/roles`, {
            parameters: {
                query: {
                    account_id: i,
                    consistency: `strong`
                },
                path: {
                    workspace_id: i,
                    principal_id: a
                }
            }
        })).roles, n[3] = a, n[4] = i, n[5] = d) : d = n[5];
        let f;
        return n[6] !== l || n[7] !== u || n[8] !== d ? (f = {
            queryKey: l,
            enabled: u,
            queryFn: d
        }, n[6] = l, n[7] = u, n[8] = d, n[9] = f) : f = n[9], r(f)
    }, c = e => {
        "use forget";
        let n = (0, o.c)(10),
            {
                enabled: i,
                workspaceId: a,
                userId: s
            } = e,
            c = i === void 0 || i,
            l;
        n[0] !== s || n[1] !== a ? (l = [a, s, `user-groups`], n[0] = s, n[1] = a, n[2] = l) : l = n[2];
        let u = c && s !== ``,
            d;
        n[3] !== s || n[4] !== a ? (d = async () => (await t.safeGet(`/accounts/{account_id}/users/{account_user_id}/groups`, {
            parameters: {
                path: {
                    account_id: a,
                    account_user_id: s
                }
            }
        })).items, n[3] = s, n[4] = a, n[5] = d) : d = n[5];
        let f;
        return n[6] !== l || n[7] !== u || n[8] !== d ? (f = {
            queryKey: l,
            enabled: u,
            queryFn: d
        }, n[6] = l, n[7] = u, n[8] = d, n[9] = f) : f = n[9], r(f)
    }, l = ({
        workspaceId: e,
        userId: n,
        enabled: i = !0
    }) => r({
        enabled: i,
        queryKey: [e, n, `user-credit-limit`],
        queryFn: async () => await t.safeGet(`/rbac/workspace/{workspace_id}/principals/{principal_id}/credit-limit`, {
            parameters: {
                query: {
                    account_id: e,
                    consistency: `strong`
                },
                path: {
                    workspace_id: e,
                    principal_id: n
                }
            }
        })
    })
}));
export {
    l as i, c as n, s as r, u as t
};
//# sourceMappingURL=7e792f2d-bm33pv849cyinf23.js.map