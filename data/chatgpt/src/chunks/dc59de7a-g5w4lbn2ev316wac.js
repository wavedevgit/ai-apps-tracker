const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/2705a2d7-hm5pe1wjjn46p0ev.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-t80q9ew944ej0mgk.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-ocicxxw6jegn4vux.js", "assets/30901919-r9pahacmzqudnt4f.js", "assets/c470f5ab-py8gip6x11wq9s88.js", "assets/0e5afe53-bfccq9og5d2mon04.js", "assets/conversation-small-ht8gwtl7.css", "assets/c2675c8c-p3x4d0bnf7e77o1n.js", "assets/82782bc9-dyzlhaxotei12n1t.js", "assets/8b34dbc2-egl8cz04n8nmlktg.js", "assets/global-modals-dxg9ukpk.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Aw as r,
    CR as i,
    D6 as a,
    Dit as o,
    IU as s,
    Int as c,
    LU as l,
    Oit as u,
    Ow as d,
    Pnt as f,
    RI as p,
    Rz as m,
    T6 as h,
    TR as g,
    Yi as _,
    Zi as v,
    Znt as y,
    _6 as b,
    a2 as x,
    c2 as S,
    d2 as C,
    eE as w,
    ert as T,
    kI as E,
    nst as D,
    o0 as O,
    o2 as k,
    q1 as A,
    rst as j,
    s6 as M,
    zz as N
} from "./4813494d-t80q9ew944ej0mgk.js";
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
    D6t as se,
    E6t as ce,
    S6t as le,
    esn as ue,
    frn as de,
    lrn as fe,
    rsn as pe,
    urn as me
} from "./conversation-small-ocicxxw6jegn4vux.js";
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
} from "./c2675c8c-p3x4d0bnf7e77o1n.js";
import {
    i as V,
    r as Oe
} from "./cedb005c-kajnn2y3khbx9r3h.js";
var ke, Ae = e((() => {
    k(), z(), ke = x(() => ne(() => import(`./2705a2d7-hm5pe1wjjn46p0ev.js`).then(e => e.WorkspaceSubscriptionPaymentSetup), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
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
    f.logValueEventWithStatsig({
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
    let t = Pe(Ie, `started`, e);
    je({
        ...e,
        eventName: H,
        statsigEvent: Ie,
        eventId: t
    })
}

function Ne(e) {
    let t = Pe(Re, `completed`, e);
    je({
        ...e,
        eventName: Le,
        statsigEvent: Re,
        eventId: t
    })
}

function Pe(e, t, n) {
    return f.logStructuredEvent(`ChatgptBusinessBillingFirstChatgptSeatPurchaseSession`, {
        legacyStatsigEventName: e,
        action: t === `started` ? `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_SESSION_ACTION_STARTED` : `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_SESSION_ACTION_COMPLETED`,
        purchaseSessionId: n.sessionId,
        entryPoint: Fe[n.entrypoint],
        seatQuantity: T(n.seatQuantity),
        billingInterval: n.priceInterval === `year` ? `CHATGPT_WEB_SUBSCRIPTION_BILLING_INTERVAL_YEAR` : `CHATGPT_WEB_SUBSCRIPTION_BILLING_INTERVAL_MONTH`,
        billingCountry: n.billingCountry ?? void 0,
        billingCurrency: n.billingCurrency ?? void 0
    })
}
var Fe, H, Ie, Le, Re, ze = e((() => {
    y(), c(), Fe = {
        workspace_onboarding_admin_invite: `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_ENTRY_POINT_WORKSPACE_ONBOARDING_ADMIN_INVITE`,
        workspace_identity_default_seat_type: `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_ENTRY_POINT_WORKSPACE_IDENTITY_DEFAULT_SEAT_TYPE`,
        members_user_table: `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_ENTRY_POINT_MEMBERS_USER_TABLE`,
        members_invites_table: `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_ENTRY_POINT_MEMBERS_INVITES_TABLE`,
        members_invite_requests_table_edit_seat_type: `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_ENTRY_POINT_MEMBERS_INVITE_REQUESTS_TABLE_EDIT_SEAT_TYPE`,
        members_invite_requests_table_accept_request: `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_ENTRY_POINT_MEMBERS_INVITE_REQUESTS_TABLE_ACCEPT_REQUEST`,
        members_requests_accept_all: `CHATGPT_BUSINESS_BILLING_FIRST_SEAT_PURCHASE_ENTRY_POINT_MEMBERS_REQUESTS_ACCEPT_ALL`
    }, H = `ChatGPT Business: First ChatGPT Seat Purchase Session Started`, Ie = `chatgpt_business_first_chatgpt_seat_purchase_session_started`, Le = `ChatGPT Business: First ChatGPT Seat Purchase Session Completed`, Re = `chatgpt_business_first_chatgpt_seat_purchase_session_completed`
}));

function Be(e) {
    throw Error(`Unexpected workspace subscription preview result`)
}
async function Ve({
    analyticsFlow: e,
    workspace: t,
    introducedDefaultSeatCount: n = 0,
    entrypoint: r,
    onContinue: i
}) {
    if (!t || t.hasPaidSubscription() || !b(t.data.subscriptionStatus.planType)) return e != null && V(e, {
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
    })), s().danger(G.ownerRequiredError, {
        toastId: `first_chatgpt_seat_purchase_owner_required`,
        loggingTitle: `First ChatGPT Seat Purchase: Owner required`,
        loggingDescription: G.ownerRequiredError.defaultMessage
    }), !1;
    let a = Math.max(p(), n);
    return e != null && V(e, {
        step: `capacity_evaluated`,
        capacityResult: `purchase_required`,
        additionalPaidSeatCounts: {
            default: a
        }
    }), await new Promise(n => {
        let i = !1;
        C(He, {
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

function He(e) {
    "use forget";
    let t = (0, Ge.c)(129),
        {
            analyticsFlow: r,
            entrypoint: i,
            workspaceId: o,
            initialSeatQuantity: s,
            onComplete: c,
            onClose: l
        } = e,
        f = oe(),
        h = O(),
        v = g(),
        y, b, x, S;
    if (t[0] !== h || t[1] !== v?.id) {
        S = v?.id ?? (u() ? D().user?.id : void 0);
        let e;
        t[6] === h ? e = t[7] : (e = h?.hasPaidSubscription(), t[6] = h, t[7] = e), y = e !== !0, b = ee, x = ve({
            enabled: y,
            userId: S
        }), t[0] = h, t[1] = v?.id, t[2] = y, t[3] = b, t[4] = x, t[5] = S
    } else y = t[2], b = t[3], x = t[4], S = t[5];
    let {
        data: C,
        isLoading: w
    } = b(x), T = y && S != null && w, {
        country: k
    } = de(), A;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (A = {
        status: `configure`
    }, t[8] = A) : A = t[8];
    let [j, M] = (0, U.useState)(A), [N, P] = (0, U.useState)(!1), F;
    t[9] !== k || t[10] !== h ? (F = {
        country: k,
        currentAccount: h,
        location: `first-chatgpt-seat-purchase-modal`,
        pricingPlanIsTypeBusiness: !0
    }, t[9] = k, t[10] = h, t[11] = F) : F = t[11];
    let L = me(F),
        [R, te] = (0, U.useState)(E.FLEXIBLE),
        ne;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = p(), t[12] = ne) : ne = t[12];
    let [z, ie] = (0, U.useState)(Math.max(ne, s)), [ae, le] = (0, U.useState)(null), {
        data: fe,
        isLoading: pe
    } = we(o), he;
    t[13] === fe ? he = t[14] : (he = Ee(fe), t[13] = fe, t[14] = he);
    let ge = he,
        _e = (0, U.useRef)(!1),
        B = (0, U.useRef)(!1),
        be = (0, U.useRef)(!1),
        xe = (0, U.useRef)(!1),
        Ce = (0, U.useRef)(!1),
        Oe = (0, U.useRef)(0),
        Ae;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (Ae = re(), t[15] = Ae) : Ae = t[15];
    let je = (0, U.useRef)(Ae),
        Pe = (0, U.useRef)(!1),
        Fe = se(o),
        H = ce(o),
        Ie = L?.country,
        Le = L?.currency,
        Re = L != null,
        ze;
    t[16] !== Re || t[17] !== Ie || t[18] !== Le ? (ze = {
        countryCode: Ie,
        currency: Le,
        enabled: Re
    }, t[16] = Re, t[17] = Ie, t[18] = Le, t[19] = ze) : ze = t[19];
    let {
        data: Ve,
        isLoading: He,
        error: Ke
    } = a(ze), qe = y && C === !0, Je;
    bb0: {
        if (!L || !Ve) {
            Je = null;
            break bb0
        }
        let e;t[20] !== Ve || t[21] !== qe ? (e = qe ? Te(Ve) : Ve, t[20] = Ve, t[21] = qe, t[22] = e) : e = t[22];
        let n;t[23] !== L.currency || t[24] !== e ? (n = De(L.currency, e), t[23] = L.currency, t[24] = e, t[25] = n) : n = t[25],
        Je = n
    }
    let K = Je,
        q = Fe.isPending,
        J = q || H.isPending || N,
        Ye;
    t[26] === c ? Ye = t[27] : (Ye = e => {
        _e.current || (_e.current = !0, c(e))
    }, t[26] = c, t[27] = Ye);
    let Xe = Ye,
        Ze;
    t[28] !== r || t[29] !== Xe || t[30] !== J || t[31] !== l ? (Ze = () => {
        J || (r != null && xe.current && !Ce.current ? (B.current = !0, Ce.current = !0, V(r, {
            step: `purchase_canceled`,
            paymentAttemptNumber: Oe.current === 0 ? void 0 : Oe.current
        })) : r != null && !xe.current && !B.current && (B.current = !0, V(r, {
            step: `action_canceled`
        })), Xe(!1), l())
    }, t[28] = r, t[29] = Xe, t[30] = J, t[31] = l, t[32] = Ze) : Ze = t[32];
    let Qe = Ze,
        $e, et;
    t[33] !== L || t[34] !== h || t[35] !== i || t[36] !== z || t[37] !== R || t[38] !== o ? ($e = () => {
        Pe.current || L == null || (Pe.current = !0, Me({
            currentAccount: h,
            entrypoint: i,
            workspaceId: o,
            sessionId: je.current,
            seatQuantity: z,
            priceInterval: R,
            billingCountry: L.country,
            billingCurrency: L.currency
        }))
    }, et = [L, h, i, z, R, o], t[33] = L, t[34] = h, t[35] = i, t[36] = z, t[37] = R, t[38] = o, t[39] = $e, t[40] = et) : ($e = t[39], et = t[40]), (0, U.useEffect)($e, et);
    let tt = j.status === `configure` ? L?.currency : j.selection.billingDetails.currency,
        nt;
    t[41] !== f || t[42] !== tt ? (nt = e => f.formatNumber(e, {
        style: `currency`,
        currency: tt ?? `USD`,
        currencyDisplay: `narrowSymbol`,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }), t[41] = f, t[42] = tt, t[43] = nt) : nt = t[43];
    let rt = nt,
        it;
    t[44] !== L?.currency || t[45] !== f ? (it = e => f.formatNumber(e, {
        style: `currency`,
        currency: L?.currency ?? `USD`,
        currencyDisplay: `narrowSymbol`,
        trailingZeroDisplay: `stripIfInteger`
    }), t[44] = L?.currency, t[45] = f, t[46] = it) : it = t[46], L?.currency;
    let at = it,
        ot;
    t[47] === f ? ot = t[48] : (ot = e => f.formatMessage(e === `preview` ? G.genericPreviewError : G.genericCreateError), t[47] = f, t[48] = ot);
    let st = ot,
        ct;
    t[49] !== r || t[50] !== st || t[51] !== q || t[52] !== Fe ? (ct = async e => {
        if (!q) {
            le(null);
            try {
                let t = await Fe.mutateAsync({
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
                t.status !== `ready` && Be(t), M({
                    status: `confirm`,
                    selection: e,
                    preview: t
                }), r != null && !xe.current && (xe.current = !0, V(r, {
                    step: `checkout_shown`,
                    additionalPaidSeatCounts: {
                        default: e.seatQuantity
                    },
                    paymentRequired: t.amount_due.amount > 0,
                    billingInterval: e.selectedPlan === E.ANNUAL ? `yearly` : `monthly`
                }))
            } catch {
                r != null && V(r, {
                    step: `action_attempt_failed`,
                    actionFailureType: `checkout_preparation_failed`,
                    ...r.affectedTargetCount == null ? {} : {
                        failedTargetCount: r.affectedTargetCount,
                        successfulTargetCount: 0
                    }
                }), le(st(`preview`))
            }
        }
    }, t[49] = r, t[50] = st, t[51] = q, t[52] = Fe, t[53] = ct) : ct = t[53];
    let lt = ct,
        ut;
    t[54] !== L || t[55] !== lt || t[56] !== z || t[57] !== R ? (ut = async () => {
        L != null && await lt({
            seatQuantity: z,
            selectedPlan: R,
            billingDetails: L
        })
    }, t[54] = L, t[55] = lt, t[56] = z, t[57] = R, t[58] = ut) : ut = t[58];
    let dt = ut,
        ft;
    t[59] === J ? ft = t[60] : (ft = () => {
        J || (le(null), M({
            status: `configure`
        }))
    }, t[59] = J, t[60] = ft);
    let pt = ft,
        mt;
    t[61] !== r || t[62] !== j || t[63] !== H || t[64] !== h || t[65] !== i || t[66] !== Xe || t[67] !== st || t[68] !== l || t[69] !== o ? (mt = async () => {
        if (j.status !== `confirm`) return;
        let {
            selection: e,
            preview: t
        } = j, {
            billingDetails: n
        } = e;
        le(null), Oe.current += 1;
        let a = Oe.current;
        r != null && V(r, {
            step: `purchase_submitted`,
            additionalPaidSeatCounts: {
                default: e.seatQuantity
            },
            paymentRequired: (t?.amount_due.amount ?? 0) > 0,
            paymentAttemptNumber: a,
            billingInterval: e.selectedPlan === E.ANNUAL ? `yearly` : `monthly`
        });
        try {
            await H.mutateAsync({
                seatQuantity: e.seatQuantity,
                priceInterval: e.selectedPlan,
                billingDetails: n
            }), Ne({
                currentAccount: h,
                entrypoint: i,
                workspaceId: o,
                sessionId: je.current,
                seatQuantity: e.seatQuantity,
                priceInterval: e.selectedPlan,
                billingCountry: n.country,
                billingCurrency: n.currency
            }), r != null && (B.current = !0, Ce.current = !0, V(r, {
                step: `purchase_succeeded`,
                paymentAttemptNumber: a,
                billingInterval: e.selectedPlan === E.ANNUAL ? `yearly` : `monthly`
            })), Xe(!0), l()
        } catch {
            r != null && V(r, {
                step: `purchase_failed`,
                paymentAttemptNumber: a,
                paymentFailureReason: `request_failed`,
                billingInterval: e.selectedPlan === E.ANNUAL ? `yearly` : `monthly`
            }), le(st(`create`))
        }
    }, t[61] = r, t[62] = j, t[63] = H, t[64] = h, t[65] = i, t[66] = Xe, t[67] = st, t[68] = l, t[69] = o, t[70] = mt) : mt = t[70];
    let ht = mt,
        Y = j.status === `confirm`,
        X = L == null || He || T || pe,
        Z = Ke != null,
        gt, _t;
    t[71] !== r || t[72] !== Z || t[73] !== X || t[74] !== K ? (gt = () => {
        r == null || be.current || !Z && (X || K != null) || (be.current = !0, V(r, {
            actionFailureType: `checkout_preparation_failed`,
            ...r.affectedTargetCount == null ? {} : {
                failedTargetCount: r.affectedTargetCount,
                successfulTargetCount: 0
            },
            step: `action_attempt_failed`
        }))
    }, _t = [r, Z, X, K], t[71] = r, t[72] = Z, t[73] = X, t[74] = K, t[75] = gt, t[76] = _t) : (gt = t[75], _t = t[76]), (0, U.useEffect)(gt, _t);
    let vt;
    t[77] !== j.status || t[78] !== f || t[79] !== Y ? (vt = f.formatMessage(Y ? G.reviewTitle : j.status === `payment_setup` ? G.paymentSetupTitle : G.title), t[77] = j.status, t[78] = f, t[79] = Y, t[80] = vt) : vt = t[80];
    let yt;
    t[81] !== j.status || t[82] !== f || t[83] !== Y ? (yt = f.formatMessage(Y ? G.reviewDescription : j.status === `payment_setup` ? G.paymentSetupDescription : G.description), t[81] = j.status, t[82] = f, t[83] = Y, t[84] = yt) : yt = t[84];
    let Q;
    t[85] !== j.status || t[86] !== H || t[87] !== dt || t[88] !== ht || t[89] !== Z || t[90] !== q || t[91] !== X || t[92] !== Y || t[93] !== K ? (Q = j.status === `payment_setup` ? void 0 : (0, W.jsx)(n, {
        color: `primary`,
        onClick: () => {
            Y ? ht() : dt()
        },
        loading: Y ? H.isPending : q,
        disabled: !Y && (X || Z || K == null),
        children: (0, W.jsx)(I, {
            ...Y ? G.subscribeAndPay : G.continueToReview
        })
    }), t[85] = j.status, t[86] = H, t[87] = dt, t[88] = ht, t[89] = Z, t[90] = q, t[91] = X, t[92] = Y, t[93] = K, t[94] = Q) : Q = t[94];
    let bt = j.status === `configure` ? Qe : pt,
        xt;
    t[95] === Symbol.for(`react.memo_cache_sentinel`) ? (xt = (0, W.jsx)(I, {
        ...G.back
    }), t[95] = xt) : xt = t[95];
    let St;
    t[96] !== J || t[97] !== bt ? (St = (0, W.jsx)(n, {
        color: `secondary`,
        onClick: bt,
        disabled: J,
        children: xt
    }), t[96] = J, t[97] = bt, t[98] = St) : St = t[98];
    let Ct;
    t[99] === ae ? Ct = t[100] : (Ct = ae && (0, W.jsx)(_, {
        type: `error`,
        isElevated: !1,
        content: ae
    }), t[99] = ae, t[100] = Ct);
    let wt;
    t[101] !== ge || t[102] !== j.preview || t[103] !== j.publishableKey || t[104] !== j.selection || t[105] !== j.status || t[106] !== rt || t[107] !== at || t[108] !== Z || t[109] !== f || t[110] !== q || t[111] !== X || t[112] !== lt || t[113] !== z || t[114] !== R || t[115] !== K || t[116] !== o ? (wt = j.status === `payment_setup` ? (0, W.jsx)(ke, {
        accountId: o,
        billingDetails: j.selection.billingDetails,
        publishableKey: j.publishableKey,
        onSubmittingChange: P,
        onComplete: () => lt(j.selection)
    }) : j.status === `confirm` ? (0, W.jsx)(We, {
        previewData: j.preview,
        seatQuantity: j.selection.seatQuantity,
        selectedPlan: j.selection.selectedPlan,
        formatCurrencyAmount: rt
    }) : X ? (0, W.jsx)(`div`, {
        className: `flex min-h-64 items-center justify-center`,
        children: (0, W.jsx)(m, {
            className: `icon-lg text-token-text-tertiary`
        })
    }) : Z || K == null ? (0, W.jsx)(_, {
        type: `error`,
        isElevated: !1,
        content: f.formatMessage(G.pricingLoadError)
    }) : (0, W.jsxs)(W.Fragment, {
        children: [(0, W.jsxs)(ue, {
            className: `grid gap-4 pt-3 disabled:cursor-not-allowed disabled:opacity-60 md:grid-cols-2`,
            value: R,
            disabled: q,
            onValueChange: e => {
                e !== E.FLEXIBLE && e !== E.ANNUAL || te(e)
            },
            children: [(0, W.jsx)(ye, {
                billingType: E.FLEXIBLE,
                ...K.flexibleBillingPlan,
                selectedValue: R,
                hideDetails: !0
            }), (0, W.jsx)(ye, {
                billingType: E.ANNUAL,
                ...K.annualBillingPlan,
                selectedValue: R,
                hideDetails: !0
            })]
        }), (0, W.jsx)(Se, {
            numSeats: z,
            minSeats: p(),
            maxSeats: ge,
            showEnterpriseUpsellOnLimit: !0,
            setNumSeats: ie,
            label: f.formatMessage(G.seatQuantityLabel),
            disabled: q
        }), (0, W.jsx)(Ue, {
            seatQuantity: z,
            selectedPlan: R,
            teamBillingInfo: K,
            formatCurrencyAmount: at
        })]
    }), t[101] = ge, t[102] = j.preview, t[103] = j.publishableKey, t[104] = j.selection, t[105] = j.status, t[106] = rt, t[107] = at, t[108] = Z, t[109] = f, t[110] = q, t[111] = X, t[112] = lt, t[113] = z, t[114] = R, t[115] = K, t[116] = o, t[117] = wt) : wt = t[117];
    let $;
    t[118] !== Ct || t[119] !== wt ? ($ = (0, W.jsxs)(`div`, {
        className: `flex flex-col gap-5`,
        children: [Ct, wt]
    }), t[118] = Ct, t[119] = wt, t[120] = $) : $ = t[120];
    let Tt;
    return t[121] !== Qe || t[122] !== J || t[123] !== vt || t[124] !== yt || t[125] !== Q || t[126] !== St || t[127] !== $ ? (Tt = (0, W.jsx)(d, {
        testId: `modal-first-chatgpt-seat-purchase`,
        isOpen: !0,
        onClose: Qe,
        size: `custom`,
        className: `w-full max-w-[720px]`,
        showCloseButton: !0,
        shouldIgnoreClickOutside: J,
        title: vt,
        description: yt,
        primaryButton: Q,
        secondaryButton: St,
        children: $
    }), t[121] = Qe, t[122] = J, t[123] = vt, t[124] = yt, t[125] = Q, t[126] = St, t[127] = $, t[128] = Tt) : Tt = t[128], Tt
}

function Ue(e) {
    "use forget";
    let t = (0, Ge.c)(55),
        {
            seatQuantity: n,
            selectedPlan: r,
            teamBillingInfo: i,
            formatCurrencyAmount: a
        } = e,
        o = oe(),
        s = r === E.FLEXIBLE ? i.flexibleBillingPlan : i.annualBillingPlan,
        c = ge[r],
        l = n * (r === E.ANNUAL ? i.annualBillingPlan.monthlyCost * 12 : i.flexibleBillingPlan.monthlyCost),
        u = n * s.unitCost,
        d = l - u,
        f;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, W.jsx)(`span`, {
        className: `text-lg font-semibold`,
        children: (0, W.jsx)(I, {
            ...G.summaryTitle
        })
    }), t[0] = f) : f = t[0];
    let p;
    t[1] === c.name ? p = t[2] : (p = (0, W.jsx)(`div`, {
        className: `font-medium`,
        children: (0, W.jsx)(I, {
            ...c.name
        })
    }), t[1] = c.name, t[2] = p);
    let m;
    t[3] === n ? m = t[4] : (m = {
        numSeats: n
    }, t[3] = n, t[4] = m);
    let h;
    t[5] !== c.breakdown || t[6] !== m ? (h = (0, W.jsx)(`div`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, W.jsx)(I, {
            ...c.breakdown,
            values: m
        })
    }), t[5] = c.breakdown, t[6] = m, t[7] = h) : h = t[7];
    let g;
    t[8] !== p || t[9] !== h ? (g = (0, W.jsxs)(`div`, {
        children: [p, h]
    }), t[8] = p, t[9] = h, t[10] = g) : g = t[10];
    let _;
    t[11] !== a || t[12] !== l ? (_ = a(l), t[11] = a, t[12] = l, t[13] = _) : _ = t[13];
    let v;
    t[14] === _ ? v = t[15] : (v = (0, W.jsx)(`div`, {
        className: `font-medium`,
        children: _
    }), t[14] = _, t[15] = v);
    let y;
    t[16] !== a || t[17] !== s.monthlyCost ? (y = a(s.monthlyCost), t[16] = a, t[17] = s.monthlyCost, t[18] = y) : y = t[18];
    let b;
    t[19] === y ? b = t[20] : (b = (0, W.jsx)(`div`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, W.jsx)(I, {
            ...G.perSeatAmount,
            values: {
                amount: y
            }
        })
    }), t[19] = y, t[20] = b);
    let x;
    t[21] !== v || t[22] !== b ? (x = (0, W.jsxs)(`div`, {
        className: `text-end`,
        children: [v, b]
    }), t[21] = v, t[22] = b, t[23] = x) : x = t[23];
    let S;
    t[24] !== x || t[25] !== g ? (S = (0, W.jsxs)(`div`, {
        className: `flex items-start justify-between gap-4`,
        children: [g, x]
    }), t[24] = x, t[25] = g, t[26] = S) : S = t[26];
    let C;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, W.jsx)(`span`, {
        children: (0, W.jsx)(I, {
            ...B.planDiscountLabel
        })
    }), t[27] = C) : C = t[27];
    let w = d > 0 ? `text-[#10A37F]` : void 0,
        T;
    t[28] !== d || t[29] !== a ? (T = a(d), t[28] = d, t[29] = a, t[30] = T) : T = t[30];
    let D;
    t[31] === T ? D = t[32] : (D = (0, W.jsx)(I, {
        ...G.negativeFormattedAmount,
        values: {
            amount: T
        }
    }), t[31] = T, t[32] = D);
    let O;
    t[33] !== w || t[34] !== D ? (O = (0, W.jsxs)(`div`, {
        className: `text-token-text-secondary flex items-start justify-between gap-4`,
        children: [C, (0, W.jsx)(`span`, {
            className: w,
            children: D
        })]
    }), t[33] = w, t[34] = D, t[35] = O) : O = t[35];
    let k;
    t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, W.jsx)(`span`, {
        children: (0, W.jsx)(I, {
            ...B.allPlansTotal
        })
    }), t[36] = k) : k = t[36];
    let A;
    t[37] !== o || t[38] !== s.currencyCode ? (A = o.formatMessage(s.currencyCode), t[37] = o, t[38] = s.currencyCode, t[39] = A) : A = t[39];
    let j;
    t[40] !== a || t[41] !== u ? (j = a(u), t[40] = a, t[41] = u, t[42] = j) : j = t[42];
    let M;
    t[43] !== A || t[44] !== j ? (M = (0, W.jsxs)(`div`, {
        className: `flex items-start justify-between gap-4 text-base font-medium`,
        children: [k, (0, W.jsx)(`span`, {
            children: (0, W.jsx)(I, {
                ...G.currencyCodeWithAmount,
                values: {
                    currencyCode: A,
                    amount: j
                }
            })
        })]
    }), t[43] = A, t[44] = j, t[45] = M) : M = t[45];
    let N;
    t[46] === c.billedToday ? N = t[47] : (N = (0, W.jsx)(`span`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, W.jsx)(I, {
            ...c.billedToday
        })
    }), t[46] = c.billedToday, t[47] = N);
    let P;
    t[48] !== M || t[49] !== N ? (P = (0, W.jsxs)(`div`, {
        className: `border-token-border-default flex flex-col gap-2 border-t pt-4`,
        children: [M, N]
    }), t[48] = M, t[49] = N, t[50] = P) : P = t[50];
    let F;
    return t[51] !== S || t[52] !== O || t[53] !== P ? (F = (0, W.jsxs)(`div`, {
        className: `border-token-border-default flex h-fit flex-col gap-4 rounded-2xl border p-5`,
        children: [f, S, O, P]
    }), t[51] = S, t[52] = O, t[53] = P, t[54] = F) : F = t[54], F
}

