export const __rspack_esm_ids = [340918];
export const __webpack_modules__ = {
    fd8z: (function(a, s, r) {
        r.d(s, {
            a: () => n,
            b: () => i,
            c: () => c
        });
        var e = r("jqIZ"),
            t = r("LKEn"),
            o = r("i4z1"),
            m = r("gsBt"),
            f = r("EkCf");
        let i = (0, e.hb)(f.a);
        async function n(a) {
            let {
                params: s,
                request: r,
                serverLoader: f
            } = a, i = await f();
            return null == i && null != (0, e.J)("/:profileId/products", `/${s["*"]??""}`) && "owner" === (0, o.c)(new URL(r.url).searchParams) && Promise.all([m.a.prefetch(), (0, t.c)()]).catch(() => void 0), i
        }
        n.hydrate = !0;
        let c = a => {
            let {
                currentUrl: s,
                nextUrl: r,
                formMethod: e,
                defaultShouldRevalidate: t
            } = a;
            return null != e ? t : !("owner" === (0, o.c)(r.searchParams) && (s.search === r.search && null != (0, o.e)(s.pathname, r.pathname) || (0, o.f)(s, r)) || function(a, s) {
                if (a.pathname !== s.pathname || !/\/business-hub\/[^/]+\/insights\/?$/.test(a.pathname) || "agent" === a.searchParams.get("insight") == ("agent" === s.searchParams.get("insight"))) return !1;
                let r = new URLSearchParams(a.searchParams),
                    e = new URLSearchParams(s.searchParams);
                return r.delete("insight"), e.delete("insight"), r.toString() === e.toString()
            }(s, r)) && t
        }
    }),
    nDjx: (function(a, s, r) {
        a.exports = r.p + "assets/appshot-logo.f0152cb4dd.png"
    }),
    hIAo: (function(a, s, r) {
        a.exports = r.p + "assets/codex-app-ga-logo.dfddfb85d7.png"
    }),
    OCvz: (function(a, s, r) {
        a.exports = r.p + "assets/dictation-start.f6efcb404f.wav"
    }),
    DJ2e: (function(a, s, r) {
        a.exports = r.p + "assets/dictation-stop.e3bc7ebc5e.wav"
    }),
    nlAI: (function(a, s, r) {
        var e = r("ABep"),
            t = r("QosV"),
            o = r("XyTt"),
            m = r("zd8w"),
            f = r("v4LA"),
            i = r("AXDI");
        let n = (0, f.a)(o.v);
        r.d(s, {}, {
            a: function(a) {
                let s, r, o = (0, t.c)(3),
                    {
                        link: f
                    } = a;
                return o[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, e.jsx)(i.b, {}), o[0] = s) : s = o[0], o[1] !== f ? (r = (0, e.jsx)(i.a, {
                    children: (0, e.jsx)(m.Suspense, {
                        fallback: s,
                        children: (0, e.jsx)(n, {
                            link: f
                        })
                    })
                }), o[1] = f, o[2] = r) : r = o[2], r
            }
        })
    }),
    EkCf: (function(a, s, r) {
        var e = r("ABep"),
            t = r("QosV"),
            o = r("jqIZ"),
            m = r("HnGz"),
            f = r("hC2y"),
            i = r("AXDI"),
            n = r("NVla"),
            c = r("nlAI");
        r.d(s, {}, {
            a: function(a) {
                let s, r, p, l, d, j = (0, t.c)(14),
                    {
                        fallback: b
                    } = a,
                    {
                        pathname: C
                    } = (0, o.Y)();
                if (j[0] !== b || j[1] !== C) {
                    l = Symbol.for("react.early_return_sentinel");
                    a: {
                        let a = (0, m.g)(f.c, C);
                        if (null == a) {
                            let a;
                            j[6] !== C ? (a = (0, n.b)(C), j[6] = C, j[7] = a) : a = j[7];
                            let s = a;
                            if (null != s) {
                                let a;
                                j[8] !== s ? (a = (0, e.jsx)(c.a, {
                                    link: s
                                }), j[8] = s, j[9] = a) : a = j[9], l = a;
                                break a
                            }
                        }
                        s = i.a,
                        r = b,
                        p = null == a ? (0, e.jsx)(f.d, {}) : (0, o.O)(a)
                    }
                    j[0] = b, j[1] = C, j[2] = s, j[3] = r, j[4] = p, j[5] = l
                } else s = j[2], r = j[3], p = j[4], l = j[5];
                return l !== Symbol.for("react.early_return_sentinel") ? l : (j[10] !== s || j[11] !== r || j[12] !== p ? (d = (0, e.jsx)(s, {
                    fallback: r,
                    children: p
                }), j[10] = s, j[11] = r, j[12] = p, j[13] = d) : d = j[13], d)
            }
        })
    }),
    EBQV: (function(s) {
        s.exports = a.ir("/cdn/assets/dotnet.js").then(function(a) {
            return a
        })
    })
};
import {
    __webpack_require__ as a
} from "./633146.578f2b23b5.js";
import * as s from "./418851.a2414d348c.js";
a.C(s);
import * as r from "./109308.fbb414d4aa.js";
a.C(r);
import * as e from "./399565.a7f9c29dec.js";
a.C(e);
import * as t from "./257798.0b3d6025cd.js";
a.C(t);
import * as o from "./153380.6675e448cd.js";
a.C(o);
import * as m from "./617936.d20f0bb1f2.js";
a.C(m);
import * as f from "./807489.7f3d71f5dd.js";
a.C(f);
import * as i from "./337882.eb4e205b01.js";
a.C(i);
import * as n from "./955979.1d3a3c3d70.js";
a.C(n);
import * as c from "./646436.669c479758.js";
a.C(c);
import * as p from "./7078.5a4ac5b67f.js";
a.C(p);
import * as l from "./200429.508d689d4a.js";
a.C(l);
import * as d from "./698524.7580180eba.js";
a.C(d);
import * as j from "./956483.21cf7af8b4.js";
a.C(j);
import * as b from "./87162.636a6b2a55.js";
a.C(b);
import * as C from "./396705.c39944bbf2.js";
a.C(C);
import * as h from "./155568.d3b291934c.js";
a.C(h);
import * as u from "./731863.8b87e9728a.js";
a.C(u);
import * as _ from "./767086.6da4be4bcc.js";
a.C(_);
import * as x from "./76629.13408f2772.js";
a.C(x);
import * as g from "./514085.9f7c2a584b.js";
a.C(g);
import * as w from "./204542.a19c84b141.js";
a.C(w);
import * as k from "./982651.7bfd071e83.js";
a.C(k);
import * as v from "./673108.39ad50630b.js";
a.C(v);
import * as y from "./487481.4c3625a8ea.js";
a.C(y);
import * as P from "./229522.a213296c9c.js";
a.C(P);
import * as A from "./390575.81bb6844fb.js";
a.C(A);
import * as I from "./353032.6c4c0e25a0.js";
a.C(I);
import * as S from "./637885.77f633a270.js";
a.C(S);
import * as L from "./226913.b323f04fd6.js";
a.C(L);
import * as z from "./902158.5a4b6c2c66.js";
a.C(z);
import * as R from "./340918.ad5e64c399.js";
a.C(R);
var B = a(a.s = "fd8z"),
    D = B.a,
    E = B.b,
    V = B.c;
export {
    D as clientLoader, E as
    default, V as shouldRevalidate
};