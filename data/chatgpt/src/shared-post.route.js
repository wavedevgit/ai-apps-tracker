export const __rspack_esm_ids = [315523];
export const __webpack_modules__ = {
    ojrv: (function(t, e, o) {
        o.d(e, {
            a: () => i,
            b: () => m
        });
        var r = o("jqIZ"),
            s = o("ABep"),
            a = o("QosV"),
            n = o("hC2y"),
            p = o("AXDI"),
            i = (0, r.hb)(function() {
                let t, e = (0, a.c)(1);
                return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, s.jsx)(p.a, {
                    children: (0, s.jsx)(n.f, {})
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
} from "./633146.4981d79ae4.js";
import * as e from "./418851.7f18e986d5.js";
t.C(e);
import * as o from "./109308.e66696cd0d.js";
t.C(o);
import * as r from "./399565.6af208675d.js";
t.C(r);
import * as s from "./257798.b51742efd5.js";
t.C(s);
import * as a from "./447351.7f028af5cc.js";
t.C(a);
import * as n from "./617936.e33610e0b9.js";
t.C(n);
import * as p from "./807489.b2a4c99bd1.js";
t.C(p);
import * as i from "./337882.240014b3db.js";
t.C(i);
import * as c from "./955979.cac5f7aa7e.js";
t.C(c);
import * as m from "./646436.b849db233f.js";
t.C(m);
import * as d from "./7078.73ded76a8d.js";
t.C(d);
import * as g from "./200429.f68bf8c5d0.js";
t.C(g);
import * as f from "./698524.5c1f88ec3d.js";
t.C(f);
import * as h from "./956483.da8bcbe744.js";
t.C(h);
import * as l from "./87162.47f0360b7c.js";
t.C(l);
import * as u from "./396705.bfc19c0c6a.js";
t.C(u);
import * as C from "./155568.fb329e6a3b.js";
t.C(C);
import * as j from "./731863.850a24e1c0.js";
t.C(j);
import * as _ from "./767086.b68e569328.js";
t.C(_);
import * as y from "./76629.ca4c17c8af.js";
t.C(y);
import * as w from "./514085.6514ba1a89.js";
t.C(w);
import * as b from "./226913.27c93050ff.js";
t.C(b);
import * as x from "./902158.5a4b6c2c66.js";
t.C(x);
import * as v from "./315523.88ead5c4e3.js";
t.C(v);
var I = t(t.s = "ojrv"),
    P = I.a,
    G = I.b;
export {
    P as
    default, G as meta
};