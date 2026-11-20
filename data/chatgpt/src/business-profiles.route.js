export const __rspack_esm_ids = [340918];
export const __webpack_modules__ = {
    jD81: (function(e, a, s) {
        s.d(a, {
            a: () => c,
            b: () => m,
            c: () => l
        });
        var r = s("rEML"),
            t = s("LKEn"),
            o = s("i4z1"),
            n = s("gsBt"),
            i = s("EkCf");
        let m = (0, r.kb)(i.a);
        async function c(e) {
            let {
                params: a,
                request: s,
                serverLoader: i
            } = e, m = await i();
            return null == m && null != (0, r.L)("/:profileId/products", `/${a["*"]??""}`) && "owner" === (0, o.c)(new URL(s.url).searchParams) && Promise.all([n.a.prefetch(), (0, t.f)()]).catch(() => void 0), m
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
            i = s("rEML"),
            m = s("v4LA"),
            c = s("hZax"),
            l = s("AXDI");
        let p = "1258713729",
            f = (0, m.a)(o.z),
            d = (0, m.a)(async () => (await Promise.all([s.e(418851), s.e(109308), s.e(399565), s.e(257798), s.e(447351), s.e(617936), s.e(807489), s.e(337882), s.e(955979), s.e(646436), s.e(7078), s.e(200429), s.e(698524), s.e(956483), s.e(87162), s.e(396705), s.e(155568), s.e(731863), s.e(767086), s.e(76629), s.e(226913), s.e(967847), s.e(330351), s.e(212322), s.e(359399)]).then(s.bind(s, "MyHG"))).BusinessAdsCreditPage);

        function h(e) {
            let a, s = (0, t.c)(4),
                {
                    link: o
                } = e,
                n = (0, c.f)(p);
            if ((0, c.g)(p)) {
                let e;
                return s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(l.b, {}), s[0] = e) : e = s[0], e
            }
            return s[1] !== n || s[2] !== o ? (a = n ? (0, r.jsx)(d, {
                link: o
            }) : (0, r.jsx)(f, {
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
                        search: p
                    } = (0, i.Z)();
                m[0] !== c.isAdsCreditCampaign || m[1] !== p ? (a = c.isAdsCreditCampaign && !new URLSearchParams(p).get("promo_campaign"), m[0] = c.isAdsCreditCampaign, m[1] = p, m[2] = a) : a = m[2];
                let d = a;
                return m[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, r.jsx)(l.b, {}), m[3] = s) : s = m[3], m[4] !== d || m[5] !== c ? (o = (0, r.jsx)(l.a, {
                    children: (0, r.jsx)(n.Suspense, {
                        fallback: s,
                        children: d ? (0, r.jsx)(h, {
                            link: c
                        }) : (0, r.jsx)(f, {
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
            l = s("nlAI");
        s.d(a, {}, {
            a: function(e) {
                let a, s, p, f, d, h = (0, t.c)(14),
                    {
                        fallback: j
                    } = e,
                    {
                        pathname: u
                    } = (0, o.Z)();
                if (h[0] !== j || h[1] !== u) {
                    f = Symbol.for("react.early_return_sentinel");
                    e: {
                        let e = (0, n.g)(i.c, u);
                        if (null == e) {
                            let e;
                            h[6] !== u ? (e = (0, c.b)(u), h[6] = u, h[7] = e) : e = h[7];
                            let a = e;
                            if (null != a) {
                                let e;
                                h[8] !== a ? (e = (0, r.jsx)(l.a, {
                                    link: a
                                }), h[8] = a, h[9] = e) : e = h[9], f = e;
                                break e
                            }
                        }
                        a = m.a,
                        s = j,
                        p = null == e ? (0, r.jsx)(i.d, {}) : (0, o.P)(e)
                    }
                    h[0] = j, h[1] = u, h[2] = a, h[3] = s, h[4] = p, h[5] = f
                } else a = h[2], s = h[3], p = h[4], f = h[5];
                return f !== Symbol.for("react.early_return_sentinel") ? f : (h[10] !== a || h[11] !== s || h[12] !== p ? (d = (0, r.jsx)(a, {
                    fallback: s,
                    children: p
                }), h[10] = a, h[11] = s, h[12] = p, h[13] = d) : d = h[13], d)
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
} from "./633146.48b57020d2.js";
import * as a from "./418851.5b0ade19b1.js";
e.C(a);
import * as s from "./109308.8b09661749.js";
e.C(s);
import * as r from "./399565.edefe43a76.js";
e.C(r);
import * as t from "./257798.428a6bce48.js";
e.C(t);
import * as o from "./447351.34d04099ca.js";
e.C(o);
import * as n from "./617936.dd75fa2a89.js";
e.C(n);
import * as i from "./807489.1d24fa9988.js";
e.C(i);
import * as m from "./337882.145f5ca770.js";
e.C(m);
import * as c from "./955979.fad3aa290b.js";
e.C(c);
import * as l from "./646436.b50a318f52.js";
e.C(l);
import * as p from "./7078.9bac2fcc06.js";
e.C(p);
import * as f from "./200429.f07d17d37b.js";
e.C(f);
import * as d from "./698524.130da41cbb.js";
e.C(d);
import * as h from "./956483.20ccea0970.js";
e.C(h);
import * as j from "./87162.4896e26514.js";
e.C(j);
import * as u from "./396705.e5ddd72a06.js";
e.C(u);
import * as b from "./155568.49e7ad46aa.js";
e.C(b);
import * as C from "./731863.3cdbbfa8f8.js";
e.C(C);
import * as _ from "./767086.3711424c4d.js";
e.C(_);
import * as g from "./76629.15f5868e7b.js";
e.C(g);
import * as x from "./226913.cf105b979e.js";
e.C(x);
import * as k from "./227786.748857de8d.js";
e.C(k);
import * as w from "./340918.f9e6f233e5.js";
e.C(w);
var P = e(e.s = "jD81"),
    y = P.a,
    A = P.b,
    L = P.c;
export {
    y as clientLoader, A as
    default, L as shouldRevalidate
};