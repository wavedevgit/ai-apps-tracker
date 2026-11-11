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
            m = e("gsBt"),
            f = e("EkCf");
        let i = (0, r.hb)(f.a);
        async function n(a) {
            let {
                params: s,
                request: e,
                serverLoader: f
            } = a, i = await f();
            return null == i && null != (0, r.J)("/:profileId/products", `/${s["*"]??""}`) && "owner" === (0, o.c)(new URL(e.url).searchParams) && Promise.all([m.a.prefetch(), (0, t.c)()]).catch(() => void 0), i
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
            m = e("zd8w"),
            f = e("v4LA"),
            i = e("AXDI");
        let n = (0, f.a)(o.v);
        e.d(s, {}, {
            a: function(a) {
                let s, e, o = (0, t.c)(3),
                    {
                        link: f
                    } = a;
                return o[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, r.jsx)(i.b, {}), o[0] = s) : s = o[0], o[1] !== f ? (e = (0, r.jsx)(i.a, {
                    children: (0, r.jsx)(m.Suspense, {
                        fallback: s,
                        children: (0, r.jsx)(n, {
                            link: f
                        })
                    })
                }), o[1] = f, o[2] = e) : e = o[2], e
            }
        })
    }),
    EkCf: (function(a, s, e) {
        var r = e("ABep"),
            t = e("QosV"),
            o = e("jqIZ"),
            m = e("HnGz"),
            f = e("hC2y"),
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
                        let a = (0, m.g)(f.c, C);
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
                        p = null == a ? (0, r.jsx)(f.d, {}) : (0, o.O)(a)
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
} from "./633146.4f53659142.js";
import * as s from "./418851.5f4d5598ef.js";
a.C(s);
import * as e from "./109308.fbb414d4aa.js";
a.C(e);
import * as r from "./399565.eb37d98dab.js";
a.C(r);
import * as t from "./257798.0b3d6025cd.js";
a.C(t);
import * as o from "./153380.6675e448cd.js";
a.C(o);
import * as m from "./617936.1be6495150.js";
a.C(m);
import * as f from "./807489.47ce3d58eb.js";
a.C(f);
import * as i from "./337882.e80888e843.js";
a.C(i);
import * as n from "./955979.ad877350e8.js";
a.C(n);
import * as c from "./646436.ac746ad603.js";
a.C(c);
import * as p from "./7078.b1d26369b8.js";
a.C(p);
import * as l from "./200429.e4432be69e.js";
a.C(l);
import * as d from "./698524.167a90d544.js";
a.C(d);
import * as j from "./956483.c6b1c36f65.js";
a.C(j);
import * as b from "./87162.29ee0bd2a9.js";
a.C(b);
import * as C from "./396705.c39944bbf2.js";
a.C(C);
import * as h from "./155568.594d7ca7d4.js";
a.C(h);
import * as u from "./731863.8b87e9728a.js";
a.C(u);
import * as _ from "./767086.6da4be4bcc.js";
a.C(_);
import * as x from "./76629.975d74ebd5.js";
a.C(x);
import * as g from "./514085.94507f4bd4.js";
a.C(g);
import * as w from "./204542.3d156380d1.js";
a.C(w);
import * as k from "./982651.7bfd071e83.js";
a.C(k);
import * as v from "./673108.c0ee21225d.js";
a.C(v);
import * as y from "./487481.c884695c4d.js";
a.C(y);
import * as P from "./229522.f9a354baac.js";
a.C(P);
import * as A from "./390575.91355aac4e.js";
a.C(A);
import * as I from "./353032.505024a946.js";
a.C(I);
import * as S from "./637885.ca6d736a13.js";
a.C(S);
import * as L from "./226913.6965f848b1.js";
a.C(L);
import * as z from "./902158.5a4b6c2c66.js";
a.C(z);
import * as R from "./340918.c39040755b.js";
a.C(R);
var B = a(a.s = "fd8z"),
    D = B.a,
    E = B.b,
    V = B.c;
export {
    D as clientLoader, E as
    default, V as shouldRevalidate
};