import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ast as n,
    Crt as r,
    Irt as i,
    Knt as a,
    Lit as o,
    Lrt as s,
    Ml as c,
    Nat as l,
    Oct as u,
    Q4 as d,
    Rit as ee,
    Rrt as f,
    Ust as p,
    V1 as m,
    Vst as h,
    Wnt as g,
    Z1 as _,
    Z4 as v,
    cot as y,
    fot as b,
    hrt as x,
    irt as S,
    jat as C,
    jl as w,
    kst as T,
    not as E,
    nrt as D,
    o0 as O,
    q1 as k,
    rrt as A
} from "./4813494d-mdvd4786a87166cc.js";
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
    Ain as V,
    An as te,
    Din as ne,
    Dln as re,
    Eln as ie,
    Jsn as ae,
    Mn as oe,
    Oin as se,
    On as ce,
    Pn as le,
    a2t as H,
    bsn as ue,
    hn as de,
    jin as fe,
    jn as pe,
    o2t as me,
    pn as he,
    qsn as ge,
    vsn as _e,
    wn as ve,
    xin as ye,
    xsn as be
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Bg as U,
    Gg as xe,
    Gn as Se,
    Hx as Ce,
    Jn as we,
    Kg as Te,
    Kn as Ee,
    Vg as De,
    Wg as Oe,
    Xn as ke,
    Yg as Ae,
    Zn as je,
    _S as W,
    dS as G,
    e_ as Me,
    fS as Ne,
    n_ as Pe,
    qn as Fe
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    a as Ie,
    i as Le
} from "./efd279b6-b90gmea5n9iovib1.js";
import {
    n as Re,
    t as ze
} from "./005e9d87-abq2js3bx6iv81hu.js";

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
        let t = await Promise.race([U.refreshEnrollmentStatus(e, n.signal), r]);
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
        } = je(e),
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
        return c || l ? We(t, x.current) : U.refreshEnrollmentStatus(t)
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
        Ke = z(), Pe(), ke(), De(), o(), L(), K = t(F()), q = 1500, qe = 5, Je = 15e3, Ye = 5 * 6e4, J = 3e4
    })),
    Ze, Qe = e((() => {
        Ce(), Ze = Ne({
            subscription_id: W().min(1),
            source_price_id: W().min(1),
            target_price_id: W().min(1),
            monthly_price_minor: G().int().positive(),
            currency: W().regex(/^[a-z]{3}$/),
            quoted_at: G().int().positive(),
            renews_at: G().int().positive()
        })
    }));

