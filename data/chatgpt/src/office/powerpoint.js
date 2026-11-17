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
            d = (0, i.a)(async () => (await Promise.all([o.e(680612), o.e(418851), o.e(109308), o.e(399565), o.e(257798), o.e(447351), o.e(617936), o.e(807489), o.e(337882), o.e(955979), o.e(646436), o.e(7078), o.e(200429), o.e(698524), o.e(956483), o.e(87162), o.e(396705), o.e(155568), o.e(731863), o.e(767086), o.e(76629), o.e(514085), o.e(204542), o.e(226913), o.e(222773), o.e(207991), o.e(906567), o.e(843292), o.e(322024), o.e(623497), o.e(862490), o.e(839342), o.e(164460), o.e(499790), o.e(221469), o.e(529755), o.e(301030), o.e(953533), o.e(136365), o.e(740793), o.e(260732), o.e(587936), o.e(101257), o.e(452048), o.e(684598), o.e(299268), o.e(847740), o.e(763618), o.e(109131), o.e(183204), o.e(428069), o.e(499685), o.e(835890), o.e(895612), o.e(400887), o.e(40422), o.e(538505), o.e(433520), o.e(842376), o.e(578794), o.e(413109), o.e(999788), o.e(340302), o.e(308581), o.e(422142), o.e(235465), o.e(299627), o.e(566004), o.e(477331), o.e(965640), o.e(207926), o.e(596832)]).then(o.bind(o, "Sh0x"))).EmbeddedWork),
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
} from "./633146.be60f96fcf.js";
import * as r from "./418851.d43ef6e51c.js";
e.C(r);
import * as o from "./109308.2094c16514.js";
e.C(o);
import * as t from "./399565.78e1c0aa0d.js";
e.C(t);
import * as a from "./257798.7e03f1e3e2.js";
e.C(a);
import * as s from "./447351.b188109392.js";
e.C(s);
import * as n from "./617936.fb76eb2727.js";
e.C(n);
import * as i from "./807489.9c1a8ccf71.js";
e.C(i);
import * as f from "./337882.5c43a2c90b.js";
e.C(f);
import * as d from "./955979.9ae2962bd4.js";
e.C(d);
import * as m from "./646436.b525bfd8f0.js";
e.C(m);
import * as l from "./7078.a82238bfec.js";
e.C(l);
import * as p from "./200429.3bcaa139a4.js";
e.C(p);
import * as c from "./698524.3de98ac6af.js";
e.C(c);
import * as u from "./956483.227ec74d56.js";
e.C(u);
import * as b from "./87162.36edabe123.js";
e.C(b);
import * as j from "./396705.12275a5eb6.js";
e.C(j);
import * as _ from "./155568.b3f888f917.js";
e.C(_);
import * as w from "./731863.367082aec0.js";
e.C(w);
import * as C from "./767086.1a336b6bc5.js";
e.C(C);
import * as x from "./76629.93a69b821a.js";
e.C(x);
import * as h from "./514085.fe0c9f50e5.js";
e.C(h);
import * as g from "./204542.f3712a1345.js";
e.C(g);
import * as k from "./226913.dd4de34d8f.js";
e.C(k);
import * as y from "./326561.373eef1021.js";
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