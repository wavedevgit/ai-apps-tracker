import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    B8 as n,
    J6 as r,
    JP as i,
    K8 as a,
    Nu as o,
    VP as s,
    ju as c,
    qP as l
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    BFn as u,
    Cdt as d,
    GFn as f,
    IFn as p,
    LFn as m,
    MFn as h,
    O3 as g,
    Sdt as _,
    k3 as v
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as y,
    t as b
} from "./2f772deb-kk5vhpbk02vww2ym.js";
import {
    n as x,
    t as S
} from "./512153c2-beyt19ecueiod86h.js";

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
    locale: n
}) {
    let r = T(e, t),
        i = a(r.result$);
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
        let a = {
            category: `shop_image`,
            conversation_id: l(e),
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
    i(), b(), _(), x(), w(), t(), D = s(() => new Map)
}));

function k(e, t, n, r) {
    let {
        products: i
    } = a(T(e, t).result$);
    u(e, {
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
    let r = a(() => c(e)).findIndex(e => e.messages.some(e => e.id === t.messageId));
    n(() => {
        g(e).open$({
            rootMessageId: t.messageId,
            originTurnIndex: r,
            wasSidebarOpen: !0,
            shopImageSource: t
        }), h(e)
    })
}

function j(e, t) {
    let {
        history: n
    } = f(e), r = n.indexOf(t);
    r >= 0 ? p(e, r) : u(e, t)
}

function M(e, t) {
    g(e).shopImageSource$() ? h(e) : j(e, t)
}
var N = e((() => {
    o(), m(), v(), O(), t()
}));
export {
    j as a, E as c, k as i, N as n, T as o, A as r, O as s, M as t
};
//# sourceMappingURL=ea63db5c-kmk2dttw10kvzl35.js.map