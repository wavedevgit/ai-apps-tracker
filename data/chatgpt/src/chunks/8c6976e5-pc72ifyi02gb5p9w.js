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
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    At as l,
    Bt as u,
    Nt as d,
    Q as f,
    Vn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    ZGn as m,
    iwn as h,
    nbn as g,
    nwn as _,
    own as v,
    rwn as y
} from "./conversation-small-fh0oqifngkf5rvl1.js";

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
        t = e == null ? void 0 : _(e),
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
        t = e == null ? void 0 : h(e),
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
        t = e == null ? void 0 : y(e),
        n = d(),
        {
            search: r
        } = l();
    (0, T.useEffect)(() => {
        t === !1 && n(s(`/admin/members`, r))
    }, [t, n, r])
}
var T, E = e((() => {
    g(), v(), m(), o(), n(), c(), a(), T = t(p()), f()
}));
export {
    C as a, w as i, b as n, S as r, E as t
};
//# sourceMappingURL=8c6976e5-pc72ifyi02gb5p9w.js.map