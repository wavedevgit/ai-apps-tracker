import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Btt as t,
    Dit as n,
    Htt as r,
    Lnt as i,
    Lot as a,
    Mnt as o,
    Nnt as s,
    O4 as c,
    Pnt as l,
    Rnt as u,
    Vnt as d,
    bnt as f,
    gnt as p,
    iat as ee,
    kit as te,
    tat as m,
    vnt as ne,
    wst as re,
    ynt as ie
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $cn as ae,
    $in as oe,
    Jcn as se,
    Qcn as h,
    Rin as ce,
    Xcn as g,
    Ycn as le,
    Zcn as ue,
    aln as _,
    eGn as de,
    eln as v,
    isn as fe,
    mln as pe,
    pln as me,
    rsn as y,
    tln as he
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Sg as ge,
    dg as _e,
    fg as ve,
    gg as ye,
    lg as be,
    rg as xe,
    xg as Se
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";

function Ce(e, t) {
    if (t !== `IntegrationError`) return `not_applicable`;
    let n = e ?? ``;
    return n.startsWith(`Could not find a mounted element to create the Confirmation Token from,`) ? `missing_mounted_element` : n.startsWith(`You specified "never" for fields.billing_details.address`) && n.includes(`but did not pass params.payment_method_data.billing_details.address.country when calling stripe.createConfirmationToken()`) ? `required_country` : n.startsWith(`Unexpected call to paymentFailed().`) && n.includes(`calling paymentFailed() once per expressCheckout Element confirm event`) ? `invalid_wallet_settlement` : n.startsWith(`A complete billing address is required to confirm this Checkout Session.`) ? `required_billing_address` : n.startsWith(`Invalid confirm() call.`) && n.includes(`expressCheckoutConfirmEvent: event`) ? `missing_express_confirm_event` : n.startsWith(`elements.submit() must be called before stripe.createConfirmationToken().`) ? `elements_submit_required` : `other`
}
var we = e((() => {}));

function Te(e) {
    return {
        is_apple_pay_shown: String(e?.applePay === !0),
        is_express_checkout_shown: String(Se(e)),
        is_google_pay_shown: String(e?.googlePay === !0)
    }
}
var b = e((() => {
    ge(), oe()
}));

function Ee(e) {
    return e == null || !Number.isFinite(e) ? null : e === 2 ? 1 : e >= 3 && e <= 5 ? 5 : e >= 6 && e <= 10 ? 10 : e >= 11 ? 20 : null
}

function De(e) {
    switch (e) {
        case a.GO:
            return 1;
        case a.PLUS:
            return 2.5;
        case a.PROLITE:
            return 12.5;
        case a.PRO:
            return 13.5;
        case a.PROMAX:
            return 28;
        default:
            return null
    }
}

function Oe(e) {
    return e == null ? [] : Object.entries(e).filter(([, e]) => !!e).map(([e]) => e).sort()
}

function x(e) {
    let t = ne(X).get($, !1);
    return he({
        enabled: t,
        buckets: t ? p(Z).get(Q, {}) : void 0,
        method: e
    })
}

function ke(e) {
    return x(e) === `payment_element_complete`
}

function Ae(e) {
    return x(e) === `submit`
}

