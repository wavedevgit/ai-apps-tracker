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
                let e, o, t, m, h, u, f = (0, r.c)(17),
                    {
                        locale: g
                    } = (0, s.y)(c.a).value,
                    {
                        downloadPlatform: b,
                        isMobile: w,
                        messages: x
                    } = (0, a.X)(),
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
                    return t.searchParams.size > 0 ? t.toString() : null
                }(j), f[0] = j, f[1] = e) : e = f[1];
                let C = e;
                f[2] !== C || f[3] !== w ? (o = () => {
                    w || null == C || window.location.assign(C)
                }, t = [C, w], f[2] = C, f[3] = w, f[4] = o, f[5] = t) : (o = f[4], t = f[5]), (0, i.useEffect)(o, t);
                let k = w ? "mobile" : "opening";
                return f[6] !== C ? (m = () => {
                    null != C && window.location.assign(C)
                }, f[6] = C, f[7] = m) : m = f[7], f[8] !== C || f[9] !== b || f[10] !== k || f[11] !== m ? (h = (0, n.jsx)(d.a, {
                    downloadPlatform: b,
                    deepLink: C,
                    status: k,
                    onOpen: m
                }), f[8] = C, f[9] = b, f[10] = k, f[11] = m, f[12] = h) : h = f[12], f[13] !== g || f[14] !== x || f[15] !== h ? (u = (0, n.jsx)(l.a, {
                    locale: g,
                    defaultLocale: "en-US",
                    messages: x,
                    children: h
                }), f[13] = g, f[14] = x, f[15] = h, f[16] = u) : u = f[16], u
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
                let o, t, s, m, h, u, f, g, b, w, x, j, C, k = (0, n.c)(42),
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
                    defaultMessage: "You’re signed in"
                }) : null, k[0] = G, k[1] = o) : o = k[1], k[2] !== T ? (t = "mobile" === T ? (0, a.jsx)(r.a, {
                    id: "browser.codexDeeplink.mobileTitle",
                    defaultMessage: "Open the ChatGPT desktop app on your computer"
                }) : null, k[2] = T, k[3] = t) : t = k[3], k[4] !== T ? (s = "opening" === T ? (0, a.jsx)(r.a, {
                    id: "browser.codexDeeplink.title",
                    defaultMessage: "Opening ChatGPT…"
                }) : null, k[4] = T, k[5] = s) : s = k[5], k[6] !== o || k[7] !== t || k[8] !== s ? (m = (0, a.jsxs)("h1", {
                    className: "text-3xl font-semibold",
                    children: [o, t, s]
                }), k[6] = o, k[7] = t, k[8] = s, k[9] = m) : m = k[9], k[10] !== G ? (h = G ? (0, a.jsx)("p", {
                    className: "text-secondary",
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.signedInBody",
                        defaultMessage: "You’re signed in and may close this tab"
                    })
                }) : null, k[10] = G, k[11] = h) : h = k[11], k[12] !== T ? (u = "opening" === T ? (0, a.jsx)("p", {
                    className: "text-secondary",
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.body",
                        defaultMessage: "We're trying to open ChatGPT automatically. If nothing happens, download the app and try opening it again."
                    })
                }) : null, k[12] = T, k[13] = u) : u = k[13], k[14] !== y || k[15] !== G ? (f = null != y || G ? null : (0, a.jsx)("p", {
                    role: "alert",
                    className: "text-secondary",
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.missingDetails",
                        defaultMessage: "This link is missing the chat details ChatGPT needs to reopen your work"
                    })
                }), k[14] = y, k[15] = G, k[16] = f) : f = k[16], k[17] !== D || k[18] !== T ? (g = "opening" === T && "windows" === D ? (0, a.jsx)(i.a, {
                    color: "primary",
                    size: "auth",
                    onClick: c,
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.download",
                        defaultMessage: "Download the app"
                    })
                }) : null, k[17] = D, k[18] = T, k[19] = g) : g = k[19], k[20] !== D || k[21] !== T ? (b = "opening" === T && "mac" === D ? (0, a.jsxs)(a.Fragment, {
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
                }) : null, k[20] = D, k[21] = T, k[22] = b) : b = k[22], k[23] !== T ? (w = "mobile" === T ? (0, a.jsx)(i.a, {
                    color: "primary",
                    size: "auth",
                    onClick: l,
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.learnMore",
                        defaultMessage: "Learn more"
                    })
                }) : null, k[23] = T, k[24] = w) : w = k[24], k[25] !== y || k[26] !== D || k[27] !== G || k[28] !== P || k[29] !== T ? (x = "mobile" !== T && "cli-login" !== T ? (0, a.jsx)(i.a, {
                    color: null == D || G ? "primary" : "outlineSurface",
                    size: "auth",
                    disabled: null == y,
                    onClick: P,
                    children: (0, a.jsx)(r.a, {
                        id: "browser.codexDeeplink.open",
                        defaultMessage: "Open ChatGPT"
                    })
                }) : null, k[25] = y, k[26] = D, k[27] = G, k[28] = P, k[29] = T, k[30] = x) : x = k[30], k[31] !== b || k[32] !== w || k[33] !== x || k[34] !== g ? (j = (0, a.jsxs)("div", {
                    className: "flex flex-col gap-3",
                    children: [g, b, w, x]
                }), k[31] = b, k[32] = w, k[33] = x, k[34] = g, k[35] = j) : j = k[35], k[36] !== j || k[37] !== m || k[38] !== h || k[39] !== u || k[40] !== f ? (C = (0, a.jsx)("main", {
                    className: "flex min-h-screen flex-col items-center justify-center bg-surface px-6 py-12 text-default select-none",
                    children: (0, a.jsxs)("div", {
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
} from "./633146.d376de6326.js";
import * as o from "./680612.3c8d72f22d.js";
e.C(o);
import * as t from "./418851.b915ffe930.js";
e.C(t);
import * as a from "./109308.e66696cd0d.js";
e.C(a);
import * as n from "./399565.6af208675d.js";
e.C(n);
import * as r from "./257798.b51742efd5.js";
e.C(r);
import * as s from "./447351.dafe7b7b5e.js";
e.C(s);
import * as i from "./617936.e33610e0b9.js";
e.C(i);
import * as l from "./807489.01dbb0865d.js";
e.C(l);
import * as p from "./337882.7119120a0c.js";
e.C(p);
import * as d from "./955979.cdc247a476.js";
e.C(d);
import * as c from "./646436.2bf4f5cfd6.js";
e.C(c);
import * as m from "./7078.89396f9757.js";
e.C(m);
import * as h from "./200429.ddc1bbef02.js";
e.C(h);
import * as u from "./698524.21708788d0.js";
e.C(u);
import * as f from "./956483.c322d2995f.js";
e.C(f);
import * as g from "./87162.b460b44fcb.js";
e.C(g);
import * as b from "./396705.f9a5e3185a.js";
e.C(b);
import * as w from "./155568.be3429758e.js";
e.C(w);
import * as x from "./731863.f2322456e0.js";
e.C(x);
import * as j from "./767086.ab7a1efc0d.js";
e.C(j);
import * as C from "./76629.3c6cad96ca.js";
e.C(C);
import * as k from "./514085.2befcfe573.js";
e.C(k);
import * as y from "./226913.27c93050ff.js";
e.C(y);
import * as D from "./965367.1affaa92e5.js";
e.C(D);
var _ = e(e.s = "LZjk").a;
export {
    _ as
    default
};