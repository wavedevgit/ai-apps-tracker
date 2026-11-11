export const __rspack_esm_ids = [326277];
export const __webpack_modules__ = {
    EyFy: (function(e, t, a) {
        a.d(t, {
            a: () => f
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
        var d = a("eAav"),
            f = (0, s.hb)(function() {
                let e, t, a, f, p, u, b, h = (0, i.c)(12),
                    {
                        locale: j
                    } = (0, o.y)(d.a).value,
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
                }), h[3] = a) : a = h[3], h[4] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, r.jsx)("p", {
                    className: "text-base",
                    children: (0, r.jsx)(m.a, {
                        id: "chatgpt.memory_mobile_upsell.deeplink_bridge.status",
                        defaultMessage: "Opening ChatGPT…",
                        description: "Loading/status text on the memory mobile Plus upsell bridge page. This page appears briefly for iOS users after they tap the memory launch email CTA, while ChatGPT tries to open the native app before falling back to web pricing. This indicates an in-progress action, not a command. Short sentence."
                    })
                }), h[4] = f) : f = h[4], h[5] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, r.jsx)(m.a, {
                    id: "chatgpt.memory_mobile_upsell.deeplink_bridge.web_fallback_link",
                    defaultMessage: "Continue on web",
                    description: "Link label on the iOS bridge page that opens the ChatGPT website in the mobile browser, not the app, to the pricing page with Plus highlighted. Very short."
                }), h[5] = p) : p = h[5], h[6] !== g ? (u = (0, r.jsx)("main", {
                    className: "flex min-h-screen items-center justify-center bg-surface px-6 text-default select-none",
                    children: (0, r.jsxs)("div", {
                        className: "flex max-w-sm flex-col items-center gap-3 text-center",
                        role: "status",
                        "aria-live": "polite",
                        "aria-busy": !0,
                        children: [a, f, (0, r.jsx)("a", {
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
} from "./633146.acefa13d1a.js";
import * as t from "./680612.3c8d72f22d.js";
e.C(t);
import * as a from "./418851.4b043c43bc.js";
e.C(a);
import * as s from "./109308.e66696cd0d.js";
e.C(s);
import * as r from "./399565.2fc4679b26.js";
e.C(r);
import * as i from "./257798.b51742efd5.js";
e.C(i);
import * as o from "./447351.496da706c3.js";
e.C(o);
import * as n from "./617936.dcbf382e63.js";
e.C(n);
import * as m from "./807489.7f5d47cb0e.js";
e.C(m);
import * as c from "./337882.f22d43d615.js";
e.C(c);
import * as l from "./955979.d659318431.js";
e.C(l);
import * as d from "./646436.30c2553f0b.js";
e.C(d);
import * as f from "./7078.5cd07a5c9b.js";
e.C(f);
import * as p from "./200429.82d37d45f2.js";
e.C(p);
import * as u from "./698524.1d78dbab32.js";
e.C(u);
import * as b from "./956483.4fffedad3f.js";
e.C(b);
import * as h from "./87162.ceb3023033.js";
e.C(h);
import * as j from "./396705.74bbf371c4.js";
e.C(j);
import * as g from "./155568.8fe9b1a879.js";
e.C(g);
import * as C from "./731863.e2c3850b56.js";
e.C(C);
import * as _ from "./767086.e730a8ccb4.js";
e.C(_);
import * as w from "./76629.0f4df00a80.js";
e.C(w);
import * as y from "./226913.27c93050ff.js";
e.C(y);
import * as x from "./326277.faf5815e27.js";
e.C(x);
var v = e(e.s = "EyFy").a;
export {
    v as
    default
};