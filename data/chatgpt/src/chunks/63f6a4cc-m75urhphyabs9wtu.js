import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $E as t,
    Aat as n,
    Eat as r,
    HE as i,
    J7 as a,
    Q7 as o,
    SK as s,
    UE as c,
    V1 as l,
    WE as u,
    Y7 as d,
    eD as f,
    fat as p,
    hrt as m,
    kat as h,
    lrt as g,
    mat as ee,
    q1 as _,
    xK as te
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    G as v,
    H as y,
    s as b,
    w as ne
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FTn as x,
    Hwn as S,
    OFn as re,
    PTn as C,
    Vwn as w,
    eTn as T,
    kFn as ie,
    lTn as ae
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Ky as E,
    Nv as D,
    Pv as O,
    Wy as oe,
    jv as se
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    a as ce,
    f as k,
    n as le,
    o as ue,
    p as de,
    s as fe
} from "./b26e60ff-ik100bcoukpbcnag.js";
import {
    a as A,
    r as j
} from "./c65bcee1-mou9obit1ooiwgsq.js";
import {
    r as M,
    t as N
} from "./35efed7b-hon82vzwy5pzdozz.js";
import {
    m as P,
    n as F,
    p as I,
    r as L
} from "./eec17ee5-o8e9qvbq3i6ltg2q.js";

