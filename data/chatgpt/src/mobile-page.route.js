export const __rspack_esm_ids = [155179];
export const __webpack_modules__ = {
    Y99E: (function(e, a, r) {
        r.d(a, {
            a: () => d,
            b: () => b,
            c: () => p,
            d: () => j
        });
        var t = r("jqIZ"),
            o = r("ABep"),
            s = r("QosV"),
            i = r("Bbed"),
            m = r("zd8w"),
            n = r("ZunA");

        function c(e) {
            let a, r, t = (0, s.c)(3),
                {
                    status: o
                } = e;
            return t[0] !== o ? (a = () => {
                let e = (0, n.getMobilePageHost)();
                if (null == e) return;
                let a = () => {
                        let a = e.getNavigation(),
                            r = a.history.at(-1);
                        null != r && e.publishPage(r.pageId, a.visitId, {
                            type: "lifecycle",
                            status: o
                        })
                    },
                    r = requestAnimationFrame(a),
                    t = (0, n.e)(e, a);
                return () => {
                    cancelAnimationFrame(r), t()
                }
            }, r = [o], t[0] = o, t[1] = a, t[2] = r) : (a = t[1], r = t[2]), (0, m.useLayoutEffect)(a, r), null
        }
        var f = r("jZDY");
        let l = (0, i.a)(async () => (await Promise.all([r.e(680612), r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(226913), r.e(753405), r.e(585419), r.e(100643), r.e(353230), r.e(985455), r.e(87825), r.e(961322), r.e(62441), r.e(23330), r.e(118186), r.e(17983), r.e(637093), r.e(466683), r.e(40758), r.e(285572), r.e(403528), r.e(521960), r.e(357882), r.e(141830)]).then(r.bind(r, "bBXv"))).MobilePageApp, {
            errorFallback: () => (0, o.jsx)(d, {})
        });
        async function p() {
            let {
                loadBrowserChatGptAuth: e,
                setBrowserSessionLink: a
            } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(226913)]).then(r.bind(r, "QdUF")), {
                getMobilePageHost: t
            } = await Promise.resolve().then(r.bind(r, "ZunA")), o = t();
            if (null == o) throw Error("Native Page host is unavailable");
            let s = a({
                authenticate: e => o.authenticate(e),
                isActive: () => "closed" !== o.getSnapshot().status
            });
            if (window.addEventListener("pagehide", s, {
                    once: !0
                }), await o.connect(), Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575)]).then(r.bind(r, "W0bA")).then(e => {
                    let {
                        prefetchPageEditorContent: a
                    } = e;
                    return a()
                }).catch(() => void 0), await e() == null) throw Error("Page cookie session is unavailable");
            let {
                initializeAppHostServices: i
            } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(226913)]).then(r.bind(r, "rXOS"));
            return await i(), null
        }
        p.hydrate = !0;
        let b = (0, t.ib)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(o.Fragment, {}), a[0] = e) : e = a[0], e
            }),
            d = (0, t.hb)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(c, {
                    status: "failed"
                }), a[0] = e) : e = a[0], e
            });
        var j = (0, t.gb)(function() {
            return (0, f.a)() ? (0, o.jsx)(l, {}) : (0, o.jsx)(b, {})
        })
    }),
    EBQV: (function(a) {
        a.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.2285f1d8aa.js";
import * as a from "./418851.a4e06377a0.js";
e.C(a);
import * as r from "./109308.c442cdd552.js";
e.C(r);
import * as t from "./399565.beb7308a81.js";
e.C(t);
import * as o from "./257798.1c607c1777.js";
e.C(o);
import * as s from "./153380.b37e665dc3.js";
e.C(s);
import * as i from "./617936.784843eda2.js";
e.C(i);
import * as m from "./807489.43c08228d1.js";
e.C(m);
import * as n from "./337882.25be89bb6b.js";
e.C(n);
import * as c from "./955979.4d2a69cba7.js";
e.C(c);
import * as f from "./646436.9dd5128297.js";
e.C(f);
import * as l from "./7078.b81fd6ebdf.js";
e.C(l);
import * as p from "./200429.b8bf5eb48b.js";
e.C(p);
import * as b from "./698524.3578a8549b.js";
e.C(b);
import * as d from "./956483.8b486f09f8.js";
e.C(d);
import * as j from "./87162.984eea3ac6.js";
e.C(j);
import * as u from "./396705.3c89161782.js";
e.C(u);
import * as _ from "./155568.af6d2aefa8.js";
e.C(_);
import * as C from "./731863.0ff6d7d48b.js";
e.C(C);
import * as h from "./767086.75fa16b40d.js";
e.C(h);
import * as w from "./76629.5f0e27ddaa.js";
e.C(w);
import * as v from "./514085.974d142f7d.js";
e.C(v);
import * as g from "./204542.61a52e24da.js";
e.C(g);
import * as x from "./982651.82d8538ea6.js";
e.C(x);
import * as y from "./673108.fb5f4728ad.js";
e.C(y);
import * as k from "./487481.8cb886e883.js";
e.C(k);
import * as P from "./229522.d004cde422.js";
e.C(P);
import * as E from "./390575.e91c694262.js";
e.C(E);
import * as A from "./226913.d4efcaca8e.js";
e.C(A);
import * as F from "./155179.afd3bfe053.js";
e.C(F);
var B = e(e.s = "Y99E"),
    L = B.a,
    S = B.b,
    Z = B.c,
    H = B.d;
export {
    L as ErrorBoundary, S as HydrateFallback, Z as clientLoader, H as
    default
};