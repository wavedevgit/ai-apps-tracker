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
                let e, t, a, p, f, b, u, h = (0, i.c)(12),
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
                }), h[5] = f) : f = h[5], h[6] !== g ? (b = (0, r.jsx)("main", {
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
} from "./633146.468d071759.js";
import * as t from "./680612.8dcfaab02b.js";
e.C(t);
import * as a from "./418851.f3d2ce19b4.js";
e.C(a);
import * as s from "./109308.4b30101b7c.js";
e.C(s);
import * as r from "./399565.7c8a3f7e95.js";
e.C(r);
import * as i from "./257798.b061e3b37a.js";
e.C(i);
import * as o from "./447351.9446ee3aae.js";
e.C(o);
import * as n from "./617936.a5a9458f41.js";
e.C(n);
import * as m from "./807489.503e8e46b2.js";
e.C(m);
import * as c from "./337882.42cb1bc757.js";
e.C(c);
import * as l from "./955979.7655b0fa98.js";
e.C(l);
import * as d from "./646436.ad0e600e92.js";
e.C(d);
import * as p from "./7078.20ffc77da3.js";
e.C(p);
import * as f from "./200429.b7f8e76f67.js";
e.C(f);
import * as b from "./698524.ab39482137.js";
e.C(b);
import * as u from "./956483.4dc58508d8.js";
e.C(u);
import * as h from "./87162.6154a54863.js";
e.C(h);
import * as j from "./396705.cf1cfb54a0.js";
e.C(j);
import * as g from "./155568.831b2b3d34.js";
e.C(g);
import * as C from "./731863.6fc88890bf.js";
e.C(C);
import * as _ from "./767086.c88be6c073.js";
e.C(_);
import * as w from "./76629.30a094a9b3.js";
e.C(w);
import * as x from "./514085.037ce67b03.js";
e.C(x);
import * as y from "./226913.a7e38eae43.js";
e.C(y);
import * as v from "./326277.ee0ace377e.js";
e.C(v);
var S = e(e.s = "d33d").a;
export {
    S as
    default
};