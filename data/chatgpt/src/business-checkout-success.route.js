export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    hXLT: (function(a, r, s) {
        s.d(r, {
            a: () => b,
            b: () => j,
            c: () => C,
            d: () => d,
            e: () => l
        });
        var e = s("rEML"),
            o = s("ABep"),
            t = s("QosV"),
            m = s("XyTt"),
            c = s("zd8w"),
            f = s("nyOD"),
            p = s("vV6o"),
            i = s("v4LA"),
            _ = s("jZDY");
        let n = (0, i.a)(m.f),
            d = p.a;
        async function j(a) {
            let {
                serverLoader: r
            } = a, [s] = await Promise.all([r(), n.prefetch()]);
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
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(f.a, {
                    stage: "preparing_workspace"
                }), r[0] = a) : a = r[0], a
            });
        var C = (0, e.hb)(function() {
            let a, r, s = (0, t.c)(4),
                m = (0, e.X)(),
                f = (0, _.a)();
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(b, {}), s[0] = a) : a = s[0], s[1] !== f || s[2] !== m ? (r = (0, o.jsx)(c.Suspense, {
                fallback: a,
                children: f ? (0, o.jsx)(n, {
                    returnData: m
                }) : (0, o.jsx)(b, {})
            }), s[1] = f, s[2] = m, s[3] = r) : r = s[3], r
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
} from "./633146.7f86ed336a.js";
import * as r from "./418851.ac24d305cd.js";
a.C(r);
import * as s from "./109308.c9b7701e19.js";
a.C(s);
import * as e from "./399565.e3bd47902e.js";
a.C(e);
import * as o from "./257798.7e03f1e3e2.js";
a.C(o);
import * as t from "./447351.ec9533f9fc.js";
a.C(t);
import * as m from "./617936.b641c39dad.js";
a.C(m);
import * as c from "./807489.641526722d.js";
a.C(c);
import * as f from "./337882.c82c7eb7d0.js";
a.C(f);
import * as p from "./955979.26623eb1e8.js";
a.C(p);
import * as i from "./646436.6a9ea7ce2b.js";
a.C(i);
import * as _ from "./7078.7ac8d1f362.js";
a.C(_);
import * as n from "./200429.b3f88f116c.js";
a.C(n);
import * as d from "./698524.8e9b330e02.js";
a.C(d);
import * as j from "./956483.dad0089cdf.js";
a.C(j);
import * as l from "./87162.5235ed43cc.js";
a.C(l);
import * as b from "./396705.f3e9be32ee.js";
a.C(b);
import * as C from "./155568.f88fad6c40.js";
a.C(C);
import * as h from "./731863.70436835b9.js";
a.C(h);
import * as u from "./767086.dce6c25374.js";
a.C(u);
import * as x from "./76629.b4d403ea2d.js";
a.C(x);
import * as k from "./514085.be2a492f7d.js";
a.C(k);
import * as w from "./226913.dd4de34d8f.js";
a.C(w);
import * as v from "./658166.c6652a7ab3.js";
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