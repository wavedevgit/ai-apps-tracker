import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as t,
    $u as n,
    A8 as r,
    GJ as i,
    R8 as a,
    eY as o,
    ed as s,
    id as c,
    uF as l,
    vF as u
} from "./4813494d-d7xm9wsvhdfbag9a.js";

function d(e, t) {
    return s(e) ? (i.getParentPromptNode(c(e))?.message.metadata?.vto_product_ids)?.includes(t) === !0 : !1
}

function f(e, n) {
    return n != null && (i.getParentPromptNode(t(e), n)?.message.metadata?.vto_product_ids?.length ?? 0) > 0
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
    u(), n(), r(), o(), m = l(() => a([]))
}));
export {
    m as a, d as i, h as n, f as r, p as t
};
//# sourceMappingURL=2da3878c-khqaiao0kxeiu2qq.js.map