import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    cit as t,
    fH as n,
    mH as r,
    qrt as i,
    rit as a,
    uit as o,
    yit as s
} from "./4813494d-r54yv6lv29x4ew99.js";
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
    JGn as h
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    CC as g,
    SC as _
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    n as v,
    t as y
} from "./2686af9f-p3s94v09n9l22ywe.js";
import {
    t as b
} from "./1fbff149-n2q0ie3krtrk6zu1.js";
import {
    t as x
} from "./c3e2d78f-mk0itzwq8n3g2qb4.js";
import {
    n as S,
    r as C
} from "./bb47c0a1-ld6xpj8jome8uo17.js";
import {
    i as w,
    r as T
} from "./3ab6f2a5-ducot25hjttpm7vk.js";

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
        f(), s(), n(), a(), O(), k = {
            formattedMessage: o.LEARN_MORE,
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
                formattedMessage: o.contactSales,
                toURL: r(`/contact-sales`, e) ?? `/contact-sales`
            })
        }, N = ({
            conversionLink: e,
            locale: n = t,
            location: r
        }) => M[e.purpose]?.({
            locale: n,
            location: r
        }) ?? k
    }));

function F(e) {
    "use forget";
    let t = (0, I.c)(23),
        n = c(),
        r = m(),
        a = e.showIcon ?? !0,
        {
            effectiveLocale: o,
            slug: s
        } = C(),
        l, u, d, f, p, h, g;
    if (t[0] !== o || t[1] !== r || t[2] !== n || t[3] !== e || t[4] !== s) {
        let {
            formattedMessage: a,
            toURL: c
        } = N({
            conversionLink: e,
            locale: o,
            location: n
        }), m = w(n.pathname) ? i(c, n.search) : c;
        l = b, u = `a`, d = m, f = !1, p = e.className, h = () => {
            y.logClick({
                analytics_identifier: e.analyticsAction,
                destination_url: m,
                locale: o,
                page_slug: s,
                path: n.pathname
            })
        }, g = r.formatMessage(a), t[0] = o, t[1] = r, t[2] = n, t[3] = e, t[4] = s, t[5] = l, t[6] = u, t[7] = d, t[8] = f, t[9] = p, t[10] = h, t[11] = g
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
//# sourceMappingURL=46683f7b-m4v9e8mx1xol4df6.js.map