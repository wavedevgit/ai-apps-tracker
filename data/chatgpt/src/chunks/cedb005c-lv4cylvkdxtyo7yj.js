import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Knt as t,
    Wnt as n,
    cot as r,
    not as i,
    oR as a,
    pR as o,
    srt as s,
    urt as c
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Zt as l,
    rn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ax as d,
    Bx as f,
    Lx as p,
    cx as m,
    dx as h,
    fx as g,
    lx as _,
    mx as v,
    px as y,
    sx as b,
    ux as x
} from "./8b34dbc2-lmwubajnld74ksfm.js";

function S(e) {
    return e instanceof i && e.status === 409 && e.detail?.error_type === `stale_state` ? `stale_state` : `mutation_failed`
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
    capacityResult: r,
    fulfillmentType: i,
    actionFailureType: a,
    availablePaidSeatCounts: o,
    additionalPaidSeatCounts: s,
    successfulTargetCount: l,
    failedTargetCount: u,
    paymentRequired: d,
    paymentAttemptNumber: f,
    paymentFailureReason: p,
    billingInterval: m
}) {
    n.logStructuredEvent(`ChatgptWebBusinessSeatFlowLifecycleStep`, {
        flowId: e.flowId,
        actionType: e.actionType,
        surface: e.surface,
        stepType: D[t],
        actorRole: e.actorRole,
        targetWorkspaceId: e.targetWorkspaceId,
        currentSeatType: e.currentSeatType,
        requestedSeatType: e.requestedSeatType,
        requestedDefaultSeatCount: e.requestedSeatCounts?.default == null ? void 0 : c(e.requestedSeatCounts.default),
        requestedProliteSeatCount: e.requestedSeatCounts?.prolite == null ? void 0 : c(e.requestedSeatCounts.prolite),
        requestedUsageBasedSeatCount: e.requestedSeatCounts?.usage_based == null ? void 0 : c(e.requestedSeatCounts.usage_based),
        availableDefaultSeatCount: o?.default == null ? void 0 : c(o.default),
        availableProliteSeatCount: o?.prolite == null ? void 0 : c(o.prolite),
        additionalDefaultSeatCount: s?.default == null ? void 0 : c(s.default),
        additionalProliteSeatCount: s?.prolite == null ? void 0 : c(s.prolite),
        capacityResult: r == null ? void 0 : k[r],
        fulfillmentType: i == null ? void 0 : A[i],
        paymentFailureType: p == null ? void 0 : F[p],
        affectedTargetCount: e.affectedTargetCount == null ? void 0 : c(e.affectedTargetCount),
        successfulTargetCount: l == null ? void 0 : c(l),
        failedTargetCount: u == null ? void 0 : c(u),
        paymentRequired: d,
        paymentAttemptNumber: f == null ? void 0 : c(f),
        actionFailureType: a == null ? void 0 : j[a],
        billingInterval: m == null ? void 0 : P[m],
        targetScope: e.targetScope
    })
}
var T, E, D, O, k, A, j, M, N, P, F, I = e((() => {
    t(), r(), s(), o(), f(), l(), T = {
        send_invitations: m.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_TYPE_SEND_INVITATIONS,
        change_pending_invitation_seat_type: m.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_TYPE_CHANGE_PENDING_INVITATION_SEAT_TYPE,
        change_invitation_request_seat_type: m.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_TYPE_CHANGE_INVITATION_REQUEST_SEAT_TYPE,
        approve_invitation_request: m.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_TYPE_APPROVE_INVITATION_REQUEST,
        approve_all_invitation_requests: m.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_TYPE_APPROVE_ALL_INVITATION_REQUESTS,
        change_member_seat_type: m.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_TYPE_CHANGE_MEMBER_SEAT_TYPE,
        request_full_workspace_approval: m.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_TYPE_REQUEST_FULL_WORKSPACE_APPROVAL
    }, E = {
        admin_invite_modal: y.CHATGPT_WEB_BUSINESS_SEAT_FLOW_SURFACE_ADMIN_INVITE_MODAL,
        pending_invitations: y.CHATGPT_WEB_BUSINESS_SEAT_FLOW_SURFACE_PENDING_INVITATIONS,
        pending_requests: y.CHATGPT_WEB_BUSINESS_SEAT_FLOW_SURFACE_PENDING_REQUESTS,
        members: y.CHATGPT_WEB_BUSINESS_SEAT_FLOW_SURFACE_MEMBERS,
        full_workspace_invite: y.CHATGPT_WEB_BUSINESS_SEAT_FLOW_SURFACE_FULL_WORKSPACE_INVITE
    }, D = {
        action_initiated: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_ACTION_INITIATED,
        capacity_evaluated: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_CAPACITY_EVALUATED,
        workspace_full_shown: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_WORKSPACE_FULL_SHOWN,
        checkout_shown: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_CHECKOUT_SHOWN,
        purchase_submitted: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_PURCHASE_SUBMITTED,
        purchase_succeeded: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_PURCHASE_SUCCEEDED,
        purchase_failed: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_PURCHASE_FAILED,
        purchase_pending: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_PURCHASE_PENDING,
        purchase_canceled: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_PURCHASE_CANCELED,
        capacity_change_submitted: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_CAPACITY_CHANGE_SUBMITTED,
        capacity_change_succeeded: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_CAPACITY_CHANGE_SUCCEEDED,
        capacity_change_failed: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_CAPACITY_CHANGE_FAILED,
        capacity_change_canceled: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_CAPACITY_CHANGE_CANCELED,
        action_succeeded: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_ACTION_SUCCEEDED,
        action_failed: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_ACTION_FAILED,
        action_canceled: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_ACTION_CANCELED,
        action_attempt_failed: g.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_ACTION_ATTEMPT_FAILED
    }, O = {
        workspace_owner: _.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTOR_ROLE_WORKSPACE_OWNER,
        workspace_admin: _.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTOR_ROLE_WORKSPACE_ADMIN,
        invited_user: _.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTOR_ROLE_INVITED_USER,
        non_member: _.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTOR_ROLE_NON_MEMBER
    }, k = {
        seat_available: x.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_SEAT_AVAILABLE,
        purchase_required: x.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_PURCHASE_REQUIRED,
        capacity_change_required: x.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_CAPACITY_CHANGE_REQUIRED,
        swap_available: x.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_SWAP_AVAILABLE,
        change_scheduled: x.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_CHANGE_SCHEDULED,
        workspace_full: x.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_WORKSPACE_FULL,
        not_required: x.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_NOT_REQUIRED,
        not_evaluated: x.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_NOT_EVALUATED,
        purchase_unavailable: x.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_PURCHASE_UNAVAILABLE,
        capacity_change_unavailable: x.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_CAPACITY_CHANGE_UNAVAILABLE
    }, A = {
        direct_join: h.CHATGPT_WEB_BUSINESS_SEAT_FLOW_FULFILLMENT_TYPE_DIRECT_JOIN,
        approval_request: h.CHATGPT_WEB_BUSINESS_SEAT_FLOW_FULFILLMENT_TYPE_APPROVAL_REQUEST
    }, j = {
        mutation_failed: b.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_FAILURE_TYPE_MUTATION_FAILED,
        checkout_preparation_failed: b.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_FAILURE_TYPE_CHECKOUT_PREPARATION_FAILED,
        seat_limit_exceeded: b.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_FAILURE_TYPE_SEAT_LIMIT_EXCEEDED,
        stale_state: b.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_FAILURE_TYPE_STALE_STATE,
        target_unavailable: b.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_FAILURE_TYPE_TARGET_UNAVAILABLE,
        permission_denied: b.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_FAILURE_TYPE_PERMISSION_DENIED,
        unknown: b.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_FAILURE_TYPE_UNKNOWN
    }, M = {
        individual: v.CHATGPT_WEB_BUSINESS_SEAT_FLOW_TARGET_SCOPE_INDIVIDUAL,
        bulk: v.CHATGPT_WEB_BUSINESS_SEAT_FLOW_TARGET_SCOPE_BULK
    }, N = {
        default: a.CHATGPT_WORKSPACE_SEAT_TYPE_DEFAULT,
        prolite: a.CHATGPT_WORKSPACE_SEAT_TYPE_PROLITE,
        usage_based: a.CHATGPT_WORKSPACE_SEAT_TYPE_USAGE_BASED
    }, P = {
        monthly: p.CHATGPT_WEB_SUBSCRIPTION_BILLING_INTERVAL_MONTH,
        yearly: p.CHATGPT_WEB_SUBSCRIPTION_BILLING_INTERVAL_YEAR
    }, F = {
        insufficient_funds: d.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_INSUFFICIENT_FUNDS,
        expired_card: d.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_EXPIRED_CARD,
        incorrect_number: d.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_INCORRECT_CARD_NUMBER,
        incorrect_cvc: d.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_INCORRECT_CARD_SECURITY_CODE,
        invalid_cvc: d.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_INVALID_CARD_SECURITY_CODE,
        missing_payment_method: d.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_MISSING_PAYMENT_METHOD,
        authentication_failed: d.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_AUTHENTICATION_FAILED,
        payment_method_unavailable: d.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_PAYMENT_METHOD_UNAVAILABLE,
        payment_method_declined: d.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_PAYMENT_METHOD_DECLINED,
        other: d.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_OTHER,
        request_failed: d.CHATGPT_WEB_PAYMENT_METHOD_FAILURE_TYPE_REQUEST_FAILED
    }
}));
export {
    w as i, S as n, I as r, C as t
};
//# sourceMappingURL=cedb005c-lv4cylvkdxtyo7yj.js.map