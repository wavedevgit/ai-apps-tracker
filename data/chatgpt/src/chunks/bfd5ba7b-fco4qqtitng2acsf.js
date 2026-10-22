const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/33d473af-nxhpgklx2n1k8ump.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-i89nb6zlze66idsz.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/0e2455cf-5y65kiuirs6pcl0x.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    $T as r,
    Ait as i,
    Drt as a,
    Eat as o,
    Ert as s,
    Fst as c,
    Ga as l,
    Ist as u,
    K as d,
    L1 as f,
    LU as p,
    Lnt as m,
    N4 as h,
    P4 as g,
    Pst as _,
    Rit as ee,
    Sat as v,
    V1 as y,
    Xnt as b,
    Xrt as x,
    Y7 as S,
    Ynt as C,
    Z as w,
    Znt as T,
    _rt as E,
    a2 as D,
    bat as O,
    crt as k,
    drt as A,
    eE as j,
    f0 as M,
    grt as N,
    hrt as P,
    i8 as F,
    lV as I,
    n0 as L,
    o0 as R,
    o2 as z,
    p0 as B,
    prt as te,
    q1 as ne,
    qa as re,
    r3 as V,
    sct as ie,
    tV as ae,
    uit as H,
    wat as U,
    xct as oe,
    yat as se,
    yit as ce,
    z1 as W,
    zU as le,
    znt as ue
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    At as de,
    Bn as fe,
    Ht as pe,
    Ln as me,
    N as he,
    Nn as ge,
    Nt as _e,
    Q as ve,
    Rn as ye,
    Vn as be,
    Vt as xe,
    cn as Se,
    kt as Ce,
    ln as we,
    s as Te,
    wn as Ee,
    zn as De
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    BWn as Oe,
    Brn as ke,
    Can as Ae,
    Dln as G,
    Eln as je,
    Fin as Me,
    Gsn as Ne,
    Hsn as Pe,
    J2t as Fe,
    Kan as Ie,
    Ksn as Le,
    Min as Re,
    Nin as ze,
    VWn as Be,
    Vsn as Ve,
    Wsn as He,
    Xan as Ue,
    ZGn as We,
    _an as Ge,
    cm as Ke,
    fn as qe,
    gn as Je,
    hn as Ye,
    itt as Xe,
    pn as Ze,
    q2t as Qe,
    rtt as $e,
    um as et,
    van as K,
    zsn as tt
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    Gg as nt,
    Jg as rt,
    Lh as it,
    jh as at
} from "./c2675c8c-4fpunyxk1uf8cfp1.js";
import {
    r as ot,
    t as st
} from "./ee0eeb85-b2k9oblldj3ey51g.js";
import {
    i as ct,
    r as lt
} from "./58459bbe-es3bgz2kiguvmp7j.js";
import {
    a as ut,
    i as dt,
    t as ft,
    v as pt
} from "./a4eef3c0-j9y6omvic18it1s5.js";
import {
    n as mt,
    r as ht,
    t as gt
} from "./97a55ca1-ob1vz7gjgz2uk2e8.js";
import {
    n as _t,
    t as vt
} from "./4cc06ac6-glrg6m8s8metdyvg.js";
import {
    i as yt,
    n as bt,
    r as xt,
    t as St
} from "./efd279b6-b90gmea5n9iovib1.js";
import {
    a as Ct,
    c as wt,
    n as Tt,
    t as Et
} from "./a6f4f526-k1uv33kvtyv2vfw9.js";

function Dt(e) {
    let t = vt(C.getItem(b.CheckoutConfirmLatencyPending), e);
    return t.status === `ready` && t.pending.is_checkout_modal_enabled === !0
}

function Ot({
    checkoutId: e,
    checkoutPlanType: t,
    postCheckoutResult: n,
    processorEntity: r
}) {
    let i = C.getItem(b.CheckoutConfirmLatencyPending) ?? null;
    if (!i) return;
    let a = vt(i, e);
    if (a.status === `discard`) {
        C.removeItem(b.CheckoutConfirmLatencyPending);
        return
    }
    if (a.status === `other_checkout`) return;
    let {
        pending: o,
        durationMs: s
    } = a;
    return U.addAction(`checkout.confirm.latency_ms`, {
        duration_ms: s,
        requires_manual_approval: o.requires_manual_approval === !0,
        checkout_session_id: e ?? o.checkout_session_id,
        processor_entity: r ?? o.processor_entity,
        plan_type: t,
        result_type: n,
        measurement_point: `return_page`
    }), C.removeItem(b.CheckoutConfirmLatencyPending), {
        durationMs: s,
        checkoutSessionId: o.checkout_session_id
    }
}
var kt = e((() => {
    _t(), o(), T()
}));

function q(e) {
    h(e, {
        sessionChanged: !1
    })
}

function At(e) {
    return e.isPersonalAccount() && e.isPlus() && e.hasPaidSubscription() && !e.isActiveSubscriptionGratis() && e.data.subscriptionStatus.subscriptionPlan === u.PLUS
}

