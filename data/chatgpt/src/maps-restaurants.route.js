export const __rspack_esm_ids = [900749];
export const __webpack_modules__ = {
    bJhA: (function(e, t, r) {
        r.d(t, {
            a: () => i,
            b: () => n
        });
        var s = r("rEML"),
            o = r("TfGh"),
            a = r("EkCf");
        let i = (0, s.hb)(a.a),
            n = e => {
                let {
                    loaderData: t
                } = e;
                if (null == t) return [];
                let r = `https://chatgpt.com${o.d}`;
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
            o = r("QosV"),
            a = r("XyTt"),
            i = r("zd8w"),
            n = r("rEML"),
            f = r("v4LA"),
            p = r("hZax"),
            m = r("AXDI");
        let c = "1258713729",
            l = (0, f.a)(a.y),
            d = (0, f.a)(async () => (await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(226913), r.e(967847), r.e(330351), r.e(212322), r.e(261228)]).then(r.bind(r, "oWBw"))).BusinessAdsCreditPage);

        function b(e) {
            let t, r = (0, o.c)(4),
                {
                    link: a
                } = e,
                i = (0, p.f)(c);
            if ((0, p.g)(c)) {
                let e;
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.jsx)(m.b, {}), r[0] = e) : e = r[0], e
            }
            return r[1] !== i || r[2] !== a ? (t = i ? (0, s.jsx)(d, {
                link: a
            }) : (0, s.jsx)(l, {
                link: a
            }), r[1] = i, r[2] = a, r[3] = t) : t = r[3], t
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, a, f = (0, o.c)(7),
                    {
                        link: p
                    } = e,
                    {
                        search: c
                    } = (0, n.Y)();
                f[0] !== p.isAdsCreditCampaign || f[1] !== c ? (t = p.isAdsCreditCampaign && !new URLSearchParams(c).get("promo_campaign"), f[0] = p.isAdsCreditCampaign, f[1] = c, f[2] = t) : t = f[2];
                let d = t;
                return f[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, s.jsx)(m.b, {}), f[3] = r) : r = f[3], f[4] !== d || f[5] !== p ? (a = (0, s.jsx)(m.a, {
                    children: (0, s.jsx)(i.Suspense, {
                        fallback: r,
                        children: d ? (0, s.jsx)(b, {
                            link: p
                        }) : (0, s.jsx)(l, {
                            link: p
                        })
                    })
                }), f[4] = d, f[5] = p, f[6] = a) : a = f[6], a
            }
        })
    }),
    EkCf: (function(e, t, r) {
        var s = r("ABep"),
            o = r("QosV"),
            a = r("rEML"),
            i = r("HnGz"),
            n = r("hC2y"),
            f = r("AXDI"),
            p = r("NVla"),
            m = r("nlAI");
        r.d(t, {}, {
            a: function(e) {
                let t, r, c, l, d, b = (0, o.c)(14),
                    {
                        fallback: j
                    } = e,
                    {
                        pathname: C
                    } = (0, a.Y)();
                if (b[0] !== j || b[1] !== C) {
                    l = Symbol.for("react.early_return_sentinel");
                    e: {
                        let e = (0, i.g)(n.c, C);
                        if (null == e) {
                            let e;
                            b[6] !== C ? (e = (0, p.b)(C), b[6] = C, b[7] = e) : e = b[7];
                            let t = e;
                            if (null != t) {
                                let e;
                                b[8] !== t ? (e = (0, s.jsx)(m.a, {
                                    link: t
                                }), b[8] = t, b[9] = e) : e = b[9], l = e;
                                break e
                            }
                        }
                        t = f.a,
                        r = j,
                        c = null == e ? (0, s.jsx)(n.d, {}) : (0, a.O)(e)
                    }
                    b[0] = j, b[1] = C, b[2] = t, b[3] = r, b[4] = c, b[5] = l
                } else t = b[2], r = b[3], c = b[4], l = b[5];
                return l !== Symbol.for("react.early_return_sentinel") ? l : (b[10] !== t || b[11] !== r || b[12] !== c ? (d = (0, s.jsx)(t, {
                    fallback: r,
                    children: c
                }), b[10] = t, b[11] = r, b[12] = c, b[13] = d) : d = b[13], d)
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
} from "./633146.7f86ed336a.js";
import * as t from "./418851.ac24d305cd.js";
e.C(t);
import * as r from "./109308.c9b7701e19.js";
e.C(r);
import * as s from "./399565.e3bd47902e.js";
e.C(s);
import * as o from "./257798.7e03f1e3e2.js";
e.C(o);
import * as a from "./447351.ec9533f9fc.js";
e.C(a);
import * as i from "./617936.b641c39dad.js";
e.C(i);
import * as n from "./807489.641526722d.js";
e.C(n);
import * as f from "./337882.c82c7eb7d0.js";
e.C(f);
import * as p from "./955979.26623eb1e8.js";
e.C(p);
import * as m from "./646436.6a9ea7ce2b.js";
e.C(m);
import * as c from "./7078.7ac8d1f362.js";
e.C(c);
import * as l from "./200429.b3f88f116c.js";
e.C(l);
import * as d from "./698524.8e9b330e02.js";
e.C(d);
import * as b from "./956483.dad0089cdf.js";
e.C(b);
import * as j from "./87162.5235ed43cc.js";
e.C(j);
import * as C from "./396705.f3e9be32ee.js";
e.C(C);
import * as _ from "./155568.f88fad6c40.js";
e.C(_);
import * as x from "./731863.70436835b9.js";
e.C(x);
import * as u from "./767086.dce6c25374.js";
e.C(u);
import * as g from "./76629.b4d403ea2d.js";
e.C(g);
import * as h from "./514085.be2a492f7d.js";
e.C(h);
import * as k from "./226913.dd4de34d8f.js";
e.C(k);
import * as y from "./902158.087f350eba.js";
e.C(y);
import * as A from "./900749.cd1a19965b.js";
e.C(A);
var w = e(e.s = "bJhA"),
    v = w.a,
    E = w.b;
export {
    v as
    default, E as meta
};