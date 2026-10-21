import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as t,
    Cj as n,
    Sj as r,
    Ztt as i,
    bj as a,
    cnt as o,
    gnt as s,
    xj as c,
    xnt as l
} from "./4813494d-lxa3wniynbx9ka2a.js";

function u() {
    return c(m())
}
async function d() {
    let e = m();
    return a(e, e === `macos` ? await i() : null)
}
async function f() {
    let e = await d();
    return e.type === `download_url` ? e.url : null
}

function p(e) {
    return u() != null && n(e)
}

function m() {
    return l() ? `windows` : s() && !o() ? `macos` : null
}
var h = e((() => {
    r(), t()
}));
export {
    f as a, d as i, h as n, p as r, u as t
};
//# sourceMappingURL=9ac7a75a-l9slh9v6x4adbsun.js.map