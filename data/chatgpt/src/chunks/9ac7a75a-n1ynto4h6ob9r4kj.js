import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jtt as t,
    Ktt as n,
    Sj as r,
    bj as i,
    dnt as a,
    gnt as o,
    rnt as s,
    xj as c,
    yj as l
} from "./4813494d-dfpv67hlp00pbohr.js";

function u() {
    return i(m())
}
async function d() {
    let e = m();
    return l(e, e === `macos` ? await n() : null)
}
async function f() {
    let e = await d();
    return e.type === `download_url` ? e.url : null
}

function p(e) {
    return u() != null && r(e)
}

function m() {
    return o() ? `windows` : a() && !s() ? `macos` : null
}
var h = e((() => {
    c(), t()
}));
export {
    f as a, d as i, h as n, p as r, u as t
};
//# sourceMappingURL=9ac7a75a-n1ynto4h6ob9r4kj.js.map