export const __rspack_esm_ids = [315523];
export const __webpack_modules__ = {
    rni0: (function(t, e, o) {
        o.d(e, {
            a: () => i,
            b: () => c
        });
        var r = o("rEML"),
            a = o("ABep"),
            s = o("QosV"),
            n = o("hC2y"),
            p = o("AXDI"),
            i = (0, r.hb)(function() {
                let t, e = (0, s.c)(1);
                return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(p.a, {
                    children: (0, a.jsx)(n.f, {})
                }), e[0] = t) : t = e[0], t
            });
        let m = "https://chatgpt.com/unauth-mweb/images/share-unfurl/made-with-chatgpt-og.webp",
            c = t => {
                let {
                    matches: e,
                    params: o,
                    loaderData: r,
                    location: a
                } = t;
                return [...e.flatMap(t => t.meta ?? []), ...null == r && o.postId?.startsWith("i_") ? [{
                    property: "og:site_name",
                    content: "ChatGPT"
                }, {
                    property: "og:type",
                    content: "article"
                }, {
                    property: "og:url",
                    content: `https://chatgpt.com/s/${encodeURIComponent(o.postId)}`
                }, {
                    property: "og:title",
                    content: "Shared Content"
                }, {
                    property: "og:description",
                    content: "ChatGPT helps you get answers, find inspiration, and be more productive."
                }, {
                    property: "og:image",
                    content: m
                }, {
                    property: "og:image:alt",
                    content: "Preview of shared ChatGPT content"
                }, {
                    name: "twitter:card",
                    content: "summary_large_image"
                }, {
                    name: "twitter:image",
                    content: m
                }] : function(t, e, o) {
                    if (t?.status !== 200 || !e) return [];
                    let r = "rendered" === new URLSearchParams(o).get("ogimg") ? `https://ogimg.chatgpt.com/?postId=${e}` : t.imageUrl,
                        a = [{
                            property: "og:type",
                            content: "article"
                        }, {
                            property: "og:site_name",
                            content: "ChatGPT"
                        }, {
                            property: "og:url",
                            content: `https://chatgpt.com/s/${e}`
                        }, {
                            property: "og:image",
                            content: r
                        }, {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }, {
                            name: "twitter:image",
                            content: r
                        }];
                    return null != t.width && null != t.height && a.push({
                        property: "og:image:width",
                        content: String(t.width)
                    }, {
                        property: "og:image:height",
                        content: String(t.height)
                    }), r.startsWith("https:") && a.push({
                        property: "og:image:secure_url",
                        content: r
                    }), t.title && a.push({
                        property: "og:title",
                        content: t.title
                    }, {
                        name: "twitter:title",
                        content: t.title
                    }), t.description && a.push({
                        property: "og:description",
                        content: t.description
                    }, {
                        name: "twitter:description",
                        content: t.description
                    }), a
                }(r, o.postId, a.search), ...o.postId?.startsWith("cx_") ? [{
                    name: "description",
                    content: "Use ChatGPT to answer questions, write, create images, complete work, and code—all in one place. Get started for free or download the app."
                }, {
                    property: "og:type",
                    content: "website"
                }, {
                    property: "og:site_name",
                    content: "ChatGPT"
                }, {
                    property: "og:title",
                    content: "Check out this chat"
                }, {
                    property: "og:description",
                    content: "Here's a chat someone thought you'd want to see."
                }, {
                    name: "twitter:card",
                    content: "summary"
                }] : [], {
                    name: "robots",
                    content: "noindex, nofollow, noarchive"
                }]
            }
    }),
    nDjx: (function(t, e, o) {
        t.exports = o.p + "assets/appshot-logo.f0152cb4dd.png"
    }),
    hIAo: (function(t, e, o) {
        t.exports = o.p + "assets/codex-app-ga-logo.dfddfb85d7.png"
    }),
    OCvz: (function(t, e, o) {
        t.exports = o.p + "assets/dictation-start.f6efcb404f.wav"
    }),
    DJ2e: (function(t, e, o) {
        t.exports = o.p + "assets/dictation-stop.e3bc7ebc5e.wav"
    }),
    EBQV: (function(e) {
        e.exports = t.ir("/cdn/assets/dotnet.js").then(function(t) {
            return t
        })
    })
};
import {
    __webpack_require__ as t
} from "./633146.7affad7b5d.js";
import * as e from "./418851.a18db97c0f.js";
t.C(e);
import * as o from "./109308.c9b7701e19.js";
t.C(o);
import * as r from "./399565.e3bd47902e.js";
t.C(r);
import * as a from "./257798.7e03f1e3e2.js";
t.C(a);
import * as s from "./447351.96852eb6b8.js";
t.C(s);
import * as n from "./617936.b641c39dad.js";
t.C(n);
import * as p from "./807489.287ea00c8d.js";
t.C(p);
import * as i from "./337882.945f5227c2.js";
t.C(i);
import * as m from "./955979.2d3fb29684.js";
t.C(m);
import * as c from "./646436.6a9ea7ce2b.js";
t.C(c);
import * as d from "./7078.b92f527b06.js";
t.C(d);
import * as f from "./200429.6598292931.js";
t.C(f);
import * as g from "./698524.5402dc2ea3.js";
t.C(g);
import * as h from "./956483.595b7db9a7.js";
t.C(h);
import * as l from "./87162.d955fb8b13.js";
t.C(l);
import * as u from "./396705.47c12a5601.js";
t.C(u);
import * as C from "./155568.f88fad6c40.js";
t.C(C);
import * as _ from "./731863.4d5b0f8b9b.js";
t.C(_);
import * as b from "./767086.7d33efc736.js";
t.C(b);
import * as y from "./76629.9835d52bf1.js";
t.C(y);
import * as j from "./514085.4ce61adad7.js";
t.C(j);
import * as w from "./226913.dd4de34d8f.js";
t.C(w);
import * as x from "./902158.087f350eba.js";
t.C(x);
import * as v from "./315523.a56c7c5a80.js";
t.C(v);
var I = t(t.s = "rni0"),
    P = I.a,
    G = I.b;
export {
    P as
    default, G as meta
};