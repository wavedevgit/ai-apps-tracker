import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Qu as t,
    S5 as n,
    Xu as r,
    fF as i,
    g5 as a,
    g8 as o,
    oF as s,
    pF as c,
    w8 as l
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Adt as u,
    N3 as d,
    P3 as f,
    QFn as p,
    ZFn as m,
    kdt as h,
    oIn as g,
    qFn as _,
    tIn as v
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    n as y,
    t as b
} from "./2f772deb-o1excjo3b8aemp87.js";
import {
    n as x,
    t as S
} from "./512153c2-lziiru1vcfr5fy74.js";

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
    let n = u(t.image.is_proxied_image ? t.image.url : t.image.content_url),
        r = JSON.stringify([t.messageId, n]),
        i = D(e),
        a = i.get(r);
    return a || (a = {
        result$: l({
            products: [],
            categories: [],
            status: `idle`
        }),
        scrollTop$: l(0),
        selectedCategory$: l(null)
    }, i.set(r, a)), a
}
async function E({
    conversation: e,
    sidebar: t,
    locale: r
}) {
    let a = T(e, t),
        o = n(a.result$);
    if (o.status === `loading` || o.status === `done`) return;
    a.controller?.abort();
    let s = new AbortController;
    a.controller = s, a.selectedCategory$.set(null), a.result$.set({
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
        let n = await S(t.image);
        s.signal.throwIfAborted(), performance.measure(`shop-image:image-import`, {
            start: d,
            detail: f
        });
        let o = {
            category: `shop_image`,
            conversation_id: i(e),
            message_id: t.messageId,
            shop_image_params: {
                image: n,
                include_conversation_history: !1
            },
            locale: r
        };
        for await (let e of y({
            requestBody: o,
            signal: s.signal,
            isAuthOptional: !1
        })) s.signal.throwIfAborted(), e.type === `message` && (p || (p = !0, performance.measure(`shop-image:first-message`, {
            start: d,
            detail: f
        })), C(c, e.data.metadata?.content_references ?? [], l), !m && c.size > 0 && (m = !0, performance.measure(`shop-image:first-product`, {
            start: d,
            detail: f
        })), a.result$.set({
            ...u(),
            status: `loading`
        }));
        s.signal.throwIfAborted(), a.result$.set({
            ...u(),
            status: `done`
        }), performance.measure(`shop-image:complete`, {
            start: d,
            detail: f
        })
    } catch {
        a.controller === s && a.result$.set({
            ...u(),
            status: `error`
        })
    } finally {
        clearTimeout(h)
    }
}
var D, O = e((() => {
    c(), b(), h(), x(), w(), o(), D = s(() => new Map)
}));

function k(e, t, r, i) {
    let {
        products: a
    } = n(T(e, t).result$);
    v(e, {
        type: `product_agent`,
        shopImageOrigin: t,
        messageId: t.messageId,
        product: r,
        productIndex: i,
        contentReferenceStartIndex: 0,
        interactionSource: `browse`,
        rewrittenQueries: [...new Set(a.map(e => e.query).filter(Boolean))]
    })
}

function A(e, t) {
    let i = n(() => r(e)).findIndex(e => e.messages.some(e => e.id === t.messageId));
    a(() => {
        d(e).open$({
            rootMessageId: t.messageId,
            originTurnIndex: i,
            wasSidebarOpen: !0,
            shopImageSource: t
        }), _(e)
    })
}

function j(e, t) {
    let {
        history: n
    } = g(e), r = n.indexOf(t);
    r >= 0 ? m(e, r) : v(e, t)
}

function M(e, t) {
    d(e).shopImageSource$() ? _(e) : j(e, t)
}
var N = e((() => {
    t(), p(), f(), O(), o()
}));
export {
    j as a, E as c, k as i, N as n, T as o, A as r, O as s, M as t
};
//# sourceMappingURL=ea63db5c-ohapcltuhj7uilc3.js.map