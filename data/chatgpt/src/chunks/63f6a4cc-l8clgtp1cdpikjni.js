import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    $E as n,
    Aat as r,
    Dat as i,
    HE as a,
    SK as o,
    UE as s,
    V1 as c,
    WE as l,
    X7 as u,
    Y7 as d,
    eD as f,
    grt as p,
    hat as m,
    jat as h,
    pat as ee,
    q1 as g,
    urt as _,
    xK as te
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    G as v,
    H as y,
    s as b,
    w as ne
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Gwn as x,
    LTn as S,
    MFn as C,
    RTn as w,
    Wwn as T,
    fTn as E,
    jFn as re,
    rTn as ie
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    Bv as D,
    Lv as ae,
    Qy as O,
    Xy as oe,
    zv as k
} from "./c2675c8c-f8x469cgefxzeo6l.js";
import {
    a as se,
    f as A,
    n as ce,
    o as le,
    p as ue,
    s as de
} from "./b26e60ff-ds5rnpn5hxxt9s2w.js";
import {
    a as fe,
    r as j
} from "./c65bcee1-f4lvafpnmqv3zkxc.js";
import {
    r as M,
    t as N
} from "./35efed7b-f1vu2gniksa9yq6i.js";
import {
    m as P,
    n as F,
    p as I,
    r as L
} from "./eec17ee5-iddahm7lvvi1z26n.js";

function R() {
    if (typeof window > `u`) return !1;
    let e = new URL(r, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function z() {
    return _(U, {
        disableExposureLog: !0
    })
}

function B() {
    return _(U)
}

function V() {
    return R() && z() ? `sheep` : `legacy`
}

function H(e, t, n) {
    if (n?.throwIfAborted(), c()?.getWorkspaceId() !== t || e !== V()) throw new y({
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
    return await x({
        operation: `connector_roles`,
        transport: `sheep`,
        workspaceId: t,
        signal: n,
        request: async a => {
            H(`sheep`, t, n), W ??= new u({
                baseUrl: r.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let o = await W.safePost(`/rbac/workspace/{workspace_id}/connectors/roles`, {
                ...a,
                authOption: i.Required,
                signal: n,
                additionalHeaders: {
                    ...te(t),
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
            return H(`sheep`, t, n), o.roles_by_connector_id
        }
    })
}
var U, W, G = e((() => {
        w(), g(), h(), m(), t(), p(), o(), b(), T(), U = `3774317842`
    })),
    K, q, J, Y = e((() => {
        T(), C(), g(), t(), b(), oe(), s(), G(), D(), K = new WeakMap, q = ({
            queryClient: e,
            workspaceId: t,
            accountId: n,
            accountUserId: r,
            transport: i
        }) => {
            let o = K.get(e);
            o ?? (o = new Map, K.set(e, o));
            let s = JSON.stringify([t, n, r, i]),
                u = o.get(s);
            if (u != null) return u;
            let f = () => {
                    let e = c();
                    if (e?.getWorkspaceId() !== t || e.id !== n || e.normalizedAccountUserId !== r) throw new DOMException(`Connector role account changed`, `AbortError`)
                },
                p = new Map,
                m = a({
                    fetcher: async e => {
                        let n = e.flatMap(e => [...p.get(e) ?? []]);
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
                            f(), pe(i, t, r.signal);
                            let n = await O({
                                operation: `connector_roles`,
                                signal: r.signal,
                                request: async () => i === `sheep` ? await me({
                                    connectorIds: e,
                                    workspaceId: t,
                                    signal: r.signal
                                }) : (await x({
                                    operation: `connector_roles`,
                                    transport: `sa_server`,
                                    workspaceId: t,
                                    signal: r.signal,
                                    request: n => d.safePost(`/rbac/workspace/{workspace_id}/connectors/roles`, {
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
                            return f(), H(i, t, r.signal), n
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
            return o.set(s, h), h
        }, J = ({
            connectorId: e,
            workspaceId: t,
            batched: n = !1
        }) => {
            let r = e !== `` && t !== ``;
            return ne({
                queryKey: re(t, e),
                enabled: r,
                staleTime: ae,
                queryFn: async ({
                    client: r,
                    signal: i
                }) => {
                    let a = c();
                    if (a?.getWorkspaceId() !== t) throw Error(`The current workspace cannot access these roles.`);
                    let o = V();
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
                        request: async () => await x({
                            operation: `connector_roles`,
                            transport: `sa_server`,
                            workspaceId: t,
                            signal: i,
                            request: n => d.safeGet(`/rbac/workspace/{workspace_id}/connector/{connector_id}/roles`, {
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
        f(), E(), se(), ue(), w(), b(), fe(), M(), Y(), P(), L(), D(), X = ({
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
                u = [!1, !0].map(e => I(n, t, e)),
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
            }), de({
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
            pluginId: r,
            appIds: i = [],
            invalidate: a = t => e.invalidateQueries(t)
        }) => {
            if (t === `` || r === ``) return;
            let o = new Set(i),
                s = k(`apps-details`, t),
                c = ie([], {
                    workspace: !0,
                    accountId: t,
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
                let t = n(e);
                t != null && (!f.has(e) || !f.has(t)) && p.add(t)
            }
            let m = F(r, t).queryKey,
                h = Q(e, t, r).filter(e => v(e) !== v(m));
            await Promise.all([...[m, ...h].map(e => a({
                queryKey: e,
                exact: !0
            })), a({
                queryKey: k(`list`, t)
            }), a({
                queryKey: k(`template-eligibility`, t, r)
            }), a({
                queryKey: k(`role-policy`, t),
                refetchType: `active`
            }), a({
                queryKey: k(`app-role-policy`, t),
                refetchType: `active`
            }), le({
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
                    let r = e.length - c.length;
                    return e.slice(1, r).some(e => {
                        if (typeof e != `string`) return !1;
                        if (o.has(e)) return !0;
                        let r = n(e);
                        return r == null || !o.has(r) ? !1 : !f.has(e) || !f.has(r) || Z(t.data).some(e => e.id === r || e.template_id === r)
                    })
                }
            })], ...[...p].map(e => a({
                queryKey: k(`app-configuration`, t, e)
            })), ...[...p].flatMap(e => [a({
                queryKey: N({
                    connectorId: e,
                    workspaceId: t
                })
            }), a({
                queryKey: j({
                    connectorId: e,
                    workspaceId: t
                })
            }), a({
                queryKey: J({
                    connectorId: e,
                    workspaceId: t
                }).queryKey
            })]), a({
                queryKey: ce(t)
            }), a({
                queryKey: A(t, r)
            })])
        }
    }));
export {
    Y as a, J as i, $ as n, X as r, he as t
};
//# sourceMappingURL=63f6a4cc-l8clgtp1cdpikjni.js.map