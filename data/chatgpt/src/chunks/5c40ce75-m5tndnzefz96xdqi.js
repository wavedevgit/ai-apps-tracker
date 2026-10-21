import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $E as t,
    A8 as n,
    Dat as r,
    Iv as i,
    Kat as a,
    Oat as o,
    Q7 as s,
    Qat as c,
    SK as l,
    V1 as u,
    VE as d,
    Y7 as f,
    ZE as p,
    eD as m,
    fat as h,
    k8 as g,
    lrt as _,
    prt as v,
    q1 as y,
    srt as b,
    uat as x,
    wat as S,
    xK as C,
    zE as w,
    zv as ee
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    H as T,
    J as te,
    s as E,
    w as D
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    ACn as ne,
    Bwn as re,
    Cwn as O,
    NCn as ie,
    Swn as k,
    Wwn as ae,
    gTn as A,
    gnt as oe,
    hTn as j,
    hnt as se,
    jCn as M
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Dy as ce,
    Ky as N,
    Nv as P,
    Pv as F,
    Wy as le,
    jv as I,
    ky as ue,
    ny as de,
    ry as fe
} from "./c2675c8c-p3x4d0bnf7e77o1n.js";
import {
    c as pe,
    s as me
} from "./46464433-lhtdxol31a8uggdm.js";
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
} from "./bb6515d2-ilk7woiqmkdvb4fm.js";
import {
    a as Ee,
    n as De
} from "./1fc9a22c-gm3kxicr40toysoz.js";

function Oe() {
    return b(L, {
        disableExposureLog: !0
    })
}

function ke() {
    return b(L)
}
var L, Ae = e((() => {
    v(), L = `87717130`
}));

