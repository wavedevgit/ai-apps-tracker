export const __rspack_esm_ids = [326277];
export const __webpack_modules__ = {
    EyFy: (function(e, t, s) {
        s.d(t, {
            a: () => p
        });
        var a = s("jqIZ"),
            r = s("ABep"),
            i = s("QosV"),
            o = s("BolX"),
            n = s("zd8w"),
            m = s("oyxz"),
            c = s("G8V1"),
            l = s("RNul");
        s("rHrT");
        var d = s("eAav"),
            p = (0, a.hb)(function() {
                let e, t, s, p, f, u, b, h = (0, i.c)(12),
                    {
                        locale: j
                    } = (0, o.y)(d.a).value,
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
                }), h[3] = s) : s = h[3], h[4] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, r.jsx)("p", {
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
                        children: [s, p, (0, r.jsx)("a", {
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
} from "./633146.4981d79ae4.js";
import * as t from "./680612.3c8d72f22d.js";
e.C(t);
import * as s from "./418851.7f18e986d5.js";
e.C(s);
import * as a from "./109308.e66696cd0d.js";
e.C(a);
import * as r from "./399565.6af208675d.js";
e.C(r);
import * as i from "./257798.b51742efd5.js";
e.C(i);
import * as o from "./447351.7f028af5cc.js";
e.C(o);
import * as n from "./617936.e33610e0b9.js";
e.C(n);
import * as m from "./807489.b2a4c99bd1.js";
e.C(m);
import * as c from "./337882.240014b3db.js";
e.C(c);
import * as l from "./955979.cac5f7aa7e.js";
e.C(l);
import * as d from "./646436.b849db233f.js";
e.C(d);
import * as p from "./7078.73ded76a8d.js";
e.C(p);
import * as f from "./200429.f68bf8c5d0.js";
e.C(f);
import * as u from "./698524.5c1f88ec3d.js";
e.C(u);
import * as b from "./956483.da8bcbe744.js";
e.C(b);
import * as h from "./87162.47f0360b7c.js";
e.C(h);
import * as j from "./396705.bfc19c0c6a.js";
e.C(j);
import * as g from "./155568.fb329e6a3b.js";
e.C(g);
import * as C from "./731863.850a24e1c0.js";
e.C(C);
import * as _ from "./767086.b68e569328.js";
e.C(_);
import * as w from "./76629.ca4c17c8af.js";
e.C(w);
import * as y from "./514085.6514ba1a89.js";
e.C(y);
import * as x from "./226913.27c93050ff.js";
e.C(x);
import * as v from "./326277.6aae70a812.js";
e.C(v);
var S = e(e.s = "EyFy").a;
export {
    S as
    default
};