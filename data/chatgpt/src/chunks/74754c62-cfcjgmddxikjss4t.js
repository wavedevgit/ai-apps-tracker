import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Oz as n,
    kz as r
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as i,
    Vn as a,
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AGn as s,
    OGn as c,
    oKn as l,
    sKn as u
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    n as d,
    t as f
} from "./7b12be43-lyz40ete55kxilur.js";
import {
    n as p,
    t as m
} from "./0cb8459d-hnhuy7o3ezf6q9jk.js";
import {
    n as h,
    t as g
} from "./bb47c0a1-f3mze99y6p98ycp7.js";
import {
    n as _,
    t as v
} from "./10f2d773-bfzf78do6zzhmrrx.js";
import {
    a as y,
    i as b,
    n as x,
    o as S,
    r as C,
    t as w
} from "./d9e5e62d-e4jvl7tqtslo7zq8.js";

function T(e) {
    return p(e, f)
}

function E(e) {
    return p(e, f)
}
var D, O, k, A = e((() => {
    D = o(), a(), d(), b(), m(), O = i(), k = e => {
        "use forget";
        let t = (0, D.c)(12),
            {
                page: n,
                footer: r,
                leadSpacing: i
            } = e,
            a = i === void 0 ? `default` : i;
        if (n.layout.__typename !== `layout`) throw Error(`Page layout is not a layout`);
        let o, s;
        if (t[0] !== a || t[1] !== n.layout.components) {
            let e = n?.layout?.components ?? [],
                r = a === `tight` && e.length > 1;
            o = `mt-10 flex flex-col gap-20 overflow-x-clip pb-32 md:px-10`, s = r ? (0, O.jsxs)(O.Fragment, {
                children: [(0, O.jsxs)(`div`, {
                    className: `flex flex-col gap-8`,
                    children: [p(e[0], f), p(e[1], f)]
                }), e.slice(2).map(T)]
            }) : e.map(E), t[0] = a, t[1] = n.layout.components, t[2] = o, t[3] = s
        } else o = t[2], s = t[3];
        let c;
        t[4] !== o || t[5] !== s ? (c = (0, O.jsx)(`div`, {
            className: o,
            children: s
        }), t[4] = o, t[5] = s, t[6] = c) : c = t[6];
        let l;
        t[7] === r ? l = t[8] : (l = r && (0, O.jsx)(C, {
            footer: r
        }), t[7] = r, t[8] = l);
        let u;
        return t[9] !== c || t[10] !== l ? (u = (0, O.jsxs)(`div`, {
            children: [c, l]
        }), t[9] = c, t[10] = l, t[11] = u) : u = t[11], u
    }
}));

function j(e) {
    return !e
}
var M, N, P, F, I = e((() => {
    M = o(), s(), u(), r(), N = t(a()), h(), S(), _(), x(), A(), P = i(), F = e => {
        "use forget";
        let t = (0, M.c)(22),
            [r, i] = (0, N.useState)(!1),
            a;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = () => {
            i(j)
        }, t[0] = a) : a = t[0];
        let o = a,
            s = !!e.headerNav?.secondaryCta,
            u;
        t[1] === r ? u = t[2] : (u = {
            isNavigationMobileOpen: r,
            toggleNavigationMobile: o
        }, t[1] = r, t[2] = u);
        let d, f;
        t[3] !== s || t[4] !== e.headerNav ? (d = (0, P.jsx)(y, {
            navData: e.headerNav,
            isHeaderTooCrowdedForLg: s
        }), f = (0, P.jsx)(w, {
            data: e.headerNav,
            isHeaderTooCrowdedForLg: s
        }), t[3] = s, t[4] = e.headerNav, t[5] = d, t[6] = f) : (d = t[5], f = t[6]);
        let p;
        t[7] !== e.footer || t[8] !== e.page ? (p = (0, P.jsx)(`div`, {
            className: `pt-mkt-header-height`,
            children: (0, P.jsx)(k, {
                page: e.page,
                footer: e.footer,
                leadSpacing: `default`
            })
        }), t[7] = e.footer, t[8] = e.page, t[9] = p) : p = t[9];
        let m;
        t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, P.jsxs)(n, {
            children: [(0, P.jsx)(l, {}), (0, P.jsx)(c, {
                fixed: !0
            })]
        }), t[10] = m) : m = t[10];
        let h;
        t[11] !== d || t[12] !== f || t[13] !== p ? (h = (0, P.jsxs)(`div`, {
            className: `bg-token-bg-primary text-token-text-primary font-oai`,
            children: [d, f, p, m]
        }), t[11] = d, t[12] = f, t[13] = p, t[14] = h) : h = t[14];
        let _;
        t[15] !== e.locale || t[16] !== e.page.slug || t[17] !== h ? (_ = (0, P.jsx)(g, {
            effectiveLocale: e.locale,
            slug: e.page.slug,
            children: h
        }), t[15] = e.locale, t[16] = e.page.slug, t[17] = h, t[18] = _) : _ = t[18];
        let b;
        return t[19] !== u || t[20] !== _ ? (b = (0, P.jsx)(v.Provider, {
            value: u,
            children: _
        }), t[19] = u, t[20] = _, t[21] = b) : b = t[21], b
    }
}));
export {
    I as n, F as t
};
//# sourceMappingURL=74754c62-cfcjgmddxikjss4t.js.map