import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AQ as t,
    I8 as n,
    L8 as r,
    _R as i,
    _nt as a,
    aF as o,
    aZ as s,
    fF as c,
    h8 as l,
    iZ as u,
    jQ as d,
    o5 as f,
    oZ as p,
    x5 as m,
    xR as h,
    ynt as g
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Gk as _,
    Wk as v,
    _Tt as y,
    bTt as b
} from "./conversation-small-cy5f8pl0g26s86so.js";

function x(e, {
    element: t,
    messageId: n,
    assetPointer: i,
    isCurrentImage: a
}) {
    if (e.config?.sharedConversationId) return () => {};
    let o = t.ownerDocument,
        s = () => {
            let t = C(y(e, n), i),
                r = t == null ? void 0 : h()?.id,
                a = e.serverId$();
            return t != null && r && a ? {
                ...t,
                viewerId: r,
                conversationId: a
            } : void 0
        },
        c = () => {
            let r = m(s);
            r != null && (o.visibilityState !== `visible` || !t.isConnected || !a() || S(e, {
                ...r,
                messageId: n
            }, l))
        };

    function l() {
        u(), o.removeEventListener(`visibilitychange`, c)
    }
    let u = f(s, c, {
        equals: r
    });
    return o.addEventListener(`visibilitychange`, c), c(), l
}

function S(e, {
    viewerId: t,
    ...n
}, r) {
    let i = w(e),
        o = JSON.stringify([t, n.asyncCompletionId == null ? `message` : `async`, n.asyncCompletionId ?? n.messageId]);
    if (i.has(o)) {
        r?.();
        return
    }
    a.logStructuredEvent(`ChatgptImageGenResultViewed`, n) != null && (i.add(o), r?.())
}

function C(e, n) {
    if (e == null || !p(e) || e.metadata?.is_visually_hidden_from_conversation) return;
    let r = e.metadata?.image_gen_delayed != null;
    if (r && !_(e)) return;
    let i = t.getImageAssetPointers(e).find(e => e.asset_pointer === n);
    if (!(i == null || i.metadata?.is_no_auth_placeholder || !s(i))) return {
        asyncCompletionId: e.metadata?.async_completion_id ?? void 0,
        isDelayed: r
    }
}
var w, T = e((() => {
    c(), b(), l(), i(), g(), d(), n(), v(), u(), w = o(() => new Set)
}));
export {
    S as n, x as r, T as t
};
//# sourceMappingURL=62331d8d-ku0hgiy6x3x4g5gy.js.map