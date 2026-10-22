import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    CR as n,
    DR as r,
    I5 as i,
    Lnt as a,
    OQ as o,
    Q8 as s,
    Z8 as c,
    dF as l,
    iZ as u,
    kQ as d,
    nZ as f,
    rZ as p,
    vF as m,
    x5 as h,
    znt as g
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Jk as _,
    Yk as v,
    gTt as y,
    pTt as b
} from "./conversation-small-dwpaie1hln28efxb.js";

function x(e, {
    element: t,
    messageId: n,
    assetPointer: a,
    isCurrentImage: o
}) {
    if (e.config?.sharedConversationId) return () => {};
    let c = t.ownerDocument,
        l = () => {
            let t = C(b(e, n), a),
                i = t == null ? void 0 : r()?.id,
                o = e.serverId$();
            return t != null && i && o ? {
                ...t,
                viewerId: i,
                conversationId: o
            } : void 0
        },
        u = () => {
            let r = i(l);
            r != null && (c.visibilityState !== `visible` || !t.isConnected || !o() || S(e, {
                ...r,
                messageId: n
            }, d))
        };

    function d() {
        f(), c.removeEventListener(`visibilitychange`, u)
    }
    let f = h(l, u, {
        equals: s
    });
    return c.addEventListener(`visibilitychange`, u), u(), d
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

function C(e, t) {
    if (e == null || !u(e) || e.metadata?.is_visually_hidden_from_conversation) return;
    let n = e.metadata?.image_gen_delayed != null;
    if (n && !v(e)) return;
    let r = o.getImageAssetPointers(e).find(e => e.asset_pointer === t);
    if (!(r == null || r.metadata?.is_no_auth_placeholder || !p(r))) return {
        asyncCompletionId: e.metadata?.async_completion_id ?? void 0,
        isDelayed: n
    }
}
var w, T = e((() => {
    m(), y(), t(), n(), g(), d(), c(), _(), f(), w = l(() => new Set)
}));
export {
    S as n, x as r, T as t
};
//# sourceMappingURL=62331d8d-dd9ez6vuuzdwo4k0.js.map