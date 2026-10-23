import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Crt as t,
    Oct as n,
    PO as r,
    Vst as i,
    _rt as a,
    c6 as o,
    d6 as s,
    i0 as c,
    o0 as l,
    oK as u,
    q1 as d,
    sK as f,
    wO as p
} from "./4813494d-mdvd4786a87166cc.js";
import {
    wn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    o as h,
    r as g,
    s as _
} from "./6fd89734-l8h178glfzpxynlr.js";
import {
    r as v,
    t as y
} from "./b17d4512-mdaczftnqlablix2.js";
import {
    i as b,
    r as x
} from "./5568a160-gi196efkrxiqcpin.js";
import {
    N as ee,
    P as S,
    S as C,
    _ as w,
    a as te,
    b as T,
    g as E,
    h as D,
    j as ne,
    s as re,
    v as O,
    x as k,
    y as ie
} from "./b90db9d2-obtztx8g8suw7cbr.js";
import {
    a as ae,
    n as oe,
    r as se,
    t as ce
} from "./6fd89734-hloqcgmx0nhh6xm5.js";

function A({
    account: e,
    flags: t,
    isCurrentWorkspace: n = !1
}) {
    if (!I({
            account: e,
            flags: t
        })) return t;
    let r = t.includeFloraPermissions || e?.isEnterprisey() === !0 && a(`1625797156`);
    return {
        ...t,
        isRbacEnabled: !0,
        includeBetaSettings: !0,
        includeBetaSettingsAdvanced: !0,
        includeGizmoPermissions: !0,
        includeThinkingMini: !0,
        includeFirstPartyGPTPermission: t.includeFirstPartyGPTPermission || a(`708977443`),
        includeFloraPermissions: r,
        isWorkLocalIndependentControlsEnabled: r && n && x()
    }
}

function j({
    account: e,
    flags: t,
    isRbacEnabledForConnectors: n
}) {
    return n || !I({
        account: e,
        flags: t
    }) ? n : s(e?.planType)
}

function le(e) {
    "use forget";
    let t = (0, M.c)(17),
        n = c(e),
        r = l(),
        i = n ?? r,
        o = i?.isHipaaCompliantWorkspace ?? !1,
        s = oe(e),
        u = e == null || r?.id === e,
        d;
    t[0] !== i || t[1] !== u || t[2] !== s ? (d = A({
        account: i,
        flags: s,
        isCurrentWorkspace: u
    }), t[0] = i, t[1] = u, t[2] = s, t[3] = d) : d = t[3];
    let f = d,
        m;
    t[4] !== r?.id || t[5] !== f.isRbacEnabled || t[6] !== e ? (m = f.isRbacEnabled && (e == null || r?.id === e) && a(`2796163190`), t[4] = r?.id, t[5] = f.isRbacEnabled, t[6] = e, t[7] = m) : m = t[7];
    let h = m,
        g;
    t[8] !== i || t[9] !== s ? (g = j({
        account: i,
        flags: s,
        isRbacEnabledForConnectors: p()
    }), t[8] = i, t[9] = s, t[10] = g) : g = t[10];
    let _ = g,
        v;
    return t[11] !== i || t[12] !== h || t[13] !== f || t[14] !== o || t[15] !== _ ? (v = {
        account: i,
        flags: f,
        isHipaaCompliantWorkspace: o,
        isRbacEnabledForConnectors: _,
        ehrIntegrationsEnabled: h
    }, t[11] = i, t[12] = h, t[13] = f, t[14] = o, t[15] = _, t[16] = v) : v = t[16], v
}

