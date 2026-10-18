import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    Btt as r,
    C1 as i,
    CW as a,
    DW as o,
    Gat as s,
    H2 as c,
    Htt as l,
    Lot as u,
    Mrt as d,
    Nrt as f,
    Ot as p,
    PD as m,
    Qit as h,
    S6 as g,
    Srt as _,
    V2 as v,
    Vnt as y,
    Wat as b,
    dnt as x,
    fU as S,
    h1 as ee,
    hU as C,
    iat as w,
    it as T,
    kT as E,
    m1 as D,
    mnt as te,
    n1 as ne,
    nt as O,
    pU as k,
    pnt as A,
    prt as re,
    rot as j,
    tt as M,
    u1 as N,
    v1 as ie,
    v4 as ae,
    vnt as P,
    wst as F,
    xt as I,
    y1 as oe,
    ynt as se,
    zD as L
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as ce,
    At as R,
    Bn as z,
    Ht as le,
    Ln as B,
    N as ue,
    Nn as V,
    O as de,
    Pt as fe,
    Rn as pe,
    Ut as me,
    Vn as he,
    jt as H,
    s as ge,
    wn as _e,
    zn as U
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    FBn as W,
    Flt as G,
    IBn as ve,
    Kcn as ye,
    LBn as be,
    Nlt as xe,
    P6t as Se,
    PBn as Ce,
    V6t as we,
    Xin as Te,
    cq as Ee,
    eGn as De,
    mrn as Oe,
    ntt as ke,
    qcn as Ae,
    rtt as je,
    sq as Me
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Gc as Ne,
    Kc as Pe,
    hw as Fe,
    np as Ie,
    oC as Le,
    sC as Re,
    tp as ze,
    zC as Be
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    Ef as Ve,
    Tf as He
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    r as Ue,
    t as We
} from "./ee0eeb85-dfujvmq4b9s3yr8f.js";
import {
    a as Ge,
    o as Ke,
    y as qe
} from "./a4eef3c0-ip3ucad1hu328lch.js";
import {
    i as Je,
    r as Ye
} from "./8e7d0a25-kcdov95ax8g54lw1.js";
import {
    n as Xe,
    r as Ze
} from "./1e5e38ab-ioq37iao8xvk95hq.js";
import {
    a as Qe,
    n as $e,
    o as et,
    r as tt,
    t as nt
} from "./bfd5ba7b-hcup5rmq0cu66edx.js";
import {
    a as rt,
    c as it,
    i as at,
    n as ot,
    o as st,
    r as ct,
    s as lt,
    t as ut
} from "./3a1d9d23-dyiuz6ikkdgxlmvf.js";
import {
    n as dt,
    t as ft
} from "./9f2e6d33-favh86igrrldl3up.js";
import {
    r as pt,
    t as mt
} from "./96bf3632-itm4jhz9snarp29m.js";

function ht() {
    return P(`550361471`).get(`durable_workspace_onboarding_enabled`, !1)
}

function gt(e) {
    if (!e.checkout_session_id || !e.processor_entity || ![`pending`, `succeeded`, `failed`].includes(e.status) || e.status === `succeeded` && !e.workspace_id || e.workspace_account != null && (e.status !== `succeeded` || e.workspace_account.account.account_id !== e.workspace_id || e.workspace_account.account.is_deactivated || !e.workspace_account.can_access_with_session)) throw new K(`invalid_status`);
    return {
        checkoutSessionId: e.checkout_session_id,
        processorEntity: e.processor_entity,
        retryable: e.retryable === !0,
        state: e.status,
        workspaceId: e.workspace_id ?? null,
        workspaceAccount: e.workspace_account,
        failureCode: e.failure_code,
        authenticationRequired: e.authentication_required === !0
    }
}

function _t(e) {
    return `workspace_provisioning` in e && e.workspace_provisioning === !0
}

function vt(e, t) {
    return new Promise((n, r) => {
        if (t.aborted) {
            r(t.reason);
            return
        }
        let i = globalThis.setTimeout(() => {
                t.removeEventListener(`abort`, a), n()
            }, e),
            a = () => {
                globalThis.clearTimeout(i), r(t.reason)
            };
        t.addEventListener(`abort`, a, {
            once: !0
        })
    })
}
async function yt({
    checkoutSessionId: e,
    onStatusChange: t,
    signal: n,
    timeoutMs: r = Ct
}) {
    let i = Ce(r),
        a = n ? ve([n, i]) : i,
        o = null,
        s = null;
    for (;;) {
        let r = Date.now();
        try {
            let n = gt(await Ye({
                checkoutSessionId: e,
                signal: ve([a, Ce(St)]),
                waitMs: bt
            }));
            if (o = n, n.checkoutSessionId !== e) throw new K(`checkout_mismatch`, n);
            if (n.state !== s && (t?.(n), s = n.state), n.state === `succeeded`) return n;
            if (n.state === `failed`) throw new K(n.retryable ? `failed_retryable` : `failed_action_required`, n)
        } catch (e) {
            if (n?.aborted) throw e;
            if (i.aborted) throw new K(`timed_out`, o);
            if (e instanceof K) throw e;
            if (e instanceof h && (e.status === 400 || e.status === 401 || e.status === 403)) throw new K(`invalid_status`, o)
        }
        try {
            await vt(Math.max(0, xt - (Date.now() - r)), a)
        } catch (e) {
            throw n?.aborted ? e : new K(`timed_out`, o)
        }
    }
}
var bt, xt, St, Ct, K, wt = e((() => {
        be(), W(), w(), se(), Je(), s(), bt = 25e3, xt = 1e3, St = 3e4, Ct = 10 * 6e4, K = class extends Error {
            constructor(e, t = null) {
                super(`Business workspace provisioning ${e}`), b(this, `reason`, void 0), b(this, `status`, void 0), this.reason = e, this.status = t, this.name = `BusinessWorkspaceProvisioningError`
            }
        }
    })),
    Tt = e((() => {
        I()
    }));

function Et(e) {
    "use forget";
    let t = (0, kt.c)(13),
        {
            stage: n
        } = e,
        r = n === void 0 ? `preparing_workspace` : n,
        i = U(),
        a;
    t[0] !== i || t[1] !== r ? (a = i.formatMessage(jt[r]), t[0] = i, t[1] = r, t[2] = a) : a = t[2];
    let o = a,
        s;
    t[3] === i ? s = t[4] : (s = i.formatMessage(jt.description), t[3] = i, t[4] = s);
    let c;
    t[5] === s ? c = t[6] : (c = [s], t[5] = s, t[6] = c);
    let l;
    t[7] !== o || t[8] !== c ? (l = (0, At.jsx)(xe.Contents, {
        role: `status`,
        "aria-live": `polite`,
        "aria-atomic": `true`,
        children: (0, At.jsx)(p, {
            primaryText: o,
            secondaryTexts: c,
            className: `h-full px-6 [&>div]:items-center [&>div]:text-center`,
            primaryTextClassName: `w-full justify-center text-center`,
            secondaryTextClassName: `w-full text-center`,
            disableSecondaryAnimation: !0
        })
    }), t[7] = o, t[8] = c, t[9] = l) : l = t[9];
    let u;
    return t[10] !== o || t[11] !== l ? (u = (0, At.jsx)(xe, {
        open: !0,
        renderInPlace: !0,
        onOpenChange: Ot,
        onEscapeKeyDown: Dt,
        accessibleTitle: o,
        children: l
    }), t[10] = o, t[11] = l, t[12] = u) : u = t[12], u
}

function Dt(e) {
    return e.preventDefault()
}

function Ot() {}
var kt, At, jt, Mt = e((() => {
    kt = _e(), Tt(), G(), pe(), At = z(), jt = B({
        confirming_payment: {
            id: `businessWorkspaceLoading.confirmingPayment`,
            defaultMessage: `Confirming your payment`
        },
        preparing_workspace: {
            id: `businessWorkspaceLoading.preparingWorkspace`,
            defaultMessage: `Preparing your workspace`
        },
        setting_up_access: {
            id: `businessWorkspaceLoading.settingUpAccess`,
            defaultMessage: `Setting up your workspace access`
        },
        opening_workspace: {
            id: `businessWorkspaceLoading.openingWorkspace`,
            defaultMessage: `Opening your workspace`
        },
        description: {
            id: `businessWorkspaceLoading.waitDescription`,
            defaultMessage: `This may take some time.`
        }
    })
}));

