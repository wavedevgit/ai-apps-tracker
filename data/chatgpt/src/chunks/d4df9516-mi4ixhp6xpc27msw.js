import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Al as n,
    B4 as r,
    Bat as i,
    Fnt as a,
    H1 as o,
    Int as s,
    M1 as c,
    Pat as l,
    Pnt as u,
    R1 as d,
    Snt as f,
    V4 as p,
    Wat as m,
    Z1 as h,
    cst as g,
    dat as _,
    git as ee,
    grt as v,
    hit as y,
    hrt as b,
    jl as x,
    lat as S,
    mrt as C,
    oct as w,
    qnt as T,
    sst as E,
    trt as D,
    wnt as O,
    xst as k,
    yst as A
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    N as j,
    Nt as M,
    Q as N,
    Rn as P,
    Vn as F,
    p as I,
    s as L,
    v as R,
    wn as z,
    zn as B
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    An as V,
    Lsn as te,
    Mn as ne,
    On as re,
    Pn as ie,
    Rsn as ae,
    Sin as oe,
    csn as se,
    dln as ce,
    dsn as H,
    fin as le,
    hn as ue,
    jn as de,
    o2t as fe,
    pn as pe,
    s2t as me,
    uln as he,
    usn as ge,
    vin as _e,
    wn as ve,
    xin as ye,
    yin as be
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    Ag as xe,
    Fg as Se,
    Gg as Ce,
    Gn as we,
    Jn as Te,
    Kn as Ee,
    Lx as De,
    Ng as Oe,
    Pg as ke,
    Rg as Ae,
    Ug as je,
    Xn as Me,
    Zn as Ne,
    fS as U,
    kg as W,
    oS as G,
    qn as Pe,
    sS as Fe
} from "./c2675c8c-h5ybkhdzcoblzzdu.js";
import {
    a as Ie,
    i as Le
} from "./efd279b6-b90gmea5n9iovib1.js";
import {
    n as Re,
    t as ze
} from "./005e9d87-hjhzacc687o13787.js";

function Be(e) {
    return e ?? performance.now() + Ye
}

function Ve(e) {
    return e?.enrollment_step === `none` && e.verification_status === `pending`
}

function He(e) {
    if (typeof e != `object` || !e || Array.isArray(e)) return !1;
    if (!(`metadata` in e) || e.metadata == null) return !0;
    let t = e.metadata;
    if (typeof t != `object` || !t || Array.isArray(t) || !(`verification_id` in t) || typeof t.verification_id != `string` || t.verification_id.trim() === `` || !(`account_verification_id` in t) || typeof t.account_verification_id != `string` || t.account_verification_id.trim() === `` || !(`enrollment_step` in t) || !(`verification_status` in t)) return !1;
    let n = t.enrollment_step,
        r = t.verification_status;
    return `partner_id` in t && t.partner_id !== null && typeof t.partner_id != `string` ? !1 : (n === `none` || n === `verified` || n === `enrolled` || n === `error`) && (r === `none` || r === `pending` || r === `success` || r === `error`)
}

function Ue(e) {
    for (let [t, n] of e) window.clearTimeout(n), t.abort();
    e.clear()
}
async function We(e, t) {
    let n = new AbortController,
        r = new Promise((e, r) => {
            let i = window.setTimeout(() => {
                n.abort(), r(Error(`Student enrollment status request timed out`))
            }, Je);
            t.set(n, i)
        });
    try {
        let t = await Promise.race([W.refreshEnrollmentStatus(e, n.signal), r]);
        if (!He(t)) throw Error(`Invalid student enrollment status response`);
        return t
    } finally {
        let e = t.get(n);
        e != null && (window.clearTimeout(e), t.delete(n))
    }
}

