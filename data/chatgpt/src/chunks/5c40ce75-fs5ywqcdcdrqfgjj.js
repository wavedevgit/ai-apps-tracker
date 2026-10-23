import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $E as t,
    A8 as n,
    Crt as r,
    I7 as i,
    Iv as a,
    Lat as o,
    N7 as s,
    Pat as c,
    Rat as l,
    SK as u,
    Sat as d,
    V1 as f,
    VE as p,
    ZE as m,
    _rt as h,
    bat as g,
    cot as _,
    eD as v,
    j8 as y,
    not as b,
    q1 as x,
    xK as S,
    yrt as C,
    zE as ee,
    zv as te
} from "./4813494d-mdvd4786a87166cc.js";
import {
    H as w,
    J as ne,
    s as T,
    w as E
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Cn as re,
    Gwn as D,
    Kwn as O,
    RTn as k,
    _nt as ie,
    ewn as A,
    gnt as ae,
    lTn as oe,
    nwn as j,
    pTn as se,
    zTn as M
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    $y as N,
    Bv as P,
    Iy as ce,
    Py as le,
    Rv as F,
    Vv as I,
    Zy as ue,
    ly as de,
    uy as fe
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    c as pe,
    s as me
} from "./46464433-j3bblkphm8h3mk11.js";
import {
    a as he,
    c as ge,
    d as _e,
    f as ve,
    l as ye,
    n as be,
    o as xe,
    r as Se,
    s as Ce,
    t as we,
    u as Te
} from "./bb6515d2-dszyxerit33bzs1y.js";
import {
    a as Ee,
    n as De
} from "./1fc9a22c-wa6sugbwq8k7dpdv.js";

function Oe() {
    return h(Ae, {
        disableExposureLog: !0
    })
}

function ke() {
    return h(Ae)
}
var Ae, je = e((() => {
    r(), Ae = `87717130`
}));

