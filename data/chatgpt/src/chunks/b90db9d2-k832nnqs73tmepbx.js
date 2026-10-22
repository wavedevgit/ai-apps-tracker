import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Pst as r,
    Qy as i,
    XX as a,
    ZX as o,
    Zy as s,
    _6 as c,
    _ct as l,
    c6 as u,
    d6 as d,
    eE as f,
    grt as p,
    l7 as m,
    oK as h,
    prt as g,
    sK as _,
    u6 as ee,
    u7 as v,
    urt as y,
    xct as te,
    y6 as b
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as x,
    Ln as S,
    Nn as C,
    Q as w,
    Rn as T,
    Vn as E,
    it as ne,
    wn as re,
    zn as ie
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    ASn as ae,
    BWn as oe,
    DSn as se,
    SUn as ce,
    VWn as D,
    xUn as O
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    DC as le,
    EC as ue
} from "./30901919-lc79rizhhepnsl3q.js";
import {
    _x as de,
    gb as fe,
    hb as pe
} from "./c2675c8c-f8x469cgefxzeo6l.js";
import {
    a as me,
    c as he,
    d as ge,
    f as _e,
    h as ve,
    i as ye,
    l as k,
    m as be,
    n as xe,
    o as Se,
    p as Ce,
    r as we,
    s as Te,
    t as Ee,
    u as De
} from "./4ed85438-jd5fm41itdudchpm.js";
import {
    d as Oe,
    m as ke,
    o as Ae,
    u as je
} from "./03a3ce2c-op7lrvyryvl04m48.js";
var Me, Ne, Pe = e((() => {
        _(), T(), Me = S({
            title: {
                id: `chatgpt.workspace.permissions.cme.title`,
                defaultMessage: `Continuing medical education (CME)`
            },
            access: {
                id: `chatgpt.workspace.permissions.cme.access.label`,
                defaultMessage: `Automatic CME tracking`
            },
            description: {
                id: `chatgpt.workspace.permissions.cme.access.description`,
                defaultMessage: `Allow eligible conversations to be automatically identified for CME credit.`
            }
        }), Ne = () => ({
            title: Me.title,
            entries: [{
                rbac: !0,
                title: Me.access,
                description: Me.description,
                permissionName: h.CmeAccess
            }]
        })
    })),
    A, Fe, Ie, Le = e((() => {
        _(), T(), A = S({
            codexOptimizeTitle: {
                id: `chatgpt.workspace.permissions.codex_optimize.title`,
                defaultMessage: `Use Codex Optimize`
            },
            codexOptimizeDescription: {
                id: `chatgpt.workspace.permissions.codex_optimize.description`,
                defaultMessage: `Create and manage your optimization jobs with Codex Optimize.`
            },
            codexOptimizeAdminTitle: {
                id: `chatgpt.workspace.permissions.codex_optimize_admin.title`,
                defaultMessage: `Administer Codex Optimize`
            },
            codexOptimizeAdminDescription: {
                id: `chatgpt.workspace.permissions.codex_optimize_admin.description`,
                defaultMessage: `Administer Codex Optimize in the workspace.`
            }
        }), Fe = () => ({
            rbac: !0,
            title: A.codexOptimizeTitle,
            description: A.codexOptimizeDescription,
            permissionName: h.CodexOptimizeAccess
        }), Ie = () => ({
            rbac: !0,
            title: A.codexOptimizeAdminTitle,
            description: A.codexOptimizeAdminDescription,
            permissionName: h.CodexOptimizeAdminAccess
        })
    })),
    j, Re, ze, Be = e((() => {
        T(), _(), j = S({
            accessTitle: {
                id: `chatgpt.workspace.permissions.computer_history.access.title`,
                defaultMessage: `Enable Computer History`
            },
            accessDescription: {
                id: `chatgpt.workspace.permissions.computer_history.access.description`,
                defaultMessage: `Allow members to turn on Computer History.`
            }
        }), Re = {
            rbac: !0,
            title: j.accessTitle,
            description: j.accessDescription,
            permissionName: h.AllowComputerHistory,
            dependsOnPermissionName: h.AllowCodexLocalAccess
        }, ze = {
            rbac: !1,
            title: j.accessTitle,
            description: j.accessDescription,
            settingName: `allow_computer_history`
        }
    })),
    Ve, M, He, Ue = e((() => {
        T(), Ve = `chatgpt.workspace.contextlayer.admin`, M = S({
            contextLayerTitle: {
                id: `chatgpt.workspace.permissions.context_layer.section.title`,
                defaultMessage: `Context Layer`
            },
            contextLayerAdminTitle: {
                id: `chatgpt.workspace.permissions.context_layer.admin.label`,
                defaultMessage: `Administer Context Layer`
            },
            contextLayerAdminDescription: {
                id: `chatgpt.workspace.permissions.context_layer.admin.description`,
                defaultMessage: `Allow members to manage Context Layer spaces, access, and catalog selections.`
            }
        }), He = () => ({
            title: M.contextLayerTitle,
            entries: [{
                rbac: !0,
                title: M.contextLayerAdminTitle,
                description: M.contextLayerAdminDescription,
                permissionName: Ve
            }]
        })
    })),
    N, We, P = e((() => {
        _(), T(), N = S({
            sectionTitle: {
                id: `chatgpt.workspace.permissions.teams.section.title`,
                defaultMessage: `Teams`
            },
            createTitle: {
                id: `chatgpt.workspace.permissions.teams.create.label`,
                defaultMessage: `Create teams`
            },
            createDescription: {
                id: `chatgpt.workspace.permissions.teams.create.help_text`,
                defaultMessage: `Let members create teams in this workspace.`
            },
            inviteTitle: {
                id: `chatgpt.workspace.permissions.teams.add_members.label`,
                defaultMessage: `Add members to teams`
            },
            inviteDescription: {
                id: `chatgpt.workspace.permissions.teams.add_members.help_text`,
                defaultMessage: `Let members add people from this workspace to teams where they have permission to add members.`
            },
            automationWriteTitle: {
                id: `chatgpt.workspace.permissions.teams.automations.write.label`,
                defaultMessage: `Create and update team automations`
            },
            automationWriteDescription: {
                id: `chatgpt.workspace.permissions.teams.automations.write.help_text`,
                defaultMessage: `Let members create and update team automations where they have access.`
            }
        }), We = () => ({
            title: N.sectionTitle,
            entries: [{
                rbac: !0,
                title: N.createTitle,
                description: N.createDescription,
                permissionName: h.TeamCreate
            }, {
                rbac: !0,
                title: N.inviteTitle,
                description: N.inviteDescription,
                permissionName: h.TeamMemberInvite
            }, {
                rbac: !0,
                title: N.automationWriteTitle,
                description: N.automationWriteDescription,
                permissionName: h.TeamAutomationWrite
            }]
        })
    }));

function Ge({
    enabled: e
}) {
    return e ? [{
        title: F.title,
        description: F.description,
        entries: [{
            rbac: !0,
            title: F.chartGPTTitle,
            description: F.chartGPTDescription,
            permissionName: h.ChartGPTAccess,
            permissionNamesToRemoveWhenDisabled: [h.PreventChartGPTContinuation]
        }, {
            rbac: !0,
            title: F.preventContinuationTitle,
            description: F.preventContinuationDescription,
            permissionName: h.PreventChartGPTContinuation,
            dependsOnPermissionName: h.ChartGPTAccess
        }]
    }] : []
}
var F, I = e((() => {
    _(), T(), F = S({
        title: {
            id: `chatgpt.workspace.permissions.ehr_integrations.title`,
            defaultMessage: `EHR Integrations`
        },
        description: {
            id: `chatgpt.workspace.permissions.ehr_integrations.description`,
            defaultMessage: `Manage access to ChartGPT.`
        },
        chartGPTTitle: {
            id: `chatgpt.workspace.permissions.ehr_integrations.chartgpt.title`,
            defaultMessage: `Use ChartGPT`
        },
        chartGPTDescription: {
            id: `chatgpt.workspace.permissions.ehr_integrations.chartgpt.description`,
            defaultMessage: `Allow members to use ChartGPT.`
        },
        preventContinuationTitle: {
            id: `chatgpt.workspace.permissions.ehr_integrations.prevent_continuation.title`,
            defaultMessage: `Keep Epic Plugin conversations only in ChartGPT`
        },
        preventContinuationDescription: {
            id: `chatgpt.workspace.permissions.ehr_integrations.prevent_continuation.ehr_only_description`,
            defaultMessage: `Hide ChartGPT chats and block Epic Plugin use in ChatGPT. Members can still use ChartGPT within their EHR when access is enabled.`
        }
    })
}));

function L(e, t, n, r, i, a) {
    return {
        title: e,
        infoTooltip: t,
        category: n,
        hierarchy: r,
        order: i,
        ...a ? {
            badge: a
        } : {}
    }
}

function Ke() {
    return {
        rbac: !0,
        title: z.sitesPublicPublishingTitle,
        description: z.sitesPublicPublishingTooltip,
        permissionName: h.SitesPublishAccess,
        dependsOnPermissionName: h.SitesAccess,
        permissionNamesToRemoveWhenDisabled: [h.SitesPublishWithTunnelsAccess]
    }
}

function qe(e) {
    let t = ut.get(e);
    if (t != null && e === h.SitesAccess && y(`3668740402`)) return {
        ...t,
        badge: void 0
    };
    if (t != null && (e === h.CodexSecurityAccess || e === h.CodexSecurityAdminAccess) && y(`870690999`)) {
        let n = e === h.CodexSecurityAdminAccess;
        return {
            ...t,
            title: n ? z.defenseFactoryAdminTitle : z.defenseFactoryTitle,
            infoTooltip: n ? z.defenseFactoryAdminTooltip : z.defenseFactoryTooltip
        }
    }
    return t != null && e === h.WorkOnlyMode ? {
        ...t,
        infoTooltip: me()
    } : t
}

function Je(e) {
    return qe(e) ?? dt.get(e)
}

function Ye(e) {
    let t = qe(e.permissionName);
    return t != null && e.fedrampAppsOnlyCopy === !0 ? {
        ...t,
        title: e.title,
        infoTooltip: e.description ?? t.infoTooltip
    } : t != null && e.fedrampCodexLocalCopy === !0 ? {
        ...t,
        title: e.title,
        infoTooltip: typeof e.title == `string` ? t.infoTooltip : e.title
    } : t == null || e.permissionName !== h.AllowCodexLocalAccess || e.codexLocalOnly !== !1 ? t : {
        ...t,
        title: e.title,
        infoTooltip: e.description ?? t.infoTooltip
    }
}

function Xe(e) {
    return ht.get(e)
}

