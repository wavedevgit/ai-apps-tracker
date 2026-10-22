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
    att as s,
    ftt as c,
    htt as l,
    jP as u,
    jtt as d,
    k8 as f
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Cbn as p,
    Cdt as m,
    Dbn as h,
    Sdt as g,
    exn as _,
    rxn as v,
    wdt as y
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Mm as b,
    jm as x
} from "./8b34dbc2-n194ohawifys3bko.js";
async function S({
    conversation: e,
    image: t,
    onAfterOptimisticThreadUpdate: n,
    shopThisLookPrompt: i
}) {
    let l = await w(t),
        u = r(() => o(e)) ?? {
            kind: s.PrimaryAssistant
        },
        d = r(() => C(e));
    await b({
        callsiteId: `request_completion.shopping.shop_this_look.1`,
        conversation: e,
        eventSource: `mouse`,
        promptMessage: a({
            content_type: c.MultimodalText,
            parts: [l, i]
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
            onAfterOptimisticThreadUpdate: n
        }
    })
}

function C(e) {
    let t = p(e),
        n = u();
    return [_(t, l.THINKING), _(t, l.THINKING_MINI)].find(e => e != null && !n.some(t => t.model_slug === e))
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
    d(), x(), n(), m(), v(), h(), f(), t(), i(), E = `shop_this_look`
}));
export {
    D as n, S as r, w as t
};
//# sourceMappingURL=512153c2-cprfucodx5gpib09.js.map