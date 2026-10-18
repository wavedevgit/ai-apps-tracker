import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $4 as n,
    $nt as r,
    $tt as i,
    A4 as a,
    AT as o,
    Ant as s,
    B6 as c,
    D4 as l,
    Dit as u,
    Lot as d,
    Mnt as f,
    Nnt as p,
    Pnt as m,
    Qtt as h,
    R4 as g,
    UL as _,
    WL as v,
    X$ as y,
    Xnt as b,
    Ynt as x,
    _nt as ee,
    dz as S,
    ent as te,
    fz as C,
    i5 as w,
    iN as ne,
    kT as T,
    kit as E,
    knt as re,
    n1 as D,
    s3 as O,
    tN as ie,
    u1 as ae,
    v4 as oe,
    wst as k,
    ynt as A,
    zot as se
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as j,
    At as ce,
    Bn as M,
    Ln as le,
    Nn as N,
    O as ue,
    Ot as de,
    Pt as fe,
    Rn as P,
    Ut as pe,
    Vn as me,
    at as he,
    jt as ge,
    s as _e,
    wn as F,
    zn as ve
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Aan as ye,
    Ian as be,
    Kcn as xe,
    Lan as Se,
    Man as Ce,
    Pon as we,
    Rin as I,
    Ron as L,
    Urn as Te,
    Won as Ee,
    Xin as De,
    _on as Oe,
    aln as ke,
    dan as Ae,
    eGn as R,
    gsn as je,
    man as Me,
    mon as Ne,
    msn as z,
    psn as Pe,
    qcn as Fe,
    qon as B,
    tin as Ie
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Ch as Le,
    Ed as Re,
    Mh as ze,
    Od as Be,
    Xm as Ve,
    Ym as V,
    _m as He,
    g_ as Ue,
    jh as We,
    u_ as Ge
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    C as Ke,
    a as qe
} from "./a4eef3c0-ip3ucad1hu328lch.js";
import {
    D as Je,
    E as Ye,
    O as Xe
} from "./65d375cd-nxvvdt34md2j2ldm.js";
import {
    n as Ze,
    t as Qe
} from "./88fdc6d5-ll9uc0l8qk4khbwe.js";
import {
    i as $e,
    t as et
} from "./101e3679-bozhwrevoydh79zk.js";
import {
    i as tt,
    n as nt
} from "./efd279b6-b90gmea5n9iovib1.js";
import {
    n as rt,
    t as H
} from "./e01b7597-j47o2d4xty6banjx.js";

