import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aat as t,
    Fv as n,
    Gnt as r,
    I7 as i,
    IE as a,
    Iat as o,
    JE as s,
    Jit as c,
    KE as l,
    M1 as u,
    PE as d,
    R1 as f,
    Rv as p,
    TK as m,
    Xit as h,
    YE as g,
    Znt as _,
    _8 as v,
    cat as y,
    dat as b,
    fat as x,
    g8 as S,
    qnt as C,
    wK as w,
    z7 as T
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    H as E,
    J as ee,
    s as D,
    w as O
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Cnt as te,
    Mwn as ne,
    Own as re,
    Snt as ie,
    _Cn as ae,
    bCn as k,
    dwn as A,
    iTn as j,
    rTn as M,
    uwn as oe,
    vCn as N
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    $v as se,
    Av as P,
    By as ce,
    Cy as le,
    Dv as F,
    Hy as I,
    Qv as ue,
    Ty as de,
    kv as L
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    c as fe,
    s as pe
} from "./46464433-l21gswyijm194ixu.js";
import {
    a as me,
    c as he,
    d as ge,
    f as _e,
    l as ve,
    n as ye,
    o as be,
    r as xe,
    s as Se,
    t as Ce,
    u as we
} from "./bb6515d2-fhgu2dna4nqk84hv.js";
import {
    a as Te,
    n as Ee
} from "./1fc9a22c-xlhku2d1m0j6tx1f.js";
var De, Oe, ke = e((() => {
    g(), De = e => {
        let t = [],
            n = new Map,
            r = new Set;
        for (let i of e?.values() ?? []) {
            let e = l(i.id);
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
    }, Oe = e => e.primaryConnector.status === `ONLY_ME` ? `publish` : `enable`
}));

function Ae() {
    return r(R, {
        disableExposureLog: !0
    })
}

function je() {
    return r(R)
}
var R, Me = e((() => {
    _(), R = `87717130`
}));

function Ne() {
    if (typeof window > `u`) return !1;
    let e = new URL(b, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function z() {
    return Ne() && Ae() ? `sheep` : `legacy`
}

function B(e, t, n, r) {
    if (n?.throwIfAborted(), e !== void 0 && (ae(t), e !== z() || r !== void 0 && u()?.normalizedAccountUserId !== r)) throw new E({
        revert: !0
    })
}

function Pe(e, t, n) {
    return !n || !N(t) || e !== z() ? !1 : !Ne() || (je() ? `sheep` : `legacy`) === e
}
async function Fe({
    appId: e,
    workspaceId: t,
    signal: n,
    limit: r,
    pageToken: a
}) {
    return await A({
        operation: `app_references`,
        transport: `sheep`,
        workspaceId: t,
        signal: n,
        request: async o => {
            B(`sheep`, t, n), Ie ??= new i({
                baseUrl: b.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let s = await Ie.safeGet(`/plugins/admin/by-app/{app_id}`, {
                ...o,
                authOption: y.Required,
                preserveAccountIdOnRetry: !0,
                signal: n,
                additionalHeaders: {
                    ...w(t),
                    [c]: `ADMIN_SETTING`,
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
            return B(`sheep`, t, n), s
        }
    })
}
var Ie, Le, Re = e((() => {
        oe(), S(), x(), h(), T(), _(), f(), m(), D(), k(), Me(), Le = v(z, e => {
            let t = C();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `adminPluginAppReferenceReadTransport`
        })
    })),
    ze, Be, V, Ve = e((() => {
        oe(), m(), j(), te(), x(), o(), h(), D(), P(), Re(), ze = 1e3, Be = async ({
            appId: e,
            workspaceId: n,
            signal: r,
            transport: i,
            workspaceUserId: a
        }) => {
            let o = new Map,
                s = new Set,
                l = null,
                u = null;
            for (;;) {
                B(i, n, r, a);
                let d = l,
                    f;
                try {
                    f = i === `sheep` ? await Fe({
                        appId: e,
                        workspaceId: n,
                        signal: r,
                        limit: ze,
                        pageToken: l
                    }) : await A({
                        operation: `app_references`,
                        transport: `plugin_service`,
                        workspaceId: n,
                        signal: r,
                        request: t => ie.safeGet(`/plugins/admin/by-app/{app_id}`, {
                            ...t,
                            authOption: y.Required,
                            signal: r,
                            additionalHeaders: {
                                ...w(n),
                                [c]: M.ADMIN_SETTING
                            },
                            parameters: {
                                path: {
                                    app_id: e
                                },
                                query: {
                                    limit: ze,
                                    ...d == null ? {} : {
                                        pageToken: d
                                    }
                                }
                            }
                        })
                    })
                } catch (e) {
                    if (B(i, n, r, a), i !== `sheep` && e instanceof t && e.status === 404 && l == null) return {
                        plugins: [],
                        totalCount: 0,
                        isComplete: !0
                    };
                    throw e
                }
                if (B(i, n, r, a), !Array.isArray(f.plugins) || f.pagination == null || !Number.isSafeInteger(f.pagination.limit) || f.pagination.limit <= 0 || !Number.isSafeInteger(f.total_count) || f.total_count < 0) throw Error(`Plugin impact references are incomplete or malformed.`);
                if (u != null && u !== f.total_count) throw Error(`Plugin impact reference counts changed during pagination.`);
                u = f.total_count;
                for (let e of f.plugins) o.set(e.id, e);
                let p = f.pagination.next_page_token ?? null;
                if (p != null && typeof p != `string`) throw Error(`Plugin impact pagination returned an invalid page token.`);
                if (p == null) return {
                    plugins: [...o.values()],
                    totalCount: u,
                    isComplete: o.size === u
                };
                if (s.has(p)) throw Error(`Plugin impact pagination repeated a page token.`);
                s.add(p), l = p
            }
        }, V = ({
            appId: e,
            workspaceId: t,
            transport: n,
            workspaceUserId: r
        }) => O({
            queryKey: L(`app-references`, t, e, ...r === void 0 ? [] : [{
                canonicalReferenceActor: r
            }], ...n === `sheep` ? [`app-reference-sheep`] : []),
            enabled: t !== `` && e !== ``,
            staleTime: F,
            queryFn: ({
                signal: i
            }) => Be({
                appId: e,
                workspaceId: t,
                signal: i,
                workspaceUserId: r,
                transport: r !== void 0 || n === `sheep` ? n : void 0
            })
        })
    }));

function He() {
    return r(`241231532`, {
        disableExposureLog: !0
    })
}

function Ue() {
    return r(`241231532`)
}
var We = e((() => {
    _()
}));

function Ge() {
    if (typeof window > `u`) return !1;
    let e = new URL(b, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function H() {
    return Ge() && He() ? `sheep` : `legacy`
}

function U(e, t, n, r) {
    if (n?.throwIfAborted(), e !== void 0 && (ae(t), e !== H() || r !== void 0 && u()?.normalizedAccountUserId !== r)) throw new E({
        revert: !0
    })
}

function Ke(e, t, n) {
    return !n || !N(t) || e !== H() ? !1 : !Ge() || (Ue() ? `sheep` : `legacy`) === e
}
async function qe({
    appIds: e,
    workspaceId: t,
    transport: n,
    signal: r,
    workspaceUserId: a
}) {
    let o = a ?? (n === void 0 ? void 0 : u()?.normalizedAccountUserId);
    if (U(n, t, r, o), e.length === 0) return new Map;
    let s;
    if (n !== `sheep`) s = await A({
        operation: `workspace_content`,
        transport: `sa_server`,
        workspaceId: t,
        signal: r,
        request: n => re(e, {
            workspace: !0,
            accountId: t,
            productSku: M.ADMIN_SETTING
        }, n)
    });
    else {
        if (o === void 0) throw new E({
            revert: !0
        });
        Je ??= new i({
            baseUrl: b.replace(/\/$/, ``),
            targetRoutesAreCanonical: !0
        });
        let n = Je;
        s = await A({
            operation: `workspace_content`,
            transport: `sheep`,
            workspaceId: t,
            signal: r,
            request: async i => {
                let a = await n.safePost(`/apps/workspace/content`, {
                    ...i,
                    authOption: y.Required,
                    preserveAccountIdOnRetry: !0,
                    ...r === void 0 ? {} : {
                        signal: r
                    },
                    additionalHeaders: {
                        ...w(t),
                        [c]: M.ADMIN_SETTING,
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
    return U(n, t, r, o), s
}
var Je, Ye, W = e((() => {
    oe(), ne(), j(), S(), f(), x(), h(), T(), _(), m(), D(), k(), We(), Ye = v(H, e => {
        let t = C();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }, {
        name: `adminPluginWorkspaceContentReadTransport`
    })
}));

function Xe(e) {
    if (e == null || e.workspaceUserId == null) return !1;
    let t = u();
    return N(e.workspaceId) && t?.getWorkspaceId() === e.workspaceId && t.normalizedAccountUserId === e.workspaceUserId && H() === e.transport
}

function Ze(e, t) {
    return e === void 0 ? [] : [{
        contentTransport: e,
        workspaceUserId: t
    }]
}

function Qe(e, t) {
    let n = e.at(-1);
    return typeof n == `object` && !!n && `contentTransport` in n && n.contentTransport === t.transport && `workspaceUserId` in n && n.workspaceUserId === t.workspaceUserId
}

function $e({
    queryClient: e,
    previous: t,
    next: n
}) {
    if (!(t.workspaceId === n.workspaceId && t.transport === n.transport && t.workspaceUserId === n.workspaceUserId))
        for (let n of [`apps-details`, `impact`]) {
            let r = {
                queryKey: L(n, t.workspaceId),
                predicate: e => Qe(e.queryKey, t)
            };
            e.cancelQueries(r), e.invalidateQueries({
                ...r,
                refetchType: `none`
            })
        }
}
var G = e((() => {
        f(), k(), P(), W()
    })),
    et, tt, K, nt = e((() => {
        n(), a(), j(), S(), f(), x(), o(), _(), D(), ce(), P(), G(), W(), et = () => r(`585473327`), tt = v(et, e => {
            let t = C();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `nativeAdminPluginAppRecoveryEnabled`
        }), K = ({
            appIds: e,
            workspaceId: n,
            transport: r,
            nativeAppDetailsRecoveryEnabled: i = !1,
            workspaceUserId: a = r === void 0 ? void 0 : u()?.normalizedAccountUserId
        }) => {
            let o = [...new Set(e)].sort(),
                s = i,
                c = e => {
                    if (r === `sheep` && a === void 0) throw new E({
                        revert: !0
                    });
                    return qe({
                        appIds: o,
                        workspaceId: n,
                        workspaceUserId: a,
                        transport: r,
                        signal: e
                    })
                },
                l = async (e, i) => {
                    let a = await c(r === `sheep` ? i : void 0);
                    i.throwIfAborted();
                    let s = o.filter(e => !a.has(e) && p(e));
                    if (s.length === 0) return a;
                    let l;
                    try {
                        l = await d(e, s, {
                            workspaceId: n,
                            productSku: M.ADMIN_SETTING,
                            authOption: y.Required,
                            signal: i,
                            staleTime: 0
                        })
                    } catch (e) {
                        if (i.throwIfAborted(), e instanceof t) return a;
                        throw e
                    }
                    i.throwIfAborted();
                    let u = [...l].flatMap(([e, t]) => t.id === e && s.includes(e) ? [
                        [e, {
                            ...t,
                            logo_url_dark: t.logo_url_dark ?? null
                        }]
                    ] : []);
                    return u.length === 0 ? a : new Map([...a, ...u])
                };
            return O({
                queryKey: L(`apps-details`, n, {
                    appIds: Object.fromEntries(o.map(e => [e, !0])),
                    ...s ? {
                        nativeAppDetailsRecovery: !0
                    } : {}
                }, ...Ze(r, a)),
                queryFn: s ? ({
                    client: e,
                    signal: t
                }) => I({
                    operation: `app_details`,
                    signal: t,
                    request: () => l(e, t)
                }) : r === `sheep` ? ({
                    signal: e
                }) => I({
                    operation: `app_details`,
                    request: () => c(e)
                }) : () => I({
                    operation: `app_details`,
                    request: () => c()
                }),
                enabled: n !== `` && o.length > 0,
                ...s ? {
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
    if (n === void 0) throw new E({
        revert: !0
    });
    U(t, e.workspaceId, void 0, n);
    let r = z(),
        i = pt({
            ...e,
            referenceTransport: r,
            contentTransport: t,
            contentWorkspaceUserId: n
        });
    if (!Pe(r, e.workspaceId, i.enabled === !0) || !Ke(t, e.workspaceId, i.enabled === !0)) throw new E({
        revert: !0
    });
    let a = i.queryKey.includes(`ck-sheep`) ? `sheep` : `legacy`,
        o = e.queryClient.getQueryCache().find({
            queryKey: i.queryKey,
            exact: !0
        }),
        s = e.queryClient.getQueryData(i.queryKey),
        c = o != null && !o.state.isInvalidated && o.state.dataUpdatedAt !== 0 && Date.now() - o.state.dataUpdatedAt < 6e4 && s != null && he(s),
        l = await e.queryClient.fetchQuery(i);
    if (c && !Se(a, e.workspaceId, n)) throw new E({
        revert: !0
    });
    return B(r, e.workspaceId), U(t, e.workspaceId, void 0, n), l
}
var it, at, ot, q, st, J, Y, ct, X, Z, Q, lt, $, ut, dt, ft, pt, mt = e((() => {
    f(), W(), G(), Ve(), Re(), pe(), ve(), g(), le(), ue(), ke(), Te(), D(), xe(), nt(), P(), it = 50, at = 100, ot = 5, q = 100, st = 5e3, J = async (e, t, n) => {
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
    }, Y = (e, t) => {
        let n = new Set(e.filter(e => e !== ``)),
            r = new Set([...t?.values() ?? []].flatMap(e => [e.id, e.template_id].filter(e => e != null && e !== ``))),
            i = [...t?.values() ?? []].flatMap(e => {
                let t = [e.id, e.template_id].filter(e => e != null && e !== ``);
                return t.some(e => [...n].some(t => t === e || l(t) === l(e) && (!r.has(t) || !r.has(e)))) ? t : []
            });
        return [...new Set([...n, ...i].flatMap(e => {
            let t = s(e);
            return t == null || r.has(e) && r.has(t) ? [e] : [e, t]
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
    }), X = e => e.status === `DISABLED_BY_ADMIN` && (e.labels?.sync_only_connector === `true` || e.sync_metadata?.sync_only === !0 || e.sync_metadata?.supports_admin_sync === !0), Z = e => new Set([...e.values()].flatMap(e => [e.id, e.template_id].filter(e => e != null && e !== ``))), Q = (e, t) => {
        let n = new Set([e.id, e.template_id].filter(e => e != null && e !== ``));
        for (let e of n) {
            let r = s(e);
            r != null && !t.has(r) && n.add(r)
        }
        return n
    }, lt = ({
        app: e,
        exactEffectiveAppIds: t,
        hydratedAppsById: n
    }) => {
        let r = [e.id, e.template_id].filter(e => e != null && e !== ``);
        for (let e of r) {
            let r = n?.get(e);
            if (r != null) return r;
            let i = s(e);
            if (i != null && !t.has(i)) {
                let e = n?.get(i);
                if (e != null) return e
            }
        }
    }, $ = (e, t) => {
        let n = new Map,
            r = Z(e);
        for (let i of e.values()) {
            let {
                statusesByConnectorId: e
            } = De(new Map([
                [i.id, i]
            ])), a = lt({
                app: i,
                exactEffectiveAppIds: r,
                hydratedAppsById: t
            }), o = i.sync_metadata?.sync_status, s = X(i) && o?.ksid != null && o.ksid.trim() !== `` && o.ks_status !== `deleting` && o.ks_status !== `deleted`, c = a == null ? s ? `enabled` : e.get(i.id) : se(a) || X(i) && de(a) ? `enabled` : `disabled`, l = Q(i, r);
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
        let p = await J([...f.values()], async e => {
            a.throwIfAborted();
            let t = i == null ? await Ce({
                appId: e.id,
                directoryApp: e,
                workspaceId: r,
                signal: a
            }) : await i.fetchQuery(ye({
                transport: o,
                ckTransport: s,
                appId: e.id,
                directoryApp: e,
                workspaceId: r
            }));
            if (a.throwIfAborted(), i != null && s != null && l != null && !be(s, r, l, t)) throw new E({
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
        pluginId: t,
        targetAppIds: n,
        targetEnabled: r,
        appsById: i,
        queryClient: a,
        signal: o,
        transport: c,
        ckTransport: l,
        ckWorkspaceUserId: u,
        referenceTransport: d,
        contentTransport: f,
        contentWorkspaceUserId: p
    }) => {
        if (B(d, e, o), U(f, e, o, p), l !== void 0 && me(l, e, u, o), e === `` || t === `` || n.length === 0) return {
            status: `error`
        };
        let m = Y(n, i);
        if (m.length === 0 || new Set(n).size > it || m.length > at) throw Error(`Plugin impact exceeds the supported app lookup limit.`);
        let h = (await J(m, t => a == null ? Be({
            appId: t,
            workspaceId: e,
            signal: o,
            transport: d
        }) : a.fetchQuery(V({
            appId: t,
            workspaceId: e,
            transport: d
        })), o)).flatMap(e => e.plugins);
        B(d, e, o), U(f, e, o, p);
        let g = new Map;
        for (let e of h) g.has(e.id) || g.set(e.id, ct(e));
        let _ = [...g.values()];
        if (!g.has(t)) return {
            status: `error`
        };
        let v = new Map(i ?? []),
            y = $(v),
            b = new Set(_.flatMap(dt));
        if (b.size > st) throw Error(`Plugin impact exceeds the supported required-app limit.`);
        let x = [...b].filter(e => !y.has(e));
        if (x.length > 0) {
            B(d, e, o), U(f, e, o, p);
            let t = Array.from({
                    length: Math.ceil(x.length / q)
                }, (e, t) => x.slice(t * q, (t + 1) * q)),
                n = await J(t, t => a == null ? qe({
                    appIds: t,
                    workspaceId: e,
                    transport: f,
                    workspaceUserId: p,
                    signal: o
                }) : a.fetchQuery(K({
                    appIds: t,
                    workspaceId: e,
                    transport: f,
                    workspaceUserId: p
                })), o);
            B(d, e, o), U(f, e, o, p);
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
            queryClient: a,
            signal: o
        });
        B(d, e, o), U(f, e, o, p), l !== void 0 && me(l, e, u, o);
        let C = Z(v),
            w = new Set(n);
        for (let e of n) {
            let t = s(e);
            t != null && (!C.has(e) || !C.has(t)) && w.add(t)
        }
        let T = Ee({
                referencedPlugins: _,
                appEnabledById: $(v, S),
                targetAppIds: w,
                targetEnabled: r,
                selectedPluginId: t
            }),
            E = T.complete ? {
                status: `ready`,
                plugins: T.plugins
            } : {
                status: `error`
            };
        return ge(E, [...S.values()].some(we)), E
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
        transport: l = a == null ? `legacy` : fe(),
        ckTransport: d = a == null ? `legacy` : _e()
    }) => {
        let f = a != null && d === `sheep` ? u()?.normalizedAccountUserId : void 0,
            p = Y(n, i),
            m = [...new Set(n.filter(e => e !== ``))].sort();
        return O({
            queryKey: L(`impact`, e, t, r, ...m, `lookup`, ...p, ...a != null && l === `sheep` ? [`sheep`] : [], ...a != null && d === `sheep` ? [`ck-sheep`, f] : [], ...o === `sheep` ? [`app-reference-sheep`] : [], ...Ze(s, c)),
            enabled: e !== `` && t !== `` && m.length > 0,
            staleTime: F,
            structuralSharing: (e, t) => {
                let n = ee(e, t);
                return typeof n == `object` && n && ge(n, he(t)), n
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
    ke as S, B as _, nt as a, z as b, Xe as c, U as d, Ke as f, Le as g, Ve as h, K as i, $e as l, V as m, $ as n, tt as o, W as p, mt as r, G as s, rt as t, Ye as u, Pe as v, Oe as x, Re as y
};
//# sourceMappingURL=5c40ce75-nshdpqf2s79293qe.js.map