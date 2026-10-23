import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Knt as t,
    QJ as n,
    Wnt as r,
    crt as i,
    eY as a,
    srt as o
} from "./4813494d-mdvd4786a87166cc.js";
import {
    akn as s,
    ikn as c,
    okn as l,
    skn as u
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function d({
    interactionType: e,
    kind: t,
    position: n,
    promotionId: a,
    source: o,
    presentationMode: s,
    surface: c,
    analyticsMetadata: l,
    conversationId: u,
    messageId: d
}) {
    if (!Number.isInteger(n) || n < 1 || n > 3) return !1;
    let v = t === `capability` && typeof a == `string` && p.has(a) ? a : void 0;
    try {
        return r.logStructuredEvent(f, {
            interactionType: m(e),
            suggestionKind: h(t),
            position: i(n),
            promotionId: v,
            source: o ?? void 0,
            presentationMode: s ?? void 0,
            surface: g(c),
            conversationId: _(u, l),
            messageId: d ?? l?.messageId
        }), !0
    } catch {
        return !1
    }
}
var f, p, m, h, g, _, v = e((() => {
    a(), t(), o(), u(), f = `ChatgptConversationFollowupSuggestionInteraction`, p = new Set([`create_editable_writing_artifact`, `search_web_with_primary_citations`, `generate_new_image`]), m = e => e === `shown` ? c.CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_INTERACTION_TYPE_SHOWN : c.CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_INTERACTION_TYPE_CLICKED, h = e => {
        switch (e) {
            case `regular`:
                return s.CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_KIND_REGULAR;
            case `capability`:
                return s.CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_KIND_CAPABILITY;
            case `voice`:
                return s.CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_KIND_VOICE
        }
    }, g = e => e === `content_reference` ? l.CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_SURFACE_CONTENT_REFERENCE : l.CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_SURFACE_ACTION_LIST, _ = (e, t) => {
        if (e != null) return e;
        try {
            return t?.clientThreadId ? n(t.clientThreadId) ?? t.threadId : t?.threadId
        } catch {
            return t?.threadId
        }
    }
}));
export {
    v as n, d as r, f as t
};
//# sourceMappingURL=e7d6bdc9-ogvl0hfof1our0hm.js.map