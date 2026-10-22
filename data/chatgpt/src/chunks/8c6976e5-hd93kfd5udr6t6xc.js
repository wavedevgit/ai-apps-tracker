import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CR as n,
    ER as r,
    cst as i,
    grt as a,
    q1 as o,
    qrt as s,
    sst as c
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    At as l,
    Bt as u,
    Nt as d,
    Q as f,
    Vn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Cn as m,
    $yn as h,
    JGn as g,
    ewn as _,
    rwn as v,
    twn as y
} from "./conversation-small-dwpaie1hln28efxb.js";

function b() {
    return i(u(`routes/admin`))
}

function x() {
    "use no forget";
    let e = r(e => e.currentWorkspace);
    return b()?.role ?? e?.role
}

function S() {
    let e = x(),
        t = e == null ? void 0 : m(e),
        n = d(),
        {
            search: r
        } = l();
    (0, T.useEffect)(() => {
        t === !1 && n(s(`/admin/members`, r))
    }, [t, n, r])
}

function C() {
    let e = x(),
        t = e == null ? void 0 : y(e),
        n = d(),
        {
            search: r
        } = l();
    (0, T.useEffect)(() => {
        t === !1 && n(s(`/admin/members`, r))
    }, [t, n, r])
}

function w() {
    let e = x(),
        t = e == null ? void 0 : _(e),
        n = d(),
        {
            search: r
        } = l();
    (0, T.useEffect)(() => {
        t === !1 && n(s(`/admin/members`, r))
    }, [t, n, r])
}
var T, E = e((() => {
    h(), v(), g(), o(), n(), c(), a(), T = t(p()), f()
}));
export {
    C as a, w as i, b as n, S as r, E as t
};
//# sourceMappingURL=8c6976e5-hd93kfd5udr6t6xc.js.map