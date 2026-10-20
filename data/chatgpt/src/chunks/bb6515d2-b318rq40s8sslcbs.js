import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C5 as t,
    CK as n,
    F7 as r,
    FE as i,
    Fat as a,
    Fst as o,
    Fv as s,
    GE as c,
    HE as l,
    JE as u,
    Knt as d,
    L1 as f,
    ME as p,
    P7 as m,
    R7 as h,
    WE as g,
    Wnt as _,
    Xnt as ee,
    Y_ as te,
    Yit as v,
    dat as ne,
    g8 as re,
    h8 as ie,
    j1 as y,
    jE as ae,
    kat as b,
    kst as oe,
    qE as se,
    qit as x,
    sat as S,
    tct as C,
    uat as w,
    w5 as ce,
    wK as le,
    xv as ue,
    zE as T
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    H as E,
    s as D,
    w as de
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    _Cn as fe,
    cwn as O,
    eTn as k,
    hCn as A,
    mCn as pe,
    swn as j,
    tTn as M
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Av as N,
    Cy as me,
    Dv as he,
    by as P,
    kv as F,
    vy as ge
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    a as _e,
    c as ve,
    n as I,
    r as ye,
    s as be
} from "./46464433-g946xnvlgzfys2yo.js";

function xe(e, t) {
    Y.set(e, t)
}

function L(e) {
    return typeof e == `object` && !!e && Y.get(e) === !0
}

