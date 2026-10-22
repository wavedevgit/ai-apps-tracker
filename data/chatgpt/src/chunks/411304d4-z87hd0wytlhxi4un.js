import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A3 as t,
    E3 as n,
    b3 as r,
    hrt as i,
    mrt as a,
    r3 as o,
    w3 as s
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Ln as c,
    Rn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Fln as u,
    Iln as d,
    Kin as f,
    qin as p,
    xan as m
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    tg as h
} from "./c2675c8c-otyjprdiowg2v8hl.js";
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
    arm: n,
    selectedPaymentMethod: r,
    expressPaymentType: i,
    saveForReuse: a,
    nativeSaveChoice: o,
    lockedSaveChoice: s,
    isStandaloneCredit: c,
    autoReloadEnabled: l,
    hasPaymentMethod: u = !0,
    newCardSaveSupported: f = !0
}) {
    let p = d(e) && t(n),
        m = c && l,
        h = s ?? a,
        g = v({
            enabled: p && u,
            selectedPaymentMethod: r,
            expressPaymentType: i,
            saveForReuse: h
        });
    return !f && (g === `new_card_saved` || g === `new_card_unsaved`) && (g = `none`), {
        hasOpenAIControlledSaveChoice: p,
        isAutoReloadSavingRequired: m,
        isSaveChoiceChecked: h,
        savedPaymentConsentMode: g,
        isNewCardInSavedPaymentTreatment: g === `new_card_saved` || g === `new_card_unsaved`,
        nativeSaveChoice: o,
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
    savedPaymentMethodsEnabled: n,
    savePaymentMethodCheckboxEnabled: r = !0,
    disableSavedPaymentMethods: i = !1,
    requireExplicitDisabledOptions: a = !1
}) {
    if (i) return {
        enableSave: `never`,
        enableRedisplay: `never`
    };
    let o = t(e);
    return n || o ? {
        enableSave: e === `save_default` || !o && r ? `auto` : `never`,
        enableRedisplay: `auto`
    } : a ? {
        enableSave: `never`,
        enableRedisplay: `never`
    } : void 0
}
var S = e((() => {
    s(), _(), u()
}));

function C(e = o.Standard, t, n, i, a) {
    let s = e === o.StandaloneCredit && r(t) !== `unknown`;
    return x({
        arm: a,
        savedPaymentMethodsEnabled: n ?? !1,
        savePaymentMethodCheckboxEnabled: !s || i !== !1,
        disableSavedPaymentMethods: t === `paypal_promo_checkout`,
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
    checkoutState: t,
    checkoutKind: r = o.Standard,
    checkoutEntryPoint: i,
    disableSavedPaymentMethods: a = !1,
    requiresSavedPaymentMethod: s = !1,
    savedPaymentMethodsEnabled: c,
    savePaymentMethodCheckboxEnabled: l,
    savedPaymentLinkArm: u,
    appearance: d,
    paymentMethodTypes: f,
    customPaymentMethods: p,
    adyenCard: m
}) {
    if (e == null || t == null) return null;
    let h = C(r, i, c, l, u),
        g = t.total.total.minorUnitsAmount,
        _ = n(r, t, s),
        v = r === o.StandaloneCredit ? g > 0 ? `payment` : _ ? `setup` : `subscription` : r === o.RateLimitReset ? `payment` : `subscription`,
        y = {
            mode: v,
            ...v === `setup` ? void 0 : {
                amount: g
            },
            ...v === `payment` && s ? {
                setupFutureUsage: `off_session`
            } : void 0,
            currency: t.currency,
            appearance: d,
            customerSessionClientSecret: e,
            ...h ? {
                savedPaymentMethod: h
            } : void 0
        };
    return m != null && (y.paymentMethodCreation = `manual`, y.savedPaymentMethod = {
        ...h,
        enableSave: `never`
    }), f != null && (y.paymentMethodTypes = f), p != null && (y.customPaymentMethods = p), a && (y.savedPaymentMethod = {
        enableSave: `never`,
        enableRedisplay: `never`
    }), y
}
var D, O, k = e((() => {
    S(), s(), D = `saved_payment_methods_enabled`, O = `save_payment_method_checkbox_enabled`
}));

function A(e) {
    return a(e === o.CodexTeam || e === o.StandaloneCredit ? I : F)
}

function j(e, t) {
    return e === o.StandaloneCredit ? f(t) ?? A(e) : A(e)
}

function M(e) {
    return A(e).get(`is_express_checkout_enabled`, !1)
}

function N() {
    return a(L).get(`is_email_field_hidden`, !1)
}

function P(e, t) {
    return j(e, t).get(`saved_payment_methods_enabled`, !1)
}
var F, I, L, R = e((() => {
    p(), i(), m(), F = `2160290604`, I = `3078631217`, L = `1945869247`
}));

function z(...[e = o.Standard, t, n, i, a]) {
    return C(e, t, e === o.StandaloneCredit && r(t) !== `unknown` ? n : P(e, t), i, a)
}

function B(e) {
    return E({
        ...e,
        savedPaymentMethodsEnabled: e.checkoutKind === o.StandaloneCredit && r(e.checkoutEntryPoint) !== `unknown` ? e.savedPaymentMethodsEnabled : P(e.checkoutKind ?? o.Standard, e.checkoutEntryPoint)
    })
}
var V = e((() => {
    k(), s(), R(), h()
}));
export {
    N as a, w as c, b as d, S as f, R as i, k as l, z as n, M as o, V as r, T as s, B as t, y as u
};
//# sourceMappingURL=411304d4-z87hd0wytlhxi4un.js.map