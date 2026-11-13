export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    hXLT: (function(a, e, r) {
        r.d(e, {
            a: () => b,
            b: () => l,
            c: () => C,
            d: () => j,
            e: () => d
        });
        var s = r("jqIZ"),
            o = r("ABep"),
            t = r("QosV"),
            m = r("XyTt"),
            c = r("zd8w"),
            f = r("nyOD"),
            p = r("vV6o"),
            i = r("v4LA"),
            _ = r("jZDY");
        let n = (0, i.a)(m.f),
            j = p.a;
        async function l(a) {
            let {
                serverLoader: e
            } = a, [r] = await Promise.all([e(), n.prefetch()]);
            return r
        }
        let d = a => {
                let {
                    currentUrl: e,
                    nextUrl: r
                } = a;
                return e.pathname !== r.pathname || ["stripe_session_id", "processor_entity", "wallet_covered"].some(a => e.searchParams.get(a) !== r.searchParams.get(a))
            },
            b = (0, s.jb)(function() {
                let a, e = (0, t.c)(1);
                return e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(f.a, {
                    stage: "preparing_workspace"
                }), e[0] = a) : a = e[0], a
            });
        var C = (0, s.hb)(function() {
            let a, e, r = (0, t.c)(4),
                m = (0, s.X)(),
                f = (0, _.a)();
            return r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(b, {}), r[0] = a) : a = r[0], r[1] !== f || r[2] !== m ? (e = (0, o.jsx)(c.Suspense, {
                fallback: a,
                children: f ? (0, o.jsx)(n, {
                    returnData: m
                }) : (0, o.jsx)(b, {})
            }), r[1] = f, r[2] = m, r[3] = e) : e = r[3], e
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
} from "./633146.de799da76f.js";
import * as e from "./418851.915eb36248.js";
a.C(e);
import * as r from "./109308.e66696cd0d.js";
a.C(r);
import * as s from "./399565.6af208675d.js";
a.C(s);
import * as o from "./257798.b51742efd5.js";
a.C(o);
import * as t from "./447351.984c166fc8.js";
a.C(t);
import * as m from "./617936.e33610e0b9.js";
a.C(m);
import * as c from "./807489.850de05ef3.js";
a.C(c);
import * as f from "./337882.5f151ee5b8.js";
a.C(f);
import * as p from "./955979.9e9440262c.js";
a.C(p);
import * as i from "./646436.03e4f4565c.js";
a.C(i);
import * as _ from "./7078.feaab618bd.js";
a.C(_);
import * as n from "./200429.333f7655c5.js";
a.C(n);
import * as j from "./698524.dcafe4f0ed.js";
a.C(j);
import * as l from "./956483.aba2ca38e0.js";
a.C(l);
import * as d from "./87162.5b3170a587.js";
a.C(d);
import * as b from "./396705.7a4525a973.js";
a.C(b);
import * as C from "./155568.76836d52b2.js";
a.C(C);
import * as h from "./731863.17b468ae96.js";
a.C(h);
import * as u from "./767086.ec4c8241bf.js";
a.C(u);
import * as x from "./76629.3da73a70ff.js";
a.C(x);
import * as k from "./514085.ed26950330.js";
a.C(k);
import * as w from "./226913.27c93050ff.js";
a.C(w);
import * as v from "./658166.847362ab88.js";
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