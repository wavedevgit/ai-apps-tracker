import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bnt as t,
    G3 as n,
    I1 as r,
    J3 as i,
    Knt as a,
    OO as o,
    Y1 as s,
    Zst as c,
    cK as l,
    lK as u,
    q1 as d,
    ust as f,
    vO as p
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    wn as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Ax as h,
    Dx as g,
    jx as _
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    i as v,
    r as y
} from "./5568a160-oin8suu1fqhjc516.js";
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
} from "./b90db9d2-c99sxwtq7uy6033i.js";
import {
    a as M,
    n as N,
    r as P,
    t as F
} from "./6fd89734-idm169ycg27fg5vu.js";

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
    }) ? n : i(e?.planType)
}

function R(e) {
    "use forget";
    let n = (0, B.c)(18),
        r = d(e),
        i = s(),
        a = r ?? i,
        o = a?.isHipaaCompliantWorkspace ?? !1,
        c = N(e),
        l = e == null || i?.id === e,
        u;
    n[0] !== a || n[1] !== l || n[2] !== c ? (u = I({
        account: a,
        flags: c,
        isCurrentWorkspace: l
    }), n[0] = a, n[1] = l, n[2] = c, n[3] = u) : u = n[3];
    let m = u,
        h;
    n[4] !== a?.planType || n[5] !== i?.id || n[6] !== m.isRbacEnabled || n[7] !== e ? (h = m.isRbacEnabled && (a?.planType === f.HC || a?.planType === f.QUORUM) && (e == null || i?.id === e) && t(`2796163190`), n[4] = a?.planType, n[5] = i?.id, n[6] = m.isRbacEnabled, n[7] = e, n[8] = h) : h = n[8];
    let g = h,
        _;
    n[9] !== a || n[10] !== c ? (_ = L({
        account: a,
        flags: c,
        isRbacEnabledForConnectors: p()
    }), n[9] = a, n[10] = c, n[11] = _) : _ = n[11];
    let v = _,
        y;
    return n[12] !== a || n[13] !== g || n[14] !== m || n[15] !== o || n[16] !== v ? (y = {
        account: a,
        flags: m,
        isHipaaCompliantWorkspace: o,
        isRbacEnabledForConnectors: v,
        ehrIntegrationsEnabled: g
    }, n[12] = a, n[13] = g, n[14] = m, n[15] = o, n[16] = v, n[17] = y) : y = n[17], y
}

function z({
    context: e,
    workspaceSettings: n,
    includeEhrIntegrations: r = e.ehrIntegrationsEnabled ?? !1,
    includeCustomMcpPluginUploadPermission: i = !0,
    includeUnsatisfiedDependencies: a = !1,
    codexOptimizeEnabled: o = !1,
    librarySharingControlMode: s,
    role: c
}) {
    let {
        account: u,
        flags: d,
        isHipaaCompliantWorkspace: p,
        isRbacEnabledForConnectors: m
    } = e, _ = I({
        account: u,
        flags: d
    }), v = L({
        account: u,
        flags: d,
        isRbacEnabledForConnectors: m
    }), y = P({
        account: u,
        isRbacEnabled: _.isRbacEnabled
    }), b = t(`2607061589`), S = u?.planType === f.HC || u?.planType === f.HC_CONSUMPTION || b, C = K(c.metadata), T = [...x({
        planType: u?.planType,
        enabled: _.isRbacEnabled && r
    }), ...w({
        account: u,
        workspaceSettings: n,
        isSearchEnabled: c.permissions.includes(l.SearchAccess),
        isEnterprisey: u?.isEnterprisey() ?? !1,
        ..._,
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
        showUnifiedContainerEgress: _.showUnifiedContainerEgressToggle
    }), ..._.isRbacEnabled && t(V) ? U(_.isFedrampCompliantWorkspace, C) : []], E = g(T.flatMap(e => e.entries)), D = T.map(e => ({
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
    B = m(), c(), o(), v(), M(), F(), r(), n(), a(), b(), O(), u(), S(), _(), V = `1106209706`, H = [{
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
//# sourceMappingURL=80359659-lz6hb65eujqiaaid.js.map