import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fot as r,
    M1 as i,
    R1 as a,
    dit as o
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Vn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    TS as c,
    xS as l
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    a as u,
    c as d,
    o as f,
    s as p,
    t as m
} from "./b34a84d1-hokeudztfo88jlth.js";
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
    u(), a(), o(), x = n(s()), l()
}));
export {
    b as a, g as i, v as n, S as r, h as t
};
//# sourceMappingURL=89d93a20-f2hasm6i0tm5xeet.js.map