const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/33d473af-gqokcxok1csd1z99.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/0e2455cf-5y65kiuirs6pcl0x.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    Ant as r,
    BU as i,
    C4 as a,
    F7 as o,
    Grt as s,
    HU as c,
    Hst as l,
    JB as u,
    JT as d,
    Jnt as f,
    K as p,
    K4 as m,
    Ka as h,
    Knt as g,
    M1 as _,
    Mnt as v,
    O1 as y,
    Qnt as b,
    R1 as x,
    S4 as ee,
    Unt as S,
    W6 as C,
    Wa as te,
    X0 as w,
    Xnt as T,
    YT as E,
    Z as D,
    Z0 as O,
    Z1 as k,
    Znt as A,
    _st as j,
    aat as M,
    bnt as N,
    crt as P,
    dit as F,
    eat as ne,
    eit as I,
    gst as L,
    hst as R,
    i0 as z,
    jnt as B,
    jrt as V,
    nV as H,
    nct as re,
    q1 as ie,
    r0 as ae,
    rat as oe,
    sat as se,
    srt as ce,
    tat as le,
    vnt as U,
    yit as ue,
    z7 as de
} from "./4813494d-bo7e0c29ngt4zgx0.js";
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
    fGn as Be,
    fn as Ve,
    gn as He,
    hn as Ue,
    jrn as We,
    jsn as Ge,
    ksn as Ke,
    lan as K,
    ltt as qe,
    man as Je,
    nWn as Ye,
    pn as Xe,
    tWn as Ze,
    uln as Qe,
    um as $e,
    utt as et,
    win as tt
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Ch as nt,
    Fg as rt,
    Rg as it,
    kh as at
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    r as ot,
    t as st
} from "./ee0eeb85-ogu5n050pym7fbik.js";
import {
    i as ct,
    r as lt
} from "./58459bbe-g9gf8pqyyfogpldp.js";
import {
    a as ut,
    o as dt,
    t as q,
    y as ft
} from "./a4eef3c0-d9oj9m3kyhyxdtcw.js";
import {
    n as pt,
    r as mt,
    t as ht
} from "./97a55ca1-ob1vz7gjgz2uk2e8.js";
import {
    n as gt,
    t as _t
} from "./4cc06ac6-jqkqjbamrxfwaqjd.js";
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
} from "./a6f4f526-g2j0u2qwe8h9gmlj.js";

function Tt(e) {
    let t = _t(r.getItem(B.CheckoutConfirmLatencyPending), e);
    return t.status === `ready` && t.pending.is_checkout_modal_enabled === !0
}

function Et({
    checkoutId: e,
    checkoutPlanType: t,
    postCheckoutResult: n,
    processorEntity: i
}) {
    let a = r.getItem(B.CheckoutConfirmLatencyPending) ?? null;
    if (!a) return;
    let o = _t(a, e);
    if (o.status === `discard`) {
        r.removeItem(B.CheckoutConfirmLatencyPending);
        return
    }
    if (o.status === `other_checkout`) return;
    let {
        pending: s,
        durationMs: c
    } = o;
    return M.addAction(`checkout.confirm.latency_ms`, {
        duration_ms: c,
        requires_manual_approval: s.requires_manual_approval === !0,
        checkout_session_id: e ?? s.checkout_session_id,
        processor_entity: i ?? s.processor_entity,
        plan_type: t,
        result_type: n,
        measurement_point: `return_page`
    }), r.removeItem(B.CheckoutConfirmLatencyPending), {
        durationMs: c,
        checkoutSessionId: s.checkout_session_id
    }
}
var Dt = e((() => {
    gt(), se(), v()
}));

