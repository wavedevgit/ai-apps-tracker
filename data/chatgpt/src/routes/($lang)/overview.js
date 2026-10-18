import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    RV as t,
    iH as n,
    o as r,
    rH as i,
    s as a,
    zV as o
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as s,
    At as c,
    Bn as l,
    Ut as u,
    Wt as d,
    wn as f
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    n as p,
    t as m
} from "./74754c62-hbvmz3kssipzs7t5.js";
import {
    a as h,
    n as g,
    o as _,
    t as v
} from "./fa5bef1d-gfnuionahjco4wl9.js";
var y, b, x, S, C, w, T, E = e((() => {
    s(), y = f(), p(), o(), n(), _(), g(), a(), b = l(), x = {
        hasRouteMeta: !0,
        useScrollRestoration: !0
    }, S = ({
        data: e,
        location: n
    }) => {
        let r = e?.routeConfig ?? v(n.pathname, h);
        return e?.pageData ? [...i(e.pageData, n.pathname), ...t(e.routeConfig.routePath, {
            pageLocalizationConfig: e.pageLocalizationConfig
        })] : [{
            title: r?.fallbackTitle ?? `ChatGPT`
        }]
    }, C = () => {
        "use forget";
        let e = (0, y.c)(5),
            {
                pageData: t,
                footerData: n,
                headerNavData: r,
                locale: i
            } = c(),
            a;
        return e[0] !== n || e[1] !== r || e[2] !== i || e[3] !== t ? (a = (0, b.jsx)(m, {
            page: t,
            footer: n,
            headerNav: r,
            locale: i
        }), e[0] = n, e[1] = r, e[2] = i, e[3] = t, e[4] = a) : a = e[4], a
    }, w = u(C), T = d(r)
}));
e((() => {
    E()
}))();
export {
    T as ErrorBoundary, w as
    default, x as handle, S as meta
};
//# sourceMappingURL=contentful-legacy-page-djvnogy7.js.map