function R() {
    if (typeof window > `u`) return !1;
    let e = new URL(h, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function z() {
    return g(U, {
        disableExposureLog: !0
    })
}

function B() {
    return g(U)
}

function V() {
    return R() && z() ? `sheep` : `legacy`
}

function H(e, t, n) {
    if (n?.throwIfAborted(), l()?.getWorkspaceId() !== t || e !== V()) throw new y({
        revert: !0
    })
}

function pe(e, t, n) {
    if (H(e, t, n), R() && (B() ? `sheep` : `legacy`) !== e) throw new y({
        revert: !0
    })
}
async function me({
    connectorIds: e,
    workspaceId: t,
    signal: n
}) {
    return await S({
        operation: `connector_roles`,
        transport: `sheep`,
        workspaceId: t,
        signal: n,
        request: async i => {
            H(`sheep`, t, n), W ??= new d({
                baseUrl: h.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let a = await W.safePost(`/rbac/workspace/{workspace_id}/connectors/roles`, {
                ...i,
                authOption: r.Required,
                signal: n,
                additionalHeaders: {
                    ...te(t),
                    [p]: C.ADMIN_SETTING,
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
            return H(`sheep`, t, n), a.roles_by_connector_id
        }
    })
}
var U, W, G = e((() => {
        x(), _(), n(), ee(), o(), m(), s(), b(), w(), U = `3774317842`
    })),
    K, q, J, Y = e((() => {
        w(), ie(), _(), o(), b(), oe(), c(), G(), O(), K = new WeakMap, q = ({
            queryClient: e,
            workspaceId: t,
            accountId: n,
            accountUserId: r,
            transport: o
        }) => {
            let s = K.get(e);
            s ?? (s = new Map, K.set(e, s));
            let c = JSON.stringify([t, n, r, o]),
                d = s.get(c);
            if (d != null) return d;
            let f = () => {
                    let e = l();
                    if (e?.getWorkspaceId() !== t || e.id !== n || e.normalizedAccountUserId !== r) throw new DOMException(`Connector role account changed`, `AbortError`)
                },
                p = new Map,
                m = i({
                    fetcher: async e => {
                        let n = e.flatMap(e => [...p.get(e) ?? []]);
                        if (n.length === 0 || n.every(e => e.aborted)) throw new DOMException(`Connector role request canceled`, `AbortError`);
                        let r = new AbortController,
                            i = () => {
                                n.every(e => e.aborted) && r.abort()
                            };
                        for (let e of n) e.addEventListener(`abort`, i, {
                            once: !0
                        });
                        i();
                        try {
                            f(), pe(o, t, r.signal);
                            let n = await E({
                                operation: `connector_roles`,
                                signal: r.signal,
                                request: async () => o === `sheep` ? await me({
                                    connectorIds: e,
                                    workspaceId: t,
                                    signal: r.signal
                                }) : (await S({
                                    operation: `connector_roles`,
                                    transport: `sa_server`,
                                    workspaceId: t,
                                    signal: r.signal,
                                    request: n => a.safePost(`/rbac/workspace/{workspace_id}/connectors/roles`, {
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
                            return f(), H(o, t, r.signal), n
                        } finally {
                            for (let e of n) e.removeEventListener(`abort`, i)
                        }
                    },
                    resolver: (e, t) => {
                        let n = e[t];
                        if (n == null) throw Error(`The requested connector roles were not returned.`);
                        return n
                    },
                    scheduler: u({
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
        }, J = ({
            connectorId: e,
            workspaceId: t,
            batched: n = !1
        }) => {
            let r = e !== `` && t !== ``;
            return ne({
                queryKey: re(t, e),
                enabled: r,
                staleTime: se,
                queryFn: async ({
                    client: r,
                    signal: i
                }) => {
                    let o = l();
                    if (o?.getWorkspaceId() !== t) throw Error(`The current workspace cannot access these roles.`);
                    let s = V();
                    if (n || s === `sheep`) {
                        i.throwIfAborted();
                        let n = await q({
                            queryClient: r,
                            workspaceId: t,
                            accountId: o.id,
                            accountUserId: o.normalizedAccountUserId,
                            transport: s
                        }).fetch(e, i);
                        return i.throwIfAborted(), n
                    }
                    return E({
                        operation: `connector_roles`,
                        signal: i,
                        request: async () => await S({
                            operation: `connector_roles`,
                            transport: `sa_server`,
                            workspaceId: t,
                            signal: i,
                            request: n => a.safeGet(`/rbac/workspace/{workspace_id}/connector/{connector_id}/roles`, {
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
    })),
    X, Z, Q, $, he = e((() => {
        f(), ae(), ce(), de(), x(), b(), A(), M(), Y(), P(), L(), O(), X = ({
            queryClient: e,
            workspaceId: t,
            pluginId: n,
            settings: r,
            settingsQueryKey: i,
            detailReadTransport: a,
            includeDependencies: o = !1,
            reconcileLists: s = !1,
            invalidate: c = t => e.invalidateQueries(t)
        }) => {
            if (t === `` || n === ``) return;
            let l = s ? e.getQueriesData({
                    queryKey: D(`list`, t)
                }).flatMap(([t, i]) => {
                    if (i == null) return e.getQueryState(t)?.fetchStatus === `fetching` ? [t] : [];
                    let a = i.pages.flatMap(e => e.plugins).find(({
                        id: e
                    }) => e === n)?.workspace_settings;
                    return e.getQueryState(t)?.fetchStatus === `idle` && a?.enabled === r.enabled && a.installation_policy === r.installation_policy && JSON.stringify([...a.installed_by_default_role_ids ?? []].sort()) === JSON.stringify([...r.installed_by_default_role_ids ?? []].sort()) ? [] : [t]
                }) : [],
                u = [!1, !0].map(e => I(n, t, e)),
                d = s ? e.getQueriesData({
                    queryKey: D(`detail`, t)
                }).flatMap(([t, r]) => (r?.id === n || u.some(e => e.every((e, n) => t[n] === e))) && e.getQueryState(t)?.fetchStatus === `fetching` ? [t] : []) : [];
            for (let t of [...l, ...d]) e.cancelQueries({
                queryKey: t,
                exact: !0
            }).catch(() => void 0);
            let f = i ?? k(t, n);
            e.setQueryData(f, r), i ?? e.setQueriesData({
                queryKey: f
            }, r), e.setQueryData([t, `admin`, `plugins`, `detail`, n], e => e == null ? e : {
                ...e,
                workspace_settings: r
            }), fe({
                queryClient: {
                    invalidateQueries: e.invalidateQueries.bind(e),
                    setQueriesData: (t, n, r) => e.setQueriesData({
                        ...t,
                        predicate: e => (t.predicate?.(e) ?? !0) && (a == null || e.queryKey[0] !== `plugin-admin-v2` || e.queryKey[1] !== `detail` || e.queryKey[o ? 5 : 4] === `detail-sheep` == (a === `sheep`) && e.queryKey[3] === `dependencies` === o)
                    }, n, r)
                },
                workspaceId: t,
                pluginId: n,
                workspaceSettings: r,
                invalidateV2Lists: !1
            });
            for (let e of [...l, ...d]) c({
                queryKey: e,
                exact: !0
            }).catch(() => void 0)
        }, Z = e => e instanceof Map ? [...e.values()].filter(e => typeof e == `object` && !!e && `id` in e && typeof e.id == `string`) : [], Q = (e, t, n) => e.getQueriesData({
            queryKey: D(`detail`, t)
        }).filter(([e, t]) => e.at(-1) === n || e.at(-3) === n && e.at(-2) === `detail-sheep` || t?.id === n || t != null && t.detail != null && `dependencies` in t.detail && t.detail.dependencies?.some(e => e.plugin_id === n)).map(([e]) => e), $ = async ({
            queryClient: e,
            workspaceId: n,
            pluginId: r,
            appIds: i = [],
            invalidate: a = t => e.invalidateQueries(t)
        }) => {
            if (n === `` || r === ``) return;
            let o = new Set(i),
                s = D(`apps-details`, n),
                c = T([], {
                    workspace: !0,
                    accountId: n,
                    productSku: C.ADMIN_SETTING
                }).slice(1),
                l = e => {
                    if (e.length <= c.length) return !1;
                    let t = e.length - c.length;
                    return c.every((n, r) => e[t + r] === n)
                },
                u = e.getQueryCache().findAll({
                    queryKey: s
                }),
                d = e.getQueryCache().findAll({
                    queryKey: [`appsDetails`],
                    predicate: ({
                        queryKey: e
                    }) => l(e)
                }),
                f = new Set;
            [...u, ...d].forEach(({
                state: e
            }) => {
                for (let t of Z(e.data)) f.add(t.id), typeof t.template_id == `string` && f.add(t.template_id)
            });
            let p = new Set(o);
            for (let e of o) {
                let n = t(e);
                n != null && (!f.has(e) || !f.has(n)) && p.add(n)
            }
            let m = F(r, n).queryKey,
                h = Q(e, n, r).filter(e => v(e) !== v(m));
            await Promise.all([...[m, ...h].map(e => a({
                queryKey: e,
                exact: !0
            })), a({
                queryKey: D(`list`, n)
            }), a({
                queryKey: D(`template-eligibility`, n, r)
            }), a({
                queryKey: D(`role-policy`, n),
                refetchType: `active`
            }), a({
                queryKey: D(`app-role-policy`, n),
                refetchType: `active`
            }), ue({
                queryClient: {
                    invalidateQueries: a
                },
                workspaceId: n,
                invalidateCatalog: !1
            }), ...o.size === 0 ? [] : [a({
                queryKey: s
            }), a({
                queryKey: [`appsDetails`],
                predicate: ({
                    queryKey: e,
                    state: n
                }) => {
                    if (!l(e)) return !1;
                    let r = e.length - c.length;
                    return e.slice(1, r).some(e => {
                        if (typeof e != `string`) return !1;
                        if (o.has(e)) return !0;
                        let r = t(e);
                        return r == null || !o.has(r) ? !1 : !f.has(e) || !f.has(r) || Z(n.data).some(e => e.id === r || e.template_id === r)
                    })
                }
            })], ...[...p].map(e => a({
                queryKey: D(`app-configuration`, n, e)
            })), ...[...p].flatMap(e => [a({
                queryKey: N({
                    connectorId: e,
                    workspaceId: n
                })
            }), a({
                queryKey: j({
                    connectorId: e,
                    workspaceId: n
                })
            }), a({
                queryKey: J({
                    connectorId: e,
                    workspaceId: n
                }).queryKey
            })]), a({
                queryKey: le(n)
            }), a({
                queryKey: k(n, r)
            })])
        }
    }));
export {
    Y as a, J as i, $ as n, X as r, he as t
};
//# sourceMappingURL=63f6a4cc-m75urhphyabs9wtu.js.map