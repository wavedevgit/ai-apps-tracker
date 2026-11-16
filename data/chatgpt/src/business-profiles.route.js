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
            n = s("gsBt"),
            i = s("EkCf");
        let m = (0, r.hb)(i.a);
        async function c(e) {
            let {
                params: a,
                request: s,
                serverLoader: i
            } = e, m = await i();
            return null == m && null != (0, r.J)("/:profileId/products", `/${a["*"]??""}`) && "owner" === (0, o.c)(new URL(s.url).searchParams) && Promise.all([n.a.prefetch(), (0, t.g)()]).catch(() => void 0), m
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
            i = s("rEML"),
            m = s("v4LA"),
            c = s("hZax"),
            f = s("AXDI");
        let l = "1258713729",
            p = (0, m.a)(o.y),
            d = (0, m.a)(async () => (await Promise.all([s.e(418851), s.e(109308), s.e(399565), s.e(257798), s.e(447351), s.e(617936), s.e(807489), s.e(337882), s.e(955979), s.e(646436), s.e(7078), s.e(200429), s.e(698524), s.e(956483), s.e(87162), s.e(396705), s.e(155568), s.e(731863), s.e(767086), s.e(76629), s.e(514085), s.e(226913), s.e(967847), s.e(330351), s.e(212322), s.e(261228)]).then(s.bind(s, "oWBw"))).BusinessAdsCreditPage);

        function h(e) {
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
                        children: d ? (0, r.jsx)(h, {
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
            n = s("HnGz"),
            i = s("hC2y"),
            m = s("AXDI"),
            c = s("NVla"),
            f = s("nlAI");
        s.d(a, {}, {
            a: function(e) {
                let a, s, l, p, d, h = (0, t.c)(14),
                    {
                        fallback: j
                    } = e,
                    {
                        pathname: b
                    } = (0, o.Y)();
                if (h[0] !== j || h[1] !== b) {
                    p = Symbol.for("react.early_return_sentinel");
                    e: {
                        let e = (0, n.g)(i.c, b);
                        if (null == e) {
                            let e;
                            h[6] !== b ? (e = (0, c.b)(b), h[6] = b, h[7] = e) : e = h[7];
                            let a = e;
                            if (null != a) {
                                let e;
                                h[8] !== a ? (e = (0, r.jsx)(f.a, {
                                    link: a
                                }), h[8] = a, h[9] = e) : e = h[9], p = e;
                                break e
                            }
                        }
                        a = m.a,
                        s = j,
                        l = null == e ? (0, r.jsx)(i.d, {}) : (0, o.O)(e)
                    }
                    h[0] = j, h[1] = b, h[2] = a, h[3] = s, h[4] = l, h[5] = p
                } else a = h[2], s = h[3], l = h[4], p = h[5];
                return p !== Symbol.for("react.early_return_sentinel") ? p : (h[10] !== a || h[11] !== s || h[12] !== l ? (d = (0, r.jsx)(a, {
                    fallback: s,
                    children: l
                }), h[10] = a, h[11] = s, h[12] = l, h[13] = d) : d = h[13], d)
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
} from "./633146.7affad7b5d.js";
import * as a from "./418851.a18db97c0f.js";
e.C(a);
import * as s from "./109308.c9b7701e19.js";
e.C(s);
import * as r from "./399565.e3bd47902e.js";
e.C(r);
import * as t from "./257798.7e03f1e3e2.js";
e.C(t);
import * as o from "./447351.96852eb6b8.js";
e.C(o);
import * as n from "./617936.b641c39dad.js";
e.C(n);
import * as i from "./807489.287ea00c8d.js";
e.C(i);
import * as m from "./337882.945f5227c2.js";
e.C(m);
import * as c from "./955979.2d3fb29684.js";
e.C(c);
import * as f from "./646436.6a9ea7ce2b.js";
e.C(f);
import * as l from "./7078.b92f527b06.js";
e.C(l);
import * as p from "./200429.6598292931.js";
e.C(p);
import * as d from "./698524.5402dc2ea3.js";
e.C(d);
import * as h from "./956483.595b7db9a7.js";
e.C(h);
import * as j from "./87162.d955fb8b13.js";
e.C(j);
import * as b from "./396705.47c12a5601.js";
e.C(b);
import * as u from "./155568.f88fad6c40.js";
e.C(u);
import * as C from "./731863.4d5b0f8b9b.js";
e.C(C);
import * as _ from "./767086.7d33efc736.js";
e.C(_);
import * as g from "./76629.9835d52bf1.js";
e.C(g);
import * as x from "./514085.4ce61adad7.js";
e.C(x);
import * as w from "./226913.dd4de34d8f.js";
e.C(w);
import * as k from "./902158.087f350eba.js";
e.C(k);
import * as y from "./340918.95e5f6c8b4.js";
e.C(y);
var A = e(e.s = "jD81"),
    P = A.a,
    v = A.b,
    L = A.c;
export {
    P as clientLoader, v as
    default, L as shouldRevalidate
};