import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ot as n,
    Cat as r,
    D6 as i,
    Frt as a,
    Irt as ee,
    Jn as o,
    Jnt as te,
    T6 as s,
    Tat as c,
    V1 as l,
    Vrt as ne,
    Xn as u,
    Xnt as d,
    Yn as re,
    Ynt as ie,
    kit as f,
    o0 as p,
    q1 as m,
    qrt as ae
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    Crn as le,
    Dan as ue,
    Din as de,
    Fan as fe,
    Hln as pe,
    JGn as y,
    Oan as me,
    Oin as he,
    Pan as b,
    Srn as ge,
    Tin as x,
    Win as _e,
    Xln as S,
    Zln as ve,
    _sn as ye,
    brn as be,
    eun as C,
    jan as xe,
    min as Se,
    qin as w,
    vsn as T,
    wln as Ce
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Lf as we,
    Mg as Te,
    Nh as E,
    Rf as D,
    gm as Ee,
    jg as O,
    pm as k
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    i as A,
    o as De
} from "./c7dae6a1-l500z4lcxy30gt0l.js";
import {
    t as j
} from "./a2704c05-jrwvjh2obbwnozpk.js";
import {
    n as M,
    t as Oe
} from "./ba59b5eb-nd2cg8rqhq1bscf4.js";
import {
    n as N,
    t as ke
} from "./9cc78d41-jx7kewa14j98u2j9.js";

