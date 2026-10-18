import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A3 as n,
    AT as r,
    DX as i,
    EX as a,
    IG as o,
    LG as s,
    Lot as c,
    My as l,
    O3 as u,
    S3 as d,
    b5 as f,
    bst as p,
    gnt as m,
    jy as h,
    kT as g,
    pnt as _,
    wst as v,
    x3 as y,
    y3 as ee,
    y5 as te,
    ynt as b
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as x,
    Bn as S,
    Ln as C,
    Nn as w,
    Rn as T,
    Vn as E,
    at as ne,
    wn as re,
    zn as ie
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Oxn as ae,
    THn as oe,
    UUn as se,
    WUn as ce,
    jxn as D,
    wHn as O
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    DC as le,
    EC as ue
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Jb as de,
    Vx as fe,
    Yb as pe
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    a as me,
    c as k,
    d as he,
    f as ge,
    h as _e,
    i as ve,
    l as A,
    m as ye,
    n as be,
    o as xe,
    p as Se,
    r as Ce,
    s as we,
    t as Te,
    u as Ee
} from "./4ed85438-j32h7byl3jel8uhr.js";
import {
    d as De,
    m as Oe,
    o as ke,
    u as Ae
} from "./03a3ce2c-j7wzxjqo40snjirc.js";
var je, Me, Ne = e((() => {
        s(), T(), je = C({
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
        }), Me = () => ({
            title: je.title,
            entries: [{
                rbac: !0,
                title: je.access,
                description: je.description,
                permissionName: o.CmeAccess
            }]
        })
    })),
    j, Pe, Fe, Ie = e((() => {
        s(), T(), j = C({
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
        }), Pe = () => ({
            rbac: !0,
            title: j.codexOptimizeTitle,
            description: j.codexOptimizeDescription,
            permissionName: o.CodexOptimizeAccess
        }), Fe = () => ({
            rbac: !0,
            title: j.codexOptimizeAdminTitle,
            description: j.codexOptimizeAdminDescription,
            permissionName: o.CodexOptimizeAdminAccess
        })
    })),
    M, Le, Re, ze = e((() => {
        T(), s(), M = C({
            accessTitle: {
                id: `chatgpt.workspace.permissions.computer_history.access.title`,
                defaultMessage: `Enable Computer History`
            },
            accessDescription: {
                id: `chatgpt.workspace.permissions.computer_history.access.description`,
                defaultMessage: `Allow members to turn on Computer History.`
            }
        }), Le = {
            rbac: !0,
            title: M.accessTitle,
            description: M.accessDescription,
            permissionName: o.AllowComputerHistory,
            dependsOnPermissionName: o.AllowCodexLocalAccess
        }, Re = {
            rbac: !1,
            title: M.accessTitle,
            description: M.accessDescription,
            settingName: `allow_computer_history`
        }
    })),
    Be, N, Ve, He = e((() => {
        T(), Be = `chatgpt.workspace.contextlayer.admin`, N = C({
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
        }), Ve = () => ({
            title: N.contextLayerTitle,
            entries: [{
                rbac: !0,
                title: N.contextLayerAdminTitle,
                description: N.contextLayerAdminDescription,
                permissionName: Be
            }]
        })
    })),
    P, Ue, F = e((() => {
        s(), T(), P = C({
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
        }), Ue = () => ({
            title: P.sectionTitle,
            entries: [{
                rbac: !0,
                title: P.createTitle,
                description: P.createDescription,
                permissionName: o.TeamCreate
            }, {
                rbac: !0,
                title: P.inviteTitle,
                description: P.inviteDescription,
                permissionName: o.TeamMemberInvite
            }, {
                rbac: !0,
                title: P.automationWriteTitle,
                description: P.automationWriteDescription,
                permissionName: o.TeamAutomationWrite
            }]
        })
    }));

