export const __rspack_esm_ids = [155179];
export const __webpack_modules__ = {
    Y99E: (function(e, r, a) {
        a.d(r, {
            a: () => d,
            b: () => b,
            c: () => p,
            d: () => j
        });
        var t = a("jqIZ"),
            o = a("ABep"),
            s = a("QosV"),
            i = a("Bbed"),
            m = a("zd8w"),
            c = a("qoC5");

        function n(e) {
            let r, a, t = (0, s.c)(3),
                {
                    status: o
                } = e;
            return t[0] !== o ? (r = () => {
                let e = (0, c.getMobilePageHost)();
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
                    t = (0, c.e)(e, r);
                return () => {
                    cancelAnimationFrame(a), t()
                }
            }, a = [o], t[0] = o, t[1] = r, t[2] = a) : (r = t[1], a = t[2]), (0, m.useLayoutEffect)(r, a), null
        }
        var f = a("jZDY");
        let l = (0, i.a)(async () => (await Promise.all([a.e(680612), a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(226913), a.e(753405), a.e(585419), a.e(100643), a.e(353230), a.e(985455), a.e(297895), a.e(961322), a.e(62441), a.e(23330), a.e(118186), a.e(17983), a.e(637093), a.e(466683), a.e(40758), a.e(285572), a.e(544435), a.e(521960), a.e(101288)]).then(a.bind(a, "yoBk"))).MobilePageApp, {
            errorFallback: () => (0, o.jsx)(d, {})
        });
        async function p() {
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
        p.hydrate = !0;
        let b = (0, t.jb)(function() {
                let e, r = (0, s.c)(1);
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(o.Fragment, {}), r[0] = e) : e = r[0], e
            }),
            d = (0, t.ib)(function() {
                let e, r = (0, s.c)(1);
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(n, {
                    status: "failed"
                }), r[0] = e) : e = r[0], e
            });
        var j = (0, t.hb)(function() {
            return (0, f.a)() ? (0, o.jsx)(l, {}) : (0, o.jsx)(b, {})
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
} from "./633146.ad30168cc5.js";
import * as r from "./418851.1a6ec3f7a6.js";
e.C(r);
import * as a from "./109308.0f3d40cad2.js";
e.C(a);
import * as t from "./399565.beb7308a81.js";
e.C(t);
import * as o from "./257798.0e32046830.js";
e.C(o);
import * as s from "./153380.b37e665dc3.js";
e.C(s);
import * as i from "./617936.5a3208804f.js";
e.C(i);
import * as m from "./807489.e42a7674a2.js";
e.C(m);
import * as c from "./337882.91b5e51416.js";
e.C(c);
import * as n from "./955979.a1cb9fc819.js";
e.C(n);
import * as f from "./646436.13c4c5aea2.js";
e.C(f);
import * as l from "./7078.1728ecbbe0.js";
e.C(l);
import * as p from "./200429.7713975d80.js";
e.C(p);
import * as b from "./698524.683f16eb70.js";
e.C(b);
import * as d from "./956483.4a438de2d2.js";
e.C(d);
import * as j from "./87162.8ee931325b.js";
e.C(j);
import * as u from "./396705.3c89161782.js";
e.C(u);
import * as _ from "./155568.24bb5c278e.js";
e.C(_);
import * as C from "./731863.ed9ad18f1b.js";
e.C(C);
import * as h from "./767086.b3f0ce77f4.js";
e.C(h);
import * as w from "./76629.5f0e27ddaa.js";
e.C(w);
import * as y from "./514085.75218b0632.js";
e.C(y);
import * as v from "./204542.fb97c3216e.js";
e.C(v);
import * as x from "./982651.051ec24255.js";
e.C(x);
import * as g from "./673108.bb2889c8d0.js";
e.C(g);
import * as k from "./487481.92480905b5.js";
e.C(k);
import * as P from "./229522.e4472aff26.js";
e.C(P);
import * as E from "./390575.12b3c42959.js";
e.C(E);
import * as F from "./226913.a6f571e7d4.js";
e.C(F);
import * as A from "./155179.d8eb156d39.js";
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