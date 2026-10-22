import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as n,
    Art as r,
    Cat as i,
    Fst as a,
    Int as o,
    Jat as s,
    Jnt as c,
    Ml as l,
    Nst as u,
    Ort as d,
    Q4 as f,
    Rnt as p,
    Sst as m,
    Tat as h,
    V1 as g,
    Xnt as _,
    Ynt as v,
    Z1 as y,
    Z4 as b,
    bct as x,
    eot as S,
    hrt as C,
    iot as w,
    jl as T,
    kit as E,
    krt as D,
    o0 as O,
    q1 as k,
    srt as A,
    xst as j
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    Cln as ee,
    Ein as te,
    Gsn as ne,
    Mn as re,
    Oin as ie,
    On as ae,
    Pn as oe,
    Tin as se,
    Wsn as ce,
    _sn as le,
    d2t as ue,
    hn as de,
    hsn as fe,
    jn as pe,
    kin as me,
    pn as he,
    u2t as ge,
    vsn as _e,
    wln as ve,
    wn as ye,
    yin as be
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Fx as xe,
    Gn as Se,
    Hg as Ce,
    Jn as we,
    Kn as Te,
    Lg as Ee,
    Ng as U,
    Pg as De,
    Rg as Oe,
    Xn as ke,
    Yg as Ae,
    Zn as je,
    aS as Me,
    iS as W,
    qg as Ne,
    qn as Pe,
    uS as G,
    zg as Fe
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    a as Ie,
    i as Le
} from "./efd279b6-b90gmea5n9iovib1.js";
import {
    n as Re,
    t as ze
} from "./005e9d87-bq8o9ej08lx9i8an.js";

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
    let r = (0, Ke.c)(44),
        i;
    r[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = n(), r[0] = i) : i = r[0];
    let a = !i,
        {
            isEnabled: o
        } = je(e),
        s = t?.enabled ?? !0,
        c = t?.shouldPollAfterSheerIdReturn ?? !1,
        l = t?.reportRefreshErrors ?? !1,
        u = t?.recoverPendingVerification === !0 && e.campaignId === `student_chatgpt_plus_discount_2026`,
        d = t?.refreshRequestId ?? 0,
        [f, p] = (0, K.useState)(null),
        [m, h] = (0, K.useState)(!1),
        g = (0, K.useRef)(!0),
        _ = (0, K.useRef)(0),
        v = (0, K.useRef)(d),
        y = (0, K.useRef)(null),
        b = (0, K.useRef)(null),
        x;
    r[1] === Symbol.for(`react.memo_cache_sentinel`) ? (x = new Map, r[1] = x) : x = r[1];
    let S = (0, K.useRef)(x),
        C = (0, K.useRef)(0),
        w = (0, K.useRef)(!0),
        T = (0, K.useRef)(s && o && !a),
        E = (t, n) => {
            let r = n !== void 0 && n;
            if (!w.current || !T.current || t !== C.current) return;
            r && (y.current = Be(y.current));
            let i = r ? Math.min(q * 2 ** Math.min(_.current - 1, 5), J) : q,
                a = () => document.visibilityState !== `hidden` && navigator.onLine && y.current != null && performance.now() < y.current;
            r && !a() || (b.current = window.setTimeout(() => {
                b.current = null, !(!w.current || !T.current || t !== C.current || r && !a()) && O.mutate({
                    campaignId: e.campaignId,
                    generation: t
                })
            }, i))
        },
        D;
    r[2] !== u || r[3] !== l ? (D = e => {
        let {
            campaignId: t
        } = e;
        return l || u ? We(t, S.current) : U.refreshEnrollmentStatus(t)
    }, r[2] = u, r[3] = l, r[4] = D) : D = r[4];
    let O = L({
            mutationFn: D,
            onSuccess: (e, t) => {
                let {
                    generation: n
                } = t;
                if (!(!w.current || !T.current || n !== C.current)) {
                    if (_.current += 1, p(e.metadata ?? null), u && Ve(e.metadata ?? null)) {
                        h(!0), E(n, !0);
                        return
                    }
                    if (c && _.current < qe && (!e.metadata || e.metadata.enrollment_step === `none`)) {
                        E(n);
                        return
                    }
                    h(!0)
                }
            },
            onError: (e, t) => {
                let {
                    generation: n
                } = t;
                if (w.current && T.current && n === C.current && (l || u)) {
                    if (u && Ve(f)) {
                        _.current += 1, E(n, !0);
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
    r[5] === o ? k = r[6] : (k = o ? a ? {
        name: `logged-out`
    } : {
        name: `loading`
    } : {
        name: `coming-soon`
    }, r[5] = o, r[6] = k);
    let [A, j] = (0, K.useState)(k), M = j, N, P;
    r[7] === Symbol.for(`react.memo_cache_sentinel`) ? (N = () => {
        let e = S.current;
        return w.current = !0, () => {
            w.current = !1, T.current = !1, C.current += 1, g.current = !0, Ue(e), b.current != null && (window.clearTimeout(b.current), b.current = null)
        }
    }, P = [], r[7] = N, r[8] = P) : (N = r[7], P = r[8]), (0, K.useEffect)(N, P);
    let F;
    r[9] !== s || r[10] !== o || r[11] !== M ? (F = () => {
        let e = T.current;
        T.current = s && o && !a, T.current || (Ue(S.current), b.current != null && (window.clearTimeout(b.current), b.current = null), e && (C.current += 1, g.current = !0, _.current = 0, y.current = null, p(null), h(!1), M(a ? {
            name: `logged-out`
        } : {
            name: `loading`
        })))
    }, r[9] = s, r[10] = o, r[11] = M, r[12] = F) : F = r[12];
    let I;
    r[13] !== s || r[14] !== o ? (I = [s, o, a], r[13] = s, r[14] = o, r[15] = I) : I = r[15], (0, K.useEffect)(F, I);
    let R;
    r[16] !== s || r[17] !== f || r[18] !== o || r[19] !== u || r[20] !== O || r[21] !== d || r[22] !== e.campaignId ? (R = () => {
        v.current !== d && !O.isPending && document.visibilityState !== `hidden` && navigator.onLine && (v.current = d, u && (f == null || f.enrollment_step === `none`) && (b.current != null && (window.clearTimeout(b.current), b.current = null), g.current = !0, _.current = 0, y.current = null)), s && o && !a && g.current && (g.current = !1, O.mutate({
            campaignId: e.campaignId,
            generation: C.current
        }))
    }, r[16] = s, r[17] = f, r[18] = o, r[19] = u, r[20] = O, r[21] = d, r[22] = e.campaignId, r[23] = R) : R = r[23];
    let z;
    r[24] !== s || r[25] !== f || r[26] !== o || r[27] !== u || r[28] !== O || r[29] !== d || r[30] !== e ? (z = [s, e, o, a, O, d, u, f], r[24] = s, r[25] = f, r[26] = o, r[27] = u, r[28] = O, r[29] = d, r[30] = e, r[31] = z) : z = r[31], (0, K.useEffect)(R, z);
    let B;
    r[32] !== f || r[33] !== m || r[34] !== e.campaignId || r[35] !== M ? (B = () => {
        if (!a && m) {
            if (f) {
                let t = f.enrollment_step;
                M(t === `verified` ? {
                    name: `verified`,
                    accountVerificationId: f.account_verification_id,
                    ...f.partner_id == null ? {} : {
                        partnerId: f.partner_id
                    }
                } : t === `enrolled` ? {
                    name: `enrolled`
                } : t === `error` ? {
                    name: `error`
                } : {
                    name: `needs-verification`,
                    verificationId: f?.verification_id,
                    accountVerificationId: f?.account_verification_id,
                    ...e.campaignId === `student_chatgpt_plus_discount_2026` && f.verification_status === `pending` ? {
                        verificationStatus: `pending`
                    } : {}
                });
                return
            }
            M({
                name: `needs-verification`
            })
        }
    }, r[32] = f, r[33] = m, r[34] = e.campaignId, r[35] = M, r[36] = B) : B = r[36];
    let V;
    r[37] !== f || r[38] !== m || r[39] !== e.campaignId ? (V = [a, m, f, e.campaignId], r[37] = f, r[38] = m, r[39] = e.campaignId, r[40] = V) : V = r[40], (0, K.useEffect)(B, V);
    let H;
    return r[41] !== A || r[42] !== o ? (H = o ? A : {
        name: `coming-soon`
    }, r[41] = A, r[42] = o, r[43] = H) : H = r[43], H
}
var Ke, K, q, qe, Je, Ye, J, Xe = e((() => {
        Ke = B(), Ae(), ke(), De(), E(), R(), K = t(I()), q = 1500, qe = 5, Je = 15e3, Ye = 5 * 6e4, J = 3e4
    })),
    Ze, Qe = e((() => {
        xe(), Ze = Me({
            subscription_id: G().min(1),
            source_price_id: G().min(1),
            target_price_id: G().min(1),
            monthly_price_minor: W().int().positive(),
            currency: G().regex(/^[a-z]{3}$/),
            quoted_at: W().int().positive(),
            renews_at: W().int().positive()
        })
    }));

function $e(e) {
    return fe.getCheckoutLink(e)
}
async function et(e, t, n, r) {
    let i = we({
        referrer: typeof t.referrer == `string` ? t.referrer : void 0,
        planType: u.PLUS,
        entryPoint: `promotion_redirect`,
        location: typeof t.location == `string` ? t.location : void 0
    });
    o.logEvent(`Account Pay: Payment Checkout Clicked`, t, ...i ? [{
        eventId: i
    }] : []), A.logEvent(`chatgpt_account_payment_modal_upgrade_button_click`, u.PLUS, ...i ? [{
        unique_event_id: i
    }] : []);
    let a = {
            entry_point: ve.REFERRAL_REDIRECT,
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
        s = await $e(a);
    if (s.url == null) throw Error(`Expected hosted promotion checkout response to have a URL`);
    let l;
    try {
        l = Te({
            eventName: `chatgpt_account_payment_modal_navigating_to_checkout`,
            selectedPlan: u.PLUS
        })
    } catch {}
    o.logValueEventWithStatsig({
        segmentEventName: `Account Pay: Navigating to Payment Checkout`,
        statsigEventName: `chatgpt_account_payment_modal_navigating_to_checkout`,
        eventId: l,
        statsigValue: u.PLUS,
        data: {
            ...t,
            url: s.url
        },
        statsigMetadata: {
            url: s.url
        }
    }), te(s, {
        checkoutPayload: a
    }), n && c.setItem(v.CheckoutFrom, `students`), r && c.setItem(v.CheckoutFrom, `veterans`), await me(), window.location.href = s.url
}
var tt = e((() => {
    x(), ee(), _e(), se(), Pe(), Se(), p(), _(), C()
}));

function Y(e) {
    return e != null && (e.planType === u.PRO || e.planType === u.PROMAX || e.planType === u.PROLITE) && e.isPersonalAccount() && e.hasPaidSubscription()
}
var nt = e((() => {
        x()
    })),
    X, rt = e((() => {
        p(), d(), X = {
            logDisabledAccess(e) {
                D.count(r.STUDENTS, `students.web.disabled`, {
                    reason: e
                })
            },
            logLandingPageImpression() {
                D.count(r.STUDENTS, `students.web.landingPageImpression`), o.logEvent(`Students: Landing Page Impression`)
            },
            logClickLoginButton(e) {
                D.count(r.STUDENTS, `students.web.clickLoginButton`, {
                    key: `source`,
                    value: e
                }), o.logEvent(`Students: Click Login Button`, {
                    source: e
                })
            },
            logClickVerifyButton(e) {
                D.count(r.STUDENTS, `students.web.clickVerifyButton`, {
                    key: `source`,
                    value: e
                }), o.logEvent(`Students: Click Verify Button`, {
                    source: e
                })
            },
            logClickCheckoutButton(e) {
                D.count(r.STUDENTS, `students.web.clickCheckoutButton`, {
                    key: `source`,
                    value: e
                }), o.logEvent(`Students: Click Checkout Button`, {
                    source: e
                })
            },
            logShowNeedsVerificationModal() {
                D.count(r.STUDENTS, `students.web.showNeedsVerificationModal`), o.logEvent(`Students: Show Needs Verification Modal`)
            },
            logShowVerifiedModal() {
                D.count(r.STUDENTS, `students.web.showVerifiedModal`), o.logEvent(`Students: Show Verified Modal`)
            },
            logError(e) {
                D.count(r.STUDENTS, `students.web.error`, {
                    key: `errorType`,
                    value: e
                })
            },
            logShowAnnouncementBanner() {
                D.count(r.STUDENTS, `students.web.showAnnouncementBanner`), o.logEvent(`Students: Show Announcement Banner`)
            },
            logClickAnnouncementBanner() {
                D.count(r.STUDENTS, `students.web.clickAnnouncementBanner`), o.logEvent(`Students: Click Announcement Banner`)
            },
            logCloseAnnouncementBanner() {
                D.count(r.STUDENTS, `students.web.closeAnnouncementBanner`), o.logEvent(`Students: Close Announcement Banner`)
            }
        }
    }));

function it(e, t, n, r = null) {
    let a = O(),
        o = V(),
        c = N(),
        l = L({
            mutationFn: e => {
                let t = a?.normalizedAccountUserId,
                    i = g(),
                    o = n.campaignId === `student_chatgpt_plus_discount_2026` && a?.isPersonalAccount() && typeof t == `string` && i?.id === a.id && i.normalizedAccountUserId === t ? Ee({
                        accountId: a.id,
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
        u = a && ge(a),
        d = n.blocksMobileStoreSubscribers && u;
    return async u => {
        if (n.campaignId === `student_chatgpt_plus_discount_2026` && Y(g())) {
            c(n.landingPath, {
                replace: !0
            });
            return
        }
        if (d) return;
        let f = () => n.campaignId === `student_chatgpt_plus_discount_2026` && g()?.id !== a?.id;
        $.clearModalError(), $.setIsLoading(!0);
        try {
            let i, o;
            if (u?.restart || r || !e || !t) {
                let {
                    verification_id: e,
                    account_verification_id: t
                } = await l.mutateAsync(u?.restart ?? !1);
                if (f()) return;
                i = e, o = t, ae()
            } else i = e, o = t;
            if (n.campaignId === `student_chatgpt_plus_discount_2026`) {
                let e = new URL(`/students/verify`, window.location.origin);
                e.searchParams.set(`campaign`, Ne), r === `handshake` && e.searchParams.set(`partner_id`, r), window.location.href = Oe(e.toString(), a?.isPersonalAccount() && a.normalizedAccountUserId != null ? {
                    accountId: a.id,
                    accountUserId: a.normalizedAccountUserId
                } : void 0)
            } else window.location.href = ot(n.sheerIdProgramId, `${window.location.origin}${re(n.landingPath,ye)}`, i, o);
            $.setIsLoading(!1)
        } catch (e) {
            if (f()) return;
            if (u?.restart && n.campaignId === `student_chatgpt_plus_discount_2026` && e instanceof s && e.status === 409) {
                $.setIsLoading(!1), window.location.reload();
                return
            }
            X.logError(`verification`), i.addError(`Students: Failed verification: ${e}`), $.setIsLoading(!1), $.setModalError(o.formatMessage({
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
            prepareCheckoutSession: o
        } = ie(),
        c = z({
            queryKey: [`checkout-pricing-config`]
        }),
        l = O(),
        d = M(),
        f = V(),
        p = N(),
        m = n?.navigateOnSuccess ?? !0,
        h = t.campaignId === `student_chatgpt_plus_discount_2026` && l?.planType === u.GO && l.hasPaidSubscription(),
        _ = l?.hasPaidSubscription() && l.isPlus(),
        v = pe(t.benefitKind, !!(_ || h)),
        b = v === `redirect_to_checkout` && r == null && c > 0,
        x = L({
            mutationFn: ({
                requestBody: e,
                additionalHeaders: t
            }) => U.grantBenefit(e, t)
        }),
        S = l && ge(l),
        C = t.blocksMobileStoreSubscribers && S,
        E = f.formatMessage({
            id: `vEh4Th`,
            defaultMessage: `We couldn't confirm your eligibility just yet. Please try again.`
        }),
        D = e => {
            if (t.campaignId !== `student_chatgpt_plus_discount_2026` || !(e instanceof s) || e.code !== `verified_email_required` && e.code !== `email_missing`) return !1;
            let n = g();
            return l != null && n?.id === l.id && n?.normalizedAccountUserId === l.normalizedAccountUserId && $.setModalError(E, `email_required`), !0
        },
        k = () => {
            $.setIsLoading(!1)
        },
        A = async () => {
            try {
                let e = t.sentinelFlow ? await ce(t.sentinelFlow) : void 0,
                    n = await x.mutateAsync({
                        requestBody: {
                            campaign_id: t.campaignId,
                            benefit_kind: `codex_credits`
                        },
                        additionalHeaders: e
                    });
                return m && n.redirect_to && p(n.redirect_to), n
            } catch (e) {
                let t = e instanceof s && e.code === `student_benefit_sentinel_blocked`;
                $.setModalError(t ? w(e) ?? e.message : E, t ? `verification` : `generic`), X.logError(`applyDiscount`);
                return
            } finally {
                k()
            }
        }, j = async e => {
            try {
                let n = t.sentinelFlow ?? (t.campaignId === `student_chatgpt_plus_discount_2026` ? `chatgpt_checkout` : void 0),
                    r = n ? await (n === `chatgpt_checkout` ? ce : T)(n) : void 0,
                    i = await x.mutateAsync({
                        requestBody: {
                            campaign_id: t.campaignId,
                            benefit_kind: `subscription_discount`,
                            account_id: l?.id ?? ``,
                            updated_plan: `chatgptplusplan`,
                            ...e == null ? {} : {
                                go_upgrade_offer: e
                            }
                        },
                        additionalHeaders: r
                    });
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && l?.isPersonalAccount() && typeof l.normalizedAccountUserId == `string` && Ce(`enrollment_completed`, {
                        billingPath: i.billing_path ?? `existing_plus`,
                        identity: {
                            accountId: l.id,
                            accountUserId: l.normalizedAccountUserId
                        }
                    }), t.campaignId === `student_chatgpt_plus_discount_2026` && l != null) try {
                    if (await y(d, l.id) == null) return window.location.reload(), i
                } catch {
                    return window.location.reload(), i
                }
                return m && p(H()), i
            } catch (e) {
                if (D(e)) return;
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && e instanceof s) {
                    let t = g();
                    if (t?.id !== l?.id || t?.normalizedAccountUserId !== l?.normalizedAccountUserId) return;
                    if (e.code === `student_go_upgrade_confirmation_required` && l != null && typeof l.normalizedAccountUserId == `string`) {
                        let t = Ze.safeParse(e.detail?.go_upgrade_offer);
                        if (t.success && t.data.renews_at > t.data.quoted_at) {
                            $.setGoUpgradeOffer({
                                offer: t.data,
                                accountId: l.id,
                                accountUserId: l.normalizedAccountUserId
                            });
                            return
                        }
                    }
                    if (e.code === `student_go_upgrade_unavailable`) {
                        $.setModalError(E, `go_upgrade_unavailable`);
                        return
                    }
                    if (e.code === `student_subscription_discount_conflict`) {
                        $.setModalError(E, `discount_conflict`), X.logError(`applyDiscount`);
                        return
                    }
                }
                let n = e instanceof s && e.code === `student_benefit_sentinel_blocked`;
                $.setModalError(n ? w(e) ?? e.message : E, n ? `verification` : `generic`), X.logError(`applyDiscount`)
            } finally {
                k()
            }
        }, P = async n => {
            try {
                if (!r) throw Error(`Student promotion checkout details are unavailable`);
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && t.landingPath !== `/students`) {
                    let s = new URL(t.landingPath, window.location.origin),
                        c = n ?? e;
                    if (!l?.isPersonalAccount() || typeof l.normalizedAccountUserId != `string` || c.trim().length === 0) throw Error(`A verified personal account is required`);
                    let u = {
                            entry_point: ve.STUDENTS_2026,
                            plan_name: a.PLUS,
                            price_interval: `month`,
                            billing_details: r.billingDetails,
                            student_verification_id: c,
                            cancel_url: s.toString()
                        },
                        d = await o(u, {}),
                        f = g();
                    if (f == null || f.id !== l.id || f.normalizedAccountUserId !== l.normalizedAccountUserId) return;
                    Ie({
                        checkoutSessionId: le(d),
                        accountId: l.id,
                        accountUserId: l.normalizedAccountUserId,
                        returnPath: t.landingPath
                    }), Ce(`checkout_started`, {
                        billingPath: `free_checkout`,
                        identity: {
                            accountId: l.id,
                            accountUserId: l.normalizedAccountUserId
                        }
                    }), await i(d, {
                        checkoutFrom: he.STUDENTS,
                        checkoutPayload: u,
                        reloadDocument: !0,
                        state: {
                            [be]: {
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
                if (D(e)) return;
                $.setModalError(E), X.logError(`checkout`)
            } finally {
                k()
            }
        };
    return Object.assign((e, n) => {
        if (t.campaignId === `student_chatgpt_plus_discount_2026` && Y(g())) {
            p(t.landingPath, {
                replace: !0
            });
            return
        }
        if (!(e != null && (t.campaignId !== `student_chatgpt_plus_discount_2026` || v !== `apply_subscription_discount`)) && !(C || b)) switch ($.setIsLoading(!0), $.clearModalError(), v) {
            case `codex_credits`:
                return A();
            case `apply_subscription_discount`:
                return j(e);
            case `redirect_to_checkout`:
                return P(n?.accountVerificationId)
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
    x(), Qe(), ee(), _e(), ne(), tt(), se(), ze(), de(), k(), Ae(), nt(), De(), Fe(), Le(), rt(), oe(), ue(), h(), S(), l(), R(), F(), P(), m(), f(), Z = j(b(() => ({
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
//# sourceMappingURL=d4df9516-ksl1274w6d8xmjkm.js.map