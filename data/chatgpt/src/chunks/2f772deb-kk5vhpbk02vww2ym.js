import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bat as t,
    Nit as n,
    Pit as r,
    eV as i,
    fl as a,
    l7 as o,
    ll as s,
    qB as c,
    trt as l
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    HZt as u,
    JQt as d,
    KZt as f,
    UZt as p,
    qQt as m,
    qZt as h
} from "./conversation-small-fym1zmu9zimymmm1.js";

function g({
    conversationId: e,
    sharedConversationId: n,
    messageId: r,
    category: i,
    refId: a,
    pinnedImage: o,
    multiMessageMode: s = !1,
    locale: c
}) {
    return {
        conversation_id: e,
        message_id: r,
        category: `reference_entity`,
        reference_entity_params: {
            category: i,
            ref_id: a,
            ...n ? {
                shared_conversation_id: n
            } : {},
            ...i === `business` ? {
                multi_message_mode: s,
                pinned_image: o
            } : {}
        },
        locale: c,
        supported_encodings: [t.V1]
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
    signal: t,
    isAuthOptional: r = !0,
    requestContext: a
}) {
    if (t?.aborted) return;
    let {
        chatReq: o,
        turnstileToken: c,
        proofToken: u
    } = await d(void 0);
    if (t?.aborted) return;
    let m = s(o, c, u, null),
        h = p(`${n}/sidebar/conversation`, {
            method: `POST`,
            headers: {
                ...l({
                    isAuthOptional: r
                }),
                "Content-Type": `application/json`,
                ...m,
                ...a?.projectId && i(a.projectId) ? {
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
    for await (let e of f(h)) {
        if (t?.aborted) break;
        `data` in e && y(e.data) && (yield e.data)
    }
}
var S = e((() => {
    m(), r(), h(), o(), u(), a(), c()
}));
export {
    _ as a, g as i, x as n, b as r, S as t
};
//# sourceMappingURL=2f772deb-kk5vhpbk02vww2ym.js.map