export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    XEPH: (function(a, b, c) {
        c.d(b, {
            a: () => r,
            b: () => p,
            c: () => s,
            d: () => o,
            e: () => q
        });
        var d = c("rEML"),
            e = c("ABep"),
            f = c("QosV"),
            g = c("v8gE"),
            h = c("XyTt"),
            i = c("zd8w"),
            j = c("nyOD"),
            k = c("vV6o"),
            l = c("v4LA"),
            m = c("jZDY");
        let n = (0, l.a)(h.h),
            o = k.a;
        async function p(a) {
            let {
                serverLoader: b
            } = a, [c] = await Promise.all([b(), n.prefetch()]);
            return c
        }
        let q = a => {
                let {
                    currentUrl: b,
                    nextUrl: c
                } = a;
                return b.pathname !== c.pathname || ["stripe_session_id", "processor_entity", "wallet_covered"].some(a => b.searchParams.get(a) !== c.searchParams.get(a))
            },
            r = (0, d.mb)(function() {
                let a, b = (0, f.c)(1);
                return b[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, e.jsxs)(e.Fragment, {
                    children: [(0, e.jsx)(g.b, {
                        name: "route content"
                    }), (0, e.jsx)(j.a, {
                        stage: "preparing_workspace"
                    })]
                }), b[0] = a) : a = b[0], a
            });
        var s = (0, d.kb)(function() {
            let a, b, c = (0, f.c)(4),
                g = (0, d.Y)(),
                h = (0, m.a)();
            return c[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, e.jsx)(r, {}), c[0] = a) : a = c[0], c[1] !== h || c[2] !== g ? (b = (0, e.jsx)(i.Suspense, {
                fallback: a,
                children: h ? (0, e.jsx)(n, {
                    returnData: g
                }) : (0, e.jsx)(r, {})
            }), c[1] = h, c[2] = g, c[3] = b) : b = c[3], b
        })
    }),
    EBQV: (function(b) {
        b.exports = a.ir("/cdn/assets/dotnet.js").then(function(a) {
            return a
        })
    })
};
import {
    __webpack_require__ as a
} from "./633146.44c41f9881.js";
import * as b from "./418851.d461b09398.js";
a.C(b);
import * as c from "./109308.6f7ef1dfb7.js";
a.C(c);
import * as d from "./399565.04d51b97fa.js";
a.C(d);
import * as e from "./257798.9ecf4d3ec0.js";
a.C(e);
import * as f from "./447351.7cc0e9b0b6.js";
a.C(f);
import * as g from "./617936.83eea6e593.js";
a.C(g);
import * as h from "./807489.7aa67edeba.js";
a.C(h);
import * as i from "./337882.219e3ada84.js";
a.C(i);
import * as j from "./955979.a3e9dd394b.js";
a.C(j);
import * as k from "./646436.82a6afd168.js";
a.C(k);
import * as l from "./7078.3a7ae651f9.js";
a.C(l);
import * as m from "./200429.41df82824c.js";
a.C(m);
import * as n from "./698524.d1d668b037.js";
a.C(n);
import * as o from "./956483.3a192f7957.js";
a.C(o);
import * as p from "./87162.b7af17491f.js";
a.C(p);
import * as q from "./396705.1cd3df2a36.js";
a.C(q);
import * as r from "./155568.ea2903d980.js";
a.C(r);
import * as s from "./731863.77eaa985c3.js";
a.C(s);
import * as t from "./767086.b48caf5564.js";
a.C(t);
import * as u from "./76629.c55b0947a1.js";
a.C(u);
import * as v from "./226913.336cc1ac6c.js";
a.C(v);
import * as w from "./658166.9c6d300d6a.js";
a.C(w);
var x = a(a.s = "XEPH"),
    y = x.a,
    z = x.b,
    A = x.c,
    B = x.d,
    C = x.e;
export {
    y as HydrateFallback, z as clientLoader, A as
    default, B as handle, C as shouldRevalidate
};