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
            n = a("ZunA");

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
        let l = (0, i.a)(async () => (await Promise.all([a.e(680612), a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(284470), a.e(226913), a.e(753405), a.e(321957), a.e(585419), a.e(100643), a.e(843292), a.e(353230), a.e(882456), a.e(145049), a.e(470499), a.e(74050), a.e(355084), a.e(909395), a.e(789156), a.e(212487), a.e(17983), a.e(393442), a.e(829555), a.e(213681), a.e(508414), a.e(40758), a.e(551453), a.e(329137), a.e(26559), a.e(254695)]).then(a.bind(a, "zOb3"))).MobilePageApp, {
            errorFallback: () => (0, o.jsx)(d, {})
        });
        async function p() {
            let {
                loadBrowserChatGptAuth: e,
                setBrowserSessionLink: r
            } = await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(284470), a.e(226913)]).then(a.bind(a, "QdUF")), {
                getMobilePageHost: t
            } = await Promise.resolve().then(a.bind(a, "ZunA")), o = t();
            if (null == o) throw Error("Native Page host is unavailable");
            let s = r({
                authenticate: e => o.authenticate(e),
                isActive: () => "closed" !== o.getSnapshot().status
            });
            if (window.addEventListener("pagehide", s, {
                    once: !0
                }), await o.connect(), Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(284470)]).then(a.bind(a, "W0bA")).then(e => {
                    let {
                        prefetchPageEditorContent: r
                    } = e;
                    return r()
                }).catch(() => void 0), await e() == null) throw Error("Page cookie session is unavailable");
            let {
                initializeAppHostServices: i
            } = await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(284470), a.e(226913)]).then(a.bind(a, "rXOS"));
            return await i(), null
        }
        p.hydrate = !0;
        let b = (0, t.jb)(function() {
                let e, r = (0, s.c)(1);
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(o.Fragment, {}), r[0] = e) : e = r[0], e
            }),
            d = (0, t.ib)(function() {
                let e, r = (0, s.c)(1);
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(f, {
                    status: "failed"
                }), r[0] = e) : e = r[0], e
            });
        var j = (0, t.hb)(function() {
            return (0, c.a)() ? (0, o.jsx)(l, {}) : (0, o.jsx)(b, {})
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
} from "./633146.7a7da82fba.js";
import * as r from "./418851.7ea990b865.js";
e.C(r);
import * as a from "./109308.fbb414d4aa.js";
e.C(a);
import * as t from "./399565.a7f9c29dec.js";
e.C(t);
import * as o from "./257798.0b3d6025cd.js";
e.C(o);
import * as s from "./153380.6675e448cd.js";
e.C(s);
import * as i from "./617936.c61cb3b894.js";
e.C(i);
import * as m from "./807489.00704ce5f6.js";
e.C(m);
import * as n from "./337882.d56c5dd9ec.js";
e.C(n);
import * as f from "./955979.4ec7b9c49b.js";
e.C(f);
import * as c from "./646436.1f33d39585.js";
e.C(c);
import * as l from "./7078.e9c7fab122.js";
e.C(l);
import * as p from "./200429.4217a3f10d.js";
e.C(p);
import * as b from "./698524.cd24e3b049.js";
e.C(b);
import * as d from "./956483.d9bedeb1ff.js";
e.C(d);
import * as j from "./87162.636a6b2a55.js";
e.C(j);
import * as u from "./396705.c39944bbf2.js";
e.C(u);
import * as _ from "./155568.984a5c9de4.js";
e.C(_);
import * as C from "./731863.8b87e9728a.js";
e.C(C);
import * as h from "./767086.db77131b17.js";
e.C(h);
import * as w from "./76629.2edc9c8efc.js";
e.C(w);
import * as v from "./514085.87ea9a1275.js";
e.C(v);
import * as x from "./204542.91dfabf541.js";
e.C(x);
import * as y from "./982651.7bfd071e83.js";
e.C(y);
import * as g from "./673108.8e78836d0a.js";
e.C(g);
import * as k from "./487481.59f4896493.js";
e.C(k);
import * as P from "./229522.e2e5d6765c.js";
e.C(P);
import * as E from "./390575.8b3e50f119.js";
e.C(E);
import * as A from "./353032.600f273724.js";
e.C(A);
import * as F from "./637885.d599a2287f.js";
e.C(F);
import * as B from "./284470.fdb0479a8d.js";
e.C(B);
import * as L from "./226913.b323f04fd6.js";
e.C(L);
import * as S from "./155179.7d156ae9fb.js";
e.C(S);
var Z = e(e.s = "Y99E"),
    H = Z.a,
    I = Z.b,
    Q = Z.c,
    Y = Z.d;
export {
    H as ErrorBoundary, I as HydrateFallback, Q as clientLoader, Y as
    default
};