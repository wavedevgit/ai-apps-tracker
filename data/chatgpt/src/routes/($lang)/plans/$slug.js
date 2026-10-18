import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    RV as n,
    i5 as r,
    iH as i,
    nH as a,
    o,
    pnt as s,
    s as c,
    ynt as l,
    zV as u
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as d,
    At as f,
    Bn as p,
    Rn as m,
    Ut as h,
    Wt as g,
    wn as _,
    zn as v
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    n as y,
    t as b
} from "./6c802ee8-m338uqk3ludua1zs.js";
import {
    a as x,
    i as S,
    n as C,
    o as w,
    r as T,
    t as E
} from "./0030787a-cheu7r0np8yob1mg.js";
var D, O, k = e((() => {
    D = `_upFxG_onboarding`, O = {
        onboarding: D
    }
}));

function A(e) {
    return !!e && N.includes(e)
}
var j, M, N, P, F, I, L, R, z = e((() => {
    d(), j = _(), y(), w(), E(), k(), t(), l(), u(), i(), c(), m(), M = p(), N = [`free`, `plus`, `pro`, `go`, `k12-teachers`, `healthcare`, `clinicians`], P = {
        hasRouteMeta: !0,
        useScrollRestoration: !0
    }, F = ({
        data: e,
        location: t,
        params: r
    }) => {
        let i = e,
            o = r.slug;
        return !i?.pageData || !A(o) ? [{
            title: `ChatGPT`
        }] : [...a(i.pageData, t.pathname), ...n(`plans/${o}`, {
            pageLocalizationConfig: i.pageLocalizationConfig
        })]
    }, I = h(function() {
        "use forget";
        let e = (0, j.c)(14),
            {
                pageData: t,
                footerData: n,
                headerNavData: r,
                locale: i,
                planSlug: a
            } = f(),
            o = v();
        if (a === `clinicians`) {
            let a;
            return e[0] !== n || e[1] !== r || e[2] !== i || e[3] !== t ? (a = (0, M.jsx)(L, {
                pageData: t,
                footerData: n,
                headerNavData: r,
                locale: i
            }), e[0] = n, e[1] = r, e[2] = i, e[3] = t, e[4] = a) : a = e[4], a
        }
        let s;
        e[5] !== r || e[6] !== o || e[7] !== a ? (s = r && {
            ...r,
            ...a === `k12-teachers` ? {
                cta: {
                    id: `cta`,
                    style: `Primary Button`,
                    label: o.formatMessage({
                        id: `k12PurchaseInterstitialPage.getVerifiedButton`,
                        defaultMessage: `Get verified`
                    }),
                    url: `/k12-verification/`,
                    analyticsAction: `header-nav-get-verified`
                },
                secondaryCta: {
                    id: `secondary-cta`,
                    style: `Secondary Inverse Button`,
                    label: o.formatMessage({
                        id: `common-message.contactUs`,
                        defaultMessage: `Contact us`
                    }),
                    url: `/contact-sales/`,
                    analyticsAction: `header-nav-contact-us`
                }
            } : {}
        }, e[5] = r, e[6] = o, e[7] = a, e[8] = s) : s = e[8];
        let c;
        return e[9] !== n || e[10] !== i || e[11] !== t || e[12] !== s ? (c = (0, M.jsx)(b, {
            page: t,
            footer: n,
            locale: i,
            headerNav: s,
            contentType: `featurePage`
        }), e[9] = n, e[10] = i, e[11] = t, e[12] = s, e[13] = c) : c = e[13], c
    }), L = e => {
        "use forget";
        let t = (0, j.c)(12),
            {
                pageData: n,
                footerData: i,
                headerNavData: a,
                locale: o
            } = e,
            c = v(),
            l;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (l = s(`1498338261`), t[0] = l) : l = t[0];
        let u = l,
            {
                enrollmentState: d
            } = C(),
            f;
        t[1] === d ? f = t[2] : (f = () => S(d), t[1] = d, t[2] = f);
        let p = r(f),
            m;
        t[3] !== c || t[4] !== n || t[5] !== p ? (m = p ? {
            ...n,
            heroCtaLabel: c.formatMessage(x.cta),
            heroCtaLink: T,
            heroCtaConversionLink: void 0
        } : n, t[3] = c, t[4] = n, t[5] = p, t[6] = m) : m = t[6];
        let h;
        if (t[7] !== i || t[8] !== a || t[9] !== o || t[10] !== m) {
            let e = (0, M.jsx)(b, {
                page: m,
                footer: i,
                headerNav: a,
                locale: o,
                contentType: `featurePage`
            });
            h = u ? (0, M.jsx)(`div`, {
                className: O.onboarding,
                children: e
            }) : e, t[7] = i, t[8] = a, t[9] = o, t[10] = m, t[11] = h
        } else h = t[11];
        return h
    }, R = g(o)
}));
e((() => {
    z()
}))();
export {
    R as ErrorBoundary, I as
    default, P as handle, F as meta
};
//# sourceMappingURL=(_lang).plans._slug-izy6c005.js.map