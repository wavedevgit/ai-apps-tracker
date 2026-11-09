export const __rspack_esm_ids = [155179];
export const __webpack_modules__ = {
    Y99E: (function(e, a, r) {
        r.d(a, {
            a: () => b,
            b: () => d,
            c: () => p,
            d: () => j
        });
        var t = r("jqIZ"),
            o = r("ABep"),
            s = r("QosV"),
            i = r("Bbed"),
            m = r("zd8w"),
            n = r("ZunA");

        function f(e) {
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
        var c = r("jZDY");
        let l = (0, i.a)(async () => (await Promise.all([r.e(680612), r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(226913), r.e(753405), r.e(321957), r.e(585419), r.e(100643), r.e(843292), r.e(353230), r.e(882456), r.e(145049), r.e(470499), r.e(96746), r.e(355084), r.e(909395), r.e(789156), r.e(212487), r.e(17983), r.e(887746), r.e(829555), r.e(213681), r.e(508414), r.e(40758), r.e(551453), r.e(329137), r.e(977516), r.e(254695)]).then(r.bind(r, "zOb3"))).MobilePageApp, {
            errorFallback: () => (0, o.jsx)(b, {})
        });
        async function p() {
            let {
                loadBrowserChatGptAuth: e,
                setBrowserSessionLink: a
            } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(226913)]).then(r.bind(r, "QdUF")), {
                getMobilePageHost: t
            } = await Promise.resolve().then(r.bind(r, "ZunA")), o = t();
            if (null == o) throw Error("Native Page host is unavailable");
            let s = a({
                authenticate: e => o.authenticate(e),
                isActive: () => "closed" !== o.getSnapshot().status
            });
            if (window.addEventListener("pagehide", s, {
                    once: !0
                }), await o.connect(), Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885)]).then(r.bind(r, "W0bA")).then(e => {
                    let {
                        prefetchPageEditorContent: a
                    } = e;
                    return a()
                }).catch(() => void 0), await e() == null) throw Error("Page cookie session is unavailable");
            let {
                initializeAppHostServices: i
            } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(226913)]).then(r.bind(r, "rXOS"));
            return await i(), null
        }
        p.hydrate = !0;
        let d = (0, t.jb)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(o.Fragment, {}), a[0] = e) : e = a[0], e
            }),
            b = (0, t.ib)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(f, {
                    status: "failed"
                }), a[0] = e) : e = a[0], e
            });
        var j = (0, t.hb)(function() {
            return (0, c.a)() ? (0, o.jsx)(l, {}) : (0, o.jsx)(d, {})
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
} from "./633146.578f2b23b5.js";
import * as a from "./418851.a2414d348c.js";
e.C(a);
import * as r from "./109308.fbb414d4aa.js";
e.C(r);
import * as t from "./399565.a7f9c29dec.js";
e.C(t);
import * as o from "./257798.0b3d6025cd.js";
e.C(o);
import * as s from "./153380.6675e448cd.js";
e.C(s);
import * as i from "./617936.d20f0bb1f2.js";
e.C(i);
import * as m from "./807489.7f3d71f5dd.js";
e.C(m);
import * as n from "./337882.eb4e205b01.js";
e.C(n);
import * as f from "./955979.1d3a3c3d70.js";
e.C(f);
import * as c from "./646436.669c479758.js";
e.C(c);
import * as l from "./7078.5a4ac5b67f.js";
e.C(l);
import * as p from "./200429.508d689d4a.js";
e.C(p);
import * as d from "./698524.7580180eba.js";
e.C(d);
import * as b from "./956483.21cf7af8b4.js";
e.C(b);
import * as j from "./87162.636a6b2a55.js";
e.C(j);
import * as u from "./396705.c39944bbf2.js";
e.C(u);
import * as _ from "./155568.d3b291934c.js";
e.C(_);
import * as C from "./731863.8b87e9728a.js";
e.C(C);
import * as h from "./767086.6da4be4bcc.js";
e.C(h);
import * as w from "./76629.13408f2772.js";
e.C(w);
import * as v from "./514085.9f7c2a584b.js";
e.C(v);
import * as x from "./204542.a19c84b141.js";
e.C(x);
import * as y from "./982651.7bfd071e83.js";
e.C(y);
import * as g from "./673108.39ad50630b.js";
e.C(g);
import * as k from "./487481.4c3625a8ea.js";
e.C(k);
import * as P from "./229522.a213296c9c.js";
e.C(P);
import * as E from "./390575.81bb6844fb.js";
e.C(E);
import * as A from "./353032.6c4c0e25a0.js";
e.C(A);
import * as F from "./637885.77f633a270.js";
e.C(F);
import * as B from "./226913.b323f04fd6.js";
e.C(B);
import * as L from "./155179.cea658b70a.js";
e.C(L);
var S = e(e.s = "Y99E"),
    Z = S.a,
    H = S.b,
    I = S.c,
    Q = S.d;
export {
    Z as ErrorBoundary, H as HydrateFallback, I as clientLoader, Q as
    default
};