import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    N1 as n,
    R8 as r,
    p5 as i,
    q1 as a
} from "./4813494d-mdvd4786a87166cc.js";

function o(e) {
    let t = n();
    return t?.normalizedAccountUserId == null ? null : JSON.stringify([t.id, t.normalizedAccountUserId, e])
}

function s(e) {
    let t = o(e);
    return t != null && l().has(t)
}

function c(e) {
    i(() => {
        let t = o(e);
        t == null || l().has(t) || l.set(new Set(l()).add(t))
    })
}
var l, u = e((() => {
    t(), a(), l = r(() => new Set)
}));
export {
    s as n, c as r, u as t
};
//# sourceMappingURL=3dcf3d3b-fh6pwdwtoafskdvs.js.map