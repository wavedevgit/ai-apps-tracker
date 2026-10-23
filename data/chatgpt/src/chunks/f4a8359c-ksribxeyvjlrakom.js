import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Crt as t,
    Srt as n,
    r3 as r
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Aan as i,
    Can as a,
    Jin as o,
    Lan as s,
    Yin as c
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function l(e) {
    return n(e === r.CodexTeam || e === r.StandaloneCredit ? g : h)
}

function u(e, t) {
    return e === r.StandaloneCredit ? o(t) ?? l(e) : l(e)
}

function d(e) {
    return l(e).get(`is_express_checkout_enabled`, !1)
}

function f({
    disableExposureLogging: e
}) {
    return n(g, {
        disableExposureLog: e
    }).get(i, !1)
}

function p() {
    return n(_).get(`is_email_field_hidden`, !1)
}

function m(e, t) {
    return u(e, t).get(`saved_payment_methods_enabled`, !1)
}
var h, g, _, v = e((() => {
    s(), c(), t(), a(), h = `2160290604`, g = `3078631217`, _ = `1945869247`
}));
export {
    f as a, d as i, v as n, p as r, m as t
};
//# sourceMappingURL=f4a8359c-ksribxeyvjlrakom.js.map