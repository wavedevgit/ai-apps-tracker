import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ift as t,
    Kjn as n,
    Lft as r,
    Qjn as i
} from "./conversation-small-fh0oqifngkf5rvl1.js";

function a({
    source: e,
    clientThreadId: t,
    conversationId: i,
    messageId: a,
    assistantMessageId: o,
    turnIndex: s,
    contentReferenceStartIndex: c,
    surfaceLocation: l,
    entityId: u,
    entityCategory: d,
    contentReferenceType: f,
    isGenui: p
}) {
    r({
        clientThreadId: t,
        conversationId: i,
        messageId: a,
        assistantMessageId: o,
        turnIndex: s,
        contentReferenceStartIndex: c ?? void 0,
        surfaceLocation: l,
        entityAffordance: e === `marker` ? n.CHATGPT_ENTITY_AFFORDANCE_MAP_MARKER : n.CHATGPT_ENTITY_AFFORDANCE_MAP_LIST,
        entityId: u,
        entityCategory: d,
        contentReferenceType: f ?? void 0,
        isGenui: p
    })
}
var o = e((() => {
    t(), i()
}));
export {
    a as n, o as t
};
//# sourceMappingURL=f4607326-ottxnkzcfimj1sxc.js.map