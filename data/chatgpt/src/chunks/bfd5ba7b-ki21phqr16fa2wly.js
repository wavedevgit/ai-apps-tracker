const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/33d473af-gikhzgywwqqashvf.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/0e2455cf-5y65kiuirs6pcl0x.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Crt as r,
    Dat as i,
    Eat as a,
    Eit as o,
    Ga as s,
    Git as c,
    Hst as l,
    I7 as u,
    K as d,
    Knt as f,
    L1 as p,
    LU as m,
    Lit as h,
    M7 as g,
    N4 as _,
    Nat as v,
    Nrt as y,
    Oct as b,
    P4 as ee,
    Prt as x,
    Srt as S,
    Ust as C,
    V1 as w,
    Vst as T,
    Wnt as E,
    Z as D,
    _it as O,
    a2 as k,
    brt as A,
    eE as j,
    f0 as M,
    hrt as N,
    i8 as P,
    irt as F,
    jat as I,
    kat as te,
    lV as L,
    mct as ne,
    n0 as R,
    nrt as z,
    o0 as B,
    o2 as re,
    p0 as ie,
    q1 as ae,
    qa as oe,
    r3 as V,
    rit as se,
    rrt as H,
    tV as ce,
    vrt as le,
    wrt as U,
    z1 as W,
    zU as ue
} from "./4813494d-mdvd4786a87166cc.js";
import {
    At as de,
    Bn as fe,
    Ht as pe,
    Ln as me,
    N as he,
    Nn as G,
    Nt as ge,
    Q as _e,
    Rn as ve,
    Vn as ye,
    Vt as be,
    cn as xe,
    kt as Se,
    ln as Ce,
    s as we,
    wn as Te,
    zn as Ee
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    B2t as De,
    Brn as Oe,
    Can as ke,
    Dln as K,
    Eln as Ae,
    Fin as je,
    Gsn as Me,
    Hsn as Ne,
    Kan as Pe,
    Ksn as Fe,
    Min as Ie,
    Nin as Le,
    V2t as Re,
    Vsn as ze,
    Wsn as Be,
    XWn as Ve,
    Xan as He,
    ZWn as Ue,
    _an as We,
    cm as Ge,
    fn as Ke,
    gn as qe,
    hn as Je,
    itt as Ye,
    pn as Xe,
    rtt as Ze,
    uKn as Qe,
    um as $e,
    van as q,
    zsn as et
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Kg as tt,
    Mh as nt,
    Rh as rt,
    Yg as it
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    r as at,
    t as ot
} from "./ee0eeb85-lwe5xt47dzwpuna6.js";
import {
    i as st,
    r as ct
} from "./58459bbe-c1ihe882ulzsvfdi.js";
import {
    a as lt,
    i as ut,
    t as J,
    v as dt
} from "./a4eef3c0-htjsels66bfs9l7w.js";
import {
    n as ft,
    r as pt,
    t as mt
} from "./97a55ca1-ob1vz7gjgz2uk2e8.js";
import {
    n as ht,
    t as gt
} from "./4cc06ac6-lsfbag3xwkr664ju.js";
import {
    i as _t,
    n as vt,
    r as yt,
    t as bt
} from "./efd279b6-b90gmea5n9iovib1.js";
import {
    a as xt,
    c as St,
    n as Ct,
    t as wt
} from "./a6f4f526-ohl1tbtr95pvqdu9.js";

function Tt(e) {
    let t = gt(z.getItem(H.CheckoutConfirmLatencyPending), e);
    return t.status === `ready` && t.pending.is_checkout_modal_enabled === !0
}

function Et({
    checkoutId: e,
    checkoutPlanType: t,
    postCheckoutResult: n,
    processorEntity: r
}) {
    let i = z.getItem(H.CheckoutConfirmLatencyPending) ?? null;
    if (!i) return;
    let a = gt(i, e);
    if (a.status === `discard`) {
        z.removeItem(H.CheckoutConfirmLatencyPending);
        return
    }
    if (a.status === `other_checkout`) return;
    let {
        pending: o,
        durationMs: s
    } = a;
    return I.addAction(`checkout.confirm.latency_ms`, {
        duration_ms: s,
        requires_manual_approval: o.requires_manual_approval === !0,
        checkout_session_id: e ?? o.checkout_session_id,
        processor_entity: r ?? o.processor_entity,
        plan_type: t,
        result_type: n,
        measurement_point: `return_page`
    }), z.removeItem(H.CheckoutConfirmLatencyPending), {
        durationMs: s,
        checkoutSessionId: o.checkout_session_id
    }
}
var Dt = e((() => {
    ht(), v(), F()
}));

