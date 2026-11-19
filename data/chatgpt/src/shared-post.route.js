export const __rspack_esm_ids = [315523];
export const __webpack_modules__ = {
    rni0: (function(t, e, o) {
        o.d(e, {
            a: () => i,
            b: () => m
        });
        var r = o("rEML"),
            a = o("ABep"),
            s = o("QosV"),
            n = o("hC2y"),
            p = o("AXDI"),
            i = (0, r.kb)(function() {
                let t, e = (0, s.c)(1);
                return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(p.a, {
                    children: (0, a.jsx)(n.g, {})
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
} from "./633146.2ddddba2a5.js";
import * as e from "./418851.f34514cc3f.js";
t.C(e);
import * as o from "./109308.8b09661749.js";
t.C(o);
import * as r from "./399565.edefe43a76.js";
t.C(r);
import * as a from "./257798.6b4268ddac.js";
t.C(a);
import * as s from "./447351.34d04099ca.js";
t.C(s);
import * as n from "./617936.4a1557f13c.js";
t.C(n);
import * as p from "./807489.6b5279adf3.js";
t.C(p);
import * as i from "./337882.568bafdf14.js";
t.C(i);
import * as c from "./955979.b2a7e19963.js";
t.C(c);
import * as m from "./646436.5963e38f02.js";
t.C(m);
import * as d from "./7078.0a9a41e515.js";
t.C(d);
import * as f from "./200429.a549930e29.js";
t.C(f);
import * as g from "./698524.48945354c5.js";
t.C(g);
import * as h from "./956483.962c0de04b.js";
t.C(h);
import * as l from "./87162.e4a69efaac.js";
t.C(l);
import * as u from "./396705.51be923e43.js";
t.C(u);
import * as b from "./155568.1f7b7a00a5.js";
t.C(b);
import * as C from "./731863.5a49a2d190.js";
t.C(C);
import * as _ from "./767086.61b8f8fca3.js";
t.C(_);
import * as y from "./226913.cf105b979e.js";
t.C(y);
import * as w from "./227786.748857de8d.js";
t.C(w);
import * as j from "./315523.973ca8b1c5.js";
t.C(j);
var x = t(t.s = "rni0"),
    v = x.a,
    I = x.b;
export {
    v as
    default, I as meta
};