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

        function l(e) {
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
        var c = t("jZDY");
        let f = (0, i.a)(async () => (await Promise.all([t.e(680612), t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(226913), t.e(753405), t.e(321957), t.e(585419), t.e(100643), t.e(843292), t.e(353230), t.e(882456), t.e(212773), t.e(85380), t.e(642724), t.e(909395), t.e(529755), t.e(212487), t.e(17983), t.e(704809), t.e(920484), t.e(652194), t.e(474605), t.e(311330), t.e(352477), t.e(829555), t.e(997921), t.e(40758), t.e(751192), t.e(586395), t.e(184279), t.e(790977)]).then(t.bind(t, "lpWT"))).MobilePageApp, {
            errorFallback: () => (0, o.jsx)(b, {})
        });
        async function d() {
            let {
                loadBrowserChatGptAuth: e,
                setBrowserSessionLink: a
            } = await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(226913)]).then(t.bind(t, "QdUF")), {
                getMobilePageHost: r
            } = await Promise.resolve().then(t.bind(t, "ZunA")), o = r();
            if (null == o) throw Error("Native Page host is unavailable");
            let s = a({
                authenticate: e => o.authenticate(e),
                isActive: () => "closed" !== o.getSnapshot().status
            });
            if (window.addEventListener("pagehide", s, {
                    once: !0
                }), await o.connect(), Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086)]).then(t.bind(t, "W0bA")).then(e => {
                    let {
                        prefetchPageEditorContent: a
                    } = e;
                    return a()
                }).catch(() => void 0), await e() == null) throw Error("Page cookie session is unavailable");
            let {
                initializeAppHostServices: i
            } = await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(226913)]).then(t.bind(t, "rXOS"));
            return await i(), null
        }
        d.hydrate = !0;
        let p = (0, r.mb)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(o.Fragment, {}), a[0] = e) : e = a[0], e
            }),
            b = (0, r.lb)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(l, {
                    status: "failed"
                }), a[0] = e) : e = a[0], e
            });
        var u = (0, r.kb)(function() {
            return (0, c.a)() ? (0, o.jsx)(f, {}) : (0, o.jsx)(p, {})
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
} from "./633146.2ddddba2a5.js";
import * as a from "./418851.f34514cc3f.js";
e.C(a);
import * as t from "./109308.8b09661749.js";
e.C(t);
import * as r from "./399565.edefe43a76.js";
e.C(r);
import * as o from "./257798.6b4268ddac.js";
e.C(o);
import * as s from "./447351.34d04099ca.js";
e.C(s);
import * as i from "./617936.4a1557f13c.js";
e.C(i);
import * as n from "./807489.6b5279adf3.js";
e.C(n);
import * as m from "./337882.568bafdf14.js";
e.C(m);
import * as l from "./955979.b2a7e19963.js";
e.C(l);
import * as c from "./646436.5963e38f02.js";
e.C(c);
import * as f from "./7078.0a9a41e515.js";
e.C(f);
import * as d from "./200429.a549930e29.js";
e.C(d);
import * as p from "./698524.48945354c5.js";
e.C(p);
import * as b from "./956483.962c0de04b.js";
e.C(b);
import * as u from "./87162.e4a69efaac.js";
e.C(u);
import * as _ from "./396705.51be923e43.js";
e.C(_);
import * as j from "./155568.1f7b7a00a5.js";
e.C(j);
import * as C from "./731863.5a49a2d190.js";
e.C(C);
import * as h from "./767086.61b8f8fca3.js";
e.C(h);
import * as w from "./226913.cf105b979e.js";
e.C(w);
import * as v from "./155179.20a3631dc9.js";
e.C(v);
var x = e(e.s = "aWjB"),
    y = x.a,
    g = x.b,
    k = x.c,
    P = x.d;
export {
    y as ErrorBoundary, g as HydrateFallback, k as clientLoader, P as
    default
};