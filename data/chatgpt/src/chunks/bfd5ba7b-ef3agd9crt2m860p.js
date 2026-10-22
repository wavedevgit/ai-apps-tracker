const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/33d473af-5a2yvv4a1lselaux.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-itnrgnth03y1sm9d.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/0e2455cf-5y65kiuirs6pcl0x.js"]))) => i.map(i => d[i]);
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
    crt as T,
    eE as E,
    f0 as D,
    frt as O,
    gat as te,
    git as k,
    ict as ne,
    jst as A,
    lV as j,
    mrt as M,
    n0 as N,
    o0 as P,
    o2 as F,
    p0 as I,
    prt as L,
    q1 as R,
    qa as z,
    qnt as B,
    qrt as re,
    r3 as V,
    r8 as ie,
    sit as H,
    tV as ae,
    urt as oe,
    vct as se,
    wrt as ce,
    xat as U,
    yat as le,
    z1 as W,
    zU as ue
} from "./4813494d-itnrgnth03y1sm9d.js";
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
    Asn as De,
    Drn as Oe,
    Dsn as ke,
    F2t as Ae,
    Ian as je,
    Man as Me,
    Msn as Ne,
    Osn as Pe,
    P2t as Fe,
    Sin as Ie,
    Tsn as Le,
    aan as K,
    bWn as Re,
    bin as ze,
    cm as Be,
    fn as Ve,
    gn as He,
    hn as Ue,
    ian as We,
    jGn as Ge,
    jsn as Ke,
    ntt as qe,
    oln as Je,
    pn as Ye,
    rtt as Xe,
    sln as q,
    uan as Ze,
    um as Qe,
    xWn as $e,
    yin as et
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Dh as tt,
    Hg as nt,
    Nh as rt,
    zg as it
} from "./c2675c8c-d62p1sdq1sy52umm.js";
import {
    r as at,
    t as ot
} from "./ee0eeb85-j07d47yit761d7bf.js";
import {
    i as st,
    r as ct
} from "./58459bbe-neeemhlwp5ywg1dl.js";
import {
    a as lt,
    i as ut,
    t as J,
    v as dt
} from "./a4eef3c0-mfjck1hv3pc9bm0j.js";
import {
    n as ft,
    r as pt,
    t as mt
} from "./97a55ca1-ob1vz7gjgz2uk2e8.js";
import {
    n as ht,
    t as gt
} from "./4cc06ac6-brapcyjx0r2nscf2.js";
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
} from "./a6f4f526-js77xoxle5wh4uhp.js";

function Tt(e) {
    let t = gt(f.getItem(B.CheckoutConfirmLatencyPending), e);
    return t.status === `ready` && t.pending.is_checkout_modal_enabled === !0
}

function Et({
    checkoutId: e,
    checkoutPlanType: t,
    postCheckoutResult: n,
    processorEntity: r
}) {
    let i = f.getItem(B.CheckoutConfirmLatencyPending) ?? null;
    if (!i) return;
    let a = gt(i, e);
    if (a.status === `discard`) {
        f.removeItem(B.CheckoutConfirmLatencyPending);
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
    }), f.removeItem(B.CheckoutConfirmLatencyPending), {
        durationMs: s,
        checkoutSessionId: o.checkout_session_id
    }
}
var Dt = e((() => {
    ht(), r(), u()
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
        }), (i || yt(t)) && f.removeItem(B.CheckoutFrom), n.isPersonalAccount()) {
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
        u = ke(t);
    u != null && (l.searchParams.set(De, u), l.searchParams.set(`mweb_fallback`, `1`)), s(`${l.pathname}${l.search}${l.hash}`)
}

function kt(e) {
    return Object.values(A).some(t => t === e)
}

