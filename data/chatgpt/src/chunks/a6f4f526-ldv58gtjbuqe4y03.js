import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    grt as t,
    hrt as n
} from "./4813494d-d7xm9wsvhdfbag9a.js";

function r(e) {
    return typeof e != `object` || !e || !(`businessAccountId` in e) || !(`checkoutSessionId` in e) || !(`createdAtMs` in e) ? !1 : typeof e.businessAccountId == `string` && e.businessAccountId.length > 0 && typeof e.checkoutSessionId == `string` && e.checkoutSessionId.length > 0 && typeof e.createdAtMs == `number` && Number.isFinite(e.createdAtMs)
}

function i(e, t) {
    try {
        let n = t();
        return n == null ? !1 : (n.setItem(d, JSON.stringify(e)), !0)
    } catch {
        return !1
    }
}

function a(e) {
    try {
        e()?.removeItem(d)
    } catch {}
}

function o(e) {
    let t;
    try {
        t = e()?.getItem(d) ?? null
    } catch {
        return null
    }
    if (t == null) return null;
    let n;
    try {
        n = JSON.parse(t)
    } catch {
        return a(e), null
    }
    if (!r(n)) return a(e), null;
    let i = Date.now() - n.createdAtMs;
    return i < 0 || i >= f ? (a(e), null) : n
}

function s({
    checkoutPlanType: e,
    checkoutSessionId: t
}, n) {
    if (e !== `plus`) return null;
    let r = o(n);
    return r?.checkoutSessionId === t ? r : null
}

function c() {
    let e = new URLSearchParams({
        [l]: `1`
    });
    return `${u}?${e.toString()}`
}
var l, u, d, f, p = e((() => {
    l = `resume_business_cancellation`, u = `/admin/billing`, d = `oai/apps/businessCancelToPlusHandoff.v1`, f = 1440 * 60 * 1e3
}));

function m() {
    return window.sessionStorage
}

function h(e) {
    return n(x, {
        disableExposureLog: e
    }).get(S, !1)
}

function g(e) {
    return i(e, m)
}

function _() {
    a(m)
}

function v() {
    return o(m)
}

function y(e) {
    if (e?.isSelfServeBusiness() !== !0) return null;
    let t = v();
    return t?.businessAccountId === e.id ? t : null
}

function b(e) {
    return s(e, m)
}
var x, S, C = e((() => {
    p(), t(), x = `415700387`, S = `show_plus_offer`
}));
export {
    C as a, c, h as i, p as l, b as n, g as o, y as r, l as s, _ as t
};
//# sourceMappingURL=a6f4f526-ldv58gtjbuqe4y03.js.map