function Ge(e, t) {
    "use forget";
    let n = (0, Ke.c)(44),
        r;
    n[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = ee(), n[0] = r) : r = n[0];
    let i = !r,
        {
            isEnabled: a
        } = Ne(e),
        o = t?.enabled ?? !0,
        s = t?.shouldPollAfterSheerIdReturn ?? !1,
        c = t?.reportRefreshErrors ?? !1,
        l = t?.recoverPendingVerification === !0 && e.campaignId === `student_chatgpt_plus_discount_2026`,
        u = t?.refreshRequestId ?? 0,
        [d, f] = (0, K.useState)(null),
        [p, m] = (0, K.useState)(!1),
        h = (0, K.useRef)(!0),
        g = (0, K.useRef)(0),
        _ = (0, K.useRef)(u),
        v = (0, K.useRef)(null),
        y = (0, K.useRef)(null),
        b;
    n[1] === Symbol.for(`react.memo_cache_sentinel`) ? (b = new Map, n[1] = b) : b = n[1];
    let x = (0, K.useRef)(b),
        S = (0, K.useRef)(0),
        C = (0, K.useRef)(!0),
        w = (0, K.useRef)(o && a && !i),
        T = (t, n) => {
            let r = n !== void 0 && n;
            if (!C.current || !w.current || t !== S.current) return;
            r && (v.current = Be(v.current));
            let i = r ? Math.min(q * 2 ** Math.min(g.current - 1, 5), J) : q,
                a = () => document.visibilityState !== `hidden` && navigator.onLine && v.current != null && performance.now() < v.current;
            r && !a() || (y.current = window.setTimeout(() => {
                y.current = null, !(!C.current || !w.current || t !== S.current || r && !a()) && D.mutate({
                    campaignId: e.campaignId,
                    generation: t
                })
            }, i))
        },
        E;
    n[2] !== l || n[3] !== c ? (E = e => {
        let {
            campaignId: t
        } = e;
        return c || l ? We(t, x.current) : W.refreshEnrollmentStatus(t)
    }, n[2] = l, n[3] = c, n[4] = E) : E = n[4];
    let D = I({
            mutationFn: E,
            onSuccess: (e, t) => {
                let {
                    generation: n
                } = t;
                if (!(!C.current || !w.current || n !== S.current)) {
                    if (g.current += 1, f(e.metadata ?? null), l && Ve(e.metadata ?? null)) {
                        m(!0), T(n, !0);
                        return
                    }
                    if (s && g.current < qe && (!e.metadata || e.metadata.enrollment_step === `none`)) {
                        T(n);
                        return
                    }
                    m(!0)
                }
            },
            onError: (e, t) => {
                let {
                    generation: n
                } = t;
                if (C.current && w.current && n === S.current && (c || l)) {
                    if (l && Ve(d)) {
                        g.current += 1, T(n, !0);
                        return
                    }
                    j({
                        name: `error`,
                        cause: `refresh`
                    })
                }
            }
        }),
        O;
    n[5] === a ? O = n[6] : (O = a ? i ? {
        name: `logged-out`
    } : {
        name: `loading`
    } : {
        name: `coming-soon`
    }, n[5] = a, n[6] = O);
    let [k, A] = (0, K.useState)(O), j = A, M, N;
    n[7] === Symbol.for(`react.memo_cache_sentinel`) ? (M = () => {
        let e = x.current;
        return C.current = !0, () => {
            C.current = !1, w.current = !1, S.current += 1, h.current = !0, Ue(e), y.current != null && (window.clearTimeout(y.current), y.current = null)
        }
    }, N = [], n[7] = M, n[8] = N) : (M = n[7], N = n[8]), (0, K.useEffect)(M, N);
    let P;
    n[9] !== o || n[10] !== a || n[11] !== j ? (P = () => {
        let e = w.current;
        w.current = o && a && !i, w.current || (Ue(x.current), y.current != null && (window.clearTimeout(y.current), y.current = null), e && (S.current += 1, h.current = !0, g.current = 0, v.current = null, f(null), m(!1), j(i ? {
            name: `logged-out`
        } : {
            name: `loading`
        })))
    }, n[9] = o, n[10] = a, n[11] = j, n[12] = P) : P = n[12];
    let F;
    n[13] !== o || n[14] !== a ? (F = [o, a, i], n[13] = o, n[14] = a, n[15] = F) : F = n[15], (0, K.useEffect)(P, F);
    let L;
    n[16] !== o || n[17] !== d || n[18] !== a || n[19] !== l || n[20] !== D || n[21] !== u || n[22] !== e.campaignId ? (L = () => {
        _.current !== u && !D.isPending && document.visibilityState !== `hidden` && navigator.onLine && (_.current = u, l && (d == null || d.enrollment_step === `none`) && (y.current != null && (window.clearTimeout(y.current), y.current = null), h.current = !0, g.current = 0, v.current = null)), o && a && !i && h.current && (h.current = !1, D.mutate({
            campaignId: e.campaignId,
            generation: S.current
        }))
    }, n[16] = o, n[17] = d, n[18] = a, n[19] = l, n[20] = D, n[21] = u, n[22] = e.campaignId, n[23] = L) : L = n[23];
    let R;
    n[24] !== o || n[25] !== d || n[26] !== a || n[27] !== l || n[28] !== D || n[29] !== u || n[30] !== e ? (R = [o, e, a, i, D, u, l, d], n[24] = o, n[25] = d, n[26] = a, n[27] = l, n[28] = D, n[29] = u, n[30] = e, n[31] = R) : R = n[31], (0, K.useEffect)(L, R);
    let z;
    n[32] !== d || n[33] !== p || n[34] !== e.campaignId || n[35] !== j ? (z = () => {
        if (!i && p) {
            if (d) {
                let t = d.enrollment_step;
                j(t === `verified` ? {
                    name: `verified`,
                    accountVerificationId: d.account_verification_id,
                    ...d.partner_id == null ? {} : {
                        partnerId: d.partner_id
                    }
                } : t === `enrolled` ? {
                    name: `enrolled`
                } : t === `error` ? {
                    name: `error`
                } : {
                    name: `needs-verification`,
                    verificationId: d?.verification_id,
                    accountVerificationId: d?.account_verification_id,
                    ...e.campaignId === `student_chatgpt_plus_discount_2026` && d.verification_status === `pending` ? {
                        verificationStatus: `pending`
                    } : {}
                });
                return
            }
            j({
                name: `needs-verification`
            })
        }
    }, n[32] = d, n[33] = p, n[34] = e.campaignId, n[35] = j, n[36] = z) : z = n[36];
    let B;
    n[37] !== d || n[38] !== p || n[39] !== e.campaignId ? (B = [i, p, d, e.campaignId], n[37] = d, n[38] = p, n[39] = e.campaignId, n[40] = B) : B = n[40], (0, K.useEffect)(z, B);
    let V;
    return n[41] !== k || n[42] !== a ? (V = a ? k : {
        name: `coming-soon`
    }, n[41] = k, n[42] = a, n[43] = V) : V = n[43], V
}
var Ke, K, q, qe, Je, Ye, J, Xe = e((() => {
        Ke = z(), Ce(), Me(), xe(), y(), L(), K = t(F()), q = 1500, qe = 5, Je = 15e3, Ye = 5 * 6e4, J = 3e4
    })),
    Ze, Qe = e((() => {
        De(), Ze = Fe({
            subscription_id: U().min(1),
            source_price_id: U().min(1),
            target_price_id: U().min(1),
            monthly_price_minor: G().int().positive(),
            currency: U().regex(/^[a-z]{3}$/),
            quoted_at: G().int().positive(),
            renews_at: G().int().positive()
        })
    }));

