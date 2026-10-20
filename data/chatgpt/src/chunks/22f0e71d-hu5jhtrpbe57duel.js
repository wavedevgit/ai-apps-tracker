import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    m5 as t,
    m8 as n
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    eIn as r,
    rIn as i
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    n as a,
    t as o
} from "./cd7c6193-lvaijx6wbwdx3noi.js";
import {
    i as s,
    n as c
} from "./a81eda00-ot6y8uo50czwe2c7.js";
import {
    o as l,
    t as u
} from "./4cf35c7a-agd3kz164bjzljfz.js";

function d({
    conversation: e,
    sensitiveValuesHidden: n,
    query: r,
    category: a = `ask_sidebar`,
    extraParams: c,
    clientParams: l
}) {
    if (!e || !r) return;
    let d = s({
        type: `entity`,
        messageId: `mattress-ledger-widget`,
        contentReferenceStartIndex: 0,
        query: r,
        category: a,
        extraParams: c,
        clientParams: l,
        widgetStateOverride: a === `ledger_detail_sidebar` ? {
            [u]: n
        } : void 0
    }, n);
    t(() => {
        o.set(e, null), i(e, d)
    })
}
var f = e((() => {
    c(), a(), l(), r(), n()
}));
export {
    d as n, f as t
};
//# sourceMappingURL=22f0e71d-hu5jhtrpbe57duel.js.map