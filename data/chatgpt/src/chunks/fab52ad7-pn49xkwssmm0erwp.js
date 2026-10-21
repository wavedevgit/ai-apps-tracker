import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J3 as t,
    R1 as n,
    Ynt as r,
    Z1 as i,
    eK as a,
    ict as o,
    nct as s,
    o6 as c,
    oct as l,
    rK as u,
    trt as d
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    wn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as p,
    r as m
} from "./333fd2ad-gvlenczmc54lab1e.js";

function h() {
    "use forget";
    let e = (0, x.c)(3),
        t = i(),
        n = m(),
        a = t?.planType,
        o = !!(a && c(a));
    if (t == null || !o) return !1;
    let s;
    if (e[0] !== t.data.role || e[1] !== n) {
        let i = r(`2944006050`);
        s = v({
            role: t.data.role,
            isCodexAdmin: n,
            analyticsEnabledForUser: i
        }), e[0] = t.data.role, e[1] = n, e[2] = s
    } else s = e[2];
    return s
}

function g() {
    "use forget";
    let e = (0, x.c)(2),
        t = i()?.planType,
        n;
    return e[0] === t ? n = e[1] : (n = t && c(t), e[0] = t, e[1] = n), !n
}

function _() {
    "use forget";
    let e = h(),
        t = g();
    return e || t
}

function v({
    role: e,
    isCodexAdmin: t,
    analyticsEnabledForUser: n
}) {
    return e === o.OWNER || e === o.ADMIN || e === o.ANALYTICS_VIEWER || t || n
}

function y() {
    "use forget";
    let e = (0, x.c)(6),
        t = i(),
        n;
    e[0] === t ? n = e[1] : (n = t?.getWorkspaceId(), e[0] = t, e[1] = n);
    let {
        data: a,
        isLoading: o
    } = u(n), c;
    if (e[2] !== t || e[3] !== o || e[4] !== a?.beta_settings) {
        let n = r(`1172233566`),
            i = t == null,
            l = !!t?.isWorkspaceAccount?.() && n,
            u = n && (i || l && o),
            d = !!(a?.beta_settings?.[s.CODEX_USAGE_LEADERBOARD] ?? !0);
        c = b({
            legacyMeteringEnabled: r(`3964716022`),
            hasTokenUsageLeaderboardGate: r(`2025191131`),
            shouldCheckWorkspaceSetting: l,
            isLoadingWorkspaceSetting: u,
            isWorkspaceSettingEnabled: d
        }), e[2] = t, e[3] = o, e[4] = a?.beta_settings, e[5] = c
    } else c = e[5];
    return c
}

function b({
    legacyMeteringEnabled: e,
    hasTokenUsageLeaderboardGate: t,
    shouldCheckWorkspaceSetting: n,
    isLoadingWorkspaceSetting: r,
    isWorkspaceSettingEnabled: i
}) {
    return e ? {
        hasAccess: !1,
        isLoading: r
    } : {
        hasAccess: t && (!n || i),
        isLoading: r
    }
}
var x, S = e((() => {
    x = f(), l(), a(), n(), t(), d(), p()
}));
export {
    g as a, _ as i, y as n, h as r, S as t
};
//# sourceMappingURL=fab52ad7-pn49xkwssmm0erwp.js.map