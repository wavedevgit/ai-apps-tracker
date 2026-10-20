import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J1 as t,
    L1 as n,
    OO as r,
    Wnt as i,
    X1 as a,
    X3 as o,
    Xnt as s,
    cK as c,
    lK as l,
    mst as u,
    q3 as d,
    tct as f,
    vO as p
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    wn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Jb as h,
    Qb as g,
    Zb as _
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    i as v,
    r as y
} from "./5568a160-hqnwgtr60vkywid9.js";
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
} from "./b90db9d2-gg8cij0iwol0uu3s.js";
import {
    a as M,
    n as N,
    r as P,
    t as F
} from "./6fd89734-o3owlz5jhp17l8rm.js";

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
    let n = (0, B.c)(18),
        r = t(e),
        o = a(),
        s = r ?? o,
        c = s?.isHipaaCompliantWorkspace ?? !1,
        l = N(e),
        d = e == null || o?.id === e,
        f;
    n[0] !== s || n[1] !== d || n[2] !== l ? (f = I({
        account: s,
        flags: l,
        isCurrentWorkspace: d
    }), n[0] = s, n[1] = d, n[2] = l, n[3] = f) : f = n[3];
    let m = f,
        h;
    n[4] !== s?.planType || n[5] !== o?.id || n[6] !== m.isRbacEnabled || n[7] !== e ? (h = m.isRbacEnabled && (s?.planType === u.HC || s?.planType === u.QUORUM) && (e == null || o?.id === e) && i(`2796163190`), n[4] = s?.planType, n[5] = o?.id, n[6] = m.isRbacEnabled, n[7] = e, n[8] = h) : h = n[8];
    let g = h,
        _;
    n[9] !== s || n[10] !== l ? (_ = L({
        account: s,
        flags: l,
        isRbacEnabledForConnectors: p()
    }), n[9] = s, n[10] = l, n[11] = _) : _ = n[11];
    let v = _,
        y;
    return n[12] !== s || n[13] !== g || n[14] !== m || n[15] !== c || n[16] !== v ? (y = {
        account: s,
        flags: m,
        isHipaaCompliantWorkspace: c,
        isRbacEnabledForConnectors: v,
        ehrIntegrationsEnabled: g
    }, n[12] = s, n[13] = g, n[14] = m, n[15] = c, n[16] = v, n[17] = y) : y = n[17], y
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
        account: d,
        flags: f,
        isHipaaCompliantWorkspace: p,
        isRbacEnabledForConnectors: m
    } = e, g = I({
        account: d,
        flags: f
    }), v = L({
        account: d,
        flags: f,
        isRbacEnabledForConnectors: m
    }), y = P({
        account: d,
        isRbacEnabled: g.isRbacEnabled
    }), b = i(`2607061589`), S = d?.planType === u.HC || d?.planType === u.HC_CONSUMPTION || b, C = K(l.metadata), T = [...x({
        planType: d?.planType,
        enabled: g.isRbacEnabled && n
    }), ...w({
        account: d,
        workspaceSettings: t,
        isSearchEnabled: l.permissions.includes(c.SearchAccess),
        isEnterprisey: d?.isEnterprisey() ?? !1,
        ...g,
        codexOptimizeEnabled: o,
        librarySharingControlMode: s,
        isQuorum: p,
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
    B = m(), f(), r(), v(), M(), F(), n(), d(), s(), b(), O(), l(), S(), g(), V = `1106209706`, H = [{
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
//# sourceMappingURL=80359659-cyae7z5easjp6m1p.js.map