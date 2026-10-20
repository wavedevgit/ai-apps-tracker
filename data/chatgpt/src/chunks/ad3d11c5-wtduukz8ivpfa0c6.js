import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    Aot as r,
    Dnt as i,
    Ent as ee,
    I1 as a,
    Jn as o,
    Tnt as s,
    Xn as c,
    Y1 as l,
    Yn as te,
    d6 as u,
    eat as ne,
    frt as d,
    l6 as f,
    nat as p,
    oit as m,
    prt as re,
    vrt as ie,
    wrt as ae
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    G as h,
    O as oe,
    Vn as g,
    s as se,
    wn as _
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Can as ce,
    Fin as v,
    Fln as le,
    Iln as y,
    Min as ue,
    Mln as b,
    Nln as de,
    San as x,
    aln as S,
    asn as fe,
    crn as pe,
    drn as me,
    gan as he,
    gin as ge,
    han as C,
    hin as _e,
    nin as ve,
    oln as ye,
    osn as w,
    pGn as T,
    pin as E,
    urn as be,
    wln as xe,
    yan as Se
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    $g as Ce,
    Im as D,
    Qg as O,
    dp as k,
    eg as A,
    up as we,
    zm as Te
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    i as j,
    o as Ee
} from "./c7dae6a1-wxa0gm51gn2vs2wl.js";
import {
    t as M
} from "./a2704c05-drltwvf9sj7z3e09.js";
import {
    n as N,
    t as De
} from "./ba59b5eb-krb0rv3k98yf6059.js";
import {
    n as P,
    t as Oe
} from "./9cc78d41-ilupxt1v59ttlaw5.js";

