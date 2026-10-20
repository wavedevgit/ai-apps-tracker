import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    L1 as t,
    N1 as n,
    P7 as r,
    R7 as i,
    VU as a,
    cK as o,
    lK as s,
    zU as c
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    N as l,
    Rn as u,
    p as d,
    s as f,
    wn as p,
    zn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FPn as h,
    FQ as g,
    RPn as _,
    UPn as v,
    VQ as y,
    WPn as b,
    XCn as x,
    twn as S
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Gy as C,
    Qb as w,
    Wy as T,
    nx as E,
    qy as D,
    tx as O
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    _ as k,
    p as A,
    u as j
} from "./b26e60ff-buooiibaqv0tlwsm.js";
import {
    i as M,
    t as N
} from "./74bc827c-gg1ge2qvfknhn33r.js";
import {
    d as ee,
    f as te,
    r as ne
} from "./03a3ce2c-b5fqb8zsss3tvzok.js";
import {
    r as re,
    t as ie
} from "./63f6a4cc-dy5lcr5r0vqhnmv5.js";
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
        S(), A(), s(), w(), L = `chatgpt-for-finance`, R = ({
            previousPermissions: e,
            nextPermissions: t
        }) => e.includes(o.FinServAccess) !== t.includes(o.FinServAccess), z = e => {
            let t = e.filter(e => e.permissions.includes(o.FinServAccess)).map(e => e.id);
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
            let n = (await x({
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
    return e !== o.AgentModeAccess && e !== o.DeepResearchAccess
}
var U, W, G, K, q, J, Y, X, Z, Q, $, ce, le, ue = e((() => {
    U = p(), I(), ee(), D(), ie(), g(), b(), t(), c(), i(), f(), u(), ae(), s(), M(), oe(), w(), W = e => typeof e == `object` && !!e && `lockdown_mode` in e && e.lockdown_mode === !0, G = (e, t) => Object.prototype.hasOwnProperty.call(e, t), K = ({
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
        let t = (0, U.c)(27),
            {
                workspaceId: n,
                bootstrapResources: i,
                inheritDefaultMemberPermissions: s
            } = e,
            c = s !== void 0 && s,
            u = l(),
            f = a(),
            p = m(),
            h;
        t[0] === i ? h = t[1] : (h = i?.includes(`connectors`) ? [o.UseWorkspacePlugins] : [], t[0] = i, t[1] = h);
        let g = h,
            v;
        t[2] !== i || t[3] !== c || t[4] !== g || t[5] !== n ? (v = e => r.safePost(`/rbac/workspace/{workspace_id}/roles`, {
            parameters: {
                query: {
                    account_id: n
                },
                path: {
                    workspace_id: n
                }
            },
            requestBody: {
                role_name: e.name,
                description: e.description,
                lockdown_mode: e.metadata?.lockdown_mode,
                bootstrap_resources: i,
                ...c && !W(e.metadata) ? {
                    permissions: [],
                    disallowed_permissions: g,
                    workspace_use_initialization: `inherit`
                } : {}
            }
        }), t[2] = i, t[3] = c, t[4] = g, t[5] = n, t[6] = v) : v = t[6];
        let y;
        t[7] !== c || t[8] !== g || t[9] !== u || t[10] !== n ? (y = e => {
            let {
                name: t,
                description: r,
                metadata: i
            } = e, a = u.getQueryData([n, `roles`]);
            return a && (u.cancelQueries({
                queryKey: [n, `roles`]
            }), u.setQueryData([n, `roles`], e => e && {
                ...e,
                data: [{
                    id: `new`,
                    name: t,
                    permissions: [],
                    ...c && !W(i) ? {
                        disallowed_permissions: g
                    } : {},
                    resource_type: `workspace`,
                    predefined_role: !1,
                    description: r,
                    created_at: Date.now(),
                    updated_at: Date.now(),
                    created_by: `system`,
                    metadata: {}
                }, ...e.data]
            })), {
                previousRoles: a
            }
        }, t[7] = c, t[8] = g, t[9] = u, t[10] = n, t[11] = y) : y = t[11];
        let b;
        t[12] !== p || t[13] !== u || t[14] !== f || t[15] !== n ? (b = (e, t, r) => {
            r?.previousRoles && u.setQueryData([n, `roles`], r.previousRoles), u.invalidateQueries({
                refetchType: `all`,
                queryKey: [n, `roles`]
            }), e.message === `Role with this name already exists.` ? f.warning(p.formatMessage({
                id: `Hn9Qxu`,
                defaultMessage: `Role with this name already exists`
            }), {
                duration: 1
            }) : f.danger(p.formatMessage({
                id: `chatgpt.workspace.permissions.roles.create.toast.unknown_outcome`,
                defaultMessage: `Couldn't confirm whether this role was created. Check the role list before trying again.`
            }), {
                duration: 8
            })
        }, t[12] = p, t[13] = u, t[14] = f, t[15] = n, t[16] = b) : b = t[16];
        let x;
        t[17] !== u || t[18] !== n ? (x = () => {
            u.invalidateQueries({
                refetchType: `all`,
                queryKey: [n, `roles`]
            }), u.invalidateQueries({
                refetchType: `all`,
                queryKey: _(n)
            })
        }, t[17] = u, t[18] = n, t[19] = x) : x = t[19];
        let S;
        t[20] !== v || t[21] !== y || t[22] !== b || t[23] !== x ? (S = {
            mutationFn: v,
            onMutate: y,
            onError: b,
            onSuccess: x
        }, t[20] = v, t[21] = y, t[22] = b, t[23] = x, t[24] = S) : S = t[24];
        let {
            mutateAsync: C
        } = d(S), w;
        return t[25] === C ? w = t[26] : (w = {
            createRole: C
        }, t[25] = C, t[26] = w), w
    }, J = e => {
        "use forget";
        let t = (0, U.c)(10),
            {
                workspaceId: n
            } = e,
            i = l(),
            a;
        t[0] === n ? a = t[1] : (a = async e => await r.safeDelete(`/rbac/workspace/{workspace_id}/roles/{role_id}`, {
            parameters: {
                query: {
                    account_id: n
                },
                path: {
                    workspace_id: n,
                    role_id: e
                }
            }
        }), t[0] = n, t[1] = a);
        let o;
        t[2] !== i || t[3] !== n ? (o = () => {
            i.invalidateQueries({
                refetchType: `all`,
                queryKey: [n, `roles`]
            }), i.invalidateQueries({
                refetchType: `all`,
                queryKey: _(n)
            })
        }, t[2] = i, t[3] = n, t[4] = o) : o = t[4];
        let s;
        t[5] !== a || t[6] !== o ? (s = {
            mutationFn: a,
            onSuccess: o
        }, t[5] = a, t[6] = o, t[7] = s) : s = t[7];
        let {
            mutateAsync: c
        } = d(s), u;
        return t[8] === c ? u = t[9] : (u = {
            deleteRole: c
        }, t[8] = c, t[9] = u), u
    }, Y = e => {
        "use forget";
        let t = (0, U.c)(33),
            {
                workspaceId: i,
                includeDisallowedPermissions: s,
                invalidateModelCatalogsOnAccessChange: c,
                showSuccessToast: u,
                defaultRole: f
            } = e,
            p = s !== void 0 && s,
            h = c === void 0 || c,
            g = u === void 0 || u,
            _ = l(),
            v = a(),
            y = m(),
            b = n()?.isFedrampCompliantWorkspace === !0,
            x;
        t[0] !== p || t[1] !== _ || t[2] !== i ? (x = e => {
            let {
                id: t,
                metadata: n
            } = e, r = n ?? _.getQueryData([i, `role`, t])?.metadata ?? _.getQueryData([i, `roles`])?.data.find(e => e.id === t)?.metadata;
            return p && !W(r) && E({
                id: t,
                predefined_role: !1
            }, i)
        }, t[0] = p, t[1] = _, t[2] = i, t[3] = x) : x = t[3];
        let S = x,
            C;
        t[4] !== f || t[5] !== S || t[6] !== i ? (C = async e => {
            let t = [...e.permissions],
                n = t => {
                    let n = e.originalRole;
                    return n == null || t.some(t => n.permissions.includes(t) !== e.permissions.includes(t) || S(e) && (n.disallowed_permissions?.includes(t) ?? !1) !== (e.disallowed_permissions?.includes(t) ?? !1))
                },
                a = e.defaultRole ?? f,
                s = S(e) && a != null ? N({
                    role: e,
                    defaultRole: a
                }) : t;
            n(H) && !s.includes(o.SearchAccess) && (t = t.filter(se)), n(V) && !b && (!s.includes(o.GPT5ThinkingAccess) && !s.includes(o.GPT51ReasoningAccess) && !s.includes(o.GPT52ReasoningAccess) || !s.includes(o.ReasoningModelAccess)) && (s.includes(o.GPT5ThinkingMiniAccess) || t.push(o.GPT5ThinkingMiniAccess));
            let c = (e.disallowed_permissions ?? []).filter(e => !t.includes(e));
            return await r.safePatch(`/rbac/workspace/{workspace_id}/roles/{role_id}`, {
                parameters: {
                    query: {
                        account_id: i
                    },
                    path: {
                        workspace_id: i,
                        role_id: e.id
                    }
                },
                requestBody: {
                    role_name: e.name,
                    description: e.description,
                    permissions: t,
                    ...S(e) ? {
                        disallowed_permissions: c
                    } : {}
                }
            })
        }, t[4] = f, t[5] = S, t[6] = i, t[7] = C) : C = t[7];
        let w;
        t[8] !== _ || t[9] !== S || t[10] !== i ? (w = e => {
            let {
                id: t,
                name: n,
                permissions: r,
                disallowed_permissions: a,
                metadata: o
            } = e, s = _.getQueryData([i, `role`, t]), c = s ?? _.getQueryData([i, `roles`])?.data.find(e => e.id === t);
            return _.setQueryData([i, `role`, t], e => ({
                ...e,
                name: n,
                permissions: r,
                ...S({
                    id: t,
                    metadata: o
                }) ? {
                    disallowed_permissions: (a ?? []).filter(e => !r.includes(e))
                } : {}
            })), {
                previousRole: s,
                previousRoleForModelAccess: c
            }
        }, t[8] = _, t[9] = S, t[10] = i, t[11] = w) : w = t[11];
        let D;
        t[12] !== y || t[13] !== _ || t[14] !== v || t[15] !== i ? (D = (e, t, n) => {
            _.setQueryData([i, `role`, t.id], n?.previousRole), e.message === `Role with this name already exists.` ? v.warning(y.formatMessage({
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
        }, t[12] = y, t[13] = _, t[14] = v, t[15] = i, t[16] = D) : D = t[16];
        let O;
        t[17] !== f || t[18] !== y || t[19] !== h || t[20] !== _ || t[21] !== g || t[22] !== v || t[23] !== i ? (O = async (e, t, n) => {
            let r = !1,
                a = null,
                o = t.originalRole?.permissions ?? n?.previousRole?.permissions;
            if (o != null && R({
                    previousPermissions: o,
                    nextPermissions: t.permissions
                })) try {
                let e = await T(i);
                a = await B({
                    workspaceId: i,
                    roles: e.data
                })
            } catch {
                r = !0, v.warning(y.formatMessage({
                    id: `chatgpt.workspace.permissions.financial_services.plugin_default_install.toast.sync_failed`,
                    defaultMessage: `Finance access was saved, but ChatGPT Financial Services could not be set to install automatically.`
                }), {
                    duration: 3
                })
            }
            a != null && re({
                queryClient: _,
                workspaceId: i,
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
                queryKey: [i, `role`, t.id]
            }), _.invalidateQueries({
                refetchType: `all`,
                queryKey: [i, `roles`]
            }), _.invalidateQueries({
                queryKey: [`workspace-settings`, i],
                refetchType: `all`
            }), _.invalidateQueries({
                queryKey: [`gizmos`]
            }), _.invalidateQueries({
                queryKey: [`gizmo`]
            }), ...h && l ? [F(_)] : [], ...a == null ? [] : [_.invalidateQueries({
                queryKey: [i, `admin`, `plugins`],
                refetchType: `all`
            })]]), !r && g && v.success(y.formatMessage({
                id: `L59KWu`,
                defaultMessage: `Successfully updated permission`
            }), {
                duration: 1
            })
        }, t[17] = f, t[18] = y, t[19] = h, t[20] = _, t[21] = g, t[22] = v, t[23] = i, t[24] = O) : O = t[24];
        let k;
        t[25] !== C || t[26] !== w || t[27] !== D || t[28] !== O ? (k = {
            mutationFn: C,
            onMutate: w,
            onError: D,
            onSuccess: O
        }, t[25] = C, t[26] = w, t[27] = D, t[28] = O, t[29] = k) : k = t[29];
        let {
            mutateAsync: A,
            isPending: j
        } = d(k), M;
        return t[30] !== j || t[31] !== A ? (M = {
            updateRole: A,
            isPending: j
        }, t[30] = j, t[31] = A, t[32] = M) : M = t[32], M
    }, X = e => {
        "use forget";
        let t = (0, U.c)(9),
            {
                workspaceId: n,
                roleId: i
            } = e,
            a = l(),
            o;
        t[0] !== a || t[1] !== n ? (o = {
            mutationFn: async e => {
                let {
                    requestPatch: t,
                    targetRoleId: i
                } = e, o = await r.safeGet(`/rbac/workspace/{workspace_id}/roles/{role_id}/metadata`, {
                    parameters: {
                        query: {
                            account_id: n
                        },
                        path: {
                            workspace_id: n,
                            role_id: i
                        }
                    }
                });
                a.setQueryData(C(n, i), o);
                let s = K({
                    currentMetadataResource: o,
                    requestPatch: t
                });
                return await r.safePut(`/rbac/workspace/{workspace_id}/roles/{role_id}/metadata`, {
                    parameters: {
                        query: {
                            account_id: n
                        },
                        path: {
                            workspace_id: n,
                            role_id: i
                        }
                    },
                    requestBody: s
                })
            },
            onSuccess: (e, t) => {
                let {
                    targetRoleId: r
                } = t;
                a.setQueryData(C(n, r), t => t ? !t.metadata || !e.metadata ? {
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
            onSettled: (e, t, r) => {
                let {
                    targetRoleId: i
                } = r;
                a.invalidateQueries({
                    queryKey: C(n, i)
                })
            }
        }, t[0] = a, t[1] = n, t[2] = o) : o = t[2];
        let s = d(o),
            c;
        t[3] !== s || t[4] !== i ? (c = (e, t) => {
            let n = t === void 0 ? i : t;
            return s.mutateAsync({
                requestPatch: e,
                targetRoleId: n
            })
        }, t[3] = s, t[4] = i, t[5] = c) : c = t[5];
        let u;
        return t[6] !== s.isPending || t[7] !== c ? (u = {
            upsertRoleMetadata: c,
            isPending: s.isPending
        }, t[6] = s.isPending, t[7] = c, t[8] = u) : u = t[8], u
    }, Z = e => {
        "use forget";
        let t = (0, U.c)(12),
            {
                workspaceId: n,
                roleId: i
            } = e,
            a = l(),
            o;
        t[0] !== i || t[1] !== n ? (o = async e => {
            let {
                id: t
            } = e;
            return await r.safePost(`/rbac/workspace/{workspace_id}/role-assignments`, {
                parameters: {
                    query: {
                        account_id: n
                    },
                    path: {
                        workspace_id: n
                    }
                },
                requestBody: {
                    role_id: i,
                    principal_id: t,
                    principal_type: `group`
                }
            })
        }, t[0] = i, t[1] = n, t[2] = o) : o = t[2];
        let s;
        t[3] !== a || t[4] !== i || t[5] !== n ? (s = (e, t) => {
            let r = [n, i, `role-groups`];
            a.setQueryData(r, e => [...e, {
                id: t.id,
                name: t.name ?? ``,
                num_members: t.num_members ?? 0,
                created_time: new Date().toDateString()
            }]), a.invalidateQueries({
                refetchType: `all`,
                queryKey: r
            })
        }, t[3] = a, t[4] = i, t[5] = n, t[6] = s) : s = t[6];
        let c;
        t[7] !== o || t[8] !== s ? (c = {
            mutationFn: o,
            onSuccess: s
        }, t[7] = o, t[8] = s, t[9] = c) : c = t[9];
        let {
            mutateAsync: u
        } = d(c), f;
        return t[10] === u ? f = t[11] : (f = {
            assignGroup: u
        }, t[10] = u, t[11] = f), f
    }, Q = e => {
        "use forget";
        let t = (0, U.c)(12),
            {
                workspaceId: n,
                roleId: i
            } = e,
            a = l(),
            o;
        t[0] !== i || t[1] !== n ? (o = async e => await r.safeDelete(`/rbac/workspace/{workspace_id}/role-assignments`, {
            parameters: {
                query: {
                    account_id: n,
                    role_id: i,
                    principal_id: e,
                    principal_type: `group`
                },
                path: {
                    workspace_id: n
                }
            }
        }), t[0] = i, t[1] = n, t[2] = o) : o = t[2];
        let s;
        t[3] !== a || t[4] !== i || t[5] !== n ? (s = (e, t) => {
            let r = [n, i, `role-groups`];
            a.setQueryData(r, e => e ? e.filter(e => e.id !== t) : []), a.invalidateQueries({
                refetchType: `all`,
                queryKey: r
            })
        }, t[3] = a, t[4] = i, t[5] = n, t[6] = s) : s = t[6];
        let c;
        t[7] !== o || t[8] !== s ? (c = {
            mutationFn: o,
            onSuccess: s
        }, t[7] = o, t[8] = s, t[9] = c) : c = t[9];
        let {
            mutateAsync: u
        } = d(c), f;
        return t[10] === u ? f = t[11] : (f = {
            unassignGroup: u
        }, t[10] = u, t[11] = f), f
    }, $ = e => [e, `update-connector-role-permissions`], ce = e => {
        "use forget";
        let t = (0, U.c)(27),
            {
                workspaceId: n,
                connectorId: i,
                showToast: o
            } = e,
            s = o === void 0 || o,
            c = l(),
            u = a(),
            f = m(),
            p;
        t[0] === n ? p = t[1] : (p = $(n), t[0] = n, t[1] = p);
        let g;
        t[2] !== i || t[3] !== n ? (g = async e => await r.safePatch(`/rbac/workspace/{workspace_id}/roles/{role_id}/connectors/{connector_id}`, {
            parameters: {
                query: {
                    account_id: n
                },
                path: {
                    workspace_id: n,
                    role_id: e.roleId,
                    connector_id: i
                }
            },
            requestBody: {
                permissions: e.permissions
            }
        }), t[2] = i, t[3] = n, t[4] = g) : g = t[4];
        let y;
        t[5] !== i || t[6] !== c || t[7] !== n ? (y = e => {
            let {
                roleId: t,
                permissions: r
            } = e;
            c.cancelQueries({
                queryKey: v(n, i)
            }), c.cancelQueries({
                queryKey: _(n, t)
            }), c.cancelQueries({
                queryKey: h(n, i, t)
            });
            let a = c.getQueryData(v(n, i));
            return c.setQueryData(v(n, i), e => ({
                ...e,
                roles_with_permissions: e?.roles_with_permissions?.map(e => e.role.id === t ? {
                    ...e,
                    connector_permissions: r
                } : e)
            })), {
                previousRoles: a
            }
        }, t[5] = i, t[6] = c, t[7] = n, t[8] = y) : y = t[8];
        let b, x;
        t[9] !== i || t[10] !== f || t[11] !== c || t[12] !== s || t[13] !== u || t[14] !== n ? (b = (e, t, r) => {
            c.setQueryData(v(n, i), r?.previousRoles), s && u.danger(f.formatMessage({
                id: `ezIZZO`,
                defaultMessage: `Failed to update permission`
            }), {
                duration: 1
            })
        }, x = async (e, t) => {
            await Promise.all([c.invalidateQueries({
                refetchType: `all`,
                queryKey: [n, `role`, t.roleId]
            }), c.invalidateQueries({
                refetchType: `all`,
                queryKey: [n, `roles`]
            }), c.invalidateQueries({
                refetchType: `all`,
                queryKey: v(n, i)
            }), c.invalidateQueries({
                refetchType: `all`,
                queryKey: _(n, t.roleId)
            }), c.invalidateQueries({
                refetchType: `all`,
                queryKey: h(n, i, t.roleId)
            })]), s && u.success(f.formatMessage({
                id: `L59KWu`,
                defaultMessage: `Successfully updated permission`
            }), {
                duration: 1
            })
        }, t[9] = i, t[10] = f, t[11] = c, t[12] = s, t[13] = u, t[14] = n, t[15] = b, t[16] = x) : (b = t[15], x = t[16]);
        let S;
        t[17] !== p || t[18] !== g || t[19] !== y || t[20] !== b || t[21] !== x ? (S = {
            mutationKey: p,
            mutationFn: g,
            onMutate: y,
            onError: b,
            onSuccess: x
        }, t[17] = p, t[18] = g, t[19] = y, t[20] = b, t[21] = x, t[22] = S) : S = t[22];
        let {
            mutateAsync: C,
            isPending: w,
            variables: T
        } = d(S), E;
        return t[23] !== w || t[24] !== C || t[25] !== T ? (E = {
            updateConnectorRolePermission: C,
            isPending: w,
            variables: T
        }, t[23] = w, t[24] = C, t[25] = T, t[26] = E) : E = t[26], E
    }, le = e => {
        "use forget";
        let t = (0, U.c)(21),
            {
                workspaceId: n,
                showToast: i
            } = e,
            o = i === void 0 || i,
            s = a(),
            c = m(),
            u = l(),
            f = y(),
            p;
        t[0] === n ? p = t[1] : (p = async e => await r.safePatch(`/rbac/workspace/{workspace_id}/roles/{role_id}/connectors`, {
            parameters: {
                query: {
                    account_id: n
                },
                path: {
                    workspace_id: n,
                    role_id: e.id
                }
            },
            requestBody: {
                state: e.state
            }
        }), t[0] = n, t[1] = p);
        let h;
        t[2] !== c || t[3] !== o || t[4] !== s ? (h = () => {
            o && s.danger(c.formatMessage({
                id: `ezIZZO`,
                defaultMessage: `Failed to update permission`
            }), {
                duration: 1
            })
        }, t[2] = c, t[3] = o, t[4] = s, t[5] = h) : h = t[5];
        let g;
        t[6] !== c || t[7] !== f || t[8] !== u || t[9] !== o || t[10] !== s || t[11] !== n ? (g = async (e, t) => {
            await Promise.all([u.invalidateQueries({
                refetchType: `all`,
                queryKey: _(n, t.id)
            }), u.invalidateQueries({
                refetchType: `all`,
                queryKey: [n, `role`, t.id]
            }), u.invalidateQueries({
                queryKey: [n, `roles`]
            })]), u.invalidateQueries({
                refetchType: `all`,
                queryKey: [`permissions`, n]
            }), f(), o && s.success(c.formatMessage({
                id: `L59KWu`,
                defaultMessage: `Successfully updated permission`
            }), {
                duration: 1
            })
        }, t[6] = c, t[7] = f, t[8] = u, t[9] = o, t[10] = s, t[11] = n, t[12] = g) : g = t[12];
        let v;
        t[13] !== p || t[14] !== h || t[15] !== g ? (v = {
            mutationFn: p,
            onError: h,
            onSuccess: g
        }, t[13] = p, t[14] = h, t[15] = g, t[16] = v) : v = t[16];
        let {
            mutateAsync: b,
            isPending: x,
            variables: S
        } = d(v), C;
        return t[17] !== x || t[18] !== b || t[19] !== S ? (C = {
            toggleAllConnectorsPermissionForRole: b,
            isPending: x,
            variables: S
        }, t[17] = x, t[18] = b, t[19] = S, t[20] = C) : C = t[20], C
    }
}));
export {
    q as a, Q as c, X as d, I as f, Z as i, ce as l, $ as n, J as o, F as p, ue as r, le as s, K as t, Y as u
};
//# sourceMappingURL=b411f8ca-ofapfme3zu76fq12.js.map