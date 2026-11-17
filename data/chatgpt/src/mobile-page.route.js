export const __rspack_esm_ids = [155179];
export const __webpack_modules__ = {
    aWjB: (function(e, a, t) {
        t.d(a, {
            a: () => u,
            b: () => p,
            c: () => d,
            d: () => b
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
        var f = t("jZDY");
        let l = (0, i.a)(async () => (await Promise.all([t.e(680612), t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085), t.e(204542), t.e(226913), t.e(753405), t.e(321957), t.e(585419), t.e(100643), t.e(843292), t.e(353230), t.e(882456), t.e(736970), t.e(173696), t.e(891217), t.e(529755), t.e(909395), t.e(212487), t.e(17983), t.e(704809), t.e(920484), t.e(311330), t.e(642528), t.e(829555), t.e(352477), t.e(997921), t.e(40758), t.e(965640), t.e(109e3), t.e(268219), t.e(459781)]).then(t.bind(t, "zOb3"))).MobilePageApp, {
            errorFallback: () => (0, o.jsx)(u, {})
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
            u = (0, r.jb)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(c, {
                    status: "failed"
                }), a[0] = e) : e = a[0], e
            });
        var b = (0, r.ib)(function() {
            return (0, f.a)() ? (0, o.jsx)(l, {}) : (0, o.jsx)(p, {})
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
} from "./633146.be60f96fcf.js";
import * as a from "./418851.d43ef6e51c.js";
e.C(a);
import * as t from "./109308.2094c16514.js";
e.C(t);
import * as r from "./399565.78e1c0aa0d.js";
e.C(r);
import * as o from "./257798.7e03f1e3e2.js";
e.C(o);
import * as s from "./447351.b188109392.js";
e.C(s);
import * as i from "./617936.fb76eb2727.js";
e.C(i);
import * as n from "./807489.9c1a8ccf71.js";
e.C(n);
import * as m from "./337882.5c43a2c90b.js";
e.C(m);
import * as c from "./955979.9ae2962bd4.js";
e.C(c);
import * as f from "./646436.b525bfd8f0.js";
e.C(f);
import * as l from "./7078.a82238bfec.js";
e.C(l);
import * as d from "./200429.3bcaa139a4.js";
e.C(d);
import * as p from "./698524.3de98ac6af.js";
e.C(p);
import * as u from "./956483.227ec74d56.js";
e.C(u);
import * as b from "./87162.36edabe123.js";
e.C(b);
import * as j from "./396705.12275a5eb6.js";
e.C(j);
import * as _ from "./155568.b3f888f917.js";
e.C(_);
import * as C from "./731863.367082aec0.js";
e.C(C);
import * as h from "./767086.1a336b6bc5.js";
e.C(h);
import * as w from "./76629.93a69b821a.js";
e.C(w);
import * as v from "./514085.fe0c9f50e5.js";
e.C(v);
import * as x from "./204542.f3712a1345.js";
e.C(x);
import * as y from "./226913.dd4de34d8f.js";
e.C(y);
import * as g from "./155179.4d350fd069.js";
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