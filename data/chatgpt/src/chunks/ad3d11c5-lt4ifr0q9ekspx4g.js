import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as n,
    E6 as r,
    Eat as i,
    Hrt as ee,
    Irt as a,
    Jn as o,
    Jrt as te,
    Lrt as ne,
    O6 as s,
    V1 as c,
    Xn as l,
    Xnt as re,
    Yn as ie,
    Ynt as ae,
    Znt as u,
    est as d,
    o0 as f,
    q1 as p,
    wat as m
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    G as h,
    O as oe,
    Vn as g,
    s as se,
    wn as _
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $ln as ce,
    Cln as v,
    Din as le,
    Ean as y,
    Ein as ue,
    Fan as de,
    Hln as fe,
    JGn as pe,
    Kin as b,
    Oan as me,
    Pan as x,
    Srn as he,
    Uin as ge,
    Xln as S,
    Zln as _e,
    _sn as ve,
    eun as C,
    jan as ye,
    pin as be,
    vsn as w,
    win as T,
    wln as xe,
    xrn as Se,
    yrn as E
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Lg as D,
    Lh as O,
    Rf as Ce,
    Rg as we,
    bm as Te,
    mm as k,
    zf as A
} from "./c2675c8c-jg3tpj8mw86wdc0g.js";
import {
    i as j,
    o as Ee
} from "./c7dae6a1-i0a00oik5iw2qp0i.js";
import {
    t as M
} from "./a2704c05-ewmt02u3aj0d9t8c.js";
import {
    n as N,
    t as De
} from "./ba59b5eb-lzumbla85wyqoa8y.js";
import {
    n as P,
    t as Oe
} from "./9cc78d41-f6x2i6kd7xoqem9q.js";

