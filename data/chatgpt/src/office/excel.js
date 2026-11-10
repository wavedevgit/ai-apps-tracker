export const __rspack_esm_ids = [348899];
export const __webpack_modules__ = {
    tw9u: (function(e, r, o) {
        o.d(r, {
            a: () => c,
            b: () => f,
            c: () => m,
            d: () => d
        });
        var a = o("jqIZ"),
            t = o("ABep"),
            s = o("QosV"),
            n = o("zd8w");
        let i = (0, o("Bbed").a)(async () => (await Promise.all([o.e(680612), o.e(418851), o.e(109308), o.e(399565), o.e(257798), o.e(153380), o.e(617936), o.e(807489), o.e(337882), o.e(955979), o.e(646436), o.e(7078), o.e(200429), o.e(698524), o.e(956483), o.e(87162), o.e(396705), o.e(155568), o.e(731863), o.e(767086), o.e(76629), o.e(514085), o.e(204542), o.e(982651), o.e(673108), o.e(487481), o.e(229522), o.e(390575), o.e(353032), o.e(637885), o.e(226913), o.e(560170), o.e(736465), o.e(222773), o.e(207991), o.e(171815), o.e(843292), o.e(431630), o.e(589307), o.e(709075), o.e(962348), o.e(4304), o.e(164460), o.e(499790), o.e(769185), o.e(355084), o.e(416239), o.e(301030), o.e(265004), o.e(70086), o.e(22085), o.e(587936), o.e(789156), o.e(904817), o.e(452048), o.e(839111), o.e(299268), o.e(252961), o.e(478218), o.e(839671), o.e(428069), o.e(835890), o.e(895612), o.e(466116), o.e(219246), o.e(433520), o.e(996306), o.e(566792), o.e(842376), o.e(902158), o.e(227195), o.e(54071), o.e(308581), o.e(531562), o.e(549698), o.e(686530), o.e(46351), o.e(23485), o.e(258373)]).then(o.bind(o, "Sh0x"))).EmbeddedWork);
        async function m(e) {
            let {
                request: r,
                serverLoader: o
            } = e, a = await o();
            if (window.parent === window || null == a) return null;
            r.signal.throwIfAborted();
            let t = new AbortController,
                s = crypto.randomUUID();
            try {
                return await new Promise((e, o) => {
                    r.signal.addEventListener("abort", () => o(new DOMException("Work embedding canceled", "AbortError")), {
                        once: !0,
                        signal: t.signal
                    }), window.addEventListener("message", r => {
                        r.source === window.parent && r.origin === a && r.data === s && e()
                    }, {
                        signal: t.signal
                    }), window.parent.postMessage({
                        type: "openai:work:office-embed",
                        challenge: s
                    }, a)
                }), a
            } finally {
                t.abort()
            }
        }
        m.hydrate = !0;
        let f = (0, a.jb)(function() {
            return null
        });
        var d = (0, a.hb)(function() {
            let e, r, o, m = (0, s.c)(7),
                f = (0, a.X)(),
                d = (0, n.useContext)(a.f);
            return null == f ? null : (m[0] !== d?.manifest.routes ? (e = (function(e) {
                let r = new Set;

                function o(a) {
                    let t = e?.[a];
                    if (t?.parentId)
                        for (let e of (o(t.parentId), t.css ?? [])) r.add(e)
                }
                return o("home.route"), o("conversation.route"), [...r]
            })(d?.manifest.routes).map(p), m[0] = d?.manifest.routes, m[1] = e) : e = m[1], m[2] !== f ? (r = (0, t.jsx)(i, {
                parentOrigin: f
            }), m[2] = f, m[3] = r) : r = m[3], m[4] !== e || m[5] !== r ? (o = (0, t.jsxs)(t.Fragment, {
                children: [e, r]
            }), m[4] = e, m[5] = r, m[6] = o) : o = m[6], o)
        });

        function p(e) {
            return (0, t.jsx)("link", {
                rel: "stylesheet",
                href: e
            }, e)
        }
        let c = (0, a.ib)(f)
    }),
    EBQV: (function(r) {
        r.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.a85b352259.js";
import * as r from "./418851.b418272bca.js";
e.C(r);
import * as o from "./109308.fbb414d4aa.js";
e.C(o);
import * as a from "./399565.a7f9c29dec.js";
e.C(a);
import * as t from "./257798.0b3d6025cd.js";
e.C(t);
import * as s from "./153380.6675e448cd.js";
e.C(s);
import * as n from "./617936.ed57a1bdc2.js";
e.C(n);
import * as i from "./807489.02ba855c8c.js";
e.C(i);
import * as m from "./337882.b1c17957d2.js";
e.C(m);
import * as f from "./955979.f40606391d.js";
e.C(f);
import * as d from "./646436.df466850ff.js";
e.C(d);
import * as p from "./7078.f43056bf4f.js";
e.C(p);
import * as c from "./200429.f5468a7d9e.js";
e.C(c);
import * as l from "./698524.29c67652d0.js";
e.C(l);
import * as b from "./956483.0463ebd3e8.js";
e.C(b);
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
import * as x from "./76629.4b3a6c11d6.js";
e.C(x);
import * as g from "./514085.5cd44b3418.js";
e.C(g);
import * as k from "./204542.555643bfb3.js";
e.C(k);
import * as y from "./982651.7bfd071e83.js";
e.C(y);
import * as h from "./673108.84888467b6.js";
e.C(h);
import * as E from "./487481.d4be37a58a.js";
e.C(E);
import * as v from "./229522.ddc021d49b.js";
e.C(v);
import * as B from "./390575.92d962cefa.js";
e.C(B);
import * as I from "./353032.7103e0705d.js";
e.C(I);
import * as A from "./637885.ac5c2e9cdb.js";
e.C(A);
import * as L from "./226913.b323f04fd6.js";
e.C(L);
import * as F from "./348899.9a10d3baec.js";
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