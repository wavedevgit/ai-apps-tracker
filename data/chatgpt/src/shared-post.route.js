export const __rspack_esm_ids = [315523];
export const __webpack_modules__ = {
    rni0: (function(a, b, c) {
        c.d(b, {
            a: () => i,
            b: () => k
        });
        var d = c("rEML"),
            e = c("ABep"),
            f = c("QosV"),
            g = c("hC2y"),
            h = c("AXDI"),
            i = (0, d.kb)(function() {
                let a, b = (0, f.c)(1);
                return b[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, e.jsx)(h.a, {
                    children: (0, e.jsx)(g.g, {})
                }), b[0] = a) : a = b[0], a
            });
        let j = "https://chatgpt.com/unauth-mweb/images/share-unfurl/made-with-chatgpt-og.webp",
            k = a => {
                let {
                    matches: b,
                    params: c,
                    loaderData: d,
                    location: e
                } = a;
                return [...b.flatMap(a => a.meta ?? []), ...null == d && c.postId?.startsWith("i_") ? [{
                    property: "og:site_name",
                    content: "ChatGPT"
                }, {
                    property: "og:type",
                    content: "article"
                }, {
                    property: "og:url",
                    content: `https://chatgpt.com/s/${encodeURIComponent(c.postId)}`
                }, {
                    property: "og:title",
                    content: "Shared Content"
                }, {
                    property: "og:description",
                    content: "ChatGPT helps you get answers, find inspiration, and be more productive."
                }, {
                    property: "og:image",
                    content: j
                }, {
                    property: "og:image:alt",
                    content: "Preview of shared ChatGPT content"
                }, {
                    name: "twitter:card",
                    content: "summary_large_image"
                }, {
                    name: "twitter:image",
                    content: j
                }] : function(a, b, c) {
                    if (a?.status !== 200 || !b) return [];
                    let d = "rendered" === new URLSearchParams(c).get("ogimg") ? `https://ogimg.chatgpt.com/?postId=${b}` : a.imageUrl,
                        e = [{
                            property: "og:type",
                            content: "article"
                        }, {
                            property: "og:site_name",
                            content: "ChatGPT"
                        }, {
                            property: "og:url",
                            content: `https://chatgpt.com/s/${b}`
                        }, {
                            property: "og:image",
                            content: d
                        }, {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }, {
                            name: "twitter:image",
                            content: d
                        }];
                    return null != a.width && null != a.height && e.push({
                        property: "og:image:width",
                        content: String(a.width)
                    }, {
                        property: "og:image:height",
                        content: String(a.height)
                    }), d.startsWith("https:") && e.push({
                        property: "og:image:secure_url",
                        content: d
                    }), a.title && e.push({
                        property: "og:title",
                        content: a.title
                    }, {
                        name: "twitter:title",
                        content: a.title
                    }), a.description && e.push({
                        property: "og:description",
                        content: a.description
                    }, {
                        name: "twitter:description",
                        content: a.description
                    }), e
                }(d, c.postId, e.search), ...c.postId?.startsWith("cx_") ? [{
                    name: "description",
                    content: "Use ChatGPT to answer questions, write, create images, complete work, and code\u2014all in one place. Get started for free or download the app."
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
    nDjx: (function(a, b, c) {
        a.exports = c.p + "assets/appshot-logo.f0152cb4dd.png"
    }),
    hIAo: (function(a, b, c) {
        a.exports = c.p + "assets/codex-app-ga-logo.dfddfb85d7.png"
    }),
    OCvz: (function(a, b, c) {
        a.exports = c.p + "assets/dictation-start.f6efcb404f.wav"
    }),
    DJ2e: (function(a, b, c) {
        a.exports = c.p + "assets/dictation-stop.e3bc7ebc5e.wav"
    }),
    EBQV: (function(b) {
        b.exports = a.ir("/cdn/assets/dotnet.js").then(function(a) {
            return a
        })
    })
};
import {
    __webpack_require__ as a
} from "./633146.039023962d.js";
import * as b from "./418851.968f31a6dd.js";
a.C(b);
import * as c from "./109308.6f7ef1dfb7.js";
a.C(c);
import * as d from "./399565.61ce507128.js";
a.C(d);
import * as e from "./257798.7db7372059.js";
a.C(e);
import * as f from "./447351.05632d2214.js";
a.C(f);
import * as g from "./617936.9c9f6156c4.js";
a.C(g);
import * as h from "./807489.00c728e5cb.js";
a.C(h);
import * as i from "./337882.857617de92.js";
a.C(i);
import * as j from "./955979.9686375fd8.js";
a.C(j);
import * as k from "./646436.c6301b36bf.js";
a.C(k);
import * as l from "./7078.a74380b806.js";
a.C(l);
import * as m from "./200429.bfad930cbf.js";
a.C(m);
import * as n from "./698524.0f58bf626e.js";
a.C(n);
import * as o from "./956483.ddba772717.js";
a.C(o);
import * as p from "./87162.4f9e5f990b.js";
a.C(p);
import * as q from "./396705.d09e28dd2f.js";
a.C(q);
import * as r from "./155568.6bb25b8fdb.js";
a.C(r);
import * as s from "./731863.e1f0874620.js";
a.C(s);
import * as t from "./767086.410c555e47.js";
a.C(t);
import * as u from "./76629.33e020b0da.js";
a.C(u);
import * as v from "./226913.748570e15f.js";
a.C(v);
import * as w from "./227786.952cdb546b.js";
a.C(w);
import * as x from "./315523.2d21649201.js";
a.C(x);
var y = a(a.s = "rni0"),
    z = y.a,
    A = y.b;
export {
    z as
    default, A as meta
};