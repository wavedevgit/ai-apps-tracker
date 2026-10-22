import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    EP as n,
    Ec as r,
    I5 as i,
    Mtt as a,
    QZ as o,
    RZ as s,
    Tc as c,
    gtt as l,
    jP as u,
    ott as d,
    ptt as f
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Cbn as p,
    Dbn as m,
    bdt as h,
    exn as g,
    rxn as _,
    xdt as v,
    ydt as y
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Mm as b,
    Nm as x
} from "./8b34dbc2-bgocf3s6t6l67twq.js";
async function S({
    conversation: e,
    image: t,
    onAfterOptimisticThreadUpdate: n,
    shopThisLookPrompt: r
}) {
    let a = await w(t),
        o = i(() => c(e)) ?? {
            kind: d.PrimaryAssistant
        },
        l = i(() => C(e));
    await x({
        callsiteId: `request_completion.shopping.shop_this_look.1`,
        conversation: e,
        eventSource: `mouse`,
        promptMessage: s({
            content_type: f.MultimodalText,
            parts: [a, r]
        }, {
            is_shop_this_look: !0
        }),
        ...l == null ? {} : {
            requestedModelId: l
        },
        thinkingEffort: `standard`,
        extraStreamParams: {
            forceUseSearch: !0
        },
        completionMetadata: {
            conversationMode: o
        },
        callbacks: {
            onAfterOptimisticThreadUpdate: n
        }
    })
}

function C(e) {
    let t = p(e),
        n = u();
    return [g(t, l.THINKING), g(t, l.THINKING_MINI)].find(e => e != null && !n.some(t => t.model_slug === e))
}
async function w(e) {
    let t;
    for (let n of T(e)) try {
        return await y({
            imageUrl: n,
            uploadSource: E
        })
    } catch (e) {
        t = e
    }
    throw t ?? Error(`shop_this_look_image_import_failed`)
}

function T(e) {
    let t = e.is_proxied_image ? e.url : e.content_url;
    return [...new Set([t, e.thumbnail_url])].map(v)
}
var E, D = e((() => {
    a(), b(), r(), h(), _(), m(), t(), n(), o(), E = `shop_this_look`
}));
export {
    D as n, S as r, w as t
};
//# sourceMappingURL=512153c2-j7gyg3e3rqavq4s1.js.map