export const __rspack_esm_ids = [326561];
export const __webpack_modules__ = {
    bz9d: (function(e, r, o) {
        o.d(r, {
            a: () => u,
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
            f = (0, i.a)(async () => (await Promise.all([o.e(680612), o.e(418851), o.e(109308), o.e(399565), o.e(257798), o.e(447351), o.e(617936), o.e(807489), o.e(337882), o.e(955979), o.e(646436), o.e(7078), o.e(200429), o.e(698524), o.e(956483), o.e(87162), o.e(396705), o.e(155568), o.e(731863), o.e(767086), o.e(76629), o.e(226913), o.e(222773), o.e(207991), o.e(906567), o.e(843292), o.e(322024), o.e(623497), o.e(862490), o.e(839342), o.e(164460), o.e(499790), o.e(221469), o.e(529755), o.e(301030), o.e(953533), o.e(938017), o.e(740793), o.e(837547), o.e(587936), o.e(452048), o.e(684598), o.e(299268), o.e(763618), o.e(847740), o.e(134408), o.e(109131), o.e(183204), o.e(428069), o.e(499685), o.e(835890), o.e(895612), o.e(40422), o.e(433520), o.e(538505), o.e(842376), o.e(413109), o.e(167123), o.e(586777), o.e(564118), o.e(308581), o.e(935409), o.e(526631), o.e(525187), o.e(679083), o.e(685286), o.e(41699), o.e(870681)]).then(o.bind(o, "Sh0x"))).EmbeddedWork),
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
        let p = (0, t.jb)(function() {
            return null
        });
        var c = (0, t.hb)(function() {
            let e, r, o, i, l = (0, s.c)(10),
                m = (0, t.W)(),
                p = (0, t.Z)().at(-1)?.id;
            l[0] !== p ? (e = d.find(e => {
                let {
                    id: r
                } = e;
                return r === p
            })?.editor, l[0] = p, l[1] = e) : e = l[1];
            let c = e,
                u = (0, n.useContext)(t.f);
            return null == m || null == c ? null : (l[2] !== u?.manifest.routes ? (r = (function(e) {
                let r = new Set;

                function o(t) {
                    let a = e?.[t];
                    if (a?.parentId)
                        for (let e of (o(a.parentId), a.css ?? [])) r.add(e)
                }
                return o("home.route"), o("conversation.route"), [...r]
            })(u?.manifest.routes).map(b), l[2] = u?.manifest.routes, l[3] = r) : r = l[3], l[4] !== c || l[5] !== m ? (o = (0, a.jsx)(f, {
                ...m,
                editor: c
            }, m.paneProof), l[4] = c, l[5] = m, l[6] = o) : o = l[6], l[7] !== r || l[8] !== o ? (i = (0, a.jsxs)(a.Fragment, {
                children: [r, o]
            }), l[7] = r, l[8] = o, l[9] = i) : i = l[9], i)
        });

        function b(e) {
            return (0, a.jsx)("link", {
                rel: "stylesheet",
                href: e
            }, e)
        }
        let u = (0, t.ib)(p)
    }),
    EBQV: (function(r) {
        r.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.332c5da428.js";
import * as r from "./418851.3878fbfa64.js";
e.C(r);
import * as o from "./109308.4b30101b7c.js";
e.C(o);
import * as t from "./399565.de450ac543.js";
e.C(t);
import * as a from "./257798.b061e3b37a.js";
e.C(a);
import * as s from "./447351.690fba1ae5.js";
e.C(s);
import * as n from "./617936.c6f9e1ebfb.js";
e.C(n);
import * as i from "./807489.2ba5c6d996.js";
e.C(i);
import * as d from "./337882.799b00b0f3.js";
e.C(d);
import * as f from "./955979.eaf8541a67.js";
e.C(f);
import * as l from "./646436.611d2d0d1b.js";
e.C(l);
import * as m from "./7078.691a92af09.js";
e.C(m);
import * as p from "./200429.336411f62e.js";
e.C(p);
import * as c from "./698524.e12b58b33f.js";
e.C(c);
import * as b from "./956483.2514992fd3.js";
e.C(b);
import * as u from "./87162.1f25d59c9c.js";
e.C(u);
import * as w from "./396705.3e09ec2928.js";
e.C(w);
import * as _ from "./155568.b02a981797.js";
e.C(_);
import * as j from "./731863.9e2b15b813.js";
e.C(j);
import * as C from "./767086.6cceb40294.js";
e.C(C);
import * as x from "./76629.0f65023578.js";
e.C(x);
import * as h from "./226913.c039047be5.js";
e.C(h);
import * as g from "./326561.46fa44254f.js";
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