import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    FH as n,
    LH as r,
    dH as i,
    f0 as a,
    fH as o,
    o as s,
    p0 as c,
    s as l
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as u,
    Ht as d,
    Q as f,
    Rn as p,
    Ut as m,
    Vn as h,
    Vt as g,
    kt as _,
    wn as v,
    zn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AJ as b,
    Jet as x,
    Yet as S,
    jJ as C
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    n as w,
    t as T
} from "./6c802ee8-mwdakupip9e2ov6v.js";
import {
    i as E,
    n as D,
    r as O,
    t as k
} from "./abd5d70b-jc996y6i9bdroke6.js";
import {
    n as A,
    t as j
} from "./bc8b3e5b-d7ksr6a398pv06fo.js";
import {
    n as M,
    o as N,
    r as P,
    t as F
} from "./fa5bef1d-j538m8m1sbtioacp.js";

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
        c.current || (c.current = !0, b.recordCodexAppSurfaceView(`logged_out_landing`))
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
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, z.jsx)(x, {}), t[8] = f) : f = t[8];
    let p;
    return t[9] !== n || t[10] !== d ? (p = (0, z.jsxs)(j, {
        enabled: n,
        children: [d, f]
    }), t[9] = n, t[10] = d, t[11] = p) : p = t[11], p
}
var L, R, z, B = e((() => {
        L = v(), w(), S(), C(), R = t(h()), A(), z = u()
    })),
    V, H, U, W, G, K, q, J, Y, X, Z, Q = e((() => {
        f(), V = v(), E(), D(), a(), o(), r(), B(), N(), M(), l(), H = t(h()), p(), U = u(), W = `codex_cloud_login`, G = `callback_path`, K = {
            hasRouteMeta: !0,
            useScrollRestoration: !0
        }, q = ({
            data: e,
            location: t
        }) => {
            let r = e?.routeConfig ?? F(t.pathname, P);
            return e?.pageData ? [...n(e.pageData, t.pathname), ...i(e.routeConfig.routePath, {
                pageLocalizationConfig: e.pageLocalizationConfig
            })] : [{
                title: r?.fallbackTitle ?? `ChatGPT`
            }]
        }, J = () => {
            "use forget";
            let e = (0, V.c)(8),
                [t] = g(),
                n = (0, H.useRef)(!1),
                r;
            e[0] === t ? r = e[1] : (r = t.get(W), e[0] = t, e[1] = r);
            let i = r === `true`,
                a;
            if (e[2] !== t) {
                let n = t.get(G);
                a = n?.startsWith(`/codex/cloud`) === !0 ? n : `/codex/cloud`, e[2] = t, e[3] = a
            } else a = e[3];
            let o = a,
                s, l;
            return e[4] !== o || e[5] !== i ? (s = () => {
                !i || n.current || (n.current = !0, c({
                    callbackUrl: o,
                    fallbackScreenHint: `login`,
                    useFallbackScreenHint: !0,
                    skipLoginModal: !1
                }))
            }, l = [o, i], e[4] = o, e[5] = i, e[6] = s, e[7] = l) : (s = e[6], l = e[7]), (0, H.useEffect)(s, l), null
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
                } = _(),
                s = y(),
                c;
            e[0] !== r || e[1] !== s ? (c = O({
                headerNavData: r,
                intl: s
            }), e[0] = r, e[1] = s, e[2] = c) : c = e[2];
            let l = c,
                u;
            e[3] === o.variant ? u = e[4] : (u = o.variant === `index` && (0, U.jsx)(J, {}), e[3] = o.variant, e[4] = u);
            let d;
            e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, U.jsx)(k, {}), e[5] = d) : d = e[5];
            let f;
            e[6] !== a || e[7] !== n || e[8] !== l || e[9] !== i || e[10] !== t ? (f = (0, U.jsx)(I, {
                enableExternalPageOptimizations: a,
                pageData: t,
                footerData: n,
                headerNavData: l,
                headerCta: d,
                locale: i
            }), e[6] = a, e[7] = n, e[8] = l, e[9] = i, e[10] = t, e[11] = f) : f = e[11];
            let p;
            return e[12] !== u || e[13] !== f ? (p = (0, U.jsxs)(U.Fragment, {
                children: [u, f]
            }), e[12] = u, e[13] = f, e[14] = p) : p = e[14], p
        }, X = d(Y), Z = m(s)
    }));
export {
    q as a, Q as i, X as n, K as r, Z as t
};
//# sourceMappingURL=45e797a6-dvni65rx31ig6w23.js.map