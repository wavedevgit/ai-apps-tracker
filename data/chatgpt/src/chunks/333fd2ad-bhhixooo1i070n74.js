import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    Crt as n,
    Dat as r,
    Eat as i,
    Ect as a,
    N1 as o,
    Oct as s,
    U1 as c,
    ZG as l,
    _rt as u,
    a0 as d,
    eK as f,
    kat as p,
    o0 as m,
    oK as h,
    q1 as g,
    rK as _,
    sK as v
} from "./4813494d-mdvd4786a87166cc.js";
import {
    wn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function b(e, t) {
    let n = (e ?? (t.data == null && (t.isLoading || t.isError) ? c() : null))?.getWorkspaceId(),
        r = i.getCookie(p.Workspace);
    return !n || r != null && r !== n ? void 0 : n
}

function x() {
    return b(o(), t())
}
var S = e((() => {
    g(), r()
}));

function C() {
    return T(o(), t(), _())
}

function w() {
    "use forget";
    let e = (0, E.c)(7),
        t = m(),
        n = d(),
        r;
    e[0] !== t || e[1] !== n ? (r = b(t, n), e[0] = t, e[1] = n, e[2] = r) : r = e[2];
    let i = f(r),
        a;
    return e[3] !== t || e[4] !== n || e[5] !== i ? (a = T(t, n, i), e[3] = t, e[4] = n, e[5] = i, e[6] = a) : a = e[6], a === `ENABLED`
}

function T(e, t, {
    data: n,
    isLoading: r,
    isError: i
}) {
    if (u(`2358095084`)) return `ENABLED`;
    let o = u(`3829681746`),
        s = b(e, t);
    if (s == null) return o && e == null && t.isLoading ? `LOADING` : `DISABLED`;
    if (o && !t.isLoading && !t.isError && e?.isWorkspaceAccount() && e.canAccessWithCurrentSession && !e.isDeactivated() && e.data.hasExplicitRole === !0 && (e.data.role === a.OWNER || e.data.role === a.ADMIN)) return `ENABLED`;
    if (i) return `ERROR`;
    let c = n?.workspace_id === s ? n : void 0,
        l = c?.permissions?.includes(h.CodexAdminAccess),
        d = c?.beta_settings?.codex_admin === !0;
    return l || d ? `ENABLED` : o && t.isError ? `ERROR` : r && n == null || o && t.isLoading ? `LOADING` : `DISABLED`
}
var E, D = e((() => {
    E = y(), s(), v(), l(), g(), n(), S()
}));
export {
    S as a, x as i, D as n, w as r, C as t
};
//# sourceMappingURL=333fd2ad-bhhixooo1i070n74.js.map