function We({
    planType: e,
    enabled: t
}) {
    return !t || e !== c.HC && e !== c.QUORUM ? [] : [{
        title: I.title,
        description: I.description,
        entries: [{
            rbac: !0,
            title: I.chartGPTTitle,
            description: I.chartGPTDescription,
            permissionName: o.ChartGPTAccess,
            permissionNamesToRemoveWhenDisabled: [o.PreventChartGPTContinuation]
        }, {
            rbac: !0,
            title: I.preventContinuationTitle,
            description: I.preventContinuationDescription,
            permissionName: o.PreventChartGPTContinuation,
            dependsOnPermissionName: o.ChartGPTAccess
        }]
    }]
}
var I, L = e((() => {
    v(), s(), T(), I = C({
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

function R(e, t, n, r, i, a) {
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

function Ge() {
    return {
        rbac: !0,
        title: B.sitesPublicPublishingTitle,
        description: B.sitesPublicPublishingTooltip,
        permissionName: o.SitesPublishAccess,
        dependsOnPermissionName: o.SitesAccess,
        permissionNamesToRemoveWhenDisabled: [o.SitesPublishWithTunnelsAccess]
    }
}

function Ke(e) {
    let t = ct.get(e);
    if (t != null && e === o.SitesAccess && _(`3668740402`)) return {
        ...t,
        badge: void 0
    };
    if (t != null && (e === o.CodexSecurityAccess || e === o.CodexSecurityAdminAccess) && _(`870690999`)) {
        let n = e === o.CodexSecurityAdminAccess;
        return {
            ...t,
            title: n ? B.defenseFactoryAdminTitle : B.defenseFactoryTitle,
            infoTooltip: n ? B.defenseFactoryAdminTooltip : B.defenseFactoryTooltip
        }
    }
    return t != null && e === o.WorkOnlyMode ? {
        ...t,
        infoTooltip: me()
    } : t
}

function qe(e) {
    return Ke(e) ?? lt.get(e)
}

function Je(e) {
    let t = Ke(e.permissionName);
    return t != null && e.fedrampAppsOnlyCopy === !0 ? {
        ...t,
        title: e.title,
        infoTooltip: e.description ?? t.infoTooltip
    } : t != null && e.fedrampCodexLocalCopy === !0 ? {
        ...t,
        title: e.title,
        infoTooltip: typeof e.title == `string` ? t.infoTooltip : e.title
    } : t == null || e.permissionName !== o.AllowCodexLocalAccess || e.codexLocalOnly !== !1 ? t : {
        ...t,
        title: e.title,
        infoTooltip: e.description ?? t.infoTooltip
    }
}

function Ye(e) {
    return mt.get(e)
}

function Xe() {
    return {
        rbac: !0,
        title: B.codexManageEnvironmentsTitle,
        description: B.codexManageEnvironmentsTooltip,
        permissionName: o.CodexManageWorkspaceEnvironments,
        dependsOnPermissionName: o.AllowCodexAccess
    }
}
var Ze, z, Qe, B, V, $e, H, et, tt, nt, rt, it, at, ot, st, ct, lt, U, W, ut, dt, ft, G, pt, K, mt, ht = e((() => {
        Se(), ze(), He(), s(), F(), we(), b(), T(), L(), Ze = [`Early access`, `Financial services`, `ChartGPT - EHR Integrations`, `Legal`, `Chat`, `Chat extensions`, `Chat models`, `Work`, `Codex`, `Platform Capabilities`, `Usage limits`], z = `__july30_work_parent__`, Qe = C({
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
        }), B = C({
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
        }), V = R(B.usePluginsTitle, B.usePluginsTooltip, `Platform Capabilities`, `parent`, 1), $e = R(B.personalAccessTokensTitle, B.personalAccessTokensTooltip, `Platform Capabilities`, `standalone`, 13), H = R(B.recordTitle, B.recordTooltip, `Chat`, `parent`, 35), et = R(B.recordHistoryTitle, B.recordHistoryTooltip, `Chat`, `child`, 36), tt = {
            body: B.codexDeviceCodeAuthWarning,
            warning: !0
        }, nt = R(B.dictationTitle, B.dictationTooltip, `Codex`, `standalone`, 54.4), rt = R(B.desktopAppChatTitle, B.desktopAppChatTooltip, `Chat`, `standalone`, 31.2), it = R(B.codexLocalAutomationTitle, B.codexLocalAutomationTooltip, `Codex`, `standalone`, 54.5), at = R(B.codexInAppBrowserTitle, B.codexInAppBrowserTooltip, `Codex`, `standalone`, 54.6), ot = B.fedrampDisabledPermissionReason, st = B.lockdownDisabledPermissionReason, ct = new Map([
            [o.ChartGPTAccess, R(I.chartGPTTitle, I.chartGPTDescription, `ChartGPT - EHR Integrations`, `parent`, 1)],
            [o.PreventChartGPTContinuation, R(I.preventContinuationTitle, I.preventContinuationDescription, `ChartGPT - EHR Integrations`, `child`, 2)],
            [o.DictationAccess, nt],
            [o.DesktopAppChatAccess, rt],
            [o.CodexLocalAutomationAccess, it],
            [o.CodexInAppBrowserAccess, at],
            [o.UseConnector, V],
            [o.UsePlugin, V],
            [o.UseWorkspacePlugins, V],
            [o.UploadWorkspacePlugins, R(B.uploadPluginsTitle, B.uploadPluginsTooltip, `Platform Capabilities`, `child`, 1.1)],
            [o.UploadWorkspacePluginsWithCustomMcpServers, R(B.uploadPluginsWithCustomMcpServersTitle, B.uploadPluginsWithCustomMcpServersTooltip, `Platform Capabilities`, `child`, 1.15)],
            [o.ShareWorkspacePlugins, R(B.sharePluginsTitle, B.sharePluginsTooltip, `Platform Capabilities`, `child`, 1.2)],
            [o.PublishWorkspacePlugins, R(B.publishPluginsTitle, B.publishPluginsTooltip, `Platform Capabilities`, `child`, 1.3)],
            [o.CreateMcpConnector, R(B.createMcpAppsTitle, B.createMcpAppsTooltip, `Platform Capabilities`, `child`, 1.4)],
            [o.SkillsAccess, R(B.useSkillsTitle, B.useSkillsTooltip, `Platform Capabilities`, `parent`, 4)],
            [o.SkillsCreate, R(B.createSkillsTitle, B.createSkillsTooltip, `Platform Capabilities`, `child`, 5)],
            [o.SkillsUpload, R(B.uploadSkillsTitle, B.uploadSkillsTooltip, `Platform Capabilities`, `child`, 6)],
            [o.SkillsShare, R(B.shareSkillsTitle, B.shareSkillsTooltip, `Platform Capabilities`, `child`, 7)],
            [o.SkillsShareWorkspace, R(B.publishSkillsTitle, B.publishSkillsTooltip, `Platform Capabilities`, `child`, 8)],
            [o.SkillsEnableShareWorkspace, R(B.installSkillsTitle, B.installSkillsTooltip, `Platform Capabilities`, `child`, 9)],
            [o.SitesAccess, R(B.sitesTitle, B.sitesTooltip, `Platform Capabilities`, `parent`, 10, B.betaBadge)],
            [o.SitesPublishAccess, R(B.sitesPublicPublishingTitle, B.sitesPublicPublishingTooltip, `Platform Capabilities`, `child`, 10.1)],
            [o.SitesInviteExternalAccess, R(B.sitesExternalVisitorsTitle, B.sitesExternalVisitorsTooltip, `Platform Capabilities`, `child`, 10.2)],
            [o.SitesAttachTunnelsAccess, R(B.sitesAttachTunnelsTitle, B.sitesAttachTunnelsTooltip, `Platform Capabilities`, `child`, 10.3)],
            [o.SitesPublishWithTunnelsAccess, R(B.sitesPublishWithTunnelsTitle, B.sitesPublishWithTunnelsTooltip, `Platform Capabilities`, `child`, 10.2)],
            [o.MemoryAccess, R(B.memoryTitle, B.memoryTooltip, `Platform Capabilities`, `parent`, 11)],
            [o.ImprovedMemoryAccess, R(B.improvedMemoryTitle, B.improvedMemoryTooltip, `Platform Capabilities`, `child`, 12)],
            [o.ImageGenAccess, R(B.createImagesTitle, B.createImagesTooltip, `Chat`, `standalone`, 31.1)],
            [o.ProgrammaticAgentIdentitiesAccess, $e],
            [o.TeamCreate, R(P.createTitle, P.createDescription, `Platform Capabilities`, `standalone`, 15)],
            [o.TeamMemberInvite, R(P.inviteTitle, P.inviteDescription, `Platform Capabilities`, `standalone`, 16)],
            [o.TeamAutomationWrite, R(P.automationWriteTitle, P.automationWriteDescription, `Platform Capabilities`, `standalone`, 17)],
            [`personal_access_tokens`, $e],
            [o.MemberRoleView, R(B.memberVisibilityTitle, B.memberVisibilityTooltip, `Platform Capabilities`, `standalone`, 14)],
            [o.SearchAccess, {
                ...R(B.searchTitle, B.searchTooltip, `Chat`, `parent`, 17),
                helpLink: {
                    label: B.searchHelpLink,
                    href: `https://help.openai.com/en/articles/10093903-chatgpt-search-for-enterprise-and-edu`
                }
            }],
            [o.DeepResearchAccess, R(B.deepResearchTitle, B.deepResearchTooltip, `Chat`, `child`, 18)],
            [o.CrudProject, R(B.projectsTitle, B.projectsTooltip, `Chat`, `parent`, 19)],
            [o.ShareProject, R(B.shareProjectsTitle, B.shareProjectsTooltip, `Chat`, `child`, 20)],
            [o.ShareWorkspaceProject, R(B.workspaceProjectLinksTitle, B.workspaceProjectLinksTooltip, `Chat`, `child`, 21)],
            [A, R(B.agentsTitle, B.agentsTooltip, `Chat`, `parent`, 22)],
            [Ee, R(B.buildAgentsTitle, B.buildAgentsTooltip, `Chat`, `child`, 23)],
            [he, R(B.shareAgentsTitle, B.shareAgentsTooltip, `Chat`, `child`, 24)],
            [`chatgpt.workspace.feature.hermes.publish.access`, R(B.publishAgentsTitle, B.publishAgentsTooltip, `Chat`, `child`, 25)],
            [`chatgpt.workspace.feature.hermes.share_personal.access`, R(B.agentOwnedConnectionsTitle, B.agentOwnedConnectionsTooltip, `Chat`, `child`, 26)],
            [o.CrudGPT, R(B.manageGptsTitle, B.manageGptsTooltip, `Chat`, `parent`, 27)],
            [o.ShareWorkspaceGPT, R(B.workspaceGptsTitle, B.workspaceGptsTooltip, `Chat`, `child`, 28)],
            [o.ShareExternalGPT, R(B.externalGptsTitle, B.externalGptsTooltip, `Chat`, `child`, 29)],
            [o.AllowAllThirdPartyGPT, R(B.allThirdPartyGptsTitle, B.allThirdPartyGptsTooltip, `Chat`, `child`, 30)],
            [o.AllowSpecificThirdPartyGPT, R(B.approvedGptsTitle, B.approvedGptsTooltip, `Chat`, `child`, 31)],
            [o.EarlyModelAccess, R(B.earlyModelsTitle, B.earlyModelsTooltip, `Chat models`, `standalone`, 0)],
            [o.ReasoningModelAccess, R(B.reasoningModelsTitle, B.reasoningModelsTooltip, `Chat models`, `standalone`, 10)],
            [o.ProModelAccess, R(B.proModelsTitle, B.proModelsTooltip, `Chat models`, `standalone`, 20)],
            [o.GPT5ThinkingMiniAccess, R(B.thinkingMiniTitle, B.thinkingMiniTooltip, `Chat models`, `standalone`, 50)],
            [o.FileLibraryAutoReferenceAccess, R(B.libraryTitle, B.libraryTooltip, `Chat`, `standalone`, 34)],
            [o.HiveAccess, H],
            [`record_access`, H],
            [o.HiveKnowledgeRetrievalAccess, et],
            [`record_reference_past_transcripts`, et],
            [o.CanvasCodeExecutionAccess, R(B.runCodeTitle, B.runCodeTooltip, `Chat`, `parent`, 37)],
            [o.CanvasCodeNetworkAccess, R(B.codeNetworkTitle, B.codeNetworkTooltip, `Chat`, `child`, 38)],
            [o.VoiceAccess, R(B.voiceTitle, B.voiceTooltip, `Chat`, `parent`, 31.2)],
            [o.VideoScreenSharingAccess, R(B.voiceVideoTitle, B.voiceVideoTooltip, `Chat`, `child`, 31.3)],
            [o.ShareChatWithWorkspace, R(B.shareChatsAndTasksTitle, B.shareChatsAndTasksTooltip, `Chat`, `standalone`, 40)],
            [Be, R(B.contextLayerAdminTitle, B.contextLayerAdminTooltip, `Chat`, `standalone`, 41)],
            [o.BasisPointsPowerPointAccess, R(B.powerpointTitle, B.powerpointTooltip, `Chat extensions`, `standalone`, 44)],
            [o.BasisPointsAccess, R(B.spreadsheetsTitle, B.spreadsheetsTooltip, `Chat extensions`, `standalone`, 45)],
            [o.BasisPointsWordAccess, R(B.wordTitle, B.wordTooltip, `Chat extensions`, `standalone`, 46)],
            [z, R(B.workTitle, B.workTooltip, `Work`, `parent`, 46)],
            [o.FloraLocalAccess, R(B.workLocalTitle, B.workLocalTooltip, `Work`, `child`, 47)],
            [Te, R(B.workCloudTitle, B.workCloudTooltip, `Work`, `child`, 48)],
            [be, R(B.workBrowserTitle, B.workBrowserTooltip, `Work`, `child`, 49)],
            [Ce, R(B.workNetworkTitle, B.workNetworkTooltip, `Work`, `child`, 50)],
            [ve, R(B.workWebhookAutomationsTitle, B.workWebhookAutomationsTooltip, `Work`, `child`, 51)],
            [o.WorkOnlyMode, R(k.title, k.description, `Work`, `parent`, 52)],
            [o.WorkOnlyChatInstant, R(k.chatInstantTitle, k.chatInstantDescription, `Work`, `child`, 53)],
            [o.AllowCodexLocalAccess, R(B.codexLocalTitle, B.codexLocalTooltip, `Codex`, `parent`, 51)],
            [o.AllowComputerHistory, R(Le.title, Le.description, `Codex`, `child`, 52)],
            [`chatgpt.workspace.feature.codex-remote-control.access`, R(B.codexRemoteTitle, B.codexRemoteTooltip, `Codex`, `child`, 53)],
            [o.WindowsComputerUseAccess, R(B.windowsComputerUseTitle, B.windowsComputerUseTooltip, `Codex`, `child`, 54)],
            [o.CodexDeviceCodeAuthAccess, R(B.codexDeviceCodeTitle, B.codexDeviceCodeTooltip, `Codex`, `child`, 55)],
            [o.AllowCodexAccess, R(B.codexCloudTitle, B.codexCloudTooltip, `Codex`, `parent`, 56)],
            [`codex_github_connector`, R(B.codexGithubTitle, B.codexGithubTooltip, `Codex`, `child`, 57)],
            [o.CodexManageWorkspaceEnvironments, R(B.codexManageEnvironmentsTitle, B.codexManageEnvironmentsTooltip, `Codex`, `child`, 58)],
            [o.CodexAgentNetworkAccess, R(B.codexNetworkTitle, B.codexNetworkTooltip, `Codex`, `child`, 58)],
            [o.CodexSlackPostingAccess, R(B.codexSlackTitle, B.codexSlackTooltip, `Codex`, `child`, 59)],
            [o.CodexSecurityAccess, R(B.codexSecurityTitle, B.codexSecurityTooltip, `Codex`, `child`, 60)],
            [o.CodexAdminAccess, R(B.codexAdminTitle, B.codexAdminTooltip, `Codex`, `standalone`, 61)],
            [o.CodexSecurityAdminAccess, R(B.codexSecurityAdminTitle, B.codexSecurityAdminTooltip, `Codex`, `standalone`, 62)]
        ]), lt = new Map([
            [o.CodexOptimizeAccess, {
                category: `Codex`,
                order: 63
            }],
            [o.CodexOptimizeAdminAccess, {
                category: `Codex`,
                order: 64
            }],
            [o.FinServAccess, {
                category: `Financial services`,
                order: 10
            }],
            [o.LegalAccess, {
                category: `Legal`,
                order: 10
            }],
            [o.LegalManagement, {
                category: `Legal`,
                order: 20
            }],
            [o.FinDataCompanyFilingsAccess, {
                category: `Financial services`,
                order: 20
            }],
            [o.FinDataInvestorPresentationsAccess, {
                category: `Financial services`,
                order: 30
            }],
            [o.FinDataEarningsCallsAccess, {
                category: `Financial services`,
                order: 40
            }],
            [o.FinDataInvestorReportsAccess, {
                category: `Financial services`,
                order: 50
            }],
            [o.FinDataFinancialMetricsAccess, {
                category: `Financial services`,
                order: 60
            }],
            [o.FinDataMarketPricingAccess, {
                category: `Financial services`,
                order: 70
            }],
            [o.FinDataPrivateCompanyMetricsAccess, {
                category: `Financial services`,
                order: 80
            }],
            [o.FinDataNewsAccess, {
                category: `Financial services`,
                order: 90
            }],
            [o.GPT52ReasoningAccess, {
                category: `Chat models`,
                order: 10
            }],
            [o.GPT52ProAccess, {
                category: `Chat models`,
                order: 20
            }],
            [o.GPT51ReasoningAccess, {
                category: `Chat models`,
                order: 30
            }],
            [o.GPT51ProAccess, {
                category: `Chat models`,
                order: 40
            }],
            [o.GPTO3Access, {
                category: `Chat models`,
                order: 60
            }],
            [o.GPT41Access, {
                category: `Chat models`,
                order: 70
            }],
            [o.GPT45Access, {
                category: `Chat models`,
                order: 80
            }],
            [o.GPTO4MiniAccess, {
                category: `Chat models`,
                order: 90
            }]
        ]), U = [o.UseConnector, o.UsePlugin, o.UseWorkspacePlugins], W = [o.SkillsAccess], ut = [o.CrudProject], dt = [A], ft = [o.CrudGPT], G = [z], pt = [o.AllowCodexLocalAccess], K = [o.AllowCodexAccess], mt = new Map([
            [o.PreventChartGPTContinuation, [o.ChartGPTAccess]],
            [o.UploadWorkspacePlugins, U],
            [o.UploadWorkspacePluginsWithCustomMcpServers, U],
            [o.ShareWorkspacePlugins, U],
            [o.PublishWorkspacePlugins, U],
            [o.CreateMcpConnector, U],
            [o.SkillsCreate, W],
            [o.SkillsUpload, W],
            [o.SkillsShare, W],
            [o.SkillsShareWorkspace, W],
            [o.SkillsEnableShareWorkspace, W],
            [o.ImprovedMemoryAccess, [o.MemoryAccess]],
            [o.DeepResearchAccess, [o.SearchAccess]],
            [o.ShareProject, ut],
            [o.ShareWorkspaceProject, ut],
            [Ee, dt],
            [he, dt],
            [`chatgpt.workspace.feature.hermes.publish.access`, dt],
            [`chatgpt.workspace.feature.hermes.share_personal.access`, dt],
            [o.ShareWorkspaceGPT, ft],
            [o.ShareExternalGPT, ft],
            [o.AllowAllThirdPartyGPT, ft],
            [o.AllowSpecificThirdPartyGPT, ft],
            [o.HiveKnowledgeRetrievalAccess, [o.HiveAccess]],
            [o.SitesPublishWithTunnelsAccess, [o.SitesPublishAccess]],
            [`record_reference_past_transcripts`, [`record_access`]],
            [o.VideoScreenSharingAccess, [o.VoiceAccess]],
            [o.CanvasCodeNetworkAccess, [o.CanvasCodeExecutionAccess]],
            [o.SitesPublishAccess, [o.SitesAccess]],
            [o.SitesInviteExternalAccess, [o.SitesAccess]],
            [o.SitesAttachTunnelsAccess, [o.SitesAccess]],
            [o.FloraLocalAccess, G],
            [Te, G],
            [be, G],
            [Ce, G],
            [ve, G],
            [o.WorkOnlyChatInstant, [o.WorkOnlyMode]],
            [`chatgpt.workspace.feature.codex-remote-control.access`, pt],
            [o.AllowComputerHistory, pt],
            [o.WindowsComputerUseAccess, pt],
            [o.CodexDeviceCodeAuthAccess, pt],
            [`codex_github_connector`, K],
            [o.CodexManageWorkspaceEnvironments, K],
            [o.CodexAgentNetworkAccess, K],
            [o.CodexSlackPostingAccess, K],
            [o.CodexSecurityAccess, K]
        ])
    })),
    gt, _t, vt = e((() => {
        T(), _e(), gt = C({
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
        }), _t = () => ({
            title: gt.hermesSectionTitle,
            anchorId: ye,
            availableForEnterprise: !0,
            availableForQuorum: !1,
            description: gt.hermesSectionDescription,
            entries: [{
                rbac: !1,
                title: gt.hermesAccessTitle,
                description: gt.hermesAccessDescription,
                settingName: `hermes_access`
            }]
        })
    })),
    yt, bt, xt = e((() => {
        T(), yt = C({
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
        }), bt = () => ({
            title: yt.sectionTitle,
            availableForEnterprise: !0,
            entries: [{
                rbac: !1,
                title: yt.toggle,
                settingName: `orbit_enabled`
            }]
        })
    }));

function St(e) {
    "use forget";
    let t = (0, jt.c)(3),
        {
            children: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, q.jsx)(g, {
        color: `primary-inverse`,
        as: `link`,
        to: Ft,
        children: (0, q.jsx)(w, {
            ...J.manageLinkLabel
        })
    }), t[0] = r) : r = t[0];
    let i;
    return t[1] === n ? i = t[2] : (i = (0, q.jsxs)(`div`, {
        className: `flex items-center gap-3`,
        children: [r, n]
    }), t[1] = n, t[2] = i), i
}

function Ct() {
    "use forget";
    let e = (0, jt.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, q.jsx)(se, {
        className: `${Lt} text-sm`,
        href: Ft,
        children: (0, q.jsx)(w, {
            ...J.manageLinkLabel
        })
    }), e[0] = t) : t = e[0], t
}

function wt(e) {
    return e.includes(o.SitesPublishAccess) ? `internet` : e.includes(o.SitesAccess) ? `internal` : `disabled`
}

function Tt({
    currentPermissionNames: e,
    mode: t
}) {
    let n = t === `internet` && e.includes(o.SitesPublishWithTunnelsAccess),
        r = t !== `disabled` && e.includes(o.SitesAttachTunnelsAccess),
        i = e.filter(e => e !== o.SitesAccess && e !== o.SitesPublishAccess && (t !== `disabled` || e !== o.SitesInviteExternalAccess) && e !== o.SitesAttachTunnelsAccess && e !== o.SitesPublishWithTunnelsAccess);
    return (t === `internal` || t === `internet`) && i.push(o.SitesAccess), t === `internet` ? (i.push(o.SitesPublishAccess), r && i.push(o.SitesAttachTunnelsAccess), n && i.push(o.SitesPublishWithTunnelsAccess)) : r && i.push(o.SitesAttachTunnelsAccess), i
}

function Et(e) {
    "use forget";
    let t = (0, jt.c)(30),
        {
            ariaLabel: n,
            role: r,
            handleSaveRole: i,
            disabled: a,
            disabledReason: o
        } = e,
        s = a !== void 0 && a,
        c = ie(),
        l;
    t[0] === r.permissions ? l = t[1] : (l = wt(r.permissions), t[0] = r.permissions, t[1] = l);
    let u = l,
        d;
    t[2] === u ? d = t[3] : (d = Rt.find(e => e.value === u) ?? Rt[0], t[2] = u, t[3] = d);
    let f = d,
        p = s ? `cursor-not-allowed opacity-60` : `radix-state-open:bg-token-interactive-bg-secondary-press cursor-pointer hover:bg-token-interactive-bg-secondary-hover hover:text-token-text-secondary active:bg-token-interactive-bg-secondary-press`,
        m;
    t[4] === p ? m = t[5] : (m = te(`focus-visible:outline-token-border-default -m-2 inline-flex items-center gap-1.5 rounded-md px-2 py-2 text-start text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2`, p), t[4] = p, t[5] = m);
    let g;
    t[6] === f.title ? g = t[7] : (g = (0, q.jsx)(`span`, {
        className: `text-token-text-primary truncate font-medium whitespace-nowrap`,
        children: (0, q.jsx)(w, {
            ...f.title
        })
    }), t[6] = f.title, t[7] = g);
    let _;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, q.jsx)(ue, {
        className: `icon-sm text-token-text-tertiary shrink-0`,
        "aria-hidden": !0
    }), t[8] = _) : _ = t[8];
    let v;
    t[9] !== n || t[10] !== s || t[11] !== m || t[12] !== g ? (v = (0, q.jsxs)(O.BasicTrigger, {
        "aria-label": n,
        disabled: s,
        className: m,
        children: [g, _]
    }), t[9] = n, t[10] = s, t[11] = m, t[12] = g, t[13] = v) : v = t[13];
    let y;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (y = te(It, `max-w-[calc(100vw-2rem)]`), t[14] = y) : y = t[14];
    let ee = f.value,
        b;
    t[15] !== i || t[16] !== r ? (b = e => {
        zt(e) && i({
            ...r,
            permissions: Tt({
                currentPermissionNames: r.permissions,
                mode: e
            })
        })
    }, t[15] = i, t[16] = r, t[17] = b) : b = t[17];
    let x;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (x = Rt.map(Dt), t[18] = x) : x = t[18];
    let S;
    t[19] !== f.value || t[20] !== b ? (S = (0, q.jsx)(O.Portal, {
        children: (0, q.jsx)(O.Content, {
            size: `auto`,
            className: y,
            children: (0, q.jsx)(O.RadioGroup, {
                value: ee,
                onValueChange: b,
                children: x
            })
        })
    }), t[19] = f.value, t[20] = b, t[21] = S) : S = t[21];
    let C;
    t[22] !== S || t[23] !== v ? (C = (0, q.jsxs)(O.Root, {
        children: [v, S]
    }), t[22] = S, t[23] = v, t[24] = C) : C = t[24];
    let T = C,
        E;
    return t[25] !== s || t[26] !== o || t[27] !== c || t[28] !== T ? (E = s && o ? (0, q.jsx)(h, {
        label: c.formatMessage(o),
        children: (0, q.jsx)(`div`, {
            children: T
        })
    }) : T, t[25] = s, t[26] = o, t[27] = c, t[28] = T, t[29] = E) : E = t[29], E
}

function Dt(e) {
    return (0, q.jsx)(O.RadioItem, {
        value: e.value,
        size: `large`,
        fillContainer: !0,
        label: (0, q.jsxs)(`div`, {
            className: `flex flex-col py-0.5`,
            children: [(0, q.jsx)(`span`, {
                className: `text-token-text-primary text-sm font-medium whitespace-normal`,
                children: (0, q.jsx)(w, {
                    ...e.title
                })
            }), (0, q.jsx)(`span`, {
                className: `text-token-text-tertiary mt-1 text-xs whitespace-normal`,
                children: (0, q.jsx)(w, {
                    ...e.description
                })
            })]
        })
    }, e.value)
}

function Ot() {
    return (0, Mt.createElement)(`a`, {
        href: Nt,
        target: `_blank`,
        className: Lt,
        rel: `noreferrer`
    }, (0, Mt.createElement)(w, J.termsLinkLabel))
}

function kt() {
    return {
        rbac: !0,
        title: J.toggleTitle,
        description: J.toggleDescription,
        additionalDescription: J.termsDescription,
        additionalDescriptionValues: {
            termsLink: Ot()
        },
        permissionName: o.SitesAccess,
        permissionNamesToRemoveWhenDisabled: [o.SitesPublishAccess, o.SitesInviteExternalAccess, o.SitesAttachTunnelsAccess, o.SitesPublishWithTunnelsAccess]
    }
}

function At() {
    return {
        rbac: !1,
        title: J.toggleTitle,
        description: J.toggleDescription,
        additionalDescription: J.termsDescription,
        additionalDescriptionValues: {
            termsLink: Ot()
        },
        settingName: `sites`
    }
}
var jt, Mt, q, Nt, Pt, Ft, It, Lt, J, Rt, zt, Bt = e((() => {
        jt = re(), s(), r(), oe(), le(), l(), ce(), f(), Mt = t(E()), T(), q = S(), Nt = `https://openai.com/policies/chatgpt-sites-terms/`, Pt = `https://developers.openai.com/codex/sites`, Ft = `/admin/sites`, It = `w-[250px]`, Lt = `text-token-link hover:text-token-link-hover underline`, J = C({
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
        }), Rt = [{
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
        }], zt = e => e === `disabled` || e === `internal` || e === `internet`
    })),
    Y, Vt, Ht = e((() => {
        s(), T(), Y = C({
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
        }), Vt = () => ({
            title: Y.legalSectionTitle,
            description: Y.legalSectionDescription,
            anchorId: `legal-permissions`,
            entries: [{
                rbac: !0,
                title: Y.legalAccessTitle,
                description: Y.legalAccessDescription,
                permissionName: o.LegalAccess
            }, {
                rbac: !0,
                title: Y.legalManagementTitle,
                description: Y.legalManagementDescription,
                permissionName: o.LegalManagement
            }]
        })
    }));

function Ut() {
    return {
        rbac: !0,
        title: Wt.toggleTitle,
        description: Wt.toggleDescription,
        permissionName: o.SitesInviteExternalAccess,
        dependsOnPermissionName: o.SitesAccess
    }
}
var Wt, Gt = e((() => {
    s(), T(), Wt = C({
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

function Kt() {
    return {
        rbac: !0,
        title: qt.title,
        description: qt.description,
        permissionName: o.SitesAttachTunnelsAccess,
        dependsOnPermissionName: o.SitesAccess
    }
}
var qt, Jt = e((() => {
    s(), T(), qt = C({
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

function Yt() {
    return {
        rbac: !0,
        title: Xt.title,
        description: Xt.description,
        permissionName: o.SitesPublishWithTunnelsAccess,
        dependsOnPermissionName: o.SitesPublishAccess
    }
}
var Xt, Zt = e((() => {
    s(), T(), Xt = C({
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

function Qt(e) {
    let t = e?.trim();
    return {
        rbac: !0,
        title: $t.toggleTitle,
        description: t ? $t.toggleDescription : $t.toggleDescriptionUnnamedWorkspace,
        ...t ? {
            descriptionValues: {
                workspaceName: t
            }
        } : {},
        permissionName: o.PublishWorkspacePlugins
    }
}
var $t, en = e((() => {
    s(), T(), $t = C({
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

function tn() {
    return {
        rbac: !0,
        title: nn.toggleTitle,
        description: nn.toggleDescription,
        permissionName: o.ShareWorkspacePlugins
    }
}
var nn, rn = e((() => {
    s(), T(), nn = C({
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

function an() {
    return {
        rbac: !0,
        title: sn.toggleTitle,
        description: sn.toggleDescription,
        permissionName: o.UploadWorkspacePlugins
    }
}

function on() {
    return {
        rbac: !0,
        title: sn.customMcpToggleTitle,
        description: sn.customMcpToggleDescription,
        permissionName: o.UploadWorkspacePluginsWithCustomMcpServers
    }
}
var sn, cn = e((() => {
    s(), T(), sn = C({
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

function ln({
    isAppgenEnabled: e
}) {
    return e
}

function un({
    account: e,
    workspaceSettings: t,
    hasThinkingMiniRouterControls: r,
    isRbacEnabled: i,
    githubConnectorEnabled: s,
    codexOptimizeEnabled: l = !1,
    isInSupportedDrRegion: f,
    includeFeatures: p,
    includeModels: m,
    isSearchEnabled: h,
    isEnterprisey: g,
    showHiveToggle: v,
    includeBetaSettings: ee,
    includeBetaSettingsAdvanced: te,
    includeGizmoPermissions: b,
    includePrivatePublishGPTPermission: x,
    includeFirstPartyGPTPermission: S = !1,
    isAppleIntelligenceToggleEnabled: C,
    isAppleIntelligenceMdmToggleEnabled: w,
    includeAgentMode: T,
    includeCodexSecurity: E,
    includeComputerHistoryPermissions: ne = !1,
    isQuorum: re,
    includeConnectorPermissions: ie,
    includeCustomMcpPluginUploadPermission: oe = !0,
    includeThinkingMini: se,
    isCodexEnabledInRBACRole: ce,
    isRoleSpecificPage: D,
    showDeviceCodeAuthToggle: O,
    showWorkspaceReferralsEnabledToggle: le = !1,
    showMemberProfilesEnabledToggle: ue = !1,
    showMemberProfileActivityToggle: de = !1,
    showMemberProfilesSharing: fe = !1,
    additionalCodexLocalEntries: me = [],
    gpt5ThinkingEnabled: k,
    gpt51ThinkingEnabled: he,
    gpt52ThinkingEnabled: ge,
    reasoningModelEnabled: _e,
    showEnhancedCitationsPermission: ve,
    showBasisPointsPermission: A = !1,
    isSandboxModeEnabled: ye,
    includeHazelnutsPermissions: be,
    includeHazelnutsAdditionalRbacPermissions: Se = !1,
    showPedagogyModePermission: Ce = !1,
    showU18ModelPolicyPermission: we = !1,
    showDataExportPermission: Te = !1,
    includeFileLibraryAutoReferencePermissions: Ee = !1,
    includeLibrarySharingPermissions: De = !1,
    isLibrarySharingGa: Oe = !1,
    librarySharingControlMode: ke,
    includeLegalPermissionsEarlyAccess: Ae = !1,
    includeFloraPermissions: je = !1,
    isWorkLocalIndependentControlsEnabled: Ne = !1,
    includeHermesPermissionsEarlyAccess: j,
    includeSitesPermissionsEarlyAccess: Pe = !1,
    showUnifiedContainerEgress: Fe,
    isSimplifiedModelControlEnabled: Ie,
    isSimplifiedModelControlReasoningProEnabled: M,
    isM3mEnabled: ze = ae(),
    isFedrampRealtimeConnectorsEnabled: Be
}) {
    let N = n(e?.planType),
        He = e?.planType === c.QUORUM,
        P = e?.isEdu?.() ?? y(e?.planType),
        F = e?.isFedrampCompliantWorkspace ?? !1,
        We = Be ?? pe(F),
        I = i && hr(F),
        L = g || N,
        R = i && b,
        Ge = !i && N && be,
        Ke = !i && N && ln({
            isAppgenEnabled: Pe
        }),
        qe = i && j,
        Je = !F && (L || i && j) && _(`2935265100`),
        Ye = !F && (L || j) && _(`1010509169`),
        Xe = Ye,
        Ze = L && Je && !Ye,
        z = L && Je && !Ye,
        Qe = !i && N && j ? xr() : null,
        B = R ? ur() : null,
        V = qn({
            showUnifiedContainerEgress: Fe
        }),
        $e = p && i && P ? Xn({
            showPedagogyModePermission: Ce,
            showU18ModelPolicyPermission: we
        }) : null,
        H = a([...t?.orbit_uses_workspace_setting === !0 && !D ? [bt()] : [], ...Ae ? [Vt()] : [], ...i && g && _(`3957595485`) ? [Bn()] : [], ...i && je ? xe(Ne) : [], ...qe ? [Ln()] : [], Rn({
            isRbacEnabled: i,
            includeBetaSettingsAdvanced: te,
            isQuorumPlanType: He
        }), ...i ? [zn()] : [], ...i && _(`1989975812`) ? [Ue()] : [], ...i && P && Te ? [Vn()] : [], Gn({
            isRbacEnabled: i,
            isM3mEnabled: ze
        }), ...g && !D && !re && !He ? [Wn()] : [], Kn({
            isRbacEnabled: i,
            includeBetaSettingsAdvanced: te
        }), ...g && V ? [V] : [], Jn({
            isRbacEnabled: i,
            includeBetaSettings: ee,
            includeAgentMode: T,
            isQuorum: re,
            isSearchEnabled: h
        }), ...p && i ? [Yn] : [], ...$e ? [$e] : [], Zn({
            isRbacEnabled: i,
            includeBetaSettingsAdvanced: te
        }), ...Xe ? [$n({
            isRbacEnabled: i,
            showSettingBackedPersonalAccessTokens: N,
            showAccessTokenMaxTtl: !0
        })] : [], ...L ? tr({
            isRbacEnabled: i,
            includeBetaSettings: ee,
            includeCodexSecurity: E,
            githubConnectorEnabled: s,
            codexOptimizeEnabled: l,
            isCodexEnabledInRBACRole: ce,
            showDeviceCodeAuthToggle: O,
            showLegacyCodexAccessTokensPermission: Ze,
            showAccessTokenMaxTtl: z,
            additionalCodexLocalEntries: [...ne ? [i ? {
                ...Le
            } : {
                ...Re
            }] : [], ...me],
            isWorkLocalIndependentControlsEnabled: Ne
        }) : [], ...Ee ? [Un({
            isRbacEnabled: i
        })] : [], ...!u(e?.planType) && De && (Oe || D) ? [{
            title: Q.librarySharingTitle,
            entries: Hn(ke, d(e?.planType) || P).filter(e => !D || e.rbac)
        }] : [], ...v ? [ir({
            isRbacEnabled: i,
            isInSupportedDrRegion: f,
            includeBetaSettings: ee
        })] : [], ar({
            isAppleIntelligenceToggleEnabled: C,
            isAppleIntelligenceMdmToggleEnabled: w
        }), ...d(e?.planType) && _(`1458027806`) ? [Ve()] : [], or({
            isRbacEnabled: i,
            includeModels: m,
            includeThinkingMini: se,
            gpt5ThinkingEnabled: k,
            gpt51ThinkingEnabled: he,
            gpt52ThinkingEnabled: ge,
            reasoningModelEnabled: _e,
            hasThinkingMiniRouterControls: r,
            isSimplifiedModelControlEnabled: Ie,
            isSimplifiedModelControlReasoningProEnabled: M
        }), ...i && b ? [sr(x, S)] : [], ...B ? [B] : [], ...Ge ? [pr()] : [], ...Ke ? [mr()] : [], ...Qe ? [Qe] : [], ...i && be ? [fr({
            includeHazelnutsAdditionalRbacPermissions: Se
        })] : [], ...i ? [gr({
            includeConnectorPermissions: ie,
            includeCustomMcpPluginUploadPermission: oe,
            isFedrampCompliantWorkspace: F,
            showPluginRbacControls: I,
            workspaceName: e?.name
        })] : [], ...i && e?.planType === c.HC && (e.isOwnerOfAccount?.() || e.isAdminOfAccount?.()) && _(`3287240158`) ? [Me()] : [], ...i && ve ? [_r()] : [], ...i && A ? [vr()] : [], ...i && A ? [yr()] : [], ...i && A ? [br()] : [], ...!g && !D && le ? [nr()] : [], ...!D && (g && ue || de || fe) ? [rr(g && ue, fe, de)] : []]);
    if (ye)
        for (let e of H)
            for (let t of e.entries) t.rbac && Tn.includes(t.permissionName) && (t.disabled = !0, t.disabledReason = Q.thisFeatureDisabledDueToSandboxMode, t.permissionName === o.SearchAccess && (t.description = Q.webSearchDescriptionSandboxMode));
    if (F)
        for (let e of H) e.entries = e.entries.filter(e => e.rbac ? e.permissionName !== o.CanvasCodeNetworkAccess : e.settingName !== `canvas_code_network_access`), Pn(e.entries, We, I);
    return N ? [...H.filter(e => e.availableForEnterprise === !0), ...H.filter(e => e.availableForEnterprise !== !0)] : H
}
var dn, X, fn, Z, pn, mn, hn, Q, gn, _n, $, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr, rr, ir, ar, or, sr, cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr, Cr = e((() => {
    dn = re(), Ne(), Ie(), ht(), v(), fe(), De(), Se(), vt(), xt(), He(), we(), Bt(), Ht(), F(), ze(), Gt(), Jt(), Zt(), en(), rn(), cn(), de(), D(), ee(), b(), i(), T(), x(), s(), X = S(), fn = `text-token-link hover:text-token-link-hover underline`, Z = e => {
        "use forget";
        let t = (0, dn.c)(3),
            {
                chunk: n,
                href: r
            } = e,
            i;
        return t[0] !== n || t[1] !== r ? (i = (0, X.jsx)(`a`, {
            href: r,
            target: `_blank`,
            className: fn,
            rel: `noreferrer`,
            children: n
        }), t[0] = n, t[1] = r, t[2] = i) : i = t[2], i
    }, pn = `https://help.openai.com/articles/20001225`, mn = `https://help.openai.com/articles/20001225`, hn = `https://help.openai.com/en/articles/20001052-file-storage-and-library-in-chatgpt`, Q = C({
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
    }), gn = Q.improvedMemoryName, _n = Q.hipaaNotCoveredWarning, $ = {
        isCovered: !0
    }, vn = `3583985244`, yn = `permissions`, bn = e => typeof e == `object` && !!e, xn = e => {
        if (typeof e == `string`) return e;
        if (bn(e) && !(typeof e.permission != `string` || e.default_enable !== void 0 && typeof e.default_enable != `boolean`)) return e.permission
    }, Sn = () => {
        let e = m(vn).get(yn, []);
        if (!Array.isArray(e)) return new Set;
        let t = new Set;
        for (let n of e) {
            let e = xn(n);
            if (e == null) return new Set;
            t.add(e)
        }
        return t
    }, Cn = e => e != null && Sn().has(e), wn = ({
        hipaaMetadata: e,
        rbac: t,
        permissionName: n
    }) => t === !0 ? Cn(n) ? void 0 : _n : e?.isCovered === !0 ? void 0 : _n, Tn = [o.SearchAccess, o.DeepResearchAccess, o.AgentModeAccess, o.CodexAgentNetworkAccess, be, Ce, ve, o.CanvasCodeNetworkAccess, o.UploadWorkspacePlugins, o.UploadWorkspacePluginsWithCustomMcpServers, o.ShareWorkspacePlugins, o.PublishWorkspacePlugins], En = ({
        entry: e
    }) => !!e.nestedKey && !e.renderDisabledToggleAsOff, Dn = e => ({
        ...e,
        hipaaMetadata: $
    }), On = e => e.map(Dn), kn = () => ({
        rbac: !0,
        title: Q.fileLibraryAutoReferenceTitle,
        description: Q.fileLibraryAutoReferenceDescription,
        permissionName: o.FileLibraryAutoReferenceAccess
    }), An = new Set([o.ShareChatWithWorkspace, o.MemberRoleView, o.CanvasCodeExecutionAccess, o.SearchAccess, o.ImageGenAccess, o.GPT52ReasoningAccess, o.GPT52ProAccess, o.GPT51ReasoningAccess, o.GPT51ProAccess, o.ReasoningModelAccess, o.ProModelAccess, o.GPTO3Access, o.GPT41Access, o.GPTO4MiniAccess, o.CrudGPT, o.PrivatePublishGPT, o.ShareWorkspaceGPT, o.ShareExternalGPT, o.AllowAllThirdPartyGPT, o.AllowSpecificThirdPartyGPT, o.AllowFirstPartyGPT, o.CrudProject, o.ShareProject, o.ShareWorkspaceProject, o.SkillsAccess, o.SkillsCreate, o.SkillsUpload, o.SkillsShare, o.SkillsShareWorkspace, o.SkillsEnableShareWorkspace, o.EnhancedCitations, o.MemoryAccess, o.AllowCodexLocalAccess, o.BasisPointsAccess]), jn = [o.UseConnector, `codex_github_connector`], Mn = [o.UploadWorkspacePlugins, o.ShareWorkspacePlugins, o.PublishWorkspacePlugins], Nn = new Set([`share_chat`, `memory_access`, `rentention_policy`, `apple_intelligence_access`, `apple_intelligence_mdm_access`, `canvas_code_execution`, `web_search`, `codex_local_access`, `unified_container_internet_egress`]), Pn = (e, t, n = !1) => {
        let r = new Set([...An, ...t ? jn : [], ...n ? Mn : []]);
        for (let t of e) t.rbac && t.permissionName === o.AllowCodexLocalAccess && (t.title = Q.codexCliTitleCodexOnly, t.description = Q.codexCliTitleCodexOnly, t.fedrampCodexLocalCopy = !0), (t.rbac ? !r.has(t.permissionName) : !Nn.has(t.settingName)) && (t.disabled = !0, t.disabledReason = Q.thisFeatureDisabledForFedrampWorkspaces, t.renderDisabledToggleAsOff = !0)
    }, Fn = (e, t) => {
        let n = e.map(e => ({
            ...e
        }));
        return t && Pn(n, !1), n
    }, In = new Set([A, Ee, he]), Ln = () => {
        let e = ge();
        return {
            ...e,
            entries: e.entries.map(e => e.rbac && In.has(e.permissionName) ? Dn(e) : e)
        }
    }, Rn = ({
        isRbacEnabled: e,
        includeBetaSettingsAdvanced: t,
        isQuorumPlanType: n
    }) => n ? null : {
        title: Q.sharingTitle,
        entries: On(t && e ? [{
            rbac: !0,
            title: Q.shareChatAndTasksWithWorkspaceTitle,
            permissionName: o.ShareChatWithWorkspace
        }] : [{
            rbac: !1,
            title: Q.shareChatProjectTitle,
            settingName: `share_chat`
        }])
    }, zn = () => ({
        title: Q.memberVisibilityTitle,
        entries: On([{
            rbac: !0,
            title: Q.memberRoleViewTitle,
            description: Q.memberRoleViewDescription,
            permissionName: o.MemberRoleView
        }])
    }), Bn = () => ({
        title: Q.desktopAppBetaSectionTitle,
        entries: [{
            rbac: !0,
            title: Q.desktopAppBetaPermissionTitle,
            description: Q.desktopAppBetaPermissionDescription,
            permissionName: o.DesktopAppBetaFeaturesAccess
        }]
    }), Vn = () => ({
        title: Q.dataExportTitle,
        availableForEnterprise: !0,
        entries: [{
            rbac: !0,
            title: Q.dataExportAccessTitle,
            description: Q.dataExportAccessDescription,
            permissionName: o.DataExportAccess
        }]
    }), Hn = (e = `legacy`, t = !1) => {
        let n = {
            rbac: !0,
            title: Q.libraryWorkspaceLinksTitle,
            description: Q.libraryWorkspaceLinksDescription,
            permissionName: o.LibraryWorkspaceLinkSharingAccess
        };
        return e === `role_only_v1` ? [{
            rbac: !0,
            title: Q.librarySharingRoleOnlyTitle,
            description: Q.librarySharingRoleOnlyDescription,
            permissionName: o.LibrarySharingManagementAccess
        }, ...t ? [n] : []] : e === `legacy` ? [{
            rbac: !1,
            title: Q.librarySharingPolicyTitle,
            description: Q.librarySharingDescription,
            settingName: `library_sharing_enabled`
        }, {
            rbac: !0,
            title: Q.librarySharingManagementTitle,
            description: Q.librarySharingManagementDescription,
            permissionName: o.LibrarySharingManagementAccess
        }, ...t ? [n] : []] : []
    }, Un = ({
        isRbacEnabled: e
    }) => ({
        title: Q.fileLibrarySectionTitle,
        description: Q.fileLibrarySectionDescription,
        descriptionValues: {
            link: e => (0, X.jsx)(Z, {
                chunk: e,
                href: hn
            })
        },
        entries: [e ? kn() : {
            rbac: !1,
            title: Q.fileLibraryAutoReferenceTitle,
            description: Q.fileLibraryAutoReferenceDescription,
            settingName: `file_library_auto_reference`
        }]
    }), Wn = () => ({
        title: Q.taskSuggestionsSectionTitle,
        availableForEnterprise: !0,
        entries: [{
            rbac: !1,
            title: Q.taskSuggestionsTitle,
            description: Q.taskSuggestionsDescription,
            settingName: `task_suggestions`
        }]
    }), Gn = ({
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
            i = Dn(n ? {
                ...r,
                rbac: !0,
                permissionName: o.MemoryAccess,
                permissionNamesToRemoveWhenDisabled: [o.ImprovedMemoryAccess]
            } : {
                ...r,
                rbac: !1,
                settingName: `memory_access`
            }),
            a = n ? {
                rbac: !0,
                title: Q.improvedMemoryAccessTitle,
                description: Q.improvedMemoryAccessDescription,
                permissionName: o.ImprovedMemoryAccess,
                dependsOnPermissionName: o.MemoryAccess
            } : {
                rbac: !1,
                title: Q.improvedMemoryAccessTitle,
                description: Q.improvedMemoryAccessDescription,
                settingName: `m3m_workspace_enabled`
            };
        return {
            title: Q.memoryTitle,
            gaOptOut: t ? {
                feature: p.M3M_GA_OPT_OUT,
                featureName: Q.improvedMemoryName
            } : void 0,
            entries: [i, ...t ? [a] : []]
        }
    }, Kn = ({
        isRbacEnabled: e,
        includeBetaSettingsAdvanced: t
    }) => ({
        title: Q.canvasTitle,
        entries: e && t ? [{
            rbac: !0,
            title: Q.canvasCodeExecutionTitle,
            description: Q.canvasCodeExecutionDescription,
            hipaaMetadata: $,
            permissionName: o.CanvasCodeExecutionAccess
        }, {
            rbac: !0,
            title: Q.canvasCodeNetworkAccessTitle,
            description: Q.canvasCodeNetworkAccessDescription,
            permissionName: o.CanvasCodeNetworkAccess
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
    }), qn = ({
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
    } : null, Jn = ({
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
            permissionName: o.SearchAccess
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
            permissionName: o.DeepResearchAccess,
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
            permissionName: o.AgentModeAccess,
            disabled: !i,
            disabledReason: i ? void 0 : Q.agentModeDisabledReason
        }] : []]
    }), Yn = {
        title: Q.imageGenSectionTitle,
        entries: On([{
            rbac: !0,
            title: Q.imageGenTitle,
            description: Q.imageGenDescription,
            permissionName: o.ImageGenAccess
        }])
    }, Xn = ({
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
                    href: pn
                })
            },
            permissionName: o.PedagogyModeEnabled
        } : null, t ? {
            rbac: !0,
            title: Q.u18ModelPolicyTitle,
            description: Q.u18ModelPolicyDescription,
            descriptionValues: {
                link: e => (0, X.jsx)(Z, {
                    chunk: e,
                    href: mn
                })
            },
            permissionName: o.U18ModelPolicyEnabled
        } : null]);
        return n.length === 0 ? null : {
            title: Q.teenExperiencesTitle,
            availableForQuorum: !0,
            entries: n
        }
    }, Zn = ({
        isRbacEnabled: e,
        includeBetaSettingsAdvanced: t
    }) => ({
        title: Q.voiceTitle,
        entries: [...e ? [{
            rbac: !0,
            title: Q.voiceAccessTitle,
            description: Q.voiceAccessDescription,
            hipaaMetadata: $,
            permissionName: o.VoiceAccess,
            permissionNamesToRemoveWhenDisabled: [o.VideoScreenSharingAccess]
        }] : [], ...t && e ? [{
            rbac: !0,
            title: Q.videoScreenSharingTitle,
            description: Q.videoScreenSharingDescription,
            permissionName: o.VideoScreenSharingAccess,
            dependsOnPermissionName: o.VoiceAccess
        }] : [{
            rbac: !1,
            title: Q.videoScreenSharingTitle,
            description: Q.videoScreenSharingDescription,
            settingName: `video_screen_sharing`
        }]]
    }), Qn = () => ({
        rbac: !1,
        title: Q.accessTokenMaxTtlTitle,
        description: Q.accessTokenMaxTtlDescription,
        settingName: `access_token_max_ttl`,
        hipaaMetadata: $
    }), $n = ({
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
            permissionName: o.ProgrammaticAgentIdentitiesAccess
        } : t ? {
            rbac: !1,
            title: Q.personalAccessTokensTitle,
            description: Q.personalAccessTokensDescription,
            settingName: `personal_access_tokens`
        } : null, n ? Qn() : null])
    }), er = () => ({
        rbac: !0,
        title: Q.codexAccessTokensTitle,
        description: Q.codexAccessTokensDescription,
        permissionName: o.ProgrammaticAgentIdentitiesAccess
    }), tr = ({
        isRbacEnabled: e,
        includeBetaSettings: t,
        includeCodexSecurity: n,
        githubConnectorEnabled: r,
        codexOptimizeEnabled: i = !1,
        isCodexEnabledInRBACRole: a,
        showDeviceCodeAuthToggle: s,
        showLegacyCodexAccessTokensPermission: c,
        showAccessTokenMaxTtl: l,
        additionalCodexLocalEntries: u,
        isWorkLocalIndependentControlsEnabled: d
    }) => {
        let f = n && _(`870690999`),
            p = _(`3769444934`),
            m = !p && !r && !a,
            h = [],
            g = [],
            v = [];
        return t && e ? (g.push({
            rbac: !0,
            title: Q.codexTitle,
            description: Q.codexDescription,
            permissionName: o.AllowCodexAccess,
            permissionNamesToAddWhenEnabled: p ? [o.CodexManageWorkspaceEnvironments, o.CodexSlackPostingAccess] : void 0,
            disabled: m,
            disabledReason: m ? Q.disabledReasonGithub : void 0
        }), v.push({
            rbac: !0,
            title: Q.codexAdminTitle,
            description: Q.codexAdminDescription,
            permissionName: o.CodexAdminAccess
        }), h.push({
            rbac: !0,
            title: d ? Q.codexCliTitleCodexOnly : Q.codexCliTitle,
            description: d ? Q.codexCliDescriptionCodexOnly : Q.codexCliDescription,
            permissionName: o.AllowCodexLocalAccess,
            permissionNamesToRemoveWhenDisabled: [o.AllowComputerHistory],
            codexLocalOnly: d
        }), c && h.push(er()), l && h.push(Qn()), h.push(...u), h.push({
            rbac: !0,
            title: Q.windowsComputerUseTitle,
            description: Q.windowsComputerUseDescription,
            permissionName: o.WindowsComputerUseAccess
        }), p || g.push({
            rbac: !0,
            title: Q.codexSlackPostingTitle,
            description: Q.codexSlackPostingDescription,
            permissionName: o.CodexSlackPostingAccess
        }), n && (g.push({
            rbac: !0,
            title: f ? Q.defenseFactoryTitle : Q.codexSecurityTitle,
            description: f ? Q.defenseFactoryDescription : Q.codexSecurityDescription,
            permissionName: o.CodexSecurityAccess
        }), g.push({
            rbac: !0,
            title: f ? Q.defenseFactoryAdminTitle : Q.codexSecurityAdminTitle,
            description: f ? Q.defenseFactoryAdminDescription : Q.codexSecurityAdminDescription,
            permissionName: o.CodexSecurityAdminAccess
        })), s && h.push({
            rbac: !0,
            title: Q.codexDeviceCodeAuthTitle,
            description: Q.codexDeviceCodeAuthDescription,
            permissionName: o.CodexDeviceCodeAuthAccess,
            enableConfirmation: tt
        })) : (g.push({
            rbac: !1,
            title: Q.codexTitle,
            description: Q.codexDescription,
            settingName: `codex_access`
        }), v.push({
            rbac: !1,
            title: Q.codexAdminTitle,
            description: Q.codexAdminDescription,
            settingName: `codex_admin`,
            hipaaMetadata: $
        }), h.push({
            rbac: !1,
            title: d ? Q.codexCliTitleCodexOnly : Q.codexCliTitle,
            description: d ? Q.codexCliDescriptionCodexOnly : Q.codexCliDescription,
            settingName: `codex_local_access`,
            hipaaMetadata: $,
            codexLocalOnly: d
        }), c && h.push(er()), l && h.push(Qn()), h.push(...u), p || g.push({
            rbac: !1,
            title: Q.codexSlackPostingTitle,
            description: Q.codexSlackPostingDescription,
            settingName: `codex_slack_posting`
        }), n && (g.push({
            rbac: !1,
            title: f ? Q.defenseFactoryTitle : Q.codexSecurityTitle,
            description: f ? Q.defenseFactoryDescription : Q.codexSecurityDescription,
            settingName: `codex_security`
        }), g.push({
            rbac: !1,
            title: f ? Q.defenseFactoryAdminTitle : Q.codexSecurityAdminTitle,
            description: f ? Q.defenseFactoryAdminDescription : Q.codexSecurityAdminDescription,
            settingName: `codex_security_admin`
        })), s && h.push({
            rbac: !1,
            title: Q.codexDeviceCodeAuthTitle,
            description: Q.codexDeviceCodeAuthDescription,
            settingName: `codex_device_code_auth`,
            hipaaMetadata: $
        })), p && g.push(Xe()), e && i && (g.push(Pe()), v.push(Fe())), [{
            title: Q.codexAdminSection,
            entries: v
        }, {
            title: d ? Q.codexLocalCodexOnly : Q.codexLocal,
            anchorId: `codex-local-permissions`,
            availableForEnterprise: !0,
            entries: h
        }, {
            title: Q.codex,
            entries: [...p ? [] : [{
                rbac: !0,
                title: `GitHub App`,
                description: Q.githubConnectorDescription,
                descriptionValues: {
                    br: (0, X.jsx)(`br`, {}),
                    settingsLink: e => (0, X.jsx)(ne, {
                        to: `/admin/apps`,
                        className: fn,
                        children: e
                    })
                },
                permissionName: `codex_github_connector`
            }], ...g, ...p ? [] : t && e ? [{
                rbac: !0,
                title: Q.codexAgentNetworkTitle,
                description: Q.codexAgentNetworkDescription,
                permissionName: o.CodexAgentNetworkAccess
            }] : [{
                rbac: !1,
                title: Q.codexAgentNetworkTitle,
                description: Q.codexAgentNetworkDescription,
                settingName: `codex_agent_network`
            }]]
        }]
    }, nr = () => ({
        title: Q.workspaceReferralsEnabledSection,
        availableForEnterprise: !0,
        entries: [{
            rbac: !1,
            title: Q.workspaceReferralsEnabledTitle,
            description: Q.workspaceReferralsEnabledDescription,
            settingName: `workspace_referrals_enabled`
        }]
    }), rr = (e, t, n) => ({
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
    }), ir = ({
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
            permissionName: o.HiveAccess
        }, ...t ? [{
            rbac: !0,
            title: Q.recordReferencePastTranscriptsTitle,
            description: Q.recordReferencePastTranscriptsDescription,
            hipaaMetadata: $,
            permissionName: o.HiveKnowledgeRetrievalAccess
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
    }), ar = ({
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
    }), or = ({
        isRbacEnabled: e,
        includeModels: t,
        includeThinkingMini: n,
        gpt5ThinkingEnabled: r,
        gpt51ThinkingEnabled: i,
        gpt52ThinkingEnabled: a,
        reasoningModelEnabled: s,
        hasThinkingMiniRouterControls: c,
        isSimplifiedModelControlReasoningProEnabled: l
    }) => ({
        title: Q.modelsTitle,
        availableForEnterprise: !0,
        description: Q.modelsDescription,
        entries: [...n && e && c && !Oe(c) ? [{
            rbac: !0,
            title: `Redirect Auto Router to Thinking Mini`,
            disabled: !r && !i && !a || !s,
            disabledReason: !r && !i && !a || !s ? Q.gpt5ThinkingMiniAutoswitcherDisableDescription : void 0,
            description: Q.gpt5ThinkingMiniAutoswitcherDescription,
            hipaaMetadata: $,
            permissionName: o.GPT5ThinkingMiniAccess
        }] : [], ...t && e && !ke() ? Ae(l) : []]
    }), sr = (e, t) => {
        let n = {
                rbac: !0,
                title: Q.gptPrivatePublishTitle,
                description: Q.gptPrivatePublishDescription,
                hipaaMetadata: $,
                permissionName: o.PrivatePublishGPT
            },
            r = [{
                rbac: !0,
                title: Q.gptCrudTitle,
                description: Q.gptCrudDescription,
                hipaaMetadata: $,
                permissionName: o.CrudGPT
            }, ...e ? [n] : [], {
                rbac: !0,
                title: Q.gptShareWorkspaceTitle,
                description: Q.gptShareWorkspaceDescription,
                hipaaMetadata: $,
                permissionName: o.ShareWorkspaceGPT
            }, {
                rbac: !0,
                title: Q.gptShareExternalTitle,
                description: Q.gptShareExternalDescription,
                permissionName: o.ShareExternalGPT
            }, {
                rbac: !0,
                title: Q.gptAllowAllThirdPartyTitle,
                description: Q.gptAllowAllThirdPartyDescription,
                permissionName: o.AllowAllThirdPartyGPT
            }, {
                rbac: !0,
                title: Q.gptAllowSpecificThirdPartyTitle,
                description: Q.gptAllowSpecificThirdPartyDescription,
                permissionName: o.AllowSpecificThirdPartyGPT
            }, ...t ? [{
                rbac: !0,
                title: Q.gptAllowFirstPartyTitle,
                description: Q.gptAllowFirstPartyDescription,
                permissionName: o.AllowFirstPartyGPT
            }] : []];
        return {
            title: Q.gptSectionTitle,
            description: Q.gptSectionDescription,
            entries: r
        }
    }, cr = {
        rbac: !0,
        title: Q.projectSharingTitle,
        description: Q.projectSharingDescription,
        hipaaMetadata: $,
        permissionName: o.ShareProject,
        dependsOnPermissionName: o.CrudProject,
        permissionNamesToRemoveWhenDisabled: [o.ShareWorkspaceProject]
    }, lr = {
        rbac: !0,
        title: Q.projectShareWorkspaceTitle,
        description: Q.projectShareWorkspaceDescription,
        hipaaMetadata: $,
        permissionName: o.ShareWorkspaceProject,
        dependsOnPermissionName: o.ShareProject
    }, ur = () => ({
        title: Q.projectSectionTitle,
        description: Q.projectSectionDescription,
        entries: [{
            rbac: !0,
            title: Q.projectCrudTitle,
            description: Q.projectCrudDescription,
            hipaaMetadata: $,
            permissionName: o.CrudProject,
            permissionNamesToRemoveWhenDisabled: [o.ShareProject, o.ShareWorkspaceProject]
        }, cr, lr]
    }), dr = ({
        includeHazelnutsAdditionalRbacPermissions: e
    }) => a([{
        rbac: !0,
        title: Q.skillsAccessTitle,
        description: Q.skillsRbacAccessDescription,
        permissionName: o.SkillsAccess,
        permissionNamesToRemoveWhenDisabled: [o.SkillsCreate, o.SkillsUpload, o.SkillsShare, o.SkillsShareWorkspace, o.SkillsEnableShareWorkspace]
    }, _(`671163469`) ? {
        rbac: !0,
        title: Q.skillsCreateTitle,
        description: Q.skillsCreateDescription,
        permissionName: o.SkillsCreate,
        dependsOnPermissionName: o.SkillsAccess
    } : null, e ? {
        rbac: !0,
        title: Q.skillsUploadTitle,
        description: Q.skillsUploadDescription,
        permissionName: o.SkillsUpload,
        dependsOnPermissionName: o.SkillsAccess
    } : null, {
        rbac: !0,
        title: Q.skillsShareTitle,
        description: Q.skillsShareDescription,
        permissionName: o.SkillsShare,
        dependsOnPermissionName: o.SkillsAccess,
        permissionNamesToRemoveWhenDisabled: [o.SkillsShareWorkspace, o.SkillsEnableShareWorkspace]
    }, e ? {
        rbac: !0,
        title: Q.skillsShareWorkspaceTitle,
        description: Q.skillsShareWorkspaceDescription,
        permissionName: o.SkillsShareWorkspace,
        dependsOnPermissionName: o.SkillsShare,
        permissionNamesToRemoveWhenDisabled: [o.SkillsEnableShareWorkspace]
    } : null, {
        rbac: !0,
        title: Q.skillsEnabledShareTitle,
        description: Q.skillsEnableShareDescription,
        permissionName: o.SkillsEnableShareWorkspace,
        dependsOnPermissionName: e ? o.SkillsShareWorkspace : o.SkillsShare
    }]), fr = ({
        includeHazelnutsAdditionalRbacPermissions: e
    }) => ({
        title: Q.skillsSectionTitle,
        description: Q.skillsSectionDescription,
        entries: dr({
            includeHazelnutsAdditionalRbacPermissions: e
        })
    }), pr = () => ({
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
    }), mr = () => ({
        title: Q.sitesPreReleaseCardTitle,
        availableForEnterprise: !0,
        availableForQuorum: !1,
        description: Q.sitesPreReleaseCardDescription,
        entries: [At()]
    }), hr = e => (!e || _(`4195940720`)) && _(`263956393`), gr = ({
        includeConnectorPermissions: e,
        includeCustomMcpPluginUploadPermission: t = !0,
        isFedrampCompliantWorkspace: n = !1,
        showPluginRbacControls: r = hr(n),
        workspaceName: i
    }) => ({
        title: n ? Q.fedrampAppsSectionTitle : Q.connectedDataSectionTitle,
        entries: [...e ? [{
            rbac: !0,
            title: n ? Q.fedrampAppsRoleTitle : Q.pluginRoleTitle,
            description: n ? Q.fedrampAppsRoleDescription : Q.pluginRoleDescription,
            permissionName: o.UseConnector,
            nestedKey: o.UseConnector,
            fedrampAppsOnlyCopy: n
        }] : [], ...r ? [an(), ...t && !n ? [on()] : [], tn(), Qt(i)] : [], ...e && !n ? [{
            rbac: !0,
            title: Q.createMcpConnectorTitle,
            description: Q.createMcpConnectorDescription,
            permissionName: o.CreateMcpConnector,
            additionalPermissionNames: [o.DeveloperModeConnector]
        }] : []]
    }), _r = () => ({
        title: Q.enhancedCitationsTitle,
        description: Q.enhancedCitationsDescription,
        entries: [{
            rbac: !0,
            title: Q.enableEnhancedCitationsTitle,
            description: Q.enableEnhancedCitationsDescription,
            hipaaMetadata: $,
            permissionName: o.EnhancedCitations
        }]
    }), vr = () => ({
        title: Q.basisPointsTitle,
        description: Q.basisPointsDescription,
        entries: [{
            rbac: !0,
            title: Q.enableBasisPointsTitle,
            description: Q.enableBasisPointsDescription,
            hipaaMetadata: $,
            permissionName: o.BasisPointsAccess
        }]
    }), yr = () => ({
        title: Q.basisPointsPowerPointTitle,
        description: Q.basisPointsPowerPointDescription,
        entries: [{
            rbac: !0,
            title: Q.enableBasisPointsPowerPointTitle,
            description: Q.enableBasisPointsPowerPointDescription,
            permissionName: o.BasisPointsPowerPointAccess
        }]
    }), br = () => ({
        title: Q.basisPointsWordTitle,
        description: Q.basisPointsWordDescription,
        entries: [{
            rbac: !0,
            title: Q.enableBasisPointsWordTitle,
            description: Q.enableBasisPointsWordDescription,
            permissionName: o.BasisPointsWordAccess
        }]
    }), xr = _t, Sr = (e, t, n = !1, r, i) => {
        let a = e.isFedrampCompliantWorkspace,
            s = [],
            c = n && i === `role_only_v1` && r?.admin_preview_library_sharing?.length === 1 && r.admin_preview_library_sharing[0] === o.LibrarySharingManagementAccess,
            l = Hn(i, e.includeLibraryWorkspaceLinkSharingPermissions && (!c || r?.admin_preview_library_workspace_link_sharing?.includes(o.LibraryWorkspaceLinkSharingAccess)));
        return !e.isSelfServeBusinessWorkspace && (c || e.includeLibrarySharingPermissions && !e.isLibrarySharingGa) && l.length > 0 && s.push({
            name: t(Q.librarySharingTitle),
            description: t(i === `role_only_v1` ? Q.librarySharingRoleOnlyDescription : Q.librarySharingPreviewDescription),
            newReleaseEntries: Fn(l, a),
            ...c ? {
                adminPreviewFeature: `admin_preview_library_sharing`,
                shouldHideOptOutButton: !0,
                hideEarlyAccessBadge: !0
            } : {
                newReleaseOptOutFlag: p.LIBRARY_SHARING_GA_OPT_OUT
            },
            releaseDate: void 0,
            helpCenterLink: hn
        }), n && r?.admin_preview_test?.length === 1 && r.admin_preview_test[0] === o.FeatureReleaseDashboardPilotAccess && s.push({
            adminPreviewFeature: `admin_preview_test`,
            name: t(Q.adminPreviewTestTitle),
            description: Q.adminPreviewTestDescription,
            newReleaseEntries: [{
                rbac: !0,
                permissionName: o.FeatureReleaseDashboardPilotAccess,
                title: Q.adminPreviewTestTitle
            }],
            shouldHideOptOutButton: !0,
            hideEarlyAccessBadge: !0,
            helpCenterLink: void 0,
            releaseDate: void 0
        }), ln({
            isAppgenEnabled: e.includeSitesPermissionsEarlyAccess
        }) && (s = s.concat({
            name: t(Q.sitesPreReleaseCardTitle),
            description: t(Q.sitesPreReleaseCardDescription),
            newReleaseEntries: Fn([kt(), ...e.includeSitesExternalVisitorInvitesPermission ? [Ut()] : [], ...e.includeSitesPrivateTunnelsPermission ? [Kt(), Yt()] : []], a),
            newReleaseOptOutFlag: p.SITES_GA_OPT_OUT,
            shouldHideOptOutButton: !1,
            helpCenterLink: Pt,
            releaseDate: void 0
        })), s
    }
}));
export {
    ht as A, z as C, Je as D, Ye as E, We as M, L as N, qe as O, Ze as S, Ke as T, rt as _, un as a, st as b, En as c, Et as d, Bt as f, it as g, at as h, wn as i, I as j, Ge as k, St as l, yt as m, _n as n, gn as o, xt as p, Sr as r, Cr as s, $ as t, Ct as u, nt as v, tt as w, Qe as x, ot as y
};
//# sourceMappingURL=b90db9d2-nqn5x1xpx8jm45ix.js.map