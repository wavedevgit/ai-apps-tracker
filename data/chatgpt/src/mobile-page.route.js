export const __rspack_esm_ids = [155179];
export const __webpack_modules__ = {
    sTiw: (function(e, a, r) {
        r.d(a, {
            a: () => b,
            b: () => p,
            c: () => d,
            d: () => j
        });
        var t = r("jqIZ"),
            o = r("ABep"),
            s = r("QosV"),
            i = r("Bbed"),
            m = r("zd8w"),
            n = r("qoC5");

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
        var l = r("jZDY");
        let f = (0, i.a)(async () => (await Promise.all([r.e(680612), r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(226913), r.e(100643), r.e(293132), r.e(653896), r.e(225114), r.e(466683), r.e(40758), r.e(99939), r.e(555385), r.e(70254), r.e(72679)]).then(r.bind(r, "yoBk"))).MobilePageApp, {
            errorFallback: () => (0, o.jsx)(b, {})
        });
        async function d() {
            let {
                loadBrowserChatGptAuth: e,
                setBrowserSessionLink: a
            } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(226913)]).then(r.bind(r, "QdUF")), {
                getMobilePageHost: t
            } = await Promise.resolve().then(r.bind(r, "qoC5")), o = t();
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
        d.hydrate = !0;
        let p = (0, t.jb)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(o.Fragment, {}), a[0] = e) : e = a[0], e
            }),
            b = (0, t.ib)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(c, {
                    status: "failed"
                }), a[0] = e) : e = a[0], e
            });
        var j = (0, t.hb)(function() {
            return (0, l.a)() ? (0, o.jsx)(f, {}) : (0, o.jsx)(p, {})
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
} from "./633146.964c984ed7.js";
import * as a from "./418851.c7affd7577.js";
e.C(a);
import * as r from "./109308.2067dd405d.js";
e.C(r);
import * as t from "./399565.beb7308a81.js";
e.C(t);
import * as o from "./257798.0e32046830.js";
e.C(o);
import * as s from "./153380.b37e665dc3.js";
e.C(s);
import * as i from "./617936.2476429d96.js";
e.C(i);
import * as m from "./807489.9458244852.js";
e.C(m);
import * as n from "./337882.e07f580a48.js";
e.C(n);
import * as c from "./955979.05c8e45086.js";
e.C(c);
import * as l from "./646436.e3dcb7fd91.js";
e.C(l);
import * as f from "./7078.9eaa101340.js";
e.C(f);
import * as d from "./200429.7a961ae92e.js";
e.C(d);
import * as p from "./698524.49e0cea73d.js";
e.C(p);
import * as b from "./956483.e6829ce2a9.js";
e.C(b);
import * as j from "./87162.c2477fdada.js";
e.C(j);
import * as u from "./396705.3c89161782.js";
e.C(u);
import * as _ from "./155568.7dddc92fa5.js";
e.C(_);
import * as C from "./731863.8768053da9.js";
e.C(C);
import * as h from "./767086.3f041a5fc2.js";
e.C(h);
import * as w from "./76629.5f0e27ddaa.js";
e.C(w);
import * as y from "./514085.3ca178ec38.js";
e.C(y);
import * as v from "./204542.5ea73b9847.js";
e.C(v);
import * as x from "./982651.e3e642aae5.js";
e.C(x);
import * as g from "./673108.a9ab7658bc.js";
e.C(g);
import * as k from "./487481.48e52e80ee.js";
e.C(k);
import * as P from "./229522.dd837a2fb9.js";
e.C(P);
import * as E from "./390575.2d5cbad254.js";
e.C(E);
import * as F from "./226913.a6f571e7d4.js";
e.C(F);
import * as A from "./155179.0256a939a4.js";
e.C(A);
var B = e(e.s = "sTiw"),
    q = B.a,
    L = B.b,
    S = B.c,
    H = B.d;
export {
    q as ErrorBoundary, L as HydrateFallback, S as clientLoader, H as
    default
};