function Nt(e, t, n, i) {
    let a = `oai/apps/businessPostCheckoutTiming/v1/${e}`;
    try {
        let o = window.sessionStorage.getItem(a),
            s;
        if (o != null) s = JSON.parse(o);
        else {
            let n = performance.getEntriesByType(`navigation`)[0],
                r = n ? new URL(n.name) : null,
                i = r?.pathname === `/payments/success-team` && r.searchParams.get(`stripe_session_id`) === e;
            s = {
                startedAtMs: performance.timeOrigin + (i && n ? n.startTime : performance.now()),
                flow: t,
                fromReturnNavigation: i
            }
        }
        if (!Number.isFinite(s?.startedAtMs) || s.flow !== `durable_business` && s.flow !== `standard_business` || typeof s.fromReturnNavigation != `boolean` || s.finishedAtMs != null && (!Number.isFinite(s.finishedAtMs) || s.finishedAtMs < s.startedAtMs)) throw Error(`Invalid stored post-checkout timing`);
        let c = n === `finish` && s.finishedAtMs == null,
            l = performance.timeOrigin + performance.now();
        if (l < s.startedAtMs) throw Error(`Post-checkout timing clock moved backwards`);
        c && (s.finishedAtMs = l), window.sessionStorage.setItem(a, JSON.stringify(s));
        let u = {
            checkoutSessionId: e,
            targetWorkspaceId: i,
            flow: s.flow
        };
        o ?? r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
            ...u,
            checkpoint: s.fromReturnNavigation ? `post_checkout_started` : `post_checkout_route_mounted`,
            durationMs: Math.round(l - s.startedAtMs)
        }), c && s.finishedAtMs != null && r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
            ...u,
            checkpoint: s.fromReturnNavigation ? `post_checkout_continue_enabled` : `post_checkout_route_mount_continue_enabled`,
            durationMs: Math.round(s.finishedAtMs - s.startedAtMs)
        })
    } catch (n) {
        r.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
            checkoutSessionId: e,
            targetWorkspaceId: i,
            flow: t,
            checkpoint: `post_checkout_timing_unavailable`,
            severity: `warning`,
            errorType: n instanceof Error ? n.name : `unknown`
        })
    }
}
var Pt = e((() => {
        l()
    })),
    Ft = e((() => {
        it()
    })),
    It, Lt = e((() => {
        It = `sophia_workspace_onboarding_step`
    }));

function Rt(e) {
    let t = e?.filter(e => e.type === "default" || e.type === `prolite`);
    return t?.some(e => e.available != null) ? {
        default: Math.max(0, t.find(e => e.type === "default")?.available ?? 0),
        prolite: Math.max(0, t.find(e => e.type === `prolite`)?.available ?? 0)
    } : null
}

function zt({
    isImmediateInvoiceRolloutEnabled: e,
    planType: t,
    isTrialing: n,
    seatCapacity: r,
    seatsEntitled: i,
    seatsInUse: a
}) {
    if (!e || t !== u.SELF_SERVE_BUSINESS || n) return null;
    let o = Rt(r);
    return o == null ? i == null || a == null ? 0 : Math.max(0, i - Math.max(1, a)) : Math.min(5, o.default+o.prolite)
}
var Bt = e((() => {
    F()
}));

function Vt({
    checkoutSource: e,
    durableCheckoutWorkspaceId: t,
    isPostTeamOnboardingWorkActivationEligible: n,
    LandingComponent: a = Ut,
    FinalStepComponent: s = Kt,
    useFreeWorkspaceCopy: c = !1,
    skipInviteStep: l = !1,
    onboardingStepQueryParam: u,
    markWorkspaceOnboardingViewedOnComplete: f = !1
} = {}) {
    "use no forget";
    let p = ue(),
        m = fe(),
        {
            pathname: h
        } = H(),
        {
            currentStep: g
        } = qt(u),
        _ = i(),
        v = U(),
        y = C(),
        [b, x] = (0, q.useState)(!0),
        S = (0, q.useRef)(null),
        ee = (0, q.useRef)(!1),
        w = (0, q.useRef)(!1),
        [E, D] = le(),
        O = (0, q.useMemo)(() => Zt.filter(e => !(l && e === `invite`)), [l]),
        k = l && g === `invite` ? `complete` : g,
        N = E.get(`account_id`),
        ae = E.get(`stripe_session_id`) ?? void 0,
        F = _ == null && N != null;
    de({
        ...ne(),
        enabled: F,
        refetchInterval: F ? 1e3 : !1,
        refetchIntervalInBackground: !0
    });
    let I = j()?.account,
        oe = N != null && _?.id === N,
        se = I != null && _ != null && (I.id !== _.id || I.planType !== _.planType || I.isDelinquent !== _.isDelinquent || I.gracePeriodId !== _.gracePeriodId),
        L = A($t),
        ce = t != null && t === N,
        R = ce ? `durable_business` : `standard_business`,
        z = L || ce,
        B = u !== `sophia_workspace_onboarding_step` && (ce ? d(j()?.accessToken) !== N : se),
        V = N == null ? _ == null : b && (!z || !oe || B);
    (0, q.useEffect)(() => {
        N != null && (S.current ?? (S.current = Date.now(), r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
            checkpoint: `onboarding_started`,
            flow: R,
            source: e,
            checkoutSessionId: ae,
            targetWorkspaceId: N,
            accountResolutionFixEnabled: L
        })), oe && V && !w.current && (w.current = !0, r.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
            checkpoint: `resolved_workspace_still_loading`,
            flow: R,
            source: e,
            checkoutSessionId: ae,
            severity: `warning`,
            targetWorkspaceId: N,
            durationMs: Date.now() - (S.current ?? Date.now()),
            accountResolutionFixEnabled: L
        })), oe && !V && !ee.current && (ee.current = !0, r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
            checkpoint: `onboarding_ready`,
            flow: R,
            source: e,
            checkoutSessionId: ae,
            targetWorkspaceId: N,
            durationMs: Date.now() - (S.current ?? Date.now()),
            accountResolutionFixEnabled: L
        })))
    }, [ae, N, L, oe, V, R, e]);

    function pe() {
        window.location.href = `/`
    }(0, q.useEffect)(() => {
        if (E.get(`refresh_account`) === `true` && !z) {
            x(!1);
            return
        }
        if (N == null || !b || z && oe && !B) return;
        let t = setTimeout(() => {
            r.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                checkpoint: `account_refresh_wait_timed_out`,
                flow: R,
                source: e,
                severity: `warning`,
                targetWorkspaceId: N,
                durationMs: Date.now() - (S.current ?? Date.now()),
                timeoutMs: Qt
            }), x(!1)
        }, Qt);
        return () => clearTimeout(t)
    }, [N, oe, b, R, E, B, e, z]);
    let me = (0, q.useCallback)((t, n, i) => {
        if (V) {
            r.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                checkpoint: `onboarding_step_blocked_by_loading`,
                flow: R,
                source: e,
                severity: `warning`,
                targetWorkspaceId: N ?? void 0,
                step: k,
                durationMs: Date.now() - (S.current ?? Date.now())
            });
            return
        }
        let a = O.indexOf(k),
            o = O.length - 1,
            s = O[n ? o : a + 1],
            c = new URLSearchParams(E.toString()),
            l = t ?? c.get(`account_id`);
        r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
            checkpoint: `onboarding_step_advanced`,
            flow: R,
            source: e,
            targetWorkspaceId: l ?? void 0,
            currentStep: k,
            nextStep: s,
            durationMs: Date.now() - (S.current ?? Date.now())
        }), t && t !== N && (c.set(`account_id`, t), D(c, {
            replace: !0
        }));
        let d = n ? o : a + 1;
        if (!l) {
            pe();
            return
        }
        if (a !== -1 && d < O.length) {
            u != null && c.set(u, O[d]);
            let e = c.toString(),
                t = `${h}${e?`?${e}`:``}`;
            m(`${t}#${O[d]}`, {
                replace: i === !0
            })
        }
    }, [k, N, V, m, R, h, u, E, D, O, e]);
    return (0, J.jsx)(`div`, {
        className: `max-w-sm pb-6`,
        children: (0, J.jsxs)(`div`, {
            children: [k === `landing` && (0, J.jsx)(`div`, {
                children: (0, J.jsx)(a, {
                    checkoutSource: e,
                    onNext: me,
                    isLoading: V,
                    onboardingFlow: R
                })
            }, `landing`), k === `naming` && (0, J.jsx)(`div`, {
                children: (0, J.jsx)(ut, {
                    checkoutSource: e,
                    onNext: me,
                    useFreeWorkspaceCopy: c
                })
            }, `naming`), k === `invite` && !l && (0, J.jsx)(`div`, {
                children: (0, J.jsx)(Gt, {
                    checkoutWorkspaceId: N,
                    onNext: me
                })
            }, `invite`), k === `complete` && (0, J.jsx)(`div`, {
                children: (0, J.jsx)(s, {
                    onNext: () => {
                        (async () => {
                            me();
                            let t = n === !0 && o(),
                                i = t && P(en).get(tn, !1);
                            if (t && await te(), f) {
                                He.set(!0);
                                try {
                                    await T(M.Onboarding)
                                } catch {}
                            }
                            if (N) {
                                let {
                                    updatedAccount: t,
                                    willRedirect: n
                                } = i ? await ie(p, N, v, y, !0, nn) : await ie(p, N, v, y);
                                if (!t && !n) {
                                    r.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                                        checkpoint: `final_workspace_switch_failed`,
                                        flow: R,
                                        source: e,
                                        severity: `error`,
                                        targetWorkspaceId: N,
                                        durationMs: Date.now() - (S.current ?? Date.now())
                                    }), y.danger(v.formatMessage(re.somethingWentWrong));
                                    return
                                }
                                if (n) {
                                    r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                                        checkpoint: `onboarding_completed`,
                                        flow: R,
                                        source: e,
                                        checkoutSessionId: ae,
                                        targetWorkspaceId: N,
                                        durationMs: Date.now() - (S.current ?? Date.now()),
                                        redirected: !0
                                    });
                                    return
                                }
                            }
                            r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                                checkpoint: `onboarding_completed`,
                                flow: R,
                                source: e,
                                checkoutSessionId: ae,
                                targetWorkspaceId: N ?? void 0,
                                durationMs: Date.now() - (S.current ?? Date.now()),
                                redirected: i
                            }), i ? window.location.href = nn : pe()
                        })()
                    }
                })
            }, `complete`)]
        })
    })
}

