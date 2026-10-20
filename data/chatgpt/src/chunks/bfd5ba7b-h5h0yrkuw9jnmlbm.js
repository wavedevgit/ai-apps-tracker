const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/33d473af-feku6mpdx9wm0xu0.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/0e2455cf-5y65kiuirs6pcl0x.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $it as n,
    $rt as r,
    Ant as i,
    Art as a,
    D1 as o,
    G4 as s,
    Gnt as c,
    Hnt as l,
    JT as u,
    K as d,
    K1 as f,
    Ka as p,
    L1 as m,
    P7 as h,
    R7 as g,
    S4 as _,
    U6 as v,
    VU as y,
    Vst as b,
    Wa as x,
    Wrt as S,
    X0 as C,
    X1 as ee,
    Xnt as w,
    Y0 as T,
    Ynt as E,
    Z as D,
    Znt as O,
    _nt as k,
    eat as A,
    gst as j,
    hst as M,
    iat as N,
    j1 as te,
    jnt as P,
    k1 as F,
    knt as I,
    mst as L,
    n0 as R,
    nat as ne,
    oat as z,
    ort as B,
    qB as V,
    qT as re,
    qnt as H,
    r0 as U,
    srt as ie,
    tV as ae,
    tct as oe,
    uit as se,
    vit as ce,
    x4 as le,
    ynt as ue,
    zU as de
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    $Un as Oe,
    Cin as ke,
    Esn as Ae,
    Lan as je,
    Msn as Me,
    Nan as Ne,
    Nsn as Pe,
    Orn as Fe,
    Osn as Ie,
    QUn as Le,
    R2t as Re,
    aan as ze,
    bin as Be,
    cln as G,
    dan as Ve,
    fn as He,
    gn as Ue,
    hn as We,
    jsn as Ge,
    ksn as Ke,
    lGn as qe,
    lm as Je,
    oan as K,
    ott as Ye,
    pn as Xe,
    sln as Ze,
    sm as Qe,
    stt as $e,
    xin as et,
    z2t as tt
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Ch as nt,
    Fg as rt,
    Rg as it,
    kh as at
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    r as ot,
    t as st
} from "./ee0eeb85-ou6pcfcs5ah597oz.js";
import {
    i as ct,
    r as lt
} from "./58459bbe-dito0zgyut3iq8g6.js";
import {
    a as ut,
    o as dt,
    t as q,
    y as ft
} from "./a4eef3c0-ccmg4ym3alt42ss8.js";
import {
    n as pt,
    r as mt,
    t as ht
} from "./97a55ca1-ob1vz7gjgz2uk2e8.js";
import {
    n as gt,
    t as _t
} from "./4cc06ac6-c2n4wpspnl5cbj2f.js";
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
} from "./a6f4f526-iyl7ahaitoywhij6.js";

function Tt(e) {
    let t = _t(I.getItem(i.CheckoutConfirmLatencyPending), e);
    return t.status === `ready` && t.pending.is_checkout_modal_enabled === !0
}

function Et({
    checkoutId: e,
    checkoutPlanType: t,
    postCheckoutResult: n,
    processorEntity: r
}) {
    let a = I.getItem(i.CheckoutConfirmLatencyPending) ?? null;
    if (!a) return;
    let o = _t(a, e);
    if (o.status === `discard`) {
        I.removeItem(i.CheckoutConfirmLatencyPending);
        return
    }
    if (o.status === `other_checkout`) return;
    let {
        pending: s,
        durationMs: c
    } = o;
    return N.addAction(`checkout.confirm.latency_ms`, {
        duration_ms: c,
        requires_manual_approval: s.requires_manual_approval === !0,
        checkout_session_id: e ?? s.checkout_session_id,
        processor_entity: r ?? s.processor_entity,
        plan_type: t,
        result_type: n,
        measurement_point: `return_page`
    }), I.removeItem(i.CheckoutConfirmLatencyPending), {
        durationMs: c,
        checkoutSessionId: s.checkout_session_id
    }
}
var Dt = e((() => {
    gt(), z(), P()
}));

function Y(e) {
    le(e, {
        sessionChanged: !1
    })
}

function Ot(e) {
    return e.isPersonalAccount() && e.isPlus() && e.hasPaidSubscription() && !e.isActiveSubscriptionGratis() && e.data.subscriptionStatus.subscriptionPlan === j.PLUS
}

