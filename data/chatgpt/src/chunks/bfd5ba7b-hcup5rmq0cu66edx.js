const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/33d473af-genv6q4p6dxe2vnc.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/0e2455cf-5y65kiuirs6pcl0x.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $nt as n,
    $tt as r,
    A1 as i,
    AT as a,
    Ant as o,
    Btt as s,
    C0 as c,
    C1 as l,
    Cit as u,
    Dit as d,
    Ga as f,
    Htt as p,
    IB as m,
    J2 as h,
    K as g,
    Lot as _,
    Nrt as v,
    OB as y,
    Qtt as b,
    Rot as x,
    S0 as S,
    S6 as C,
    Sit as w,
    Srt as T,
    Tit as ee,
    Ua as E,
    Vrt as te,
    Y2 as D,
    Z as O,
    a7 as k,
    bnt as A,
    dnt as j,
    e1 as M,
    ent as N,
    gnt as P,
    hU as ne,
    i1 as F,
    k1 as I,
    kT as re,
    kit as L,
    knt as R,
    l7 as z,
    mnt as ie,
    n1 as B,
    pU as ae,
    prt as V,
    u1 as oe,
    ust as se,
    v4 as H,
    vnt as ce,
    wst as le,
    y1 as ue,
    ynt as de,
    zot as fe
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as pe,
    At as me,
    Bn as he,
    Ht as ge,
    Ln as _e,
    N as ve,
    Nn as U,
    Pt as ye,
    Rn as be,
    Ut as xe,
    Vn as Se,
    cn as Ce,
    jt as we,
    ln as Te,
    s as Ee,
    wn as De,
    zn as Oe
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Gin as W,
    K2t as ke,
    Kcn as Ae,
    San as je,
    UUn as Me,
    WUn as Ne,
    Win as Pe,
    Xin as Fe,
    _sn as Ie,
    dsn as Le,
    eGn as Re,
    fn as ze,
    gn as Be,
    gsn as Ve,
    hn as He,
    lin as Ue,
    lm as We,
    mrn as Ge,
    msn as Ke,
    ntt as qe,
    oin as Je,
    pn as Ye,
    psn as Xe,
    q2t as Ze,
    qcn as G,
    rtt as Qe,
    sin as $e,
    sm as et,
    van as tt,
    vsn as nt
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Jh as rt,
    eg as it,
    l_ as at,
    o_ as ot
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    r as st,
    t as ct
} from "./ee0eeb85-dfujvmq4b9s3yr8f.js";
import {
    i as lt,
    r as ut
} from "./58459bbe-oiqyxcbpm6us4dkw.js";
import {
    a as dt,
    o as ft,
    t as K,
    y as pt
} from "./a4eef3c0-ip3ucad1hu328lch.js";
import {
    n as mt,
    r as ht,
    t as gt
} from "./97a55ca1-ob1vz7gjgz2uk2e8.js";
import {
    n as _t,
    t as vt
} from "./4cc06ac6-izaqbbfh44s9v108.js";
import {
    i as yt,
    n as q,
    r as bt,
    t as xt
} from "./efd279b6-b90gmea5n9iovib1.js";
import {
    a as St,
    c as Ct,
    n as wt,
    t as Tt
} from "./a6f4f526-ciii8c74yj5s05qo.js";

function Et(e) {
    let t = vt(b.getItem(r.CheckoutConfirmLatencyPending), e);
    return t.status === `ready` && t.pending.is_checkout_modal_enabled === !0
}

function Dt({
    checkoutId: e,
    checkoutPlanType: t,
    postCheckoutResult: n,
    processorEntity: i
}) {
    let a = b.getItem(r.CheckoutConfirmLatencyPending) ?? null;
    if (!a) return;
    let o = vt(a, e);
    if (o.status === `discard`) {
        b.removeItem(r.CheckoutConfirmLatencyPending);
        return
    }
    if (o.status === `other_checkout`) return;
    let {
        pending: s,
        durationMs: c
    } = o;
    return d.addAction(`checkout.confirm.latency_ms`, {
        duration_ms: c,
        requires_manual_approval: s.requires_manual_approval === !0,
        checkout_session_id: e ?? s.checkout_session_id,
        processor_entity: i ?? s.processor_entity,
        plan_type: t,
        result_type: n,
        measurement_point: `return_page`
    }), b.removeItem(r.CheckoutConfirmLatencyPending), {
        durationMs: c,
        checkoutSessionId: s.checkout_session_id
    }
}
var Ot = e((() => {
    _t(), L(), N()
}));

function J(e) {
    h(e, {
        sessionChanged: !1
    })
}

function kt(e) {
    return e.isPersonalAccount() && e.isPlus() && e.hasPaidSubscription() && !e.isActiveSubscriptionGratis() && e.data.subscriptionStatus.subscriptionPlan === fe.PLUS
}