function J({
    checkoutPlanType: e,
    checkoutSessionId: t,
    currentAccount: n,
    hasExplicitCheckoutPlanType: r,
    isStudents2026Checkout: i = !1,
    intl: a,
    message: o,
    navigate: s,
    toaster: c
}) {
    if (c.warning(a.formatMessage(o), {
            duration: 5
        }), (i || xt(t)) && C.removeItem(b.CheckoutFrom), n.isPersonalAccount()) {
        let e = St({
            checkoutSessionId: t,
            accountId: n.id,
            accountUserId: n.normalizedAccountUserId,
            status: `failure`
        });
        if (e != null) {
            s(e);
            return
        }
    }
    let l = new URL(jt(e, r), window.location.origin),
        u = Ve(t);
    u != null && (l.searchParams.set(He, u), l.searchParams.set(`mweb_fallback`, `1`)), s(`${l.pathname}${l.search}${l.hash}`)
}

function Y(e) {
    return Object.values(_).some(t => t === e)
}

function jt(e, t) {
    return !t || !Y(e) || !K(e) || !P(Zt).get(Qt, !1) ? `/#pricing` : `/?cta_tab=personal&highlight_plan=${e}#pricing`
}

function Mt({
    checkoutPlanType: e,
    eventId: t
}) {
    m.logValueEventWithStatsig({
        segmentEventName: `Subscription: Payment Success Page`,
        statsigEventName: `chatgpt_plan_payment_success_page`,
        eventId: t,
        statsigValue: null,
        data: {
            plan_type: e
        },
        statsigMetadata: {
            plan_type: e
        }
    }), F(), se.deleteCookie(v.DogfoodingAccountType), e === _.PLUS && k.logEvent(`chatgpt_plus_payment_success_page`)
}
async function Nt({
    hasPaidSubscription: e,
    intl: t,
    queryClient: n
}) {
    try {
        await ot({
            hasPaidSubscription: e,
            intl: t,
            queryClient: n
        })
    } catch (t) {
        a.error(t), U.addError(t instanceof Error ? t : Error(`Failed to replay pending image download after checkout`), {
            source: `payments.success`,
            has_paid_subscription: e
        })
    }
}

function Pt(e) {
    if (!e.startsWith(`/`)) return e;
    let t = new URL(e, window.location.origin);
    return t.searchParams.set(`refresh_account`, `true`), `${t.pathname}${t.search}${t.hash}`
}

function Ft({
    checkoutPlanType: e,
    completion: t,
    context: n
}) {
    return n?.upsellContextId === `work` && Y(e) && K(e) && (t.checkout_kind == null || t.checkout_kind === V.Standard) ? n.threadId != null && n.sitePreview != null ? lt(n.threadId, n.sitePreview) : n.threadId == null ? `/?surface=work` : ae(n.threadId) : n?.threadId == null || !Y(e) || !K(e) || t.checkout_kind != null && t.checkout_kind !== V.Standard || !te($t).get(nn, []).includes(n.upsellContextId) ? null : P(en).get(rn, !1) ? ae(n.threadId) : null
}

function It({
    completion: e,
    checkoutFrom: t,
    checkoutPlanType: n,
    checkoutSessionId: r,
    currentAccount: i,
    defaultHomeRedirectUrl: o,
    hasExplicitCheckoutPlanType: s,
    intl: c,
    navigate: l,
    postCheckoutResult: u,
    queryClient: d,
    toaster: f
}) {
    if (`kind` in e && e.kind === V.CodexTeam) {
        Re(), L(d, e.workspace_id).then(() => {
            l({
                pathname: at,
                search: `?account_id=${e.workspace_id}`
            }, {
                replace: !0
            })
        }).catch(e => {
            a.error(e)
        });
        return
    }
    let p = u === `success` && (e.checkout_kind == null || e.checkout_kind === V.Standard) ? Ie(r) : null,
        m = ze(),
        h = u === `success` && Y(n) && K(n) && (e.checkout_kind == null || e.checkout_kind === V.Standard) ? Ve(r) : null,
        g = t == null ? Ft({
            checkoutPlanType: n,
            completion: e,
            context: m
        }) : null;
    if (Re(), e.entry_point === G.STUDENTS_2026) {
        let e = y() ?? i,
            t = e.isPersonalAccount() && e.normalizedAccountUserId != null && e.id === i.id && e.normalizedAccountUserId === i.normalizedAccountUserId ? bt({
                checkoutSessionId: r,
                accountId: e.id,
                accountUserId: e.normalizedAccountUserId
            }) : null;
        if (u !== `success` || t == null || e.normalizedAccountUserId == null || !e.isPlus() || !e.hasPaidSubscription()) {
            J({
                checkoutPlanType: n,
                checkoutSessionId: r,
                currentAccount: e,
                hasExplicitCheckoutPlanType: s,
                isStudents2026Checkout: !0,
                intl: c,
                message: H.somethingWentWrong,
                navigate: l,
                toaster: f
            });
            return
        }
        let a = St({
            checkoutSessionId: r,
            accountId: e.id,
            accountUserId: e.normalizedAccountUserId,
            status: `success`
        });
        if (a == null) {
            J({
                checkoutPlanType: n,
                checkoutSessionId: r,
                currentAccount: e,
                hasExplicitCheckoutPlanType: s,
                isStudents2026Checkout: !0,
                intl: c,
                message: H.somethingWentWrong,
                navigate: l,
                toaster: f
            });
            return
        }
        rt(`enrollment_completed`, {
            billingPath: `free_checkout`,
            identity: {
                accountId: e.id,
                accountUserId: e.normalizedAccountUserId
            }
        });
        let o = new URL(a, window.location.origin);
        o.searchParams.set(`refresh_account`, `true`), C.removeItem(b.CheckoutFrom), q(`${o.pathname}${o.search}`)
    } else if (p != null) C.removeItem(b.CheckoutFrom), q(Pt(p.returnPath));
    else if (h != null) {
        let e = new URL(h);
        e.searchParams.delete(Ne), e.searchParams.set(`refresh_account`, `true`), tt(r), C.removeItem(b.CheckoutFrom), q(e.href)
    } else t ? (C.removeItem(b.CheckoutFrom), q(Pt(qe[t]))) : g == null ? u === `success` && s && !(`kind` in e) && (e.checkout_kind == null || e.checkout_kind === V.Standard) && (n === _.PLUS || n === _.PROLITE || n === _.PRO || n === _.PROMAX) && t == null && m == null && P(tn).get(an, !1) ? q(Pt(`/?surface=work`)) : (f.success(n === _.SCI ? c.formatMessage($.sciPaymentConfirmationToastMessage) : c.formatMessage($.paymentConfirmationToastMessage, {
        planType: n,
        planName: Qe(n)
    }), {
        duration: 5
    }), o == null ? q() : q(o)) : q(Pt(g))
}
async function Lt(e) {
    try {
        await e.refetchQueries({
            queryKey: W().queryKey
        })
    } catch {
        return null
    }
    return y()
}
async function Rt({
    checkoutAccount: e,
    isProvisioned: t = e => e.isPlus() && e.hasPaidSubscription(),
    isCancelled: n,
    queryClient: r
}) {
    let i = await Lt(r);
    for (let a of Xt) {
        if (n()) return null;
        if (i != null && (!(i.isPersonalAccount() && i.id === e.id && i.normalizedAccountUserId === e.normalizedAccountUserId) || t(i))) return i;
        if (await new Promise(e => {
                window.setTimeout(e, a)
            }), n()) return null;
        i = await Lt(r)
    }
    return i
}
async function zt(e, t) {
    try {
        await e.refetchQueries({
            queryKey: W().queryKey
        }, {
            throwOnError: !0
        })
    } catch {
        return null
    }
    let n = e.getQueryData(W().queryKey);
    return n == null ? null : f(n).find(e => e.id === t) ?? null
}
async function Bt(e) {
    try {
        await e.refetchQueries({
            queryKey: W().queryKey
        }, {
            throwOnError: !0
        })
    } catch {
        return null
    }
    let t = e.getQueryData(W().queryKey);
    return t == null ? null : f(t).find(e => e.structure === c.PERSONAL && e.planType === _.PLUS && e.hasPaidSubscription()) ?? null
}

