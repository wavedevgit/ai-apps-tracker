import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as t,
    A8 as n
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    LIn as r,
    PIn as i
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    n as a,
    t as o
} from "./cd7c6193-nvms69cl7ub6przd.js";
import {
    i as s,
    n as c
} from "./a81eda00-jg9d12qogl7aypmz.js";
import {
    o as l,
    t as u
} from "./4cf35c7a-fuufw34ubkxvq703.js";

function d({
    conversation: e,
    sensitiveValuesHidden: n,
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
            [u]: n
        } : void 0
    }, n);
    t(() => {
        o.set(e, null), r(e, d)
    })
}
var f = e((() => {
    c(), a(), l(), i(), n()
}));
export {
    d as n, f as t
};
//# sourceMappingURL=22f0e71d-mdiceef2eqfjdgoa.js.map