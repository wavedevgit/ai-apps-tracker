import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $E as t,
    A8 as n,
    Aat as r,
    Eat as i,
    GE as a,
    Iv as o,
    J7 as s,
    JE as c,
    Jat as l,
    Jst as u,
    L5 as d,
    LE as f,
    Q7 as p,
    R5 as m,
    RE as h,
    SK as g,
    Sv as ee,
    V1 as _,
    VE as v,
    XE as y,
    X_ as te,
    Y7 as ne,
    ZE as re,
    bct as b,
    drt as ie,
    eD as ae,
    ect as x,
    eot as oe,
    fat as S,
    hrt as se,
    k8 as ce,
    kat as C,
    lrt as w,
    mat as le,
    q1 as ue,
    xK as T
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    H as E,
    s as D,
    w as de
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FTn as O,
    Hwn as k,
    PTn as A,
    QCn as fe,
    Vwn as j,
    XCn as M,
    YCn as pe
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Dy as me,
    Nv as N,
    Pv as P,
    Sy as he,
    jv as ge,
    wy as F
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    a as _e,
    c as ve,
    n as I,
    r as ye,
    s as be
} from "./46464433-dwdz5ec7iqncacxe.js";

function xe(e, t) {
    Y.set(e, t)
}

function L(e) {
    return typeof e == `object` && !!e && Y.get(e) === !0
}

