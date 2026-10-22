import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    ZG as t,
    bct as n,
    eK as r,
    gct as i,
    hrt as a,
    lrt as o,
    o0 as s,
    q1 as c,
    s6 as l,
    vct as u,
    y6 as d
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    wn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as p,
    r as m
} from "./333fd2ad-fg8uhsk4b92m5ciy.js";

function h() {
    "use forget";
    let e = (0, x.c)(3),
        t = s(),
        n = m(),
        r = t?.planType,
        i = !!(r && d(r));
    if (t == null || !i) return !1;
    let a;
    if (e[0] !== t.data.role || e[1] !== n) {
        let r = o(`2944006050`);
        a = v({
            role: t.data.role,
            isCodexAdmin: n,
            analyticsEnabledForUser: r
        }), e[0] = t.data.role, e[1] = n, e[2] = a
    } else a = e[2];
    return a
}

function g() {
    "use forget";
    let e = (0, x.c)(2),
        t = s()?.planType,
        n;
    return e[0] === t ? n = e[1] : (n = t && d(t), e[0] = t, e[1] = n), !n
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
    return e === u.OWNER || e === u.ADMIN || e === u.ANALYTICS_VIEWER || t || n
}

function y() {
    "use forget";
    let e = (0, x.c)(6),
        t = s(),
        n;
    e[0] === t ? n = e[1] : (n = t?.getWorkspaceId(), e[0] = t, e[1] = n);
    let {
        data: a,
        isLoading: c
    } = r(n), l;
    if (e[2] !== t || e[3] !== c || e[4] !== a?.beta_settings) {
        let n = o(`1172233566`),
            r = t == null,
            s = !!t?.isWorkspaceAccount?.() && n,
            u = n && (r || s && c),
            d = !!(a?.beta_settings?.[i.CODEX_USAGE_LEADERBOARD] ?? !0);
        l = b({
            legacyMeteringEnabled: o(`3964716022`),
            hasTokenUsageLeaderboardGate: o(`2025191131`),
            shouldCheckWorkspaceSetting: s,
            isLoadingWorkspaceSetting: u,
            isWorkspaceSettingEnabled: d
        }), e[2] = t, e[3] = c, e[4] = a?.beta_settings, e[5] = l
    } else l = e[5];
    return l
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
    x = f(), n(), t(), c(), l(), a(), p()
}));
export {
    g as a, _ as i, y as n, h as r, S as t
};
//# sourceMappingURL=fab52ad7-llue0lt9atqxcb6p.js.map