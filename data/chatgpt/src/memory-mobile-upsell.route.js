export const __rspack_esm_ids = [326277];
export const __webpack_modules__ = {
    d33d: (function(a, b, c) {
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
} from "./633146.192293cdfd.js";
import * as b from "./680612.78d390493a.js";
a.C(b);
import * as c from "./418851.373d5e7c7d.js";
a.C(c);
import * as d from "./109308.6f7ef1dfb7.js";
a.C(d);
import * as e from "./399565.61ce507128.js";
a.C(e);
import * as f from "./257798.18e3fd1164.js";
a.C(f);
import * as g from "./447351.05632d2214.js";
a.C(g);
import * as h from "./617936.82c33d1781.js";
a.C(h);
import * as i from "./807489.80226d951f.js";
a.C(i);
import * as j from "./337882.c48859a67a.js";
a.C(j);
import * as k from "./955979.3817544990.js";
a.C(k);
import * as l from "./646436.8f73ec6517.js";
a.C(l);
import * as m from "./7078.fb59bca78c.js";
a.C(m);
import * as n from "./200429.7f45d5c86a.js";
a.C(n);
import * as o from "./698524.906978efe4.js";
a.C(o);
import * as p from "./956483.b7886e0470.js";
a.C(p);
import * as q from "./87162.563f0c8e80.js";
a.C(q);
import * as r from "./396705.5e3411e749.js";
a.C(r);
import * as s from "./155568.5b6ea1007a.js";
a.C(s);
import * as t from "./731863.5065e21881.js";
a.C(t);
import * as u from "./767086.2154dca9c8.js";
a.C(u);
import * as v from "./76629.6adf997716.js";
a.C(v);
import * as w from "./226913.748570e15f.js";
a.C(w);
import * as x from "./326277.e3912c652b.js";
a.C(x);
var y = a(a.s = "d33d").a;
export {
    y as
    default
};