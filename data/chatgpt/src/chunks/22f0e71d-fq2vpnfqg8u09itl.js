import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    h5 as t,
    h8 as n
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    QFn as r,
    YFn as i
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    n as a,
    t as o
} from "./cd7c6193-khlq9a3e7sesp7bj.js";
import {
    i as s,
    n as c
} from "./a81eda00-bo1ba2e0lxrld4iq.js";
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
//# sourceMappingURL=22f0e71d-fq2vpnfqg8u09itl.js.map