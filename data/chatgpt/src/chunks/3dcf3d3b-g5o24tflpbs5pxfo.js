import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    B8 as n,
    J6 as r,
    X$ as i,
    u1 as a
} from "./4813494d-cb22y2w19zwyshmt.js";

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
    t(), a(), l = r(() => new Set)
}));
export {
    s as n, c as r, u as t
};
//# sourceMappingURL=3dcf3d3b-g5o24tflpbs5pxfo.js.map