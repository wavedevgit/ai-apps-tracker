export const __rspack_esm_ids = [326561];
export const __webpack_modules__ = {
    bz9d: (function(e, r, o) {
        o.d(r, {
            a: () => b,
            b: () => p,
            c: () => m,
            d: () => c
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
            f = (0, i.a)(async () => (await Promise.all([o.e(680612), o.e(418851), o.e(109308), o.e(399565), o.e(257798), o.e(447351), o.e(617936), o.e(807489), o.e(337882), o.e(955979), o.e(646436), o.e(7078), o.e(200429), o.e(698524), o.e(956483), o.e(87162), o.e(396705), o.e(155568), o.e(731863), o.e(767086), o.e(76629), o.e(226913), o.e(222773), o.e(207991), o.e(906567), o.e(843292), o.e(322024), o.e(99342), o.e(862490), o.e(839342), o.e(164460), o.e(499790), o.e(221469), o.e(529755), o.e(301030), o.e(953533), o.e(690059), o.e(560345), o.e(740793), o.e(587936), o.e(452048), o.e(684598), o.e(299268), o.e(763618), o.e(847740), o.e(109131), o.e(400887), o.e(428069), o.e(899308), o.e(835890), o.e(895612), o.e(775217), o.e(555504), o.e(433520), o.e(608076), o.e(562115), o.e(547796), o.e(227786), o.e(318846), o.e(696455), o.e(537163), o.e(308581), o.e(734327), o.e(474605), o.e(26757), o.e(378544), o.e(951830), o.e(868136)]).then(o.bind(o, "Sh0x"))).EmbeddedWork),
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
        let p = (0, t.mb)(function() {
            return null
        });
        var c = (0, t.kb)(function() {
            let e, r, o, i, l = (0, s.c)(10),
                m = (0, t.Y)(),
                p = (0, t.$)().at(-1)?.id;
            l[0] !== p ? (e = d.find(e => {
                let {
                    id: r
                } = e;
                return r === p
            })?.editor, l[0] = p, l[1] = e) : e = l[1];
            let c = e,
                b = (0, n.useContext)(t.f);
            return null == m || null == c ? null : (l[2] !== b?.manifest.routes ? (r = (function(e) {
                let r = new Set;

                function o(t) {
                    let a = e?.[t];
                    if (a?.parentId)
                        for (let e of (o(a.parentId), a.css ?? [])) r.add(e)
                }
                return o("home.route"), o("conversation.route"), [...r]
            })(b?.manifest.routes).map(u), l[2] = b?.manifest.routes, l[3] = r) : r = l[3], l[4] !== c || l[5] !== m ? (o = (0, a.jsx)(f, {
                ...m,
                editor: c
            }, m.paneProof), l[4] = c, l[5] = m, l[6] = o) : o = l[6], l[7] !== r || l[8] !== o ? (i = (0, a.jsxs)(a.Fragment, {
                children: [r, o]
            }), l[7] = r, l[8] = o, l[9] = i) : i = l[9], i)
        });

        function u(e) {
            return (0, a.jsx)("link", {
                rel: "stylesheet",
                href: e
            }, e)
        }
        let b = (0, t.lb)(p)
    }),
    EBQV: (function(r) {
        r.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.48b57020d2.js";
import * as r from "./418851.5b0ade19b1.js";
e.C(r);
import * as o from "./109308.8b09661749.js";
e.C(o);
import * as t from "./399565.edefe43a76.js";
e.C(t);
import * as a from "./257798.428a6bce48.js";
e.C(a);
import * as s from "./447351.34d04099ca.js";
e.C(s);
import * as n from "./617936.dd75fa2a89.js";
e.C(n);
import * as i from "./807489.1d24fa9988.js";
e.C(i);
import * as d from "./337882.145f5ca770.js";
e.C(d);
import * as f from "./955979.fad3aa290b.js";
e.C(f);
import * as l from "./646436.b50a318f52.js";
e.C(l);
import * as m from "./7078.9bac2fcc06.js";
e.C(m);
import * as p from "./200429.f07d17d37b.js";
e.C(p);
import * as c from "./698524.130da41cbb.js";
e.C(c);
import * as u from "./956483.20ccea0970.js";
e.C(u);
import * as b from "./87162.4896e26514.js";
e.C(b);
import * as w from "./396705.e5ddd72a06.js";
e.C(w);
import * as _ from "./155568.49e7ad46aa.js";
e.C(_);
import * as j from "./731863.3cdbbfa8f8.js";
e.C(j);
import * as C from "./767086.3711424c4d.js";
e.C(C);
import * as x from "./76629.15f5868e7b.js";
e.C(x);
import * as h from "./226913.cf105b979e.js";
e.C(h);
import * as g from "./326561.1a184bc215.js";
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