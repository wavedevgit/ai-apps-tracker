import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CI as n,
    OI as r,
    PI as i,
    _st as a,
    hst as o,
    nct as s
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as c,
    Ln as l,
    Nn as u,
    Rn as d,
    Vn as f,
    wn as p,
    zn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bn as h,
    Hn as g,
    Kin as _,
    Ln as v,
    Un as y,
    Win as b,
    dsn as x
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    TS as S,
    Tm as C,
    Zh as w,
    vm as T,
    xS as E
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    $ as D,
    H as O,
    Q as ee,
    U as k
} from "./65d375cd-iayee160zdvbcpne.js";
import {
    a as A,
    i as j
} from "./ba59b5eb-ck24jpxw2e448ehe.js";

function M(e, t, n) {
    let r = e === t;
    return {
        useReplacement: r,
        isReviewReplacement: r || e === n
    }
}
var te = e((() => {})),
    N = e((() => {
        i()
    }));

function P(e) {
    "use forget";
    let t = (0, R.c)(8),
        {
            checkoutSessionId: n,
            businessMaximumSeats: r,
            businessSeatLineItems: i,
            businessDiscountTargetSeatTypes: a,
            reactivationMinimumSeatQuantities: o,
            replacementCheckoutSession: s,
            children: c
        } = e,
        l = a === void 0 ? null : a,
        u = o === void 0 ? null : o,
        d = s === void 0 ? null : s,
        f;
    return t[0] !== l || t[1] !== r || t[2] !== i || t[3] !== n || t[4] !== c || t[5] !== u || t[6] !== d ? (f = (0, B.jsx)(F, {
        checkoutSessionId: n,
        businessMaximumSeats: r,
        businessSeatLineItems: i,
        businessDiscountTargetSeatTypes: l,
        reactivationMinimumSeatQuantities: u,
        replacementCheckoutSession: d,
        children: c
    }, n), t[0] = l, t[1] = r, t[2] = i, t[3] = n, t[4] = c, t[5] = u, t[6] = d, t[7] = f) : f = t[7], f
}

function F(e) {
    "use forget";
    let t = (0, R.c)(14),
        {
            checkoutSessionId: n,
            businessMaximumSeats: i,
            businessSeatLineItems: a,
            businessDiscountTargetSeatTypes: o,
            reactivationMinimumSeatQuantities: s,
            replacementCheckoutSession: c,
            children: l
        } = e,
        [u, d] = (0, z.useState)(i),
        [f, p] = (0, z.useState)(a),
        [m, h] = (0, z.useState)(o),
        [g, _] = (0, z.useState)(s),
        v = (0, z.useRef)(n),
        y = (0, z.useRef)(a),
        [b, x] = (0, z.useState)(0),
        C;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (e, t) => {
        e.business_maximum_seats !== void 0 && d(e.business_maximum_seats);
        let n = y.current,
            i = r(e);
        y.current = i, h(e.business_discount_target_seat_types ?? null), e.reactivation_minimum_seat_quantities !== void 0 && _(e.reactivation_minimum_seat_quantities);
        let a = n != null && Object.values(n).some(L),
            o = i != null && Object.values(i).some(I);
        p(!t && n != null && i != null && (a || o) ? {
            ...n,
            ...i
        } : i)
    }, t[0] = C) : C = t[0];
    let w = C,
        T;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (T = e => {
        e.checkout_session_id === v.current && w(e, !1)
    }, t[1] = T) : T = t[1];
    let E = T,
        D, O;
    t[2] === c ? (D = t[3], O = t[4]) : (D = () => {
        c != null && (v.current = c.checkout_session_id, w(c, !0))
    }, O = [w, c], t[2] = c, t[3] = D, t[4] = O), S(D, O);
    let k;
    t[5] !== m || t[6] !== f || t[7] !== b || t[8] !== u || t[9] !== g ? (k = {
        businessMaximumSeats: u,
        lineItems: f,
        discountTargetSeatTypes: m,
        reactivationMinimumSeatQuantities: g,
        locallySelectedPremiumSeats: b,
        refreshFromCheckoutSession: E,
        setLocallySelectedPremiumSeats: x
    }, t[5] = m, t[6] = f, t[7] = b, t[8] = u, t[9] = g, t[10] = k) : k = t[10];
    let A = k,
        j;
    return t[11] !== l || t[12] !== A ? (j = (0, B.jsx)(ee.Provider, {
        value: A,
        children: l
    }), t[11] = l, t[12] = A, t[13] = j) : j = t[13], j
}

