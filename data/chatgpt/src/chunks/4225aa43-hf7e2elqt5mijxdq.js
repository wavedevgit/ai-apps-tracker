import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F1 as t,
    I1 as n
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    ABn as r,
    NBn as i,
    cpt as a,
    upt as o
} from "./conversation-small-fym1zmu9zimymmm1.js";
async function s({
    conversationId: e,
    messageId: t,
    onUnavailable: i
}) {
    let o = a(e, t);
    if (o == null) {
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
        n(o)
    } catch {
        i()
    }
}
var c = e((() => {
    o(), i(), t()
}));
export {
    s as n, c as t
};
//# sourceMappingURL=4225aa43-hf7e2elqt5mijxdq.js.map