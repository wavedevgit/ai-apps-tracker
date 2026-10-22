import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $u as t,
    A5 as n,
    A8 as r,
    I5 as i,
    R8 as a,
    Zu as o,
    _F as s,
    dF as c,
    vF as l
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    BIn as u,
    Cdt as d,
    GIn as f,
    I3 as p,
    IIn as m,
    L3 as h,
    LIn as g,
    MIn as _,
    wdt as v
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    n as y,
    t as b
} from "./2f772deb-jae6eed48sj5fgz7.js";
import {
    n as x,
    t as S
} from "./512153c2-d0nz96nedfg5gnrq.js";

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

function T(e, t) {
    let n = v(t.image.is_proxied_image ? t.image.url : t.image.content_url),
        r = JSON.stringify([t.messageId, n]),
        i = D(e),
        o = i.get(r);
    return o || (o = {
        result$: a({
            products: [],
            categories: [],
            status: `idle`
        }),
        scrollTop$: a(0),
        selectedCategory$: a(null)
    }, i.set(r, o)), o
}
async function E({
    conversation: e,
    sidebar: t,
    locale: n
}) {
    let r = T(e, t),
        a = i(r.result$);
    if (a.status === `loading` || a.status === `done`) return;
    r.controller?.abort();
    let o = new AbortController;
    r.controller = o, r.selectedCategory$.set(null), r.result$.set({
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
        h = setTimeout(() => o.abort(), 12e4);
    try {
        let i = await S(t.image);
        o.signal.throwIfAborted(), performance.measure(`shop-image:image-import`, {
            start: d,
            detail: f
        });
        let a = {
            category: `shop_image`,
            conversation_id: s(e),
            message_id: t.messageId,
            shop_image_params: {
                image: i,
                include_conversation_history: !1
            },
            locale: n
        };
        for await (let e of y({
            requestBody: a,
            signal: o.signal,
            isAuthOptional: !1
        })) o.signal.throwIfAborted(), e.type === `message` && (p || (p = !0, performance.measure(`shop-image:first-message`, {
            start: d,
            detail: f
        })), C(c, e.data.metadata?.content_references ?? [], l), !m && c.size > 0 && (m = !0, performance.measure(`shop-image:first-product`, {
            start: d,
            detail: f
        })), r.result$.set({
            ...u(),
            status: `loading`
        }));
        o.signal.throwIfAborted(), r.result$.set({
            ...u(),
            status: `done`
        }), performance.measure(`shop-image:complete`, {
            start: d,
            detail: f
        })
    } catch {
        r.controller === o && r.result$.set({
            ...u(),
            status: `error`
        })
    } finally {
        clearTimeout(h)
    }
}
var D, O = e((() => {
    l(), b(), d(), x(), w(), r(), D = c(() => new Map)
}));

function k(e, t, n, r) {
    let {
        products: a
    } = i(T(e, t).result$);
    u(e, {
        type: `product_agent`,
        shopImageOrigin: t,
        messageId: t.messageId,
        product: n,
        productIndex: r,
        contentReferenceStartIndex: 0,
        interactionSource: `browse`,
        rewrittenQueries: [...new Set(a.map(e => e.query).filter(Boolean))]
    })
}

function A(e, t) {
    let r = i(() => o(e)).findIndex(e => e.messages.some(e => e.id === t.messageId));
    n(() => {
        p(e).open$({
            rootMessageId: t.messageId,
            originTurnIndex: r,
            wasSidebarOpen: !0,
            shopImageSource: t
        }), _(e)
    })
}

function j(e, t) {
    let {
        history: n
    } = f(e), r = n.indexOf(t);
    r >= 0 ? m(e, r) : u(e, t)
}

function M(e, t) {
    p(e).shopImageSource$() ? _(e) : j(e, t)
}
var N = e((() => {
    t(), g(), h(), O(), r()
}));
export {
    j as a, E as c, k as i, N as n, T as o, A as r, O as s, M as t
};
//# sourceMappingURL=ea63db5c-hrxt07ksb3oa6xl3.js.map