import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Gg as t,
    Rg as n,
    Ug as r,
    Wg as i,
    zg as a
} from "./c2675c8c-fpv9s4kvd412dyap.js";

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
    n(), l = i({
        started_at_ms: r().optional(),
        requires_manual_approval: a().optional(),
        checkout_session_id: t().optional(),
        processor_entity: t().optional(),
        plan_type: t().nullable().optional(),
        is_checkout_modal_enabled: a().optional()
    })
}));
export {
    o as i, u as n, c as r, s as t
};
//# sourceMappingURL=4cc06ac6-grsbu8uplirzn9vn.js.map