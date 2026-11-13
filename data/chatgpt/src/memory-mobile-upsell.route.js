export const __rspack_esm_ids = [326277];
export const __webpack_modules__ = {
    EyFy: (function(e, t, a) {
        a.d(t, {
            a: () => p
        });
        var s = a("jqIZ"),
            r = a("ABep"),
            i = a("QosV"),
            o = a("BolX"),
            n = a("zd8w"),
            m = a("oyxz"),
            c = a("G8V1"),
            l = a("RNul");
        a("rHrT");
        var f = a("eAav"),
            p = (0, s.hb)(function() {
                let e, t, a, p, d, b, u, h = (0, i.c)(12),
                    {
                        locale: j
                    } = (0, o.y)(f.a).value,
                    {
                        fallbackUrl: g,
                        messages: C
                    } = (0, s.X)(),
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
                    let a = window.setTimeout(() => {
                        w.current || "visible" !== document.visibilityState || window.location.replace(g)
                    }, 1500);
                    if (!_.current) {
                        _.current = !0;
                        try {
                            window.location.assign("chatgpt://plus-upsell")
                        } catch {
                            w.current = !0, window.clearTimeout(a), window.location.replace(g)
                        }
                    }
                    return () => {
                        window.clearTimeout(a), document.removeEventListener("visibilitychange", e), window.removeEventListener("pagehide", t)
                    }
                }, t = [g], h[0] = g, h[1] = e, h[2] = t) : (e = h[1], t = h[2]), (0, n.useEffect)(e, t), h[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, r.jsx)(l.a, {
                    className: "icon-lg text-secondary"
                }), h[3] = a) : a = h[3], h[4] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, r.jsx)("p", {
                    className: "text-base",
                    children: (0, r.jsx)(m.a, {
                        id: "chatgpt.memory_mobile_upsell.deeplink_bridge.status",
                        defaultMessage: "Opening ChatGPT…"
                    })
                }), h[4] = p) : p = h[4], h[5] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, r.jsx)(m.a, {
                    id: "chatgpt.memory_mobile_upsell.deeplink_bridge.web_fallback_link",
                    defaultMessage: "Continue on web"
                }), h[5] = d) : d = h[5], h[6] !== g ? (b = (0, r.jsx)("main", {
                    className: "flex min-h-screen items-center justify-center bg-surface px-6 text-default select-none",
                    children: (0, r.jsxs)("div", {
                        className: "flex max-w-sm flex-col items-center gap-3 text-center",
                        role: "status",
                        "aria-live": "polite",
                        "aria-busy": !0,
                        children: [a, p, (0, r.jsx)("a", {
                            className: "text-sm text-secondary underline underline-offset-2",
                            href: g,
                            children: d
                        })]
                    })
                }), h[6] = g, h[7] = b) : b = h[7], h[8] !== j || h[9] !== C || h[10] !== b ? (u = (0, r.jsx)(c.a, {
                    locale: j,
                    defaultLocale: "en-US",
                    messages: C,
                    children: b
                }), h[8] = j, h[9] = C, h[10] = b, h[11] = u) : u = h[11], u
            })
    })
};
import {
    __webpack_require__ as e
} from "./633146.d376de6326.js";
import * as t from "./680612.3c8d72f22d.js";
e.C(t);
import * as a from "./418851.b915ffe930.js";
e.C(a);
import * as s from "./109308.e66696cd0d.js";
e.C(s);
import * as r from "./399565.6af208675d.js";
e.C(r);
import * as i from "./257798.b51742efd5.js";
e.C(i);
import * as o from "./447351.dafe7b7b5e.js";
e.C(o);
import * as n from "./617936.e33610e0b9.js";
e.C(n);
import * as m from "./807489.01dbb0865d.js";
e.C(m);
import * as c from "./337882.7119120a0c.js";
e.C(c);
import * as l from "./955979.cdc247a476.js";
e.C(l);
import * as f from "./646436.2bf4f5cfd6.js";
e.C(f);
import * as p from "./7078.89396f9757.js";
e.C(p);
import * as d from "./200429.ddc1bbef02.js";
e.C(d);
import * as b from "./698524.21708788d0.js";
e.C(b);
import * as u from "./956483.c322d2995f.js";
e.C(u);
import * as h from "./87162.b460b44fcb.js";
e.C(h);
import * as j from "./396705.f9a5e3185a.js";
e.C(j);
import * as g from "./155568.be3429758e.js";
e.C(g);
import * as C from "./731863.f2322456e0.js";
e.C(C);
import * as _ from "./767086.ab7a1efc0d.js";
e.C(_);
import * as w from "./76629.3c6cad96ca.js";
e.C(w);
import * as y from "./514085.2befcfe573.js";
e.C(y);
import * as x from "./226913.27c93050ff.js";
e.C(x);
import * as v from "./326277.31fa819a78.js";
e.C(v);
var S = e(e.s = "EyFy").a;
export {
    S as
    default
};