function je() {
    if (typeof window > `u`) return !1;
    let e = new URL(r, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function R() {
    return je() && Oe() ? `sheep` : `legacy`
}

function z(e, t, n, r) {
    if (n?.throwIfAborted(), e !== void 0 && (ne(t), e !== R() || r !== void 0 && u()?.normalizedAccountUserId !== r)) throw new T({
        revert: !0
    })
}

function Me(e, t, n) {
    return !n || !M(t) || e !== R() ? !1 : !je() || (ke() ? `sheep` : `legacy`) === e
}
async function Ne({
    appId: e,
    workspaceId: t,
    signal: n,
    limit: i,
    pageToken: a
}) {
    return await O({
        operation: `app_references`,
        transport: `sheep`,
        workspaceId: t,
        signal: n,
        request: async o => {
            z(`sheep`, t, n), Pe ??= new f({
                baseUrl: r.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let s = await Pe.safeGet(`/plugins/admin/by-app/{app_id}`, {
                ...o,
                authOption: S.Required,
                preserveAccountIdOnRetry: !0,
                signal: n,
                additionalHeaders: {
                    ...C(t),
                    [x]: `ADMIN_SETTING`,
                    "x-openai-use-sheep": `1`
                },
                parameters: {
                    path: {
                        app_id: e
                    },
                    query: {
                        limit: i,
                        ...a == null ? {} : {
                            pageToken: a
                        }
                    }
                }
            });
            return z(`sheep`, t, n), s
        }
    })
}
var Pe, Fe, B = e((() => {
        k(), g(), o(), h(), s(), v(), y(), l(), E(), ie(), Ae(), Fe = n(R, e => {
            let t = _();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `adminPluginAppReferenceReadTransport`
        })
    })),
    V, H, U, Ie = e((() => {
        k(), l(), A(), oe(), o(), c(), h(), E(), F(), B(), V = 1e3, H = async ({
            appId: e,
            workspaceId: t,
            signal: n,
            transport: r,
            workspaceUserId: i
        }) => {
            let o = new Map,
                s = new Set,
                c = null,
                l = null;
            for (;;) {
                z(r, t, n, i);
                let u = c,
                    d;
                try {
                    d = r === `sheep` ? await Ne({
                        appId: e,
                        workspaceId: t,
                        signal: n,
                        limit: V,
                        pageToken: c
                    }) : await O({
                        operation: `app_references`,
                        transport: `plugin_service`,
                        workspaceId: t,
                        signal: n,
                        request: r => se.safeGet(`/plugins/admin/by-app/{app_id}`, {
                            ...r,
                            authOption: S.Required,
                            signal: n,
                            additionalHeaders: {
                                ...C(t),
                                [x]: j.ADMIN_SETTING
                            },
                            parameters: {
                                path: {
                                    app_id: e
                                },
                                query: {
                                    limit: V,
                                    ...u == null ? {} : {
                                        pageToken: u
                                    }
                                }
                            }
                        })
                    })
                } catch (e) {
                    if (z(r, t, n, i), r !== `sheep` && e instanceof a && e.status === 404 && c == null) return {
                        plugins: [],
                        totalCount: 0,
                        isComplete: !0
                    };
                    throw e
                }
                if (z(r, t, n, i), !Array.isArray(d.plugins) || d.pagination == null || !Number.isSafeInteger(d.pagination.limit) || d.pagination.limit <= 0 || !Number.isSafeInteger(d.total_count) || d.total_count < 0) throw Error(`Plugin impact references are incomplete or malformed.`);
                if (l != null && l !== d.total_count) throw Error(`Plugin impact reference counts changed during pagination.`);
                l = d.total_count;
                for (let e of d.plugins) o.set(e.id, e);
                let f = d.pagination.next_page_token ?? null;
                if (f != null && typeof f != `string`) throw Error(`Plugin impact pagination returned an invalid page token.`);
                if (f == null) return {
                    plugins: [...o.values()],
                    totalCount: l,
                    isComplete: o.size === l
                };
                if (s.has(f)) throw Error(`Plugin impact pagination repeated a page token.`);
                s.add(f), c = f
            }
        }, U = ({
            appId: e,
            workspaceId: t,
            transport: n,
            workspaceUserId: r
        }) => D({
            queryKey: P(`app-references`, t, e, ...r === void 0 ? [] : [{
                canonicalReferenceActor: r
            }], ...n === `sheep` ? [`app-reference-sheep`] : []),
            enabled: t !== `` && e !== ``,
            staleTime: I,
            queryFn: ({
                signal: i
            }) => H({
                appId: e,
                workspaceId: t,
                signal: i,
                workspaceUserId: r,
                transport: r !== void 0 || n === `sheep` ? n : void 0
            })
        })
    }));

function Le() {
    return b(`241231532`, {
        disableExposureLog: !0
    })
}

function Re() {
    return b(`241231532`)
}
var ze = e((() => {
    v()
}));

function Be() {
    if (typeof window > `u`) return !1;
    let e = new URL(r, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function W() {
    return Be() && Le() ? `sheep` : `legacy`
}

function G(e, t, n, r) {
    if (n?.throwIfAborted(), e !== void 0 && (ne(t), e !== W() || r !== void 0 && u()?.normalizedAccountUserId !== r)) throw new T({
        revert: !0
    })
}

function Ve(e, t, n) {
    return !n || !M(t) || e !== W() ? !1 : !Be() || (Re() ? `sheep` : `legacy`) === e
}
async function He({
    appIds: e,
    workspaceId: t,
    transport: n,
    signal: i,
    workspaceUserId: a
}) {
    let o = a ?? (n === void 0 ? void 0 : u()?.normalizedAccountUserId);
    if (G(n, t, i, o), e.length === 0) return new Map;
    let s;
    if (n !== `sheep`) s = await O({
        operation: `workspace_content`,
        transport: `sa_server`,
        workspaceId: t,
        signal: i,
        request: n => re(e, {
            workspace: !0,
            accountId: t,
            productSku: j.ADMIN_SETTING
        }, n)
    });
    else {
        if (o === void 0) throw new T({
            revert: !0
        });
        Ue ??= new f({
            baseUrl: r.replace(/\/$/, ``),
            targetRoutesAreCanonical: !0
        });
        let n = Ue;
        s = await O({
            operation: `workspace_content`,
            transport: `sheep`,
            workspaceId: t,
            signal: i,
            request: async r => {
                let a = await n.safePost(`/apps/workspace/content`, {
                    ...r,
                    authOption: S.Required,
                    preserveAccountIdOnRetry: !0,
                    ...i === void 0 ? {} : {
                        signal: i
                    },
                    additionalHeaders: {
                        ...C(t),
                        [x]: j.ADMIN_SETTING,
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
    return G(n, t, i, o), s
}
var Ue, We, K = e((() => {
    k(), ae(), A(), g(), y(), o(), h(), s(), v(), l(), E(), ie(), ze(), We = n(W, e => {
        let t = _();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }, {
        name: `adminPluginWorkspaceContentReadTransport`
    })
}));

function Ge(e) {
    if (e == null || e.workspaceUserId == null) return !1;
    let t = u();
    return M(e.workspaceId) && t?.getWorkspaceId() === e.workspaceId && t.normalizedAccountUserId === e.workspaceUserId && W() === e.transport
}

function Ke(e, t) {
    return e === void 0 ? [] : [{
        contentTransport: e,
        workspaceUserId: t
    }]
}

function qe(e, t) {
    let n = e.at(-1);
    return typeof n == `object` && !!n && `contentTransport` in n && n.contentTransport === t.transport && `workspaceUserId` in n && n.workspaceUserId === t.workspaceUserId
}

function Je({
    queryClient: e,
    previous: t,
    next: n
}) {
    if (!(t.workspaceId === n.workspaceId && t.transport === n.transport && t.workspaceUserId === n.workspaceUserId))
        for (let n of [`apps-details`, `impact`]) {
            let r = {
                queryKey: P(n, t.workspaceId),
                predicate: e => qe(e.queryKey, t)
            };
            e.cancelQueries(r), e.invalidateQueries({
                ...r,
                refetchType: `none`
            })
        }
}
var q = e((() => {
        y(), ie(), F(), K()
    })),
    Ye, Xe, Ze = e((() => {
        m(), Ye = e => {
            let t = [],
                n = new Map,
                r = new Set;
            for (let i of e?.values() ?? []) {
                let e = p(i.id);
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
        }, Xe = e => e.primaryConnector.status === `ONLY_ME` ? `publish` : `enable`
    })),
    Qe, $e, et, tt = e((() => {
        i(), d(), A(), g(), y(), o(), c(), v(), E(), le(), F(), q(), K(), Qe = () => b(`585473327`), $e = n(Qe, e => {
            let t = _();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `nativeAdminPluginAppRecoveryEnabled`
        }), et = ({
            appIds: e,
            workspaceId: t,
            transport: n,
            nativeAppDetailsRecoveryEnabled: r = !1,
            workspaceUserId: i = n === void 0 ? void 0 : u()?.normalizedAccountUserId
        }) => {
            let o = [...new Set(e)].sort(),
                s = r,
                c = e => {
                    if (n === `sheep` && i === void 0) throw new T({
                        revert: !0
                    });
                    return He({
                        appIds: o,
                        workspaceId: t,
                        workspaceUserId: i,
                        transport: n,
                        signal: e
                    })
                },
                l = async (e, r) => {
                    let i = await c(n === `sheep` ? r : void 0);
                    r.throwIfAborted();
                    let s = o.filter(e => !i.has(e) && ee(e));
                    if (s.length === 0) return i;
                    let l;
                    try {
                        l = await w(e, s, {
                            workspaceId: t,
                            productSku: j.ADMIN_SETTING,
                            authOption: S.Required,
                            signal: r,
                            staleTime: 0
                        })
                    } catch (e) {
                        if (r.throwIfAborted(), e instanceof a) return i;
                        throw e
                    }
                    r.throwIfAborted();
                    let u = [...l].flatMap(([e, t]) => t.id === e && s.includes(e) ? [
                        [e, {
                            ...t,
                            logo_url_dark: t.logo_url_dark ?? null
                        }]
                    ] : []);
                    return u.length === 0 ? i : new Map([...i, ...u])
                };
            return D({
                queryKey: P(`apps-details`, t, {
                    appIds: Object.fromEntries(o.map(e => [e, !0])),
                    ...s ? {
                        nativeAppDetailsRecovery: !0
                    } : {}
                }, ...Ke(n, i)),
                queryFn: s ? ({
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
                    request: () => c(e)
                }) : () => N({
                    operation: `app_details`,
                    request: () => c()
                }),
                enabled: t !== `` && o.length > 0,
                ...s ? {
                    refetchOnMount: !0
                } : {},
                staleTime: I
            })
        }
    }));
async function nt(e) {
    let {
        contentTransport: t,
        contentWorkspaceUserId: n
    } = e;
    if (n === void 0) throw new T({
        revert: !0
    });
    G(t, e.workspaceId, void 0, n);
    let r = R(),
        i = pt({
            ...e,
            referenceTransport: r,
            contentTransport: t,
            contentWorkspaceUserId: n
        });
    if (!Me(r, e.workspaceId, i.enabled === !0) || !Ve(t, e.workspaceId, i.enabled === !0)) throw new T({
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
    if (c && !Ce(a, e.workspaceId, n)) throw new T({
        revert: !0
    });
    return z(r, e.workspaceId), G(t, e.workspaceId, void 0, n), l
}
var rt, it, at, J, ot, Y, st, ct, X, Z, Q, lt, $, ut, dt, ft, pt, mt = e((() => {
    y(), K(), q(), Ie(), B(), me(), ye(), m(), ce(), de(), Ze(), Ee(), E(), Se(), tt(), F(), rt = 50, it = 100, at = 5, J = 100, ot = 5e3, Y = async (e, t, n) => {
        let r = Array(e.length),
            i = 0;
        return await Promise.all(Array.from({
            length: Math.min(e.length, at)
        }, async () => {
            for (; i < e.length;) {
                n.throwIfAborted();
                let a = i;
                i += 1, r[a] = await t(e[a])
            }
        })), r
    }, st = (e, n) => {
        let r = new Set(e.filter(e => e !== ``)),
            i = new Set([...n?.values() ?? []].flatMap(e => [e.id, e.template_id].filter(e => e != null && e !== ``))),
            a = [...n?.values() ?? []].flatMap(e => {
                let t = [e.id, e.template_id].filter(e => e != null && e !== ``);
                return t.some(e => [...r].some(t => t === e || p(t) === p(e) && (!i.has(t) || !i.has(e)))) ? t : []
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
            } = Ye(new Map([
                [i.id, i]
            ])), a = lt({
                app: i,
                exactEffectiveAppIds: r,
                hydratedAppsById: t
            }), o = i.sync_metadata?.sync_status, s = X(i) && o?.ksid != null && o.ksid.trim() !== `` && o.ks_status !== `deleting` && o.ks_status !== `deleted`, c = a == null ? s ? `enabled` : e.get(i.id) : fe(a) || X(i) && ue(a) ? `enabled` : `disabled`, l = Q(i, r);
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
        let l = u()?.normalizedAccountUserId,
            d = Z(e),
            f = new Map;
        for (let t of e.values()) X(t) && [...Q(t, d)].some(e => c.has(e)) && f.set(t.id, t);
        let p = await Y([...f.values()], async e => {
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
            if (a.throwIfAborted(), i != null && s != null && l != null && !xe(s, r, l, t)) throw new T({
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
        if (z(d, e, s), G(f, e, s, p), l !== void 0 && he(l, e, u, s), e === `` || n === `` || r.length === 0) return {
            status: `error`
        };
        let m = st(r, a);
        if (m.length === 0 || new Set(r).size > rt || m.length > it) throw Error(`Plugin impact exceeds the supported app lookup limit.`);
        let h = (await Y(m, t => o == null ? H({
            appId: t,
            workspaceId: e,
            signal: s,
            transport: d
        }) : o.fetchQuery(U({
            appId: t,
            workspaceId: e,
            transport: d
        })), s)).flatMap(e => e.plugins);
        z(d, e, s), G(f, e, s, p);
        let g = new Map;
        for (let e of h) g.has(e.id) || g.set(e.id, ct(e));
        let _ = [...g.values()];
        if (!g.has(n)) return {
            status: `error`
        };
        let v = new Map(a ?? []),
            y = $(v),
            b = new Set(_.flatMap(dt));
        if (b.size > ot) throw Error(`Plugin impact exceeds the supported required-app limit.`);
        let x = [...b].filter(e => !y.has(e));
        if (x.length > 0) {
            z(d, e, s), G(f, e, s, p);
            let t = Array.from({
                    length: Math.ceil(x.length / J)
                }, (e, t) => x.slice(t * J, (t + 1) * J)),
                n = await Y(t, t => o == null ? He({
                    appIds: t,
                    workspaceId: e,
                    transport: f,
                    workspaceUserId: p,
                    signal: s
                }) : o.fetchQuery(et({
                    appIds: t,
                    workspaceId: e,
                    transport: f,
                    workspaceUserId: p
                })), s);
            z(d, e, s), G(f, e, s, p);
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
        z(d, e, s), G(f, e, s, p), l !== void 0 && he(l, e, u, s);
        let C = Z(v),
            w = new Set(r);
        for (let e of r) {
            let n = t(e);
            n != null && (!C.has(e) || !C.has(n)) && w.add(n)
        }
        let ee = De({
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
        return _e(T, [...S.values()].some(Te)), T
    }, pt = ({
        workspaceId: e,
        pluginId: t,
        targetAppIds: n,
        targetEnabled: r,
        appsById: i,
        queryClient: a,
        referenceTransport: o,
        contentTransport: s,
        contentWorkspaceUserId: c = s === void 0 ? void 0 : u()?.normalizedAccountUserId,
        transport: l = a == null ? `legacy` : pe(),
        ckTransport: d = a == null ? `legacy` : ve()
    }) => {
        let f = a != null && d === `sheep` ? u()?.normalizedAccountUserId : void 0,
            p = st(n, i),
            m = [...new Set(n.filter(e => e !== ``))].sort();
        return D({
            queryKey: P(`impact`, e, t, r, ...m, `lookup`, ...p, ...a != null && l === `sheep` ? [`sheep`] : [], ...a != null && d === `sheep` ? [`ck-sheep`, f] : [], ...o === `sheep` ? [`app-reference-sheep`] : [], ...Ke(s, c)),
            enabled: e !== `` && t !== `` && m.length > 0,
            staleTime: I,
            structuralSharing: (e, t) => {
                let n = te(e, t);
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
    R as S, Ie as _, tt as a, Me as b, Ze as c, Je as d, We as f, U as g, K as h, et as i, q as l, Ve as m, $ as n, $e as o, G as p, mt as r, Xe as s, nt as t, Ge as u, Fe as v, B as x, z as y
};
//# sourceMappingURL=5c40ce75-m5tndnzefz96xdqi.js.map