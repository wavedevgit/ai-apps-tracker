import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    ert as t,
    trt as n
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Cd as r,
    Sd as i
} from "./c2675c8c-h5ybkhdzcoblzzdu.js";

function a(e) {
    if (e?.coupon !== `team-1-month-free`) return null;
    let t = e.redemption;
    return !t?.redeemed || !t.redeemed_by_workspace ? null : t
}

function o(e) {
    let t = a(e),
        n = t?.workspace_redeemed_at ?? t?.redeemed_at;
    if (!n) return null;
    let r = new Date(n);
    return Number.isNaN(r.getTime()) ? null : r
}

function s(e) {
    let t = a(e);
    if (!t) return null;
    let n = t.expires_at;
    if (n) {
        let e = new Date(n);
        return Number.isNaN(e.getTime()) ? null : e
    }
    let r = o(e);
    if (!r) return null;
    let i = t.promotion_length_days ?? m,
        s = new Date(r.getTime() + i * 24 * 60 * 60 * 1e3);
    return Number.isNaN(s.getTime()) ? null : s
}

function c(e) {
    let t = s(e);
    return !t || Date.now() >= t.getTime() ? null : t
}

function l(e) {
    return c(e) !== null
}

function u(e) {
    let t = c(e);
    if (!t) return null;
    let n = t.getTime() - Date.now(),
        r = Math.ceil(n / (1440 * 60 * 1e3));
    return Math.max(r, 1)
}

function d({
    account: e,
    teamFreeTrialPromoEligibility: n,
    disableExposureLog: r = !1
}) {
    let i = e?.isSelfServeBusiness() === !0 && l(n),
        a = !1;
    i && (a = t(h, {
        disableExposureLog: r
    }).get(g, !1));
    let o = null;
    return a && (o = u(n)), {
        hasActiveBusinessFreeTrial: i,
        shouldShowImmediateTrialCancellationVariant: a,
        trialDaysRemaining: o
    }
}

function f(e, t) {
    let n = ``;
    e?.isSelfServeBusiness() === !0 && (n = p);
    let {
        data: i
    } = r(n);
    return d({
        account: e,
        teamFreeTrialPromoEligibility: i,
        disableExposureLog: t?.disableExposureLog ?? !1
    })
}
var p, m, h, g, _ = e((() => {
    i(), n(), p = `team-1-month-free`, m = 30, h = `1001885924`, g = `require_immediate_cancellation`
}));
export {
    f as a, _ as i, d as n, l as r, p as t
};
//# sourceMappingURL=730b64e6-e32e50mem3xr37br.js.map