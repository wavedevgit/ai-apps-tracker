export const __rspack_esm_ids = [345186];
export const __webpack_modules__ = {
    Ptjs: (function(e, s, a) {
        a.d(s, {
            a: () => d
        });
        var r = a("jqIZ"),
            t = a("ABep"),
            o = a("QosV"),
            m = a("BolX"),
            i = a("zd8w"),
            c = a("G8V1"),
            f = a("oyxz"),
            n = a("RNul");
        a("rHrT");
        var l = a("eAav"),
            d = (0, r.hb)(function() {
                let e, s, a, f, n = (0, o.c)(8),
                    {
                        locale: d
                    } = (0, m.y)(l.a).value,
                    {
                        messages: j
                    } = (0, r.X)(),
                    b = (0, r._)(),
                    u = (0, r.W)("/settings/security");
                return n[0] !== u || n[1] !== b ? (e = () => {
                    let e = window.setTimeout(() => {
                        b(`/auth/login_with?${new URLSearchParams({screen_hint:"login",callback_path:u})}`, {
                            replace: !0
                        })
                    }, 3e3);
                    return () => window.clearTimeout(e)
                }, s = [u, b], n[0] = u, n[1] = b, n[2] = e, n[3] = s) : (e = n[2], s = n[3]), (0, i.useEffect)(e, s), n[4] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)(p, {}), n[4] = a) : a = n[4], n[5] !== d || n[6] !== j ? (f = (0, t.jsx)(c.a, {
                    locale: d,
                    defaultLocale: "en-US",
                    messages: j,
                    children: a
                }), n[5] = d, n[6] = j, n[7] = f) : f = n[7], f
            });

        function p() {
            let e, s, a = (0, o.c)(2);
            return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(n.a, {
                className: "icon-lg text-secondary"
            }), a[0] = e) : e = a[0], a[1] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)("main", {
                className: "flex min-h-screen items-center justify-center bg-surface px-6 text-default select-none",
                children: (0, t.jsxs)("div", {
                    className: "flex max-w-sm flex-col items-center gap-3 text-center",
                    role: "status",
                    "aria-live": "polite",
                    "aria-busy": !0,
                    children: [e, (0, t.jsx)("p", {
                        className: "text-sm",
                        children: (0, t.jsx)(f.a, {
                            id: "security-settings.redirect-message",
                            defaultMessage: "Security settings live in ChatGPT. You’re being redirected in a new tab",
                            description: "Interstitial message shown before redirecting to ChatGPT security settings in a new tab."
                        })
                    })]
                })
            }), a[1] = s) : s = a[1], s
        }
    })
};
import {
    __webpack_require__ as e
} from "./633146.acefa13d1a.js";
import * as s from "./680612.3c8d72f22d.js";
e.C(s);
import * as a from "./418851.4b043c43bc.js";
e.C(a);
import * as r from "./109308.e66696cd0d.js";
e.C(r);
import * as t from "./399565.2fc4679b26.js";
e.C(t);
import * as o from "./257798.b51742efd5.js";
e.C(o);
import * as m from "./447351.496da706c3.js";
e.C(m);
import * as i from "./617936.dcbf382e63.js";
e.C(i);
import * as c from "./807489.7f5d47cb0e.js";
e.C(c);
import * as f from "./337882.f22d43d615.js";
e.C(f);
import * as n from "./955979.d659318431.js";
e.C(n);
import * as l from "./646436.30c2553f0b.js";
e.C(l);
import * as d from "./7078.5cd07a5c9b.js";
e.C(d);
import * as p from "./200429.82d37d45f2.js";
e.C(p);
import * as j from "./698524.1d78dbab32.js";
e.C(j);
import * as b from "./956483.4fffedad3f.js";
e.C(b);
import * as u from "./87162.ceb3023033.js";
e.C(u);
import * as C from "./396705.74bbf371c4.js";
e.C(C);
import * as _ from "./155568.8fe9b1a879.js";
e.C(_);
import * as x from "./731863.e2c3850b56.js";
e.C(x);
import * as h from "./767086.e730a8ccb4.js";
e.C(h);
import * as g from "./76629.0f4df00a80.js";
e.C(g);
import * as w from "./226913.27c93050ff.js";
e.C(w);
import * as y from "./345186.facb2fedab.js";
e.C(y);
var v = e(e.s = "Ptjs").a;
export {
    v as
    default
};