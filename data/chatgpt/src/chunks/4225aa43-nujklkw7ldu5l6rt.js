import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    v0 as t,
    y0 as n
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    AVn as r,
    DVn as i,
    cpt as a,
    opt as o
} from "./conversation-small-dwpaie1hln28efxb.js";
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
//# sourceMappingURL=4225aa43-nujklkw7ldu5l6rt.js.map