import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as t,
    $u as n,
    GJ as r,
    L8 as i,
    eY as a,
    ed as o,
    id as s,
    k8 as c,
    uF as l,
    vF as u
} from "./4813494d-itnrgnth03y1sm9d.js";

function d(e, t) {
    return o(e) ? (r.getParentPromptNode(s(e))?.message.metadata?.vto_product_ids)?.includes(t) === !0 : !1
}

function f(e, n) {
    return n != null && (r.getParentPromptNode(t(e), n)?.message.metadata?.vto_product_ids?.length ?? 0) > 0
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
    u(), n(), c(), a(), m = l(() => i([]))
}));
export {
    m as a, d as i, h as n, f as r, p as t
};
//# sourceMappingURL=2da3878c-iv7h7lgkngc5u4om.js.map