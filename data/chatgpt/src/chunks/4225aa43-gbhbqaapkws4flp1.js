import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c0 as t,
    l0 as n
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    GBn as r,
    HBn as i,
    fpt as a,
    mpt as o
} from "./conversation-small-cy5f8pl0g26s86so.js";
async function s({
    conversationId: e,
    messageId: t,
    onUnavailable: r
}) {
    let o = a(e, t);
    if (o == null) {
        r();
        return
    }
    try {
        if ((await i(e, {
                forceNetworkFetch: !0,
                includeMessageId: t
            })).is_archived) {
            r();
            return
        }
        n(o)
    } catch {
        r()
    }
}
var c = e((() => {
    o(), r(), t()
}));
export {
    s as n, c as t
};
//# sourceMappingURL=4225aa43-gbhbqaapkws4flp1.js.map