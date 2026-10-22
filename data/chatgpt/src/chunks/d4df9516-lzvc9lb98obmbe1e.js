import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as n,
    Art as r,
    Cst as i,
    Eat as a,
    Ist as o,
    Lnt as s,
    Ml as c,
    Pst as l,
    Q4 as u,
    Sst as d,
    V1 as f,
    Xnt as p,
    Yat as m,
    Ynt as h,
    Z1 as g,
    Z4 as _,
    Znt as v,
    aot as y,
    crt as b,
    grt as x,
    jit as S,
    jl as C,
    jrt as w,
    krt as T,
    o0 as E,
    q1 as D,
    tot as O,
    wat as k,
    xct as A,
    znt as j
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    N as M,
    Nt as N,
    Q as P,
    Rn as F,
    Vn as I,
    p as L,
    s as R,
    v as z,
    wn as B,
    zn as V
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ain as H,
    An as ee,
    Din as te,
    Dln as ne,
    Eln as re,
    Jsn as ie,
    Mn as ae,
    Oin as oe,
    On as se,
    Pn as ce,
    bsn as le,
    f2t as ue,
    hn as de,
    jin as fe,
    jn as pe,
    p2t as me,
    pn as he,
    qsn as ge,
    vsn as _e,
    wn as ve,
    xin as ye,
    xsn as be
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    $g as xe,
    Bg as Se,
    Gg as Ce,
    Gn as we,
    Jg as Te,
    Jn as Ee,
    Kn as De,
    Ug as Oe,
    Vx as ke,
    Wg as Ae,
    Xn as je,
    Zn as Me,
    dS as Ne,
    gS as U,
    qn as Pe,
    t_ as Fe,
    uS as W,
    zg as G
} from "./c2675c8c-4fpunyxk1uf8cfp1.js";
import {
    a as Ie,
    i as Le
} from "./efd279b6-b90gmea5n9iovib1.js";
import {
    n as Re,
    t as ze
} from "./005e9d87-ifwlq5fekagp5mju.js";

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
        let t = await Promise.race([G.refreshEnrollmentStatus(e, n.signal), r]);
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
    n[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = S(), n[0] = r) : r = n[0];
    let i = !r,
        {
            isEnabled: a
        } = Me(e),
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
        C = (0, K.useRef)(0),
        w = (0, K.useRef)(!0),
        T = (0, K.useRef)(o && a && !i),
        E = (t, n) => {
            let r = n !== void 0 && n;
            if (!w.current || !T.current || t !== C.current) return;
            r && (v.current = Be(v.current));
            let i = r ? Math.min(q * 2 ** Math.min(g.current - 1, 5), J) : q,
                a = () => document.visibilityState !== `hidden` && navigator.onLine && v.current != null && performance.now() < v.current;
            r && !a() || (y.current = window.setTimeout(() => {
                y.current = null, !(!w.current || !T.current || t !== C.current || r && !a()) && O.mutate({
                    campaignId: e.campaignId,
                    generation: t
                })
            }, i))
        },
        D;
    n[2] !== l || n[3] !== c ? (D = e => {
        let {
            campaignId: t
        } = e;
        return c || l ? We(t, x.current) : G.refreshEnrollmentStatus(t)
    }, n[2] = l, n[3] = c, n[4] = D) : D = n[4];
    let O = L({
            mutationFn: D,
            onSuccess: (e, t) => {
                let {
                    generation: n
                } = t;
                if (!(!w.current || !T.current || n !== C.current)) {
                    if (g.current += 1, f(e.metadata ?? null), l && Ve(e.metadata ?? null)) {
                        m(!0), E(n, !0);
                        return
                    }
                    if (s && g.current < qe && (!e.metadata || e.metadata.enrollment_step === `none`)) {
                        E(n);
                        return
                    }
                    m(!0)
                }
            },
            onError: (e, t) => {
                let {
                    generation: n
                } = t;
                if (w.current && T.current && n === C.current && (c || l)) {
                    if (l && Ve(d)) {
                        g.current += 1, E(n, !0);
                        return
                    }
                    M({
                        name: `error`,
                        cause: `refresh`
                    })
                }
            }
        }),
        k;
    n[5] === a ? k = n[6] : (k = a ? i ? {
        name: `logged-out`
    } : {
        name: `loading`
    } : {
        name: `coming-soon`
    }, n[5] = a, n[6] = k);
    let [A, j] = (0, K.useState)(k), M = j, N, P;
    n[7] === Symbol.for(`react.memo_cache_sentinel`) ? (N = () => {
        let e = x.current;
        return w.current = !0, () => {
            w.current = !1, T.current = !1, C.current += 1, h.current = !0, Ue(e), y.current != null && (window.clearTimeout(y.current), y.current = null)
        }
    }, P = [], n[7] = N, n[8] = P) : (N = n[7], P = n[8]), (0, K.useEffect)(N, P);
    let F;
    n[9] !== o || n[10] !== a || n[11] !== M ? (F = () => {
        let e = T.current;
        T.current = o && a && !i, T.current || (Ue(x.current), y.current != null && (window.clearTimeout(y.current), y.current = null), e && (C.current += 1, h.current = !0, g.current = 0, v.current = null, f(null), m(!1), M(i ? {
            name: `logged-out`
        } : {
            name: `loading`
        })))
    }, n[9] = o, n[10] = a, n[11] = M, n[12] = F) : F = n[12];
    let I;
    n[13] !== o || n[14] !== a ? (I = [o, a, i], n[13] = o, n[14] = a, n[15] = I) : I = n[15], (0, K.useEffect)(F, I);
    let R;
    n[16] !== o || n[17] !== d || n[18] !== a || n[19] !== l || n[20] !== O || n[21] !== u || n[22] !== e.campaignId ? (R = () => {
        _.current !== u && !O.isPending && document.visibilityState !== `hidden` && navigator.onLine && (_.current = u, l && (d == null || d.enrollment_step === `none`) && (y.current != null && (window.clearTimeout(y.current), y.current = null), h.current = !0, g.current = 0, v.current = null)), o && a && !i && h.current && (h.current = !1, O.mutate({
            campaignId: e.campaignId,
            generation: C.current
        }))
    }, n[16] = o, n[17] = d, n[18] = a, n[19] = l, n[20] = O, n[21] = u, n[22] = e.campaignId, n[23] = R) : R = n[23];
    let z;
    n[24] !== o || n[25] !== d || n[26] !== a || n[27] !== l || n[28] !== O || n[29] !== u || n[30] !== e ? (z = [o, e, a, i, O, u, l, d], n[24] = o, n[25] = d, n[26] = a, n[27] = l, n[28] = O, n[29] = u, n[30] = e, n[31] = z) : z = n[31], (0, K.useEffect)(R, z);
    let B;
    n[32] !== d || n[33] !== p || n[34] !== e.campaignId || n[35] !== M ? (B = () => {
        if (!i && p) {
            if (d) {
                let t = d.enrollment_step;
                M(t === `verified` ? {
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
            M({
                name: `needs-verification`
            })
        }
    }, n[32] = d, n[33] = p, n[34] = e.campaignId, n[35] = M, n[36] = B) : B = n[36];
    let V;
    n[37] !== d || n[38] !== p || n[39] !== e.campaignId ? (V = [i, p, d, e.campaignId], n[37] = d, n[38] = p, n[39] = e.campaignId, n[40] = V) : V = n[40], (0, K.useEffect)(B, V);
    let H;
    return n[41] !== A || n[42] !== a ? (H = a ? A : {
        name: `coming-soon`
    }, n[41] = A, n[42] = a, n[43] = H) : H = n[43], H
}
var Ke, K, q, qe, Je, Ye, J, Xe = e((() => {
        Ke = B(), Fe(), je(), Se(), n(), R(), K = t(I()), q = 1500, qe = 5, Je = 15e3, Ye = 5 * 6e4, J = 3e4
    })),
    Ze, Qe = e((() => {
        ke(), Ze = Ne({
            subscription_id: U().min(1),
            source_price_id: U().min(1),
            target_price_id: U().min(1),
            monthly_price_minor: W().int().positive(),
            currency: U().regex(/^[a-z]{3}$/),
            quoted_at: W().int().positive(),
            renews_at: W().int().positive()
        })
    }));

function $e(e) {
    return _e.getCheckoutLink(e)
}
async function et(e, t, n, r) {
    let i = Ee({
        referrer: typeof t.referrer == `string` ? t.referrer : void 0,
        planType: l.PLUS,
        entryPoint: `promotion_redirect`,
        location: typeof t.location == `string` ? t.location : void 0
    });
    s.logEvent(`Account Pay: Payment Checkout Clicked`, t, ...i ? [{
        eventId: i
    }] : []), b.logEvent(`chatgpt_account_payment_modal_upgrade_button_click`, l.PLUS, ...i ? [{
        unique_event_id: i
    }] : []);
    let a = {
            entry_point: ne.REFERRAL_REDIRECT,
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
    let c;
    try {
        c = De({
            eventName: `chatgpt_account_payment_modal_navigating_to_checkout`,
            selectedPlan: l.PLUS
        })
    } catch {}
    s.logValueEventWithStatsig({
        segmentEventName: `Account Pay: Navigating to Payment Checkout`,
        statsigEventName: `chatgpt_account_payment_modal_navigating_to_checkout`,
        eventId: c,
        statsigValue: l.PLUS,
        data: {
            ...t,
            url: o.url
        },
        statsigMetadata: {
            url: o.url
        }
    }), oe(o, {
        checkoutPayload: a
    }), n && h.setItem(p.CheckoutFrom, `students`), r && h.setItem(p.CheckoutFrom, `veterans`), await fe(), window.location.href = o.url
}
var tt = e((() => {
    A(), re(), be(), te(), Pe(), we(), j(), v(), x()
}));

function Y(e) {
    return e != null && (e.planType === l.PRO || e.planType === l.PROMAX || e.planType === l.PROLITE) && e.isPersonalAccount() && e.hasPaidSubscription()
}
var nt = e((() => {
        A()
    })),
    X, rt = e((() => {
        j(), T(), X = {
            logDisabledAccess(e) {
                r.count(w.STUDENTS, `students.web.disabled`, {
                    reason: e
                })
            },
            logLandingPageImpression() {
                r.count(w.STUDENTS, `students.web.landingPageImpression`), s.logEvent(`Students: Landing Page Impression`)
            },
            logClickLoginButton(e) {
                r.count(w.STUDENTS, `students.web.clickLoginButton`, {
                    key: `source`,
                    value: e
                }), s.logEvent(`Students: Click Login Button`, {
                    source: e
                })
            },
            logClickVerifyButton(e) {
                r.count(w.STUDENTS, `students.web.clickVerifyButton`, {
                    key: `source`,
                    value: e
                }), s.logEvent(`Students: Click Verify Button`, {
                    source: e
                })
            },
            logClickCheckoutButton(e) {
                r.count(w.STUDENTS, `students.web.clickCheckoutButton`, {
                    key: `source`,
                    value: e
                }), s.logEvent(`Students: Click Checkout Button`, {
                    source: e
                })
            },
            logShowNeedsVerificationModal() {
                r.count(w.STUDENTS, `students.web.showNeedsVerificationModal`), s.logEvent(`Students: Show Needs Verification Modal`)
            },
            logShowVerifiedModal() {
                r.count(w.STUDENTS, `students.web.showVerifiedModal`), s.logEvent(`Students: Show Verified Modal`)
            },
            logError(e) {
                r.count(w.STUDENTS, `students.web.error`, {
                    key: `errorType`,
                    value: e
                })
            },
            logShowAnnouncementBanner() {
                r.count(w.STUDENTS, `students.web.showAnnouncementBanner`), s.logEvent(`Students: Show Announcement Banner`)
            },
            logClickAnnouncementBanner() {
                r.count(w.STUDENTS, `students.web.clickAnnouncementBanner`), s.logEvent(`Students: Click Announcement Banner`)
            },
            logCloseAnnouncementBanner() {
                r.count(w.STUDENTS, `students.web.closeAnnouncementBanner`), s.logEvent(`Students: Close Announcement Banner`)
            }
        }
    }));

function it(e, t, n, r = null) {
    let i = E(),
        a = V(),
        o = N(),
        s = L({
            mutationFn: e => {
                let t = i?.normalizedAccountUserId,
                    a = f(),
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
                return e ? G.createVerification(s, {
                    restart: !0
                }) : G.createVerification(s)
            }
        }),
        c = i && ue(i),
        l = n.blocksMobileStoreSubscribers && c;
    return async c => {
        if (n.campaignId === `student_chatgpt_plus_discount_2026` && Y(f())) {
            o(n.landingPath, {
                replace: !0
            });
            return
        }
        if (l) return;
        let u = () => n.campaignId === `student_chatgpt_plus_discount_2026` && f()?.id !== i?.id;
        $.clearModalError(), $.setIsLoading(!0);
        try {
            let a, o;
            if (c?.restart || r || !e || !t) {
                let {
                    verification_id: e,
                    account_verification_id: t
                } = await s.mutateAsync(c?.restart ?? !1);
                if (u()) return;
                a = e, o = t, se()
            } else a = e, o = t;
            if (n.campaignId === `student_chatgpt_plus_discount_2026`) {
                let e = new URL(`/students/verify`, window.location.origin);
                e.searchParams.set(`campaign`, xe), r === `handshake` && e.searchParams.set(`partner_id`, r), window.location.href = Ae(e.toString(), i?.isPersonalAccount() && i.normalizedAccountUserId != null ? {
                    accountId: i.id,
                    accountUserId: i.normalizedAccountUserId
                } : void 0)
            } else window.location.href = ot(n.sheerIdProgramId, `${window.location.origin}${ae(n.landingPath,ve)}`, a, o);
            $.setIsLoading(!1)
        } catch (e) {
            if (u()) return;
            if (c?.restart && n.campaignId === `student_chatgpt_plus_discount_2026` && e instanceof m && e.status === 409) {
                $.setIsLoading(!1), window.location.reload();
                return
            }
            X.logError(`verification`), k.addError(`Students: Failed verification: ${e}`), $.setIsLoading(!1), $.setModalError(a.formatMessage({
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
        } = H(),
        s = z({
            queryKey: [`checkout-pricing-config`]
        }),
        c = E(),
        u = M(),
        d = V(),
        p = N(),
        h = n?.navigateOnSuccess ?? !0,
        _ = t.campaignId === `student_chatgpt_plus_discount_2026` && c?.planType === l.GO && c.hasPaidSubscription(),
        v = c?.hasPaidSubscription() && c.isPlus(),
        b = pe(t.benefitKind, !!(v || _)),
        x = b === `redirect_to_checkout` && r == null && s > 0,
        S = L({
            mutationFn: ({
                requestBody: e,
                additionalHeaders: t
            }) => G.grantBenefit(e, t)
        }),
        w = c && ue(c),
        T = t.blocksMobileStoreSubscribers && w,
        D = d.formatMessage({
            id: `vEh4Th`,
            defaultMessage: `We couldn't confirm your eligibility just yet. Please try again.`
        }),
        O = e => {
            if (t.campaignId !== `student_chatgpt_plus_discount_2026` || !(e instanceof m) || e.code !== `verified_email_required` && e.code !== `email_missing`) return !1;
            let n = f();
            return c != null && n?.id === c.id && n?.normalizedAccountUserId === c.normalizedAccountUserId && $.setModalError(D, `email_required`), !0
        },
        k = () => {
            $.setIsLoading(!1)
        },
        A = async () => {
            try {
                let e = t.sentinelFlow ? await ge(t.sentinelFlow) : void 0,
                    n = await S.mutateAsync({
                        requestBody: {
                            campaign_id: t.campaignId,
                            benefit_kind: `codex_credits`
                        },
                        additionalHeaders: e
                    });
                return h && n.redirect_to && p(n.redirect_to), n
            } catch (e) {
                let t = e instanceof m && e.code === `student_benefit_sentinel_blocked`;
                $.setModalError(t ? y(e) ?? e.message : D, t ? `verification` : `generic`), X.logError(`applyDiscount`);
                return
            } finally {
                k()
            }
        }, j = async e => {
            try {
                let n = t.sentinelFlow ?? (t.campaignId === `student_chatgpt_plus_discount_2026` ? `chatgpt_checkout` : void 0),
                    r = n ? await (n === `chatgpt_checkout` ? ge : C)(n) : void 0,
                    i = await S.mutateAsync({
                        requestBody: {
                            campaign_id: t.campaignId,
                            benefit_kind: `subscription_discount`,
                            account_id: c?.id ?? ``,
                            updated_plan: `chatgptplusplan`,
                            ...e == null ? {} : {
                                go_upgrade_offer: e
                            }
                        },
                        additionalHeaders: r
                    });
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && c?.isPersonalAccount() && typeof c.normalizedAccountUserId == `string` && Te(`enrollment_completed`, {
                        billingPath: i.billing_path ?? `existing_plus`,
                        identity: {
                            accountId: c.id,
                            accountUserId: c.normalizedAccountUserId
                        }
                    }), t.campaignId === `student_chatgpt_plus_discount_2026` && c != null) try {
                    if (await g(u, c.id) == null) return window.location.reload(), i
                } catch {
                    return window.location.reload(), i
                }
                return h && p(ee()), i
            } catch (e) {
                if (O(e)) return;
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && e instanceof m) {
                    let t = f();
                    if (t?.id !== c?.id || t?.normalizedAccountUserId !== c?.normalizedAccountUserId) return;
                    if (e.code === `student_go_upgrade_confirmation_required` && c != null && typeof c.normalizedAccountUserId == `string`) {
                        let t = Ze.safeParse(e.detail?.go_upgrade_offer);
                        if (t.success && t.data.renews_at > t.data.quoted_at) {
                            $.setGoUpgradeOffer({
                                offer: t.data,
                                accountId: c.id,
                                accountUserId: c.normalizedAccountUserId
                            });
                            return
                        }
                    }
                    if (e.code === `student_go_upgrade_unavailable`) {
                        $.setModalError(D, `go_upgrade_unavailable`);
                        return
                    }
                    if (e.code === `student_subscription_discount_conflict`) {
                        $.setModalError(D, `discount_conflict`), X.logError(`applyDiscount`);
                        return
                    }
                }
                let n = e instanceof m && e.code === `student_benefit_sentinel_blocked`;
                $.setModalError(n ? y(e) ?? e.message : D, n ? `verification` : `generic`), X.logError(`applyDiscount`)
            } finally {
                k()
            }
        }, P = async n => {
            try {
                if (!r) throw Error(`Student promotion checkout details are unavailable`);
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && t.landingPath !== `/students`) {
                    let s = new URL(t.landingPath, window.location.origin),
                        l = n ?? e;
                    if (!c?.isPersonalAccount() || typeof c.normalizedAccountUserId != `string` || l.trim().length === 0) throw Error(`A verified personal account is required`);
                    let u = {
                            entry_point: ne.STUDENTS_2026,
                            plan_name: o.PLUS,
                            price_interval: `month`,
                            billing_details: r.billingDetails,
                            student_verification_id: l,
                            cancel_url: s.toString()
                        },
                        d = await a(u, {}),
                        p = f();
                    if (p == null || p.id !== c.id || p.normalizedAccountUserId !== c.normalizedAccountUserId) return;
                    Ie({
                        checkoutSessionId: le(d),
                        accountId: c.id,
                        accountUserId: c.normalizedAccountUserId,
                        returnPath: t.landingPath
                    }), Te(`checkout_started`, {
                        billingPath: `free_checkout`,
                        identity: {
                            accountId: c.id,
                            accountUserId: c.normalizedAccountUserId
                        }
                    }), await i(d, {
                        checkoutFrom: he.STUDENTS,
                        checkoutPayload: u,
                        reloadDocument: !0,
                        state: {
                            [ye]: {
                                pathname: s.pathname,
                                search: s.search,
                                hash: s.hash
                            }
                        }
                    });
                    return
                }
                await et(r.billingDetails, r.plusAnalyticsParams, e)
            } catch (e) {
                if (O(e)) return;
                $.setModalError(D), X.logError(`checkout`)
            } finally {
                k()
            }
        };
    return Object.assign((e, n) => {
        if (t.campaignId === `student_chatgpt_plus_discount_2026` && Y(f())) {
            p(t.landingPath, {
                replace: !0
            });
            return
        }
        if (!(e != null && (t.campaignId !== `student_chatgpt_plus_discount_2026` || b !== `apply_subscription_discount`)) && !(T || x)) switch ($.setIsLoading(!0), $.clearModalError(), b) {
            case `codex_credits`:
                return A();
            case `apply_subscription_discount`:
                return j(e);
            case `redirect_to_checkout`:
                return P(n?.accountVerificationId)
        }
    }, {
        isCheckoutLoading: x
    })
}

function ot(e, t, n, r) {
    let i = `https://services.sheerid.com/verify/${e}/`,
        a = new URL(i);
    return a.searchParams.set(`verificationId`, n), a.searchParams.set(`redirectUrl`, t), a.searchParams.set(`accountVerificationId`, r), a.searchParams.set(`externalUserId`, r), a.toString()
}
var Z, Q, $, st = e((() => {
    A(), Qe(), re(), be(), ie(), tt(), te(), ze(), de(), D(), Fe(), nt(), Se(), Ce(), Le(), rt(), ce(), me(), a(), O(), c(), R(), F(), P(), i(), u(), Z = d(_(() => ({
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
//# sourceMappingURL=d4df9516-lzvc9lb98obmbe1e.js.map