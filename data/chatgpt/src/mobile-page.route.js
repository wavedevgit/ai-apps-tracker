export const __rspack_esm_ids = [155179];
export const __webpack_modules__ = {
    Y99E: (function(e, a, r) {
        r.d(a, {
            a: () => j,
            b: () => p,
            c: () => d,
            d: () => b
        });
        var t = r("jqIZ"),
            o = r("ABep"),
            s = r("QosV"),
            i = r("Bbed"),
            m = r("zd8w"),
            f = r("ZunA");

        function n(e) {
            let a, r, t = (0, s.c)(3),
                {
                    status: o
                } = e;
            return t[0] !== o ? (a = () => {
                let e = (0, f.getMobilePageHost)();
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
                    t = (0, f.e)(e, a);
                return () => {
                    cancelAnimationFrame(r), t()
                }
            }, r = [o], t[0] = o, t[1] = a, t[2] = r) : (a = t[1], r = t[2]), (0, m.useLayoutEffect)(a, r), null
        }
        var c = r("jZDY");
        let l = (0, i.a)(async () => (await Promise.all([r.e(680612), r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(954244), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(284470), r.e(226913), r.e(753405), r.e(585419), r.e(100643), r.e(353230), r.e(789902), r.e(470499), r.e(62441), r.e(789156), r.e(454441), r.e(877533), r.e(637093), r.e(213681), r.e(40758), r.e(403528), r.e(244369), r.e(355102), r.e(461751), r.e(67355)]).then(r.bind(r, "bBXv"))).MobilePageApp, {
            errorFallback: () => (0, o.jsx)(j, {})
        });
        async function d() {
            let {
                loadBrowserChatGptAuth: e,
                setBrowserSessionLink: a
            } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(954244), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(284470), r.e(226913)]).then(r.bind(r, "QdUF")), {
                getMobilePageHost: t
            } = await Promise.resolve().then(r.bind(r, "ZunA")), o = t();
            if (null == o) throw Error("Native Page host is unavailable");
            let s = a({
                authenticate: e => o.authenticate(e),
                isActive: () => "closed" !== o.getSnapshot().status
            });
            if (window.addEventListener("pagehide", s, {
                    once: !0
                }), await o.connect(), Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(954244), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(284470)]).then(r.bind(r, "W0bA")).then(e => {
                    let {
                        prefetchPageEditorContent: a
                    } = e;
                    return a()
                }).catch(() => void 0), await e() == null) throw Error("Page cookie session is unavailable");
            let {
                initializeAppHostServices: i
            } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(954244), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(284470), r.e(226913)]).then(r.bind(r, "rXOS"));
            return await i(), null
        }
        d.hydrate = !0;
        let p = (0, t.jb)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(o.Fragment, {}), a[0] = e) : e = a[0], e
            }),
            j = (0, t.ib)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(n, {
                    status: "failed"
                }), a[0] = e) : e = a[0], e
            });
        var b = (0, t.hb)(function() {
            return (0, c.a)() ? (0, o.jsx)(l, {}) : (0, o.jsx)(p, {})
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
} from "./633146.7cb1d15d36.js";
import * as a from "./418851.b7e308d63f.js";
e.C(a);
import * as r from "./109308.c442cdd552.js";
e.C(r);
import * as t from "./399565.beb7308a81.js";
e.C(t);
import * as o from "./257798.792002e040.js";
e.C(o);
import * as s from "./153380.b37e665dc3.js";
e.C(s);
import * as i from "./617936.784843eda2.js";
e.C(i);
import * as m from "./807489.32eaa3bfde.js";
e.C(m);
import * as f from "./337882.a218dee2ea.js";
e.C(f);
import * as n from "./955979.df2bdba33b.js";
e.C(n);
import * as c from "./646436.86e72977af.js";
e.C(c);
import * as l from "./7078.648d8d0cdc.js";
e.C(l);
import * as d from "./200429.e22bc560bf.js";
e.C(d);
import * as p from "./698524.3b9d724f7f.js";
e.C(p);
import * as j from "./956483.3c01676f85.js";
e.C(j);
import * as b from "./87162.5d1a0f8597.js";
e.C(b);
import * as u from "./396705.3c89161782.js";
e.C(u);
import * as _ from "./155568.00847261aa.js";
e.C(_);
import * as C from "./954244.f1f0297f58.js";
e.C(C);
import * as h from "./767086.9e6d665679.js";
e.C(h);
import * as w from "./76629.085a7a68cd.js";
e.C(w);
import * as v from "./514085.69eeffa09c.js";
e.C(v);
import * as x from "./204542.cf544f67b1.js";
e.C(x);
import * as y from "./982651.7bfd071e83.js";
e.C(y);
import * as g from "./673108.6e221d7edd.js";
e.C(g);
import * as k from "./487481.9664a1aa96.js";
e.C(k);
import * as P from "./229522.10a6ab3813.js";
e.C(P);
import * as E from "./390575.bce7dba0df.js";
e.C(E);
import * as A from "./353032.2edb55e631.js";
e.C(A);
import * as F from "./637885.18b43d022e.js";
e.C(F);
import * as B from "./284470.f09dd710a4.js";
e.C(B);
import * as L from "./226913.b323f04fd6.js";
e.C(L);
import * as S from "./155179.fb99d99c90.js";
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