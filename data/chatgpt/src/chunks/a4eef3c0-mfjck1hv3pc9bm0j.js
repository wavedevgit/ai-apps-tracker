import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cat as t,
    Drt as n,
    Ert as r,
    Frt as i,
    Int as a,
    Mrt as o,
    Ort as s,
    Pnt as c,
    Qat as l,
    Yat as u,
    frt as d,
    jrt as f,
    mrt as p,
    p3 as m,
    prt as ee,
    urt as te,
    xat as h
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Dln as ne,
    Oln as re,
    Qin as ie,
    _sn as g,
    cln as ae,
    dln as oe,
    fln as _,
    hln as se,
    jGn as ce,
    lln as le,
    mln as v,
    pan as ue,
    pln as de,
    uln as fe,
    vsn as pe,
    yln as y
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Gh as me,
    Hh as he,
    Ih as ge,
    Wh as _e,
    Yh as ve,
    eg as ye,
    tg as be
} from "./c2675c8c-d62p1sdq1sy52umm.js";

function xe(e, t) {
    if (t !== `IntegrationError`) return `not_applicable`;
    let n = e ?? ``;
    return n.startsWith(`Could not find a mounted element to create the Confirmation Token from,`) ? `missing_mounted_element` : n.startsWith(`You specified "never" for fields.billing_details.address`) && n.includes(`but did not pass params.payment_method_data.billing_details.address.country when calling stripe.createConfirmationToken()`) ? `required_country` : n.startsWith(`Unexpected call to paymentFailed().`) && n.includes(`calling paymentFailed() once per expressCheckout Element confirm event`) ? `invalid_wallet_settlement` : n.startsWith(`A complete billing address is required to confirm this Checkout Session.`) ? `required_billing_address` : n.startsWith(`Invalid confirm() call.`) && n.includes(`expressCheckoutConfirmEvent: event`) ? `missing_express_confirm_event` : n.startsWith(`elements.submit() must be called before stripe.createConfirmationToken().`) ? `elements_submit_required` : `other`
}
var Se = e((() => {}));

function Ce(e) {
    return {
        is_apple_pay_shown: String(e?.applePay === !0),
        is_express_checkout_shown: String(ye(e)),
        is_google_pay_shown: String(e?.googlePay === !0)
    }
}
var b = e((() => {
    be(), ue()
}));

function we(e) {
    return e == null || !Number.isFinite(e) ? null : e === 2 ? 1 : e >= 3 && e <= 5 ? 5 : e >= 6 && e <= 10 ? 10 : e >= 11 ? 20 : null
}

function Te(e) {
    return e == null ? [] : Object.entries(e).filter(([, e]) => !!e).map(([e]) => e).sort()
}

