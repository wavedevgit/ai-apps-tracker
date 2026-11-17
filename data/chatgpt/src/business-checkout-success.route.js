export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    hXLT: (function(a, r, e) {
        e.d(r, {
            a: () => C,
            b: () => l,
            c: () => u,
            d: () => j,
            e: () => b
        });
        var s = e("rEML"),
            o = e("ABep"),
            t = e("QosV"),
            m = e("v8gE"),
            c = e("XyTt"),
            f = e("zd8w"),
            p = e("nyOD"),
            i = e("vV6o"),
            d = e("v4LA"),
            _ = e("jZDY");
        let n = (0, d.a)(c.g),
            j = i.a;
        async function l(a) {
            let {
                serverLoader: r
            } = a, [e] = await Promise.all([r(), n.prefetch()]);
            return e
        }
        let b = a => {
                let {
                    currentUrl: r,
                    nextUrl: e
                } = a;
                return r.pathname !== e.pathname || ["stripe_session_id", "processor_entity", "wallet_covered"].some(a => r.searchParams.get(a) !== e.searchParams.get(a))
            },
            C = (0, s.kb)(function() {
                let a, r = (0, t.c)(1);
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(m.b, {
                        name: "route content"
                    }), (0, o.jsx)(p.a, {
                        stage: "preparing_workspace"
                    })]
                }), r[0] = a) : a = r[0], a
            });
        var u = (0, s.ib)(function() {
            let a, r, e = (0, t.c)(4),
                m = (0, s.X)(),
                c = (0, _.a)();
            return e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(C, {}), e[0] = a) : a = e[0], e[1] !== c || e[2] !== m ? (r = (0, o.jsx)(f.Suspense, {
                fallback: a,
                children: c ? (0, o.jsx)(n, {
                    returnData: m
                }) : (0, o.jsx)(C, {})
            }), e[1] = c, e[2] = m, e[3] = r) : r = e[3], r
        })
    }),
    EBQV: (function(r) {
        r.exports = a.ir("/cdn/assets/dotnet.js").then(function(a) {
            return a
        })
    })
};
import {
    __webpack_require__ as a
} from "./633146.be60f96fcf.js";
import * as r from "./418851.d43ef6e51c.js";
a.C(r);
import * as e from "./109308.2094c16514.js";
a.C(e);
import * as s from "./399565.78e1c0aa0d.js";
a.C(s);
import * as o from "./257798.7e03f1e3e2.js";
a.C(o);
import * as t from "./447351.b188109392.js";
a.C(t);
import * as m from "./617936.fb76eb2727.js";
a.C(m);
import * as c from "./807489.9c1a8ccf71.js";
a.C(c);
import * as f from "./337882.5c43a2c90b.js";
a.C(f);
import * as p from "./955979.9ae2962bd4.js";
a.C(p);
import * as i from "./646436.b525bfd8f0.js";
a.C(i);
import * as d from "./7078.a82238bfec.js";
a.C(d);
import * as _ from "./200429.3bcaa139a4.js";
a.C(_);
import * as n from "./698524.3de98ac6af.js";
a.C(n);
import * as j from "./956483.227ec74d56.js";
a.C(j);
import * as l from "./87162.36edabe123.js";
a.C(l);
import * as b from "./396705.12275a5eb6.js";
a.C(b);
import * as C from "./155568.b3f888f917.js";
a.C(C);
import * as u from "./731863.367082aec0.js";
a.C(u);
import * as h from "./767086.1a336b6bc5.js";
a.C(h);
import * as x from "./76629.93a69b821a.js";
a.C(x);
import * as k from "./514085.fe0c9f50e5.js";
a.C(k);
import * as w from "./204542.f3712a1345.js";
a.C(w);
import * as v from "./226913.dd4de34d8f.js";
a.C(v);
import * as y from "./658166.2403fc6572.js";
a.C(y);
var g = a(a.s = "hXLT"),
    L = g.a,
    X = g.b,
    D = g.c,
    E = g.d,
    F = g.e;
export {
    L as HydrateFallback, X as clientLoader, D as
    default, E as handle, F as shouldRevalidate
};