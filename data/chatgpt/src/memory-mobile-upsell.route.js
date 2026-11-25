export const __rspack_esm_ids = [326277];
export const __webpack_modules__ = {
    TVY8: (function(a, b, c) {
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
} from "./633146.44c41f9881.js";
import * as b from "./680612.f818e16290.js";
a.C(b);
import * as c from "./418851.d461b09398.js";
a.C(c);
import * as d from "./109308.6f7ef1dfb7.js";
a.C(d);
import * as e from "./399565.04d51b97fa.js";
a.C(e);
import * as f from "./257798.9ecf4d3ec0.js";
a.C(f);
import * as g from "./447351.7cc0e9b0b6.js";
a.C(g);
import * as h from "./617936.83eea6e593.js";
a.C(h);
import * as i from "./807489.7aa67edeba.js";
a.C(i);
import * as j from "./337882.219e3ada84.js";
a.C(j);
import * as k from "./955979.a3e9dd394b.js";
a.C(k);
import * as l from "./646436.82a6afd168.js";
a.C(l);
import * as m from "./7078.3a7ae651f9.js";
a.C(m);
import * as n from "./200429.41df82824c.js";
a.C(n);
import * as o from "./698524.d1d668b037.js";
a.C(o);
import * as p from "./956483.3a192f7957.js";
a.C(p);
import * as q from "./87162.b7af17491f.js";
a.C(q);
import * as r from "./396705.1cd3df2a36.js";
a.C(r);
import * as s from "./155568.ea2903d980.js";
a.C(s);
import * as t from "./731863.77eaa985c3.js";
a.C(t);
import * as u from "./767086.b48caf5564.js";
a.C(u);
import * as v from "./76629.c55b0947a1.js";
a.C(v);
import * as w from "./226913.336cc1ac6c.js";
a.C(w);
import * as x from "./326277.dd4b5c3489.js";
a.C(x);
var y = a(a.s = "TVY8").a;
export {
    y as
    default
};