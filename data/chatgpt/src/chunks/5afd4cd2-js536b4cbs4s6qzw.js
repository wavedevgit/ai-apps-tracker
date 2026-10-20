import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    CK as n,
    Git as r,
    Hnt as i,
    I1 as a,
    IE as o,
    Jnt as s,
    L7 as c,
    LE as l,
    N7 as u,
    P7 as d,
    RE as f,
    Wnt as p,
    aat as m,
    cat as h,
    h8 as g,
    lat as _,
    m8 as v,
    qit as y,
    wK as b
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    H as x,
    s as S,
    w as C
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    JPn as w,
    YPn as T,
    aTn as E,
    fwn as D,
    iTn as O,
    uwn as k
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Sb as A,
    _b as j,
    ey as M,
    ry as N
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";

function P() {
    if (typeof window > `u`) return !1;
    let e = new URL(h, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function F() {
    return i(H, {
        disableExposureLog: !0
    })
}

function I() {
    return i(H)
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

function z(e, n, r) {
    if (r?.throwIfAborted(), t()?.getWorkspaceId() !== n || e !== L()) throw new x({
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
    workspaceId: t,
    signal: i
}) {
    return await D({
        operation: `connector_roles`,
        transport: `sheep`,
        workspaceId: t,
        signal: i,
        request: async a => {
            z(`sheep`, t, i), U ??= new d({
                baseUrl: h.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let o = await U.safePost(`/rbac/workspace/{workspace_id}/connectors/roles`, {
                ...a,
                authOption: m.Required,
                signal: i,
                additionalHeaders: {
                    ...n(t),
                    [r]: O.ADMIN_SETTING,
                    "x-openai-use-sheep": `1`
                },
                parameters: {
                    path: {
                        workspace_id: t
                    },
                    query: {
                        consistency: `strong`
                    }
                },
                requestBody: {
                    connector_ids: e
                }
            });
            return z(`sheep`, t, i), o.roles_by_connector_id
        }
    })
}
var H, U, W, G, K = e((() => {
        k(), b(), S(), E(), v(), a(), _(), y(), c(), s(), H = `3774317842`, W = new WeakMap, G = g(L, e => {
            let t = p();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `adminPluginAppRoleReadTransport`
        })
    })),
    q, J, Y, X = e((() => {
        k(), T(), a(), c(), S(), j(), l(), K(), N(), q = new WeakMap, J = ({
            queryClient: e,
            workspaceId: n,
            accountId: r,
            accountUserId: i,
            transport: a
        }) => {
            let s = q.get(e);
            s ?? (s = new Map, q.set(e, s));
            let c = JSON.stringify([n, r, i, a]),
                l = s.get(c);
            if (l != null) return l;
            let d = () => {
                    let e = t();
                    if (e?.getWorkspaceId() !== n || e.id !== r || e.normalizedAccountUserId !== i) throw new DOMException(`Connector role account changed`, `AbortError`)
                },
                p = new Map,
                m = o({
                    fetcher: async e => {
                        let t = e.flatMap(e => [...p.get(e) ?? []]);
                        if (t.length === 0 || t.every(e => e.aborted)) throw new DOMException(`Connector role request canceled`, `AbortError`);
                        let r = new AbortController,
                            i = () => {
                                t.every(e => e.aborted) && r.abort()
                            };
                        for (let e of t) e.addEventListener(`abort`, i, {
                            once: !0
                        });
                        i();
                        try {
                            d(), B(a, n, r.signal);
                            let t = await A({
                                operation: `connector_roles`,
                                signal: r.signal,
                                request: async () => a === `sheep` ? await V({
                                    connectorIds: e,
                                    workspaceId: n,
                                    signal: r.signal
                                }) : (await D({
                                    operation: `connector_roles`,
                                    transport: `sa_server`,
                                    workspaceId: n,
                                    signal: r.signal,
                                    request: t => u.safePost(`/rbac/workspace/{workspace_id}/connectors/roles`, {
                                        ...t,
                                        signal: r.signal,
                                        parameters: {
                                            query: {
                                                account_id: n,
                                                consistency: `strong`
                                            },
                                            path: {
                                                workspace_id: n
                                            }
                                        },
                                        requestBody: {
                                            connector_ids: e
                                        }
                                    })
                                })).roles_by_connector_id
                            });
                            return d(), z(a, n, r.signal), t
                        } finally {
                            for (let e of t) e.removeEventListener(`abort`, i)
                        }
                    },
                    resolver: (e, t) => {
                        let n = e[t];
                        if (n == null) throw Error(`The requested connector roles were not returned.`);
                        return n
                    },
                    scheduler: f({
                        windowMs: 10,
                        maxBatchSize: 100
                    })
                }),
                h = {
                    fetch: async (e, t) => {
                        t.throwIfAborted();
                        let n = p.get(e);
                        n ?? (n = new Set, p.set(e, n)), n.add(t);
                        try {
                            return await m.fetch(e)
                        } finally {
                            n.delete(t), n.size === 0 && p.delete(e)
                        }
                    }
                };
            return s.set(c, h), h
        }, Y = ({
            connectorId: e,
            workspaceId: n,
            batched: r = !1
        }) => {
            let i = e !== `` && n !== ``;
            return C({
                queryKey: w(n, e),
                enabled: i,
                staleTime: M,
                queryFn: async ({
                    client: i,
                    signal: a
                }) => {
                    let o = t();
                    if (o?.getWorkspaceId() !== n) throw Error(`The current workspace cannot access these roles.`);
                    let s = L();
                    if (r || s === `sheep`) {
                        a.throwIfAborted();
                        let t = await J({
                            queryClient: i,
                            workspaceId: n,
                            accountId: o.id,
                            accountUserId: o.normalizedAccountUserId,
                            transport: s
                        }).fetch(e, a);
                        return a.throwIfAborted(), t
                    }
                    return A({
                        operation: `connector_roles`,
                        signal: a,
                        request: async () => await D({
                            operation: `connector_roles`,
                            transport: `sa_server`,
                            workspaceId: n,
                            signal: a,
                            request: t => u.safeGet(`/rbac/workspace/{workspace_id}/connector/{connector_id}/roles`, {
                                ...t,
                                signal: a,
                                parameters: {
                                    query: {
                                        account_id: n,
                                        consistency: `strong`
                                    },
                                    path: {
                                        workspace_id: n,
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
//# sourceMappingURL=5afd4cd2-js536b4cbs4s6qzw.js.map