import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    NI as n,
    OI as r,
    zI as i
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as a,
    Ln as o,
    Nn as s,
    Rn as c,
    Vn as l,
    wn as u,
    zn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $in as f,
    Bn as p,
    Hn as m,
    Ln as h,
    Un as g,
    tan as _,
    xsn as v
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    TS as y,
    ag as b,
    jm as x,
    kS as S,
    wm as C
} from "./c2675c8c-f8x469cgefxzeo6l.js";
import {
    $ as w,
    H as T,
    Q as E,
    U as D
} from "./65d375cd-dhxja55ntzywsa4b.js";
import {
    a as O,
    o as k
} from "./ba59b5eb-du0rp5g5y99u6oa9.js";

function A(e, t, n) {
    let r = e === t;
    return {
        useReplacement: r,
        isReviewReplacement: r || e === n
    }
}
var j = e((() => {})),
    M = e((() => {
        i()
    }));

function N(e) {
    "use forget";
    let t = (0, L.c)(9),
        {
            checkoutSessionId: n,
            businessMinimumSeats: r,
            businessMaximumSeats: i,
            businessSeatLineItems: a,
            businessDiscountTargetSeatTypes: o,
            reactivationMinimumSeatQuantities: s,
            replacementCheckoutSession: c,
            children: l
        } = e,
        u = o === void 0 ? null : o,
        d = s === void 0 ? null : s,
        f = c === void 0 ? null : c,
        p;
    return t[0] !== u || t[1] !== i || t[2] !== r || t[3] !== a || t[4] !== n || t[5] !== l || t[6] !== d || t[7] !== f ? (p = (0, z.jsx)(P, {
        checkoutSessionId: n,
        businessMinimumSeats: r,
        businessMaximumSeats: i,
        businessSeatLineItems: a,
        businessDiscountTargetSeatTypes: u,
        reactivationMinimumSeatQuantities: d,
        replacementCheckoutSession: f,
        children: l
    }, n), t[0] = u, t[1] = i, t[2] = r, t[3] = a, t[4] = n, t[5] = l, t[6] = d, t[7] = f, t[8] = p) : p = t[8], p
}

function P(e) {
    "use forget";
    let t = (0, L.c)(15),
        {
            checkoutSessionId: r,
            businessMinimumSeats: i,
            businessMaximumSeats: a,
            businessSeatLineItems: o,
            businessDiscountTargetSeatTypes: s,
            reactivationMinimumSeatQuantities: c,
            replacementCheckoutSession: l,
            children: u
        } = e,
        [d, f] = (0, R.useState)(a),
        [p, m] = (0, R.useState)(o),
        [h, g] = (0, R.useState)(s),
        [_, v] = (0, R.useState)(c),
        y = (0, R.useRef)(r),
        b = (0, R.useRef)(o),
        [x, C] = (0, R.useState)(0),
        w;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (e, t) => {
        e.business_maximum_seats !== void 0 && f(e.business_maximum_seats);
        let r = b.current,
            i = n(e);
        b.current = i, g(e.business_discount_target_seat_types ?? null), e.reactivation_minimum_seat_quantities !== void 0 && v(e.reactivation_minimum_seat_quantities);
        let a = r != null && Object.values(r).some(I),
            o = i != null && Object.values(i).some(F);
        m(!t && r != null && i != null && (a || o) ? {
            ...r,
            ...i
        } : i)
    }, t[0] = w) : w = t[0];
    let T = w,
        D;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (D = e => {
        e.checkout_session_id === y.current && T(e, !1)
    }, t[1] = D) : D = t[1];
    let O = D,
        k, A;
    t[2] === l ? (k = t[3], A = t[4]) : (k = () => {
        l != null && (y.current = l.checkout_session_id, T(l, !0))
    }, A = [T, l], t[2] = l, t[3] = k, t[4] = A), S(k, A);
    let j;
    t[5] !== i || t[6] !== h || t[7] !== p || t[8] !== x || t[9] !== d || t[10] !== _ ? (j = {
        businessMinimumSeats: i,
        businessMaximumSeats: d,
        lineItems: p,
        discountTargetSeatTypes: h,
        reactivationMinimumSeatQuantities: _,
        locallySelectedPremiumSeats: x,
        refreshFromCheckoutSession: O,
        setLocallySelectedPremiumSeats: C
    }, t[5] = i, t[6] = h, t[7] = p, t[8] = x, t[9] = d, t[10] = _, t[11] = j) : j = t[11];
    let M = j,
        N;
    return t[12] !== u || t[13] !== M ? (N = (0, z.jsx)(E.Provider, {
        value: M,
        children: u
    }), t[12] = u, t[13] = M, t[14] = N) : N = t[14], N
}

function F(e) {
    return e.seat_type === r.PREMIUM
}

function I(e) {
    return e.seat_type === r.PREMIUM
}
var L, R, z, B = e((() => {
    L = u(), w(), M(), v(), R = t(l()), y(), z = a()
}));

