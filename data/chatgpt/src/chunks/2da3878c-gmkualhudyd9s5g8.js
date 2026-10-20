import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $u as t,
    JJ as n,
    Qu as r,
    aF as i,
    g8 as a,
    nY as o,
    pF as s,
    rY as c,
    rd as l,
    w8 as u
} from "./4813494d-bo7e0c29ngt4zgx0.js";

function d(e, r) {
    return t(e) ? (n.getParentPromptNode(l(e))?.message.metadata?.vto_product_ids)?.includes(r) === !0 : !1
}

function f(e, t) {
    return t != null && (n.getParentPromptNode(o(e), t)?.message.metadata?.vto_product_ids?.length ?? 0) > 0
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
    s(), r(), a(), c(), m = i(() => u([]))
}));
export {
    m as a, d as i, h as n, f as r, p as t
};
//# sourceMappingURL=2da3878c-gmkualhudyd9s5g8.js.map