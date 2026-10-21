import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Gnt as t,
    J3 as n,
    Qst as r,
    R1 as i,
    Z1 as a,
    Znt as o,
    eK as s,
    ect as c,
    nct as l,
    o6 as u,
    rK as d
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    wn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as p,
    r as m
} from "./333fd2ad-fv0vy2cs4eu5op5g.js";

function h() {
    "use forget";
    let e = (0, x.c)(3),
        n = a(),
        r = m(),
        i = n?.planType,
        o = !!(i && u(i));
    if (n == null || !o) return !1;
    let s;
    if (e[0] !== n.data.role || e[1] !== r) {
        let i = t(`2944006050`);
        s = v({
            role: n.data.role,
            isCodexAdmin: r,
            analyticsEnabledForUser: i
        }), e[0] = n.data.role, e[1] = r, e[2] = s
    } else s = e[2];
    return s
}

function g() {
    "use forget";
    let e = (0, x.c)(2),
        t = a()?.planType,
        n;
    return e[0] === t ? n = e[1] : (n = t && u(t), e[0] = t, e[1] = n), !n
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
    return e === c.OWNER || e === c.ADMIN || e === c.ANALYTICS_VIEWER || t || n
}

function y() {
    "use forget";
    let e = (0, x.c)(6),
        n = a(),
        i;
    e[0] === n ? i = e[1] : (i = n?.getWorkspaceId(), e[0] = n, e[1] = i);
    let {
        data: o,
        isLoading: s
    } = d(i), c;
    if (e[2] !== n || e[3] !== s || e[4] !== o?.beta_settings) {
        let i = t(`1172233566`),
            a = n == null,
            l = !!n?.isWorkspaceAccount?.() && i,
            u = i && (a || l && s),
            d = !!(o?.beta_settings?.[r.CODEX_USAGE_LEADERBOARD] ?? !0);
        c = b({
            legacyMeteringEnabled: t(`3964716022`),
            hasTokenUsageLeaderboardGate: t(`2025191131`),
            shouldCheckWorkspaceSetting: l,
            isLoadingWorkspaceSetting: u,
            isWorkspaceSettingEnabled: d
        }), e[2] = n, e[3] = s, e[4] = o?.beta_settings, e[5] = c
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
    x = f(), l(), s(), i(), n(), o(), p()
}));
export {
    g as a, _ as i, y as n, h as r, S as t
};
//# sourceMappingURL=fab52ad7-n5i9nsbozrmjuuca.js.map