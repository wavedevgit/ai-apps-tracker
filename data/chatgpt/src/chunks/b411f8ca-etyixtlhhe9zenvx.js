import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J7 as t,
    LU as n,
    Q7 as r,
    U1 as i,
    oK as a,
    q1 as o,
    sK as s,
    zU as c
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    N as l,
    Rn as u,
    p as d,
    s as f,
    wn as p,
    zn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    LQ as h,
    UQ as g,
    dFn as _,
    fFn as v,
    mwn as y,
    oFn as b,
    rFn as x,
    ywn as S
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Jy as C,
    Yy as w,
    Zy as T
} from "./c2675c8c-d62p1sdq1sy52umm.js";
import {
    d as E,
    s as D,
    u as O
} from "./6fd89734-l8h178glfzpxynlr.js";
import {
    _ as k,
    p as A,
    u as j
} from "./b26e60ff-o0fkyj8iu7skd8n9.js";
import {
    i as M,
    t as N
} from "./74bc827c-bufimsqtrqf1man5.js";
import {
    d as ee,
    f as te,
    r as ne
} from "./03a3ce2c-lpeua4y0obk3y2td.js";
import {
    r as re,
    t as ie
} from "./63f6a4cc-v9fivgq78ptiv9ln.js";
var P, F, I = e((() => {
        P = [
            [`models`],
            [`tpp-models`],
            [`codex-models`],
            [`internal-models-slugs`],
            [`gizmo-models`]
        ], F = e => Promise.all(P.map(t => e.invalidateQueries({
            queryKey: t
        })))
    })),
    L, R, z, B, ae = e((() => {
        S(), A(), s(), D(), L = `chatgpt-for-finance`, R = ({
            previousPermissions: e,
            nextPermissions: t
        }) => e.includes(a.FinServAccess) !== t.includes(a.FinServAccess), z = e => {
            let t = e.filter(e => e.permissions.includes(a.FinServAccess)).map(e => e.id);
            return t.length === 0 ? j({
                mode: `available`
            }) : e.every(O) ? j({
                mode: `installed_by_default`
            }) : j({
                mode: `custom_by_group`,
                installedByDefaultRoleIds: t
            })
        }, B = async ({
            workspaceId: e,
            roles: t
        }) => {
            let n = (await y({
                searchTerm: L,
                cursor: null,
                scope: `GLOBAL`,
                limit: 10
            })).items.find(e => e.name === L && e.scope === `GLOBAL`);
            if (n == null) throw Error(`ChatGPT Financial Services plugin is not available.`);
            let r = await k({
                workspaceId: e,
                pluginId: n.id,
                settings: z(t)
            });
            return {
                pluginId: n.id,
                workspaceSettings: r
            }
        }
    })),
    V, H, oe = e((() => {
        V = [`chatgpt.workspace.feature.allow-fast-mode.access`, `chatgpt.workspace.model.GPT-5-reasoning-mini.access`, `chatgpt.workspace.model.GPT-5.1-pro.access`, `chatgpt.workspace.model.GPT-5.1-reasoning.access`, `chatgpt.workspace.model.GPT-5.2-pro.access`, `chatgpt.workspace.model.GPT-5.2-reasoning.access`, `chatgpt.workspace.model.gpt-5.6-luna.access`, `chatgpt.workspace.model.gpt-5.6-sol.access`, `chatgpt.workspace.model.gpt-5.6-terra.access`, `chatgpt.workspace.model.gpt-daybreak-5.6-sol.access`, `chatgpt.workspace.model.gpt-daybreak-red-5.6-sol.access`, `chatgpt.workspace.model.gpt-lifesciences.access`, `chatgpt.workspace.model.pro.access`, `chatgpt.workspace.model.reasoning.access`], H = `chatgpt.workspace.connector.dev_mode,chatgpt.workspace.connector.mcp.create,chatgpt.workspace.contextlayer.admin,chatgpt.workspace.feature.agent-mode.access,chatgpt.workspace.feature.allow-codex-access.access,chatgpt.workspace.feature.allow-codex-local-access.access,chatgpt.workspace.feature.allow-computer-history.access,chatgpt.workspace.feature.app-pairing.access,chatgpt.workspace.feature.aura-browser-memories.access,chatgpt.workspace.feature.aura.access,chatgpt.workspace.feature.canvas-code-execution.access,chatgpt.workspace.feature.canvas-code-network-access.access,chatgpt.workspace.feature.chartgpt.access,chatgpt.workspace.feature.chartgpt.prevent-continuation,chatgpt.workspace.feature.client-application-apple.access,chatgpt.workspace.feature.cloud-computer-use.access,chatgpt.workspace.feature.cloud-password-manager.access,chatgpt.workspace.feature.codex-admin.access,chatgpt.workspace.feature.codex-agent-network-access.access,chatgpt.workspace.feature.codex-device-code-auth.access,chatgpt.workspace.feature.codex-in-app-browser.access,chatgpt.workspace.feature.codex-local-automation.access,chatgpt.workspace.feature.codex-manage-workspace-environments.access,chatgpt.workspace.feature.codex-optimize-admin.access,chatgpt.workspace.feature.codex-optimize.access,chatgpt.workspace.feature.codex-remote-control.access,chatgpt.workspace.feature.codex-slack-posting.access,chatgpt.workspace.feature.data-export.access,chatgpt.workspace.feature.deep-research.access,chatgpt.workspace.feature.desktop-app-beta-features.access,chatgpt.workspace.feature.desktop-app-chat.access,chatgpt.workspace.feature.dictation.access,chatgpt.workspace.feature.enhanced-citations.access,chatgpt.workspace.feature.feature-release-dashboard-pilot.access,chatgpt.workspace.feature.file-library-auto-reference.access,chatgpt.workspace.feature.findata-company-filings.access,chatgpt.workspace.feature.findata-earnings-calls.access,chatgpt.workspace.feature.findata-financial-metrics.access,chatgpt.workspace.feature.findata-investor-presentations.access,chatgpt.workspace.feature.findata-investor-reports.access,chatgpt.workspace.feature.findata-market-pricing.access,chatgpt.workspace.feature.findata-news.access,chatgpt.workspace.feature.findata-private-company-metrics.access,chatgpt.workspace.feature.finserv.access,chatgpt.workspace.feature.flora-browser-use.access,chatgpt.workspace.feature.flora-local.access,chatgpt.workspace.feature.flora-network-access.access,chatgpt.workspace.feature.flora-teams-use.access,chatgpt.workspace.feature.flora-webhook-automations.access,chatgpt.workspace.feature.flora.access,chatgpt.workspace.feature.hermes.access,chatgpt.workspace.feature.hermes.builder.access,chatgpt.workspace.feature.hermes.publish.access,chatgpt.workspace.feature.hermes.share.access,chatgpt.workspace.feature.hermes.share_personal.access,chatgpt.workspace.feature.hive-knowledge-retrieval.access,chatgpt.workspace.feature.hive.access,chatgpt.workspace.feature.image-gen.access,chatgpt.workspace.feature.improved-memory.access,chatgpt.workspace.feature.legal.access,chatgpt.workspace.feature.legal.management,chatgpt.workspace.feature.library-sharing-management.access,chatgpt.workspace.feature.library-workspace-link-sharing.access,chatgpt.workspace.feature.memory.access,chatgpt.workspace.feature.pedagogy.enabled,chatgpt.workspace.feature.programmatic-agent-identities.access,chatgpt.workspace.feature.programmatic-agent-identities.manage,chatgpt.workspace.feature.search.access,chatgpt.workspace.feature.share-chat-with-workspace.access,chatgpt.workspace.feature.sites.access,chatgpt.workspace.feature.sites.attach_tunnels.access,chatgpt.workspace.feature.sites.invite_external.access,chatgpt.workspace.feature.sites.publish.access,chatgpt.workspace.feature.sites.publish_with_tunnels.access,chatgpt.workspace.feature.u18-model-policy.enabled,chatgpt.workspace.feature.video-screen-sharing.access,chatgpt.workspace.feature.voice.access,chatgpt.workspace.feature.windows-computer-use.access,chatgpt.workspace.feature.work-only-chat-instant.access,chatgpt.workspace.feature.work-only-mode.access,chatgpt.workspace.gpt.allow_all_third_party,chatgpt.workspace.gpt.allow_first_party,chatgpt.workspace.gpt.allow_specific_third_party,chatgpt.workspace.gpt.crud,chatgpt.workspace.gpt.private_publish,chatgpt.workspace.gpt.share_external,chatgpt.workspace.gpt.share_workspace,chatgpt.workspace.member.role.view,chatgpt.workspace.model.GPT-4.1.access,chatgpt.workspace.model.GPT-4.5.access,chatgpt.workspace.model.GPT-5-pro.access,chatgpt.workspace.model.GPT-5-reasoning.access,chatgpt.workspace.model.GPT-5.1.access,chatgpt.workspace.model.early-access,chatgpt.workspace.model.gpt-5.5-cyber-preview.access,chatgpt.workspace.model.o3-pro.access,chatgpt.workspace.model.o4-mini-high.access,chatgpt.workspace.model.o4-mini.access,chatgpt.workspace.plugin.powerpoint,chatgpt.workspace.plugin.spreadsheet,chatgpt.workspace.plugin.word,chatgpt.workspace.project.crud,chatgpt.workspace.project.share,chatgpt.workspace.project.share_workspace,chatgpt.workspace.security.codex-access.allow,chatgpt.workspace.security.codex-admin.allow,chatgpt.workspace.skills.access,chatgpt.workspace.skills.access_share,chatgpt.workspace.skills.create,chatgpt.workspace.skills.share,chatgpt.workspace.skills.share_workspace,chatgpt.workspace.skills.upload,chatgpt.workspace.team.automation.write,chatgpt.workspace.team.create,chatgpt.workspace.team.member.invite,chatgpt.workspace_connector.use,chatgpt.workspace_plugin.use,chatgpt.workspace_plugins.publish,chatgpt.workspace_plugins.share,chatgpt.workspace_plugins.upload,chatgpt.workspace_plugins.upload_with_custom_mcp_servers,chatgpt.workspace_plugins.use`.split(`,`)
    }));

