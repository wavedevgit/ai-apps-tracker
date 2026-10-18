import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    QL as n,
    Xnt as r,
    dot as i,
    tR as a,
    u1 as o,
    uot as s,
    ynt as c
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as l,
    Pt as u,
    Vn as d,
    Vt as f,
    jt as p
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    aCn as m,
    eGn as h,
    iCn as g,
    rCn as _,
    ryn as v,
    sCn as y
} from "./conversation-small-fym1zmu9zimymmm1.js";

function b() {
    return i(f(`routes/admin`))
}

function x() {
    "use no forget";
    let e = a(e => e.currentWorkspace);
    return b()?.role ?? e?.role
}

function S() {
    let e = x(),
        t = e == null ? void 0 : _(e),
        n = u(),
        {
            search: i
        } = p();
    (0, T.useEffect)(() => {
        t === !1 && n(r(`/admin/members`, i))
    }, [t, n, i])
}

function C() {
    let e = x(),
        t = e == null ? void 0 : m(e),
        n = u(),
        {
            search: i
        } = p();
    (0, T.useEffect)(() => {
        t === !1 && n(r(`/admin/members`, i))
    }, [t, n, i])
}

function w() {
    let e = x(),
        t = e == null ? void 0 : g(e),
        n = u(),
        {
            search: i
        } = p();
    (0, T.useEffect)(() => {
        t === !1 && n(r(`/admin/members`, i))
    }, [t, n, i])
}
var T, E = e((() => {
    v(), y(), h(), o(), n(), s(), c(), T = t(d()), l()
}));
export {
    C as a, w as i, b as n, S as r, E as t
};
//# sourceMappingURL=8c6976e5-ibz7fcap50r267b6.js.map