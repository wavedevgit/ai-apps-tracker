export const __rspack_esm_ids = [900749];
export const __webpack_modules__ = {
    bJhA: (function(e, t, r) {
        r.d(t, {
            a: () => i,
            b: () => n
        });
        var s = r("rEML"),
            a = r("TfGh"),
            o = r("EkCf");
        let i = (0, s.hb)(o.a),
            n = e => {
                let {
                    loaderData: t
                } = e;
                if (null == t) return [];
                let r = `https://chatgpt.com${a.d}`;
                return [{
                    title: t.title
                }, {
                    name: "description",
                    content: t.description
                }, {
                    property: "og:title",
                    content: t.title
                }, {
                    property: "og:description",
                    content: t.description
                }, {
                    property: "og:type",
                    content: "website"
                }, {
                    property: "og:url",
                    content: r
                }, {
                    tagName: "link",
                    rel: "canonical",
                    href: r
                }]
            }
    }),
    nDjx: (function(e, t, r) {
        e.exports = r.p + "assets/appshot-logo.f0152cb4dd.png"
    }),
    hIAo: (function(e, t, r) {
        e.exports = r.p + "assets/codex-app-ga-logo.dfddfb85d7.png"
    }),
    OCvz: (function(e, t, r) {
        e.exports = r.p + "assets/dictation-start.f6efcb404f.wav"
    }),
    DJ2e: (function(e, t, r) {
        e.exports = r.p + "assets/dictation-stop.e3bc7ebc5e.wav"
    }),
    nlAI: (function(e, t, r) {
        var s = r("ABep"),
            a = r("QosV"),
            o = r("XyTt"),
            i = r("zd8w"),
            n = r("rEML"),
            p = r("v4LA"),
            m = r("hZax"),
            c = r("AXDI");
        let f = "1258713729",
            l = (0, p.a)(o.z),
            d = (0, p.a)(async () => (await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(226913), r.e(967847), r.e(330351), r.e(212322), r.e(727318)]).then(r.bind(r, "MyHG"))).BusinessAdsCreditPage);

        function b(e) {
            let t, r = (0, a.c)(4),
                {
                    link: o
                } = e,
                i = (0, m.f)(f);
            if ((0, m.g)(f)) {
                let e;
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.jsx)(c.b, {}), r[0] = e) : e = r[0], e
            }
            return r[1] !== i || r[2] !== o ? (t = i ? (0, s.jsx)(d, {
                link: o
            }) : (0, s.jsx)(l, {
                link: o
            }), r[1] = i, r[2] = o, r[3] = t) : t = r[3], t
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, o, p = (0, a.c)(7),
                    {
                        link: m
                    } = e,
                    {
                        search: f
                    } = (0, n.X)();
                p[0] !== m.isAdsCreditCampaign || p[1] !== f ? (t = m.isAdsCreditCampaign && !new URLSearchParams(f).get("promo_campaign"), p[0] = m.isAdsCreditCampaign, p[1] = f, p[2] = t) : t = p[2];
                let d = t;
                return p[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, s.jsx)(c.b, {}), p[3] = r) : r = p[3], p[4] !== d || p[5] !== m ? (o = (0, s.jsx)(c.a, {
                    children: (0, s.jsx)(i.Suspense, {
                        fallback: r,
                        children: d ? (0, s.jsx)(b, {
                            link: m
                        }) : (0, s.jsx)(l, {
                            link: m
                        })
                    })
                }), p[4] = d, p[5] = m, p[6] = o) : o = p[6], o
            }
        })
    }),
    EkCf: (function(e, t, r) {
        var s = r("ABep"),
            a = r("QosV"),
            o = r("rEML"),
            i = r("HnGz"),
            n = r("hC2y"),
            p = r("AXDI"),
            m = r("NVla"),
            c = r("nlAI");
        r.d(t, {}, {
            a: function(e) {
                let t, r, f, l, d, b = (0, a.c)(14),
                    {
                        fallback: j
                    } = e,
                    {
                        pathname: C
                    } = (0, o.X)();
                if (b[0] !== j || b[1] !== C) {
                    l = Symbol.for("react.early_return_sentinel");
                    e: {
                        let e = (0, i.g)(n.c, C);
                        if (null == e) {
                            let e;
                            b[6] !== C ? (e = (0, m.b)(C), b[6] = C, b[7] = e) : e = b[7];
                            let t = e;
                            if (null != t) {
                                let e;
                                b[8] !== t ? (e = (0, s.jsx)(c.a, {
                                    link: t
                                }), b[8] = t, b[9] = e) : e = b[9], l = e;
                                break e
                            }
                        }
                        t = p.a,
                        r = j,
                        f = null == e ? (0, s.jsx)(n.d, {}) : (0, o.N)(e)
                    }
                    b[0] = j, b[1] = C, b[2] = t, b[3] = r, b[4] = f, b[5] = l
                } else t = b[2], r = b[3], f = b[4], l = b[5];
                return l !== Symbol.for("react.early_return_sentinel") ? l : (b[10] !== t || b[11] !== r || b[12] !== f ? (d = (0, s.jsx)(t, {
                    fallback: r,
                    children: f
                }), b[10] = t, b[11] = r, b[12] = f, b[13] = d) : d = b[13], d)
            }
        })
    }),
    EBQV: (function(t) {
        t.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.332c5da428.js";
import * as t from "./418851.3878fbfa64.js";
e.C(t);
import * as r from "./109308.4b30101b7c.js";
e.C(r);
import * as s from "./399565.de450ac543.js";
e.C(s);
import * as a from "./257798.b061e3b37a.js";
e.C(a);
import * as o from "./447351.690fba1ae5.js";
e.C(o);
import * as i from "./617936.c6f9e1ebfb.js";
e.C(i);
import * as n from "./807489.2ba5c6d996.js";
e.C(n);
import * as p from "./337882.799b00b0f3.js";
e.C(p);
import * as m from "./955979.eaf8541a67.js";
e.C(m);
import * as c from "./646436.611d2d0d1b.js";
e.C(c);
import * as f from "./7078.691a92af09.js";
e.C(f);
import * as l from "./200429.336411f62e.js";
e.C(l);
import * as d from "./698524.e12b58b33f.js";
e.C(d);
import * as b from "./956483.2514992fd3.js";
e.C(b);
import * as j from "./87162.1f25d59c9c.js";
e.C(j);
import * as C from "./396705.3e09ec2928.js";
e.C(C);
import * as _ from "./155568.b02a981797.js";
e.C(_);
import * as x from "./731863.9e2b15b813.js";
e.C(x);
import * as u from "./767086.6cceb40294.js";
e.C(u);
import * as g from "./76629.0f65023578.js";
e.C(g);
import * as h from "./226913.c039047be5.js";
e.C(h);
import * as k from "./413109.b4bfe81a07.js";
e.C(k);
import * as y from "./900749.e30cf2d868.js";
e.C(y);
var A = e(e.s = "bJhA"),
    w = A.a,
    v = A.b;
export {
    w as
    default, v as meta
};