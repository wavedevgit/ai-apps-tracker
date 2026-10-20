import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Qu as t,
    S8 as n,
    Zu as r,
    fF as i,
    iF as a,
    m8 as o,
    nY as s,
    nd as c,
    qJ as l,
    tY as u
} from "./4813494d-qsuygr73qjc6rh65.js";

function d(e, n) {
    return t(e) ? (l.getParentPromptNode(c(e))?.message.metadata?.vto_product_ids)?.includes(n) === !0 : !1
}

function f(e, t) {
    return t != null && (l.getParentPromptNode(u(e), t)?.message.metadata?.vto_product_ids?.length ?? 0) > 0
}

function p(e, t) {
    return {
        ...e,
        thinking: t.formatMessage({
            id: `chatgpt.shopping.virtual_try_on.generation.loading.headline`,
            defaultMessage: `Creating image`
        })
    }
}
var m, h = e((() => {
    i(), r(), o(), s(), m = a(() => n([]))
}));
export {
    m as a, d as i, h as n, f as r, p as t
};
//# sourceMappingURL=2da3878c-i1he3lmlvgdhz9sx.js.map