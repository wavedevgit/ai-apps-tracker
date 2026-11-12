export const __rspack_esm_ids = [348899];
export const __webpack_modules__ = {
    tw9u: (function(e, r, o) {
        o.d(r, {
            a: () => c,
            b: () => f,
            c: () => d,
            d: () => l
        });
        var t = o("jqIZ"),
            a = o("ABep"),
            s = o("QosV"),
            n = o("zd8w");
        let i = (0, o("Bbed").a)(async () => (await Promise.all([o.e(680612), o.e(418851), o.e(109308), o.e(399565), o.e(257798), o.e(447351), o.e(617936), o.e(807489), o.e(337882), o.e(955979), o.e(646436), o.e(7078), o.e(200429), o.e(698524), o.e(956483), o.e(87162), o.e(396705), o.e(155568), o.e(731863), o.e(767086), o.e(76629), o.e(514085), o.e(226913), o.e(222773), o.e(207991), o.e(906567), o.e(843292), o.e(431630), o.e(589307), o.e(197062), o.e(135822), o.e(114517), o.e(164460), o.e(499790), o.e(971634), o.e(355084), o.e(531642), o.e(301030), o.e(502948), o.e(782496), o.e(428078), o.e(540889), o.e(587936), o.e(904817), o.e(452048), o.e(684598), o.e(299268), o.e(77104), o.e(847740), o.e(777166), o.e(478218), o.e(499685), o.e(428069), o.e(835890), o.e(895612), o.e(343097), o.e(433520), o.e(898095), o.e(842376), o.e(726406), o.e(703936), o.e(902158), o.e(464191), o.e(371732), o.e(308581), o.e(67327), o.e(887890), o.e(648427), o.e(325435), o.e(843389)]).then(o.bind(o, "Sh0x"))).EmbeddedWork),
            m = null;
        async function d(e) {
            let {
                request: r,
                serverLoader: o
            } = e, t = new URL(r.url);
            t.hash = "";
            let a = await o();
            if (r.signal.throwIfAborted(), window.parent === window || null == a) return m = null, null;
            let {
                parentOrigin: s
            } = a;
            (m?.documentUrl !== t.href || m.parentOrigin !== s) && (m = null);
            let n = a.paneProof ?? m?.paneProof ?? null,
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
                }), r.signal.throwIfAborted(), m = {
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
        let f = (0, t.jb)(function() {
            return null
        });
        var l = (0, t.hb)(function() {
            let e, r, o, m = (0, s.c)(7),
                d = (0, t.X)(),
                f = (0, n.useContext)(t.f);
            return null == d ? null : (m[0] !== f?.manifest.routes ? (e = (function(e) {
                let r = new Set;

                function o(t) {
                    let a = e?.[t];
                    if (a?.parentId)
                        for (let e of (o(a.parentId), a.css ?? [])) r.add(e)
                }
                return o("home.route"), o("conversation.route"), [...r]
            })(f?.manifest.routes).map(p), m[0] = f?.manifest.routes, m[1] = e) : e = m[1], m[2] !== d ? (r = (0, a.jsx)(i, {
                ...d
            }, d.paneProof), m[2] = d, m[3] = r) : r = m[3], m[4] !== e || m[5] !== r ? (o = (0, a.jsxs)(a.Fragment, {
                children: [e, r]
            }), m[4] = e, m[5] = r, m[6] = o) : o = m[6], o)
        });

        function p(e) {
            return (0, a.jsx)("link", {
                rel: "stylesheet",
                href: e
            }, e)
        }
        let c = (0, t.ib)(f)
    }),
    EBQV: (function(r) {
        r.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.4981d79ae4.js";
import * as r from "./418851.7f18e986d5.js";
e.C(r);
import * as o from "./109308.e66696cd0d.js";
e.C(o);
import * as t from "./399565.6af208675d.js";
e.C(t);
import * as a from "./257798.b51742efd5.js";
e.C(a);
import * as s from "./447351.7f028af5cc.js";
e.C(s);
import * as n from "./617936.e33610e0b9.js";
e.C(n);
import * as i from "./807489.b2a4c99bd1.js";
e.C(i);
import * as m from "./337882.240014b3db.js";
e.C(m);
import * as d from "./955979.cac5f7aa7e.js";
e.C(d);
import * as f from "./646436.b849db233f.js";
e.C(f);
import * as l from "./7078.73ded76a8d.js";
e.C(l);
import * as p from "./200429.f68bf8c5d0.js";
e.C(p);
import * as c from "./698524.5c1f88ec3d.js";
e.C(c);
import * as u from "./956483.da8bcbe744.js";
e.C(u);
import * as b from "./87162.47f0360b7c.js";
e.C(b);
import * as j from "./396705.bfc19c0c6a.js";
e.C(j);
import * as w from "./155568.fb329e6a3b.js";
e.C(w);
import * as _ from "./731863.850a24e1c0.js";
e.C(_);
import * as C from "./767086.b68e569328.js";
e.C(C);
import * as h from "./76629.ca4c17c8af.js";
e.C(h);
import * as x from "./514085.6514ba1a89.js";
e.C(x);
import * as g from "./226913.27c93050ff.js";
e.C(g);
import * as k from "./348899.9ce71bf86f.js";
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