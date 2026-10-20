import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ant as n,
    Crt as r,
    Fot as i,
    Jn as a,
    M1 as o,
    Mnt as s,
    R1 as c,
    Xn as l,
    Yn as u,
    Z1 as ee,
    _rt as d,
    aat as f,
    dit as p,
    f6 as m,
    jnt as te,
    krt as ne,
    m6 as re,
    sat as h,
    vrt as ie
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    G as g,
    O as ae,
    Vn as _,
    s as oe,
    wn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bin as y,
    Bln as se,
    Dan as b,
    Lin as ce,
    Lln as x,
    Oan as le,
    Rln as ue,
    Vln as S,
    ban as de,
    bin as fe,
    dln as pe,
    dsn as C,
    fGn as me,
    grn as he,
    hrn as ge,
    kln as _e,
    prn as w,
    sin as ve,
    uln as T,
    usn as ye,
    vin as E,
    wan as be,
    xan as xe,
    xin as Se
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Dg as D,
    Lf as Ce,
    Og as we,
    Rf as O,
    dm as k,
    kh as A,
    mm as Te
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    i as j,
    o as Ee
} from "./c7dae6a1-d4k41q29zurayre1.js";
import {
    t as M
} from "./a2704c05-j18t5q5len689rxu.js";
import {
    n as N,
    t as De
} from "./ba59b5eb-ck24jpxw2e448ehe.js";
import {
    n as P,
    t as Oe
} from "./9cc78d41-e2o421844k8uhv2o.js";

