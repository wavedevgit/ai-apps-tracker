import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Art as t,
    Eat as n,
    Frt as r,
    Lnt as i,
    Prt as a,
    Qat as o,
    Rrt as s,
    _rt as c,
    grt as l,
    hrt as u,
    jrt as d,
    krt as f,
    p3 as p,
    prt as m,
    tot as ee,
    wat as te,
    znt as h
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Aln as ne,
    Can as re,
    Dln as ie,
    Eln as ae,
    Gln as oe,
    Iln as g,
    JGn as se,
    Mln as ce,
    Oln as le,
    Osn as _,
    Tln as ue,
    Wln as de,
    can as fe,
    jln as v,
    kln as y,
    ksn as pe
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    $h as me,
    Bh as he,
    Jh as ge,
    Kh as _e,
    Sg as ve,
    Yh as ye,
    ag as be,
    ig as xe,
    xg as Se
} from "./c2675c8c-jg3tpj8mw86wdc0g.js";

function Ce(e) {
    return {
        is_apple_pay_shown: String(e?.applePay === !0),
        is_express_checkout_shown: String(xe(e)),
        is_google_pay_shown: String(e?.googlePay === !0)
    }
}
var b = e((() => {
    be(), re()
}));

function we(e) {
    return e == null || !Number.isFinite(e) ? null : e === 2 ? 1 : e >= 3 && e <= 5 ? 5 : e >= 6 && e <= 10 ? 10 : e >= 11 ? 20 : null
}

function Te(e) {
    return e == null ? [] : Object.entries(e).filter(([, e]) => !!e).map(([e]) => e).sort()
}

function x(e) {
    let t = u(X).get($, !1);
    return ce({
        enabled: t,
        buckets: t ? m(Z).get(Q, {}) : void 0,
        method: e
    })
}

function Ee(e) {
    return x(e) === `payment_element_complete`
}

function De(e) {
    return x(e) === `submit`
}

function Oe(e) {
    if (e == null) return {};
    let t = y(e);
    return {
        confirm_error_code: e.code ?? `none`,
        confirm_error_source: e.source ?? Y,
        confirm_error_type: C(e, `type`) ?? Y,
        ...t == null ? {} : {
            confirm_payment_failed_decline_code: t
        }
    }
}

function S(e) {
    return e.error_is_client_error === !0 ? `client` : e.error_is_server_error === !0 ? `server` : null
}

