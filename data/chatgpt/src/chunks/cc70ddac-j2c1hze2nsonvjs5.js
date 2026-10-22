import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    LU as n,
    Y7 as r,
    zU as i
} from "./4813494d-i89nb6zlze66idsz.js";
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
        n(), t(), u(), s(), p(), m = ({
            workspaceId: e,
            currPage: t,
            groupFilter: n,
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
                queryKey: n === `` ? [e, `groups`, `page-${t}`] : [e, `groups`, `filtered`, n, `page-${t}`],
                queryFn: async () => {
                    let a = await r.safeGet(`/accounts/{account_id}/groups`, {
                        parameters: {
                            path: {
                                account_id: e
                            },
                            query: {
                                query: n,
                                offset: t * 20,
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
            currentGroups: t
        }) => {
            let n = a(),
                o = i(),
                s = d(),
                {
                    mutateAsync: l
                } = c({
                    mutationFn: ({
                        workspaceId: e,
                        name: t
                    }) => r.safePost(`/accounts/{account_id}/group`, {
                        parameters: {
                            path: {
                                account_id: e
                            }
                        },
                        requestBody: {
                            name: t
                        }
                    }),
                    onMutate: ({
                        workspaceId: e,
                        name: r
                    }) => {
                        n.cancelQueries({
                            queryKey: [e, `groups`]
                        });
                        let i = t;
                        return n.setQueryData([e, `groups`, `page-0`], e => (e ||= {
                            limit: 10,
                            offset: 0,
                            items: [],
                            total: 0
                        }, {
                            ...e,
                            items: [{
                                id: `new`,
                                name: r,
                                num_members: 0,
                                created_time: ``
                            }, ...e.items.slice(0, 9)]
                        })), {
                            previousGroups: i
                        }
                    },
                    onError: (t, r, i) => {
                        n.setQueryData([e, `groups`, `page-0`], i?.previousGroups), n.invalidateQueries({
                            queryKey: [e, `groups`]
                        }), t.message === `Group with this name already exists.` && o.warning(s.formatMessage({
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
                createGroup: l
            }
        }, g = ({
            workspaceId: e
        }) => {
            let t = a(),
                {
                    mutateAsync: n
                } = c({
                    mutationFn: async t => await r.safeDelete(`/accounts/{account_id}/group/{group_id}`, {
                        parameters: {
                            path: {
                                account_id: e,
                                group_id: t
                            }
                        }
                    }),
                    onMutate: () => {
                        t.invalidateQueries({
                            queryKey: [e, `groups`, `page-0`]
                        })
                    },
                    onSettled: () => {
                        t.invalidateQueries({
                            queryKey: [e, `groups`, `page-0`]
                        })
                    }
                });
            return {
                deleteGroup: n
            }
        }, _ = ({
            workspaceId: e
        }) => {
            let t = a(),
                n = i(),
                o = d(),
                {
                    mutateAsync: s
                } = c({
                    mutationFn: async ({
                        workspaceId: e,
                        groupID: t,
                        name: n
                    }) => await r.safePatch(`/accounts/{account_id}/group/{group_id}`, {
                        parameters: {
                            path: {
                                account_id: e,
                                group_id: t
                            }
                        },
                        requestBody: {
                            name: n
                        }
                    }),
                    onMutate: ({
                        workspaceId: e,
                        groupID: n,
                        name: r
                    }) => {
                        t.setQueryData([e, `groups`, n], e => ({
                            ...e,
                            name: r
                        }))
                    },
                    onError: e => {
                        e.message === `Group with this name already exists.` && n.warning(o.formatMessage({
                            id: `workspaceSettings.groups.duplicateName`,
                            defaultMessage: `Group with this name already exists`
                        }), {
                            duration: 2
                        })
                    },
                    onSettled: async () => {
                        await new Promise(e => setTimeout(e, 1e3)), t.invalidateQueries({
                            queryKey: [e, `groups`]
                        })
                    }
                });
            return {
                updateGroupName: s
            }
        }, v = ({
            workspaceId: e,
            groupId: t
        }) => o({
            queryKey: [e, `groups`, t],
            enabled: !!t,
            queryFn: async () => await r.safeGet(`/accounts/{account_id}/group/{group_id}`, {
                parameters: {
                    path: {
                        account_id: e,
                        group_id: t
                    }
                }
            })
        }), y = 10, b = ({
            workspaceId: e,
            groupId: t,
            search: n,
            currPage: i
        }) => o({
            queryKey: [e, `groups`, t, n, `members-page-${i}`],
            queryFn: () => r.safeGet(`/accounts/{account_id}/group/{group_id}/users`, {
                parameters: {
                    path: {
                        account_id: e,
                        group_id: t
                    },
                    query: {
                        query: n,
                        offset: i * y
                    }
                }
            }),
            placeholderData: l
        }), x = ({
            workspaceId: e,
            groupId: t,
            members: n,
            search: i,
            currPage: o
        }) => {
            let s = a();
            return c({
                onSuccess: () => f(s, e),
                mutationFn: async n => await r.safeDelete(`/accounts/{account_id}/group/{group_id}/users/{user_id}`, {
                    parameters: {
                        path: {
                            account_id: e,
                            group_id: t,
                            user_id: n
                        }
                    }
                }),
                onMutate: r => {
                    s.cancelQueries({
                        queryKey: [e, `groups`, t]
                    });
                    let a = n;
                    return s.setQueryData([e, `groups`, t, i, `members-page-${o}`], e => e ? {
                        ...e,
                        items: e.items.filter(e => e.id !== r),
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
                onError: (n, r, i) => {
                    s.setQueryData([e, `groups`, t, `members-page-${o}`], i?.previousData), s.invalidateQueries({
                        queryKey: [e, `groups`, t]
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
//# sourceMappingURL=cc70ddac-j2c1hze2nsonvjs5.js.map