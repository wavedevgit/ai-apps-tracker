import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cj as t,
    Sj as n,
    Ytt as r,
    _nt as i,
    bj as a,
    fnt as o,
    int as s,
    qtt as c,
    xj as l
} from "./4813494d-bo7e0c29ngt4zgx0.js";

function u() {
    return l(m())
}
async function d() {
    let e = m();
    return a(e, e === `macos` ? await c() : null)
}
async function f() {
    let e = await d();
    return e.type === `download_url` ? e.url : null
}

function p(e) {
    return u() != null && t(e)
}

function m() {
    return i() ? `windows` : o() && !s() ? `macos` : null
}
var h = e((() => {
    n(), r()
}));
export {
    f as a, d as i, h as n, p as r, u as t
};
//# sourceMappingURL=9ac7a75a-wz31coczqbyok3qn.js.map