import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    R1 as t,
    g5 as n,
    g8 as r,
    w1 as i,
    w8 as a
} from "./4813494d-tap9fxyhk4ehe0bs.js";

function o(e) {
    let t = i();
    return t?.normalizedAccountUserId == null ? null : JSON.stringify([t.id, t.normalizedAccountUserId, e])
}

function s(e) {
    let t = o(e);
    return t != null && l().has(t)
}

function c(e) {
    n(() => {
        let t = o(e);
        t == null || l().has(t) || l.set(new Set(l()).add(t))
    })
}
var l, u = e((() => {
    r(), t(), l = a(() => new Set)
}));
export {
    s as n, c as r, u as t
};
//# sourceMappingURL=3dcf3d3b-bzdv0f4ewdfgyjfo.js.map