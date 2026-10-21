import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J3 as t,
    R1 as n,
    Y1 as r,
    Ynt as i,
    Z1 as a,
    Z3 as o,
    kO as s,
    lK as c,
    oct as l,
    trt as u,
    uK as d,
    yO as f,
    yst as p
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    wn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Jb as h,
    Qb as g,
    Zb as _
} from "./c2675c8c-ossqum2x3eut0sh8.js";
import {
    i as v,
    r as y
} from "./5568a160-l2hpcu7innzza9hc.js";
import {
    A as b,
    M as x,
    N as S,
    _ as C,
    a as w,
    b as T,
    g as E,
    h as D,
    s as O,
    v as k,
    x as A,
    y as j
} from "./b90db9d2-klk123cs5pzpi4ef.js";
import {
    a as M,
    n as N,
    r as P,
    t as F
} from "./6fd89734-g12h291aql6bqsfs.js";

function I({
    account: e,
    flags: t,
    isCurrentWorkspace: n = !1
}) {
    if (!W({
            account: e,
            flags: t
        })) return t;
    let r = t.includeFloraPermissions || e?.isEnterprisey() === !0 && i(`1625797156`);
    return {
        ...t,
        isRbacEnabled: !0,
        includeBetaSettings: !0,
        includeBetaSettingsAdvanced: !0,
        includeGizmoPermissions: !0,
        includeThinkingMini: !0,
        includeFirstPartyGPTPermission: t.includeFirstPartyGPTPermission || i(`708977443`),
        includeFloraPermissions: r,
        isWorkLocalIndependentControlsEnabled: r && n && y()
    }
}

function L({
    account: e,
    flags: t,
    isRbacEnabledForConnectors: n
}) {
    return n || !W({
        account: e,
        flags: t
    }) ? n : o(e?.planType)
}

function R(e) {
    "use forget";
    let t = (0, B.c)(17),
        n = r(e),
        o = a(),
        s = n ?? o,
        c = s?.isHipaaCompliantWorkspace ?? !1,
        l = N(e),
        u = e == null || o?.id === e,
        d;
    t[0] !== s || t[1] !== u || t[2] !== l ? (d = I({
        account: s,
        flags: l,
        isCurrentWorkspace: u
    }), t[0] = s, t[1] = u, t[2] = l, t[3] = d) : d = t[3];
    let p = d,
        m;
    t[4] !== o?.id || t[5] !== p.isRbacEnabled || t[6] !== e ? (m = p.isRbacEnabled && (e == null || o?.id === e) && i(`2796163190`), t[4] = o?.id, t[5] = p.isRbacEnabled, t[6] = e, t[7] = m) : m = t[7];
    let h = m,
        g;
    t[8] !== s || t[9] !== l ? (g = L({
        account: s,
        flags: l,
        isRbacEnabledForConnectors: f()
    }), t[8] = s, t[9] = l, t[10] = g) : g = t[10];
    let _ = g,
        v;
    return t[11] !== s || t[12] !== h || t[13] !== p || t[14] !== c || t[15] !== _ ? (v = {
        account: s,
        flags: p,
        isHipaaCompliantWorkspace: c,
        isRbacEnabledForConnectors: _,
        ehrIntegrationsEnabled: h
    }, t[11] = s, t[12] = h, t[13] = p, t[14] = c, t[15] = _, t[16] = v) : v = t[16], v
}

function z({
    context: e,
    workspaceSettings: t,
    includeEhrIntegrations: n = e.ehrIntegrationsEnabled ?? !1,
    includeCustomMcpPluginUploadPermission: r = !0,
    includeUnsatisfiedDependencies: a = !1,
    codexOptimizeEnabled: o = !1,
    librarySharingControlMode: s,
    role: l
}) {
    let {
        account: u,
        flags: d,
        isHipaaCompliantWorkspace: f,
        isRbacEnabledForConnectors: m
    } = e, g = I({
        account: u,
        flags: d
    }), v = L({
        account: u,
        flags: d,
        isRbacEnabledForConnectors: m
    }), y = P({
        account: u,
        isRbacEnabled: g.isRbacEnabled
    }), b = i(`2607061589`), S = u?.planType === p.HC || u?.planType === p.HC_CONSUMPTION || b, C = K(l.metadata), T = [...x({
        enabled: g.isRbacEnabled && n
    }), ...w({
        account: u,
        workspaceSettings: t,
        isSearchEnabled: l.permissions.includes(c.SearchAccess),
        isEnterprisey: u?.isEnterprisey() ?? !1,
        ...g,
        codexOptimizeEnabled: o,
        librarySharingControlMode: s,
        isQuorum: f,
        includeConnectorPermissions: v,
        includeCustomMcpPluginUploadPermission: r,
        isCodexEnabledInRBACRole: l.permissions.includes(c.AllowCodexAccess),
        isRoleSpecificPage: !0,
        showDeviceCodeAuthToggle: !0,
        additionalCodexLocalEntries: y,
        gpt5ThinkingEnabled: l.permissions.includes(c.GPT5ThinkingAccess),
        gpt51ThinkingEnabled: l.permissions.includes(c.GPT51ReasoningAccess),
        gpt52ThinkingEnabled: l.permissions.includes(c.GPT52ReasoningAccess),
        reasoningModelEnabled: l.permissions.includes(c.ReasoningModelAccess),
        showEnhancedCitationsPermission: S,
        isSandboxModeEnabled: C,
        showUnifiedContainerEgress: g.showUnifiedContainerEgressToggle
    }), ...g.isRbacEnabled && i(V) ? U(g.isFedrampCompliantWorkspace, C) : []], E = h(T.flatMap(e => e.entries)), D = T.map(e => ({
        ...e,
        entries: e.entries.filter(e => e.rbac && (a || _({
            currentPermissionNames: l.permissions,
            entry: e,
            permissionDependencyByName: E
        })))
    })).filter(e => e.entries.length > 0);
    return {
        permissionsBySection: D,
        totalPermissionsCount: D.flatMap(e => e.entries).length,
        isSandboxModeEnabled: C
    }
}
var B, V, H, U, W, G, K, q = e((() => {
    B = m(), l(), s(), v(), M(), F(), n(), t(), u(), b(), O(), d(), S(), g(), V = `1106209706`, H = [{
        title: A.chat,
        entries: [{
            rbac: !0,
            title: C.title,
            description: C.infoTooltip,
            permissionName: c.DesktopAppChatAccess
        }]
    }, {
        title: A.codex,
        entries: [{
            rbac: !0,
            title: k.title,
            description: k.infoTooltip,
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
    }], U = (e, t) => e ? H.map(e => ({
        ...e,
        entries: e.entries.map(e => ({
            ...e,
            disabled: !0,
            disabledReason: j,
            renderDisabledToggleAsOff: !0
        }))
    })) : t ? H.map(e => ({
        ...e,
        entries: e.entries.map(e => e.permissionName === c.CodexInAppBrowserAccess ? {
            ...e,
            disabled: !0,
            disabledReason: T
        } : e)
    })) : H, W = ({
        account: e,
        flags: t
    }) => !1, G = e => typeof e == `object` && !!e, K = e => {
        if (!G(e)) return !1;
        let t = e.lockdown_mode;
        return typeof t == `boolean` && t
    }
}));
export {
    q as n, R as r, z as t
};
//# sourceMappingURL=80359659-cg69in66bsts4dpq.js.map