import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BZ as t,
    Bet as n,
    Cc as r,
    TP as i,
    Xet as a,
    bP as o,
    eQ as s,
    f8 as c,
    ftt as l,
    qet as u,
    v5 as d,
    wc as f
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Byn as p,
    Cdt as m,
    Tdt as h,
    Wyn as g,
    _bn as _,
    bbn as v,
    wdt as y
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Om as b,
    km as x
} from "./8b34dbc2-j8rcexxiltkm8ucr.js";
async function S({
    conversation: e,
    image: i,
    onAfterOptimisticThreadUpdate: a,
    shopThisLookPrompt: o
}) {
    let s = await w(i),
        c = d(() => r(e)) ?? {
            kind: n.PrimaryAssistant
        },
        l = d(() => C(e));
    await x({
        callsiteId: `request_completion.shopping.shop_this_look.1`,
        conversation: e,
        eventSource: `mouse`,
        promptMessage: t({
            content_type: u.MultimodalText,
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
            onAfterOptimisticThreadUpdate: a
        }
    })
}

function C(e) {
    let t = p(e),
        n = i();
    return [_(t, a.THINKING), _(t, a.THINKING_MINI)].find(e => e != null && !n.some(t => t.model_slug === e))
}
async function w(e) {
    let t;
    for (let n of T(e)) try {
        return await m({
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
    l(), b(), f(), y(), v(), g(), c(), o(), s(), E = `shop_this_look`
}));
export {
    D as n, S as r, w as t
};
//# sourceMappingURL=512153c2-flbq6tkrlt45474g.js.map