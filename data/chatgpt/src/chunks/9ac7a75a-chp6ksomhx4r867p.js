import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ant as t,
    Dj as n,
    Ej as r,
    Fnt as i,
    Oj as a,
    Snt as o,
    Tj as s,
    dnt as c,
    pnt as l
} from "./4813494d-nxpmzchfjvwqts17.js";

function u() {
    return r(m())
}
async function d() {
    let e = m();
    return s(e, e === `macos` ? await c() : null)
}
async function f() {
    let e = await d();
    return e.type === `download_url` ? e.url : null
}

function p(e) {
    return u() != null && a(e)
}

function m() {
    return i() ? `windows` : t() && !o() ? `macos` : null
}
var h = e((() => {
    n(), l()
}));
export {
    f as a, d as i, h as n, p as r, u as t
};
//# sourceMappingURL=9ac7a75a-chp6ksomhx4r867p.js.map