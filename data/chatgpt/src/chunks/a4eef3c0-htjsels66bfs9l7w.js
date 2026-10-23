import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Crt as t,
    Grt as n,
    Hrt as r,
    Irt as i,
    Knt as a,
    Lrt as o,
    Nat as s,
    Rrt as c,
    Srt as l,
    Vrt as u,
    Wnt as d,
    aot as f,
    brt as p,
    cot as m,
    jat as ee,
    p3 as h,
    wrt as g
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Aln as te,
    Ean as ne,
    Fln as re,
    Jln as ie,
    Mln as _,
    Msn as ae,
    Nln as oe,
    Oln as se,
    Pln as v,
    dan as ce,
    jln as le,
    jsn as y,
    kln as ue,
    qln as de,
    uKn as fe,
    zln as b
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Cg as pe,
    Sg as me,
    Vh as he,
    Xh as ge,
    Yh as _e,
    ag as ve,
    eg as ye,
    og as be,
    qh as xe
} from "./c2675c8c-oz03twoan08d72ud.js";

function Se(e) {
    return {
        is_apple_pay_shown: String(e?.applePay === !0),
        is_express_checkout_shown: String(ve(e)),
        is_google_pay_shown: String(e?.googlePay === !0)
    }
}
var x = e((() => {
    be(), ne()
}));

function Ce(e) {
    return e == null || !Number.isFinite(e) ? null : e === 2 ? 1 : e >= 3 && e <= 5 ? 5 : e >= 6 && e <= 10 ? 10 : e >= 11 ? 20 : null
}

function we(e) {
    return e == null ? [] : Object.entries(e).filter(([, e]) => !!e).map(([e]) => e).sort()
}

function S(e) {
    let t = l(X).get($, !1);
    return re({
        enabled: t,
        buckets: t ? p(Z).get(Q, {}) : void 0,
        method: e
    })
}

function Te(e) {
    return S(e) === `payment_element_complete`
}

function Ee(e) {
    return S(e) === `submit`
}

function De(e) {
    if (e == null) return {};
    let t = _(e);
    return {
        confirm_error_code: e.code ?? `none`,
        confirm_error_source: e.source ?? Y,
        confirm_error_type: w(e, `type`) ?? Y,
        ...t == null ? {} : {
            confirm_payment_failed_decline_code: t
        }
    }
}

function C(e) {
    return e.error_is_client_error === !0 ? `client` : e.error_is_server_error === !0 ? `server` : null
}

function Oe(e) {
    let t = f(e),
        n = C(t);
    return {
        unexpected_error_category: t.error_category,
        ...t.error_name == null ? {} : {
            unexpected_error_name: t.error_name
        },
        ...t.error_code == null ? {} : {
            unexpected_error_code: t.error_code
        },
        ...t.error_status == null ? {} : {
            unexpected_error_status: t.error_status
        },
        ...n == null ? {} : {
            unexpected_error_type: n
        }
    }
}

function w(e, t) {
    if (typeof e != `object` || !e) return null;
    let n = Reflect.get(e, t);
    return typeof n == `string` && n.length > 0 ? n : null
}

function T(e) {
    return e?.trim().toUpperCase() || Y
}

function ke(e) {
    if (e.resultType === `error`) {
        let t = _(e.confirmError);
        return {
            result_type: e.resultType,
            sdk_error_family: `not_applicable`,
            error_category: `confirm_error`,
            error_name: `ConfirmError`,
            error_type: w(e.confirmError, `type`) ?? Y,
            error_code: xe(e.confirmError),
            error_status: Y,
            decline_code: t ?? Y
        }
    }
    let t = f(e.error);
    return {
        result_type: e.resultType,
        sdk_error_family: me(h(e.error), t.error_name),
        error_category: t.error_category,
        error_name: t.error_name ?? Y,
        error_type: w(e.error, `type`) ?? C(t) ?? Y,
        error_code: t.error_code ?? w(e.error, `code`) ?? Y,
        error_status: t.error_status == null ? Y : String(t.error_status),
        decline_code: w(e.error, `decline_code`) ?? Y
    }
}