function Me() {
    if (typeof window > `u`) return !1;
    let e = new URL(o, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function L() {
    return Me() && Oe() ? `sheep` : `legacy`
}

function R(e, t, n, r) {
    if (n?.throwIfAborted(), e !== void 0 && (re(t), e !== L() || r !== void 0 && f()?.normalizedAccountUserId !== r)) throw new w({
        revert: !0
    })
}

function Ne(e, t, n) {
    return !n || !A(t) || e !== L() ? !1 : !Me() || (ke() ? `sheep` : `legacy`) === e
}
async function Pe({
    appId: e,
    workspaceId: t,
    signal: n,
    limit: r,
    pageToken: i
}) {
    return await O({
        operation: `app_references`,
        transport: `sheep`,
        workspaceId: t,
        signal: n,
        request: async a => {
            R(`sheep`, t, n), Fe ??= new s({
                baseUrl: o.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let l = await Fe.safeGet(`/plugins/admin/by-app/{app_id}`, {
                ...a,
                authOption: c.Required,
                preserveAccountIdOnRetry: !0,
                signal: n,
                additionalHeaders: {
                    ...S(t),
                    [g]: `ADMIN_SETTING`,
                    "x-openai-use-sheep": `1`
                },
                parameters: {
                    path: {
                        app_id: e
                    },
                    query: {
                        limit: r,
                        ...i == null ? {} : {
                            pageToken: i
                        }
                    }
                }
            });
            return R(`sheep`, t, n), l
        }
    })
}
var Fe, Ie, Le = e((() => {
        D(), n(), l(), d(), i(), r(), x(), u(), T(), j(), je(), Ie = y(L, e => {
            let t = C();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `adminPluginAppReferenceReadTransport`
        })
    })),
    z, B, V, Re = e((() => {
        D(), u(), M(), ie(), l(), _(), d(), T(), I(), Le(), z = 1e3, B = async ({
            appId: e,
            workspaceId: t,
            signal: n,
            transport: r,
            workspaceUserId: i
        }) => {
            let a = new Map,
                o = new Set,
                s = null,
                l = null;
            for (;;) {
                R(r, t, n, i);
                let u = s,
                    d;
                try {
                    d = r === `sheep` ? await Pe({
                        appId: e,
                        workspaceId: t,
                        signal: n,
                        limit: z,
                        pageToken: s
                    }) : await O({
                        operation: `app_references`,
                        transport: `plugin_service`,
                        workspaceId: t,
                        signal: n,
                        request: r => ae.safeGet(`/plugins/admin/by-app/{app_id}`, {
                            ...r,
                            authOption: c.Required,
                            signal: n,
                            additionalHeaders: {
                                ...S(t),
                                [g]: k.ADMIN_SETTING
                            },
                            parameters: {
                                path: {
                                    app_id: e
                                },
                                query: {
                                    limit: z,
                                    ...u == null ? {} : {
                                        pageToken: u
                                    }
                                }
                            }
                        })
                    })
                } catch (e) {
                    if (R(r, t, n, i), r !== `sheep` && e instanceof b && e.status === 404 && s == null) return {
                        plugins: [],
                        totalCount: 0,
                        isComplete: !0
                    };
                    throw e
                }
                if (R(r, t, n, i), !Array.isArray(d.plugins) || d.pagination == null || !Number.isSafeInteger(d.pagination.limit) || d.pagination.limit <= 0 || !Number.isSafeInteger(d.total_count) || d.total_count < 0) throw Error(`Plugin impact references are incomplete or malformed.`);
                if (l != null && l !== d.total_count) throw Error(`Plugin impact reference counts changed during pagination.`);
                l = d.total_count;
                for (let e of d.plugins) a.set(e.id, e);
                let f = d.pagination.next_page_token ?? null;
                if (f != null && typeof f != `string`) throw Error(`Plugin impact pagination returned an invalid page token.`);
                if (f == null) return {
                    plugins: [...a.values()],
                    totalCount: l,
                    isComplete: a.size === l
                };
                if (o.has(f)) throw Error(`Plugin impact pagination repeated a page token.`);
                o.add(f), s = f
            }
        }, V = ({
            appId: e,
            workspaceId: t,
            transport: n,
            workspaceUserId: r
        }) => E({
            queryKey: P(`app-references`, t, e, ...r === void 0 ? [] : [{
                canonicalReferenceActor: r
            }], ...n === `sheep` ? [`app-reference-sheep`] : []),
            enabled: t !== `` && e !== ``,
            staleTime: F,
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
    return h(`241231532`, {
        disableExposureLog: !0
    })
}

function Be() {
    return h(`241231532`)
}
var Ve = e((() => {
    r()
}));

function He() {
    if (typeof window > `u`) return !1;
    let e = new URL(o, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function H() {
    return He() && ze() ? `sheep` : `legacy`
}

function U(e, t, n, r) {
    if (n?.throwIfAborted(), e !== void 0 && (re(t), e !== H() || r !== void 0 && f()?.normalizedAccountUserId !== r)) throw new w({
        revert: !0
    })
}

function Ue(e, t, n) {
    return !n || !A(t) || e !== H() ? !1 : !He() || (Be() ? `sheep` : `legacy`) === e
}
async function We({
    appIds: e,
    workspaceId: t,
    transport: n,
    signal: r,
    workspaceUserId: i
}) {
    let a = i ?? (n === void 0 ? void 0 : f()?.normalizedAccountUserId);
    if (U(n, t, r, a), e.length === 0) return new Map;
    let l;
    if (n !== `sheep`) l = await O({
        operation: `workspace_content`,
        transport: `sa_server`,
        workspaceId: t,
        signal: r,
        request: n => oe(e, {
            workspace: !0,
            accountId: t,
            productSku: k.ADMIN_SETTING
        }, n)
    });
    else {
        if (a === void 0) throw new w({
            revert: !0
        });
        Ge ??= new s({
            baseUrl: o.replace(/\/$/, ``),
            targetRoutesAreCanonical: !0
        });
        let n = Ge;
        l = await O({
            operation: `workspace_content`,
            transport: `sheep`,
            workspaceId: t,
            signal: r,
            request: async i => {
                let a = await n.safePost(`/apps/workspace/content`, {
                    ...i,
                    authOption: c.Required,
                    preserveAccountIdOnRetry: !0,
                    ...r === void 0 ? {} : {
                        signal: r
                    },
                    additionalHeaders: {
                        ...S(t),
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
                return new Map(a.apps.map(e => [e.id, e]))
            }
        })
    }
    return U(n, t, r, a), l
}
var Ge, Ke, W = e((() => {
    D(), se(), M(), n(), x(), l(), d(), i(), r(), u(), T(), j(), Ve(), Ke = y(H, e => {
        let t = C();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }, {
        name: `adminPluginWorkspaceContentReadTransport`
    })
}));

function qe(e) {
    if (e == null || e.workspaceUserId == null) return !1;
    let t = f();
    return A(e.workspaceId) && t?.getWorkspaceId() === e.workspaceId && t.normalizedAccountUserId === e.workspaceUserId && H() === e.transport
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
        x(), j(), I(), W()
    })),
    Ze, Qe, $e = e((() => {
        v(), Ze = e => {
            let t = [],
                n = new Map,
                r = new Set;
            for (let i of e?.values() ?? []) {
                let e = m(i.id);
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
        a(), p(), M(), n(), x(), l(), _(), r(), T(), ue(), I(), G(), W(), et = () => h(`585473327`), tt = y(et, e => {
            let t = C();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `nativeAdminPluginAppRecoveryEnabled`
        }), K = ({
            appIds: e,
            workspaceId: t,
            transport: n,
            nativeAppDetailsRecoveryEnabled: r = !1,
            workspaceUserId: i = n === void 0 ? void 0 : f()?.normalizedAccountUserId
        }) => {
            let a = [...new Set(e)].sort(),
                o = r,
                s = e => {
                    if (n === `sheep` && i === void 0) throw new w({
                        revert: !0
                    });
                    return We({
                        appIds: a,
                        workspaceId: t,
                        workspaceUserId: i,
                        transport: n,
                        signal: e
                    })
                },
                l = async (e, r) => {
                    let i = await s(n === `sheep` ? r : void 0);
                    r.throwIfAborted();
                    let o = a.filter(e => !i.has(e) && te(e));
                    if (o.length === 0) return i;
                    let l;
                    try {
                        l = await ee(e, o, {
                            workspaceId: t,
                            productSku: k.ADMIN_SETTING,
                            authOption: c.Required,
                            signal: r,
                            staleTime: 0
                        })
                    } catch (e) {
                        if (r.throwIfAborted(), e instanceof b) return i;
                        throw e
                    }
                    r.throwIfAborted();
                    let u = [...l].flatMap(([e, t]) => t.id === e && o.includes(e) ? [
                        [e, {
                            ...t,
                            logo_url_dark: t.logo_url_dark ?? null
                        }]
                    ] : []);
                    return u.length === 0 ? i : new Map([...i, ...u])
                };
            return E({
                queryKey: P(`apps-details`, t, {
                    appIds: Object.fromEntries(a.map(e => [e, !0])),
                    ...o ? {
                        nativeAppDetailsRecovery: !0
                    } : {}
                }, ...Je(n, i)),
                queryFn: o ? ({
                    client: e,
                    signal: t
                }) => N({
                    operation: `app_details`,
                    signal: t,
                    request: () => l(e, t)
                }) : n === `sheep` ? ({
                    signal: e
                }) => N({
                    operation: `app_details`,
                    request: () => s(e)
                }) : () => N({
                    operation: `app_details`,
                    request: () => s()
                }),
                enabled: t !== `` && a.length > 0,
                ...o ? {
                    refetchOnMount: !0
                } : {},
                staleTime: F
            })
        }
    }));
async function rt(e) {
    let {
        contentTransport: t,
        contentWorkspaceUserId: n
    } = e;
    if (n === void 0) throw new w({
        revert: !0
    });
    U(t, e.workspaceId, void 0, n);
    let r = L(),
        i = pt({
            ...e,
            referenceTransport: r,
            contentTransport: t,
            contentWorkspaceUserId: n
        });
    if (!Ne(r, e.workspaceId, i.enabled === !0) || !Ue(t, e.workspaceId, i.enabled === !0)) throw new w({
        revert: !0
    });
    let a = i.queryKey.includes(`ck-sheep`) ? `sheep` : `legacy`,
        o = e.queryClient.getQueryCache().find({
            queryKey: i.queryKey,
            exact: !0
        }),
        s = e.queryClient.getQueryData(i.queryKey),
        c = o != null && !o.state.isInvalidated && o.state.dataUpdatedAt !== 0 && Date.now() - o.state.dataUpdatedAt < 6e4 && s != null && ge(s),
        l = await e.queryClient.fetchQuery(i);
    if (c && !Ce(a, e.workspaceId, n)) throw new w({
        revert: !0
    });
    return R(r, e.workspaceId), U(t, e.workspaceId, void 0, n), l
}
var it, at, ot, q, st, J, Y, ct, X, Z, Q, lt, $, ut, dt, ft, pt, mt = e((() => {
    x(), W(), G(), Re(), Le(), me(), ye(), v(), le(), de(), $e(), Ee(), T(), Se(), nt(), I(), it = 50, at = 100, ot = 5, q = 100, st = 5e3, J = async (e, t, n) => {
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
                return t.some(e => [...r].some(t => t === e || m(t) === m(e) && (!i.has(t) || !i.has(e)))) ? t : []
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
            }), o = i.sync_metadata?.sync_status, s = X(i) && o?.ksid != null && o.ksid.trim() !== `` && o.ks_status !== `deleting` && o.ks_status !== `deleted`, c = a == null ? s ? `enabled` : e.get(i.id) : fe(a) || X(i) && ce(a) ? `enabled` : `disabled`, l = Q(i, r);
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
        let l = f()?.normalizedAccountUserId,
            u = Z(e),
            d = new Map;
        for (let t of e.values()) X(t) && [...Q(t, u)].some(e => c.has(e)) && d.set(t.id, t);
        let p = await J([...d.values()], async e => {
            a.throwIfAborted();
            let t = i == null ? await we({
                appId: e.id,
                directoryApp: e,
                workspaceId: r,
                signal: a
            }) : await i.fetchQuery(be({
                transport: o,
                ckTransport: s,
                appId: e.id,
                directoryApp: e,
                workspaceId: r
            }));
            if (a.throwIfAborted(), i != null && s != null && l != null && !xe(s, r, l, t)) throw new w({
                revert: !0
            });
            return [e, t]
        }, a);
        return new Map(p.flatMap(([e, t]) => [...Q(e, u)].map(e => [e, t])))
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
        if (R(d, e, s), U(f, e, s, p), l !== void 0 && he(l, e, u, s), e === `` || n === `` || r.length === 0) return {
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
        R(d, e, s), U(f, e, s, p);
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
            R(d, e, s), U(f, e, s, p);
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
            R(d, e, s), U(f, e, s, p);
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
        R(d, e, s), U(f, e, s, p), l !== void 0 && he(l, e, u, s);
        let C = Z(v),
            ee = new Set(r);
        for (let e of r) {
            let n = t(e);
            n != null && (!C.has(e) || !C.has(n)) && ee.add(n)
        }
        let te = De({
                referencedPlugins: _,
                appEnabledById: $(v, S),
                targetAppIds: ee,
                targetEnabled: i,
                selectedPluginId: n
            }),
            w = te.complete ? {
                status: `ready`,
                plugins: te.plugins
            } : {
                status: `error`
            };
        return _e(w, [...S.values()].some(Te)), w
    }, pt = ({
        workspaceId: e,
        pluginId: t,
        targetAppIds: n,
        targetEnabled: r,
        appsById: i,
        queryClient: a,
        referenceTransport: o,
        contentTransport: s,
        contentWorkspaceUserId: c = s === void 0 ? void 0 : f()?.normalizedAccountUserId,
        transport: l = a == null ? `legacy` : pe(),
        ckTransport: u = a == null ? `legacy` : ve()
    }) => {
        let d = a != null && u === `sheep` ? f()?.normalizedAccountUserId : void 0,
            p = Y(n, i),
            m = [...new Set(n.filter(e => e !== ``))].sort();
        return E({
            queryKey: P(`impact`, e, t, r, ...m, `lookup`, ...p, ...a != null && l === `sheep` ? [`sheep`] : [], ...a != null && u === `sheep` ? [`ck-sheep`, d] : [], ...o === `sheep` ? [`app-reference-sheep`] : [], ...Je(s, c)),
            enabled: e !== `` && t !== `` && m.length > 0,
            staleTime: F,
            structuralSharing: (e, t) => {
                let n = ne(e, t);
                return typeof n == `object` && n && _e(n, ge(t)), n
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
                transport: l,
                ckTransport: a == null ? void 0 : u,
                ckWorkspaceUserId: d,
                referenceTransport: o,
                contentTransport: s,
                contentWorkspaceUserId: c,
                signal: n
            })
        })
    }
}));
export {
    L as S, Re as _, nt as a, Ne as b, $e as c, Xe as d, Ke as f, V as g, W as h, K as i, G as l, Ue as m, $ as n, tt as o, U as p, mt as r, Qe as s, rt as t, qe as u, Ie as v, Le as x, R as y
};
//# sourceMappingURL=5c40ce75-fs5ywqcdcdrqfgjj.js.map