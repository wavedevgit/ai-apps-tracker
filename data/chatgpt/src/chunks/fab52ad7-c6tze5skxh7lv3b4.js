import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AG as t,
    C1 as n,
    DG as r,
    Sst as i,
    bst as a,
    j3 as o,
    pnt as s,
    u1 as c,
    wst as l,
    y3 as u,
    ynt as d
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    wn as f
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    n as p,
    r as m
} from "./333fd2ad-m2votvxaos5jmvvo.js";

function h() {
    "use forget";
    let e = (0, x.c)(3),
        t = n(),
        r = m(),
        i = t?.planType,
        a = !!(i && o(i));
    if (t == null || !a) return !1;
    let c;
    if (e[0] !== t.data.role || e[1] !== r) {
        let n = s(`2944006050`);
        c = v({
            role: t.data.role,
            isCodexAdmin: r,
            analyticsEnabledForUser: n
        }), e[0] = t.data.role, e[1] = r, e[2] = c
    } else c = e[2];
    return c
}

function g() {
    "use forget";
    let e = (0, x.c)(2),
        t = n()?.planType,
        r;
    return e[0] === t ? r = e[1] : (r = t && o(t), e[0] = t, e[1] = r), !r
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
    return e === i.OWNER || e === i.ADMIN || e === i.ANALYTICS_VIEWER || t || n
}

function y() {
    "use forget";
    let e = (0, x.c)(6),
        r = n(),
        i;
    e[0] === r ? i = e[1] : (i = r?.getWorkspaceId(), e[0] = r, e[1] = i);
    let {
        data: o,
        isLoading: c
    } = t(i), l;
    if (e[2] !== r || e[3] !== c || e[4] !== o?.beta_settings) {
        let t = s(`1172233566`),
            n = r == null,
            i = !!r?.isWorkspaceAccount?.() && t,
            u = t && (n || i && c),
            d = !!(o?.beta_settings?.[a.CODEX_USAGE_LEADERBOARD] ?? !0);
        l = b({
            legacyMeteringEnabled: s(`3964716022`),
            hasTokenUsageLeaderboardGate: s(`2025191131`),
            shouldCheckWorkspaceSetting: i,
            isLoadingWorkspaceSetting: u,
            isWorkspaceSettingEnabled: d
        }), e[2] = r, e[3] = c, e[4] = o?.beta_settings, e[5] = l
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
    x = f(), l(), r(), c(), u(), d(), p()
}));
export {
    g as a, _ as i, y as n, h as r, S as t
};
//# sourceMappingURL=fab52ad7-c6tze5skxh7lv3b4.js.map