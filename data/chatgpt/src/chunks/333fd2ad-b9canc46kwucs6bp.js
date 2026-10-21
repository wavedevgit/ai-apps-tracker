import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    N1 as n,
    U1 as r,
    ZG as i,
    _at as a,
    a0 as o,
    eK as s,
    gat as c,
    gct as l,
    o0 as u,
    oK as d,
    prt as f,
    q1 as p,
    rK as m,
    sK as h,
    srt as g,
    vct as _,
    yat as v
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    wn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function b(e, t) {
    let n = (e ?? (t.data == null && (t.isLoading || t.isError) ? r() : null))?.getWorkspaceId(),
        i = c.getCookie(v.Workspace);
    return !n || i != null && i !== n ? void 0 : n
}

function x() {
    return b(n(), t())
}
var S = e((() => {
    p(), a()
}));

function C() {
    return T(n(), t(), m())
}

function w() {
    "use forget";
    let e = (0, E.c)(7),
        t = u(),
        n = o(),
        r;
    e[0] !== t || e[1] !== n ? (r = b(t, n), e[0] = t, e[1] = n, e[2] = r) : r = e[2];
    let i = s(r),
        a;
    return e[3] !== t || e[4] !== n || e[5] !== i ? (a = T(t, n, i), e[3] = t, e[4] = n, e[5] = i, e[6] = a) : a = e[6], a === `ENABLED`
}

function T(e, t, {
    data: n,
    isLoading: r,
    isError: i
}) {
    if (g(`2358095084`)) return `ENABLED`;
    let a = g(`3829681746`),
        o = b(e, t);
    if (o == null) return a && e == null && t.isLoading ? `LOADING` : `DISABLED`;
    if (a && !t.isLoading && !t.isError && e?.isWorkspaceAccount() && e.canAccessWithCurrentSession && !e.isDeactivated() && e.data.hasExplicitRole === !0 && (e.data.role === l.OWNER || e.data.role === l.ADMIN)) return `ENABLED`;
    if (i) return `ERROR`;
    let s = n?.workspace_id === o ? n : void 0,
        c = s?.permissions?.includes(d.CodexAdminAccess),
        u = s?.beta_settings?.codex_admin === !0;
    return c || u ? `ENABLED` : a && t.isError ? `ERROR` : r && n == null || a && t.isLoading ? `LOADING` : `DISABLED`
}
var E, D = e((() => {
    E = y(), _(), h(), i(), p(), f(), S()
}));
export {
    S as a, x as i, D as n, w as r, C as t
};
//# sourceMappingURL=333fd2ad-b9canc46kwucs6bp.js.map