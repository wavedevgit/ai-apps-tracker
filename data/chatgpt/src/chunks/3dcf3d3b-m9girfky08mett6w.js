import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C1 as t,
    C8 as n,
    L1 as r,
    h5 as i,
    h8 as a
} from "./4813494d-dfpv67hlp00pbohr.js";

function o(e) {
    let n = t();
    return n?.normalizedAccountUserId == null ? null : JSON.stringify([n.id, n.normalizedAccountUserId, e])
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
    a(), r(), l = n(() => new Set)
}));
export {
    s as n, c as r, u as t
};
//# sourceMappingURL=3dcf3d3b-m9girfky08mett6w.js.map