export const __rspack_esm_ids = [340918];
export const __webpack_modules__ = {
    OUh0: (function(a, b, c) {
        c.d(b, {
            a: () => j,
            b: () => i,
            c: () => k
        });
        var d = c("rEML"),
            e = c("LKEn"),
            f = c("i4z1"),
            g = c("gsBt"),
            h = c("EkCf");
        let i = (0, d.kb)(h.a);
        async function j(a) {
            let {
                params: b,
                request: c,
                serverLoader: h
            } = a, i = await h();
            return null == i && null != (0, d.L)("/:profileId/products", `/${b["*"]??""}`) && "owner" === (0, f.c)(new URL(c.url).searchParams) && Promise.all([g.a.prefetch(), (0, e.f)()]).catch(() => void 0), i
        }
        j.hydrate = !0;
        let k = a => {
            let {
                currentUrl: b,
                nextUrl: c,
                formMethod: d,
                defaultShouldRevalidate: e
            } = a;
            return null != d ? e : !("owner" === (0, f.c)(c.searchParams) && (b.search === c.search && null != (0, f.e)(b.pathname, c.pathname) || (0, f.h)(b, c)) || function(a, b) {
                if (a.pathname !== b.pathname || !/\/business-hub\/[^/]+\/insights\/?$/.test(a.pathname) || "agent" === a.searchParams.get("insight") == ("agent" === b.searchParams.get("insight"))) return !1;
                let c = new URLSearchParams(a.searchParams),
                    d = new URLSearchParams(b.searchParams);
                return c.delete("insight"), d.delete("insight"), c.toString() === d.toString()
            }(b, c)) && e
        }
    }),
    nDjx: (function(a, b, c) {
        a.exports = c.p + "assets/appshot-logo.f0152cb4dd.png"
    }),
    hIAo: (function(a, b, c) {
        a.exports = c.p + "assets/codex-app-ga-logo.dfddfb85d7.png"
    }),
    OCvz: (function(a, b, c) {
        a.exports = c.p + "assets/dictation-start.f6efcb404f.wav"
    }),
    DJ2e: (function(a, b, c) {
        a.exports = c.p + "assets/dictation-stop.e3bc7ebc5e.wav"
    }),
    nlAI: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("XyTt"),
            g = c("zd8w"),
            h = c("rEML"),
            i = c("v4LA"),
            j = c("hZax"),
            k = c("AXDI");
        let l = "1258713729",
            m = (0, i.a)(f.z),
            n = (0, i.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(967847), c.e(586734), c.e(330351), c.e(712629)]).then(() => c("MyHG"))).BusinessAdsCreditPage);

        function o(a) {
            let b, c = (0, e.c)(4),
                {
                    link: f
                } = a,
                g = (0, j.f)(l);
            if ((0, j.g)(l)) {
                let a;
                return c[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(k.b, {}), c[0] = a) : a = c[0], a
            }
            return c[1] !== g || c[2] !== f ? (b = g ? (0, d.jsx)(n, {
                link: f
            }) : (0, d.jsx)(m, {
                link: f
            }), c[1] = g, c[2] = f, c[3] = b) : b = c[3], b
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, f, i = (0, e.c)(7),
                    {
                        link: j
                    } = a,
                    {
                        search: l
                    } = (0, h.Z)();
                i[0] !== j.isAdsCreditCampaign || i[1] !== l ? (b = j.isAdsCreditCampaign && !new URLSearchParams(l).get("promo_campaign"), i[0] = j.isAdsCreditCampaign, i[1] = l, i[2] = b) : b = i[2];
                let n = b;
                return i[3] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(k.b, {}), i[3] = c) : c = i[3], i[4] !== n || i[5] !== j ? (f = (0, d.jsx)(k.a, {
                    children: (0, d.jsx)(g.Suspense, {
                        fallback: c,
                        children: n ? (0, d.jsx)(o, {
                            link: j
                        }) : (0, d.jsx)(m, {
                            link: j
                        })
                    })
                }), i[4] = n, i[5] = j, i[6] = f) : f = i[6], f
            }
        })
    }),
    EkCf: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("rEML"),
            g = c("HnGz"),
            h = c("hC2y"),
            i = c("AXDI"),
            j = c("NVla"),
            k = c("nlAI");
        c.d(b, {}, {
            a: function(a) {
                let b, c, l, m, n, o = (0, e.c)(14),
                    {
                        fallback: p
                    } = a,
                    {
                        pathname: q
                    } = (0, f.Z)();
                if (o[0] !== p || o[1] !== q) {
                    m = Symbol.for("react.early_return_sentinel");
                    a: {
                        let a = (0, g.g)(h.c, q);
                        if (null == a) {
                            let a;
                            o[6] !== q ? (a = (0, j.b)(q), o[6] = q, o[7] = a) : a = o[7];
                            let b = a;
                            if (null != b) {
                                let a;
                                o[8] !== b ? (a = (0, d.jsx)(k.a, {
                                    link: b
                                }), o[8] = b, o[9] = a) : a = o[9], m = a;
                                break a
                            }
                        }
                        b = i.a,
                        c = p,
                        l = null == a ? (0, d.jsx)(h.d, {}) : (0, f.P)(a)
                    }
                    o[0] = p, o[1] = q, o[2] = b, o[3] = c, o[4] = l, o[5] = m
                } else b = o[2], c = o[3], l = o[4], m = o[5];
                return m !== Symbol.for("react.early_return_sentinel") ? m : (o[10] !== b || o[11] !== c || o[12] !== l ? (n = (0, d.jsx)(b, {
                    fallback: c,
                    children: l
                }), o[10] = b, o[11] = c, o[12] = l, o[13] = n) : n = o[13], n)
            }
        })
    }),
    EBQV: (function(b) {
        b.exports = a.ir("/cdn/assets/dotnet.js").then(function(a) {
            return a
        })
    })
};
import {
    __webpack_require__ as a
} from "./633146.de3f981156.js";
import * as b from "./680612.940c878201.js";
a.C(b);
import * as c from "./418851.f063eecd68.js";
a.C(c);
import * as d from "./109308.6f7ef1dfb7.js";
a.C(d);
import * as e from "./399565.9b329429cf.js";
a.C(e);
import * as f from "./257798.2c9808dc2d.js";
a.C(f);
import * as g from "./447351.879fb0271f.js";
a.C(g);
import * as h from "./617936.100e7e3b87.js";
a.C(h);
import * as i from "./807489.4f5de65ce6.js";
a.C(i);
import * as j from "./337882.dd53aef429.js";
a.C(j);
import * as k from "./955979.da67fc9346.js";
a.C(k);
import * as l from "./646436.7523816f46.js";
a.C(l);
import * as m from "./7078.06fdb4b63f.js";
a.C(m);
import * as n from "./200429.03e2aa5e85.js";
a.C(n);
import * as o from "./698524.d1df5e85da.js";
a.C(o);
import * as p from "./956483.541b00b099.js";
a.C(p);
import * as q from "./87162.0f58b44e50.js";
a.C(q);
import * as r from "./396705.92d2a93025.js";
a.C(r);
import * as s from "./155568.ec2f311926.js";
a.C(s);
import * as t from "./731863.7089f3ce71.js";
a.C(t);
import * as u from "./767086.736386b2d3.js";
a.C(u);
import * as v from "./76629.060183bbe7.js";
a.C(v);
import * as w from "./226913.a95fa918ab.js";
a.C(w);
import * as x from "./227786.94f6703b35.js";
a.C(x);
import * as y from "./340918.d0951c4168.js";
a.C(y);
var z = a(a.s = "OUh0"),
    A = z.a,
    B = z.b,
    C = z.c;
export {
    A as clientLoader, B as
    default, C as shouldRevalidate
};