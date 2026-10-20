import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ant as n,
    Jn as r,
    L1 as i,
    Ort as ee,
    Pot as a,
    Srt as te,
    X1 as o,
    Xn as s,
    Yn as c,
    _rt as ne,
    d6 as l,
    grt as re,
    iat as u,
    j1 as d,
    jnt as f,
    knt as ie,
    oat as p,
    p6 as ae,
    uit as m
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    G as h,
    O as oe,
    Vn as g,
    s as se,
    wn as _
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Eln as ce,
    Fln as le,
    Lin as v,
    Lln as ue,
    Pin as de,
    Pln as y,
    Rln as b,
    Tan as fe,
    _an as pe,
    _in as me,
    cln as he,
    csn as x,
    frn as ge,
    hin as S,
    iin as _e,
    lGn as C,
    prn as ve,
    sln as w,
    ssn as ye,
    urn as T,
    van as be,
    vin as xe,
    wan as E,
    xan as Se
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Dg as D,
    Lf as Ce,
    Og as we,
    Rf as O,
    dm as k,
    kh as A,
    mm as Te
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    i as j,
    o as Ee
} from "./c7dae6a1-h75rqqab07rf42he.js";
import {
    t as M
} from "./a2704c05-mdeb86w8w2ya62f8.js";
import {
    n as N,
    t as De
} from "./ba59b5eb-dfp84dr8e5y2hbh3.js";
import {
    n as P,
    t as Oe
} from "./9cc78d41-kftymtpvirjm7usj.js";

