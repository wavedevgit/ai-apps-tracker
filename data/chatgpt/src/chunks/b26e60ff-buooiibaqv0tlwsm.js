import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CK as t,
    F7 as n,
    Knt as r,
    L1 as i,
    P7 as a,
    R7 as o,
    Wnt as s,
    Xnt as c,
    Yit as ee,
    cK as te,
    dat as ne,
    drt as re,
    g8 as l,
    h8 as ie,
    j1 as u,
    lK as ae,
    lrt as oe,
    qit as d,
    sat as f,
    uat as p,
    urt as se,
    wK as ce
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    H as m,
    Ln as le,
    Rn as ue,
    s as de,
    wn as fe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    bnt as pe,
    cwn as h,
    eTn as me,
    swn as he,
    tTn as ge,
    xat as _e,
    ynt as ve
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Ab as g,
    Av as ye,
    By as be,
    Ob as xe,
    Qb as Se,
    Vy as _,
    ex as v,
    kv as y,
    zy as Ce
} from "./c2675c8c-9bs3zsr3vq259es7.js";
var we = e((() => {
        _e()
    })),
    b, x, S = e((() => {
        fe(), ae(), o(), b = te.UseConnector, x = (e, t) => e.predefined_role === t.predefined_role ? e.name.localeCompare(t.name) : e.predefined_role ? -1 : 1
    })),
    C, w, T, E, D, O, k, A, j, M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, Te, X, Ee, De, Oe, ke, Z, Ae, je = e((() => {
        he(), ce(), xe(), ge(), pe(), ie(), i(), ne(), ee(), o(), c(), de(), oe(), be(), C = `1160491803`, w = `3285682750`, E = e => e != null, D = `1162439792`, k = {
            "x-openai-use-sheep": `1`
        }, A = (e, n) => ({
            authOption: f.Required,
            additionalHeaders: t(e),
            parameters: {
                path: {
                    plugin_id: n
                }
            }
        }), j = e => {
            let {
                allow_use_in_sites: t,
                ...n
            } = e;
            return {
                ...n,
                ...typeof t == `boolean` ? {
                    allow_use_in_sites: t
                } : {}
            }
        }, M = e => ({
            ...j(e),
            allow_use_in_sites: e.allow_use_in_sites ?? !1
        }), N = (e, t, n = `legacy`) => [`admin`, `plugins`, `settings`, e, t, ...n === `legacy` ? [] : [n]].filter(E), P = () => {
            if (typeof window > `u`) return !1;
            let e = new URL(p, window.location.href);
            return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
        }, F = () => P() && s(D, {
            disableExposureLog: !0
        }) ? `sheep` : `legacy`, I = l(F, e => {
            let t = r();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `adminPluginWorkspaceSettingsReadTransport`
        }), L = (e, t, n) => {
            if (n?.throwIfAborted(), e !== F() || e === `sheep` && u()?.getWorkspaceId() !== t) throw new m({
                revert: !0
            })
        }, R = (e, t, n) => {
            if (L(e, t, n), !(!P() || u()?.getWorkspaceId() !== t) && (s(D) ? `sheep` : `legacy`) !== e) throw new m({
                revert: !0
            })
        }, z = () => (O ??= new n({
            baseUrl: p.replace(/\/$/, ``),
            targetRoutesAreCanonical: !0
        }), O), B = e => [...new Set((e ?? []).filter(e => e !== ``))].sort(), V = e => B(e?.installed_by_default_role_ids), H = (e, t) => e.size === t.size && [...e].every(e => t.has(e)), U = ({
            mode: e,
            installedByDefaultRoleIds: t = [],
            eligibleRoleIds: n
        }) => {
            if (e === `available`) return {
                installation_policy: `AVAILABLE`,
                installed_by_default_role_ids: []
            };
            let r = B([...t]),
                i = n != null && n.size > 0 && r.length === n.size && r.every(e => n.has(e));
            return e === `custom_by_group` && r.length === 0 ? {
                installation_policy: `AVAILABLE`,
                installed_by_default_role_ids: []
            } : e === `installed_by_default` || i ? {
                installation_policy: `INSTALLED_BY_DEFAULT`,
                installed_by_default_role_ids: []
            } : {
                installation_policy: `INSTALLED_BY_DEFAULT`,
                installed_by_default_role_ids: r
            }
        }, W = async ({
            workspaceId: e,
            pluginId: n,
            transport: r = F(),
            signal: i
        }) => {
            if (R(r, e, i), r === `sheep`) {
                _({
                    operation: `settings_get`,
                    routeMode: `sheep`
                });
                let a = await h({
                    operation: `settings_get`,
                    transport: `sheep`,
                    workspaceId: e,
                    signal: i,
                    request: r => z().safeGet(`/plugins/admin/{plugin_id}/settings`, {
                        ...r,
                        authOption: f.Required,
                        signal: i,
                        additionalHeaders: {
                            ...t(e),
                            [d]: me.ADMIN_SETTING,
                            ...k
                        },
                        parameters: {
                            path: {
                                plugin_id: n
                            }
                        }
                    })
                });
                return L(r, e, i), M(a)
            }
            let o = s(`3636574873`);
            return _({
                operation: `settings_get`,
                routeMode: o ? `plugin_service` : `sa_server`
            }), o ? await h({
                operation: `settings_get`,
                transport: `plugin_service`,
                workspaceId: e,
                signal: i,
                request: t => ve.safeGet(`/plugins/admin/{plugin_id}/settings`, {
                    ...A(e, n),
                    ...t
                })
            }) : await h({
                operation: `settings_get`,
                transport: `sa_server`,
                workspaceId: e,
                signal: i,
                request: t => a.safeGet(`/accounts/{account_id}/plugins/{plugin_id}/settings`, {
                    ...t,
                    parameters: {
                        path: {
                            account_id: e,
                            plugin_id: n
                        }
                    }
                })
            })
        }, G = async ({
            workspaceId: e,
            pluginId: t,
            settings: n
        }) => {
            let r = {
                    ...n,
                    source_surface: `admin_plugins`
                },
                i = s(`4057407015`);
            return _({
                operation: `settings_patch`,
                routeMode: i ? `plugin_service` : `sa_server`
            }), i ? await ve.safePatch(`/plugins/admin/{plugin_id}/settings`, {
                ...A(e, t),
                requestBody: r
            }) : await a.safePatch(`/accounts/{account_id}/plugins/{plugin_id}/settings`, {
                parameters: {
                    path: {
                        account_id: e,
                        plugin_id: t
                    }
                },
                requestBody: r
            })
        }, K = () => {
            if (typeof window > `u`) return !1;
            let e = new URL(p, window.location.href);
            return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
        }, q = () => (T ??= new n({
            baseUrl: p.replace(/\/$/, ``),
            targetRoutesAreCanonical: !0
        }), T), J = e => K() && s(e, {
            disableExposureLog: !0
        }) ? `sheep` : `legacy`, Y = () => J(C), Te = () => J(w), X = e => {
            let t = r();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, Ee = l(Y, X, {
            name: `adminPluginAdvancedSettingsMutationTransport`
        }), l(Te, X, {
            name: `adminPluginWorkspaceDeleteTransport`
        }), De = ({
            transport: e,
            gate: t,
            workspaceId: n,
            workspaceUserId: r
        }) => {
            if (Oe({
                    workspaceId: n,
                    workspaceUserId: r
                }), (K() && s(t) ? `sheep` : `legacy`) !== e) throw new m({
                revert: !0
            })
        }, Oe = ({
            workspaceId: e,
            workspaceUserId: t
        }) => {
            let n = u();
            if (t == null || n?.getWorkspaceId() !== e || n.normalizedAccountUserId == null || n.normalizedAccountUserId !== t || !n.isAdminOfAccount() && !n.isOwnerOfAccount()) throw new m({
                revert: !0
            })
        }, ke = async ({
            workspaceId: e,
            pluginId: n,
            enabled: r
        }) => K() && s(C) ? (se.count(re.ECOSYSTEM, Ce, {
            frontend_app: `chatgpt_web`,
            operation: `settings_patch`,
            route_mode: `sheep`
        }), j(await q().safePatch(`/plugins/admin/{plugin_id}/settings`, {
            authOption: f.Required,
            additionalHeaders: {
                ...t(e),
                "x-openai-use-sheep": `1`
            },
            parameters: {
                path: {
                    plugin_id: n
                }
            },
            requestBody: {
                enabled: r,
                source_surface: `admin_plugins`
            }
        }))) : await G({
            workspaceId: e,
            pluginId: n,
            settings: {
                enabled: r
            }
        }), Z = async ({
            workspaceId: e,
            workspaceUserId: n,
            pluginId: r,
            settings: i,
            workspaceDefaultInstallation: a,
            transport: o
        }) => {
            let s = {
                sourceSurface: `admin_plugins`
            };
            try {
                if (a != null && (o !== `sheep` || Object.keys(i).length > 0)) throw Error(`Workspace default installation requires a native intent-only update.`);
                o != null && De({
                    transport: o,
                    gate: C,
                    workspaceId: e,
                    workspaceUserId: n
                }), o === `sheep` && _({
                    operation: `settings_patch`,
                    routeMode: `sheep`
                });
                let c = o === `sheep` ? await q().safePatch(`/plugins/admin/{plugin_id}/settings`, {
                    authOption: f.Required,
                    additionalHeaders: {
                        ...t(e),
                        [d]: me.ADMIN_SETTING,
                        ...k
                    },
                    parameters: {
                        path: {
                            plugin_id: r
                        }
                    },
                    requestBody: {
                        ...i,
                        ...a == null ? {} : {
                            workspace_default_installation: a
                        },
                        source_surface: `admin_plugins`
                    },
                    disableAutomaticRetry: !0
                }) : await G({
                    workspaceId: e,
                    pluginId: r,
                    settings: i
                });
                return g({
                    action: `update_plugin_installation_policy`,
                    outcome: `succeeded`,
                    auditContext: s,
                    remotePluginId: r
                }), j(c)
            } catch (e) {
                throw g({
                    action: `update_plugin_installation_policy`,
                    outcome: `failed`,
                    auditContext: s,
                    remotePluginId: r
                }), e
            }
        }, Ae = async ({
            workspaceId: e,
            pluginId: t,
            enabled: n
        }) => await ke({
            workspaceId: e,
            pluginId: t,
            enabled: n
        })
    })),
    Q, Me, $, Ne, Pe, Fe, Ie, Le, Re, ze = e((() => {
        Se(), ue(), we(), ye(), S(), je(), Q = le({
            productivity: {
                id: `admin.plugins.filters.category.option.productivity`,
                defaultMessage: `Productivity`
            },
            creativity: {
                id: `admin.plugins.filters.category.option.creativity`,
                defaultMessage: `Creativity`
            },
            developerTools: {
                id: `admin.plugins.filters.category.option.developer_tools`,
                defaultMessage: `Developer Tools`
            },
            businessAndOperations: {
                id: `admin.plugins.filters.category.option.business_and_operations`,
                defaultMessage: `Business & Operations`
            },
            dataAndAnalytics: {
                id: `admin.plugins.filters.category.option.data_and_analytics`,
                defaultMessage: `Data & Analytics`
            },
            communication: {
                id: `admin.plugins.filters.category.option.communication`,
                defaultMessage: `Communication`
            },
            educationAndResearch: {
                id: `admin.plugins.filters.category.option.education_and_research`,
                defaultMessage: `Education & Research`
            },
            security: {
                id: `admin.plugins.filters.category.option.security`,
                defaultMessage: `Security`
            },
            finance: {
                id: `admin.plugins.filters.category.option.finance`,
                defaultMessage: `Finance`
            },
            healthcare: {
                id: `admin.plugins.filters.category.option.healthcare`,
                defaultMessage: `Healthcare`
            },
            travel: {
                id: `admin.plugins.filters.category.option.travel`,
                defaultMessage: `Travel`
            },
            entertainment: {
                id: `admin.plugins.filters.category.option.entertainment`,
                defaultMessage: `Entertainment`
            },
            other: {
                id: `admin.plugins.filters.category.option.other`,
                defaultMessage: `Other`
            }
        }), Q.productivity, Q.creativity, Q.developerTools, Q.businessAndOperations, Q.dataAndAnalytics, Q.communication, Q.educationAndResearch, Q.security, Q.finance, Q.healthcare, Q.travel, Q.entertainment, Q.other, Me = `__all_roles__`, $ = e => [e, `admin`, `plugins`], Ne = ({
            queryClient: e,
            workspaceId: t,
            invalidateCatalog: n = !0
        }) => Promise.all([e.invalidateQueries({
            queryKey: y(`impact`, t)
        }), e.invalidateQueries({
            queryKey: y(`app-references`, t)
        }), ...n ? [e.invalidateQueries({
            queryKey: y(`list`, t)
        }), e.invalidateQueries({
            queryKey: y(`canonical-app`, t)
        })] : []]), Pe = ({
            queryClient: e,
            workspaceId: t,
            pluginId: n,
            workspaceSettings: r,
            invalidateV2Lists: i = !0
        }) => {
            e.setQueriesData({
                queryKey: y(`detail`, t)
            }, e => e?.id === n ? {
                ...e,
                workspace_settings: r
            } : e), e.setQueriesData({
                queryKey: y(`list`, t)
            }, e => e == null ? e : {
                ...e,
                pages: e.pages.map(e => ({
                    ...e,
                    plugins: e.plugins.map(e => e.id === n ? {
                        ...e,
                        workspace_settings: r
                    } : e)
                }))
            }), i && e.invalidateQueries({
                queryKey: y(`list`, t)
            }), e.setQueriesData({
                queryKey: $(t)
            }, e => Fe(e) ? {
                ...e,
                pages: e.pages.map(e => ({
                    ...e,
                    items: e.items.map(e => e.id === n ? {
                        ...e,
                        workspace_settings: r
                    } : e)
                }))
            } : e)
        }, Fe = e => typeof e == `object` && !!e && `pages` in e && Array.isArray(e.pages), Ie = e => e?.filter(e => e.connector_permissions.includes(b)) ?? [], Le = ({
            installedByDefaultRoleIds: e,
            eligibleRoleIds: t
        }) => {
            let n = [...t].find(v);
            return [...new Set(e.flatMap(e => t.has(e) ? e : v(e) && n != null ? n : []))].sort()
        }, Re = ({
            settings: e,
            eligibleRoleIds: t
        }) => e.installation_policy === `INSTALLED_BY_DEFAULT` && e.installed_by_default_role_ids.length === 0 ? [...t].sort() : Le({
            installedByDefaultRoleIds: V(e),
            eligibleRoleIds: t
        })
    }));
export {
    Z as _, ze as a, S as b, Ee as c, W as d, N as f, Ae as g, F as h, Re as i, I as l, H as m, $ as n, Ne as o, je as p, Ie as r, Pe as s, Me as t, U as u, b as v, x as y
};
//# sourceMappingURL=b26e60ff-buooiibaqv0tlwsm.js.map