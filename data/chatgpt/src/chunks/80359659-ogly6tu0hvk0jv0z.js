import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $st as t,
    Hnt as n,
    I1 as r,
    Jnt as i,
    K3 as a,
    OO as o,
    Y1 as s,
    Y3 as c,
    cK as l,
    fst as u,
    lK as d,
    q1 as f,
    vO as p
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Tn as m
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Mx as h,
    Nx as g,
    kx as _
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    i as v,
    r as y
} from "./5568a160-gn5hg54e2wuj27ox.js";
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
} from "./b90db9d2-dq7o1nq7z944qy0j.js";
import {
    a as M,
    n as N,
    r as P,
    t as F
} from "./6fd89734-jlb688u1qoihl318.js";

function I({
    account: e,
    flags: t,
    isCurrentWorkspace: r = !1
}) {
    if (!W({
            account: e,
            flags: t
        })) return t;
    let i = t.includeFloraPermissions || e?.isEnterprisey() === !0 && n(`1625797156`);
    return {
        ...t,
        isRbacEnabled: !0,
        includeBetaSettings: !0,
        includeBetaSettingsAdvanced: !0,
        includeGizmoPermissions: !0,
        includeThinkingMini: !0,
        includeFirstPartyGPTPermission: t.includeFirstPartyGPTPermission || n(`708977443`),
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
    }) ? n : c(e?.planType)
}

function R(e) {
    "use forget";
    let t = (0, B.c)(18),
        r = f(e),
        i = s(),
        a = r ?? i,
        o = a?.isHipaaCompliantWorkspace ?? !1,
        c = N(e),
        l = e == null || i?.id === e,
        d;
    t[0] !== a || t[1] !== l || t[2] !== c ? (d = I({
        account: a,
        flags: c,
        isCurrentWorkspace: l
    }), t[0] = a, t[1] = l, t[2] = c, t[3] = d) : d = t[3];
    let m = d,
        h;
    t[4] !== a?.planType || t[5] !== i?.id || t[6] !== m.isRbacEnabled || t[7] !== e ? (h = m.isRbacEnabled && (a?.planType === u.HC || a?.planType === u.QUORUM) && (e == null || i?.id === e) && n(`2796163190`), t[4] = a?.planType, t[5] = i?.id, t[6] = m.isRbacEnabled, t[7] = e, t[8] = h) : h = t[8];
    let g = h,
        _;
    t[9] !== a || t[10] !== c ? (_ = L({
        account: a,
        flags: c,
        isRbacEnabledForConnectors: p()
    }), t[9] = a, t[10] = c, t[11] = _) : _ = t[11];
    let v = _,
        y;
    return t[12] !== a || t[13] !== g || t[14] !== m || t[15] !== o || t[16] !== v ? (y = {
        account: a,
        flags: m,
        isHipaaCompliantWorkspace: o,
        isRbacEnabledForConnectors: v,
        ehrIntegrationsEnabled: g
    }, t[12] = a, t[13] = g, t[14] = m, t[15] = o, t[16] = v, t[17] = y) : y = t[17], y
}

function z({
    context: e,
    workspaceSettings: t,
    includeEhrIntegrations: r = e.ehrIntegrationsEnabled ?? !1,
    includeCustomMcpPluginUploadPermission: i = !0,
    includeUnsatisfiedDependencies: a = !1,
    codexOptimizeEnabled: o = !1,
    librarySharingControlMode: s,
    role: c
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
    }), b = n(`2607061589`), S = d?.planType === u.HC || d?.planType === u.HC_CONSUMPTION || b, C = K(c.metadata), T = [...x({
        planType: d?.planType,
        enabled: g.isRbacEnabled && r
    }), ...w({
        account: d,
        workspaceSettings: t,
        isSearchEnabled: c.permissions.includes(l.SearchAccess),
        isEnterprisey: d?.isEnterprisey() ?? !1,
        ...g,
        codexOptimizeEnabled: o,
        librarySharingControlMode: s,
        isQuorum: p,
        includeConnectorPermissions: v,
        includeCustomMcpPluginUploadPermission: i,
        isCodexEnabledInRBACRole: c.permissions.includes(l.AllowCodexAccess),
        isRoleSpecificPage: !0,
        showDeviceCodeAuthToggle: !0,
        additionalCodexLocalEntries: y,
        gpt5ThinkingEnabled: c.permissions.includes(l.GPT5ThinkingAccess),
        gpt51ThinkingEnabled: c.permissions.includes(l.GPT51ReasoningAccess),
        gpt52ThinkingEnabled: c.permissions.includes(l.GPT52ReasoningAccess),
        reasoningModelEnabled: c.permissions.includes(l.ReasoningModelAccess),
        showEnhancedCitationsPermission: S,
        isSandboxModeEnabled: C,
        showUnifiedContainerEgress: g.showUnifiedContainerEgressToggle
    }), ...g.isRbacEnabled && n(V) ? U(g.isFedrampCompliantWorkspace, C) : []], E = _(T.flatMap(e => e.entries)), D = T.map(e => ({
        ...e,
        entries: e.entries.filter(e => e.rbac && (a || h({
            currentPermissionNames: c.permissions,
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
    B = m(), t(), o(), v(), M(), F(), r(), a(), i(), b(), O(), d(), S(), g(), V = `1106209706`, H = [{
        title: A.chat,
        entries: [{
            rbac: !0,
            title: C.title,
            description: C.infoTooltip,
            permissionName: l.DesktopAppChatAccess
        }]
    }, {
        title: A.codex,
        entries: [{
            rbac: !0,
            title: k.title,
            description: k.infoTooltip,
            permissionName: l.DictationAccess
        }, {
            rbac: !0,
            title: E.title,
            description: E.infoTooltip,
            permissionName: l.CodexLocalAutomationAccess
        }, {
            rbac: !0,
            title: D.title,
            description: D.infoTooltip,
            permissionName: l.CodexInAppBrowserAccess
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
        entries: e.entries.map(e => e.permissionName === l.CodexInAppBrowserAccess ? {
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
//# sourceMappingURL=80359659-ogly6tu0hvk0jv0z.js.map