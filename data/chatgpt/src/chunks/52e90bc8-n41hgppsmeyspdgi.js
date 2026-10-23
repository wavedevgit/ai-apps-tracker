import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    E6 as n,
    F6 as r,
    I6 as i,
    K5 as a,
    Lit as o,
    O6 as s,
    P6 as ee,
    Rit as te,
    f0 as c,
    fst as ne,
    p0 as re,
    pst as l,
    q5 as u
} from "./4813494d-mdvd4786a87166cc.js";
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
    C4t as v,
    b4t as oe,
    p4t as y
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    ov as b,
    sv as x
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    Lh as se,
    Ph as ce,
    Rh as S,
    _m as C,
    hm as w
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    n as T,
    r as le,
    t as E
} from "./25e34381-m4hq61xmp627ptjb.js";

function D(e) {
    "use forget";
    let t = (0, fe.c)(59),
        {
            analyticsSurface: n,
            className: i,
            copyVariant: o,
            checkoutPricingConfig: c,
            keepTermsInline: l,
            offerMessage: u,
            promotion: d,
            termsMessage: f,
            view: m
        } = e,
        h = o === void 0 ? `per-member` : o,
        g = l !== void 0 && l,
        _ = ae(),
        v = d === void 0 ? se() : d,
        b;
    t[0] === _ ? b = t[1] : (b = r({
        country: ne().userCountry ?? ee(_.locale),
        shouldUseDefaultCountryCode: !1
    }), t[0] = _, t[1] = b);
    let S = b,
        C = c == null,
        w;
    t[2] !== S || t[3] !== C ? (w = {
        countryCode: S,
        enabled: C
    }, t[2] = S, t[3] = C, t[4] = w) : w = t[4];
    let {
        data: E
    } = s(w), D = c ?? E, j = ue({
        checkoutPricingConfig: D,
        intl: _,
        numCredits: v?.inviteReward?.perEligibleInviteNumCredits
    }), M = ue({
        checkoutPricingConfig: D,
        intl: _,
        numCredits: v?.inviteReward?.maxCreditNumCredits
    }), N = v != null && j != null && (u != null || h === `per-member` || M != null), P = (0, O.useRef)(!1), F, I;
    if (t[5] !== n || t[6] !== N ? (F = () => {
            !N || P.current || (P.current = !0, le({
                surface: n
            }))
        }, I = [n, N], t[5] = n, t[6] = N, t[7] = F, t[8] = I) : (F = t[7], I = t[8]), (0, O.useEffect)(F, I), !N || v == null || j == null) return null;
    let L = u == null ? h === `per-member` ? (0, k.jsx)(p, {
            ...A.inviteOfferText,
            values: {
                amount: j
            }
        }) : h === `max-team` && M != null ? (0, k.jsx)(p, {
            ...A.maxTeamOfferText,
            values: {
                maxAmount: M
            }
        }) : h === `checkout` && M != null ? (0, k.jsx)(p, {
            ...A.checkoutOfferText,
            values: {
                maxAmount: M
            }
        }) : de(v.offerText ?? _.formatMessage(A.defaultOfferText, {
            amount: j
        }), j) : (0, k.jsx)(p, {
            ...u,
            values: {
                amount: j,
                maxAmount: M
            }
        }),
        R;
    t[9] !== _ || t[10] !== v || t[11] !== f ? (R = f == null ? v.termsText ?? _.formatMessage(A.defaultTermsText) : _.formatMessage(f), t[9] = _, t[10] = v, t[11] = f, t[12] = R) : R = t[12];
    let z = R,
        B = m === `landing-header`,
        V = B,
        H = V ? ce : v.termsUrl,
        U;
    t[13] !== _ || t[14] !== V || t[15] !== z ? (U = V ? _.formatMessage(A.getStartedCta) : z, t[13] = _, t[14] = V, t[15] = z, t[16] = U) : U = t[16];
    let W = `${U} \u2192`,
        G = g && `whitespace-nowrap`,
        K;
    t[17] === G ? K = t[18] : (K = a(`${y} underline underline-offset-2`, G), t[17] = G, t[18] = K);
    let q = K,
        J;
    t[19] !== n || t[20] !== q || t[21] !== H || t[22] !== W || t[23] !== V ? (J = V ? (0, k.jsx)(ie, {
        className: q,
        to: H,
        onClick: e => {
            T({
                destination: `codex_team_start`,
                surface: n
            }), !te() && (e.preventDefault(), re({
                callbackUrl: ce,
                skipLoginModal: !1
            }))
        },
        children: W
    }) : (0, k.jsx)(`a`, {
        className: q,
        href: H,
        rel: `noreferrer`,
        target: `_blank`,
        onClick: () => {
            T({
                destination: `terms`,
                surface: n
            })
        },
        children: W
    }), t[19] = n, t[20] = q, t[21] = H, t[22] = W, t[23] = V, t[24] = J) : J = t[24];
    let Y = J,
        X;
    t[25] !== Y || t[26] !== g || t[27] !== L ? (X = g ? (0, k.jsxs)(`span`, {
        children: [L, pe, Y]
    }) : (0, k.jsxs)(`span`, {
        className: `inline-flex flex-wrap items-center gap-x-1`,
        children: [(0, k.jsx)(`span`, {
            children: L
        }), Y]
    }), t[25] = Y, t[26] = g, t[27] = L, t[28] = X) : X = t[28];
    let Z = X;
    if (m === `inline`) {
        let e;
        t[29] === i ? e = t[30] : (e = a(`text-center text-[14px] leading-[22px] tracking-[-0.14px]`, y, i), t[29] = i, t[30] = e);
        let n;
        return t[31] !== Z || t[32] !== e ? (n = (0, k.jsx)(`p`, {
            className: e,
            children: Z
        }), t[31] = Z, t[32] = e, t[33] = n) : n = t[33], n
    }
    if (m === `landing`) {
        let e;
        t[34] === i ? e = t[35] : (e = a(`inline-flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[14px] leading-6 font-medium`, y, i), t[34] = i, t[35] = e);
        let n;
        t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, k.jsx)(x, {
            "aria-hidden": !0,
            className: a(`h-4 w-4 shrink-0`, y)
        }), t[36] = n) : n = t[36];
        let r;
        t[37] === Z ? r = t[38] : (r = (0, k.jsx)(`span`, {
            children: Z
        }), t[37] = Z, t[38] = r);
        let o;
        return t[39] !== e || t[40] !== r ? (o = (0, k.jsxs)(`div`, {
            className: e,
            children: [n, r]
        }), t[39] = e, t[40] = r, t[41] = o) : o = t[41], o
    }
    if (m === `callout`) {
        let e;
        t[42] === i ? e = t[43] : (e = a(`rounded-[24px] px-6 py-5`, oe, i), t[42] = i, t[43] = e);
        let n, r;
        t[44] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, k.jsx)(x, {
            "aria-hidden": !0,
            className: a(`h-4 w-4 shrink-0`, y)
        }), r = a(`min-w-0 flex-1 text-[12px] leading-[19px] font-semibold tracking-[-0.08px]`, y), t[44] = n, t[45] = r) : (n = t[44], r = t[45]);
        let o;
        t[46] === Z ? o = t[47] : (o = (0, k.jsxs)(`div`, {
            className: `flex items-center gap-4`,
            children: [n, (0, k.jsx)(`div`, {
                className: r,
                children: Z
            })]
        }), t[46] = Z, t[47] = o);
        let s;
        return t[48] !== e || t[49] !== o ? (s = (0, k.jsx)(`div`, {
            className: e,
            role: `status`,
            "aria-live": `polite`,
            children: o
        }), t[48] = e, t[49] = o, t[50] = s) : s = t[50], s
    }
    let Q, $;
    if (t[51] !== Z || t[52] !== i || t[53] !== B) {
        $ = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            let e = a(`w-full rounded-none px-4 py-2 text-center`, oe),
                n;t[56] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, k.jsx)(x, {
                "aria-hidden": !0,
                className: a(`h-4 w-4 shrink-0`, y)
            }), t[56] = n) : n = t[56];
            let r;t[57] === Z ? r = t[58] : (r = (0, k.jsxs)(`div`, {
                className: `flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[12px] leading-[18px] font-medium text-[#0D0D0D] dark:text-white/92`,
                children: [n, (0, k.jsx)(`span`, {
                    className: `min-w-0 break-words`,
                    children: Z
                })]
            }), t[57] = Z, t[58] = r);
            let o = r;
            if (B) {
                $ = (0, k.jsxs)(k.Fragment, {
                    children: [(0, k.jsx)(`div`, {
                        "aria-hidden": !0,
                        className: a(e, `pointer-events-none invisible pt-[calc(env(safe-area-inset-top,0px)+0.625rem)]`, i),
                        children: o
                    }), (0, k.jsx)(`div`, {
                        className: a(e, `fixed inset-x-0 top-0 z-50 pt-[calc(env(safe-area-inset-top,0px)+0.625rem)]`, i),
                        role: `status`,
                        "aria-live": `polite`,
                        children: o
                    })]
                });
                break bb0
            }
            Q = (0, k.jsx)(`div`, {
                className: a(e, i),
                role: `status`,
                "aria-live": `polite`,
                children: o
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
    } = e.currencyConfig, o = C({
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
var fe, O, k, pe, A, j = e((() => {
    fe = _(), w(), E(), S(), b(), v(), c(), o(), n(), i(), l(), u(), O = t(g()), h(), m(), k = d(), pe = `\xA0`, A = f({
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
    j as n, D as t
};
//# sourceMappingURL=52e90bc8-n41hgppsmeyspdgi.js.map