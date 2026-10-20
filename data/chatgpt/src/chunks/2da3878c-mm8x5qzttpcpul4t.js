import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $u as t,
    C8 as n,
    Qu as r,
    fF as i,
    h8 as a,
    iF as o,
    nY as s,
    qJ as c,
    rd as l,
    tY as u
} from "./4813494d-dfpv67hlp00pbohr.js";

function d(e, n) {
    return t(e) ? (c.getParentPromptNode(l(e))?.message.metadata?.vto_product_ids)?.includes(n) === !0 : !1
}

function f(e, t) {
    return t != null && (c.getParentPromptNode(u(e), t)?.message.metadata?.vto_product_ids?.length ?? 0) > 0
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
    i(), r(), a(), s(), m = o(() => n([]))
}));
export {
    m as a, d as i, h as n, f as r, p as t
};
//# sourceMappingURL=2da3878c-mm8x5qzttpcpul4t.js.map