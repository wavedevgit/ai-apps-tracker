import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    PO as t,
    i0 as n,
    jst as r,
    o0 as i,
    oK as a,
    prt as o,
    q1 as s,
    s6 as c,
    sK as l,
    srt as u,
    u6 as d,
    vct as f,
    wO as p
} from "./4813494d-itnrgnth03y1sm9d.js";
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
} from "./b17d4512-mt42pi4mattb8an9.js";
import {
    i as b,
    r as ee
} from "./5568a160-lu8w0zh2nanciyej.js";
import {
    N as te,
    P as x,
    S,
    _ as C,
    a as ne,
    b as w,
    g as T,
    h as E,
    j as re,
    s as ie,
    v as D,
    x as O,
    y as ae
} from "./b90db9d2-i7oumdosc3q3hqd0.js";
import {
    a as oe,
    n as se,
    r as ce,
    t as le
} from "./6fd89734-fpqsfwlvaqvie6mm.js";

function k({
    account: e,
    flags: t,
    isCurrentWorkspace: n = !1
}) {
    if (!F({
            account: e,
            flags: t
        })) return t;
    let r = t.includeFloraPermissions || e?.isEnterprisey() === !0 && u(`1625797156`);
    return {
        ...t,
        isRbacEnabled: !0,
        includeBetaSettings: !0,
        includeBetaSettingsAdvanced: !0,
        includeGizmoPermissions: !0,
        includeThinkingMini: !0,
        includeFirstPartyGPTPermission: t.includeFirstPartyGPTPermission || u(`708977443`),
        includeFloraPermissions: r,
        isWorkLocalIndependentControlsEnabled: r && n && ee()
    }
}

function A({
    account: e,
    flags: t,
    isRbacEnabledForConnectors: n
}) {
    return n || !F({
        account: e,
        flags: t
    }) ? n : d(e?.planType)
}

function ue(e) {
    "use forget";
    let t = (0, j.c)(17),
        r = n(e),
        a = i(),
        o = r ?? a,
        s = o?.isHipaaCompliantWorkspace ?? !1,
        c = se(e),
        l = e == null || a?.id === e,
        d;
    t[0] !== o || t[1] !== l || t[2] !== c ? (d = k({
        account: o,
        flags: c,
        isCurrentWorkspace: l
    }), t[0] = o, t[1] = l, t[2] = c, t[3] = d) : d = t[3];
    let f = d,
        m;
    t[4] !== a?.id || t[5] !== f.isRbacEnabled || t[6] !== e ? (m = f.isRbacEnabled && (e == null || a?.id === e) && u(`2796163190`), t[4] = a?.id, t[5] = f.isRbacEnabled, t[6] = e, t[7] = m) : m = t[7];
    let h = m,
        g;
    t[8] !== o || t[9] !== c ? (g = A({
        account: o,
        flags: c,
        isRbacEnabledForConnectors: p()
    }), t[8] = o, t[9] = c, t[10] = g) : g = t[10];
    let _ = g,
        v;
    return t[11] !== o || t[12] !== h || t[13] !== f || t[14] !== s || t[15] !== _ ? (v = {
        account: o,
        flags: f,
        isHipaaCompliantWorkspace: s,
        isRbacEnabledForConnectors: _,
        ehrIntegrationsEnabled: h
    }, t[11] = o, t[12] = h, t[13] = f, t[14] = s, t[15] = _, t[16] = v) : v = t[16], v
}

