import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    ZG as t,
    eK as n,
    gct as r,
    mct as i,
    o0 as a,
    prt as o,
    q1 as s,
    s6 as c,
    srt as l,
    vct as u,
    y6 as d
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    wn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as p,
    r as m
} from "./333fd2ad-dp6j8vgmcglkucuh.js";

function h() {
    "use forget";
    let e = (0, x.c)(3),
        t = a(),
        n = m(),
        r = t?.planType,
        i = !!(r && d(r));
    if (t == null || !i) return !1;
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
        t = a()?.planType,
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
    return e === r.OWNER || e === r.ADMIN || e === r.ANALYTICS_VIEWER || t || n
}

function y() {
    "use forget";
    let e = (0, x.c)(6),
        t = a(),
        r;
    e[0] === t ? r = e[1] : (r = t?.getWorkspaceId(), e[0] = t, e[1] = r);
    let {
        data: o,
        isLoading: s
    } = n(r), c;
    if (e[2] !== t || e[3] !== s || e[4] !== o?.beta_settings) {
        let n = l(`1172233566`),
            r = t == null,
            a = !!t?.isWorkspaceAccount?.() && n,
            u = n && (r || a && s),
            d = !!(o?.beta_settings?.[i.CODEX_USAGE_LEADERBOARD] ?? !0);
        c = b({
            legacyMeteringEnabled: l(`3964716022`),
            hasTokenUsageLeaderboardGate: l(`2025191131`),
            shouldCheckWorkspaceSetting: a,
            isLoadingWorkspaceSetting: u,
            isWorkspaceSettingEnabled: d
        }), e[2] = t, e[3] = s, e[4] = o?.beta_settings, e[5] = c
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
    x = f(), u(), t(), s(), c(), o(), p()
}));
export {
    g as a, _ as i, y as n, h as r, S as t
};
//# sourceMappingURL=fab52ad7-hociohvu5c1zxewt.js.map