function Y(e) {
    _(e, {
        sessionChanged: !1
    })
}

function Ot(e) {
    return e.isPersonalAccount() && e.isPlus() && e.hasPaidSubscription() && !e.isActiveSubscriptionGratis() && e.data.subscriptionStatus.subscriptionPlan === C.PLUS
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
        }), (i || yt(t)) && z.removeItem(H.CheckoutFrom), n.isPersonalAccount()) {
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
    let l = new URL(At(e, r), window.location.origin),
        u = ze(t);
    u != null && (l.searchParams.set(Be, u), l.searchParams.set(`mweb_fallback`, `1`)), s(`${l.pathname}${l.search}${l.hash}`)
}

function kt(e) {
    return Object.values(T).some(t => t === e)
}

function At(e, t) {
    return !t || !kt(e) || !q(e) || !S(Zt).get(Qt, !1) ? `/#pricing` : `/?cta_tab=personal&highlight_plan=${e}#pricing`
}

function jt({
    checkoutPlanType: e,
    eventId: t
}) {
    E.logValueEventWithStatsig({
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
    }), P(), a.deleteCookie(te.DogfoodingAccountType), e === T.PLUS && N.logEvent(`chatgpt_plus_payment_success_page`)
}
async function Mt({
    hasPaidSubscription: e,
    intl: t,
    queryClient: n
}) {
    try {
        await at({
            hasPaidSubscription: e,
            intl: t,
            queryClient: n
        })
    } catch (t) {
        x.error(t), I.addError(t instanceof Error ? t : Error(`Failed to replay pending image download after checkout`), {
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
    return n?.upsellContextId === `work` && kt(e) && q(e) && (t.checkout_kind == null || t.checkout_kind === V.Standard) ? n.threadId != null && n.sitePreview != null ? ct(n.threadId, n.sitePreview) : n.threadId == null ? `/?surface=work` : ce(n.threadId) : n?.threadId == null || !kt(e) || !q(e) || t.checkout_kind != null && t.checkout_kind !== V.Standard || !A($t).get(nn, []).includes(n.upsellContextId) ? null : S(en).get(rn, !1) ? ce(n.threadId) : null
}

function Ft({
    completion: e,
    checkoutFrom: t,
    checkoutPlanType: n,
    checkoutSessionId: r,
    currentAccount: i,
    defaultHomeRedirectUrl: a,
    hasExplicitCheckoutPlanType: o,
    intl: s,
    navigate: c,
    postCheckoutResult: l,
    queryClient: u,
    toaster: d
}) {
    if (`kind` in e && e.kind === V.CodexTeam) {
        Ie(), R(u, e.workspace_id).then(() => {
            c({
                pathname: nt,
                search: `?account_id=${e.workspace_id}`
            }, {
                replace: !0
            })
        }).catch(e => {
            x.error(e)
        });
        return
    }
    let f = l === `success` && (e.checkout_kind == null || e.checkout_kind === V.Standard) ? Pe(r) : null,
        p = Le(),
        m = l === `success` && kt(n) && q(n) && (e.checkout_kind == null || e.checkout_kind === V.Standard) ? ze(r) : null,
        h = t == null ? Pt({
            checkoutPlanType: n,
            completion: e,
            context: p
        }) : null;
    if (Ie(), e.entry_point === K.STUDENTS_2026) {
        let e = w() ?? i,
            t = e.isPersonalAccount() && e.normalizedAccountUserId != null && e.id === i.id && e.normalizedAccountUserId === i.normalizedAccountUserId ? vt({
                checkoutSessionId: r,
                accountId: e.id,
                accountUserId: e.normalizedAccountUserId
            }) : null;
        if (l !== `success` || t == null || e.normalizedAccountUserId == null || !e.isPlus() || !e.hasPaidSubscription()) {
            X({
                checkoutPlanType: n,
                checkoutSessionId: r,
                currentAccount: e,
                hasExplicitCheckoutPlanType: o,
                isStudents2026Checkout: !0,
                intl: s,
                message: O.somethingWentWrong,
                navigate: c,
                toaster: d
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
                intl: s,
                message: O.somethingWentWrong,
                navigate: c,
                toaster: d
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
        let u = new URL(a, window.location.origin);
        u.searchParams.set(`refresh_account`, `true`), z.removeItem(H.CheckoutFrom), Y(`${u.pathname}${u.search}`)
    } else if (f != null) z.removeItem(H.CheckoutFrom), Y(Nt(f.returnPath));
    else if (m != null) {
        let e = new URL(m);
        e.searchParams.delete(Me), e.searchParams.set(`refresh_account`, `true`), et(r), z.removeItem(H.CheckoutFrom), Y(e.href)
    } else t ? (z.removeItem(H.CheckoutFrom), Y(Nt(Ke[t]))) : h == null ? l === `success` && o && !(`kind` in e) && (e.checkout_kind == null || e.checkout_kind === V.Standard) && (n === T.PLUS || n === T.PROLITE || n === T.PRO || n === T.PROMAX) && t == null && p == null && S(tn).get(an, !1) ? Y(Nt(`/?surface=work`)) : (d.success(n === T.SCI ? s.formatMessage($.sciPaymentConfirmationToastMessage) : s.formatMessage($.paymentConfirmationToastMessage, {
        planType: n,
        planName: De(n)
    }), {
        duration: 5
    }), a == null ? Y() : Y(a)) : Y(Nt(h))
}
async function It(e) {
    try {
        await e.refetchQueries({
            queryKey: W().queryKey
        })
    } catch {
        return null
    }
    return w()
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
            queryKey: W().queryKey
        }, {
            throwOnError: !0
        })
    } catch {
        return null
    }
    let n = e.getQueryData(W().queryKey);
    return n == null ? null : p(n).find(e => e.id === t) ?? null
}
async function zt(e) {
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
    return t == null ? null : p(t).find(e => e.structure === l.PERSONAL && e.planType === T.PLUS && e.hasPaidSubscription()) ?? null
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
        return I.addError(e instanceof Error ? e : Error(`Failed to switch to personal Plus after cancellation`), {
            source: `payments.success.business_cancel_to_plus`
        }), !1
    }
}
async function Ht(e) {
    await g.safePost(`/subscriptions/cancel`, {
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
            hasExplicitCheckoutPlanType: l,
            loaderData: u,
            sourceSearchParams: f
        } = e,
        p = Ee(),
        m = ge(),
        h = he(),
        g = ue(),
        _ = (0, Z.useRef)(!1),
        v = (0, Z.useRef)(null),
        y = (0, Z.useRef)(!1),
        [b, ee] = (0, Z.useState)(null),
        x, S;
    t[0] !== o || t[1] !== b ? (x = () => {
        b != null && (o.id !== b.accountId || o.normalizedAccountUserId !== b.accountUserId) && b.onClose()
    }, S = [o, b], t[0] = o, t[1] = b, t[2] = x, t[3] = S) : (x = t[2], S = t[3]), (0, Z.useEffect)(x, S);
    let C;
    t[4] === u.checkout_id ? C = t[5] : (C = Tt(u.checkout_id), t[4] = u.checkout_id, t[5] = C);
    let D = C,
        k = u.postCheckoutResult === `success` && l && (i === T.PLUS || i === T.PROLITE || i === T.PRO || i === T.PROMAX) && !(`kind` in u.completion) && (u.completion.checkout_kind == null || u.completion.checkout_kind === V.Standard) ? i === T.PLUS ? d : Ge : null,
        A;
    t[6] !== i || t[7] !== u.checkout_id ? (A = () => Ct({
        checkoutPlanType: i,
        checkoutSessionId: u.checkout_id
    }), t[6] = i, t[7] = u.checkout_id, t[8] = A) : A = t[8];
    let [j] = (0, Z.useState)(A), [M, N] = (0, Z.useState)(null), [P, F] = (0, Z.useState)(!1), L;
    t[9] !== p || t[10] !== h || t[11] !== g ? (L = async e => {
        F(!0);
        let t = await zt(h);
        if (t == null) return I.addError(Error(`Unable to verify personal Plus after checkout`), {
            source: `payments.success.business_cancel_to_plus`
        }), N({
            stage: `plus_unconfirmed`,
            handoff: e
        }), F(!1), !1;
        let n = await Rt(h, e.businessAccountId);
        if (n == null || !n.isSelfServeBusiness()) {
            I.addError(Error(`Unable to verify intended Business account after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            });
            let t = E.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return U(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
                unique_event_id: t
            } : void 0), N({
                stage: `business_cancellation_failed`,
                handoff: e
            }), F(!1), !1
        }
        let r = Bt(n);
        if (!r) {
            let t;
            try {
                await Ht(e.businessAccountId)
            } catch (e) {
                t = e
            }
            let n = await Rt(h, e.businessAccountId);
            r = n?.isSelfServeBusiness() === !0 && Bt(n), r || I.addError(t instanceof Error ? t : Error(`Unable to confirm Business cancellation after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            })
        }
        if (!r) {
            let t = E.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return U(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
                unique_event_id: t
            } : void 0), N({
                stage: `business_cancellation_failed`,
                handoff: e
            }), F(!1), !1
        }
        let i = E.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
            step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_SUCCEEDED`,
            legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_succeeded`
        });
        return U(`chatgpt_business_cancel_to_plus_business_cancellation_succeeded`, void 0, i ? {
            unique_event_id: i
        } : void 0), await Promise.all([J(), le()]), await Vt(h, t.id) ? (wt(), N(null), g.success(p.formatMessage($.businessCancelToPlusSuccessMessage), {
            duration: 5
        }), F(!1), Y(), !0) : (N({
            stage: `personal_switch_failed`,
            handoff: e
        }), F(!1), !1)
    }, t[9] = p, t[10] = h, t[11] = g, t[12] = L) : L = t[12];
    let R = L,
        z;
    t[13] !== r || t[14] !== i || t[15] !== R || t[16] !== o || t[17] !== k || t[18] !== l || t[19] !== p || t[20] !== D || t[21] !== u.checkout_id || t[22] !== u.completion || t[23] !== u.postCheckoutResult || t[24] !== u.processor_entity || t[25] !== j || t[26] !== m || t[27] !== h || t[28] !== f || t[29] !== g || t[30] !== b ? (z = () => {
        if (b != null) return;
        let e = !1,
            t = ft(u.checkout_id, o),
            n = yt(u.checkout_id),
            s = o.isPersonalAccount() && o.normalizedAccountUserId != null && vt({
                checkoutSessionId: u.checkout_id,
                accountId: o.id,
                accountUserId: o.normalizedAccountUserId
            }) != null,
            d = u.postCheckoutResult === `success` && !(`kind` in u.completion) && u.completion.entry_point === K.STUDENTS_2026,
            x = r === Xe.STUDENTS && l && i === T.PLUS,
            S = n || d || x,
            C = u.postCheckoutResult === `success` && !(`kind` in u.completion) && (u.completion.checkout_kind == null || u.completion.checkout_kind === V.Standard) && (n || d || u.completion.entry_point == null && x),
            A = () => {
                if (_.current) return;
                _.current = !0;
                let e = E.logStructuredEvent(`ChatgptCheckoutPaymentSuccessPage`, {
                    checkoutPlanType: i,
                    checkoutId: u.checkout_id,
                    processorEntity: u.processor_entity ?? void 0,
                    isCheckoutModalEnabled: D,
                    ...u.postCheckoutResult === `success` && u.completion.checkout_kind != null ? {
                        checkoutKind: u.completion.checkout_kind,
                        entryPoint: u.completion.entry_point ?? void 0
                    } : {}
                });
                u.postCheckoutResult === `success` && Ye({
                    currentAccount: o,
                    location: `PaymentsSuccessPage`,
                    planName: i
                }), jt({
                    checkoutPlanType: i,
                    eventId: e
                })
            };
        Et({
            checkoutId: u.checkout_id,
            checkoutPlanType: i,
            postCheckoutResult: u.postCheckoutResult,
            processorEntity: u.processor_entity ?? void 0
        });
        let M = () => (v.current?.checkoutId !== u.checkout_id && (v.current = {
                checkoutId: u.checkout_id,
                pending: c({
                    reason: `checkout_success`,
                    path: `/payments/success`
                }).catch(Wt)
            }), v.current.pending),
            P = () => {
                (async () => {
                    if (u.postCheckoutResult !== `success`) return;
                    if (`kind` in u.completion && u.completion.kind === V.CodexTeam) {
                        Ft({
                            completion: u.completion,
                            checkoutFrom: r,
                            checkoutPlanType: i,
                            checkoutSessionId: u.checkout_id,
                            currentAccount: o,
                            defaultHomeRedirectUrl: k,
                            hasExplicitCheckoutPlanType: l,
                            intl: p,
                            navigate: m,
                            postCheckoutResult: u.postCheckoutResult,
                            queryClient: h,
                            toaster: g
                        });
                        return
                    }
                    if (j != null) {
                        if (await M(), e) return;
                        if (!y.current) {
                            y.current = !0;
                            let e = E.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                            });
                            U(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
                                unique_event_id: e
                            } : void 0), await R(j)
                        }
                        return
                    }
                    let n = o,
                        a = C && (!o.isPlus() || !o.hasPaidSubscription());
                    if (o.isFree() || a || t) {
                        if (n = C && s || t ? await Lt({
                                isProvisioned: t ? Ot : void 0,
                                checkoutAccount: o,
                                isCancelled: () => e,
                                queryClient: h
                            }) : await It(h), e) return;
                        (!n || n.isFree()) && (lt({
                            checkoutSessionId: u.checkout_id,
                            checkoutPlanType: i,
                            processorEntity: u.processor_entity ?? void 0,
                            isCheckoutModalEnabled: D,
                            checkoutKind: u.completion.checkout_kind ?? void 0,
                            entryPoint: u.completion.entry_point ?? void 0,
                            sourceSearchParams: f,
                            accessStage: `personal_account_refresh`,
                            failureReason: n == null ? `account_status_missing` : `account_still_free`
                        }), h.invalidateQueries(W()))
                    }
                    if (await M(), e || (await Mt({
                            hasPaidSubscription: n?.hasPaidSubscription() ?? !1,
                            intl: p,
                            queryClient: h
                        }), e)) return;
                    if (C) {
                        let e = o.isFree() || a ? n : w() ?? o;
                        if (!((e != null && e.isPersonalAccount() && e.normalizedAccountUserId != null ? vt({
                                checkoutSessionId: u.checkout_id,
                                accountId: e.id,
                                accountUserId: e.normalizedAccountUserId
                            }) : null) != null && e != null && e.isPersonalAccount() && e.isPlus() && e.hasPaidSubscription() && e.id === o.id && e.normalizedAccountUserId != null && e.normalizedAccountUserId === o.normalizedAccountUserId)) {
                            dt(`payments_success`, {
                                checkoutPlanType: i,
                                checkoutId: u.checkout_id,
                                processorEntity: u.processor_entity ?? void 0,
                                isCheckoutModalEnabled: D,
                                checkoutKind: u.completion.checkout_kind ?? void 0,
                                entryPoint: K.STUDENTS_2026,
                                outcome: `other_error`
                            }, f), X({
                                checkoutPlanType: i,
                                checkoutSessionId: u.checkout_id,
                                currentAccount: o,
                                hasExplicitCheckoutPlanType: l,
                                isStudents2026Checkout: !0,
                                intl: p,
                                message: O.somethingWentWrong,
                                navigate: m,
                                toaster: g
                            });
                            return
                        }
                        A()
                    }
                    if (await J(), e) return;
                    let c = e => {
                        let t = e === void 0 ? k : e;
                        Ft({
                            completion: C ? {
                                ...u.completion,
                                entry_point: K.STUDENTS_2026
                            } : u.completion,
                            checkoutFrom: r,
                            checkoutPlanType: i,
                            checkoutSessionId: u.checkout_id,
                            currentAccount: o,
                            defaultHomeRedirectUrl: t,
                            hasExplicitCheckoutPlanType: l,
                            intl: p,
                            navigate: m,
                            postCheckoutResult: u.postCheckoutResult,
                            queryClient: h,
                            toaster: g
                        })
                    };
                    if (t) {
                        mt(u.checkout_id);
                        let e = w(),
                            t = e?.data.subscriptionStatus.discount;
                        if (e != null && n != null && e.id === o.id && e.normalizedAccountUserId === o.normalizedAccountUserId && Ot(n) && Ot(e) && t?.promo_campaign_id === `plus-1-month-free` && t.discount_type === ne.PERCENTAGE && t.amount === 100 && t.duration_num_periods === 1 && n.id === o.id && n.normalizedAccountUserId === o.normalizedAccountUserId && i === T.PLUS && (u.completion.checkout_kind == null || u.completion.checkout_kind === V.Standard)) {
                            ee({
                                accountId: o.id,
                                accountUserId: o.normalizedAccountUserId,
                                onClose: () => c(`/?refresh_account=true`)
                            });
                            return
                        }
                    }
                    c()
                })()
            },
            F = () => {
                J().finally(() => {
                    e || P()
                })
            },
            I = () => {
                (async () => {
                    if (j != null) {
                        let t = await zt(h);
                        if (e) return;
                        if (t != null) {
                            if (!y.current) {
                                y.current = !0;
                                let e = E.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                    step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                    legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                                });
                                U(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
                                    unique_event_id: e
                                } : void 0), await R(j)
                            }
                            return
                        }
                        N({
                            stage: `plus_unconfirmed`,
                            handoff: j
                        });
                        return
                    }
                    let t = o.isFree() ? await It(h) : o;
                    if (!e) {
                        if (t && !t.isFree()) {
                            if (A(), await M(), e || (await Mt({
                                    hasPaidSubscription: t.hasPaidSubscription(),
                                    intl: p,
                                    queryClient: h
                                }), await J(), e)) return;
                            Ft({
                                completion: Yt,
                                checkoutFrom: r,
                                checkoutPlanType: i,
                                checkoutSessionId: u.checkout_id,
                                currentAccount: o,
                                defaultHomeRedirectUrl: k,
                                hasExplicitCheckoutPlanType: l,
                                intl: p,
                                navigate: m,
                                postCheckoutResult: u.postCheckoutResult,
                                queryClient: h,
                                toaster: g
                            });
                            return
                        }
                        X({
                            checkoutPlanType: i,
                            checkoutSessionId: u.checkout_id,
                            currentAccount: o,
                            hasExplicitCheckoutPlanType: l,
                            intl: p,
                            toaster: g,
                            navigate: m,
                            message: O.somethingWentWrong
                        })
                    }
                })()
            };
        if (u.postCheckoutResult === `user_mismatch`) return () => {
            e = !0
        };
        if (j == null && S && u.postCheckoutResult !== `success`) return X({
            checkoutPlanType: i,
            checkoutSessionId: u.checkout_id,
            currentAccount: o,
            hasExplicitCheckoutPlanType: l,
            isStudents2026Checkout: !0,
            intl: p,
            toaster: g,
            navigate: m,
            message: u.postCheckoutResult === `payment_failed` ? $.paymentFailedToastMessage : O.somethingWentWrong
        }), () => {
            e = !0
        };
        u.postCheckoutResult !== `success` && mt(u.checkout_id);
        bb533: switch (u.postCheckoutResult) {
            case `success`:
                C ? a.deleteCookie(te.DogfoodingAccountType) : A(), F();
                break bb533;
            case `payment_failed`:
                if (j != null) {
                    window.location.href = St();
                    break bb533
                }
                X({
                    checkoutPlanType: i,
                    checkoutSessionId: u.checkout_id,
                    currentAccount: o,
                    hasExplicitCheckoutPlanType: l,
                    intl: p,
                    toaster: g,
                    navigate: m,
                    message: $.paymentFailedToastMessage
                });
                break bb533;
            case `other_error`:
                I()
        }
        return () => {
            e = !0
        }
    }, t[13] = r, t[14] = i, t[15] = R, t[16] = o, t[17] = k, t[18] = l, t[19] = p, t[20] = D, t[21] = u.checkout_id, t[22] = u.completion, t[23] = u.postCheckoutResult, t[24] = u.processor_entity, t[25] = j, t[26] = m, t[27] = h, t[28] = f, t[29] = g, t[30] = b, t[31] = z) : z = t[31];
    let B;
    if (t[32] !== r || t[33] !== i || t[34] !== R || t[35] !== o || t[36] !== k || t[37] !== l || t[38] !== p || t[39] !== D || t[40] !== u || t[41] !== j || t[42] !== m || t[43] !== h || t[44] !== f || t[45] !== g || t[46] !== b ? (B = [r, i, R, b, o, k, l, p, D, u, j, m, h, f, g], t[32] = r, t[33] = i, t[34] = R, t[35] = o, t[36] = k, t[37] = l, t[38] = p, t[39] = D, t[40] = u, t[41] = j, t[42] = m, t[43] = h, t[44] = f, t[45] = g, t[46] = b, t[47] = B) : B = t[47], (0, Z.useEffect)(z, B), u.postCheckoutResult === `user_mismatch`) {
        let e;
        return t[48] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(sn, {}), t[48] = e) : e = t[48], e
    }
    if (b != null) {
        let e = o.id === b.accountId && o.normalizedAccountUserId === b.accountUserId,
            n;
        t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (n = {}, t[49] = n) : n = t[49];
        let r;
        return t[50] !== e || t[51] !== b.onClose ? (r = (0, Q.jsx)(s, {
            for: qt,
            open: e,
            onClose: b.onClose,
            withProps: n
        }), t[50] = e, t[51] = b.onClose, t[52] = r) : r = t[52], r
    }
    if (M != null) {
        let e = M.stage === `plus_unconfirmed`,
            r = M.stage === `personal_switch_failed`,
            i;
        t[53] !== p || t[54] !== r || t[55] !== e ? (i = p.formatMessage(e ? $.plusConfirmationRecoveryTitle : r ? $.personalPlusSwitchRecoveryTitle : $.businessCancellationRecoveryTitle), t[53] = p, t[54] = r, t[55] = e, t[56] = i) : i = t[56];
        let a;
        t[57] === i ? a = t[58] : (a = (0, Q.jsx)(`h1`, {
            className: `text-token-text-primary text-xl font-semibold`,
            children: i
        }), t[57] = i, t[58] = a);
        let o;
        t[59] !== p || t[60] !== r || t[61] !== e ? (o = p.formatMessage(e ? $.plusConfirmationRecoveryBody : r ? $.personalPlusSwitchRecoveryBody : $.businessCancellationRecoveryBody), t[59] = p, t[60] = r, t[61] = e, t[62] = o) : o = t[62];
        let s;
        t[63] === o ? s = t[64] : (s = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary text-sm leading-6`,
            children: o
        }), t[63] = o, t[64] = s);
        let c;
        t[65] !== M.handoff || t[66] !== R ? (c = () => {
            U(`chatgpt_business_cancel_to_plus_business_cancellation_retry_clicked`), R(M.handoff)
        }, t[65] = M.handoff, t[66] = R, t[67] = c) : c = t[67];
        let l;
        t[68] !== p || t[69] !== r || t[70] !== e ? (l = p.formatMessage(e ? $.retryPlusConfirmationButton : r ? $.retryPersonalPlusSwitchButton : $.retryBusinessCancellationButton), t[68] = p, t[69] = r, t[70] = e, t[71] = l) : l = t[71];
        let u;
        t[72] !== P || t[73] !== c || t[74] !== l ? (u = (0, Q.jsx)(n, {
            color: `primary`,
            loading: P,
            onClick: c,
            children: l
        }), t[72] = P, t[73] = c, t[74] = l, t[75] = u) : u = t[75];
        let d;
        t[76] === Symbol.for(`react.memo_cache_sentinel`) ? (d = St(), t[76] = d) : d = t[76];
        let f;
        t[77] === p ? f = t[78] : (f = p.formatMessage($.manageBusinessSubscriptionLink), t[77] = p, t[78] = f);
        let m;
        t[79] === f ? m = t[80] : (m = (0, Q.jsx)(Ve, {
            className: `text-token-text-secondary text-sm`,
            href: d,
            children: f
        }), t[79] = f, t[80] = m);
        let h;
        t[81] !== u || t[82] !== m ? (h = (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-3`,
            children: [u, m]
        }), t[81] = u, t[82] = m, t[83] = h) : h = t[83];
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
    x.error(e), I.addError(e instanceof Error ? e : Error(`Failed to update workspace token after checkout`), {
        source: `payments.success`
    })
}

