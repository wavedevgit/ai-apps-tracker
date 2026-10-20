import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    GE as t,
    JE as n
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    ICn as r,
    PCn as i,
    nxn as a,
    txn as o
} from "./conversation-small-cawdu7il3ha6y70c.js";
var s, c, l, u, d, f, p, m, h = e((() => {
    n(), r(), a(), s = e => t(e), c = e => e.canonical_app_id ?? i(e), l = e => s(c(e)), u = e => i(e), d = (e, t) => {
        let n = new Set(t.map(u));
        return e.filter(e => !n.has(u(e)))
    }, f = (e, t, n) => n.includeInstalled ? [...e] : d(e, t), p = (e, t) => {
        let n = new Set(t.map(u)),
            r = [],
            i = [];
        for (let t of e)(n.has(u(t)) ? r : i).push(t);
        return {
            installed: r,
            uninstalled: i
        }
    }, m = e => s(o(e))
}));
export {
    h as a, m as i, f as n, s as o, c as r, p as s, l as t
};
//# sourceMappingURL=1e8d9b54-hqkbiznjzuigbqja.js.map