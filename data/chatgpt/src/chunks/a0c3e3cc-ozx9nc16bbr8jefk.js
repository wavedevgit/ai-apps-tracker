import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    B8 as n,
    G6 as r,
    J6 as i,
    Y6 as a,
    c8 as o,
    o1 as s,
    s8 as c,
    u1 as l
} from "./4813494d-cb22y2w19zwyshmt.js";

function u(e) {
    let t = s()?.normalizedAccountUserId;
    t != null && n(() => {
        d.set(t, t => ({
            ...t,
            [e]: Math.min((t[e] ?? 0) + 1, 2 ** 53 - 1)
        }))
    })
}
var d, f, p = e((() => {
    t(), l(), c(), d = a(e => i({})), f = r(() => {
        let e = s()?.normalizedAccountUserId;
        return e == null ? [] : Object.entries(d(e)).sort((e, t) => t[1] - e[1]).map(([e]) => e)
    }, {
        equals: o
    })
}));
export {
    f as n, u as r, p as t
};
//# sourceMappingURL=a0c3e3cc-ozx9nc16bbr8jefk.js.map