import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AE as t,
    A_ as n,
    Ait as r,
    B6 as i,
    DE as a,
    EE as o,
    J8 as s,
    Nit as c,
    Pit as l,
    QG as u,
    Qit as d,
    Qot as ee,
    V6 as f,
    Y8 as p,
    ZG as m,
    _E as h,
    a7 as g,
    git as _,
    gv as v,
    hnt as te,
    i1 as y,
    iat as ne,
    ist as b,
    kE as re,
    l7 as x,
    mE as S,
    nv as ie,
    o7 as ae,
    pE as oe,
    pnt as C,
    u1 as w,
    vit as se,
    wE as ce,
    wst as le,
    xE as T,
    ynt as ue
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    H as E,
    s as D,
    w as de
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $Sn as fe,
    Gwn as O,
    QCn as k,
    Wwn as A,
    XCn as j,
    eCn as M,
    nCn as pe
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Qv as me,
    ab as he,
    eb as ge,
    ey as N,
    nb as P,
    ty as F
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    a as _e,
    c as ve,
    n as I,
    r as ye,
    s as be
} from "./46464433-i8k628j3n5wwc6bl.js";

function xe(e, t) {
    Y.set(e, t)
}

function L(e) {
    return typeof e == `object` && !!e && Y.get(e) === !0
}

