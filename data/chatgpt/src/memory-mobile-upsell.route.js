export const __rspack_esm_ids = [326277];
export const __webpack_modules__ = {
    vQUO: (function(a, b, c) {
        c.d(b, {
            a: () => m
        });
        var d = c("rEML"),
            e = c("ABep"),
            f = c("QosV"),
            g = c("Q840"),
            h = c("zd8w"),
            i = c("oyxz"),
            j = c("G8V1"),
            k = c("RNul");
        c("rHrT");
        var l = c("eAav"),
            m = (0, d.kb)(function() {
                let a, b, c, m, n, o, p, q = (0, f.c)(12),
                    {
                        locale: r
                    } = (0, g.y)(l.a).value,
                    {
                        fallbackUrl: s,
                        messages: t
                    } = (0, d.Y)(),
                    u = (0, h.useRef)(!1),
                    v = (0, h.useRef)(!1);
                return q[0] !== s ? (a = () => {
                    v.current = v.current || "hidden" === document.visibilityState;
                    let a = () => {
                            "hidden" === document.visibilityState && (v.current = !0)
                        },
                        b = () => {
                            v.current = !0
                        };
                    document.addEventListener("visibilitychange", a), window.addEventListener("pagehide", b);
                    let c = window.setTimeout(() => {
                        v.current || "visible" !== document.visibilityState || window.location.replace(s)
                    }, 1500);
                    if (!u.current) {
                        u.current = !0;
                        try {
                            window.location.assign("chatgpt://plus-upsell")
                        } catch {
                            v.current = !0, window.clearTimeout(c), window.location.replace(s)
                        }
                    }
                    return () => {
                        window.clearTimeout(c), document.removeEventListener("visibilitychange", a), window.removeEventListener("pagehide", b)
                    }
                }, b = [s], q[0] = s, q[1] = a, q[2] = b) : (a = q[1], b = q[2]), (0, h.useEffect)(a, b), q[3] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, e.jsx)(k.a, {
                    className: "icon-lg text-secondary"
                }), q[3] = c) : c = q[3], q[4] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, e.jsx)("p", {
                    className: "text-base",
                    children: (0, e.jsx)(i.a, {
                        id: "chatgpt.memory_mobile_upsell.deeplink_bridge.status",
                        defaultMessage: "Opening ChatGPT\u2026"
                    })
                }), q[4] = m) : m = q[4], q[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, e.jsx)(i.a, {
                    id: "chatgpt.memory_mobile_upsell.deeplink_bridge.web_fallback_link",
                    defaultMessage: "Continue on web"
                }), q[5] = n) : n = q[5], q[6] !== s ? (o = (0, e.jsx)("main", {
                    className: "flex min-h-screen items-center justify-center bg-surface px-6 text-default select-none",
                    children: (0, e.jsxs)("div", {
                        className: "flex max-w-sm flex-col items-center gap-3 text-center",
                        role: "status",
                        "aria-live": "polite",
                        "aria-busy": !0,
                        children: [c, m, (0, e.jsx)("a", {
                            className: "text-sm text-secondary underline underline-offset-2",
                            href: s,
                            children: n
                        })]
                    })
                }), q[6] = s, q[7] = o) : o = q[7], q[8] !== r || q[9] !== t || q[10] !== o ? (p = (0, e.jsx)(j.a, {
                    locale: r,
                    defaultLocale: "en-US",
                    messages: t,
                    children: o
                }), q[8] = r, q[9] = t, q[10] = o, q[11] = p) : p = q[11], p
            })
    })
};
import {
    __webpack_require__ as a
} from "./633146.de3f981156.js";
import * as b from "./680612.940c878201.js";
a.C(b);
import * as c from "./418851.f063eecd68.js";
a.C(c);
import * as d from "./109308.6f7ef1dfb7.js";
a.C(d);
import * as e from "./399565.9b329429cf.js";
a.C(e);
import * as f from "./257798.2c9808dc2d.js";
a.C(f);
import * as g from "./447351.879fb0271f.js";
a.C(g);
import * as h from "./617936.100e7e3b87.js";
a.C(h);
import * as i from "./807489.4f5de65ce6.js";
a.C(i);
import * as j from "./337882.dd53aef429.js";
a.C(j);
import * as k from "./955979.da67fc9346.js";
a.C(k);
import * as l from "./646436.7523816f46.js";
a.C(l);
import * as m from "./7078.06fdb4b63f.js";
a.C(m);
import * as n from "./200429.03e2aa5e85.js";
a.C(n);
import * as o from "./698524.d1df5e85da.js";
a.C(o);
import * as p from "./956483.541b00b099.js";
a.C(p);
import * as q from "./87162.0f58b44e50.js";
a.C(q);
import * as r from "./396705.92d2a93025.js";
a.C(r);
import * as s from "./155568.ec2f311926.js";
a.C(s);
import * as t from "./731863.7089f3ce71.js";
a.C(t);
import * as u from "./767086.736386b2d3.js";
a.C(u);
import * as v from "./76629.060183bbe7.js";
a.C(v);
import * as w from "./226913.a95fa918ab.js";
a.C(w);
import * as x from "./326277.a1610ed67d.js";
a.C(x);
var y = a(a.s = "vQUO").a;
export {
    y as
    default
};