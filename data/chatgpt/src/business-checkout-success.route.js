export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    ML3h: (function(a, e, r) {
        r.d(e, {
            a: () => b,
            b: () => j,
            c: () => C,
            d: () => n,
            e: () => l
        });
        var s = r("jqIZ"),
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
                serverLoader: e
            } = a, [r] = await Promise.all([e(), _.prefetch()]);
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
                return e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(p.a, {
                    stage: "preparing_workspace"
                }), e[0] = a) : a = e[0], a
            });
        var C = (0, s.hb)(function() {
            let a, e, r = (0, t.c)(4),
                m = (0, s.X)(),
                p = (0, i.a)();
            return r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(b, {}), r[0] = a) : a = r[0], r[1] !== p || r[2] !== m ? (e = (0, o.jsx)(f.Suspense, {
                fallback: a,
                children: p ? (0, o.jsx)(_, {
                    returnData: m
                }) : (0, o.jsx)(b, {})
            }), r[1] = p, r[2] = m, r[3] = e) : e = r[3], e
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
} from "./633146.acefa13d1a.js";
import * as e from "./418851.4b043c43bc.js";
a.C(e);
import * as r from "./109308.e66696cd0d.js";
a.C(r);
import * as s from "./399565.2fc4679b26.js";
a.C(s);
import * as o from "./257798.b51742efd5.js";
a.C(o);
import * as t from "./447351.496da706c3.js";
a.C(t);
import * as m from "./617936.dcbf382e63.js";
a.C(m);
import * as f from "./807489.7f5d47cb0e.js";
a.C(f);
import * as p from "./337882.f22d43d615.js";
a.C(p);
import * as c from "./955979.d659318431.js";
a.C(c);
import * as d from "./646436.30c2553f0b.js";
a.C(d);
import * as i from "./7078.5cd07a5c9b.js";
a.C(i);
import * as _ from "./200429.82d37d45f2.js";
a.C(_);
import * as n from "./698524.1d78dbab32.js";
a.C(n);
import * as j from "./956483.4fffedad3f.js";
a.C(j);
import * as l from "./87162.ceb3023033.js";
a.C(l);
import * as b from "./396705.74bbf371c4.js";
a.C(b);
import * as C from "./155568.8fe9b1a879.js";
a.C(C);
import * as h from "./731863.e2c3850b56.js";
a.C(h);
import * as u from "./767086.e730a8ccb4.js";
a.C(u);
import * as x from "./76629.0f4df00a80.js";
a.C(x);
import * as k from "./226913.27c93050ff.js";
a.C(k);
import * as w from "./658166.f3e7388411.js";
a.C(w);
var v = a(a.s = "ML3h"),
    y = v.a,
    L = v.b,
    g = v.c,
    D = v.d,
    P = v.e;
export {
    y as HydrateFallback, L as clientLoader, g as
    default, D as handle, P as shouldRevalidate
};