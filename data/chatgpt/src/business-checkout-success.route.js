export const __rspack_esm_id = 658166;
export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    MRnH: (function(a, s, r) {
        r.d(s, {
            a: () => l,
            b: () => j,
            c: () => C,
            d: () => n,
            e: () => b
        });
        var e = r("HZfM"),
            o = r("ABep"),
            t = r("QosV"),
            m = r("XyTt"),
            p = r("zd8w"),
            f = r("nyOD"),
            c = r("vV6o"),
            i = r("v4LA"),
            d = r("jZDY");
        let _ = (0, i.a)(m.d),
            n = c.a;
        async function j(a) {
            let {
                serverLoader: s
            } = a, [r] = await Promise.all([s(), _.prefetch()]);
            return r
        }
        let b = a => {
                let {
                    currentUrl: s,
                    nextUrl: r
                } = a;
                return s.pathname !== r.pathname || ["stripe_session_id", "processor_entity", "wallet_covered"].some(a => s.searchParams.get(a) !== r.searchParams.get(a))
            },
            l = (0, e.ib)(function() {
                let a, s = (0, t.c)(1);
                return s[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(f.a, {
                    stage: "preparing_workspace"
                }), s[0] = a) : a = s[0], a
            });
        var C = (0, e.gb)(function() {
            let a, s, r = (0, t.c)(4),
                m = (0, e.W)(),
                f = (0, d.a)();
            return r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(l, {}), r[0] = a) : a = r[0], r[1] !== f || r[2] !== m ? (s = (0, o.jsx)(p.Suspense, {
                fallback: a,
                children: f ? (0, o.jsx)(_, {
                    returnData: m
                }) : (0, o.jsx)(l, {})
            }), r[1] = f, r[2] = m, r[3] = s) : s = r[3], s
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
} from "./633146.a17d6a6ece.js";
import * as s from "./418851.a310d22457.js";
a.C(s);
import * as r from "./109308.3562fe13f3.js";
a.C(r);
import * as e from "./399565.7c41a02089.js";
a.C(e);
import * as o from "./257798.61b55cc89c.js";
a.C(o);
import * as t from "./447351.eda4c66995.js";
a.C(t);
import * as m from "./617936.4109b40253.js";
a.C(m);
import * as p from "./807489.96baf824b2.js";
a.C(p);
import * as f from "./337882.91f09f4a71.js";
a.C(f);
import * as c from "./955979.75d3610bb4.js";
a.C(c);
import * as i from "./646436.cc0a492473.js";
a.C(i);
import * as d from "./7078.6fddaf5ec4.js";
a.C(d);
import * as _ from "./200429.ba0b0ae8d2.js";
a.C(_);
import * as n from "./698524.e7d509430b.js";
a.C(n);
import * as j from "./956483.bd6b1345c6.js";
a.C(j);
import * as b from "./87162.92d05ec456.js";
a.C(b);
import * as l from "./396705.b372b39223.js";
a.C(l);
import * as C from "./155568.42b045474e.js";
a.C(C);
import * as u from "./731863.50a2989dfa.js";
a.C(u);
import * as x from "./767086.2424b5520c.js";
a.C(x);
import * as h from "./76629.59d440aa04.js";
a.C(h);
import * as k from "./514085.3e4e8191c6.js";
a.C(k);
import * as w from "./204542.0b9798477e.js";
a.C(w);
import * as v from "./982651.170d8c0a0d.js";
a.C(v);
import * as y from "./673108.2217fb48eb.js";
a.C(y);
import * as g from "./487481.73eebe5ceb.js";
a.C(g);
import * as H from "./226913.f2de3ceb87.js";
a.C(H);
import * as R from "./658166.b8ecec5b92.js";
a.C(R);
var D = a(a.s = "MRnH"),
    L = D.a,
    M = D.b,
    P = D.c,
    S = D.d,
    V = D.e;
export {
    L as HydrateFallback, M as clientLoader, P as
    default, S as handle, V as shouldRevalidate
};