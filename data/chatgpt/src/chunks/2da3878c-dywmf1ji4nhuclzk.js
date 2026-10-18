import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AJ as t,
    B6 as n,
    BP as r,
    J6 as i,
    JP as a,
    Nu as o,
    Pu as s,
    Ru as c,
    kJ as l,
    xJ as u
} from "./4813494d-cb22y2w19zwyshmt.js";

function d(e, t) {
    return s(e) ? (u.getParentPromptNode(c(e))?.message.metadata?.vto_product_ids)?.includes(t) === !0 : !1
}

function f(e, t) {
    return t != null && (u.getParentPromptNode(l(e), t)?.message.metadata?.vto_product_ids?.length ?? 0) > 0
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
    a(), o(), n(), t(), m = r(() => i([]))
}));
export {
    m as a, d as i, h as n, f as r, p as t
};
//# sourceMappingURL=2da3878c-dywmf1ji4nhuclzk.js.map