function Ze() {
    return {
        rbac: !0,
        title: z.codexManageEnvironmentsTitle,
        description: z.codexManageEnvironmentsTooltip,
        permissionName: h.CodexManageWorkspaceEnvironments,
        dependsOnPermissionName: h.AllowCodexAccess
    }
}
var Qe, $e, et, R, z, B, V, tt, nt, rt, it, at, ot, st, ct, lt, ut, dt, H, U, ft, W, pt, G, mt, K, ht, gt = e((() => {
        Ce(), Be(), Ue(), _(), P(), Te(), p(), T(), I(), Qe = [`Early access`, `Financial services`, `ChartGPT - EHR Integrations`, `Legal`, `Chat`, `Chat extensions`, `Chat models`, `Work`, `Codex`, `Platform Capabilities`, `Usage limits`], $e = `__july30_work_parent__`, et = S({
            earlyAccess: {
                id: `chatgpt.workspace.permissions.july30_redesign.section.early_access`,
                defaultMessage: `Admin preview`
            },
            platformCapabilities: {
                id: `chatgpt.workspace.permissions.july30_redesign.section.workspace_capabilities`,
                defaultMessage: `Workspace capabilities`
            },
            usageLimits: {
                id: `chatgpt.workspace.permissions.july30_redesign.section.usage_limits`,
                defaultMessage: `Usage limits`
            },
            chat: {
                id: `chatgpt.workspace.permissions.july30_redesign.section.chat`,
                defaultMessage: `Chat`
            },
            chatExtensions: {
                id: `chatgpt.workspace.permissions.july30_redesign.section.chat_extensions`,
                defaultMessage: `Chat extensions`
            },
            chatModels: {
                id: `chatgpt.workspace.permissions.july30_redesign.section.chat_models`,
                defaultMessage: `Chat models`
            },
            work: {
                id: `chatgpt.workspace.permissions.july30_redesign.section.work`,
                defaultMessage: `Work`
            },
            financialServices: {
                id: `chatgpt.workspace.permissions.financial_services.category.title`,
                defaultMessage: `Financial services`
            },
            legal: {
                id: `chatgpt.workspace.permissions.legal.category.title`,
                defaultMessage: `Legal`
            },
            codex: {
                id: `chatgpt.workspace.permissions.july30_redesign.section.codex`,
                defaultMessage: `Codex`
            }
        }), R = S({
            OutpostReadTitle: {
                id: `workspace.permissions.outpost.OutpostReadTitle`,
                defaultMessage: `View Outposts`
            },
            OutpostReadDescription: {
                id: `workspace.permissions.outpost.OutpostReadDescription`,
                defaultMessage: `View Outpost installations in this workspace.`
            },
            OutpostWriteTitle: {
                id: `workspace.permissions.outpost.OutpostWriteTitle`,
                defaultMessage: `Manage Outposts`
            },
            OutpostWriteDescription: {
                id: `workspace.permissions.outpost.OutpostWriteDescription`,
                defaultMessage: `Create, update, and delete Outpost installations and issue registration credentials.`
            },
            OutpostRegisterTitle: {
                id: `workspace.permissions.outpost.OutpostRegisterTitle`,
                defaultMessage: `Register Outposts`
            },
            OutpostRegisterDescription: {
                id: `workspace.permissions.outpost.OutpostRegisterDescription`,
                defaultMessage: `Register Outpost installations in this workspace.`
            },
            CodexPrivateCloudAccessTitle: {
                id: `workspace.permissions.outpost.CodexPrivateCloudAccessTitle`,
                defaultMessage: `Use Codex private cloud`
            },
            CodexPrivateCloudAccessDescription: {
                id: `workspace.permissions.outpost.CodexPrivateCloudAccessDescription`,
                defaultMessage: `Use eligible Private cloud environments. Codex access is also required.`
            }
        }), z = S({
            betaBadge: {
                id: `chatgpt.workspace.permissions.july30_redesign.permission.beta_badge`,
                defaultMessage: `Beta`
            },
            usePluginsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.plugins.use.label`,
                defaultMessage: `Use plugins`
            },
            usePluginsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.plugins.use.info_tooltip`,
                defaultMessage: `Let members use apps and plugins available to the workspace.`
            },
            publishPluginsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.plugins.publish.label`,
                defaultMessage: `Publish plugins to workspace`
            },
            publishPluginsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.plugins.publish.info_tooltip`,
                defaultMessage: `Let members publish plugins they own for others in the workspace to use.`
            },
            uploadPluginsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.plugins.upload.label`,
                defaultMessage: `Upload plugins`
            },
            uploadPluginsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.plugins.upload.info_tooltip`,
                defaultMessage: `Let members upload plugin ZIP files to create plugins in the workspace.`
            },
            uploadPluginsWithCustomMcpServersTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.plugins.upload_with_custom_mcp_servers.label`,
                defaultMessage: `Upload plugins with custom MCP servers`
            },
            uploadPluginsWithCustomMcpServersTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.plugins.upload_with_custom_mcp_servers.info_tooltip`,
                defaultMessage: `Let members upload or update workspace plugins that contain custom MCP servers (in mcp.json). Members still need permission to create or edit the plugin. Sharing and publishing are controlled separately.`
            },
            sharePluginsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.plugins.share.label`,
                defaultMessage: `Share plugins`
            },
            sharePluginsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.plugins.share.info_tooltip`,
                defaultMessage: `Let members share plugins they own with specific people or groups, or anyone in the workspace with a link.`
            },
            createMcpAppsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.plugins.create_plugins_with_mcps.label`,
                defaultMessage: `Create plugins with MCPs`
            },
            createMcpAppsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.plugins.create_custom_mcp_apps.info_tooltip`,
                defaultMessage: `Let members use developer mode to create custom MCP apps.`
            },
            useSkillsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.skills.use.label`,
                defaultMessage: `Use skills`
            },
            useSkillsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.skills.use.info_tooltip`,
                defaultMessage: `Let members use skills in ChatGPT and Codex.`
            },
            createSkillsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.skills.create.label`,
                defaultMessage: `Create skills`
            },
            createSkillsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.skills.create.info_tooltip`,
                defaultMessage: `Let members create skills with chat or the skill editor.`
            },
            uploadSkillsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.skills.upload.label`,
                defaultMessage: `Upload skills`
            },
            uploadSkillsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.skills.upload.info_tooltip`,
                defaultMessage: `Let members upload skill files from their computer.`
            },
            shareSkillsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.skills.share.label`,
                defaultMessage: `Share skills`
            },
            shareSkillsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.skills.share.info_tooltip`,
                defaultMessage: `Let members share skills with specific workspace members and groups.`
            },
            publishSkillsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.skills.publish.label`,
                defaultMessage: `Publish skills to workspace`
            },
            publishSkillsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.skills.publish.info_tooltip`,
                defaultMessage: `Let members publish skills they own for others in the workspace to use.`
            },
            installSkillsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.skills.install_for_others.label`,
                defaultMessage: `Install skills for others`
            },
            installSkillsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.skills.install_for_others.info_tooltip`,
                defaultMessage: `Let members install skills for other people in the workspace.`
            },
            sitesTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.sites.publish.label`,
                defaultMessage: `Use Sites`
            },
            sitesTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.sites.publish.info_tooltip`,
                defaultMessage: `Let members deploy and publish sites and apps with Sites.`
            },
            sitesPublicPublishingTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.sites.public_publishing.label`,
                defaultMessage: `Publish sites to the public internet`
            },
            sitesPublicPublishingTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.sites.public_publishing.info_tooltip`,
                defaultMessage: `Let members publish sites that anyone on the public internet can access.`
            },
            sitesExternalVisitorsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.sites.external_visitors.label`,
                defaultMessage: `Invite external visitors to sites`
            },
            sitesExternalVisitorsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.sites.external_visitors.info_tooltip`,
                defaultMessage: `Let members invite people outside your workspace to view sites.`
            },
            sitesAttachTunnelsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.sites.attach_tunnels.label`,
                defaultMessage: `Attach private tunnels to Sites`
            },
            sitesAttachTunnelsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.sites.attach_tunnels.info_tooltip`,
                defaultMessage: `Let members connect Sites to services reachable through private tunnels.`
            },
            sitesPublishWithTunnelsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.sites.publish_with_tunnels.label`,
                defaultMessage: `Publish Sites with private tunnels`
            },
            sitesPublishWithTunnelsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.sites.publish_with_tunnels.info_tooltip`,
                defaultMessage: `Let members make Sites public when private tunnels are attached.`
            },
            memoryTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.memory.use.label`,
                defaultMessage: `Use shared memory`
            },
            memoryTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.memory.use.info_tooltip`,
                defaultMessage: `Let ChatGPT save and use shared memories, including in its hosted coding experiences. This does not affect separate agent memory in local desktop tasks, the CLI, or IDE.`
            },
            improvedMemoryTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.memory.improved.label`,
                defaultMessage: `Use improved memory`
            },
            improvedMemoryTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.memory.improved.info_tooltip`,
                defaultMessage: `Let members use memory that automatically stays up to date for more relevant replies.`
            },
            createImagesTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.use_image_generation_models.label`,
                defaultMessage: `Use image generation models`
            },
            createImagesTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.use_image_generation_models.info_tooltip`,
                defaultMessage: `Let members use OpenAI's image generation models to create images; this permission doesn't control image creation with Python or other tools.`
            },
            personalAccessTokensTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.personal_access_tokens.create.label`,
                defaultMessage: `Create personal access tokens`
            },
            personalAccessTokensTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.personal_access_tokens.create.info_tooltip`,
                defaultMessage: `Let members create personal access tokens for integrations and API access.`
            },
            memberVisibilityTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.members.view.label`,
                defaultMessage: `View workspace members and groups`
            },
            memberVisibilityTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.members.view.info_tooltip`,
                defaultMessage: `Let members view workspace member and group lists, including assigned roles.`
            },
            searchTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.search_web.label`,
                defaultMessage: `Search the web`
            },
            searchTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.search_web.info_tooltip`,
                defaultMessage: `Let ChatGPT and workspace GPTs search the web, which may send queries and approximate location to a search provider.`
            },
            searchHelpLink: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.search_web.help_link`,
                defaultMessage: `How Chat search works`
            },
            deepResearchTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.deep_research.label`,
                defaultMessage: `Run deep research`
            },
            deepResearchTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.deep_research.info_tooltip`,
                defaultMessage: `Let members run multi-step research with web-connected tools.`
            },
            projectsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.projects.manage.label`,
                defaultMessage: `Create and manage projects`
            },
            projectsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.projects.manage.info_tooltip`,
                defaultMessage: `Let members create and manage projects.`
            },
            shareProjectsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.projects.share.label`,
                defaultMessage: `Share projects`
            },
            shareProjectsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.projects.share.info_tooltip`,
                defaultMessage: `Let members share projects with specific people in the workspace.`
            },
            workspaceProjectLinksTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.projects.workspace_links.label`,
                defaultMessage: `Share projects via workspace links`
            },
            workspaceProjectLinksTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.projects.workspace_links.info_tooltip`,
                defaultMessage: `Let members share projects with anyone in the workspace who has the link.`
            },
            agentsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.agents.use.label.workspace`,
                defaultMessage: `Browse and run workspace agents`
            },
            agentsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.agents.use.info_tooltip`,
                defaultMessage: `Let members browse and run workspace agents.`
            },
            buildAgentsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.agents.build.label.workspace`,
                defaultMessage: `Build workspace agents`
            },
            buildAgentsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.agents.build.info_tooltip`,
                defaultMessage: `Let members create, edit, and duplicate workspace agents.`
            },
            shareAgentsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.agents.share.label.workspace`,
                defaultMessage: `Share workspace agents`
            },
            shareAgentsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.agents.share.info_tooltip`,
                defaultMessage: `Let members share workspace agents with specific people and groups in the workspace.`
            },
            publishAgentsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.agents.publish.label.workspace`,
                defaultMessage: `Publish workspace agents`
            },
            publishAgentsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.agents.publish.info_tooltip`,
                defaultMessage: `Let members publish workspace agents to the workspace directory.`
            },
            agentOwnedConnectionsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.agents.share_owned_connections.label.workspace`,
                defaultMessage: `Share workspace agents with agent-owned connections`
            },
            agentOwnedConnectionsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.agents.share_owned_connections.info_tooltip`,
                defaultMessage: `Let members share workspace agents that use connections owned by the agent.`
            },
            manageGptsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.gpts.manage.label`,
                defaultMessage: `Create and manage GPTs`
            },
            manageGptsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.gpts.manage.info_tooltip`,
                defaultMessage: `Let members create, edit, and manage GPTs.`
            },
            workspaceGptsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.gpts.publish_workspace.label`,
                defaultMessage: `Publish GPTs to workspace`
            },
            workspaceGptsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.gpts.publish_workspace.info_tooltip`,
                defaultMessage: `Let members publish GPTs they own to the workspace GPT store.`
            },
            externalGptsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.gpts.publish_externally.label`,
                defaultMessage: `Publish GPTs externally`
            },
            externalGptsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.gpts.publish_externally.info_tooltip`,
                defaultMessage: `Let members share GPTs they own outside the workspace by email or link.`
            },
            allThirdPartyGptsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.gpts.allow_all_third_party.label`,
                defaultMessage: `Allow all third party GPTs`
            },
            allThirdPartyGptsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.gpts.allow_all_third_party.info_tooltip`,
                defaultMessage: `Let members use any third-party GPT.`
            },
            approvedGptsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.gpts.allow_owner_approved.label`,
                defaultMessage: `Allow owner-approved GPTs only`
            },
            approvedGptsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.gpts.allow_owner_approved.info_tooltip`,
                defaultMessage: `Let members use third-party GPTs approved by a workspace owner.`
            },
            earlyModelsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.models.early_access.label`,
                defaultMessage: `Use early-access models`
            },
            earlyModelsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.models.early_access.info_tooltip`,
                defaultMessage: `Let members use models during their early access period.`
            },
            reasoningModelsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.models.reasoning.label`,
                defaultMessage: `Allow reasoning models`
            },
            reasoningModelsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.models.reasoning.info_tooltip`,
                defaultMessage: `Let members use reasoning models for complex, multi-step tasks.`
            },
            proModelsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.models.pro.label`,
                defaultMessage: `Allow Pro models`
            },
            proModelsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.models.pro.info_tooltip`,
                defaultMessage: `Let members use pro models available to the workspace.`
            },
            thinkingMiniTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.models.thinking_mini.label`,
                defaultMessage: `Redirect Auto Router to Thinking Mini`
            },
            thinkingMiniTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.models.thinking_mini.info_tooltip`,
                defaultMessage: `Route Auto reasoning requests to Thinking Mini instead of Thinking.`
            },
            libraryTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.library.auto_reference.label`,
                defaultMessage: `Reference Library files automatically`
            },
            libraryTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.library.auto_reference.info_tooltip`,
                defaultMessage: `Let ChatGPT use members’ Library files when answering questions.`
            },
            recordTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.record.use.label`,
                defaultMessage: `Use ChatGPT Record`
            },
            recordTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.record.use.info_tooltip`,
                defaultMessage: `Let members record, transcribe, and summarize long-form audio with ChatGPT Record.`
            },
            recordHistoryTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.record.reference_history.label`,
                defaultMessage: `Reference past notes and transcripts`
            },
            recordHistoryTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.record.reference_history.info_tooltip`,
                defaultMessage: `Let members ask ChatGPT to use their past meeting notes and transcripts.`
            },
            runCodeTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.code.run.label`,
                defaultMessage: `Run code in Canvas and code blocks`
            },
            runCodeTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.code.run.info_tooltip`,
                defaultMessage: `Let members run code in Canvas and code blocks.`
            },
            codeNetworkTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.code.network_access.label`,
                defaultMessage: `Allow internet access in Canvas and code blocks`
            },
            codeNetworkTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.code.network_access.info_tooltip`,
                defaultMessage: `Let code in Canvas and code blocks access the internet.`
            },
            voiceTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.voice.use.label`,
                defaultMessage: `Use Voice`
            },
            fedrampDisabledPermissionReason: {
                id: `chatgpt.workspace_permissions.fedramp_disabled_permission.tooltip`,
                defaultMessage: `This feature is disabled for FedRAMP workspaces.`
            },
            lockdownDisabledPermissionReason: {
                id: `chatgpt.workspace_permissions.lockdown_disabled_permission.tooltip`,
                defaultMessage: `This feature is disabled in lockdown mode.`
            },
            dictationTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.desktop_app_dictation.use.label`,
                defaultMessage: `Use dictation on the ChatGPT desktop app`
            },
            dictationTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.desktop_app_dictation.use.info_tooltip`,
                defaultMessage: `Let members use speech-to-text dictation in the ChatGPT desktop app.`
            },
            desktopAppChatTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.desktop_app.use.label`,
                defaultMessage: `Use Chat on the ChatGPT desktop app`
            },
            desktopAppChatTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.desktop_app.use.info_tooltip`,
                defaultMessage: `Let members use Chat in the ChatGPT desktop app.`
            },
            voiceTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.voice.use.info_tooltip`,
                defaultMessage: `Let members have real-time voice conversations with ChatGPT.`
            },
            voiceVideoTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.voice.screen_video.label`,
                defaultMessage: `Share screen and video in Voice`
            },
            voiceVideoTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.voice.screen_video.info_tooltip`,
                defaultMessage: `Let members share their screen or camera while using Voice.`
            },
            shareChatsAndTasksTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.share_workspace.with_tasks.label`,
                defaultMessage: `Share chats and scheduled tasks in the workspace`
            },
            shareChatsAndTasksTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.share_workspace.with_tasks.info_tooltip`,
                defaultMessage: `Let members share chats and scheduled tasks with others in the workspace`
            },
            contextLayerAdminTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.context_layer.admin.label`,
                defaultMessage: `Administer Context Layer`
            },
            contextLayerAdminTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat.context_layer.admin.info_tooltip`,
                defaultMessage: `Let members manage Context Layer spaces, access, and catalog selections.`
            },
            powerpointTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat_extensions.powerpoint.use.label`,
                defaultMessage: `Use ChatGPT for PowerPoint`
            },
            powerpointTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat_extensions.powerpoint.use.info_tooltip`,
                defaultMessage: `Let members use ChatGPT for PowerPoint to create and edit presentations natively in PowerPoint.`
            },
            wordTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat_extensions.word.use.label`,
                defaultMessage: `Use ChatGPT for Word`
            },
            wordTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat_extensions.word.use.info_tooltip`,
                defaultMessage: `Let members use ChatGPT for Word to create and edit documents natively in Word.`
            },
            spreadsheetsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat_extensions.spreadsheets.use.label`,
                defaultMessage: `Use ChatGPT for Excel and Sheets`
            },
            spreadsheetsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.chat_extensions.spreadsheets.use.info_tooltip`,
                defaultMessage: `Let members use ChatGPT for Excel and Google Sheets to create and edit spreadsheets natively in Excel and Google Sheets.`
            },
            workTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.work.use.label`,
                defaultMessage: `Use Work`
            },
            workTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.work.use.info_tooltip`,
                defaultMessage: `Let members use Work in ChatGPT.`
            },
            workLocalTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.work.local.label`,
                defaultMessage: `Locally on the ChatGPT desktop app`
            },
            workLocalTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.work.local.info_tooltip`,
                defaultMessage: `Let members run Work tasks on their computer instead of in the cloud.`
            },
            workCloudTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.work.cloud.label`,
                defaultMessage: `In the cloud on ChatGPT web, mobile, and desktop`
            },
            workCloudTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.work.cloud.info_tooltip`,
                defaultMessage: `Let members run complex tasks in a secure, isolated cloud environment.`
            },
            workBrowserTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.work.browser_use.label`,
                defaultMessage: `Allow browser use for Work in the cloud`
            },
            workBrowserTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.work.browser_use.info_tooltip`,
                defaultMessage: `Let cloud Work tasks open and interact with websites using a browser.`
            },
            workNetworkTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.work.network_access.label`,
                defaultMessage: `Allow network access for Work in the cloud`
            },
            workNetworkTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.work.network_access.info_tooltip`,
                defaultMessage: `Let code and shell commands in cloud Work tasks access the internet.`
            },
            workWebhookAutomationsTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.work.webhook_automations.label`,
                defaultMessage: `Allow event-triggered scheduled tasks`
            },
            workWebhookAutomationsTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.work.webhook_automations.info_tooltip`,
                defaultMessage: `Let connected plugins trigger scheduled tasks when supported events occur.`
            },
            codexLocalTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.local.use.label`,
                defaultMessage: `Use Codex locally on the ChatGPT desktop app`
            },
            codexLocalTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.local.use.info_tooltip`,
                defaultMessage: `Let members use Codex locally on the ChatGPT desktop app.`
            },
            codexRemoteTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.local.remote_control.label`,
                defaultMessage: `Discover and control devices remotely`
            },
            codexRemoteTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.local.remote_control.info_tooltip`,
                defaultMessage: `Let members control local Codex environments from authorized devices, including mobile phones.`
            },
            codexLocalAutomationTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.local_automation.use.label`,
                defaultMessage: `Use scheduled tasks in the ChatGPT desktop app`
            },
            codexLocalAutomationTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.local_automation.use.info_tooltip`,
                defaultMessage: `Let members create and run scheduled tasks locally in the ChatGPT desktop app.`
            },
            codexInAppBrowserTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.in_app_browser.use.label`,
                defaultMessage: `Use the in-app browser in the ChatGPT desktop app`
            },
            codexInAppBrowserTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.in_app_browser.use.info_tooltip`,
                defaultMessage: `Let members open and interact with websites in the ChatGPT desktop app.`
            },
            windowsComputerUseTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.local.windows_computer_use.label`,
                defaultMessage: `Use Windows computer-use`
            },
            windowsComputerUseTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.local.windows_computer_use.info_tooltip`,
                defaultMessage: `Let members use computer-use to interact with apps and controls on Windows devices.`
            },
            codexDeviceCodeTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.local.device_code_auth.codex_and_office.label`,
                defaultMessage: `Enable device code sign-in for Codex, Excel, PowerPoint, and Word`
            },
            codexDeviceCodeAuthWarning: {
                id: `chatgpt.workspace.permissions.device_code_auth.phishing_confirmation`,
                defaultMessage: `Device codes can be used in phishing attacks. If a member enters a code sent by someone else, that person could sign in as the member and access workspace data. Only enable this if members need Codex on remote or headless devices, or ChatGPT in Excel, PowerPoint, or Word. Ask members to enter only codes shown on their own device.`
            },
            codexDeviceCodeTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.local.device_code_auth.codex_and_office.info_tooltip`,
                defaultMessage: `Allow members to sign in to Codex in remote or headless environments, or to ChatGPT in Excel, PowerPoint, and Word through their browser. Exercise caution, as device codes can be phished. Never share a device code.`
            },
            codexManageEnvironmentsTitle: {
                id: `rbacPermissions.codexManageEnvironments.title`,
                defaultMessage: `Manage workspace environments`
            },
            codexManageEnvironmentsTooltip: {
                id: `rbacPermissions.codexManageEnvironments.tooltip`,
                defaultMessage: `Create and edit environments shared with your workspace. Members can always create and edit their own personal environments and view shared environments.`
            },
            codexCloudTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.cloud.use.label`,
                defaultMessage: `Use Codex in the cloud`
            },
            codexCloudTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.cloud.use.info_tooltip`,
                defaultMessage: `Let members run Codex cloud tasks from ChatGPT, code review, and Slack.`
            },
            codexGithubTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.cloud.github_app.label`,
                defaultMessage: `GitHub app`
            },
            codexGithubTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.cloud.github_app.info_tooltip`,
                defaultMessage: `Show whether the GitHub app required for Codex cloud tasks is connected.`
            },
            codexNetworkTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.cloud.network_access.label`,
                defaultMessage: `Allow network access`
            },
            codexNetworkTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.cloud.network_access.info_tooltip`,
                defaultMessage: `Let Codex cloud environments access the internet while completing tasks.`
            },
            codexSlackTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.cloud.slack_posting.label`,
                defaultMessage: `Allow Slack plugin to post answers on task completion`
            },
            codexSlackTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.cloud.slack_posting.info_tooltip`,
                defaultMessage: `Let the Codex Slack app post full task answers to Slack instead of only a link.`
            },
            codexSecurityTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.security.use.label`,
                defaultMessage: `Use Codex Security`
            },
            defenseFactoryTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.defense_factory.use.label`,
                defaultMessage: `Use Codex Security Cloud`
            },
            codexSecurityTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.security.use.info_tooltip`,
                defaultMessage: `Let members use Codex Security features.`
            },
            defenseFactoryTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.defense_factory.use.info_tooltip`,
                defaultMessage: `Let members use Codex Security Cloud.`
            },
            codexAdminTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.admin.label`,
                defaultMessage: `Administer Codex`
            },
            codexAdminTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.admin.info_tooltip`,
                defaultMessage: `Let members manage Codex environments and view Codex workspace analytics.`
            },
            codexSecurityAdminTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.security.admin.label`,
                defaultMessage: `Administer Codex Security`
            },
            defenseFactoryAdminTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.defense_factory.admin.label`,
                defaultMessage: `Administer Codex Security Cloud`
            },
            codexSecurityAdminTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.codex.security.admin.info_tooltip`,
                defaultMessage: `Let members manage Codex Security scan configurations for the workspace.`
            },
            defenseFactoryAdminTooltip: {
                id: `chatgpt.workspace.permissions.july30_redesign.defense_factory.admin.info_tooltip`,
                defaultMessage: `Let members manage Codex Security Cloud scan configurations for the workspace.`
            }
        }), B = L(z.usePluginsTitle, z.usePluginsTooltip, `Platform Capabilities`, `parent`, 1), V = L(z.personalAccessTokensTitle, z.personalAccessTokensTooltip, `Platform Capabilities`, `standalone`, 13), tt = L(z.recordTitle, z.recordTooltip, `Chat`, `parent`, 35), nt = L(z.recordHistoryTitle, z.recordHistoryTooltip, `Chat`, `child`, 36), rt = {
            body: z.codexDeviceCodeAuthWarning,
            warning: !0
        }, it = L(z.dictationTitle, z.dictationTooltip, `Codex`, `standalone`, 54.4), at = L(z.desktopAppChatTitle, z.desktopAppChatTooltip, `Chat`, `standalone`, 31.2), ot = L(z.codexLocalAutomationTitle, z.codexLocalAutomationTooltip, `Codex`, `standalone`, 54.5), st = L(z.codexInAppBrowserTitle, z.codexInAppBrowserTooltip, `Codex`, `standalone`, 54.6), ct = z.fedrampDisabledPermissionReason, lt = z.lockdownDisabledPermissionReason, ut = new Map([
            [h.OutpostRead, L(R.OutpostReadTitle, R.OutpostReadDescription, `Codex`, `standalone`, 65)],
            [h.OutpostWrite, L(R.OutpostWriteTitle, R.OutpostWriteDescription, `Codex`, `standalone`, 66)],
            [h.OutpostRegister, L(R.OutpostRegisterTitle, R.OutpostRegisterDescription, `Codex`, `standalone`, 67)],
            [h.CodexPrivateCloudAccess, L(R.CodexPrivateCloudAccessTitle, R.CodexPrivateCloudAccessDescription, `Codex`, `standalone`, 68)],
            [h.ChartGPTAccess, L(F.chartGPTTitle, F.chartGPTDescription, `ChartGPT - EHR Integrations`, `parent`, 1)],
            [h.PreventChartGPTContinuation, L(F.preventContinuationTitle, F.preventContinuationDescription, `ChartGPT - EHR Integrations`, `child`, 2)],
            [h.DictationAccess, it],
            [h.DesktopAppChatAccess, at],
            [h.CodexLocalAutomationAccess, ot],
            [h.CodexInAppBrowserAccess, st],
            [h.UseConnector, B],
            [h.UsePlugin, B],
            [h.UseWorkspacePlugins, B],
            [h.UploadWorkspacePlugins, L(z.uploadPluginsTitle, z.uploadPluginsTooltip, `Platform Capabilities`, `child`, 1.1)],
            [h.UploadWorkspacePluginsWithCustomMcpServers, L(z.uploadPluginsWithCustomMcpServersTitle, z.uploadPluginsWithCustomMcpServersTooltip, `Platform Capabilities`, `child`, 1.15)],
            [h.ShareWorkspacePlugins, L(z.sharePluginsTitle, z.sharePluginsTooltip, `Platform Capabilities`, `child`, 1.2)],
            [h.PublishWorkspacePlugins, L(z.publishPluginsTitle, z.publishPluginsTooltip, `Platform Capabilities`, `child`, 1.3)],
            [h.CreateMcpConnector, L(z.createMcpAppsTitle, z.createMcpAppsTooltip, `Platform Capabilities`, `child`, 1.4)],
            [h.SkillsAccess, L(z.useSkillsTitle, z.useSkillsTooltip, `Platform Capabilities`, `parent`, 4)],
            [h.SkillsCreate, L(z.createSkillsTitle, z.createSkillsTooltip, `Platform Capabilities`, `child`, 5)],
            [h.SkillsUpload, L(z.uploadSkillsTitle, z.uploadSkillsTooltip, `Platform Capabilities`, `child`, 6)],
            [h.SkillsShare, L(z.shareSkillsTitle, z.shareSkillsTooltip, `Platform Capabilities`, `child`, 7)],
            [h.SkillsShareWorkspace, L(z.publishSkillsTitle, z.publishSkillsTooltip, `Platform Capabilities`, `child`, 8)],
            [h.SkillsEnableShareWorkspace, L(z.installSkillsTitle, z.installSkillsTooltip, `Platform Capabilities`, `child`, 9)],
            [h.SitesAccess, L(z.sitesTitle, z.sitesTooltip, `Platform Capabilities`, `parent`, 10, z.betaBadge)],
            [h.SitesPublishAccess, L(z.sitesPublicPublishingTitle, z.sitesPublicPublishingTooltip, `Platform Capabilities`, `child`, 10.1)],
            [h.SitesInviteExternalAccess, L(z.sitesExternalVisitorsTitle, z.sitesExternalVisitorsTooltip, `Platform Capabilities`, `child`, 10.2)],
            [h.SitesAttachTunnelsAccess, L(z.sitesAttachTunnelsTitle, z.sitesAttachTunnelsTooltip, `Platform Capabilities`, `child`, 10.3)],
            [h.SitesPublishWithTunnelsAccess, L(z.sitesPublishWithTunnelsTitle, z.sitesPublishWithTunnelsTooltip, `Platform Capabilities`, `child`, 10.2)],
            [h.MemoryAccess, L(z.memoryTitle, z.memoryTooltip, `Platform Capabilities`, `parent`, 11)],
            [h.ImprovedMemoryAccess, L(z.improvedMemoryTitle, z.improvedMemoryTooltip, `Platform Capabilities`, `child`, 12)],
            [h.ImageGenAccess, L(z.createImagesTitle, z.createImagesTooltip, `Chat`, `standalone`, 31.1)],
            [h.ProgrammaticAgentIdentitiesAccess, V],
            [h.TeamCreate, L(N.createTitle, N.createDescription, `Platform Capabilities`, `standalone`, 15)],
            [h.TeamMemberInvite, L(N.inviteTitle, N.inviteDescription, `Platform Capabilities`, `standalone`, 16)],
            [h.TeamAutomationWrite, L(N.automationWriteTitle, N.automationWriteDescription, `Platform Capabilities`, `standalone`, 17)],
            [`personal_access_tokens`, V],
            [h.MemberRoleView, L(z.memberVisibilityTitle, z.memberVisibilityTooltip, `Platform Capabilities`, `standalone`, 14)],
            [h.SearchAccess, {
                ...L(z.searchTitle, z.searchTooltip, `Chat`, `parent`, 17),
                helpLink: {
                    label: z.searchHelpLink,
                    href: `https://help.openai.com/en/articles/10093903-chatgpt-search-for-enterprise-and-edu`
                }
            }],
            [h.DeepResearchAccess, L(z.deepResearchTitle, z.deepResearchTooltip, `Chat`, `child`, 18)],
            [h.CrudProject, L(z.projectsTitle, z.projectsTooltip, `Chat`, `parent`, 19)],
            [h.ShareProject, L(z.shareProjectsTitle, z.shareProjectsTooltip, `Chat`, `child`, 20)],
            [h.ShareWorkspaceProject, L(z.workspaceProjectLinksTitle, z.workspaceProjectLinksTooltip, `Chat`, `child`, 21)],
            [k, L(z.agentsTitle, z.agentsTooltip, `Chat`, `parent`, 22)],
            [De, L(z.buildAgentsTitle, z.buildAgentsTooltip, `Chat`, `child`, 23)],
            [ge, L(z.shareAgentsTitle, z.shareAgentsTooltip, `Chat`, `child`, 24)],
            [`chatgpt.workspace.feature.hermes.publish.access`, L(z.publishAgentsTitle, z.publishAgentsTooltip, `Chat`, `child`, 25)],
            [`chatgpt.workspace.feature.hermes.share_personal.access`, L(z.agentOwnedConnectionsTitle, z.agentOwnedConnectionsTooltip, `Chat`, `child`, 26)],
            [h.CrudGPT, L(z.manageGptsTitle, z.manageGptsTooltip, `Chat`, `parent`, 27)],
            [h.ShareWorkspaceGPT, L(z.workspaceGptsTitle, z.workspaceGptsTooltip, `Chat`, `child`, 28)],
            [h.ShareExternalGPT, L(z.externalGptsTitle, z.externalGptsTooltip, `Chat`, `child`, 29)],
            [h.AllowAllThirdPartyGPT, L(z.allThirdPartyGptsTitle, z.allThirdPartyGptsTooltip, `Chat`, `child`, 30)],
            [h.AllowSpecificThirdPartyGPT, L(z.approvedGptsTitle, z.approvedGptsTooltip, `Chat`, `child`, 31)],
            [h.EarlyModelAccess, L(z.earlyModelsTitle, z.earlyModelsTooltip, `Chat models`, `standalone`, 0)],
            [h.ReasoningModelAccess, L(z.reasoningModelsTitle, z.reasoningModelsTooltip, `Chat models`, `standalone`, 10)],
            [h.ProModelAccess, L(z.proModelsTitle, z.proModelsTooltip, `Chat models`, `standalone`, 20)],
            [h.GPT5ThinkingMiniAccess, L(z.thinkingMiniTitle, z.thinkingMiniTooltip, `Chat models`, `standalone`, 50)],
            [h.FileLibraryAutoReferenceAccess, L(z.libraryTitle, z.libraryTooltip, `Chat`, `standalone`, 34)],
            [h.HiveAccess, tt],
            [`record_access`, tt],
            [h.HiveKnowledgeRetrievalAccess, nt],
            [`record_reference_past_transcripts`, nt],
            [h.CanvasCodeExecutionAccess, L(z.runCodeTitle, z.runCodeTooltip, `Chat`, `parent`, 37)],
            [h.CanvasCodeNetworkAccess, L(z.codeNetworkTitle, z.codeNetworkTooltip, `Chat`, `child`, 38)],
            [h.VoiceAccess, L(z.voiceTitle, z.voiceTooltip, `Chat`, `parent`, 31.2)],
            [h.VideoScreenSharingAccess, L(z.voiceVideoTitle, z.voiceVideoTooltip, `Chat`, `child`, 31.3)],
            [h.ShareChatWithWorkspace, L(z.shareChatsAndTasksTitle, z.shareChatsAndTasksTooltip, `Chat`, `standalone`, 40)],
            [Ve, L(z.contextLayerAdminTitle, z.contextLayerAdminTooltip, `Chat`, `standalone`, 41)],
            [h.BasisPointsPowerPointAccess, L(z.powerpointTitle, z.powerpointTooltip, `Chat extensions`, `standalone`, 44)],
            [h.BasisPointsAccess, L(z.spreadsheetsTitle, z.spreadsheetsTooltip, `Chat extensions`, `standalone`, 45)],
            [h.BasisPointsWordAccess, L(z.wordTitle, z.wordTooltip, `Chat extensions`, `standalone`, 46)],
            [$e, L(z.workTitle, z.workTooltip, `Work`, `parent`, 46)],
            [h.FloraLocalAccess, L(z.workLocalTitle, z.workLocalTooltip, `Work`, `child`, 47)],
            [Ee, L(z.workCloudTitle, z.workCloudTooltip, `Work`, `child`, 48)],
            [xe, L(z.workBrowserTitle, z.workBrowserTooltip, `Work`, `child`, 49)],
            [we, L(z.workNetworkTitle, z.workNetworkTooltip, `Work`, `child`, 50)],
            [ye, L(z.workWebhookAutomationsTitle, z.workWebhookAutomationsTooltip, `Work`, `child`, 51)],
            [h.WorkOnlyMode, L(he.title, he.description, `Work`, `parent`, 52)],
            [h.WorkOnlyChatInstant, L(he.chatInstantTitle, he.chatInstantDescription, `Work`, `child`, 53)],
            [h.AllowCodexLocalAccess, L(z.codexLocalTitle, z.codexLocalTooltip, `Codex`, `parent`, 51)],
            [h.AllowComputerHistory, L(Re.title, Re.description, `Codex`, `child`, 52)],
            [`chatgpt.workspace.feature.codex-remote-control.access`, L(z.codexRemoteTitle, z.codexRemoteTooltip, `Codex`, `child`, 53)],
            [h.WindowsComputerUseAccess, L(z.windowsComputerUseTitle, z.windowsComputerUseTooltip, `Codex`, `child`, 54)],
            [h.CodexDeviceCodeAuthAccess, L(z.codexDeviceCodeTitle, z.codexDeviceCodeTooltip, `Codex`, `child`, 55)],
            [h.AllowCodexAccess, L(z.codexCloudTitle, z.codexCloudTooltip, `Codex`, `parent`, 56)],
            [`codex_github_connector`, L(z.codexGithubTitle, z.codexGithubTooltip, `Codex`, `child`, 57)],
            [h.CodexManageWorkspaceEnvironments, L(z.codexManageEnvironmentsTitle, z.codexManageEnvironmentsTooltip, `Codex`, `child`, 58)],
            [h.CodexAgentNetworkAccess, L(z.codexNetworkTitle, z.codexNetworkTooltip, `Codex`, `child`, 58)],
            [h.CodexSlackPostingAccess, L(z.codexSlackTitle, z.codexSlackTooltip, `Codex`, `child`, 59)],
            [h.CodexSecurityAccess, L(z.codexSecurityTitle, z.codexSecurityTooltip, `Codex`, `child`, 60)],
            [h.CodexAdminAccess, L(z.codexAdminTitle, z.codexAdminTooltip, `Codex`, `standalone`, 61)],
            [h.CodexSecurityAdminAccess, L(z.codexSecurityAdminTitle, z.codexSecurityAdminTooltip, `Codex`, `standalone`, 62)]
        ]), dt = new Map([
            [h.CodexOptimizeAccess, {
                category: `Codex`,
                order: 63
            }],
            [h.CodexOptimizeAdminAccess, {
                category: `Codex`,
                order: 64
            }],
            [h.FinServAccess, {
                category: `Financial services`,
                order: 10
            }],
            [h.LegalAccess, {
                category: `Legal`,
                order: 10
            }],
            [h.LegalManagement, {
                category: `Legal`,
                order: 20
            }],
            [h.FinDataCompanyFilingsAccess, {
                category: `Financial services`,
                order: 20
            }],
            [h.FinDataInvestorPresentationsAccess, {
                category: `Financial services`,
                order: 30
            }],
            [h.FinDataEarningsCallsAccess, {
                category: `Financial services`,
                order: 40
            }],
            [h.FinDataInvestorReportsAccess, {
                category: `Financial services`,
                order: 50
            }],
            [h.FinDataFinancialMetricsAccess, {
                category: `Financial services`,
                order: 60
            }],
            [h.FinDataMarketPricingAccess, {
                category: `Financial services`,
                order: 70
            }],
            [h.FinDataPrivateCompanyMetricsAccess, {
                category: `Financial services`,
                order: 80
            }],
            [h.FinDataNewsAccess, {
                category: `Financial services`,
                order: 90
            }],
            [h.GPT52ReasoningAccess, {
                category: `Chat models`,
                order: 10
            }],
            [h.GPT52ProAccess, {
                category: `Chat models`,
                order: 20
            }],
            [h.GPT51ReasoningAccess, {
                category: `Chat models`,
                order: 30
            }],
            [h.GPT51ProAccess, {
                category: `Chat models`,
                order: 40
            }],
            [h.GPTO3Access, {
                category: `Chat models`,
                order: 60
            }],
            [h.GPT41Access, {
                category: `Chat models`,
                order: 70
            }],
            [h.GPT45Access, {
                category: `Chat models`,
                order: 80
            }],
            [h.GPTO4MiniAccess, {
                category: `Chat models`,
                order: 90
            }]
        ]), H = [h.UseConnector, h.UsePlugin, h.UseWorkspacePlugins], U = [h.SkillsAccess], ft = [h.CrudProject], W = [k], pt = [h.CrudGPT], G = [$e], mt = [h.AllowCodexLocalAccess], K = [h.AllowCodexAccess], ht = new Map([
            [h.PreventChartGPTContinuation, [h.ChartGPTAccess]],
            [h.UploadWorkspacePlugins, H],
            [h.UploadWorkspacePluginsWithCustomMcpServers, H],
            [h.ShareWorkspacePlugins, H],
            [h.PublishWorkspacePlugins, H],
            [h.CreateMcpConnector, H],
            [h.SkillsCreate, U],
            [h.SkillsUpload, U],
            [h.SkillsShare, U],
            [h.SkillsShareWorkspace, U],
            [h.SkillsEnableShareWorkspace, U],
            [h.ImprovedMemoryAccess, [h.MemoryAccess]],
            [h.DeepResearchAccess, [h.SearchAccess]],
            [h.ShareProject, ft],
            [h.ShareWorkspaceProject, ft],
            [De, W],
            [ge, W],
            [`chatgpt.workspace.feature.hermes.publish.access`, W],
            [`chatgpt.workspace.feature.hermes.share_personal.access`, W],
            [h.ShareWorkspaceGPT, pt],
            [h.ShareExternalGPT, pt],
            [h.AllowAllThirdPartyGPT, pt],
            [h.AllowSpecificThirdPartyGPT, pt],
            [h.HiveKnowledgeRetrievalAccess, [h.HiveAccess]],
            [h.SitesPublishWithTunnelsAccess, [h.SitesPublishAccess]],
            [`record_reference_past_transcripts`, [`record_access`]],
            [h.VideoScreenSharingAccess, [h.VoiceAccess]],
            [h.CanvasCodeNetworkAccess, [h.CanvasCodeExecutionAccess]],
            [h.SitesPublishAccess, [h.SitesAccess]],
            [h.SitesInviteExternalAccess, [h.SitesAccess]],
            [h.SitesAttachTunnelsAccess, [h.SitesAccess]],
            [h.FloraLocalAccess, G],
            [Ee, G],
            [xe, G],
            [we, G],
            [ye, G],
            [h.WorkOnlyChatInstant, [h.WorkOnlyMode]],
            [`chatgpt.workspace.feature.codex-remote-control.access`, mt],
            [h.AllowComputerHistory, mt],
            [h.WindowsComputerUseAccess, mt],
            [h.CodexDeviceCodeAuthAccess, mt],
            [`codex_github_connector`, K],
            [h.CodexManageWorkspaceEnvironments, K],
            [h.CodexAgentNetworkAccess, K],
            [h.CodexSlackPostingAccess, K],
            [h.CodexSecurityAccess, K]
        ])
    })),
    _t, vt, yt = e((() => {
        T(), ve(), _t = S({
            hermesSectionTitle: {
                id: `Hermes.Settings.SelfServeBusinessPermissions.workspaceAgentsSectionTitle`,
                defaultMessage: `Workspace agents`
            },
            hermesSectionDescription: {
                id: `Hermes.Settings.SelfServeBusinessPermissions.workspaceAgentsSectionDescription`,
                defaultMessage: `Manage who can browse and use agents in this workspace.`
            },
            hermesAccessTitle: {
                id: `Hermes.Settings.SelfServeBusinessPermissions.hermesAccessTitle`,
                defaultMessage: `Enable agents`
            },
            hermesAccessDescription: {
                id: `Hermes.Settings.SelfServeBusinessPermissions.hermesAccessDescription`,
                defaultMessage: `Allow members to browse agents and run agents in this workspace.`
            }
        }), vt = () => ({
            title: _t.hermesSectionTitle,
            anchorId: be,
            availableForEnterprise: !0,
            availableForQuorum: !1,
            description: _t.hermesSectionDescription,
            entries: [{
                rbac: !1,
                title: _t.hermesAccessTitle,
                description: _t.hermesAccessDescription,
                settingName: `hermes_access`
            }]
        })
    })),
    bt, xt, St = e((() => {
        T(), bt = S({
            sectionTitle: {
                id: `chatgpt.workspace.settings.dots.section`,
                defaultMessage: `dots`
            },
            toggle: {
                id: `chatgpt.workspace.settings.dots.enabled`,
                defaultMessage: `Allow members to use dots`
            },
            title: {
                id: `chatgpt.workspace.settings.dots.confirmation.title`,
                defaultMessage: `Enable dots?`
            },
            description: {
                id: `chatgpt.workspace.settings.dots.confirmation.description`,
                defaultMessage: `Dots are in beta and do not currently support data residency or Enterprise Key Management (EKM). By enabling dots, you acknowledge these limitations.`
            },
            confirm: {
                id: `chatgpt.workspace.settings.dots.confirmation.confirm`,
                defaultMessage: `Enable dots`
            },
            cancel: {
                id: `chatgpt.workspace.settings.o.confirmation.cancel`,
                defaultMessage: `Cancel`
            },
            unavailable: {
                id: `chatgpt.workspace.settings.dots.unavailable`,
                defaultMessage: `Dots are not available for this workspace`
            }
        }), xt = () => ({
            title: bt.sectionTitle,
            availableForEnterprise: !0,
            entries: [{
                rbac: !1,
                title: bt.toggle,
                settingName: `orbit_enabled`
            }]
        })
    }));

