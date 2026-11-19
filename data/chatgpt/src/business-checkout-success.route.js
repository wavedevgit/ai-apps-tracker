export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    hXLT: (function(a, e, r) {
        r.d(e, {
            a: () => C,
            b: () => b,
            c: () => h,
            d: () => l,
            e: () => j
        });
        var s = r("rEML"),
            o = r("ABep"),
            t = r("QosV"),
            m = r("v8gE"),
            c = r("XyTt"),
            f = r("zd8w"),
            p = r("nyOD"),
            d = r("vV6o"),
            i = r("v4LA"),
            _ = r("jZDY");
        let n = (0, i.a)(c.h),
            l = d.a;
        async function b(a) {
            let {
                serverLoader: e
            } = a, [r] = await Promise.all([e(), n.prefetch()]);
            return r
        }
        let j = a => {
                let {
                    currentUrl: e,
                    nextUrl: r
                } = a;
                return e.pathname !== r.pathname || ["stripe_session_id", "processor_entity", "wallet_covered"].some(a => e.searchParams.get(a) !== r.searchParams.get(a))
            },
            C = (0, s.mb)(function() {
                let a, e = (0, t.c)(1);
                return e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(m.b, {
                        name: "route content"
                    }), (0, o.jsx)(p.a, {
                        stage: "preparing_workspace"
                    })]
                }), e[0] = a) : a = e[0], a
            });
        var h = (0, s.kb)(function() {
            let a, e, r = (0, t.c)(4),
                m = (0, s.Y)(),
                c = (0, _.a)();
            return r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(C, {}), r[0] = a) : a = r[0], r[1] !== c || r[2] !== m ? (e = (0, o.jsx)(f.Suspense, {
                fallback: a,
                children: c ? (0, o.jsx)(n, {
                    returnData: m
                }) : (0, o.jsx)(C, {})
            }), r[1] = c, r[2] = m, r[3] = e) : e = r[3], e
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
} from "./633146.2ddddba2a5.js";
import * as e from "./418851.f34514cc3f.js";
a.C(e);
import * as r from "./109308.8b09661749.js";
a.C(r);
import * as s from "./399565.edefe43a76.js";
a.C(s);
import * as o from "./257798.6b4268ddac.js";
a.C(o);
import * as t from "./447351.34d04099ca.js";
a.C(t);
import * as m from "./617936.4a1557f13c.js";
a.C(m);
import * as c from "./807489.6b5279adf3.js";
a.C(c);
import * as f from "./337882.568bafdf14.js";
a.C(f);
import * as p from "./955979.b2a7e19963.js";
a.C(p);
import * as d from "./646436.5963e38f02.js";
a.C(d);
import * as i from "./7078.0a9a41e515.js";
a.C(i);
import * as _ from "./200429.a549930e29.js";
a.C(_);
import * as n from "./698524.48945354c5.js";
a.C(n);
import * as l from "./956483.962c0de04b.js";
a.C(l);
import * as b from "./87162.e4a69efaac.js";
a.C(b);
import * as j from "./396705.51be923e43.js";
a.C(j);
import * as C from "./155568.1f7b7a00a5.js";
a.C(C);
import * as h from "./731863.5a49a2d190.js";
a.C(h);
import * as u from "./767086.61b8f8fca3.js";
a.C(u);
import * as x from "./226913.cf105b979e.js";
a.C(x);
import * as k from "./658166.9a87372ef2.js";
a.C(k);
var w = a(a.s = "hXLT"),
    v = w.a,
    y = w.b,
    g = w.c,
    L = w.d,
    D = w.e;
export {
    v as HydrateFallback, y as clientLoader, g as
    default, L as handle, D as shouldRevalidate
};