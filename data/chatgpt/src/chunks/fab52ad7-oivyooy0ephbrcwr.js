import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $G as t,
    $st as n,
    L1 as r,
    Wnt as i,
    X1 as a,
    Xnt as o,
    Zst as s,
    a6 as c,
    nK as l,
    q3 as u,
    tct as d
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    wn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as p,
    r as m
} from "./333fd2ad-bdnn0l1bhdmn6fzy.js";

function h() {
    "use forget";
    let e = (0, x.c)(3),
        t = a(),
        n = m(),
        r = t?.planType,
        o = !!(r && c(r));
    if (t == null || !o) return !1;
    let s;
    if (e[0] !== t.data.role || e[1] !== n) {
        let r = i(`2944006050`);
        s = v({
            role: t.data.role,
            isCodexAdmin: n,
            analyticsEnabledForUser: r
        }), e[0] = t.data.role, e[1] = n, e[2] = s
    } else s = e[2];
    return s
}

function g() {
    "use forget";
    let e = (0, x.c)(2),
        t = a()?.planType,
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
    analyticsEnabledForUser: r
}) {
    return e === n.OWNER || e === n.ADMIN || e === n.ANALYTICS_VIEWER || t || r
}

function y() {
    "use forget";
    let e = (0, x.c)(6),
        t = a(),
        n;
    e[0] === t ? n = e[1] : (n = t?.getWorkspaceId(), e[0] = t, e[1] = n);
    let {
        data: r,
        isLoading: o
    } = l(n), c;
    if (e[2] !== t || e[3] !== o || e[4] !== r?.beta_settings) {
        let n = i(`1172233566`),
            a = t == null,
            l = !!t?.isWorkspaceAccount?.() && n,
            u = n && (a || l && o),
            d = !!(r?.beta_settings?.[s.CODEX_USAGE_LEADERBOARD] ?? !0);
        c = b({
            legacyMeteringEnabled: i(`3964716022`),
            hasTokenUsageLeaderboardGate: i(`2025191131`),
            shouldCheckWorkspaceSetting: l,
            isLoadingWorkspaceSetting: u,
            isWorkspaceSettingEnabled: d
        }), e[2] = t, e[3] = o, e[4] = r?.beta_settings, e[5] = c
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
    x = f(), d(), t(), r(), u(), o(), p()
}));
export {
    g as a, _ as i, y as n, h as r, S as t
};
//# sourceMappingURL=fab52ad7-oivyooy0ephbrcwr.js.map