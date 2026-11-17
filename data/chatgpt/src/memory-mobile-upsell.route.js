export const __rspack_esm_ids = [326277];
export const __webpack_modules__ = {
    d33d: (function(e, t, s) {
        s.d(t, {
            a: () => f
        });
        var a = s("rEML"),
            r = s("ABep"),
            i = s("QosV"),
            o = s("Q840"),
            n = s("zd8w"),
            m = s("oyxz"),
            c = s("G8V1"),
            l = s("RNul");
        s("rHrT");
        var d = s("eAav"),
            f = (0, a.ib)(function() {
                let e, t, s, f, p, u, b, h = (0, i.c)(12),
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
                }), h[3] = s) : s = h[3], h[4] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, r.jsx)("p", {
                    className: "text-base",
                    children: (0, r.jsx)(m.a, {
                        id: "chatgpt.memory_mobile_upsell.deeplink_bridge.status",
                        defaultMessage: "Opening ChatGPT…"
                    })
                }), h[4] = f) : f = h[4], h[5] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, r.jsx)(m.a, {
                    id: "chatgpt.memory_mobile_upsell.deeplink_bridge.web_fallback_link",
                    defaultMessage: "Continue on web"
                }), h[5] = p) : p = h[5], h[6] !== g ? (u = (0, r.jsx)("main", {
                    className: "flex min-h-screen items-center justify-center bg-surface px-6 text-default select-none",
                    children: (0, r.jsxs)("div", {
                        className: "flex max-w-sm flex-col items-center gap-3 text-center",
                        role: "status",
                        "aria-live": "polite",
                        "aria-busy": !0,
                        children: [s, f, (0, r.jsx)("a", {
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
} from "./633146.4955a63526.js";
import * as t from "./680612.3c8d72f22d.js";
e.C(t);
import * as s from "./418851.d8892f46a6.js";
e.C(s);
import * as a from "./109308.cb66ec8473.js";
e.C(a);
import * as r from "./399565.e3bd47902e.js";
e.C(r);
import * as i from "./257798.7e03f1e3e2.js";
e.C(i);
import * as o from "./447351.74c4243102.js";
e.C(o);
import * as n from "./617936.b641c39dad.js";
e.C(n);
import * as m from "./807489.3f6f62fc4e.js";
e.C(m);
import * as c from "./337882.544cd8454d.js";
e.C(c);
import * as l from "./955979.f6e77aea7d.js";
e.C(l);
import * as d from "./646436.029c782154.js";
e.C(d);
import * as f from "./7078.473c0dc500.js";
e.C(f);
import * as p from "./200429.3e7ed388fe.js";
e.C(p);
import * as u from "./698524.1c89d5e682.js";
e.C(u);
import * as b from "./956483.aae39072ae.js";
e.C(b);
import * as h from "./87162.70963eaac7.js";
e.C(h);
import * as j from "./396705.0c6f33f2fb.js";
e.C(j);
import * as g from "./155568.80ff0b0790.js";
e.C(g);
import * as C from "./731863.c47054621e.js";
e.C(C);
import * as _ from "./767086.029c6e6cb7.js";
e.C(_);
import * as w from "./76629.f2ec2ff70b.js";
e.C(w);
import * as x from "./514085.a7493d29eb.js";
e.C(x);
import * as y from "./204542.d8a33857f0.js";
e.C(y);
import * as v from "./226913.dd4de34d8f.js";
e.C(v);
import * as S from "./326277.89bd6c2599.js";
e.C(S);
var T = e(e.s = "d33d").a;
export {
    T as
    default
};