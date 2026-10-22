const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/33d473af-o9ide56zj5y55pan.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-nxpmzchfjvwqts17.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/0e2455cf-5y65kiuirs6pcl0x.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Cat as r,
    Ert as i,
    Fst as a,
    Ga as o,
    Int as s,
    J7 as c,
    Jnt as l,
    K as u,
    L1 as d,
    LU as f,
    Lit as p,
    N4 as m,
    Nst as h,
    P4 as g,
    Pst as _,
    Q7 as v,
    Rnt as y,
    Tat as b,
    Trt as x,
    V1 as S,
    Xnt as C,
    Ynt as w,
    Yrt as T,
    Z as E,
    a2 as D,
    bct as O,
    eE as k,
    f0 as A,
    frt as j,
    grt as M,
    hrt as N,
    kit as P,
    lV as F,
    lit as I,
    mrt as L,
    n0 as R,
    o0 as z,
    o2 as B,
    oct as ee,
    p0 as V,
    q1 as te,
    qa as ne,
    r3 as H,
    r8 as re,
    srt as ie,
    tV as ae,
    urt as oe,
    vat as se,
    vit as ce,
    xat as le,
    yat as ue,
    z1 as U,
    zU as de
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    At as fe,
    Bn as pe,
    Ht as me,
    Ln as he,
    N as ge,
    Nn as W,
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
    Ain as Oe,
    Cln as ke,
    G2t as Ae,
    Hsn as je,
    Isn as Me,
    JGn as Ne,
    K2t as Pe,
    LWn as Fe,
    Nin as Ie,
    RWn as Le,
    Rrn as Re,
    Rsn as ze,
    Uan as Be,
    Usn as Ve,
    Vsn as He,
    cm as Ue,
    fn as We,
    gan as G,
    gn as Ge,
    han as Ke,
    hn as qe,
    itt as Je,
    jin as Ye,
    pn as Xe,
    qan as Ze,
    rtt as Qe,
    um as $e,
    wln as K,
    xan as et,
    zsn as tt
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Dh as nt,
    Hg as rt,
    Nh as it,
    zg as at
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    r as ot,
    t as st
} from "./ee0eeb85-hy5t0r0dfod4cgwn.js";
import {
    i as ct,
    r as lt
} from "./58459bbe-h5x5db3zityk5tla.js";
import {
    a as ut,
    i as dt,
    t as q,
    v as ft
} from "./a4eef3c0-lfzia2wali7m4fpl.js";
import {
    n as pt,
    r as mt,
    t as ht
} from "./97a55ca1-ob1vz7gjgz2uk2e8.js";
import {
    n as gt,
    t as _t
} from "./4cc06ac6-k1wg43qxzn253koc.js";
import {
    i as vt,
    n as J,
    r as yt,
    t as bt
} from "./efd279b6-b90gmea5n9iovib1.js";
import {
    a as xt,
    c as St,
    n as Ct,
    t as wt
} from "./a6f4f526-k0q9lh6ybyxymdv2.js";

function Tt(e) {
    let t = _t(l.getItem(w.CheckoutConfirmLatencyPending), e);
    return t.status === `ready` && t.pending.is_checkout_modal_enabled === !0
}

function Et({
    checkoutId: e,
    checkoutPlanType: t,
    postCheckoutResult: n,
    processorEntity: i
}) {
    let a = l.getItem(w.CheckoutConfirmLatencyPending) ?? null;
    if (!a) return;
    let o = _t(a, e);
    if (o.status === `discard`) {
        l.removeItem(w.CheckoutConfirmLatencyPending);
        return
    }
    if (o.status === `other_checkout`) return;
    let {
        pending: s,
        durationMs: c
    } = o;
    return r.addAction(`checkout.confirm.latency_ms`, {
        duration_ms: c,
        requires_manual_approval: s.requires_manual_approval === !0,
        checkout_session_id: e ?? s.checkout_session_id,
        processor_entity: i ?? s.processor_entity,
        plan_type: t,
        result_type: n,
        measurement_point: `return_page`
    }), l.removeItem(w.CheckoutConfirmLatencyPending), {
        durationMs: c,
        checkoutSessionId: s.checkout_session_id
    }
}
var Dt = e((() => {
    gt(), b(), C()
}));

function Y(e) {
    m(e, {
        sessionChanged: !1
    })
}

function Ot(e) {
    return e.isPersonalAccount() && e.isPlus() && e.hasPaidSubscription() && !e.isActiveSubscriptionGratis() && e.data.subscriptionStatus.subscriptionPlan === a.PLUS
}

