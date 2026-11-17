export const __rspack_esm_ids = [155179];
export const __webpack_modules__ = {
    aWjB: (function(e, a, t) {
        t.d(a, {
            a: () => b,
            b: () => p,
            c: () => d,
            d: () => u
        });
        var r = t("rEML"),
            o = t("ABep"),
            s = t("QosV"),
            i = t("Bbed"),
            n = t("zd8w"),
            m = t("ZunA");

        function c(e) {
            let a, t, r = (0, s.c)(3),
                {
                    status: o
                } = e;
            return r[0] !== o ? (a = () => {
                let e = (0, m.getMobilePageHost)();
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
                    r = (0, m.e)(e, a);
                return () => {
                    cancelAnimationFrame(t), r()
                }
            }, t = [o], r[0] = o, r[1] = a, r[2] = t) : (a = r[1], t = r[2]), (0, n.useLayoutEffect)(a, t), null
        }
        var l = t("jZDY");
        let f = (0, i.a)(async () => (await Promise.all([t.e(680612), t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085), t.e(204542), t.e(226913), t.e(753405), t.e(321957), t.e(585419), t.e(100643), t.e(843292), t.e(353230), t.e(882456), t.e(736970), t.e(173696), t.e(645167), t.e(355084), t.e(909395), t.e(212487), t.e(17983), t.e(704809), t.e(773363), t.e(311330), t.e(833306), t.e(904869), t.e(829555), t.e(784677), t.e(442725), t.e(40758), t.e(669446), t.e(268219), t.e(510462)]).then(t.bind(t, "zOb3"))).MobilePageApp, {
            errorFallback: () => (0, o.jsx)(b, {})
        });
        async function d() {
            let {
                loadBrowserChatGptAuth: e,
                setBrowserSessionLink: a
            } = await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085), t.e(204542), t.e(226913)]).then(t.bind(t, "QdUF")), {
                getMobilePageHost: r
            } = await Promise.resolve().then(t.bind(t, "ZunA")), o = r();
            if (null == o) throw Error("Native Page host is unavailable");
            let s = a({
                authenticate: e => o.authenticate(e),
                isActive: () => "closed" !== o.getSnapshot().status
            });
            if (window.addEventListener("pagehide", s, {
                    once: !0
                }), await o.connect(), Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085), t.e(204542)]).then(t.bind(t, "W0bA")).then(e => {
                    let {
                        prefetchPageEditorContent: a
                    } = e;
                    return a()
                }).catch(() => void 0), await e() == null) throw Error("Page cookie session is unavailable");
            let {
                initializeAppHostServices: i
            } = await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085), t.e(204542), t.e(226913)]).then(t.bind(t, "rXOS"));
            return await i(), null
        }
        d.hydrate = !0;
        let p = (0, r.kb)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(o.Fragment, {}), a[0] = e) : e = a[0], e
            }),
            b = (0, r.jb)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(c, {
                    status: "failed"
                }), a[0] = e) : e = a[0], e
            });
        var u = (0, r.ib)(function() {
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
} from "./633146.0181f6662c.js";
import * as a from "./418851.09486f68f7.js";
e.C(a);
import * as t from "./109308.cb66ec8473.js";
e.C(t);
import * as r from "./399565.e3bd47902e.js";
e.C(r);
import * as o from "./257798.7e03f1e3e2.js";
e.C(o);
import * as s from "./447351.74c4243102.js";
e.C(s);
import * as i from "./617936.b641c39dad.js";
e.C(i);
import * as n from "./807489.3f6f62fc4e.js";
e.C(n);
import * as m from "./337882.ac66e3b9e7.js";
e.C(m);
import * as c from "./955979.d6920ef47f.js";
e.C(c);
import * as l from "./646436.029c782154.js";
e.C(l);
import * as f from "./7078.197e9e74da.js";
e.C(f);
import * as d from "./200429.336016a921.js";
e.C(d);
import * as p from "./698524.1c89d5e682.js";
e.C(p);
import * as b from "./956483.aae39072ae.js";
e.C(b);
import * as u from "./87162.70963eaac7.js";
e.C(u);
import * as j from "./396705.63a7a7138f.js";
e.C(j);
import * as _ from "./155568.80ff0b0790.js";
e.C(_);
import * as C from "./731863.980fcc67e8.js";
e.C(C);
import * as h from "./767086.029c6e6cb7.js";
e.C(h);
import * as w from "./76629.f2ec2ff70b.js";
e.C(w);
import * as v from "./514085.a7493d29eb.js";
e.C(v);
import * as x from "./204542.d8a33857f0.js";
e.C(x);
import * as y from "./226913.dd4de34d8f.js";
e.C(y);
import * as g from "./155179.49b19589ec.js";
e.C(g);
var k = e(e.s = "aWjB"),
    P = k.a,
    A = k.b,
    E = k.c,
    B = k.d;
export {
    P as ErrorBoundary, A as HydrateFallback, E as clientLoader, B as
    default
};