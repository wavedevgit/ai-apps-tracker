import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Drt as n,
    Fnt as r,
    Int as i,
    Jn as a,
    M1 as o,
    Nrt as ee,
    Pnt as te,
    R1 as s,
    Srt as ne,
    Xn as c,
    Yn as l,
    Z1 as u,
    dat as d,
    f6 as f,
    hit as p,
    lat as re,
    m6 as m,
    xrt as h,
    zot as g
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    G as _,
    O as ie,
    Vn as v,
    s as ae,
    wn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bin as b,
    Bln as oe,
    Dan as se,
    Lin as ce,
    Lln as x,
    Oan as le,
    Rln as ue,
    Vln as S,
    ban as de,
    bin as fe,
    dln as pe,
    dsn as C,
    grn as me,
    hrn as he,
    kln as ge,
    pGn as w,
    prn as T,
    sin as _e,
    uln as E,
    usn as ve,
    vin as D,
    wan as ye,
    xan as be,
    xin as xe
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    Dg as O,
    Lf as Se,
    Og as Ce,
    Rf as k,
    dm as A,
    kh as j,
    mm as we
} from "./c2675c8c-ossqum2x3eut0sh8.js";
import {
    i as M,
    o as Te
} from "./c7dae6a1-njmskpdqyx0qunn3.js";
import {
    t as N
} from "./a2704c05-fz7uvlbcwkj8t9b0.js";
import {
    n as P,
    t as Ee
} from "./ba59b5eb-ers9uamugc76yatf.js";
import {
    n as F,
    t as De
} from "./9cc78d41-im197d28vb2ddfg4.js";