function $e(e) {
    return se.getCheckoutLink(e)
}
async function et(e, t, n, r) {
    let i = Te({
        referrer: typeof t.referrer == `string` ? t.referrer : void 0,
        planType: A.PLUS,
        entryPoint: `promotion_redirect`,
        location: typeof t.location == `string` ? t.location : void 0
    });
    f.logEvent(`Account Pay: Payment Checkout Clicked`, t, ...i ? [{
        eventId: i
    }] : []), T.logEvent(`chatgpt_account_payment_modal_upgrade_button_click`, A.PLUS, ...i ? [{
        unique_event_id: i
    }] : []);
    let o = {
            entry_point: ce.REFERRAL_REDIRECT,
            plan_name: `chatgptplusplan`,
            billing_details: e,
            checkout_ui_mode: `hosted`,
            ...n && {
                student_verification_id: n
            },
            ...r && {
                veterans_verification_id: r
            }
        },
        s = await $e(o);
    if (s.url == null) throw Error(`Expected hosted promotion checkout response to have a URL`);
    let c;
    try {
        c = Ee({
            eventName: `chatgpt_account_payment_modal_navigating_to_checkout`,
            selectedPlan: A.PLUS
        })
    } catch {}
    f.logValueEventWithStatsig({
        segmentEventName: `Account Pay: Navigating to Payment Checkout`,
        statsigEventName: `chatgpt_account_payment_modal_navigating_to_checkout`,
        eventId: c,
        statsigValue: A.PLUS,
        data: {
            ...t,
            url: s.url
        },
        statsigMetadata: {
            url: s.url
        }
    }), be(s, {
        checkoutPayload: o
    }), n && u.setItem(a.CheckoutFrom, `students`), r && u.setItem(a.CheckoutFrom, `veterans`), await oe(), window.location.href = s.url
}
var tt = e((() => {
    w(), he(), H(), _e(), Pe(), we(), O(), s(), D()
}));

