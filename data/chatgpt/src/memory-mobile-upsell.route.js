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
            p = (0, s.kb)(function() {
                let e, t, a, p, f, u, b, h = (0, i.c)(12),
                    {
                        locale: j
                    } = (0, o.y)(d.a).value,
                    {
                        fallbackUrl: g,
                        messages: C
                    } = (0, s.Y)(),
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
} from "./633146.48b57020d2.js";
import * as t from "./680612.8dcfaab02b.js";
e.C(t);
import * as a from "./418851.5b0ade19b1.js";
e.C(a);
import * as s from "./109308.8b09661749.js";
e.C(s);
import * as r from "./399565.edefe43a76.js";
e.C(r);
import * as i from "./257798.428a6bce48.js";
e.C(i);
import * as o from "./447351.34d04099ca.js";
e.C(o);
import * as n from "./617936.dd75fa2a89.js";
e.C(n);
import * as m from "./807489.1d24fa9988.js";
e.C(m);
import * as c from "./337882.145f5ca770.js";
e.C(c);
import * as l from "./955979.fad3aa290b.js";
e.C(l);
import * as d from "./646436.b50a318f52.js";
e.C(d);
import * as p from "./7078.9bac2fcc06.js";
e.C(p);
import * as f from "./200429.f07d17d37b.js";
e.C(f);
import * as u from "./698524.130da41cbb.js";
e.C(u);
import * as b from "./956483.20ccea0970.js";
e.C(b);
import * as h from "./87162.4896e26514.js";
e.C(h);
import * as j from "./396705.e5ddd72a06.js";
e.C(j);
import * as g from "./155568.49e7ad46aa.js";
e.C(g);
import * as C from "./731863.3cdbbfa8f8.js";
e.C(C);
import * as _ from "./767086.3711424c4d.js";
e.C(_);
import * as w from "./76629.15f5868e7b.js";
e.C(w);
import * as x from "./226913.cf105b979e.js";
e.C(x);
import * as y from "./326277.53c18a0749.js";
e.C(y);
var v = e(e.s = "d33d").a;
export {
    v as
    default
};