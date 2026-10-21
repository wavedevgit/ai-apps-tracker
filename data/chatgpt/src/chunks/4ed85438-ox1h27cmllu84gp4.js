import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    FG as t,
    KG as n,
    bA as r,
    mA as i,
    oK as a,
    prt as o,
    sK as s,
    srt as c,
    zG as l
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Ln as u,
    Rn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var f, p = e((() => {
        f = `workspace-agents`, `${f}`
    })),
    m, h, g, _, v, y, b, x, S, C = e((() => {
        i(), d(), p(), m = `chatgpt.workspace.feature.hermes.access`, h = `chatgpt.workspace.feature.hermes.builder.access`, g = `chatgpt.workspace.feature.hermes.publish.access`, _ = `chatgpt.workspace.feature.hermes.share.access`, v = `chatgpt.workspace.feature.hermes.share_personal.access`, y = `https://help.openai.com/en/articles/20001143`, b = u({
            workspaceAgentsSectionTitle: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.workspaceAgentsSectionTitle`,
                defaultMessage: `Workspace agents`
            },
            workspaceAgentsSectionDescription: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.workspaceAgentsSectionDescription`,
                defaultMessage: `Choose which permissions this role has for agents.`
            },
            hermesAccessTitle: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.hermesAccessTitle`,
                defaultMessage: `Enable agents`
            },
            hermesAccessDescription: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.hermesAccessDescription`,
                defaultMessage: `Allow members to browse agents and run agents in this workspace.`
            },
            hermesBuilderTitle: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.hermesBuilderTitle`,
                defaultMessage: `Enable agent building`
            },
            hermesBuilderDescription: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.hermesBuilderDescription`,
                defaultMessage: `Allow members to create, edit, and duplicate agents in this workspace.`
            },
            hermesPublishTitle: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.hermesPublishTitle`,
                defaultMessage: `Enable agent publishing`
            },
            hermesPublishDescription: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.hermesPublishDescription`,
                defaultMessage: `Allow members to publish agents to the workspace directory.`
            },
            hermesPublishDisabledReason: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.hermesPublishDisabledReason`,
                defaultMessage: `Enable agent sharing first to allow this permission.`
            },
            hermesShareTitle: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.hermesShareTitle`,
                defaultMessage: `Enable agent sharing`
            },
            hermesShareWithoutPublishingDescription: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.hermesShareWithoutPublishingDescription`,
                defaultMessage: `Allow members to share agents with other users in the workspace.`
            },
            hermesSharePersonalTitle: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.hermesSharePersonalTitle`,
                defaultMessage: `Enable sharing agents with agent-owned connections`
            },
            hermesSharePersonalTitleUseForEveryone: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.hermesSharePersonalTitleUseForEveryone`,
                defaultMessage: `Enable sharing agents with one connection for everyone`
            },
            hermesSharePersonalDescription: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.hermesSharePersonalDescription`,
                defaultMessage: `Allow members to share agents that use agent-owned connections.`
            },
            hermesSharePersonalDescriptionUseForEveryone: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.hermesSharePersonalDescriptionUseForEveryone`,
                defaultMessage: `Allow members to share agents that use one connection for everyone.`
            },
            hermesSharePersonalDisabledReason: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.hermesSharePersonalDisabledReason`,
                defaultMessage: `Enable agent sharing first to allow this permission.`
            },
            hermesSharePersonalDisabledReasonUseForEveryone: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.hermesSharePersonalDisabledReasonUseForEveryone`,
                defaultMessage: `Enable agent sharing first to allow this permission.`
            },
            hermesSharePersonalEnableConfirmationBody: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.hermesSharePersonalEnableConfirmationBody`,
                defaultMessage: `Enabling agent publishing with personal connections allows creators of agents to share their personal connections with anyone who uses the agent.`
            },
            hermesSharePersonalEnableConfirmationBodyUseForEveryone: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.hermesSharePersonalEnableConfirmationBodyUseForEveryone`,
                defaultMessage: `Enabling this lets agent creators share agents that use one connection for everyone who can use the agent.`
            },
            hermesSharePersonalEnableConfirmationDetails: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.hermesSharePersonalEnableConfirmationDetails`,
                defaultMessage: `This can expose sensitive or private actions to users of the agent who are authenticated as the agent creator in the connections. <learnMoreLink>Learn more</learnMoreLink>`
            },
            hermesSharePersonalEnableConfirmationDetailsUseForEveryone: {
                id: `Hermes.Settings.EnterpriseChangeManagementFeatures.hermesSharePersonalEnableConfirmationDetailsUseForEveryone`,
                defaultMessage: `This can expose sensitive data or private actions through the creator's connected accounts. <learnMoreLink>Learn more</learnMoreLink>`
            }
        }), x = () => {
            let e = r();
            return [{
                rbac: !0,
                description: b.hermesAccessDescription,
                permissionName: m,
                title: b.hermesAccessTitle
            }, {
                rbac: !0,
                description: b.hermesBuilderDescription,
                permissionName: h,
                title: b.hermesBuilderTitle
            }, {
                rbac: !0,
                description: b.hermesShareWithoutPublishingDescription,
                permissionName: _,
                permissionNamesToRemoveWhenDisabled: [g, v],
                title: b.hermesShareTitle
            }, {
                rbac: !0,
                description: b.hermesPublishDescription,
                dependsOnPermissionName: _,
                disabledReason: b.hermesPublishDisabledReason,
                permissionName: g,
                title: b.hermesPublishTitle
            }, {
                rbac: !0,
                description: e ? b.hermesSharePersonalDescriptionUseForEveryone : b.hermesSharePersonalDescription,
                dependsOnPermissionName: _,
                disabledReason: e ? b.hermesSharePersonalDisabledReasonUseForEveryone : b.hermesSharePersonalDisabledReason,
                enableConfirmation: {
                    body: e ? b.hermesSharePersonalEnableConfirmationBodyUseForEveryone : b.hermesSharePersonalEnableConfirmationBody,
                    details: e ? b.hermesSharePersonalEnableConfirmationDetailsUseForEveryone : b.hermesSharePersonalEnableConfirmationDetails,
                    learnMoreUrl: y
                },
                permissionName: v,
                title: e ? b.hermesSharePersonalTitleUseForEveryone : b.hermesSharePersonalTitle
            }]
        }, S = () => ({
            anchorId: f,
            title: b.workspaceAgentsSectionTitle,
            description: b.workspaceAgentsSectionDescription,
            entries: x()
        })
    })),
    w, T, E, D, O, k, A, j, M, N, P, F = e((() => {
        s(), t(), o(), d(), w = `chatgpt.workspace.feature.flora.access`, T = `chatgpt.workspace.feature.flora-browser-use.access`, E = `chatgpt.workspace.feature.flora-network-access.access`, D = `chatgpt.workspace.feature.flora-webhook-automations.access`, O = u({
            sectionTitle: {
                id: `chatgpt.workspace.permissions.work.early_access.card.title.mobile_web`,
                defaultMessage: `Work in ChatGPT Mobile and Web`
            },
            sectionTitleCloud: {
                id: `chatgpt.workspace.permissions.work.early_access.card.title.cloud`,
                defaultMessage: `Work Cloud`
            },
            sectionTitleLocal: {
                id: `chatgpt.workspace.permissions.work.early_access.card.title.local`,
                defaultMessage: `Work Local`
            },
            sectionDescription: {
                id: `chatgpt.workspace.permissions.work.early_access.card.description.mobile_web`,
                defaultMessage: `Use Work in ChatGPT Mobile and Web to complete complex tasks in a secure, isolated environment.`
            },
            accessTitle: {
                id: `chatgpt.workspace.permissions.work.early_access.access.toggle.label.mobile_web`,
                defaultMessage: `Allow members to use Work in ChatGPT Mobile and Web`
            },
            accessTitleCloud: {
                id: `chatgpt.workspace.permissions.work.early_access.access.toggle.label.cloud`,
                defaultMessage: `Use Work in the cloud`
            },
            accessDescription: {
                id: `chatgpt.workspace.permissions.work.early_access.access.toggle.help_text.mobile_web`,
                defaultMessage: `Manage whether members can use Work in ChatGPT Mobile and Web.`
            },
            accessDescriptionCloud: {
                id: `chatgpt.workspace.permissions.work.early_access.access.toggle.help_text.cloud`,
                defaultMessage: `Available on ChatGPT Mobile, Web, and Desktop. Runs complex tasks in a secure, isolated cloud environment.`
            },
            accessTitleLocal: {
                id: `chatgpt.workspace.permissions.work.early_access.access.toggle.label.local`,
                defaultMessage: `Use Work locally`
            },
            accessDescriptionLocal: {
                id: `chatgpt.workspace.permissions.work.early_access.access.toggle.help_text.local`,
                defaultMessage: `Available on ChatGPT Desktop. Runs Work tasks on the member’s computer instead of in the cloud.`
            },
            networkAccessTitle: {
                id: `chatgpt.workspace.permissions.work.early_access.network_access.toggle.label.mobile_web`,
                defaultMessage: `Allow network access for Work in ChatGPT Mobile and Web`
            },
            networkAccessDescription: {
                id: `chatgpt.workspace.permissions.work.early_access.network_access.toggle.help_text.mobile_web`,
                defaultMessage: `Allow Work in ChatGPT Mobile and Web to access the internet while running code and shell commands.`
            },
            networkAccessTitleCloud: {
                id: `chatgpt.workspace.permissions.work.early_access.network_access.toggle.label.cloud`,
                defaultMessage: `Allow network access for Work in the cloud`
            },
            networkAccessDescriptionCloud: {
                id: `chatgpt.workspace.permissions.work.early_access.network_access.toggle.help_text.cloud`,
                defaultMessage: `Lets code and shell commands in cloud Work tasks access the internet.`
            },
            webhookAutomationsTitle: {
                id: `chatgpt.workspace.permissions.work.early_access.webhook_automations.toggle.label`,
                defaultMessage: `Allow event-triggered scheduled tasks`
            },
            webhookAutomationsDescription: {
                id: `chatgpt.workspace.permissions.work.early_access.webhook_automations.toggle.help_text`,
                defaultMessage: `Allow connected plugins to trigger scheduled tasks when supported events occur.`
            },
            browserUseTitle: {
                id: `chatgpt.workspace.permissions.work.early_access.browser_use.toggle.label.mobile_web`,
                defaultMessage: `Allow browser use for Work in ChatGPT Mobile and Web`
            },
            browserUseDescription: {
                id: `chatgpt.workspace.permissions.work.early_access.browser_use.toggle.help_text.mobile_web`,
                defaultMessage: `Allow Work in ChatGPT Mobile and Web to use browser tools while completing tasks.`
            },
            browserUseTitleCloud: {
                id: `chatgpt.workspace.permissions.work.early_access.browser_use.toggle.label.cloud`,
                defaultMessage: `Allow browser use for Work in the cloud`
            },
            browserUseDescriptionCloud: {
                id: `chatgpt.workspace.permissions.work.early_access.browser_use.toggle.help_text.cloud`,
                defaultMessage: `Lets cloud Work tasks open and interact with websites using a browser.`
            },
            workOnlyModeTitle: {
                id: `chatgpt.workspace.permissions.work.work_only_mode.toggle.label.rollout_neutral`,
                defaultMessage: `Make Work the only experience for members`
            },
            workOnlyModeDescription: {
                id: `chatgpt.workspace.permissions.work.work_only_mode.toggle.help_text.instant_enforcement_enabled`,
                defaultMessage: `Members can only use Work unless you allow Chat for quick questions below.`
            },
            workOnlyModeDescriptionBeforeInstantEnforcement: {
                id: `chatgpt.workspace.permissions.work.work_only_mode.toggle.help_text.instant_enforcement_pending`,
                defaultMessage: `Members use Work. Chat remains available for quick questions during rollout.`
            },
            workOnlyChatInstantTitle: {
                id: `chatgpt.workspace.permissions.work.work_only_chat_instant.toggle.label`,
                defaultMessage: `Allow Chat for quick questions`
            },
            workOnlyChatInstantDescription: {
                id: `chatgpt.workspace.permissions.work.work_only_chat_instant.toggle.help_text`,
                defaultMessage: `Let members use Chat with Instant for quick questions.`
            },
            workOnlyModeDependencyDisabled: {
                id: `chatgpt.workspace.permissions.work.work_only_mode.toggle.parent_disabled`,
                defaultMessage: `To turn this on, first turn on Use Work in the cloud for this role.`
            },
            workOnlyModeDependencyDisabledMobileWeb: {
                id: `chatgpt.workspace.permissions.work.work_only_mode.toggle.parent_disabled.mobile_web`,
                defaultMessage: `To turn this on, first turn on Allow members to use Work in ChatGPT Mobile and Web for this role.`
            }
        }), k = () => l() ? O.workOnlyModeDescription : O.workOnlyModeDescriptionBeforeInstantEnforcement, A = {
            chatInstantDescription: O.workOnlyChatInstantDescription,
            chatInstantTitle: O.workOnlyChatInstantTitle,
            description: O.workOnlyModeDescription,
            title: O.workOnlyModeTitle
        }, j = e => n() ? [{
            rbac: !0,
            title: O.workOnlyModeTitle,
            description: k(),
            permissionName: a.WorkOnlyMode,
            dependsOnPermissionName: w,
            visualParentPermissionNames: [],
            showWhenParentDisabled: !0,
            dependencyDisabledMessage: e ? O.workOnlyModeDependencyDisabled : O.workOnlyModeDependencyDisabledMobileWeb
        }, ...l() ? [{
            rbac: !0,
            title: O.workOnlyChatInstantTitle,
            description: O.workOnlyChatInstantDescription,
            permissionName: a.WorkOnlyChatInstant,
            dependsOnPermissionName: a.WorkOnlyMode,
            showWhenParentDisabled: !0
        }] : []] : [], M = e => [{
            rbac: !0,
            title: e ? O.accessTitleCloud : O.accessTitle,
            description: e ? O.accessDescriptionCloud : O.accessDescription,
            permissionName: w
        }, ...j(e), {
            rbac: !0,
            title: e ? O.browserUseTitleCloud : O.browserUseTitle,
            description: e ? O.browserUseDescriptionCloud : O.browserUseDescription,
            permissionName: T,
            dependsOnPermissionName: w
        }, {
            rbac: !0,
            title: e ? O.networkAccessTitleCloud : O.networkAccessTitle,
            description: e ? O.networkAccessDescriptionCloud : O.networkAccessDescription,
            permissionName: E,
            dependsOnPermissionName: w
        }, ...c(`1159770884`) ? [{
            rbac: !0,
            title: O.webhookAutomationsTitle,
            description: O.webhookAutomationsDescription,
            permissionName: D,
            dependsOnPermissionName: w
        }] : []], N = (e = !1) => ({
            title: e ? O.sectionTitleCloud : O.sectionTitle,
            description: e ? void 0 : O.sectionDescription,
            entries: M(e)
        }), P = (e = !1) => [N(e), ...e ? [{
            title: O.sectionTitleLocal,
            entries: [{
                rbac: !0,
                title: O.accessTitleLocal,
                description: O.accessDescriptionLocal,
                permissionName: a.FloraLocalAccess
            }]
        }] : []]
    }));
export {
    k as a, A as c, _ as d, S as f, p as h, D as i, m as l, f as m, T as n, P as o, C as p, E as r, F as s, w as t, h as u
};
//# sourceMappingURL=4ed85438-ox1h27cmllu84gp4.js.map