function Y(e) {
    return e != null && (e.planType === A.PRO || e.planType === A.PROMAX || e.planType === A.PROLITE) && e.isPersonalAccount() && e.hasPaidSubscription()
}
var nt = e((() => {
        w()
    })),
    X, rt = e((() => {
        O(), C(), X = {
            logDisabledAccess(e) {
                b.count(v.STUDENTS, `students.web.disabled`, {
                    reason: e
                })
            },
            logLandingPageImpression() {
                b.count(v.STUDENTS, `students.web.landingPageImpression`), f.logEvent(`Students: Landing Page Impression`)
            },
            logClickLoginButton(e) {
                b.count(v.STUDENTS, `students.web.clickLoginButton`, {
                    key: `source`,
                    value: e
                }), f.logEvent(`Students: Click Login Button`, {
                    source: e
                })
            },
            logClickVerifyButton(e) {
                b.count(v.STUDENTS, `students.web.clickVerifyButton`, {
                    key: `source`,
                    value: e
                }), f.logEvent(`Students: Click Verify Button`, {
                    source: e
                })
            },
            logClickCheckoutButton(e) {
                b.count(v.STUDENTS, `students.web.clickCheckoutButton`, {
                    key: `source`,
                    value: e
                }), f.logEvent(`Students: Click Checkout Button`, {
                    source: e
                })
            },
            logShowNeedsVerificationModal() {
                b.count(v.STUDENTS, `students.web.showNeedsVerificationModal`), f.logEvent(`Students: Show Needs Verification Modal`)
            },
            logShowVerifiedModal() {
                b.count(v.STUDENTS, `students.web.showVerifiedModal`), f.logEvent(`Students: Show Verified Modal`)
            },
            logError(e) {
                b.count(v.STUDENTS, `students.web.error`, {
                    key: `errorType`,
                    value: e
                })
            },
            logShowAnnouncementBanner() {
                b.count(v.STUDENTS, `students.web.showAnnouncementBanner`), f.logEvent(`Students: Show Announcement Banner`)
            },
            logClickAnnouncementBanner() {
                b.count(v.STUDENTS, `students.web.clickAnnouncementBanner`), f.logEvent(`Students: Click Announcement Banner`)
            },
            logCloseAnnouncementBanner() {
                b.count(v.STUDENTS, `students.web.closeAnnouncementBanner`), f.logEvent(`Students: Close Announcement Banner`)
            }
        }
    }));

