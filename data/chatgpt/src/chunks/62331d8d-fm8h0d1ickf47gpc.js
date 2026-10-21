import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    L8 as t,
    MQ as n,
    R8 as r,
    S5 as i,
    SR as a,
    Snt as o,
    aZ as s,
    g8 as c,
    jQ as l,
    oF as u,
    oZ as d,
    pF as f,
    s5 as p,
    sZ as m,
    vR as h,
    wnt as g
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    CTt as _,
    Jk as v,
    bTt as y,
    qk as b
} from "./conversation-small-nmt18uiom3b14vca.js";

function x(e, {
    element: t,
    messageId: n,
    assetPointer: o,
    isCurrentImage: s
}) {
    if (e.config?.sharedConversationId) return () => {};
    let c = t.ownerDocument,
        l = () => {
            let t = C(y(e, n), o),
                r = t == null ? void 0 : a()?.id,
                i = e.serverId$();
            return t != null && r && i ? {
                ...t,
                viewerId: r,
                conversationId: i
            } : void 0
        },
        u = () => {
            let r = i(l);
            r != null && (c.visibilityState !== `visible` || !t.isConnected || !s() || S(e, {
                ...r,
                messageId: n
            }, d))
        };

    function d() {
        f(), c.removeEventListener(`visibilitychange`, u)
    }
    let f = p(l, u, {
        equals: r
    });
    return c.addEventListener(`visibilitychange`, u), u(), d
}

function S(e, {
    viewerId: t,
    ...n
}, r) {
    let i = w(e),
        a = JSON.stringify([t, n.asyncCompletionId == null ? `message` : `async`, n.asyncCompletionId ?? n.messageId]);
    if (i.has(a)) {
        r?.();
        return
    }
    o.logStructuredEvent(`ChatgptImageGenResultViewed`, n) != null && (i.add(a), r?.())
}

function C(e, t) {
    if (e == null || !m(e) || e.metadata?.is_visually_hidden_from_conversation) return;
    let n = e.metadata?.image_gen_delayed != null;
    if (n && !v(e)) return;
    let r = l.getImageAssetPointers(e).find(e => e.asset_pointer === t);
    if (!(r == null || r.metadata?.is_no_auth_placeholder || !d(r))) return {
        asyncCompletionId: e.metadata?.async_completion_id ?? void 0,
        isDelayed: n
    }
}
var w, T = e((() => {
    f(), _(), c(), h(), g(), n(), t(), b(), s(), w = u(() => new Set)
}));
export {
    S as n, x as r, T as t
};
//# sourceMappingURL=62331d8d-fm8h0d1ickf47gpc.js.map