function X({
    checkoutPlanType: e,
    checkoutSessionId: t,
    currentAccount: n,
    hasExplicitCheckoutPlanType: r,
    isStudents2026Checkout: a = !1,
    intl: o,
    message: s,
    navigate: c,
    toaster: l
}) {
    if (l.warning(o.formatMessage(s), {
            duration: 5
        }), (a || yt(t)) && I.removeItem(i.CheckoutFrom), n.isPersonalAccount()) {
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
        d = Ie(t);
    d != null && (u.searchParams.set(Ge, d), u.searchParams.set(`mweb_fallback`, `1`)), c(`${u.pathname}${u.search}${u.hash}`)
}

function kt(e) {
    return Object.values(L).some(t => t === e)
}

function At(e, t) {
    return !t || !kt(e) || !K(e) || !E(Zt).get(Qt, !1) ? `/#pricing` : `/?cta_tab=personal&highlight_plan=${e}#pricing`
}

function jt({
    checkoutPlanType: e,
    eventId: t
}) {
    k.logValueEventWithStatsig({
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
    }), v(), n.deleteCookie(ne.DogfoodingAccountType), e === L.PLUS && l.logEvent(`chatgpt_plus_payment_success_page`)
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
        ie.error(t), N.addError(t instanceof Error ? t : Error(`Failed to replay pending image download after checkout`), {
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
    return n?.upsellContextId === `work` && kt(e) && K(e) && (t.checkout_kind == null || t.checkout_kind === s.Standard) ? n.threadId != null && n.sitePreview != null ? lt(n.threadId, n.sitePreview) : n.threadId == null ? `/?surface=work` : V(n.threadId) : n?.threadId == null || !kt(e) || !K(e) || t.checkout_kind != null && t.checkout_kind !== s.Standard || !H($t).get(nn, []).includes(n.upsellContextId) ? null : E(en).get(rn, !1) ? V(n.threadId) : null
}

function Ft({
    completion: e,
    checkoutFrom: t,
    checkoutPlanType: n,
    checkoutSessionId: r,
    currentAccount: a,
    defaultHomeRedirectUrl: o,
    hasExplicitCheckoutPlanType: c,
    intl: l,
    navigate: u,
    postCheckoutResult: d,
    queryClient: p,
    toaster: m
}) {
    if (`kind` in e && e.kind === s.CodexTeam) {
        Be(), f(p, e.workspace_id).then(() => {
            u({
                pathname: nt,
                search: `?account_id=${e.workspace_id}`
            }, {
                replace: !0
            })
        }).catch(e => {
            ie.error(e)
        });
        return
    }
    let h = d === `success` && (e.checkout_kind == null || e.checkout_kind === s.Standard) ? Ne(r) : null,
        g = et(),
        _ = d === `success` && kt(n) && K(n) && (e.checkout_kind == null || e.checkout_kind === s.Standard) ? Ie(r) : null,
        v = t == null ? Pt({
            checkoutPlanType: n,
            completion: e,
            context: g
        }) : null;
    if (Be(), e.entry_point === G.STUDENTS_2026) {
        let e = te() ?? a,
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
                hasExplicitCheckoutPlanType: c,
                isStudents2026Checkout: !0,
                intl: l,
                message: S.somethingWentWrong,
                navigate: u,
                toaster: m
            });
            return
        }
        let o = bt({
            checkoutSessionId: r,
            accountId: e.id,
            accountUserId: e.normalizedAccountUserId,
            status: `success`
        });
        if (o == null) {
            X({
                checkoutPlanType: n,
                checkoutSessionId: r,
                currentAccount: e,
                hasExplicitCheckoutPlanType: c,
                isStudents2026Checkout: !0,
                intl: l,
                message: S.somethingWentWrong,
                navigate: u,
                toaster: m
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
        let s = new URL(o, window.location.origin);
        s.searchParams.set(`refresh_account`, `true`), I.removeItem(i.CheckoutFrom), Y(`${s.pathname}${s.search}`)
    } else if (h != null) I.removeItem(i.CheckoutFrom), Y(Nt(h.returnPath));
    else if (_ != null) {
        let e = new URL(_);
        e.searchParams.delete(Me), e.searchParams.set(`refresh_account`, `true`), Ae(r), I.removeItem(i.CheckoutFrom), Y(e.href)
    } else t ? (I.removeItem(i.CheckoutFrom), Y(Nt(He[t]))) : v == null ? d === `success` && c && !(`kind` in e) && (e.checkout_kind == null || e.checkout_kind === s.Standard) && (n === L.PLUS || n === L.PROLITE || n === L.PRO || n === L.PROMAX) && t == null && g == null && E(tn).get(an, !1) ? Y(Nt(`/?surface=work`)) : (m.success(n === L.SCI ? l.formatMessage($.sciPaymentConfirmationToastMessage) : l.formatMessage($.paymentConfirmationToastMessage, {
        planType: n,
        planName: Re(n)
    }), {
        duration: 5
    }), o == null ? Y() : Y(o)) : Y(Nt(v))
}
async function It(e) {
    try {
        await e.refetchQueries({
            queryKey: F().queryKey
        })
    } catch {
        return null
    }
    return te()
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
            queryKey: F().queryKey
        }, {
            throwOnError: !0
        })
    } catch {
        return null
    }
    let n = e.getQueryData(F().queryKey);
    return n == null ? null : o(n).find(e => e.id === t) ?? null
}
async function zt(e) {
    try {
        await e.refetchQueries({
            queryKey: F().queryKey
        }, {
            throwOnError: !0
        })
    } catch {
        return null
    }
    let t = e.getQueryData(F().queryKey);
    return t == null ? null : o(t).find(e => e.structure === M.PERSONAL && e.planType === L.PLUS && e.hasPaidSubscription()) ?? null
}

