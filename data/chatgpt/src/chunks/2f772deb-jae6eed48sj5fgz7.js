import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    Aat as n,
    DV as r,
    Lot as i,
    Ml as a,
    Qrt as o,
    bV as s,
    jat as c,
    kl as l
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    aQt as u,
    nQt as d,
    o$t as f,
    oQt as p,
    s$t as m,
    tQt as h
} from "./conversation-small-fh0oqifngkf5rvl1.js";

function g({
    conversationId: e,
    sharedConversationId: t,
    messageId: n,
    category: r,
    refId: a,
    pinnedImage: o,
    multiMessageMode: s = !1,
    locale: c
}) {
    return {
        conversation_id: e,
        message_id: n,
        category: `reference_entity`,
        reference_entity_params: {
            category: r,
            ref_id: a,
            ...t ? {
                shared_conversation_id: t
            } : {},
            ...r === `business` ? {
                multi_message_mode: s,
                pinned_image: o
            } : {}
        },
        locale: c,
        supported_encodings: [i.V1]
    }
}
var _ = e((() => {
    p()
}));

function v(e) {
    return typeof e == `object` && !!e
}

function y(e) {
    return v(e) && (e.type === `__debug` || e.type === `message`) ? v(e.data) : !1
}
async function b({
    requestBody: e,
    signal: t,
    onEvent: n,
    isAuthOptional: r,
    requestContext: i
}) {
    for await (let a of x({
        requestBody: e,
        signal: t,
        isAuthOptional: r,
        requestContext: i
    })) n(a)
}
async function* x({
    requestBody: e,
    signal: t,
    isAuthOptional: i = !0,
    requestContext: a
}) {
    if (t?.aborted) return;
    let {
        chatReq: s,
        turnstileToken: c,
        proofToken: f
    } = await m(void 0);
    if (t?.aborted) return;
    let p = l(s, c, f, null),
        h = d(`${n}/sidebar/conversation`, {
            method: `POST`,
            headers: {
                ...o({
                    isAuthOptional: i
                }),
                "Content-Type": `application/json`,
                ...p,
                ...a?.projectId && r(a.projectId) ? {
                    "chatgpt-project-id": a.projectId,
                    ...a.ownerUserId ? {
                        "chatgpt-conv-owner-id": a.ownerUserId
                    } : {}
                } : {}
            },
            body: e,
            routeName: `/sidebar/conversation`,
            requireDoneEvent: e.category === `shop_image`,
            signal: t
        });
    for await (let e of u(h)) {
        if (t?.aborted) break;
        `data` in e && y(e.data) && (yield e.data)
    }
}
var S = e((() => {
    f(), c(), p(), t(), h(), a(), s()
}));
export {
    _ as a, g as i, x as n, b as r, S as t
};
//# sourceMappingURL=2f772deb-jae6eed48sj5fgz7.js.map