function R() {
    if (typeof window > `u`) return !1;
    let e = new URL(w, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function z() {
    return R() && _(X, {
        disableExposureLog: !0
    }) ? `sheep` : `legacy`
}

function B(e, t, n, r) {
    return V(r) ? U(e, t, n) : r != null && H(e, t, n)
}

function V(e) {
    let t = e?.primaryConnector.sync_metadata?.sync_status,
        n = t?.ksid != null && t.ksid.trim() !== `` && t.ks_status !== `deleting` && t.ks_status !== `deleted`;
    return e != null && (n || e.primaryConnector.type === o.GDRIVE_ACTION_CONNECTOR)
}

function H(e, t, n) {
    return n != null && y()?.normalizedAccountUserId === n && A(t) && e === z()
}

function U(e, t, n) {
    return H(e, t, n) ? !R() || (_(X) ? `sheep` : `legacy`) === e : !1
}

function W(e, t, n, r) {
    if (r.throwIfAborted(), e === `legacy`) {
        if (e !== z()) throw new E({
            revert: !0
        });
        return
    }
    if (pe(t), n == null || y()?.normalizedAccountUserId !== n || e !== z()) throw new E({
        revert: !0
    })
}

function G(e, t) {
    if (t.throwIfAborted(), !(!R() || !A(e)) && _(X)) throw new E({
        revert: !0
    })
}

function K() {
    return we ??= new r({
        baseUrl: w.replace(/\/$/, ``),
        targetRoutesAreCanonical: !0
    }), we
}

function q(e, t) {
    return {
        authOption: S.Required,
        signal: t,
        additionalHeaders: {
            ...n(e),
            [x]: k.ADMIN_SETTING,
            "x-openai-use-sheep": `1`
        }
    }
}

function J(e, t, n) {
    if (W(`sheep`, e, t, n), !_(X)) throw new E({
        revert: !0
    })
}
async function Se({
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
            J(t, n, r);
            let a = await K().safeGet(`/ca/v2/admin/connection_instance/{connection_id}`, {
                ...i,
                ...q(t, r),
                parameters: {
                    path: {
                        connection_id: e
                    },
                    query: {
                        account_id: t
                    }
                }
            });
            return W(`sheep`, t, n, r), a
        }
    })
}
async function Ce({
    workspaceId: e,
    workspaceUserId: t,
    signal: n
}) {
    J(e, t, n);
    let r = {
            ...q(e, n),
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
            request: e => K().safeGet(`/ca/v2/admin/list_knowledge_connectors`, {
                ...r,
                ...e
            })
        }), O({
            operation: `ck_connection_list`,
            transport: `sheep`,
            workspaceId: e,
            signal: n,
            request: e => K().safeGet(`/ca/v2/admin/list_connection_instances`, {
                ...r,
                ...e
            })
        })]);
    return W(`sheep`, e, t, n), i
}
var Y, X, we, Te, Z = e((() => {
        j(), le(), C(), M(), ie(), f(), ne(), v(), ce(), h(), ee(), D(), fe(), N(), Y = new WeakMap, X = `1938127654`, Te = re(z, e => {
            let n = d(),
                r, i, a = new Map,
                o = (e, t) => {
                    let n = e.options.enabled;
                    return (typeof n == `function` ? n(t) : n) !== !1
                },
                s = !0,
                c = !1,
                l = e => {
                    let t = y(),
                        n = t?.getWorkspaceId(),
                        i = t?.normalizedAccountUserId;
                    if (t == null || n == null || i == null || !e.isActive() || ![...a.get(e)?.values() ?? []].some(e => e.workspaceUserId === i && e.enabled)) return;
                    let o = e.queryKey;
                    if (o[0] !== `plugin-admin-v2` || o[2] !== n || o[1] !== `app-configuration` && o[1] !== `impact`) return;
                    if (o[1] === `impact`) {
                        let e = o.at(-1);
                        if (typeof e != `object` || !e || !(`workspaceUserId` in e) || e.workspaceUserId !== i || !L(r?.getQueryData(o))) return;
                        U(o.includes(`ck-sheep`) ? `sheep` : `legacy`, n, i);
                        return
                    }
                    if (o.includes(`attention`)) return;
                    let s = o.indexOf(`ck-sheep`),
                        c = s < 0 ? `legacy` : `sheep`;
                    c === `sheep` && o[s + 1] !== i || B(c, n, i, r?.getQueryData(o))
                },
                u = () => {
                    e(), !c && (c = !0, queueMicrotask(() => {
                        if (c = !1, !s) return;
                        let e = y()?.getWorkspaceId(),
                            t = r?.getQueryCache();
                        if (!(e == null || t == null))
                            for (let n of [`app-configuration`, `impact`])
                                for (let r of t.findAll({
                                        queryKey: F(n, e),
                                        type: `active`
                                    })) l(r)
                    }))
                };
            n.on(`values_updated`, u);
            let f = y()?.normalizedAccountUserId;
            return queueMicrotask(() => {
                if (!s) return;
                r = t();
                let e = r.getQueryCache();
                i = e.subscribe(e => {
                    if (!(e.query.queryKey[0] !== `plugin-admin-v2` || e.query.queryKey[1] !== `app-configuration` && e.query.queryKey[1] !== `impact`))
                        if (e.type === `observerAdded`) {
                            let t = y()?.normalizedAccountUserId;
                            if (t == null) return;
                            let n = a.get(e.query);
                            n ?? (n = new Map, a.set(e.query, n)), n.set(e.observer, {
                                workspaceUserId: t,
                                enabled: o(e.observer, e.query)
                            }), queueMicrotask(() => {
                                s && l(e.query)
                            })
                        } else if (e.type === `observerOptionsUpdated`) {
                        let t = a.get(e.query)?.get(e.observer);
                        if (t == null) return;
                        let n = t.enabled;
                        t.enabled = o(e.observer, e.query), !n && t.enabled && queueMicrotask(() => {
                            s && l(e.query)
                        })
                    } else if (e.type === `observerRemoved`) {
                        let t = a.get(e.query);
                        t?.delete(e.observer), t?.size === 0 && a.delete(e.query)
                    } else e.type === `removed` && a.delete(e.query)
                });
                let n = y();
                if (f == null || n?.normalizedAccountUserId !== f) return;
                let c = n.getWorkspaceId();
                if (c != null)
                    for (let t of [`app-configuration`, `impact`])
                        for (let n of e.findAll({
                                queryKey: F(t, c)
                            })) {
                            let e = a.get(n);
                            e ?? (e = new Map, a.set(n, e));
                            for (let t of n.observers) e.has(t) || e.set(t, {
                                workspaceUserId: f,
                                enabled: o(t, n)
                            });
                            l(n)
                        }
            }), () => {
                s = !1, n.off(`values_updated`, u), i?.()
            }
        }, {
            name: `adminPluginCKConfigurationReadTransport`
        })
    })),
    Q, Ee, De, $, Oe, ke = e((() => {
        j(), le(), C(), u(), me(), s(), M(), i(), l(), ne(), a(), v(), ce(), h(), f(), D(), N(), be(), Z(), Q = async ({
            connectorId: e,
            workspaceId: n,
            signal: r,
            includeActions: i,
            transport: a,
            forceFresh: o = !1
        }) => {
            if (a === `sheep`) return T(await _e({
                connectorId: e,
                workspaceId: n,
                signal: r,
                includeActions: i
            }));
            let s = {
                workspaceId: n,
                productSku: k.ADMIN_SETTING,
                authOption: S.Required,
                includeActions: i,
                applyEligibilityFilter: !0
            };
            if (o) {
                r.throwIfAborted();
                let t = await p(e, {
                    ...s,
                    signal: r
                });
                return r.throwIfAborted(), T(t)
            }
            r.throwIfAborted();
            let c = await ae(t(), e, {
                ...s,
                allowUnavailable: !0,
                staleTime: 0
            });
            return r.throwIfAborted(), T(c?.id === e ? c : await p(e, {
                ...s,
                signal: r
            }))
        }, Ee = async ({
            app: e,
            workspaceId: t,
            signal: r,
            ckTransport: i,
            ckWorkspaceUserId: a,
            exposeLegacyCKRead: o
        }) => {
            let s = e.primaryConnector.sync_metadata?.sync_status,
                c = s?.ksid;
            if (!(c == null || c.trim() === `` || s?.ks_status === `deleting` || s?.ks_status === `deleted`)) {
                r.throwIfAborted(), i === `legacy` && o && G(t, r);
                try {
                    let o = i === `sheep` ? await Se({
                        connectionId: c,
                        workspaceId: t,
                        workspaceUserId: a,
                        signal: r
                    }) : await O({
                        operation: `ck_connection`,
                        transport: `sa_server`,
                        workspaceId: t,
                        signal: r,
                        request: e => m.safeGet(`/ca/v2/admin/connection_instance/{connection_id}`, {
                            ...e,
                            authOption: S.Required,
                            signal: r,
                            additionalHeaders: {
                                ...n(t),
                                [x]: k.ADMIN_SETTING
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
                    r.throwIfAborted(), i === `sheep` && W(i, t, a, r);
                    let s = o.connection_config.knowledge_connector_type;
                    if (s == null || o.connection_config.connection_config_id !== c || o.connection_status === `deleting` || o.connection_status === `deleted` || P(s) !== e.primaryConnector.type) return;
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
                    if (r.throwIfAborted(), i === `sheep` && W(i, t, a, r), !(e instanceof b) || e.status !== 404) throw e
                }
            }
        }, De = async ({
            app: e,
            workspaceId: t,
            signal: r,
            ckTransport: i,
            ckWorkspaceUserId: a,
            exposeLegacyCKRead: s
        }) => {
            if (!(e.primaryConnector.type !== o.GDRIVE_ACTION_CONNECTOR || e.knowledgeConfig.length > 0)) {
                i === `legacy` && s && G(t, r);
                try {
                    let o = {
                            authOption: S.Required,
                            signal: r,
                            additionalHeaders: {
                                ...n(t),
                                [x]: k.ADMIN_SETTING
                            },
                            parameters: {
                                query: {
                                    account_id: t
                                }
                            }
                        },
                        [s, c] = i === `sheep` ? await Ce({
                            workspaceId: t,
                            workspaceUserId: a,
                            signal: r
                        }) : await Promise.all([O({
                            operation: `ck_connector_list`,
                            transport: `sa_server`,
                            workspaceId: t,
                            signal: r,
                            request: e => m.safeGet(`/ca/v2/admin/list_knowledge_connectors`, {
                                ...o,
                                ...e
                            })
                        }), O({
                            operation: `ck_connection_list`,
                            transport: `sa_server`,
                            workspaceId: t,
                            signal: r,
                            request: e => m.safeGet(`/ca/v2/admin/list_connection_instances`, {
                                ...o,
                                ...e
                            })
                        })]);
                    r.throwIfAborted(), i === `sheep` && W(i, t, a, r);
                    for (let t of s.knowledge_conectors) {
                        let n = t.connector_details,
                            r = n.knowledge_connector_type;
                        P(r) === e.primaryConnector.type && e.knowledgeConfig.push({
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
                        if (n == null || t.connection_status === `deleting` || t.connection_status === `deleted` || P(n) !== e.primaryConnector.type) continue;
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
                } catch (n) {
                    if (r.throwIfAborted(), i === `sheep` && W(i, t, a, r), n instanceof b && n.status === 404 && e.primaryConnector.sync_metadata?.sync_status == null) return;
                    throw n
                }
            }
        }, $ = async ({
            appId: e,
            directoryApp: t,
            workspaceId: n,
            signal: r,
            purpose: i = `configuration`,
            transport: a = `legacy`,
            ckTransport: o,
            ckWorkspaceUserId: s = y()?.normalizedAccountUserId
        }) => {
            if (n === `` || e === ``) throw Error(`A workspace and app are required to configure a plugin.`);
            let l = o ?? `legacy`,
                u = t != null && g(t.id, e) ? t.id : e,
                d = se(u),
                f;
            try {
                f = await Q({
                    connectorId: u,
                    workspaceId: n,
                    signal: r,
                    includeActions: i === `attention`,
                    transport: a,
                    forceFresh: i === `reconciliation`
                })
            } catch (e) {
                if (!(e instanceof b) || e.status !== 404 || d == null) throw e;
                f = await Q({
                    connectorId: d,
                    workspaceId: n,
                    signal: r,
                    includeActions: i === `attention`,
                    transport: a,
                    forceFresh: i === `reconciliation`
                })
            }
            if (i === `reconciliation` && f.status == null) throw Error(`The connector status is missing from the publish reconciliation response.`);
            if (ue.has(c(f.id)) || f.labels?.admin_only_connector === `true`) throw Error(`This app cannot be configured from plugin administration.`);
            let p = {
                    ...f,
                    name: f.name || t?.name || u,
                    status: f.status ?? t?.status ?? void 0,
                    type: te[f.id] ?? (f.connector_type === `MCP` ? oe.MCP_CONNECTOR : f.connector_type)
                },
                m = {
                    primaryConnector: p,
                    relatedConnectors: [],
                    knowledgeConfig: [],
                    searchKeys: [p.name.toLocaleLowerCase()]
                },
                h = ge(m);
            return h != null && m.knowledgeConfig.push(h), i === `configuration` && (o !== void 0 && W(o, n, s, r), await Ee({
                app: m,
                workspaceId: n,
                signal: r,
                ckTransport: l,
                ckWorkspaceUserId: s,
                exposeLegacyCKRead: o !== void 0
            }), await De({
                app: m,
                workspaceId: n,
                signal: r,
                ckTransport: l,
                ckWorkspaceUserId: s,
                exposeLegacyCKRead: o !== void 0
            }), o !== void 0 && W(o, n, s, r)), a === `sheep` && I(a, n, r), m
        }, Oe = ({
            appId: e,
            directoryApp: t,
            workspaceId: n,
            purpose: r = `configuration`,
            transport: i = ve(),
            reconciliationRequestId: a,
            reconciliationWorkspaceUserId: o,
            ckTransport: s = r === `configuration` ? z() : `legacy`
        }) => {
            let c = s === `sheep` ? y()?.normalizedAccountUserId : void 0;
            return de({
                queryKey: F(`app-configuration`, n, t != null && g(t.id, e) ? t.id : e, ...r === `configuration` ? [] : r === `reconciliation` ? [r, o ?? null, a ?? null] : [r], ...i === `sheep` ? [`sheep`] : [], ...r === `configuration` && s === `sheep` ? [`ck-sheep`, c] : []),
                enabled: n !== `` && e !== `` && (r !== `reconciliation` || a != null && a !== `` && o != null && o !== `` && y()?.normalizedAccountUserId === o),
                staleTime: r === `reconciliation` ? 0 : he,
                queryFn: async ({
                    signal: l
                }) => {
                    if (r === `reconciliation` && (a == null || a === `` || o == null || o === `` || y()?.normalizedAccountUserId !== o)) throw new E({
                        revert: !0
                    });
                    r === `configuration` && W(s, n, c, l), I(i, n, l), n !== `` && e !== `` && ye(i, n, l);
                    let u = await $({
                        appId: e,
                        directoryApp: t,
                        workspaceId: n,
                        signal: l,
                        purpose: r,
                        transport: i,
                        ckTransport: s,
                        ckWorkspaceUserId: c
                    });
                    if (r === `reconciliation` && y()?.normalizedAccountUserId !== o) throw new E({
                        revert: !0
                    });
                    return u
                }
            })
        }
    }));
export {
    W as a, L as c, xe as d, z as f, Te as i, Z as l, Oe as n, B as o, ke as r, U as s, $ as t, V as u
};
//# sourceMappingURL=bb6515d2-b318rq40s8sslcbs.js.map