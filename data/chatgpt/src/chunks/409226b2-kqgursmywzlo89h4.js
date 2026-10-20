import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Crt as t,
    Fot as n,
    G5 as r,
    Iot as i,
    K5 as a,
    LH as o,
    PH as s,
    iH as c,
    oH as l
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as u,
    Bn as d,
    jt as f,
    wn as p
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    pGn as m
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Kv as h,
    TC as g,
    qv as _,
    wC as v
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    n as y,
    t as b
} from "./2686af9f-e42exn870idta7xq.js";
import {
    t as x
} from "./1fbff149-drcjhfbo8bteq3hu.js";
import {
    t as S
} from "./c3e2d78f-hri5j1zh8okhvj17.js";
import {
    n as C,
    t as w
} from "./088558a8-czcpaxkksn8hfsih.js";
import {
    n as T,
    r as E
} from "./bb47c0a1-in2pfyh60b3pska3.js";
import {
    i as D,
    r as O
} from "./3ab6f2a5-ky5rn7ehrzztwljm.js";

function k(e) {
    return e.toUpperCase()
}
var A, j, M, N = e((() => {
    A = p(), m(), O(), _(), g(), s(), c(), y(), i(), a(), u(), C(), S(), T(), j = d(), M = e => {
        "use forget";
        let i = (0, A.c)(36),
            {
                className: a,
                link: s,
                showIcon: c,
                children: u,
                style: d,
                ref: p
            } = e,
            m = c === void 0 || c,
            g = f(),
            {
                effectiveLocale: _,
                slug: y
            } = E(),
            S = s.enabledCountries?.map(k),
            C = n().userCountry?.toUpperCase();
        if (S && S.length > 0 && (!C || !S.includes(C))) return null;
        let T = s.style === `Primary Button` || s.style === `Accent Button` ? `primary` : s.style === `Primary Inverse Button` ? `primary-inverse` : s.style === `Outline Button` ? `secondary` : `ghost`,
            O = s.external ? `a` : `link`,
            M;
        if (i[0] !== _ || i[1] !== s.page || i[2] !== s.url || i[3] !== g.pathname || i[4] !== g.search) {
            let e = l(s.url, _) ?? (s.page?.slug ? o(s.page.slug) : `/`);
            M = D(g.pathname) ? t(e, g.search) : e, i[0] = _, i[1] = s.page, i[2] = s.url, i[3] = g.pathname, i[4] = g.search, i[5] = M
        } else M = i[5];
        let N = M,
            P = s.external,
            F;
        i[6] === s.icon ? F = i[7] : (F = w(s.icon), i[6] = s.icon, i[7] = F);
        let I = F,
            L;
        i[8] !== a || i[9] !== s.buttonClassName ? (L = r(a, s.buttonClassName), i[8] = a, i[9] = s.buttonClassName, i[10] = L) : L = i[10];
        let R;
        i[11] !== _ || i[12] !== s.analyticsAction || i[13] !== y || i[14] !== N ? (R = () => {
            b.logClick({
                analytics_identifier: s.analyticsAction,
                destination_url: N,
                locale: _,
                page_slug: y
            })
        }, i[11] = _, i[12] = s.analyticsAction, i[13] = y, i[14] = N, i[15] = R) : R = i[15];
        let z;
        i[16] !== u || i[17] !== s.label ? (z = u ?? (0, j.jsx)(`span`, {
            className: `relative`,
            children: s.label
        }), i[16] = u, i[17] = s.label, i[18] = z) : z = i[18];
        let B;
        i[19] !== s.external || i[20] !== s.showIcon || i[21] !== m ? (B = m && s.showIcon !== !1 && (0, j.jsx)(`span`, {
            className: `relative top-[0.5px] ms-1 flex items-center`,
            children: s.external ? (0, j.jsx)(h, {}) : (0, j.jsx)(v, {})
        }), i[19] = s.external, i[20] = s.showIcon, i[21] = m, i[22] = B) : B = i[22];
        let V;
        return i[23] !== I || i[24] !== O || i[25] !== T || i[26] !== s.buttonSize || i[27] !== P || i[28] !== p || i[29] !== d || i[30] !== L || i[31] !== R || i[32] !== z || i[33] !== B || i[34] !== N ? (V = (0, j.jsxs)(x, {
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
        }), i[23] = I, i[24] = O, i[25] = T, i[26] = s.buttonSize, i[27] = P, i[28] = p, i[29] = d, i[30] = L, i[31] = R, i[32] = z, i[33] = B, i[34] = N, i[35] = V) : V = i[35], V
    }
}));
export {
    N as n, M as t
};
//# sourceMappingURL=409226b2-kqgursmywzlo89h4.js.map