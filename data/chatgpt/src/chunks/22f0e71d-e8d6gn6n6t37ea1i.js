import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    p5 as n
} from "./4813494d-mdvd4786a87166cc.js";
import {
    XIn as r,
    qIn as i
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    n as a,
    t as o
} from "./cd7c6193-c38khf2nn57jm4p7.js";
import {
    i as s,
    n as c
} from "./a81eda00-m33icidx9uw2ccp4.js";
import {
    o as l,
    t as u
} from "./4cf35c7a-fuufw34ubkxvq703.js";

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
//# sourceMappingURL=22f0e71d-e8d6gn6n6t37ea1i.js.map