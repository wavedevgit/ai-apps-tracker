import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $E as t,
    A8 as n,
    Crt as r,
    GE as i,
    I7 as a,
    Iv as o,
    JE as s,
    LE as c,
    Lat as l,
    M7 as u,
    N7 as d,
    Oct as f,
    Pat as p,
    RE as m,
    Rat as h,
    S5 as ee,
    SK as g,
    Sat as te,
    Sv as ne,
    V1 as _,
    VE as re,
    XE as v,
    X_ as ie,
    ZE as ae,
    _rt as y,
    bat as b,
    cct as x,
    cot as oe,
    eD as se,
    j8 as ce,
    nct as le,
    not as S,
    q1 as ue,
    x5 as de,
    xK as C,
    yrt as fe
} from "./4813494d-mdvd4786a87166cc.js";
import {
    H as w,
    s as T,
    w as pe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Cn as me,
    Gwn as E,
    Kwn as D,
    RTn as O,
    ewn as k,
    nwn as he,
    zTn as A
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Bv as j,
    Py as ge,
    Rv as _e,
    Vv as M,
    jy as N,
    ky as ve
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    a as ye,
    c as be,
    n as P,
    r as xe,
    s as Se
} from "./46464433-j3bblkphm8h3mk11.js";

function Ce(e, t) {
    q.set(e, t)
}

function F(e) {
    return typeof e == `object` && !!e && q.get(e) === !0
}

