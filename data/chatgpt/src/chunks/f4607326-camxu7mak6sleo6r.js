import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ejn as t,
    Fft as n,
    Ift as r,
    Mjn as i
} from "./conversation-small-i79e9c315w50am5f.js";

function a({
    source: e,
    clientThreadId: n,
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
        clientThreadId: n,
        conversationId: i,
        messageId: a,
        assistantMessageId: o,
        turnIndex: s,
        contentReferenceStartIndex: c ?? void 0,
        surfaceLocation: l,
        entityAffordance: e === `marker` ? t.CHATGPT_ENTITY_AFFORDANCE_MAP_MARKER : t.CHATGPT_ENTITY_AFFORDANCE_MAP_LIST,
        entityId: u,
        entityCategory: d,
        contentReferenceType: f ?? void 0,
        isGenui: p
    })
}
var o = e((() => {
    n(), i()
}));
export {
    a as n, o as t
};
//# sourceMappingURL=f4607326-camxu7mak6sleo6r.js.map