function ue({
    context: e,
    workspaceSettings: t,
    includeEhrIntegrations: n = e.ehrIntegrationsEnabled ?? !1,
    includeCustomMcpPluginUploadPermission: r = !0,
    includeUnsatisfiedDependencies: o = !1,
    codexOptimizeEnabled: s = !1,
    librarySharingControlMode: c,
    role: l
}) {
    let {
        account: d,
        flags: f,
        isHipaaCompliantWorkspace: p,
        isRbacEnabledForConnectors: m
    } = e, _ = A({
        account: d,
        flags: f
    }), v = j({
        account: d,
        flags: f,
        isRbacEnabledForConnectors: m
    }), y = se({
        account: d,
        isRbacEnabled: _.isRbacEnabled
    }), b = a(`2607061589`), x = d?.planType === i.HC || d?.planType === i.HC_CONSUMPTION || b, S = L(l.metadata), w = [..._.isRbacEnabled && (d?.isOwnerOfAccount() || d?.isAdminOfAccount()) ? [{
        title: C.codex,
        entries: [{
            rbac: !0,
            permissionName: u.OutpostRead,
            title: k.OutpostReadTitle,
            description: k.OutpostReadDescription
        }, {
            rbac: !0,
            permissionName: u.OutpostWrite,
            title: k.OutpostWriteTitle,
            description: k.OutpostWriteDescription
        }, {
            rbac: !0,
            permissionName: u.OutpostRegister,
            title: k.OutpostRegisterTitle,
            description: k.OutpostRegisterDescription
        }, {
            rbac: !0,
            permissionName: u.CodexPrivateCloudAccess,
            title: k.CodexPrivateCloudAccessTitle,
            description: k.CodexPrivateCloudAccessDescription
        }]
    }] : [], ...ee({
        enabled: _.isRbacEnabled && n
    }), ...te({
        account: d,
        workspaceSettings: t,
        isSearchEnabled: l.permissions.includes(u.SearchAccess),
        isEnterprisey: d?.isEnterprisey() ?? !1,
        ..._,
        codexOptimizeEnabled: s,
        librarySharingControlMode: c,
        isQuorum: p,
        includeConnectorPermissions: v,
        includeCustomMcpPluginUploadPermission: r,
        isCodexEnabledInRBACRole: l.permissions.includes(u.AllowCodexAccess),
        isRoleSpecificPage: !0,
        showDeviceCodeAuthToggle: !0,
        additionalCodexLocalEntries: y,
        gpt5ThinkingEnabled: l.permissions.includes(u.GPT5ThinkingAccess),
        gpt51ThinkingEnabled: l.permissions.includes(u.GPT51ReasoningAccess),
        gpt52ThinkingEnabled: l.permissions.includes(u.GPT52ReasoningAccess),
        reasoningModelEnabled: l.permissions.includes(u.ReasoningModelAccess),
        showEnhancedCitationsPermission: x,
        isSandboxModeEnabled: S,
        showUnifiedContainerEgress: _.showUnifiedContainerEgressToggle
    }), ..._.isRbacEnabled && a(N) ? F(_.isFedrampCompliantWorkspace, S) : []], T = g(w.flatMap(e => e.entries)), E = w.map(e => ({
        ...e,
        entries: e.entries.filter(e => e.rbac && (o || h({
            currentPermissionNames: l.permissions,
            entry: e,
            permissionDependencyByName: T
        })))
    })).filter(e => e.entries.length > 0);
    return {
        permissionsBySection: E,
        totalPermissionsCount: E.flatMap(e => e.entries).length,
        isSandboxModeEnabled: S
    }
}
var M, N, P, F, I, de, L, fe = e((() => {
    M = m(), n(), r(), b(), ae(), ce(), d(), o(), t(), ne(), re(), f(), S(), _(), N = `1106209706`, P = [{
        title: C.chat,
        entries: [{
            rbac: !0,
            title: w.title,
            description: w.infoTooltip,
            permissionName: u.DesktopAppChatAccess
        }]
    }, {
        title: C.codex,
        entries: [{
            rbac: !0,
            title: O.title,
            description: O.infoTooltip,
            permissionName: u.DictationAccess
        }, {
            rbac: !0,
            title: E.title,
            description: E.infoTooltip,
            permissionName: u.CodexLocalAutomationAccess
        }, {
            rbac: !0,
            title: D.title,
            description: D.infoTooltip,
            permissionName: u.CodexInAppBrowserAccess
        }]
    }], F = (e, t) => e ? P.map(e => ({
        ...e,
        entries: e.entries.map(e => ({
            ...e,
            disabled: !0,
            disabledReason: ie,
            renderDisabledToggleAsOff: !0
        }))
    })) : t ? P.map(e => ({
        ...e,
        entries: e.entries.map(e => e.permissionName === u.CodexInAppBrowserAccess ? {
            ...e,
            disabled: !0,
            disabledReason: T
        } : e)
    })) : P, I = ({
        account: e,
        flags: t
    }) => !1, de = e => typeof e == `object` && !!e, L = e => {
        if (!de(e)) return !1;
        let t = e.lockdown_mode;
        return typeof t == `boolean` && t
    }
}));