function X({
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
        }), (i || yt(t)) && l.removeItem(w.CheckoutFrom), n.isPersonalAccount()) {
        let e = bt({
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
    let u = new URL(At(e, r), window.location.origin),
        d = ze(t);
    d != null && (u.searchParams.set(He, d), u.searchParams.set(`mweb_fallback`, `1`)), s(`${u.pathname}${u.search}${u.hash}`)
}

function kt(e) {
    return Object.values(h).some(t => t === e)
}

function At(e, t) {
    return !t || !kt(e) || !G(e) || !L(Zt).get(Qt, !1) ? `/#pricing` : `/?cta_tab=personal&highlight_plan=${e}#pricing`
}

function jt({
    checkoutPlanType: e,
    eventId: t
}) {
    s.logValueEventWithStatsig({
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
    }), re(), se.deleteCookie(le.DogfoodingAccountType), e === h.PLUS && ie.logEvent(`chatgpt_plus_payment_success_page`)
}
async function Mt({
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
        i.error(t), r.addError(t instanceof Error ? t : Error(`Failed to replay pending image download after checkout`), {
            source: `payments.success`,
            has_paid_subscription: e
        })
    }
}

function Nt(e) {
    if (!e.startsWith(`/`)) return e;
    let t = new URL(e, window.location.origin);
    return t.searchParams.set(`refresh_account`, `true`), `${t.pathname}${t.search}${t.hash}`
}

function Pt({
    checkoutPlanType: e,
    completion: t,
    context: n
}) {
    return n?.upsellContextId === `work` && kt(e) && G(e) && (t.checkout_kind == null || t.checkout_kind === H.Standard) ? n.threadId != null && n.sitePreview != null ? lt(n.threadId, n.sitePreview) : n.threadId == null ? `/?surface=work` : ae(n.threadId) : n?.threadId == null || !kt(e) || !G(e) || t.checkout_kind != null && t.checkout_kind !== H.Standard || !j($t).get(nn, []).includes(n.upsellContextId) ? null : L(en).get(rn, !1) ? ae(n.threadId) : null
}

function Ft({
    completion: e,
    checkoutFrom: t,
    checkoutPlanType: n,
    checkoutSessionId: r,
    currentAccount: a,
    defaultHomeRedirectUrl: o,
    hasExplicitCheckoutPlanType: s,
    intl: c,
    navigate: u,
    postCheckoutResult: d,
    queryClient: f,
    toaster: p
}) {
    if (`kind` in e && e.kind === H.CodexTeam) {
        Oe(), R(f, e.workspace_id).then(() => {
            u({
                pathname: nt,
                search: `?account_id=${e.workspace_id}`
            }, {
                replace: !0
            })
        }).catch(e => {
            i.error(e)
        });
        return
    }
    let m = d === `success` && (e.checkout_kind == null || e.checkout_kind === H.Standard) ? Be(r) : null,
        g = Ye(),
        _ = d === `success` && kt(n) && G(n) && (e.checkout_kind == null || e.checkout_kind === H.Standard) ? ze(r) : null,
        v = t == null ? Pt({
            checkoutPlanType: n,
            completion: e,
            context: g
        }) : null;
    if (Oe(), e.entry_point === K.STUDENTS_2026) {
        let e = S() ?? a,
            t = e.isPersonalAccount() && e.normalizedAccountUserId != null && e.id === a.id && e.normalizedAccountUserId === a.normalizedAccountUserId ? J({
                checkoutSessionId: r,
                accountId: e.id,
                accountUserId: e.normalizedAccountUserId
            }) : null;
        if (d !== `success` || t == null || e.normalizedAccountUserId == null || !e.isPlus() || !e.hasPaidSubscription()) {
            X({
                checkoutPlanType: n,
                checkoutSessionId: r,
                currentAccount: e,
                hasExplicitCheckoutPlanType: s,
                isStudents2026Checkout: !0,
                intl: c,
                message: I.somethingWentWrong,
                navigate: u,
                toaster: p
            });
            return
        }
        let i = bt({
            checkoutSessionId: r,
            accountId: e.id,
            accountUserId: e.normalizedAccountUserId,
            status: `success`
        });
        if (i == null) {
            X({
                checkoutPlanType: n,
                checkoutSessionId: r,
                currentAccount: e,
                hasExplicitCheckoutPlanType: s,
                isStudents2026Checkout: !0,
                intl: c,
                message: I.somethingWentWrong,
                navigate: u,
                toaster: p
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
        let o = new URL(i, window.location.origin);
        o.searchParams.set(`refresh_account`, `true`), l.removeItem(w.CheckoutFrom), Y(`${o.pathname}${o.search}`)
    } else if (m != null) l.removeItem(w.CheckoutFrom), Y(Nt(m.returnPath));
    else if (_ != null) {
        let e = new URL(_);
        e.searchParams.delete(je), e.searchParams.set(`refresh_account`, `true`), Me(r), l.removeItem(w.CheckoutFrom), Y(e.href)
    } else t ? (l.removeItem(w.CheckoutFrom), Y(Nt(We[t]))) : v == null ? d === `success` && s && !(`kind` in e) && (e.checkout_kind == null || e.checkout_kind === H.Standard) && (n === h.PLUS || n === h.PROLITE || n === h.PRO || n === h.PROMAX) && t == null && g == null && L(tn).get(an, !1) ? Y(Nt(`/?surface=work`)) : (p.success(n === h.SCI ? c.formatMessage($.sciPaymentConfirmationToastMessage) : c.formatMessage($.paymentConfirmationToastMessage, {
        planType: n,
        planName: Ae(n)
    }), {
        duration: 5
    }), o == null ? Y() : Y(o)) : Y(Nt(v))
}
async function It(e) {
    try {
        await e.refetchQueries({
            queryKey: U().queryKey
        })
    } catch {
        return null
    }
    return S()
}
async function Lt({
    checkoutAccount: e,
    isProvisioned: t = e => e.isPlus() && e.hasPaidSubscription(),
    isCancelled: n,
    queryClient: r
}) {
    let i = await It(r);
    for (let a of Xt) {
        if (n()) return null;
        if (i != null && (!(i.isPersonalAccount() && i.id === e.id && i.normalizedAccountUserId === e.normalizedAccountUserId) || t(i))) return i;
        if (await new Promise(e => {
                window.setTimeout(e, a)
            }), n()) return null;
        i = await It(r)
    }
    return i
}
async function Rt(e, t) {
    try {
        await e.refetchQueries({
            queryKey: U().queryKey
        }, {
            throwOnError: !0
        })
    } catch {
        return null
    }
    let n = e.getQueryData(U().queryKey);
    return n == null ? null : d(n).find(e => e.id === t) ?? null
}
async function zt(e) {
    try {
        await e.refetchQueries({
            queryKey: U().queryKey
        }, {
            throwOnError: !0
        })
    } catch {
        return null
    }
    let t = e.getQueryData(U().queryKey);
    return t == null ? null : d(t).find(e => e.structure === _.PERSONAL && e.planType === h.PLUS && e.hasPaidSubscription()) ?? null
}

function Bt(e) {
    return e.willDeactivateAtTermEnd() || e.isDeactivated()
}
async function Vt(e, t) {
    try {
        let {
            updatedAccount: n
        } = await R(e, t);
        return n
    } catch (e) {
        return r.addError(e instanceof Error ? e : Error(`Failed to switch to personal Plus after cancellation`), {
            source: `payments.success.business_cancel_to_plus`
        }), !1
    }
}
async function Ht(e) {
    await c.safePost(`/subscriptions/cancel`, {
        requestBody: {
            account_id: e
        }
    })
}

function Ut(e) {
    "use forget";
    let t = (0, Kt.c)(88),
        {
            checkoutFrom: i,
            checkoutPlanType: a,
            currentAccount: c,
            hasExplicitCheckoutPlanType: l,
            loaderData: d,
            sourceSearchParams: f
        } = e,
        m = De(),
        g = _e(),
        _ = ge(),
        v = de(),
        y = (0, Z.useRef)(!1),
        b = (0, Z.useRef)(null),
        x = (0, Z.useRef)(!1),
        [C, w] = (0, Z.useState)(null),
        T, E;
    t[0] !== c || t[1] !== C ? (T = () => {
        C != null && (c.id !== C.accountId || c.normalizedAccountUserId !== C.accountUserId) && C.onClose()
    }, E = [c, C], t[0] = c, t[1] = C, t[2] = T, t[3] = E) : (T = t[2], E = t[3]), (0, Z.useEffect)(T, E);
    let D;
    t[4] === d.checkout_id ? D = t[5] : (D = Tt(d.checkout_id), t[4] = d.checkout_id, t[5] = D);
    let O = D,
        k = d.postCheckoutResult === `success` && l && (a === h.PLUS || a === h.PROLITE || a === h.PRO || a === h.PROMAX) && !(`kind` in d.completion) && (d.completion.checkout_kind == null || d.completion.checkout_kind === H.Standard) ? a === h.PLUS ? u : Ue : null,
        A;
    t[6] !== a || t[7] !== d.checkout_id ? (A = () => Ct({
        checkoutPlanType: a,
        checkoutSessionId: d.checkout_id
    }), t[6] = a, t[7] = d.checkout_id, t[8] = A) : A = t[8];
    let [j] = (0, Z.useState)(A), [N, P] = (0, Z.useState)(null), [F, L] = (0, Z.useState)(!1), R;
    t[9] !== m || t[10] !== _ || t[11] !== v ? (R = async e => {
        L(!0);
        let t = await zt(_);
        if (t == null) return r.addError(Error(`Unable to verify personal Plus after checkout`), {
            source: `payments.success.business_cancel_to_plus`
        }), P({
            stage: `plus_unconfirmed`,
            handoff: e
        }), L(!1), !1;
        let n = await Rt(_, e.businessAccountId);
        if (n == null || !n.isSelfServeBusiness()) {
            r.addError(Error(`Unable to verify intended Business account after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            });
            let t = s.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return M(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
                unique_event_id: t
            } : void 0), P({
                stage: `business_cancellation_failed`,
                handoff: e
            }), L(!1), !1
        }
        let i = Bt(n);
        if (!i) {
            let t;
            try {
                await Ht(e.businessAccountId)
            } catch (e) {
                t = e
            }
            let n = await Rt(_, e.businessAccountId);
            i = n?.isSelfServeBusiness() === !0 && Bt(n), i || r.addError(t instanceof Error ? t : Error(`Unable to confirm Business cancellation after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            })
        }
        if (!i) {
            let t = s.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return M(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
                unique_event_id: t
            } : void 0), P({
                stage: `business_cancellation_failed`,
                handoff: e
            }), L(!1), !1
        }
        let a = s.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
            step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_SUCCEEDED`,
            legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_succeeded`
        });
        return M(`chatgpt_business_cancel_to_plus_business_cancellation_succeeded`, void 0, a ? {
            unique_event_id: a
        } : void 0), await Promise.all([q(), oe()]), await Vt(_, t.id) ? (wt(), P(null), v.success(m.formatMessage($.businessCancelToPlusSuccessMessage), {
            duration: 5
        }), L(!1), Y(), !0) : (P({
            stage: `personal_switch_failed`,
            handoff: e
        }), L(!1), !1)
    }, t[9] = m, t[10] = _, t[11] = v, t[12] = R) : R = t[12];
    let z = R,
        B;
    t[13] !== i || t[14] !== a || t[15] !== z || t[16] !== c || t[17] !== k || t[18] !== l || t[19] !== m || t[20] !== O || t[21] !== d.checkout_id || t[22] !== d.completion || t[23] !== d.postCheckoutResult || t[24] !== d.processor_entity || t[25] !== j || t[26] !== g || t[27] !== _ || t[28] !== f || t[29] !== v || t[30] !== C ? (B = () => {
        if (C != null) return;
        let e = !1,
            t = pt(d.checkout_id, c),
            n = yt(d.checkout_id),
            r = c.isPersonalAccount() && c.normalizedAccountUserId != null && J({
                checkoutSessionId: d.checkout_id,
                accountId: c.id,
                accountUserId: c.normalizedAccountUserId
            }) != null,
            o = d.postCheckoutResult === `success` && !(`kind` in d.completion) && d.completion.entry_point === K.STUDENTS_2026,
            u = i === Xe.STUDENTS && l && a === h.PLUS,
            T = n || o || u,
            E = d.postCheckoutResult === `success` && !(`kind` in d.completion) && (d.completion.checkout_kind == null || d.completion.checkout_kind === H.Standard) && (n || o || d.completion.entry_point == null && u),
            D = () => {
                if (y.current) return;
                y.current = !0;
                let e = s.logStructuredEvent(`ChatgptCheckoutPaymentSuccessPage`, {
                    checkoutPlanType: a,
                    checkoutId: d.checkout_id,
                    processorEntity: d.processor_entity ?? void 0,
                    isCheckoutModalEnabled: O,
                    ...d.postCheckoutResult === `success` && d.completion.checkout_kind != null ? {
                        checkoutKind: d.completion.checkout_kind,
                        entryPoint: d.completion.entry_point ?? void 0
                    } : {}
                });
                d.postCheckoutResult === `success` && Je({
                    currentAccount: c,
                    location: `PaymentsSuccessPage`,
                    planName: a
                }), jt({
                    checkoutPlanType: a,
                    eventId: e
                })
            };
        Et({
            checkoutId: d.checkout_id,
            checkoutPlanType: a,
            postCheckoutResult: d.postCheckoutResult,
            processorEntity: d.processor_entity ?? void 0
        });
        let A = () => (b.current?.checkoutId !== d.checkout_id && (b.current = {
                checkoutId: d.checkout_id,
                pending: p({
                    reason: `checkout_success`,
                    path: `/payments/success`
                }).catch(Wt)
            }), b.current.pending),
            N = () => {
                (async () => {
                    if (d.postCheckoutResult !== `success`) return;
                    if (`kind` in d.completion && d.completion.kind === H.CodexTeam) {
                        Ft({
                            completion: d.completion,
                            checkoutFrom: i,
                            checkoutPlanType: a,
                            checkoutSessionId: d.checkout_id,
                            currentAccount: c,
                            defaultHomeRedirectUrl: k,
                            hasExplicitCheckoutPlanType: l,
                            intl: m,
                            navigate: g,
                            postCheckoutResult: d.postCheckoutResult,
                            queryClient: _,
                            toaster: v
                        });
                        return
                    }
                    if (j != null) {
                        if (await A(), e) return;
                        if (!x.current) {
                            x.current = !0;
                            let e = s.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                            });
                            M(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
                                unique_event_id: e
                            } : void 0), await z(j)
                        }
                        return
                    }
                    let n = c,
                        o = E && (!c.isPlus() || !c.hasPaidSubscription());
                    if (c.isFree() || o || t) {
                        if (n = E && r || t ? await Lt({
                                isProvisioned: t ? Ot : void 0,
                                checkoutAccount: c,
                                isCancelled: () => e,
                                queryClient: _
                            }) : await It(_), e) return;
                        (!n || n.isFree()) && (ut({
                            checkoutSessionId: d.checkout_id,
                            checkoutPlanType: a,
                            processorEntity: d.processor_entity ?? void 0,
                            isCheckoutModalEnabled: O,
                            checkoutKind: d.completion.checkout_kind ?? void 0,
                            entryPoint: d.completion.entry_point ?? void 0,
                            sourceSearchParams: f,
                            accessStage: `personal_account_refresh`,
                            failureReason: n == null ? `account_status_missing` : `account_still_free`
                        }), _.invalidateQueries(U()))
                    }
                    if (await A(), e || (await Mt({
                            hasPaidSubscription: n?.hasPaidSubscription() ?? !1,
                            intl: m,
                            queryClient: _
                        }), e)) return;
                    if (E) {
                        let e = c.isFree() || o ? n : S() ?? c;
                        if (!((e != null && e.isPersonalAccount() && e.normalizedAccountUserId != null ? J({
                                checkoutSessionId: d.checkout_id,
                                accountId: e.id,
                                accountUserId: e.normalizedAccountUserId
                            }) : null) != null && e != null && e.isPersonalAccount() && e.isPlus() && e.hasPaidSubscription() && e.id === c.id && e.normalizedAccountUserId != null && e.normalizedAccountUserId === c.normalizedAccountUserId)) {
                            ft(`payments_success`, {
                                checkoutPlanType: a,
                                checkoutId: d.checkout_id,
                                processorEntity: d.processor_entity ?? void 0,
                                isCheckoutModalEnabled: O,
                                checkoutKind: d.completion.checkout_kind ?? void 0,
                                entryPoint: K.STUDENTS_2026,
                                outcome: `other_error`
                            }, f), X({
                                checkoutPlanType: a,
                                checkoutSessionId: d.checkout_id,
                                currentAccount: c,
                                hasExplicitCheckoutPlanType: l,
                                isStudents2026Checkout: !0,
                                intl: m,
                                message: I.somethingWentWrong,
                                navigate: g,
                                toaster: v
                            });
                            return
                        }
                        D()
                    }
                    if (await q(), e) return;
                    let u = e => {
                        let t = e === void 0 ? k : e;
                        Ft({
                            completion: E ? {
                                ...d.completion,
                                entry_point: K.STUDENTS_2026
                            } : d.completion,
                            checkoutFrom: i,
                            checkoutPlanType: a,
                            checkoutSessionId: d.checkout_id,
                            currentAccount: c,
                            defaultHomeRedirectUrl: t,
                            hasExplicitCheckoutPlanType: l,
                            intl: m,
                            navigate: g,
                            postCheckoutResult: d.postCheckoutResult,
                            queryClient: _,
                            toaster: v
                        })
                    };
                    if (t) {
                        ht(d.checkout_id);
                        let e = S(),
                            t = e?.data.subscriptionStatus.discount;
                        if (e != null && n != null && e.id === c.id && e.normalizedAccountUserId === c.normalizedAccountUserId && Ot(n) && Ot(e) && t?.promo_campaign_id === `plus-1-month-free` && t.discount_type === ee.PERCENTAGE && t.amount === 100 && t.duration_num_periods === 1 && n.id === c.id && n.normalizedAccountUserId === c.normalizedAccountUserId && a === h.PLUS && (d.completion.checkout_kind == null || d.completion.checkout_kind === H.Standard)) {
                            w({
                                accountId: c.id,
                                accountUserId: c.normalizedAccountUserId,
                                onClose: () => u(`/?refresh_account=true`)
                            });
                            return
                        }
                    }
                    u()
                })()
            },
            F = () => {
                q().finally(() => {
                    e || N()
                })
            },
            L = () => {
                (async () => {
                    if (j != null) {
                        let t = await zt(_);
                        if (e) return;
                        if (t != null) {
                            if (!x.current) {
                                x.current = !0;
                                let e = s.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                    step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                    legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                                });
                                M(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
                                    unique_event_id: e
                                } : void 0), await z(j)
                            }
                            return
                        }
                        P({
                            stage: `plus_unconfirmed`,
                            handoff: j
                        });
                        return
                    }
                    let t = c.isFree() ? await It(_) : c;
                    if (!e) {
                        if (t && !t.isFree()) {
                            if (D(), await A(), e || (await Mt({
                                    hasPaidSubscription: t.hasPaidSubscription(),
                                    intl: m,
                                    queryClient: _
                                }), await q(), e)) return;
                            Ft({
                                completion: Yt,
                                checkoutFrom: i,
                                checkoutPlanType: a,
                                checkoutSessionId: d.checkout_id,
                                currentAccount: c,
                                defaultHomeRedirectUrl: k,
                                hasExplicitCheckoutPlanType: l,
                                intl: m,
                                navigate: g,
                                postCheckoutResult: d.postCheckoutResult,
                                queryClient: _,
                                toaster: v
                            });
                            return
                        }
                        X({
                            checkoutPlanType: a,
                            checkoutSessionId: d.checkout_id,
                            currentAccount: c,
                            hasExplicitCheckoutPlanType: l,
                            intl: m,
                            toaster: v,
                            navigate: g,
                            message: I.somethingWentWrong
                        })
                    }
                })()
            };
        if (d.postCheckoutResult === `user_mismatch`) return () => {
            e = !0
        };
        if (j == null && T && d.postCheckoutResult !== `success`) return X({
            checkoutPlanType: a,
            checkoutSessionId: d.checkout_id,
            currentAccount: c,
            hasExplicitCheckoutPlanType: l,
            isStudents2026Checkout: !0,
            intl: m,
            toaster: v,
            navigate: g,
            message: d.postCheckoutResult === `payment_failed` ? $.paymentFailedToastMessage : I.somethingWentWrong
        }), () => {
            e = !0
        };
        d.postCheckoutResult !== `success` && ht(d.checkout_id);
        bb533: switch (d.postCheckoutResult) {
            case `success`:
                E ? se.deleteCookie(le.DogfoodingAccountType) : D(), F();
                break bb533;
            case `payment_failed`:
                if (j != null) {
                    window.location.href = St();
                    break bb533
                }
                X({
                    checkoutPlanType: a,
                    checkoutSessionId: d.checkout_id,
                    currentAccount: c,
                    hasExplicitCheckoutPlanType: l,
                    intl: m,
                    toaster: v,
                    navigate: g,
                    message: $.paymentFailedToastMessage
                });
                break bb533;
            case `other_error`:
                L()
        }
        return () => {
            e = !0
        }
    }, t[13] = i, t[14] = a, t[15] = z, t[16] = c, t[17] = k, t[18] = l, t[19] = m, t[20] = O, t[21] = d.checkout_id, t[22] = d.completion, t[23] = d.postCheckoutResult, t[24] = d.processor_entity, t[25] = j, t[26] = g, t[27] = _, t[28] = f, t[29] = v, t[30] = C, t[31] = B) : B = t[31];
    let V;
    if (t[32] !== i || t[33] !== a || t[34] !== z || t[35] !== c || t[36] !== k || t[37] !== l || t[38] !== m || t[39] !== O || t[40] !== d || t[41] !== j || t[42] !== g || t[43] !== _ || t[44] !== f || t[45] !== v || t[46] !== C ? (V = [i, a, z, C, c, k, l, m, O, d, j, g, _, f, v], t[32] = i, t[33] = a, t[34] = z, t[35] = c, t[36] = k, t[37] = l, t[38] = m, t[39] = O, t[40] = d, t[41] = j, t[42] = g, t[43] = _, t[44] = f, t[45] = v, t[46] = C, t[47] = V) : V = t[47], (0, Z.useEffect)(B, V), d.postCheckoutResult === `user_mismatch`) {
        let e;
        return t[48] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(sn, {}), t[48] = e) : e = t[48], e
    }
    if (C != null) {
        let e = c.id === C.accountId && c.normalizedAccountUserId === C.accountUserId,
            n;
        t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (n = {}, t[49] = n) : n = t[49];
        let r;
        return t[50] !== e || t[51] !== C.onClose ? (r = (0, Q.jsx)(o, {
            for: qt,
            open: e,
            onClose: C.onClose,
            withProps: n
        }), t[50] = e, t[51] = C.onClose, t[52] = r) : r = t[52], r
    }
    if (N != null) {
        let e = N.stage === `plus_unconfirmed`,
            r = N.stage === `personal_switch_failed`,
            i;
        t[53] !== m || t[54] !== r || t[55] !== e ? (i = m.formatMessage(e ? $.plusConfirmationRecoveryTitle : r ? $.personalPlusSwitchRecoveryTitle : $.businessCancellationRecoveryTitle), t[53] = m, t[54] = r, t[55] = e, t[56] = i) : i = t[56];
        let a;
        t[57] === i ? a = t[58] : (a = (0, Q.jsx)(`h1`, {
            className: `text-token-text-primary text-xl font-semibold`,
            children: i
        }), t[57] = i, t[58] = a);
        let o;
        t[59] !== m || t[60] !== r || t[61] !== e ? (o = m.formatMessage(e ? $.plusConfirmationRecoveryBody : r ? $.personalPlusSwitchRecoveryBody : $.businessCancellationRecoveryBody), t[59] = m, t[60] = r, t[61] = e, t[62] = o) : o = t[62];
        let s;
        t[63] === o ? s = t[64] : (s = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary text-sm leading-6`,
            children: o
        }), t[63] = o, t[64] = s);
        let c;
        t[65] !== N.handoff || t[66] !== z ? (c = () => {
            M(`chatgpt_business_cancel_to_plus_business_cancellation_retry_clicked`), z(N.handoff)
        }, t[65] = N.handoff, t[66] = z, t[67] = c) : c = t[67];
        let l;
        t[68] !== m || t[69] !== r || t[70] !== e ? (l = m.formatMessage(e ? $.retryPlusConfirmationButton : r ? $.retryPersonalPlusSwitchButton : $.retryBusinessCancellationButton), t[68] = m, t[69] = r, t[70] = e, t[71] = l) : l = t[71];
        let u;
        t[72] !== F || t[73] !== c || t[74] !== l ? (u = (0, Q.jsx)(n, {
            color: `primary`,
            loading: F,
            onClick: c,
            children: l
        }), t[72] = F, t[73] = c, t[74] = l, t[75] = u) : u = t[75];
        let d;
        t[76] === Symbol.for(`react.memo_cache_sentinel`) ? (d = St(), t[76] = d) : d = t[76];
        let f;
        t[77] === m ? f = t[78] : (f = m.formatMessage($.manageBusinessSubscriptionLink), t[77] = m, t[78] = f);
        let p;
        t[79] === f ? p = t[80] : (p = (0, Q.jsx)(Fe, {
            className: `text-token-text-secondary text-sm`,
            href: d,
            children: f
        }), t[79] = f, t[80] = p);
        let h;
        t[81] !== u || t[82] !== p ? (h = (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-3`,
            children: [u, p]
        }), t[81] = u, t[82] = p, t[83] = h) : h = t[83];
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

