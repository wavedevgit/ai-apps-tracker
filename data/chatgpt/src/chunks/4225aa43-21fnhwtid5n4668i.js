import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    v0 as t,
    y0 as n
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    AVn as r,
    NVn as i,
    dpt as a,
    lpt as o
} from "./conversation-small-fh0oqifngkf5rvl1.js";
async function s({
    conversationId: e,
    messageId: t,
    onUnavailable: i
}) {
    let a = o(e, t);
    if (a == null) {
        i();
        return
    }
    try {
        if ((await r(e, {
                forceNetworkFetch: !0,
                includeMessageId: t
            })).is_archived) {
            i();
            return
        }
        n(a)
    } catch {
        i()
    }
}
var c = e((() => {
    a(), i(), t()
}));
export {
    s as n, c as t
};
//# sourceMappingURL=4225aa43-21fnhwtid5n4668i.js.map