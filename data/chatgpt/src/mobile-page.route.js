export const __rspack_esm_ids = [155179];
export const __webpack_modules__ = {
    aWjB: (function(e, a, t) {
        t.d(a, {
            a: () => b,
            b: () => p,
            c: () => f,
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
        let d = (0, i.a)(async () => (await Promise.all([t.e(680612), t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085), t.e(226913), t.e(753405), t.e(321957), t.e(585419), t.e(100643), t.e(843292), t.e(353230), t.e(882456), t.e(212773), t.e(85380), t.e(642724), t.e(909395), t.e(529755), t.e(212487), t.e(17983), t.e(704809), t.e(920484), t.e(652194), t.e(311330), t.e(829555), t.e(352477), t.e(997921), t.e(249656), t.e(40758), t.e(460752), t.e(586395), t.e(720781), t.e(359687)]).then(t.bind(t, "zOb3"))).MobilePageApp, {
            errorFallback: () => (0, o.jsx)(b, {})
        });
        async function f() {
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
        f.hydrate = !0;
        let p = (0, r.jb)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(o.Fragment, {}), a[0] = e) : e = a[0], e
            }),
            b = (0, r.ib)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(c, {
                    status: "failed"
                }), a[0] = e) : e = a[0], e
            });
        var u = (0, r.hb)(function() {
            return (0, l.a)() ? (0, o.jsx)(d, {}) : (0, o.jsx)(p, {})
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
} from "./633146.468d071759.js";
import * as a from "./418851.f3d2ce19b4.js";
e.C(a);
import * as t from "./109308.4b30101b7c.js";
e.C(t);
import * as r from "./399565.7c8a3f7e95.js";
e.C(r);
import * as o from "./257798.b061e3b37a.js";
e.C(o);
import * as s from "./447351.9446ee3aae.js";
e.C(s);
import * as i from "./617936.a5a9458f41.js";
e.C(i);
import * as n from "./807489.503e8e46b2.js";
e.C(n);
import * as m from "./337882.42cb1bc757.js";
e.C(m);
import * as c from "./955979.7655b0fa98.js";
e.C(c);
import * as l from "./646436.ad0e600e92.js";
e.C(l);
import * as d from "./7078.20ffc77da3.js";
e.C(d);
import * as f from "./200429.b7f8e76f67.js";
e.C(f);
import * as p from "./698524.ab39482137.js";
e.C(p);
import * as b from "./956483.4dc58508d8.js";
e.C(b);
import * as u from "./87162.6154a54863.js";
e.C(u);
import * as j from "./396705.cf1cfb54a0.js";
e.C(j);
import * as _ from "./155568.831b2b3d34.js";
e.C(_);
import * as C from "./731863.6fc88890bf.js";
e.C(C);
import * as h from "./767086.c88be6c073.js";
e.C(h);
import * as w from "./76629.30a094a9b3.js";
e.C(w);
import * as v from "./514085.037ce67b03.js";
e.C(v);
import * as x from "./226913.a7e38eae43.js";
e.C(x);
import * as y from "./155179.3542046502.js";
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