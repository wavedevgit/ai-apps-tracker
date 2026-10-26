export const __rspack_esm_id = 658166;
export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    MRnH: (function(a, s, r) {
        r.d(s, {
            a: () => j,
            b: () => b,
            c: () => C,
            d: () => n,
            e: () => l
        });
        var e = r("HZfM"),
            o = r("ABep"),
            t = r("QosV"),
            m = r("XyTt"),
            c = r("zd8w"),
            p = r("nyOD"),
            f = r("vV6o"),
            _ = r("v4LA"),
            i = r("jZDY");
        let d = (0, _.a)(m.d),
            n = f.a;
        async function b(a) {
            let {
                serverLoader: s
            } = a, [r] = await Promise.all([s(), d.prefetch()]);
            return r
        }
        let l = a => {
                let {
                    currentUrl: s,
                    nextUrl: r
                } = a;
                return s.pathname !== r.pathname || ["stripe_session_id", "processor_entity", "wallet_covered"].some(a => s.searchParams.get(a) !== r.searchParams.get(a))
            },
            j = (0, e.ib)(function() {
                let a, s = (0, t.c)(1);
                return s[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(p.a, {
                    stage: "preparing_workspace"
                }), s[0] = a) : a = s[0], a
            });
        var C = (0, e.gb)(function() {
            let a, s, r = (0, t.c)(4),
                m = (0, e.W)(),
                p = (0, i.a)();
            return r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(j, {}), r[0] = a) : a = r[0], r[1] !== p || r[2] !== m ? (s = (0, o.jsx)(c.Suspense, {
                fallback: a,
                children: p ? (0, o.jsx)(d, {
                    returnData: m
                }) : (0, o.jsx)(j, {})
            }), r[1] = p, r[2] = m, r[3] = s) : s = r[3], s
        })
    }),
    EBQV: (function(a) {
        a.exports = import("/cdn/assets/dotnet.js").then(function(a) {
            return a
        })
    })
};
import {
    __webpack_require__ as a
} from "./633146.ac9456b1e1.js";
import * as s from "./418851.c327f54b65.js";
a.C(s);
import * as r from "./109308.7514f132d4.js";
a.C(r);
import * as e from "./399565.7c41a02089.js";
a.C(e);
import * as o from "./257798.d071083f55.js";
a.C(o);
import * as t from "./447351.35be5fdf29.js";
a.C(t);
import * as m from "./617936.a716616cdd.js";
a.C(m);
import * as c from "./807489.cb0a7bc2fa.js";
a.C(c);
import * as p from "./337882.869cf69f2e.js";
a.C(p);
import * as f from "./955979.e6800ce6f4.js";
a.C(f);
import * as _ from "./646436.d857c6730f.js";
a.C(_);
import * as i from "./7078.c537362493.js";
a.C(i);
import * as d from "./200429.b4b01eaef8.js";
a.C(d);
import * as n from "./698524.e419636c63.js";
a.C(n);
import * as b from "./956483.a08bf8e5c8.js";
a.C(b);
import * as l from "./87162.ad1e3760e6.js";
a.C(l);
import * as j from "./396705.5660aed797.js";
a.C(j);
import * as C from "./155568.d52d113acf.js";
a.C(C);
import * as u from "./731863.79a03ea308.js";
a.C(u);
import * as x from "./767086.5c4725bfbf.js";
a.C(x);
import * as h from "./76629.66fdfa09f3.js";
a.C(h);
import * as k from "./514085.908aab937e.js";
a.C(k);
import * as w from "./226913.f2de3ceb87.js";
a.C(w);
import * as v from "./658166.1260c2f521.js";
a.C(v);
var y = a(a.s = "MRnH"),
    g = y.a,
    H = y.b,
    R = y.c,
    D = y.d,
    L = y.e;
export {
    g as HydrateFallback, H as clientLoader, R as
    default, D as handle, L as shouldRevalidate
};