function Gt() {
    ie({
        fallbackScreenHint: `login`,
        useFallbackScreenHint: !0,
        skipLoginModal: !0
    })
}
var Kt, Z, Q, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, $, cn = e((() => {
    _e(), Kt = Te(), oe(), pt(), re(), He(), b(), j(), xt(), Dt(), Ae(), We(), ut(), ke(), Qe(), Ne(), Fe(), rt(), Je(), o(), Ue(), st(), ot(), D(), $e(), Ze(), Oe(), ae(), M(), tt(), _t(), m(), h(), f(), je(), i(), v(), F(), y(), ee(), u(), r(), L(), we(), Re(), Z = t(ye()), ve(), Q = fe(), Ce(), qt = k(() => xe(() => import(`./33d473af-gikhzgywwqqashvf.js`).then(e => e.NoPaymentPlusTrialExtensionAcknowledgement), __vite__mapDeps([0, 1, 2, 3, 4, 5]))), Jt = function(e) {
        return e.Success = `success`, e.PaymentFailed = `payment_failed`, e.UserMismatch = `user_mismatch`, e.OtherError = `other_error`, e
    }({}), Yt = {
        success: !0
    }, Xt = [50, 100, 200, 400, 800, 1600, 3200, 3650], Zt = `2160290604`, Qt = `personal_checkout_failure_plan_recovery_enabled`, $t = `548821362`, en = `1549629729`, tn = `3507623755`, nn = `eligible_upsell_context_ids`, rn = `return_to_thread_enabled`, an = `drop_into_work_after_upgrade`, on = pe(function() {
        "use forget";
        let e = (0, Kt.c)(27),
            [t] = be(),
            n = de(),
            r = z.getItem(H.CheckoutFrom),
            i = B(),
            a = Se(),
            o;
        e[0] === t ? o = e[1] : (o = t.get(`plan_type`), e[0] = t, e[1] = o);
        let s = o,
            c = s ?? T.PLUS,
            l;
        e[2] === a.checkout_id ? l = e[3] : (l = Tt(a.checkout_id), e[2] = a.checkout_id, e[3] = l);
        let u = l,
            d;
        e[4] !== i || e[5] !== a.checkout_id ? (d = i?.isPersonalAccount() === !0 && typeof i.normalizedAccountUserId == `string` && vt({
            checkoutSessionId: a.checkout_id,
            accountId: i.id,
            accountUserId: i.normalizedAccountUserId
        }) != null, e[4] = i, e[5] = a.checkout_id, e[6] = d) : d = e[6];
        let f = d,
            p;
        e[7] !== a.checkout_id || e[8] !== n.search ? (p = new URLSearchParams(n.search), se(a.checkout_id, p), e[7] = a.checkout_id, e[8] = n.search, e[9] = p) : p = e[9];
        let m = p,
            h, g;
        if (e[10] !== c || e[11] !== f || e[12] !== u || e[13] !== a.checkout_id || e[14] !== a.postCheckoutResult || e[15] !== a.processor_entity || e[16] !== m ? (h = () => {
                let e = a.checkout_id,
                    t = a.processor_entity ?? void 0;
                a.postCheckoutResult !== `success` && dt(`payments_success`, {
                    checkoutPlanType: c,
                    checkoutId: e,
                    processorEntity: t,
                    isCheckoutModalEnabled: u,
                    ...f ? {
                        entryPoint: K.STUDENTS_2026
                    } : {},
                    outcome: a.postCheckoutResult === `payment_failed` ? `payment_failed` : a.postCheckoutResult === `user_mismatch` ? `user_mismatch` : `other_error`
                }, m)
            }, g = [c, f, u, a.checkout_id, a.processor_entity, a.postCheckoutResult, m], e[10] = c, e[11] = f, e[12] = u, e[13] = a.checkout_id, e[14] = a.postCheckoutResult, e[15] = a.processor_entity, e[16] = m, e[17] = h, e[18] = g) : (h = e[17], g = e[18]), (0, Z.useEffect)(h, g), !i) return null;
        let _ = Ut,
            v = qe(r) ? r : null,
            y = s != null,
            b;
        return e[19] !== _ || e[20] !== c || e[21] !== i || e[22] !== a || e[23] !== m || e[24] !== v || e[25] !== y ? (b = (0, Q.jsx)(_, {
            checkoutFrom: v,
            checkoutPlanType: c,
            currentAccount: i,
            hasExplicitCheckoutPlanType: y,
            loaderData: a,
            sourceSearchParams: m
        }), e[19] = _, e[20] = c, e[21] = i, e[22] = a, e[23] = m, e[24] = v, e[25] = y, e[26] = b) : b = e[26], b
    }), sn = () => {
        "use forget";
        let e = (0, Kt.c)(4),
            t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(`h1`, {
            className: `text-token-text-primary text-xl font-semibold`,
            children: (0, Q.jsx)(G, {
                ...$.userMismatchRecoveryTitle
            })
        }), e[0] = t) : t = e[0];
        let r;
        e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary text-sm leading-6`,
            children: (0, Q.jsx)(G, {
                ...$.userMismatchRecoveryBody
            })
        }), e[1] = r) : r = e[1];
        let i;
        e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Q.jsx)(n, {
            color: `primary`,
            onClick: Gt,
            children: (0, Q.jsx)(G, {
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
                    children: [i, (0, Q.jsx)(Ve, {
                        className: `text-token-text-secondary text-sm`,
                        href: `/`,
                        children: (0, Q.jsx)(G, {
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
    Et as a, on as i, Jt as n, Dt as o, cn as r, sn as t
};
//# sourceMappingURL=bfd5ba7b-ki21phqr16fa2wly.js.map