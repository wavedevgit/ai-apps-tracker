import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    I1 as t,
    L7 as n,
    M1 as r,
    N7 as i,
    VU as a,
    cK as o,
    lK as s,
    zU as c
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as l,
    N as u,
    Tn as d,
    p as f,
    s as p,
    zn as m
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    FQ as h,
    HPn as g,
    JPn as _,
    VQ as v,
    XCn as y,
    YPn as b,
    twn as x,
    zPn as S
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Db as C,
    Ix as w,
    Lx as T,
    Nx as E,
    Tb as D,
    wb as ee
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    h as O,
    w as k,
    y as A
} from "./b26e60ff-fsk9rccepf655vnl.js";
import {
    i as j,
    t as M
} from "./74bc827c-g6f4ojoj3km3iq09.js";
import {
    d as te,
    f as ne,
    r as re
} from "./03a3ce2c-dhmzymm3blxop80q.js";
import {
    a as ie,
    n as ae
} from "./63f6a4cc-dllbub7yjkj89sls.js";
var N, P, F = e((() => {
        N = [
            [`models`],
            [`tpp-models`],
            [`codex-models`],
            [`internal-models-slugs`],
            [`gizmo-models`]
        ], P = e => Promise.all(N.map(t => e.invalidateQueries({
            queryKey: t
        })))
    })),
    I, L, R, z, oe = e((() => {
        x(), A(), s(), E(), I = `chatgpt-for-finance`, L = ({
            previousPermissions: e,
            nextPermissions: t
        }) => e.includes(o.FinServAccess) !== t.includes(o.FinServAccess), R = e => {
            let t = e.filter(e => e.permissions.includes(o.FinServAccess)).map(e => e.id);
            return t.length === 0 ? O({
                mode: `available`
            }) : e.every(w) ? O({
                mode: `installed_by_default`
            }) : O({
                mode: `custom_by_group`,
                installedByDefaultRoleIds: t
            })
        }, z = async ({
            workspaceId: e,
            roles: t
        }) => {
            let n = (await y({
                searchTerm: I,
                cursor: null,
                scope: `GLOBAL`,
                limit: 10
            })).items.find(e => e.name === I && e.scope === `GLOBAL`);
            if (n == null) throw Error(`ChatGPT Financial Services plugin is not available.`);
            let r = await k({
                workspaceId: e,
                pluginId: n.id,
                settings: R(t)
            });
            return {
                pluginId: n.id,
                workspaceSettings: r
            }
        }
    })),
    B, V, se = e((() => {
        B = [`chatgpt.workspace.feature.allow-fast-mode.access`, `chatgpt.workspace.model.GPT-5-reasoning-mini.access`, `chatgpt.workspace.model.GPT-5.1-pro.access`, `chatgpt.workspace.model.GPT-5.1-reasoning.access`, `chatgpt.workspace.model.GPT-5.2-pro.access`, `chatgpt.workspace.model.GPT-5.2-reasoning.access`, `chatgpt.workspace.model.gpt-5.6-luna.access`, `chatgpt.workspace.model.gpt-5.6-sol.access`, `chatgpt.workspace.model.gpt-5.6-terra.access`, `chatgpt.workspace.model.gpt-daybreak-5.6-sol.access`, `chatgpt.workspace.model.gpt-daybreak-red-5.6-sol.access`, `chatgpt.workspace.model.gpt-lifesciences.access`, `chatgpt.workspace.model.pro.access`, `chatgpt.workspace.model.reasoning.access`], V = `chatgpt.workspace.connector.dev_mode,chatgpt.workspace.connector.mcp.create,chatgpt.workspace.contextlayer.admin,chatgpt.workspace.feature.agent-mode.access,chatgpt.workspace.feature.allow-codex-access.access,chatgpt.workspace.feature.allow-codex-local-access.access,chatgpt.workspace.feature.allow-computer-history.access,chatgpt.workspace.feature.app-pairing.access,chatgpt.workspace.feature.aura-browser-memories.access,chatgpt.workspace.feature.aura.access,chatgpt.workspace.feature.canvas-code-execution.access,chatgpt.workspace.feature.canvas-code-network-access.access,chatgpt.workspace.feature.chartgpt.access,chatgpt.workspace.feature.chartgpt.prevent-continuation,chatgpt.workspace.feature.client-application-apple.access,chatgpt.workspace.feature.cloud-computer-use.access,chatgpt.workspace.feature.cloud-password-manager.access,chatgpt.workspace.feature.codex-admin.access,chatgpt.workspace.feature.codex-agent-network-access.access,chatgpt.workspace.feature.codex-device-code-auth.access,chatgpt.workspace.feature.codex-in-app-browser.access,chatgpt.workspace.feature.codex-local-automation.access,chatgpt.workspace.feature.codex-manage-workspace-environments.access,chatgpt.workspace.feature.codex-optimize-admin.access,chatgpt.workspace.feature.codex-optimize.access,chatgpt.workspace.feature.codex-remote-control.access,chatgpt.workspace.feature.codex-slack-posting.access,chatgpt.workspace.feature.data-export.access,chatgpt.workspace.feature.deep-research.access,chatgpt.workspace.feature.desktop-app-beta-features.access,chatgpt.workspace.feature.desktop-app-chat.access,chatgpt.workspace.feature.dictation.access,chatgpt.workspace.feature.enhanced-citations.access,chatgpt.workspace.feature.feature-release-dashboard-pilot.access,chatgpt.workspace.feature.file-library-auto-reference.access,chatgpt.workspace.feature.findata-company-filings.access,chatgpt.workspace.feature.findata-earnings-calls.access,chatgpt.workspace.feature.findata-financial-metrics.access,chatgpt.workspace.feature.findata-investor-presentations.access,chatgpt.workspace.feature.findata-investor-reports.access,chatgpt.workspace.feature.findata-market-pricing.access,chatgpt.workspace.feature.findata-news.access,chatgpt.workspace.feature.findata-private-company-metrics.access,chatgpt.workspace.feature.finserv.access,chatgpt.workspace.feature.flora-browser-use.access,chatgpt.workspace.feature.flora-local.access,chatgpt.workspace.feature.flora-network-access.access,chatgpt.workspace.feature.flora-teams-use.access,chatgpt.workspace.feature.flora-webhook-automations.access,chatgpt.workspace.feature.flora.access,chatgpt.workspace.feature.hermes.access,chatgpt.workspace.feature.hermes.builder.access,chatgpt.workspace.feature.hermes.publish.access,chatgpt.workspace.feature.hermes.share.access,chatgpt.workspace.feature.hermes.share_personal.access,chatgpt.workspace.feature.hive-knowledge-retrieval.access,chatgpt.workspace.feature.hive.access,chatgpt.workspace.feature.image-gen.access,chatgpt.workspace.feature.improved-memory.access,chatgpt.workspace.feature.legal.access,chatgpt.workspace.feature.legal.management,chatgpt.workspace.feature.library-sharing-management.access,chatgpt.workspace.feature.library-workspace-link-sharing.access,chatgpt.workspace.feature.memory.access,chatgpt.workspace.feature.pedagogy.enabled,chatgpt.workspace.feature.programmatic-agent-identities.access,chatgpt.workspace.feature.programmatic-agent-identities.manage,chatgpt.workspace.feature.search.access,chatgpt.workspace.feature.share-chat-with-workspace.access,chatgpt.workspace.feature.sites.access,chatgpt.workspace.feature.sites.attach_tunnels.access,chatgpt.workspace.feature.sites.invite_external.access,chatgpt.workspace.feature.sites.publish.access,chatgpt.workspace.feature.sites.publish_with_tunnels.access,chatgpt.workspace.feature.u18-model-policy.enabled,chatgpt.workspace.feature.video-screen-sharing.access,chatgpt.workspace.feature.voice.access,chatgpt.workspace.feature.windows-computer-use.access,chatgpt.workspace.feature.work-only-chat-instant.access,chatgpt.workspace.feature.work-only-mode.access,chatgpt.workspace.gpt.allow_all_third_party,chatgpt.workspace.gpt.allow_first_party,chatgpt.workspace.gpt.allow_specific_third_party,chatgpt.workspace.gpt.crud,chatgpt.workspace.gpt.private_publish,chatgpt.workspace.gpt.share_external,chatgpt.workspace.gpt.share_workspace,chatgpt.workspace.member.role.view,chatgpt.workspace.model.GPT-4.1.access,chatgpt.workspace.model.GPT-4.5.access,chatgpt.workspace.model.GPT-5-pro.access,chatgpt.workspace.model.GPT-5-reasoning.access,chatgpt.workspace.model.GPT-5.1.access,chatgpt.workspace.model.early-access,chatgpt.workspace.model.gpt-5.5-cyber-preview.access,chatgpt.workspace.model.o3-pro.access,chatgpt.workspace.model.o4-mini-high.access,chatgpt.workspace.model.o4-mini.access,chatgpt.workspace.plugin.powerpoint,chatgpt.workspace.plugin.spreadsheet,chatgpt.workspace.plugin.word,chatgpt.workspace.project.crud,chatgpt.workspace.project.share,chatgpt.workspace.project.share_workspace,chatgpt.workspace.security.codex-access.allow,chatgpt.workspace.security.codex-admin.allow,chatgpt.workspace.skills.access,chatgpt.workspace.skills.access_share,chatgpt.workspace.skills.create,chatgpt.workspace.skills.share,chatgpt.workspace.skills.share_workspace,chatgpt.workspace.skills.upload,chatgpt.workspace.team.automation.write,chatgpt.workspace.team.create,chatgpt.workspace.team.member.invite,chatgpt.workspace_connector.use,chatgpt.workspace_plugin.use,chatgpt.workspace_plugins.publish,chatgpt.workspace_plugins.share,chatgpt.workspace_plugins.upload,chatgpt.workspace_plugins.upload_with_custom_mcp_servers,chatgpt.workspace_plugins.use`.split(`,`)
    }));

