import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Int as t,
    Kat as n,
    Pnt as r,
    Qat as i,
    Znt as a,
    ert as o,
    oR as s,
    pR as c
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Zt as l,
    rn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ix as d,
    cx as f,
    dx as p,
    fx as m,
    kx as h,
    lx as g,
    ox as _,
    px as v,
    sx as y,
    ux as b,
    zx as x
} from "./8b34dbc2-m4883pai3e8fx8q6.js";

function S(e) {
    return e instanceof n && e.status === 409 && e.detail?.error_type === `stale_state` ? `stale_state` : `mutation_failed`
}

function C({
    action: e,
    surface: t,
    actorRole: n,
    targetWorkspaceId: r,
    currentSeatType: i,
    requestedSeatType: a,
    requestedSeatCounts: o,
    affectedTargetCount: s,
    targetScope: c
}) {
    return {
        flowId: u(),
        actionType: T[e],
        surface: E[t],
        actorRole: n == null ? void 0 : O[n],
        targetWorkspaceId: r,
        currentSeatType: i == null ? void 0 : N[i],
        requestedSeatType: a == null ? void 0 : N[a],
        requestedSeatCounts: o == null ? void 0 : {
            ...o
        },
        affectedTargetCount: s,
        targetScope: c == null ? void 0 : M[c]
    }
}

