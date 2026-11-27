export const __rspack_esm_ids = [155179];
export const __webpack_modules__ = {
    eFna: (function(a, b, c) {
        c.d(b, {
            a: () => r,
            b: () => q,
            c: () => p,
            d: () => s
        });
        var d = c("rEML"),
            e = c("ABep"),
            f = c("QosV"),
            g = c("zd8w"),
            h = c("Bbed"),
            i = c("W0bA"),
            j = c("ZunA");

        function k(a) {
            let b, c, d = (0, f.c)(3),
                {
                    status: e
                } = a;
            return d[0] !== e ? (b = () => {
                let a = (0, j.b)();
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
                    d = (0, j.f)(a, b);
                return () => {
                    cancelAnimationFrame(c), d()
                }
            }, c = [e], d[0] = e, d[1] = b, d[2] = c) : (b = d[1], c = d[2]), (0, g.useLayoutEffect)(b, c), null
        }
        var l = c("rKAD"),
            m = c("jZDY");
        let n = () => Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(334828), c.e(73946)]).then(() => c("kDDp")),
            o = (0, h.a)(async () => (await Promise.all([c.e(680612), c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(753405), c.e(321957), c.e(585419), c.e(100643), c.e(843292), c.e(353230), c.e(557325), c.e(831447), c.e(747652), c.e(910513), c.e(529755), c.e(909395), c.e(543588), c.e(17983), c.e(704615), c.e(13232), c.e(586748), c.e(829555), c.e(716165), c.e(571466), c.e(160728), c.e(586395), c.e(334828), c.e(799346), c.e(65712)]).then(() => c("lpWT"))).MobilePageApp, {
                errorFallback: () => (0, e.jsx)(r, {})
            });
        async function p() {
            let a = (0, j.b)();
            if (null == a) throw Error("Native Page host is unavailable");
            o.prefetch(), a.pageId !== l.h && (0, i.c)();
            let b = "ios" === a.transport.platform ? n().catch(() => null) : null,
                d = Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913)]).then(() => c("IKem"));
            d.catch(() => {});
            let {
                loadBrowserChatGptAuth: e,
                setBrowserSessionLink: f,
                isBrowserPagePrewarmAuthCurrent: g
            } = await Promise.resolve().then(() => c("QdUF")), h = f({
                authenticate: b => a.authenticate(b),
                isActive: () => "closed" !== a.getSnapshot().status,
                expectedIdentity: a.pageId === l.h ? () => {
                    let b = a.getSnapshot();
                    return "connected" === b.status ? {
                        ...b.connection.context,
                        attachmentId: b.connection.attachmentId
                    } : null
                } : void 0
            });
            window.addEventListener("pagehide", h, {
                once: !0
            });
            let k = await a.connect();
            if ((0, l.m)(k) && (b = n().catch(() => null)), await e() == null) throw Error("Page cookie session is unavailable");
            if (a.pageId === l.h && !g(k.context)) throw Error("Page cookie session does not match the native account");
            let m = d.then(a => {
                let {
                    initializeAppHostServices: b
                } = a;
                return b()
            });
            if (null != b && (a.pageId === l.h || a.supports("readableContent"))) {
                let c = await b;
                if (null != c) return null == a.preview && (a.preview = new c.MobilePagePreview(a)), {
                    startup: m,
                    Surface: c.MobilePagePreviewSurface
                }
            }
            return await m, null
        }
        p.hydrate = !0;
        let q = (0, d.mb)(function() {
                let a, b = (0, f.c)(1);
                return b[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, e.jsx)(e.Fragment, {}), b[0] = a) : a = b[0], a
            }),
            r = (0, d.lb)(function() {
                let a, b = (0, f.c)(1);
                return b[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, e.jsx)(k, {
                    status: "failed"
                }), b[0] = a) : a = b[0], a
            });
        var s = (0, d.kb)(function() {
            let a, b, c, h, i = (0, f.c)(9),
                k = (0, d.Y)();
            if (!(0, m.a)()) {
                let a;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, e.jsx)(q, {}), i[0] = a) : a = i[0], a
            }
            let l = (0, j.b)()?.preview;
            if (null == l || null == k) {
                let a;
                return i[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, e.jsx)(o, {}), i[1] = a) : a = i[1], a
            }
            return i[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, e.jsx)(r, {}), b = (0, e.jsx)(o, {}), i[2] = a, i[3] = b) : (a = i[2], b = i[3]), i[4] !== k.startup ? (c = (0, e.jsx)(g.Suspense, {
                fallback: null,
                children: (0, e.jsx)(d.b, {
                    resolve: k.startup,
                    errorElement: a,
                    children: b
                })
            }), i[4] = k.startup, i[5] = c) : c = i[5], i[6] !== k.Surface || i[7] !== c ? (h = (0, e.jsx)(k.Surface, {
                preview: l,
                children: c
            }), i[6] = k.Surface, i[7] = c, i[8] = h) : h = i[8], h
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
} from "./633146.09737d25a9.js";
import * as b from "./418851.4535c67f63.js";
a.C(b);
import * as c from "./109308.6f7ef1dfb7.js";
a.C(c);
import * as d from "./399565.9b329429cf.js";
a.C(d);
import * as e from "./257798.b7a3d1f03d.js";
a.C(e);
import * as f from "./447351.7cc0e9b0b6.js";
a.C(f);
import * as g from "./617936.df7ad53071.js";
a.C(g);
import * as h from "./807489.fdff512ca5.js";
a.C(h);
import * as i from "./337882.752f23d743.js";
a.C(i);
import * as j from "./955979.52ce32f7c5.js";
a.C(j);
import * as k from "./646436.55f1254c7f.js";
a.C(k);
import * as l from "./7078.55b4a92118.js";
a.C(l);
import * as m from "./200429.0df43ecbf7.js";
a.C(m);
import * as n from "./698524.1c8231b75b.js";
a.C(n);
import * as o from "./956483.36a4d231f7.js";
a.C(o);
import * as p from "./87162.8f6e750e9f.js";
a.C(p);
import * as q from "./396705.e1f0c800f5.js";
a.C(q);
import * as r from "./155568.92a58aa405.js";
a.C(r);
import * as s from "./731863.e3d9714b5d.js";
a.C(s);
import * as t from "./767086.a8056aa3bc.js";
a.C(t);
import * as u from "./76629.d1877612e5.js";
a.C(u);
import * as v from "./226913.52b9bcbf34.js";
a.C(v);
import * as w from "./155179.c8872261cb.js";
a.C(w);
var x = a(a.s = "eFna"),
    y = x.a,
    z = x.b,
    A = x.c,
    B = x.d;
export {
    y as ErrorBoundary, z as HydrateFallback, A as clientLoader, B as
    default
};