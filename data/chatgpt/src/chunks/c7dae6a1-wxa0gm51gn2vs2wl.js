import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b8 as t,
    cR as n,
    f5 as r,
    f8 as i,
    lR as a
} from "./4813494d-ed29bs6yiwucn7st.js";

function o(e) {
    try {
        let t = e.getStorage()?.getItem(d);
        if (t == null) return null;
        let n = JSON.parse(t);
        return typeof n.checkoutSessionId != `string` || n.quantity !== null && typeof n.quantity != `number` || n.task && ![n.task.accountId, n.task.conversationId, n.task.messageId, n.task.returnPath].every(e => typeof e == `string` && e.length > 0) || n.task && !e.isSafeReturnPath(n.task.returnPath) || n.returnPath != null && (typeof n.returnPath != `string` || !e.isSafeReturnPath(n.returnPath)) ? null : n
    } catch {
        return null
    }
}

function s(e, t) {
    let n = o(e);
    return n?.checkoutSessionId !== t || n.task == null ? null : (c(e, {
        ...n,
        confirmed: !0
    }), n.task)
}

function c(e, t) {
    e.onChange?.(t);
    try {
        e.getStorage()?.setItem(d, JSON.stringify(t))
    } catch {}
}

function l(e, t) {
    try {
        let n = e.getStorage()?.getItem(d);
        if (n == null) return null;
        let r = JSON.parse(n);
        if (r.checkoutSessionId !== t) return u(e), null;
        if (!r.task || !r.confirmed) u(e);
        else {
            let t = o(e);
            t && c(e, {
                ...t,
                toastConsumed: !0
            })
        }
        return r.toastConsumed ? null : typeof r.quantity == `number` && Number.isFinite(r.quantity) && r.quantity > 0 ? r.quantity : null
    } catch {
        return null
    }
}

function u(e) {
    e.onChange?.(null);
    try {
        e.getStorage()?.removeItem(d)
    } catch {}
}
var d, f = e((() => {
    d = `oai/apps/modalCreditCheckoutSuccessContext`
}));

function p(e) {
    return s(v, e)
}

function m(e) {
    c(v, e)
}

function h(e) {
    return l(v, e)
}

function g() {
    u(v)
}

function _() {
    try {
        return window.sessionStorage
    } catch {
        return null
    }
}
var v, y, b = e((() => {
    f(), n(), i(), v = {
        getStorage: _,
        isSafeReturnPath: a,
        onChange: e => {
            r(() => y.set(e))
        }
    }, y = t(() => o(v))
}));
export {
    y as a, b as i, p as n, m as o, h as r, g as t
};
//# sourceMappingURL=c7dae6a1-wxa0gm51gn2vs2wl.js.map