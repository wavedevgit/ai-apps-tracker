const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/33d473af-md6hqols0ofvphis.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-t80q9ew944ej0mgk.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/0e2455cf-5y65kiuirs6pcl0x.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Cat as r,
    Crt as i,
    Dit as a,
    Fit as o,
    Ga as s,
    Int as c,
    J7 as l,
    Jnt as u,
    K as d,
    Knt as f,
    L1 as p,
    LU as m,
    Mst as h,
    N4 as g,
    Nst as _,
    P4 as v,
    Pnt as y,
    Q7 as b,
    V1 as x,
    Z as ee,
    _at as S,
    a2 as C,
    art as w,
    crt as te,
    eE as T,
    f0 as E,
    frt as D,
    gat as ne,
    git as O,
    ict as re,
    jst as k,
    lV as A,
    mrt as j,
    n0 as M,
    o0 as N,
    o2 as P,
    p0 as F,
    prt as I,
    q1 as L,
    qa as R,
    qnt as z,
    qrt as ie,
    r3 as B,
    r8 as ae,
    sit as V,
    tV as oe,
    urt as se,
    vct as ce,
    wrt as le,
    xat as H,
    yat as ue,
    z1 as U,
    zU as de
} from "./4813494d-t80q9ew944ej0mgk.js";
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
    Asn as Oe,
    Drn as ke,
    Dsn as Ae,
    F2t as je,
    Ian as Me,
    Man as Ne,
    Msn as Pe,
    Osn as Fe,
    P2t as Ie,
    Sin as Le,
    Tsn as Re,
    aan as G,
    bin as ze,
    cm as Be,
    fn as Ve,
    gn as He,
    hn as Ue,
    ian as We,
    jsn as Ge,
    kGn as Ke,
    ntt as qe,
    oln as Je,
    pn as Ye,
    rtt as Xe,
    sln as K,
    uan as Ze,
    um as Qe,
    vWn as $e,
    yWn as et,
    yin as tt
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Dh as nt,
    Hg as rt,
    Nh as it,
    zg as at
} from "./c2675c8c-p3x4d0bnf7e77o1n.js";
import {
    r as ot,
    t as st
} from "./ee0eeb85-orfgyajspai4e567.js";
import {
    i as ct,
    r as lt
} from "./58459bbe-blvyewhl7vsttsvb.js";
import {
    a as ut,
    o as dt,
    t as q,
    y as ft
} from "./a4eef3c0-kivpfxu5tzg16aqr.js";
import {
    n as pt,
    r as mt,
    t as ht
} from "./97a55ca1-ob1vz7gjgz2uk2e8.js";
import {
    n as gt,
    t as _t
} from "./4cc06ac6-hlwg8bcmmuv0llar.js";
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
} from "./a6f4f526-g6kf8zgg514egr3i.js";

function Tt(e) {
    let t = _t(f.getItem(z.CheckoutConfirmLatencyPending), e);
    return t.status === `ready` && t.pending.is_checkout_modal_enabled === !0
}

function Et({
    checkoutId: e,
    checkoutPlanType: t,
    postCheckoutResult: n,
    processorEntity: r
}) {
    let i = f.getItem(z.CheckoutConfirmLatencyPending) ?? null;
    if (!i) return;
    let a = _t(i, e);
    if (a.status === `discard`) {
        f.removeItem(z.CheckoutConfirmLatencyPending);
        return
    }
    if (a.status === `other_checkout`) return;
    let {
        pending: o,
        durationMs: s
    } = a;
    return H.addAction(`checkout.confirm.latency_ms`, {
        duration_ms: s,
        requires_manual_approval: o.requires_manual_approval === !0,
        checkout_session_id: e ?? o.checkout_session_id,
        processor_entity: r ?? o.processor_entity,
        plan_type: t,
        result_type: n,
        measurement_point: `return_page`
    }), f.removeItem(z.CheckoutConfirmLatencyPending), {
        durationMs: s,
        checkoutSessionId: o.checkout_session_id
    }
}
var Dt = e((() => {
    gt(), r(), u()
}));

