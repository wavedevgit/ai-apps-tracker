import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    DI as n,
    NI as r,
    SI as i,
    Zst as a,
    fst as o,
    ust as s
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as c,
    Ln as l,
    Nn as u,
    Rn as d,
    Vn as f,
    wn as p,
    zn as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Bn as h,
    Hn as g,
    Ln as _,
    Un as v,
    Vin as y,
    osn as b,
    zin as x
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Sg as S,
    Um as C,
    Xm as w,
    eC as T,
    iC as ee
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    $ as E,
    H as D,
    Q as O,
    U as k
} from "./65d375cd-b51nde3ttnonocgr.js";
import {
    a as A,
    i as j
} from "./ba59b5eb-krb0rv3k98yf6059.js";

function te(e, t, n) {
    let r = e === t;
    return {
        useReplacement: r,
        isReviewReplacement: r || e === n
    }
}
var M = e((() => {})),
    N = e((() => {
        r()
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
            checkoutSessionId: r,
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
        v = (0, z.useRef)(r),
        y = (0, z.useRef)(a),
        [b, x] = (0, z.useState)(0),
        S;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (e, t) => {
        e.business_maximum_seats !== void 0 && d(e.business_maximum_seats);
        let r = y.current,
            i = n(e);
        y.current = i, h(e.business_discount_target_seat_types ?? null), e.reactivation_minimum_seat_quantities !== void 0 && _(e.reactivation_minimum_seat_quantities);
        let a = r != null && Object.values(r).some(L),
            o = i != null && Object.values(i).some(I);
        p(!t && r != null && i != null && (a || o) ? {
            ...r,
            ...i
        } : i)
    }, t[0] = S) : S = t[0];
    let C = S,
        w;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (w = e => {
        e.checkout_session_id === v.current && C(e, !1)
    }, t[1] = w) : w = t[1];
    let T = w,
        E, D;
    t[2] === c ? (E = t[3], D = t[4]) : (E = () => {
        c != null && (v.current = c.checkout_session_id, C(c, !0))
    }, D = [C, c], t[2] = c, t[3] = E, t[4] = D), ee(E, D);
    let k;
    t[5] !== m || t[6] !== f || t[7] !== b || t[8] !== u || t[9] !== g ? (k = {
        businessMaximumSeats: u,
        lineItems: f,
        discountTargetSeatTypes: m,
        reactivationMinimumSeatQuantities: g,
        locallySelectedPremiumSeats: b,
        refreshFromCheckoutSession: T,
        setLocallySelectedPremiumSeats: x
    }, t[5] = m, t[6] = f, t[7] = b, t[8] = u, t[9] = g, t[10] = k) : k = t[10];
    let A = k,
        j;
    return t[11] !== l || t[12] !== A ? (j = (0, B.jsx)(O.Provider, {
        value: A,
        children: l
    }), t[11] = l, t[12] = A, t[13] = j) : j = t[13], j
}

function I(e) {
    return e.seat_type === i.PREMIUM
}

function L(e) {
    return e.seat_type === i.PREMIUM
}
var R, z, B, V = e((() => {
    R = p(), E(), N(), b(), z = t(f()), T(), B = c()
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
        f = v(_, e => e.codexAutoTopUpEnabled),
        p = v(_, e => e.codexAutoTopUpEnrollInDiscount),
        h = e.lineItems[0]?.quantity ?? 0,
        g = e.discountAmounts?.[0]?.percentOff,
        y = A(n?.auto_reload?.tiers, h),
        b = A(n?.one_time.tiers, h),
        S = f === !0 && p === !0 && g != null && y != null && y.percent_off === g,
        C = S && y.percent_off > (b?.percent_off ?? 0),
        w = i ? c.formatMessage(W.rateLimitResetLineItem, {
            quantity: c.formatNumber(h)
        }) : c.formatMessage(x(), {
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
    d(), g(), h(), j(), y(), U = c(), W = l({
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
        n = w(),
        r;
    t[0] !== e.checkoutPricingConfig || t[1] !== e.forceShowBalanceAdjustment || t[2] !== e.immediateDiscountSettings || t[3] !== e.planType || t[4] !== e.scheduledDiscountPreview ? (r = t => {
        let {
            forceSummaryLoading: n,
            ...r
        } = t;
        return (0, J.jsx)(D, {
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
        q = p(), G(), C(), k(), J = c()
    })),
    X = e((() => {
        S()
    }));

function Z(e) {
    return $.has(e)
}

function ne(e) {
    if (!e) return null;
    let t = e.toLowerCase();
    return (Q[e] ?? Q[t]) || (Z(t) ? t : s.PLUS)
}
var Q, $, re = e((() => {
    a(), Q = {
        [o.FREE]: s.FREE,
        [o.GO]: s.GO,
        [o.PLUS]: s.PLUS,
        [o.PLUS_FREE]: s.PLUS,
        [o.PLUS_NO_PAYMENT_TRIAL]: s.PLUS,
        [o.PROLITE]: s.PROLITE,
        [o.PRO]: s.PRO,
        [o.PROMAX]: s.PROMAX,
        [o.PROMAX_FREE]: s.PROMAX,
        [o.PRO_FREE]: s.PRO,
        [o.SELF_SERVE_BUSINESS]: s.SELF_SERVE_BUSINESS,
        [o.SELF_SERVE_BUSINESS_PROLITE]: s.SELF_SERVE_BUSINESS,
        [o.SELF_SERVE_BUSINESS_USAGE_BASED]: s.SELF_SERVE_BUSINESS,
        [o.SCI]: s.SCI,
        [o.ENTERPRISE_CBP_FLAT]: s.ENTERPRISE_CBP,
        [o.ENTERPRISE_CBP_SEAT_USAGE]: s.ENTERPRISE_CBP,
        [o.HC_FLAT]: s.HC,
        [o.HC_SEAT_USAGE]: s.HC,
        [o.FINSERV]: s.FINSERV,
        [o.LAW]: s.LAW,
        [o.HC_CONSUMPTION]: s.HC_CONSUMPTION,
        [o.ENT26]: s.ENT26,
        [o.EDUCATION_CBP_FLAT]: s.EDUCATION_CBP,
        [o.EDU_PLUS]: s.EDU_PLUS,
        [o.EDU_PRO]: s.EDU_PRO,
        [o.QUORUM]: s.QUORUM,
        [o.DEPRECATED_ENTERPRISE]: s.DEPRECATED_ENTERPRISE,
        [o.DEPRECATED_EDU]: s.DEPRECATED_EDU,
        [o.K12]: s.K12
    }, $ = new Set(Object.values(s))
}));
export {
    Y as a, N as c, K as i, te as l, ne as n, P as o, X as r, V as s, re as t, M as u
};
//# sourceMappingURL=88fdc6d5-ko5kivmwcxn7uubo.js.map