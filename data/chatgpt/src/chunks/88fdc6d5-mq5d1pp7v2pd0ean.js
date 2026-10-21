import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    NI as n,
    Nst as r,
    OI as i,
    jst as a,
    vct as o,
    zI as s
} from "./4813494d-t80q9ew944ej0mgk.js";
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
    Bin as h,
    Bn as g,
    Hin as _,
    Hn as v,
    Ln as y,
    Un as b,
    ssn as x
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Dm as S,
    SS as C,
    bm as w,
    tg as T,
    vS as E
} from "./c2675c8c-p3x4d0bnf7e77o1n.js";
import {
    $ as D,
    H as O,
    Q as k,
    U as A
} from "./65d375cd-nitr26pto8336ec8.js";
import {
    a as j,
    i as M
} from "./ba59b5eb-ewc8k96eibhcrjmd.js";

function N(e, t, n) {
    let r = e === t;
    return {
        useReplacement: r,
        isReviewReplacement: r || e === n
    }
}
var P = e((() => {})),
    F = e((() => {
        s()
    }));

function ee(e) {
    "use forget";
    let t = (0, z.c)(8),
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
    return t[0] !== l || t[1] !== r || t[2] !== i || t[3] !== n || t[4] !== c || t[5] !== u || t[6] !== d ? (f = (0, V.jsx)(I, {
        checkoutSessionId: n,
        businessMaximumSeats: r,
        businessSeatLineItems: i,
        businessDiscountTargetSeatTypes: l,
        reactivationMinimumSeatQuantities: u,
        replacementCheckoutSession: d,
        children: c
    }, n), t[0] = l, t[1] = r, t[2] = i, t[3] = n, t[4] = c, t[5] = u, t[6] = d, t[7] = f) : f = t[7], f
}

function I(e) {
    "use forget";
    let t = (0, z.c)(14),
        {
            checkoutSessionId: r,
            businessMaximumSeats: i,
            businessSeatLineItems: a,
            businessDiscountTargetSeatTypes: o,
            reactivationMinimumSeatQuantities: s,
            replacementCheckoutSession: c,
            children: l
        } = e,
        [u, d] = (0, B.useState)(i),
        [f, p] = (0, B.useState)(a),
        [m, h] = (0, B.useState)(o),
        [g, _] = (0, B.useState)(s),
        v = (0, B.useRef)(r),
        y = (0, B.useRef)(a),
        [b, x] = (0, B.useState)(0),
        S;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (e, t) => {
        e.business_maximum_seats !== void 0 && d(e.business_maximum_seats);
        let r = y.current,
            i = n(e);
        y.current = i, h(e.business_discount_target_seat_types ?? null), e.reactivation_minimum_seat_quantities !== void 0 && _(e.reactivation_minimum_seat_quantities);
        let a = r != null && Object.values(r).some(R),
            o = i != null && Object.values(i).some(L);
        p(!t && r != null && i != null && (a || o) ? {
            ...r,
            ...i
        } : i)
    }, t[0] = S) : S = t[0];
    let w = S,
        T;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (T = e => {
        e.checkout_session_id === v.current && w(e, !1)
    }, t[1] = T) : T = t[1];
    let E = T,
        D, O;
    t[2] === c ? (D = t[3], O = t[4]) : (D = () => {
        c != null && (v.current = c.checkout_session_id, w(c, !0))
    }, O = [w, c], t[2] = c, t[3] = D, t[4] = O), C(D, O);
    let A;
    t[5] !== m || t[6] !== f || t[7] !== b || t[8] !== u || t[9] !== g ? (A = {
        businessMaximumSeats: u,
        lineItems: f,
        discountTargetSeatTypes: m,
        reactivationMinimumSeatQuantities: g,
        locallySelectedPremiumSeats: b,
        refreshFromCheckoutSession: E,
        setLocallySelectedPremiumSeats: x
    }, t[5] = m, t[6] = f, t[7] = b, t[8] = u, t[9] = g, t[10] = A) : A = t[10];
    let j = A,
        M;
    return t[11] !== l || t[12] !== j ? (M = (0, V.jsx)(k.Provider, {
        value: j,
        children: l
    }), t[11] = l, t[12] = j, t[13] = M) : M = t[13], M
}

function L(e) {
    return e.seat_type === i.PREMIUM
}

function R(e) {
    return e.seat_type === i.PREMIUM
}
var z, B, V, H = e((() => {
    z = p(), D(), F(), x(), B = t(f()), E(), V = c()
}));

