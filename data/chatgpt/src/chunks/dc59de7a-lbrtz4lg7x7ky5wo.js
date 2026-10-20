const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/2705a2d7-bd62yh4bol8xhe0i.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-ikg0dwuw782klweb.js", "assets/30901919-e8h11sw136qen6v0.js", "assets/c470f5ab-ab47eubabs8jspdc.js", "assets/0e5afe53-esm68l11os61djoy.js", "assets/conversation-small-oilgsqfa.css", "assets/c2675c8c-ejvs9hq3rwjwsbcv.js", "assets/82782bc9-fcii2id0x6lspwtj.js", "assets/8b34dbc2-dtawqv9t1aqckqj4.js", "assets/global-modals-lv5n3ujm.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as n,
    BU as r,
    Bot as i,
    Cw as a,
    Fnt as o,
    J3 as s,
    JT as c,
    Ji as l,
    Mz as u,
    NI as d,
    R1 as f,
    Rnt as p,
    Tw as m,
    Vot as h,
    X0 as g,
    Xi as _,
    YT as v,
    Z0 as y,
    Z1 as b,
    bR as x,
    bnt as S,
    dit as C,
    f6 as w,
    fit as T,
    i6 as E,
    jz as D,
    m6 as O,
    n2 as k,
    vR as A,
    vnt as j,
    wI as M,
    zU as N
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as P,
    Ln as F,
    Nn as I,
    O as ee,
    Rn as L,
    Vn as R,
    Zt as te,
    cn as ne,
    ln as z,
    rn as re,
    s as ie,
    wn as ae,
    zn as oe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    N6t as se,
    P6t as ce,
    grn as le,
    isn as ue,
    k6t as de,
    mrn as fe,
    prn as pe,
    ssn as me
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Cc as he,
    Cf as ge,
    Ed as _e,
    Sf as B,
    Td as ve,
    _f as ye,
    bf as be,
    dn as xe,
    vf as Se,
    vn as Ce,
    wc as we,
    wd as Te,
    xc as Ee,
    yf as De
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    i as V,
    r as Oe
} from "./cedb005c-mkwpz221encf5qio.js";
var ke, Ae = e((() => {
    y(), z(), ke = g(() => ne(() => import(`./2705a2d7-bd62yh4bol8xhe0i.js`).then(e => e.WorkspaceSubscriptionPaymentSetup), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
}));

function je({
    currentAccount: e,
    entrypoint: t,
    workspaceId: n,
    sessionId: r,
    seatQuantity: i,
    priceInterval: a,
    billingCountry: o,
    billingCurrency: s,
    eventName: c,
    statsigEvent: l,
    eventId: u
}) {
    j.logValueEventWithStatsig({
        segmentEventName: c,
        statsigEventName: l,
        eventId: u,
        data: {
            ...e?.subscriptionAnalyticsParams,
            entrypoint: t,
            workspaceId: n,
            sessionId: r,
            seatQuantity: i,
            priceInterval: a,
            billingCountry: o,
            billingCurrency: s
        }
    })
}

function Me(e) {
    let t = Pe(Fe, `started`, e);
    je({
        ...e,
        eventName: U,
        statsigEvent: Fe,
        eventId: t
    })
}

function Ne(e) {
    let t = Pe(Le, `completed`, e);
    je({
        ...e,
        eventName: Ie,
        statsigEvent: Le,
        eventId: t
    })
}

function Pe(e, t, n) {
    return j.logStructuredEvent(`ChatgptBusinessBillingFirstChatgptSeatPurchaseSession`, {
        legacyStatsigEventName: e,
        action: t === `started` ? `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_SESSION_ACTION_STARTED` : `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_SESSION_ACTION_COMPLETED`,
        purchaseSessionId: n.sessionId,
        entryPoint: H[n.entrypoint],
        seatQuantity: p(n.seatQuantity),
        billingInterval: n.priceInterval === `year` ? `CHATGPT_WEB_SUBSCRIPTION_BILLING_INTERVAL_YEAR` : `CHATGPT_WEB_SUBSCRIPTION_BILLING_INTERVAL_MONTH`,
        billingCountry: n.billingCountry ?? void 0,
        billingCurrency: n.billingCurrency ?? void 0
    })
}
var H, U, Fe, Ie, Le, Re = e((() => {
    o(), S(), H = {
        workspace_onboarding_admin_invite: `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_ENTRY_POINT_WORKSPACE_ONBOARDING_ADMIN_INVITE`,
        workspace_identity_default_seat_type: `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_ENTRY_POINT_WORKSPACE_IDENTITY_DEFAULT_SEAT_TYPE`,
        members_user_table: `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_ENTRY_POINT_MEMBERS_USER_TABLE`,
        members_invites_table: `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_ENTRY_POINT_MEMBERS_INVITES_TABLE`,
        members_invite_requests_table_edit_seat_type: `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_ENTRY_POINT_MEMBERS_INVITE_REQUESTS_TABLE_EDIT_SEAT_TYPE`,
        members_invite_requests_table_accept_request: `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_ENTRY_POINT_MEMBERS_INVITE_REQUESTS_TABLE_ACCEPT_REQUEST`,
        members_requests_accept_all: `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_ENTRY_POINT_MEMBERS_REQUESTS_ACCEPT_ALL`
    }, U = `ChatGPT Business: First ChatGPT Seat Purchase Session Started`, Fe = `chatgpt_business_first_chatgpt_seat_purchase_session_started`, Ie = `ChatGPT Business: First ChatGPT Seat Purchase Session Completed`, Le = `chatgpt_business_first_chatgpt_seat_purchase_session_completed`
}));

function ze(e) {
    throw Error(`Unexpected workspace subscription preview result`)
}
async function Be({
    analyticsFlow: e,
    workspace: t,
    introducedDefaultSeatCount: n = 0,
    entrypoint: r,
    onContinue: i
}) {
    if (!t || t.hasPaidSubscription() || !E(t.data.subscriptionStatus.planType)) return e != null && V(e, {
        step: `capacity_evaluated`,
        capacityResult: `not_required`,
        paymentRequired: !1
    }), await i(), !0;
    if (!t.isOwnerOfAccount()) return e != null && (V(e, {
        step: `capacity_evaluated`,
        capacityResult: `purchase_unavailable`
    }), V(e, {
        step: `action_failed`,
        actionFailureType: `permission_denied`,
        ...e.affectedTargetCount == null ? {} : {
            failedTargetCount: e.affectedTargetCount,
            successfulTargetCount: 0
        }
    })), N().danger(K.ownerRequiredError, {
        toastId: `first_chatgpt_seat_purchase_owner_required`,
        loggingTitle: `First ChatGPT Seat Purchase: Owner required`,
        loggingDescription: K.ownerRequiredError.defaultMessage
    }), !1;
    let a = Math.max(d(), n);
    return e != null && V(e, {
        step: `capacity_evaluated`,
        capacityResult: `purchase_required`,
        additionalPaidSeatCounts: {
            default: a
        }
    }), await new Promise(n => {
        let i = !1;
        k(Ve, {
            analyticsFlow: e,
            entrypoint: r,
            workspaceId: t.id,
            initialSeatQuantity: a,
            onComplete: e => {
                i || (i = !0, n(e))
            }
        })
    }) ? (await i(), !0) : !1
}

function Ve(e) {
    "use forget";
    let t = (0, We.c)(129),
        {
            analyticsFlow: n,
            entrypoint: r,
            workspaceId: o,
            initialSeatQuantity: s,
            onComplete: u,
            onClose: f
        } = e,
        p = oe(),
        m = b(),
        h = x(),
        g, _, v, y;
    if (t[0] !== m || t[1] !== h?.id) {
        y = h?.id ?? (T() ? i().user?.id : void 0);
        let e;
        t[6] === m ? e = t[7] : (e = m?.hasPaidSubscription(), t[6] = m, t[7] = e), g = e !== !0, _ = ee, v = ve({
            enabled: g,
            userId: y
        }), t[0] = m, t[1] = h?.id, t[2] = g, t[3] = _, t[4] = v, t[5] = y
    } else g = t[2], _ = t[3], v = t[4], y = t[5];
    let {
        data: S,
        isLoading: C
    } = _(v), w = g && y != null && C, {
        country: E
    } = le(), k;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (k = {
        status: `configure`
    }, t[8] = k) : k = t[8];
    let [A, j] = (0, W.useState)(k), [N, P] = (0, W.useState)(!1), F;
    t[9] !== E || t[10] !== m ? (F = {
        country: E,
        currentAccount: m,
        location: `first-chatgpt-seat-purchase-modal`,
        pricingPlanIsTypeBusiness: !0
    }, t[9] = E, t[10] = m, t[11] = F) : F = t[11];
    let L = fe(F),
        [R, te] = (0, W.useState)(M.FLEXIBLE),
        ne;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = d(), t[12] = ne) : ne = t[12];
    let [z, ie] = (0, W.useState)(Math.max(ne, s)), [ae, de] = (0, W.useState)(null), {
        data: pe,
        isLoading: me
    } = we(o), he;
    t[13] === pe ? he = t[14] : (he = Ee(pe), t[13] = pe, t[14] = he);
    let ge = he,
        _e = (0, W.useRef)(!1),
        B = (0, W.useRef)(!1),
        be = (0, W.useRef)(!1),
        xe = (0, W.useRef)(!1),
        Ce = (0, W.useRef)(!1),
        Oe = (0, W.useRef)(0),
        Ae;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (Ae = re(), t[15] = Ae) : Ae = t[15];
    let je = (0, W.useRef)(Ae),
        Pe = (0, W.useRef)(!1),
        H = ce(o),
        U = se(o),
        Fe = L?.country,
        Ie = L?.currency,
        Le = L != null,
        Re;
    t[16] !== Le || t[17] !== Fe || t[18] !== Ie ? (Re = {
        countryCode: Fe,
        currency: Ie,
        enabled: Le
    }, t[16] = Le, t[17] = Fe, t[18] = Ie, t[19] = Re) : Re = t[19];
    let {
        data: Be,
        isLoading: Ve,
        error: Ge
    } = O(Re), Ke = g && S === !0, qe;
    bb0: {
        if (!L || !Be) {
            qe = null;
            break bb0
        }
        let e;t[20] !== Be || t[21] !== Ke ? (e = Ke ? Te(Be) : Be, t[20] = Be, t[21] = Ke, t[22] = e) : e = t[22];
        let n;t[23] !== L.currency || t[24] !== e ? (n = De(L.currency, e), t[23] = L.currency, t[24] = e, t[25] = n) : n = t[25],
        qe = n
    }
    let q = qe,
        J = H.isPending,
        Y = J || U.isPending || N,
        Je;
    t[26] === u ? Je = t[27] : (Je = e => {
        _e.current || (_e.current = !0, u(e))
    }, t[26] = u, t[27] = Je);
    let Ye = Je,
        Xe;
    t[28] !== n || t[29] !== Ye || t[30] !== Y || t[31] !== f ? (Xe = () => {
        Y || (n != null && xe.current && !Ce.current ? (B.current = !0, Ce.current = !0, V(n, {
            step: `purchase_canceled`,
            paymentAttemptNumber: Oe.current === 0 ? void 0 : Oe.current
        })) : n != null && !xe.current && !B.current && (B.current = !0, V(n, {
            step: `action_canceled`
        })), Ye(!1), f())
    }, t[28] = n, t[29] = Ye, t[30] = Y, t[31] = f, t[32] = Xe) : Xe = t[32];
    let Ze = Xe,
        Qe, $e;
    t[33] !== L || t[34] !== m || t[35] !== r || t[36] !== z || t[37] !== R || t[38] !== o ? (Qe = () => {
        Pe.current || L == null || (Pe.current = !0, Me({
            currentAccount: m,
            entrypoint: r,
            workspaceId: o,
            sessionId: je.current,
            seatQuantity: z,
            priceInterval: R,
            billingCountry: L.country,
            billingCurrency: L.currency
        }))
    }, $e = [L, m, r, z, R, o], t[33] = L, t[34] = m, t[35] = r, t[36] = z, t[37] = R, t[38] = o, t[39] = Qe, t[40] = $e) : (Qe = t[39], $e = t[40]), (0, W.useEffect)(Qe, $e);
    let et = A.status === `configure` ? L?.currency : A.selection.billingDetails.currency,
        tt;
    t[41] !== p || t[42] !== et ? (tt = e => p.formatNumber(e, {
        style: `currency`,
        currency: et ?? `USD`,
        currencyDisplay: `narrowSymbol`,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }), t[41] = p, t[42] = et, t[43] = tt) : tt = t[43];
    let nt = tt,
        rt;
    t[44] !== L?.currency || t[45] !== p ? (rt = e => p.formatNumber(e, {
        style: `currency`,
        currency: L?.currency ?? `USD`,
        currencyDisplay: `narrowSymbol`,
        trailingZeroDisplay: `stripIfInteger`
    }), t[44] = L?.currency, t[45] = p, t[46] = rt) : rt = t[46], L?.currency;
    let it = rt,
        at;
    t[47] === p ? at = t[48] : (at = e => p.formatMessage(e === `preview` ? K.genericPreviewError : K.genericCreateError), t[47] = p, t[48] = at);
    let ot = at,
        st;
    t[49] !== n || t[50] !== ot || t[51] !== J || t[52] !== H ? (st = async e => {
        if (!J) {
            de(null);
            try {
                let t = await H.mutateAsync({
                    seatQuantity: e.seatQuantity,
                    priceInterval: e.selectedPlan,
                    billingDetails: e.billingDetails
                });
                if (t.status === `payment_setup_required`) {
                    j({
                        status: `payment_setup`,
                        selection: e,
                        publishableKey: t.publishable_key
                    });
                    return
                }
                t.status !== `ready` && ze(t), j({
                    status: `confirm`,
                    selection: e,
                    preview: t
                }), n != null && !xe.current && (xe.current = !0, V(n, {
                    step: `checkout_shown`,
                    additionalPaidSeatCounts: {
                        default: e.seatQuantity
                    },
                    paymentRequired: t.amount_due.amount > 0,
                    billingInterval: e.selectedPlan === M.ANNUAL ? `yearly` : `monthly`
                }))
            } catch {
                n != null && V(n, {
                    step: `action_attempt_failed`,
                    actionFailureType: `checkout_preparation_failed`,
                    ...n.affectedTargetCount == null ? {} : {
                        failedTargetCount: n.affectedTargetCount,
                        successfulTargetCount: 0
                    }
                }), de(ot(`preview`))
            }
        }
    }, t[49] = n, t[50] = ot, t[51] = J, t[52] = H, t[53] = st) : st = t[53];
    let ct = st,
        lt;
    t[54] !== L || t[55] !== ct || t[56] !== z || t[57] !== R ? (lt = async () => {
        L != null && await ct({
            seatQuantity: z,
            selectedPlan: R,
            billingDetails: L
        })
    }, t[54] = L, t[55] = ct, t[56] = z, t[57] = R, t[58] = lt) : lt = t[58];
    let ut = lt,
        dt;
    t[59] === Y ? dt = t[60] : (dt = () => {
        Y || (de(null), j({
            status: `configure`
        }))
    }, t[59] = Y, t[60] = dt);
    let ft = dt,
        pt;
    t[61] !== n || t[62] !== A || t[63] !== U || t[64] !== m || t[65] !== r || t[66] !== Ye || t[67] !== ot || t[68] !== f || t[69] !== o ? (pt = async () => {
        if (A.status !== `confirm`) return;
        let {
            selection: e,
            preview: t
        } = A, {
            billingDetails: i
        } = e;
        de(null), Oe.current += 1;
        let a = Oe.current;
        n != null && V(n, {
            step: `purchase_submitted`,
            additionalPaidSeatCounts: {
                default: e.seatQuantity
            },
            paymentRequired: (t?.amount_due.amount ?? 0) > 0,
            paymentAttemptNumber: a,
            billingInterval: e.selectedPlan === M.ANNUAL ? `yearly` : `monthly`
        });
        try {
            await U.mutateAsync({
                seatQuantity: e.seatQuantity,
                priceInterval: e.selectedPlan,
                billingDetails: i
            }), Ne({
                currentAccount: m,
                entrypoint: r,
                workspaceId: o,
                sessionId: je.current,
                seatQuantity: e.seatQuantity,
                priceInterval: e.selectedPlan,
                billingCountry: i.country,
                billingCurrency: i.currency
            }), n != null && (B.current = !0, Ce.current = !0, V(n, {
                step: `purchase_succeeded`,
                paymentAttemptNumber: a,
                billingInterval: e.selectedPlan === M.ANNUAL ? `yearly` : `monthly`
            })), Ye(!0), f()
        } catch {
            n != null && V(n, {
                step: `purchase_failed`,
                paymentAttemptNumber: a,
                paymentFailureReason: `request_failed`,
                billingInterval: e.selectedPlan === M.ANNUAL ? `yearly` : `monthly`
            }), de(ot(`create`))
        }
    }, t[61] = n, t[62] = A, t[63] = U, t[64] = m, t[65] = r, t[66] = Ye, t[67] = ot, t[68] = f, t[69] = o, t[70] = pt) : pt = t[70];
    let mt = pt,
        X = A.status === `confirm`,
        Z = L == null || Ve || w || me,
        Q = Ge != null,
        ht, gt;
    t[71] !== n || t[72] !== Q || t[73] !== Z || t[74] !== q ? (ht = () => {
        n == null || be.current || !Q && (Z || q != null) || (be.current = !0, V(n, {
            actionFailureType: `checkout_preparation_failed`,
            ...n.affectedTargetCount == null ? {} : {
                failedTargetCount: n.affectedTargetCount,
                successfulTargetCount: 0
            },
            step: `action_attempt_failed`
        }))
    }, gt = [n, Q, Z, q], t[71] = n, t[72] = Q, t[73] = Z, t[74] = q, t[75] = ht, t[76] = gt) : (ht = t[75], gt = t[76]), (0, W.useEffect)(ht, gt);
    let _t;
    t[77] !== A.status || t[78] !== p || t[79] !== X ? (_t = p.formatMessage(X ? K.reviewTitle : A.status === `payment_setup` ? K.paymentSetupTitle : K.title), t[77] = A.status, t[78] = p, t[79] = X, t[80] = _t) : _t = t[80];
    let vt;
    t[81] !== A.status || t[82] !== p || t[83] !== X ? (vt = p.formatMessage(X ? K.reviewDescription : A.status === `payment_setup` ? K.paymentSetupDescription : K.description), t[81] = A.status, t[82] = p, t[83] = X, t[84] = vt) : vt = t[84];
    let $;
    t[85] !== A.status || t[86] !== U || t[87] !== ut || t[88] !== mt || t[89] !== Q || t[90] !== J || t[91] !== Z || t[92] !== X || t[93] !== q ? ($ = A.status === `payment_setup` ? void 0 : (0, G.jsx)(c, {
        color: `primary`,
        onClick: () => {
            X ? mt() : ut()
        },
        loading: X ? U.isPending : J,
        disabled: !X && (Z || Q || q == null),
        children: (0, G.jsx)(I, {
            ...X ? K.subscribeAndPay : K.continueToReview
        })
    }), t[85] = A.status, t[86] = U, t[87] = ut, t[88] = mt, t[89] = Q, t[90] = J, t[91] = Z, t[92] = X, t[93] = q, t[94] = $) : $ = t[94];
    let yt = A.status === `configure` ? Ze : ft,
        bt;
    t[95] === Symbol.for(`react.memo_cache_sentinel`) ? (bt = (0, G.jsx)(I, {
        ...K.back
    }), t[95] = bt) : bt = t[95];
    let xt;
    t[96] !== Y || t[97] !== yt ? (xt = (0, G.jsx)(c, {
        color: `secondary`,
        onClick: yt,
        disabled: Y,
        children: bt
    }), t[96] = Y, t[97] = yt, t[98] = xt) : xt = t[98];
    let St;
    t[99] === ae ? St = t[100] : (St = ae && (0, G.jsx)(l, {
        type: `error`,
        isElevated: !1,
        content: ae
    }), t[99] = ae, t[100] = St);
    let Ct;
    t[101] !== ge || t[102] !== A.preview || t[103] !== A.publishableKey || t[104] !== A.selection || t[105] !== A.status || t[106] !== nt || t[107] !== it || t[108] !== Q || t[109] !== p || t[110] !== J || t[111] !== Z || t[112] !== ct || t[113] !== z || t[114] !== R || t[115] !== q || t[116] !== o ? (Ct = A.status === `payment_setup` ? (0, G.jsx)(ke, {
        accountId: o,
        billingDetails: A.selection.billingDetails,
        publishableKey: A.publishableKey,
        onSubmittingChange: P,
        onComplete: () => ct(A.selection)
    }) : A.status === `confirm` ? (0, G.jsx)(Ue, {
        previewData: A.preview,
        seatQuantity: A.selection.seatQuantity,
        selectedPlan: A.selection.selectedPlan,
        formatCurrencyAmount: nt
    }) : Z ? (0, G.jsx)(`div`, {
        className: `flex min-h-64 items-center justify-center`,
        children: (0, G.jsx)(D, {
            className: `icon-lg text-token-text-tertiary`
        })
    }) : Q || q == null ? (0, G.jsx)(l, {
        type: `error`,
        isElevated: !1,
        content: p.formatMessage(K.pricingLoadError)
    }) : (0, G.jsxs)(G.Fragment, {
        children: [(0, G.jsxs)(ue, {
            className: `grid gap-4 pt-3 disabled:cursor-not-allowed disabled:opacity-60 md:grid-cols-2`,
            value: R,
            disabled: J,
            onValueChange: e => {
                e !== M.FLEXIBLE && e !== M.ANNUAL || te(e)
            },
            children: [(0, G.jsx)(ye, {
                billingType: M.FLEXIBLE,
                ...q.flexibleBillingPlan,
                selectedValue: R,
                hideDetails: !0
            }), (0, G.jsx)(ye, {
                billingType: M.ANNUAL,
                ...q.annualBillingPlan,
                selectedValue: R,
                hideDetails: !0
            })]
        }), (0, G.jsx)(Se, {
            numSeats: z,
            minSeats: d(),
            maxSeats: ge,
            showEnterpriseUpsellOnLimit: !0,
            setNumSeats: ie,
            label: p.formatMessage(K.seatQuantityLabel),
            disabled: J
        }), (0, G.jsx)(He, {
            seatQuantity: z,
            selectedPlan: R,
            teamBillingInfo: q,
            formatCurrencyAmount: it
        })]
    }), t[101] = ge, t[102] = A.preview, t[103] = A.publishableKey, t[104] = A.selection, t[105] = A.status, t[106] = nt, t[107] = it, t[108] = Q, t[109] = p, t[110] = J, t[111] = Z, t[112] = ct, t[113] = z, t[114] = R, t[115] = q, t[116] = o, t[117] = Ct) : Ct = t[117];
    let wt;
    t[118] !== St || t[119] !== Ct ? (wt = (0, G.jsxs)(`div`, {
        className: `flex flex-col gap-5`,
        children: [St, Ct]
    }), t[118] = St, t[119] = Ct, t[120] = wt) : wt = t[120];
    let Tt;
    return t[121] !== Ze || t[122] !== Y || t[123] !== _t || t[124] !== vt || t[125] !== $ || t[126] !== xt || t[127] !== wt ? (Tt = (0, G.jsx)(a, {
        testId: `modal-first-chatgpt-seat-purchase`,
        isOpen: !0,
        onClose: Ze,
        size: `custom`,
        className: `w-full max-w-[720px]`,
        showCloseButton: !0,
        shouldIgnoreClickOutside: Y,
        title: _t,
        description: vt,
        primaryButton: $,
        secondaryButton: xt,
        children: wt
    }), t[121] = Ze, t[122] = Y, t[123] = _t, t[124] = vt, t[125] = $, t[126] = xt, t[127] = wt, t[128] = Tt) : Tt = t[128], Tt
}

function He(e) {
    "use forget";
    let t = (0, We.c)(55),
        {
            seatQuantity: n,
            selectedPlan: r,
            teamBillingInfo: i,
            formatCurrencyAmount: a
        } = e,
        o = oe(),
        s = r === M.FLEXIBLE ? i.flexibleBillingPlan : i.annualBillingPlan,
        c = ge[r],
        l = n * (r === M.ANNUAL ? i.annualBillingPlan.monthlyCost * 12 : i.flexibleBillingPlan.monthlyCost),
        u = n * s.unitCost,
        d = l - u,
        f;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, G.jsx)(`span`, {
        className: `text-lg font-semibold`,
        children: (0, G.jsx)(I, {
            ...K.summaryTitle
        })
    }), t[0] = f) : f = t[0];
    let p;
    t[1] === c.name ? p = t[2] : (p = (0, G.jsx)(`div`, {
        className: `font-medium`,
        children: (0, G.jsx)(I, {
            ...c.name
        })
    }), t[1] = c.name, t[2] = p);
    let m;
    t[3] === n ? m = t[4] : (m = {
        numSeats: n
    }, t[3] = n, t[4] = m);
    let h;
    t[5] !== c.breakdown || t[6] !== m ? (h = (0, G.jsx)(`div`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, G.jsx)(I, {
            ...c.breakdown,
            values: m
        })
    }), t[5] = c.breakdown, t[6] = m, t[7] = h) : h = t[7];
    let g;
    t[8] !== p || t[9] !== h ? (g = (0, G.jsxs)(`div`, {
        children: [p, h]
    }), t[8] = p, t[9] = h, t[10] = g) : g = t[10];
    let _;
    t[11] !== a || t[12] !== l ? (_ = a(l), t[11] = a, t[12] = l, t[13] = _) : _ = t[13];
    let v;
    t[14] === _ ? v = t[15] : (v = (0, G.jsx)(`div`, {
        className: `font-medium`,
        children: _
    }), t[14] = _, t[15] = v);
    let y;
    t[16] !== a || t[17] !== s.monthlyCost ? (y = a(s.monthlyCost), t[16] = a, t[17] = s.monthlyCost, t[18] = y) : y = t[18];
    let b;
    t[19] === y ? b = t[20] : (b = (0, G.jsx)(`div`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, G.jsx)(I, {
            ...K.perSeatAmount,
            values: {
                amount: y
            }
        })
    }), t[19] = y, t[20] = b);
    let x;
    t[21] !== v || t[22] !== b ? (x = (0, G.jsxs)(`div`, {
        className: `text-end`,
        children: [v, b]
    }), t[21] = v, t[22] = b, t[23] = x) : x = t[23];
    let S;
    t[24] !== x || t[25] !== g ? (S = (0, G.jsxs)(`div`, {
        className: `flex items-start justify-between gap-4`,
        children: [g, x]
    }), t[24] = x, t[25] = g, t[26] = S) : S = t[26];
    let C;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, G.jsx)(`span`, {
        children: (0, G.jsx)(I, {
            ...B.planDiscountLabel
        })
    }), t[27] = C) : C = t[27];
    let w = d > 0 ? `text-[#10A37F]` : void 0,
        T;
    t[28] !== d || t[29] !== a ? (T = a(d), t[28] = d, t[29] = a, t[30] = T) : T = t[30];
    let E;
    t[31] === T ? E = t[32] : (E = (0, G.jsx)(I, {
        ...K.negativeFormattedAmount,
        values: {
            amount: T
        }
    }), t[31] = T, t[32] = E);
    let D;
    t[33] !== w || t[34] !== E ? (D = (0, G.jsxs)(`div`, {
        className: `text-token-text-secondary flex items-start justify-between gap-4`,
        children: [C, (0, G.jsx)(`span`, {
            className: w,
            children: E
        })]
    }), t[33] = w, t[34] = E, t[35] = D) : D = t[35];
    let O;
    t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, G.jsx)(`span`, {
        children: (0, G.jsx)(I, {
            ...B.allPlansTotal
        })
    }), t[36] = O) : O = t[36];
    let k;
    t[37] !== o || t[38] !== s.currencyCode ? (k = o.formatMessage(s.currencyCode), t[37] = o, t[38] = s.currencyCode, t[39] = k) : k = t[39];
    let A;
    t[40] !== a || t[41] !== u ? (A = a(u), t[40] = a, t[41] = u, t[42] = A) : A = t[42];
    let j;
    t[43] !== k || t[44] !== A ? (j = (0, G.jsxs)(`div`, {
        className: `flex items-start justify-between gap-4 text-base font-medium`,
        children: [O, (0, G.jsx)(`span`, {
            children: (0, G.jsx)(I, {
                ...K.currencyCodeWithAmount,
                values: {
                    currencyCode: k,
                    amount: A
                }
            })
        })]
    }), t[43] = k, t[44] = A, t[45] = j) : j = t[45];
    let N;
    t[46] === c.billedToday ? N = t[47] : (N = (0, G.jsx)(`span`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, G.jsx)(I, {
            ...c.billedToday
        })
    }), t[46] = c.billedToday, t[47] = N);
    let P;
    t[48] !== j || t[49] !== N ? (P = (0, G.jsxs)(`div`, {
        className: `border-token-border-default flex flex-col gap-2 border-t pt-4`,
        children: [j, N]
    }), t[48] = j, t[49] = N, t[50] = P) : P = t[50];
    let F;
    return t[51] !== S || t[52] !== D || t[53] !== P ? (F = (0, G.jsxs)(`div`, {
        className: `border-token-border-default flex h-fit flex-col gap-4 rounded-2xl border p-5`,
        children: [f, S, D, P]
    }), t[51] = S, t[52] = D, t[53] = P, t[54] = F) : F = t[54], F
}

