export const __rspack_esm_id = 658166;
export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    MRnH: (function(a, s, r) {
        r.d(s, {
            a: () => b,
            b: () => j,
            c: () => C,
            d: () => n,
            e: () => l
        });
        var e = r("HZfM"),
            o = r("ABep"),
            t = r("QosV"),
            m = r("XyTt"),
            f = r("zd8w"),
            p = r("nyOD"),
            c = r("vV6o"),
            d = r("v4LA"),
            i = r("jZDY");
        let _ = (0, d.a)(m.d),
            n = c.a;
        async function j(a) {
            let {
                serverLoader: s
            } = a, [r] = await Promise.all([s(), _.prefetch()]);
            return r
        }
        let l = a => {
                let {
                    currentUrl: s,
                    nextUrl: r
                } = a;
                return s.pathname !== r.pathname || ["stripe_session_id", "processor_entity", "wallet_covered"].some(a => s.searchParams.get(a) !== r.searchParams.get(a))
            },
            b = (0, e.ib)(function() {
                let a, s = (0, t.c)(1);
                return s[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(p.a, {
                    stage: "preparing_workspace"
                }), s[0] = a) : a = s[0], a
            });
        var C = (0, e.gb)(function() {
            let a, s, r = (0, t.c)(4),
                m = (0, e.W)(),
                p = (0, i.a)();
            return r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(b, {}), r[0] = a) : a = r[0], r[1] !== p || r[2] !== m ? (s = (0, o.jsx)(f.Suspense, {
                fallback: a,
                children: p ? (0, o.jsx)(_, {
                    returnData: m
                }) : (0, o.jsx)(b, {})
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
} from "./633146.510c2d4c2a.js";
import * as s from "./418851.ced1c298d2.js";
a.C(s);
import * as r from "./109308.7514f132d4.js";
a.C(r);
import * as e from "./399565.7c41a02089.js";
a.C(e);
import * as o from "./257798.f8dfab4d2e.js";
a.C(o);
import * as t from "./447351.eda4c66995.js";
a.C(t);
import * as m from "./617936.4109b40253.js";
a.C(m);
import * as f from "./807489.96baf824b2.js";
a.C(f);
import * as p from "./337882.a886ddfe75.js";
a.C(p);
import * as c from "./955979.75d3610bb4.js";
a.C(c);
import * as d from "./646436.05d90fff40.js";
a.C(d);
import * as i from "./7078.106114d3b7.js";
a.C(i);
import * as _ from "./200429.b8f75009c4.js";
a.C(_);
import * as n from "./698524.11b477188a.js";
a.C(n);
import * as j from "./956483.1f8ec9f6ff.js";
a.C(j);
import * as l from "./87162.8221492420.js";
a.C(l);
import * as b from "./396705.4dac4581d5.js";
a.C(b);
import * as C from "./155568.3574a86c65.js";
a.C(C);
import * as u from "./731863.d76d385245.js";
a.C(u);
import * as x from "./767086.2424b5520c.js";
a.C(x);
import * as h from "./76629.c9d651bf3e.js";
a.C(h);
import * as k from "./514085.58cc3be669.js";
a.C(k);
import * as w from "./204542.8e2b8524b1.js";
a.C(w);
import * as v from "./982651.d1de81031c.js";
a.C(v);
import * as y from "./673108.b00e716df0.js";
a.C(y);
import * as g from "./487481.da25d3e963.js";
a.C(g);
import * as H from "./226913.f2de3ceb87.js";
a.C(H);
import * as R from "./658166.2c9ca2bede.js";
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