import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    S8 as t,
    Yu as n,
    Zu as r,
    aF as i,
    b5 as a,
    dF as o,
    fF as s,
    m5 as c,
    m8 as l
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $Fn as u,
    A3 as d,
    Tdt as f,
    YFn as p,
    cIn as m,
    eIn as h,
    j3 as g,
    rIn as _,
    wdt as v
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    n as y,
    t as b
} from "./2f772deb-f3scov9t3z9bxxzw.js";
import {
    n as x,
    t as S
} from "./512153c2-m1q6yodgm711wffo.js";

function C(e, t, n) {
    for (let r of t)
        if (r.type === `products` || r.type === `product_group`) {
            for (let t of r.products ?? []) e.set(t.id, t);
            let t = r.type === `products` ? r.category?.trim() : void 0;
            if (n && t && r.products?.length) {
                let e = n.get(t) ?? new Set;
                for (let t of r.products ?? []) e.add(t.id);
                n.set(t, e)
            }
        } else(r.type === `product` || r.type === `product_entity`) && e.set(r.product.id, r.product)
}
var w = e((() => {}));

function T(e, n) {
    let r = f(n.image.is_proxied_image ? n.image.url : n.image.content_url),
        i = JSON.stringify([n.messageId, r]),
        a = D(e),
        o = a.get(i);
    return o || (o = {
        result$: t({
            products: [],
            categories: [],
            status: `idle`
        }),
        scrollTop$: t(0),
        selectedCategory$: t(null)
    }, a.set(i, o)), o
}
async function E({
    conversation: e,
    sidebar: t,
    locale: n
}) {
    let r = T(e, t),
        i = a(r.result$);
    if (i.status === `loading` || i.status === `done`) return;
    r.controller?.abort();
    let s = new AbortController;
    r.controller = s, r.selectedCategory$.set(null), r.result$.set({
        products: [],
        categories: [],
        status: `loading`
    });
    let c = new Map,
        l = new Map,
        u = () => ({
            products: [...c.values()],
            categories: [...l].map(([e, t]) => ({
                label: e,
                productIds: [...t]
            }))
        }),
        d = performance.now(),
        f = {
            messageId: t.messageId
        },
        p = !1,
        m = !1,
        h = setTimeout(() => s.abort(), 12e4);
    try {
        let i = await S(t.image);
        s.signal.throwIfAborted(), performance.measure(`shop-image:image-import`, {
            start: d,
            detail: f
        });
        let a = {
            category: `shop_image`,
            conversation_id: o(e),
            message_id: t.messageId,
            shop_image_params: {
                image: i,
                include_conversation_history: !1
            },
            locale: n
        };
        for await (let e of y({
            requestBody: a,
            signal: s.signal,
            isAuthOptional: !1
        })) s.signal.throwIfAborted(), e.type === `message` && (p || (p = !0, performance.measure(`shop-image:first-message`, {
            start: d,
            detail: f
        })), C(c, e.data.metadata?.content_references ?? [], l), !m && c.size > 0 && (m = !0, performance.measure(`shop-image:first-product`, {
            start: d,
            detail: f
        })), r.result$.set({
            ...u(),
            status: `loading`
        }));
        s.signal.throwIfAborted(), r.result$.set({
            ...u(),
            status: `done`
        }), performance.measure(`shop-image:complete`, {
            start: d,
            detail: f
        })
    } catch {
        r.controller === s && r.result$.set({
            ...u(),
            status: `error`
        })
    } finally {
        clearTimeout(h)
    }
}
var D, O = e((() => {
    s(), b(), v(), x(), w(), l(), D = i(() => new Map)
}));

function k(e, t, n, r) {
    let {
        products: i
    } = a(T(e, t).result$);
    _(e, {
        type: `product_agent`,
        shopImageOrigin: t,
        messageId: t.messageId,
        product: n,
        productIndex: r,
        contentReferenceStartIndex: 0,
        interactionSource: `browse`,
        rewrittenQueries: [...new Set(i.map(e => e.query).filter(Boolean))]
    })
}

function A(e, t) {
    let r = a(() => n(e)).findIndex(e => e.messages.some(e => e.id === t.messageId));
    c(() => {
        d(e).open$({
            rootMessageId: t.messageId,
            originTurnIndex: r,
            wasSidebarOpen: !0,
            shopImageSource: t
        }), p(e)
    })
}

function j(e, t) {
    let {
        history: n
    } = m(e), r = n.indexOf(t);
    r >= 0 ? u(e, r) : _(e, t)
}

function M(e, t) {
    d(e).shopImageSource$() ? p(e) : j(e, t)
}
var N = e((() => {
    r(), h(), g(), O(), l()
}));
export {
    j as a, E as c, k as i, N as n, T as o, A as r, O as s, M as t
};
//# sourceMappingURL=ea63db5c-eu719a5nekjzreoc.js.map