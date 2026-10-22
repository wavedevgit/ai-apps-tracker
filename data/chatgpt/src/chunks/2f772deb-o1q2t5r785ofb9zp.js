import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aat as t,
    DV as n,
    Iot as r,
    Ml as i,
    Q7 as a,
    Zrt as o,
    bV as s,
    kat as c,
    kl as l
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    aQt as u,
    nQt as d,
    o$t as f,
    oQt as p,
    s$t as m,
    tQt as h
} from "./conversation-small-m08q51xmfe7gjq3d.js";

function g({
    conversationId: e,
    sharedConversationId: t,
    messageId: n,
    category: i,
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
            category: i,
            ref_id: a,
            ...t ? {
                shared_conversation_id: t
            } : {},
            ...i === `business` ? {
                multi_message_mode: s,
                pinned_image: o
            } : {}
        },
        locale: c,
        supported_encodings: [r.V1]
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
    isAuthOptional: r = !0,
    requestContext: i
}) {
    if (t?.aborted) return;
    let {
        chatReq: a,
        turnstileToken: s,
        proofToken: f
    } = await m(void 0);
    if (t?.aborted) return;
    let p = l(a, s, f, null),
        h = d(`${c}/sidebar/conversation`, {
            method: `POST`,
            headers: {
                ...o({
                    isAuthOptional: r
                }),
                "Content-Type": `application/json`,
                ...p,
                ...i?.projectId && n(i.projectId) ? {
                    "chatgpt-project-id": i.projectId,
                    ...i.ownerUserId ? {
                        "chatgpt-conv-owner-id": i.ownerUserId
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
    f(), t(), p(), a(), h(), i(), s()
}));
export {
    _ as a, g as i, x as n, b as r, S as t
};
//# sourceMappingURL=2f772deb-o1q2t5r785ofb9zp.js.map