function w(e, {
    step: t,
    capacityResult: n,
    fulfillmentType: i,
    actionFailureType: a,
    availablePaidSeatCounts: s,
    additionalPaidSeatCounts: c,
    successfulTargetCount: l,
    failedTargetCount: u,
    paymentRequired: d,
    paymentAttemptNumber: f,
    paymentFailureReason: p,
    billingInterval: m
}) {
    r.logStructuredEvent(`ChatgptWebBusinessSeatFlowLifecycleStep`, {
        flowId: e.flowId,
        actionType: e.actionType,
        surface: e.surface,
        stepType: D[t],
        actorRole: e.actorRole,
        targetWorkspaceId: e.targetWorkspaceId,
        currentSeatType: e.currentSeatType,
        requestedSeatType: e.requestedSeatType,
        requestedDefaultSeatCount: e.requestedSeatCounts?.default == null ? void 0 : o(e.requestedSeatCounts.default),
        requestedProliteSeatCount: e.requestedSeatCounts?.prolite == null ? void 0 : o(e.requestedSeatCounts.prolite),
        requestedUsageBasedSeatCount: e.requestedSeatCounts?.usage_based == null ? void 0 : o(e.requestedSeatCounts.usage_based),
        availableDefaultSeatCount: s?.default == null ? void 0 : o(s.default),
        availableProliteSeatCount: s?.prolite == null ? void 0 : o(s.prolite),
        additionalDefaultSeatCount: c?.default == null ? void 0 : o(c.default),
        additionalProliteSeatCount: c?.prolite == null ? void 0 : o(c.prolite),
        capacityResult: n == null ? void 0 : k[n],
        fulfillmentType: i == null ? void 0 : A[i],
        paymentFailureType: p == null ? void 0 : F[p],
        affectedTargetCount: e.affectedTargetCount == null ? void 0 : o(e.affectedTargetCount),
        successfulTargetCount: l == null ? void 0 : o(l),
        failedTargetCount: u == null ? void 0 : o(u),
        paymentRequired: d,
        paymentAttemptNumber: f == null ? void 0 : o(f),
        actionFailureType: a == null ? void 0 : j[a],
        billingInterval: m == null ? void 0 : P[m],
        targetScope: e.targetScope
    })
}
var T, E, D, O, k, A, j, M, N, P, F, I = e((() => {
    t(), i(), a(), c(), x(), l(), T = {
        send_invitations: y.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_TYPE_SEND_INVITATIONS,
        change_pending_invitation_seat_type: y.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_TYPE_CHANGE_PENDING_INVITATION_SEAT_TYPE,
        change_invitation_request_seat_type: y.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_TYPE_CHANGE_INVITATION_REQUEST_SEAT_TYPE,
        approve_invitation_request: y.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_TYPE_APPROVE_INVITATION_REQUEST,
        approve_all_invitation_requests: y.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_TYPE_APPROVE_ALL_INVITATION_REQUESTS,
        change_member_seat_type: y.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_TYPE_CHANGE_MEMBER_SEAT_TYPE,
        request_full_workspace_approval: y.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_TYPE_REQUEST_FULL_WORKSPACE_APPROVAL
    }, E = {
        admin_invite_modal: m.CHATGPT_WEB_BUSINESS_SEAT_FLOW_SURFACE_ADMIN_INVITE_MODAL,
        pending_invitations: m.CHATGPT_WEB_BUSINESS_SEAT_FLOW_SURFACE_PENDING_INVITATIONS,
        pending_requests: m.CHATGPT_WEB_BUSINESS_SEAT_FLOW_SURFACE_PENDING_REQUESTS,
        members: m.CHATGPT_WEB_BUSINESS_SEAT_FLOW_SURFACE_MEMBERS,
        full_workspace_invite: m.CHATGPT_WEB_BUSINESS_SEAT_FLOW_SURFACE_FULL_WORKSPACE_INVITE
    }, D = {
        action_initiated: p.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_ACTION_INITIATED,
        capacity_evaluated: p.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_CAPACITY_EVALUATED,
        workspace_full_shown: p.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_WORKSPACE_FULL_SHOWN,
        checkout_shown: p.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_CHECKOUT_SHOWN,
        purchase_submitted: p.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_PURCHASE_SUBMITTED,
        purchase_succeeded: p.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_PURCHASE_SUCCEEDED,
        purchase_failed: p.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_PURCHASE_FAILED,
        purchase_pending: p.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_PURCHASE_PENDING,
        purchase_canceled: p.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_PURCHASE_CANCELED,
        capacity_change_submitted: p.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_CAPACITY_CHANGE_SUBMITTED,
        capacity_change_succeeded: p.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_CAPACITY_CHANGE_SUCCEEDED,
        capacity_change_failed: p.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_CAPACITY_CHANGE_FAILED,
        capacity_change_canceled: p.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_CAPACITY_CHANGE_CANCELED,
        action_succeeded: p.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_ACTION_SUCCEEDED,
        action_failed: p.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_ACTION_FAILED,
        action_canceled: p.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_ACTION_CANCELED,
        action_attempt_failed: p.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_ACTION_ATTEMPT_FAILED
    }, O = {
        workspace_owner: f.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTOR_ROLE_WORKSPACE_OWNER,
        workspace_admin: f.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTOR_ROLE_WORKSPACE_ADMIN,
        invited_user: f.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTOR_ROLE_INVITED_USER,
        non_member: f.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTOR_ROLE_NON_MEMBER
    }, k = {
        seat_available: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_SEAT_AVAILABLE,
        purchase_required: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_PURCHASE_REQUIRED,
        capacity_change_required: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_CAPACITY_CHANGE_REQUIRED,
        swap_available: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_SWAP_AVAILABLE,
        change_scheduled: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_CHANGE_SCHEDULED,
        workspace_full: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_WORKSPACE_FULL,
        not_required: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_NOT_REQUIRED,
        not_evaluated: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_NOT_EVALUATED,
        purchase_unavailable: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_PURCHASE_UNAVAILABLE,
        capacity_change_unavailable: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_CAPACITY_CHANGE_UNAVAILABLE
    }, A = {
        direct_join: b.CHATGPT_WEB_BUSINESS_SEAT_FLOW_FULFILLMENT_TYPE_DIRECT_JOIN,
        approval_request: b.CHATGPT_WEB_BUSINESS_SEAT_FLOW_FULFILLMENT_TYPE_APPROVAL_REQUEST
    }, j = {
        mutation_failed: _.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_FAILURE_TYPE_MUTATION_FAILED,
        checkout_preparation_failed: _.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_FAILURE_TYPE_CHECKOUT_PREPARATION_FAILED,
        seat_limit_exceeded: _.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_FAILURE_TYPE_SEAT_LIMIT_EXCEEDED,
        stale_state: _.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_FAILURE_TYPE_STALE_STATE,
        target_unavailable: _.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_FAILURE_TYPE_TARGET_UNAVAILABLE,
        permission_denied: _.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_FAILURE_TYPE_PERMISSION_DENIED,
        unknown: _.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_FAILURE_TYPE_UNKNOWN
    }, M = {
        individual: v.CHATGPT_WEB_BUSINESS_SEAT_FLOW_TARGET_SCOPE_INDIVIDUAL,
        bulk: v.CHATGPT_WEB_BUSINESS_SEAT_FLOW_TARGET_SCOPE_BULK
    }, N = {
        default: s.CHATGPT_WORKSPACE_SEAT_TYPE_DEFAULT,
        prolite: s.CHATGPT_WORKSPACE_SEAT_TYPE_PROLITE,
        usage_based: s.CHATGPT_WORKSPACE_SEAT_TYPE_USAGE_BASED
    }, P = {
        monthly: d.CHATGPT_WEB_SUBSCRIPTION_BILLING_INTERVAL_MONTH,
        yearly: d.CHATGPT_WEB_SUBSCRIPTION_BILLING_INTERVAL_YEAR
    }, F = {
        insufficient_funds: h.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_INSUFFICIENT_FUNDS,
        expired_card: h.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_EXPIRED_CARD,
        incorrect_number: h.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_INCORRECT_CARD_NUMBER,
        incorrect_cvc: h.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_INCORRECT_CARD_SECURITY_CODE,
        invalid_cvc: h.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_INVALID_CARD_SECURITY_CODE,
        missing_payment_method: h.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_MISSING_PAYMENT_METHOD,
        authentication_failed: h.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_AUTHENTICATION_FAILED,
        payment_method_unavailable: h.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_PAYMENT_METHOD_UNAVAILABLE,
        payment_method_declined: h.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_PAYMENT_METHOD_DECLINED,
        other: h.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_OTHER,
        request_failed: h.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_REQUEST_FAILED
    }
}));
export {
    w as i, S as n, I as r, C as t
};
//# sourceMappingURL=cedb005c-nmxozkzj1omwnokh.js.map