function it(e) {
    "use forget";
    let t = (0, U.c)(25),
        {
            isErrorState: n,
            isWalletCoveredCheckout: r,
            isPendingCustomPaymentMethod: i,
            isPendingPaymentDelayed: a,
            onRetryCheckoutStatus: o,
            returnTo: s,
            showReturnAction: c
        } = e,
        l = r !== void 0 && r,
        u = i !== void 0 && i,
        d = a !== void 0 && a,
        f = c === void 0 ? n : c,
        p = ne();
    if (n) {
        let e;
        return t[0] !== p || t[1] !== s || t[2] !== f ? (e = (0, W.jsx)(Ne, {
            Link: he,
            returnTo: s,
            showReturnAction: f,
            isDarkMode: p
        }), t[0] = p, t[1] = s, t[2] = f, t[3] = e) : e = t[3], e
    }
    let m = !n && o != null,
        h = !n && !m && u && d,
        g;
    t[4] !== n || t[5] !== m || t[6] !== h ? (g = !n && !h && !m && (0, W.jsx)(S, {
        className: `icon-xl`
    }), t[4] = n, t[5] = m, t[6] = h, t[7] = g) : g = t[7];
    let _;
    t[8] !== u || t[9] !== l || t[10] !== m || t[11] !== h ? (_ = h ? (0, W.jsxs)(W.Fragment, {
        children: [(0, W.jsx)(`h1`, {
            className: `text-center text-sm font-semibold`,
            children: (0, W.jsx)(N, {
                id: `CheckoutVerifyRoute.pendingPaymentDelayedTitle`,
                defaultMessage: `Your payment is still processing`
            })
        }), (0, W.jsx)(`p`, {
            className: `text-muted-foreground text-center text-sm`,
            children: (0, W.jsx)(N, {
                id: `CheckoutVerifyRoute.pendingPaymentDelayedDescription`,
                defaultMessage: `We haven’t received a final confirmation yet.`
            })
        })]
    }) : (0, W.jsx)(`span`, {
        className: `text-muted-foreground text-center text-sm`,
        children: m ? (0, W.jsx)(N, {
            id: `CheckoutVerifyRoute.checkoutStatusUnavailable`,
            defaultMessage: `We couldn’t load your checkout status.`
        }) : u ? (0, W.jsx)(N, {
            ...G.pendingPayment
        }) : l ? (0, W.jsx)(N, {
            ...G.processingWallet
        }) : (0, W.jsx)(N, {
            ...Le.paymentProcessing
        })
    }), t[8] = u, t[9] = l, t[10] = m, t[11] = h, t[12] = _) : _ = t[12];
    let v;
    t[13] !== o || t[14] !== m ? (v = m && (0, W.jsx)(T, {
        color: `primary`,
        onClick: o,
        children: (0, W.jsx)(N, {
            id: `CheckoutVerifyRoute.retryCheckoutStatus`,
            defaultMessage: `Check status again`
        })
    }), t[13] = o, t[14] = m, t[15] = v) : v = t[15];
    let y;
    t[16] !== s || t[17] !== m || t[18] !== f ? (y = f && !m && (0, W.jsx)(T, {
        color: `primary`,
        as: `link`,
        to: s,
        children: (0, W.jsx)(N, {
            ...we.returnButtonText
        })
    }), t[16] = s, t[17] = m, t[18] = f, t[19] = y) : y = t[19];
    let b;
    return t[20] !== g || t[21] !== _ || t[22] !== v || t[23] !== y ? (b = (0, W.jsx)(`div`, {
        className: `flex h-screen flex-col p-4`,
        children: (0, W.jsx)(`div`, {
            className: `flex flex-1 items-center justify-center`,
            children: (0, W.jsxs)(`div`, {
                className: `flex flex-col items-center gap-3`,
                children: [g, _, v, y]
            })
        })
    }), t[20] = g, t[21] = _, t[22] = v, t[23] = y, t[24] = b) : b = t[24], b
}
var U, W, G, at = e((() => {
        U = F(), o(), He(), C(), ie(), L(), Oe(), P(), j(), W = M(), G = le({
            processingWallet: {
                id: `CheckoutVerifyRoute.processingWallet`,
                defaultMessage: `Processing`
            },
            pendingPayment: {
                id: `CheckoutVerifyRoute.pendingPayment`,
                defaultMessage: `Your payment is processing`
            }
        })
    })),
    K = e((() => {
        g()
    }));

