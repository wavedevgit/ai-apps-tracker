import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bot as n,
    S6 as r,
    Vot as i,
    X5 as a,
    Y5 as o,
    b6 as s,
    dit as c,
    f6 as l,
    fit as ee,
    i0 as te,
    m6 as ne,
    r0 as u,
    x6 as re
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as d,
    Ln as f,
    Nn as p,
    Q as m,
    Rn as h,
    Vn as g,
    it as ie,
    wn as _,
    zn as ae
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    m4t as v,
    w4t as y,
    x4t as b
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    cv as x,
    lv as S
} from "./30901919-e8h11sw136qen6v0.js";
import {
    Oh as oe,
    Th as se,
    dm as C,
    kh as w,
    pm as T
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    n as E,
    r as ce,
    t as le
} from "./25e34381-dfjf8iik4cyt8mat.js";

function D(e) {
    "use forget";
    let t = (0, O.c)(59),
        {
            analyticsSurface: r,
            className: i,
            copyVariant: a,
            checkoutPricingConfig: c,
            keepTermsInline: l,
            offerMessage: u,
            promotion: d,
            termsMessage: f,
            view: m
        } = e,
        h = a === void 0 ? `per-member` : a,
        g = l !== void 0 && l,
        _ = ae(),
        y = d === void 0 ? oe() : d,
        x;
    t[0] === _ ? x = t[1] : (x = re({
        country: n().userCountry ?? s(_.locale),
        shouldUseDefaultCountryCode: !1
    }), t[0] = _, t[1] = x);
    let C = x,
        w = c == null,
        T;
    t[2] !== C || t[3] !== w ? (T = {
        countryCode: C,
        enabled: w
    }, t[2] = C, t[3] = w, t[4] = T) : T = t[4];
    let {
        data: le
    } = ne(T), D = c ?? le, M = ue({
        checkoutPricingConfig: D,
        intl: _,
        numCredits: y?.inviteReward?.perEligibleInviteNumCredits
    }), N = ue({
        checkoutPricingConfig: D,
        intl: _,
        numCredits: y?.inviteReward?.maxCreditNumCredits
    }), P = y != null && M != null && (u != null || h === `per-member` || N != null), pe = (0, k.useRef)(!1), F, I;
    if (t[5] !== r || t[6] !== P ? (F = () => {
            !P || pe.current || (pe.current = !0, ce({
                surface: r
            }))
        }, I = [r, P], t[5] = r, t[6] = P, t[7] = F, t[8] = I) : (F = t[7], I = t[8]), (0, k.useEffect)(F, I), !P || y == null || M == null) return null;
    let L = u == null ? h === `per-member` ? (0, A.jsx)(p, {
            ...j.inviteOfferText,
            values: {
                amount: M
            }
        }) : h === `max-team` && N != null ? (0, A.jsx)(p, {
            ...j.maxTeamOfferText,
            values: {
                maxAmount: N
            }
        }) : h === `checkout` && N != null ? (0, A.jsx)(p, {
            ...j.checkoutOfferText,
            values: {
                maxAmount: N
            }
        }) : de(y.offerText ?? _.formatMessage(j.defaultOfferText, {
            amount: M
        }), M) : (0, A.jsx)(p, {
            ...u,
            values: {
                amount: M,
                maxAmount: N
            }
        }),
        R;
    t[9] !== _ || t[10] !== y || t[11] !== f ? (R = f == null ? y.termsText ?? _.formatMessage(j.defaultTermsText) : _.formatMessage(f), t[9] = _, t[10] = y, t[11] = f, t[12] = R) : R = t[12];
    let z = R,
        B = m === `landing-header`,
        V = B,
        H = V ? se : y.termsUrl,
        U;
    t[13] !== _ || t[14] !== V || t[15] !== z ? (U = V ? _.formatMessage(j.getStartedCta) : z, t[13] = _, t[14] = V, t[15] = z, t[16] = U) : U = t[16];
    let W = `${U} \u2192`,
        G = g && `whitespace-nowrap`,
        K;
    t[17] === G ? K = t[18] : (K = o(`${v} underline underline-offset-2`, G), t[17] = G, t[18] = K);
    let q = K,
        J;
    t[19] !== r || t[20] !== q || t[21] !== H || t[22] !== W || t[23] !== V ? (J = V ? (0, A.jsx)(ie, {
        className: q,
        to: H,
        onClick: e => {
            E({
                destination: `codex_team_start`,
                surface: r
            }), !ee() && (e.preventDefault(), te({
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
            E({
                destination: `terms`,
                surface: r
            })
        },
        children: W
    }), t[19] = r, t[20] = q, t[21] = H, t[22] = W, t[23] = V, t[24] = J) : J = t[24];
    let Y = J,
        X;
    t[25] !== Y || t[26] !== g || t[27] !== L ? (X = g ? (0, A.jsxs)(`span`, {
        children: [L, fe, Y]
    }) : (0, A.jsxs)(`span`, {
        className: `inline-flex flex-wrap items-center gap-x-1`,
        children: [(0, A.jsx)(`span`, {
            children: L
        }), Y]
    }), t[25] = Y, t[26] = g, t[27] = L, t[28] = X) : X = t[28];
    let Z = X;
    if (m === `inline`) {
        let e;
        t[29] === i ? e = t[30] : (e = o(`text-center text-[14px] leading-[22px] tracking-[-0.14px]`, v, i), t[29] = i, t[30] = e);
        let n;
        return t[31] !== Z || t[32] !== e ? (n = (0, A.jsx)(`p`, {
            className: e,
            children: Z
        }), t[31] = Z, t[32] = e, t[33] = n) : n = t[33], n
    }
    if (m === `landing`) {
        let e;
        t[34] === i ? e = t[35] : (e = o(`inline-flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[14px] leading-6 font-medium`, v, i), t[34] = i, t[35] = e);
        let n;
        t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, A.jsx)(S, {
            "aria-hidden": !0,
            className: o(`h-4 w-4 shrink-0`, v)
        }), t[36] = n) : n = t[36];
        let r;
        t[37] === Z ? r = t[38] : (r = (0, A.jsx)(`span`, {
            children: Z
        }), t[37] = Z, t[38] = r);
        let a;
        return t[39] !== e || t[40] !== r ? (a = (0, A.jsxs)(`div`, {
            className: e,
            children: [n, r]
        }), t[39] = e, t[40] = r, t[41] = a) : a = t[41], a
    }
    if (m === `callout`) {
        let e;
        t[42] === i ? e = t[43] : (e = o(`rounded-[24px] px-6 py-5`, b, i), t[42] = i, t[43] = e);
        let n, r;
        t[44] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, A.jsx)(S, {
            "aria-hidden": !0,
            className: o(`h-4 w-4 shrink-0`, v)
        }), r = o(`min-w-0 flex-1 text-[12px] leading-[19px] font-semibold tracking-[-0.08px]`, v), t[44] = n, t[45] = r) : (n = t[44], r = t[45]);
        let a;
        t[46] === Z ? a = t[47] : (a = (0, A.jsxs)(`div`, {
            className: `flex items-center gap-4`,
            children: [n, (0, A.jsx)(`div`, {
                className: r,
                children: Z
            })]
        }), t[46] = Z, t[47] = a);
        let s;
        return t[48] !== e || t[49] !== a ? (s = (0, A.jsx)(`div`, {
            className: e,
            role: `status`,
            "aria-live": `polite`,
            children: a
        }), t[48] = e, t[49] = a, t[50] = s) : s = t[50], s
    }
    let Q, $;
    if (t[51] !== Z || t[52] !== i || t[53] !== B) {
        $ = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            let e = o(`w-full rounded-none px-4 py-2 text-center`, b),
                n;t[56] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, A.jsx)(S, {
                "aria-hidden": !0,
                className: o(`h-4 w-4 shrink-0`, v)
            }), t[56] = n) : n = t[56];
            let r;t[57] === Z ? r = t[58] : (r = (0, A.jsxs)(`div`, {
                className: `flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[12px] leading-[18px] font-medium text-[#0D0D0D] dark:text-white/92`,
                children: [n, (0, A.jsx)(`span`, {
                    className: `min-w-0 break-words`,
                    children: Z
                })]
            }), t[57] = Z, t[58] = r);
            let a = r;
            if (B) {
                $ = (0, A.jsxs)(A.Fragment, {
                    children: [(0, A.jsx)(`div`, {
                        "aria-hidden": !0,
                        className: o(e, `pointer-events-none invisible pt-[calc(env(safe-area-inset-top,0px)+0.625rem)]`, i),
                        children: a
                    }), (0, A.jsx)(`div`, {
                        className: o(e, `fixed inset-x-0 top-0 z-50 pt-[calc(env(safe-area-inset-top,0px)+0.625rem)]`, i),
                        role: `status`,
                        "aria-live": `polite`,
                        children: a
                    })]
                });
                break bb0
            }
            Q = (0, A.jsx)(`div`, {
                className: o(e, i),
                role: `status`,
                "aria-live": `polite`,
                children: a
            })
        }
        t[51] = Z, t[52] = i, t[53] = B, t[54] = Q, t[55] = $
    } else Q = t[54], $ = t[55];
    return $ === Symbol.for(`react.early_return_sentinel`) ? Q : $
}

function ue({
    checkoutPricingConfig: e,
    intl: t,
    numCredits: n
}) {
    if (e == null || n == null || n <= 0) return null;
    let {
        amount_per_credit: r,
        minor_unit_exponent: i,
        symbol_code: a
    } = e.currencyConfig, o = T({
        amountPerCredit: r,
        creditQuantity: n,
        minorUnitExponent: i
    });
    return t.formatNumber(o / 10 ** i, {
        currency: a,
        style: `currency`,
        maximumFractionDigits: 0
    })
}

function de(e, t) {
    return e.split(`{amount}`).join(t)
}
var O, k, A, fe, j, M = e((() => {
    O = _(), C(), le(), w(), x(), y(), u(), c(), l(), r(), i(), a(), k = t(g()), h(), m(), A = d(), fe = `\xA0`, j = f({
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
//# sourceMappingURL=52e90bc8-ped9aw6lbrm61l16.js.map