function Bt(e) {
    return e.willDeactivateAtTermEnd() || e.isDeactivated()
}
async function Vt(e, t) {
    try {
        let {
            updatedAccount: n
        } = await f(e, t);
        return n
    } catch (e) {
        return N.addError(e instanceof Error ? e : Error(`Failed to switch to personal Plus after cancellation`), {
            source: `payments.success.business_cancel_to_plus`
        }), !1
    }
}
async function Ht(e) {
    await h.safePost(`/subscriptions/cancel`, {
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
            currentAccount: a,
            hasExplicitCheckoutPlanType: o,
            loaderData: l,
            sourceSearchParams: u
        } = e,
        f = De(),
        p = _e(),
        m = ge(),
        h = y(),
        g = (0, Z.useRef)(!1),
        _ = (0, Z.useRef)(null),
        v = (0, Z.useRef)(!1),
        [C, ee] = (0, Z.useState)(null),
        w, T;
    t[0] !== a || t[1] !== C ? (w = () => {
        C != null && (a.id !== C.accountId || a.normalizedAccountUserId !== C.accountUserId) && C.onClose()
    }, T = [a, C], t[0] = a, t[1] = C, t[2] = w, t[3] = T) : (w = t[2], T = t[3]), (0, Z.useEffect)(w, T);
    let E;
    t[4] === l.checkout_id ? E = t[5] : (E = Tt(l.checkout_id), t[4] = l.checkout_id, t[5] = E);
    let D = E,
        A = l.postCheckoutResult === `success` && o && (i === L.PLUS || i === L.PROLITE || i === L.PRO || i === L.PROMAX) && !(`kind` in l.completion) && (l.completion.checkout_kind == null || l.completion.checkout_kind === s.Standard) ? i === L.PLUS ? d : Qe : null,
        j;
    t[6] !== i || t[7] !== l.checkout_id ? (j = () => Ct({
        checkoutPlanType: i,
        checkoutSessionId: l.checkout_id
    }), t[6] = i, t[7] = l.checkout_id, t[8] = j) : j = t[8];
    let [M] = (0, Z.useState)(j), [P, I] = (0, Z.useState)(null), [R, z] = (0, Z.useState)(!1), B;
    t[9] !== f || t[10] !== m || t[11] !== h ? (B = async e => {
        z(!0);
        let t = await zt(m);
        if (t == null) return N.addError(Error(`Unable to verify personal Plus after checkout`), {
            source: `payments.success.business_cancel_to_plus`
        }), I({
            stage: `plus_unconfirmed`,
            handoff: e
        }), z(!1), !1;
        let n = await Rt(m, e.businessAccountId);
        if (n == null || !n.isSelfServeBusiness()) {
            N.addError(Error(`Unable to verify intended Business account after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            });
            let t = k.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return O(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
                unique_event_id: t
            } : void 0), I({
                stage: `business_cancellation_failed`,
                handoff: e
            }), z(!1), !1
        }
        let r = Bt(n);
        if (!r) {
            let t;
            try {
                await Ht(e.businessAccountId)
            } catch (e) {
                t = e
            }
            let n = await Rt(m, e.businessAccountId);
            r = n?.isSelfServeBusiness() === !0 && Bt(n), r || N.addError(t instanceof Error ? t : Error(`Unable to confirm Business cancellation after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            })
        }
        if (!r) {
            let t = k.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return O(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
                unique_event_id: t
            } : void 0), I({
                stage: `business_cancellation_failed`,
                handoff: e
            }), z(!1), !1
        }
        let i = k.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
            step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_SUCCEEDED`,
            legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_succeeded`
        });
        return O(`chatgpt_business_cancel_to_plus_business_cancellation_succeeded`, void 0, i ? {
            unique_event_id: i
        } : void 0), await Promise.all([q(), c()]), await Vt(m, t.id) ? (wt(), I(null), h.success(f.formatMessage($.businessCancelToPlusSuccessMessage), {
            duration: 5
        }), z(!1), Y(), !0) : (I({
            stage: `personal_switch_failed`,
            handoff: e
        }), z(!1), !1)
    }, t[9] = f, t[10] = m, t[11] = h, t[12] = B) : B = t[12];
    let V = B,
        H;
    t[13] !== r || t[14] !== i || t[15] !== V || t[16] !== a || t[17] !== A || t[18] !== o || t[19] !== f || t[20] !== D || t[21] !== l.checkout_id || t[22] !== l.completion || t[23] !== l.postCheckoutResult || t[24] !== l.processor_entity || t[25] !== M || t[26] !== p || t[27] !== m || t[28] !== u || t[29] !== h || t[30] !== C ? (H = () => {
        if (C != null) return;
        let e = !1,
            t = pt(l.checkout_id, a),
            c = yt(l.checkout_id),
            d = a.isPersonalAccount() && a.normalizedAccountUserId != null && J({
                checkoutSessionId: l.checkout_id,
                accountId: a.id,
                accountUserId: a.normalizedAccountUserId
            }) != null,
            y = l.postCheckoutResult === `success` && !(`kind` in l.completion) && l.completion.entry_point === G.STUDENTS_2026,
            x = r === Xe.STUDENTS && o && i === L.PLUS,
            w = c || y || x,
            T = l.postCheckoutResult === `success` && !(`kind` in l.completion) && (l.completion.checkout_kind == null || l.completion.checkout_kind === s.Standard) && (c || y || l.completion.entry_point == null && x),
            E = () => {
                if (g.current) return;
                g.current = !0;
                let e = k.logStructuredEvent(`ChatgptCheckoutPaymentSuccessPage`, {
                    checkoutPlanType: i,
                    checkoutId: l.checkout_id,
                    processorEntity: l.processor_entity ?? void 0,
                    isCheckoutModalEnabled: D,
                    ...l.postCheckoutResult === `success` && l.completion.checkout_kind != null ? {
                        checkoutKind: l.completion.checkout_kind,
                        entryPoint: l.completion.entry_point ?? void 0
                    } : {}
                });
                l.postCheckoutResult === `success` && $e({
                    currentAccount: a,
                    location: `PaymentsSuccessPage`,
                    planName: i
                }), jt({
                    checkoutPlanType: i,
                    eventId: e
                })
            };
        Et({
            checkoutId: l.checkout_id,
            checkoutPlanType: i,
            postCheckoutResult: l.postCheckoutResult,
            processorEntity: l.processor_entity ?? void 0
        });
        let j = () => (_.current?.checkoutId !== l.checkout_id && (_.current = {
                checkoutId: l.checkout_id,
                pending: ce({
                    reason: `checkout_success`,
                    path: `/payments/success`
                }).catch(Wt)
            }), _.current.pending),
            N = () => {
                (async () => {
                    if (l.postCheckoutResult !== `success`) return;
                    if (`kind` in l.completion && l.completion.kind === s.CodexTeam) {
                        Ft({
                            completion: l.completion,
                            checkoutFrom: r,
                            checkoutPlanType: i,
                            checkoutSessionId: l.checkout_id,
                            currentAccount: a,
                            defaultHomeRedirectUrl: A,
                            hasExplicitCheckoutPlanType: o,
                            intl: f,
                            navigate: p,
                            postCheckoutResult: l.postCheckoutResult,
                            queryClient: m,
                            toaster: h
                        });
                        return
                    }
                    if (M != null) {
                        if (await j(), e) return;
                        if (!v.current) {
                            v.current = !0;
                            let e = k.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                            });
                            O(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
                                unique_event_id: e
                            } : void 0), await V(M)
                        }
                        return
                    }
                    let n = a,
                        c = T && (!a.isPlus() || !a.hasPaidSubscription());
                    if (a.isFree() || c || t) {
                        if (n = T && d || t ? await Lt({
                                isProvisioned: t ? Ot : void 0,
                                checkoutAccount: a,
                                isCancelled: () => e,
                                queryClient: m
                            }) : await It(m), e) return;
                        (!n || n.isFree()) && (dt({
                            checkoutSessionId: l.checkout_id,
                            checkoutPlanType: i,
                            processorEntity: l.processor_entity ?? void 0,
                            isCheckoutModalEnabled: D,
                            checkoutKind: l.completion.checkout_kind ?? void 0,
                            entryPoint: l.completion.entry_point ?? void 0,
                            sourceSearchParams: u,
                            accessStage: `personal_account_refresh`,
                            failureReason: n == null ? `account_status_missing` : `account_still_free`
                        }), m.invalidateQueries(F()))
                    }
                    if (await j(), e || (await Mt({
                            hasPaidSubscription: n?.hasPaidSubscription() ?? !1,
                            intl: f,
                            queryClient: m
                        }), e)) return;
                    if (T) {
                        let e = a.isFree() || c ? n : te() ?? a;
                        if (!((e != null && e.isPersonalAccount() && e.normalizedAccountUserId != null ? J({
                                checkoutSessionId: l.checkout_id,
                                accountId: e.id,
                                accountUserId: e.normalizedAccountUserId
                            }) : null) != null && e != null && e.isPersonalAccount() && e.isPlus() && e.hasPaidSubscription() && e.id === a.id && e.normalizedAccountUserId != null && e.normalizedAccountUserId === a.normalizedAccountUserId)) {
                            ft(`payments_success`, {
                                checkoutPlanType: i,
                                checkoutId: l.checkout_id,
                                processorEntity: l.processor_entity ?? void 0,
                                isCheckoutModalEnabled: D,
                                checkoutKind: l.completion.checkout_kind ?? void 0,
                                entryPoint: G.STUDENTS_2026,
                                outcome: `other_error`
                            }, u), X({
                                checkoutPlanType: i,
                                checkoutSessionId: l.checkout_id,
                                currentAccount: a,
                                hasExplicitCheckoutPlanType: o,
                                isStudents2026Checkout: !0,
                                intl: f,
                                message: S.somethingWentWrong,
                                navigate: p,
                                toaster: h
                            });
                            return
                        }
                        E()
                    }
                    if (await q(), e) return;
                    let g = e => {
                        let t = e === void 0 ? A : e;
                        Ft({
                            completion: T ? {
                                ...l.completion,
                                entry_point: G.STUDENTS_2026
                            } : l.completion,
                            checkoutFrom: r,
                            checkoutPlanType: i,
                            checkoutSessionId: l.checkout_id,
                            currentAccount: a,
                            defaultHomeRedirectUrl: t,
                            hasExplicitCheckoutPlanType: o,
                            intl: f,
                            navigate: p,
                            postCheckoutResult: l.postCheckoutResult,
                            queryClient: m,
                            toaster: h
                        })
                    };
                    if (t) {
                        ht(l.checkout_id);
                        let e = te(),
                            t = e?.data.subscriptionStatus.discount;
                        if (e != null && n != null && e.id === a.id && e.normalizedAccountUserId === a.normalizedAccountUserId && Ot(n) && Ot(e) && t?.promo_campaign_id === `plus-1-month-free` && t.discount_type === b.PERCENTAGE && t.amount === 100 && t.duration_num_periods === 1 && n.id === a.id && n.normalizedAccountUserId === a.normalizedAccountUserId && i === L.PLUS && (l.completion.checkout_kind == null || l.completion.checkout_kind === s.Standard)) {
                            ee({
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
            P = () => {
                q().finally(() => {
                    e || N()
                })
            },
            R = () => {
                (async () => {
                    if (M != null) {
                        let t = await zt(m);
                        if (e) return;
                        if (t != null) {
                            if (!v.current) {
                                v.current = !0;
                                let e = k.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                    step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                    legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                                });
                                O(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
                                    unique_event_id: e
                                } : void 0), await V(M)
                            }
                            return
                        }
                        I({
                            stage: `plus_unconfirmed`,
                            handoff: M
                        });
                        return
                    }
                    let t = a.isFree() ? await It(m) : a;
                    if (!e) {
                        if (t && !t.isFree()) {
                            if (E(), await j(), e || (await Mt({
                                    hasPaidSubscription: t.hasPaidSubscription(),
                                    intl: f,
                                    queryClient: m
                                }), await q(), e)) return;
                            Ft({
                                completion: Yt,
                                checkoutFrom: r,
                                checkoutPlanType: i,
                                checkoutSessionId: l.checkout_id,
                                currentAccount: a,
                                defaultHomeRedirectUrl: A,
                                hasExplicitCheckoutPlanType: o,
                                intl: f,
                                navigate: p,
                                postCheckoutResult: l.postCheckoutResult,
                                queryClient: m,
                                toaster: h
                            });
                            return
                        }
                        X({
                            checkoutPlanType: i,
                            checkoutSessionId: l.checkout_id,
                            currentAccount: a,
                            hasExplicitCheckoutPlanType: o,
                            intl: f,
                            toaster: h,
                            navigate: p,
                            message: S.somethingWentWrong
                        })
                    }
                })()
            };
        if (l.postCheckoutResult === `user_mismatch`) return () => {
            e = !0
        };
        if (M == null && w && l.postCheckoutResult !== `success`) return X({
            checkoutPlanType: i,
            checkoutSessionId: l.checkout_id,
            currentAccount: a,
            hasExplicitCheckoutPlanType: o,
            isStudents2026Checkout: !0,
            intl: f,
            toaster: h,
            navigate: p,
            message: l.postCheckoutResult === `payment_failed` ? $.paymentFailedToastMessage : S.somethingWentWrong
        }), () => {
            e = !0
        };
        l.postCheckoutResult !== `success` && ht(l.checkout_id);
        bb533: switch (l.postCheckoutResult) {
            case `success`:
                T ? n.deleteCookie(ne.DogfoodingAccountType) : E(), P();
                break bb533;
            case `payment_failed`:
                if (M != null) {
                    window.location.href = St();
                    break bb533
                }
                X({
                    checkoutPlanType: i,
                    checkoutSessionId: l.checkout_id,
                    currentAccount: a,
                    hasExplicitCheckoutPlanType: o,
                    intl: f,
                    toaster: h,
                    navigate: p,
                    message: $.paymentFailedToastMessage
                });
                break bb533;
            case `other_error`:
                R()
        }
        return () => {
            e = !0
        }
    }, t[13] = r, t[14] = i, t[15] = V, t[16] = a, t[17] = A, t[18] = o, t[19] = f, t[20] = D, t[21] = l.checkout_id, t[22] = l.completion, t[23] = l.postCheckoutResult, t[24] = l.processor_entity, t[25] = M, t[26] = p, t[27] = m, t[28] = u, t[29] = h, t[30] = C, t[31] = H) : H = t[31];
    let U;
    if (t[32] !== r || t[33] !== i || t[34] !== V || t[35] !== a || t[36] !== A || t[37] !== o || t[38] !== f || t[39] !== D || t[40] !== l || t[41] !== M || t[42] !== p || t[43] !== m || t[44] !== u || t[45] !== h || t[46] !== C ? (U = [r, i, V, C, a, A, o, f, D, l, M, p, m, u, h], t[32] = r, t[33] = i, t[34] = V, t[35] = a, t[36] = A, t[37] = o, t[38] = f, t[39] = D, t[40] = l, t[41] = M, t[42] = p, t[43] = m, t[44] = u, t[45] = h, t[46] = C, t[47] = U) : U = t[47], (0, Z.useEffect)(H, U), l.postCheckoutResult === `user_mismatch`) {
        let e;
        return t[48] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(sn, {}), t[48] = e) : e = t[48], e
    }
    if (C != null) {
        let e = a.id === C.accountId && a.normalizedAccountUserId === C.accountUserId,
            n;
        t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (n = {}, t[49] = n) : n = t[49];
        let r;
        return t[50] !== e || t[51] !== C.onClose ? (r = (0, Q.jsx)(x, {
            for: qt,
            open: e,
            onClose: C.onClose,
            withProps: n
        }), t[50] = e, t[51] = C.onClose, t[52] = r) : r = t[52], r
    }
    if (P != null) {
        let e = P.stage === `plus_unconfirmed`,
            n = P.stage === `personal_switch_failed`,
            r;
        t[53] !== f || t[54] !== n || t[55] !== e ? (r = f.formatMessage(e ? $.plusConfirmationRecoveryTitle : n ? $.personalPlusSwitchRecoveryTitle : $.businessCancellationRecoveryTitle), t[53] = f, t[54] = n, t[55] = e, t[56] = r) : r = t[56];
        let i;
        t[57] === r ? i = t[58] : (i = (0, Q.jsx)(`h1`, {
            className: `text-token-text-primary text-xl font-semibold`,
            children: r
        }), t[57] = r, t[58] = i);
        let a;
        t[59] !== f || t[60] !== n || t[61] !== e ? (a = f.formatMessage(e ? $.plusConfirmationRecoveryBody : n ? $.personalPlusSwitchRecoveryBody : $.businessCancellationRecoveryBody), t[59] = f, t[60] = n, t[61] = e, t[62] = a) : a = t[62];
        let o;
        t[63] === a ? o = t[64] : (o = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary text-sm leading-6`,
            children: a
        }), t[63] = a, t[64] = o);
        let s;
        t[65] !== P.handoff || t[66] !== V ? (s = () => {
            O(`chatgpt_business_cancel_to_plus_business_cancellation_retry_clicked`), V(P.handoff)
        }, t[65] = P.handoff, t[66] = V, t[67] = s) : s = t[67];
        let c;
        t[68] !== f || t[69] !== n || t[70] !== e ? (c = f.formatMessage(e ? $.retryPlusConfirmationButton : n ? $.retryPersonalPlusSwitchButton : $.retryBusinessCancellationButton), t[68] = f, t[69] = n, t[70] = e, t[71] = c) : c = t[71];
        let l;
        t[72] !== R || t[73] !== s || t[74] !== c ? (l = (0, Q.jsx)(re, {
            color: `primary`,
            loading: R,
            onClick: s,
            children: c
        }), t[72] = R, t[73] = s, t[74] = c, t[75] = l) : l = t[75];
        let u;
        t[76] === Symbol.for(`react.memo_cache_sentinel`) ? (u = St(), t[76] = u) : u = t[76];
        let d;
        t[77] === f ? d = t[78] : (d = f.formatMessage($.manageBusinessSubscriptionLink), t[77] = f, t[78] = d);
        let p;
        t[79] === d ? p = t[80] : (p = (0, Q.jsx)(Le, {
            className: `text-token-text-secondary text-sm`,
            href: u,
            children: d
        }), t[79] = d, t[80] = p);
        let m;
        t[81] !== l || t[82] !== p ? (m = (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-3`,
            children: [l, p]
        }), t[81] = l, t[82] = p, t[83] = m) : m = t[83];
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
    ie.error(e), N.addError(e instanceof Error ? e : Error(`Failed to update workspace token after checkout`), {
        source: `payments.success`
    })
}

