export const __rspack_esm_ids = [326561];
export const __webpack_modules__ = {
    bz9d: (function(a, b, c) {
        c.d(b, {
            a: () => p,
            b: () => m,
            c: () => l,
            d: () => n
        });
        var d = c("rEML"),
            e = c("ABep"),
            f = c("QosV"),
            g = c("zd8w"),
            h = c("Bbed");
        let i = [{
                id: "office/excel",
                editor: "excel"
            }, {
                id: "office/powerpoint",
                editor: "powerpoint"
            }, {
                id: "office/word",
                editor: "word"
            }],
            j = (0, h.a)(async () => (await Promise.all([c.e(680612), c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(222773), c.e(207991), c.e(906567), c.e(843292), c.e(745756), c.e(298771), c.e(877940), c.e(489918), c.e(164460), c.e(839342), c.e(221469), c.e(499790), c.e(990214), c.e(529755), c.e(301030), c.e(953533), c.e(739733), c.e(862130), c.e(383559), c.e(587936), c.e(865302), c.e(445705), c.e(452048), c.e(684598), c.e(299268), c.e(847740), c.e(176742), c.e(428069), c.e(835890), c.e(895612), c.e(183204), c.e(337695), c.e(538505), c.e(219246), c.e(50536), c.e(547796), c.e(187483), c.e(1068), c.e(308581), c.e(227786), c.e(494082), c.e(441359), c.e(193390), c.e(713437), c.e(8837), c.e(340158), c.e(160506), c.e(843205), c.e(108409), c.e(48483)]).then(c.bind(c, "Sh0x"))).EmbeddedWork),
            k = null;
        async function l(a) {
            let {
                request: b,
                serverLoader: c
            } = a, d = new URL(b.url);
            d.hash = "";
            let e = await c();
            if (b.signal.throwIfAborted(), window.parent === window || null == e) return k = null, null;
            let {
                parentOrigin: f
            } = e;
            (k?.documentUrl !== d.href || k.parentOrigin !== f) && (k = null);
            let g = e.paneProof ?? k?.paneProof ?? null,
                h = new AbortController,
                i = crypto.randomUUID();
            try {
                return await new Promise((a, c) => {
                    b.signal.addEventListener("abort", () => c(new DOMException("Work embedding canceled", "AbortError")), {
                        once: !0,
                        signal: h.signal
                    }), window.addEventListener("message", b => {
                        b.source === window.parent && b.origin === f && b.data === i && a()
                    }, {
                        signal: h.signal
                    }), window.parent.postMessage({
                        type: "openai:work:office-embed",
                        challenge: i
                    }, f)
                }), b.signal.throwIfAborted(), k = {
                    parentOrigin: f,
                    paneProof: g,
                    documentUrl: d.href
                }, {
                    parentOrigin: f,
                    paneProof: g
                }
            } finally {
                h.abort()
            }
        }
        l.hydrate = !0;
        let m = (0, d.mb)(function() {
            return null
        });
        var n = (0, d.kb)(function() {
            let a, b, c, h, k = (0, f.c)(10),
                l = (0, d.Y)(),
                m = (0, d.$)().at(-1)?.id;
            k[0] !== m ? (a = i.find(a => {
                let {
                    id: b
                } = a;
                return b === m
            })?.editor, k[0] = m, k[1] = a) : a = k[1];
            let n = a,
                p = (0, g.useContext)(d.f);
            return null == l || null == n ? null : (k[2] !== p?.manifest.routes ? (b = (function(a) {
                let b = new Set;

                function c(d) {
                    let e = a?.[d];
                    if (e?.parentId)
                        for (let a of (c(e.parentId), e.css ?? [])) b.add(a)
                }
                return c("home.route"), c("conversation.route"), [...b]
            })(p?.manifest.routes).map(o), k[2] = p?.manifest.routes, k[3] = b) : b = k[3], k[4] !== n || k[5] !== l ? (c = (0, e.jsx)(j, {
                ...l,
                editor: n
            }, l.paneProof), k[4] = n, k[5] = l, k[6] = c) : c = k[6], k[7] !== b || k[8] !== c ? (h = (0, e.jsxs)(e.Fragment, {
                children: [b, c]
            }), k[7] = b, k[8] = c, k[9] = h) : h = k[9], h)
        });

        function o(a) {
            return (0, e.jsx)("link", {
                rel: "stylesheet",
                href: a
            }, a)
        }
        let p = (0, d.lb)(m)
    }),
    EBQV: (function(b) {
        b.exports = a.ir("/cdn/assets/dotnet.js").then(function(a) {
            return a
        })
    })
};
import {
    __webpack_require__ as a
} from "./633146.192293cdfd.js";
import * as b from "./418851.373d5e7c7d.js";
a.C(b);
import * as c from "./109308.6f7ef1dfb7.js";
a.C(c);
import * as d from "./399565.61ce507128.js";
a.C(d);
import * as e from "./257798.18e3fd1164.js";
a.C(e);
import * as f from "./447351.05632d2214.js";
a.C(f);
import * as g from "./617936.82c33d1781.js";
a.C(g);
import * as h from "./807489.80226d951f.js";
a.C(h);
import * as i from "./337882.c48859a67a.js";
a.C(i);
import * as j from "./955979.3817544990.js";
a.C(j);
import * as k from "./646436.8f73ec6517.js";
a.C(k);
import * as l from "./7078.fb59bca78c.js";
a.C(l);
import * as m from "./200429.7f45d5c86a.js";
a.C(m);
import * as n from "./698524.906978efe4.js";
a.C(n);
import * as o from "./956483.b7886e0470.js";
a.C(o);
import * as p from "./87162.563f0c8e80.js";
a.C(p);
import * as q from "./396705.5e3411e749.js";
a.C(q);
import * as r from "./155568.5b6ea1007a.js";
a.C(r);
import * as s from "./731863.5065e21881.js";
a.C(s);
import * as t from "./767086.2154dca9c8.js";
a.C(t);
import * as u from "./76629.6adf997716.js";
a.C(u);
import * as v from "./226913.748570e15f.js";
a.C(v);
import * as w from "./326561.152d798063.js";
a.C(w);
var x = a(a.s = "bz9d"),
    y = x.a,
    z = x.b,
    A = x.c,
    B = x.d;
export {
    y as ErrorBoundary, z as HydrateFallback, A as clientLoader, B as
    default
};