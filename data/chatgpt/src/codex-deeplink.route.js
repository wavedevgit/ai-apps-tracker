export const __rspack_esm_id = 965367;
export const __rspack_esm_ids = [965367];
export const __webpack_modules__ = {
    YOMI: (function(e, o, t) {
        t.d(o, {
            a: () => m
        });
        var n = t("jqIZ"),
            a = t("ABep"),
            r = t("QosV"),
            s = t("iTtm"),
            i = t("zd8w"),
            l = t("G8V1");
        t("rHrT");
        var p = t("WoME"),
            c = t("pICO"),
            d = t("eAav"),
            m = (0, n.gb)(function() {
                let e, o, t, m, h, u, f = (0, r.c)(15),
                    {
                        locale: g
                    } = (0, s.y)(d.a).value,
                    {
                        downloadPlatform: w,
                        messages: x
                    } = (0, n.W)(),
                    [b] = (0, n.fb)();
                f[0] !== b ? (e = function(e) {
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
                        let n = o[0];
                        if (n.trim() !== n) return null;
                        try {
                            t = new URL(n)
                        } catch {
                            return null
                        }
                        if ("http:" !== t.protocol && "https:" !== t.protocol || 0 === t.hostname.length || t.username.length > 0 || t.password.length > 0) return null;
                        let a = new URL("codex://browser");
                        return a.searchParams.set("url", t.toString()), a.toString()
                    }
                    let t = new URL("codex://new");
                    for (let o of ["prompt", "originUrl", "path"]) {
                        let n = e.get(o)?.trim();
                        n && t.searchParams.set(o, n)
                    }
                    return t.searchParams.size > 0 ? t.toString() : null
                }(b), f[0] = b, f[1] = e) : e = f[1];
                let j = e;
                return f[2] !== j ? (o = () => {
                    null != j && window.location.assign(j)
                }, t = [j], f[2] = j, f[3] = o, f[4] = t) : (o = f[3], t = f[4]), (0, i.useEffect)(o, t), f[5] !== j ? (m = () => {
                    null != j && window.location.assign(j)
                }, f[5] = j, f[6] = m) : m = f[6], f[7] !== j || f[8] !== w || f[9] !== m ? (h = (0, a.jsx)(c.a, {
                    downloadPlatform: w,
                    deepLink: j,
                    onOpen: m
                }), f[7] = j, f[8] = w, f[9] = m, f[10] = h) : h = f[10], f[11] !== g || f[12] !== x || f[13] !== h ? (u = (0, a.jsx)(l.a, {
                    locale: g,
                    defaultLocale: "en-US",
                    messages: x,
                    children: h
                }), f[11] = g, f[12] = x, f[13] = h, f[14] = u) : u = f[14], u
            })
    }),
    pICO: (function(e, o, t) {
        var n = t("ABep"),
            a = t("QosV"),
            r = t("oyxz"),
            s = t("AlDs"),
            i = t("ygO2");

        function l(e) {
            let o, t, s, l, h, u, f, g, w, x, b, j, C, k = (0, a.c)(42),
                {
                    deepLink: _,
                    downloadPlatform: y,
                    status: D,
                    onOpen: M
                } = e,
                P = void 0 === D ? "opening" : D,
                T = "login" === P || "cli-login" === P;
            return k[0] !== T ? (o = T ? (0, n.jsx)(r.a, {
                id: "browser.codexDeeplink.signedIn",
                defaultMessage: "You’re signed in",
                description: "Heading on the desktop launcher page after browser authentication succeeds"
            }) : null, k[0] = T, k[1] = o) : o = k[1], k[2] !== P ? (t = "mobile" === P ? (0, n.jsx)(r.a, {
                id: "browser.codexDeeplink.mobileTitle",
                defaultMessage: "Open the ChatGPT desktop app on your computer",
                description: "Heading telling mobile users to use a computer to open a desktop app link"
            }) : null, k[2] = P, k[3] = t) : t = k[3], k[4] !== P ? (s = "opening" === P ? (0, n.jsx)(r.a, {
                id: "browser.codexDeeplink.title",
                defaultMessage: "Opening ChatGPT…",
                description: "Heading on a browser launcher page while it opens the ChatGPT desktop app with a chat or browser destination"
            }) : null, k[4] = P, k[5] = s) : s = k[5], k[6] !== o || k[7] !== t || k[8] !== s ? (l = (0, n.jsxs)("h1", {
                className: "text-3xl font-semibold",
                children: [o, t, s]
            }), k[6] = o, k[7] = t, k[8] = s, k[9] = l) : l = k[9], k[10] !== T ? (h = T ? (0, n.jsx)("p", {
                className: "text-secondary",
                children: (0, n.jsx)(r.a, {
                    id: "browser.codexDeeplink.signedInBody",
                    defaultMessage: "You’re signed in and may close this tab",
                    description: "Confirmation after desktop or CLI login finishes in the browser; closing the tab does not interrupt authentication"
                })
            }) : null, k[10] = T, k[11] = h) : h = k[11], k[12] !== P ? (u = "opening" === P ? (0, n.jsx)("p", {
                className: "text-secondary",
                children: (0, n.jsx)(r.a, {
                    id: "browser.codexDeeplink.body",
                    defaultMessage: "We're trying to open ChatGPT automatically. If nothing happens, download the app and try opening it again.",
                    description: "Instructions on the browser launcher page if automatic opening of a chat in the ChatGPT desktop app does not work"
                })
            }) : null, k[12] = P, k[13] = u) : u = k[13], k[14] !== _ || k[15] !== T ? (f = null != _ || T ? null : (0, n.jsx)("p", {
                role: "alert",
                className: "text-secondary",
                children: (0, n.jsx)(r.a, {
                    id: "browser.codexDeeplink.missingDetails",
                    defaultMessage: "This link is missing the chat details ChatGPT needs to reopen your work",
                    description: "Error on the browser launcher page when the chat or browser URL is missing or invalid, so opening the desktop app is unavailable"
                })
            }), k[14] = _, k[15] = T, k[16] = f) : f = k[16], k[17] !== y || k[18] !== P ? (g = "opening" === P && "windows" === y ? (0, n.jsx)(i.a, {
                color: "primary",
                size: "auth",
                onClick: m,
                children: (0, n.jsx)(r.a, {
                    id: "browser.codexDeeplink.download",
                    defaultMessage: "Download the app",
                    description: "Download button on the browser launcher page for installing the ChatGPT desktop app without losing the chat link"
                })
            }) : null, k[17] = y, k[18] = P, k[19] = g) : g = k[19], k[20] !== y || k[21] !== P ? (w = "opening" === P && "mac" === y ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(i.a, {
                    color: "primary",
                    size: "auth",
                    onClick: d,
                    children: (0, n.jsx)(r.a, {
                        id: "browser.codexDeeplink.downloadAppleSilicon",
                        defaultMessage: "Download for Apple Silicon",
                        description: "Download button on the browser launcher page for the Apple Silicon version of the ChatGPT desktop app"
                    })
                }), (0, n.jsx)(i.a, {
                    color: "outlineSurface",
                    size: "auth",
                    onClick: c,
                    children: (0, n.jsx)(r.a, {
                        id: "browser.codexDeeplink.downloadIntel",
                        defaultMessage: "Download for Intel Mac",
                        description: "Download button on the browser launcher page for the Intel Mac version of the ChatGPT desktop app"
                    })
                })]
            }) : null, k[20] = y, k[21] = P, k[22] = w) : w = k[22], k[23] !== P ? (x = "mobile" === P ? (0, n.jsx)(i.a, {
                color: "primary",
                size: "auth",
                onClick: p,
                children: (0, n.jsx)(r.a, {
                    id: "browser.codexDeeplink.learnMore",
                    defaultMessage: "Learn more",
                    description: "Link from the mobile desktop-launcher page to information about downloading the desktop app"
                })
            }) : null, k[23] = P, k[24] = x) : x = k[24], k[25] !== _ || k[26] !== y || k[27] !== T || k[28] !== M || k[29] !== P ? (b = "mobile" !== P && "cli-login" !== P ? (0, n.jsx)(i.a, {
                color: null == y || T ? "primary" : "outlineSurface",
                size: "auth",
                disabled: null == _,
                onClick: M,
                children: (0, n.jsx)(r.a, {
                    id: "browser.codexDeeplink.open",
                    defaultMessage: "Open ChatGPT",
                    description: "Retry button on the browser launcher page for opening a chat in the ChatGPT desktop app"
                })
            }) : null, k[25] = _, k[26] = y, k[27] = T, k[28] = M, k[29] = P, k[30] = b) : b = k[30], k[31] !== w || k[32] !== x || k[33] !== b || k[34] !== g ? (j = (0, n.jsxs)("div", {
                className: "flex flex-col gap-3",
                children: [g, w, x, b]
            }), k[31] = w, k[32] = x, k[33] = b, k[34] = g, k[35] = j) : j = k[35], k[36] !== j || k[37] !== l || k[38] !== h || k[39] !== u || k[40] !== f ? (C = (0, n.jsx)("main", {
                className: "flex min-h-screen flex-col items-center justify-center bg-surface px-6 py-12 text-default select-none",
                children: (0, n.jsxs)("div", {
                    className: "flex w-full max-w-md flex-col gap-5",
                    children: [l, h, u, f, j]
                })
            }), k[36] = j, k[37] = l, k[38] = h, k[39] = u, k[40] = f, k[41] = C) : C = k[41], C
        }

        function p() {
            return h("https://chatgpt.com/download")
        }

        function c() {
            return h("https://persistent.oaistatic.com/codex-app-prod/ChatGPT-latest-x64.dmg")
        }

        function d() {
            return h("https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg")
        }

        function m() {
            return h("https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi")
        }

        function h(e) {
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
} from "./633146.3772bb65f2.js";
import * as o from "./680612.8ff2f414f1.js";
e.C(o);
import * as t from "./418851.f73cc339e0.js";
e.C(t);
import * as n from "./109308.7514f132d4.js";
e.C(n);
import * as a from "./399565.7c41a02089.js";
e.C(a);
import * as r from "./257798.d071083f55.js";
e.C(r);
import * as s from "./447351.235d9feb9b.js";
e.C(s);
import * as i from "./617936.5a9a90c450.js";
e.C(i);
import * as l from "./807489.8dca38b3d3.js";
e.C(l);
import * as p from "./337882.9e5e4eca02.js";
e.C(p);
import * as c from "./955979.48571145f4.js";
e.C(c);
import * as d from "./646436.7c73091269.js";
e.C(d);
import * as m from "./7078.2bd0b87ab7.js";
e.C(m);
import * as h from "./200429.2bc20b9a34.js";
e.C(h);
import * as u from "./698524.b544aec8f4.js";
e.C(u);
import * as f from "./956483.be04337593.js";
e.C(f);
import * as g from "./87162.ad1e3760e6.js";
e.C(g);
import * as w from "./396705.8045a843b9.js";
e.C(w);
import * as x from "./155568.dca4d10394.js";
e.C(x);
import * as b from "./731863.f83b49d43f.js";
e.C(b);
import * as j from "./767086.e5c70972cb.js";
e.C(j);
import * as C from "./76629.6e18d367a6.js";
e.C(C);
import * as k from "./514085.399728d0f5.js";
e.C(k);
import * as _ from "./226913.f2de3ceb87.js";
e.C(_);
import * as y from "./965367.cddb1cc1ce.js";
e.C(y);
var D = e(e.s = "YOMI").a;
export {
    D as
    default
};