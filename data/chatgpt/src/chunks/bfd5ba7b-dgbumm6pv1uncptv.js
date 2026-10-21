const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/33d473af-ghdd6qb9hf262pt9.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-tap9fxyhk4ehe0bs.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/0e2455cf-5y65kiuirs6pcl0x.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    BU as r,
    C4 as i,
    Cit as a,
    F7 as o,
    Fnt as s,
    Frt as c,
    HU as l,
    Int as u,
    JB as d,
    JT as f,
    K as p,
    K4 as m,
    Ka as h,
    Kst as g,
    M1 as _,
    O1 as v,
    Pnt as y,
    Qnt as b,
    R1 as x,
    S4 as S,
    Snt as C,
    W6 as w,
    Wa as ee,
    X0 as te,
    Xnt as ne,
    YT as T,
    Yrt as E,
    Z as D,
    Z0 as O,
    Z1 as k,
    aat as A,
    bst as j,
    dat as M,
    drt as N,
    ert as P,
    frt as F,
    hit as I,
    i0 as L,
    iat as re,
    iit as R,
    lat as z,
    nV as B,
    nrt as V,
    oct as H,
    q1 as ie,
    qnt as ae,
    r0 as oe,
    sat as se,
    trt as ce,
    wnt as le,
    xst as ue,
    yst as U,
    z7 as de
} from "./4813494d-tap9fxyhk4ehe0bs.js";
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
    Ban as Oe,
    Cin as ke,
    Ein as Ae,
    Fsn as je,
    H2t as Me,
    Ian as Ne,
    Isn as Pe,
    Msn as Fe,
    Psn as Ie,
    V2t as Le,
    can as Re,
    cm as ze,
    dln as G,
    fn as Be,
    gn as Ve,
    hn as He,
    jrn as Ue,
    jsn as We,
    ksn as Ge,
    lan as K,
    ltt as Ke,
    man as qe,
    nWn as Je,
    pGn as Ye,
    pn as Xe,
    rWn as Ze,
    uln as Qe,
    um as $e,
    utt as et,
    win as tt
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    Ch as nt,
    Fg as rt,
    Rg as it,
    kh as at
} from "./c2675c8c-h5ybkhdzcoblzzdu.js";
import {
    r as ot,
    t as st
} from "./ee0eeb85-ms8vzqjm4eysom1k.js";
import {
    i as ct,
    r as lt
} from "./58459bbe-m8lva0cgqobauk10.js";
import {
    a as ut,
    o as dt,
    t as q,
    y as ft
} from "./a4eef3c0-bjx4n03ihy71nklv.js";
import {
    n as pt,
    r as mt,
    t as ht
} from "./97a55ca1-ob1vz7gjgz2uk2e8.js";
import {
    n as gt,
    t as _t
} from "./4cc06ac6-d70v1j7ndpvuruq7.js";
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
} from "./a6f4f526-dpcmny0fhjf09pvu.js";

function Tt(e) {
    let t = _t(y.getItem(s.CheckoutConfirmLatencyPending), e);
    return t.status === `ready` && t.pending.is_checkout_modal_enabled === !0
}

function Et({
    checkoutId: e,
    checkoutPlanType: t,
    postCheckoutResult: n,
    processorEntity: r
}) {
    let i = y.getItem(s.CheckoutConfirmLatencyPending) ?? null;
    if (!i) return;
    let a = _t(i, e);
    if (a.status === `discard`) {
        y.removeItem(s.CheckoutConfirmLatencyPending);
        return
    }
    if (a.status === `other_checkout`) return;
    let {
        pending: o,
        durationMs: c
    } = a;
    return z.addAction(`checkout.confirm.latency_ms`, {
        duration_ms: c,
        requires_manual_approval: o.requires_manual_approval === !0,
        checkout_session_id: e ?? o.checkout_session_id,
        processor_entity: r ?? o.processor_entity,
        plan_type: t,
        result_type: n,
        measurement_point: `return_page`
    }), y.removeItem(s.CheckoutConfirmLatencyPending), {
        durationMs: c,
        checkoutSessionId: o.checkout_session_id
    }
}
var Dt = e((() => {
    gt(), M(), u()
}));

function Y(e) {
    S(e, {
        sessionChanged: !1
    })
}

function Ot(e) {
    return e.isPersonalAccount() && e.isPlus() && e.hasPaidSubscription() && !e.isActiveSubscriptionGratis() && e.data.subscriptionStatus.subscriptionPlan === ue.PLUS
}

