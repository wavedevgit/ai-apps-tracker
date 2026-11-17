export const __rspack_esm_ids = [326561];
export const __webpack_modules__ = {
    bz9d: (function(e, r, o) {
        o.d(r, {
            a: () => b,
            b: () => p,
            c: () => l,
            d: () => c
        });
        var t = o("rEML"),
            a = o("ABep"),
            s = o("QosV"),
            n = o("zd8w"),
            i = o("Bbed");
        let f = [{
                id: "office/excel",
                editor: "excel"
            }, {
                id: "office/powerpoint",
                editor: "powerpoint"
            }],
            d = (0, i.a)(async () => (await Promise.all([o.e(680612), o.e(418851), o.e(109308), o.e(399565), o.e(257798), o.e(447351), o.e(617936), o.e(807489), o.e(337882), o.e(955979), o.e(646436), o.e(7078), o.e(200429), o.e(698524), o.e(956483), o.e(87162), o.e(396705), o.e(155568), o.e(731863), o.e(767086), o.e(76629), o.e(514085), o.e(204542), o.e(226913), o.e(222773), o.e(207991), o.e(906567), o.e(843292), o.e(322024), o.e(758408), o.e(196526), o.e(313360), o.e(839342), o.e(164460), o.e(499790), o.e(221469), o.e(355084), o.e(301030), o.e(502948), o.e(113277), o.e(740793), o.e(260732), o.e(587936), o.e(904817), o.e(452048), o.e(684598), o.e(299268), o.e(847740), o.e(115076), o.e(458993), o.e(388411), o.e(428069), o.e(499685), o.e(835890), o.e(895612), o.e(697456), o.e(228361), o.e(433520), o.e(630241), o.e(587088), o.e(842376), o.e(413109), o.e(841676), o.e(308581), o.e(378656), o.e(344311), o.e(718570), o.e(257381), o.e(287448), o.e(940182), o.e(596832)]).then(o.bind(o, "Sh0x"))).EmbeddedWork),
            m = null;
        async function l(e) {
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
                f = crypto.randomUUID();
            try {
                return await new Promise((e, o) => {
                    r.signal.addEventListener("abort", () => o(new DOMException("Work embedding canceled", "AbortError")), {
                        once: !0,
                        signal: i.signal
                    }), window.addEventListener("message", r => {
                        r.source === window.parent && r.origin === s && r.data === f && e()
                    }, {
                        signal: i.signal
                    }), window.parent.postMessage({
                        type: "openai:work:office-embed",
                        challenge: f
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
        l.hydrate = !0;
        let p = (0, t.kb)(function() {
            return null
        });
        var c = (0, t.ib)(function() {
            let e, r, o, i, m = (0, s.c)(10),
                l = (0, t.X)(),
                p = (0, t._)().at(-1)?.id;
            m[0] !== p ? (e = f.find(e => {
                let {
                    id: r
                } = e;
                return r === p
            })?.editor, m[0] = p, m[1] = e) : e = m[1];
            let c = e,
                b = (0, n.useContext)(t.f);
            return null == l || null == c ? null : (m[2] !== b?.manifest.routes ? (r = (function(e) {
                let r = new Set;

                function o(t) {
                    let a = e?.[t];
                    if (a?.parentId)
                        for (let e of (o(a.parentId), a.css ?? [])) r.add(e)
                }
                return o("home.route"), o("conversation.route"), [...r]
            })(b?.manifest.routes).map(u), m[2] = b?.manifest.routes, m[3] = r) : r = m[3], m[4] !== c || m[5] !== l ? (o = (0, a.jsx)(d, {
                ...l,
                editor: c
            }, l.paneProof), m[4] = c, m[5] = l, m[6] = o) : o = m[6], m[7] !== r || m[8] !== o ? (i = (0, a.jsxs)(a.Fragment, {
                children: [r, o]
            }), m[7] = r, m[8] = o, m[9] = i) : i = m[9], i)
        });

        function u(e) {
            return (0, a.jsx)("link", {
                rel: "stylesheet",
                href: e
            }, e)
        }
        let b = (0, t.jb)(p)
    }),
    EBQV: (function(r) {
        r.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.0181f6662c.js";
import * as r from "./418851.09486f68f7.js";
e.C(r);
import * as o from "./109308.cb66ec8473.js";
e.C(o);
import * as t from "./399565.e3bd47902e.js";
e.C(t);
import * as a from "./257798.7e03f1e3e2.js";
e.C(a);
import * as s from "./447351.74c4243102.js";
e.C(s);
import * as n from "./617936.b641c39dad.js";
e.C(n);
import * as i from "./807489.3f6f62fc4e.js";
e.C(i);
import * as f from "./337882.ac66e3b9e7.js";
e.C(f);
import * as d from "./955979.d6920ef47f.js";
e.C(d);
import * as m from "./646436.029c782154.js";
e.C(m);
import * as l from "./7078.197e9e74da.js";
e.C(l);
import * as p from "./200429.336016a921.js";
e.C(p);
import * as c from "./698524.1c89d5e682.js";
e.C(c);
import * as u from "./956483.aae39072ae.js";
e.C(u);
import * as b from "./87162.70963eaac7.js";
e.C(b);
import * as j from "./396705.63a7a7138f.js";
e.C(j);
import * as _ from "./155568.80ff0b0790.js";
e.C(_);
import * as w from "./731863.980fcc67e8.js";
e.C(w);
import * as C from "./767086.029c6e6cb7.js";
e.C(C);
import * as x from "./76629.f2ec2ff70b.js";
e.C(x);
import * as h from "./514085.a7493d29eb.js";
e.C(h);
import * as g from "./204542.d8a33857f0.js";
e.C(g);
import * as k from "./226913.dd4de34d8f.js";
e.C(k);
import * as y from "./326561.e1e0c92e8e.js";
e.C(y);
var E = e(e.s = "bz9d"),
    v = E.a,
    L = E.b,
    A = E.c,
    B = E.d;
export {
    v as ErrorBoundary, L as HydrateFallback, A as clientLoader, B as
    default
};