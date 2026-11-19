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
        let i = (0, s.kb)(o.a),
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
            c = r("hZax"),
            m = r("AXDI");
        let f = "1258713729",
            l = (0, p.a)(o.z),
            d = (0, p.a)(async () => (await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(226913), r.e(967847), r.e(330351), r.e(212322), r.e(359399)]).then(r.bind(r, "MyHG"))).BusinessAdsCreditPage);

        function b(e) {
            let t, r = (0, a.c)(4),
                {
                    link: o
                } = e,
                i = (0, c.f)(f);
            if ((0, c.g)(f)) {
                let e;
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.jsx)(m.b, {}), r[0] = e) : e = r[0], e
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
                        link: c
                    } = e,
                    {
                        search: f
                    } = (0, n.Z)();
                p[0] !== c.isAdsCreditCampaign || p[1] !== f ? (t = c.isAdsCreditCampaign && !new URLSearchParams(f).get("promo_campaign"), p[0] = c.isAdsCreditCampaign, p[1] = f, p[2] = t) : t = p[2];
                let d = t;
                return p[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, s.jsx)(m.b, {}), p[3] = r) : r = p[3], p[4] !== d || p[5] !== c ? (o = (0, s.jsx)(m.a, {
                    children: (0, s.jsx)(i.Suspense, {
                        fallback: r,
                        children: d ? (0, s.jsx)(b, {
                            link: c
                        }) : (0, s.jsx)(l, {
                            link: c
                        })
                    })
                }), p[4] = d, p[5] = c, p[6] = o) : o = p[6], o
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
            c = r("NVla"),
            m = r("nlAI");
        r.d(t, {}, {
            a: function(e) {
                let t, r, f, l, d, b = (0, a.c)(14),
                    {
                        fallback: j
                    } = e,
                    {
                        pathname: C
                    } = (0, o.Z)();
                if (b[0] !== j || b[1] !== C) {
                    l = Symbol.for("react.early_return_sentinel");
                    e: {
                        let e = (0, i.g)(n.c, C);
                        if (null == e) {
                            let e;
                            b[6] !== C ? (e = (0, c.b)(C), b[6] = C, b[7] = e) : e = b[7];
                            let t = e;
                            if (null != t) {
                                let e;
                                b[8] !== t ? (e = (0, s.jsx)(m.a, {
                                    link: t
                                }), b[8] = t, b[9] = e) : e = b[9], l = e;
                                break e
                            }
                        }
                        t = p.a,
                        r = j,
                        f = null == e ? (0, s.jsx)(n.d, {}) : (0, o.P)(e)
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
} from "./633146.2ddddba2a5.js";
import * as t from "./418851.f34514cc3f.js";
e.C(t);
import * as r from "./109308.8b09661749.js";
e.C(r);
import * as s from "./399565.edefe43a76.js";
e.C(s);
import * as a from "./257798.6b4268ddac.js";
e.C(a);
import * as o from "./447351.34d04099ca.js";
e.C(o);
import * as i from "./617936.4a1557f13c.js";
e.C(i);
import * as n from "./807489.6b5279adf3.js";
e.C(n);
import * as p from "./337882.568bafdf14.js";
e.C(p);
import * as c from "./955979.b2a7e19963.js";
e.C(c);
import * as m from "./646436.5963e38f02.js";
e.C(m);
import * as f from "./7078.0a9a41e515.js";
e.C(f);
import * as l from "./200429.a549930e29.js";
e.C(l);
import * as d from "./698524.48945354c5.js";
e.C(d);
import * as b from "./956483.962c0de04b.js";
e.C(b);
import * as j from "./87162.e4a69efaac.js";
e.C(j);
import * as C from "./396705.51be923e43.js";
e.C(C);
import * as _ from "./155568.1f7b7a00a5.js";
e.C(_);
import * as x from "./731863.5a49a2d190.js";
e.C(x);
import * as u from "./767086.61b8f8fca3.js";
e.C(u);
import * as g from "./226913.cf105b979e.js";
e.C(g);
import * as h from "./227786.748857de8d.js";
e.C(h);
import * as k from "./900749.01bfc78246.js";
e.C(k);
var y = e(e.s = "bJhA"),
    A = y.a,
    w = y.b;
export {
    A as
    default, w as meta
};