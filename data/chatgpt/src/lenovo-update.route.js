export const __rspack_esm_ids = [287226];
export const __webpack_modules__ = {
    LrHH: (function(a, b, c) {
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
            k = c("Qbfx"),
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
} from "./633146.de3f981156.js";
import * as b from "./418851.f063eecd68.js";
a.C(b);
import * as c from "./109308.6f7ef1dfb7.js";
a.C(c);
import * as d from "./399565.9b329429cf.js";
a.C(d);
import * as e from "./257798.2c9808dc2d.js";
a.C(e);
import * as f from "./447351.879fb0271f.js";
a.C(f);
import * as g from "./617936.100e7e3b87.js";
a.C(g);
import * as h from "./807489.4f5de65ce6.js";
a.C(h);
import * as i from "./337882.dd53aef429.js";
a.C(i);
import * as j from "./955979.da67fc9346.js";
a.C(j);
import * as k from "./646436.7523816f46.js";
a.C(k);
import * as l from "./7078.06fdb4b63f.js";
a.C(l);
import * as m from "./200429.03e2aa5e85.js";
a.C(m);
import * as n from "./698524.d1df5e85da.js";
a.C(n);
import * as o from "./956483.541b00b099.js";
a.C(o);
import * as p from "./87162.0f58b44e50.js";
a.C(p);
import * as q from "./396705.92d2a93025.js";
a.C(q);
import * as r from "./155568.ec2f311926.js";
a.C(r);
import * as s from "./731863.7089f3ce71.js";
a.C(s);
import * as t from "./767086.736386b2d3.js";
a.C(t);
import * as u from "./76629.060183bbe7.js";
a.C(u);
import * as v from "./226913.a95fa918ab.js";
a.C(v);
import * as w from "./287226.d83744bf1c.js";
a.C(w);
var x = a(a.s = "LrHH").a;
export {
    x as
    default
};