function de({
    context: e,
    workspaceSettings: t,
    includeEhrIntegrations: n = e.ehrIntegrationsEnabled ?? !1,
    includeCustomMcpPluginUploadPermission: i = !0,
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
    } = e, _ = k({
        account: d,
        flags: f
    }), v = A({
        account: d,
        flags: f,
        isRbacEnabledForConnectors: m
    }), y = ce({
        account: d,
        isRbacEnabled: _.isRbacEnabled
    }), b = u(`2607061589`), ee = d?.planType === r.HC || d?.planType === r.HC_CONSUMPTION || b, x = fe(l.metadata), C = [..._.isRbacEnabled && (d?.isOwnerOfAccount() || d?.isAdminOfAccount()) ? [{
        title: S.codex,
        entries: [{
            rbac: !0,
            permissionName: a.OutpostRead,
            title: O.OutpostReadTitle,
            description: O.OutpostReadDescription
        }, {
            rbac: !0,
            permissionName: a.OutpostWrite,
            title: O.OutpostWriteTitle,
            description: O.OutpostWriteDescription
        }, {
            rbac: !0,
            permissionName: a.OutpostRegister,
            title: O.OutpostRegisterTitle,
            description: O.OutpostRegisterDescription
        }, {
            rbac: !0,
            permissionName: a.CodexPrivateCloudAccess,
            title: O.CodexPrivateCloudAccessTitle,
            description: O.CodexPrivateCloudAccessDescription
        }]
    }] : [], ...te({
        enabled: _.isRbacEnabled && n
    }), ...ne({
        account: d,
        workspaceSettings: t,
        isSearchEnabled: l.permissions.includes(a.SearchAccess),
        isEnterprisey: d?.isEnterprisey() ?? !1,
        ..._,
        codexOptimizeEnabled: s,
        librarySharingControlMode: c,
        isQuorum: p,
        includeConnectorPermissions: v,
        includeCustomMcpPluginUploadPermission: i,
        isCodexEnabledInRBACRole: l.permissions.includes(a.AllowCodexAccess),
        isRoleSpecificPage: !0,
        showDeviceCodeAuthToggle: !0,
        additionalCodexLocalEntries: y,
        gpt5ThinkingEnabled: l.permissions.includes(a.GPT5ThinkingAccess),
        gpt51ThinkingEnabled: l.permissions.includes(a.GPT51ReasoningAccess),
        gpt52ThinkingEnabled: l.permissions.includes(a.GPT52ReasoningAccess),
        reasoningModelEnabled: l.permissions.includes(a.ReasoningModelAccess),
        showEnhancedCitationsPermission: ee,
        isSandboxModeEnabled: x,
        showUnifiedContainerEgress: _.showUnifiedContainerEgressToggle
    }), ..._.isRbacEnabled && u(M) ? P(_.isFedrampCompliantWorkspace, x) : []], w = g(C.flatMap(e => e.entries)), T = C.map(e => ({
        ...e,
        entries: e.entries.filter(e => e.rbac && (o || h({
            currentPermissionNames: l.permissions,
            entry: e,
            permissionDependencyByName: w
        })))
    })).filter(e => e.entries.length > 0);
    return {
        permissionsBySection: T,
        totalPermissionsCount: T.flatMap(e => e.entries).length,
        isSandboxModeEnabled: x
    }
}
var j, M, N, P, F, I, fe, pe = e((() => {
    j = m(), f(), t(), b(), oe(), le(), s(), c(), o(), re(), ie(), l(), x(), _(), M = `1106209706`, N = [{
        title: S.chat,
        entries: [{
            rbac: !0,
            title: C.title,
            description: C.infoTooltip,
            permissionName: a.DesktopAppChatAccess
        }]
    }, {
        title: S.codex,
        entries: [{
            rbac: !0,
            title: D.title,
            description: D.infoTooltip,
            permissionName: a.DictationAccess
        }, {
            rbac: !0,
            title: T.title,
            description: T.infoTooltip,
            permissionName: a.CodexLocalAutomationAccess
        }, {
            rbac: !0,
            title: E.title,
            description: E.infoTooltip,
            permissionName: a.CodexInAppBrowserAccess
        }]
    }], P = (e, t) => e ? N.map(e => ({
        ...e,
        entries: e.entries.map(e => ({
            ...e,
            disabled: !0,
            disabledReason: ae,
            renderDisabledToggleAsOff: !0
        }))
    })) : t ? N.map(e => ({
        ...e,
        entries: e.entries.map(e => e.permissionName === a.CodexInAppBrowserAccess ? {
            ...e,
            disabled: !0,
            disabledReason: w
        } : e)
    })) : N, F = ({
        account: e,
        flags: t
    }) => !1, I = e => typeof e == `object` && !!e, fe = e => {
        if (!I(e)) return !1;
        let t = e.lockdown_mode;
        return typeof t == `boolean` && t
    }
}));

