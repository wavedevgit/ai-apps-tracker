import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    frt as t,
    grt as n,
    hrt as r
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Lan as i,
    Man as a,
    Nan as o
} from "./conversation-small-m7dgsxtvvivh3e6t.js";

function s(e) {
    return e?.one_time.tiers.some(e => e.percent_off > 0) === !0 || e?.auto_reload?.tiers.some(e => e.percent_off > 0) === !0
}

function c(e, t) {
    return e == null ? null : e.reduce((e, n) => n.minimum_quantity > t ? e : e == null || n.minimum_quantity > e.minimum_quantity ? n : e, null)
}

function l(e, t) {
    return t.map(t => ({
        minimum_quantity: t,
        percent_off: c(e, t)?.percent_off ?? 0
    }))
}
var u = e((() => {}));

function d({
    accountScope: e,
    minimumCreditQuantity: n,
    maximumCreditQuantity: i,
    creditQuantityStep: s,
    disableExposureLogging: c = !0,
    purpose: l = `checkout`
}) {
    let u = a(e, t().getContextHandle().user.custom?.plan_type);
    if (u == null) return {
        defaultCreditQuantity: null,
        presetCreditQuantities: null
    };
    let d = r(f[u], {
        disableExposureLog: c
    });
    if (l !== `checkout`) {
        let e = o({
            defaultQuantity: d.get(`auto_reload_default_credit_quantity`, 0),
            presetQuantities: d.get(`auto_reload_preset_credit_quantities`, []),
            minimumCreditQuantity: n,
            maximumCreditQuantity: i,
            creditQuantityStep: s
        });
        if (e.defaultCreditQuantity != null || e.presetCreditQuantities != null) return e
    }
    return o({
        defaultQuantity: d.get(`default_credit_quantity`, 0),
        presetQuantities: d.get(`preset_credit_quantities`, []),
        minimumCreditQuantity: n,
        maximumCreditQuantity: i,
        creditQuantityStep: s
    })
}
var f, p = e((() => {
    i(), n(), u(), f = {
        chatgpt_credit_purchase_amount_personal_plus: `2997627062`,
        chatgpt_credit_purchase_amount_personal_prolite: `1513915455`,
        chatgpt_credit_purchase_amount_personal_pro: `1759265809`,
        chatgpt_credit_purchase_amount_personal_promax: `3096878003`,
        chatgpt_credit_purchase_amount_workspace: `1243009938`
    }
}));
export {
    u as a, s as i, p as n, c as o, l as r, d as t
};
//# sourceMappingURL=ba59b5eb-du0rp5g5y99u6oa9.js.map