function x(e) {
    let t = d(X).get($, !1);
    return se({
        enabled: t,
        buckets: t ? te(Z).get(Q, {}) : void 0,
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
    let t = _(e);
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
    let t = u(e),
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
        let t = _(e.confirmError);
        return {
            result_type: e.resultType,
            sdk_error_family: `not_applicable`,
            error_category: `confirm_error`,
            error_name: `ConfirmError`,
            error_type: C(e.confirmError, `type`) ?? Y,
            error_code: he(e.confirmError),
            error_status: Y,
            decline_code: t ?? Y
        }
    }
    let t = u(e.error);
    return {
        result_type: e.resultType,
        sdk_error_family: xe(m(e.error), t.error_name),
        error_category: t.error_category,
        error_name: t.error_name ?? Y,
        error_type: C(e.error, `type`) ?? S(t) ?? Y,
        error_code: t.error_code ?? C(e.error, `code`) ?? Y,
        error_status: t.error_status == null ? Y : String(t.error_status),
        decline_code: C(e.error, `decline_code`) ?? Y
    }
}

function T(e) {
    return le(e, `stable`, f() ?? `unknown`)
}

function E(e) {
    return {
        checkout_provider: e == null ? J : y(e) ? `open_ai` : `stripe`,
        reported_web_track: `stable`
    }
}

function D(e) {
    return {
        plan_type: String(e.planType ?? `unknown`),
        processor_entity: e.processorEntity,
        checkout_kind: fe(e.checkoutStructuredEventMetadata.checkoutKind),
        promotion_campaign: e.checkoutOutcomeStatsigMetadata.promo_campaign_id ?? `none`,
        requires_manual_approval: String(e.requiresManualApproval),
        source: g(),
        ...e.checkoutModalStatsigMetadata,
        reported_web_track: `stable`
    }
}

function O(e) {
    return {
        ...D(e),
        entry_point: ae(e.checkoutStructuredEventMetadata.entryPoint)
    }
}

function je(e, {
    hasBillingAddressErrors: t,
    hasEmailErrors: r,
    hasInvalidConfirmError: i,
    hasPaymentElementErrors: a,
    hasTaxInfoErrors: o,
    isExpressCheckout: c,
    submitErrorSource: l
}) {
    n.count(s.PAYMENTS, q, {
        ...O(e),
        ...ne(e.experiments),
        checkout_presentation: e.isCheckoutModalPresentation ? `modal` : `full_page`,
        ...E(e.checkoutSessionId),
        failure_reason: `field_validation_failed`,
        submit_error_source: l,
        has_billing_address_errors: String(t),
        has_email_errors: String(r),
        has_invalid_confirm_error: String(i),
        has_payment_element_errors: String(a),
        has_tax_info_errors: String(o),
        is_express_checkout: String(c)
    })
}

function k(e, t) {
    n.count(s.PAYMENTS, W, {
        ...T(t),
        failure_reason: t.failureReason,
        return_page: e
    })
}

function Me(e, t, n) {
    c.logStructuredEvent(`ChatgptCheckoutPaymentFailurePage`, t), e != null && k(e, {
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
        c.logStructuredEvent(`ChatgptCheckoutPaymentSuccessPage`, e)
    } catch {}
}

function Pe(e) {
    n.count(s.PAYMENTS, F, {
        ...T(e),
        access_stage: e.accessStage,
        failure_reason: e.failureReason
    })
}
async function Fe() {
    await Promise.allSettled([c.flushStructuredEvents(G), Promise.race([n.flush(), new Promise(e => setTimeout(e, G))])])
}

function Ie(e) {
    n.count(s.PAYMENTS, H, {
        payment_method_type: e,
        source: g(),
        reported_web_track: `stable`
    })
}

function Le(e, t) {
    n.count(s.PAYMENTS, U, {
        ...D(e),
        payment_method_type: t
    })
}

function Re(e) {
    n.count(s.PAYMENTS, R, D(e))
}

function ze(e) {
    n.count(s.PAYMENTS, I, D(e))
}

function A(e) {
    n.count(s.PAYMENTS, L, D(e))
}

function Be(e, t) {
    let r = Te(t),
        i = r.length > 0 ? r : [`none`],
        a = D(e);
    p(`checkout_express_wallet_availability`, void 0, {
        ...a,
        ...Ce(t)
    });
    let o = {
        ...a,
        express_payment_method_count: String(r.length)
    };
    p(`chatgpt_checkout_express_payment_methods_rendered`, r.length, o), n.count(s.PAYMENTS, z, o), i.forEach(e => {
        let t = {
            ...a,
            express_payment_method: e
        };
        p(`chatgpt_checkout_express_payment_method_shown`, void 0, t), n.count(s.PAYMENTS, B, t)
    })
}

function Ve(e, t) {
    n.count(s.PAYMENTS, V, {
        ...D(e),
        express_payment_method: t.replace(/_pay$/, `Pay`)
    })
}

function j(e, t) {
    let r = t.resultType === `error` ? t.confirmError.source ?? Y : t.source;
    n.count(s.PAYMENTS, N, {
        ...O(e),
        billing_country: w(e.billingCountry),
        billing_currency: w(e.billingCurrency),
        stage: t.stage,
        failure_reason: t.failureReason,
        ...E(e.checkoutSessionId),
        is_express_checkout: String(t.isExpressCheckout),
        selected_payment_method_type: t.selectedPaymentMethodType ?? Y,
        error_source: r,
        ...Ae(t)
    })
}

function He(e, {
    approvalResult: t,
    isExpressCheckout: r,
    selectedPaymentMethodType: i,
    stage: a
}) {
    n.count(s.PAYMENTS, P, {
        ...D(e),
        approval_result: t,
        billing_country: w(e.billingCountry),
        billing_currency: w(e.billingCurrency),
        stage: a,
        checkout_provider: y(e.checkoutSessionId) ? `open_ai` : `stripe`,
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
    }), c.logEventWithStatsig(`ChatGPT Checkout: Express Checkout Confirm Error Failure`, `chatgpt_checkout_express_checkout_confirm_error_failure`, {
        plan_type: e.planType,
        checkout_id: e.checkoutSessionId,
        requires_manual_approval: e.requiresManualApproval,
        failure_reason: n,
        original_error_message: m(t),
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
    p(`chatgpt_checkout_confirm_invoke`, void 0, {
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
    let o = m(t);
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
    }), me(`checkout.confirm.integration_error`, s), h.addError(Error(`[checkout] Manual approval integration error`), s), c.logStructuredEvent(`ChatgptCheckoutPaymentInFormFailure`, {
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
    c.logStructuredEvent(`ChatgptCheckoutPaymentInFormFailure`, {
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
    originalErrorMessage: r,
    confirmError: i,
    unexpectedError: a,
    isExpressCheckout: o,
    selectedPaymentMethodType: l
}, {
    shouldLogMetric: d = !0
} = {}) {
    let f = `chatgpt_checkout_subscribe_click_error_failure`,
        p = c.logStructuredEvent(`ChatgptCheckoutSubmissionError`, {
            legacyStatsigEventName: f,
            failureReason: M[t],
            confirmErrorFamily: de(t, i),
            checkoutPlanType: e.planType ?? void 0,
            checkoutId: e.checkoutSessionId,
            requiresManualApproval: e.requiresManualApproval,
            isExpressCheckout: o,
            selectedPaymentMethodType: l,
            ...v(e.checkoutSessionId, i),
            ...e.checkoutStructuredEventMetadata
        });
    if (c.logValueEventWithStatsig({
            segmentEventName: `ChatGPT Checkout: Subscribe Click Error Failure`,
            statsigEventName: f,
            data: {
                plan_type: e.planType,
                checkout_id: e.checkoutSessionId,
                checkout_provider: y(e.checkoutSessionId) ? `open_ai` : `stripe`,
                requires_manual_approval: e.requiresManualApproval,
                failure_reason: t,
                ...r == null ? {} : {
                    original_error_message: r
                },
                ...Oe(i),
                ...a === void 0 ? {} : ke(a),
                is_express_checkout: o,
                ...l == null ? {} : {
                    selected_payment_method_type: l
                },
                ...e.checkoutOutcomeStatsigMetadata,
                ...e.checkoutModalProductEventMetadata
            },
            eventId: p
        }), !d) return;
    let m = t === `unexpected_error` && a !== void 0 ? u(a).error_name || J : void 0;
    n.count(s.PAYMENTS, K, {
        ...O(e),
        ...E(e.checkoutSessionId),
        failure_reason: t,
        is_express_checkout: String(o),
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
        ...i(n ?? `standard`, e)
    }
}

function Ye(e, {
    paymentMethodType: t,
    paymentMethodId: n,
    prefill: r
}) {
    c.logStructuredEvent(`ChatgptCheckoutPaymentMethodInfoCompleted`, {
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
    t.eventName === `chatgpt_checkout_personal_multi_step_step_shown` ? n.step = t.step : t.eventName !== `chatgpt_checkout_personal_multi_step_submit_clicked` && (n.from_step = t.fromStep, n.source = t.source, n.to_step = t.toStep), p(t.eventName, void 0, n)
}

function Ze(e, t, {
    type: n,
    paymentMethodSource: r,
    isFirstChange: i,
    previousPaymentType: a,
    previousPaymentMethodSource: o
}) {
    let s = e.checkoutSessionId;
    s && n && (i || a !== n || o !== r) && (i && Ie(n), ve(t, {
        paymentMethodType: n,
        paymentMethodSource: r,
        selectionSource: i ? `initial_state` : `user_change`
    }), !i && a !== n && c.logEventWithStatsig(`ChatGPT Checkout: Payment Tab Clicked`, `chatgpt_checkout_payment_tab_clicked`, {
        checkout_id: s,
        payment_method_type: n,
        ...e.checkoutModalProductEventMetadata
    }))
}

function Qe(e, t) {
    c.logStructuredEvent(`ChatgptCheckoutBillingAddressInfoCompleted`, {
        checkoutId: e.checkoutSessionId,
        ...t,
        isExpressCheckout: !1,
        ...e.checkoutStructuredEventMetadata
    })
}

function $e(e, t, n) {
    c.logStructuredEvent(n === `selected` ? `ChatgptCheckoutPaymentMethodSelected` : `ChatgptCheckoutPaymentMethodSelectionCancelled`, {
        checkoutId: e.checkoutSessionId,
        paymentMethodType: t,
        isExpressCheckout: !0,
        checkoutPlanType: e.planType ?? void 0,
        processorEntity: e.processorEntity,
        ...e.checkoutStructuredEventMetadata
    })
}
var M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $, et = e((() => {
    Se(), re(), o(), oe(), ce(), ie(), b(), pe(), _e(), ge(), a(), t(), l(), r(), ee(), M = {
        confirm_error: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_CONFIRM_ERROR`,
        manual_approval_integration_error: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_MANUAL_APPROVAL_INTEGRATION_ERROR`,
        tax_info_update_failed: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_TAX_INFO_UPDATE_FAILED`,
        unexpected_error: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_UNEXPECTED_ERROR`
    }, N = `checkout.confirm_error`, P = `checkout.confirm_approval_failure`, F = `checkout.access_failure`, I = `checkout.billing_address_element_mounted`, L = `checkout.billing_address_element_rendered`, R = `checkout.express_checkout_element_mounted`, z = `checkout.express_payment_methods_rendered`, B = `checkout.express_payment_method_shown`, V = `checkout.express_payment_method_submitted`, H = `checkout.payment_method_initially_shown`, U = `checkout.payment_method_submitted`, W = `checkout.return_page_failure`, G = 1e3, K = `checkout.subscribe_click_error_failure`, q = `checkout.subscribe_click_incomplete_failure`, J = `unknown`, Y = `unknown`, X = `3412962132`, Z = `3792512848`, Q = `payment_method_instrumentation_type`, $ = `enabled`
}));
export {
    b as A, qe as C, Xe as D, Ge as E, Ee as O, k as S, Ue as T, Ze as _, Pe as a, Le as b, Qe as c, Ke as d, We as f, Be as g, Ve as h, et as i, De as k, He as l, $e as m, Je as n, ze as o, Re as p, we as r, A as s, Fe as t, j as u, Me as v, je as w, Ne as x, Ye as y
};
//# sourceMappingURL=a4eef3c0-mfjck1hv3pc9bm0j.js.map