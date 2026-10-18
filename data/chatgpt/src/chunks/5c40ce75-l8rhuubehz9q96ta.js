import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AE as t,
    Ait as n,
    B6 as r,
    DE as i,
    Nit as a,
    Pit as o,
    QG as s,
    Qit as c,
    V6 as l,
    ZG as u,
    git as d,
    hnt as f,
    i1 as p,
    iat as m,
    kE as h,
    l7 as g,
    o7 as _,
    pnt as v,
    u1 as y,
    vit as b,
    ynt as x
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    H as S,
    Y as C,
    s as w,
    w as T
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $Sn as E,
    Gwn as ee,
    QCn as te,
    Wwn as ne,
    XCn as re,
    eCn as ie,
    gnt as ae,
    hnt as oe,
    nCn as se
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Fy as ce,
    Py as le,
    Qv as D,
    ab as ue,
    ey as O,
    sb as de,
    ty as k
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    c as fe,
    s as pe
} from "./46464433-i8k628j3n5wwc6bl.js";
import {
    a as A,
    c as j,
    d as M,
    f as me,
    l as he,
    n as ge,
    o as _e,
    r as ve,
    s as ye,
    t as be,
    u as xe
} from "./bb6515d2-kwgbk3krkzbqnh7d.js";
import {
    a as Se,
    d as Ce,
    f as we,
    i as Te,
    n as Ee,
    p as De,
    t as Oe,
    u as N
} from "./5a69c9a5-c4hl3v9hehncfzqi.js";
import {
    a as ke,
    n as Ae
} from "./1fc9a22c-e1zej8rvtll4nra0.js";
var je, Me, Ne = e((() => {
    t(), je = e => {
        let t = [],
            n = new Map,
            r = new Set;
        for (let a of e?.values() ?? []) {
            let e = i(a.id);
            if (r.has(e)) continue;
            r.add(e);
            let o = a.template_id ?? null;
            t.push({
                primaryConnector: {
                    id: a.id,
                    template_id: o
                },
                relatedConnectors: []
            });
            let s = a.labels?.sync_only_connector === `true` || a.sync_metadata?.sync_only === !0 || a.sync_metadata?.supports_admin_sync === !0,
                c = a.status === `ENABLED` ? `enabled` : a.status === `ONLY_ME` || a.status === `DISABLED_BY_ADMIN` && !s ? `disabled` : null;
            c != null && (n.set(a.id, c), o != null && o !== `` && n.set(o, c))
        }
        return {
            apps: t,
            statusesByConnectorId: n
        }
    }, Me = e => e.primaryConnector.status === `ONLY_ME` ? `publish` : `enable`
}));

function Pe() {
    return v(P, {
        disableExposureLog: !0
    })
}

function Fe() {
    return v(P)
}
var P, Ie = e((() => {
    x(), P = `87717130`
}));

