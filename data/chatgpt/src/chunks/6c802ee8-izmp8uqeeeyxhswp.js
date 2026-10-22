import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fz as n,
    Iz as r,
    l7 as i,
    u7 as a
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as o,
    Q as s,
    Vn as c,
    it as l,
    wn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    GKn as d,
    KKn as f,
    KWn as p,
    WWn as m,
    hKn as h,
    pKn as g
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    CC as _,
    SC as v
} from "./30901919-lc79rizhhepnsl3q.js";
import {
    n as y,
    t as b
} from "./2686af9f-ns159rcalnacbxuo.js";
import {
    n as x,
    t as S
} from "./7b12be43-lnvard258ymdgx44.js";
import {
    a as C,
    i as w,
    n as ee,
    o as T
} from "./f9d93d16-ipzizh1zp6trt5nk.js";
import {
    n as E,
    t as D
} from "./0cb8459d-ujnpy89vp7p6en1r.js";
import {
    t as te
} from "./1fbff149-otq0bk7wfmvlqej1.js";
import {
    t as O
} from "./c3e2d78f-onilkv7ldgu9e4f1.js";
import {
    n as k,
    t as A
} from "./088558a8-5di8se2z01em3dtn.js";
import {
    n as j,
    r as M
} from "./bb47c0a1-9c7livnpttrxqces.js";
import {
    n as N,
    t as P
} from "./46683f7b-tr2e0p071dvntu24.js";
import {
    r as F,
    t as I
} from "./ee72d6dc-n0rxt2otdse39886.js";
import {
    r as L,
    t as R
} from "./eb36fa13-fbg8k34haooysv4a.js";
import {
    n as z,
    t as B
} from "./0bb44966-i6bwcfylei0pf1mq.js";
import {
    r as V,
    t as H
} from "./e4a3058c-h1gl5uld8e9tuz9t.js";
import {
    n as U,
    t as W
} from "./c553d4b9-bykg8xvanfbd4feh.js";
import {
    n as G,
    t as K
} from "./b2c255f5-dgzm1bcta7422yc7.js";
import {
    i as q,
    n as ne,
    r as J
} from "./3a6eb079-hjakmv42muhkqjzj.js";

