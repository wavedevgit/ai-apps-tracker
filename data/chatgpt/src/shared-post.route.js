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
} from "./633146.332c5da428.js";
import * as e from "./418851.3878fbfa64.js";
t.C(e);
import * as o from "./109308.4b30101b7c.js";
t.C(o);
import * as r from "./399565.de450ac543.js";
t.C(r);
import * as a from "./257798.b061e3b37a.js";
t.C(a);
import * as s from "./447351.690fba1ae5.js";
t.C(s);
import * as n from "./617936.c6f9e1ebfb.js";
t.C(n);
import * as p from "./807489.2ba5c6d996.js";
t.C(p);
import * as i from "./337882.799b00b0f3.js";
t.C(i);
import * as c from "./955979.eaf8541a67.js";
t.C(c);
import * as m from "./646436.611d2d0d1b.js";
t.C(m);
import * as d from "./7078.691a92af09.js";
t.C(d);
import * as f from "./200429.336411f62e.js";
t.C(f);
import * as g from "./698524.e12b58b33f.js";
t.C(g);
import * as h from "./956483.2514992fd3.js";
t.C(h);
import * as l from "./87162.1f25d59c9c.js";
t.C(l);
import * as u from "./396705.3e09ec2928.js";
t.C(u);
import * as b from "./155568.b02a981797.js";
t.C(b);
import * as C from "./731863.9e2b15b813.js";
t.C(C);
import * as _ from "./767086.6cceb40294.js";
t.C(_);
import * as y from "./76629.0f65023578.js";
t.C(y);
import * as j from "./226913.c039047be5.js";
t.C(j);
import * as w from "./413109.b4bfe81a07.js";
t.C(w);
import * as x from "./315523.45bc2a7eb7.js";
t.C(x);
var v = t(t.s = "rni0"),
    I = v.a,
    P = v.b;
export {
    I as
    default, P as meta
};