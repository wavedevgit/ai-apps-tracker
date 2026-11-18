export const __rspack_esm_ids = [965367];
export const __webpack_modules__ = {
    LQWP: (function(e, o, t) {
        t.d(o, {
            a: () => m
        });
        var a = t("rEML"),
            n = t("ABep"),
            r = t("QosV"),
            s = t("Q840"),
            i = t("zd8w"),
            l = t("G8V1");
        t("rHrT");
        var p = t("WoME"),
            d = t("pICO"),
            c = t("eAav"),
            m = (0, a.hb)(function() {
                let e, o, t, m, u, h, f = (0, r.c)(17),
                    {
                        locale: g
                    } = (0, s.y)(c.a).value,
                    {
                        downloadPlatform: w,
                        isMobile: x,
                        messages: b
                    } = (0, a.W)(),
                    [j] = (0, a.gb)();
                f[0] !== j ? (e = function(e) {
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
                    if (0 === t.searchParams.size) return null;
                    for (let o of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
                        let a = e.get(o)?.trim();
                        a && t.searchParams.set(o, a)
                    }
                    return t.toString()
                }(j), f[0] = j, f[1] = e) : e = f[1];
                let C = e;
                f[2] !== C || f[3] !== x ? (o = () => {
                    x || null == C || window.location.assign(C)
                }, t = [C, x], f[2] = C, f[3] = x, f[4] = o, f[5] = t) : (o = f[4], t = f[5]), (0, i.useEffect)(o, t);
                let k = x ? "mobile" : "opening";
                return f[6] !== C ? (m = () => {
                    null != C && window.location.assign(C)
                }, f[6] = C, f[7] = m) : m = f[7], f[8] !== C || f[9] !== w || f[10] !== k || f[11] !== m ? (u = (0, n.jsx)(d.a, {
                    downloadPlatform: w,
                    deepLink: C,
                    status: k,
                    onOpen: m
                }), f[8] = C, f[9] = w, f[10] = k, f[11] = m, f[12] = u) : u = f[12], f[13] !== g || f[14] !== b || f[15] !== u ? (h = (0, n.jsx)(l.a, {
                    locale: g,
                    defaultLocale: "en-US",
                    messages: b,
                    children: u
                }), f[13] = g, f[14] = b, f[15] = u, f[16] = h) : h = f[16], h
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
                let o, t, s, m, u, h, f, g, w, x, b, j, C, k = (0, n.c)(42),
                    {
                        deepLink: _,
                        downloadPlatform: y,
                        status: P,
                        onOpen: D
                    } = e,
                    M = void 0 === P ? "opening" : P,
                    T = "login" === M || "cli-login" === M;
                return k[0] !== T ? (o = T ? (0, a.jsx)(r.a, {
                    id: "browser.codexDeeplink.signedIn",
                    defaultMessage: "You’re signed in"
                }) : null, k[0] = T, k[1] = o) : o = k[1], k[2] !== M ? (t = "mobile" === M ? (0, a.jsx)(r.a, {
                    id: "browser.codexDeeplink.mobileTitle",
                    defaultMessage: "Open the ChatGPT desktop app on your computer"
                }) : null, k[2] = M, k[3] = t) : t = k[3], k[4] !== M ? (s = "opening" === M ? (0, a.jsx)(r.a, {
                    id: "browser.codexDeeplink.title",
                    defaultMessage: "Opening ChatGPT…"
                }) : null, k[4] = M, k[5] = s) : s = k[5], k[6] !== o || k[7] !== t || k[8] !== s ? (m = (0, a.jsxs)("h1", {
                    className: "text-3xl font-semibold",
                    children: [o, t, s]
                }), k[6] = o, k[7] = t, k[8] = s, k[9] = m) : m = k[9], k[10] !== T ? (u = T ? (0, a.jsx)("p", {
                    className: "text-secondary",
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.signedInBody",
                        defaultMessage: "You’re signed in and may close this tab"
                    })
                }) : null, k[10] = T, k[11] = u) : u = k[11], k[12] !== M ? (h = "opening" === M ? (0, a.jsx)("p", {
                    className: "text-secondary",
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.body",
                        defaultMessage: "We're trying to open ChatGPT automatically. If nothing happens, download the app and try opening it again."
                    })
                }) : null, k[12] = M, k[13] = h) : h = k[13], k[14] !== _ || k[15] !== T ? (f = null != _ || T ? null : (0, a.jsx)("p", {
                    role: "alert",
                    className: "text-secondary",
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.missingDetails",
                        defaultMessage: "This link is missing the chat details ChatGPT needs to reopen your work"
                    })
                }), k[14] = _, k[15] = T, k[16] = f) : f = k[16], k[17] !== y || k[18] !== M ? (g = "opening" === M && "windows" === y ? (0, a.jsx)(i.a, {
                    color: "primary",
                    size: "auth",
                    onClick: c,
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.download",
                        defaultMessage: "Download the app"
                    })
                }) : null, k[17] = y, k[18] = M, k[19] = g) : g = k[19], k[20] !== y || k[21] !== M ? (w = "opening" === M && "mac" === y ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.a, {
                        color: "primary",
                        size: "auth",
                        onClick: d,
                        children: (0, a.jsx)(r.a, {
                            id: "browser.codexDeeplink.downloadAppleSilicon",
                            defaultMessage: "Download for Apple Silicon"
                        })
                    }), (0, a.jsx)(i.a, {
                        color: "outlineSurface",
                        size: "auth",
                        onClick: p,
                        children: (0, a.jsx)(r.a, {
                            id: "browser.codexDeeplink.downloadIntel",
                            defaultMessage: "Download for Intel Mac"
                        })
                    })]
                }) : null, k[20] = y, k[21] = M, k[22] = w) : w = k[22], k[23] !== M ? (x = "mobile" === M ? (0, a.jsx)(i.a, {
                    color: "primary",
                    size: "auth",
                    onClick: l,
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.learnMore",
                        defaultMessage: "Learn more"
                    })
                }) : null, k[23] = M, k[24] = x) : x = k[24], k[25] !== _ || k[26] !== y || k[27] !== T || k[28] !== D || k[29] !== M ? (b = "mobile" !== M && "cli-login" !== M ? (0, a.jsx)(i.a, {
                    color: null == y || T ? "primary" : "outlineSurface",
                    size: "auth",
                    disabled: null == _,
                    onClick: D,
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.open",
                        defaultMessage: "Open ChatGPT"
                    })
                }) : null, k[25] = _, k[26] = y, k[27] = T, k[28] = D, k[29] = M, k[30] = b) : b = k[30], k[31] !== w || k[32] !== x || k[33] !== b || k[34] !== g ? (j = (0, a.jsxs)("div", {
                    className: "flex flex-col gap-3",
                    children: [g, w, x, b]
                }), k[31] = w, k[32] = x, k[33] = b, k[34] = g, k[35] = j) : j = k[35], k[36] !== j || k[37] !== m || k[38] !== u || k[39] !== h || k[40] !== f ? (C = (0, a.jsx)("main", {
                    className: "flex min-h-screen flex-col items-center justify-center bg-surface px-6 py-12 text-default select-none",
                    children: (0, a.jsxs)("div", {
                        className: "flex w-full max-w-md flex-col gap-5",
                        children: [m, u, h, f, j]
                    })
                }), k[36] = j, k[37] = m, k[38] = u, k[39] = h, k[40] = f, k[41] = C) : C = k[41], C
            }
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.332c5da428.js";
import * as o from "./680612.3c8d72f22d.js";
e.C(o);
import * as t from "./418851.3878fbfa64.js";
e.C(t);
import * as a from "./109308.4b30101b7c.js";
e.C(a);
import * as n from "./399565.de450ac543.js";
e.C(n);
import * as r from "./257798.b061e3b37a.js";
e.C(r);
import * as s from "./447351.690fba1ae5.js";
e.C(s);
import * as i from "./617936.c6f9e1ebfb.js";
e.C(i);
import * as l from "./807489.2ba5c6d996.js";
e.C(l);
import * as p from "./337882.799b00b0f3.js";
e.C(p);
import * as d from "./955979.eaf8541a67.js";
e.C(d);
import * as c from "./646436.611d2d0d1b.js";
e.C(c);
import * as m from "./7078.691a92af09.js";
e.C(m);
import * as u from "./200429.336411f62e.js";
e.C(u);
import * as h from "./698524.e12b58b33f.js";
e.C(h);
import * as f from "./956483.2514992fd3.js";
e.C(f);
import * as g from "./87162.1f25d59c9c.js";
e.C(g);
import * as w from "./396705.3e09ec2928.js";
e.C(w);
import * as x from "./155568.b02a981797.js";
e.C(x);
import * as b from "./731863.9e2b15b813.js";
e.C(b);
import * as j from "./767086.6cceb40294.js";
e.C(j);
import * as C from "./76629.0f65023578.js";
e.C(C);
import * as k from "./226913.c039047be5.js";
e.C(k);
import * as _ from "./965367.4560579c8e.js";
e.C(_);
var y = e(e.s = "LQWP").a;
export {
    y as
    default
};