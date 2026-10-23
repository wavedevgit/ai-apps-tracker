import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    CR as n,
    DR as r,
    Knt as i,
    OQ as a,
    Q8 as o,
    Wnt as s,
    Z8 as c,
    dF as l,
    i5 as u,
    iZ as d,
    kQ as f,
    nZ as p,
    rZ as m,
    vF as h,
    y5 as g
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Jk as _,
    Yk as v,
    dTt as y,
    mTt as b
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function x(e, {
    element: t,
    messageId: n,
    assetPointer: i,
    isCurrentImage: a
}) {
    if (e.config?.sharedConversationId) return () => {};
    let s = t.ownerDocument,
        c = () => {
            let t = C(y(e, n), i),
                a = t == null ? void 0 : r()?.id,
                o = e.serverId$();
            return t != null && a && o ? {
                ...t,
                viewerId: a,
                conversationId: o
            } : void 0
        },
        l = () => {
            let r = g(c);
            r != null && (s.visibilityState !== `visible` || !t.isConnected || !a() || S(e, {
                ...r,
                messageId: n
            }, d))
        };

    function d() {
        f(), s.removeEventListener(`visibilitychange`, l)
    }
    let f = u(c, l, {
        equals: o
    });
    return s.addEventListener(`visibilitychange`, l), l(), d
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
    s.logStructuredEvent(`ChatgptImageGenResultViewed`, n) != null && (i.add(a), r?.())
}

function C(e, t) {
    if (e == null || !d(e) || e.metadata?.is_visually_hidden_from_conversation) return;
    let n = e.metadata?.image_gen_delayed != null;
    if (n && !v(e)) return;
    let r = a.getImageAssetPointers(e).find(e => e.asset_pointer === t);
    if (!(r == null || r.metadata?.is_no_auth_placeholder || !m(r))) return {
        asyncCompletionId: e.metadata?.async_completion_id ?? void 0,
        isDelayed: n
    }
}
var w, T = e((() => {
    h(), b(), t(), n(), i(), f(), c(), _(), p(), w = l(() => new Set)
}));
export {
    S as n, x as r, T as t
};
//# sourceMappingURL=62331d8d-n4q80nmfpw16p4gg.js.map