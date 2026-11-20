export const __rspack_esm_ids = [315523];
export const __webpack_modules__ = {
    rni0: (function(t, e, o) {
        o.d(e, {
            a: () => i,
            b: () => m
        });
        var r = o("rEML"),
            s = o("ABep"),
            a = o("QosV"),
            n = o("hC2y"),
            p = o("AXDI"),
            i = (0, r.kb)(function() {
                let t, e = (0, a.c)(1);
                return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, s.jsx)(p.a, {
                    children: (0, s.jsx)(n.g, {})
                }), e[0] = t) : t = e[0], t
            });
        let c = "https://chatgpt.com/unauth-mweb/images/share-unfurl/made-with-chatgpt-og.webp",
            m = t => {
                let {
                    matches: e,
                    params: o,
                    loaderData: r,
                    location: s
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
                        s = [{
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
                    return null != t.width && null != t.height && s.push({
                        property: "og:image:width",
                        content: String(t.width)
                    }, {
                        property: "og:image:height",
                        content: String(t.height)
                    }), r.startsWith("https:") && s.push({
                        property: "og:image:secure_url",
                        content: r
                    }), t.title && s.push({
                        property: "og:title",
                        content: t.title
                    }, {
                        name: "twitter:title",
                        content: t.title
                    }), t.description && s.push({
                        property: "og:description",
                        content: t.description
                    }, {
                        name: "twitter:description",
                        content: t.description
                    }), s
                }(r, o.postId, s.search), ...o.postId?.startsWith("cx_") ? [{
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
} from "./633146.286e08e471.js";
import * as e from "./418851.b2405a4ff9.js";
t.C(e);
import * as o from "./109308.c704a27752.js";
t.C(o);
import * as r from "./399565.76c7da28d9.js";
t.C(r);
import * as s from "./257798.da1bc54c05.js";
t.C(s);
import * as a from "./447351.34d04099ca.js";
t.C(a);
import * as n from "./617936.da77c6b618.js";
t.C(n);
import * as p from "./807489.823dbdfb5a.js";
t.C(p);
import * as i from "./337882.060a468551.js";
t.C(i);
import * as c from "./955979.5504cdc0ad.js";
t.C(c);
import * as m from "./646436.feae78aa0d.js";
t.C(m);
import * as d from "./7078.6f2aee03ba.js";
t.C(d);
import * as g from "./200429.80eabab50b.js";
t.C(g);
import * as f from "./698524.9faf81ab1c.js";
t.C(f);
import * as h from "./956483.db483d044c.js";
t.C(h);
import * as l from "./87162.313d693207.js";
t.C(l);
import * as u from "./396705.047d6db773.js";
t.C(u);
import * as C from "./155568.1d9e3b614b.js";
t.C(C);
import * as b from "./731863.5760f3f335.js";
t.C(b);
import * as _ from "./767086.ab8a876382.js";
t.C(_);
import * as y from "./76629.6fe0bcbf7b.js";
t.C(y);
import * as j from "./226913.cf105b979e.js";
t.C(j);
import * as w from "./227786.748857de8d.js";
t.C(w);
import * as x from "./315523.a301abc788.js";
t.C(x);
var v = t(t.s = "rni0"),
    I = v.a,
    P = v.b;
export {
    I as
    default, P as meta
};