function je(e) {
    if (e == null) return {};
    let t = h(e);
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

function Me(e) {
    let t = m(e),
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

function Ne(e) {
    if (e.resultType === `error`) {
        let t = h(e.confirmError);
        return {
            result_type: e.resultType,
            sdk_error_family: `not_applicable`,
            error_category: `confirm_error`,
            error_name: `ConfirmError`,
            error_type: C(e.confirmError, `type`) ?? Y,
            error_code: be(e.confirmError),
            error_status: Y,
            decline_code: t ?? Y
        }
    }
    let t = m(e.error);
    return {
        result_type: e.resultType,
        sdk_error_family: Ce(c(e.error), t.error_name),
        error_category: t.error_category,
        error_name: t.error_name ?? Y,
        error_type: C(e.error, `type`) ?? S(t) ?? Y,
        error_code: t.error_code ?? C(e.error, `code`) ?? Y,
        error_status: t.error_status == null ? Y : String(t.error_status),
        decline_code: C(e.error, `decline_code`) ?? Y
    }
}

function T(e) {
    return le(e, `stable`, i() ?? `unknown`)
}

function E(e) {
    return {
        checkout_provider: e == null ? J : _(e) ? `open_ai` : `stripe`,
        reported_web_track: `stable`
    }
}

function D(e) {
    return {
        plan_type: String(e.planType ?? `unknown`),
        processor_entity: e.processorEntity,
        checkout_kind: g(e.checkoutStructuredEventMetadata.checkoutKind),
        promotion_campaign: e.checkoutOutcomeStatsigMetadata.promo_campaign_id ?? `none`,
        requires_manual_approval: String(e.requiresManualApproval),
        source: y(),
        ...e.checkoutModalStatsigMetadata,
        reported_web_track: `stable`
    }
}

function O(e) {
    return {
        ...D(e),
        entry_point: se(e.checkoutStructuredEventMetadata.entryPoint)
    }
}

function Pe(e, {
    hasBillingAddressErrors: t,
    hasEmailErrors: n,
    hasInvalidConfirmError: r,
    hasPaymentElementErrors: i,
    hasTaxInfoErrors: a,
    isExpressCheckout: o,
    submitErrorSource: c
}) {
    s.count(l.PAYMENTS, q, {
        ...O(e),
        ...me(e.experiments),
        checkout_presentation: e.isCheckoutModalPresentation ? `modal` : `full_page`,
        ...E(e.checkoutSessionId),
        failure_reason: `field_validation_failed`,
        submit_error_source: c,
        has_billing_address_errors: String(t),
        has_email_errors: String(n),
        has_invalid_confirm_error: String(r),
        has_payment_element_errors: String(i),
        has_tax_info_errors: String(a),
        is_express_checkout: String(o)
    })
}

function k(e, t) {
    s.count(l.PAYMENTS, W, {
        ...T(t),
        failure_reason: t.failureReason,
        return_page: e
    })
}

function A(e, n, r) {
    t.logStructuredEvent(`ChatgptCheckoutPaymentFailurePage`, n), e != null && k(e, {
        checkoutSessionId: n.checkoutId,
        checkoutPlanType: n.checkoutPlanType,
        processorEntity: n.processorEntity,
        isCheckoutModalEnabled: n.isCheckoutModalEnabled,
        checkoutKind: n.checkoutKind,
        entryPoint: n.entryPoint,
        failureReason: n.outcome,
        sourceSearchParams: r
    })
}

function Fe(e) {
    try {
        t.logStructuredEvent(`ChatgptCheckoutPaymentSuccessPage`, e)
    } catch {}
}

function Ie(e) {
    s.count(l.PAYMENTS, F, {
        ...T(e),
        access_stage: e.accessStage,
        failure_reason: e.failureReason
    })
}
async function Le() {
    await Promise.allSettled([t.flushStructuredEvents(G), Promise.race([s.flush(), new Promise(e => setTimeout(e, G))])])
}

function Re(e) {
    s.count(l.PAYMENTS, H, {
        payment_method_type: e,
        source: y(),
        reported_web_track: `stable`
    })
}

function ze(e, t) {
    s.count(l.PAYMENTS, U, {
        ...D(e),
        payment_method_type: t
    })
}

function Be(e) {
    s.count(l.PAYMENTS, R, D(e))
}

function Ve(e) {
    s.count(l.PAYMENTS, I, D(e))
}

function He(e) {
    s.count(l.PAYMENTS, L, D(e))
}

function Ue(e, t) {
    let n = Oe(t),
        r = n.length > 0 ? n : [`none`],
        i = D(e);
    f(`checkout_express_wallet_availability`, void 0, {
        ...i,
        ...Te(t)
    });
    let a = {
        ...i,
        express_payment_method_count: String(n.length)
    };
    f(`chatgpt_checkout_express_payment_methods_rendered`, n.length, a), s.count(l.PAYMENTS, z, a), r.forEach(e => {
        let t = {
            ...i,
            express_payment_method: e
        };
        f(`chatgpt_checkout_express_payment_method_shown`, void 0, t), s.count(l.PAYMENTS, B, t)
    })
}

function We(e, t) {
    s.count(l.PAYMENTS, V, {
        ...D(e),
        express_payment_method: t.replace(/_pay$/, `Pay`)
    })
}

function j(e, t) {
    let n = t.resultType === `error` ? t.confirmError.source ?? Y : t.source;
    s.count(l.PAYMENTS, N, {
        ...O(e),
        billing_country: w(e.billingCountry),
        billing_currency: w(e.billingCurrency),
        stage: t.stage,
        failure_reason: t.failureReason,
        ...E(e.checkoutSessionId),
        is_express_checkout: String(t.isExpressCheckout),
        selected_payment_method_type: t.selectedPaymentMethodType ?? Y,
        error_source: n,
        ...Ne(t)
    })
}

function Ge(e, {
    approvalResult: t,
    isExpressCheckout: n,
    selectedPaymentMethodType: r,
    stage: i
}) {
    s.count(l.PAYMENTS, P, {
        ...D(e),
        approval_result: t,
        billing_country: w(e.billingCountry),
        billing_currency: w(e.billingCurrency),
        stage: i,
        checkout_provider: _(e.checkoutSessionId) ? `open_ai` : `stripe`,
        is_express_checkout: String(n),
        selected_payment_method_type: r ?? Y,
        reported_web_track: `stable`
    })
}

function Ke(e, {
    error: n,
    failureReason: r,
    selectedPaymentMethodType: i
}) {
    j(e, {
        stage: r === `confirm_handler_error` ? `express_confirm_handler` : `confirm_invalid`,
        failureReason: r,
        isExpressCheckout: !0,
        selectedPaymentMethodType: i,
        resultType: `exception`,
        error: n,
        source: r === `confirm_handler_error` ? `express_checkout_handler` : `tax_info_update`
    }), t.logEventWithStatsig(`ChatGPT Checkout: Express Checkout Confirm Error Failure`, `chatgpt_checkout_express_checkout_confirm_error_failure`, {
        plan_type: e.planType,
        checkout_id: e.checkoutSessionId,
        requires_manual_approval: e.requiresManualApproval,
        failure_reason: r,
        original_error_message: c(n),
        processor_entity: e.processorEntity,
        is_express_checkout: !0,
        ...e.checkoutModalProductEventMetadata
    })
}

function qe(e, {
    stage: t,
    hasOnRequiresApproval: n,
    canConfirm: r
}) {
    f(`chatgpt_checkout_confirm_invoke`, void 0, {
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

function Je(e, {
    error: r,
    stage: i,
    isExpressCheckout: a = !1,
    selectedPaymentMethodType: o,
    shouldLogConfirmErrorMetric: s = !0
}) {
    let l = c(r);
    if (typeof l != `string` || !l.includes(`onRequiresApproval`) && !l.includes(`approval_method`)) return !1;
    let u = {
        stage: i,
        requires_manual_approval: e.requiresManualApproval,
        checkout_session_id: e.checkoutId,
        processor_entity: e.processorEntity,
        can_confirm: e.checkoutCanConfirm,
        original_error_message: l
    };
    return s && j(e, {
        stage: i,
        failureReason: `manual_approval_integration_error`,
        isExpressCheckout: a,
        selectedPaymentMethodType: o,
        resultType: `exception`,
        error: r,
        source: `manual_approval_integration`
    }), ve(`checkout.confirm.integration_error`, u), n.addError(Error(`[checkout] Manual approval integration error`), u), t.logStructuredEvent(`ChatgptCheckoutPaymentInFormFailure`, {
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

function Ye(e, {
    confirmError: n,
    isExpressCheckout: r,
    selectedPaymentMethodType: i
}) {
    t.logStructuredEvent(`ChatgptCheckoutPaymentInFormFailure`, {
        checkoutPlanType: e.planType ?? void 0,
        checkoutId: e.checkoutSessionId,
        processorEntity: e.processorEntity,
        failureReason: `confirm_error`,
        isExpressCheckout: r,
        ...i == null ? {} : {
            selectedPaymentMethodType: i
        },
        ...v(e.checkoutSessionId, n),
        ...e.checkoutStructuredEventMetadata
    })
}

function Xe(e, {
    failureReason: n,
    originalErrorMessage: r,
    confirmError: i,
    unexpectedError: a,
    isExpressCheckout: o,
    selectedPaymentMethodType: c
}, {
    shouldLogMetric: u = !0
} = {}) {
    let d = `chatgpt_checkout_subscribe_click_error_failure`,
        f = t.logStructuredEvent(`ChatgptCheckoutSubmissionError`, {
            legacyStatsigEventName: d,
            failureReason: M[n],
            confirmErrorFamily: ae(n, i),
            checkoutPlanType: e.planType ?? void 0,
            checkoutId: e.checkoutSessionId,
            requiresManualApproval: e.requiresManualApproval,
            isExpressCheckout: o,
            selectedPaymentMethodType: c,
            ...v(e.checkoutSessionId, i),
            ...e.checkoutStructuredEventMetadata
        });
    if (t.logValueEventWithStatsig({
            segmentEventName: `ChatGPT Checkout: Subscribe Click Error Failure`,
            statsigEventName: d,
            data: {
                plan_type: e.planType,
                checkout_id: e.checkoutSessionId,
                checkout_provider: _(e.checkoutSessionId) ? `open_ai` : `stripe`,
                requires_manual_approval: e.requiresManualApproval,
                failure_reason: n,
                ...r == null ? {} : {
                    original_error_message: r
                },
                ...je(i),
                ...a === void 0 ? {} : Me(a),
                is_express_checkout: o,
                ...c == null ? {} : {
                    selected_payment_method_type: c
                },
                ...e.checkoutOutcomeStatsigMetadata,
                ...e.checkoutModalProductEventMetadata
            },
            eventId: f
        }), !u) return;
    let p = n === `unexpected_error` && a !== void 0 ? m(a).error_name || J : void 0;
    s.count(l.PAYMENTS, K, {
        ...O(e),
        ...E(e.checkoutSessionId),
        failure_reason: n,
        is_express_checkout: String(o),
        ...p == null ? {} : {
            error_name: p
        },
        ...c == null ? {} : {
            selected_payment_method_type: c
        }
    })
}

function Ze({
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
        ...d(n ?? `standard`, e)
    }
}

function Qe(e, {
    paymentMethodType: n,
    paymentMethodId: r,
    prefill: i
}) {
    t.logStructuredEvent(`ChatgptCheckoutPaymentMethodInfoCompleted`, {
        checkoutId: e.checkoutSessionId,
        paymentMethodType: n,
        ...r ? {
            paymentMethodId: r
        } : {},
        prefill: i,
        isExpressCheckout: !1,
        ...e.checkoutStructuredEventMetadata
    })
}

function $e(e, t) {
    let n = {
        checkout_id: e.checkoutSessionId,
        plan_type: String(e.planType ?? `unknown`)
    };
    t.eventName === `chatgpt_checkout_personal_multi_step_step_shown` ? n.step = t.step : t.eventName !== `chatgpt_checkout_personal_multi_step_submit_clicked` && (n.from_step = t.fromStep, n.source = t.source, n.to_step = t.toStep), f(t.eventName, void 0, n)
}

function et(e, n, {
    type: r,
    paymentMethodSource: i,
    isFirstChange: a,
    previousPaymentType: o,
    previousPaymentMethodSource: s
}) {
    let c = e.checkoutSessionId;
    c && r && (a || o !== r || s !== i) && (a && Re(r), ye(n, {
        paymentMethodType: r,
        paymentMethodSource: i,
        selectionSource: a ? `initial_state` : `user_change`
    }), !a && o !== r && t.logEventWithStatsig(`ChatGPT Checkout: Payment Tab Clicked`, `chatgpt_checkout_payment_tab_clicked`, {
        checkout_id: c,
        payment_method_type: r,
        ...e.checkoutModalProductEventMetadata
    }))
}

function tt(e, n) {
    t.logStructuredEvent(`ChatgptCheckoutBillingAddressInfoCompleted`, {
        checkoutId: e.checkoutSessionId,
        ...n,
        isExpressCheckout: !1,
        ...e.checkoutStructuredEventMetadata
    })
}

function nt(e, n, r) {
    t.logStructuredEvent(r === `selected` ? `ChatgptCheckoutPaymentMethodSelected` : `ChatgptCheckoutPaymentMethodSelectionCancelled`, {
        checkoutId: e.checkoutSessionId,
        paymentMethodType: n,
        isExpressCheckout: !0,
        checkoutPlanType: e.planType ?? void 0,
        processorEntity: e.processorEntity,
        ...e.checkoutStructuredEventMetadata
    })
}
var M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $, rt = e((() => {
    we(), pe(), u(), ue(), de(), re(), ce(), b(), fe(), _e(), xe(), r(), te(), ee(), o(), ie(), M = {
        confirm_error: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_CONFIRM_ERROR`,
        manual_approval_integration_error: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_MANUAL_APPROVAL_INTEGRATION_ERROR`,
        tax_info_update_failed: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_TAX_INFO_UPDATE_FAILED`,
        unexpected_error: `CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_UNEXPECTED_ERROR`
    }, N = `checkout.confirm_error`, P = `checkout.confirm_approval_failure`, F = `checkout.access_failure`, I = `checkout.billing_address_element_mounted`, L = `checkout.billing_address_element_rendered`, R = `checkout.express_checkout_element_mounted`, z = `checkout.express_payment_methods_rendered`, B = `checkout.express_payment_method_shown`, V = `checkout.express_payment_method_submitted`, H = `checkout.payment_method_initially_shown`, U = `checkout.payment_method_submitted`, W = `checkout.return_page_failure`, G = 1e3, K = `checkout.subscribe_click_error_failure`, q = `checkout.subscribe_click_incomplete_failure`, J = `unknown`, Y = `unknown`, X = `3412962132`, Z = `3792512848`, Q = `payment_method_instrumentation_type`, $ = `enabled`
}));
export {
    Ae as A, k as C, Je as D, Ke as E, $e as O, Fe as S, Pe as T, Ue as _, rt as a, Qe as b, He as c, j as d, Ye as f, We as g, nt as h, Ee as i, b as j, ke as k, tt as l, Be as m, Ze as n, Ie as o, qe as p, De as r, Ve as s, Le as t, Ge as u, et as v, Xe as w, ze as x, A as y
};
//# sourceMappingURL=a4eef3c0-ip3ucad1hu328lch.js.map