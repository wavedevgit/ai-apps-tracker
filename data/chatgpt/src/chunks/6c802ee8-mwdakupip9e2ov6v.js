import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fz as n,
    Iz as r,
    c7 as i,
    l7 as a
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as o,
    Q as s,
    Vn as c,
    it as l,
    wn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    EKn as d,
    EWn as f,
    TKn as ee,
    YGn as p,
    qGn as m,
    wWn as h
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    CC as g,
    SC as _
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    n as v,
    t as y
} from "./2686af9f-ilqq14v22ndqwxq8.js";
import {
    n as b,
    t as x
} from "./7b12be43-lswngmrt6j26cjdk.js";
import {
    a as S,
    i as C,
    n as te,
    o as w
} from "./f9d93d16-hr6yzrsuavtsp03x.js";
import {
    n as T,
    t as E
} from "./0cb8459d-d3ip3c718ixwm2fk.js";
import {
    t as ne
} from "./1fbff149-mti9buoenbidf7s6.js";
import {
    t as D
} from "./c3e2d78f-f6ikbv40vvkkb9li.js";
import {
    n as O,
    t as k
} from "./088558a8-lgokgyux2qtnbjyd.js";
import {
    n as A,
    r as j
} from "./bb47c0a1-tl7q0ny4jn9lxg5o.js";
import {
    n as M,
    t as N
} from "./46683f7b-kwa0ble3hcllred4.js";
import {
    r as P,
    t as F
} from "./ee72d6dc-df8ms5e0harr0ux3.js";
import {
    r as I,
    t as L
} from "./eb36fa13-cibuhugqv2ijs34q.js";
import {
    n as R,
    t as z
} from "./0bb44966-matrvomsbdr58cpz.js";
import {
    r as B,
    t as V
} from "./e4a3058c-etr58enwq66qy8x7.js";
import {
    n as H,
    t as U
} from "./c553d4b9-cn823e0gsr4cbhoc.js";
import {
    n as W,
    t as G
} from "./b2c255f5-dgzm1bcta7422yc7.js";
import {
    i as K,
    n as re,
    r as q
} from "./3a6eb079-hjakmv42muhkqjzj.js";

