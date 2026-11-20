export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    hXLT: (function(a, e, r) {
        r.d(e, {
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
            i = r("nyOD"),
            f = r("vV6o"),
            _ = r("v4LA"),
            d = r("jZDY");
        let n = (0, _.a)(c.h),
            l = f.a;
        async function j(a) {
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
            C = (0, s.mb)(function() {
                let a, e = (0, t.c)(1);
                return e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(m.b, {
                        name: "route content"
                    }), (0, o.jsx)(i.a, {
                        stage: "preparing_workspace"
                    })]
                }), e[0] = a) : a = e[0], a
            });
        var h = (0, s.kb)(function() {
            let a, e, r = (0, t.c)(4),
                m = (0, s.Y)(),
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
} from "./633146.48b57020d2.js";
import * as e from "./418851.5b0ade19b1.js";
a.C(e);
import * as r from "./109308.8b09661749.js";
a.C(r);
import * as s from "./399565.edefe43a76.js";
a.C(s);
import * as o from "./257798.428a6bce48.js";
a.C(o);
import * as t from "./447351.34d04099ca.js";
a.C(t);
import * as m from "./617936.dd75fa2a89.js";
a.C(m);
import * as c from "./807489.1d24fa9988.js";
a.C(c);
import * as p from "./337882.145f5ca770.js";
a.C(p);
import * as i from "./955979.fad3aa290b.js";
a.C(i);
import * as f from "./646436.b50a318f52.js";
a.C(f);
import * as _ from "./7078.9bac2fcc06.js";
a.C(_);
import * as d from "./200429.f07d17d37b.js";
a.C(d);
import * as n from "./698524.130da41cbb.js";
a.C(n);
import * as l from "./956483.20ccea0970.js";
a.C(l);
import * as j from "./87162.4896e26514.js";
a.C(j);
import * as b from "./396705.e5ddd72a06.js";
a.C(b);
import * as C from "./155568.49e7ad46aa.js";
a.C(C);
import * as h from "./731863.3cdbbfa8f8.js";
a.C(h);
import * as u from "./767086.3711424c4d.js";
a.C(u);
import * as x from "./76629.15f5868e7b.js";
a.C(x);
import * as k from "./226913.cf105b979e.js";
a.C(k);
import * as w from "./658166.21b4ded3e6.js";
a.C(w);
var v = a(a.s = "hXLT"),
    y = v.a,
    g = v.b,
    L = v.c,
    D = v.d,
    E = v.e;
export {
    y as HydrateFallback, g as clientLoader, L as
    default, D as handle, E as shouldRevalidate
};