function ot(e) {
    return e + 1
}
var q, st, ct, J, lt, Y, X, ut, Z, dt, ft, Q = e((() => {
    q = F(), I(), _(), te(), E(), _e(), st = t(me()), j(), De(), qe(), Ce(), B(), at(), R(), K(), Ie(), ct = M(), J = 2e3, lt = 60, Y = 12e4, X = [5e3, 1e4, 2e4, 3e4], ut = 500, Z = 2, dt = 3, ft = e => {
        "use forget";
        let t = (0, q.c)(45),
            {
                processorEntity: n,
                checkoutSessionId: r
            } = e,
            o = fe(),
            s = ge(),
            c = (0, st.useRef)(null),
            l = (0, st.useRef)(null),
            [d, f] = (0, st.useState)(`live`),
            [p, m] = (0, st.useState)(0),
            g;
        t[0] === r ? g = t[1] : (g = ke(r), t[0] = r, t[1] = g);
        let _ = g,
            y;
        t[2] !== r || t[3] !== n ? (y = [`checkoutSession`, n, r], t[2] = r, t[3] = n, t[4] = y) : y = t[4];
        let x;
        t[5] !== r || t[6] !== _ || t[7] !== n || t[8] !== p ? (x = async () => {
            let e = _ && p > 0 && p < lt - 1 ? `stored` : `live`,
                t = await Ee.fetchExistingCheckoutSession(n, r, void 0, e === `stored` ? {
                    payment_state_source: `stored`
                } : void 0);
            f(e);
            let i = t.credit_payment_state;
            return l.current == null && i != null && (i.payment_intent_status === `processing` || !_ && i.payment_status === `unpaid` && i.payment_intent_status === `succeeded`) && (l.current = Date.now()), m(ot), t
        }, t[5] = r, t[6] = _, t[7] = n, t[8] = p, t[9] = x) : x = t[9];
        let ee;
        t[10] !== _ || t[11] !== d || t[12] !== p ? (ee = e => {
            if (e.state.status === `error` || p >= lt) return !1;
            let t = e.state.data?.credit_payment_state;
            if (t == null || !(t.payment_intent_status === `processing` || _ && d === `stored` && t.payment_status === `unpaid` && t.payment_intent_status == null || !_ && t.payment_status === `unpaid` && t.payment_intent_status === `succeeded`)) return !1;
            if (_) return J;
            let n = l.current;
            if (n == null) return !1;
            let r = Y - (Date.now() - n);
            if (r <= 0) return !1;
            let i = X[Math.min(Math.max(p - 1, 0), X.length - 1)];
            return Math.min(i, r)
        }, t[10] = _, t[11] = d, t[12] = p, t[13] = ee) : ee = t[13];
        let S;
        t[14] !== _ || t[15] !== d || t[16] !== p ? (S = e => {
            if (e.state.status === `error` || p >= lt) return !1;
            let t = e.state.data?.credit_payment_state;
            return t == null || !_ && l.current != null && Date.now() - l.current >= Y ? !1 : t.payment_intent_status === `processing` || _ && d === `stored` && t.payment_status === `unpaid` && t.payment_intent_status == null || !_ && t.payment_status === `unpaid` && t.payment_intent_status === `succeeded`
        }, t[14] = _, t[15] = d, t[16] = p, t[17] = S) : S = t[17];
        let te;
        t[18] !== y || t[19] !== x || t[20] !== ee || t[21] !== S ? (te = {
            queryKey: y,
            queryFn: x,
            retry: Z,
            retryDelay: ut,
            refetchInterval: ee,
            refetchIntervalInBackground: !1,
            staleTime: 0,
            refetchOnMount: `always`,
            refetchOnWindowFocus: S,
            refetchOnReconnect: !1
        }, t[18] = y, t[19] = x, t[20] = ee, t[21] = S, t[22] = te) : te = t[22];
        let {
            data: C,
            error: w,
            isPending: ne,
            isFetching: T
        } = ue(te), E = C?.credit_payment_state, re;
        t[23] !== C || t[24] !== w || t[25] !== T || t[26] !== _ || t[27] !== ne || t[28] !== d || t[29] !== E || t[30] !== p ? (re = ne || T && p === 0 ? `loading` : w != null || E == null ? `unavailable` : C?.tag === `custom_checkout_session` && C.status === `expired` && E.payment_status === `unpaid` ? `failed` : E.payment_status === `unpaid` && (_ && d === `stored` && E.payment_intent_status == null || !_ && E.payment_intent_status === `succeeded`) ? `processing` : a(E), t[23] = C, t[24] = w, t[25] = T, t[26] = _, t[27] = ne, t[28] = d, t[29] = E, t[30] = p, t[31] = re) : re = t[31];
        let D = re,
            O = C?.tag === `hosted_checkout_session` && C.url == null || C?.tag === `custom_checkout_session` && C.status !== `open`,
            ie;
        if (t[32] === Symbol.for(`react.memo_cache_sentinel`)) {
            let e = h.getItem(i.CreditCheckoutRedirectPath);
            ie = typeof e == `string` && v(e) ? e : `/`, t[32] = ie
        } else ie = t[32];
        let ae = ie,
            k = D === `processing` && p >= (_ ? dt : 2),
            A = D === `unavailable` || O && (D === `failed` || D === `requires_action`),
            se, j;
        t[33] !== O || t[34] !== r || t[35] !== w || t[36] !== s.search || t[37] !== o || t[38] !== D || t[39] !== n ? (j = () => {
            if (!(D === `loading` || c.current === D)) {
                if (c.current = D, u.addAction(`checkout.verify.credit_payment_status`, {
                        checkout_session_id: r,
                        payment_outcome: D
                    }), D === `unavailable`) {
                    Ke(`checkout_verify`, {
                        processorEntity: n,
                        checkoutKind: oe.StandaloneCredit,
                        failureReason: `checkout_session_request_error`
                    }), w != null && u.addError(w, {
                        checkout_session_id: r
                    });
                    return
                }
                if (D !== `processing`) {
                    if (D === `succeeded`) {
                        let e = new URLSearchParams({
                            stripe_session_id: r,
                            processor_entity: n
                        });
                        o(b(`/payments/success-credit-purchase?${e}`, s.search), {
                            replace: !0
                        });
                        return
                    }
                    Ke(`checkout_verify`, {
                        processorEntity: n,
                        checkoutKind: oe.StandaloneCredit,
                        failureReason: `payment_failed`
                    }), !O && o(b(ye(n, r), s.search), {
                        replace: !0,
                        state: {
                            [Te]: r
                        }
                    })
                }
            }
        }, se = [O, r, w, s.search, o, D, n], t[33] = O, t[34] = r, t[35] = w, t[36] = s.search, t[37] = o, t[38] = D, t[39] = n, t[40] = se, t[41] = j) : (se = t[40], j = t[41]), (0, st.useEffect)(j, se);
        let ce = A || k,
            M;
        return t[42] !== A || t[43] !== ce ? (M = (0, ct.jsx)(it, {
            isErrorState: A,
            returnTo: ae,
            showReturnAction: ce
        }), t[42] = A, t[43] = ce, t[44] = M) : M = t[44], M
    }
}));

