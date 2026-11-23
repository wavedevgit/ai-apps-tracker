export const __rspack_esm_ids = [287226];
export const __webpack_modules__ = {
    PQ0X: (function(a, b, c) {
        c.d(b, {
            a: () => n
        });
        var d = c("rEML"),
            e = c("ABep"),
            f = c("QosV"),
            g = c("zd8w"),
            h = c("oyxz"),
            i = c("Qgfj"),
            j = c("Sm6l"),
            k = c("mGT8"),
            l = c("cLvX");
        let m = "ms-windows-store://pdp/?ProductId=9PLM9XGG6VKS";
        var n = (0, d.kb)(function() {
            let a, b, c, n, p, q, r, s, t, u, v, w, x, y = (0, f.c)(16),
                {
                    isWindows: z
                } = (0, d.Y)(),
                A = (0, g.useRef)(!1);
            return y[0] !== z ? (a = () => {
                z && !A.current && (A.current = !0, window.location.assign(m))
            }, b = [z], y[0] = z, y[1] = a, y[2] = b) : (a = y[1], b = y[2]), (0, g.useEffect)(a, b), y[3] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, e.jsx)("header", {
                className: "flex h-14 items-center px-6 sm:px-12",
                children: (0, e.jsx)(k.a, {
                    className: "h-4 w-auto"
                })
            }), y[3] = c) : c = y[3], y[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, e.jsxs)("div", {
                className: "relative isolate mb-4 flex w-full justify-center sm:mb-6",
                children: [(0, e.jsx)("div", {
                    "aria-hidden": "true",
                    className: "pointer-events-none absolute top-0 h-20 w-56 max-w-full rounded-full bg-info-soft blur-3xl"
                }), (0, e.jsx)("img", {
                    src: l,
                    alt: "",
                    width: 96,
                    height: 96,
                    className: "relative size-20 sm:size-24"
                })]
            }), y[4] = n) : n = y[4], y[5] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, e.jsx)("h1", {
                className: "max-w-[26rem] text-[32px] leading-[1.08] font-medium tracking-[-0.045em] text-balance sm:text-[48px]",
                children: (0, e.jsx)(h.a, {
                    id: "browser.lenovoUpdate.title",
                    defaultMessage: "Update ChatGPT for Windows"
                })
            }), y[5] = p) : p = y[5], y[6] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, e.jsx)("p", {
                className: "mt-4 max-w-[20rem] text-base leading-6 text-balance text-secondary",
                children: (0, e.jsx)(h.a, {
                    id: "browser.lenovoUpdate.subtitle",
                    defaultMessage: "Get the latest offers and improvements in the ChatGPT app."
                })
            }), y[6] = q) : q = y[6], y[7] !== z ? (r = (0, e.jsxs)("div", {
                className: "flex w-full flex-col items-center text-center",
                children: [n, p, q, z ? (0, e.jsx)(j.b, {
                    href: m,
                    color: "chatgptPrimary",
                    size: "authUpsell",
                    className: "mt-6",
                    children: (0, e.jsx)(h.a, {
                        id: "browser.lenovoUpdate.openStore",
                        defaultMessage: "Open Microsoft Store"
                    })
                }) : (0, e.jsx)("p", {
                    className: "mt-6 max-w-[20rem] text-sm text-balance text-secondary",
                    children: (0, e.jsx)(h.a, {
                        id: "browser.lenovoUpdate.useWindows",
                        defaultMessage: "Open this page on your Lenovo PC to launch the Microsoft Store"
                    })
                })]
            }), y[7] = z, y[8] = r) : r = y[8], y[9] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, e.jsx)("h2", {
                id: "lenovo-update-steps",
                className: "text-lg font-medium",
                children: (0, e.jsx)(h.a, {
                    id: "browser.lenovoUpdate.manualTitle",
                    defaultMessage: "Finish the update"
                })
            }), y[9] = s) : s = y[9], y[10] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, e.jsx)("span", {
                "aria-hidden": "true",
                className: "grid size-6 shrink-0 place-items-center rounded-full border border-subtle bg-surface-secondary text-xs font-medium text-default",
                children: (0, e.jsx)(i.c, {
                    value: 1
                })
            }), y[10] = t) : t = y[10], y[11] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, e.jsxs)("li", {
                className: "flex items-start gap-3",
                children: [t, (0, e.jsx)("span", {
                    children: (0, e.jsx)(h.a, {
                        id: "browser.lenovoUpdate.selectUpdate",
                        defaultMessage: "Select <strong>Update</strong> on ChatGPT\u2019s Store page.",
                        values: {
                            strong: o
                        }
                    })
                })]
            }), y[11] = u) : u = y[11], y[12] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, e.jsxs)("ol", {
                className: "mt-3.5 space-y-3.5 text-secondary",
                children: [u, (0, e.jsxs)("li", {
                    className: "flex items-start gap-3",
                    children: [(0, e.jsx)("span", {
                        "aria-hidden": "true",
                        className: "grid size-6 shrink-0 place-items-center rounded-full border border-subtle bg-surface-secondary text-xs font-medium text-default",
                        children: (0, e.jsx)(i.c, {
                            value: 2
                        })
                    }), (0, e.jsx)("span", {
                        children: (0, e.jsx)(h.a, {
                            id: "browser.lenovoUpdate.reopen",
                            defaultMessage: "Reopen ChatGPT when the update finishes."
                        })
                    })]
                })]
            }), y[12] = v) : v = y[12], y[13] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, e.jsxs)("section", {
                "aria-labelledby": "lenovo-update-steps",
                className: "w-full rounded-3xl border border-subtle bg-surface p-5 sm:px-7 sm:py-6",
                children: [s, v, (0, e.jsx)("p", {
                    className: "mt-4 border-t border-subtle pt-4 text-sm leading-5 text-secondary",
                    children: (0, e.jsx)(h.a, {
                        id: "browser.lenovoUpdate.storeFallback",
                        defaultMessage: "If the Store doesn\u2019t open, find Microsoft Store in the Windows Start menu and search for ChatGPT."
                    })
                })]
            }), y[13] = w) : w = y[13], y[14] !== r ? (x = (0, e.jsxs)("div", {
                className: "flex min-h-svh flex-col bg-surface-secondary text-default",
                children: [c, (0, e.jsx)("main", {
                    className: "flex flex-1 items-center justify-center px-5 pt-7 pb-12 sm:pt-10 sm:pb-24",
                    children: (0, e.jsxs)("div", {
                        className: "flex w-full max-w-[31rem] flex-col items-center gap-7 sm:gap-10",
                        children: [r, w]
                    })
                })]
            }), y[14] = r, y[15] = x) : x = y[15], x
        });

        function o(a) {
            return (0, e.jsx)("strong", {
                className: "font-medium text-default",
                children: a
            }, "update")
        }
    }),
    cLvX: (function(a, b, c) {
        a.exports = c.p + "assets/desktop-app-icon.59d4711184.png"
    })
};
import {
    __webpack_require__ as a
} from "./633146.1f27f5a9c8.js";
import * as b from "./418851.05e747fff0.js";
a.C(b);
import * as c from "./109308.d24e70db04.js";
a.C(c);
import * as d from "./399565.bde4033eb2.js";
a.C(d);
import * as e from "./257798.0095cbe700.js";
a.C(e);
import * as f from "./447351.05632d2214.js";
a.C(f);
import * as g from "./617936.75afa06ed2.js";
a.C(g);
import * as h from "./807489.5142370709.js";
a.C(h);
import * as i from "./337882.abb4bc92fd.js";
a.C(i);
import * as j from "./955979.54c13b0fc4.js";
a.C(j);
import * as k from "./646436.e4ed460833.js";
a.C(k);
import * as l from "./7078.61922297fe.js";
a.C(l);
import * as m from "./200429.e860765fad.js";
a.C(m);
import * as n from "./698524.4f94b9b043.js";
a.C(n);
import * as o from "./956483.afc3e2c9fd.js";
a.C(o);
import * as p from "./87162.e84f1cbe30.js";
a.C(p);
import * as q from "./396705.16d73232e5.js";
a.C(q);
import * as r from "./155568.18f2193ead.js";
a.C(r);
import * as s from "./731863.b14c3a25df.js";
a.C(s);
import * as t from "./767086.d600a395f4.js";
a.C(t);
import * as u from "./76629.2b5e8e87e6.js";
a.C(u);
import * as v from "./226913.748570e15f.js";
a.C(v);
import * as w from "./287226.38612d7a0f.js";
a.C(w);
var x = a(a.s = "PQ0X").a;
export {
    x as
    default
};