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
        let i = (0, s.ib)(o.a),
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
            f = r("v4LA"),
            m = r("hZax"),
            p = r("AXDI");
        let c = "1258713729",
            l = (0, f.a)(o.z),
            d = (0, f.a)(async () => (await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(226913), r.e(967847), r.e(330351), r.e(212322), r.e(736383)]).then(r.bind(r, "MyHG"))).BusinessAdsCreditPage);

        function j(e) {
            let t, r = (0, a.c)(4),
                {
                    link: o
                } = e,
                i = (0, m.f)(c);
            if ((0, m.g)(c)) {
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
                let t, r, o, f = (0, a.c)(7),
                    {
                        link: m
                    } = e,
                    {
                        search: c
                    } = (0, n.Y)();
                f[0] !== m.isAdsCreditCampaign || f[1] !== c ? (t = m.isAdsCreditCampaign && !new URLSearchParams(c).get("promo_campaign"), f[0] = m.isAdsCreditCampaign, f[1] = c, f[2] = t) : t = f[2];
                let d = t;
                return f[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, s.jsx)(p.b, {}), f[3] = r) : r = f[3], f[4] !== d || f[5] !== m ? (o = (0, s.jsx)(p.a, {
                    children: (0, s.jsx)(i.Suspense, {
                        fallback: r,
                        children: d ? (0, s.jsx)(j, {
                            link: m
                        }) : (0, s.jsx)(l, {
                            link: m
                        })
                    })
                }), f[4] = d, f[5] = m, f[6] = o) : o = f[6], o
            }
        })
    }),
    EkCf: (function(e, t, r) {
        var s = r("ABep"),
            a = r("QosV"),
            o = r("rEML"),
            i = r("HnGz"),
            n = r("hC2y"),
            f = r("AXDI"),
            m = r("NVla"),
            p = r("nlAI");
        r.d(t, {}, {
            a: function(e) {
                let t, r, c, l, d, j = (0, a.c)(14),
                    {
                        fallback: C
                    } = e,
                    {
                        pathname: b
                    } = (0, o.Y)();
                if (j[0] !== C || j[1] !== b) {
                    l = Symbol.for("react.early_return_sentinel");
                    e: {
                        let e = (0, i.g)(n.c, b);
                        if (null == e) {
                            let e;
                            j[6] !== b ? (e = (0, m.b)(b), j[6] = b, j[7] = e) : e = j[7];
                            let t = e;
                            if (null != t) {
                                let e;
                                j[8] !== t ? (e = (0, s.jsx)(p.a, {
                                    link: t
                                }), j[8] = t, j[9] = e) : e = j[9], l = e;
                                break e
                            }
                        }
                        t = f.a,
                        r = C,
                        c = null == e ? (0, s.jsx)(n.d, {}) : (0, o.O)(e)
                    }
                    j[0] = C, j[1] = b, j[2] = t, j[3] = r, j[4] = c, j[5] = l
                } else t = j[2], r = j[3], c = j[4], l = j[5];
                return l !== Symbol.for("react.early_return_sentinel") ? l : (j[10] !== t || j[11] !== r || j[12] !== c ? (d = (0, s.jsx)(t, {
                    fallback: r,
                    children: c
                }), j[10] = t, j[11] = r, j[12] = c, j[13] = d) : d = j[13], d)
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
} from "./633146.be60f96fcf.js";
import * as t from "./418851.d43ef6e51c.js";
e.C(t);
import * as r from "./109308.2094c16514.js";
e.C(r);
import * as s from "./399565.78e1c0aa0d.js";
e.C(s);
import * as a from "./257798.7e03f1e3e2.js";
e.C(a);
import * as o from "./447351.b188109392.js";
e.C(o);
import * as i from "./617936.fb76eb2727.js";
e.C(i);
import * as n from "./807489.9c1a8ccf71.js";
e.C(n);
import * as f from "./337882.5c43a2c90b.js";
e.C(f);
import * as m from "./955979.9ae2962bd4.js";
e.C(m);
import * as p from "./646436.b525bfd8f0.js";
e.C(p);
import * as c from "./7078.a82238bfec.js";
e.C(c);
import * as l from "./200429.3bcaa139a4.js";
e.C(l);
import * as d from "./698524.3de98ac6af.js";
e.C(d);
import * as j from "./956483.227ec74d56.js";
e.C(j);
import * as C from "./87162.36edabe123.js";
e.C(C);
import * as b from "./396705.12275a5eb6.js";
e.C(b);
import * as _ from "./155568.b3f888f917.js";
e.C(_);
import * as x from "./731863.367082aec0.js";
e.C(x);
import * as u from "./767086.1a336b6bc5.js";
e.C(u);
import * as g from "./76629.93a69b821a.js";
e.C(g);
import * as h from "./514085.fe0c9f50e5.js";
e.C(h);
import * as k from "./204542.f3712a1345.js";
e.C(k);
import * as y from "./226913.dd4de34d8f.js";
e.C(y);
import * as A from "./413109.b4bfe81a07.js";
e.C(A);
import * as w from "./900749.bf2dff01f7.js";
e.C(w);
var v = e(e.s = "bJhA"),
    E = v.a,
    S = v.b;
export {
    E as
    default, S as meta
};