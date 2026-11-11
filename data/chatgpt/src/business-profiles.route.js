export const __rspack_esm_ids = [340918];
export const __webpack_modules__ = {
    fd8z: (function(e, a, s) {
        s.d(a, {
            a: () => m,
            b: () => i,
            c: () => c
        });
        var r = s("jqIZ"),
            t = s("LKEn"),
            o = s("i4z1"),
            n = s("gsBt"),
            f = s("EkCf");
        let i = (0, r.hb)(f.a);
        async function m(e) {
            let {
                params: a,
                request: s,
                serverLoader: f
            } = e, i = await f();
            return null == i && null != (0, r.J)("/:profileId/products", `/${a["*"]??""}`) && "owner" === (0, o.c)(new URL(s.url).searchParams) && Promise.all([n.a.prefetch(), (0, t.c)()]).catch(() => void 0), i
        }
        m.hydrate = !0;
        let c = e => {
            let {
                currentUrl: a,
                nextUrl: s,
                formMethod: r,
                defaultShouldRevalidate: t
            } = e;
            return null != r ? t : !("owner" === (0, o.c)(s.searchParams) && (a.search === s.search && null != (0, o.e)(a.pathname, s.pathname) || (0, o.g)(a, s)) || function(e, a) {
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
            f = s("v4LA"),
            i = s("AXDI");
        let m = (0, f.a)(o.v);
        s.d(a, {}, {
            a: function(e) {
                let a, s, o = (0, t.c)(3),
                    {
                        link: f
                    } = e;
                return o[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, r.jsx)(i.b, {}), o[0] = a) : a = o[0], o[1] !== f ? (s = (0, r.jsx)(i.a, {
                    children: (0, r.jsx)(n.Suspense, {
                        fallback: a,
                        children: (0, r.jsx)(m, {
                            link: f
                        })
                    })
                }), o[1] = f, o[2] = s) : s = o[2], s
            }
        })
    }),
    EkCf: (function(e, a, s) {
        var r = s("ABep"),
            t = s("QosV"),
            o = s("jqIZ"),
            n = s("HnGz"),
            f = s("hC2y"),
            i = s("AXDI"),
            m = s("NVla"),
            c = s("nlAI");
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
                        let e = (0, n.g)(f.c, b);
                        if (null == e) {
                            let e;
                            h[6] !== b ? (e = (0, m.b)(b), h[6] = b, h[7] = e) : e = h[7];
                            let a = e;
                            if (null != a) {
                                let e;
                                h[8] !== a ? (e = (0, r.jsx)(c.a, {
                                    link: a
                                }), h[8] = a, h[9] = e) : e = h[9], p = e;
                                break e
                            }
                        }
                        a = i.a,
                        s = j,
                        l = null == e ? (0, r.jsx)(f.d, {}) : (0, o.O)(e)
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
} from "./633146.acefa13d1a.js";
import * as a from "./418851.4b043c43bc.js";
e.C(a);
import * as s from "./109308.e66696cd0d.js";
e.C(s);
import * as r from "./399565.2fc4679b26.js";
e.C(r);
import * as t from "./257798.b51742efd5.js";
e.C(t);
import * as o from "./447351.496da706c3.js";
e.C(o);
import * as n from "./617936.dcbf382e63.js";
e.C(n);
import * as f from "./807489.7f5d47cb0e.js";
e.C(f);
import * as i from "./337882.f22d43d615.js";
e.C(i);
import * as m from "./955979.d659318431.js";
e.C(m);
import * as c from "./646436.30c2553f0b.js";
e.C(c);
import * as l from "./7078.5cd07a5c9b.js";
e.C(l);
import * as p from "./200429.82d37d45f2.js";
e.C(p);
import * as d from "./698524.1d78dbab32.js";
e.C(d);
import * as h from "./956483.4fffedad3f.js";
e.C(h);
import * as j from "./87162.ceb3023033.js";
e.C(j);
import * as b from "./396705.74bbf371c4.js";
e.C(b);
import * as u from "./155568.8fe9b1a879.js";
e.C(u);
import * as _ from "./731863.e2c3850b56.js";
e.C(_);
import * as C from "./767086.e730a8ccb4.js";
e.C(C);
import * as x from "./76629.0f4df00a80.js";
e.C(x);
import * as g from "./226913.27c93050ff.js";
e.C(g);
import * as w from "./902158.5a4b6c2c66.js";
e.C(w);
import * as k from "./340918.67d04df656.js";
e.C(k);
var v = e(e.s = "fd8z"),
    y = v.a,
    P = v.b,
    A = v.c;
export {
    y as clientLoader, P as
    default, A as shouldRevalidate
};