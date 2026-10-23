import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $E as t,
    Crt as n,
    HE as r,
    I7 as i,
    Lat as a,
    M7 as o,
    N7 as s,
    Pat as c,
    Rat as l,
    SK as u,
    Sat as d,
    UE as f,
    V1 as p,
    WE as m,
    _rt as h,
    bat as ee,
    eD as te,
    q1 as g,
    xK as ne
} from "./4813494d-mdvd4786a87166cc.js";
import {
    G as _,
    H as v,
    s as y,
    w as re
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Gwn as b,
    HFn as ie,
    Kwn as x,
    RTn as S,
    VFn as C,
    iTn as ae,
    pTn as oe,
    zTn as w
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    $y as T,
    Bv as E,
    Rv as se,
    Vv as D,
    Zy as ce
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    a as le,
    f as O,
    n as ue,
    o as de,
    p as fe,
    s as k
} from "./b26e60ff-j7p1fjn8lhm9t402.js";
import {
    a as A,
    r as j
} from "./c65bcee1-ht1sgkwgn73o9enu.js";
import {
    r as M,
    t as N
} from "./35efed7b-ku6gj22e3tac7lsq.js";
import {
    m as P,
    n as F,
    p as I,
    r as L
} from "./eec17ee5-d6148prnk88r7jzf.js";

