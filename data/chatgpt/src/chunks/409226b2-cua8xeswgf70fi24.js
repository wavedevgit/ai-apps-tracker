import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bot as t,
    Drt as n,
    J5 as r,
    LH as i,
    PH as a,
    Y5 as o,
    iH as s,
    oH as c,
    zot as l
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    At as u,
    Bn as d,
    Q as f,
    wn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    lGn as m
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Kv as h,
    TC as g,
    qv as _,
    wC as v
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    n as y,
    t as b
} from "./2686af9f-dawy8jxaq75nc1t0.js";
import {
    t as x
} from "./1fbff149-n2djc7m1ar2tzvdq.js";
import {
    t as S
} from "./c3e2d78f-g7yg0x6c3bx7ra7n.js";
import {
    n as C,
    t as w
} from "./088558a8-lgokgyux2qtnbjyd.js";
import {
    n as T,
    r as E
} from "./bb47c0a1-fuw2qturtqd6ks9x.js";
import {
    i as D,
    r as O
} from "./3ab6f2a5-jecs4sb803i47f8w.js";

function k(e) {
    return e.toUpperCase()
}
var A, j, M, N = e((() => {
    A = p(), m(), O(), _(), g(), a(), s(), y(), t(), o(), f(), C(), S(), T(), j = d(), M = e => {
        "use forget";
        let t = (0, A.c)(36),
            {
                className: a,
                link: o,
                showIcon: s,
                children: d,
                style: f,
                ref: p
            } = e,
            m = s === void 0 || s,
            g = u(),
            {
                effectiveLocale: _,
                slug: y
            } = E(),
            S = o.enabledCountries?.map(k),
            C = l().userCountry?.toUpperCase();
        if (S && S.length > 0 && (!C || !S.includes(C))) return null;
        let T = o.style === `Primary Button` || o.style === `Accent Button` ? `primary` : o.style === `Primary Inverse Button` ? `primary-inverse` : o.style === `Outline Button` ? `secondary` : `ghost`,
            O = o.external ? `a` : `link`,
            M;
        if (t[0] !== _ || t[1] !== o.page || t[2] !== o.url || t[3] !== g.pathname || t[4] !== g.search) {
            let e = c(o.url, _) ?? (o.page?.slug ? i(o.page.slug) : `/`);
            M = D(g.pathname) ? n(e, g.search) : e, t[0] = _, t[1] = o.page, t[2] = o.url, t[3] = g.pathname, t[4] = g.search, t[5] = M
        } else M = t[5];
        let N = M,
            P = o.external,
            F;
        t[6] === o.icon ? F = t[7] : (F = w(o.icon), t[6] = o.icon, t[7] = F);
        let I = F,
            L;
        t[8] !== a || t[9] !== o.buttonClassName ? (L = r(a, o.buttonClassName), t[8] = a, t[9] = o.buttonClassName, t[10] = L) : L = t[10];
        let R;
        t[11] !== _ || t[12] !== o.analyticsAction || t[13] !== y || t[14] !== N ? (R = () => {
            b.logClick({
                analytics_identifier: o.analyticsAction,
                destination_url: N,
                locale: _,
                page_slug: y
            })
        }, t[11] = _, t[12] = o.analyticsAction, t[13] = y, t[14] = N, t[15] = R) : R = t[15];
        let z;
        t[16] !== d || t[17] !== o.label ? (z = d ?? (0, j.jsx)(`span`, {
            className: `relative`,
            children: o.label
        }), t[16] = d, t[17] = o.label, t[18] = z) : z = t[18];
        let B;
        t[19] !== o.external || t[20] !== o.showIcon || t[21] !== m ? (B = m && o.showIcon !== !1 && (0, j.jsx)(`span`, {
            className: `relative top-[0.5px] ms-1 flex items-center`,
            children: o.external ? (0, j.jsx)(h, {}) : (0, j.jsx)(v, {})
        }), t[19] = o.external, t[20] = o.showIcon, t[21] = m, t[22] = B) : B = t[22];
        let V;
        return t[23] !== I || t[24] !== O || t[25] !== T || t[26] !== o.buttonSize || t[27] !== P || t[28] !== p || t[29] !== f || t[30] !== L || t[31] !== R || t[32] !== z || t[33] !== B || t[34] !== N ? (V = (0, j.jsxs)(x, {
            ref: p,
            style: f,
            className: L,
            color: T,
            size: o.buttonSize,
            as: O,
            to: N,
            openNewTab: P,
            onClick: R,
            icon: I,
            children: [z, B]
        }), t[23] = I, t[24] = O, t[25] = T, t[26] = o.buttonSize, t[27] = P, t[28] = p, t[29] = f, t[30] = L, t[31] = R, t[32] = z, t[33] = B, t[34] = N, t[35] = V) : V = t[35], V
    }
}));
export {
    N as n, M as t
};
//# sourceMappingURL=409226b2-cua8xeswgf70fi24.js.map