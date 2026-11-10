export const __rspack_esm_ids = [965367];
export const __webpack_modules__ = {
    LZjk: (function(e, o, t) {
        t.d(o, {
            a: () => m
        });
        var a = t("jqIZ"),
            n = t("ABep"),
            r = t("QosV"),
            s = t("BolX"),
            i = t("zd8w"),
            l = t("G8V1");
        t("rHrT");
        var p = t("WoME"),
            d = t("pICO"),
            c = t("eAav"),
            m = (0, a.hb)(function() {
                let e, o, t, m, f, h, u = (0, r.c)(17),
                    {
                        locale: g
                    } = (0, s.y)(c.a).value,
                    {
                        downloadPlatform: b,
                        isMobile: w,
                        messages: j
                    } = (0, a.X)(),
                    [x] = (0, a.gb)();
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
                let C = e;
                u[2] !== C || u[3] !== w ? (o = () => {
                    w || null == C || window.location.assign(C)
                }, t = [C, w], u[2] = C, u[3] = w, u[4] = o, u[5] = t) : (o = u[4], t = u[5]), (0, i.useEffect)(o, t);
                let k = w ? "mobile" : "opening";
                return u[6] !== C ? (m = () => {
                    null != C && window.location.assign(C)
                }, u[6] = C, u[7] = m) : m = u[7], u[8] !== C || u[9] !== b || u[10] !== k || u[11] !== m ? (f = (0, n.jsx)(d.a, {
                    downloadPlatform: b,
                    deepLink: C,
                    status: k,
                    onOpen: m
                }), u[8] = C, u[9] = b, u[10] = k, u[11] = m, u[12] = f) : f = u[12], u[13] !== g || u[14] !== j || u[15] !== f ? (h = (0, n.jsx)(l.a, {
                    locale: g,
                    defaultLocale: "en-US",
                    messages: j,
                    children: f
                }), u[13] = g, u[14] = j, u[15] = f, u[16] = h) : h = u[16], h
            })
    }),
    pICO: (function(e, o, t) {
        var a = t("ABep"),
            n = t("QosV"),
            r = t("oyxz"),
            s = t("AlDs"),
            i = t("Sm6l");

        function l() {
            return m("https://chatgpt.com/download")
        }

        function p() {
            return m("https://persistent.oaistatic.com/codex-app-prod/ChatGPT-latest-x64.dmg")
        }

        function d() {
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
                let o, t, s, m, f, h, u, g, b, w, j, x, C, k = (0, n.c)(42),
                    {
                        deepLink: y,
                        downloadPlatform: D,
                        status: _,
                        onOpen: P
                    } = e,
                    T = void 0 === _ ? "opening" : _,
                    G = "login" === T || "cli-login" === T;
                return k[0] !== G ? (o = G ? (0, a.jsx)(r.a, {
                    id: "browser.codexDeeplink.signedIn",
                    defaultMessage: "You’re signed in",
                    description: "Heading on the desktop launcher page after browser authentication succeeds"
                }) : null, k[0] = G, k[1] = o) : o = k[1], k[2] !== T ? (t = "mobile" === T ? (0, a.jsx)(r.a, {
                    id: "browser.codexDeeplink.mobileTitle",
                    defaultMessage: "Open the ChatGPT desktop app on your computer",
                    description: "Heading telling mobile users to use a computer to open a desktop app link"
                }) : null, k[2] = T, k[3] = t) : t = k[3], k[4] !== T ? (s = "opening" === T ? (0, a.jsx)(r.a, {
                    id: "browser.codexDeeplink.title",
                    defaultMessage: "Opening ChatGPT…",
                    description: "Heading on a browser launcher page while it opens the ChatGPT desktop app with a chat or browser destination"
                }) : null, k[4] = T, k[5] = s) : s = k[5], k[6] !== o || k[7] !== t || k[8] !== s ? (m = (0, a.jsxs)("h1", {
                    className: "text-3xl font-semibold",
                    children: [o, t, s]
                }), k[6] = o, k[7] = t, k[8] = s, k[9] = m) : m = k[9], k[10] !== G ? (f = G ? (0, a.jsx)("p", {
                    className: "text-secondary",
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.signedInBody",
                        defaultMessage: "You’re signed in and may close this tab",
                        description: "Confirmation after desktop or CLI login finishes in the browser; closing the tab does not interrupt authentication"
                    })
                }) : null, k[10] = G, k[11] = f) : f = k[11], k[12] !== T ? (h = "opening" === T ? (0, a.jsx)("p", {
                    className: "text-secondary",
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.body",
                        defaultMessage: "We're trying to open ChatGPT automatically. If nothing happens, download the app and try opening it again.",
                        description: "Instructions on the browser launcher page if automatic opening of a chat in the ChatGPT desktop app does not work"
                    })
                }) : null, k[12] = T, k[13] = h) : h = k[13], k[14] !== y || k[15] !== G ? (u = null != y || G ? null : (0, a.jsx)("p", {
                    role: "alert",
                    className: "text-secondary",
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.missingDetails",
                        defaultMessage: "This link is missing the chat details ChatGPT needs to reopen your work",
                        description: "Error on the browser launcher page when the chat or browser URL is missing or invalid, so opening the desktop app is unavailable"
                    })
                }), k[14] = y, k[15] = G, k[16] = u) : u = k[16], k[17] !== D || k[18] !== T ? (g = "opening" === T && "windows" === D ? (0, a.jsx)(i.a, {
                    color: "primary",
                    size: "auth",
                    onClick: c,
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.download",
                        defaultMessage: "Download the app",
                        description: "Download button on the browser launcher page for installing the ChatGPT desktop app without losing the chat link"
                    })
                }) : null, k[17] = D, k[18] = T, k[19] = g) : g = k[19], k[20] !== D || k[21] !== T ? (b = "opening" === T && "mac" === D ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.a, {
                        color: "primary",
                        size: "auth",
                        onClick: d,
                        children: (0, a.jsx)(r.a, {
                            id: "browser.codexDeeplink.downloadAppleSilicon",
                            defaultMessage: "Download for Apple Silicon",
                            description: "Download button on the browser launcher page for the Apple Silicon version of the ChatGPT desktop app"
                        })
                    }), (0, a.jsx)(i.a, {
                        color: "outlineSurface",
                        size: "auth",
                        onClick: p,
                        children: (0, a.jsx)(r.a, {
                            id: "browser.codexDeeplink.downloadIntel",
                            defaultMessage: "Download for Intel Mac",
                            description: "Download button on the browser launcher page for the Intel Mac version of the ChatGPT desktop app"
                        })
                    })]
                }) : null, k[20] = D, k[21] = T, k[22] = b) : b = k[22], k[23] !== T ? (w = "mobile" === T ? (0, a.jsx)(i.a, {
                    color: "primary",
                    size: "auth",
                    onClick: l,
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.learnMore",
                        defaultMessage: "Learn more",
                        description: "Link from the mobile desktop-launcher page to information about downloading the desktop app"
                    })
                }) : null, k[23] = T, k[24] = w) : w = k[24], k[25] !== y || k[26] !== D || k[27] !== G || k[28] !== P || k[29] !== T ? (j = "mobile" !== T && "cli-login" !== T ? (0, a.jsx)(i.a, {
                    color: null == D || G ? "primary" : "outlineSurface",
                    size: "auth",
                    disabled: null == y,
                    onClick: P,
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.open",
                        defaultMessage: "Open ChatGPT",
                        description: "Retry button on the browser launcher page for opening a chat in the ChatGPT desktop app"
                    })
                }) : null, k[25] = y, k[26] = D, k[27] = G, k[28] = P, k[29] = T, k[30] = j) : j = k[30], k[31] !== b || k[32] !== w || k[33] !== j || k[34] !== g ? (x = (0, a.jsxs)("div", {
                    className: "flex flex-col gap-3",
                    children: [g, b, w, j]
                }), k[31] = b, k[32] = w, k[33] = j, k[34] = g, k[35] = x) : x = k[35], k[36] !== x || k[37] !== m || k[38] !== f || k[39] !== h || k[40] !== u ? (C = (0, a.jsx)("main", {
                    className: "flex min-h-screen flex-col items-center justify-center bg-surface px-6 py-12 text-default select-none",
                    children: (0, a.jsxs)("div", {
                        className: "flex w-full max-w-md flex-col gap-5",
                        children: [m, f, h, u, x]
                    })
                }), k[36] = x, k[37] = m, k[38] = f, k[39] = h, k[40] = u, k[41] = C) : C = k[41], C
            }
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.79c7577f6d.js";
import * as o from "./680612.3c8d72f22d.js";
e.C(o);
import * as t from "./418851.4cf783e1e4.js";
e.C(t);
import * as a from "./109308.fbb414d4aa.js";
e.C(a);
import * as n from "./399565.ed5e74a86b.js";
e.C(n);
import * as r from "./257798.0b3d6025cd.js";
e.C(r);
import * as s from "./153380.6675e448cd.js";
e.C(s);
import * as i from "./617936.5a72737818.js";
e.C(i);
import * as l from "./807489.54f5772d0d.js";
e.C(l);
import * as p from "./337882.26e5bd2b09.js";
e.C(p);
import * as d from "./955979.c158e14c67.js";
e.C(d);
import * as c from "./646436.73183b8431.js";
e.C(c);
import * as m from "./7078.92e3c91286.js";
e.C(m);
import * as f from "./200429.073fa1ac67.js";
e.C(f);
import * as h from "./698524.d0f80a4f75.js";
e.C(h);
import * as u from "./956483.7057f5dd90.js";
e.C(u);
import * as g from "./87162.29ee0bd2a9.js";
e.C(g);
import * as b from "./396705.c39944bbf2.js";
e.C(b);
import * as w from "./155568.7bbfb72b85.js";
e.C(w);
import * as j from "./731863.8b87e9728a.js";
e.C(j);
import * as x from "./767086.6da4be4bcc.js";
e.C(x);
import * as C from "./76629.4a3def3f3d.js";
e.C(C);
import * as k from "./514085.fce2779453.js";
e.C(k);
import * as y from "./204542.ebe6ed48ad.js";
e.C(y);
import * as D from "./982651.7bfd071e83.js";
e.C(D);
import * as _ from "./673108.aaf568e9f3.js";
e.C(_);
import * as P from "./487481.699d7b5953.js";
e.C(P);
import * as T from "./229522.110e65fd00.js";
e.C(T);
import * as G from "./390575.8e5cb2c01a.js";
e.C(G);
import * as M from "./353032.9312ae4acb.js";
e.C(M);
import * as v from "./637885.3e8c638fde.js";
e.C(v);
import * as I from "./226913.6965f848b1.js";
e.C(I);
import * as L from "./965367.a19f71b6ed.js";
e.C(L);
var S = e(e.s = "LZjk").a;
export {
    S as
    default
};