export const __rspack_esm_ids = [348899];
export const __webpack_modules__ = {
    tw9u: (function(e, r, o) {
        o.d(r, {
            a: () => c,
            b: () => l,
            c: () => m,
            d: () => d
        });
        var t = o("jqIZ"),
            a = o("ABep"),
            s = o("QosV"),
            n = o("zd8w");
        let i = (0, o("Bbed").a)(async () => (await Promise.all([o.e(680612), o.e(418851), o.e(109308), o.e(399565), o.e(257798), o.e(447351), o.e(617936), o.e(807489), o.e(337882), o.e(955979), o.e(646436), o.e(7078), o.e(200429), o.e(698524), o.e(956483), o.e(87162), o.e(396705), o.e(155568), o.e(731863), o.e(767086), o.e(76629), o.e(514085), o.e(226913), o.e(222773), o.e(207991), o.e(906567), o.e(843292), o.e(431630), o.e(589307), o.e(197062), o.e(95818), o.e(114517), o.e(164460), o.e(499790), o.e(918122), o.e(355084), o.e(301030), o.e(502948), o.e(531642), o.e(782496), o.e(428078), o.e(587936), o.e(540889), o.e(904817), o.e(452048), o.e(684598), o.e(299268), o.e(847740), o.e(777166), o.e(458993), o.e(499685), o.e(428069), o.e(835890), o.e(895612), o.e(343097), o.e(228361), o.e(433520), o.e(842376), o.e(864399), o.e(703936), o.e(902158), o.e(878782), o.e(308581), o.e(149241), o.e(59783), o.e(522871), o.e(539056), o.e(817597), o.e(168772)]).then(o.bind(o, "Sh0x"))).EmbeddedWork),
            f = null;
        async function m(e) {
            let {
                request: r,
                serverLoader: o
            } = e, t = new URL(r.url);
            t.hash = "";
            let a = await o();
            if (r.signal.throwIfAborted(), window.parent === window || null == a) return f = null, null;
            let {
                parentOrigin: s
            } = a;
            (f?.documentUrl !== t.href || f.parentOrigin !== s) && (f = null);
            let n = a.paneProof ?? f?.paneProof ?? null,
                i = new AbortController,
                m = crypto.randomUUID();
            try {
                return await new Promise((e, o) => {
                    r.signal.addEventListener("abort", () => o(new DOMException("Work embedding canceled", "AbortError")), {
                        once: !0,
                        signal: i.signal
                    }), window.addEventListener("message", r => {
                        r.source === window.parent && r.origin === s && r.data === m && e()
                    }, {
                        signal: i.signal
                    }), window.parent.postMessage({
                        type: "openai:work:office-embed",
                        challenge: m
                    }, s)
                }), r.signal.throwIfAborted(), f = {
                    parentOrigin: s,
                    paneProof: n,
                    documentUrl: t.href
                }, {
                    parentOrigin: s,
                    paneProof: n
                }
            } finally {
                i.abort()
            }
        }
        m.hydrate = !0;
        let l = (0, t.jb)(function() {
            return null
        });
        var d = (0, t.hb)(function() {
            let e, r, o, f = (0, s.c)(7),
                m = (0, t.X)(),
                l = (0, n.useContext)(t.f);
            return null == m ? null : (f[0] !== l?.manifest.routes ? (e = (function(e) {
                let r = new Set;

                function o(t) {
                    let a = e?.[t];
                    if (a?.parentId)
                        for (let e of (o(a.parentId), a.css ?? [])) r.add(e)
                }
                return o("home.route"), o("conversation.route"), [...r]
            })(l?.manifest.routes).map(p), f[0] = l?.manifest.routes, f[1] = e) : e = f[1], f[2] !== m ? (r = (0, a.jsx)(i, {
                ...m
            }, m.paneProof), f[2] = m, f[3] = r) : r = f[3], f[4] !== e || f[5] !== r ? (o = (0, a.jsxs)(a.Fragment, {
                children: [e, r]
            }), f[4] = e, f[5] = r, f[6] = o) : o = f[6], o)
        });

        function p(e) {
            return (0, a.jsx)("link", {
                rel: "stylesheet",
                href: e
            }, e)
        }
        let c = (0, t.ib)(l)
    }),
    EBQV: (function(r) {
        r.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.d376de6326.js";
import * as r from "./418851.b915ffe930.js";
e.C(r);
import * as o from "./109308.e66696cd0d.js";
e.C(o);
import * as t from "./399565.6af208675d.js";
e.C(t);
import * as a from "./257798.b51742efd5.js";
e.C(a);
import * as s from "./447351.dafe7b7b5e.js";
e.C(s);
import * as n from "./617936.e33610e0b9.js";
e.C(n);
import * as i from "./807489.01dbb0865d.js";
e.C(i);
import * as f from "./337882.7119120a0c.js";
e.C(f);
import * as m from "./955979.cdc247a476.js";
e.C(m);
import * as l from "./646436.2bf4f5cfd6.js";
e.C(l);
import * as d from "./7078.89396f9757.js";
e.C(d);
import * as p from "./200429.ddc1bbef02.js";
e.C(p);
import * as c from "./698524.21708788d0.js";
e.C(c);
import * as b from "./956483.c322d2995f.js";
e.C(b);
import * as u from "./87162.b460b44fcb.js";
e.C(u);
import * as j from "./396705.f9a5e3185a.js";
e.C(j);
import * as w from "./155568.be3429758e.js";
e.C(w);
import * as _ from "./731863.f2322456e0.js";
e.C(_);
import * as C from "./767086.ab7a1efc0d.js";
e.C(C);
import * as h from "./76629.3c6cad96ca.js";
e.C(h);
import * as x from "./514085.2befcfe573.js";
e.C(x);
import * as g from "./226913.27c93050ff.js";
e.C(g);
import * as k from "./348899.bb8c831bc3.js";
e.C(k);
var y = e(e.s = "tw9u"),
    E = y.a,
    v = y.b,
    I = y.c,
    A = y.d;
export {
    E as ErrorBoundary, v as HydrateFallback, I as clientLoader, A as
    default
};