function Y({
    checkoutPlanType: e,
    checkoutSessionId: t,
    currentAccount: n,
    hasExplicitCheckoutPlanType: i,
    isStudents2026Checkout: a = !1,
    intl: o,
    message: s,
    navigate: c,
    toaster: l
}) {
    if (l.warning(o.formatMessage(s), {
            duration: 5
        }), (a || bt(t)) && b.removeItem(r.CheckoutFrom), n.isPersonalAccount()) {
        let e = xt({
            checkoutSessionId: t,
            accountId: n.id,
            accountUserId: n.normalizedAccountUserId,
            status: `failure`
        });
        if (e != null) {
            c(e);
            return
        }
    }
    let u = new URL(At(e, i), window.location.origin),
        d = Xe(t);
    d != null && (u.searchParams.set(Ve, d), u.searchParams.set(`mweb_fallback`, `1`)), c(`${u.pathname}${u.search}${u.hash}`)
}

function X(e) {
    return Object.values(_).some(t => t === e)
}

function At(e, t) {
    return !t || !X(e) || !W(e) || !ce(Zt).get(Qt, !1) ? `/#pricing` : `/?cta_tab=personal&highlight_plan=${e}#pricing`
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
    }), C(), w.deleteCookie(ee.DogfoodingAccountType), e === _.PLUS && j.logEvent(`chatgpt_plus_payment_success_page`)
}
async function Mt({
    hasPaidSubscription: e,
    intl: t,
    queryClient: n
}) {
    try {
        await st({
            hasPaidSubscription: e,
            intl: t,
            queryClient: n
        })
    } catch (t) {
        o.error(t), d.addError(t instanceof Error ? t : Error(`Failed to replay pending image download after checkout`), {
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
    return n?.upsellContextId === `work` && X(e) && W(e) && (t.checkout_kind == null || t.checkout_kind === H.Standard) ? n.threadId != null && n.sitePreview != null ? ut(n.threadId, n.sitePreview) : n.threadId == null ? `/?surface=work` : y(n.threadId) : n?.threadId == null || !X(e) || !W(e) || t.checkout_kind != null && t.checkout_kind !== H.Standard || !P($t).get(nn, []).includes(n.upsellContextId) ? null : ce(en).get(rn, !1) ? y(n.threadId) : null
}

function Ft({
    completion: e,
    checkoutFrom: t,
    checkoutPlanType: n,
    checkoutSessionId: i,
    currentAccount: a,
    defaultHomeRedirectUrl: s,
    hasExplicitCheckoutPlanType: c,
    intl: l,
    navigate: u,
    postCheckoutResult: d,
    queryClient: f,
    toaster: p
}) {
    if (`kind` in e && e.kind === H.CodexTeam) {
        Je(), ue(f, e.workspace_id).then(() => {
            u({
                pathname: rt,
                search: `?account_id=${e.workspace_id}`
            }, {
                replace: !0
            })
        }).catch(e => {
            o.error(e)
        });
        return
    }
    let m = d === `success` && (e.checkout_kind == null || e.checkout_kind === H.Standard) ? tt(i) : null,
        h = $e(),
        g = d === `success` && X(n) && W(n) && (e.checkout_kind == null || e.checkout_kind === H.Standard) ? Xe(i) : null,
        v = t == null ? Pt({
            checkoutPlanType: n,
            completion: e,
            context: h
        }) : null;
    if (Je(), e.entry_point === G.STUDENTS_2026) {
        let e = F() ?? a,
            t = e.isPersonalAccount() && e.normalizedAccountUserId != null && e.id === a.id && e.normalizedAccountUserId === a.normalizedAccountUserId ? q({
                checkoutSessionId: i,
                accountId: e.id,
                accountUserId: e.normalizedAccountUserId
            }) : null;
        if (d !== `success` || t == null || e.normalizedAccountUserId == null || !e.isPlus() || !e.hasPaidSubscription()) {
            Y({
                checkoutPlanType: n,
                checkoutSessionId: i,
                currentAccount: e,
                hasExplicitCheckoutPlanType: c,
                isStudents2026Checkout: !0,
                intl: l,
                message: V.somethingWentWrong,
                navigate: u,
                toaster: p
            });
            return
        }
        let o = xt({
            checkoutSessionId: i,
            accountId: e.id,
            accountUserId: e.normalizedAccountUserId,
            status: `success`
        });
        if (o == null) {
            Y({
                checkoutPlanType: n,
                checkoutSessionId: i,
                currentAccount: e,
                hasExplicitCheckoutPlanType: c,
                isStudents2026Checkout: !0,
                intl: l,
                message: V.somethingWentWrong,
                navigate: u,
                toaster: p
            });
            return
        }
        at(`enrollment_completed`, {
            billingPath: `free_checkout`,
            identity: {
                accountId: e.id,
                accountUserId: e.normalizedAccountUserId
            }
        });
        let s = new URL(o, window.location.origin);
        s.searchParams.set(`refresh_account`, `true`), b.removeItem(r.CheckoutFrom), J(`${s.pathname}${s.search}`)
    } else if (m != null) b.removeItem(r.CheckoutFrom), J(Nt(m.returnPath));
    else if (g != null) {
        let e = new URL(g);
        e.searchParams.delete(Ie), e.searchParams.set(`refresh_account`, `true`), Le(i), b.removeItem(r.CheckoutFrom), J(e.href)
    } else t ? (b.removeItem(r.CheckoutFrom), J(Nt(ze[t]))) : v == null ? d === `success` && c && !(`kind` in e) && (e.checkout_kind == null || e.checkout_kind === H.Standard) && (n === _.PLUS || n === _.PROLITE || n === _.PRO || n === _.PROMAX) && t == null && h == null && ce(tn).get(an, !1) ? J(Nt(`/?surface=work`)) : (p.success(n === _.SCI ? l.formatMessage($.sciPaymentConfirmationToastMessage) : l.formatMessage($.paymentConfirmationToastMessage, {
        planType: n,
        planName: ke(n)
    }), {
        duration: 5
    }), s == null ? J() : J(s)) : J(Nt(v))
}
async function It(e) {
    try {
        await e.refetchQueries({
            queryKey: B().queryKey
        })
    } catch {
        return null
    }
    return F()
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
            queryKey: B().queryKey
        }, {
            throwOnError: !0
        })
    } catch {
        return null
    }
    let n = e.getQueryData(B().queryKey);
    return n == null ? null : M(n).find(e => e.id === t) ?? null
}
async function zt(e) {
    try {
        await e.refetchQueries({
            queryKey: B().queryKey
        }, {
            throwOnError: !0
        })
    } catch {
        return null
    }
    let t = e.getQueryData(B().queryKey);
    return t == null ? null : M(t).find(e => e.structure === x.PERSONAL && e.planType === _.PLUS && e.hasPaidSubscription()) ?? null
}

