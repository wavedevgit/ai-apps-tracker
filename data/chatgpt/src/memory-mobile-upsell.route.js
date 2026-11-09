export const __rspack_esm_ids = [326277];
export const __webpack_modules__ = {
    EyFy: (function(e, t, s) {
        s.d(t, {
            a: () => p
        });
        var a = s("jqIZ"),
            r = s("ABep"),
            o = s("QosV"),
            i = s("BolX"),
            m = s("zd8w"),
            n = s("oyxz"),
            c = s("G8V1"),
            l = s("RNul");
        s("rHrT");
        var f = s("eAav"),
            p = (0, a.hb)(function() {
                let e, t, s, p, d, b, u, h = (0, o.c)(12),
                    {
                        locale: j
                    } = (0, i.y)(f.a).value,
                    {
                        fallbackUrl: C,
                        messages: g
                    } = (0, a.X)(),
                    _ = (0, m.useRef)(!1),
                    w = (0, m.useRef)(!1);
                return h[0] !== C ? (e = () => {
                    w.current = w.current || "hidden" === document.visibilityState;
                    let e = () => {
                            "hidden" === document.visibilityState && (w.current = !0)
                        },
                        t = () => {
                            w.current = !0
                        };
                    document.addEventListener("visibilitychange", e), window.addEventListener("pagehide", t);
                    let s = window.setTimeout(() => {
                        w.current || "visible" !== document.visibilityState || window.location.replace(C)
                    }, 1500);
                    if (!_.current) {
                        _.current = !0;
                        try {
                            window.location.assign("chatgpt://plus-upsell")
                        } catch {
                            w.current = !0, window.clearTimeout(s), window.location.replace(C)
                        }
                    }
                    return () => {
                        window.clearTimeout(s), document.removeEventListener("visibilitychange", e), window.removeEventListener("pagehide", t)
                    }
                }, t = [C], h[0] = C, h[1] = e, h[2] = t) : (e = h[1], t = h[2]), (0, m.useEffect)(e, t), h[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, r.jsx)(l.a, {
                    className: "icon-lg text-secondary"
                }), h[3] = s) : s = h[3], h[4] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, r.jsx)("p", {
                    className: "text-base",
                    children: (0, r.jsx)(n.a, {
                        id: "chatgpt.memory_mobile_upsell.deeplink_bridge.status",
                        defaultMessage: "Opening ChatGPT…",
                        description: "Loading/status text on the memory mobile Plus upsell bridge page. This page appears briefly for iOS users after they tap the memory launch email CTA, while ChatGPT tries to open the native app before falling back to web pricing. This indicates an in-progress action, not a command. Short sentence."
                    })
                }), h[4] = p) : p = h[4], h[5] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, r.jsx)(n.a, {
                    id: "chatgpt.memory_mobile_upsell.deeplink_bridge.web_fallback_link",
                    defaultMessage: "Continue on web",
                    description: "Link label on the iOS bridge page that opens the ChatGPT website in the mobile browser, not the app, to the pricing page with Plus highlighted. Very short."
                }), h[5] = d) : d = h[5], h[6] !== C ? (b = (0, r.jsx)("main", {
                    className: "flex min-h-screen items-center justify-center bg-surface px-6 text-default select-none",
                    children: (0, r.jsxs)("div", {
                        className: "flex max-w-sm flex-col items-center gap-3 text-center",
                        role: "status",
                        "aria-live": "polite",
                        "aria-busy": !0,
                        children: [s, p, (0, r.jsx)("a", {
                            className: "text-sm text-secondary underline underline-offset-2",
                            href: C,
                            children: d
                        })]
                    })
                }), h[6] = C, h[7] = b) : b = h[7], h[8] !== j || h[9] !== g || h[10] !== b ? (u = (0, r.jsx)(c.a, {
                    locale: j,
                    defaultLocale: "en-US",
                    messages: g,
                    children: b
                }), h[8] = j, h[9] = g, h[10] = b, h[11] = u) : u = h[11], u
            })
    })
};
import {
    __webpack_require__ as e
} from "./633146.77f467ae88.js";
import * as t from "./680612.3c8d72f22d.js";
e.C(t);
import * as s from "./418851.24af49562e.js";
e.C(s);
import * as a from "./109308.fbb414d4aa.js";
e.C(a);
import * as r from "./399565.a7f9c29dec.js";
e.C(r);
import * as o from "./257798.0b3d6025cd.js";
e.C(o);
import * as i from "./153380.6675e448cd.js";
e.C(i);
import * as m from "./617936.ab7454adbe.js";
e.C(m);
import * as n from "./807489.74b193586a.js";
e.C(n);
import * as c from "./337882.eb4e205b01.js";
e.C(c);
import * as l from "./955979.c147b344d3.js";
e.C(l);
import * as f from "./646436.92303256ff.js";
e.C(f);
import * as p from "./7078.1a10efd8a2.js";
e.C(p);
import * as d from "./200429.6705d27d2a.js";
e.C(d);
import * as b from "./698524.7253a53056.js";
e.C(b);
import * as u from "./956483.cb805cdd0f.js";
e.C(u);
import * as h from "./87162.636a6b2a55.js";
e.C(h);
import * as j from "./396705.c39944bbf2.js";
e.C(j);
import * as C from "./155568.d3b291934c.js";
e.C(C);
import * as g from "./731863.8b87e9728a.js";
e.C(g);
import * as _ from "./767086.6da4be4bcc.js";
e.C(_);
import * as w from "./76629.c67c63e9cf.js";
e.C(w);
import * as y from "./514085.4d87b5885b.js";
e.C(y);
import * as x from "./204542.cb541ce34a.js";
e.C(x);
import * as v from "./982651.7bfd071e83.js";
e.C(v);
import * as S from "./673108.34c2463692.js";
e.C(S);
import * as T from "./487481.90065b7f5d.js";
e.C(T);
import * as k from "./229522.aca0c6dfc8.js";
e.C(k);
import * as E from "./390575.8f68283a1b.js";
e.C(E);
import * as L from "./353032.f68e05ddda.js";
e.C(L);
import * as N from "./637885.a0eaa62308.js";
e.C(N);
import * as P from "./226913.b323f04fd6.js";
e.C(P);
import * as G from "./326277.abbd0545cf.js";
e.C(G);
var A = e(e.s = "EyFy").a;
export {
    A as
    default
};