function U({
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
        f = b(y, e => e.codexAutoTopUpEnabled),
        p = b(y, e => e.codexAutoTopUpEnrollInDiscount),
        g = e.lineItems[0]?.quantity ?? 0,
        _ = e.discountAmounts?.[0]?.percentOff,
        v = j(n?.auto_reload?.tiers, g),
        x = j(n?.one_time.tiers, g),
        S = f === !0 && p === !0 && _ != null && v != null && v.percent_off === _,
        C = S && v.percent_off > (x?.percent_off ?? 0),
        w = i ? c.formatMessage(G.rateLimitResetLineItem, {
            quantity: c.formatNumber(g)
        }) : c.formatMessage(h(), {
            credits: c.formatNumber(g)
        });
    return (0, W.jsxs)(`section`, {
        className: l ? `flex flex-col px-2 pt-1` : d ? `flex flex-col` : `flex flex-col gap-4`,
        children: [d ? null : (0, W.jsx)(`h2`, {
            className: `text-[18px] leading-6.5 font-semibold text-token-text-primary`,
            children: c.formatMessage(G.orderSummary)
        }), t({
            className: a === `modal` ? `[&>div]:gap-1.5` : void 0,
            collapseDiscountsIntoSubtotal: l,
            discountAmountClassName: a === `modal` && r ? `text-token-text-accent font-normal` : C ? `bg-[var(--theme-purple-background)] text-[var(--theme-purple-text)] ms-auto inline-flex min-h-5 grow-0! items-center rounded-xl px-[5px] font-normal motion-safe:starting:bg-transparent motion-safe:starting:px-0 motion-safe:starting:text-token-text-secondary motion-safe:transition-[background-color,color,padding] motion-safe:delay-[800ms] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]` : r ? `text-green-600 font-normal dark:text-green-700` : void 0,
            discountTitleOverride: r && _ != null ? c.formatMessage(G.creditVolumeDiscountPercentage, {
                percentOff: _ / 100
            }) : void 0,
            discountSubtitleOverride: S ? (0, W.jsx)(`span`, {
                className: a === `modal` ? `mt-0.5 block text-xs leading-4 font-normal tracking-normal text-token-text-tertiary` : void 0,
                children: (0, W.jsx)(u, {
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
            }) : a === `modal` ? c.formatMessage(G.totalDueToday) : void 0
        })]
    })
}
var W, G, K = e((() => {
    d(), v(), g(), M(), _(), W = c(), G = l({
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

function q(e) {
    "use forget";
    let t = (0, J.c)(10),
        n = S(),
        r;
    t[0] !== e.checkoutPricingConfig || t[1] !== e.forceShowBalanceAdjustment || t[2] !== e.immediateDiscountSettings || t[3] !== e.planType || t[4] !== e.scheduledDiscountPreview ? (r = t => {
        let {
            forceSummaryLoading: n,
            ...r
        } = t;
        return (0, Y.jsx)(O, {
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
    return t[6] !== n || t[7] !== e || t[8] !== r ? (i = (0, Y.jsx)(U, {
        ...e,
        checkout: n,
        renderInvoice: r
    }), t[6] = n, t[7] = e, t[8] = r, t[9] = i) : i = t[9], i
}
var J, Y, X = e((() => {
        J = p(), K(), w(), A(), Y = c()
    })),
    Z = e((() => {
        T()
    }));

function te(e) {
    return $.has(e)
}

function ne(e) {
    if (!e) return null;
    let t = e.toLowerCase();
    return (Q[e] ?? Q[t]) || (te(t) ? t : a.PLUS)
}
var Q, $, re = e((() => {
    o(), Q = {
        [r.FREE]: a.FREE,
        [r.GO]: a.GO,
        [r.PLUS]: a.PLUS,
        [r.PLUS_FREE]: a.PLUS,
        [r.PLUS_NO_PAYMENT_TRIAL]: a.PLUS,
        [r.PROLITE]: a.PROLITE,
        [r.PRO]: a.PRO,
        [r.PROMAX]: a.PROMAX,
        [r.PROMAX_FREE]: a.PROMAX,
        [r.PRO_FREE]: a.PRO,
        [r.SELF_SERVE_BUSINESS]: a.SELF_SERVE_BUSINESS,
        [r.SELF_SERVE_BUSINESS_PROLITE]: a.SELF_SERVE_BUSINESS,
        [r.SELF_SERVE_BUSINESS_USAGE_BASED]: a.SELF_SERVE_BUSINESS,
        [r.SCI]: a.SCI,
        [r.ENTERPRISE_CBP_FLAT]: a.ENTERPRISE_CBP,
        [r.ENTERPRISE_CBP_SEAT_USAGE]: a.ENTERPRISE_CBP,
        [r.HC_FLAT]: a.HC,
        [r.HC_SEAT_USAGE]: a.HC,
        [r.FINSERV]: a.FINSERV,
        [r.LAW]: a.LAW,
        [r.HC_CONSUMPTION]: a.HC_CONSUMPTION,
        [r.ENT26]: a.ENT26,
        [r.EDUCATION_CBP_FLAT]: a.EDUCATION_CBP,
        [r.EDU_PLUS]: a.EDU_PLUS,
        [r.EDU_PRO]: a.EDU_PRO,
        [r.QUORUM]: a.QUORUM,
        [r.DEPRECATED_ENTERPRISE]: a.DEPRECATED_ENTERPRISE,
        [r.DEPRECATED_EDU]: a.DEPRECATED_EDU,
        [r.K12]: a.K12
    }, $ = new Set(Object.values(a))
}));
export {
    X as a, F as c, q as i, N as l, ne as n, ee as o, Z as r, H as s, re as t, P as u
};
//# sourceMappingURL=88fdc6d5-mq5d1pp7v2pd0ean.js.map