function Wt(e) {
    i.error(e), r.addError(e instanceof Error ? e : Error(`Failed to update workspace token after checkout`), {
        source: `payments.success`
    })
}

function Gt() {
    V({
        fallbackScreenHint: `login`,
        useFallbackScreenHint: !0,
        skipLoginModal: !0
    })
}
var Kt, Z, Q, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, $, cn = e((() => {
    ve(), Kt = Ee(), ne(), mt(), B(), Ze(), O(), k(), xt(), Dt(), ke(), Ke(), dt(), et(), Ne(), tt(), Ve(), it(), qe(), ce(), Le(), ct(), st(), E(), $e(), Qe(), Re(), te(), A(), at(), vt(), f(), P(), y(), Ie(), ue(), b(), C(), x(), g(), v(), N(), F(), Te(), Pe(), Z = t(be()), ye(), Q = pe(), we(), qt = D(() => Se(() => import(`./33d473af-o9ide56zj5y55pan.js`).then(e => e.NoPaymentPlusTrialExtensionAcknowledgement), __vite__mapDeps([0, 1, 2, 3, 4, 5]))), Jt = function(e) {
        return e.Success = `success`, e.PaymentFailed = `payment_failed`, e.UserMismatch = `user_mismatch`, e.OtherError = `other_error`, e
    }({}), Yt = {
        success: !0
    }, Xt = [50, 100, 200, 400, 800, 1600, 3200, 3650], Zt = `2160290604`, Qt = `personal_checkout_failure_plan_recovery_enabled`, $t = `548821362`, en = `1549629729`, tn = `3507623755`, nn = `eligible_upsell_context_ids`, rn = `return_to_thread_enabled`, an = `drop_into_work_after_upgrade`, on = me(function() {
        "use forget";
        let e = (0, Kt.c)(27),
            [t] = xe(),
            n = fe(),
            r = l.getItem(w.CheckoutFrom),
            i = z(),
            a = Ce(),
            o;
        e[0] === t ? o = e[1] : (o = t.get(`plan_type`), e[0] = t, e[1] = o);
        let s = o,
            c = s ?? h.PLUS,
            u;
        e[2] === a.checkout_id ? u = e[3] : (u = Tt(a.checkout_id), e[2] = a.checkout_id, e[3] = u);
        let d = u,
            f;
        e[4] !== i || e[5] !== a.checkout_id ? (f = i?.isPersonalAccount() === !0 && typeof i.normalizedAccountUserId == `string` && J({
            checkoutSessionId: a.checkout_id,
            accountId: i.id,
            accountUserId: i.normalizedAccountUserId
        }) != null, e[4] = i, e[5] = a.checkout_id, e[6] = f) : f = e[6];
        let p = f,
            m;
        e[7] !== a.checkout_id || e[8] !== n.search ? (m = new URLSearchParams(n.search), T(a.checkout_id, m), e[7] = a.checkout_id, e[8] = n.search, e[9] = m) : m = e[9];
        let g = m,
            _, v;
        if (e[10] !== c || e[11] !== p || e[12] !== d || e[13] !== a.checkout_id || e[14] !== a.postCheckoutResult || e[15] !== a.processor_entity || e[16] !== g ? (_ = () => {
                let e = a.checkout_id,
                    t = a.processor_entity ?? void 0;
                a.postCheckoutResult !== `success` && ft(`payments_success`, {
                    checkoutPlanType: c,
                    checkoutId: e,
                    processorEntity: t,
                    isCheckoutModalEnabled: d,
                    ...p ? {
                        entryPoint: K.STUDENTS_2026
                    } : {},
                    outcome: a.postCheckoutResult === `payment_failed` ? `payment_failed` : a.postCheckoutResult === `user_mismatch` ? `user_mismatch` : `other_error`
                }, g)
            }, v = [c, p, d, a.checkout_id, a.processor_entity, a.postCheckoutResult, g], e[10] = c, e[11] = p, e[12] = d, e[13] = a.checkout_id, e[14] = a.postCheckoutResult, e[15] = a.processor_entity, e[16] = g, e[17] = _, e[18] = v) : (_ = e[17], v = e[18]), (0, Z.useEffect)(_, v), !i) return null;
        let y = Ut,
            b = Ge(r) ? r : null,
            x = s != null,
            S;
        return e[19] !== y || e[20] !== c || e[21] !== i || e[22] !== a || e[23] !== g || e[24] !== b || e[25] !== x ? (S = (0, Q.jsx)(y, {
            checkoutFrom: b,
            checkoutPlanType: c,
            currentAccount: i,
            hasExplicitCheckoutPlanType: x,
            loaderData: a,
            sourceSearchParams: g
        }), e[19] = y, e[20] = c, e[21] = i, e[22] = a, e[23] = g, e[24] = b, e[25] = x, e[26] = S) : S = e[26], S
    }), sn = () => {
        "use forget";
        let e = (0, Kt.c)(4),
            t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(`h1`, {
            className: `text-token-text-primary text-xl font-semibold`,
            children: (0, Q.jsx)(W, {
                ...$.userMismatchRecoveryTitle
            })
        }), e[0] = t) : t = e[0];
        let r;
        e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary text-sm leading-6`,
            children: (0, Q.jsx)(W, {
                ...$.userMismatchRecoveryBody
            })
        }), e[1] = r) : r = e[1];
        let i;
        e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Q.jsx)(n, {
            color: `primary`,
            onClick: Gt,
            children: (0, Q.jsx)(W, {
                ...$.switchAccountsButton
            })
        }), e[2] = i) : i = e[2];
        let a;
        return e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Q.jsx)(`div`, {
            className: `flex min-h-screen items-center justify-center px-6 py-12`,
            children: (0, Q.jsxs)(`div`, {
                className: `border-token-border-default bg-token-bg-primary flex w-full max-w-md flex-col gap-5 rounded-2xl border p-6 text-center shadow-lg`,
                children: [t, r, (0, Q.jsxs)(`div`, {
                    className: `flex flex-col gap-3`,
                    children: [i, (0, Q.jsx)(Fe, {
                        className: `text-token-text-secondary text-sm`,
                        href: `/`,
                        children: (0, Q.jsx)(W, {
                            ...$.returnToChatgptLink
                        })
                    })]
                })]
            })
        }), e[3] = a) : a = e[3], a
    }, $ = he({
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
    Et as a, on as i, Jt as n, Dt as o, cn as r, sn as t
};
//# sourceMappingURL=bfd5ba7b-msiw5hxqkwxynaq2.js.map