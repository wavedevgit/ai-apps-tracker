import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Lot as n,
    hI as r,
    iI as i,
    lI as a,
    wst as o,
    zot as s
} from "./4813494d-cb22y2w19zwyshmt.js";
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
    Ein as g,
    Hn as _,
    Ln as v,
    Oin as y,
    Un as b,
    qon as x
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $S as S,
    Gm as C,
    Qm as w,
    Sg as T,
    YS as E
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    $ as D,
    H as O,
    Q as k,
    U as A
} from "./65d375cd-nxvvdt34md2j2ldm.js";
import {
    a as j,
    i as M
} from "./ba59b5eb-3loc5ek3f1okyzoh.js";

function N(e, t, n) {
    let r = e === t;
    return {
        useReplacement: r,
        isReviewReplacement: r || e === n
    }
}
var P = e((() => {})),
    F = e((() => {
        r()
    }));

function I(e) {
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
    return t[0] !== l || t[1] !== r || t[2] !== i || t[3] !== n || t[4] !== c || t[5] !== u || t[6] !== d ? (f = (0, V.jsx)(L, {
        checkoutSessionId: n,
        businessMaximumSeats: r,
        businessSeatLineItems: i,
        businessDiscountTargetSeatTypes: l,
        reactivationMinimumSeatQuantities: u,
        replacementCheckoutSession: d,
        children: c
    }, n), t[0] = l, t[1] = r, t[2] = i, t[3] = n, t[4] = c, t[5] = u, t[6] = d, t[7] = f) : f = t[7], f
}

function L(e) {
    "use forget";
    let t = (0, z.c)(14),
        {
            checkoutSessionId: n,
            businessMaximumSeats: r,
            businessSeatLineItems: i,
            businessDiscountTargetSeatTypes: o,
            reactivationMinimumSeatQuantities: s,
            replacementCheckoutSession: c,
            children: l
        } = e,
        [u, d] = (0, B.useState)(r),
        [f, p] = (0, B.useState)(i),
        [m, h] = (0, B.useState)(o),
        [g, _] = (0, B.useState)(s),
        v = (0, B.useRef)(n),
        y = (0, B.useRef)(i),
        [b, x] = (0, B.useState)(0),
        C;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (e, t) => {
        e.business_maximum_seats !== void 0 && d(e.business_maximum_seats);
        let n = y.current,
            r = a(e);
        y.current = r, h(e.business_discount_target_seat_types ?? null), e.reactivation_minimum_seat_quantities !== void 0 && _(e.reactivation_minimum_seat_quantities);
        let i = n != null && Object.values(n).some(R),
            o = r != null && Object.values(r).some(ee);
        p(!t && n != null && r != null && (i || o) ? {
            ...n,
            ...r
        } : r)
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

function ee(e) {
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
        f = b(v, e => e.codexAutoTopUpEnabled),
        p = b(v, e => e.codexAutoTopUpEnrollInDiscount),
        h = e.lineItems[0]?.quantity ?? 0,
        _ = e.discountAmounts?.[0]?.percentOff,
        y = j(n?.auto_reload?.tiers, h),
        x = j(n?.one_time.tiers, h),
        S = f === !0 && p === !0 && _ != null && y != null && y.percent_off === _,
        C = S && y.percent_off > (x?.percent_off ?? 0),
        w = i ? c.formatMessage(G.rateLimitResetLineItem, {
            quantity: c.formatNumber(h)
        }) : c.formatMessage(g(), {
            credits: c.formatNumber(h)
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
    d(), _(), h(), M(), y(), W = c(), G = l({
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
        n = w(),
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
        J = p(), K(), C(), A(), Y = c()
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
    return (Q[e] ?? Q[t]) || (te(t) ? t : n.PLUS)
}
var Q, $, re = e((() => {
    o(), Q = {
        [s.FREE]: n.FREE,
        [s.GO]: n.GO,
        [s.PLUS]: n.PLUS,
        [s.PLUS_FREE]: n.PLUS,
        [s.PLUS_NO_PAYMENT_TRIAL]: n.PLUS,
        [s.PROLITE]: n.PROLITE,
        [s.PRO]: n.PRO,
        [s.PROMAX]: n.PROMAX,
        [s.PROMAX_FREE]: n.PROMAX,
        [s.PRO_FREE]: n.PRO,
        [s.SELF_SERVE_BUSINESS]: n.SELF_SERVE_BUSINESS,
        [s.SELF_SERVE_BUSINESS_PROLITE]: n.SELF_SERVE_BUSINESS,
        [s.SELF_SERVE_BUSINESS_USAGE_BASED]: n.SELF_SERVE_BUSINESS,
        [s.SCI]: n.SCI,
        [s.ENTERPRISE_CBP_FLAT]: n.ENTERPRISE_CBP,
        [s.ENTERPRISE_CBP_SEAT_USAGE]: n.ENTERPRISE_CBP,
        [s.HC_FLAT]: n.HC,
        [s.HC_SEAT_USAGE]: n.HC,
        [s.FINSERV]: n.FINSERV,
        [s.LAW]: n.LAW,
        [s.HC_CONSUMPTION]: n.HC_CONSUMPTION,
        [s.ENT26]: n.ENT26,
        [s.EDUCATION_CBP_FLAT]: n.EDUCATION_CBP,
        [s.EDU_PLUS]: n.EDU_PLUS,
        [s.EDU_PRO]: n.EDU_PRO,
        [s.QUORUM]: n.QUORUM,
        [s.DEPRECATED_ENTERPRISE]: n.DEPRECATED_ENTERPRISE,
        [s.DEPRECATED_EDU]: n.DEPRECATED_EDU,
        [s.K12]: n.K12
    }, $ = new Set(Object.values(n))
}));
export {
    X as a, F as c, q as i, N as l, ne as n, I as o, Z as r, H as s, re as t, P as u
};
//# sourceMappingURL=88fdc6d5-ll9uc0l8qk4khbwe.js.map