function Y(e) {
    g(e, {
        sessionChanged: !1
    })
}

function Ot(e) {
    return e.isPersonalAccount() && e.isPlus() && e.hasPaidSubscription() && !e.isActiveSubscriptionGratis() && e.data.subscriptionStatus.subscriptionPlan === _.PLUS
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
        }), (i || yt(t)) && f.removeItem(z.CheckoutFrom), n.isPersonalAccount()) {
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
        u = Ae(t);
    u != null && (l.searchParams.set(Oe, u), l.searchParams.set(`mweb_fallback`, `1`)), s(`${l.pathname}${l.search}${l.hash}`)
}

function kt(e) {
    return Object.values(k).some(t => t === e)
}

function At(e, t) {
    return !t || !kt(e) || !G(e) || !D(Zt).get(Qt, !1) ? `/#pricing` : `/?cta_tab=personal&highlight_plan=${e}#pricing`
}

function jt({
    checkoutPlanType: e,
    eventId: t
}) {
    y.logValueEventWithStatsig({
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
    }), ae(), ne.deleteCookie(ue.DogfoodingAccountType), e === k.PLUS && w.logEvent(`chatgpt_plus_payment_success_page`)
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
        le.error(t), H.addError(t instanceof Error ? t : Error(`Failed to replay pending image download after checkout`), {
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
    return n?.upsellContextId === `work` && kt(e) && G(e) && (t.checkout_kind == null || t.checkout_kind === B.Standard) ? n.threadId != null && n.sitePreview != null ? lt(n.threadId, n.sitePreview) : n.threadId == null ? `/?surface=work` : oe(n.threadId) : n?.threadId == null || !kt(e) || !G(e) || t.checkout_kind != null && t.checkout_kind !== B.Standard || !se($t).get(nn, []).includes(n.upsellContextId) ? null : D(en).get(rn, !1) ? oe(n.threadId) : null
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
    if (`kind` in e && e.kind === B.CodexTeam) {
        tt(), M(u, e.workspace_id).then(() => {
            c({
                pathname: nt,
                search: `?account_id=${e.workspace_id}`
            }, {
                replace: !0
            })
        }).catch(e => {
            le.error(e)
        });
        return
    }
    let p = l === `success` && (e.checkout_kind == null || e.checkout_kind === B.Standard) ? Ne(r) : null,
        m = ze(),
        h = l === `success` && kt(n) && G(n) && (e.checkout_kind == null || e.checkout_kind === B.Standard) ? Ae(r) : null,
        g = t == null ? Pt({
            checkoutPlanType: n,
            completion: e,
            context: m
        }) : null;
    if (tt(), e.entry_point === K.STUDENTS_2026) {
        let e = x() ?? i,
            t = e.isPersonalAccount() && e.normalizedAccountUserId != null && e.id === i.id && e.normalizedAccountUserId === i.normalizedAccountUserId ? J({
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
                message: V.somethingWentWrong,
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
                message: V.somethingWentWrong,
                navigate: c,
                toaster: d
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
        let u = new URL(a, window.location.origin);
        u.searchParams.set(`refresh_account`, `true`), f.removeItem(z.CheckoutFrom), Y(`${u.pathname}${u.search}`)
    } else if (p != null) f.removeItem(z.CheckoutFrom), Y(Nt(p.returnPath));
    else if (h != null) {
        let e = new URL(h);
        e.searchParams.delete(Ge), e.searchParams.set(`refresh_account`, `true`), Re(r), f.removeItem(z.CheckoutFrom), Y(e.href)
    } else t ? (f.removeItem(z.CheckoutFrom), Y(Nt(Ve[t]))) : g == null ? l === `success` && o && !(`kind` in e) && (e.checkout_kind == null || e.checkout_kind === B.Standard) && (n === k.PLUS || n === k.PROLITE || n === k.PRO || n === k.PROMAX) && t == null && m == null && D(tn).get(an, !1) ? Y(Nt(`/?surface=work`)) : (d.success(n === k.SCI ? s.formatMessage($.sciPaymentConfirmationToastMessage) : s.formatMessage($.paymentConfirmationToastMessage, {
        planType: n,
        planName: Ie(n)
    }), {
        duration: 5
    }), a == null ? Y() : Y(a)) : Y(Nt(g))
}
async function It(e) {
    try {
        await e.refetchQueries({
            queryKey: U().queryKey
        })
    } catch {
        return null
    }
    return x()
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
    return n == null ? null : p(n).find(e => e.id === t) ?? null
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
    return t == null ? null : p(t).find(e => e.structure === h.PERSONAL && e.planType === k.PLUS && e.hasPaidSubscription()) ?? null
}

function Bt(e) {
    return e.willDeactivateAtTermEnd() || e.isDeactivated()
}
async function Vt(e, t) {
    try {
        let {
            updatedAccount: n
        } = await M(e, t);
        return n
    } catch (e) {
        return H.addError(e instanceof Error ? e : Error(`Failed to switch to personal Plus after cancellation`), {
            source: `payments.success.business_cancel_to_plus`
        }), !1
    }
}
async function Ht(e) {
    await l.safePost(`/subscriptions/cancel`, {
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
            hasExplicitCheckoutPlanType: c,
            loaderData: l,
            sourceSearchParams: u
        } = e,
        f = De(),
        p = _e(),
        m = ge(),
        h = de(),
        g = (0, Z.useRef)(!1),
        _ = (0, Z.useRef)(null),
        v = (0, Z.useRef)(!1),
        [b, ee] = (0, Z.useState)(null),
        S, C;
    t[0] !== a || t[1] !== b ? (S = () => {
        b != null && (a.id !== b.accountId || a.normalizedAccountUserId !== b.accountUserId) && b.onClose()
    }, C = [a, b], t[0] = a, t[1] = b, t[2] = S, t[3] = C) : (S = t[2], C = t[3]), (0, Z.useEffect)(S, C);
    let w;
    t[4] === l.checkout_id ? w = t[5] : (w = Tt(l.checkout_id), t[4] = l.checkout_id, t[5] = w);
    let T = w,
        E = l.postCheckoutResult === `success` && c && (i === k.PLUS || i === k.PROLITE || i === k.PRO || i === k.PROMAX) && !(`kind` in l.completion) && (l.completion.checkout_kind == null || l.completion.checkout_kind === B.Standard) ? i === k.PLUS ? d : Be : null,
        D;
    t[6] !== i || t[7] !== l.checkout_id ? (D = () => Ct({
        checkoutPlanType: i,
        checkoutSessionId: l.checkout_id
    }), t[6] = i, t[7] = l.checkout_id, t[8] = D) : D = t[8];
    let [O] = (0, Z.useState)(D), [A, M] = (0, Z.useState)(null), [N, P] = (0, Z.useState)(!1), F;
    t[9] !== f || t[10] !== m || t[11] !== h ? (F = async e => {
        P(!0);
        let t = await zt(m);
        if (t == null) return H.addError(Error(`Unable to verify personal Plus after checkout`), {
            source: `payments.success.business_cancel_to_plus`
        }), M({
            stage: `plus_unconfirmed`,
            handoff: e
        }), P(!1), !1;
        let n = await Rt(m, e.businessAccountId);
        if (n == null || !n.isSelfServeBusiness()) {
            H.addError(Error(`Unable to verify intended Business account after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            });
            let t = y.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return j(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
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
            let n = await Rt(m, e.businessAccountId);
            r = n?.isSelfServeBusiness() === !0 && Bt(n), r || H.addError(t instanceof Error ? t : Error(`Unable to confirm Business cancellation after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            })
        }
        if (!r) {
            let t = y.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return j(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
                unique_event_id: t
            } : void 0), M({
                stage: `business_cancellation_failed`,
                handoff: e
            }), P(!1), !1
        }
        let i = y.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
            step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_SUCCEEDED`,
            legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_succeeded`
        });
        return j(`chatgpt_business_cancel_to_plus_business_cancellation_succeeded`, void 0, i ? {
            unique_event_id: i
        } : void 0), await Promise.all([q(), te()]), await Vt(m, t.id) ? (wt(), M(null), h.success(f.formatMessage($.businessCancelToPlusSuccessMessage), {
            duration: 5
        }), P(!1), Y(), !0) : (M({
            stage: `personal_switch_failed`,
            handoff: e
        }), P(!1), !1)
    }, t[9] = f, t[10] = m, t[11] = h, t[12] = F) : F = t[12];
    let I = F,
        L;
    t[13] !== r || t[14] !== i || t[15] !== I || t[16] !== a || t[17] !== E || t[18] !== c || t[19] !== f || t[20] !== T || t[21] !== l.checkout_id || t[22] !== l.completion || t[23] !== l.postCheckoutResult || t[24] !== l.processor_entity || t[25] !== O || t[26] !== p || t[27] !== m || t[28] !== u || t[29] !== h || t[30] !== b ? (L = () => {
        if (b != null) return;
        let e = !1,
            t = pt(l.checkout_id, a),
            n = yt(l.checkout_id),
            s = a.isPersonalAccount() && a.normalizedAccountUserId != null && J({
                checkoutSessionId: l.checkout_id,
                accountId: a.id,
                accountUserId: a.normalizedAccountUserId
            }) != null,
            d = l.postCheckoutResult === `success` && !(`kind` in l.completion) && l.completion.entry_point === K.STUDENTS_2026,
            S = r === Ye.STUDENTS && c && i === k.PLUS,
            C = n || d || S,
            w = l.postCheckoutResult === `success` && !(`kind` in l.completion) && (l.completion.checkout_kind == null || l.completion.checkout_kind === B.Standard) && (n || d || l.completion.entry_point == null && S),
            te = () => {
                if (g.current) return;
                g.current = !0;
                let e = y.logStructuredEvent(`ChatgptCheckoutPaymentSuccessPage`, {
                    checkoutPlanType: i,
                    checkoutId: l.checkout_id,
                    processorEntity: l.processor_entity ?? void 0,
                    isCheckoutModalEnabled: T,
                    ...l.postCheckoutResult === `success` && l.completion.checkout_kind != null ? {
                        checkoutKind: l.completion.checkout_kind,
                        entryPoint: l.completion.entry_point ?? void 0
                    } : {}
                });
                l.postCheckoutResult === `success` && Xe({
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
        let D = () => (_.current?.checkoutId !== l.checkout_id && (_.current = {
                checkoutId: l.checkout_id,
                pending: o({
                    reason: `checkout_success`,
                    path: `/payments/success`
                }).catch(Wt)
            }), _.current.pending),
            A = () => {
                (async () => {
                    if (l.postCheckoutResult !== `success`) return;
                    if (`kind` in l.completion && l.completion.kind === B.CodexTeam) {
                        Ft({
                            completion: l.completion,
                            checkoutFrom: r,
                            checkoutPlanType: i,
                            checkoutSessionId: l.checkout_id,
                            currentAccount: a,
                            defaultHomeRedirectUrl: E,
                            hasExplicitCheckoutPlanType: c,
                            intl: f,
                            navigate: p,
                            postCheckoutResult: l.postCheckoutResult,
                            queryClient: m,
                            toaster: h
                        });
                        return
                    }
                    if (O != null) {
                        if (await D(), e) return;
                        if (!v.current) {
                            v.current = !0;
                            let e = y.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                            });
                            j(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
                                unique_event_id: e
                            } : void 0), await I(O)
                        }
                        return
                    }
                    let n = a,
                        o = w && (!a.isPlus() || !a.hasPaidSubscription());
                    if (a.isFree() || o || t) {
                        if (n = w && s || t ? await Lt({
                                isProvisioned: t ? Ot : void 0,
                                checkoutAccount: a,
                                isCancelled: () => e,
                                queryClient: m
                            }) : await It(m), e) return;
                        (!n || n.isFree()) && (dt({
                            checkoutSessionId: l.checkout_id,
                            checkoutPlanType: i,
                            processorEntity: l.processor_entity ?? void 0,
                            isCheckoutModalEnabled: T,
                            checkoutKind: l.completion.checkout_kind ?? void 0,
                            entryPoint: l.completion.entry_point ?? void 0,
                            sourceSearchParams: u,
                            accessStage: `personal_account_refresh`,
                            failureReason: n == null ? `account_status_missing` : `account_still_free`
                        }), m.invalidateQueries(U()))
                    }
                    if (await D(), e || (await Mt({
                            hasPaidSubscription: n?.hasPaidSubscription() ?? !1,
                            intl: f,
                            queryClient: m
                        }), e)) return;
                    if (w) {
                        let e = a.isFree() || o ? n : x() ?? a;
                        if (!((e != null && e.isPersonalAccount() && e.normalizedAccountUserId != null ? J({
                                checkoutSessionId: l.checkout_id,
                                accountId: e.id,
                                accountUserId: e.normalizedAccountUserId
                            }) : null) != null && e != null && e.isPersonalAccount() && e.isPlus() && e.hasPaidSubscription() && e.id === a.id && e.normalizedAccountUserId != null && e.normalizedAccountUserId === a.normalizedAccountUserId)) {
                            ft(`payments_success`, {
                                checkoutPlanType: i,
                                checkoutId: l.checkout_id,
                                processorEntity: l.processor_entity ?? void 0,
                                isCheckoutModalEnabled: T,
                                checkoutKind: l.completion.checkout_kind ?? void 0,
                                entryPoint: K.STUDENTS_2026,
                                outcome: `other_error`
                            }, u), X({
                                checkoutPlanType: i,
                                checkoutSessionId: l.checkout_id,
                                currentAccount: a,
                                hasExplicitCheckoutPlanType: c,
                                isStudents2026Checkout: !0,
                                intl: f,
                                message: V.somethingWentWrong,
                                navigate: p,
                                toaster: h
                            });
                            return
                        }
                        te()
                    }
                    if (await q(), e) return;
                    let d = e => {
                        let t = e === void 0 ? E : e;
                        Ft({
                            completion: w ? {
                                ...l.completion,
                                entry_point: K.STUDENTS_2026
                            } : l.completion,
                            checkoutFrom: r,
                            checkoutPlanType: i,
                            checkoutSessionId: l.checkout_id,
                            currentAccount: a,
                            defaultHomeRedirectUrl: t,
                            hasExplicitCheckoutPlanType: c,
                            intl: f,
                            navigate: p,
                            postCheckoutResult: l.postCheckoutResult,
                            queryClient: m,
                            toaster: h
                        })
                    };
                    if (t) {
                        ht(l.checkout_id);
                        let e = x(),
                            t = e?.data.subscriptionStatus.discount;
                        if (e != null && n != null && e.id === a.id && e.normalizedAccountUserId === a.normalizedAccountUserId && Ot(n) && Ot(e) && t?.promo_campaign_id === `plus-1-month-free` && t.discount_type === re.PERCENTAGE && t.amount === 100 && t.duration_num_periods === 1 && n.id === a.id && n.normalizedAccountUserId === a.normalizedAccountUserId && i === k.PLUS && (l.completion.checkout_kind == null || l.completion.checkout_kind === B.Standard)) {
                            ee({
                                accountId: a.id,
                                accountUserId: a.normalizedAccountUserId,
                                onClose: () => d(`/?refresh_account=true`)
                            });
                            return
                        }
                    }
                    d()
                })()
            },
            N = () => {
                q().finally(() => {
                    e || A()
                })
            },
            P = () => {
                (async () => {
                    if (O != null) {
                        let t = await zt(m);
                        if (e) return;
                        if (t != null) {
                            if (!v.current) {
                                v.current = !0;
                                let e = y.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                    step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                    legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                                });
                                j(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
                                    unique_event_id: e
                                } : void 0), await I(O)
                            }
                            return
                        }
                        M({
                            stage: `plus_unconfirmed`,
                            handoff: O
                        });
                        return
                    }
                    let t = a.isFree() ? await It(m) : a;
                    if (!e) {
                        if (t && !t.isFree()) {
                            if (te(), await D(), e || (await Mt({
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
                                defaultHomeRedirectUrl: E,
                                hasExplicitCheckoutPlanType: c,
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
                            hasExplicitCheckoutPlanType: c,
                            intl: f,
                            toaster: h,
                            navigate: p,
                            message: V.somethingWentWrong
                        })
                    }
                })()
            };
        if (l.postCheckoutResult === `user_mismatch`) return () => {
            e = !0
        };
        if (O == null && C && l.postCheckoutResult !== `success`) return X({
            checkoutPlanType: i,
            checkoutSessionId: l.checkout_id,
            currentAccount: a,
            hasExplicitCheckoutPlanType: c,
            isStudents2026Checkout: !0,
            intl: f,
            toaster: h,
            navigate: p,
            message: l.postCheckoutResult === `payment_failed` ? $.paymentFailedToastMessage : V.somethingWentWrong
        }), () => {
            e = !0
        };
        l.postCheckoutResult !== `success` && ht(l.checkout_id);
        bb533: switch (l.postCheckoutResult) {
            case `success`:
                w ? ne.deleteCookie(ue.DogfoodingAccountType) : te(), N();
                break bb533;
            case `payment_failed`:
                if (O != null) {
                    window.location.href = St();
                    break bb533
                }
                X({
                    checkoutPlanType: i,
                    checkoutSessionId: l.checkout_id,
                    currentAccount: a,
                    hasExplicitCheckoutPlanType: c,
                    intl: f,
                    toaster: h,
                    navigate: p,
                    message: $.paymentFailedToastMessage
                });
                break bb533;
            case `other_error`:
                P()
        }
        return () => {
            e = !0
        }
    }, t[13] = r, t[14] = i, t[15] = I, t[16] = a, t[17] = E, t[18] = c, t[19] = f, t[20] = T, t[21] = l.checkout_id, t[22] = l.completion, t[23] = l.postCheckoutResult, t[24] = l.processor_entity, t[25] = O, t[26] = p, t[27] = m, t[28] = u, t[29] = h, t[30] = b, t[31] = L) : L = t[31];
    let R;
    if (t[32] !== r || t[33] !== i || t[34] !== I || t[35] !== a || t[36] !== E || t[37] !== c || t[38] !== f || t[39] !== T || t[40] !== l || t[41] !== O || t[42] !== p || t[43] !== m || t[44] !== u || t[45] !== h || t[46] !== b ? (R = [r, i, I, b, a, E, c, f, T, l, O, p, m, u, h], t[32] = r, t[33] = i, t[34] = I, t[35] = a, t[36] = E, t[37] = c, t[38] = f, t[39] = T, t[40] = l, t[41] = O, t[42] = p, t[43] = m, t[44] = u, t[45] = h, t[46] = b, t[47] = R) : R = t[47], (0, Z.useEffect)(L, R), l.postCheckoutResult === `user_mismatch`) {
        let e;
        return t[48] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(sn, {}), t[48] = e) : e = t[48], e
    }
    if (b != null) {
        let e = a.id === b.accountId && a.normalizedAccountUserId === b.accountUserId,
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
    if (A != null) {
        let e = A.stage === `plus_unconfirmed`,
            r = A.stage === `personal_switch_failed`,
            i;
        t[53] !== f || t[54] !== r || t[55] !== e ? (i = f.formatMessage(e ? $.plusConfirmationRecoveryTitle : r ? $.personalPlusSwitchRecoveryTitle : $.businessCancellationRecoveryTitle), t[53] = f, t[54] = r, t[55] = e, t[56] = i) : i = t[56];
        let a;
        t[57] === i ? a = t[58] : (a = (0, Q.jsx)(`h1`, {
            className: `text-token-text-primary text-xl font-semibold`,
            children: i
        }), t[57] = i, t[58] = a);
        let o;
        t[59] !== f || t[60] !== r || t[61] !== e ? (o = f.formatMessage(e ? $.plusConfirmationRecoveryBody : r ? $.personalPlusSwitchRecoveryBody : $.businessCancellationRecoveryBody), t[59] = f, t[60] = r, t[61] = e, t[62] = o) : o = t[62];
        let s;
        t[63] === o ? s = t[64] : (s = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary text-sm leading-6`,
            children: o
        }), t[63] = o, t[64] = s);
        let c;
        t[65] !== A.handoff || t[66] !== I ? (c = () => {
            j(`chatgpt_business_cancel_to_plus_business_cancellation_retry_clicked`), I(A.handoff)
        }, t[65] = A.handoff, t[66] = I, t[67] = c) : c = t[67];
        let l;
        t[68] !== f || t[69] !== r || t[70] !== e ? (l = f.formatMessage(e ? $.retryPlusConfirmationButton : r ? $.retryPersonalPlusSwitchButton : $.retryBusinessCancellationButton), t[68] = f, t[69] = r, t[70] = e, t[71] = l) : l = t[71];
        let u;
        t[72] !== N || t[73] !== c || t[74] !== l ? (u = (0, Q.jsx)(n, {
            color: `primary`,
            loading: N,
            onClick: c,
            children: l
        }), t[72] = N, t[73] = c, t[74] = l, t[75] = u) : u = t[75];
        let d;
        t[76] === Symbol.for(`react.memo_cache_sentinel`) ? (d = St(), t[76] = d) : d = t[76];
        let p;
        t[77] === f ? p = t[78] : (p = f.formatMessage($.manageBusinessSubscriptionLink), t[77] = f, t[78] = p);
        let m;
        t[79] === p ? m = t[80] : (m = (0, Q.jsx)($e, {
            className: `text-token-text-secondary text-sm`,
            href: d,
            children: p
        }), t[79] = p, t[80] = m);
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
    le.error(e), H.addError(e instanceof Error ? e : Error(`Failed to update workspace token after checkout`), {
        source: `payments.success`
    })
}

function Gt() {
    F({
        fallbackScreenHint: `login`,
        useFallbackScreenHint: !0,
        skipLoginModal: !0
    })
}
var Kt, Z, Q, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, $, cn = e((() => {
    ve(), Kt = Ee(), R(), mt(), P(), Me(), ce(), T(), xt(), Dt(), Je(), We(), ut(), Ze(), Ke(), Fe(), Pe(), it(), Ue(), O(), et(), ct(), st(), ee(), Qe(), qe(), ke(), L(), E(), at(), vt(), m(), a(), c(), Le(), S(), r(), u(), i(), v(), b(), I(), A(), Te(), je(), Z = t(be()), ye(), Q = pe(), we(), qt = C(() => Se(() => import(`./33d473af-md6hqols0ofvphis.js`).then(e => e.NoPaymentPlusTrialExtensionAcknowledgement), __vite__mapDeps([0, 1, 2, 3, 4, 5]))), Jt = function(e) {
        return e.Success = `success`, e.PaymentFailed = `payment_failed`, e.UserMismatch = `user_mismatch`, e.OtherError = `other_error`, e
    }({}), Yt = {
        success: !0
    }, Xt = [50, 100, 200, 400, 800, 1600, 3200, 3650], Zt = `2160290604`, Qt = `personal_checkout_failure_plan_recovery_enabled`, $t = `548821362`, en = `1549629729`, tn = `3507623755`, nn = `eligible_upsell_context_ids`, rn = `return_to_thread_enabled`, an = `drop_into_work_after_upgrade`, on = me(function() {
        "use forget";
        let e = (0, Kt.c)(27),
            [t] = xe(),
            n = fe(),
            r = f.getItem(z.CheckoutFrom),
            i = N(),
            a = Ce(),
            o;
        e[0] === t ? o = e[1] : (o = t.get(`plan_type`), e[0] = t, e[1] = o);
        let s = o,
            c = s ?? k.PLUS,
            l;
        e[2] === a.checkout_id ? l = e[3] : (l = Tt(a.checkout_id), e[2] = a.checkout_id, e[3] = l);
        let u = l,
            d;
        e[4] !== i || e[5] !== a.checkout_id ? (d = i?.isPersonalAccount() === !0 && typeof i.normalizedAccountUserId == `string` && J({
            checkoutSessionId: a.checkout_id,
            accountId: i.id,
            accountUserId: i.normalizedAccountUserId
        }) != null, e[4] = i, e[5] = a.checkout_id, e[6] = d) : d = e[6];
        let p = d,
            m;
        e[7] !== a.checkout_id || e[8] !== n.search ? (m = new URLSearchParams(n.search), ie(a.checkout_id, m), e[7] = a.checkout_id, e[8] = n.search, e[9] = m) : m = e[9];
        let h = m,
            g, _;
        if (e[10] !== c || e[11] !== p || e[12] !== u || e[13] !== a.checkout_id || e[14] !== a.postCheckoutResult || e[15] !== a.processor_entity || e[16] !== h ? (g = () => {
                let e = a.checkout_id,
                    t = a.processor_entity ?? void 0;
                a.postCheckoutResult !== `success` && ft(`payments_success`, {
                    checkoutPlanType: c,
                    checkoutId: e,
                    processorEntity: t,
                    isCheckoutModalEnabled: u,
                    ...p ? {
                        entryPoint: K.STUDENTS_2026
                    } : {},
                    outcome: a.postCheckoutResult === `payment_failed` ? `payment_failed` : a.postCheckoutResult === `user_mismatch` ? `user_mismatch` : `other_error`
                }, h)
            }, _ = [c, p, u, a.checkout_id, a.processor_entity, a.postCheckoutResult, h], e[10] = c, e[11] = p, e[12] = u, e[13] = a.checkout_id, e[14] = a.postCheckoutResult, e[15] = a.processor_entity, e[16] = h, e[17] = g, e[18] = _) : (g = e[17], _ = e[18]), (0, Z.useEffect)(g, _), !i) return null;
        let v = Ut,
            y = He(r) ? r : null,
            b = s != null,
            x;
        return e[19] !== v || e[20] !== c || e[21] !== i || e[22] !== a || e[23] !== h || e[24] !== y || e[25] !== b ? (x = (0, Q.jsx)(v, {
            checkoutFrom: y,
            checkoutPlanType: c,
            currentAccount: i,
            hasExplicitCheckoutPlanType: b,
            loaderData: a,
            sourceSearchParams: h
        }), e[19] = v, e[20] = c, e[21] = i, e[22] = a, e[23] = h, e[24] = y, e[25] = b, e[26] = x) : x = e[26], x
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
                    children: [i, (0, Q.jsx)($e, {
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
//# sourceMappingURL=bfd5ba7b-o7le9wyu0nttsdxb.js.map