function pt({
    hasConditionalOfferResumeError: e,
    hasCustomPaymentMethodRequestError: t,
    hasUnsupportedCustomPaymentMethodStatus: n,
    hasCustomPaymentMethodFailedStatus: r,
    hasCheckoutSessionRequestError: i,
    hasExhaustedCheckoutSessionPolling: a,
    hasCheckoutSessionExpired: o
}) {
    return e ? `conditional_offer_resume_error` : t ? `custom_payment_method_request_error` : n ? `unsupported_custom_payment_method_status` : r ? `custom_payment_method_failed` : i ? `checkout_session_request_error` : a ? `checkout_session_polling_exhausted` : o ? `checkout_session_expired` : null
}

function mt(e) {
    "use forget";
    let t = (0, gt.c)(6),
        {
            checkoutSessionId: n
        } = e,
        r = w(y),
        i;
    t[0] === n ? i = t[1] : (i = () => Je(n), t[0] = n, t[1] = i);
    let [a] = (0, $.useState)(i), o = r?.id, s;
    return t[2] !== r || t[3] !== a || t[4] !== o ? (s = (0, _t.jsx)(ht, {
        currentAccount: r,
        shouldReturnToSubscriptionModal: a
    }, o), t[2] = r, t[3] = a, t[4] = o, t[5] = s) : s = t[5], s
}