function Ht() {
    "use forget";
    let e = (0, Yt.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, J.jsx)(Et, {}), e[0] = t) : t = e[0], t
}

function Ut({
    checkoutSource: e,
    onNext: t,
    isLoading: n = !1,
    onboardingFlow: a = `standard_business`
}) {
    "use no forget";
    let o = i(),
        {
            data: s,
            isLoading: c
        } = we(),
        {
            pathname: l
        } = H(),
        [d] = le(),
        f = d.get(`stripe_session_id`),
        p = d.get(`account_id`) ?? void 0,
        m = (0, q.useRef)(null),
        h = o != null && o.id === d.get(`account_id`) && o.isOwnerOfAccount() && o.planType === u.SELF_SERVE_BUSINESS && o.hasPaidSubscription() && o.data.subscriptionStatus.trial?.isTrialing !== !0 && Pe(o.id) && s == null && c,
        g = n || h;
    (0, q.useEffect)(() => {
        l === `/payments/success-team` && f && !g && Nt(f, a, `finish`, p)
    }, [f, g, a, l, p]), (0, q.useEffect)(() => {
        if (l !== `/payments/success-team` || !f) return;
        let t = m.current,
            n = t?.checkoutSessionId === f && t?.targetWorkspaceId === p,
            i = {
                flow: a,
                source: e,
                checkoutSessionId: f,
                targetWorkspaceId: p,
                step: `landing`
            };
        if (g) {
            if (n) return;
            m.current = {
                checkoutSessionId: f,
                targetWorkspaceId: p,
                startedAtMs: performance.now()
            }, r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                ...i,
                checkpoint: `loading_screen_shown`
            })
        } else t != null && n && (m.current = null, r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
            ...i,
            checkpoint: `loading_screen_hidden`,
            durationMs: Math.max(0, Math.round(performance.now() - t.startedAtMs))
        }))
    }, [f, g, a, l, e, p]);
    let _ = (0, q.useCallback)(() => {
        if (!o) return;
        let e = o.subscriptionAnalyticsParams,
            t = new URLSearchParams(window.location.search).get(`referrer`) || document.referrer;
        r.logEvent(`Account Pay: Payment Confirmation Modal Clicked`, {
            ...e,
            referrer: t
        })
    }, [o]);
    return (0, q.useEffect)(() => {
        if (!o) return;
        let e = o.subscriptionAnalyticsParams,
            t = new URLSearchParams(window.location.search).get(`referrer`) || document.referrer,
            n = `Account Pay: Payment Confirmation Modal Show`,
            i = r.logStructuredEvent(`ChatgptSubscriptionPaymentConfirmationShown`, {
                surface: `CHATGPT_SUBSCRIPTION_PAYMENT_CONFIRMATION_SURFACE_BUSINESS`,
                legacyStatsigEventName: n,
                ...ze(t)
            });
        r.logEvent(n, {
            ...e,
            referrer: t
        }, {
            eventId: i
        })
    }, [o]), g ? (0, J.jsx)(Ht, {}) : (0, J.jsxs)(J.Fragment, {
        children: [(0, J.jsx)(lt, {
            isTrial: !1
        }), (0, J.jsx)(ct, {
            children: (0, J.jsx)(V, {
                ...Y.standard
            })
        }), (0, J.jsx)(rt, {
            children: (0, J.jsx)(V, {
                ...Y.description
            })
        }), (0, J.jsx)(E, {
            onClick: () => {
                t(), _()
            },
            size: `large`,
            fullWidth: !0,
            children: (0, J.jsx)(V, {
                ...re.continueButtonText
            })
        })]
    })
}

function Wt(e) {
    "use forget";
    let t = (0, Yt.c)(4),
        {
            onNext: n
        } = e,
        r, i;
    t[0] === n ? (r = t[1], i = t[2]) : (r = () => {
        n(void 0, !1, !0)
    }, i = [n], t[0] = n, t[1] = r, t[2] = i), (0, q.useEffect)(r, i);
    let a;
    return t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, J.jsx)(Ht, {}), t[3] = a) : a = t[3], a
}

function Gt({
    checkoutWorkspaceId: e,
    onNext: t
}) {
    let n = U(),
        a = i(),
        {
            data: o,
            isLoading: s
        } = we(),
        c = L(),
        l = (0, q.useMemo)(() => {
            if (!c) return null;
            let [, e] = c.split(`@`);
            return e ?? null
        }, [c]),
        d = (0, q.useMemo)(() => a?.subscriptionAnalyticsParams, [a]),
        f = a != null && a.isOwnerOfAccount() && a.planType === u.SELF_SERVE_BUSINESS && a.hasPaidSubscription() && a.data.subscriptionStatus.trial?.isTrialing !== !0 && Pe(a.id),
        p = a == null ? null : zt({
            isImmediateInvoiceRolloutEnabled: f,
            planType: a.planType,
            isTrialing: a.data.subscriptionStatus.trial?.isTrialing === !0,
            seatCapacity: o?.seat_capacity,
            seatsEntitled: o?.seats_entitled,
            seatsInUse: o?.seats_in_use
        }),
        m = f ? Rt(o?.seat_capacity) : null,
        h = f && a?.id === e && o == null && s,
        g = f && a?.id === e && !h && (o == null || m != null && m.default+m.prolite === 0);
    if ((0, q.useEffect)(() => {
            a == null || h || g || r.logEvent(`Account Pay: Invite Collaborators Modal Show`, d)
        }, [d, a, h, g]), a == null || h) return (0, J.jsx)(Ht, {});
    let _ = a.isFreeWorkspace();
    if (g) return (0, J.jsx)(Wt, {
        onNext: t
    });
    let v = _ ? 5 : p ?? (o?.seats_entitled == null ? 1 : Math.max(0, o.seats_entitled - Math.max(1, o.seats_in_use ?? 1)));
    return (0, J.jsxs)(J.Fragment, {
        children: [(0, J.jsx)(ct, {
            children: _ ? (0, J.jsx)(V, {
                ...Y.inviteTitleFreeWorkspace
            }) : (0, J.jsx)(V, {
                ...Y.inviteTitle,
                values: {
                    seatCount: v,
                    workspaceName: a.data.name
                }
            })
        }), (0, J.jsx)(`div`, {
            className: `text-md text-token-text-secondary mt-2 mb-8`,
            children: _ && l ? (0, J.jsx)(V, {
                ...Y.inviteSubtitleFreeWorkspace,
                values: {
                    domain: l
                }
            }) : (0, J.jsx)(V, {
                ...Y.completeDescription
            })
        }), (0, J.jsx)(mt, {
            fullWidthButtons: !0,
            workspace: a,
            maxInvites: p,
            availablePaidSeatCounts: m,
            cancelButtonText: n.formatMessage(Y.skipAddMembers),
            onCancel: t,
            onSuccess: t,
            contentClassName: `relative left-1/2 w-[calc(100vw-2rem)] max-w-[720px] -translate-x-1/2`
        })]
    })
}