function Bt(e) {
    return e.willDeactivateAtTermEnd() || e.isDeactivated()
}
async function Vt(e, t) {
    try {
        let {
            updatedAccount: n
        } = await ue(e, t);
        return n
    } catch (e) {
        return d.addError(e instanceof Error ? e : Error(`Failed to switch to personal Plus after cancellation`), {
            source: `payments.success.business_cancel_to_plus`
        }), !1
    }
}
async function Ht(e) {
    await k.safePost(`/subscriptions/cancel`, {
        requestBody: {
            account_id: e
        }
    })
}

function Ut(e) {
    "use forget";
    let t = (0, Kt.c)(88),
        {
            checkoutFrom: n,
            checkoutPlanType: r,
            currentAccount: i,
            hasExplicitCheckoutPlanType: a,
            loaderData: o,
            sourceSearchParams: c
        } = e,
        l = Oe(),
        u = ye(),
        f = ve(),
        p = ne(),
        m = (0, Z.useRef)(!1),
        h = (0, Z.useRef)(null),
        v = (0, Z.useRef)(!1),
        [y, b] = (0, Z.useState)(null),
        x, S;
    t[0] !== i || t[1] !== y ? (x = () => {
        y != null && (i.id !== y.accountId || i.normalizedAccountUserId !== y.accountUserId) && y.onClose()
    }, S = [i, y], t[0] = i, t[1] = y, t[2] = x, t[3] = S) : (x = t[2], S = t[3]), (0, Z.useEffect)(x, S);
    let C;
    t[4] === o.checkout_id ? C = t[5] : (C = Et(o.checkout_id), t[4] = o.checkout_id, t[5] = C);
    let T = C,
        D = o.postCheckoutResult === `success` && a && (r === _.PLUS || r === _.PROLITE || r === _.PRO || r === _.PROMAX) && !(`kind` in o.completion) && (o.completion.checkout_kind == null || o.completion.checkout_kind === H.Standard) ? r === _.PLUS ? g : et : null,
        O;
    t[6] !== r || t[7] !== o.checkout_id ? (O = () => wt({
        checkoutPlanType: r,
        checkoutSessionId: o.checkout_id
    }), t[6] = r, t[7] = o.checkout_id, t[8] = O) : O = t[8];
    let [k] = (0, Z.useState)(O), [j, M] = (0, Z.useState)(null), [N, P] = (0, Z.useState)(!1), I;
    t[9] !== l || t[10] !== f || t[11] !== p ? (I = async e => {
        P(!0);
        let t = await zt(f);
        if (t == null) return d.addError(Error(`Unable to verify personal Plus after checkout`), {
            source: `payments.success.business_cancel_to_plus`
        }), M({
            stage: `plus_unconfirmed`,
            handoff: e
        }), P(!1), !1;
        let n = await Rt(f, e.businessAccountId);
        if (n == null || !n.isSelfServeBusiness()) {
            d.addError(Error(`Unable to verify intended Business account after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            });
            let t = s.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return A(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
                unique_event_id: t
            } : void 0), M({
                stage: `business_cancellation_failed`,
                handoff: e
            }), P(!1), !1
        }
        let r = Bt(n);
        if (!r) {
            let t;
            try {
                await Ht(e.businessAccountId)
            } catch (e) {
                t = e
            }
            let n = await Rt(f, e.businessAccountId);
            r = n?.isSelfServeBusiness() === !0 && Bt(n), r || d.addError(t instanceof Error ? t : Error(`Unable to confirm Business cancellation after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            })
        }
        if (!r) {
            let t = s.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return A(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
                unique_event_id: t
            } : void 0), M({
                stage: `business_cancellation_failed`,
                handoff: e
            }), P(!1), !1
        }
        let i = s.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
            step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_SUCCEEDED`,
            legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_succeeded`
        });
        return A(`chatgpt_business_cancel_to_plus_business_cancellation_succeeded`, void 0, i ? {
            unique_event_id: i
        } : void 0), await Promise.all([K(), ie()]), await Vt(f, t.id) ? (Tt(), M(null), p.success(l.formatMessage($.businessCancelToPlusSuccessMessage), {
            duration: 5
        }), P(!1), J(), !0) : (M({
            stage: `personal_switch_failed`,
            handoff: e
        }), P(!1), !1)
    }, t[9] = l, t[10] = f, t[11] = p, t[12] = I) : I = t[12];
    let L = I,
        R;
    t[13] !== n || t[14] !== r || t[15] !== L || t[16] !== i || t[17] !== D || t[18] !== a || t[19] !== l || t[20] !== T || t[21] !== o.checkout_id || t[22] !== o.completion || t[23] !== o.postCheckoutResult || t[24] !== o.processor_entity || t[25] !== k || t[26] !== u || t[27] !== f || t[28] !== c || t[29] !== p || t[30] !== y ? (R = () => {
        if (y != null) return;
        let e = !1,
            t = mt(o.checkout_id, i),
            d = bt(o.checkout_id),
            g = i.isPersonalAccount() && i.normalizedAccountUserId != null && q({
                checkoutSessionId: o.checkout_id,
                accountId: i.id,
                accountUserId: i.normalizedAccountUserId
            }) != null,
            x = o.postCheckoutResult === `success` && !(`kind` in o.completion) && o.completion.entry_point === G.STUDENTS_2026,
            S = n === Ye.STUDENTS && a && r === _.PLUS,
            C = d || x || S,
            E = o.postCheckoutResult === `success` && !(`kind` in o.completion) && (o.completion.checkout_kind == null || o.completion.checkout_kind === H.Standard) && (d || x || o.completion.entry_point == null && S),
            O = () => {
                if (m.current) return;
                m.current = !0;
                let e = s.logStructuredEvent(`ChatgptCheckoutPaymentSuccessPage`, {
                    checkoutPlanType: r,
                    checkoutId: o.checkout_id,
                    processorEntity: o.processor_entity ?? void 0,
                    isCheckoutModalEnabled: T,
                    ...o.postCheckoutResult === `success` && o.completion.checkout_kind != null ? {
                        checkoutKind: o.completion.checkout_kind,
                        entryPoint: o.completion.entry_point ?? void 0
                    } : {}
                });
                o.postCheckoutResult === `success` && Qe({
                    currentAccount: i,
                    location: `PaymentsSuccessPage`,
                    planName: r
                }), jt({
                    checkoutPlanType: r,
                    eventId: e
                })
            };
        Dt({
            checkoutId: o.checkout_id,
            checkoutPlanType: r,
            postCheckoutResult: o.postCheckoutResult,
            processorEntity: o.processor_entity ?? void 0
        });
        let j = () => (h.current?.checkoutId !== o.checkout_id && (h.current = {
                checkoutId: o.checkout_id,
                pending: te({
                    reason: `checkout_success`,
                    path: `/payments/success`
                }).catch(Wt)
            }), h.current.pending),
            N = () => {
                (async () => {
                    if (o.postCheckoutResult !== `success`) return;
                    if (`kind` in o.completion && o.completion.kind === H.CodexTeam) {
                        Ft({
                            completion: o.completion,
                            checkoutFrom: n,
                            checkoutPlanType: r,
                            checkoutSessionId: o.checkout_id,
                            currentAccount: i,
                            defaultHomeRedirectUrl: D,
                            hasExplicitCheckoutPlanType: a,
                            intl: l,
                            navigate: u,
                            postCheckoutResult: o.postCheckoutResult,
                            queryClient: f,
                            toaster: p
                        });
                        return
                    }
                    if (k != null) {
                        if (await j(), e) return;
                        if (!v.current) {
                            v.current = !0;
                            let e = s.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                            });
                            A(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
                                unique_event_id: e
                            } : void 0), await L(k)
                        }
                        return
                    }
                    let d = i,
                        m = E && (!i.isPlus() || !i.hasPaidSubscription());
                    if (i.isFree() || m || t) {
                        if (d = E && g || t ? await Lt({
                                isProvisioned: t ? kt : void 0,
                                checkoutAccount: i,
                                isCancelled: () => e,
                                queryClient: f
                            }) : await It(f), e) return;
                        (!d || d.isFree()) && (ft({
                            checkoutSessionId: o.checkout_id,
                            checkoutPlanType: r,
                            processorEntity: o.processor_entity ?? void 0,
                            isCheckoutModalEnabled: T,
                            checkoutKind: o.completion.checkout_kind ?? void 0,
                            entryPoint: o.completion.entry_point ?? void 0,
                            sourceSearchParams: c,
                            accessStage: `personal_account_refresh`,
                            failureReason: d == null ? `account_status_missing` : `account_still_free`
                        }), f.invalidateQueries(B()))
                    }
                    if (await j(), e || (await Mt({
                            hasPaidSubscription: d?.hasPaidSubscription() ?? !1,
                            intl: l,
                            queryClient: f
                        }), e)) return;
                    if (E) {
                        let e = i.isFree() || m ? d : F() ?? i;
                        if (!((e != null && e.isPersonalAccount() && e.normalizedAccountUserId != null ? q({
                                checkoutSessionId: o.checkout_id,
                                accountId: e.id,
                                accountUserId: e.normalizedAccountUserId
                            }) : null) != null && e != null && e.isPersonalAccount() && e.isPlus() && e.hasPaidSubscription() && e.id === i.id && e.normalizedAccountUserId != null && e.normalizedAccountUserId === i.normalizedAccountUserId)) {
                            pt(`payments_success`, {
                                checkoutPlanType: r,
                                checkoutId: o.checkout_id,
                                processorEntity: o.processor_entity ?? void 0,
                                isCheckoutModalEnabled: T,
                                checkoutKind: o.completion.checkout_kind ?? void 0,
                                entryPoint: G.STUDENTS_2026,
                                outcome: `other_error`
                            }, c), Y({
                                checkoutPlanType: r,
                                checkoutSessionId: o.checkout_id,
                                currentAccount: i,
                                hasExplicitCheckoutPlanType: a,
                                isStudents2026Checkout: !0,
                                intl: l,
                                message: V.somethingWentWrong,
                                navigate: u,
                                toaster: p
                            });
                            return
                        }
                        O()
                    }
                    if (await K(), e) return;
                    let h = e => {
                        let t = e === void 0 ? D : e;
                        Ft({
                            completion: E ? {
                                ...o.completion,
                                entry_point: G.STUDENTS_2026
                            } : o.completion,
                            checkoutFrom: n,
                            checkoutPlanType: r,
                            checkoutSessionId: o.checkout_id,
                            currentAccount: i,
                            defaultHomeRedirectUrl: t,
                            hasExplicitCheckoutPlanType: a,
                            intl: l,
                            navigate: u,
                            postCheckoutResult: o.postCheckoutResult,
                            queryClient: f,
                            toaster: p
                        })
                    };
                    if (t) {
                        gt(o.checkout_id);
                        let e = F(),
                            t = e?.data.subscriptionStatus.discount;
                        if (e != null && d != null && e.id === i.id && e.normalizedAccountUserId === i.normalizedAccountUserId && kt(d) && kt(e) && t?.promo_campaign_id === `plus-1-month-free` && t.discount_type === se.PERCENTAGE && t.amount === 100 && t.duration_num_periods === 1 && d.id === i.id && d.normalizedAccountUserId === i.normalizedAccountUserId && r === _.PLUS && (o.completion.checkout_kind == null || o.completion.checkout_kind === H.Standard)) {
                            b({
                                accountId: i.id,
                                accountUserId: i.normalizedAccountUserId,
                                onClose: () => h(`/?refresh_account=true`)
                            });
                            return
                        }
                    }
                    h()
                })()
            },
            P = () => {
                K().finally(() => {
                    e || N()
                })
            },
            ne = () => {
                (async () => {
                    if (k != null) {
                        let t = await zt(f);
                        if (e) return;
                        if (t != null) {
                            if (!v.current) {
                                v.current = !0;
                                let e = s.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                    step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                    legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                                });
                                A(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
                                    unique_event_id: e
                                } : void 0), await L(k)
                            }
                            return
                        }
                        M({
                            stage: `plus_unconfirmed`,
                            handoff: k
                        });
                        return
                    }
                    let t = i.isFree() ? await It(f) : i;
                    if (!e) {
                        if (t && !t.isFree()) {
                            if (O(), await j(), e || (await Mt({
                                    hasPaidSubscription: t.hasPaidSubscription(),
                                    intl: l,
                                    queryClient: f
                                }), await K(), e)) return;
                            Ft({
                                completion: Yt,
                                checkoutFrom: n,
                                checkoutPlanType: r,
                                checkoutSessionId: o.checkout_id,
                                currentAccount: i,
                                defaultHomeRedirectUrl: D,
                                hasExplicitCheckoutPlanType: a,
                                intl: l,
                                navigate: u,
                                postCheckoutResult: o.postCheckoutResult,
                                queryClient: f,
                                toaster: p
                            });
                            return
                        }
                        Y({
                            checkoutPlanType: r,
                            checkoutSessionId: o.checkout_id,
                            currentAccount: i,
                            hasExplicitCheckoutPlanType: a,
                            intl: l,
                            toaster: p,
                            navigate: u,
                            message: V.somethingWentWrong
                        })
                    }
                })()
            };
        if (o.postCheckoutResult === `user_mismatch`) return () => {
            e = !0
        };
        if (k == null && C && o.postCheckoutResult !== `success`) return Y({
            checkoutPlanType: r,
            checkoutSessionId: o.checkout_id,
            currentAccount: i,
            hasExplicitCheckoutPlanType: a,
            isStudents2026Checkout: !0,
            intl: l,
            toaster: p,
            navigate: u,
            message: o.postCheckoutResult === `payment_failed` ? $.paymentFailedToastMessage : V.somethingWentWrong
        }), () => {
            e = !0
        };
        o.postCheckoutResult !== `success` && gt(o.checkout_id);
        bb533: switch (o.postCheckoutResult) {
            case `success`:
                E ? w.deleteCookie(ee.DogfoodingAccountType) : O(), P();
                break bb533;
            case `payment_failed`:
                if (k != null) {
                    window.location.href = Ct();
                    break bb533
                }
                Y({
                    checkoutPlanType: r,
                    checkoutSessionId: o.checkout_id,
                    currentAccount: i,
                    hasExplicitCheckoutPlanType: a,
                    intl: l,
                    toaster: p,
                    navigate: u,
                    message: $.paymentFailedToastMessage
                });
                break bb533;
            case `other_error`:
                ne()
        }
        return () => {
            e = !0
        }
    }, t[13] = n, t[14] = r, t[15] = L, t[16] = i, t[17] = D, t[18] = a, t[19] = l, t[20] = T, t[21] = o.checkout_id, t[22] = o.completion, t[23] = o.postCheckoutResult, t[24] = o.processor_entity, t[25] = k, t[26] = u, t[27] = f, t[28] = c, t[29] = p, t[30] = y, t[31] = R) : R = t[31];
    let z;
    if (t[32] !== n || t[33] !== r || t[34] !== L || t[35] !== i || t[36] !== D || t[37] !== a || t[38] !== l || t[39] !== T || t[40] !== o || t[41] !== k || t[42] !== u || t[43] !== f || t[44] !== c || t[45] !== p || t[46] !== y ? (z = [n, r, L, y, i, D, a, l, T, o, k, u, f, c, p], t[32] = n, t[33] = r, t[34] = L, t[35] = i, t[36] = D, t[37] = a, t[38] = l, t[39] = T, t[40] = o, t[41] = k, t[42] = u, t[43] = f, t[44] = c, t[45] = p, t[46] = y, t[47] = z) : z = t[47], (0, Z.useEffect)(R, z), o.postCheckoutResult === `user_mismatch`) {
        let e;
        return t[48] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(sn, {}), t[48] = e) : e = t[48], e
    }
    if (y != null) {
        let e = i.id === y.accountId && i.normalizedAccountUserId === y.accountUserId,
            n;
        t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (n = {}, t[49] = n) : n = t[49];
        let r;
        return t[50] !== e || t[51] !== y.onClose ? (r = (0, Q.jsx)(E, {
            for: qt,
            open: e,
            onClose: y.onClose,
            withProps: n
        }), t[50] = e, t[51] = y.onClose, t[52] = r) : r = t[52], r
    }
    if (j != null) {
        let e = j.stage === `plus_unconfirmed`,
            n = j.stage === `personal_switch_failed`,
            r;
        t[53] !== l || t[54] !== n || t[55] !== e ? (r = l.formatMessage(e ? $.plusConfirmationRecoveryTitle : n ? $.personalPlusSwitchRecoveryTitle : $.businessCancellationRecoveryTitle), t[53] = l, t[54] = n, t[55] = e, t[56] = r) : r = t[56];
        let i;
        t[57] === r ? i = t[58] : (i = (0, Q.jsx)(`h1`, {
            className: `text-token-text-primary text-xl font-semibold`,
            children: r
        }), t[57] = r, t[58] = i);
        let a;
        t[59] !== l || t[60] !== n || t[61] !== e ? (a = l.formatMessage(e ? $.plusConfirmationRecoveryBody : n ? $.personalPlusSwitchRecoveryBody : $.businessCancellationRecoveryBody), t[59] = l, t[60] = n, t[61] = e, t[62] = a) : a = t[62];
        let o;
        t[63] === a ? o = t[64] : (o = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary text-sm leading-6`,
            children: a
        }), t[63] = a, t[64] = o);
        let s;
        t[65] !== j.handoff || t[66] !== L ? (s = () => {
            A(`chatgpt_business_cancel_to_plus_business_cancellation_retry_clicked`), L(j.handoff)
        }, t[65] = j.handoff, t[66] = L, t[67] = s) : s = t[67];
        let c;
        t[68] !== l || t[69] !== n || t[70] !== e ? (c = l.formatMessage(e ? $.retryPlusConfirmationButton : n ? $.retryPersonalPlusSwitchButton : $.retryBusinessCancellationButton), t[68] = l, t[69] = n, t[70] = e, t[71] = c) : c = t[71];
        let u;
        t[72] !== N || t[73] !== s || t[74] !== c ? (u = (0, Q.jsx)(re, {
            color: `primary`,
            loading: N,
            onClick: s,
            children: c
        }), t[72] = N, t[73] = s, t[74] = c, t[75] = u) : u = t[75];
        let d;
        t[76] === Symbol.for(`react.memo_cache_sentinel`) ? (d = Ct(), t[76] = d) : d = t[76];
        let f;
        t[77] === l ? f = t[78] : (f = l.formatMessage($.manageBusinessSubscriptionLink), t[77] = l, t[78] = f);
        let p;
        t[79] === f ? p = t[80] : (p = (0, Q.jsx)(Me, {
            className: `text-token-text-secondary text-sm`,
            href: d,
            children: f
        }), t[79] = f, t[80] = p);
        let m;
        t[81] !== u || t[82] !== p ? (m = (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-3`,
            children: [u, p]
        }), t[81] = u, t[82] = p, t[83] = m) : m = t[83];
        let h;
        return t[84] !== o || t[85] !== m || t[86] !== i ? (h = (0, Q.jsx)(`div`, {
            className: `flex min-h-screen items-center justify-center px-6 py-12`,
            children: (0, Q.jsxs)(`div`, {
                className: `border-token-border-default bg-token-bg-primary flex w-full max-w-md flex-col gap-5 rounded-2xl border p-6 text-center shadow-lg`,
                children: [i, o, m]
            })
        }), t[84] = o, t[85] = m, t[86] = i, t[87] = h) : h = t[87], h
    }
    return null
}

