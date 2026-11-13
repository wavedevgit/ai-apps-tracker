export const __rspack_esm_ids = [348899];
export const __webpack_modules__ = {
    ei45: (function(e, r, o) {
        o.d(r, {
            a: () => c,
            b: () => m,
            c: () => d,
            d: () => l
        });
        var t = o("jqIZ"),
            a = o("ABep"),
            s = o("QosV"),
            n = o("zd8w");
        let i = (0, o("Bbed").a)(async () => (await Promise.all([o.e(680612), o.e(418851), o.e(109308), o.e(399565), o.e(257798), o.e(447351), o.e(617936), o.e(807489), o.e(337882), o.e(955979), o.e(646436), o.e(7078), o.e(200429), o.e(698524), o.e(956483), o.e(87162), o.e(396705), o.e(155568), o.e(731863), o.e(767086), o.e(76629), o.e(514085), o.e(226913), o.e(222773), o.e(207991), o.e(906567), o.e(843292), o.e(322024), o.e(827442), o.e(170681), o.e(138830), o.e(839342), o.e(164460), o.e(499790), o.e(918122), o.e(355084), o.e(301030), o.e(502948), o.e(113277), o.e(782496), o.e(260732), o.e(587936), o.e(540889), o.e(904817), o.e(452048), o.e(684598), o.e(299268), o.e(847740), o.e(219246), o.e(458993), o.e(499685), o.e(428069), o.e(835890), o.e(895612), o.e(343097), o.e(228361), o.e(433520), o.e(842376), o.e(220446), o.e(178594), o.e(878782), o.e(902158), o.e(308581), o.e(985983), o.e(454832), o.e(264954), o.e(604650), o.e(289444), o.e(377984)]).then(o.bind(o, "Sh0x"))).EmbeddedWork),
            f = null;
        async function d(e) {
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
                d = crypto.randomUUID();
            try {
                return await new Promise((e, o) => {
                    r.signal.addEventListener("abort", () => o(new DOMException("Work embedding canceled", "AbortError")), {
                        once: !0,
                        signal: i.signal
                    }), window.addEventListener("message", r => {
                        r.source === window.parent && r.origin === s && r.data === d && e()
                    }, {
                        signal: i.signal
                    }), window.parent.postMessage({
                        type: "openai:work:office-embed",
                        challenge: d
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
        d.hydrate = !0;
        let m = (0, t.jb)(function() {
            return null
        });
        var l = (0, t.hb)(function() {
            let e, r, o, f = (0, s.c)(7),
                d = (0, t.X)(),
                m = (0, n.useContext)(t.f);
            return null == d ? null : (f[0] !== m?.manifest.routes ? (e = (function(e) {
                let r = new Set;

                function o(t) {
                    let a = e?.[t];
                    if (a?.parentId)
                        for (let e of (o(a.parentId), a.css ?? [])) r.add(e)
                }
                return o("home.route"), o("conversation.route"), [...r]
            })(m?.manifest.routes).map(p), f[0] = m?.manifest.routes, f[1] = e) : e = f[1], f[2] !== d ? (r = (0, a.jsx)(i, {
                ...d
            }, d.paneProof), f[2] = d, f[3] = r) : r = f[3], f[4] !== e || f[5] !== r ? (o = (0, a.jsxs)(a.Fragment, {
                children: [e, r]
            }), f[4] = e, f[5] = r, f[6] = o) : o = f[6], o)
        });

        function p(e) {
            return (0, a.jsx)("link", {
                rel: "stylesheet",
                href: e
            }, e)
        }
        let c = (0, t.ib)(m)
    }),
    EBQV: (function(r) {
        r.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.5096fa3fd9.js";
import * as r from "./418851.c7ca1818d5.js";
e.C(r);
import * as o from "./109308.e66696cd0d.js";
e.C(o);
import * as t from "./399565.6af208675d.js";
e.C(t);
import * as a from "./257798.13b56b362a.js";
e.C(a);
import * as s from "./447351.d558a44437.js";
e.C(s);
import * as n from "./617936.4707466a2e.js";
e.C(n);
import * as i from "./807489.02c4828605.js";
e.C(i);
import * as f from "./337882.8740501d0a.js";
e.C(f);
import * as d from "./955979.a7c648ac65.js";
e.C(d);
import * as m from "./646436.67f97058a6.js";
e.C(m);
import * as l from "./7078.1e69ffb16b.js";
e.C(l);
import * as p from "./200429.bb053dd10b.js";
e.C(p);
import * as c from "./698524.21cc9159ce.js";
e.C(c);
import * as u from "./956483.d8c24cb93c.js";
e.C(u);
import * as b from "./87162.061018a33e.js";
e.C(b);
import * as j from "./396705.001e7c704c.js";
e.C(j);
import * as _ from "./155568.3264e8a296.js";
e.C(_);
import * as w from "./731863.63f4b0e1e0.js";
e.C(w);
import * as C from "./767086.348bdfe349.js";
e.C(C);
import * as h from "./76629.9b04d58081.js";
e.C(h);
import * as x from "./514085.7e2196bde7.js";
e.C(x);
import * as g from "./226913.27c93050ff.js";
e.C(g);
import * as k from "./348899.ce4c52c326.js";
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