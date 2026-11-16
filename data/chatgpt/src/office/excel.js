export const __rspack_esm_ids = [348899];
export const __webpack_modules__ = {
    ei45: (function(e, r, o) {
        o.d(r, {
            a: () => p,
            b: () => l,
            c: () => m,
            d: () => d
        });
        var t = o("rEML"),
            a = o("ABep"),
            s = o("QosV"),
            n = o("zd8w");
        let i = (0, o("Bbed").a)(async () => (await Promise.all([o.e(680612), o.e(418851), o.e(109308), o.e(399565), o.e(257798), o.e(447351), o.e(617936), o.e(807489), o.e(337882), o.e(955979), o.e(646436), o.e(7078), o.e(200429), o.e(698524), o.e(956483), o.e(87162), o.e(396705), o.e(155568), o.e(731863), o.e(767086), o.e(76629), o.e(514085), o.e(226913), o.e(222773), o.e(207991), o.e(906567), o.e(843292), o.e(322024), o.e(758408), o.e(196526), o.e(887130), o.e(839342), o.e(164460), o.e(499790), o.e(221469), o.e(355084), o.e(301030), o.e(502948), o.e(113277), o.e(740793), o.e(260732), o.e(587936), o.e(540889), o.e(904817), o.e(452048), o.e(684598), o.e(299268), o.e(847740), o.e(297959), o.e(219246), o.e(458993), o.e(149893), o.e(428069), o.e(835890), o.e(895612), o.e(209876), o.e(228361), o.e(433520), o.e(587088), o.e(842376), o.e(178594), o.e(902158), o.e(841676), o.e(308581), o.e(844352), o.e(249832), o.e(786692), o.e(261147), o.e(886631), o.e(607004)]).then(o.bind(o, "Sh0x"))).EmbeddedWork),
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
            })(l?.manifest.routes).map(c), f[0] = l?.manifest.routes, f[1] = e) : e = f[1], f[2] !== m ? (r = (0, a.jsx)(i, {
                ...m
            }, m.paneProof), f[2] = m, f[3] = r) : r = f[3], f[4] !== e || f[5] !== r ? (o = (0, a.jsxs)(a.Fragment, {
                children: [e, r]
            }), f[4] = e, f[5] = r, f[6] = o) : o = f[6], o)
        });

        function c(e) {
            return (0, a.jsx)("link", {
                rel: "stylesheet",
                href: e
            }, e)
        }
        let p = (0, t.ib)(l)
    }),
    EBQV: (function(r) {
        r.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.7f86ed336a.js";
import * as r from "./418851.ac24d305cd.js";
e.C(r);
import * as o from "./109308.c9b7701e19.js";
e.C(o);
import * as t from "./399565.e3bd47902e.js";
e.C(t);
import * as a from "./257798.7e03f1e3e2.js";
e.C(a);
import * as s from "./447351.ec9533f9fc.js";
e.C(s);
import * as n from "./617936.b641c39dad.js";
e.C(n);
import * as i from "./807489.641526722d.js";
e.C(i);
import * as f from "./337882.c82c7eb7d0.js";
e.C(f);
import * as m from "./955979.26623eb1e8.js";
e.C(m);
import * as l from "./646436.6a9ea7ce2b.js";
e.C(l);
import * as d from "./7078.7ac8d1f362.js";
e.C(d);
import * as c from "./200429.b3f88f116c.js";
e.C(c);
import * as p from "./698524.8e9b330e02.js";
e.C(p);
import * as u from "./956483.dad0089cdf.js";
e.C(u);
import * as b from "./87162.5235ed43cc.js";
e.C(b);
import * as j from "./396705.f3e9be32ee.js";
e.C(j);
import * as _ from "./155568.f88fad6c40.js";
e.C(_);
import * as w from "./731863.70436835b9.js";
e.C(w);
import * as C from "./767086.dce6c25374.js";
e.C(C);
import * as h from "./76629.b4d403ea2d.js";
e.C(h);
import * as x from "./514085.be2a492f7d.js";
e.C(x);
import * as g from "./226913.dd4de34d8f.js";
e.C(g);
import * as k from "./348899.3085b9df62.js";
e.C(k);
var y = e(e.s = "ei45"),
    E = y.a,
    v = y.b,
    L = y.c,
    A = y.d;
export {
    E as ErrorBoundary, v as HydrateFallback, L as clientLoader, A as
    default
};