function L(e) {
    let t = new Map;
    for (let n of e) {
        let e = t.get(n.name) ?? [];
        e.push(n), t.set(n.name, e)
    }
    let n = new Set;
    for (let e of Object.values(Q))
        if ([...e === W ? $ : e].some(e => t.has(e)) && [...e].every(e => {
                let n = t.get(e) ?? [],
                    [r] = n;
                return n.length === 1 && r != null && typeof r.visibility_rule == `string` && r.visibility_rule.trim().length > 0 && typeof r.editability_rule == `string` && r.editability_rule.trim().length > 0 && typeof r.inheritable == `boolean`
            }))
            for (let t of e) n.add(t);
    return n
}

function me({
    catalog: e,
    workspaceId: t
}) {
    let n = Array.isArray(e?.data) && e.data.every(B) ? e.data : [],
        r = e?.context,
        i = typeof r == `object` && r && `workspace` in r ? r.workspace : null,
        a = typeof r == `object` && r && `feature_gates` in r ? r.feature_gates : null;
    return {
        completePermissionNames: L(n),
        hasActiveCatalog: t.length > 0 && typeof r == `object` && !!r && `workspace_id` in r && r.workspace_id === t && typeof i == `object` && !!i && `id` in i && i.id === t && typeof a == `object` && !!a && `chatgpt_rbac_cel_permission_rules` in a && a.chatgpt_rbac_cel_permission_rules === !0
    }
}

