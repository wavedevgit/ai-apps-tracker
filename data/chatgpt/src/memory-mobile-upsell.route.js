export const __rspack_esm_ids = [326277];
export const __webpack_modules__ = {
    d33d: (function(e, t, a) {
        a.d(t, {
            a: () => f
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
            f = (0, s.kb)(function() {
                let e, t, a, f, p, b, u, h = (0, i.c)(12),
                    {
                        locale: j
                    } = (0, o.y)(d.a).value,
                    {
                        fallbackUrl: g,
                        messages: _
                    } = (0, s.Y)(),
                    w = (0, n.useRef)(!1),
                    C = (0, n.useRef)(!1);
                return h[0] !== g ? (e = () => {
                    C.current = C.current || "hidden" === document.visibilityState;
                    let e = () => {
                            "hidden" === document.visibilityState && (C.current = !0)
                        },
                        t = () => {
                            C.current = !0
                        };
                    document.addEventListener("visibilitychange", e), window.addEventListener("pagehide", t);
                    let a = window.setTimeout(() => {
                        C.current || "visible" !== document.visibilityState || window.location.replace(g)
                    }, 1500);
                    if (!w.current) {
                        w.current = !0;
                        try {
                            window.location.assign("chatgpt://plus-upsell")
                        } catch {
                            C.current = !0, window.clearTimeout(a), window.location.replace(g)
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
                        defaultMessage: "Opening ChatGPT…"
                    })
                }), h[4] = f) : f = h[4], h[5] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, r.jsx)(m.a, {
                    id: "chatgpt.memory_mobile_upsell.deeplink_bridge.web_fallback_link",
                    defaultMessage: "Continue on web"
                }), h[5] = p) : p = h[5], h[6] !== g ? (b = (0, r.jsx)("main", {
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
                }), h[6] = g, h[7] = b) : b = h[7], h[8] !== j || h[9] !== _ || h[10] !== b ? (u = (0, r.jsx)(c.a, {
                    locale: j,
                    defaultLocale: "en-US",
                    messages: _,
                    children: b
                }), h[8] = j, h[9] = _, h[10] = b, h[11] = u) : u = h[11], u
            })
    })
};
import {
    __webpack_require__ as e
} from "./633146.2ddddba2a5.js";
import * as t from "./680612.8dcfaab02b.js";
e.C(t);
import * as a from "./418851.f34514cc3f.js";
e.C(a);
import * as s from "./109308.8b09661749.js";
e.C(s);
import * as r from "./399565.edefe43a76.js";
e.C(r);
import * as i from "./257798.6b4268ddac.js";
e.C(i);
import * as o from "./447351.34d04099ca.js";
e.C(o);
import * as n from "./617936.4a1557f13c.js";
e.C(n);
import * as m from "./807489.6b5279adf3.js";
e.C(m);
import * as c from "./337882.568bafdf14.js";
e.C(c);
import * as l from "./955979.b2a7e19963.js";
e.C(l);
import * as d from "./646436.5963e38f02.js";
e.C(d);
import * as f from "./7078.0a9a41e515.js";
e.C(f);
import * as p from "./200429.a549930e29.js";
e.C(p);
import * as b from "./698524.48945354c5.js";
e.C(b);
import * as u from "./956483.962c0de04b.js";
e.C(u);
import * as h from "./87162.e4a69efaac.js";
e.C(h);
import * as j from "./396705.51be923e43.js";
e.C(j);
import * as g from "./155568.1f7b7a00a5.js";
e.C(g);
import * as _ from "./731863.5a49a2d190.js";
e.C(_);
import * as w from "./767086.61b8f8fca3.js";
e.C(w);
import * as C from "./226913.cf105b979e.js";
e.C(C);
import * as x from "./326277.6cb2c70d35.js";
e.C(x);
var y = e(e.s = "d33d").a;
export {
    y as
    default
};