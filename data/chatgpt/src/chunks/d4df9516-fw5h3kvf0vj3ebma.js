import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as n,
    Btt as r,
    C1 as i,
    Dit as a,
    Eot as o,
    Htt as s,
    Lot as c,
    Mnt as l,
    Nnt as u,
    Nrt as d,
    Pnt as f,
    Prt as p,
    Qit as m,
    Qtt as h,
    Tot as g,
    cat as _,
    dl as v,
    dnt as y,
    ent as b,
    f4 as x,
    fl as S,
    i1 as C,
    iat as w,
    kit as T,
    m1 as E,
    p4 as D,
    u1 as O,
    wst as k,
    ynt as A,
    zot as ee
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as j,
    N as M,
    Pt as N,
    Rn as P,
    Vn as F,
    p as I,
    s as L,
    v as R,
    wn as z,
    zn as B
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    An as V,
    Kcn as te,
    Kon as ne,
    Mn as re,
    On as ie,
    Pn as ae,
    Won as oe,
    Yrn as se,
    ain as ce,
    bsn as le,
    hn as ue,
    iin as de,
    jn as fe,
    l2t as pe,
    nin as me,
    pn as he,
    qcn as ge,
    qon as _e,
    tin as ve,
    u2t as ye,
    wn as be,
    ysn as xe
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    BS as H,
    FS as Se,
    Gn as Ce,
    Jn as we,
    Kn as Te,
    PS as U,
    Un as Ee,
    Wn as De,
    Yn as Oe,
    a_ as ke,
    dS as Ae,
    e_ as W,
    g_ as je,
    i_ as Me,
    l_ as Ne,
    m_ as Pe,
    o_ as Fe,
    t_ as Ie
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    a as Le,
    i as Re
} from "./efd279b6-b90gmea5n9iovib1.js";
import {
    n as ze,
    t as Be
} from "./005e9d87-gp8vnqi7y5bggbwa.js";

function Ve(e) {
    return e ?? performance.now() + Xe
}

function He(e) {
    return e?.enrollment_step === `none` && e.verification_status === `pending`
}

function Ue(e) {
    if (typeof e != `object` || !e || Array.isArray(e)) return !1;
    if (!(`metadata` in e) || e.metadata == null) return !0;
    let t = e.metadata;
    if (typeof t != `object` || !t || Array.isArray(t) || !(`verification_id` in t) || typeof t.verification_id != `string` || t.verification_id.trim() === `` || !(`account_verification_id` in t) || typeof t.account_verification_id != `string` || t.account_verification_id.trim() === `` || !(`enrollment_step` in t) || !(`verification_status` in t)) return !1;
    let n = t.enrollment_step,
        r = t.verification_status;
    return `partner_id` in t && t.partner_id !== null && typeof t.partner_id != `string` ? !1 : (n === `none` || n === `verified` || n === `enrolled` || n === `error`) && (r === `none` || r === `pending` || r === `success` || r === `error`)
}

function We(e) {
    for (let [t, n] of e) window.clearTimeout(n), t.abort();
    e.clear()
}
async function Ge(e, t) {
    let n = new AbortController,
        r = new Promise((e, r) => {
            let i = window.setTimeout(() => {
                n.abort(), r(Error(`Student enrollment status request timed out`))
            }, Ye);
            t.set(n, i)
        });
    try {
        let t = await Promise.race([W.refreshEnrollmentStatus(e, n.signal), r]);
        if (!Ue(t)) throw Error(`Invalid student enrollment status response`);
        return t
    } finally {
        let e = t.get(n);
        e != null && (window.clearTimeout(e), t.delete(n))
    }
}

