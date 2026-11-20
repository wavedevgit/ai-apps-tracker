export const __rspack_esm_ids = [326561];
export const __webpack_modules__ = {
    bz9d: (function(e, r, o) {
        o.d(r, {
            a: () => b,
            b: () => c,
            c: () => m,
            d: () => p
        });
        var t = o("rEML"),
            a = o("ABep"),
            s = o("QosV"),
            n = o("zd8w"),
            i = o("Bbed");
        let d = [{
                id: "office/excel",
                editor: "excel"
            }, {
                id: "office/powerpoint",
                editor: "powerpoint"
            }, {
                id: "office/word",
                editor: "word"
            }],
            f = (0, i.a)(async () => (await Promise.all([o.e(680612), o.e(418851), o.e(109308), o.e(399565), o.e(257798), o.e(447351), o.e(617936), o.e(807489), o.e(337882), o.e(955979), o.e(646436), o.e(7078), o.e(200429), o.e(698524), o.e(956483), o.e(87162), o.e(396705), o.e(155568), o.e(731863), o.e(767086), o.e(76629), o.e(226913), o.e(222773), o.e(207991), o.e(906567), o.e(843292), o.e(322024), o.e(99342), o.e(268159), o.e(839342), o.e(164460), o.e(221469), o.e(499790), o.e(529755), o.e(301030), o.e(953533), o.e(512279), o.e(383559), o.e(587936), o.e(560345), o.e(865302), o.e(452048), o.e(684598), o.e(299268), o.e(847740), o.e(134408), o.e(109131), o.e(428069), o.e(899308), o.e(835890), o.e(895612), o.e(775217), o.e(337695), o.e(433520), o.e(608076), o.e(547796), o.e(712459), o.e(227786), o.e(230640), o.e(242906), o.e(308581), o.e(945692), o.e(8837), o.e(688235), o.e(623867), o.e(26757), o.e(546206), o.e(909556), o.e(252844), o.e(515782)]).then(o.bind(o, "Sh0x"))).EmbeddedWork),
            l = null;
        async function m(e) {
            let {
                request: r,
                serverLoader: o
            } = e, t = new URL(r.url);
            t.hash = "";
            let a = await o();
            if (r.signal.throwIfAborted(), window.parent === window || null == a) return l = null, null;
            let {
                parentOrigin: s
            } = a;
            (l?.documentUrl !== t.href || l.parentOrigin !== s) && (l = null);
            let n = a.paneProof ?? l?.paneProof ?? null,
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
                }), r.signal.throwIfAborted(), l = {
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
        m.hydrate = !0;
        let c = (0, t.mb)(function() {
            return null
        });
        var p = (0, t.kb)(function() {
            let e, r, o, i, l = (0, s.c)(10),
                m = (0, t.Y)(),
                c = (0, t.$)().at(-1)?.id;
            l[0] !== c ? (e = d.find(e => {
                let {
                    id: r
                } = e;
                return r === c
            })?.editor, l[0] = c, l[1] = e) : e = l[1];
            let p = e,
                b = (0, n.useContext)(t.f);
            return null == m || null == p ? null : (l[2] !== b?.manifest.routes ? (r = (function(e) {
                let r = new Set;

                function o(t) {
                    let a = e?.[t];
                    if (a?.parentId)
                        for (let e of (o(a.parentId), a.css ?? [])) r.add(e)
                }
                return o("home.route"), o("conversation.route"), [...r]
            })(b?.manifest.routes).map(u), l[2] = b?.manifest.routes, l[3] = r) : r = l[3], l[4] !== p || l[5] !== m ? (o = (0, a.jsx)(f, {
                ...m,
                editor: p
            }, m.paneProof), l[4] = p, l[5] = m, l[6] = o) : o = l[6], l[7] !== r || l[8] !== o ? (i = (0, a.jsxs)(a.Fragment, {
                children: [r, o]
            }), l[7] = r, l[8] = o, l[9] = i) : i = l[9], i)
        });

        function u(e) {
            return (0, a.jsx)("link", {
                rel: "stylesheet",
                href: e
            }, e)
        }
        let b = (0, t.lb)(c)
    }),
    EBQV: (function(r) {
        r.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.286e08e471.js";
import * as r from "./418851.b2405a4ff9.js";
e.C(r);
import * as o from "./109308.c704a27752.js";
e.C(o);
import * as t from "./399565.76c7da28d9.js";
e.C(t);
import * as a from "./257798.da1bc54c05.js";
e.C(a);
import * as s from "./447351.34d04099ca.js";
e.C(s);
import * as n from "./617936.da77c6b618.js";
e.C(n);
import * as i from "./807489.823dbdfb5a.js";
e.C(i);
import * as d from "./337882.060a468551.js";
e.C(d);
import * as f from "./955979.5504cdc0ad.js";
e.C(f);
import * as l from "./646436.feae78aa0d.js";
e.C(l);
import * as m from "./7078.6f2aee03ba.js";
e.C(m);
import * as c from "./200429.80eabab50b.js";
e.C(c);
import * as p from "./698524.9faf81ab1c.js";
e.C(p);
import * as u from "./956483.db483d044c.js";
e.C(u);
import * as b from "./87162.313d693207.js";
e.C(b);
import * as w from "./396705.047d6db773.js";
e.C(w);
import * as _ from "./155568.1d9e3b614b.js";
e.C(_);
import * as j from "./731863.5760f3f335.js";
e.C(j);
import * as C from "./767086.ab8a876382.js";
e.C(C);
import * as x from "./76629.6fe0bcbf7b.js";
e.C(x);
import * as h from "./226913.cf105b979e.js";
e.C(h);
import * as g from "./326561.210ee0f2a4.js";
e.C(g);
var k = e(e.s = "bz9d"),
    y = k.a,
    E = k.b,
    v = k.c,
    L = k.d;
export {
    y as ErrorBoundary, E as HydrateFallback, v as clientLoader, L as
    default
};