function Vt(e) {
    return e.willDeactivateAtTermEnd() || e.isDeactivated()
}
async function Ht(e, t) {
    try {
        let {
            updatedAccount: n
        } = await L(e, t);
        return n
    } catch (e) {
        return U.addError(e instanceof Error ? e : Error(`Failed to switch to personal Plus after cancellation`), {
            source: `payments.success.business_cancel_to_plus`
        }), !1
    }
}
async function Ut(e) {
    await S.safePost(`/subscriptions/cancel`, {
        requestBody: {
            account_id: e
        }
    })
}

function Wt(e) {
    "use forget";
    let t = (0, X.c)(88),
        {
            checkoutFrom: n,
            checkoutPlanType: i,
            currentAccount: a,
            hasExplicitCheckoutPlanType: o,
            loaderData: s,
            sourceSearchParams: c
        } = e,
        u = De(),
        f = _e(),
        p = he(),
        h = le(),
        g = (0, Z.useRef)(!1),
        b = (0, Z.useRef)(null),
        x = (0, Z.useRef)(!1),
        [S, C] = (0, Z.useState)(null),
        w, T;
    t[0] !== a || t[1] !== S ? (w = () => {
        S != null && (a.id !== S.accountId || a.normalizedAccountUserId !== S.accountUserId) && S.onClose()
    }, T = [a, S], t[0] = a, t[1] = S, t[2] = w, t[3] = T) : (w = t[2], T = t[3]), (0, Z.useEffect)(w, T);
    let D;
    t[4] === s.checkout_id ? D = t[5] : (D = Dt(s.checkout_id), t[4] = s.checkout_id, t[5] = D);
    let O = D,
        k = s.postCheckoutResult === `success` && o && (i === _.PLUS || i === _.PROLITE || i === _.PRO || i === _.PROMAX) && !(`kind` in s.completion) && (s.completion.checkout_kind == null || s.completion.checkout_kind === V.Standard) ? i === _.PLUS ? d : Ke : null,
        j;
    t[6] !== i || t[7] !== s.checkout_id ? (j = () => Tt({
        checkoutPlanType: i,
        checkoutSessionId: s.checkout_id
    }), t[6] = i, t[7] = s.checkout_id, t[8] = j) : j = t[8];
    let [M] = (0, Z.useState)(j), [N, P] = (0, Z.useState)(null), [F, I] = (0, Z.useState)(!1), L;
    t[9] !== u || t[10] !== p || t[11] !== h ? (L = async e => {
        I(!0);
        let t = await Bt(p);
        if (t == null) return U.addError(Error(`Unable to verify personal Plus after checkout`), {
            source: `payments.success.business_cancel_to_plus`
        }), P({
            stage: `plus_unconfirmed`,
            handoff: e
        }), I(!1), !1;
        let n = await zt(p, e.businessAccountId);
        if (n == null || !n.isSelfServeBusiness()) {
            U.addError(Error(`Unable to verify intended Business account after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            });
            let t = m.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return E(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
                unique_event_id: t
            } : void 0), P({
                stage: `business_cancellation_failed`,
                handoff: e
            }), I(!1), !1
        }
        let r = Vt(n);
        if (!r) {
            let t;
            try {
                await Ut(e.businessAccountId)
            } catch (e) {
                t = e
            }
            let n = await zt(p, e.businessAccountId);
            r = n?.isSelfServeBusiness() === !0 && Vt(n), r || U.addError(t instanceof Error ? t : Error(`Unable to confirm Business cancellation after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            })
        }
        if (!r) {
            let t = m.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return E(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
                unique_event_id: t
            } : void 0), P({
                stage: `business_cancellation_failed`,
                handoff: e
            }), I(!1), !1
        }
        let i = m.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
            step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_SUCCEEDED`,
            legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_succeeded`
        });
        return E(`chatgpt_business_cancel_to_plus_business_cancellation_succeeded`, void 0, i ? {
            unique_event_id: i
        } : void 0), await Promise.all([ft(), A()]), await Ht(p, t.id) ? (Et(), P(null), h.success(u.formatMessage($.businessCancelToPlusSuccessMessage), {
            duration: 5
        }), I(!1), q(), !0) : (P({
            stage: `personal_switch_failed`,
            handoff: e
        }), I(!1), !1)
    }, t[9] = u, t[10] = p, t[11] = h, t[12] = L) : L = t[12];
    let R = L,
        z;
    t[13] !== n || t[14] !== i || t[15] !== R || t[16] !== a || t[17] !== k || t[18] !== o || t[19] !== u || t[20] !== O || t[21] !== s.checkout_id || t[22] !== s.completion || t[23] !== s.postCheckoutResult || t[24] !== s.processor_entity || t[25] !== M || t[26] !== f || t[27] !== p || t[28] !== c || t[29] !== h || t[30] !== S ? (z = () => {
        if (S != null) return;
        let e = !1,
            t = mt(s.checkout_id, a),
            r = xt(s.checkout_id),
            l = a.isPersonalAccount() && a.normalizedAccountUserId != null && bt({
                checkoutSessionId: s.checkout_id,
                accountId: a.id,
                accountUserId: a.normalizedAccountUserId
            }) != null,
            d = s.postCheckoutResult === `success` && !(`kind` in s.completion) && s.completion.entry_point === G.STUDENTS_2026,
            w = n === Ze.STUDENTS && o && i === _.PLUS,
            T = r || d || w,
            D = s.postCheckoutResult === `success` && !(`kind` in s.completion) && (s.completion.checkout_kind == null || s.completion.checkout_kind === V.Standard) && (r || d || s.completion.entry_point == null && w),
            A = () => {
                if (g.current) return;
                g.current = !0;
                let e = m.logStructuredEvent(`ChatgptCheckoutPaymentSuccessPage`, {
                    checkoutPlanType: i,
                    checkoutId: s.checkout_id,
                    processorEntity: s.processor_entity ?? void 0,
                    isCheckoutModalEnabled: O,
                    ...s.postCheckoutResult === `success` && s.completion.checkout_kind != null ? {
                        checkoutKind: s.completion.checkout_kind,
                        entryPoint: s.completion.entry_point ?? void 0
                    } : {}
                });
                s.postCheckoutResult === `success` && Xe({
                    currentAccount: a,
                    location: `PaymentsSuccessPage`,
                    planName: i
                }), Mt({
                    checkoutPlanType: i,
                    eventId: e
                })
            };
        Ot({
            checkoutId: s.checkout_id,
            checkoutPlanType: i,
            postCheckoutResult: s.postCheckoutResult,
            processorEntity: s.processor_entity ?? void 0
        });
        let j = () => (b.current?.checkoutId !== s.checkout_id && (b.current = {
                checkoutId: s.checkout_id,
                pending: ee({
                    reason: `checkout_success`,
                    path: `/payments/success`
                }).catch(Gt)
            }), b.current.pending),
            N = () => {
                (async () => {
                    if (s.postCheckoutResult !== `success`) return;
                    if (`kind` in s.completion && s.completion.kind === V.CodexTeam) {
                        It({
                            completion: s.completion,
                            checkoutFrom: n,
                            checkoutPlanType: i,
                            checkoutSessionId: s.checkout_id,
                            currentAccount: a,
                            defaultHomeRedirectUrl: k,
                            hasExplicitCheckoutPlanType: o,
                            intl: u,
                            navigate: f,
                            postCheckoutResult: s.postCheckoutResult,
                            queryClient: p,
                            toaster: h
                        });
                        return
                    }
                    if (M != null) {
                        if (await j(), e) return;
                        if (!x.current) {
                            x.current = !0;
                            let e = m.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                            });
                            E(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
                                unique_event_id: e
                            } : void 0), await R(M)
                        }
                        return
                    }
                    let r = a,
                        d = D && (!a.isPlus() || !a.hasPaidSubscription());
                    if (a.isFree() || d || t) {
                        if (r = D && l || t ? await Rt({
                                isProvisioned: t ? At : void 0,
                                checkoutAccount: a,
                                isCancelled: () => e,
                                queryClient: p
                            }) : await Lt(p), e) return;
                        (!r || r.isFree()) && (ut({
                            checkoutSessionId: s.checkout_id,
                            checkoutPlanType: i,
                            processorEntity: s.processor_entity ?? void 0,
                            isCheckoutModalEnabled: O,
                            checkoutKind: s.completion.checkout_kind ?? void 0,
                            entryPoint: s.completion.entry_point ?? void 0,
                            sourceSearchParams: c,
                            accessStage: `personal_account_refresh`,
                            failureReason: r == null ? `account_status_missing` : `account_still_free`
                        }), p.invalidateQueries(W()))
                    }
                    if (await j(), e || (await Nt({
                            hasPaidSubscription: r?.hasPaidSubscription() ?? !1,
                            intl: u,
                            queryClient: p
                        }), e)) return;
                    if (D) {
                        let e = a.isFree() || d ? r : y() ?? a;
                        if (!((e != null && e.isPersonalAccount() && e.normalizedAccountUserId != null ? bt({
                                checkoutSessionId: s.checkout_id,
                                accountId: e.id,
                                accountUserId: e.normalizedAccountUserId
                            }) : null) != null && e != null && e.isPersonalAccount() && e.isPlus() && e.hasPaidSubscription() && e.id === a.id && e.normalizedAccountUserId != null && e.normalizedAccountUserId === a.normalizedAccountUserId)) {
                            pt(`payments_success`, {
                                checkoutPlanType: i,
                                checkoutId: s.checkout_id,
                                processorEntity: s.processor_entity ?? void 0,
                                isCheckoutModalEnabled: O,
                                checkoutKind: s.completion.checkout_kind ?? void 0,
                                entryPoint: G.STUDENTS_2026,
                                outcome: `other_error`
                            }, c), J({
                                checkoutPlanType: i,
                                checkoutSessionId: s.checkout_id,
                                currentAccount: a,
                                hasExplicitCheckoutPlanType: o,
                                isStudents2026Checkout: !0,
                                intl: u,
                                message: H.somethingWentWrong,
                                navigate: f,
                                toaster: h
                            });
                            return
                        }
                        A()
                    }
                    if (await ft(), e) return;
                    let g = e => {
                        let t = e === void 0 ? k : e;
                        It({
                            completion: D ? {
                                ...s.completion,
                                entry_point: G.STUDENTS_2026
                            } : s.completion,
                            checkoutFrom: n,
                            checkoutPlanType: i,
                            checkoutSessionId: s.checkout_id,
                            currentAccount: a,
                            defaultHomeRedirectUrl: t,
                            hasExplicitCheckoutPlanType: o,
                            intl: u,
                            navigate: f,
                            postCheckoutResult: s.postCheckoutResult,
                            queryClient: p,
                            toaster: h
                        })
                    };
                    if (t) {
                        gt(s.checkout_id);
                        let e = y(),
                            t = e?.data.subscriptionStatus.discount;
                        if (e != null && r != null && e.id === a.id && e.normalizedAccountUserId === a.normalizedAccountUserId && At(r) && At(e) && t?.promo_campaign_id === `plus-1-month-free` && t.discount_type === ie.PERCENTAGE && t.amount === 100 && t.duration_num_periods === 1 && r.id === a.id && r.normalizedAccountUserId === a.normalizedAccountUserId && i === _.PLUS && (s.completion.checkout_kind == null || s.completion.checkout_kind === V.Standard)) {
                            C({
                                accountId: a.id,
                                accountUserId: a.normalizedAccountUserId,
                                onClose: () => g(`/?refresh_account=true`)
                            });
                            return
                        }
                    }
                    g()
                })()
            },
            F = () => {
                ft().finally(() => {
                    e || N()
                })
            },
            I = () => {
                (async () => {
                    if (M != null) {
                        let t = await Bt(p);
                        if (e) return;
                        if (t != null) {
                            if (!x.current) {
                                x.current = !0;
                                let e = m.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                    step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                    legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                                });
                                E(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
                                    unique_event_id: e
                                } : void 0), await R(M)
                            }
                            return
                        }
                        P({
                            stage: `plus_unconfirmed`,
                            handoff: M
                        });
                        return
                    }
                    let t = a.isFree() ? await Lt(p) : a;
                    if (!e) {
                        if (t && !t.isFree()) {
                            if (A(), await j(), e || (await Nt({
                                    hasPaidSubscription: t.hasPaidSubscription(),
                                    intl: u,
                                    queryClient: p
                                }), await ft(), e)) return;
                            It({
                                completion: Yt,
                                checkoutFrom: n,
                                checkoutPlanType: i,
                                checkoutSessionId: s.checkout_id,
                                currentAccount: a,
                                defaultHomeRedirectUrl: k,
                                hasExplicitCheckoutPlanType: o,
                                intl: u,
                                navigate: f,
                                postCheckoutResult: s.postCheckoutResult,
                                queryClient: p,
                                toaster: h
                            });
                            return
                        }
                        J({
                            checkoutPlanType: i,
                            checkoutSessionId: s.checkout_id,
                            currentAccount: a,
                            hasExplicitCheckoutPlanType: o,
                            intl: u,
                            toaster: h,
                            navigate: f,
                            message: H.somethingWentWrong
                        })
                    }
                })()
            };
        if (s.postCheckoutResult === `user_mismatch`) return () => {
            e = !0
        };
        if (M == null && T && s.postCheckoutResult !== `success`) return J({
            checkoutPlanType: i,
            checkoutSessionId: s.checkout_id,
            currentAccount: a,
            hasExplicitCheckoutPlanType: o,
            isStudents2026Checkout: !0,
            intl: u,
            toaster: h,
            navigate: f,
            message: s.postCheckoutResult === `payment_failed` ? $.paymentFailedToastMessage : H.somethingWentWrong
        }), () => {
            e = !0
        };
        s.postCheckoutResult !== `success` && gt(s.checkout_id);
        bb533: switch (s.postCheckoutResult) {
            case `success`:
                D ? se.deleteCookie(v.DogfoodingAccountType) : A(), F();
                break bb533;
            case `payment_failed`:
                if (M != null) {
                    window.location.href = wt();
                    break bb533
                }
                J({
                    checkoutPlanType: i,
                    checkoutSessionId: s.checkout_id,
                    currentAccount: a,
                    hasExplicitCheckoutPlanType: o,
                    intl: u,
                    toaster: h,
                    navigate: f,
                    message: $.paymentFailedToastMessage
                });
                break bb533;
            case `other_error`:
                I()
        }
        return () => {
            e = !0
        }
    }, t[13] = n, t[14] = i, t[15] = R, t[16] = a, t[17] = k, t[18] = o, t[19] = u, t[20] = O, t[21] = s.checkout_id, t[22] = s.completion, t[23] = s.postCheckoutResult, t[24] = s.processor_entity, t[25] = M, t[26] = f, t[27] = p, t[28] = c, t[29] = h, t[30] = S, t[31] = z) : z = t[31];
    let B;
    if (t[32] !== n || t[33] !== i || t[34] !== R || t[35] !== a || t[36] !== k || t[37] !== o || t[38] !== u || t[39] !== O || t[40] !== s || t[41] !== M || t[42] !== f || t[43] !== p || t[44] !== c || t[45] !== h || t[46] !== S ? (B = [n, i, R, S, a, k, o, u, O, s, M, f, p, c, h], t[32] = n, t[33] = i, t[34] = R, t[35] = a, t[36] = k, t[37] = o, t[38] = u, t[39] = O, t[40] = s, t[41] = M, t[42] = f, t[43] = p, t[44] = c, t[45] = h, t[46] = S, t[47] = B) : B = t[47], (0, Z.useEffect)(z, B), s.postCheckoutResult === `user_mismatch`) {
        let e;
        return t[48] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(sn, {}), t[48] = e) : e = t[48], e
    }
    if (S != null) {
        let e = a.id === S.accountId && a.normalizedAccountUserId === S.accountUserId,
            n;
        t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (n = {}, t[49] = n) : n = t[49];
        let r;
        return t[50] !== e || t[51] !== S.onClose ? (r = (0, Q.jsx)(l, {
            for: qt,
            open: e,
            onClose: S.onClose,
            withProps: n
        }), t[50] = e, t[51] = S.onClose, t[52] = r) : r = t[52], r
    }
    if (N != null) {
        let e = N.stage === `plus_unconfirmed`,
            n = N.stage === `personal_switch_failed`,
            i;
        t[53] !== u || t[54] !== n || t[55] !== e ? (i = u.formatMessage(e ? $.plusConfirmationRecoveryTitle : n ? $.personalPlusSwitchRecoveryTitle : $.businessCancellationRecoveryTitle), t[53] = u, t[54] = n, t[55] = e, t[56] = i) : i = t[56];
        let a;
        t[57] === i ? a = t[58] : (a = (0, Q.jsx)(`h1`, {
            className: `text-token-text-primary text-xl font-semibold`,
            children: i
        }), t[57] = i, t[58] = a);
        let o;
        t[59] !== u || t[60] !== n || t[61] !== e ? (o = u.formatMessage(e ? $.plusConfirmationRecoveryBody : n ? $.personalPlusSwitchRecoveryBody : $.businessCancellationRecoveryBody), t[59] = u, t[60] = n, t[61] = e, t[62] = o) : o = t[62];
        let s;
        t[63] === o ? s = t[64] : (s = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary text-sm leading-6`,
            children: o
        }), t[63] = o, t[64] = s);
        let c;
        t[65] !== N.handoff || t[66] !== R ? (c = () => {
            E(`chatgpt_business_cancel_to_plus_business_cancellation_retry_clicked`), R(N.handoff)
        }, t[65] = N.handoff, t[66] = R, t[67] = c) : c = t[67];
        let l;
        t[68] !== u || t[69] !== n || t[70] !== e ? (l = u.formatMessage(e ? $.retryPlusConfirmationButton : n ? $.retryPersonalPlusSwitchButton : $.retryBusinessCancellationButton), t[68] = u, t[69] = n, t[70] = e, t[71] = l) : l = t[71];
        let d;
        t[72] !== F || t[73] !== c || t[74] !== l ? (d = (0, Q.jsx)(r, {
            color: `primary`,
            loading: F,
            onClick: c,
            children: l
        }), t[72] = F, t[73] = c, t[74] = l, t[75] = d) : d = t[75];
        let f;
        t[76] === Symbol.for(`react.memo_cache_sentinel`) ? (f = wt(), t[76] = f) : f = t[76];
        let p;
        t[77] === u ? p = t[78] : (p = u.formatMessage($.manageBusinessSubscriptionLink), t[77] = u, t[78] = p);
        let m;
        t[79] === p ? m = t[80] : (m = (0, Q.jsx)(Oe, {
            className: `text-token-text-secondary text-sm`,
            href: f,
            children: p
        }), t[79] = p, t[80] = m);
        let h;
        t[81] !== d || t[82] !== m ? (h = (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-3`,
            children: [d, m]
        }), t[81] = d, t[82] = m, t[83] = h) : h = t[83];
        let g;
        return t[84] !== s || t[85] !== h || t[86] !== a ? (g = (0, Q.jsx)(`div`, {
            className: `flex min-h-screen items-center justify-center px-6 py-12`,
            children: (0, Q.jsxs)(`div`, {
                className: `border-token-border-default bg-token-bg-primary flex w-full max-w-md flex-col gap-5 rounded-2xl border p-6 text-center shadow-lg`,
                children: [a, s, h]
            })
        }), t[84] = s, t[85] = h, t[86] = a, t[87] = g) : g = t[87], g
    }
    return null
}

