export const __rspack_esm_ids = [348899];
export const __webpack_modules__ = {
    tw9u: (function(e, r, o) {
        o.d(r, {
            a: () => c,
            b: () => f,
            c: () => d,
            d: () => m
        });
        var t = o("jqIZ"),
            a = o("ABep"),
            s = o("QosV"),
            n = o("zd8w");
        let i = (0, o("Bbed").a)(async () => (await Promise.all([o.e(680612), o.e(418851), o.e(109308), o.e(399565), o.e(257798), o.e(447351), o.e(617936), o.e(807489), o.e(337882), o.e(955979), o.e(646436), o.e(7078), o.e(200429), o.e(698524), o.e(956483), o.e(87162), o.e(396705), o.e(155568), o.e(731863), o.e(767086), o.e(76629), o.e(226913), o.e(222773), o.e(207991), o.e(906567), o.e(843292), o.e(431630), o.e(589307), o.e(197062), o.e(821745), o.e(114517), o.e(164460), o.e(499790), o.e(971634), o.e(355084), o.e(206203), o.e(428078), o.e(301030), o.e(22085), o.e(70086), o.e(458614), o.e(587936), o.e(904817), o.e(452048), o.e(684598), o.e(299268), o.e(847740), o.e(101842), o.e(478218), o.e(499685), o.e(428069), o.e(835890), o.e(895612), o.e(1239), o.e(826779), o.e(433520), o.e(898095), o.e(842376), o.e(233874), o.e(902158), o.e(979380), o.e(849939), o.e(308581), o.e(420541), o.e(365037), o.e(237059), o.e(928223), o.e(398724), o.e(207802)]).then(o.bind(o, "Sh0x"))).EmbeddedWork);
        async function d(e) {
            let {
                request: r,
                serverLoader: o
            } = e, t = await o();
            if (window.parent === window || null == t) return null;
            r.signal.throwIfAborted();
            let a = new AbortController,
                s = crypto.randomUUID();
            try {
                return await new Promise((e, o) => {
                    r.signal.addEventListener("abort", () => o(new DOMException("Work embedding canceled", "AbortError")), {
                        once: !0,
                        signal: a.signal
                    }), window.addEventListener("message", r => {
                        r.source === window.parent && r.origin === t && r.data === s && e()
                    }, {
                        signal: a.signal
                    }), window.parent.postMessage({
                        type: "openai:work:office-embed",
                        challenge: s
                    }, t)
                }), t
            } finally {
                a.abort()
            }
        }
        d.hydrate = !0;
        let f = (0, t.jb)(function() {
            return null
        });
        var m = (0, t.hb)(function() {
            let e, r, o, d = (0, s.c)(7),
                f = (0, t.X)(),
                m = (0, n.useContext)(t.f);
            return null == f ? null : (d[0] !== m?.manifest.routes ? (e = (function(e) {
                let r = new Set;

                function o(t) {
                    let a = e?.[t];
                    if (a?.parentId)
                        for (let e of (o(a.parentId), a.css ?? [])) r.add(e)
                }
                return o("home.route"), o("conversation.route"), [...r]
            })(m?.manifest.routes).map(p), d[0] = m?.manifest.routes, d[1] = e) : e = d[1], d[2] !== f ? (r = (0, a.jsx)(i, {
                parentOrigin: f
            }), d[2] = f, d[3] = r) : r = d[3], d[4] !== e || d[5] !== r ? (o = (0, a.jsxs)(a.Fragment, {
                children: [e, r]
            }), d[4] = e, d[5] = r, d[6] = o) : o = d[6], o)
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
} from "./633146.acefa13d1a.js";
import * as r from "./418851.4b043c43bc.js";
e.C(r);
import * as o from "./109308.e66696cd0d.js";
e.C(o);
import * as t from "./399565.2fc4679b26.js";
e.C(t);
import * as a from "./257798.b51742efd5.js";
e.C(a);
import * as s from "./447351.496da706c3.js";
e.C(s);
import * as n from "./617936.dcbf382e63.js";
e.C(n);
import * as i from "./807489.7f5d47cb0e.js";
e.C(i);
import * as d from "./337882.f22d43d615.js";
e.C(d);
import * as f from "./955979.d659318431.js";
e.C(f);
import * as m from "./646436.30c2553f0b.js";
e.C(m);
import * as p from "./7078.5cd07a5c9b.js";
e.C(p);
import * as c from "./200429.82d37d45f2.js";
e.C(c);
import * as l from "./698524.1d78dbab32.js";
e.C(l);
import * as b from "./956483.4fffedad3f.js";
e.C(b);
import * as u from "./87162.ceb3023033.js";
e.C(u);
import * as j from "./396705.74bbf371c4.js";
e.C(j);
import * as _ from "./155568.8fe9b1a879.js";
e.C(_);
import * as w from "./731863.e2c3850b56.js";
e.C(w);
import * as C from "./767086.e730a8ccb4.js";
e.C(C);
import * as x from "./76629.0f4df00a80.js";
e.C(x);
import * as g from "./226913.27c93050ff.js";
e.C(g);
import * as k from "./348899.82b2425817.js";
e.C(k);
var y = e(e.s = "tw9u"),
    h = y.a,
    E = y.b,
    v = y.c,
    B = y.d;
export {
    h as ErrorBoundary, E as HydrateFallback, v as clientLoader, B as
    default
};