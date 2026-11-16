export const __rspack_esm_ids = [155179];
export const __webpack_modules__ = {
    aWjB: (function(e, a, t) {
        t.d(a, {
            a: () => b,
            b: () => d,
            c: () => p,
            d: () => u
        });
        var r = t("rEML"),
            o = t("ABep"),
            s = t("QosV"),
            i = t("Bbed"),
            n = t("zd8w"),
            c = t("ZunA");

        function m(e) {
            let a, t, r = (0, s.c)(3),
                {
                    status: o
                } = e;
            return r[0] !== o ? (a = () => {
                let e = (0, c.getMobilePageHost)();
                if (null == e) return;
                let a = () => {
                        let a = e.getNavigation(),
                            t = a.history.at(-1);
                        null != t && e.publishPage(t.pageId, a.visitId, {
                            type: "lifecycle",
                            status: o
                        })
                    },
                    t = requestAnimationFrame(a),
                    r = (0, c.e)(e, a);
                return () => {
                    cancelAnimationFrame(t), r()
                }
            }, t = [o], r[0] = o, r[1] = a, r[2] = t) : (a = r[1], t = r[2]), (0, n.useLayoutEffect)(a, t), null
        }
        var f = t("jZDY");
        let l = (0, i.a)(async () => (await Promise.all([t.e(680612), t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085), t.e(226913), t.e(753405), t.e(321957), t.e(585419), t.e(100643), t.e(843292), t.e(353230), t.e(882456), t.e(736970), t.e(173696), t.e(645167), t.e(355084), t.e(909395), t.e(212487), t.e(17983), t.e(832107), t.e(773363), t.e(311330), t.e(833306), t.e(904869), t.e(829555), t.e(442725), t.e(40758), t.e(309509), t.e(669446), t.e(268219), t.e(101044), t.e(129560)]).then(t.bind(t, "zOb3"))).MobilePageApp, {
            errorFallback: () => (0, o.jsx)(b, {})
        });
        async function p() {
            let {
                loadBrowserChatGptAuth: e,
                setBrowserSessionLink: a
            } = await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085), t.e(226913)]).then(t.bind(t, "QdUF")), {
                getMobilePageHost: r
            } = await Promise.resolve().then(t.bind(t, "ZunA")), o = r();
            if (null == o) throw Error("Native Page host is unavailable");
            let s = a({
                authenticate: e => o.authenticate(e),
                isActive: () => "closed" !== o.getSnapshot().status
            });
            if (window.addEventListener("pagehide", s, {
                    once: !0
                }), await o.connect(), Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085)]).then(t.bind(t, "W0bA")).then(e => {
                    let {
                        prefetchPageEditorContent: a
                    } = e;
                    return a()
                }).catch(() => void 0), await e() == null) throw Error("Page cookie session is unavailable");
            let {
                initializeAppHostServices: i
            } = await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085), t.e(226913)]).then(t.bind(t, "rXOS"));
            return await i(), null
        }
        p.hydrate = !0;
        let d = (0, r.jb)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(o.Fragment, {}), a[0] = e) : e = a[0], e
            }),
            b = (0, r.ib)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(m, {
                    status: "failed"
                }), a[0] = e) : e = a[0], e
            });
        var u = (0, r.hb)(function() {
            return (0, f.a)() ? (0, o.jsx)(l, {}) : (0, o.jsx)(d, {})
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
} from "./633146.0389b6b487.js";
import * as a from "./418851.d159eb4416.js";
e.C(a);
import * as t from "./109308.c9b7701e19.js";
e.C(t);
import * as r from "./399565.e3bd47902e.js";
e.C(r);
import * as o from "./257798.7e03f1e3e2.js";
e.C(o);
import * as s from "./447351.38c6663605.js";
e.C(s);
import * as i from "./617936.b641c39dad.js";
e.C(i);
import * as n from "./807489.f4f591ba36.js";
e.C(n);
import * as c from "./337882.ff3affb96a.js";
e.C(c);
import * as m from "./955979.1876fabeae.js";
e.C(m);
import * as f from "./646436.6a9ea7ce2b.js";
e.C(f);
import * as l from "./7078.7ac8d1f362.js";
e.C(l);
import * as p from "./200429.4d632ba2a6.js";
e.C(p);
import * as d from "./698524.389f4a7f6b.js";
e.C(d);
import * as b from "./956483.d858d35d29.js";
e.C(b);
import * as u from "./87162.77ec984516.js";
e.C(u);
import * as j from "./396705.20cd88e12f.js";
e.C(j);
import * as _ from "./155568.1c3d77f567.js";
e.C(_);
import * as C from "./731863.01f5ca0d2b.js";
e.C(C);
import * as h from "./767086.622205eb79.js";
e.C(h);
import * as w from "./76629.38c2f40595.js";
e.C(w);
import * as v from "./514085.505cf4281f.js";
e.C(v);
import * as x from "./226913.dd4de34d8f.js";
e.C(x);
import * as y from "./155179.94fa6b0f0a.js";
e.C(y);
var g = e(e.s = "aWjB"),
    k = g.a,
    P = g.b,
    A = g.c,
    E = g.d;
export {
    k as ErrorBoundary, P as HydrateFallback, A as clientLoader, E as
    default
};