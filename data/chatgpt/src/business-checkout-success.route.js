export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    hXLT: (function(a, b, c) {
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
} from "./633146.511711c8b9.js";
import * as b from "./418851.d52a1ffc2f.js";
a.C(b);
import * as c from "./109308.4d55635a3c.js";
a.C(c);
import * as d from "./399565.700e278f2d.js";
a.C(d);
import * as e from "./257798.bf743d3ac4.js";
a.C(e);
import * as f from "./447351.05632d2214.js";
a.C(f);
import * as g from "./617936.a1bdaefa17.js";
a.C(g);
import * as h from "./807489.2515299139.js";
a.C(h);
import * as i from "./337882.b7027c58e4.js";
a.C(i);
import * as j from "./955979.17a59d5e45.js";
a.C(j);
import * as k from "./646436.71dd39a771.js";
a.C(k);
import * as l from "./7078.bd9e0604da.js";
a.C(l);
import * as m from "./200429.7cb44b876c.js";
a.C(m);
import * as n from "./698524.76d0d9fd5b.js";
a.C(n);
import * as o from "./956483.f7260d7dd1.js";
a.C(o);
import * as p from "./87162.27c50a9bde.js";
a.C(p);
import * as q from "./396705.2318c018fd.js";
a.C(q);
import * as r from "./155568.d41a363926.js";
a.C(r);
import * as s from "./731863.ace382bf58.js";
a.C(s);
import * as t from "./767086.390bf6c64e.js";
a.C(t);
import * as u from "./76629.a6013c50b6.js";
a.C(u);
import * as v from "./226913.9dca92fd99.js";
a.C(v);
import * as w from "./658166.b1e2ed6575.js";
a.C(w);
var x = a(a.s = "hXLT"),
    y = x.a,
    z = x.b,
    A = x.c,
    B = x.d,
    C = x.e;
export {
    y as HydrateFallback, z as clientLoader, A as
    default, B as handle, C as shouldRevalidate
};