export const __rspack_esm_ids = [155179];
export const __webpack_modules__ = {
    Y99E: (function(e, r, a) {
        a.d(r, {
            a: () => b,
            b: () => p,
            c: () => d,
            d: () => j
        });
        var t = a("jqIZ"),
            o = a("ABep"),
            s = a("QosV"),
            i = a("Bbed"),
            m = a("zd8w"),
            n = a("qoC5");

        function f(e) {
            let r, a, t = (0, s.c)(3),
                {
                    status: o
                } = e;
            return t[0] !== o ? (r = () => {
                let e = (0, n.getMobilePageHost)();
                if (null == e) return;
                let r = () => {
                        let r = e.getNavigation(),
                            a = r.history.at(-1);
                        null != a && e.publishPage(a.pageId, r.visitId, {
                            type: "lifecycle",
                            status: o
                        })
                    },
                    a = requestAnimationFrame(r),
                    t = (0, n.e)(e, r);
                return () => {
                    cancelAnimationFrame(a), t()
                }
            }, a = [o], t[0] = o, t[1] = r, t[2] = a) : (r = t[1], a = t[2]), (0, m.useLayoutEffect)(r, a), null
        }
        var c = a("jZDY");
        let l = (0, i.a)(async () => (await Promise.all([a.e(680612), a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(226913), a.e(753405), a.e(585419), a.e(100643), a.e(353230), a.e(985455), a.e(87825), a.e(961322), a.e(62441), a.e(23330), a.e(118186), a.e(17983), a.e(637093), a.e(466683), a.e(40758), a.e(285572), a.e(944255), a.e(521960), a.e(357882), a.e(987695)]).then(a.bind(a, "yoBk"))).MobilePageApp, {
            errorFallback: () => (0, o.jsx)(b, {})
        });
        async function d() {
            let {
                loadBrowserChatGptAuth: e,
                setBrowserSessionLink: r
            } = await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(226913)]).then(a.bind(a, "QdUF")), {
                getMobilePageHost: t
            } = await Promise.resolve().then(a.bind(a, "qoC5")), o = t();
            if (null == o) throw Error("Native Page host is unavailable");
            let s = r({
                authenticate: e => o.authenticate(e),
                isActive: () => "closed" !== o.getSnapshot().status
            });
            if (window.addEventListener("pagehide", s, {
                    once: !0
                }), await o.connect(), Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575)]).then(a.bind(a, "W0bA")).then(e => {
                    let {
                        prefetchPageEditorContent: r
                    } = e;
                    return r()
                }).catch(() => void 0), await e() == null) throw Error("Page cookie session is unavailable");
            let {
                initializeAppHostServices: i
            } = await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(226913)]).then(a.bind(a, "rXOS"));
            return await i(), null
        }
        d.hydrate = !0;
        let p = (0, t.jb)(function() {
                let e, r = (0, s.c)(1);
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(o.Fragment, {}), r[0] = e) : e = r[0], e
            }),
            b = (0, t.ib)(function() {
                let e, r = (0, s.c)(1);
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(f, {
                    status: "failed"
                }), r[0] = e) : e = r[0], e
            });
        var j = (0, t.hb)(function() {
            return (0, c.a)() ? (0, o.jsx)(l, {}) : (0, o.jsx)(p, {})
        })
    }),
    EBQV: (function(r) {
        r.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.90c01f9253.js";
import * as r from "./418851.8223607fdc.js";
e.C(r);
import * as a from "./109308.c08acb38d1.js";
e.C(a);
import * as t from "./399565.beb7308a81.js";
e.C(t);
import * as o from "./257798.7da3aa9ce1.js";
e.C(o);
import * as s from "./153380.b37e665dc3.js";
e.C(s);
import * as i from "./617936.784843eda2.js";
e.C(i);
import * as m from "./807489.f379ecd4c2.js";
e.C(m);
import * as n from "./337882.c379f93e06.js";
e.C(n);
import * as f from "./955979.0ae96bca1a.js";
e.C(f);
import * as c from "./646436.540b9bcff0.js";
e.C(c);
import * as l from "./7078.28a69829ad.js";
e.C(l);
import * as d from "./200429.b741fcd9d1.js";
e.C(d);
import * as p from "./698524.537e86a8b9.js";
e.C(p);
import * as b from "./956483.6cd5538ec3.js";
e.C(b);
import * as j from "./87162.9b77714e1f.js";
e.C(j);
import * as u from "./396705.3c89161782.js";
e.C(u);
import * as _ from "./155568.c5f5f4f092.js";
e.C(_);
import * as C from "./731863.8c6e142d90.js";
e.C(C);
import * as h from "./767086.e5c5bde1a6.js";
e.C(h);
import * as w from "./76629.5f0e27ddaa.js";
e.C(w);
import * as y from "./514085.a3d42a9f6d.js";
e.C(y);
import * as v from "./204542.ab5ad563f2.js";
e.C(v);
import * as x from "./982651.dd5becccb5.js";
e.C(x);
import * as g from "./673108.abb29bc38b.js";
e.C(g);
import * as k from "./487481.00377202b3.js";
e.C(k);
import * as P from "./229522.c04bfad971.js";
e.C(P);
import * as E from "./390575.18065a61dd.js";
e.C(E);
import * as F from "./226913.d4efcaca8e.js";
e.C(F);
import * as A from "./155179.a420a08c54.js";
e.C(A);
var B = e(e.s = "Y99E"),
    q = B.a,
    L = B.b,
    S = B.c,
    H = B.d;
export {
    q as ErrorBoundary, L as HydrateFallback, S as clientLoader, H as
    default
};