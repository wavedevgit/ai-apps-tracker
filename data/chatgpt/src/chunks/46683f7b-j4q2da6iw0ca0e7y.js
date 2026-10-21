import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Brt as t,
    Crt as n,
    Nrt as r,
    Rrt as i,
    Yrt as a,
    iH as o,
    oH as s
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as c,
    Bn as l,
    In as u,
    Rn as d,
    jt as f,
    wn as p,
    zn as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    pGn as h
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    TC as g,
    wC as _
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    n as v,
    t as y
} from "./2686af9f-e42exn870idta7xq.js";
import {
    t as b
} from "./1fbff149-drcjhfbo8bteq3hu.js";
import {
    t as x
} from "./c3e2d78f-hri5j1zh8okhvj17.js";
import {
    n as S,
    r as C
} from "./bb47c0a1-in2pfyh60b3pska3.js";
import {
    i as w,
    r as T
} from "./3ab6f2a5-ky5rn7ehrzztwljm.js";

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
        d(), a(), o(), r(), O(), k = {
            formattedMessage: t.LEARN_MORE,
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
                formattedMessage: t.contactSales,
                toURL: s(`/contact-sales`, e) ?? `/contact-sales`
            })
        }, N = ({
            conversionLink: e,
            locale: t = i,
            location: n
        }) => M[e.purpose]?.({
            locale: t,
            location: n
        }) ?? k
    }));

function F(e) {
    "use forget";
    let t = (0, I.c)(23),
        r = f(),
        i = m(),
        a = e.showIcon ?? !0,
        {
            effectiveLocale: o,
            slug: s
        } = C(),
        c, l, u, d, p, h, g;
    if (t[0] !== o || t[1] !== i || t[2] !== r || t[3] !== e || t[4] !== s) {
        let {
            formattedMessage: a,
            toURL: f
        } = N({
            conversionLink: e,
            locale: o,
            location: r
        }), m = w(r.pathname) ? n(f, r.search) : f;
        c = b, l = `a`, u = m, d = !1, p = e.className, h = () => {
            y.logClick({
                analytics_identifier: e.analyticsAction,
                destination_url: m,
                locale: o,
                page_slug: s,
                path: r.pathname
            })
        }, g = i.formatMessage(a), t[0] = o, t[1] = i, t[2] = r, t[3] = e, t[4] = s, t[5] = c, t[6] = l, t[7] = u, t[8] = d, t[9] = p, t[10] = h, t[11] = g
    } else c = t[5], l = t[6], u = t[7], d = t[8], p = t[9], h = t[10], g = t[11];
    let v;
    t[12] === a ? v = t[13] : (v = a && (0, L.jsx)(`span`, {
        className: `ms-1 flex items-center`,
        children: (0, L.jsx)(_, {})
    }), t[12] = a, t[13] = v);
    let x;
    return t[14] !== c || t[15] !== l || t[16] !== u || t[17] !== d || t[18] !== p || t[19] !== h || t[20] !== g || t[21] !== v ? (x = (0, L.jsxs)(c, {
        as: l,
        to: u,
        openNewTab: d,
        className: p,
        onClick: h,
        children: [g, v]
    }), t[14] = c, t[15] = l, t[16] = u, t[17] = d, t[18] = p, t[19] = h, t[20] = g, t[21] = v, t[22] = x) : x = t[22], x
}
var I, L, R = e((() => {
    I = p(), h(), T(), g(), v(), d(), c(), x(), S(), P(), L = l()
}));
export {
    P as i, R as n, N as r, F as t
};
//# sourceMappingURL=46683f7b-j4q2da6iw0ca0e7y.js.map