export const __rspack_esm_ids = [340918];
export const __webpack_modules__ = {
    fd8z: (function(e, a, s) {
        s.d(a, {
            a: () => c,
            b: () => m,
            c: () => l
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
            return null == m && null != (0, r.J)("/:profileId/products", `/${a["*"]??""}`) && "owner" === (0, o.c)(new URL(s.url).searchParams) && Promise.all([n.a.prefetch(), (0, t.c)()]).catch(() => void 0), m
        }
        c.hydrate = !0;
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
            i = s("jqIZ"),
            m = s("v4LA"),
            c = s("hZax"),
            l = s("AXDI");
        let f = "1258713729",
            p = (0, m.a)(o.x),
            d = (0, m.a)(async () => (await Promise.all([s.e(418851), s.e(109308), s.e(399565), s.e(257798), s.e(447351), s.e(617936), s.e(807489), s.e(337882), s.e(955979), s.e(646436), s.e(7078), s.e(200429), s.e(698524), s.e(956483), s.e(87162), s.e(396705), s.e(155568), s.e(731863), s.e(767086), s.e(76629), s.e(514085), s.e(226913), s.e(967847), s.e(330351), s.e(212322), s.e(671395)]).then(s.bind(s, "H3fR"))).BusinessAdsCreditPage);

        function b(e) {
            let a, s = (0, t.c)(4),
                {
                    link: o
                } = e,
                n = (0, c.f)(f);
            if ((0, c.g)(f)) {
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
                let a, s, o, m = (0, t.c)(7),
                    {
                        link: c
                    } = e,
                    {
                        search: f
                    } = (0, i.Y)();
                m[0] !== c.isAdsCreditCampaign || m[1] !== f ? (a = c.isAdsCreditCampaign && !new URLSearchParams(f).get("promo_campaign"), m[0] = c.isAdsCreditCampaign, m[1] = f, m[2] = a) : a = m[2];
                let d = a;
                return m[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, r.jsx)(l.b, {}), m[3] = s) : s = m[3], m[4] !== d || m[5] !== c ? (o = (0, r.jsx)(l.a, {
                    children: (0, r.jsx)(n.Suspense, {
                        fallback: s,
                        children: d ? (0, r.jsx)(b, {
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
            l = s("nlAI");
        s.d(a, {}, {
            a: function(e) {
                let a, s, f, p, d, b = (0, t.c)(14),
                    {
                        fallback: j
                    } = e,
                    {
                        pathname: h
                    } = (0, o.Y)();
                if (b[0] !== j || b[1] !== h) {
                    p = Symbol.for("react.early_return_sentinel");
                    e: {
                        let e = (0, n.g)(i.c, h);
                        if (null == e) {
                            let e;
                            b[6] !== h ? (e = (0, c.b)(h), b[6] = h, b[7] = e) : e = b[7];
                            let a = e;
                            if (null != a) {
                                let e;
                                b[8] !== a ? (e = (0, r.jsx)(l.a, {
                                    link: a
                                }), b[8] = a, b[9] = e) : e = b[9], p = e;
                                break e
                            }
                        }
                        a = m.a,
                        s = j,
                        f = null == e ? (0, r.jsx)(i.d, {}) : (0, o.O)(e)
                    }
                    b[0] = j, b[1] = h, b[2] = a, b[3] = s, b[4] = f, b[5] = p
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
} from "./633146.d376de6326.js";
import * as a from "./418851.b915ffe930.js";
e.C(a);
import * as s from "./109308.e66696cd0d.js";
e.C(s);
import * as r from "./399565.6af208675d.js";
e.C(r);
import * as t from "./257798.b51742efd5.js";
e.C(t);
import * as o from "./447351.dafe7b7b5e.js";
e.C(o);
import * as n from "./617936.e33610e0b9.js";
e.C(n);
import * as i from "./807489.01dbb0865d.js";
e.C(i);
import * as m from "./337882.7119120a0c.js";
e.C(m);
import * as c from "./955979.cdc247a476.js";
e.C(c);
import * as l from "./646436.2bf4f5cfd6.js";
e.C(l);
import * as f from "./7078.89396f9757.js";
e.C(f);
import * as p from "./200429.ddc1bbef02.js";
e.C(p);
import * as d from "./698524.21708788d0.js";
e.C(d);
import * as b from "./956483.c322d2995f.js";
e.C(b);
import * as j from "./87162.b460b44fcb.js";
e.C(j);
import * as h from "./396705.f9a5e3185a.js";
e.C(h);
import * as u from "./155568.be3429758e.js";
e.C(u);
import * as C from "./731863.f2322456e0.js";
e.C(C);
import * as _ from "./767086.ab7a1efc0d.js";
e.C(_);
import * as x from "./76629.3c6cad96ca.js";
e.C(x);
import * as g from "./514085.2befcfe573.js";
e.C(g);
import * as k from "./226913.27c93050ff.js";
e.C(k);
import * as w from "./902158.5a4b6c2c66.js";
e.C(w);
import * as A from "./340918.80e80ac13c.js";
e.C(A);
var P = e(e.s = "fd8z"),
    v = P.a,
    y = P.b,
    S = P.c;
export {
    v as clientLoader, y as
    default, S as shouldRevalidate
};