import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    v0 as t,
    y0 as n
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    cVn as r,
    cpt as i,
    dVn as a,
    upt as o
} from "./conversation-small-ocicxxw6jegn4vux.js";
async function s({
    conversationId: e,
    messageId: t,
    onUnavailable: a
}) {
    let o = i(e, t);
    if (o == null) {
        a();
        return
    }
    try {
        if ((await r(e, {
                forceNetworkFetch: !0,
                includeMessageId: t
            })).is_archived) {
            a();
            return
        }
        n(o)
    } catch {
        a()
    }
}
var c = e((() => {
    o(), a(), t()
}));
export {
    s as n, c as t
};
//# sourceMappingURL=4225aa43-jrxc5tc9ytn6g7zb.js.map