function R(e) {
    let t = new Map;
    for (let n of e) {
        let e = t.get(n.name) ?? [];
        e.push(n), t.set(n.name, e)
    }
    let n = new Set;
    for (let e of Object.values($))
        if ([...e === G ? ve : e].some(e => t.has(e)) && [...e].every(e => {
                let n = t.get(e) ?? [],
                    [r] = n;
                return n.length === 1 && r != null && typeof r.visibility_rule == `string` && r.visibility_rule.trim().length > 0 && typeof r.editability_rule == `string` && r.editability_rule.trim().length > 0 && typeof r.inheritable == `boolean`
            }))
            for (let t of e) n.add(t);
    return n
}

function pe({
    catalog: e,
    workspaceId: t
}) {
    let n = Array.isArray(e?.data) && e.data.every(V) ? e.data : [],
        r = e?.context,
        i = typeof r == `object` && r && `workspace` in r ? r.workspace : null,
        a = typeof r == `object` && r && `feature_gates` in r ? r.feature_gates : null;
    return {
        completePermissionNames: R(n),
        hasActiveCatalog: t.length > 0 && typeof r == `object` && !!r && `workspace_id` in r && r.workspace_id === t && typeof i == `object` && !!i && `id` in i && i.id === t && typeof a == `object` && !!a && `chatgpt_rbac_cel_permission_rules` in a && a.chatgpt_rbac_cel_permission_rules === !0
    }
}

function me({
    permissions: e,
    completePermissionNames: t,
    hasActiveCatalog: n
}) {
    let r = $.codex_outpost;
    if (n && [...r].every(e => t.has(e))) return e;
    let i = e.permissionsBySection.map(e => ({
        ...e,
        entries: e.entries.filter(e => !r.has(e.permissionName))
    })).filter(e => e.entries.length > 0);
    return {
        ...e,
        permissionsBySection: i,
        totalPermissionsCount: i.reduce((e, t) => e + t.entries.length, 0)
    }
}

function z(e, t) {
    if (e == null) return !0;
    if (e.trim().length === 0) return !1;
    try {
        return U ??= y({
            activeBreakpoints: [],
            theme: `light`
        }), U.evaluate(e, t) === !0
    } catch {
        return !1
    }
}

function he({
    explicitPermissions: e,
    effectivePermissions: t,
    rules: n
}) {
    let r = new Set(e),
        i = new Set(n.filter(e => e.inheritable === !1).map(e => e.name));
    return t.filter(e => r.has(e) || !i.has(e))
}

function B({
    entries: e,
    rules: t,
    context: n
}) {
    let r = new Map(t.map(e => [e.name, e]));
    return e.flatMap(e => {
        if (!e.rbac || !_e.has(e.permissionName) || r.get(e.permissionName) == null) return [e];
        let t = [e.permissionName, ...e.additionalPermissionNames ?? [], ...e.permissionName === u.UseConnector ? [u.UseWorkspacePlugins] : []],
            i = t.map(e => r.get(e));
        return i.some((r, i) => r == null ? e.permissionName === u.UseConnector && t[i] === u.UseWorkspacePlugins : !z(r.visibility_rule, n)) ? [] : i.every(t => t == null || e.permissionName === u.UseConnector && t.name === u.UseWorkspacePlugins && n.workspace.is_fedramp_compliant && !n.role.is_lockdown || z(t.editability_rule, n)) ? [e] : [{
            ...e,
            disabled: !0
        }]
    })
}

