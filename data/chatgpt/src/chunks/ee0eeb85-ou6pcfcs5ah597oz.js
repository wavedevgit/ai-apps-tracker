import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    gtt as t,
    itt as n
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    FBn as r,
    IBn as i,
    Q8 as a,
    Z8 as o
} from "./conversation-small-cy5f8pl0g26s86so.js";

function s() {
    if (typeof window > `u`) return null;
    try {
        return window.sessionStorage
    } catch {
        return null
    }
}

function c() {
    let e = s();
    if (e == null) return null;
    let t = e.getItem(p);
    if (t == null) return null;
    try {
        let r = JSON.parse(t);
        return typeof r.asset?.asset_pointer != `string` || r.asset.asset_pointer.length === 0 || r.asset.content_type !== n.ImageAssetPointer || typeof r.asset.width != `number` || typeof r.asset.height != `number` || typeof r.asset.size_bytes != `number` || typeof r.createdAt != `number` || Date.now() - r.createdAt > m ? (e.removeItem(p), null) : r
    } catch {
        return e.removeItem(p), null
    }
}

function l({
    asset: e,
    conversationId: t
}) {
    let n = s();
    n == null || e.asset_pointer.length === 0 || n.setItem(p, JSON.stringify({
        asset: e,
        conversationId: t,
        createdAt: Date.now()
    }))
}

function u() {
    s()?.removeItem(p)
}
async function d({
    intl: e,
    queryClient: t
}) {
    let n = c();
    return n == null ? !1 : (await o({
        intl: e,
        imageUrls: [(await r.fetch(t, {
            asset: n.asset,
            conversationId: n.conversationId,
            downloadIntent: !0
        })).url]
    }), u(), !0)
}
async function f({
    hasPaidSubscription: e,
    intl: t,
    queryClient: n
}) {
    return e ? await d({
        intl: t,
        queryClient: n
    }) : !1
}
var p, m, h = e((() => {
    t(), a(), i(), p = `imagegen_watermark_download_carryover`, m = 1e3 * 60 * 60
}));
export {
    l as n, f as r, h as t
};
//# sourceMappingURL=ee0eeb85-ou6pcfcs5ah597oz.js.map