function Y(e) {
    ee(e, {
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
    hasExplicitCheckoutPlanType: i,
    isStudents2026Checkout: a = !1,
    intl: o,
    message: s,
    navigate: c,
    toaster: l
}) {
    if (l.warning(o.formatMessage(s), {
            duration: 5
        }), (a || yt(t)) && r.removeItem(B.CheckoutFrom), n.isPersonalAccount()) {
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
    let u = new URL(At(e, i), window.location.origin),
        d = Ge(t);
    d != null && (u.searchParams.set(Ie, d), u.searchParams.set(`mweb_fallback`, `1`)), c(`${u.pathname}${u.search}${u.hash}`)
}

function kt(e) {
    return Object.values(R).some(t => t === e)
}

function At(e, t) {
    return !t || !kt(e) || !K(e) || !T(Zt).get(Qt, !1) ? `/#pricing` : `/?cta_tab=personal&highlight_plan=${e}#pricing`
}

function jt({
    checkoutPlanType: e,
    eventId: t
}) {
    U.logValueEventWithStatsig({
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
    }), C(), ne.deleteCookie(oe.DogfoodingAccountType), e === R.PLUS && S.logEvent(`chatgpt_plus_payment_success_page`)
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
        P.error(t), M.addError(t instanceof Error ? t : Error(`Failed to replay pending image download after checkout`), {
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
    return n?.upsellContextId === `work` && kt(e) && K(e) && (t.checkout_kind == null || t.checkout_kind === m.Standard) ? n.threadId != null && n.sitePreview != null ? lt(n.threadId, n.sitePreview) : n.threadId == null ? `/?surface=work` : u(n.threadId) : n?.threadId == null || !kt(e) || !K(e) || t.checkout_kind != null && t.checkout_kind !== m.Standard || !f($t).get(nn, []).includes(n.upsellContextId) ? null : T(en).get(rn, !1) ? u(n.threadId) : null
}

function Ft({
    completion: e,
    checkoutFrom: t,
    checkoutPlanType: n,
    checkoutSessionId: i,
    currentAccount: a,
    defaultHomeRedirectUrl: o,
    hasExplicitCheckoutPlanType: c,
    intl: l,
    navigate: u,
    postCheckoutResult: d,
    queryClient: f,
    toaster: p
}) {
    if (`kind` in e && e.kind === m.CodexTeam) {
        ke(), ie(f, e.workspace_id).then(() => {
            u({
                pathname: nt,
                search: `?account_id=${e.workspace_id}`
            }, {
                replace: !0
            })
        }).catch(e => {
            P.error(e)
        });
        return
    }
    let h = d === `success` && (e.checkout_kind == null || e.checkout_kind === m.Standard) ? Ne(i) : null,
        g = tt(),
        v = d === `success` && kt(n) && K(n) && (e.checkout_kind == null || e.checkout_kind === m.Standard) ? Ge(i) : null,
        y = t == null ? Pt({
            checkoutPlanType: n,
            completion: e,
            context: g
        }) : null;
    if (ke(), e.entry_point === G.STUDENTS_2026) {
        let e = _() ?? a,
            t = e.isPersonalAccount() && e.normalizedAccountUserId != null && e.id === a.id && e.normalizedAccountUserId === a.normalizedAccountUserId ? J({
                checkoutSessionId: i,
                accountId: e.id,
                accountUserId: e.normalizedAccountUserId
            }) : null;
        if (d !== `success` || t == null || e.normalizedAccountUserId == null || !e.isPlus() || !e.hasPaidSubscription()) {
            X({
                checkoutPlanType: n,
                checkoutSessionId: i,
                currentAccount: e,
                hasExplicitCheckoutPlanType: c,
                isStudents2026Checkout: !0,
                intl: l,
                message: s.somethingWentWrong,
                navigate: u,
                toaster: p
            });
            return
        }
        let o = bt({
            checkoutSessionId: i,
            accountId: e.id,
            accountUserId: e.normalizedAccountUserId,
            status: `success`
        });
        if (o == null) {
            X({
                checkoutPlanType: n,
                checkoutSessionId: i,
                currentAccount: e,
                hasExplicitCheckoutPlanType: c,
                isStudents2026Checkout: !0,
                intl: l,
                message: s.somethingWentWrong,
                navigate: u,
                toaster: p
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
        let f = new URL(o, window.location.origin);
        f.searchParams.set(`refresh_account`, `true`), r.removeItem(B.CheckoutFrom), Y(`${f.pathname}${f.search}`)
    } else if (h != null) r.removeItem(B.CheckoutFrom), Y(Nt(h.returnPath));
    else if (v != null) {
        let e = new URL(v);
        e.searchParams.delete(je), e.searchParams.set(`refresh_account`, `true`), Ke(i), r.removeItem(B.CheckoutFrom), Y(e.href)
    } else t ? (r.removeItem(B.CheckoutFrom), Y(Nt(Ve[t]))) : y == null ? d === `success` && c && !(`kind` in e) && (e.checkout_kind == null || e.checkout_kind === m.Standard) && (n === R.PLUS || n === R.PROLITE || n === R.PRO || n === R.PROMAX) && t == null && g == null && T(tn).get(an, !1) ? Y(Nt(`/?surface=work`)) : (p.success(n === R.SCI ? l.formatMessage($.sciPaymentConfirmationToastMessage) : l.formatMessage($.paymentConfirmationToastMessage, {
        planType: n,
        planName: Le(n)
    }), {
        duration: 5
    }), o == null ? Y() : Y(o)) : Y(Nt(y))
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
    return r == null ? null : y(r).find(e => e.id === t) ?? null
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
    return t == null ? null : y(t).find(e => e.structure === L.PERSONAL && e.planType === R.PLUS && e.hasPaidSubscription()) ?? null
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
        return M.addError(e instanceof Error ? e : Error(`Failed to switch to personal Plus after cancellation`), {
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
            currentAccount: a,
            hasExplicitCheckoutPlanType: o,
            loaderData: u,
            sourceSearchParams: f
        } = e,
        h = De(),
        v = _e(),
        y = ge(),
        x = c(),
        ee = (0, Z.useRef)(!1),
        S = (0, Z.useRef)(null),
        C = (0, Z.useRef)(!1),
        [w, T] = (0, Z.useState)(null),
        E, D;
    t[0] !== a || t[1] !== w ? (E = () => {
        w != null && (a.id !== w.accountId || a.normalizedAccountUserId !== w.accountUserId) && w.onClose()
    }, D = [a, w], t[0] = a, t[1] = w, t[2] = E, t[3] = D) : (E = t[2], D = t[3]), (0, Z.useEffect)(E, D);
    let O;
    t[4] === u.checkout_id ? O = t[5] : (O = Tt(u.checkout_id), t[4] = u.checkout_id, t[5] = O);
    let k = O,
        A = u.postCheckoutResult === `success` && o && (i === R.PLUS || i === R.PROLITE || i === R.PRO || i === R.PROMAX) && !(`kind` in u.completion) && (u.completion.checkout_kind == null || u.completion.checkout_kind === m.Standard) ? i === R.PLUS ? p : ze : null,
        j;
    t[6] !== i || t[7] !== u.checkout_id ? (j = () => Ct({
        checkoutPlanType: i,
        checkoutSessionId: u.checkout_id
    }), t[6] = i, t[7] = u.checkout_id, t[8] = j) : j = t[8];
    let [N] = (0, Z.useState)(j), [P, F] = (0, Z.useState)(null), [I, L] = (0, Z.useState)(!1), z;
    t[9] !== h || t[10] !== y || t[11] !== x ? (z = async e => {
        L(!0);
        let t = await zt(y);
        if (t == null) return M.addError(Error(`Unable to verify personal Plus after checkout`), {
            source: `payments.success.business_cancel_to_plus`
        }), F({
            stage: `plus_unconfirmed`,
            handoff: e
        }), L(!1), !1;
        let n = await Rt(y, e.businessAccountId);
        if (n == null || !n.isSelfServeBusiness()) {
            M.addError(Error(`Unable to verify intended Business account after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            });
            let t = U.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return b(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
                unique_event_id: t
            } : void 0), F({
                stage: `business_cancellation_failed`,
                handoff: e
            }), L(!1), !1
        }
        let r = Bt(n);
        if (!r) {
            let t;
            try {
                await Ht(e.businessAccountId)
            } catch (e) {
                t = e
            }
            let n = await Rt(y, e.businessAccountId);
            r = n?.isSelfServeBusiness() === !0 && Bt(n), r || M.addError(t instanceof Error ? t : Error(`Unable to confirm Business cancellation after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            })
        }
        if (!r) {
            let t = U.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return b(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
                unique_event_id: t
            } : void 0), F({
                stage: `business_cancellation_failed`,
                handoff: e
            }), L(!1), !1
        }
        let i = U.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
            step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_SUCCEEDED`,
            legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_succeeded`
        });
        return b(`chatgpt_business_cancel_to_plus_business_cancellation_succeeded`, void 0, i ? {
            unique_event_id: i
        } : void 0), await Promise.all([q(), g()]), await Vt(y, t.id) ? (wt(), F(null), x.success(h.formatMessage($.businessCancelToPlusSuccessMessage), {
            duration: 5
        }), L(!1), Y(), !0) : (F({
            stage: `personal_switch_failed`,
            handoff: e
        }), L(!1), !1)
    }, t[9] = h, t[10] = y, t[11] = x, t[12] = z) : z = t[12];
    let B = z,
        V;
    t[13] !== r || t[14] !== i || t[15] !== B || t[16] !== a || t[17] !== A || t[18] !== o || t[19] !== h || t[20] !== k || t[21] !== u.checkout_id || t[22] !== u.completion || t[23] !== u.postCheckoutResult || t[24] !== u.processor_entity || t[25] !== N || t[26] !== v || t[27] !== y || t[28] !== f || t[29] !== x || t[30] !== w ? (V = () => {
        if (w != null) return;
        let e = !1,
            t = pt(u.checkout_id, a),
            c = yt(u.checkout_id),
            d = a.isPersonalAccount() && a.normalizedAccountUserId != null && J({
                checkoutSessionId: u.checkout_id,
                accountId: a.id,
                accountUserId: a.normalizedAccountUserId
            }) != null,
            p = u.postCheckoutResult === `success` && !(`kind` in u.completion) && u.completion.entry_point === G.STUDENTS_2026,
            g = r === Xe.STUDENTS && o && i === R.PLUS,
            te = c || p || g,
            E = u.postCheckoutResult === `success` && !(`kind` in u.completion) && (u.completion.checkout_kind == null || u.completion.checkout_kind === m.Standard) && (c || p || u.completion.entry_point == null && g),
            D = () => {
                if (ee.current) return;
                ee.current = !0;
                let e = U.logStructuredEvent(`ChatgptCheckoutPaymentSuccessPage`, {
                    checkoutPlanType: i,
                    checkoutId: u.checkout_id,
                    processorEntity: u.processor_entity ?? void 0,
                    isCheckoutModalEnabled: k,
                    ...u.postCheckoutResult === `success` && u.completion.checkout_kind != null ? {
                        checkoutKind: u.completion.checkout_kind,
                        entryPoint: u.completion.entry_point ?? void 0
                    } : {}
                });
                u.postCheckoutResult === `success` && et({
                    currentAccount: a,
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
        let O = () => (S.current?.checkoutId !== u.checkout_id && (S.current = {
                checkoutId: u.checkout_id,
                pending: ue({
                    reason: `checkout_success`,
                    path: `/payments/success`
                }).catch(Wt)
            }), S.current.pending),
            j = () => {
                (async () => {
                    if (u.postCheckoutResult !== `success`) return;
                    if (`kind` in u.completion && u.completion.kind === m.CodexTeam) {
                        Ft({
                            completion: u.completion,
                            checkoutFrom: r,
                            checkoutPlanType: i,
                            checkoutSessionId: u.checkout_id,
                            currentAccount: a,
                            defaultHomeRedirectUrl: A,
                            hasExplicitCheckoutPlanType: o,
                            intl: h,
                            navigate: v,
                            postCheckoutResult: u.postCheckoutResult,
                            queryClient: y,
                            toaster: x
                        });
                        return
                    }
                    if (N != null) {
                        if (await O(), e) return;
                        if (!C.current) {
                            C.current = !0;
                            let e = U.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                            });
                            b(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
                                unique_event_id: e
                            } : void 0), await B(N)
                        }
                        return
                    }
                    let c = a,
                        p = E && (!a.isPlus() || !a.hasPaidSubscription());
                    if (a.isFree() || p || t) {
                        if (c = E && d || t ? await Lt({
                                isProvisioned: t ? Ot : void 0,
                                checkoutAccount: a,
                                isCancelled: () => e,
                                queryClient: y
                            }) : await It(y), e) return;
                        (!c || c.isFree()) && (dt({
                            checkoutSessionId: u.checkout_id,
                            checkoutPlanType: i,
                            processorEntity: u.processor_entity ?? void 0,
                            isCheckoutModalEnabled: k,
                            checkoutKind: u.completion.checkout_kind ?? void 0,
                            entryPoint: u.completion.entry_point ?? void 0,
                            sourceSearchParams: f,
                            accessStage: `personal_account_refresh`,
                            failureReason: c == null ? `account_status_missing` : `account_still_free`
                        }), y.invalidateQueries(n()))
                    }
                    if (await O(), e || (await Mt({
                            hasPaidSubscription: c?.hasPaidSubscription() ?? !1,
                            intl: h,
                            queryClient: y
                        }), e)) return;
                    if (E) {
                        let e = a.isFree() || p ? c : _() ?? a;
                        if (!((e != null && e.isPersonalAccount() && e.normalizedAccountUserId != null ? J({
                                checkoutSessionId: u.checkout_id,
                                accountId: e.id,
                                accountUserId: e.normalizedAccountUserId
                            }) : null) != null && e != null && e.isPersonalAccount() && e.isPlus() && e.hasPaidSubscription() && e.id === a.id && e.normalizedAccountUserId != null && e.normalizedAccountUserId === a.normalizedAccountUserId)) {
                            ft(`payments_success`, {
                                checkoutPlanType: i,
                                checkoutId: u.checkout_id,
                                processorEntity: u.processor_entity ?? void 0,
                                isCheckoutModalEnabled: k,
                                checkoutKind: u.completion.checkout_kind ?? void 0,
                                entryPoint: G.STUDENTS_2026,
                                outcome: `other_error`
                            }, f), X({
                                checkoutPlanType: i,
                                checkoutSessionId: u.checkout_id,
                                currentAccount: a,
                                hasExplicitCheckoutPlanType: o,
                                isStudents2026Checkout: !0,
                                intl: h,
                                message: s.somethingWentWrong,
                                navigate: v,
                                toaster: x
                            });
                            return
                        }
                        D()
                    }
                    if (await q(), e) return;
                    let g = e => {
                        let t = e === void 0 ? A : e;
                        Ft({
                            completion: E ? {
                                ...u.completion,
                                entry_point: G.STUDENTS_2026
                            } : u.completion,
                            checkoutFrom: r,
                            checkoutPlanType: i,
                            checkoutSessionId: u.checkout_id,
                            currentAccount: a,
                            defaultHomeRedirectUrl: t,
                            hasExplicitCheckoutPlanType: o,
                            intl: h,
                            navigate: v,
                            postCheckoutResult: u.postCheckoutResult,
                            queryClient: y,
                            toaster: x
                        })
                    };
                    if (t) {
                        ht(u.checkout_id);
                        let e = _(),
                            t = e?.data.subscriptionStatus.discount;
                        if (e != null && c != null && e.id === a.id && e.normalizedAccountUserId === a.normalizedAccountUserId && Ot(c) && Ot(e) && t?.promo_campaign_id === `plus-1-month-free` && t.discount_type === l.PERCENTAGE && t.amount === 100 && t.duration_num_periods === 1 && c.id === a.id && c.normalizedAccountUserId === a.normalizedAccountUserId && i === R.PLUS && (u.completion.checkout_kind == null || u.completion.checkout_kind === m.Standard)) {
                            T({
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
            M = () => {
                q().finally(() => {
                    e || j()
                })
            },
            P = () => {
                (async () => {
                    if (N != null) {
                        let t = await zt(y);
                        if (e) return;
                        if (t != null) {
                            if (!C.current) {
                                C.current = !0;
                                let e = U.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                    step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                    legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                                });
                                b(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
                                    unique_event_id: e
                                } : void 0), await B(N)
                            }
                            return
                        }
                        F({
                            stage: `plus_unconfirmed`,
                            handoff: N
                        });
                        return
                    }
                    let t = a.isFree() ? await It(y) : a;
                    if (!e) {
                        if (t && !t.isFree()) {
                            if (D(), await O(), e || (await Mt({
                                    hasPaidSubscription: t.hasPaidSubscription(),
                                    intl: h,
                                    queryClient: y
                                }), await q(), e)) return;
                            Ft({
                                completion: Yt,
                                checkoutFrom: r,
                                checkoutPlanType: i,
                                checkoutSessionId: u.checkout_id,
                                currentAccount: a,
                                defaultHomeRedirectUrl: A,
                                hasExplicitCheckoutPlanType: o,
                                intl: h,
                                navigate: v,
                                postCheckoutResult: u.postCheckoutResult,
                                queryClient: y,
                                toaster: x
                            });
                            return
                        }
                        X({
                            checkoutPlanType: i,
                            checkoutSessionId: u.checkout_id,
                            currentAccount: a,
                            hasExplicitCheckoutPlanType: o,
                            intl: h,
                            toaster: x,
                            navigate: v,
                            message: s.somethingWentWrong
                        })
                    }
                })()
            };
        if (u.postCheckoutResult === `user_mismatch`) return () => {
            e = !0
        };
        if (N == null && te && u.postCheckoutResult !== `success`) return X({
            checkoutPlanType: i,
            checkoutSessionId: u.checkout_id,
            currentAccount: a,
            hasExplicitCheckoutPlanType: o,
            isStudents2026Checkout: !0,
            intl: h,
            toaster: x,
            navigate: v,
            message: u.postCheckoutResult === `payment_failed` ? $.paymentFailedToastMessage : s.somethingWentWrong
        }), () => {
            e = !0
        };
        u.postCheckoutResult !== `success` && ht(u.checkout_id);
        bb533: switch (u.postCheckoutResult) {
            case `success`:
                E ? ne.deleteCookie(oe.DogfoodingAccountType) : D(), M();
                break bb533;
            case `payment_failed`:
                if (N != null) {
                    window.location.href = St();
                    break bb533
                }
                X({
                    checkoutPlanType: i,
                    checkoutSessionId: u.checkout_id,
                    currentAccount: a,
                    hasExplicitCheckoutPlanType: o,
                    intl: h,
                    toaster: x,
                    navigate: v,
                    message: $.paymentFailedToastMessage
                });
                break bb533;
            case `other_error`:
                P()
        }
        return () => {
            e = !0
        }
    }, t[13] = r, t[14] = i, t[15] = B, t[16] = a, t[17] = A, t[18] = o, t[19] = h, t[20] = k, t[21] = u.checkout_id, t[22] = u.completion, t[23] = u.postCheckoutResult, t[24] = u.processor_entity, t[25] = N, t[26] = v, t[27] = y, t[28] = f, t[29] = x, t[30] = w, t[31] = V) : V = t[31];
    let H;
    if (t[32] !== r || t[33] !== i || t[34] !== B || t[35] !== a || t[36] !== A || t[37] !== o || t[38] !== h || t[39] !== k || t[40] !== u || t[41] !== N || t[42] !== v || t[43] !== y || t[44] !== f || t[45] !== x || t[46] !== w ? (H = [r, i, B, w, a, A, o, h, k, u, N, v, y, f, x], t[32] = r, t[33] = i, t[34] = B, t[35] = a, t[36] = A, t[37] = o, t[38] = h, t[39] = k, t[40] = u, t[41] = N, t[42] = v, t[43] = y, t[44] = f, t[45] = x, t[46] = w, t[47] = H) : H = t[47], (0, Z.useEffect)(V, H), u.postCheckoutResult === `user_mismatch`) {
        let e;
        return t[48] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(sn, {}), t[48] = e) : e = t[48], e
    }
    if (w != null) {
        let e = a.id === w.accountId && a.normalizedAccountUserId === w.accountUserId,
            n;
        t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (n = {}, t[49] = n) : n = t[49];
        let r;
        return t[50] !== e || t[51] !== w.onClose ? (r = (0, Q.jsx)(te, {
            for: qt,
            open: e,
            onClose: w.onClose,
            withProps: n
        }), t[50] = e, t[51] = w.onClose, t[52] = r) : r = t[52], r
    }
    if (P != null) {
        let e = P.stage === `plus_unconfirmed`,
            n = P.stage === `personal_switch_failed`,
            r;
        t[53] !== h || t[54] !== n || t[55] !== e ? (r = h.formatMessage(e ? $.plusConfirmationRecoveryTitle : n ? $.personalPlusSwitchRecoveryTitle : $.businessCancellationRecoveryTitle), t[53] = h, t[54] = n, t[55] = e, t[56] = r) : r = t[56];
        let i;
        t[57] === r ? i = t[58] : (i = (0, Q.jsx)(`h1`, {
            className: `text-token-text-primary text-xl font-semibold`,
            children: r
        }), t[57] = r, t[58] = i);
        let a;
        t[59] !== h || t[60] !== n || t[61] !== e ? (a = h.formatMessage(e ? $.plusConfirmationRecoveryBody : n ? $.personalPlusSwitchRecoveryBody : $.businessCancellationRecoveryBody), t[59] = h, t[60] = n, t[61] = e, t[62] = a) : a = t[62];
        let o;
        t[63] === a ? o = t[64] : (o = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary text-sm leading-6`,
            children: a
        }), t[63] = a, t[64] = o);
        let s;
        t[65] !== P.handoff || t[66] !== B ? (s = () => {
            b(`chatgpt_business_cancel_to_plus_business_cancellation_retry_clicked`), B(P.handoff)
        }, t[65] = P.handoff, t[66] = B, t[67] = s) : s = t[67];
        let c;
        t[68] !== h || t[69] !== n || t[70] !== e ? (c = h.formatMessage(e ? $.retryPlusConfirmationButton : n ? $.retryPersonalPlusSwitchButton : $.retryBusinessCancellationButton), t[68] = h, t[69] = n, t[70] = e, t[71] = c) : c = t[71];
        let l;
        t[72] !== I || t[73] !== s || t[74] !== c ? (l = (0, Q.jsx)(d, {
            color: `primary`,
            loading: I,
            onClick: s,
            children: c
        }), t[72] = I, t[73] = s, t[74] = c, t[75] = l) : l = t[75];
        let u;
        t[76] === Symbol.for(`react.memo_cache_sentinel`) ? (u = St(), t[76] = u) : u = t[76];
        let f;
        t[77] === h ? f = t[78] : (f = h.formatMessage($.manageBusinessSubscriptionLink), t[77] = h, t[78] = f);
        let p;
        t[79] === f ? p = t[80] : (p = (0, Q.jsx)(Ze, {
            className: `text-token-text-secondary text-sm`,
            href: u,
            children: f
        }), t[79] = f, t[80] = p);
        let m;
        t[81] !== l || t[82] !== p ? (m = (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-3`,
            children: [l, p]
        }), t[81] = l, t[82] = p, t[83] = m) : m = t[83];
        let g;
        return t[84] !== o || t[85] !== m || t[86] !== i ? (g = (0, Q.jsx)(`div`, {
            className: `flex min-h-screen items-center justify-center px-6 py-12`,
            children: (0, Q.jsxs)(`div`, {
                className: `border-token-border-default bg-token-bg-primary flex w-full max-w-md flex-col gap-5 rounded-2xl border p-6 text-center shadow-lg`,
                children: [i, o, m]
            })
        }), t[84] = o, t[85] = m, t[86] = i, t[87] = g) : g = t[87], g
    }
    return null
}

function Wt(e) {
    P.error(e), M.addError(e instanceof Error ? e : Error(`Failed to update workspace token after checkout`), {
        source: `payments.success`
    })
}

function Gt() {
    z({
        fallbackScreenHint: `login`,
        useFallbackScreenHint: !0,
        skipLoginModal: !0
    })
}
var Kt, Z, Q, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, $, cn = e((() => {
    ve(), Kt = Ee(), h(), mt(), O(), Oe(), re(), E(), xt(), Dt(), Qe(), Re(), ut(), Je(), Be(), Fe(), Pe(), at(), Ue(), I(), Ye(), ct(), st(), D(), $e(), qe(), We(), x(), ae(), rt(), vt(), i(), F(), N(), Ae(), le(), se(), v(), ce(), a(), de(), A(), H(), Te(), Me(), Z = t(be()), ye(), Q = pe(), we(), qt = w(() => Se(() => import(`./33d473af-gqokcxok1csd1z99.js`).then(e => e.NoPaymentPlusTrialExtensionAcknowledgement), __vite__mapDeps([0, 1, 2, 3, 4, 5]))), Jt = function(e) {
        return e.Success = `success`, e.PaymentFailed = `payment_failed`, e.UserMismatch = `user_mismatch`, e.OtherError = `other_error`, e
    }({}), Yt = {
        success: !0
    }, Xt = [50, 100, 200, 400, 800, 1600, 3200, 3650], Zt = `2160290604`, Qt = `personal_checkout_failure_plan_recovery_enabled`, $t = `548821362`, en = `1549629729`, tn = `3507623755`, nn = `eligible_upsell_context_ids`, rn = `return_to_thread_enabled`, an = `drop_into_work_after_upgrade`, on = me(function() {
        "use forget";
        let e = (0, Kt.c)(27),
            [t] = xe(),
            n = fe(),
            i = r.getItem(B.CheckoutFrom),
            a = k(),
            o = Ce(),
            s;
        e[0] === t ? s = e[1] : (s = t.get(`plan_type`), e[0] = t, e[1] = s);
        let c = s,
            l = c ?? R.PLUS,
            u;
        e[2] === o.checkout_id ? u = e[3] : (u = Tt(o.checkout_id), e[2] = o.checkout_id, e[3] = u);
        let d = u,
            f;
        e[4] !== a || e[5] !== o.checkout_id ? (f = a?.isPersonalAccount() === !0 && typeof a.normalizedAccountUserId == `string` && J({
            checkoutSessionId: o.checkout_id,
            accountId: a.id,
            accountUserId: a.normalizedAccountUserId
        }) != null, e[4] = a, e[5] = o.checkout_id, e[6] = f) : f = e[6];
        let p = f,
            m;
        e[7] !== o.checkout_id || e[8] !== n.search ? (m = new URLSearchParams(n.search), V(o.checkout_id, m), e[7] = o.checkout_id, e[8] = n.search, e[9] = m) : m = e[9];
        let h = m,
            g, _;
        if (e[10] !== l || e[11] !== p || e[12] !== d || e[13] !== o.checkout_id || e[14] !== o.postCheckoutResult || e[15] !== o.processor_entity || e[16] !== h ? (g = () => {
                let e = o.checkout_id,
                    t = o.processor_entity ?? void 0;
                o.postCheckoutResult !== `success` && ft(`payments_success`, {
                    checkoutPlanType: l,
                    checkoutId: e,
                    processorEntity: t,
                    isCheckoutModalEnabled: d,
                    ...p ? {
                        entryPoint: G.STUDENTS_2026
                    } : {},
                    outcome: o.postCheckoutResult === `payment_failed` ? `payment_failed` : o.postCheckoutResult === `user_mismatch` ? `user_mismatch` : `other_error`
                }, h)
            }, _ = [l, p, d, o.checkout_id, o.processor_entity, o.postCheckoutResult, h], e[10] = l, e[11] = p, e[12] = d, e[13] = o.checkout_id, e[14] = o.postCheckoutResult, e[15] = o.processor_entity, e[16] = h, e[17] = g, e[18] = _) : (g = e[17], _ = e[18]), (0, Z.useEffect)(g, _), !a) return null;
        let v = Ut,
            y = He(i) ? i : null,
            b = c != null,
            x;
        return e[19] !== v || e[20] !== l || e[21] !== a || e[22] !== o || e[23] !== h || e[24] !== y || e[25] !== b ? (x = (0, Q.jsx)(v, {
            checkoutFrom: y,
            checkoutPlanType: l,
            currentAccount: a,
            hasExplicitCheckoutPlanType: b,
            loaderData: o,
            sourceSearchParams: h
        }), e[19] = v, e[20] = l, e[21] = a, e[22] = o, e[23] = h, e[24] = y, e[25] = b, e[26] = x) : x = e[26], x
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
        e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Q.jsx)(d, {
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
                    children: [r, (0, Q.jsx)(Ze, {
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
//# sourceMappingURL=bfd5ba7b-i6vc13x6di9c613p.js.map