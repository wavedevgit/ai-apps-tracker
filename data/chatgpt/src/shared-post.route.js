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
            i = (0, r.ib)(function() {
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
} from "./633146.be60f96fcf.js";
import * as e from "./418851.d43ef6e51c.js";
t.C(e);
import * as o from "./109308.2094c16514.js";
t.C(o);
import * as r from "./399565.78e1c0aa0d.js";
t.C(r);
import * as a from "./257798.7e03f1e3e2.js";
t.C(a);
import * as s from "./447351.b188109392.js";
t.C(s);
import * as n from "./617936.fb76eb2727.js";
t.C(n);
import * as p from "./807489.9c1a8ccf71.js";
t.C(p);
import * as i from "./337882.5c43a2c90b.js";
t.C(i);
import * as c from "./955979.9ae2962bd4.js";
t.C(c);
import * as m from "./646436.b525bfd8f0.js";
t.C(m);
import * as d from "./7078.a82238bfec.js";
t.C(d);
import * as f from "./200429.3bcaa139a4.js";
t.C(f);
import * as g from "./698524.3de98ac6af.js";
t.C(g);
import * as h from "./956483.227ec74d56.js";
t.C(h);
import * as l from "./87162.36edabe123.js";
t.C(l);
import * as u from "./396705.12275a5eb6.js";
t.C(u);
import * as C from "./155568.b3f888f917.js";
t.C(C);
import * as _ from "./731863.367082aec0.js";
t.C(_);
import * as j from "./767086.1a336b6bc5.js";
t.C(j);
import * as y from "./76629.93a69b821a.js";
t.C(y);
import * as w from "./514085.fe0c9f50e5.js";
t.C(w);
import * as b from "./204542.f3712a1345.js";
t.C(b);
import * as x from "./226913.dd4de34d8f.js";
t.C(x);
import * as v from "./413109.b4bfe81a07.js";
t.C(v);
import * as I from "./315523.f199671eee.js";
t.C(I);
var P = t(t.s = "rni0"),
    G = P.a,
    k = P.b;
export {
    G as
    default, k as meta
};