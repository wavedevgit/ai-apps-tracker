import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Lit as r,
    V1 as i,
    q1 as a,
    sst as o
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Vn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AS as c,
    ES as l
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    a as u,
    c as d,
    o as f,
    s as p,
    t as m
} from "./b34a84d1-k7x7r2lnozdhs385.js";
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
    u(), a(), r(), x = n(s()), l()
}));
export {
    b as a, g as i, v as n, S as r, h as t
};
//# sourceMappingURL=89d93a20-g7un4e89rg96by4x.js.map