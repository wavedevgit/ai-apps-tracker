export const __rspack_esm_ids = [348899];
export const __webpack_modules__ = {
    ei45: (function(e, r, o) {
        o.d(r, {
            a: () => p,
            b: () => d,
            c: () => m,
            d: () => l
        });
        var t = o("jqIZ"),
            a = o("ABep"),
            s = o("QosV"),
            n = o("zd8w");
        let i = (0, o("Bbed").a)(async () => (await Promise.all([o.e(680612), o.e(418851), o.e(109308), o.e(399565), o.e(257798), o.e(447351), o.e(617936), o.e(807489), o.e(337882), o.e(955979), o.e(646436), o.e(7078), o.e(200429), o.e(698524), o.e(956483), o.e(87162), o.e(396705), o.e(155568), o.e(731863), o.e(767086), o.e(76629), o.e(514085), o.e(226913), o.e(222773), o.e(207991), o.e(906567), o.e(843292), o.e(322024), o.e(758408), o.e(196526), o.e(887130), o.e(839342), o.e(164460), o.e(499790), o.e(918122), o.e(355084), o.e(301030), o.e(502948), o.e(113277), o.e(782496), o.e(260732), o.e(587936), o.e(540889), o.e(904817), o.e(452048), o.e(684598), o.e(299268), o.e(847740), o.e(219246), o.e(458993), o.e(499685), o.e(428069), o.e(835890), o.e(895612), o.e(343097), o.e(228361), o.e(433520), o.e(863607), o.e(842376), o.e(220446), o.e(178594), o.e(902158), o.e(347995), o.e(308581), o.e(860851), o.e(264954), o.e(718570), o.e(921662), o.e(90721), o.e(631220), o.e(45372)]).then(o.bind(o, "Sh0x"))).EmbeddedWork),
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
        let d = (0, t.jb)(function() {
            return null
        });
        var l = (0, t.hb)(function() {
            let e, r, o, f = (0, s.c)(7),
                m = (0, t.X)(),
                d = (0, n.useContext)(t.f);
            return null == m ? null : (f[0] !== d?.manifest.routes ? (e = (function(e) {
                let r = new Set;

                function o(t) {
                    let a = e?.[t];
                    if (a?.parentId)
                        for (let e of (o(a.parentId), a.css ?? [])) r.add(e)
                }
                return o("home.route"), o("conversation.route"), [...r]
            })(d?.manifest.routes).map(c), f[0] = d?.manifest.routes, f[1] = e) : e = f[1], f[2] !== m ? (r = (0, a.jsx)(i, {
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
        let p = (0, t.ib)(d)
    }),
    EBQV: (function(r) {
        r.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.6428a93122.js";
import * as r from "./418851.3351eb0d2c.js";
e.C(r);
import * as o from "./109308.a4430446b5.js";
e.C(o);
import * as t from "./399565.6af208675d.js";
e.C(t);
import * as a from "./257798.13b56b362a.js";
e.C(a);
import * as s from "./447351.16e0481926.js";
e.C(s);
import * as n from "./617936.4707466a2e.js";
e.C(n);
import * as i from "./807489.36023b676b.js";
e.C(i);
import * as f from "./337882.da1b5beae8.js";
e.C(f);
import * as m from "./955979.48bc7ee80c.js";
e.C(m);
import * as d from "./646436.67f97058a6.js";
e.C(d);
import * as l from "./7078.c420b9a2f6.js";
e.C(l);
import * as c from "./200429.11007a9422.js";
e.C(c);
import * as p from "./698524.8f181d24a1.js";
e.C(p);
import * as u from "./956483.6cfec0717e.js";
e.C(u);
import * as j from "./87162.d101a9fdd5.js";
e.C(j);
import * as b from "./396705.00162c6ea9.js";
e.C(b);
import * as _ from "./155568.36875ef56f.js";
e.C(_);
import * as w from "./731863.bbf914bfbc.js";
e.C(w);
import * as C from "./767086.5122101cd2.js";
e.C(C);
import * as h from "./76629.ac20799396.js";
e.C(h);
import * as x from "./514085.004fb5c464.js";
e.C(x);
import * as g from "./226913.27c93050ff.js";
e.C(g);
import * as k from "./348899.b7ade97471.js";
e.C(k);
var y = e(e.s = "ei45"),
    E = y.a,
    v = y.b,
    I = y.c,
    A = y.d;
export {
    E as ErrorBoundary, v as HydrateFallback, I as clientLoader, A as
    default
};