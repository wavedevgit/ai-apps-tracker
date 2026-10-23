import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Crt as t,
    Ect as n,
    Oct as r,
    ZG as i,
    _rt as a,
    b6 as o,
    c6 as s,
    eK as c,
    o0 as l,
    q1 as u,
    wct as d
} from "./4813494d-mdvd4786a87166cc.js";
import {
    wn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as p,
    r as m
} from "./333fd2ad-bhhixooo1i070n74.js";

function h() {
    "use forget";
    let e = (0, x.c)(3),
        t = l(),
        n = m(),
        r = t?.planType,
        i = !!(r && o(r));
    if (t == null || !i) return !1;
    let s;
    if (e[0] !== t.data.role || e[1] !== n) {
        let r = a(`2944006050`);
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
        t = l()?.planType,
        n;
    return e[0] === t ? n = e[1] : (n = t && o(t), e[0] = t, e[1] = n), !n
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
        t = l(),
        n;
    e[0] === t ? n = e[1] : (n = t?.getWorkspaceId(), e[0] = t, e[1] = n);
    let {
        data: r,
        isLoading: i
    } = c(n), o;
    if (e[2] !== t || e[3] !== i || e[4] !== r?.beta_settings) {
        let n = a(`1172233566`),
            s = t == null,
            c = !!t?.isWorkspaceAccount?.() && n,
            l = n && (s || c && i),
            u = !!(r?.beta_settings?.[d.CODEX_USAGE_LEADERBOARD] ?? !0);
        o = b({
            legacyMeteringEnabled: a(`3964716022`),
            hasTokenUsageLeaderboardGate: a(`2025191131`),
            shouldCheckWorkspaceSetting: c,
            isLoadingWorkspaceSetting: l,
            isWorkspaceSettingEnabled: u
        }), e[2] = t, e[3] = i, e[4] = r?.beta_settings, e[5] = o
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
    x = f(), r(), i(), u(), s(), t(), p()
}));
export {
    g as a, _ as i, y as n, h as r, S as t
};
//# sourceMappingURL=fab52ad7-oopbgdnnknf2q0nm.js.map