function E(e) {
    return ue(e, `stable`, u() ?? `unknown`)
}

function D(e) {
    return {
        checkout_provider: e == null ? J : b(e) ? `open_ai` : `stripe`,
        reported_web_track: `stable`
    }
}

function O(e) {
    return {
        plan_type: String(e.planType ?? `unknown`),
        processor_entity: e.processorEntity,
        checkout_kind: te(e.checkoutStructuredEventMetadata.checkoutKind),
        promotion_campaign: e.checkoutOutcomeStatsigMetadata.promo_campaign_id ?? `none`,
        requires_manual_approval: String(e.requiresManualApproval),
        source: y(),
        ...e.checkoutModalStatsigMetadata,
        reported_web_track: `stable`
    }
}

function k(e) {
    return {
        ...O(e),
        entry_point: se(e.checkoutStructuredEventMetadata.entryPoint)
    }
}

function Ae(e, {
    hasBillingAddressErrors: t,
    hasEmailErrors: n,
    hasInvalidConfirmError: r,
    hasPaymentElementErrors: i,
    hasTaxInfoErrors: a,
    isExpressCheckout: s,
    submitErrorSource: l
}) {
    o.count(c.PAYMENTS, q, {
        ...k(e),
        ...de(e.experiments),
        checkout_presentation: e.isCheckoutModalPresentation ? `modal` : `full_page`,
        ...D(e.checkoutSessionId),
        failure_reason: `field_validation_failed`,
        submit_error_source: l,
        has_billing_address_errors: String(t),
        has_email_errors: String(n),
        has_invalid_confirm_error: String(r),
        has_payment_element_errors: String(i),
        has_tax_info_errors: String(a),
        is_express_checkout: String(s)
    })
}

function A(e, t) {
    o.count(c.PAYMENTS, W, {
        ...E(t),
        failure_reason: t.failureReason,
        return_page: e
    })
}

function je(e, t, n) {
    d.logStructuredEvent(`ChatgptCheckoutPaymentFailurePage`, t), e != null && A(e, {
        checkoutSessionId: t.checkoutId,
        checkoutPlanType: t.checkoutPlanType,
        processorEntity: t.processorEntity,
        isCheckoutModalEnabled: t.isCheckoutModalEnabled,
        checkoutKind: t.checkoutKind,
        entryPoint: t.entryPoint,
        failureReason: t.outcome,
        sourceSearchParams: n
    })
}

function Me(e) {
    try {
        d.logStructuredEvent(`ChatgptCheckoutPaymentSuccessPage`, e)
    } catch {}
}

function Ne(e) {
    o.count(c.PAYMENTS, F, {
        ...E(e),
        access_stage: e.accessStage,
        failure_reason: e.failureReason
    })
}
async function Pe() {
    await Promise.allSettled([d.flushStructuredEvents(G), Promise.race([o.flush(), new Promise(e => setTimeout(e, G))])])
}

function Fe(e) {
    o.count(c.PAYMENTS, H, {
        payment_method_type: e,
        source: y(),
        reported_web_track: `stable`
    })
}

function Ie(e, t) {
    o.count(c.PAYMENTS, U, {
        ...O(e),
        payment_method_type: t
    })
}

function Le(e) {
    o.count(c.PAYMENTS, R, O(e))
}

function Re(e) {
    o.count(c.PAYMENTS, I, O(e))
}

function ze(e) {
    o.count(c.PAYMENTS, L, O(e))
}

function Be(e, t) {
    let n = we(t),
        r = n.length > 0 ? n : [`none`],
        i = O(e);
    g(`checkout_express_wallet_availability`, void 0, {
        ...i,
        ...Se(t)
    });
    let a = {
        ...i,
        express_payment_method_count: String(n.length)
    };
    g(`chatgpt_checkout_express_payment_methods_rendered`, n.length, a), o.count(c.PAYMENTS, z, a), r.forEach(e => {
        let t = {
            ...i,
            express_payment_method: e
        };
        g(`chatgpt_checkout_express_payment_method_shown`, void 0, t), o.count(c.PAYMENTS, B, t)
    })
}

