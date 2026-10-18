import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    Cc as n,
    Cet as r,
    K8 as i,
    OZ as a,
    bet as o,
    mZ as s,
    nP as c,
    pet as l,
    sP as u,
    wc as d,
    zet as f
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Cdt as p,
    Dyn as m,
    Sdt as h,
    ibn as g,
    jyn as _,
    sbn as v,
    xdt as y
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Om as b,
    km as x
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
async function S({
    conversation: e,
    image: t,
    onAfterOptimisticThreadUpdate: r,
    shopThisLookPrompt: a
}) {
    let c = await w(t),
        u = i(() => n(e)) ?? {
            kind: l.PrimaryAssistant
        },
        d = i(() => C(e));
    await x({
        callsiteId: `request_completion.shopping.shop_this_look.1`,
        conversation: e,
        eventSource: `mouse`,
        promptMessage: s({
            content_type: o.MultimodalText,
            parts: [c, a]
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
            onAfterOptimisticThreadUpdate: r
        }
    })
}

function C(e) {
    let t = m(e),
        n = u();
    return [g(t, r.THINKING), g(t, r.THINKING_MINI)].find(e => e != null && !n.some(t => t.model_slug === e))
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
    return [...new Set([t, e.thumbnail_url])].map(p)
}
var E, D = e((() => {
    f(), b(), d(), h(), v(), _(), t(), c(), a(), E = `shop_this_look`
}));
export {
    D as n, S as r, w as t
};
//# sourceMappingURL=512153c2-beyt19ecueiod86h.js.map