export const __rspack_esm_ids = [340918];
export const __webpack_modules__ = {
    fd8z: (function(e, a, s) {
        s.d(a, {
            a: () => i,
            b: () => m,
            c: () => l
        });
        var r = s("jqIZ"),
            t = s("LKEn"),
            o = s("i4z1"),
            n = s("gsBt"),
            c = s("EkCf");
        let m = (0, r.hb)(c.a);
        async function i(e) {
            let {
                params: a,
                request: s,
                serverLoader: c
            } = e, m = await c();
            return null == m && null != (0, r.J)("/:profileId/products", `/${a["*"]??""}`) && "owner" === (0, o.c)(new URL(s.url).searchParams) && Promise.all([n.a.prefetch(), (0, t.c)()]).catch(() => void 0), m
        }
        i.hydrate = !0;
        let l = e => {
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
            c = s("v4LA"),
            m = s("AXDI");
        let i = (0, c.a)(o.x);
        s.d(a, {}, {
            a: function(e) {
                let a, s, o = (0, t.c)(3),
                    {
                        link: c
                    } = e;
                return o[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, r.jsx)(m.b, {}), o[0] = a) : a = o[0], o[1] !== c ? (s = (0, r.jsx)(m.a, {
                    children: (0, r.jsx)(n.Suspense, {
                        fallback: a,
                        children: (0, r.jsx)(i, {
                            link: c
                        })
                    })
                }), o[1] = c, o[2] = s) : s = o[2], s
            }
        })
    }),
    EkCf: (function(e, a, s) {
        var r = s("ABep"),
            t = s("QosV"),
            o = s("jqIZ"),
            n = s("HnGz"),
            c = s("hC2y"),
            m = s("AXDI"),
            i = s("NVla"),
            l = s("nlAI");
        s.d(a, {}, {
            a: function(e) {
                let a, s, p, f, d, j = (0, t.c)(14),
                    {
                        fallback: h
                    } = e,
                    {
                        pathname: b
                    } = (0, o.Y)();
                if (j[0] !== h || j[1] !== b) {
                    f = Symbol.for("react.early_return_sentinel");
                    e: {
                        let e = (0, n.g)(c.c, b);
                        if (null == e) {
                            let e;
                            j[6] !== b ? (e = (0, i.b)(b), j[6] = b, j[7] = e) : e = j[7];
                            let a = e;
                            if (null != a) {
                                let e;
                                j[8] !== a ? (e = (0, r.jsx)(l.a, {
                                    link: a
                                }), j[8] = a, j[9] = e) : e = j[9], f = e;
                                break e
                            }
                        }
                        a = m.a,
                        s = h,
                        p = null == e ? (0, r.jsx)(c.d, {}) : (0, o.O)(e)
                    }
                    j[0] = h, j[1] = b, j[2] = a, j[3] = s, j[4] = p, j[5] = f
                } else a = j[2], s = j[3], p = j[4], f = j[5];
                return f !== Symbol.for("react.early_return_sentinel") ? f : (j[10] !== a || j[11] !== s || j[12] !== p ? (d = (0, r.jsx)(a, {
                    fallback: s,
                    children: p
                }), j[10] = a, j[11] = s, j[12] = p, j[13] = d) : d = j[13], d)
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
} from "./633146.4981d79ae4.js";
import * as a from "./418851.7f18e986d5.js";
e.C(a);
import * as s from "./109308.e66696cd0d.js";
e.C(s);
import * as r from "./399565.6af208675d.js";
e.C(r);
import * as t from "./257798.b51742efd5.js";
e.C(t);
import * as o from "./447351.7f028af5cc.js";
e.C(o);
import * as n from "./617936.e33610e0b9.js";
e.C(n);
import * as c from "./807489.b2a4c99bd1.js";
e.C(c);
import * as m from "./337882.240014b3db.js";
e.C(m);
import * as i from "./955979.cac5f7aa7e.js";
e.C(i);
import * as l from "./646436.b849db233f.js";
e.C(l);
import * as p from "./7078.73ded76a8d.js";
e.C(p);
import * as f from "./200429.f68bf8c5d0.js";
e.C(f);
import * as d from "./698524.5c1f88ec3d.js";
e.C(d);
import * as j from "./956483.da8bcbe744.js";
e.C(j);
import * as h from "./87162.47f0360b7c.js";
e.C(h);
import * as b from "./396705.bfc19c0c6a.js";
e.C(b);
import * as u from "./155568.fb329e6a3b.js";
e.C(u);
import * as _ from "./731863.850a24e1c0.js";
e.C(_);
import * as C from "./767086.b68e569328.js";
e.C(C);
import * as x from "./76629.ca4c17c8af.js";
e.C(x);
import * as g from "./514085.6514ba1a89.js";
e.C(g);
import * as w from "./226913.27c93050ff.js";
e.C(w);
import * as k from "./902158.5a4b6c2c66.js";
e.C(k);
import * as v from "./340918.400c2ef409.js";
e.C(v);
var y = e(e.s = "fd8z"),
    P = y.a,
    A = y.b,
    I = y.c;
export {
    P as clientLoader, A as
    default, I as shouldRevalidate
};