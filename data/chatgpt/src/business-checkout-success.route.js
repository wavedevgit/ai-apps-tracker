export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    hXLT: (function(a, e, r) {
        r.d(e, {
            a: () => b,
            b: () => j,
            c: () => C,
            d: () => n,
            e: () => l
        });
        var s = r("rEML"),
            o = r("ABep"),
            t = r("QosV"),
            m = r("XyTt"),
            f = r("zd8w"),
            c = r("nyOD"),
            p = r("vV6o"),
            i = r("v4LA"),
            _ = r("jZDY");
        let d = (0, i.a)(m.f),
            n = p.a;
        async function j(a) {
            let {
                serverLoader: e
            } = a, [r] = await Promise.all([e(), d.prefetch()]);
            return r
        }
        let l = a => {
                let {
                    currentUrl: e,
                    nextUrl: r
                } = a;
                return e.pathname !== r.pathname || ["stripe_session_id", "processor_entity", "wallet_covered"].some(a => e.searchParams.get(a) !== r.searchParams.get(a))
            },
            b = (0, s.jb)(function() {
                let a, e = (0, t.c)(1);
                return e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(c.a, {
                    stage: "preparing_workspace"
                }), e[0] = a) : a = e[0], a
            });
        var C = (0, s.hb)(function() {
            let a, e, r = (0, t.c)(4),
                m = (0, s.X)(),
                c = (0, _.a)();
            return r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(b, {}), r[0] = a) : a = r[0], r[1] !== c || r[2] !== m ? (e = (0, o.jsx)(f.Suspense, {
                fallback: a,
                children: c ? (0, o.jsx)(d, {
                    returnData: m
                }) : (0, o.jsx)(b, {})
            }), r[1] = c, r[2] = m, r[3] = e) : e = r[3], e
        })
    }),
    EBQV: (function(e) {
        e.exports = a.ir("/cdn/assets/dotnet.js").then(function(a) {
            return a
        })
    })
};
import {
    __webpack_require__ as a
} from "./633146.7affad7b5d.js";
import * as e from "./418851.a18db97c0f.js";
a.C(e);
import * as r from "./109308.c9b7701e19.js";
a.C(r);
import * as s from "./399565.e3bd47902e.js";
a.C(s);
import * as o from "./257798.7e03f1e3e2.js";
a.C(o);
import * as t from "./447351.96852eb6b8.js";
a.C(t);
import * as m from "./617936.b641c39dad.js";
a.C(m);
import * as f from "./807489.287ea00c8d.js";
a.C(f);
import * as c from "./337882.945f5227c2.js";
a.C(c);
import * as p from "./955979.2d3fb29684.js";
a.C(p);
import * as i from "./646436.6a9ea7ce2b.js";
a.C(i);
import * as _ from "./7078.b92f527b06.js";
a.C(_);
import * as d from "./200429.6598292931.js";
a.C(d);
import * as n from "./698524.5402dc2ea3.js";
a.C(n);
import * as j from "./956483.595b7db9a7.js";
a.C(j);
import * as l from "./87162.d955fb8b13.js";
a.C(l);
import * as b from "./396705.47c12a5601.js";
a.C(b);
import * as C from "./155568.f88fad6c40.js";
a.C(C);
import * as h from "./731863.4d5b0f8b9b.js";
a.C(h);
import * as u from "./767086.7d33efc736.js";
a.C(u);
import * as x from "./76629.9835d52bf1.js";
a.C(x);
import * as k from "./514085.4ce61adad7.js";
a.C(k);
import * as w from "./226913.dd4de34d8f.js";
a.C(w);
import * as v from "./658166.78ebb5d198.js";
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