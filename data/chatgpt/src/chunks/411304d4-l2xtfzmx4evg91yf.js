import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    K4 as t,
    ert as n,
    h3 as r,
    p3 as i,
    trt as a,
    u3 as o,
    y3 as s
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Ln as c,
    Rn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bin as u,
    Cln as d,
    Sln as f,
    man as p,
    zin as m
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    Zh as h
} from "./c2675c8c-ossqum2x3eut0sh8.js";
var g, _ = e((() => {
    l(), g = c({
        nativeSaveChoiceError: {
            id: `chatgpt.checkout.saved_payment.reuse.native_choice_error`,
            defaultMessage: `Start a new checkout to review whether this card is saved for future purchases`
        }
    })
}));

function v({
    enabled: e,
    selectedPaymentMethod: t,
    expressPaymentType: n,
    saveForReuse: r
}) {
    return e ? n == null ? t.type === `link` || t.isLinkWallet ? `link` : t.type === `card` ? t.isSaved ? `saved_card` : r ? `new_card_saved` : `new_card_unsaved` : `none` : n === `link` ? `link` : `express_wallet` : `none`
}

function y({
    checkoutSessionId: e,
    arm: t,
    selectedPaymentMethod: n,
    expressPaymentType: r,
    saveForReuse: i,
    nativeSaveChoice: a,
    lockedSaveChoice: o,
    isStandaloneCredit: c,
    autoReloadEnabled: l,
    hasPaymentMethod: u = !0,
    newCardSaveSupported: f = !0
}) {
    let p = d(e) && s(t),
        m = c && l,
        h = o ?? i,
        g = v({
            enabled: p && u,
            selectedPaymentMethod: n,
            expressPaymentType: r,
            saveForReuse: h
        });
    return !f && (g === `new_card_saved` || g === `new_card_unsaved`) && (g = `none`), {
        hasOpenAIControlledSaveChoice: p,
        isAutoReloadSavingRequired: m,
        isSaveChoiceChecked: h,
        savedPaymentConsentMode: g,
        isNewCardInSavedPaymentTreatment: g === `new_card_saved` || g === `new_card_unsaved`,
        nativeSaveChoice: a,
        newCardSaveSupported: f
    }
}

function b({
    policy: e,
    saveForReuse: t,
    nativeSaveChoice: n = e.nativeSaveChoice,
    selectedPaymentMethod: r,
    expressPaymentType: i
}) {
    let a;
    e.isNewCardInSavedPaymentTreatment && n !== void 0 && n !== t && (a = g.nativeSaveChoiceError);
    let o = a,
        s;
    return e.isNewCardInSavedPaymentTreatment ? s = t : (!e.newCardSaveSupported && e.hasOpenAIControlledSaveChoice && r.type === `card` && !r.isSaved && !r.isLinkWallet && i == null || e.hasOpenAIControlledSaveChoice && (i === `apple_pay` || i === `google_pay`)) && (s = !1), {
        errorMessage: o,
        saveChoiceError: a,
        savePaymentMethodForReuse: s
    }
}

function x({
    arm: e,
    savedPaymentMethodsEnabled: t,
    savePaymentMethodCheckboxEnabled: n = !0,
    disableSavedPaymentMethods: r = !1,
    requireExplicitDisabledOptions: i = !1
}) {
    if (r) return {
        enableSave: `never`,
        enableRedisplay: `never`
    };
    let a = s(e);
    return t || a ? {
        enableSave: e === `save_default` || !a && n ? `auto` : `never`,
        enableRedisplay: `auto`
    } : i ? {
        enableSave: `never`,
        enableRedisplay: `never`
    } : void 0
}
var S = e((() => {
    i(), _(), f()
}));

function C(e = t.Standard, n, r, i, a) {
    let s = e === t.StandaloneCredit && o(n) !== `unknown`;
    return x({
        arm: a,
        savedPaymentMethodsEnabled: r ?? !1,
        savePaymentMethodCheckboxEnabled: !s || i !== !1,
        disableSavedPaymentMethods: n === `paypal_promo_checkout`,
        requireExplicitDisabledOptions: s
    })
}

function w(e) {
    let t = e?.[D];
    if (t === `true`) return !0;
    if (t === `false`) return !1
}

function T(e) {
    return e?.[O] !== `false`
}

function E({
    customerSessionClientSecret: e,
    checkoutState: n,
    checkoutKind: i = t.Standard,
    checkoutEntryPoint: a,
    disableSavedPaymentMethods: o = !1,
    requiresSavedPaymentMethod: s = !1,
    savedPaymentMethodsEnabled: c,
    savePaymentMethodCheckboxEnabled: l,
    savedPaymentLinkArm: u,
    appearance: d,
    paymentMethodTypes: f,
    customPaymentMethods: p,
    adyenCard: m
}) {
    if (e == null || n == null) return null;
    let h = C(i, a, c, l, u),
        g = n.total.total.minorUnitsAmount,
        _ = r(i, n, s),
        v = i === t.StandaloneCredit ? g > 0 ? `payment` : _ ? `setup` : `subscription` : i === t.RateLimitReset ? `payment` : `subscription`,
        y = {
            mode: v,
            ...v === `setup` ? void 0 : {
                amount: g
            },
            ...v === `payment` && s ? {
                setupFutureUsage: `off_session`
            } : void 0,
            currency: n.currency,
            appearance: d,
            customerSessionClientSecret: e,
            ...h ? {
                savedPaymentMethod: h
            } : void 0
        };
    return m != null && (y.paymentMethodCreation = `manual`, y.savedPaymentMethod = {
        ...h,
        enableSave: `never`
    }), f != null && (y.paymentMethodTypes = f), p != null && (y.customPaymentMethods = p), o && (y.savedPaymentMethod = {
        enableSave: `never`,
        enableRedisplay: `never`
    }), y
}
var D, O, k = e((() => {
    S(), i(), D = `saved_payment_methods_enabled`, O = `save_payment_method_checkbox_enabled`
}));

function A(e) {
    return n(e === t.CodexTeam || e === t.StandaloneCredit ? I : F)
}

function j(e, n) {
    return e === t.StandaloneCredit ? m(n) ?? A(e) : A(e)
}

function M(e) {
    return A(e).get(`is_express_checkout_enabled`, !1)
}

function N() {
    return n(L).get(`is_email_field_hidden`, !1)
}

function P(e, t) {
    return j(e, t).get(`saved_payment_methods_enabled`, !1)
}
var F, I, L, R = e((() => {
    u(), a(), p(), F = `2160290604`, I = `3078631217`, L = `1945869247`
}));

function z(...[e = t.Standard, n, r, i, a]) {
    return C(e, n, e === t.StandaloneCredit && o(n) !== `unknown` ? r : P(e, n), i, a)
}

function B(e) {
    return E({
        ...e,
        savedPaymentMethodsEnabled: e.checkoutKind === t.StandaloneCredit && o(e.checkoutEntryPoint) !== `unknown` ? e.savedPaymentMethodsEnabled : P(e.checkoutKind ?? t.Standard, e.checkoutEntryPoint)
    })
}
var V = e((() => {
    k(), i(), R(), h()
}));
export {
    N as a, w as c, b as d, S as f, R as i, k as l, z as n, M as o, V as r, T as s, B as t, y as u
};
//# sourceMappingURL=411304d4-l2xtfzmx4evg91yf.js.map