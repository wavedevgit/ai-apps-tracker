import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jnt as t,
    W4 as n,
    _3 as r,
    c3 as i,
    d3 as a,
    p3 as o,
    qnt as s
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Rn as c,
    zn as l
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Fin as u,
    Iin as d,
    uan as f,
    vln as p,
    yln as m
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    wg as h
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
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
    expressPaymentType: i,
    saveForReuse: a,
    nativeSaveChoice: o,
    lockedSaveChoice: s,
    isStandaloneCredit: c,
    autoReloadEnabled: l,
    hasPaymentMethod: u = !0,
    newCardSaveSupported: d = !0
}) {
    let f = m(e) && r(t),
        p = c && l,
        h = s ?? a,
        g = v({
            enabled: f && u,
            selectedPaymentMethod: n,
            expressPaymentType: i,
            saveForReuse: h
        });
    return !d && (g === `new_card_saved` || g === `new_card_unsaved`) && (g = `none`), {
        hasOpenAIControlledSaveChoice: f,
        isAutoReloadSavingRequired: p,
        isSaveChoiceChecked: h,
        savedPaymentConsentMode: g,
        isNewCardInSavedPaymentTreatment: g === `new_card_saved` || g === `new_card_unsaved`,
        nativeSaveChoice: o,
        newCardSaveSupported: d
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
    disableSavedPaymentMethods: i = !1,
    requireExplicitDisabledOptions: a = !1
}) {
    if (i) return {
        enableSave: `never`,
        enableRedisplay: `never`
    };
    let o = r(e);
    return t || o ? {
        enableSave: e === `save_default` || !o && n ? `auto` : `never`,
        enableRedisplay: `auto`
    } : a ? {
        enableSave: `never`,
        enableRedisplay: `never`
    } : void 0
}
var S = e((() => {
    a(), _(), p()
}));

function C(e = n.Standard, t, r, a, o) {
    let s = e === n.StandaloneCredit && i(t) !== `unknown`;
    return x({
        arm: o,
        savedPaymentMethodsEnabled: r ?? !1,
        savePaymentMethodCheckboxEnabled: !s || a !== !1,
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
    checkoutKind: r = n.Standard,
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
        _ = o(r, t, s),
        v = r === n.StandaloneCredit ? g > 0 ? `payment` : _ ? `setup` : `subscription` : r === n.RateLimitReset ? `payment` : `subscription`,
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
    S(), a(), D = `saved_payment_methods_enabled`, O = `save_payment_method_checkbox_enabled`
}));

function A(e) {
    return s(e === n.CodexTeam || e === n.StandaloneCredit ? I : F)
}

function j(e, t) {
    return e === n.StandaloneCredit ? u(t) ?? A(e) : A(e)
}

function M(e) {
    return A(e).get(`is_express_checkout_enabled`, !1)
}

function N() {
    return s(L).get(`is_email_field_hidden`, !1)
}

function P(e, t) {
    return j(e, t).get(`saved_payment_methods_enabled`, !1)
}
var F, I, L, R = e((() => {
    d(), t(), f(), F = `2160290604`, I = `3078631217`, L = `1945869247`
}));

function z(...[e = n.Standard, t, r, a, o]) {
    return C(e, t, e === n.StandaloneCredit && i(t) !== `unknown` ? r : P(e, t), a, o)
}

function B(e) {
    return E({
        ...e,
        savedPaymentMethodsEnabled: e.checkoutKind === n.StandaloneCredit && i(e.checkoutEntryPoint) !== `unknown` ? e.savedPaymentMethodsEnabled : P(e.checkoutKind ?? n.Standard, e.checkoutEntryPoint)
    })
}
var V = e((() => {
    k(), a(), R(), h()
}));
export {
    N as a, w as c, b as d, S as f, R as i, k as l, z as n, M as o, V as r, T as s, B as t, y as u
};
//# sourceMappingURL=411304d4-sygo5ixhxgtoaway.js.map