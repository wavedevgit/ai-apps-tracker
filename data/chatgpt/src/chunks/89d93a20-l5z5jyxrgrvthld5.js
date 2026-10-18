import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Nrt as r,
    i1 as i,
    rot as a,
    u1 as o
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Vn as s
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $S as c,
    YS as l
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    a as u,
    c as d,
    o as f,
    s as p,
    t as m
} from "./b34a84d1-foowwmd6q7vc368z.js";
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
        userId: a()?.user?.id
    })
}

function _(e, t, n) {
    p({
        checkoutSessionId: e,
        checkoutPayload: t,
        analytics: n,
        userId: a()?.user?.id
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
        userId: a()?.user?.id
    })
}

function y(e) {
    return f({
        checkoutSessionId: e,
        userId: a()?.user?.id
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
    u(), o(), r(), x = n(s()), l()
}));
export {
    b as a, g as i, v as n, S as r, h as t
};
//# sourceMappingURL=89d93a20-l5z5jyxrgrvthld5.js.map