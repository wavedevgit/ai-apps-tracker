import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    B8 as n
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    BFn as r,
    LFn as i
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as a,
    t as o
} from "./cd7c6193-m7k5fj0c5qjkrbbc.js";
import {
    i as s,
    n as c
} from "./a81eda00-hs3al4bqbebqodp6.js";
import {
    o as l,
    t as u
} from "./4cf35c7a-drgejtr1y0lhb3xn.js";

function d({
    conversation: e,
    sensitiveValuesHidden: t,
    query: i,
    category: a = `ask_sidebar`,
    extraParams: c,
    clientParams: l
}) {
    if (!e || !i) return;
    let d = s({
        type: `entity`,
        messageId: `mattress-ledger-widget`,
        contentReferenceStartIndex: 0,
        query: i,
        category: a,
        extraParams: c,
        clientParams: l,
        widgetStateOverride: a === `ledger_detail_sidebar` ? {
            [u]: t
        } : void 0
    }, t);
    n(() => {
        o.set(e, null), r(e, d)
    })
}
var f = e((() => {
    c(), a(), l(), i(), t()
}));
export {
    d as n, f as t
};
//# sourceMappingURL=22f0e71d-kbnfec4fah3y3ipk.js.map