function re(e) {
    "use forget";
    let t = (0, ie.c)(52),
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
            variant: p,
            customCtaSlot: m
        } = e,
        h = p === void 0 ? `default` : p,
        {
            slug: g,
            theme: _,
            effectiveLocale: y
        } = M(),
        x = d?.color ?? `ghost`,
        S = x === `ghost`,
        C;
    t[0] !== y || t[1] !== g ? (C = {
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
                    b.logClick({
                        analytics_identifier: R(g, `feature-page-hero-body-link`),
                        destination_url: n,
                        locale: y,
                        page_slug: g
                    })
                },
                to: n,
                ...i,
                children: r
            })
        }
    }, t[0] = y, t[1] = g, t[2] = C) : C = t[2];
    let w = C,
        ee = r != null && r.trim().length > 0,
        T = ae.Children.count(m) > 0,
        E = !!c || !!u || T,
        D = T && !c && !u && !d;
    if (!(ee || n || o || s || E || d || f)) return null;
    let O;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (O = i(`items-center not-first:pt-46 not-first:sm:pt-20`), t[3] = O) : O = t[3];
    let k = n ? `tight` : `hero`,
        j = h === `centered`,
        N = h === "default",
        F;
    t[4] !== j || t[5] !== N ? (F = i(`col-span-12`, {
        "text-center sm:col-span-8 sm:col-start-3": j,
        "sm:col-span-6 xl:col-span-5 xl:col-start-2": N
    }), t[4] = j, t[5] = N, t[6] = F) : F = t[6];
    let L;
    t[7] !== n || t[8] !== h ? (L = n && (0, Y.jsx)(`p`, {
        className: i(`text-token-text-primary/60 text-mkt-p2 mb-8 w-[80%] max-w-[460px] font-medium text-balance`, {
            "mx-auto": h === `centered`
        }),
        children: n
    }), t[7] = n, t[8] = h, t[9] = L) : L = t[9];
    let z;
    t[10] === a ? z = t[11] : (z = i(`text-mkt-h1 text-balance`, a), t[10] = a, t[11] = z);
    let V;
    t[12] !== z || t[13] !== r ? (V = (0, Y.jsx)(`h1`, {
        id: `feature-page-hero`,
        className: z,
        children: r
    }), t[12] = z, t[13] = r, t[14] = V) : V = t[14];
    let H;
    t[15] !== o || t[16] !== w || t[17] !== h ? (H = o && (0, Y.jsx)(`div`, {
        className: i(`mt-8 w-[90%] max-w-[460px] text-balance xl:text-pretty`, {
            "mx-auto": h === `centered`
        }),
        children: (0, Y.jsx)(oe, {
            components: w,
            children: o
        })
    }), t[15] = o, t[16] = w, t[17] = h, t[18] = H) : H = t[18];
    let U;
    t[19] !== w || t[20] !== s || t[21] !== h ? (U = s && (0, Y.jsx)(`div`, {
        className: i(`text-token-text-primary/60 text-mkt-p2 mt-6 w-[80%] max-w-[460px] font-medium text-balance`, {
            "mx-auto": h === `centered`
        }),
        children: (0, Y.jsx)(oe, {
            components: w,
            children: s
        })
    }), t[19] = w, t[20] = s, t[21] = h, t[22] = U) : U = t[22];
    let W;
    t[23] !== m || t[24] !== o || t[25] !== y || t[26] !== E || t[27] !== D || t[28] !== S || t[29] !== s || t[30] !== u || t[31] !== c || t[32] !== d || t[33] !== x || t[34] !== g || t[35] !== h ? (W = E && (0, Y.jsxs)(`div`, {
        className: i(`flex w-fit flex-wrap gap-2`, {
            "mx-auto justify-center": h === `centered`,
            "mt-6": o || s,
            "mt-12": !o && !s && D,
            "mt-2": !o && !s && !D
        }),
        children: [u ? (0, Y.jsx)(P, {
            ...u
        }) : c && (0, Y.jsx)(te, {
            className: c.className,
            color: c.color ?? `primary`,
            size: c.size,
            icon: A(c.icon),
            as: `link`,
            to: c.href,
            onClick: () => {
                b.logClick({
                    analytics_identifier: c.analyticsAction,
                    destination_url: c.href,
                    locale: y,
                    page_slug: g
                })
            },
            children: c.label
        }), m, d && (0, Y.jsxs)(te, {
            color: x,
            icon: A(d.icon),
            as: `link`,
            to: d.href,
            contentWrapperClassName: i({
                "gap-1": S
            }),
            onClick: () => {
                b.logClick({
                    analytics_identifier: d.analyticsAction,
                    destination_url: d.href,
                    locale: y,
                    page_slug: g
                })
            },
            children: [d.label, S && (0, Y.jsx)(v, {
                className: `icon-sm`
            })]
        })]
    }), t[23] = m, t[24] = o, t[25] = y, t[26] = E, t[27] = D, t[28] = S, t[29] = s, t[30] = u, t[31] = c, t[32] = d, t[33] = x, t[34] = g, t[35] = h, t[36] = W) : W = t[36];
    let G;
    t[37] !== V || t[38] !== H || t[39] !== U || t[40] !== W || t[41] !== F || t[42] !== L ? (G = (0, Y.jsxs)(`div`, {
        className: F,
        children: [L, V, H, U, W]
    }), t[37] = V, t[38] = H, t[39] = U, t[40] = W, t[41] = F, t[42] = L, t[43] = G) : G = t[43];
    let K;
    t[44] !== f || t[45] !== _ || t[46] !== h ? (K = f && (0, Y.jsx)(`div`, {
        className: i(`col-span-12`, {
            "-order-1 sm:col-span-8 sm:col-start-3": h === `centered`,
            "sm:col-span-6 xl:col-span-5": h === "default"
        }),
        children: (0, Y.jsx)(I, {
            ...f.__typename === `componentVariant` ? f.components[_ ?? 0] : f,
            className: i(`overflow-hidden`, {
                "aspect-square": h === "default",
                "mx-auto h-20! w-20!": h === `centered`
            }),
            rounding: h === "default" ? `rounded` : `app-icon`
        })
    }), t[44] = f, t[45] = _, t[46] = h, t[47] = K) : K = t[47];
    let q;
    return t[48] !== G || t[49] !== K || t[50] !== k ? (q = (0, Y.jsxs)(B, {
        className: O,
        spacingAbove: k,
        ariaLabelledby: `feature-page-hero`,
        children: [G, K]
    }), t[48] = G, t[49] = K, t[50] = k, t[51] = q) : q = t[51], q
}
var ie, ae, Y, oe, se = e((() => {
    ie = u(), O(), k(), j(), N(), F(), _(), y(), L(), a(), ae = t(c()), m(), s(), z(), Y = o(), oe = (0, ae.memo)(p)
}));

