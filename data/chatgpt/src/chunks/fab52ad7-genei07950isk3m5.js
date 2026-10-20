import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $G as t,
    $st as n,
    Hnt as r,
    I1 as i,
    Jnt as a,
    K3 as o,
    Y1 as s,
    Yst as c,
    Zst as l,
    i6 as u,
    nK as d
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Tn as f
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    n as p,
    r as m
} from "./333fd2ad-er79o7n3dii0s8pz.js";

function h() {
    "use forget";
    let e = (0, x.c)(3),
        t = s(),
        n = m(),
        i = t?.planType,
        a = !!(i && u(i));
    if (t == null || !a) return !1;
    let o;
    if (e[0] !== t.data.role || e[1] !== n) {
        let i = r(`2944006050`);
        o = v({
            role: t.data.role,
            isCodexAdmin: n,
            analyticsEnabledForUser: i
        }), e[0] = t.data.role, e[1] = n, e[2] = o
    } else o = e[2];
    return o
}

function g() {
    "use forget";
    let e = (0, x.c)(2),
        t = s()?.planType,
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
    return e === l.OWNER || e === l.ADMIN || e === l.ANALYTICS_VIEWER || t || n
}

function y() {
    "use forget";
    let e = (0, x.c)(6),
        t = s(),
        n;
    e[0] === t ? n = e[1] : (n = t?.getWorkspaceId(), e[0] = t, e[1] = n);
    let {
        data: i,
        isLoading: a
    } = d(n), o;
    if (e[2] !== t || e[3] !== a || e[4] !== i?.beta_settings) {
        let n = r(`1172233566`),
            s = t == null,
            l = !!t?.isWorkspaceAccount?.() && n,
            u = n && (s || l && a),
            d = !!(i?.beta_settings?.[c.CODEX_USAGE_LEADERBOARD] ?? !0);
        o = b({
            legacyMeteringEnabled: r(`3964716022`),
            hasTokenUsageLeaderboardGate: r(`2025191131`),
            shouldCheckWorkspaceSetting: l,
            isLoadingWorkspaceSetting: u,
            isWorkspaceSettingEnabled: d
        }), e[2] = t, e[3] = a, e[4] = i?.beta_settings, e[5] = o
    } else o = e[5];
    return o
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
    x = f(), n(), t(), i(), o(), a(), p()
}));
export {
    g as a, _ as i, y as n, h as r, S as t
};
//# sourceMappingURL=fab52ad7-genei07950isk3m5.js.map