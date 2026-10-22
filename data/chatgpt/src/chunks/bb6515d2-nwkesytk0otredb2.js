import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    $E as n,
    A8 as r,
    Aat as i,
    Dat as a,
    GE as o,
    Iv as s,
    JE as c,
    LE as l,
    R5 as u,
    RE as d,
    SK as f,
    Sv as ee,
    V1 as p,
    VE as m,
    X7 as h,
    XE as te,
    X_ as ne,
    Y7 as g,
    Yat as _,
    Yst as re,
    ZE as ie,
    eD as ae,
    frt as oe,
    grt as se,
    hat as ce,
    j8 as le,
    jat as v,
    pat as y,
    q1 as b,
    tct as x,
    tot as ue,
    urt as S,
    xK as C,
    xct as de,
    z5 as w
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    H as T,
    s as E,
    w as fe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Cn as D,
    Gwn as O,
    LTn as k,
    QCn as pe,
    RTn as A,
    Wwn as j,
    twn as me
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    Ay as M,
    Bv as N,
    Lv as he,
    Ny as ge,
    Oy as _e,
    zv as P
} from "./c2675c8c-f8x469cgefxzeo6l.js";
import {
    a as ve,
    c as ye,
    n as F,
    r as be,
    s as xe
} from "./46464433-jvvkfk7rhumrmrjk.js";

function Se(e, t) {
    J.set(e, t)
}

function I(e) {
    return typeof e == `object` && !!e && J.get(e) === !0
}

