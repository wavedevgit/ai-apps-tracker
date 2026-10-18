import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B4 as t,
    F4 as n,
    R4 as r,
    W4 as i,
    v4 as a,
    vnt as o,
    ynt as s
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Ln as c,
    Rn as l
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Sin as u,
    Xin as d,
    aln as f,
    iln as p,
    xin as m
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Sg as h
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
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
    saveForReuse: a,
    nativeSaveChoice: o,
    lockedSaveChoice: s,
    isStandaloneCredit: c,
    autoReloadEnabled: l,
    hasPaymentMethod: u = !0
}) {
    let d = f(e) && i(t),
        p = c && l,
        m = s ?? a,
        h = v({
            enabled: d && u,
            selectedPaymentMethod: n,
            expressPaymentType: r,
            saveForReuse: m
        });
    return {
        hasOpenAIControlledSaveChoice: d,
        isAutoReloadSavingRequired: p,
        isSaveChoiceChecked: m,
        savedPaymentConsentMode: h,
        isNewCardInSavedPaymentTreatment: h === `new_card_saved` || h === `new_card_unsaved`,
        nativeSaveChoice: o
    }
}

function b({
    policy: e,
    saveForReuse: t,
    nativeSaveChoice: n = e.nativeSaveChoice,
    expressPaymentType: r
}) {
    let i;
    e.isNewCardInSavedPaymentTreatment && n !== void 0 && n !== t && (i = g.nativeSaveChoiceError);
    let a = i,
        o;
    return e.isNewCardInSavedPaymentTreatment ? o = t : e.hasOpenAIControlledSaveChoice && (r === `apple_pay` || r === `google_pay`) && (o = !1), {
        errorMessage: a,
        saveChoiceError: i,
        savePaymentMethodForReuse: o
    }
}

function x({
    arm: e,
    savedPaymentMethodsEnabled: t,
    savePaymentMethodCheckboxEnabled: n = !0,
    disableSavedPaymentMethods: r = !1,
    requireExplicitDisabledOptions: a = !1
}) {
    if (r) return {
        enableSave: `never`,
        enableRedisplay: `never`
    };
    let o = i(e);
    return t || o ? {
        enableSave: e === `save_default` || !o && n ? `auto` : `never`,
        enableRedisplay: `auto`
    } : a ? {
        enableSave: `never`,
        enableRedisplay: `never`
    } : void 0
}
var S = e((() => {
    r(), _(), p()
}));

function C(e = a.Standard, t, r, i, o) {
    let s = e === a.StandaloneCredit && n(t) !== `unknown`;
    return x({
        arm: o,
        savedPaymentMethodsEnabled: r ?? !1,
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
    checkoutState: n,
    checkoutKind: r = a.Standard,
    checkoutEntryPoint: i,
    disableSavedPaymentMethods: o = !1,
    requiresSavedPaymentMethod: s = !1,
    savedPaymentMethodsEnabled: c,
    savePaymentMethodCheckboxEnabled: l,
    savedPaymentLinkArm: u,
    appearance: d,
    paymentMethodTypes: f,
    customPaymentMethods: p
}) {
    if (e == null || n == null) return null;
    let m = C(r, i, c, l, u),
        h = n.total.total.minorUnitsAmount,
        g = t(r, n, s),
        _ = r === a.StandaloneCredit ? h > 0 ? `payment` : g ? `setup` : `subscription` : r === a.RateLimitReset ? `payment` : `subscription`,
        v = {
            mode: _,
            ..._ === `setup` ? void 0 : {
                amount: h
            },
            ..._ === `payment` && s ? {
                setupFutureUsage: `off_session`
            } : void 0,
            currency: n.currency,
            appearance: d,
            customerSessionClientSecret: e,
            ...m ? {
                savedPaymentMethod: m
            } : void 0
        };
    return f != null && (v.paymentMethodTypes = f), p != null && (v.customPaymentMethods = p), o && (v.savedPaymentMethod = {
        enableSave: `never`,
        enableRedisplay: `never`
    }), v
}
var D, O, k = e((() => {
    S(), r(), D = `saved_payment_methods_enabled`, O = `save_payment_method_checkbox_enabled`
}));

function A(e) {
    return o(e === a.CodexTeam || e === a.StandaloneCredit ? I : F)
}

function j(e, t) {
    return e === a.StandaloneCredit ? m(t) ?? A(e) : A(e)
}

function M(e) {
    return A(e).get(`is_express_checkout_enabled`, !1)
}

function N() {
    return o(L).get(`is_email_field_hidden`, !1)
}

function P(e, t) {
    return j(e, t).get(`saved_payment_methods_enabled`, !1)
}
var F, I, L, R = e((() => {
    u(), s(), d(), F = `2160290604`, I = `3078631217`, L = `1945869247`
}));

function z(...[e = a.Standard, t, r, i, o]) {
    return C(e, t, e === a.StandaloneCredit && n(t) !== `unknown` ? r : P(e, t), i, o)
}

function B(e) {
    return E({
        ...e,
        savedPaymentMethodsEnabled: e.checkoutKind === a.StandaloneCredit && n(e.checkoutEntryPoint) !== `unknown` ? e.savedPaymentMethodsEnabled : P(e.checkoutKind ?? a.Standard, e.checkoutEntryPoint)
    })
}
var V = e((() => {
    k(), r(), R(), h()
}));
export {
    N as a, w as c, b as d, S as f, R as i, k as l, z as n, M as o, V as r, T as s, B as t, y as u
};
//# sourceMappingURL=411304d4-iliugpn39wth56r4.js.map