import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $nt as t,
    Int as n,
    QJ as r,
    Rnt as i,
    eY as a,
    ert as o
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    $On as s,
    QOn as c,
    ZOn as l,
    ekn as u
} from "./conversation-small-m08q51xmfe7gjq3d.js";

function d({
    interactionType: e,
    kind: t,
    position: r,
    promotionId: i,
    source: a,
    presentationMode: s,
    surface: c,
    analyticsMetadata: l,
    conversationId: u,
    messageId: d
}) {
    if (!Number.isInteger(r) || r < 1 || r > 3) return !1;
    let v = t === `capability` && typeof i == `string` && p.has(i) ? i : void 0;
    try {
        return n.logStructuredEvent(f, {
            interactionType: m(e),
            suggestionKind: h(t),
            position: o(r),
            promotionId: v,
            source: a ?? void 0,
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
    a(), i(), t(), u(), f = `ChatgptConversationFollowupSuggestionInteraction`, p = new Set([`create_editable_writing_artifact`, `search_web_with_primary_citations`, `generate_new_image`]), m = e => e === `shown` ? l.CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_INTERACTION_TYPE_SHOWN : l.CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_INTERACTION_TYPE_CLICKED, h = e => {
        switch (e) {
            case `regular`:
                return c.CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_KIND_REGULAR;
            case `capability`:
                return c.CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_KIND_CAPABILITY;
            case `voice`:
                return c.CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_KIND_VOICE
        }
    }, g = e => e === `content_reference` ? s.CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_SURFACE_CONTENT_REFERENCE : s.CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_SURFACE_ACTION_LIST, _ = (e, t) => {
        if (e != null) return e;
        try {
            return t?.clientThreadId ? r(t.clientThreadId) ?? t.threadId : t?.threadId
        } catch {
            return t?.threadId
        }
    }
}));
export {
    v as n, d as r, f as t
};
//# sourceMappingURL=e7d6bdc9-nr1c6hmd8he4dwme.js.map