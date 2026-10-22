import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cat as n,
    Dit as r,
    Drt as i,
    Ert as a,
    Int as o,
    Jnt as s,
    Kat as c,
    Knt as l,
    Ml as u,
    Nst as d,
    Oit as f,
    Ort as p,
    Pnt as m,
    Q4 as h,
    Qat as g,
    V1 as _,
    Z1 as v,
    Z4 as y,
    art as b,
    bst as x,
    jl as S,
    jst as C,
    not as w,
    o0 as T,
    prt as E,
    q1 as D,
    qnt as O,
    vct as k,
    xat as A,
    yst as j
} from "./4813494d-itnrgnth03y1sm9d.js";
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
    $0t as H,
    An as ee,
    Mn as te,
    Nsn as ne,
    On as re,
    Pn as ie,
    Psn as ae,
    _in as oe,
    cin as se,
    e2t as ce,
    hin as le,
    hn as ue,
    isn as de,
    jn as fe,
    min as pe,
    oln as me,
    osn as he,
    pn as ge,
    sln as _e,
    ssn as ve,
    vin as ye,
    wn as be
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Gn as xe,
    Hg as Se,
    Jn as Ce,
    Kn as we,
    Lg as Te,
    Ng as U,
    Pg as Ee,
    Px as De,
    Rg as Oe,
    Xn as ke,
    Yg as Ae,
    Zn as je,
    iS as Me,
    lS as W,
    qg as Ne,
    qn as Pe,
    rS as G,
    zg as Fe
} from "./c2675c8c-d62p1sdq1sy52umm.js";
import {
    a as Ie,
    i as Le
} from "./efd279b6-b90gmea5n9iovib1.js";
import {
    n as Re,
    t as ze
} from "./005e9d87-gj05skds3ukxkhgm.js";

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
    n[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = f(), n[0] = r) : r = n[0];
    let i = !r,
        {
            isEnabled: a
        } = je(e),
        o = t?.enabled ?? !0,
        s = t?.shouldPollAfterSheerIdReturn ?? !1,
        c = t?.reportRefreshErrors ?? !1,
        l = t?.recoverPendingVerification === !0 && e.campaignId === `student_chatgpt_plus_discount_2026`,
        u = t?.refreshRequestId ?? 0,
        [d, p] = (0, K.useState)(null),
        [m, h] = (0, K.useState)(!1),
        g = (0, K.useRef)(!0),
        _ = (0, K.useRef)(0),
        v = (0, K.useRef)(u),
        y = (0, K.useRef)(null),
        b = (0, K.useRef)(null),
        x;
    n[1] === Symbol.for(`react.memo_cache_sentinel`) ? (x = new Map, n[1] = x) : x = n[1];
    let S = (0, K.useRef)(x),
        C = (0, K.useRef)(0),
        w = (0, K.useRef)(!0),
        T = (0, K.useRef)(o && a && !i),
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
    n[2] !== l || n[3] !== c ? (D = e => {
        let {
            campaignId: t
        } = e;
        return c || l ? We(t, S.current) : U.refreshEnrollmentStatus(t)
    }, n[2] = l, n[3] = c, n[4] = D) : D = n[4];
    let O = L({
            mutationFn: D,
            onSuccess: (e, t) => {
                let {
                    generation: n
                } = t;
                if (!(!w.current || !T.current || n !== C.current)) {
                    if (_.current += 1, p(e.metadata ?? null), l && Ve(e.metadata ?? null)) {
                        h(!0), E(n, !0);
                        return
                    }
                    if (s && _.current < qe && (!e.metadata || e.metadata.enrollment_step === `none`)) {
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
                if (w.current && T.current && n === C.current && (c || l)) {
                    if (l && Ve(d)) {
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
            w.current = !1, T.current = !1, C.current += 1, g.current = !0, Ue(e), b.current != null && (window.clearTimeout(b.current), b.current = null)
        }
    }, P = [], n[7] = N, n[8] = P) : (N = n[7], P = n[8]), (0, K.useEffect)(N, P);
    let F;
    n[9] !== o || n[10] !== a || n[11] !== M ? (F = () => {
        let e = T.current;
        T.current = o && a && !i, T.current || (Ue(S.current), b.current != null && (window.clearTimeout(b.current), b.current = null), e && (C.current += 1, g.current = !0, _.current = 0, y.current = null, p(null), h(!1), M(i ? {
            name: `logged-out`
        } : {
            name: `loading`
        })))
    }, n[9] = o, n[10] = a, n[11] = M, n[12] = F) : F = n[12];
    let I;
    n[13] !== o || n[14] !== a ? (I = [o, a, i], n[13] = o, n[14] = a, n[15] = I) : I = n[15], (0, K.useEffect)(F, I);
    let R;
    n[16] !== o || n[17] !== d || n[18] !== a || n[19] !== l || n[20] !== O || n[21] !== u || n[22] !== e.campaignId ? (R = () => {
        v.current !== u && !O.isPending && document.visibilityState !== `hidden` && navigator.onLine && (v.current = u, l && (d == null || d.enrollment_step === `none`) && (b.current != null && (window.clearTimeout(b.current), b.current = null), g.current = !0, _.current = 0, y.current = null)), o && a && !i && g.current && (g.current = !1, O.mutate({
            campaignId: e.campaignId,
            generation: C.current
        }))
    }, n[16] = o, n[17] = d, n[18] = a, n[19] = l, n[20] = O, n[21] = u, n[22] = e.campaignId, n[23] = R) : R = n[23];
    let z;
    n[24] !== o || n[25] !== d || n[26] !== a || n[27] !== l || n[28] !== O || n[29] !== u || n[30] !== e ? (z = [o, e, a, i, O, u, l, d], n[24] = o, n[25] = d, n[26] = a, n[27] = l, n[28] = O, n[29] = u, n[30] = e, n[31] = z) : z = n[31], (0, K.useEffect)(R, z);
    let B;
    n[32] !== d || n[33] !== m || n[34] !== e.campaignId || n[35] !== M ? (B = () => {
        if (!i && m) {
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
    }, n[32] = d, n[33] = m, n[34] = e.campaignId, n[35] = M, n[36] = B) : B = n[36];
    let V;
    n[37] !== d || n[38] !== m || n[39] !== e.campaignId ? (V = [i, m, d, e.campaignId], n[37] = d, n[38] = m, n[39] = e.campaignId, n[40] = V) : V = n[40], (0, K.useEffect)(B, V);
    let H;
    return n[41] !== A || n[42] !== a ? (H = a ? A : {
        name: `coming-soon`
    }, n[41] = A, n[42] = a, n[43] = H) : H = n[43], H
}
var Ke, K, q, qe, Je, Ye, J, Xe = e((() => {
        Ke = B(), Ae(), ke(), Ee(), r(), R(), K = t(I()), q = 1500, qe = 5, Je = 15e3, Ye = 5 * 6e4, J = 3e4
    })),
    Ze, Qe = e((() => {
        De(), Ze = Me({
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
    return de.getCheckoutLink(e)
}
async function et(e, t, n, r) {
    let i = Ce({
        referrer: typeof t.referrer == `string` ? t.referrer : void 0,
        planType: C.PLUS,
        entryPoint: `promotion_redirect`,
        location: typeof t.location == `string` ? t.location : void 0
    });
    m.logEvent(`Account Pay: Payment Checkout Clicked`, t, ...i ? [{
        eventId: i
    }] : []), b.logEvent(`chatgpt_account_payment_modal_upgrade_button_click`, C.PLUS, ...i ? [{
        unique_event_id: i
    }] : []);
    let a = {
            entry_point: _e.REFERRAL_REDIRECT,
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
        s = we({
            eventName: `chatgpt_account_payment_modal_navigating_to_checkout`,
            selectedPlan: C.PLUS
        })
    } catch {}
    m.logValueEventWithStatsig({
        segmentEventName: `Account Pay: Navigating to Payment Checkout`,
        statsigEventName: `chatgpt_account_payment_modal_navigating_to_checkout`,
        eventId: s,
        statsigValue: C.PLUS,
        data: {
            ...t,
            url: o.url
        },
        statsigMetadata: {
            url: o.url
        }
    }), le(o, {
        checkoutPayload: a
    }), n && l.setItem(O.CheckoutFrom, `students`), r && l.setItem(O.CheckoutFrom, `veterans`), await ye(), window.location.href = o.url
}
var tt = e((() => {
    k(), me(), ve(), pe(), Pe(), xe(), o(), s(), E()
}));

function Y(e) {
    return e != null && (e.planType === C.PRO || e.planType === C.PROMAX || e.planType === C.PROLITE) && e.isPersonalAccount() && e.hasPaidSubscription()
}
var nt = e((() => {
        k()
    })),
    X, rt = e((() => {
        o(), a(), X = {
            logDisabledAccess(e) {
                i.count(p.STUDENTS, `students.web.disabled`, {
                    reason: e
                })
            },
            logLandingPageImpression() {
                i.count(p.STUDENTS, `students.web.landingPageImpression`), m.logEvent(`Students: Landing Page Impression`)
            },
            logClickLoginButton(e) {
                i.count(p.STUDENTS, `students.web.clickLoginButton`, {
                    key: `source`,
                    value: e
                }), m.logEvent(`Students: Click Login Button`, {
                    source: e
                })
            },
            logClickVerifyButton(e) {
                i.count(p.STUDENTS, `students.web.clickVerifyButton`, {
                    key: `source`,
                    value: e
                }), m.logEvent(`Students: Click Verify Button`, {
                    source: e
                })
            },
            logClickCheckoutButton(e) {
                i.count(p.STUDENTS, `students.web.clickCheckoutButton`, {
                    key: `source`,
                    value: e
                }), m.logEvent(`Students: Click Checkout Button`, {
                    source: e
                })
            },
            logShowNeedsVerificationModal() {
                i.count(p.STUDENTS, `students.web.showNeedsVerificationModal`), m.logEvent(`Students: Show Needs Verification Modal`)
            },
            logShowVerifiedModal() {
                i.count(p.STUDENTS, `students.web.showVerifiedModal`), m.logEvent(`Students: Show Verified Modal`)
            },
            logError(e) {
                i.count(p.STUDENTS, `students.web.error`, {
                    key: `errorType`,
                    value: e
                })
            },
            logShowAnnouncementBanner() {
                i.count(p.STUDENTS, `students.web.showAnnouncementBanner`), m.logEvent(`Students: Show Announcement Banner`)
            },
            logClickAnnouncementBanner() {
                i.count(p.STUDENTS, `students.web.clickAnnouncementBanner`), m.logEvent(`Students: Click Announcement Banner`)
            },
            logCloseAnnouncementBanner() {
                i.count(p.STUDENTS, `students.web.closeAnnouncementBanner`), m.logEvent(`Students: Close Announcement Banner`)
            }
        }
    }));

function it(e, t, n, r = null) {
    let i = T(),
        a = V(),
        o = N(),
        s = L({
            mutationFn: e => {
                let t = i?.normalizedAccountUserId,
                    a = _(),
                    o = n.campaignId === `student_chatgpt_plus_discount_2026` && i?.isPersonalAccount() && typeof t == `string` && a?.id === i.id && a.normalizedAccountUserId === t ? Te({
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
        l = i && H(i),
        u = n.blocksMobileStoreSubscribers && l;
    return async l => {
        if (n.campaignId === `student_chatgpt_plus_discount_2026` && Y(_())) {
            o(n.landingPath, {
                replace: !0
            });
            return
        }
        if (u) return;
        let d = () => n.campaignId === `student_chatgpt_plus_discount_2026` && _()?.id !== i?.id;
        $.clearModalError(), $.setIsLoading(!0);
        try {
            let a, o;
            if (l?.restart || r || !e || !t) {
                let {
                    verification_id: e,
                    account_verification_id: t
                } = await s.mutateAsync(l?.restart ?? !1);
                if (d()) return;
                a = e, o = t, re()
            } else a = e, o = t;
            if (n.campaignId === `student_chatgpt_plus_discount_2026`) {
                let e = new URL(`/students/verify`, window.location.origin);
                e.searchParams.set(`campaign`, Ne), r === `handshake` && e.searchParams.set(`partner_id`, r), window.location.href = Oe(e.toString(), i?.isPersonalAccount() && i.normalizedAccountUserId != null ? {
                    accountId: i.id,
                    accountUserId: i.normalizedAccountUserId
                } : void 0)
            } else window.location.href = ot(n.sheerIdProgramId, `${window.location.origin}${te(n.landingPath,be)}`, a, o);
            $.setIsLoading(!1)
        } catch (e) {
            if (d()) return;
            if (l?.restart && n.campaignId === `student_chatgpt_plus_discount_2026` && e instanceof c && e.status === 409) {
                $.setIsLoading(!1), window.location.reload();
                return
            }
            X.logError(`verification`), A.addError(`Students: Failed verification: ${e}`), $.setIsLoading(!1), $.setModalError(a.formatMessage({
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
        } = oe(),
        o = z({
            queryKey: [`checkout-pricing-config`]
        }),
        s = T(),
        l = M(),
        u = V(),
        f = N(),
        p = n?.navigateOnSuccess ?? !0,
        m = t.campaignId === `student_chatgpt_plus_discount_2026` && s?.planType === C.GO && s.hasPaidSubscription(),
        h = s?.hasPaidSubscription() && s.isPlus(),
        g = fe(t.benefitKind, !!(h || m)),
        y = g === `redirect_to_checkout` && r == null && o > 0,
        b = L({
            mutationFn: ({
                requestBody: e,
                additionalHeaders: t
            }) => U.grantBenefit(e, t)
        }),
        x = s && H(s),
        E = t.blocksMobileStoreSubscribers && x,
        D = u.formatMessage({
            id: `vEh4Th`,
            defaultMessage: `We couldn't confirm your eligibility just yet. Please try again.`
        }),
        O = e => {
            if (t.campaignId !== `student_chatgpt_plus_discount_2026` || !(e instanceof c) || e.code !== `verified_email_required` && e.code !== `email_missing`) return !1;
            let n = _();
            return s != null && n?.id === s.id && n?.normalizedAccountUserId === s.normalizedAccountUserId && $.setModalError(D, `email_required`), !0
        },
        k = () => {
            $.setIsLoading(!1)
        },
        A = async () => {
            try {
                let e = t.sentinelFlow ? await ne(t.sentinelFlow) : void 0,
                    n = await b.mutateAsync({
                        requestBody: {
                            campaign_id: t.campaignId,
                            benefit_kind: `codex_credits`
                        },
                        additionalHeaders: e
                    });
                return p && n.redirect_to && f(n.redirect_to), n
            } catch (e) {
                let t = e instanceof c && e.code === `student_benefit_sentinel_blocked`;
                $.setModalError(t ? w(e) ?? e.message : D, t ? `verification` : `generic`), X.logError(`applyDiscount`);
                return
            } finally {
                k()
            }
        }, j = async e => {
            try {
                let n = t.sentinelFlow ?? (t.campaignId === `student_chatgpt_plus_discount_2026` ? `chatgpt_checkout` : void 0),
                    r = n ? await (n === `chatgpt_checkout` ? ne : S)(n) : void 0,
                    i = await b.mutateAsync({
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
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && s?.isPersonalAccount() && typeof s.normalizedAccountUserId == `string` && Se(`enrollment_completed`, {
                        billingPath: i.billing_path ?? `existing_plus`,
                        identity: {
                            accountId: s.id,
                            accountUserId: s.normalizedAccountUserId
                        }
                    }), t.campaignId === `student_chatgpt_plus_discount_2026` && s != null) try {
                    if (await v(l, s.id) == null) return window.location.reload(), i
                } catch {
                    return window.location.reload(), i
                }
                return p && f(ee()), i
            } catch (e) {
                if (O(e)) return;
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && e instanceof c) {
                    let t = _();
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
                        $.setModalError(D, `go_upgrade_unavailable`);
                        return
                    }
                    if (e.code === `student_subscription_discount_conflict`) {
                        $.setModalError(D, `discount_conflict`), X.logError(`applyDiscount`);
                        return
                    }
                }
                let n = e instanceof c && e.code === `student_benefit_sentinel_blocked`;
                $.setModalError(n ? w(e) ?? e.message : D, n ? `verification` : `generic`), X.logError(`applyDiscount`)
            } finally {
                k()
            }
        }, P = async n => {
            try {
                if (!r) throw Error(`Student promotion checkout details are unavailable`);
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && t.landingPath !== `/students`) {
                    let o = new URL(t.landingPath, window.location.origin),
                        c = n ?? e;
                    if (!s?.isPersonalAccount() || typeof s.normalizedAccountUserId != `string` || c.trim().length === 0) throw Error(`A verified personal account is required`);
                    let l = {
                            entry_point: _e.STUDENTS_2026,
                            plan_name: d.PLUS,
                            price_interval: `month`,
                            billing_details: r.billingDetails,
                            student_verification_id: c,
                            cancel_url: o.toString()
                        },
                        u = await a(l, {}),
                        f = _();
                    if (f == null || f.id !== s.id || f.normalizedAccountUserId !== s.normalizedAccountUserId) return;
                    Ie({
                        checkoutSessionId: he(u),
                        accountId: s.id,
                        accountUserId: s.normalizedAccountUserId,
                        returnPath: t.landingPath
                    }), Se(`checkout_started`, {
                        billingPath: `free_checkout`,
                        identity: {
                            accountId: s.id,
                            accountUserId: s.normalizedAccountUserId
                        }
                    }), await i(u, {
                        checkoutFrom: ge.STUDENTS,
                        checkoutPayload: l,
                        reloadDocument: !0,
                        state: {
                            [se]: {
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
                if (O(e)) return;
                $.setModalError(D), X.logError(`checkout`)
            } finally {
                k()
            }
        };
    return Object.assign((e, n) => {
        if (t.campaignId === `student_chatgpt_plus_discount_2026` && Y(_())) {
            f(t.landingPath, {
                replace: !0
            });
            return
        }
        if (!(e != null && (t.campaignId !== `student_chatgpt_plus_discount_2026` || g !== `apply_subscription_discount`)) && !(E || y)) switch ($.setIsLoading(!0), $.clearModalError(), g) {
            case `codex_credits`:
                return A();
            case `apply_subscription_discount`:
                return j(e);
            case `redirect_to_checkout`:
                return P(n?.accountVerificationId)
        }
    }, {
        isCheckoutLoading: y
    })
}

function ot(e, t, n, r) {
    let i = `https://services.sheerid.com/verify/${e}/`,
        a = new URL(i);
    return a.searchParams.set(`verificationId`, n), a.searchParams.set(`redirectUrl`, t), a.searchParams.set(`accountVerificationId`, r), a.searchParams.set(`externalUserId`, r), a.toString()
}
var Z, Q, $, st = e((() => {
    k(), Qe(), me(), ve(), ae(), tt(), pe(), ze(), ue(), D(), Ae(), nt(), Ee(), Fe(), Le(), rt(), ie(), ce(), n(), g(), u(), R(), F(), P(), x(), h(), Z = j(y(() => ({
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
//# sourceMappingURL=d4df9516-pn8r3iehv2ak03ol.js.map