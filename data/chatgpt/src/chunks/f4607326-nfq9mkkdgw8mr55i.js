import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bft as t,
    ajn as n,
    djn as r,
    zft as i
} from "./conversation-small-cy5f8pl0g26s86so.js";

function a({
    source: e,
    clientThreadId: r,
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
    t({
        clientThreadId: r,
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
    i(), r()
}));
export {
    a as n, o as t
};
//# sourceMappingURL=f4607326-nfq9mkkdgw8mr55i.js.map