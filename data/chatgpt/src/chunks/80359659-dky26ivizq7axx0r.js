import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C1 as t,
    IG as n,
    LG as r,
    Lot as i,
    S3 as a,
    eO as o,
    pnt as s,
    u1 as c,
    uO as l,
    wst as u,
    x1 as d,
    y3 as f,
    ynt as p
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    wn as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    cy as h,
    iy as g,
    sy as _
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    i as v,
    r as y
} from "./5568a160-lq4fhhrmhf7wjeln.js";
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
} from "./b90db9d2-nqn5x1xpx8jm45ix.js";
import {
    a as M,
    n as N,
    r as P,
    t as F
} from "./6fd89734-ukvy961mk0pbfe49.js";

function I({
    account: e,
    flags: t,
    isCurrentWorkspace: n = !1
}) {
    if (!W({
            account: e,
            flags: t
        })) return t;
    let r = t.includeFloraPermissions || e?.isEnterprisey() === !0 && s(`1625797156`);
    return {
        ...t,
        isRbacEnabled: !0,
        includeBetaSettings: !0,
        includeBetaSettingsAdvanced: !0,
        includeGizmoPermissions: !0,
        includeThinkingMini: !0,
        includeFirstPartyGPTPermission: t.includeFirstPartyGPTPermission || s(`708977443`),
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
    }) ? n : a(e?.planType)
}

function R(e) {
    "use forget";
    let n = (0, B.c)(18),
        r = d(e),
        a = t(),
        c = r ?? a,
        l = c?.isHipaaCompliantWorkspace ?? !1,
        u = N(e),
        f = e == null || a?.id === e,
        p;
    n[0] !== c || n[1] !== f || n[2] !== u ? (p = I({
        account: c,
        flags: u,
        isCurrentWorkspace: f
    }), n[0] = c, n[1] = f, n[2] = u, n[3] = p) : p = n[3];
    let m = p,
        h;
    n[4] !== c?.planType || n[5] !== a?.id || n[6] !== m.isRbacEnabled || n[7] !== e ? (h = m.isRbacEnabled && (c?.planType === i.HC || c?.planType === i.QUORUM) && (e == null || a?.id === e) && s(`2796163190`), n[4] = c?.planType, n[5] = a?.id, n[6] = m.isRbacEnabled, n[7] = e, n[8] = h) : h = n[8];
    let g = h,
        _;
    n[9] !== c || n[10] !== u ? (_ = L({
        account: c,
        flags: u,
        isRbacEnabledForConnectors: o()
    }), n[9] = c, n[10] = u, n[11] = _) : _ = n[11];
    let v = _,
        y;
    return n[12] !== c || n[13] !== g || n[14] !== m || n[15] !== l || n[16] !== v ? (y = {
        account: c,
        flags: m,
        isHipaaCompliantWorkspace: l,
        isRbacEnabledForConnectors: v,
        ehrIntegrationsEnabled: g
    }, n[12] = c, n[13] = g, n[14] = m, n[15] = l, n[16] = v, n[17] = y) : y = n[17], y
}

function z({
    context: e,
    workspaceSettings: t,
    includeEhrIntegrations: r = e.ehrIntegrationsEnabled ?? !1,
    includeCustomMcpPluginUploadPermission: a = !0,
    includeUnsatisfiedDependencies: o = !1,
    codexOptimizeEnabled: c = !1,
    librarySharingControlMode: l,
    role: u
}) {
    let {
        account: d,
        flags: f,
        isHipaaCompliantWorkspace: p,
        isRbacEnabledForConnectors: m
    } = e, h = I({
        account: d,
        flags: f
    }), v = L({
        account: d,
        flags: f,
        isRbacEnabledForConnectors: m
    }), y = P({
        account: d,
        isRbacEnabled: h.isRbacEnabled
    }), b = s(`2607061589`), S = d?.planType === i.HC || d?.planType === i.HC_CONSUMPTION || b, C = K(u.metadata), T = [...x({
        planType: d?.planType,
        enabled: h.isRbacEnabled && r
    }), ...w({
        account: d,
        workspaceSettings: t,
        isSearchEnabled: u.permissions.includes(n.SearchAccess),
        isEnterprisey: d?.isEnterprisey() ?? !1,
        ...h,
        codexOptimizeEnabled: c,
        librarySharingControlMode: l,
        isQuorum: p,
        includeConnectorPermissions: v,
        includeCustomMcpPluginUploadPermission: a,
        isCodexEnabledInRBACRole: u.permissions.includes(n.AllowCodexAccess),
        isRoleSpecificPage: !0,
        showDeviceCodeAuthToggle: !0,
        additionalCodexLocalEntries: y,
        gpt5ThinkingEnabled: u.permissions.includes(n.GPT5ThinkingAccess),
        gpt51ThinkingEnabled: u.permissions.includes(n.GPT51ReasoningAccess),
        gpt52ThinkingEnabled: u.permissions.includes(n.GPT52ReasoningAccess),
        reasoningModelEnabled: u.permissions.includes(n.ReasoningModelAccess),
        showEnhancedCitationsPermission: S,
        isSandboxModeEnabled: C,
        showUnifiedContainerEgress: h.showUnifiedContainerEgressToggle
    }), ...h.isRbacEnabled && s(V) ? U(h.isFedrampCompliantWorkspace, C) : []], E = g(T.flatMap(e => e.entries)), D = T.map(e => ({
        ...e,
        entries: e.entries.filter(e => e.rbac && (o || _({
            currentPermissionNames: u.permissions,
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
    B = m(), u(), l(), v(), M(), F(), c(), f(), p(), b(), O(), r(), S(), h(), V = `1106209706`, H = [{
        title: A.chat,
        entries: [{
            rbac: !0,
            title: C.title,
            description: C.infoTooltip,
            permissionName: n.DesktopAppChatAccess
        }]
    }, {
        title: A.codex,
        entries: [{
            rbac: !0,
            title: k.title,
            description: k.infoTooltip,
            permissionName: n.DictationAccess
        }, {
            rbac: !0,
            title: E.title,
            description: E.infoTooltip,
            permissionName: n.CodexLocalAutomationAccess
        }, {
            rbac: !0,
            title: D.title,
            description: D.infoTooltip,
            permissionName: n.CodexInAppBrowserAccess
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
        entries: e.entries.map(e => e.permissionName === n.CodexInAppBrowserAccess ? {
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
//# sourceMappingURL=80359659-dky26ivizq7axx0r.js.map