function he({
    permissions: e,
    completePermissionNames: t,
    hasActiveCatalog: n
}) {
    let r = Q.codex_outpost;
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

function R(e, t) {
    if (e == null) return !0;
    if (e.trim().length === 0) return !1;
    try {
        return H ??= y({
            activeBreakpoints: [],
            theme: `light`
        }), H.evaluate(e, t) === !0
    } catch {
        return !1
    }
}

function ge({
    explicitPermissions: e,
    effectivePermissions: t,
    rules: n
}) {
    let r = new Set(e),
        i = new Set(n.filter(e => e.inheritable === !1).map(e => e.name));
    return t.filter(e => r.has(e) || !i.has(e))
}

function z({
    entries: e,
    rules: t,
    context: n
}) {
    let r = new Map(t.map(e => [e.name, e]));
    return e.flatMap(e => {
        if (!e.rbac || !ve.has(e.permissionName) || r.get(e.permissionName) == null) return [e];
        let t = [e.permissionName, ...e.additionalPermissionNames ?? [], ...e.permissionName === a.UseConnector ? [a.UseWorkspacePlugins] : []],
            i = t.map(e => r.get(e));
        return i.some((r, i) => r == null ? e.permissionName === a.UseConnector && t[i] === a.UseWorkspacePlugins : !R(r.visibility_rule, n)) ? [] : i.every(t => t == null || e.permissionName === a.UseConnector && t.name === a.UseWorkspacePlugins && n.workspace.is_fedramp_compliant && !n.role.is_lockdown || R(t.editability_rule, n)) ? [e] : [{
            ...e,
            disabled: !0
        }]
    })
}

function _e({
    permissions: e,
    rules: t,
    context: n
}) {
    let r = e.permissionsBySection.map(e => ({
        ...e,
        entries: z({
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
var B, V, H, U, W, G, K, q, J, Y, X, Z, Q, ve, $, ye = e((() => {
    l(), v(), B = e => typeof e == `object` && !!e && `name` in e && typeof e.name == `string`, V = e => typeof e != `object` || !e ? !1 : `name` in e && typeof e.name == `string` && (!(`visibility_rule` in e) || e.visibility_rule == null || typeof e.visibility_rule == `string`) && (!(`editability_rule` in e) || e.editability_rule == null || typeof e.editability_rule == `string`) && (!(`inheritable` in e) || e.inheritable == null || typeof e.inheritable == `boolean`), U = new Set([a.UseConnector, a.UseWorkspacePlugins, a.UploadWorkspacePlugins, a.ShareWorkspacePlugins, a.PublishWorkspacePlugins, a.CreateMcpConnector]), W = new Set([a.SkillsAccess, a.SkillsCreate, a.SkillsUpload, a.SkillsShare, a.SkillsShareWorkspace, a.SkillsEnableShareWorkspace, a.SitesAccess, a.SitesPublishAccess, a.SitesInviteExternalAccess, a.MemoryAccess, a.ImprovedMemoryAccess, a.ProgrammaticAgentIdentitiesAccess, a.MemberRoleView, a.TeamCreate, a.TeamMemberInvite]), G = new Set([a.WorkOnlyMode, a.WorkOnlyChatInstant, a.SearchAccess, a.DeepResearchAccess, a.AgentModeAccess, a.CrudProject, a.ShareProject, a.ShareWorkspaceProject, `chatgpt.workspace.feature.hermes.access`, `chatgpt.workspace.feature.hermes.builder.access`, `chatgpt.workspace.feature.hermes.share.access`, `chatgpt.workspace.feature.hermes.publish.access`, `chatgpt.workspace.feature.hermes.share_personal.access`, a.CrudGPT, a.ShareWorkspaceGPT, a.ShareExternalGPT, a.AllowAllThirdPartyGPT, a.AllowSpecificThirdPartyGPT, a.AllowFirstPartyGPT, a.ImageGenAccess, a.VoiceAccess, a.VideoScreenSharingAccess, a.FileLibraryAutoReferenceAccess, a.HiveAccess, a.HiveKnowledgeRetrievalAccess, a.CanvasCodeExecutionAccess, a.CanvasCodeNetworkAccess, a.ShareChatWithWorkspace, a.EnhancedCitations, a.DesktopAppBetaFeaturesAccess, a.DataExportAccess, `chatgpt.workspace.contextlayer.admin`]), K = new Set([a.BasisPointsPowerPointAccess, a.BasisPointsWordAccess, a.BasisPointsAccess]), q = new Set([a.EarlyModelAccess, a.ReasoningModelAccess, a.ProModelAccess, a.GPT5ThinkingMiniAccess, a.GPT52ReasoningAccess, a.GPT52ProAccess, a.GPT51ReasoningAccess, a.GPT51ProAccess, a.GPTO3Access, a.GPT41Access, a.GPT45Access, a.GPTO4MiniAccess]), J = new Set([a.GPT56SolAccess, a.GPT56TerraAccess, a.GPT56LunaAccess]), Y = new Set([a.FloraLocalAccess, `chatgpt.workspace.feature.flora.access`, `chatgpt.workspace.feature.flora-browser-use.access`, `chatgpt.workspace.feature.flora-network-access.access`, `chatgpt.workspace.feature.flora-webhook-automations.access`]), X = new Set([a.AllowCodexLocalAccess, a.AllowComputerHistory, `chatgpt.workspace.feature.codex-remote-control.access`, a.WindowsComputerUseAccess, a.CodexDeviceCodeAuthAccess, a.AllowCodexAccess, a.CodexOptimizeAccess, a.CodexOptimizeAdminAccess, a.CodexAgentNetworkAccess, a.CodexSlackPostingAccess, a.SecurityCodexAccessAllow, a.CodexAdminAccess, a.SecurityCodexAdminAllow]), Z = new Set([a.PrivatePublishGPT]), Q = {
        plugins_and_connected_data: U,
        plugin_custom_mcp_upload: new Set([a.UploadWorkspacePluginsWithCustomMcpServers]),
        workspace_capabilities: W,
        team_automation_write: new Set([a.TeamAutomationWrite]),
        chat: G,
        cme: new Set([a.CmeAccess]),
        chat_extensions: K,
        chat_models: q,
        chat_models_frontier: J,
        work: Y,
        codex: X,
        codex_outpost: new Set([a.OutpostRead, a.OutpostWrite, a.OutpostRegister, a.CodexPrivateCloudAccess]),
        codex_workspace_environments: new Set([a.CodexManageWorkspaceEnvironments]),
        gpts: Z
    }, ve = new Set(Object.values(Q).flatMap(e => [...e])), $ = new Set([...W].filter(e => e !== a.MemberRoleView))
}));
export {
    me as a, B as c, de as d, pe as f, L as i, ge as l, z as n, ye as o, ue as p, he as r, V as s, _e as t, W as u
};
//# sourceMappingURL=a48d4e1d-mjzyh2h19fcyeddt.js.map