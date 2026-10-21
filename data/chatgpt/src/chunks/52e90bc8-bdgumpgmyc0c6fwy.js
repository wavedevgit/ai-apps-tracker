import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    D6 as n,
    Dit as r,
    F6 as i,
    N6 as a,
    Oit as o,
    P6 as ee,
    T6 as s,
    c7 as c,
    f0 as l,
    l7 as u,
    nst as te,
    p0 as ne,
    rst as d
} from "./4813494d-t80q9ew944ej0mgk.js";
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
    _4t as y,
    m4t as ae,
    s4t as b
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    cv as x,
    lv as S
} from "./30901919-r9pahacmzqudnt4f.js";
import {
    Mh as oe,
    Nh as C,
    hm as w,
    kh as T,
    pm as E
} from "./c2675c8c-p3x4d0bnf7e77o1n.js";
import {
    n as se,
    r as ce,
    t as le
} from "./25e34381-hmn0x2pblxdl7vyb.js";

function D(e) {
    "use forget";
    let t = (0, fe.c)(59),
        {
            analyticsSurface: r,
            className: i,
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
        E;
    t[2] !== C || t[3] !== w ? (E = {
        countryCode: C,
        enabled: w
    }, t[2] = C, t[3] = w, t[4] = E) : E = t[4];
    let {
        data: le
    } = n(E), D = l ?? le, j = ue({
        checkoutPricingConfig: D,
        intl: v,
        numCredits: y?.inviteReward?.perEligibleInviteNumCredits
    }), M = ue({
        checkoutPricingConfig: D,
        intl: v,
        numCredits: y?.inviteReward?.maxCreditNumCredits
    }), N = y != null && j != null && (d != null || g === `per-member` || M != null), P = (0, O.useRef)(!1), F, I;
    if (t[5] !== r || t[6] !== N ? (F = () => {
            !N || P.current || (P.current = !0, ce({
                surface: r
            }))
        }, I = [r, N], t[5] = r, t[6] = N, t[7] = F, t[8] = I) : (F = t[7], I = t[8]), (0, O.useEffect)(F, I), !N || y == null || j == null) return null;
    let L = d == null ? g === `per-member` ? (0, k.jsx)(m, {
            ...A.inviteOfferText,
            values: {
                amount: j
            }
        }) : g === `max-team` && M != null ? (0, k.jsx)(m, {
            ...A.maxTeamOfferText,
            values: {
                maxAmount: M
            }
        }) : g === `checkout` && M != null ? (0, k.jsx)(m, {
            ...A.checkoutOfferText,
            values: {
                maxAmount: M
            }
        }) : de(y.offerText ?? v.formatMessage(A.defaultOfferText, {
            amount: j
        }), j) : (0, k.jsx)(m, {
            ...d,
            values: {
                amount: j,
                maxAmount: M
            }
        }),
        R;
    t[9] !== v || t[10] !== y || t[11] !== p ? (R = p == null ? y.termsText ?? v.formatMessage(A.defaultTermsText) : v.formatMessage(p), t[9] = v, t[10] = y, t[11] = p, t[12] = R) : R = t[12];
    let z = R,
        B = h === `landing-header`,
        V = B,
        H = V ? T : y.termsUrl,
        U;
    t[13] !== v || t[14] !== V || t[15] !== z ? (U = V ? v.formatMessage(A.getStartedCta) : z, t[13] = v, t[14] = V, t[15] = z, t[16] = U) : U = t[16];
    let W = `${U} \u2192`,
        G = _ && `whitespace-nowrap`,
        K;
    t[17] === G ? K = t[18] : (K = c(`${b} underline underline-offset-2`, G), t[17] = G, t[18] = K);
    let q = K,
        J;
    t[19] !== r || t[20] !== q || t[21] !== H || t[22] !== W || t[23] !== V ? (J = V ? (0, k.jsx)(re, {
        className: q,
        to: H,
        onClick: e => {
            se({
                destination: `codex_team_start`,
                surface: r
            }), !o() && (e.preventDefault(), ne({
                callbackUrl: T,
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
            se({
                destination: `terms`,
                surface: r
            })
        },
        children: W
    }), t[19] = r, t[20] = q, t[21] = H, t[22] = W, t[23] = V, t[24] = J) : J = t[24];
    let Y = J,
        X;
    t[25] !== Y || t[26] !== _ || t[27] !== L ? (X = _ ? (0, k.jsxs)(`span`, {
        children: [L, pe, Y]
    }) : (0, k.jsxs)(`span`, {
        className: `inline-flex flex-wrap items-center gap-x-1`,
        children: [(0, k.jsx)(`span`, {
            children: L
        }), Y]
    }), t[25] = Y, t[26] = _, t[27] = L, t[28] = X) : X = t[28];
    let Z = X;
    if (h === `inline`) {
        let e;
        t[29] === i ? e = t[30] : (e = c(`text-center text-[14px] leading-[22px] tracking-[-0.14px]`, b, i), t[29] = i, t[30] = e);
        let n;
        return t[31] !== Z || t[32] !== e ? (n = (0, k.jsx)(`p`, {
            className: e,
            children: Z
        }), t[31] = Z, t[32] = e, t[33] = n) : n = t[33], n
    }
    if (h === `landing`) {
        let e;
        t[34] === i ? e = t[35] : (e = c(`inline-flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[14px] leading-6 font-medium`, b, i), t[34] = i, t[35] = e);
        let n;
        t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, k.jsx)(S, {
            "aria-hidden": !0,
            className: c(`h-4 w-4 shrink-0`, b)
        }), t[36] = n) : n = t[36];
        let r;
        t[37] === Z ? r = t[38] : (r = (0, k.jsx)(`span`, {
            children: Z
        }), t[37] = Z, t[38] = r);
        let a;
        return t[39] !== e || t[40] !== r ? (a = (0, k.jsxs)(`div`, {
            className: e,
            children: [n, r]
        }), t[39] = e, t[40] = r, t[41] = a) : a = t[41], a
    }
    if (h === `callout`) {
        let e;
        t[42] === i ? e = t[43] : (e = c(`rounded-[24px] px-6 py-5`, ae, i), t[42] = i, t[43] = e);
        let n, r;
        t[44] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, k.jsx)(S, {
            "aria-hidden": !0,
            className: c(`h-4 w-4 shrink-0`, b)
        }), r = c(`min-w-0 flex-1 text-[12px] leading-[19px] font-semibold tracking-[-0.08px]`, b), t[44] = n, t[45] = r) : (n = t[44], r = t[45]);
        let a;
        t[46] === Z ? a = t[47] : (a = (0, k.jsxs)(`div`, {
            className: `flex items-center gap-4`,
            children: [n, (0, k.jsx)(`div`, {
                className: r,
                children: Z
            })]
        }), t[46] = Z, t[47] = a);
        let o;
        return t[48] !== e || t[49] !== a ? (o = (0, k.jsx)(`div`, {
            className: e,
            role: `status`,
            "aria-live": `polite`,
            children: a
        }), t[48] = e, t[49] = a, t[50] = o) : o = t[50], o
    }
    let Q, $;
    if (t[51] !== Z || t[52] !== i || t[53] !== B) {
        $ = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            let e = c(`w-full rounded-none px-4 py-2 text-center`, ae),
                n;t[56] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, k.jsx)(S, {
                "aria-hidden": !0,
                className: c(`h-4 w-4 shrink-0`, b)
            }), t[56] = n) : n = t[56];
            let r;t[57] === Z ? r = t[58] : (r = (0, k.jsxs)(`div`, {
                className: `flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[12px] leading-[18px] font-medium text-[#0D0D0D] dark:text-white/92`,
                children: [n, (0, k.jsx)(`span`, {
                    className: `min-w-0 break-words`,
                    children: Z
                })]
            }), t[57] = Z, t[58] = r);
            let a = r;
            if (B) {
                $ = (0, k.jsxs)(k.Fragment, {
                    children: [(0, k.jsx)(`div`, {
                        "aria-hidden": !0,
                        className: c(e, `pointer-events-none invisible pt-[calc(env(safe-area-inset-top,0px)+0.625rem)]`, i),
                        children: a
                    }), (0, k.jsx)(`div`, {
                        className: c(e, `fixed inset-x-0 top-0 z-50 pt-[calc(env(safe-area-inset-top,0px)+0.625rem)]`, i),
                        role: `status`,
                        "aria-live": `polite`,
                        children: a
                    })]
                });
                break bb0
            }
            Q = (0, k.jsx)(`div`, {
                className: c(e, i),
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
    } = e.currencyConfig, o = w({
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
    fe = v(), E(), le(), C(), x(), y(), l(), r(), s(), i(), d(), u(), O = t(_()), g(), h(), k = f(), pe = `\xA0`, A = p({
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
//# sourceMappingURL=52e90bc8-bdgumpgmyc0c6fwy.js.map