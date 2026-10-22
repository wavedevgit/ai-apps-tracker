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
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Abn as p,
    Cdt as m,
    Ebn as h,
    Sdt as g,
    oxn as _,
    rxn as v,
    wdt as y
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    Mm as b,
    Nm as x
} from "./8b34dbc2-peb5nzi8z3rrflnv.js";
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
    let t = h(e),
        n = u();
    return [v(t, l.THINKING), v(t, l.THINKING_MINI)].find(e => e != null && !n.some(t => t.model_slug === e))
}
async function w(e) {
    let t;
    for (let n of T(e)) try {
        return await g({
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
    return [...new Set([t, e.thumbnail_url])].map(y)
}
var E, D = e((() => {
    a(), b(), r(), m(), _(), p(), t(), n(), o(), E = `shop_this_look`
}));
export {
    D as n, S as r, w as t
};
//# sourceMappingURL=512153c2-d0nz96nedfg5gnrq.js.map