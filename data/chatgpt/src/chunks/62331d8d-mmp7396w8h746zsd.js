import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    Btt as n,
    Htt as r,
    JP as i,
    K8 as a,
    MX as o,
    NX as s,
    PX as c,
    QL as l,
    VP as u,
    aQ as d,
    c8 as f,
    iQ as p,
    j8 as m,
    nR as h,
    s8 as g
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Hk as _,
    Uk as v,
    fTt as y,
    hTt as b
} from "./conversation-small-fym1zmu9zimymmm1.js";

function x(e, {
    element: t,
    messageId: n,
    assetPointer: r,
    isCurrentImage: i
}) {
    if (e.config?.sharedConversationId) return () => {};
    let o = t.ownerDocument,
        s = () => {
            let t = C(y(e, n), r),
                i = t == null ? void 0 : h()?.id,
                a = e.serverId$();
            return t != null && i && a ? {
                ...t,
                viewerId: i,
                conversationId: a
            } : void 0
        },
        c = () => {
            let r = a(s);
            r != null && (o.visibilityState !== `visible` || !t.isConnected || !i() || S(e, {
                ...r,
                messageId: n
            }, l))
        };

    function l() {
        u(), o.removeEventListener(`visibilitychange`, c)
    }
    let u = m(s, c, {
        equals: f
    });
    return o.addEventListener(`visibilitychange`, c), c(), l
}

function S(e, {
    viewerId: t,
    ...r
}, i) {
    let a = w(e),
        o = JSON.stringify([t, r.asyncCompletionId == null ? `message` : `async`, r.asyncCompletionId ?? r.messageId]);
    if (a.has(o)) {
        i?.();
        return
    }
    n.logStructuredEvent(`ChatgptImageGenResultViewed`, r) != null && (a.add(o), i?.())
}

function C(e, t) {
    if (e == null || !c(e) || e.metadata?.is_visually_hidden_from_conversation) return;
    let n = e.metadata?.image_gen_delayed != null;
    if (n && !v(e)) return;
    let r = p.getImageAssetPointers(e).find(e => e.asset_pointer === t);
    if (!(r == null || r.metadata?.is_no_auth_placeholder || !s(r))) return {
        asyncCompletionId: e.metadata?.async_completion_id ?? void 0,
        isDelayed: n
    }
}
var w, T = e((() => {
    i(), b(), t(), l(), r(), d(), g(), _(), o(), w = u(() => new Set)
}));
export {
    S as n, x as r, T as t
};
//# sourceMappingURL=62331d8d-mmp7396w8h746zsd.js.map