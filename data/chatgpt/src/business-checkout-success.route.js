export const __rspack_esm_id = 658166;
export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    xrSZ: (function(a, e, r) {
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
            c = r("zd8w"),
            p = r("nyOD"),
            f = r("vV6o"),
            _ = r("v4LA"),
            i = r("jZDY");
        let d = (0, _.a)(m.d),
            n = f.a;
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
            b = (0, s.ib)(function() {
                let a, e = (0, t.c)(1);
                return e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(p.a, {
                    stage: "preparing_workspace"
                }), e[0] = a) : a = e[0], a
            });
        var C = (0, s.gb)(function() {
            let a, e, r = (0, t.c)(4),
                m = (0, s.W)(),
                p = (0, i.a)();
            return r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(b, {}), r[0] = a) : a = r[0], r[1] !== p || r[2] !== m ? (e = (0, o.jsx)(c.Suspense, {
                fallback: a,
                children: p ? (0, o.jsx)(d, {
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
} from "./633146.3772bb65f2.js";
import * as e from "./418851.f73cc339e0.js";
a.C(e);
import * as r from "./109308.7514f132d4.js";
a.C(r);
import * as s from "./399565.7c41a02089.js";
a.C(s);
import * as o from "./257798.d071083f55.js";
a.C(o);
import * as t from "./447351.235d9feb9b.js";
a.C(t);
import * as m from "./617936.5a9a90c450.js";
a.C(m);
import * as c from "./807489.8dca38b3d3.js";
a.C(c);
import * as p from "./337882.9e5e4eca02.js";
a.C(p);
import * as f from "./955979.48571145f4.js";
a.C(f);
import * as _ from "./646436.7c73091269.js";
a.C(_);
import * as i from "./7078.2bd0b87ab7.js";
a.C(i);
import * as d from "./200429.2bc20b9a34.js";
a.C(d);
import * as n from "./698524.b544aec8f4.js";
a.C(n);
import * as j from "./956483.be04337593.js";
a.C(j);
import * as l from "./87162.ad1e3760e6.js";
a.C(l);
import * as b from "./396705.8045a843b9.js";
a.C(b);
import * as C from "./155568.dca4d10394.js";
a.C(C);
import * as x from "./731863.f83b49d43f.js";
a.C(x);
import * as u from "./767086.e5c70972cb.js";
a.C(u);
import * as h from "./76629.6e18d367a6.js";
a.C(h);
import * as k from "./514085.399728d0f5.js";
a.C(k);
import * as w from "./226913.f2de3ceb87.js";
a.C(w);
import * as v from "./658166.013c95e403.js";
a.C(v);
var y = a(a.s = "xrSZ"),
    g = y.a,
    S = y.b,
    Z = y.c,
    D = y.d,
    L = y.e;
export {
    g as HydrateFallback, S as clientLoader, Z as
    default, D as handle, L as shouldRevalidate
};