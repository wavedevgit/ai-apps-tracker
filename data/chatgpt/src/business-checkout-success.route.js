export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    hXLT: (function(e, r, a) {
        a.d(r, {
            a: () => C,
            b: () => l,
            c: () => u,
            d: () => j,
            e: () => b
        });
        var s = a("rEML"),
            o = a("ABep"),
            t = a("QosV"),
            m = a("v8gE"),
            c = a("XyTt"),
            f = a("zd8w"),
            p = a("nyOD"),
            i = a("vV6o"),
            _ = a("v4LA"),
            d = a("jZDY");
        let n = (0, _.a)(c.f),
            j = i.a;
        async function l(e) {
            let {
                serverLoader: r
            } = e, [a] = await Promise.all([r(), n.prefetch()]);
            return a
        }
        let b = e => {
                let {
                    currentUrl: r,
                    nextUrl: a
                } = e;
                return r.pathname !== a.pathname || ["stripe_session_id", "processor_entity", "wallet_covered"].some(e => r.searchParams.get(e) !== a.searchParams.get(e))
            },
            C = (0, s.kb)(function() {
                let e, r = (0, t.c)(1);
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(m.b, {
                        name: "route content"
                    }), (0, o.jsx)(p.a, {
                        stage: "preparing_workspace"
                    })]
                }), r[0] = e) : e = r[0], e
            });
        var u = (0, s.ib)(function() {
            let e, r, a = (0, t.c)(4),
                m = (0, s.X)(),
                c = (0, d.a)();
            return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(C, {}), a[0] = e) : e = a[0], a[1] !== c || a[2] !== m ? (r = (0, o.jsx)(f.Suspense, {
                fallback: e,
                children: c ? (0, o.jsx)(n, {
                    returnData: m
                }) : (0, o.jsx)(C, {})
            }), a[1] = c, a[2] = m, a[3] = r) : r = a[3], r
        })
    }),
    EBQV: (function(r) {
        r.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.0181f6662c.js";
import * as r from "./418851.09486f68f7.js";
e.C(r);
import * as a from "./109308.cb66ec8473.js";
e.C(a);
import * as s from "./399565.e3bd47902e.js";
e.C(s);
import * as o from "./257798.7e03f1e3e2.js";
e.C(o);
import * as t from "./447351.74c4243102.js";
e.C(t);
import * as m from "./617936.b641c39dad.js";
e.C(m);
import * as c from "./807489.3f6f62fc4e.js";
e.C(c);
import * as f from "./337882.ac66e3b9e7.js";
e.C(f);
import * as p from "./955979.d6920ef47f.js";
e.C(p);
import * as i from "./646436.029c782154.js";
e.C(i);
import * as _ from "./7078.197e9e74da.js";
e.C(_);
import * as d from "./200429.336016a921.js";
e.C(d);
import * as n from "./698524.1c89d5e682.js";
e.C(n);
import * as j from "./956483.aae39072ae.js";
e.C(j);
import * as l from "./87162.70963eaac7.js";
e.C(l);
import * as b from "./396705.63a7a7138f.js";
e.C(b);
import * as C from "./155568.80ff0b0790.js";
e.C(C);
import * as u from "./731863.980fcc67e8.js";
e.C(u);
import * as h from "./767086.029c6e6cb7.js";
e.C(h);
import * as x from "./76629.f2ec2ff70b.js";
e.C(x);
import * as k from "./514085.a7493d29eb.js";
e.C(k);
import * as w from "./204542.d8a33857f0.js";
e.C(w);
import * as v from "./226913.dd4de34d8f.js";
e.C(v);
import * as y from "./658166.02ced5c4c5.js";
e.C(y);
var g = e(e.s = "hXLT"),
    L = g.a,
    X = g.b,
    D = g.c,
    E = g.d,
    F = g.e;
export {
    L as HydrateFallback, X as clientLoader, D as
    default, E as handle, F as shouldRevalidate
};