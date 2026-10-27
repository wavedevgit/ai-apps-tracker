export const __rspack_esm_id = 155179;
export const __rspack_esm_ids = [155179];
export const __webpack_modules__ = {
    sTiw: (function(e, a, t) {
        t.d(a, {
            a: () => b,
            b: () => p,
            c: () => d,
            d: () => _
        });
        var r = t("jqIZ"),
            o = t("ABep"),
            s = t("QosV"),
            i = t("Bbed"),
            n = t("zd8w"),
            c = t("qoC5");

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
                    r = (0, c.d)(e, a);
                return () => {
                    cancelAnimationFrame(t), r()
                }
            }, t = [o], r[0] = o, r[1] = a, r[2] = t) : (a = r[1], t = r[2]), (0, n.useLayoutEffect)(a, t), null
        }
        var l = t("jZDY");
        let f = (0, i.a)(async () => (await Promise.all([t.e(680612), t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085), t.e(226913), t.e(959318), t.e(894898), t.e(888466), t.e(308812), t.e(841966), t.e(71969), t.e(566595), t.e(470360)]).then(t.bind(t, "gGNd"))).MobilePageApp, {
            errorFallback: () => (0, o.jsx)(b, {})
        });
        async function d() {
            let {
                loadBrowserChatGptAuth: e,
                setBrowserSessionLink: a
            } = await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085), t.e(226913)]).then(t.bind(t, "QdUF")), {
                getMobilePageHost: r
            } = await Promise.resolve().then(t.bind(t, "qoC5")), o = r();
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
        d.hydrate = !0;
        let p = (0, r.ib)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(o.Fragment, {}), a[0] = e) : e = a[0], e
            }),
            b = (0, r.hb)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(m, {
                    status: "failed"
                }), a[0] = e) : e = a[0], e
            });
        var _ = (0, r.gb)(function() {
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
} from "./633146.3772bb65f2.js";
import * as a from "./418851.f73cc339e0.js";
e.C(a);
import * as t from "./109308.7514f132d4.js";
e.C(t);
import * as r from "./399565.7c41a02089.js";
e.C(r);
import * as o from "./257798.d071083f55.js";
e.C(o);
import * as s from "./447351.235d9feb9b.js";
e.C(s);
import * as i from "./617936.5a9a90c450.js";
e.C(i);
import * as n from "./807489.8dca38b3d3.js";
e.C(n);
import * as c from "./337882.9e5e4eca02.js";
e.C(c);
import * as m from "./955979.48571145f4.js";
e.C(m);
import * as l from "./646436.7c73091269.js";
e.C(l);
import * as f from "./7078.2bd0b87ab7.js";
e.C(f);
import * as d from "./200429.2bc20b9a34.js";
e.C(d);
import * as p from "./698524.b544aec8f4.js";
e.C(p);
import * as b from "./956483.be04337593.js";
e.C(b);
import * as _ from "./87162.ad1e3760e6.js";
e.C(_);
import * as u from "./396705.8045a843b9.js";
e.C(u);
import * as j from "./155568.dca4d10394.js";
e.C(j);
import * as C from "./731863.f83b49d43f.js";
e.C(C);
import * as h from "./767086.e5c70972cb.js";
e.C(h);
import * as w from "./76629.6e18d367a6.js";
e.C(w);
import * as g from "./514085.399728d0f5.js";
e.C(g);
import * as x from "./226913.f2de3ceb87.js";
e.C(x);
import * as v from "./155179.107fb74fbc.js";
e.C(v);
var y = e(e.s = "sTiw"),
    k = y.a,
    P = y.b,
    E = y.c,
    F = y.d;
export {
    k as ErrorBoundary, P as HydrateFallback, E as clientLoader, F as
    default
};