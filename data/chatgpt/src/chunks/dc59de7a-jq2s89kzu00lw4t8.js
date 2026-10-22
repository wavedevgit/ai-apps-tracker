const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/2705a2d7-m5pk6s9mfl9fo5oe.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-i89nb6zlze66idsz.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fh0oqifngkf5rvl1.js", "assets/30901919-cmi3nh547dwrqkxv.js", "assets/c470f5ab-ctk9cdujw17c2exz.js", "assets/0e5afe53-fofrudqqfgiodxgc.js", "assets/conversation-small-7l2sfhqg.css", "assets/c2675c8c-4fpunyxk1uf8cfp1.js", "assets/82782bc9-ivetrmhdn140ze7c.js", "assets/8b34dbc2-peb5nzi8z3rrflnv.js", "assets/global-modals-dxg9ukpk.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Ait as r,
    Aw as i,
    CR as a,
    E6 as o,
    IU as s,
    LU as c,
    Lnt as l,
    O6 as u,
    Ow as d,
    RI as f,
    Rz as p,
    TR as m,
    Yi as h,
    Zi as g,
    a2 as _,
    ast as v,
    c2 as y,
    c6 as b,
    d2 as x,
    eE as S,
    ert as C,
    jit as w,
    kI as T,
    o0 as E,
    o2 as D,
    ost as O,
    q1 as k,
    rrt as A,
    v6 as j,
    znt as M,
    zz as N
} from "./4813494d-i89nb6zlze66idsz.js";
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
    B6t as se,
    Crn as ce,
    F6t as le,
    Srn as ue,
    Trn as de,
    _sn as fe,
    msn as pe,
    z6t as me
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    Cc as he,
    Cf as B,
    Dd as ge,
    Ec as _e,
    Ed as ve,
    Tc as ye,
    Td as be,
    bf as xe,
    dn as Se,
    vf as Ce,
    vn as we,
    wf as Te,
    xf as Ee,
    yf as De
} from "./c2675c8c-4fpunyxk1uf8cfp1.js";
import {
    i as V,
    r as Oe
} from "./cedb005c-iy5end8yil1mtsnb.js";
var ke, Ae = e((() => {
    D(), z(), ke = _(() => ne(() => import(`./2705a2d7-m5pk6s9mfl9fo5oe.js`).then(e => e.WorkspaceSubscriptionPaymentSetup), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
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
    statsigEvent: u,
    eventId: d
}) {
    l.logValueEventWithStatsig({
        segmentEventName: c,
        statsigEventName: u,
        eventId: d,
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
    return l.logStructuredEvent(`ChatgptBusinessBillingFirstChatgptSeatPurchaseSession`, {
        legacyStatsigEventName: e,
        action: t === `started` ? `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_SESSION_ACTION_STARTED` : `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_SESSION_ACTION_COMPLETED`,
        purchaseSessionId: n.sessionId,
        entryPoint: H[n.entrypoint],
        seatQuantity: A(n.seatQuantity),
        billingInterval: n.priceInterval === `year` ? `CHATGPT_WEB_SUBSCRIPTION_BILLING_INTERVAL_YEAR` : `CHATGPT_WEB_SUBSCRIPTION_BILLING_INTERVAL_MONTH`,
        billingCountry: n.billingCountry ?? void 0,
        billingCurrency: n.billingCurrency ?? void 0
    })
}
var H, U, Fe, Ie, Le, Re = e((() => {
    C(), M(), H = {
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
    if (!t || t.hasPaidSubscription() || !j(t.data.subscriptionStatus.planType)) return e != null && V(e, {
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
    })), s().danger(K.ownerRequiredError, {
        toastId: `first_chatgpt_seat_purchase_owner_required`,
        loggingTitle: `First ChatGPT Seat Purchase: Owner required`,
        loggingDescription: K.ownerRequiredError.defaultMessage
    }), !1;
    let a = Math.max(f(), n);
    return e != null && V(e, {
        step: `capacity_evaluated`,
        capacityResult: `purchase_required`,
        additionalPaidSeatCounts: {
            default: a
        }
    }), await new Promise(n => {
        let i = !1;
        x(Ve, {
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
            analyticsFlow: r,
            entrypoint: i,
            workspaceId: a,
            initialSeatQuantity: o,
            onComplete: s,
            onClose: c
        } = e,
        l = oe(),
        g = E(),
        _ = m(),
        y, b, x, S;
    if (t[0] !== g || t[1] !== _?.id) {
        S = _?.id ?? (w() ? v().user?.id : void 0);
        let e;
        t[6] === g ? e = t[7] : (e = g?.hasPaidSubscription(), t[6] = g, t[7] = e), y = e !== !0, b = ee, x = ve({
            enabled: y,
            userId: S
        }), t[0] = g, t[1] = _?.id, t[2] = y, t[3] = b, t[4] = x, t[5] = S
    } else y = t[2], b = t[3], x = t[4], S = t[5];
    let {
        data: C,
        isLoading: D
    } = b(x), O = y && S != null && D, {
        country: k
    } = de(), A;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (A = {
        status: `configure`
    }, t[8] = A) : A = t[8];
    let [j, M] = (0, W.useState)(A), [N, P] = (0, W.useState)(!1), F;
    t[9] !== k || t[10] !== g ? (F = {
        country: k,
        currentAccount: g,
        location: `first-chatgpt-seat-purchase-modal`,
        pricingPlanIsTypeBusiness: !0
    }, t[9] = k, t[10] = g, t[11] = F) : F = t[11];
    let L = ce(F),
        [R, te] = (0, W.useState)(T.FLEXIBLE),
        ne;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = f(), t[12] = ne) : ne = t[12];
    let [z, ie] = (0, W.useState)(Math.max(ne, o)), [ae, le] = (0, W.useState)(null), {
        data: ue,
        isLoading: fe
    } = _e(a), B;
    t[13] === ue ? B = t[14] : (B = he(ue), t[13] = ue, t[14] = B);
    let ge = B,
        ye = (0, W.useRef)(!1),
        Se = (0, W.useRef)(!1),
        we = (0, W.useRef)(!1),
        Te = (0, W.useRef)(!1),
        Ee = (0, W.useRef)(!1),
        Oe = (0, W.useRef)(0),
        Ae;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (Ae = re(), t[15] = Ae) : Ae = t[15];
    let je = (0, W.useRef)(Ae),
        Pe = (0, W.useRef)(!1),
        H = se(a),
        U = me(a),
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
    } = u(Re), Ke = y && C === !0, qe;
    bb0: {
        if (!L || !Be) {
            qe = null;
            break bb0
        }
        let e;t[20] !== Be || t[21] !== Ke ? (e = Ke ? be(Be) : Be, t[20] = Be, t[21] = Ke, t[22] = e) : e = t[22];
        let n;t[23] !== L.currency || t[24] !== e ? (n = xe(L.currency, e), t[23] = L.currency, t[24] = e, t[25] = n) : n = t[25],
        qe = n
    }
    let q = qe,
        J = H.isPending,
        Y = J || U.isPending || N,
        Je;
    t[26] === s ? Je = t[27] : (Je = e => {
        ye.current || (ye.current = !0, s(e))
    }, t[26] = s, t[27] = Je);
    let Ye = Je,
        Xe;
    t[28] !== r || t[29] !== Ye || t[30] !== Y || t[31] !== c ? (Xe = () => {
        Y || (r != null && Te.current && !Ee.current ? (Se.current = !0, Ee.current = !0, V(r, {
            step: `purchase_canceled`,
            paymentAttemptNumber: Oe.current === 0 ? void 0 : Oe.current
        })) : r != null && !Te.current && !Se.current && (Se.current = !0, V(r, {
            step: `action_canceled`
        })), Ye(!1), c())
    }, t[28] = r, t[29] = Ye, t[30] = Y, t[31] = c, t[32] = Xe) : Xe = t[32];
    let Ze = Xe,
        Qe, $e;
    t[33] !== L || t[34] !== g || t[35] !== i || t[36] !== z || t[37] !== R || t[38] !== a ? (Qe = () => {
        Pe.current || L == null || (Pe.current = !0, Me({
            currentAccount: g,
            entrypoint: i,
            workspaceId: a,
            sessionId: je.current,
            seatQuantity: z,
            priceInterval: R,
            billingCountry: L.country,
            billingCurrency: L.currency
        }))
    }, $e = [L, g, i, z, R, a], t[33] = L, t[34] = g, t[35] = i, t[36] = z, t[37] = R, t[38] = a, t[39] = Qe, t[40] = $e) : (Qe = t[39], $e = t[40]), (0, W.useEffect)(Qe, $e);
    let et = j.status === `configure` ? L?.currency : j.selection.billingDetails.currency,
        tt;
    t[41] !== l || t[42] !== et ? (tt = e => l.formatNumber(e, {
        style: `currency`,
        currency: et ?? `USD`,
        currencyDisplay: `narrowSymbol`,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }), t[41] = l, t[42] = et, t[43] = tt) : tt = t[43];
    let nt = tt,
        rt;
    t[44] !== L?.currency || t[45] !== l ? (rt = e => l.formatNumber(e, {
        style: `currency`,
        currency: L?.currency ?? `USD`,
        currencyDisplay: `narrowSymbol`,
        trailingZeroDisplay: `stripIfInteger`
    }), t[44] = L?.currency, t[45] = l, t[46] = rt) : rt = t[46], L?.currency;
    let it = rt,
        at;
    t[47] === l ? at = t[48] : (at = e => l.formatMessage(e === `preview` ? K.genericPreviewError : K.genericCreateError), t[47] = l, t[48] = at);
    let ot = at,
        st;
    t[49] !== r || t[50] !== ot || t[51] !== J || t[52] !== H ? (st = async e => {
        if (!J) {
            le(null);
            try {
                let t = await H.mutateAsync({
                    seatQuantity: e.seatQuantity,
                    priceInterval: e.selectedPlan,
                    billingDetails: e.billingDetails
                });
                if (t.status === `payment_setup_required`) {
                    M({
                        status: `payment_setup`,
                        selection: e,
                        publishableKey: t.publishable_key
                    });
                    return
                }
                t.status !== `ready` && ze(t), M({
                    status: `confirm`,
                    selection: e,
                    preview: t
                }), r != null && !Te.current && (Te.current = !0, V(r, {
                    step: `checkout_shown`,
                    additionalPaidSeatCounts: {
                        default: e.seatQuantity
                    },
                    paymentRequired: t.amount_due.amount > 0,
                    billingInterval: e.selectedPlan === T.ANNUAL ? `yearly` : `monthly`
                }))
            } catch {
                r != null && V(r, {
                    step: `action_attempt_failed`,
                    actionFailureType: `checkout_preparation_failed`,
                    ...r.affectedTargetCount == null ? {} : {
                        failedTargetCount: r.affectedTargetCount,
                        successfulTargetCount: 0
                    }
                }), le(ot(`preview`))
            }
        }
    }, t[49] = r, t[50] = ot, t[51] = J, t[52] = H, t[53] = st) : st = t[53];
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
        Y || (le(null), M({
            status: `configure`
        }))
    }, t[59] = Y, t[60] = dt);
    let ft = dt,
        pt;
    t[61] !== r || t[62] !== j || t[63] !== U || t[64] !== g || t[65] !== i || t[66] !== Ye || t[67] !== ot || t[68] !== c || t[69] !== a ? (pt = async () => {
        if (j.status !== `confirm`) return;
        let {
            selection: e,
            preview: t
        } = j, {
            billingDetails: n
        } = e;
        le(null), Oe.current += 1;
        let o = Oe.current;
        r != null && V(r, {
            step: `purchase_submitted`,
            additionalPaidSeatCounts: {
                default: e.seatQuantity
            },
            paymentRequired: (t?.amount_due.amount ?? 0) > 0,
            paymentAttemptNumber: o,
            billingInterval: e.selectedPlan === T.ANNUAL ? `yearly` : `monthly`
        });
        try {
            await U.mutateAsync({
                seatQuantity: e.seatQuantity,
                priceInterval: e.selectedPlan,
                billingDetails: n
            }), Ne({
                currentAccount: g,
                entrypoint: i,
                workspaceId: a,
                sessionId: je.current,
                seatQuantity: e.seatQuantity,
                priceInterval: e.selectedPlan,
                billingCountry: n.country,
                billingCurrency: n.currency
            }), r != null && (Se.current = !0, Ee.current = !0, V(r, {
                step: `purchase_succeeded`,
                paymentAttemptNumber: o,
                billingInterval: e.selectedPlan === T.ANNUAL ? `yearly` : `monthly`
            })), Ye(!0), c()
        } catch {
            r != null && V(r, {
                step: `purchase_failed`,
                paymentAttemptNumber: o,
                paymentFailureReason: `request_failed`,
                billingInterval: e.selectedPlan === T.ANNUAL ? `yearly` : `monthly`
            }), le(ot(`create`))
        }
    }, t[61] = r, t[62] = j, t[63] = U, t[64] = g, t[65] = i, t[66] = Ye, t[67] = ot, t[68] = c, t[69] = a, t[70] = pt) : pt = t[70];
    let mt = pt,
        X = j.status === `confirm`,
        Z = L == null || Ve || O || fe,
        Q = Ge != null,
        ht, gt;
    t[71] !== r || t[72] !== Q || t[73] !== Z || t[74] !== q ? (ht = () => {
        r == null || we.current || !Q && (Z || q != null) || (we.current = !0, V(r, {
            actionFailureType: `checkout_preparation_failed`,
            ...r.affectedTargetCount == null ? {} : {
                failedTargetCount: r.affectedTargetCount,
                successfulTargetCount: 0
            },
            step: `action_attempt_failed`
        }))
    }, gt = [r, Q, Z, q], t[71] = r, t[72] = Q, t[73] = Z, t[74] = q, t[75] = ht, t[76] = gt) : (ht = t[75], gt = t[76]), (0, W.useEffect)(ht, gt);
    let _t;
    t[77] !== j.status || t[78] !== l || t[79] !== X ? (_t = l.formatMessage(X ? K.reviewTitle : j.status === `payment_setup` ? K.paymentSetupTitle : K.title), t[77] = j.status, t[78] = l, t[79] = X, t[80] = _t) : _t = t[80];
    let vt;
    t[81] !== j.status || t[82] !== l || t[83] !== X ? (vt = l.formatMessage(X ? K.reviewDescription : j.status === `payment_setup` ? K.paymentSetupDescription : K.description), t[81] = j.status, t[82] = l, t[83] = X, t[84] = vt) : vt = t[84];
    let $;
    t[85] !== j.status || t[86] !== U || t[87] !== ut || t[88] !== mt || t[89] !== Q || t[90] !== J || t[91] !== Z || t[92] !== X || t[93] !== q ? ($ = j.status === `payment_setup` ? void 0 : (0, G.jsx)(n, {
        color: `primary`,
        onClick: () => {
            X ? mt() : ut()
        },
        loading: X ? U.isPending : J,
        disabled: !X && (Z || Q || q == null),
        children: (0, G.jsx)(I, {
            ...X ? K.subscribeAndPay : K.continueToReview
        })
    }), t[85] = j.status, t[86] = U, t[87] = ut, t[88] = mt, t[89] = Q, t[90] = J, t[91] = Z, t[92] = X, t[93] = q, t[94] = $) : $ = t[94];
    let yt = j.status === `configure` ? Ze : ft,
        bt;
    t[95] === Symbol.for(`react.memo_cache_sentinel`) ? (bt = (0, G.jsx)(I, {
        ...K.back
    }), t[95] = bt) : bt = t[95];
    let xt;
    t[96] !== Y || t[97] !== yt ? (xt = (0, G.jsx)(n, {
        color: `secondary`,
        onClick: yt,
        disabled: Y,
        children: bt
    }), t[96] = Y, t[97] = yt, t[98] = xt) : xt = t[98];
    let St;
    t[99] === ae ? St = t[100] : (St = ae && (0, G.jsx)(h, {
        type: `error`,
        isElevated: !1,
        content: ae
    }), t[99] = ae, t[100] = St);
    let Ct;
    t[101] !== ge || t[102] !== j.preview || t[103] !== j.publishableKey || t[104] !== j.selection || t[105] !== j.status || t[106] !== nt || t[107] !== it || t[108] !== Q || t[109] !== l || t[110] !== J || t[111] !== Z || t[112] !== ct || t[113] !== z || t[114] !== R || t[115] !== q || t[116] !== a ? (Ct = j.status === `payment_setup` ? (0, G.jsx)(ke, {
        accountId: a,
        billingDetails: j.selection.billingDetails,
        publishableKey: j.publishableKey,
        onSubmittingChange: P,
        onComplete: () => ct(j.selection)
    }) : j.status === `confirm` ? (0, G.jsx)(Ue, {
        previewData: j.preview,
        seatQuantity: j.selection.seatQuantity,
        selectedPlan: j.selection.selectedPlan,
        formatCurrencyAmount: nt
    }) : Z ? (0, G.jsx)(`div`, {
        className: `flex min-h-64 items-center justify-center`,
        children: (0, G.jsx)(p, {
            className: `icon-lg text-token-text-tertiary`
        })
    }) : Q || q == null ? (0, G.jsx)(h, {
        type: `error`,
        isElevated: !1,
        content: l.formatMessage(K.pricingLoadError)
    }) : (0, G.jsxs)(G.Fragment, {
        children: [(0, G.jsxs)(pe, {
            className: `grid gap-4 pt-3 disabled:cursor-not-allowed disabled:opacity-60 md:grid-cols-2`,
            value: R,
            disabled: J,
            onValueChange: e => {
                e !== T.FLEXIBLE && e !== T.ANNUAL || te(e)
            },
            children: [(0, G.jsx)(Ce, {
                billingType: T.FLEXIBLE,
                ...q.flexibleBillingPlan,
                selectedValue: R,
                hideDetails: !0
            }), (0, G.jsx)(Ce, {
                billingType: T.ANNUAL,
                ...q.annualBillingPlan,
                selectedValue: R,
                hideDetails: !0
            })]
        }), (0, G.jsx)(De, {
            numSeats: z,
            minSeats: f(),
            maxSeats: ge,
            showEnterpriseUpsellOnLimit: !0,
            setNumSeats: ie,
            label: l.formatMessage(K.seatQuantityLabel),
            disabled: J
        }), (0, G.jsx)(He, {
            seatQuantity: z,
            selectedPlan: R,
            teamBillingInfo: q,
            formatCurrencyAmount: it
        })]
    }), t[101] = ge, t[102] = j.preview, t[103] = j.publishableKey, t[104] = j.selection, t[105] = j.status, t[106] = nt, t[107] = it, t[108] = Q, t[109] = l, t[110] = J, t[111] = Z, t[112] = ct, t[113] = z, t[114] = R, t[115] = q, t[116] = a, t[117] = Ct) : Ct = t[117];
    let wt;
    t[118] !== St || t[119] !== Ct ? (wt = (0, G.jsxs)(`div`, {
        className: `flex flex-col gap-5`,
        children: [St, Ct]
    }), t[118] = St, t[119] = Ct, t[120] = wt) : wt = t[120];
    let Tt;
    return t[121] !== Ze || t[122] !== Y || t[123] !== _t || t[124] !== vt || t[125] !== $ || t[126] !== xt || t[127] !== wt ? (Tt = (0, G.jsx)(d, {
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
        s = r === T.FLEXIBLE ? i.flexibleBillingPlan : i.annualBillingPlan,
        c = Te[r],
        l = n * (r === T.ANNUAL ? i.annualBillingPlan.monthlyCost * 12 : i.flexibleBillingPlan.monthlyCost),
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
        E;
    t[28] !== d || t[29] !== a ? (E = a(d), t[28] = d, t[29] = a, t[30] = E) : E = t[30];
    let D;
    t[31] === E ? D = t[32] : (D = (0, G.jsx)(I, {
        ...K.negativeFormattedAmount,
        values: {
            amount: E
        }
    }), t[31] = E, t[32] = D);
    let O;
    t[33] !== w || t[34] !== D ? (O = (0, G.jsxs)(`div`, {
        className: `text-token-text-secondary flex items-start justify-between gap-4`,
        children: [C, (0, G.jsx)(`span`, {
            className: w,
            children: D
        })]
    }), t[33] = w, t[34] = D, t[35] = O) : O = t[35];
    let k;
    t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, G.jsx)(`span`, {
        children: (0, G.jsx)(I, {
            ...B.allPlansTotal
        })
    }), t[36] = k) : k = t[36];
    let A;
    t[37] !== o || t[38] !== s.currencyCode ? (A = o.formatMessage(s.currencyCode), t[37] = o, t[38] = s.currencyCode, t[39] = A) : A = t[39];
    let j;
    t[40] !== a || t[41] !== u ? (j = a(u), t[40] = a, t[41] = u, t[42] = j) : j = t[42];
    let M;
    t[43] !== A || t[44] !== j ? (M = (0, G.jsxs)(`div`, {
        className: `flex items-start justify-between gap-4 text-base font-medium`,
        children: [k, (0, G.jsx)(`span`, {
            children: (0, G.jsx)(I, {
                ...K.currencyCodeWithAmount,
                values: {
                    currencyCode: A,
                    amount: j
                }
            })
        })]
    }), t[43] = A, t[44] = j, t[45] = M) : M = t[45];
    let N;
    t[46] === c.billedToday ? N = t[47] : (N = (0, G.jsx)(`span`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, G.jsx)(I, {
            ...c.billedToday
        })
    }), t[46] = c.billedToday, t[47] = N);
    let P;
    t[48] !== M || t[49] !== N ? (P = (0, G.jsxs)(`div`, {
        className: `border-token-border-default flex flex-col gap-2 border-t pt-4`,
        children: [M, N]
    }), t[48] = M, t[49] = N, t[50] = P) : P = t[50];
    let F;
    return t[51] !== S || t[52] !== O || t[53] !== P ? (F = (0, G.jsxs)(`div`, {
        className: `border-token-border-default flex h-fit flex-col gap-4 rounded-2xl border p-5`,
        children: [f, S, O, P]
    }), t[51] = S, t[52] = O, t[53] = P, t[54] = F) : F = t[54], F
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
    t[0] !== o || t[1] !== i ? (s = o.formatMessage(i === T.ANNUAL ? K.annualSubscription : K.monthlySubscription), t[0] = o, t[1] = i, t[2] = s) : s = t[2];
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
    let p = i === T.ANNUAL ? K.billedAnnuallyStartingToday : K.billedMonthlyStartingToday,
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
    let E = n.amount_due.amount / 100,
        D;
    t[32] !== a || t[33] !== E ? (D = a(E), t[32] = a, t[33] = E, t[34] = D) : D = t[34];
    let O;
    t[35] === D ? O = t[36] : (O = (0, G.jsxs)(`div`, {
        className: `border-token-border-default flex items-start justify-between gap-4 border-t pt-3`,
        children: [w, (0, G.jsx)(`span`, {
            className: `text-base font-medium`,
            children: D
        })]
    }), t[35] = D, t[36] = O);
    let k;
    t[37] !== y || t[38] !== C || t[39] !== O ? (k = (0, G.jsxs)(`div`, {
        className: `border-token-border-default flex flex-col gap-3 rounded-2xl border p-4`,
        children: [y, C, O]
    }), t[37] = y, t[38] = C, t[39] = O, t[40] = k) : k = t[40];
    let A;
    t[41] === n.default_payment_method ? A = t[42] : (A = n.default_payment_method && (0, G.jsx)(`div`, {
        className: `border-token-border-default rounded-2xl border p-4`,
        children: (0, G.jsx)(Se, {
            defaultPaymentMethod: n.default_payment_method
        })
    }), t[41] = n.default_payment_method, t[42] = A);
    let j;
    return t[43] !== k || t[44] !== A || t[45] !== h ? (j = (0, G.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [h, k, A]
    }), t[43] = k, t[44] = A, t[45] = h, t[46] = j) : j = t[46], j
}
var We, W, G, K, Ge = e((() => {
    We = ae(), Ae(), Re(), Oe(), le(), S(), g(), i(), y(), we(), Ee(), ye(), ge(), ue(), N(), k(), a(), c(), r(), o(), b(), fe(), O(), ie(), W = t(R()), L(), te(), G = P(), K = F({
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
//# sourceMappingURL=dc59de7a-jq2s89kzu00lw4t8.js.map