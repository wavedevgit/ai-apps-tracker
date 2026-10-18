import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AE as t,
    DE as n
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Hbn as r,
    SCn as i,
    Vbn as a,
    bCn as o
} from "./conversation-small-fym1zmu9zimymmm1.js";
var s, c, l, u, d, f, p, m, h = e((() => {
    t(), i(), r(), s = e => n(e), c = e => e.canonical_app_id ?? o(e), l = e => s(c(e)), u = e => o(e), d = (e, t) => {
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
//# sourceMappingURL=1e8d9b54-l57otmysawkt9797.js.map