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
        let l = (0, i.a)(async () => (await Promise.all([r.e(680612), r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(226913), r.e(753405), r.e(321957), r.e(585419), r.e(100643), r.e(843292), r.e(353230), r.e(882456), r.e(145049), r.e(470499), r.e(96746), r.e(355084), r.e(909395), r.e(222981), r.e(212487), r.e(17983), r.e(645189), r.e(829555), r.e(135441), r.e(627482), r.e(125386), r.e(40758), r.e(216879), r.e(403528), r.e(241590), r.e(473891), r.e(646457), r.e(410835)]).then(r.bind(r, "zOb3"))).MobilePageApp, {
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
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(n, {
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
} from "./633146.79c7577f6d.js";
import * as a from "./418851.4cf783e1e4.js";
e.C(a);
import * as r from "./109308.fbb414d4aa.js";
e.C(r);
import * as t from "./399565.ed5e74a86b.js";
e.C(t);
import * as o from "./257798.0b3d6025cd.js";
e.C(o);
import * as s from "./153380.6675e448cd.js";
e.C(s);
import * as i from "./617936.5a72737818.js";
e.C(i);
import * as m from "./807489.54f5772d0d.js";
e.C(m);
import * as f from "./337882.26e5bd2b09.js";
e.C(f);
import * as n from "./955979.c158e14c67.js";
e.C(n);
import * as c from "./646436.73183b8431.js";
e.C(c);
import * as l from "./7078.92e3c91286.js";
e.C(l);
import * as p from "./200429.073fa1ac67.js";
e.C(p);
import * as d from "./698524.d0f80a4f75.js";
e.C(d);
import * as b from "./956483.7057f5dd90.js";
e.C(b);
import * as j from "./87162.29ee0bd2a9.js";
e.C(j);
import * as u from "./396705.c39944bbf2.js";
e.C(u);
import * as _ from "./155568.7bbfb72b85.js";
e.C(_);
import * as C from "./731863.8b87e9728a.js";
e.C(C);
import * as h from "./767086.6da4be4bcc.js";
e.C(h);
import * as w from "./76629.4a3def3f3d.js";
e.C(w);
import * as v from "./514085.fce2779453.js";
e.C(v);
import * as x from "./204542.ebe6ed48ad.js";
e.C(x);
import * as y from "./982651.7bfd071e83.js";
e.C(y);
import * as g from "./673108.aaf568e9f3.js";
e.C(g);
import * as k from "./487481.699d7b5953.js";
e.C(k);
import * as P from "./229522.110e65fd00.js";
e.C(P);
import * as E from "./390575.8e5cb2c01a.js";
e.C(E);
import * as A from "./353032.9312ae4acb.js";
e.C(A);
import * as F from "./637885.3e8c638fde.js";
e.C(F);
import * as B from "./226913.6965f848b1.js";
e.C(B);
import * as L from "./155179.4355a6a244.js";
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