function ce(e) {
    return e !== o.AgentModeAccess && e !== o.DeepResearchAccess
}
var H, U, W, G, K, q, J, Y, X, Z, Q, $, le, ue = e((() => {
    H = d(), F(), te(), C(), ae(), h(), b(), t(), c(), n(), p(), m(), oe(), s(), j(), se(), E(), U = e => typeof e == `object` && !!e && `lockdown_mode` in e && e.lockdown_mode === !0, W = (e, t) => Object.prototype.hasOwnProperty.call(e, t), G = ({
        currentMetadataResource: e,
        requestPatch: t
    }) => {
        let n = e?.metadata ?? null;
        return {
            soft_alert_credit_limit: W(t, `soft_alert_credit_limit`) ? t.soft_alert_credit_limit ?? null : n?.soft_alert_credit_limit ?? null,
            hard_cap_credit_limit: W(t, `hard_cap_credit_limit`) ? t.hard_cap_credit_limit ?? null : n?.hard_cap_credit_limit ?? null,
            hard_cap_shared_credit_limit: W(t, `hard_cap_shared_credit_limit`) ? t.hard_cap_shared_credit_limit ?? null : n?.hard_cap_shared_credit_limit ?? null,
            workspace_system_instruction: W(t, `workspace_system_instruction`) ? t.workspace_system_instruction ?? null : n?.workspace_system_instruction ?? null
        }
    }, K = e => {
        "use forget";
        let t = (0, H.c)(27),
            {
                workspaceId: n,
                bootstrapResources: r,
                inheritDefaultMemberPermissions: s
            } = e,
            c = s !== void 0 && s,
            d = u(),
            p = a(),
            m = l(),
            h;
        t[0] === r ? h = t[1] : (h = r?.includes(`connectors`) ? [o.UseWorkspacePlugins] : [], t[0] = r, t[1] = h);
        let _ = h,
            v;
        t[2] !== r || t[3] !== c || t[4] !== _ || t[5] !== n ? (v = e => i.safePost(`/rbac/workspace/{workspace_id}/roles`, {
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
                bootstrap_resources: r,
                ...c && !U(e.metadata) ? {
                    permissions: [],
                    disallowed_permissions: _,
                    workspace_use_initialization: `inherit`
                } : {}
            }
        }), t[2] = r, t[3] = c, t[4] = _, t[5] = n, t[6] = v) : v = t[6];
        let y;
        t[7] !== c || t[8] !== _ || t[9] !== d || t[10] !== n ? (y = e => {
            let {
                name: t,
                description: r,
                metadata: i
            } = e, a = d.getQueryData([n, `roles`]);
            return a && (d.cancelQueries({
                queryKey: [n, `roles`]
            }), d.setQueryData([n, `roles`], e => e && {
                ...e,
                data: [{
                    id: `new`,
                    name: t,
                    permissions: [],
                    ...c && !U(i) ? {
                        disallowed_permissions: _
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
        }, t[7] = c, t[8] = _, t[9] = d, t[10] = n, t[11] = y) : y = t[11];
        let b;
        t[12] !== m || t[13] !== d || t[14] !== p || t[15] !== n ? (b = (e, t, r) => {
            r?.previousRoles && d.setQueryData([n, `roles`], r.previousRoles), d.invalidateQueries({
                refetchType: `all`,
                queryKey: [n, `roles`]
            }), e.message === `Role with this name already exists.` ? p.warning(m.formatMessage({
                id: `Hn9Qxu`,
                defaultMessage: `Role with this name already exists`
            }), {
                duration: 1
            }) : p.danger(m.formatMessage({
                id: `chatgpt.workspace.permissions.roles.create.toast.unknown_outcome`,
                defaultMessage: `Couldn't confirm whether this role was created. Check the role list before trying again.`
            }), {
                duration: 8
            })
        }, t[12] = m, t[13] = d, t[14] = p, t[15] = n, t[16] = b) : b = t[16];
        let x;
        t[17] !== d || t[18] !== n ? (x = () => {
            d.invalidateQueries({
                refetchType: `all`,
                queryKey: [n, `roles`]
            }), d.invalidateQueries({
                refetchType: `all`,
                queryKey: g(n)
            })
        }, t[17] = d, t[18] = n, t[19] = x) : x = t[19];
        let S;
        t[20] !== v || t[21] !== y || t[22] !== b || t[23] !== x ? (S = {
            mutationFn: v,
            onMutate: y,
            onError: b,
            onSuccess: x
        }, t[20] = v, t[21] = y, t[22] = b, t[23] = x, t[24] = S) : S = t[24];
        let {
            mutateAsync: C
        } = f(S), w;
        return t[25] === C ? w = t[26] : (w = {
            createRole: C
        }, t[25] = C, t[26] = w), w
    }, q = e => {
        "use forget";
        let t = (0, H.c)(10),
            {
                workspaceId: n
            } = e,
            r = u(),
            a;
        t[0] === n ? a = t[1] : (a = async e => await i.safeDelete(`/rbac/workspace/{workspace_id}/roles/{role_id}`, {
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
        t[2] !== r || t[3] !== n ? (o = () => {
            r.invalidateQueries({
                refetchType: `all`,
                queryKey: [n, `roles`]
            }), r.invalidateQueries({
                refetchType: `all`,
                queryKey: g(n)
            })
        }, t[2] = r, t[3] = n, t[4] = o) : o = t[4];
        let s;
        t[5] !== a || t[6] !== o ? (s = {
            mutationFn: a,
            onSuccess: o
        }, t[5] = a, t[6] = o, t[7] = s) : s = t[7];
        let {
            mutateAsync: c
        } = f(s), l;
        return t[8] === c ? l = t[9] : (l = {
            deleteRole: c
        }, t[8] = c, t[9] = l), l
    }, J = e => {
        "use forget";
        let t = (0, H.c)(33),
            {
                workspaceId: n,
                includeDisallowedPermissions: s,
                invalidateModelCatalogsOnAccessChange: c,
                showSuccessToast: d,
                defaultRole: p
            } = e,
            m = s !== void 0 && s,
            h = c === void 0 || c,
            g = d === void 0 || d,
            _ = u(),
            v = a(),
            y = l(),
            b = r()?.isFedrampCompliantWorkspace === !0,
            x;
        t[0] !== m || t[1] !== _ || t[2] !== n ? (x = e => {
            let {
                id: t,
                metadata: r
            } = e, i = r ?? _.getQueryData([n, `role`, t])?.metadata ?? _.getQueryData([n, `roles`])?.data.find(e => e.id === t)?.metadata;
            return m && !U(i) && T({
                id: t,
                predefined_role: !1
            }, n)
        }, t[0] = m, t[1] = _, t[2] = n, t[3] = x) : x = t[3];
        let S = x,
            C;
        t[4] !== p || t[5] !== S || t[6] !== n ? (C = async e => {
            let t = [...e.permissions],
                r = t => {
                    let n = e.originalRole;
                    return n == null || t.some(t => n.permissions.includes(t) !== e.permissions.includes(t) || S(e) && (n.disallowed_permissions?.includes(t) ?? !1) !== (e.disallowed_permissions?.includes(t) ?? !1))
                },
                a = e.defaultRole ?? p,
                s = S(e) && a != null ? M({
                    role: e,
                    defaultRole: a
                }) : t;
            r(V) && !s.includes(o.SearchAccess) && (t = t.filter(ce)), r(B) && !b && (!s.includes(o.GPT5ThinkingAccess) && !s.includes(o.GPT51ReasoningAccess) && !s.includes(o.GPT52ReasoningAccess) || !s.includes(o.ReasoningModelAccess)) && (s.includes(o.GPT5ThinkingMiniAccess) || t.push(o.GPT5ThinkingMiniAccess));
            let c = (e.disallowed_permissions ?? []).filter(e => !t.includes(e));
            return await i.safePatch(`/rbac/workspace/{workspace_id}/roles/{role_id}`, {
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
                    role_name: e.name,
                    description: e.description,
                    permissions: t,
                    ...S(e) ? {
                        disallowed_permissions: c
                    } : {}
                }
            })
        }, t[4] = p, t[5] = S, t[6] = n, t[7] = C) : C = t[7];
        let w;
        t[8] !== _ || t[9] !== S || t[10] !== n ? (w = e => {
            let {
                id: t,
                name: r,
                permissions: i,
                disallowed_permissions: a,
                metadata: o
            } = e, s = _.getQueryData([n, `role`, t]), c = s ?? _.getQueryData([n, `roles`])?.data.find(e => e.id === t);
            return _.setQueryData([n, `role`, t], e => ({
                ...e,
                name: r,
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
        }, t[8] = _, t[9] = S, t[10] = n, t[11] = w) : w = t[11];
        let E;
        t[12] !== y || t[13] !== _ || t[14] !== v || t[15] !== n ? (E = (e, t, r) => {
            _.setQueryData([n, `role`, t.id], r?.previousRole), e.message === `Role with this name already exists.` ? v.warning(y.formatMessage({
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
        }, t[12] = y, t[13] = _, t[14] = v, t[15] = n, t[16] = E) : E = t[16];
        let D;
        t[17] !== p || t[18] !== y || t[19] !== h || t[20] !== _ || t[21] !== g || t[22] !== v || t[23] !== n ? (D = async (e, t, r) => {
            let i = !1,
                a = null,
                o = t.originalRole?.permissions ?? r?.previousRole?.permissions;
            if (o != null && L({
                    previousPermissions: o,
                    nextPermissions: t.permissions
                })) try {
                let e = await ee(n);
                a = await z({
                    workspaceId: n,
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
            a != null && ie({
                queryClient: _,
                workspaceId: n,
                pluginId: a.pluginId,
                settings: a.workspaceSettings
            });
            let s = t.defaultRole ?? p,
                c = s?.id === t.id ? void 0 : s,
                l = (() => {
                    if (r?.previousRoleForModelAccess == null) return !1;
                    let e = M({
                            role: r.previousRoleForModelAccess,
                            defaultRole: c
                        }),
                        n = M({
                            role: {
                                ...t,
                                metadata: t.metadata ?? r.previousRoleForModelAccess.metadata
                            },
                            defaultRole: c
                        });
                    return re.some(t => e.includes(t.permission) !== n.includes(t.permission) && ne(t, {
                        disableExposureLog: !0
                    }))
                })();
            await Promise.all([_.invalidateQueries({
                refetchType: `all`,
                queryKey: [n, `role`, t.id]
            }), _.invalidateQueries({
                refetchType: `all`,
                queryKey: [n, `roles`]
            }), _.invalidateQueries({
                queryKey: [`workspace-settings`, n],
                refetchType: `all`
            }), _.invalidateQueries({
                queryKey: [`gizmos`]
            }), _.invalidateQueries({
                queryKey: [`gizmo`]
            }), ...h && l ? [P(_)] : [], ...a == null ? [] : [_.invalidateQueries({
                queryKey: [n, `admin`, `plugins`],
                refetchType: `all`
            })]]), !i && g && v.success(y.formatMessage({
                id: `L59KWu`,
                defaultMessage: `Successfully updated permission`
            }), {
                duration: 1
            })
        }, t[17] = p, t[18] = y, t[19] = h, t[20] = _, t[21] = g, t[22] = v, t[23] = n, t[24] = D) : D = t[24];
        let O;
        t[25] !== C || t[26] !== w || t[27] !== E || t[28] !== D ? (O = {
            mutationFn: C,
            onMutate: w,
            onError: E,
            onSuccess: D
        }, t[25] = C, t[26] = w, t[27] = E, t[28] = D, t[29] = O) : O = t[29];
        let {
            mutateAsync: k,
            isPending: A
        } = f(O), j;
        return t[30] !== A || t[31] !== k ? (j = {
            updateRole: k,
            isPending: A
        }, t[30] = A, t[31] = k, t[32] = j) : j = t[32], j
    }, Y = e => {
        "use forget";
        let t = (0, H.c)(9),
            {
                workspaceId: n,
                roleId: r
            } = e,
            a = u(),
            o;
        t[0] !== a || t[1] !== n ? (o = {
            mutationFn: async e => {
                let {
                    requestPatch: t,
                    targetRoleId: r
                } = e, o = await i.safeGet(`/rbac/workspace/{workspace_id}/roles/{role_id}/metadata`, {
                    parameters: {
                        query: {
                            account_id: n
                        },
                        path: {
                            workspace_id: n,
                            role_id: r
                        }
                    }
                });
                a.setQueryData(D(n, r), o);
                let s = G({
                    currentMetadataResource: o,
                    requestPatch: t
                });
                return await i.safePut(`/rbac/workspace/{workspace_id}/roles/{role_id}/metadata`, {
                    parameters: {
                        query: {
                            account_id: n
                        },
                        path: {
                            workspace_id: n,
                            role_id: r
                        }
                    },
                    requestBody: s
                })
            },
            onSuccess: (e, t) => {
                let {
                    targetRoleId: r
                } = t;
                a.setQueryData(D(n, r), t => t ? !t.metadata || !e.metadata ? {
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
                    queryKey: D(n, i)
                })
            }
        }, t[0] = a, t[1] = n, t[2] = o) : o = t[2];
        let s = f(o),
            c;
        t[3] !== s || t[4] !== r ? (c = (e, t) => {
            let n = t === void 0 ? r : t;
            return s.mutateAsync({
                requestPatch: e,
                targetRoleId: n
            })
        }, t[3] = s, t[4] = r, t[5] = c) : c = t[5];
        let l;
        return t[6] !== s.isPending || t[7] !== c ? (l = {
            upsertRoleMetadata: c,
            isPending: s.isPending
        }, t[6] = s.isPending, t[7] = c, t[8] = l) : l = t[8], l
    }, X = e => {
        "use forget";
        let t = (0, H.c)(12),
            {
                workspaceId: n,
                roleId: r
            } = e,
            a = u(),
            o;
        t[0] !== r || t[1] !== n ? (o = async e => {
            let {
                id: t
            } = e;
            return await i.safePost(`/rbac/workspace/{workspace_id}/role-assignments`, {
                parameters: {
                    query: {
                        account_id: n
                    },
                    path: {
                        workspace_id: n
                    }
                },
                requestBody: {
                    role_id: r,
                    principal_id: t,
                    principal_type: `group`
                }
            })
        }, t[0] = r, t[1] = n, t[2] = o) : o = t[2];
        let s;
        t[3] !== a || t[4] !== r || t[5] !== n ? (s = (e, t) => {
            let i = [n, r, `role-groups`];
            a.setQueryData(i, e => [...e, {
                id: t.id,
                name: t.name ?? ``,
                num_members: t.num_members ?? 0,
                created_time: new Date().toDateString()
            }]), a.invalidateQueries({
                refetchType: `all`,
                queryKey: i
            })
        }, t[3] = a, t[4] = r, t[5] = n, t[6] = s) : s = t[6];
        let c;
        t[7] !== o || t[8] !== s ? (c = {
            mutationFn: o,
            onSuccess: s
        }, t[7] = o, t[8] = s, t[9] = c) : c = t[9];
        let {
            mutateAsync: l
        } = f(c), d;
        return t[10] === l ? d = t[11] : (d = {
            assignGroup: l
        }, t[10] = l, t[11] = d), d
    }, Z = e => {
        "use forget";
        let t = (0, H.c)(12),
            {
                workspaceId: n,
                roleId: r
            } = e,
            a = u(),
            o;
        t[0] !== r || t[1] !== n ? (o = async e => await i.safeDelete(`/rbac/workspace/{workspace_id}/role-assignments`, {
            parameters: {
                query: {
                    account_id: n,
                    role_id: r,
                    principal_id: e,
                    principal_type: `group`
                },
                path: {
                    workspace_id: n
                }
            }
        }), t[0] = r, t[1] = n, t[2] = o) : o = t[2];
        let s;
        t[3] !== a || t[4] !== r || t[5] !== n ? (s = (e, t) => {
            let i = [n, r, `role-groups`];
            a.setQueryData(i, e => e ? e.filter(e => e.id !== t) : []), a.invalidateQueries({
                refetchType: `all`,
                queryKey: i
            })
        }, t[3] = a, t[4] = r, t[5] = n, t[6] = s) : s = t[6];
        let c;
        t[7] !== o || t[8] !== s ? (c = {
            mutationFn: o,
            onSuccess: s
        }, t[7] = o, t[8] = s, t[9] = c) : c = t[9];
        let {
            mutateAsync: l
        } = f(c), d;
        return t[10] === l ? d = t[11] : (d = {
            unassignGroup: l
        }, t[10] = l, t[11] = d), d
    }, Q = e => [e, `update-connector-role-permissions`], $ = e => {
        "use forget";
        let t = (0, H.c)(27),
            {
                workspaceId: n,
                connectorId: r,
                showToast: o
            } = e,
            s = o === void 0 || o,
            c = u(),
            d = a(),
            p = l(),
            m;
        t[0] === n ? m = t[1] : (m = Q(n), t[0] = n, t[1] = m);
        let h;
        t[2] !== r || t[3] !== n ? (h = async e => await i.safePatch(`/rbac/workspace/{workspace_id}/roles/{role_id}/connectors/{connector_id}`, {
            parameters: {
                query: {
                    account_id: n
                },
                path: {
                    workspace_id: n,
                    role_id: e.roleId,
                    connector_id: r
                }
            },
            requestBody: {
                permissions: e.permissions
            }
        }), t[2] = r, t[3] = n, t[4] = h) : h = t[4];
        let v;
        t[5] !== r || t[6] !== c || t[7] !== n ? (v = e => {
            let {
                roleId: t,
                permissions: i
            } = e;
            c.cancelQueries({
                queryKey: _(n, r)
            }), c.cancelQueries({
                queryKey: g(n, t)
            }), c.cancelQueries({
                queryKey: S(n, r, t)
            });
            let a = c.getQueryData(_(n, r));
            return c.setQueryData(_(n, r), e => ({
                ...e,
                roles_with_permissions: e?.roles_with_permissions?.map(e => e.role.id === t ? {
                    ...e,
                    connector_permissions: i
                } : e)
            })), {
                previousRoles: a
            }
        }, t[5] = r, t[6] = c, t[7] = n, t[8] = v) : v = t[8];
        let y, b;
        t[9] !== r || t[10] !== p || t[11] !== c || t[12] !== s || t[13] !== d || t[14] !== n ? (y = (e, t, i) => {
            c.setQueryData(_(n, r), i?.previousRoles), s && d.danger(p.formatMessage({
                id: `ezIZZO`,
                defaultMessage: `Failed to update permission`
            }), {
                duration: 1
            })
        }, b = async (e, t) => {
            await Promise.all([c.invalidateQueries({
                refetchType: `all`,
                queryKey: [n, `role`, t.roleId]
            }), c.invalidateQueries({
                refetchType: `all`,
                queryKey: [n, `roles`]
            }), c.invalidateQueries({
                refetchType: `all`,
                queryKey: _(n, r)
            }), c.invalidateQueries({
                refetchType: `all`,
                queryKey: g(n, t.roleId)
            }), c.invalidateQueries({
                refetchType: `all`,
                queryKey: S(n, r, t.roleId)
            })]), s && d.success(p.formatMessage({
                id: `L59KWu`,
                defaultMessage: `Successfully updated permission`
            }), {
                duration: 1
            })
        }, t[9] = r, t[10] = p, t[11] = c, t[12] = s, t[13] = d, t[14] = n, t[15] = y, t[16] = b) : (y = t[15], b = t[16]);
        let x;
        t[17] !== m || t[18] !== h || t[19] !== v || t[20] !== y || t[21] !== b ? (x = {
            mutationKey: m,
            mutationFn: h,
            onMutate: v,
            onError: y,
            onSuccess: b
        }, t[17] = m, t[18] = h, t[19] = v, t[20] = y, t[21] = b, t[22] = x) : x = t[22];
        let {
            mutateAsync: C,
            isPending: w,
            variables: T
        } = f(x), E;
        return t[23] !== w || t[24] !== C || t[25] !== T ? (E = {
            updateConnectorRolePermission: C,
            isPending: w,
            variables: T
        }, t[23] = w, t[24] = C, t[25] = T, t[26] = E) : E = t[26], E
    }, le = e => {
        "use forget";
        let t = (0, H.c)(21),
            {
                workspaceId: n,
                showToast: r
            } = e,
            o = r === void 0 || r,
            s = a(),
            c = l(),
            d = u(),
            p = v(),
            m;
        t[0] === n ? m = t[1] : (m = async e => await i.safePatch(`/rbac/workspace/{workspace_id}/roles/{role_id}/connectors`, {
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
        }), t[0] = n, t[1] = m);
        let h;
        t[2] !== c || t[3] !== o || t[4] !== s ? (h = () => {
            o && s.danger(c.formatMessage({
                id: `ezIZZO`,
                defaultMessage: `Failed to update permission`
            }), {
                duration: 1
            })
        }, t[2] = c, t[3] = o, t[4] = s, t[5] = h) : h = t[5];
        let _;
        t[6] !== c || t[7] !== p || t[8] !== d || t[9] !== o || t[10] !== s || t[11] !== n ? (_ = async (e, t) => {
            await Promise.all([d.invalidateQueries({
                refetchType: `all`,
                queryKey: g(n, t.id)
            }), d.invalidateQueries({
                refetchType: `all`,
                queryKey: [n, `role`, t.id]
            }), d.invalidateQueries({
                queryKey: [n, `roles`]
            })]), d.invalidateQueries({
                refetchType: `all`,
                queryKey: [`permissions`, n]
            }), p(), o && s.success(c.formatMessage({
                id: `L59KWu`,
                defaultMessage: `Successfully updated permission`
            }), {
                duration: 1
            })
        }, t[6] = c, t[7] = p, t[8] = d, t[9] = o, t[10] = s, t[11] = n, t[12] = _) : _ = t[12];
        let y;
        t[13] !== m || t[14] !== h || t[15] !== _ ? (y = {
            mutationFn: m,
            onError: h,
            onSuccess: _
        }, t[13] = m, t[14] = h, t[15] = _, t[16] = y) : y = t[16];
        let {
            mutateAsync: b,
            isPending: x,
            variables: S
        } = f(y), C;
        return t[17] !== x || t[18] !== b || t[19] !== S ? (C = {
            toggleAllConnectorsPermissionForRole: b,
            isPending: x,
            variables: S
        }, t[17] = x, t[18] = b, t[19] = S, t[20] = C) : C = t[20], C
    }
}));
export {
    K as a, Z as c, Y as d, F as f, X as i, $ as l, Q as n, q as o, P as p, ue as r, le as s, G as t, J as u
};
//# sourceMappingURL=b411f8ca-mdbrjndtyvp18nze.js.map