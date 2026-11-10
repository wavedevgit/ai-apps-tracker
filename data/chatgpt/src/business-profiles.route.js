export const __rspack_esm_ids = [340918];
export const __webpack_modules__ = {
    fd8z: (function(a, s, e) {
        e.d(s, {
            a: () => n,
            b: () => i,
            c: () => c
        });
        var r = e("jqIZ"),
            t = e("LKEn"),
            o = e("i4z1"),
            f = e("gsBt"),
            m = e("EkCf");
        let i = (0, r.hb)(m.a);
        async function n(a) {
            let {
                params: s,
                request: e,
                serverLoader: m
            } = a, i = await m();
            return null == i && null != (0, r.J)("/:profileId/products", `/${s["*"]??""}`) && "owner" === (0, o.c)(new URL(e.url).searchParams) && Promise.all([f.a.prefetch(), (0, t.c)()]).catch(() => void 0), i
        }
        n.hydrate = !0;
        let c = a => {
            let {
                currentUrl: s,
                nextUrl: e,
                formMethod: r,
                defaultShouldRevalidate: t
            } = a;
            return null != r ? t : !("owner" === (0, o.c)(e.searchParams) && (s.search === e.search && null != (0, o.e)(s.pathname, e.pathname) || (0, o.g)(s, e)) || function(a, s) {
                if (a.pathname !== s.pathname || !/\/business-hub\/[^/]+\/insights\/?$/.test(a.pathname) || "agent" === a.searchParams.get("insight") == ("agent" === s.searchParams.get("insight"))) return !1;
                let e = new URLSearchParams(a.searchParams),
                    r = new URLSearchParams(s.searchParams);
                return e.delete("insight"), r.delete("insight"), e.toString() === r.toString()
            }(s, e)) && t
        }
    }),
    nDjx: (function(a, s, e) {
        a.exports = e.p + "assets/appshot-logo.f0152cb4dd.png"
    }),
    hIAo: (function(a, s, e) {
        a.exports = e.p + "assets/codex-app-ga-logo.dfddfb85d7.png"
    }),
    OCvz: (function(a, s, e) {
        a.exports = e.p + "assets/dictation-start.f6efcb404f.wav"
    }),
    DJ2e: (function(a, s, e) {
        a.exports = e.p + "assets/dictation-stop.e3bc7ebc5e.wav"
    }),
    nlAI: (function(a, s, e) {
        var r = e("ABep"),
            t = e("QosV"),
            o = e("XyTt"),
            f = e("zd8w"),
            m = e("v4LA"),
            i = e("AXDI");
        let n = (0, m.a)(o.v);
        e.d(s, {}, {
            a: function(a) {
                let s, e, o = (0, t.c)(3),
                    {
                        link: m
                    } = a;
                return o[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, r.jsx)(i.b, {}), o[0] = s) : s = o[0], o[1] !== m ? (e = (0, r.jsx)(i.a, {
                    children: (0, r.jsx)(f.Suspense, {
                        fallback: s,
                        children: (0, r.jsx)(n, {
                            link: m
                        })
                    })
                }), o[1] = m, o[2] = e) : e = o[2], e
            }
        })
    }),
    EkCf: (function(a, s, e) {
        var r = e("ABep"),
            t = e("QosV"),
            o = e("jqIZ"),
            f = e("HnGz"),
            m = e("hC2y"),
            i = e("AXDI"),
            n = e("NVla"),
            c = e("nlAI");
        e.d(s, {}, {
            a: function(a) {
                let s, e, p, l, d, j = (0, t.c)(14),
                    {
                        fallback: b
                    } = a,
                    {
                        pathname: C
                    } = (0, o.Y)();
                if (j[0] !== b || j[1] !== C) {
                    l = Symbol.for("react.early_return_sentinel");
                    a: {
                        let a = (0, f.g)(m.c, C);
                        if (null == a) {
                            let a;
                            j[6] !== C ? (a = (0, n.b)(C), j[6] = C, j[7] = a) : a = j[7];
                            let s = a;
                            if (null != s) {
                                let a;
                                j[8] !== s ? (a = (0, r.jsx)(c.a, {
                                    link: s
                                }), j[8] = s, j[9] = a) : a = j[9], l = a;
                                break a
                            }
                        }
                        s = i.a,
                        e = b,
                        p = null == a ? (0, r.jsx)(m.d, {}) : (0, o.O)(a)
                    }
                    j[0] = b, j[1] = C, j[2] = s, j[3] = e, j[4] = p, j[5] = l
                } else s = j[2], e = j[3], p = j[4], l = j[5];
                return l !== Symbol.for("react.early_return_sentinel") ? l : (j[10] !== s || j[11] !== e || j[12] !== p ? (d = (0, r.jsx)(s, {
                    fallback: e,
                    children: p
                }), j[10] = s, j[11] = e, j[12] = p, j[13] = d) : d = j[13], d)
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
} from "./633146.79c7577f6d.js";
import * as s from "./418851.4cf783e1e4.js";
a.C(s);
import * as e from "./109308.fbb414d4aa.js";
a.C(e);
import * as r from "./399565.ed5e74a86b.js";
a.C(r);
import * as t from "./257798.0b3d6025cd.js";
a.C(t);
import * as o from "./153380.6675e448cd.js";
a.C(o);
import * as f from "./617936.5a72737818.js";
a.C(f);
import * as m from "./807489.54f5772d0d.js";
a.C(m);
import * as i from "./337882.26e5bd2b09.js";
a.C(i);
import * as n from "./955979.c158e14c67.js";
a.C(n);
import * as c from "./646436.73183b8431.js";
a.C(c);
import * as p from "./7078.92e3c91286.js";
a.C(p);
import * as l from "./200429.073fa1ac67.js";
a.C(l);
import * as d from "./698524.d0f80a4f75.js";
a.C(d);
import * as j from "./956483.7057f5dd90.js";
a.C(j);
import * as b from "./87162.29ee0bd2a9.js";
a.C(b);
import * as C from "./396705.c39944bbf2.js";
a.C(C);
import * as h from "./155568.7bbfb72b85.js";
a.C(h);
import * as u from "./731863.8b87e9728a.js";
a.C(u);
import * as _ from "./767086.6da4be4bcc.js";
a.C(_);
import * as x from "./76629.4a3def3f3d.js";
a.C(x);
import * as g from "./514085.fce2779453.js";
a.C(g);
import * as w from "./204542.ebe6ed48ad.js";
a.C(w);
import * as k from "./982651.7bfd071e83.js";
a.C(k);
import * as v from "./673108.aaf568e9f3.js";
a.C(v);
import * as y from "./487481.699d7b5953.js";
a.C(y);
import * as P from "./229522.110e65fd00.js";
a.C(P);
import * as A from "./390575.8e5cb2c01a.js";
a.C(A);
import * as I from "./353032.9312ae4acb.js";
a.C(I);
import * as S from "./637885.3e8c638fde.js";
a.C(S);
import * as L from "./226913.6965f848b1.js";
a.C(L);
import * as z from "./902158.5a4b6c2c66.js";
a.C(z);
import * as R from "./340918.ae691032ba.js";
a.C(R);
var B = a(a.s = "fd8z"),
    D = B.a,
    E = B.b,
    V = B.c;
export {
    D as clientLoader, E as
    default, V as shouldRevalidate
};