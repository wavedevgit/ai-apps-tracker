import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    PO as t,
    Pst as n,
    c6 as r,
    d6 as i,
    grt as a,
    i0 as o,
    o0 as s,
    oK as c,
    q1 as l,
    sK as u,
    urt as d,
    wO as f,
    xct as p
} from "./4813494d-r54yv6lv29x4ew99.js";
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
} from "./b17d4512-gr0xxdtewphn2eap.js";
import {
    i as b,
    r as x
} from "./5568a160-mtp5io6g41ej42fg.js";
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
} from "./b90db9d2-gie05lkujq4o0hfk.js";
import {
    a as ae,
    n as oe,
    r as se,
    t as ce
} from "./6fd89734-kig1aulnlgr3ff2p.js";

function A({
    account: e,
    flags: t,
    isCurrentWorkspace: n = !1
}) {
    if (!I({
            account: e,
            flags: t
        })) return t;
    let r = t.includeFloraPermissions || e?.isEnterprisey() === !0 && d(`1625797156`);
    return {
        ...t,
        isRbacEnabled: !0,
        includeBetaSettings: !0,
        includeBetaSettingsAdvanced: !0,
        includeGizmoPermissions: !0,
        includeThinkingMini: !0,
        includeFirstPartyGPTPermission: t.includeFirstPartyGPTPermission || d(`708977443`),
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
    }) ? n : i(e?.planType)
}

function le(e) {
    "use forget";
    let t = (0, M.c)(17),
        n = o(e),
        r = s(),
        i = n ?? r,
        a = i?.isHipaaCompliantWorkspace ?? !1,
        c = oe(e),
        l = e == null || r?.id === e,
        u;
    t[0] !== i || t[1] !== l || t[2] !== c ? (u = A({
        account: i,
        flags: c,
        isCurrentWorkspace: l
    }), t[0] = i, t[1] = l, t[2] = c, t[3] = u) : u = t[3];
    let p = u,
        m;
    t[4] !== r?.id || t[5] !== p.isRbacEnabled || t[6] !== e ? (m = p.isRbacEnabled && (e == null || r?.id === e) && d(`2796163190`), t[4] = r?.id, t[5] = p.isRbacEnabled, t[6] = e, t[7] = m) : m = t[7];
    let h = m,
        g;
    t[8] !== i || t[9] !== c ? (g = j({
        account: i,
        flags: c,
        isRbacEnabledForConnectors: f()
    }), t[8] = i, t[9] = c, t[10] = g) : g = t[10];
    let _ = g,
        v;
    return t[11] !== i || t[12] !== h || t[13] !== p || t[14] !== a || t[15] !== _ ? (v = {
        account: i,
        flags: p,
        isHipaaCompliantWorkspace: a,
        isRbacEnabledForConnectors: _,
        ehrIntegrationsEnabled: h
    }, t[11] = i, t[12] = h, t[13] = p, t[14] = a, t[15] = _, t[16] = v) : v = t[16], v
}