function ie(e) {
    "use forget";
    let t = (0, ae.c)(52),
        {
            eyebrow: n,
            title: r,
            titleClassName: a,
            description: o,
            mustache: s,
            primaryCta: c,
            primaryConversionCta: u,
            secondaryCta: d,
            media: f,
            variant: ee,
            customCtaSlot: p
        } = e,
        m = ee === void 0 ? `default` : ee,
        {
            slug: h,
            theme: g,
            effectiveLocale: v
        } = j(),
        b = d?.color ?? `ghost`,
        x = b === `ghost`,
        S;
    t[0] !== v || t[1] !== h ? (S = {
        a: e => {
            let {
                node: t,
                href: n,
                children: r,
                ...i
            } = e;
            return (0, Y.jsx)(l, {
                className: `hover:text-token-text-primary/60 underline underline-offset-2 transition-colors`,
                onClick: () => {
                    y.logClick({
                        analytics_identifier: L(h, `feature-page-hero-body-link`),
                        destination_url: n,
                        locale: v,
                        page_slug: h
                    })
                },
                to: n,
                ...i,
                children: r
            })
        }
    }, t[0] = v, t[1] = h, t[2] = S) : S = t[2];
    let C = S,
        te = r != null && r.trim().length > 0,
        w = J.Children.count(p) > 0,
        T = !!c || !!u || w,
        E = w && !c && !u && !d;
    if (!(te || n || o || s || T || d || f)) return null;
    let D;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (D = i(`items-center not-first:pt-46 not-first:sm:pt-20`), t[3] = D) : D = t[3];
    let O = n ? `tight` : `hero`,
        A = m === `centered`,
        M = m === "default",
        P;
    t[4] !== A || t[5] !== M ? (P = i(`col-span-12`, {
        "text-center sm:col-span-8 sm:col-start-3": A,
        "sm:col-span-6 xl:col-span-5 xl:col-start-2": M
    }), t[4] = A, t[5] = M, t[6] = P) : P = t[6];
    let I;
    t[7] !== n || t[8] !== m ? (I = n && (0, Y.jsx)(`p`, {
        className: i(`text-token-text-primary/60 text-mkt-p2 mb-8 w-[80%] max-w-[460px] font-medium text-balance`, {
            "mx-auto": m === `centered`
        }),
        children: n
    }), t[7] = n, t[8] = m, t[9] = I) : I = t[9];
    let R;
    t[10] === a ? R = t[11] : (R = i(`text-mkt-h1 text-balance`, a), t[10] = a, t[11] = R);
    let B;
    t[12] !== R || t[13] !== r ? (B = (0, Y.jsx)(`h1`, {
        id: `feature-page-hero`,
        className: R,
        children: r
    }), t[12] = R, t[13] = r, t[14] = B) : B = t[14];
    let V;
    t[15] !== o || t[16] !== C || t[17] !== m ? (V = o && (0, Y.jsx)(`div`, {
        className: i(`mt-8 w-[90%] max-w-[460px] text-balance xl:text-pretty`, {
            "mx-auto": m === `centered`
        }),
        children: (0, Y.jsx)(oe, {
            components: C,
            children: o
        })
    }), t[15] = o, t[16] = C, t[17] = m, t[18] = V) : V = t[18];
    let H;
    t[19] !== C || t[20] !== s || t[21] !== m ? (H = s && (0, Y.jsx)(`div`, {
        className: i(`text-token-text-primary/60 text-mkt-p2 mt-6 w-[80%] max-w-[460px] font-medium text-balance`, {
            "mx-auto": m === `centered`
        }),
        children: (0, Y.jsx)(oe, {
            components: C,
            children: s
        })
    }), t[19] = C, t[20] = s, t[21] = m, t[22] = H) : H = t[22];
    let U;
    t[23] !== p || t[24] !== o || t[25] !== v || t[26] !== T || t[27] !== E || t[28] !== x || t[29] !== s || t[30] !== u || t[31] !== c || t[32] !== d || t[33] !== b || t[34] !== h || t[35] !== m ? (U = T && (0, Y.jsxs)(`div`, {
        className: i(`flex w-fit flex-wrap gap-2`, {
            "mx-auto justify-center": m === `centered`,
            "mt-6": o || s,
            "mt-12": !o && !s && E,
            "mt-2": !o && !s && !E
        }),
        children: [u ? (0, Y.jsx)(N, {
            ...u
        }) : c && (0, Y.jsx)(ne, {
            className: c.className,
            color: c.color ?? `primary`,
            size: c.size,
            icon: k(c.icon),
            as: `link`,
            to: c.href,
            onClick: () => {
                y.logClick({
                    analytics_identifier: c.analyticsAction,
                    destination_url: c.href,
                    locale: v,
                    page_slug: h
                })
            },
            children: c.label
        }), p, d && (0, Y.jsxs)(ne, {
            color: b,
            icon: k(d.icon),
            as: `link`,
            to: d.href,
            contentWrapperClassName: i({
                "gap-1": x
            }),
            onClick: () => {
                y.logClick({
                    analytics_identifier: d.analyticsAction,
                    destination_url: d.href,
                    locale: v,
                    page_slug: h
                })
            },
            children: [d.label, x && (0, Y.jsx)(_, {
                className: `icon-sm`
            })]
        })]
    }), t[23] = p, t[24] = o, t[25] = v, t[26] = T, t[27] = E, t[28] = x, t[29] = s, t[30] = u, t[31] = c, t[32] = d, t[33] = b, t[34] = h, t[35] = m, t[36] = U) : U = t[36];
    let W;
    t[37] !== B || t[38] !== V || t[39] !== H || t[40] !== U || t[41] !== P || t[42] !== I ? (W = (0, Y.jsxs)(`div`, {
        className: P,
        children: [I, B, V, H, U]
    }), t[37] = B, t[38] = V, t[39] = H, t[40] = U, t[41] = P, t[42] = I, t[43] = W) : W = t[43];
    let G;
    t[44] !== f || t[45] !== g || t[46] !== m ? (G = f && (0, Y.jsx)(`div`, {
        className: i(`col-span-12`, {
            "-order-1 sm:col-span-8 sm:col-start-3": m === `centered`,
            "sm:col-span-6 xl:col-span-5": m === "default"
        }),
        children: (0, Y.jsx)(F, {
            ...f.__typename === `componentVariant` ? f.components[g ?? 0] : f,
            className: i(`overflow-hidden`, {
                "aspect-square": m === "default",
                "mx-auto h-20! w-20!": m === `centered`
            }),
            rounding: m === "default" ? `rounded` : `app-icon`
        })
    }), t[44] = f, t[45] = g, t[46] = m, t[47] = G) : G = t[47];
    let K;
    return t[48] !== W || t[49] !== G || t[50] !== O ? (K = (0, Y.jsxs)(z, {
        className: D,
        spacingAbove: O,
        ariaLabelledby: `feature-page-hero`,
        children: [W, G]
    }), t[48] = W, t[49] = G, t[50] = O, t[51] = K) : K = t[51], K
}
var ae, J, Y, oe, se = e((() => {
    ae = u(), D(), O(), A(), M(), P(), g(), v(), I(), a(), J = t(c()), h(), s(), R(), Y = o(), oe = (0, J.memo)(f)
}));