function it(e, t, n, r = null) {
    let i = h(),
        a = B(),
        o = M(),
        s = I({
            mutationFn: e => {
                let t = i?.normalizedAccountUserId,
                    a = c(),
                    o = n.campaignId === `student_chatgpt_plus_discount_2026` && i?.isPersonalAccount() && typeof t == `string` && a?.id === i.id && a.normalizedAccountUserId === t ? Oe({
                        accountId: i.id,
                        accountUserId: t
                    }) : null,
                    s = {
                        campaign_id: n.campaignId,
                        ...r ? {
                            partner_id: r
                        } : {},
                        ...o == null ? {} : {
                            attribution: o
                        }
                    };
                return e ? W.createVerification(s, {
                    restart: !0
                }) : W.createVerification(s)
            }
        }),
        u = i && fe(i),
        d = n.blocksMobileStoreSubscribers && u;
    return async u => {
        if (n.campaignId === `student_chatgpt_plus_discount_2026` && Y(c())) {
            o(n.landingPath, {
                replace: !0
            });
            return
        }
        if (d) return;
        let f = () => n.campaignId === `student_chatgpt_plus_discount_2026` && c()?.id !== i?.id;
        $.clearModalError(), $.setIsLoading(!0);
        try {
            let a, o;
            if (u?.restart || r || !e || !t) {
                let {
                    verification_id: e,
                    account_verification_id: t
                } = await s.mutateAsync(u?.restart ?? !1);
                if (f()) return;
                a = e, o = t, re()
            } else a = e, o = t;
            if (n.campaignId === `student_chatgpt_plus_discount_2026`) {
                let e = new URL(`/students/verify`, window.location.origin);
                e.searchParams.set(`campaign`, je), r === `handshake` && e.searchParams.set(`partner_id`, r), window.location.href = ke(e.toString(), i?.isPersonalAccount() && i.normalizedAccountUserId != null ? {
                    accountId: i.id,
                    accountUserId: i.normalizedAccountUserId
                } : void 0)
            } else window.location.href = ot(n.sheerIdProgramId, `${window.location.origin}${ne(n.landingPath,ve)}`, a, o);
            $.setIsLoading(!1)
        } catch (e) {
            if (f()) return;
            if (u?.restart && n.campaignId === `student_chatgpt_plus_discount_2026` && e instanceof l && e.status === 409) {
                $.setIsLoading(!1), window.location.reload();
                return
            }
            X.logError(`verification`), S.addError(`Students: Failed verification: ${e}`), $.setIsLoading(!1), $.setModalError(a.formatMessage({
                id: `nWt7rd`,
                defaultMessage: `We couldn't open student verification right now. Please try again.`
            }))
        }
    }
}