function Ve(e, t) {
    o.count(c.PAYMENTS, V, {
        ...O(e),
        express_payment_method: t.replace(/_pay$/, `Pay`)
    })
}

function j(e, t) {
    let n = t.resultType === `error` ? t.confirmError.source ?? Y : t.source;
    o.count(c.PAYMENTS, N, {
        ...k(e),
        billing_country: T(e.billingCountry),
        billing_currency: T(e.billingCurrency),
        stage: t.stage,
        failure_reason: t.failureReason,
        ...D(e.checkoutSessionId),
        is_express_checkout: String(t.isExpressCheckout),
        selected_payment_method_type: t.selectedPaymentMethodType ?? Y,
        error_source: n,
        ...ke(t)
    })
}

function He(e, {
    approvalResult: t,
    isExpressCheckout: n,
    selectedPaymentMethodType: r,
    stage: i
}) {
    o.count(c.PAYMENTS, P, {
        ...O(e),
        approval_result: t,
        billing_country: T(e.billingCountry),
        billing_currency: T(e.billingCurrency),
        stage: i,
        checkout_provider: b(e.checkoutSessionId) ? `open_ai` : `stripe`,
        is_express_checkout: String(n),
        selected_payment_method_type: r ?? Y,
        reported_web_track: `stable`
    })
}

function Ue(e, {
    error: t,
    failureReason: n,
    selectedPaymentMethodType: r
}) {
    j(e, {
        stage: n === `confirm_handler_error` ? `express_confirm_handler` : `confirm_invalid`,
        failureReason: n,
        isExpressCheckout: !0,
        selectedPaymentMethodType: r,
        resultType: `exception`,
        error: t,
        source: n === `confirm_handler_error` ? `express_checkout_handler` : `tax_info_update`
    }), d.logEventWithStatsig(`ChatGPT Checkout: Express Checkout Confirm Error Failure`, `chatgpt_checkout_express_checkout_confirm_error_failure`, {
        plan_type: e.planType,
        checkout_id: e.checkoutSessionId,
        requires_manual_approval: e.requiresManualApproval,
        failure_reason: n,
        original_error_message: h(t),
        processor_entity: e.processorEntity,
        is_express_checkout: !0,
        ...e.checkoutModalProductEventMetadata
    })
}

function We(e, {
    stage: t,
    hasOnRequiresApproval: n,
    canConfirm: r
}) {
    g(`chatgpt_checkout_confirm_invoke`, void 0, {
        stage: t,
        requires_manual_approval: String(e.requiresManualApproval),
        has_on_requires_approval: String(n),
        checkout_id: e.checkoutId ?? e.checkoutSessionId,
        processor_entity: e.processorEntity,
        can_confirm: String(r ?? !1),
        plan_type: String(e.planType ?? `unknown`),
        ...e.checkoutModalStatsigMetadata
    })
}

function Ge(e, {
    error: t,
    stage: n,
    isExpressCheckout: r = !1,
    selectedPaymentMethodType: i,
    shouldLogConfirmErrorMetric: a = !0
}) {
    let o = h(t);
    if (typeof o != `string` || !o.includes(`onRequiresApproval`) && !o.includes(`approval_method`)) return !1;
    let s = {
        stage: n,
        requires_manual_approval: e.requiresManualApproval,
        checkout_session_id: e.checkoutId,
        processor_entity: e.processorEntity,
        can_confirm: e.checkoutCanConfirm,
        original_error_message: o
    };
    return a && j(e, {
        stage: n,
        failureReason: `manual_approval_integration_error`,
        isExpressCheckout: r,
        selectedPaymentMethodType: i,
        resultType: `exception`,
        error: t,
        source: `manual_approval_integration`
    }), ge(`checkout.confirm.integration_error`, s), ee.addError(Error(`[checkout] Manual approval integration error`), s), d.logStructuredEvent(`ChatgptCheckoutPaymentInFormFailure`, {
        checkoutPlanType: e.planType ?? void 0,
        checkoutId: e.checkoutSessionId,
        processorEntity: e.processorEntity,
        failureReason: `manual_approval_integration_error`,
        isExpressCheckout: r,
        ...i == null ? {} : {
            selectedPaymentMethodType: i
        },
        ...v(e.checkoutSessionId, void 0),
        ...e.checkoutStructuredEventMetadata
    }), !0
}

