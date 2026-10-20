import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    CK as n,
    Git as r,
    Hnt as i,
    I1 as a,
    JE as o,
    Jnt as s,
    KE as c,
    L7 as l,
    N7 as u,
    P7 as d,
    Wnt as f,
    aat as p,
    cK as m,
    cat as h,
    crt as ee,
    h8 as g,
    lK as te,
    lat as ne,
    lrt as re,
    m8 as ie,
    qit as ae,
    srt as oe,
    wK as se
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    H as _,
    Rn as ce,
    Tn as le,
    s as ue,
    zn as de
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    _nt as v,
    aTn as fe,
    fwn as y,
    iTn as b,
    uwn as pe,
    vnt as me,
    yat as he
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Fx as ge,
    Nx as _e,
    _b as ve,
    dx as ye,
    lx as be,
    ny as x,
    pb as xe,
    ry as Se,
    xb as S
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
var Ce = e((() => {
        he()
    })),
    C, we, Te = e((() => {
        le(), te(), l(), C = m.UseConnector, we = (e, t) => e.predefined_role === t.predefined_role ? e.name.localeCompare(t.name) : e.predefined_role ? -1 : 1
    })),
    w, T, Ee, E, D, O, k, A, j, De, M, N, P, Oe, F, ke, Ae, I, je, Me, Ne, Pe, L, R, z, B, V, Fe, H, Ie, Le, U, W, Re, ze, Be, Ve, He, Ue = e((() => {
        pe(), se(), be(), fe(), me(), ie(), a(), ne(), ae(), l(), s(), ue(), oe(), ve(), w = `1160491803`, T = `3285682750`, E = e => e != null, D = `1162439792`, k = {
            "x-openai-use-sheep": `1`
        }, A = (e, t) => ({
            authOption: p.Required,
            additionalHeaders: n(e),
            parameters: {
                path: {
                    plugin_id: t
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
        }, De = e => ({
            ...j(e),
            allow_use_in_sites: e.allow_use_in_sites ?? !1
        }), M = (e, t, n = `legacy`) => [`admin`, `plugins`, `settings`, e, t, ...n === `legacy` ? [] : [n]].filter(E), N = () => {
            if (typeof window > `u`) return !1;
            let e = new URL(h, window.location.href);
            return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
        }, P = () => N() && i(D, {
            disableExposureLog: !0
        }) ? `sheep` : `legacy`, Oe = g(P, e => {
            let t = f();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `adminPluginWorkspaceSettingsReadTransport`
        }), F = (e, n, r) => {
            if (r?.throwIfAborted(), e !== P() || e === `sheep` && t()?.getWorkspaceId() !== n) throw new _({
                revert: !0
            })
        }, ke = (e, n, r) => {
            if (F(e, n, r), !(!N() || t()?.getWorkspaceId() !== n) && (i(D) ? `sheep` : `legacy`) !== e) throw new _({
                revert: !0
            })
        }, Ae = () => (O ??= new d({
            baseUrl: h.replace(/\/$/, ``),
            targetRoutesAreCanonical: !0
        }), O), I = e => [...new Set((e ?? []).filter(e => e !== ``))].sort(), je = e => I(e?.installed_by_default_role_ids), Me = (e, t) => e.size === t.size && [...e].every(e => t.has(e)), Ne = ({
            mode: e,
            installedByDefaultRoleIds: t = [],
            eligibleRoleIds: n
        }) => {
            if (e === `available`) return {
                installation_policy: `AVAILABLE`,
                installed_by_default_role_ids: []
            };
            let r = I([...t]),
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
        }, Pe = async ({
            workspaceId: e,
            pluginId: t,
            transport: a = P(),
            signal: o
        }) => {
            if (ke(a, e, o), a === `sheep`) {
                S({
                    operation: `settings_get`,
                    routeMode: `sheep`
                });
                let i = await y({
                    operation: `settings_get`,
                    transport: `sheep`,
                    workspaceId: e,
                    signal: o,
                    request: i => Ae().safeGet(`/plugins/admin/{plugin_id}/settings`, {
                        ...i,
                        authOption: p.Required,
                        signal: o,
                        additionalHeaders: {
                            ...n(e),
                            [r]: b.ADMIN_SETTING,
                            ...k
                        },
                        parameters: {
                            path: {
                                plugin_id: t
                            }
                        }
                    })
                });
                return F(a, e, o), De(i)
            }
            let s = i(`3636574873`);
            return S({
                operation: `settings_get`,
                routeMode: s ? `plugin_service` : `sa_server`
            }), s ? await y({
                operation: `settings_get`,
                transport: `plugin_service`,
                workspaceId: e,
                signal: o,
                request: n => v.safeGet(`/plugins/admin/{plugin_id}/settings`, {
                    ...A(e, t),
                    ...n
                })
            }) : await y({
                operation: `settings_get`,
                transport: `sa_server`,
                workspaceId: e,
                signal: o,
                request: n => u.safeGet(`/accounts/{account_id}/plugins/{plugin_id}/settings`, {
                    ...n,
                    parameters: {
                        path: {
                            account_id: e,
                            plugin_id: t
                        }
                    }
                })
            })
        }, L = async ({
            workspaceId: e,
            pluginId: t,
            settings: n
        }) => {
            let r = {
                    ...n,
                    source_surface: `admin_plugins`
                },
                a = i(`4057407015`);
            return S({
                operation: `settings_patch`,
                routeMode: a ? `plugin_service` : `sa_server`
            }), a ? await v.safePatch(`/plugins/admin/{plugin_id}/settings`, {
                ...A(e, t),
                requestBody: r
            }) : await u.safePatch(`/accounts/{account_id}/plugins/{plugin_id}/settings`, {
                parameters: {
                    path: {
                        account_id: e,
                        plugin_id: t
                    }
                },
                requestBody: r
            })
        }, R = () => {
            if (typeof window > `u`) return !1;
            let e = new URL(h, window.location.href);
            return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
        }, z = () => (Ee ??= new d({
            baseUrl: h.replace(/\/$/, ``),
            targetRoutesAreCanonical: !0
        }), Ee), B = e => R() && i(e, {
            disableExposureLog: !0
        }) ? `sheep` : `legacy`, V = () => B(w), Fe = () => B(T), H = e => {
            let t = f();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, Ie = g(V, H, {
            name: `adminPluginAdvancedSettingsMutationTransport`
        }), Le = g(Fe, H, {
            name: `adminPluginWorkspaceDeleteTransport`
        }), U = ({
            transport: e,
            gate: t,
            workspaceId: n,
            workspaceUserId: r
        }) => {
            if (W({
                    workspaceId: n,
                    workspaceUserId: r
                }), (R() && i(t) ? `sheep` : `legacy`) !== e) throw new _({
                revert: !0
            })
        }, W = ({
            workspaceId: e,
            workspaceUserId: n
        }) => {
            let r = t();
            if (n == null || r?.getWorkspaceId() !== e || r.normalizedAccountUserId == null || r.normalizedAccountUserId !== n || !r.isAdminOfAccount() && !r.isOwnerOfAccount()) throw new _({
                revert: !0
            })
        }, Re = async ({
            workspaceId: e,
            workspaceUserId: t,
            pluginId: n,
            settings: r
        }) => {
            W({
                workspaceId: e,
                workspaceUserId: t
            }), S({
                operation: `settings_patch`,
                routeMode: `plugin_service`
            });
            let i = {
                    allow_use_in_sites: r.allow_use_in_sites,
                    source_surface: `admin_plugins`
                },
                a = await v.safePatch(`/plugins/admin/{plugin_id}/settings`, {
                    ...A(e, n),
                    requestBody: i,
                    disableAutomaticRetry: !0
                });
            return W({
                workspaceId: e,
                workspaceUserId: t
            }), a
        }, ze = async ({
            workspaceId: e,
            pluginId: t,
            enabled: r
        }) => R() && i(w) ? (ee.count(re.ECOSYSTEM, xe, {
            frontend_app: `chatgpt_web`,
            operation: `settings_patch`,
            route_mode: `sheep`
        }), j(await z().safePatch(`/plugins/admin/{plugin_id}/settings`, {
            authOption: p.Required,
            additionalHeaders: {
                ...n(e),
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
        }))) : await L({
            workspaceId: e,
            pluginId: t,
            settings: {
                enabled: r
            }
        }), Be = async ({
            workspaceId: e,
            workspaceUserId: t,
            pluginId: i,
            settings: a,
            workspaceDefaultInstallation: o,
            transport: s
        }) => {
            let c = {
                sourceSurface: `admin_plugins`
            };
            try {
                if (o != null && (s !== `sheep` || Object.keys(a).length > 0)) throw Error(`Workspace default installation requires a native intent-only update.`);
                s != null && U({
                    transport: s,
                    gate: w,
                    workspaceId: e,
                    workspaceUserId: t
                }), s === `sheep` && S({
                    operation: `settings_patch`,
                    routeMode: `sheep`
                });
                let l = s === `sheep` ? await z().safePatch(`/plugins/admin/{plugin_id}/settings`, {
                    authOption: p.Required,
                    additionalHeaders: {
                        ...n(e),
                        [r]: b.ADMIN_SETTING,
                        ...k
                    },
                    parameters: {
                        path: {
                            plugin_id: i
                        }
                    },
                    requestBody: {
                        ...a,
                        ...o == null ? {} : {
                            workspace_default_installation: o
                        },
                        source_surface: `admin_plugins`
                    },
                    disableAutomaticRetry: !0
                }) : await L({
                    workspaceId: e,
                    pluginId: i,
                    settings: a
                });
                return ye({
                    action: `update_plugin_installation_policy`,
                    outcome: `succeeded`,
                    auditContext: c,
                    remotePluginId: i
                }), j(l)
            } catch (e) {
                throw ye({
                    action: `update_plugin_installation_policy`,
                    outcome: `failed`,
                    auditContext: c,
                    remotePluginId: i
                }), e
            }
        }, Ve = async ({
            workspaceId: e,
            pluginId: t,
            enabled: n
        }) => await ze({
            workspaceId: e,
            pluginId: t,
            enabled: n
        }), He = async ({
            workspaceId: e,
            workspaceUserId: t,
            pluginId: a,
            transport: o
        }) => {
            if (o != null && U({
                    transport: o,
                    gate: T,
                    workspaceId: e,
                    workspaceUserId: t
                }), o === `sheep`) {
                ee.count(re.ECOSYSTEM, xe, {
                    frontend_app: `chatgpt_web`,
                    operation: `delete_plugin`,
                    route_mode: `sheep`
                }), await z().safeDelete(`/plugins/admin/{plugin_id}`, {
                    authOption: p.Required,
                    additionalHeaders: {
                        ...n(e),
                        [r]: b.ADMIN_SETTING,
                        ...k
                    },
                    parameters: {
                        path: {
                            plugin_id: a
                        }
                    },
                    disableAutomaticRetry: !0
                });
                return
            }
            if (i(`513523606`)) {
                await v.safeDelete(`/plugins/admin/{plugin_id}`, A(e, a));
                return
            }
            await u.safeDelete(`/accounts/{account_id}/plugins/{plugin_id}`, {
                parameters: {
                    path: {
                        account_id: e,
                        plugin_id: a
                    }
                }
            })
        }
    })),
    G, We, K, Ge, q, Ke, qe, J, Y, X, Je, Z, Q, Ye, Xe, $, Ze, Qe = e((() => {
        o(), _e(), de(), Ce(), Se(), Te(), Ue(), G = ce({
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
        }), G.productivity, G.creativity, G.developerTools, G.businessAndOperations, G.dataAndAnalytics, G.communication, G.educationAndResearch, G.security, G.finance, G.healthcare, G.travel, G.entertainment, G.other, We = `__all_roles__`, K = e => [e, `admin`, `plugins`], Ge = ({
            workspaceId: e,
            pluginId: t
        }) => ({
            queryKey: x(`detail`, e),
            predicate: ({
                queryKey: e,
                state: n
            }) => e.at(-1) === t || typeof n.data == `object` && n.data != null && `id` in n.data && n.data.id === t
        }), q = ({
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
        })] : []]), Ke = ({
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
                queryKey: K(t)
            }, e => Y(e) ? {
                ...e,
                pages: e.pages.map(e => ({
                    ...e,
                    items: e.items.map(e => e.id === n ? {
                        ...e,
                        workspace_settings: r
                    } : e)
                }))
            } : e)
        }, qe = async ({
            queryClient: e,
            workspaceId: t,
            pluginId: n,
            error: r
        }) => {
            r ?? (J({
                queryClient: e,
                workspaceId: t,
                pluginId: n
            }), e.setQueriesData({
                queryKey: x(`list`, t)
            }, e => e == null ? e : {
                ...e,
                pages: e.pages.map(e => ({
                    ...e,
                    plugins: e.plugins.filter(e => e.id !== n)
                }))
            }), e.removeQueries(Ge({
                workspaceId: t,
                pluginId: n
            })), e.removeQueries({
                queryKey: x(`skill-detail`, t, n)
            })), await Promise.all([e.invalidateQueries({
                queryKey: K(t),
                refetchType: `all`
            }), ...r == null ? [q({
                queryClient: e,
                workspaceId: t
            })] : []]), r ?? (J({
                queryClient: e,
                workspaceId: t,
                pluginId: n
            }), e.removeQueries({
                queryKey: M(t, n)
            }))
        }, J = ({
            queryClient: e,
            workspaceId: t,
            pluginId: n
        }) => {
            e.setQueriesData({
                queryKey: K(t)
            }, e => Y(e) ? {
                ...e,
                pages: e.pages.map(e => ({
                    ...e,
                    items: e.items.filter(e => e.id !== n)
                }))
            } : e)
        }, Y = e => typeof e == `object` && !!e && `pages` in e && Array.isArray(e.pages), X = ({
            workspaceName: e,
            fallbackName: t
        }) => {
            let n = e.trim();
            return n === `` ? t : n
        }, Je = e => e.scope === `USER` || e.discoverability === `PRIVATE`, Z = e => e?.filter(e => e.connector_permissions.includes(C)) ?? [], Q = ({
            installedByDefaultRoleIds: e,
            eligibleRoleIds: t
        }) => {
            let n = [...t].find(ge);
            return [...new Set(e.flatMap(e => t.has(e) ? e : ge(e) && n != null ? n : []))].sort()
        }, Ye = ({
            settings: e,
            eligibleRoleIds: t
        }) => e.installation_policy === `INSTALLED_BY_DEFAULT` && e.installed_by_default_role_ids.length === 0 ? [...t].sort() : Q({
            installedByDefaultRoleIds: je(e),
            eligibleRoleIds: t
        }), Xe = ({
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
            let i = Q({
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
        }, $ = ({
            connectorIds: e,
            requiredAppIdGroups: t,
            appStatusesByConnectorId: n
        }) => {
            let r = t ?? e.map(e => [e]);
            if (r.length === 0) return `enabled`;
            if (n == null) return null;
            let i = r.map(e => {
                let t = e.map(e => c(n, e));
                return t.some(e => e === `enabled`) ? `enabled` : t.some(e => e == null) ? null : `disabled`
            });
            return i.some(e => e === `disabled`) ? `disabled` : i.some(e => e == null) ? null : `enabled`
        }, Ze = ({
            plugin: e,
            connectorIds: t,
            appStatusesByConnectorId: n,
            requiredAppIdGroups: r,
            workspaceEnabled: i,
            isAppStatusPending: a,
            connectorRolesResponses: o,
            rbacDisabled: s,
            workspaceRoleIds: l
        }) => {
            if (e != null && Je(e)) return {
                status: `draft`,
                enabledRoleIds: new Set
            };
            if (r?.length === 0) {
                let e = i === !1 ? `disabled` : `enabled`;
                return {
                    status: e,
                    enabledRoleIds: e === `disabled` ? new Set : l == null ? null : new Set(l)
                }
            }
            let u = a === !0 && (r == null ? t.length > 0 : r.some(e => e.length > 0)),
                d = $({
                    connectorIds: t,
                    requiredAppIdGroups: r,
                    appStatusesByConnectorId: n
                });
            if (t.length === 0 || s) return {
                status: u ? null : d ?? `enabled`,
                enabledRoleIds: d === `disabled` ? new Set : l == null ? null : new Set(l)
            };
            if (o == null || o.length !== t.length) return {
                status: u ? null : d,
                enabledRoleIds: d === `disabled` ? new Set : null
            };
            let f = new Set,
                p = new Map;
            if (o.forEach((e, r) => {
                    let i = t[r];
                    if (i == null) return;
                    if (c(n, i) === `disabled`) {
                        p.set(i, `disabled`);
                        return
                    }
                    let a = Z(e.roles_with_permissions);
                    p.set(i, a.length > 0 ? `enabled` : `disabled`), a.forEach(({
                        role: e
                    }) => {
                        f.add(e.id)
                    })
                }), d != null || u) return {
                status: u ? null : d,
                enabledRoleIds: d === `disabled` ? new Set : f
            };
            let m = $({
                connectorIds: t,
                requiredAppIdGroups: r,
                appStatusesByConnectorId: p
            });
            return {
                status: m,
                enabledRoleIds: m === `disabled` ? new Set : f
            }
        }
    }));
export {
    Ve as C, we as D, C as E, Te as O, P as S, Re as T, Pe as _, K as a, Me as b, Qe as c, Ke as d, Ie as f, He as g, Ne as h, X as i, q as l, Oe as m, Xe as n, Z as o, Le as p, Ze as r, Ye as s, We as t, qe as u, M as v, Be as w, V as x, Ue as y
};
//# sourceMappingURL=b26e60ff-fsk9rccepf655vnl.js.map