function ce(e) {
    return e.__typename && e.__typename in x ? T(e, x) : e.reactComponent && e.reactComponent in S ? C(e.reactComponent, e) : null
}
var le, ue, de, fe = e((() => {
    le = u(), b(), w(), E(), se(), c(), B(), te(), ue = o(), de = e => {
        "use forget";
        let t = (0, le.c)(42);
        if (e.contentType === `customPage`) return null;
        if (e.contentType === `featurePage`) {
            let n = e.page,
                r;
            t[0] === n.slug ? r = t[1] : (r = n.slug?.split(`/`)?.at(-1) ?? ``, t[0] = n.slug, t[1] = r);
            let i = r,
                a;
            t[2] === n.heroCustomCTAs ? a = t[3] : (a = n.heroCustomCTAs?.map(ce).filter(Boolean), t[2] = n.heroCustomCTAs, t[3] = a);
            let o = a,
                s;
            t[4] !== n.heroCTAClassName || t[5] !== n.heroCTAColor || t[6] !== n.heroCTASize || t[7] !== n.heroCtaIcon || t[8] !== n.heroCtaLabel || t[9] !== n.heroCtaLink || t[10] !== i ? (s = n.heroCtaLabel ? {
                label: n.heroCtaLabel,
                href: n.heroCtaLink ?? ``,
                icon: n.heroCtaIcon,
                analyticsAction: `feature-${i}-hero-cta`,
                color: n.heroCTAColor,
                size: n.heroCTASize,
                className: n.heroCTAClassName
            } : void 0, t[4] = n.heroCTAClassName, t[5] = n.heroCTAColor, t[6] = n.heroCTASize, t[7] = n.heroCtaIcon, t[8] = n.heroCtaLabel, t[9] = n.heroCtaLink, t[10] = i, t[11] = s) : s = t[11];
            let c;
            t[12] !== n.heroSecondaryCTAColor || t[13] !== n.heroSecondaryCtaIcon || t[14] !== n.heroSecondaryCtaLabel || t[15] !== n.heroSecondaryCtaLink || t[16] !== i ? (c = n.heroSecondaryCtaLabel ? {
                label: n.heroSecondaryCtaLabel ?? ``,
                href: n.heroSecondaryCtaLink ?? ``,
                icon: n.heroSecondaryCtaIcon,
                analyticsAction: `feature-${i}-hero-secondary-cta`,
                color: n.heroSecondaryCTAColor
            } : void 0, t[12] = n.heroSecondaryCTAColor, t[13] = n.heroSecondaryCtaIcon, t[14] = n.heroSecondaryCtaLabel, t[15] = n.heroSecondaryCtaLink, t[16] = i, t[17] = c) : c = t[17];
            let l;
            return t[18] !== o || t[19] !== n.heroBody || t[20] !== n.heroCtaConversionLink || t[21] !== n.heroEyebrow || t[22] !== n.heroMedia || t[23] !== n.heroMustache || t[24] !== n.heroTitle || t[25] !== n.heroTitleClassName || t[26] !== n.heroVariant || t[27] !== s || t[28] !== c ? (l = (0, ue.jsx)(ie, {
                eyebrow: n.heroEyebrow,
                title: n.heroTitle,
                titleClassName: n.heroTitleClassName,
                description: n.heroBody,
                mustache: n.heroMustache,
                primaryConversionCta: n.heroCtaConversionLink,
                primaryCta: s,
                secondaryCta: c,
                media: n.heroMedia,
                variant: n.heroVariant,
                customCtaSlot: o
            }), t[18] = o, t[19] = n.heroBody, t[20] = n.heroCtaConversionLink, t[21] = n.heroEyebrow, t[22] = n.heroMedia, t[23] = n.heroMustache, t[24] = n.heroTitle, t[25] = n.heroTitleClassName, t[26] = n.heroVariant, t[27] = s, t[28] = c, t[29] = l) : l = t[29], l
        }
        let n = e.page,
            r;
        t[30] === n.slug ? r = t[31] : (r = n.slug?.split(`/`)?.at(-1) ?? ``, t[30] = n.slug, t[31] = r);
        let i = `guide-${r}-hero-cta`,
            a;
        t[32] !== n.heroCtaLabel || t[33] !== n.heroCtaLink || t[34] !== i ? (a = {
            label: n.heroCtaLabel,
            link: n.heroCtaLink,
            analyticsAction: i
        }, t[32] = n.heroCtaLabel, t[33] = n.heroCtaLink, t[34] = i, t[35] = a) : a = t[35];
        let o;
        return t[36] !== n.heroBody || t[37] !== n.heroTitle || t[38] !== e.contentType || t[39] !== e.layout || t[40] !== a ? (o = (0, ue.jsx)(V, {
            title: n.heroTitle,
            body: n.heroBody,
            cta: a,
            variant: `hero`,
            contentWidth: `full`,
            contentType: e.contentType,
            layout: e.layout
        }), t[36] = n.heroBody, t[37] = n.heroTitle, t[38] = e.contentType, t[39] = e.layout, t[40] = a, t[41] = o) : o = t[41], o
    }
}));

