import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CK as t,
    F7 as n,
    IE as r,
    JE as i,
    Knt as a,
    L1 as o,
    LE as s,
    P7 as c,
    R7 as l,
    RE as u,
    Wnt as d,
    Xnt as f,
    Yit as p,
    dat as m,
    g8 as ee,
    h8 as te,
    j1 as h,
    qE as g,
    qit as ne,
    sat as re,
    uat as _,
    wK as ie
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    G as v,
    H as y,
    s as b,
    w as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    UPn as S,
    WPn as ae,
    bwn as oe,
    cwn as C,
    eTn as w,
    kwn as se,
    swn as T,
    tTn as E
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Av as D,
    By as ce,
    Dv as le,
    Hy as O,
    kv as k
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    a as ue,
    f as A,
    n as de,
    o as fe,
    p as j,
    s as M
} from "./b26e60ff-buooiibaqv0tlwsm.js";
import {
    a as N,
    r as P
} from "./c65bcee1-hnjb6mc0fuirdb4i.js";
import {
    r as F,
    t as I
} from "./35efed7b-pdzfbbj6w898u772.js";
import {
    n as L,
    o as R,
    r as z,
    s as B
} from "./eec17ee5-ew2u75ezprtt5fk1.js";

function V() {
    if (typeof window > `u`) return !1;
    let e = new URL(_, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function pe() {
    return d(W, {
        disableExposureLog: !0
    })
}

function me() {
    return d(W)
}

function H() {
    return V() && pe() ? `sheep` : `legacy`
}

function U(e, t, n) {
    if (n?.throwIfAborted(), h()?.getWorkspaceId() !== t || e !== H()) throw new y({
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
    workspaceId: r,
    signal: i
}) {
    return await C({
        operation: `connector_roles`,
        transport: `sheep`,
        workspaceId: r,
        signal: i,
        request: async a => {
            U(`sheep`, r, i), G ??= new n({
                baseUrl: _.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let o = await G.safePost(`/rbac/workspace/{workspace_id}/connectors/roles`, {
                ...a,
                authOption: re.Required,
                signal: i,
                additionalHeaders: {
                    ...t(r),
                    [ne]: w.ADMIN_SETTING,
                    "x-openai-use-sheep": `1`
                },
                parameters: {
                    path: {
                        workspace_id: r
                    },
                    query: {
                        consistency: `strong`
                    }
                },
                requestBody: {
                    connector_ids: e
                }
            });
            return U(`sheep`, r, i), o.roles_by_connector_id
        }
    })
}
var W, G, _e = e((() => {
        T(), ie(), b(), E(), te(), o(), m(), p(), l(), f(), W = `3774317842`, ee(H, e => {
            let t = a();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `adminPluginAppRoleReadTransport`
        })
    })),
    K, q, J, Y = e((() => {
        T(), ae(), o(), l(), b(), ce(), s(), _e(), D(), K = new WeakMap, q = ({
            queryClient: e,
            workspaceId: t,
            accountId: n,
            accountUserId: i,
            transport: a
        }) => {
            let o = K.get(e);
            o ?? (o = new Map, K.set(e, o));
            let s = JSON.stringify([t, n, i, a]),
                l = o.get(s);
            if (l != null) return l;
            let d = () => {
                    let e = h();
                    if (e?.getWorkspaceId() !== t || e.id !== n || e.normalizedAccountUserId !== i) throw new DOMException(`Connector role account changed`, `AbortError`)
                },
                f = new Map,
                p = r({
                    fetcher: async e => {
                        let n = e.flatMap(e => [...f.get(e) ?? []]);
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
                            d(), he(a, t, r.signal);
                            let n = await O({
                                operation: `connector_roles`,
                                signal: r.signal,
                                request: async () => a === `sheep` ? await ge({
                                    connectorIds: e,
                                    workspaceId: t,
                                    signal: r.signal
                                }) : (await C({
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
                            return d(), U(a, t, r.signal), n
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
            return o.set(s, m), m
        }, J = ({
            connectorId: e,
            workspaceId: t,
            batched: n = !1
        }) => {
            let r = e !== `` && t !== ``;
            return x({
                queryKey: S(t, e),
                enabled: r,
                staleTime: le,
                queryFn: async ({
                    client: r,
                    signal: i
                }) => {
                    let a = h();
                    if (a?.getWorkspaceId() !== t) throw Error(`The current workspace cannot access these roles.`);
                    let o = H();
                    if (n || o === `sheep`) {
                        i.throwIfAborted();
                        let n = await q({
                            queryClient: r,
                            workspaceId: t,
                            accountId: a.id,
                            accountUserId: a.normalizedAccountUserId,
                            transport: o
                        }).fetch(e, i);
                        return i.throwIfAborted(), n
                    }
                    return O({
                        operation: `connector_roles`,
                        signal: i,
                        request: async () => await C({
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
    })),
    X, Z, Q, $, ve = e((() => {
        i(), se(), ue(), j(), E(), b(), N(), F(), Y(), z(), B(), D(), X = ({
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
                    queryKey: k(`list`, t)
                }).flatMap(([t, i]) => {
                    if (i == null) return e.getQueryState(t)?.fetchStatus === `fetching` ? [t] : [];
                    let a = i.pages.flatMap(e => e.plugins).find(({
                        id: e
                    }) => e === n)?.workspace_settings;
                    return e.getQueryState(t)?.fetchStatus === `idle` && a?.enabled === r.enabled && a.installation_policy === r.installation_policy && JSON.stringify([...a.installed_by_default_role_ids ?? []].sort()) === JSON.stringify([...r.installed_by_default_role_ids ?? []].sort()) ? [] : [t]
                }) : [],
                u = [!1, !0].map(e => R(n, t, e)),
                d = s ? e.getQueriesData({
                    queryKey: k(`detail`, t)
                }).flatMap(([t, r]) => (r?.id === n || u.some(e => e.every((e, n) => t[n] === e))) && e.getQueryState(t)?.fetchStatus === `fetching` ? [t] : []) : [];
            for (let t of [...l, ...d]) e.cancelQueries({
                queryKey: t,
                exact: !0
            }).catch(() => void 0);
            let f = i ?? A(t, n);
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
            queryKey: k(`detail`, t)
        }).filter(([e, t]) => e.at(-1) === n || e.at(-3) === n && e.at(-2) === `detail-sheep` || t?.id === n || t != null && t.detail != null && `dependencies` in t.detail && t.detail.dependencies?.some(e => e.plugin_id === n)).map(([e]) => e), $ = async ({
            queryClient: e,
            workspaceId: t,
            pluginId: n,
            appIds: r = [],
            invalidate: i = t => e.invalidateQueries(t)
        }) => {
            if (t === `` || n === ``) return;
            let a = new Set(r),
                o = k(`apps-details`, t),
                s = oe([], {
                    workspace: !0,
                    accountId: t,
                    productSku: w.ADMIN_SETTING
                }).slice(1),
                c = e => {
                    if (e.length <= s.length) return !1;
                    let t = e.length - s.length;
                    return s.every((n, r) => e[t + r] === n)
                },
                l = e.getQueryCache().findAll({
                    queryKey: o
                }),
                u = e.getQueryCache().findAll({
                    queryKey: [`appsDetails`],
                    predicate: ({
                        queryKey: e
                    }) => c(e)
                }),
                d = new Set;
            [...l, ...u].forEach(({
                state: e
            }) => {
                for (let t of Z(e.data)) d.add(t.id), typeof t.template_id == `string` && d.add(t.template_id)
            });
            let f = new Set(a);
            for (let e of a) {
                let t = g(e);
                t != null && (!d.has(e) || !d.has(t)) && f.add(t)
            }
            let p = L(n, t).queryKey,
                m = Q(e, t, n).filter(e => v(e) !== v(p));
            await Promise.all([...[p, ...m].map(e => i({
                queryKey: e,
                exact: !0
            })), i({
                queryKey: k(`list`, t)
            }), i({
                queryKey: k(`template-eligibility`, t, n)
            }), i({
                queryKey: k(`role-policy`, t),
                refetchType: `active`
            }), i({
                queryKey: k(`app-role-policy`, t),
                refetchType: `active`
            }), fe({
                queryClient: {
                    invalidateQueries: i
                },
                workspaceId: t,
                invalidateCatalog: !1
            }), ...a.size === 0 ? [] : [i({
                queryKey: o
            }), i({
                queryKey: [`appsDetails`],
                predicate: ({
                    queryKey: e,
                    state: t
                }) => {
                    if (!c(e)) return !1;
                    let n = e.length - s.length;
                    return e.slice(1, n).some(e => {
                        if (typeof e != `string`) return !1;
                        if (a.has(e)) return !0;
                        let n = g(e);
                        return n == null || !a.has(n) ? !1 : !d.has(e) || !d.has(n) || Z(t.data).some(e => e.id === n || e.template_id === n)
                    })
                }
            })], ...[...f].map(e => i({
                queryKey: k(`app-configuration`, t, e)
            })), ...[...f].flatMap(e => [i({
                queryKey: I({
                    connectorId: e,
                    workspaceId: t
                })
            }), i({
                queryKey: P({
                    connectorId: e,
                    workspaceId: t
                })
            }), i({
                queryKey: J({
                    connectorId: e,
                    workspaceId: t
                }).queryKey
            })]), i({
                queryKey: de(t)
            }), i({
                queryKey: A(t, n)
            })])
        }
    }));
export {
    Y as a, J as i, $ as n, X as r, ve as t
};
//# sourceMappingURL=63f6a4cc-dy5lcr5r0vqhnmv5.js.map