function L() {
    if (typeof window > `u`) return !1;
    let e = new URL(i, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function R() {
    return L() && S(Y, {
        disableExposureLog: !0
    }) ? `sheep` : `legacy`
}

function z(e, t, n, r) {
    return B(r) ? H(e, t, n) : r != null && V(e, t, n)
}

function B(e) {
    let t = e?.primaryConnector.sync_metadata?.sync_status,
        n = t?.ksid != null && t.ksid.trim() !== `` && t.ks_status !== `deleting` && t.ks_status !== `deleted`;
    return e != null && (n || e.primaryConnector.type === x.GDRIVE_ACTION_CONNECTOR)
}

function V(e, t, n) {
    return n != null && p()?.normalizedAccountUserId === n && D(t) && e === R()
}

function H(e, t, n) {
    return V(e, t, n) ? !L() || (S(Y) ? `sheep` : `legacy`) === e : !1
}

function U(e, t, n, r) {
    if (r.throwIfAborted(), e === `legacy`) {
        if (e !== R()) throw new T({
            revert: !0
        });
        return
    }
    if (pe(t), n == null || p()?.normalizedAccountUserId !== n || e !== R()) throw new T({
        revert: !0
    })
}

function W(e, t) {
    if (t.throwIfAborted(), !(!L() || !D(e)) && S(Y)) throw new T({
        revert: !0
    })
}

function G() {
    return Te ??= new h({
        baseUrl: i.replace(/\/$/, ``),
        targetRoutesAreCanonical: !0
    }), Te
}

function K(e, t) {
    return {
        authOption: a.Required,
        signal: t,
        additionalHeaders: {
            ...C(e),
            [y]: k.ADMIN_SETTING,
            "x-openai-use-sheep": `1`
        }
    }
}

function q(e, t, n) {
    if (U(`sheep`, e, t, n), !S(Y)) throw new T({
        revert: !0
    })
}
async function Ce({
    connectionId: e,
    workspaceId: t,
    workspaceUserId: n,
    signal: r
}) {
    return await O({
        operation: `ck_connection`,
        transport: `sheep`,
        workspaceId: t,
        signal: r,
        request: async i => {
            q(t, n, r);
            let a = await G().safeGet(`/ca/v2/admin/connection_instance/{connection_id}`, {
                ...i,
                ...K(t, r),
                parameters: {
                    path: {
                        connection_id: e
                    },
                    query: {
                        account_id: t
                    }
                }
            });
            return U(`sheep`, t, n, r), a
        }
    })
}
async function we({
    workspaceId: e,
    workspaceUserId: t,
    signal: n
}) {
    q(e, t, n);
    let r = {
            ...K(e, n),
            parameters: {
                query: {
                    account_id: e
                }
            }
        },
        i = await Promise.all([O({
            operation: `ck_connector_list`,
            transport: `sheep`,
            workspaceId: e,
            signal: n,
            request: e => G().safeGet(`/ca/v2/admin/list_knowledge_connectors`, {
                ...r,
                ...e
            })
        }), O({
            operation: `ck_connection_list`,
            transport: `sheep`,
            workspaceId: e,
            signal: n,
            request: e => G().safeGet(`/ca/v2/admin/list_connection_instances`, {
                ...r,
                ...e
            })
        })]);
    return U(`sheep`, e, t, n), i
}
var J, Y, Te, Ee, X = e((() => {
        j(), f(), de(), A(), r(), b(), v(), ce(), w(), t(), se(), E(), me(), N(), J = new WeakMap, Y = `1938127654`, Ee = le(R, e => {
            let t = oe(),
                n, r, i = new Map,
                a = (e, t) => {
                    let n = e.options.enabled;
                    return (typeof n == `function` ? n(t) : n) !== !1
                },
                o = !0,
                s = !1,
                c = e => {
                    let t = p(),
                        r = t?.getWorkspaceId(),
                        a = t?.normalizedAccountUserId;
                    if (t == null || r == null || a == null || !e.isActive() || ![...i.get(e)?.values() ?? []].some(e => e.workspaceUserId === a && e.enabled)) return;
                    let o = e.queryKey;
                    if (o[0] !== `plugin-admin-v2` || o[2] !== r || o[1] !== `app-configuration` && o[1] !== `impact`) return;
                    if (o[1] === `impact`) {
                        let e = o.at(-1);
                        if (typeof e != `object` || !e || !(`workspaceUserId` in e) || e.workspaceUserId !== a || !I(n?.getQueryData(o))) return;
                        H(o.includes(`ck-sheep`) ? `sheep` : `legacy`, r, a);
                        return
                    }
                    if (o.includes(`attention`)) return;
                    let s = o.indexOf(`ck-sheep`),
                        c = s < 0 ? `legacy` : `sheep`;
                    c === `sheep` && o[s + 1] !== a || z(c, r, a, n?.getQueryData(o))
                },
                l = () => {
                    e(), !s && (s = !0, queueMicrotask(() => {
                        if (s = !1, !o) return;
                        let e = p()?.getWorkspaceId(),
                            t = n?.getQueryCache();
                        if (!(e == null || t == null))
                            for (let n of [`app-configuration`, `impact`])
                                for (let r of t.findAll({
                                        queryKey: P(n, e),
                                        type: `active`
                                    })) c(r)
                    }))
                };
            t.on(`values_updated`, l);
            let d = p()?.normalizedAccountUserId;
            return queueMicrotask(() => {
                if (!o) return;
                n = u();
                let e = n.getQueryCache();
                r = e.subscribe(e => {
                    if (!(e.query.queryKey[0] !== `plugin-admin-v2` || e.query.queryKey[1] !== `app-configuration` && e.query.queryKey[1] !== `impact`))
                        if (e.type === `observerAdded`) {
                            let t = p()?.normalizedAccountUserId;
                            if (t == null) return;
                            let n = i.get(e.query);
                            n ?? (n = new Map, i.set(e.query, n)), n.set(e.observer, {
                                workspaceUserId: t,
                                enabled: a(e.observer, e.query)
                            }), queueMicrotask(() => {
                                o && c(e.query)
                            })
                        } else if (e.type === `observerOptionsUpdated`) {
                        let t = i.get(e.query)?.get(e.observer);
                        if (t == null) return;
                        let n = t.enabled;
                        t.enabled = a(e.observer, e.query), !n && t.enabled && queueMicrotask(() => {
                            o && c(e.query)
                        })
                    } else if (e.type === `observerRemoved`) {
                        let t = i.get(e.query);
                        t?.delete(e.observer), t?.size === 0 && i.delete(e.query)
                    } else e.type === `removed` && i.delete(e.query)
                });
                let t = p();
                if (d == null || t?.normalizedAccountUserId !== d) return;
                let s = t.getWorkspaceId();
                if (s != null)
                    for (let t of [`app-configuration`, `impact`])
                        for (let n of e.findAll({
                                queryKey: P(t, s)
                            })) {
                            let e = i.get(n);
                            e ?? (e = new Map, i.set(n, e));
                            for (let t of n.observers) e.has(t) || e.set(t, {
                                workspaceUserId: d,
                                enabled: a(t, n)
                            });
                            c(n)
                        }
            }), () => {
                o = !1, t.off(`values_updated`, l), r?.()
            }
        }, {
            name: `adminPluginCKConfigurationReadTransport`
        })
    })),
    Z, De, Oe, Q, $, ke = e((() => {
        j(), f(), de(), ae(), ge(), s(), A(), m(), c(), v(), ue(), ce(), w(), t(), b(), E(), N(), xe(), X(), Z = async ({
            connectorId: e,
            workspaceId: t,
            signal: n,
            includeActions: r,
            transport: i,
            forceFresh: s = !1
        }) => {
            if (i === `sheep`) return o(await ve({
                connectorId: e,
                workspaceId: t,
                signal: n,
                includeActions: r
            }));
            let c = {
                workspaceId: t,
                productSku: k.ADMIN_SETTING,
                authOption: a.Required,
                includeActions: r,
                applyEligibilityFilter: !0
            };
            if (s) {
                n.throwIfAborted();
                let t = await d(e, {
                    ...c,
                    signal: n
                });
                return n.throwIfAborted(), o(t)
            }
            n.throwIfAborted();
            let f = await l(u(), e, {
                ...c,
                allowUnavailable: !0,
                staleTime: 0
            });
            return n.throwIfAborted(), o(f?.id === e ? f : await d(e, {
                ...c,
                signal: n
            }))
        }, De = async ({
            app: e,
            workspaceId: t,
            signal: n,
            ckTransport: r,
            ckWorkspaceUserId: i,
            exposeLegacyCKRead: o
        }) => {
            let s = e.primaryConnector.sync_metadata?.sync_status,
                c = s?.ksid;
            if (!(c == null || c.trim() === `` || s?.ks_status === `deleting` || s?.ks_status === `deleted`)) {
                n.throwIfAborted(), r === `legacy` && o && W(t, n);
                try {
                    let o = r === `sheep` ? await Ce({
                        connectionId: c,
                        workspaceId: t,
                        workspaceUserId: i,
                        signal: n
                    }) : await O({
                        operation: `ck_connection`,
                        transport: `sa_server`,
                        workspaceId: t,
                        signal: n,
                        request: e => g.safeGet(`/ca/v2/admin/connection_instance/{connection_id}`, {
                            ...e,
                            authOption: a.Required,
                            signal: n,
                            additionalHeaders: {
                                ...C(t),
                                [y]: k.ADMIN_SETTING
                            },
                            parameters: {
                                path: {
                                    connection_id: c
                                },
                                query: {
                                    account_id: t
                                }
                            }
                        })
                    });
                    n.throwIfAborted(), r === `sheep` && U(r, t, i, n);
                    let s = o.connection_config.knowledge_connector_type;
                    if (s == null || o.connection_config.connection_config_id !== c || o.connection_status === `deleting` || o.connection_status === `deleted` || M(s) !== e.primaryConnector.type) return;
                    let l = e.knowledgeConfig.find(e => e.key === s);
                    if (l != null) {
                        l.connections.push(o);
                        return
                    }
                    e.knowledgeConfig.push({
                        key: s,
                        availability: `available`,
                        connections: [o],
                        limits: {
                            max_instances: 1
                        }
                    })
                } catch (e) {
                    if (n.throwIfAborted(), r === `sheep` && U(r, t, i, n), !(e instanceof _) || e.status !== 404) throw e
                }
            }
        }, Oe = async ({
            app: e,
            workspaceId: t,
            signal: n,
            ckTransport: r,
            ckWorkspaceUserId: i,
            exposeLegacyCKRead: o
        }) => {
            if (!(e.primaryConnector.type !== x.GDRIVE_ACTION_CONNECTOR || e.knowledgeConfig.length > 0)) {
                r === `legacy` && o && W(t, n);
                try {
                    let o = {
                            authOption: a.Required,
                            signal: n,
                            additionalHeaders: {
                                ...C(t),
                                [y]: k.ADMIN_SETTING
                            },
                            parameters: {
                                query: {
                                    account_id: t
                                }
                            }
                        },
                        [s, c] = r === `sheep` ? await we({
                            workspaceId: t,
                            workspaceUserId: i,
                            signal: n
                        }) : await Promise.all([O({
                            operation: `ck_connector_list`,
                            transport: `sa_server`,
                            workspaceId: t,
                            signal: n,
                            request: e => g.safeGet(`/ca/v2/admin/list_knowledge_connectors`, {
                                ...o,
                                ...e
                            })
                        }), O({
                            operation: `ck_connection_list`,
                            transport: `sa_server`,
                            workspaceId: t,
                            signal: n,
                            request: e => g.safeGet(`/ca/v2/admin/list_connection_instances`, {
                                ...o,
                                ...e
                            })
                        })]);
                    n.throwIfAborted(), r === `sheep` && U(r, t, i, n);
                    for (let t of s.knowledge_conectors) {
                        let n = t.connector_details,
                            r = n.knowledge_connector_type;
                        M(r) === e.primaryConnector.type && e.knowledgeConfig.push({
                            key: r,
                            availability: n.availability,
                            limits: n.limits ?? {
                                max_instances: 3
                            },
                            connections: c.connection_instances.filter(e => e.connection_config.knowledge_connector_type === r && e.connection_status !== `deleting` && e.connection_status !== `deleted`)
                        })
                    }
                    for (let t of c.connection_instances) {
                        let n = t.connection_config.knowledge_connector_type;
                        if (n == null || t.connection_status === `deleting` || t.connection_status === `deleted` || M(n) !== e.primaryConnector.type) continue;
                        let r = e.knowledgeConfig.find(e => e.key === n);
                        if (r != null) {
                            let e = t.connection_config.connection_config_id;
                            r.connections.some(t => t.connection_config.connection_config_id === e) || r.connections.push(t);
                            continue
                        }
                        e.knowledgeConfig.push({
                            key: n,
                            availability: `available`,
                            limits: {
                                max_instances: 1
                            },
                            connections: [t]
                        })
                    }
                } catch (a) {
                    if (n.throwIfAborted(), r === `sheep` && U(r, t, i, n), a instanceof _ && a.status === 404 && e.primaryConnector.sync_metadata?.sync_status == null) return;
                    throw a
                }
            }
        }, Q = async ({
            appId: e,
            directoryApp: t,
            workspaceId: r,
            signal: i,
            purpose: a = `configuration`,
            transport: o = `legacy`,
            ckTransport: s,
            ckWorkspaceUserId: c = p()?.normalizedAccountUserId
        }) => {
            if (r === `` || e === ``) throw Error(`A workspace and app are required to configure a plugin.`);
            let l = s ?? `legacy`,
                u = t != null && te(t.id, e) ? t.id : e,
                d = n(u),
                f;
            try {
                f = await Z({
                    connectorId: u,
                    workspaceId: r,
                    signal: i,
                    includeActions: a === `attention`,
                    transport: o,
                    forceFresh: a === `reconciliation`
                })
            } catch (e) {
                if (!(e instanceof _) || e.status !== 404 || d == null) throw e;
                f = await Z({
                    connectorId: d,
                    workspaceId: r,
                    signal: i,
                    includeActions: a === `attention`,
                    transport: o,
                    forceFresh: a === `reconciliation`
                })
            }
            if (a === `reconciliation` && f.status == null) throw Error(`The connector status is missing from the publish reconciliation response.`);
            if (ee.has(ie(f.id)) || f.labels?.admin_only_connector === `true`) throw Error(`This app cannot be configured from plugin administration.`);
            let m = {
                    ...f,
                    name: f.name || t?.name || u,
                    status: f.status ?? t?.status ?? void 0,
                    type: ne[f.id] ?? (f.connector_type === `MCP` ? re.MCP_CONNECTOR : f.connector_type)
                },
                h = {
                    primaryConnector: m,
                    relatedConnectors: [],
                    knowledgeConfig: [],
                    searchKeys: [m.name.toLocaleLowerCase()]
                },
                g = _e(h);
            return g != null && h.knowledgeConfig.push(g), a === `configuration` && (s !== void 0 && U(s, r, c, i), await De({
                app: h,
                workspaceId: r,
                signal: i,
                ckTransport: l,
                ckWorkspaceUserId: c,
                exposeLegacyCKRead: s !== void 0
            }), await Oe({
                app: h,
                workspaceId: r,
                signal: i,
                ckTransport: l,
                ckWorkspaceUserId: c,
                exposeLegacyCKRead: s !== void 0
            }), s !== void 0 && U(s, r, c, i)), o === `sheep` && F(o, r, i), h
        }, $ = ({
            appId: e,
            directoryApp: t,
            workspaceId: n,
            purpose: r = `configuration`,
            transport: i = ye(),
            reconciliationRequestId: a,
            reconciliationWorkspaceUserId: o,
            ckTransport: s = r === `configuration` ? R() : `legacy`
        }) => {
            let c = s === `sheep` ? p()?.normalizedAccountUserId : void 0;
            return fe({
                queryKey: P(`app-configuration`, n, t != null && te(t.id, e) ? t.id : e, ...r === `configuration` ? [] : r === `reconciliation` ? [r, o ?? null, a ?? null] : [r], ...i === `sheep` ? [`sheep`] : [], ...r === `configuration` && s === `sheep` ? [`ck-sheep`, c] : []),
                enabled: n !== `` && e !== `` && (r !== `reconciliation` || a != null && a !== `` && o != null && o !== `` && p()?.normalizedAccountUserId === o),
                staleTime: r === `reconciliation` ? 0 : he,
                queryFn: async ({
                    signal: l
                }) => {
                    if (r === `reconciliation` && (a == null || a === `` || o == null || o === `` || p()?.normalizedAccountUserId !== o)) throw new T({
                        revert: !0
                    });
                    r === `configuration` && U(s, n, c, l), F(i, n, l), n !== `` && e !== `` && be(i, n, l);
                    let u = await Q({
                        appId: e,
                        directoryApp: t,
                        workspaceId: n,
                        signal: l,
                        purpose: r,
                        transport: i,
                        ckTransport: s,
                        ckWorkspaceUserId: c
                    });
                    if (r === `reconciliation` && p()?.normalizedAccountUserId !== o) throw new T({
                        revert: !0
                    });
                    return u
                }
            })
        }
    }));
export {
    U as a, I as c, Se as d, R as f, Ee as i, X as l, $ as n, z as o, ke as r, H as s, Q as t, B as u
};
//# sourceMappingURL=bb6515d2-nwkesytk0otredb2.js.map