function Ae(e, t) {
    return t && e.checkout_provider !== `stripe` ? !1 : (t || e.experiments?.auto_top_up_enabled !== `true`) && e.credit_purchase_auto_top_up?.enabled !== !0
}
var je, Me, P, F = e((() => {
    je = _(), b(), C(), A(), T(), j(), S(), y(), E(), k(), M(), N(), D(), v(), x(), w(), be(), m(), f(), u(), s(), c(), d(), O(), se(), Me = t(g()), P = e => {
        "use forget";
        let t = (0, je.c)(96),
            {
                autoTopUpEnabled: s,
                cancelUrl: c,
                checkoutOriginProvenance: u,
                creditCheckoutAnalytics: d,
                creditCheckoutAccountScope: f,
                entryPoint: m,
                isChatGPTWorkInlineCreditCheckout: g,
                supportsOaicsCreditModal: se,
                returnLocation: _
            } = e,
            v = g !== void 0 && g,
            y = se !== void 0 && se,
            b = p(),
            x = f === `workspace_owner`,
            {
                country: S
            } = le(),
            {
                prepareCheckoutSession: be,
                getCheckoutPreparation: C,
                navigateToCheckout: w,
                recordCheckoutPresentation: T
            } = he(),
            E;
        t[0] !== b || t[1] !== x ? (E = !x && (b?.isFree?.() === !0 || b?.isGo?.() === !0), t[0] = b, t[1] = x, t[2] = E) : E = t[2];
        let D;
        t[3] === E ? D = t[4] : (D = Te(E), t[3] = E, t[4] = D);
        let O = D,
            k;
        t[5] !== b || t[6] !== m ? (k = (m === Ce.CODEX_CREDIT_PURCHASE_MODAL || m === Ce.CODEX_INLINE_CREDIT_PURCHASE_MODAL) && b?.isPersonalAccount() === !0 && b.hasPaidSubscription() && !b.isFree() && !b.isGo(), t[5] = b, t[6] = m, t[7] = k) : k = t[7];
        let A = k,
            j = !O,
            M;
        t[8] !== S || t[9] !== b || t[10] !== m || t[11] !== x || t[12] !== A || t[13] !== j ? (M = {
            country: S,
            currentAccount: b,
            location: m,
            shouldUsePaidSubscriptionBillingCurrency: j,
            pricingPlanIsTypeBusiness: x,
            retryCheckoutPricingOnMount: A
        }, t[8] = S, t[9] = b, t[10] = m, t[11] = x, t[12] = A, t[13] = j, t[14] = M) : M = t[14];
        let {
            billingDetails: N,
            status: P,
            errorReason: F
        } = ge(M), I;
        t[15] !== b || t[16] !== m || t[17] !== x || t[18] !== O ? (I = O || x ? `USD` : b?.mustGetSubscriptionBillingCurrency(m) ?? `USD`, t[15] = b, t[16] = m, t[17] = x, t[18] = O, t[19] = I) : I = t[19];
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
        } = i(R), Fe = b?.id, U;
        t[29] === Fe ? U = t[30] : (U = ke({
            accountId: Fe
        }), t[29] = Fe, t[30] = U);
        let W = oe(U),
            G;
        t[31] !== W.data || t[32] !== W.isFetching || t[33] !== W.status ? (G = fe({
            offer: W.data,
            status: W.status,
            isFetching: W.isFetching
        }), t[31] = W.data, t[32] = W.isFetching, t[33] = W.status, t[34] = G) : G = t[34];
        let K = G,
            Ie = b != null && K.status === `pending`,
            q, Le;
        if (t[35] !== V || t[36] !== B || t[37] !== m ? (q = () => {
                B === `error` && r.addError(`Failed to load checkoutPricingConfig`, {
                    error: V,
                    entryPoint: m
                })
            }, Le = [B, V, m], t[35] = V, t[36] = B, t[37] = m, t[38] = q, t[39] = Le) : (q = t[38], Le = t[39]), (0, Me.useEffect)(q, Le), x && b != null && (!b.isSelfServeBusiness() || !b.isOwnerOfAccount()) || P === `error` || B === `error` && !H || b != null && K.status === `error`) {
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
            Be = n()?.user?.id,
            Ve;
        t[52] === Symbol.for(`react.memo_cache_sentinel`) ? (Ve = o(), t[52] = Ve) : Ve = t[52];
        let He = Ve,
            Ue;
        t[53] !== Y || t[54] !== ze || t[55] !== x ? (Ue = function() {
            let e = re();
            if (l()?.id !== Y || n()?.user?.id !== Be || o() !== He || x && (!l()?.isSelfServeBusiness() || !l()?.isOwnerOfAccount()) || (e == null ? !ze : e !== Y)) throw new DOMException(`Checkout account changed`, `AbortError`)
        }, t[53] = Y, t[54] = ze, t[55] = x, t[56] = Ue) : Ue = t[56];
        let X = Ue,
            We;
        t[57] !== c || t[58] !== z || t[59] !== J || t[60] !== b.id || t[61] !== m || t[62] !== N || t[63] !== v || t[64] !== x || t[65] !== y ? (We = (e, t, n) => {
            let r = t?.forceLegacyCheckout ? null : J,
                i = t?.forceLegacyCheckout ? `redirect` : r == null ? t?.checkoutUiMode : `custom`,
                a = t?.entryPoint ?? m,
                ee = r?.offer_id,
                o = we(ue.creditQuantityStep, n ? {
                    disableExposureLog: !0
                } : void 0),
                te = Ee({
                    amountPerCredit: z.currencyConfig.amount_per_credit,
                    minorUnitExponent: z.currencyConfig.minor_unit_exponent,
                    creditQuantityStep: ue.creditQuantityStep,
                    minimumChargeMinorUnits: ue.minimumChargeMinorUnits
                }),
                s = xe({
                    quantity: e,
                    offer: r,
                    maximumCreditQuantity: o,
                    experimentDefaultQuantity: (r == null ? null : Oe({
                        accountScope: x ? `workspace` : `personal`,
                        disableExposureLogging: n,
                        creditQuantityStep: ue.creditQuantityStep,
                        minimumCreditQuantity: te,
                        maximumCreditQuantity: o
                    }))?.defaultCreditQuantity ?? null,
                    clampToDiscountTier: !v
                });
            return {
                ...me({
                    accountId: b.id,
                    quantity: s,
                    discountOfferId: ee,
                    entryPoint: a,
                    checkoutUiMode: i,
                    billingDetails: N,
                    cancelUrl: t?.cancelUrl ?? c
                }),
                ...y && !v && i === `custom` ? {
                    supports_oaics_credit_modal: !0
                } : {}
            }
        }, t[57] = c, t[58] = z, t[59] = J, t[60] = b.id, t[61] = m, t[62] = N, t[63] = v, t[64] = x, t[65] = y, t[66] = We) : We = t[66];
        let Z = We,
            Ge;
        t[67] !== Y || t[68] !== X || t[69] !== Z || t[70] !== C ? (Ge = function(e, t) {
            let n = C(Z(e, t, !0), {
                    isCheckoutModalEnabled: !0,
                    suppressPrepareCheckoutSessionEvent: !0,
                    backgroundPreparation: !0,
                    assertCurrentIdentity: X
                }),
                r = h([`standalone-credit-checkout`, Be, Y, n.checkoutPayload, n.sourceSearch]);
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
        }, t[67] = Y, t[68] = X, t[69] = Z, t[70] = C, t[71] = Ge) : Ge = t[71];
        let Q = Ge,
            Ke;
        t[72] !== X || t[73] !== s || t[74] !== u || t[75] !== d || t[76] !== b || t[77] !== Z || t[78] !== Q || t[79] !== v || t[80] !== x || t[81] !== w || t[82] !== be || t[83] !== T || t[84] !== _ ? (Ke = async (e, t, n) => {
            let i = null;
            try {
                t?.signal?.throwIfAborted(), X();
                let r = t?.successReturnPath;
                te.setItem(ie.CreditCheckoutRedirectPath, ce(r, x ? `/admin/billing` : `/codex/cloud/settings/usage`));
                let a = t?.returnLocation ?? _,
                    o = Z(e, t, !1),
                    c = n || t?.onCustomCheckoutSessionPrepared != null,
                    l = t?.preparedCheckout,
                    re = c && l != null && Q(e, t).key === l.key;
                if (re) {
                    l.recordPreparationExposure?.(), o = l.checkoutPayload, de(o, !0);
                    let e = ye(l.checkoutResponse);
                    e != null && ae(e, ee(new URLSearchParams({
                        source: o.checkout_source ?? ``
                    })), new URLSearchParams(window.location.search).get(`checkout_from`))
                }
                let f = re ? l.checkoutResponse : await be(o, {
                    assertCurrentIdentity: X,
                    ...t?.signal ? {
                        signal: t.signal
                    } : {},
                    ...c ? {
                        isCheckoutModalEnabled: !0
                    } : {}
                });
                if (t?.signal?.throwIfAborted(), X(), n && `tag` in f && f.tag === `custom_checkout_session` && Ae(f, v)) return i = f.checkout_session_id, T(f, {
                    checkoutPayload: o,
                    checkoutOriginProvenance: u,
                    isCheckoutModalEnabled: !0
                }), i = null, {
                    checkoutPayload: o,
                    checkoutSession: f
                };
                if (`tag` in f && f.tag === `custom_checkout_session` && t?.onCustomCheckoutSessionPrepared != null) return T(f, {
                    checkoutPayload: o,
                    checkoutOriginProvenance: u,
                    isCheckoutModalEnabled: !0
                }), t.onCustomCheckoutSessionPrepared({
                    checkoutPayload: o,
                    checkoutSession: f
                }), null;
                let p = r != null && o.checkout_source === `chatgpt_web_merged` ? ce(r, `/codex/app`) : void 0;
                (t?.continuationTask != null || p != null) && `checkout_session_id` in f && De({
                    checkoutSessionId: f.checkout_session_id,
                    quantity: null,
                    ...p == null ? {} : {
                        returnPath: p
                    },
                    task: t?.continuationTask?.accountId === o.credit_purchase_data?.account_id ? t?.continuationTask : void 0
                });
                let m = !x && (window.location.pathname === `/codex/cloud` || window.location.pathname.startsWith(`/codex/cloud/`)),
                    h = t?.reloadDocument === !0 || m || !x && a?.hash === `#settings/Usage`,
                    oe = h ? void 0 : pe({
                        analytics: d,
                        accountId: b?.id,
                        checkoutSessionId: ye(f)
                    }),
                    g = new URLSearchParams;
                if (x || g.set(`return_to`, ce(a ? `${a.pathname}${a.search??``}${a.hash??``}` : null, `/codex/cloud/settings/usage`)), s === !1 && g.set(_e, `false`), m && r == null && t?.continuationTask == null && !ne(window.location.search)) {
                    let e = ye(f);
                    e != null && ve(e)
                }
                return await w(f, {
                    creditCheckoutAnalytics: d,
                    checkoutPayload: o,
                    checkoutOriginProvenance: u,
                    ...t?.signal ? {
                        signal: t.signal
                    } : {},
                    ...h ? {
                        reloadDocument: !0
                    } : {},
                    searchParams: g.toString() || void 0,
                    ...!h && (a || oe) ? {
                        state: {
                            ...oe,
                            ...a ? {
                                [Se]: a
                            } : {}
                        }
                    } : {}
                }), null
            } catch (e) {
                let n = e;
                throw i != null && a(i), !t?.signal?.aborted && !(n instanceof DOMException && n.name === `AbortError`) && (te.removeItem(ie.CreditCheckoutRedirectPath), r.addError(n)), n
            }
        }, t[72] = X, t[73] = s, t[74] = u, t[75] = d, t[76] = b, t[77] = Z, t[78] = Q, t[79] = v, t[80] = x, t[81] = w, t[82] = be, t[83] = T, t[84] = _, t[85] = Ke) : Ke = t[85];
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
//# sourceMappingURL=ad3d11c5-fi7v5se4pc6vu16a.js.map