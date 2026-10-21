const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/33d473af-knozzxnc7zg7s1e6.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-ed29bs6yiwucn7st.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/0e2455cf-5y65kiuirs6pcl0x.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    Brt as r,
    Dnt as i,
    E1 as a,
    Ent as o,
    Ert as s,
    F7 as c,
    G1 as l,
    Ga as u,
    Gnt as d,
    I1 as f,
    J0 as p,
    J6 as m,
    JT as h,
    K as g,
    Knt as _,
    Lst as v,
    O1 as y,
    Qit as b,
    Rnt as x,
    Tnt as S,
    Ua as C,
    Unt as w,
    VU as ee,
    Vnt as te,
    W4 as T,
    Xit as E,
    Y0 as D,
    Y1 as O,
    Yit as ne,
    Yrt as k,
    Z as A,
    Zst as j,
    b4 as M,
    dst as N,
    eat as P,
    fst as F,
    hnt as I,
    j7 as L,
    mit as re,
    n0 as R,
    nat as z,
    nrt as B,
    oit as ie,
    pnt as V,
    qB as ae,
    qT as oe,
    qnt as H,
    rrt as se,
    t0 as ce,
    tV as le,
    ust as U,
    x4 as ue,
    zU as de
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as fe,
    At as pe,
    Bn as me,
    Ht as he,
    Ln as ge,
    N as _e,
    Nn as W,
    Pt as ve,
    Rn as ye,
    Ut as be,
    Vn as xe,
    cn as Se,
    jt as Ce,
    ln as we,
    s as Te,
    wn as Ee,
    zn as De
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Asn as Oe,
    Dsn as ke,
    Ern as Ae,
    Esn as je,
    Fan as Me,
    L2t as Ne,
    R2t as Pe,
    aln as Fe,
    att as Ie,
    fn as Le,
    gn as Re,
    hn as ze,
    ian as G,
    itt as Be,
    jan as Ve,
    jsn as He,
    ksn as Ue,
    lan as We,
    lm as Ge,
    nWn as Ke,
    oln as K,
    pGn as qe,
    pn as Je,
    rWn as Ye,
    ran as Xe,
    sm as Ze,
    vin as Qe,
    wsn as $e,
    xin as et,
    yin as tt
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Jh as nt,
    eg as rt,
    l_ as it,
    o_ as at
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    r as ot,
    t as st
} from "./ee0eeb85-cyaek5u5purl3lf2.js";
import {
    i as ct,
    r as lt
} from "./58459bbe-lntvvwn2vcmivkvw.js";
import {
    a as ut,
    o as dt,
    t as q,
    y as ft
} from "./a4eef3c0-gmr7ckq7sf9p6qt8.js";
import {
    n as pt,
    r as mt,
    t as ht
} from "./97a55ca1-ob1vz7gjgz2uk2e8.js";
import {
    n as gt,
    t as _t
} from "./4cc06ac6-grsbu8uplirzn9vn.js";
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
} from "./a6f4f526-fbuw6sorf6aegl7q.js";

function Tt(e) {
    let t = _t(S.getItem(o.CheckoutConfirmLatencyPending), e);
    return t.status === `ready` && t.pending.is_checkout_modal_enabled === !0
}

function Et({
    checkoutId: e,
    checkoutPlanType: t,
    postCheckoutResult: n,
    processorEntity: r
}) {
    let i = S.getItem(o.CheckoutConfirmLatencyPending) ?? null;
    if (!i) return;
    let a = _t(i, e);
    if (a.status === `discard`) {
        S.removeItem(o.CheckoutConfirmLatencyPending);
        return
    }
    if (a.status === `other_checkout`) return;
    let {
        pending: s,
        durationMs: c
    } = a;
    return P.addAction(`checkout.confirm.latency_ms`, {
        duration_ms: c,
        requires_manual_approval: s.requires_manual_approval === !0,
        checkout_session_id: e ?? s.checkout_session_id,
        processor_entity: r ?? s.processor_entity,
        plan_type: t,
        result_type: n,
        measurement_point: `return_page`
    }), S.removeItem(o.CheckoutConfirmLatencyPending), {
        durationMs: c,
        checkoutSessionId: s.checkout_session_id
    }
}
var Dt = e((() => {
    gt(), z(), i()
}));

