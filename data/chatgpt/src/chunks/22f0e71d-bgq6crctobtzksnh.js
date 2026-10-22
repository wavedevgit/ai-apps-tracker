import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    k5 as t,
    k8 as n
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    _In as r,
    bIn as i
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    n as a,
    t as o
} from "./cd7c6193-ifdffltrrj57td9v.js";
import {
    i as s,
    n as c
} from "./a81eda00-ctj2wi69wjutdfx3.js";
import {
    o as l,
    t as u
} from "./4cf35c7a-fuufw34ubkxvq703.js";

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
//# sourceMappingURL=22f0e71d-bgq6crctobtzksnh.js.map