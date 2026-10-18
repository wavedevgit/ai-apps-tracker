import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    VV as t,
    Xnt as n,
    b5 as r,
    cH as i,
    cot as a,
    dH as o,
    lot as s,
    y5 as c,
    zV as l
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as u,
    Bn as d,
    jt as f,
    wn as p
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    eGn as m
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    TC as h,
    Xv as g,
    Yv as _,
    wC as v
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    n as y,
    t as b
} from "./2686af9f-d2qrll3k2995z1sk.js";
import {
    t as x
} from "./1fbff149-o5xkp37eq144138g.js";
import {
    t as S
} from "./c3e2d78f-dfx6ipda8gc0kf2d.js";
import {
    n as C,
    t as w
} from "./088558a8-czcpaxkksn8hfsih.js";
import {
    n as T,
    r as E
} from "./bb47c0a1-d1hvam8myjas7ee8.js";
import {
    i as D,
    r as O
} from "./3ab6f2a5-lyiw3r3ld0q8y8bu.js";

function k(e) {
    return e.toUpperCase()
}
var A, j, M, N = e((() => {
    A = p(), m(), O(), g(), h(), i(), l(), y(), s(), r(), u(), C(), S(), T(), j = d(), M = e => {
        "use forget";
        let r = (0, A.c)(36),
            {
                className: i,
                link: s,
                showIcon: l,
                children: u,
                style: d,
                ref: p
            } = e,
            m = l === void 0 || l,
            h = f(),
            {
                effectiveLocale: g,
                slug: y
            } = E(),
            S = s.enabledCountries?.map(k),
            C = a().userCountry?.toUpperCase();
        if (S && S.length > 0 && (!C || !S.includes(C))) return null;
        let T = s.style === `Primary Button` || s.style === `Accent Button` ? `primary` : s.style === `Primary Inverse Button` ? `primary-inverse` : s.style === `Outline Button` ? `secondary` : `ghost`,
            O = s.external ? `a` : `link`,
            M;
        if (r[0] !== g || r[1] !== s.page || r[2] !== s.url || r[3] !== h.pathname || r[4] !== h.search) {
            let e = t(s.url, g) ?? (s.page?.slug ? o(s.page.slug) : `/`);
            M = D(h.pathname) ? n(e, h.search) : e, r[0] = g, r[1] = s.page, r[2] = s.url, r[3] = h.pathname, r[4] = h.search, r[5] = M
        } else M = r[5];
        let N = M,
            P = s.external,
            F;
        r[6] === s.icon ? F = r[7] : (F = w(s.icon), r[6] = s.icon, r[7] = F);
        let I = F,
            L;
        r[8] !== i || r[9] !== s.buttonClassName ? (L = c(i, s.buttonClassName), r[8] = i, r[9] = s.buttonClassName, r[10] = L) : L = r[10];
        let R;
        r[11] !== g || r[12] !== s.analyticsAction || r[13] !== y || r[14] !== N ? (R = () => {
            b.logClick({
                analytics_identifier: s.analyticsAction,
                destination_url: N,
                locale: g,
                page_slug: y
            })
        }, r[11] = g, r[12] = s.analyticsAction, r[13] = y, r[14] = N, r[15] = R) : R = r[15];
        let z;
        r[16] !== u || r[17] !== s.label ? (z = u ?? (0, j.jsx)(`span`, {
            className: `relative`,
            children: s.label
        }), r[16] = u, r[17] = s.label, r[18] = z) : z = r[18];
        let B;
        r[19] !== s.external || r[20] !== s.showIcon || r[21] !== m ? (B = m && s.showIcon !== !1 && (0, j.jsx)(`span`, {
            className: `relative top-[0.5px] ms-1 flex items-center`,
            children: s.external ? (0, j.jsx)(_, {}) : (0, j.jsx)(v, {})
        }), r[19] = s.external, r[20] = s.showIcon, r[21] = m, r[22] = B) : B = r[22];
        let V;
        return r[23] !== I || r[24] !== O || r[25] !== T || r[26] !== s.buttonSize || r[27] !== P || r[28] !== p || r[29] !== d || r[30] !== L || r[31] !== R || r[32] !== z || r[33] !== B || r[34] !== N ? (V = (0, j.jsxs)(x, {
            ref: p,
            style: d,
            className: L,
            color: T,
            size: s.buttonSize,
            as: O,
            to: N,
            openNewTab: P,
            onClick: R,
            icon: I,
            children: [z, B]
        }), r[23] = I, r[24] = O, r[25] = T, r[26] = s.buttonSize, r[27] = P, r[28] = p, r[29] = d, r[30] = L, r[31] = R, r[32] = z, r[33] = B, r[34] = N, r[35] = V) : V = r[35], V
    }
}));
export {
    N as n, M as t
};
//# sourceMappingURL=409226b2-dcy4jvm9n2z9ckyj.js.map