import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J7 as t,
    LU as n,
    Q7 as r,
    zU as i
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    N as a,
    O as o,
    Rn as s,
    p as c,
    q as l,
    s as u,
    zn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
async function f(e, t) {
    let n = {
        predicate: ({
            queryKey: e
        }) => e[0] === t && (e[1] === `groups` || e[1] === `role-summaries` || e[2] === `user-groups` || e[2] === `user-roles` || e[2] === `effective-roles`)
    };
    await e.cancelQueries(n), e.removeQueries({
        ...n,
        type: `inactive`
    }), await e.invalidateQueries({
        ...n,
        refetchType: `active`
    })
}
var p = e((() => {})),
    m, h, g, _, v, y, b, x, S = e((() => {
        n(), r(), u(), s(), p(), m = ({
            workspaceId: e,
            currPage: n,
            groupFilter: r,
            includeScimGroups: i = !0
        }) => {
            let {
                data: a,
                isError: s,
                isFetching: c,
                isLoading: u,
                isPlaceholderData: d,
                refetch: f
            } = o({
                queryKey: r === `` ? [e, `groups`, `page-${n}`] : [e, `groups`, `filtered`, r, `page-${n}`],
                queryFn: async () => {
                    let a = await t.safeGet(`/accounts/{account_id}/groups`, {
                        parameters: {
                            path: {
                                account_id: e
                            },
                            query: {
                                query: r,
                                offset: n * 20,
                                orderby: `created_time desc`,
                                limit: 20,
                                include_scim_groups: i,
                                include_member_counts: !0,
                                include_total: !0
                            }
                        }
                    });
                    if (a.total == null) throw Error(`Group total missing when include_total=true`);
                    let o = a.items.map(e => {
                        if (e.num_members == null) throw Error(`Group member count missing when include_member_counts=true`);
                        return {
                            ...e,
                            num_members: e.num_members
                        }
                    });
                    return {
                        ...a,
                        items: o,
                        total: a.total
                    }
                },
                placeholderData: l
            });
            return {
                groups: a,
                isError: s,
                isFetching: c,
                isLoading: u,
                isPlaceholderData: d,
                refetch: f
            }
        }, h = ({
            workspaceId: e,
            currentGroups: n
        }) => {
            let r = a(),
                o = i(),
                s = d(),
                {
                    mutateAsync: l
                } = c({
                    mutationFn: ({
                        workspaceId: e,
                        name: n
                    }) => t.safePost(`/accounts/{account_id}/group`, {
                        parameters: {
                            path: {
                                account_id: e
                            }
                        },
                        requestBody: {
                            name: n
                        }
                    }),
                    onMutate: ({
                        workspaceId: e,
                        name: t
                    }) => {
                        r.cancelQueries({
                            queryKey: [e, `groups`]
                        });
                        let i = n;
                        return r.setQueryData([e, `groups`, `page-0`], e => (e ||= {
                            limit: 10,
                            offset: 0,
                            items: [],
                            total: 0
                        }, {
                            ...e,
                            items: [{
                                id: `new`,
                                name: t,
                                num_members: 0,
                                created_time: ``
                            }, ...e.items.slice(0, 9)]
                        })), {
                            previousGroups: i
                        }
                    },
                    onError: (t, n, i) => {
                        r.setQueryData([e, `groups`, `page-0`], i?.previousGroups), r.invalidateQueries({
                            queryKey: [e, `groups`]
                        }), t.message === `Group with this name already exists.` && o.warning(s.formatMessage({
                            id: `workspaceSettings.groups.duplicateName`,
                            defaultMessage: `Group with this name already exists`
                        }), {
                            duration: 2
                        })
                    },
                    onSettled: async () => {
                        await new Promise(e => setTimeout(e, 1e3)), r.invalidateQueries({
                            queryKey: [e, `groups`]
                        })
                    }
                });
            return {
                createGroup: l
            }
        }, g = ({
            workspaceId: e
        }) => {
            let n = a(),
                {
                    mutateAsync: r
                } = c({
                    mutationFn: async n => await t.safeDelete(`/accounts/{account_id}/group/{group_id}`, {
                        parameters: {
                            path: {
                                account_id: e,
                                group_id: n
                            }
                        }
                    }),
                    onMutate: () => {
                        n.invalidateQueries({
                            queryKey: [e, `groups`, `page-0`]
                        })
                    },
                    onSettled: () => {
                        n.invalidateQueries({
                            queryKey: [e, `groups`, `page-0`]
                        })
                    }
                });
            return {
                deleteGroup: r
            }
        }, _ = ({
            workspaceId: e
        }) => {
            let n = a(),
                r = i(),
                o = d(),
                {
                    mutateAsync: s
                } = c({
                    mutationFn: async ({
                        workspaceId: e,
                        groupID: n,
                        name: r
                    }) => await t.safePatch(`/accounts/{account_id}/group/{group_id}`, {
                        parameters: {
                            path: {
                                account_id: e,
                                group_id: n
                            }
                        },
                        requestBody: {
                            name: r
                        }
                    }),
                    onMutate: ({
                        workspaceId: e,
                        groupID: t,
                        name: r
                    }) => {
                        n.setQueryData([e, `groups`, t], e => ({
                            ...e,
                            name: r
                        }))
                    },
                    onError: e => {
                        e.message === `Group with this name already exists.` && r.warning(o.formatMessage({
                            id: `workspaceSettings.groups.duplicateName`,
                            defaultMessage: `Group with this name already exists`
                        }), {
                            duration: 2
                        })
                    },
                    onSettled: async () => {
                        await new Promise(e => setTimeout(e, 1e3)), n.invalidateQueries({
                            queryKey: [e, `groups`]
                        })
                    }
                });
            return {
                updateGroupName: s
            }
        }, v = ({
            workspaceId: e,
            groupId: n
        }) => o({
            queryKey: [e, `groups`, n],
            enabled: !!n,
            queryFn: async () => await t.safeGet(`/accounts/{account_id}/group/{group_id}`, {
                parameters: {
                    path: {
                        account_id: e,
                        group_id: n
                    }
                }
            })
        }), y = 10, b = ({
            workspaceId: e,
            groupId: n,
            search: r,
            currPage: i
        }) => o({
            queryKey: [e, `groups`, n, r, `members-page-${i}`],
            queryFn: () => t.safeGet(`/accounts/{account_id}/group/{group_id}/users`, {
                parameters: {
                    path: {
                        account_id: e,
                        group_id: n
                    },
                    query: {
                        query: r,
                        offset: i * y
                    }
                }
            }),
            placeholderData: l
        }), x = ({
            workspaceId: e,
            groupId: n,
            members: r,
            search: i,
            currPage: o
        }) => {
            let s = a();
            return c({
                onSuccess: () => f(s, e),
                mutationFn: async r => await t.safeDelete(`/accounts/{account_id}/group/{group_id}/users/{user_id}`, {
                    parameters: {
                        path: {
                            account_id: e,
                            group_id: n,
                            user_id: r
                        }
                    }
                }),
                onMutate: t => {
                    s.cancelQueries({
                        queryKey: [e, `groups`, n]
                    });
                    let a = r;
                    return s.setQueryData([e, `groups`, n, i, `members-page-${o}`], e => e ? {
                        ...e,
                        items: e.items.filter(e => e.id !== t),
                        total: e.total - 1
                    } : {
                        limit: 10,
                        offset: 0,
                        items: [],
                        total: 0
                    }), {
                        previousData: a
                    }
                },
                onError: (t, r, i) => {
                    s.setQueryData([e, `groups`, n, `members-page-${o}`], i?.previousData), s.invalidateQueries({
                        queryKey: [e, `groups`, n]
                    })
                },
                onSettled: async () => {
                    await new Promise(e => setTimeout(e, 1e3)), s.invalidateQueries({
                        queryKey: [e, `groups`]
                    })
                }
            })
        }
    }));
export {
    b as a, _ as c, v as i, p as l, h as n, m as o, g as r, x as s, S as t, f as u
};
//# sourceMappingURL=cc70ddac-dr6oakqjwvcnwvt1.js.map