function Ke(e, t) {
    "use forget";
    let n = (0, qe.c)(44),
        r;
    n[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = p(), n[0] = r) : r = n[0];
    let i = !r,
        {
            isEnabled: a
        } = Oe(e),
        o = t?.enabled ?? !0,
        s = t?.shouldPollAfterSheerIdReturn ?? !1,
        c = t?.reportRefreshErrors ?? !1,
        l = t?.recoverPendingVerification === !0 && e.campaignId === `student_chatgpt_plus_discount_2026`,
        u = t?.refreshRequestId ?? 0,
        [d, f] = (0, G.useState)(null),
        [m, h] = (0, G.useState)(!1),
        g = (0, G.useRef)(!0),
        _ = (0, G.useRef)(0),
        v = (0, G.useRef)(u),
        y = (0, G.useRef)(null),
        b = (0, G.useRef)(null),
        x;
    n[1] === Symbol.for(`react.memo_cache_sentinel`) ? (x = new Map, n[1] = x) : x = n[1];
    let S = (0, G.useRef)(x),
        C = (0, G.useRef)(0),
        w = (0, G.useRef)(!0),
        T = (0, G.useRef)(o && a && !i),
        E = (t, n) => {
            let r = n !== void 0 && n;
            if (!w.current || !T.current || t !== C.current) return;
            r && (y.current = Ve(y.current));
            let i = r ? Math.min(K * 2 ** Math.min(_.current - 1, 5), q) : K,
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
        return c || l ? Ge(t, S.current) : W.refreshEnrollmentStatus(t)
    }, n[2] = l, n[3] = c, n[4] = D) : D = n[4];
    let O = I({
            mutationFn: D,
            onSuccess: (e, t) => {
                let {
                    generation: n
                } = t;
                if (!(!w.current || !T.current || n !== C.current)) {
                    if (_.current += 1, f(e.metadata ?? null), l && He(e.metadata ?? null)) {
                        h(!0), E(n, !0);
                        return
                    }
                    if (s && _.current < Je && (!e.metadata || e.metadata.enrollment_step === `none`)) {
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
                    if (l && He(d)) {
                        _.current += 1, E(n, !0);
                        return
                    }
                    j({
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
    let [A, ee] = (0, G.useState)(k), j = ee, M, N;
    n[7] === Symbol.for(`react.memo_cache_sentinel`) ? (M = () => {
        let e = S.current;
        return w.current = !0, () => {
            w.current = !1, T.current = !1, C.current += 1, g.current = !0, We(e), b.current != null && (window.clearTimeout(b.current), b.current = null)
        }
    }, N = [], n[7] = M, n[8] = N) : (M = n[7], N = n[8]), (0, G.useEffect)(M, N);
    let P;
    n[9] !== o || n[10] !== a || n[11] !== j ? (P = () => {
        let e = T.current;
        T.current = o && a && !i, T.current || (We(S.current), b.current != null && (window.clearTimeout(b.current), b.current = null), e && (C.current += 1, g.current = !0, _.current = 0, y.current = null, f(null), h(!1), j(i ? {
            name: `logged-out`
        } : {
            name: `loading`
        })))
    }, n[9] = o, n[10] = a, n[11] = j, n[12] = P) : P = n[12];
    let F;
    n[13] !== o || n[14] !== a ? (F = [o, a, i], n[13] = o, n[14] = a, n[15] = F) : F = n[15], (0, G.useEffect)(P, F);
    let L;
    n[16] !== o || n[17] !== d || n[18] !== a || n[19] !== l || n[20] !== O || n[21] !== u || n[22] !== e.campaignId ? (L = () => {
        v.current !== u && !O.isPending && document.visibilityState !== `hidden` && navigator.onLine && (v.current = u, l && (d == null || d.enrollment_step === `none`) && (b.current != null && (window.clearTimeout(b.current), b.current = null), g.current = !0, _.current = 0, y.current = null)), o && a && !i && g.current && (g.current = !1, O.mutate({
            campaignId: e.campaignId,
            generation: C.current
        }))
    }, n[16] = o, n[17] = d, n[18] = a, n[19] = l, n[20] = O, n[21] = u, n[22] = e.campaignId, n[23] = L) : L = n[23];
    let R;
    n[24] !== o || n[25] !== d || n[26] !== a || n[27] !== l || n[28] !== O || n[29] !== u || n[30] !== e ? (R = [o, e, a, i, O, u, l, d], n[24] = o, n[25] = d, n[26] = a, n[27] = l, n[28] = O, n[29] = u, n[30] = e, n[31] = R) : R = n[31], (0, G.useEffect)(L, R);
    let z;
    n[32] !== d || n[33] !== m || n[34] !== e.campaignId || n[35] !== j ? (z = () => {
        if (!i && m) {
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
    }, n[32] = d, n[33] = m, n[34] = e.campaignId, n[35] = j, n[36] = z) : z = n[36];
    let B;
    n[37] !== d || n[38] !== m || n[39] !== e.campaignId ? (B = [i, m, d, e.campaignId], n[37] = d, n[38] = m, n[39] = e.campaignId, n[40] = B) : B = n[40], (0, G.useEffect)(z, B);
    let V;
    return n[41] !== A || n[42] !== a ? (V = a ? A : {
        name: `coming-soon`
    }, n[41] = A, n[42] = a, n[43] = V) : V = n[43], V
}
var qe, G, K, Je, Ye, Xe, q, Ze = e((() => {
        qe = z(), je(), we(), Ie(), d(), L(), G = t(F()), K = 1500, Je = 5, Ye = 15e3, Xe = 5 * 6e4, q = 3e4
    })),
    Qe, $e = e((() => {
        Ae(), Qe = Se({
            subscription_id: H().min(1),
            source_price_id: H().min(1),
            target_price_id: H().min(1),
            monthly_price_minor: U().int().positive(),
            currency: H().regex(/^[a-z]{3}$/),
            quoted_at: U().int().positive(),
            renews_at: U().int().positive()
        })
    }));

function et(e) {
    return oe.getCheckoutLink(e)
}
async function tt(e, t, i, a) {
    let o = Te({
        referrer: typeof t.referrer == `string` ? t.referrer : void 0,
        planType: c.PLUS,
        entryPoint: `promotion_redirect`,
        location: typeof t.location == `string` ? t.location : void 0
    });
    r.logEvent(`Account Pay: Payment Checkout Clicked`, t, ...o ? [{
        eventId: o
    }] : []), y.logEvent(`chatgpt_account_payment_modal_upgrade_button_click`, c.PLUS, ...o ? [{
        unique_event_id: o
    }] : []);
    let s = {
            entry_point: ge.REFERRAL_REDIRECT,
            plan_name: `chatgptplusplan`,
            billing_details: e,
            checkout_ui_mode: `hosted`,
            ...i && {
                student_verification_id: i
            },
            ...a && {
                veterans_verification_id: a
            }
        },
        l = await et(s);
    if (l.url == null) throw Error(`Expected hosted promotion checkout response to have a URL`);
    let u;
    try {
        u = De({
            eventName: `chatgpt_account_payment_modal_navigating_to_checkout`,
            selectedPlan: c.PLUS
        })
    } catch {}
    r.logValueEventWithStatsig({
        segmentEventName: `Account Pay: Navigating to Payment Checkout`,
        statsigEventName: `chatgpt_account_payment_modal_navigating_to_checkout`,
        eventId: u,
        statsigValue: c.PLUS,
        data: {
            ...t,
            url: l.url
        },
        statsigMetadata: {
            url: l.url
        }
    }), me(l, {
        checkoutPayload: s
    }), i && h.setItem(n.CheckoutFrom, `students`), a && h.setItem(n.CheckoutFrom, `veterans`), await ce(), window.location.href = l.url
}
var nt = e((() => {
    k(), te(), _e(), ve(), Ce(), Ee(), s(), b(), A()
}));

function J(e) {
    return e != null && (e.planType === c.PRO || e.planType === c.PROMAX || e.planType === c.PROLITE) && e.isPersonalAccount() && e.hasPaidSubscription()
}
var rt = e((() => {
        k()
    })),
    Y, it = e((() => {
        s(), l(), Y = {
            logDisabledAccess(e) {
                u.count(f.STUDENTS, `students.web.disabled`, {
                    reason: e
                })
            },
            logLandingPageImpression() {
                u.count(f.STUDENTS, `students.web.landingPageImpression`), r.logEvent(`Students: Landing Page Impression`)
            },
            logClickLoginButton(e) {
                u.count(f.STUDENTS, `students.web.clickLoginButton`, {
                    key: `source`,
                    value: e
                }), r.logEvent(`Students: Click Login Button`, {
                    source: e
                })
            },
            logClickVerifyButton(e) {
                u.count(f.STUDENTS, `students.web.clickVerifyButton`, {
                    key: `source`,
                    value: e
                }), r.logEvent(`Students: Click Verify Button`, {
                    source: e
                })
            },
            logClickCheckoutButton(e) {
                u.count(f.STUDENTS, `students.web.clickCheckoutButton`, {
                    key: `source`,
                    value: e
                }), r.logEvent(`Students: Click Checkout Button`, {
                    source: e
                })
            },
            logShowNeedsVerificationModal() {
                u.count(f.STUDENTS, `students.web.showNeedsVerificationModal`), r.logEvent(`Students: Show Needs Verification Modal`)
            },
            logShowVerifiedModal() {
                u.count(f.STUDENTS, `students.web.showVerifiedModal`), r.logEvent(`Students: Show Verified Modal`)
            },
            logError(e) {
                u.count(f.STUDENTS, `students.web.error`, {
                    key: `errorType`,
                    value: e
                })
            },
            logShowAnnouncementBanner() {
                u.count(f.STUDENTS, `students.web.showAnnouncementBanner`), r.logEvent(`Students: Show Announcement Banner`)
            },
            logClickAnnouncementBanner() {
                u.count(f.STUDENTS, `students.web.clickAnnouncementBanner`), r.logEvent(`Students: Click Announcement Banner`)
            },
            logCloseAnnouncementBanner() {
                u.count(f.STUDENTS, `students.web.closeAnnouncementBanner`), r.logEvent(`Students: Close Announcement Banner`)
            }
        }
    }));

function at(e, t, n, r = null) {
    let o = i(),
        s = B(),
        c = N(),
        l = I({
            mutationFn: e => {
                let t = o?.normalizedAccountUserId,
                    i = C(),
                    a = n.campaignId === `student_chatgpt_plus_discount_2026` && o?.isPersonalAccount() && typeof t == `string` && i?.id === o.id && i.normalizedAccountUserId === t ? Me({
                        accountId: o.id,
                        accountUserId: t
                    }) : null,
                    s = {
                        campaign_id: n.campaignId,
                        ...r ? {
                            partner_id: r
                        } : {},
                        ...a == null ? {} : {
                            attribution: a
                        }
                    };
                return e ? W.createVerification(s, {
                    restart: !0
                }) : W.createVerification(s)
            }
        }),
        u = o && pe(o),
        d = n.blocksMobileStoreSubscribers && u;
    return async i => {
        if (n.campaignId === `student_chatgpt_plus_discount_2026` && J(C())) {
            c(n.landingPath, {
                replace: !0
            });
            return
        }
        if (d) return;
        let u = () => n.campaignId === `student_chatgpt_plus_discount_2026` && C()?.id !== o?.id;
        $.clearModalError(), $.setIsLoading(!0);
        try {
            let a, s;
            if (i?.restart || r || !e || !t) {
                let {
                    verification_id: e,
                    account_verification_id: t
                } = await l.mutateAsync(i?.restart ?? !1);
                if (u()) return;
                a = e, s = t, ie()
            } else a = e, s = t;
            if (n.campaignId === `student_chatgpt_plus_discount_2026`) {
                let e = new URL(`/students/verify`, window.location.origin);
                e.searchParams.set(`campaign`, Pe), r === `handshake` && e.searchParams.set(`partner_id`, r), window.location.href = ke(e.toString(), o?.isPersonalAccount() && o.normalizedAccountUserId != null ? {
                    accountId: o.id,
                    accountUserId: o.normalizedAccountUserId
                } : void 0)
            } else window.location.href = X(n.sheerIdProgramId, `${window.location.origin}${re(n.landingPath,be)}`, a, s);
            $.setIsLoading(!1)
        } catch (e) {
            if (u()) return;
            if (i?.restart && n.campaignId === `student_chatgpt_plus_discount_2026` && e instanceof m && e.status === 409) {
                $.setIsLoading(!1), window.location.reload();
                return
            }
            Y.logError(`verification`), a.addError(`Students: Failed verification: ${e}`), $.setIsLoading(!1), $.setModalError(s.formatMessage({
                id: `nWt7rd`,
                defaultMessage: `We couldn't open student verification right now. Please try again.`
            }))
        }
    }
}

function ot(e, t, n) {
    let r = ze(),
        {
            navigateToCheckout: a,
            prepareCheckoutSession: o
        } = de(),
        s = R({
            queryKey: [`checkout-pricing-config`]
        }),
        l = i(),
        u = M(),
        d = B(),
        f = N(),
        p = n?.navigateOnSuccess ?? !0,
        h = t.campaignId === `student_chatgpt_plus_discount_2026` && l?.planType === c.GO && l.hasPaidSubscription(),
        g = l?.hasPaidSubscription() && l.isPlus(),
        y = fe(t.benefitKind, !!(g || h)),
        b = y === `redirect_to_checkout` && r == null && s > 0,
        x = I({
            mutationFn: ({
                requestBody: e,
                additionalHeaders: t
            }) => W.grantBenefit(e, t)
        }),
        S = l && pe(l),
        w = t.blocksMobileStoreSubscribers && S,
        T = d.formatMessage({
            id: `vEh4Th`,
            defaultMessage: `We couldn't confirm your eligibility just yet. Please try again.`
        }),
        D = e => {
            if (t.campaignId !== `student_chatgpt_plus_discount_2026` || !(e instanceof m) || e.code !== `verified_email_required` && e.code !== `email_missing`) return !1;
            let n = C();
            return l != null && n?.id === l.id && n?.normalizedAccountUserId === l.normalizedAccountUserId && $.setModalError(T, `email_required`), !0
        },
        O = () => {
            $.setIsLoading(!1)
        },
        k = async () => {
            try {
                let e = t.sentinelFlow ? await xe(t.sentinelFlow) : void 0,
                    n = await x.mutateAsync({
                        requestBody: {
                            campaign_id: t.campaignId,
                            benefit_kind: `codex_credits`
                        },
                        additionalHeaders: e
                    });
                return p && n.redirect_to && f(n.redirect_to), n
            } catch (e) {
                let t = e instanceof m && e.code === `student_benefit_sentinel_blocked`;
                $.setModalError(t ? _(e) ?? e.message : T, t ? `verification` : `generic`), Y.logError(`applyDiscount`);
                return
            } finally {
                O()
            }
        }, A = async e => {
            try {
                let n = t.sentinelFlow ?? (t.campaignId === `student_chatgpt_plus_discount_2026` ? `chatgpt_checkout` : void 0),
                    r = n ? await (n === `chatgpt_checkout` ? xe : v)(n) : void 0,
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
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && l?.isPersonalAccount() && typeof l.normalizedAccountUserId == `string` && Ne(`enrollment_completed`, {
                        billingPath: i.billing_path ?? `existing_plus`,
                        identity: {
                            accountId: l.id,
                            accountUserId: l.normalizedAccountUserId
                        }
                    }), t.campaignId === `student_chatgpt_plus_discount_2026` && l != null) try {
                    if (await E(u, l.id) == null) return window.location.reload(), i
                } catch {
                    return window.location.reload(), i
                }
                return p && f(V()), i
            } catch (e) {
                if (D(e)) return;
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && e instanceof m) {
                    let t = C();
                    if (t?.id !== l?.id || t?.normalizedAccountUserId !== l?.normalizedAccountUserId) return;
                    if (e.code === `student_go_upgrade_confirmation_required` && l != null && typeof l.normalizedAccountUserId == `string`) {
                        let t = Qe.safeParse(e.detail?.go_upgrade_offer);
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
                        $.setModalError(T, `go_upgrade_unavailable`);
                        return
                    }
                    if (e.code === `student_subscription_discount_conflict`) {
                        $.setModalError(T, `discount_conflict`), Y.logError(`applyDiscount`);
                        return
                    }
                }
                let n = e instanceof m && e.code === `student_benefit_sentinel_blocked`;
                $.setModalError(n ? _(e) ?? e.message : T, n ? `verification` : `generic`), Y.logError(`applyDiscount`)
            } finally {
                O()
            }
        }, j = async n => {
            try {
                if (!r) throw Error(`Student promotion checkout details are unavailable`);
                if (t.campaignId === `student_chatgpt_plus_discount_2026` && t.landingPath !== `/students`) {
                    let i = new URL(t.landingPath, window.location.origin),
                        s = n ?? e;
                    if (!l?.isPersonalAccount() || typeof l.normalizedAccountUserId != `string` || s.trim().length === 0) throw Error(`A verified personal account is required`);
                    let c = {
                            entry_point: ge.STUDENTS_2026,
                            plan_name: ee.PLUS,
                            price_interval: `month`,
                            billing_details: r.billingDetails,
                            student_verification_id: s,
                            cancel_url: i.toString()
                        },
                        u = await o(c, {}),
                        d = C();
                    if (d == null || d.id !== l.id || d.normalizedAccountUserId !== l.normalizedAccountUserId) return;
                    Le({
                        checkoutSessionId: ne(u),
                        accountId: l.id,
                        accountUserId: l.normalizedAccountUserId,
                        returnPath: t.landingPath
                    }), Ne(`checkout_started`, {
                        billingPath: `free_checkout`,
                        identity: {
                            accountId: l.id,
                            accountUserId: l.normalizedAccountUserId
                        }
                    }), await a(u, {
                        checkoutFrom: he.STUDENTS,
                        checkoutPayload: c,
                        reloadDocument: !0,
                        state: {
                            [se]: {
                                pathname: i.pathname,
                                search: i.search,
                                hash: i.hash
                            }
                        }
                    });
                    return
                }
                await tt(r.billingDetails, r.plusAnalyticsParams, e)
            } catch (e) {
                if (D(e)) return;
                $.setModalError(T), Y.logError(`checkout`)
            } finally {
                O()
            }
        };
    return Object.assign((e, n) => {
        if (t.campaignId === `student_chatgpt_plus_discount_2026` && J(C())) {
            f(t.landingPath, {
                replace: !0
            });
            return
        }
        if (!(e != null && (t.campaignId !== `student_chatgpt_plus_discount_2026` || y !== `apply_subscription_discount`)) && !(w || b)) switch ($.setIsLoading(!0), $.clearModalError(), y) {
            case `codex_credits`:
                return k();
            case `apply_subscription_discount`:
                return A(e);
            case `redirect_to_checkout`:
                return j(n?.accountVerificationId)
        }
    }, {
        isCheckoutLoading: b
    })
}

function X(e, t, n, r) {
    let i = `https://services.sheerid.com/verify/${e}/`,
        a = new URL(i);
    return a.searchParams.set(`verificationId`, n), a.searchParams.set(`redirectUrl`, t), a.searchParams.set(`accountVerificationId`, r), a.searchParams.set(`externalUserId`, r), a.toString()
}
var Z, Q, $, st = e((() => {
    k(), $e(), te(), _e(), le(), nt(), ve(), Be(), ue(), O(), je(), rt(), Ie(), Fe(), Re(), it(), ae(), ye(), T(), w(), S(), L(), P(), j(), o(), D(), Z = g(x(() => ({
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
    Z as a, it as c, Ze as d, Ke as f, ot as i, rt as l, X as n, at as o, st as r, Y as s, $ as t, J as u
};
//# sourceMappingURL=d4df9516-fw5h3kvf0vj3ebma.js.map