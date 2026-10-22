import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $E as t,
    A8 as n,
    Dat as r,
    GE as i,
    Iv as a,
    J7 as o,
    JE as s,
    Kat as c,
    Kst as l,
    L5 as u,
    LE as d,
    Oat as f,
    Q7 as p,
    Qat as m,
    Qst as h,
    R5 as g,
    RE as _,
    SK as v,
    Sv as ee,
    V1 as y,
    VE as te,
    XE as ne,
    X_ as re,
    Y7 as ie,
    ZE as ae,
    eD as oe,
    fat as b,
    k8 as se,
    lrt as ce,
    prt as le,
    q1 as x,
    srt as S,
    uat as C,
    vct as ue,
    wat as w,
    xK as T
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    H as E,
    s as de,
    w as fe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FCn as pe,
    MCn as me,
    NCn as D,
    Twn as O,
    _Tn as k,
    vTn as A,
    wwn as j
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Dy as he,
    Nv as M,
    Pv as N,
    Sy as ge,
    jv as _e,
    wy as P
} from "./c2675c8c-d62p1sdq1sy52umm.js";
import {
    a as ve,
    c as ye,
    n as F,
    r as be,
    s as xe
} from "./46464433-gd4l72ulldog8da4.js";

function Se(e, t) {
    J.set(e, t)
}

function I(e) {
    return typeof e == `object` && !!e && J.get(e) === !0
}

function L() {
    if (typeof window > `u`) return !1;
    let e = new URL(r, window.location.href);
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
    return e != null && (n || e.primaryConnector.type === h.GDRIVE_ACTION_CONNECTOR)
}

function V(e, t, n) {
    return n != null && y()?.normalizedAccountUserId === n && D(t) && e === R()
}

function H(e, t, n) {
    return V(e, t, n) ? !L() || (S(Y) ? `sheep` : `legacy`) === e : !1
}

function U(e, t, n, r) {
    if (r.throwIfAborted(), e === `legacy`) {
        if (e !== R()) throw new E({
            revert: !0
        });
        return
    }
    if (me(t), n == null || y()?.normalizedAccountUserId !== n || e !== R()) throw new E({
        revert: !0
    })
}

function W(e, t) {
    if (t.throwIfAborted(), !(!L() || !D(e)) && S(Y)) throw new E({
        revert: !0
    })
}

function G() {
    return Te ??= new ie({
        baseUrl: r.replace(/\/$/, ``),
        targetRoutesAreCanonical: !0
    }), Te
}

function K(e, t) {
    return {
        authOption: w.Required,
        signal: t,
        additionalHeaders: {
            ...T(e),
            [C]: k.ADMIN_SETTING,
            "x-openai-use-sheep": `1`
        }
    }
}

