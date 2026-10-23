export const __rspack_esm_id = 965367;
export const __rspack_esm_ids = [965367];
export const __webpack_modules__ = {
    f3ZR: (function(e, o, t) {
        t.d(o, {
            a: () => m
        });
        var a = t("HZfM"),
            n = t("ABep"),
            r = t("QosV"),
            s = t("XnlH"),
            i = t("zd8w"),
            l = t("G8V1");
        t("rHrT");
        var p = t("WoME"),
            d = t("pICO"),
            c = t("eAav"),
            m = (0, a.gb)(function() {
                let e, o, t, m, f, h, u = (0, r.c)(15),
                    {
                        locale: g
                    } = (0, s.y)(c.a).value,
                    {
                        downloadPlatform: b,
                        messages: w
                    } = (0, a.W)(),
                    [x] = (0, a.fb)();
                u[0] !== x ? (e = function(e) {
                    if ("page" === e.get("target")) {
                        let o = e.getAll("page_id");
                        return 1 === o.length && p.a.test(o[0]) ? `codex://space/${encodeURIComponent(o[0])}` : null
                    }
                    if ("new-thread" === e.get("target")) return "codex://threads/new";
                    if ("team-join" === e.get("target")) {
                        let o = e.getAll("team_id"),
                            t = 1 === o.length ? o[0].trim() : null;
                        return t ? `codex://teams/${encodeURIComponent(t)}/join` : null
                    }
                    let o = e.getAll("url");
                    if (o.length > 0) {
                        let t;
                        if (1 !== o.length || ["prompt", "originUrl", "path"].some(o => e.has(o))) return null;
                        let a = o[0];
                        if (a.trim() !== a) return null;
                        try {
                            t = new URL(a)
                        } catch {
                            return null
                        }
                        if ("http:" !== t.protocol && "https:" !== t.protocol || 0 === t.hostname.length || t.username.length > 0 || t.password.length > 0) return null;
                        let n = new URL("codex://browser");
                        return n.searchParams.set("url", t.toString()), n.toString()
                    }
                    let t = new URL("codex://new");
                    for (let o of ["prompt", "originUrl", "path"]) {
                        let a = e.get(o)?.trim();
                        a && t.searchParams.set(o, a)
                    }
                    return t.searchParams.size > 0 ? t.toString() : null
                }(x), u[0] = x, u[1] = e) : e = u[1];
                let j = e;
                return u[2] !== j ? (o = () => {
                    null != j && window.location.assign(j)
                }, t = [j], u[2] = j, u[3] = o, u[4] = t) : (o = u[3], t = u[4]), (0, i.useEffect)(o, t), u[5] !== j ? (m = () => {
                    null != j && window.location.assign(j)
                }, u[5] = j, u[6] = m) : m = u[6], u[7] !== j || u[8] !== b || u[9] !== m ? (f = (0, n.jsx)(d.a, {
                    downloadPlatform: b,
                    deepLink: j,
                    onOpen: m
                }), u[7] = j, u[8] = b, u[9] = m, u[10] = f) : f = u[10], u[11] !== g || u[12] !== w || u[13] !== f ? (h = (0, n.jsx)(l.a, {
                    locale: g,
                    defaultLocale: "en-US",
                    messages: w,
                    children: f
                }), u[11] = g, u[12] = w, u[13] = f, u[14] = h) : h = u[14], h
            })
    }),
    pICO: (function(e, o, t) {
        var a = t("ABep"),
            n = t("QosV"),
            r = t("oyxz"),
            s = t("AlDs"),
            i = t("ygO2");

        function l(e) {
            let o, t, s, l, f, h, u, g, b, w, x, j, C, k = (0, n.c)(42),
                {
                    deepLink: _,
                    downloadPlatform: y,
                    status: D,
                    onOpen: P
                } = e,
                M = void 0 === D ? "opening" : D,
                T = "login" === M || "cli-login" === M;
            return k[0] !== T ? (o = T ? (0, a.jsx)(r.a, {
                id: "browser.codexDeeplink.signedIn",
                defaultMessage: "You’re signed in",
                description: "Heading on the desktop launcher page after browser authentication succeeds"
            }) : null, k[0] = T, k[1] = o) : o = k[1], k[2] !== M ? (t = "mobile" === M ? (0, a.jsx)(r.a, {
                id: "browser.codexDeeplink.mobileTitle",
                defaultMessage: "Open the ChatGPT desktop app on your computer",
                description: "Heading telling mobile users to use a computer to open a desktop app link"
            }) : null, k[2] = M, k[3] = t) : t = k[3], k[4] !== M ? (s = "opening" === M ? (0, a.jsx)(r.a, {
                id: "browser.codexDeeplink.title",
                defaultMessage: "Opening ChatGPT…",
                description: "Heading on a browser launcher page while it opens the ChatGPT desktop app with a chat or browser destination"
            }) : null, k[4] = M, k[5] = s) : s = k[5], k[6] !== o || k[7] !== t || k[8] !== s ? (l = (0, a.jsxs)("h1", {
                className: "text-3xl font-semibold",
                children: [o, t, s]
            }), k[6] = o, k[7] = t, k[8] = s, k[9] = l) : l = k[9], k[10] !== T ? (f = T ? (0, a.jsx)("p", {
                className: "text-secondary",
                children: (0, a.jsx)(r.a, {
                    id: "browser.codexDeeplink.signedInBody",
                    defaultMessage: "You’re signed in and may close this tab",
                    description: "Confirmation after desktop or CLI login finishes in the browser; closing the tab does not interrupt authentication"
                })
            }) : null, k[10] = T, k[11] = f) : f = k[11], k[12] !== M ? (h = "opening" === M ? (0, a.jsx)("p", {
                className: "text-secondary",
                children: (0, a.jsx)(r.a, {
                    id: "browser.codexDeeplink.body",
                    defaultMessage: "We're trying to open ChatGPT automatically. If nothing happens, download the app and try opening it again.",
                    description: "Instructions on the browser launcher page if automatic opening of a chat in the ChatGPT desktop app does not work"
                })
            }) : null, k[12] = M, k[13] = h) : h = k[13], k[14] !== _ || k[15] !== T ? (u = null != _ || T ? null : (0, a.jsx)("p", {
                role: "alert",
                className: "text-secondary",
                children: (0, a.jsx)(r.a, {
                    id: "browser.codexDeeplink.missingDetails",
                    defaultMessage: "This link is missing the chat details ChatGPT needs to reopen your work",
                    description: "Error on the browser launcher page when the chat or browser URL is missing or invalid, so opening the desktop app is unavailable"
                })
            }), k[14] = _, k[15] = T, k[16] = u) : u = k[16], k[17] !== y || k[18] !== M ? (g = "opening" === M && "windows" === y ? (0, a.jsx)(i.a, {
                color: "primary",
                size: "auth",
                onClick: m,
                children: (0, a.jsx)(r.a, {
                    id: "browser.codexDeeplink.download",
                    defaultMessage: "Download the app",
                    description: "Download button on the browser launcher page for installing the ChatGPT desktop app without losing the chat link"
                })
            }) : null, k[17] = y, k[18] = M, k[19] = g) : g = k[19], k[20] !== y || k[21] !== M ? (b = "opening" === M && "mac" === y ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(i.a, {
                    color: "primary",
                    size: "auth",
                    onClick: c,
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.downloadAppleSilicon",
                        defaultMessage: "Download for Apple Silicon",
                        description: "Download button on the browser launcher page for the Apple Silicon version of the ChatGPT desktop app"
                    })
                }), (0, a.jsx)(i.a, {
                    color: "outlineSurface",
                    size: "auth",
                    onClick: d,
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.downloadIntel",
                        defaultMessage: "Download for Intel Mac",
                        description: "Download button on the browser launcher page for the Intel Mac version of the ChatGPT desktop app"
                    })
                })]
            }) : null, k[20] = y, k[21] = M, k[22] = b) : b = k[22], k[23] !== M ? (w = "mobile" === M ? (0, a.jsx)(i.a, {
                color: "primary",
                size: "auth",
                onClick: p,
                children: (0, a.jsx)(r.a, {
                    id: "browser.codexDeeplink.learnMore",
                    defaultMessage: "Learn more",
                    description: "Link from the mobile desktop-launcher page to information about downloading the desktop app"
                })
            }) : null, k[23] = M, k[24] = w) : w = k[24], k[25] !== _ || k[26] !== y || k[27] !== T || k[28] !== P || k[29] !== M ? (x = "mobile" !== M && "cli-login" !== M ? (0, a.jsx)(i.a, {
                color: null == y || T ? "primary" : "outlineSurface",
                size: "auth",
                disabled: null == _,
                onClick: P,
                children: (0, a.jsx)(r.a, {
                    id: "browser.codexDeeplink.open",
                    defaultMessage: "Open ChatGPT",
                    description: "Retry button on the browser launcher page for opening a chat in the ChatGPT desktop app"
                })
            }) : null, k[25] = _, k[26] = y, k[27] = T, k[28] = P, k[29] = M, k[30] = x) : x = k[30], k[31] !== b || k[32] !== w || k[33] !== x || k[34] !== g ? (j = (0, a.jsxs)("div", {
                className: "flex flex-col gap-3",
                children: [g, b, w, x]
            }), k[31] = b, k[32] = w, k[33] = x, k[34] = g, k[35] = j) : j = k[35], k[36] !== j || k[37] !== l || k[38] !== f || k[39] !== h || k[40] !== u ? (C = (0, a.jsx)("main", {
                className: "flex min-h-screen flex-col items-center justify-center bg-surface px-6 py-12 text-default select-none",
                children: (0, a.jsxs)("div", {
                    className: "flex w-full max-w-md flex-col gap-5",
                    children: [l, f, h, u, j]
                })
            }), k[36] = j, k[37] = l, k[38] = f, k[39] = h, k[40] = u, k[41] = C) : C = k[41], C
        }

        function p() {
            return f("https://chatgpt.com/download")
        }

        function d() {
            return f("https://persistent.oaistatic.com/codex-app-prod/ChatGPT-latest-x64.dmg")
        }

        function c() {
            return f("https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg")
        }

        function m() {
            return f("https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi")
        }

        function f(e) {
            "https://chatgpt.com/download" !== e && (0, s.b)("codex-download", {
                allowUnauthenticatedTracking: !0
            }), window.open(e, "_blank", "noopener,noreferrer")
        }
        t.d(o, {
            a: () => l
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.a17d6a6ece.js";
import * as o from "./680612.8ff2f414f1.js";
e.C(o);
import * as t from "./418851.a310d22457.js";
e.C(t);
import * as a from "./109308.3562fe13f3.js";
e.C(a);
import * as n from "./399565.7c41a02089.js";
e.C(n);
import * as r from "./257798.61b55cc89c.js";
e.C(r);
import * as s from "./447351.eda4c66995.js";
e.C(s);
import * as i from "./617936.4109b40253.js";
e.C(i);
import * as l from "./807489.96baf824b2.js";
e.C(l);
import * as p from "./337882.91f09f4a71.js";
e.C(p);
import * as d from "./955979.75d3610bb4.js";
e.C(d);
import * as c from "./646436.cc0a492473.js";
e.C(c);
import * as m from "./7078.6fddaf5ec4.js";
e.C(m);
import * as f from "./200429.ba0b0ae8d2.js";
e.C(f);
import * as h from "./698524.e7d509430b.js";
e.C(h);
import * as u from "./956483.bd6b1345c6.js";
e.C(u);
import * as g from "./87162.92d05ec456.js";
e.C(g);
import * as b from "./396705.b372b39223.js";
e.C(b);
import * as w from "./155568.42b045474e.js";
e.C(w);
import * as x from "./731863.50a2989dfa.js";
e.C(x);
import * as j from "./767086.2424b5520c.js";
e.C(j);
import * as C from "./76629.59d440aa04.js";
e.C(C);
import * as k from "./514085.3e4e8191c6.js";
e.C(k);
import * as _ from "./204542.0b9798477e.js";
e.C(_);
import * as y from "./982651.170d8c0a0d.js";
e.C(y);
import * as D from "./673108.2217fb48eb.js";
e.C(D);
import * as P from "./487481.73eebe5ceb.js";
e.C(P);
import * as M from "./226913.f2de3ceb87.js";
e.C(M);
import * as T from "./965367.a3122cf762.js";
e.C(T);
var G = e(e.s = "f3ZR").a;
export {
    G as
    default
};