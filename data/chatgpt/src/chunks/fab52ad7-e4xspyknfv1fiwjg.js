import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $G as t,
    Bnt as n,
    G3 as r,
    I1 as i,
    Knt as a,
    Y1 as o,
    Yst as s,
    Zst as c,
    nK as l,
    qst as u,
    r6 as d
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    wn as f
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    n as p,
    r as m
} from "./333fd2ad-b5u70cfshpk5iylu.js";

function h() {
    "use forget";
    let e = (0, x.c)(3),
        t = o(),
        r = m(),
        i = t?.planType,
        a = !!(i && d(i));
    if (t == null || !a) return !1;
    let s;
    if (e[0] !== t.data.role || e[1] !== r) {
        let i = n(`2944006050`);
        s = v({
            role: t.data.role,
            isCodexAdmin: r,
            analyticsEnabledForUser: i
        }), e[0] = t.data.role, e[1] = r, e[2] = s
    } else s = e[2];
    return s
}

function g() {
    "use forget";
    let e = (0, x.c)(2),
        t = o()?.planType,
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
    return e === s.OWNER || e === s.ADMIN || e === s.ANALYTICS_VIEWER || t || n
}

function y() {
    "use forget";
    let e = (0, x.c)(6),
        t = o(),
        r;
    e[0] === t ? r = e[1] : (r = t?.getWorkspaceId(), e[0] = t, e[1] = r);
    let {
        data: i,
        isLoading: a
    } = l(r), s;
    if (e[2] !== t || e[3] !== a || e[4] !== i?.beta_settings) {
        let r = n(`1172233566`),
            o = t == null,
            c = !!t?.isWorkspaceAccount?.() && r,
            l = r && (o || c && a),
            d = !!(i?.beta_settings?.[u.CODEX_USAGE_LEADERBOARD] ?? !0);
        s = b({
            legacyMeteringEnabled: n(`3964716022`),
            hasTokenUsageLeaderboardGate: n(`2025191131`),
            shouldCheckWorkspaceSetting: c,
            isLoadingWorkspaceSetting: l,
            isWorkspaceSettingEnabled: d
        }), e[2] = t, e[3] = a, e[4] = i?.beta_settings, e[5] = s
    } else s = e[5];
    return s
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
    x = f(), c(), t(), i(), r(), a(), p()
}));
export {
    g as a, _ as i, y as n, h as r, S as t
};
//# sourceMappingURL=fab52ad7-e4xspyknfv1fiwjg.js.map