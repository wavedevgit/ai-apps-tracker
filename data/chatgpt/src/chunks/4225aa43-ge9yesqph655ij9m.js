import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    v0 as t,
    y0 as n
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    AVn as r,
    DVn as i,
    dpt as a,
    lpt as o
} from "./conversation-small-m08q51xmfe7gjq3d.js";
async function s({
    conversationId: e,
    messageId: t,
    onUnavailable: r
}) {
    let a = o(e, t);
    if (a == null) {
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
        n(a)
    } catch {
        r()
    }
}
var c = e((() => {
    a(), r(), t()
}));
export {
    s as n, c as t
};
//# sourceMappingURL=4225aa43-ge9yesqph655ij9m.js.map