import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CR as n,
    Crt as r,
    ER as i,
    eit as a,
    hst as o,
    mst as s,
    q1 as c
} from "./4813494d-mdvd4786a87166cc.js";
import {
    At as l,
    Bt as u,
    Nt as d,
    Q as f,
    Vn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    awn as m,
    iwn as h,
    rbn as g,
    rwn as _,
    swn as v,
    uKn as y
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function b() {
    return o(u(`routes/admin`))
}

function x() {
    "use no forget";
    let e = i(e => e.currentWorkspace);
    return b()?.role ?? e?.role
}

function S() {
    let e = x(),
        t = e == null ? void 0 : _(e),
        n = d(),
        {
            search: r
        } = l();
    (0, T.useEffect)(() => {
        t === !1 && n(a(`/admin/members`, r))
    }, [t, n, r])
}

function C() {
    let e = x(),
        t = e == null ? void 0 : m(e),
        n = d(),
        {
            search: r
        } = l();
    (0, T.useEffect)(() => {
        t === !1 && n(a(`/admin/members`, r))
    }, [t, n, r])
}

function w() {
    let e = x(),
        t = e == null ? void 0 : h(e),
        n = d(),
        {
            search: r
        } = l();
    (0, T.useEffect)(() => {
        t === !1 && n(a(`/admin/members`, r))
    }, [t, n, r])
}
var T, E = e((() => {
    g(), v(), y(), c(), n(), s(), r(), T = t(p()), f()
}));
export {
    C as a, w as i, b as n, S as r, E as t
};
//# sourceMappingURL=8c6976e5-d8nzzrgxiaivy5n7.js.map