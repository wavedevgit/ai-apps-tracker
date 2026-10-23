import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    v0 as t,
    y0 as n
} from "./4813494d-mdvd4786a87166cc.js";
import {
    BVn as r,
    UVn as i,
    cpt as a,
    opt as o
} from "./conversation-small-bcbq46iub1p0ca1t.js";
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
//# sourceMappingURL=4225aa43-esws7ne0w3hj0b0u.js.map