function at(e, t, r) {
    let i = Re(),
        {
            navigateToCheckout: a,
            prepareCheckoutSession: s
        } = ye(),
        u = R({
            queryKey: [`checkout-pricing-config`]
        }),
        d = h(),
        f = j(),
        p = B(),
        g = M(),
        _ = r?.navigateOnSuccess ?? !0,
        ee = t.campaignId === `student_chatgpt_plus_discount_2026` && d?.planType === A.GO && d.hasPaidSubscription(),
        v = d?.hasPaidSubscription() && d.isPlus(),
        y = de(t.benefitKind, !!(v || ee)),
        b = y === `redirect_to_checkout` && i == null && u > 0,
        x = I({
            mutationFn: ({
                requestBody: e,
                additionalHeaders: t
            }) => W.grantBenefit(e, t)
        }),
        S = d && fe(d),
        C = t.blocksMobileStoreSubscribers && S,
        w = p.formatMessage({
            id: `vEh4Th`,
            defaultMessage: `We couldn't confirm your eligibility just yet. Please try again.`
        }),
        T = e => {
            if (t.campaignId !== `student_chatgpt_plus_discount_2026` || !(e instanceof l) || e.code !== `verified_email_required` && e.code !== `email_missing`) return !1;
            let n = c();
            return d != null && n?.id === d.id && n?.normalizedAccountUserId === d.normalizedAccountUserId && $.setModalError(w, `email_required`), !0
        },
        E = () => {
            $.setIsLoading(!1)
        },
        D = async () => {
            try {
                let e = t.sentinelFlow ? await te(t.sentinelFlow) : void 0,
                    n = await x.mutateAsync({
                        requestBody: {
                            campaign_id: t.campaignId,
                            benefit_kind: `codex_credits`
                        },
                        additionalHeaders: e
                    });
                return _ && n.redirect_to && g(n.redirect_to), n
            } catch (e) {
                let t = e instanceof l && e.code === `student_benefit_sentinel_blocked`;
                $.setModalError(t ? m(e) ?? e.message : w, t ? `verification` : `generic`), X.logError(`applyDiscount`);
                return
            } finally {
                E()
            }
        }, O = async e => {
            try {
                let r = t.sentinelFlow ?? (t.campaignId === `student_chatgpt_plus_discount_2026` ? `chatgpt_checkout` : void 0),
                    i = r ? await (r === `chatgpt_checkout` ? te : n)(r) : void 0,
                    a = await x.mutateAsync({
                        requestBody: {
                            campaign_id: t.campaignId,
                            benefit_kind: `subscription_discount`,
                            account_id: d?.id ?? ``,
                            updated_plan: `chatgptplusplan`,
                            ...e == null ? {} : {
                                go_upgrade_offer: e
                            }
                        },
                        additionalHeaders: i
                    });
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && d?.isPersonalAccount() && typeof d.normalizedAccountUserId == `string` && Ae(`enrollment_completed`, {
                        billingPath: a.billing_path ?? `existing_plus`,
                        identity: {
                            accountId: d.id,
                            accountUserId: d.normalizedAccountUserId
                        }
                    }), t.campaignId === `student_chatgpt_plus_discount_2026` && d != null) try {
                    if (await o(f, d.id) == null) return window.location.reload(), a
                } catch {
                    return window.location.reload(), a
                }
                return _ && g(V()), a
            } catch (e) {
                if (T(e)) return;
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && e instanceof l) {
                    let t = c();
                    if (t?.id !== d?.id || t?.normalizedAccountUserId !== d?.normalizedAccountUserId) return;
                    if (e.code === `student_go_upgrade_confirmation_required` && d != null && typeof d.normalizedAccountUserId == `string`) {
                        let t = Ze.safeParse(e.detail?.go_upgrade_offer);
                        if (t.success && t.data.renews_at > t.data.quoted_at) {
                            $.setGoUpgradeOffer({
                                offer: t.data,
                                accountId: d.id,
                                accountUserId: d.normalizedAccountUserId
                            });
                            return
                        }
                    }
                    if (e.code === `student_go_upgrade_unavailable`) {
                        $.setModalError(w, `go_upgrade_unavailable`);
                        return
                    }
                    if (e.code === `student_subscription_discount_conflict`) {
                        $.setModalError(w, `discount_conflict`), X.logError(`applyDiscount`);
                        return
                    }
                }
                let n = e instanceof l && e.code === `student_benefit_sentinel_blocked`;
                $.setModalError(n ? m(e) ?? e.message : w, n ? `verification` : `generic`), X.logError(`applyDiscount`)
            } finally {
                E()
            }
        }, N = async n => {
            try {
                if (!i) throw Error(`Student promotion checkout details are unavailable`);
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && t.landingPath !== `/students`) {
                    let r = new URL(t.landingPath, window.location.origin),
                        o = n ?? e;
                    if (!d?.isPersonalAccount() || typeof d.normalizedAccountUserId != `string` || o.trim().length === 0) throw Error(`A verified personal account is required`);
                    let l = {
                            entry_point: ce.STUDENTS_2026,
                            plan_name: k.PLUS,
                            price_interval: `month`,
                            billing_details: i.billingDetails,
                            student_verification_id: o,
                            cancel_url: r.toString()
                        },
                        u = await s(l, {}),
                        f = c();
                    if (f == null || f.id !== d.id || f.normalizedAccountUserId !== d.normalizedAccountUserId) return;
                    Ie({
                        checkoutSessionId: ge(u),
                        accountId: d.id,
                        accountUserId: d.normalizedAccountUserId,
                        returnPath: t.landingPath
                    }), Ae(`checkout_started`, {
                        billingPath: `free_checkout`,
                        identity: {
                            accountId: d.id,
                            accountUserId: d.normalizedAccountUserId
                        }
                    }), await a(u, {
                        checkoutFrom: pe.STUDENTS,
                        checkoutPayload: l,
                        reloadDocument: !0,
                        state: {
                            [le]: {
                                pathname: r.pathname,
                                search: r.search,
                                hash: r.hash
                            }
                        }
                    });
                    return
                }
                await et(i.billingDetails, i.plusAnalyticsParams, e)
            } catch (e) {
                if (T(e)) return;
                $.setModalError(w), X.logError(`checkout`)
            } finally {
                E()
            }
        };
    return Object.assign((e, n) => {
        if (t.campaignId === `student_chatgpt_plus_discount_2026` && Y(c())) {
            g(t.landingPath, {
                replace: !0
            });
            return
        }
        if (!(e != null && (t.campaignId !== `student_chatgpt_plus_discount_2026` || y !== `apply_subscription_discount`)) && !(C || b)) switch ($.setIsLoading(!0), $.clearModalError(), y) {
            case `codex_credits`:
                return D();
            case `apply_subscription_discount`:
                return O(e);
            case `redirect_to_checkout`:
                return N(n?.accountVerificationId)
        }
    }, {
        isCheckoutLoading: b
    })
}