function We(e) {
    "use forget";
    let t = (0, Ge.c)(47),
        {
            previewData: n,
            seatQuantity: r,
            selectedPlan: i,
            formatCurrencyAmount: a
        } = e,
        o = oe(),
        s;
    t[0] !== o || t[1] !== i ? (s = o.formatMessage(i === E.ANNUAL ? G.annualSubscription : G.monthlySubscription), t[0] = o, t[1] = i, t[2] = s) : s = t[2];
    let c;
    t[3] !== r || t[4] !== s ? (c = (0, W.jsx)(`span`, {
        className: `font-semibold`,
        children: (0, W.jsx)(I, {
            ...G.subscriptionLineItem,
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
    t[9] === u ? d = t[10] : (d = (0, W.jsx)(`span`, {
        className: `font-semibold`,
        children: u
    }), t[9] = u, t[10] = d);
    let f;
    t[11] !== c || t[12] !== d ? (f = (0, W.jsxs)(`div`, {
        className: `flex items-start justify-between gap-4`,
        children: [c, d]
    }), t[11] = c, t[12] = d, t[13] = f) : f = t[13];
    let p = i === E.ANNUAL ? G.billedAnnuallyStartingToday : G.billedMonthlyStartingToday,
        m;
    t[14] === p ? m = t[15] : (m = (0, W.jsx)(`span`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, W.jsx)(I, {
            ...p
        })
    }), t[14] = p, t[15] = m);
    let h;
    t[16] !== f || t[17] !== m ? (h = (0, W.jsxs)(`div`, {
        children: [f, m]
    }), t[16] = f, t[17] = m, t[18] = h) : h = t[18];
    let g;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, W.jsx)(`span`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, W.jsx)(I, {
            ...G.subtotal
        })
    }), t[19] = g) : g = t[19];
    let _ = n.amount_due.amount_excluding_tax / 100,
        v;
    t[20] !== a || t[21] !== _ ? (v = a(_), t[20] = a, t[21] = _, t[22] = v) : v = t[22];
    let y;
    t[23] === v ? y = t[24] : (y = (0, W.jsxs)(`div`, {
        className: `flex items-start justify-between gap-4`,
        children: [g, (0, W.jsx)(`span`, {
            className: `text-sm font-medium`,
            children: v
        })]
    }), t[23] = v, t[24] = y);
    let b;
    t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, W.jsx)(`span`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, W.jsx)(I, {
            ...G.tax
        })
    }), t[25] = b) : b = t[25];
    let x = n.amount_due.tax_amount / 100,
        S;
    t[26] !== a || t[27] !== x ? (S = a(x), t[26] = a, t[27] = x, t[28] = S) : S = t[28];
    let C;
    t[29] === S ? C = t[30] : (C = (0, W.jsxs)(`div`, {
        className: `flex items-start justify-between gap-4`,
        children: [b, (0, W.jsx)(`span`, {
            className: `text-sm font-medium`,
            children: S
        })]
    }), t[29] = S, t[30] = C);
    let w;
    t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, W.jsx)(`span`, {
        className: `text-base font-medium`,
        children: (0, W.jsx)(I, {
            ...G.totalDueToday
        })
    }), t[31] = w) : w = t[31];
    let T = n.amount_due.amount / 100,
        D;
    t[32] !== a || t[33] !== T ? (D = a(T), t[32] = a, t[33] = T, t[34] = D) : D = t[34];
    let O;
    t[35] === D ? O = t[36] : (O = (0, W.jsxs)(`div`, {
        className: `border-token-border-default flex items-start justify-between gap-4 border-t pt-3`,
        children: [w, (0, W.jsx)(`span`, {
            className: `text-base font-medium`,
            children: D
        })]
    }), t[35] = D, t[36] = O);
    let k;
    t[37] !== y || t[38] !== C || t[39] !== O ? (k = (0, W.jsxs)(`div`, {
        className: `border-token-border-default flex flex-col gap-3 rounded-2xl border p-4`,
        children: [y, C, O]
    }), t[37] = y, t[38] = C, t[39] = O, t[40] = k) : k = t[40];
    let A;
    t[41] === n.default_payment_method ? A = t[42] : (A = n.default_payment_method && (0, W.jsx)(`div`, {
        className: `border-token-border-default rounded-2xl border p-4`,
        children: (0, W.jsx)(xe, {
            defaultPaymentMethod: n.default_payment_method
        })
    }), t[41] = n.default_payment_method, t[42] = A);
    let j;
    return t[43] !== k || t[44] !== A || t[45] !== h ? (j = (0, W.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [h, k, A]
    }), t[43] = k, t[44] = A, t[45] = h, t[46] = j) : j = t[46], j
}
var Ge, U, W, G, Ke = e((() => {
    Ge = ae(), Ae(), ze(), Oe(), le(), w(), v(), r(), S(), Ce(), be(), he(), _e(), fe(), N(), A(), i(), l(), o(), h(), M(), pe(), j(), ie(), U = t(R()), L(), te(), W = P(), G = F({
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
    Ke as n, Ve as t
};
//# sourceMappingURL=dc59de7a-g5w4lbn2ev316wac.js.map