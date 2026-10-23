import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    DV as t,
    I7 as n,
    Lat as r,
    Ml as i,
    Rat as a,
    Wot as o,
    ait as s,
    bV as c,
    kl as l
} from "./4813494d-mdvd4786a87166cc.js";
import {
    $Qt as u,
    $Zt as d,
    JZt as f,
    QZt as p,
    YZt as m,
    e$t as h
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function g({
    conversationId: e,
    sharedConversationId: t,
    messageId: n,
    category: r,
    refId: i,
    pinnedImage: a,
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
                pinned_image: a
            } : {}
        },
        locale: c,
        supported_encodings: [o.V1]
    }
}
var _ = e((() => {
    d()
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
    signal: n,
    isAuthOptional: i = !0,
    requestContext: a
}) {
    if (n?.aborted) return;
    let {
        chatReq: o,
        turnstileToken: c,
        proofToken: u
    } = await h(void 0);
    if (n?.aborted) return;
    let d = l(o, c, u, null),
        f = m(`${r}/sidebar/conversation`, {
            method: `POST`,
            headers: {
                ...s({
                    isAuthOptional: i
                }),
                "Content-Type": `application/json`,
                ...d,
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
            signal: n
        });
    for await (let e of p(f)) {
        if (n?.aborted) break;
        `data` in e && y(e.data) && (yield e.data)
    }
}
var S = e((() => {
    u(), a(), d(), n(), f(), i(), c()
}));
export {
    _ as a, g as i, x as n, b as r, S as t
};
//# sourceMappingURL=2f772deb-m9fsmajg6xos68k3.js.map