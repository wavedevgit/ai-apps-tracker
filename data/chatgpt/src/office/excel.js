export const __rspack_esm_ids = [348899];
export const __webpack_modules__ = {
    tw9u: (function(e, r, o) {
        o.d(r, {
            a: () => c,
            b: () => f,
            c: () => m,
            d: () => d
        });
        var t = o("jqIZ"),
            s = o("ABep"),
            a = o("QosV"),
            n = o("zd8w");
        let i = (0, o("Bbed").a)(async () => (await Promise.all([o.e(680612), o.e(418851), o.e(109308), o.e(399565), o.e(257798), o.e(153380), o.e(617936), o.e(807489), o.e(337882), o.e(955979), o.e(646436), o.e(7078), o.e(200429), o.e(698524), o.e(956483), o.e(87162), o.e(396705), o.e(155568), o.e(731863), o.e(767086), o.e(76629), o.e(514085), o.e(204542), o.e(982651), o.e(673108), o.e(487481), o.e(229522), o.e(390575), o.e(353032), o.e(637885), o.e(226913), o.e(560170), o.e(736465), o.e(222773), o.e(207991), o.e(171815), o.e(843292), o.e(431630), o.e(589307), o.e(206949), o.e(527082), o.e(992070), o.e(164460), o.e(499790), o.e(769185), o.e(355084), o.e(416239), o.e(301030), o.e(265004), o.e(70086), o.e(22085), o.e(587936), o.e(904817), o.e(452048), o.e(839111), o.e(299268), o.e(465662), o.e(252961), o.e(478218), o.e(839671), o.e(428069), o.e(835890), o.e(895612), o.e(466116), o.e(219246), o.e(433520), o.e(806540), o.e(233874), o.e(842376), o.e(902158), o.e(227195), o.e(54071), o.e(308581), o.e(531562), o.e(549698), o.e(686530), o.e(268732), o.e(94622), o.e(79958)]).then(o.bind(o, "Sh0x"))).EmbeddedWork);
        async function m(e) {
            let {
                request: r,
                serverLoader: o
            } = e, t = await o();
            if (window.parent === window || null == t) return null;
            r.signal.throwIfAborted();
            let s = new AbortController,
                a = crypto.randomUUID();
            try {
                return await new Promise((e, o) => {
                    r.signal.addEventListener("abort", () => o(new DOMException("Work embedding canceled", "AbortError")), {
                        once: !0,
                        signal: s.signal
                    }), window.addEventListener("message", r => {
                        r.source === window.parent && r.origin === t && r.data === a && e()
                    }, {
                        signal: s.signal
                    }), window.parent.postMessage({
                        type: "openai:work:office-embed",
                        challenge: a
                    }, t)
                }), t
            } finally {
                s.abort()
            }
        }
        m.hydrate = !0;
        let f = (0, t.jb)(function() {
            return null
        });
        var d = (0, t.hb)(function() {
            let e, r, o, m = (0, a.c)(7),
                f = (0, t.X)(),
                d = (0, n.useContext)(t.f);
            return null == f ? null : (m[0] !== d?.manifest.routes ? (e = (function(e) {
                let r = new Set;

                function o(t) {
                    let s = e?.[t];
                    if (s?.parentId)
                        for (let e of (o(s.parentId), s.css ?? [])) r.add(e)
                }
                return o("home.route"), o("conversation.route"), [...r]
            })(d?.manifest.routes).map(p), m[0] = d?.manifest.routes, m[1] = e) : e = m[1], m[2] !== f ? (r = (0, s.jsx)(i, {
                parentOrigin: f
            }), m[2] = f, m[3] = r) : r = m[3], m[4] !== e || m[5] !== r ? (o = (0, s.jsxs)(s.Fragment, {
                children: [e, r]
            }), m[4] = e, m[5] = r, m[6] = o) : o = m[6], o)
        });

        function p(e) {
            return (0, s.jsx)("link", {
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
} from "./633146.516c6a4677.js";
import * as r from "./418851.8cdff597ce.js";
e.C(r);
import * as o from "./109308.fbb414d4aa.js";
e.C(o);
import * as t from "./399565.a7f9c29dec.js";
e.C(t);
import * as s from "./257798.0b3d6025cd.js";
e.C(s);
import * as a from "./153380.6675e448cd.js";
e.C(a);
import * as n from "./617936.510230e136.js";
e.C(n);
import * as i from "./807489.a027e374ea.js";
e.C(i);
import * as m from "./337882.c2f7cf8187.js";
e.C(m);
import * as f from "./955979.24c51c90c6.js";
e.C(f);
import * as d from "./646436.c733a3d665.js";
e.C(d);
import * as p from "./7078.c424185282.js";
e.C(p);
import * as c from "./200429.ef6ceeb78d.js";
e.C(c);
import * as b from "./698524.fd3e996752.js";
e.C(b);
import * as l from "./956483.abe9885def.js";
e.C(l);
import * as j from "./87162.29ee0bd2a9.js";
e.C(j);
import * as u from "./396705.c39944bbf2.js";
e.C(u);
import * as C from "./155568.7bbfb72b85.js";
e.C(C);
import * as _ from "./731863.8b87e9728a.js";
e.C(_);
import * as w from "./767086.6da4be4bcc.js";
e.C(w);
import * as x from "./76629.1ccd088209.js";
e.C(x);
import * as g from "./514085.2b0855224a.js";
e.C(g);
import * as k from "./204542.555643bfb3.js";
e.C(k);
import * as y from "./982651.7bfd071e83.js";
e.C(y);
import * as h from "./673108.95021ed52b.js";
e.C(h);
import * as E from "./487481.dd23dcfc39.js";
e.C(E);
import * as v from "./229522.7430726c37.js";
e.C(v);
import * as B from "./390575.353218f3fd.js";
e.C(B);
import * as I from "./353032.1ea521a002.js";
e.C(I);
import * as A from "./637885.5271cdd835.js";
e.C(A);
import * as L from "./226913.b323f04fd6.js";
e.C(L);
import * as F from "./348899.a211a053d8.js";
e.C(F);
var D = e(e.s = "tw9u"),
    H = D.a,
    M = D.b,
    O = D.c,
    P = D.d;
export {
    H as ErrorBoundary, M as HydrateFallback, O as clientLoader, P as
    default
};