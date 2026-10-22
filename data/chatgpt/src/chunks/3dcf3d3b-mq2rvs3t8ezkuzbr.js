import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    L8 as t,
    N1 as n,
    k5 as r,
    k8 as i,
    q1 as a
} from "./4813494d-nxpmzchfjvwqts17.js";

function o(e) {
    let t = n();
    return t?.normalizedAccountUserId == null ? null : JSON.stringify([t.id, t.normalizedAccountUserId, e])
}

function s(e) {
    let t = o(e);
    return t != null && l().has(t)
}

function c(e) {
    r(() => {
        let t = o(e);
        t == null || l().has(t) || l.set(new Set(l()).add(t))
    })
}
var l, u = e((() => {
    i(), a(), l = t(() => new Set)
}));
export {
    s as n, c as r, u as t
};
//# sourceMappingURL=3dcf3d3b-mq2rvs3t8ezkuzbr.js.map