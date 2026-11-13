export const __rspack_esm_ids = [326277];
export const __webpack_modules__ = {
    d33d: (function(e, t, a) {
        a.d(t, {
            a: () => d
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
            d = (0, s.hb)(function() {
                let e, t, a, d, p, u, b, h = (0, i.c)(12),
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
                }), h[3] = a) : a = h[3], h[4] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, r.jsx)("p", {
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
                        children: [a, d, (0, r.jsx)("a", {
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
} from "./633146.de799da76f.js";
import * as t from "./680612.3c8d72f22d.js";
e.C(t);
import * as a from "./418851.915eb36248.js";
e.C(a);
import * as s from "./109308.e66696cd0d.js";
e.C(s);
import * as r from "./399565.6af208675d.js";
e.C(r);
import * as i from "./257798.b51742efd5.js";
e.C(i);
import * as o from "./447351.984c166fc8.js";
e.C(o);
import * as n from "./617936.e33610e0b9.js";
e.C(n);
import * as m from "./807489.850de05ef3.js";
e.C(m);
import * as c from "./337882.5f151ee5b8.js";
e.C(c);
import * as l from "./955979.9e9440262c.js";
e.C(l);
import * as f from "./646436.03e4f4565c.js";
e.C(f);
import * as d from "./7078.feaab618bd.js";
e.C(d);
import * as p from "./200429.333f7655c5.js";
e.C(p);
import * as u from "./698524.dcafe4f0ed.js";
e.C(u);
import * as b from "./956483.aba2ca38e0.js";
e.C(b);
import * as h from "./87162.5b3170a587.js";
e.C(h);
import * as j from "./396705.7a4525a973.js";
e.C(j);
import * as g from "./155568.76836d52b2.js";
e.C(g);
import * as C from "./731863.17b468ae96.js";
e.C(C);
import * as _ from "./767086.ec4c8241bf.js";
e.C(_);
import * as w from "./76629.3da73a70ff.js";
e.C(w);
import * as x from "./514085.ed26950330.js";
e.C(x);
import * as y from "./226913.27c93050ff.js";
e.C(y);
import * as v from "./326277.f0e3706a9a.js";
e.C(v);
var S = e(e.s = "d33d").a;
export {
    S as
    default
};