function I() {
    if (typeof window > `u`) return !1;
    let e = new URL(l, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function L() {
    return I() && y(J, {
        disableExposureLog: !0
    }) ? `sheep` : `legacy`
}

function R(e, t, n, r) {
    return z(r) ? V(e, t, n) : r != null && B(e, t, n)
}

function z(e) {
    let t = e?.primaryConnector.sync_metadata?.sync_status,
        n = t?.ksid != null && t.ksid.trim() !== `` && t.ks_status !== `deleting` && t.ks_status !== `deleted`;
    return e != null && (n || e.primaryConnector.type === x.GDRIVE_ACTION_CONNECTOR)
}

function B(e, t, n) {
    return n != null && _()?.normalizedAccountUserId === n && k(t) && e === L()
}

function V(e, t, n) {
    return B(e, t, n) ? !I() || (y(J) ? `sheep` : `legacy`) === e : !1
}

function H(e, t, n, r) {
    if (r.throwIfAborted(), e === `legacy`) {
        if (e !== L()) throw new w({
            revert: !0
        });
        return
    }
    if (me(t), n == null || _()?.normalizedAccountUserId !== n || e !== L()) throw new w({
        revert: !0
    })
}

function U(e, t) {
    if (t.throwIfAborted(), !(!I() || !k(e)) && y(J)) throw new w({
        revert: !0
    })
}

function W() {
    return Y ??= new d({
        baseUrl: l.replace(/\/$/, ``),
        targetRoutesAreCanonical: !0
    }), Y
}

function G(e, t) {
    return {
        authOption: p.Required,
        signal: t,
        additionalHeaders: {
            ...C(e),
            [b]: O.ADMIN_SETTING,
            "x-openai-use-sheep": `1`
        }
    }
}

function K(e, t, n) {
    if (H(`sheep`, e, t, n), !y(J)) throw new w({
        revert: !0
    })
}
async function we({
    connectionId: e,
    workspaceId: t,
    workspaceUserId: n,
    signal: r
}) {
    return await D({
        operation: `ck_connection`,
        transport: `sheep`,
        workspaceId: t,
        signal: r,
        request: async i => {
            K(t, n, r);
            let a = await W().safeGet(`/ca/v2/admin/connection_instance/{connection_id}`, {
                ...i,
                ...G(t, r),
                parameters: {
                    path: {
                        connection_id: e
                    },
                    query: {
                        account_id: t
                    }
                }
            });
            return H(`sheep`, t, n, r), a
        }
    })
}
async function Te({
    workspaceId: e,
    workspaceUserId: t,
    signal: n
}) {
    K(e, t, n);
    let r = {
            ...G(e, n),
            parameters: {
                query: {
                    account_id: e
                }
            }
        },
        i = await Promise.all([D({
            operation: `ck_connector_list`,
            transport: `sheep`,
            workspaceId: e,
            signal: n,
            request: e => W().safeGet(`/ca/v2/admin/list_knowledge_connectors`, {
                ...r,
                ...e
            })
        }), D({
            operation: `ck_connection_list`,
            transport: `sheep`,
            workspaceId: e,
            signal: n,
            request: e => W().safeGet(`/ca/v2/admin/list_connection_instances`, {
                ...r,
                ...e
            })
        })]);
    return H(`sheep`, e, t, n), i
}
var q, J, Y, Ee, X = e((() => {
        E(), g(), f(), A(), n(), ue(), h(), te(), ee(), a(), r(), T(), he(), M(), q = new WeakMap, J = `1938127654`, Ee = ce(L, e => {
            let t = fe(),
                n, r, i = new Map,
                a = (e, t) => {
                    let n = e.options.enabled;
                    return (typeof n == `function` ? n(t) : n) !== !1
                },
                o = !0,
                s = !1,
                c = e => {
                    let t = _(),
                        r = t?.getWorkspaceId(),
                        a = t?.normalizedAccountUserId;
                    if (t == null || r == null || a == null || !e.isActive() || ![...i.get(e)?.values() ?? []].some(e => e.workspaceUserId === a && e.enabled)) return;
                    let o = e.queryKey;
                    if (o[0] !== `plugin-admin-v2` || o[2] !== r || o[1] !== `app-configuration` && o[1] !== `impact`) return;
                    if (o[1] === `impact`) {
                        let e = o.at(-1);
                        if (typeof e != `object` || !e || !(`workspaceUserId` in e) || e.workspaceUserId !== a || !F(n?.getQueryData(o))) return;
                        V(o.includes(`ck-sheep`) ? `sheep` : `legacy`, r, a);
                        return
                    }
                    if (o.includes(`attention`)) return;
                    let s = o.indexOf(`ck-sheep`),
                        c = s < 0 ? `legacy` : `sheep`;
                    c === `sheep` && o[s + 1] !== a || R(c, r, a, n?.getQueryData(o))
                },
                l = () => {
                    e(), !s && (s = !0, queueMicrotask(() => {
                        if (s = !1, !o) return;
                        let e = _()?.getWorkspaceId(),
                            t = n?.getQueryCache();
                        if (!(e == null || t == null))
                            for (let n of [`app-configuration`, `impact`])
                                for (let r of t.findAll({
                                        queryKey: j(n, e),
                                        type: `active`
                                    })) c(r)
                    }))
                };
            t.on(`values_updated`, l);
            let u = _()?.normalizedAccountUserId;
            return queueMicrotask(() => {
                if (!o) return;
                n = de();
                let e = n.getQueryCache();
                r = e.subscribe(e => {
                    if (!(e.query.queryKey[0] !== `plugin-admin-v2` || e.query.queryKey[1] !== `app-configuration` && e.query.queryKey[1] !== `impact`))
                        if (e.type === `observerAdded`) {
                            let t = _()?.normalizedAccountUserId;
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
                let t = _();
                if (u == null || t?.normalizedAccountUserId !== u) return;
                let s = t.getWorkspaceId();
                if (s != null)
                    for (let t of [`app-configuration`, `impact`])
                        for (let n of e.findAll({
                                queryKey: j(t, s)
                            })) {
                            let e = i.get(n);
                            e ?? (e = new Map, i.set(n, e));
                            for (let t of n.observers) e.has(t) || e.set(t, {
                                workspaceUserId: u,
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
        E(), g(), f(), se(), ge(), o(), A(), re(), s(), h(), oe(), te(), ee(), a(), ue(), T(), M(), Se(), X(), Z = async ({
            connectorId: e,
            workspaceId: t,
            signal: n,
            includeActions: r,
            transport: a,
            forceFresh: o = !1
        }) => {
            if (a === `sheep`) return i(await ye({
                connectorId: e,
                workspaceId: t,
                signal: n,
                includeActions: r
            }));
            let s = {
                workspaceId: t,
                productSku: O.ADMIN_SETTING,
                authOption: p.Required,
                includeActions: r,
                applyEligibilityFilter: !0
            };
            if (o) {
                n.throwIfAborted();
                let t = await m(e, {
                    ...s,
                    signal: n
                });
                return n.throwIfAborted(), i(t)
            }
            n.throwIfAborted();
            let l = await c(de(), e, {
                ...s,
                allowUnavailable: !0,
                staleTime: 0
            });
            return n.throwIfAborted(), i(l?.id === e ? l : await m(e, {
                ...s,
                signal: n
            }))
        }, De = async ({
            app: e,
            workspaceId: t,
            signal: n,
            ckTransport: r,
            ckWorkspaceUserId: i,
            exposeLegacyCKRead: a
        }) => {
            let o = e.primaryConnector.sync_metadata?.sync_status,
                s = o?.ksid;
            if (!(s == null || s.trim() === `` || o?.ks_status === `deleting` || o?.ks_status === `deleted`)) {
                n.throwIfAborted(), r === `legacy` && a && U(t, n);
                try {
                    let a = r === `sheep` ? await we({
                        connectionId: s,
                        workspaceId: t,
                        workspaceUserId: i,
                        signal: n
                    }) : await D({
                        operation: `ck_connection`,
                        transport: `sa_server`,
                        workspaceId: t,
                        signal: n,
                        request: e => u.safeGet(`/ca/v2/admin/connection_instance/{connection_id}`, {
                            ...e,
                            authOption: p.Required,
                            signal: n,
                            additionalHeaders: {
                                ...C(t),
                                [b]: O.ADMIN_SETTING
                            },
                            parameters: {
                                path: {
                                    connection_id: s
                                },
                                query: {
                                    account_id: t
                                }
                            }
                        })
                    });
                    n.throwIfAborted(), r === `sheep` && H(r, t, i, n);
                    let o = a.connection_config.knowledge_connector_type;
                    if (o == null || a.connection_config.connection_config_id !== s || a.connection_status === `deleting` || a.connection_status === `deleted` || N(o) !== e.primaryConnector.type) return;
                    let c = e.knowledgeConfig.find(e => e.key === o);
                    if (c != null) {
                        c.connections.push(a);
                        return
                    }
                    e.knowledgeConfig.push({
                        key: o,
                        availability: `available`,
                        connections: [a],
                        limits: {
                            max_instances: 1
                        }
                    })
                } catch (e) {
                    if (n.throwIfAborted(), r === `sheep` && H(r, t, i, n), !(e instanceof S) || e.status !== 404) throw e
                }
            }
        }, Oe = async ({
            app: e,
            workspaceId: t,
            signal: n,
            ckTransport: r,
            ckWorkspaceUserId: i,
            exposeLegacyCKRead: a
        }) => {
            if (!(e.primaryConnector.type !== x.GDRIVE_ACTION_CONNECTOR || e.knowledgeConfig.length > 0)) {
                r === `legacy` && a && U(t, n);
                try {
                    let a = {
                            authOption: p.Required,
                            signal: n,
                            additionalHeaders: {
                                ...C(t),
                                [b]: O.ADMIN_SETTING
                            },
                            parameters: {
                                query: {
                                    account_id: t
                                }
                            }
                        },
                        [o, s] = r === `sheep` ? await Te({
                            workspaceId: t,
                            workspaceUserId: i,
                            signal: n
                        }) : await Promise.all([D({
                            operation: `ck_connector_list`,
                            transport: `sa_server`,
                            workspaceId: t,
                            signal: n,
                            request: e => u.safeGet(`/ca/v2/admin/list_knowledge_connectors`, {
                                ...a,
                                ...e
                            })
                        }), D({
                            operation: `ck_connection_list`,
                            transport: `sa_server`,
                            workspaceId: t,
                            signal: n,
                            request: e => u.safeGet(`/ca/v2/admin/list_connection_instances`, {
                                ...a,
                                ...e
                            })
                        })]);
                    n.throwIfAborted(), r === `sheep` && H(r, t, i, n);
                    for (let t of o.knowledge_conectors) {
                        let n = t.connector_details,
                            r = n.knowledge_connector_type;
                        N(r) === e.primaryConnector.type && e.knowledgeConfig.push({
                            key: r,
                            availability: n.availability,
                            limits: n.limits ?? {
                                max_instances: 3
                            },
                            connections: s.connection_instances.filter(e => e.connection_config.knowledge_connector_type === r && e.connection_status !== `deleting` && e.connection_status !== `deleted`)
                        })
                    }
                    for (let t of s.connection_instances) {
                        let n = t.connection_config.knowledge_connector_type;
                        if (n == null || t.connection_status === `deleting` || t.connection_status === `deleted` || N(n) !== e.primaryConnector.type) continue;
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
                    if (n.throwIfAborted(), r === `sheep` && H(r, t, i, n), a instanceof S && a.status === 404 && e.primaryConnector.sync_metadata?.sync_status == null) return;
                    throw a
                }
            }
        }, Q = async ({
            appId: e,
            directoryApp: n,
            workspaceId: r,
            signal: i,
            purpose: a = `configuration`,
            transport: o = `legacy`,
            ckTransport: s,
            ckWorkspaceUserId: c = _()?.normalizedAccountUserId
        }) => {
            if (r === `` || e === ``) throw Error(`A workspace and app are required to configure a plugin.`);
            let l = s ?? `legacy`,
                u = n != null && v(n.id, e) ? n.id : e,
                d = t(u),
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
                if (!(e instanceof S) || e.status !== 404 || d == null) throw e;
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
            if (ne.has(ae(f.id)) || f.labels?.admin_only_connector === `true`) throw Error(`This app cannot be configured from plugin administration.`);
            let p = {
                    ...f,
                    name: f.name || n?.name || u,
                    status: f.status ?? n?.status ?? void 0,
                    type: ie[f.id] ?? (f.connector_type === `MCP` ? le.MCP_CONNECTOR : f.connector_type)
                },
                m = {
                    primaryConnector: p,
                    relatedConnectors: [],
                    knowledgeConfig: [],
                    searchKeys: [p.name.toLocaleLowerCase()]
                },
                h = ve(m);
            return h != null && m.knowledgeConfig.push(h), a === `configuration` && (s !== void 0 && H(s, r, c, i), await De({
                app: m,
                workspaceId: r,
                signal: i,
                ckTransport: l,
                ckWorkspaceUserId: c,
                exposeLegacyCKRead: s !== void 0
            }), await Oe({
                app: m,
                workspaceId: r,
                signal: i,
                ckTransport: l,
                ckWorkspaceUserId: c,
                exposeLegacyCKRead: s !== void 0
            }), s !== void 0 && H(s, r, c, i)), o === `sheep` && P(o, r, i), m
        }, $ = ({
            appId: e,
            directoryApp: t,
            workspaceId: n,
            purpose: r = `configuration`,
            transport: i = be(),
            reconciliationRequestId: a,
            reconciliationWorkspaceUserId: o,
            ckTransport: s = r === `configuration` ? L() : `legacy`
        }) => {
            let c = s === `sheep` ? _()?.normalizedAccountUserId : void 0;
            return pe({
                queryKey: j(`app-configuration`, n, t != null && v(t.id, e) ? t.id : e, ...r === `configuration` ? [] : r === `reconciliation` ? [r, o ?? null, a ?? null] : [r], ...i === `sheep` ? [`sheep`] : [], ...r === `configuration` && s === `sheep` ? [`ck-sheep`, c] : []),
                enabled: n !== `` && e !== `` && (r !== `reconciliation` || a != null && a !== `` && o != null && o !== `` && _()?.normalizedAccountUserId === o),
                staleTime: r === `reconciliation` ? 0 : _e,
                queryFn: async ({
                    signal: l
                }) => {
                    if (r === `reconciliation` && (a == null || a === `` || o == null || o === `` || _()?.normalizedAccountUserId !== o)) throw new w({
                        revert: !0
                    });
                    r === `configuration` && H(s, n, c, l), P(i, n, l), n !== `` && e !== `` && xe(i, n, l);
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
                    if (r === `reconciliation` && _()?.normalizedAccountUserId !== o) throw new w({
                        revert: !0
                    });
                    return u
                }
            })
        }
    }));
export {
    H as a, F as c, Ce as d, L as f, Ee as i, X as l, $ as n, R as o, ke as r, V as s, Q as t, z as u
};
//# sourceMappingURL=bb6515d2-dszyxerit33bzs1y.js.map