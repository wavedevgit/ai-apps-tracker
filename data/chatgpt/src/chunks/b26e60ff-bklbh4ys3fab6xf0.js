import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    Gnt as n,
    I7 as r,
    Jit as i,
    M1 as a,
    R1 as o,
    TK as s,
    Xit as c,
    Znt as ee,
    _8 as l,
    cat as u,
    dat as d,
    drt as te,
    fat as ne,
    frt as re,
    g8 as ie,
    lK as ae,
    qnt as f,
    uK as oe,
    urt as se,
    wK as p,
    z7 as m
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    H as h,
    Ln as ce,
    Rn as le,
    s as ue,
    wn as de
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Cnt as fe,
    Snt as g,
    dwn as _,
    iTn as pe,
    rTn as me,
    uwn as he,
    wat as ge
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Ab as v,
    Av as _e,
    By as ve,
    Ob as ye,
    Qb as be,
    Vy as y,
    ex as b,
    kv as x,
    zy as xe
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
var Se = e((() => {
        ge()
    })),
    S, C, w = e((() => {
        de(), oe(), m(), S = ae.UseConnector, C = (e, t) => e.predefined_role === t.predefined_role ? e.name.localeCompare(t.name) : e.predefined_role ? -1 : 1
    })),
    T, E, D, O, k, A, j, M, N, P, F, I, L, R, z, B, V, H, Ce, U, W, G, K, q, J, Y, we, Te, X, Ee, De, Oe, ke, Z, Ae, je = e((() => {
        he(), s(), ye(), pe(), fe(), ie(), o(), ne(), c(), m(), ee(), ue(), se(), ve(), T = `1160491803`, E = `3285682750`, O = e => e != null, k = `1162439792`, j = {
            "x-openai-use-sheep": `1`
        }, M = (e, t) => ({
            authOption: u.Required,
            additionalHeaders: p(e),
            parameters: {
                path: {
                    plugin_id: t
                }
            }
        }), N = e => {
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
        }, P = e => ({
            ...N(e),
            allow_use_in_sites: e.allow_use_in_sites ?? !1
        }), F = (e, t, n = `legacy`) => [`admin`, `plugins`, `settings`, e, t, ...n === `legacy` ? [] : [n]].filter(O), I = () => {
            if (typeof window > `u`) return !1;
            let e = new URL(d, window.location.href);
            return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
        }, L = () => I() && n(k, {
            disableExposureLog: !0
        }) ? `sheep` : `legacy`, R = l(L, e => {
            let t = f();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `adminPluginWorkspaceSettingsReadTransport`
        }), z = (e, t, n) => {
            if (n?.throwIfAborted(), e !== L() || e === `sheep` && a()?.getWorkspaceId() !== t) throw new h({
                revert: !0
            })
        }, B = (e, t, r) => {
            if (z(e, t, r), !(!I() || a()?.getWorkspaceId() !== t) && (n(k) ? `sheep` : `legacy`) !== e) throw new h({
                revert: !0
            })
        }, V = () => (A ??= new r({
            baseUrl: d.replace(/\/$/, ``),
            targetRoutesAreCanonical: !0
        }), A), H = e => [...new Set((e ?? []).filter(e => e !== ``))].sort(), Ce = e => H(e?.installed_by_default_role_ids), U = (e, t) => e.size === t.size && [...e].every(e => t.has(e)), W = ({
            mode: e,
            installedByDefaultRoleIds: t = [],
            eligibleRoleIds: n
        }) => {
            if (e === `available`) return {
                installation_policy: `AVAILABLE`,
                installed_by_default_role_ids: []
            };
            let r = H([...t]),
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
        }, G = async ({
            workspaceId: e,
            pluginId: r,
            transport: a = L(),
            signal: o
        }) => {
            if (B(a, e, o), a === `sheep`) {
                y({
                    operation: `settings_get`,
                    routeMode: `sheep`
                });
                let t = await _({
                    operation: `settings_get`,
                    transport: `sheep`,
                    workspaceId: e,
                    signal: o,
                    request: t => V().safeGet(`/plugins/admin/{plugin_id}/settings`, {
                        ...t,
                        authOption: u.Required,
                        signal: o,
                        additionalHeaders: {
                            ...p(e),
                            [i]: me.ADMIN_SETTING,
                            ...j
                        },
                        parameters: {
                            path: {
                                plugin_id: r
                            }
                        }
                    })
                });
                return z(a, e, o), P(t)
            }
            let s = n(`3636574873`);
            return y({
                operation: `settings_get`,
                routeMode: s ? `plugin_service` : `sa_server`
            }), s ? await _({
                operation: `settings_get`,
                transport: `plugin_service`,
                workspaceId: e,
                signal: o,
                request: t => g.safeGet(`/plugins/admin/{plugin_id}/settings`, {
                    ...M(e, r),
                    ...t
                })
            }) : await _({
                operation: `settings_get`,
                transport: `sa_server`,
                workspaceId: e,
                signal: o,
                request: n => t.safeGet(`/accounts/{account_id}/plugins/{plugin_id}/settings`, {
                    ...n,
                    parameters: {
                        path: {
                            account_id: e,
                            plugin_id: r
                        }
                    }
                })
            })
        }, K = async ({
            workspaceId: e,
            pluginId: r,
            settings: i
        }) => {
            let a = {
                    ...i,
                    source_surface: `admin_plugins`
                },
                o = n(`4057407015`);
            return y({
                operation: `settings_patch`,
                routeMode: o ? `plugin_service` : `sa_server`
            }), o ? await g.safePatch(`/plugins/admin/{plugin_id}/settings`, {
                ...M(e, r),
                requestBody: a
            }) : await t.safePatch(`/accounts/{account_id}/plugins/{plugin_id}/settings`, {
                parameters: {
                    path: {
                        account_id: e,
                        plugin_id: r
                    }
                },
                requestBody: a
            })
        }, q = () => {
            if (typeof window > `u`) return !1;
            let e = new URL(d, window.location.href);
            return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
        }, J = () => (D ??= new r({
            baseUrl: d.replace(/\/$/, ``),
            targetRoutesAreCanonical: !0
        }), D), Y = e => q() && n(e, {
            disableExposureLog: !0
        }) ? `sheep` : `legacy`, we = () => Y(T), Te = () => Y(E), X = e => {
            let t = f();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, Ee = l(we, X, {
            name: `adminPluginAdvancedSettingsMutationTransport`
        }), l(Te, X, {
            name: `adminPluginWorkspaceDeleteTransport`
        }), De = ({
            transport: e,
            gate: t,
            workspaceId: r,
            workspaceUserId: i
        }) => {
            if (Oe({
                    workspaceId: r,
                    workspaceUserId: i
                }), (q() && n(t) ? `sheep` : `legacy`) !== e) throw new h({
                revert: !0
            })
        }, Oe = ({
            workspaceId: e,
            workspaceUserId: t
        }) => {
            let n = a();
            if (t == null || n?.getWorkspaceId() !== e || n.normalizedAccountUserId == null || n.normalizedAccountUserId !== t || !n.isAdminOfAccount() && !n.isOwnerOfAccount()) throw new h({
                revert: !0
            })
        }, ke = async ({
            workspaceId: e,
            pluginId: t,
            enabled: r
        }) => q() && n(T) ? (te.count(re.ECOSYSTEM, xe, {
            frontend_app: `chatgpt_web`,
            operation: `settings_patch`,
            route_mode: `sheep`
        }), N(await J().safePatch(`/plugins/admin/{plugin_id}/settings`, {
            authOption: u.Required,
            additionalHeaders: {
                ...p(e),
                "x-openai-use-sheep": `1`
            },
            parameters: {
                path: {
                    plugin_id: t
                }
            },
            requestBody: {
                enabled: r,
                source_surface: `admin_plugins`
            }
        }))) : await K({
            workspaceId: e,
            pluginId: t,
            settings: {
                enabled: r
            }
        }), Z = async ({
            workspaceId: e,
            workspaceUserId: t,
            pluginId: n,
            settings: r,
            workspaceDefaultInstallation: a,
            transport: o
        }) => {
            let s = {
                sourceSurface: `admin_plugins`
            };
            try {
                if (a != null && (o !== `sheep` || Object.keys(r).length > 0)) throw Error(`Workspace default installation requires a native intent-only update.`);
                o != null && De({
                    transport: o,
                    gate: T,
                    workspaceId: e,
                    workspaceUserId: t
                }), o === `sheep` && y({
                    operation: `settings_patch`,
                    routeMode: `sheep`
                });
                let c = o === `sheep` ? await J().safePatch(`/plugins/admin/{plugin_id}/settings`, {
                    authOption: u.Required,
                    additionalHeaders: {
                        ...p(e),
                        [i]: me.ADMIN_SETTING,
                        ...j
                    },
                    parameters: {
                        path: {
                            plugin_id: n
                        }
                    },
                    requestBody: {
                        ...r,
                        ...a == null ? {} : {
                            workspace_default_installation: a
                        },
                        source_surface: `admin_plugins`
                    },
                    disableAutomaticRetry: !0
                }) : await K({
                    workspaceId: e,
                    pluginId: n,
                    settings: r
                });
                return v({
                    action: `update_plugin_installation_policy`,
                    outcome: `succeeded`,
                    auditContext: s,
                    remotePluginId: n
                }), N(c)
            } catch (e) {
                throw v({
                    action: `update_plugin_installation_policy`,
                    outcome: `failed`,
                    auditContext: s,
                    remotePluginId: n
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
        be(), le(), Se(), _e(), w(), je(), Q = ce({
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
            queryKey: x(`impact`, t)
        }), e.invalidateQueries({
            queryKey: x(`app-references`, t)
        }), ...n ? [e.invalidateQueries({
            queryKey: x(`list`, t)
        }), e.invalidateQueries({
            queryKey: x(`canonical-app`, t)
        })] : []]), Pe = ({
            queryClient: e,
            workspaceId: t,
            pluginId: n,
            workspaceSettings: r,
            invalidateV2Lists: i = !0
        }) => {
            e.setQueriesData({
                queryKey: x(`detail`, t)
            }, e => e?.id === n ? {
                ...e,
                workspace_settings: r
            } : e), e.setQueriesData({
                queryKey: x(`list`, t)
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
                queryKey: x(`list`, t)
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
        }, Fe = e => typeof e == `object` && !!e && `pages` in e && Array.isArray(e.pages), Ie = e => e?.filter(e => e.connector_permissions.includes(S)) ?? [], Le = ({
            installedByDefaultRoleIds: e,
            eligibleRoleIds: t
        }) => {
            let n = [...t].find(b);
            return [...new Set(e.flatMap(e => t.has(e) ? e : b(e) && n != null ? n : []))].sort()
        }, Re = ({
            settings: e,
            eligibleRoleIds: t
        }) => e.installation_policy === `INSTALLED_BY_DEFAULT` && e.installed_by_default_role_ids.length === 0 ? [...t].sort() : Le({
            installedByDefaultRoleIds: Ce(e),
            eligibleRoleIds: t
        })
    }));
export {
    Z as _, ze as a, w as b, Ee as c, G as d, F as f, Ae as g, L as h, Re as i, R as l, U as m, $ as n, Ne as o, je as p, Ie as r, Pe as s, Me as t, W as u, S as v, C as y
};
//# sourceMappingURL=b26e60ff-bklbh4ys3fab6xf0.js.map