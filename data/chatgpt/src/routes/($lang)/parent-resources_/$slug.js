import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    RV as t,
    VV as n,
    iH as r,
    nH as i,
    o as a,
    s as o,
    zV as s
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as c,
    At as l,
    Bn as u,
    Ut as d,
    Wt as f,
    ht as p,
    wn as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    n as h,
    t as g
} from "./2686af9f-d2qrll3k2995z1sk.js";
import {
    t as _
} from "./1fbff149-o5xkp37eq144138g.js";
import {
    t as v
} from "./c3e2d78f-dfx6ipda8gc0kf2d.js";
import {
    n as y,
    r as b
} from "./bb47c0a1-d1hvam8myjas7ee8.js";
import {
    n as x,
    t as S
} from "./6c802ee8-m338uqk3ludua1zs.js";
var C, w, T, E = e((() => {
        C = m(), v(), s(), h(), y(), w = u(), T = e => {
            "use forget";
            let t = (0, C.c)(15),
                {
                    link: r
                } = e,
                {
                    effectiveLocale: i,
                    slug: a
                } = b(),
                o;
            t[0] !== i || t[1] !== r.page?.slug || t[2] !== r.url ? (o = n(r.url, i) ?? r.page?.slug ?? `/`, t[0] = i, t[1] = r.page?.slug, t[2] = r.url, t[3] = o) : o = t[3];
            let s = o,
                c = r.external ? `a` : `link`,
                l = r.external,
                u;
            t[4] !== s || t[5] !== i || t[6] !== r.analyticsAction || t[7] !== a ? (u = () => {
                g.logClick({
                    analytics_identifier: r.analyticsAction,
                    destination_url: s,
                    locale: i,
                    page_slug: a
                })
            }, t[4] = s, t[5] = i, t[6] = r.analyticsAction, t[7] = a, t[8] = u) : u = t[8];
            let d;
            return t[9] !== c || t[10] !== s || t[11] !== r.label || t[12] !== l || t[13] !== u ? (d = (0, w.jsx)(_, {
                as: c,
                to: s,
                openNewTab: l,
                color: `primary`,
                onClick: u,
                children: r.label
            }), t[9] = c, t[10] = s, t[11] = r.label, t[12] = l, t[13] = u, t[14] = d) : d = t[14], d
        }
    })),
    D, O, k, A, j, M, N, P = e((() => {
        c(), D = m(), x(), E(), s(), r(), o(), O = u(), k = {
            hasRouteMeta: !0,
            useScrollRestoration: !0
        }, A = ({
            data: e,
            params: n,
            location: r
        }) => {
            let a = n.slug;
            return !e?.pageData || !a ? [{
                title: `ChatGPT`
            }] : [...i(e.pageData, r.pathname), ...t(`${p(e.routeConfig.routePath,{slug:a})}/`, {
                pageLocalizationConfig: e.pageLocalizationConfig
            })]
        }, j = () => {
            "use forget";
            let e = (0, D.c)(9),
                {
                    pageData: t,
                    footerData: n,
                    headerNavData: r,
                    locale: i,
                    routeConfig: a
                } = l(),
                o;
            e[0] !== t || e[1] !== a.showPageHeaderCta ? (o = a.showPageHeaderCta && t.headerCta ? (0, O.jsx)(T, {
                link: t.headerCta
            }) : void 0, e[0] = t, e[1] = a.showPageHeaderCta, e[2] = o) : o = e[2];
            let s = o,
                c;
            return e[3] !== n || e[4] !== s || e[5] !== r || e[6] !== i || e[7] !== t ? (c = (0, O.jsx)(S, {
                headerCta: s,
                page: t,
                footer: n,
                locale: i,
                headerNav: r,
                contentType: `featurePage`
            }), e[3] = n, e[4] = s, e[5] = r, e[6] = i, e[7] = t, e[8] = c) : c = e[8], c
        }, M = d(j), N = f(a)
    }));
e((() => {
    P()
}))();
export {
    N as ErrorBoundary, M as
    default, k as handle, A as meta
};
//# sourceMappingURL=contentful-dynamic-feature-page-5g2myu81.js.map