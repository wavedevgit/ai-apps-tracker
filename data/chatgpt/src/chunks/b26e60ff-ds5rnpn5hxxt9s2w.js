import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    A8 as n,
    Aat as r,
    Art as i,
    Dat as a,
    SK as o,
    V1 as s,
    X7 as c,
    Y7 as l,
    frt as u,
    grt as ee,
    hat as te,
    j8 as d,
    jat as ne,
    jrt as re,
    krt as ie,
    oK as ae,
    pat as f,
    q1 as oe,
    sK as se,
    urt as p,
    xK as m
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    H as h,
    s as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Gwn as g,
    LTn as _,
    RTn as le,
    Wwn as ue,
    _nt as de,
    gnt as v
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    Bb as y,
    Bv as fe,
    Rb as pe,
    Xy as me,
    Yy as he,
    Zy as b,
    zv as x
} from "./c2675c8c-f8x469cgefxzeo6l.js";
import {
    l as S,
    s as ge
} from "./6fd89734-l8h178glfzpxynlr.js";
var C, w, T = e((() => {
        se(), C = ae.UseConnector, w = (e, t) => e.predefined_role === t.predefined_role ? e.name.localeCompare(t.name) : e.predefined_role ? -1 : 1
    })),
    E, D, O, k, A, j, M, N, P, F, I, L, R, z, B, _e, V, H, U, W, G, K, q, J, Y, X, Z, ve, ye, be, xe, Q, Se, Ce = e((() => {
        pe(), ue(), le(), de(), n(), oe(), ne(), te(), t(), ie(), ee(), o(), ce(), me(), E = `1160491803`, O = e => e != null, k = `1162439792`, j = {
            "x-openai-use-sheep": `1`
        }, M = (e, t) => ({
            authOption: a.Required,
            additionalHeaders: m(e),
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
            let e = new URL(r, window.location.href);
            return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
        }, L = () => I() && p(k, {
            disableExposureLog: !0
        }) ? `sheep` : `legacy`, R = d(L, e => {
            let t = u();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `adminPluginWorkspaceSettingsReadTransport`
        }), z = (e, t, n) => {
            if (n?.throwIfAborted(), e !== L() || e === `sheep` && s()?.getWorkspaceId() !== t) throw new h({
                revert: !0
            })
        }, B = (e, t, n) => {
            if (z(e, t, n), !(!I() || s()?.getWorkspaceId() !== t) && (p(k) ? `sheep` : `legacy`) !== e) throw new h({
                revert: !0
            })
        }, _e = () => (A ??= new c({
            baseUrl: r.replace(/\/$/, ``),
            targetRoutesAreCanonical: !0
        }), A), V = e => [...new Set((e ?? []).filter(e => e !== ``))].sort(), H = e => V(e?.installed_by_default_role_ids), U = (e, t) => e.size === t.size && [...e].every(e => t.has(e)), W = ({
            mode: e,
            installedByDefaultRoleIds: t = [],
            eligibleRoleIds: n
        }) => {
            if (e === `available`) return {
                installation_policy: `AVAILABLE`,
                installed_by_default_role_ids: []
            };
            let r = V([...t]),
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
            pluginId: t,
            transport: n = L(),
            signal: r
        }) => {
            if (B(n, e, r), n === `sheep`) {
                b({
                    operation: `settings_get`,
                    routeMode: `sheep`
                });
                let i = await g({
                    operation: `settings_get`,
                    transport: `sheep`,
                    workspaceId: e,
                    signal: r,
                    request: n => _e().safeGet(`/plugins/admin/{plugin_id}/settings`, {
                        ...n,
                        authOption: a.Required,
                        signal: r,
                        additionalHeaders: {
                            ...m(e),
                            [f]: _.ADMIN_SETTING,
                            ...j
                        },
                        parameters: {
                            path: {
                                plugin_id: t
                            }
                        }
                    })
                });
                return z(n, e, r), P(i)
            }
            let i = p(`3636574873`);
            return b({
                operation: `settings_get`,
                routeMode: i ? `plugin_service` : `sa_server`
            }), i ? await g({
                operation: `settings_get`,
                transport: `plugin_service`,
                workspaceId: e,
                signal: r,
                request: n => v.safeGet(`/plugins/admin/{plugin_id}/settings`, {
                    ...M(e, t),
                    ...n
                })
            }) : await g({
                operation: `settings_get`,
                transport: `sa_server`,
                workspaceId: e,
                signal: r,
                request: n => l.safeGet(`/accounts/{account_id}/plugins/{plugin_id}/settings`, {
                    ...n,
                    parameters: {
                        path: {
                            account_id: e,
                            plugin_id: t
                        }
                    }
                })
            })
        }, K = async ({
            workspaceId: e,
            pluginId: t,
            settings: n
        }) => {
            let r = {
                    ...n,
                    source_surface: `admin_plugins`
                },
                i = p(`4057407015`);
            return b({
                operation: `settings_patch`,
                routeMode: i ? `plugin_service` : `sa_server`
            }), i ? await v.safePatch(`/plugins/admin/{plugin_id}/settings`, {
                ...M(e, t),
                requestBody: r
            }) : await l.safePatch(`/accounts/{account_id}/plugins/{plugin_id}/settings`, {
                parameters: {
                    path: {
                        account_id: e,
                        plugin_id: t
                    }
                },
                requestBody: r
            })
        }, q = () => {
            if (typeof window > `u`) return !1;
            let e = new URL(r, window.location.href);
            return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
        }, J = () => (D ??= new c({
            baseUrl: r.replace(/\/$/, ``),
            targetRoutesAreCanonical: !0
        }), D), Y = e => q() && p(e, {
            disableExposureLog: !0
        }) ? `sheep` : `legacy`, X = () => Y(E), Z = e => {
            let t = u();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, ve = d(X, Z, {
            name: `adminPluginAdvancedSettingsMutationTransport`
        }), ye = ({
            transport: e,
            gate: t,
            workspaceId: n,
            workspaceUserId: r
        }) => {
            if (be({
                    workspaceId: n,
                    workspaceUserId: r
                }), (q() && p(t) ? `sheep` : `legacy`) !== e) throw new h({
                revert: !0
            })
        }, be = ({
            workspaceId: e,
            workspaceUserId: t
        }) => {
            let n = s();
            if (t == null || n?.getWorkspaceId() !== e || n.normalizedAccountUserId == null || n.normalizedAccountUserId !== t || !n.isAdminOfAccount() && !n.isOwnerOfAccount()) throw new h({
                revert: !0
            })
        }, xe = async ({
            workspaceId: e,
            pluginId: t,
            enabled: n
        }) => q() && p(E) ? (i.count(re.ECOSYSTEM, he, {
            frontend_app: `chatgpt_web`,
            operation: `settings_patch`,
            route_mode: `sheep`
        }), N(await J().safePatch(`/plugins/admin/{plugin_id}/settings`, {
            authOption: a.Required,
            additionalHeaders: {
                ...m(e),
                "x-openai-use-sheep": `1`
            },
            parameters: {
                path: {
                    plugin_id: t
                }
            },
            requestBody: {
                enabled: n,
                source_surface: `admin_plugins`
            }
        }))) : await K({
            workspaceId: e,
            pluginId: t,
            settings: {
                enabled: n
            }
        }), Q = async ({
            workspaceId: e,
            workspaceUserId: t,
            pluginId: n,
            settings: r,
            workspaceDefaultInstallation: i,
            transport: o
        }) => {
            let s = {
                sourceSurface: `admin_plugins`
            };
            try {
                if (i != null && (o !== `sheep` || Object.keys(r).length > 0)) throw Error(`Workspace default installation requires a native intent-only update.`);
                o != null && ye({
                    transport: o,
                    gate: E,
                    workspaceId: e,
                    workspaceUserId: t
                }), o === `sheep` && b({
                    operation: `settings_patch`,
                    routeMode: `sheep`
                });
                let c = o === `sheep` ? await J().safePatch(`/plugins/admin/{plugin_id}/settings`, {
                    authOption: a.Required,
                    additionalHeaders: {
                        ...m(e),
                        [f]: _.ADMIN_SETTING,
                        ...j
                    },
                    parameters: {
                        path: {
                            plugin_id: n
                        }
                    },
                    requestBody: {
                        ...r,
                        ...i == null ? {} : {
                            workspace_default_installation: i
                        },
                        source_surface: `admin_plugins`
                    },
                    disableAutomaticRetry: !0
                }) : await K({
                    workspaceId: e,
                    pluginId: n,
                    settings: r
                });
                return y({
                    action: `update_plugin_installation_policy`,
                    outcome: `succeeded`,
                    auditContext: s,
                    remotePluginId: n
                }), N(c)
            } catch (e) {
                throw y({
                    action: `update_plugin_installation_policy`,
                    outcome: `failed`,
                    auditContext: s,
                    remotePluginId: n
                }), e
            }
        }, Se = async ({
            workspaceId: e,
            pluginId: t,
            enabled: n
        }) => await xe({
            workspaceId: e,
            pluginId: t,
            enabled: n
        })
    })),
    we, $, Te, Ee, De, Oe, ke, Ae, je = e((() => {
        ge(), fe(), T(), Ce(), we = `__all_roles__`, $ = e => [e, `admin`, `plugins`], Te = ({
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
        })] : []]), Ee = ({
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
            }, e => De(e) ? {
                ...e,
                pages: e.pages.map(e => ({
                    ...e,
                    items: e.items.map(e => e.id === n ? {
                        ...e,
                        workspace_settings: r
                    } : e)
                }))
            } : e)
        }, De = e => typeof e == `object` && !!e && `pages` in e && Array.isArray(e.pages), Oe = e => e?.filter(e => e.connector_permissions.includes(C)) ?? [], ke = ({
            installedByDefaultRoleIds: e,
            eligibleRoleIds: t
        }) => {
            let n = [...t].find(S);
            return [...new Set(e.flatMap(e => t.has(e) ? e : S(e) && n != null ? n : []))].sort()
        }, Ae = ({
            settings: e,
            eligibleRoleIds: t
        }) => e.installation_policy === `INSTALLED_BY_DEFAULT` && e.installed_by_default_role_ids.length === 0 ? [...t].sort() : ke({
            installedByDefaultRoleIds: H(e),
            eligibleRoleIds: t
        })
    }));
export {
    Q as _, je as a, T as b, ve as c, G as d, F as f, Se as g, L as h, Ae as i, R as l, U as m, $ as n, Te as o, Ce as p, Oe as r, Ee as s, we as t, W as u, C as v, w as y
};
//# sourceMappingURL=b26e60ff-ds5rnpn5hxxt9s2w.js.map