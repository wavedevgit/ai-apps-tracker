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
            c = r("v4LA"),
            f = r("hZax"),
            p = r("AXDI");
        let m = "1258713729",
            l = (0, c.a)(o.y),
            d = (0, c.a)(async () => (await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(226913), r.e(967847), r.e(330351), r.e(212322), r.e(261228)]).then(r.bind(r, "oWBw"))).BusinessAdsCreditPage);

        function j(e) {
            let t, r = (0, a.c)(4),
                {
                    link: o
                } = e,
                i = (0, f.f)(m);
            if ((0, f.g)(m)) {
                let e;
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.jsx)(p.b, {}), r[0] = e) : e = r[0], e
            }
            return r[1] !== i || r[2] !== o ? (t = i ? (0, s.jsx)(d, {
                link: o
            }) : (0, s.jsx)(l, {
                link: o
            }), r[1] = i, r[2] = o, r[3] = t) : t = r[3], t
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, o, c = (0, a.c)(7),
                    {
                        link: f
                    } = e,
                    {
                        search: m
                    } = (0, n.Y)();
                c[0] !== f.isAdsCreditCampaign || c[1] !== m ? (t = f.isAdsCreditCampaign && !new URLSearchParams(m).get("promo_campaign"), c[0] = f.isAdsCreditCampaign, c[1] = m, c[2] = t) : t = c[2];
                let d = t;
                return c[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, s.jsx)(p.b, {}), c[3] = r) : r = c[3], c[4] !== d || c[5] !== f ? (o = (0, s.jsx)(p.a, {
                    children: (0, s.jsx)(i.Suspense, {
                        fallback: r,
                        children: d ? (0, s.jsx)(j, {
                            link: f
                        }) : (0, s.jsx)(l, {
                            link: f
                        })
                    })
                }), c[4] = d, c[5] = f, c[6] = o) : o = c[6], o
            }
        })
    }),
    EkCf: (function(e, t, r) {
        var s = r("ABep"),
            a = r("QosV"),
            o = r("rEML"),
            i = r("HnGz"),
            n = r("hC2y"),
            c = r("AXDI"),
            f = r("NVla"),
            p = r("nlAI");
        r.d(t, {}, {
            a: function(e) {
                let t, r, m, l, d, j = (0, a.c)(14),
                    {
                        fallback: b
                    } = e,
                    {
                        pathname: C
                    } = (0, o.Y)();
                if (j[0] !== b || j[1] !== C) {
                    l = Symbol.for("react.early_return_sentinel");
                    e: {
                        let e = (0, i.g)(n.c, C);
                        if (null == e) {
                            let e;
                            j[6] !== C ? (e = (0, f.b)(C), j[6] = C, j[7] = e) : e = j[7];
                            let t = e;
                            if (null != t) {
                                let e;
                                j[8] !== t ? (e = (0, s.jsx)(p.a, {
                                    link: t
                                }), j[8] = t, j[9] = e) : e = j[9], l = e;
                                break e
                            }
                        }
                        t = c.a,
                        r = b,
                        m = null == e ? (0, s.jsx)(n.d, {}) : (0, o.O)(e)
                    }
                    j[0] = b, j[1] = C, j[2] = t, j[3] = r, j[4] = m, j[5] = l
                } else t = j[2], r = j[3], m = j[4], l = j[5];
                return l !== Symbol.for("react.early_return_sentinel") ? l : (j[10] !== t || j[11] !== r || j[12] !== m ? (d = (0, s.jsx)(t, {
                    fallback: r,
                    children: m
                }), j[10] = t, j[11] = r, j[12] = m, j[13] = d) : d = j[13], d)
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
} from "./633146.0389b6b487.js";
import * as t from "./418851.d159eb4416.js";
e.C(t);
import * as r from "./109308.c9b7701e19.js";
e.C(r);
import * as s from "./399565.e3bd47902e.js";
e.C(s);
import * as a from "./257798.7e03f1e3e2.js";
e.C(a);
import * as o from "./447351.38c6663605.js";
e.C(o);
import * as i from "./617936.b641c39dad.js";
e.C(i);
import * as n from "./807489.f4f591ba36.js";
e.C(n);
import * as c from "./337882.ff3affb96a.js";
e.C(c);
import * as f from "./955979.1876fabeae.js";
e.C(f);
import * as p from "./646436.6a9ea7ce2b.js";
e.C(p);
import * as m from "./7078.7ac8d1f362.js";
e.C(m);
import * as l from "./200429.4d632ba2a6.js";
e.C(l);
import * as d from "./698524.389f4a7f6b.js";
e.C(d);
import * as j from "./956483.d858d35d29.js";
e.C(j);
import * as b from "./87162.77ec984516.js";
e.C(b);
import * as C from "./396705.20cd88e12f.js";
e.C(C);
import * as _ from "./155568.1c3d77f567.js";
e.C(_);
import * as x from "./731863.01f5ca0d2b.js";
e.C(x);
import * as u from "./767086.622205eb79.js";
e.C(u);
import * as g from "./76629.38c2f40595.js";
e.C(g);
import * as h from "./514085.505cf4281f.js";
e.C(h);
import * as k from "./226913.dd4de34d8f.js";
e.C(k);
import * as y from "./902158.087f350eba.js";
e.C(y);
import * as A from "./900749.ea336a9741.js";
e.C(A);
var w = e(e.s = "bJhA"),
    v = w.a,
    E = w.b;
export {
    v as
    default, E as meta
};