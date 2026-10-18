import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    RV as t,
    _nt as n,
    iH as r,
    nH as i,
    o as a,
    s as o,
    ynt as s,
    zV as c
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as l,
    At as u,
    Bn as d,
    Ln as f,
    Rn as p,
    Ut as m,
    Wt as h,
    wn as g,
    zn as _
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    n as v,
    t as y
} from "./6c802ee8-m338uqk3ludua1zs.js";
var b, x, S, C, w, T, E, D = e((() => {
    l(), b = g(), v(), c(), r(), s(), o(), p(), x = d(), S = f({
        heroBody: {
            id: `5i+O8L`,
            defaultMessage: `Get started with Codex and ChatGPT Business.`
        },
        enterpriseFirstHeroBody: {
            id: `chatgpt.contact_sales.hero.subtitle.enterprise_first`,
            defaultMessage: `Get help evaluating and deploying ChatGPT and OpenAI’s models across your organization.`
        }
    }), C = {
        hasRouteMeta: !0,
        useScrollRestoration: !0
    }, w = ({
        data: e,
        location: n
    }) => {
        let r = e;
        return r?.pageData ? [...i(r.pageData, n.pathname), ...t(`/contact-sales/`, {
            pageLocalizationConfig: r.pageLocalizationConfig
        })] : [{
            title: `Contact sales | OpenAI`
        }]
    }, T = m(function() {
        "use forget";
        let e = (0, b.c)(12),
            {
                pageData: t,
                footerData: r,
                headerNavData: i,
                locale: a
            } = u(),
            o = _(),
            s, c;
        if (e[0] !== o || e[1] !== t) {
            let r = n(`155366596`);
            s = t, c = o.formatMessage(r.get(`variant`, 0) > 0 ? S.enterpriseFirstHeroBody : S.heroBody), e[0] = o, e[1] = t, e[2] = s, e[3] = c
        } else s = e[2], c = e[3];
        let l;
        e[4] !== s || e[5] !== c ? (l = {
            ...s,
            heroBody: c,
            heroCtaLabel: void 0,
            heroCtaLink: void 0,
            heroCtaConversionLink: void 0
        }, e[4] = s, e[5] = c, e[6] = l) : l = e[6];
        let d = l,
            f;
        return e[7] !== d || e[8] !== r || e[9] !== i || e[10] !== a ? (f = (0, x.jsx)(y, {
            page: d,
            footer: r,
            locale: a,
            headerNav: i,
            contentType: `formPage`,
            layout: `contactSales`
        }), e[7] = d, e[8] = r, e[9] = i, e[10] = a, e[11] = f) : f = e[11], f
    }), E = h(a)
}));
e((() => {
    D()
}))();
export {
    E as ErrorBoundary, T as
    default, C as handle, w as meta
};
//# sourceMappingURL=(_lang).contact-sales-lvj1i6qg.js.map