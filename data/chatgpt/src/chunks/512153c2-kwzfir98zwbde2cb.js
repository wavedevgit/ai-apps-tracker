import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    EP as t,
    Ec as n,
    F5 as r,
    QZ as i,
    RZ as a,
    Tc as o,
    jP as s,
    k8 as c,
    ktt as l,
    ptt as u,
    rtt as d,
    utt as f
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bbn as p,
    Cdt as m,
    Lbn as h,
    Sdt as g,
    obn as _,
    ubn as v,
    xdt as y
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Mm as b,
    jm as x
} from "./8b34dbc2-m4883pai3e8fx8q6.js";
async function S({
    conversation: e,
    image: t,
    onAfterOptimisticThreadUpdate: n,
    shopThisLookPrompt: i
}) {
    let s = await w(t),
        c = r(() => o(e)) ?? {
            kind: d.PrimaryAssistant
        },
        l = r(() => C(e));
    await b({
        callsiteId: `request_completion.shopping.shop_this_look.1`,
        conversation: e,
        eventSource: `mouse`,
        promptMessage: a({
            content_type: f.MultimodalText,
            parts: [s, i]
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
            onAfterOptimisticThreadUpdate: n
        }
    })
}

function C(e) {
    let t = _(e),
        n = s();
    return [h(t, u.THINKING), h(t, u.THINKING_MINI)].find(e => e != null && !n.some(t => t.model_slug === e))
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
    return [...new Set([t, e.thumbnail_url])].map(m)
}
var E, D = e((() => {
    l(), x(), n(), g(), p(), v(), c(), t(), i(), E = `shop_this_look`
}));
export {
    D as n, S as r, w as t
};
//# sourceMappingURL=512153c2-kwzfir98zwbde2cb.js.map