function $e(e) {
    return _e.getCheckoutLink(e)
}
async function et(e, t, n, r) {
    let i = we({
        referrer: typeof t.referrer == `string` ? t.referrer : void 0,
        planType: h.PLUS,
        entryPoint: `promotion_redirect`,
        location: typeof t.location == `string` ? t.location : void 0
    });
    g.logEvent(`Account Pay: Payment Checkout Clicked`, t, ...i ? [{
        eventId: i
    }] : []), x.logEvent(`chatgpt_account_payment_modal_upgrade_button_click`, h.PLUS, ...i ? [{
        unique_event_id: i
    }] : []);
    let a = {
            entry_point: re.REFERRAL_REDIRECT,
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
        o = await $e(a);
    if (o.url == null) throw Error(`Expected hosted promotion checkout response to have a URL`);
    let s;
    try {
        s = Ee({
            eventName: `chatgpt_account_payment_modal_navigating_to_checkout`,
            selectedPlan: h.PLUS
        })
    } catch {}
    g.logValueEventWithStatsig({
        segmentEventName: `Account Pay: Navigating to Payment Checkout`,
        statsigEventName: `chatgpt_account_payment_modal_navigating_to_checkout`,
        eventId: s,
        statsigValue: h.PLUS,
        data: {
            ...t,
            url: o.url
        },
        statsigMetadata: {
            url: o.url
        }
    }), se(o, {
        checkoutPayload: a
    }), n && D.setItem(A.CheckoutFrom, `students`), r && D.setItem(A.CheckoutFrom, `veterans`), await fe(), window.location.href = o.url
}
var tt = e((() => {
    u(), ie(), be(), ne(), Fe(), Se(), a(), S(), r()
}));

function Y(e) {
    return e != null && (e.planType === h.PRO || e.planType === h.PROMAX || e.planType === h.PROLITE) && e.isPersonalAccount() && e.hasPaidSubscription()
}
var nt = e((() => {
        u()
    })),
    X, rt = e((() => {
        a(), i(), X = {
            logDisabledAccess(e) {
                s.count(f.STUDENTS, `students.web.disabled`, {
                    reason: e
                })
            },
            logLandingPageImpression() {
                s.count(f.STUDENTS, `students.web.landingPageImpression`), g.logEvent(`Students: Landing Page Impression`)
            },
            logClickLoginButton(e) {
                s.count(f.STUDENTS, `students.web.clickLoginButton`, {
                    key: `source`,
                    value: e
                }), g.logEvent(`Students: Click Login Button`, {
                    source: e
                })
            },
            logClickVerifyButton(e) {
                s.count(f.STUDENTS, `students.web.clickVerifyButton`, {
                    key: `source`,
                    value: e
                }), g.logEvent(`Students: Click Verify Button`, {
                    source: e
                })
            },
            logClickCheckoutButton(e) {
                s.count(f.STUDENTS, `students.web.clickCheckoutButton`, {
                    key: `source`,
                    value: e
                }), g.logEvent(`Students: Click Checkout Button`, {
                    source: e
                })
            },
            logShowNeedsVerificationModal() {
                s.count(f.STUDENTS, `students.web.showNeedsVerificationModal`), g.logEvent(`Students: Show Needs Verification Modal`)
            },
            logShowVerifiedModal() {
                s.count(f.STUDENTS, `students.web.showVerifiedModal`), g.logEvent(`Students: Show Verified Modal`)
            },
            logError(e) {
                s.count(f.STUDENTS, `students.web.error`, {
                    key: `errorType`,
                    value: e
                })
            },
            logShowAnnouncementBanner() {
                s.count(f.STUDENTS, `students.web.showAnnouncementBanner`), g.logEvent(`Students: Show Announcement Banner`)
            },
            logClickAnnouncementBanner() {
                s.count(f.STUDENTS, `students.web.clickAnnouncementBanner`), g.logEvent(`Students: Click Announcement Banner`)
            },
            logCloseAnnouncementBanner() {
                s.count(f.STUDENTS, `students.web.closeAnnouncementBanner`), g.logEvent(`Students: Close Announcement Banner`)
            }
        }
    }));

function it(e, t, n, r = null) {
    let i = O(),
        a = B(),
        o = M(),
        s = I({
            mutationFn: e => {
                let t = i?.normalizedAccountUserId,
                    a = m(),
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
                return e ? U.createVerification(s, {
                    restart: !0
                }) : U.createVerification(s)
            }
        }),
        c = i && H(i),
        l = n.blocksMobileStoreSubscribers && c;
    return async c => {
        if (n.campaignId === `student_chatgpt_plus_discount_2026` && Y(m())) {
            o(n.landingPath, {
                replace: !0
            });
            return
        }
        if (l) return;
        let u = () => n.campaignId === `student_chatgpt_plus_discount_2026` && m()?.id !== i?.id;
        $.clearModalError(), $.setIsLoading(!0);
        try {
            let a, o;
            if (c?.restart || r || !e || !t) {
                let {
                    verification_id: e,
                    account_verification_id: t
                } = await s.mutateAsync(c?.restart ?? !1);
                if (u()) return;
                a = e, o = t, ce()
            } else a = e, o = t;
            if (n.campaignId === `student_chatgpt_plus_discount_2026`) {
                let e = new URL(`/students/verify`, window.location.origin);
                e.searchParams.set(`campaign`, Me), r === `handshake` && e.searchParams.set(`partner_id`, r), window.location.href = xe(e.toString(), i?.isPersonalAccount() && i.normalizedAccountUserId != null ? {
                    accountId: i.id,
                    accountUserId: i.normalizedAccountUserId
                } : void 0)
            } else window.location.href = ot(n.sheerIdProgramId, `${window.location.origin}${oe(n.landingPath,ve)}`, a, o);
            $.setIsLoading(!1)
        } catch (e) {
            if (u()) return;
            if (c?.restart && n.campaignId === `student_chatgpt_plus_discount_2026` && e instanceof E && e.status === 409) {
                $.setIsLoading(!1), window.location.reload();
                return
            }
            X.logError(`verification`), C.addError(`Students: Failed verification: ${e}`), $.setIsLoading(!1), $.setModalError(a.formatMessage({
                id: `nWt7rd`,
                defaultMessage: `We couldn't open student verification right now. Please try again.`
            }))
        }
    }
}

function at(e, t, n) {
    let r = Re(),
        {
            navigateToCheckout: i,
            prepareCheckoutSession: a
        } = V(),
        o = R({
            queryKey: [`checkout-pricing-config`]
        }),
        s = O(),
        c = j(),
        l = B(),
        u = M(),
        d = n?.navigateOnSuccess ?? !0,
        ee = t.campaignId === `student_chatgpt_plus_discount_2026` && s?.planType === h.GO && s.hasPaidSubscription(),
        f = s?.hasPaidSubscription() && s.isPlus(),
        g = pe(t.benefitKind, !!(f || ee)),
        v = g === `redirect_to_checkout` && r == null && o > 0,
        y = I({
            mutationFn: ({
                requestBody: e,
                additionalHeaders: t
            }) => U.grantBenefit(e, t)
        }),
        x = s && H(s),
        S = t.blocksMobileStoreSubscribers && x,
        C = l.formatMessage({
            id: `vEh4Th`,
            defaultMessage: `We couldn't confirm your eligibility just yet. Please try again.`
        }),
        T = e => {
            if (t.campaignId !== `student_chatgpt_plus_discount_2026` || !(e instanceof E) || e.code !== `verified_email_required` && e.code !== `email_missing`) return !1;
            let n = m();
            return s != null && n?.id === s.id && n?.normalizedAccountUserId === s.normalizedAccountUserId && $.setModalError(C, `email_required`), !0
        },
        D = () => {
            $.setIsLoading(!1)
        },
        k = async () => {
            try {
                let e = t.sentinelFlow ? await ge(t.sentinelFlow) : void 0,
                    n = await y.mutateAsync({
                        requestBody: {
                            campaign_id: t.campaignId,
                            benefit_kind: `codex_credits`
                        },
                        additionalHeaders: e
                    });
                return d && n.redirect_to && u(n.redirect_to), n
            } catch (e) {
                let t = e instanceof E && e.code === `student_benefit_sentinel_blocked`;
                $.setModalError(t ? b(e) ?? e.message : C, t ? `verification` : `generic`), X.logError(`applyDiscount`);
                return
            } finally {
                D()
            }
        }, A = async e => {
            try {
                let n = t.sentinelFlow ?? (t.campaignId === `student_chatgpt_plus_discount_2026` ? `chatgpt_checkout` : void 0),
                    r = n ? await (n === `chatgpt_checkout` ? ge : w)(n) : void 0,
                    i = await y.mutateAsync({
                        requestBody: {
                            campaign_id: t.campaignId,
                            benefit_kind: `subscription_discount`,
                            account_id: s?.id ?? ``,
                            updated_plan: `chatgptplusplan`,
                            ...e == null ? {} : {
                                go_upgrade_offer: e
                            }
                        },
                        additionalHeaders: r
                    });
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && s?.isPersonalAccount() && typeof s.normalizedAccountUserId == `string` && Ae(`enrollment_completed`, {
                        billingPath: i.billing_path ?? `existing_plus`,
                        identity: {
                            accountId: s.id,
                            accountUserId: s.normalizedAccountUserId
                        }
                    }), t.campaignId === `student_chatgpt_plus_discount_2026` && s != null) try {
                    if (await _(c, s.id) == null) return window.location.reload(), i
                } catch {
                    return window.location.reload(), i
                }
                return d && u(te()), i
            } catch (e) {
                if (T(e)) return;
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && e instanceof E) {
                    let t = m();
                    if (t?.id !== s?.id || t?.normalizedAccountUserId !== s?.normalizedAccountUserId) return;
                    if (e.code === `student_go_upgrade_confirmation_required` && s != null && typeof s.normalizedAccountUserId == `string`) {
                        let t = Ze.safeParse(e.detail?.go_upgrade_offer);
                        if (t.success && t.data.renews_at > t.data.quoted_at) {
                            $.setGoUpgradeOffer({
                                offer: t.data,
                                accountId: s.id,
                                accountUserId: s.normalizedAccountUserId
                            });
                            return
                        }
                    }
                    if (e.code === `student_go_upgrade_unavailable`) {
                        $.setModalError(C, `go_upgrade_unavailable`);
                        return
                    }
                    if (e.code === `student_subscription_discount_conflict`) {
                        $.setModalError(C, `discount_conflict`), X.logError(`applyDiscount`);
                        return
                    }
                }
                let n = e instanceof E && e.code === `student_benefit_sentinel_blocked`;
                $.setModalError(n ? b(e) ?? e.message : C, n ? `verification` : `generic`), X.logError(`applyDiscount`)
            } finally {
                D()
            }
        }, N = async n => {
            try {
                if (!r) throw Error(`Student promotion checkout details are unavailable`);
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && t.landingPath !== `/students`) {
                    let o = new URL(t.landingPath, window.location.origin),
                        c = n ?? e;
                    if (!s?.isPersonalAccount() || typeof s.normalizedAccountUserId != `string` || c.trim().length === 0) throw Error(`A verified personal account is required`);
                    let l = {
                            entry_point: re.STUDENTS_2026,
                            plan_name: p.PLUS,
                            price_interval: `month`,
                            billing_details: r.billingDetails,
                            student_verification_id: c,
                            cancel_url: o.toString()
                        },
                        u = await a(l, {}),
                        d = m();
                    if (d == null || d.id !== s.id || d.normalizedAccountUserId !== s.normalizedAccountUserId) return;
                    Ie({
                        checkoutSessionId: ue(u),
                        accountId: s.id,
                        accountUserId: s.normalizedAccountUserId,
                        returnPath: t.landingPath
                    }), Ae(`checkout_started`, {
                        billingPath: `free_checkout`,
                        identity: {
                            accountId: s.id,
                            accountUserId: s.normalizedAccountUserId
                        }
                    }), await i(u, {
                        checkoutFrom: he.STUDENTS,
                        checkoutPayload: l,
                        reloadDocument: !0,
                        state: {
                            [ye]: {
                                pathname: o.pathname,
                                search: o.search,
                                hash: o.hash
                            }
                        }
                    });
                    return
                }
                await et(r.billingDetails, r.plusAnalyticsParams, e)
            } catch (e) {
                if (T(e)) return;
                $.setModalError(C), X.logError(`checkout`)
            } finally {
                D()
            }
        };
    return Object.assign((e, n) => {
        if (t.campaignId === `student_chatgpt_plus_discount_2026` && Y(m())) {
            u(t.landingPath, {
                replace: !0
            });
            return
        }
        if (!(e != null && (t.campaignId !== `student_chatgpt_plus_discount_2026` || g !== `apply_subscription_discount`)) && !(S || v)) switch ($.setIsLoading(!0), $.clearModalError(), g) {
            case `codex_credits`:
                return k();
            case `apply_subscription_discount`:
                return A(e);
            case `redirect_to_checkout`:
                return N(n?.accountVerificationId)
        }
    }, {
        isCheckoutLoading: v
    })
}

function ot(e, t, n, r) {
    let i = `https://services.sheerid.com/verify/${e}/`,
        a = new URL(i);
    return a.searchParams.set(`verificationId`, n), a.searchParams.set(`redirectUrl`, t), a.searchParams.set(`accountVerificationId`, r), a.searchParams.set(`externalUserId`, r), a.toString()
}
var Z, Q, $, st = e((() => {
    u(), Qe(), ie(), be(), ae(), tt(), ne(), ze(), de(), k(), Pe(), nt(), De(), Te(), Le(), rt(), le(), me(), l(), y(), c(), L(), P(), N(), n(), d(), Z = T(v(() => ({
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
//# sourceMappingURL=d4df9516-bf83asg8daoe3j3p.js.map