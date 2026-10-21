import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    M1 as r,
    R1 as i,
    hit as a,
    zot as o
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Vn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    TS as c,
    xS as l
} from "./c2675c8c-h5ybkhdzcoblzzdu.js";
import {
    a as u,
    c as d,
    o as f,
    s as p,
    t as m
} from "./b34a84d1-codhz1zo1kqrwisj.js";
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
        accountId: r()?.id,
        userId: o()?.user?.id
    })
}

function _(e, t, n) {
    p({
        checkoutSessionId: e,
        checkoutPayload: t,
        analytics: n,
        userId: o()?.user?.id
    })
}

function v({
    navigationState: e,
    accountId: t,
    checkoutSessionId: n,
    processorEntity: r
}) {
    return m({
        navigationState: e,
        accountId: t,
        checkoutSessionId: n,
        processorEntity: r,
        userId: o()?.user?.id
    })
}

function y(e) {
    return f({
        checkoutSessionId: e,
        userId: o()?.user?.id
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
    u(), i(), a(), x = n(s()), l()
}));
export {
    b as a, g as i, v as n, S as r, h as t
};
//# sourceMappingURL=89d93a20-dcx6e9tpyvdxid6e.js.map