function pe(e) {
    let t = e?.find(e => e.__typename === `componentCustom` && e.reactComponent === `DotsMediaResources`);
    if (!t) return me;
    let n = X(t.data),
        r = X(n?.models),
        [i, a, o, s] = re.map(e => Z(r?.[e])),
        c = i && a && o && s ? {
            Alfred: i,
            Felipe: a,
            Iggy: o,
            Todd: s
        } : void 0,
        l = X(n?.names),
        u = {};
    for (let e of q) {
        let t = l?.[e];
        typeof t == `string` && t.trim() && (u[e] = t.trim())
    }
    return {
        models: c,
        names: u,
        artwork: Q(n?.artwork, t.media),
        posters: Q(n?.posters, t.media, q),
        icons: Q(n?.icons, t.media, q),
        portraits: Q(n?.portraits, t.media, q)
    }
}
var me, he, X, Z, ge, Q, _e = e((() => {
    K(), me = {
        names: {},
        artwork: {},
        posters: {},
        icons: {},
        portraits: {}
    }, he = e => typeof e == `object` && !!e && !Array.isArray(e), X = e => he(e) ? e : void 0, Z = e => {
        if (!(typeof e != `string` || !e.trim())) try {
            let t = new URL(e.startsWith(`//`) ? `https:${e}` : e);
            return t.protocol === `https:` && !t.username && !t.password ? t.href : void 0
        } catch {
            return
        }
    }, ge = (e, t) => {
        if (!Array.isArray(e) || typeof t != `number` || !Number.isInteger(t) || t < 0) return;
        let n = X(e[t]),
            r = X(n?.asset),
            i = X(r?.file);
        return Z(n?.assetUrl) ?? Z(i?.url)
    }, Q = (e, t, n) => {
        let r = X(e),
            i = {};
        for (let e of n ?? Object.keys(r ?? {})) {
            let n = ge(t, r?.[e]);
            n && (i[e] = n)
        }
        return i
    }
}));

