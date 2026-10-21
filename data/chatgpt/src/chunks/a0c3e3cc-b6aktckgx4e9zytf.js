import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    L8 as t,
    P1 as n,
    R1 as r,
    R8 as i,
    T8 as a,
    g5 as o,
    g8 as s,
    w8 as c,
    x8 as l
} from "./4813494d-tap9fxyhk4ehe0bs.js";

function u(e) {
    let t = n()?.normalizedAccountUserId;
    t != null && o(() => {
        d.set(t, t => ({
            ...t,
            [e]: Math.min((t[e] ?? 0) + 1, 2 ** 53 - 1)
        }))
    })
}
var d, f, p = e((() => {
    s(), r(), t(), d = a(e => c({})), f = l(() => {
        let e = n()?.normalizedAccountUserId;
        return e == null ? [] : Object.entries(d(e)).sort((e, t) => t[1] - e[1]).map(([e]) => e)
    }, {
        equals: i
    })
}));
export {
    f as n, u as r, p as t
};
//# sourceMappingURL=a0c3e3cc-b6aktckgx4e9zytf.js.map