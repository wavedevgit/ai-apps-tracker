import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bot as t,
    FH as n,
    Ort as r,
    RH as i,
    Vot as a,
    X5 as o,
    Y5 as s,
    aH as c,
    sH as l
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    At as u,
    Bn as d,
    Q as f,
    wn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    fGn as m
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Kv as h,
    TC as g,
    qv as _,
    wC as v
} from "./30901919-e8h11sw136qen6v0.js";
import {
    n as y,
    t as b
} from "./2686af9f-iev00l19as4g67mr.js";
import {
    t as x
} from "./1fbff149-gb0wzlfpl5ty76gm.js";
import {
    t as S
} from "./c3e2d78f-m9if2w1mh2slfzih.js";
import {
    n as C,
    t as w
} from "./088558a8-lgokgyux2qtnbjyd.js";
import {
    n as T,
    r as E
} from "./bb47c0a1-f3mze99y6p98ycp7.js";
import {
    i as D,
    r as O
} from "./3ab6f2a5-f9le1zx38mhwbn1z.js";

function k(e) {
    return e.toUpperCase()
}
var A, j, M, N = e((() => {
    A = p(), m(), O(), _(), g(), n(), c(), y(), a(), o(), f(), C(), S(), T(), j = d(), M = e => {
        "use forget";
        let n = (0, A.c)(36),
            {
                className: a,
                link: o,
                showIcon: c,
                children: d,
                style: f,
                ref: p
            } = e,
            m = c === void 0 || c,
            g = u(),
            {
                effectiveLocale: _,
                slug: y
            } = E(),
            S = o.enabledCountries?.map(k),
            C = t().userCountry?.toUpperCase();
        if (S && S.length > 0 && (!C || !S.includes(C))) return null;
        let T = o.style === `Primary Button` || o.style === `Accent Button` ? `primary` : o.style === `Primary Inverse Button` ? `primary-inverse` : o.style === `Outline Button` ? `secondary` : `ghost`,
            O = o.external ? `a` : `link`,
            M;
        if (n[0] !== _ || n[1] !== o.page || n[2] !== o.url || n[3] !== g.pathname || n[4] !== g.search) {
            let e = l(o.url, _) ?? (o.page?.slug ? i(o.page.slug) : `/`);
            M = D(g.pathname) ? r(e, g.search) : e, n[0] = _, n[1] = o.page, n[2] = o.url, n[3] = g.pathname, n[4] = g.search, n[5] = M
        } else M = n[5];
        let N = M,
            P = o.external,
            F;
        n[6] === o.icon ? F = n[7] : (F = w(o.icon), n[6] = o.icon, n[7] = F);
        let I = F,
            L;
        n[8] !== a || n[9] !== o.buttonClassName ? (L = s(a, o.buttonClassName), n[8] = a, n[9] = o.buttonClassName, n[10] = L) : L = n[10];
        let R;
        n[11] !== _ || n[12] !== o.analyticsAction || n[13] !== y || n[14] !== N ? (R = () => {
            b.logClick({
                analytics_identifier: o.analyticsAction,
                destination_url: N,
                locale: _,
                page_slug: y
            })
        }, n[11] = _, n[12] = o.analyticsAction, n[13] = y, n[14] = N, n[15] = R) : R = n[15];
        let z;
        n[16] !== d || n[17] !== o.label ? (z = d ?? (0, j.jsx)(`span`, {
            className: `relative`,
            children: o.label
        }), n[16] = d, n[17] = o.label, n[18] = z) : z = n[18];
        let B;
        n[19] !== o.external || n[20] !== o.showIcon || n[21] !== m ? (B = m && o.showIcon !== !1 && (0, j.jsx)(`span`, {
            className: `relative top-[0.5px] ms-1 flex items-center`,
            children: o.external ? (0, j.jsx)(h, {}) : (0, j.jsx)(v, {})
        }), n[19] = o.external, n[20] = o.showIcon, n[21] = m, n[22] = B) : B = n[22];
        let V;
        return n[23] !== I || n[24] !== O || n[25] !== T || n[26] !== o.buttonSize || n[27] !== P || n[28] !== p || n[29] !== f || n[30] !== L || n[31] !== R || n[32] !== z || n[33] !== B || n[34] !== N ? (V = (0, j.jsxs)(x, {
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
        }), n[23] = I, n[24] = O, n[25] = T, n[26] = o.buttonSize, n[27] = P, n[28] = p, n[29] = f, n[30] = L, n[31] = R, n[32] = z, n[33] = B, n[34] = N, n[35] = V) : V = n[35], V
    }
}));
export {
    N as n, M as t
};
//# sourceMappingURL=409226b2-hci33khgcwesa6em.js.map