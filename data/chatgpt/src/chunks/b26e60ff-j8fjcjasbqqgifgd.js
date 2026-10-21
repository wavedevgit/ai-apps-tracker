import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    Bnt as n,
    CK as r,
    F7 as i,
    Git as a,
    Hnt as o,
    I1 as s,
    JE as c,
    KE as ee,
    Knt as l,
    M7 as u,
    Uit as d,
    art as f,
    cK as p,
    f8 as te,
    j7 as m,
    lK as ne,
    oat as h,
    ort as re,
    p8 as g,
    rat as _,
    sat as ie,
    srt as ae,
    wK as oe
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    H as v,
    Ln as se,
    Rn as ce,
    s as le,
    wn as ue
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    _nt as y,
    dwn as b,
    iTn as de,
    lwn as fe,
    rTn as x,
    vnt as pe,
    yat as me
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Nx as he,
    db as ge,
    ey as S,
    hb as _e,
    jx as ve,
    lx as ye,
    sx as be,
    ty as xe,
    yb as C
} from "./c2675c8c-fpv9s4kvd412dyap.js";
var Se = e((() => {
        me()
    })),
    w, Ce, we = e((() => {
        ue(), ne(), i(), w = p.UseConnector, Ce = (e, t) => e.predefined_role === t.predefined_role ? e.name.localeCompare(t.name) : e.predefined_role ? -1 : 1
    })),
    T, E, Te, Ee, D, De, O, k, A, Oe, j, M, N, ke, P, Ae, je, F, Me, Ne, Pe, Fe, I, L, R, z, B, Ie, V, Le, Re, H, U, ze, Be, Ve, He, Ue, We = e((() => {
        fe(), oe(), be(), de(), pe(), te(), s(), ie(), a(), i(), l(), le(), f(), _e(), T = `1160491803`, E = `3285682750`, Ee = e => e != null, D = `1162439792`, O = {
            "x-openai-use-sheep": `1`
        }, k = (e, t) => ({
            authOption: _.Required,
            additionalHeaders: r(e),
            parameters: {
                path: {
                    plugin_id: t
                }
            }
        }), A = e => {
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
        }, Oe = e => ({
            ...A(e),
            allow_use_in_sites: e.allow_use_in_sites ?? !1
        }), j = (e, t, n = `legacy`) => [`admin`, `plugins`, `settings`, e, t, ...n === `legacy` ? [] : [n]].filter(Ee), M = () => {
            if (typeof window > `u`) return !1;
            let e = new URL(h, window.location.href);
            return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
        }, N = () => M() && n(D, {
            disableExposureLog: !0
        }) ? `sheep` : `legacy`, ke = g(N, e => {
            let t = o();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `adminPluginWorkspaceSettingsReadTransport`
        }), P = (e, n, r) => {
            if (r?.throwIfAborted(), e !== N() || e === `sheep` && t()?.getWorkspaceId() !== n) throw new v({
                revert: !0
            })
        }, Ae = (e, r, i) => {
            if (P(e, r, i), !(!M() || t()?.getWorkspaceId() !== r) && (n(D) ? `sheep` : `legacy`) !== e) throw new v({
                revert: !0
            })
        }, je = () => (De ??= new u({
            baseUrl: h.replace(/\/$/, ``),
            targetRoutesAreCanonical: !0
        }), De), F = e => [...new Set((e ?? []).filter(e => e !== ``))].sort(), Me = e => F(e?.installed_by_default_role_ids), Ne = (e, t) => e.size === t.size && [...e].every(e => t.has(e)), Pe = ({
            mode: e,
            installedByDefaultRoleIds: t = [],
            eligibleRoleIds: n
        }) => {
            if (e === `available`) return {
                installation_policy: `AVAILABLE`,
                installed_by_default_role_ids: []
            };
            let r = F([...t]),
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
        }, Fe = async ({
            workspaceId: e,
            pluginId: t,
            transport: i = N(),
            signal: a
        }) => {
            if (Ae(i, e, a), i === `sheep`) {
                C({
                    operation: `settings_get`,
                    routeMode: `sheep`
                });
                let n = await b({
                    operation: `settings_get`,
                    transport: `sheep`,
                    workspaceId: e,
                    signal: a,
                    request: n => je().safeGet(`/plugins/admin/{plugin_id}/settings`, {
                        ...n,
                        authOption: _.Required,
                        signal: a,
                        additionalHeaders: {
                            ...r(e),
                            [d]: x.ADMIN_SETTING,
                            ...O
                        },
                        parameters: {
                            path: {
                                plugin_id: t
                            }
                        }
                    })
                });
                return P(i, e, a), Oe(n)
            }
            let o = n(`3636574873`);
            return C({
                operation: `settings_get`,
                routeMode: o ? `plugin_service` : `sa_server`
            }), o ? await b({
                operation: `settings_get`,
                transport: `plugin_service`,
                workspaceId: e,
                signal: a,
                request: n => y.safeGet(`/plugins/admin/{plugin_id}/settings`, {
                    ...k(e, t),
                    ...n
                })
            }) : await b({
                operation: `settings_get`,
                transport: `sa_server`,
                workspaceId: e,
                signal: a,
                request: n => m.safeGet(`/accounts/{account_id}/plugins/{plugin_id}/settings`, {
                    ...n,
                    parameters: {
                        path: {
                            account_id: e,
                            plugin_id: t
                        }
                    }
                })
            })
        }, I = async ({
            workspaceId: e,
            pluginId: t,
            settings: r
        }) => {
            let i = {
                    ...r,
                    source_surface: `admin_plugins`
                },
                a = n(`4057407015`);
            return C({
                operation: `settings_patch`,
                routeMode: a ? `plugin_service` : `sa_server`
            }), a ? await y.safePatch(`/plugins/admin/{plugin_id}/settings`, {
                ...k(e, t),
                requestBody: i
            }) : await m.safePatch(`/accounts/{account_id}/plugins/{plugin_id}/settings`, {
                parameters: {
                    path: {
                        account_id: e,
                        plugin_id: t
                    }
                },
                requestBody: i
            })
        }, L = () => {
            if (typeof window > `u`) return !1;
            let e = new URL(h, window.location.href);
            return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
        }, R = () => (Te ??= new u({
            baseUrl: h.replace(/\/$/, ``),
            targetRoutesAreCanonical: !0
        }), Te), z = e => L() && n(e, {
            disableExposureLog: !0
        }) ? `sheep` : `legacy`, B = () => z(T), Ie = () => z(E), V = e => {
            let t = o();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, Le = g(B, V, {
            name: `adminPluginAdvancedSettingsMutationTransport`
        }), Re = g(Ie, V, {
            name: `adminPluginWorkspaceDeleteTransport`
        }), H = ({
            transport: e,
            gate: t,
            workspaceId: r,
            workspaceUserId: i
        }) => {
            if (U({
                    workspaceId: r,
                    workspaceUserId: i
                }), (L() && n(t) ? `sheep` : `legacy`) !== e) throw new v({
                revert: !0
            })
        }, U = ({
            workspaceId: e,
            workspaceUserId: n
        }) => {
            let r = t();
            if (n == null || r?.getWorkspaceId() !== e || r.normalizedAccountUserId == null || r.normalizedAccountUserId !== n || !r.isAdminOfAccount() && !r.isOwnerOfAccount()) throw new v({
                revert: !0
            })
        }, ze = async ({
            workspaceId: e,
            workspaceUserId: t,
            pluginId: n,
            settings: r
        }) => {
            U({
                workspaceId: e,
                workspaceUserId: t
            }), C({
                operation: `settings_patch`,
                routeMode: `plugin_service`
            });
            let i = {
                    allow_use_in_sites: r.allow_use_in_sites,
                    source_surface: `admin_plugins`
                },
                a = await y.safePatch(`/plugins/admin/{plugin_id}/settings`, {
                    ...k(e, n),
                    requestBody: i,
                    disableAutomaticRetry: !0
                });
            return U({
                workspaceId: e,
                workspaceUserId: t
            }), a
        }, Be = async ({
            workspaceId: e,
            pluginId: t,
            enabled: i
        }) => L() && n(T) ? (re.count(ae.ECOSYSTEM, ge, {
            frontend_app: `chatgpt_web`,
            operation: `settings_patch`,
            route_mode: `sheep`
        }), A(await R().safePatch(`/plugins/admin/{plugin_id}/settings`, {
            authOption: _.Required,
            additionalHeaders: {
                ...r(e),
                "x-openai-use-sheep": `1`
            },
            parameters: {
                path: {
                    plugin_id: t
                }
            },
            requestBody: {
                enabled: i,
                source_surface: `admin_plugins`
            }
        }))) : await I({
            workspaceId: e,
            pluginId: t,
            settings: {
                enabled: i
            }
        }), Ve = async ({
            workspaceId: e,
            workspaceUserId: t,
            pluginId: n,
            settings: i,
            workspaceDefaultInstallation: a,
            transport: o
        }) => {
            let s = {
                sourceSurface: `admin_plugins`
            };
            try {
                if (a != null && (o !== `sheep` || Object.keys(i).length > 0)) throw Error(`Workspace default installation requires a native intent-only update.`);
                o != null && H({
                    transport: o,
                    gate: T,
                    workspaceId: e,
                    workspaceUserId: t
                }), o === `sheep` && C({
                    operation: `settings_patch`,
                    routeMode: `sheep`
                });
                let c = o === `sheep` ? await R().safePatch(`/plugins/admin/{plugin_id}/settings`, {
                    authOption: _.Required,
                    additionalHeaders: {
                        ...r(e),
                        [d]: x.ADMIN_SETTING,
                        ...O
                    },
                    parameters: {
                        path: {
                            plugin_id: n
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
                }) : await I({
                    workspaceId: e,
                    pluginId: n,
                    settings: i
                });
                return ye({
                    action: `update_plugin_installation_policy`,
                    outcome: `succeeded`,
                    auditContext: s,
                    remotePluginId: n
                }), A(c)
            } catch (e) {
                throw ye({
                    action: `update_plugin_installation_policy`,
                    outcome: `failed`,
                    auditContext: s,
                    remotePluginId: n
                }), e
            }
        }, He = async ({
            workspaceId: e,
            pluginId: t,
            enabled: n
        }) => await Be({
            workspaceId: e,
            pluginId: t,
            enabled: n
        }), Ue = async ({
            workspaceId: e,
            workspaceUserId: t,
            pluginId: i,
            transport: a
        }) => {
            if (a != null && H({
                    transport: a,
                    gate: E,
                    workspaceId: e,
                    workspaceUserId: t
                }), a === `sheep`) {
                re.count(ae.ECOSYSTEM, ge, {
                    frontend_app: `chatgpt_web`,
                    operation: `delete_plugin`,
                    route_mode: `sheep`
                }), await R().safeDelete(`/plugins/admin/{plugin_id}`, {
                    authOption: _.Required,
                    additionalHeaders: {
                        ...r(e),
                        [d]: x.ADMIN_SETTING,
                        ...O
                    },
                    parameters: {
                        path: {
                            plugin_id: i
                        }
                    },
                    disableAutomaticRetry: !0
                });
                return
            }
            if (n(`513523606`)) {
                await y.safeDelete(`/plugins/admin/{plugin_id}`, k(e, i));
                return
            }
            await m.safeDelete(`/accounts/{account_id}/plugins/{plugin_id}`, {
                parameters: {
                    path: {
                        account_id: e,
                        plugin_id: i
                    }
                }
            })
        }
    })),
    W, Ge, G, Ke, K, qe, Je, q, J, Y, Ye, X, Z, Xe, Ze, Q, $, Qe = e((() => {
        c(), ve(), ce(), Se(), xe(), we(), We(), W = se({
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
        }), W.productivity, W.creativity, W.developerTools, W.businessAndOperations, W.dataAndAnalytics, W.communication, W.educationAndResearch, W.security, W.finance, W.healthcare, W.travel, W.entertainment, W.other, Ge = `__all_roles__`, G = e => [e, `admin`, `plugins`], Ke = ({
            workspaceId: e,
            pluginId: t
        }) => ({
            queryKey: S(`detail`, e),
            predicate: ({
                queryKey: e,
                state: n
            }) => e.at(-1) === t || typeof n.data == `object` && n.data != null && `id` in n.data && n.data.id === t
        }), K = ({
            queryClient: e,
            workspaceId: t,
            invalidateCatalog: n = !0
        }) => Promise.all([e.invalidateQueries({
            queryKey: S(`impact`, t)
        }), e.invalidateQueries({
            queryKey: S(`app-references`, t)
        }), ...n ? [e.invalidateQueries({
            queryKey: S(`list`, t)
        }), e.invalidateQueries({
            queryKey: S(`canonical-app`, t)
        })] : []]), qe = ({
            queryClient: e,
            workspaceId: t,
            pluginId: n,
            workspaceSettings: r,
            invalidateV2Lists: i = !0
        }) => {
            e.setQueriesData({
                queryKey: S(`detail`, t)
            }, e => e?.id === n ? {
                ...e,
                workspace_settings: r
            } : e), e.setQueriesData({
                queryKey: S(`list`, t)
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
                queryKey: S(`list`, t)
            }), e.setQueriesData({
                queryKey: G(t)
            }, e => J(e) ? {
                ...e,
                pages: e.pages.map(e => ({
                    ...e,
                    items: e.items.map(e => e.id === n ? {
                        ...e,
                        workspace_settings: r
                    } : e)
                }))
            } : e)
        }, Je = async ({
            queryClient: e,
            workspaceId: t,
            pluginId: n,
            error: r
        }) => {
            r ?? (q({
                queryClient: e,
                workspaceId: t,
                pluginId: n
            }), e.setQueriesData({
                queryKey: S(`list`, t)
            }, e => e == null ? e : {
                ...e,
                pages: e.pages.map(e => ({
                    ...e,
                    plugins: e.plugins.filter(e => e.id !== n)
                }))
            }), e.removeQueries(Ke({
                workspaceId: t,
                pluginId: n
            })), e.removeQueries({
                queryKey: S(`skill-detail`, t, n)
            })), await Promise.all([e.invalidateQueries({
                queryKey: G(t),
                refetchType: `all`
            }), ...r == null ? [K({
                queryClient: e,
                workspaceId: t
            })] : []]), r ?? (q({
                queryClient: e,
                workspaceId: t,
                pluginId: n
            }), e.removeQueries({
                queryKey: j(t, n)
            }))
        }, q = ({
            queryClient: e,
            workspaceId: t,
            pluginId: n
        }) => {
            e.setQueriesData({
                queryKey: G(t)
            }, e => J(e) ? {
                ...e,
                pages: e.pages.map(e => ({
                    ...e,
                    items: e.items.filter(e => e.id !== n)
                }))
            } : e)
        }, J = e => typeof e == `object` && !!e && `pages` in e && Array.isArray(e.pages), Y = ({
            workspaceName: e,
            fallbackName: t
        }) => {
            let n = e.trim();
            return n === `` ? t : n
        }, Ye = e => e.scope === `USER` || e.discoverability === `PRIVATE`, X = e => e?.filter(e => e.connector_permissions.includes(w)) ?? [], Z = ({
            installedByDefaultRoleIds: e,
            eligibleRoleIds: t
        }) => {
            let n = [...t].find(he);
            return [...new Set(e.flatMap(e => t.has(e) ? e : he(e) && n != null ? n : []))].sort()
        }, Xe = ({
            settings: e,
            eligibleRoleIds: t
        }) => e.installation_policy === `INSTALLED_BY_DEFAULT` && e.installed_by_default_role_ids.length === 0 ? [...t].sort() : Z({
            installedByDefaultRoleIds: Me(e),
            eligibleRoleIds: t
        }), Ze = ({
            status: e,
            installationPolicy: t,
            installedByDefaultRoleIds: n,
            eligibleRoleIds: r
        }) => {
            if (e == null) return {
                type: `loading`
            };
            if (e === `draft` || e === `disabled`) return {
                type: `unavailable`
            };
            if (t == null || n == null) return {
                type: `loading`
            };
            if (t !== `INSTALLED_BY_DEFAULT`) return {
                type: `available`
            };
            if (n.length === 0) return {
                type: `installed_by_default`
            };
            if (r == null) return {
                type: `loading`
            };
            let i = Z({
                installedByDefaultRoleIds: n,
                eligibleRoleIds: r
            });
            return r.size > 0 && i.length === r.size ? {
                type: `installed_by_default`
            } : i.length === 0 ? {
                type: `available`
            } : {
                type: `custom_by_group`,
                installedRoleIds: i,
                availableRoleIds: [...r].filter(e => !i.includes(e)).sort()
            }
        }, Q = ({
            connectorIds: e,
            requiredAppIdGroups: t,
            appStatusesByConnectorId: n
        }) => {
            let r = t ?? e.map(e => [e]);
            if (r.length === 0) return `enabled`;
            if (n == null) return null;
            let i = r.map(e => {
                let t = e.map(e => ee(n, e));
                return t.some(e => e === `enabled`) ? `enabled` : t.some(e => e == null) ? null : `disabled`
            });
            return i.some(e => e === `disabled`) ? `disabled` : i.some(e => e == null) ? null : `enabled`
        }, $ = ({
            plugin: e,
            connectorIds: t,
            appStatusesByConnectorId: n,
            requiredAppIdGroups: r,
            workspaceEnabled: i,
            isAppStatusPending: a,
            connectorRolesResponses: o,
            rbacDisabled: s,
            workspaceRoleIds: c
        }) => {
            if (e != null && Ye(e)) return {
                status: `draft`,
                enabledRoleIds: new Set
            };
            if (r?.length === 0) {
                let e = i === !1 ? `disabled` : `enabled`;
                return {
                    status: e,
                    enabledRoleIds: e === `disabled` ? new Set : c == null ? null : new Set(c)
                }
            }
            let l = a === !0 && (r == null ? t.length > 0 : r.some(e => e.length > 0)),
                u = Q({
                    connectorIds: t,
                    requiredAppIdGroups: r,
                    appStatusesByConnectorId: n
                });
            if (t.length === 0 || s) return {
                status: l ? null : u ?? `enabled`,
                enabledRoleIds: u === `disabled` ? new Set : c == null ? null : new Set(c)
            };
            if (o == null || o.length !== t.length) return {
                status: l ? null : u,
                enabledRoleIds: u === `disabled` ? new Set : null
            };
            let d = new Set,
                f = new Map;
            if (o.forEach((e, r) => {
                    let i = t[r];
                    if (i == null) return;
                    if (ee(n, i) === `disabled`) {
                        f.set(i, `disabled`);
                        return
                    }
                    let a = X(e.roles_with_permissions);
                    f.set(i, a.length > 0 ? `enabled` : `disabled`), a.forEach(({
                        role: e
                    }) => {
                        d.add(e.id)
                    })
                }), u != null || l) return {
                status: l ? null : u,
                enabledRoleIds: u === `disabled` ? new Set : d
            };
            let p = Q({
                connectorIds: t,
                requiredAppIdGroups: r,
                appStatusesByConnectorId: f
            });
            return {
                status: p,
                enabledRoleIds: p === `disabled` ? new Set : d
            }
        }
    }));
export {
    He as C, Ce as D, w as E, we as O, N as S, ze as T, Fe as _, G as a, Ne as b, Qe as c, qe as d, Le as f, Ue as g, Pe as h, Y as i, K as l, ke as m, Ze as n, X as o, Re as p, $ as r, Xe as s, Ge as t, Je as u, j as v, Ve as w, B as x, We as y
};
//# sourceMappingURL=b26e60ff-j8fjcjasbqqgifgd.js.map