function I(e) {
    return e.seat_type === n.PREMIUM
}

function L(e) {
    return e.seat_type === n.PREMIUM
}
var R, z, B, V = e((() => {
    R = p(), D(), N(), x(), z = t(f()), E(), B = c()
}));

function H({
    checkout: e,
    renderInvoice: t,
    creditDiscountOffer: n,
    hasCreditDiscountOffer: r = !1,
    isRateLimitResetCheckout: i = !1,
    presentation: a = `page`,
    isSubmitting: o = !1,
    isTaxQuotePending: s = !1
}) {
    "use no forget";
    let c = m(),
        l = a === `inline`,
        d = a !== `page`,
        f = y(v, e => e.codexAutoTopUpEnabled),
        p = y(v, e => e.codexAutoTopUpEnrollInDiscount),
        h = e.lineItems[0]?.quantity ?? 0,
        g = e.discountAmounts?.[0]?.percentOff,
        _ = A(n?.auto_reload?.tiers, h),
        x = A(n?.one_time.tiers, h),
        S = f === !0 && p === !0 && g != null && _ != null && _.percent_off === g,
        C = S && _.percent_off > (x?.percent_off ?? 0),
        w = i ? c.formatMessage(W.rateLimitResetLineItem, {
            quantity: c.formatNumber(h)
        }) : c.formatMessage(b(), {
            credits: c.formatNumber(h)
        });
    return (0, U.jsxs)(`section`, {
        className: l ? `flex flex-col px-2 pt-1` : d ? `flex flex-col` : `flex flex-col gap-4`,
        children: [d ? null : (0, U.jsx)(`h2`, {
            className: `text-[18px] leading-6.5 font-semibold text-token-text-primary`,
            children: c.formatMessage(W.orderSummary)
        }), t({
            className: a === `modal` ? `[&>div]:gap-1.5` : void 0,
            collapseDiscountsIntoSubtotal: l,
            discountAmountClassName: a === `modal` && r ? `text-token-text-accent font-normal` : C ? `bg-[var(--theme-purple-background)] text-[var(--theme-purple-text)] ms-auto inline-flex min-h-5 grow-0! items-center rounded-xl px-[5px] font-normal motion-safe:starting:bg-transparent motion-safe:starting:px-0 motion-safe:starting:text-token-text-secondary motion-safe:transition-[background-color,color,padding] motion-safe:delay-[800ms] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]` : r ? `text-green-600 font-normal dark:text-green-700` : void 0,
            discountTitleOverride: r && g != null ? c.formatMessage(W.creditVolumeDiscountPercentage, {
                percentOff: g / 100
            }) : void 0,
            discountSubtitleOverride: S ? (0, U.jsx)(`span`, {
                className: a === `modal` ? `mt-0.5 block text-xs leading-4 font-normal tracking-normal text-token-text-tertiary` : void 0,
                children: (0, U.jsx)(u, {
                    id: `StandaloneCreditCheckout.futureAutoReloadDiscountSubtitle`,
                    defaultMessage: `Discount also applies to future auto-reloads`
                })
            }) : r ? `` : void 0,
            isTaxQuoteLoading: d && !o && s,
            forceSummaryLoading: d && (o || s) ? !1 : void 0,
            spacingVariant: l ? `inlineCredit` : `standaloneCredit`,
            subtotalTitle: l ? c.formatMessage({
                id: `chatgpt.inline_credit_checkout.summary.subtotal.label`,
                defaultMessage: `Subtotal`
            }) : w,
            totalClassName: l ? `text-token-text-primary! text-footnote-medium!` : a === `modal` ? `text-token-text-primary! text-sm leading-5 font-semibold!` : void 0,
            totalTitleOverride: l ? c.formatMessage({
                id: `chatgpt.inline_credit_checkout.summary.total.label`,
                defaultMessage: `Total due`
            }) : a === `modal` ? c.formatMessage(W.totalDueToday) : void 0
        })]
    })
}
var U, W, G = e((() => {
    d(), g(), h(), j(), _(), U = c(), W = l({
        rateLimitResetLineItem: {
            id: `chatgpt.codex.rate_limit_reset.checkout.summary.line_item`,
            defaultMessage: `{quantity} × Usage limit reset`
        },
        creditVolumeDiscountPercentage: {
            id: `StandaloneCreditCheckout.creditVolumeDiscountPercentage`,
            defaultMessage: `{percentOff, number, ::percent} off`
        },
        orderSummary: {
            id: `StandaloneCreditCheckout.orderSummary`,
            defaultMessage: `Order summary`
        },
        totalDueToday: {
            id: `StandaloneCreditCheckout.totalDueToday`,
            defaultMessage: `Total due today`
        }
    })
}));

