import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    G3 as r,
    K3 as i,
    L3 as a,
    Nrt as o,
    Prt as ee,
    b5 as s,
    cot as te,
    k1 as c,
    lot as l,
    q3 as u,
    y5 as d,
    z3 as ne
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as f,
    Bn as p,
    Ln as m,
    Nn as h,
    Rn as g,
    Vn as _,
    at as re,
    wn as v,
    zn as ie
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    E4t as ae,
    k4t as y,
    y4t as b
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    cv as x,
    lv as S
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    $h as oe,
    Bm as C,
    Rm as w,
    Xh as T,
    eg as E
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    n as se,
    r as ce,
    t as le
} from "./25e34381-fa60zxrvee32smui.js";

function D(e) {
    "use forget";
    let t = (0, fe.c)(59),
        {
            analyticsSurface: a,
            className: o,
            copyVariant: s,
            checkoutPricingConfig: c,
            keepTermsInline: l,
            offerMessage: u,
            promotion: f,
            termsMessage: p,
            view: m
        } = e,
        g = s === void 0 ? `per-member` : s,
        _ = l !== void 0 && l,
        v = ie(),
        y = f === void 0 ? oe() : f,
        x;
    t[0] === v ? x = t[1] : (x = i({
        country: te().userCountry ?? r(v.locale),
        shouldUseDefaultCountryCode: !1
    }), t[0] = v, t[1] = x);
    let C = x,
        w = c == null,
        E;
    t[2] !== C || t[3] !== w ? (E = {
        countryCode: C,
        enabled: w
    }, t[2] = C, t[3] = w, t[4] = E) : E = t[4];
    let {
        data: le
    } = ne(E), D = c ?? le, j = ue({
        checkoutPricingConfig: D,
        intl: v,
        numCredits: y?.inviteReward?.perEligibleInviteNumCredits
    }), M = ue({
        checkoutPricingConfig: D,
        intl: v,
        numCredits: y?.inviteReward?.maxCreditNumCredits
    }), N = y != null && j != null && (u != null || g === `per-member` || M != null), P = (0, O.useRef)(!1), F, I;
    if (t[5] !== a || t[6] !== N ? (F = () => {
            !N || P.current || (P.current = !0, ce({
                surface: a
            }))
        }, I = [a, N], t[5] = a, t[6] = N, t[7] = F, t[8] = I) : (F = t[7], I = t[8]), (0, O.useEffect)(F, I), !N || y == null || j == null) return null;
    let L = u == null ? g === `per-member` ? (0, k.jsx)(h, {
            ...A.inviteOfferText,
            values: {
                amount: j
            }
        }) : g === `max-team` && M != null ? (0, k.jsx)(h, {
            ...A.maxTeamOfferText,
            values: {
                maxAmount: M
            }
        }) : g === `checkout` && M != null ? (0, k.jsx)(h, {
            ...A.checkoutOfferText,
            values: {
                maxAmount: M
            }
        }) : de(y.offerText ?? v.formatMessage(A.defaultOfferText, {
            amount: j
        }), j) : (0, k.jsx)(h, {
            ...u,
            values: {
                amount: j,
                maxAmount: M
            }
        }),
        R;
    t[9] !== v || t[10] !== y || t[11] !== p ? (R = p == null ? y.termsText ?? v.formatMessage(A.defaultTermsText) : v.formatMessage(p), t[9] = v, t[10] = y, t[11] = p, t[12] = R) : R = t[12];
    let z = R,
        B = m === `landing-header`,
        V = B,
        H = V ? T : y.termsUrl,
        U;
    t[13] !== v || t[14] !== V || t[15] !== z ? (U = V ? v.formatMessage(A.getStartedCta) : z, t[13] = v, t[14] = V, t[15] = z, t[16] = U) : U = t[16];
    let W = `${U} \u2192`,
        G = _ && `whitespace-nowrap`,
        K;
    t[17] === G ? K = t[18] : (K = d(`${b} underline underline-offset-2`, G), t[17] = G, t[18] = K);
    let q = K,
        J;
    t[19] !== a || t[20] !== q || t[21] !== H || t[22] !== W || t[23] !== V ? (J = V ? (0, k.jsx)(re, {
        className: q,
        to: H,
        onClick: e => {
            se({
                destination: `codex_team_start`,
                surface: a
            }), !ee() && (e.preventDefault(), n({
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
                surface: a
            })
        },
        children: W
    }), t[19] = a, t[20] = q, t[21] = H, t[22] = W, t[23] = V, t[24] = J) : J = t[24];
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
    if (m === `inline`) {
        let e;
        t[29] === o ? e = t[30] : (e = d(`text-center text-[14px] leading-[22px] tracking-[-0.14px]`, b, o), t[29] = o, t[30] = e);
        let n;
        return t[31] !== Z || t[32] !== e ? (n = (0, k.jsx)(`p`, {
            className: e,
            children: Z
        }), t[31] = Z, t[32] = e, t[33] = n) : n = t[33], n
    }
    if (m === `landing`) {
        let e;
        t[34] === o ? e = t[35] : (e = d(`inline-flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[14px] leading-6 font-medium`, b, o), t[34] = o, t[35] = e);
        let n;
        t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, k.jsx)(S, {
            "aria-hidden": !0,
            className: d(`h-4 w-4 shrink-0`, b)
        }), t[36] = n) : n = t[36];
        let r;
        t[37] === Z ? r = t[38] : (r = (0, k.jsx)(`span`, {
            children: Z
        }), t[37] = Z, t[38] = r);
        let i;
        return t[39] !== e || t[40] !== r ? (i = (0, k.jsxs)(`div`, {
            className: e,
            children: [n, r]
        }), t[39] = e, t[40] = r, t[41] = i) : i = t[41], i
    }
    if (m === `callout`) {
        let e;
        t[42] === o ? e = t[43] : (e = d(`rounded-[24px] px-6 py-5`, ae, o), t[42] = o, t[43] = e);
        let n, r;
        t[44] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, k.jsx)(S, {
            "aria-hidden": !0,
            className: d(`h-4 w-4 shrink-0`, b)
        }), r = d(`min-w-0 flex-1 text-[12px] leading-[19px] font-semibold tracking-[-0.08px]`, b), t[44] = n, t[45] = r) : (n = t[44], r = t[45]);
        let i;
        t[46] === Z ? i = t[47] : (i = (0, k.jsxs)(`div`, {
            className: `flex items-center gap-4`,
            children: [n, (0, k.jsx)(`div`, {
                className: r,
                children: Z
            })]
        }), t[46] = Z, t[47] = i);
        let a;
        return t[48] !== e || t[49] !== i ? (a = (0, k.jsx)(`div`, {
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
            let e = d(`w-full rounded-none px-4 py-2 text-center`, ae),
                n;t[56] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, k.jsx)(S, {
                "aria-hidden": !0,
                className: d(`h-4 w-4 shrink-0`, b)
            }), t[56] = n) : n = t[56];
            let r;t[57] === Z ? r = t[58] : (r = (0, k.jsxs)(`div`, {
                className: `flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[12px] leading-[18px] font-medium text-[#0D0D0D] dark:text-white/92`,
                children: [n, (0, k.jsx)(`span`, {
                    className: `min-w-0 break-words`,
                    children: Z
                })]
            }), t[57] = Z, t[58] = r);
            let i = r;
            if (B) {
                $ = (0, k.jsxs)(k.Fragment, {
                    children: [(0, k.jsx)(`div`, {
                        "aria-hidden": !0,
                        className: d(e, `pointer-events-none invisible pt-[calc(env(safe-area-inset-top,0px)+0.625rem)]`, o),
                        children: i
                    }), (0, k.jsx)(`div`, {
                        className: d(e, `fixed inset-x-0 top-0 z-50 pt-[calc(env(safe-area-inset-top,0px)+0.625rem)]`, o),
                        role: `status`,
                        "aria-live": `polite`,
                        children: i
                    })]
                });
                break bb0
            }
            Q = (0, k.jsx)(`div`, {
                className: d(e, o),
                role: `status`,
                "aria-live": `polite`,
                children: i
            })
        }
        t[51] = Z, t[52] = o, t[53] = B, t[54] = Q, t[55] = $
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
    fe = v(), w(), le(), E(), x(), y(), c(), o(), a(), u(), l(), s(), O = t(_()), g(), f(), k = p(), pe = `\xA0`, A = m({
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
//# sourceMappingURL=52e90bc8-c7vtoi64553ovyj1.js.map