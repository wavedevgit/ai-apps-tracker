export const __rspack_esm_ids = [315523];
export const __webpack_modules__ = {
    rni0: (function(t, e, o) {
        o.d(e, {
            a: () => i,
            b: () => m
        });
        var r = o("jqIZ"),
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
        let c = "https://chatgpt.com/unauth-mweb/images/share-unfurl/made-with-chatgpt-og.webp",
            m = t => {
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
                    content: c
                }, {
                    property: "og:image:alt",
                    content: "Preview of shared ChatGPT content"
                }, {
                    name: "twitter:card",
                    content: "summary_large_image"
                }, {
                    name: "twitter:image",
                    content: c
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
} from "./633146.5096fa3fd9.js";
import * as e from "./418851.c7ca1818d5.js";
t.C(e);
import * as o from "./109308.e66696cd0d.js";
t.C(o);
import * as r from "./399565.6af208675d.js";
t.C(r);
import * as a from "./257798.13b56b362a.js";
t.C(a);
import * as s from "./447351.d558a44437.js";
t.C(s);
import * as n from "./617936.4707466a2e.js";
t.C(n);
import * as p from "./807489.02c4828605.js";
t.C(p);
import * as i from "./337882.8740501d0a.js";
t.C(i);
import * as c from "./955979.a7c648ac65.js";
t.C(c);
import * as m from "./646436.67f97058a6.js";
t.C(m);
import * as d from "./7078.1e69ffb16b.js";
t.C(d);
import * as f from "./200429.bb053dd10b.js";
t.C(f);
import * as g from "./698524.21cc9159ce.js";
t.C(g);
import * as h from "./956483.d8c24cb93c.js";
t.C(h);
import * as l from "./87162.061018a33e.js";
t.C(l);
import * as u from "./396705.001e7c704c.js";
t.C(u);
import * as C from "./155568.3264e8a296.js";
t.C(C);
import * as _ from "./731863.63f4b0e1e0.js";
t.C(_);
import * as b from "./767086.348bdfe349.js";
t.C(b);
import * as j from "./76629.9b04d58081.js";
t.C(j);
import * as y from "./514085.7e2196bde7.js";
t.C(y);
import * as w from "./226913.27c93050ff.js";
t.C(w);
import * as x from "./902158.5a4b6c2c66.js";
t.C(x);
import * as I from "./315523.419c88d205.js";
t.C(I);
var v = t(t.s = "rni0"),
    P = v.a,
    G = v.b;
export {
    P as
    default, G as meta
};