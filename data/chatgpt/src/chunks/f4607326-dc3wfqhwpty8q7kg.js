import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Lft as t,
    Rft as n,
    hjn as r,
    ljn as i
} from "./conversation-small-cawdu7il3ha6y70c.js";

function a({
    source: e,
    clientThreadId: t,
    conversationId: r,
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
    n({
        clientThreadId: t,
        conversationId: r,
        messageId: a,
        assistantMessageId: o,
        turnIndex: s,
        contentReferenceStartIndex: c ?? void 0,
        surfaceLocation: l,
        entityAffordance: e === `marker` ? i.CHATGPT_ENTITY_AFFORDANCE_MAP_MARKER : i.CHATGPT_ENTITY_AFFORDANCE_MAP_LIST,
        entityId: u,
        entityCategory: d,
        contentReferenceType: f ?? void 0,
        isGenui: p
    })
}
var o = e((() => {
    t(), r()
}));
export {
    a as n, o as t
};
//# sourceMappingURL=f4607326-dc3wfqhwpty8q7kg.js.map