import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    frt as t,
    lrt as n,
    prt as r
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Can as i,
    van as a,
    yan as o
} from "./conversation-small-i79e9c315w50am5f.js";

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
    minimumCreditQuantity: r,
    maximumCreditQuantity: i,
    creditQuantityStep: s,
    disableExposureLogging: c = !0,
    purpose: l = `checkout`
}) {
    let u = a(e, n().getContextHandle().user.custom?.plan_type);
    if (u == null) return {
        defaultCreditQuantity: null,
        presetCreditQuantities: null
    };
    let f = t(d[u], {
        disableExposureLog: c
    });
    if (l !== `checkout`) {
        let e = o({
            defaultQuantity: f.get(`auto_reload_default_credit_quantity`, 0),
            presetQuantities: f.get(`auto_reload_preset_credit_quantities`, []),
            minimumCreditQuantity: r,
            maximumCreditQuantity: i,
            creditQuantityStep: s
        });
        if (e.defaultCreditQuantity != null || e.presetCreditQuantities != null) return e
    }
    return o({
        defaultQuantity: f.get(`default_credit_quantity`, 0),
        presetQuantities: f.get(`preset_credit_quantities`, []),
        minimumCreditQuantity: r,
        maximumCreditQuantity: i,
        creditQuantityStep: s
    })
}
var d, f = e((() => {
    i(), r(), l(), d = {
        chatgpt_credit_purchase_amount_personal_plus: `2997627062`,
        chatgpt_credit_purchase_amount_personal_prolite: `1513915455`,
        chatgpt_credit_purchase_amount_personal_pro: `1759265809`,
        chatgpt_credit_purchase_amount_personal_promax: `3096878003`,
        chatgpt_credit_purchase_amount_workspace: `1243009938`
    }
}));
export {
    s as a, l as i, f as n, c as r, u as t
};
//# sourceMappingURL=ba59b5eb-of3w9gatk6ou190s.js.map