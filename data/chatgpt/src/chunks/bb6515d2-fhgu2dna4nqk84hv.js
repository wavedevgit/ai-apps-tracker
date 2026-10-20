import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aat as t,
    Ast as n,
    BE as r,
    F7 as i,
    Fv as a,
    GE as o,
    Gnt as s,
    I7 as c,
    IE as l,
    Iat as u,
    Ist as d,
    JE as ee,
    Jit as f,
    KE as te,
    M1 as p,
    ME as m,
    NE as h,
    R1 as g,
    T5 as _,
    TK as v,
    UE as ne,
    Xit as y,
    YE as re,
    Y_ as ie,
    Znt as ae,
    _8 as oe,
    cat as b,
    dat as x,
    fat as S,
    g8 as se,
    nct as C,
    qnt as ce,
    w5 as le,
    wK as w,
    xv as ue,
    z7 as de
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    H as T,
    s as E,
    w as fe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    _Cn as pe,
    bCn as me,
    dwn as D,
    iTn as O,
    rTn as k,
    uwn as A,
    vCn as j
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Av as M,
    Cy as he,
    Dv as ge,
    by as N,
    kv as P,
    vy as _e
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    a as ve,
    c as ye,
    n as F,
    r as be,
    s as xe
} from "./46464433-l21gswyijm194ixu.js";

function Se(e, t) {
    J.set(e, t)
}

function I(e) {
    return typeof e == `object` && !!e && J.get(e) === !0
}

