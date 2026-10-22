import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as t,
    A8 as n
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    BIn as r,
    LIn as i
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    n as a,
    t as o
} from "./cd7c6193-1anyh7yl6qba20jb.js";
import {
    i as s,
    n as c
} from "./a81eda00-fzi606un66ipjon1.js";
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
//# sourceMappingURL=22f0e71d-hrdzmeuh88fbdvew.js.map