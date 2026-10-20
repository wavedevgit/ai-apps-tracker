const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/19c46ed7-eaeniryr8omggx47.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/7c0f5f3d-i787i7damwpfjh6j.js", "assets/2340486e-komxp8tzs51ny4jj.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Hn as n,
    Tn as r,
    Vn as i,
    ln as a,
    un as o
} from "./2340486e-komxp8tzs51ny4jj.js";

function s(e) {
    if (!e) return;
    let t = d.get(e);
    if (t) return t;
    let n = (0, l.lazy)(async () => {
            let {
                resolveContentfulIcon: t
            } = await a(async () => {
                let {
                    resolveContentfulIcon: e
                } = await import(`./19c46ed7-eaeniryr8omggx47.js`).then(e => (e.n(), e.t));
                return {
                    resolveContentfulIcon: e
                }
            }, __vite__mapDeps([0, 1, 2, 3]));
            return {
                default: t(e) ?? f
            }
        }),
        r = e => {
            "use forget";
            let t = (0, c.c)(2),
                r;
            return t[0] === e ? r = t[1] : (r = (0, u.jsx)(l.Suspense, {
                fallback: null,
                children: (0, u.jsx)(n, {
                    ...e
                })
            }), t[0] = e, t[1] = r), r
        };
    return d.set(e, r), r
}
var c, l, u, d, f, p = e((() => {
    c = r(), l = t(n()), u = i(), o(), d = new Map, f = () => {
        "use forget";
        return null
    }
}));
export {
    p as n, s as t
};
//# sourceMappingURL=088558a8-f5y29yomxksl04jz.js.map