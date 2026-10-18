import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AG as t,
    C1 as n,
    Cit as r,
    DG as i,
    IG as a,
    J$ as o,
    LG as s,
    NG as c,
    S1 as l,
    Sit as u,
    Sst as d,
    Tit as f,
    X$ as p,
    o1 as m,
    pnt as h,
    u1 as g,
    wst as _,
    ynt as v
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    wn as y
} from "./2340486e-oc6d2eodbcrmxur3.js";

function b(e, t) {
    let n = (e ?? (t.data == null && (t.isLoading || t.isError) ? m() : null))?.getWorkspaceId(),
        r = u.getCookie(f.Workspace);
    return !n || r != null && r !== n ? void 0 : n
}

function x() {
    return b(p(), o())
}
var S = e((() => {
    g(), r()
}));

function C() {
    return T(p(), o(), c())
}

function w() {
    "use forget";
    let e = (0, E.c)(7),
        r = n(),
        i = l(),
        a;
    e[0] !== r || e[1] !== i ? (a = b(r, i), e[0] = r, e[1] = i, e[2] = a) : a = e[2];
    let o = t(a),
        s;
    return e[3] !== r || e[4] !== i || e[5] !== o ? (s = T(r, i, o), e[3] = r, e[4] = i, e[5] = o, e[6] = s) : s = e[6], s === `ENABLED`
}

function T(e, t, {
    data: n,
    isLoading: r,
    isError: i
}) {
    if (h(`2358095084`)) return `ENABLED`;
    let o = h(`3829681746`),
        s = b(e, t);
    if (s == null) return o && e == null && t.isLoading ? `LOADING` : `DISABLED`;
    if (o && !t.isLoading && !t.isError && e?.isWorkspaceAccount() && e.canAccessWithCurrentSession && !e.isDeactivated() && e.data.hasExplicitRole === !0 && (e.data.role === d.OWNER || e.data.role === d.ADMIN)) return `ENABLED`;
    if (i) return `ERROR`;
    let c = n?.workspace_id === s ? n : void 0,
        l = c?.permissions?.includes(a.CodexAdminAccess),
        u = c?.beta_settings?.codex_admin === !0;
    return l || u ? `ENABLED` : o && t.isError ? `ERROR` : r && n == null || o && t.isLoading ? `LOADING` : `DISABLED`
}
var E, D = e((() => {
    E = y(), _(), s(), i(), g(), v(), S()
}));
export {
    S as a, x as i, D as n, w as r, C as t
};
//# sourceMappingURL=333fd2ad-m2votvxaos5jmvvo.js.map