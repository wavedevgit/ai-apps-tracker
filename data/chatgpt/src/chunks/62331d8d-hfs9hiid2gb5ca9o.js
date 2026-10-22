import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CR as t,
    DR as n,
    F5 as r,
    Int as i,
    OQ as a,
    Rnt as o,
    X8 as s,
    Z8 as c,
    b5 as l,
    dF as u,
    iZ as d,
    k8 as f,
    kQ as p,
    nZ as m,
    rZ as h,
    vF as g
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Jk as _,
    Yk as v,
    gTt as y,
    yTt as b
} from "./conversation-small-m08q51xmfe7gjq3d.js";

function x(e, {
    element: t,
    messageId: i,
    assetPointer: a,
    isCurrentImage: o
}) {
    if (e.config?.sharedConversationId) return () => {};
    let s = t.ownerDocument,
        u = () => {
            let t = C(y(e, i), a),
                r = t == null ? void 0 : n()?.id,
                o = e.serverId$();
            return t != null && r && o ? {
                ...t,
                viewerId: r,
                conversationId: o
            } : void 0
        },
        d = () => {
            let n = r(u);
            n != null && (s.visibilityState !== `visible` || !t.isConnected || !o() || S(e, {
                ...n,
                messageId: i
            }, f))
        };

    function f() {
        p(), s.removeEventListener(`visibilitychange`, d)
    }
    let p = l(u, d, {
        equals: c
    });
    return s.addEventListener(`visibilitychange`, d), d(), f
}

function S(e, {
    viewerId: t,
    ...n
}, r) {
    let a = w(e),
        o = JSON.stringify([t, n.asyncCompletionId == null ? `message` : `async`, n.asyncCompletionId ?? n.messageId]);
    if (a.has(o)) {
        r?.();
        return
    }
    i.logStructuredEvent(`ChatgptImageGenResultViewed`, n) != null && (a.add(o), r?.())
}

function C(e, t) {
    if (e == null || !d(e) || e.metadata?.is_visually_hidden_from_conversation) return;
    let n = e.metadata?.image_gen_delayed != null;
    if (n && !v(e)) return;
    let r = a.getImageAssetPointers(e).find(e => e.asset_pointer === t);
    if (!(r == null || r.metadata?.is_no_auth_placeholder || !h(r))) return {
        asyncCompletionId: e.metadata?.async_completion_id ?? void 0,
        isDelayed: n
    }
}
var w, T = e((() => {
    g(), b(), f(), t(), o(), p(), s(), _(), m(), w = u(() => new Set)
}));
export {
    S as n, x as r, T as t
};
//# sourceMappingURL=62331d8d-hfs9hiid2gb5ca9o.js.map