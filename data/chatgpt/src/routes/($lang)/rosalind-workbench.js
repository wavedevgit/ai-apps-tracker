import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    RV as t,
    iH as n,
    nH as r,
    o as i,
    s as a,
    zV as o
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as s,
    At as c,
    Bn as l,
    Rn as u,
    Ut as d,
    Wt as f,
    wn as p,
    zn as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    n as h,
    t as g
} from "./6c802ee8-m338uqk3ludua1zs.js";
import {
    i as _,
    n as v,
    r as y,
    t as b
} from "./abd5d70b-bchvxm8z23xih0h1.js";
import {
    i as x,
    n as S,
    o as C,
    t as w
} from "./fa5bef1d-gfnuionahjco4wl9.js";
var T, E, D, O, k, A, j, M, N, P = e((() => {
    s(), T = p(), _(), h(), v(), o(), n(), C(), S(), a(), u(), E = l(), D = {
        hasRouteMeta: !0,
        useScrollRestoration: !0
    }, O = ({
        data: e,
        location: n
    }) => {
        let i = e?.routeConfig ?? w(n.pathname, x);
        return e?.pageData ? [...r(e.pageData, n.pathname), ...t(e.routeConfig.routePath, {
            pageLocalizationConfig: e.pageLocalizationConfig
        })] : [{
            title: i?.fallbackTitle ?? `ChatGPT`
        }]
    }, k = e => {
        "use forget";
        let t = (0, T.c)(5),
            {
                data: n
            } = e,
            {
                pageData: r,
                footerData: i,
                headerNavData: a,
                locale: o
            } = n,
            s;
        return t[0] !== i || t[1] !== a || t[2] !== o || t[3] !== r ? (s = (0, E.jsx)(g, {
            page: r,
            footer: i,
            locale: o,
            headerNav: a,
            contentType: `featurePage`
        }), t[0] = i, t[1] = a, t[2] = o, t[3] = r, t[4] = s) : s = t[4], s
    }, A = e => {
        "use forget";
        let t = (0, T.c)(9),
            {
                data: n
            } = e,
            {
                pageData: r,
                footerData: i,
                headerNavData: a,
                locale: o
            } = n,
            s = m(),
            c;
        t[0] !== a || t[1] !== s ? (c = y({
            headerNavData: a,
            intl: s
        }), t[0] = a, t[1] = s, t[2] = c) : c = t[2];
        let l = c,
            u;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, E.jsx)(b, {}), t[3] = u) : u = t[3];
        let d;
        return t[4] !== i || t[5] !== l || t[6] !== o || t[7] !== r ? (d = (0, E.jsx)(g, {
            page: r,
            footer: i,
            locale: o,
            headerNav: l,
            headerCta: u,
            contentType: `featurePage`
        }), t[4] = i, t[5] = l, t[6] = o, t[7] = r, t[8] = d) : d = t[8], d
    }, j = () => {
        "use forget";
        let e = (0, T.c)(4),
            t = c();
        if (t.routeConfig.headerVariant === `codex`) {
            let n;
            return e[0] === t ? n = e[1] : (n = (0, E.jsx)(A, {
                data: t
            }), e[0] = t, e[1] = n), n
        }
        let n;
        return e[2] === t ? n = e[3] : (n = (0, E.jsx)(k, {
            data: t
        }), e[2] = t, e[3] = n), n
    }, M = d(j), N = f(i)
}));
e((() => {
    P()
}))();
export {
    N as ErrorBoundary, M as
    default, D as handle, O as meta
};
//# sourceMappingURL=contentful-feature-page-f37j1d23.js.map