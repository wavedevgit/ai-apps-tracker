import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BE as t,
    Bat as n,
    Bst as r,
    F7 as i,
    Fv as a,
    GE as o,
    I7 as s,
    IE as c,
    JE as l,
    KE as u,
    M1 as d,
    ME as f,
    NE as p,
    Pat as m,
    Pst as ee,
    Qit as h,
    R1 as g,
    T5 as _,
    TK as v,
    UE as y,
    YE as te,
    Y_ as ne,
    Ynt as b,
    Znt as re,
    _8 as ie,
    eat as x,
    fat as S,
    g8 as ae,
    gat as C,
    hat as w,
    oct as T,
    trt as oe,
    w5 as se,
    wK as E,
    xv as ce,
    z7 as le
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    H as D,
    s as ue,
    w as de
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    _Cn as fe,
    bCn as pe,
    dwn as O,
    iTn as k,
    rTn as A,
    uwn as j,
    vCn as M
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    Av as N,
    Cy as me,
    Dv as he,
    by as P,
    kv as F,
    vy as ge
} from "./c2675c8c-h5ybkhdzcoblzzdu.js";
import {
    a as _e,
    c as ve,
    n as I,
    r as ye,
    s as be
} from "./46464433-b4z87wdb48pj3s0b.js";

function xe(e, t) {
    J.set(e, t)
}

function L(e) {
    return typeof e == `object` && !!e && J.get(e) === !0
}

