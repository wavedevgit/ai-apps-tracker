import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Xnt as t,
    Znt as n,
    qnt as r
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Can as i,
    Dan as a,
    San as o
} from "./conversation-small-ikg0dwuw782klweb.js";

function s(e, t) {
    return e == null ? null : e.reduce((e, n) => n.minimum_quantity > t ? e : e == null || n.minimum_quantity > e.minimum_quantity ? n : e, null)
}

function c(e, t) {
    return t.map(t => ({
        minimum_quantity: t,
        percent_off: s(e, t)?.percent_off ?? 0
    }))
}
var l = e((() => {}));

function u({
    accountScope: e,
    minimumCreditQuantity: n,
    maximumCreditQuantity: a,
    creditQuantityStep: s,
    disableExposureLogging: c = !0,
    purpose: l = `checkout`
}) {
    let u = o(e, r().getContextHandle().user.custom?.plan_type);
    if (u == null) return {
        defaultCreditQuantity: null,
        presetCreditQuantities: null
    };
    let f = t(d[u], {
        disableExposureLog: c
    });
    if (l !== `checkout`) {
        let e = i({
            defaultQuantity: f.get(`auto_reload_default_credit_quantity`, 0),
            presetQuantities: f.get(`auto_reload_preset_credit_quantities`, []),
            minimumCreditQuantity: n,
            maximumCreditQuantity: a,
            creditQuantityStep: s
        });
        if (e.defaultCreditQuantity != null || e.presetCreditQuantities != null) return e
    }
    return i({
        defaultQuantity: f.get(`default_credit_quantity`, 0),
        presetQuantities: f.get(`preset_credit_quantities`, []),
        minimumCreditQuantity: n,
        maximumCreditQuantity: a,
        creditQuantityStep: s
    })
}
var d, f = e((() => {
    a(), n(), l(), d = {
        chatgpt_credit_purchase_amount_personal_plus: `2997627062`,
        chatgpt_credit_purchase_amount_personal_prolite: `1513915455`,
        chatgpt_credit_purchase_amount_personal_pro: `1759265809`,
        chatgpt_credit_purchase_amount_workspace: `1243009938`
    }
}));
export {
    s as a, l as i, f as n, c as r, u as t
};
//# sourceMappingURL=ba59b5eb-ck24jpxw2e448ehe.js.map