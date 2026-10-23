import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    K5 as t,
    VH as n,
    WH as r,
    eit as i,
    fH as a,
    fst as o,
    mH as s,
    pst as c,
    q5 as l
} from "./4813494d-mdvd4786a87166cc.js";
import {
    At as u,
    Bn as d,
    Q as f,
    wn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    uKn as m
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    CC as h,
    Gv as g,
    SC as _,
    Wv as v
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    n as y,
    t as b
} from "./2686af9f-mb4tkxkkstj432tw.js";
import {
    t as x
} from "./1fbff149-o2kjt5dd0vfhraa6.js";
import {
    t as S
} from "./c3e2d78f-gsmaawcg43m43apl.js";
import {
    n as C,
    t as w
} from "./088558a8-5di8se2z01em3dtn.js";
import {
    n as T,
    r as E
} from "./bb47c0a1-jxarkiwks948rpym.js";
import {
    i as D,
    r as O
} from "./3ab6f2a5-oj3ht2c8wx60852n.js";

function k(e) {
    return e.toUpperCase()
}
var A, j, M, N = e((() => {
    A = p(), m(), O(), g(), h(), n(), a(), y(), c(), l(), f(), C(), S(), T(), j = d(), M = e => {
        "use forget";
        let n = (0, A.c)(36),
            {
                className: a,
                link: c,
                showIcon: l,
                children: d,
                style: f,
                ref: p
            } = e,
            m = l === void 0 || l,
            h = u(),
            {
                effectiveLocale: g,
                slug: y
            } = E(),
            S = c.enabledCountries?.map(k),
            C = o().userCountry?.toUpperCase();
        if (S && S.length > 0 && (!C || !S.includes(C))) return null;
        let T = c.style === `Primary Button` || c.style === `Accent Button` ? `primary` : c.style === `Primary Inverse Button` ? `primary-inverse` : c.style === `Outline Button` ? `secondary` : `ghost`,
            O = c.external ? `a` : `link`,
            M;
        if (n[0] !== g || n[1] !== c.page || n[2] !== c.url || n[3] !== h.pathname || n[4] !== h.search) {
            let e = s(c.url, g) ?? (c.page?.slug ? r(c.page.slug) : `/`);
            M = D(h.pathname) ? i(e, h.search) : e, n[0] = g, n[1] = c.page, n[2] = c.url, n[3] = h.pathname, n[4] = h.search, n[5] = M
        } else M = n[5];
        let N = M,
            P = c.external,
            F;
        n[6] === c.icon ? F = n[7] : (F = w(c.icon), n[6] = c.icon, n[7] = F);
        let I = F,
            L;
        n[8] !== a || n[9] !== c.buttonClassName ? (L = t(a, c.buttonClassName), n[8] = a, n[9] = c.buttonClassName, n[10] = L) : L = n[10];
        let R;
        n[11] !== g || n[12] !== c.analyticsAction || n[13] !== y || n[14] !== N ? (R = () => {
            b.logClick({
                analytics_identifier: c.analyticsAction,
                destination_url: N,
                locale: g,
                page_slug: y
            })
        }, n[11] = g, n[12] = c.analyticsAction, n[13] = y, n[14] = N, n[15] = R) : R = n[15];
        let z;
        n[16] !== d || n[17] !== c.label ? (z = d ?? (0, j.jsx)(`span`, {
            className: `relative`,
            children: c.label
        }), n[16] = d, n[17] = c.label, n[18] = z) : z = n[18];
        let B;
        n[19] !== c.external || n[20] !== c.showIcon || n[21] !== m ? (B = m && c.showIcon !== !1 && (0, j.jsx)(`span`, {
            className: `relative top-[0.5px] ms-1 flex items-center`,
            children: c.external ? (0, j.jsx)(v, {}) : (0, j.jsx)(_, {})
        }), n[19] = c.external, n[20] = c.showIcon, n[21] = m, n[22] = B) : B = n[22];
        let V;
        return n[23] !== I || n[24] !== O || n[25] !== T || n[26] !== c.buttonSize || n[27] !== P || n[28] !== p || n[29] !== f || n[30] !== L || n[31] !== R || n[32] !== z || n[33] !== B || n[34] !== N ? (V = (0, j.jsxs)(x, {
            ref: p,
            style: f,
            className: L,
            color: T,
            size: c.buttonSize,
            as: O,
            to: N,
            openNewTab: P,
            onClick: R,
            icon: I,
            children: [z, B]
        }), n[23] = I, n[24] = O, n[25] = T, n[26] = c.buttonSize, n[27] = P, n[28] = p, n[29] = f, n[30] = L, n[31] = R, n[32] = z, n[33] = B, n[34] = N, n[35] = V) : V = n[35], V
    }
}));
export {
    N as n, M as t
};
//# sourceMappingURL=409226b2-foll6cetzcq05wel.js.map