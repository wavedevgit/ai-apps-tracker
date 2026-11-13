export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    hXLT: (function(a, r, s) {
        s.d(r, {
            a: () => b,
            b: () => j,
            c: () => C,
            d: () => n,
            e: () => l
        });
        var e = s("jqIZ"),
            o = s("ABep"),
            t = s("QosV"),
            m = s("XyTt"),
            f = s("zd8w"),
            p = s("nyOD"),
            c = s("vV6o"),
            d = s("v4LA"),
            i = s("jZDY");
        let _ = (0, d.a)(m.f),
            n = c.a;
        async function j(a) {
            let {
                serverLoader: r
            } = a, [s] = await Promise.all([r(), _.prefetch()]);
            return s
        }
        let l = a => {
                let {
                    currentUrl: r,
                    nextUrl: s
                } = a;
                return r.pathname !== s.pathname || ["stripe_session_id", "processor_entity", "wallet_covered"].some(a => r.searchParams.get(a) !== s.searchParams.get(a))
            },
            b = (0, e.jb)(function() {
                let a, r = (0, t.c)(1);
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(p.a, {
                    stage: "preparing_workspace"
                }), r[0] = a) : a = r[0], a
            });
        var C = (0, e.hb)(function() {
            let a, r, s = (0, t.c)(4),
                m = (0, e.X)(),
                p = (0, i.a)();
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(b, {}), s[0] = a) : a = s[0], s[1] !== p || s[2] !== m ? (r = (0, o.jsx)(f.Suspense, {
                fallback: a,
                children: p ? (0, o.jsx)(_, {
                    returnData: m
                }) : (0, o.jsx)(b, {})
            }), s[1] = p, s[2] = m, s[3] = r) : r = s[3], r
        })
    }),
    EBQV: (function(r) {
        r.exports = a.ir("/cdn/assets/dotnet.js").then(function(a) {
            return a
        })
    })
};
import {
    __webpack_require__ as a
} from "./633146.5096fa3fd9.js";
import * as r from "./418851.c7ca1818d5.js";
a.C(r);
import * as s from "./109308.e66696cd0d.js";
a.C(s);
import * as e from "./399565.6af208675d.js";
a.C(e);
import * as o from "./257798.13b56b362a.js";
a.C(o);
import * as t from "./447351.d558a44437.js";
a.C(t);
import * as m from "./617936.4707466a2e.js";
a.C(m);
import * as f from "./807489.02c4828605.js";
a.C(f);
import * as p from "./337882.8740501d0a.js";
a.C(p);
import * as c from "./955979.a7c648ac65.js";
a.C(c);
import * as d from "./646436.67f97058a6.js";
a.C(d);
import * as i from "./7078.1e69ffb16b.js";
a.C(i);
import * as _ from "./200429.bb053dd10b.js";
a.C(_);
import * as n from "./698524.21cc9159ce.js";
a.C(n);
import * as j from "./956483.d8c24cb93c.js";
a.C(j);
import * as l from "./87162.061018a33e.js";
a.C(l);
import * as b from "./396705.001e7c704c.js";
a.C(b);
import * as C from "./155568.3264e8a296.js";
a.C(C);
import * as h from "./731863.63f4b0e1e0.js";
a.C(h);
import * as u from "./767086.348bdfe349.js";
a.C(u);
import * as x from "./76629.9b04d58081.js";
a.C(x);
import * as k from "./514085.7e2196bde7.js";
a.C(k);
import * as w from "./226913.27c93050ff.js";
a.C(w);
import * as v from "./658166.d345981a3f.js";
a.C(v);
var y = a(a.s = "hXLT"),
    L = y.a,
    g = y.b,
    X = y.c,
    D = y.d,
    P = y.e;
export {
    L as HydrateFallback, g as clientLoader, X as
    default, D as handle, P as shouldRevalidate
};