function Wt(e) {
    o.error(e), d.addError(e instanceof Error ? e : Error(`Failed to update workspace token after checkout`), {
        source: `payments.success`
    })
}

function Gt() {
    i({
        fallbackScreenHint: `login`,
        useFallbackScreenHint: !0,
        skipLoginModal: !0
    })
}
var Kt, Z, Q, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, $, cn = e((() => {
    pe(), Kt = De(), f(), ht(), c(), je(), le(), a(), St(), Ot(), Ae(), Pe(), dt(), Fe(), Re(), Ke(), nt(), it(), He(), T(), Ne(), lt(), ct(), O(), We(), qe(), Ge(), oe(), I(), ot(), yt(), ae(), v(), p(), Ue(), u(), L(), N(), R(), D(), z(), de(), m(), Ee(), Ze(), Z = t(Se()), be(), Q = he(), Te(), qt = S(() => Ce(() => import(`./33d473af-genv6q4p6dxe2vnc.js`).then(e => e.NoPaymentPlusTrialExtensionAcknowledgement), __vite__mapDeps([0, 1, 2, 3, 4, 5]))), Jt = function(e) {
        return e.Success = `success`, e.PaymentFailed = `payment_failed`, e.UserMismatch = `user_mismatch`, e.OtherError = `other_error`, e
    }({}), Yt = {
        success: !0
    }, Xt = [50, 100, 200, 400, 800, 1600, 3200, 3650], Zt = `2160290604`, Qt = `personal_checkout_failure_plan_recovery_enabled`, $t = `548821362`, en = `1549629729`, tn = `3507623755`, nn = `eligible_upsell_context_ids`, rn = `return_to_thread_enabled`, an = `drop_into_work_after_upgrade`, on = xe(function() {
        "use forget";
        let e = (0, Kt.c)(27),
            [t] = ge(),
            i = we(),
            a = b.getItem(r.CheckoutFrom),
            o = l(),
            s = me(),
            c;
        e[0] === t ? c = e[1] : (c = t.get(`plan_type`), e[0] = t, e[1] = c);
        let u = c,
            d = u ?? _.PLUS,
            f;
        e[2] === s.checkout_id ? f = e[3] : (f = Et(s.checkout_id), e[2] = s.checkout_id, e[3] = f);
        let p = f,
            m;
        e[4] !== o || e[5] !== s.checkout_id ? (m = o?.isPersonalAccount() === !0 && typeof o.normalizedAccountUserId == `string` && q({
            checkoutSessionId: s.checkout_id,
            accountId: o.id,
            accountUserId: o.normalizedAccountUserId
        }) != null, e[4] = o, e[5] = s.checkout_id, e[6] = m) : m = e[6];
        let h = m,
            g;
        e[7] !== s.checkout_id || e[8] !== i.search ? (g = new URLSearchParams(i.search), n(s.checkout_id, g), e[7] = s.checkout_id, e[8] = i.search, e[9] = g) : g = e[9];
        let v = g,
            y, x;
        if (e[10] !== d || e[11] !== h || e[12] !== p || e[13] !== s.checkout_id || e[14] !== s.postCheckoutResult || e[15] !== s.processor_entity || e[16] !== v ? (y = () => {
                let e = s.checkout_id,
                    t = s.processor_entity ?? void 0;
                s.postCheckoutResult !== `success` && pt(`payments_success`, {
                    checkoutPlanType: d,
                    checkoutId: e,
                    processorEntity: t,
                    isCheckoutModalEnabled: p,
                    ...h ? {
                        entryPoint: G.STUDENTS_2026
                    } : {},
                    outcome: s.postCheckoutResult === `payment_failed` ? `payment_failed` : s.postCheckoutResult === `user_mismatch` ? `user_mismatch` : `other_error`
                }, v)
            }, x = [d, h, p, s.checkout_id, s.processor_entity, s.postCheckoutResult, v], e[10] = d, e[11] = h, e[12] = p, e[13] = s.checkout_id, e[14] = s.postCheckoutResult, e[15] = s.processor_entity, e[16] = v, e[17] = y, e[18] = x) : (y = e[17], x = e[18]), (0, Z.useEffect)(y, x), !o) return null;
        let S = Ut,
            C = Be(a) ? a : null,
            w = u != null,
            T;
        return e[19] !== S || e[20] !== d || e[21] !== o || e[22] !== s || e[23] !== v || e[24] !== C || e[25] !== w ? (T = (0, Q.jsx)(S, {
            checkoutFrom: C,
            checkoutPlanType: d,
            currentAccount: o,
            hasExplicitCheckoutPlanType: w,
            loaderData: s,
            sourceSearchParams: v
        }), e[19] = S, e[20] = d, e[21] = o, e[22] = s, e[23] = v, e[24] = C, e[25] = w, e[26] = T) : T = e[26], T
    }), sn = () => {
        "use forget";
        let e = (0, Kt.c)(4),
            t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(`h1`, {
            className: `text-token-text-primary text-xl font-semibold`,
            children: (0, Q.jsx)(U, {
                ...$.userMismatchRecoveryTitle
            })
        }), e[0] = t) : t = e[0];
        let n;
        e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary text-sm leading-6`,
            children: (0, Q.jsx)(U, {
                ...$.userMismatchRecoveryBody
            })
        }), e[1] = n) : n = e[1];
        let r;
        e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Q.jsx)(re, {
            color: `primary`,
            onClick: Gt,
            children: (0, Q.jsx)(U, {
                ...$.switchAccountsButton
            })
        }), e[2] = r) : r = e[2];
        let i;
        return e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Q.jsx)(`div`, {
            className: `flex min-h-screen items-center justify-center px-6 py-12`,
            children: (0, Q.jsxs)(`div`, {
                className: `border-token-border-default bg-token-bg-primary flex w-full max-w-md flex-col gap-5 rounded-2xl border p-6 text-center shadow-lg`,
                children: [t, n, (0, Q.jsxs)(`div`, {
                    className: `flex flex-col gap-3`,
                    children: [r, (0, Q.jsx)(Me, {
                        className: `text-token-text-secondary text-sm`,
                        href: `/`,
                        children: (0, Q.jsx)(U, {
                            ...$.returnToChatgptLink
                        })
                    })]
                })]
            })
        }), e[3] = i) : i = e[3], i
    }, $ = _e({
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
    Dt as a, on as i, Jt as n, Ot as o, cn as r, sn as t
};
//# sourceMappingURL=bfd5ba7b-hcup5rmq0cu66edx.js.map