import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bot as n,
    I1 as r,
    Jnt as i,
    Trt as a,
    _R as o,
    bR as s,
    zot as c
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as l,
    Hn as u,
    Pt as d,
    Vt as f,
    jt as p
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    _Cn as m,
    _yn as h,
    mGn as g,
    vCn as _,
    xCn as v,
    yCn as y
} from "./conversation-small-cawdu7il3ha6y70c.js";

function b() {
    return n(f(`routes/admin`))
}

function x() {
    "use no forget";
    let e = s(e => e.currentWorkspace);
    return b()?.role ?? e?.role
}

function S() {
    let e = x(),
        t = e == null ? void 0 : m(e),
        n = d(),
        {
            search: r
        } = p();
    (0, T.useEffect)(() => {
        t === !1 && n(a(`/admin/members`, r))
    }, [t, n, r])
}

function C() {
    let e = x(),
        t = e == null ? void 0 : y(e),
        n = d(),
        {
            search: r
        } = p();
    (0, T.useEffect)(() => {
        t === !1 && n(a(`/admin/members`, r))
    }, [t, n, r])
}

function w() {
    let e = x(),
        t = e == null ? void 0 : _(e),
        n = d(),
        {
            search: r
        } = p();
    (0, T.useEffect)(() => {
        t === !1 && n(a(`/admin/members`, r))
    }, [t, n, r])
}
var T, E = e((() => {
    h(), v(), g(), r(), o(), c(), i(), T = t(u()), l()
}));
export {
    C as a, w as i, b as n, S as r, E as t
};
//# sourceMappingURL=8c6976e5-gdwaok95k95oa24g.js.map