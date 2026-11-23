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
} from "./633146.1f27f5a9c8.js";
import * as b from "./418851.05e747fff0.js";
a.C(b);
import * as c from "./109308.d24e70db04.js";
a.C(c);
import * as d from "./399565.bde4033eb2.js";
a.C(d);
import * as e from "./257798.0095cbe700.js";
a.C(e);
import * as f from "./447351.05632d2214.js";
a.C(f);
import * as g from "./617936.75afa06ed2.js";
a.C(g);
import * as h from "./807489.5142370709.js";
a.C(h);
import * as i from "./337882.abb4bc92fd.js";
a.C(i);
import * as j from "./955979.54c13b0fc4.js";
a.C(j);
import * as k from "./646436.e4ed460833.js";
a.C(k);
import * as l from "./7078.61922297fe.js";
a.C(l);
import * as m from "./200429.e860765fad.js";
a.C(m);
import * as n from "./698524.4f94b9b043.js";
a.C(n);
import * as o from "./956483.afc3e2c9fd.js";
a.C(o);
import * as p from "./87162.e84f1cbe30.js";
a.C(p);
import * as q from "./396705.16d73232e5.js";
a.C(q);
import * as r from "./155568.18f2193ead.js";
a.C(r);
import * as s from "./731863.b14c3a25df.js";
a.C(s);
import * as t from "./767086.d600a395f4.js";
a.C(t);
import * as u from "./76629.2b5e8e87e6.js";
a.C(u);
import * as v from "./226913.748570e15f.js";
a.C(v);
import * as w from "./658166.6f1a8c0ecc.js";
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