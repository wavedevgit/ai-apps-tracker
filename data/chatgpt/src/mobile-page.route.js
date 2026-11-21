export const __rspack_esm_ids = [155179];
export const __webpack_modules__ = {
    aWjB: (function(a, b, c) {
        c.d(b, {
            a: () => o,
            b: () => n,
            c: () => m,
            d: () => p
        });
        var d = c("rEML"),
            e = c("ABep"),
            f = c("QosV"),
            g = c("Bbed"),
            h = c("zd8w"),
            i = c("ZunA");

        function j(a) {
            let b, c, d = (0, f.c)(3),
                {
                    status: e
                } = a;
            return d[0] !== e ? (b = () => {
                let a = (0, i.getMobilePageHost)();
                if (null == a) return;
                let b = () => {
                        let b = a.getNavigation(),
                            c = b.history.at(-1);
                        null != c && a.publishPage(c.pageId, b.visitId, {
                            type: "lifecycle",
                            status: e
                        })
                    },
                    c = requestAnimationFrame(b),
                    d = (0, i.e)(a, b);
                return () => {
                    cancelAnimationFrame(c), d()
                }
            }, c = [e], d[0] = e, d[1] = b, d[2] = c) : (b = d[1], c = d[2]), (0, h.useLayoutEffect)(b, c), null
        }
        var k = c("jZDY");
        let l = (0, g.a)(async () => (await Promise.all([c.e(680612), c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(753405), c.e(321957), c.e(585419), c.e(100643), c.e(843292), c.e(353230), c.e(557325), c.e(212773), c.e(261050), c.e(642724), c.e(529755), c.e(909395), c.e(543588), c.e(17983), c.e(704809), c.e(227233), c.e(829555), c.e(303047), c.e(139502), c.e(329272), c.e(552967), c.e(127684), c.e(233029), c.e(241590), c.e(259023), c.e(962104)]).then(c.bind(c, "lpWT"))).MobilePageApp, {
            errorFallback: () => (0, e.jsx)(o, {})
        });
        async function m() {
            let {
                loadBrowserChatGptAuth: a,
                setBrowserSessionLink: b
            } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913)]).then(c.bind(c, "QdUF")), {
                getMobilePageHost: d
            } = await Promise.resolve().then(c.bind(c, "ZunA")), e = d();
            if (null == e) throw Error("Native Page host is unavailable");
            let f = b({
                authenticate: a => e.authenticate(a),
                isActive: () => "closed" !== e.getSnapshot().status
            });
            if (window.addEventListener("pagehide", f, {
                    once: !0
                }), await e.connect(), Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629)]).then(c.bind(c, "W0bA")).then(a => {
                    let {
                        prefetchPageEditorContent: b
                    } = a;
                    return b()
                }).catch(() => void 0), await a() == null) throw Error("Page cookie session is unavailable");
            let {
                initializeAppHostServices: g
            } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913)]).then(c.bind(c, "rXOS"));
            return await g(), null
        }
        m.hydrate = !0;
        let n = (0, d.mb)(function() {
                let a, b = (0, f.c)(1);
                return b[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, e.jsx)(e.Fragment, {}), b[0] = a) : a = b[0], a
            }),
            o = (0, d.lb)(function() {
                let a, b = (0, f.c)(1);
                return b[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, e.jsx)(j, {
                    status: "failed"
                }), b[0] = a) : a = b[0], a
            });
        var p = (0, d.kb)(function() {
            return (0, k.a)() ? (0, e.jsx)(l, {}) : (0, e.jsx)(n, {})
        })
    }),
    EBQV: (function(b) {
        b.exports = a.ir("/cdn/assets/dotnet.js").then(function(a) {
            return a
        })
    })
};
import {
    __webpack_require__ as a
} from "./633146.511711c8b9.js";
import * as b from "./418851.d52a1ffc2f.js";
a.C(b);
import * as c from "./109308.4d55635a3c.js";
a.C(c);
import * as d from "./399565.700e278f2d.js";
a.C(d);
import * as e from "./257798.bf743d3ac4.js";
a.C(e);
import * as f from "./447351.05632d2214.js";
a.C(f);
import * as g from "./617936.a1bdaefa17.js";
a.C(g);
import * as h from "./807489.2515299139.js";
a.C(h);
import * as i from "./337882.b7027c58e4.js";
a.C(i);
import * as j from "./955979.17a59d5e45.js";
a.C(j);
import * as k from "./646436.71dd39a771.js";
a.C(k);
import * as l from "./7078.bd9e0604da.js";
a.C(l);
import * as m from "./200429.7cb44b876c.js";
a.C(m);
import * as n from "./698524.76d0d9fd5b.js";
a.C(n);
import * as o from "./956483.f7260d7dd1.js";
a.C(o);
import * as p from "./87162.27c50a9bde.js";
a.C(p);
import * as q from "./396705.2318c018fd.js";
a.C(q);
import * as r from "./155568.d41a363926.js";
a.C(r);
import * as s from "./731863.ace382bf58.js";
a.C(s);
import * as t from "./767086.390bf6c64e.js";
a.C(t);
import * as u from "./76629.a6013c50b6.js";
a.C(u);
import * as v from "./226913.9dca92fd99.js";
a.C(v);
import * as w from "./155179.52715fd8dd.js";
a.C(w);
var x = a(a.s = "aWjB"),
    y = x.a,
    z = x.b,
    A = x.c,
    B = x.d;
export {
    y as ErrorBoundary, z as HydrateFallback, A as clientLoader, B as
    default
};