function ot(e, t, n, r) {
    let i = `https://services.sheerid.com/verify/${e}/`,
        a = new URL(i);
    return a.searchParams.set(`verificationId`, n), a.searchParams.set(`redirectUrl`, t), a.searchParams.set(`accountVerificationId`, r), a.searchParams.set(`externalUserId`, r), a.toString()
}
var Z, Q, $, st = e((() => {
    w(), Qe(), he(), H(), ae(), tt(), _e(), ze(), ue(), d(), Ce(), nt(), xe(), Se(), Le(), rt(), ie(), me(), _(), i(), x(), L(), P(), N(), g(), p(), Z = E(r(() => ({
        isLoading: !1,
        isModalOpen: !1,
        modalErrorKind: void 0,
        modalErrorMessage: void 0
    }))), Q = Z.setState, $ = {
        setIsLoading: e => {
            Q({
                isLoading: e
            })
        },
        clearModalError: () => {
            Q({
                modalErrorKind: void 0,
                modalErrorMessage: void 0,
                goUpgradeOffer: void 0
            })
        },
        setModalError: (e, t = `generic`) => {
            Q({
                modalErrorKind: t,
                modalErrorMessage: e,
                goUpgradeOffer: void 0
            })
        },
        setGoUpgradeOffer: e => {
            Q({
                goUpgradeOffer: e,
                modalErrorKind: void 0,
                modalErrorMessage: void 0
            })
        },
        closeModal: () => {
            Q({
                isModalOpen: !1
            })
        },
        openModal: () => {
            Q({
                isModalOpen: !0
            })
        }
    }
}));
export {
    Z as a, rt as c, Xe as d, Ge as f, at as i, nt as l, ot as n, it as o, st as r, X as s, $ as t, Y as u
};
//# sourceMappingURL=d4df9516-mi4ixhp6xpc27msw.js.map