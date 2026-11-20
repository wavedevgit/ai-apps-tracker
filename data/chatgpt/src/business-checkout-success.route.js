export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    hXLT: (function(e, a, r) {
        r.d(a, {
            a: () => C,
            b: () => j,
            c: () => h,
            d: () => l,
            e: () => b
        });
        var s = r("rEML"),
            o = r("ABep"),
            t = r("QosV"),
            m = r("v8gE"),
            c = r("XyTt"),
            p = r("zd8w"),
            f = r("nyOD"),
            i = r("vV6o"),
            _ = r("v4LA"),
            d = r("jZDY");
        let n = (0, _.a)(c.h),
            l = i.a;
        async function j(e) {
            let {
                serverLoader: a
            } = e, [r] = await Promise.all([a(), n.prefetch()]);
            return r
        }
        let b = e => {
                let {
                    currentUrl: a,
                    nextUrl: r
                } = e;
                return a.pathname !== r.pathname || ["stripe_session_id", "processor_entity", "wallet_covered"].some(e => a.searchParams.get(e) !== r.searchParams.get(e))
            },
            C = (0, s.mb)(function() {
                let e, a = (0, t.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(m.b, {
                        name: "route content"
                    }), (0, o.jsx)(f.a, {
                        stage: "preparing_workspace"
                    })]
                }), a[0] = e) : e = a[0], e
            });
        var h = (0, s.kb)(function() {
            let e, a, r = (0, t.c)(4),
                m = (0, s.Y)(),
                c = (0, d.a)();
            return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(C, {}), r[0] = e) : e = r[0], r[1] !== c || r[2] !== m ? (a = (0, o.jsx)(p.Suspense, {
                fallback: e,
                children: c ? (0, o.jsx)(n, {
                    returnData: m
                }) : (0, o.jsx)(C, {})
            }), r[1] = c, r[2] = m, r[3] = a) : a = r[3], a
        })
    }),
    EBQV: (function(a) {
        a.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.286e08e471.js";
import * as a from "./418851.b2405a4ff9.js";
e.C(a);
import * as r from "./109308.c704a27752.js";
e.C(r);
import * as s from "./399565.76c7da28d9.js";
e.C(s);
import * as o from "./257798.da1bc54c05.js";
e.C(o);
import * as t from "./447351.34d04099ca.js";
e.C(t);
import * as m from "./617936.da77c6b618.js";
e.C(m);
import * as c from "./807489.823dbdfb5a.js";
e.C(c);
import * as p from "./337882.060a468551.js";
e.C(p);
import * as f from "./955979.5504cdc0ad.js";
e.C(f);
import * as i from "./646436.feae78aa0d.js";
e.C(i);
import * as _ from "./7078.6f2aee03ba.js";
e.C(_);
import * as d from "./200429.80eabab50b.js";
e.C(d);
import * as n from "./698524.9faf81ab1c.js";
e.C(n);
import * as l from "./956483.db483d044c.js";
e.C(l);
import * as j from "./87162.313d693207.js";
e.C(j);
import * as b from "./396705.047d6db773.js";
e.C(b);
import * as C from "./155568.1d9e3b614b.js";
e.C(C);
import * as h from "./731863.5760f3f335.js";
e.C(h);
import * as u from "./767086.ab8a876382.js";
e.C(u);
import * as x from "./76629.6fe0bcbf7b.js";
e.C(x);
import * as k from "./226913.cf105b979e.js";
e.C(k);
import * as w from "./658166.9cdfffee8b.js";
e.C(w);
var v = e(e.s = "hXLT"),
    y = v.a,
    g = v.b,
    L = v.c,
    D = v.d,
    E = v.e;
export {
    y as HydrateFallback, g as clientLoader, L as
    default, D as handle, E as shouldRevalidate
};