import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fot as n,
    G5 as r,
    Iot as i,
    K5 as a,
    _6 as o,
    d6 as s,
    l6 as c,
    n0 as ee,
    oit as l,
    sit as te,
    t0 as u,
    v6 as ne,
    y6 as d
} from "./4813494d-ed29bs6yiwucn7st.js";
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
    _4t as ae,
    b4t as y,
    u4t as b
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    cv as x,
    lv as S
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    $h as oe,
    Im as C,
    Rm as w,
    Xh as T,
    eg as E
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    n as se,
    r as ce,
    t as le
} from "./25e34381-ih43sqma86zvqoem.js";

function D(e) {
    "use forget";
    let t = (0, fe.c)(59),
        {
            analyticsSurface: i,
            className: a,
            copyVariant: c,
            checkoutPricingConfig: l,
            keepTermsInline: u,
            offerMessage: d,
            promotion: f,
            termsMessage: p,
            view: m
        } = e,
        g = c === void 0 ? `per-member` : c,
        _ = u !== void 0 && u,
        v = ie(),
        y = f === void 0 ? oe() : f,
        x;
    t[0] === v ? x = t[1] : (x = ne({
        country: n().userCountry ?? o(v.locale),
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
    } = s(E), D = l ?? le, j = ue({
        checkoutPricingConfig: D,
        intl: v,
        numCredits: y?.inviteReward?.perEligibleInviteNumCredits
    }), M = ue({
        checkoutPricingConfig: D,
        intl: v,
        numCredits: y?.inviteReward?.maxCreditNumCredits
    }), N = y != null && j != null && (d != null || g === `per-member` || M != null), P = (0, O.useRef)(!1), F, I;
    if (t[5] !== i || t[6] !== N ? (F = () => {
            !N || P.current || (P.current = !0, ce({
                surface: i
            }))
        }, I = [i, N], t[5] = i, t[6] = N, t[7] = F, t[8] = I) : (F = t[7], I = t[8]), (0, O.useEffect)(F, I), !N || y == null || j == null) return null;
    let L = d == null ? g === `per-member` ? (0, k.jsx)(h, {
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
            ...d,
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
    t[17] === G ? K = t[18] : (K = r(`${b} underline underline-offset-2`, G), t[17] = G, t[18] = K);
    let q = K,
        J;
    t[19] !== i || t[20] !== q || t[21] !== H || t[22] !== W || t[23] !== V ? (J = V ? (0, k.jsx)(re, {
        className: q,
        to: H,
        onClick: e => {
            se({
                destination: `codex_team_start`,
                surface: i
            }), !te() && (e.preventDefault(), ee({
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
                surface: i
            })
        },
        children: W
    }), t[19] = i, t[20] = q, t[21] = H, t[22] = W, t[23] = V, t[24] = J) : J = t[24];
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
        t[29] === a ? e = t[30] : (e = r(`text-center text-[14px] leading-[22px] tracking-[-0.14px]`, b, a), t[29] = a, t[30] = e);
        let n;
        return t[31] !== Z || t[32] !== e ? (n = (0, k.jsx)(`p`, {
            className: e,
            children: Z
        }), t[31] = Z, t[32] = e, t[33] = n) : n = t[33], n
    }
    if (m === `landing`) {
        let e;
        t[34] === a ? e = t[35] : (e = r(`inline-flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[14px] leading-6 font-medium`, b, a), t[34] = a, t[35] = e);
        let n;
        t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, k.jsx)(S, {
            "aria-hidden": !0,
            className: r(`h-4 w-4 shrink-0`, b)
        }), t[36] = n) : n = t[36];
        let i;
        t[37] === Z ? i = t[38] : (i = (0, k.jsx)(`span`, {
            children: Z
        }), t[37] = Z, t[38] = i);
        let o;
        return t[39] !== e || t[40] !== i ? (o = (0, k.jsxs)(`div`, {
            className: e,
            children: [n, i]
        }), t[39] = e, t[40] = i, t[41] = o) : o = t[41], o
    }
    if (m === `callout`) {
        let e;
        t[42] === a ? e = t[43] : (e = r(`rounded-[24px] px-6 py-5`, ae, a), t[42] = a, t[43] = e);
        let n, i;
        t[44] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, k.jsx)(S, {
            "aria-hidden": !0,
            className: r(`h-4 w-4 shrink-0`, b)
        }), i = r(`min-w-0 flex-1 text-[12px] leading-[19px] font-semibold tracking-[-0.08px]`, b), t[44] = n, t[45] = i) : (n = t[44], i = t[45]);
        let o;
        t[46] === Z ? o = t[47] : (o = (0, k.jsxs)(`div`, {
            className: `flex items-center gap-4`,
            children: [n, (0, k.jsx)(`div`, {
                className: i,
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
    if (t[51] !== Z || t[52] !== a || t[53] !== B) {
        $ = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            let e = r(`w-full rounded-none px-4 py-2 text-center`, ae),
                n;t[56] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, k.jsx)(S, {
                "aria-hidden": !0,
                className: r(`h-4 w-4 shrink-0`, b)
            }), t[56] = n) : n = t[56];
            let i;t[57] === Z ? i = t[58] : (i = (0, k.jsxs)(`div`, {
                className: `flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[12px] leading-[18px] font-medium text-[#0D0D0D] dark:text-white/92`,
                children: [n, (0, k.jsx)(`span`, {
                    className: `min-w-0 break-words`,
                    children: Z
                })]
            }), t[57] = Z, t[58] = i);
            let o = i;
            if (B) {
                $ = (0, k.jsxs)(k.Fragment, {
                    children: [(0, k.jsx)(`div`, {
                        "aria-hidden": !0,
                        className: r(e, `pointer-events-none invisible pt-[calc(env(safe-area-inset-top,0px)+0.625rem)]`, a),
                        children: o
                    }), (0, k.jsx)(`div`, {
                        className: r(e, `fixed inset-x-0 top-0 z-50 pt-[calc(env(safe-area-inset-top,0px)+0.625rem)]`, a),
                        role: `status`,
                        "aria-live": `polite`,
                        children: o
                    })]
                });
                break bb0
            }
            Q = (0, k.jsx)(`div`, {
                className: r(e, a),
                role: `status`,
                "aria-live": `polite`,
                children: o
            })
        }
        t[51] = Z, t[52] = a, t[53] = B, t[54] = Q, t[55] = $
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
    fe = v(), C(), le(), E(), x(), y(), u(), l(), c(), d(), i(), a(), O = t(_()), g(), f(), k = p(), pe = `\xA0`, A = m({
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
//# sourceMappingURL=52e90bc8-c8sorn2j5xnbzaal.js.map