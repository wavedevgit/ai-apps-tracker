import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    N1 as n,
    Sat as r,
    U1 as i,
    ZG as a,
    a0 as o,
    bat as s,
    eK as c,
    grt as l,
    o0 as u,
    oK as d,
    q1 as f,
    rK as p,
    sK as m,
    urt as h,
    xct as g,
    yat as _,
    yct as v
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    wn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function b(e, t) {
    let n = (e ?? (t.data == null && (t.isLoading || t.isError) ? i() : null))?.getWorkspaceId(),
        a = _.getCookie(r.Workspace);
    return !n || a != null && a !== n ? void 0 : n
}

function x() {
    return b(n(), t())
}
var S = e((() => {
    f(), s()
}));

function C() {
    return T(n(), t(), p())
}

function w() {
    "use forget";
    let e = (0, E.c)(7),
        t = u(),
        n = o(),
        r;
    e[0] !== t || e[1] !== n ? (r = b(t, n), e[0] = t, e[1] = n, e[2] = r) : r = e[2];
    let i = c(r),
        a;
    return e[3] !== t || e[4] !== n || e[5] !== i ? (a = T(t, n, i), e[3] = t, e[4] = n, e[5] = i, e[6] = a) : a = e[6], a === `ENABLED`
}

function T(e, t, {
    data: n,
    isLoading: r,
    isError: i
}) {
    if (h(`2358095084`)) return `ENABLED`;
    let a = h(`3829681746`),
        o = b(e, t);
    if (o == null) return a && e == null && t.isLoading ? `LOADING` : `DISABLED`;
    if (a && !t.isLoading && !t.isError && e?.isWorkspaceAccount() && e.canAccessWithCurrentSession && !e.isDeactivated() && e.data.hasExplicitRole === !0 && (e.data.role === v.OWNER || e.data.role === v.ADMIN)) return `ENABLED`;
    if (i) return `ERROR`;
    let s = n?.workspace_id === o ? n : void 0,
        c = s?.permissions?.includes(d.CodexAdminAccess),
        l = s?.beta_settings?.codex_admin === !0;
    return c || l ? `ENABLED` : a && t.isError ? `ERROR` : r && n == null || a && t.isLoading ? `LOADING` : `DISABLED`
}
var E, D = e((() => {
    E = y(), g(), m(), a(), f(), l(), S()
}));
export {
    S as a, x as i, D as n, w as r, C as t
};
//# sourceMappingURL=333fd2ad-gv76yo9y25c33ezx.js.map