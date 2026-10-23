import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    EP as n,
    Ec as r,
    QZ as i,
    RZ as a,
    Tc as o,
    Wet as s,
    Zet as c,
    ett as l,
    gtt as u,
    jP as d,
    y5 as f
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Dbn as p,
    bdt as m,
    ixn as h,
    jbn as g,
    sxn as _,
    xdt as v,
    ydt as y
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Mm as b,
    Nm as x
} from "./8b34dbc2-lmwubajnld74ksfm.js";
async function S({
    conversation: e,
    image: t,
    onAfterOptimisticThreadUpdate: n,
    shopThisLookPrompt: r
}) {
    let i = await w(t),
        l = f(() => o(e)) ?? {
            kind: s.PrimaryAssistant
        },
        u = f(() => C(e));
    await x({
        callsiteId: `request_completion.shopping.shop_this_look.1`,
        conversation: e,
        eventSource: `mouse`,
        promptMessage: a({
            content_type: c.MultimodalText,
            parts: [i, r]
        }, {
            is_shop_this_look: !0
        }),
        ...u == null ? {} : {
            requestedModelId: u
        },
        thinkingEffort: `standard`,
        extraStreamParams: {
            forceUseSearch: !0
        },
        completionMetadata: {
            conversationMode: l
        },
        callbacks: {
            onAfterOptimisticThreadUpdate: n
        }
    })
}

function C(e) {
    let t = p(e),
        n = d();
    return [h(t, l.THINKING), h(t, l.THINKING_MINI)].find(e => e != null && !n.some(t => t.model_slug === e))
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
    u(), b(), r(), m(), _(), g(), t(), n(), i(), E = `shop_this_look`
}));
export {
    D as n, S as r, w as t
};
//# sourceMappingURL=512153c2-corx5n0x1len7u4o.js.map