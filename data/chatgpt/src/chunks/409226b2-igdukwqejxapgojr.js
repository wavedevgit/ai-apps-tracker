import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    VH as t,
    WH as n,
    ast as r,
    fH as i,
    l7 as a,
    mH as o,
    ost as s,
    qrt as c,
    u7 as l
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    At as u,
    Bn as d,
    Q as f,
    wn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    ZGn as m
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    Kv as h,
    TC as g,
    qv as _,
    wC as v
} from "./30901919-cmi3nh547dwrqkxv.js";
import {
    n as y,
    t as b
} from "./2686af9f-ihi9gnq9cdwjnguy.js";
import {
    t as x
} from "./1fbff149-o9oxd4tlxbnog5nk.js";
import {
    t as S
} from "./c3e2d78f-ejwdh8pqjmamf4pw.js";
import {
    n as C,
    t as w
} from "./088558a8-5di8se2z01em3dtn.js";
import {
    n as T,
    r as E
} from "./bb47c0a1-is9kvtqictpz4a8f.js";
import {
    i as D,
    r as O
} from "./3ab6f2a5-olluahyl2xtyowku.js";

function k(e) {
    return e.toUpperCase()
}
var A, j, M, N = e((() => {
    A = p(), m(), O(), _(), g(), t(), i(), y(), s(), l(), f(), C(), S(), T(), j = d(), M = e => {
        "use forget";
        let t = (0, A.c)(36),
            {
                className: i,
                link: s,
                showIcon: l,
                children: d,
                style: f,
                ref: p
            } = e,
            m = l === void 0 || l,
            g = u(),
            {
                effectiveLocale: _,
                slug: y
            } = E(),
            S = s.enabledCountries?.map(k),
            C = r().userCountry?.toUpperCase();
        if (S && S.length > 0 && (!C || !S.includes(C))) return null;
        let T = s.style === `Primary Button` || s.style === `Accent Button` ? `primary` : s.style === `Primary Inverse Button` ? `primary-inverse` : s.style === `Outline Button` ? `secondary` : `ghost`,
            O = s.external ? `a` : `link`,
            M;
        if (t[0] !== _ || t[1] !== s.page || t[2] !== s.url || t[3] !== g.pathname || t[4] !== g.search) {
            let e = o(s.url, _) ?? (s.page?.slug ? n(s.page.slug) : `/`);
            M = D(g.pathname) ? c(e, g.search) : e, t[0] = _, t[1] = s.page, t[2] = s.url, t[3] = g.pathname, t[4] = g.search, t[5] = M
        } else M = t[5];
        let N = M,
            P = s.external,
            F;
        t[6] === s.icon ? F = t[7] : (F = w(s.icon), t[6] = s.icon, t[7] = F);
        let I = F,
            L;
        t[8] !== i || t[9] !== s.buttonClassName ? (L = a(i, s.buttonClassName), t[8] = i, t[9] = s.buttonClassName, t[10] = L) : L = t[10];
        let R;
        t[11] !== _ || t[12] !== s.analyticsAction || t[13] !== y || t[14] !== N ? (R = () => {
            b.logClick({
                analytics_identifier: s.analyticsAction,
                destination_url: N,
                locale: _,
                page_slug: y
            })
        }, t[11] = _, t[12] = s.analyticsAction, t[13] = y, t[14] = N, t[15] = R) : R = t[15];
        let z;
        t[16] !== d || t[17] !== s.label ? (z = d ?? (0, j.jsx)(`span`, {
            className: `relative`,
            children: s.label
        }), t[16] = d, t[17] = s.label, t[18] = z) : z = t[18];
        let B;
        t[19] !== s.external || t[20] !== s.showIcon || t[21] !== m ? (B = m && s.showIcon !== !1 && (0, j.jsx)(`span`, {
            className: `relative top-[0.5px] ms-1 flex items-center`,
            children: s.external ? (0, j.jsx)(h, {}) : (0, j.jsx)(v, {})
        }), t[19] = s.external, t[20] = s.showIcon, t[21] = m, t[22] = B) : B = t[22];
        let V;
        return t[23] !== I || t[24] !== O || t[25] !== T || t[26] !== s.buttonSize || t[27] !== P || t[28] !== p || t[29] !== f || t[30] !== L || t[31] !== R || t[32] !== z || t[33] !== B || t[34] !== N ? (V = (0, j.jsxs)(x, {
            ref: p,
            style: f,
            className: L,
            color: T,
            size: s.buttonSize,
            as: O,
            to: N,
            openNewTab: P,
            onClick: R,
            icon: I,
            children: [z, B]
        }), t[23] = I, t[24] = O, t[25] = T, t[26] = s.buttonSize, t[27] = P, t[28] = p, t[29] = f, t[30] = L, t[31] = R, t[32] = z, t[33] = B, t[34] = N, t[35] = V) : V = t[35], V
    }
}));
export {
    N as n, M as t
};
//# sourceMappingURL=409226b2-igdukwqejxapgojr.js.map