import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Kot as n,
    Mrt as r,
    R1 as i,
    qot as a,
    trt as o,
    vR as s,
    xR as c
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    At as l,
    Bt as u,
    Nt as d,
    Q as f,
    Vn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    CCn as m,
    SCn as h,
    TCn as g,
    pGn as _,
    xCn as v,
    xyn as y
} from "./conversation-small-nmt18uiom3b14vca.js";

function b() {
    return a(u(`routes/admin`))
}

function x() {
    "use no forget";
    let e = c(e => e.currentWorkspace);
    return b()?.role ?? e?.role
}

function S() {
    let e = x(),
        t = e == null ? void 0 : v(e),
        n = d(),
        {
            search: i
        } = l();
    (0, T.useEffect)(() => {
        t === !1 && n(r(`/admin/members`, i))
    }, [t, n, i])
}

function C() {
    let e = x(),
        t = e == null ? void 0 : m(e),
        n = d(),
        {
            search: i
        } = l();
    (0, T.useEffect)(() => {
        t === !1 && n(r(`/admin/members`, i))
    }, [t, n, i])
}

function w() {
    let e = x(),
        t = e == null ? void 0 : h(e),
        n = d(),
        {
            search: i
        } = l();
    (0, T.useEffect)(() => {
        t === !1 && n(r(`/admin/members`, i))
    }, [t, n, i])
}
var T, E = e((() => {
    y(), g(), _(), i(), s(), n(), o(), T = t(p()), f()
}));
export {
    C as a, w as i, b as n, S as r, E as t
};
//# sourceMappingURL=8c6976e5-izsecvkl5ajbj9v5.js.map