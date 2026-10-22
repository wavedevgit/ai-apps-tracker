export const __rspack_esm_id = 658166;
export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    MRn: (function(a, r, s) {
        s.d(r, {
            a: () => b,
            b: () => j,
            c: () => C,
            d: () => n,
            e: () => l
        });
        var e = s("HZ"),
            o = s("A"),
            t = s("Qo"),
            m = s("XyT"),
            c = s("zd"),
            p = s("nyO"),
            f = s("vV"),
            i = s("v4"),
            d = s("jZD");
        let _ = (0, i.a)(m.d),
            n = f.a;
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
            b = (0, e.ib)(function() {
                let a, r = (0, t.c)(1);
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(p.a, {
                    stage: "preparing_workspace"
                }), r[0] = a) : a = r[0], a
            });
        var C = (0, e.gb)(function() {
            let a, r, s = (0, t.c)(4),
                m = (0, e.W)(),
                p = (0, d.a)();
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(b, {}), s[0] = a) : a = s[0], s[1] !== p || s[2] !== m ? (r = (0, o.jsx)(c.Suspense, {
                fallback: a,
                children: p ? (0, o.jsx)(_, {
                    returnData: m
                }) : (0, o.jsx)(b, {})
            }), s[1] = p, s[2] = m, s[3] = r) : r = s[3], r
        })
    }),
    EBQ: (function(a) {
        a.exports = import("/cdn/assets/dotnet.js").then(function(a) {
            return a
        })
    })
};
import {
    __webpack_require__ as a
} from "./633146.1acff1fd97.js";
import * as r from "./418851.26885c363c.js";
a.C(r);
import * as s from "./109308.2b1d9d6c81.js";
a.C(s);
import * as e from "./399565.a1117ca8b4.js";
a.C(e);
import * as o from "./257798.d843b1936f.js";
a.C(o);
import * as t from "./447351.932e2385aa.js";
a.C(t);
import * as m from "./617936.c1e603d513.js";
a.C(m);
import * as c from "./807489.b7e7128b38.js";
a.C(c);
import * as p from "./337882.9e4ade9102.js";
a.C(p);
import * as f from "./955979.3c3e4491c9.js";
a.C(f);
import * as i from "./646436.ae52bce54a.js";
a.C(i);
import * as d from "./7078.1d3962d820.js";
a.C(d);
import * as _ from "./200429.6f42405259.js";
a.C(_);
import * as n from "./698524.d5e486fc8c.js";
a.C(n);
import * as j from "./956483.54777e5de5.js";
a.C(j);
import * as l from "./87162.b75f4ffcd0.js";
a.C(l);
import * as b from "./396705.fee9cdb4c3.js";
a.C(b);
import * as C from "./155568.a8a70a96a2.js";
a.C(C);
import * as u from "./731863.debd0d0a4a.js";
a.C(u);
import * as x from "./767086.14c8de4b86.js";
a.C(x);
import * as h from "./76629.7179268415.js";
a.C(h);
import * as k from "./514085.ccac72088d.js";
a.C(k);
import * as w from "./204542.c2b519874e.js";
a.C(w);
import * as v from "./982651.d0b6d5b191.js";
a.C(v);
import * as y from "./673108.68f9b92566.js";
a.C(y);
import * as g from "./487481.27ec69afbb.js";
a.C(g);
import * as R from "./226913.4f6f289942.js";
a.C(R);
import * as H from "./658166.28239671e4.js";
a.C(H);
var P = a(a.s = "MRn"),
    S = P.a,
    D = P.b,
    F = P.c,
    L = P.d,
    M = P.e;
export {
    S as HydrateFallback, D as clientLoader, F as
    default, L as handle, M as shouldRevalidate
};