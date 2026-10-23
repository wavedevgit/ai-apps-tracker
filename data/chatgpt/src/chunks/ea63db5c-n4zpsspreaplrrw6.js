import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $u as t,
    A8 as n,
    R8 as r,
    Zu as i,
    _F as a,
    dF as o,
    p5 as s,
    vF as c,
    y5 as l
} from "./4813494d-mdvd4786a87166cc.js";
import {
    HIn as u,
    I3 as d,
    KIn as f,
    L3 as p,
    XIn as m,
    bdt as h,
    qIn as g,
    tLn as _,
    xdt as v
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    n as y,
    t as b
} from "./2f772deb-m9fsmajg6xos68k3.js";
import {
    n as x,
    t as S
} from "./512153c2-corx5n0x1len7u4o.js";

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
    locale: n
}) {
    let r = T(e, t),
        i = l(r.result$);
    if (i.status === `loading` || i.status === `done`) return;
    r.controller?.abort();
    let o = new AbortController;
    r.controller = o, r.selectedCategory$.set(null), r.result$.set({
        products: [],
        categories: [],
        status: `loading`
    });
    let s = new Map,
        c = new Map,
        u = () => ({
            products: [...s.values()],
            categories: [...c].map(([e, t]) => ({
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
        let l = {
            category: `shop_image`,
            conversation_id: a(e),
            message_id: t.messageId,
            shop_image_params: {
                image: i,
                include_conversation_history: !1
            },
            locale: n
        };
        for await (let e of y({
            requestBody: l,
            signal: o.signal,
            isAuthOptional: !1
        })) o.signal.throwIfAborted(), e.type === `message` && (p || (p = !0, performance.measure(`shop-image:first-message`, {
            start: d,
            detail: f
        })), C(s, e.data.metadata?.content_references ?? [], c), !m && s.size > 0 && (m = !0, performance.measure(`shop-image:first-product`, {
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
    c(), b(), h(), x(), w(), n(), D = o(() => new Map)
}));

function k(e, t, n, r) {
    let {
        products: i
    } = l(T(e, t).result$);
    m(e, {
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
    let n = l(() => i(e)).findIndex(e => e.messages.some(e => e.id === t.messageId));
    s(() => {
        d(e).open$({
            rootMessageId: t.messageId,
            originTurnIndex: n,
            wasSidebarOpen: !0,
            shopImageSource: t
        }), u(e)
    })
}

function j(e, t) {
    let {
        history: n
    } = _(e), r = n.indexOf(t);
    r >= 0 ? f(e, r) : m(e, t)
}

function M(e, t) {
    d(e).shopImageSource$() ? u(e) : j(e, t)
}
var N = e((() => {
    t(), g(), p(), O(), n()
}));
export {
    j as a, E as c, k as i, N as n, T as o, A as r, O as s, M as t
};
//# sourceMappingURL=ea63db5c-n4zpsspreaplrrw6.js.map