function V({
    checkout: e,
    renderInvoice: t,
    creditDiscountOffer: n,
    hasCreditDiscountOffer: r = !1,
    isRateLimitResetCheckout: i = !1,
    presentation: a = `page`,
    isSubmitting: o = !1,
    isTaxQuotePending: c = !1
}) {
    "use no forget";
    let l = d(),
        u = a === `inline`,
        p = a !== `page`,
        m = g(h, e => e.codexAutoTopUpEnabled),
        _ = g(h, e => e.codexAutoTopUpEnrollInDiscount),
        v = e.lineItems[0]?.quantity ?? 0,
        y = e.discountAmounts?.[0]?.percentOff,
        b = k(n?.auto_reload?.tiers, v),
        x = k(n?.one_time.tiers, v),
        S = m === !0 && _ === !0 && y != null && b != null && b.percent_off === y,
        C = S && b.percent_off > (x?.percent_off ?? 0),
        w = i ? l.formatMessage(U.rateLimitResetLineItem, {
            quantity: l.formatNumber(v)
        }) : l.formatMessage(f(), {
            credits: l.formatNumber(v)
        });
    return (0, H.jsxs)(`section`, {
        className: u ? `flex flex-col px-2 pt-1` : p ? `flex flex-col` : `flex flex-col gap-4`,
        children: [p ? null : (0, H.jsx)(`h2`, {
            className: `text-[18px] leading-6.5 font-semibold text-token-text-primary`,
            children: l.formatMessage(U.orderSummary)
        }), t({
            className: a === `modal` ? `[&>div]:gap-1.5` : void 0,
            collapseDiscountsIntoSubtotal: u,
            discountAmountClassName: a === `modal` && r ? `text-token-text-accent font-normal` : C ? `bg-[var(--theme-purple-background)] text-[var(--theme-purple-text)] ms-auto inline-flex min-h-5 grow-0! items-center rounded-xl px-[5px] font-normal motion-safe:starting:bg-transparent motion-safe:starting:px-0 motion-safe:starting:text-token-text-secondary motion-safe:transition-[background-color,color,padding] motion-safe:delay-[800ms] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]` : r ? `text-green-600 font-normal dark:text-green-700` : void 0,
            discountTitleOverride: r && y != null ? l.formatMessage(U.creditVolumeDiscountPercentage, {
                percentOff: y / 100
            }) : void 0,
            discountSubtitleOverride: S ? (0, H.jsx)(`span`, {
                className: a === `modal` ? `mt-0.5 block text-xs leading-4 font-normal tracking-normal text-token-text-tertiary` : void 0,
                children: (0, H.jsx)(s, {
                    id: `StandaloneCreditCheckout.futureAutoReloadDiscountSubtitle`,
                    defaultMessage: `Discount also applies to future auto-reloads`
                })
            }) : r ? `` : void 0,
            isTaxQuoteLoading: p && !o && c,
            forceSummaryLoading: p && (o || c) ? !1 : void 0,
            spacingVariant: u ? `inlineCredit` : `standaloneCredit`,
            subtotalTitle: u ? l.formatMessage({
                id: `chatgpt.inline_credit_checkout.summary.subtotal.label`,
                defaultMessage: `Subtotal`
            }) : w,
            totalClassName: u ? `text-token-text-primary! text-footnote-medium!` : a === `modal` ? `text-token-text-primary! text-sm leading-5 font-semibold!` : void 0,
            totalTitleOverride: u ? l.formatMessage({
                id: `chatgpt.inline_credit_checkout.summary.total.label`,
                defaultMessage: `Total due`
            }) : a === `modal` ? l.formatMessage(U.totalDueToday) : void 0
        })]
    })
}
var H, U, W = e((() => {
    c(), m(), p(), O(), _(), H = a(), U = o({
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

function G(e) {
    "use forget";
    let t = (0, K.c)(10),
        n = x(),
        r;
    t[0] !== e.checkoutPricingConfig || t[1] !== e.forceShowBalanceAdjustment || t[2] !== e.immediateDiscountSettings || t[3] !== e.planType || t[4] !== e.scheduledDiscountPreview ? (r = t => {
        let {
            forceSummaryLoading: n,
            ...r
        } = t;
        return (0, q.jsx)(T, {
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
    return t[6] !== n || t[7] !== e || t[8] !== r ? (i = (0, q.jsx)(V, {
        ...e,
        checkout: n,
        renderInvoice: r
    }), t[6] = n, t[7] = e, t[8] = r, t[9] = i) : i = t[9], i
}
var K, q, J = e((() => {
        K = u(), W(), C(), D(), q = a()
    })),
    Y = e((() => {
        b()
    }));
export {
    B as a, j as c, N as i, G as n, M as o, J as r, A as s, Y as t
};
//# sourceMappingURL=dc15051a-kolb6msof5uqxe0t.js.map