function ke(e, t) {
    return t && e.checkout_provider !== `stripe` ? !1 : (t || e.experiments?.auto_top_up_enabled !== `true`) && e.credit_purchase_auto_top_up?.enabled !== !0
}
var Ae, je, F, I = e((() => {
    Ae = v(), b(), S(), j(), C(), M(), x(), me(), A(), k(), N(), P(), O(), T(), E(), y(), w(), c(), p(), l(), m(), h(), s(), D(), oe(), je = t(_()), F = e => {
        "use forget";
        let t = (0, Ae.c)(96),
            {
                autoTopUpEnabled: s,
                cancelUrl: c,
                checkoutOriginProvenance: l,
                creditCheckoutAnalytics: p,
                creditCheckoutAccountScope: m,
                entryPoint: h,
                isChatGPTWorkInlineCreditCheckout: _,
                supportsOaicsCreditModal: oe,
                returnLocation: v
            } = e,
            y = _ !== void 0 && _,
            b = oe !== void 0 && oe,
            x = ee(),
            S = m === `workspace_owner`,
            {
                country: C
            } = he(),
            {
                prepareCheckoutSession: me,
                getCheckoutPreparation: w,
                navigateToCheckout: T,
                recordCheckoutPresentation: E
            } = Se(),
            D;
        t[0] !== x || t[1] !== S ? (D = !S && (x?.isFree?.() === !0 || x?.isGo?.() === !0), t[0] = x, t[1] = S, t[2] = D) : D = t[2];
        let O;
        t[3] === D ? O = t[4] : (O = we(D), t[3] = D, t[4] = O);
        let k = O,
            A;
        t[5] !== x || t[6] !== h ? (A = (h === pe.CODEX_CREDIT_PURCHASE_MODAL || h === pe.CODEX_INLINE_CREDIT_PURCHASE_MODAL) && x?.isPersonalAccount() === !0 && x.hasPaidSubscription() && !x.isFree() && !x.isGo(), t[5] = x, t[6] = h, t[7] = A) : A = t[7];
        let j = A,
            M = !k,
            N;
        t[8] !== C || t[9] !== x || t[10] !== h || t[11] !== S || t[12] !== j || t[13] !== M ? (N = {
            country: C,
            currentAccount: x,
            location: h,
            shouldUsePaidSubscriptionBillingCurrency: M,
            pricingPlanIsTypeBusiness: S,
            retryCheckoutPricingOnMount: j
        }, t[8] = C, t[9] = x, t[10] = h, t[11] = S, t[12] = j, t[13] = M, t[14] = N) : N = t[14];
        let {
            billingDetails: P,
            status: F,
            errorReason: I
        } = ge(N), L;
        t[15] !== x || t[16] !== h || t[17] !== S || t[18] !== k ? (L = k || S ? `USD` : x?.mustGetSubscriptionBillingCurrency(h) ?? `USD`, t[15] = x, t[16] = h, t[17] = S, t[18] = k, t[19] = L) : L = t[19];
        let Me = L,
            R;
        t[20] !== C || t[21] !== P || t[22] !== S || t[23] !== Me || t[24] !== k ? (R = S ? {
            countryCode: C,
            currency: P?.currency,
            enabled: P != null
        } : k ? {
            countryCode: P?.country,
            currency: P?.currency ?? `USD`
        } : {
            currency: Me
        }, t[20] = C, t[21] = P, t[22] = S, t[23] = Me, t[24] = k, t[25] = R) : R = t[25];
        let Ne = R,
            z;
        t[26] !== Ne || t[27] !== j ? (z = {
            ...Ne,
            retryOnMount: j
        }, t[26] = Ne, t[27] = j, t[28] = z) : z = t[28];
        let {
            data: B,
            status: V,
            error: H,
            isFetching: U
        } = re(z), Pe = x?.id, W;
        t[29] === Pe ? W = t[30] : (W = Oe({
            accountId: Pe
        }), t[29] = Pe, t[30] = W);
        let G = ae(W),
            Fe;
        t[31] !== G.data || t[32] !== G.isFetching || t[33] !== G.status ? (Fe = le({
            offer: G.data,
            status: G.status,
            isFetching: G.isFetching
        }), t[31] = G.data, t[32] = G.isFetching, t[33] = G.status, t[34] = Fe) : Fe = t[34];
        let Ie = Fe,
            Le = x != null && Ie.status === `pending`,
            Re, ze;
        if (t[35] !== H || t[36] !== V || t[37] !== h ? (Re = () => {
                V === `error` && f.addError(`Failed to load checkoutPricingConfig`, {
                    error: H,
                    entryPoint: h
                })
            }, ze = [V, H, h], t[35] = H, t[36] = V, t[37] = h, t[38] = Re, t[39] = ze) : (Re = t[38], ze = t[39]), (0, je.useEffect)(Re, ze), S && x != null && (!x.isSelfServeBusiness() || !x.isOwnerOfAccount()) || F === `error` || V === `error` && !U || x != null && Ie.status === `error`) {
            let e;
            t[40] !== I || t[41] !== F || t[42] !== V || t[43] !== x || t[44] !== U || t[45] !== S ? (e = S && x != null && (!x.isSelfServeBusiness() || !x.isOwnerOfAccount()) ? `workspace_eligibility_error` : F === `error` ? I ?? `initial_data_error` : V === `error` && !U ? `checkout_pricing_error` : `discount_offer_error`, t[40] = I, t[41] = F, t[42] = V, t[43] = x, t[44] = U, t[45] = S, t[46] = e) : e = t[46];
            let n;
            return t[47] === e ? n = t[48] : (n = {
                status: `error`,
                errorReason: e,
                checkoutPricingCountryConfig: null,
                submit: null,
                prepareCheckoutForModal: null
            }, t[47] = e, t[48] = n), n
        }
        if (V !== `success` || Le || !x || !P) {
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
            He = i()?.user?.id,
            Ue;
        t[52] === Symbol.for(`react.memo_cache_sentinel`) ? (Ue = a(), t[52] = Ue) : Ue = t[52];
        let We = Ue,
            Ge;
        t[53] !== q || t[54] !== Ve || t[55] !== S ? (Ge = function() {
            let e = u();
            if (o()?.id !== q || i()?.user?.id !== He || a() !== We || S && (!o()?.isSelfServeBusiness() || !o()?.isOwnerOfAccount()) || (e == null ? !Ve : e !== q)) throw new DOMException(`Checkout account changed`, `AbortError`)
        }, t[53] = q, t[54] = Ve, t[55] = S, t[56] = Ge) : Ge = t[56];
        let J = Ge,
            Y;
        t[57] !== c || t[58] !== B || t[59] !== K || t[60] !== x.id || t[61] !== h || t[62] !== P || t[63] !== y || t[64] !== S || t[65] !== b ? (Y = (e, t, n) => {
            let r = t?.forceLegacyCheckout ? null : K,
                i = t?.forceLegacyCheckout ? `redirect` : r == null ? t?.checkoutUiMode : `custom`,
                a = t?.entryPoint ?? h,
                o = r?.offer_id,
                s = Ce(de.creditQuantityStep, n ? {
                    disableExposureLog: !0
                } : void 0),
                l = Te({
                    amountPerCredit: B.currencyConfig.amount_per_credit,
                    minorUnitExponent: B.currencyConfig.minor_unit_exponent,
                    creditQuantityStep: de.creditQuantityStep,
                    minimumChargeMinorUnits: de.minimumChargeMinorUnits
                }),
                u = be({
                    quantity: e,
                    offer: r,
                    maximumCreditQuantity: s,
                    experimentDefaultQuantity: (r == null ? null : De({
                        accountScope: S ? `workspace` : `personal`,
                        disableExposureLogging: n,
                        creditQuantityStep: de.creditQuantityStep,
                        minimumCreditQuantity: l,
                        maximumCreditQuantity: s
                    }))?.defaultCreditQuantity ?? null,
                    clampToDiscountTier: !y
                });
            return {
                ...xe({
                    accountId: x.id,
                    quantity: u,
                    discountOfferId: o,
                    entryPoint: a,
                    checkoutUiMode: i,
                    billingDetails: P,
                    cancelUrl: t?.cancelUrl ?? c
                }),
                ...b && !y && i === `custom` ? {
                    supports_oaics_credit_modal: !0
                } : {}
            }
        }, t[57] = c, t[58] = B, t[59] = K, t[60] = x.id, t[61] = h, t[62] = P, t[63] = y, t[64] = S, t[65] = b, t[66] = Y) : Y = t[66];
        let X = Y,
            Ke;
        t[67] !== q || t[68] !== J || t[69] !== X || t[70] !== w ? (Ke = function(e, t) {
            let n = w(X(e, t, !0), {
                    isCheckoutModalEnabled: !0,
                    suppressPrepareCheckoutSessionEvent: !0,
                    backgroundPreparation: !0,
                    assertCurrentIdentity: J
                }),
                r = g([`standalone-credit-checkout`, He, q, n.checkoutPayload, n.sourceSearch]);
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
        }, t[67] = q, t[68] = J, t[69] = X, t[70] = w, t[71] = Ke) : Ke = t[71];
        let Z = Ke,
            qe;
        t[72] !== J || t[73] !== s || t[74] !== l || t[75] !== p || t[76] !== x || t[77] !== X || t[78] !== Z || t[79] !== y || t[80] !== S || t[81] !== T || t[82] !== me || t[83] !== E || t[84] !== v ? (qe = async (e, t, i) => {
            let a = null;
            try {
                t?.signal?.throwIfAborted(), J();
                let o = t?.successReturnPath;
                n.setItem(te.CreditCheckoutRedirectPath, se(o, S ? `/admin/billing` : `/codex/cloud/settings/usage`));
                let c = t?.returnLocation ?? v,
                    u = X(e, t, !1),
                    ee = i || t?.onCustomCheckoutSessionPrepared != null,
                    d = t?.preparedCheckout,
                    f = ee && d != null && Z(e, t).key === d.key;
                if (f) {
                    d.recordPreparationExposure?.(), u = d.checkoutPayload, fe(u, !0);
                    let e = ye(d.checkoutResponse);
                    e != null && ne(e, ie(new URLSearchParams({
                        source: u.checkout_source ?? ``
                    })), new URLSearchParams(window.location.search).get(`checkout_from`))
                }
                let m = f ? d.checkoutResponse : await me(u, {
                    assertCurrentIdentity: J,
                    ...t?.signal ? {
                        signal: t.signal
                    } : {},
                    ...ee ? {
                        isCheckoutModalEnabled: !0
                    } : {}
                });
                if (t?.signal?.throwIfAborted(), J(), i && `tag` in m && m.tag === `custom_checkout_session` && ke(m, y)) return a = m.checkout_session_id, E(m, {
                    checkoutPayload: u,
                    checkoutOriginProvenance: l,
                    isCheckoutModalEnabled: !0
                }), a = null, {
                    checkoutPayload: u,
                    checkoutSession: m
                };
                if (`tag` in m && m.tag === `custom_checkout_session` && t?.onCustomCheckoutSessionPrepared != null) return E(m, {
                    checkoutPayload: u,
                    checkoutOriginProvenance: l,
                    isCheckoutModalEnabled: !0
                }), t.onCustomCheckoutSessionPrepared({
                    checkoutPayload: u,
                    checkoutSession: m
                }), null;
                let re = o != null && u.checkout_source === `chatgpt_web_merged` ? se(o, `/codex/app`) : void 0;
                (t?.continuationTask != null || re != null) && `checkout_session_id` in m && Ee({
                    checkoutSessionId: m.checkout_session_id,
                    quantity: null,
                    ...re == null ? {} : {
                        returnPath: re
                    },
                    task: t?.continuationTask?.accountId === u.credit_purchase_data?.account_id ? t?.continuationTask : void 0
                });
                let h = !S && (window.location.pathname === `/codex/cloud` || window.location.pathname.startsWith(`/codex/cloud/`)),
                    g = t?.reloadDocument === !0 || h || !S && c?.hash === `#settings/Usage`,
                    ae = g ? void 0 : _e({
                        analytics: p,
                        accountId: x?.id,
                        checkoutSessionId: ye(m)
                    }),
                    _ = new URLSearchParams;
                if (S || _.set(`return_to`, se(c ? `${c.pathname}${c.search??``}${c.hash??``}` : null, `/codex/cloud/settings/usage`)), s === !1 && _.set(ce, `false`), h && o == null && t?.continuationTask == null && !r(window.location.search)) {
                    let e = ye(m);
                    e != null && ue(e)
                }
                return await T(m, {
                    creditCheckoutAnalytics: p,
                    checkoutPayload: u,
                    checkoutOriginProvenance: l,
                    ...t?.signal ? {
                        signal: t.signal
                    } : {},
                    ...g ? {
                        reloadDocument: !0
                    } : {},
                    searchParams: _.toString() || void 0,
                    ...!g && (c || ae) ? {
                        state: {
                            ...ae,
                            ...c ? {
                                [ve]: c
                            } : {}
                        }
                    } : {}
                }), null
            } catch (e) {
                let r = e;
                throw a != null && d(a), !t?.signal?.aborted && !(r instanceof DOMException && r.name === `AbortError`) && (n.removeItem(te.CreditCheckoutRedirectPath), f.addError(r)), r
            }
        }, t[72] = J, t[73] = s, t[74] = l, t[75] = p, t[76] = x, t[77] = X, t[78] = Z, t[79] = y, t[80] = S, t[81] = T, t[82] = me, t[83] = E, t[84] = v, t[85] = qe) : qe = t[85];
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
        return t[90] !== B || t[91] !== K || t[92] !== Z || t[93] !== Ze || t[94] !== Ye ? ($ = {
            status: `success`,
            submit: Ye,
            prepareCheckoutForModal: Ze,
            getModalPreparationIntent: Z,
            checkoutPricingCountryConfig: B,
            creditDiscountOffer: K
        }, t[90] = B, t[91] = K, t[92] = Z, t[93] = Ze, t[94] = Ye, t[95] = $) : $ = t[95], $
    }
}));
export {
    F as n, I as t
};
//# sourceMappingURL=ad3d11c5-f3ap30fsktfchqxt.js.map