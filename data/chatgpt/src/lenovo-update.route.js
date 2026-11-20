export const __rspack_esm_ids = [287226];
export const __webpack_modules__ = {
    PQ0X: (function(e, t, s) {
        s.d(t, {
            a: () => f
        });
        var a = s("rEML"),
            o = s("ABep"),
            r = s("QosV"),
            n = s("zd8w"),
            i = s("oyxz"),
            d = s("Qgfj"),
            l = s("Sm6l"),
            c = s("mGT8"),
            m = s("cLvX");
        let p = "ms-windows-store://pdp/?ProductId=9PLM9XGG6VKS";
        var f = (0, a.kb)(function() {
            let e, t, s, f, u, x, b, j, g, C, w, v, _, S = (0, r.c)(16),
                {
                    isWindows: y
                } = (0, a.Y)(),
                P = (0, n.useRef)(!1);
            return S[0] !== y ? (e = () => {
                y && !P.current && (P.current = !0, window.location.assign(p))
            }, t = [y], S[0] = y, S[1] = e, S[2] = t) : (e = S[1], t = S[2]), (0, n.useEffect)(e, t), S[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, o.jsx)("header", {
                className: "flex h-14 items-center px-6 sm:px-12",
                children: (0, o.jsx)(c.a, {
                    className: "h-4 w-auto"
                })
            }), S[3] = s) : s = S[3], S[4] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, o.jsxs)("div", {
                className: "relative isolate mb-4 flex w-full justify-center sm:mb-6",
                children: [(0, o.jsx)("div", {
                    "aria-hidden": "true",
                    className: "pointer-events-none absolute top-0 h-20 w-56 max-w-full rounded-full bg-info-soft blur-3xl"
                }), (0, o.jsx)("img", {
                    src: m,
                    alt: "",
                    width: 96,
                    height: 96,
                    className: "relative size-20 sm:size-24"
                })]
            }), S[4] = f) : f = S[4], S[5] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, o.jsx)("h1", {
                className: "max-w-[26rem] text-[32px] leading-[1.08] font-medium tracking-[-0.045em] text-balance sm:text-[48px]",
                children: (0, o.jsx)(i.a, {
                    id: "browser.lenovoUpdate.title",
                    defaultMessage: "Update ChatGPT for Windows"
                })
            }), S[5] = u) : u = S[5], S[6] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, o.jsx)("p", {
                className: "mt-4 max-w-[20rem] text-base leading-6 text-balance text-secondary",
                children: (0, o.jsx)(i.a, {
                    id: "browser.lenovoUpdate.subtitle",
                    defaultMessage: "Get the latest offers and improvements in the ChatGPT app."
                })
            }), S[6] = x) : x = S[6], S[7] !== y ? (b = (0, o.jsxs)("div", {
                className: "flex w-full flex-col items-center text-center",
                children: [f, u, x, y ? (0, o.jsx)(l.b, {
                    href: p,
                    color: "chatgptPrimary",
                    size: "authUpsell",
                    className: "mt-6",
                    children: (0, o.jsx)(i.a, {
                        id: "browser.lenovoUpdate.openStore",
                        defaultMessage: "Open Microsoft Store"
                    })
                }) : (0, o.jsx)("p", {
                    className: "mt-6 max-w-[20rem] text-sm text-balance text-secondary",
                    children: (0, o.jsx)(i.a, {
                        id: "browser.lenovoUpdate.useWindows",
                        defaultMessage: "Open this page on your Lenovo PC to launch the Microsoft Store"
                    })
                })]
            }), S[7] = y, S[8] = b) : b = S[8], S[9] === Symbol.for("react.memo_cache_sentinel") ? (j = (0, o.jsx)("h2", {
                id: "lenovo-update-steps",
                className: "text-lg font-medium",
                children: (0, o.jsx)(i.a, {
                    id: "browser.lenovoUpdate.manualTitle",
                    defaultMessage: "Finish the update"
                })
            }), S[9] = j) : j = S[9], S[10] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, o.jsx)("span", {
                "aria-hidden": "true",
                className: "grid size-6 shrink-0 place-items-center rounded-full border border-subtle bg-surface-secondary text-xs font-medium text-default",
                children: (0, o.jsx)(d.c, {
                    value: 1
                })
            }), S[10] = g) : g = S[10], S[11] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, o.jsxs)("li", {
                className: "flex items-start gap-3",
                children: [g, (0, o.jsx)("span", {
                    children: (0, o.jsx)(i.a, {
                        id: "browser.lenovoUpdate.selectUpdate",
                        defaultMessage: "Select <strong>Update</strong> on ChatGPT’s Store page.",
                        values: {
                            strong: h
                        }
                    })
                })]
            }), S[11] = C) : C = S[11], S[12] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, o.jsxs)("ol", {
                className: "mt-3.5 space-y-3.5 text-secondary",
                children: [C, (0, o.jsxs)("li", {
                    className: "flex items-start gap-3",
                    children: [(0, o.jsx)("span", {
                        "aria-hidden": "true",
                        className: "grid size-6 shrink-0 place-items-center rounded-full border border-subtle bg-surface-secondary text-xs font-medium text-default",
                        children: (0, o.jsx)(d.c, {
                            value: 2
                        })
                    }), (0, o.jsx)("span", {
                        children: (0, o.jsx)(i.a, {
                            id: "browser.lenovoUpdate.reopen",
                            defaultMessage: "Reopen ChatGPT when the update finishes."
                        })
                    })]
                })]
            }), S[12] = w) : w = S[12], S[13] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, o.jsxs)("section", {
                "aria-labelledby": "lenovo-update-steps",
                className: "w-full rounded-3xl border border-subtle bg-surface p-5 sm:px-7 sm:py-6",
                children: [j, w, (0, o.jsx)("p", {
                    className: "mt-4 border-t border-subtle pt-4 text-sm leading-5 text-secondary",
                    children: (0, o.jsx)(i.a, {
                        id: "browser.lenovoUpdate.storeFallback",
                        defaultMessage: "If the Store doesn’t open, find Microsoft Store in the Windows Start menu and search for ChatGPT."
                    })
                })]
            }), S[13] = v) : v = S[13], S[14] !== b ? (_ = (0, o.jsxs)("div", {
                className: "flex min-h-svh flex-col bg-surface-secondary text-default",
                children: [s, (0, o.jsx)("main", {
                    className: "flex flex-1 items-center justify-center px-5 pt-7 pb-12 sm:pt-10 sm:pb-24",
                    children: (0, o.jsxs)("div", {
                        className: "flex w-full max-w-[31rem] flex-col items-center gap-7 sm:gap-10",
                        children: [b, v]
                    })
                })]
            }), S[14] = b, S[15] = _) : _ = S[15], _
        });

        function h(e) {
            return (0, o.jsx)("strong", {
                className: "font-medium text-default",
                children: e
            }, "update")
        }
    }),
    cLvX: (function(e, t, s) {
        e.exports = s.p + "assets/desktop-app-icon.59d4711184.png"
    })
};
import {
    __webpack_require__ as e
} from "./633146.286e08e471.js";
import * as t from "./418851.b2405a4ff9.js";
e.C(t);
import * as s from "./109308.c704a27752.js";
e.C(s);
import * as a from "./399565.76c7da28d9.js";
e.C(a);
import * as o from "./257798.da1bc54c05.js";
e.C(o);
import * as r from "./447351.34d04099ca.js";
e.C(r);
import * as n from "./617936.da77c6b618.js";
e.C(n);
import * as i from "./807489.823dbdfb5a.js";
e.C(i);
import * as d from "./337882.060a468551.js";
e.C(d);
import * as l from "./955979.5504cdc0ad.js";
e.C(l);
import * as c from "./646436.feae78aa0d.js";
e.C(c);
import * as m from "./7078.6f2aee03ba.js";
e.C(m);
import * as p from "./200429.80eabab50b.js";
e.C(p);
import * as f from "./698524.9faf81ab1c.js";
e.C(f);
import * as h from "./956483.db483d044c.js";
e.C(h);
import * as u from "./87162.313d693207.js";
e.C(u);
import * as x from "./396705.047d6db773.js";
e.C(x);
import * as b from "./155568.1d9e3b614b.js";
e.C(b);
import * as j from "./731863.5760f3f335.js";
e.C(j);
import * as g from "./767086.ab8a876382.js";
e.C(g);
import * as C from "./76629.6fe0bcbf7b.js";
e.C(C);
import * as w from "./226913.cf105b979e.js";
e.C(w);
import * as v from "./287226.d5fdabc999.js";
e.C(v);
var _ = e(e.s = "PQ0X").a;
export {
    _ as
    default
};