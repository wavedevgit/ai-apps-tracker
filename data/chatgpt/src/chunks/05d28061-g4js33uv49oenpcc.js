import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $Y as t,
    ZY as n
} from "./4813494d-lxa3wniynbx9ka2a.js";

function r(e) {
    return e.content.content_type === `multimodal_text` && e.content.parts.some(e => typeof e != `string` && `content_type` in e && e.content_type === `image_asset_pointer`)
}

function i(e) {
    return e.some((t, n) => {
        let i = t.recipient;
        return t.author.role !== `assistant` || typeof i != `string` ? !1 : e.slice(n + 1).some(e => e.author.role === `tool` && e.author.name === i && r(e))
    })
}

function a(e) {
    let t = n.createRootNode(`y-root`),
        r = [t],
        i = t.id;
    for (let t of e) {
        let e = n.createNode(t, i);
        r.push(e), i = e.id
    }
    let a = r.reduce((e, t) => (e[t.id] = {
        id: t.id,
        parent: t.parentId,
        message: t.message,
        children: []
    }, e), {});
    for (let e of r) e.parentId && a[e.parentId]?.children.push(e.id);
    return {
        allConversationMessages: r,
        threadResponse: {
            moderation_results: [],
            conversation_id: ``,
            current_node: i,
            title: null,
            mapping: a
        }
    }
}

function o(e) {
    return Array.isArray(e) && e.length > 0 && e.every(e => e?.kind === `message_slice` || e?.kind === `deep_research`)
}

function s(e) {
    return e ? e.filter(e => e.kind === `message_slice` || e.kind === `deep_research` || e.kind === `media_generation`).flatMap(e => e.messages ?? []) : []
}

function c(e) {
    return e?.length === 1 && e[0]?.kind === `media_generation`
}

function l(e) {
    let t = e?.[0];
    return c(e) && Array.isArray(t?.messages) && i(t.messages)
}

function u(e) {
    if (!o(e) && !l(e)) return null;
    let t = s(e);
    return t.length === 0 ? null : a(t)
}
var d = e((() => {
    t()
}));
export {
    d as a, c as i, u as n, l as r, a as t
};
//# sourceMappingURL=05d28061-g4js33uv49oenpcc.js.map