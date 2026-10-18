import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    RV as r,
    iH as i,
    k1 as a,
    nH as o,
    o as s,
    s as c,
    zV as l
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as u,
    At as d,
    Bn as f,
    Ht as p,
    Rn as m,
    Ut as h,
    Vn as g,
    Wt as _,
    wn as v,
    zn as y
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    DJ as b,
    EJ as x,
    Jet as S,
    Yet as C
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as w,
    t as T
} from "./6c802ee8-m338uqk3ludua1zs.js";
import {
    i as E,
    n as D,
    r as O,
    t as k
} from "./abd5d70b-bchvxm8z23xih0h1.js";
import {
    n as A,
    t as j
} from "./bc8b3e5b-bpxompexis580w8f.js";
import {
    n as M,
    o as N,
    r as P,
    t as F
} from "./fa5bef1d-gfnuionahjco4wl9.js";

function I(e) {
    "use forget";
    let t = (0, L.c)(12),
        {
            enableExternalPageOptimizations: n,
            pageData: r,
            locale: i,
            footerData: a,
            headerNavData: o,
            headerCta: s
        } = e,
        c = (0, R.useRef)(!1),
        l, u;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (l = () => {
        c.current || (c.current = !0, x.recordCodexAppSurfaceView(`logged_out_landing`))
    }, u = [], t[0] = l, t[1] = u) : (l = t[0], u = t[1]), (0, R.useEffect)(l, u);
    let d;
    t[2] !== a || t[3] !== s || t[4] !== o || t[5] !== i || t[6] !== r ? (d = (0, z.jsx)(T, {
        page: r,
        footer: a,
        locale: i,
        headerNav: o,
        headerCta: s,
        contentType: `customPage`,
        layout: `codexPage`
    }), t[2] = a, t[3] = s, t[4] = o, t[5] = i, t[6] = r, t[7] = d) : d = t[7];
    let f;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, z.jsx)(S, {}), t[8] = f) : f = t[8];
    let p;
    return t[9] !== n || t[10] !== d ? (p = (0, z.jsxs)(j, {
        enabled: n,
        children: [d, f]
    }), t[9] = n, t[10] = d, t[11] = p) : p = t[11], p
}
var L, R, z, B = e((() => {
        L = v(), w(), C(), b(), R = t(g()), A(), z = f()
    })),
    V, H, U, W, G, K, q, J, Y, X, Z, Q = e((() => {
        u(), V = v(), E(), D(), a(), l(), i(), B(), N(), M(), c(), H = t(g()), m(), U = f(), W = `codex_cloud_login`, G = `callback_path`, K = {
            hasRouteMeta: !0,
            useScrollRestoration: !0
        }, q = ({
            data: e,
            location: t
        }) => {
            let n = e?.routeConfig ?? F(t.pathname, P);
            return e?.pageData ? [...o(e.pageData, t.pathname), ...r(e.routeConfig.routePath, {
                pageLocalizationConfig: e.pageLocalizationConfig
            })] : [{
                title: n?.fallbackTitle ?? `ChatGPT`
            }]
        }, J = () => {
            "use forget";
            let e = (0, V.c)(8),
                [t] = p(),
                r = (0, H.useRef)(!1),
                i;
            e[0] === t ? i = e[1] : (i = t.get(W), e[0] = t, e[1] = i);
            let a = i === `true`,
                o;
            if (e[2] !== t) {
                let n = t.get(G);
                o = n?.startsWith(`/codex/cloud`) === !0 ? n : `/codex/cloud`, e[2] = t, e[3] = o
            } else o = e[3];
            let s = o,
                c, l;
            return e[4] !== s || e[5] !== a ? (c = () => {
                !a || r.current || (r.current = !0, n({
                    callbackUrl: s,
                    fallbackScreenHint: `login`,
                    useFallbackScreenHint: !0,
                    skipLoginModal: !1
                }))
            }, l = [s, a], e[4] = s, e[5] = a, e[6] = c, e[7] = l) : (c = e[6], l = e[7]), (0, H.useEffect)(c, l), null
        }, Y = () => {
            "use forget";
            let e = (0, V.c)(15),
                {
                    pageData: t,
                    footerData: n,
                    headerNavData: r,
                    locale: i,
                    enableExternalPageOptimizations: a,
                    routeConfig: o
                } = d(),
                s = y(),
                c;
            e[0] !== r || e[1] !== s ? (c = O({
                headerNavData: r,
                intl: s
            }), e[0] = r, e[1] = s, e[2] = c) : c = e[2];
            let l = c,
                u;
            e[3] === o.variant ? u = e[4] : (u = o.variant === `index` && (0, U.jsx)(J, {}), e[3] = o.variant, e[4] = u);
            let f;
            e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, U.jsx)(k, {}), e[5] = f) : f = e[5];
            let p;
            e[6] !== a || e[7] !== n || e[8] !== l || e[9] !== i || e[10] !== t ? (p = (0, U.jsx)(I, {
                enableExternalPageOptimizations: a,
                pageData: t,
                footerData: n,
                headerNavData: l,
                headerCta: f,
                locale: i
            }), e[6] = a, e[7] = n, e[8] = l, e[9] = i, e[10] = t, e[11] = p) : p = e[11];
            let m;
            return e[12] !== u || e[13] !== p ? (m = (0, U.jsxs)(U.Fragment, {
                children: [u, p]
            }), e[12] = u, e[13] = p, e[14] = m) : m = e[14], m
        }, X = h(Y), Z = _(s)
    }));
export {
    q as a, Q as i, X as n, K as r, Z as t
};
//# sourceMappingURL=45e797a6-isfgqckgp4686hhk.js.map