export const __rspack_esm_ids = [340918];
export const __webpack_modules__ = {
    fd8z: (function(e, s, a) {
        a.d(s, {
            a: () => i,
            b: () => c,
            c: () => n
        });
        var r = a("jqIZ"),
            t = a("LKEn"),
            o = a("i4z1"),
            m = a("gsBt"),
            f = a("EkCf");
        let c = (0, r.hb)(f.a);
        async function i(e) {
            let {
                params: s,
                request: a,
                serverLoader: f
            } = e, c = await f();
            return null == c && null != (0, r.J)("/:profileId/products", `/${s["*"]??""}`) && "owner" === (0, o.c)(new URL(a.url).searchParams) && Promise.all([m.a.prefetch(), (0, t.c)()]).catch(() => void 0), c
        }
        i.hydrate = !0;
        let n = e => {
            let {
                currentUrl: s,
                nextUrl: a,
                formMethod: r,
                defaultShouldRevalidate: t
            } = e;
            return null != r ? t : !("owner" === (0, o.c)(a.searchParams) && (s.search === a.search && null != (0, o.e)(s.pathname, a.pathname) || (0, o.g)(s, a)) || function(e, s) {
                if (e.pathname !== s.pathname || !/\/business-hub\/[^/]+\/insights\/?$/.test(e.pathname) || "agent" === e.searchParams.get("insight") == ("agent" === s.searchParams.get("insight"))) return !1;
                let a = new URLSearchParams(e.searchParams),
                    r = new URLSearchParams(s.searchParams);
                return a.delete("insight"), r.delete("insight"), a.toString() === r.toString()
            }(s, a)) && t
        }
    }),
    nDjx: (function(e, s, a) {
        e.exports = a.p + "assets/appshot-logo.f0152cb4dd.png"
    }),
    hIAo: (function(e, s, a) {
        e.exports = a.p + "assets/codex-app-ga-logo.dfddfb85d7.png"
    }),
    OCvz: (function(e, s, a) {
        e.exports = a.p + "assets/dictation-start.f6efcb404f.wav"
    }),
    DJ2e: (function(e, s, a) {
        e.exports = a.p + "assets/dictation-stop.e3bc7ebc5e.wav"
    }),
    nlAI: (function(e, s, a) {
        var r = a("ABep"),
            t = a("QosV"),
            o = a("XyTt"),
            m = a("zd8w"),
            f = a("v4LA"),
            c = a("AXDI");
        let i = (0, f.a)(o.v);
        a.d(s, {}, {
            a: function(e) {
                let s, a, o = (0, t.c)(3),
                    {
                        link: f
                    } = e;
                return o[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, r.jsx)(c.b, {}), o[0] = s) : s = o[0], o[1] !== f ? (a = (0, r.jsx)(c.a, {
                    children: (0, r.jsx)(m.Suspense, {
                        fallback: s,
                        children: (0, r.jsx)(i, {
                            link: f
                        })
                    })
                }), o[1] = f, o[2] = a) : a = o[2], a
            }
        })
    }),
    EkCf: (function(e, s, a) {
        var r = a("ABep"),
            t = a("QosV"),
            o = a("jqIZ"),
            m = a("HnGz"),
            f = a("hC2y"),
            c = a("AXDI"),
            i = a("NVla"),
            n = a("nlAI");
        a.d(s, {}, {
            a: function(e) {
                let s, a, p, d, l, b = (0, t.c)(14),
                    {
                        fallback: j
                    } = e,
                    {
                        pathname: C
                    } = (0, o.Y)();
                if (b[0] !== j || b[1] !== C) {
                    d = Symbol.for("react.early_return_sentinel");
                    e: {
                        let e = (0, m.g)(f.c, C);
                        if (null == e) {
                            let e;
                            b[6] !== C ? (e = (0, i.b)(C), b[6] = C, b[7] = e) : e = b[7];
                            let s = e;
                            if (null != s) {
                                let e;
                                b[8] !== s ? (e = (0, r.jsx)(n.a, {
                                    link: s
                                }), b[8] = s, b[9] = e) : e = b[9], d = e;
                                break e
                            }
                        }
                        s = c.a,
                        a = j,
                        p = null == e ? (0, r.jsx)(f.d, {}) : (0, o.O)(e)
                    }
                    b[0] = j, b[1] = C, b[2] = s, b[3] = a, b[4] = p, b[5] = d
                } else s = b[2], a = b[3], p = b[4], d = b[5];
                return d !== Symbol.for("react.early_return_sentinel") ? d : (b[10] !== s || b[11] !== a || b[12] !== p ? (l = (0, r.jsx)(s, {
                    fallback: a,
                    children: p
                }), b[10] = s, b[11] = a, b[12] = p, b[13] = l) : l = b[13], l)
            }
        })
    }),
    EBQV: (function(s) {
        s.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.516c6a4677.js";
import * as s from "./418851.8cdff597ce.js";
e.C(s);
import * as a from "./109308.fbb414d4aa.js";
e.C(a);
import * as r from "./399565.a7f9c29dec.js";
e.C(r);
import * as t from "./257798.0b3d6025cd.js";
e.C(t);
import * as o from "./153380.6675e448cd.js";
e.C(o);
import * as m from "./617936.510230e136.js";
e.C(m);
import * as f from "./807489.a027e374ea.js";
e.C(f);
import * as c from "./337882.c2f7cf8187.js";
e.C(c);
import * as i from "./955979.24c51c90c6.js";
e.C(i);
import * as n from "./646436.c733a3d665.js";
e.C(n);
import * as p from "./7078.c424185282.js";
e.C(p);
import * as d from "./200429.ef6ceeb78d.js";
e.C(d);
import * as l from "./698524.fd3e996752.js";
e.C(l);
import * as b from "./956483.abe9885def.js";
e.C(b);
import * as j from "./87162.29ee0bd2a9.js";
e.C(j);
import * as C from "./396705.c39944bbf2.js";
e.C(C);
import * as h from "./155568.7bbfb72b85.js";
e.C(h);
import * as u from "./731863.8b87e9728a.js";
e.C(u);
import * as _ from "./767086.6da4be4bcc.js";
e.C(_);
import * as x from "./76629.1ccd088209.js";
e.C(x);
import * as g from "./514085.2b0855224a.js";
e.C(g);
import * as w from "./204542.555643bfb3.js";
e.C(w);
import * as k from "./982651.7bfd071e83.js";
e.C(k);
import * as v from "./673108.95021ed52b.js";
e.C(v);
import * as y from "./487481.dd23dcfc39.js";
e.C(y);
import * as P from "./229522.7430726c37.js";
e.C(P);
import * as A from "./390575.353218f3fd.js";
e.C(A);
import * as I from "./353032.1ea521a002.js";
e.C(I);
import * as S from "./637885.5271cdd835.js";
e.C(S);
import * as L from "./226913.b323f04fd6.js";
e.C(L);
import * as z from "./902158.5a4b6c2c66.js";
e.C(z);
import * as R from "./340918.736499032b.js";
e.C(R);
var B = e(e.s = "fd8z"),
    D = B.a,
    E = B.b,
    V = B.c;
export {
    D as clientLoader, E as
    default, V as shouldRevalidate
};