function K(e) {
    "use forget";
    let t = (0, q.c)(10),
        n = C(),
        r;
    t[0] !== e.checkoutPricingConfig || t[1] !== e.forceShowBalanceAdjustment || t[2] !== e.immediateDiscountSettings || t[3] !== e.planType || t[4] !== e.scheduledDiscountPreview ? (r = t => {
        let {
            forceSummaryLoading: n,
            ...r
        } = t;
        return (0, J.jsx)(O, {
            ...r,
            checkoutPricingConfig: e.checkoutPricingConfig,
            immediateDiscountSettings: e.immediateDiscountSettings,
            planType: e.planType,
            scheduledDiscountPreview: e.scheduledDiscountPreview,
            forceShowBalanceAdjustment: e.forceShowBalanceAdjustment,
            showCheckoutAssurances: !1,
            isSummaryLoading: n
        })
    }, t[0] = e.checkoutPricingConfig, t[1] = e.forceShowBalanceAdjustment, t[2] = e.immediateDiscountSettings, t[3] = e.planType, t[4] = e.scheduledDiscountPreview, t[5] = r) : r = t[5];
    let i;
    return t[6] !== n || t[7] !== e || t[8] !== r ? (i = (0, J.jsx)(H, {
        ...e,
        checkout: n,
        renderInvoice: r
    }), t[6] = n, t[7] = e, t[8] = r, t[9] = i) : i = t[9], i
}
var q, J, Y = e((() => {
        q = p(), G(), T(), k(), J = c()
    })),
    X = e((() => {
        w()
    }));

function Z(e) {
    return $.has(e)
}

function ne(e) {
    if (!e) return null;
    let t = e.toLowerCase();
    return (Q[e] ?? Q[t]) || (Z(t) ? t : o.PLUS)
}
var Q, $, re = e((() => {
    s(), Q = {
        [a.FREE]: o.FREE,
        [a.GO]: o.GO,
        [a.PLUS]: o.PLUS,
        [a.PLUS_FREE]: o.PLUS,
        [a.PLUS_NO_PAYMENT_TRIAL]: o.PLUS,
        [a.PROLITE]: o.PROLITE,
        [a.PRO]: o.PRO,
        [a.PROMAX]: o.PROMAX,
        [a.PROMAX_FREE]: o.PROMAX,
        [a.PRO_FREE]: o.PRO,
        [a.SELF_SERVE_BUSINESS]: o.SELF_SERVE_BUSINESS,
        [a.SELF_SERVE_BUSINESS_PROLITE]: o.SELF_SERVE_BUSINESS,
        [a.SELF_SERVE_BUSINESS_USAGE_BASED]: o.SELF_SERVE_BUSINESS,
        [a.SCI]: o.SCI,
        [a.ENTERPRISE_CBP_FLAT]: o.ENTERPRISE_CBP,
        [a.ENTERPRISE_CBP_SEAT_USAGE]: o.ENTERPRISE_CBP,
        [a.HC_FLAT]: o.HC,
        [a.HC_SEAT_USAGE]: o.HC,
        [a.FINSERV]: o.FINSERV,
        [a.LAW]: o.LAW,
        [a.HC_CONSUMPTION]: o.HC_CONSUMPTION,
        [a.ENT26]: o.ENT26,
        [a.EDUCATION_CBP_FLAT]: o.EDUCATION_CBP,
        [a.EDU_PLUS]: o.EDU_PLUS,
        [a.EDU_PRO]: o.EDU_PRO,
        [a.QUORUM]: o.QUORUM,
        [a.DEPRECATED_ENTERPRISE]: o.DEPRECATED_ENTERPRISE,
        [a.DEPRECATED_EDU]: o.DEPRECATED_EDU,
        [a.K12]: o.K12
    }, $ = new Set(Object.values(o))
}));
export {
    Y as a, N as c, K as i, M as l, ne as n, P as o, X as r, V as s, re as t, te as u
};
//# sourceMappingURL=88fdc6d5-e548b8gi3mb3jmvj.js.map