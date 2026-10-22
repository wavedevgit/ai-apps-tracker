export const __rspack_esm_id = 965367;
export const __rspack_esm_ids = [965367];
export const __webpack_modules__ = {
    f3: (function(s, e, o) {
        o.d(e, {
            a: () => f
        });
        var t = o("HZ"),
            a = o("A"),
            n = o("Qo"),
            r = o("Xnl"),
            p = o("zd"),
            i = o("G8");
        o("rH");
        var l = o("Wo"),
            d = o("pIC"),
            c = o("eA"),
            f = (0, t.gb)(function() {
                let s, e, o, f, x, m, j = (0, n.c)(15),
                    {
                        locale: u
                    } = (0, r.z)(c.a).value,
                    {
                        downloadPlatform: h,
                        messages: b
                    } = (0, t.W)(),
                    [g] = (0, t.fb)();
                j[0] !== g ? (s = function(s) {
                    if ("page" === s.get("target")) {
                        let e = s.getAll("page_id");
                        return 1 === e.length && l.a.test(e[0]) ? `codex://space/${encodeURIComponent(e[0])}` : null
                    }
                    if ("new-thread" === s.get("target")) return "codex://threads/new";
                    if ("team-join" === s.get("target")) {
                        let e = s.getAll("team_id"),
                            o = 1 === e.length ? e[0].trim() : null;
                        return o ? `codex://teams/${encodeURIComponent(o)}/join` : null
                    }
                    let e = s.getAll("url");
                    if (e.length > 0) {
                        let o;
                        if (1 !== e.length || ["prompt", "originUrl", "path"].some(e => s.has(e))) return null;
                        let t = e[0];
                        if (t.trim() !== t) return null;
                        try {
                            o = new URL(t)
                        } catch {
                            return null
                        }
                        if ("http:" !== o.protocol && "https:" !== o.protocol || 0 === o.hostname.length || o.username.length > 0 || o.password.length > 0) return null;
                        let a = new URL("codex://browser");
                        return a.searchParams.set("url", o.toString()), a.toString()
                    }
                    let o = new URL("codex://new");
                    for (let e of ["prompt", "originUrl", "path"]) {
                        let t = s.get(e)?.trim();
                        t && o.searchParams.set(e, t)
                    }
                    return o.searchParams.size > 0 ? o.toString() : null
                }(g), j[0] = g, j[1] = s) : s = j[1];
                let w = s;
                return j[2] !== w ? (e = () => {
                    null != w && window.location.assign(w)
                }, o = [w], j[2] = w, j[3] = e, j[4] = o) : (e = j[3], o = j[4]), (0, p.useEffect)(e, o), j[5] !== w ? (f = () => {
                    null != w && window.location.assign(w)
                }, j[5] = w, j[6] = f) : f = j[6], j[7] !== w || j[8] !== h || j[9] !== f ? (x = (0, a.jsx)(d.a, {
                    downloadPlatform: h,
                    deepLink: w,
                    onOpen: f
                }), j[7] = w, j[8] = h, j[9] = f, j[10] = x) : x = j[10], j[11] !== u || j[12] !== b || j[13] !== x ? (m = (0, a.jsx)(i.a, {
                    locale: u,
                    defaultLocale: "en-US",
                    messages: b,
                    children: x
                }), j[11] = u, j[12] = b, j[13] = x, j[14] = m) : m = j[14], m
            })
    }),
    CZ: (function(s, e, o) {
        s.exports = o.p + "assets/am.9b3c90bd4b.json"
    }),
    ex: (function(s, e, o) {
        s.exports = o.p + "assets/ar.4c0af1a27a.json"
    }),
    Zl: (function(s, e, o) {
        s.exports = o.p + "assets/bg-BG.9e3a0612d1.json"
    }),
    UN: (function(s, e, o) {
        s.exports = o.p + "assets/bn-BD.8c3b4b1815.json"
    }),
    xu: (function(s, e, o) {
        s.exports = o.p + "assets/bs-BA.33de83da7f.json"
    }),
    gG: (function(s, e, o) {
        s.exports = o.p + "assets/ca-ES.56b832d74f.json"
    }),
    Ie: (function(s, e, o) {
        s.exports = o.p + "assets/cs-CZ.4e9914aa6e.json"
    }),
    rk: (function(s, e, o) {
        s.exports = o.p + "assets/da-DK.a113d60cc4.json"
    }),
    vu: (function(s, e, o) {
        s.exports = o.p + "assets/de-DE.11438e94fb.json"
    }),
    Xs: (function(s, e, o) {
        s.exports = o.p + "assets/el-GR.4efc71a028.json"
    }),
    SA: (function(s, e, o) {
        s.exports = o.p + "assets/es-419.5c4ce5cea9.json"
    }),
    Kg: (function(s, e, o) {
        s.exports = o.p + "assets/es-ES.f681ff9eb7.json"
    }),
    el: (function(s, e, o) {
        s.exports = o.p + "assets/et-EE.64bfe9571b.json"
    }),
    Ix: (function(s, e, o) {
        s.exports = o.p + "assets/fa.00bd1c6ae4.json"
    }),
    kPR: (function(s, e, o) {
        s.exports = o.p + "assets/fi-FI.5acb55b5fe.json"
    }),
    ivH: (function(s, e, o) {
        s.exports = o.p + "assets/fr-CA.3af771f11d.json"
    }),
    Ju: (function(s, e, o) {
        s.exports = o.p + "assets/fr-FR.4c40c3db04.json"
    }),
    W3: (function(s, e, o) {
        s.exports = o.p + "assets/gu-IN.e43b803189.json"
    }),
    HIR: (function(s, e, o) {
        s.exports = o.p + "assets/hi-IN.ec550cbb76.json"
    }),
    Hr: (function(s, e, o) {
        s.exports = o.p + "assets/hr-HR.b844a2ea0b.json"
    }),
    DAi: (function(s, e, o) {
        s.exports = o.p + "assets/hu-HU.c7b0104e6f.json"
    }),
    za: (function(s, e, o) {
        s.exports = o.p + "assets/hy-AM.e82a1acc10.json"
    }),
    NK: (function(s, e, o) {
        s.exports = o.p + "assets/id-ID.3867b5de0a.json"
    }),
    Yl: (function(s, e, o) {
        s.exports = o.p + "assets/is-IS.251a9a3d41.json"
    }),
    r0: (function(s, e, o) {
        s.exports = o.p + "assets/it-IT.f43b538284.json"
    }),
    lG9: (function(s, e, o) {
        s.exports = o.p + "assets/ja-JP.337a97f761.json"
    }),
    dB: (function(s, e, o) {
        s.exports = o.p + "assets/ka-GE.cf7366cbe8.json"
    }),
    Bn: (function(s, e, o) {
        s.exports = o.p + "assets/kk.8e242f82e9.json"
    }),
    Sg: (function(s, e, o) {
        s.exports = o.p + "assets/kn-IN.e3722c33f2.json"
    }),
    S4: (function(s, e, o) {
        s.exports = o.p + "assets/ko-KR.6bc4265842.json"
    }),
    UKx: (function(s, e, o) {
        s.exports = o.p + "assets/lt.f9f4848218.json"
    }),
    tu: (function(s, e, o) {
        s.exports = o.p + "assets/lv-LV.c5ff92901a.json"
    }),
    GE: (function(s, e, o) {
        s.exports = o.p + "assets/mk-MK.f299ce7546.json"
    }),
    bH: (function(s, e, o) {
        s.exports = o.p + "assets/ml.18d9f65cb7.json"
    }),
    f7: (function(s, e, o) {
        s.exports = o.p + "assets/mn.de61367e79.json"
    }),
    L7: (function(s, e, o) {
        s.exports = o.p + "assets/mr-IN.addbfd3026.json"
    }),
    fa: (function(s, e, o) {
        s.exports = o.p + "assets/ms-MY.a7bd1dfcdf.json"
    }),
    Vv: (function(s, e, o) {
        s.exports = o.p + "assets/my-MM.d3adf3d3b1.json"
    }),
    j6u: (function(s, e, o) {
        s.exports = o.p + "assets/nb-NO.fd16b37040.json"
    }),
    ff: (function(s, e, o) {
        s.exports = o.p + "assets/nl-NL.d6c28daa42.json"
    }),
    Ps: (function(s, e, o) {
        s.exports = o.p + "assets/pa.e4e7cd51d5.json"
    }),
    mz: (function(s, e, o) {
        s.exports = o.p + "assets/pl-PL.e27fe3edf4.json"
    }),
    C5: (function(s, e, o) {
        s.exports = o.p + "assets/pt-BR.1478437bdb.json"
    }),
    yV: (function(s, e, o) {
        s.exports = o.p + "assets/pt-PT.974da71911.json"
    }),
    dI: (function(s, e, o) {
        s.exports = o.p + "assets/ro-RO.504cbc52eb.json"
    }),
    gs: (function(s, e, o) {
        s.exports = o.p + "assets/ru-RU.07bf446886.json"
    }),
    vJK: (function(s, e, o) {
        s.exports = o.p + "assets/sk-SK.4f6b95faec.json"
    }),
    Rf: (function(s, e, o) {
        s.exports = o.p + "assets/sl-SI.856b807b22.json"
    }),
    VS: (function(s, e, o) {
        s.exports = o.p + "assets/so-SO.b3d7368d3d.json"
    }),
    cu: (function(s, e, o) {
        s.exports = o.p + "assets/sq-AL.744e0e6421.json"
    }),
    NX: (function(s, e, o) {
        s.exports = o.p + "assets/sr-RS.99be398c07.json"
    }),
    oY: (function(s, e, o) {
        s.exports = o.p + "assets/sv-SE.f396eca42d.json"
    }),
    A1: (function(s, e, o) {
        s.exports = o.p + "assets/sw-TZ.96e40e45d4.json"
    }),
    MU: (function(s, e, o) {
        s.exports = o.p + "assets/ta-IN.2d1b6f0684.json"
    }),
    G9: (function(s, e, o) {
        s.exports = o.p + "assets/te-IN.bd1bf8e795.json"
    }),
    RR: (function(s, e, o) {
        s.exports = o.p + "assets/th-TH.17883edbb4.json"
    }),
    TX: (function(s, e, o) {
        s.exports = o.p + "assets/tl.994b95e228.json"
    }),
    jy: (function(s, e, o) {
        s.exports = o.p + "assets/tr-TR.954a238167.json"
    }),
    Lo: (function(s, e, o) {
        s.exports = o.p + "assets/uk-UA.755c63e1d4.json"
    }),
    Yza: (function(s, e, o) {
        s.exports = o.p + "assets/ur.160428128d.json"
    }),
    bo: (function(s, e, o) {
        s.exports = o.p + "assets/vi-VN.6303a852ad.json"
    }),
    fH: (function(s, e, o) {
        s.exports = o.p + "assets/zh-CN.c4914bff40.json"
    }),
    QL: (function(s, e, o) {
        s.exports = o.p + "assets/zh-HK.f4f39c6835.json"
    }),
    LG: (function(s, e, o) {
        s.exports = o.p + "assets/zh-TW.18cc9f813a.json"
    }),
    pIC: (function(s, e, o) {
        var t = o("A"),
            a = o("Qo"),
            n = o("oy"),
            r = o("Al"),
            p = o("ygO");

        function i(s) {
            let e, o, r, i, x, m, j, u, h, b, g, w, C, k = (0, a.c)(42),
                {
                    deepLink: I,
                    downloadPlatform: y,
                    status: G,
                    onOpen: D
                } = s,
                P = void 0 === G ? "opening" : G,
                T = "login" === P || "cli-login" === P;
            return k[0] !== T ? (e = T ? (0, t.jsx)(n.a, {
                id: "browser.codexDeeplink.signedIn",
                defaultMessage: "You’re signed in",
                description: "Heading on the desktop launcher page after browser authentication succeeds"
            }) : null, k[0] = T, k[1] = e) : e = k[1], k[2] !== P ? (o = "mobile" === P ? (0, t.jsx)(n.a, {
                id: "browser.codexDeeplink.mobileTitle",
                defaultMessage: "Open the ChatGPT desktop app on your computer",
                description: "Heading telling mobile users to use a computer to open a desktop app link"
            }) : null, k[2] = P, k[3] = o) : o = k[3], k[4] !== P ? (r = "opening" === P ? (0, t.jsx)(n.a, {
                id: "browser.codexDeeplink.title",
                defaultMessage: "Opening ChatGPT…",
                description: "Heading on a browser launcher page while it opens the ChatGPT desktop app with a chat or browser destination"
            }) : null, k[4] = P, k[5] = r) : r = k[5], k[6] !== e || k[7] !== o || k[8] !== r ? (i = (0, t.jsxs)("h1", {
                className: "text-3xl font-semibold",
                children: [e, o, r]
            }), k[6] = e, k[7] = o, k[8] = r, k[9] = i) : i = k[9], k[10] !== T ? (x = T ? (0, t.jsx)("p", {
                className: "text-secondary",
                children: (0, t.jsx)(n.a, {
                    id: "browser.codexDeeplink.signedInBody",
                    defaultMessage: "You’re signed in and may close this tab",
                    description: "Confirmation after desktop or CLI login finishes in the browser; closing the tab does not interrupt authentication"
                })
            }) : null, k[10] = T, k[11] = x) : x = k[11], k[12] !== P ? (m = "opening" === P ? (0, t.jsx)("p", {
                className: "text-secondary",
                children: (0, t.jsx)(n.a, {
                    id: "browser.codexDeeplink.body",
                    defaultMessage: "We're trying to open ChatGPT automatically. If nothing happens, download the app and try opening it again.",
                    description: "Instructions on the browser launcher page if automatic opening of a chat in the ChatGPT desktop app does not work"
                })
            }) : null, k[12] = P, k[13] = m) : m = k[13], k[14] !== I || k[15] !== T ? (j = null != I || T ? null : (0, t.jsx)("p", {
                role: "alert",
                className: "text-secondary",
                children: (0, t.jsx)(n.a, {
                    id: "browser.codexDeeplink.missingDetails",
                    defaultMessage: "This link is missing the chat details ChatGPT needs to reopen your work",
                    description: "Error on the browser launcher page when the chat or browser URL is missing or invalid, so opening the desktop app is unavailable"
                })
            }), k[14] = I, k[15] = T, k[16] = j) : j = k[16], k[17] !== y || k[18] !== P ? (u = "opening" === P && "windows" === y ? (0, t.jsx)(p.a, {
                color: "primary",
                size: "auth",
                onClick: f,
                children: (0, t.jsx)(n.a, {
                    id: "browser.codexDeeplink.download",
                    defaultMessage: "Download the app",
                    description: "Download button on the browser launcher page for installing the ChatGPT desktop app without losing the chat link"
                })
            }) : null, k[17] = y, k[18] = P, k[19] = u) : u = k[19], k[20] !== y || k[21] !== P ? (h = "opening" === P && "mac" === y ? (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(p.a, {
                    color: "primary",
                    size: "auth",
                    onClick: c,
                    children: (0, t.jsx)(n.a, {
                        id: "browser.codexDeeplink.downloadAppleSilicon",
                        defaultMessage: "Download for Apple Silicon",
                        description: "Download button on the browser launcher page for the Apple Silicon version of the ChatGPT desktop app"
                    })
                }), (0, t.jsx)(p.a, {
                    color: "outlineSurface",
                    size: "auth",
                    onClick: d,
                    children: (0, t.jsx)(n.a, {
                        id: "browser.codexDeeplink.downloadIntel",
                        defaultMessage: "Download for Intel Mac",
                        description: "Download button on the browser launcher page for the Intel Mac version of the ChatGPT desktop app"
                    })
                })]
            }) : null, k[20] = y, k[21] = P, k[22] = h) : h = k[22], k[23] !== P ? (b = "mobile" === P ? (0, t.jsx)(p.a, {
                color: "primary",
                size: "auth",
                onClick: l,
                children: (0, t.jsx)(n.a, {
                    id: "browser.codexDeeplink.learnMore",
                    defaultMessage: "Learn more",
                    description: "Link from the mobile desktop-launcher page to information about downloading the desktop app"
                })
            }) : null, k[23] = P, k[24] = b) : b = k[24], k[25] !== I || k[26] !== y || k[27] !== T || k[28] !== D || k[29] !== P ? (g = "mobile" !== P && "cli-login" !== P ? (0, t.jsx)(p.a, {
                color: null == y || T ? "primary" : "outlineSurface",
                size: "auth",
                disabled: null == I,
                onClick: D,
                children: (0, t.jsx)(n.a, {
                    id: "browser.codexDeeplink.open",
                    defaultMessage: "Open ChatGPT",
                    description: "Retry button on the browser launcher page for opening a chat in the ChatGPT desktop app"
                })
            }) : null, k[25] = I, k[26] = y, k[27] = T, k[28] = D, k[29] = P, k[30] = g) : g = k[30], k[31] !== h || k[32] !== b || k[33] !== g || k[34] !== u ? (w = (0, t.jsxs)("div", {
                className: "flex flex-col gap-3",
                children: [u, h, b, g]
            }), k[31] = h, k[32] = b, k[33] = g, k[34] = u, k[35] = w) : w = k[35], k[36] !== w || k[37] !== i || k[38] !== x || k[39] !== m || k[40] !== j ? (C = (0, t.jsx)("main", {
                className: "flex min-h-screen flex-col items-center justify-center bg-surface px-6 py-12 text-default select-none",
                children: (0, t.jsxs)("div", {
                    className: "flex w-full max-w-md flex-col gap-5",
                    children: [i, x, m, j, w]
                })
            }), k[36] = w, k[37] = i, k[38] = x, k[39] = m, k[40] = j, k[41] = C) : C = k[41], C
        }

        function l() {
            return x("https://chatgpt.com/download")
        }

        function d() {
            return x("https://persistent.oaistatic.com/codex-app-prod/ChatGPT-latest-x64.dmg")
        }

        function c() {
            return x("https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg")
        }

        function f() {
            return x("https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi")
        }

        function x(s) {
            "https://chatgpt.com/download" !== s && (0, r.b)("codex-download", {
                allowUnauthenticatedTracking: !0
            }), window.open(s, "_blank", "noopener,noreferrer")
        }
        o.d(e, {
            a: () => i
        })
    })
};
import {
    __webpack_require__ as s
} from "./633146.1acff1fd97.js";
import * as e from "./418851.26885c363c.js";
s.C(e);
import * as o from "./109308.2b1d9d6c81.js";
s.C(o);
import * as t from "./399565.a1117ca8b4.js";
s.C(t);
import * as a from "./257798.d843b1936f.js";
s.C(a);
import * as n from "./447351.932e2385aa.js";
s.C(n);
import * as r from "./617936.c1e603d513.js";
s.C(r);
import * as p from "./807489.b7e7128b38.js";
s.C(p);
import * as i from "./337882.9e4ade9102.js";
s.C(i);
import * as l from "./955979.3c3e4491c9.js";
s.C(l);
import * as d from "./646436.ae52bce54a.js";
s.C(d);
import * as c from "./7078.1d3962d820.js";
s.C(c);
import * as f from "./200429.6f42405259.js";
s.C(f);
import * as x from "./698524.d5e486fc8c.js";
s.C(x);
import * as m from "./956483.54777e5de5.js";
s.C(m);
import * as j from "./87162.b75f4ffcd0.js";
s.C(j);
import * as u from "./396705.fee9cdb4c3.js";
s.C(u);
import * as h from "./155568.a8a70a96a2.js";
s.C(h);
import * as b from "./731863.debd0d0a4a.js";
s.C(b);
import * as g from "./767086.14c8de4b86.js";
s.C(g);
import * as w from "./76629.7179268415.js";
s.C(w);
import * as C from "./514085.ccac72088d.js";
s.C(C);
import * as k from "./204542.c2b519874e.js";
s.C(k);
import * as I from "./982651.d0b6d5b191.js";
s.C(I);
import * as y from "./673108.68f9b92566.js";
s.C(y);
import * as G from "./487481.27ec69afbb.js";
s.C(G);
import * as D from "./226913.4f6f289942.js";
s.C(D);
import * as P from "./965367.5775809dd0.js";
s.C(P);
var T = s(s.s = "f3").a;
export {
    T as
    default
};