import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as t,
    B6 as n,
    Nit as r,
    Pit as i,
    QG as a,
    V6 as o,
    ZG as s,
    a7 as c,
    bE as l,
    git as u,
    hnt as d,
    i1 as f,
    l7 as p,
    o7 as m,
    pnt as h,
    u1 as g,
    vE as _,
    vit as v,
    yE as y,
    ynt as b
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    H as x,
    s as S,
    w as C
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Gwn as w,
    MPn as T,
    QCn as E,
    Wwn as D,
    XCn as O,
    jPn as k
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Eb as A,
    Qv as j,
    jb as M,
    ty as N
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";

function P() {
    if (typeof window > `u`) return !1;
    let e = new URL(r, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function F() {
    return h(H, {
        disableExposureLog: !0
    })
}

function I() {
    return h(H)
}

function L() {
    return P() && F() ? `sheep` : `legacy`
}
async function R({
    queryClient: e,
    transport: t,
    workspaceId: n
}) {
    if (n === ``) return;
    let r = W.get(e);
    r ?? (r = new Map, W.set(e, r));
    let i = r.get(n);
    if (i?.transport === t) return;
    let a = (i?.generation ?? 0) + 1;
    if (r.set(n, {
            transport: t,
            generation: a
        }), i == null) return;
    let o = [`roles`, n];
    await e.cancelQueries({
        queryKey: o
    }), r.get(n)?.generation === a && await e.invalidateQueries({
        queryKey: o,
        refetchType: `active`
    })
}

function z(e, t, n) {
    if (n?.throwIfAborted(), f()?.getWorkspaceId() !== t || e !== L()) throw new x({
        revert: !0
    })
}

function B(e, t, n) {
    if (z(e, t, n), P() && (I() ? `sheep` : `legacy`) !== e) throw new x({
        revert: !0
    })
}
async function V({
    connectorIds: e,
    workspaceId: n,
    signal: i
}) {
    return await E({
        operation: `connector_roles`,
        transport: `sheep`,
        workspaceId: n,
        signal: i,
        request: async a => {
            z(`sheep`, n, i), U ??= new m({
                baseUrl: r.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let o = await U.safePost(`/rbac/workspace/{workspace_id}/connectors/roles`, {
                ...a,
                authOption: t.Required,
                signal: i,
                additionalHeaders: {
                    ...s(n),
                    [u]: D.ADMIN_SETTING,
                    "x-openai-use-sheep": `1`
                },
                parameters: {
                    path: {
                        workspace_id: n
                    },
                    query: {
                        consistency: `strong`
                    }
                },
                requestBody: {
                    connector_ids: e
                }
            });
            return z(`sheep`, n, i), o.roles_by_connector_id
        }
    })
}
var H, U, W, G, K = e((() => {
        O(), a(), S(), w(), n(), g(), i(), v(), p(), b(), H = `3774317842`, W = new WeakMap, G = o(L, e => {
            let t = d();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `adminPluginAppRoleReadTransport`
        })
    })),
    q, J, Y, X = e((() => {
        O(), T(), g(), p(), S(), A(), y(), K(), N(), q = new WeakMap, J = ({
            queryClient: e,
            workspaceId: t,
            accountId: n,
            accountUserId: r,
            transport: i
        }) => {
            let a = q.get(e);
            a ?? (a = new Map, q.set(e, a));
            let o = JSON.stringify([t, n, r, i]),
                s = a.get(o);
            if (s != null) return s;
            let u = () => {
                    let e = f();
                    if (e?.getWorkspaceId() !== t || e.id !== n || e.normalizedAccountUserId !== r) throw new DOMException(`Connector role account changed`, `AbortError`)
                },
                d = new Map,
                p = _({
                    fetcher: async e => {
                        let n = e.flatMap(e => [...d.get(e) ?? []]);
                        if (n.length === 0 || n.every(e => e.aborted)) throw new DOMException(`Connector role request canceled`, `AbortError`);
                        let r = new AbortController,
                            a = () => {
                                n.every(e => e.aborted) && r.abort()
                            };
                        for (let e of n) e.addEventListener(`abort`, a, {
                            once: !0
                        });
                        a();
                        try {
                            u(), B(i, t, r.signal);
                            let n = await M({
                                operation: `connector_roles`,
                                signal: r.signal,
                                request: async () => i === `sheep` ? await V({
                                    connectorIds: e,
                                    workspaceId: t,
                                    signal: r.signal
                                }) : (await E({
                                    operation: `connector_roles`,
                                    transport: `sa_server`,
                                    workspaceId: t,
                                    signal: r.signal,
                                    request: n => c.safePost(`/rbac/workspace/{workspace_id}/connectors/roles`, {
                                        ...n,
                                        signal: r.signal,
                                        parameters: {
                                            query: {
                                                account_id: t,
                                                consistency: `strong`
                                            },
                                            path: {
                                                workspace_id: t
                                            }
                                        },
                                        requestBody: {
                                            connector_ids: e
                                        }
                                    })
                                })).roles_by_connector_id
                            });
                            return u(), z(i, t, r.signal), n
                        } finally {
                            for (let e of n) e.removeEventListener(`abort`, a)
                        }
                    },
                    resolver: (e, t) => {
                        let n = e[t];
                        if (n == null) throw Error(`The requested connector roles were not returned.`);
                        return n
                    },
                    scheduler: l({
                        windowMs: 10,
                        maxBatchSize: 100
                    })
                }),
                m = {
                    fetch: async (e, t) => {
                        t.throwIfAborted();
                        let n = d.get(e);
                        n ?? (n = new Set, d.set(e, n)), n.add(t);
                        try {
                            return await p.fetch(e)
                        } finally {
                            n.delete(t), n.size === 0 && d.delete(e)
                        }
                    }
                };
            return a.set(o, m), m
        }, Y = ({
            connectorId: e,
            workspaceId: t,
            batched: n = !1
        }) => {
            let r = e !== `` && t !== ``;
            return C({
                queryKey: k(t, e),
                enabled: r,
                staleTime: j,
                queryFn: async ({
                    client: r,
                    signal: i
                }) => {
                    let a = f();
                    if (a?.getWorkspaceId() !== t) throw Error(`The current workspace cannot access these roles.`);
                    let o = L();
                    if (n || o === `sheep`) {
                        i.throwIfAborted();
                        let n = await J({
                            queryClient: r,
                            workspaceId: t,
                            accountId: a.id,
                            accountUserId: a.normalizedAccountUserId,
                            transport: o
                        }).fetch(e, i);
                        return i.throwIfAborted(), n
                    }
                    return M({
                        operation: `connector_roles`,
                        signal: i,
                        request: async () => await E({
                            operation: `connector_roles`,
                            transport: `sa_server`,
                            workspaceId: t,
                            signal: i,
                            request: n => c.safeGet(`/rbac/workspace/{workspace_id}/connector/{connector_id}/roles`, {
                                ...n,
                                signal: i,
                                parameters: {
                                    query: {
                                        account_id: t,
                                        consistency: `strong`
                                    },
                                    path: {
                                        workspace_id: t,
                                        connector_id: e
                                    }
                                }
                            })
                        })
                    })
                }
            })
        }
    }));
export {
    R as a, K as i, X as n, G as r, Y as t
};
//# sourceMappingURL=5afd4cd2-ho4qltbdt92gbm9u.js.map