function ke(e, t) {
    return t && e.checkout_provider !== `stripe` ? !1 : (t || e.experiments?.auto_top_up_enabled !== `true`) && e.credit_purchase_auto_top_up?.enabled !== !0
}
var Ae, je, F, I = e((() => {
    Ae = _(), x(), y(), j(), w(), M(), b(), T(), A(), D(), N(), P(), k(), S(), E(), v(), pe(), a(), m(), c(), f(), p(), i(), O(), se(), je = t(g()), F = e => {
        "use forget";
        let t = (0, Ae.c)(96),
            {
                autoTopUpEnabled: i,
                cancelUrl: a,
                checkoutOriginProvenance: c,
                creditCheckoutAnalytics: f,
                creditCheckoutAccountScope: p,
                entryPoint: m,
                isChatGPTWorkInlineCreditCheckout: g,
                supportsOaicsCreditModal: se,
                returnLocation: _
            } = e,
            v = g !== void 0 && g,
            y = se !== void 0 && se,
            b = l(),
            x = p === `workspace_owner`,
            {
                country: S
            } = me(),
            {
                prepareCheckoutSession: pe,
                getCheckoutPreparation: w,
                navigateToCheckout: T,
                recordCheckoutPresentation: E
            } = ge(),
            D;
        t[0] !== b || t[1] !== x ? (D = !x && (b?.isFree?.() === !0 || b?.isGo?.() === !0), t[0] = b, t[1] = x, t[2] = D) : D = t[2];
        let O;
        t[3] === D ? O = t[4] : (O = Ce(D), t[3] = D, t[4] = O);
        let k = O,
            A;
        t[5] !== b || t[6] !== m ? (A = (m === ye.CODEX_CREDIT_PURCHASE_MODAL || m === ye.CODEX_INLINE_CREDIT_PURCHASE_MODAL) && b?.isPersonalAccount() === !0 && b.hasPaidSubscription() && !b.isFree() && !b.isGo(), t[5] = b, t[6] = m, t[7] = A) : A = t[7];
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
        } = be(N), L;
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
        } = u(z), Pe = b?.id, W;
        t[29] === Pe ? W = t[30] : (W = Oe({
            accountId: Pe
        }), t[29] = Pe, t[30] = W);
        let G = oe(W),
            Fe;
        t[31] !== G.data || t[32] !== G.isFetching || t[33] !== G.status ? (Fe = ce({
            offer: G.data,
            status: G.status,
            isFetching: G.isFetching
        }), t[31] = G.data, t[32] = G.isFetching, t[33] = G.status, t[34] = Fe) : Fe = t[34];
        let Ie = Fe,
            Le = b != null && Ie.status === `pending`,
            Re, ze;
        if (t[35] !== H || t[36] !== V || t[37] !== m ? (Re = () => {
                V === `error` && ne.addError(`Failed to load checkoutPricingConfig`, {
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
            He = r()?.user?.id,
            Ue;
        t[52] === Symbol.for(`react.memo_cache_sentinel`) ? (Ue = o(), t[52] = Ue) : Ue = t[52];
        let We = Ue,
            Ge;
        t[53] !== q || t[54] !== Ve || t[55] !== x ? (Ge = function() {
            let e = te();
            if (n()?.id !== q || r()?.user?.id !== He || o() !== We || x && (!n()?.isSelfServeBusiness() || !n()?.isOwnerOfAccount()) || (e == null ? !Ve : e !== q)) throw new DOMException(`Checkout account changed`, `AbortError`)
        }, t[53] = q, t[54] = Ve, t[55] = x, t[56] = Ge) : Ge = t[56];
        let J = Ge,
            Y;
        t[57] !== a || t[58] !== B || t[59] !== K || t[60] !== b.id || t[61] !== m || t[62] !== P || t[63] !== v || t[64] !== x || t[65] !== y ? (Y = (e, t, n) => {
            let r = t?.forceLegacyCheckout ? null : K,
                i = t?.forceLegacyCheckout ? `redirect` : r == null ? t?.checkoutUiMode : `custom`,
                ee = t?.entryPoint ?? m,
                o = r?.offer_id,
                s = we(C.creditQuantityStep, n ? {
                    disableExposureLog: !0
                } : void 0),
                c = Te({
                    amountPerCredit: B.currencyConfig.amount_per_credit,
                    minorUnitExponent: B.currencyConfig.minor_unit_exponent,
                    creditQuantityStep: C.creditQuantityStep,
                    minimumChargeMinorUnits: C.minimumChargeMinorUnits
                }),
                l = Se({
                    quantity: e,
                    offer: r,
                    maximumCreditQuantity: s,
                    experimentDefaultQuantity: (r == null ? null : De({
                        accountScope: x ? `workspace` : `personal`,
                        disableExposureLogging: n,
                        creditQuantityStep: C.creditQuantityStep,
                        minimumCreditQuantity: c,
                        maximumCreditQuantity: s
                    }))?.defaultCreditQuantity ?? null,
                    clampToDiscountTier: !v
                });
            return {
                ...he({
                    accountId: b.id,
                    quantity: l,
                    discountOfferId: o,
                    entryPoint: ee,
                    checkoutUiMode: i,
                    billingDetails: P,
                    cancelUrl: t?.cancelUrl ?? a
                }),
                ...y && !v && i === `custom` ? {
                    supports_oaics_credit_modal: !0
                } : {}
            }
        }, t[57] = a, t[58] = B, t[59] = K, t[60] = b.id, t[61] = m, t[62] = P, t[63] = v, t[64] = x, t[65] = y, t[66] = Y) : Y = t[66];
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
        t[72] !== J || t[73] !== i || t[74] !== c || t[75] !== f || t[76] !== b || t[77] !== X || t[78] !== Z || t[79] !== v || t[80] !== x || t[81] !== T || t[82] !== pe || t[83] !== E || t[84] !== _ ? (qe = async (e, t, n) => {
            let r = null;
            try {
                t?.signal?.throwIfAborted(), J();
                let a = t?.successReturnPath;
                s.setItem(ee.CreditCheckoutRedirectPath, le(a, x ? `/admin/billing` : `/codex/cloud/settings/usage`));
                let o = t?.returnLocation ?? _,
                    l = X(e, t, !1),
                    te = n || t?.onCustomCheckoutSessionPrepared != null,
                    u = t?.preparedCheckout,
                    ne = te && u != null && Z(e, t).key === u.key;
                if (ne) {
                    u.recordPreparationExposure?.(), l = u.checkoutPayload, _e(l, !0);
                    let e = fe(u.checkoutResponse);
                    e != null && ae(e, re(new URLSearchParams({
                        source: l.checkout_source ?? ``
                    })), new URLSearchParams(window.location.search).get(`checkout_from`))
                }
                let d = ne ? u.checkoutResponse : await pe(l, {
                    assertCurrentIdentity: J,
                    ...t?.signal ? {
                        signal: t.signal
                    } : {},
                    ...te ? {
                        isCheckoutModalEnabled: !0
                    } : {}
                });
                if (t?.signal?.throwIfAborted(), J(), n && `tag` in d && d.tag === `custom_checkout_session` && ke(d, v)) return r = d.checkout_session_id, E(d, {
                    checkoutPayload: l,
                    checkoutOriginProvenance: c,
                    isCheckoutModalEnabled: !0
                }), r = null, {
                    checkoutPayload: l,
                    checkoutSession: d
                };
                if (`tag` in d && d.tag === `custom_checkout_session` && t?.onCustomCheckoutSessionPrepared != null) return E(d, {
                    checkoutPayload: l,
                    checkoutOriginProvenance: c,
                    isCheckoutModalEnabled: !0
                }), t.onCustomCheckoutSessionPrepared({
                    checkoutPayload: l,
                    checkoutSession: d
                }), null;
                let p = a != null && l.checkout_source === `chatgpt_web_merged` ? le(a, `/codex/app`) : void 0;
                (t?.continuationTask != null || p != null) && `checkout_session_id` in d && Ee({
                    checkoutSessionId: d.checkout_session_id,
                    quantity: null,
                    ...p == null ? {} : {
                        returnPath: p
                    },
                    task: t?.continuationTask?.accountId === l.credit_purchase_data?.account_id ? t?.continuationTask : void 0
                });
                let m = !x && (window.location.pathname === `/codex/cloud` || window.location.pathname.startsWith(`/codex/cloud/`)),
                    h = t?.reloadDocument === !0 || m || !x && o?.hash === `#settings/Usage`,
                    oe = h ? void 0 : xe({
                        analytics: f,
                        accountId: b?.id,
                        checkoutSessionId: fe(d)
                    }),
                    g = new URLSearchParams;
                if (x || g.set(`return_to`, le(o ? `${o.pathname}${o.search??``}${o.hash??``}` : null, `/codex/cloud/settings/usage`)), i === !1 && g.set(ue, `false`), m && a == null && t?.continuationTask == null && !ie(window.location.search)) {
                    let e = fe(d);
                    e != null && de(e)
                }
                return await T(d, {
                    creditCheckoutAnalytics: f,
                    checkoutPayload: l,
                    checkoutOriginProvenance: c,
                    ...t?.signal ? {
                        signal: t.signal
                    } : {},
                    ...h ? {
                        reloadDocument: !0
                    } : {},
                    searchParams: g.toString() || void 0,
                    ...!h && (o || oe) ? {
                        state: {
                            ...oe,
                            ...o ? {
                                [ve]: o
                            } : {}
                        }
                    } : {}
                }), null
            } catch (e) {
                let n = e;
                throw r != null && d(r), !t?.signal?.aborted && !(n instanceof DOMException && n.name === `AbortError`) && (s.removeItem(ee.CreditCheckoutRedirectPath), ne.addError(n)), n
            }
        }, t[72] = J, t[73] = i, t[74] = c, t[75] = f, t[76] = b, t[77] = X, t[78] = Z, t[79] = v, t[80] = x, t[81] = T, t[82] = pe, t[83] = E, t[84] = _, t[85] = qe) : qe = t[85];
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
//# sourceMappingURL=ad3d11c5-wtduukz8ivpfa0c6.js.map