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
            p = (0, m.a)(o.z),
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
                        fallback: h
                    } = e,
                    {
                        pathname: C
                    } = (0, o.Y)();
                if (j[0] !== h || j[1] !== C) {
                    p = Symbol.for("react.early_return_sentinel");
                    e: {
                        let e = (0, i.g)(n.c, C);
                        if (null == e) {
                            let e;
                            j[6] !== C ? (e = (0, c.b)(C), j[6] = C, j[7] = e) : e = j[7];
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
                        l = null == e ? (0, r.jsx)(n.d, {}) : (0, o.O)(e)
                    }
                    j[0] = h, j[1] = C, j[2] = a, j[3] = s, j[4] = l, j[5] = p
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
} from "./633146.be60f96fcf.js";
import * as a from "./418851.d43ef6e51c.js";
e.C(a);
import * as s from "./109308.2094c16514.js";
e.C(s);
import * as r from "./399565.78e1c0aa0d.js";
e.C(r);
import * as t from "./257798.7e03f1e3e2.js";
e.C(t);
import * as o from "./447351.b188109392.js";
e.C(o);
import * as i from "./617936.fb76eb2727.js";
e.C(i);
import * as n from "./807489.9c1a8ccf71.js";
e.C(n);
import * as m from "./337882.5c43a2c90b.js";
e.C(m);
import * as c from "./955979.9ae2962bd4.js";
e.C(c);
import * as f from "./646436.b525bfd8f0.js";
e.C(f);
import * as l from "./7078.a82238bfec.js";
e.C(l);
import * as p from "./200429.3bcaa139a4.js";
e.C(p);
import * as d from "./698524.3de98ac6af.js";
e.C(d);
import * as j from "./956483.227ec74d56.js";
e.C(j);
import * as h from "./87162.36edabe123.js";
e.C(h);
import * as C from "./396705.12275a5eb6.js";
e.C(C);
import * as u from "./155568.b3f888f917.js";
e.C(u);
import * as b from "./731863.367082aec0.js";
e.C(b);
import * as _ from "./767086.1a336b6bc5.js";
e.C(_);
import * as g from "./76629.93a69b821a.js";
e.C(g);
import * as x from "./514085.fe0c9f50e5.js";
e.C(x);
import * as k from "./204542.f3712a1345.js";
e.C(k);
import * as w from "./226913.dd4de34d8f.js";
e.C(w);
import * as y from "./413109.b4bfe81a07.js";
e.C(y);
import * as A from "./340918.2829cbe7af.js";
e.C(A);
var P = e(e.s = "jD81"),
    v = P.a,
    L = P.b,
    S = P.c;
export {
    v as clientLoader, L as
    default, S as shouldRevalidate
};