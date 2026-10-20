import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    JE as t,
    qE as n
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    G as r,
    s as i
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Nwn as a,
    aTn as o,
    iTn as s,
    wwn as c
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    ny as l,
    ry as u
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    a as d,
    c as f,
    d as p,
    l as m,
    v as h,
    y as g
} from "./b26e60ff-fsk9rccepf655vnl.js";
import {
    a as _,
    r as v
} from "./c65bcee1-b0vv5cgnsrbsj670.js";
import {
    i as y,
    n as b
} from "./35efed7b-erfaeg1cma06avez.js";
import {
    n as x,
    t as S
} from "./5afd4cd2-js536b4cbs4s6qzw.js";
import {
    n as C,
    o as w,
    r as T,
    s as E
} from "./eec17ee5-pfmqng99zntx5uvn.js";
var D, O, k, A, j, M = e((() => {
    t(), a(), f(), g(), o(), i(), _(), y(), x(), T(), E(), u(), D = ({
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
        let u = s ? e.getQueriesData({
                queryKey: l(`list`, t)
            }).flatMap(([t, i]) => {
                if (i == null) return e.getQueryState(t)?.fetchStatus === `fetching` ? [t] : [];
                let a = i.pages.flatMap(e => e.plugins).find(({
                    id: e
                }) => e === n)?.workspace_settings;
                return e.getQueryState(t)?.fetchStatus === `idle` && a?.enabled === r.enabled && a.installation_policy === r.installation_policy && JSON.stringify([...a.installed_by_default_role_ids ?? []].sort()) === JSON.stringify([...r.installed_by_default_role_ids ?? []].sort()) ? [] : [t]
            }) : [],
            d = [!1, !0].map(e => w(n, t, e)),
            f = s ? e.getQueriesData({
                queryKey: l(`detail`, t)
            }).flatMap(([t, r]) => (r?.id === n || d.some(e => e.every((e, n) => t[n] === e))) && e.getQueryState(t)?.fetchStatus === `fetching` ? [t] : []) : [];
        for (let t of [...u, ...f]) e.cancelQueries({
            queryKey: t,
            exact: !0
        }).catch(() => void 0);
        let m = i ?? h(t, n);
        e.setQueryData(m, r), i ?? e.setQueriesData({
            queryKey: m
        }, r), e.setQueryData([t, `admin`, `plugins`, `detail`, n], e => e == null ? e : {
            ...e,
            workspace_settings: r
        }), p({
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
        for (let e of [...u, ...f]) c({
            queryKey: e,
            exact: !0
        }).catch(() => void 0)
    }, O = ({
        queryClient: e,
        workspaceId: t,
        pluginId: n
    }) => {
        if (t === `` || n === ``) return;
        let i = l(`list`, t),
            a = e.getQueryCache().findAll({
                queryKey: i
            }),
            o = e => r(e.slice(i.length + (e[i.length] === `search-v1` || e[i.length] === `search-v2` ? e[i.length] === `search-v2` ? 3 : 2 : 1)).flatMap(e => {
                if (typeof e != `object` || !e || Array.isArray(e)) return [e];
                let t = Object.fromEntries(Object.entries(e).filter(([e]) => e !== `sortBy` && e !== `sortDirection`));
                return Object.keys(t).length === 0 ? [] : [t]
            })),
            s = new Set([r([])]);
        for (let {
                queryKey: t
            }
            of a) e.getQueryData(t)?.pages.some(e => e.plugins.some(({
            id: e
        }) => e === n)) && s.add(o(t));
        for (let {
                queryKey: t
            }
            of a) e.setQueryData(t, e => e == null || !s.has(o(t)) ? e : {
            ...e,
            pages: e.pages.map((e, t) => ({
                ...e,
                plugins: e.plugins.filter(({
                    id: e
                }) => e !== n),
                ...t === 0 && e.source_counts != null ? {
                    source_counts: {
                        ...e.source_counts,
                        all: Math.max(0, e.source_counts.all - 1),
                        workspace: Math.max(0, e.source_counts.workspace - 1)
                    }
                } : {}
            }))
        })
    }, k = e => e instanceof Map ? [...e.values()].filter(e => typeof e == `object` && !!e && `id` in e && typeof e.id == `string`) : [], A = (e, t, n) => e.getQueriesData({
        queryKey: l(`detail`, t)
    }).filter(([e, t]) => e.at(-1) === n || e.at(-3) === n && e.at(-2) === `detail-sheep` || t?.id === n || t != null && t.detail != null && `dependencies` in t.detail && t.detail.dependencies?.some(e => e.plugin_id === n)).map(([e]) => e), j = async ({
        queryClient: e,
        workspaceId: t,
        pluginId: i,
        appIds: a = [],
        invalidate: o = t => e.invalidateQueries(t)
    }) => {
        if (t === `` || i === ``) return;
        let u = new Set(a),
            f = l(`apps-details`, t),
            p = c([], {
                workspace: !0,
                accountId: t,
                productSku: s.ADMIN_SETTING
            }).slice(1),
            g = e => {
                if (e.length <= p.length) return !1;
                let t = e.length - p.length;
                return p.every((n, r) => e[t + r] === n)
            },
            _ = e.getQueryCache().findAll({
                queryKey: f
            }),
            y = e.getQueryCache().findAll({
                queryKey: [`appsDetails`],
                predicate: ({
                    queryKey: e
                }) => g(e)
            }),
            x = new Set;
        [..._, ...y].forEach(({
            state: e
        }) => {
            for (let t of k(e.data)) x.add(t.id), typeof t.template_id == `string` && x.add(t.template_id)
        });
        let w = new Set(u);
        for (let e of u) {
            let t = n(e);
            t != null && (!x.has(e) || !x.has(t)) && w.add(t)
        }
        let T = C(i, t).queryKey,
            E = A(e, t, i).filter(e => r(e) !== r(T));
        await Promise.all([...[T, ...E].map(e => o({
            queryKey: e,
            exact: !0
        })), o({
            queryKey: l(`list`, t)
        }), o({
            queryKey: l(`template-eligibility`, t, i)
        }), o({
            queryKey: l(`role-policy`, t),
            refetchType: `active`
        }), o({
            queryKey: l(`app-role-policy`, t),
            refetchType: `active`
        }), m({
            queryClient: {
                invalidateQueries: o
            },
            workspaceId: t,
            invalidateCatalog: !1
        }), ...u.size === 0 ? [] : [o({
            queryKey: f
        }), o({
            queryKey: [`appsDetails`],
            predicate: ({
                queryKey: e,
                state: t
            }) => {
                if (!g(e)) return !1;
                let r = e.length - p.length;
                return e.slice(1, r).some(e => {
                    if (typeof e != `string`) return !1;
                    if (u.has(e)) return !0;
                    let r = n(e);
                    return r == null || !u.has(r) ? !1 : !x.has(e) || !x.has(r) || k(t.data).some(e => e.id === r || e.template_id === r)
                })
            }
        })], ...[...w].map(e => o({
            queryKey: l(`app-configuration`, t, e)
        })), ...[...w].flatMap(e => [o({
            queryKey: b({
                connectorId: e,
                workspaceId: t
            })
        }), o({
            queryKey: v({
                connectorId: e,
                workspaceId: t
            })
        }), o({
            queryKey: S({
                connectorId: e,
                workspaceId: t
            }).queryKey
        })]), o({
            queryKey: d(t)
        }), o({
            queryKey: h(t, i)
        })])
    }
}));
export {
    D as a, O as i, M as n, j as r, A as t
};
//# sourceMappingURL=63f6a4cc-dllbub7yjkj89sls.js.map