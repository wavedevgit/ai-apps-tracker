import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as n,
    Bnt as r,
    C1 as i,
    Dit as a,
    Gnt as ee,
    Jn as o,
    L3 as s,
    Nrt as c,
    Qtt as te,
    Xn as l,
    Yn as u,
    Znt as ne,
    ent as d,
    i1 as f,
    kit as p,
    rot as m,
    u1 as h,
    z3 as g,
    znt as re
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    G as _,
    O as ie,
    Vn as v,
    s as ae,
    wn as oe
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $nn as se,
    Cln as y,
    Kcn as ce,
    Kon as le,
    Qnn as ue,
    Sin as b,
    Sln as de,
    Wrn as fe,
    Xnn as x,
    bln as pe,
    dln as me,
    eGn as S,
    iin as he,
    lan as ge,
    nan as C,
    oan as _e,
    qcn as ve,
    qon as ye,
    ran as be,
    rin as xe,
    tin as w,
    uan as Se,
    yin as Ce,
    yln as T
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $g as we,
    Qg as E,
    Rm as D,
    Vm as Te,
    eg as O,
    fp as Ee,
    pp as k
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    i as A,
    o as De
} from "./c7dae6a1-e4remp0wromtluw3.js";
import {
    t as j
} from "./a2704c05-drcz2fma63ndal60.js";
import {
    n as M,
    t as Oe
} from "./ba59b5eb-3loc5ek3f1okyzoh.js";
import {
    n as N,
    t as ke
} from "./9cc78d41-l6outi3xyrhzw2nn.js";