function R() {
    if (typeof window > `u`) return !1;
    let e = new URL(a, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function z() {
    return h(U, {
        disableExposureLog: !0
    })
}

function B() {
    return h(U)
}

function V() {
    return R() && z() ? `sheep` : `legacy`
}

function H(e, t, n) {
    if (n?.throwIfAborted(), p()?.getWorkspaceId() !== t || e !== V()) throw new v({
        revert: !0
    })
}

function pe(e, t, n) {
    if (H(e, t, n), R() && (B() ? `sheep` : `legacy`) !== e) throw new v({
        revert: !0
    })
}
async function me({
    connectorIds: e,
    workspaceId: t,
    signal: n
}) {
    return await x({
        operation: `connector_roles`,
        transport: `sheep`,
        workspaceId: t,
        signal: n,
        request: async r => {
            H(`sheep`, t, n), W ??= new s({
                baseUrl: a.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let i = await W.safePost(`/rbac/workspace/{workspace_id}/connectors/roles`, {
                ...r,
                authOption: c.Required,
                signal: n,
                additionalHeaders: {
                    ...ne(t),
                    [ee]: S.ADMIN_SETTING,
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
            return H(`sheep`, t, n), i.roles_by_connector_id
        }
    })
}
var U, W, G = e((() => {
        w(), g(), l(), d(), i(), n(), u(), y(), b(), U = `3774317842`
    })),
    K, q, J, Y = e((() => {
        b(), ie(), g(), i(), y(), ce(), f(), G(), D(), K = new WeakMap, q = ({
            queryClient: e,
            workspaceId: t,
            accountId: n,
            accountUserId: i,
            transport: a
        }) => {
            let s = K.get(e);
            s ?? (s = new Map, K.set(e, s));
            let c = JSON.stringify([t, n, i, a]),
                l = s.get(c);
            if (l != null) return l;
            let u = () => {
                    let e = p();
                    if (e?.getWorkspaceId() !== t || e.id !== n || e.normalizedAccountUserId !== i) throw new DOMException(`Connector role account changed`, `AbortError`)
                },
                d = new Map,
                f = r({
                    fetcher: async e => {
                        let n = e.flatMap(e => [...d.get(e) ?? []]);
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
                            u(), pe(a, t, r.signal);
                            let n = await T({
                                operation: `connector_roles`,
                                signal: r.signal,
                                request: async () => a === `sheep` ? await me({
                                    connectorIds: e,
                                    workspaceId: t,
                                    signal: r.signal
                                }) : (await x({
                                    operation: `connector_roles`,
                                    transport: `sa_server`,
                                    workspaceId: t,
                                    signal: r.signal,
                                    request: n => o.safePost(`/rbac/workspace/{workspace_id}/connectors/roles`, {
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
                            return u(), H(a, t, r.signal), n
                        } finally {
                            for (let e of n) e.removeEventListener(`abort`, i)
                        }
                    },
                    resolver: (e, t) => {
                        let n = e[t];
                        if (n == null) throw Error(`The requested connector roles were not returned.`);
                        return n
                    },
                    scheduler: m({
                        windowMs: 10,
                        maxBatchSize: 100
                    })
                }),
                h = {
                    fetch: async (e, t) => {
                        t.throwIfAborted();
                        let n = d.get(e);
                        n ?? (n = new Set, d.set(e, n)), n.add(t);
                        try {
                            return await f.fetch(e)
                        } finally {
                            n.delete(t), n.size === 0 && d.delete(e)
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
            return re({
                queryKey: C(t, e),
                enabled: r,
                staleTime: se,
                queryFn: async ({
                    client: r,
                    signal: i
                }) => {
                    let a = p();
                    if (a?.getWorkspaceId() !== t) throw Error(`The current workspace cannot access these roles.`);
                    let s = V();
                    if (n || s === `sheep`) {
                        i.throwIfAborted();
                        let n = await q({
                            queryClient: r,
                            workspaceId: t,
                            accountId: a.id,
                            accountUserId: a.normalizedAccountUserId,
                            transport: s
                        }).fetch(e, i);
                        return i.throwIfAborted(), n
                    }
                    return T({
                        operation: `connector_roles`,
                        signal: i,
                        request: async () => await x({
                            operation: `connector_roles`,
                            transport: `sa_server`,
                            workspaceId: t,
                            signal: i,
                            request: n => o.safeGet(`/rbac/workspace/{workspace_id}/connector/{connector_id}/roles`, {
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
        te(), oe(), le(), fe(), w(), y(), A(), M(), Y(), P(), L(), D(), X = ({
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
                    queryKey: E(`list`, t)
                }).flatMap(([t, i]) => {
                    if (i == null) return e.getQueryState(t)?.fetchStatus === `fetching` ? [t] : [];
                    let a = i.pages.flatMap(e => e.plugins).find(({
                        id: e
                    }) => e === n)?.workspace_settings;
                    return e.getQueryState(t)?.fetchStatus === `idle` && a?.enabled === r.enabled && a.installation_policy === r.installation_policy && JSON.stringify([...a.installed_by_default_role_ids ?? []].sort()) === JSON.stringify([...r.installed_by_default_role_ids ?? []].sort()) ? [] : [t]
                }) : [],
                u = [!1, !0].map(e => I(n, t, e)),
                d = s ? e.getQueriesData({
                    queryKey: E(`detail`, t)
                }).flatMap(([t, r]) => (r?.id === n || u.some(e => e.every((e, n) => t[n] === e))) && e.getQueryState(t)?.fetchStatus === `fetching` ? [t] : []) : [];
            for (let t of [...l, ...d]) e.cancelQueries({
                queryKey: t,
                exact: !0
            }).catch(() => void 0);
            let f = i ?? O(t, n);
            e.setQueryData(f, r), i ?? e.setQueriesData({
                queryKey: f
            }, r), e.setQueryData([t, `admin`, `plugins`, `detail`, n], e => e == null ? e : {
                ...e,
                workspace_settings: r
            }), k({
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
            queryKey: E(`detail`, t)
        }).filter(([e, t]) => e.at(-1) === n || e.at(-3) === n && e.at(-2) === `detail-sheep` || t?.id === n || t != null && t.detail != null && `dependencies` in t.detail && t.detail.dependencies?.some(e => e.plugin_id === n)).map(([e]) => e), $ = async ({
            queryClient: e,
            workspaceId: n,
            pluginId: r,
            appIds: i = [],
            invalidate: a = t => e.invalidateQueries(t)
        }) => {
            if (n === `` || r === ``) return;
            let o = new Set(i),
                s = E(`apps-details`, n),
                c = ae([], {
                    workspace: !0,
                    accountId: n,
                    productSku: S.ADMIN_SETTING
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
                h = Q(e, n, r).filter(e => _(e) !== _(m));
            await Promise.all([...[m, ...h].map(e => a({
                queryKey: e,
                exact: !0
            })), a({
                queryKey: E(`list`, n)
            }), a({
                queryKey: E(`template-eligibility`, n, r)
            }), a({
                queryKey: E(`role-policy`, n),
                refetchType: `active`
            }), a({
                queryKey: E(`app-role-policy`, n),
                refetchType: `active`
            }), de({
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
                queryKey: E(`app-configuration`, n, e)
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
                queryKey: ue(n)
            }), a({
                queryKey: O(n, r)
            })])
        }
    }));
export {
    Y as a, J as i, $ as n, X as r, he as t
};
//# sourceMappingURL=63f6a4cc-abgz1z4tmk05b513.js.map