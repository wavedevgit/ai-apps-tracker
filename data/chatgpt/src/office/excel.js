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
        let i = (0, o("Bbed").a)(async () => (await Promise.all([o.e(680612), o.e(418851), o.e(109308), o.e(399565), o.e(257798), o.e(153380), o.e(617936), o.e(807489), o.e(337882), o.e(955979), o.e(646436), o.e(7078), o.e(200429), o.e(698524), o.e(956483), o.e(87162), o.e(396705), o.e(155568), o.e(731863), o.e(767086), o.e(76629), o.e(514085), o.e(204542), o.e(982651), o.e(673108), o.e(487481), o.e(229522), o.e(390575), o.e(353032), o.e(637885), o.e(226913), o.e(222773), o.e(207991), o.e(171815), o.e(843292), o.e(431630), o.e(589307), o.e(197062), o.e(364783), o.e(992070), o.e(164460), o.e(499790), o.e(769185), o.e(355084), o.e(416239), o.e(301030), o.e(265004), o.e(22085), o.e(70086), o.e(222981), o.e(587936), o.e(904817), o.e(452048), o.e(684598), o.e(299268), o.e(847740), o.e(101842), o.e(478218), o.e(499685), o.e(428069), o.e(835890), o.e(895612), o.e(1239), o.e(826779), o.e(433520), o.e(546943), o.e(842376), o.e(233874), o.e(902158), o.e(276732), o.e(849939), o.e(308581), o.e(734172), o.e(365037), o.e(237059), o.e(908546), o.e(398724), o.e(207802)]).then(o.bind(o, "Sh0x"))).EmbeddedWork);
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
} from "./633146.4f53659142.js";
import * as r from "./418851.5f4d5598ef.js";
e.C(r);
import * as o from "./109308.fbb414d4aa.js";
e.C(o);
import * as a from "./399565.eb37d98dab.js";
e.C(a);
import * as t from "./257798.0b3d6025cd.js";
e.C(t);
import * as s from "./153380.6675e448cd.js";
e.C(s);
import * as n from "./617936.1be6495150.js";
e.C(n);
import * as i from "./807489.47ce3d58eb.js";
e.C(i);
import * as m from "./337882.e80888e843.js";
e.C(m);
import * as f from "./955979.ad877350e8.js";
e.C(f);
import * as d from "./646436.ac746ad603.js";
e.C(d);
import * as p from "./7078.b1d26369b8.js";
e.C(p);
import * as c from "./200429.e4432be69e.js";
e.C(c);
import * as l from "./698524.167a90d544.js";
e.C(l);
import * as b from "./956483.c6b1c36f65.js";
e.C(b);
import * as j from "./87162.29ee0bd2a9.js";
e.C(j);
import * as u from "./396705.c39944bbf2.js";
e.C(u);
import * as C from "./155568.594d7ca7d4.js";
e.C(C);
import * as _ from "./731863.8b87e9728a.js";
e.C(_);
import * as w from "./767086.6da4be4bcc.js";
e.C(w);
import * as x from "./76629.975d74ebd5.js";
e.C(x);
import * as g from "./514085.94507f4bd4.js";
e.C(g);
import * as k from "./204542.3d156380d1.js";
e.C(k);
import * as y from "./982651.7bfd071e83.js";
e.C(y);
import * as h from "./673108.c0ee21225d.js";
e.C(h);
import * as E from "./487481.c884695c4d.js";
e.C(E);
import * as v from "./229522.f9a354baac.js";
e.C(v);
import * as B from "./390575.91355aac4e.js";
e.C(B);
import * as I from "./353032.505024a946.js";
e.C(I);
import * as A from "./637885.ca6d736a13.js";
e.C(A);
import * as L from "./226913.6965f848b1.js";
e.C(L);
import * as F from "./348899.1d566099ea.js";
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