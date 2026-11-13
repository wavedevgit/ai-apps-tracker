export const __rspack_esm_ids = [315523];
export const __webpack_modules__ = {
    ojrv: (function(t, e, o) {
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
} from "./633146.d376de6326.js";
import * as e from "./418851.b915ffe930.js";
t.C(e);
import * as o from "./109308.e66696cd0d.js";
t.C(o);
import * as r from "./399565.6af208675d.js";
t.C(r);
import * as a from "./257798.b51742efd5.js";
t.C(a);
import * as s from "./447351.dafe7b7b5e.js";
t.C(s);
import * as n from "./617936.e33610e0b9.js";
t.C(n);
import * as p from "./807489.01dbb0865d.js";
t.C(p);
import * as i from "./337882.7119120a0c.js";
t.C(i);
import * as c from "./955979.cdc247a476.js";
t.C(c);
import * as m from "./646436.2bf4f5cfd6.js";
t.C(m);
import * as d from "./7078.89396f9757.js";
t.C(d);
import * as f from "./200429.ddc1bbef02.js";
t.C(f);
import * as g from "./698524.21708788d0.js";
t.C(g);
import * as h from "./956483.c322d2995f.js";
t.C(h);
import * as l from "./87162.b460b44fcb.js";
t.C(l);
import * as b from "./396705.f9a5e3185a.js";
t.C(b);
import * as u from "./155568.be3429758e.js";
t.C(u);
import * as C from "./731863.f2322456e0.js";
t.C(C);
import * as j from "./767086.ab7a1efc0d.js";
t.C(j);
import * as _ from "./76629.3c6cad96ca.js";
t.C(_);
import * as y from "./514085.2befcfe573.js";
t.C(y);
import * as w from "./226913.27c93050ff.js";
t.C(w);
import * as x from "./902158.5a4b6c2c66.js";
t.C(x);
import * as v from "./315523.27dab09a0f.js";
t.C(v);
var I = t(t.s = "ojrv"),
    P = I.a,
    G = I.b;
export {
    P as
    default, G as meta
};