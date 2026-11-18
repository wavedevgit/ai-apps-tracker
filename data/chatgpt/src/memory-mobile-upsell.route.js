export const __rspack_esm_ids = [326277];
export const __webpack_modules__ = {
    d33d: (function(e, t, a) {
        a.d(t, {
            a: () => p
        });
        var s = a("rEML"),
            r = a("ABep"),
            i = a("QosV"),
            o = a("Q840"),
            n = a("zd8w"),
            m = a("oyxz"),
            c = a("G8V1"),
            l = a("RNul");
        a("rHrT");
        var d = a("eAav"),
            p = (0, s.hb)(function() {
                let e, t, a, p, f, u, b, h = (0, i.c)(12),
                    {
                        locale: j
                    } = (0, o.y)(d.a).value,
                    {
                        fallbackUrl: g,
                        messages: C
                    } = (0, s.W)(),
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
                }), h[4] = p) : p = h[4], h[5] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, r.jsx)(m.a, {
                    id: "chatgpt.memory_mobile_upsell.deeplink_bridge.web_fallback_link",
                    defaultMessage: "Continue on web"
                }), h[5] = f) : f = h[5], h[6] !== g ? (u = (0, r.jsx)("main", {
                    className: "flex min-h-screen items-center justify-center bg-surface px-6 text-default select-none",
                    children: (0, r.jsxs)("div", {
                        className: "flex max-w-sm flex-col items-center gap-3 text-center",
                        role: "status",
                        "aria-live": "polite",
                        "aria-busy": !0,
                        children: [a, p, (0, r.jsx)("a", {
                            className: "text-sm text-secondary underline underline-offset-2",
                            href: g,
                            children: f
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
} from "./633146.332c5da428.js";
import * as t from "./680612.3c8d72f22d.js";
e.C(t);
import * as a from "./418851.3878fbfa64.js";
e.C(a);
import * as s from "./109308.4b30101b7c.js";
e.C(s);
import * as r from "./399565.de450ac543.js";
e.C(r);
import * as i from "./257798.b061e3b37a.js";
e.C(i);
import * as o from "./447351.690fba1ae5.js";
e.C(o);
import * as n from "./617936.c6f9e1ebfb.js";
e.C(n);
import * as m from "./807489.2ba5c6d996.js";
e.C(m);
import * as c from "./337882.799b00b0f3.js";
e.C(c);
import * as l from "./955979.eaf8541a67.js";
e.C(l);
import * as d from "./646436.611d2d0d1b.js";
e.C(d);
import * as p from "./7078.691a92af09.js";
e.C(p);
import * as f from "./200429.336411f62e.js";
e.C(f);
import * as u from "./698524.e12b58b33f.js";
e.C(u);
import * as b from "./956483.2514992fd3.js";
e.C(b);
import * as h from "./87162.1f25d59c9c.js";
e.C(h);
import * as j from "./396705.3e09ec2928.js";
e.C(j);
import * as g from "./155568.b02a981797.js";
e.C(g);
import * as C from "./731863.9e2b15b813.js";
e.C(C);
import * as _ from "./767086.6cceb40294.js";
e.C(_);
import * as w from "./76629.0f65023578.js";
e.C(w);
import * as x from "./226913.c039047be5.js";
e.C(x);
import * as y from "./326277.364430cabf.js";
e.C(y);
var v = e(e.s = "d33d").a;
export {
    v as
    default
};