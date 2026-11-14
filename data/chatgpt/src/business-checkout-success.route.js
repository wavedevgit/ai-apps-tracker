export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    hXLT: (function(a, r, s) {
        s.d(r, {
            a: () => C,
            b: () => j,
            c: () => b,
            d: () => n,
            e: () => l
        });
        var e = s("jqIZ"),
            o = s("ABep"),
            t = s("QosV"),
            m = s("XyTt"),
            c = s("zd8w"),
            f = s("nyOD"),
            p = s("vV6o"),
            i = s("v4LA"),
            _ = s("jZDY");
        let d = (0, i.a)(m.f),
            n = p.a;
        async function j(a) {
            let {
                serverLoader: r
            } = a, [s] = await Promise.all([r(), d.prefetch()]);
            return s
        }
        let l = a => {
                let {
                    currentUrl: r,
                    nextUrl: s
                } = a;
                return r.pathname !== s.pathname || ["stripe_session_id", "processor_entity", "wallet_covered"].some(a => r.searchParams.get(a) !== s.searchParams.get(a))
            },
            C = (0, e.jb)(function() {
                let a, r = (0, t.c)(1);
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(f.a, {
                    stage: "preparing_workspace"
                }), r[0] = a) : a = r[0], a
            });
        var b = (0, e.hb)(function() {
            let a, r, s = (0, t.c)(4),
                m = (0, e.X)(),
                f = (0, _.a)();
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(C, {}), s[0] = a) : a = s[0], s[1] !== f || s[2] !== m ? (r = (0, o.jsx)(c.Suspense, {
                fallback: a,
                children: f ? (0, o.jsx)(d, {
                    returnData: m
                }) : (0, o.jsx)(C, {})
            }), s[1] = f, s[2] = m, s[3] = r) : r = s[3], r
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
} from "./633146.6428a93122.js";
import * as r from "./418851.3351eb0d2c.js";
a.C(r);
import * as s from "./109308.a4430446b5.js";
a.C(s);
import * as e from "./399565.6af208675d.js";
a.C(e);
import * as o from "./257798.13b56b362a.js";
a.C(o);
import * as t from "./447351.16e0481926.js";
a.C(t);
import * as m from "./617936.4707466a2e.js";
a.C(m);
import * as c from "./807489.36023b676b.js";
a.C(c);
import * as f from "./337882.da1b5beae8.js";
a.C(f);
import * as p from "./955979.48bc7ee80c.js";
a.C(p);
import * as i from "./646436.67f97058a6.js";
a.C(i);
import * as _ from "./7078.c420b9a2f6.js";
a.C(_);
import * as d from "./200429.11007a9422.js";
a.C(d);
import * as n from "./698524.8f181d24a1.js";
a.C(n);
import * as j from "./956483.6cfec0717e.js";
a.C(j);
import * as l from "./87162.d101a9fdd5.js";
a.C(l);
import * as C from "./396705.00162c6ea9.js";
a.C(C);
import * as b from "./155568.36875ef56f.js";
a.C(b);
import * as h from "./731863.bbf914bfbc.js";
a.C(h);
import * as u from "./767086.5122101cd2.js";
a.C(u);
import * as x from "./76629.ac20799396.js";
a.C(x);
import * as k from "./514085.004fb5c464.js";
a.C(k);
import * as w from "./226913.27c93050ff.js";
a.C(w);
import * as v from "./658166.3a010220dd.js";
a.C(v);
var y = a(a.s = "hXLT"),
    L = y.a,
    g = y.b,
    X = y.c,
    D = y.d,
    P = y.e;
export {
    L as HydrateFallback, g as clientLoader, X as
    default, D as handle, P as shouldRevalidate
};