function Gt(e) {
    a.error(e), U.addError(e instanceof Error ? e : Error(`Failed to update workspace token after checkout`), {
        source: `payments.success`
    })
}

function Kt() {
    B({
        fallbackScreenHint: `login`,
        useFallbackScreenHint: !0,
        skipLoginModal: !0
    })
}
var X, Z, Q, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, $, cn = e((() => {
    ve(), X = Ee(), re(), ht(), z(), Ue(), oe(), j(), Ct(), kt(), je(), Ge(), dt(), Ae(), We(), Pe(), Le(), it(), Ye(), ce(), Be(), ct(), st(), w(), et(), $e(), ke(), ne(), M(), nt(), yt(), p(), i(), ue(), Me(), O(), o(), T(), s(), g(), n(), N(), I(), Te(), Fe(), Z = t(be()), ye(), Q = fe(), we(), qt = D(() => Se(() => import(`./33d473af-nxhpgklx2n1k8ump.js`).then(e => e.NoPaymentPlusTrialExtensionAcknowledgement), __vite__mapDeps([0, 1, 2, 3, 4, 5]))), Jt = function(e) {
        return e.Success = `success`, e.PaymentFailed = `payment_failed`, e.UserMismatch = `user_mismatch`, e.OtherError = `other_error`, e
    }({}), Yt = {
        success: !0
    }, Xt = [50, 100, 200, 400, 800, 1600, 3200, 3650], Zt = `2160290604`, Qt = `personal_checkout_failure_plan_recovery_enabled`, $t = `548821362`, en = `1549629729`, tn = `3507623755`, nn = `eligible_upsell_context_ids`, rn = `return_to_thread_enabled`, an = `drop_into_work_after_upgrade`, on = pe(function() {
        "use forget";
        let e = (0, X.c)(27),
            [t] = xe(),
            n = de(),
            r = C.getItem(b.CheckoutFrom),
            i = R(),
            a = Ce(),
            o;
        e[0] === t ? o = e[1] : (o = t.get(`plan_type`), e[0] = t, e[1] = o);
        let s = o,
            c = s ?? _.PLUS,
            l;
        e[2] === a.checkout_id ? l = e[3] : (l = Dt(a.checkout_id), e[2] = a.checkout_id, e[3] = l);
        let u = l,
            d;
        e[4] !== i || e[5] !== a.checkout_id ? (d = i?.isPersonalAccount() === !0 && typeof i.normalizedAccountUserId == `string` && bt({
            checkoutSessionId: a.checkout_id,
            accountId: i.id,
            accountUserId: i.normalizedAccountUserId
        }) != null, e[4] = i, e[5] = a.checkout_id, e[6] = d) : d = e[6];
        let f = d,
            p;
        e[7] !== a.checkout_id || e[8] !== n.search ? (p = new URLSearchParams(n.search), x(a.checkout_id, p), e[7] = a.checkout_id, e[8] = n.search, e[9] = p) : p = e[9];
        let m = p,
            h, g;
        if (e[10] !== c || e[11] !== f || e[12] !== u || e[13] !== a.checkout_id || e[14] !== a.postCheckoutResult || e[15] !== a.processor_entity || e[16] !== m ? (h = () => {
                let e = a.checkout_id,
                    t = a.processor_entity ?? void 0;
                a.postCheckoutResult !== `success` && pt(`payments_success`, {
                    checkoutPlanType: c,
                    checkoutId: e,
                    processorEntity: t,
                    isCheckoutModalEnabled: u,
                    ...f ? {
                        entryPoint: G.STUDENTS_2026
                    } : {},
                    outcome: a.postCheckoutResult === `payment_failed` ? `payment_failed` : a.postCheckoutResult === `user_mismatch` ? `user_mismatch` : `other_error`
                }, m)
            }, g = [c, f, u, a.checkout_id, a.processor_entity, a.postCheckoutResult, m], e[10] = c, e[11] = f, e[12] = u, e[13] = a.checkout_id, e[14] = a.postCheckoutResult, e[15] = a.processor_entity, e[16] = m, e[17] = h, e[18] = g) : (h = e[17], g = e[18]), (0, Z.useEffect)(h, g), !i) return null;
        let ee = Wt,
            v = Je(r) ? r : null,
            y = s != null,
            S;
        return e[19] !== ee || e[20] !== c || e[21] !== i || e[22] !== a || e[23] !== m || e[24] !== v || e[25] !== y ? (S = (0, Q.jsx)(ee, {
            checkoutFrom: v,
            checkoutPlanType: c,
            currentAccount: i,
            hasExplicitCheckoutPlanType: y,
            loaderData: a,
            sourceSearchParams: m
        }), e[19] = ee, e[20] = c, e[21] = i, e[22] = a, e[23] = m, e[24] = v, e[25] = y, e[26] = S) : S = e[26], S
    }), sn = () => {
        "use forget";
        let e = (0, X.c)(4),
            t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(`h1`, {
            className: `text-token-text-primary text-xl font-semibold`,
            children: (0, Q.jsx)(ge, {
                ...$.userMismatchRecoveryTitle
            })
        }), e[0] = t) : t = e[0];
        let n;
        e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary text-sm leading-6`,
            children: (0, Q.jsx)(ge, {
                ...$.userMismatchRecoveryBody
            })
        }), e[1] = n) : n = e[1];
        let i;
        e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Q.jsx)(r, {
            color: `primary`,
            onClick: Kt,
            children: (0, Q.jsx)(ge, {
                ...$.switchAccountsButton
            })
        }), e[2] = i) : i = e[2];
        let a;
        return e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Q.jsx)(`div`, {
            className: `flex min-h-screen items-center justify-center px-6 py-12`,
            children: (0, Q.jsxs)(`div`, {
                className: `border-token-border-default bg-token-bg-primary flex w-full max-w-md flex-col gap-5 rounded-2xl border p-6 text-center shadow-lg`,
                children: [t, n, (0, Q.jsxs)(`div`, {
                    className: `flex flex-col gap-3`,
                    children: [i, (0, Q.jsx)(Oe, {
                        className: `text-token-text-secondary text-sm`,
                        href: `/`,
                        children: (0, Q.jsx)(ge, {
                            ...$.returnToChatgptLink
                        })
                    })]
                })]
            })
        }), e[3] = a) : a = e[3], a
    }, $ = me({
        userMismatchRecoveryTitle: {
            id: `Payments.success.userMismatchRecoveryTitle`,
            defaultMessage: `This purchase is linked to another account`
        },
        userMismatchRecoveryBody: {
            id: `Payments.success.userMismatchRecoveryBody`,
            defaultMessage: `Switch to the ChatGPT account that started checkout to use this subscription.`
        },
        switchAccountsButton: {
            id: `Payments.success.switchAccountsButton`,
            defaultMessage: `Switch accounts`
        },
        returnToChatgptLink: {
            id: `Payments.success.returnToChatgptLink`,
            defaultMessage: `Return to ChatGPT`
        },
        businessCancelToPlusSuccessMessage: {
            id: `Payments.success.businessCancelToPlusSuccessMessage`,
            defaultMessage: `You're now subscribed to ChatGPT Plus, and your ChatGPT Business subscription has been canceled.`
        },
        businessCancellationRecoveryTitle: {
            id: `Payments.success.businessCancellationRecoveryTitle`,
            defaultMessage: `Your Plus subscription is active`
        },
        businessCancellationRecoveryBody: {
            id: `Payments.success.businessCancellationRecoveryBody`,
            defaultMessage: `We couldn't confirm that your ChatGPT Business subscription was canceled. Retry now or manage it from Business billing to avoid keeping both subscriptions active.`
        },
        plusConfirmationRecoveryTitle: {
            id: `Payments.success.plusConfirmationRecoveryTitle`,
            defaultMessage: `We’re confirming your Plus subscription`
        },
        plusConfirmationRecoveryBody: {
            id: `Payments.success.plusConfirmationRecoveryBody`,
            defaultMessage: `We haven't canceled your ChatGPT Business subscription because Plus isn't confirmed yet. Retry now, or manage Business billing separately.`
        },
        retryPlusConfirmationButton: {
            id: `Payments.success.retryPlusConfirmationButton`,
            defaultMessage: `Retry Plus confirmation`
        },
        personalPlusSwitchRecoveryTitle: {
            id: `Payments.success.personalPlusSwitchRecoveryTitle`,
            defaultMessage: `Your subscriptions are updated`
        },
        personalPlusSwitchRecoveryBody: {
            id: `Payments.success.personalPlusSwitchRecoveryBody`,
            defaultMessage: `Your Plus subscription is active and your Business subscription is canceled, but we couldn't switch you to your personal account. Retry now or switch accounts manually.`
        },
        retryPersonalPlusSwitchButton: {
            id: `Payments.success.retryPersonalPlusSwitchButton`,
            defaultMessage: `Retry account switch`
        },
        retryBusinessCancellationButton: {
            id: `Payments.success.retryBusinessCancellationButton`,
            defaultMessage: `Retry Business cancellation`
        },
        manageBusinessSubscriptionLink: {
            id: `Payments.success.manageBusinessSubscriptionLink`,
            defaultMessage: `Manage Business subscription`
        },
        sciPaymentConfirmationToastMessage: {
            id: `Payments.success.sciToast`,
            defaultMessage: `You're now subscribed to ChatGPT for Academic Researchers`
        },
        paymentConfirmationToastMessage: {
            id: `Payments.success.toast.numberedTiers`,
            defaultMessage: `You're now subscribed to ChatGPT {planType, select, prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {{planName}}}`
        },
        paymentFailedToastMessage: {
            id: `Payments.success.paymentFailedToastMessage`,
            defaultMessage: `Payment failed. Please try again.`
        }
    })
}));
export {
    Ot as a, on as i, Jt as n, kt as o, cn as r, sn as t
};
//# sourceMappingURL=bfd5ba7b-fco4qqtitng2acsf.js.map