function R() {
    if (typeof window > `u`) return !1;
    let e = new URL(c, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function z() {
    return R() && C(X, {
        disableExposureLog: !0
    }) ? `sheep` : `legacy`
}

function B(e, t, n, r) {
    return V(r) ? U(e, t, n) : r != null && H(e, t, n)
}

function V(e) {
    let t = e?.primaryConnector.sync_metadata?.sync_status,
        n = t?.ksid != null && t.ksid.trim() !== `` && t.ks_status !== `deleting` && t.ks_status !== `deleted`;
    return e != null && (n || e.primaryConnector.type === b.GDRIVE_ACTION_CONNECTOR)
}

function H(e, t, n) {
    return n != null && y()?.normalizedAccountUserId === n && M(t) && e === z()
}

function U(e, t, n) {
    return H(e, t, n) ? !R() || (C(X) ? `sheep` : `legacy`) === e : !1
}

function W(e, t, n, r) {
    if (r.throwIfAborted(), e === `legacy`) {
        if (e !== z()) throw new E({
            revert: !0
        });
        return
    }
    if (fe(t), n == null || y()?.normalizedAccountUserId !== n || e !== z()) throw new E({
        revert: !0
    })
}

function G(e, t) {
    if (t.throwIfAborted(), !(!R() || !M(e)) && C(X)) throw new E({
        revert: !0
    })
}

function K() {
    return we ??= new ae({
        baseUrl: c.replace(/\/$/, ``),
        targetRoutesAreCanonical: !0
    }), we
}

function q(e, t) {
    return {
        authOption: r.Required,
        signal: t,
        additionalHeaders: {
            ...m(e),
            [_]: A.ADMIN_SETTING,
            "x-openai-use-sheep": `1`
        }
    }
}

function J(e, t, n) {
    if (W(`sheep`, e, t, n), !C(X)) throw new E({
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
        j(), u(), le(), O(), i(), w(), l(), se(), p(), x(), ue(), D(), pe(), F(), Y = new WeakMap, X = `1938127654`, Te = f(z, e => {
            let t = te(),
                n, r, i = new Map,
                a = (e, t) => {
                    let n = e.options.enabled;
                    return (typeof n == `function` ? n(t) : n) !== !1
                },
                o = !0,
                c = !1,
                l = e => {
                    let t = y(),
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
                u = () => {
                    e(), !c && (c = !0, queueMicrotask(() => {
                        if (c = !1, !o) return;
                        let e = y()?.getWorkspaceId(),
                            t = n?.getQueryCache();
                        if (!(e == null || t == null))
                            for (let n of [`app-configuration`, `impact`])
                                for (let r of t.findAll({
                                        queryKey: N(n, e),
                                        type: `active`
                                    })) l(r)
                    }))
                };
            t.on(`values_updated`, u);
            let d = y()?.normalizedAccountUserId;
            return queueMicrotask(() => {
                if (!o) return;
                n = s();
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
                                o && l(e.query)
                            })
                        } else if (e.type === `observerOptionsUpdated`) {
                        let t = i.get(e.query)?.get(e.observer);
                        if (t == null) return;
                        let n = t.enabled;
                        t.enabled = a(e.observer, e.query), !n && t.enabled && queueMicrotask(() => {
                            o && l(e.query)
                        })
                    } else if (e.type === `observerRemoved`) {
                        let t = i.get(e.query);
                        t?.delete(e.observer), t?.size === 0 && i.delete(e.query)
                    } else e.type === `removed` && i.delete(e.query)
                });
                let t = y();
                if (d == null || t?.normalizedAccountUserId !== d) return;
                let c = t.getWorkspaceId();
                if (c != null)
                    for (let t of [`app-configuration`, `impact`])
                        for (let n of e.findAll({
                                queryKey: N(t, c)
                            })) {
                            let e = i.get(n);
                            e ?? (e = new Map, i.set(n, e));
                            for (let t of n.observers) e.has(t) || e.set(t, {
                                workspaceUserId: d,
                                enabled: a(t, n)
                            });
                            l(n)
                        }
            }), () => {
                o = !1, t.off(`values_updated`, u), r?.()
            }
        }, {
            name: `adminPluginCKConfigurationReadTransport`
        })
    })),
    Q, Ee, De, $, Oe, ke = e((() => {
        j(), u(), le(), t(), he(), v(), O(), h(), ce(), l(), ne(), se(), p(), x(), w(), D(), F(), be(), Z(), Q = async ({
            connectorId: e,
            workspaceId: t,
            signal: n,
            includeActions: i,
            transport: a,
            forceFresh: o = !1
        }) => {
            if (a === `sheep`) return T(await _e({
                connectorId: e,
                workspaceId: t,
                signal: n,
                includeActions: i
            }));
            let c = {
                workspaceId: t,
                productSku: A.ADMIN_SETTING,
                authOption: r.Required,
                includeActions: i,
                applyEligibilityFilter: !0
            };
            if (o) {
                n.throwIfAborted();
                let t = await S(e, {
                    ...c,
                    signal: n
                });
                return n.throwIfAborted(), T(t)
            }
            n.throwIfAborted();
            let l = await oe(s(), e, {
                ...c,
                allowUnavailable: !0,
                staleTime: 0
            });
            return n.throwIfAborted(), T(l?.id === e ? l : await S(e, {
                ...c,
                signal: n
            }))
        }, Ee = async ({
            app: e,
            workspaceId: t,
            signal: n,
            ckTransport: i,
            ckWorkspaceUserId: a,
            exposeLegacyCKRead: o
        }) => {
            let s = e.primaryConnector.sync_metadata?.sync_status,
                c = s?.ksid;
            if (!(c == null || c.trim() === `` || s?.ks_status === `deleting` || s?.ks_status === `deleted`)) {
                n.throwIfAborted(), i === `legacy` && o && G(t, n);
                try {
                    let o = i === `sheep` ? await Se({
                        connectionId: c,
                        workspaceId: t,
                        workspaceUserId: a,
                        signal: n
                    }) : await k({
                        operation: `ck_connection`,
                        transport: `sa_server`,
                        workspaceId: t,
                        signal: n,
                        request: e => g.safeGet(`/ca/v2/admin/connection_instance/{connection_id}`, {
                            ...e,
                            authOption: r.Required,
                            signal: n,
                            additionalHeaders: {
                                ...m(t),
                                [_]: A.ADMIN_SETTING
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
                    n.throwIfAborted(), i === `sheep` && W(i, t, a, n);
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
                    if (n.throwIfAborted(), i === `sheep` && W(i, t, a, n), !(e instanceof d) || e.status !== 404) throw e
                }
            }
        }, De = async ({
            app: e,
            workspaceId: t,
            signal: n,
            ckTransport: i,
            ckWorkspaceUserId: a,
            exposeLegacyCKRead: o
        }) => {
            if (!(e.primaryConnector.type !== b.GDRIVE_ACTION_CONNECTOR || e.knowledgeConfig.length > 0)) {
                i === `legacy` && o && G(t, n);
                try {
                    let o = {
                            authOption: r.Required,
                            signal: n,
                            additionalHeaders: {
                                ...m(t),
                                [_]: A.ADMIN_SETTING
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
                            signal: n
                        }) : await Promise.all([k({
                            operation: `ck_connector_list`,
                            transport: `sa_server`,
                            workspaceId: t,
                            signal: n,
                            request: e => g.safeGet(`/ca/v2/admin/list_knowledge_connectors`, {
                                ...o,
                                ...e
                            })
                        }), k({
                            operation: `ck_connection_list`,
                            transport: `sa_server`,
                            workspaceId: t,
                            signal: n,
                            request: e => g.safeGet(`/ca/v2/admin/list_connection_instances`, {
                                ...o,
                                ...e
                            })
                        })]);
                    n.throwIfAborted(), i === `sheep` && W(i, t, a, n);
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
                    if (n.throwIfAborted(), i === `sheep` && W(i, t, a, n), r instanceof d && r.status === 404 && e.primaryConnector.sync_metadata?.sync_status == null) return;
                    throw r
                }
            }
        }, $ = async ({
            appId: e,
            directoryApp: t,
            workspaceId: r,
            signal: i,
            purpose: s = `configuration`,
            transport: c = `legacy`,
            ckTransport: l,
            ckWorkspaceUserId: u = y()?.normalizedAccountUserId
        }) => {
            if (r === `` || e === ``) throw Error(`A workspace and app are required to configure a plugin.`);
            let f = l ?? `legacy`,
                p = t != null && o(t.id, e) ? t.id : e,
                m = re(p),
                h;
            try {
                h = await Q({
                    connectorId: p,
                    workspaceId: r,
                    signal: i,
                    includeActions: s === `attention`,
                    transport: c,
                    forceFresh: s === `reconciliation`
                })
            } catch (e) {
                if (!(e instanceof d) || e.status !== 404 || m == null) throw e;
                h = await Q({
                    connectorId: m,
                    workspaceId: r,
                    signal: i,
                    includeActions: s === `attention`,
                    transport: c,
                    forceFresh: s === `reconciliation`
                })
            }
            if (s === `reconciliation` && h.status == null) throw Error(`The connector status is missing from the publish reconciliation response.`);
            if (ie.has(a(h.id)) || h.labels?.admin_only_connector === `true`) throw Error(`This app cannot be configured from plugin administration.`);
            let g = {
                    ...h,
                    name: h.name || t?.name || p,
                    status: h.status ?? t?.status ?? void 0,
                    type: n[h.id] ?? (h.connector_type === `MCP` ? ee.MCP_CONNECTOR : h.connector_type)
                },
                _ = {
                    primaryConnector: g,
                    relatedConnectors: [],
                    knowledgeConfig: [],
                    searchKeys: [g.name.toLocaleLowerCase()]
                },
                v = ge(_);
            return v != null && _.knowledgeConfig.push(v), s === `configuration` && (l !== void 0 && W(l, r, u, i), await Ee({
                app: _,
                workspaceId: r,
                signal: i,
                ckTransport: f,
                ckWorkspaceUserId: u,
                exposeLegacyCKRead: l !== void 0
            }), await De({
                app: _,
                workspaceId: r,
                signal: i,
                ckTransport: f,
                ckWorkspaceUserId: u,
                exposeLegacyCKRead: l !== void 0
            }), l !== void 0 && W(l, r, u, i)), c === `sheep` && I(c, r, i), _
        }, Oe = ({
            appId: e,
            directoryApp: t,
            workspaceId: n,
            purpose: r = `configuration`,
            transport: i = ve(),
            reconciliationRequestId: a,
            reconciliationWorkspaceUserId: s,
            ckTransport: c = r === `configuration` ? z() : `legacy`
        }) => {
            let l = c === `sheep` ? y()?.normalizedAccountUserId : void 0;
            return de({
                queryKey: N(`app-configuration`, n, t != null && o(t.id, e) ? t.id : e, ...r === `configuration` ? [] : r === `reconciliation` ? [r, s ?? null, a ?? null] : [r], ...i === `sheep` ? [`sheep`] : [], ...r === `configuration` && c === `sheep` ? [`ck-sheep`, l] : []),
                enabled: n !== `` && e !== `` && (r !== `reconciliation` || a != null && a !== `` && s != null && s !== `` && y()?.normalizedAccountUserId === s),
                staleTime: r === `reconciliation` ? 0 : me,
                queryFn: async ({
                    signal: o
                }) => {
                    if (r === `reconciliation` && (a == null || a === `` || s == null || s === `` || y()?.normalizedAccountUserId !== s)) throw new E({
                        revert: !0
                    });
                    r === `configuration` && W(c, n, l, o), I(i, n, o), n !== `` && e !== `` && ye(i, n, o);
                    let u = await $({
                        appId: e,
                        directoryApp: t,
                        workspaceId: n,
                        signal: o,
                        purpose: r,
                        transport: i,
                        ckTransport: c,
                        ckWorkspaceUserId: l
                    });
                    if (r === `reconciliation` && y()?.normalizedAccountUserId !== s) throw new E({
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
//# sourceMappingURL=bb6515d2-kwgbk3krkzbqnh7d.js.map