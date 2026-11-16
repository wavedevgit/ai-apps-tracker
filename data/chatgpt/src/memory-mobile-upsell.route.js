export const __rspack_esm_ids = [326277];
export const __webpack_modules__ = {
    d33d: (function(e, t, s) {
        s.d(t, {
            a: () => d
        });
        var a = s("rEML"),
            r = s("ABep"),
            i = s("QosV"),
            o = s("BolX"),
            n = s("zd8w"),
            m = s("oyxz"),
            c = s("G8V1"),
            l = s("RNul");
        s("rHrT");
        var f = s("eAav"),
            d = (0, a.hb)(function() {
                let e, t, s, d, p, u, b, h = (0, i.c)(12),
                    {
                        locale: j
                    } = (0, o.y)(f.a).value,
                    {
                        fallbackUrl: g,
                        messages: C
                    } = (0, a.X)(),
                    _ = (0, n.useRef)(!1),
                    w = (0, n.useRef)(!1);
                return h[0] !== g ? (e = () => {
                    w.current = w.current || "hidden" === document.visibilityState;
                    let e = () => {
                            "hidden" === document.visibilityState && (w.current = !0)
                        },
                        t = () => {
                            w.current = !0
                        };
                    document.addEventListener("visibilitychange", e), window.addEventListener("pagehide", t);
                    let s = window.setTimeout(() => {
                        w.current || "visible" !== document.visibilityState || window.location.replace(g)
                    }, 1500);
                    if (!_.current) {
                        _.current = !0;
                        try {
                            window.location.assign("chatgpt://plus-upsell")
                        } catch {
                            w.current = !0, window.clearTimeout(s), window.location.replace(g)
                        }
                    }
                    return () => {
                        window.clearTimeout(s), document.removeEventListener("visibilitychange", e), window.removeEventListener("pagehide", t)
                    }
                }, t = [g], h[0] = g, h[1] = e, h[2] = t) : (e = h[1], t = h[2]), (0, n.useEffect)(e, t), h[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, r.jsx)(l.a, {
                    className: "icon-lg text-secondary"
                }), h[3] = s) : s = h[3], h[4] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, r.jsx)("p", {
                    className: "text-base",
                    children: (0, r.jsx)(m.a, {
                        id: "chatgpt.memory_mobile_upsell.deeplink_bridge.status",
                        defaultMessage: "Opening ChatGPT…"
                    })
                }), h[4] = d) : d = h[4], h[5] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, r.jsx)(m.a, {
                    id: "chatgpt.memory_mobile_upsell.deeplink_bridge.web_fallback_link",
                    defaultMessage: "Continue on web"
                }), h[5] = p) : p = h[5], h[6] !== g ? (u = (0, r.jsx)("main", {
                    className: "flex min-h-screen items-center justify-center bg-surface px-6 text-default select-none",
                    children: (0, r.jsxs)("div", {
                        className: "flex max-w-sm flex-col items-center gap-3 text-center",
                        role: "status",
                        "aria-live": "polite",
                        "aria-busy": !0,
                        children: [s, d, (0, r.jsx)("a", {
                            className: "text-sm text-secondary underline underline-offset-2",
                            href: g,
                            children: p
                        })]
                    })
                }), h[6] = g, h[7] = u) : u = h[7], h[8] !== j || h[9] !== C || h[10] !== u ? (b = (0, r.jsx)(c.a, {
                    locale: j,
                    defaultLocale: "en-US",
                    messages: C,
                    children: u
                }), h[8] = j, h[9] = C, h[10] = u, h[11] = b) : b = h[11], b
            })
    })
};
import {
    __webpack_require__ as e
} from "./633146.7f86ed336a.js";
import * as t from "./680612.3c8d72f22d.js";
e.C(t);
import * as s from "./418851.ac24d305cd.js";
e.C(s);
import * as a from "./109308.c9b7701e19.js";
e.C(a);
import * as r from "./399565.e3bd47902e.js";
e.C(r);
import * as i from "./257798.7e03f1e3e2.js";
e.C(i);
import * as o from "./447351.ec9533f9fc.js";
e.C(o);
import * as n from "./617936.b641c39dad.js";
e.C(n);
import * as m from "./807489.641526722d.js";
e.C(m);
import * as c from "./337882.c82c7eb7d0.js";
e.C(c);
import * as l from "./955979.26623eb1e8.js";
e.C(l);
import * as f from "./646436.6a9ea7ce2b.js";
e.C(f);
import * as d from "./7078.7ac8d1f362.js";
e.C(d);
import * as p from "./200429.b3f88f116c.js";
e.C(p);
import * as u from "./698524.8e9b330e02.js";
e.C(u);
import * as b from "./956483.dad0089cdf.js";
e.C(b);
import * as h from "./87162.5235ed43cc.js";
e.C(h);
import * as j from "./396705.f3e9be32ee.js";
e.C(j);
import * as g from "./155568.f88fad6c40.js";
e.C(g);
import * as C from "./731863.70436835b9.js";
e.C(C);
import * as _ from "./767086.dce6c25374.js";
e.C(_);
import * as w from "./76629.b4d403ea2d.js";
e.C(w);
import * as x from "./514085.be2a492f7d.js";
e.C(x);
import * as y from "./226913.dd4de34d8f.js";
e.C(y);
import * as v from "./326277.cf097dcb86.js";
e.C(v);
var S = e(e.s = "d33d").a;
export {
    S as
    default
};