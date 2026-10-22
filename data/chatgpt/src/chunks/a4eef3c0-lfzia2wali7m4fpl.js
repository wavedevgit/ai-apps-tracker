import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Art as t,
    Cat as n,
    Int as r,
    Lrt as i,
    Nrt as a,
    Ort as o,
    Prt as s,
    Rnt as c,
    Tat as l,
    Zat as u,
    eot as d,
    frt as f,
    grt as p,
    hrt as ee,
    krt as m,
    mrt as te,
    p3 as h
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Aln as ne,
    Dln as re,
    Eln as ie,
    Gln as ae,
    Iln as g,
    JGn as oe,
    Mln as se,
    Oln as ce,
    Osn as _,
    Tln as le,
    Wln as ue,
    jln as v,
    kln as y,
    ksn as de,
    lan as fe,
    wan as pe
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Gh as me,
    Hh as he,
    Ih as ge,
    Wh as _e,
    Yh as ve,
    eg as ye,
    tg as be
} from "./c2675c8c-otyjprdiowg2v8hl.js";

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
    be(), pe()
}));

function we(e) {
    return e == null || !Number.isFinite(e) ? null : e === 2 ? 1 : e >= 3 && e <= 5 ? 5 : e >= 6 && e <= 10 ? 10 : e >= 11 ? 20 : null
}

function Te(e) {
    return e == null ? [] : Object.entries(e).filter(([, e]) => !!e).map(([e]) => e).sort()
}

