export const __rspack_esm_ids = [348899];
export const __webpack_modules__ = {
    tw9u: (function(e, r, o) {
        o.d(r, {
            a: () => c,
            b: () => m,
            c: () => i,
            d: () => p
        });
        var a = o("jqIZ"),
            t = o("ABep"),
            s = o("QosV"),
            f = o("zd8w");
        let n = (0, o("Bbed").a)(async () => (await Promise.all([o.e(680612), o.e(418851), o.e(109308), o.e(399565), o.e(257798), o.e(153380), o.e(617936), o.e(807489), o.e(337882), o.e(955979), o.e(646436), o.e(7078), o.e(200429), o.e(698524), o.e(956483), o.e(87162), o.e(396705), o.e(155568), o.e(731863), o.e(767086), o.e(76629), o.e(514085), o.e(204542), o.e(982651), o.e(673108), o.e(487481), o.e(229522), o.e(390575), o.e(353032), o.e(637885), o.e(226913), o.e(222773), o.e(207991), o.e(171815), o.e(843292), o.e(431630), o.e(589307), o.e(197062), o.e(381), o.e(992070), o.e(164460), o.e(499790), o.e(769185), o.e(355084), o.e(416239), o.e(301030), o.e(265004), o.e(22085), o.e(70086), o.e(222981), o.e(587936), o.e(904817), o.e(452048), o.e(839111), o.e(299268), o.e(252961), o.e(101842), o.e(478218), o.e(499685), o.e(428069), o.e(835890), o.e(895612), o.e(466116), o.e(826779), o.e(433520), o.e(816650), o.e(546943), o.e(842376), o.e(902158), o.e(276732), o.e(849939), o.e(308581), o.e(734172), o.e(626319), o.e(907437), o.e(782912), o.e(473891), o.e(370637)]).then(o.bind(o, "Sh0x"))).EmbeddedWork);
        async function i(e) {
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
        i.hydrate = !0;
        let m = (0, a.jb)(function() {
            return null
        });
        var p = (0, a.hb)(function() {
            let e, r, o, i = (0, s.c)(7),
                m = (0, a.X)(),
                p = (0, f.useContext)(a.f);
            return null == m ? null : (i[0] !== p?.manifest.routes ? (e = (function(e) {
                let r = new Set;

                function o(a) {
                    let t = e?.[a];
                    if (t?.parentId)
                        for (let e of (o(t.parentId), t.css ?? [])) r.add(e)
                }
                return o("home.route"), o("conversation.route"), [...r]
            })(p?.manifest.routes).map(d), i[0] = p?.manifest.routes, i[1] = e) : e = i[1], i[2] !== m ? (r = (0, t.jsx)(n, {
                parentOrigin: m
            }), i[2] = m, i[3] = r) : r = i[3], i[4] !== e || i[5] !== r ? (o = (0, t.jsxs)(t.Fragment, {
                children: [e, r]
            }), i[4] = e, i[5] = r, i[6] = o) : o = i[6], o)
        });

        function d(e) {
            return (0, t.jsx)("link", {
                rel: "stylesheet",
                href: e
            }, e)
        }
        let c = (0, a.ib)(m)
    }),
    EBQV: (function(r) {
        r.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.79c7577f6d.js";
import * as r from "./418851.4cf783e1e4.js";
e.C(r);
import * as o from "./109308.fbb414d4aa.js";
e.C(o);
import * as a from "./399565.ed5e74a86b.js";
e.C(a);
import * as t from "./257798.0b3d6025cd.js";
e.C(t);
import * as s from "./153380.6675e448cd.js";
e.C(s);
import * as f from "./617936.5a72737818.js";
e.C(f);
import * as n from "./807489.54f5772d0d.js";
e.C(n);
import * as i from "./337882.26e5bd2b09.js";
e.C(i);
import * as m from "./955979.c158e14c67.js";
e.C(m);
import * as p from "./646436.73183b8431.js";
e.C(p);
import * as d from "./7078.92e3c91286.js";
e.C(d);
import * as c from "./200429.073fa1ac67.js";
e.C(c);
import * as l from "./698524.d0f80a4f75.js";
e.C(l);
import * as b from "./956483.7057f5dd90.js";
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
import * as x from "./76629.4a3def3f3d.js";
e.C(x);
import * as g from "./514085.fce2779453.js";
e.C(g);
import * as k from "./204542.ebe6ed48ad.js";
e.C(k);
import * as y from "./982651.7bfd071e83.js";
e.C(y);
import * as h from "./673108.aaf568e9f3.js";
e.C(h);
import * as E from "./487481.699d7b5953.js";
e.C(E);
import * as v from "./229522.110e65fd00.js";
e.C(v);
import * as B from "./390575.8e5cb2c01a.js";
e.C(B);
import * as I from "./353032.9312ae4acb.js";
e.C(I);
import * as A from "./637885.3e8c638fde.js";
e.C(A);
import * as L from "./226913.6965f848b1.js";
e.C(L);
import * as F from "./348899.e44430f7e2.js";
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