function ke(e, t) {
    return t && e.checkout_provider !== `stripe` ? !1 : (t || e.experiments?.auto_top_up_enabled !== `true`) && e.credit_purchase_auto_top_up?.enabled !== !0
}
var Ae, je, F, I = e((() => {
    Ae = _(), x(), C(), j(), w(), M(), S(), pe(), O(), k(), N(), P(), A(), v(), T(), b(), E(), p(), n(), l(), r(), i(), u(), D(), se(), je = t(g()), F = e => {
        "use forget";
        let t = (0, Ae.c)(96),
            {
                autoTopUpEnabled: n,
                cancelUrl: r,
                checkoutOriginProvenance: i,
                creditCheckoutAnalytics: l,
                creditCheckoutAccountScope: u,
                entryPoint: p,
                isChatGPTWorkInlineCreditCheckout: g,
                supportsOaicsCreditModal: se,
                returnLocation: _
            } = e,
            v = g !== void 0 && g,
            pe = se !== void 0 && se,
            b = f(),
            x = u === `workspace_owner`,
            {
                country: S
            } = he(),
            {
                prepareCheckoutSession: C,
                getCheckoutPreparation: w,
                navigateToCheckout: T,
                recordCheckoutPresentation: E
            } = le(),
            D;
        t[0] !== b || t[1] !== x ? (D = !x && (b?.isFree?.() === !0 || b?.isGo?.() === !0), t[0] = b, t[1] = x, t[2] = D) : D = t[2];
        let O;
        t[3] === D ? O = t[4] : (O = we(D), t[3] = D, t[4] = O);
        let k = O,
            A;
        t[5] !== b || t[6] !== p ? (A = (p === xe.CODEX_CREDIT_PURCHASE_MODAL || p === xe.CODEX_INLINE_CREDIT_PURCHASE_MODAL) && b?.isPersonalAccount() === !0 && b.hasPaidSubscription() && !b.isFree() && !b.isGo(), t[5] = b, t[6] = p, t[7] = A) : A = t[7];
        let j = A,
            M = !k,
            N;
        t[8] !== S || t[9] !== b || t[10] !== p || t[11] !== x || t[12] !== j || t[13] !== M ? (N = {
            country: S,
            currentAccount: b,
            location: p,
            shouldUsePaidSubscriptionBillingCurrency: M,
            pricingPlanIsTypeBusiness: x,
            retryCheckoutPricingOnMount: j
        }, t[8] = S, t[9] = b, t[10] = p, t[11] = x, t[12] = j, t[13] = M, t[14] = N) : N = t[14];
        let {
            billingDetails: P,
            status: F,
            errorReason: I
        } = Se(N), L;
        t[15] !== b || t[16] !== p || t[17] !== x || t[18] !== k ? (L = k || x ? `USD` : b?.mustGetSubscriptionBillingCurrency(p) ?? `USD`, t[15] = b, t[16] = p, t[17] = x, t[18] = k, t[19] = L) : L = t[19];
        let Me = L,
            R;
        t[20] !== S || t[21] !== P || t[22] !== x || t[23] !== Me || t[24] !== k ? (R = x ? {
            countryCode: S,
            currency: P?.currency,
            enabled: P != null
        } : k ? {
            countryCode: P?.country,
            currency: P?.currency ?? `USD`
        } : {
            currency: Me
        }, t[20] = S, t[21] = P, t[22] = x, t[23] = Me, t[24] = k, t[25] = R) : R = t[25];
        let Ne = R,
            Pe;
        t[26] !== Ne || t[27] !== j ? (Pe = {
            ...Ne,
            retryOnMount: j
        }, t[26] = Ne, t[27] = j, t[28] = Pe) : Pe = t[28];
        let {
            data: z,
            status: B,
            error: V,
            isFetching: H
        } = s(Pe), Fe = b?.id, U;
        t[29] === Fe ? U = t[30] : (U = Oe({
            accountId: Fe
        }), t[29] = Fe, t[30] = U);
        let W = oe(U),
            G;
        t[31] !== W.data || t[32] !== W.isFetching || t[33] !== W.status ? (G = de({
            offer: W.data,
            status: W.status,
            isFetching: W.isFetching
        }), t[31] = W.data, t[32] = W.isFetching, t[33] = W.status, t[34] = G) : G = t[34];
        let Ie = G,
            Le = b != null && Ie.status === `pending`,
            Re, ze;
        if (t[35] !== V || t[36] !== B || t[37] !== p ? (Re = () => {
                B === `error` && m.addError(`Failed to load checkoutPricingConfig`, {
                    error: V,
                    entryPoint: p
                })
            }, ze = [B, V, p], t[35] = V, t[36] = B, t[37] = p, t[38] = Re, t[39] = ze) : (Re = t[38], ze = t[39]), (0, je.useEffect)(Re, ze), x && b != null && (!b.isSelfServeBusiness() || !b.isOwnerOfAccount()) || F === `error` || B === `error` && !H || b != null && Ie.status === `error`) {
            let e;
            t[40] !== I || t[41] !== F || t[42] !== B || t[43] !== b || t[44] !== H || t[45] !== x ? (e = x && b != null && (!b.isSelfServeBusiness() || !b.isOwnerOfAccount()) ? `workspace_eligibility_error` : F === `error` ? I ?? `initial_data_error` : B === `error` && !H ? `checkout_pricing_error` : `discount_offer_error`, t[40] = I, t[41] = F, t[42] = B, t[43] = b, t[44] = H, t[45] = x, t[46] = e) : e = t[46];
            let n;
            return t[47] === e ? n = t[48] : (n = {
                status: `error`,
                errorReason: e,
                checkoutPricingCountryConfig: null,
                submit: null,
                prepareCheckoutForModal: null
            }, t[47] = e, t[48] = n), n
        }
        if (B !== `success` || Le || !b || !P) {
            let e;
            return t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
                status: `pending`,
                checkoutPricingCountryConfig: null,
                submit: null,
                prepareCheckoutForModal: null
            }, t[49] = e) : e = t[49], e
        }
        let K = Ie.status === `ready` ? Ie.offer : null,
            q = b.id,
            Be;
        t[50] === b ? Be = t[51] : (Be = b.isPersonalAccount(), t[50] = b, t[51] = Be);
        let Ve = Be,
            He = d()?.user?.id,
            Ue;
        t[52] === Symbol.for(`react.memo_cache_sentinel`) ? (Ue = o(), t[52] = Ue) : Ue = t[52];
        let We = Ue,
            Ge;
        t[53] !== q || t[54] !== Ve || t[55] !== x ? (Ge = function() {
            let e = ie();
            if (c()?.id !== q || d()?.user?.id !== He || o() !== We || x && (!c()?.isSelfServeBusiness() || !c()?.isOwnerOfAccount()) || (e == null ? !Ve : e !== q)) throw new DOMException(`Checkout account changed`, `AbortError`)
        }, t[53] = q, t[54] = Ve, t[55] = x, t[56] = Ge) : Ge = t[56];
        let J = Ge,
            Y;
        t[57] !== r || t[58] !== z || t[59] !== K || t[60] !== b.id || t[61] !== p || t[62] !== P || t[63] !== v || t[64] !== x || t[65] !== pe ? (Y = (e, t, n) => {
            let i = t?.forceLegacyCheckout ? null : K,
                ee = t?.forceLegacyCheckout ? `redirect` : i == null ? t?.checkoutUiMode : `custom`,
                a = t?.entryPoint ?? p,
                o = i?.offer_id,
                te = Ce(y.creditQuantityStep, n ? {
                    disableExposureLog: !0
                } : void 0),
                ne = Te({
                    amountPerCredit: z.currencyConfig.amount_per_credit,
                    minorUnitExponent: z.currencyConfig.minor_unit_exponent,
                    creditQuantityStep: y.creditQuantityStep,
                    minimumChargeMinorUnits: y.minimumChargeMinorUnits
                }),
                s = ye({
                    quantity: e,
                    offer: i,
                    maximumCreditQuantity: te,
                    experimentDefaultQuantity: (i == null ? null : De({
                        accountScope: x ? `workspace` : `personal`,
                        disableExposureLogging: n,
                        creditQuantityStep: y.creditQuantityStep,
                        minimumCreditQuantity: ne,
                        maximumCreditQuantity: te
                    }))?.defaultCreditQuantity ?? null,
                    clampToDiscountTier: !v
                });
            return {
                ...me({
                    accountId: b.id,
                    quantity: s,
                    discountOfferId: o,
                    entryPoint: a,
                    checkoutUiMode: ee,
                    billingDetails: P,
                    cancelUrl: t?.cancelUrl ?? r
                }),
                ...pe && !v && ee === `custom` ? {
                    supports_oaics_credit_modal: !0
                } : {}
            }
        }, t[57] = r, t[58] = z, t[59] = K, t[60] = b.id, t[61] = p, t[62] = P, t[63] = v, t[64] = x, t[65] = pe, t[66] = Y) : Y = t[66];
        let X = Y,
            Ke;
        t[67] !== q || t[68] !== J || t[69] !== X || t[70] !== w ? (Ke = function(e, t) {
            let n = w(X(e, t, !0), {
                    isCheckoutModalEnabled: !0,
                    suppressPrepareCheckoutSessionEvent: !0,
                    backgroundPreparation: !0,
                    assertCurrentIdentity: J
                }),
                r = h([`standalone-credit-checkout`, He, q, n.checkoutPayload, n.sourceSearch]);
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
        t[72] !== J || t[73] !== n || t[74] !== i || t[75] !== l || t[76] !== b || t[77] !== X || t[78] !== Z || t[79] !== v || t[80] !== x || t[81] !== T || t[82] !== C || t[83] !== E || t[84] !== _ ? (qe = async (e, t, r) => {
            let o = null;
            try {
                t?.signal?.throwIfAborted(), J();
                let a = t?.successReturnPath;
                ae.setItem(re.CreditCheckoutRedirectPath, ce(a, x ? `/admin/billing` : `/codex/cloud/settings/usage`));
                let s = t?.returnLocation ?? _,
                    c = X(e, t, !1),
                    ie = r || t?.onCustomCheckoutSessionPrepared != null,
                    u = t?.preparedCheckout,
                    d = ie && u != null && Z(e, t).key === u.key;
                if (d) {
                    u.recordPreparationExposure?.(), c = u.checkoutPayload, ue(c, !0);
                    let e = ve(u.checkoutResponse);
                    e != null && te(e, ne(new URLSearchParams({
                        source: c.checkout_source ?? ``
                    })), new URLSearchParams(window.location.search).get(`checkout_from`))
                }
                let f = d ? u.checkoutResponse : await C(c, {
                    assertCurrentIdentity: J,
                    ...t?.signal ? {
                        signal: t.signal
                    } : {},
                    ...ie ? {
                        isCheckoutModalEnabled: !0
                    } : {}
                });
                if (t?.signal?.throwIfAborted(), J(), r && `tag` in f && f.tag === `custom_checkout_session` && ke(f, v)) return o = f.checkout_session_id, E(f, {
                    checkoutPayload: c,
                    checkoutOriginProvenance: i,
                    isCheckoutModalEnabled: !0
                }), o = null, {
                    checkoutPayload: c,
                    checkoutSession: f
                };
                if (`tag` in f && f.tag === `custom_checkout_session` && t?.onCustomCheckoutSessionPrepared != null) return E(f, {
                    checkoutPayload: c,
                    checkoutOriginProvenance: i,
                    isCheckoutModalEnabled: !0
                }), t.onCustomCheckoutSessionPrepared({
                    checkoutPayload: c,
                    checkoutSession: f
                }), null;
                let p = a != null && c.checkout_source === `chatgpt_web_merged` ? ce(a, `/codex/app`) : void 0;
                (t?.continuationTask != null || p != null) && `checkout_session_id` in f && Ee({
                    checkoutSessionId: f.checkout_session_id,
                    quantity: null,
                    ...p == null ? {} : {
                        returnPath: p
                    },
                    task: t?.continuationTask?.accountId === c.credit_purchase_data?.account_id ? t?.continuationTask : void 0
                });
                let m = !x && (window.location.pathname === `/codex/cloud` || window.location.pathname.startsWith(`/codex/cloud/`)),
                    h = t?.reloadDocument === !0 || m || !x && s?.hash === `#settings/Usage`,
                    oe = h ? void 0 : fe({
                        analytics: l,
                        accountId: b?.id,
                        checkoutSessionId: ve(f)
                    }),
                    g = new URLSearchParams;
                if (x || g.set(`return_to`, ce(s ? `${s.pathname}${s.search??``}${s.hash??``}` : null, `/codex/cloud/settings/usage`)), n === !1 && g.set(ge, `false`), m && a == null && t?.continuationTask == null && !ee(window.location.search)) {
                    let e = ve(f);
                    e != null && _e(e)
                }
                return await T(f, {
                    creditCheckoutAnalytics: l,
                    checkoutPayload: c,
                    checkoutOriginProvenance: i,
                    ...t?.signal ? {
                        signal: t.signal
                    } : {},
                    ...h ? {
                        reloadDocument: !0
                    } : {},
                    searchParams: g.toString() || void 0,
                    ...!h && (s || oe) ? {
                        state: {
                            ...oe,
                            ...s ? {
                                [be]: s
                            } : {}
                        }
                    } : {}
                }), null
            } catch (e) {
                let n = e;
                throw o != null && a(o), !t?.signal?.aborted && !(n instanceof DOMException && n.name === `AbortError`) && (ae.removeItem(re.CreditCheckoutRedirectPath), m.addError(n)), n
            }
        }, t[72] = J, t[73] = n, t[74] = i, t[75] = l, t[76] = b, t[77] = X, t[78] = Z, t[79] = v, t[80] = x, t[81] = T, t[82] = C, t[83] = E, t[84] = _, t[85] = qe) : qe = t[85];
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
        return t[90] !== z || t[91] !== K || t[92] !== Z || t[93] !== Ze || t[94] !== Ye ? ($ = {
            status: `success`,
            submit: Ye,
            prepareCheckoutForModal: Ze,
            getModalPreparationIntent: Z,
            checkoutPricingCountryConfig: z,
            creditDiscountOffer: K
        }, t[90] = z, t[91] = K, t[92] = Z, t[93] = Ze, t[94] = Ye, t[95] = $) : $ = t[95], $
    }
}));
export {
    F as n, I as t
};
//# sourceMappingURL=ad3d11c5-lt4ifr0q9ekspx4g.js.map