function Y(e) {
    M(e, {
        sessionChanged: !1
    })
}

function Ot(e) {
    return e.isPersonalAccount() && e.isPlus() && e.hasPaidSubscription() && !e.isActiveSubscriptionGratis() && e.data.subscriptionStatus.subscriptionPlan === F.PLUS
}

function X({
    checkoutPlanType: e,
    checkoutSessionId: t,
    currentAccount: n,
    hasExplicitCheckoutPlanType: r,
    isStudents2026Checkout: i = !1,
    intl: a,
    message: s,
    navigate: c,
    toaster: l
}) {
    if (l.warning(a.formatMessage(s), {
            duration: 5
        }), (i || yt(t)) && S.removeItem(o.CheckoutFrom), n.isPersonalAccount()) {
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
        d = je(t);
    d != null && (u.searchParams.set(Ue, d), u.searchParams.set(`mweb_fallback`, `1`)), c(`${u.pathname}${u.search}${u.hash}`)
}

function kt(e) {
    return Object.values(U).some(t => t === e)
}

function At(e, t) {
    return !t || !kt(e) || !G(e) || !d(Zt).get(Qt, !1) ? `/#pricing` : `/?cta_tab=personal&highlight_plan=${e}#pricing`
}

function jt({
    checkoutPlanType: e,
    eventId: t
}) {
    V.logValueEventWithStatsig({
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
    }), m(), ne.deleteCookie(b.DogfoodingAccountType), e === U.PLUS && x.logEvent(`chatgpt_plus_payment_success_page`)
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
        se.error(t), P.addError(t instanceof Error ? t : Error(`Failed to replay pending image download after checkout`), {
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
    return n?.upsellContextId === `work` && kt(e) && G(e) && (t.checkout_kind == null || t.checkout_kind === T.Standard) ? n.threadId != null && n.sitePreview != null ? lt(n.threadId, n.sitePreview) : n.threadId == null ? `/?surface=work` : ae(n.threadId) : n?.threadId == null || !kt(e) || !G(e) || t.checkout_kind != null && t.checkout_kind !== T.Standard || !w($t).get(nn, []).includes(n.upsellContextId) ? null : d(en).get(rn, !1) ? ae(n.threadId) : null
}

function Ft({
    completion: e,
    checkoutFrom: t,
    checkoutPlanType: i,
    checkoutSessionId: a,
    currentAccount: s,
    defaultHomeRedirectUrl: c,
    hasExplicitCheckoutPlanType: u,
    intl: f,
    navigate: p,
    postCheckoutResult: m,
    queryClient: h,
    toaster: g
}) {
    if (`kind` in e && e.kind === T.CodexTeam) {
        Qe(), l(h, e.workspace_id).then(() => {
            p({
                pathname: nt,
                search: `?account_id=${e.workspace_id}`
            }, {
                replace: !0
            })
        }).catch(e => {
            se.error(e)
        });
        return
    }
    let _ = m === `success` && (e.checkout_kind == null || e.checkout_kind === T.Standard) ? Ve(a) : null,
        v = tt(),
        y = m === `success` && kt(i) && G(i) && (e.checkout_kind == null || e.checkout_kind === T.Standard) ? je(a) : null,
        b = t == null ? Pt({
            checkoutPlanType: i,
            completion: e,
            context: v
        }) : null;
    if (Qe(), e.entry_point === K.STUDENTS_2026) {
        let e = n() ?? s,
            t = e.isPersonalAccount() && e.normalizedAccountUserId != null && e.id === s.id && e.normalizedAccountUserId === s.normalizedAccountUserId ? J({
                checkoutSessionId: a,
                accountId: e.id,
                accountUserId: e.normalizedAccountUserId
            }) : null;
        if (m !== `success` || t == null || e.normalizedAccountUserId == null || !e.isPlus() || !e.hasPaidSubscription()) {
            X({
                checkoutPlanType: i,
                checkoutSessionId: a,
                currentAccount: e,
                hasExplicitCheckoutPlanType: u,
                isStudents2026Checkout: !0,
                intl: f,
                message: r.somethingWentWrong,
                navigate: p,
                toaster: g
            });
            return
        }
        let c = bt({
            checkoutSessionId: a,
            accountId: e.id,
            accountUserId: e.normalizedAccountUserId,
            status: `success`
        });
        if (c == null) {
            X({
                checkoutPlanType: i,
                checkoutSessionId: a,
                currentAccount: e,
                hasExplicitCheckoutPlanType: u,
                isStudents2026Checkout: !0,
                intl: f,
                message: r.somethingWentWrong,
                navigate: p,
                toaster: g
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
        let l = new URL(c, window.location.origin);
        l.searchParams.set(`refresh_account`, `true`), S.removeItem(o.CheckoutFrom), Y(`${l.pathname}${l.search}`)
    } else if (_ != null) S.removeItem(o.CheckoutFrom), Y(Nt(_.returnPath));
    else if (y != null) {
        let e = new URL(y);
        e.searchParams.delete(Oe), e.searchParams.set(`refresh_account`, `true`), $e(a), S.removeItem(o.CheckoutFrom), Y(e.href)
    } else t ? (S.removeItem(o.CheckoutFrom), Y(Nt(Le[t]))) : b == null ? m === `success` && u && !(`kind` in e) && (e.checkout_kind == null || e.checkout_kind === T.Standard) && (i === U.PLUS || i === U.PROLITE || i === U.PRO || i === U.PROMAX) && t == null && v == null && d(tn).get(an, !1) ? Y(Nt(`/?surface=work`)) : (g.success(i === U.SCI ? f.formatMessage($.sciPaymentConfirmationToastMessage) : f.formatMessage($.paymentConfirmationToastMessage, {
        planType: i,
        planName: Ne(i)
    }), {
        duration: 5
    }), c == null ? Y() : Y(c)) : Y(Nt(b))
}
async function It(e) {
    try {
        await e.refetchQueries({
            queryKey: y().queryKey
        })
    } catch {
        return null
    }
    return n()
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
            queryKey: y().queryKey
        }, {
            throwOnError: !0
        })
    } catch {
        return null
    }
    let n = e.getQueryData(y().queryKey);
    return n == null ? null : a(n).find(e => e.id === t) ?? null
}
async function zt(e) {
    try {
        await e.refetchQueries({
            queryKey: y().queryKey
        }, {
            throwOnError: !0
        })
    } catch {
        return null
    }
    let t = e.getQueryData(y().queryKey);
    return t == null ? null : a(t).find(e => e.structure === N.PERSONAL && e.planType === U.PLUS && e.hasPaidSubscription()) ?? null
}

function Bt(e) {
    return e.willDeactivateAtTermEnd() || e.isDeactivated()
}
async function Vt(e, t) {
    try {
        let {
            updatedAccount: n
        } = await l(e, t);
        return n
    } catch (e) {
        return P.addError(e instanceof Error ? e : Error(`Failed to switch to personal Plus after cancellation`), {
            source: `payments.success.business_cancel_to_plus`
        }), !1
    }
}
async function Ht(e) {
    await L.safePost(`/subscriptions/cancel`, {
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
            currentAccount: o,
            hasExplicitCheckoutPlanType: s,
            loaderData: c,
            sourceSearchParams: l
        } = e,
        u = De(),
        d = ve(),
        f = _e(),
        p = ee(),
        m = (0, Z.useRef)(!1),
        h = (0, Z.useRef)(null),
        _ = (0, Z.useRef)(!1),
        [x, S] = (0, Z.useState)(null),
        w, E;
    t[0] !== o || t[1] !== x ? (w = () => {
        x != null && (o.id !== x.accountId || o.normalizedAccountUserId !== x.accountUserId) && x.onClose()
    }, E = [o, x], t[0] = o, t[1] = x, t[2] = w, t[3] = E) : (w = t[2], E = t[3]), (0, Z.useEffect)(w, E);
    let D;
    t[4] === c.checkout_id ? D = t[5] : (D = Tt(c.checkout_id), t[4] = c.checkout_id, t[5] = D);
    let O = D,
        k = c.postCheckoutResult === `success` && s && (a === U.PLUS || a === U.PROLITE || a === U.PRO || a === U.PROMAX) && !(`kind` in c.completion) && (c.completion.checkout_kind == null || c.completion.checkout_kind === T.Standard) ? a === U.PLUS ? g : Ze : null,
        A;
    t[6] !== a || t[7] !== c.checkout_id ? (A = () => Ct({
        checkoutPlanType: a,
        checkoutSessionId: c.checkout_id
    }), t[6] = a, t[7] = c.checkout_id, t[8] = A) : A = t[8];
    let [j] = (0, Z.useState)(A), [M, N] = (0, Z.useState)(null), [F, I] = (0, Z.useState)(!1), L;
    t[9] !== u || t[10] !== f || t[11] !== p ? (L = async e => {
        I(!0);
        let t = await zt(f);
        if (t == null) return P.addError(Error(`Unable to verify personal Plus after checkout`), {
            source: `payments.success.business_cancel_to_plus`
        }), N({
            stage: `plus_unconfirmed`,
            handoff: e
        }), I(!1), !1;
        let n = await Rt(f, e.businessAccountId);
        if (n == null || !n.isSelfServeBusiness()) {
            P.addError(Error(`Unable to verify intended Business account after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            });
            let t = V.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return H(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
                unique_event_id: t
            } : void 0), N({
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
            let n = await Rt(f, e.businessAccountId);
            r = n?.isSelfServeBusiness() === !0 && Bt(n), r || P.addError(t instanceof Error ? t : Error(`Unable to confirm Business cancellation after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            })
        }
        if (!r) {
            let t = V.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return H(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
                unique_event_id: t
            } : void 0), N({
                stage: `business_cancellation_failed`,
                handoff: e
            }), I(!1), !1
        }
        let i = V.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
            step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_SUCCEEDED`,
            legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_succeeded`
        });
        return H(`chatgpt_business_cancel_to_plus_business_cancellation_succeeded`, void 0, i ? {
            unique_event_id: i
        } : void 0), await Promise.all([q(), te()]), await Vt(f, t.id) ? (wt(), N(null), p.success(u.formatMessage($.businessCancelToPlusSuccessMessage), {
            duration: 5
        }), I(!1), Y(), !0) : (N({
            stage: `personal_switch_failed`,
            handoff: e
        }), I(!1), !1)
    }, t[9] = u, t[10] = f, t[11] = p, t[12] = L) : L = t[12];
    let R = L,
        z;
    t[13] !== i || t[14] !== a || t[15] !== R || t[16] !== o || t[17] !== k || t[18] !== s || t[19] !== u || t[20] !== O || t[21] !== c.checkout_id || t[22] !== c.completion || t[23] !== c.postCheckoutResult || t[24] !== c.processor_entity || t[25] !== j || t[26] !== d || t[27] !== f || t[28] !== l || t[29] !== p || t[30] !== x ? (z = () => {
        if (x != null) return;
        let e = !1,
            t = pt(c.checkout_id, o),
            g = yt(c.checkout_id),
            C = o.isPersonalAccount() && o.normalizedAccountUserId != null && J({
                checkoutSessionId: c.checkout_id,
                accountId: o.id,
                accountUserId: o.normalizedAccountUserId
            }) != null,
            w = c.postCheckoutResult === `success` && !(`kind` in c.completion) && c.completion.entry_point === K.STUDENTS_2026,
            ee = i === Je.STUDENTS && s && a === U.PLUS,
            te = g || w || ee,
            E = c.postCheckoutResult === `success` && !(`kind` in c.completion) && (c.completion.checkout_kind == null || c.completion.checkout_kind === T.Standard) && (g || w || c.completion.entry_point == null && ee),
            D = () => {
                if (m.current) return;
                m.current = !0;
                let e = V.logStructuredEvent(`ChatgptCheckoutPaymentSuccessPage`, {
                    checkoutPlanType: a,
                    checkoutId: c.checkout_id,
                    processorEntity: c.processor_entity ?? void 0,
                    isCheckoutModalEnabled: O,
                    ...c.postCheckoutResult === `success` && c.completion.checkout_kind != null ? {
                        checkoutKind: c.completion.checkout_kind,
                        entryPoint: c.completion.entry_point ?? void 0
                    } : {}
                });
                c.postCheckoutResult === `success` && Ie({
                    currentAccount: o,
                    location: `PaymentsSuccessPage`,
                    planName: a
                }), jt({
                    checkoutPlanType: a,
                    eventId: e
                })
            };
        Et({
            checkoutId: c.checkout_id,
            checkoutPlanType: a,
            postCheckoutResult: c.postCheckoutResult,
            processorEntity: c.processor_entity ?? void 0
        });
        let A = () => (h.current?.checkoutId !== c.checkout_id && (h.current = {
                checkoutId: c.checkout_id,
                pending: re({
                    reason: `checkout_success`,
                    path: `/payments/success`
                }).catch(Wt)
            }), h.current.pending),
            M = () => {
                (async () => {
                    if (c.postCheckoutResult !== `success`) return;
                    if (`kind` in c.completion && c.completion.kind === T.CodexTeam) {
                        Ft({
                            completion: c.completion,
                            checkoutFrom: i,
                            checkoutPlanType: a,
                            checkoutSessionId: c.checkout_id,
                            currentAccount: o,
                            defaultHomeRedirectUrl: k,
                            hasExplicitCheckoutPlanType: s,
                            intl: u,
                            navigate: d,
                            postCheckoutResult: c.postCheckoutResult,
                            queryClient: f,
                            toaster: p
                        });
                        return
                    }
                    if (j != null) {
                        if (await A(), e) return;
                        if (!_.current) {
                            _.current = !0;
                            let e = V.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                            });
                            H(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
                                unique_event_id: e
                            } : void 0), await R(j)
                        }
                        return
                    }
                    let m = o,
                        h = E && (!o.isPlus() || !o.hasPaidSubscription());
                    if (o.isFree() || h || t) {
                        if (m = E && C || t ? await Lt({
                                isProvisioned: t ? Ot : void 0,
                                checkoutAccount: o,
                                isCancelled: () => e,
                                queryClient: f
                            }) : await It(f), e) return;
                        (!m || m.isFree()) && (dt({
                            checkoutSessionId: c.checkout_id,
                            checkoutPlanType: a,
                            processorEntity: c.processor_entity ?? void 0,
                            isCheckoutModalEnabled: O,
                            checkoutKind: c.completion.checkout_kind ?? void 0,
                            entryPoint: c.completion.entry_point ?? void 0,
                            sourceSearchParams: l,
                            accessStage: `personal_account_refresh`,
                            failureReason: m == null ? `account_status_missing` : `account_still_free`
                        }), f.invalidateQueries(y()))
                    }
                    if (await A(), e || (await Mt({
                            hasPaidSubscription: m?.hasPaidSubscription() ?? !1,
                            intl: u,
                            queryClient: f
                        }), e)) return;
                    if (E) {
                        let e = o.isFree() || h ? m : n() ?? o;
                        if (!((e != null && e.isPersonalAccount() && e.normalizedAccountUserId != null ? J({
                                checkoutSessionId: c.checkout_id,
                                accountId: e.id,
                                accountUserId: e.normalizedAccountUserId
                            }) : null) != null && e != null && e.isPersonalAccount() && e.isPlus() && e.hasPaidSubscription() && e.id === o.id && e.normalizedAccountUserId != null && e.normalizedAccountUserId === o.normalizedAccountUserId)) {
                            ft(`payments_success`, {
                                checkoutPlanType: a,
                                checkoutId: c.checkout_id,
                                processorEntity: c.processor_entity ?? void 0,
                                isCheckoutModalEnabled: O,
                                checkoutKind: c.completion.checkout_kind ?? void 0,
                                entryPoint: K.STUDENTS_2026,
                                outcome: `other_error`
                            }, l), X({
                                checkoutPlanType: a,
                                checkoutSessionId: c.checkout_id,
                                currentAccount: o,
                                hasExplicitCheckoutPlanType: s,
                                isStudents2026Checkout: !0,
                                intl: u,
                                message: r.somethingWentWrong,
                                navigate: d,
                                toaster: p
                            });
                            return
                        }
                        D()
                    }
                    if (await q(), e) return;
                    let g = e => {
                        let t = e === void 0 ? k : e;
                        Ft({
                            completion: E ? {
                                ...c.completion,
                                entry_point: K.STUDENTS_2026
                            } : c.completion,
                            checkoutFrom: i,
                            checkoutPlanType: a,
                            checkoutSessionId: c.checkout_id,
                            currentAccount: o,
                            defaultHomeRedirectUrl: t,
                            hasExplicitCheckoutPlanType: s,
                            intl: u,
                            navigate: d,
                            postCheckoutResult: c.postCheckoutResult,
                            queryClient: f,
                            toaster: p
                        })
                    };
                    if (t) {
                        ht(c.checkout_id);
                        let e = n(),
                            t = e?.data.subscriptionStatus.discount;
                        if (e != null && m != null && e.id === o.id && e.normalizedAccountUserId === o.normalizedAccountUserId && Ot(m) && Ot(e) && t?.promo_campaign_id === `plus-1-month-free` && t.discount_type === v.PERCENTAGE && t.amount === 100 && t.duration_num_periods === 1 && m.id === o.id && m.normalizedAccountUserId === o.normalizedAccountUserId && a === U.PLUS && (c.completion.checkout_kind == null || c.completion.checkout_kind === T.Standard)) {
                            S({
                                accountId: o.id,
                                accountUserId: o.normalizedAccountUserId,
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
                    e || M()
                })
            },
            F = () => {
                (async () => {
                    if (j != null) {
                        let t = await zt(f);
                        if (e) return;
                        if (t != null) {
                            if (!_.current) {
                                _.current = !0;
                                let e = V.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                    step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                    legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                                });
                                H(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
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
                    let t = o.isFree() ? await It(f) : o;
                    if (!e) {
                        if (t && !t.isFree()) {
                            if (D(), await A(), e || (await Mt({
                                    hasPaidSubscription: t.hasPaidSubscription(),
                                    intl: u,
                                    queryClient: f
                                }), await q(), e)) return;
                            Ft({
                                completion: Yt,
                                checkoutFrom: i,
                                checkoutPlanType: a,
                                checkoutSessionId: c.checkout_id,
                                currentAccount: o,
                                defaultHomeRedirectUrl: k,
                                hasExplicitCheckoutPlanType: s,
                                intl: u,
                                navigate: d,
                                postCheckoutResult: c.postCheckoutResult,
                                queryClient: f,
                                toaster: p
                            });
                            return
                        }
                        X({
                            checkoutPlanType: a,
                            checkoutSessionId: c.checkout_id,
                            currentAccount: o,
                            hasExplicitCheckoutPlanType: s,
                            intl: u,
                            toaster: p,
                            navigate: d,
                            message: r.somethingWentWrong
                        })
                    }
                })()
            };
        if (c.postCheckoutResult === `user_mismatch`) return () => {
            e = !0
        };
        if (j == null && te && c.postCheckoutResult !== `success`) return X({
            checkoutPlanType: a,
            checkoutSessionId: c.checkout_id,
            currentAccount: o,
            hasExplicitCheckoutPlanType: s,
            isStudents2026Checkout: !0,
            intl: u,
            toaster: p,
            navigate: d,
            message: c.postCheckoutResult === `payment_failed` ? $.paymentFailedToastMessage : r.somethingWentWrong
        }), () => {
            e = !0
        };
        c.postCheckoutResult !== `success` && ht(c.checkout_id);
        bb533: switch (c.postCheckoutResult) {
            case `success`:
                E ? ne.deleteCookie(b.DogfoodingAccountType) : D(), P();
                break bb533;
            case `payment_failed`:
                if (j != null) {
                    window.location.href = St();
                    break bb533
                }
                X({
                    checkoutPlanType: a,
                    checkoutSessionId: c.checkout_id,
                    currentAccount: o,
                    hasExplicitCheckoutPlanType: s,
                    intl: u,
                    toaster: p,
                    navigate: d,
                    message: $.paymentFailedToastMessage
                });
                break bb533;
            case `other_error`:
                F()
        }
        return () => {
            e = !0
        }
    }, t[13] = i, t[14] = a, t[15] = R, t[16] = o, t[17] = k, t[18] = s, t[19] = u, t[20] = O, t[21] = c.checkout_id, t[22] = c.completion, t[23] = c.postCheckoutResult, t[24] = c.processor_entity, t[25] = j, t[26] = d, t[27] = f, t[28] = l, t[29] = p, t[30] = x, t[31] = z) : z = t[31];
    let B;
    if (t[32] !== i || t[33] !== a || t[34] !== R || t[35] !== o || t[36] !== k || t[37] !== s || t[38] !== u || t[39] !== O || t[40] !== c || t[41] !== j || t[42] !== d || t[43] !== f || t[44] !== l || t[45] !== p || t[46] !== x ? (B = [i, a, R, x, o, k, s, u, O, c, j, d, f, l, p], t[32] = i, t[33] = a, t[34] = R, t[35] = o, t[36] = k, t[37] = s, t[38] = u, t[39] = O, t[40] = c, t[41] = j, t[42] = d, t[43] = f, t[44] = l, t[45] = p, t[46] = x, t[47] = B) : B = t[47], (0, Z.useEffect)(z, B), c.postCheckoutResult === `user_mismatch`) {
        let e;
        return t[48] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(sn, {}), t[48] = e) : e = t[48], e
    }
    if (x != null) {
        let e = o.id === x.accountId && o.normalizedAccountUserId === x.accountUserId,
            n;
        t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (n = {}, t[49] = n) : n = t[49];
        let r;
        return t[50] !== e || t[51] !== x.onClose ? (r = (0, Q.jsx)(C, {
            for: qt,
            open: e,
            onClose: x.onClose,
            withProps: n
        }), t[50] = e, t[51] = x.onClose, t[52] = r) : r = t[52], r
    }
    if (M != null) {
        let e = M.stage === `plus_unconfirmed`,
            n = M.stage === `personal_switch_failed`,
            r;
        t[53] !== u || t[54] !== n || t[55] !== e ? (r = u.formatMessage(e ? $.plusConfirmationRecoveryTitle : n ? $.personalPlusSwitchRecoveryTitle : $.businessCancellationRecoveryTitle), t[53] = u, t[54] = n, t[55] = e, t[56] = r) : r = t[56];
        let i;
        t[57] === r ? i = t[58] : (i = (0, Q.jsx)(`h1`, {
            className: `text-token-text-primary text-xl font-semibold`,
            children: r
        }), t[57] = r, t[58] = i);
        let a;
        t[59] !== u || t[60] !== n || t[61] !== e ? (a = u.formatMessage(e ? $.plusConfirmationRecoveryBody : n ? $.personalPlusSwitchRecoveryBody : $.businessCancellationRecoveryBody), t[59] = u, t[60] = n, t[61] = e, t[62] = a) : a = t[62];
        let o;
        t[63] === a ? o = t[64] : (o = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary text-sm leading-6`,
            children: a
        }), t[63] = a, t[64] = o);
        let s;
        t[65] !== M.handoff || t[66] !== R ? (s = () => {
            H(`chatgpt_business_cancel_to_plus_business_cancellation_retry_clicked`), R(M.handoff)
        }, t[65] = M.handoff, t[66] = R, t[67] = s) : s = t[67];
        let c;
        t[68] !== u || t[69] !== n || t[70] !== e ? (c = u.formatMessage(e ? $.retryPlusConfirmationButton : n ? $.retryPersonalPlusSwitchButton : $.retryBusinessCancellationButton), t[68] = u, t[69] = n, t[70] = e, t[71] = c) : c = t[71];
        let l;
        t[72] !== F || t[73] !== s || t[74] !== c ? (l = (0, Q.jsx)(oe, {
            color: `primary`,
            loading: F,
            onClick: s,
            children: c
        }), t[72] = F, t[73] = s, t[74] = c, t[75] = l) : l = t[75];
        let d;
        t[76] === Symbol.for(`react.memo_cache_sentinel`) ? (d = St(), t[76] = d) : d = t[76];
        let f;
        t[77] === u ? f = t[78] : (f = u.formatMessage($.manageBusinessSubscriptionLink), t[77] = u, t[78] = f);
        let p;
        t[79] === f ? p = t[80] : (p = (0, Q.jsx)(Ke, {
            className: `text-token-text-secondary text-sm`,
            href: d,
            children: f
        }), t[79] = f, t[80] = p);
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
    se.error(e), P.addError(e instanceof Error ? e : Error(`Failed to update workspace token after checkout`), {
        source: `payments.success`
    })
}

function Gt() {
    R({
        fallbackScreenHint: `login`,
        useFallbackScreenHint: !0,
        skipLoginModal: !0
    })
}
var Kt, Z, Q, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, $, cn = e((() => {
    fe(), Kt = Ee(), u(), mt(), D(), Me(), j(), h(), xt(), Dt(), Fe(), Xe(), ut(), We(), qe(), ke(), He(), rt(), ze(), k(), Ye(), ct(), st(), A(), Ge(), Be(), Ae(), f(), ce(), at(), vt(), de(), ie(), I(), et(), E(), z(), i(), B(), ue(), c(), _(), le(), Te(), Pe(), Z = t(xe()), ye(), Q = me(), we(), qt = p(() => Se(() => import(`./33d473af-knozzxnc7zg7s1e6.js`).then(e => e.NoPaymentPlusTrialExtensionAcknowledgement), __vite__mapDeps([0, 1, 2, 3, 4, 5]))), Jt = function(e) {
        return e.Success = `success`, e.PaymentFailed = `payment_failed`, e.UserMismatch = `user_mismatch`, e.OtherError = `other_error`, e
    }({}), Yt = {
        success: !0
    }, Xt = [50, 100, 200, 400, 800, 1600, 3200, 3650], Zt = `2160290604`, Qt = `personal_checkout_failure_plan_recovery_enabled`, $t = `548821362`, en = `1549629729`, tn = `3507623755`, nn = `eligible_upsell_context_ids`, rn = `return_to_thread_enabled`, an = `drop_into_work_after_upgrade`, on = be(function() {
        "use forget";
        let e = (0, Kt.c)(27),
            [t] = he(),
            n = Ce(),
            r = S.getItem(o.CheckoutFrom),
            i = O(),
            a = pe(),
            c;
        e[0] === t ? c = e[1] : (c = t.get(`plan_type`), e[0] = t, e[1] = c);
        let l = c,
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
        e[7] !== a.checkout_id || e[8] !== n.search ? (h = new URLSearchParams(n.search), s(a.checkout_id, h), e[7] = a.checkout_id, e[8] = n.search, e[9] = h) : h = e[9];
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
                        entryPoint: K.STUDENTS_2026
                    } : {},
                    outcome: a.postCheckoutResult === `payment_failed` ? `payment_failed` : a.postCheckoutResult === `user_mismatch` ? `user_mismatch` : `other_error`
                }, g)
            }, v = [u, m, f, a.checkout_id, a.processor_entity, a.postCheckoutResult, g], e[10] = u, e[11] = m, e[12] = f, e[13] = a.checkout_id, e[14] = a.postCheckoutResult, e[15] = a.processor_entity, e[16] = g, e[17] = _, e[18] = v) : (_ = e[17], v = e[18]), (0, Z.useEffect)(_, v), !i) return null;
        let y = Ut,
            b = Re(r) ? r : null,
            x = l != null,
            C;
        return e[19] !== y || e[20] !== u || e[21] !== i || e[22] !== a || e[23] !== g || e[24] !== b || e[25] !== x ? (C = (0, Q.jsx)(y, {
            checkoutFrom: b,
            checkoutPlanType: u,
            currentAccount: i,
            hasExplicitCheckoutPlanType: x,
            loaderData: a,
            sourceSearchParams: g
        }), e[19] = y, e[20] = u, e[21] = i, e[22] = a, e[23] = g, e[24] = b, e[25] = x, e[26] = C) : C = e[26], C
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
        e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Q.jsx)(oe, {
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
                    children: [r, (0, Q.jsx)(Ke, {
                        className: `text-token-text-secondary text-sm`,
                        href: `/`,
                        children: (0, Q.jsx)(W, {
                            ...$.returnToChatgptLink
                        })
                    })]
                })]
            })
        }), e[3] = i) : i = e[3], i
    }, $ = ge({
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
//# sourceMappingURL=bfd5ba7b-hlicjytj5doc6nom.js.map