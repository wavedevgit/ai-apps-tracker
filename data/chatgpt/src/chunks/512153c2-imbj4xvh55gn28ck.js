import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BZ as t,
    TP as n,
    Tc as r,
    Wet as i,
    Zet as a,
    bP as o,
    eQ as s,
    ett as c,
    gtt as l,
    h8 as u,
    wc as d,
    x5 as f
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Ddt as p,
    Edt as m,
    Hyn as h,
    Kyn as g,
    Sbn as _,
    Tdt as v,
    ybn as y
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Am as b,
    km as x
} from "./8b34dbc2-k1zgxrtsww83602u.js";
async function S({
    conversation: e,
    image: n,
    onAfterOptimisticThreadUpdate: r,
    shopThisLookPrompt: o
}) {
    let s = await w(n),
        c = f(() => d(e)) ?? {
            kind: i.PrimaryAssistant
        },
        l = f(() => C(e));
    await b({
        callsiteId: `request_completion.shopping.shop_this_look.1`,
        conversation: e,
        eventSource: `mouse`,
        promptMessage: t({
            content_type: a.MultimodalText,
            parts: [s, o]
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
            conversationMode: c
        },
        callbacks: {
            onAfterOptimisticThreadUpdate: r
        }
    })
}

function C(e) {
    let t = h(e),
        r = n();
    return [y(t, c.THINKING), y(t, c.THINKING_MINI)].find(e => e != null && !r.some(t => t.model_slug === e))
}
async function w(e) {
    let t;
    for (let n of T(e)) try {
        return await v({
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
    return [...new Set([t, e.thumbnail_url])].map(p)
}
var E, D = e((() => {
    l(), x(), r(), m(), _(), g(), u(), o(), s(), E = `shop_this_look`
}));
export {
    D as n, S as r, w as t
};
//# sourceMappingURL=512153c2-imbj4xvh55gn28ck.js.map