function At(e, t) {
    return !t || !kt(e) || !K(e) || !O(Zt).get(Qt, !1) ? `/#pricing` : `/?cta_tab=personal&highlight_plan=${e}#pricing`
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
    }), ie(), te.deleteCookie(le.DogfoodingAccountType), e === A.PLUS && w.logEvent(`chatgpt_plus_payment_success_page`)
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
        ce.error(t), U.addError(t instanceof Error ? t : Error(`Failed to replay pending image download after checkout`), {
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
    return n?.upsellContextId === `work` && kt(e) && K(e) && (t.checkout_kind == null || t.checkout_kind === V.Standard) ? n.threadId != null && n.sitePreview != null ? ct(n.threadId, n.sitePreview) : n.threadId == null ? `/?surface=work` : ae(n.threadId) : n?.threadId == null || !kt(e) || !K(e) || t.checkout_kind != null && t.checkout_kind !== V.Standard || !oe($t).get(nn, []).includes(n.upsellContextId) ? null : O(en).get(rn, !1) ? ae(n.threadId) : null
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
        et(), N(u, e.workspace_id).then(() => {
            c({
                pathname: tt,
                search: `?account_id=${e.workspace_id}`
            }, {
                replace: !0
            })
        }).catch(e => {
            ce.error(e)
        });
        return
    }
    let p = l === `success` && (e.checkout_kind == null || e.checkout_kind === V.Standard) ? Me(r) : null,
        m = ze(),
        h = l === `success` && kt(n) && K(n) && (e.checkout_kind == null || e.checkout_kind === V.Standard) ? ke(r) : null,
        g = t == null ? Pt({
            checkoutPlanType: n,
            completion: e,
            context: m
        }) : null;
    if (et(), e.entry_point === q.STUDENTS_2026) {
        let e = x() ?? i,
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
                message: H.somethingWentWrong,
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
                message: H.somethingWentWrong,
                navigate: c,
                toaster: d
            });
            return
        }
        nt(`enrollment_completed`, {
            billingPath: `free_checkout`,
            identity: {
                accountId: e.id,
                accountUserId: e.normalizedAccountUserId
            }
        });
        let u = new URL(a, window.location.origin);
        u.searchParams.set(`refresh_account`, `true`), f.removeItem(B.CheckoutFrom), Y(`${u.pathname}${u.search}`)
    } else if (p != null) f.removeItem(B.CheckoutFrom), Y(Nt(p.returnPath));
    else if (h != null) {
        let e = new URL(h);
        e.searchParams.delete(Ke), e.searchParams.set(`refresh_account`, `true`), Le(r), f.removeItem(B.CheckoutFrom), Y(e.href)
    } else t ? (f.removeItem(B.CheckoutFrom), Y(Nt(Ve[t]))) : g == null ? l === `success` && o && !(`kind` in e) && (e.checkout_kind == null || e.checkout_kind === V.Standard) && (n === A.PLUS || n === A.PROLITE || n === A.PRO || n === A.PROMAX) && t == null && m == null && O(tn).get(an, !1) ? Y(Nt(`/?surface=work`)) : (d.success(n === A.SCI ? s.formatMessage($.sciPaymentConfirmationToastMessage) : s.formatMessage($.paymentConfirmationToastMessage, {
        planType: n,
        planName: Fe(n)
    }), {
        duration: 5
    }), a == null ? Y() : Y(a)) : Y(Nt(g))
}
async function It(e) {
    try {
        await e.refetchQueries({
            queryKey: W().queryKey
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
    return t == null ? null : p(t).find(e => e.structure === h.PERSONAL && e.planType === A.PLUS && e.hasPaidSubscription()) ?? null
}

function Bt(e) {
    return e.willDeactivateAtTermEnd() || e.isDeactivated()
}
async function Vt(e, t) {
    try {
        let {
            updatedAccount: n
        } = await N(e, t);
        return n
    } catch (e) {
        return U.addError(e instanceof Error ? e : Error(`Failed to switch to personal Plus after cancellation`), {
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
        f = Ee(),
        p = ge(),
        m = he(),
        h = ue(),
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
    let E = w,
        D = l.postCheckoutResult === `success` && c && (i === A.PLUS || i === A.PROLITE || i === A.PRO || i === A.PROMAX) && !(`kind` in l.completion) && (l.completion.checkout_kind == null || l.completion.checkout_kind === V.Standard) ? i === A.PLUS ? d : Be : null,
        O;
    t[6] !== i || t[7] !== l.checkout_id ? (O = () => Ct({
        checkoutPlanType: i,
        checkoutSessionId: l.checkout_id
    }), t[6] = i, t[7] = l.checkout_id, t[8] = O) : O = t[8];
    let [k] = (0, Z.useState)(O), [j, N] = (0, Z.useState)(null), [P, F] = (0, Z.useState)(!1), I;
    t[9] !== f || t[10] !== m || t[11] !== h ? (I = async e => {
        F(!0);
        let t = await zt(m);
        if (t == null) return U.addError(Error(`Unable to verify personal Plus after checkout`), {
            source: `payments.success.business_cancel_to_plus`
        }), N({
            stage: `plus_unconfirmed`,
            handoff: e
        }), F(!1), !1;
        let n = await Rt(m, e.businessAccountId);
        if (n == null || !n.isSelfServeBusiness()) {
            U.addError(Error(`Unable to verify intended Business account after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            });
            let t = y.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return M(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
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
            let n = await Rt(m, e.businessAccountId);
            r = n?.isSelfServeBusiness() === !0 && Bt(n), r || U.addError(t instanceof Error ? t : Error(`Unable to confirm Business cancellation after Plus checkout`), {
                source: `payments.success.business_cancel_to_plus`
            })
        }
        if (!r) {
            let t = y.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_FAILED`,
                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_failed`
            });
            return M(`chatgpt_business_cancel_to_plus_business_cancellation_failed`, void 0, t ? {
                unique_event_id: t
            } : void 0), N({
                stage: `business_cancellation_failed`,
                handoff: e
            }), F(!1), !1
        }
        let i = y.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
            step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_BUSINESS_CANCELLATION_SUCCEEDED`,
            legacyStatsigEventName: `chatgpt_business_cancel_to_plus_business_cancellation_succeeded`
        });
        return M(`chatgpt_business_cancel_to_plus_business_cancellation_succeeded`, void 0, i ? {
            unique_event_id: i
        } : void 0), await Promise.all([J(), T()]), await Vt(m, t.id) ? (wt(), N(null), h.success(f.formatMessage($.businessCancelToPlusSuccessMessage), {
            duration: 5
        }), F(!1), Y(), !0) : (N({
            stage: `personal_switch_failed`,
            handoff: e
        }), F(!1), !1)
    }, t[9] = f, t[10] = m, t[11] = h, t[12] = I) : I = t[12];
    let L = I,
        R;
    t[13] !== r || t[14] !== i || t[15] !== L || t[16] !== a || t[17] !== D || t[18] !== c || t[19] !== f || t[20] !== E || t[21] !== l.checkout_id || t[22] !== l.completion || t[23] !== l.postCheckoutResult || t[24] !== l.processor_entity || t[25] !== k || t[26] !== p || t[27] !== m || t[28] !== u || t[29] !== h || t[30] !== b ? (R = () => {
        if (b != null) return;
        let e = !1,
            t = ft(l.checkout_id, a),
            n = yt(l.checkout_id),
            s = a.isPersonalAccount() && a.normalizedAccountUserId != null && vt({
                checkoutSessionId: l.checkout_id,
                accountId: a.id,
                accountUserId: a.normalizedAccountUserId
            }) != null,
            d = l.postCheckoutResult === `success` && !(`kind` in l.completion) && l.completion.entry_point === q.STUDENTS_2026,
            S = r === Ye.STUDENTS && c && i === A.PLUS,
            C = n || d || S,
            w = l.postCheckoutResult === `success` && !(`kind` in l.completion) && (l.completion.checkout_kind == null || l.completion.checkout_kind === V.Standard) && (n || d || l.completion.entry_point == null && S),
            T = () => {
                if (g.current) return;
                g.current = !0;
                let e = y.logStructuredEvent(`ChatgptCheckoutPaymentSuccessPage`, {
                    checkoutPlanType: i,
                    checkoutId: l.checkout_id,
                    processorEntity: l.processor_entity ?? void 0,
                    isCheckoutModalEnabled: E,
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
        let O = () => (_.current?.checkoutId !== l.checkout_id && (_.current = {
                checkoutId: l.checkout_id,
                pending: o({
                    reason: `checkout_success`,
                    path: `/payments/success`
                }).catch(Wt)
            }), _.current.pending),
            j = () => {
                (async () => {
                    if (l.postCheckoutResult !== `success`) return;
                    if (`kind` in l.completion && l.completion.kind === V.CodexTeam) {
                        Ft({
                            completion: l.completion,
                            checkoutFrom: r,
                            checkoutPlanType: i,
                            checkoutSessionId: l.checkout_id,
                            currentAccount: a,
                            defaultHomeRedirectUrl: D,
                            hasExplicitCheckoutPlanType: c,
                            intl: f,
                            navigate: p,
                            postCheckoutResult: l.postCheckoutResult,
                            queryClient: m,
                            toaster: h
                        });
                        return
                    }
                    if (k != null) {
                        if (await O(), e) return;
                        if (!v.current) {
                            v.current = !0;
                            let e = y.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                            });
                            M(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
                                unique_event_id: e
                            } : void 0), await L(k)
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
                        (!n || n.isFree()) && (lt({
                            checkoutSessionId: l.checkout_id,
                            checkoutPlanType: i,
                            processorEntity: l.processor_entity ?? void 0,
                            isCheckoutModalEnabled: E,
                            checkoutKind: l.completion.checkout_kind ?? void 0,
                            entryPoint: l.completion.entry_point ?? void 0,
                            sourceSearchParams: u,
                            accessStage: `personal_account_refresh`,
                            failureReason: n == null ? `account_status_missing` : `account_still_free`
                        }), m.invalidateQueries(W()))
                    }
                    if (await O(), e || (await Mt({
                            hasPaidSubscription: n?.hasPaidSubscription() ?? !1,
                            intl: f,
                            queryClient: m
                        }), e)) return;
                    if (w) {
                        let e = a.isFree() || o ? n : x() ?? a;
                        if (!((e != null && e.isPersonalAccount() && e.normalizedAccountUserId != null ? vt({
                                checkoutSessionId: l.checkout_id,
                                accountId: e.id,
                                accountUserId: e.normalizedAccountUserId
                            }) : null) != null && e != null && e.isPersonalAccount() && e.isPlus() && e.hasPaidSubscription() && e.id === a.id && e.normalizedAccountUserId != null && e.normalizedAccountUserId === a.normalizedAccountUserId)) {
                            dt(`payments_success`, {
                                checkoutPlanType: i,
                                checkoutId: l.checkout_id,
                                processorEntity: l.processor_entity ?? void 0,
                                isCheckoutModalEnabled: E,
                                checkoutKind: l.completion.checkout_kind ?? void 0,
                                entryPoint: q.STUDENTS_2026,
                                outcome: `other_error`
                            }, u), X({
                                checkoutPlanType: i,
                                checkoutSessionId: l.checkout_id,
                                currentAccount: a,
                                hasExplicitCheckoutPlanType: c,
                                isStudents2026Checkout: !0,
                                intl: f,
                                message: H.somethingWentWrong,
                                navigate: p,
                                toaster: h
                            });
                            return
                        }
                        T()
                    }
                    if (await J(), e) return;
                    let d = e => {
                        let t = e === void 0 ? D : e;
                        Ft({
                            completion: w ? {
                                ...l.completion,
                                entry_point: q.STUDENTS_2026
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
                        mt(l.checkout_id);
                        let e = x(),
                            t = e?.data.subscriptionStatus.discount;
                        if (e != null && n != null && e.id === a.id && e.normalizedAccountUserId === a.normalizedAccountUserId && Ot(n) && Ot(e) && t?.promo_campaign_id === `plus-1-month-free` && t.discount_type === ne.PERCENTAGE && t.amount === 100 && t.duration_num_periods === 1 && n.id === a.id && n.normalizedAccountUserId === a.normalizedAccountUserId && i === A.PLUS && (l.completion.checkout_kind == null || l.completion.checkout_kind === V.Standard)) {
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
            P = () => {
                J().finally(() => {
                    e || j()
                })
            },
            F = () => {
                (async () => {
                    if (k != null) {
                        let t = await zt(m);
                        if (e) return;
                        if (t != null) {
                            if (!v.current) {
                                v.current = !0;
                                let e = y.logStructuredEvent(`ChatgptBusinessBillingPlanTransition`, {
                                    step: `CHATGPT_BUSINESS_BILLING_PLAN_TRANSITION_STEP_CHECKOUT_COMPLETED`,
                                    legacyStatsigEventName: `chatgpt_business_cancel_to_plus_checkout_completed`
                                });
                                M(`chatgpt_business_cancel_to_plus_checkout_completed`, void 0, e ? {
                                    unique_event_id: e
                                } : void 0), await L(k)
                            }
                            return
                        }
                        N({
                            stage: `plus_unconfirmed`,
                            handoff: k
                        });
                        return
                    }
                    let t = a.isFree() ? await It(m) : a;
                    if (!e) {
                        if (t && !t.isFree()) {
                            if (T(), await O(), e || (await Mt({
                                    hasPaidSubscription: t.hasPaidSubscription(),
                                    intl: f,
                                    queryClient: m
                                }), await J(), e)) return;
                            Ft({
                                completion: Yt,
                                checkoutFrom: r,
                                checkoutPlanType: i,
                                checkoutSessionId: l.checkout_id,
                                currentAccount: a,
                                defaultHomeRedirectUrl: D,
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
                            message: H.somethingWentWrong
                        })
                    }
                })()
            };
        if (l.postCheckoutResult === `user_mismatch`) return () => {
            e = !0
        };
        if (k == null && C && l.postCheckoutResult !== `success`) return X({
            checkoutPlanType: i,
            checkoutSessionId: l.checkout_id,
            currentAccount: a,
            hasExplicitCheckoutPlanType: c,
            isStudents2026Checkout: !0,
            intl: f,
            toaster: h,
            navigate: p,
            message: l.postCheckoutResult === `payment_failed` ? $.paymentFailedToastMessage : H.somethingWentWrong
        }), () => {
            e = !0
        };
        l.postCheckoutResult !== `success` && mt(l.checkout_id);
        bb533: switch (l.postCheckoutResult) {
            case `success`:
                w ? te.deleteCookie(le.DogfoodingAccountType) : T(), P();
                break bb533;
            case `payment_failed`:
                if (k != null) {
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
                F()
        }
        return () => {
            e = !0
        }
    }, t[13] = r, t[14] = i, t[15] = L, t[16] = a, t[17] = D, t[18] = c, t[19] = f, t[20] = E, t[21] = l.checkout_id, t[22] = l.completion, t[23] = l.postCheckoutResult, t[24] = l.processor_entity, t[25] = k, t[26] = p, t[27] = m, t[28] = u, t[29] = h, t[30] = b, t[31] = R) : R = t[31];
    let z;
    if (t[32] !== r || t[33] !== i || t[34] !== L || t[35] !== a || t[36] !== D || t[37] !== c || t[38] !== f || t[39] !== E || t[40] !== l || t[41] !== k || t[42] !== p || t[43] !== m || t[44] !== u || t[45] !== h || t[46] !== b ? (z = [r, i, L, b, a, D, c, f, E, l, k, p, m, u, h], t[32] = r, t[33] = i, t[34] = L, t[35] = a, t[36] = D, t[37] = c, t[38] = f, t[39] = E, t[40] = l, t[41] = k, t[42] = p, t[43] = m, t[44] = u, t[45] = h, t[46] = b, t[47] = z) : z = t[47], (0, Z.useEffect)(R, z), l.postCheckoutResult === `user_mismatch`) {
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
    if (j != null) {
        let e = j.stage === `plus_unconfirmed`,
            r = j.stage === `personal_switch_failed`,
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
        t[65] !== j.handoff || t[66] !== L ? (c = () => {
            M(`chatgpt_business_cancel_to_plus_business_cancellation_retry_clicked`), L(j.handoff)
        }, t[65] = j.handoff, t[66] = L, t[67] = c) : c = t[67];
        let l;
        t[68] !== f || t[69] !== r || t[70] !== e ? (l = f.formatMessage(e ? $.retryPlusConfirmationButton : r ? $.retryPersonalPlusSwitchButton : $.retryBusinessCancellationButton), t[68] = f, t[69] = r, t[70] = e, t[71] = l) : l = t[71];
        let u;
        t[72] !== P || t[73] !== c || t[74] !== l ? (u = (0, Q.jsx)(n, {
            color: `primary`,
            loading: P,
            onClick: c,
            children: l
        }), t[72] = P, t[73] = c, t[74] = l, t[75] = u) : u = t[75];
        let d;
        t[76] === Symbol.for(`react.memo_cache_sentinel`) ? (d = St(), t[76] = d) : d = t[76];
        let p;
        t[77] === f ? p = t[78] : (p = f.formatMessage($.manageBusinessSubscriptionLink), t[77] = f, t[78] = p);
        let m;
        t[79] === p ? m = t[80] : (m = (0, Q.jsx)(Re, {
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
    ce.error(e), U.addError(e instanceof Error ? e : Error(`Failed to update workspace token after checkout`), {
        source: `payments.success`
    })
}

function Gt() {
    I({
        fallbackScreenHint: `login`,
        useFallbackScreenHint: !0,
        skipLoginModal: !0
    })
}
var Kt, Z, Q, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, $, cn = e((() => {
    _e(), Kt = Te(), z(), pt(), F(), je(), se(), E(), xt(), Dt(), Je(), We(), ut(), Ze(), Ge(), Pe(), Ne(), rt(), Ue(), k(), $e(), st(), ot(), ee(), Qe(), qe(), Oe(), R(), D(), it(), _t(), m(), a(), c(), Ie(), S(), r(), u(), i(), v(), b(), L(), j(), we(), Ae(), Z = t(ye()), ve(), Q = fe(), Ce(), qt = C(() => xe(() => import(`./33d473af-5a2yvv4a1lselaux.js`).then(e => e.NoPaymentPlusTrialExtensionAcknowledgement), __vite__mapDeps([0, 1, 2, 3, 4, 5]))), Jt = function(e) {
        return e.Success = `success`, e.PaymentFailed = `payment_failed`, e.UserMismatch = `user_mismatch`, e.OtherError = `other_error`, e
    }({}), Yt = {
        success: !0
    }, Xt = [50, 100, 200, 400, 800, 1600, 3200, 3650], Zt = `2160290604`, Qt = `personal_checkout_failure_plan_recovery_enabled`, $t = `548821362`, en = `1549629729`, tn = `3507623755`, nn = `eligible_upsell_context_ids`, rn = `return_to_thread_enabled`, an = `drop_into_work_after_upgrade`, on = pe(function() {
        "use forget";
        let e = (0, Kt.c)(27),
            [t] = be(),
            n = de(),
            r = f.getItem(B.CheckoutFrom),
            i = P(),
            a = Se(),
            o;
        e[0] === t ? o = e[1] : (o = t.get(`plan_type`), e[0] = t, e[1] = o);
        let s = o,
            c = s ?? A.PLUS,
            l;
        e[2] === a.checkout_id ? l = e[3] : (l = Tt(a.checkout_id), e[2] = a.checkout_id, e[3] = l);
        let u = l,
            d;
        e[4] !== i || e[5] !== a.checkout_id ? (d = i?.isPersonalAccount() === !0 && typeof i.normalizedAccountUserId == `string` && vt({
            checkoutSessionId: a.checkout_id,
            accountId: i.id,
            accountUserId: i.normalizedAccountUserId
        }) != null, e[4] = i, e[5] = a.checkout_id, e[6] = d) : d = e[6];
        let p = d,
            m;
        e[7] !== a.checkout_id || e[8] !== n.search ? (m = new URLSearchParams(n.search), re(a.checkout_id, m), e[7] = a.checkout_id, e[8] = n.search, e[9] = m) : m = e[9];
        let h = m,
            g, _;
        if (e[10] !== c || e[11] !== p || e[12] !== u || e[13] !== a.checkout_id || e[14] !== a.postCheckoutResult || e[15] !== a.processor_entity || e[16] !== h ? (g = () => {
                let e = a.checkout_id,
                    t = a.processor_entity ?? void 0;
                a.postCheckoutResult !== `success` && dt(`payments_success`, {
                    checkoutPlanType: c,
                    checkoutId: e,
                    processorEntity: t,
                    isCheckoutModalEnabled: u,
                    ...p ? {
                        entryPoint: q.STUDENTS_2026
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
                    children: [i, (0, Q.jsx)(Re, {
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
//# sourceMappingURL=bfd5ba7b-ef3agd9crt2m860p.js.map