export const __rspack_esm_ids = [340918];
export const __webpack_modules__ = {
    jD81: (function(e, a, s) {
        s.d(a, {
            a: () => m,
            b: () => c,
            c: () => l
        });
        var r = s("rEML"),
            t = s("LKEn"),
            o = s("i4z1"),
            n = s("gsBt"),
            i = s("EkCf");
        let c = (0, r.kb)(i.a);
        async function m(e) {
            let {
                params: a,
                request: s,
                serverLoader: i
            } = e, c = await i();
            return null == c && null != (0, r.L)("/:profileId/products", `/${a["*"]??""}`) && "owner" === (0, o.c)(new URL(s.url).searchParams) && Promise.all([n.a.prefetch(), (0, t.f)()]).catch(() => void 0), c
        }
        m.hydrate = !0;
        let l = e => {
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
            c = s("v4LA"),
            m = s("hZax"),
            l = s("AXDI");
        let f = "1258713729",
            p = (0, c.a)(o.z),
            d = (0, c.a)(async () => (await Promise.all([s.e(418851), s.e(109308), s.e(399565), s.e(257798), s.e(447351), s.e(617936), s.e(807489), s.e(337882), s.e(955979), s.e(646436), s.e(7078), s.e(200429), s.e(698524), s.e(956483), s.e(87162), s.e(396705), s.e(155568), s.e(731863), s.e(767086), s.e(226913), s.e(967847), s.e(330351), s.e(212322), s.e(359399)]).then(s.bind(s, "MyHG"))).BusinessAdsCreditPage);

        function b(e) {
            let a, s = (0, t.c)(4),
                {
                    link: o
                } = e,
                n = (0, m.f)(f);
            if ((0, m.g)(f)) {
                let e;
                return s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(l.b, {}), s[0] = e) : e = s[0], e
            }
            return s[1] !== n || s[2] !== o ? (a = n ? (0, r.jsx)(d, {
                link: o
            }) : (0, r.jsx)(p, {
                link: o
            }), s[1] = n, s[2] = o, s[3] = a) : a = s[3], a
        }
        s.d(a, {}, {
            a: function(e) {
                let a, s, o, c = (0, t.c)(7),
                    {
                        link: m
                    } = e,
                    {
                        search: f
                    } = (0, i.Z)();
                c[0] !== m.isAdsCreditCampaign || c[1] !== f ? (a = m.isAdsCreditCampaign && !new URLSearchParams(f).get("promo_campaign"), c[0] = m.isAdsCreditCampaign, c[1] = f, c[2] = a) : a = c[2];
                let d = a;
                return c[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, r.jsx)(l.b, {}), c[3] = s) : s = c[3], c[4] !== d || c[5] !== m ? (o = (0, r.jsx)(l.a, {
                    children: (0, r.jsx)(n.Suspense, {
                        fallback: s,
                        children: d ? (0, r.jsx)(b, {
                            link: m
                        }) : (0, r.jsx)(p, {
                            link: m
                        })
                    })
                }), c[4] = d, c[5] = m, c[6] = o) : o = c[6], o
            }
        })
    }),
    EkCf: (function(e, a, s) {
        var r = s("ABep"),
            t = s("QosV"),
            o = s("rEML"),
            n = s("HnGz"),
            i = s("hC2y"),
            c = s("AXDI"),
            m = s("NVla"),
            l = s("nlAI");
        s.d(a, {}, {
            a: function(e) {
                let a, s, f, p, d, b = (0, t.c)(14),
                    {
                        fallback: h
                    } = e,
                    {
                        pathname: j
                    } = (0, o.Z)();
                if (b[0] !== h || b[1] !== j) {
                    p = Symbol.for("react.early_return_sentinel");
                    e: {
                        let e = (0, n.g)(i.c, j);
                        if (null == e) {
                            let e;
                            b[6] !== j ? (e = (0, m.b)(j), b[6] = j, b[7] = e) : e = b[7];
                            let a = e;
                            if (null != a) {
                                let e;
                                b[8] !== a ? (e = (0, r.jsx)(l.a, {
                                    link: a
                                }), b[8] = a, b[9] = e) : e = b[9], p = e;
                                break e
                            }
                        }
                        a = c.a,
                        s = h,
                        f = null == e ? (0, r.jsx)(i.d, {}) : (0, o.P)(e)
                    }
                    b[0] = h, b[1] = j, b[2] = a, b[3] = s, b[4] = f, b[5] = p
                } else a = b[2], s = b[3], f = b[4], p = b[5];
                return p !== Symbol.for("react.early_return_sentinel") ? p : (b[10] !== a || b[11] !== s || b[12] !== f ? (d = (0, r.jsx)(a, {
                    fallback: s,
                    children: f
                }), b[10] = a, b[11] = s, b[12] = f, b[13] = d) : d = b[13], d)
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
} from "./633146.2ddddba2a5.js";
import * as a from "./418851.f34514cc3f.js";
e.C(a);
import * as s from "./109308.8b09661749.js";
e.C(s);
import * as r from "./399565.edefe43a76.js";
e.C(r);
import * as t from "./257798.6b4268ddac.js";
e.C(t);
import * as o from "./447351.34d04099ca.js";
e.C(o);
import * as n from "./617936.4a1557f13c.js";
e.C(n);
import * as i from "./807489.6b5279adf3.js";
e.C(i);
import * as c from "./337882.568bafdf14.js";
e.C(c);
import * as m from "./955979.b2a7e19963.js";
e.C(m);
import * as l from "./646436.5963e38f02.js";
e.C(l);
import * as f from "./7078.0a9a41e515.js";
e.C(f);
import * as p from "./200429.a549930e29.js";
e.C(p);
import * as d from "./698524.48945354c5.js";
e.C(d);
import * as b from "./956483.962c0de04b.js";
e.C(b);
import * as h from "./87162.e4a69efaac.js";
e.C(h);
import * as j from "./396705.51be923e43.js";
e.C(j);
import * as u from "./155568.1f7b7a00a5.js";
e.C(u);
import * as C from "./731863.5a49a2d190.js";
e.C(C);
import * as _ from "./767086.61b8f8fca3.js";
e.C(_);
import * as g from "./226913.cf105b979e.js";
e.C(g);
import * as x from "./227786.748857de8d.js";
e.C(x);
import * as k from "./340918.192d99606e.js";
e.C(k);
var w = e(e.s = "jD81"),
    P = w.a,
    y = w.b,
    A = w.c;
export {
    P as clientLoader, y as
    default, A as shouldRevalidate
};