function F() {
    if (typeof window > `u`) return !1;
    let e = new URL(a, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function I() {
    return F() && Pe() ? `sheep` : `legacy`
}

function L(e, t, n, r) {
    if (n?.throwIfAborted(), e !== void 0 && (E(t), e !== I() || r !== void 0 && p()?.normalizedAccountUserId !== r)) throw new S({
        revert: !0
    })
}

function R(e, t, n) {
    return !n || !ie(t) || e !== I() ? !1 : !F() || (Fe() ? `sheep` : `legacy`) === e
}
async function Le({
    appId: e,
    workspaceId: t,
    signal: r,
    limit: i,
    pageToken: o
}) {
    return await te({
        operation: `app_references`,
        transport: `sheep`,
        workspaceId: t,
        signal: r,
        request: async s => {
            L(`sheep`, t, r), z ??= new _({
                baseUrl: a.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let c = await z.safeGet(`/plugins/admin/by-app/{app_id}`, {
                ...s,
                authOption: n.Required,
                preserveAccountIdOnRetry: !0,
                signal: r,
                additionalHeaders: {
                    ...u(t),
                    [d]: `ADMIN_SETTING`,
                    "x-openai-use-sheep": `1`
                },
                parameters: {
                    path: {
                        app_id: e
                    },
                    query: {
                        limit: i,
                        ...o == null ? {} : {
                            pageToken: o
                        }
                    }
                }
            });
            return L(`sheep`, t, r), c
        }
    })
}
var z, B, V = e((() => {
        re(), r(), o(), b(), g(), x(), y(), s(), w(), se(), Ie(), B = l(I, e => {
            let t = f();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `adminPluginAppReferenceReadTransport`
        })
    })),
    H, U, W, Re = e((() => {
        re(), s(), ee(), ae(), o(), m(), b(), w(), k(), V(), H = 1e3, U = async ({
            appId: e,
            workspaceId: t,
            signal: r,
            transport: i,
            workspaceUserId: a
        }) => {
            let o = new Map,
                s = new Set,
                l = null,
                f = null;
            for (;;) {
                L(i, t, r, a);
                let p = l,
                    m;
                try {
                    m = i === `sheep` ? await Le({
                        appId: e,
                        workspaceId: t,
                        signal: r,
                        limit: H,
                        pageToken: l
                    }) : await te({
                        operation: `app_references`,
                        transport: `plugin_service`,
                        workspaceId: t,
                        signal: r,
                        request: i => oe.safeGet(`/plugins/admin/by-app/{app_id}`, {
                            ...i,
                            authOption: n.Required,
                            signal: r,
                            additionalHeaders: {
                                ...u(t),
                                [d]: ne.ADMIN_SETTING
                            },
                            parameters: {
                                path: {
                                    app_id: e
                                },
                                query: {
                                    limit: H,
                                    ...p == null ? {} : {
                                        pageToken: p
                                    }
                                }
                            }
                        })
                    })
                } catch (e) {
                    if (L(i, t, r, a), i !== `sheep` && e instanceof c && e.status === 404 && l == null) return {
                        plugins: [],
                        totalCount: 0,
                        isComplete: !0
                    };
                    throw e
                }
                if (L(i, t, r, a), !Array.isArray(m.plugins) || m.pagination == null || !Number.isSafeInteger(m.pagination.limit) || m.pagination.limit <= 0 || !Number.isSafeInteger(m.total_count) || m.total_count < 0) throw Error(`Plugin impact references are incomplete or malformed.`);
                if (f != null && f !== m.total_count) throw Error(`Plugin impact reference counts changed during pagination.`);
                f = m.total_count;
                for (let e of m.plugins) o.set(e.id, e);
                let h = m.pagination.next_page_token ?? null;
                if (h != null && typeof h != `string`) throw Error(`Plugin impact pagination returned an invalid page token.`);
                if (h == null) return {
                    plugins: [...o.values()],
                    totalCount: f,
                    isComplete: o.size === f
                };
                if (s.has(h)) throw Error(`Plugin impact pagination repeated a page token.`);
                s.add(h), l = h
            }
        }, W = ({
            appId: e,
            workspaceId: t,
            transport: n,
            workspaceUserId: r
        }) => T({
            queryKey: O(`app-references`, t, e, ...r === void 0 ? [] : [{
                canonicalReferenceActor: r
            }], ...n === `sheep` ? [`app-reference-sheep`] : []),
            enabled: t !== `` && e !== ``,
            staleTime: D,
            queryFn: ({
                signal: i
            }) => U({
                appId: e,
                workspaceId: t,
                signal: i,
                workspaceUserId: r,
                transport: r !== void 0 || n === `sheep` ? n : void 0
            })
        })
    }));
async function ze(e) {
    let {
        contentTransport: t,
        contentWorkspaceUserId: n
    } = e;
    if (n === void 0) throw new S({
        revert: !0
    });
    N(t, e.workspaceId, void 0, n);
    let r = I(),
        i = $({
            ...e,
            referenceTransport: r,
            contentTransport: t,
            contentWorkspaceUserId: n
        });
    if (!R(r, e.workspaceId, i.enabled === !0) || !Ce(t, e.workspaceId, i.enabled === !0)) throw new S({
        revert: !0
    });
    let a = i.queryKey.includes(`ck-sheep`) ? `sheep` : `legacy`,
        o = e.queryClient.getQueryCache().find({
            queryKey: i.queryKey,
            exact: !0
        }),
        s = e.queryClient.getQueryData(i.queryKey),
        c = o != null && !o.state.isInvalidated && o.state.dataUpdatedAt !== 0 && Date.now() - o.state.dataUpdatedAt < 6e4 && s != null && j(s),
        l = await e.queryClient.fetchQuery(i);
    if (c && !ye(a, e.workspaceId, n)) throw new S({
        revert: !0
    });
    return L(r, e.workspaceId), N(t, e.workspaceId, void 0, n), l
}
var Be, Ve, He, G, Ue, K, q, J, Y, X, Z, We, Q, Ge, Ke, qe, $, Je = e((() => {
    y(), De(), Se(), Re(), V(), pe(), he(), t(), ue(), le(), Ne(), ke(), w(), ve(), Ee(), k(), Be = 50, Ve = 100, He = 5, G = 100, Ue = 5e3, K = async (e, t, n) => {
        let r = Array(e.length),
            i = 0;
        return await Promise.all(Array.from({
            length: Math.min(e.length, He)
        }, async () => {
            for (; i < e.length;) {
                n.throwIfAborted();
                let a = i;
                i += 1, r[a] = await t(e[a])
            }
        })), r
    }, q = (e, t) => {
        let n = new Set(e.filter(e => e !== ``)),
            r = new Set([...t?.values() ?? []].flatMap(e => [e.id, e.template_id].filter(e => e != null && e !== ``))),
            a = [...t?.values() ?? []].flatMap(e => {
                let t = [e.id, e.template_id].filter(e => e != null && e !== ``);
                return t.some(e => [...n].some(t => t === e || i(t) === i(e) && (!r.has(t) || !r.has(e)))) ? t : []
            });
        return [...new Set([...n, ...a].flatMap(e => {
            let t = h(e);
            return t == null || r.has(e) && r.has(t) ? [e] : [e, t]
        }))].sort()
    }, J = e => ({
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
    }), Y = e => e.status === `DISABLED_BY_ADMIN` && (e.labels?.sync_only_connector === `true` || e.sync_metadata?.sync_only === !0 || e.sync_metadata?.supports_admin_sync === !0), X = e => new Set([...e.values()].flatMap(e => [e.id, e.template_id].filter(e => e != null && e !== ``))), Z = (e, t) => {
        let n = new Set([e.id, e.template_id].filter(e => e != null && e !== ``));
        for (let e of n) {
            let r = h(e);
            r != null && !t.has(r) && n.add(r)
        }
        return n
    }, We = ({
        app: e,
        exactEffectiveAppIds: t,
        hydratedAppsById: n
    }) => {
        let r = [e.id, e.template_id].filter(e => e != null && e !== ``);
        for (let e of r) {
            let r = n?.get(e);
            if (r != null) return r;
            let i = h(e);
            if (i != null && !t.has(i)) {
                let e = n?.get(i);
                if (e != null) return e
            }
        }
    }, Q = (e, t) => {
        let n = new Map,
            r = X(e);
        for (let i of e.values()) {
            let {
                statusesByConnectorId: e
            } = je(new Map([
                [i.id, i]
            ])), a = We({
                app: i,
                exactEffectiveAppIds: r,
                hydratedAppsById: t
            }), o = i.sync_metadata?.sync_status, s = Y(i) && o?.ksid != null && o.ksid.trim() !== `` && o.ks_status !== `deleting` && o.ks_status !== `deleted`, c = a == null ? s ? `enabled` : e.get(i.id) : ce(a) || Y(i) && de(a) ? `enabled` : `disabled`, l = Z(i, r);
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
    }, Ge = async ({
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
        let l = p()?.normalizedAccountUserId,
            u = X(e),
            d = new Map;
        for (let t of e.values()) Y(t) && [...Z(t, u)].some(e => c.has(e)) && d.set(t.id, t);
        let f = await K([...d.values()], async e => {
            a.throwIfAborted();
            let t = i == null ? await be({
                appId: e.id,
                directoryApp: e,
                workspaceId: r,
                signal: a
            }) : await i.fetchQuery(ge({
                transport: o,
                ckTransport: s,
                appId: e.id,
                directoryApp: e,
                workspaceId: r
            }));
            if (a.throwIfAborted(), i != null && s != null && l != null && !_e(s, r, l, t)) throw new S({
                revert: !0
            });
            return [e, t]
        }, a);
        return new Map(f.flatMap(([e, t]) => [...Z(e, u)].map(e => [e, t])))
    }, Ke = e => {
        if (e.requiredAppIdGroups != null) return e.requiredAppIdGroups.flat();
        if (e.appManifest == null) return e.appIds;
        let t = new Set,
            n = new Set;
        return Object.values(e.appManifest.apps).forEach(e => {
            e.required === !1 ? t.add(e.id) : n.add(e.id)
        }), e.appIds.filter(e => !t.has(e) || n.has(e))
    }, qe = async ({
        workspaceId: e,
        pluginId: t,
        targetAppIds: n,
        targetEnabled: r,
        appsById: i,
        queryClient: a,
        signal: o,
        transport: s,
        ckTransport: c,
        ckWorkspaceUserId: l,
        referenceTransport: u,
        contentTransport: d,
        contentWorkspaceUserId: f
    }) => {
        if (L(u, e, o), N(d, e, o, f), c !== void 0 && A(c, e, l, o), e === `` || t === `` || n.length === 0) return {
            status: `error`
        };
        let p = q(n, i);
        if (p.length === 0 || new Set(n).size > Be || p.length > Ve) throw Error(`Plugin impact exceeds the supported app lookup limit.`);
        let m = (await K(p, t => a == null ? U({
            appId: t,
            workspaceId: e,
            signal: o,
            transport: u
        }) : a.fetchQuery(W({
            appId: t,
            workspaceId: e,
            transport: u
        })), o)).flatMap(e => e.plugins);
        L(u, e, o), N(d, e, o, f);
        let g = new Map;
        for (let e of m) g.has(e.id) || g.set(e.id, J(e));
        let _ = [...g.values()];
        if (!g.has(t)) return {
            status: `error`
        };
        let v = new Map(i ?? []),
            y = Q(v),
            b = new Set(_.flatMap(Ke));
        if (b.size > Ue) throw Error(`Plugin impact exceeds the supported required-app limit.`);
        let x = [...b].filter(e => !y.has(e));
        if (x.length > 0) {
            L(u, e, o), N(d, e, o, f);
            let t = Array.from({
                    length: Math.ceil(x.length / G)
                }, (e, t) => x.slice(t * G, (t + 1) * G)),
                n = await K(t, t => a == null ? we({
                    appIds: t,
                    workspaceId: e,
                    transport: d,
                    workspaceUserId: f,
                    signal: o
                }) : a.fetchQuery(Oe({
                    appIds: t,
                    workspaceId: e,
                    transport: d,
                    workspaceUserId: f
                })), o);
            L(u, e, o), N(d, e, o, f);
            for (let e of n) e.forEach((e, t) => v.set(t, e));
            y = Q(v)
        }
        let S = await Ge({
            appsById: v,
            appEnabledById: y,
            requiredAppIds: b,
            transport: s,
            ckTransport: c,
            workspaceId: e,
            queryClient: a,
            signal: o
        });
        L(u, e, o), N(d, e, o, f), c !== void 0 && A(c, e, l, o);
        let C = X(v),
            w = new Set(n);
        for (let e of n) {
            let t = h(e);
            t != null && (!C.has(e) || !C.has(t)) && w.add(t)
        }
        let T = Ae({
                referencedPlugins: _,
                appEnabledById: Q(v, S),
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
        return M(E, [...S.values()].some(xe)), E
    }, $ = ({
        workspaceId: e,
        pluginId: t,
        targetAppIds: n,
        targetEnabled: r,
        appsById: i,
        queryClient: a,
        referenceTransport: o,
        contentTransport: s,
        contentWorkspaceUserId: c = s === void 0 ? void 0 : p()?.normalizedAccountUserId,
        transport: l = a == null ? `legacy` : fe(),
        ckTransport: u = a == null ? `legacy` : me()
    }) => {
        let d = a != null && u === `sheep` ? p()?.normalizedAccountUserId : void 0,
            f = q(n, i),
            m = [...new Set(n.filter(e => e !== ``))].sort();
        return T({
            queryKey: O(`impact`, e, t, r, ...m, `lookup`, ...f, ...a != null && l === `sheep` ? [`sheep`] : [], ...a != null && u === `sheep` ? [`ck-sheep`, d] : [], ...o === `sheep` ? [`app-reference-sheep`] : [], ...Te(s, c)),
            enabled: e !== `` && t !== `` && m.length > 0,
            staleTime: D,
            structuralSharing: (e, t) => {
                let n = C(e, t);
                return typeof n == `object` && n && M(n, j(t)), n
            },
            queryFn: ({
                signal: n
            }) => qe({
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
    W as a, L as c, I as d, Me as f, Je as i, R as l, $ as n, Re as o, Ne as p, Q as r, B as s, ze as t, V as u
};
//# sourceMappingURL=5c40ce75-l8rhuubehz9q96ta.js.map