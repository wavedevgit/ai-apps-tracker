import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    Bnt as n,
    CK as r,
    F7 as i,
    Git as a,
    Hnt as o,
    I1 as s,
    IE as c,
    Knt as l,
    LE as u,
    M7 as d,
    RE as f,
    Uit as p,
    f8 as m,
    j7 as h,
    oat as g,
    p8 as _,
    rat as v,
    sat as y,
    wK as b
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    H as x,
    s as S,
    w as C
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    JPn as w,
    dwn as T,
    iTn as E,
    lwn as D,
    qPn as O,
    rTn as k
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Qv as A,
    bb as j,
    hb as M,
    ty as N
} from "./c2675c8c-fpv9s4kvd412dyap.js";

function P() {
    if (typeof window > `u`) return !1;
    let e = new URL(g, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function F() {
    return n(H, {
        disableExposureLog: !0
    })
}

function I() {
    return n(H)
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
    signal: n
}) {
    return await T({
        operation: `connector_roles`,
        transport: `sheep`,
        workspaceId: t,
        signal: n,
        request: async i => {
            z(`sheep`, t, n), U ??= new d({
                baseUrl: g.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let a = await U.safePost(`/rbac/workspace/{workspace_id}/connectors/roles`, {
                ...i,
                authOption: v.Required,
                signal: n,
                additionalHeaders: {
                    ...r(t),
                    [p]: k.ADMIN_SETTING,
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
            return z(`sheep`, t, n), a.roles_by_connector_id
        }
    })
}
var H, U, W, G, K = e((() => {
        D(), b(), S(), E(), m(), s(), y(), a(), i(), l(), H = `3774317842`, W = new WeakMap, G = _(L, e => {
            let t = o();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `adminPluginAppRoleReadTransport`
        })
    })),
    q, J, Y, X = e((() => {
        D(), w(), s(), i(), S(), M(), u(), K(), N(), q = new WeakMap, J = ({
            queryClient: e,
            workspaceId: n,
            accountId: r,
            accountUserId: i,
            transport: a
        }) => {
            let o = q.get(e);
            o ?? (o = new Map, q.set(e, o));
            let s = JSON.stringify([n, r, i, a]),
                l = o.get(s);
            if (l != null) return l;
            let u = () => {
                    let e = t();
                    if (e?.getWorkspaceId() !== n || e.id !== r || e.normalizedAccountUserId !== i) throw new DOMException(`Connector role account changed`, `AbortError`)
                },
                d = new Map,
                p = c({
                    fetcher: async e => {
                        let t = e.flatMap(e => [...d.get(e) ?? []]);
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
                            u(), B(a, n, r.signal);
                            let t = await j({
                                operation: `connector_roles`,
                                signal: r.signal,
                                request: async () => a === `sheep` ? await V({
                                    connectorIds: e,
                                    workspaceId: n,
                                    signal: r.signal
                                }) : (await T({
                                    operation: `connector_roles`,
                                    transport: `sa_server`,
                                    workspaceId: n,
                                    signal: r.signal,
                                    request: t => h.safePost(`/rbac/workspace/{workspace_id}/connectors/roles`, {
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
                            return u(), z(a, n, r.signal), t
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
            return o.set(s, m), m
        }, Y = ({
            connectorId: e,
            workspaceId: n,
            batched: r = !1
        }) => {
            let i = e !== `` && n !== ``;
            return C({
                queryKey: O(n, e),
                enabled: i,
                staleTime: A,
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
                    return j({
                        operation: `connector_roles`,
                        signal: a,
                        request: async () => await T({
                            operation: `connector_roles`,
                            transport: `sa_server`,
                            workspaceId: n,
                            signal: a,
                            request: t => h.safeGet(`/rbac/workspace/{workspace_id}/connector/{connector_id}/roles`, {
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
//# sourceMappingURL=5afd4cd2-pa70m24axusvn0hx.js.map