function Oe(e, t) {
    return t && e.checkout_provider !== `stripe` ? !1 : (t || e.experiments?.auto_top_up_enabled !== `true`) && e.credit_purchase_auto_top_up?.enabled !== !0
}
var ke, Ae, I, L = e((() => {
    ke = y(), se(), S(), M(), C(), N(), x(), w(), j(), A(), P(), F(), k(), E(), D(), b(), T(), s(), p(), c(), f(), d(), i(), O(), ae(), Ae = t(v()), I = e => {
        "use forget";
        let t = (0, ke.c)(96),
            {
                autoTopUpEnabled: i,
                cancelUrl: s,
                checkoutOriginProvenance: c,
                creditCheckoutAnalytics: d,
                creditCheckoutAccountScope: f,
                entryPoint: p,
                isChatGPTWorkInlineCreditCheckout: v,
                supportsOaicsCreditModal: ae,
                returnLocation: y
            } = e,
            b = v !== void 0 && v,
            se = ae !== void 0 && ae,
            x = u(),
            S = f === `workspace_owner`,
            {
                country: C
            } = me(),
            {
                prepareCheckoutSession: w,
                getCheckoutPreparation: T,
                navigateToCheckout: E,
                recordCheckoutPresentation: D
            } = xe(),
            O;
        t[0] !== x || t[1] !== S ? (O = !S && (x?.isFree?.() === !0 || x?.isGo?.() === !0), t[0] = x, t[1] = S, t[2] = O) : O = t[2];
        let k;
        t[3] === O ? k = t[4] : (k = Ce(O), t[3] = O, t[4] = k);
        let A = k,
            j;
        t[5] !== x || t[6] !== p ? (j = (p === pe.CODEX_CREDIT_PURCHASE_MODAL || p === pe.CODEX_INLINE_CREDIT_PURCHASE_MODAL) && x?.isPersonalAccount() === !0 && x.hasPaidSubscription() && !x.isFree() && !x.isGo(), t[5] = x, t[6] = p, t[7] = j) : j = t[7];
        let M = j,
            N = !A,
            P;
        t[8] !== C || t[9] !== x || t[10] !== p || t[11] !== S || t[12] !== M || t[13] !== N ? (P = {
            country: C,
            currentAccount: x,
            location: p,
            shouldUsePaidSubscriptionBillingCurrency: N,
            pricingPlanIsTypeBusiness: S,
            retryCheckoutPricingOnMount: M
        }, t[8] = C, t[9] = x, t[10] = p, t[11] = S, t[12] = M, t[13] = N, t[14] = P) : P = t[14];
        let {
            billingDetails: F,
            status: I,
            errorReason: L
        } = he(P), R;
        t[15] !== x || t[16] !== p || t[17] !== S || t[18] !== A ? (R = A || S ? `USD` : x?.mustGetSubscriptionBillingCurrency(p) ?? `USD`, t[15] = x, t[16] = p, t[17] = S, t[18] = A, t[19] = R) : R = t[19];
        let je = R,
            z;
        t[20] !== C || t[21] !== F || t[22] !== S || t[23] !== je || t[24] !== A ? (z = S ? {
            countryCode: C,
            currency: F?.currency,
            enabled: F != null
        } : A ? {
            countryCode: F?.country,
            currency: F?.currency ?? `USD`
        } : {
            currency: je
        }, t[20] = C, t[21] = F, t[22] = S, t[23] = je, t[24] = A, t[25] = z) : z = t[25];
        let Me = z,
            B;
        t[26] !== Me || t[27] !== M ? (B = {
            ...Me,
            retryOnMount: M
        }, t[26] = Me, t[27] = M, t[28] = B) : B = t[28];
        let {
            data: V,
            status: H,
            error: U,
            isFetching: W
        } = m(B), Ne = x?.id, Pe;
        t[29] === Ne ? Pe = t[30] : (Pe = De({
            accountId: Ne
        }), t[29] = Ne, t[30] = Pe);
        let G = ie(Pe),
            Fe;
        t[31] !== G.data || t[32] !== G.isFetching || t[33] !== G.status ? (Fe = le({
            offer: G.data,
            status: G.status,
            isFetching: G.isFetching
        }), t[31] = G.data, t[32] = G.isFetching, t[33] = G.status, t[34] = Fe) : Fe = t[34];
        let Ie = Fe,
            Le = x != null && Ie.status === `pending`,
            Re, ze;
        if (t[35] !== U || t[36] !== H || t[37] !== p ? (Re = () => {
                H === `error` && re.addError(`Failed to load checkoutPricingConfig`, {
                    error: U,
                    entryPoint: p
                })
            }, ze = [H, U, p], t[35] = U, t[36] = H, t[37] = p, t[38] = Re, t[39] = ze) : (Re = t[38], ze = t[39]), (0, Ae.useEffect)(Re, ze), S && x != null && (!x.isSelfServeBusiness() || !x.isOwnerOfAccount()) || I === `error` || H === `error` && !W || x != null && Ie.status === `error`) {
            let e;
            t[40] !== L || t[41] !== I || t[42] !== H || t[43] !== x || t[44] !== W || t[45] !== S ? (e = S && x != null && (!x.isSelfServeBusiness() || !x.isOwnerOfAccount()) ? `workspace_eligibility_error` : I === `error` ? L ?? `initial_data_error` : H === `error` && !W ? `checkout_pricing_error` : `discount_offer_error`, t[40] = L, t[41] = I, t[42] = H, t[43] = x, t[44] = W, t[45] = S, t[46] = e) : e = t[46];
            let n;
            return t[47] === e ? n = t[48] : (n = {
                status: `error`,
                errorReason: e,
                checkoutPricingCountryConfig: null,
                submit: null,
                prepareCheckoutForModal: null
            }, t[47] = e, t[48] = n), n
        }
        if (H !== `success` || Le || !x || !F) {
            let e;
            return t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
                status: `pending`,
                checkoutPricingCountryConfig: null,
                submit: null,
                prepareCheckoutForModal: null
            }, t[49] = e) : e = t[49], e
        }
        let K = Ie.status === `ready` ? Ie.offer : null,
            q = x.id,
            Be;
        t[50] === x ? Be = t[51] : (Be = x.isPersonalAccount(), t[50] = x, t[51] = Be);
        let Ve = Be,
            He = g()?.user?.id,
            Ue;
        t[52] === Symbol.for(`react.memo_cache_sentinel`) ? (Ue = a(), t[52] = Ue) : Ue = t[52];
        let We = Ue,
            Ge;
        t[53] !== q || t[54] !== Ve || t[55] !== S ? (Ge = function() {
            let e = l();
            if (o()?.id !== q || g()?.user?.id !== He || a() !== We || S && (!o()?.isSelfServeBusiness() || !o()?.isOwnerOfAccount()) || (e == null ? !Ve : e !== q)) throw new DOMException(`Checkout account changed`, `AbortError`)
        }, t[53] = q, t[54] = Ve, t[55] = S, t[56] = Ge) : Ge = t[56];
        let J = Ge,
            Y;
        t[57] !== s || t[58] !== V || t[59] !== K || t[60] !== x.id || t[61] !== p || t[62] !== F || t[63] !== b || t[64] !== S || t[65] !== se ? (Y = (e, t, n) => {
            let r = t?.forceLegacyCheckout ? null : K,
                i = t?.forceLegacyCheckout ? `redirect` : r == null ? t?.checkoutUiMode : `custom`,
                a = t?.entryPoint ?? p,
                o = r?.offer_id,
                ee = Se(de.creditQuantityStep, n ? {
                    disableExposureLog: !0
                } : void 0),
                te = we({
                    amountPerCredit: V.currencyConfig.amount_per_credit,
                    minorUnitExponent: V.currencyConfig.minor_unit_exponent,
                    creditQuantityStep: de.creditQuantityStep,
                    minimumChargeMinorUnits: de.minimumChargeMinorUnits
                }),
                ne = ye({
                    quantity: e,
                    offer: r,
                    maximumCreditQuantity: ee,
                    experimentDefaultQuantity: (r == null ? null : Ee({
                        accountScope: S ? `workspace` : `personal`,
                        disableExposureLogging: n,
                        creditQuantityStep: de.creditQuantityStep,
                        minimumCreditQuantity: te,
                        maximumCreditQuantity: ee
                    }))?.defaultCreditQuantity ?? null,
                    clampToDiscountTier: !b
                });
            return {
                ...be({
                    accountId: x.id,
                    quantity: ne,
                    discountOfferId: o,
                    entryPoint: a,
                    checkoutUiMode: i,
                    billingDetails: F,
                    cancelUrl: t?.cancelUrl ?? s
                }),
                ...se && !b && i === `custom` ? {
                    supports_oaics_credit_modal: !0
                } : {}
            }
        }, t[57] = s, t[58] = V, t[59] = K, t[60] = x.id, t[61] = p, t[62] = F, t[63] = b, t[64] = S, t[65] = se, t[66] = Y) : Y = t[66];
        let X = Y,
            Ke;
        t[67] !== q || t[68] !== J || t[69] !== X || t[70] !== T ? (Ke = function(e, t) {
            let n = T(X(e, t, !0), {
                    isCheckoutModalEnabled: !0,
                    suppressPrepareCheckoutSessionEvent: !0,
                    backgroundPreparation: !0,
                    assertCurrentIdentity: J
                }),
                r = _([`standalone-credit-checkout`, He, q, n.checkoutPayload, n.sourceSearch]);
            return {
                key: r,
                async prepare(e) {
                    e.throwIfAborted(), J();
                    let t = await n.prepare(e);
                    return e.throwIfAborted(), J(), {
                        key: r,
                        checkoutPayload: n.checkoutPayload,
                        checkoutResponse: t,
                        recordPreparationExposure: n.recordPreparationExposure
                    }
                }
            }
        }, t[67] = q, t[68] = J, t[69] = X, t[70] = T, t[71] = Ke) : Ke = t[71];
        let Z = Ke,
            qe;
        t[72] !== J || t[73] !== i || t[74] !== c || t[75] !== d || t[76] !== x || t[77] !== X || t[78] !== Z || t[79] !== b || t[80] !== S || t[81] !== E || t[82] !== w || t[83] !== D || t[84] !== y ? (qe = async (e, t, a) => {
            let o = null;
            try {
                t?.signal?.throwIfAborted(), J();
                let s = t?.successReturnPath;
                te.setItem(r.CreditCheckoutRedirectPath, oe(s, S ? `/admin/billing` : `/codex/cloud/settings/usage`));
                let l = t?.returnLocation ?? y,
                    u = X(e, t, !1),
                    f = a || t?.onCustomCheckoutSessionPrepared != null,
                    p = t?.preparedCheckout,
                    re = f && p != null && Z(e, t).key === p.key;
                if (re) {
                    p.recordPreparationExposure?.(), u = p.checkoutPayload, fe(u, !0);
                    let e = ve(p.checkoutResponse);
                    e != null && ee(e, ne(new URLSearchParams({
                        source: u.checkout_source ?? ``
                    })), new URLSearchParams(window.location.search).get(`checkout_from`))
                }
                let m = re ? p.checkoutResponse : await w(u, {
                    assertCurrentIdentity: J,
                    ...t?.signal ? {
                        signal: t.signal
                    } : {},
                    ...f ? {
                        isCheckoutModalEnabled: !0
                    } : {}
                });
                if (t?.signal?.throwIfAborted(), J(), a && `tag` in m && m.tag === `custom_checkout_session` && Oe(m, b)) return o = m.checkout_session_id, D(m, {
                    checkoutPayload: u,
                    checkoutOriginProvenance: c,
                    isCheckoutModalEnabled: !0
                }), o = null, {
                    checkoutPayload: u,
                    checkoutSession: m
                };
                if (`tag` in m && m.tag === `custom_checkout_session` && t?.onCustomCheckoutSessionPrepared != null) return D(m, {
                    checkoutPayload: u,
                    checkoutOriginProvenance: c,
                    isCheckoutModalEnabled: !0
                }), t.onCustomCheckoutSessionPrepared({
                    checkoutPayload: u,
                    checkoutSession: m
                }), null;
                let h = s != null && u.checkout_source === `chatgpt_web_merged` ? oe(s, `/codex/app`) : void 0;
                (t?.continuationTask != null || h != null) && `checkout_session_id` in m && Te({
                    checkoutSessionId: m.checkout_session_id,
                    quantity: null,
                    ...h == null ? {} : {
                        returnPath: h
                    },
                    task: t?.continuationTask?.accountId === u.credit_purchase_data?.account_id ? t?.continuationTask : void 0
                });
                let g = !S && (window.location.pathname === `/codex/cloud` || window.location.pathname.startsWith(`/codex/cloud/`)),
                    _ = t?.reloadDocument === !0 || g || !S && l?.hash === `#settings/Usage`,
                    ie = _ ? void 0 : ge({
                        analytics: d,
                        accountId: x?.id,
                        checkoutSessionId: ve(m)
                    }),
                    v = new URLSearchParams;
                if (S || v.set(`return_to`, oe(l ? `${l.pathname}${l.search??``}${l.hash??``}` : null, `/codex/cloud/settings/usage`)), i === !1 && v.set(ce, `false`), g && s == null && t?.continuationTask == null && !n(window.location.search)) {
                    let e = ve(m);
                    e != null && ue(e)
                }
                return await E(m, {
                    creditCheckoutAnalytics: d,
                    checkoutPayload: u,
                    checkoutOriginProvenance: c,
                    ...t?.signal ? {
                        signal: t.signal
                    } : {},
                    ..._ ? {
                        reloadDocument: !0
                    } : {},
                    searchParams: v.toString() || void 0,
                    ...!_ && (l || ie) ? {
                        state: {
                            ...ie,
                            ...l ? {
                                [_e]: l
                            } : {}
                        }
                    } : {}
                }), null
            } catch (e) {
                let n = e;
                throw o != null && h(o), !t?.signal?.aborted && !(n instanceof DOMException && n.name === `AbortError`) && (te.removeItem(r.CreditCheckoutRedirectPath), re.addError(n)), n
            }
        }, t[72] = J, t[73] = i, t[74] = c, t[75] = d, t[76] = x, t[77] = X, t[78] = Z, t[79] = b, t[80] = S, t[81] = E, t[82] = w, t[83] = D, t[84] = y, t[85] = qe) : qe = t[85];
        let Q = qe,
            Je;
        t[86] === Q ? Je = t[87] : (Je = async (e, t) => {
            await Q(e, t, !1)
        }, t[86] = Q, t[87] = Je);
        let Ye = Je,
            Xe;
        t[88] === Q ? Xe = t[89] : (Xe = (e, t) => Q(e, t, !0), t[88] = Q, t[89] = Xe);
        let Ze = Xe,
            $;
        return t[90] !== V || t[91] !== K || t[92] !== Z || t[93] !== Ze || t[94] !== Ye ? ($ = {
            status: `success`,
            submit: Ye,
            prepareCheckoutForModal: Ze,
            getModalPreparationIntent: Z,
            checkoutPricingCountryConfig: V,
            creditDiscountOffer: K
        }, t[90] = V, t[91] = K, t[92] = Z, t[93] = Ze, t[94] = Ye, t[95] = $) : $ = t[95], $
    }
}));
export {
    I as n, L as t
};
//# sourceMappingURL=ad3d11c5-kvwg5tafdx8obhfw.js.map