function ht(e) {
    "use forget";
    let t = (0, gt.c)(199),
        {
            currentAccount: i,
            shouldReturnToSubscriptionModal: a
        } = e,
        {
            processorEntity: o,
            checkoutSessionId: c,
            planType: u,
            redirectResult: f,
            conditionalOfferPreflight: h
        } = ce(),
        g = ge(),
        _;
    t[0] === g.search ? _ = t[1] : (_ = new URLSearchParams(g.search).get(`wallet_covered`), t[0] = g.search, t[1] = _);
    let v = _ === `true`,
        y = fe(),
        b = de(`/payments/success-team`),
        S = (0, $.useRef)(!1),
        te = (0, $.useRef)(!1),
        C = (0, $.useRef)(null),
        w;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (w = new Set, t[2] = w) : w = t[2];
    let ne = (0, $.useRef)(w),
        T;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (T = {
        pollCount: 0,
        finished: !1
    }, t[3] = T) : T = t[3];
    let [E, re] = (0, $.useState)(T), [O, ie] = (0, $.useState)(!1), ae;
    t[4] !== c || t[5] !== g.search ? (ae = r(c, new URLSearchParams(g.search)), t[4] = c, t[5] = g.search, t[6] = ae) : ae = t[6];
    let k = ae,
        A;
    t[7] !== c || t[8] !== g.search ? (A = Pe(c, g.search), t[7] = c, t[8] = g.search, t[9] = A) : A = t[9];
    let j = A,
        M;
    if (t[10] !== c || t[11] !== k || t[12] !== j) {
        let e = x(k, new URLSearchParams);
        Me(c, e), j != null && e.set(je, j), M = e.toString(), t[10] = c, t[11] = k, t[12] = j, t[13] = M
    } else M = t[13];
    let le = M,
        N = le ? `?${le}` : ``,
        P = N ? `/${N}#pricing` : `/#pricing`,
        pe = !!f && !h && i == null,
        me;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (me = D(), t[14] = me) : me = t[14];
    let he = pe ? yt : !1,
        _e;
    t[15] !== pe || t[16] !== he ? (_e = {
        ...me,
        enabled: pe,
        refetchInterval: he
    }, t[15] = pe, t[16] = he, t[17] = _e) : _e = t[17], ue(_e);
    let F;
    t[18] !== c || t[19] !== f ? (F = [`continueCustomPaymentMethodFlow`, c, f], t[18] = c, t[19] = f, t[20] = F) : F = t[20];
    let ye;
    t[21] !== c || t[22] !== i || t[23] !== f ? (ye = () => {
        if (f == null || i == null) throw Error(`A redirect result and account are required`);
        let e = i.id;
        return Ee.continueCustomPaymentMethodFlow(c, {
            redirectResult: f
        }).then(t => ({
            accountId: e,
            response: t,
            error: null
        }), t => ({
            accountId: e,
            response: null,
            error: t
        }))
    }, t[21] = c, t[22] = i, t[23] = f, t[24] = ye) : ye = t[24];
    let be = !!f && !h && i != null,
        xe;
    t[25] !== F || t[26] !== ye || t[27] !== be ? (xe = {
        queryKey: F,
        queryFn: ye,
        enabled: be,
        retry: !1,
        staleTime: 1 / 0
    }, t[25] = F, t[26] = ye, t[27] = be, t[28] = xe) : xe = t[28];
    let {
        data: Ce
    } = ue(xe), we = Ce != null && Ce.accountId !== i?.id, I = we ? null : Ce?.response, L = we ? null : Ce?.error, De = ve(), Oe;
    t[29] !== c || t[30] !== o ? (Oe = [`resumeConditionalOfferPreflight`, o, c], t[29] = c, t[30] = o, t[31] = Oe) : Oe = t[31];
    let ke;
    t[32] !== c || t[33] !== De || t[34] !== o ? (ke = async () => {
        let e = (await Ee.fetchExistingCheckoutSession(o, c)).publishable_key;
        if (e == null) throw Error(`Conditional-offer preflight checkout is missing a Stripe publishable key`);
        let t = await Be(e, {
            locale: We(De.locale, `elements`, ee(`4048417348`).get(`enabled`, !1))
        });
        if (t == null) throw Error(`Stripe failed to load`);
        let n = await Ee.confirmCheckout({
            id: c
        }, {
            type: `conditional_offer_continuation`
        });
        if (n.status !== `success` || n.type !== `payment_intent` || n.conditional_offer_preflight !== !0 || n.client_secret == null) throw Error(`Conditional-offer preflight did not return a payment intent`);
        let r = await t.confirmPayment({
            clientSecret: n.client_secret,
            redirect: `if_required`
        });
        if (r.error != null) throw r.error;
        return !0
    }, t[32] = c, t[33] = De, t[34] = o, t[35] = ke) : ke = t[35];
    let Ae;
    t[36] !== h || t[37] !== Oe || t[38] !== ke ? (Ae = {
        queryKey: Oe,
        queryFn: ke,
        enabled: h,
        retry: !1,
        staleTime: 1 / 0
    }, t[36] = h, t[37] = Oe, t[38] = ke, t[39] = Ae) : Ae = t[39];
    let {
        error: R,
        isSuccess: Ne
    } = ue(Ae), z = I?.status === `pending`, B = z || I?.status === `success`, Ie, Le;
    t[40] !== B || t[41] !== O || t[42] !== E.finished ? (Ie = () => {
        if (!B || E.finished || O) return;
        let e = window.setTimeout(() => ie(!0), xt);
        return () => window.clearTimeout(e)
    }, Le = [B, O, E.finished], t[40] = B, t[41] = O, t[42] = E.finished, t[43] = Ie, t[44] = Le) : (Ie = t[43], Le = t[44]), (0, $.useEffect)(Ie, Le);
    let Re = I?.status === `success` && O,
        ze = !f && (!h || Ne) || B && !Re,
        V = I?.status === `requires_action`,
        He = !!L || V || I?.status === `failed` || !!R,
        Ue = a && He,
        qe = i?.id ?? `no-account`,
        Je;
    t[45] !== c || t[46] !== o || t[47] !== qe ? (Je = [`checkoutSession`, qe, o, c], t[45] = c, t[46] = o, t[47] = qe, t[48] = Je) : Je = t[48];
    let Ye;
    t[49] !== c || t[50] !== B || t[51] !== o ? (Ye = () => Ve(o, c).then(e => (re(t => ({
        pollCount: t.finished ? t.pollCount : t.pollCount + 1,
        finished: t.finished || e.checkout_session_id !== c || e.status === `complete` || e.status === `expired` || !B && t.pollCount >= St
    })), e)), t[49] = c, t[50] = B, t[51] = o, t[52] = Ye) : Ye = t[52];
    let Qe = ze && !E.finished ? B ? O ? bt : yt : vt : !1,
        $e = ze && !E.finished || Ue,
        tt;
    t[53] !== Je || t[54] !== Ye || t[55] !== Qe || t[56] !== $e ? (tt = {
        queryKey: Je,
        queryFn: Ye,
        refetchInterval: Qe,
        enabled: $e,
        throwOnError: !1
    }, t[53] = Je, t[54] = Ye, t[55] = Qe, t[56] = $e, t[57] = tt) : tt = t[57];
    let {
        data: H,
        error: U
    } = ue(tt), W = Re && H == null, G = a && H?.status === `open` && (He || !B && ze && E.finished), at;
    t[58] !== H?.plan_name || t[59] !== u ? (at = Ze(H?.plan_name) ?? u, t[58] = H?.plan_name, t[59] = u, t[60] = at) : at = t[60];
    let K = at,
        ot = H?.checkout_session_id ?? c,
        q = ot !== c,
        [st, ct] = (0, $.useState)(!1),
        J = q && H?.status === `open` && !st,
        lt = i?.id ?? `no-account`,
        Y;
    t[61] !== c || t[62] !== o || t[63] !== lt ? (Y = [`checkoutBeforePromoRecovery`, lt, o, c], t[61] = c, t[62] = o, t[63] = lt, t[64] = Y) : Y = t[64];
    let X;
    t[65] !== c || t[66] !== o ? (X = () => Ve(o, c, null), t[65] = c, t[66] = o, t[67] = X) : X = t[67];
    let ut;
    t[68] !== J || t[69] !== Y || t[70] !== X ? (ut = {
        queryKey: Y,
        queryFn: X,
        enabled: J,
        throwOnError: !1
    }, t[68] = J, t[69] = Y, t[70] = X, t[71] = ut) : ut = t[71];
    let {
        data: Z,
        error: dt
    } = ue(ut), ft;
    if (t[72] !== k || t[73] !== j || t[74] !== o || t[75] !== ot || t[76] !== K) {
        let e = x(k, new URLSearchParams({
            stripe_session_id: ot,
            plan_type: K,
            processor_entity: o
        }));
        j != null && e.set(je, j), ft = e.toString(), t[72] = k, t[73] = j, t[74] = o, t[75] = ot, t[76] = K, t[77] = ft
    } else ft = t[77];
    let Q = `?${ft}`,
        mt = i?.id,
        ht = i?.normalizedAccountUserId,
        Ct;
    t[78] !== c || t[79] !== mt || t[80] !== ht ? (Ct = nt({
        checkoutSessionId: c,
        accountId: mt,
        accountUserId: ht
    }), t[78] = c, t[79] = mt, t[80] = ht, t[81] = Ct) : Ct = t[81];
    let Tt = Ct,
        Et = !a && (H == null ? Tt != null && new URLSearchParams(g.search).get(`plan_type`) === d.PLUS : H.entry_point === Fe.STUDENTS_2026 && H.plan_name === se.PLUS),
        Dt = !B && ze && E.finished && !q && H?.status === `open`,
        Ot = z && U != null,
        kt = !!R,
        At = !!L,
        jt = I?.status === `failed`,
        Mt = !!U && (!B || W),
        Nt = Dt || W,
        Pt = H?.status === `expired`,
        Ft;
    t[82] !== V || t[83] !== kt || t[84] !== At || t[85] !== jt || t[86] !== Mt || t[87] !== Nt || t[88] !== Pt ? (Ft = pt({
        hasConditionalOfferResumeError: kt,
        hasCustomPaymentMethodRequestError: At,
        hasUnsupportedCustomPaymentMethodStatus: V,
        hasCustomPaymentMethodFailedStatus: jt,
        hasCheckoutSessionRequestError: Mt,
        hasExhaustedCheckoutSessionPolling: Nt,
        hasCheckoutSessionExpired: Pt
    }), t[82] = V, t[83] = kt, t[84] = At, t[85] = jt, t[86] = Mt, t[87] = Nt, t[88] = Pt, t[89] = Ft) : Ft = t[89];
    let It = Ft,
        Lt = Ue && H == null && U == null,
        Rt = He || U != null && !B || H?.status === `expired`,
        zt;
    t[90] !== H || t[91] !== Ot || t[92] !== z || t[93] !== o ? (zt = () => {
        if (!z) return;
        let e = (e, t) => {
            ne.current.has(e) || (ne.current.add(e), p.count(m.PAYMENTS, `checkout.custom_payment_method_pending`, {
                event: e,
                processor_entity: o,
                ...t == null ? {} : {
                    checkout_status: t
                }
            }))
        };
        e(`exposed`), H?.status === `complete` || H?.status === `expired` ? e(`read_only_resolved`, H.status) : Ot && e(`status_read_error`)
    }, t[90] = H, t[91] = Ot, t[92] = z, t[93] = o, t[94] = zt) : zt = t[94];
    let Bt = H?.status,
        Vt;
    t[95] !== Ot || t[96] !== z || t[97] !== o || t[98] !== Bt ? (Vt = [Bt, Ot, z, o], t[95] = Ot, t[96] = z, t[97] = o, t[98] = Bt, t[99] = Vt) : Vt = t[99], (0, $.useEffect)(zt, Vt);
    let Ht, Ut;
    t[100] !== c || t[101] !== k || t[102] !== Lt || t[103] !== o || t[104] !== K || t[105] !== It || t[106] !== a ? (Ht = () => {
        It == null || Lt || C.current === c || (C.current = c, Ke(`checkout_verify`, {
            checkoutSessionId: c,
            checkoutPlanType: K,
            processorEntity: o,
            isCheckoutModalEnabled: a,
            failureReason: It,
            sourceSearchParams: k
        }))
    }, Ut = [c, k, Lt, o, K, It, a], t[100] = c, t[101] = k, t[102] = Lt, t[103] = o, t[104] = K, t[105] = It, t[106] = a, t[107] = Ht, t[108] = Ut) : (Ht = t[107], Ut = t[108]), (0, $.useEffect)(Ht, Ut);
    let Wt;
    t[109] !== b || t[110] !== H || t[111] !== k || t[112] !== I?.status || t[113] !== y || t[114] !== Q || t[115] !== f || t[116] !== a ? (Wt = () => {
        f == null || I?.status !== `success` || H == null || H.status === `expired` || S.current || (S.current = !0, a && Xe(null), y(l(H, k, b) ?? {
            pathname: `/payments/success`,
            search: Q
        }))
    }, t[109] = b, t[110] = H, t[111] = k, t[112] = I?.status, t[113] = y, t[114] = Q, t[115] = f, t[116] = a, t[117] = Wt) : Wt = t[117];
    let Gt;
    t[118] !== b || t[119] !== H || t[120] !== c || t[121] !== k || t[122] !== I || t[123] !== y || t[124] !== Q || t[125] !== f || t[126] !== a ? (Gt = [b, H, c, k, I, y, Q, f, a], t[118] = b, t[119] = H, t[120] = c, t[121] = k, t[122] = I, t[123] = y, t[124] = Q, t[125] = f, t[126] = a, t[127] = Gt) : Gt = t[127], (0, $.useEffect)(Wt, Gt);
    let Kt;
    t[128] !== b || t[129] !== N || t[130] !== H || t[131] !== k || t[132] !== B || t[133] !== y || t[134] !== J || t[135] !== Q || t[136] !== o || t[137] !== E.finished || t[138] !== G || t[139] !== a ? (Kt = () => {
        !E.finished || S.current || G || J || (H?.status === `complete` ? (S.current = !0, a && Xe(null), y(l(H, k, b) ?? {
            pathname: `/payments/success`,
            search: Q
        })) : H?.status === `open` && !B && (S.current = !0, y(n(o, H.checkout_session_id, N, H.entry_point === Fe.PAYPAL_PROMO_CHECKOUT && Se()), {
            state: {
                [Te]: H.checkout_session_id
            }
        })))
    }, t[128] = b, t[129] = N, t[130] = H, t[131] = k, t[132] = B, t[133] = y, t[134] = J, t[135] = Q, t[136] = o, t[137] = E.finished, t[138] = G, t[139] = a, t[140] = Kt) : Kt = t[140];
    let qt;
    t[141] !== b || t[142] !== N || t[143] !== H || t[144] !== c || t[145] !== k || t[146] !== B || t[147] !== y || t[148] !== J || t[149] !== Q || t[150] !== o || t[151] !== q || t[152] !== E.finished || t[153] !== G || t[154] !== a ? (qt = [b, E.finished, H, c, o, y, Q, N, k, a, G, B, q, J], t[141] = b, t[142] = N, t[143] = H, t[144] = c, t[145] = k, t[146] = B, t[147] = y, t[148] = J, t[149] = Q, t[150] = o, t[151] = q, t[152] = E.finished, t[153] = G, t[154] = a, t[155] = qt) : qt = t[155], (0, $.useEffect)(Kt, qt);
    let Jt, Yt;
    t[156] !== N || t[157] !== H || t[158] !== c || t[159] !== y || t[160] !== J || t[161] !== Z || t[162] !== P || t[163] !== q || t[164] !== G ? (Jt = () => {
        let e = J ? Z : H;
        !G || H == null || te.current || e == null || (te.current = !0, Xe(null), rt({
            checkoutSession: e,
            onContinueWithoutPromo: J ? () => rt({
                checkoutSession: H,
                onSeeAllPlans: () => y(P)
            }) : void 0,
            initialSubmitErrorMessage: q ? void 0 : wt.errorProcessingPayment,
            onSeeAllPlans: () => y(P)
        }), y(N ? `/${N}` : `/`, {
            replace: !0,
            state: {
                [Te]: c
            }
        }))
    }, Yt = [H, c, N, y, P, q, J, Z, G], t[156] = N, t[157] = H, t[158] = c, t[159] = y, t[160] = J, t[161] = Z, t[162] = P, t[163] = q, t[164] = G, t[165] = Jt, t[166] = Yt) : (Jt = t[165], Yt = t[166]), (0, $.useEffect)(Jt, Yt);
    let Xt, Zt;
    t[167] !== c || t[168] !== R ? (Xt = () => {
        R && s.error(`Failed to resume conditional-offer preflight`, {
            checkoutSessionId: c,
            error: R
        })
    }, Zt = [c, R], t[167] = c, t[168] = R, t[169] = Xt, t[170] = Zt) : (Xt = t[169], Zt = t[170]), (0, $.useEffect)(Xt, Zt);
    let Qt, $t;
    t[171] !== c || t[172] !== L || t[173] !== I || t[174] !== V ? (Qt = () => {
        !L && !V || s.error(`Failed to continue custom payment method flow`, {
            checkoutSessionId: c,
            error: L,
            customPaymentMethodFlowResponse: I
        })
    }, $t = [c, L, I, V], t[171] = c, t[172] = L, t[173] = I, t[174] = V, t[175] = Qt, t[176] = $t) : (Qt = t[175], $t = t[176]), (0, $.useEffect)(Qt, $t);
    let en, tn;
    if (t[177] !== U || t[178] !== c || t[179] !== B ? (en = () => {
            !U || B || s.error(`Failed to fetch checkout session during verification`, {
                checkoutSessionId: c,
                error: U
            })
        }, tn = [U, c, B], t[177] = U, t[178] = c, t[179] = B, t[180] = en, t[181] = tn) : (en = t[180], tn = t[181]), (0, $.useEffect)(en, tn), J && !a && Z != null) {
        let e, n;
        t[182] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
            kind: oe.Standard
        }, n = () => ct(!0), t[182] = e, t[183] = n) : (e = t[182], n = t[183]);
        let r;
        t[184] !== y || t[185] !== P ? (r = () => y(P), t[184] = y, t[185] = P, t[186] = r) : r = t[186];
        let i;
        return t[187] !== Z || t[188] !== r ? (i = (0, _t.jsx)(et, {
            checkoutSession: Z,
            checkoutConfig: e,
            onContinueWithoutPromo: n,
            onExitToPlans: r
        }), t[187] = Z, t[188] = r, t[189] = i) : i = t[189], i
    }
    let nn = Rt || dt != null,
        rn = B || we,
        an;
    t[190] === W ? an = t[191] : (an = W ? () => ie(!1) : void 0, t[190] = W, t[191] = an);
    let on = Et ? Tt?.returnPath ?? Ge.landingPath : P,
        sn;
    return t[192] !== O || t[193] !== v || t[194] !== nn || t[195] !== rn || t[196] !== an || t[197] !== on ? (sn = (0, _t.jsx)(it, {
        isErrorState: nn,
        isWalletCoveredCheckout: v,
        isPendingCustomPaymentMethod: rn,
        isPendingPaymentDelayed: O,
        onRetryCheckoutStatus: an,
        returnTo: on
    }), t[192] = O, t[193] = v, t[194] = nn, t[195] = rn, t[196] = an, t[197] = on, t[198] = sn) : sn = t[198], sn
}
var gt, $, _t, vt, yt, bt, xt, St, Ct, wt, Tt = e((() => {
    j(), gt = F(), A(), ze(), P(), Ye(), V(), $e(), O(), be(), k(), Q(), De(), at(), xe(), qe(), R(), z(), Ae(), Ce(), B(), Qe(), Ie(), H(), c(), ae(), Ue(), tt(), re(), f(), _e(), Re(), $ = t(me()), _t = M(), vt = 500, yt = 5e3, bt = 3e4, xt = 12e4, St = 2, Ct = pe(function() {
        "use forget";
        let e = (0, gt.c)(2),
            t = ce(),
            n;
        return e[0] === t ? n = e[1] : (n = `checkoutKind` in t ? (0, _t.jsx)(ft, {
            processorEntity: t.processorEntity,
            checkoutSessionId: t.checkoutSessionId
        }) : (0, _t.jsx)(mt, {
            checkoutSessionId: t.checkoutSessionId
        }, `${t.processorEntity}:${t.checkoutSessionId}`), e[0] = t, e[1] = n), n
    }), wt = le({
        errorProcessingPayment: {
            id: `CheckoutVerifyRoute.errorProcessingPayment`,
            defaultMessage: `There was an error processing your payment`
        }
    })
}));
e((() => {
    Tt()
}))();
export {
    Ct as
    default
};
//# sourceMappingURL=checkout.verify-gjhhidty.js.map