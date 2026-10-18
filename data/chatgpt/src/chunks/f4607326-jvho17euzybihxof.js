import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $An as t,
    Fft as n,
    Ift as r,
    qAn as i
} from "./conversation-small-fym1zmu9zimymmm1.js";

function a({
    source: e,
    clientThreadId: t,
    conversationId: n,
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
        conversationId: n,
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
    n(), t()
}));
export {
    a as n, o as t
};
//# sourceMappingURL=f4607326-jvho17euzybihxof.js.map