function Ke(e, {
    confirmError: t,
    isExpressCheckout: n,
    selectedPaymentMethodType: r
}) {
    d.logStructuredEvent(`ChatgptCheckoutPaymentInFormFailure`, {
        checkoutPlanType: e.planType ?? void 0,
        checkoutId: e.checkoutSessionId,
        processorEntity: e.processorEntity,
        failureReason: `confirm_error`,
        isExpressCheckout: n,
        ...r == null ? {} : {
            selectedPaymentMethodType: r
        },
        ...v(e.checkoutSessionId, t),
        ...e.checkoutStructuredEventMetadata
    })
}

function qe(e, {
    failureReason: t,
    originalErrorMessage: n,
    confirmError: r,
    unexpectedError: i,
    isExpressCheckout: a,
    selectedPaymentMethodType: s
}, {
    shouldLogMetric: l = !0
} = {}) {
    let u = `chatgpt_checkout_subscribe_click_error_failure`,
        p = d.logStructuredEvent(`ChatgptCheckoutSubmissionError`, {
            legacyStatsigEventName: u,
            failureReason: M[t],
            confirmErrorFamily: oe(t, r),
            checkoutPlanType: e.planType ?? void 0,
            checkoutId: e.checkoutSessionId,
            requiresManualApproval: e.requiresManualApproval,
            isExpressCheckout: a,
            selectedPaymentMethodType: s,
            ...v(e.checkoutSessionId, r),
            ...e.checkoutStructuredEventMetadata
        });
    if (d.logValueEventWithStatsig({
            segmentEventName: `ChatGPT Checkout: Subscribe Click Error Failure`,
            statsigEventName: u,
            data: {
                plan_type: e.planType,
                checkout_id: e.checkoutSessionId,
                checkout_provider: b(e.checkoutSessionId) ? `open_ai` : `stripe`,
                requires_manual_approval: e.requiresManualApproval,
                failure_reason: t,
                ...n == null ? {} : {
                    original_error_message: n
                },
                ...De(r),
                ...i === void 0 ? {} : Oe(i),
                is_express_checkout: a,
                ...s == null ? {} : {
                    selected_payment_method_type: s
                },
                ...e.checkoutOutcomeStatsigMetadata,
                ...e.checkoutModalProductEventMetadata
            },
            eventId: p
        }), !l) return;
    let m = t === `unexpected_error` && i !== void 0 ? f(i).error_name || J : void 0;
    o.count(c.PAYMENTS, K, {
        ...k(e),
        ...D(e.checkoutSessionId),
        failure_reason: t,
        is_express_checkout: String(a),
        ...m == null ? {} : {
            error_name: m
        },
        ...s == null ? {} : {
            selected_payment_method_type: s
        }
    })
}

function Je({
    checkoutSessionId: e,
    isCheckoutModalEnabled: t,
    checkoutKind: r,
    entryPoint: i
}) {
    return {
        isCheckoutModalEnabled: t,
        checkoutKind: r,
        ...i ? {
            entryPoint: i
        } : {},
        ...n(r ?? `standard`, e)
    }
}

function Ye(e, {
    paymentMethodType: t,
    paymentMethodId: n,
    prefill: r
}) {
    d.logStructuredEvent(`ChatgptCheckoutPaymentMethodInfoCompleted`, {
        checkoutId: e.checkoutSessionId,
        paymentMethodType: t,
        ...n ? {
            paymentMethodId: n
        } : {},
        prefill: r,
        isExpressCheckout: !1,
        ...e.checkoutStructuredEventMetadata
    })
}

