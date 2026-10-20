import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C8 as t,
    F8 as n,
    I1 as r,
    I8 as i,
    M1 as a,
    S8 as o,
    m5 as s,
    m8 as c,
    y8 as l
} from "./4813494d-qsuygr73qjc6rh65.js";

function u(e) {
    let t = a()?.normalizedAccountUserId;
    t != null && s(() => {
        d.set(t, t => ({
            ...t,
            [e]: Math.min((t[e] ?? 0) + 1, 2 ** 53 - 1)
        }))
    })
}
var d, f, p = e((() => {
    c(), r(), n(), d = t(e => o({})), f = l(() => {
        let e = a()?.normalizedAccountUserId;
        return e == null ? [] : Object.entries(d(e)).sort((e, t) => t[1] - e[1]).map(([e]) => e)
    }, {
        equals: i
    })
}));
export {
    f as n, u as r, p as t
};
//# sourceMappingURL=a0c3e3cc-d25fgit02729nb06.js.map