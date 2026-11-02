export const __rspack_esm_ids = [155179];
export const __webpack_modules__ = {
    sTiw: (function(e, a, r) {
        r.d(a, {
            a: () => b,
            b: () => p,
            c: () => d,
            d: () => j
        });
        var t = r("jqIZ"),
            o = r("ABep"),
            s = r("QosV"),
            i = r("Bbed"),
            m = r("zd8w"),
            n = r("qoC5");

        function f(e) {
            let a, r, t = (0, s.c)(3),
                {
                    status: o
                } = e;
            return t[0] !== o ? (a = () => {
                let e = (0, n.getMobilePageHost)();
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
                    t = (0, n.e)(e, a);
                return () => {
                    cancelAnimationFrame(r), t()
                }
            }, r = [o], t[0] = o, t[1] = a, t[2] = r) : (a = t[1], r = t[2]), (0, m.useLayoutEffect)(a, r), null
        }
        var c = r("jZDY");
        let l = (0, i.a)(async () => (await Promise.all([r.e(680612), r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(226913), r.e(100643), r.e(332373), r.e(653896), r.e(852054), r.e(466683), r.e(40758), r.e(99939), r.e(555385), r.e(70254), r.e(61199)]).then(r.bind(r, "yoBk"))).MobilePageApp, {
            errorFallback: () => (0, o.jsx)(b, {})
        });
        async function d() {
            let {
                loadBrowserChatGptAuth: e,
                setBrowserSessionLink: a
            } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(226913)]).then(r.bind(r, "QdUF")), {
                getMobilePageHost: t
            } = await Promise.resolve().then(r.bind(r, "qoC5")), o = t();
            if (null == o) throw Error("Native Page host is unavailable");
            let s = a({
                authenticate: e => o.authenticate(e),
                isActive: () => "closed" !== o.getSnapshot().status
            });
            if (window.addEventListener("pagehide", s, {
                    once: !0
                }), await o.connect(), Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481)]).then(r.bind(r, "W0bA")).then(e => {
                    let {
                        prefetchPageEditorContent: a
                    } = e;
                    return a()
                }).catch(() => void 0), await e() == null) throw Error("Page cookie session is unavailable");
            let {
                initializeAppHostServices: i
            } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(226913)]).then(r.bind(r, "rXOS"));
            return await i(), null
        }
        d.hydrate = !0;
        let p = (0, t.ib)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(o.Fragment, {}), a[0] = e) : e = a[0], e
            }),
            b = (0, t.hb)(function() {
                let e, a = (0, s.c)(1);
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(f, {
                    status: "failed"
                }), a[0] = e) : e = a[0], e
            });
        var j = (0, t.gb)(function() {
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
} from "./633146.df93131bac.js";
import * as a from "./418851.17df48ac4b.js";
e.C(a);
import * as r from "./109308.5a201c8302.js";
e.C(r);
import * as t from "./399565.beb7308a81.js";
e.C(t);
import * as o from "./257798.fb962f65b0.js";
e.C(o);
import * as s from "./153380.b37e665dc3.js";
e.C(s);
import * as i from "./617936.4a1c3486e1.js";
e.C(i);
import * as m from "./807489.d7ba7560b5.js";
e.C(m);
import * as n from "./337882.7c5d3113d0.js";
e.C(n);
import * as f from "./955979.c3606b15cc.js";
e.C(f);
import * as c from "./646436.5d7d120a9c.js";
e.C(c);
import * as l from "./7078.e70bef3582.js";
e.C(l);
import * as d from "./200429.07dccabafa.js";
e.C(d);
import * as p from "./698524.f7b6bedc4b.js";
e.C(p);
import * as b from "./956483.cbe9aa2745.js";
e.C(b);
import * as j from "./87162.6b7cff28cf.js";
e.C(j);
import * as u from "./396705.d90cd7b3ef.js";
e.C(u);
import * as _ from "./155568.fec60d8b88.js";
e.C(_);
import * as C from "./731863.9366e6c16e.js";
e.C(C);
import * as h from "./767086.6219033771.js";
e.C(h);
import * as w from "./76629.85fbfbbdbd.js";
e.C(w);
import * as y from "./514085.874a1e54b3.js";
e.C(y);
import * as g from "./204542.a5e4d1f072.js";
e.C(g);
import * as v from "./982651.c0e1594f47.js";
e.C(v);
import * as x from "./673108.e81a4ecdeb.js";
e.C(x);
import * as k from "./487481.08d6a38055.js";
e.C(k);
import * as P from "./226913.a6f571e7d4.js";
e.C(P);
import * as E from "./155179.9962cc69bf.js";
e.C(E);
var F = e(e.s = "sTiw"),
    A = F.a,
    B = F.b,
    q = F.c,
    L = F.d;
export {
    A as ErrorBoundary, B as HydrateFallback, q as clientLoader, L as
    default
};