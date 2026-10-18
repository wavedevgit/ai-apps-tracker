import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B1 as n,
    Btt as r,
    Dit as i,
    G2 as a,
    Htt as o,
    K2 as s,
    R1 as c,
    dz as l,
    ett as u,
    fz as d,
    int as f,
    kit as p,
    ont as m,
    rnt as h,
    ttt as g
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as _,
    Bn as v,
    Nn as y,
    Rn as b,
    Ut as x,
    Vn as ee,
    Wt as S,
    o as C,
    wn as w
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    CTn as T,
    ETn as E,
    Flt as te,
    Nlt as D,
    TTn as O,
    wTn as k
} from "./conversation-small-fym1zmu9zimymmm1.js";

function ne() {
    return !0
}

function A() {
    return !1
}

function j() {}

function M(e) {
    return e.preventDefault()
}
var N, P, F, re = e((() => {
    N = w(), te(), d(), a(), b(), P = v(), F = e => {
        "use forget";
        let t = (0, N.c)(13),
            {
                status: n
            } = e,
            r = s(ne, A),
            i;
        t[0] === n ? i = t[1] : (i = n === `loading` && (0, P.jsx)(l, {
            className: `text-token-text-primary size-6 self-center`
        }), t[0] = n, t[1] = i);
        let a = n === `loading` ? `text-token-text-secondary self-center` : void 0,
            o;
        t[2] === n ? o = t[3] : (o = n === `account_changed` ? (0, P.jsx)(y, {
            id: `auth.mobile_web_handoff.error.session_changed`,
            defaultMessage: `This browser account changed. Return to the app and try again.`
        }) : n === `unavailable` ? (0, P.jsx)(y, {
            id: `auth.mobile_web_handoff.error.unavailable`,
            defaultMessage: `This sign-in link is no longer available. Return to the app and try again.`
        }) : (0, P.jsx)(y, {
            id: `auth.mobile_web_handoff.loading.label`,
            defaultMessage: `Loading...`
        }), t[2] = n, t[3] = o);
        let c;
        t[4] !== a || t[5] !== o ? (c = (0, P.jsx)(`p`, {
            "aria-live": `polite`,
            className: a,
            children: o
        }), t[4] = a, t[5] = o, t[6] = c) : c = t[6];
        let u;
        t[7] !== i || t[8] !== c ? (u = (0, P.jsxs)(`main`, {
            className: `mx-auto flex min-h-full max-w-lg flex-col justify-center gap-3 px-6`,
            children: [i, c]
        }), t[7] = i, t[8] = c, t[9] = u) : u = t[9];
        let d = u;
        if (!r) return d;
        let f;
        t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, P.jsx)(y, {
            id: `auth.mobile_web_handoff.accessible_title`,
            defaultMessage: `Mobile sign-in`
        }), t[10] = f) : f = t[10];
        let p;
        return t[11] === d ? p = t[12] : (p = (0, P.jsx)(D, {
            open: !0,
            onOpenChange: j,
            onEscapeKeyDown: M,
            accessibleTitle: f,
            children: (0, P.jsx)(D.Contents, {
                children: d
            })
        }), t[11] = d, t[12] = p), p
    }
}));

function ie({
    stage: e,
    outcome: t,
    started: n,
    checkoutPath: i,
    statusCode: a,
    purpose: o,
    failedHttpStep: s
}) {
    try {
        let c = i?.match(/^\/checkout\/(openai_llc|openai_ie)\/(cs_(?:test|live)_[A-Za-z0-9]{8,248}|oaics_[0-9a-fA-F]{32})$/),
            l = n === void 0 ? void 0 : performance.now() - n;
        r.initializeStructuredEventsForEarlyNavigation(), r.logStructuredEvent(`IdentityCheckoutHandoffObservation`, {
            stage: e,
            outcome: t,
            purpose: o,
            failedHttpStep: s,
            checkoutSessionId: c?.[2],
            processorEntity: c?.[1],
            durationMs: l !== void 0 && Number.isFinite(l) && l >= 0 && l <= 4294967295 ? m(Math.round(l)) : void 0,
            statusCode: a !== void 0 && Number.isInteger(a) && a >= 100 && a <= 599 ? f(a) : void 0
        })
    } catch {}
}
var ae = e((() => {
        o(), h()
    })),
    I, L = e((() => {
        I = [`openai_llc`, `openai_ie`]
    }));

