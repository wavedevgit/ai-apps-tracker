import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Gnt as t,
    J3 as n,
    R1 as r,
    Y1 as i,
    Z1 as a,
    Z3 as o,
    Znt as s,
    hst as c,
    kO as l,
    lK as u,
    nct as d,
    uK as f,
    yO as p
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    wn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Jb as h,
    Qb as g,
    Zb as _
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    i as v,
    r as y
} from "./5568a160-oeu324ga41nqfd5h.js";
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
} from "./b90db9d2-m8if536i19ugk3ci.js";
import {
    a as M,
    n as N,
    r as P,
    t as F
} from "./6fd89734-s2xk1xwfqopq5j8h.js";

function I({
    account: e,
    flags: n,
    isCurrentWorkspace: r = !1
}) {
    if (!W({
            account: e,
            flags: n
        })) return n;
    let i = n.includeFloraPermissions || e?.isEnterprisey() === !0 && t(`1625797156`);
    return {
        ...n,
        isRbacEnabled: !0,
        includeBetaSettings: !0,
        includeBetaSettingsAdvanced: !0,
        includeGizmoPermissions: !0,
        includeThinkingMini: !0,
        includeFirstPartyGPTPermission: n.includeFirstPartyGPTPermission || t(`708977443`),
        includeFloraPermissions: i,
        isWorkLocalIndependentControlsEnabled: i && r && y()
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
        r = i(e),
        o = a(),
        s = r ?? o,
        l = s?.isHipaaCompliantWorkspace ?? !1,
        u = N(e),
        d = e == null || o?.id === e,
        f;
    n[0] !== s || n[1] !== d || n[2] !== u ? (f = I({
        account: s,
        flags: u,
        isCurrentWorkspace: d
    }), n[0] = s, n[1] = d, n[2] = u, n[3] = f) : f = n[3];
    let m = f,
        h;
    n[4] !== s?.planType || n[5] !== o?.id || n[6] !== m.isRbacEnabled || n[7] !== e ? (h = m.isRbacEnabled && (s?.planType === c.HC || s?.planType === c.QUORUM) && (e == null || o?.id === e) && t(`2796163190`), n[4] = s?.planType, n[5] = o?.id, n[6] = m.isRbacEnabled, n[7] = e, n[8] = h) : h = n[8];
    let g = h,
        _;
    n[9] !== s || n[10] !== u ? (_ = L({
        account: s,
        flags: u,
        isRbacEnabledForConnectors: p()
    }), n[9] = s, n[10] = u, n[11] = _) : _ = n[11];
    let v = _,
        y;
    return n[12] !== s || n[13] !== g || n[14] !== m || n[15] !== l || n[16] !== v ? (y = {
        account: s,
        flags: m,
        isHipaaCompliantWorkspace: l,
        isRbacEnabledForConnectors: v,
        ehrIntegrationsEnabled: g
    }, n[12] = s, n[13] = g, n[14] = m, n[15] = l, n[16] = v, n[17] = y) : y = n[17], y
}

function z({
    context: e,
    workspaceSettings: n,
    includeEhrIntegrations: r = e.ehrIntegrationsEnabled ?? !1,
    includeCustomMcpPluginUploadPermission: i = !0,
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
    }), b = t(`2607061589`), S = d?.planType === c.HC || d?.planType === c.HC_CONSUMPTION || b, C = K(l.metadata), T = [...x({
        planType: d?.planType,
        enabled: g.isRbacEnabled && r
    }), ...w({
        account: d,
        workspaceSettings: n,
        isSearchEnabled: l.permissions.includes(u.SearchAccess),
        isEnterprisey: d?.isEnterprisey() ?? !1,
        ...g,
        codexOptimizeEnabled: o,
        librarySharingControlMode: s,
        isQuorum: p,
        includeConnectorPermissions: v,
        includeCustomMcpPluginUploadPermission: i,
        isCodexEnabledInRBACRole: l.permissions.includes(u.AllowCodexAccess),
        isRoleSpecificPage: !0,
        showDeviceCodeAuthToggle: !0,
        additionalCodexLocalEntries: y,
        gpt5ThinkingEnabled: l.permissions.includes(u.GPT5ThinkingAccess),
        gpt51ThinkingEnabled: l.permissions.includes(u.GPT51ReasoningAccess),
        gpt52ThinkingEnabled: l.permissions.includes(u.GPT52ReasoningAccess),
        reasoningModelEnabled: l.permissions.includes(u.ReasoningModelAccess),
        showEnhancedCitationsPermission: S,
        isSandboxModeEnabled: C,
        showUnifiedContainerEgress: g.showUnifiedContainerEgressToggle
    }), ...g.isRbacEnabled && t(V) ? U(g.isFedrampCompliantWorkspace, C) : []], E = h(T.flatMap(e => e.entries)), D = T.map(e => ({
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
    B = m(), d(), l(), v(), M(), F(), r(), n(), s(), b(), O(), f(), S(), g(), V = `1106209706`, H = [{
        title: A.chat,
        entries: [{
            rbac: !0,
            title: C.title,
            description: C.infoTooltip,
            permissionName: u.DesktopAppChatAccess
        }]
    }, {
        title: A.codex,
        entries: [{
            rbac: !0,
            title: k.title,
            description: k.infoTooltip,
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
        entries: e.entries.map(e => e.permissionName === u.CodexInAppBrowserAccess ? {
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
//# sourceMappingURL=80359659-dbjqv4zxzuckf40a.js.map