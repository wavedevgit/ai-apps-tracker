import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cat as n,
    D6 as r,
    Dit as i,
    Grt as ee,
    Jn as a,
    Jnt as o,
    Knt as s,
    Nrt as c,
    Prt as te,
    T6 as l,
    V1 as u,
    Xn as ne,
    Yn as d,
    Zot as re,
    o0 as f,
    q1 as p,
    qnt as ie,
    xat as m,
    zrt as ae
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    G as h,
    O as oe,
    Vn as g,
    s as se,
    wn as _
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Can as v,
    Iin as ce,
    Iln as le,
    Lln as y,
    Nin as ue,
    Nln as b,
    Pln as de,
    Tln as fe,
    _an as pe,
    _in as me,
    ban as he,
    drn as ge,
    frn as _e,
    gan as x,
    gin as ve,
    jGn as S,
    lrn as C,
    min as w,
    oln as T,
    osn as ye,
    rin as be,
    sln as xe,
    ssn as E,
    wan as Se
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Lf as Ce,
    Mg as we,
    Nh as D,
    Rf as O,
    gm as Te,
    jg as k,
    pm as A
} from "./c2675c8c-d62p1sdq1sy52umm.js";
import {
    i as j,
    o as Ee
} from "./c7dae6a1-e07cy9udmg9066ca.js";
import {
    t as M
} from "./a2704c05-gmrxx3ls7x3wqulm.js";
import {
    n as N,
    t as De
} from "./ba59b5eb-of3w9gatk6ou190s.js";
import {
    n as P,
    t as Oe
} from "./9cc78d41-izat6bebkmrys1jj.js";

