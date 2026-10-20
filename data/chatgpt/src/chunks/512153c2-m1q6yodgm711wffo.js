import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BZ as t,
    Cc as n,
    Het as r,
    Qet as i,
    TP as a,
    Yet as o,
    b5 as s,
    bP as c,
    eQ as l,
    m8 as u,
    mtt as d,
    wc as f
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Cdt as p,
    Gyn as m,
    Tdt as h,
    Vyn as g,
    vbn as _,
    wdt as v,
    xbn as y
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Om as b,
    km as x
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
async function S({
    conversation: e,
    image: i,
    onAfterOptimisticThreadUpdate: a,
    shopThisLookPrompt: c
}) {
    let l = await w(i),
        u = s(() => n(e)) ?? {
            kind: r.PrimaryAssistant
        },
        d = s(() => C(e));
    await x({
        callsiteId: `request_completion.shopping.shop_this_look.1`,
        conversation: e,
        eventSource: `mouse`,
        promptMessage: t({
            content_type: o.MultimodalText,
            parts: [l, c]
        }, {
            is_shop_this_look: !0
        }),
        ...d == null ? {} : {
            requestedModelId: d
        },
        thinkingEffort: `standard`,
        extraStreamParams: {
            forceUseSearch: !0
        },
        completionMetadata: {
            conversationMode: u
        },
        callbacks: {
            onAfterOptimisticThreadUpdate: a
        }
    })
}

function C(e) {
    let t = g(e),
        n = a();
    return [_(t, i.THINKING), _(t, i.THINKING_MINI)].find(e => e != null && !n.some(t => t.model_slug === e))
}
async function w(e) {
    let t;
    for (let n of T(e)) try {
        return await p({
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
    return [...new Set([t, e.thumbnail_url])].map(h)
}
var E, D = e((() => {
    d(), b(), f(), v(), y(), m(), u(), c(), l(), E = `shop_this_look`
}));
export {
    D as n, S as r, w as t
};
//# sourceMappingURL=512153c2-m1q6yodgm711wffo.js.map