import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aat as n,
    Al as r,
    Ant as i,
    B4 as a,
    Bat as o,
    H1 as s,
    Iat as c,
    M1 as l,
    Mnt as u,
    R1 as d,
    Unt as f,
    V4 as p,
    Z1 as m,
    Znt as h,
    _st as g,
    aat as _,
    bnt as v,
    dit as y,
    drt as b,
    fit as x,
    frt as S,
    hst as C,
    ist as w,
    jl as T,
    jnt as E,
    nct as D,
    rst as O,
    sat as k,
    urt as A,
    vnt as j
} from "./4813494d-bo7e0c29ngt4zgx0.js";
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
    An as H,
    Lsn as ee,
    Mn as te,
    On as ne,
    Pn as re,
    Rsn as ie,
    Sin as ae,
    csn as oe,
    dln as se,
    dsn as ce,
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
} from "./conversation-small-ikg0dwuw782klweb.js";
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
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    a as Ie,
    i as Le
} from "./efd279b6-b90gmea5n9iovib1.js";
import {
    n as Re,
    t as ze
} from "./005e9d87-k7km4ip1e8kzo44r.js";

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
    n[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = x(), n[0] = r) : r = n[0];
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
    let S = (0, K.useRef)(b),
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
        return c || l ? We(t, S.current) : W.refreshEnrollmentStatus(t)
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
        let e = S.current;
        return w.current = !0, () => {
            w.current = !1, T.current = !1, C.current += 1, h.current = !0, Ue(e), y.current != null && (window.clearTimeout(y.current), y.current = null)
        }
    }, P = [], n[7] = N, n[8] = P) : (N = n[7], P = n[8]), (0, K.useEffect)(N, P);
    let F;
    n[9] !== o || n[10] !== a || n[11] !== M ? (F = () => {
        let e = T.current;
        T.current = o && a && !i, T.current || (Ue(S.current), y.current != null && (window.clearTimeout(y.current), y.current = null), e && (C.current += 1, h.current = !0, g.current = 0, v.current = null, f(null), m(!1), M(i ? {
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
        Ke = B(), Ce(), Me(), xe(), y(), R(), K = t(I()), q = 1500, qe = 5, Je = 15e3, Ye = 5 * 6e4, J = 3e4
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
    return oe.getCheckoutLink(e)
}
async function et(e, t, n, r) {
    let a = Te({
        referrer: typeof t.referrer == `string` ? t.referrer : void 0,
        planType: C.PLUS,
        entryPoint: `promotion_redirect`,
        location: typeof t.location == `string` ? t.location : void 0
    });
    j.logEvent(`Account Pay: Payment Checkout Clicked`, t, ...a ? [{
        eventId: a
    }] : []), f.logEvent(`chatgpt_account_payment_modal_upgrade_button_click`, C.PLUS, ...a ? [{
        unique_event_id: a
    }] : []);
    let o = {
            entry_point: se.REFERRAL_REDIRECT,
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
            selectedPlan: C.PLUS
        })
    } catch {}
    j.logValueEventWithStatsig({
        segmentEventName: `Account Pay: Navigating to Payment Checkout`,
        statsigEventName: `chatgpt_account_payment_modal_navigating_to_checkout`,
        eventId: c,
        statsigValue: C.PLUS,
        data: {
            ...t,
            url: s.url
        },
        statsigMetadata: {
            url: s.url
        }
    }), be(s, {
        checkoutPayload: o
    }), n && i.setItem(E.CheckoutFrom, `students`), r && i.setItem(E.CheckoutFrom, `veterans`), await ae(), window.location.href = s.url
}
var tt = e((() => {
    D(), he(), ce(), _e(), Pe(), we(), v(), u(), h()
}));

function Y(e) {
    return e != null && (e.planType === C.PRO || e.planType === C.PROMAX || e.planType === C.PROLITE) && e.isPersonalAccount() && e.hasPaidSubscription()
}
var nt = e((() => {
        D()
    })),
    X, rt = e((() => {
        v(), A(), X = {
            logDisabledAccess(e) {
                b.count(S.STUDENTS, `students.web.disabled`, {
                    reason: e
                })
            },
            logLandingPageImpression() {
                b.count(S.STUDENTS, `students.web.landingPageImpression`), j.logEvent(`Students: Landing Page Impression`)
            },
            logClickLoginButton(e) {
                b.count(S.STUDENTS, `students.web.clickLoginButton`, {
                    key: `source`,
                    value: e
                }), j.logEvent(`Students: Click Login Button`, {
                    source: e
                })
            },
            logClickVerifyButton(e) {
                b.count(S.STUDENTS, `students.web.clickVerifyButton`, {
                    key: `source`,
                    value: e
                }), j.logEvent(`Students: Click Verify Button`, {
                    source: e
                })
            },
            logClickCheckoutButton(e) {
                b.count(S.STUDENTS, `students.web.clickCheckoutButton`, {
                    key: `source`,
                    value: e
                }), j.logEvent(`Students: Click Checkout Button`, {
                    source: e
                })
            },
            logShowNeedsVerificationModal() {
                b.count(S.STUDENTS, `students.web.showNeedsVerificationModal`), j.logEvent(`Students: Show Needs Verification Modal`)
            },
            logShowVerifiedModal() {
                b.count(S.STUDENTS, `students.web.showVerifiedModal`), j.logEvent(`Students: Show Verified Modal`)
            },
            logError(e) {
                b.count(S.STUDENTS, `students.web.error`, {
                    key: `errorType`,
                    value: e
                })
            },
            logShowAnnouncementBanner() {
                b.count(S.STUDENTS, `students.web.showAnnouncementBanner`), j.logEvent(`Students: Show Announcement Banner`)
            },
            logClickAnnouncementBanner() {
                b.count(S.STUDENTS, `students.web.clickAnnouncementBanner`), j.logEvent(`Students: Click Announcement Banner`)
            },
            logCloseAnnouncementBanner() {
                b.count(S.STUDENTS, `students.web.closeAnnouncementBanner`), j.logEvent(`Students: Close Announcement Banner`)
            }
        }
    }));

function it(e, t, r, i = null) {
    let a = m(),
        o = V(),
        s = N(),
        c = L({
            mutationFn: e => {
                let t = a?.normalizedAccountUserId,
                    n = l(),
                    o = r.campaignId === `student_chatgpt_plus_discount_2026` && a?.isPersonalAccount() && typeof t == `string` && n?.id === a.id && n.normalizedAccountUserId === t ? Oe({
                        accountId: a.id,
                        accountUserId: t
                    }) : null,
                    s = {
                        campaign_id: r.campaignId,
                        ...i ? {
                            partner_id: i
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
        u = a && fe(a),
        d = r.blocksMobileStoreSubscribers && u;
    return async u => {
        if (r.campaignId === `student_chatgpt_plus_discount_2026` && Y(l())) {
            s(r.landingPath, {
                replace: !0
            });
            return
        }
        if (d) return;
        let f = () => r.campaignId === `student_chatgpt_plus_discount_2026` && l()?.id !== a?.id;
        $.clearModalError(), $.setIsLoading(!0);
        try {
            let n, o;
            if (u?.restart || i || !e || !t) {
                let {
                    verification_id: e,
                    account_verification_id: t
                } = await c.mutateAsync(u?.restart ?? !1);
                if (f()) return;
                n = e, o = t, ne()
            } else n = e, o = t;
            if (r.campaignId === `student_chatgpt_plus_discount_2026`) {
                let e = new URL(`/students/verify`, window.location.origin);
                e.searchParams.set(`campaign`, je), i === `handshake` && e.searchParams.set(`partner_id`, i), window.location.href = ke(e.toString(), a?.isPersonalAccount() && a.normalizedAccountUserId != null ? {
                    accountId: a.id,
                    accountUserId: a.normalizedAccountUserId
                } : void 0)
            } else window.location.href = ot(r.sheerIdProgramId, `${window.location.origin}${te(r.landingPath,ve)}`, n, o);
            $.setIsLoading(!1)
        } catch (e) {
            if (f()) return;
            if (u?.restart && r.campaignId === `student_chatgpt_plus_discount_2026` && e instanceof n && e.status === 409) {
                $.setIsLoading(!1), window.location.reload();
                return
            }
            X.logError(`verification`), _.addError(`Students: Failed verification: ${e}`), $.setIsLoading(!1), $.setModalError(o.formatMessage({
                id: `nWt7rd`,
                defaultMessage: `We couldn't open student verification right now. Please try again.`
            }))
        }
    }
}

function at(e, t, i) {
    let a = Re(),
        {
            navigateToCheckout: c,
            prepareCheckoutSession: u
        } = ye(),
        d = z({
            queryKey: [`checkout-pricing-config`]
        }),
        f = m(),
        p = M(),
        h = V(),
        _ = N(),
        v = i?.navigateOnSuccess ?? !0,
        y = t.campaignId === `student_chatgpt_plus_discount_2026` && f?.planType === C.GO && f.hasPaidSubscription(),
        b = f?.hasPaidSubscription() && f.isPlus(),
        x = de(t.benefitKind, !!(b || y)),
        S = x === `redirect_to_checkout` && a == null && d > 0,
        w = L({
            mutationFn: ({
                requestBody: e,
                additionalHeaders: t
            }) => W.grantBenefit(e, t)
        }),
        T = f && fe(f),
        E = t.blocksMobileStoreSubscribers && T,
        D = h.formatMessage({
            id: `vEh4Th`,
            defaultMessage: `We couldn't confirm your eligibility just yet. Please try again.`
        }),
        O = e => {
            if (t.campaignId !== `student_chatgpt_plus_discount_2026` || !(e instanceof n) || e.code !== `verified_email_required` && e.code !== `email_missing`) return !1;
            let r = l();
            return f != null && r?.id === f.id && r?.normalizedAccountUserId === f.normalizedAccountUserId && $.setModalError(D, `email_required`), !0
        },
        k = () => {
            $.setIsLoading(!1)
        },
        A = async () => {
            try {
                let e = t.sentinelFlow ? await ee(t.sentinelFlow) : void 0,
                    n = await w.mutateAsync({
                        requestBody: {
                            campaign_id: t.campaignId,
                            benefit_kind: `codex_credits`
                        },
                        additionalHeaders: e
                    });
                return v && n.redirect_to && _(n.redirect_to), n
            } catch (e) {
                let t = e instanceof n && e.code === `student_benefit_sentinel_blocked`;
                $.setModalError(t ? o(e) ?? e.message : D, t ? `verification` : `generic`), X.logError(`applyDiscount`);
                return
            } finally {
                k()
            }
        }, j = async e => {
            try {
                let n = t.sentinelFlow ?? (t.campaignId === `student_chatgpt_plus_discount_2026` ? `chatgpt_checkout` : void 0),
                    i = n ? await (n === `chatgpt_checkout` ? ee : r)(n) : void 0,
                    a = await w.mutateAsync({
                        requestBody: {
                            campaign_id: t.campaignId,
                            benefit_kind: `subscription_discount`,
                            account_id: f?.id ?? ``,
                            updated_plan: `chatgptplusplan`,
                            ...e == null ? {} : {
                                go_upgrade_offer: e
                            }
                        },
                        additionalHeaders: i
                    });
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && f?.isPersonalAccount() && typeof f.normalizedAccountUserId == `string` && Ae(`enrollment_completed`, {
                        billingPath: a.billing_path ?? `existing_plus`,
                        identity: {
                            accountId: f.id,
                            accountUserId: f.normalizedAccountUserId
                        }
                    }), t.campaignId === `student_chatgpt_plus_discount_2026` && f != null) try {
                    if (await s(p, f.id) == null) return window.location.reload(), a
                } catch {
                    return window.location.reload(), a
                }
                return v && _(H()), a
            } catch (e) {
                if (O(e)) return;
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && e instanceof n) {
                    let t = l();
                    if (t?.id !== f?.id || t?.normalizedAccountUserId !== f?.normalizedAccountUserId) return;
                    if (e.code === `student_go_upgrade_confirmation_required` && f != null && typeof f.normalizedAccountUserId == `string`) {
                        let t = Ze.safeParse(e.detail?.go_upgrade_offer);
                        if (t.success && t.data.renews_at > t.data.quoted_at) {
                            $.setGoUpgradeOffer({
                                offer: t.data,
                                accountId: f.id,
                                accountUserId: f.normalizedAccountUserId
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
                let r = e instanceof n && e.code === `student_benefit_sentinel_blocked`;
                $.setModalError(r ? o(e) ?? e.message : D, r ? `verification` : `generic`), X.logError(`applyDiscount`)
            } finally {
                k()
            }
        }, P = async n => {
            try {
                if (!a) throw Error(`Student promotion checkout details are unavailable`);
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && t.landingPath !== `/students`) {
                    let r = new URL(t.landingPath, window.location.origin),
                        i = n ?? e;
                    if (!f?.isPersonalAccount() || typeof f.normalizedAccountUserId != `string` || i.trim().length === 0) throw Error(`A verified personal account is required`);
                    let o = {
                            entry_point: se.STUDENTS_2026,
                            plan_name: g.PLUS,
                            price_interval: `month`,
                            billing_details: a.billingDetails,
                            student_verification_id: i,
                            cancel_url: r.toString()
                        },
                        s = await u(o, {}),
                        d = l();
                    if (d == null || d.id !== f.id || d.normalizedAccountUserId !== f.normalizedAccountUserId) return;
                    Ie({
                        checkoutSessionId: ge(s),
                        accountId: f.id,
                        accountUserId: f.normalizedAccountUserId,
                        returnPath: t.landingPath
                    }), Ae(`checkout_started`, {
                        billingPath: `free_checkout`,
                        identity: {
                            accountId: f.id,
                            accountUserId: f.normalizedAccountUserId
                        }
                    }), await c(s, {
                        checkoutFrom: pe.STUDENTS,
                        checkoutPayload: o,
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
                await et(a.billingDetails, a.plusAnalyticsParams, e)
            } catch (e) {
                if (O(e)) return;
                $.setModalError(D), X.logError(`checkout`)
            } finally {
                k()
            }
        };
    return Object.assign((e, n) => {
        if (t.campaignId === `student_chatgpt_plus_discount_2026` && Y(l())) {
            _(t.landingPath, {
                replace: !0
            });
            return
        }
        if (!(e != null && (t.campaignId !== `student_chatgpt_plus_discount_2026` || x !== `apply_subscription_discount`)) && !(E || S)) switch ($.setIsLoading(!0), $.clearModalError(), x) {
            case `codex_credits`:
                return A();
            case `apply_subscription_discount`:
                return j(e);
            case `redirect_to_checkout`:
                return P(n?.accountVerificationId)
        }
    }, {
        isCheckoutLoading: S
    })
}

function ot(e, t, n, r) {
    let i = `https://services.sheerid.com/verify/${e}/`,
        a = new URL(i);
    return a.searchParams.set(`verificationId`, n), a.searchParams.set(`redirectUrl`, t), a.searchParams.set(`accountVerificationId`, r), a.searchParams.set(`externalUserId`, r), a.toString()
}
var Z, Q, $, st = e((() => {
    D(), Qe(), he(), ce(), ie(), tt(), _e(), ze(), ue(), d(), Ce(), nt(), xe(), Se(), Le(), rt(), re(), me(), k(), c(), T(), R(), F(), P(), w(), p(), Z = O(a(() => ({
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
//# sourceMappingURL=d4df9516-gr7cgg4uagx34gcp.js.map