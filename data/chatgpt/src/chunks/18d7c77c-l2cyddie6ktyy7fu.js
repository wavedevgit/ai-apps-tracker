import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    K4 as t,
    p3 as n
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Ln as r,
    Rn as i
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    dln as a,
    hln as o
} from "./conversation-small-kzsalymynzuddxee.js";
var s, c = e((() => {
    i(), s = r({
        resetSucceeded: {
            id: `chatgpt.codex.rate_limit_reset.checkout.completion.success.toast`,
            defaultMessage: `Usage limits reset`
        },
        purchaseSucceeded: {
            id: `chatgpt.codex.rate_limit_reset.checkout.completion.pending.toast`,
            defaultMessage: `Purchase successful`
        },
        pendingForCodex: {
            id: `checkout.resetPurchasePending`,
            defaultMessage: `Purchase successful. Your usage reset is pending.`
        },
        paymentFailed: {
            id: `chatgpt.codex.rate_limit_reset.checkout.completion.payment_failed.toast`,
            defaultMessage: `Payment failed. Please try again.`
        },
        purchaseFailed: {
            id: `chatgpt.codex.rate_limit_reset.checkout.completion.failure.toast`,
            defaultMessage: `We couldn’t complete your purchase. Please try again.`
        },
        unconfirmed: {
            id: `chatgpt.codex.rate_limit_reset.checkout.completion.unconfirmed.toast`,
            defaultMessage: `We couldn’t confirm your purchase yet. Check your billing activity before trying again.`
        }
    })
}));

function l(e) {
    return e === `plus` || e === `prolite` || e === `pro` || e === `promax`
}

function u({
    billingDetails: e,
    planType: t,
    purchaseAttemptId: n,
    checkoutAppearance: r,
    cancelUrl: i
}) {
    return {
        billing_details: e,
        checkout_ui_mode: `custom`,
        entry_point: a.CODEX_RATE_LIMIT_RESET,
        purchase_attempt_id: n,
        rate_limit_reset_purchase_data: {
            reset_plan_tier: t
        },
        checkout_appearance: r,
        cancel_url: i
    }
}

function d(e) {
    return typeof e == `object` && !!e && `tag` in e && e.tag === `custom_checkout_session` && `checkout_kind` in e && e.checkout_kind === t.RateLimitReset && `entry_point` in e && e.entry_point === a.CODEX_RATE_LIMIT_RESET
}

function f(e, n) {
    return e?.success === !0 && e.checkout_kind === t.RateLimitReset ? `reset_purchase_status` in e && e.reset_purchase_status === `reset_redeemed` ? `redeemed` : `pending` : n
}
async function p({
    outcome: e,
    pendingMessage: t,
    invalidateUsage: n,
    onInvalidationError: r,
    notify: i,
    returnToOrigin: a
}) {
    if (e === `redeemed`) try {
        await n()
    } catch (e) {
        r?.(e)
    }
    let o = {
        redeemed: s.resetSucceeded,
        pending: s[t],
        payment_failed: s.paymentFailed,
        unconfirmed: s.unconfirmed,
        other_error: s.purchaseFailed
    };
    i({
        level: e === `redeemed` || e === `pending` ? `success` : `warning`,
        message: o[e]
    }), a()
}
var m = e((() => {
    n(), o(), c()
}));
export {
    d as a, m as i, p as n, l as o, f as r, u as t
};
//# sourceMappingURL=18d7c77c-l2cyddie6ktyy7fu.js.map