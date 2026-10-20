import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $G as t,
    $it as n,
    $st as r,
    C1 as i,
    L1 as a,
    N1 as o,
    Wnt as s,
    X1 as c,
    Xnt as l,
    Y1 as u,
    aK as d,
    b1 as f,
    cK as p,
    eat as m,
    lK as h,
    nK as g,
    nat as _,
    tct as v
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    wn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function b(e, t) {
    let r = (e ?? (t.data == null && (t.isLoading || t.isError) ? o() : null))?.getWorkspaceId(),
        i = n.getCookie(_.Workspace);
    return !r || i != null && i !== r ? void 0 : r
}

function x() {
    return b(i(), f())
}
var S = e((() => {
    a(), m()
}));

function C() {
    return T(i(), f(), d())
}

function w() {
    "use forget";
    let e = (0, E.c)(7),
        t = c(),
        n = u(),
        r;
    e[0] !== t || e[1] !== n ? (r = b(t, n), e[0] = t, e[1] = n, e[2] = r) : r = e[2];
    let i = g(r),
        a;
    return e[3] !== t || e[4] !== n || e[5] !== i ? (a = T(t, n, i), e[3] = t, e[4] = n, e[5] = i, e[6] = a) : a = e[6], a === `ENABLED`
}

function T(e, t, {
    data: n,
    isLoading: i,
    isError: a
}) {
    if (s(`2358095084`)) return `ENABLED`;
    let o = s(`3829681746`),
        c = b(e, t);
    if (c == null) return o && e == null && t.isLoading ? `LOADING` : `DISABLED`;
    if (o && !t.isLoading && !t.isError && e?.isWorkspaceAccount() && e.canAccessWithCurrentSession && !e.isDeactivated() && e.data.hasExplicitRole === !0 && (e.data.role === r.OWNER || e.data.role === r.ADMIN)) return `ENABLED`;
    if (a) return `ERROR`;
    let l = n?.workspace_id === c ? n : void 0,
        u = l?.permissions?.includes(p.CodexAdminAccess),
        d = l?.beta_settings?.codex_admin === !0;
    return u || d ? `ENABLED` : o && t.isError ? `ERROR` : i && n == null || o && t.isLoading ? `LOADING` : `DISABLED`
}
var E, D = e((() => {
    E = y(), v(), h(), t(), a(), l(), S()
}));
export {
    S as a, x as i, D as n, w as r, C as t
};
//# sourceMappingURL=333fd2ad-bdnn0l1bhdmn6fzy.js.map