function X({
    checkoutPlanType: e,
    checkoutSessionId: t,
    currentAccount: n,
    hasExplicitCheckoutPlanType: r,
    isStudents2026Checkout: i = !1,
    intl: a,
    message: o,
    navigate: c,
    toaster: l
}) {
    if (l.warning(a.formatMessage(o), {
            duration: 5
        }), (i || yt(t)) && y.removeItem(s.CheckoutFrom), n.isPersonalAccount()) {
        let e = bt({
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
    let u = new URL(At(e, r), window.location.origin),
        d = We(t);
    d != null && (u.searchParams.set(Ie, d), u.searchParams.set(`mweb_fallback`, `1`)), c(`${u.pathname}${u.search}${u.hash}`)
}

function kt(e) {
    return Object.values(U).some(t => t === e)
}

function At(e, t) {
    return !t || !kt(e) || !K(e) || !P(Zt).get(Qt, !1) ? `/#pricing` : `/?cta_tab=personal&highlight_plan=${e}#pricing`
}

function jt({
    checkoutPlanType: e,
    eventId: t
}) {
    C.logValueEventWithStatsig({
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
    }), w(), re.deleteCookie(se.DogfoodingAccountType), e === U.PLUS && ae.logEvent(`chatgpt_plus_payment_success_page`)
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
        F.error(t), z.addError(t instanceof Error ? t : Error(`Failed to replay pending image download after checkout`), {
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
    return n?.upsellContextId === `work` && kt(e) && K(e) && (t.checkout_kind == null || t.checkout_kind === m.Standard) ? n.threadId != null && n.sitePreview != null ? lt(n.threadId, n.sitePreview) : n.threadId == null ? `/?surface=work` : d(n.threadId) : n?.threadId == null || !kt(e) || !K(e) || t.checkout_kind != null && t.checkout_kind !== m.Standard || !b($t).get(nn, []).includes(n.upsellContextId) ? null : P(en).get(rn, !1) ? d(n.threadId) : null
}

function Ft({
    completion: e,
    checkoutFrom: t,
    checkoutPlanType: n,
    checkoutSessionId: r,
    currentAccount: i,
    defaultHomeRedirectUrl: a,
    hasExplicitCheckoutPlanType: o,
    intl: c,
    navigate: l,
    postCheckoutResult: u,
    queryClient: d,
    toaster: f
}) {
    if (`kind` in e && e.kind === m.CodexTeam) {
        ke(), ie(d, e.workspace_id).then(() => {
            l({
                pathname: nt,
                search: `?account_id=${e.workspace_id}`
            }, {
                replace: !0
            })
        }).catch(e => {
            F.error(e)
        });
        return
    }
    let p = u === `success` && (e.checkout_kind == null || e.checkout_kind === m.Standard) ? Ne(r) : null,
        h = tt(),
        g = u === `success` && kt(n) && K(n) && (e.checkout_kind == null || e.checkout_kind === m.Standard) ? We(r) : null,
        v = t == null ? Pt({
            checkoutPlanType: n,
            completion: e,
            context: h
        }) : null;
    if (ke(), e.entry_point === G.STUDENTS_2026) {
        let e = _() ?? i,
            t = e.isPersonalAccount() && e.normalizedAccountUserId != null && e.id === i.id && e.normalizedAccountUserId === i.normalizedAccountUserId ? J({
                checkoutSessionId: r,
                accountId: e.id,
                accountUserId: e.normalizedAccountUserId
            }) : null;
        if (u !== `success` || t == null || e.normalizedAccountUserId == null || !e.isPlus() || !e.hasPaidSubscription()) {
            X({
                checkoutPlanType: n,
                checkoutSessionId: r,
                currentAccount: e,
                hasExplicitCheckoutPlanType: o,
                isStudents2026Checkout: !0,
                intl: c,
                message: E.somethingWentWrong,
                navigate: l,
                toaster: f
            });
            return
        }
        let a = bt({
            checkoutSessionId: r,
            accountId: e.id,
            accountUserId: e.normalizedAccountUserId,
            status: `success`
        });
        if (a == null) {
            X({
                checkoutPlanType: n,
                checkoutSessionId: r,
                currentAccount: e,
                hasExplicitCheckoutPlanType: o,
                isStudents2026Checkout: !0,
                intl: c,
                message: E.somethingWentWrong,
                navigate: l,
                toaster: f
            });
            return
        }
        it(`enrollment_completed`, {
            billingPath: `free_checkout`,
            identity: {
                accountId: e.id,
                accountUserId: e.normalizedAccountUserId
            }
        });
        let d = new URL(a, window.location.origin);
        d.searchParams.set(`refresh_account`, `true`), y.removeItem(s.CheckoutFrom), Y(`${d.pathname}${d.search}`)
    } else if (p != null) y.removeItem(s.CheckoutFrom), Y(Nt(p.returnPath));
    else if (g != null) {
        let e = new URL(g);
        e.searchParams.delete(je), e.searchParams.set(`refresh_account`, `true`), Ge(r), y.removeItem(s.CheckoutFrom), Y(e.href)
    } else t ? (y.removeItem(s.CheckoutFrom), Y(Nt(Be[t]))) : v == null ? u === `success` && o && !(`kind` in e) && (e.checkout_kind == null || e.checkout_kind === m.Standard) && (n === U.PLUS || n === U.PROLITE || n === U.PRO || n === U.PROMAX) && t == null && h == null && P(tn).get(an, !1) ? Y(Nt(`/?surface=work`)) : (f.success(n === U.SCI ? c.formatMessage($.sciPaymentConfirmationToastMessage) : c.formatMessage($.paymentConfirmationToastMessage, {
        planType: n,
        planName: Le(n)
    }), {
        duration: 5
    }), a == null ? Y() : Y(a)) : Y(Nt(v))
}
async function It(e) {
    try {
        await e.refetchQueries({
            queryKey: n().queryKey
        })
    } catch {
        return null
    }
    return _()
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
            queryKey: n().queryKey
        }, {
            throwOnError: !0
        })
    } catch {
        return null
    }
    let r = e.getQueryData(n().queryKey);
    return r == null ? null : v(r).find(e => e.id === t) ?? null
}
async function zt(e) {
    try {
        await e.refetchQueries({
            queryKey: n().queryKey
        }, {
            throwOnError: !0
        })
    } catch {
        return null
    }
    let t = e.getQueryData(n().queryKey);
    return t == null ? null : v(t).find(e => e.structure === j.PERSONAL && e.planType === U.PLUS && e.hasPaidSubscription()) ?? null
}

function Bt(e) {
    return e.willDeactivateAtTermEnd() || e.isDeactivated()
}
async function Vt(e, t) {
    try {
        let {
            updatedAccount: n
        } = await ie(e, t);
        return n
    } catch (e) {
        return z.addError(e instanceof Error ? e : Error(`Failed to switch to personal Plus after cancellation`), {
            source: `payments.success.business_cancel_to_plus`
        }), !1
    }
}
async function Ht(e) {
    await o.safePost(`/subscriptions/cancel`, {
        requestBody: {
            account_id: e
        }
    })
}

function Ut(e) {
    "use forget";
    let t = (0, Kt.c)(88),
        {
            checkoutFrom: r,
            checkoutPlanType: i,
            currentAccount: o,
            hasExplicitCheckoutPlanType: s,
            loaderData: c,
            sourceSearchParams: u
        } = e,
        d = De(),
        h = _e(),
        v = ge(),
        y = l(),
        b = (0, Z.useRef)(!1),
        x = (0, Z.useRef)(null),
        S = (0, Z.useRef)(!1),
        [w, te] = (0, Z.useState)(null),
        T, D;
    t[0] !== o || t[1] !== w ? (T = () => {
        w != null && (o.id !== w.accountId || o.normalizedAccountUserId !== w.accountUserId) && w.onClose()
    }, D = [o, w], t[0] = o, t[1] = w, t[2] = T, t[3] = D) : (T = t[2], D = t[3]), (0, Z.useEffect)(T, D);
    let O;
    t[4] === c.checkout_id ? O = t[5] : (O = Tt(c.checkout_id), t[4] = c.checkout_id, t[5] = O);
    let k = O,
        A = c.postCheckoutResult === `success` && s && (i === U.PLUS || i === U.PROLITE || i === U.PRO || i === U.PROMAX) && !(`kind` in c.completion) && (c.completion.checkout_kind == null || c.completion.checkout_kind === m.Standard) ? i === U.PLUS ? p : ze : null,
        j;
    t[6] !== i || t[7] !== c.checkout_id ? (j = () => Ct({
        checkoutPlanType: i,
        checkoutSessionId: c.checkout_id
    }), t[6] = i, t[7] = c.checkout_id, t[8] = j) : j = t[8];
    let [M] = (0, Z.useState)(j), [N, P] = (0, Z.useState)(null), [F, I] = (0, Z.useState)(!1), L;
    t[9] !== d || t[10] !== v || t[11] !== y ? (L = async e => {
        I(!0);
        let t = await zt(v);
        if (t == null) return z.addError(Error(`Unable to verify personal Plus after checkout`), {
            source: `payments.success.business_cancel_to_plus`
        }), P({
            stage: `plus_unconfirmed`,
            handoff: e
        }), I(!1), !1;
        let n = await Rt(v, e.businessAccountId);
        if (n == null || !n.isSelfServeBusiness()) {
            z.addError(Error(`Unable to verify intended Business account after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            });
            let t = C.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return V(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
                unique_event_id: t
            } : void 0), P({
                stage: `business_cancellation_failed`,
                handoff: e
            }), I(!1), !1
        }
        let r = Bt(n);
        if (!r) {
            let t;
            try {
                await Ht(e.businessAccountId)
            } catch (e) {
                t = e
            }
            let n = await Rt(v, e.businessAccountId);
            r = n?.isSelfServeBusiness() === !0 && Bt(n), r || z.addError(t instanceof Error ? t : Error(`Unable to confirm Business cancellation after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            })
        }
        if (!r) {
            let t = C.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return V(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
                unique_event_id: t
            } : void 0), P({
                stage: `business_cancellation_failed`,
                handoff: e
            }), I(!1), !1
        }
        let i = C.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
            step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_SUCCEEDED`,
            legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_succeeded`
        });
        return V(`chatgpt_business_cancel_to_plus_business_cancellation_succeeded`, void 0, i ? {
            unique_event_id: i
        } : void 0), await Promise.all([q(), ne()]), await Vt(v, t.id) ? (wt(), P(null), y.success(d.formatMessage($.businessCancelToPlusSuccessMessage), {
            duration: 5
        }), I(!1), Y(), !0) : (P({
            stage: `personal_switch_failed`,
            handoff: e
        }), I(!1), !1)
    }, t[9] = d, t[10] = v, t[11] = y, t[12] = L) : L = t[12];
    let R = L,
        B;
    t[13] !== r || t[14] !== i || t[15] !== R || t[16] !== o || t[17] !== A || t[18] !== s || t[19] !== d || t[20] !== k || t[21] !== c.checkout_id || t[22] !== c.completion || t[23] !== c.postCheckoutResult || t[24] !== c.processor_entity || t[25] !== M || t[26] !== h || t[27] !== v || t[28] !== u || t[29] !== y || t[30] !== w ? (B = () => {
        if (w != null) return;
        let e = !1,
            t = pt(c.checkout_id, o),
            l = yt(c.checkout_id),
            f = o.isPersonalAccount() && o.normalizedAccountUserId != null && J({
                checkoutSessionId: c.checkout_id,
                accountId: o.id,
                accountUserId: o.normalizedAccountUserId
            }) != null,
            p = c.postCheckoutResult === `success` && !(`kind` in c.completion) && c.completion.entry_point === G.STUDENTS_2026,
            ee = r === Xe.STUDENTS && s && i === U.PLUS,
            ne = l || p || ee,
            T = c.postCheckoutResult === `success` && !(`kind` in c.completion) && (c.completion.checkout_kind == null || c.completion.checkout_kind === m.Standard) && (l || p || c.completion.entry_point == null && ee),
            D = () => {
                if (b.current) return;
                b.current = !0;
                let e = C.logStructuredEvent(`ChatgptCheckoutPaymentSuccessPage`, {
                    checkoutPlanType: i,
                    checkoutId: c.checkout_id,
                    processorEntity: c.processor_entity ?? void 0,
                    isCheckoutModalEnabled: k,
                    ...c.postCheckoutResult === `success` && c.completion.checkout_kind != null ? {
                        checkoutKind: c.completion.checkout_kind,
                        entryPoint: c.completion.entry_point ?? void 0
                    } : {}
                });
                c.postCheckoutResult === `success` && et({
                    currentAccount: o,
                    location: `PaymentsSuccessPage`,
                    planName: i
                }), jt({
                    checkoutPlanType: i,
                    eventId: e
                })
            };
        Et({
            checkoutId: c.checkout_id,
            checkoutPlanType: i,
            postCheckoutResult: c.postCheckoutResult,
            processorEntity: c.processor_entity ?? void 0
        });
        let O = () => (x.current?.checkoutId !== c.checkout_id && (x.current = {
                checkoutId: c.checkout_id,
                pending: a({
                    reason: `checkout_success`,
                    path: `/payments/success`
                }).catch(Wt)
            }), x.current.pending),
            j = () => {
                (async () => {
                    if (c.postCheckoutResult !== `success`) return;
                    if (`kind` in c.completion && c.completion.kind === m.CodexTeam) {
                        Ft({
                            completion: c.completion,
                            checkoutFrom: r,
                            checkoutPlanType: i,
                            checkoutSessionId: c.checkout_id,
                            currentAccount: o,
                            defaultHomeRedirectUrl: A,
                            hasExplicitCheckoutPlanType: s,
                            intl: d,
                            navigate: h,
                            postCheckoutResult: c.postCheckoutResult,
                            queryClient: v,
                            toaster: y
                        });
                        return
                    }
                    if (M != null) {
                        if (await O(), e) return;
                        if (!S.current) {
                            S.current = !0;
                            let e = C.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                            });
                            V(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
                                unique_event_id: e
                            } : void 0), await R(M)
                        }
                        return
                    }
                    let a = o,
                        l = T && (!o.isPlus() || !o.hasPaidSubscription());
                    if (o.isFree() || l || t) {
                        if (a = T && f || t ? await Lt({
                                isProvisioned: t ? Ot : void 0,
                                checkoutAccount: o,
                                isCancelled: () => e,
                                queryClient: v
                            }) : await It(v), e) return;
                        (!a || a.isFree()) && (dt({
                            checkoutSessionId: c.checkout_id,
                            checkoutPlanType: i,
                            processorEntity: c.processor_entity ?? void 0,
                            isCheckoutModalEnabled: k,
                            checkoutKind: c.completion.checkout_kind ?? void 0,
                            entryPoint: c.completion.entry_point ?? void 0,
                            sourceSearchParams: u,
                            accessStage: `personal_account_refresh`,
                            failureReason: a == null ? `account_status_missing` : `account_still_free`
                        }), v.invalidateQueries(n()))
                    }
                    if (await O(), e || (await Mt({
                            hasPaidSubscription: a?.hasPaidSubscription() ?? !1,
                            intl: d,
                            queryClient: v
                        }), e)) return;
                    if (T) {
                        let e = o.isFree() || l ? a : _() ?? o;
                        if (!((e != null && e.isPersonalAccount() && e.normalizedAccountUserId != null ? J({
                                checkoutSessionId: c.checkout_id,
                                accountId: e.id,
                                accountUserId: e.normalizedAccountUserId
                            }) : null) != null && e != null && e.isPersonalAccount() && e.isPlus() && e.hasPaidSubscription() && e.id === o.id && e.normalizedAccountUserId != null && e.normalizedAccountUserId === o.normalizedAccountUserId)) {
                            ft(`payments_success`, {
                                checkoutPlanType: i,
                                checkoutId: c.checkout_id,
                                processorEntity: c.processor_entity ?? void 0,
                                isCheckoutModalEnabled: k,
                                checkoutKind: c.completion.checkout_kind ?? void 0,
                                entryPoint: G.STUDENTS_2026,
                                outcome: `other_error`
                            }, u), X({
                                checkoutPlanType: i,
                                checkoutSessionId: c.checkout_id,
                                currentAccount: o,
                                hasExplicitCheckoutPlanType: s,
                                isStudents2026Checkout: !0,
                                intl: d,
                                message: E.somethingWentWrong,
                                navigate: h,
                                toaster: y
                            });
                            return
                        }
                        D()
                    }
                    if (await q(), e) return;
                    let p = e => {
                        let t = e === void 0 ? A : e;
                        Ft({
                            completion: T ? {
                                ...c.completion,
                                entry_point: G.STUDENTS_2026
                            } : c.completion,
                            checkoutFrom: r,
                            checkoutPlanType: i,
                            checkoutSessionId: c.checkout_id,
                            currentAccount: o,
                            defaultHomeRedirectUrl: t,
                            hasExplicitCheckoutPlanType: s,
                            intl: d,
                            navigate: h,
                            postCheckoutResult: c.postCheckoutResult,
                            queryClient: v,
                            toaster: y
                        })
                    };
                    if (t) {
                        ht(c.checkout_id);
                        let e = _(),
                            t = e?.data.subscriptionStatus.discount;
                        if (e != null && a != null && e.id === o.id && e.normalizedAccountUserId === o.normalizedAccountUserId && Ot(a) && Ot(e) && t?.promo_campaign_id === `plus-1-month-free` && t.discount_type === g.PERCENTAGE && t.amount === 100 && t.duration_num_periods === 1 && a.id === o.id && a.normalizedAccountUserId === o.normalizedAccountUserId && i === U.PLUS && (c.completion.checkout_kind == null || c.completion.checkout_kind === m.Standard)) {
                            te({
                                accountId: o.id,
                                accountUserId: o.normalizedAccountUserId,
                                onClose: () => p(`/?refresh_account=true`)
                            });
                            return
                        }
                    }
                    p()
                })()
            },
            N = () => {
                q().finally(() => {
                    e || j()
                })
            },
            F = () => {
                (async () => {
                    if (M != null) {
                        let t = await zt(v);
                        if (e) return;
                        if (t != null) {
                            if (!S.current) {
                                S.current = !0;
                                let e = C.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                    step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                    legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                                });
                                V(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
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
                    let t = o.isFree() ? await It(v) : o;
                    if (!e) {
                        if (t && !t.isFree()) {
                            if (D(), await O(), e || (await Mt({
                                    hasPaidSubscription: t.hasPaidSubscription(),
                                    intl: d,
                                    queryClient: v
                                }), await q(), e)) return;
                            Ft({
                                completion: Yt,
                                checkoutFrom: r,
                                checkoutPlanType: i,
                                checkoutSessionId: c.checkout_id,
                                currentAccount: o,
                                defaultHomeRedirectUrl: A,
                                hasExplicitCheckoutPlanType: s,
                                intl: d,
                                navigate: h,
                                postCheckoutResult: c.postCheckoutResult,
                                queryClient: v,
                                toaster: y
                            });
                            return
                        }
                        X({
                            checkoutPlanType: i,
                            checkoutSessionId: c.checkout_id,
                            currentAccount: o,
                            hasExplicitCheckoutPlanType: s,
                            intl: d,
                            toaster: y,
                            navigate: h,
                            message: E.somethingWentWrong
                        })
                    }
                })()
            };
        if (c.postCheckoutResult === `user_mismatch`) return () => {
            e = !0
        };
        if (M == null && ne && c.postCheckoutResult !== `success`) return X({
            checkoutPlanType: i,
            checkoutSessionId: c.checkout_id,
            currentAccount: o,
            hasExplicitCheckoutPlanType: s,
            isStudents2026Checkout: !0,
            intl: d,
            toaster: y,
            navigate: h,
            message: c.postCheckoutResult === `payment_failed` ? $.paymentFailedToastMessage : E.somethingWentWrong
        }), () => {
            e = !0
        };
        c.postCheckoutResult !== `success` && ht(c.checkout_id);
        bb533: switch (c.postCheckoutResult) {
            case `success`:
                T ? re.deleteCookie(se.DogfoodingAccountType) : D(), N();
                break bb533;
            case `payment_failed`:
                if (M != null) {
                    window.location.href = St();
                    break bb533
                }
                X({
                    checkoutPlanType: i,
                    checkoutSessionId: c.checkout_id,
                    currentAccount: o,
                    hasExplicitCheckoutPlanType: s,
                    intl: d,
                    toaster: y,
                    navigate: h,
                    message: $.paymentFailedToastMessage
                });
                break bb533;
            case `other_error`:
                F()
        }
        return () => {
            e = !0
        }
    }, t[13] = r, t[14] = i, t[15] = R, t[16] = o, t[17] = A, t[18] = s, t[19] = d, t[20] = k, t[21] = c.checkout_id, t[22] = c.completion, t[23] = c.postCheckoutResult, t[24] = c.processor_entity, t[25] = M, t[26] = h, t[27] = v, t[28] = u, t[29] = y, t[30] = w, t[31] = B) : B = t[31];
    let H;
    if (t[32] !== r || t[33] !== i || t[34] !== R || t[35] !== o || t[36] !== A || t[37] !== s || t[38] !== d || t[39] !== k || t[40] !== c || t[41] !== M || t[42] !== h || t[43] !== v || t[44] !== u || t[45] !== y || t[46] !== w ? (H = [r, i, R, w, o, A, s, d, k, c, M, h, v, u, y], t[32] = r, t[33] = i, t[34] = R, t[35] = o, t[36] = A, t[37] = s, t[38] = d, t[39] = k, t[40] = c, t[41] = M, t[42] = h, t[43] = v, t[44] = u, t[45] = y, t[46] = w, t[47] = H) : H = t[47], (0, Z.useEffect)(B, H), c.postCheckoutResult === `user_mismatch`) {
        let e;
        return t[48] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(sn, {}), t[48] = e) : e = t[48], e
    }
    if (w != null) {
        let e = o.id === w.accountId && o.normalizedAccountUserId === w.accountUserId,
            n;
        t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (n = {}, t[49] = n) : n = t[49];
        let r;
        return t[50] !== e || t[51] !== w.onClose ? (r = (0, Q.jsx)(ee, {
            for: qt,
            open: e,
            onClose: w.onClose,
            withProps: n
        }), t[50] = e, t[51] = w.onClose, t[52] = r) : r = t[52], r
    }
    if (N != null) {
        let e = N.stage === `plus_unconfirmed`,
            n = N.stage === `personal_switch_failed`,
            r;
        t[53] !== d || t[54] !== n || t[55] !== e ? (r = d.formatMessage(e ? $.plusConfirmationRecoveryTitle : n ? $.personalPlusSwitchRecoveryTitle : $.businessCancellationRecoveryTitle), t[53] = d, t[54] = n, t[55] = e, t[56] = r) : r = t[56];
        let i;
        t[57] === r ? i = t[58] : (i = (0, Q.jsx)(`h1`, {
            className: `text-token-text-primary text-xl font-semibold`,
            children: r
        }), t[57] = r, t[58] = i);
        let a;
        t[59] !== d || t[60] !== n || t[61] !== e ? (a = d.formatMessage(e ? $.plusConfirmationRecoveryBody : n ? $.personalPlusSwitchRecoveryBody : $.businessCancellationRecoveryBody), t[59] = d, t[60] = n, t[61] = e, t[62] = a) : a = t[62];
        let o;
        t[63] === a ? o = t[64] : (o = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary text-sm leading-6`,
            children: a
        }), t[63] = a, t[64] = o);
        let s;
        t[65] !== N.handoff || t[66] !== R ? (s = () => {
            V(`chatgpt_business_cancel_to_plus_business_cancellation_retry_clicked`), R(N.handoff)
        }, t[65] = N.handoff, t[66] = R, t[67] = s) : s = t[67];
        let c;
        t[68] !== d || t[69] !== n || t[70] !== e ? (c = d.formatMessage(e ? $.retryPlusConfirmationButton : n ? $.retryPersonalPlusSwitchButton : $.retryBusinessCancellationButton), t[68] = d, t[69] = n, t[70] = e, t[71] = c) : c = t[71];
        let l;
        t[72] !== F || t[73] !== s || t[74] !== c ? (l = (0, Q.jsx)(f, {
            color: `primary`,
            loading: F,
            onClick: s,
            children: c
        }), t[72] = F, t[73] = s, t[74] = c, t[75] = l) : l = t[75];
        let u;
        t[76] === Symbol.for(`react.memo_cache_sentinel`) ? (u = St(), t[76] = u) : u = t[76];
        let p;
        t[77] === d ? p = t[78] : (p = d.formatMessage($.manageBusinessSubscriptionLink), t[77] = d, t[78] = p);
        let m;
        t[79] === p ? m = t[80] : (m = (0, Q.jsx)(Je, {
            className: `text-token-text-secondary text-sm`,
            href: u,
            children: p
        }), t[79] = p, t[80] = m);
        let h;
        t[81] !== l || t[82] !== m ? (h = (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-3`,
            children: [l, m]
        }), t[81] = l, t[82] = m, t[83] = h) : h = t[83];
        let g;
        return t[84] !== o || t[85] !== h || t[86] !== i ? (g = (0, Q.jsx)(`div`, {
            className: `flex min-h-screen items-center justify-center px-6 py-12`,
            children: (0, Q.jsxs)(`div`, {
                className: `border-token-border-default bg-token-bg-primary flex w-full max-w-md flex-col gap-5 rounded-2xl border p-6 text-center shadow-lg`,
                children: [i, o, h]
            })
        }), t[84] = o, t[85] = h, t[86] = i, t[87] = g) : g = t[87], g
    }
    return null
}

