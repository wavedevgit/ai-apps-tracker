export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    hXLT: (function(a, e, r) {
        r.d(e, {
            a: () => C,
            b: () => l,
            c: () => h,
            d: () => j,
            e: () => b
        });
        var s = r("rEML"),
            o = r("ABep"),
            t = r("QosV"),
            m = r("v8gE"),
            c = r("XyTt"),
            p = r("zd8w"),
            i = r("nyOD"),
            f = r("vV6o"),
            _ = r("v4LA"),
            d = r("jZDY");
        let n = (0, _.a)(c.g),
            j = f.a;
        async function l(a) {
            let {
                serverLoader: e
            } = a, [r] = await Promise.all([e(), n.prefetch()]);
            return r
        }
        let b = a => {
                let {
                    currentUrl: e,
                    nextUrl: r
                } = a;
                return e.pathname !== r.pathname || ["stripe_session_id", "processor_entity", "wallet_covered"].some(a => e.searchParams.get(a) !== r.searchParams.get(a))
            },
            C = (0, s.jb)(function() {
                let a, e = (0, t.c)(1);
                return e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(m.b, {
                        name: "route content"
                    }), (0, o.jsx)(i.a, {
                        stage: "preparing_workspace"
                    })]
                }), e[0] = a) : a = e[0], a
            });
        var h = (0, s.hb)(function() {
            let a, e, r = (0, t.c)(4),
                m = (0, s.W)(),
                c = (0, d.a)();
            return r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(C, {}), r[0] = a) : a = r[0], r[1] !== c || r[2] !== m ? (e = (0, o.jsx)(p.Suspense, {
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
} from "./633146.468d071759.js";
import * as e from "./418851.f3d2ce19b4.js";
a.C(e);
import * as r from "./109308.4b30101b7c.js";
a.C(r);
import * as s from "./399565.7c8a3f7e95.js";
a.C(s);
import * as o from "./257798.b061e3b37a.js";
a.C(o);
import * as t from "./447351.9446ee3aae.js";
a.C(t);
import * as m from "./617936.a5a9458f41.js";
a.C(m);
import * as c from "./807489.503e8e46b2.js";
a.C(c);
import * as p from "./337882.42cb1bc757.js";
a.C(p);
import * as i from "./955979.7655b0fa98.js";
a.C(i);
import * as f from "./646436.ad0e600e92.js";
a.C(f);
import * as _ from "./7078.20ffc77da3.js";
a.C(_);
import * as d from "./200429.b7f8e76f67.js";
a.C(d);
import * as n from "./698524.ab39482137.js";
a.C(n);
import * as j from "./956483.4dc58508d8.js";
a.C(j);
import * as l from "./87162.6154a54863.js";
a.C(l);
import * as b from "./396705.cf1cfb54a0.js";
a.C(b);
import * as C from "./155568.831b2b3d34.js";
a.C(C);
import * as h from "./731863.6fc88890bf.js";
a.C(h);
import * as u from "./767086.c88be6c073.js";
a.C(u);
import * as x from "./76629.30a094a9b3.js";
a.C(x);
import * as k from "./514085.037ce67b03.js";
a.C(k);
import * as w from "./226913.a7e38eae43.js";
a.C(w);
import * as v from "./658166.8128852e85.js";
a.C(v);
var y = a(a.s = "hXLT"),
    g = y.a,
    L = y.b,
    D = y.c,
    E = y.d,
    F = y.e;
export {
    g as HydrateFallback, L as clientLoader, D as
    default, E as handle, F as shouldRevalidate
};