import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Lft as t,
    Rft as n,
    cjn as r,
    mjn as i
} from "./conversation-small-l6tnsr2xfn2d55kk.js";

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
    n({
        clientThreadId: t,
        conversationId: i,
        messageId: a,
        assistantMessageId: o,
        turnIndex: s,
        contentReferenceStartIndex: c ?? void 0,
        surfaceLocation: l,
        entityAffordance: e === `marker` ? r.CHATGPT_ENTITY_AFFORDANCE_MAP_MARKER : r.CHATGPT_ENTITY_AFFORDANCE_MAP_LIST,
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
//# sourceMappingURL=f4607326-fwhobju9ukfgwjwh.js.map