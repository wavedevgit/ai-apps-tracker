import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    IG as t,
    LG as n,
    a7 as r,
    hU as i,
    l7 as a,
    o1 as o,
    pU as s,
    u1 as c
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    N as l,
    Rn as u,
    p as d,
    s as f,
    wn as p,
    zn as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    ICn as h,
    MPn as g,
    NQ as _,
    SPn as v,
    TPn as y,
    VCn as b,
    jPn as x,
    zQ as S
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Ib as C,
    Nb as w,
    Pb as T,
    cy as E,
    dy as D,
    fy as ee
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    h as O,
    w as k,
    y as A
} from "./b26e60ff-md253wx0ie8rb93v.js";
import {
    i as j,
    t as M
} from "./74bc827c-gcx6g1r7qy0xkkjp.js";
import {
    d as te,
    f as ne,
    r as re
} from "./03a3ce2c-j7wzxjqo40snjirc.js";
import {
    a as ie,
    n as ae
} from "./63f6a4cc-m1zithitonrh3vsl.js";
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
        b(), A(), n(), E(), I = `chatgpt-for-finance`, L = ({
            previousPermissions: e,
            nextPermissions: n
        }) => e.includes(t.FinServAccess) !== n.includes(t.FinServAccess), R = e => {
            let n = e.filter(e => e.permissions.includes(t.FinServAccess)).map(e => e.id);
            return n.length === 0 ? O({
                mode: `available`
            }) : e.every(D) ? O({
                mode: `installed_by_default`
            }) : O({
                mode: `custom_by_group`,
                installedByDefaultRoleIds: n
            })
        }, z = async ({
            workspaceId: e,
            roles: t
        }) => {
            let n = (await h({
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
    return e !== t.AgentModeAccess && e !== t.DeepResearchAccess
}
var H, U, W, G, K, q, J, Y, X, Z, Q, $, le, ue = e((() => {
    H = p(), F(), te(), C(), ae(), _(), g(), c(), s(), a(), f(), u(), oe(), n(), j(), se(), E(), U = e => typeof e == `object` && !!e && `lockdown_mode` in e && e.lockdown_mode === !0, W = (e, t) => Object.prototype.hasOwnProperty.call(e, t), G = ({
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
        let n = (0, H.c)(27),
            {
                workspaceId: a,
                bootstrapResources: o,
                inheritDefaultMemberPermissions: s
            } = e,
            c = s !== void 0 && s,
            u = l(),
            f = i(),
            p = m(),
            h;
        n[0] === o ? h = n[1] : (h = o?.includes(`connectors`) ? [t.UseWorkspacePlugins] : [], n[0] = o, n[1] = h);
        let g = h,
            _;
        n[2] !== o || n[3] !== c || n[4] !== g || n[5] !== a ? (_ = e => r.safePost(`/rbac/workspace/{workspace_id}/roles`, {
            parameters: {
                query: {
                    account_id: a
                },
                path: {
                    workspace_id: a
                }
            },
            requestBody: {
                role_name: e.name,
                description: e.description,
                lockdown_mode: e.metadata?.lockdown_mode,
                bootstrap_resources: o,
                ...c && !U(e.metadata) ? {
                    permissions: [],
                    disallowed_permissions: g,
                    workspace_use_initialization: `inherit`
                } : {}
            }
        }), n[2] = o, n[3] = c, n[4] = g, n[5] = a, n[6] = _) : _ = n[6];
        let v;
        n[7] !== c || n[8] !== g || n[9] !== u || n[10] !== a ? (v = e => {
            let {
                name: t,
                description: n,
                metadata: r
            } = e, i = u.getQueryData([a, `roles`]);
            return i && (u.cancelQueries({
                queryKey: [a, `roles`]
            }), u.setQueryData([a, `roles`], e => e && {
                ...e,
                data: [{
                    id: `new`,
                    name: t,
                    permissions: [],
                    ...c && !U(r) ? {
                        disallowed_permissions: g
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
                previousRoles: i
            }
        }, n[7] = c, n[8] = g, n[9] = u, n[10] = a, n[11] = v) : v = n[11];
        let b;
        n[12] !== p || n[13] !== u || n[14] !== f || n[15] !== a ? (b = (e, t, n) => {
            n?.previousRoles && u.setQueryData([a, `roles`], n.previousRoles), u.invalidateQueries({
                refetchType: `all`,
                queryKey: [a, `roles`]
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
        }, n[12] = p, n[13] = u, n[14] = f, n[15] = a, n[16] = b) : b = n[16];
        let x;
        n[17] !== u || n[18] !== a ? (x = () => {
            u.invalidateQueries({
                refetchType: `all`,
                queryKey: [a, `roles`]
            }), u.invalidateQueries({
                refetchType: `all`,
                queryKey: y(a)
            })
        }, n[17] = u, n[18] = a, n[19] = x) : x = n[19];
        let S;
        n[20] !== _ || n[21] !== v || n[22] !== b || n[23] !== x ? (S = {
            mutationFn: _,
            onMutate: v,
            onError: b,
            onSuccess: x
        }, n[20] = _, n[21] = v, n[22] = b, n[23] = x, n[24] = S) : S = n[24];
        let {
            mutateAsync: C
        } = d(S), w;
        return n[25] === C ? w = n[26] : (w = {
            createRole: C
        }, n[25] = C, n[26] = w), w
    }, q = e => {
        "use forget";
        let t = (0, H.c)(10),
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
                queryKey: y(n)
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
    }, J = e => {
        "use forget";
        let n = (0, H.c)(33),
            {
                workspaceId: a,
                includeDisallowedPermissions: s,
                invalidateModelCatalogsOnAccessChange: c,
                showSuccessToast: u,
                defaultRole: f
            } = e,
            p = s !== void 0 && s,
            h = c === void 0 || c,
            g = u === void 0 || u,
            _ = l(),
            v = i(),
            y = m(),
            b = o()?.isFedrampCompliantWorkspace === !0,
            x;
        n[0] !== p || n[1] !== _ || n[2] !== a ? (x = e => {
            let {
                id: t,
                metadata: n
            } = e, r = n ?? _.getQueryData([a, `role`, t])?.metadata ?? _.getQueryData([a, `roles`])?.data.find(e => e.id === t)?.metadata;
            return p && !U(r) && ee({
                id: t,
                predefined_role: !1
            }, a)
        }, n[0] = p, n[1] = _, n[2] = a, n[3] = x) : x = n[3];
        let S = x,
            C;
        n[4] !== f || n[5] !== S || n[6] !== a ? (C = async e => {
            let n = [...e.permissions],
                i = t => {
                    let n = e.originalRole;
                    return n == null || t.some(t => n.permissions.includes(t) !== e.permissions.includes(t) || S(e) && (n.disallowed_permissions?.includes(t) ?? !1) !== (e.disallowed_permissions?.includes(t) ?? !1))
                },
                o = e.defaultRole ?? f,
                s = S(e) && o != null ? M({
                    role: e,
                    defaultRole: o
                }) : n;
            i(V) && !s.includes(t.SearchAccess) && (n = n.filter(ce)), i(B) && !b && (!s.includes(t.GPT5ThinkingAccess) && !s.includes(t.GPT51ReasoningAccess) && !s.includes(t.GPT52ReasoningAccess) || !s.includes(t.ReasoningModelAccess)) && (s.includes(t.GPT5ThinkingMiniAccess) || n.push(t.GPT5ThinkingMiniAccess));
            let c = (e.disallowed_permissions ?? []).filter(e => !n.includes(e));
            return await r.safePatch(`/rbac/workspace/{workspace_id}/roles/{role_id}`, {
                parameters: {
                    query: {
                        account_id: a
                    },
                    path: {
                        workspace_id: a,
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
        }, n[4] = f, n[5] = S, n[6] = a, n[7] = C) : C = n[7];
        let T;
        n[8] !== _ || n[9] !== S || n[10] !== a ? (T = e => {
            let {
                id: t,
                name: n,
                permissions: r,
                disallowed_permissions: i,
                metadata: o
            } = e, s = _.getQueryData([a, `role`, t]), c = s ?? _.getQueryData([a, `roles`])?.data.find(e => e.id === t);
            return _.setQueryData([a, `role`, t], e => ({
                ...e,
                name: n,
                permissions: r,
                ...S({
                    id: t,
                    metadata: o
                }) ? {
                    disallowed_permissions: (i ?? []).filter(e => !r.includes(e))
                } : {}
            })), {
                previousRole: s,
                previousRoleForModelAccess: c
            }
        }, n[8] = _, n[9] = S, n[10] = a, n[11] = T) : T = n[11];
        let E;
        n[12] !== y || n[13] !== _ || n[14] !== v || n[15] !== a ? (E = (e, t, n) => {
            _.setQueryData([a, `role`, t.id], n?.previousRole), e.message === `Role with this name already exists.` ? v.warning(y.formatMessage({
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
        }, n[12] = y, n[13] = _, n[14] = v, n[15] = a, n[16] = E) : E = n[16];
        let D;
        n[17] !== f || n[18] !== y || n[19] !== h || n[20] !== _ || n[21] !== g || n[22] !== v || n[23] !== a ? (D = async (e, t, n) => {
            let r = !1,
                i = null,
                o = t.originalRole?.permissions ?? n?.previousRole?.permissions;
            if (o != null && L({
                    previousPermissions: o,
                    nextPermissions: t.permissions
                })) try {
                let e = await w(a);
                i = await z({
                    workspaceId: a,
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
            i != null && ie({
                queryClient: _,
                workspaceId: a,
                pluginId: i.pluginId,
                settings: i.workspaceSettings
            });
            let s = t.defaultRole ?? f,
                c = s?.id === t.id ? void 0 : s,
                l = (() => {
                    if (n?.previousRoleForModelAccess == null) return !1;
                    let e = M({
                            role: n.previousRoleForModelAccess,
                            defaultRole: c
                        }),
                        r = M({
                            role: {
                                ...t,
                                metadata: t.metadata ?? n.previousRoleForModelAccess.metadata
                            },
                            defaultRole: c
                        });
                    return re.some(t => e.includes(t.permission) !== r.includes(t.permission) && ne(t, {
                        disableExposureLog: !0
                    }))
                })();
            await Promise.all([_.invalidateQueries({
                refetchType: `all`,
                queryKey: [a, `role`, t.id]
            }), _.invalidateQueries({
                refetchType: `all`,
                queryKey: [a, `roles`]
            }), _.invalidateQueries({
                queryKey: [`workspace-settings`, a],
                refetchType: `all`
            }), _.invalidateQueries({
                queryKey: [`gizmos`]
            }), _.invalidateQueries({
                queryKey: [`gizmo`]
            }), ...h && l ? [P(_)] : [], ...i == null ? [] : [_.invalidateQueries({
                queryKey: [a, `admin`, `plugins`],
                refetchType: `all`
            })]]), !r && g && v.success(y.formatMessage({
                id: `L59KWu`,
                defaultMessage: `Successfully updated permission`
            }), {
                duration: 1
            })
        }, n[17] = f, n[18] = y, n[19] = h, n[20] = _, n[21] = g, n[22] = v, n[23] = a, n[24] = D) : D = n[24];
        let O;
        n[25] !== C || n[26] !== T || n[27] !== E || n[28] !== D ? (O = {
            mutationFn: C,
            onMutate: T,
            onError: E,
            onSuccess: D
        }, n[25] = C, n[26] = T, n[27] = E, n[28] = D, n[29] = O) : O = n[29];
        let {
            mutateAsync: k,
            isPending: A
        } = d(O), j;
        return n[30] !== A || n[31] !== k ? (j = {
            updateRole: k,
            isPending: A
        }, n[30] = A, n[31] = k, n[32] = j) : j = n[32], j
    }, Y = e => {
        "use forget";
        let t = (0, H.c)(9),
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
                a.setQueryData(T(n, i), o);
                let s = G({
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
                a.setQueryData(T(n, r), t => t ? !t.metadata || !e.metadata ? {
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
                    queryKey: T(n, i)
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
    }, X = e => {
        "use forget";
        let t = (0, H.c)(12),
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
    }, Z = e => {
        "use forget";
        let t = (0, H.c)(12),
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
    }, Q = e => [e, `update-connector-role-permissions`], $ = e => {
        "use forget";
        let t = (0, H.c)(27),
            {
                workspaceId: n,
                connectorId: a,
                showToast: o
            } = e,
            s = o === void 0 || o,
            c = l(),
            u = i(),
            f = m(),
            p;
        t[0] === n ? p = t[1] : (p = Q(n), t[0] = n, t[1] = p);
        let h;
        t[2] !== a || t[3] !== n ? (h = async e => await r.safePatch(`/rbac/workspace/{workspace_id}/roles/{role_id}/connectors/{connector_id}`, {
            parameters: {
                query: {
                    account_id: n
                },
                path: {
                    workspace_id: n,
                    role_id: e.roleId,
                    connector_id: a
                }
            },
            requestBody: {
                permissions: e.permissions
            }
        }), t[2] = a, t[3] = n, t[4] = h) : h = t[4];
        let g;
        t[5] !== a || t[6] !== c || t[7] !== n ? (g = e => {
            let {
                roleId: t,
                permissions: r
            } = e;
            c.cancelQueries({
                queryKey: x(n, a)
            }), c.cancelQueries({
                queryKey: y(n, t)
            }), c.cancelQueries({
                queryKey: v(n, a, t)
            });
            let i = c.getQueryData(x(n, a));
            return c.setQueryData(x(n, a), e => ({
                ...e,
                roles_with_permissions: e?.roles_with_permissions?.map(e => e.role.id === t ? {
                    ...e,
                    connector_permissions: r
                } : e)
            })), {
                previousRoles: i
            }
        }, t[5] = a, t[6] = c, t[7] = n, t[8] = g) : g = t[8];
        let _, b;
        t[9] !== a || t[10] !== f || t[11] !== c || t[12] !== s || t[13] !== u || t[14] !== n ? (_ = (e, t, r) => {
            c.setQueryData(x(n, a), r?.previousRoles), s && u.danger(f.formatMessage({
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
                queryKey: x(n, a)
            }), c.invalidateQueries({
                refetchType: `all`,
                queryKey: y(n, t.roleId)
            }), c.invalidateQueries({
                refetchType: `all`,
                queryKey: v(n, a, t.roleId)
            })]), s && u.success(f.formatMessage({
                id: `L59KWu`,
                defaultMessage: `Successfully updated permission`
            }), {
                duration: 1
            })
        }, t[9] = a, t[10] = f, t[11] = c, t[12] = s, t[13] = u, t[14] = n, t[15] = _, t[16] = b) : (_ = t[15], b = t[16]);
        let S;
        t[17] !== p || t[18] !== h || t[19] !== g || t[20] !== _ || t[21] !== b ? (S = {
            mutationKey: p,
            mutationFn: h,
            onMutate: g,
            onError: _,
            onSuccess: b
        }, t[17] = p, t[18] = h, t[19] = g, t[20] = _, t[21] = b, t[22] = S) : S = t[22];
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
        let t = (0, H.c)(21),
            {
                workspaceId: n,
                showToast: a
            } = e,
            o = a === void 0 || a,
            s = i(),
            c = m(),
            u = l(),
            f = S(),
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
                queryKey: y(n, t.id)
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
        let _;
        t[13] !== p || t[14] !== h || t[15] !== g ? (_ = {
            mutationFn: p,
            onError: h,
            onSuccess: g
        }, t[13] = p, t[14] = h, t[15] = g, t[16] = _) : _ = t[16];
        let {
            mutateAsync: v,
            isPending: b,
            variables: x
        } = d(_), C;
        return t[17] !== b || t[18] !== v || t[19] !== x ? (C = {
            toggleAllConnectorsPermissionForRole: v,
            isPending: b,
            variables: x
        }, t[17] = b, t[18] = v, t[19] = x, t[20] = C) : C = t[20], C
    }
}));
export {
    K as a, Z as c, Y as d, F as f, X as i, $ as l, Q as n, q as o, P as p, ue as r, le as s, G as t, J as u
};
//# sourceMappingURL=b411f8ca-gxdzxq28yv3oaqos.js.map