function Ct(e) {
    "use forget";
    let t = (0, Mt.c)(3),
        {
            children: r
        } = e,
        i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, q.jsx)(n, {
        color: `primary-inverse`,
        as: `link`,
        to: It,
        children: (0, q.jsx)(C, {
            ...J.manageLinkLabel
        })
    }), t[0] = i) : i = t[0];
    let a;
    return t[1] === r ? a = t[2] : (a = (0, q.jsxs)(`div`, {
        className: `flex items-center gap-3`,
        children: [i, r]
    }), t[1] = r, t[2] = a), a
}

function wt() {
    "use forget";
    let e = (0, Mt.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, q.jsx)(oe, {
        className: `${Rt} text-sm`,
        href: It,
        children: (0, q.jsx)(C, {
            ...J.manageLinkLabel
        })
    }), e[0] = t) : t = e[0], t
}

function Tt(e) {
    return e.includes(h.SitesPublishAccess) ? `internet` : e.includes(h.SitesAccess) ? `internal` : `disabled`
}

function Et({
    currentPermissionNames: e,
    mode: t
}) {
    let n = t === `internet` && e.includes(h.SitesPublishWithTunnelsAccess),
        r = t !== `disabled` && e.includes(h.SitesAttachTunnelsAccess),
        i = e.filter(e => e !== h.SitesAccess && e !== h.SitesPublishAccess && (t !== `disabled` || e !== h.SitesInviteExternalAccess) && e !== h.SitesAttachTunnelsAccess && e !== h.SitesPublishWithTunnelsAccess);
    return (t === `internal` || t === `internet`) && i.push(h.SitesAccess), t === `internet` ? (i.push(h.SitesPublishAccess), r && i.push(h.SitesAttachTunnelsAccess), n && i.push(h.SitesPublishWithTunnelsAccess)) : r && i.push(h.SitesAttachTunnelsAccess), i
}

