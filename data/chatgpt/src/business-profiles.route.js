export const __rspack_esm_ids = [340918];
export const __webpack_modules__ = {
    jD81: (function(e, a, s) {
        s.d(a, {
            a: () => c,
            b: () => m,
            c: () => f
        });
        var r = s("jqIZ"),
            t = s("LKEn"),
            o = s("i4z1"),
            n = s("gsBt"),
            i = s("EkCf");
        let m = (0, r.hb)(i.a);
        async function c(e) {
            let {
                params: a,
                request: s,
                serverLoader: i
            } = e, m = await i();
            return null == m && null != (0, r.J)("/:profileId/products", `/${a["*"]??""}`) && "owner" === (0, o.c)(new URL(s.url).searchParams) && Promise.all([n.a.prefetch(), (0, t.f)()]).catch(() => void 0), m
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
            n = s("zd8w"),
            i = s("jqIZ"),
            m = s("v4LA"),
            c = s("hZax"),
            f = s("AXDI");
        let l = "1258713729",
            p = (0, m.a)(o.y),
            d = (0, m.a)(async () => (await Promise.all([s.e(418851), s.e(109308), s.e(399565), s.e(257798), s.e(447351), s.e(617936), s.e(807489), s.e(337882), s.e(955979), s.e(646436), s.e(7078), s.e(200429), s.e(698524), s.e(956483), s.e(87162), s.e(396705), s.e(155568), s.e(731863), s.e(767086), s.e(76629), s.e(514085), s.e(226913), s.e(967847), s.e(591350), s.e(330351), s.e(409022)]).then(s.bind(s, "H3fR"))).BusinessAdsCreditPage);

        function j(e) {
            let a, s = (0, t.c)(4),
                {
                    link: o
                } = e,
                n = (0, c.f)(l);
            if ((0, c.g)(l)) {
                let e;
                return s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(f.b, {}), s[0] = e) : e = s[0], e
            }
            return s[1] !== n || s[2] !== o ? (a = n ? (0, r.jsx)(d, {
                link: o
            }) : (0, r.jsx)(p, {
                link: o
            }), s[1] = n, s[2] = o, s[3] = a) : a = s[3], a
        }
        s.d(a, {}, {
            a: function(e) {
                let a, s, o, m = (0, t.c)(7),
                    {
                        link: c
                    } = e,
                    {
                        search: l
                    } = (0, i.Y)();
                m[0] !== c.isAdsCreditCampaign || m[1] !== l ? (a = c.isAdsCreditCampaign && !new URLSearchParams(l).get("promo_campaign"), m[0] = c.isAdsCreditCampaign, m[1] = l, m[2] = a) : a = m[2];
                let d = a;
                return m[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, r.jsx)(f.b, {}), m[3] = s) : s = m[3], m[4] !== d || m[5] !== c ? (o = (0, r.jsx)(f.a, {
                    children: (0, r.jsx)(n.Suspense, {
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
            o = s("jqIZ"),
            n = s("HnGz"),
            i = s("hC2y"),
            m = s("AXDI"),
            c = s("NVla"),
            f = s("nlAI");
        s.d(a, {}, {
            a: function(e) {
                let a, s, l, p, d, j = (0, t.c)(14),
                    {
                        fallback: h
                    } = e,
                    {
                        pathname: b
                    } = (0, o.Y)();
                if (j[0] !== h || j[1] !== b) {
                    p = Symbol.for("react.early_return_sentinel");
                    e: {
                        let e = (0, n.g)(i.c, b);
                        if (null == e) {
                            let e;
                            j[6] !== b ? (e = (0, c.b)(b), j[6] = b, j[7] = e) : e = j[7];
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
                        s = h,
                        l = null == e ? (0, r.jsx)(i.d, {}) : (0, o.O)(e)
                    }
                    j[0] = h, j[1] = b, j[2] = a, j[3] = s, j[4] = l, j[5] = p
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
} from "./633146.5096fa3fd9.js";
import * as a from "./418851.c7ca1818d5.js";
e.C(a);
import * as s from "./109308.e66696cd0d.js";
e.C(s);
import * as r from "./399565.6af208675d.js";
e.C(r);
import * as t from "./257798.13b56b362a.js";
e.C(t);
import * as o from "./447351.d558a44437.js";
e.C(o);
import * as n from "./617936.4707466a2e.js";
e.C(n);
import * as i from "./807489.02c4828605.js";
e.C(i);
import * as m from "./337882.8740501d0a.js";
e.C(m);
import * as c from "./955979.a7c648ac65.js";
e.C(c);
import * as f from "./646436.67f97058a6.js";
e.C(f);
import * as l from "./7078.1e69ffb16b.js";
e.C(l);
import * as p from "./200429.bb053dd10b.js";
e.C(p);
import * as d from "./698524.21cc9159ce.js";
e.C(d);
import * as j from "./956483.d8c24cb93c.js";
e.C(j);
import * as h from "./87162.061018a33e.js";
e.C(h);
import * as b from "./396705.001e7c704c.js";
e.C(b);
import * as u from "./155568.3264e8a296.js";
e.C(u);
import * as C from "./731863.63f4b0e1e0.js";
e.C(C);
import * as _ from "./767086.348bdfe349.js";
e.C(_);
import * as g from "./76629.9b04d58081.js";
e.C(g);
import * as x from "./514085.7e2196bde7.js";
e.C(x);
import * as k from "./226913.27c93050ff.js";
e.C(k);
import * as w from "./902158.5a4b6c2c66.js";
e.C(w);
import * as y from "./340918.5b9d41e9b8.js";
e.C(y);
var A = e(e.s = "jD81"),
    P = A.a,
    v = A.b,
    S = A.c;
export {
    P as clientLoader, v as
    default, S as shouldRevalidate
};