import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    bg as t,
    mg as n,
    pg as r,
    vg as i,
    yg as a
} from "./c2675c8c-h5ybkhdzcoblzzdu.js";

function o({
    requiresManualApproval: e,
    checkoutSessionId: t,
    processorEntity: n,
    planType: r,
    isCheckoutModalEnabled: i = !1
}) {
    return {
        started_at_ms: Date.now(),
        requires_manual_approval: e,
        checkout_session_id: t,
        processor_entity: n,
        plan_type: r,
        is_checkout_modal_enabled: i
    }
}

function s(e, t, n = Date.now()) {
    let r = l.safeParse(e);
    if (!r.success) return {
        status: `discard`
    };
    let i = r.data,
        a = i.started_at_ms;
    return a == null || !Number.isFinite(a) || n - a > 1800 * 1e3 ? {
        status: `discard`
    } : t && i.checkout_session_id != null && t !== i.checkout_session_id ? {
        status: `other_checkout`
    } : {
        status: `ready`,
        pending: i,
        durationMs: Math.max(0, Math.round(n - a))
    }
}

function c(e) {
    return e === `success` || e === `pending`
}
var l, u = e((() => {
    r(), l = a({
        started_at_ms: i().optional(),
        requires_manual_approval: n().optional(),
        checkout_session_id: t().optional(),
        processor_entity: t().optional(),
        plan_type: t().nullable().optional(),
        is_checkout_modal_enabled: n().optional()
    })
}));
export {
    o as i, u as n, c as r, s as t
};
//# sourceMappingURL=4cc06ac6-d70v1j7ndpvuruq7.js.map