function Dt(e) {
    "use forget";
    let t = (0, Mt.c)(30),
        {
            ariaLabel: n,
            role: r,
            handleSaveRole: i,
            disabled: a,
            disabledReason: o
        } = e,
        c = a !== void 0 && a,
        l = ie(),
        u;
    t[0] === r.permissions ? u = t[1] : (u = Tt(r.permissions), t[0] = r.permissions, t[1] = u);
    let d = u,
        f;
    t[2] === d ? f = t[3] : (f = zt.find(e => e.value === d) ?? zt[0], t[2] = d, t[3] = f);
    let p = f,
        h = c ? `cursor-not-allowed opacity-60` : `radix-state-open:bg-token-interactive-bg-secondary-press cursor-pointer hover:bg-token-interactive-bg-secondary-hover hover:text-token-text-secondary active:bg-token-interactive-bg-secondary-press`,
        g;
    t[4] === h ? g = t[5] : (g = m(`focus-visible:outline-token-border-default -m-2 inline-flex items-center gap-1.5 rounded-md px-2 py-2 text-start text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2`, h), t[4] = h, t[5] = g);
    let _;
    t[6] === p.title ? _ = t[7] : (_ = (0, q.jsx)(`span`, {
        className: `text-token-text-primary truncate font-medium whitespace-nowrap`,
        children: (0, q.jsx)(C, {
            ...p.title
        })
    }), t[6] = p.title, t[7] = _);
    let ee;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (ee = (0, q.jsx)(ue, {
        className: `icon-sm text-token-text-tertiary shrink-0`,
        "aria-hidden": !0
    }), t[8] = ee) : ee = t[8];
    let v;
    t[9] !== n || t[10] !== c || t[11] !== g || t[12] !== _ ? (v = (0, q.jsxs)(O.BasicTrigger, {
        "aria-label": n,
        disabled: c,
        className: g,
        children: [_, ee]
    }), t[9] = n, t[10] = c, t[11] = g, t[12] = _, t[13] = v) : v = t[13];
    let y;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (y = m(Lt, `max-w-[calc(100vw-2rem)]`), t[14] = y) : y = t[14];
    let te = p.value,
        b;
    t[15] !== i || t[16] !== r ? (b = e => {
        Bt(e) && i({
            ...r,
            permissions: Et({
                currentPermissionNames: r.permissions,
                mode: e
            })
        })
    }, t[15] = i, t[16] = r, t[17] = b) : b = t[17];
    let x;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (x = zt.map(Ot), t[18] = x) : x = t[18];
    let S;
    t[19] !== p.value || t[20] !== b ? (S = (0, q.jsx)(O.Portal, {
        children: (0, q.jsx)(O.Content, {
            size: `auto`,
            className: y,
            children: (0, q.jsx)(O.RadioGroup, {
                value: te,
                onValueChange: b,
                children: x
            })
        })
    }), t[19] = p.value, t[20] = b, t[21] = S) : S = t[21];
    let w;
    t[22] !== S || t[23] !== v ? (w = (0, q.jsxs)(O.Root, {
        children: [v, S]
    }), t[22] = S, t[23] = v, t[24] = w) : w = t[24];
    let T = w,
        E;
    return t[25] !== c || t[26] !== o || t[27] !== l || t[28] !== T ? (E = c && o ? (0, q.jsx)(s, {
        label: l.formatMessage(o),
        children: (0, q.jsx)(`div`, {
            children: T
        })
    }) : T, t[25] = c, t[26] = o, t[27] = l, t[28] = T, t[29] = E) : E = t[29], E
}

function Ot(e) {
    return (0, q.jsx)(O.RadioItem, {
        value: e.value,
        size: `large`,
        fillContainer: !0,
        label: (0, q.jsxs)(`div`, {
            className: `flex flex-col py-0.5`,
            children: [(0, q.jsx)(`span`, {
                className: `text-token-text-primary text-sm font-medium whitespace-normal`,
                children: (0, q.jsx)(C, {
                    ...e.title
                })
            }), (0, q.jsx)(`span`, {
                className: `text-token-text-tertiary mt-1 text-xs whitespace-normal`,
                children: (0, q.jsx)(C, {
                    ...e.description
                })
            })]
        })
    }, e.value)
}

function kt() {
    return (0, Nt.createElement)(`a`, {
        href: Pt,
        target: `_blank`,
        className: Rt,
        rel: `noreferrer`
    }, (0, Nt.createElement)(C, J.termsLinkLabel))
}

function At() {
    return {
        rbac: !0,
        title: J.toggleTitle,
        description: J.toggleDescription,
        additionalDescription: J.termsDescription,
        additionalDescriptionValues: {
            termsLink: kt()
        },
        permissionName: h.SitesAccess,
        permissionNamesToRemoveWhenDisabled: [h.SitesPublishAccess, h.SitesInviteExternalAccess, h.SitesAttachTunnelsAccess, h.SitesPublishWithTunnelsAccess]
    }
}

function jt() {
    return {
        rbac: !1,
        title: J.toggleTitle,
        description: J.toggleDescription,
        additionalDescription: J.termsDescription,
        additionalDescriptionValues: {
            termsLink: kt()
        },
        settingName: `sites`
    }
}
var Mt, Nt, q, Pt, Ft, It, Lt, Rt, J, zt, Bt, Vt = e((() => {
        Mt = re(), _(), f(), ce(), le(), i(), D(), v(), Nt = t(E()), T(), q = x(), Pt = `https://openai.com/policies/chatgpt-sites-terms/`, Ft = `https://developers.openai.com/codex/sites`, It = `/admin/sites`, Lt = `w-[250px]`, Rt = `text-token-link hover:text-token-link-hover underline`, J = S({
            toggleTitle: {
                id: `chatgpt.workspace.permissions.sites.toggle.title`,
                defaultMessage: `Allow members to deploy or publish with Sites`
            },
            toggleDescription: {
                id: `chatgpt.workspace.permissions.sites.toggle.description`,
                defaultMessage: `Manage whether members can create and publish sites/apps.`
            },
            termsDescription: {
                id: `chatgpt.workspace.permissions.sites.terms.description`,
                defaultMessage: `By enabling this feature, you agree to the {termsLink} and are responsible for your workspace’s website content.`
            },
            termsLinkLabel: {
                id: `chatgpt.workspace.permissions.sites.terms.link_label`,
                defaultMessage: `ChatGPT Sites Terms`
            },
            manageLinkLabel: {
                id: `chatgpt.workspace.permissions.sites.manage.link_label`,
                defaultMessage: `Manage`
            },
            disabledSelectLabel: {
                id: `chatgpt.workspace.permissions.sites.select.disabled`,
                defaultMessage: `Disabled`
            },
            disabledSelectDescription: {
                id: `chatgpt.workspace.permissions.sites.select.disabled.description`,
                defaultMessage: `Members cannot create, edit, or publish sites`
            },
            internalOnlySelectLabel: {
                id: `chatgpt.workspace.permissions.sites.select.internal_only`,
                defaultMessage: `Workspace only`
            },
            internalOnlySelectDescription: {
                id: `chatgpt.workspace.permissions.sites.select.internal_only.description`,
                defaultMessage: `Members can publish sites accessible only to workspace members`
            },
            internetPublishSelectLabel: {
                id: `chatgpt.workspace.permissions.sites.select.internet_publish`,
                defaultMessage: `Workspace and public internet`
            },
            internetPublishSelectDescription: {
                id: `chatgpt.workspace.permissions.sites.select.internet_publish.description`,
                defaultMessage: `Members can publish sites accessible to workspace members and anyone on the public internet`
            }
        }), zt = [{
            value: `disabled`,
            title: J.disabledSelectLabel,
            description: J.disabledSelectDescription
        }, {
            value: `internal`,
            title: J.internalOnlySelectLabel,
            description: J.internalOnlySelectDescription
        }, {
            value: `internet`,
            title: J.internetPublishSelectLabel,
            description: J.internetPublishSelectDescription
        }], Bt = e => e === `disabled` || e === `internal` || e === `internet`
    })),
    Y, Ht, Ut = e((() => {
        _(), T(), Y = S({
            legalManagementTitle: {
                id: `chatgpt.workspace.permissions.legal.management.title`,
                defaultMessage: `Manage OpenAI for Legal`
            },
            legalManagementDescription: {
                id: `chatgpt.workspace.permissions.legal.management.description`,
                defaultMessage: `Allow members to manage clients, matters, and ethical walls.`
            },
            legalSectionTitle: {
                id: `chatgpt.workspace.permissions.legal.section.title`,
                defaultMessage: `Legal`
            },
            legalSectionDescription: {
                id: `chatgpt.workspace.permissions.legal.section.description`,
                defaultMessage: `Manage access to OpenAI for Legal and legal workflows.`
            },
            legalAccessTitle: {
                id: `chatgpt.workspace.permissions.legal.access.title`,
                defaultMessage: `Enable OpenAI for Legal`
            },
            legalAccessDescription: {
                id: `chatgpt.workspace.permissions.legal.access.description`,
                defaultMessage: `Allow members to use OpenAI for Legal in Codex.`
            }
        }), Ht = () => ({
            title: Y.legalSectionTitle,
            description: Y.legalSectionDescription,
            anchorId: `legal-permissions`,
            entries: [{
                rbac: !0,
                title: Y.legalAccessTitle,
                description: Y.legalAccessDescription,
                permissionName: h.LegalAccess
            }, {
                rbac: !0,
                title: Y.legalManagementTitle,
                description: Y.legalManagementDescription,
                permissionName: h.LegalManagement
            }]
        })
    }));

function Wt() {
    return {
        rbac: !0,
        title: Gt.toggleTitle,
        description: Gt.toggleDescription,
        permissionName: h.SitesInviteExternalAccess,
        dependsOnPermissionName: h.SitesAccess
    }
}
var Gt, Kt = e((() => {
    _(), T(), Gt = S({
        toggleTitle: {
            id: `chatgpt.workspace.permissions.sites.external_visitors.toggle.title`,
            defaultMessage: `Allow members to invite external visitors to sites`
        },
        toggleDescription: {
            id: `chatgpt.workspace.permissions.sites.external_visitors.toggle.description`,
            defaultMessage: `Members can invite people outside your workspace to view sites.`
        }
    })
}));

function qt() {
    return {
        rbac: !0,
        title: Jt.title,
        description: Jt.description,
        permissionName: h.SitesAttachTunnelsAccess,
        dependsOnPermissionName: h.SitesAccess
    }
}
var Jt, Yt = e((() => {
    _(), T(), Jt = S({
        title: {
            id: `chatgpt.workspace.permissions.sites.attach_tunnels.title`,
            defaultMessage: `Allow members to attach private tunnels`
        },
        description: {
            id: `chatgpt.workspace.permissions.sites.attach_tunnels.description`,
            defaultMessage: `Allow members to connect Sites to services reachable through private tunnels.`
        }
    })
}));

function Xt() {
    return {
        rbac: !0,
        title: Zt.title,
        description: Zt.description,
        permissionName: h.SitesPublishWithTunnelsAccess,
        dependsOnPermissionName: h.SitesPublishAccess
    }
}
var Zt, Qt = e((() => {
    _(), T(), Zt = S({
        title: {
            id: `chatgpt.workspace.permissions.sites.publish_with_tunnels.title`,
            defaultMessage: `Allow public Sites with private tunnels`
        },
        description: {
            id: `chatgpt.workspace.permissions.sites.publish_with_tunnels.description`,
            defaultMessage: `Allow members to make Sites public when they have private tunnels attached.`
        }
    })
}));

function $t(e) {
    let t = e?.trim();
    return {
        rbac: !0,
        title: en.toggleTitle,
        description: t ? en.toggleDescription : en.toggleDescriptionUnnamedWorkspace,
        ...t ? {
            descriptionValues: {
                workspaceName: t
            }
        } : {},
        permissionName: h.PublishWorkspacePlugins
    }
}
var en, tn = e((() => {
    _(), T(), en = S({
        toggleTitle: {
            id: `chatgpt.workspace.permissions.plugins.publish.toggle.label`,
            defaultMessage: `Allow members to publish workspace plugins`
        },
        toggleDescription: {
            id: `chatgpt.workspace.permissions.plugins.publish.toggle.description`,
            defaultMessage: `Allow members to add plugins to the {workspaceName} plugin directory`
        },
        toggleDescriptionUnnamedWorkspace: {
            id: `chatgpt.workspace.permissions.plugins.publish.toggle.description.unnamed_workspace`,
            defaultMessage: `Allow members to add plugins to the workspace plugin directory`
        },
        manageLinkLabel: {
            id: `chatgpt.workspace.permissions.plugins.publish.manage.link_label`,
            defaultMessage: `Manage`
        }
    })
}));

function nn() {
    return {
        rbac: !0,
        title: rn.toggleTitle,
        description: rn.toggleDescription,
        permissionName: h.ShareWorkspacePlugins
    }
}
var rn, an = e((() => {
    _(), T(), rn = S({
        toggleTitle: {
            id: `chatgpt.workspace.permissions.plugins.share.toggle.label`,
            defaultMessage: `Allow members to share workspace plugins`
        },
        toggleDescription: {
            id: `chatgpt.workspace.permissions.plugins.share.toggle.description`,
            defaultMessage: `Allow members to share plugins they own with specific people or groups, or anyone in the workspace with a link`
        }
    })
}));

function on() {
    return {
        rbac: !0,
        title: cn.toggleTitle,
        description: cn.toggleDescription,
        permissionName: h.UploadWorkspacePlugins
    }
}

function sn() {
    return {
        rbac: !0,
        title: cn.customMcpToggleTitle,
        description: cn.customMcpToggleDescription,
        permissionName: h.UploadWorkspacePluginsWithCustomMcpServers
    }
}
var cn, ln = e((() => {
    _(), T(), cn = S({
        toggleTitle: {
            id: `chatgpt.workspace.permissions.plugins.upload.toggle.label`,
            defaultMessage: `Allow members to upload workspace plugins`
        },
        toggleDescription: {
            id: `chatgpt.workspace.permissions.plugins.upload.toggle.description`,
            defaultMessage: `Allow members to upload plugin ZIP files to create plugins in the workspace`
        },
        customMcpToggleTitle: {
            id: `chatgpt.workspace.permissions.plugins.upload_with_custom_mcp_servers.toggle.label`,
            defaultMessage: `Upload plugins with custom MCP servers`
        },
        customMcpToggleDescription: {
            id: `chatgpt.workspace.permissions.plugins.upload_with_custom_mcp_servers.toggle.description`,
            defaultMessage: `Allow members to upload or update workspace plugins that contain custom MCP servers. Members still need permission to create or edit the plugin. Sharing and publishing are controlled separately.`
        }
    })
}));

function un({
    isAppgenEnabled: e
}) {
    return e
}

