import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jtt as n,
    Xtt as r,
    Ytt as i,
    _nt as a,
    fnt as o,
    int as s
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Vn as c,
    wn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function u() {
    return n().includes(`Linux`) && !r()
}

function d() {
    return o() && !s() ? `mac` : a() ? `windows` : u() ? `linux` : null
}

function f(e) {
    return e === `mac` || e === `windows`
}

function p() {
    "use forget";
    let e = (0, h.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = f(d()), e[0] = t) : t = e[0], t
}

function m() {
    "use forget";
    let e = (0, h.c)(8),
        [t, n] = (0, g.useState)(`loading`),
        r, i;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = () => {
        n(d())
    }, i = [], e[0] = r, e[1] = i) : (r = e[0], i = e[1]), (0, g.useEffect)(r, i);
    let a = t === `loading` ? null : t,
        o = t === `loading`,
        s;
    e[2] === a ? s = e[3] : (s = f(a), e[2] = a, e[3] = s);
    let c;
    return e[4] !== a || e[5] !== o || e[6] !== s ? (c = {
        isLoadingOs: o,
        os: a,
        canDownload: s
    }, e[4] = a, e[5] = o, e[6] = s, e[7] = c) : c = e[7], c
}
var h, g, _ = e((() => {
    h = l(), i(), g = t(c())
}));
export {
    p as n, m as r, _ as t
};
//# sourceMappingURL=f23f926c-e4nnrr7fmn0b5bqt.js.map