import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $u as t,
    F5 as n,
    L8 as r,
    Zu as i,
    _F as a,
    dF as o,
    k5 as s,
    k8 as c,
    vF as l
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    CIn as u,
    Cdt as d,
    F3 as f,
    I3 as p,
    Sdt as m,
    hIn as h,
    mIn as g,
    uIn as _,
    vIn as v
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    n as y,
    t as b
} from "./2f772deb-0zerbzr36ln1j8s6.js";
import {
    n as x,
    t as S
} from "./512153c2-n53vhid0okcdybnc.js";

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
    let n = d(t.image.is_proxied_image ? t.image.url : t.image.content_url),
        i = JSON.stringify([t.messageId, n]),
        a = D(e),
        o = a.get(i);
    return o || (o = {
        result$: r({
            products: [],
            categories: [],
            status: `idle`
        }),
        scrollTop$: r(0),
        selectedCategory$: r(null)
    }, a.set(i, o)), o
}
async function E({
    conversation: e,
    sidebar: t,
    locale: r
}) {
    let i = T(e, t),
        o = n(i.result$);
    if (o.status === `loading` || o.status === `done`) return;
    i.controller?.abort();
    let s = new AbortController;
    i.controller = s, i.selectedCategory$.set(null), i.result$.set({
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
            conversation_id: a(e),
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
        })), i.result$.set({
            ...u(),
            status: `loading`
        }));
        s.signal.throwIfAborted(), i.result$.set({
            ...u(),
            status: `done`
        }), performance.measure(`shop-image:complete`, {
            start: d,
            detail: f
        })
    } catch {
        i.controller === s && i.result$.set({
            ...u(),
            status: `error`
        })
    } finally {
        clearTimeout(h)
    }
}
var D, O = e((() => {
    l(), b(), m(), x(), w(), c(), D = o(() => new Map)
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
    let r = n(() => i(e)).findIndex(e => e.messages.some(e => e.id === t.messageId));
    s(() => {
        f(e).open$({
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
    } = u(e), r = n.indexOf(t);
    r >= 0 ? g(e, r) : v(e, t)
}

function M(e, t) {
    f(e).shopImageSource$() ? _(e) : j(e, t)
}
var N = e((() => {
    t(), h(), p(), O(), c()
}));
export {
    j as a, E as c, k as i, N as n, T as o, A as r, O as s, M as t
};
//# sourceMappingURL=ea63db5c-cxwfkhhn8rub3lnv.js.map