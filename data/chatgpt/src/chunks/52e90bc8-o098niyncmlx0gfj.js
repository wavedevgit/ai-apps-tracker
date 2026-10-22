import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as n,
    D6 as r,
    F6 as i,
    N6 as a,
    P6 as ee,
    T6 as o,
    ast as s,
    c7 as c,
    f0 as l,
    ist as te,
    kit as u,
    l7 as d,
    p0 as ne
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as f,
    Ln as p,
    Nn as m,
    Q as h,
    Rn as g,
    Vn as _,
    it as re,
    wn as v,
    zn as ie
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    O4t as y,
    T4t as ae,
    v4t as b
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    cv as x,
    lv as S
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    Mh as oe,
    Nh as C,
    hm as w,
    kh as se,
    pm as T
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    n as ce,
    r as le,
    t as E
} from "./25e34381-enf36bj1bwdjbezk.js";

function D(e) {
    "use forget";
    let t = (0, de.c)(59),
        {
            analyticsSurface: i,
            className: o,
            copyVariant: s,
            checkoutPricingConfig: l,
            keepTermsInline: u,
            offerMessage: d,
            promotion: f,
            termsMessage: p,
            view: h
        } = e,
        g = s === void 0 ? `per-member` : s,
        _ = u !== void 0 && u,
        v = ie(),
        y = f === void 0 ? oe() : f,
        x;
    t[0] === v ? x = t[1] : (x = ee({
        country: te().userCountry ?? a(v.locale),
        shouldUseDefaultCountryCode: !1
    }), t[0] = v, t[1] = x);
    let C = x,
        w = l == null,
        T;
    t[2] !== C || t[3] !== w ? (T = {
        countryCode: C,
        enabled: w
    }, t[2] = C, t[3] = w, t[4] = T) : T = t[4];
    let {
        data: E
    } = r(T), D = l ?? E, M = O({
        checkoutPricingConfig: D,
        intl: v,
        numCredits: y?.inviteReward?.perEligibleInviteNumCredits
    }), N = O({
        checkoutPricingConfig: D,
        intl: v,
        numCredits: y?.inviteReward?.maxCreditNumCredits
    }), P = y != null && M != null && (d != null || g === `per-member` || N != null), pe = (0, k.useRef)(!1), F, I;
    if (t[5] !== i || t[6] !== P ? (F = () => {
            !P || pe.current || (pe.current = !0, le({
                surface: i
            }))
        }, I = [i, P], t[5] = i, t[6] = P, t[7] = F, t[8] = I) : (F = t[7], I = t[8]), (0, k.useEffect)(F, I), !P || y == null || M == null) return null;
    let L = d == null ? g === `per-member` ? (0, A.jsx)(m, {
            ...j.inviteOfferText,
            values: {
                amount: M
            }
        }) : g === `max-team` && N != null ? (0, A.jsx)(m, {
            ...j.maxTeamOfferText,
            values: {
                maxAmount: N
            }
        }) : g === `checkout` && N != null ? (0, A.jsx)(m, {
            ...j.checkoutOfferText,
            values: {
                maxAmount: N
            }
        }) : ue(y.offerText ?? v.formatMessage(j.defaultOfferText, {
            amount: M
        }), M) : (0, A.jsx)(m, {
            ...d,
            values: {
                amount: M,
                maxAmount: N
            }
        }),
        R;
    t[9] !== v || t[10] !== y || t[11] !== p ? (R = p == null ? y.termsText ?? v.formatMessage(j.defaultTermsText) : v.formatMessage(p), t[9] = v, t[10] = y, t[11] = p, t[12] = R) : R = t[12];
    let z = R,
        B = h === `landing-header`,
        V = B,
        H = V ? se : y.termsUrl,
        U;
    t[13] !== v || t[14] !== V || t[15] !== z ? (U = V ? v.formatMessage(j.getStartedCta) : z, t[13] = v, t[14] = V, t[15] = z, t[16] = U) : U = t[16];
    let W = `${U} \u2192`,
        G = _ && `whitespace-nowrap`,
        K;
    t[17] === G ? K = t[18] : (K = c(`${b} underline underline-offset-2`, G), t[17] = G, t[18] = K);
    let q = K,
        J;
    t[19] !== i || t[20] !== q || t[21] !== H || t[22] !== W || t[23] !== V ? (J = V ? (0, A.jsx)(re, {
        className: q,
        to: H,
        onClick: e => {
            ce({
                destination: `codex_team_start`,
                surface: i
            }), !n() && (e.preventDefault(), ne({
                callbackUrl: se,
                skipLoginModal: !1
            }))
        },
        children: W
    }) : (0, A.jsx)(`a`, {
        className: q,
        href: H,
        rel: `noreferrer`,
        target: `_blank`,
        onClick: () => {
            ce({
                destination: `terms`,
                surface: i
            })
        },
        children: W
    }), t[19] = i, t[20] = q, t[21] = H, t[22] = W, t[23] = V, t[24] = J) : J = t[24];
    let Y = J,
        X;
    t[25] !== Y || t[26] !== _ || t[27] !== L ? (X = _ ? (0, A.jsxs)(`span`, {
        children: [L, fe, Y]
    }) : (0, A.jsxs)(`span`, {
        className: `inline-flex flex-wrap items-center gap-x-1`,
        children: [(0, A.jsx)(`span`, {
            children: L
        }), Y]
    }), t[25] = Y, t[26] = _, t[27] = L, t[28] = X) : X = t[28];
    let Z = X;
    if (h === `inline`) {
        let e;
        t[29] === o ? e = t[30] : (e = c(`text-center text-[14px] leading-[22px] tracking-[-0.14px]`, b, o), t[29] = o, t[30] = e);
        let n;
        return t[31] !== Z || t[32] !== e ? (n = (0, A.jsx)(`p`, {
            className: e,
            children: Z
        }), t[31] = Z, t[32] = e, t[33] = n) : n = t[33], n
    }
    if (h === `landing`) {
        let e;
        t[34] === o ? e = t[35] : (e = c(`inline-flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[14px] leading-6 font-medium`, b, o), t[34] = o, t[35] = e);
        let n;
        t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, A.jsx)(S, {
            "aria-hidden": !0,
            className: c(`h-4 w-4 shrink-0`, b)
        }), t[36] = n) : n = t[36];
        let r;
        t[37] === Z ? r = t[38] : (r = (0, A.jsx)(`span`, {
            children: Z
        }), t[37] = Z, t[38] = r);
        let i;
        return t[39] !== e || t[40] !== r ? (i = (0, A.jsxs)(`div`, {
            className: e,
            children: [n, r]
        }), t[39] = e, t[40] = r, t[41] = i) : i = t[41], i
    }
    if (h === `callout`) {
        let e;
        t[42] === o ? e = t[43] : (e = c(`rounded-[24px] px-6 py-5`, ae, o), t[42] = o, t[43] = e);
        let n, r;
        t[44] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, A.jsx)(S, {
            "aria-hidden": !0,
            className: c(`h-4 w-4 shrink-0`, b)
        }), r = c(`min-w-0 flex-1 text-[12px] leading-[19px] font-semibold tracking-[-0.08px]`, b), t[44] = n, t[45] = r) : (n = t[44], r = t[45]);
        let i;
        t[46] === Z ? i = t[47] : (i = (0, A.jsxs)(`div`, {
            className: `flex items-center gap-4`,
            children: [n, (0, A.jsx)(`div`, {
                className: r,
                children: Z
            })]
        }), t[46] = Z, t[47] = i);
        let a;
        return t[48] !== e || t[49] !== i ? (a = (0, A.jsx)(`div`, {
            className: e,
            role: `status`,
            "aria-live": `polite`,
            children: i
        }), t[48] = e, t[49] = i, t[50] = a) : a = t[50], a
    }
    let Q, $;
    if (t[51] !== Z || t[52] !== o || t[53] !== B) {
        $ = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            let e = c(`w-full rounded-none px-4 py-2 text-center`, ae),
                n;t[56] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, A.jsx)(S, {
                "aria-hidden": !0,
                className: c(`h-4 w-4 shrink-0`, b)
            }), t[56] = n) : n = t[56];
            let r;t[57] === Z ? r = t[58] : (r = (0, A.jsxs)(`div`, {
                className: `flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[12px] leading-[18px] font-medium text-[#0D0D0D] dark:text-white/92`,
                children: [n, (0, A.jsx)(`span`, {
                    className: `min-w-0 break-words`,
                    children: Z
                })]
            }), t[57] = Z, t[58] = r);
            let i = r;
            if (B) {
                $ = (0, A.jsxs)(A.Fragment, {
                    children: [(0, A.jsx)(`div`, {
                        "aria-hidden": !0,
                        className: c(e, `pointer-events-none invisible pt-[calc(env(safe-area-inset-top,0px)+0.625rem)]`, o),
                        children: i
                    }), (0, A.jsx)(`div`, {
                        className: c(e, `fixed inset-x-0 top-0 z-50 pt-[calc(env(safe-area-inset-top,0px)+0.625rem)]`, o),
                        role: `status`,
                        "aria-live": `polite`,
                        children: i
                    })]
                });
                break bb0
            }
            Q = (0, A.jsx)(`div`, {
                className: c(e, o),
                role: `status`,
                "aria-live": `polite`,
                children: i
            })
        }
        t[51] = Z, t[52] = o, t[53] = B, t[54] = Q, t[55] = $
    } else Q = t[54], $ = t[55];
    return $ === Symbol.for(`react.early_return_sentinel`) ? Q : $
}

