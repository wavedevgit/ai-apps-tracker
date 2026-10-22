import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fst as n,
    NI as r,
    Nst as i,
    OI as a,
    bct as o,
    zI as s
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    $in as h,
    Bn as g,
    Hn as _,
    Ln as v,
    Un as y,
    Zin as b,
    vsn as x
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    CS as S,
    Dm as C,
    bm as w,
    tg as T,
    yS as E
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    $ as D,
    H as O,
    Q as k,
    U as A
} from "./65d375cd-mns6fzomantrbq3u.js";
import {
    a as j,
    i as M
} from "./ba59b5eb-nd2cg8rqhq1bscf4.js";

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

function I(e) {
    "use forget";
    let t = (0, z.c)(9),
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
    return t[0] !== u || t[1] !== i || t[2] !== r || t[3] !== a || t[4] !== n || t[5] !== l || t[6] !== d || t[7] !== f ? (p = (0, V.jsx)(L, {
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

function L(e) {
    "use forget";
    let t = (0, z.c)(15),
        {
            checkoutSessionId: n,
            businessMinimumSeats: i,
            businessMaximumSeats: a,
            businessSeatLineItems: o,
            businessDiscountTargetSeatTypes: s,
            reactivationMinimumSeatQuantities: c,
            replacementCheckoutSession: l,
            children: u
        } = e,
        [d, f] = (0, B.useState)(a),
        [p, m] = (0, B.useState)(o),
        [h, g] = (0, B.useState)(s),
        [_, v] = (0, B.useState)(c),
        y = (0, B.useRef)(n),
        b = (0, B.useRef)(o),
        [x, C] = (0, B.useState)(0),
        w;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (e, t) => {
        e.business_maximum_seats !== void 0 && f(e.business_maximum_seats);
        let n = b.current,
            i = r(e);
        b.current = i, g(e.business_discount_target_seat_types ?? null), e.reactivation_minimum_seat_quantities !== void 0 && v(e.reactivation_minimum_seat_quantities);
        let a = n != null && Object.values(n).some(R),
            o = i != null && Object.values(i).some(ee);
        m(!t && n != null && i != null && (a || o) ? {
            ...n,
            ...i
        } : i)
    }, t[0] = w) : w = t[0];
    let T = w,
        E;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (E = e => {
        e.checkout_session_id === y.current && T(e, !1)
    }, t[1] = E) : E = t[1];
    let D = E,
        O, A;
    t[2] === l ? (O = t[3], A = t[4]) : (O = () => {
        l != null && (y.current = l.checkout_session_id, T(l, !0))
    }, A = [T, l], t[2] = l, t[3] = O, t[4] = A), S(O, A);
    let j;
    t[5] !== i || t[6] !== h || t[7] !== p || t[8] !== x || t[9] !== d || t[10] !== _ ? (j = {
        businessMinimumSeats: i,
        businessMaximumSeats: d,
        lineItems: p,
        discountTargetSeatTypes: h,
        reactivationMinimumSeatQuantities: _,
        locallySelectedPremiumSeats: x,
        refreshFromCheckoutSession: D,
        setLocallySelectedPremiumSeats: C
    }, t[5] = i, t[6] = h, t[7] = p, t[8] = x, t[9] = d, t[10] = _, t[11] = j) : j = t[11];
    let M = j,
        N;
    return t[12] !== u || t[13] !== M ? (N = (0, V.jsx)(k.Provider, {
        value: M,
        children: u
    }), t[12] = u, t[13] = M, t[14] = N) : N = t[14], N
}

function ee(e) {
    return e.seat_type === a.PREMIUM
}

function R(e) {
    return e.seat_type === a.PREMIUM
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
        f = y(v, e => e.codexAutoTopUpEnabled),
        p = y(v, e => e.codexAutoTopUpEnrollInDiscount),
        h = e.lineItems[0]?.quantity ?? 0,
        g = e.discountAmounts?.[0]?.percentOff,
        _ = j(n?.auto_reload?.tiers, h),
        x = j(n?.one_time.tiers, h),
        S = f === !0 && p === !0 && g != null && _ != null && _.percent_off === g,
        C = S && _.percent_off > (x?.percent_off ?? 0),
        w = i ? c.formatMessage(G.rateLimitResetLineItem, {
            quantity: c.formatNumber(h)
        }) : c.formatMessage(b(), {
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
            discountTitleOverride: r && g != null ? c.formatMessage(G.creditVolumeDiscountPercentage, {
                percentOff: g / 100
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
    d(), _(), g(), M(), h(), W = c(), G = l({
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
        n = C(),
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
    return (Q[e] ?? Q[t]) || (te(t) ? t : i.PLUS)
}
var Q, $, re = e((() => {
    o(), Q = {
        [n.FREE]: i.FREE,
        [n.GO]: i.GO,
        [n.PLUS]: i.PLUS,
        [n.PLUS_FREE]: i.PLUS,
        [n.PLUS_NO_PAYMENT_TRIAL]: i.PLUS,
        [n.PROLITE]: i.PROLITE,
        [n.PRO]: i.PRO,
        [n.PROMAX]: i.PROMAX,
        [n.PROMAX_FREE]: i.PROMAX,
        [n.PRO_FREE]: i.PRO,
        [n.SELF_SERVE_BUSINESS]: i.SELF_SERVE_BUSINESS,
        [n.SELF_SERVE_BUSINESS_PROLITE]: i.SELF_SERVE_BUSINESS,
        [n.SELF_SERVE_BUSINESS_USAGE_BASED]: i.SELF_SERVE_BUSINESS,
        [n.SCI]: i.SCI,
        [n.ENTERPRISE_CBP_FLAT]: i.ENTERPRISE_CBP,
        [n.ENTERPRISE_CBP_SEAT_USAGE]: i.ENTERPRISE_CBP,
        [n.HC_FLAT]: i.HC,
        [n.HC_SEAT_USAGE]: i.HC,
        [n.FINSERV]: i.FINSERV,
        [n.LAW]: i.LAW,
        [n.HC_CONSUMPTION]: i.HC_CONSUMPTION,
        [n.ENT26]: i.ENT26,
        [n.EDUCATION_CBP_FLAT]: i.EDUCATION_CBP,
        [n.EDU_PLUS]: i.EDU_PLUS,
        [n.EDU_PRO]: i.EDU_PRO,
        [n.QUORUM]: i.QUORUM,
        [n.DEPRECATED_ENTERPRISE]: i.DEPRECATED_ENTERPRISE,
        [n.DEPRECATED_EDU]: i.DEPRECATED_EDU,
        [n.K12]: i.K12
    }, $ = new Set(Object.values(i))
}));
export {
    X as a, F as c, q as i, N as l, ne as n, I as o, Z as r, H as s, re as t, P as u
};
//# sourceMappingURL=88fdc6d5-oty5cbl4y57lqfoq.js.map