function Gt() {
    U({
        fallbackScreenHint: `login`,
        useFallbackScreenHint: !0,
        skipLoginModal: !0
    })
}
var Kt, Z, Q, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, $, cn = e((() => {
    ve(), Kt = Ee(), p(), mt(), C(), je(), oe(), u(), xt(), Dt(), Ze(), ze(), ut(), Ve(), qe(), Ke(), Pe(), at(), We(), r(), Oe(), ct(), st(), D(), Je(), Ye(), Fe(), m(), R(), rt(), vt(), de(), se(), ue(), ke(), A(), z(), P(), B(), _(), g(), w(), ae(), Te(), tt(), Z = t(be()), ye(), Q = pe(), we(), qt = T(() => Se(() => import(`./33d473af-feku6mpdx9wm0xu0.js`).then(e => e.NoPaymentPlusTrialExtensionAcknowledgement), __vite__mapDeps([0, 1, 2, 3, 4, 5]))), Jt = function(e) {
        return e.Success = `success`, e.PaymentFailed = `payment_failed`, e.UserMismatch = `user_mismatch`, e.OtherError = `other_error`, e
    }({}), Yt = {
        success: !0
    }, Xt = [50, 100, 200, 400, 800, 1600, 3200, 3650], Zt = `2160290604`, Qt = `personal_checkout_failure_plan_recovery_enabled`, $t = `548821362`, en = `1549629729`, tn = `3507623755`, nn = `eligible_upsell_context_ids`, rn = `return_to_thread_enabled`, an = `drop_into_work_after_upgrade`, on = me(function() {
        "use forget";
        let e = (0, Kt.c)(27),
            [t] = xe(),
            n = fe(),
            r = I.getItem(i.CheckoutFrom),
            o = ee(),
            s = Ce(),
            c;
        e[0] === t ? c = e[1] : (c = t.get(`plan_type`), e[0] = t, e[1] = c);
        let l = c,
            u = l ?? L.PLUS,
            d;
        e[2] === s.checkout_id ? d = e[3] : (d = Tt(s.checkout_id), e[2] = s.checkout_id, e[3] = d);
        let f = d,
            p;
        e[4] !== o || e[5] !== s.checkout_id ? (p = o?.isPersonalAccount() === !0 && typeof o.normalizedAccountUserId == `string` && J({
            checkoutSessionId: s.checkout_id,
            accountId: o.id,
            accountUserId: o.normalizedAccountUserId
        }) != null, e[4] = o, e[5] = s.checkout_id, e[6] = p) : p = e[6];
        let m = p,
            h;
        e[7] !== s.checkout_id || e[8] !== n.search ? (h = new URLSearchParams(n.search), a(s.checkout_id, h), e[7] = s.checkout_id, e[8] = n.search, e[9] = h) : h = e[9];
        let g = h,
            _, v;
        if (e[10] !== u || e[11] !== m || e[12] !== f || e[13] !== s.checkout_id || e[14] !== s.postCheckoutResult || e[15] !== s.processor_entity || e[16] !== g ? (_ = () => {
                let e = s.checkout_id,
                    t = s.processor_entity ?? void 0;
                s.postCheckoutResult !== `success` && ft(`payments_success`, {
                    checkoutPlanType: u,
                    checkoutId: e,
                    processorEntity: t,
                    isCheckoutModalEnabled: f,
                    ...m ? {
                        entryPoint: G.STUDENTS_2026
                    } : {},
                    outcome: s.postCheckoutResult === `payment_failed` ? `payment_failed` : s.postCheckoutResult === `user_mismatch` ? `user_mismatch` : `other_error`
                }, g)
            }, v = [u, m, f, s.checkout_id, s.processor_entity, s.postCheckoutResult, g], e[10] = u, e[11] = m, e[12] = f, e[13] = s.checkout_id, e[14] = s.postCheckoutResult, e[15] = s.processor_entity, e[16] = g, e[17] = _, e[18] = v) : (_ = e[17], v = e[18]), (0, Z.useEffect)(_, v), !o) return null;
        let y = Ut,
            b = Ue(r) ? r : null,
            x = l != null,
            S;
        return e[19] !== y || e[20] !== u || e[21] !== o || e[22] !== s || e[23] !== g || e[24] !== b || e[25] !== x ? (S = (0, Q.jsx)(y, {
            checkoutFrom: b,
            checkoutPlanType: u,
            currentAccount: o,
            hasExplicitCheckoutPlanType: x,
            loaderData: s,
            sourceSearchParams: g
        }), e[19] = y, e[20] = u, e[21] = o, e[22] = s, e[23] = g, e[24] = b, e[25] = x, e[26] = S) : S = e[26], S
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
        e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Q.jsx)(re, {
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
                    children: [r, (0, Q.jsx)(Le, {
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
//# sourceMappingURL=bfd5ba7b-h5h0yrkuw9jnmlbm.js.map