function Kt({
    onNext: e
}) {
    let t = i(),
        n = (0, q.useMemo)(() => t?.subscriptionAnalyticsParams, [t]);
    (0, q.useEffect)(() => {
        r.logEvent(`Account Pay: Workspace Setup Complete Modal Show`, n)
    }, [n]);
    let a = () => {
        r.logEvent(`Account Pay: Workspace Setup Complete Modal Clicked`, n)
    };
    return (0, J.jsxs)(J.Fragment, {
        children: [(0, J.jsx)(ct, {
            children: (0, J.jsx)(V, {
                ...Y.completeTitle
            })
        }), (0, J.jsx)(rt, {
            children: (0, J.jsx)(V, {
                ...Y.completeDescription
            })
        }), (0, J.jsx)(E, {
            onClick: () => {
                e(), a()
            },
            size: `large`,
            fullWidth: !0,
            children: (0, J.jsx)(V, {
                ...Y.continueToChatgpt
            })
        })]
    })
}

function qt(e) {
    let {
        hash: t,
        pathname: n,
        search: r
    } = H(), i = new URLSearchParams(r), a = Jt(t.slice(1)), o = e == null ? null : Jt(i.get(e));
    return {
        currentStep: a ?? o ?? `landing`,
        currentPath: n + r
    }
}

function Jt(e) {
    return e === `caOnboarding` ? `complete` : e != null && rn(e) ? e : null
}
var Yt, q, J, Xt, Zt, Qt, $t, en, tn, nn, rn, Y, an = e((() => {
        Yt = _e(), Ie(), F(), Ne(), Se(), pt(), Mt(), Pt(), n(), _(), Ve(), st(), Lt(), N(), k(), O(), f(), l(), Ee(), se(), ge(), q = t(he()), pe(), ce(), Ft(), Bt(), m(), ot(), a(), J = z(), Xt = function(e) {
            return e.Landing = `landing`, e.Setup = `setup`, e.Naming = `naming`, e.Invite = `invite`, e.Complete = `complete`, e
        }(Xt || {}), Zt = [`landing`, `naming`, `invite`, `complete`], Qt = 15e3, $t = `1400990654`, en = `1746256812`, tn = `drop_into_work_after_team_onboarding`, nn = `/?surface=work&refresh_account=true`, rn = Me(Xt), Y = B({
            standard: {
                id: `UpgradedToTeamSuccess.trial`,
                defaultMessage: `Payment successful`
            },
            description: {
                id: `UpgradedToTeamSuccess.description`,
                defaultMessage: `Your team has been created. You can invite members to join the workspace to start collaborating.`
            },
            continueToChatgpt: {
                id: `UpgradedToTeamSuccess.continueToChatgpt`,
                defaultMessage: `Continue to ChatGPT`
            },
            inviteTitle: {
                id: `UpgradedToTeamSuccess.inviteTitle`,
                defaultMessage: `Invite {seatCount, plural, one {# member} other {# members}} to {workspaceName}`
            },
            inviteTitleFreeWorkspace: {
                id: `UpgradedToTeamSuccess.inviteTitleFreeWorkspace`,
                defaultMessage: `Add your team`
            },
            inviteSubtitleFreeWorkspace: {
                id: `UpgradedToTeamSuccess.inviteSubtitleFreeWorkspace`,
                defaultMessage: `Invite anyone with an @{domain} email to join this workspace.`
            },
            completeTitle: {
                id: `UpgradedToTeamSuccess.completeTitle`,
                defaultMessage: `Workspace setup complete`
            },
            completeDescription: {
                id: `UpgradedToTeamSuccess.completeDescription`,
                defaultMessage: `Supercharge your team's productivity with ChatGPT.`
            },
            skipAddMembers: {
                id: `UpgradedToTeamSuccess.skipAddMembers`,
                defaultMessage: `Skip this step`
            }
        })
    })),
    on, sn = e((() => {
        on = `business_workspace_onboarding_step`
    }));

function cn({
    checkoutSource: e,
    durableCheckoutWorkspaceId: t,
    isPostTeamOnboardingWorkActivationEligible: n,
    isTrial: a,
    isTeam: o,
    skipTeamInviteStep: s = !1
}) {
    let c = U(),
        l = fe(),
        u = ue(),
        d = i()?.hasPaidSubscription() ?? !1;
    (0, un.useEffect)(() => {
        d && Ue({
            hasPaidSubscription: d,
            intl: c,
            queryClient: u
        })
    }, [d, c, u]);
    let f = (0, un.useCallback)(e => {
        e.preventDefault(), r.logEvent(`Account Pay: Click Account Payment Success Continue`), l(`/`)
    }, [l]);
    return (0, X.jsxs)(at, {
        children: [(0, X.jsx)(ft, {
            children: (0, X.jsx)(`title`, {
                children: c.formatMessage(dn.pageTitle)
            })
        }), (0, X.jsx)(`div`, {
            className: `text-token-text-primary flex flex-col`,
            children: o ? (0, X.jsx)(Vt, {
                checkoutSource: e,
                durableCheckoutWorkspaceId: t,
                isPostTeamOnboardingWorkActivationEligible: n,
                skipInviteStep: s,
                onboardingStepQueryParam: on,
                markWorkspaceOnboardingViewedOnComplete: !0
            }) : (0, X.jsx)(ln, {
                isTrial: a,
                onContinue: f
            })
        })]
    })
}

function ln({
    isTrial: e,
    onContinue: t
}) {
    let n = e ? dn.trial : dn.standard;
    return (0, X.jsxs)(X.Fragment, {
        children: [(0, X.jsx)(lt, {
            isTrial: !!e
        }), (0, X.jsxs)(`div`, {
            className: `flex flex-col items-center`,
            children: [(0, X.jsx)(ct, {
                children: (0, X.jsx)(V, {
                    ...n
                })
            }), (0, X.jsx)(rt, {
                children: (0, X.jsx)(V, {
                    ...dn.paymentReceived
                })
            }), (0, X.jsx)(E, {
                onClick: t,
                size: `large`,
                fullWidth: !0,
                children: (0, X.jsx)(V, {
                    ...re.continueButtonText
                })
            })]
        })]
    })
}
var un, X, dn, fn = e((() => {
    n(), st(), _(), We(), N(), l(), dt(), ge(), un = t(he()), pe(), ce(), Ft(), an(), sn(), X = z(), dn = B({
        pageTitle: {
            id: `PaymentsSuccess.pageTitle`,
            defaultMessage: `Account - Payment success`
        },
        paymentReceived: {
            id: `PaymentsSuccess.paymentSuccessful`,
            defaultMessage: `You've been upgraded to ChatGPT Plus`
        },
        standard: {
            id: `PaymentsSuccess.standard`,
            defaultMessage: `Payment successful`
        },
        trial: {
            id: `PaymentsSuccess.trial`,
            defaultMessage: `Trial started`
        }
    })
}));

function pn(e) {
    "use forget";
    let t = (0, gn.c)(2),
        {
            markWorkspaceOnboardingViewedOnComplete: n
        } = e,
        r = n !== void 0 && n,
        i;
    return t[0] === r ? i = t[1] : (i = (0, Z.jsx)(Vt, {
        LandingComponent: mn,
        FinalStepComponent: hn,
        skipInviteStep: !0,
        onboardingStepQueryParam: It,
        markWorkspaceOnboardingViewedOnComplete: r
    }), t[0] = r, t[1] = i), i
}

function mn(e) {
    "use forget";
    let t = (0, gn.c)(15),
        {
            onNext: n,
            isLoading: a
        } = e,
        o = a !== void 0 && a,
        s = i(),
        c;
    t[0] === s ? c = t[1] : (c = () => {
        if (!s) return;
        let e = s.subscriptionAnalyticsParams,
            t = new URLSearchParams(window.location.search).get(`referrer`) || document.referrer;
        r.logEvent(`Account Pay: Payment Confirmation Modal Clicked`, {
            ...e,
            referrer: t
        })
    }, t[0] = s, t[1] = c);
    let l = c,
        u, d;
    t[2] === s ? (u = t[3], d = t[4]) : (u = () => {
        if (!s) return;
        let e = s.subscriptionAnalyticsParams,
            t = new URLSearchParams(window.location.search).get(`referrer`) || document.referrer,
            n = r.logStructuredEvent(`ChatgptSubscriptionPaymentConfirmationShown`, {
                surface: `CHATGPT_SUBSCRIPTION_PAYMENT_CONFIRMATION_SURFACE_SOPHIA`,
                legacyStatsigEventName: `Account Pay: Payment Confirmation Modal Show`,
                ...ze(t)
            });
        r.logEvent(`Account Pay: Payment Confirmation Modal Show`, {
            ...e,
            referrer: t
        }, {
            eventId: n
        })
    }, d = [s], t[2] = s, t[3] = u, t[4] = d), (0, _n.useEffect)(u, d);
    let f;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, Z.jsx)(lt, {
        isTrial: !1
    }), t[5] = f) : f = t[5];
    let p;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, Z.jsx)(ct, {
        children: (0, Z.jsx)(V, {
            ...vn.paymentSuccessful
        })
    }), t[6] = p) : p = t[6];
    let m;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, Z.jsx)(rt, {
        children: (0, Z.jsx)(V, {
            ...vn.workspaceCreated
        })
    }), t[7] = m) : m = t[7];
    let h;
    t[8] !== n || t[9] !== l ? (h = () => {
        n(), l()
    }, t[8] = n, t[9] = l, t[10] = h) : h = t[10];
    let g;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, Z.jsx)(V, {
        ...re.continueButtonText
    }), t[11] = g) : g = t[11];
    let _;
    return t[12] !== o || t[13] !== h ? (_ = (0, Z.jsxs)(Z.Fragment, {
        children: [f, p, m, (0, Z.jsx)(E, {
            onClick: h,
            size: `large`,
            loading: o,
            fullWidth: !0,
            children: g
        })]
    }), t[12] = o, t[13] = h, t[14] = _) : _ = t[14], _
}