function Ae(e, t) {
    return t && e.checkout_provider !== `stripe` ? !1 : (t || e.experiments?.auto_top_up_enabled !== `true`) && e.credit_purchase_auto_top_up?.enabled !== !0
}
var je, Me, P, F = e((() => {
    je = oe(), ge(), y(), A(), ye(), j(), T(), S(), O(), D(), M(), N(), k(), ce(), w(), b(), x(), h(), c(), l(), s(), p(), d(), E(), ae(), Me = t(v()), P = e => {
        "use forget";
        let t = (0, je.c)(96),
            {
                autoTopUpEnabled: s,
                cancelUrl: c,
                checkoutOriginProvenance: l,
                creditCheckoutAnalytics: d,
                creditCheckoutAccountScope: p,
                entryPoint: h,
                isChatGPTWorkInlineCreditCheckout: v,
                supportsOaicsCreditModal: ae,
                returnLocation: oe
            } = e,
            y = v !== void 0 && v,
            ce = ae !== void 0 && ae,
            b = i(),
            x = p === `workspace_owner`,
            {
                country: S
            } = se(),
            {
                prepareCheckoutSession: ge,
                getCheckoutPreparation: ye,
                navigateToCheckout: w,
                recordCheckoutPresentation: T
            } = he(),
            E;
        t[0] !== b || t[1] !== x ? (E = !x && (b?.isFree?.() === !0 || b?.isGo?.() === !0), t[0] = b, t[1] = x, t[2] = E) : E = t[2];
        let D;
        t[3] === E ? D = t[4] : (D = we(E), t[3] = E, t[4] = D);
        let O = D,
            k;
        t[5] !== b || t[6] !== h ? (k = (h === ve.CODEX_CREDIT_PURCHASE_MODAL || h === ve.CODEX_INLINE_CREDIT_PURCHASE_MODAL) && b?.isPersonalAccount() === !0 && b.hasPaidSubscription() && !b.isFree() && !b.isGo(), t[5] = b, t[6] = h, t[7] = k) : k = t[7];
        let A = k,
            j = !O,
            M;
        t[8] !== S || t[9] !== b || t[10] !== h || t[11] !== x || t[12] !== A || t[13] !== j ? (M = {
            country: S,
            currentAccount: b,
            location: h,
            shouldUsePaidSubscriptionBillingCurrency: j,
            pricingPlanIsTypeBusiness: x,
            retryCheckoutPricingOnMount: A
        }, t[8] = S, t[9] = b, t[10] = h, t[11] = x, t[12] = A, t[13] = j, t[14] = M) : M = t[14];
        let {
            billingDetails: N,
            status: P,
            errorReason: F
        } = ue(M), I;
        t[15] !== b || t[16] !== h || t[17] !== x || t[18] !== O ? (I = O || x ? `USD` : b?.mustGetSubscriptionBillingCurrency(h) ?? `USD`, t[15] = b, t[16] = h, t[17] = x, t[18] = O, t[19] = I) : I = t[19];
        let Ne = I,
            L;
        t[20] !== S || t[21] !== N || t[22] !== x || t[23] !== Ne || t[24] !== O ? (L = x ? {
            countryCode: S,
            currency: N?.currency,
            enabled: N != null
        } : O ? {
            countryCode: N?.country,
            currency: N?.currency ?? `USD`
        } : {
            currency: Ne
        }, t[20] = S, t[21] = N, t[22] = x, t[23] = Ne, t[24] = O, t[25] = L) : L = t[25];
        let Pe = L,
            R;
        t[26] !== Pe || t[27] !== A ? (R = {
            ...Pe,
            retryOnMount: A
        }, t[26] = Pe, t[27] = A, t[28] = R) : R = t[28];
        let {
            data: z,
            status: B,
            error: V,
            isFetching: H
        } = g(R), Fe = b?.id, U;
        t[29] === Fe ? U = t[30] : (U = ke({
            accountId: Fe
        }), t[29] = Fe, t[30] = U);
        let W = ie(U),
            G;
        t[31] !== W.data || t[32] !== W.isFetching || t[33] !== W.status ? (G = Se({
            offer: W.data,
            status: W.status,
            isFetching: W.isFetching
        }), t[31] = W.data, t[32] = W.isFetching, t[33] = W.status, t[34] = G) : G = t[34];
        let K = G,
            Ie = b != null && K.status === `pending`,
            q, Le;
        if (t[35] !== V || t[36] !== B || t[37] !== h ? (q = () => {
                B === `error` && a.addError(`Failed to load checkoutPricingConfig`, {
                    error: V,
                    entryPoint: h
                })
            }, Le = [B, V, h], t[35] = V, t[36] = B, t[37] = h, t[38] = q, t[39] = Le) : (q = t[38], Le = t[39]), (0, Me.useEffect)(q, Le), x && b != null && (!b.isSelfServeBusiness() || !b.isOwnerOfAccount()) || P === `error` || B === `error` && !H || b != null && K.status === `error`) {
            let e;
            t[40] !== F || t[41] !== P || t[42] !== B || t[43] !== b || t[44] !== H || t[45] !== x ? (e = x && b != null && (!b.isSelfServeBusiness() || !b.isOwnerOfAccount()) ? `workspace_eligibility_error` : P === `error` ? F ?? `initial_data_error` : B === `error` && !H ? `checkout_pricing_error` : `discount_offer_error`, t[40] = F, t[41] = P, t[42] = B, t[43] = b, t[44] = H, t[45] = x, t[46] = e) : e = t[46];
            let n;
            return t[47] === e ? n = t[48] : (n = {
                status: `error`,
                errorReason: e,
                checkoutPricingCountryConfig: null,
                submit: null,
                prepareCheckoutForModal: null
            }, t[47] = e, t[48] = n), n
        }
        if (B !== `success` || Ie || !b || !N) {
            let e;
            return t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
                status: `pending`,
                checkoutPricingCountryConfig: null,
                submit: null,
                prepareCheckoutForModal: null
            }, t[49] = e) : e = t[49], e
        }
        let J = K.status === `ready` ? K.offer : null,
            Y = b.id,
            Re;
        t[50] === b ? Re = t[51] : (Re = b.isPersonalAccount(), t[50] = b, t[51] = Re);
        let ze = Re,
            Be = m()?.user?.id,
            Ve;
        t[52] === Symbol.for(`react.memo_cache_sentinel`) ? (Ve = o(), t[52] = Ve) : Ve = t[52];
        let He = Ve,
            Ue;
        t[53] !== Y || t[54] !== ze || t[55] !== x ? (Ue = function() {
            let e = u();
            if (f()?.id !== Y || m()?.user?.id !== Be || o() !== He || x && (!f()?.isSelfServeBusiness() || !f()?.isOwnerOfAccount()) || (e == null ? !ze : e !== Y)) throw new DOMException(`Checkout account changed`, `AbortError`)
        }, t[53] = Y, t[54] = ze, t[55] = x, t[56] = Ue) : Ue = t[56];
        let X = Ue,
            We;
        t[57] !== c || t[58] !== z || t[59] !== J || t[60] !== b.id || t[61] !== h || t[62] !== N || t[63] !== y || t[64] !== x || t[65] !== ce ? (We = (e, t, n) => {
            let r = t?.forceLegacyCheckout ? null : J,
                i = t?.forceLegacyCheckout ? `redirect` : r == null ? t?.checkoutUiMode : `custom`,
                a = t?.entryPoint ?? h,
                ee = r?.offer_id,
                o = Ee(C.creditQuantityStep, n ? {
                    disableExposureLog: !0
                } : void 0),
                s = Te({
                    amountPerCredit: z.currencyConfig.amount_per_credit,
                    minorUnitExponent: z.currencyConfig.minor_unit_exponent,
                    creditQuantityStep: C.creditQuantityStep,
                    minimumChargeMinorUnits: C.minimumChargeMinorUnits
                }),
                te = _e({
                    quantity: e,
                    offer: r,
                    maximumCreditQuantity: o,
                    experimentDefaultQuantity: (r == null ? null : Oe({
                        accountScope: x ? `workspace` : `personal`,
                        disableExposureLogging: n,
                        creditQuantityStep: C.creditQuantityStep,
                        minimumCreditQuantity: s,
                        maximumCreditQuantity: o
                    }))?.defaultCreditQuantity ?? null,
                    clampToDiscountTier: !y
                });
            return {
                ...be({
                    accountId: b.id,
                    quantity: te,
                    discountOfferId: ee,
                    entryPoint: a,
                    checkoutUiMode: i,
                    billingDetails: N,
                    cancelUrl: t?.cancelUrl ?? c
                }),
                ...ce && !y && i === `custom` ? {
                    supports_oaics_credit_modal: !0
                } : {}
            }
        }, t[57] = c, t[58] = z, t[59] = J, t[60] = b.id, t[61] = h, t[62] = N, t[63] = y, t[64] = x, t[65] = ce, t[66] = We) : We = t[66];
        let Z = We,
            Ge;
        t[67] !== Y || t[68] !== X || t[69] !== Z || t[70] !== ye ? (Ge = function(e, t) {
            let n = ye(Z(e, t, !0), {
                    isCheckoutModalEnabled: !0,
                    suppressPrepareCheckoutSessionEvent: !0,
                    backgroundPreparation: !0,
                    assertCurrentIdentity: X
                }),
                r = _([`standalone-credit-checkout`, Be, Y, n.checkoutPayload, n.sourceSearch]);
            return {
                key: r,
                async prepare(e) {
                    e.throwIfAborted(), X();
                    let t = await n.prepare(e);
                    return e.throwIfAborted(), X(), {
                        key: r,
                        checkoutPayload: n.checkoutPayload,
                        checkoutResponse: t,
                        recordPreparationExposure: n.recordPreparationExposure
                    }
                }
            }
        }, t[67] = Y, t[68] = X, t[69] = Z, t[70] = ye, t[71] = Ge) : Ge = t[71];
        let Q = Ge,
            Ke;
        t[72] !== X || t[73] !== s || t[74] !== l || t[75] !== d || t[76] !== b || t[77] !== Z || t[78] !== Q || t[79] !== y || t[80] !== x || t[81] !== w || t[82] !== ge || t[83] !== T || t[84] !== oe ? (Ke = async (e, t, i) => {
            let o = null;
            try {
                t?.signal?.throwIfAborted(), X();
                let a = t?.successReturnPath;
                te.setItem(n.CreditCheckoutRedirectPath, de(a, x ? `/admin/billing` : `/codex/cloud/settings/usage`));
                let c = t?.returnLocation ?? oe,
                    u = Z(e, t, !1),
                    f = i || t?.onCustomCheckoutSessionPrepared != null,
                    p = t?.preparedCheckout,
                    m = f && p != null && Q(e, t).key === p.key;
                if (m) {
                    p.recordPreparationExposure?.(), u = p.checkoutPayload, xe(u, !0);
                    let e = le(p.checkoutResponse);
                    e != null && ne(e, r(new URLSearchParams({
                        source: u.checkout_source ?? ``
                    })), new URLSearchParams(window.location.search).get(`checkout_from`))
                }
                let h = m ? p.checkoutResponse : await ge(u, {
                    assertCurrentIdentity: X,
                    ...t?.signal ? {
                        signal: t.signal
                    } : {},
                    ...f ? {
                        isCheckoutModalEnabled: !0
                    } : {}
                });
                if (t?.signal?.throwIfAborted(), X(), i && `tag` in h && h.tag === `custom_checkout_session` && Ae(h, y)) return o = h.checkout_session_id, T(h, {
                    checkoutPayload: u,
                    checkoutOriginProvenance: l,
                    isCheckoutModalEnabled: !0
                }), o = null, {
                    checkoutPayload: u,
                    checkoutSession: h
                };
                if (`tag` in h && h.tag === `custom_checkout_session` && t?.onCustomCheckoutSessionPrepared != null) return T(h, {
                    checkoutPayload: u,
                    checkoutOriginProvenance: l,
                    isCheckoutModalEnabled: !0
                }), t.onCustomCheckoutSessionPrepared({
                    checkoutPayload: u,
                    checkoutSession: h
                }), null;
                let g = a != null && u.checkout_source === `chatgpt_web_merged` ? de(a, `/codex/app`) : void 0;
                (t?.continuationTask != null || g != null) && `checkout_session_id` in h && De({
                    checkoutSessionId: h.checkout_session_id,
                    quantity: null,
                    ...g == null ? {} : {
                        returnPath: g
                    },
                    task: t?.continuationTask?.accountId === u.credit_purchase_data?.account_id ? t?.continuationTask : void 0
                });
                let re = !x && (window.location.pathname === `/codex/cloud` || window.location.pathname.startsWith(`/codex/cloud/`)),
                    _ = t?.reloadDocument === !0 || re || !x && c?.hash === `#settings/Usage`,
                    ie = _ ? void 0 : me({
                        analytics: d,
                        accountId: b?.id,
                        checkoutSessionId: le(h)
                    }),
                    v = new URLSearchParams;
                if (x || v.set(`return_to`, de(c ? `${c.pathname}${c.search??``}${c.hash??``}` : null, `/codex/cloud/settings/usage`)), s === !1 && v.set(Ce, `false`), re && a == null && t?.continuationTask == null && !ee(window.location.search)) {
                    let e = le(h);
                    e != null && pe(e)
                }
                return await w(h, {
                    creditCheckoutAnalytics: d,
                    checkoutPayload: u,
                    checkoutOriginProvenance: l,
                    ...t?.signal ? {
                        signal: t.signal
                    } : {},
                    ..._ ? {
                        reloadDocument: !0
                    } : {},
                    searchParams: v.toString() || void 0,
                    ...!_ && (c || ie) ? {
                        state: {
                            ...ie,
                            ...c ? {
                                [fe]: c
                            } : {}
                        }
                    } : {}
                }), null
            } catch (e) {
                let r = e;
                throw o != null && re(o), !t?.signal?.aborted && !(r instanceof DOMException && r.name === `AbortError`) && (te.removeItem(n.CreditCheckoutRedirectPath), a.addError(r)), r
            }
        }, t[72] = X, t[73] = s, t[74] = l, t[75] = d, t[76] = b, t[77] = Z, t[78] = Q, t[79] = y, t[80] = x, t[81] = w, t[82] = ge, t[83] = T, t[84] = oe, t[85] = Ke) : Ke = t[85];
        let $ = Ke,
            qe;
        t[86] === $ ? qe = t[87] : (qe = async (e, t) => {
            await $(e, t, !1)
        }, t[86] = $, t[87] = qe);
        let Je = qe,
            Ye;
        t[88] === $ ? Ye = t[89] : (Ye = (e, t) => $(e, t, !0), t[88] = $, t[89] = Ye);
        let Xe = Ye,
            Ze;
        return t[90] !== z || t[91] !== J || t[92] !== Q || t[93] !== Xe || t[94] !== Je ? (Ze = {
            status: `success`,
            submit: Je,
            prepareCheckoutForModal: Xe,
            getModalPreparationIntent: Q,
            checkoutPricingCountryConfig: z,
            creditDiscountOffer: J
        }, t[90] = z, t[91] = J, t[92] = Q, t[93] = Xe, t[94] = Je, t[95] = Ze) : Ze = t[95], Ze
    }
}));
export {
    P as n, F as t
};
//# sourceMappingURL=ad3d11c5-ohffoqcspvtifsnc.js.map