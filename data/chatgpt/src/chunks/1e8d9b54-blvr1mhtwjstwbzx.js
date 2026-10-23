import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    ZE as t,
    eD as n
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Hxn as r,
    Swn as i,
    Vxn as a,
    bwn as o
} from "./conversation-small-bcbq46iub1p0ca1t.js";
var s, c, l, u, d, f, p, m, h = e((() => {
    n(), i(), r(), s = e => t(e), c = e => e.canonical_app_id ?? o(e), l = e => s(c(e)), u = e => o(e), d = (e, t) => {
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
    }, m = e => s(a(e))
}));
export {
    h as a, m as i, f as n, s as o, c as r, p as s, l as t
};
//# sourceMappingURL=1e8d9b54-blvr1mhtwjstwbzx.js.map