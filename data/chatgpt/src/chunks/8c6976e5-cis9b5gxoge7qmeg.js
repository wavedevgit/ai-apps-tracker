import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Crt as n,
    I1 as r,
    Knt as i,
    Lot as a,
    Rot as o,
    _R as s,
    bR as c
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as l,
    Pt as u,
    Vn as d,
    Vt as f,
    jt as p
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    _Cn as m,
    bCn as h,
    gCn as g,
    gyn as _,
    pGn as v,
    vCn as y
} from "./conversation-small-l6tnsr2xfn2d55kk.js";

function b() {
    return o(f(`routes/admin`))
}

function x() {
    "use no forget";
    let e = c(e => e.currentWorkspace);
    return b()?.role ?? e?.role
}

function S() {
    let e = x(),
        t = e == null ? void 0 : g(e),
        r = u(),
        {
            search: i
        } = p();
    (0, T.useEffect)(() => {
        t === !1 && r(n(`/admin/members`, i))
    }, [t, r, i])
}

function C() {
    let e = x(),
        t = e == null ? void 0 : y(e),
        r = u(),
        {
            search: i
        } = p();
    (0, T.useEffect)(() => {
        t === !1 && r(n(`/admin/members`, i))
    }, [t, r, i])
}

function w() {
    let e = x(),
        t = e == null ? void 0 : m(e),
        r = u(),
        {
            search: i
        } = p();
    (0, T.useEffect)(() => {
        t === !1 && r(n(`/admin/members`, i))
    }, [t, r, i])
}
var T, E = e((() => {
    _(), h(), v(), r(), s(), a(), i(), T = t(d()), l()
}));
export {
    C as a, w as i, b as n, S as r, E as t
};
//# sourceMappingURL=8c6976e5-cis9b5gxoge7qmeg.js.map