function Xe(e, t) {
    let n = {
        checkout_id: e.checkoutSessionId,
        plan_type: String(e.planType ?? `unknown`)
    };
    t.eventName === `chatgpt_checkout_personal_multi_step_step_shown` ? n.step = t.step : t.eventName !== `chatgpt_checkout_personal_multi_step_submit_clicked` && (n.from_step = t.fromStep, n.source = t.source, n.to_step = t.toStep), g(t.eventName, void 0, n)
}

function Ze(e, t, {
    type: n,
    paymentMethodSource: r,
    isFirstChange: i,
    previousPaymentType: a,
    previousPaymentMethodSource: o
}) {
    let s = e.checkoutSessionId;
    s && n && (i || a !== n || o !== r) && (i && Fe(n), ye(t, {
        paymentMethodType: n,
        paymentMethodSource: r,
        selectionSource: i ? `initial_state` : `user_change`
    }), !i && a !== n && d.logEventWithStatsig(`ChatGPT Checkout: Payment Tab Clicked`, `chatgpt_checkout_payment_tab_clicked`, {
        checkout_id: s,
        payment_method_type: n,
        ...e.checkoutModalProductEventMetadata
    }))
}

function Qe(e, t) {
    d.logStructuredEvent(`ChatgptCheckoutBillingAddressInfoCompleted`, {
        checkoutId: e.checkoutSessionId,
        ...t,
        isExpressCheckout: !1,
        ...e.checkoutStructuredEventMetadata
    })
}

function $e(e, t, n) {
    d.logStructuredEvent(n === `selected` ? `ChatgptCheckoutPaymentMethodSelected` : `ChatgptCheckoutPaymentMethodSelectionCancelled`, {
        checkoutId: e.checkoutSessionId,
        paymentMethodType: t,
        isExpressCheckout: !0,
        checkoutPlanType: e.planType ?? void 0,
        processorEntity: e.processorEntity,
        ...e.checkoutStructuredEventMetadata
    })
}
var M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $, et = e((() => {
    pe(), ie(), r(), le(), fe(), ce(), x(), ae(), _e(), he(), a(), s(), m(), i(), t(), M = {
        confirm_error: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_CONFIRM_ERROR`,
        manual_approval_integration_error: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_MANUAL_APPROVAL_INTEGRATION_ERROR`,
        tax_info_update_failed: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_TAX_INFO_UPDATE_FAILED`,
        unexpected_error: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_UNEXPECTED_ERROR`
    }, N = `checkout.confirm_error`, P = `checkout.confirm_approval_failure`, F = `checkout.access_failure`, I = `checkout.billing_address_element_mounted`, L = `checkout.billing_address_element_rendered`, R = `checkout.express_checkout_element_mounted`, z = `checkout.express_payment_methods_rendered`, B = `checkout.express_payment_method_shown`, V = `checkout.express_payment_method_submitted`, H = `checkout.payment_method_initially_shown`, U = `checkout.payment_method_submitted`, W = `checkout.return_page_failure`, G = 1e3, K = `checkout.subscribe_click_error_failure`, q = `checkout.subscribe_click_incomplete_failure`, J = `unknown`, Y = `unknown`, X = `3412962132`, Z = `3792512848`, Q = `payment_method_instrumentation_type`, $ = `enabled`
}));
export {
    x as A, qe as C, Xe as D, Ge as E, Te as O, A as S, Ue as T, Ze as _, Ne as a, Ie as b, Qe as c, Ke as d, We as f, Be as g, Ve as h, et as i, Ee as k, He as l, $e as m, Je as n, Re as o, Le as p, Ce as r, ze as s, Pe as t, j as u, je as v, Ae as w, Me as x, Ye as y
};
//# sourceMappingURL=a4eef3c0-htjsels66bfs9l7w.js.map