function Wt(e) {
    F.error(e), z.addError(e instanceof Error ? e : Error(`Failed to update workspace token after checkout`), {
        source: `payments.success`
    })
}

function Gt() {
    L({
        fallbackScreenHint: `login`,
        useFallbackScreenHint: !0,
        skipLoginModal: !0
    })
}
var Kt, Z, Q, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, $, cn = e((() => {
    ve(), Kt = Ee(), h(), mt(), O(), Oe(), H(), T(), xt(), Dt(), Qe(), Re(), ut(), qe(), Ye(), Fe(), Pe(), at(), He(), R(), Ze(), ct(), st(), D(), $e(), Ke(), Ue(), x(), oe(), rt(), vt(), r(), I(), le(), Ae(), A(), M(), u(), N(), i(), de(), ce(), B(), Te(), Me(), Z = t(be()), ye(), Q = pe(), we(), qt = te(() => Se(() => import(`./33d473af-ghdd6qb9hf262pt9.js`).then(e => e.NoPaymentPlusTrialExtensionAcknowledgement), __vite__mapDeps([0, 1, 2, 3, 4, 5]))), Jt = function(e) {
        return e.Success = `success`, e.PaymentFailed = `payment_failed`, e.UserMismatch = `user_mismatch`, e.OtherError = `other_error`, e
    }({}), Yt = {
        success: !0
    }, Xt = [50, 100, 200, 400, 800, 1600, 3200, 3650], Zt = `2160290604`, Qt = `personal_checkout_failure_plan_recovery_enabled`, $t = `548821362`, en = `1549629729`, tn = `3507623755`, nn = `eligible_upsell_context_ids`, rn = `return_to_thread_enabled`, an = `drop_into_work_after_upgrade`, on = me(function() {
        "use forget";
        let e = (0, Kt.c)(27),
            [t] = xe(),
            n = fe(),
            r = y.getItem(s.CheckoutFrom),
            i = k(),
            a = Ce(),
            o;
        e[0] === t ? o = e[1] : (o = t.get(`plan_type`), e[0] = t, e[1] = o);
        let l = o,
            u = l ?? U.PLUS,
            d;
        e[2] === a.checkout_id ? d = e[3] : (d = Tt(a.checkout_id), e[2] = a.checkout_id, e[3] = d);
        let f = d,
            p;
        e[4] !== i || e[5] !== a.checkout_id ? (p = i?.isPersonalAccount() === !0 && typeof i.normalizedAccountUserId == `string` && J({
            checkoutSessionId: a.checkout_id,
            accountId: i.id,
            accountUserId: i.normalizedAccountUserId
        }) != null, e[4] = i, e[5] = a.checkout_id, e[6] = p) : p = e[6];
        let m = p,
            h;
        e[7] !== a.checkout_id || e[8] !== n.search ? (h = new URLSearchParams(n.search), c(a.checkout_id, h), e[7] = a.checkout_id, e[8] = n.search, e[9] = h) : h = e[9];
        let g = h,
            _, v;
        if (e[10] !== u || e[11] !== m || e[12] !== f || e[13] !== a.checkout_id || e[14] !== a.postCheckoutResult || e[15] !== a.processor_entity || e[16] !== g ? (_ = () => {
                let e = a.checkout_id,
                    t = a.processor_entity ?? void 0;
                a.postCheckoutResult !== `success` && ft(`payments_success`, {
                    checkoutPlanType: u,
                    checkoutId: e,
                    processorEntity: t,
                    isCheckoutModalEnabled: f,
                    ...m ? {
                        entryPoint: G.STUDENTS_2026
                    } : {},
                    outcome: a.postCheckoutResult === `payment_failed` ? `payment_failed` : a.postCheckoutResult === `user_mismatch` ? `user_mismatch` : `other_error`
                }, g)
            }, v = [u, m, f, a.checkout_id, a.processor_entity, a.postCheckoutResult, g], e[10] = u, e[11] = m, e[12] = f, e[13] = a.checkout_id, e[14] = a.postCheckoutResult, e[15] = a.processor_entity, e[16] = g, e[17] = _, e[18] = v) : (_ = e[17], v = e[18]), (0, Z.useEffect)(_, v), !i) return null;
        let b = Ut,
            x = Ve(r) ? r : null,
            S = l != null,
            C;
        return e[19] !== b || e[20] !== u || e[21] !== i || e[22] !== a || e[23] !== g || e[24] !== x || e[25] !== S ? (C = (0, Q.jsx)(b, {
            checkoutFrom: x,
            checkoutPlanType: u,
            currentAccount: i,
            hasExplicitCheckoutPlanType: S,
            loaderData: a,
            sourceSearchParams: g
        }), e[19] = b, e[20] = u, e[21] = i, e[22] = a, e[23] = g, e[24] = x, e[25] = S, e[26] = C) : C = e[26], C
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
        let n;
        e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary text-sm leading-6`,
            children: (0, Q.jsx)(W, {
                ...$.userMismatchRecoveryBody
            })
        }), e[1] = n) : n = e[1];
        let r;
        e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Q.jsx)(f, {
            color: `primary`,
            onClick: Gt,
            children: (0, Q.jsx)(W, {
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
                    children: [r, (0, Q.jsx)(Je, {
                        className: `text-token-text-secondary text-sm`,
                        href: `/`,
                        children: (0, Q.jsx)(W, {
                            ...$.returnToChatgptLink
                        })
                    })]
                })]
            })
        }), e[3] = i) : i = e[3], i
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
//# sourceMappingURL=bfd5ba7b-dgbumm6pv1uncptv.js.map