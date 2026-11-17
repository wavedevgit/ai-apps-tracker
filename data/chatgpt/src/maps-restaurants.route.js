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
        let i = (0, s.ib)(a.a),
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
            m = r("v4LA"),
            p = r("hZax"),
            f = r("AXDI");
        let c = "1258713729",
            l = (0, m.a)(a.y),
            d = (0, m.a)(async () => (await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(226913), r.e(967847), r.e(330351), r.e(212322), r.e(736383)]).then(r.bind(r, "MyHG"))).BusinessAdsCreditPage);

        function j(e) {
            let t, r = (0, o.c)(4),
                {
                    link: a
                } = e,
                i = (0, p.f)(c);
            if ((0, p.g)(c)) {
                let e;
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.jsx)(f.b, {}), r[0] = e) : e = r[0], e
            }
            return r[1] !== i || r[2] !== a ? (t = i ? (0, s.jsx)(d, {
                link: a
            }) : (0, s.jsx)(l, {
                link: a
            }), r[1] = i, r[2] = a, r[3] = t) : t = r[3], t
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, a, m = (0, o.c)(7),
                    {
                        link: p
                    } = e,
                    {
                        search: c
                    } = (0, n.Y)();
                m[0] !== p.isAdsCreditCampaign || m[1] !== c ? (t = p.isAdsCreditCampaign && !new URLSearchParams(c).get("promo_campaign"), m[0] = p.isAdsCreditCampaign, m[1] = c, m[2] = t) : t = m[2];
                let d = t;
                return m[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, s.jsx)(f.b, {}), m[3] = r) : r = m[3], m[4] !== d || m[5] !== p ? (a = (0, s.jsx)(f.a, {
                    children: (0, s.jsx)(i.Suspense, {
                        fallback: r,
                        children: d ? (0, s.jsx)(j, {
                            link: p
                        }) : (0, s.jsx)(l, {
                            link: p
                        })
                    })
                }), m[4] = d, m[5] = p, m[6] = a) : a = m[6], a
            }
        })
    }),
    EkCf: (function(e, t, r) {
        var s = r("ABep"),
            o = r("QosV"),
            a = r("rEML"),
            i = r("HnGz"),
            n = r("hC2y"),
            m = r("AXDI"),
            p = r("NVla"),
            f = r("nlAI");
        r.d(t, {}, {
            a: function(e) {
                let t, r, c, l, d, j = (0, o.c)(14),
                    {
                        fallback: C
                    } = e,
                    {
                        pathname: b
                    } = (0, a.Y)();
                if (j[0] !== C || j[1] !== b) {
                    l = Symbol.for("react.early_return_sentinel");
                    e: {
                        let e = (0, i.g)(n.c, b);
                        if (null == e) {
                            let e;
                            j[6] !== b ? (e = (0, p.b)(b), j[6] = b, j[7] = e) : e = j[7];
                            let t = e;
                            if (null != t) {
                                let e;
                                j[8] !== t ? (e = (0, s.jsx)(f.a, {
                                    link: t
                                }), j[8] = t, j[9] = e) : e = j[9], l = e;
                                break e
                            }
                        }
                        t = m.a,
                        r = C,
                        c = null == e ? (0, s.jsx)(n.d, {}) : (0, a.O)(e)
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
} from "./633146.4955a63526.js";
import * as t from "./418851.d8892f46a6.js";
e.C(t);
import * as r from "./109308.cb66ec8473.js";
e.C(r);
import * as s from "./399565.e3bd47902e.js";
e.C(s);
import * as o from "./257798.7e03f1e3e2.js";
e.C(o);
import * as a from "./447351.74c4243102.js";
e.C(a);
import * as i from "./617936.b641c39dad.js";
e.C(i);
import * as n from "./807489.3f6f62fc4e.js";
e.C(n);
import * as m from "./337882.544cd8454d.js";
e.C(m);
import * as p from "./955979.f6e77aea7d.js";
e.C(p);
import * as f from "./646436.029c782154.js";
e.C(f);
import * as c from "./7078.473c0dc500.js";
e.C(c);
import * as l from "./200429.3e7ed388fe.js";
e.C(l);
import * as d from "./698524.1c89d5e682.js";
e.C(d);
import * as j from "./956483.aae39072ae.js";
e.C(j);
import * as C from "./87162.70963eaac7.js";
e.C(C);
import * as b from "./396705.0c6f33f2fb.js";
e.C(b);
import * as _ from "./155568.80ff0b0790.js";
e.C(_);
import * as x from "./731863.c47054621e.js";
e.C(x);
import * as u from "./767086.029c6e6cb7.js";
e.C(u);
import * as g from "./76629.f2ec2ff70b.js";
e.C(g);
import * as h from "./514085.a7493d29eb.js";
e.C(h);
import * as y from "./204542.d8a33857f0.js";
e.C(y);
import * as k from "./226913.dd4de34d8f.js";
e.C(k);
import * as A from "./413109.b4bfe81a07.js";
e.C(A);
import * as w from "./900749.27127c39e6.js";
e.C(w);
var v = e(e.s = "bJhA"),
    E = v.a,
    S = v.b;
export {
    E as
    default, S as meta
};