function ge({
    permissions: e,
    rules: t,
    context: n
}) {
    let r = e.permissionsBySection.map(e => ({
        ...e,
        entries: B({
            entries: e.entries,
            rules: t,
            context: n
        })
    })).filter(e => e.entries.length > 0);
    return {
        ...e,
        permissionsBySection: r,
        totalPermissionsCount: r.reduce((e, t) => e + t.entries.length, 0)
    }
}
var V, H, U, W, G, K, q, J, Y, X, Z, Q, $, _e, ve, ye = e((() => {
    f(), v(), V = e => typeof e == `object` && !!e && `name` in e && typeof e.name == `string`, H = e => typeof e != `object` || !e ? !1 : `name` in e && typeof e.name == `string` && (!(`visibility_rule` in e) || e.visibility_rule == null || typeof e.visibility_rule == `string`) && (!(`editability_rule` in e) || e.editability_rule == null || typeof e.editability_rule == `string`) && (!(`inheritable` in e) || e.inheritable == null || typeof e.inheritable == `boolean`), W = new Set([u.UseConnector, u.UseWorkspacePlugins, u.UploadWorkspacePlugins, u.ShareWorkspacePlugins, u.PublishWorkspacePlugins, u.CreateMcpConnector]), G = new Set([u.SkillsAccess, u.SkillsCreate, u.SkillsUpload, u.SkillsShare, u.SkillsShareWorkspace, u.SkillsEnableShareWorkspace, u.SitesAccess, u.SitesPublishAccess, u.SitesInviteExternalAccess, u.MemoryAccess, u.ImprovedMemoryAccess, u.ProgrammaticAgentIdentitiesAccess, u.MemberRoleView, u.TeamCreate, u.TeamMemberInvite]), K = new Set([u.WorkOnlyMode, u.WorkOnlyChatInstant, u.SearchAccess, u.DeepResearchAccess, u.AgentModeAccess, u.CrudProject, u.ShareProject, u.ShareWorkspaceProject, `chatgpt.workspace.feature.hermes.access`, `chatgpt.workspace.feature.hermes.builder.access`, `chatgpt.workspace.feature.hermes.share.access`, `chatgpt.workspace.feature.hermes.publish.access`, `chatgpt.workspace.feature.hermes.share_personal.access`, u.CrudGPT, u.ShareWorkspaceGPT, u.ShareExternalGPT, u.AllowAllThirdPartyGPT, u.AllowSpecificThirdPartyGPT, u.AllowFirstPartyGPT, u.ImageGenAccess, u.VoiceAccess, u.VideoScreenSharingAccess, u.FileLibraryAutoReferenceAccess, u.HiveAccess, u.HiveKnowledgeRetrievalAccess, u.CanvasCodeExecutionAccess, u.CanvasCodeNetworkAccess, u.ShareChatWithWorkspace, u.EnhancedCitations, u.DesktopAppBetaFeaturesAccess, u.DataExportAccess, `chatgpt.workspace.contextlayer.admin`]), q = new Set([u.BasisPointsPowerPointAccess, u.BasisPointsWordAccess, u.BasisPointsAccess]), J = new Set([u.EarlyModelAccess, u.ReasoningModelAccess, u.ProModelAccess, u.GPT5ThinkingMiniAccess, u.GPT52ReasoningAccess, u.GPT52ProAccess, u.GPT51ReasoningAccess, u.GPT51ProAccess, u.GPTO3Access, u.GPT41Access, u.GPT45Access, u.GPTO4MiniAccess]), Y = new Set([u.GPT56SolAccess, u.GPT56TerraAccess, u.GPT56LunaAccess]), X = new Set([u.FloraLocalAccess, `chatgpt.workspace.feature.flora.access`, `chatgpt.workspace.feature.flora-browser-use.access`, `chatgpt.workspace.feature.flora-network-access.access`, `chatgpt.workspace.feature.flora-webhook-automations.access`]), Z = new Set([u.AllowCodexLocalAccess, u.AllowComputerHistory, `chatgpt.workspace.feature.codex-remote-control.access`, u.WindowsComputerUseAccess, u.CodexDeviceCodeAuthAccess, u.AllowCodexAccess, u.CodexOptimizeAccess, u.CodexOptimizeAdminAccess, u.CodexAgentNetworkAccess, u.CodexSlackPostingAccess, u.SecurityCodexAccessAllow, u.CodexAdminAccess, u.SecurityCodexAdminAllow]), Q = new Set([u.PrivatePublishGPT]), $ = {
        plugins_and_connected_data: W,
        plugin_custom_mcp_upload: new Set([u.UploadWorkspacePluginsWithCustomMcpServers]),
        workspace_capabilities: G,
        team_automation_write: new Set([u.TeamAutomationWrite]),
        chat: K,
        cme: new Set([u.CmeAccess]),
        chat_extensions: q,
        chat_models: J,
        chat_models_frontier: Y,
        work: X,
        codex: Z,
        codex_outpost: new Set([u.OutpostRead, u.OutpostWrite, u.OutpostRegister, u.CodexPrivateCloudAccess]),
        codex_workspace_environments: new Set([u.CodexManageWorkspaceEnvironments]),
        gpts: Q
    }, _e = new Set(Object.values($).flatMap(e => [...e])), ve = new Set([...G].filter(e => e !== u.MemberRoleView))
}));
export {
    pe as a, V as c, ue as d, fe as f, R as i, he as l, B as n, ye as o, le as p, me as r, H as s, ge as t, G as u
};
//# sourceMappingURL=a48d4e1d-otckigvd59q5rja7.js.map