function ue({
    context: e,
    workspaceSettings: t,
    includeEhrIntegrations: r = e.ehrIntegrationsEnabled ?? !1,
    includeCustomMcpPluginUploadPermission: i = !0,
    includeUnsatisfiedDependencies: a = !1,
    codexOptimizeEnabled: o = !1,
    librarySharingControlMode: s,
    role: l
}) {
    let {
        account: u,
        flags: f,
        isHipaaCompliantWorkspace: p,
        isRbacEnabledForConnectors: m
    } = e, _ = A({
        account: u,
        flags: f
    }), v = j({
        account: u,
        flags: f,
        isRbacEnabledForConnectors: m
    }), y = se({
        account: u,
        isRbacEnabled: _.isRbacEnabled
    }), b = d(`2607061589`), x = u?.planType === n.HC || u?.planType === n.HC_CONSUMPTION || b, S = L(l.metadata), w = [..._.isRbacEnabled && (u?.isOwnerOfAccount() || u?.isAdminOfAccount()) ? [{
        title: C.codex,
        entries: [{
            rbac: !0,
            permissionName: c.OutpostRead,
            title: k.OutpostReadTitle,
            description: k.OutpostReadDescription
        }, {
            rbac: !0,
            permissionName: c.OutpostWrite,
            title: k.OutpostWriteTitle,
            description: k.OutpostWriteDescription
        }, {
            rbac: !0,
            permissionName: c.OutpostRegister,
            title: k.OutpostRegisterTitle,
            description: k.OutpostRegisterDescription
        }, {
            rbac: !0,
            permissionName: c.CodexPrivateCloudAccess,
            title: k.CodexPrivateCloudAccessTitle,
            description: k.CodexPrivateCloudAccessDescription
        }]
    }] : [], ...ee({
        enabled: _.isRbacEnabled && r
    }), ...te({
        account: u,
        workspaceSettings: t,
        isSearchEnabled: l.permissions.includes(c.SearchAccess),
        isEnterprisey: u?.isEnterprisey() ?? !1,
        ..._,
        codexOptimizeEnabled: o,
        librarySharingControlMode: s,
        isQuorum: p,
        includeConnectorPermissions: v,
        includeCustomMcpPluginUploadPermission: i,
        isCodexEnabledInRBACRole: l.permissions.includes(c.AllowCodexAccess),
        isRoleSpecificPage: !0,
        showDeviceCodeAuthToggle: !0,
        additionalCodexLocalEntries: y,
        gpt5ThinkingEnabled: l.permissions.includes(c.GPT5ThinkingAccess),
        gpt51ThinkingEnabled: l.permissions.includes(c.GPT51ReasoningAccess),
        gpt52ThinkingEnabled: l.permissions.includes(c.GPT52ReasoningAccess),
        reasoningModelEnabled: l.permissions.includes(c.ReasoningModelAccess),
        showEnhancedCitationsPermission: x,
        isSandboxModeEnabled: S,
        showUnifiedContainerEgress: _.showUnifiedContainerEgressToggle
    }), ..._.isRbacEnabled && d(N) ? F(_.isFedrampCompliantWorkspace, S) : []], T = g(w.flatMap(e => e.entries)), E = w.map(e => ({
        ...e,
        entries: e.entries.filter(e => e.rbac && (a || h({
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
    M = m(), p(), t(), b(), ae(), ce(), l(), r(), a(), ne(), re(), u(), S(), _(), N = `1106209706`, P = [{
        title: C.chat,
        entries: [{
            rbac: !0,
            title: w.title,
            description: w.infoTooltip,
            permissionName: c.DesktopAppChatAccess
        }]
    }, {
        title: C.codex,
        entries: [{
            rbac: !0,
            title: O.title,
            description: O.infoTooltip,
            permissionName: c.DictationAccess
        }, {
            rbac: !0,
            title: E.title,
            description: E.infoTooltip,
            permissionName: c.CodexLocalAutomationAccess
        }, {
            rbac: !0,
            title: D.title,
            description: D.infoTooltip,
            permissionName: c.CodexInAppBrowserAccess
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
        entries: e.entries.map(e => e.permissionName === c.CodexInAppBrowserAccess ? {
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
        let t = [e.permissionName, ...e.additionalPermissionNames ?? [], ...e.permissionName === c.UseConnector ? [c.UseWorkspacePlugins] : []],
            i = t.map(e => r.get(e));
        return i.some((r, i) => r == null ? e.permissionName === c.UseConnector && t[i] === c.UseWorkspacePlugins : !z(r.visibility_rule, n)) ? [] : i.every(t => t == null || e.permissionName === c.UseConnector && t.name === c.UseWorkspacePlugins && n.workspace.is_fedramp_compliant && !n.role.is_lockdown || z(t.editability_rule, n)) ? [e] : [{
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
    u(), v(), V = e => typeof e == `object` && !!e && `name` in e && typeof e.name == `string`, H = e => typeof e != `object` || !e ? !1 : `name` in e && typeof e.name == `string` && (!(`visibility_rule` in e) || e.visibility_rule == null || typeof e.visibility_rule == `string`) && (!(`editability_rule` in e) || e.editability_rule == null || typeof e.editability_rule == `string`) && (!(`inheritable` in e) || e.inheritable == null || typeof e.inheritable == `boolean`), W = new Set([c.UseConnector, c.UseWorkspacePlugins, c.UploadWorkspacePlugins, c.ShareWorkspacePlugins, c.PublishWorkspacePlugins, c.CreateMcpConnector]), G = new Set([c.SkillsAccess, c.SkillsCreate, c.SkillsUpload, c.SkillsShare, c.SkillsShareWorkspace, c.SkillsEnableShareWorkspace, c.SitesAccess, c.SitesPublishAccess, c.SitesInviteExternalAccess, c.MemoryAccess, c.ImprovedMemoryAccess, c.ProgrammaticAgentIdentitiesAccess, c.MemberRoleView, c.TeamCreate, c.TeamMemberInvite]), K = new Set([c.WorkOnlyMode, c.WorkOnlyChatInstant, c.SearchAccess, c.DeepResearchAccess, c.AgentModeAccess, c.CrudProject, c.ShareProject, c.ShareWorkspaceProject, `chatgpt.workspace.feature.hermes.access`, `chatgpt.workspace.feature.hermes.builder.access`, `chatgpt.workspace.feature.hermes.share.access`, `chatgpt.workspace.feature.hermes.publish.access`, `chatgpt.workspace.feature.hermes.share_personal.access`, c.CrudGPT, c.ShareWorkspaceGPT, c.ShareExternalGPT, c.AllowAllThirdPartyGPT, c.AllowSpecificThirdPartyGPT, c.AllowFirstPartyGPT, c.ImageGenAccess, c.VoiceAccess, c.VideoScreenSharingAccess, c.FileLibraryAutoReferenceAccess, c.HiveAccess, c.HiveKnowledgeRetrievalAccess, c.CanvasCodeExecutionAccess, c.CanvasCodeNetworkAccess, c.ShareChatWithWorkspace, c.EnhancedCitations, c.DesktopAppBetaFeaturesAccess, c.DataExportAccess, `chatgpt.workspace.contextlayer.admin`]), q = new Set([c.BasisPointsPowerPointAccess, c.BasisPointsWordAccess, c.BasisPointsAccess]), J = new Set([c.EarlyModelAccess, c.ReasoningModelAccess, c.ProModelAccess, c.GPT5ThinkingMiniAccess, c.GPT52ReasoningAccess, c.GPT52ProAccess, c.GPT51ReasoningAccess, c.GPT51ProAccess, c.GPTO3Access, c.GPT41Access, c.GPT45Access, c.GPTO4MiniAccess]), Y = new Set([c.GPT56SolAccess, c.GPT56TerraAccess, c.GPT56LunaAccess]), X = new Set([c.FloraLocalAccess, `chatgpt.workspace.feature.flora.access`, `chatgpt.workspace.feature.flora-browser-use.access`, `chatgpt.workspace.feature.flora-network-access.access`, `chatgpt.workspace.feature.flora-webhook-automations.access`]), Z = new Set([c.AllowCodexLocalAccess, c.AllowComputerHistory, `chatgpt.workspace.feature.codex-remote-control.access`, c.WindowsComputerUseAccess, c.CodexDeviceCodeAuthAccess, c.AllowCodexAccess, c.CodexOptimizeAccess, c.CodexOptimizeAdminAccess, c.CodexAgentNetworkAccess, c.CodexSlackPostingAccess, c.SecurityCodexAccessAllow, c.CodexAdminAccess, c.SecurityCodexAdminAllow]), Q = new Set([c.PrivatePublishGPT]), $ = {
        plugins_and_connected_data: W,
        plugin_custom_mcp_upload: new Set([c.UploadWorkspacePluginsWithCustomMcpServers]),
        workspace_capabilities: G,
        team_automation_write: new Set([c.TeamAutomationWrite]),
        chat: K,
        cme: new Set([c.CmeAccess]),
        chat_extensions: q,
        chat_models: J,
        chat_models_frontier: Y,
        work: X,
        codex: Z,
        codex_outpost: new Set([c.OutpostRead, c.OutpostWrite, c.OutpostRegister, c.CodexPrivateCloudAccess]),
        codex_workspace_environments: new Set([c.CodexManageWorkspaceEnvironments]),
        gpts: Q
    }, _e = new Set(Object.values($).flatMap(e => [...e])), ve = new Set([...G].filter(e => e !== c.MemberRoleView))
}));
export {
    pe as a, V as c, ue as d, fe as f, R as i, he as l, B as n, ye as o, le as p, me as r, H as s, ge as t, G as u
};
//# sourceMappingURL=a48d4e1d-nc6gi28f7keyiq8a.js.map