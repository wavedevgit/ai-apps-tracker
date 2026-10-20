import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Al as n,
    Ant as r,
    B4 as i,
    Fat as a,
    Hnt as o,
    L1 as s,
    V1 as c,
    X1 as l,
    Xnt as u,
    _nt as d,
    dit as ee,
    drt as f,
    gst as p,
    iat as m,
    j1 as h,
    jl as g,
    jnt as _,
    kat as v,
    knt as y,
    lrt as b,
    mst as x,
    nst as S,
    oat as C,
    rst as w,
    tct as T,
    uit as E,
    urt as D,
    ynt as O,
    z4 as k,
    zat as A
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    Fsn as te,
    Mn as ne,
    On as re,
    Pn as ie,
    Psn as ae,
    asn as oe,
    cln as se,
    csn as ce,
    gin as le,
    hin as H,
    hn as ue,
    i2t as de,
    jn as fe,
    lin as pe,
    pn as me,
    r2t as he,
    sln as ge,
    ssn as _e,
    vin as ve,
    wn as ye,
    yin as be
} from "./conversation-small-cy5f8pl0g26s86so.js";
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
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    a as Ie,
    i as Le
} from "./efd279b6-b90gmea5n9iovib1.js";
import {
    n as Re,
    t as ze
} from "./005e9d87-kevyeclwp7e537m6.js";

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
        Ke = z(), Ce(), Me(), xe(), E(), L(), K = t(F()), q = 1500, qe = 5, Je = 15e3, Ye = 5 * 6e4, J = 3e4
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
async function et(e, t, n, i) {
    let a = Te({
        referrer: typeof t.referrer == `string` ? t.referrer : void 0,
        planType: x.PLUS,
        entryPoint: `promotion_redirect`,
        location: typeof t.location == `string` ? t.location : void 0
    });
    d.logEvent(`Account Pay: Payment Checkout Clicked`, t, ...a ? [{
        eventId: a
    }] : []), o.logEvent(`chatgpt_account_payment_modal_upgrade_button_click`, x.PLUS, ...a ? [{
        unique_event_id: a
    }] : []);
    let s = {
            entry_point: se.REFERRAL_REDIRECT,
            plan_name: `chatgptplusplan`,
            billing_details: e,
            checkout_ui_mode: `hosted`,
            ...n && {
                student_verification_id: n
            },
            ...i && {
                veterans_verification_id: i
            }
        },
        c = await $e(s);
    if (c.url == null) throw Error(`Expected hosted promotion checkout response to have a URL`);
    let l;
    try {
        l = Ee({
            eventName: `chatgpt_account_payment_modal_navigating_to_checkout`,
            selectedPlan: x.PLUS
        })
    } catch {}
    d.logValueEventWithStatsig({
        segmentEventName: `Account Pay: Navigating to Payment Checkout`,
        statsigEventName: `chatgpt_account_payment_modal_navigating_to_checkout`,
        eventId: l,
        statsigValue: x.PLUS,
        data: {
            ...t,
            url: c.url
        },
        statsigMetadata: {
            url: c.url
        }
    }), le(c, {
        checkoutPayload: s
    }), n && y.setItem(r.CheckoutFrom, `students`), i && y.setItem(r.CheckoutFrom, `veterans`), await be(), window.location.href = c.url
}
var tt = e((() => {
    T(), ge(), ce(), H(), Pe(), we(), O(), _(), u()
}));

function Y(e) {
    return e != null && (e.planType === x.PRO || e.planType === x.PROMAX || e.planType === x.PROLITE) && e.isPersonalAccount() && e.hasPaidSubscription()
}
var nt = e((() => {
        T()
    })),
    X, rt = e((() => {
        O(), b(), X = {
            logDisabledAccess(e) {
                D.count(f.STUDENTS, `students.web.disabled`, {
                    reason: e
                })
            },
            logLandingPageImpression() {
                D.count(f.STUDENTS, `students.web.landingPageImpression`), d.logEvent(`Students: Landing Page Impression`)
            },
            logClickLoginButton(e) {
                D.count(f.STUDENTS, `students.web.clickLoginButton`, {
                    key: `source`,
                    value: e
                }), d.logEvent(`Students: Click Login Button`, {
                    source: e
                })
            },
            logClickVerifyButton(e) {
                D.count(f.STUDENTS, `students.web.clickVerifyButton`, {
                    key: `source`,
                    value: e
                }), d.logEvent(`Students: Click Verify Button`, {
                    source: e
                })
            },
            logClickCheckoutButton(e) {
                D.count(f.STUDENTS, `students.web.clickCheckoutButton`, {
                    key: `source`,
                    value: e
                }), d.logEvent(`Students: Click Checkout Button`, {
                    source: e
                })
            },
            logShowNeedsVerificationModal() {
                D.count(f.STUDENTS, `students.web.showNeedsVerificationModal`), d.logEvent(`Students: Show Needs Verification Modal`)
            },
            logShowVerifiedModal() {
                D.count(f.STUDENTS, `students.web.showVerifiedModal`), d.logEvent(`Students: Show Verified Modal`)
            },
            logError(e) {
                D.count(f.STUDENTS, `students.web.error`, {
                    key: `errorType`,
                    value: e
                })
            },
            logShowAnnouncementBanner() {
                D.count(f.STUDENTS, `students.web.showAnnouncementBanner`), d.logEvent(`Students: Show Announcement Banner`)
            },
            logClickAnnouncementBanner() {
                D.count(f.STUDENTS, `students.web.clickAnnouncementBanner`), d.logEvent(`Students: Click Announcement Banner`)
            },
            logCloseAnnouncementBanner() {
                D.count(f.STUDENTS, `students.web.closeAnnouncementBanner`), d.logEvent(`Students: Close Announcement Banner`)
            }
        }
    }));

