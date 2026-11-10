export const __rspack_esm_ids = [340918];
export const __webpack_modules__ = {
    fd8z: (function(a, e, s) {
        s.d(e, {
            a: () => n,
            b: () => i,
            c: () => c
        });
        var r = s("jqIZ"),
            t = s("LKEn"),
            o = s("i4z1"),
            m = s("gsBt"),
            f = s("EkCf");
        let i = (0, r.hb)(f.a);
        async function n(a) {
            let {
                params: e,
                request: s,
                serverLoader: f
            } = a, i = await f();
            return null == i && null != (0, r.J)("/:profileId/products", `/${e["*"]??""}`) && "owner" === (0, o.c)(new URL(s.url).searchParams) && Promise.all([m.a.prefetch(), (0, t.c)()]).catch(() => void 0), i
        }
        n.hydrate = !0;
        let c = a => {
            let {
                currentUrl: e,
                nextUrl: s,
                formMethod: r,
                defaultShouldRevalidate: t
            } = a;
            return null != r ? t : !("owner" === (0, o.c)(s.searchParams) && (e.search === s.search && null != (0, o.e)(e.pathname, s.pathname) || (0, o.f)(e, s)) || function(a, e) {
                if (a.pathname !== e.pathname || !/\/business-hub\/[^/]+\/insights\/?$/.test(a.pathname) || "agent" === a.searchParams.get("insight") == ("agent" === e.searchParams.get("insight"))) return !1;
                let s = new URLSearchParams(a.searchParams),
                    r = new URLSearchParams(e.searchParams);
                return s.delete("insight"), r.delete("insight"), s.toString() === r.toString()
            }(e, s)) && t
        }
    }),
    nDjx: (function(a, e, s) {
        a.exports = s.p + "assets/appshot-logo.f0152cb4dd.png"
    }),
    hIAo: (function(a, e, s) {
        a.exports = s.p + "assets/codex-app-ga-logo.dfddfb85d7.png"
    }),
    OCvz: (function(a, e, s) {
        a.exports = s.p + "assets/dictation-start.f6efcb404f.wav"
    }),
    DJ2e: (function(a, e, s) {
        a.exports = s.p + "assets/dictation-stop.e3bc7ebc5e.wav"
    }),
    nlAI: (function(a, e, s) {
        var r = s("ABep"),
            t = s("QosV"),
            o = s("XyTt"),
            m = s("zd8w"),
            f = s("v4LA"),
            i = s("AXDI");
        let n = (0, f.a)(o.v);
        s.d(e, {}, {
            a: function(a) {
                let e, s, o = (0, t.c)(3),
                    {
                        link: f
                    } = a;
                return o[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(i.b, {}), o[0] = e) : e = o[0], o[1] !== f ? (s = (0, r.jsx)(i.a, {
                    children: (0, r.jsx)(m.Suspense, {
                        fallback: e,
                        children: (0, r.jsx)(n, {
                            link: f
                        })
                    })
                }), o[1] = f, o[2] = s) : s = o[2], s
            }
        })
    }),
    EkCf: (function(a, e, s) {
        var r = s("ABep"),
            t = s("QosV"),
            o = s("jqIZ"),
            m = s("HnGz"),
            f = s("hC2y"),
            i = s("AXDI"),
            n = s("NVla"),
            c = s("nlAI");
        s.d(e, {}, {
            a: function(a) {
                let e, s, p, l, d, j = (0, t.c)(14),
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
                            let e = a;
                            if (null != e) {
                                let a;
                                j[8] !== e ? (a = (0, r.jsx)(c.a, {
                                    link: e
                                }), j[8] = e, j[9] = a) : a = j[9], l = a;
                                break a
                            }
                        }
                        e = i.a,
                        s = b,
                        p = null == a ? (0, r.jsx)(f.d, {}) : (0, o.O)(a)
                    }
                    j[0] = b, j[1] = C, j[2] = e, j[3] = s, j[4] = p, j[5] = l
                } else e = j[2], s = j[3], p = j[4], l = j[5];
                return l !== Symbol.for("react.early_return_sentinel") ? l : (j[10] !== e || j[11] !== s || j[12] !== p ? (d = (0, r.jsx)(e, {
                    fallback: s,
                    children: p
                }), j[10] = e, j[11] = s, j[12] = p, j[13] = d) : d = j[13], d)
            }
        })
    }),
    EBQV: (function(e) {
        e.exports = a.ir("/cdn/assets/dotnet.js").then(function(a) {
            return a
        })
    })
};
import {
    __webpack_require__ as a
} from "./633146.a85b352259.js";
import * as e from "./418851.b418272bca.js";
a.C(e);
import * as s from "./109308.fbb414d4aa.js";
a.C(s);
import * as r from "./399565.a7f9c29dec.js";
a.C(r);
import * as t from "./257798.0b3d6025cd.js";
a.C(t);
import * as o from "./153380.6675e448cd.js";
a.C(o);
import * as m from "./617936.ed57a1bdc2.js";
a.C(m);
import * as f from "./807489.02ba855c8c.js";
a.C(f);
import * as i from "./337882.b1c17957d2.js";
a.C(i);
import * as n from "./955979.f40606391d.js";
a.C(n);
import * as c from "./646436.df466850ff.js";
a.C(c);
import * as p from "./7078.f43056bf4f.js";
a.C(p);
import * as l from "./200429.f5468a7d9e.js";
a.C(l);
import * as d from "./698524.29c67652d0.js";
a.C(d);
import * as j from "./956483.0463ebd3e8.js";
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
import * as x from "./76629.4b3a6c11d6.js";
a.C(x);
import * as g from "./514085.5cd44b3418.js";
a.C(g);
import * as w from "./204542.555643bfb3.js";
a.C(w);
import * as k from "./982651.7bfd071e83.js";
a.C(k);
import * as v from "./673108.84888467b6.js";
a.C(v);
import * as y from "./487481.d4be37a58a.js";
a.C(y);
import * as P from "./229522.ddc021d49b.js";
a.C(P);
import * as A from "./390575.92d962cefa.js";
a.C(A);
import * as I from "./353032.7103e0705d.js";
a.C(I);
import * as S from "./637885.ac5c2e9cdb.js";
a.C(S);
import * as L from "./226913.b323f04fd6.js";
a.C(L);
import * as z from "./902158.5a4b6c2c66.js";
a.C(z);
import * as R from "./340918.9424f638d7.js";
a.C(R);
var B = a(a.s = "fd8z"),
    D = B.a,
    E = B.b,
    V = B.c;
export {
    D as clientLoader, E as
    default, V as shouldRevalidate
};