function R() {
    if (typeof window > `u`) return !1;
    let e = new URL(w, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function z() {
    return R() && b(Y, {
        disableExposureLog: !0
    }) ? `sheep` : `legacy`
}

function B(e, t, n, r) {
    return V(r) ? U(e, t, n) : r != null && H(e, t, n)
}

function V(e) {
    let t = e?.primaryConnector.sync_metadata?.sync_status,
        n = t?.ksid != null && t.ksid.trim() !== `` && t.ks_status !== `deleting` && t.ks_status !== `deleted`;
    return e != null && (n || e.primaryConnector.type === r.GDRIVE_ACTION_CONNECTOR)
}

function H(e, t, n) {
    return n != null && d()?.normalizedAccountUserId === n && M(t) && e === z()
}

function U(e, t, n) {
    return H(e, t, n) ? !R() || (b(Y) ? `sheep` : `legacy`) === e : !1
}

function W(e, t, n, r) {
    if (r.throwIfAborted(), e === `legacy`) {
        if (e !== z()) throw new D({
            revert: !0
        });
        return
    }
    if (fe(t), n == null || d()?.normalizedAccountUserId !== n || e !== z()) throw new D({
        revert: !0
    })
}

function G(e, t) {
    if (t.throwIfAborted(), !(!R() || !M(e)) && b(Y)) throw new D({
        revert: !0
    })
}

function K() {
    return Te ??= new s({
        baseUrl: w.replace(/\/$/, ``),
        targetRoutesAreCanonical: !0
    }), Te
}

function q(e, t) {
    return {
        authOption: S.Required,
        signal: t,
        additionalHeaders: {
            ...E(e),
            [h]: A.ADMIN_SETTING,
            "x-openai-use-sheep": `1`
        }
    }
}

function Se(e, t, n) {
    if (W(`sheep`, e, t, n), !b(Y)) throw new D({
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
            Se(t, n, r);
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
async function we({
    workspaceId: e,
    workspaceUserId: t,
    signal: n
}) {
    Se(e, t, n);
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
var J, Y, Te, Ee, X = e((() => {
        j(), v(), T(), k(), ae(), g(), C(), x(), _(), le(), oe(), ue(), pe(), N(), J = new WeakMap, Y = `1938127654`, Ee = ie(z, e => {
            let t = re(),
                n, r, i = new Map,
                a = (e, t) => {
                    let n = e.options.enabled;
                    return (typeof n == `function` ? n(t) : n) !== !1
                },
                o = !0,
                s = !1,
                c = e => {
                    let t = d(),
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
                        let e = d()?.getWorkspaceId(),
                            t = n?.getQueryCache();
                        if (!(e == null || t == null))
                            for (let n of [`app-configuration`, `impact`])
                                for (let r of t.findAll({
                                        queryKey: F(n, e),
                                        type: `active`
                                    })) c(r)
                    }))
                };
            t.on(`values_updated`, l);
            let u = d()?.normalizedAccountUserId;
            return queueMicrotask(() => {
                if (!o) return;
                n = se();
                let e = n.getQueryCache();
                r = e.subscribe(e => {
                    if (!(e.query.queryKey[0] !== `plugin-admin-v2` || e.query.queryKey[1] !== `app-configuration` && e.query.queryKey[1] !== `impact`))
                        if (e.type === `observerAdded`) {
                            let t = d()?.normalizedAccountUserId;
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
                let t = d();
                if (u == null || t?.normalizedAccountUserId !== u) return;
                let s = t.getWorkspaceId();
                if (s != null)
                    for (let t of [`app-configuration`, `impact`])
                        for (let n of e.findAll({
                                queryKey: F(t, s)
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
        j(), v(), T(), te(), me(), a(), k(), c(), y(), C(), n(), x(), _(), le(), g(), ue(), N(), be(), X(), Z = async ({
            connectorId: e,
            workspaceId: n,
            signal: r,
            includeActions: i,
            transport: a,
            forceFresh: o = !1
        }) => {
            if (a === `sheep`) return t(await _e({
                connectorId: e,
                workspaceId: n,
                signal: r,
                includeActions: i
            }));
            let s = {
                workspaceId: n,
                productSku: A.ADMIN_SETTING,
                authOption: S.Required,
                includeActions: i,
                applyEligibilityFilter: !0
            };
            if (o) {
                r.throwIfAborted();
                let n = await p(e, {
                    ...s,
                    signal: r
                });
                return r.throwIfAborted(), t(n)
            }
            r.throwIfAborted();
            let c = await f(se(), e, {
                ...s,
                allowUnavailable: !0,
                staleTime: 0
            });
            return r.throwIfAborted(), t(c?.id === e ? c : await p(e, {
                ...s,
                signal: r
            }))
        }, De = async ({
            app: e,
            workspaceId: t,
            signal: n,
            ckTransport: r,
            ckWorkspaceUserId: a,
            exposeLegacyCKRead: o
        }) => {
            let s = e.primaryConnector.sync_metadata?.sync_status,
                c = s?.ksid;
            if (!(c == null || c.trim() === `` || s?.ks_status === `deleting` || s?.ks_status === `deleted`)) {
                n.throwIfAborted(), r === `legacy` && o && G(t, n);
                try {
                    let o = r === `sheep` ? await Ce({
                        connectionId: c,
                        workspaceId: t,
                        workspaceUserId: a,
                        signal: n
                    }) : await O({
                        operation: `ck_connection`,
                        transport: `sa_server`,
                        workspaceId: t,
                        signal: n,
                        request: e => i.safeGet(`/ca/v2/admin/connection_instance/{connection_id}`, {
                            ...e,
                            authOption: S.Required,
                            signal: n,
                            additionalHeaders: {
                                ...E(t),
                                [h]: A.ADMIN_SETTING
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
                    n.throwIfAborted(), r === `sheep` && W(r, t, a, n);
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
                    if (n.throwIfAborted(), r === `sheep` && W(r, t, a, n), !(e instanceof m) || e.status !== 404) throw e
                }
            }
        }, Oe = async ({
            app: e,
            workspaceId: t,
            signal: n,
            ckTransport: a,
            ckWorkspaceUserId: o,
            exposeLegacyCKRead: s
        }) => {
            if (!(e.primaryConnector.type !== r.GDRIVE_ACTION_CONNECTOR || e.knowledgeConfig.length > 0)) {
                a === `legacy` && s && G(t, n);
                try {
                    let r = {
                            authOption: S.Required,
                            signal: n,
                            additionalHeaders: {
                                ...E(t),
                                [h]: A.ADMIN_SETTING
                            },
                            parameters: {
                                query: {
                                    account_id: t
                                }
                            }
                        },
                        [s, c] = a === `sheep` ? await we({
                            workspaceId: t,
                            workspaceUserId: o,
                            signal: n
                        }) : await Promise.all([O({
                            operation: `ck_connector_list`,
                            transport: `sa_server`,
                            workspaceId: t,
                            signal: n,
                            request: e => i.safeGet(`/ca/v2/admin/list_knowledge_connectors`, {
                                ...r,
                                ...e
                            })
                        }), O({
                            operation: `ck_connection_list`,
                            transport: `sa_server`,
                            workspaceId: t,
                            signal: n,
                            request: e => i.safeGet(`/ca/v2/admin/list_connection_instances`, {
                                ...r,
                                ...e
                            })
                        })]);
                    n.throwIfAborted(), a === `sheep` && W(a, t, o, n);
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
                } catch (r) {
                    if (n.throwIfAborted(), a === `sheep` && W(a, t, o, n), r instanceof m && r.status === 404 && e.primaryConnector.sync_metadata?.sync_status == null) return;
                    throw r
                }
            }
        }, Q = async ({
            appId: e,
            directoryApp: t,
            workspaceId: n,
            signal: r,
            purpose: i = `configuration`,
            transport: a = `legacy`,
            ckTransport: s,
            ckWorkspaceUserId: c = d()?.normalizedAccountUserId
        }) => {
            if (n === `` || e === ``) throw Error(`A workspace and app are required to configure a plugin.`);
            let f = s ?? `legacy`,
                p = t != null && o(t.id, e) ? t.id : e,
                h = l(p),
                g;
            try {
                g = await Z({
                    connectorId: p,
                    workspaceId: n,
                    signal: r,
                    includeActions: i === `attention`,
                    transport: a,
                    forceFresh: i === `reconciliation`
                })
            } catch (e) {
                if (!(e instanceof m) || e.status !== 404 || h == null) throw e;
                g = await Z({
                    connectorId: h,
                    workspaceId: n,
                    signal: r,
                    includeActions: i === `attention`,
                    transport: a,
                    forceFresh: i === `reconciliation`
                })
            }
            if (i === `reconciliation` && g.status == null) throw Error(`The connector status is missing from the publish reconciliation response.`);
            if (ce.has(u(g.id)) || g.labels?.admin_only_connector === `true`) throw Error(`This app cannot be configured from plugin administration.`);
            let _ = {
                    ...g,
                    name: g.name || t?.name || p,
                    status: g.status ?? t?.status ?? void 0,
                    type: ne[g.id] ?? (g.connector_type === `MCP` ? ee.MCP_CONNECTOR : g.connector_type)
                },
                v = {
                    primaryConnector: _,
                    relatedConnectors: [],
                    knowledgeConfig: [],
                    searchKeys: [_.name.toLocaleLowerCase()]
                },
                y = ge(v);
            return y != null && v.knowledgeConfig.push(y), i === `configuration` && (s !== void 0 && W(s, n, c, r), await De({
                app: v,
                workspaceId: n,
                signal: r,
                ckTransport: f,
                ckWorkspaceUserId: c,
                exposeLegacyCKRead: s !== void 0
            }), await Oe({
                app: v,
                workspaceId: n,
                signal: r,
                ckTransport: f,
                ckWorkspaceUserId: c,
                exposeLegacyCKRead: s !== void 0
            }), s !== void 0 && W(s, n, c, r)), a === `sheep` && I(a, n, r), v
        }, $ = ({
            appId: e,
            directoryApp: t,
            workspaceId: n,
            purpose: r = `configuration`,
            transport: i = ve(),
            reconciliationRequestId: a,
            reconciliationWorkspaceUserId: s,
            ckTransport: c = r === `configuration` ? z() : `legacy`
        }) => {
            let l = c === `sheep` ? d()?.normalizedAccountUserId : void 0;
            return de({
                queryKey: F(`app-configuration`, n, t != null && o(t.id, e) ? t.id : e, ...r === `configuration` ? [] : r === `reconciliation` ? [r, s ?? null, a ?? null] : [r], ...i === `sheep` ? [`sheep`] : [], ...r === `configuration` && c === `sheep` ? [`ck-sheep`, l] : []),
                enabled: n !== `` && e !== `` && (r !== `reconciliation` || a != null && a !== `` && s != null && s !== `` && d()?.normalizedAccountUserId === s),
                staleTime: r === `reconciliation` ? 0 : he,
                queryFn: async ({
                    signal: o
                }) => {
                    if (r === `reconciliation` && (a == null || a === `` || s == null || s === `` || d()?.normalizedAccountUserId !== s)) throw new D({
                        revert: !0
                    });
                    r === `configuration` && W(c, n, l, o), I(i, n, o), n !== `` && e !== `` && ye(i, n, o);
                    let u = await Q({
                        appId: e,
                        directoryApp: t,
                        workspaceId: n,
                        signal: o,
                        purpose: r,
                        transport: i,
                        ckTransport: c,
                        ckWorkspaceUserId: l
                    });
                    if (r === `reconciliation` && d()?.normalizedAccountUserId !== s) throw new D({
                        revert: !0
                    });
                    return u
                }
            })
        }
    }));
export {
    W as a, L as c, xe as d, z as f, Ee as i, X as l, $ as n, B as o, ke as r, U as s, Q as t, V as u
};
//# sourceMappingURL=bb6515d2-nbnxvv4oclig4tx1.js.map