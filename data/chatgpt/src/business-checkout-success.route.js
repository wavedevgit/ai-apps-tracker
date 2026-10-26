export const __rspack_esm_id = 658166;
export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    MRnH: (function(e, s, a) {
        a.d(s, {
            a: () => b,
            b: () => l,
            c: () => C,
            d: () => n,
            e: () => j
        });
        var r = a("HZfM"),
            o = a("ABep"),
            t = a("QosV"),
            m = a("XyTt"),
            p = a("zd8w"),
            f = a("nyOD"),
            _ = a("vV6o"),
            c = a("v4LA"),
            i = a("jZDY");
        let d = (0, c.a)(m.d),
            n = _.a;
        async function l(e) {
            let {
                serverLoader: s
            } = e, [a] = await Promise.all([s(), d.prefetch()]);
            return a
        }
        let j = e => {
                let {
                    currentUrl: s,
                    nextUrl: a
                } = e;
                return s.pathname !== a.pathname || ["stripe_session_id", "processor_entity", "wallet_covered"].some(e => s.searchParams.get(e) !== a.searchParams.get(e))
            },
            b = (0, r.ib)(function() {
                let e, s = (0, t.c)(1);
                return s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(f.a, {
                    stage: "preparing_workspace"
                }), s[0] = e) : e = s[0], e
            });
        var C = (0, r.gb)(function() {
            let e, s, a = (0, t.c)(4),
                m = (0, r.W)(),
                f = (0, i.a)();
            return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(b, {}), a[0] = e) : e = a[0], a[1] !== f || a[2] !== m ? (s = (0, o.jsx)(p.Suspense, {
                fallback: e,
                children: f ? (0, o.jsx)(d, {
                    returnData: m
                }) : (0, o.jsx)(b, {})
            }), a[1] = f, a[2] = m, a[3] = s) : s = a[3], s
        })
    }),
    EBQV: (function(e) {
        e.exports = import("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.8ccf94f4a9.js";
import * as s from "./418851.03cabbf716.js";
e.C(s);
import * as a from "./109308.7514f132d4.js";
e.C(a);
import * as r from "./399565.7c41a02089.js";
e.C(r);
import * as o from "./257798.d071083f55.js";
e.C(o);
import * as t from "./447351.e9f865e3f3.js";
e.C(t);
import * as m from "./617936.edc210f0c8.js";
e.C(m);
import * as p from "./807489.0e4754e0d5.js";
e.C(p);
import * as f from "./337882.6b38416a54.js";
e.C(f);
import * as _ from "./955979.9a740f167b.js";
e.C(_);
import * as c from "./646436.e59ecc4e08.js";
e.C(c);
import * as i from "./7078.cf49d43062.js";
e.C(i);
import * as d from "./200429.b4b01eaef8.js";
e.C(d);
import * as n from "./698524.3083e7569a.js";
e.C(n);
import * as l from "./956483.26c60f5f46.js";
e.C(l);
import * as j from "./87162.ad1e3760e6.js";
e.C(j);
import * as b from "./396705.6e66fc9865.js";
e.C(b);
import * as C from "./155568.93d82a4151.js";
e.C(C);
import * as u from "./731863.d5f5792c34.js";
e.C(u);
import * as x from "./767086.cf8b78e4f4.js";
e.C(x);
import * as h from "./76629.85344d247d.js";
e.C(h);
import * as k from "./514085.5b9f4a58fe.js";
e.C(k);
import * as w from "./226913.d3063b225c.js";
e.C(w);
import * as v from "./658166.687728f34d.js";
e.C(v);
var y = e(e.s = "MRnH"),
    g = y.a,
    H = y.b,
    R = y.c,
    D = y.d,
    L = y.e;
export {
    g as HydrateFallback, H as clientLoader, R as
    default, D as handle, L as shouldRevalidate
};