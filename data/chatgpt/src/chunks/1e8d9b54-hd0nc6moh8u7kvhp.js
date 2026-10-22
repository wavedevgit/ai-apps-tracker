import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    ZE as t,
    eD as n
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    $Cn as r,
    bxn as i,
    twn as a,
    xxn as o
} from "./conversation-small-i79e9c315w50am5f.js";
var s, c, l, u, d, f, p, m, h = e((() => {
    n(), a(), o(), s = e => t(e), c = e => e.canonical_app_id ?? r(e), l = e => s(c(e)), u = e => r(e), d = (e, t) => {
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
    }, m = e => s(i(e))
}));
export {
    h as a, m as i, f as n, s as o, c as r, p as s, l as t
};
//# sourceMappingURL=1e8d9b54-hd0nc6moh8u7kvhp.js.map