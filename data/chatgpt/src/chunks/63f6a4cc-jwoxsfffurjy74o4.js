import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    Gnt as n,
    I7 as r,
    JE as i,
    Jit as a,
    LE as o,
    M1 as s,
    R1 as c,
    RE as l,
    TK as u,
    Xit as d,
    YE as f,
    Znt as p,
    _8 as m,
    cat as h,
    dat as g,
    fat as ee,
    g8 as te,
    qnt as ne,
    wK as re,
    z7 as _,
    zE as ie
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    G as v,
    H as y,
    s as b,
    w as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Cwn as ae,
    KPn as oe,
    Mwn as se,
    dwn as S,
    iTn as C,
    qPn as ce,
    rTn as w,
    uwn as T
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Av as E,
    By as le,
    Dv as ue,
    Hy as D,
    kv as O
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    a as de,
    f as k,
    n as fe,
    o as A,
    p as j,
    s as M
} from "./b26e60ff-bklbh4ys3fab6xf0.js";
import {
    a as N,
    r as P
} from "./c65bcee1-nras6rtihfx0mzsk.js";
import {
    r as F,
    t as I
} from "./35efed7b-fgp6c753mk3w0poi.js";
import {
    n as L,
    o as R,
    r as z,
    s as B
} from "./eec17ee5-jld5k0qc8d0daoh5.js";

