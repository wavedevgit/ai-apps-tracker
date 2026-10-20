import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C8 as t,
    I8 as n,
    L1 as r,
    L8 as i,
    N1 as a,
    b8 as o,
    h5 as s,
    h8 as c,
    w8 as l
} from "./4813494d-dfpv67hlp00pbohr.js";

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
    c(), r(), n(), d = l(e => t({})), f = o(() => {
        let e = a()?.normalizedAccountUserId;
        return e == null ? [] : Object.entries(d(e)).sort((e, t) => t[1] - e[1]).map(([e]) => e)
    }, {
        equals: i
    })
}));
export {
    f as n, u as r, p as t
};
//# sourceMappingURL=a0c3e3cc-kctmzez7j33c49ca.js.map