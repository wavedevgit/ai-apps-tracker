export const __rspack_esm_ids = [326277];
export const __webpack_modules__ = {
    EyFy: (function(e, t, s) {
        s.d(t, {
            a: () => f
        });
        var r = s("jqIZ"),
            a = s("ABep"),
            o = s("QosV"),
            i = s("BolX"),
            m = s("zd8w"),
            n = s("oyxz"),
            c = s("G8V1"),
            l = s("RNul");
        s("rHrT");
        var d = s("eAav"),
            f = (0, r.hb)(function() {
                let e, t, s, f, p, b, u, h = (0, o.c)(12),
                    {
                        locale: j
                    } = (0, i.y)(d.a).value,
                    {
                        fallbackUrl: C,
                        messages: g
                    } = (0, r.X)(),
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
                }, t = [C], h[0] = C, h[1] = e, h[2] = t) : (e = h[1], t = h[2]), (0, m.useEffect)(e, t), h[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(l.a, {
                    className: "icon-lg text-secondary"
                }), h[3] = s) : s = h[3], h[4] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, a.jsx)("p", {
                    className: "text-base",
                    children: (0, a.jsx)(n.a, {
                        id: "chatgpt.memory_mobile_upsell.deeplink_bridge.status",
                        defaultMessage: "Opening ChatGPT…",
                        description: "Loading/status text on the memory mobile Plus upsell bridge page. This page appears briefly for iOS users after they tap the memory launch email CTA, while ChatGPT tries to open the native app before falling back to web pricing. This indicates an in-progress action, not a command. Short sentence."
                    })
                }), h[4] = f) : f = h[4], h[5] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(n.a, {
                    id: "chatgpt.memory_mobile_upsell.deeplink_bridge.web_fallback_link",
                    defaultMessage: "Continue on web",
                    description: "Link label on the iOS bridge page that opens the ChatGPT website in the mobile browser, not the app, to the pricing page with Plus highlighted. Very short."
                }), h[5] = p) : p = h[5], h[6] !== C ? (b = (0, a.jsx)("main", {
                    className: "flex min-h-screen items-center justify-center bg-surface px-6 text-default select-none",
                    children: (0, a.jsxs)("div", {
                        className: "flex max-w-sm flex-col items-center gap-3 text-center",
                        role: "status",
                        "aria-live": "polite",
                        "aria-busy": !0,
                        children: [s, f, (0, a.jsx)("a", {
                            className: "text-sm text-secondary underline underline-offset-2",
                            href: C,
                            children: p
                        })]
                    })
                }), h[6] = C, h[7] = b) : b = h[7], h[8] !== j || h[9] !== g || h[10] !== b ? (u = (0, a.jsx)(c.a, {
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
} from "./633146.516c6a4677.js";
import * as t from "./680612.3c8d72f22d.js";
e.C(t);
import * as s from "./418851.8cdff597ce.js";
e.C(s);
import * as r from "./109308.fbb414d4aa.js";
e.C(r);
import * as a from "./399565.a7f9c29dec.js";
e.C(a);
import * as o from "./257798.0b3d6025cd.js";
e.C(o);
import * as i from "./153380.6675e448cd.js";
e.C(i);
import * as m from "./617936.510230e136.js";
e.C(m);
import * as n from "./807489.a027e374ea.js";
e.C(n);
import * as c from "./337882.c2f7cf8187.js";
e.C(c);
import * as l from "./955979.24c51c90c6.js";
e.C(l);
import * as d from "./646436.c733a3d665.js";
e.C(d);
import * as f from "./7078.c424185282.js";
e.C(f);
import * as p from "./200429.ef6ceeb78d.js";
e.C(p);
import * as b from "./698524.fd3e996752.js";
e.C(b);
import * as u from "./956483.abe9885def.js";
e.C(u);
import * as h from "./87162.29ee0bd2a9.js";
e.C(h);
import * as j from "./396705.c39944bbf2.js";
e.C(j);
import * as C from "./155568.7bbfb72b85.js";
e.C(C);
import * as g from "./731863.8b87e9728a.js";
e.C(g);
import * as _ from "./767086.6da4be4bcc.js";
e.C(_);
import * as w from "./76629.1ccd088209.js";
e.C(w);
import * as y from "./514085.2b0855224a.js";
e.C(y);
import * as x from "./204542.555643bfb3.js";
e.C(x);
import * as v from "./982651.7bfd071e83.js";
e.C(v);
import * as S from "./673108.95021ed52b.js";
e.C(S);
import * as T from "./487481.dd23dcfc39.js";
e.C(T);
import * as k from "./229522.7430726c37.js";
e.C(k);
import * as E from "./390575.353218f3fd.js";
e.C(E);
import * as L from "./353032.1ea521a002.js";
e.C(L);
import * as N from "./637885.5271cdd835.js";
e.C(N);
import * as P from "./226913.b323f04fd6.js";
e.C(P);
import * as G from "./326277.ba76178f67.js";
e.C(G);
var A = e(e.s = "EyFy").a;
export {
    A as
    default
};