function V() {
    if (typeof window > `u`) return !1;
    let e = new URL(g, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function pe() {
    return n(W, {
        disableExposureLog: !0
    })
}

function me() {
    return n(W)
}

function H() {
    return V() && pe() ? `sheep` : `legacy`
}

function U(e, t, n) {
    if (n?.throwIfAborted(), s()?.getWorkspaceId() !== t || e !== H()) throw new y({
        revert: !0
    })
}

function he(e, t, n) {
    if (U(e, t, n), V() && (me() ? `sheep` : `legacy`) !== e) throw new y({
        revert: !0
    })
}
async function ge({
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
            U(`sheep`, t, n), G ??= new r({
                baseUrl: g.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let o = await G.safePost(`/rbac/workspace/{workspace_id}/connectors/roles`, {
                ...i,
                authOption: h.Required,
                signal: n,
                additionalHeaders: {
                    ...re(t),
                    [a]: w.ADMIN_SETTING,
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
            return U(`sheep`, t, n), o.roles_by_connector_id
        }
    })
}
var W, G, _e = e((() => {
        T(), u(), b(), C(), te(), c(), ee(), d(), _(), p(), W = `3774317842`, m(H, e => {
            let t = ne();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `adminPluginAppRoleReadTransport`
        })
    })),
    K, q, J, Y = e((() => {
        T(), ce(), c(), _(), b(), le(), l(), _e(), E(), K = new WeakMap, q = ({
            queryClient: e,
            workspaceId: n,
            accountId: r,
            accountUserId: i,
            transport: a
        }) => {
            let c = K.get(e);
            c ?? (c = new Map, K.set(e, c));
            let l = JSON.stringify([n, r, i, a]),
                u = c.get(l);
            if (u != null) return u;
            let d = () => {
                    let e = s();
                    if (e?.getWorkspaceId() !== n || e.id !== r || e.normalizedAccountUserId !== i) throw new DOMException(`Connector role account changed`, `AbortError`)
                },
                f = new Map,
                p = o({
                    fetcher: async e => {
                        let r = e.flatMap(e => [...f.get(e) ?? []]);
                        if (r.length === 0 || r.every(e => e.aborted)) throw new DOMException(`Connector role request canceled`, `AbortError`);
                        let i = new AbortController,
                            o = () => {
                                r.every(e => e.aborted) && i.abort()
                            };
                        for (let e of r) e.addEventListener(`abort`, o, {
                            once: !0
                        });
                        o();
                        try {
                            d(), he(a, n, i.signal);
                            let r = await D({
                                operation: `connector_roles`,
                                signal: i.signal,
                                request: async () => a === `sheep` ? await ge({
                                    connectorIds: e,
                                    workspaceId: n,
                                    signal: i.signal
                                }) : (await S({
                                    operation: `connector_roles`,
                                    transport: `sa_server`,
                                    workspaceId: n,
                                    signal: i.signal,
                                    request: r => t.safePost(`/rbac/workspace/{workspace_id}/connectors/roles`, {
                                        ...r,
                                        signal: i.signal,
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
                            return d(), U(a, n, i.signal), r
                        } finally {
                            for (let e of r) e.removeEventListener(`abort`, o)
                        }
                    },
                    resolver: (e, t) => {
                        let n = e[t];
                        if (n == null) throw Error(`The requested connector roles were not returned.`);
                        return n
                    },
                    scheduler: ie({
                        windowMs: 10,
                        maxBatchSize: 100
                    })
                }),
                m = {
                    fetch: async (e, t) => {
                        t.throwIfAborted();
                        let n = f.get(e);
                        n ?? (n = new Set, f.set(e, n)), n.add(t);
                        try {
                            return await p.fetch(e)
                        } finally {
                            n.delete(t), n.size === 0 && f.delete(e)
                        }
                    }
                };
            return c.set(l, m), m
        }, J = ({
            connectorId: e,
            workspaceId: n,
            batched: r = !1
        }) => {
            let i = e !== `` && n !== ``;
            return x({
                queryKey: oe(n, e),
                enabled: i,
                staleTime: ue,
                queryFn: async ({
                    client: i,
                    signal: a
                }) => {
                    let o = s();
                    if (o?.getWorkspaceId() !== n) throw Error(`The current workspace cannot access these roles.`);
                    let c = H();
                    if (r || c === `sheep`) {
                        a.throwIfAborted();
                        let t = await q({
                            queryClient: i,
                            workspaceId: n,
                            accountId: o.id,
                            accountUserId: o.normalizedAccountUserId,
                            transport: c
                        }).fetch(e, a);
                        return a.throwIfAborted(), t
                    }
                    return D({
                        operation: `connector_roles`,
                        signal: a,
                        request: async () => await S({
                            operation: `connector_roles`,
                            transport: `sa_server`,
                            workspaceId: n,
                            signal: a,
                            request: r => t.safeGet(`/rbac/workspace/{workspace_id}/connector/{connector_id}/roles`, {
                                ...r,
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
    })),
    X, Z, Q, $, ve = e((() => {
        f(), se(), de(), j(), C(), b(), N(), F(), Y(), z(), B(), E(), X = ({
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
                    queryKey: O(`list`, t)
                }).flatMap(([t, i]) => {
                    if (i == null) return e.getQueryState(t)?.fetchStatus === `fetching` ? [t] : [];
                    let a = i.pages.flatMap(e => e.plugins).find(({
                        id: e
                    }) => e === n)?.workspace_settings;
                    return e.getQueryState(t)?.fetchStatus === `idle` && a?.enabled === r.enabled && a.installation_policy === r.installation_policy && JSON.stringify([...a.installed_by_default_role_ids ?? []].sort()) === JSON.stringify([...r.installed_by_default_role_ids ?? []].sort()) ? [] : [t]
                }) : [],
                u = [!1, !0].map(e => R(n, t, e)),
                d = s ? e.getQueriesData({
                    queryKey: O(`detail`, t)
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
            }), M({
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
            queryKey: O(`detail`, t)
        }).filter(([e, t]) => e.at(-1) === n || e.at(-3) === n && e.at(-2) === `detail-sheep` || t?.id === n || t != null && t.detail != null && `dependencies` in t.detail && t.detail.dependencies?.some(e => e.plugin_id === n)).map(([e]) => e), $ = async ({
            queryClient: e,
            workspaceId: t,
            pluginId: n,
            appIds: r = [],
            invalidate: a = t => e.invalidateQueries(t)
        }) => {
            if (t === `` || n === ``) return;
            let o = new Set(r),
                s = O(`apps-details`, t),
                c = ae([], {
                    workspace: !0,
                    accountId: t,
                    productSku: w.ADMIN_SETTING
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
                let t = i(e);
                t != null && (!f.has(e) || !f.has(t)) && p.add(t)
            }
            let m = L(n, t).queryKey,
                h = Q(e, t, n).filter(e => v(e) !== v(m));
            await Promise.all([...[m, ...h].map(e => a({
                queryKey: e,
                exact: !0
            })), a({
                queryKey: O(`list`, t)
            }), a({
                queryKey: O(`template-eligibility`, t, n)
            }), a({
                queryKey: O(`role-policy`, t),
                refetchType: `active`
            }), a({
                queryKey: O(`app-role-policy`, t),
                refetchType: `active`
            }), A({
                queryClient: {
                    invalidateQueries: a
                },
                workspaceId: t,
                invalidateCatalog: !1
            }), ...o.size === 0 ? [] : [a({
                queryKey: s
            }), a({
                queryKey: [`appsDetails`],
                predicate: ({
                    queryKey: e,
                    state: t
                }) => {
                    if (!l(e)) return !1;
                    let n = e.length - c.length;
                    return e.slice(1, n).some(e => {
                        if (typeof e != `string`) return !1;
                        if (o.has(e)) return !0;
                        let n = i(e);
                        return n == null || !o.has(n) ? !1 : !f.has(e) || !f.has(n) || Z(t.data).some(e => e.id === n || e.template_id === n)
                    })
                }
            })], ...[...p].map(e => a({
                queryKey: O(`app-configuration`, t, e)
            })), ...[...p].flatMap(e => [a({
                queryKey: I({
                    connectorId: e,
                    workspaceId: t
                })
            }), a({
                queryKey: P({
                    connectorId: e,
                    workspaceId: t
                })
            }), a({
                queryKey: J({
                    connectorId: e,
                    workspaceId: t
                }).queryKey
            })]), a({
                queryKey: fe(t)
            }), a({
                queryKey: k(t, n)
            })])
        }
    }));
export {
    Y as a, J as i, $ as n, X as r, ve as t
};
//# sourceMappingURL=63f6a4cc-jwoxsfffurjy74o4.js.map