import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $E as t,
    A8 as n,
    Aat as r,
    Eat as i,
    Iv as a,
    Jat as o,
    Q7 as s,
    SK as c,
    V1 as l,
    VE as u,
    Y7 as d,
    ZE as f,
    drt as p,
    eD as m,
    eot as h,
    fat as g,
    hrt as _,
    k8 as v,
    kat as y,
    lrt as b,
    mat as x,
    q1 as S,
    xK as C,
    zE as w,
    zv as ee
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    H as T,
    J as te,
    s as E,
    w as D
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FTn as ne,
    Hwn as O,
    PTn as k,
    QCn as A,
    Vwn as j,
    XCn as M,
    YCn as re,
    _nt as ie,
    aTn as ae,
    gnt as oe,
    lTn as se
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Dy as ce,
    Ky as N,
    Nv as P,
    Pv as F,
    Wy as le,
    jv as ue,
    ky as de,
    ny as fe,
    ry as pe
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    c as me,
    s as he
} from "./46464433-dwdz5ec7iqncacxe.js";
import {
    a as ge,
    c as _e,
    d as ve,
    f as ye,
    l as be,
    n as xe,
    o as Se,
    r as Ce,
    s as we,
    t as Te,
    u as Ee
} from "./bb6515d2-hwmle41oh26wasp7.js";
import {
    a as De,
    n as Oe
} from "./1fc9a22c-m97h415jts8e1qlf.js";

function ke() {
    return b(je, {
        disableExposureLog: !0
    })
}

function Ae() {
    return b(je)
}
var je, Me = e((() => {
    _(), je = `87717130`
}));

