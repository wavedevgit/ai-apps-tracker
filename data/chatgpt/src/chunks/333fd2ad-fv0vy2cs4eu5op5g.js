import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Gnt as t,
    P1 as n,
    R1 as r,
    X1 as i,
    Z1 as a,
    Znt as o,
    eK as s,
    eat as c,
    ect as l,
    lK as u,
    nct as d,
    oK as f,
    rK as p,
    rat as m,
    tat as h,
    uK as g,
    w1 as _,
    x1 as v
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    wn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function b(e, t) {
    let r = (e ?? (t.data == null && (t.isLoading || t.isError) ? n() : null))?.getWorkspaceId(),
        i = c.getCookie(m.Workspace);
    return !r || i != null && i !== r ? void 0 : r
}

function x() {
    return b(_(), v())
}
var S = e((() => {
    r(), h()
}));

function C() {
    return T(_(), v(), f())
}

function w() {
    "use forget";
    let e = (0, E.c)(7),
        t = a(),
        n = i(),
        r;
    e[0] !== t || e[1] !== n ? (r = b(t, n), e[0] = t, e[1] = n, e[2] = r) : r = e[2];
    let o = p(r),
        s;
    return e[3] !== t || e[4] !== n || e[5] !== o ? (s = T(t, n, o), e[3] = t, e[4] = n, e[5] = o, e[6] = s) : s = e[6], s === `ENABLED`
}

function T(e, n, {
    data: r,
    isLoading: i,
    isError: a
}) {
    if (t(`2358095084`)) return `ENABLED`;
    let o = t(`3829681746`),
        s = b(e, n);
    if (s == null) return o && e == null && n.isLoading ? `LOADING` : `DISABLED`;
    if (o && !n.isLoading && !n.isError && e?.isWorkspaceAccount() && e.canAccessWithCurrentSession && !e.isDeactivated() && e.data.hasExplicitRole === !0 && (e.data.role === l.OWNER || e.data.role === l.ADMIN)) return `ENABLED`;
    if (a) return `ERROR`;
    let c = r?.workspace_id === s ? r : void 0,
        d = c?.permissions?.includes(u.CodexAdminAccess),
        f = c?.beta_settings?.codex_admin === !0;
    return d || f ? `ENABLED` : o && n.isError ? `ERROR` : i && r == null || o && n.isLoading ? `LOADING` : `DISABLED`
}
var E, D = e((() => {
    E = y(), d(), g(), s(), r(), o(), S()
}));
export {
    S as a, x as i, D as n, w as r, C as t
};
//# sourceMappingURL=333fd2ad-fv0vy2cs4eu5op5g.js.map