function L() {
    if (typeof window > `u`) return !1;
    let e = new URL(x, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function R() {
    return L() && s(Y, {
        disableExposureLog: !0
    }) ? `sheep` : `legacy`
}

function z(e, t, n, r) {
    return B(r) ? H(e, t, n) : r != null && V(e, t, n)
}

function B(e) {
    let t = e?.primaryConnector.sync_metadata?.sync_status,
        n = t?.ksid != null && t.ksid.trim() !== `` && t.ks_status !== `deleting` && t.ks_status !== `deleted`;
    return e != null && (n || e.primaryConnector.type === d.GDRIVE_ACTION_CONNECTOR)
}

function V(e, t, n) {
    return n != null && p()?.normalizedAccountUserId === n && j(t) && e === R()
}

function H(e, t, n) {
    return V(e, t, n) ? !L() || (s(Y) ? `sheep` : `legacy`) === e : !1
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
    if (t.throwIfAborted(), !(!L() || !j(e)) && s(Y)) throw new T({
        revert: !0
    })
}

function G() {
    return Te ??= new c({
        baseUrl: x.replace(/\/$/, ``),
        targetRoutesAreCanonical: !0
    }), Te
}

function K(e, t) {
    return {
        authOption: b.Required,
        signal: t,
        additionalHeaders: {
            ...w(e),
            [f]: k.ADMIN_SETTING,
            "x-openai-use-sheep": `1`
        }
    }
}

function q(e, t, n) {
    if (U(`sheep`, e, t, n), !s(Y)) throw new T({
        revert: !0
    })
}
async function Ce({
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
        i = await Promise.all([D({
            operation: `ck_connector_list`,
            transport: `sheep`,
            workspaceId: e,
            signal: n,
            request: e => G().safeGet(`/ca/v2/admin/list_knowledge_connectors`, {
                ...r,
                ...e
            })
        }), D({
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
        A(), v(), C(), O(), se(), g(), S(), y(), _(), de(), ae(), E(), me(), M(), J = new WeakMap, Y = `1938127654`, Ee = oe(R, e => {
            let t = ce(),
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
            let u = p()?.normalizedAccountUserId;
            return queueMicrotask(() => {
                if (!o) return;
                n = le();
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
                if (u == null || t?.normalizedAccountUserId !== u) return;
                let s = t.getWorkspaceId();
                if (s != null)
                    for (let t of [`app-configuration`, `impact`])
                        for (let n of e.findAll({
                                queryKey: P(t, s)
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
        A(), v(), C(), re(), he(), a(), O(), l(), ne(), S(), u(), y(), _(), de(), g(), E(), M(), xe(), X(), Z = async ({
            connectorId: e,
            workspaceId: t,
            signal: n,
            includeActions: i,
            transport: a,
            forceFresh: o = !1
        }) => {
            if (a === `sheep`) return r(await ve({
                connectorId: e,
                workspaceId: t,
                signal: n,
                includeActions: i
            }));
            let s = {
                workspaceId: t,
                productSku: k.ADMIN_SETTING,
                authOption: b.Required,
                includeActions: i,
                applyEligibilityFilter: !0
            };
            if (o) {
                n.throwIfAborted();
                let t = await h(e, {
                    ...s,
                    signal: n
                });
                return n.throwIfAborted(), r(t)
            }
            n.throwIfAborted();
            let c = await m(le(), e, {
                ...s,
                allowUnavailable: !0,
                staleTime: 0
            });
            return n.throwIfAborted(), r(c?.id === e ? c : await h(e, {
                ...s,
                signal: n
            }))
        }, De = async ({
            app: e,
            workspaceId: n,
            signal: r,
            ckTransport: a,
            ckWorkspaceUserId: o,
            exposeLegacyCKRead: s
        }) => {
            let c = e.primaryConnector.sync_metadata?.sync_status,
                l = c?.ksid;
            if (!(l == null || l.trim() === `` || c?.ks_status === `deleting` || c?.ks_status === `deleted`)) {
                r.throwIfAborted(), a === `legacy` && s && W(n, r);
                try {
                    let t = a === `sheep` ? await Ce({
                        connectionId: l,
                        workspaceId: n,
                        workspaceUserId: o,
                        signal: r
                    }) : await D({
                        operation: `ck_connection`,
                        transport: `sa_server`,
                        workspaceId: n,
                        signal: r,
                        request: e => i.safeGet(`/ca/v2/admin/connection_instance/{connection_id}`, {
                            ...e,
                            authOption: b.Required,
                            signal: r,
                            additionalHeaders: {
                                ...w(n),
                                [f]: k.ADMIN_SETTING
                            },
                            parameters: {
                                path: {
                                    connection_id: l
                                },
                                query: {
                                    account_id: n
                                }
                            }
                        })
                    });
                    r.throwIfAborted(), a === `sheep` && U(a, n, o, r);
                    let s = t.connection_config.knowledge_connector_type;
                    if (s == null || t.connection_config.connection_config_id !== l || t.connection_status === `deleting` || t.connection_status === `deleted` || N(s) !== e.primaryConnector.type) return;
                    let c = e.knowledgeConfig.find(e => e.key === s);
                    if (c != null) {
                        c.connections.push(t);
                        return
                    }
                    e.knowledgeConfig.push({
                        key: s,
                        availability: `available`,
                        connections: [t],
                        limits: {
                            max_instances: 1
                        }
                    })
                } catch (e) {
                    if (r.throwIfAborted(), a === `sheep` && U(a, n, o, r), !(e instanceof t) || e.status !== 404) throw e
                }
            }
        }, Oe = async ({
            app: e,
            workspaceId: n,
            signal: r,
            ckTransport: a,
            ckWorkspaceUserId: o,
            exposeLegacyCKRead: s
        }) => {
            if (!(e.primaryConnector.type !== d.GDRIVE_ACTION_CONNECTOR || e.knowledgeConfig.length > 0)) {
                a === `legacy` && s && W(n, r);
                try {
                    let t = {
                            authOption: b.Required,
                            signal: r,
                            additionalHeaders: {
                                ...w(n),
                                [f]: k.ADMIN_SETTING
                            },
                            parameters: {
                                query: {
                                    account_id: n
                                }
                            }
                        },
                        [s, c] = a === `sheep` ? await we({
                            workspaceId: n,
                            workspaceUserId: o,
                            signal: r
                        }) : await Promise.all([D({
                            operation: `ck_connector_list`,
                            transport: `sa_server`,
                            workspaceId: n,
                            signal: r,
                            request: e => i.safeGet(`/ca/v2/admin/list_knowledge_connectors`, {
                                ...t,
                                ...e
                            })
                        }), D({
                            operation: `ck_connection_list`,
                            transport: `sa_server`,
                            workspaceId: n,
                            signal: r,
                            request: e => i.safeGet(`/ca/v2/admin/list_connection_instances`, {
                                ...t,
                                ...e
                            })
                        })]);
                    r.throwIfAborted(), a === `sheep` && U(a, n, o, r);
                    for (let t of s.knowledge_conectors) {
                        let n = t.connector_details,
                            r = n.knowledge_connector_type;
                        N(r) === e.primaryConnector.type && e.knowledgeConfig.push({
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
                } catch (i) {
                    if (r.throwIfAborted(), a === `sheep` && U(a, n, o, r), i instanceof t && i.status === 404 && e.primaryConnector.sync_metadata?.sync_status == null) return;
                    throw i
                }
            }
        }, Q = async ({
            appId: e,
            directoryApp: r,
            workspaceId: i,
            signal: a,
            purpose: s = `configuration`,
            transport: c = `legacy`,
            ckTransport: l,
            ckWorkspaceUserId: u = p()?.normalizedAccountUserId
        }) => {
            if (i === `` || e === ``) throw Error(`A workspace and app are required to configure a plugin.`);
            let d = l ?? `legacy`,
                f = r != null && o(r.id, e) ? r.id : e,
                m = ee(f),
                h;
            try {
                h = await Z({
                    connectorId: f,
                    workspaceId: i,
                    signal: a,
                    includeActions: s === `attention`,
                    transport: c,
                    forceFresh: s === `reconciliation`
                })
            } catch (e) {
                if (!(e instanceof t) || e.status !== 404 || m == null) throw e;
                h = await Z({
                    connectorId: m,
                    workspaceId: i,
                    signal: a,
                    includeActions: s === `attention`,
                    transport: c,
                    forceFresh: s === `reconciliation`
                })
            }
            if (s === `reconciliation` && h.status == null) throw Error(`The connector status is missing from the publish reconciliation response.`);
            if (ue.has(te(h.id)) || h.labels?.admin_only_connector === `true`) throw Error(`This app cannot be configured from plugin administration.`);
            let g = {
                    ...h,
                    name: h.name || r?.name || f,
                    status: h.status ?? r?.status ?? void 0,
                    type: ie[h.id] ?? (h.connector_type === `MCP` ? n.MCP_CONNECTOR : h.connector_type)
                },
                _ = {
                    primaryConnector: g,
                    relatedConnectors: [],
                    knowledgeConfig: [],
                    searchKeys: [g.name.toLocaleLowerCase()]
                },
                v = _e(_);
            return v != null && _.knowledgeConfig.push(v), s === `configuration` && (l !== void 0 && U(l, i, u, a), await De({
                app: _,
                workspaceId: i,
                signal: a,
                ckTransport: d,
                ckWorkspaceUserId: u,
                exposeLegacyCKRead: l !== void 0
            }), await Oe({
                app: _,
                workspaceId: i,
                signal: a,
                ckTransport: d,
                ckWorkspaceUserId: u,
                exposeLegacyCKRead: l !== void 0
            }), l !== void 0 && U(l, i, u, a)), c === `sheep` && F(c, i, a), _
        }, $ = ({
            appId: e,
            directoryApp: t,
            workspaceId: n,
            purpose: r = `configuration`,
            transport: i = ye(),
            reconciliationRequestId: a,
            reconciliationWorkspaceUserId: s,
            ckTransport: c = r === `configuration` ? R() : `legacy`
        }) => {
            let l = c === `sheep` ? p()?.normalizedAccountUserId : void 0;
            return fe({
                queryKey: P(`app-configuration`, n, t != null && o(t.id, e) ? t.id : e, ...r === `configuration` ? [] : r === `reconciliation` ? [r, s ?? null, a ?? null] : [r], ...i === `sheep` ? [`sheep`] : [], ...r === `configuration` && c === `sheep` ? [`ck-sheep`, l] : []),
                enabled: n !== `` && e !== `` && (r !== `reconciliation` || a != null && a !== `` && s != null && s !== `` && p()?.normalizedAccountUserId === s),
                staleTime: r === `reconciliation` ? 0 : ge,
                queryFn: async ({
                    signal: o
                }) => {
                    if (r === `reconciliation` && (a == null || a === `` || s == null || s === `` || p()?.normalizedAccountUserId !== s)) throw new T({
                        revert: !0
                    });
                    r === `configuration` && U(c, n, l, o), F(i, n, o), n !== `` && e !== `` && be(i, n, o);
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
                    if (r === `reconciliation` && p()?.normalizedAccountUserId !== s) throw new T({
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
//# sourceMappingURL=bb6515d2-fhgu2dna4nqk84hv.js.map