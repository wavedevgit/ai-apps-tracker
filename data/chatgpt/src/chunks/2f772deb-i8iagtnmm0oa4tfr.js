import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Mrt as t,
    Ol as n,
    R7 as r,
    _ot as i,
    dat as a,
    fV as o,
    jl as s,
    uat as c,
    yV as l
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    $Qt as u,
    $Zt as d,
    JZt as f,
    QZt as p,
    YZt as m,
    e$t as h
} from "./conversation-small-cy5f8pl0g26s86so.js";

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
    signal: r,
    isAuthOptional: i = !0,
    requestContext: a
}) {
    if (r?.aborted) return;
    let {
        chatReq: o,
        turnstileToken: s,
        proofToken: u
    } = await h(void 0);
    if (r?.aborted) return;
    let d = n(o, s, u, null),
        f = m(`${c}/sidebar/conversation`, {
            method: `POST`,
            headers: {
                ...t({
                    isAuthOptional: i
                }),
                "Content-Type": `application/json`,
                ...d,
                ...a?.projectId && l(a.projectId) ? {
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
    for await (let e of p(f)) {
        if (r?.aborted) break;
        `data` in e && y(e.data) && (yield e.data)
    }
}
var S = e((() => {
    u(), a(), d(), r(), f(), s(), o()
}));
export {
    _ as a, g as i, x as n, b as r, S as t
};
//# sourceMappingURL=2f772deb-i8iagtnmm0oa4tfr.js.map