function R() {
    if (typeof window > `u`) return !1;
    let e = new URL(C, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function z() {
    return R() && w(X, {
        disableExposureLog: !0
    }) ? `sheep` : `legacy`
}

function B(e, t, n, r) {
    return V(r) ? U(e, t, n) : r != null && H(e, t, n)
}

function V(e) {
    let t = e?.primaryConnector.sync_metadata?.sync_status,
        n = t?.ksid != null && t.ksid.trim() !== `` && t.ks_status !== `deleting` && t.ks_status !== `deleted`;
    return e != null && (n || e.primaryConnector.type === x.GDRIVE_ACTION_CONNECTOR)
}

function H(e, t, n) {
    return n != null && _()?.normalizedAccountUserId === n && M(t) && e === z()
}

function U(e, t, n) {
    return H(e, t, n) ? !R() || (w(X) ? `sheep` : `legacy`) === e : !1
}

function W(e, t, n, r) {
    if (r.throwIfAborted(), e === `legacy`) {
        if (e !== z()) throw new E({
            revert: !0
        });
        return
    }
    if (pe(t), n == null || _()?.normalizedAccountUserId !== n || e !== z()) throw new E({
        revert: !0
    })
}

function G(e, t) {
    if (t.throwIfAborted(), !(!R() || !M(e)) && w(X)) throw new E({
        revert: !0
    })
}

function K() {
    return we ??= new ne({
        baseUrl: C.replace(/\/$/, ``),
        targetRoutesAreCanonical: !0
    }), we
}

function q(e, t) {
    return {
        authOption: i.Required,
        signal: t,
        additionalHeaders: {
            ...T(e),
            [S]: A.ADMIN_SETTING,
            "x-openai-use-sheep": `1`
        }
    }
}

function J(e, t, n) {
    if (W(`sheep`, e, t, n), !w(X)) throw new E({
        revert: !0
    })
}
async function Se({
    connectionId: e,
    workspaceId: t,
    workspaceUserId: n,
    signal: r
}) {
    return await k({
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
        i = await Promise.all([k({
            operation: `ck_connector_list`,
            transport: `sheep`,
            workspaceId: e,
            signal: n,
            request: e => K().safeGet(`/ca/v2/admin/list_knowledge_connectors`, {
                ...r,
                ...e
            })
        }), k({
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
        j(), g(), b(), O(), ce(), ue(), r(), le(), m(), p(), se(), D(), fe(), P(), Y = new WeakMap, X = `1938127654`, Te = n(z, e => {
            let t = ie(),
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
                        if (typeof e != `object` || !e || !(`workspaceUserId` in e) || e.workspaceUserId !== a || !L(n?.getQueryData(o))) return;
                        U(o.includes(`ck-sheep`) ? `sheep` : `legacy`, r, a);
                        return
                    }
                    if (o.includes(`attention`)) return;
                    let s = o.indexOf(`ck-sheep`),
                        c = s < 0 ? `legacy` : `sheep`;
                    c === `sheep` && o[s + 1] !== a || B(c, r, a, n?.getQueryData(o))
                },
                l = () => {
                    e(), !s && (s = !0, queueMicrotask(() => {
                        if (s = !1, !o) return;
                        let e = _()?.getWorkspaceId(),
                            t = n?.getQueryCache();
                        if (!(e == null || t == null))
                            for (let n of [`app-configuration`, `impact`])
                                for (let r of t.findAll({
                                        queryKey: N(n, e),
                                        type: `active`
                                    })) c(r)
                    }))
                };
            t.on(`values_updated`, l);
            let u = _()?.normalizedAccountUserId;
            return queueMicrotask(() => {
                if (!o) return;
                n = d();
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
                                queryKey: N(t, s)
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
    Q, Ee, De, $, Oe, ke = e((() => {
        j(), g(), b(), ae(), me(), o(), O(), v(), c(), r(), oe(), le(), m(), p(), ue(), D(), P(), be(), Z(), Q = async ({
            connectorId: e,
            workspaceId: t,
            signal: n,
            includeActions: r,
            transport: o,
            forceFresh: s = !1
        }) => {
            if (o === `sheep`) return a(await _e({
                connectorId: e,
                workspaceId: t,
                signal: n,
                includeActions: r
            }));
            let c = {
                workspaceId: t,
                productSku: A.ADMIN_SETTING,
                authOption: i.Required,
                includeActions: r,
                applyEligibilityFilter: !0
            };
            if (s) {
                n.throwIfAborted();
                let t = await h(e, {
                    ...c,
                    signal: n
                });
                return n.throwIfAborted(), a(t)
            }
            n.throwIfAborted();
            let l = await f(d(), e, {
                ...c,
                allowUnavailable: !0,
                staleTime: 0
            });
            return n.throwIfAborted(), a(l?.id === e ? l : await h(e, {
                ...c,
                signal: n
            }))
        }, Ee = async ({
            app: e,
            workspaceId: t,
            signal: n,
            ckTransport: r,
            ckWorkspaceUserId: a,
            exposeLegacyCKRead: o
        }) => {
            let c = e.primaryConnector.sync_metadata?.sync_status,
                u = c?.ksid;
            if (!(u == null || u.trim() === `` || c?.ks_status === `deleting` || c?.ks_status === `deleted`)) {
                n.throwIfAborted(), r === `legacy` && o && G(t, n);
                try {
                    let o = r === `sheep` ? await Se({
                        connectionId: u,
                        workspaceId: t,
                        workspaceUserId: a,
                        signal: n
                    }) : await k({
                        operation: `ck_connection`,
                        transport: `sa_server`,
                        workspaceId: t,
                        signal: n,
                        request: e => s.safeGet(`/ca/v2/admin/connection_instance/{connection_id}`, {
                            ...e,
                            authOption: i.Required,
                            signal: n,
                            additionalHeaders: {
                                ...T(t),
                                [S]: A.ADMIN_SETTING
                            },
                            parameters: {
                                path: {
                                    connection_id: u
                                },
                                query: {
                                    account_id: t
                                }
                            }
                        })
                    });
                    n.throwIfAborted(), r === `sheep` && W(r, t, a, n);
                    let c = o.connection_config.knowledge_connector_type;
                    if (c == null || o.connection_config.connection_config_id !== u || o.connection_status === `deleting` || o.connection_status === `deleted` || F(c) !== e.primaryConnector.type) return;
                    let l = e.knowledgeConfig.find(e => e.key === c);
                    if (l != null) {
                        l.connections.push(o);
                        return
                    }
                    e.knowledgeConfig.push({
                        key: c,
                        availability: `available`,
                        connections: [o],
                        limits: {
                            max_instances: 1
                        }
                    })
                } catch (e) {
                    if (n.throwIfAborted(), r === `sheep` && W(r, t, a, n), !(e instanceof l) || e.status !== 404) throw e
                }
            }
        }, De = async ({
            app: e,
            workspaceId: t,
            signal: n,
            ckTransport: r,
            ckWorkspaceUserId: a,
            exposeLegacyCKRead: o
        }) => {
            if (!(e.primaryConnector.type !== x.GDRIVE_ACTION_CONNECTOR || e.knowledgeConfig.length > 0)) {
                r === `legacy` && o && G(t, n);
                try {
                    let o = {
                            authOption: i.Required,
                            signal: n,
                            additionalHeaders: {
                                ...T(t),
                                [S]: A.ADMIN_SETTING
                            },
                            parameters: {
                                query: {
                                    account_id: t
                                }
                            }
                        },
                        [c, l] = r === `sheep` ? await Ce({
                            workspaceId: t,
                            workspaceUserId: a,
                            signal: n
                        }) : await Promise.all([k({
                            operation: `ck_connector_list`,
                            transport: `sa_server`,
                            workspaceId: t,
                            signal: n,
                            request: e => s.safeGet(`/ca/v2/admin/list_knowledge_connectors`, {
                                ...o,
                                ...e
                            })
                        }), k({
                            operation: `ck_connection_list`,
                            transport: `sa_server`,
                            workspaceId: t,
                            signal: n,
                            request: e => s.safeGet(`/ca/v2/admin/list_connection_instances`, {
                                ...o,
                                ...e
                            })
                        })]);
                    n.throwIfAborted(), r === `sheep` && W(r, t, a, n);
                    for (let t of c.knowledge_conectors) {
                        let n = t.connector_details,
                            r = n.knowledge_connector_type;
                        F(r) === e.primaryConnector.type && e.knowledgeConfig.push({
                            key: r,
                            availability: n.availability,
                            limits: n.limits ?? {
                                max_instances: 3
                            },
                            connections: l.connection_instances.filter(e => e.connection_config.knowledge_connector_type === r && e.connection_status !== `deleting` && e.connection_status !== `deleted`)
                        })
                    }
                    for (let t of l.connection_instances) {
                        let n = t.connection_config.knowledge_connector_type;
                        if (n == null || t.connection_status === `deleting` || t.connection_status === `deleted` || F(n) !== e.primaryConnector.type) continue;
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
                } catch (i) {
                    if (n.throwIfAborted(), r === `sheep` && W(r, t, a, n), i instanceof l && i.status === 404 && e.primaryConnector.sync_metadata?.sync_status == null) return;
                    throw i
                }
            }
        }, $ = async ({
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
            let d = s ?? `legacy`,
                f = n != null && y(n.id, e) ? n.id : e,
                p = t(f),
                m;
            try {
                m = await Q({
                    connectorId: f,
                    workspaceId: r,
                    signal: i,
                    includeActions: a === `attention`,
                    transport: o,
                    forceFresh: a === `reconciliation`
                })
            } catch (e) {
                if (!(e instanceof l) || e.status !== 404 || p == null) throw e;
                m = await Q({
                    connectorId: p,
                    workspaceId: r,
                    signal: i,
                    includeActions: a === `attention`,
                    transport: o,
                    forceFresh: a === `reconciliation`
                })
            }
            if (a === `reconciliation` && m.status == null) throw Error(`The connector status is missing from the publish reconciliation response.`);
            if (ee.has(re(m.id)) || m.labels?.admin_only_connector === `true`) throw Error(`This app cannot be configured from plugin administration.`);
            let h = {
                    ...m,
                    name: m.name || n?.name || f,
                    status: m.status ?? n?.status ?? void 0,
                    type: te[m.id] ?? (m.connector_type === `MCP` ? u.MCP_CONNECTOR : m.connector_type)
                },
                g = {
                    primaryConnector: h,
                    relatedConnectors: [],
                    knowledgeConfig: [],
                    searchKeys: [h.name.toLocaleLowerCase()]
                },
                v = he(g);
            return v != null && g.knowledgeConfig.push(v), a === `configuration` && (s !== void 0 && W(s, r, c, i), await Ee({
                app: g,
                workspaceId: r,
                signal: i,
                ckTransport: d,
                ckWorkspaceUserId: c,
                exposeLegacyCKRead: s !== void 0
            }), await De({
                app: g,
                workspaceId: r,
                signal: i,
                ckTransport: d,
                ckWorkspaceUserId: c,
                exposeLegacyCKRead: s !== void 0
            }), s !== void 0 && W(s, r, c, i)), o === `sheep` && I(o, r, i), g
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
            let c = s === `sheep` ? _()?.normalizedAccountUserId : void 0;
            return de({
                queryKey: N(`app-configuration`, n, t != null && y(t.id, e) ? t.id : e, ...r === `configuration` ? [] : r === `reconciliation` ? [r, o ?? null, a ?? null] : [r], ...i === `sheep` ? [`sheep`] : [], ...r === `configuration` && s === `sheep` ? [`ck-sheep`, c] : []),
                enabled: n !== `` && e !== `` && (r !== `reconciliation` || a != null && a !== `` && o != null && o !== `` && _()?.normalizedAccountUserId === o),
                staleTime: r === `reconciliation` ? 0 : ge,
                queryFn: async ({
                    signal: l
                }) => {
                    if (r === `reconciliation` && (a == null || a === `` || o == null || o === `` || _()?.normalizedAccountUserId !== o)) throw new E({
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
                    if (r === `reconciliation` && _()?.normalizedAccountUserId !== o) throw new E({
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
//# sourceMappingURL=bb6515d2-hwmle41oh26wasp7.js.map