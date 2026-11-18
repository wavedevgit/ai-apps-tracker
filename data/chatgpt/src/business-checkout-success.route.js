export const __rspack_esm_ids = [658166];
export const __webpack_modules__ = {
    hXLT: (function(a, r, e) {
        e.d(r, {
            a: () => C,
            b: () => l,
            c: () => h,
            d: () => j,
            e: () => b
        });
        var s = e("rEML"),
            o = e("ABep"),
            t = e("QosV"),
            m = e("v8gE"),
            c = e("XyTt"),
            p = e("zd8w"),
            f = e("nyOD"),
            i = e("vV6o"),
            _ = e("v4LA"),
            n = e("jZDY");
        let d = (0, _.a)(c.g),
            j = i.a;
        async function l(a) {
            let {
                serverLoader: r
            } = a, [e] = await Promise.all([r(), d.prefetch()]);
            return e
        }
        let b = a => {
                let {
                    currentUrl: r,
                    nextUrl: e
                } = a;
                return r.pathname !== e.pathname || ["stripe_session_id", "processor_entity", "wallet_covered"].some(a => r.searchParams.get(a) !== e.searchParams.get(a))
            },
            C = (0, s.jb)(function() {
                let a, r = (0, t.c)(1);
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(m.b, {
                        name: "route content"
                    }), (0, o.jsx)(f.a, {
                        stage: "preparing_workspace"
                    })]
                }), r[0] = a) : a = r[0], a
            });
        var h = (0, s.hb)(function() {
            let a, r, e = (0, t.c)(4),
                m = (0, s.W)(),
                c = (0, n.a)();
            return e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(C, {}), e[0] = a) : a = e[0], e[1] !== c || e[2] !== m ? (r = (0, o.jsx)(p.Suspense, {
                fallback: a,
                children: c ? (0, o.jsx)(d, {
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
} from "./633146.332c5da428.js";
import * as r from "./418851.3878fbfa64.js";
a.C(r);
import * as e from "./109308.4b30101b7c.js";
a.C(e);
import * as s from "./399565.de450ac543.js";
a.C(s);
import * as o from "./257798.b061e3b37a.js";
a.C(o);
import * as t from "./447351.690fba1ae5.js";
a.C(t);
import * as m from "./617936.c6f9e1ebfb.js";
a.C(m);
import * as c from "./807489.2ba5c6d996.js";
a.C(c);
import * as p from "./337882.799b00b0f3.js";
a.C(p);
import * as f from "./955979.eaf8541a67.js";
a.C(f);
import * as i from "./646436.611d2d0d1b.js";
a.C(i);
import * as _ from "./7078.691a92af09.js";
a.C(_);
import * as n from "./200429.336411f62e.js";
a.C(n);
import * as d from "./698524.e12b58b33f.js";
a.C(d);
import * as j from "./956483.2514992fd3.js";
a.C(j);
import * as l from "./87162.1f25d59c9c.js";
a.C(l);
import * as b from "./396705.3e09ec2928.js";
a.C(b);
import * as C from "./155568.b02a981797.js";
a.C(C);
import * as h from "./731863.9e2b15b813.js";
a.C(h);
import * as u from "./767086.6cceb40294.js";
a.C(u);
import * as x from "./76629.0f65023578.js";
a.C(x);
import * as k from "./226913.c039047be5.js";
a.C(k);
import * as w from "./658166.e273014693.js";
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