function dn({
    account: e,
    workspaceSettings: t,
    hasThinkingMiniRouterControls: n,
    isRbacEnabled: i,
    githubConnectorEnabled: o,
    codexOptimizeEnabled: s = !1,
    isInSupportedDrRegion: l,
    includeFeatures: u,
    includeModels: f,
    isSearchEnabled: p,
    isEnterprisey: m,
    showHiveToggle: g,
    includeBetaSettings: _,
    includeBetaSettingsAdvanced: v,
    includeGizmoPermissions: te,
    includePrivatePublishGPTPermission: x,
    includeFirstPartyGPTPermission: S = !1,
    isAppleIntelligenceToggleEnabled: C,
    isAppleIntelligenceMdmToggleEnabled: w,
    includeAgentMode: T,
    includeCodexSecurity: E,
    includeComputerHistoryPermissions: ne = !1,
    isQuorum: re,
    includeConnectorPermissions: ie,
    includeCustomMcpPluginUploadPermission: ae = !0,
    includeThinkingMini: oe,
    isCodexEnabledInRBACRole: ce,
    isRoleSpecificPage: D,
    showDeviceCodeAuthToggle: O,
    showWorkspaceReferralsEnabledToggle: le = !1,
    showMemberProfilesEnabledToggle: ue = !1,
    showMemberProfileActivityToggle: de = !1,
    showMemberProfilesSharing: pe = !1,
    additionalCodexLocalEntries: me = [],
    gpt5ThinkingEnabled: he,
    gpt51ThinkingEnabled: ge,
    gpt52ThinkingEnabled: _e,
    reasoningModelEnabled: ve,
    showEnhancedCitationsPermission: ye,
    showBasisPointsPermission: k = !1,
    isSandboxModeEnabled: be,
    includeHazelnutsPermissions: xe,
    includeHazelnutsAdditionalRbacPermissions: Ce = !1,
    showPedagogyModePermission: we = !1,
    showU18ModelPolicyPermission: Te = !1,
    showDataExportPermission: Ee = !1,
    includeFileLibraryAutoReferencePermissions: De = !1,
    includeLibrarySharingPermissions: Oe = !1,
    isLibrarySharingGa: ke = !1,
    librarySharingControlMode: Ae,
    includeLegalPermissionsEarlyAccess: je = !1,
    includeFloraPermissions: Me = !1,
    isWorkLocalIndependentControlsEnabled: Pe = !1,
    includeHermesPermissionsEarlyAccess: A,
    includeSitesPermissionsEarlyAccess: Fe = !1,
    showUnifiedContainerEgress: Ie,
    isSimplifiedModelControlEnabled: Le,
    isSimplifiedModelControlReasoningProEnabled: j,
    isM3mEnabled: Be = se(),
    isFedrampRealtimeConnectorsEnabled: Ve
}) {
    let M = b(e?.planType),
        Ue = e?.planType === r.QUORUM,
        N = e?.isEdu?.() ?? ee(e?.planType),
        P = e?.isFedrampCompliantWorkspace ?? !1,
        Ge = Ve ?? fe(P),
        F = i && gr(P),
        I = m || M,
        L = i && te,
        Ke = !i && M && xe,
        qe = !i && M && un({
            isAppgenEnabled: Fe
        }),
        Je = i && A,
        Ye = !P && (I || i && A) && y(`2935265100`),
        Xe = !P && (I || A) && y(`1010509169`),
        Ze = Xe,
        Qe = I && Ye && !Xe,
        $e = I && Ye && !Xe,
        et = !i && M && A ? Sr() : null,
        R = L ? dr() : null,
        z = Jn({
            showUnifiedContainerEgress: Ie
        }),
        B = u && i && N ? Zn({
            showPedagogyModePermission: we,
            showU18ModelPolicyPermission: Te
        }) : null,
        V = a([...t?.orbit_uses_workspace_setting === !0 && !D ? [xt()] : [], ...je ? [Ht()] : [], ...i && m && y(`3957595485`) ? [Vn()] : [], ...i && Me ? Se(Pe) : [], ...Je ? [Rn()] : [], zn({
            isRbacEnabled: i,
            includeBetaSettingsAdvanced: v,
            isQuorumPlanType: Ue
        }), ...i ? [Bn()] : [], ...i && y(`1989975812`) ? [We()] : [], ...i && N && Ee ? [Hn()] : [], Kn({
            isRbacEnabled: i,
            isM3mEnabled: Be
        }), ...m && !D && !re && !Ue ? [Gn()] : [], qn({
            isRbacEnabled: i,
            includeBetaSettingsAdvanced: v
        }), ...m && z ? [z] : [], Yn({
            isRbacEnabled: i,
            includeBetaSettings: _,
            includeAgentMode: T,
            isQuorum: re,
            isSearchEnabled: p
        }), ...u && i ? [Xn] : [], ...B ? [B] : [], Qn({
            isRbacEnabled: i,
            includeBetaSettingsAdvanced: v
        }), ...Ze ? [er({
            isRbacEnabled: i,
            showSettingBackedPersonalAccessTokens: M,
            showAccessTokenMaxTtl: !0
        })] : [], ...I ? nr({
            isRbacEnabled: i,
            includeBetaSettings: _,
            includeCodexSecurity: E,
            githubConnectorEnabled: o,
            codexOptimizeEnabled: s,
            isCodexEnabledInRBACRole: ce,
            showDeviceCodeAuthToggle: O,
            showLegacyCodexAccessTokensPermission: Qe,
            showAccessTokenMaxTtl: $e,
            additionalCodexLocalEntries: [...ne ? [i ? {
                ...Re
            } : {
                ...ze
            }] : [], ...me],
            isWorkLocalIndependentControlsEnabled: Pe
        }) : [], ...De ? [Wn({
            isRbacEnabled: i
        })] : [], ...!c(e?.planType) && Oe && (ke || D) ? [{
            title: Q.librarySharingTitle,
            entries: Un(Ae, d(e?.planType) || N).filter(e => !D || e.rbac)
        }] : [], ...g ? [ar({
            isRbacEnabled: i,
            isInSupportedDrRegion: l,
            includeBetaSettings: _
        })] : [], or({
            isAppleIntelligenceToggleEnabled: C,
            isAppleIntelligenceMdmToggleEnabled: w
        }), ...d(e?.planType) && y(`1458027806`) ? [He()] : [], sr({
            isRbacEnabled: i,
            includeModels: f,
            includeThinkingMini: oe,
            gpt5ThinkingEnabled: he,
            gpt51ThinkingEnabled: ge,
            gpt52ThinkingEnabled: _e,
            reasoningModelEnabled: ve,
            hasThinkingMiniRouterControls: n,
            isSimplifiedModelControlEnabled: Le,
            isSimplifiedModelControlReasoningProEnabled: j
        }), ...i && te ? [cr(x, S)] : [], ...R ? [R] : [], ...Ke ? [mr()] : [], ...qe ? [hr()] : [], ...et ? [et] : [], ...i && xe ? [pr({
            includeHazelnutsAdditionalRbacPermissions: Ce
        })] : [], ...i ? [_r({
            includeConnectorPermissions: ie,
            includeCustomMcpPluginUploadPermission: ae,
            isFedrampCompliantWorkspace: P,
            showPluginRbacControls: F,
            workspaceName: e?.name
        })] : [], ...i && (e?.isOwnerOfAccount?.() || e?.isAdminOfAccount?.()) && y(`3287240158`) ? [Ne()] : [], ...i && ye ? [vr()] : [], ...i && k ? [yr()] : [], ...i && k ? [br()] : [], ...i && k ? [xr()] : [], ...!m && !D && le ? [rr()] : [], ...!D && (m && ue || de || pe) ? [ir(m && ue, pe, de)] : []]);
    if (be)
        for (let e of V)
            for (let t of e.entries) t.rbac && En.includes(t.permissionName) && (t.disabled = !0, t.disabledReason = Q.thisFeatureDisabledDueToSandboxMode, t.permissionName === h.SearchAccess && (t.description = Q.webSearchDescriptionSandboxMode));
    if (P)
        for (let e of V) e.entries = e.entries.filter(e => e.rbac ? e.permissionName !== h.CanvasCodeNetworkAccess : e.settingName !== `canvas_code_network_access`), Fn(e.entries, Ge, F);
    return M ? [...V.filter(e => e.availableForEnterprise === !0), ...V.filter(e => e.availableForEnterprise !== !0)] : V
}
var fn, X, pn, Z, mn, hn, gn, Q, _n, vn, $, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr, rr, ir, ar, or, sr, cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr, Cr, wr = e((() => {
    fn = re(), Pe(), Le(), gt(), te(), de(), Oe(), Ce(), yt(), St(), Ue(), Te(), Vt(), Ut(), P(), Be(), Kt(), Yt(), Qt(), tn(), an(), ln(), pe(), ae(), u(), p(), o(), T(), w(), _(), X = x(), pn = `text-token-link hover:text-token-link-hover underline`, Z = e => {
        "use forget";
        let t = (0, fn.c)(3),
            {
                chunk: n,
                href: r
            } = e,
            i;
        return t[0] !== n || t[1] !== r ? (i = (0, X.jsx)(`a`, {
            href: r,
            target: `_blank`,
            className: pn,
            rel: `noreferrer`,
            children: n
        }), t[0] = n, t[1] = r, t[2] = i) : i = t[2], i
    }, mn = `https://help.openai.com/articles/20001225`, hn = `https://help.openai.com/articles/20001225`, gn = `https://help.openai.com/en/articles/20001052-file-storage-and-library-in-chatgpt`, Q = S({
        adminPreviewTestTitle: {
            id: `chatgpt.workspace.permissions.admin_preview.test.title`,
            defaultMessage: `Admin Preview test feature`
        },
        adminPreviewTestDescription: {
            id: `chatgpt.workspace.permissions.admin_preview.test.description.pilot`,
            defaultMessage: `Test preview and launch access using the Feature Release Dashboard pilot permission in this workspace.`
        },
        desktopAppBetaSectionTitle: {
            id: `chatgpt.workspace.permissions.desktop_beta.section.title`,
            defaultMessage: `Desktop app beta features`
        },
        desktopAppBetaPermissionTitle: {
            id: `chatgpt.workspace.permissions.desktop_beta.access.toggle.label`,
            defaultMessage: `Allow desktop app beta features`
        },
        desktopAppBetaPermissionDescription: {
            id: `chatgpt.workspace.permissions.desktop_beta.access.toggle.help_text`,
            defaultMessage: `Allow members to use beta features and receive prerelease desktop app updates.`
        },
        modelsTitle: {
            id: `chatgpt.workspace.permissions.chat_models.section.title`,
            defaultMessage: `Chat Models`
        },
        modelsDescription: {
            id: `zFj9MF`,
            defaultMessage: `Manage access to models for members`
        },
        gpt5ThinkingMiniAutoswitcherDescription: {
            id: `LU9gpS`,
            defaultMessage: `If enabled, Auto will route to Thinking Mini instead of Thinking when reasoning is requested.`
        },
        gpt5ThinkingMiniAutoswitcherDisableDescription: {
            id: `+yI/qj`,
            defaultMessage: `Default on because Thinking is not enabled. Auto will route to Thinking Mini when reasoning is requested.`
        },
        imageGenTitle: {
            id: `iPlNq5`,
            defaultMessage: `Image generation`
        },
        imageGenDescription: {
            id: `6NZOo3`,
            defaultMessage: `Allows users create AI-generated images inside ChatGPT.`
        },
        webSearchTitle: {
            id: `Qzwh18`,
            defaultMessage: `Web search`
        },
        webSearchDescription: {
            id: `2MpcaO`,
            defaultMessage: `Manage whether ChatGPT and GPTs created in this workspace can browse the internet. When enabled, it may send search queries and general location information to Bing, but this data is not linked to or associated with user accounts. This does not apply to third-party GPTs. <link>Learn more</link>`
        },
        webSearchDescriptionOfflineOnly: {
            id: `At35Ka`,
            defaultMessage: `Manage whether ChatGPT and GPTs created in this workspace have access to information from the internet.`
        },
        webSearchDescriptionSandboxMode: {
            id: `kGJ5J2`,
            defaultMessage: `Manage whether ChatGPT and workspace GPTs can access the internet. When disabled, cached web results are used instead of live searches.`
        },
        taskSuggestionsSectionTitle: {
            id: `chatgpt.workspace.permissions.task_suggestions.section.title`,
            defaultMessage: `Suggested prompts`
        },
        taskSuggestionsTitle: {
            id: `chatgpt.workspace.permissions.task_suggestions.toggle.label`,
            defaultMessage: `Suggested prompts`
        },
        taskSuggestionsDescription: {
            id: `chatgpt.workspace.permissions.task_suggestions.toggle.description`,
            defaultMessage: `ChatGPT can generate suggestions based on searching connected plugins`
        },
        fileLibraryAutoReferenceTitle: {
            id: `chatgpt.workspace.permissions.file_library_auto_reference.title`,
            defaultMessage: `Allow ChatGPT to reference Library files automatically`
        },
        librarySharingTitle: {
            id: `chatgpt.workspace.permissions.library_sharing.title`,
            defaultMessage: `Library sharing`
        },
        librarySharingPolicyTitle: {
            id: `chatgpt.workspace.permissions.library_sharing.policy.workspace.label`,
            defaultMessage: `Allow Library sharing for this workspace`
        },
        librarySharingDescription: {
            id: `chatgpt.workspace.permissions.library_sharing.policy.workspace.description`,
            defaultMessage: `When off, no one in the workspace can create Library shares or change Library sharing permissions. Existing shared Library content remains accessible.`
        },
        librarySharingManagementTitle: {
            id: `chatgpt.workspace.permissions.library_sharing.management.default_group.label`,
            defaultMessage: `Allow Library sharing for this role’s default group`
        },
        librarySharingManagementDescription: {
            id: `chatgpt.workspace.permissions.library_sharing.management.default_group.description`,
            defaultMessage: `When on, members can create Library shares and change Library sharing permissions if workspace sharing is enabled. When off, they can still access Library content shared with them.`
        },
        libraryWorkspaceLinksTitle: {
            id: `chatgpt.workspace.permissions.library_workspace_links.title`,
            defaultMessage: `Share Library content via workspace links`
        },
        libraryWorkspaceLinksDescription: {
            id: `chatgpt.workspace.permissions.library_workspace_links.description`,
            defaultMessage: `Allow workspace links. Requires sharing permission.`
        },
        librarySharingRoleOnlyTitle: {
            id: `chatgpt.workspace.permissions.library_sharing.role_only.label`,
            defaultMessage: `Share Library files and folders`
        },
        librarySharingRoleOnlyDescription: {
            id: `chatgpt.workspace.permissions.library_sharing.role_only.description`,
            defaultMessage: `When on, members can share Library files and folders and manage sharing permissions. When off, they can still access Library content shared with them.`
        },
        librarySharingPreviewDescription: {
            id: `chatgpt.workspace.permissions.library_sharing.preview.setup.description`,
            defaultMessage: `Try sharing Library files and folders during Early Release. Enable sharing for your workspace, then choose which roles can create and manage shares.`
        },
        fileLibraryAutoReferenceDescription: {
            id: `chatgpt.workspace.permissions.file_library_auto_reference.description`,
            defaultMessage: `Let ChatGPT use members’ Library files when answering questions.`
        },
        fileLibrarySectionTitle: {
            id: `chatgpt.workspace.permissions.file_library_auto_reference.section.title`,
            defaultMessage: `Library`
        },
        fileLibrarySectionDescription: {
            id: `chatgpt.workspace.permissions.file_library_auto_reference.section.description`,
            defaultMessage: `Files uploaded to and created in ChatGPT are saved to Library, so members can find and reuse them later. <link>Learn more</link>`
        },
        codexTitle: {
            id: `V4PPcH`,
            defaultMessage: `Allow members to use Codex Cloud`
        },
        codexDescription: {
            id: `DNqhD6`,
            defaultMessage: `Manage whether members can use Codex Cloud to run tasks across Web, Code Review or Slack.`
        },
        codexAdminTitle: {
            id: `DWWOuu`,
            defaultMessage: `Allow members to administer Codex`
        },
        codexAdminDescription: {
            id: `xJJfEk`,
            defaultMessage: `Allow members to administer Codex, including managing environments and access to Codex workspace analytics.`
        },
        codexSlackPostingTitle: {
            id: `Ep5Rui`,
            defaultMessage: `Allow Codex Slack app to post answers on task completion`
        },
        codexSlackPostingDescription: {
            id: `xgvDqU`,
            defaultMessage: `When enabled, Codex posts its full answer back to Slack upon task completion. Otherwise, posts only a link to the task.`
        },
        workspaceReferralsEnabledSection: {
            id: `chatgpt.workspace.permissions.codex_referrals.section`,
            defaultMessage: `Codex referrals`
        },
        workspaceReferralsEnabledTitle: {
            id: `chatgpt.workspace.permissions.codex_referrals.title`,
            defaultMessage: `Allow members to send Codex referrals`
        },
        workspaceReferralsEnabledDescription: {
            id: `chatgpt.workspace.permissions.codex_referrals.description`,
            defaultMessage: `Members can send Codex referral invitations when referrals are available.`
        },
        memberProfilesEnabledSection: {
            id: `chatgpt.workspace.permissions.member_profiles_enabled.section`,
            defaultMessage: `Member profiles`
        },
        memberProfilesEnabledTitle: {
            id: `chatgpt.workspace.permissions.member_profiles_enabled.title`,
            defaultMessage: `Enable member profiles`
        },
        memberProfilesEnabledDescription: {
            id: `chatgpt.workspace.permissions.member_profiles_enabled.description`,
            defaultMessage: `Allow members to view and edit profiles in this workspace.`
        },
        memberProfilesSharingTitle: {
            id: `chatgpt.workspace.permissions.member_profiles_sharing.title`,
            defaultMessage: `Member profile sharing`
        },
        memberProfileActivityTitle: {
            id: `chatgpt.workspace.permissions.member_profile_activity_enabled.title`,
            defaultMessage: `Show member usage activity on profiles`
        },
        memberProfileActivityDescription: {
            id: `chatgpt.workspace.permissions.member_profile_activity_enabled.description`,
            defaultMessage: `Allow members to display activity statistics such as token usage on their profile`
        },
        memberProfilesSharingDescription: {
            id: `chatgpt.workspace.permissions.member_profiles_sharing.description`,
            defaultMessage: `Choose who can view members’ workspace profile pages.`
        },
        codexCliTitle: {
            id: `chatgpt.workspace.permissions.codex_and_work_local.access.toggle.label`,
            defaultMessage: `Allow members to use Codex and Work Locally`
        },
        codexCliTitleCodexOnly: {
            id: `chatgpt.workspace.permissions.codex_local.access.toggle.label`,
            defaultMessage: `Allow members to use Codex locally`
        },
        codexCliDescription: {
            id: `chatgpt.workspace.permissions.codex_and_work_local.access.toggle.help_text`,
            defaultMessage: `Manage whether members can use Codex and Work locally in the CLI, IDE extension, or desktop app.`
        },
        codexCliDescriptionCodexOnly: {
            id: `chatgpt.workspace.permissions.codex_local.access.toggle.help_text`,
            defaultMessage: `Manage whether members can use Codex locally in the CLI, IDE extension, or desktop app.`
        },
        codexAccessTokensTitle: {
            id: `chatgpt.workspace.permissions.codex_access_tokens.title`,
            defaultMessage: `Allow members to use Codex access tokens`
        },
        codexAccessTokensDescription: {
            id: `chatgpt.workspace.permissions.codex_access_tokens.description`,
            defaultMessage: `Allow members to create and use Codex access tokens for programmatic workflows.`
        },
        windowsComputerUseTitle: {
            id: `chatgpt.workspace.permissions.windows_computer_use.title`,
            defaultMessage: `Allow members to use Windows computer-use`
        },
        windowsComputerUseDescription: {
            id: `chatgpt.workspace.permissions.windows_computer_use.description`,
            defaultMessage: `Manage whether members can use Windows computer-use.`
        },
        personalAccessTokensSection: {
            id: `chatgpt.workspace.permissions.personal_access_tokens.section`,
            defaultMessage: `Access tokens`
        },
        personalAccessTokensTitle: {
            id: `chatgpt.workspace.permissions.personal_access_tokens.title`,
            defaultMessage: `Allow users to create personal access tokens`
        },
        personalAccessTokensDescription: {
            id: `chatgpt.workspace.permissions.personal_access_tokens.description`,
            defaultMessage: `Allow users to create personal access tokens for integrations and API access.`
        },
        accessTokenMaxTtlTitle: {
            id: `chatgpt.workspace.permissions.access_token_max_ttl.title`,
            defaultMessage: `Access token expiration limit`
        },
        accessTokenMaxTtlDescription: {
            id: `chatgpt.workspace.permissions.access_token_max_ttl.description`,
            defaultMessage: `Set the longest expiration members can choose for new access tokens. Existing tokens are unchanged.`
        },
        codexAgentNetworkTitle: {
            id: `+0TP+Y`,
            defaultMessage: `Allow Codex agent to access the internet`
        },
        codexAgentNetworkDescription: {
            id: `xIYqvo`,
            defaultMessage: `Allows environments to be created with agent internet access enabled when completing cloud tasks.`
        },
        unifiedContainerEgressTitle: {
            id: `sq2WHL`,
            defaultMessage: `Allow ChatGPT to access package repositories`
        },
        unifiedContainerEgressDescription: {
            id: `vBUlXE`,
            defaultMessage: `When enabled, ChatGPT can access package repositories to install dependencies when running code.`
        },
        toolRuntimeSectionTitle: {
            id: `P6rjg4`,
            defaultMessage: `Tool runtime`
        },
        codexDeviceCodeAuthTitle: {
            id: `chatgpt.workspace.permissions.device_code_auth.codex_and_office.label`,
            defaultMessage: `Enable device code sign-in for Codex, Excel, PowerPoint, and Word`
        },
        codexDeviceCodeAuthDescription: {
            id: `chatgpt.workspace.permissions.device_code_auth.codex_and_office.description`,
            defaultMessage: `Allow members to sign in to Codex in remote or headless environments, or to ChatGPT in Excel, PowerPoint, and Word through their browser. Exercise caution, as device codes can be phished. Never share a device code.`
        },
        codexSecurityTitle: {
            id: `zbZ3Ig`,
            defaultMessage: `Allow members to use Codex Security`
        },
        defenseFactoryTitle: {
            id: `chatgpt.workspace.permissions.defense_factory.use.label`,
            defaultMessage: `Allow members to use Codex Security Cloud`
        },
        codexSecurityDescription: {
            id: `xLYcZu`,
            defaultMessage: `Allow members to access Codex Security features.`
        },
        defenseFactoryDescription: {
            id: `chatgpt.workspace.permissions.defense_factory.use.description`,
            defaultMessage: `Allow members to access Codex Security Cloud.`
        },
        codexSecurityAdminTitle: {
            id: `o1pF9H`,
            defaultMessage: `Allow members to administer Codex Security`
        },
        defenseFactoryAdminTitle: {
            id: `chatgpt.workspace.permissions.defense_factory.admin.label`,
            defaultMessage: `Allow members to administer Codex Security Cloud`
        },
        codexSecurityAdminDescription: {
            id: `V4KHMM`,
            defaultMessage: `Allow members to administer Codex Security, including managing scan configurations in the workspace.`
        },
        defenseFactoryAdminDescription: {
            id: `chatgpt.workspace.permissions.defense_factory.admin.description`,
            defaultMessage: `Allow members to administer Codex Security Cloud, including managing scan configurations in the workspace.`
        },
        disabledReasonGithub: {
            id: `BgRzSC`,
            defaultMessage: `Disabled because there's no active Github App.`
        },
        recordTitle: {
            id: `AXkmJg`,
            defaultMessage: `Record`
        },
        recordDescription: {
            id: `l0y0CK`,
            defaultMessage: `Manage whether users can use ChatGPT to record, transcribe, and summarize longform audio. Recordings will be used solely for transcription purposes and will not be stored by OpenAI. <link>Learn more</link>`
        },
        recordReferencePastTranscriptsTitle: {
            id: `ZsmGaz`,
            defaultMessage: `Allow ChatGPT to reference past notes and transcripts`
        },
        recordReferencePastTranscriptsDescription: {
            id: `OlM3tz`,
            defaultMessage: `Allow members to reference past notes and transcripts in ChatGPT Record.`
        },
        deepResearchTitle: {
            id: `xd3kLo`,
            defaultMessage: `Deep research`
        },
        deepResearchDescription: {
            id: `b5K/+B`,
            defaultMessage: `Lets users run in-depth research with web-connected and multi-step reasoning tools.`
        },
        voiceAccessTitle: {
            id: `chatgpt.workspace.permissions.voice.access.toggle.label`,
            defaultMessage: `Voice`
        },
        voiceAccessDescription: {
            id: `chatgpt.workspace.permissions.voice.access.toggle.help_text`,
            defaultMessage: `Enables real-time voice interaction with ChatGPT.`
        },
        gptSectionTitle: {
            id: `lDlJlK`,
            defaultMessage: `GPTs`
        },
        gptSectionDescription: {
            id: `MMDdKL`,
            defaultMessage: `Choose which GPT access this role has`
        },
        gptCrudTitle: {
            id: `ySiNVL`,
            defaultMessage: `Create and manage GPTs`
        },
        gptCrudDescription: {
            id: `aCMqKu`,
            defaultMessage: `Allow members to create and manage GPTs`
        },
        gptPrivatePublishTitle: {
            id: `Vq4XWP`,
            defaultMessage: `Publish private GPT's immediately`
        },
        gptPrivatePublishDescription: {
            id: `QcVNtc`,
            defaultMessage: `Allow members to publish GPTs for their own use without admin approval`
        },
        gptShareWorkspaceTitle: {
            id: `arwdQz`,
            defaultMessage: `Publish GPTs to workspace`
        },
        gptShareWorkspaceDescription: {
            id: `O0HyJZ`,
            defaultMessage: `Allow members to publish GPTs they own to the workspace GPT Store`
        },
        gptShareExternalTitle: {
            id: `zl4S+n`,
            defaultMessage: `Publish GPTs externally`
        },
        gptShareExternalDescription: {
            id: `wXPceF`,
            defaultMessage: `Controls ability to share with others outside the org (via email or link)`
        },
        gptAllowAllThirdPartyTitle: {
            id: `ZYlBcx`,
            defaultMessage: `Allow all third party GPTs`
        },
        gptAllowAllThirdPartyDescription: {
            id: `NVpEpJ`,
            defaultMessage: `If enabled, user will have access to all 3P GPTs`
        },
        gptAllowSpecificThirdPartyTitle: {
            id: `7oaevm`,
            defaultMessage: `Allow owner-approved GPTs only`
        },
        gptAllowSpecificThirdPartyDescription: {
            id: `ubkAtB`,
            defaultMessage: `If enabled, user will have access to approved 3P GPTs`
        },
        gptAllowFirstPartyTitle: {
            id: `workspaceRolePermissions.gptAllowFirstPartyTitle`,
            defaultMessage: `Allow OpenAI GPTs`
        },
        gptAllowFirstPartyDescription: {
            id: `workspaceRolePermissions.gptAllowFirstPartyDescription`,
            defaultMessage: `Allow members with this role to use GPTs created by OpenAI`
        },
        projectSectionTitle: {
            id: `muqJOY`,
            defaultMessage: `Projects`
        },
        projectSectionDescription: {
            id: `oDGRtQ`,
            defaultMessage: `Choose which project access this role has`
        },
        projectCrudTitle: {
            id: `PDOJ0T`,
            defaultMessage: `Create and manage projects`
        },
        projectCrudDescription: {
            id: `MfPKqd`,
            defaultMessage: `Allow members to create and manage projects`
        },
        projectSharingTitle: {
            id: `EuQBCj`,
            defaultMessage: `Share projects`
        },
        projectSharingDescription: {
            id: `O7N1Q6`,
            defaultMessage: `Allow members to share projects. Note that if the receiving user is assigned a role that has disabled this setting, they will be unable to open the shared project.`
        },
        projectShareWorkspaceTitle: {
            id: `XDLxs0`,
            defaultMessage: `Share projects via workspace link`
        },
        projectShareWorkspaceDescription: {
            id: `ye5UVy`,
            defaultMessage: `Allow members to share projects with the entire workspace. When enabled, members can choose the 'Anyone at {workspaceName} with the link' option in the Share project dialog.`
        },
        sitesPreReleaseCardTitle: {
            id: `chatgpt.workspace.permissions.sites.early_access_card.title`,
            defaultMessage: `Sites`
        },
        sitesPreReleaseCardDescription: {
            id: `chatgpt.workspace.permissions.sites.early_access_card.description`,
            defaultMessage: `Simple site and app hosting, available in ChatGPT.`
        },
        skillsSectionTitle: {
            id: `NYg025`,
            defaultMessage: `Skills`
        },
        skillsSectionDescription: {
            id: `chatgpt.workspace.permissions.skills.section.description`,
            defaultMessage: `Manage who can use, create, share, and upload workspace skills.`
        },
        skillsAccessTitle: {
            id: `4a+gJm`,
            defaultMessage: `Enable skills`
        },
        skillsAccessDescription: {
            id: `pHsjbD`,
            defaultMessage: `Allow members to create and use skills.`
        },
        skillsRbacAccessDescription: {
            id: `chatgpt.workspace.permissions.skills.access.description`,
            defaultMessage: `Allow members to use skills.`
        },
        skillsCreateTitle: {
            id: `chatgpt.workspace.permissions.skills.create.title`,
            defaultMessage: `Create skills`
        },
        skillsCreateDescription: {
            id: `chatgpt.workspace.permissions.skills.create.description`,
            defaultMessage: `Allow members to create skills with chat or the editor.`
        },
        skillsUploadTitle: {
            id: `chatgpt.workspace.permissions.skills.upload.title`,
            defaultMessage: `Upload skills`
        },
        skillsUploadDescription: {
            id: `chatgpt.workspace.permissions.skills.upload.description`,
            defaultMessage: `Allow members to upload skill files in the skill directory`
        },
        skillsShareTitle: {
            id: `lbk/Vy`,
            defaultMessage: `Share skills`
        },
        skillsShareDescription: {
            id: `chatgpt.workspace.permissions.skills.sharing.toggle.help_text`,
            defaultMessage: `Allow members to share skills with individual workspace members and groups.`
        },
        skillsShareWorkspaceTitle: {
            id: `xnvmgF`,
            defaultMessage: `Publish skills to workspace`
        },
        skillsShareWorkspaceDescription: {
            id: `Co2aDT`,
            defaultMessage: `Allow members to publish skills to the workspace.`
        },
        skillsEnabledShareTitle: {
            id: `0RUaI2`,
            defaultMessage: `Enable skills installing`
        },
        skillsEnableShareDescription: {
            id: `TUOFr5`,
            defaultMessage: `Allow members to install skills for other workspace members.`
        },
        sharingTitle: {
            id: `8DIoJe`,
            defaultMessage: `Sharing`
        },
        memberVisibilityTitle: {
            id: `y3ObUc`,
            defaultMessage: `Member & group visibility`
        },
        memberRoleViewTitle: {
            id: `322WJh`,
            defaultMessage: `View workspace members and groups`
        },
        memberRoleViewDescription: {
            id: `PVt0a7`,
            defaultMessage: `Allow members to view workspace member and group lists, including assigned roles.`
        },
        dataExportTitle: {
            id: `mip75S`,
            defaultMessage: `Data export`
        },
        dataExportAccessTitle: {
            id: `1sXNv+`,
            defaultMessage: `Allow members to export their own data`
        },
        dataExportAccessDescription: {
            id: `Lr6a2q`,
            defaultMessage: `Allow members to export their own ChatGPT data from Settings > Data Controls.`
        },
        memoryTitle: {
            id: `h6Ufv3`,
            defaultMessage: `Memory`
        },
        memoryDescription: {
            id: `chatgpt.workspace_permissions.memory.memory_access.description`,
            defaultMessage: `Allow members to use memory. This allows ChatGPT to become more helpful by remembering details and preferences across chats. <link>Learn more</link>`
        },
        improvedMemoryAccessTitle: {
            id: `chatgpt.workspace_permissions.memory.improved_memory.title`,
            defaultMessage: `Use improved memory`
        },
        improvedMemoryAccessDescription: {
            id: `chatgpt.workspace_permissions.memory.improved_memory.description`,
            defaultMessage: `Allow members to use the improved memory experience. ChatGPT’s improved memory automatically stays up to date, leading to more relevant and useful replies.`
        },
        improvedMemoryName: {
            id: `chatgpt.workspace_permissions.memory.improved_memory.name`,
            defaultMessage: `Improved memory`
        },
        canvasCodeExecutionTitle: {
            id: `chatgpt.workspace_permissions.canvas_code_execution.title`,
            defaultMessage: `Code execution`
        },
        canvasCodeExecutionDescription: {
            id: `chatgpt.workspace_permissions.canvas_code_execution.description`,
            defaultMessage: `Allow members to run code snippets within Canvas and code blocks.`
        },
        canvasCodeNetworkAccessTitle: {
            id: `chatgpt.workspace_permissions.canvas_code_network_access.title`,
            defaultMessage: `Code network access`
        },
        canvasCodeNetworkAccessDescription: {
            id: `chatgpt.workspace_permissions.canvas_code_network_access.description`,
            defaultMessage: `Allow members to execute code with network access within Canvas and code blocks.`
        },
        thisFeatureDisabledDueToSandboxMode: {
            id: `SGmc+a`,
            defaultMessage: `This feature is disabled in lockdown mode.`
        },
        thisFeatureDisabledForFedrampWorkspaces: {
            id: `4ASInS`,
            defaultMessage: `This feature is disabled for FedRAMP workspaces.`
        },
        videoScreenSharingTitle: {
            id: `E7/1lI`,
            defaultMessage: `Allow members to share their screen or video while using Voice`
        },
        videoScreenSharingDescription: {
            id: `BSZqGq`,
            defaultMessage: `Allow members to share their screen or video while using Voice`
        },
        canvasTitle: {
            id: `chatgpt.workspace_permissions.canvas_code_blocks.section.title`,
            defaultMessage: `Canvas & code blocks`
        },
        searchTitle: {
            id: `rY8bdY`,
            defaultMessage: `Search`
        },
        voiceTitle: {
            id: `e83f8K`,
            defaultMessage: `Voice`
        },
        teenExperiencesTitle: {
            id: `chatgpt.permissions.teen_experiences.section.title`,
            defaultMessage: `Teen experiences`
        },
        pedagogyModeTitle: {
            id: `chatgpt.permissions.teen_experiences.study_mode.title`,
            defaultMessage: `Default to Study Mode in main conversations`
        },
        pedagogyModeDescription: {
            id: `chatgpt.permissions.teen_experiences.study_mode.help_text`,
            defaultMessage: `Automatically apply Study Mode in main ChatGPT conversations. This does not apply to GPTs and Projects. <link>Learn more</link>`
        },
        u18ModelPolicyTitle: {
            id: `chatgpt.permissions.teen_experiences.teen_content_filters.title`,
            defaultMessage: `Apply teen content filters`
        },
        u18ModelPolicyDescription: {
            id: `chatgpt.permissions.teen_experiences.teen_content_filters.help_text`,
            defaultMessage: `Reduce exposure to sensitive content for teens. <link>Learn more</link>`
        },
        codexLocal: {
            id: `chatgpt.workspace.permissions.codex_and_work_local.section.title`,
            defaultMessage: `Codex and Work Local`
        },
        codexLocalCodexOnly: {
            id: `chatgpt.workspace.permissions.codex_local.section.title`,
            defaultMessage: `Codex Local`
        },
        codex: {
            id: `8AIfDC`,
            defaultMessage: `Codex Cloud`
        },
        codexAdminSection: {
            id: `hynOVM`,
            defaultMessage: `Codex`
        },
        recordAccessTitle: {
            id: `vFQuqV`,
            defaultMessage: `Allow members to use ChatGPT record`
        },
        codeOnMacTitle: {
            id: `/WX4Ho`,
            defaultMessage: `Code on macOS`
        },
        shareChatAndTasksWithWorkspaceTitle: {
            id: `chatgpt.workspace.permissions.sharing.share_workspace.with_tasks.label`,
            defaultMessage: `Members can share chats and scheduled tasks in the workspace.`
        },
        shareChatProjectTitle: {
            id: `LQ2EVd`,
            defaultMessage: `Allow members to share a chat, canvas, or project with...`
        },
        memoryAccessTitle: {
            id: `chatgpt.workspace_permissions.memory.memory_access.title`,
            defaultMessage: `Enable memory`
        },
        githubConnectorDescription: {
            id: `0H6Nf+`,
            defaultMessage: `Codex Cloud requires the Github App.{br}You can enable it in <settingsLink>Apps</settingsLink>`
        },
        workWithCodeOnMacTitle: {
            id: `RKSSiR`,
            defaultMessage: `Allow code edits on macOS`
        },
        workWithCodeOnMacDescription: {
            id: `eixe1y`,
            defaultMessage: `Control whether users in this workspace can allow ChatGPT to edit code files when using the macOS desktop app. This lets ChatGPT read and edit the content of specific apps on their desktop to provide better responses. <link>Learn more</link>`
        },
        appleIntelligenceTitle: {
            id: `b5tisR`,
            defaultMessage: `Allow members to link Apple Intelligence`
        },
        appleIntelligenceDescription: {
            id: `b2Jsop`,
            defaultMessage: `Manage whether members can link with Apple Intelligence.`
        },
        appleIntelligenceMDMTitle: {
            id: `0wNa7q`,
            defaultMessage: `Apple Intelligence MDM`
        },
        appleIntelligenceMDMDescription: {
            id: `ZgxOdq`,
            defaultMessage: `Only allow linking this workspace with Apple Intelligence on MDM managed devices.`
        },
        imageGenSectionTitle: {
            id: `fKZG6M`,
            defaultMessage: `Images`
        },
        agentModeTitle: {
            id: `t4P9Ws`,
            defaultMessage: `Agent mode`
        },
        agentModeDescription: {
            id: `rE0L/V`,
            defaultMessage: `Allow members to use agent mode. <link>Learn more</link>`
        },
        agentModeDisabledReason: {
            id: `/E6A5q`,
            defaultMessage: `Agent mode is disabled because Web search is not enabled.`
        },
        deepResearchDisabledReason: {
            id: `QvYF92`,
            defaultMessage: `Deep research is disabled because Web search is not enabled.`
        },
        connectedDataSectionTitle: {
            id: `chatgpt.workspace.permissions.plugins_connected_data.section.title`,
            defaultMessage: `Plugins & connected data`
        },
        fedrampAppsSectionTitle: {
            id: `chatgpt.workspace.permissions.fedramp.apps.section.title`,
            defaultMessage: `Apps`
        },
        createMcpConnectorTitle: {
            id: `chatgpt.workspace.permissions.plugins_connected_data.create_plugins_with_mcps.toggle.label`,
            defaultMessage: `Create plugins with MCPs`
        },
        createMcpConnectorDescription: {
            id: `YHq4B3`,
            defaultMessage: `If enabled, user will have access to developer mode and creation of custom MCP connectors`
        },
        pluginRoleTitle: {
            id: `chatgpt.workspace_permissions.plugins.title`,
            defaultMessage: `Allow members to use plugins`
        },
        pluginRoleDescription: {
            id: `chatgpt.workspace_permissions.plugins.description`,
            defaultMessage: `Allow members to use apps and plugins.`
        },
        fedrampAppsRoleTitle: {
            id: `chatgpt.workspace.permissions.fedramp.apps.use.label`,
            defaultMessage: `Use apps`
        },
        fedrampAppsRoleDescription: {
            id: `chatgpt.workspace.permissions.fedramp.apps.use.description`,
            defaultMessage: `Allow members to use apps available to the workspace.`
        },
        enhancedCitationsTitle: {
            id: `uHoria`,
            defaultMessage: `Trusted clinical search`
        },
        enhancedCitationsDescription: {
            id: `FLNgL8`,
            defaultMessage: `Allow members to use Trusted clinical search.`
        },
        enableEnhancedCitationsTitle: {
            id: `Ss+X24`,
            defaultMessage: `Enable Trusted clinical search`
        },
        enableEnhancedCitationsDescription: {
            id: `Ehv+h4`,
            defaultMessage: `Enabling Trusted clinical search will allow members to access features that surface evidence-based results.`
        },
        basisPointsTitle: {
            id: `Yfn3Ob`,
            defaultMessage: `ChatGPT for Excel and Sheets`
        },
        basisPointsDescription: {
            id: `JwrMm+`,
            defaultMessage: `Allow members to access ChatGPT for Excel and Sheets.`
        },
        enableBasisPointsTitle: {
            id: `BPFfNn`,
            defaultMessage: `Enable ChatGPT for Excel and Sheets`
        },
        enableBasisPointsDescription: {
            id: `4QVo9l`,
            defaultMessage: `When enabled, members with this role can use ChatGPT for Excel and Sheets in supported workspaces.`
        },
        basisPointsPowerPointTitle: {
            id: `chatgpt.workspace.permissions.powerpoint.section.title`,
            defaultMessage: `ChatGPT for PowerPoint`
        },
        basisPointsPowerPointDescription: {
            id: `chatgpt.workspace.permissions.powerpoint.section.description`,
            defaultMessage: `Allow members to access ChatGPT for PowerPoint.`
        },
        enableBasisPointsPowerPointTitle: {
            id: `U+Yl9W`,
            defaultMessage: `Enable ChatGPT for PowerPoint`
        },
        enableBasisPointsPowerPointDescription: {
            id: `QY0VO3`,
            defaultMessage: `When enabled, members with this role can use ChatGPT for PowerPoint in supported workspaces.`
        },
        basisPointsWordTitle: {
            id: `chatgpt.workspace.permissions.word.section.title`,
            defaultMessage: `ChatGPT for Word`
        },
        basisPointsWordDescription: {
            id: `chatgpt.workspace.permissions.word.section.description`,
            defaultMessage: `Allow members to access ChatGPT for Word.`
        },
        enableBasisPointsWordTitle: {
            id: `chatgpt.workspace.permissions.word.toggle.label`,
            defaultMessage: `Enable ChatGPT for Word`
        },
        enableBasisPointsWordDescription: {
            id: `chatgpt.workspace.permissions.word.toggle.description`,
            defaultMessage: `When enabled, members with this role can use ChatGPT for Word in supported workspaces.`
        },
        hipaaNotCoveredWarning: {
            id: `workspaceSettings.hipaaNotCoveredWarning`,
            defaultMessage: `This feature is not covered under your BAA. PHI should not be entered when using this feature.`
        }
    }), _n = Q.improvedMemoryName, vn = Q.hipaaNotCoveredWarning, $ = {
        isCovered: !0
    }, yn = `3583985244`, bn = `permissions`, xn = e => typeof e == `object` && !!e, Sn = e => {
        if (typeof e == `string`) return e;
        if (xn(e) && !(typeof e.permission != `string` || e.default_enable !== void 0 && typeof e.default_enable != `boolean`)) return e.permission
    }, Cn = () => {
        let e = g(yn).get(bn, []);
        if (!Array.isArray(e)) return new Set;
        let t = new Set;
        for (let n of e) {
            let e = Sn(n);
            if (e == null) return new Set;
            t.add(e)
        }
        return t
    }, wn = e => e != null && Cn().has(e), Tn = ({
        hipaaMetadata: e,
        rbac: t,
        permissionName: n
    }) => t === !0 ? wn(n) ? void 0 : vn : e?.isCovered === !0 ? void 0 : vn, En = [h.SearchAccess, h.DeepResearchAccess, h.AgentModeAccess, h.CodexAgentNetworkAccess, xe, we, ye, h.CanvasCodeNetworkAccess, h.UploadWorkspacePlugins, h.UploadWorkspacePluginsWithCustomMcpServers, h.ShareWorkspacePlugins, h.PublishWorkspacePlugins], Dn = ({
        entry: e
    }) => !!e.nestedKey && !e.renderDisabledToggleAsOff, On = e => ({
        ...e,
        hipaaMetadata: $
    }), kn = e => e.map(On), An = () => ({
        rbac: !0,
        title: Q.fileLibraryAutoReferenceTitle,
        description: Q.fileLibraryAutoReferenceDescription,
        permissionName: h.FileLibraryAutoReferenceAccess
    }), jn = new Set([h.ShareChatWithWorkspace, h.MemberRoleView, h.CanvasCodeExecutionAccess, h.SearchAccess, h.ImageGenAccess, h.GPT52ReasoningAccess, h.GPT52ProAccess, h.GPT51ReasoningAccess, h.GPT51ProAccess, h.ReasoningModelAccess, h.ProModelAccess, h.GPTO3Access, h.GPT41Access, h.GPTO4MiniAccess, h.CrudGPT, h.PrivatePublishGPT, h.ShareWorkspaceGPT, h.ShareExternalGPT, h.AllowAllThirdPartyGPT, h.AllowSpecificThirdPartyGPT, h.AllowFirstPartyGPT, h.CrudProject, h.ShareProject, h.ShareWorkspaceProject, h.SkillsAccess, h.SkillsCreate, h.SkillsUpload, h.SkillsShare, h.SkillsShareWorkspace, h.SkillsEnableShareWorkspace, h.EnhancedCitations, h.MemoryAccess, h.AllowCodexLocalAccess, h.BasisPointsAccess]), Mn = [h.UseConnector, `codex_github_connector`], Nn = [h.UploadWorkspacePlugins, h.ShareWorkspacePlugins, h.PublishWorkspacePlugins], Pn = new Set([`share_chat`, `memory_access`, `rentention_policy`, `apple_intelligence_access`, `apple_intelligence_mdm_access`, `canvas_code_execution`, `web_search`, `codex_local_access`, `unified_container_internet_egress`]), Fn = (e, t, n = !1) => {
        let r = new Set([...jn, ...t ? Mn : [], ...n ? Nn : []]);
        for (let t of e) t.rbac && t.permissionName === h.AllowCodexLocalAccess && (t.title = Q.codexCliTitleCodexOnly, t.description = Q.codexCliTitleCodexOnly, t.fedrampCodexLocalCopy = !0), (t.rbac ? !r.has(t.permissionName) : !Pn.has(t.settingName)) && (t.disabled = !0, t.disabledReason = Q.thisFeatureDisabledForFedrampWorkspaces, t.renderDisabledToggleAsOff = !0)
    }, In = (e, t) => {
        let n = e.map(e => ({
            ...e
        }));
        return t && Fn(n, !1), n
    }, Ln = new Set([k, De, ge]), Rn = () => {
        let e = _e();
        return {
            ...e,
            entries: e.entries.map(e => e.rbac && Ln.has(e.permissionName) ? On(e) : e)
        }
    }, zn = ({
        isRbacEnabled: e,
        includeBetaSettingsAdvanced: t,
        isQuorumPlanType: n
    }) => n ? null : {
        title: Q.sharingTitle,
        entries: kn(t && e ? [{
            rbac: !0,
            title: Q.shareChatAndTasksWithWorkspaceTitle,
            permissionName: h.ShareChatWithWorkspace
        }] : [{
            rbac: !1,
            title: Q.shareChatProjectTitle,
            settingName: `share_chat`
        }])
    }, Bn = () => ({
        title: Q.memberVisibilityTitle,
        entries: kn([{
            rbac: !0,
            title: Q.memberRoleViewTitle,
            description: Q.memberRoleViewDescription,
            permissionName: h.MemberRoleView
        }])
    }), Vn = () => ({
        title: Q.desktopAppBetaSectionTitle,
        entries: [{
            rbac: !0,
            title: Q.desktopAppBetaPermissionTitle,
            description: Q.desktopAppBetaPermissionDescription,
            permissionName: h.DesktopAppBetaFeaturesAccess
        }]
    }), Hn = () => ({
        title: Q.dataExportTitle,
        availableForEnterprise: !0,
        entries: [{
            rbac: !0,
            title: Q.dataExportAccessTitle,
            description: Q.dataExportAccessDescription,
            permissionName: h.DataExportAccess
        }]
    }), Un = (e = `legacy`, t = !1) => {
        let n = {
            rbac: !0,
            title: Q.libraryWorkspaceLinksTitle,
            description: Q.libraryWorkspaceLinksDescription,
            permissionName: h.LibraryWorkspaceLinkSharingAccess
        };
        return e === `role_only_v1` ? [{
            rbac: !0,
            title: Q.librarySharingRoleOnlyTitle,
            description: Q.librarySharingRoleOnlyDescription,
            permissionName: h.LibrarySharingManagementAccess
        }, ...t ? [n] : []] : e === `legacy` ? [{
            rbac: !1,
            title: Q.librarySharingPolicyTitle,
            description: Q.librarySharingDescription,
            settingName: `library_sharing_enabled`
        }, {
            rbac: !0,
            title: Q.librarySharingManagementTitle,
            description: Q.librarySharingManagementDescription,
            permissionName: h.LibrarySharingManagementAccess
        }, ...t ? [n] : []] : []
    }, Wn = ({
        isRbacEnabled: e
    }) => ({
        title: Q.fileLibrarySectionTitle,
        description: Q.fileLibrarySectionDescription,
        descriptionValues: {
            link: e => (0, X.jsx)(Z, {
                chunk: e,
                href: gn
            })
        },
        entries: [e ? An() : {
            rbac: !1,
            title: Q.fileLibraryAutoReferenceTitle,
            description: Q.fileLibraryAutoReferenceDescription,
            settingName: `file_library_auto_reference`
        }]
    }), Gn = () => ({
        title: Q.taskSuggestionsSectionTitle,
        availableForEnterprise: !0,
        entries: [{
            rbac: !1,
            title: Q.taskSuggestionsTitle,
            description: Q.taskSuggestionsDescription,
            settingName: `task_suggestions`
        }]
    }), Kn = ({
        isRbacEnabled: e,
        isM3mEnabled: t
    }) => {
        let n = e && t,
            r = {
                title: Q.memoryAccessTitle,
                description: Q.memoryDescription,
                descriptionValues: {
                    link: e => (0, X.jsx)(Z, {
                        chunk: e,
                        href: `https://help.openai.com/en/articles/8590148-memory-in-chatgpt-faq`
                    })
                }
            },
            i = On(n ? {
                ...r,
                rbac: !0,
                permissionName: h.MemoryAccess,
                permissionNamesToRemoveWhenDisabled: [h.ImprovedMemoryAccess]
            } : {
                ...r,
                rbac: !1,
                settingName: `memory_access`
            }),
            a = n ? {
                rbac: !0,
                title: Q.improvedMemoryAccessTitle,
                description: Q.improvedMemoryAccessDescription,
                permissionName: h.ImprovedMemoryAccess,
                dependsOnPermissionName: h.MemoryAccess
            } : {
                rbac: !1,
                title: Q.improvedMemoryAccessTitle,
                description: Q.improvedMemoryAccessDescription,
                settingName: `m3m_workspace_enabled`
            };
        return {
            title: Q.memoryTitle,
            gaOptOut: t ? {
                feature: l.M3M_GA_OPT_OUT,
                featureName: Q.improvedMemoryName
            } : void 0,
            entries: [i, ...t ? [a] : []]
        }
    }, qn = ({
        isRbacEnabled: e,
        includeBetaSettingsAdvanced: t
    }) => ({
        title: Q.canvasTitle,
        entries: e && t ? [{
            rbac: !0,
            title: Q.canvasCodeExecutionTitle,
            description: Q.canvasCodeExecutionDescription,
            hipaaMetadata: $,
            permissionName: h.CanvasCodeExecutionAccess
        }, {
            rbac: !0,
            title: Q.canvasCodeNetworkAccessTitle,
            description: Q.canvasCodeNetworkAccessDescription,
            permissionName: h.CanvasCodeNetworkAccess
        }] : [{
            rbac: !1,
            title: Q.canvasCodeExecutionTitle,
            description: Q.canvasCodeExecutionDescription,
            hipaaMetadata: $,
            settingName: `canvas_code_execution`
        }, {
            rbac: !1,
            title: Q.canvasCodeNetworkAccessTitle,
            description: Q.canvasCodeNetworkAccessDescription,
            settingName: `canvas_code_network_access`
        }]
    }), Jn = ({
        showUnifiedContainerEgress: e
    }) => e ? {
        title: Q.toolRuntimeSectionTitle,
        availableForEnterprise: !0,
        entries: [{
            rbac: !1,
            title: Q.unifiedContainerEgressTitle,
            description: Q.unifiedContainerEgressDescription,
            settingName: `unified_container_internet_egress`
        }]
    } : null, Yn = ({
        isRbacEnabled: e,
        includeBetaSettings: t,
        includeAgentMode: n,
        isQuorum: r,
        isSearchEnabled: i
    }) => ({
        title: Q.searchTitle,
        entries: [...t && e ? [{
            rbac: !0,
            title: Q.webSearchTitle,
            description: r ? Q.webSearchDescriptionOfflineOnly : Q.webSearchDescription,
            descriptionValues: {
                link: e => (0, X.jsx)(Z, {
                    chunk: e,
                    href: `https://help.openai.com/en/articles/10093903-chatgpt-search-for-enterprise-and-edu`
                })
            },
            hipaaMetadata: $,
            permissionName: h.SearchAccess
        }] : [{
            rbac: !1,
            title: Q.webSearchTitle,
            description: r ? Q.webSearchDescriptionOfflineOnly : Q.webSearchDescription,
            descriptionValues: {
                link: e => (0, X.jsx)(Z, {
                    chunk: e,
                    href: `https://help.openai.com/en/articles/10093903-chatgpt-search-for-enterprise-and-edu`
                })
            },
            hipaaMetadata: $,
            settingName: `web_search`
        }], {
            rbac: !0,
            title: Q.deepResearchTitle,
            description: Q.deepResearchDescription,
            hipaaMetadata: $,
            permissionName: h.DeepResearchAccess,
            disabled: !i,
            disabledReason: i ? void 0 : Q.deepResearchDisabledReason
        }, ...n ? [{
            rbac: !0,
            title: Q.agentModeTitle,
            description: Q.agentModeDescription,
            descriptionValues: {
                link: e => (0, X.jsx)(Z, {
                    chunk: e,
                    href: `https://help.openai.com/en/articles/11752874-chatgpt-agent`
                })
            },
            permissionName: h.AgentModeAccess,
            disabled: !i,
            disabledReason: i ? void 0 : Q.agentModeDisabledReason
        }] : []]
    }), Xn = {
        title: Q.imageGenSectionTitle,
        entries: kn([{
            rbac: !0,
            title: Q.imageGenTitle,
            description: Q.imageGenDescription,
            permissionName: h.ImageGenAccess
        }])
    }, Zn = ({
        showPedagogyModePermission: e,
        showU18ModelPolicyPermission: t
    }) => {
        let n = a([e ? {
            rbac: !0,
            title: Q.pedagogyModeTitle,
            description: Q.pedagogyModeDescription,
            hipaaMetadata: $,
            descriptionValues: {
                link: e => (0, X.jsx)(Z, {
                    chunk: e,
                    href: mn
                })
            },
            permissionName: h.PedagogyModeEnabled
        } : null, t ? {
            rbac: !0,
            title: Q.u18ModelPolicyTitle,
            description: Q.u18ModelPolicyDescription,
            descriptionValues: {
                link: e => (0, X.jsx)(Z, {
                    chunk: e,
                    href: hn
                })
            },
            permissionName: h.U18ModelPolicyEnabled
        } : null]);
        return n.length === 0 ? null : {
            title: Q.teenExperiencesTitle,
            availableForQuorum: !0,
            entries: n
        }
    }, Qn = ({
        isRbacEnabled: e,
        includeBetaSettingsAdvanced: t
    }) => ({
        title: Q.voiceTitle,
        entries: [...e ? [{
            rbac: !0,
            title: Q.voiceAccessTitle,
            description: Q.voiceAccessDescription,
            hipaaMetadata: $,
            permissionName: h.VoiceAccess,
            permissionNamesToRemoveWhenDisabled: [h.VideoScreenSharingAccess]
        }] : [], ...t && e ? [{
            rbac: !0,
            title: Q.videoScreenSharingTitle,
            description: Q.videoScreenSharingDescription,
            permissionName: h.VideoScreenSharingAccess,
            dependsOnPermissionName: h.VoiceAccess
        }] : [{
            rbac: !1,
            title: Q.videoScreenSharingTitle,
            description: Q.videoScreenSharingDescription,
            settingName: `video_screen_sharing`
        }]]
    }), $n = () => ({
        rbac: !1,
        title: Q.accessTokenMaxTtlTitle,
        description: Q.accessTokenMaxTtlDescription,
        settingName: `access_token_max_ttl`,
        hipaaMetadata: $
    }), er = ({
        isRbacEnabled: e,
        showSettingBackedPersonalAccessTokens: t,
        showAccessTokenMaxTtl: n
    }) => ({
        title: Q.personalAccessTokensSection,
        availableForEnterprise: !0,
        entries: a([e ? {
            rbac: !0,
            title: Q.personalAccessTokensTitle,
            description: Q.personalAccessTokensDescription,
            permissionName: h.ProgrammaticAgentIdentitiesAccess
        } : t ? {
            rbac: !1,
            title: Q.personalAccessTokensTitle,
            description: Q.personalAccessTokensDescription,
            settingName: `personal_access_tokens`
        } : null, n ? $n() : null])
    }), tr = () => ({
        rbac: !0,
        title: Q.codexAccessTokensTitle,
        description: Q.codexAccessTokensDescription,
        permissionName: h.ProgrammaticAgentIdentitiesAccess
    }), nr = ({
        isRbacEnabled: e,
        includeBetaSettings: t,
        includeCodexSecurity: n,
        githubConnectorEnabled: r,
        codexOptimizeEnabled: i = !1,
        isCodexEnabledInRBACRole: a,
        showDeviceCodeAuthToggle: o,
        showLegacyCodexAccessTokensPermission: s,
        showAccessTokenMaxTtl: c,
        additionalCodexLocalEntries: l,
        isWorkLocalIndependentControlsEnabled: u
    }) => {
        let d = n && y(`870690999`),
            f = y(`3769444934`),
            p = !f && !r && !a,
            m = [],
            g = [],
            _ = [];
        return t && e ? (g.push({
            rbac: !0,
            title: Q.codexTitle,
            description: Q.codexDescription,
            permissionName: h.AllowCodexAccess,
            permissionNamesToAddWhenEnabled: f ? [h.CodexManageWorkspaceEnvironments, h.CodexSlackPostingAccess] : void 0,
            disabled: p,
            disabledReason: p ? Q.disabledReasonGithub : void 0
        }), _.push({
            rbac: !0,
            title: Q.codexAdminTitle,
            description: Q.codexAdminDescription,
            permissionName: h.CodexAdminAccess
        }), m.push({
            rbac: !0,
            title: u ? Q.codexCliTitleCodexOnly : Q.codexCliTitle,
            description: u ? Q.codexCliDescriptionCodexOnly : Q.codexCliDescription,
            permissionName: h.AllowCodexLocalAccess,
            permissionNamesToRemoveWhenDisabled: [h.AllowComputerHistory],
            codexLocalOnly: u
        }), s && m.push(tr()), c && m.push($n()), m.push(...l), m.push({
            rbac: !0,
            title: Q.windowsComputerUseTitle,
            description: Q.windowsComputerUseDescription,
            permissionName: h.WindowsComputerUseAccess
        }), f || g.push({
            rbac: !0,
            title: Q.codexSlackPostingTitle,
            description: Q.codexSlackPostingDescription,
            permissionName: h.CodexSlackPostingAccess
        }), n && (g.push({
            rbac: !0,
            title: d ? Q.defenseFactoryTitle : Q.codexSecurityTitle,
            description: d ? Q.defenseFactoryDescription : Q.codexSecurityDescription,
            permissionName: h.CodexSecurityAccess
        }), g.push({
            rbac: !0,
            title: d ? Q.defenseFactoryAdminTitle : Q.codexSecurityAdminTitle,
            description: d ? Q.defenseFactoryAdminDescription : Q.codexSecurityAdminDescription,
            permissionName: h.CodexSecurityAdminAccess
        })), o && m.push({
            rbac: !0,
            title: Q.codexDeviceCodeAuthTitle,
            description: Q.codexDeviceCodeAuthDescription,
            permissionName: h.CodexDeviceCodeAuthAccess,
            enableConfirmation: rt
        })) : (g.push({
            rbac: !1,
            title: Q.codexTitle,
            description: Q.codexDescription,
            settingName: `codex_access`
        }), _.push({
            rbac: !1,
            title: Q.codexAdminTitle,
            description: Q.codexAdminDescription,
            settingName: `codex_admin`,
            hipaaMetadata: $
        }), m.push({
            rbac: !1,
            title: u ? Q.codexCliTitleCodexOnly : Q.codexCliTitle,
            description: u ? Q.codexCliDescriptionCodexOnly : Q.codexCliDescription,
            settingName: `codex_local_access`,
            hipaaMetadata: $,
            codexLocalOnly: u
        }), s && m.push(tr()), c && m.push($n()), m.push(...l), f || g.push({
            rbac: !1,
            title: Q.codexSlackPostingTitle,
            description: Q.codexSlackPostingDescription,
            settingName: `codex_slack_posting`
        }), n && (g.push({
            rbac: !1,
            title: d ? Q.defenseFactoryTitle : Q.codexSecurityTitle,
            description: d ? Q.defenseFactoryDescription : Q.codexSecurityDescription,
            settingName: `codex_security`
        }), g.push({
            rbac: !1,
            title: d ? Q.defenseFactoryAdminTitle : Q.codexSecurityAdminTitle,
            description: d ? Q.defenseFactoryAdminDescription : Q.codexSecurityAdminDescription,
            settingName: `codex_security_admin`
        })), o && m.push({
            rbac: !1,
            title: Q.codexDeviceCodeAuthTitle,
            description: Q.codexDeviceCodeAuthDescription,
            settingName: `codex_device_code_auth`,
            hipaaMetadata: $
        })), f && g.push(Ze()), e && i && (g.push(Fe()), _.push(Ie())), [{
            title: Q.codexAdminSection,
            entries: _
        }, {
            title: u ? Q.codexLocalCodexOnly : Q.codexLocal,
            anchorId: `codex-local-permissions`,
            availableForEnterprise: !0,
            entries: m
        }, {
            title: Q.codex,
            entries: [...f ? [] : [{
                rbac: !0,
                title: `GitHub App`,
                description: Q.githubConnectorDescription,
                descriptionValues: {
                    br: (0, X.jsx)(`br`, {}),
                    settingsLink: e => (0, X.jsx)(ne, {
                        to: `/admin/apps`,
                        className: pn,
                        children: e
                    })
                },
                permissionName: `codex_github_connector`
            }], ...g, ...f ? [] : t && e ? [{
                rbac: !0,
                title: Q.codexAgentNetworkTitle,
                description: Q.codexAgentNetworkDescription,
                permissionName: h.CodexAgentNetworkAccess
            }] : [{
                rbac: !1,
                title: Q.codexAgentNetworkTitle,
                description: Q.codexAgentNetworkDescription,
                settingName: `codex_agent_network`
            }]]
        }]
    }, rr = () => ({
        title: Q.workspaceReferralsEnabledSection,
        availableForEnterprise: !0,
        entries: [{
            rbac: !1,
            title: Q.workspaceReferralsEnabledTitle,
            description: Q.workspaceReferralsEnabledDescription,
            settingName: `workspace_referrals_enabled`
        }]
    }), ir = (e, t, n) => ({
        title: Q.memberProfilesEnabledSection,
        availableForEnterprise: !0,
        entries: [...e ? [{
            rbac: !1,
            title: Q.memberProfilesEnabledTitle,
            description: Q.memberProfilesEnabledDescription,
            settingName: `member_profiles_enabled`
        }] : [], ...n ? [{
            rbac: !1,
            title: Q.memberProfileActivityTitle,
            description: Q.memberProfileActivityDescription,
            settingName: `member_profile_activity_enabled`
        }] : [], ...t ? [{
            rbac: !1,
            title: Q.memberProfilesSharingTitle,
            description: Q.memberProfilesSharingDescription,
            settingName: `member_profiles_sharing`
        }] : []]
    }), ar = ({
        isRbacEnabled: e,
        isInSupportedDrRegion: t,
        includeBetaSettings: n
    }) => ({
        title: Q.recordTitle,
        availableForEnterprise: !0,
        description: Q.recordDescription,
        descriptionValues: {
            link: e => (0, X.jsx)(Z, {
                chunk: e,
                href: `https://help.openai.com/en/articles/11487532`
            })
        },
        entries: n && e ? [{
            rbac: !0,
            title: Q.recordAccessTitle,
            hipaaMetadata: $,
            permissionName: h.HiveAccess
        }, ...t ? [{
            rbac: !0,
            title: Q.recordReferencePastTranscriptsTitle,
            description: Q.recordReferencePastTranscriptsDescription,
            hipaaMetadata: $,
            permissionName: h.HiveKnowledgeRetrievalAccess
        }] : []] : [{
            rbac: !1,
            title: Q.recordAccessTitle,
            hipaaMetadata: $,
            settingName: `record_access`
        }, ...t ? [{
            rbac: !1,
            title: Q.recordReferencePastTranscriptsTitle,
            description: Q.recordReferencePastTranscriptsDescription,
            hipaaMetadata: $,
            settingName: `record_reference_past_transcripts`
        }] : []]
    }), or = ({
        isAppleIntelligenceToggleEnabled: e,
        isAppleIntelligenceMdmToggleEnabled: t
    }) => ({
        title: Q.codeOnMacTitle,
        entries: [{
            rbac: !1,
            title: Q.workWithCodeOnMacTitle,
            description: Q.workWithCodeOnMacDescription,
            descriptionValues: {
                link: e => (0, X.jsx)(Z, {
                    chunk: e,
                    href: `https://help.openai.com/en/articles/10119604-work-with-apps-on-macos`
                })
            },
            hipaaMetadata: $,
            settingName: `apps_access`
        }, ...e ? [{
            rbac: !1,
            title: Q.appleIntelligenceTitle,
            description: Q.appleIntelligenceDescription,
            hipaaMetadata: $,
            settingName: `apple_intelligence_access`
        }] : [], ...e && t ? [{
            rbac: !1,
            title: Q.appleIntelligenceMDMTitle,
            description: Q.appleIntelligenceMDMDescription,
            settingName: `apple_intelligence_mdm_access`
        }] : []]
    }), sr = ({
        isRbacEnabled: e,
        includeModels: t,
        includeThinkingMini: n,
        gpt5ThinkingEnabled: r,
        gpt51ThinkingEnabled: i,
        gpt52ThinkingEnabled: a,
        reasoningModelEnabled: o,
        hasThinkingMiniRouterControls: s,
        isSimplifiedModelControlReasoningProEnabled: c
    }) => ({
        title: Q.modelsTitle,
        availableForEnterprise: !0,
        description: Q.modelsDescription,
        entries: [...n && e && s && !ke(s) ? [{
            rbac: !0,
            title: `Redirect Auto Router to Thinking Mini`,
            disabled: !r && !i && !a || !o,
            disabledReason: !r && !i && !a || !o ? Q.gpt5ThinkingMiniAutoswitcherDisableDescription : void 0,
            description: Q.gpt5ThinkingMiniAutoswitcherDescription,
            hipaaMetadata: $,
            permissionName: h.GPT5ThinkingMiniAccess
        }] : [], ...t && e && !Ae() ? je(c) : []]
    }), cr = (e, t) => {
        let n = {
                rbac: !0,
                title: Q.gptPrivatePublishTitle,
                description: Q.gptPrivatePublishDescription,
                hipaaMetadata: $,
                permissionName: h.PrivatePublishGPT
            },
            r = [{
                rbac: !0,
                title: Q.gptCrudTitle,
                description: Q.gptCrudDescription,
                hipaaMetadata: $,
                permissionName: h.CrudGPT
            }, ...e ? [n] : [], {
                rbac: !0,
                title: Q.gptShareWorkspaceTitle,
                description: Q.gptShareWorkspaceDescription,
                hipaaMetadata: $,
                permissionName: h.ShareWorkspaceGPT
            }, {
                rbac: !0,
                title: Q.gptShareExternalTitle,
                description: Q.gptShareExternalDescription,
                permissionName: h.ShareExternalGPT
            }, {
                rbac: !0,
                title: Q.gptAllowAllThirdPartyTitle,
                description: Q.gptAllowAllThirdPartyDescription,
                permissionName: h.AllowAllThirdPartyGPT
            }, {
                rbac: !0,
                title: Q.gptAllowSpecificThirdPartyTitle,
                description: Q.gptAllowSpecificThirdPartyDescription,
                permissionName: h.AllowSpecificThirdPartyGPT
            }, ...t ? [{
                rbac: !0,
                title: Q.gptAllowFirstPartyTitle,
                description: Q.gptAllowFirstPartyDescription,
                permissionName: h.AllowFirstPartyGPT
            }] : []];
        return {
            title: Q.gptSectionTitle,
            description: Q.gptSectionDescription,
            entries: r
        }
    }, lr = {
        rbac: !0,
        title: Q.projectSharingTitle,
        description: Q.projectSharingDescription,
        hipaaMetadata: $,
        permissionName: h.ShareProject,
        dependsOnPermissionName: h.CrudProject,
        permissionNamesToRemoveWhenDisabled: [h.ShareWorkspaceProject]
    }, ur = {
        rbac: !0,
        title: Q.projectShareWorkspaceTitle,
        description: Q.projectShareWorkspaceDescription,
        hipaaMetadata: $,
        permissionName: h.ShareWorkspaceProject,
        dependsOnPermissionName: h.ShareProject
    }, dr = () => ({
        title: Q.projectSectionTitle,
        description: Q.projectSectionDescription,
        entries: [{
            rbac: !0,
            title: Q.projectCrudTitle,
            description: Q.projectCrudDescription,
            hipaaMetadata: $,
            permissionName: h.CrudProject,
            permissionNamesToRemoveWhenDisabled: [h.ShareProject, h.ShareWorkspaceProject]
        }, lr, ur]
    }), fr = ({
        includeHazelnutsAdditionalRbacPermissions: e
    }) => a([{
        rbac: !0,
        title: Q.skillsAccessTitle,
        description: Q.skillsRbacAccessDescription,
        permissionName: h.SkillsAccess,
        permissionNamesToRemoveWhenDisabled: [h.SkillsCreate, h.SkillsUpload, h.SkillsShare, h.SkillsShareWorkspace, h.SkillsEnableShareWorkspace]
    }, y(`671163469`) ? {
        rbac: !0,
        title: Q.skillsCreateTitle,
        description: Q.skillsCreateDescription,
        permissionName: h.SkillsCreate,
        dependsOnPermissionName: h.SkillsAccess
    } : null, e ? {
        rbac: !0,
        title: Q.skillsUploadTitle,
        description: Q.skillsUploadDescription,
        permissionName: h.SkillsUpload,
        dependsOnPermissionName: h.SkillsAccess
    } : null, {
        rbac: !0,
        title: Q.skillsShareTitle,
        description: Q.skillsShareDescription,
        permissionName: h.SkillsShare,
        dependsOnPermissionName: h.SkillsAccess,
        permissionNamesToRemoveWhenDisabled: [h.SkillsShareWorkspace, h.SkillsEnableShareWorkspace]
    }, e ? {
        rbac: !0,
        title: Q.skillsShareWorkspaceTitle,
        description: Q.skillsShareWorkspaceDescription,
        permissionName: h.SkillsShareWorkspace,
        dependsOnPermissionName: h.SkillsShare,
        permissionNamesToRemoveWhenDisabled: [h.SkillsEnableShareWorkspace]
    } : null, {
        rbac: !0,
        title: Q.skillsEnabledShareTitle,
        description: Q.skillsEnableShareDescription,
        permissionName: h.SkillsEnableShareWorkspace,
        dependsOnPermissionName: e ? h.SkillsShareWorkspace : h.SkillsShare
    }]), pr = ({
        includeHazelnutsAdditionalRbacPermissions: e
    }) => ({
        title: Q.skillsSectionTitle,
        description: Q.skillsSectionDescription,
        entries: fr({
            includeHazelnutsAdditionalRbacPermissions: e
        })
    }), mr = () => ({
        title: Q.skillsSectionTitle,
        availableForEnterprise: !0,
        availableForQuorum: !1,
        description: Q.skillsSectionDescription,
        entries: [{
            rbac: !1,
            title: Q.skillsAccessTitle,
            description: Q.skillsAccessDescription,
            settingName: `skills_access`
        }]
    }), hr = () => ({
        title: Q.sitesPreReleaseCardTitle,
        availableForEnterprise: !0,
        availableForQuorum: !1,
        description: Q.sitesPreReleaseCardDescription,
        entries: [jt()]
    }), gr = e => (!e || y(`4195940720`)) && y(`263956393`), _r = ({
        includeConnectorPermissions: e,
        includeCustomMcpPluginUploadPermission: t = !0,
        isFedrampCompliantWorkspace: n = !1,
        showPluginRbacControls: r = gr(n),
        workspaceName: i
    }) => ({
        title: n ? Q.fedrampAppsSectionTitle : Q.connectedDataSectionTitle,
        entries: [...e ? [{
            rbac: !0,
            title: n ? Q.fedrampAppsRoleTitle : Q.pluginRoleTitle,
            description: n ? Q.fedrampAppsRoleDescription : Q.pluginRoleDescription,
            permissionName: h.UseConnector,
            nestedKey: h.UseConnector,
            fedrampAppsOnlyCopy: n
        }] : [], ...r ? [on(), ...t && !n ? [sn()] : [], nn(), $t(i)] : [], ...e && !n ? [{
            rbac: !0,
            title: Q.createMcpConnectorTitle,
            description: Q.createMcpConnectorDescription,
            permissionName: h.CreateMcpConnector,
            additionalPermissionNames: [h.DeveloperModeConnector]
        }] : []]
    }), vr = () => ({
        title: Q.enhancedCitationsTitle,
        description: Q.enhancedCitationsDescription,
        entries: [{
            rbac: !0,
            title: Q.enableEnhancedCitationsTitle,
            description: Q.enableEnhancedCitationsDescription,
            hipaaMetadata: $,
            permissionName: h.EnhancedCitations
        }]
    }), yr = () => ({
        title: Q.basisPointsTitle,
        description: Q.basisPointsDescription,
        entries: [{
            rbac: !0,
            title: Q.enableBasisPointsTitle,
            description: Q.enableBasisPointsDescription,
            hipaaMetadata: $,
            permissionName: h.BasisPointsAccess
        }]
    }), br = () => ({
        title: Q.basisPointsPowerPointTitle,
        description: Q.basisPointsPowerPointDescription,
        entries: [{
            rbac: !0,
            title: Q.enableBasisPointsPowerPointTitle,
            description: Q.enableBasisPointsPowerPointDescription,
            permissionName: h.BasisPointsPowerPointAccess
        }]
    }), xr = () => ({
        title: Q.basisPointsWordTitle,
        description: Q.basisPointsWordDescription,
        entries: [{
            rbac: !0,
            title: Q.enableBasisPointsWordTitle,
            description: Q.enableBasisPointsWordDescription,
            permissionName: h.BasisPointsWordAccess
        }]
    }), Sr = vt, Cr = (e, t, n = !1, r, i) => {
        let a = e.isFedrampCompliantWorkspace,
            o = [],
            s = n && i === `role_only_v1` && r?.admin_preview_library_sharing?.length === 1 && r.admin_preview_library_sharing[0] === h.LibrarySharingManagementAccess,
            c = Un(i, e.includeLibraryWorkspaceLinkSharingPermissions && (!s || r?.admin_preview_library_workspace_link_sharing?.includes(h.LibraryWorkspaceLinkSharingAccess)));
        return !e.isSelfServeBusinessWorkspace && (s || e.includeLibrarySharingPermissions && !e.isLibrarySharingGa) && c.length > 0 && o.push({
            name: t(Q.librarySharingTitle),
            description: t(i === `role_only_v1` ? Q.librarySharingRoleOnlyDescription : Q.librarySharingPreviewDescription),
            newReleaseEntries: In(c, a),
            ...s ? {
                adminPreviewFeature: `admin_preview_library_sharing`,
                shouldHideOptOutButton: !0,
                hideEarlyAccessBadge: !0
            } : {
                newReleaseOptOutFlag: l.LIBRARY_SHARING_GA_OPT_OUT
            },
            releaseDate: void 0,
            helpCenterLink: gn
        }), n && r?.admin_preview_test?.length === 1 && r.admin_preview_test[0] === h.FeatureReleaseDashboardPilotAccess && o.push({
            adminPreviewFeature: `admin_preview_test`,
            name: t(Q.adminPreviewTestTitle),
            description: Q.adminPreviewTestDescription,
            newReleaseEntries: [{
                rbac: !0,
                permissionName: h.FeatureReleaseDashboardPilotAccess,
                title: Q.adminPreviewTestTitle
            }],
            shouldHideOptOutButton: !0,
            hideEarlyAccessBadge: !0,
            helpCenterLink: void 0,
            releaseDate: void 0
        }), un({
            isAppgenEnabled: e.includeSitesPermissionsEarlyAccess
        }) && (o = o.concat({
            name: t(Q.sitesPreReleaseCardTitle),
            description: t(Q.sitesPreReleaseCardDescription),
            newReleaseEntries: In([At(), ...e.includeSitesExternalVisitorInvitesPermission ? [Wt()] : [], ...e.includeSitesPrivateTunnelsPermission ? [qt(), Xt()] : []], a),
            newReleaseOptOutFlag: l.SITES_GA_OPT_OUT,
            shouldHideOptOutButton: !1,
            helpCenterLink: Ft,
            releaseDate: void 0
        })), o
    }
}));
export {
    Ke as A, Qe as C, Xe as D, qe as E, F as M, Ge as N, Ye as O, I as P, et as S, rt as T, at as _, dn as a, lt as b, Dn as c, Dt as d, Vt as f, ot as g, st as h, Tn as i, gt as j, Je as k, Ct as l, bt as m, vn as n, _n as o, St as p, Cr as r, wr as s, $ as t, wt as u, it as v, $e as w, R as x, ct as y
};
//# sourceMappingURL=b90db9d2-k832nnqs73tmepbx.js.map