function it(e, t, n, r = null) {
    let i = l(),
        a = B(),
        o = M(),
        s = I({
            mutationFn: e => {
                let t = i?.normalizedAccountUserId,
                    a = h(),
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
        c = i && he(i),
        u = n.blocksMobileStoreSubscribers && c;
    return async c => {
        if (n.campaignId === `student_chatgpt_plus_discount_2026` && Y(h())) {
            o(n.landingPath, {
                replace: !0
            });
            return
        }
        if (u) return;
        let l = () => n.campaignId === `student_chatgpt_plus_discount_2026` && h()?.id !== i?.id;
        $.clearModalError(), $.setIsLoading(!0);
        try {
            let a, o;
            if (c?.restart || r || !e || !t) {
                let {
                    verification_id: e,
                    account_verification_id: t
                } = await s.mutateAsync(c?.restart ?? !1);
                if (l()) return;
                a = e, o = t, re()
            } else a = e, o = t;
            if (n.campaignId === `student_chatgpt_plus_discount_2026`) {
                let e = new URL(`/students/verify`, window.location.origin);
                e.searchParams.set(`campaign`, je), r === `handshake` && e.searchParams.set(`partner_id`, r), window.location.href = ke(e.toString(), i?.isPersonalAccount() && i.normalizedAccountUserId != null ? {
                    accountId: i.id,
                    accountUserId: i.normalizedAccountUserId
                } : void 0)
            } else window.location.href = ot(n.sheerIdProgramId, `${window.location.origin}${ne(n.landingPath,ye)}`, a, o);
            $.setIsLoading(!1)
        } catch (e) {
            if (l()) return;
            if (c?.restart && n.campaignId === `student_chatgpt_plus_discount_2026` && e instanceof v && e.status === 409) {
                $.setIsLoading(!1), window.location.reload();
                return
            }
            X.logError(`verification`), m.addError(`Students: Failed verification: ${e}`), $.setIsLoading(!1), $.setModalError(a.formatMessage({
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
            prepareCheckoutSession: o
        } = ve(),
        s = R({
            queryKey: [`checkout-pricing-config`]
        }),
        u = l(),
        d = j(),
        ee = B(),
        f = M(),
        m = r?.navigateOnSuccess ?? !0,
        g = t.campaignId === `student_chatgpt_plus_discount_2026` && u?.planType === x.GO && u.hasPaidSubscription(),
        _ = u?.hasPaidSubscription() && u.isPlus(),
        y = fe(t.benefitKind, !!(_ || g)),
        b = y === `redirect_to_checkout` && i == null && s > 0,
        S = I({
            mutationFn: ({
                requestBody: e,
                additionalHeaders: t
            }) => W.grantBenefit(e, t)
        }),
        C = u && he(u),
        w = t.blocksMobileStoreSubscribers && C,
        T = ee.formatMessage({
            id: `vEh4Th`,
            defaultMessage: `We couldn't confirm your eligibility just yet. Please try again.`
        }),
        E = e => {
            if (t.campaignId !== `student_chatgpt_plus_discount_2026` || !(e instanceof v) || e.code !== `verified_email_required` && e.code !== `email_missing`) return !1;
            let n = h();
            return u != null && n?.id === u.id && n?.normalizedAccountUserId === u.normalizedAccountUserId && $.setModalError(T, `email_required`), !0
        },
        D = () => {
            $.setIsLoading(!1)
        },
        O = async () => {
            try {
                let e = t.sentinelFlow ? await ae(t.sentinelFlow) : void 0,
                    n = await S.mutateAsync({
                        requestBody: {
                            campaign_id: t.campaignId,
                            benefit_kind: `codex_credits`
                        },
                        additionalHeaders: e
                    });
                return m && n.redirect_to && f(n.redirect_to), n
            } catch (e) {
                let t = e instanceof v && e.code === `student_benefit_sentinel_blocked`;
                $.setModalError(t ? A(e) ?? e.message : T, t ? `verification` : `generic`), X.logError(`applyDiscount`);
                return
            } finally {
                D()
            }
        }, k = async e => {
            try {
                let r = t.sentinelFlow ?? (t.campaignId === `student_chatgpt_plus_discount_2026` ? `chatgpt_checkout` : void 0),
                    i = r ? await (r === `chatgpt_checkout` ? ae : n)(r) : void 0,
                    a = await S.mutateAsync({
                        requestBody: {
                            campaign_id: t.campaignId,
                            benefit_kind: `subscription_discount`,
                            account_id: u?.id ?? ``,
                            updated_plan: `chatgptplusplan`,
                            ...e == null ? {} : {
                                go_upgrade_offer: e
                            }
                        },
                        additionalHeaders: i
                    });
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && u?.isPersonalAccount() && typeof u.normalizedAccountUserId == `string` && Ae(`enrollment_completed`, {
                        billingPath: a.billing_path ?? `existing_plus`,
                        identity: {
                            accountId: u.id,
                            accountUserId: u.normalizedAccountUserId
                        }
                    }), t.campaignId === `student_chatgpt_plus_discount_2026` && u != null) try {
                    if (await c(d, u.id) == null) return window.location.reload(), a
                } catch {
                    return window.location.reload(), a
                }
                return m && f(V()), a
            } catch (e) {
                if (E(e)) return;
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && e instanceof v) {
                    let t = h();
                    if (t?.id !== u?.id || t?.normalizedAccountUserId !== u?.normalizedAccountUserId) return;
                    if (e.code === `student_go_upgrade_confirmation_required` && u != null && typeof u.normalizedAccountUserId == `string`) {
                        let t = Ze.safeParse(e.detail?.go_upgrade_offer);
                        if (t.success && t.data.renews_at > t.data.quoted_at) {
                            $.setGoUpgradeOffer({
                                offer: t.data,
                                accountId: u.id,
                                accountUserId: u.normalizedAccountUserId
                            });
                            return
                        }
                    }
                    if (e.code === `student_go_upgrade_unavailable`) {
                        $.setModalError(T, `go_upgrade_unavailable`);
                        return
                    }
                    if (e.code === `student_subscription_discount_conflict`) {
                        $.setModalError(T, `discount_conflict`), X.logError(`applyDiscount`);
                        return
                    }
                }
                let n = e instanceof v && e.code === `student_benefit_sentinel_blocked`;
                $.setModalError(n ? A(e) ?? e.message : T, n ? `verification` : `generic`), X.logError(`applyDiscount`)
            } finally {
                D()
            }
        }, N = async n => {
            try {
                if (!i) throw Error(`Student promotion checkout details are unavailable`);
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && t.landingPath !== `/students`) {
                    let r = new URL(t.landingPath, window.location.origin),
                        s = n ?? e;
                    if (!u?.isPersonalAccount() || typeof u.normalizedAccountUserId != `string` || s.trim().length === 0) throw Error(`A verified personal account is required`);
                    let c = {
                            entry_point: se.STUDENTS_2026,
                            plan_name: p.PLUS,
                            price_interval: `month`,
                            billing_details: i.billingDetails,
                            student_verification_id: s,
                            cancel_url: r.toString()
                        },
                        l = await o(c, {}),
                        d = h();
                    if (d == null || d.id !== u.id || d.normalizedAccountUserId !== u.normalizedAccountUserId) return;
                    Ie({
                        checkoutSessionId: _e(l),
                        accountId: u.id,
                        accountUserId: u.normalizedAccountUserId,
                        returnPath: t.landingPath
                    }), Ae(`checkout_started`, {
                        billingPath: `free_checkout`,
                        identity: {
                            accountId: u.id,
                            accountUserId: u.normalizedAccountUserId
                        }
                    }), await a(l, {
                        checkoutFrom: me.STUDENTS,
                        checkoutPayload: c,
                        reloadDocument: !0,
                        state: {
                            [pe]: {
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
                if (E(e)) return;
                $.setModalError(T), X.logError(`checkout`)
            } finally {
                D()
            }
        };
    return Object.assign((e, n) => {
        if (t.campaignId === `student_chatgpt_plus_discount_2026` && Y(h())) {
            f(t.landingPath, {
                replace: !0
            });
            return
        }
        if (!(e != null && (t.campaignId !== `student_chatgpt_plus_discount_2026` || y !== `apply_subscription_discount`)) && !(w || b)) switch ($.setIsLoading(!0), $.clearModalError(), y) {
            case `codex_credits`:
                return O();
            case `apply_subscription_discount`:
                return k(e);
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
    T(), Qe(), ge(), ce(), te(), tt(), H(), ze(), ue(), s(), Ce(), nt(), xe(), Se(), Le(), rt(), ie(), de(), C(), a(), g(), L(), P(), N(), w(), i(), Z = S(k(() => ({
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
//# sourceMappingURL=d4df9516-nwsl3yadbn8vwd0y.js.map