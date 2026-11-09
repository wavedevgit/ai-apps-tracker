export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    ML3h: (function(a, e, r) {
        r.d(e, {
            a: () => l,
            b: () => n,
            c: () => C,
            d: () => j,
            e: () => b
        });
        var s = r("jqIZ"),
            o = r("ABep"),
            t = r("QosV"),
            m = r("XyTt"),
            f = r("zd8w"),
            p = r("nyOD"),
            i = r("vV6o"),
            c = r("v4LA"),
            _ = r("jZDY");
        let d = (0, c.a)(m.d),
            j = i.a;
        async function n(a) {
            let {
                serverLoader: e
            } = a, [r] = await Promise.all([e(), d.prefetch()]);
            return r
        }
        let b = a => {
                let {
                    currentUrl: e,
                    nextUrl: r
                } = a;
                return e.pathname !== r.pathname || ["stripe_session_id", "processor_entity", "wallet_covered"].some(a => e.searchParams.get(a) !== r.searchParams.get(a))
            },
            l = (0, s.jb)(function() {
                let a, e = (0, t.c)(1);
                return e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(p.a, {
                    stage: "preparing_workspace"
                }), e[0] = a) : a = e[0], a
            });
        var C = (0, s.hb)(function() {
            let a, e, r = (0, t.c)(4),
                m = (0, s.X)(),
                p = (0, _.a)();
            return r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(l, {}), r[0] = a) : a = r[0], r[1] !== p || r[2] !== m ? (e = (0, o.jsx)(f.Suspense, {
                fallback: a,
                children: p ? (0, o.jsx)(d, {
                    returnData: m
                }) : (0, o.jsx)(l, {})
            }), r[1] = p, r[2] = m, r[3] = e) : e = r[3], e
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
} from "./633146.77f467ae88.js";
import * as e from "./418851.24af49562e.js";
a.C(e);
import * as r from "./109308.fbb414d4aa.js";
a.C(r);
import * as s from "./399565.a7f9c29dec.js";
a.C(s);
import * as o from "./257798.0b3d6025cd.js";
a.C(o);
import * as t from "./153380.6675e448cd.js";
a.C(t);
import * as m from "./617936.ab7454adbe.js";
a.C(m);
import * as f from "./807489.74b193586a.js";
a.C(f);
import * as p from "./337882.eb4e205b01.js";
a.C(p);
import * as i from "./955979.c147b344d3.js";
a.C(i);
import * as c from "./646436.92303256ff.js";
a.C(c);
import * as _ from "./7078.1a10efd8a2.js";
a.C(_);
import * as d from "./200429.6705d27d2a.js";
a.C(d);
import * as j from "./698524.7253a53056.js";
a.C(j);
import * as n from "./956483.cb805cdd0f.js";
a.C(n);
import * as b from "./87162.636a6b2a55.js";
a.C(b);
import * as l from "./396705.c39944bbf2.js";
a.C(l);
import * as C from "./155568.d3b291934c.js";
a.C(C);
import * as h from "./731863.8b87e9728a.js";
a.C(h);
import * as u from "./767086.6da4be4bcc.js";
a.C(u);
import * as x from "./76629.c67c63e9cf.js";
a.C(x);
import * as k from "./514085.4d87b5885b.js";
a.C(k);
import * as w from "./204542.cb541ce34a.js";
a.C(w);
import * as v from "./982651.7bfd071e83.js";
a.C(v);
import * as y from "./673108.34c2463692.js";
a.C(y);
import * as L from "./487481.90065b7f5d.js";
a.C(L);
import * as g from "./229522.aca0c6dfc8.js";
a.C(g);
import * as D from "./390575.8f68283a1b.js";
a.C(D);
import * as P from "./353032.f68e05ddda.js";
a.C(P);
import * as S from "./637885.a0eaa62308.js";
a.C(S);
import * as V from "./226913.b323f04fd6.js";
a.C(V);
import * as A from "./658166.06e4def40c.js";
a.C(A);
var B = a(a.s = "ML3h"),
    F = B.a,
    H = B.b,
    M = B.c,
    Q = B.d,
    R = B.e;
export {
    F as HydrateFallback, H as clientLoader, M as
    default, Q as handle, R as shouldRevalidate
};