export const __rspack_esm_ids = [340918];
export const __webpack_modules__ = {
    jD81: (function(e, a, s) {
        s.d(a, {
            a: () => c,
            b: () => m,
            c: () => f
        });
        var r = s("rEML"),
            t = s("LKEn"),
            o = s("i4z1"),
            i = s("gsBt"),
            n = s("EkCf");
        let m = (0, r.ib)(n.a);
        async function c(e) {
            let {
                params: a,
                request: s,
                serverLoader: n
            } = e, m = await n();
            return null == m && null != (0, r.J)("/:profileId/products", `/${a["*"]??""}`) && "owner" === (0, o.c)(new URL(s.url).searchParams) && Promise.all([i.a.prefetch(), (0, t.g)()]).catch(() => void 0), m
        }
        c.hydrate = !0;
        let f = e => {
            let {
                currentUrl: a,
                nextUrl: s,
                formMethod: r,
                defaultShouldRevalidate: t
            } = e;
            return null != r ? t : !("owner" === (0, o.c)(s.searchParams) && (a.search === s.search && null != (0, o.e)(a.pathname, s.pathname) || (0, o.h)(a, s)) || function(e, a) {
                if (e.pathname !== a.pathname || !/\/business-hub\/[^/]+\/insights\/?$/.test(e.pathname) || "agent" === e.searchParams.get("insight") == ("agent" === a.searchParams.get("insight"))) return !1;
                let s = new URLSearchParams(e.searchParams),
                    r = new URLSearchParams(a.searchParams);
                return s.delete("insight"), r.delete("insight"), s.toString() === r.toString()
            }(a, s)) && t
        }
    }),
    nDjx: (function(e, a, s) {
        e.exports = s.p + "assets/appshot-logo.f0152cb4dd.png"
    }),
    hIAo: (function(e, a, s) {
        e.exports = s.p + "assets/codex-app-ga-logo.dfddfb85d7.png"
    }),
    OCvz: (function(e, a, s) {
        e.exports = s.p + "assets/dictation-start.f6efcb404f.wav"
    }),
    DJ2e: (function(e, a, s) {
        e.exports = s.p + "assets/dictation-stop.e3bc7ebc5e.wav"
    }),
    nlAI: (function(e, a, s) {
        var r = s("ABep"),
            t = s("QosV"),
            o = s("XyTt"),
            i = s("zd8w"),
            n = s("rEML"),
            m = s("v4LA"),
            c = s("hZax"),
            f = s("AXDI");
        let l = "1258713729",
            p = (0, m.a)(o.y),
            d = (0, m.a)(async () => (await Promise.all([s.e(418851), s.e(109308), s.e(399565), s.e(257798), s.e(447351), s.e(617936), s.e(807489), s.e(337882), s.e(955979), s.e(646436), s.e(7078), s.e(200429), s.e(698524), s.e(956483), s.e(87162), s.e(396705), s.e(155568), s.e(731863), s.e(767086), s.e(76629), s.e(514085), s.e(204542), s.e(226913), s.e(967847), s.e(330351), s.e(212322), s.e(736383)]).then(s.bind(s, "MyHG"))).BusinessAdsCreditPage);

        function j(e) {
            let a, s = (0, t.c)(4),
                {
                    link: o
                } = e,
                i = (0, c.f)(l);
            if ((0, c.g)(l)) {
                let e;
                return s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(f.b, {}), s[0] = e) : e = s[0], e
            }
            return s[1] !== i || s[2] !== o ? (a = i ? (0, r.jsx)(d, {
                link: o
            }) : (0, r.jsx)(p, {
                link: o
            }), s[1] = i, s[2] = o, s[3] = a) : a = s[3], a
        }
        s.d(a, {}, {
            a: function(e) {
                let a, s, o, m = (0, t.c)(7),
                    {
                        link: c
                    } = e,
                    {
                        search: l
                    } = (0, n.Y)();
                m[0] !== c.isAdsCreditCampaign || m[1] !== l ? (a = c.isAdsCreditCampaign && !new URLSearchParams(l).get("promo_campaign"), m[0] = c.isAdsCreditCampaign, m[1] = l, m[2] = a) : a = m[2];
                let d = a;
                return m[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, r.jsx)(f.b, {}), m[3] = s) : s = m[3], m[4] !== d || m[5] !== c ? (o = (0, r.jsx)(f.a, {
                    children: (0, r.jsx)(i.Suspense, {
                        fallback: s,
                        children: d ? (0, r.jsx)(j, {
                            link: c
                        }) : (0, r.jsx)(p, {
                            link: c
                        })
                    })
                }), m[4] = d, m[5] = c, m[6] = o) : o = m[6], o
            }
        })
    }),
    EkCf: (function(e, a, s) {
        var r = s("ABep"),
            t = s("QosV"),
            o = s("rEML"),
            i = s("HnGz"),
            n = s("hC2y"),
            m = s("AXDI"),
            c = s("NVla"),
            f = s("nlAI");
        s.d(a, {}, {
            a: function(e) {
                let a, s, l, p, d, j = (0, t.c)(14),
                    {
                        fallback: b
                    } = e,
                    {
                        pathname: h
                    } = (0, o.Y)();
                if (j[0] !== b || j[1] !== h) {
                    p = Symbol.for("react.early_return_sentinel");
                    e: {
                        let e = (0, i.g)(n.c, h);
                        if (null == e) {
                            let e;
                            j[6] !== h ? (e = (0, c.b)(h), j[6] = h, j[7] = e) : e = j[7];
                            let a = e;
                            if (null != a) {
                                let e;
                                j[8] !== a ? (e = (0, r.jsx)(f.a, {
                                    link: a
                                }), j[8] = a, j[9] = e) : e = j[9], p = e;
                                break e
                            }
                        }
                        a = m.a,
                        s = b,
                        l = null == e ? (0, r.jsx)(n.d, {}) : (0, o.O)(e)
                    }
                    j[0] = b, j[1] = h, j[2] = a, j[3] = s, j[4] = l, j[5] = p
                } else a = j[2], s = j[3], l = j[4], p = j[5];
                return p !== Symbol.for("react.early_return_sentinel") ? p : (j[10] !== a || j[11] !== s || j[12] !== l ? (d = (0, r.jsx)(a, {
                    fallback: s,
                    children: l
                }), j[10] = a, j[11] = s, j[12] = l, j[13] = d) : d = j[13], d)
            }
        })
    }),
    EBQV: (function(a) {
        a.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.0181f6662c.js";
import * as a from "./418851.09486f68f7.js";
e.C(a);
import * as s from "./109308.cb66ec8473.js";
e.C(s);
import * as r from "./399565.e3bd47902e.js";
e.C(r);
import * as t from "./257798.7e03f1e3e2.js";
e.C(t);
import * as o from "./447351.74c4243102.js";
e.C(o);
import * as i from "./617936.b641c39dad.js";
e.C(i);
import * as n from "./807489.3f6f62fc4e.js";
e.C(n);
import * as m from "./337882.ac66e3b9e7.js";
e.C(m);
import * as c from "./955979.d6920ef47f.js";
e.C(c);
import * as f from "./646436.029c782154.js";
e.C(f);
import * as l from "./7078.197e9e74da.js";
e.C(l);
import * as p from "./200429.336016a921.js";
e.C(p);
import * as d from "./698524.1c89d5e682.js";
e.C(d);
import * as j from "./956483.aae39072ae.js";
e.C(j);
import * as b from "./87162.70963eaac7.js";
e.C(b);
import * as h from "./396705.63a7a7138f.js";
e.C(h);
import * as C from "./155568.80ff0b0790.js";
e.C(C);
import * as u from "./731863.980fcc67e8.js";
e.C(u);
import * as _ from "./767086.029c6e6cb7.js";
e.C(_);
import * as g from "./76629.f2ec2ff70b.js";
e.C(g);
import * as x from "./514085.a7493d29eb.js";
e.C(x);
import * as k from "./204542.d8a33857f0.js";
e.C(k);
import * as w from "./226913.dd4de34d8f.js";
e.C(w);
import * as y from "./413109.b4bfe81a07.js";
e.C(y);
import * as A from "./340918.ee2703a079.js";
e.C(A);
var P = e(e.s = "jD81"),
    v = P.a,
    L = P.b,
    S = P.c;
export {
    v as clientLoader, L as
    default, S as shouldRevalidate
};