function Ue(e) {
    "use forget";
    let t = (0, We.c)(47),
        {
            previewData: n,
            seatQuantity: r,
            selectedPlan: i,
            formatCurrencyAmount: a
        } = e,
        o = oe(),
        s;
    t[0] !== o || t[1] !== i ? (s = o.formatMessage(i === M.ANNUAL ? K.annualSubscription : K.monthlySubscription), t[0] = o, t[1] = i, t[2] = s) : s = t[2];
    let c;
    t[3] !== r || t[4] !== s ? (c = (0, G.jsx)(`span`, {
        className: `font-semibold`,
        children: (0, G.jsx)(I, {
            ...K.subscriptionLineItem,
            values: {
                seatCount: r,
                planName: s
            }
        })
    }), t[3] = r, t[4] = s, t[5] = c) : c = t[5];
    let l = n.positive_line_item_total / 100,
        u;
    t[6] !== a || t[7] !== l ? (u = a(l), t[6] = a, t[7] = l, t[8] = u) : u = t[8];
    let d;
    t[9] === u ? d = t[10] : (d = (0, G.jsx)(`span`, {
        className: `font-semibold`,
        children: u
    }), t[9] = u, t[10] = d);
    let f;
    t[11] !== c || t[12] !== d ? (f = (0, G.jsxs)(`div`, {
        className: `flex items-start justify-between gap-4`,
        children: [c, d]
    }), t[11] = c, t[12] = d, t[13] = f) : f = t[13];
    let p = i === M.ANNUAL ? K.billedAnnuallyStartingToday : K.billedMonthlyStartingToday,
        m;
    t[14] === p ? m = t[15] : (m = (0, G.jsx)(`span`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, G.jsx)(I, {
            ...p
        })
    }), t[14] = p, t[15] = m);
    let h;
    t[16] !== f || t[17] !== m ? (h = (0, G.jsxs)(`div`, {
        children: [f, m]
    }), t[16] = f, t[17] = m, t[18] = h) : h = t[18];
    let g;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, G.jsx)(`span`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, G.jsx)(I, {
            ...K.subtotal
        })
    }), t[19] = g) : g = t[19];
    let _ = n.amount_due.amount_excluding_tax / 100,
        v;
    t[20] !== a || t[21] !== _ ? (v = a(_), t[20] = a, t[21] = _, t[22] = v) : v = t[22];
    let y;
    t[23] === v ? y = t[24] : (y = (0, G.jsxs)(`div`, {
        className: `flex items-start justify-between gap-4`,
        children: [g, (0, G.jsx)(`span`, {
            className: `text-sm font-medium`,
            children: v
        })]
    }), t[23] = v, t[24] = y);
    let b;
    t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, G.jsx)(`span`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, G.jsx)(I, {
            ...K.tax
        })
    }), t[25] = b) : b = t[25];
    let x = n.amount_due.tax_amount / 100,
        S;
    t[26] !== a || t[27] !== x ? (S = a(x), t[26] = a, t[27] = x, t[28] = S) : S = t[28];
    let C;
    t[29] === S ? C = t[30] : (C = (0, G.jsxs)(`div`, {
        className: `flex items-start justify-between gap-4`,
        children: [b, (0, G.jsx)(`span`, {
            className: `text-sm font-medium`,
            children: S
        })]
    }), t[29] = S, t[30] = C);
    let w;
    t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, G.jsx)(`span`, {
        className: `text-base font-medium`,
        children: (0, G.jsx)(I, {
            ...K.totalDueToday
        })
    }), t[31] = w) : w = t[31];
    let T = n.amount_due.amount / 100,
        E;
    t[32] !== a || t[33] !== T ? (E = a(T), t[32] = a, t[33] = T, t[34] = E) : E = t[34];
    let D;
    t[35] === E ? D = t[36] : (D = (0, G.jsxs)(`div`, {
        className: `border-token-border-default flex items-start justify-between gap-4 border-t pt-3`,
        children: [w, (0, G.jsx)(`span`, {
            className: `text-base font-medium`,
            children: E
        })]
    }), t[35] = E, t[36] = D);
    let O;
    t[37] !== y || t[38] !== C || t[39] !== D ? (O = (0, G.jsxs)(`div`, {
        className: `border-token-border-default flex flex-col gap-3 rounded-2xl border p-4`,
        children: [y, C, D]
    }), t[37] = y, t[38] = C, t[39] = D, t[40] = O) : O = t[40];
    let k;
    t[41] === n.default_payment_method ? k = t[42] : (k = n.default_payment_method && (0, G.jsx)(`div`, {
        className: `border-token-border-default rounded-2xl border p-4`,
        children: (0, G.jsx)(xe, {
            defaultPaymentMethod: n.default_payment_method
        })
    }), t[41] = n.default_payment_method, t[42] = k);
    let A;
    return t[43] !== O || t[44] !== k || t[45] !== h ? (A = (0, G.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [h, O, k]
    }), t[43] = O, t[44] = k, t[45] = h, t[46] = A) : A = t[46], A
}
var We, W, G, K, Ge = e((() => {
    We = ae(), Ae(), Re(), Oe(), de(), v(), _(), m(), n(), Ce(), be(), he(), _e(), pe(), u(), f(), A(), r(), C(), w(), s(), me(), h(), ie(), W = t(R()), L(), te(), G = P(), K = F({
        paymentSetupTitle: {
            id: `firstChatgptSeatPurchase.paymentSetupTitle`,
            defaultMessage: `Add payment details`
        },
        paymentSetupDescription: {
            id: `firstChatgptSeatPurchase.paymentSetupDescription`,
            defaultMessage: `Save your card and billing address to review your purchase.`
        },
        title: {
            id: `firstChatgptSeatPurchase.title`,
            defaultMessage: `Configure your ChatGPT plan details`
        },
        description: {
            id: `firstChatgptSeatPurchase.description`,
            defaultMessage: `ChatGPT seats are billed on a monthly or annual basis. After the initial billing cycle, you will only be charged for the seats you actively use. Billing occurs immediately.`
        },
        reviewTitle: {
            id: `firstChatgptSeatPurchase.reviewTitle`,
            defaultMessage: `Review your purchase`
        },
        reviewDescription: {
            id: `firstChatgptSeatPurchase.reviewDescription`,
            defaultMessage: `Review the subscription preview before creating your ChatGPT seat subscription.`
        },
        ownerRequiredError: {
            id: `firstChatgptSeatPurchase.ownerRequiredError`,
            defaultMessage: `ChatGPT seat purchase required: Please ask a workspace owner to complete this action.`
        },
        seatQuantityLabel: {
            id: `firstChatgptSeatPurchase.seatQuantityLabel`,
            defaultMessage: `Seats`
        },
        summaryTitle: {
            id: `firstChatgptSeatPurchase.summaryTitle`,
            defaultMessage: `Summary`
        },
        subscriptionLineItem: {
            id: `firstChatgptSeatPurchase.subscriptionLineItem`,
            defaultMessage: `{seatCount} × {planName}`
        },
        monthlySubscription: {
            id: `firstChatgptSeatPurchase.monthlySubscription`,
            defaultMessage: `Monthly subscription`
        },
        annualSubscription: {
            id: `firstChatgptSeatPurchase.annualSubscription`,
            defaultMessage: `Annual subscription`
        },
        totalDueToday: {
            id: `firstChatgptSeatPurchase.totalDueToday`,
            defaultMessage: `Total due today`
        },
        subtotal: {
            id: `firstChatgptSeatPurchase.subtotal`,
            defaultMessage: `Subtotal`
        },
        tax: {
            id: `firstChatgptSeatPurchase.tax`,
            defaultMessage: `Tax`
        },
        continueToReview: {
            id: `firstChatgptSeatPurchase.continueToReview`,
            defaultMessage: `Continue`
        },
        subscribeAndPay: {
            id: `firstChatgptSeatPurchase.subscribeAndPay`,
            defaultMessage: `Subscribe and pay`
        },
        back: {
            id: `firstChatgptSeatPurchase.back`,
            defaultMessage: `Back`
        },
        pricingLoadError: {
            id: `firstChatgptSeatPurchase.pricingLoadError`,
            defaultMessage: `Unable to load pricing details. Please try again.`
        },
        genericCreateError: {
            id: `firstChatgptSeatPurchase.genericCreateError`,
            defaultMessage: `We couldn’t complete your purchase. Please try again.`
        },
        genericPreviewError: {
            id: `firstChatgptSeatPurchase.genericPreviewError`,
            defaultMessage: `We couldn’t load your purchase summary. Please try again.`
        },
        billedMonthlyStartingToday: {
            id: `firstChatgptSeatPurchase.billedMonthlyStartingToday`,
            defaultMessage: `Billed monthly, starting today`
        },
        billedAnnuallyStartingToday: {
            id: `firstChatgptSeatPurchase.billedAnnuallyStartingToday`,
            defaultMessage: `Billed annually, starting today`
        },
        perSeatAmount: {
            id: `firstChatgptSeatPurchase.perSeatAmount`,
            defaultMessage: `{amount}/seat`
        },
        negativeFormattedAmount: {
            id: `firstChatgptSeatPurchase.negativeFormattedAmount`,
            defaultMessage: `-{amount}`
        },
        currencyCodeWithAmount: {
            id: `firstChatgptSeatPurchase.currencyCodeWithAmount`,
            defaultMessage: `{currencyCode} {amount}`
        }
    })
}));
export {
    Ge as n, Be as t
};
//# sourceMappingURL=dc59de7a-lbrtz4lg7x7ky5wo.js.map