import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    ZG as t,
    _ct as n,
    b6 as r,
    c6 as i,
    eK as a,
    grt as o,
    o0 as s,
    q1 as c,
    urt as l,
    xct as u,
    yct as d
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    wn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as p,
    r as m
} from "./333fd2ad-bthla3swzzea1pjx.js";

function h() {
    "use forget";
    let e = (0, x.c)(3),
        t = s(),
        n = m(),
        i = t?.planType,
        a = !!(i && r(i));
    if (t == null || !a) return !1;
    let o;
    if (e[0] !== t.data.role || e[1] !== n) {
        let r = l(`2944006050`);
        o = v({
            role: t.data.role,
            isCodexAdmin: n,
            analyticsEnabledForUser: r
        }), e[0] = t.data.role, e[1] = n, e[2] = o
    } else o = e[2];
    return o
}

function g() {
    "use forget";
    let e = (0, x.c)(2),
        t = s()?.planType,
        n;
    return e[0] === t ? n = e[1] : (n = t && r(t), e[0] = t, e[1] = n), !n
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
    return e === d.OWNER || e === d.ADMIN || e === d.ANALYTICS_VIEWER || t || n
}

function y() {
    "use forget";
    let e = (0, x.c)(6),
        t = s(),
        r;
    e[0] === t ? r = e[1] : (r = t?.getWorkspaceId(), e[0] = t, e[1] = r);
    let {
        data: i,
        isLoading: o
    } = a(r), c;
    if (e[2] !== t || e[3] !== o || e[4] !== i?.beta_settings) {
        let r = l(`1172233566`),
            a = t == null,
            s = !!t?.isWorkspaceAccount?.() && r,
            u = r && (a || s && o),
            d = !!(i?.beta_settings?.[n.CODEX_USAGE_LEADERBOARD] ?? !0);
        c = b({
            legacyMeteringEnabled: l(`3964716022`),
            hasTokenUsageLeaderboardGate: l(`2025191131`),
            shouldCheckWorkspaceSetting: s,
            isLoadingWorkspaceSetting: u,
            isWorkspaceSettingEnabled: d
        }), e[2] = t, e[3] = o, e[4] = i?.beta_settings, e[5] = c
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
    x = f(), u(), t(), c(), i(), o(), p()
}));
export {
    g as a, _ as i, y as n, h as r, S as t
};
//# sourceMappingURL=fab52ad7-dhd17uasrr5c0idm.js.map