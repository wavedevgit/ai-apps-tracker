import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A3 as t,
    E3 as n,
    b3 as r,
    r3 as i,
    w3 as a
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Ln as o,
    Rn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Fln as c,
    Iln as l
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    ag as u
} from "./c2675c8c-jg3tpj8mw86wdc0g.js";
import {
    n as d,
    t as f
} from "./f4a8359c-bghyi7u7xpnfpnuu.js";
var p, m = e((() => {
    s(), p = o({
        nativeSaveChoiceError: {
            id: `chatgpt.checkout.saved_payment.reuse.native_choice_error`,
            defaultMessage: `Start a new checkout to review whether this card is saved for future purchases`
        }
    })
}));

function h({
    enabled: e,
    selectedPaymentMethod: t,
    expressPaymentType: n,
    saveForReuse: r
}) {
    return e ? n == null ? t.type === `link` || t.isLinkWallet ? `link` : t.type === `card` ? t.isSaved ? `saved_card` : r ? `new_card_saved` : `new_card_unsaved` : `none` : n === `link` ? `link` : `express_wallet` : `none`
}

function g({
    checkoutSessionId: e,
    arm: n,
    selectedPaymentMethod: r,
    expressPaymentType: i,
    saveForReuse: a,
    nativeSaveChoice: o,
    lockedSaveChoice: s,
    isStandaloneCredit: c,
    autoReloadEnabled: u,
    hasPaymentMethod: d = !0,
    newCardSaveSupported: f = !0
}) {
    let p = l(e) && t(n),
        m = c && u,
        g = s ?? a,
        _ = h({
            enabled: p && d,
            selectedPaymentMethod: r,
            expressPaymentType: i,
            saveForReuse: g
        });
    return !f && (_ === `new_card_saved` || _ === `new_card_unsaved`) && (_ = `none`), {
        hasOpenAIControlledSaveChoice: p,
        isAutoReloadSavingRequired: m,
        isSaveChoiceChecked: g,
        savedPaymentConsentMode: _,
        isNewCardInSavedPaymentTreatment: _ === `new_card_saved` || _ === `new_card_unsaved`,
        nativeSaveChoice: o,
        newCardSaveSupported: f
    }
}

function _({
    policy: e,
    saveForReuse: t,
    nativeSaveChoice: n = e.nativeSaveChoice,
    selectedPaymentMethod: r,
    expressPaymentType: i
}) {
    let a;
    e.isNewCardInSavedPaymentTreatment && n !== void 0 && n !== t && (a = p.nativeSaveChoiceError);
    let o = a,
        s;
    return e.isNewCardInSavedPaymentTreatment ? s = t : (!e.newCardSaveSupported && e.hasOpenAIControlledSaveChoice && r.type === `card` && !r.isSaved && !r.isLinkWallet && i == null || e.hasOpenAIControlledSaveChoice && (i === `apple_pay` || i === `google_pay`)) && (s = !1), {
        errorMessage: o,
        saveChoiceError: a,
        savePaymentMethodForReuse: s
    }
}

function v({
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
var y = e((() => {
    a(), m(), c()
}));

function b(e = i.Standard, t, n, a, o) {
    let s = e === i.StandaloneCredit && r(t) !== `unknown`;
    return v({
        arm: o,
        savedPaymentMethodsEnabled: n ?? !1,
        savePaymentMethodCheckboxEnabled: !s || a !== !1,
        disableSavedPaymentMethods: t === `paypal_promo_checkout`,
        requireExplicitDisabledOptions: s
    })
}

function x(e) {
    let t = e?.[w];
    if (t === `true`) return !0;
    if (t === `false`) return !1
}

function S(e) {
    return e?.[T] !== `false`
}

function C({
    customerSessionClientSecret: e,
    checkoutState: t,
    checkoutKind: r = i.Standard,
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
    if (e == null || t == null) return null;
    let h = b(r, a, c, l, u),
        g = t.total.total.minorUnitsAmount,
        _ = n(r, t, s),
        v = r === i.StandaloneCredit ? g > 0 ? `payment` : _ ? `setup` : `subscription` : r === i.RateLimitReset ? `payment` : `subscription`,
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
    }), f != null && (y.paymentMethodTypes = f), p != null && (y.customPaymentMethods = p), o && (y.savedPaymentMethod = {
        enableSave: `never`,
        enableRedisplay: `never`
    }), y
}
var w, T, E = e((() => {
    y(), a(), w = `saved_payment_methods_enabled`, T = `save_payment_method_checkbox_enabled`
}));

function D(...[e = i.Standard, t, n, a, o]) {
    return b(e, t, e === i.StandaloneCredit && r(t) !== `unknown` ? n : f(e, t), a, o)
}

function O(e) {
    return C({
        ...e,
        savedPaymentMethodsEnabled: e.checkoutKind === i.StandaloneCredit && r(e.checkoutEntryPoint) !== `unknown` ? e.savedPaymentMethodsEnabled : f(e.checkoutKind ?? i.Standard, e.checkoutEntryPoint)
    })
}
var k = e((() => {
    E(), a(), d(), u()
}));
export {
    x as a, _ as c, S as i, y as l, D as n, E as o, k as r, g as s, O as t
};
//# sourceMappingURL=411304d4-ga1uex9l1bs5dkl8.js.map