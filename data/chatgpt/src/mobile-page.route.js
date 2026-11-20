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
        let f = (0, i.a)(async () => (await Promise.all([t.e(680612), t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(226913), t.e(753405), t.e(321957), t.e(585419), t.e(100643), t.e(843292), t.e(353230), t.e(882456), t.e(212773), t.e(261050), t.e(573629), t.e(529755), t.e(909395), t.e(543588), t.e(17983), t.e(704809), t.e(227233), t.e(829555), t.e(825572), t.e(139502), t.e(542862), t.e(552967), t.e(226434), t.e(652194), t.e(939750), t.e(259023), t.e(793290), t.e(247800)]).then(t.bind(t, "lpWT"))).MobilePageApp, {
            errorFallback: () => (0, o.jsx)(b, {})
        });
        async function d() {
            let {
                loadBrowserChatGptAuth: e,
                setBrowserSessionLink: a
            } = await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(226913)]).then(t.bind(t, "QdUF")), {
                getMobilePageHost: r
            } = await Promise.resolve().then(t.bind(t, "ZunA")), o = r();
            if (null == o) throw Error("Native Page host is unavailable");
            let s = a({
                authenticate: e => o.authenticate(e),
                isActive: () => "closed" !== o.getSnapshot().status
            });
            if (window.addEventListener("pagehide", s, {
                    once: !0
                }), await o.connect(), Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629)]).then(t.bind(t, "W0bA")).then(e => {
                    let {
                        prefetchPageEditorContent: a
                    } = e;
                    return a()
                }).catch(() => void 0), await e() == null) throw Error("Page cookie session is unavailable");
            let {
                initializeAppHostServices: i
            } = await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(226913)]).then(t.bind(t, "rXOS"));
            return await i(), null
        }
        d.hydrate = !0;
        let p = (0, r.mb)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(o.Fragment, {}), a[0] = e) : e = a[0], e
            }),
            b = (0, r.lb)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(c, {
                    status: "failed"
                }), a[0] = e) : e = a[0], e
            });
        var u = (0, r.kb)(function() {
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
} from "./633146.286e08e471.js";
import * as a from "./418851.b2405a4ff9.js";
e.C(a);
import * as t from "./109308.c704a27752.js";
e.C(t);
import * as r from "./399565.76c7da28d9.js";
e.C(r);
import * as o from "./257798.da1bc54c05.js";
e.C(o);
import * as s from "./447351.34d04099ca.js";
e.C(s);
import * as i from "./617936.da77c6b618.js";
e.C(i);
import * as n from "./807489.823dbdfb5a.js";
e.C(n);
import * as m from "./337882.060a468551.js";
e.C(m);
import * as c from "./955979.5504cdc0ad.js";
e.C(c);
import * as l from "./646436.feae78aa0d.js";
e.C(l);
import * as f from "./7078.6f2aee03ba.js";
e.C(f);
import * as d from "./200429.80eabab50b.js";
e.C(d);
import * as p from "./698524.9faf81ab1c.js";
e.C(p);
import * as b from "./956483.db483d044c.js";
e.C(b);
import * as u from "./87162.313d693207.js";
e.C(u);
import * as _ from "./396705.047d6db773.js";
e.C(_);
import * as j from "./155568.1d9e3b614b.js";
e.C(j);
import * as C from "./731863.5760f3f335.js";
e.C(C);
import * as h from "./767086.ab8a876382.js";
e.C(h);
import * as w from "./76629.6fe0bcbf7b.js";
e.C(w);
import * as v from "./226913.cf105b979e.js";
e.C(v);
import * as x from "./155179.bd1df7c81a.js";
e.C(x);
var y = e(e.s = "aWjB"),
    g = y.a,
    k = y.b,
    P = y.c,
    A = y.d;
export {
    g as ErrorBoundary, k as HydrateFallback, P as clientLoader, A as
    default
};