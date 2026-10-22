import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    ZE as t,
    eD as n
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bxn as r,
    Vxn as i,
    xwn as a,
    ywn as o
} from "./conversation-small-fh0oqifngkf5rvl1.js";
var s, c, l, u, d, f, p, m, h = e((() => {
    n(), a(), i(), s = e => t(e), c = e => e.canonical_app_id ?? o(e), l = e => s(c(e)), u = e => o(e), d = (e, t) => {
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
    }, m = e => s(r(e))
}));
export {
    h as a, m as i, f as n, s as o, c as r, p as s, l as t
};
//# sourceMappingURL=1e8d9b54-hxe1njvt9i196bnk.js.map