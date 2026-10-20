import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    FAt as t,
    LAt as n
} from "./conversation-small-ikg0dwuw782klweb.js";

function r(e, t, n) {
    return t === !0 || e !== !1 || n === !0
}

function i(e, n) {
    if (!(typeof e != `string` || e.trim().length === 0)) return n ? t : e
}

function a(e, t) {
    let n = e.extraParams;
    if (e.category !== `ledger_detail_sidebar` || n?.detail_type !== `transaction`) return e;
    let a = n.sensitive_values_hidden === !0;
    if (!r(n.sensitive_values_hidden, t, e.widgetStateOverride?.sensitive_values_hidden)) return e;
    let o = i(n.amount_label, !0),
        s = i(n.account_name, !0),
        c = a && n.amount_value == null && n.amount_label === o && n.account_name === s ? n : {
            ...n,
            sensitive_values_hidden: !0,
            amount_value: null,
            amount_label: o,
            account_name: s
        },
        l = e.widgetStateOverride?.sensitive_values_hidden === !0 ? e.widgetStateOverride : {
            ...e.widgetStateOverride,
            sensitive_values_hidden: !0
        };
    return c === n && l === e.widgetStateOverride ? e : {
        ...e,
        extraParams: c,
        widgetStateOverride: l
    }
}
var o = e((() => {
    n()
}));
export {
    a as i, o as n, r, i as t
};
//# sourceMappingURL=a81eda00-fkt40jznebeq1obz.js.map