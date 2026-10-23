import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    F8 as n,
    Q8 as r,
    R8 as i,
    U1 as a,
    Z8 as o,
    p5 as s,
    q1 as c,
    z8 as l
} from "./4813494d-mdvd4786a87166cc.js";

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
    t(), c(), o(), d = l(e => i({})), f = n(() => {
        let e = a()?.normalizedAccountUserId;
        return e == null ? [] : Object.entries(d(e)).sort((e, t) => t[1] - e[1]).map(([e]) => e)
    }, {
        equals: r
    })
}));
export {
    f as n, u as r, p as t
};
//# sourceMappingURL=a0c3e3cc-o1oybxh9p3de1xl0.js.map