function ke(e) {
    let t = o(e),
        n = S(t);
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

function C(e, t) {
    if (typeof e != `object` || !e) return null;
    let n = Reflect.get(e, t);
    return typeof n == `string` && n.length > 0 ? n : null
}

function w(e) {
    return e?.trim().toUpperCase() || Y
}

function Ae(e) {
    if (e.resultType === `error`) {
        let t = y(e.confirmError);
        return {
            result_type: e.resultType,
            sdk_error_family: `not_applicable`,
            error_category: `confirm_error`,
            error_name: `ConfirmError`,
            error_type: C(e.confirmError, `type`) ?? Y,
            error_code: _e(e.confirmError),
            error_status: Y,
            decline_code: t ?? Y
        }
    }
    let t = o(e.error);
    return {
        result_type: e.resultType,
        sdk_error_family: Se(p(e.error), t.error_name),
        error_category: t.error_category,
        error_name: t.error_name ?? Y,
        error_type: C(e.error, `type`) ?? S(t) ?? Y,
        error_code: t.error_code ?? C(e.error, `code`) ?? Y,
        error_status: t.error_status == null ? Y : String(t.error_status),
        decline_code: C(e.error, `decline_code`) ?? Y
    }
}

function T(e) {
    return ae(e, `stable`, a() ?? `unknown`)
}

function E(e) {
    return {
        checkout_provider: e == null ? J : g(e) ? `open_ai` : `stripe`,
        reported_web_track: `stable`
    }
}

function D(e) {
    return {
        plan_type: String(e.planType ?? `unknown`),
        processor_entity: e.processorEntity,
        checkout_kind: ie(e.checkoutStructuredEventMetadata.checkoutKind),
        promotion_campaign: e.checkoutOutcomeStatsigMetadata.promo_campaign_id ?? `none`,
        requires_manual_approval: String(e.requiresManualApproval),
        source: _(),
        ...e.checkoutModalStatsigMetadata,
        reported_web_track: `stable`
    }
}

function O(e) {
    return {
        ...D(e),
        entry_point: ue(e.checkoutStructuredEventMetadata.entryPoint)
    }
}

function je(e, {
    hasBillingAddressErrors: n,
    hasEmailErrors: r,
    hasInvalidConfirmError: i,
    hasPaymentElementErrors: a,
    hasTaxInfoErrors: o,
    isExpressCheckout: s,
    submitErrorSource: c
}) {
    t.count(d.PAYMENTS, q, {
        ...O(e),
        ...de(e.experiments),
        checkout_presentation: e.isCheckoutModalPresentation ? `modal` : `full_page`,
        ...E(e.checkoutSessionId),
        failure_reason: `field_validation_failed`,
        submit_error_source: c,
        has_billing_address_errors: String(n),
        has_email_errors: String(r),
        has_invalid_confirm_error: String(i),
        has_payment_element_errors: String(a),
        has_tax_info_errors: String(o),
        is_express_checkout: String(s)
    })
}

function k(e, n) {
    t.count(d.PAYMENTS, W, {
        ...T(n),
        failure_reason: n.failureReason,
        return_page: e
    })
}

function Me(e, t, n) {
    i.logStructuredEvent(`ChatgptCheckoutPaymentFailurePage`, t), e != null && k(e, {
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

function Ne(e) {
    try {
        i.logStructuredEvent(`ChatgptCheckoutPaymentSuccessPage`, e)
    } catch {}
}

function Pe(e) {
    t.count(d.PAYMENTS, F, {
        ...T(e),
        access_stage: e.accessStage,
        failure_reason: e.failureReason
    })
}
async function Fe() {
    await Promise.allSettled([i.flushStructuredEvents(G), Promise.race([t.flush(), new Promise(e => setTimeout(e, G))])])
}

function Ie(e) {
    t.count(d.PAYMENTS, H, {
        payment_method_type: e,
        source: _(),
        reported_web_track: `stable`
    })
}

function Le(e, n) {
    t.count(d.PAYMENTS, U, {
        ...D(e),
        payment_method_type: n
    })
}

function Re(e) {
    t.count(d.PAYMENTS, R, D(e))
}

function ze(e) {
    t.count(d.PAYMENTS, I, D(e))
}

function A(e) {
    t.count(d.PAYMENTS, L, D(e))
}

function Be(e, n) {
    let r = Te(n),
        i = r.length > 0 ? r : [`none`],
        a = D(e);
    c(`checkout_express_wallet_availability`, void 0, {
        ...a,
        ...Ce(n)
    });
    let o = {
        ...a,
        express_payment_method_count: String(r.length)
    };
    c(`chatgpt_checkout_express_payment_methods_rendered`, r.length, o), t.count(d.PAYMENTS, z, o), i.forEach(e => {
        let n = {
            ...a,
            express_payment_method: e
        };
        c(`chatgpt_checkout_express_payment_method_shown`, void 0, n), t.count(d.PAYMENTS, B, n)
    })
}

function Ve(e, n) {
    t.count(d.PAYMENTS, V, {
        ...D(e),
        express_payment_method: n.replace(/_pay$/, `Pay`)
    })
}

function j(e, n) {
    let r = n.resultType === `error` ? n.confirmError.source ?? Y : n.source;
    t.count(d.PAYMENTS, N, {
        ...O(e),
        billing_country: w(e.billingCountry),
        billing_currency: w(e.billingCurrency),
        stage: n.stage,
        failure_reason: n.failureReason,
        ...E(e.checkoutSessionId),
        is_express_checkout: String(n.isExpressCheckout),
        selected_payment_method_type: n.selectedPaymentMethodType ?? Y,
        error_source: r,
        ...Ae(n)
    })
}

function He(e, {
    approvalResult: n,
    isExpressCheckout: r,
    selectedPaymentMethodType: i,
    stage: a
}) {
    t.count(d.PAYMENTS, P, {
        ...D(e),
        approval_result: n,
        billing_country: w(e.billingCountry),
        billing_currency: w(e.billingCurrency),
        stage: a,
        checkout_provider: g(e.checkoutSessionId) ? `open_ai` : `stripe`,
        is_express_checkout: String(r),
        selected_payment_method_type: i ?? Y,
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
    }), i.logEventWithStatsig(`ChatGPT Checkout: Express Checkout Confirm Error Failure`, `chatgpt_checkout_express_checkout_confirm_error_failure`, {
        plan_type: e.planType,
        checkout_id: e.checkoutSessionId,
        requires_manual_approval: e.requiresManualApproval,
        failure_reason: n,
        original_error_message: p(t),
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
    c(`chatgpt_checkout_confirm_invoke`, void 0, {
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
    selectedPaymentMethodType: a,
    shouldLogConfirmErrorMetric: o = !0
}) {
    let s = p(t);
    if (typeof s != `string` || !s.includes(`onRequiresApproval`) && !s.includes(`approval_method`)) return !1;
    let c = {
        stage: n,
        requires_manual_approval: e.requiresManualApproval,
        checkout_session_id: e.checkoutId,
        processor_entity: e.processorEntity,
        can_confirm: e.checkoutCanConfirm,
        original_error_message: s
    };
    return o && j(e, {
        stage: n,
        failureReason: `manual_approval_integration_error`,
        isExpressCheckout: r,
        selectedPaymentMethodType: a,
        resultType: `exception`,
        error: t,
        source: `manual_approval_integration`
    }), ye(`checkout.confirm.integration_error`, c), te.addError(Error(`[checkout] Manual approval integration error`), c), i.logStructuredEvent(`ChatgptCheckoutPaymentInFormFailure`, {
        checkoutPlanType: e.planType ?? void 0,
        checkoutId: e.checkoutSessionId,
        processorEntity: e.processorEntity,
        failureReason: `manual_approval_integration_error`,
        isExpressCheckout: r,
        ...a == null ? {} : {
            selectedPaymentMethodType: a
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
    i.logStructuredEvent(`ChatgptCheckoutPaymentInFormFailure`, {
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
    failureReason: n,
    originalErrorMessage: r,
    confirmError: a,
    unexpectedError: s,
    isExpressCheckout: c,
    selectedPaymentMethodType: l
}, {
    shouldLogMetric: u = !0
} = {}) {
    let f = `chatgpt_checkout_subscribe_click_error_failure`,
        p = i.logStructuredEvent(`ChatgptCheckoutSubmissionError`, {
            legacyStatsigEventName: f,
            failureReason: M[n],
            confirmErrorFamily: ne(n, a),
            checkoutPlanType: e.planType ?? void 0,
            checkoutId: e.checkoutSessionId,
            requiresManualApproval: e.requiresManualApproval,
            isExpressCheckout: c,
            selectedPaymentMethodType: l,
            ...v(e.checkoutSessionId, a),
            ...e.checkoutStructuredEventMetadata
        });
    if (i.logValueEventWithStatsig({
            segmentEventName: `ChatGPT Checkout: Subscribe Click Error Failure`,
            statsigEventName: f,
            data: {
                plan_type: e.planType,
                checkout_id: e.checkoutSessionId,
                checkout_provider: g(e.checkoutSessionId) ? `open_ai` : `stripe`,
                requires_manual_approval: e.requiresManualApproval,
                failure_reason: n,
                ...r == null ? {} : {
                    original_error_message: r
                },
                ...Oe(a),
                ...s === void 0 ? {} : ke(s),
                is_express_checkout: c,
                ...l == null ? {} : {
                    selected_payment_method_type: l
                },
                ...e.checkoutOutcomeStatsigMetadata,
                ...e.checkoutModalProductEventMetadata
            },
            eventId: p
        }), !u) return;
    let m = n === `unexpected_error` && s !== void 0 ? o(s).error_name || J : void 0;
    t.count(d.PAYMENTS, K, {
        ...O(e),
        ...E(e.checkoutSessionId),
        failure_reason: n,
        is_express_checkout: String(c),
        ...m == null ? {} : {
            error_name: m
        },
        ...l == null ? {} : {
            selected_payment_method_type: l
        }
    })
}

function Je({
    checkoutSessionId: e,
    isCheckoutModalEnabled: t,
    checkoutKind: n,
    entryPoint: r
}) {
    return {
        isCheckoutModalEnabled: t,
        checkoutKind: n,
        ...r ? {
            entryPoint: r
        } : {},
        ...s(n ?? `standard`, e)
    }
}

function Ye(e, {
    paymentMethodType: t,
    paymentMethodId: n,
    prefill: r
}) {
    i.logStructuredEvent(`ChatgptCheckoutPaymentMethodInfoCompleted`, {
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
    t.eventName === `chatgpt_checkout_personal_multi_step_step_shown` ? n.step = t.step : t.eventName !== `chatgpt_checkout_personal_multi_step_submit_clicked` && (n.from_step = t.fromStep, n.source = t.source, n.to_step = t.toStep), c(t.eventName, void 0, n)
}

function Ze(e, t, {
    type: n,
    paymentMethodSource: r,
    isFirstChange: a,
    previousPaymentType: o,
    previousPaymentMethodSource: s
}) {
    let c = e.checkoutSessionId;
    c && n && (a || o !== n || s !== r) && (a && Ie(n), me(t, {
        paymentMethodType: n,
        paymentMethodSource: r,
        selectionSource: a ? `initial_state` : `user_change`
    }), !a && o !== n && i.logEventWithStatsig(`ChatGPT Checkout: Payment Tab Clicked`, `chatgpt_checkout_payment_tab_clicked`, {
        checkout_id: c,
        payment_method_type: n,
        ...e.checkoutModalProductEventMetadata
    }))
}

function Qe(e, t) {
    i.logStructuredEvent(`ChatgptCheckoutBillingAddressInfoCompleted`, {
        checkoutId: e.checkoutSessionId,
        ...t,
        isExpressCheckout: !1,
        ...e.checkoutStructuredEventMetadata
    })
}

function $e(e, t, n) {
    i.logStructuredEvent(n === `selected` ? `ChatgptCheckoutPaymentMethodSelected` : `ChatgptCheckoutPaymentMethodSelectionCancelled`, {
        checkoutId: e.checkoutSessionId,
        paymentMethodType: t,
        isExpressCheckout: !0,
        checkoutPlanType: e.planType ?? void 0,
        processorEntity: e.processorEntity,
        ...e.checkoutStructuredEventMetadata
    })
}
var M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $, et = e((() => {
    ve(), oe(), r(), le(), se(), fe(), b(), pe(), ge(), he(), h(), n(), ee(), f(), l(), M = {
        confirm_error: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_CONFIRM_ERROR`,
        manual_approval_integration_error: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_MANUAL_APPROVAL_INTEGRATION_ERROR`,
        tax_info_update_failed: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_TAX_INFO_UPDATE_FAILED`,
        unexpected_error: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_UNEXPECTED_ERROR`
    }, N = `checkout.confirm_error`, P = `checkout.confirm_approval_failure`, F = `checkout.access_failure`, I = `checkout.billing_address_element_mounted`, L = `checkout.billing_address_element_rendered`, R = `checkout.express_checkout_element_mounted`, z = `checkout.express_payment_methods_rendered`, B = `checkout.express_payment_method_shown`, V = `checkout.express_payment_method_submitted`, H = `checkout.payment_method_initially_shown`, U = `checkout.payment_method_submitted`, W = `checkout.return_page_failure`, G = 1e3, K = `checkout.subscribe_click_error_failure`, q = `checkout.subscribe_click_incomplete_failure`, J = `unknown`, Y = `unknown`, X = `3412962132`, Z = `3792512848`, Q = `payment_method_instrumentation_type`, $ = `enabled`
}));
export {
    b as A, qe as C, Xe as D, Ge as E, Ee as O, k as S, Ue as T, Ze as _, Pe as a, Le as b, Qe as c, Ke as d, We as f, Be as g, Ve as h, et as i, De as k, He as l, $e as m, Je as n, ze as o, Re as p, we as r, A as s, Fe as t, j as u, Me as v, je as w, Ne as x, Ye as y
};
//# sourceMappingURL=a4eef3c0-m6r0nypevn4gq7q9.js.map