function ve(e) {
    return T(e, x)
}
var ye, be, $, xe, Se, Ce = e((() => {
    ye = u(), p(), d(), r(), v(), a(), be = t(c()), b(), fe(), H(), W(), _e(), B(), E(), $ = o(), xe = {
        guidePage: `guide-page`,
        featurePage: `feature-page`,
        formPage: `form-page`,
        customPage: `custom-page`
    }, Se = e => {
        "use forget";
        let t = (0, ye.c)(61),
            {
                page: r,
                contentType: a,
                layout: o
            } = e,
            s, c;
        t[0] === r.slug ? (s = t[1], c = t[2]) : (s = () => {
            y.logPageView({
                slug: r.slug
            })
        }, c = [r.slug], t[0] = r.slug, t[1] = s, t[2] = c), (0, be.useEffect)(s, c);
        let l;
        t[3] === r.slug ? l = t[4] : (l = r.slug?.split(`/`).filter(Boolean).at(-1) ?? ``, t[3] = r.slug, t[4] = l);
        let u = `${xe[a]}-${l}-prefooter-cta`,
            d;
        t[5] !== a || t[6] !== r.banner ? (d = a === `featurePage` && r.banner && T(r.banner, x), t[5] = a, t[6] = r.banner, t[7] = d) : d = t[7];
        let f = d,
            p = a === `featurePage` ? r.contentPageLayout : o,
            h = p === `dotsPage`,
            g = h ? `main` : `div`,
            _;
        t[8] !== h || t[9] !== r.sections ? (_ = h ? pe(r.sections) : void 0, t[8] = h, t[9] = r.sections, t[10] = _) : _ = t[10];
        let v = _,
            b = e.headerNav,
            S = e.footer,
            C = e.locale,
            te = e.page.slug,
            w = e.headerCta,
            E = e.futuresModalDataBySlug,
            ne = e.customBackground,
            D = e.customPageShell,
            O = !h,
            k;
        t[11] !== h || t[12] !== p ? (k = !h && ![`codexPage`, `futuresPage`].includes(p ?? ``), t[11] = h, t[12] = p, t[13] = k) : k = t[13];
        let A = p === `contactSales`,
            j;
        t[14] !== O || t[15] !== k || t[16] !== A ? (j = i(`flex flex-col`, {
            "overflow-hidden": O,
            "pb-32": k,
            "mx-auto max-w-screen-2xl md:grid md:grid-cols-12 md:gap-x-6 md:px-8": A
        }), t[14] = O, t[15] = k, t[16] = A, t[17] = j) : j = t[17];
        let M;
        t[18] !== a || t[19] !== h || t[20] !== r || t[21] !== p ? (M = !h && (0, $.jsx)(de, {
            page: r,
            contentType: a,
            layout: p
        }), t[18] = a, t[19] = h, t[20] = r, t[21] = p, t[22] = M) : M = t[22];
        let N;
        t[23] === r.sections ? N = t[24] : (N = r.sections?.map(ve), t[23] = r.sections, t[24] = N);
        let P;
        t[25] !== a || t[26] !== r.heroCTAColor || t[27] !== r.heroCtaConversionLink || t[28] !== r.heroCtaIcon || t[29] !== r.heroCtaLabel || t[30] !== r.heroCtaLink || t[31] !== r.heroSecondaryCTAColor || t[32] !== r.heroSecondaryCtaIcon || t[33] !== r.heroSecondaryCtaLabel || t[34] !== r.heroSecondaryCtaLink || t[35] !== r.hidePrefooter || t[36] !== r.prefooterTitle || t[37] !== u ? (P = (a === `guidePage` || a === `featurePage`) && !r.hidePrefooter && (0, $.jsx)(V, {
            title: r.prefooterTitle,
            variant: `prefooter`,
            cta: {
                label: r.heroCtaLabel,
                link: r.heroCtaLink,
                icon: a === `featurePage` ? r.heroCtaIcon : void 0,
                color: a === `featurePage` ? r.heroCTAColor : void 0,
                analyticsAction: u
            },
            secondaryCta: r.heroSecondaryCtaLabel ? {
                label: r.heroSecondaryCtaLabel,
                link: r.heroSecondaryCtaLink,
                icon: a === `featurePage` ? r.heroSecondaryCtaIcon : void 0,
                color: a === `featurePage` ? r.heroSecondaryCTAColor : void 0,
                analyticsAction: `${u}-secondary`
            } : void 0,
            ctaConversionLink: r.heroCtaConversionLink ? {
                ...r.heroCtaConversionLink,
                analyticsAction: u
            } : void 0,
            contentWidth: a === `featurePage` ? `wide` : `full`,
            contentType: a
        }), t[25] = a, t[26] = r.heroCTAColor, t[27] = r.heroCtaConversionLink, t[28] = r.heroCtaIcon, t[29] = r.heroCtaLabel, t[30] = r.heroCtaLink, t[31] = r.heroSecondaryCTAColor, t[32] = r.heroSecondaryCtaIcon, t[33] = r.heroSecondaryCtaLabel, t[34] = r.heroSecondaryCtaLink, t[35] = r.hidePrefooter, t[36] = r.prefooterTitle, t[37] = u, t[38] = P) : P = t[38];
        let F;
        t[39] !== g || t[40] !== f || t[41] !== j || t[42] !== M || t[43] !== N || t[44] !== P ? (F = (0, $.jsxs)(g, {
            className: j,
            children: [f, M, N, P]
        }), t[39] = g, t[40] = f, t[41] = j, t[42] = M, t[43] = N, t[44] = P, t[45] = F) : F = t[45];
        let I;
        t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, $.jsxs)(n, {
            children: [(0, $.jsx)(ee, {}), (0, $.jsx)(m, {
                fixed: !0
            })]
        }), t[46] = I) : I = t[46];
        let L;
        t[47] !== e.customBackground || t[48] !== e.customPageShell || t[49] !== e.footer || t[50] !== e.futuresModalDataBySlug || t[51] !== e.headerCta || t[52] !== e.headerNav || t[53] !== e.locale || t[54] !== e.page.slug || t[55] !== p || t[56] !== F ? (L = (0, $.jsxs)(U, {
            headerNav: b,
            footer: S,
            locale: C,
            layout: p,
            slug: te,
            headerCta: w,
            futuresModalDataBySlug: E,
            customBackground: ne,
            customPageShell: D,
            children: [F, I]
        }), t[47] = e.customBackground, t[48] = e.customPageShell, t[49] = e.footer, t[50] = e.futuresModalDataBySlug, t[51] = e.headerCta, t[52] = e.headerNav, t[53] = e.locale, t[54] = e.page.slug, t[55] = p, t[56] = F, t[57] = L) : L = t[57];
        let R = L,
            z;
        return t[58] !== R || t[59] !== v ? (z = v ? (0, $.jsx)(G.Provider, {
            value: v,
            children: R
        }) : R, t[58] = R, t[59] = v, t[60] = z) : z = t[60], z
    }
}));
export {
    Ce as n, Se as t
};
//# sourceMappingURL=6c802ee8-mwdakupip9e2ov6v.js.map