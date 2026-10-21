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
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    $Fn as u,
    Adt as d,
    JFn as f,
    N3 as p,
    P3 as m,
    QFn as h,
    kdt as g,
    nIn as _,
    sIn as v
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    n as y,
    t as b
} from "./2f772deb-lovwlkpfs8jaqjuw.js";
import {
    n as x,
    t as S
} from "./512153c2-pcfgygml0t751ynm.js";

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
    c(), b(), g(), x(), w(), o(), D = s(() => new Map)
}));

function k(e, t, r, i) {
    let {
        products: a
    } = n(T(e, t).result$);
    _(e, {
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
        p(e).open$({
            rootMessageId: t.messageId,
            originTurnIndex: i,
            wasSidebarOpen: !0,
            shopImageSource: t
        }), f(e)
    })
}

function j(e, t) {
    let {
        history: n
    } = v(e), r = n.indexOf(t);
    r >= 0 ? h(e, r) : _(e, t)
}

function M(e, t) {
    p(e).shopImageSource$() ? f(e) : j(e, t)
}
var N = e((() => {
    t(), u(), m(), O(), o()
}));
export {
    j as a, E as c, k as i, N as n, T as o, A as r, O as s, M as t
};
//# sourceMappingURL=ea63db5c-il7b0srlt8iy7nnf.js.map