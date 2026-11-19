export const __rspack_esm_ids = [965367];
export const __webpack_modules__ = {
    LQWP: (function(e, o, t) {
        t.d(o, {
            a: () => m
        });
        var n = t("rEML"),
            a = t("ABep"),
            r = t("QosV"),
            s = t("Q840"),
            i = t("zd8w"),
            l = t("G8V1");
        t("rHrT");
        var d = t("WoME"),
            p = t("pICO"),
            c = t("eAav"),
            m = (0, n.kb)(function() {
                let e, o, t, m, u, h, f = (0, r.c)(17),
                    {
                        locale: g
                    } = (0, s.y)(c.a).value,
                    {
                        downloadPlatform: w,
                        isMobile: b,
                        messages: x
                    } = (0, n.Y)(),
                    [j] = (0, n.jb)();
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
                    if (0 === t.searchParams.size) return null;
                    for (let o of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
                        let n = e.get(o)?.trim();
                        n && t.searchParams.set(o, n)
                    }
                    return t.toString()
                }(j), f[0] = j, f[1] = e) : e = f[1];
                let C = e;
                f[2] !== C || f[3] !== b ? (o = () => {
                    b || null == C || window.location.assign(C)
                }, t = [C, b], f[2] = C, f[3] = b, f[4] = o, f[5] = t) : (o = f[4], t = f[5]), (0, i.useEffect)(o, t);
                let k = b ? "mobile" : "opening";
                return f[6] !== C ? (m = () => {
                    null != C && window.location.assign(C)
                }, f[6] = C, f[7] = m) : m = f[7], f[8] !== C || f[9] !== w || f[10] !== k || f[11] !== m ? (u = (0, a.jsx)(p.a, {
                    downloadPlatform: w,
                    deepLink: C,
                    status: k,
                    onOpen: m
                }), f[8] = C, f[9] = w, f[10] = k, f[11] = m, f[12] = u) : u = f[12], f[13] !== g || f[14] !== x || f[15] !== u ? (h = (0, a.jsx)(l.a, {
                    locale: g,
                    defaultLocale: "en-US",
                    messages: x,
                    children: u
                }), f[13] = g, f[14] = x, f[15] = u, f[16] = h) : h = f[16], h
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
                let o, t, s, m, u, h, f, g, w, b, x, j, C, k = (0, a.c)(42),
                    {
                        deepLink: _,
                        downloadPlatform: y,
                        status: P,
                        onOpen: D
                    } = e,
                    M = void 0 === P ? "opening" : P,
                    T = "login" === M || "cli-login" === M;
                return k[0] !== T ? (o = T ? (0, n.jsx)(r.a, {
                    id: "browser.codexDeeplink.signedIn",
                    defaultMessage: "You’re signed in"
                }) : null, k[0] = T, k[1] = o) : o = k[1], k[2] !== M ? (t = "mobile" === M ? (0, n.jsx)(r.a, {
                    id: "browser.codexDeeplink.mobileTitle",
                    defaultMessage: "Open the ChatGPT desktop app on your computer"
                }) : null, k[2] = M, k[3] = t) : t = k[3], k[4] !== M ? (s = "opening" === M ? (0, n.jsx)(r.a, {
                    id: "browser.codexDeeplink.title",
                    defaultMessage: "Opening ChatGPT…"
                }) : null, k[4] = M, k[5] = s) : s = k[5], k[6] !== o || k[7] !== t || k[8] !== s ? (m = (0, n.jsxs)("h1", {
                    className: "text-3xl font-semibold",
                    children: [o, t, s]
                }), k[6] = o, k[7] = t, k[8] = s, k[9] = m) : m = k[9], k[10] !== T ? (u = T ? (0, n.jsx)("p", {
                    className: "text-secondary",
                    children: (0, n.jsx)(r.a, {
                        id: "browser.codexDeeplink.signedInBody",
                        defaultMessage: "You’re signed in and may close this tab"
                    })
                }) : null, k[10] = T, k[11] = u) : u = k[11], k[12] !== M ? (h = "opening" === M ? (0, n.jsx)("p", {
                    className: "text-secondary",
                    children: (0, n.jsx)(r.a, {
                        id: "browser.codexDeeplink.body",
                        defaultMessage: "We're trying to open ChatGPT automatically. If nothing happens, download the app and try opening it again."
                    })
                }) : null, k[12] = M, k[13] = h) : h = k[13], k[14] !== _ || k[15] !== T ? (f = null != _ || T ? null : (0, n.jsx)("p", {
                    role: "alert",
                    className: "text-secondary",
                    children: (0, n.jsx)(r.a, {
                        id: "browser.codexDeeplink.missingDetails",
                        defaultMessage: "This link is missing the chat details ChatGPT needs to reopen your work"
                    })
                }), k[14] = _, k[15] = T, k[16] = f) : f = k[16], k[17] !== y || k[18] !== M ? (g = "opening" === M && "windows" === y ? (0, n.jsx)(i.a, {
                    color: "primary",
                    size: "auth",
                    onClick: c,
                    children: (0, n.jsx)(r.a, {
                        id: "browser.codexDeeplink.download",
                        defaultMessage: "Download the app"
                    })
                }) : null, k[17] = y, k[18] = M, k[19] = g) : g = k[19], k[20] !== y || k[21] !== M ? (w = "opening" === M && "mac" === y ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(i.a, {
                        color: "primary",
                        size: "auth",
                        onClick: p,
                        children: (0, n.jsx)(r.a, {
                            id: "browser.codexDeeplink.downloadAppleSilicon",
                            defaultMessage: "Download for Apple Silicon"
                        })
                    }), (0, n.jsx)(i.a, {
                        color: "outlineSurface",
                        size: "auth",
                        onClick: d,
                        children: (0, n.jsx)(r.a, {
                            id: "browser.codexDeeplink.downloadIntel",
                            defaultMessage: "Download for Intel Mac"
                        })
                    })]
                }) : null, k[20] = y, k[21] = M, k[22] = w) : w = k[22], k[23] !== M ? (b = "mobile" === M ? (0, n.jsx)(i.a, {
                    color: "primary",
                    size: "auth",
                    onClick: l,
                    children: (0, n.jsx)(r.a, {
                        id: "browser.codexDeeplink.learnMore",
                        defaultMessage: "Learn more"
                    })
                }) : null, k[23] = M, k[24] = b) : b = k[24], k[25] !== _ || k[26] !== y || k[27] !== T || k[28] !== D || k[29] !== M ? (x = "mobile" !== M && "cli-login" !== M ? (0, n.jsx)(i.a, {
                    color: null == y || T ? "primary" : "outlineSurface",
                    size: "auth",
                    disabled: null == _,
                    onClick: D,
                    children: (0, n.jsx)(r.a, {
                        id: "browser.codexDeeplink.open",
                        defaultMessage: "Open ChatGPT"
                    })
                }) : null, k[25] = _, k[26] = y, k[27] = T, k[28] = D, k[29] = M, k[30] = x) : x = k[30], k[31] !== w || k[32] !== b || k[33] !== x || k[34] !== g ? (j = (0, n.jsxs)("div", {
                    className: "flex flex-col gap-3",
                    children: [g, w, b, x]
                }), k[31] = w, k[32] = b, k[33] = x, k[34] = g, k[35] = j) : j = k[35], k[36] !== j || k[37] !== m || k[38] !== u || k[39] !== h || k[40] !== f ? (C = (0, n.jsx)("main", {
                    className: "flex min-h-screen flex-col items-center justify-center bg-surface px-6 py-12 text-default select-none",
                    children: (0, n.jsxs)("div", {
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
} from "./633146.2ddddba2a5.js";
import * as o from "./680612.8dcfaab02b.js";
e.C(o);
import * as t from "./418851.f34514cc3f.js";
e.C(t);
import * as n from "./109308.8b09661749.js";
e.C(n);
import * as a from "./399565.edefe43a76.js";
e.C(a);
import * as r from "./257798.6b4268ddac.js";
e.C(r);
import * as s from "./447351.34d04099ca.js";
e.C(s);
import * as i from "./617936.4a1557f13c.js";
e.C(i);
import * as l from "./807489.6b5279adf3.js";
e.C(l);
import * as d from "./337882.568bafdf14.js";
e.C(d);
import * as p from "./955979.b2a7e19963.js";
e.C(p);
import * as c from "./646436.5963e38f02.js";
e.C(c);
import * as m from "./7078.0a9a41e515.js";
e.C(m);
import * as u from "./200429.a549930e29.js";
e.C(u);
import * as h from "./698524.48945354c5.js";
e.C(h);
import * as f from "./956483.962c0de04b.js";
e.C(f);
import * as g from "./87162.e4a69efaac.js";
e.C(g);
import * as w from "./396705.51be923e43.js";
e.C(w);
import * as b from "./155568.1f7b7a00a5.js";
e.C(b);
import * as x from "./731863.5a49a2d190.js";
e.C(x);
import * as j from "./767086.61b8f8fca3.js";
e.C(j);
import * as C from "./226913.cf105b979e.js";
e.C(C);
import * as k from "./965367.8c7902c9ed.js";
e.C(k);
var _ = e(e.s = "LQWP").a;
export {
    _ as
    default
};