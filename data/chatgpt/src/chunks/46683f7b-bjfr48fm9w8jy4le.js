import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $rt as t,
    Drt as n,
    Hrt as r,
    Lrt as i,
    Wrt as a,
    iH as o,
    oH as s
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    At as c,
    Bn as l,
    In as u,
    Q as d,
    Rn as f,
    wn as p,
    zn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    lGn as h
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    TC as g,
    wC as _
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    n as v,
    t as y
} from "./2686af9f-dawy8jxaq75nc1t0.js";
import {
    t as b
} from "./1fbff149-n2djc7m1ar2tzvdq.js";
import {
    t as x
} from "./c3e2d78f-g7yg0x6c3bx7ra7n.js";
import {
    n as S,
    r as C
} from "./bb47c0a1-fuw2qturtqd6ks9x.js";
import {
    i as w,
    r as T
} from "./3ab6f2a5-jecs4sb803i47f8w.js";

function E({
    location: e
}) {
    let t = new URL(D);
    return e.pathname.includes(`/ai-for-sales-marketing`) && t.searchParams.set(`segment`, `sales_marketing`), t.toString()
}
var D, O = e((() => {
        D = `https://chatgpt.com/team-sign-up`
    })),
    k, A, j, M, N, P = e((() => {
        f(), t(), o(), i(), O(), k = {
            formattedMessage: a.LEARN_MORE,
            toURL: ``
        }, A = u({
            id: `gTBWGd`,
            defaultMessage: `Try ChatGPT Business`
        }), j = u({
            id: `Xo90TH`,
            defaultMessage: `Get started`
        }), M = {
            team: ({
                location: e
            }) => ({
                formattedMessage: A,
                toURL: E({
                    location: e
                })
            }),
            team_explicit: ({
                location: e
            }) => ({
                formattedMessage: A,
                toURL: E({
                    location: e
                })
            }),
            team_get_started: ({
                location: e
            }) => ({
                formattedMessage: j,
                toURL: E({
                    location: e
                })
            }),
            enterprise: ({
                locale: e
            }) => ({
                formattedMessage: a.contactSales,
                toURL: s(`/contact-sales`, e) ?? `/contact-sales`
            })
        }, N = ({
            conversionLink: e,
            locale: t = r,
            location: n
        }) => M[e.purpose]?.({
            locale: t,
            location: n
        }) ?? k
    }));

function F(e) {
    "use forget";
    let t = (0, I.c)(23),
        r = c(),
        i = m(),
        a = e.showIcon ?? !0,
        {
            effectiveLocale: o,
            slug: s
        } = C(),
        l, u, d, f, p, h, g;
    if (t[0] !== o || t[1] !== i || t[2] !== r || t[3] !== e || t[4] !== s) {
        let {
            formattedMessage: a,
            toURL: c
        } = N({
            conversionLink: e,
            locale: o,
            location: r
        }), m = w(r.pathname) ? n(c, r.search) : c;
        l = b, u = `a`, d = m, f = !1, p = e.className, h = () => {
            y.logClick({
                analytics_identifier: e.analyticsAction,
                destination_url: m,
                locale: o,
                page_slug: s,
                path: r.pathname
            })
        }, g = i.formatMessage(a), t[0] = o, t[1] = i, t[2] = r, t[3] = e, t[4] = s, t[5] = l, t[6] = u, t[7] = d, t[8] = f, t[9] = p, t[10] = h, t[11] = g
    } else l = t[5], u = t[6], d = t[7], f = t[8], p = t[9], h = t[10], g = t[11];
    let v;
    t[12] === a ? v = t[13] : (v = a && (0, L.jsx)(`span`, {
        className: `ms-1 flex items-center`,
        children: (0, L.jsx)(_, {})
    }), t[12] = a, t[13] = v);
    let x;
    return t[14] !== l || t[15] !== u || t[16] !== d || t[17] !== f || t[18] !== p || t[19] !== h || t[20] !== g || t[21] !== v ? (x = (0, L.jsxs)(l, {
        as: u,
        to: d,
        openNewTab: f,
        className: p,
        onClick: h,
        children: [g, v]
    }), t[14] = l, t[15] = u, t[16] = d, t[17] = f, t[18] = p, t[19] = h, t[20] = g, t[21] = v, t[22] = x) : x = t[22], x
}
var I, L, R = e((() => {
    I = p(), h(), T(), g(), v(), f(), d(), x(), S(), P(), L = l()
}));
export {
    P as i, R as n, N as r, F as t
};
//# sourceMappingURL=46683f7b-bjfr48fm9w8jy4le.js.map