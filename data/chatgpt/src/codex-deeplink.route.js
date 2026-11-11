export const __rspack_esm_ids = [965367];
export const __webpack_modules__ = {
    LZjk: (function(e, o, t) {
        t.d(o, {
            a: () => m
        });
        var n = t("jqIZ"),
            a = t("ABep"),
            r = t("QosV"),
            s = t("BolX"),
            i = t("zd8w"),
            l = t("G8V1");
        t("rHrT");
        var d = t("WoME"),
            p = t("pICO"),
            c = t("eAav"),
            m = (0, n.hb)(function() {
                let e, o, t, m, h, u, f = (0, r.c)(17),
                    {
                        locale: g
                    } = (0, s.y)(c.a).value,
                    {
                        downloadPlatform: w,
                        isMobile: x,
                        messages: b
                    } = (0, n.X)(),
                    [j] = (0, n.gb)();
                f[0] !== j ? (e = function(e) {
                    if ("page" === e.get("target")) {
                        let o = e.getAll("page_id");
                        return 1 === o.length && d.a.test(o[0]) ? `codex://space/${encodeURIComponent(o[0])}` : null
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
                }(j), f[0] = j, f[1] = e) : e = f[1];
                let C = e;
                f[2] !== C || f[3] !== x ? (o = () => {
                    x || null == C || window.location.assign(C)
                }, t = [C, x], f[2] = C, f[3] = x, f[4] = o, f[5] = t) : (o = f[4], t = f[5]), (0, i.useEffect)(o, t);
                let k = x ? "mobile" : "opening";
                return f[6] !== C ? (m = () => {
                    null != C && window.location.assign(C)
                }, f[6] = C, f[7] = m) : m = f[7], f[8] !== C || f[9] !== w || f[10] !== k || f[11] !== m ? (h = (0, a.jsx)(p.a, {
                    downloadPlatform: w,
                    deepLink: C,
                    status: k,
                    onOpen: m
                }), f[8] = C, f[9] = w, f[10] = k, f[11] = m, f[12] = h) : h = f[12], f[13] !== g || f[14] !== b || f[15] !== h ? (u = (0, a.jsx)(l.a, {
                    locale: g,
                    defaultLocale: "en-US",
                    messages: b,
                    children: h
                }), f[13] = g, f[14] = b, f[15] = h, f[16] = u) : u = f[16], u
            })
    }),
    pICO: (function(e, o, t) {
        var n = t("ABep"),
            a = t("QosV"),
            r = t("oyxz"),
            s = t("AlDs"),
            i = t("Sm6l");

        function l() {
            return m("https://chatgpt.com/download")
        }

        function d() {
            return m("https://persistent.oaistatic.com/codex-app-prod/ChatGPT-latest-x64.dmg")
        }

        function p() {
            return m("https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg")
        }

        function c() {
            return m("https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi")
        }

        function m(e) {
            "https://chatgpt.com/download" !== e && (0, s.b)("codex-download", {
                allowUnauthenticatedTracking: !0
            }), window.open(e, "_blank", "noopener,noreferrer")
        }
        t.d(o, {}, {
            a: function(e) {
                let o, t, s, m, h, u, f, g, w, x, b, j, C, k = (0, a.c)(42),
                    {
                        deepLink: y,
                        downloadPlatform: D,
                        status: _,
                        onOpen: P
                    } = e,
                    T = void 0 === _ ? "opening" : _,
                    G = "login" === T || "cli-login" === T;
                return k[0] !== G ? (o = G ? (0, n.jsx)(r.a, {
                    id: "browser.codexDeeplink.signedIn",
                    defaultMessage: "You’re signed in",
                    description: "Heading on the desktop launcher page after browser authentication succeeds"
                }) : null, k[0] = G, k[1] = o) : o = k[1], k[2] !== T ? (t = "mobile" === T ? (0, n.jsx)(r.a, {
                    id: "browser.codexDeeplink.mobileTitle",
                    defaultMessage: "Open the ChatGPT desktop app on your computer",
                    description: "Heading telling mobile users to use a computer to open a desktop app link"
                }) : null, k[2] = T, k[3] = t) : t = k[3], k[4] !== T ? (s = "opening" === T ? (0, n.jsx)(r.a, {
                    id: "browser.codexDeeplink.title",
                    defaultMessage: "Opening ChatGPT…",
                    description: "Heading on a browser launcher page while it opens the ChatGPT desktop app with a chat or browser destination"
                }) : null, k[4] = T, k[5] = s) : s = k[5], k[6] !== o || k[7] !== t || k[8] !== s ? (m = (0, n.jsxs)("h1", {
                    className: "text-3xl font-semibold",
                    children: [o, t, s]
                }), k[6] = o, k[7] = t, k[8] = s, k[9] = m) : m = k[9], k[10] !== G ? (h = G ? (0, n.jsx)("p", {
                    className: "text-secondary",
                    children: (0, n.jsx)(r.a, {
                        id: "browser.codexDeeplink.signedInBody",
                        defaultMessage: "You’re signed in and may close this tab",
                        description: "Confirmation after desktop or CLI login finishes in the browser; closing the tab does not interrupt authentication"
                    })
                }) : null, k[10] = G, k[11] = h) : h = k[11], k[12] !== T ? (u = "opening" === T ? (0, n.jsx)("p", {
                    className: "text-secondary",
                    children: (0, n.jsx)(r.a, {
                        id: "browser.codexDeeplink.body",
                        defaultMessage: "We're trying to open ChatGPT automatically. If nothing happens, download the app and try opening it again.",
                        description: "Instructions on the browser launcher page if automatic opening of a chat in the ChatGPT desktop app does not work"
                    })
                }) : null, k[12] = T, k[13] = u) : u = k[13], k[14] !== y || k[15] !== G ? (f = null != y || G ? null : (0, n.jsx)("p", {
                    role: "alert",
                    className: "text-secondary",
                    children: (0, n.jsx)(r.a, {
                        id: "browser.codexDeeplink.missingDetails",
                        defaultMessage: "This link is missing the chat details ChatGPT needs to reopen your work",
                        description: "Error on the browser launcher page when the chat or browser URL is missing or invalid, so opening the desktop app is unavailable"
                    })
                }), k[14] = y, k[15] = G, k[16] = f) : f = k[16], k[17] !== D || k[18] !== T ? (g = "opening" === T && "windows" === D ? (0, n.jsx)(i.a, {
                    color: "primary",
                    size: "auth",
                    onClick: c,
                    children: (0, n.jsx)(r.a, {
                        id: "browser.codexDeeplink.download",
                        defaultMessage: "Download the app",
                        description: "Download button on the browser launcher page for installing the ChatGPT desktop app without losing the chat link"
                    })
                }) : null, k[17] = D, k[18] = T, k[19] = g) : g = k[19], k[20] !== D || k[21] !== T ? (w = "opening" === T && "mac" === D ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(i.a, {
                        color: "primary",
                        size: "auth",
                        onClick: p,
                        children: (0, n.jsx)(r.a, {
                            id: "browser.codexDeeplink.downloadAppleSilicon",
                            defaultMessage: "Download for Apple Silicon",
                            description: "Download button on the browser launcher page for the Apple Silicon version of the ChatGPT desktop app"
                        })
                    }), (0, n.jsx)(i.a, {
                        color: "outlineSurface",
                        size: "auth",
                        onClick: d,
                        children: (0, n.jsx)(r.a, {
                            id: "browser.codexDeeplink.downloadIntel",
                            defaultMessage: "Download for Intel Mac",
                            description: "Download button on the browser launcher page for the Intel Mac version of the ChatGPT desktop app"
                        })
                    })]
                }) : null, k[20] = D, k[21] = T, k[22] = w) : w = k[22], k[23] !== T ? (x = "mobile" === T ? (0, n.jsx)(i.a, {
                    color: "primary",
                    size: "auth",
                    onClick: l,
                    children: (0, n.jsx)(r.a, {
                        id: "browser.codexDeeplink.learnMore",
                        defaultMessage: "Learn more",
                        description: "Link from the mobile desktop-launcher page to information about downloading the desktop app"
                    })
                }) : null, k[23] = T, k[24] = x) : x = k[24], k[25] !== y || k[26] !== D || k[27] !== G || k[28] !== P || k[29] !== T ? (b = "mobile" !== T && "cli-login" !== T ? (0, n.jsx)(i.a, {
                    color: null == D || G ? "primary" : "outlineSurface",
                    size: "auth",
                    disabled: null == y,
                    onClick: P,
                    children: (0, n.jsx)(r.a, {
                        id: "browser.codexDeeplink.open",
                        defaultMessage: "Open ChatGPT",
                        description: "Retry button on the browser launcher page for opening a chat in the ChatGPT desktop app"
                    })
                }) : null, k[25] = y, k[26] = D, k[27] = G, k[28] = P, k[29] = T, k[30] = b) : b = k[30], k[31] !== w || k[32] !== x || k[33] !== b || k[34] !== g ? (j = (0, n.jsxs)("div", {
                    className: "flex flex-col gap-3",
                    children: [g, w, x, b]
                }), k[31] = w, k[32] = x, k[33] = b, k[34] = g, k[35] = j) : j = k[35], k[36] !== j || k[37] !== m || k[38] !== h || k[39] !== u || k[40] !== f ? (C = (0, n.jsx)("main", {
                    className: "flex min-h-screen flex-col items-center justify-center bg-surface px-6 py-12 text-default select-none",
                    children: (0, n.jsxs)("div", {
                        className: "flex w-full max-w-md flex-col gap-5",
                        children: [m, h, u, f, j]
                    })
                }), k[36] = j, k[37] = m, k[38] = h, k[39] = u, k[40] = f, k[41] = C) : C = k[41], C
            }
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.acefa13d1a.js";
import * as o from "./680612.3c8d72f22d.js";
e.C(o);
import * as t from "./418851.4b043c43bc.js";
e.C(t);
import * as n from "./109308.e66696cd0d.js";
e.C(n);
import * as a from "./399565.2fc4679b26.js";
e.C(a);
import * as r from "./257798.b51742efd5.js";
e.C(r);
import * as s from "./447351.496da706c3.js";
e.C(s);
import * as i from "./617936.dcbf382e63.js";
e.C(i);
import * as l from "./807489.7f5d47cb0e.js";
e.C(l);
import * as d from "./337882.f22d43d615.js";
e.C(d);
import * as p from "./955979.d659318431.js";
e.C(p);
import * as c from "./646436.30c2553f0b.js";
e.C(c);
import * as m from "./7078.5cd07a5c9b.js";
e.C(m);
import * as h from "./200429.82d37d45f2.js";
e.C(h);
import * as u from "./698524.1d78dbab32.js";
e.C(u);
import * as f from "./956483.4fffedad3f.js";
e.C(f);
import * as g from "./87162.ceb3023033.js";
e.C(g);
import * as w from "./396705.74bbf371c4.js";
e.C(w);
import * as x from "./155568.8fe9b1a879.js";
e.C(x);
import * as b from "./731863.e2c3850b56.js";
e.C(b);
import * as j from "./767086.e730a8ccb4.js";
e.C(j);
import * as C from "./76629.0f4df00a80.js";
e.C(C);
import * as k from "./226913.27c93050ff.js";
e.C(k);
import * as y from "./965367.bb67282328.js";
e.C(y);
var D = e(e.s = "LZjk").a;
export {
    D as
    default
};