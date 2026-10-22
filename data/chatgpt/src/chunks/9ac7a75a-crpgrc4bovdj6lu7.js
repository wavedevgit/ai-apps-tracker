import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cnt as t,
    Dj as n,
    Ej as r,
    Int as i,
    Oj as a,
    Tj as o,
    fnt as s,
    jnt as c,
    mnt as l
} from "./4813494d-r54yv6lv29x4ew99.js";

function u() {
    return r(m())
}
async function d() {
    let e = m();
    return o(e, e === `macos` ? await s() : null)
}
async function f() {
    let e = await d();
    return e.type === `download_url` ? e.url : null
}

function p(e) {
    return u() != null && a(e)
}

function m() {
    return i() ? `windows` : c() && !t() ? `macos` : null
}
var h = e((() => {
    n(), l()
}));
export {
    f as a, d as i, h as n, p as r, u as t
};
//# sourceMappingURL=9ac7a75a-crpgrc4bovdj6lu7.js.map