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
        let i = (0, o("Bbed").a)(async () => (await Promise.all([o.e(680612), o.e(418851), o.e(109308), o.e(399565), o.e(257798), o.e(153380), o.e(617936), o.e(807489), o.e(337882), o.e(955979), o.e(646436), o.e(7078), o.e(200429), o.e(698524), o.e(956483), o.e(87162), o.e(396705), o.e(155568), o.e(731863), o.e(767086), o.e(76629), o.e(514085), o.e(204542), o.e(982651), o.e(673108), o.e(487481), o.e(229522), o.e(390575), o.e(353032), o.e(637885), o.e(226913), o.e(560170), o.e(736465), o.e(222773), o.e(207991), o.e(171815), o.e(843292), o.e(431630), o.e(709075), o.e(680164), o.e(151915), o.e(4304), o.e(164460), o.e(499790), o.e(769185), o.e(416239), o.e(355084), o.e(265004), o.e(907652), o.e(70086), o.e(22085), o.e(789156), o.e(587936), o.e(904817), o.e(452048), o.e(252961), o.e(445991), o.e(299268), o.e(478218), o.e(499685), o.e(428069), o.e(835890), o.e(895612), o.e(466116), o.e(857274), o.e(826779), o.e(433520), o.e(546943), o.e(566792), o.e(842376), o.e(464191), o.e(902158), o.e(849939), o.e(308581), o.e(200196), o.e(549698), o.e(237059), o.e(244146), o.e(23485), o.e(935396)]).then(o.bind(o, "Sh0x"))).EmbeddedWork);
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
} from "./633146.77f467ae88.js";
import * as r from "./418851.24af49562e.js";
e.C(r);
import * as o from "./109308.fbb414d4aa.js";
e.C(o);
import * as a from "./399565.a7f9c29dec.js";
e.C(a);
import * as t from "./257798.0b3d6025cd.js";
e.C(t);
import * as s from "./153380.6675e448cd.js";
e.C(s);
import * as n from "./617936.ab7454adbe.js";
e.C(n);
import * as i from "./807489.74b193586a.js";
e.C(i);
import * as m from "./337882.eb4e205b01.js";
e.C(m);
import * as f from "./955979.c147b344d3.js";
e.C(f);
import * as d from "./646436.92303256ff.js";
e.C(d);
import * as p from "./7078.1a10efd8a2.js";
e.C(p);
import * as c from "./200429.6705d27d2a.js";
e.C(c);
import * as l from "./698524.7253a53056.js";
e.C(l);
import * as b from "./956483.cb805cdd0f.js";
e.C(b);
import * as j from "./87162.636a6b2a55.js";
e.C(j);
import * as u from "./396705.c39944bbf2.js";
e.C(u);
import * as C from "./155568.d3b291934c.js";
e.C(C);
import * as _ from "./731863.8b87e9728a.js";
e.C(_);
import * as w from "./767086.6da4be4bcc.js";
e.C(w);
import * as x from "./76629.c67c63e9cf.js";
e.C(x);
import * as g from "./514085.4d87b5885b.js";
e.C(g);
import * as k from "./204542.cb541ce34a.js";
e.C(k);
import * as y from "./982651.7bfd071e83.js";
e.C(y);
import * as h from "./673108.34c2463692.js";
e.C(h);
import * as E from "./487481.90065b7f5d.js";
e.C(E);
import * as v from "./229522.aca0c6dfc8.js";
e.C(v);
import * as B from "./390575.8f68283a1b.js";
e.C(B);
import * as I from "./353032.f68e05ddda.js";
e.C(I);
import * as A from "./637885.a0eaa62308.js";
e.C(A);
import * as L from "./226913.b323f04fd6.js";
e.C(L);
import * as F from "./348899.48c485dfbc.js";
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