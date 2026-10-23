import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    E6 as n,
    Jn as r,
    Lit as i,
    Nat as a,
    O6 as o,
    Urt as s,
    V1 as c,
    Wrt as ee,
    Xn as l,
    Yn as te,
    Yrt as ne,
    irt as u,
    jat as d,
    nrt as re,
    o0 as f,
    q1 as p,
    rrt as ie,
    sst as m,
    tit as ae
} from "./4813494d-mdvd4786a87166cc.js";
import {
    G as h,
    O as oe,
    Vn as g,
    s as se,
    wn as _
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $ln as v,
    Ain as ce,
    Din as y,
    Dln as le,
    Eln as b,
    Gln as ue,
    Kin as de,
    Lan as x,
    Pan as fe,
    Ran as pe,
    Srn as S,
    Trn as me,
    Yin as C,
    bsn as he,
    eun as ge,
    gin as _e,
    jan as ve,
    kan as w,
    kin as ye,
    nun as be,
    run as T,
    uKn as E,
    wrn as xe,
    xsn as D
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Rf as Se,
    Rg as O,
    Rh as k,
    hm as A,
    xm as Ce,
    zf as j,
    zg as we
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    i as M,
    o as Te
} from "./c7dae6a1-dgz17x0jjgoeldol.js";
import {
    t as N
} from "./a2704c05-n80vcd86oj895gr5.js";
import {
    n as P,
    t as Ee
} from "./ba59b5eb-m7oxo8q5awe9gu67.js";
import {
    n as F,
    t as De
} from "./9cc78d41-jtruau1zwbk6don8.js";

