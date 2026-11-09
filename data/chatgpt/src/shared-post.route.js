export const __rspack_esm_ids = [315523];
export const __webpack_modules__ = {
    ojrv: (function(t, e, o) {
        o.d(e, {
            a: () => i,
            b: () => c
        });
        var r = o("jqIZ"),
            s = o("ABep"),
            a = o("QosV"),
            p = o("hC2y"),
            n = o("AXDI"),
            i = (0, r.hb)(function() {
                let t, e = (0, a.c)(1);
                return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, s.jsx)(n.a, {
                    children: (0, s.jsx)(p.f, {})
                }), e[0] = t) : t = e[0], t
            });
        let m = "https://chatgpt.com/unauth-mweb/images/share-unfurl/made-with-chatgpt-og.webp",
            c = t => {
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
} from "./633146.77f467ae88.js";
import * as e from "./418851.24af49562e.js";
t.C(e);
import * as o from "./109308.fbb414d4aa.js";
t.C(o);
import * as r from "./399565.a7f9c29dec.js";
t.C(r);
import * as s from "./257798.0b3d6025cd.js";
t.C(s);
import * as a from "./153380.6675e448cd.js";
t.C(a);
import * as p from "./617936.ab7454adbe.js";
t.C(p);
import * as n from "./807489.74b193586a.js";
t.C(n);
import * as i from "./337882.eb4e205b01.js";
t.C(i);
import * as m from "./955979.c147b344d3.js";
t.C(m);
import * as c from "./646436.92303256ff.js";
t.C(c);
import * as d from "./7078.1a10efd8a2.js";
t.C(d);
import * as f from "./200429.6705d27d2a.js";
t.C(f);
import * as g from "./698524.7253a53056.js";
t.C(g);
import * as h from "./956483.cb805cdd0f.js";
t.C(h);
import * as l from "./87162.636a6b2a55.js";
t.C(l);
import * as C from "./396705.c39944bbf2.js";
t.C(C);
import * as j from "./155568.d3b291934c.js";
t.C(j);
import * as u from "./731863.8b87e9728a.js";
t.C(u);
import * as b from "./767086.6da4be4bcc.js";
t.C(b);
import * as _ from "./76629.c67c63e9cf.js";
t.C(_);
import * as y from "./514085.4d87b5885b.js";
t.C(y);
import * as w from "./204542.cb541ce34a.js";
t.C(w);
import * as x from "./982651.7bfd071e83.js";
t.C(x);
import * as v from "./673108.34c2463692.js";
t.C(v);
import * as I from "./487481.90065b7f5d.js";
t.C(I);
import * as P from "./229522.aca0c6dfc8.js";
t.C(P);
import * as G from "./390575.8f68283a1b.js";
t.C(G);
import * as k from "./353032.f68e05ddda.js";
t.C(k);
import * as T from "./637885.a0eaa62308.js";
t.C(T);
import * as S from "./226913.b323f04fd6.js";
t.C(S);
import * as U from "./902158.5a4b6c2c66.js";
t.C(U);
import * as A from "./315523.9e073ddc1d.js";
t.C(A);
var D = t(t.s = "ojrv"),
    W = D.a,
    $ = D.b;
export {
    W as
    default, $ as meta
};