function se(e) {
    return e !== a.AgentModeAccess && e !== a.DeepResearchAccess
}
var U, W, G, K, q, J, Y, X, Z, Q, $, ce, le, ue = e((() => {
    U = p(), I(), ee(), T(), ie(), h(), v(), o(), n(), r(), f(), u(), ae(), s(), M(), oe(), D(), W = e => typeof e == `object` && !!e && `lockdown_mode` in e && e.lockdown_mode === !0, G = (e, t) => Object.prototype.hasOwnProperty.call(e, t), K = ({
        currentMetadataResource: e,
        requestPatch: t
    }) => {
        let n = e?.metadata ?? null;
        return {
            soft_alert_credit_limit: G(t, `soft_alert_credit_limit`) ? t.soft_alert_credit_limit ?? null : n?.soft_alert_credit_limit ?? null,
            hard_cap_credit_limit: G(t, `hard_cap_credit_limit`) ? t.hard_cap_credit_limit ?? null : n?.hard_cap_credit_limit ?? null,
            hard_cap_shared_credit_limit: G(t, `hard_cap_shared_credit_limit`) ? t.hard_cap_shared_credit_limit ?? null : n?.hard_cap_shared_credit_limit ?? null,
            workspace_system_instruction: G(t, `workspace_system_instruction`) ? t.workspace_system_instruction ?? null : n?.workspace_system_instruction ?? null
        }
    }, q = e => {
        "use forget";
        let n = (0, U.c)(33),
            {
                workspaceId: r,
                bootstrapResources: o,
                inheritDefaultMemberPermissions: s
            } = e,
            u = s !== void 0 && s,
            f = l(),
            p = c(),
            h = m(),
            g;
        n[0] === o ? g = n[1] : (g = o?.includes(`connectors`), n[0] = o, n[1] = g);
        let _ = g,
            v = i()?.isFedrampCompliantWorkspace === !0,
            y;
        n[2] === _ ? y = n[3] : (y = _ && !v ? [a.UseWorkspacePlugins] : [], n[2] = _, n[3] = y);
        let x = y,
            S;
        n[4] === _ ? S = n[5] : (S = _ && v ? [a.UseWorkspacePlugins] : [], n[4] = _, n[5] = S);
        let C = S,
            w;
        n[6] !== o || n[7] !== u || n[8] !== C || n[9] !== x || n[10] !== r ? (w = e => t.safePost(`/rbac/workspace/{workspace_id}/roles`, {
            parameters: {
                query: {
                    account_id: r
                },
                path: {
                    workspace_id: r
                }
            },
            requestBody: {
                role_name: e.name,
                description: e.description,
                lockdown_mode: e.metadata?.lockdown_mode,
                bootstrap_resources: o,
                ...u && !W(e.metadata) ? {
                    permissions: x,
                    disallowed_permissions: C,
                    workspace_use_initialization: `inherit`
                } : {}
            }
        }), n[6] = o, n[7] = u, n[8] = C, n[9] = x, n[10] = r, n[11] = w) : w = n[11];
        let T;
        n[12] !== u || n[13] !== C || n[14] !== x || n[15] !== f || n[16] !== r ? (T = e => {
            let {
                name: t,
                description: n,
                metadata: i
            } = e, a = f.getQueryData([r, `roles`]);
            return a && (f.cancelQueries({
                queryKey: [r, `roles`]
            }), f.setQueryData([r, `roles`], e => e && {
                ...e,
                data: [{
                    id: `new`,
                    name: t,
                    permissions: [],
                    ...u && !W(i) ? {
                        permissions: x,
                        disallowed_permissions: C
                    } : {},
                    resource_type: `workspace`,
                    predefined_role: !1,
                    description: n,
                    created_at: Date.now(),
                    updated_at: Date.now(),
                    created_by: `system`,
                    metadata: {}
                }, ...e.data]
            })), {
                previousRoles: a
            }
        }, n[12] = u, n[13] = C, n[14] = x, n[15] = f, n[16] = r, n[17] = T) : T = n[17];
        let E;
        n[18] !== h || n[19] !== f || n[20] !== p || n[21] !== r ? (E = (e, t, n) => {
            n?.previousRoles && f.setQueryData([r, `roles`], n.previousRoles), f.invalidateQueries({
                refetchType: `all`,
                queryKey: [r, `roles`]
            }), e.message === `Role with this name already exists.` ? p.warning(h.formatMessage({
                id: `Hn9Qxu`,
                defaultMessage: `Role with this name already exists`
            }), {
                duration: 1
            }) : p.danger(h.formatMessage({
                id: `chatgpt.workspace.permissions.roles.create.toast.unknown_outcome`,
                defaultMessage: `Couldn't confirm whether this role was created. Check the role list before trying again.`
            }), {
                duration: 8
            })
        }, n[18] = h, n[19] = f, n[20] = p, n[21] = r, n[22] = E) : E = n[22];
        let D;
        n[23] !== f || n[24] !== r ? (D = () => {
            f.invalidateQueries({
                refetchType: `all`,
                queryKey: [r, `roles`]
            }), f.invalidateQueries({
                refetchType: `all`,
                queryKey: b(r)
            })
        }, n[23] = f, n[24] = r, n[25] = D) : D = n[25];
        let O;
        n[26] !== w || n[27] !== T || n[28] !== E || n[29] !== D ? (O = {
            mutationFn: w,
            onMutate: T,
            onError: E,
            onSuccess: D
        }, n[26] = w, n[27] = T, n[28] = E, n[29] = D, n[30] = O) : O = n[30];
        let {
            mutateAsync: k
        } = d(O), A;
        return n[31] === k ? A = n[32] : (A = {
            createRole: k
        }, n[31] = k, n[32] = A), A
    }, J = e => {
        "use forget";
        let n = (0, U.c)(10),
            {
                workspaceId: r
            } = e,
            i = l(),
            a;
        n[0] === r ? a = n[1] : (a = async e => await t.safeDelete(`/rbac/workspace/{workspace_id}/roles/{role_id}`, {
            parameters: {
                query: {
                    account_id: r
                },
                path: {
                    workspace_id: r,
                    role_id: e
                }
            }
        }), n[0] = r, n[1] = a);
        let o;
        n[2] !== i || n[3] !== r ? (o = () => {
            i.invalidateQueries({
                refetchType: `all`,
                queryKey: [r, `roles`]
            }), i.invalidateQueries({
                refetchType: `all`,
                queryKey: b(r)
            })
        }, n[2] = i, n[3] = r, n[4] = o) : o = n[4];
        let s;
        n[5] !== a || n[6] !== o ? (s = {
            mutationFn: a,
            onSuccess: o
        }, n[5] = a, n[6] = o, n[7] = s) : s = n[7];
        let {
            mutateAsync: c
        } = d(s), u;
        return n[8] === c ? u = n[9] : (u = {
            deleteRole: c
        }, n[8] = c, n[9] = u), u
    }, Y = e => {
        "use forget";
        let n = (0, U.c)(33),
            {
                workspaceId: r,
                includeDisallowedPermissions: o,
                invalidateModelCatalogsOnAccessChange: s,
                showSuccessToast: u,
                defaultRole: f
            } = e,
            p = o !== void 0 && o,
            h = s === void 0 || s,
            g = u === void 0 || u,
            _ = l(),
            v = c(),
            y = m(),
            b = i()?.isFedrampCompliantWorkspace === !0,
            x;
        n[0] !== p || n[1] !== _ || n[2] !== r ? (x = e => {
            let {
                id: t,
                metadata: n
            } = e, i = n ?? _.getQueryData([r, `role`, t])?.metadata ?? _.getQueryData([r, `roles`])?.data.find(e => e.id === t)?.metadata;
            return p && !W(i) && E({
                id: t,
                predefined_role: !1
            }, r)
        }, n[0] = p, n[1] = _, n[2] = r, n[3] = x) : x = n[3];
        let S = x,
            w;
        n[4] !== f || n[5] !== S || n[6] !== r ? (w = async e => {
            let n = [...e.permissions],
                i = t => {
                    let n = e.originalRole;
                    return n == null || t.some(t => n.permissions.includes(t) !== e.permissions.includes(t) || S(e) && (n.disallowed_permissions?.includes(t) ?? !1) !== (e.disallowed_permissions?.includes(t) ?? !1))
                },
                o = e.defaultRole ?? f,
                s = S(e) && o != null ? N({
                    role: e,
                    defaultRole: o
                }) : n;
            i(H) && !s.includes(a.SearchAccess) && (n = n.filter(se)), i(V) && !b && (!s.includes(a.GPT5ThinkingAccess) && !s.includes(a.GPT51ReasoningAccess) && !s.includes(a.GPT52ReasoningAccess) || !s.includes(a.ReasoningModelAccess)) && (s.includes(a.GPT5ThinkingMiniAccess) || n.push(a.GPT5ThinkingMiniAccess));
            let c = (e.disallowed_permissions ?? []).filter(e => !n.includes(e));
            return await t.safePatch(`/rbac/workspace/{workspace_id}/roles/{role_id}`, {
                parameters: {
                    query: {
                        account_id: r
                    },
                    path: {
                        workspace_id: r,
                        role_id: e.id
                    }
                },
                requestBody: {
                    role_name: e.name,
                    description: e.description,
                    permissions: n,
                    ...S(e) ? {
                        disallowed_permissions: c
                    } : {}
                }
            })
        }, n[4] = f, n[5] = S, n[6] = r, n[7] = w) : w = n[7];
        let T;
        n[8] !== _ || n[9] !== S || n[10] !== r ? (T = e => {
            let {
                id: t,
                name: n,
                permissions: i,
                disallowed_permissions: a,
                metadata: o
            } = e, s = _.getQueryData([r, `role`, t]), c = s ?? _.getQueryData([r, `roles`])?.data.find(e => e.id === t);
            return _.setQueryData([r, `role`, t], e => ({
                ...e,
                name: n,
                permissions: i,
                ...S({
                    id: t,
                    metadata: o
                }) ? {
                    disallowed_permissions: (a ?? []).filter(e => !i.includes(e))
                } : {}
            })), {
                previousRole: s,
                previousRoleForModelAccess: c
            }
        }, n[8] = _, n[9] = S, n[10] = r, n[11] = T) : T = n[11];
        let D;
        n[12] !== y || n[13] !== _ || n[14] !== v || n[15] !== r ? (D = (e, t, n) => {
            _.setQueryData([r, `role`, t.id], n?.previousRole), e.message === `Role with this name already exists.` ? v.warning(y.formatMessage({
                id: `EDzkz/`,
                defaultMessage: `Role with this name already exists`
            }), {
                duration: 1
            }) : v.danger(y.formatMessage({
                id: `ezIZZO`,
                defaultMessage: `Failed to update permission`
            }), {
                duration: 1
            })
        }, n[12] = y, n[13] = _, n[14] = v, n[15] = r, n[16] = D) : D = n[16];
        let O;
        n[17] !== f || n[18] !== y || n[19] !== h || n[20] !== _ || n[21] !== g || n[22] !== v || n[23] !== r ? (O = async (e, t, n) => {
            let i = !1,
                a = null,
                o = t.originalRole?.permissions ?? n?.previousRole?.permissions;
            if (o != null && R({
                    previousPermissions: o,
                    nextPermissions: t.permissions
                })) try {
                let e = await C(r);
                a = await B({
                    workspaceId: r,
                    roles: e.data
                })
            } catch {
                i = !0, v.warning(y.formatMessage({
                    id: `chatgpt.workspace.permissions.financial_services.plugin_default_install.toast.sync_failed`,
                    defaultMessage: `Finance access was saved, but ChatGPT Financial Services could not be set to install automatically.`
                }), {
                    duration: 3
                })
            }
            a != null && re({
                queryClient: _,
                workspaceId: r,
                pluginId: a.pluginId,
                settings: a.workspaceSettings
            });
            let s = t.defaultRole ?? f,
                c = s?.id === t.id ? void 0 : s,
                l = (() => {
                    if (n?.previousRoleForModelAccess == null) return !1;
                    let e = N({
                            role: n.previousRoleForModelAccess,
                            defaultRole: c
                        }),
                        r = N({
                            role: {
                                ...t,
                                metadata: t.metadata ?? n.previousRoleForModelAccess.metadata
                            },
                            defaultRole: c
                        });
                    return ne.some(t => e.includes(t.permission) !== r.includes(t.permission) && te(t, {
                        disableExposureLog: !0
                    }))
                })();
            await Promise.all([_.invalidateQueries({
                refetchType: `all`,
                queryKey: [r, `role`, t.id]
            }), _.invalidateQueries({
                refetchType: `all`,
                queryKey: [r, `roles`]
            }), _.invalidateQueries({
                queryKey: [`workspace-settings`, r],
                refetchType: `all`
            }), _.invalidateQueries({
                queryKey: [`gizmos`]
            }), _.invalidateQueries({
                queryKey: [`gizmo`]
            }), ...h && l ? [F(_)] : [], ...a == null ? [] : [_.invalidateQueries({
                queryKey: [r, `admin`, `plugins`],
                refetchType: `all`
            })]]), !i && g && v.success(y.formatMessage({
                id: `L59KWu`,
                defaultMessage: `Successfully updated permission`
            }), {
                duration: 1
            })
        }, n[17] = f, n[18] = y, n[19] = h, n[20] = _, n[21] = g, n[22] = v, n[23] = r, n[24] = O) : O = n[24];
        let k;
        n[25] !== w || n[26] !== T || n[27] !== D || n[28] !== O ? (k = {
            mutationFn: w,
            onMutate: T,
            onError: D,
            onSuccess: O
        }, n[25] = w, n[26] = T, n[27] = D, n[28] = O, n[29] = k) : k = n[29];
        let {
            mutateAsync: A,
            isPending: j
        } = d(k), M;
        return n[30] !== j || n[31] !== A ? (M = {
            updateRole: A,
            isPending: j
        }, n[30] = j, n[31] = A, n[32] = M) : M = n[32], M
    }, X = e => {
        "use forget";
        let n = (0, U.c)(9),
            {
                workspaceId: r,
                roleId: i
            } = e,
            a = l(),
            o;
        n[0] !== a || n[1] !== r ? (o = {
            mutationFn: async e => {
                let {
                    requestPatch: n,
                    targetRoleId: i
                } = e, o = await t.safeGet(`/rbac/workspace/{workspace_id}/roles/{role_id}/metadata`, {
                    parameters: {
                        query: {
                            account_id: r
                        },
                        path: {
                            workspace_id: r,
                            role_id: i
                        }
                    }
                });
                a.setQueryData(w(r, i), o);
                let s = K({
                    currentMetadataResource: o,
                    requestPatch: n
                });
                return await t.safePut(`/rbac/workspace/{workspace_id}/roles/{role_id}/metadata`, {
                    parameters: {
                        query: {
                            account_id: r
                        },
                        path: {
                            workspace_id: r,
                            role_id: i
                        }
                    },
                    requestBody: s
                })
            },
            onSuccess: (e, t) => {
                let {
                    targetRoleId: n
                } = t;
                a.setQueryData(w(r, n), t => t ? !t.metadata || !e.metadata ? {
                    ...t,
                    metadata: e.metadata ?? null
                } : {
                    ...t,
                    metadata: {
                        ...t.metadata,
                        soft_alert_credit_limit: e.metadata.soft_alert_credit_limit,
                        hard_cap_credit_limit: e.metadata.hard_cap_credit_limit,
                        hard_cap_shared_credit_limit: e.metadata.hard_cap_shared_credit_limit,
                        workspace_system_instruction: e.metadata.workspace_system_instruction
                    }
                } : e)
            },
            onSettled: (e, t, n) => {
                let {
                    targetRoleId: i
                } = n;
                a.invalidateQueries({
                    queryKey: w(r, i)
                })
            }
        }, n[0] = a, n[1] = r, n[2] = o) : o = n[2];
        let s = d(o),
            c;
        n[3] !== s || n[4] !== i ? (c = (e, t) => {
            let n = t === void 0 ? i : t;
            return s.mutateAsync({
                requestPatch: e,
                targetRoleId: n
            })
        }, n[3] = s, n[4] = i, n[5] = c) : c = n[5];
        let u;
        return n[6] !== s.isPending || n[7] !== c ? (u = {
            upsertRoleMetadata: c,
            isPending: s.isPending
        }, n[6] = s.isPending, n[7] = c, n[8] = u) : u = n[8], u
    }, Z = e => {
        "use forget";
        let n = (0, U.c)(12),
            {
                workspaceId: r,
                roleId: i
            } = e,
            a = l(),
            o;
        n[0] !== i || n[1] !== r ? (o = async e => {
            let {
                id: n
            } = e;
            return await t.safePost(`/rbac/workspace/{workspace_id}/role-assignments`, {
                parameters: {
                    query: {
                        account_id: r
                    },
                    path: {
                        workspace_id: r
                    }
                },
                requestBody: {
                    role_id: i,
                    principal_id: n,
                    principal_type: `group`
                }
            })
        }, n[0] = i, n[1] = r, n[2] = o) : o = n[2];
        let s;
        n[3] !== a || n[4] !== i || n[5] !== r ? (s = (e, t) => {
            let n = [r, i, `role-groups`];
            a.setQueryData(n, e => [...e, {
                id: t.id,
                name: t.name ?? ``,
                num_members: t.num_members ?? 0,
                created_time: new Date().toDateString()
            }]), a.invalidateQueries({
                refetchType: `all`,
                queryKey: n
            })
        }, n[3] = a, n[4] = i, n[5] = r, n[6] = s) : s = n[6];
        let c;
        n[7] !== o || n[8] !== s ? (c = {
            mutationFn: o,
            onSuccess: s
        }, n[7] = o, n[8] = s, n[9] = c) : c = n[9];
        let {
            mutateAsync: u
        } = d(c), f;
        return n[10] === u ? f = n[11] : (f = {
            assignGroup: u
        }, n[10] = u, n[11] = f), f
    }, Q = e => {
        "use forget";
        let n = (0, U.c)(12),
            {
                workspaceId: r,
                roleId: i
            } = e,
            a = l(),
            o;
        n[0] !== i || n[1] !== r ? (o = async e => await t.safeDelete(`/rbac/workspace/{workspace_id}/role-assignments`, {
            parameters: {
                query: {
                    account_id: r,
                    role_id: i,
                    principal_id: e,
                    principal_type: `group`
                },
                path: {
                    workspace_id: r
                }
            }
        }), n[0] = i, n[1] = r, n[2] = o) : o = n[2];
        let s;
        n[3] !== a || n[4] !== i || n[5] !== r ? (s = (e, t) => {
            let n = [r, i, `role-groups`];
            a.setQueryData(n, e => e ? e.filter(e => e.id !== t) : []), a.invalidateQueries({
                refetchType: `all`,
                queryKey: n
            })
        }, n[3] = a, n[4] = i, n[5] = r, n[6] = s) : s = n[6];
        let c;
        n[7] !== o || n[8] !== s ? (c = {
            mutationFn: o,
            onSuccess: s
        }, n[7] = o, n[8] = s, n[9] = c) : c = n[9];
        let {
            mutateAsync: u
        } = d(c), f;
        return n[10] === u ? f = n[11] : (f = {
            unassignGroup: u
        }, n[10] = u, n[11] = f), f
    }, $ = e => [e, `update-connector-role-permissions`], ce = e => {
        "use forget";
        let n = (0, U.c)(27),
            {
                workspaceId: r,
                connectorId: i,
                showToast: a
            } = e,
            o = a === void 0 || a,
            s = l(),
            u = c(),
            f = m(),
            p;
        n[0] === r ? p = n[1] : (p = $(r), n[0] = r, n[1] = p);
        let h;
        n[2] !== i || n[3] !== r ? (h = async e => await t.safePatch(`/rbac/workspace/{workspace_id}/roles/{role_id}/connectors/{connector_id}`, {
            parameters: {
                query: {
                    account_id: r
                },
                path: {
                    workspace_id: r,
                    role_id: e.roleId,
                    connector_id: i
                }
            },
            requestBody: {
                permissions: e.permissions
            }
        }), n[2] = i, n[3] = r, n[4] = h) : h = n[4];
        let g;
        n[5] !== i || n[6] !== s || n[7] !== r ? (g = e => {
            let {
                roleId: t,
                permissions: n
            } = e;
            s.cancelQueries({
                queryKey: _(r, i)
            }), s.cancelQueries({
                queryKey: b(r, t)
            }), s.cancelQueries({
                queryKey: x(r, i, t)
            });
            let a = s.getQueryData(_(r, i));
            return s.setQueryData(_(r, i), e => ({
                ...e,
                roles_with_permissions: e?.roles_with_permissions?.map(e => e.role.id === t ? {
                    ...e,
                    connector_permissions: n
                } : e)
            })), {
                previousRoles: a
            }
        }, n[5] = i, n[6] = s, n[7] = r, n[8] = g) : g = n[8];
        let v, y;
        n[9] !== i || n[10] !== f || n[11] !== s || n[12] !== o || n[13] !== u || n[14] !== r ? (v = (e, t, n) => {
            s.setQueryData(_(r, i), n?.previousRoles), o && u.danger(f.formatMessage({
                id: `ezIZZO`,
                defaultMessage: `Failed to update permission`
            }), {
                duration: 1
            })
        }, y = async (e, t) => {
            await Promise.all([s.invalidateQueries({
                refetchType: `all`,
                queryKey: [r, `role`, t.roleId]
            }), s.invalidateQueries({
                refetchType: `all`,
                queryKey: [r, `roles`]
            }), s.invalidateQueries({
                refetchType: `all`,
                queryKey: _(r, i)
            }), s.invalidateQueries({
                refetchType: `all`,
                queryKey: b(r, t.roleId)
            }), s.invalidateQueries({
                refetchType: `all`,
                queryKey: x(r, i, t.roleId)
            })]), o && u.success(f.formatMessage({
                id: `L59KWu`,
                defaultMessage: `Successfully updated permission`
            }), {
                duration: 1
            })
        }, n[9] = i, n[10] = f, n[11] = s, n[12] = o, n[13] = u, n[14] = r, n[15] = v, n[16] = y) : (v = n[15], y = n[16]);
        let S;
        n[17] !== p || n[18] !== h || n[19] !== g || n[20] !== v || n[21] !== y ? (S = {
            mutationKey: p,
            mutationFn: h,
            onMutate: g,
            onError: v,
            onSuccess: y
        }, n[17] = p, n[18] = h, n[19] = g, n[20] = v, n[21] = y, n[22] = S) : S = n[22];
        let {
            mutateAsync: C,
            isPending: w,
            variables: T
        } = d(S), E;
        return n[23] !== w || n[24] !== C || n[25] !== T ? (E = {
            updateConnectorRolePermission: C,
            isPending: w,
            variables: T
        }, n[23] = w, n[24] = C, n[25] = T, n[26] = E) : E = n[26], E
    }, le = e => {
        "use forget";
        let n = (0, U.c)(21),
            {
                workspaceId: r,
                showToast: i
            } = e,
            a = i === void 0 || i,
            o = c(),
            s = m(),
            u = l(),
            f = g(),
            p;
        n[0] === r ? p = n[1] : (p = async e => await t.safePatch(`/rbac/workspace/{workspace_id}/roles/{role_id}/connectors`, {
            parameters: {
                query: {
                    account_id: r
                },
                path: {
                    workspace_id: r,
                    role_id: e.id
                }
            },
            requestBody: {
                state: e.state
            }
        }), n[0] = r, n[1] = p);
        let h;
        n[2] !== s || n[3] !== a || n[4] !== o ? (h = () => {
            a && o.danger(s.formatMessage({
                id: `ezIZZO`,
                defaultMessage: `Failed to update permission`
            }), {
                duration: 1
            })
        }, n[2] = s, n[3] = a, n[4] = o, n[5] = h) : h = n[5];
        let _;
        n[6] !== s || n[7] !== f || n[8] !== u || n[9] !== a || n[10] !== o || n[11] !== r ? (_ = async (e, t) => {
            await Promise.all([u.invalidateQueries({
                refetchType: `all`,
                queryKey: b(r, t.id)
            }), u.invalidateQueries({
                refetchType: `all`,
                queryKey: [r, `role`, t.id]
            }), u.invalidateQueries({
                queryKey: [r, `roles`]
            })]), u.invalidateQueries({
                refetchType: `all`,
                queryKey: [`permissions`, r]
            }), f(), a && o.success(s.formatMessage({
                id: `L59KWu`,
                defaultMessage: `Successfully updated permission`
            }), {
                duration: 1
            })
        }, n[6] = s, n[7] = f, n[8] = u, n[9] = a, n[10] = o, n[11] = r, n[12] = _) : _ = n[12];
        let v;
        n[13] !== p || n[14] !== h || n[15] !== _ ? (v = {
            mutationFn: p,
            onError: h,
            onSuccess: _
        }, n[13] = p, n[14] = h, n[15] = _, n[16] = v) : v = n[16];
        let {
            mutateAsync: y,
            isPending: x,
            variables: S
        } = d(v), C;
        return n[17] !== x || n[18] !== y || n[19] !== S ? (C = {
            toggleAllConnectorsPermissionForRole: y,
            isPending: x,
            variables: S
        }, n[17] = x, n[18] = y, n[19] = S, n[20] = C) : C = n[20], C
    }
}));
export {
    q as a, Q as c, X as d, I as f, Z as i, ce as l, $ as n, J as o, F as p, ue as r, le as s, K as t, Y as u
};
//# sourceMappingURL=b411f8ca-etyixtlhhe9zenvx.js.map