function Oe(e, t) {
    return t && e.checkout_provider !== `stripe` ? !1 : (t || e.experiments?.auto_top_up_enabled !== `true`) && e.credit_purchase_auto_top_up?.enabled !== !0
}
var ke, Ae, I, L = e((() => {
    ke = _(), x(), T(), M(), D(), N(), v(), E(), k(), A(), P(), F(), j(), b(), y(), C(), S(), p(), i(), l(), n(), a(), u(), O(), se(), Ae = t(g()), I = e => {
        "use forget";
        let t = (0, ke.c)(96),
            {
                autoTopUpEnabled: n,
                cancelUrl: i,
                checkoutOriginProvenance: a,
                creditCheckoutAnalytics: l,
                creditCheckoutAccountScope: u,
                entryPoint: p,
                isChatGPTWorkInlineCreditCheckout: g,
                supportsOaicsCreditModal: se,
                returnLocation: _
            } = e,
            v = g !== void 0 && g,
            y = se !== void 0 && se,
            b = f(),
            x = u === `workspace_owner`,
            {
                country: S
            } = me(),
            {
                prepareCheckoutSession: C,
                getCheckoutPreparation: T,
                navigateToCheckout: E,
                recordCheckoutPresentation: D
            } = ce(),
            O;
        t[0] !== b || t[1] !== x ? (O = !x && (b?.isFree?.() === !0 || b?.isGo?.() === !0), t[0] = b, t[1] = x, t[2] = O) : O = t[2];
        let k;
        t[3] === O ? k = t[4] : (k = we(O), t[3] = O, t[4] = k);
        let A = k,
            j;
        t[5] !== b || t[6] !== p ? (j = (p === le.CODEX_CREDIT_PURCHASE_MODAL || p === le.CODEX_INLINE_CREDIT_PURCHASE_MODAL) && b?.isPersonalAccount() === !0 && b.hasPaidSubscription() && !b.isFree() && !b.isGo(), t[5] = b, t[6] = p, t[7] = j) : j = t[7];
        let M = j,
            N = !A,
            P;
        t[8] !== S || t[9] !== b || t[10] !== p || t[11] !== x || t[12] !== M || t[13] !== N ? (P = {
            country: S,
            currentAccount: b,
            location: p,
            shouldUsePaidSubscriptionBillingCurrency: N,
            pricingPlanIsTypeBusiness: x,
            retryCheckoutPricingOnMount: M
        }, t[8] = S, t[9] = b, t[10] = p, t[11] = x, t[12] = M, t[13] = N, t[14] = P) : P = t[14];
        let {
            billingDetails: F,
            status: I,
            errorReason: L
        } = xe(P), R;
        t[15] !== b || t[16] !== p || t[17] !== x || t[18] !== A ? (R = A || x ? `USD` : b?.mustGetSubscriptionBillingCurrency(p) ?? `USD`, t[15] = b, t[16] = p, t[17] = x, t[18] = A, t[19] = R) : R = t[19];
        let je = R,
            z;
        t[20] !== S || t[21] !== F || t[22] !== x || t[23] !== je || t[24] !== A ? (z = x ? {
            countryCode: S,
            currency: F?.currency,
            enabled: F != null
        } : A ? {
            countryCode: F?.country,
            currency: F?.currency ?? `USD`
        } : {
            currency: je
        }, t[20] = S, t[21] = F, t[22] = x, t[23] = je, t[24] = A, t[25] = z) : z = t[25];
        let Me = z,
            Ne;
        t[26] !== Me || t[27] !== M ? (Ne = {
            ...Me,
            retryOnMount: M
        }, t[26] = Me, t[27] = M, t[28] = Ne) : Ne = t[28];
        let {
            data: B,
            status: V,
            error: H,
            isFetching: U
        } = o(Ne), Pe = b?.id, W;
        t[29] === Pe ? W = t[30] : (W = De({
            accountId: Pe
        }), t[29] = Pe, t[30] = W);
        let G = oe(W),
            K;
        t[31] !== G.data || t[32] !== G.isFetching || t[33] !== G.status ? (K = pe({
            offer: G.data,
            status: G.status,
            isFetching: G.isFetching
        }), t[31] = G.data, t[32] = G.isFetching, t[33] = G.status, t[34] = K) : K = t[34];
        let Fe = K,
            Ie = b != null && Fe.status === `pending`,
            Le, Re;
        if (t[35] !== H || t[36] !== V || t[37] !== p ? (Le = () => {
                V === `error` && d.addError(`Failed to load checkoutPricingConfig`, {
                    error: H,
                    entryPoint: p
                })
            }, Re = [V, H, p], t[35] = H, t[36] = V, t[37] = p, t[38] = Le, t[39] = Re) : (Le = t[38], Re = t[39]), (0, Ae.useEffect)(Le, Re), x && b != null && (!b.isSelfServeBusiness() || !b.isOwnerOfAccount()) || I === `error` || V === `error` && !U || b != null && Fe.status === `error`) {
            let e;
            t[40] !== L || t[41] !== I || t[42] !== V || t[43] !== b || t[44] !== U || t[45] !== x ? (e = x && b != null && (!b.isSelfServeBusiness() || !b.isOwnerOfAccount()) ? `workspace_eligibility_error` : I === `error` ? L ?? `initial_data_error` : V === `error` && !U ? `checkout_pricing_error` : `discount_offer_error`, t[40] = L, t[41] = I, t[42] = V, t[43] = b, t[44] = U, t[45] = x, t[46] = e) : e = t[46];
            let n;
            return t[47] === e ? n = t[48] : (n = {
                status: `error`,
                errorReason: e,
                checkoutPricingCountryConfig: null,
                submit: null,
                prepareCheckoutForModal: null
            }, t[47] = e, t[48] = n), n
        }
        if (V !== `success` || Ie || !b || !F) {
            let e;
            return t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
                status: `pending`,
                checkoutPricingCountryConfig: null,
                submit: null,
                prepareCheckoutForModal: null
            }, t[49] = e) : e = t[49], e
        }
        let q = Fe.status === `ready` ? Fe.offer : null,
            J = b.id,
            ze;
        t[50] === b ? ze = t[51] : (ze = b.isPersonalAccount(), t[50] = b, t[51] = ze);
        let Be = ze,
            Ve = m()?.user?.id,
            He;
        t[52] === Symbol.for(`react.memo_cache_sentinel`) ? (He = r(), t[52] = He) : He = t[52];
        let Ue = He,
            We;
        t[53] !== J || t[54] !== Be || t[55] !== x ? (We = function() {
            let e = te();
            if (c()?.id !== J || m()?.user?.id !== Ve || r() !== Ue || x && (!c()?.isSelfServeBusiness() || !c()?.isOwnerOfAccount()) || (e == null ? !Be : e !== J)) throw new DOMException(`Checkout account changed`, `AbortError`)
        }, t[53] = J, t[54] = Be, t[55] = x, t[56] = We) : We = t[56];
        let Y = We,
            X;
        t[57] !== i || t[58] !== B || t[59] !== q || t[60] !== b.id || t[61] !== p || t[62] !== F || t[63] !== v || t[64] !== x || t[65] !== y ? (X = (e, t, n) => {
            let r = t?.forceLegacyCheckout ? null : q,
                a = t?.forceLegacyCheckout ? `redirect` : r == null ? t?.checkoutUiMode : `custom`,
                o = t?.entryPoint ?? p,
                s = r?.offer_id,
                c = Se(w.creditQuantityStep, n ? {
                    disableExposureLog: !0
                } : void 0),
                ee = Ce({
                    amountPerCredit: B.currencyConfig.amount_per_credit,
                    minorUnitExponent: B.currencyConfig.minor_unit_exponent,
                    creditQuantityStep: w.creditQuantityStep,
                    minimumChargeMinorUnits: w.minimumChargeMinorUnits
                }),
                l = fe({
                    quantity: e,
                    offer: r,
                    maximumCreditQuantity: c,
                    experimentDefaultQuantity: (r == null ? null : Ee({
                        accountScope: x ? `workspace` : `personal`,
                        disableExposureLogging: n,
                        creditQuantityStep: w.creditQuantityStep,
                        minimumCreditQuantity: ee,
                        maximumCreditQuantity: c
                    }))?.defaultCreditQuantity ?? null,
                    clampToDiscountTier: !v
                });
            return {
                ...ve({
                    accountId: b.id,
                    quantity: l,
                    discountOfferId: s,
                    entryPoint: o,
                    checkoutUiMode: a,
                    billingDetails: F,
                    cancelUrl: t?.cancelUrl ?? i
                }),
                ...y && !v && a === `custom` ? {
                    supports_oaics_credit_modal: !0
                } : {}
            }
        }, t[57] = i, t[58] = B, t[59] = q, t[60] = b.id, t[61] = p, t[62] = F, t[63] = v, t[64] = x, t[65] = y, t[66] = X) : X = t[66];
        let Z = X,
            Ge;
        t[67] !== J || t[68] !== Y || t[69] !== Z || t[70] !== T ? (Ge = function(e, t) {
            let n = T(Z(e, t, !0), {
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
        }, t[67] = J, t[68] = Y, t[69] = Z, t[70] = T, t[71] = Ge) : Ge = t[71];
        let Q = Ge,
            Ke;
        t[72] !== Y || t[73] !== n || t[74] !== a || t[75] !== l || t[76] !== b || t[77] !== Z || t[78] !== Q || t[79] !== v || t[80] !== x || t[81] !== E || t[82] !== C || t[83] !== D || t[84] !== _ ? (Ke = async (e, t, r) => {
            let i = null;
            try {
                t?.signal?.throwIfAborted(), Y();
                let o = t?.successReturnPath;
                re.setItem(ie.CreditCheckoutRedirectPath, be(o, x ? `/admin/billing` : `/codex/cloud/settings/usage`));
                let s = t?.returnLocation ?? _,
                    c = Z(e, t, !1),
                    te = r || t?.onCustomCheckoutSessionPrepared != null,
                    u = t?.preparedCheckout,
                    d = te && u != null && Q(e, t).key === u.key;
                if (d) {
                    u.recordPreparationExposure?.(), c = u.checkoutPayload, ye(c, !0);
                    let e = he(u.checkoutResponse);
                    e != null && ae(e, ee(new URLSearchParams({
                        source: c.checkout_source ?? ``
                    })), new URLSearchParams(window.location.search).get(`checkout_from`))
                }
                let f = d ? u.checkoutResponse : await C(c, {
                    assertCurrentIdentity: Y,
                    ...t?.signal ? {
                        signal: t.signal
                    } : {},
                    ...te ? {
                        isCheckoutModalEnabled: !0
                    } : {}
                });
                if (t?.signal?.throwIfAborted(), Y(), r && `tag` in f && f.tag === `custom_checkout_session` && Oe(f, v)) return i = f.checkout_session_id, D(f, {
                    checkoutPayload: c,
                    checkoutOriginProvenance: a,
                    isCheckoutModalEnabled: !0
                }), i = null, {
                    checkoutPayload: c,
                    checkoutSession: f
                };
                if (`tag` in f && f.tag === `custom_checkout_session` && t?.onCustomCheckoutSessionPrepared != null) return D(f, {
                    checkoutPayload: c,
                    checkoutOriginProvenance: a,
                    isCheckoutModalEnabled: !0
                }), t.onCustomCheckoutSessionPrepared({
                    checkoutPayload: c,
                    checkoutSession: f
                }), null;
                let p = o != null && c.checkout_source === `chatgpt_web_merged` ? be(o, `/codex/app`) : void 0;
                (t?.continuationTask != null || p != null) && `checkout_session_id` in f && Te({
                    checkoutSessionId: f.checkout_session_id,
                    quantity: null,
                    ...p == null ? {} : {
                        returnPath: p
                    },
                    task: t?.continuationTask?.accountId === c.credit_purchase_data?.account_id ? t?.continuationTask : void 0
                });
                let m = !x && (window.location.pathname === `/codex/cloud` || window.location.pathname.startsWith(`/codex/cloud/`)),
                    h = t?.reloadDocument === !0 || m || !x && s?.hash === `#settings/Usage`,
                    oe = h ? void 0 : ue({
                        analytics: l,
                        accountId: b?.id,
                        checkoutSessionId: he(f)
                    }),
                    g = new URLSearchParams;
                if (x || g.set(`return_to`, be(s ? `${s.pathname}${s.search??``}${s.hash??``}` : null, `/codex/cloud/settings/usage`)), n === !1 && g.set(de, `false`), m && o == null && t?.continuationTask == null && !ne(window.location.search)) {
                    let e = he(f);
                    e != null && ge(e)
                }
                return await E(f, {
                    creditCheckoutAnalytics: l,
                    checkoutPayload: c,
                    checkoutOriginProvenance: a,
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
                let n = e;
                throw i != null && s(i), !t?.signal?.aborted && !(n instanceof DOMException && n.name === `AbortError`) && (re.removeItem(ie.CreditCheckoutRedirectPath), d.addError(n)), n
            }
        }, t[72] = Y, t[73] = n, t[74] = a, t[75] = l, t[76] = b, t[77] = Z, t[78] = Q, t[79] = v, t[80] = x, t[81] = E, t[82] = C, t[83] = D, t[84] = _, t[85] = Ke) : Ke = t[85];
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
        return t[90] !== B || t[91] !== q || t[92] !== Q || t[93] !== Xe || t[94] !== Je ? (Ze = {
            status: `success`,
            submit: Je,
            prepareCheckoutForModal: Xe,
            getModalPreparationIntent: Q,
            checkoutPricingCountryConfig: B,
            creditDiscountOffer: q
        }, t[90] = B, t[91] = q, t[92] = Q, t[93] = Xe, t[94] = Je, t[95] = Ze) : Ze = t[95], Ze
    }
}));
export {
    I as n, L as t
};
//# sourceMappingURL=ad3d11c5-d8n2hu0vzfttrcrz.js.map