import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Aat as n,
    Art as r,
    Eat as i,
    J7 as a,
    Ort as o,
    Q7 as s,
    SK as c,
    V1 as l,
    Y7 as u,
    drt as d,
    fat as f,
    hrt as ee,
    k8 as te,
    kat as p,
    krt as ne,
    lrt as m,
    mat as re,
    oK as ie,
    q1 as ae,
    sK as oe,
    xK as h
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    H as g,
    s as se
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FTn as ce,
    Hwn as _,
    PTn as v,
    Vwn as le,
    _nt as ue,
    gnt as de
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Gy as y,
    Mb as fe,
    Nv as b,
    Pb as x,
    Pv as pe,
    Uy as me,
    Wy as he
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    l as S,
    s as ge
} from "./6fd89734-l8h178glfzpxynlr.js";
var C, w, T = e((() => {
        oe(), C = ie.UseConnector, w = (e, t) => e.predefined_role === t.predefined_role ? e.name.localeCompare(t.name) : e.predefined_role ? -1 : 1
    })),
    E, D, O, k, A, j, M, N, P, F, I, L, _e, R, z, B, V, H, U, W, G, K, q, J, Y, X, ve, ye, be, xe, Se, Z, Ce, we = e((() => {
        fe(), le(), ce(), ue(), te(), ae(), n(), re(), s(), o(), ee(), c(), se(), he(), E = `1160491803`, O = e => e != null, k = `1162439792`, j = {
            "x-openai-use-sheep": `1`
        }, M = (e, t) => ({
            authOption: i.Required,
            additionalHeaders: h(e),
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
            let e = new URL(p, window.location.href);
            return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
        }, L = () => I() && m(k, {
            disableExposureLog: !0
        }) ? `sheep` : `legacy`, _e = t(L, e => {
            let t = d();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `adminPluginWorkspaceSettingsReadTransport`
        }), R = (e, t, n) => {
            if (n?.throwIfAborted(), e !== L() || e === `sheep` && l()?.getWorkspaceId() !== t) throw new g({
                revert: !0
            })
        }, z = (e, t, n) => {
            if (R(e, t, n), !(!I() || l()?.getWorkspaceId() !== t) && (m(k) ? `sheep` : `legacy`) !== e) throw new g({
                revert: !0
            })
        }, B = () => (A ??= new u({
            baseUrl: p.replace(/\/$/, ``),
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
            if (z(n, e, r), n === `sheep`) {
                y({
                    operation: `settings_get`,
                    routeMode: `sheep`
                });
                let a = await _({
                    operation: `settings_get`,
                    transport: `sheep`,
                    workspaceId: e,
                    signal: r,
                    request: n => B().safeGet(`/plugins/admin/{plugin_id}/settings`, {
                        ...n,
                        authOption: i.Required,
                        signal: r,
                        additionalHeaders: {
                            ...h(e),
                            [f]: v.ADMIN_SETTING,
                            ...j
                        },
                        parameters: {
                            path: {
                                plugin_id: t
                            }
                        }
                    })
                });
                return R(n, e, r), P(a)
            }
            let o = m(`3636574873`);
            return y({
                operation: `settings_get`,
                routeMode: o ? `plugin_service` : `sa_server`
            }), o ? await _({
                operation: `settings_get`,
                transport: `plugin_service`,
                workspaceId: e,
                signal: r,
                request: n => de.safeGet(`/plugins/admin/{plugin_id}/settings`, {
                    ...M(e, t),
                    ...n
                })
            }) : await _({
                operation: `settings_get`,
                transport: `sa_server`,
                workspaceId: e,
                signal: r,
                request: n => a.safeGet(`/accounts/{account_id}/plugins/{plugin_id}/settings`, {
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
                i = m(`4057407015`);
            return y({
                operation: `settings_patch`,
                routeMode: i ? `plugin_service` : `sa_server`
            }), i ? await de.safePatch(`/plugins/admin/{plugin_id}/settings`, {
                ...M(e, t),
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
        }, q = () => {
            if (typeof window > `u`) return !1;
            let e = new URL(p, window.location.href);
            return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
        }, J = () => (D ??= new u({
            baseUrl: p.replace(/\/$/, ``),
            targetRoutesAreCanonical: !0
        }), D), Y = e => q() && m(e, {
            disableExposureLog: !0
        }) ? `sheep` : `legacy`, X = () => Y(E), ve = e => {
            let t = d();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, ye = t(X, ve, {
            name: `adminPluginAdvancedSettingsMutationTransport`
        }), be = ({
            transport: e,
            gate: t,
            workspaceId: n,
            workspaceUserId: r
        }) => {
            if (xe({
                    workspaceId: n,
                    workspaceUserId: r
                }), (q() && m(t) ? `sheep` : `legacy`) !== e) throw new g({
                revert: !0
            })
        }, xe = ({
            workspaceId: e,
            workspaceUserId: t
        }) => {
            let n = l();
            if (t == null || n?.getWorkspaceId() !== e || n.normalizedAccountUserId == null || n.normalizedAccountUserId !== t || !n.isAdminOfAccount() && !n.isOwnerOfAccount()) throw new g({
                revert: !0
            })
        }, Se = async ({
            workspaceId: e,
            pluginId: t,
            enabled: n
        }) => q() && m(E) ? (ne.count(r.ECOSYSTEM, me, {
            frontend_app: `chatgpt_web`,
            operation: `settings_patch`,
            route_mode: `sheep`
        }), N(await J().safePatch(`/plugins/admin/{plugin_id}/settings`, {
            authOption: i.Required,
            additionalHeaders: {
                ...h(e),
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
                o != null && be({
                    transport: o,
                    gate: E,
                    workspaceId: e,
                    workspaceUserId: t
                }), o === `sheep` && y({
                    operation: `settings_patch`,
                    routeMode: `sheep`
                });
                let c = o === `sheep` ? await J().safePatch(`/plugins/admin/{plugin_id}/settings`, {
                    authOption: i.Required,
                    additionalHeaders: {
                        ...h(e),
                        [f]: v.ADMIN_SETTING,
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
                return x({
                    action: `update_plugin_installation_policy`,
                    outcome: `succeeded`,
                    auditContext: s,
                    remotePluginId: n
                }), N(c)
            } catch (e) {
                throw x({
                    action: `update_plugin_installation_policy`,
                    outcome: `failed`,
                    auditContext: s,
                    remotePluginId: n
                }), e
            }
        }, Ce = async ({
            workspaceId: e,
            pluginId: t,
            enabled: n
        }) => await Se({
            workspaceId: e,
            pluginId: t,
            enabled: n
        })
    })),
    Te, Q, Ee, De, Oe, ke, Ae, $, je = e((() => {
        ge(), pe(), T(), we(), Te = `__all_roles__`, Q = e => [e, `admin`, `plugins`], Ee = ({
            queryClient: e,
            workspaceId: t,
            invalidateCatalog: n = !0
        }) => Promise.all([e.invalidateQueries({
            queryKey: b(`impact`, t)
        }), e.invalidateQueries({
            queryKey: b(`app-references`, t)
        }), ...n ? [e.invalidateQueries({
            queryKey: b(`list`, t)
        }), e.invalidateQueries({
            queryKey: b(`canonical-app`, t)
        })] : []]), De = ({
            queryClient: e,
            workspaceId: t,
            pluginId: n,
            workspaceSettings: r,
            invalidateV2Lists: i = !0
        }) => {
            e.setQueriesData({
                queryKey: b(`detail`, t)
            }, e => e?.id === n ? {
                ...e,
                workspace_settings: r
            } : e), e.setQueriesData({
                queryKey: b(`list`, t)
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
                queryKey: b(`list`, t)
            }), e.setQueriesData({
                queryKey: Q(t)
            }, e => Oe(e) ? {
                ...e,
                pages: e.pages.map(e => ({
                    ...e,
                    items: e.items.map(e => e.id === n ? {
                        ...e,
                        workspace_settings: r
                    } : e)
                }))
            } : e)
        }, Oe = e => typeof e == `object` && !!e && `pages` in e && Array.isArray(e.pages), ke = e => e?.filter(e => e.connector_permissions.includes(C)) ?? [], Ae = ({
            installedByDefaultRoleIds: e,
            eligibleRoleIds: t
        }) => {
            let n = [...t].find(S);
            return [...new Set(e.flatMap(e => t.has(e) ? e : S(e) && n != null ? n : []))].sort()
        }, $ = ({
            settings: e,
            eligibleRoleIds: t
        }) => e.installation_policy === `INSTALLED_BY_DEFAULT` && e.installed_by_default_role_ids.length === 0 ? [...t].sort() : Ae({
            installedByDefaultRoleIds: H(e),
            eligibleRoleIds: t
        })
    }));
export {
    Z as _, je as a, T as b, ye as c, G as d, F as f, Ce as g, L as h, $ as i, _e as l, U as m, Q as n, Ee as o, we as p, ke as r, De as s, Te as t, W as u, C as v, w as y
};
//# sourceMappingURL=b26e60ff-ik100bcoukpbcnag.js.map