function hn(e) {
    "use forget";
    let t = (0, gn.c)(13),
        {
            onNext: n
        } = e,
        a = i()?.subscriptionAnalyticsParams,
        o, s;
    t[0] === a ? (o = t[1], s = t[2]) : (o = () => {
        r.logEvent(`Account Pay: Workspace Setup Complete Modal Show`, a)
    }, s = [a], t[0] = a, t[1] = o, t[2] = s), (0, _n.useEffect)(o, s);
    let c;
    t[3] === a ? c = t[4] : (c = () => {
        r.logEvent(`Account Pay: Workspace Setup Complete Modal Clicked`, a)
    }, t[3] = a, t[4] = c);
    let l = c,
        u;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, Z.jsx)(ct, {
        children: (0, Z.jsx)(V, {
            ...vn.setupComplete
        })
    }), t[5] = u) : u = t[5];
    let d;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Z.jsx)(rt, {
        children: (0, Z.jsx)(V, {
            ...vn.setupCompleteDescription
        })
    }), t[6] = d) : d = t[6];
    let f;
    t[7] !== n || t[8] !== l ? (f = () => {
        n(), l()
    }, t[7] = n, t[8] = l, t[9] = f) : f = t[9];
    let p;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, Z.jsx)(V, {
        ...vn.continueToChatgpt
    }), t[10] = p) : p = t[10];
    let m;
    return t[11] === f ? m = t[12] : (m = (0, Z.jsxs)(Z.Fragment, {
        children: [u, d, (0, Z.jsx)(E, {
            onClick: f,
            size: `large`,
            fullWidth: !0,
            children: p
        })]
    }), t[11] = f, t[12] = m), m
}
var gn, _n, Z, vn, yn = e((() => {
    gn = _e(), Ie(), n(), _(), Ft(), an(), st(), N(), l(), _n = t(he()), pe(), Lt(), Z = z(), vn = B({
        paymentSuccessful: {
            id: `UpgradedToSophiaSuccess.paymentSuccessful`,
            defaultMessage: `Payment successful`
        },
        workspaceCreated: {
            id: `UpgradedToSophiaSuccess.workspaceCreated`,
            defaultMessage: `Your workspace has been created.`
        },
        setupComplete: {
            id: `UpgradedToSophiaSuccess.setupComplete`,
            defaultMessage: `Workspace setup complete`
        },
        setupCompleteDescription: {
            id: `UpgradedToSophiaSuccess.setupCompleteDescription`,
            defaultMessage: `Continue to ChatGPT to start using your workspace.`
        },
        continueToChatgpt: {
            id: `UpgradedToSophiaSuccess.continueToChatgpt`,
            defaultMessage: `Continue to ChatGPT`
        }
    })
}));

function bn() {
    "use forget";
    let e = (0, xn.c)(7),
        t = U(),
        n;
    e[0] === t ? n = e[1] : (n = t.formatMessage(Cn.pageTitle), e[0] = t, e[1] = n);
    let r;
    e[2] === n ? r = e[3] : (r = (0, Sn.jsx)(ft, {
        children: (0, Sn.jsx)(`title`, {
            children: n
        })
    }), e[2] = n, e[3] = r);
    let i;
    e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Sn.jsx)(`div`, {
        className: `text-token-text-primary flex flex-col`,
        children: (0, Sn.jsx)(pn, {
            markWorkspaceOnboardingViewedOnComplete: !0
        })
    }), e[4] = i) : i = e[4];
    let a;
    return e[5] === r ? a = e[6] : (a = (0, Sn.jsxs)(at, {
        children: [r, i]
    }), e[5] = r, e[6] = a), a
}
var xn, Sn, Cn, wn = e((() => {
    xn = _e(), st(), dt(), pe(), yn(), Sn = z(), Cn = B({
        pageTitle: {
            id: `SophiaPaymentsSuccess.pageTitle`,
            defaultMessage: `Account - Payment success`
        }
    })
}));

function Tn(e) {
    "use forget";
    let t = (0, Mn.c)(45),
        {
            actionRequired: n,
            paymentConfirmed: r,
            recoveryWorkspaceId: i,
            authenticationRequired: a
        } = e,
        o = r === void 0 || r,
        s = a !== void 0 && a,
        l = U(),
        u;
    t[0] === l ? u = t[1] : (u = l.formatMessage(In.title), t[0] = l, t[1] = u);
    let d = u,
        f = ue(),
        [p, m] = (0, Q.useState)(!1),
        [h, g] = (0, Q.useState)(!1),
        _ = (0, Q.useRef)(null),
        v = (0, Q.useRef)(null),
        y, b;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (y = () => () => _.current?.abort(), b = [], t[2] = y, t[3] = b) : (y = t[2], b = t[3]), (0, Q.useEffect)(y, b);
    let x;
    t[4] !== s || t[5] !== l || t[6] !== p || t[7] !== f || t[8] !== i ? (x = async () => {
        if (i == null || p) return;
        let e = _.current ?? new AbortController;
        _.current = e, m(!0);
        try {
            let t = ve([e.signal, Ce(3e4)]),
                n = v.current ?? On(f, i, l, e.signal, s ? window.location.href : void 0);
            v.current = n;
            let r = () => {
                v.current === n && (v.current = null, _.current = null)
            };
            n.then(r, r), await c(n, t) || (s ? S().danger(re.somethingWentWrong) : g(!0))
        } catch {
            e.signal.aborted || S().danger(re.somethingWentWrong)
        }
        e.signal.aborted || m(!1)
    }, t[4] = s, t[5] = l, t[6] = p, t[7] = f, t[8] = i, t[9] = x) : x = t[9];
    let ee = x,
        C;
    t[10] === d ? C = t[11] : (C = (0, $.jsx)(`h1`, {
        className: `text-xl font-semibold`,
        children: d
    }), t[10] = d, t[11] = C);
    let w;
    t[12] !== n || t[13] !== s || t[14] !== l || t[15] !== o || t[16] !== h || t[17] !== i ? (w = s ? (0, $.jsx)(V, {
        id: `businessWorkspaceRecovery.authentication.description`,
        defaultMessage: `Your workspace was created, but this session cannot access it. Sign in with the same account to continue. If access is still blocked, contact your administrator or support.`
    }) : h ? (0, $.jsx)(V, {
        id: `businessWorkspaceRecovery.inactive.unavailable`,
        defaultMessage: `We couldn’t find an available reactivation option for this workspace. Contact support to restore access.`
    }) : i == null ? l.formatMessage(o ? n ? In.supportDescription : In.retryDescription : re.somethingWentWrong) : (0, $.jsx)(V, {
        id: `businessWorkspaceRecovery.inactive.description`,
        defaultMessage: `This checkout belongs to a previous workspace subscription. Open the workspace to review your access and reactivation options.`
    }), t[12] = n, t[13] = s, t[14] = l, t[15] = o, t[16] = h, t[17] = i, t[18] = w) : w = t[18];
    let T;
    t[19] === w ? T = t[20] : (T = (0, $.jsx)(`p`, {
        className: `text-token-text-secondary text-sm leading-6`,
        children: w
    }), t[19] = w, t[20] = T);
    let D;
    t[21] !== s || t[22] !== ee || t[23] !== p || t[24] !== h || t[25] !== i ? (D = i != null && !h && (0, $.jsx)(E, {
        color: `primary`,
        disabled: p,
        onClick: () => void ee(),
        children: s ? (0, $.jsx)(V, {
            id: `businessWorkspaceRecovery.authentication.signIn`,
            defaultMessage: `Sign in to continue`
        }) : (0, $.jsx)(V, {
            id: `businessWorkspaceRecovery.inactive.openWorkspace`,
            defaultMessage: `Open workspace`
        })
    }), t[21] = s, t[22] = ee, t[23] = p, t[24] = h, t[25] = i, t[26] = D) : D = t[26];
    let te;
    t[27] !== n || t[28] !== s || t[29] !== l ? (te = (!n || s) && (0, $.jsx)(E, {
        color: s ? `secondary` : `primary`,
        onClick: En,
        children: l.formatMessage(In.retry)
    }), t[27] = n, t[28] = s, t[29] = l, t[30] = te) : te = t[30];
    let ne = h || n && i == null ? `primary` : `secondary`,
        O;
    t[31] === l ? O = t[32] : (O = l.formatMessage(In.support), t[31] = l, t[32] = O);
    let k;
    t[33] !== ne || t[34] !== O ? (k = (0, $.jsx)(E, {
        as: `a`,
        to: `https://help.openai.com/`,
        openNewTab: !0,
        color: ne,
        children: O
    }), t[33] = ne, t[34] = O, t[35] = k) : k = t[35];
    let A;
    t[36] !== D || t[37] !== te || t[38] !== k || t[39] !== C || t[40] !== T ? (A = (0, $.jsx)(xe.Contents, {
        className: `flex h-full items-center justify-center px-6`,
        role: `alert`,
        children: (0, $.jsxs)(`div`, {
            className: `flex w-full max-w-md flex-col gap-5 text-center`,
            children: [C, T, D, te, k]
        })
    }), t[36] = D, t[37] = te, t[38] = k, t[39] = C, t[40] = T, t[41] = A) : A = t[41];
    let j;
    return t[42] !== A || t[43] !== d ? (j = (0, $.jsx)(xe, {
        open: !0,
        onOpenChange: Dn,
        accessibleTitle: d,
        children: A
    }), t[42] = A, t[43] = d, t[44] = j) : j = t[44], j
}

