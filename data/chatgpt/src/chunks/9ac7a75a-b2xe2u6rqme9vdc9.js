import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ant as t,
    Dj as n,
    Ej as r,
    Oj as i,
    Rnt as a,
    Tj as o,
    Unt as s,
    xnt as c,
    ynt as l
} from "./4813494d-mdvd4786a87166cc.js";

function u() {
    return r(m())
}
async function d() {
    let e = m();
    return o(e, e === `macos` ? await l() : null)
}
async function f() {
    let e = await d();
    return e.type === `download_url` ? e.url : null
}

function p(e) {
    return u() != null && i(e)
}

function m() {
    return s() ? `windows` : a() && !t() ? `macos` : null
}
var h = e((() => {
    n(), c()
}));
export {
    f as a, d as i, h as n, p as r, u as t
};
//# sourceMappingURL=9ac7a75a-b2xe2u6rqme9vdc9.js.map