function x(e) {
    let t = te(X).get($, !1);
    return se({
        enabled: t,
        buckets: t ? f(Z).get(Q, {}) : void 0,
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
        let t = y(e.confirmError);
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
        sdk_error_family: xe(h(e.error), t.error_name),
        error_category: t.error_category,
        error_name: t.error_name ?? Y,
        error_type: C(e.error, `type`) ?? S(t) ?? Y,
        error_code: t.error_code ?? C(e.error, `code`) ?? Y,
        error_status: t.error_status == null ? Y : String(t.error_status),
        decline_code: C(e.error, `decline_code`) ?? Y
    }
}

function T(e) {
    return ie(e, `stable`, a() ?? `unknown`)
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
        checkout_kind: re(e.checkoutStructuredEventMetadata.checkoutKind),
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
        entry_point: le(e.checkoutStructuredEventMetadata.entryPoint)
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
    m.count(t.PAYMENTS, q, {
        ...O(e),
        ...ue(e.experiments),
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
    m.count(t.PAYMENTS, W, {
        ...T(n),
        failure_reason: n.failureReason,
        return_page: e
    })
}

function Me(e, t, n) {
    r.logStructuredEvent(`ChatgptCheckoutPaymentFailurePage`, t), e != null && k(e, {
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
        r.logStructuredEvent(`ChatgptCheckoutPaymentSuccessPage`, e)
    } catch {}
}

function Pe(e) {
    m.count(t.PAYMENTS, F, {
        ...T(e),
        access_stage: e.accessStage,
        failure_reason: e.failureReason
    })
}
async function Fe() {
    await Promise.allSettled([r.flushStructuredEvents(G), Promise.race([m.flush(), new Promise(e => setTimeout(e, G))])])
}

function Ie(e) {
    m.count(t.PAYMENTS, H, {
        payment_method_type: e,
        source: _(),
        reported_web_track: `stable`
    })
}

function Le(e, n) {
    m.count(t.PAYMENTS, U, {
        ...D(e),
        payment_method_type: n
    })
}

function Re(e) {
    m.count(t.PAYMENTS, R, D(e))
}

function ze(e) {
    m.count(t.PAYMENTS, I, D(e))
}

function Be(e) {
    m.count(t.PAYMENTS, L, D(e))
}

function A(e, n) {
    let r = Te(n),
        i = r.length > 0 ? r : [`none`],
        a = D(e);
    p(`checkout_express_wallet_availability`, void 0, {
        ...a,
        ...Ce(n)
    });
    let o = {
        ...a,
        express_payment_method_count: String(r.length)
    };
    p(`chatgpt_checkout_express_payment_methods_rendered`, r.length, o), m.count(t.PAYMENTS, z, o), i.forEach(e => {
        let n = {
            ...a,
            express_payment_method: e
        };
        p(`chatgpt_checkout_express_payment_method_shown`, void 0, n), m.count(t.PAYMENTS, B, n)
    })
}

function Ve(e, n) {
    m.count(t.PAYMENTS, V, {
        ...D(e),
        express_payment_method: n.replace(/_pay$/, `Pay`)
    })
}

function j(e, n) {
    let r = n.resultType === `error` ? n.confirmError.source ?? Y : n.source;
    m.count(t.PAYMENTS, N, {
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
    m.count(t.PAYMENTS, P, {
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
    selectedPaymentMethodType: i
}) {
    j(e, {
        stage: n === `confirm_handler_error` ? `express_confirm_handler` : `confirm_invalid`,
        failureReason: n,
        isExpressCheckout: !0,
        selectedPaymentMethodType: i,
        resultType: `exception`,
        error: t,
        source: n === `confirm_handler_error` ? `express_checkout_handler` : `tax_info_update`
    }), r.logEventWithStatsig(`ChatGPT Checkout: Express Checkout Confirm Error Failure`, `chatgpt_checkout_express_checkout_confirm_error_failure`, {
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
    stage: i,
    isExpressCheckout: a = !1,
    selectedPaymentMethodType: o,
    shouldLogConfirmErrorMetric: s = !0
}) {
    let c = h(t);
    if (typeof c != `string` || !c.includes(`onRequiresApproval`) && !c.includes(`approval_method`)) return !1;
    let l = {
        stage: i,
        requires_manual_approval: e.requiresManualApproval,
        checkout_session_id: e.checkoutId,
        processor_entity: e.processorEntity,
        can_confirm: e.checkoutCanConfirm,
        original_error_message: c
    };
    return s && j(e, {
        stage: i,
        failureReason: `manual_approval_integration_error`,
        isExpressCheckout: a,
        selectedPaymentMethodType: o,
        resultType: `exception`,
        error: t,
        source: `manual_approval_integration`
    }), me(`checkout.confirm.integration_error`, l), n.addError(Error(`[checkout] Manual approval integration error`), l), r.logStructuredEvent(`ChatgptCheckoutPaymentInFormFailure`, {
        checkoutPlanType: e.planType ?? void 0,
        checkoutId: e.checkoutSessionId,
        processorEntity: e.processorEntity,
        failureReason: `manual_approval_integration_error`,
        isExpressCheckout: a,
        ...o == null ? {} : {
            selectedPaymentMethodType: o
        },
        ...v(e.checkoutSessionId, void 0),
        ...e.checkoutStructuredEventMetadata
    }), !0
}

function Ke(e, {
    confirmError: t,
    isExpressCheckout: n,
    selectedPaymentMethodType: i
}) {
    r.logStructuredEvent(`ChatgptCheckoutPaymentInFormFailure`, {
        checkoutPlanType: e.planType ?? void 0,
        checkoutId: e.checkoutSessionId,
        processorEntity: e.processorEntity,
        failureReason: `confirm_error`,
        isExpressCheckout: n,
        ...i == null ? {} : {
            selectedPaymentMethodType: i
        },
        ...v(e.checkoutSessionId, t),
        ...e.checkoutStructuredEventMetadata
    })
}

function qe(e, {
    failureReason: n,
    originalErrorMessage: i,
    confirmError: a,
    unexpectedError: o,
    isExpressCheckout: s,
    selectedPaymentMethodType: c
}, {
    shouldLogMetric: l = !0
} = {}) {
    let d = `chatgpt_checkout_subscribe_click_error_failure`,
        f = r.logStructuredEvent(`ChatgptCheckoutSubmissionError`, {
            legacyStatsigEventName: d,
            failureReason: M[n],
            confirmErrorFamily: ne(n, a),
            checkoutPlanType: e.planType ?? void 0,
            checkoutId: e.checkoutSessionId,
            requiresManualApproval: e.requiresManualApproval,
            isExpressCheckout: s,
            selectedPaymentMethodType: c,
            ...v(e.checkoutSessionId, a),
            ...e.checkoutStructuredEventMetadata
        });
    if (r.logValueEventWithStatsig({
            segmentEventName: `ChatGPT Checkout: Subscribe Click Error Failure`,
            statsigEventName: d,
            data: {
                plan_type: e.planType,
                checkout_id: e.checkoutSessionId,
                checkout_provider: g(e.checkoutSessionId) ? `open_ai` : `stripe`,
                requires_manual_approval: e.requiresManualApproval,
                failure_reason: n,
                ...i == null ? {} : {
                    original_error_message: i
                },
                ...Oe(a),
                ...o === void 0 ? {} : ke(o),
                is_express_checkout: s,
                ...c == null ? {} : {
                    selected_payment_method_type: c
                },
                ...e.checkoutOutcomeStatsigMetadata,
                ...e.checkoutModalProductEventMetadata
            },
            eventId: f
        }), !l) return;
    let p = n === `unexpected_error` && o !== void 0 ? u(o).error_name || J : void 0;
    m.count(t.PAYMENTS, K, {
        ...O(e),
        ...E(e.checkoutSessionId),
        failure_reason: n,
        is_express_checkout: String(s),
        ...p == null ? {} : {
            error_name: p
        },
        ...c == null ? {} : {
            selected_payment_method_type: c
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
    prefill: i
}) {
    r.logStructuredEvent(`ChatgptCheckoutPaymentMethodInfoCompleted`, {
        checkoutId: e.checkoutSessionId,
        paymentMethodType: t,
        ...n ? {
            paymentMethodId: n
        } : {},
        prefill: i,
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
    paymentMethodSource: i,
    isFirstChange: a,
    previousPaymentType: o,
    previousPaymentMethodSource: s
}) {
    let c = e.checkoutSessionId;
    c && n && (a || o !== n || s !== i) && (a && Ie(n), ve(t, {
        paymentMethodType: n,
        paymentMethodSource: i,
        selectionSource: a ? `initial_state` : `user_change`
    }), !a && o !== n && r.logEventWithStatsig(`ChatGPT Checkout: Payment Tab Clicked`, `chatgpt_checkout_payment_tab_clicked`, {
        checkout_id: c,
        payment_method_type: n,
        ...e.checkoutModalProductEventMetadata
    }))
}

function Qe(e, t) {
    r.logStructuredEvent(`ChatgptCheckoutBillingAddressInfoCompleted`, {
        checkoutId: e.checkoutSessionId,
        ...t,
        isExpressCheckout: !1,
        ...e.checkoutStructuredEventMetadata
    })
}

function $e(e, t, n) {
    r.logStructuredEvent(n === `selected` ? `ChatgptCheckoutPaymentMethodSelected` : `ChatgptCheckoutPaymentMethodSelectionCancelled`, {
        checkoutId: e.checkoutSessionId,
        paymentMethodType: t,
        isExpressCheckout: !0,
        checkoutPlanType: e.planType ?? void 0,
        processorEntity: e.processorEntity,
        ...e.checkoutStructuredEventMetadata
    })
}
var M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $, et = e((() => {
    Se(), ae(), s(), ce(), oe(), fe(), b(), de(), _e(), ge(), c(), l(), d(), o(), ee(), M = {
        confirm_error: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_CONFIRM_ERROR`,
        manual_approval_integration_error: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_MANUAL_APPROVAL_INTEGRATION_ERROR`,
        tax_info_update_failed: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_TAX_INFO_UPDATE_FAILED`,
        unexpected_error: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_UNEXPECTED_ERROR`
    }, N = `checkout.confirm_error`, P = `checkout.confirm_approval_failure`, F = `checkout.access_failure`, I = `checkout.billing_address_element_mounted`, L = `checkout.billing_address_element_rendered`, R = `checkout.express_checkout_element_mounted`, z = `checkout.express_payment_methods_rendered`, B = `checkout.express_payment_method_shown`, V = `checkout.express_payment_method_submitted`, H = `checkout.payment_method_initially_shown`, U = `checkout.payment_method_submitted`, W = `checkout.return_page_failure`, G = 1e3, K = `checkout.subscribe_click_error_failure`, q = `checkout.subscribe_click_incomplete_failure`, J = `unknown`, Y = `unknown`, X = `3412962132`, Z = `3792512848`, Q = `payment_method_instrumentation_type`, $ = `enabled`
}));
export {
    b as A, qe as C, Xe as D, Ge as E, Ee as O, k as S, Ue as T, Ze as _, Pe as a, Le as b, Qe as c, Ke as d, We as f, A as g, Ve as h, et as i, De as k, He as l, $e as m, Je as n, ze as o, Re as p, we as r, Be as s, Fe as t, j as u, Me as v, je as w, Ne as x, Ye as y
};
//# sourceMappingURL=a4eef3c0-lfzia2wali7m4fpl.js.map