function ke(e, t) {
    return t && e.checkout_provider !== `stripe` ? !1 : (t || e.experiments?.auto_top_up_enabled !== `true`) && e.credit_purchase_auto_top_up?.enabled !== !0
}
var Ae, je, F, I = e((() => {
    Ae = _(), E(), b(), j(), x(), M(), y(), C(), A(), k(), N(), P(), O(), w(), S(), v(), T(), i(), m(), s(), l(), p(), f(), D(), se(), je = t(g()), F = e => {
        "use forget";
        let t = (0, Ae.c)(96),
            {
                autoTopUpEnabled: i,
                cancelUrl: s,
                checkoutOriginProvenance: l,
                creditCheckoutAnalytics: f,
                creditCheckoutAccountScope: p,
                entryPoint: m,
                isChatGPTWorkInlineCreditCheckout: g,
                supportsOaicsCreditModal: se,
                returnLocation: _
            } = e,
            v = g !== void 0 && g,
            y = se !== void 0 && se,
            b = o(),
            x = p === `workspace_owner`,
            {
                country: S
            } = ve(),
            {
                prepareCheckoutSession: C,
                getCheckoutPreparation: w,
                navigateToCheckout: T,
                recordCheckoutPresentation: E
            } = xe(),
            D;
        t[0] !== b || t[1] !== x ? (D = !x && (b?.isFree?.() === !0 || b?.isGo?.() === !0), t[0] = b, t[1] = x, t[2] = D) : D = t[2];
        let O;
        t[3] === D ? O = t[4] : (O = we(D), t[3] = D, t[4] = O);
        let k = O,
            A;
        t[5] !== b || t[6] !== m ? (A = (m === he.CODEX_CREDIT_PURCHASE_MODAL || m === he.CODEX_INLINE_CREDIT_PURCHASE_MODAL) && b?.isPersonalAccount() === !0 && b.hasPaidSubscription() && !b.isFree() && !b.isGo(), t[5] = b, t[6] = m, t[7] = A) : A = t[7];
        let j = A,
            M = !k,
            N;
        t[8] !== S || t[9] !== b || t[10] !== m || t[11] !== x || t[12] !== j || t[13] !== M ? (N = {
            country: S,
            currentAccount: b,
            location: m,
            shouldUsePaidSubscriptionBillingCurrency: M,
            pricingPlanIsTypeBusiness: x,
            retryCheckoutPricingOnMount: j
        }, t[8] = S, t[9] = b, t[10] = m, t[11] = x, t[12] = j, t[13] = M, t[14] = N) : N = t[14];
        let {
            billingDetails: P,
            status: F,
            errorReason: I
        } = ge(N), L;
        t[15] !== b || t[16] !== m || t[17] !== x || t[18] !== k ? (L = k || x ? `USD` : b?.mustGetSubscriptionBillingCurrency(m) ?? `USD`, t[15] = b, t[16] = m, t[17] = x, t[18] = k, t[19] = L) : L = t[19];
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
        } = ae(z), Pe = b?.id, W;
        t[29] === Pe ? W = t[30] : (W = Oe({
            accountId: Pe
        }), t[29] = Pe, t[30] = W);
        let G = oe(W),
            Fe;
        t[31] !== G.data || t[32] !== G.isFetching || t[33] !== G.status ? (Fe = fe({
            offer: G.data,
            status: G.status,
            isFetching: G.isFetching
        }), t[31] = G.data, t[32] = G.isFetching, t[33] = G.status, t[34] = Fe) : Fe = t[34];
        let Ie = Fe,
            Le = b != null && Ie.status === `pending`,
            Re, ze;
        if (t[35] !== H || t[36] !== V || t[37] !== m ? (Re = () => {
                V === `error` && u.addError(`Failed to load checkoutPricingConfig`, {
                    error: H,
                    entryPoint: m
                })
            }, ze = [V, H, m], t[35] = H, t[36] = V, t[37] = m, t[38] = Re, t[39] = ze) : (Re = t[38], ze = t[39]), (0, je.useEffect)(Re, ze), x && b != null && (!b.isSelfServeBusiness() || !b.isOwnerOfAccount()) || F === `error` || V === `error` && !U || b != null && Ie.status === `error`) {
            let e;
            t[40] !== I || t[41] !== F || t[42] !== V || t[43] !== b || t[44] !== U || t[45] !== x ? (e = x && b != null && (!b.isSelfServeBusiness() || !b.isOwnerOfAccount()) ? `workspace_eligibility_error` : F === `error` ? I ?? `initial_data_error` : V === `error` && !U ? `checkout_pricing_error` : `discount_offer_error`, t[40] = I, t[41] = F, t[42] = V, t[43] = b, t[44] = U, t[45] = x, t[46] = e) : e = t[46];
            let n;
            return t[47] === e ? n = t[48] : (n = {
                status: `error`,
                errorReason: e,
                checkoutPricingCountryConfig: null,
                submit: null,
                prepareCheckoutForModal: null
            }, t[47] = e, t[48] = n), n
        }
        if (V !== `success` || Le || !b || !P) {
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
            He = a()?.user?.id,
            Ue;
        t[52] === Symbol.for(`react.memo_cache_sentinel`) ? (Ue = r(), t[52] = Ue) : Ue = t[52];
        let We = Ue,
            Ge;
        t[53] !== q || t[54] !== Ve || t[55] !== x ? (Ge = function() {
            let e = c();
            if (d()?.id !== q || a()?.user?.id !== He || r() !== We || x && (!d()?.isSelfServeBusiness() || !d()?.isOwnerOfAccount()) || (e == null ? !Ve : e !== q)) throw new DOMException(`Checkout account changed`, `AbortError`)
        }, t[53] = q, t[54] = Ve, t[55] = x, t[56] = Ge) : Ge = t[56];
        let J = Ge,
            Y;
        t[57] !== s || t[58] !== B || t[59] !== K || t[60] !== b.id || t[61] !== m || t[62] !== P || t[63] !== v || t[64] !== x || t[65] !== y ? (Y = (e, t, n) => {
            let r = t?.forceLegacyCheckout ? null : K,
                i = t?.forceLegacyCheckout ? `redirect` : r == null ? t?.checkoutUiMode : `custom`,
                ee = t?.entryPoint ?? m,
                a = r?.offer_id,
                te = Ce(pe.creditQuantityStep, n ? {
                    disableExposureLog: !0
                } : void 0),
                o = Te({
                    amountPerCredit: B.currencyConfig.amount_per_credit,
                    minorUnitExponent: B.currencyConfig.minor_unit_exponent,
                    creditQuantityStep: pe.creditQuantityStep,
                    minimumChargeMinorUnits: pe.minimumChargeMinorUnits
                }),
                c = Se({
                    quantity: e,
                    offer: r,
                    maximumCreditQuantity: te,
                    experimentDefaultQuantity: (r == null ? null : De({
                        accountScope: x ? `workspace` : `personal`,
                        disableExposureLogging: n,
                        creditQuantityStep: pe.creditQuantityStep,
                        minimumCreditQuantity: o,
                        maximumCreditQuantity: te
                    }))?.defaultCreditQuantity ?? null,
                    clampToDiscountTier: !v
                });
            return {
                ...be({
                    accountId: b.id,
                    quantity: c,
                    discountOfferId: a,
                    entryPoint: ee,
                    checkoutUiMode: i,
                    billingDetails: P,
                    cancelUrl: t?.cancelUrl ?? s
                }),
                ...y && !v && i === `custom` ? {
                    supports_oaics_credit_modal: !0
                } : {}
            }
        }, t[57] = s, t[58] = B, t[59] = K, t[60] = b.id, t[61] = m, t[62] = P, t[63] = v, t[64] = x, t[65] = y, t[66] = Y) : Y = t[66];
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
        t[72] !== J || t[73] !== i || t[74] !== l || t[75] !== f || t[76] !== b || t[77] !== X || t[78] !== Z || t[79] !== v || t[80] !== x || t[81] !== T || t[82] !== C || t[83] !== E || t[84] !== _ ? (qe = async (e, t, r) => {
            let a = null;
            try {
                t?.signal?.throwIfAborted(), J();
                let o = t?.successReturnPath;
                ie.setItem(n.CreditCheckoutRedirectPath, ue(o, x ? `/admin/billing` : `/codex/cloud/settings/usage`));
                let s = t?.returnLocation ?? _,
                    c = X(e, t, !1),
                    re = r || t?.onCustomCheckoutSessionPrepared != null,
                    u = t?.preparedCheckout,
                    d = re && u != null && Z(e, t).key === u.key;
                if (d) {
                    u.recordPreparationExposure?.(), c = u.checkoutPayload, me(c, !0);
                    let e = ye(u.checkoutResponse);
                    e != null && ee(e, ne(new URLSearchParams({
                        source: c.checkout_source ?? ``
                    })), new URLSearchParams(window.location.search).get(`checkout_from`))
                }
                let p = d ? u.checkoutResponse : await C(c, {
                    assertCurrentIdentity: J,
                    ...t?.signal ? {
                        signal: t.signal
                    } : {},
                    ...re ? {
                        isCheckoutModalEnabled: !0
                    } : {}
                });
                if (t?.signal?.throwIfAborted(), J(), r && `tag` in p && p.tag === `custom_checkout_session` && ke(p, v)) return a = p.checkout_session_id, E(p, {
                    checkoutPayload: c,
                    checkoutOriginProvenance: l,
                    isCheckoutModalEnabled: !0
                }), a = null, {
                    checkoutPayload: c,
                    checkoutSession: p
                };
                if (`tag` in p && p.tag === `custom_checkout_session` && t?.onCustomCheckoutSessionPrepared != null) return E(p, {
                    checkoutPayload: c,
                    checkoutOriginProvenance: l,
                    isCheckoutModalEnabled: !0
                }), t.onCustomCheckoutSessionPrepared({
                    checkoutPayload: c,
                    checkoutSession: p
                }), null;
                let ae = o != null && c.checkout_source === `chatgpt_web_merged` ? ue(o, `/codex/app`) : void 0;
                (t?.continuationTask != null || ae != null) && `checkout_session_id` in p && Ee({
                    checkoutSessionId: p.checkout_session_id,
                    quantity: null,
                    ...ae == null ? {} : {
                        returnPath: ae
                    },
                    task: t?.continuationTask?.accountId === c.credit_purchase_data?.account_id ? t?.continuationTask : void 0
                });
                let m = !x && (window.location.pathname === `/codex/cloud` || window.location.pathname.startsWith(`/codex/cloud/`)),
                    h = t?.reloadDocument === !0 || m || !x && s?.hash === `#settings/Usage`,
                    oe = h ? void 0 : ce({
                        analytics: f,
                        accountId: b?.id,
                        checkoutSessionId: ye(p)
                    }),
                    g = new URLSearchParams;
                if (x || g.set(`return_to`, ue(s ? `${s.pathname}${s.search??``}${s.hash??``}` : null, `/codex/cloud/settings/usage`)), i === !1 && g.set(de, `false`), m && o == null && t?.continuationTask == null && !te(window.location.search)) {
                    let e = ye(p);
                    e != null && le(e)
                }
                return await T(p, {
                    creditCheckoutAnalytics: f,
                    checkoutPayload: c,
                    checkoutOriginProvenance: l,
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
                                [_e]: s
                            } : {}
                        }
                    } : {}
                }), null
            } catch (e) {
                let r = e;
                throw a != null && re(a), !t?.signal?.aborted && !(r instanceof DOMException && r.name === `AbortError`) && (ie.removeItem(n.CreditCheckoutRedirectPath), u.addError(r)), r
            }
        }, t[72] = J, t[73] = i, t[74] = l, t[75] = f, t[76] = b, t[77] = X, t[78] = Z, t[79] = v, t[80] = x, t[81] = T, t[82] = C, t[83] = E, t[84] = _, t[85] = qe) : qe = t[85];
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
//# sourceMappingURL=ad3d11c5-eof3zimmopt79r4s.js.map