function ce(e) {
    return e.__typename && e.__typename in S ? E(e, S) : e.reactComponent && e.reactComponent in C ? w(e.reactComponent, e) : null
}
var le, ue, de, fe = e((() => {
    le = u(), x(), T(), D(), se(), c(), V(), ee(), ue = o(), de = e => {
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
            return t[18] !== o || t[19] !== n.heroBody || t[20] !== n.heroCtaConversionLink || t[21] !== n.heroEyebrow || t[22] !== n.heroMedia || t[23] !== n.heroMustache || t[24] !== n.heroTitle || t[25] !== n.heroTitleClassName || t[26] !== n.heroVariant || t[27] !== s || t[28] !== c ? (l = (0, ue.jsx)(re, {
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
        return t[36] !== n.heroBody || t[37] !== n.heroTitle || t[38] !== e.contentType || t[39] !== e.layout || t[40] !== a ? (o = (0, ue.jsx)(H, {
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
        [i, a, o, s] = ne.map(e => Z(r?.[e])),
        c = i && a && o && s ? {
            Alfred: i,
            Felipe: a,
            Iggy: o,
            Todd: s
        } : void 0,
        l = X(n?.names),
        u = {};
    for (let e of J) {
        let t = l?.[e];
        typeof t == `string` && t.trim() && (u[e] = t.trim())
    }
    return {
        models: c,
        names: u,
        artwork: Q(n?.artwork, t.media),
        posters: Q(n?.posters, t.media, J),
        icons: Q(n?.icons, t.media, J),
        portraits: Q(n?.portraits, t.media, J)
    }
}
var me, he, X, Z, ge, Q, _e = e((() => {
    q(), me = {
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
    return E(e, S)
}
var ye, be, $, xe, Se, Ce = e((() => {
    ye = u(), h(), f(), r(), y(), a(), be = t(c()), x(), fe(), U(), G(), _e(), V(), D(), $ = o(), xe = {
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
            b.logPageView({
                slug: r.slug
            })
        }, c = [r.slug], t[0] = r.slug, t[1] = s, t[2] = c), (0, be.useEffect)(s, c);
        let l;
        t[3] === r.slug ? l = t[4] : (l = r.slug?.split(`/`).filter(Boolean).at(-1) ?? ``, t[3] = r.slug, t[4] = l);
        let u = `${xe[a]}-${l}-prefooter-cta`,
            f;
        t[5] !== a || t[6] !== r.banner ? (f = a === `featurePage` && r.banner && E(r.banner, S), t[5] = a, t[6] = r.banner, t[7] = f) : f = t[7];
        let p = f,
            m = a === `featurePage` ? r.contentPageLayout : o,
            h = m === `dotsPage`,
            _ = h ? `main` : `div`,
            v;
        t[8] !== h || t[9] !== r.sections ? (v = h ? pe(r.sections) : void 0, t[8] = h, t[9] = r.sections, t[10] = v) : v = t[10];
        let y = v,
            x = e.headerNav,
            C = e.footer,
            w = e.locale,
            ee = e.page.slug,
            T = e.headerCta,
            D = e.futuresModalDataBySlug,
            te = e.customBackground,
            O = e.customPageShell,
            k = !h,
            A;
        t[11] !== h || t[12] !== m ? (A = !h && ![`codexPage`, `futuresPage`].includes(m ?? ``), t[11] = h, t[12] = m, t[13] = A) : A = t[13];
        let j = m === `contactSales`,
            M;
        t[14] !== k || t[15] !== A || t[16] !== j ? (M = i(`flex flex-col`, {
            "overflow-hidden": k,
            "pb-32": A,
            "mx-auto max-w-screen-2xl md:grid md:grid-cols-12 md:gap-x-6 md:px-8": j
        }), t[14] = k, t[15] = A, t[16] = j, t[17] = M) : M = t[17];
        let N;
        t[18] !== a || t[19] !== h || t[20] !== r || t[21] !== m ? (N = !h && (0, $.jsx)(de, {
            page: r,
            contentType: a,
            layout: m
        }), t[18] = a, t[19] = h, t[20] = r, t[21] = m, t[22] = N) : N = t[22];
        let P;
        t[23] === r.sections ? P = t[24] : (P = r.sections?.map(ve), t[23] = r.sections, t[24] = P);
        let F;
        t[25] !== a || t[26] !== r.heroCTAColor || t[27] !== r.heroCtaConversionLink || t[28] !== r.heroCtaIcon || t[29] !== r.heroCtaLabel || t[30] !== r.heroCtaLink || t[31] !== r.heroSecondaryCTAColor || t[32] !== r.heroSecondaryCtaIcon || t[33] !== r.heroSecondaryCtaLabel || t[34] !== r.heroSecondaryCtaLink || t[35] !== r.hidePrefooter || t[36] !== r.prefooterTitle || t[37] !== u ? (F = (a === `guidePage` || a === `featurePage`) && !r.hidePrefooter && (0, $.jsx)(H, {
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
        }), t[25] = a, t[26] = r.heroCTAColor, t[27] = r.heroCtaConversionLink, t[28] = r.heroCtaIcon, t[29] = r.heroCtaLabel, t[30] = r.heroCtaLink, t[31] = r.heroSecondaryCTAColor, t[32] = r.heroSecondaryCtaIcon, t[33] = r.heroSecondaryCtaLabel, t[34] = r.heroSecondaryCtaLink, t[35] = r.hidePrefooter, t[36] = r.prefooterTitle, t[37] = u, t[38] = F) : F = t[38];
        let I;
        t[39] !== _ || t[40] !== p || t[41] !== M || t[42] !== N || t[43] !== P || t[44] !== F ? (I = (0, $.jsxs)(_, {
            className: M,
            children: [p, N, P, F]
        }), t[39] = _, t[40] = p, t[41] = M, t[42] = N, t[43] = P, t[44] = F, t[45] = I) : I = t[45];
        let L;
        t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (L = (0, $.jsxs)(n, {
            children: [(0, $.jsx)(d, {}), (0, $.jsx)(g, {
                fixed: !0
            })]
        }), t[46] = L) : L = t[46];
        let R;
        t[47] !== e.customBackground || t[48] !== e.customPageShell || t[49] !== e.footer || t[50] !== e.futuresModalDataBySlug || t[51] !== e.headerCta || t[52] !== e.headerNav || t[53] !== e.locale || t[54] !== e.page.slug || t[55] !== m || t[56] !== I ? (R = (0, $.jsxs)(W, {
            headerNav: x,
            footer: C,
            locale: w,
            layout: m,
            slug: ee,
            headerCta: T,
            futuresModalDataBySlug: D,
            customBackground: te,
            customPageShell: O,
            children: [I, L]
        }), t[47] = e.customBackground, t[48] = e.customPageShell, t[49] = e.footer, t[50] = e.futuresModalDataBySlug, t[51] = e.headerCta, t[52] = e.headerNav, t[53] = e.locale, t[54] = e.page.slug, t[55] = m, t[56] = I, t[57] = R) : R = t[57];
        let z = R,
            B;
        return t[58] !== z || t[59] !== y ? (B = y ? (0, $.jsx)(K.Provider, {
            value: y,
            children: z
        }) : z, t[58] = z, t[59] = y, t[60] = B) : B = t[60], B
    }
}));
export {
    Ce as n, Se as t
};
//# sourceMappingURL=6c802ee8-izmp8uqeeeyxhswp.js.map