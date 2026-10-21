import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    DV as t,
    Dat as n,
    Ml as r,
    Oat as i,
    Pot as a,
    Q7 as o,
    Yrt as s,
    bV as c,
    kl as l
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    GZt as u,
    JZt as d,
    WZt as f,
    XQt as p,
    YQt as m,
    YZt as h
} from "./conversation-small-ocicxxw6jegn4vux.js";

function g({
    conversationId: e,
    sharedConversationId: t,
    messageId: n,
    category: r,
    refId: i,
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
            ref_id: i,
            ...t ? {
                shared_conversation_id: t
            } : {},
            ...r === `business` ? {
                multi_message_mode: s,
                pinned_image: o
            } : {}
        },
        locale: c,
        supported_encodings: [a.V1]
    }
}
var _ = e((() => {
    h()
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
    signal: r,
    isAuthOptional: i = !0,
    requestContext: a
}) {
    if (r?.aborted) return;
    let {
        chatReq: o,
        turnstileToken: c,
        proofToken: f
    } = await p(void 0);
    if (r?.aborted) return;
    let m = l(o, c, f, null),
        h = u(`${n}/sidebar/conversation`, {
            method: `POST`,
            headers: {
                ...s({
                    isAuthOptional: i
                }),
                "Content-Type": `application/json`,
                ...m,
                ...a?.projectId && t(a.projectId) ? {
                    "chatgpt-project-id": a.projectId,
                    ...a.ownerUserId ? {
                        "chatgpt-conv-owner-id": a.ownerUserId
                    } : {}
                } : {}
            },
            body: e,
            routeName: `/sidebar/conversation`,
            requireDoneEvent: e.category === `shop_image`,
            signal: r
        });
    for await (let e of d(h)) {
        if (r?.aborted) break;
        `data` in e && y(e.data) && (yield e.data)
    }
}
var S = e((() => {
    m(), i(), h(), o(), f(), r(), c()
}));
export {
    _ as a, g as i, x as n, b as r, S as t
};
//# sourceMappingURL=2f772deb-0zerbzr36ln1j8s6.js.map