function En() {
    return window.location.reload()
}

function Dn() {}
async function On(e, t, n, r, i) {
    let a = j()?.user?.id,
        o = await c(D(e, t), ve([r, Ce(3e4)]));
    if (r.throwIfAborted(), a == null || j()?.user?.id !== a || o == null || i != null && o.isDeactivated() || o.isDeactivated() && Xe(o) == null) return !1;
    let s = i ?? (o.isDeactivated() ? `/workspace/deactivated` : `/`),
        l = await ie(e, o.id, n, S(), !0, s);
    if (!l.updatedAccount && !l.willRedirect) throw Error(`Workspace recovery switch did not complete`);
    return l.willRedirect || (r.throwIfAborted(), window.location.assign(s)), !0
}

function kn(e) {
    switch (e) {
        case `succeeded`:
            return `setting_up_access`;
        default:
            return `preparing_workspace`
    }
}

function An(e, t) {
    if (e == null) throw new K(`invalid_status`, t);
    return e
}

function jn(e) {
    throw e
}
var Mn, Q, $, Nn, Pn, Fn, In, Ln, Rn, zn = e((() => {
    ce(), Mn = _e(), F(), n(), Le(), Be(), wt(), Mt(), Ze(), Pt(), et(), ye(), Te(), Ge(), De(), _(), G(), fn(), sn(), ke(), Oe(), Lt(), wn(), N(), k(), be(), W(), f(), l(), se(), v(), ge(), Q = t(he()), pe(), tt(), $ = z(), Nn = 500, Pn = 1e4, Fn = 2 * St, In = B({
        title: {
            id: `businessWorkspaceRecovery.title`,
            defaultMessage: `Your workspace needs attention`
        },
        retryDescription: {
            id: `businessWorkspaceRecovery.retryDescription`,
            defaultMessage: `Your payment succeeded. Try again to finish setting up your workspace without being charged again.`
        },
        supportDescription: {
            id: `businessWorkspaceRecovery.supportDescription`,
            defaultMessage: `Your payment succeeded, but we need help finishing your workspace setup.`
        },
        retry: {
            id: `businessWorkspaceRecovery.retry`,
            defaultMessage: `Try again`
        },
        support: {
            id: `businessWorkspaceRecovery.support`,
            defaultMessage: `Contact support`
        }
    }), Ln = ({
        currentUrl: e,
        defaultShouldRevalidate: t,
        nextUrl: n
    }) => {
        let r = new URLSearchParams(e.searchParams),
            i = new URLSearchParams(n.searchParams);
        for (let e of [on, It]) r.delete(e), i.delete(e);
        return (ht() || r.get(`durable_business_checkout`) === `true` || i.get(`durable_business_checkout`) === `true`) && e.pathname === n.pathname && !r.has(`account_id`) && i.delete(`account_id`), e.pathname === n.pathname && r.toString() === i.toString() ? !1 : t
    }, Rn = me(function() {
        "use forget";
        let e = (0, Mn.c)(127),
            t = fe(),
            n = ue(),
            a = i(),
            [o, s] = le(),
            l = R(),
            [f, p] = (0, Q.useState)(null),
            [m, h] = (0, Q.useState)(null),
            _;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = {
            key: `chatgpt-subscribe-plan-business`
        }, e[0] = _) : _ = e[0];
        let {
            trackSelectedPixels: v
        } = Re(_), b;
        e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (b = {
            key: Fe.SELF_SERVE_BUSINESS_WORKSPACE_CREATED
        }, e[1] = b) : b = e[1];
        let {
            trackSelectedPixels: C
        } = Re(b), w = (0, Q.useRef)(!1), T = (0, Q.useRef)(!1), E = (0, Q.useRef)(!1), D = (0, Q.useRef)(!1), te = (0, Q.useRef)(null), O = l.postCheckoutResult, k = l.checkout_id, A = l.processor_entity, M = l.postCheckoutResult === $e.Success ? l.completion.checkout_kind ?? ae.Standard : `unknown`, N = l.postCheckoutResult === $e.Success ? l.completion.entry_point ?? `unknown` : `unknown`, ie;
        e[2] === o ? ie = e[3] : (ie = o.get(`account_id`), e[2] = o, e[3] = ie);
        let P = ie,
            F = O === $e.Success,
            I = l.postCheckoutResult === $e.Success ? void 0 : l.durableCheckoutRecovery,
            se;
        e[4] !== l.completion || e[5] !== l.postCheckoutResult ? (se = l.postCheckoutResult === $e.Success && _t(l.completion), e[4] = l.completion, e[5] = l.postCheckoutResult, e[6] = se) : se = e[6];
        let L = se,
            ce = f?.checkoutSessionId === k ? f : null,
            z = ce?.state ?? `pending`,
            B = ce?.failure ?? null,
            V;
        e[7] !== P || e[8] !== k || e[9] !== m?.checkoutSessionId || e[10] !== m?.workspaceId || e[11] !== a?.id || e[12] !== L ? (V = L && m?.checkoutSessionId === k && m?.workspaceId === P && P != null && a?.id === P && d(j()?.accessToken) === P, e[7] = P, e[8] = k, e[9] = m?.checkoutSessionId, e[10] = m?.workspaceId, e[11] = a?.id, e[12] = L, e[13] = V) : V = e[13];
        let de = V,
            pe = P == null || a?.id === P,
            me = !L && pe && a?.planType === u.SCI,
            he = F && N === Ae.SOPHIA_CHECKOUT_PAGE_CONTENT,
            H = me || he,
            ge, _e;
        e[14] !== P || e[15] !== k || e[16] !== L || e[17] !== H || e[18] !== F ? (ge = () => {
            F && !H && k && Nt(k, L ? `durable_business` : `standard_business`, `start`, P ?? void 0)
        }, _e = [P, k, L, H, F], e[14] = P, e[15] = k, e[16] = L, e[17] = H, e[18] = F, e[19] = ge, e[20] = _e) : (ge = e[19], _e = e[20]), (0, Q.useEffect)(ge, _e);
        let U;
        e[21] !== M || e[22] !== k || e[23] !== H || e[24] !== o ? (U = !H && k != null ? y(M, k, o).source : void 0, e[21] = M, e[22] = k, e[23] = H, e[24] = o, e[25] = U) : U = e[25];
        let W = U,
            G = H ? u.SCI : u.SELF_SERVE_BUSINESS,
            ye = !H,
            be = F,
            xe = F && !H && P != null && a?.id === P && (a.planType === u.SELF_SERVE_BUSINESS || a.planType === u.SELF_SERVE_BUSINESS_PROLITE),
            Se = L && !de && B == null,
            we, Te;
        e[26] !== P || e[27] !== k || e[28] !== L || e[29] !== Se ? (we = () => {
            if (!k || !L) return;
            let e = te.current,
                t = {
                    flow: `durable_business`,
                    checkoutSessionId: k,
                    targetWorkspaceId: P ?? void 0,
                    step: `workspace_provisioning`
                };
            if (Se) {
                if (e?.checkoutSessionId === k) return;
                te.current = {
                    checkoutSessionId: k,
                    startedAtMs: performance.now()
                }, r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                    ...t,
                    checkpoint: `loading_screen_shown`
                })
            } else e?.checkoutSessionId === k && (te.current = null, r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                ...t,
                checkpoint: `loading_screen_hidden`,
                durationMs: Math.max(0, Math.round(performance.now() - e.startedAtMs))
            }))
        }, Te = [P, k, L, Se], e[26] = P, e[27] = k, e[28] = L, e[29] = Se, e[30] = we, e[31] = Te) : (we = e[30], Te = e[31]), (0, Q.useEffect)(we, Te);
        let Ee, De;
        e[32] !== F || e[33] !== ye || e[34] !== v || e[35] !== C ? (Ee = () => {
            !F || !ye || w.current || (w.current = !0, v(), C())
        }, De = [F, ye, v, C], e[32] = F, e[33] = ye, e[34] = v, e[35] = C, e[36] = Ee, e[37] = De) : (Ee = e[36], De = e[37]), (0, Q.useEffect)(Ee, De);
        let Oe, ke;
        e[38] !== P || e[39] !== I || e[40] !== M || e[41] !== G || e[42] !== k || e[43] !== N || e[44] !== F || e[45] !== t || e[46] !== O || e[47] !== A ? (Oe = () => {
            F || ((I != null || ht()) && r.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                checkpoint: `checkout_confirmation_failed`,
                flow: `durable_business`,
                severity: `error`,
                checkoutSessionId: k ?? void 0,
                targetWorkspaceId: P ?? void 0,
                checkoutKind: M,
                entryPoint: N,
                planType: G,
                errorType: String(O)
            }), qe(`payments_success_team`, {
                checkoutPlanType: G,
                checkoutId: k ?? void 0,
                processorEntity: A ?? void 0,
                outcome: O
            }), I == null && O !== $e.UserMismatch && t(`/#pricing`, {
                replace: !0
            }))
        }, ke = [P, I, M, G, k, N, F, t, O, A], e[38] = P, e[39] = I, e[40] = M, e[41] = G, e[42] = k, e[43] = N, e[44] = F, e[45] = t, e[46] = O, e[47] = A, e[48] = Oe, e[49] = ke) : (Oe = e[48], ke = e[49]), (0, Q.useEffect)(Oe, ke);
        let Me, Ne;
        e[50] !== P || e[51] !== M || e[52] !== G || e[53] !== k || e[54] !== N || e[55] !== L || e[56] !== H || e[57] !== F || e[58] !== O || e[59] !== A || e[60] !== be || e[61] !== W ? (Me = () => {
            if (!F || D.current) return;
            D.current = !0;
            let e = Qe({
                checkoutId: k,
                checkoutPlanType: G,
                postCheckoutResult: O,
                processorEntity: A ?? void 0
            });
            !H && e != null && e.checkoutSessionId === k && r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                checkpoint: `checkout_success_latency`,
                flow: L ? `durable_business` : `standard_business`,
                source: W,
                checkoutSessionId: k,
                targetWorkspaceId: P ?? void 0,
                durationMs: e.durationMs,
                checkoutKind: M,
                entryPoint: N,
                planType: G
            }), r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                checkpoint: `payment_confirmed`,
                flow: L ? `durable_business` : `standard_business`,
                source: W,
                checkoutSessionId: k ?? void 0,
                targetWorkspaceId: P ?? void 0,
                checkoutKind: M,
                entryPoint: N,
                planType: G
            }), r.logEvent(`Subscription: Payment Success Page`, {
                plan_type: G
            });
            let t = k ?? void 0,
                n = A ?? void 0,
                i = r.logStructuredEvent(`ChatgptCheckoutPaymentSuccessPage`, {
                    checkoutPlanType: G,
                    checkoutId: t,
                    processorEntity: n,
                    checkoutKind: M,
                    entryPoint: N
                });
            x.logEvent(`chatgpt_team_payment_success`, void 0, i ? {
                unique_event_id: i
            } : void 0), be && je({
                accountId: P,
                location: `PaymentsSuccessTeamPage`,
                planName: G
            }), g()
        }, Ne = [P, G, k, M, N, L, H, F, O, A, be, W], e[50] = P, e[51] = M, e[52] = G, e[53] = k, e[54] = N, e[55] = L, e[56] = H, e[57] = F, e[58] = O, e[59] = A, e[60] = be, e[61] = W, e[62] = Me, e[63] = Ne) : (Me = e[62], Ne = e[63]), (0, Q.useEffect)(Me, Ne);
        let Pe;
        e[64] !== P || e[65] !== M || e[66] !== G || e[67] !== k || e[68] !== N || e[69] !== L || e[70] !== F || e[71] !== A || e[72] !== n || e[73] !== W ? (Pe = () => {
            if (!F || L || !P) return;
            let e = !1,
                t = null,
                i = Date.now(),
                a = 0,
                o = !1;
            r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                checkpoint: `account_resolution_started`,
                flow: `standard_business`,
                source: W,
                checkoutSessionId: k ?? void 0,
                targetWorkspaceId: P,
                checkoutKind: M,
                entryPoint: N,
                planType: G,
                timeoutMs: Pn
            });
            let s = e => {
                    x.logEvent(`chatgpt_team_success_account_resolution`, null, {
                        account_state: e,
                        previously_missing: T.current ? `true` : `false`
                    })
                },
                c = () => {
                    (async () => {
                        if (e || !P) return;
                        a += 1;
                        try {
                            await n.refetchQueries({
                                queryKey: ne().queryKey
                            })
                        } catch (e) {
                            let t = e;
                            o || (o = !0, r.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                                checkpoint: `account_refresh_failed`,
                                flow: `standard_business`,
                                source: W,
                                severity: `warning`,
                                checkoutSessionId: k ?? void 0,
                                targetWorkspaceId: P,
                                attempt: a,
                                durationMs: Date.now() - i,
                                errorType: t instanceof Error ? t.name : typeof t
                            }))
                        }
                        if (e) return;
                        let l;
                        try {
                            ({
                                updatedAccount: l
                            } = await oe(n, P))
                        } catch (e) {
                            let t = e;
                            throw r.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                                checkpoint: `workspace_switch_failed`,
                                flow: `standard_business`,
                                source: W,
                                severity: `error`,
                                checkoutSessionId: k ?? void 0,
                                targetWorkspaceId: P,
                                attempt: a,
                                durationMs: Date.now() - i,
                                errorType: t instanceof Error ? t.name : typeof t
                            }), t
                        }
                        if (!e) {
                            if (l) {
                                E.current || (E.current = !0, s(`found`), r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                                    checkpoint: `workspace_ready`,
                                    flow: `standard_business`,
                                    source: W,
                                    checkoutSessionId: k ?? void 0,
                                    targetWorkspaceId: P,
                                    checkoutKind: M,
                                    entryPoint: N,
                                    planType: G,
                                    durationMs: Date.now() - i,
                                    retryCount: a - 1,
                                    previouslyMissing: T.current
                                }));
                                return
                            }
                            if (T.current || (s(`missing`), T.current = !0, r.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                                    checkpoint: `workspace_missing_after_payment`,
                                    flow: `standard_business`,
                                    source: W,
                                    severity: `warning`,
                                    checkoutSessionId: k ?? void 0,
                                    targetWorkspaceId: P,
                                    attempt: a,
                                    durationMs: Date.now() - i
                                })), Date.now() - i >= Pn) {
                                r.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                                    checkpoint: `account_resolution_timed_out`,
                                    flow: `standard_business`,
                                    source: W,
                                    severity: `error`,
                                    checkoutSessionId: k ?? void 0,
                                    targetWorkspaceId: P,
                                    checkoutKind: M,
                                    entryPoint: N,
                                    planType: G,
                                    durationMs: Date.now() - i,
                                    retryCount: a - 1,
                                    timeoutMs: Pn
                                }), Ke({
                                    checkoutSessionId: k ?? void 0,
                                    checkoutPlanType: G,
                                    processorEntity: A ?? void 0,
                                    checkoutKind: M,
                                    entryPoint: N,
                                    accessStage: `team_account_resolution`,
                                    failureReason: `account_resolution_timeout`
                                });
                                return
                            }
                            t = setTimeout(c, Nn)
                        }
                    })()
                };
            return c(), () => {
                e = !0, t != null && clearTimeout(t)
            }
        }, e[64] = P, e[65] = M, e[66] = G, e[67] = k, e[68] = N, e[69] = L, e[70] = F, e[71] = A, e[72] = n, e[73] = W, e[74] = Pe) : Pe = e[74];
        let Ie = a?.id,
            Le;
        e[75] !== P || e[76] !== M || e[77] !== G || e[78] !== k || e[79] !== N || e[80] !== L || e[81] !== F || e[82] !== A || e[83] !== n || e[84] !== W || e[85] !== Ie ? (Le = [P, M, G, k, Ie, N, L, F, A, n, W], e[75] = P, e[76] = M, e[77] = G, e[78] = k, e[79] = N, e[80] = L, e[81] = F, e[82] = A, e[83] = n, e[84] = W, e[85] = Ie, e[86] = Le) : Le = e[86], (0, Q.useEffect)(Pe, Le);
        let ze;
        e[87] !== P || e[88] !== M || e[89] !== G || e[90] !== k || e[91] !== N || e[92] !== L || e[93] !== de || e[94] !== A || e[95] !== n || e[96] !== s ? (ze = () => {
            if (!L || !k || de) return;
            let e = new AbortController,
                t = Ct,
                i = Date.now(),
                a = j()?.user?.id,
                o = () => !e.signal.aborted && a != null && j()?.user?.id === a,
                l = 0,
                u = 0,
                f = `workspace_provisioning_failed`;
            return r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                checkpoint: `account_resolution_started`,
                flow: `durable_business`,
                checkoutSessionId: k,
                targetWorkspaceId: P ?? void 0,
                checkoutKind: M,
                entryPoint: N,
                planType: G,
                timeoutMs: Ct
            }), (async () => {
                try {
                    let m = await yt({
                        checkoutSessionId: k,
                        onStatusChange: e => {
                            o() && (p({
                                checkoutSessionId: k,
                                state: e.state,
                                failure: null
                            }), l += 1, r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                                checkpoint: `workspace_provisioning_status_changed`,
                                flow: `durable_business`,
                                checkoutSessionId: k,
                                targetWorkspaceId: e.workspaceId ?? P ?? void 0,
                                step: e.state,
                                attempt: l,
                                durationMs: Date.now() - i
                            }))
                        },
                        signal: e.signal
                    });
                    if (!o()) return;
                    let g = An(m.workspaceId, m);
                    h({
                        checkoutSessionId: k,
                        workspaceId: g
                    });
                    let _ = Date.now();
                    t = Fn;
                    let v = Ce(Fn),
                        y = ve([e.signal, v]),
                        b = null,
                        x = !1;
                    for (; !e.signal.aborted;) {
                        try {
                            if (x && (f = `account_refresh_failed`, m = await yt({
                                    checkoutSessionId: k,
                                    signal: y
                                }), m.workspaceId !== g && jn(new K(`checkout_mismatch`, m))), x = !0, f = `account_discovery_failed`, u += 1, await ee(n, y, {
                                    userId: a,
                                    workspaceAccount: m.workspaceAccount
                                }), f = `workspace_switch_failed`, y.throwIfAborted(), !o()) return;
                            let {
                                updatedAccount: e
                            } = await c(oe(n, g, !0), y);
                            if (e && j()?.user?.id === a && d(j()?.accessToken) === g) break
                        } catch (e) {
                            let t = e;
                            if (!o()) return;
                            if (t instanceof K && jn(t), v.aborted && jn(new K(`timed_out`, m)), Date.now() - _ >= Fn) {
                                b = t;
                                break
                            }
                        }
                        Date.now() - _ >= Fn && jn(new K(`timed_out`, m));
                        try {
                            await vt(Nn, y)
                        } catch {
                            if (!o()) return;
                            jn(new K(`timed_out`, m))
                        }
                    }
                    if (!o()) return;
                    b != null && jn(b), r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        checkpoint: `workspace_ready`,
                        flow: `durable_business`,
                        checkoutSessionId: k,
                        targetWorkspaceId: g,
                        checkoutKind: M,
                        entryPoint: N,
                        planType: G,
                        durationMs: Date.now() - i,
                        retryCount: Math.max(0, u - 1)
                    }), P !== g && s(e => (e.set(`account_id`, g), e), {
                        replace: !0
                    })
                } catch (e) {
                    let n = e;
                    if (!o()) return;
                    let a = n instanceof K && n.reason === `timed_out`;
                    p({
                        checkoutSessionId: k,
                        state: `failed`,
                        failure: {
                            actionRequired: n instanceof K && n.reason === `failed_action_required`,
                            recoveryWorkspaceId: n instanceof K && (n.status?.failureCode === `workspace_inactive` || n.status?.failureCode === `checkout_subscription_canceled` || n.status?.authenticationRequired === !0) ? n.status.workspaceId : null,
                            authenticationRequired: n instanceof K && n.status?.authenticationRequired
                        }
                    });
                    let s = n instanceof K ? n.status : null;
                    r.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                        checkpoint: a ? t === Fn ? `account_resolution_timed_out` : `workspace_provisioning_timed_out` : f,
                        flow: `durable_business`,
                        severity: `error`,
                        checkoutSessionId: k,
                        targetWorkspaceId: s?.workspaceId ?? P ?? void 0,
                        checkoutKind: M,
                        entryPoint: N,
                        planType: G,
                        step: s?.state,
                        durationMs: Date.now() - i,
                        retryCount: Math.max(0, u - 1),
                        timeoutMs: a ? t : void 0,
                        errorType: n instanceof Error ? n.name : typeof n
                    }), Ke({
                        checkoutSessionId: k,
                        checkoutPlanType: G,
                        processorEntity: A ?? void 0,
                        checkoutKind: M,
                        entryPoint: N,
                        accessStage: `team_account_resolution`,
                        failureReason: a ? `account_resolution_timeout` : `account_status_missing`
                    }), S().danger(re.somethingWentWrong)
                }
            })(), () => e.abort()
        }, e[87] = P, e[88] = M, e[89] = G, e[90] = k, e[91] = N, e[92] = L, e[93] = de, e[94] = A, e[95] = n, e[96] = s, e[97] = ze) : ze = e[97];
        let Be = a?.id,
            Ve;
        if (e[98] !== P || e[99] !== M || e[100] !== G || e[101] !== k || e[102] !== N || e[103] !== L || e[104] !== de || e[105] !== A || e[106] !== n || e[107] !== s || e[108] !== Be ? (Ve = [P, M, G, k, Be, N, L, de, A, n, s], e[98] = P, e[99] = M, e[100] = G, e[101] = k, e[102] = N, e[103] = L, e[104] = de, e[105] = A, e[106] = n, e[107] = s, e[108] = Be, e[109] = Ve) : Ve = e[109], (0, Q.useEffect)(ze, Ve), O === $e.UserMismatch) {
            let t;
            return e[110] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(nt, {}), e[110] = t) : t = e[110], t
        }
        if (!F) {
            if (I != null) {
                let t;
                return e[111] === I.paymentConfirmed ? t = e[112] : (t = (0, $.jsx)(Tn, {
                    actionRequired: !1,
                    paymentConfirmed: I.paymentConfirmed
                }), e[111] = I.paymentConfirmed, e[112] = t), t
            }
            return null
        }
        if (L && !de) {
            if (B != null) {
                let t;
                return e[113] !== B.actionRequired || e[114] !== B.authenticationRequired || e[115] !== B.recoveryWorkspaceId ? (t = (0, $.jsx)(Tn, {
                    actionRequired: B.actionRequired,
                    recoveryWorkspaceId: B.recoveryWorkspaceId,
                    authenticationRequired: B.authenticationRequired
                }), e[113] = B.actionRequired, e[114] = B.authenticationRequired, e[115] = B.recoveryWorkspaceId, e[116] = t) : t = e[116], t
            }
            let t;
            e[117] === z ? t = e[118] : (t = kn(z), e[117] = z, e[118] = t);
            let n;
            return e[119] === t ? n = e[120] : (n = (0, $.jsx)(Et, {
                stage: t
            }), e[119] = t, e[120] = n), n
        }
        let He;
        return e[121] !== P || e[122] !== L || e[123] !== xe || e[124] !== H || e[125] !== W ? (He = H ? (0, $.jsx)(bn, {}) : (0, $.jsx)(cn, {
            durableCheckoutWorkspaceId: L ? P ?? void 0 : void 0,
            isTrial: !1,
            isTeam: !0,
            checkoutSource: W,
            ...xe ? {
                isPostTeamOnboardingWorkActivationEligible: !0
            } : {}
        }), e[121] = P, e[122] = L, e[123] = xe, e[124] = H, e[125] = W, e[126] = He) : He = e[126], He
    })
}));
e((() => {
    zn()
}))();
export {
    Rn as
    default, Ln as shouldRevalidate
};
//# sourceMappingURL=payments.success-team-b9dc3qo5.js.map