function Ne() {
    if (typeof window > `u`) return !1;
    let e = new URL(y, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function I() {
    return Ne() && ke() ? `sheep` : `legacy`
}

function L(e, t, n, r) {
    if (n?.throwIfAborted(), e !== void 0 && (re(t), e !== I() || r !== void 0 && l()?.normalizedAccountUserId !== r)) throw new T({
        revert: !0
    })
}

function Pe(e, t, n) {
    return !n || !M(t) || e !== I() ? !1 : !Ne() || (Ae() ? `sheep` : `legacy`) === e
}
async function Fe({
    appId: e,
    workspaceId: t,
    signal: n,
    limit: r,
    pageToken: a
}) {
    return await O({
        operation: `app_references`,
        transport: `sheep`,
        workspaceId: t,
        signal: n,
        request: async o => {
            L(`sheep`, t, n), Ie ??= new d({
                baseUrl: y.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let s = await Ie.safeGet(`/plugins/admin/by-app/{app_id}`, {
                ...o,
                authOption: i.Required,
                preserveAccountIdOnRetry: !0,
                signal: n,
                additionalHeaders: {
                    ...C(t),
                    [g]: `ADMIN_SETTING`,
                    "x-openai-use-sheep": `1`
                },
                parameters: {
                    path: {
                        app_id: e
                    },
                    query: {
                        limit: r,
                        ...a == null ? {} : {
                            pageToken: a
                        }
                    }
                }
            });
            return L(`sheep`, t, n), s
        }
    })
}
var Ie, Le, R = e((() => {
        j(), v(), r(), x(), s(), _(), S(), c(), E(), A(), Me(), Le = n(I, e => {
            let t = p();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `adminPluginAppReferenceReadTransport`
        })
    })),
    z, B, V, Re = e((() => {
        j(), c(), ne(), ie(), r(), h(), x(), E(), F(), R(), z = 1e3, B = async ({
            appId: e,
            workspaceId: t,
            signal: n,
            transport: r,
            workspaceUserId: a
        }) => {
            let s = new Map,
                c = new Set,
                l = null,
                u = null;
            for (;;) {
                L(r, t, n, a);
                let d = l,
                    f;
                try {
                    f = r === `sheep` ? await Fe({
                        appId: e,
                        workspaceId: t,
                        signal: n,
                        limit: z,
                        pageToken: l
                    }) : await O({
                        operation: `app_references`,
                        transport: `plugin_service`,
                        workspaceId: t,
                        signal: n,
                        request: r => oe.safeGet(`/plugins/admin/by-app/{app_id}`, {
                            ...r,
                            authOption: i.Required,
                            signal: n,
                            additionalHeaders: {
                                ...C(t),
                                [g]: k.ADMIN_SETTING
                            },
                            parameters: {
                                path: {
                                    app_id: e
                                },
                                query: {
                                    limit: z,
                                    ...d == null ? {} : {
                                        pageToken: d
                                    }
                                }
                            }
                        })
                    })
                } catch (e) {
                    if (L(r, t, n, a), r !== `sheep` && e instanceof o && e.status === 404 && l == null) return {
                        plugins: [],
                        totalCount: 0,
                        isComplete: !0
                    };
                    throw e
                }
                if (L(r, t, n, a), !Array.isArray(f.plugins) || f.pagination == null || !Number.isSafeInteger(f.pagination.limit) || f.pagination.limit <= 0 || !Number.isSafeInteger(f.total_count) || f.total_count < 0) throw Error(`Plugin impact references are incomplete or malformed.`);
                if (u != null && u !== f.total_count) throw Error(`Plugin impact reference counts changed during pagination.`);
                u = f.total_count;
                for (let e of f.plugins) s.set(e.id, e);
                let p = f.pagination.next_page_token ?? null;
                if (p != null && typeof p != `string`) throw Error(`Plugin impact pagination returned an invalid page token.`);
                if (p == null) return {
                    plugins: [...s.values()],
                    totalCount: u,
                    isComplete: s.size === u
                };
                if (c.has(p)) throw Error(`Plugin impact pagination repeated a page token.`);
                c.add(p), l = p
            }
        }, V = ({
            appId: e,
            workspaceId: t,
            transport: n,
            workspaceUserId: r
        }) => D({
            queryKey: P(`app-references`, t, e, ...r === void 0 ? [] : [{
                canonicalReferenceActor: r
            }], ...n === `sheep` ? [`app-reference-sheep`] : []),
            enabled: t !== `` && e !== ``,
            staleTime: ue,
            queryFn: ({
                signal: i
            }) => B({
                appId: e,
                workspaceId: t,
                signal: i,
                workspaceUserId: r,
                transport: r !== void 0 || n === `sheep` ? n : void 0
            })
        })
    }));

function ze() {
    return b(`241231532`, {
        disableExposureLog: !0
    })
}

function Be() {
    return b(`241231532`)
}
var Ve = e((() => {
    _()
}));

function He() {
    if (typeof window > `u`) return !1;
    let e = new URL(y, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function H() {
    return He() && ze() ? `sheep` : `legacy`
}

function U(e, t, n, r) {
    if (n?.throwIfAborted(), e !== void 0 && (re(t), e !== H() || r !== void 0 && l()?.normalizedAccountUserId !== r)) throw new T({
        revert: !0
    })
}

function Ue(e, t, n) {
    return !n || !M(t) || e !== H() ? !1 : !He() || (Be() ? `sheep` : `legacy`) === e
}
async function We({
    appIds: e,
    workspaceId: t,
    transport: n,
    signal: r,
    workspaceUserId: a
}) {
    let o = a ?? (n === void 0 ? void 0 : l()?.normalizedAccountUserId);
    if (U(n, t, r, o), e.length === 0) return new Map;
    let s;
    if (n !== `sheep`) s = await O({
        operation: `workspace_content`,
        transport: `sa_server`,
        workspaceId: t,
        signal: r,
        request: n => ae(e, {
            workspace: !0,
            accountId: t,
            productSku: k.ADMIN_SETTING
        }, n)
    });
    else {
        if (o === void 0) throw new T({
            revert: !0
        });
        Ge ??= new d({
            baseUrl: y.replace(/\/$/, ``),
            targetRoutesAreCanonical: !0
        });
        let n = Ge;
        s = await O({
            operation: `workspace_content`,
            transport: `sheep`,
            workspaceId: t,
            signal: r,
            request: async a => {
                let o = await n.safePost(`/apps/workspace/content`, {
                    ...a,
                    authOption: i.Required,
                    preserveAccountIdOnRetry: !0,
                    ...r === void 0 ? {} : {
                        signal: r
                    },
                    additionalHeaders: {
                        ...C(t),
                        [g]: k.ADMIN_SETTING,
                        "x-openai-use-sheep": `1`
                    },
                    parameters: {
                        query: {
                            detail: `full`
                        }
                    },
                    requestBody: {
                        app_ids: [...e]
                    }
                });
                return new Map(o.apps.map(e => [e.id, e]))
            }
        })
    }
    return U(n, t, r, o), s
}
var Ge, Ke, W = e((() => {
    j(), se(), ne(), v(), S(), r(), x(), s(), _(), c(), E(), A(), Ve(), Ke = n(H, e => {
        let t = p();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }, {
        name: `adminPluginWorkspaceContentReadTransport`
    })
}));

function qe(e) {
    if (e == null || e.workspaceUserId == null) return !1;
    let t = l();
    return M(e.workspaceId) && t?.getWorkspaceId() === e.workspaceId && t.normalizedAccountUserId === e.workspaceUserId && H() === e.transport
}

function Je(e, t) {
    return e === void 0 ? [] : [{
        contentTransport: e,
        workspaceUserId: t
    }]
}

function Ye(e, t) {
    let n = e.at(-1);
    return typeof n == `object` && !!n && `contentTransport` in n && n.contentTransport === t.transport && `workspaceUserId` in n && n.workspaceUserId === t.workspaceUserId
}

function Xe({
    queryClient: e,
    previous: t,
    next: n
}) {
    if (!(t.workspaceId === n.workspaceId && t.transport === n.transport && t.workspaceUserId === n.workspaceUserId))
        for (let n of [`apps-details`, `impact`]) {
            let r = {
                queryKey: P(n, t.workspaceId),
                predicate: e => Ye(e.queryKey, t)
            };
            e.cancelQueries(r), e.invalidateQueries({
                ...r,
                refetchType: `none`
            })
        }
}
var G = e((() => {
        S(), A(), F(), W()
    })),
    Ze, Qe, $e = e((() => {
        m(), Ze = e => {
            let t = [],
                n = new Map,
                r = new Set;
            for (let i of e?.values() ?? []) {
                let e = f(i.id);
                if (r.has(e)) continue;
                r.add(e);
                let a = i.template_id ?? null;
                t.push({
                    primaryConnector: {
                        id: i.id,
                        template_id: a
                    },
                    relatedConnectors: []
                });
                let o = i.labels?.sync_only_connector === `true` || i.sync_metadata?.sync_only === !0 || i.sync_metadata?.supports_admin_sync === !0,
                    s = i.status === `ENABLED` ? `enabled` : i.status === `ONLY_ME` || i.status === `DISABLED_BY_ADMIN` && !o ? `disabled` : null;
                s != null && (n.set(i.id, s), a != null && a !== `` && n.set(a, s))
            }
            return {
                apps: t,
                statusesByConnectorId: n
            }
        }, Qe = e => e.primaryConnector.status === `ONLY_ME` ? `publish` : `enable`
    })),
    et, tt, K, nt = e((() => {
        a(), u(), ne(), v(), S(), r(), h(), _(), E(), le(), F(), G(), W(), et = () => b(`585473327`), tt = n(et, e => {
            let t = p();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `nativeAdminPluginAppRecoveryEnabled`
        }), K = ({
            appIds: e,
            workspaceId: t,
            transport: n,
            nativeAppDetailsRecoveryEnabled: r = !1,
            workspaceUserId: a = n === void 0 ? void 0 : l()?.normalizedAccountUserId
        }) => {
            let s = [...new Set(e)].sort(),
                c = r,
                u = e => {
                    if (n === `sheep` && a === void 0) throw new T({
                        revert: !0
                    });
                    return We({
                        appIds: s,
                        workspaceId: t,
                        workspaceUserId: a,
                        transport: n,
                        signal: e
                    })
                },
                d = async (e, r) => {
                    let a = await u(n === `sheep` ? r : void 0);
                    r.throwIfAborted();
                    let c = s.filter(e => !a.has(e) && ee(e));
                    if (c.length === 0) return a;
                    let l;
                    try {
                        l = await w(e, c, {
                            workspaceId: t,
                            productSku: k.ADMIN_SETTING,
                            authOption: i.Required,
                            signal: r,
                            staleTime: 0
                        })
                    } catch (e) {
                        if (r.throwIfAborted(), e instanceof o) return a;
                        throw e
                    }
                    r.throwIfAborted();
                    let d = [...l].flatMap(([e, t]) => t.id === e && c.includes(e) ? [
                        [e, {
                            ...t,
                            logo_url_dark: t.logo_url_dark ?? null
                        }]
                    ] : []);
                    return d.length === 0 ? a : new Map([...a, ...d])
                };
            return D({
                queryKey: P(`apps-details`, t, {
                    appIds: Object.fromEntries(s.map(e => [e, !0])),
                    ...c ? {
                        nativeAppDetailsRecovery: !0
                    } : {}
                }, ...Je(n, a)),
                queryFn: c ? ({
                    client: e,
                    signal: t
                }) => N({
                    operation: `app_details`,
                    signal: t,
                    request: () => d(e, t)
                }) : n === `sheep` ? ({
                    signal: e
                }) => N({
                    operation: `app_details`,
                    request: () => u(e)
                }) : () => N({
                    operation: `app_details`,
                    request: () => u()
                }),
                enabled: t !== `` && s.length > 0,
                ...c ? {
                    refetchOnMount: !0
                } : {},
                staleTime: ue
            })
        }
    }));
async function rt(e) {
    let {
        contentTransport: t,
        contentWorkspaceUserId: n
    } = e;
    if (n === void 0) throw new T({
        revert: !0
    });
    U(t, e.workspaceId, void 0, n);
    let r = I(),
        i = pt({
            ...e,
            referenceTransport: r,
            contentTransport: t,
            contentWorkspaceUserId: n
        });
    if (!Pe(r, e.workspaceId, i.enabled === !0) || !Ue(t, e.workspaceId, i.enabled === !0)) throw new T({
        revert: !0
    });
    let a = i.queryKey.includes(`ck-sheep`) ? `sheep` : `legacy`,
        o = e.queryClient.getQueryCache().find({
            queryKey: i.queryKey,
            exact: !0
        }),
        s = e.queryClient.getQueryData(i.queryKey),
        c = o != null && !o.state.isInvalidated && o.state.dataUpdatedAt !== 0 && Date.now() - o.state.dataUpdatedAt < 6e4 && s != null && _e(s),
        l = await e.queryClient.fetchQuery(i);
    if (c && !we(a, e.workspaceId, n)) throw new T({
        revert: !0
    });
    return L(r, e.workspaceId), U(t, e.workspaceId, void 0, n), l
}
var it, at, ot, q, st, J, Y, ct, X, Z, Q, lt, $, ut, dt, ft, pt, mt = e((() => {
    S(), W(), G(), Re(), R(), he(), be(), m(), ce(), fe(), $e(), De(), E(), Ce(), nt(), F(), it = 50, at = 100, ot = 5, q = 100, st = 5e3, J = async (e, t, n) => {
        let r = Array(e.length),
            i = 0;
        return await Promise.all(Array.from({
            length: Math.min(e.length, ot)
        }, async () => {
            for (; i < e.length;) {
                n.throwIfAborted();
                let a = i;
                i += 1, r[a] = await t(e[a])
            }
        })), r
    }, Y = (e, n) => {
        let r = new Set(e.filter(e => e !== ``)),
            i = new Set([...n?.values() ?? []].flatMap(e => [e.id, e.template_id].filter(e => e != null && e !== ``))),
            a = [...n?.values() ?? []].flatMap(e => {
                let t = [e.id, e.template_id].filter(e => e != null && e !== ``);
                return t.some(e => [...r].some(t => t === e || f(t) === f(e) && (!i.has(t) || !i.has(e)))) ? t : []
            });
        return [...new Set([...r, ...a].flatMap(e => {
            let n = t(e);
            return n == null || i.has(e) && i.has(n) ? [e] : [e, n]
        }))].sort()
    }, ct = e => ({
        id: e.id,
        displayName: e.display_name,
        canonicalAppId: e.canonical_app_id ?? null,
        appIds: [...new Set(e.app_ids)],
        requiredAppIdGroups: e.required_app_id_groups?.map(e => [...new Set(e)]) ?? null,
        appManifest: e.app_manifest == null ? null : {
            apps: Object.fromEntries(Object.entries(e.app_manifest.apps).map(([e, t]) => [e, {
                id: t.id,
                required: t.required ?? null
            }]))
        },
        interface: {
            composerIconUrl: e.interface.composer_icon_url ?? null,
            logoUrl: e.interface.logo_url ?? null
        }
    }), X = e => e.status === `DISABLED_BY_ADMIN` && (e.labels?.sync_only_connector === `true` || e.sync_metadata?.sync_only === !0 || e.sync_metadata?.supports_admin_sync === !0), Z = e => new Set([...e.values()].flatMap(e => [e.id, e.template_id].filter(e => e != null && e !== ``))), Q = (e, n) => {
        let r = new Set([e.id, e.template_id].filter(e => e != null && e !== ``));
        for (let e of r) {
            let i = t(e);
            i != null && !n.has(i) && r.add(i)
        }
        return r
    }, lt = ({
        app: e,
        exactEffectiveAppIds: n,
        hydratedAppsById: r
    }) => {
        let i = [e.id, e.template_id].filter(e => e != null && e !== ``);
        for (let e of i) {
            let i = r?.get(e);
            if (i != null) return i;
            let a = t(e);
            if (a != null && !n.has(a)) {
                let e = r?.get(a);
                if (e != null) return e
            }
        }
    }, $ = (e, t) => {
        let n = new Map,
            r = Z(e);
        for (let i of e.values()) {
            let {
                statusesByConnectorId: e
            } = Ze(new Map([
                [i.id, i]
            ])), a = lt({
                app: i,
                exactEffectiveAppIds: r,
                hydratedAppsById: t
            }), o = i.sync_metadata?.sync_status, s = X(i) && o?.ksid != null && o.ksid.trim() !== `` && o.ks_status !== `deleting` && o.ks_status !== `deleted`, c = a == null ? s ? `enabled` : e.get(i.id) : pe(a) || X(i) && de(a) ? `enabled` : `disabled`, l = Q(i, r);
            for (let e of l) {
                let t = n.get(e) ?? {
                    enabled: !1,
                    disabled: !1,
                    unknown: !1
                };
                c === `enabled` ? t.enabled = !0 : c === `disabled` ? t.disabled = !0 : t.unknown = !0, n.set(e, t)
            }
        }
        let i = new Map;
        return n.forEach((e, t) => {
            e.enabled && !e.disabled ? i.set(t, !0) : e.disabled && !e.enabled && !e.unknown && i.set(t, !1)
        }), i
    }, ut = async ({
        appsById: e,
        appEnabledById: t,
        requiredAppIds: n,
        workspaceId: r,
        queryClient: i,
        signal: a,
        transport: o,
        ckTransport: s
    }) => {
        let c = new Set([...n].filter(e => !t.has(e)));
        if (c.size === 0) return new Map;
        let u = l()?.normalizedAccountUserId,
            d = Z(e),
            f = new Map;
        for (let t of e.values()) X(t) && [...Q(t, d)].some(e => c.has(e)) && f.set(t.id, t);
        let p = await J([...f.values()], async e => {
            a.throwIfAborted();
            let t = i == null ? await Te({
                appId: e.id,
                directoryApp: e,
                workspaceId: r,
                signal: a
            }) : await i.fetchQuery(xe({
                transport: o,
                ckTransport: s,
                appId: e.id,
                directoryApp: e,
                workspaceId: r
            }));
            if (a.throwIfAborted(), i != null && s != null && u != null && !Se(s, r, u, t)) throw new T({
                revert: !0
            });
            return [e, t]
        }, a);
        return new Map(p.flatMap(([e, t]) => [...Q(e, d)].map(e => [e, t])))
    }, dt = e => {
        if (e.requiredAppIdGroups != null) return e.requiredAppIdGroups.flat();
        if (e.appManifest == null) return e.appIds;
        let t = new Set,
            n = new Set;
        return Object.values(e.appManifest.apps).forEach(e => {
            e.required === !1 ? t.add(e.id) : n.add(e.id)
        }), e.appIds.filter(e => !t.has(e) || n.has(e))
    }, ft = async ({
        workspaceId: e,
        pluginId: n,
        targetAppIds: r,
        targetEnabled: i,
        appsById: a,
        queryClient: o,
        signal: s,
        transport: c,
        ckTransport: l,
        ckWorkspaceUserId: u,
        referenceTransport: d,
        contentTransport: f,
        contentWorkspaceUserId: p
    }) => {
        if (L(d, e, s), U(f, e, s, p), l !== void 0 && ge(l, e, u, s), e === `` || n === `` || r.length === 0) return {
            status: `error`
        };
        let m = Y(r, a);
        if (m.length === 0 || new Set(r).size > it || m.length > at) throw Error(`Plugin impact exceeds the supported app lookup limit.`);
        let h = (await J(m, t => o == null ? B({
            appId: t,
            workspaceId: e,
            signal: s,
            transport: d
        }) : o.fetchQuery(V({
            appId: t,
            workspaceId: e,
            transport: d
        })), s)).flatMap(e => e.plugins);
        L(d, e, s), U(f, e, s, p);
        let g = new Map;
        for (let e of h) g.has(e.id) || g.set(e.id, ct(e));
        let _ = [...g.values()];
        if (!g.has(n)) return {
            status: `error`
        };
        let v = new Map(a ?? []),
            y = $(v),
            b = new Set(_.flatMap(dt));
        if (b.size > st) throw Error(`Plugin impact exceeds the supported required-app limit.`);
        let x = [...b].filter(e => !y.has(e));
        if (x.length > 0) {
            L(d, e, s), U(f, e, s, p);
            let t = Array.from({
                    length: Math.ceil(x.length / q)
                }, (e, t) => x.slice(t * q, (t + 1) * q)),
                n = await J(t, t => o == null ? We({
                    appIds: t,
                    workspaceId: e,
                    transport: f,
                    workspaceUserId: p,
                    signal: s
                }) : o.fetchQuery(K({
                    appIds: t,
                    workspaceId: e,
                    transport: f,
                    workspaceUserId: p
                })), s);
            L(d, e, s), U(f, e, s, p);
            for (let e of n) e.forEach((e, t) => v.set(t, e));
            y = $(v)
        }
        let S = await ut({
            appsById: v,
            appEnabledById: y,
            requiredAppIds: b,
            transport: c,
            ckTransport: l,
            workspaceId: e,
            queryClient: o,
            signal: s
        });
        L(d, e, s), U(f, e, s, p), l !== void 0 && ge(l, e, u, s);
        let C = Z(v),
            w = new Set(r);
        for (let e of r) {
            let n = t(e);
            n != null && (!C.has(e) || !C.has(n)) && w.add(n)
        }
        let ee = Oe({
                referencedPlugins: _,
                appEnabledById: $(v, S),
                targetAppIds: w,
                targetEnabled: i,
                selectedPluginId: n
            }),
            T = ee.complete ? {
                status: `ready`,
                plugins: ee.plugins
            } : {
                status: `error`
            };
        return ve(T, [...S.values()].some(Ee)), T
    }, pt = ({
        workspaceId: e,
        pluginId: t,
        targetAppIds: n,
        targetEnabled: r,
        appsById: i,
        queryClient: a,
        referenceTransport: o,
        contentTransport: s,
        contentWorkspaceUserId: c = s === void 0 ? void 0 : l()?.normalizedAccountUserId,
        transport: u = a == null ? `legacy` : me(),
        ckTransport: d = a == null ? `legacy` : ye()
    }) => {
        let f = a != null && d === `sheep` ? l()?.normalizedAccountUserId : void 0,
            p = Y(n, i),
            m = [...new Set(n.filter(e => e !== ``))].sort();
        return D({
            queryKey: P(`impact`, e, t, r, ...m, `lookup`, ...p, ...a != null && u === `sheep` ? [`sheep`] : [], ...a != null && d === `sheep` ? [`ck-sheep`, f] : [], ...o === `sheep` ? [`app-reference-sheep`] : [], ...Je(s, c)),
            enabled: e !== `` && t !== `` && m.length > 0,
            staleTime: ue,
            structuralSharing: (e, t) => {
                let n = te(e, t);
                return typeof n == `object` && n && ve(n, _e(t)), n
            },
            queryFn: ({
                signal: n
            }) => ft({
                workspaceId: e,
                pluginId: t,
                targetAppIds: m,
                targetEnabled: r,
                appsById: i,
                queryClient: a,
                transport: u,
                ckTransport: a == null ? void 0 : d,
                ckWorkspaceUserId: f,
                referenceTransport: o,
                contentTransport: s,
                contentWorkspaceUserId: c,
                signal: n
            })
        })
    }
}));
export {
    I as S, Re as _, nt as a, Pe as b, $e as c, Xe as d, Ke as f, V as g, W as h, K as i, G as l, Ue as m, $ as n, tt as o, U as p, mt as r, Qe as s, rt as t, qe as u, Le as v, R as x, L as y
};
//# sourceMappingURL=5c40ce75-b194ymqkzyiq67v1.js.map