function R(e) {
    return typeof e == `string` && Object.hasOwn(U, e)
}

function z(e) {
    if (!R(e)) return null;
    let t = W[e];
    return t !== void 0 && B(e, t) ? t : null
}

function B(e, t) {
    if (!R(e) || typeof t != `string` || !t.startsWith(`/`) || t.startsWith(`//`) || t.includes(`\\`) || /[\p{Cc} ]/u.test(t)) return !1;
    try {
        let n = new URL(t, `https://chatgpt.invalid`);
        return n.origin !== `https://chatgpt.invalid` || t.includes(`#`) ? !1 : U[e](t, n)
    } catch {
        return !1
    }
}

function V(e, t) {
    let [, n] = t.pathname.match(/^\/checkout\/([^/]+)\/[A-Za-z0-9_-]+$/) ?? [];
    return t.pathname === e && I.some(e => e === n)
}

function H(e, t) {
    if (encodeURIComponent(e).length > K || e.split(`?`, 1)[0] !== `/students/2026` || t.pathname !== `/students/2026` || /\p{Cc}/u.test(decodeURIComponent(t.search))) return !1;
    let n = new Set;
    for (let [e, r] of t.searchParams) {
        if (!G.has(e) || n.has(e) || r.length === 0) return !1;
        n.add(e)
    }
    return !0
}
var U, W, G, K, q = e((() => {
    L(), U = {
        checkout: V,
        students_2026: H
    }, W = {
        students_2026: `/students/2026`
    }, G = new Set([`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `entry_id`]), K = 2048
}));
async function oe(e, t, n) {
    let r = await (0, Y.getCsrfToken)();
    if (!r) throw Error(`The mobile handoff sign-in request could not be protected`);
    return await t(e, r, n)
}
var J, Y, X, Z, Q, $, se = e((() => {
    _(), J = w(), re(), ae(), E(), n(), p(), g(), q(), Y = C(), X = t(ee()), Z = v(), Q = S(function() {
        "use forget";
        let e = (0, J.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Z.jsx)(F, {
            status: `unavailable`
        }), e[0] = t) : t = e[0], t
    }), $ = x(function() {
        "use forget";
        let e = (0, J.c)(4),
            [t, n] = (0, X.useState)(null),
            r = (0, X.useRef)(!1),
            a, o;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = () => {
            if (r.current) return;
            r.current = !0;
            let e = performance.now(),
                t = O.IDENTITY_CHECKOUT_HANDOFF_STAGE_BOOTSTRAP,
                a, o, s, l, d = (n, r) => ie({
                    stage: t,
                    outcome: n,
                    started: e,
                    checkoutPath: a,
                    statusCode: r,
                    purpose: o,
                    failedHttpStep: o === `checkout` ? l : void 0
                });
            (async () => {
                let r = u();
                if (!r) {
                    d(k.IDENTITY_CHECKOUT_HANDOFF_OUTCOME_MISSING), n(`unavailable`);
                    return
                }
                let f = await r;
                if (f.inspectionDurationMs !== void 0 && Number.isFinite(f.inspectionDurationMs) && f.inspectionDurationMs >= 0 && (e = performance.now() - f.inspectionDurationMs), f.status === 409) {
                    d(k.IDENTITY_CHECKOUT_HANDOFF_OUTCOME_DENIED, f.status), n(`account_changed`);
                    return
                }
                let p = (e, t) => {
                        let r = f.failureReason === `invalid_fragment` ? null : z(f.recoveryPurpose);
                        r != null && (o = f.recoveryPurpose), d(e, t), r == null ? n(`unavailable`) : (i.addAction(`auth_handoff_route.students_inspection_failure_recovered`), window.location.replace(r))
                    },
                    m = f.payload != null && typeof f.payload == `object` && `operation` in f.payload && `redirect_to` in f.payload ? f.payload : null,
                    h = m && `purpose` in m ? m.purpose : m?.operation === `reuse_existing` ? `checkout` : void 0;
                o = R(h) ? h : void 0;
                let g = m && B(o, m.redirect_to) ? m.redirect_to : null;
                if (f.status < 200 || f.status >= 300 || !m || !g) {
                    p(f.failureReason === `timeout` ? k.IDENTITY_CHECKOUT_HANDOFF_OUTCOME_TIMEOUT : f.failureReason === `transport` ? k.IDENTITY_CHECKOUT_HANDOFF_OUTCOME_TRANSPORT : f.status >= 400 && f.status < 500 ? k.IDENTITY_CHECKOUT_HANDOFF_OUTCOME_DENIED : !f.failureReason && f.status >= 500 && f.status < 600 ? k.IDENTITY_CHECKOUT_HANDOFF_OUTCOME_UNEXPECTED : k.IDENTITY_CHECKOUT_HANDOFF_OUTCOME_INVALID, f.failureReason ? void 0 : f.status);
                    return
                }
                if (a = g, m.operation === `reuse_existing`) {
                    d(k.IDENTITY_CHECKOUT_HANDOFF_OUTCOME_REUSE_EXISTING, f.status), window.location.replace(g);
                    return
                }
                if (m.operation !== `sign_in` && m.operation !== `switch_account` || !(`purpose` in m) || !R(m.purpose) || !(`account_id` in m) || typeof m.account_id != `string` || m.account_id.length === 0 || typeof f.submitSignIn != `function`) {
                    p(k.IDENTITY_CHECKOUT_HANDOFF_OUTCOME_INVALID, f.status);
                    return
                }
                d(k.IDENTITY_CHECKOUT_HANDOFF_OUTCOME_SUCCEEDED, f.status), t = O.IDENTITY_CHECKOUT_HANDOFF_STAGE_SIGN_IN, e = performance.now();
                let _ = await oe(c(new URLSearchParams(window.location.search ?? ``)), f.submitSignIn, e => {
                    l = e === `sign_in` ? T.IDENTITY_CHECKOUT_HANDOFF_FAILED_HTTP_STEP_NEXTAUTH_SIGN_IN : e === `bind` ? T.IDENTITY_CHECKOUT_HANDOFF_FAILED_HTTP_STEP_HANDOFF_BIND : void 0
                });
                if (s = _.status, !_.ok) throw Error(`The mobile handoff OAuth request was rejected`);
                d(k.IDENTITY_CHECKOUT_HANDOFF_OUTCOME_SUCCEEDED)
            })().catch(() => {
                d(s !== void 0 && s >= 400 && s < 500 ? k.IDENTITY_CHECKOUT_HANDOFF_OUTCOME_DENIED : k.IDENTITY_CHECKOUT_HANDOFF_OUTCOME_UNEXPECTED, s), i.addAction(`auth_handoff_route.launch_failed`), n(`unavailable`)
            })
        }, o = [], e[0] = a, e[1] = o) : (a = e[0], o = e[1]), (0, X.useEffect)(a, o);
        let s = t ?? `loading`,
            l;
        return e[2] === s ? l = e[3] : (l = (0, Z.jsx)(F, {
            status: s
        }), e[2] = s, e[3] = l), l
    })
}));
e((() => {
    se()
}))();
export {
    Q as ErrorBoundary, $ as
    default
};
//# sourceMappingURL=auth.handoff-kmqzrfkc.js.map