function ke(e, t) {
    return t && e.checkout_provider !== `stripe` ? !1 : (t || e.experiments?.auto_top_up_enabled !== `true`) && e.credit_purchase_auto_top_up?.enabled !== !0
}
var Ae, je, F, I = e((() => {
    Ae = _(), v(), y(), j(), E(), M(), b(), S(), D(), A(), N(), P(), O(), T(), w(), ce(), C(), p(), i(), ne(), l(), n(), o(), k(), se(), je = t(g()), F = e => {
        "use forget";
        let t = (0, Ae.c)(96),
            {
                autoTopUpEnabled: n,
                cancelUrl: i,
                checkoutOriginProvenance: o,
                creditCheckoutAnalytics: l,
                creditCheckoutAccountScope: ne,
                entryPoint: p,
                isChatGPTWorkInlineCreditCheckout: g,
                supportsOaicsCreditModal: se,
                returnLocation: _
            } = e,
            v = g !== void 0 && g,
            ce = se !== void 0 && se,
            y = f(),
            b = ne === `workspace_owner`,
            {
                country: S
            } = _e(),
            {
                prepareCheckoutSession: C,
                getCheckoutPreparation: w,
                navigateToCheckout: T,
                recordCheckoutPresentation: E
            } = me(),
            D;
        t[0] !== y || t[1] !== b ? (D = !b && (y?.isFree?.() === !0 || y?.isGo?.() === !0), t[0] = y, t[1] = b, t[2] = D) : D = t[2];
        let O;
        t[3] === D ? O = t[4] : (O = we(D), t[3] = D, t[4] = O);
        let k = O,
            A;
        t[5] !== y || t[6] !== p ? (A = (p === xe.CODEX_CREDIT_PURCHASE_MODAL || p === xe.CODEX_INLINE_CREDIT_PURCHASE_MODAL) && y?.isPersonalAccount() === !0 && y.hasPaidSubscription() && !y.isFree() && !y.isGo(), t[5] = y, t[6] = p, t[7] = A) : A = t[7];
        let j = A,
            M = !k,
            N;
        t[8] !== S || t[9] !== y || t[10] !== p || t[11] !== b || t[12] !== j || t[13] !== M ? (N = {
            country: S,
            currentAccount: y,
            location: p,
            shouldUsePaidSubscriptionBillingCurrency: M,
            pricingPlanIsTypeBusiness: b,
            retryCheckoutPricingOnMount: j
        }, t[8] = S, t[9] = y, t[10] = p, t[11] = b, t[12] = j, t[13] = M, t[14] = N) : N = t[14];
        let {
            billingDetails: P,
            status: F,
            errorReason: I
        } = ge(N), L;
        t[15] !== y || t[16] !== p || t[17] !== b || t[18] !== k ? (L = k || b ? `USD` : y?.mustGetSubscriptionBillingCurrency(p) ?? `USD`, t[15] = y, t[16] = p, t[17] = b, t[18] = k, t[19] = L) : L = t[19];
        let Me = L,
            R;
        t[20] !== S || t[21] !== P || t[22] !== b || t[23] !== Me || t[24] !== k ? (R = b ? {
            countryCode: S,
            currency: P?.currency,
            enabled: P != null
        } : k ? {
            countryCode: P?.country,
            currency: P?.currency ?? `USD`
        } : {
            currency: Me
        }, t[20] = S, t[21] = P, t[22] = b, t[23] = Me, t[24] = k, t[25] = R) : R = t[25];
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
        } = r(z), Pe = y?.id, W;
        t[29] === Pe ? W = t[30] : (W = Oe({
            accountId: Pe
        }), t[29] = Pe, t[30] = W);
        let G = oe(W),
            K;
        t[31] !== G.data || t[32] !== G.isFetching || t[33] !== G.status ? (K = Se({
            offer: G.data,
            status: G.status,
            isFetching: G.isFetching
        }), t[31] = G.data, t[32] = G.isFetching, t[33] = G.status, t[34] = K) : K = t[34];
        let Fe = K,
            Ie = y != null && Fe.status === `pending`,
            Le, Re;
        if (t[35] !== H || t[36] !== V || t[37] !== p ? (Le = () => {
                V === `error` && m.addError(`Failed to load checkoutPricingConfig`, {
                    error: H,
                    entryPoint: p
                })
            }, Re = [V, H, p], t[35] = H, t[36] = V, t[37] = p, t[38] = Le, t[39] = Re) : (Le = t[38], Re = t[39]), (0, je.useEffect)(Le, Re), b && y != null && (!y.isSelfServeBusiness() || !y.isOwnerOfAccount()) || F === `error` || V === `error` && !U || y != null && Fe.status === `error`) {
            let e;
            t[40] !== I || t[41] !== F || t[42] !== V || t[43] !== y || t[44] !== U || t[45] !== b ? (e = b && y != null && (!y.isSelfServeBusiness() || !y.isOwnerOfAccount()) ? `workspace_eligibility_error` : F === `error` ? I ?? `initial_data_error` : V === `error` && !U ? `checkout_pricing_error` : `discount_offer_error`, t[40] = I, t[41] = F, t[42] = V, t[43] = y, t[44] = U, t[45] = b, t[46] = e) : e = t[46];
            let n;
            return t[47] === e ? n = t[48] : (n = {
                status: `error`,
                errorReason: e,
                checkoutPricingCountryConfig: null,
                submit: null,
                prepareCheckoutForModal: null
            }, t[47] = e, t[48] = n), n
        }
        if (V !== `success` || Ie || !y || !P) {
            let e;
            return t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
                status: `pending`,
                checkoutPricingCountryConfig: null,
                submit: null,
                prepareCheckoutForModal: null
            }, t[49] = e) : e = t[49], e
        }
        let q = Fe.status === `ready` ? Fe.offer : null,
            J = y.id,
            ze;
        t[50] === y ? ze = t[51] : (ze = y.isPersonalAccount(), t[50] = y, t[51] = ze);
        let Be = ze,
            Ve = re()?.user?.id,
            He;
        t[52] === Symbol.for(`react.memo_cache_sentinel`) ? (He = a(), t[52] = He) : He = t[52];
        let Ue = He,
            We;
        t[53] !== J || t[54] !== Be || t[55] !== b ? (We = function() {
            let e = d();
            if (u()?.id !== J || re()?.user?.id !== Ve || a() !== Ue || b && (!u()?.isSelfServeBusiness() || !u()?.isOwnerOfAccount()) || (e == null ? !Be : e !== J)) throw new DOMException(`Checkout account changed`, `AbortError`)
        }, t[53] = J, t[54] = Be, t[55] = b, t[56] = We) : We = t[56];
        let Y = We,
            Ge;
        t[57] !== i || t[58] !== B || t[59] !== q || t[60] !== y.id || t[61] !== p || t[62] !== P || t[63] !== v || t[64] !== b || t[65] !== ce ? (Ge = (e, t, n) => {
            let r = t?.forceLegacyCheckout ? null : q,
                ee = t?.forceLegacyCheckout ? `redirect` : r == null ? t?.checkoutUiMode : `custom`,
                a = t?.entryPoint ?? p,
                o = r?.offer_id,
                s = Ce(x.creditQuantityStep, n ? {
                    disableExposureLog: !0
                } : void 0),
                c = Te({
                    amountPerCredit: B.currencyConfig.amount_per_credit,
                    minorUnitExponent: B.currencyConfig.minor_unit_exponent,
                    creditQuantityStep: x.creditQuantityStep,
                    minimumChargeMinorUnits: x.minimumChargeMinorUnits
                }),
                te = he({
                    quantity: e,
                    offer: r,
                    maximumCreditQuantity: s,
                    experimentDefaultQuantity: (r == null ? null : De({
                        accountScope: b ? `workspace` : `personal`,
                        disableExposureLogging: n,
                        creditQuantityStep: x.creditQuantityStep,
                        minimumCreditQuantity: c,
                        maximumCreditQuantity: s
                    }))?.defaultCreditQuantity ?? null,
                    clampToDiscountTier: !v
                });
            return {
                ...pe({
                    accountId: y.id,
                    quantity: te,
                    discountOfferId: o,
                    entryPoint: a,
                    checkoutUiMode: ee,
                    billingDetails: P,
                    cancelUrl: t?.cancelUrl ?? i
                }),
                ...ce && !v && ee === `custom` ? {
                    supports_oaics_credit_modal: !0
                } : {}
            }
        }, t[57] = i, t[58] = B, t[59] = q, t[60] = y.id, t[61] = p, t[62] = P, t[63] = v, t[64] = b, t[65] = ce, t[66] = Ge) : Ge = t[66];
        let X = Ge,
            Ke;
        t[67] !== J || t[68] !== Y || t[69] !== X || t[70] !== w ? (Ke = function(e, t) {
            let n = w(X(e, t, !0), {
                    isCheckoutModalEnabled: !0,
                    suppressPrepareCheckoutSessionEvent: !0,
                    backgroundPreparation: !0,
                    assertCurrentIdentity: Y
                }),
                r = h([`standalone-credit-checkout`, Ve, J, n.checkoutPayload, n.sourceSearch]);
            return {
                key: r,
                async prepare(e) {
                    e.throwIfAborted(), Y();
                    let t = await n.prepare(e);
                    return e.throwIfAborted(), Y(), {
                        key: r,
                        checkoutPayload: n.checkoutPayload,
                        checkoutResponse: t,
                        recordPreparationExposure: n.recordPreparationExposure
                    }
                }
            }
        }, t[67] = J, t[68] = Y, t[69] = X, t[70] = w, t[71] = Ke) : Ke = t[71];
        let Z = Ke,
            qe;
        t[72] !== Y || t[73] !== n || t[74] !== o || t[75] !== l || t[76] !== y || t[77] !== X || t[78] !== Z || t[79] !== v || t[80] !== b || t[81] !== T || t[82] !== C || t[83] !== E || t[84] !== _ ? (qe = async (e, t, r) => {
            let i = null;
            try {
                t?.signal?.throwIfAborted(), Y();
                let a = t?.successReturnPath;
                s.setItem(ie.CreditCheckoutRedirectPath, le(a, b ? `/admin/billing` : `/codex/cloud/settings/usage`));
                let c = t?.returnLocation ?? _,
                    u = X(e, t, !1),
                    ne = r || t?.onCustomCheckoutSessionPrepared != null,
                    d = t?.preparedCheckout,
                    re = ne && d != null && Z(e, t).key === d.key;
                if (re) {
                    d.recordPreparationExposure?.(), u = d.checkoutPayload, ve(u, !0);
                    let e = ye(d.checkoutResponse);
                    e != null && ee(e, te(new URLSearchParams({
                        source: u.checkout_source ?? ``
                    })), new URLSearchParams(window.location.search).get(`checkout_from`))
                }
                let f = re ? d.checkoutResponse : await C(u, {
                    assertCurrentIdentity: Y,
                    ...t?.signal ? {
                        signal: t.signal
                    } : {},
                    ...ne ? {
                        isCheckoutModalEnabled: !0
                    } : {}
                });
                if (t?.signal?.throwIfAborted(), Y(), r && `tag` in f && f.tag === `custom_checkout_session` && ke(f, v)) return i = f.checkout_session_id, E(f, {
                    checkoutPayload: u,
                    checkoutOriginProvenance: o,
                    isCheckoutModalEnabled: !0
                }), i = null, {
                    checkoutPayload: u,
                    checkoutSession: f
                };
                if (`tag` in f && f.tag === `custom_checkout_session` && t?.onCustomCheckoutSessionPrepared != null) return E(f, {
                    checkoutPayload: u,
                    checkoutOriginProvenance: o,
                    isCheckoutModalEnabled: !0
                }), t.onCustomCheckoutSessionPrepared({
                    checkoutPayload: u,
                    checkoutSession: f
                }), null;
                let p = a != null && u.checkout_source === `chatgpt_web_merged` ? le(a, `/codex/app`) : void 0;
                (t?.continuationTask != null || p != null) && `checkout_session_id` in f && Ee({
                    checkoutSessionId: f.checkout_session_id,
                    quantity: null,
                    ...p == null ? {} : {
                        returnPath: p
                    },
                    task: t?.continuationTask?.accountId === u.credit_purchase_data?.account_id ? t?.continuationTask : void 0
                });
                let m = !b && (window.location.pathname === `/codex/cloud` || window.location.pathname.startsWith(`/codex/cloud/`)),
                    h = t?.reloadDocument === !0 || m || !b && c?.hash === `#settings/Usage`,
                    oe = h ? void 0 : fe({
                        analytics: l,
                        accountId: y?.id,
                        checkoutSessionId: ye(f)
                    }),
                    g = new URLSearchParams;
                if (b || g.set(`return_to`, le(c ? `${c.pathname}${c.search??``}${c.hash??``}` : null, `/codex/cloud/settings/usage`)), n === !1 && g.set(ue, `false`), m && a == null && t?.continuationTask == null && !ae(window.location.search)) {
                    let e = ye(f);
                    e != null && de(e)
                }
                return await T(f, {
                    creditCheckoutAnalytics: l,
                    checkoutPayload: u,
                    checkoutOriginProvenance: o,
                    ...t?.signal ? {
                        signal: t.signal
                    } : {},
                    ...h ? {
                        reloadDocument: !0
                    } : {},
                    searchParams: g.toString() || void 0,
                    ...!h && (c || oe) ? {
                        state: {
                            ...oe,
                            ...c ? {
                                [be]: c
                            } : {}
                        }
                    } : {}
                }), null
            } catch (e) {
                let n = e;
                throw i != null && c(i), !t?.signal?.aborted && !(n instanceof DOMException && n.name === `AbortError`) && (s.removeItem(ie.CreditCheckoutRedirectPath), m.addError(n)), n
            }
        }, t[72] = Y, t[73] = n, t[74] = o, t[75] = l, t[76] = y, t[77] = X, t[78] = Z, t[79] = v, t[80] = b, t[81] = T, t[82] = C, t[83] = E, t[84] = _, t[85] = qe) : qe = t[85];
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
        return t[90] !== B || t[91] !== q || t[92] !== Z || t[93] !== Ze || t[94] !== Ye ? ($ = {
            status: `success`,
            submit: Ye,
            prepareCheckoutForModal: Ze,
            getModalPreparationIntent: Z,
            checkoutPricingCountryConfig: B,
            creditDiscountOffer: q
        }, t[90] = B, t[91] = q, t[92] = Z, t[93] = Ze, t[94] = Ye, t[95] = $) : $ = t[95], $
    }
}));
export {
    F as n, I as t
};
//# sourceMappingURL=ad3d11c5-85i91h9clo6teqqe.js.map