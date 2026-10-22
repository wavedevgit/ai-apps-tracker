import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ot as r,
    V1 as i,
    kit as a,
    q1 as o
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Vn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    CS as c,
    yS as l
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    a as u,
    c as d,
    o as f,
    s as p,
    t as m
} from "./b34a84d1-hdl54mod3k64hc2y.js";
var h = t({
    getCreditCheckoutAnalyticsForPage: () => v,
    readCreditCheckoutDocumentHandoff: () => y,
    rememberCreditCheckoutDocumentHandoff: () => _,
    rememberCreditCheckoutEventContext: () => g,
    useCreditRecoveryPayload: () => b
});

function g(e, t) {
    d({
        context: e,
        analytics: t,
        accountId: i()?.id,
        userId: r()?.user?.id
    })
}

function _(e, t, n) {
    p({
        checkoutSessionId: e,
        checkoutPayload: t,
        analytics: n,
        userId: r()?.user?.id
    })
}

function v({
    navigationState: e,
    accountId: t,
    checkoutSessionId: n,
    processorEntity: i
}) {
    return m({
        navigationState: e,
        accountId: t,
        checkoutSessionId: n,
        processorEntity: i,
        userId: r()?.user?.id
    })
}

function y(e) {
    return f({
        checkoutSessionId: e,
        userId: r()?.user?.id
    })?.checkoutPayload
}

function b(e, t) {
    let [n, r] = (0, x.useState)(null);
    return c(() => {
        r({
            checkoutSessionId: e,
            checkoutPayload: y(e)
        })
    }, [e]), t ?? (n?.checkoutSessionId === e ? n.checkoutPayload : void 0)
}
var x, S = e((() => {
    u(), o(), a(), x = n(s()), l()
}));
export {
    b as a, g as i, v as n, S as r, h as t
};
//# sourceMappingURL=89d93a20-k8ulunmd8dwnz4pq.js.map