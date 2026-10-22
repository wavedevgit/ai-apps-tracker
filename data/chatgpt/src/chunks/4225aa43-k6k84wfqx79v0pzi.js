import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    v0 as t,
    y0 as n
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    cpt as r,
    pVn as i,
    uVn as a,
    upt as o
} from "./conversation-small-i79e9c315w50am5f.js";
async function s({
    conversationId: e,
    messageId: t,
    onUnavailable: i
}) {
    let o = r(e, t);
    if (o == null) {
        i();
        return
    }
    try {
        if ((await a(e, {
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
//# sourceMappingURL=4225aa43-k6k84wfqx79v0pzi.js.map