function q(e, t, n) {
    if (U(`sheep`, e, t, n), !S(Y)) throw new E({
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
        j(), v(), ue(), A(), se(), x(), f(), b(), g(), p(), le(), de(), pe(), N(), J = new WeakMap, Y = `1938127654`, Ee = n(R, e => {
            let t = ce(),
                n, r, i = new Map,
                a = (e, t) => {
                    let n = e.options.enabled;
                    return (typeof n == `function` ? n(t) : n) !== !1
                },
                o = !0,
                s = !1,
                c = e => {
                    let t = y(),
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
                        let e = y()?.getWorkspaceId(),
                            t = n?.getQueryCache();
                        if (!(e == null || t == null))
                            for (let n of [`app-configuration`, `impact`])
                                for (let r of t.findAll({
                                        queryKey: M(n, e),
                                        type: `active`
                                    })) c(r)
                    }))
                };
            t.on(`values_updated`, l);
            let d = y()?.normalizedAccountUserId;
            return queueMicrotask(() => {
                if (!o) return;
                n = u();
                let e = n.getQueryCache();
                r = e.subscribe(e => {
                    if (!(e.query.queryKey[0] !== `plugin-admin-v2` || e.query.queryKey[1] !== `app-configuration` && e.query.queryKey[1] !== `impact`))
                        if (e.type === `observerAdded`) {
                            let t = y()?.normalizedAccountUserId;
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
                let t = y();
                if (d == null || t?.normalizedAccountUserId !== d) return;
                let s = t.getWorkspaceId();
                if (s != null)
                    for (let t of [`app-configuration`, `impact`])
                        for (let n of e.findAll({
                                queryKey: M(t, s)
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
        j(), v(), ue(), oe(), he(), a(), A(), te(), s(), f(), m(), b(), g(), p(), x(), de(), N(), xe(), X(), Z = async ({
            connectorId: e,
            workspaceId: t,
            signal: n,
            includeActions: r,
            transport: a,
            forceFresh: o = !1
        }) => {
            if (a === `sheep`) return i(await ve({
                connectorId: e,
                workspaceId: t,
                signal: n,
                includeActions: r
            }));
            let s = {
                workspaceId: t,
                productSku: k.ADMIN_SETTING,
                authOption: w.Required,
                includeActions: r,
                applyEligibilityFilter: !0
            };
            if (o) {
                n.throwIfAborted();
                let t = await _(e, {
                    ...s,
                    signal: n
                });
                return n.throwIfAborted(), i(t)
            }
            n.throwIfAborted();
            let c = await d(u(), e, {
                ...s,
                allowUnavailable: !0,
                staleTime: 0
            });
            return n.throwIfAborted(), i(c?.id === e ? c : await _(e, {
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
            let s = e.primaryConnector.sync_metadata?.sync_status,
                l = s?.ksid;
            if (!(l == null || l.trim() === `` || s?.ks_status === `deleting` || s?.ks_status === `deleted`)) {
                n.throwIfAborted(), r === `legacy` && a && W(t, n);
                try {
                    let a = r === `sheep` ? await Ce({
                        connectionId: l,
                        workspaceId: t,
                        workspaceUserId: i,
                        signal: n
                    }) : await O({
                        operation: `ck_connection`,
                        transport: `sa_server`,
                        workspaceId: t,
                        signal: n,
                        request: e => o.safeGet(`/ca/v2/admin/connection_instance/{connection_id}`, {
                            ...e,
                            authOption: w.Required,
                            signal: n,
                            additionalHeaders: {
                                ...T(t),
                                [C]: k.ADMIN_SETTING
                            },
                            parameters: {
                                path: {
                                    connection_id: l
                                },
                                query: {
                                    account_id: t
                                }
                            }
                        })
                    });
                    n.throwIfAborted(), r === `sheep` && U(r, t, i, n);
                    let s = a.connection_config.knowledge_connector_type;
                    if (s == null || a.connection_config.connection_config_id !== l || a.connection_status === `deleting` || a.connection_status === `deleted` || P(s) !== e.primaryConnector.type) return;
                    let c = e.knowledgeConfig.find(e => e.key === s);
                    if (c != null) {
                        c.connections.push(a);
                        return
                    }
                    e.knowledgeConfig.push({
                        key: s,
                        availability: `available`,
                        connections: [a],
                        limits: {
                            max_instances: 1
                        }
                    })
                } catch (e) {
                    if (n.throwIfAborted(), r === `sheep` && U(r, t, i, n), !(e instanceof c) || e.status !== 404) throw e
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
            if (!(e.primaryConnector.type !== h.GDRIVE_ACTION_CONNECTOR || e.knowledgeConfig.length > 0)) {
                r === `legacy` && a && W(t, n);
                try {
                    let a = {
                            authOption: w.Required,
                            signal: n,
                            additionalHeaders: {
                                ...T(t),
                                [C]: k.ADMIN_SETTING
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
                            request: e => o.safeGet(`/ca/v2/admin/list_knowledge_connectors`, {
                                ...a,
                                ...e
                            })
                        }), O({
                            operation: `ck_connection_list`,
                            transport: `sa_server`,
                            workspaceId: t,
                            signal: n,
                            request: e => o.safeGet(`/ca/v2/admin/list_connection_instances`, {
                                ...a,
                                ...e
                            })
                        })]);
                    n.throwIfAborted(), r === `sheep` && U(r, t, i, n);
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
                } catch (a) {
                    if (n.throwIfAborted(), r === `sheep` && U(r, t, i, n), a instanceof c && a.status === 404 && e.primaryConnector.sync_metadata?.sync_status == null) return;
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
            ckWorkspaceUserId: u = y()?.normalizedAccountUserId
        }) => {
            if (r === `` || e === ``) throw Error(`A workspace and app are required to configure a plugin.`);
            let d = s ?? `legacy`,
                f = n != null && ne(n.id, e) ? n.id : e,
                p = t(f),
                m;
            try {
                m = await Z({
                    connectorId: f,
                    workspaceId: r,
                    signal: i,
                    includeActions: a === `attention`,
                    transport: o,
                    forceFresh: a === `reconciliation`
                })
            } catch (e) {
                if (!(e instanceof c) || e.status !== 404 || p == null) throw e;
                m = await Z({
                    connectorId: p,
                    workspaceId: r,
                    signal: i,
                    includeActions: a === `attention`,
                    transport: o,
                    forceFresh: a === `reconciliation`
                })
            }
            if (a === `reconciliation` && m.status == null) throw Error(`The connector status is missing from the publish reconciliation response.`);
            if (ee.has(ae(m.id)) || m.labels?.admin_only_connector === `true`) throw Error(`This app cannot be configured from plugin administration.`);
            let h = {
                    ...m,
                    name: m.name || n?.name || f,
                    status: m.status ?? n?.status ?? void 0,
                    type: re[m.id] ?? (m.connector_type === `MCP` ? l.MCP_CONNECTOR : m.connector_type)
                },
                g = {
                    primaryConnector: h,
                    relatedConnectors: [],
                    knowledgeConfig: [],
                    searchKeys: [h.name.toLocaleLowerCase()]
                },
                _ = ge(g);
            return _ != null && g.knowledgeConfig.push(_), a === `configuration` && (s !== void 0 && U(s, r, u, i), await De({
                app: g,
                workspaceId: r,
                signal: i,
                ckTransport: d,
                ckWorkspaceUserId: u,
                exposeLegacyCKRead: s !== void 0
            }), await Oe({
                app: g,
                workspaceId: r,
                signal: i,
                ckTransport: d,
                ckWorkspaceUserId: u,
                exposeLegacyCKRead: s !== void 0
            }), s !== void 0 && U(s, r, u, i)), o === `sheep` && F(o, r, i), g
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
            let c = s === `sheep` ? y()?.normalizedAccountUserId : void 0;
            return fe({
                queryKey: M(`app-configuration`, n, t != null && ne(t.id, e) ? t.id : e, ...r === `configuration` ? [] : r === `reconciliation` ? [r, o ?? null, a ?? null] : [r], ...i === `sheep` ? [`sheep`] : [], ...r === `configuration` && s === `sheep` ? [`ck-sheep`, c] : []),
                enabled: n !== `` && e !== `` && (r !== `reconciliation` || a != null && a !== `` && o != null && o !== `` && y()?.normalizedAccountUserId === o),
                staleTime: r === `reconciliation` ? 0 : _e,
                queryFn: async ({
                    signal: l
                }) => {
                    if (r === `reconciliation` && (a == null || a === `` || o == null || o === `` || y()?.normalizedAccountUserId !== o)) throw new E({
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
                    if (r === `reconciliation` && y()?.normalizedAccountUserId !== o) throw new E({
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
//# sourceMappingURL=bb6515d2-iuk1lza49mcuetnf.js.map