function O({
    checkoutPricingConfig: e,
    intl: t,
    numCredits: n
}) {
    if (e == null || n == null || n <= 0) return null;
    let {
        amount_per_credit: r,
        minor_unit_exponent: i,
        symbol_code: a
    } = e.currencyConfig, ee = w({
        amountPerCredit: r,
        creditQuantity: n,
        minorUnitExponent: i
    });
    return t.formatNumber(ee / 10 ** i, {
        currency: a,
        style: `currency`,
        maximumFractionDigits: 0
    })
}

function ue(e, t) {
    return e.split(`{amount}`).join(t)
}
var de, k, A, fe, j, M = e((() => {
    de = v(), T(), E(), C(), x(), y(), l(), u(), o(), i(), s(), d(), k = t(_()), g(), h(), A = f(), fe = `\xA0`, j = p({
        defaultOfferText: {
            id: `CodexPromotion.defaultOfferText`,
            defaultMessage: `Get {amount} in credits for every member who starts using Codex.`
        },
        maxTeamOfferText: {
            id: `CodexPromotion.maxTeamOfferText`,
            defaultMessage: `Earn up to {maxAmount} in credits for your team when they start using Codex.`
        },
        checkoutOfferText: {
            id: `CodexPromotion.checkoutOfferText`,
            defaultMessage: `After purchase, invite your team to earn up to {maxAmount} in credits.`
        },
        inviteOfferText: {
            id: `CodexPromotion.inviteOfferText`,
            defaultMessage: `Get {amount} in credits for every person you invite that starts using Codex.`
        },
        defaultTermsText: {
            id: `CodexPromotion.defaultTermsText`,
            defaultMessage: `View Terms`
        },
        getStartedCta: {
            id: `CodexPromotion.getStartedCta`,
            defaultMessage: `Get Started`
        }
    })
}));
export {
    M as n, D as t
};
//# sourceMappingURL=52e90bc8-o098niyncmlx0gfj.js.map